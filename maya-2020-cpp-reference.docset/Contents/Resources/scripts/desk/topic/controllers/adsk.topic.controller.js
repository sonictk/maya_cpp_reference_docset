// Topic controller.
(function($, UTILS) {
    var self = undefined;

	$.widget('adsk.topiccontroller', {

		options: {
            targetId: 'topic',
            topicPathPrefix: './files',
            wrappedTopicPathPrefix: './wrapped-files',
            topicHTML: '',
            toc: undefined,
            favoritesController: undefined,
            searchOptions: undefined
		},

		/* Private members. */

		_view: undefined,
		_tocLoading: undefined,

        _defaultTopicData: undefined,
        _currentTopicData: undefined,
        _parentTopicData: undefined,

        _siblingTopicData: {
            prn: undefined, // previous
            nxn: undefined // next
        },

		_create: function() {
            console.log('topiccontroller: _create');

            this._tocLoading = $.Deferred();

            self = this;

            // Some initialization staff.
            $('#' + this.options.targetId).topicview({
                create: $.proxy(this._viewCreateHandler, this)
            });
		},

		_init: function() {
            this._trigger('ready');
        },

		_viewCreateHandler: function(event, ui) {
		    console.log('topiccontroller: _viewCreateHandler');

		    this._view = $(event.target).topicview('instance');
		},

		// Get JS wrapped file href by HTM file href.
        _getTopicHref: function(href) {
            console.log('topiccontroller: _getTopicHref, href = ' + href);

            // Turn ./files/topic.htm to ./wrapped-files/topic.htm.js
            // or something.htm to something.htm.js
            if (href.indexOf(this.options.topicPathPrefix) == 0) {
                // If starts with ./files
                return this.options.wrappedTopicPathPrefix + this._getFileFolderPathFromFullPath(href) + '.js';
            } else {
                return href + '.js';
            }
        },

		_getFileFolderPathFromFullPath: function(path) {
		    var prefix = this.options.topicPathPrefix,
		        pos = path.lastIndexOf(prefix),
		        filename = path.substring(pos + prefix.length);
		    return filename;
		},

		// Get topic data (title, href, id etc.) from TOC tree by ID, HREF or topic number.
        _fetchTopicData: function(data, bookName) {
            console.log('appcontroller: _fetchTopicData, data = ', data);

            var toc = this.options.toc,
                topic = undefined;

            if (toc !== undefined) {
                // Get topic data by topic ID.
                if (data.id !== undefined && data.id !== '') {
                    if (toc.tocDataIndexedById !== undefined) {
                        topic = toc.tocDataIndexedById[bookName][data.id];
                    }
                // Get topic data by href.
                } else if (data.href !== undefined && data.href !== '') {
                    // Crop url fragment.
                    var href = data.href;

                    if (data.href.lastIndexOf('#') != -1) {
                        href = data.href.substr(0, data.href.lastIndexOf('#'));
                    }

                    if (toc.tocDataIndexedByHref !== undefined &&
                        toc.tocDataIndexedByHref[bookName] !== undefined) {
                        topic = toc.tocDataIndexedByHref[bookName][href];
                    }
                // Get topic data by topic number.
                } else if (data.tn !== undefined && data.tn !== '') {
                    if (toc.tocDataIndexedByTopicNumber !== undefined) {
                        topic = toc.tocDataIndexedByTopicNumber[bookName][data.tn];
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

        // Disable/enable navigation buttons and favorites.
        _setupTopicRelatedFeatures: function(topic, bookName) {
            console.log('topiccontroller: _setupTopicRelatedFeatures');

            var toc = this.options.toc,
                view = this._view;

            if (topic !== undefined && topic.attr.id !== undefined) {
                this._setupGoToParentFeature(toc, topic, view, bookName);
                this._setupGoToSiblingFeature('prn', toc, topic, view, bookName);
                this._setupGoToSiblingFeature('nxn', toc, topic, view, bookName);
                this._setupFavoritesFeature(topic, view);
                this._setupBreadcrumbsFeature(topic, bookName);
                this._setupTocFeature(topic);
            } else {
                this._disableTopicRelatedFeatures(view);
            }

        },

        _setupTocFeature: function(topicData) {
            console.log('topiccontroller: _setupTocFeature');

            this._trigger('setuptoc', {}, {
                href: topicData.attr.href
            });
        },

        _disableTopicRelatedFeatures: function(view) {
            console.log('topiccontroller: _disableTopicRelatedFeatures');

            this._initGoToPreviousButton(false);
            this._initGoToParentButton(false);
            this._initGoToNextButton(false);
            this._initFavoritesButton(false);

            this._siblingTopicData['prn'] = undefined;
            this._siblingTopicData['nxn'] = undefined;

            this._flagFavorites(false);
        },

        _setupGoToParentFeature: function(toc, topic, view, bookName) {
            console.log('topiccontroller: _setupGoToParentFeature');

            // Enable "Go to parent" button if parent topic available.
            var parentTopic = undefined;

            if (toc !== undefined) {
                var parentTopicNumber = topic.attr.pn;

                if (parentTopicNumber !== undefined) {
                    parentTopic = toc.tocDataIndexedByTopicNumber[bookName][parentTopicNumber]
                }

                var goToParentButtonEnabled = (parentTopic !== undefined) ? true: false;

                if (goToParentButtonEnabled) {
                    this._parentTopicData = parentTopic;
                } else {
                    this._parentTopicData = undefined;
                }

                this._initGoToParentButton(goToParentButtonEnabled);
            } else {
                this._initGoToParentButton(false);
            }
        },

        // attr = prn || nxn.
        _setupGoToSiblingFeature: function(attr, toc, topic, view, bookName) {
            console.log('topiccontroller: _setupGoToSiblingFeature');

            // Fetch target topic (following or previous).
            var targetTopic = undefined;

            if (toc !== undefined) {
                var topicNumber = topic.attr[attr];

                if (topicNumber !== undefined) {
                    targetTopic = toc.tocDataIndexedByTopicNumber[bookName][topicNumber];
                }
            }

            // Enable button if 'previous/next' topic is available.
            var enabled = (targetTopic) ? true : false;

            if (attr == 'prn') {
                this._initGoToPreviousButton(enabled);
            } else {
                this._initGoToNextButton(enabled);
            }

            this._siblingTopicData[attr] = targetTopic;
        },

        _setupFavoritesFeature: function(topic, view) {
            console.log('topiccontroller: _setupFavoritesFeature');
            // Indicate if opened topic page is in favorites.
            if (this.options.favoritesController !== undefined) {
                this._initFavoritesButton(true);

                var isTopicInFavorites = this.options.favoritesController.isTopicIdInFavorites(topic.attr.id);

                this._flagFavorites(isTopicInFavorites);
            }
        },

        _setupBreadcrumbsFeature: function(topic, bookName) {
            console.log('topiccontroller: _setupBreadcrumbsFeature');

            this._trigger('setupbreadcrumbs', {}, {
                breadcrumbs: this._getBreadcrumbs(topic, bookName)
            });
        },

        _getBreadcrumbs: function(topic, bookName) {
            console.log('topiccontroller: _getBreadcrumbs');


            var breadcrumbs = [],
                parents = this._getTopicParents(bookName, topic.attr.tn)
                self = this;

            $.each(parents, function(index, parent) {
                breadcrumbs.push(self._getParentTopicData(parent));
            });

            return breadcrumbs;

        },

        _getTopicParents: function(bookName, topicNumber) {
            var parentsArray = [],
                currentTopic = this._getTopicData(bookName, topicNumber);

            if (currentTopic) {
                this._fillTopicParentsArray(bookName, currentTopic.attr.pn, parentsArray);
            }

            return parentsArray;
        },

        _getTopicData: function(bookName, topicNumber) {
            var toc = this.options.toc.tocDataIndexedByTopicNumber;

            return toc[bookName] ? toc[bookName][topicNumber] : undefined;
        },

        _fillTopicParentsArray: function(bookName, topicNumber, parentsArray) {
            var currentTopic = this._getTopicData(bookName, topicNumber);

            if (currentTopic) {
                var parentNumber = currentTopic.attr.pn;

                this._fillTopicParentsArray(bookName, parentNumber, parentsArray);

                parentsArray.push(currentTopic);
            }
        },

        _getParentTopicData: function(topic) {
            if (topic) {
                return {
                    title: topic.data,
                    href: topic.attr.href
                };
            } else {
                return undefined;
            }
        },

        _initGoToPreviousButton: function(enabled) {
            console.log('topiccontroller: _initGoToPreviousButton');

            this._trigger('initgotopreviousbutton', {}, {
                enabled: enabled
            });
        },

        _initGoToParentButton: function(enabled) {
            console.log('topiccontroller: _initGoToParentButton');

            this._trigger('initgotoparentbutton', {}, {
                enabled: enabled
            });
        },

        _initGoToNextButton: function(enabled) {
            console.log('topiccontroller: _initGoToNextButton');

            this._trigger('initgotonextbutton', {}, {
                enabled: enabled
            });
        },

        _initFavoritesButton: function(enabled) {
            console.log('topiccontroller: _initFavoritesButton');

            this._trigger('initfavoritesbutton', {}, {
                enabled: enabled
            });
        },

        _fireOpenTopicEvent: function(topic) {
            console.log('topiccontroller: _fireOpenTopicEvent');

            if (topic !== undefined) {
                this._currentTopicData = topic;

                this._trigger('opentopic', {}, {
                    href: topic.attr.href
                });
            }
        },

        _flagFavorites: function(added) {
            console.log('topiccontroller: _flagFavorites');

            this._trigger('flagfavorites', {}, {
                added: added
            });
        },

        // Get book name from path.
        // ./filesTEST1/topichead.htm => TEST1
        _getBookBase: function(path) {
            var pos = path.lastIndexOf('/'),
                base = path.substring(0, pos + 1);

            return base;
        },

        // MED custom begin:
            // The default _getBookName implementation chokes on HTML files that aren't in a directory
            // that starts with "files".
            _getBookName: function(bookBase) {
            var files = '/files',
                startIndex = bookBase.lastIndexOf(files) + files.length,
                endIndex = bookBase.lastIndexOf('/');
            if (bookBase.lastIndexOf(files) != -1)
                return bookBase.substring(startIndex, endIndex);
            else
                return "";
        },
        // MED custom end

		/* Public members. */

		setTocData: function(tocData) {
            console.log('topiccontroller: setTocData');

            if (tocData !== undefined) {
                this.options.toc = tocData;
                this._tocLoading.resolve();
            }
        },

        openTopic: function(data) {
            console.log('topiccontroller: openTopic, topic = ', data);

            var self = this;

            self._tocLoading.done(function() {
                // Show topic content.
                if (data) {
                    var href = data.href;

                    if (href.lastIndexOf('#') != -1) {
                        href = href.substr(0, data.href.lastIndexOf('#'));
                    }

                    // Get href to JS file.
                    var realHref = self._getTopicHref(href);

                    // Get book name to resolve inner links.
                    var bookBase = self._getBookBase(href);

                    // Get topic content either from local JS file or TODO: load with AJAX.

                    // yepnope.injectJs( scriptSource [, callback ] [, elemAttributes ] [, timeout ]);
                    // TODO: do not cache local js.
                    window.topic = '';

                    yepnope.injectJs(realHref, $.proxy(function() {
                        // Render topic content.
                        if ((window.topic !== '') && ((window.topic !== self.options.topicHTML) || window.topic.indexOf('adsk-med-container') > 0)) {
                            self.options.topicHTML = window.topic;

                            self._view.showTopicContent(self.options.topicHTML, bookBase);

                            setTimeout(function() { self._view.scrollToFragment(data.href); }, 50);

                            self._view.highlight(self.options.searchOptions);

                            // Get topic TOC data for specified book (parent topic, next topic etc.)
                            var bookName = self._getBookName(bookBase);

                            var topicData = self._currentTopicData = self._fetchTopicData(data, bookName);

                            // Initialize navigation buttons, favorites and else related to current topic.
                            self._setupTopicRelatedFeatures(topicData, bookName);
                        } else if (window.topic == self.options.topicHTML) {
                            console.log('Selected the same topic as current.');

                            var bookName = self._getBookName(bookBase);
                            var topicData = self._currentTopicData = self._fetchTopicData(data, bookName);
                            setTimeout(function() { self._view.scrollToFragment(data.href); self._setupTocFeature(topicData) }, 50);
                        } else {
                            console.log('Something goes wrong :(');
                        }
                    }, self));

                }
            });
        },

        openPreviousTopic: function() {
            console.log('topiccontroller: openPreviousTopic');

            var prevTopic = this._siblingTopicData['prn'];

            this._fireOpenTopicEvent(prevTopic);
        },

        openParentTopic: function() {
            console.log('topiccontroller: openParentTopic');

            var parentTopic = this._parentTopicData;

            this._fireOpenTopicEvent(parentTopic);
        },

        openFollowingTopic: function() {
            console.log('topiccontroller: openFollowingTopic');

            var nextTopic = this._siblingTopicData['nxn'];

            this._fireOpenTopicEvent(nextTopic);
        },

        addOrRemoveTopicFromFavorites: function() {
            console.log('topiccontroller: addOrRemoveTopicFromFavorites');

            console.log('this._currentTopicData: ', this._currentTopicData);
            if (!this._currentTopicData) {
                return;
            }

            var attr = this._currentTopicData.attr;

            if (attr.id !== undefined) {
                console.log('topiccontroller: topicId = ', attr.id);
                var added = this.options.favoritesController.addOrRemoveFavoriteTopicId(attr.id);
                this._flagFavorites(added);
            }
        },

        highlightQuery: function(searchOptions) {
            console.log('topiccontroller: highlight');

            this.options.searchOptions = searchOptions;

            if (this._view) {
                this._view.highlight(searchOptions);
            }
        }
	});
})(jQuery);