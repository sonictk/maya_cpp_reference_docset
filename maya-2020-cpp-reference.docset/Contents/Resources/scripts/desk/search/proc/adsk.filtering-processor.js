function SearchResultsFilteringProcessor(config, indexedTocData) {
    AbstractSearchProcessor.call(this);

    var currentResult = {};
    var filters = {
        "or": function() {},
        "and": andFilter,
        "phrase": phraseFilter
    };

    //var indexedTocData = undefined;
    //var tocController = $.hlpSys.getTocController();

    function andFilter(topicsData, bookName, topicPosition) {
        // if one page contain less words occurences then query - remove result
        if (topicsData[bookName][topicPosition][1] < currentResult.getQueryWordsList().length) {
            delete topicsData[bookName][topicPosition];
        }
    }

    function phraseFilter(topicsData, bookName, topicPosition) {
        //if minimal distance between phrase words not 2 - remove result
        var curTopicData = topicsData[bookName][topicPosition];
        if ((Math.abs(curTopicData[3]) > 2) || (curTopicData[1] < currentResult.getQueryWordsList().length)) {
            if (currentResult.getQueryWordsList().length != 1) {
                delete topicsData[bookName][topicPosition];
            }
        }
    }


    function getPageData(bookName, topicPosition) {
        //return tocController.getTopicData(bookName, topicPosition);
        // TODO: bookName
        return indexedTocData[bookName] ? indexedTocData[bookName][topicPosition] : undefined;
        //console.debug(indexedTocData[topicPosition]);
        //return indexedTocData ? indexedTocData[topicPosition] : undefined;
    }

    function contentFilter(topicsData, bookName, topicPosition) {
        var filterList = config.getContentFilters();
        var pageData = getPageData(bookName, topicPosition);
        var attr = pageData.attr;
        var href = attr.href;
        for (var ifilter = 0; ifilter < filterList.length; ifilter++)
        {
            if (!filterList[ifilter].enabled)
                if (href.match(filterList[ifilter].filter))
                    delete topicsData[bookName][topicPosition];
        }
    }

    function filterData(topicsData, bookName, topicPosition) {
        contentFilter(topicsData, bookName, topicPosition);
        var filter = filters[config.getSearchMethod()];
        filter(topicsData, bookName, topicPosition);
    }

    function filterTopicsData() {
        var topicsData = currentResult.getTopicsData();
        for (var bookName in topicsData) {
            for (var topicPosition in topicsData[bookName]) {
                filterData(topicsData, bookName, topicPosition);
            }
        }

        return topicsData;
    }

        function retrieveTopicsData(topicsData) {
        for (var bookName in topicsData) {
            for (var topicPosition in topicsData[bookName]) {
                var pageData = getPageData(bookName, topicPosition);
                if (pageData) {
					var title = (pageData.title) ? pageData.title : pageData.data;
                    currentResult.addResult(new SearchResult(pageData.attr.href, title, topicsData[bookName][topicPosition][0], bookName, pageData.attr.desc, []))
                }
            }
        }
    }

    this.processSearchResults = function(result, progressListener) {
        currentResult = result;
        var filtered = filterTopicsData();
        retrieveTopicsData(filtered);
        progressListener.onFilteringComplete();
        this.callNextProcessor(result, progressListener);
    }
}