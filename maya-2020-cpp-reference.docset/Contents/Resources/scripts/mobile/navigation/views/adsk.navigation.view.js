// Main app menu view (jQuery UI widget).
(function($, UTILS) {
	$.widget('adsk.navigationview', {
		options: {
            activeTabId: 'toc'
		},

        // Content tabs ('toc-tab', 'tree-tab', 'index-tab', 'favorites-tab').
        $tabs: undefined,
        $content: undefined,
        $toolbar: undefined,

		_create: function() {
		    console.log('navigationview: _create');

			// Render view.
			this._render();

			// TODO: Add event responders.
			this._addEventHandlers();
		},

		_render: function() {
		    console.log('navigationview: _render');

            var $e = this.element;

		    // Create topic view markup.
            $e.html(['<header class="toolbar drop-shadow">',
                        '<div class="column left">',
                            '<a href="#" id="nav-resume" class="button command">',
                                '<div class="frame">Resume</div>',
                            '</a>',
                            '<a href="#" id="nav-search" class="search button icon"/>',
                        '</div>',

                        '<div class="column center"></div>',

                        '<div class="column right">',
                            '<a href="#" id="nav-toc" class="button tab left">',
                                '<div class="frame">',
                                    '<div class="toc icon"/>',
                                '</div>',
                            '</a>',
                            '<a href="#" id="nav-tree" class="button tab middle">',
                                '<div class="frame">',
                                    '<div class="tree icon"/>',
                                '</div>',
                            '</a>',
                            '<a href="#" id="nav-index" class="button tab middle">',
                                '<div class="frame">' +
                                    '<div class="index icon"/>',
                                '</div>',
                            '</a>',
                            '<a href="#" id="nav-favorites" class="button tab right">',
                                '<div class="frame">',
                                    '<div class="favorites icon"/>',
                                '</div>',
                            '</a>',
                        '</div>',
                    '</header>',

                    '<div class="content">',
                        '<div id="tab-toc" class="content-tab opened">',
                        '</div>',
                        '<div id="tab-tree" class="content-tab">',
                        '</div>',
                        '<div id="tab-index" class="content-tab">',
                        '</div>',
                        '<div id="tab-favorites" class="content-tab">',
                        '</div>',
                    '</div>'].join(''));

            // Store jQuery objects for later use.
            this.$toolbar = $e.find('.toolbar');
            var $c = this.$content = $e.find('.content');
            this.$tabs = [
                $c.children('#tab-toc'),
                $c.children('#tab-tree'),
                $c.children('#tab-index'),
                $c.children('#tab-favorites'),
            ];

            // Set content container height.
            this._setContentHeight();

            // Set default active tab button.
            this.openTabById(this.options.activeTabId);
		},

		_setContentHeight: function() {
		    console.log('navigationview: _setContentHeight');

            var height = $(document).height() - this.$toolbar.height();
		    this.$content.css('height', height + 'px');
		},

		_handleToolbarButtonTouchStart: function(event) {
		    event.preventDefault();
            event.stopPropagation();

            $(this).addClass("tapped");
		},

		_handleToolbarButtonTouchEnd: function(event) {
		    console.log('navigationview: _handleToolbarButtonTouchEnd');

		    event.preventDefault();
            event.stopPropagation();

            var $button = $(event.currentTarget);

            // Get rid of tap highlighting.
            $button.removeClass('tapped');

            // Process tap on tab button.
            if ($button.hasClass('tab') && !($button.hasClass('active'))) {
                var tabId = $button.attr('id').substring('nav-'.length);
                this.openTabById(tabId);
            }

            // Trigger 'buttontap' custom event.
            this._trigger('buttontap', event, $button.attr('id'));
		},

		_addEventHandlers: function() {
		    console.log('navigationview: _addEventHandlers');

            var $toolbar = this.$toolbar;

            // Add look to all tapped buttons.
            $toolbar.find('.button')
            .on('touchstart', $.proxy(this._handleToolbarButtonTouchStart, this))
            .on('touchend', $.proxy(this._handleToolbarButtonTouchEnd, this));
        },

        openTabById: function(tabId) {
            console.log('navigationview: openTabById: ' + tabId);

            // Deactivate previous selected tab button.
            $(this.element).find('.active').removeClass('active');

            // Activate selected tab button.
            var $tabButton = $(this.element).find('#nav-' + tabId);
            $tabButton.addClass('active');

            // Hide previous tab.
             $(this.element).find('.opened').removeClass('opened');

            // Show current tab.
            var $tabContent = $(this.element).find('#tab-' + tabId);
            $tabContent.addClass('opened');
        },

        resize: function() {
            // Set content container height.
            this._setContentHeight();
        }
	});
})(jQuery);