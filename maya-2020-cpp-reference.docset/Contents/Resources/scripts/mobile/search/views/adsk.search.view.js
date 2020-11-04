// Search view (jQuery UI widget).
(function($) {
	$.widget('adsk.searchview', {
		options: {

		},

		$toolbar:       undefined,
		$input:         undefined,
		$content:       undefined,
		$suggestions:   undefined,

		/* Private memebers. */

		_create: function() {
            console.log('searchview: _create');

			// Render view.
			this._render();
			
			// Handle UI events.
			this._addEventHandlers();

		},
		
		_render: function() {
            console.log('searchview: _render');

            // Create markup.
            this.element
            .html([ '<header class="toolbar drop-shadow">',
                        '<div class="column left">',
                            '<a href="#" id="search-context" class="button tab left active">',
                                '<div class="frame">',
                                    '<div class="context icon"></div>',
                                '</div>',
                            '</a>',
                            '<a href="#" id="search-beehive" class="button tab right">',
                                '<div class="frame">' +
                                    '<div class="beehive icon"></div>',
                                '</div>',
                            '</a>',
                        '</div>',

                        '<div class="column center">',
                            '<div class="search-query">',
                                '<button type="button" id="search-button" class="search button icon" tabindex="-1"></button>',
                                '<input type="search" placeholder="Search..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="search-query" class="search" name="q" value=""/>',
                            '</div>',
                        '</div>',

                        '<div class="column right">',
                            '<a href="#" id="search-cancel" class="button command">',
                                '<div class="frame">Cancel</div>',
                            '</a>',
                        '</div>',
                    '</header>',

                    '<div class="content">',
                        '<div id="tab-context" class="content-tab opened">',
                            '<div id="suggestion-view"></div>',
                        '</div>',
                        '<div id="tab-beehive" class="content-tab"></div>',
                    '</div>' ].join(''));

            // Cache jQuery objects for later use.
            this.$toolbar       = this.element.find('.toolbar');
            this.$input         = this.$toolbar.find('#search-query');
            this.$button        = this.$toolbar.find('button');
            this.$content       = this.element.find('.content');
            this.$suggestions   = this.$content.find('#suggestion-view');
		},

		_addEventHandlers: function() {
            console.log('searchview: _addEventHandlers');

            // Add toolbar buttons event handlers.
            this.$toolbar.find('.button')
                .on('touchstart', $.proxy(this._handleToolbarButtonTouchstart, this))
                .on('touchend', $.proxy(this._handleToolbarButtonTouchend, this));

            // Add search input field event handlers.
            this.$input.on('focusin', $.proxy(this._handleSearchInputFocusIn, this));
            this.$input.on('keyup', $.proxy(this._handleSearchInputKeyup, this));
        },

		_handleToolbarButtonTouchstart: function(event) {
		    console.log('searchview: _handleToolbarButtonTouchstart');

		    event.preventDefault();
            event.stopPropagation();

            // Highlight tapped button.
            $(event.delegateTarget).addClass("tapped");
		},

		_handleToolbarButtonTouchend: function(event) {
		    console.log('searchview: _handleToolbarButtonTouchend');

		    event.preventDefault();
            event.stopPropagation();

            var $button = $(event.delegateTarget),
                buttonId = $button.attr('id');

            if (buttonId === 'search-cancel'){
                this._trigger('clearelementvalue', event, this.$input);
                this._trigger('clearsuggestions', event);
            } else if ($button.hasClass('tab') && !($button.hasClass('active'))) {
                // Process tap on tab button.
                var tabId = buttonId.substring('search-'.length);
                this.openTabById(tabId);
            } else if (buttonId === 'search-button') {
                var target = this.$input.get(0);

                this._handleSubmitSearchForm(event, target);
            }

            // Remove button highlight.
            $button.removeClass('tapped');

            // Trigger 'buttontap' custom event.
            this._trigger('buttontap', event, $button.attr('id'));
		},

        _handleSubmitSearchForm: function(event, target) {
            console.log('searchview: _handleSubmitSearchForm');
            var searchTerm = target.value;

            target.blur();
            this._trigger('clearelementvalue', event, target);
            this._trigger('clearsuggestions', event);
            this._trigger('submitsearchform', event, {term:searchTerm})
        },

        _handleSearchInputFocusIn: function(event) {
		    console.log('searchview: _handleSearchInputFocusIn');

            event.stopPropagation();
            event.preventDefault();
            event.target.focus();
		},

		_handleSearchInputKeyup: function(event) {
		    console.log('searchview: _handleSearchInputKeyup');
            event.stopPropagation();
            event.preventDefault();

            var target = event.target,
                keyCode = event.keyCode,
                searchTerm = target.value;

            if(keyCode == 13){
                this._handleSubmitSearchForm(event, target);
            } else{
                if (searchTerm.length >= 1) {
                    this._trigger('loadsuggestion', event, searchTerm);
                } else{
                    this._trigger('clearsuggestions', event);
                }
            }
		},

        /* Public members. */

        changeSearchValue: function(searchTerm){
            console.log('searchview: changeSearchValue');

            var event;
            this.$input.val(searchTerm);
            if (searchTerm.length >= 1) {
                this._trigger('loadsuggestion', event, searchTerm);
            }
            this.$input.focus();
        },

        openTabById: function(tabId) {
            console.log('searchview: openTabById: ' + tabId);

            // Deactivate previous selected tab button.
            $(this.element).find('.active').removeClass('active');

            // Activate selected tab button.
            var $tabButton = $(this.element).find('#search-' + tabId);
            $tabButton.addClass('active');

            // Hide previous tab.
            $(this.element).find('.opened').removeClass('opened');

            // Show current tab.
            var $tabContent = $(this.element).find('#tab-' + tabId);
            $tabContent.addClass('opened');
        },

        resize: function() {
            console.log('searchview: resize');

            // Set content container height.
            var height = this.document.height() - this.$toolbar.height();
            this.$content.css('height', height + 'px');
        },

        createBeehiveSearchPanel: function() {
            console.log('searchview: _beehiveSearchFrameworkInitHandler');

            new SearchPanel({
                target: $('#tab-beehive'),

                ready: function(element) {
                    var component = this;

                    component.evt.on('itemSelected', function(data) {
                        var url;

                        if (data.caasurl) {
                            url = "caas.html?" + $.param({
                                url:    data.caasurl,
                                l:      Boot.Config.meta.language
                            });
                        } else if (data.url) {
                            url = data.url;
                            var parsedURL = URI.parse(url);

                            if (parsedURL.host === "www.youtube.com" && parsedURL.queryKey.v) {
                                url = "http://www.youtube.com/embed/" + parsedURL.queryKey.v;
                            }
                        }

                        if (url) {
                            window.open(url, '_blank');
                        }
                    });

                    component.evt.on('searchComplete', function() {
                        console.log('searchComplete');
                        component.content.searchResults.selectFromIndex(0);
                    });

                    component.contentReady.done(function() {
                        var uri = URI.parse(window.location.href);

                        if (uri.queryKey.query) {
                            $(element).find('.query input').val(uri.queryKey.query);
                            component.doSearch();
                        }
                    });
                }
            });
        }

	});
})(jQuery);