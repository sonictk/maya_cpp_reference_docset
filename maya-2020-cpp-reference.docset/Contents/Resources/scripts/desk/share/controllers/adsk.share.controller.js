// Share controller.
(function($, UTILS) {

    $.widget('adsk.sharecontroller', {
        options: {
            targetId: 'share'
        },

        /* Private members. */

        _view: undefined,

        _create: function() {
            console.log('sharecontroller: _create');

            var selector = '#' + this.options.targetId,
                self = this;

            $(selector).shareview({
                create: function(event, ui) {
                    self._view = $(this).shareview("instance");
                },

                hide: function(event, data) {
                    self._view.hide();
                }
            });
        },

        /* Public members. */

        showShareMenu: function() {
            console.log('sharecontroller: showShareMenu');

            this._view.show();
        },

        refresh: function() {
            console.log('sharecontroller: refresh');

            this._view.refresh();
        }

    });

})(jQuery);