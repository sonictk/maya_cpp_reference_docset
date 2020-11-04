// Search controller.
(function($) {
	$.widget('adsk.searchcontroller', {
		options: {
            suggestionProcessor: undefined,
            orientationData: undefined,
            indexData: undefined,
            tocData: undefined,
            treeData: undefined,
		    toc: undefined
		},

        /* Private members. */

        _view:              undefined,
        _suggestionView:    undefined,

		_create: function() {
            console.log('searchcontroller: _create');

            //  Create view and attach event handlers.
            $('#search').searchview({
                create:              $.proxy(this._viewCreateHandler, this),
                buttontap:           $.proxy(this._viewButtontapHandler, this),
                submitsearchform:    $.proxy(this._viewSubmitSearchFormHandler, this),
                clearelementvalue:   $.proxy(this._viewClearElementValue, this),
                clearsuggestions:    $.proxy(this._viewClearSuggestions, this),
                loadsuggestion:      $.proxy(this._viewLoadSuggestionHandler, this)
            });

            $('#suggestion-view').suggestionview({
                create:          $.proxy(this._suggestionViewCreateHandler, this),
                orientationData: this.options.orientationData,
                itemtap:         $.proxy(this._viewItemtapHandler, this)
            });

            this.options.suggestionProcessor = $.adsk.suggestionprocessor({});
        },

		_viewCreateHandler: function(event, ui) {
            console.log('searchcontroller: _viewCreateHandler');

            this._view = $(event.target).searchview('instance');

            // Load Beehive search framework.
            Boot.init(['search/SearchPanel'])
                .done(this._view.createBeehiveSearchPanel);
		},

		_suggestionViewCreateHandler: function(event, ui) {
		    console.log('searchcontroller: _suggestionViewCreateHandler');

		    this._suggestionView = $(event.target).suggestionview('instance');
		},

        _viewClearElementValue: function(event, elem) {
            console.log('searchcontroller:_viewClearElementValue');

            if(typeof elem.value === 'string'){
                elem.value = '';
            } else{
                elem.val('');
            }
		},

        _viewClearSuggestions: function(event) {
            console.log('searchcontroller:_viewClearSuggestions');
            this._suggestionView.clearSuggestionList();
        },

		_viewButtontapHandler: function(event, id) {
		    console.log('searchcontroller: _viewButtontapHandler');

            if (id === 'search-cancel') {
                // Show previous opened page.
                this._trigger('back');
            }
		},

        _viewItemtapHandler: function(event, term){
            console.log('searchcontroller: _viewItemtapHandler');

            this._view.changeSearchValue(term);
        },

        _viewSubmitSearchFormHandler: function(event, data) {
		    console.log('searchcontroller: _viewSubmitSearchFormHandler');

            if(String(data.term) !== '') {
                this._trigger('back');
                this._trigger('showsearchresult', {}, {
                    id: 'search-result',
                    term: data.term
                });
            }
        },

		_viewLoadSuggestionHandler: function(event, searchQuery) {
		    console.log('searchcontroller: _viewLoadSuggestionHandler');

            this._suggestionView.createSuggestionView(searchQuery);
        },

        /* Public members. */

		resize: function(data) {
		    console.log('searchcontroller: resize');

		    var view = this._view;
		    if (view) {
		        view.resize();
		    }
		},

        setSearchData: function(data){
            console.log('searchcontroller: setSearchData');

            var searchProcessor = this.options.suggestionProcessor,
                suggestionView = this._suggestionView,
                tocDataLoaded = this.options.tocData,
                treeDataLoaded = this.options.treeData,
                indexDataLoaded = this.options.indexData;
            switch (data.type) {
                case 'toc':
                    if(tocDataLoaded !== undefined){
                        suggestionView.setSuggestionData(tocDataLoaded)
                    } else{
                        tocDataLoaded = searchProcessor.createTocSuggestionList(data.data.toc);
                        suggestionView.setSuggestionData(tocDataLoaded)
                    }
                    break;

                case 'tree':
                    if(treeDataLoaded !== undefined){
                        suggestionView.setSuggestionData(treeDataLoaded)
                    } else{
                        treeDataLoaded = searchProcessor.createTocSuggestionList(data.data.toc);
                        suggestionView.setSuggestionData(treeDataLoaded)
                    }
                    break;

                case 'index':
                    if(indexDataLoaded !== undefined){
                        suggestionView.setSuggestionData(indexDataLoaded)
                    } else{
                        indexDataLoaded = searchProcessor.createIndexSuggestionList(data.data);
                        suggestionView.setSuggestionData(indexDataLoaded)
                    }
                    break;

                case 'favorites':
                    suggestionView.setSuggestionData(searchProcessor.createFavoritesSuggestionList(data.data));
                    break;

                case 'topic':
                    suggestionView.setSuggestionData(searchProcessor.createHtmlSuggestionList(data.data));
                    break;

                default:
                    break;
            }
        },

		setTocData: function(data) {
            console.log('searchcontroller: setTocData');

            this.options.toc = data;
        }
    });

})(jQuery);