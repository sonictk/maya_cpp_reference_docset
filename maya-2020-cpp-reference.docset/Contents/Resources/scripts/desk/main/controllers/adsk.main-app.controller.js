// App controller.
(function ($) {
    $.widget('adsk.appcontroller', {
        options: {
            config: {
                productFullName: '',

                ui: {
                    tabs: {
                        order: [
                            'C','I','S','F'
                        ],
                        tocEnabled: true,
                        indexEnabled: true,
                        favoritesEnabled: true,
                        searchEnabled: true
                    },

                    tools: {
                        order: ['home', 'previous', 'parent', 'following', 'separator',
                                'favorites', 'share', 'separator', 'print'],
                        home: true,
                        previous: true,
                        parent: true,
                        following: true,
                        favorites: true,
                        share: true,
                        print: true
                    },

                    responsive: true
                },

                features: {
                    tabsbarParent: 'banner',
                    banner: true,
                    header: true,
                    toolbar: true,
                    breadcrumbs: true,
                    tabsbar: true,
                    navigation: true,
                    splitter: true
                }
            },
            targetId: 'browser',
            viewControllers: {},
            toc: {},
            defaultTopicData: undefined,
            urlParams: undefined
        },

        /* Private members. */

        _view: undefined,
        _defTopicReady: new $.Deferred(),
        _defTocReady: new $.Deferred(),
        _defContextIdsReady: new $.Deferred(),

        _create: function () {
            console.log('appcontroller: _create');

            var self = this;

            this._setupPolyfills();

            $.when(this._defTopicReady, this._defTocReady, this._defContextIdsReady).done(function() {
                self._addHashchangeHandler();

                // Go to default topic page if there was no hash data specified by the user.
                if (location.hash == '') {
                    var href = self.options.defaultTopicData.attr.href;

                    if (self.options.urlParams !== undefined &&
                        self.options.urlParams.length > 0) {

                        var p = self.options.urlParams;

                        // Process contextId query.
                        if (p['contextId'] !== undefined &&
                            p['contextId'] !== '' ) {

                                // Open specified topic.
                                var id = decodeURIComponent(p['contextId']).toUpperCase(),
                                    contextIdHref = self.options.config.contextIds[id];

                                if (contextIdHref !== undefined && contextIdHref != '') {
                                    href = './'.concat(contextIdHref);
                                }
                        }
                    }

                    // Go to topic page.
                    self._handleOpentopic({}, { href: href });
                } else {
                    $(window).trigger('hashchange');
                }
            });

            this._checkUrlParameters();

            this._createView();

            this._createControllers();

            // Hide main preloader.
            this._view.hidePreloader();

            // Load context id data.
            this._loadContextIdData();

            // Load and process TOC data.
            this._loadAndProcessTOC();
        },

        _setupPolyfills: function() {
            $('html').addClass($.fn.details.support ? 'details' : 'no-details');
        },

        _checkUrlParameters: function() {
            console.log('appcontroller: _checkUrlParameters');

            this.options.urlParams = $.getUrlVars();

            if (this.options.urlParams !== undefined && this.options.urlParams.length > 0) {
                var p = this.options.urlParams,
                    features = this.options.config.features,
                    tabs = this.options.config.ui.tabs;

                if (p['panels'] !== undefined && p['panels'] == 'no') {
                    // Turn off all UI features.
                    features.banner = false;
                    features.navigation = false;
                    features.splitter = false;
                    features.breadcrumbs = false;

                    // Turn off all navigation tabs too.
                    tabs.tocEnabled = false;
                    tabs.indexEnabled = false;
                    tabs.favoritesEnabled = false;
                    tabs.searchEnabled = false;
                }
            }
        },

        _createView: function () {
            console.log('appcontroller: _createView');

            var self = this;

            $('#' + this.options.targetId).appview({
                title: this.options.config.productFullName,

                features: this.options.config.features,

                ui: this.options.config.ui,

                labels: this.options.config.labels,

                create: function (event) {
                    self._view = $(this).appview('instance');
                },

                buttonclick: function (event, id) {
                    id = id.substring('main-'.length);
                    var handlerName = '_' + id + 'ButtonclickHandler';
                    self[handlerName](event);
                },

                tabbuttonclick: function (event, id) {
                    self._view.showTab(id.substring('tab-button-'.length));
                }
            });
        },

        _createControllers: function () {
            console.log('appcontroller: _createControllers');

            var config = this.options.config,
                controllers = this.options.viewControllers,
                self = this;

            self._createTocController(self, config, controllers);
            self._createFavoritesDataController(config, controllers);
            self._createTopicController(self, config, controllers);
            self._createIndexController(self, config, controllers);
            self._createFavoritesController(self, config, controllers);
            self._createSearchController(self, config, controllers);
        },

        _createTocController: function(self, config, controllers) {
            // Create TOC view controller.
            if (config.ui.tabs.tocEnabled) {
                controllers.tocController = $.adsk.toccontroller({
                    config: config,

                    opentopic: function (event, data) {
                        self._handleOpentopic(event, data);
                    }
                });
            }
        },

        _createFavoritesDataController: function(config, controllers) {
            // Create favorites controller.
            if (config.ui.tabs.favoritesEnabled) {
                controllers.favoritesController = $.adsk.favoritescontroller();
            }
        },

        _createTopicController: function(self, config, controllers) {
            // Create topic view controller.
            $.adsk.topiccontroller({
                searchOptions: config.searchOptions,

                favoritesController: controllers.favoritesController,

                create: function() {
                    controllers.topicController = $(this).topiccontroller("instance");
                },

                // Called when topic view are ready to render topic.
                ready: function() {
                    self._defTopicReady.resolve();
                },

                initgotopreviousbutton: function (event, data) {
                    self._view.initGoToPreviousButton(data.enabled);
                },

                initgotoparentbutton: function (event, data) {
                    self._view.initGoToParentButton(data.enabled);
                },

                initgotonextbutton: function (event, data) {
                    self._view.initGoToNextButton(data.enabled);
                },

                initfavoritesbutton: function (event, data) {
                    self._view.initFavoritesButton(data.enabled);
                },

                setupbreadcrumbs: function(event, data) {
                    self._view.updateBreadcrumbs(data.breadcrumbs, self.options.defaultTopicData);
                },

                setuptoc: function(event, data) {
                    if (self.options.config.ui.tabs.tocEnabled) {
                        self.options.viewControllers.tocController.toggleSelectedTocTopic(data);
                    }
                },

                opentopic: function (event, data) {
                    self._handleOpentopic(event, data);
                },

                flagfavorites: function(event, data) {
                    self._view.flagFavorites(data.added);

                    if (controllers.favoritestabController) {
                        controllers.favoritestabController.refresh();
                    }
                }
            });
        },

        _createIndexController: function(self, config, controllers) {
            // Create index view controller.
            if (config.ui.tabs.indexEnabled) {
                controllers.indexController = $.adsk.indexcontroller({
                    opentopic: function (event, data) {
                        self._handleOpentopic(event, data);
                    }
                });
            }
        },

        _createFavoritesController: function(self, config, controllers) {
            // Create favorites view controller.
            if (config.ui.tabs.favoritesEnabled) {
                controllers.favoritesTabController = $.adsk.favoritestabcontroller({
                    favoritesController: controllers.favoritesController,

                    labels: this.options.config.labels.favorites,

                    opentopic: function (event, data) {
                        self._handleOpentopic(event, data);
                    }
                });
            }
        },

        _createSearchController: function(self, config, controllers) {
             // Create search view controller.
            if (config.ui.tabs.searchEnabled) {
                $.adsk.searchtabcontroller({
                    config: this.options.config,

                    create: function() {
                        controllers.searchTabController = $(this).searchtabcontroller("instance");
                    },

                    ready: function() {
                        if (self.options.urlParams !== undefined &&
                            self.options.urlParams.length > 0) {

                            var p = self.options.urlParams;

                            if (p['query'] !== undefined &&
                                p['query'] !== '' &&
                                p['panels'] == undefined) {
                                    // Process search query.
                                    controllers.searchTabController.doSearch(decodeURIComponent(p['query']), self);
                                    controllers.searchTabController.closeSearchOptions();
                                    self._view.showTab('search');
                            }

                        }
                    },

                    highlight: function(event, searchOptions) {
                        if (searchOptions && searchOptions.searchQuery) {
                            controllers.topicController.highlightQuery(searchOptions);
                        }
                    },

                    dosearch: function(event) {
                        self._view.showTab('search');
                    }
                });
            }
        },

        _loadAndProcessTOC: function () {
            console.log('appcontroller: _loadAndProcessTOC');

            var controllers = this.options.viewControllers,
                tabs = this.options.config.ui.tabs;

            var tocRootNodesDataProcessor = $.adsk.tocdataprocessor({
                progress: function (event, data) {
                    console.debug('TOC root nodes data processing progress: ', data.percent);
                },

                indexed: $.proxy(function (event, toc) {
                    console.debug('TOC root nodes data indexed: ', toc);

                    if (tabs.tocEnabled) {
                        controllers.tocController.setTocRootNodesData(toc);
                    }
                }, this)
            });

            var tocRootNodesDataLoader = $.adsk.tocdataloader({
                config: this.options.config,

                file: 'treeRootData',

                event: 'register-toc-root-node-data',

                loaded: function (event, data) {
                    if (tabs.tocEnabled) {
                        tocRootNodesDataProcessor.setBookTocData(data);
                    }
                }
            });

            // Load TOC root nodes data.
            tocRootNodesDataLoader.loadTocData();

            var tocDataProcessor = $.adsk.tocdataprocessor({
                progress: function (event, data) {
                    console.log('TOC data processing progress: ', data.percent);
                },

                indexed: $.proxy(function (event, toc) {
                    console.log('TOC data indexed: ', toc);

                    this._setTocData(toc);

                    controllers.topicController.setTocData(toc);

                    if (tabs.searchEnabled) {
                        controllers.searchTabController.setTocData(toc);
                    }

                    if (tabs.tocEnabled) {
                        controllers.tocController.setTocData(toc.tocData);
                        controllers.tocController.renderToc();
                    }

                    if (tabs.favoritesEnabled) {
                        controllers.favoritesController.setTocData(toc);
                        controllers.favoritesTabController.refresh();
                    }
                }, this)
            });

            var tocDataLoader = $.adsk.tocdataloader({
                config: this.options.config,

                file: 'treeData',

                event: 'register-toc-data',

                loaded: function (event, data) {
                    tocDataProcessor.setBookTocData(data);
                }
            });

            // Load TOC data.
            tocDataLoader.loadTocData();
        },

        _loadContextIdData: function() {
            console.log('appcontroller: _loadContextIdData');

            var self = this;

            // Load context id data.
            var contextIdDataLoader = $.adsk.contextiddataloader({
                config: self.options.config,

                loaded: function (event, data) {
                    $.extend(self.options.config.contextIds, data.bookData);

                    if (data._loadedData == data._totalData) {
                        self._defContextIdsReady.resolve();
                    }
                }
            });

            contextIdDataLoader.loadContextIdData();
        },

        _setTocData: function (data) {
            console.log('appcontroller: _setTocData');

            this.options.toc = data;

            // Set default topic data.
            this.options.defaultTopicData = this._getDefaultTopicData();

            // Show breadcrumbs.
            this._view.updateBreadcrumbs([], this.options.defaultTopicData);

            this._defTocReady.resolve();
        },


        _getDefaultTopicData: function () {
            console.log('appcontroller: _getDefaultTopicData, ');

            var rootTopicData,
               config = this.options.config;

            if (config.defaultPage !== '') {
                rootTopicData = {
                    // TODO: default topic title through config.
                    data: "Home",
                    attr: {
                        href: config.defaultPage,
                        // TODO: description through config.
                        desc: ""
                    }
                }
            } else if (this.options.toc && this.options.toc.tocData) {
                // Try to use first topic data from root and component books TOC data as a default.
                $.each(this.options.toc.tocData, function(bookName, bookTocData) {
                    if (bookTocData[0]) {
                        rootTopicData = bookTocData[0];
                        // break
                        return false;
                    }
                });
            }

            return rootTopicData;
        },


        _handleOpentopic: function (event, data) {
            console.log('appcontroller: _handleOpentopic');

            // Change location hash to open provided topic.
            if (data === undefined || data.href === undefined || data.href == '') {
                return;
            }

            this._setHash('#!/url=' + data.href);
        },

        _addHashchangeHandler: function () {
            console.log('appcontroller: _addHashchangeHandler');

            var self = this;

            // Listen to hash change.
            if ('onhashchange' in window) {
                $(window).on('hashchange', function (event) {
                    self._handleHashchange(event);
                });
            } else {
                setInterval($.proxy(self._handleHashchange, this), 400);
            }
        },

        _handleHashchange: function (event, data) {
            console.log('appcontroller: _handleHashchange');

            var newHash = location.hash;

            this._processHash(newHash);
        },

        _processHash: function (hash) {
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

        _fetchUrlFromHash: function (hash) {
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

        _processUrl: function (url) {
            console.log('appcontroller: _processUrl: ', url);

            if (url.indexOf('/url=') == 0) {
                // Resolve internal path.
                this._resolveUrl(url);
            }
        },

        _resolveUrl: function (url) {
            console.log('appcontroller: _resolveUrl: ', url);

            var href = url.substring('/url='.length);

            if (!href || href == '') {
                return;
            }

            // Load topic content.
            var data = {
                href: href
            };

            this.options.viewControllers.topicController.openTopic(data);
        },

        _setHash: function (hash) {
            console.log('appcontroller: _setHash: ', hash);

            if (!hash || hash == '') {
                return;
            }

            if (hash[0] != '#') {
                return;
            }

            location.hash = hash;
        },

        _homeButtonclickHandler: function (event) {
            console.log('appcontroller: _homeButtonclickHandler');

            // Open default topic.
            this._handleOpentopic({}, {
                href: this.options.config.defaultPage
            });
        },

        _previousButtonclickHandler: function (event) {
            console.log('appcontroller: _previousButtonclickHandler');

            this.options.viewControllers.topicController.openPreviousTopic();
        },

        _parentButtonclickHandler: function (event) {
            console.log('appcontroller: _parentButtonclickHandler');

            this.options.viewControllers.topicController.openParentTopic();
        },

        _followingButtonclickHandler: function (event) {
            console.log('appcontroller: _followingButtonclickHandler');

            this.options.viewControllers.topicController.openFollowingTopic();
        },

        _favoritesButtonclickHandler: function (event) {
            console.log('appcontroller: _favoritesButtonclickHandler');

            var controllers = this.options.viewControllers;

            controllers.topicController.addOrRemoveTopicFromFavorites();
            controllers.favoritesTabController.refresh();
        },

        _shareButtonclickHandler: function (event) {
            console.log('appcontroller: _shareButtonclickHandler');

            var controller = this.options.viewControllers.shareController;

            if (!controller) {
                controller = this.options.viewControllers.shareController = $.adsk.sharecontroller({
                    //opentopic: $.proxy(this._handleOpentopic, this)
                });
            }

            controller.refresh();
            controller.showShareMenu();
        },

        _printButtonclickHandler: function (event) {
            console.log('appcontroller: _printButtonclickHandler');

            window.print();
        }

        /* Public members. */

    });
})(jQuery);