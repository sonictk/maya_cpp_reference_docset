// Main app view.
(function($, UTILS) {

    $.widget('adsk.appview', {
        options: {
            title: 'Book Title',

            minNavigationWidth: 320,

            ui: {
                tabs: {
                    order: ['C', 'I', 'S', 'F'],
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

                responsive: true,

				textDirection: 'rtl'
            },

            features: {
                tabsbarParent: 'banner',
                banner: true,
                header: true,
                navigation: true,
                splitter: true,
                breadcrums: true,
                splitter: true
            },

            labels: {
                tabs: {
                }
            }
        },

        /* Private members. */

        _$banner:       undefined,
        _$main:         undefined,
        _$breadcrumbs:  undefined,
        _$splitter:     undefined,
        _$navigation:   undefined,
        _$topic:        undefined,

        _splitterTracking:                  false,
        _splitterMoved:                     false,
        _splitterOriginalX:                 undefined,
        _navigationOriginalWidth:           undefined,
        _topicOriginalWidth:                undefined,
        _navigationOpenedWidth:             undefined,
        _topicOriginalMargin: 	            undefined,
		_dirSign: 							1,
		_dirTopicMarginProperty: 			'margin-left',

        _create: function() {
            console.log('appview: _create');

            var self = this;

            // Show "print" button only when functionality supported.
            if (!window.print) {
                this.options.ui.tools.print = false;
            }

			// Determine text direction.
			if ($('html').attr('dir') == 'rtl') {
				this.options.ui.textDirection = 'rtl';
				this._dirSign = -1;
				this._dirTopicMarginProperty = 'margin-right';
			} else {
				this.options.ui.textDirection = 'ltr';
				this._dirSign = 1;
				this._dirTopicMarginProperty = 'margin-left';
			}

            // Create layout.
            this._render();

            // Initial resize.
            this._resizeHandler();
            this._resizeTabButtons();

            // Perform transition.
            this._$main.transition();

            // Add event handlers.
            this._addEventHandlers(self);

            // Initial app resize.
            this._resizeHandler();

            // Show UI.
            this.element.removeClass('hidden');
        },

        _addEventHandlers: function(self) {
            // Add app resize handler.
            $(window).bind('resize', function() {
                self._resizeHandler();
            });

            self._addViewEventHandlers(self);
        },

        _addViewEventHandlers: function(self) {
            console.log('appview: _addEventHandlers');

            // IE7 hover/active fallback.
            if ($('html').hasClass('ie7') || $('html').hasClass('ie8')) {
                $('a')
                .mousedown(function() {
                    $(this).addClass('active');
                })
                .mouseup(function() {
                    $(this).removeClass('active');
                })
                .mouseenter(function() {
                    $(this).addClass('hover');
                })
                .mouseleave(function() {
                    $(this).removeClass('hover');
                });
            }

            // Add toolbar buttons tab bar links handlers.
            self._on('.button', {
                click: "_handleToolbarButtonClick"
            });

            // Add tab bar links handlers.
            self._on('.tab-button', {
                click: "_handleTabButtonClick"
            });

            // Splitter event handlers.
            self._on(this._$splitter, {
                mousedown: "_splitterMouseDownHandler",
                mouseup: function() {
                    // Toggle pane.
                    if (this._splitterMoved == false) {
                        this._toggleNavigationPane();
                    }
                }
            });

            self._on({
                mousemove: "_splitterMouseMoveHandler",
                mouseup: function() {
                    this._splitterTracking = false;
                    this.element.removeClass('no-user-select');
                }
            });
        },

        _toggleNavigationPane: function() {
            var navigationPaneWidth = this._$navigation.width();

            if (navigationPaneWidth > 0) {
                // Remember current width.
                this._navigationOpenedWidth = navigationPaneWidth;

                // Collapse navigation pane.
                var newTopicMargin = this._topicOriginalMargin - navigationPaneWidth;

                // Resize panes.
                this._resizeSplitPanes(0, 0, 0, 0, newTopicMargin);

                // Hide navigation pane.
                this._$navigation.css('visibility', 'hidden');
            } else {
                // Show navigation pane.
                this._$navigation.css('visibility', 'visible');

                // Open navigation pane.
                var newNavigationPaneWidth = this._navigationOpenedWidth,
                    newTopicMargin = this._topicOriginalMargin + newNavigationPaneWidth;

                this._resizeSplitPanes(0, 0, newNavigationPaneWidth, 0, newTopicMargin);
            }
        },

        _splitterMouseDownHandler: function(event) {
            this._splitterMoved = false;

            // Set up splitter.
            this._splitterOriginalX = event.clientX;
            this._navigationOriginalWidth = this._$navigation.width();
            this._topicOriginalWidth = this._$topic.width();
            this._topicOriginalMargin = parseInt(this._$topic.css(this._dirTopicMarginProperty), 10);

            // Prevent user select.
            this.element.addClass('no-user-select');

            // Acgtivate splitter tracking if pane is not collapsed.
            if (this._navigationOriginalWidth > 0) {
                this._splitterTracking = true;
            }
        },

        _splitterMouseMoveHandler: function(event) {
            this._splitterMoved = true;

            if (this._splitterTracking) {
                // Track splitter.
                var topicWidth = this._$topic.width(),
                    navigationWidth = this._$navigation.width(),
                    deltaX = this._dirSign * (event.clientX - this._splitterOriginalX),
                    minNavigationWidth = this.options.minNavigationWidth;

                if ((deltaX < 0 && navigationWidth > this.options.minNavigationWidth) ||
                    (deltaX > 0 && topicWidth > 0)) {
                    // Resize panes.
                    var newNavigationWidth = this._navigationOriginalWidth + deltaX,
                        newTopicMargin = this._topicOriginalMargin + deltaX,
                        newTopicWidth = this._topicOriginalWidth - deltaX;

                    this._resizeSplitPanes(minNavigationWidth, 0, newNavigationWidth, newTopicWidth, newTopicMargin);

                }
            }
        },

        _resizeSplitPanes: function(minNavigationWidth, minTopicWidth, newNavigationWidth, newTopicWidth, newTopicMargin) {
            if (newNavigationWidth < minNavigationWidth) {
                var delta = minNavigationWidth - newNavigationWidth;
                newNavigationWidth += delta;
                newTopicMargin += delta;
            } else if (newTopicWidth < minTopicWidth) {
                var delta = -(minTopicWidth - newTopicWidth);
                newNavigationWidth += delta;
                newTopicMargin += delta;
            }

            this._$navigation.width(newNavigationWidth);
            this._$topic.css(this._dirTopicMarginProperty, newTopicMargin + 'px');

            this._resizeTabButtons();
        },

        _resizeTabButtons: function() {
            // Stretch tab buttons for non-responsive UI.
            var tabButtons = this._$navigation.find('.tab-button'),
                tabButtonsLen = tabButtons.length;

            // Resize tab buttons if all of them are within navigation pane (non-responsive UI).
            if (tabButtonsLen) {
                var navWidth = this._$navigation.width();
                tabButtons.css('width', Math.floor(navWidth / tabButtons.length)  + 'px');

                // Show tab icons navigation pane is wide enough.
                if (navWidth >= 600) {
                    this._$navigation.addClass('wide');
                } else {
                    this._$navigation.removeClass('wide');
                }
            }
        },

        _render: function() {
            console.log('appview: _render');

            // Create app view markup.
            this.element
            .html(this._renderBanner() +
                  '<div id="main">' +
                    this._renderNavigation() +
                    this._renderSplitter() +
                    '<div id="topic"></div>' +
                  '</div>' +
                  this._renderBreadcrumbs() +
                  '<div id="share" class="hidden"></div>');

            var e = this.element;
            this._$banner       = e.find('#banner');
            this._$main         = e.find('#main');
            this._$splitter     = e.find('#splitter');
            this._$navigation   = e.find('#navigation');
            this._$tabsbar   = this._$navigation.find('.tabsbar');
            this._$topic        = e.find('#topic');
            this._$breadcrumbs  = e.find('#breadcrumbs');
        },

        _renderBanner: function() {
            console.log('appview: _renderBanner');

            var html = ''

            if (this.options.features.banner) {
                html +=  '<div id="banner">' +
                            this._renderHeader() +
                            this._renderToolbar();

                if (this.options.features.tabsbarParent == 'banner') {
                    html += this._renderTabsBar();
                }

                html += '</div>';
            }

            return html;
        },

        _renderToolbar: function() {
            var html = '<div class="toolbar"><div class="wrapper">',
                tabs = this.options.ui.tabs,
                tools = this.options.ui.tools;

            $.each(tools.order, function(index, tool) {
                switch(tool) {
                    case 'separator':
                        html += '<span class="separator"></span>';
                        break;
                    case 'home':
                        if (tools.home) {
                            html += '<a href="#" id="main-home" class="button icon home"></a>';
                        }
                        break;
                    case 'previous':
                        if (tools.previous) {
                            html += '<a href="#" id="main-previous" class="button icon previous"></a>';
                        }
                        break;
                    case 'parent':
                        if (tools.parent) {
                            html += '<a href="#" id="main-parent" class="button icon parent"></a>';
                        }
                        break;
                    case 'following':
                        if (tools.following) {
                            html += '<a href="#" id="main-following" class="button icon following"></a>';
                        }
                        break;
                    case 'favorites':
                        if (tabs.favoritesEnabled && tools.favorites) {
                            html += '<a href="#" id="main-favorites" class="button icon favorites"></a>';
                        }
                        break;
                    case 'share':
                        if (tools.share) {
                            html += '<a href="#" id="main-share" class="button icon share"></a>';
                        }
                        break;
                    case 'print':
                        if (tools.print) {
                            html += '<a href="#" id="main-print" class="button icon print"></a>';
                        }
                        break;
                }
            });

            html += '</div></div>';

            return html;
        },

        _renderTabsBar: function() {
            var that = this,
                html = '<div class="tabsbar"><div class="wrapper">',
                tabs = this.options.ui.tabs,
                caps = this.options.labels.tabs,
                pos = 0;

            $.each(tabs.order, function(index, tab) {
                switch(tab) {
                    case 'C':
                        if (tabs.tocEnabled) {
                            html += that._renderTabsBarButton('tab-button-toc', caps.contents, pos);
                            ++pos;
                        }
                        break;
                    case 'I':
                        if (tabs.indexEnabled) {
                            html += that._renderTabsBarButton('tab-button-index', caps.index, pos);
                            ++pos;
                        }
                        break;
                    case 'S':
                        if (tabs.searchEnabled) {
                            html += that._renderTabsBarButton('tab-button-search', caps.search, pos);
                            ++pos;
                        }
                        break;
                    case 'F':
                        if (tabs.favoritesEnabled) {
                            html += that._renderTabsBarButton('tab-button-favorites', caps.favorites, pos);
                            ++pos;
                        }
                        break;
                }
            });

            html += '</div></div>';

            return html;
        },

        _renderTabsBarButton: function (id, label, pos) {
            var html = '',
                classes = 'tab-button';

            if (pos == 0) {
                classes += ' opened';
            }

            html += '<a id="' + id + '" class="' + classes + '" href="#">' +
                        '<span>' + label + '</span>' +
                    '</a>';

            return html;
        },

        _renderNavigation: function() {
            console.log('appview: _renderNavigation');

            var html = '',
                position = 0,
                that = this,
                features = this.options.features,
                tabs = this.options.ui.tabs;

            if (features.navigation) {
                html += '<div id="navigation">';

                if (this.options.features.tabsbarParent == 'navigation') {
                    html += this._renderTabsBar();
                }

                $.each(tabs.order, function(index, tab) {
                    switch(tab) {
                        case 'C':
                            if (tabs.tocEnabled) {
                                html += that._renderNavigationTab('tab-toc', position);
                                ++position;
                            }
                            break;
                        case 'I':
                            if (tabs.indexEnabled) {
                                html += that._renderNavigationTab('tab-index', position);
                                ++position;
                            }
                            break;
                        case 'S':
                            if (tabs.searchEnabled) {
                                html += that._renderNavigationTab('tab-search', position);
                                ++position;
                            }
                            break;
                        case 'F':
                            if (tabs.favoritesEnabled) {
                                html += that._renderNavigationTab('tab-favorites', position);
                                ++position;
                            }
                            break;
                    }
                });

                html += '</div>';

            } else {
                this.element.addClass('no-navigation');
            }
            return html;
        },

        _renderNavigationTab: function(id, position) {
            var html = '<div id="' + id + '" class = "tab';

            // Only first tab should be visible.
            if (position > 0) {
                html += ' hidden'
            }

            html += '"></div>';

            return html;
        },

        _renderSplitter: function() {
            console.log('appview: _renderSplitter');

            if (this.options.features.navigation) {
                return '<div id="splitter"></div>';
            } else {
                return '';
            }
        },

        _renderBreadcrumbs: function() {
            console.log('appview: _renderBreadcrumbs');

            if (this.options.features.breadcrumbs) {
                return '<div id="breadcrumbs"></div>';
            } else {
                return '';
            }
        },

        _renderHeader: function() {
            console.log('appview: _renderHeader');

            if (this.options.features.header) {
                return  '<div class="header">' +
                            '<div class="wrapper">' +
                                '<a class="title" href="#">' +
                                    '<img class="product-title" src="images/product-title.png"/>' +
                                    '<span>' + this.options.title + '</span>' +
                                '</a>' +
                            '</div>' +
                        '</div>';
            } else {
                return '';
            }
        },

        _handleToolbarButtonClick: function(event) {
            console.log('appview: _handleToolbarButtonClick');

            event.preventDefault();
            event.stopPropagation();

            var $target = $(event.target);

            if (!$target.hasClass('disabled') && $target.attr('id').indexOf('main') != -1) {
                this._trigger('buttonclick', event, $target.attr('id'));
            }
        },

        _handleTabButtonClick: function(event) {
            console.log('appview: _handleTabButtonClick');

            event.preventDefault();
            event.stopPropagation();

            var $target = $(event.currentTarget);

            if (!$target.hasClass('disabled')) {
                this._trigger('tabbuttonclick', event, $target.attr('id'));
            }
        },

        _showTabButtonById: function(id) {
            var tabButtons = this._$navigation.find('.tab-button'),
                targetButton = tabButtons.filter(id);

            if (tabButtons.length) {
                tabButtons.removeClass('opened');
                targetButton.addClass('opened');
            }
        },

        _getShareButtonOffset: function() {
            console.log('appview: _getShareButtonOffset');

        },

        _resizeHandler: function() {
            console.log('appview: _resizeHandler');

            var $window = $(window);

            // Resize according to a new app height.
            var height = $window.height() - this._$banner.height() - this._$breadcrumbs.height();
            this._$main.css('height', height + 'px');

            // Resize according to a new app width.
            if (this.options.ui.responsive) {
                var width = $window.width();
                if (width > 768) {
                    // Full viewport view.
                    $(document.body).removeClass('snap');
                } else {
                    // Snap view.
                    $(document.body).addClass('snap');
                }
            } else {
                this._$navigation.find('.tab').css('height', height - this._$tabsbar.height() + 'px');
            }
        },

        _constructBreadcrumbHtml: function(breadcrumb) {
            console.log('appview: _constructBreadcrumbHtml');

            return '<li>' +
                      '<a href="#!/url=' + breadcrumb.href + '">' +
                        breadcrumb.title +
                      '</a>' +
                   '</li>' +
                   '&rarr;';
        },

        /* Public members. */

        showPreloader: function() {
            console.log('appview: showPreloader');

            $(document.body).addClass('loading');
        },

        hidePreloader: function() {
            console.log('appview: hidePreloader');

            $(document.body).removeClass('loading');
        },

        initGoToPreviousButton: function(enabled) {
            console.log('appview: initGoToPreviousButton');

            if (enabled) {
                this._$banner.find('#main-previous').removeClass('disabled');
            } else {
                this._$banner.find('#main-previous').addClass('disabled');
            }
        },

        initGoToParentButton: function(enabled) {
            console.log('appview: initGoToParentButton');

            if (enabled) {
                this._$banner.find('#main-parent').removeClass('disabled');
            } else {
                this._$banner.find('#main-parent').addClass('disabled');
            }
        },

        initGoToNextButton: function(enabled) {
            console.log('appview: initGoToNextButton');

            if (enabled) {
                this._$banner.find('#main-following').removeClass('disabled');
            } else {
                this._$banner.find('#main-following').addClass('disabled');
            }
        },

        initFavoritesButton: function(enabled) {
            console.log('appview: initFavoritesButton');

            if (enabled) {
                this._$banner.find('#main-favorites').removeClass('disabled');
            } else {
                this._$banner.find('#main-favorites').addClass('disabled');
            }
        },

        getShareButtonOffset: function() {
            console.log('appview: getShareButtonOffset');

            var offset = this.element.find('#main-share').offset();

            return offset;
        },

        showTab: function(id) {
            console.log('appview: showTab');

            var tabSelector = '#tab-' + id,
                tabButtonSelector = '#tab-button-' + id,
                tabToShow = this._$navigation.find(tabSelector),
                tabs = this._$navigation.children('.tab');

            this._showTabButtonById(tabButtonSelector);

            if (tabToShow.length > 0 && tabToShow.hasClass('hidden')) {
                // Hide all tabs.
                tabs.addClass('hidden').attr('style', '');

                // Show selected tab.
                tabToShow.transition().removeClass('hidden');

                // Recalculate tab height.
                this._resizeHandler();

                // Go to current topic in TOC.
                if (tabToShow.attr('id') == 'tab-toc') {
                    //this.expandToc(tabToShow);
                    //this.scrollTocToSelectedTopic(tabToShow);
                }
            } else {
                console.log('appview: error: tab with id ' + id + ' not found.');
            }
        },

        // Flag if topic is in Favorites or not.
        flagFavorites: function(addedToFavorites) {
            console.log('mainview: flagFavorites, added = ', addedToFavorites);

            if (addedToFavorites) {
                this._$banner.find('#main-favorites').addClass('flagged');
            } else {
                this._$banner.find('#main-favorites').removeClass('flagged');
            }
        },

        updateBreadcrumbs: function(breadcrumbs, rootTopicData) {
            var len = breadcrumbs.length,
                i,
                html = '<ol class="breadcrumbs">';

                 + this._constructBreadcrumbHtml({
                    href: rootTopicData.attr.href,
                    title: rootTopicData.data || 'Home'
                });

            for (i = 0; i < len; ++i) {
                html = html + this._constructBreadcrumbHtml(breadcrumbs[i]);
            }

            html += '</ol>';

            this._$breadcrumbs.empty();

            $(html).appendTo(this._$breadcrumbs);
        }
    });
})(jQuery);