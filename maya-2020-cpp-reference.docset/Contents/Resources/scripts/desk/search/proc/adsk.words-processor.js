function SearchWordsProcessor(dataLoader) {
    AbstractSearchProcessor.call(this);
    AbstractSearchDataListener.call(this);

    var self = this;
    var wordsData = {};
    var occurences = 0;
    var dataLoaded = false;
    var dataCount = 0;
    var currentResults;
    var currentProgress;
    var scheduler = new ExecutionScheduler(5000);

    function addWordsResults(wordResults, bookName, queryName, bookResults) {
        if (!$.isEmptyObject(bookResults)) {
            if (!wordResults[bookName]) {
                wordResults[bookName] = {};
            }
            wordResults[bookName][queryName] = bookResults;
        }
    }

    function searchForQuery(query, wordResults) {
        for (var bookName in wordsData) {
            var bookResults = {};
            for (var word in wordsData[bookName]) {
                if (word.match(query)) {
                    occurences++;
                    bookResults[word] = wordsData[bookName][word];
                }
            }
            addWordsResults(wordResults, bookName, query.source, bookResults);
        }
    }

    this.registerWordsData = function(bookName, data) {
        if (!wordsData[bookName]) {
            wordsData[bookName] = {};
        }

        $.extend(wordsData[bookName], data);

        if (!dataLoaded) {
            dataCount--;
            if (dataCount > 0) {
                scheduler.schedule(loadComplete);
            } else {
                scheduler.clear();
                loadComplete();
            }
        }
    };

    function loadComplete() {
        dataLoaded = true;
        processSearchResult()
    }

    function loadData() {
        scheduler.schedule(loadComplete);
        dataCount = dataLoader.loadSearchWords();
    }

    function processSearchResult() {
        occurences = 0;
        var wordResults = {};
        var queryArray = currentResults.getRegexpQuery();
        for (var i = 0; i < queryArray.length; i++) {
            searchForQuery(queryArray[i], wordResults);
        }
        // if (occurences < 10000) {
            currentResults.setWordsData(wordResults);
            currentProgress.onWordsSearchCompleted();
            self.callNextProcessor(currentResults, currentProgress);
        /*
        } else {
            currentResults.addWarning('results-limit', currentResults.getQueryWordsList());
            currentProgress.onComplete(currentResults);
        }
        */
    }

    this.processSearchResults = function(results, progressListener) {
        currentResults = results;
        currentProgress = progressListener;
        if (dataLoaded) {
            processSearchResult()
        } else {
            loadData();
        }
    }
}