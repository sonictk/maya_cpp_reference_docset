function SearchDataLoader(config) {

    function getScriptsPath(book) {
        var path = "scripts/";

        if (book && book.htmlRootDir) {
            path = path.concat(book.htmlRootDir, "/");
        }

        return path;
    }

    function loadStopWords() {
        try {
            var scriptName = config.searchOptions.searchStopWords;
            if (scriptName) {
                var path = getScriptsPath({}),
                    scriptHref = path.concat(scriptName);

                yepnope.injectJs(scriptHref, function() {
                    console.debug('searchdataloader: ', scriptHref);
                });
            }
        } catch(e) {
            //no data for stop words. ignore
            console.debug('No data for stop words. Ignore.');
        }
    }

    function loadSearchDataSpecifiedInConfig(config, dataName) {
        var booksArray = config.books;
        var booksCount = 0;

        for (var i = 0; i < booksArray.length; ++i) {
            try {
                var book = booksArray[i];
                var path = getScriptsPath(book);
                var scriptName = book.files.js[dataName];
                if (scriptName) {
                    booksCount++;
                    var scriptHref = path.concat(scriptName);

                    yepnope.injectJs(scriptHref, function() {
                        console.debug('searchdataloader: ', scriptHref);
                    });
                }
            } catch (e) {
                console.debug('No data for search words. Ignore.');
            }
        }

        return booksCount;
    }

    function loadSearchEntries(bookName, position) {
        try {
            var booksArray = config.books;

            for (var i = 0; i < booksArray.length; ++i) {
                var book = booksArray[i];
                if (bookName === book.htmlRootDir) {
                    var path = getScriptsPath(book),
                        searchEntry = book.files.js.searchEntries[position];

                    if (searchEntry) {
                        var scriptHref = path.concat(searchEntry);

                        yepnope.injectJs(scriptHref, function() {
                            console.debug('searchdataloader: ', scriptHref);
                        });
                    }
                }
            }
        } catch (ex) {
            //no data for the book. ignore
            console.debug('No data for the book. Ignore.');
        }
    }

    function bindListener(event, object, method) {
        $(document).bind(event, function() {
            method.apply(object, $.makeArray(arguments).slice(1));
        })
    }

    this.addDataController = function(controller) {
        bindListener("register-search-words", controller, controller.registerWordsData);
        bindListener("register-search-entries", controller, controller.registerEntriesData);
        bindListener("register-search-stop-words", controller, controller.registerStopWords);
    };

    this.loadSearchWords = function() {
        return loadSearchDataSpecifiedInConfig(config, "searchWords");
    };

    this.loadSearchEntries = function(book, position) {
        loadSearchEntries(book, position);
    };

    this.loadStopWords = function() {
        loadStopWords();
    }
}