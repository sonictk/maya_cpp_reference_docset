// Topic share view (in form of jQuery widget).
(function($) {
	$.widget('adsk.tabletshareview', {

		_create: function() {
		    console.log('tabletshareview: _create');

			// Render view.
			this._render();
			// Handle UI events.
            this._addEventHandlers();
		},

		_render: function() {
		    console.log('tabletshareview: _render');

            // Create markup.
            this.shareMenu = $(document.createElement('div'))
                .attr('id','share-menu')
                .addClass('share-tablet-menu');

            /*this.arrow = $(document.createElement('div'))
                .addClass('arrow')
                .appendTo(this.shareMenu); */

            this.shareMenuBackground = $(document.createElement('div'))
                .addClass('share-tablet-menu-block')
                .appendTo(this.element);

            this.arrow = $(document.createElement('div'))
                .addClass('share-arrow')
                .appendTo(this.shareMenuBackground);

            this.shareMenu.appendTo(this.shareMenuBackground);
		},

		setShareMenuOffset: function(offset) {
		    console.log('tabletshareview: _setShareMenuOffset');

            var position = this.arrow.position();
            // TODO: no magic numbers.
            this.shareMenuBackground.css('left', offset.left - position.left + 25);
		},

        _addEventHandlers:function () {
            console.log('tabletshareview: _addEventHandlers');

            var self = this;

            $(this.element).on('touchend', function (event) {
                self._trigger('cancel', event, {});
            });
        }

    });
})(jQuery);