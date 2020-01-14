function AbstractSearchProcessor() {
    var processor;
    this.setNextProcessor = function(theProcessor) {
        processor = theProcessor
    };

    this.callNextProcessor = function(results, progressListener) {
        processor.processSearchResults(results, progressListener)
    };

    this.processSearchResults = function(results, progressListener) {}
}