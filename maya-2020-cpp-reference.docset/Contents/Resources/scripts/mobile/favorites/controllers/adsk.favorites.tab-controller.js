// Favorites controller.
(function($) {
	$.widget('adsk.favoritestabcontroller', {
		options: {
		    targetId: 'tab-favorites',
		    controllers: {
		        favoritesController: undefined
		    }
		},

		/* Private members. */

		_view: undefined,

		_create: function() {
		    console.log('favoritestabcontroller: _create');

            view = $('#tab-favorites').favoritestabview({
                create:    $.proxy(this._viewCreateHandler, this),
                favorites: this.options.controllers.favoritesController.getListOfFavorites(),
                itemtap:   $.proxy(this._viewItemtapHandler, this)
            });
		},

		_viewCreateHandler: function(event, ui) {
		    console.log('favoritestabcontroller: _viewCreateHandler');

		    this._view = $(event.target).favoritestabview("instance");
		},

		_viewItemtapHandler: function(event, data) {
		    console.log('favoritestabcontroller: _viewItemtapHandler');

		    this._trigger('opentopic', {}, data);
		},

		/* Public members. */

		resize: function(data) {
		    console.log('favoritestabcontroller: resize');
		},

		setTocData: function(data) {
            console.log('favoritestabcontroller: setTocData');

            this.options.toc = data;
        },

		refresh: function() {
		    console.log('favoritestabcontroller: refresh');

            var view = this._view;

            if (view) {
                var favoritesController = this.options.controllers.favoritesController,
                    favorites = favoritesController.getListOfFavorites();
                view.refresh(favorites);
            }
		}

    });
})(jQuery);