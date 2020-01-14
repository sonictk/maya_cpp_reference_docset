// Search result controller.
(function($) {
	$.widget('adsk.searchresultcontroller', {
		options: {
            orientationData: undefined
        },
        _searchHighlighter: undefined,
        _rootData: undefined,
        _searchData: {
            className: 'highlight',
            root: undefined,
            term: undefined
        },

        _view: undefined,

		_create: function() {
            console.log('searchresultcontroller: _create');

            //  Create view and attach event handlers.
            this._view = $('#search-result').searchresultview({
                searchbuttontap:      $.proxy(this._viewButtontapHandler, this)
            }).searchresultview('instance');

            this._searchHighlighter = $.adsk.searchresulthighlighter({});

        },

		_viewButtontapHandler: function(event, id) {
		    console.log('searchresultcontroller: _viewButtontapHandler');
            event.preventDefault();
            event.stopPropagation();

            var rootData = this._rootData;
            var currentSearchResult;
            switch (id){
                case 'search-result-cancel':
                    this.closeSearchResultPage();
                    break;

                case 'prev':
                    this._searchHighlighter.jumpToSearchResult(id, rootData);
                    currentSearchResult = this._searchHighlighter.getCurrentSearchResultNumber();
                    this._view.setCurrentSearchResult(currentSearchResult);
                    break;

                case 'next':
                    this._searchHighlighter.jumpToSearchResult(id, rootData);
                    currentSearchResult = this._searchHighlighter.getCurrentSearchResultNumber();
                    this._view.setCurrentSearchResult(currentSearchResult);
                    break;
            }
		},

        _removeHighlight: function () {
            this._searchHighlighter.removeHighlight(this._searchData);
        },

        _getRootElement: function (data) {
            console.log('searchresultcontroller: _getRootElement');
            var elem;
            switch (data) {
                case 'toc':
                    elem = document.getElementById('tab-toc');
                    break;

                case 'tree':
                    elem = document.getElementById('tab-tree');
                    break;

                case 'index':
                    elem = $('#tab-index .index-content')[0];
                    break;

                case 'favorites':
                    elem = document.getElementById('tab-favorites');
                    break;

                case 'topic':
                    elem = document.getElementById('body-content');
                    break;

                default:
                    break;
            }

            return elem;
        },

        /* Public members. */

        processingSearchResults: function (rootData, term) {
            console.log('searchresultcontroller: processingSearchResults');

            this._rootData = rootData;
            this._searchData.root = this._getRootElement(rootData);
            this._searchData.term = term;
            this._searchHighlighter.innerHighlight(this._searchData);
            this._searchHighlighter.jumpToSearchResult('start', rootData);

            var searchResultsNumber = this._searchHighlighter.getSearchResultsNumber();
            this._view.setSearchResultsNumber(searchResultsNumber);
            var currentSearchResult = this._searchHighlighter.getCurrentSearchResultNumber();
            this._view.setCurrentSearchResult(currentSearchResult);
        },

        closeSearchResultPage: function ()  {
            console.log('searchresultcontroller: closeSearchResultPage');
            this._removeHighlight();
            this._trigger('back');
        },

		resize: function(data) {
		    console.log('searchcontroller: resize');

		    var view = this._view;
		    if (view) {
		        view.resize();
		    }
		}
    });
})(jQuery);