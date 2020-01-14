function ExecutionScheduler(timeout) {
    var timerId = null;

    function clearTimer() {
        if (timerId) {
            clearTimeout(timerId);
        }
    }

    this.schedule = function(callback) {
        clearTimer();
        timerId = setTimeout(callback, timeout);
    };

    this.clear = function() {
        clearTimer();
    };
}