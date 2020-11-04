function SearchQueryProcessor(config, stemmer, dataLoader) {
    AbstractSearchProcessor.call(this);
    AbstractSearchDataListener.call(this);

    var self = this;
    var stopWords = {};
    var dataLoaded = false;
    var scheduler = new ExecutionScheduler(2000);
    var currentResult;
    var currentProgress;

    function getQueryArray(query) {
        // Replace stop symbols.
        query = query.replace(/\\/g, "\\\\");
        query = query.replace(/[\/\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:\`\”\~\#\%\&\-\;\'\"\,\�\�]/g, " ");
        query = query.replace(/\*/g, "[^\\s]*");
        query = query.replace(/\?/g, ".");

        // Remove white space.
        var regexp = /(\x20\x20)/g;
        while (query.match(regexp)) query = query.replace(regexp, "\x20");

        regexp = /(^\x20)|(\x20$)/g;
        while (query.match(regexp)) query = query.replace(regexp, "");

        // Let's not run search for empty query.
        return (query != "") ? query.split(" "): [];
    }

    function filterQuery(queryArr) {
        var resultArr = [];
        var filteredStopWords = [];

        while (queryArr.length > 0) {
            var currentWord = queryArr.splice(0, 1)[0];

            if (stopWords[currentWord.toLowerCase()]) {
                filteredStopWords.push(currentWord);
            } else if ($.inArray(currentWord, queryArr) > -1) {
                //skip current word
            } else {
                resultArr.push(currentWord);
            }
        }

        currentResult.setQueryWordsList(resultArr);
        if (filteredStopWords.length > 0) {
            currentResult.addWarning('filtered-stopwords', filteredStopWords);
        }
        return resultArr;
    }

    function generateRegExpArray(queryArr, stemmedArr) {
        var resultArray = [];
        var parameters = config.isCaseInsesitive() ? "gi" : "g";
        for (var i = 0; i < queryArr.length; i++) {
            var matcher = '';
            if (config.isWholeWordsSearch()) {
                matcher = '(' + queryArr[i] + ')';
                matcher = '\\b' + matcher + '\\b';
            } else {
                matcher = '(' + queryArr[i] + ')|(' + stemmedArr[i] + ')';
            }
            resultArray.push(new RegExp(matcher, parameters));
        }

        return resultArray;
    }

    function prepareQuery() {
        dataLoaded = true;
        var initialQueries = getQueryArray(currentResult.getSearchQuery());
        var queryArr = filterQuery(initialQueries);
        var stemmedQueryArr = stemmer.stem(queryArr);
        var regexpArr = generateRegExpArray(queryArr, stemmedQueryArr);
        currentResult.setRegexpQuery(regexpArr);

        currentProgress.onQueryProcessed();
        self.callNextProcessor(currentResult, currentProgress);
    }

    function loadData() {
        scheduler.schedule(prepareQuery);
        dataLoader.loadStopWords();
    }

    this.registerStopWords = function(words) {
        $.extend(stopWords, words);
        if (!dataLoaded) {
            scheduler.clear();
            prepareQuery();
        }
    };

    this.processSearchResults = function(searchResults, progressListener) {
        currentResult = searchResults;
        currentProgress = progressListener;
        if (dataLoaded) {
            prepareQuery();
        } else {
            loadData();
        }
    }
}