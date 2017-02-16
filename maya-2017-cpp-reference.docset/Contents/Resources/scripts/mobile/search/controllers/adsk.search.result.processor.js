// Search result controller.
(function($) {
    $.widget('adsk.searchresulthighlighter', {
        options: {
        },
        term: undefined,
        root: undefined,
        className: 'highlight',
        searchResultsNumber: undefined,
        currentPosition: undefined,
        _prevPosition: undefined,

        TEXT_NODE: 3,
        ELEMENT_NODE: 1,

        _create: function() {
            console.log('searchresulthighlighter: _create');
            //  Create view and attach event handlers.
        },

        innerHighlight: function (searchData) {
            console.log('searchresultcontroller: innerHighlight');
            var searchTerm;
            var rootElem;
            var highlightedClassName;
            if (searchData.term === undefined) {
                searchTerm = this.term;
            } else {
                searchTerm = this.term = searchData.term.toUpperCase();
            }
            if (searchData.root === undefined) {
                rootElem = $('body');
            } else {
                rootElem = this.root = searchData.root;
            }
            if (searchData.className === undefined) {
                highlightedClassName = this.className;
            } else {
                highlightedClassName = searchData.className;
            }

            this._innerHighlight(rootElem, highlightedClassName, searchTerm);
        },

        _innerHighlight: function (node, highlightedClassName, term) {
            var skip = 0;
            if (node.nodeType == this.TEXT_NODE) {
                var pos = node.data.toUpperCase().indexOf(term);
                if (pos >= 0) {
                    var spanNode = document.createElement('span');
                    spanNode.className = highlightedClassName;
                    var middlebit = node.splitText(pos);
                    var endbit = middlebit.splitText(term.length);
                    var middleclone = middlebit.cloneNode(true);
                    spanNode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spanNode, middlebit);
                    skip = 1;
                }
            }
            else if (node.nodeType == this.ELEMENT_NODE && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; ++i) {
                    i += this._innerHighlight(node.childNodes[i], highlightedClassName, term);
                }
            }
            return skip;
        },

        removeHighlight:function (searchData) {
            var highlightedClassName;
            var rootElem;
            if (!searchData.root){
                rootElem = this.root;
            }   else{
                rootElem = searchData.root;
            }
            if (!searchData.className){
                highlightedClassName = this.className;
            }   else{
                highlightedClassName = searchData.className;
            }
            this._removeElementByClassName(rootElem, highlightedClassName);
            this.currentPosition = undefined;
            this.searchResultsNumber = undefined;
            this._prevPosition = undefined;
            this.root = undefined;
            this.term = undefined;
        },

        _removeElementByClassName: function (node, className) {
            var elem = node.getElementsByClassName(className);
            while (elem.length > 0) {
                var elemValue = elem[0].firstChild.nodeValue;
                var textNode = document.createTextNode(elemValue);
                elem[0].parentNode.replaceChild(textNode, elem[0]);
            }
            node.normalize();
        },

        jumpToSearchResult: function(id, rootData) {
            console.log('searchresulthighlighter: jumpToSearchResult');

            var root = this.root;
            var highlightedClassName = this.className;
            var searchResults = root.getElementsByClassName(highlightedClassName);
            if(searchResults.length){
                this._jumpToSearchResult(searchResults, id, rootData);
            }
        },

        _jumpToSearchResult:function (SearchResults, buttonType, rootData) {
            console.log('searchresulthighlighter: _jumpToSearchResult');
            var activeSearchTermId = 'current-search-result';
            switch (buttonType) {
                case 'start':
                    this.currentPosition = 0;
                    break;
                case 'next':
                    this._prevPosition = this.currentPosition;
                    this.currentPosition = this.currentPosition+ 1;
                    break;
                case 'prev':
                    this._prevPosition = this.currentPosition;
                    this.currentPosition = this.currentPosition- 1;
                    break;
                default :
                    this.currentPosition = 0;
            }
            switch (this.currentPosition) {
                case SearchResults.length:
                    this.currentPosition = 0;
                    break;
                case -1:
                    this.currentPosition = SearchResults.length - 1;
            }
            $(SearchResults[this._prevPosition]).css('background-color', '').removeAttr('id', activeSearchTermId);
            $(SearchResults[this.currentPosition]).css('background-color', 'orange').attr('id', activeSearchTermId);

            var element = document.getElementById(activeSearchTermId);
            var $element = $(element);

            if (rootData == 'tree') {
                $element.parents('ul').attr('style', 'display: block');
            }

            if (!elementInViewport(element)) {
                element.scrollIntoView();
            }

            function elementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 50 &&
                        rect.left >= 0 &&
                        rect.bottom <= window.innerHeight &&
                        rect.right <= window.innerWidth
                    )
            }
        },

        getSearchResultsNumber:function () {
            var root = this.root;
            var highlightedClassName = this.className;
            var numberOfSearchResults;
            if(root !== undefined && highlightedClassName !== undefined && this.searchResultsNumber == undefined){
                this.searchResultsNumber = numberOfSearchResults = root.getElementsByClassName(highlightedClassName).length;
            } else {
                numberOfSearchResults = this.searchResultsNumber;

            }
            return numberOfSearchResults;
        },

        getCurrentSearchResultNumber:function () {
            var currentPosition;

            if(this.currentPosition == undefined && this.searchResultsNumber == 0){
                currentPosition = 0;
            } else {
                currentPosition = this.currentPosition +1;
            }
            return currentPosition;
        }

    });
})(jQuery);