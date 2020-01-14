// Favorites controller.
(function($, UTILS) {

    $.widget('adsk.favoritestabcontroller', {
        options: {
            targetId: 'tab-favorites',
            favoritesController: undefined,
            labels: {}
        },

        /* Private members. */

        _view: undefined,

        _create: function() {
            console.log('favoritestabcontroller: _create');

            var self = this,
                selector = '#' + this.options.targetId;

            view = $(selector).favoritesview({
                favorites: this.options.favoritesController.getListOfFavorites(),

                labels: this.options.labels,

                create: function(event, data) {
                    self._view = $(this).favoritesview("instance");
                },

                itemclick: function(event, data) {
                    self._trigger('opentopic', {}, data);
                }
            });
        },

        /* Public members. */

        refresh: function() {
            console.log('favoritestabcontroller: refresh');

            var view = this._view;

            if (view) {
                var favorites = this.options.favoritesController.getListOfFavorites();

                view.refresh(favorites);
            }
        }
    });

})(jQuery);