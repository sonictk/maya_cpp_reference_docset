function SearchConfig(defaultOptions) {
    var config = defaultOptions;
    var storageKey = "autodesk_search_state";

    this.getContentFilters = function() {
        return config.contentFilters;
    };

    function saveState() {
        //searchState.store(config);
        $.storage.store(storageKey, config);
    }

    function restoreState() {
        //searchState.load(config);
        $.storage.load(storageKey, config);
        //convert string values into boolean
        config.highlightEnabled = (!(config.highlightEnabled === "false" || config.highlightEnabled === false));
        config.wholeWordsEnabled = (config.wholeWordsEnabled === "true" || config.wholeWordsEnabled === true);
        config.caseInsensitiveEnabled = (config.caseInsensitiveEnabled === "true" || config.caseInsensitiveEnabled === true);
        config.caseSensitiveSwitch = (config.caseSensitiveSwitch === "true" || config.caseSensitiveSwitch === true);
        config.wholeWordsSwitch = (config.wholeWordsSwitch === "true" || config.wholeWordsSwitch === true);
    }

    this.setSearchMethod = function(option) {
        config.searchMethod = option;
        saveState();
    };

    this.getSearchMethod = function() {
        return config.searchMethod;
    };

    this.setWholeWords = function(option) {
        if (typeof option == "boolean") {
            config.wholeWordsEnabled = option;
        } else {
            config.wholeWordsEnabled = !config.wholeWordsEnabled;
        }
        saveState();
    };

    this.isWholeWordsSearch = function() {
        return config.wholeWordsEnabled;
    };

    this.isWholeWordsEnabled = function() {
        return config.wholeWordsSwitch;
    };

    this.setHighlighting = function(option) {
        if (typeof option == "boolean") {
            config.highlightEnabled = option;
        } else {
            config.highlightEnabled = !config.highlightEnabled;
        }
        saveState();
    };

    this.isHighlightingEnabled = function() {
        return config.highlightEnabled;
    };

    this.setCaseInsensitive = function(option) {
        if (typeof option == "boolean") {
            config.caseInsensitiveEnabled = option;
        } else {
            config.caseInsensitiveEnabled = !config.caseInsensitiveEnabled;
        }
        saveState();
    };

    this.isCaseInsesitive = function() {
        return config.caseInsensitiveEnabled;
    };

    this.isCaseInsensitiveEnabled = function() {
        return config.caseSensitiveSwitch;
    };

    // TODO: use jquery.html5storage
    //restoreState();
}