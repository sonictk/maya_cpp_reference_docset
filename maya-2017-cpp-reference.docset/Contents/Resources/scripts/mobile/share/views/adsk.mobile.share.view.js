// Mobile share view (in form of jQuery widget).
(function($) {
	$.widget('adsk.mobileshareview', {
        options: {
            data: undefined
        },

		_create: function() {
			// Render view.
			this._render();

			// Handle UI events.
            this._addEventHandlers();
		},

		_render: function() {
		    console.log('mobileshareview: _render');

		    // Create markup.
            this._initMobileSharePageSection();
            this._initMobileSharePageFooter();
		},

        _initMobileSharePageSection:function () {
            console.log('mobileshareview: _initMobileSharePageSection');

            this.shareMenu = $(document.createElement('div'))
                .attr('id','share-menu')
                .addClass('share-mobile-menu');
            this.shareMenuBackground = $(document.createElement('div'))
                .addClass('share-mobile-menu-background')
                .appendTo(this.element);
            this.shareMenu.appendTo(this.shareMenuBackground);
        },

        _initMobileSharePageFooter:function () {
            console.log('mobileshareview: _initMobileSharePageFooter');

            this.shareFooter = $(document.createElement('div'))
                .addClass('share-footer')
                .appendTo(this.element);
            this.shareFooterLink = $(document.createElement('a'))
                .attr('id','share-cancel-button').attr('href','#')
                .appendTo(this.shareFooter);
            this.shareFooterDiv = $(document.createElement('div'))
                .addClass('share-menu-button-width')
                .addClass('frame')
                .text('Cancel')
                .appendTo(this.shareFooterLink);
       },

        _addEventHandlers:function () {
            console.log('mobileshareview: _addEventHandlers');

            var self = this;

            $(this.shareFooterLink).on('touchstart', function (event) {
                self.shareFooterLink.addClass('tapped');
            });

            $(this.shareFooterLink).on('touchend', function (event) {
                self.shareFooterLink.removeClass('tapped');
                self._cancelButtonTogglerClick(event, {});
            });
        },

        _cancelButtonTogglerClick: function(event) {
            console.log('mobileshareview: _cancelButtonTogglerClick');
			this._trigger('cancel', event, {});
		},

        getFooterOffset: function() {
            console.log('mobileshareview: getFooterOffset');
            return this.shareFooter;
        }

    });
})(jQuery);