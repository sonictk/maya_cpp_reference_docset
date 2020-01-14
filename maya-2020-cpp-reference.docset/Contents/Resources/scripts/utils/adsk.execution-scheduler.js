// Execution scheduler.
(function($) {
	$.widget('adsk.executionscheduler', {
		options: {
            timeout: undefined
		},

		_timerId: undefined,

		/* Private members. */

		_create: function() {
            console.log('executionscheduler: _create');
		},

		_clearTimer: function() {
		    console.log('schedule: _clearTimer');

            if (this._timerId) {
                clearTimeout(this._timerId);
            }
        },

		/* Public members. */

        schedule: function() {
            console.log('executionscheduler: schedule');

            this._clearTimer();

            this._timerId = setTimeout($.proxy(function() {
                this._trigger('expired');
            }, this), this.options.timeout);
        },

        clear: function() {
            console.log('executionscheduler: clear');

            this._clearTimer();
        }
	});
})(jQuery);