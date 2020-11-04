// Topic controller.
(function($) {
	$.widget('adsk.topiccontroller', {
		options: {
		    defaultTopicHref: undefined,
		    shareController: undefined,
            favoritesController: undefined,
		    pageIds: ['navigation', 'search', 'page', 'share'],
		    toc: undefined,
		    orientationData: undefined
		},

        /* Private members. */

		_view: undefined,
		_defaultTopicData: undefined,
		_currentTopicData: undefined,
		_parentTopicData: undefined,

		_siblingTopicData: {
		    prn: undefined, // previous
		    nxn: undefined // next
		},

        // This method is the widget's constructor.
		_create: function() {
            console.log('topiccontroller: _create');

            // Create view and attach event handlers.
            $('#topic').topicview({
                create:     $.proxy(this._viewCreateHandler, this),
                buttontap:  $.proxy(this._viewButtontapHandler, this),
                swipeleft:  $.proxy(this._viewSwipeLeftHandler, this),
                swiperight: $.proxy(this._viewSwipeRightHandler, this),
                opentopic:  $.proxy(this._viewOpentopicHandler, this)
            });
		},

		_viewOpentopicHandler: function(event, data) {
		    console.log('topiccontroller: _viewOpentopicHandler');

		    this._trigger('opentopic', {}, data);
		},

        // View widget 'create' event handler.
		_viewCreateHandler: function(event, ui) {
            console.log('topiccontroller: _viewCreateHandler');

            this._view = $(event.target).topicview("instance");
		},

		_openDefaultTopic: function(defaultTopic) {
		    console.log('topiccontroller: _openDefaultTopic');

            this._trigger('opentopic', {}, {
                href: defaultTopic.attr.href
            });
		},

		_getDefaultTopicData: function() {
		    console.log('topiccontroller: _getDefaultTopicData');

		    var href = this.options.defaultTopicHref;

            var topic = this._fetchTopicData({
                href: href
            });

            // If no topic specified in TOC tree data,
            // use config provided HREF to load default topic.
            if (topic === undefined) {
                topic = {
                    /* TODO: add default topic title into publication config. */
                    data: undefined,
                    attr: {
                        href: href
                    }
                };
            }

            return topic;
		},

        // Disable/enable navigation buttons and favorites.
		_setupTopicRelatedFeatures: function(topic) {
		    console.log('topiccontroller: _setupTopicRelatedFeatures');

            var toc = this.options.toc,
            	view = this._view;

		    if (topic !== undefined && topic.attr.id !== undefined) {
                this._setupGoBackFeature(view);

                this._setupGoToParentFeature(toc, topic, view);
                this._setupGoToSiblingFeature('prn', toc, topic, view);
                this._setupGoToSiblingFeature('nxn', toc, topic, view);

                this._setupFavoritesFeature(topic, view);
                // TODO: prev and next features.
		    } else {
		        this._disableTopicRelatedFeatures(view);
		    }

		},

		_disableTopicRelatedFeatures: function(view) {
		    console.log('topiccontroller: _disableTopicRelatedFeatures');

		    view.initGoToParentButton(false);
            view.initFavoritesButton(false);
            view.initGoBackButton(false);

            this._siblingTopicData['prn'] = undefined;
            this._siblingTopicData['nxn'] = undefined;

            view.flag(false);
		},

		_setupGoBackFeature: function(view) {
		     console.log('topiccontroller: _setupGoBackFeature');

             view.initGoBackButton(history.length > 0);
		},


		_setupGoToParentFeature: function(toc, topic, view) {
		    console.log('topiccontroller: _setupGoToParentFeature');

		    // Enable "Go to parent" button if parent topic available.
		    var parentTopic = undefined;

            if (toc !== undefined) {
                var parentTopicNumber = topic.attr.pn,
                    bookName = "";

                if (parentTopicNumber !== undefined) {
                    parentTopic = toc.tocIndexedByTopicNumber[bookName][parentTopicNumber]
                }

                var goToParentButtonEnabled = (parentTopic !== undefined) ? true: false;

                if (goToParentButtonEnabled) {
                    this._parentTopicData = parentTopic;
                } else {
                    this._parentTopicData = undefined;
                }

                view.initGoToParentButton(goToParentButtonEnabled);
            } else {
                view.initGoToParentButton(false);
            }
		},


		// attr = prn || nxn.
		_setupGoToSiblingFeature: function(attr, toc, topic, view) {
		    console.log('topiccontroller: _setupGoToSiblingFeature');

		    // Enable "GoTo" button if 'previous/next' topic available.
		    var targetTopic = undefined;

            if (toc !== undefined) {
                var topicNumber = topic.attr[attr],
                    bookName = '';

                if (topicNumber !== undefined) {
                    targetTopic = toc.tocIndexedByTopicNumber[bookName][topicNumber];
                }
            }

            this._siblingTopicData[attr] = targetTopic;
		},

		_setupFavoritesFeature: function(topic, view) {
		    console.log('topiccontroller: _setupFavoritesFeature');

		    view.initFavoritesButton(true);

		    // Indicate if opened topic page is in favorites.
            var isTopicInFavorites = this.options.favoritesController.isTopicIdInFavorites(topic.attr.id);
            view.flag(isTopicInFavorites);
		},

		_isPageId: function(id) {
            return ($.inArray(id, this.options.pageIds) > -1);
		},

		_makePageCurrentById: function(id) {
		    console.log('topiccontroller: _makePageCurrentById, id = ', id);

		    if (this._isPageId(id)) {
                this._trigger('showpage', {}, { id: id });
            }
		},

		_createShareController: function() {
		    console.log('topiccontroller: _createShareController');

            this.options.shareController = $.adsk.sharecontroller({
                back:               $.proxy(this._backToPreviousPage, this),
                shareButtonOffset:  this.getShareButtonOffset(),
                orientationData:    this.options.orientationData
            });
		},

		_viewButtontapHandler: function(event, id) {
		    console.log('topiccontroller: _viewButtontapHandler');

            id = id.substring('topic-'.length);
            var handlerName = '_' + id + 'ButtontapHandler';
            this[handlerName](event, id);
		},

        _setTopicTitleToShare: function(title){
            console.log('topiccontroller: _setTopicTitleToShare', title);

            if (this.options.shareController !== undefined) {
                this.options.shareController._setCurrentTopicTitle(title);
            }
        },

		_shareButtontapHandler: function(event, id) {
		    // Create share controller lazily.
		    var controller = this.options.shareController;

		    if (controller === undefined) {
                this._createShareController();
                controller = this.options.shareController;
            }

            this._makePageCurrentById(id);
            this._setTopicTitleToShare(this._currentTopicData.data);
            controller.refresh(this.getShareButtonOffset());
		},

		_parentButtontapHandler: function(event, id) {
		    var parentTopic = this._parentTopicData;

            if (parentTopic !== undefined) {
                this._currentTopicData = parentTopic;

                this._trigger('opentopic', {}, {
                    href: parentTopic.attr.href
                });
            }
		},

		_favoritesButtontapHandler: function(event, id) {
		    var attr = this._currentTopicData.attr;
		    if (attr.id !== undefined) {
                var added = this.options.favoritesController.addOrRemoveFavoriteTopicId(attr.id);
                this._view.flag(added);
            }
		},

		_navigationButtontapHandler: function(event, id) {
		    console.log('topiccontroller: _navigationButtontapHandler');

		    this._makePageCurrentById(id);
		},

		_backButtontapHandler: function() {
		    console.log('topiccontroller: _backButtonHandler');

		    history.go(-1);
		},

		_homeButtontapHandler: function(event, id) {
		    console.log('topiccontroller: _homeButtontapHandler');

            this._openDefaultTopic(this._defaultTopicData);
		},

		_searchButtontapHandler: function(event, id) {
            console.log('topiccontroller: _searchButtontapHandler');

            this._makePageCurrentById(id);

            this._trigger('setsuggestiondata', {}, [this._getTopicSearchData()]);
        },

        _viewSwipeRightHandler: function(event) {
            console.log('topiccontroller: _viewSwipeRightHandler');

            var prevTopic = this._siblingTopicData['prn'];

            if (prevTopic !== undefined) {
                this._currentTopicData = prevTopic;

                this._trigger('opentopic', {}, {
                    href: prevTopic.attr.href
                });
            }
        },

        _viewSwipeLeftHandler: function(event) {
            console.log('topiccontroller: _viewSwipeLeftHandler');

            var nextTopic = this._siblingTopicData['nxn'];

            if (nextTopic !== undefined) {
                this._currentTopicData = nextTopic;

                this._trigger('opentopic', {}, {
                    href: nextTopic.attr.href
                });
            }
        },

        _getTopicSearchData: function(){
            console.log('topiccontroller: _getTopicSearchData');

            return {data: document.getElementById('body-content'),
                    type: 'topic'};
        },

        // Tells the view to load topic if it is specified.
		_showTopicContent: function(topic) {
            console.log('topiccontroller: _showTopicContent, ', topic);

            if (topic !== undefined) {
                console.log('topic data: ', topic);

                var href = topic.attr.href,
                    title = topic.data;

                // Get book name to resolve inner links.
                var bookBase = this._getBookBase(href);

                this._setTopicTitleToShare(title);
                this._view.loadPage(href, title, bookBase);
            }
        },

        // Get topic data (title, href, id etc.) from TOC tree by ID, HREF or topic number.
		_fetchTopicData: function(data) {
		    console.log('topiccontroller: _fetchTopicData');

            var toc = this.options.toc,
                bookName = '',
                topic = undefined;

            if (toc !== undefined) {
                // Get topic data by topic ID.
                if (data.id !== undefined && data.id !== '') {
                    if (toc.tocIndexedById !== undefined) {
                        topic = toc.tocIndexedById[bookName][data.id];
                    }
                // Get topic data by href.
                } else if (data.href !== undefined && data.href !== '') {
                    // Crop url fragment.
                    var href = data.href;
                    if (data.href.lastIndexOf('#') != -1) {
                        href = data.href.substr(0, data.href.lastIndexOf('#'));
                    }

                    if (toc.tocIndexedByHref !== undefined) {
                        topic = toc.tocIndexedByHref[bookName][href];
                    }
                // Get topic data by topic number.
                } else if (data.tn !== undefined && data.tn !== '') {
                    if (toc.tocIndexedByTopicNumber !== undefined) {
                        topic = toc.tocIndexedByTopicNumber[bookName][data.tn];
                    }
                }
            }

            if (topic === undefined) {
                topic = {
                    attr: {
                        href: data.href
                    }
                };
            } else {
                topic.attr.href = data.href; // Preserve url fragment.
            }

            return topic;
		},

		_backToPreviousPage: function() {
            console.log('topiccontroller: _backToPreviousPage');

            this._trigger('back');
        },

        // Get book name from path.
        // ./filesTEST1/topichead.htm => TEST1
        _getBookBase: function(path) {
            var pos = path.lastIndexOf('/'),
                base = path.substring(0, pos + 1);

            return base;
        },

        _getBookName: function(bookBase) {
            var files = '/files',
                startIndex = bookBase.lastIndexOf(files) + files.length,
                endIndex = bookBase.lastIndexOf('/');

            return bookBase.substring(startIndex, endIndex);
        },

		/* Public members. */

        resize: function(data) {
            console.log('topiccontroller: resize');

            this.options.orientationData = data;

            this._view.resize();

            var controller = this.options.shareController;
            if (controller !== undefined) {
                controller.resize(data);
                controller.refresh(this.getShareButtonOffset());
            }
        },

        setTocData: function(data) {
            console.log('topiccontroller: setTocData, ');

            this.options.toc = data;

            // Try to fetch default topic data again.
            this._defaultTopicData = this._getDefaultTopicData();
        },

		openTopic: function(data) {
		    console.log('topiccontroller: openTopic: ', data);

            if (data === undefined || $.isEmptyObject(data)) {
                return;
            }

		    var topic = this._currentTopicData = this._fetchTopicData(data);

		    this._showTopicContent(topic);
		    this._setupTopicRelatedFeatures(topic);
		},

		getShareButtonOffset: function() {
            console.log('topiccontroller: getShareButtonOffset');

            return this._view.getShareButtonOffset();
        }
	});
})(jQuery);