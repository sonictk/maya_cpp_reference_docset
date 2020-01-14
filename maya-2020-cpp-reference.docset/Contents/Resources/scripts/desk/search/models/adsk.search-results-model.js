function SearchResults(query) {
    var list = [];
    var searchQuery = query;
    var queryWords = [];
    var regexpQuery = [];
    var wordsData = {};
    var topicsData = {};
    var warnings = {};

    function sortFunction(a, b) {
        return a.rank > b.rank ? -1 : 1
    }

    this.addResult = function(searchResult) {
        list.push(searchResult);
    };

    this.sortResults = function() {
        list.sort(sortFunction);
    };

    this.setWordsData = function(theWordsData) {
        wordsData = theWordsData;
    };

    this.getWordsData = function() {
        return wordsData;
    };

    this.setTopicsData = function(theTopicData) {
        topicsData = theTopicData;
    };

    this.getTopicsData = function() {
        return topicsData;
    };

    this.getResults = function() {
        return list;
    };

    this.setRegexpQuery = function(query) {
        regexpQuery = query;
    };

    this.getRegexpQuery = function() {
        return regexpQuery;
    };

    this.setQueryWordsList = function(words) {
        queryWords = words;
    };

    this.getQueryWordsList = function() {
        return queryWords;
    };

    this.getSearchQuery = function() {
        return searchQuery;
    };

    this.addWarning = function(warning, data) {
        warnings[warning] = data;
    };

    this.getWarnings = function() {
        return warnings;
    };
}