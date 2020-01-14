function SearchEntriesCacheProcessor(dataLoader) {
    AbstractSearchDataListener.call(this);
    AbstractSearchProcessor.call(this);

    var cachedData = {};
    var currentSearch;
    var currentProgress;
    var dataLoaded = 0;
    var dataToLoad = 0;
    var searchInProgress = false;
    var self = this;
    var scheduler = new ExecutionScheduler(5000);

    function storeData(bookName, data) {
        if (!cachedData[bookName]) {
            cachedData[bookName] = {};
        }
        $.extend(cachedData[bookName], data);
    }

    function iterateData(data, callback) {
        for (var bookName in data) {
            for (var query in data[bookName]) {
                for (var word in data[bookName][query]) {
                    callback(data[bookName][query][word], bookName, word, query);
                }
            }
        }
    }

    function getUncachedData(wordsData) {
        var uncached = {};

        function uncachedRetriever(data, bookName, word) {
            if (!(cachedData[bookName] && cachedData[bookName][word])) {
                uncached[bookName+":"+data] = [bookName, data];
            }
        }

        iterateData(wordsData, uncachedRetriever);

        var list = [];
        for (var data in uncached) {
            list.push(uncached[data]);
        }

        return list;
    }

    function retriveDataFromCache() {
        var wordsData = currentSearch.getWordsData();

        function dataRetriever(data, bookName, word, query) {
            if (cachedData[bookName] && cachedData[bookName][word]) {
                wordsData[bookName][query][word] = cachedData[bookName][word];
            } else {
                delete wordsData[bookName][query][word];
            }

            if ($.isEmptyObject(wordsData[bookName][query])) {
                delete wordsData[bookName][query];
            }

            if ($.isEmptyObject(wordsData[bookName])) {
                delete wordsData[bookName];
            }
        }

        iterateData(wordsData, dataRetriever);

        return wordsData;
    }

    function processWordsData() {
        searchInProgress = false;
        currentSearch.setWordsData(retriveDataFromCache());
        reportProgress();
        self.callNextProcessor(currentSearch, currentProgress);
    }

    function loadRemainingData(uncachedData) {
        scheduler.schedule(processWordsData);
        dataLoaded = 0;
        dataToLoad = uncachedData.length;
        reportProgress();
        for (var i = 0; i < uncachedData.length; i++) {
            dataLoader.loadSearchEntries(uncachedData[i][0], uncachedData[i][1]);
        }
    }

    function reportProgress() {
        currentProgress.onDataLoaded(dataLoaded, dataToLoad);
    }

    function reportDataLoaded() {
        if (searchInProgress) {
            dataLoaded += 1;
            if (dataLoaded === dataToLoad) {
                scheduler.clear();
                processWordsData();
            } else {
                reportProgress();
                scheduler.schedule(processWordsData);
            }
        }
    }

    this.registerEntriesData = function(bookName, dataPosition, data) {
        storeData(bookName, data);
        reportDataLoaded();
    };

    function initUpdateProcess(searchResult, progressListener) {
        dataLoaded = 1;
        dataToLoad = 1;
        currentSearch = searchResult;
        currentProgress = progressListener;
        searchInProgress = true;
    }

    function updateData() {
        var uncachedData = getUncachedData(currentSearch.getWordsData());
        if (uncachedData.length === 0) {
            processWordsData();
        } else {
            loadRemainingData(uncachedData);
        }
    }

    this.processSearchResults = function(searchResult, progressListener) {
        initUpdateProcess(searchResult, progressListener);
        updateData();
    }
}