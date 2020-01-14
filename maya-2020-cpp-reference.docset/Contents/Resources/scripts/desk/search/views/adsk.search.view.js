// Search view.
(function($, UTILS) {

    $.widget('adsk.searchview', {
        options: {
            config: undefined
        },

        /* Private members. */

        _create: function() {
            console.log('searchview: _create');

            this._render();
            this._addEventHandlers();
        },

        _printContentFilterWidgets: function() {
            var o = this.options.config.searchOptions;
            var stringContent = '';
            for (var ifilter = 0; ifilter < o.contentFilters.length; ifilter++)
            {
                var thisFilter = o.contentFilters[ifilter];
                stringContent += '<label>' +
                                 '<input type="checkbox" name="search-contentFilter_' + thisFilter.id + '">' +
                                 thisFilter.label + '</label>';
            }
            return stringContent;
        },

        _render: function() {
            console.log('searchview: _render');

            var caps = this.options.config.labels.search,
				opt = this.options.config.searchOptions;

            // Create markup.
            var html =  '<div class="block-preloader hidden"/>' +
                        '<div class="content">' +
                            this._renderSearchBar() +
                            '<h2 id="search-options-title" class="search-title accordion closed">' +
                                caps.searchOptions +
                            '</h2>' +
                            '<div id="search-options" class="search-options closed">' + /* add\remove collapsed */
                                '<h3 class="search-options-title">' +
                                    caps.searchInFilesFor +
                                '</h3>' +

								this._renderSearchOptionControl(true, caps.anyWord, 'radio', 'search-method', 'or') +
								this._renderSearchOptionControl(true, caps.allWords, 'radio', 'search-method', 'and') +
								this._renderSearchOptionControl(true, caps.phrase, 'radio', 'search-method', 'phrase') +

                                '<h3 class="search-options-title">' +
                                	caps.otherOptions +
                                '</h3>' +

								this._renderSearchOptionControl(opt.caseSensitiveSwitch, caps.ignoreCase, 'checkbox', 'search-case-sensitive') +
								this._renderSearchOptionControl(opt.wholeWordsSwitch, caps.exactWords, 'checkbox', 'search-whole-words') +
								this._renderSearchOptionControl(true, caps.highlightWords, 'checkbox', 'search-highlight') +

                                '<h3 class="search-options-title">' +
                                 caps.contentFilters +
                                '</h3>' +

                                 this._printContentFilterWidgets() +

                            '</div>' + /* search options */
                            '<ul id="search-results" class="search-resuts"></ul>' +
                       '</div>';

            this.element.html(html);

            this._$results              = this.element.find('#search-results');
            this._$searchOptions        = this.element.find('#search-options');
            this._$searchOptionsTitle   = this.element.find('#search-options-title');
            this._$preloader            = this.element.find('.block-preloader');
            this._$searchbar            = this.element.find('#search-bar');
            this._$searchinput          = this.element.find('#search-input');

            // Apply default options.
            this._applyDefaultSearchOptions();
        },

		_renderSearchOptionControl: function(enabled, label, type, name, value) {
			var input = "";

			if (enabled == true) {
				input = '<label>' +
                        	'<input ' +
								this._getAttributeMarkup('type', type) + ' ' +
								this._getAttributeMarkup('name', name) + ' ' +
								this._getAttributeMarkup('value', value) +
							'/>' + label +
                        '</label>';
			}

			return input;
		},

		_getAttributeMarkup: function(name, value) {
			var attr = "";
			if (value !== "") {
				attr = name + '="' + value + '"';
			}
			return attr;
		},

        _renderSearchBar: function() {
            var html = '';

            if (this.options.config.ui.tabs.searchEnabled) {
                html += '<div id="search-bar" class="search">' +
                           '<div class="wrapper">' +
                               '<a href="#" class="button icon search" id="search-button"></a>' +
                               '<div class="search-field">' +
                                   '<input id="search-input" type="text" name="search-input" class="search-input" placeholder="' +
                                       this.options.config.labels.search.searchInHelpFor +
                                   '">' +
                               '</div>' +
                           '</div>' +
                        '</div>';
            }

            return html;
        },

        /*
            Example:

            caseInsensitiveEnabled: true
            caseSensitiveSwitch: true
            highlightEnabled: true
            searchInThisBook: true
            searchMethod: "or"
            searchStopWords: "stop-words.js"
            wholeWordsEnabled: false
            wholeWordsSwitch: true
        */
        _applyDefaultSearchOptions: function() {
            console.log('searchview: _applyDefaultSearchOptions');

            var o = this.options.config.searchOptions;

            // Search method.
            this._$searchOptions.find('input[value="' + o.searchMethod + '"]').prop('checked', true);

            // Other options.
            this._$searchOptions.find('input[name="search-case-sensitive"]').prop('checked', o.caseInsensitiveEnabled);
            this._$searchOptions.find('input[name="search-whole-words"]').prop('checked', o.wholeWordsEnabled);
            this._$searchOptions.find('input[name="search-highlight"]').prop('checked', o.highlightEnabled);
                    for (var ifilter = 0; ifilter < o.contentFilters.length; ifilter++)
            {
                var thisFilter = o.contentFilters[ifilter];
                this._$searchOptions.find('input[name="search-contentFilter_' + thisFilter.id + '"]').prop('checked', thisFilter.enabled);
            }
        },

        _addEventHandlers: function() {
            console.log('searchview: _addEventHandlers');

            var self = this;

            self._on('.search-title.accordion', {
                click: function(event, ui) {
                    event.stopPropagation();

                    var $target = $(event.target);

                    $target.toggleClass('closed').next().toggleClass('closed');
                }
            });

            // Add search field event handlers.

            function doSearch(value) {
                console.log('appview: doSearch, value: [', value, ']');

                if (value !== '') {
                    self._trigger('dosearch', {}, value);
                }
            }

            self._on(self._$searchinput, {
                keyup: function(event) {
                    if (event.keyCode == 13) {
                        doSearch(self._$searchinput.val());
                    }
                }
            });

            self._on('#search-button', {
                click: function(event) {
                    doSearch(self._$searchinput.val());
                }
            });
        },

        _renderResults: function(list) {
            var items_html = '';

            if (list && $.isArray(list) && list.length >= 1) {
                // create layout
                $.each(list, function(count, item) {
                    items_html += '<li class="search-result-li">' +
                                    '<div class="search-result-item">' +
                                        '<a class="search-result-item-link" href="#!/url=' +
                                        item.href +
                                        '" title="' +
                                        item.title +
                                        '">' +
                                            '<h3 class="search-result-item-heading">' +
                                                item.title +
                                            '</h3>' +
                                            '<p class="search-result-item-desc">' +
                                                item.description +
                                            '</p>' +
                                        '</a>' +
                                    '</div>' +
                                  '</li>';
                });
            }

            this._$results.empty();
            this._$results.html(items_html);
        },

        /* Public members. */

        displayProgress: function(progress) {
            console.debug('Progress: ', progress);
        },

        displayResults: function(listOfResults) {
            console.debug('Results: ', listOfResults);
            this._renderResults(listOfResults);
        },

        closeSearchOptions: function() {
            this._$searchOptions.addClass('closed');
            this._$searchOptionsTitle.addClass('closed');
        },

        showPreloader: function() {
            console.log('searchview: showPreloader');

            this._$preloader.removeClass('hidden').show();
        },

        hidePreloader: function() {
            console.log('searchview: hidePreloader');

            this._$preloader.fadeOut();
        },

        getActualSearchOptions: function() {
            console.log('searchview: getActualSearchOptions');

            var so = this.options.config.searchOptions,
                $so = this._$searchOptions;

            so.searchMethod = $so.find('input[name="search-method"]:checked').val();
            so.caseInsensitiveEnabled = $so.find('input[name="search-case-sensitive"]').prop('checked');
            so.highlightEnabled = $so.find('input[name="search-highlight"]').prop('checked');
            so.wholeWordsEnabled = $so.find('input[name="search-whole-words"]').prop('checked');

                        for (var ifilter = 0; ifilter < so.contentFilters.length; ifilter++)
            {
                var thisFilter = so.contentFilters[ifilter];
                thisFilter.enabled = this._$searchOptions.find('input[name="search-contentFilter_' + thisFilter.id + '"]').prop('checked');
            }
            return so;
        }
    });

})(jQuery);