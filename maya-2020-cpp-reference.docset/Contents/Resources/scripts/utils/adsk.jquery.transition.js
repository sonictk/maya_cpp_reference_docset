(function($) {
    $.fn.transition = function(options) {

        var transitionOptions = $.extend({
            // These are the defaults.
            activeViewClass:    'view-active',
            $activeViews:        undefined, // Views to fade out.

            ease:               'swing',
            floatIn:            '100',
            fadeOut:            '500',
            offsetLeft:         '40px',
            offsetRight:        '-20px'
        }, options);

        var o = transitionOptions,
            $activeViews = o.$activeViews,
            $view = $(this);

        var resetViews = function($views) {
            $views.css({
                marginLeft: o.offsetLeft,
                marginRight: o.offsetRight,
                opacity: 0
            });
        };

        var entranceTransition = function($view) {
            $view.css({
                display: 'block',
                visibility: 'visible'
            }).addClass(o.activeViewClass).animate({
                marginRight: 0,
                marginLeft: 0,
                opacity: 1
            }, o.floatIn, o.ease);
        };

        // Get active views to fade out (if there are no provided).
        if ($activeViews === undefined || !$activeViews.length) {
            $activeViews = $(o.activeViewClass);
        }

        if ($activeViews.length) {
            $activeViews.fadeOut(o.fadeOut, function() {
                resetViews($.fn.add.call($view, $activeViews));
                entranceTransition($view);
            });
            $view.removeClass(o.activeViewClass);
        } else {
            resetViews($view);
            entranceTransition($view);
        }

        return this;
    };
})(jQuery);