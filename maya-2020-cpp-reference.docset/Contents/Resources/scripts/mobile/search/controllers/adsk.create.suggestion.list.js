// Suggestion processor.
(function ($) {
    $.widget('adsk.suggestionprocessor', {
        options:{
        },

        _suggestionList:[],
        _view:undefined,

        _create:function () {
            console.log('suggestionprocessor: _create');

            //  Create view and attach event handlers.
        },

        createHtmlSuggestionList:function (data) {
            this._clearSuggestionList();
            this._createHtmlSuggestionList(data);
            return this._suggestionList;
        },

        createTocSuggestionList:function (data) {
//            console.log('suggestionprocessor: createTocSuggestionList');
            this._clearSuggestionList();
            for (var l in data) {
                var letter = data[l];
                var string = letter.data;
                this._createSuggestionList(string);
                this._renderTocChildren(letter.children);
            }
            return this._suggestionList;
        },

        createIndexSuggestionList:function (data) {
//            console.log('suggestionprocessor: createIndexSuggestionList');
            this._clearSuggestionList();
            for (var l in data) {
                var letter = data[l];
                this._renderIndexChildren(letter.c);
            }
            return this._suggestionList;
        },

        createFavoritesSuggestionList:function (data) {
//            console.log('suggestionprocessor: createFavoritesSuggestionList');
            this._clearSuggestionList();
            for (var l in data) {
                var letter = data[l];
                var string = letter.data;
                this._createSuggestionList(string);
            }
            return this._suggestionList;
        },

        _renderTocChildren:function (children) {
//            console.log('indextabview: _renderTocChildren');
            for (var i in children) {
                var child = children[i];
                var grandchildren = child.c;
                var string = child.data;
                this._createSuggestionList(string);
                if (grandchildren) {
                    this._renderIndexChildren(grandchildren);
                }
            }
        },

        _renderIndexChildren:function (children) {
//            console.log('indextabview: _renderIndexChildren');
            for (var i in children) {
                var child = children[i];
                var grandchildren = child.c;
                var string = child.l;
                this._createSuggestionList(string);
                if (grandchildren) {
                    this._renderIndexChildren(grandchildren);
                }
            }
        },

        _createSuggestionList: function(string){
//            console.log('indextabview: _createSuggestionList');
            var wordReg = new RegExp('[\\w+\'-]{1,}', 'gi');
            while (x = wordReg.exec(string)) {
                this._suggestionList.sort();
                var xReg = new RegExp('\\b' + x[0] + '\\b', 'i');
                if (!this._suggestionList.toString().match(xReg)) {
                    this._suggestionList.push(x[0]);
                }
            }
        },

        createObjectSuggestionList:function (data) {
            console.log('suggestionprocessor: createObjectSuggestionList');
            this._clearSuggestionList();

            return this._suggestionList;
        },

         _clearSuggestionList: function(){
            this._suggestionList = [];
        },

        _createHtmlSuggestionList:function (node) {
            var TEXT_NODE = 3;
            var ELEMENT_NODE = 1;
            var skip = 0;
            if (node && node.nodeType == TEXT_NODE) {
                skip = 1;
                var string = node.textContent;
                this._createSuggestionList(string);
            } else {
                if (node && node.nodeType == ELEMENT_NODE && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                    for (var i = 0; i < node.childNodes.length; ++i) {
                        this._createHtmlSuggestionList(node.childNodes[i]);
                    }
                }
            }
            return skip;
        }
    });
})(jQuery);