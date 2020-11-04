// Index view (in form of jQuery widget).
(function($, UTILS) {
	$.widget('adsk.indextabview', {
		options: {
			caption: "Index",
            data:undefined,
            prevItemTopScope:undefined,
            prevItemBottomScope:undefined,
            previousIndexScrollerBigLetter:undefined
		},

        $content: undefined,
        $toolbar: undefined,
        moveInAction: false,

        _create: function() {
            console.log('indextabview: _create');
			// Render view.
			this._render();
			
			// Handle UI events.
			this._addEventHandlers();
		},
		
		_render: function() {
            console.log('indextabview: _render');

			// Create markup.
            this._initIndexContent();
            this.$toolbar = this.element.find('.toolbar');
            this.$content = this.element.find('.content');
        },

        _handleTouchStart: function(event) {
            this.moveInAction = false;
        },

        _handleTouchEnd: function(event) {
//            event.preventDefault();

            if (!this.moveInAction) {
                var $indexItem = $(event.target);

                // Trigger 'indexitemtap' custom event.
                if ($indexItem.hasClass('index-link')) {
                    this._trigger('indexitemtap', event, {
                        href: $indexItem.data('href')
                    });
                }
            }

            this.moveInAction = false;
        },

        _handleTouchMove: function(event) {
            this.moveInAction = true;

            // Prevent bubbling to enable native scrolling.
            event.stopPropagation();
        },

        _addEventHandlers: function() {
           console.log('indextabview: _addEventHandlers');

           this.element
           .on('touchstart', $.proxy(this._handleTouchStart, this))
           .on('touchend', $.proxy(this._handleTouchEnd, this))
           .on('touchmove', $.proxy(this._handleTouchMove, this));
        },

        _initIndexContent:function () {
            console.log('indextabview: _initIndexContent');
            this.indexABCConent = $(document.createElement('div')).addClass('index-content').appendTo(this.element);
        },

        initIndexItemList:function (indexData) {
            console.log('indextabview: initIndexItemList');

            var indexItemDiv = $(document.createElement('div')).addClass('index-item-div').appendTo(this.indexABCConent);
            var data = indexData.data;
            for (var l in data) {
                var letter = data[l];
                var letter_div = $(document.createElement('div')).addClass('index-letter-group').addClass('index-item').html(letter.l);
                indexItemDiv.append(letter_div);
                this._renderChildren(indexItemDiv, letter.c);
            }
        },

        _renderChildren:function (parent, children) {
            console.log('indextabview: _renderChildren');

            var entriesDiv = $(document.createElement('div')).addClass('entries-div');
            for (var i in children) {
                var child = children[i];
                var grandchildren = child.c;

                var div = $(document.createElement('div'))
                    .addClass('index-entry-text')
                    .addClass('index-item');

                var link = $(document.createElement('a'))
                    .addClass('index-link')
                    .data('href', child.f)
                    .html(child.l);

                if (grandchildren) {
                    link = link.addClass('index-caption');
                }
                div.append(link);

                if (grandchildren) {
                    var indent_div = $(document.createElement('div')).addClass('index-entry');
                    this._renderChildren(indent_div, grandchildren);
                    div.append(indent_div);
                }
                entriesDiv.append(div);
            }
            entriesDiv.appendTo(parent);
        },

        _setContentHeight: function() {
            console.log('indextabview: _setContentHeight');

            var height = $(document).height() - this.$toolbar.height();
            this.$content.css('height', height + 'px');
        },

        resize: function() {
            // Set content container height.
            this._setContentHeight();
        }



    });
})(jQuery);