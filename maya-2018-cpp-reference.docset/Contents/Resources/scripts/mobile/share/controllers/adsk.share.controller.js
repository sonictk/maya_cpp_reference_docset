// Favorites controller.
(function($, DEVICE) {
	$.widget('adsk.sharecontroller', {
		options: {
            targetId: 'share',
            menuViewTargetId: 'share-menu',
            shareButtonOffset: undefined,
            orientationData: undefined
		},

		/* Private members. */

		_view: undefined,
		_menuView: undefined,

		_create: function() {
		    console.log('sharecontroller: _create');

            // TODO: replace by factory.
            var selector = '#' + this.options.targetId;

            if (DEVICE.isMobile) {
                $(selector).mobileshareview({
                    create:             $.proxy(this._mobileViewCreateHandler, this),
                    cancel:             $.proxy(this._viewCancelHandler, this)
                });
            } else {
                $(selector).tabletshareview({
                    create:             $.proxy(this._tabletViewCreateHandler, this),
                    cancel:             $.proxy(this._viewCancelHandler, this)
                });
            }
		},

		_mobileViewCreateHandler: function(event, ui) {
		    console.log('sharecontroller: _mobileViewCreateHandler');

		    this._view = $(event.target).mobileshareview("instance");

		    this._createShareMenuView('mobile');
		},

		_tabletViewCreateHandler: function(event, ui) {
		    console.log('sharecontroller: _tabletViewCreateHandler');

		    this._view = $(event.target).tabletshareview("instance");

		    this._createShareMenuView('tablet');
		},

		_createShareMenuView: function(type) {
		    console.log('sharecontroller: _createShareMenuView');

		    // Create menu view.
            var selector = '#' + this.options.menuViewTargetId;

            $(selector).sharemenuview({
                create:             $.proxy(this._menuViewCreateHandler, this),
                itemtap:            undefined,
                type:               type,
                orientationData:    this.options.orientationData
            });
		},

		_menuViewCreateHandler: function(event, ui) {
		    console.log('sharecontroller: _menuViewCreateHandler');

		    this._menuView = $(event.target).sharemenuview("instance");
		},

		_menuViewItemtapHandler: function(event, ui) {
            console.log('sharecontroller: _menuViewItemtapHandler');

            // TODO: process share menu item tap.
        },

        _viewCancelHandler: function(event, data) {
            console.log('sharecontroller: _viewCancelHandler');

            this._trigger('back');
        },

        _setCurrentTopicTitle: function(title) {
            console.log('sharecontroller: _setCurrentTopicTitle');

            this._menuView.setCurrentTopicTitle(title);
        },

		/* Public members. */

        resize: function(data) {
            console.log('sharecontroller: resize');

            this._menuView.resize(data);
        },

        refresh: function(offset) {
            if (DEVICE.isMobile) {
                offset = this._view.getFooterOffset();
                this._menuView.placeInTheCenter(offset);
            } else {
                if (DEVICE.isTablet) {
                    this.options.shareButtonOffset = offset;
                    this._view.setShareMenuOffset(offset);
                }
            }
        }
    });
})(jQuery, ADSK.UTILS.DEVICE);