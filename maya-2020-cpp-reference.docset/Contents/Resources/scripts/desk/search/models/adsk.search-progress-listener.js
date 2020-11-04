function SearchProgressListener(controller) {
    this.onStart = function() {
        controller.displayProgress(0);
    };

    this.onQueryProcessed = function() {
        controller.displayProgress(5);
    };

    this.onWordsSearchCompleted = function() {
        controller.displayProgress(20);
    };

    this.onLookUpComplete = function() {
        controller.displayProgress(95);
    };

    this.onFilteringComplete = function() {
        controller.displayProgress(99);
    };

    this.onDataLoaded = function(progress, total) {
        controller.displayProgress(20 + Math.floor(progress/total * 70));
    };

    this.onComplete = function(results) {
        controller.displayProgress(100);
        controller.displayResults(results)
    };
}