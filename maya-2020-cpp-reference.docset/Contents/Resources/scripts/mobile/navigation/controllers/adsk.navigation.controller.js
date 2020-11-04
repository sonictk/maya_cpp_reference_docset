// Navigation controller.
(function($) {
	$.widget('adsk.navigationcontroller', {
		options: {
            toc: undefined,
            index: undefined,
            targetId: 'navigation',
            searchPageId: 'search',
            defaultTab: 'toc',
            tabControllers: {},
            openedTabId: undefined,
            controllers: {
                indexDataLoader: undefined,
                favoritesController: undefined
            }
		},

		_view: undefined,

        _create: function() {
            console.log('navigationcontroller: _create');

            var selector = '#' + this.options.targetId;
            $(selector).navigationview({
                create:    $.proxy(this._viewCreateHandler, this),
                buttontap: $.proxy(this._viewButtontapHandler, this)
            });
        },

        _viewCreateHandler: function(event, ui) {
            console.log('navigationcontroller: _viewCreateHandler');

            this._view = $(event.target).navigationview("instance");

            this._createController(this.options.defaultTab);
        },

        _viewButtontapHandler: function(event, id) {
            console.log('navigationcontroller: _viewButtontapHandler');

            var id = id.substring('nav-'.length),
                handlerName = '_' + id + 'ButtontapHandler';

            this[handlerName](event, id);
        },

        _resumeButtontapHandler: function(event, id) {
            console.log('navigationcontroller: _resumeButtontapHandler');

            // Show previous opened page.
            this._backToPreviousPage()
        },

        _searchButtontapHandler: function(event, data) {
            console.log('navigationcontroller: _searchButtontapHandler');

            // Show search view.
            this._trigger('showpage', {}, {
                id: this.options.searchPageId
            });

            this._trigger('setsuggestiondata', {}, [this._getNavigationSearchData()]);
        },

        _tocButtontapHandler: function(event, id) {
            console.log('navigationcontroller: _tocButtontapHandler');

            this._createController(id);
        },

        _treeButtontapHandler: function(event, id) {
            console.log('navigationcontroller: _treeButtontapHandler');

            this._createController(id);
        },

        _indexButtontapHandler: function(event, id) {
            console.log('navigationcontroller: _indexButtontapHandler');

            this._createController(id);
        },

        _favoritesButtontapHandler: function(event, id) {
            console.log('navigationcontroller: _favoritesButtontapHandler');

            this._createController(id);
        },

        _backToPreviousPage: function() {
            console.log('navigationcontroller: _backToPreviousPage');

            this._trigger('back');
        },

        _getNavigationSearchData: function() {
            var suggestionData;
            var suggestionDataType;
            switch (this.options.openedTabId) {
                case 'toc':
                    suggestionData = this.options.toc;
                    suggestionDataType = 'toc';

                    break;
                case 'tree':
                    suggestionData = this.options.toc;
                    suggestionDataType = 'tree';

                    break;
                case 'index':
                    suggestionData = this.options.index;
                    suggestionDataType = 'index';

                    break;
                case 'favorites':
                    suggestionData = this.options.controllers.favoritesController.getListOfFavorites();
                    suggestionDataType = 'favorites';
                    break;
                default:
                    break;
            }

            return {
                data: suggestionData,
                type: suggestionDataType
            };
        },

        _createController: function(tabId) {
            console.log('navigationcontroller: _createController');

            this.options.openedTabId = tabId;
            var tabs = this.options.tabControllers;
            var controllers = this.options.controllers;

            switch(tabId) {
                case 'toc':
                    if (!tabs.tocTabController) {

                        tabs.tocTabController = $.adsk.toctabcontroller({
                            opentopic: $.proxy(this._openTopicHandler, this)
                        });
                    }
                    break;

                case 'tree':
                    if (!tabs.treeTabController) {

                        tabs.treeTabController = $.adsk.treetabcontroller({
                            opentopic: $.proxy(this._openTopicHandler, this)
                        });

                        tabs.treeTabController.setTocData(this.options.toc)
                    }
                    break;

                case 'index':
                    if (!tabs.indexTabController) {

                        tabs.indexTabController = $.adsk.indextabcontroller({
                            opentopic: $.proxy(this._openTopicHandler, this)
                        });

                        controllers.indexDataLoader = $.adsk.indexdataloader({
                            loaded: $.proxy(this._indexDataLoaded, this)
                        });

                        controllers.indexDataLoader.loadIndexData();
                    }
                    break;

                case 'favorites':
                    if (!tabs.favoritesTabController) {

                        tabs.favoritesTabController = $.adsk.favoritestabcontroller({
                            opentopic: $.proxy(this._openTopicHandler, this),
                            controllers: {
                                favoritesController: controllers.favoritesController
                            }
                        });
                    }
                    break;

                default:
                    break;
            }
        },

        _indexDataLoaded: function(event, data) {
            console.log('navigationcontroller: _indexDataLoaded');

            this.options.index = data.index;
            this.options.tabControllers.indexTabController.initIndexList(data.index);
        },

        _openTopicHandler: function(event, data) {
            console.log('navigationcontroller: _openTopicHandler');

            if($('#search-result.current').length !== 0){
                this._trigger('closepage', {}, 'search-result');
            }
            this._trigger('opentopic', {}, data);

            // Back to previous UI page.
            this._trigger('back');
        },

        refresh: function() {
            console.log('navigationcontroller: refresh');

            // Refresh tabs.
            $.each(this.options.tabControllers, function(index, controller) {
                if (controller.refresh) {
                    controller.refresh();
                }
            });
        },

        resize: function(data) {
            console.log('navigationcontroller: resize');

            // Navigation view resize.
            this._view.resize();

            // Resize all tabs.
            $.each(this.options.tabControllers, function(index, controller) {
                controller.resize(data);
            });
        },

        setTocData: function(data) {
            console.log('navigationcontroller: setTocData');

            this.options.toc = data;

            $.each(this.options.tabControllers, function(index, controller) {
                controller.setTocData(data);
            });
        }
    });
})(jQuery);