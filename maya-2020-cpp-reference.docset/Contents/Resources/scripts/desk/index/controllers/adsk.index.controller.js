// Index controller.
(function($, UTILS) {

    $.widget('adsk.indexcontroller', {
        options: {
            targetId: 'tab-index',
            src: 'scripts/adsk.indexes-data.js',
            data: undefined
        },

        /* Private members. */

        _view: undefined,

        _create: function() {
            console.log('indexcontroller: _create');

            // Load index data.
            var self = this,
                def = $.Deferred();

            var loadIndexData = function(src) {
                def.notify('indexcontroller: Checking index script source path.');

                if (!src || src === '') {
                    def.reject('indexcontroller: Error! Index script source path not specified!');
                }

                def.notify('indexcontroller: Creating index data register event listener.');

                $(document).bind('register-index-data', function(event, data) {
                    $(this).unbind(event);
                    def.resolve(data);
                });

                def.notify('indexcontroller: Injecting index script.');

                yepnope.injectJs(src, function() {
                    def.reject('indexcontroller: Error: index script source loading timeout.');
                });
            }

            def.progress(function(message) {
                console.log(message);
            });

            def.fail(function(message) {
                console.log(message);
            });

            def.done(function(data) {
                console.log('indexcontroller: Index data loaded: ', data);

                self.options.data = data;

                // Init view.
                selector = '#' + self.options.targetId;

                $(selector).indexview({
                    index: data,

                    create: function(event, ui) {
                        self._view = $(this).indexview("instance");
                    }
                });
            });

            loadIndexData(self.options.src);
        }

        /* Public members. */

    });

})(jQuery);