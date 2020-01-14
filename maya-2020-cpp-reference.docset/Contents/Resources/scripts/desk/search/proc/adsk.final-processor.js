function FinalSearchProcessor() {
    AbstractSearchProcessor.call(this);

    this.processSearchResults = function(searchResult, progressListener) {
        if (searchResult.getResults().length > 0) {
            searchResult.sortResults();
        } else {
            searchResult.addWarning('no-results', searchResult.getQueryWordsList());
        }

        progressListener.onComplete(searchResult);
    }
}