// Index view (in form of jQuery widget).
(function($, UTILS) {

    $.widget('adsk.indexscrollertabview', {
		options: {
			caption: "Index",
            data:undefined,
            prevItemTopScope:undefined,
            prevItemBottomScope:undefined,
            previousIndexScrollerBigLetter:undefined
		},

        _create: function() {
            console.log('indextabview: _create');
			// Render view.
			this._render();

//            this.testVar = $('#navigation > .toolbar > .center');

            // Handle UI events.
		},
		
		_render: function() {
            console.log('indextabview: _render');
			// Create markup.
            this._initIndexContent();
            this._initIndexScroller();
		},

        _initIndexContent:function () {
            console.log('indextabview: _initIndexContent');
        },

        _initIndexScroller:function () {
            console.log('indextabview: _initIndexScroller');
        },

        initIndexABCScroller:function (indexData) {
            console.log('indextabview: _initIndexScroller');
            this.indexABC = $(document.createElement('div'))
                .attr('id', 'index-abc')
                .addClass('index-abc')
                .appendTo(this.element);
            var index_scroller = $(document.createElement('ul')).addClass('index-abc-list');
            var data = indexData.data;
            for (var l in data) {
                var letter = data[l];
                var letter_item = $(document.createElement('li')).addClass('index-abc-item');
                var small_letter = $(document.createElement('div')).addClass('index-scroller-letter').html(letter.l).appendTo(letter_item);
                letter_item.appendTo(index_scroller);
            }
            this.big_letter = $(document.createElement('div')).addClass('index-scroller-big-letter');
            $([this.big_letter.get(0), index_scroller.get(0)]).appendTo(this.indexABC);
        },

        initEventHandlers:function () {
            var $element = this.indexABC;
            console.log('indextabview: _initEventHandlers');

            var self = this;
            var ABCElem = document.getElementById($element.attr('id'));
            var ABCElemLeftScope = ABCElem.offsetLeft;
            var ABCElemTopScope = ABCElem.offsetTop;
            var ABCElemBottomScope = ABCElemTopScope + ABCElem.offsetHeight - 2;
            var ABCList = ABCElem.getElementsByTagName('ul')[0];
            var ABCListLeftScope = ABCList.offsetLeft;
            var ABCListWidth = ABCList.offsetWidth;
            var ABCListCenter = Math.floor(ABCElemLeftScope + ABCListLeftScope + (ABCListWidth / 2));
//            this.testVar.text(ABCElemLeftScope + '  '+ABCElemTopScope);

            var indexContent = $('#tab-index > .index-content');

            ABCElem.addEventListener('touchstart', function (event) {
                event.preventDefault();
                if(navigator.userAgent.match(/Android/i)){
                    indexContent.css({overflow:'hidden'});
                }
                if (event.targetTouches.length == 1) {
                    var touch = event.targetTouches[0];
                    var xPos = touch.clientX;
                    var yPos = touch.clientY;

                    if (xPos >= ABCElemLeftScope) {
                        var $ABCScroller = $(this.children[1]);
                        self.options.prevItemTopScope = undefined;
                        self.options.prevItemBottomScope = undefined;
                        $ABCScroller.addClass('touched');
                    }
                    if (yPos <= ABCElemBottomScope) {
                        self._scrollIndex(event, ABCListCenter, yPos);
                    }
                }
            }, false);

            ABCElem.addEventListener('touchend', function (event) {
                var $bigLetterElem = $(this.children[0]);
                var $ABCScroller = $(this.children[1]);
                $bigLetterElem.removeClass('displayed');
                $ABCScroller.removeClass('touched');
                if(navigator.userAgent.match(/Android/i)){
                    indexContent.css({overflow:''});
                }
            }, false);

            ABCElem.addEventListener('touchmove', function (event) {
                event.stopPropagation();
                if (event.targetTouches.length == 1) {
                    var touch = event.targetTouches[0];
                    var xPos = touch.clientX;
                    var yPosition = touch.clientY;
                    var currentListItem = document.elementFromPoint(ABCListCenter, yPosition);
                    if (xPos >= ABCElemLeftScope && yPosition <= ABCElemBottomScope) {
                        var currentListItemBottomScope = ABCElemTopScope + currentListItem.offsetTop + currentListItem.offsetHeight;
                        var currentListItemTopScope = ABCElemTopScope + currentListItem.offsetTop;
                        if (currentListItemBottomScope != self.options.prevItemBottomScope && currentListItemTopScope != self.options.prevItemTopScope) {
                            self.options.prevItemTopScope = currentListItemTopScope;
                            self.options.prevItemBottomScope = currentListItemBottomScope;
                            self._scrollIndex(event, ABCListCenter, yPosition);
                        }
                    }
                }
            }, false);

            this.element.on('touchmove', $.proxy(function(event) {
                // Prevent bubbling to enable native scrolling.
                event.stopPropagation();
            }, this));

        },

        _scrollIndex:function (event, xPos, yPos) {
            console.log('indextabview: _scrollIndex');

            var scrollerElement = document.elementFromPoint(xPos, yPos);
//            this.testVar.text(scrollerElement.className);

            if (scrollerElement.className == 'index-scroller-letter') {
                this._createBigLetter(this.big_letter, scrollerElement, xPos, yPos);
            }

            var indexElement = getIndexElement(scrollerElement);
            if (indexElement) {
                indexElement.scrollIntoView();
            }

            function getIndexElement(scrollerElement) {
                var result;
                var indexLetters = document.getElementsByClassName('index-letter-group');
                for (var i = 0; i < indexLetters.length; i++) {
                    if (indexLetters[i].innerHTML === scrollerElement.innerHTML) {
                        result = indexLetters[i];
                    }
                }
                return result
            }
        },

        _createBigLetter:function (bigLetter, elem, xPos, yPos) {
//            console.log('indextabview: _createBigLetter');

            var bigLetterHtml = $(elem).find('.index-scroller-letter').andSelf().filter('.index-scroller-letter').text();
            if (elem && bigLetterHtml !== this.options.previousIndexScrollerBigLetter) {
                bigLetter.html(bigLetterHtml).css({'position':'fixed','top':yPos-20 , 'left':xPos-70});
                this.options.previousIndexScrollerBigLetter = bigLetterHtml;
                bigLetter.addClass('displayed');
            }
        },

        changeScrollerSize:function () {
            console.log('indextabview: changeScrollerSize');

            var $elem = this.indexABC;
            var height = 380;
            var fontSize = 8;
            var elemTopPadding = 40;
            var innerHeight = window.innerHeight;
            var elemHeight = innerHeight - elemTopPadding - 10;
            var multiplier = innerHeight / height;

            var listItems = $elem[0].getElementsByClassName('index-scroller-letter');
            var listItemsLength = listItems.length;
            var listItemHeight = Math.floor(elemHeight/listItemsLength);
            for(var i = 0; i<listItemsLength; i++){
                $(listItems[i]).css({height:listItemHeight+'px', lineHeight:listItemHeight+'px'})
            }
            if (innerHeight >= height) {
                fontSize = Math.floor(fontSize * multiplier);
            }
            $elem.css({height:elemHeight,fontSize:fontSize + 'px', top:elemTopPadding});
        },

        initIndexItemList:function (indexData) {
            console.log('indextabview: initIndexItemList');

            var indexItemDiv = $(document.createElement('div')).addClass('index-item-div').appendTo(this.element);
            var data = indexData.data;
            for (var l in data) {
                var letter = data[l];
                var letter_div = $(document.createElement('div')).addClass('index-letter-group').addClass('index-item').html(letter.l);
                indexItemDiv.append(letter_div);
                this._render_children(indexItemDiv, letter.c);
            }
        },

        _render_children:function (parent, children) {
            console.log('indextabview: _render_children');

            var entriesDiv = $(document.createElement('div')).addClass('entries-div');
            for (var i in children) {
                var child = children[i];
                var grandchildren = child.c;

                var div = $(document.createElement('div')).addClass('index-entry-text').addClass('index-item');
                var link = $(document.createElement('a')).addClass('index-link').attr('href', child.f).html(child.l);
                if (grandchildren) {
                    link = link.addClass('index-caption');
                }
                div.append(link);

                if (grandchildren) {
                    var indent_div = $(document.createElement('div')).addClass('index-entry');
                    this._render_children(indent_div, grandchildren);
                    div.append(indent_div);
                }
                entriesDiv.append(div);
            }
            entriesDiv.appendTo(parent);
        }

	});
})(jQuery);