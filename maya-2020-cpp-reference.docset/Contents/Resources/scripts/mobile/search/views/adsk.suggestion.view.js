// Suggestion view (jQuery UI widget).
(function($) {
	$.widget('adsk.suggestionview', {
		options: {
            data: undefined
		},
        _view: undefined,
        touchmoved: false,

        _create: function() {
            console.log('suggestionview: _create');

			// Render view.
			this._render();
			
			// Handle UI events.
			this._addEventHandlers();

		},
		
		_render: function() {
            console.log('suggestionview: _render');

            this._view = this.element;

            this.suggestionList = $(document.createElement('ul')).appendTo(this._view);
            // Create markup.
 		},

        createSuggestionView: function(term){
            console.log('suggestionview: createSuggestionView');

            var suggestionList = this.options.data;
            var termReg = new RegExp('.*' + term + '.*', 'i');
            var items = [];

            this.clearSuggestionList();
            for (var i = 0; i < suggestionList.length; ++i) {
                if (suggestionList[i].match(termReg)) {
                    var listItem = $(document.createElement('li')).addClass('suggestion');
                    this.suggestionLink = $(document.createElement('div')).addClass('suggestion-link')
                                                                          .text(suggestionList[i])
                                                                          .appendTo(listItem);
                    // Add DOM list item element to the array.
                    items.push(listItem.get(0));
                }
            }
            $(items).appendTo(this.suggestionList);
        },

        setSuggestionData: function(data){
            console.log('suggestionview: setSuggestionData');

            this.options.data = data;
        },

        clearSuggestionList: function() {
            this.suggestionList.empty();
        },

        _addEventHandlers: function () {
            console.log('suggestionview: _addEventHandlers');

            this.element
                .on('touchstart', $.proxy(function (event) {

                    this.touchmoved = false;

                }, this))
                .on('touchend', $.proxy(function (event) {

//                    event.preventDefault();
                    if (!this.touchmoved) {
                        var $target = $(event.target);
                        if (!$target.is('#suggestion-view')) {
                            if (!$target.is('li')) {
                                $target = $target.parents('li');
                            }
                            this._trigger('itemtap', event, $target[0].textContent);
                        }
                    }
                    this.touchmoved = false;

                }, this))
                .on('touchmove', $.proxy(function (event) {

                    this.touchmoved = true;

                    // Prevent bubbling to enable native scrolling.
                    event.stopPropagation();

            }, this));
        }
    });
})(jQuery);