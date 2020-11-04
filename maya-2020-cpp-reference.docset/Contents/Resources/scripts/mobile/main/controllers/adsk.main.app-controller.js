// App controller.
(function($, UTILS) {
	$.widget('adsk.appcontroller', {
		options: {
		    config: {},
            defaultPageId: 'topic',
            targetId: 'browser',
            controllers: undefined,
            viewControllers: undefined,
            tocDataConsumers: undefined,
            orientationData: undefined,
            searchRootData: undefined
		},

        /* Private members. */

		_view: undefined,

		_create: function() {
		    console.log('appcontroller: _create');

            // Initialize rooting with hashbang.
            this._addHashchangeHandler();

		    this._createView();

		    // Hide main preloader after all initialization complete.
            this._togglePreloader();
		},

		_processHashAtStartup: function() {
		    console.log('appcontroller: _processHashAtStartup');

            var hash = '',
                search = location.search;

            if (location.hash == '' && search.indexOf('?') == 0) {
                hash = search.replace(/\?/, '#!/');
            } else {
                hash = location.hash;
            }

            this._processHash(hash);
        },

		_createView: function() {
            console.log('appcontroller: createView');

            // Create app view.
            var selector = '#'.concat(this.options.targetId);

            $(selector).appview({
                create:             $.proxy(this._viewCreateHandler, this),
                orientationchange:  $.proxy(this._handleDeviceOrientation, this),
                resize:             $.proxy(this._resize, this)
            });
		},

		_viewCreateHandler: function(event, orientationData) {
		    console.log('appcontroller: _viewCreateHandler, ');

		    this._view = $(event.target).appview("instance");

		    this.options.orientationData = orientationData;

            // Create controllers.
            this._createControllers();

            // TEST
            this._processHashAtStartup();

            // Resize.
            this._resize(event, orientationData);

            // Open default page (topic, navigation, search etc.).
            this._makePageCurrentById(this.options.defaultPageId);
		},

		_createControllers: function() {
		    console.log('appcontroller: _createControllers');

            // Init controllers.
            var viewControllers = this.options.viewControllers = {},
                tocConsumers    = this.options.tocDataConsumers = {},
                controllers     = this.options.controllers = {};

            tocConsumers.favoritesController = viewControllers.favoritesController = $.adsk.favoritescontroller();

            tocConsumers.topicController = viewControllers.topicController = $.adsk.topiccontroller({
                showpage:               $.proxy(this._handleShowPage, this),
                back:                   $.proxy(this._backToPreviousPage, this),
                defaultTopicHref:       this.options.config.defaultPage,
                opentopic:              $.proxy(this._handleOpentopic, this),
                favoritesController:    viewControllers.favoritesController,
                setsuggestiondata:      $.proxy(this._handleSetSuggestionData, this),
                orientationData:        this.options.orientationData
            });

            // TODO: use config to specify default tab.
            tocConsumers.navigationController = viewControllers.navigationController = $.adsk.navigationcontroller({
                defaultTab: 'toc',
                showpage:   $.proxy(this._handleShowPage, this),
                back:       $.proxy(this._backToPreviousPage, this),
                opentopic:  $.proxy(this._handleOpentopic, this),
                closepage:  $.proxy(this._handleCloseSearchResultPage, this),
                setsuggestiondata: $.proxy(this._handleSetSuggestionData, this),
                controllers: {
                    favoritesController: viewControllers.favoritesController
                }
            });

            // Create search controller and observe its events.
            tocConsumers.searchController = viewControllers.searchController = $.adsk.searchcontroller({
                back:                   $.proxy(this._backToPreviousPage, this),
                showsearchresult:       $.proxy(this._showSearchResultPage, this),
                orientationData:        this.options.orientationData
            });

            tocConsumers.searchResultController = viewControllers.searchResultController = $.adsk.searchresultcontroller({
                back:               $.proxy(this._backToPreviousPage, this),
                orientationData:    this.options.orientationData
            });

            controllers.tocController = $.adsk.tocdatacontroller({
                indexed: $.proxy(this._setTocData, this)
            });
		},

		_handleShowPage: function(event, data) {
		    console.log('appcontroller: _handleShowPage');

            this._makePageCurrentById(data.id);
        },

        _makePageCurrentById: function(id) {
             console.log('appcontroller: _makePageCurrentById, ', id);

             this._view.makePageCurrentById(id);

             // Refresh navigation.
             if (id === 'navigation') {
                 this.options.viewControllers.navigationController.refresh();
             }
        },

		_insertHeadMetadata: function() {
		    console.log('appcontroller: _insertHeadMetadata');

            // Get rid of browser URL and button bars.
            UTILS.insertMeta('apple-mobile-web-app-capable', 'yes');

            // Set iOS status bar color to black.
            UTILS.insertMeta('apple-mobile-web-app-status-bar-style', 'black');
		},

		_setTocData: function(event, data) {
		    console.log('appcontroller: _setTocData');

            $.each(this.options.tocDataConsumers, function(index, controller) {
                if (controller.setTocData) {
                    controller.setTocData(data);
                }
            });

            // Let's try to show default topic content.
            this._processHashAtStartup();
        },

        _resize: function(event, orientationData) {
            console.log('appcontroller: _resize');

            // Invoke view controllers resize.
            $.each(this.options.viewControllers, function(index, controller) {
                if (controller.resize) {
                    controller.resize(orientationData);
                }
            });
        },

        _handleDeviceOrientation: function(event, data) {
            console.log('appcontroller: _handleDeviceOrientation');

            // Change layout only if orientation actually changed.
            var orientationData = this.options.orientationData;

            if (data.orientation !== orientationData.orientation) {
                orientationData = data;
            }

            this._resize({}, orientationData);
        },

        _handleOpentopic: function(event, data) {
            console.log('appcontroller: _handleOpentopic, data = ', data);

            // Change location hash to open provided topic.
            if (data === undefined || data.href === undefined || data.href == '') {
                return;
            }

            var hash = (data.href);
            this._setHash('#!/url=' + data.href);

            // Show topic view.
            this._makePageCurrentById('topic');
        },

        _handleSetSuggestionData: function(event, data) {
            console.log('appcontroller: _handleSetSuggestionData');

            this.options.searchRootData = data.type;
            this.options.viewControllers.searchController.setSearchData(data);
        },

        _handleCloseSearchResultPage: function(event, id) {
            console.log('appcontroller: _handleCloseSearchResultPage');
            this.options.viewControllers.searchResultController.closeSearchResultPage();
        },

        _showSearchResultPage: function(event, data) {
            console.log('appcontroller: _handleOpenSearchResult');

            var searchRootData = this.options.searchRootData;
            this.options.viewControllers.searchResultController.processingSearchResults(searchRootData, data.term);
            this._makePageCurrentById(data.id);
        },

        _backToPreviousPage: function() {
            console.log('appcontroller: _backToPreviousPage');

            this._view.backToPreviousPage();
        },

		// Show/hide main preloader.
		_togglePreloader: function() {
		    console.log('appcontroller: _togglePreloader');

            $(document.body).toggleClass('loading');
        },

        _addHashchangeHandler: function() {
            console.log('appcontroller: _addHashchangeHandler');

            // Listen to hash change.
            if ('onhashchange' in window) {
                $(window).on('hashchange', $.proxy(this._handleHashchange, this));
            } else {
                setInterval(this._checkHash, 400);
            }
        },

        _handleHashchange: function(event, data) {
            console.log('appcontroller: _handleHashchange');
            var newHash = location.hash;
            this._processHash(newHash);
        },

        _checkHash: function() {
            console.log('appcontroller: _checkHash');

        },

        _processHash: function(hash) {
            console.log('appcontroller: _processHash, ', hash);

            if (!hash || hash == '') {
                // Load default topic.
                this._handleOpentopic({}, {
                    href: this.options.config.defaultPage
                });
            }

            // If hash starts with hashbang, crop it off.
            var url = this._fetchUrlFromHash(hash);

            if (!url || url == '') {
                // Do nothing.
                return;
            }

            this._processUrl(url);
        },

        _fetchUrlFromHash: function(hash) {
            console.log('appcontroller: _fetchUrlFromHash');

            var url = '';

            if (hash.indexOf('#!') == 0) {
                url = hash.substring(2);
            } else if (hash[0] == '#') {
                url = hash.substring(1);
            } else {
                url = hash;
            }

            return url;
        },

        _processUrl: function(url) {
            console.log('appcontroller: _processUrl: ', url);

            if (url.indexOf('/url=') == 0) {
                // Resolve internal path.
                this._resolveUrl(url);
            }
        },

        _resolveUrl: function(url) {
            console.log('appcontroller: _resolveUrl: ', url);

            var href = url.substring('/url='.length);

            if (!href || href == '') {
                return;
            }

            // Load topic content.
            this.options.viewControllers.topicController.openTopic({
                href: href
            });
        },

        _setHash: function(hash) {
            console.log('appcontroller: _setHash: ', hash);

            if (!hash || hash == '') {
                return;
            }

            if (hash[0] != '#') {
                return;
            }

            location.hash = hash;
        }

        /* Public members. */

    });
})(jQuery, ADSK.UTILS);