// Search tab controller.
(function($, UTILS) {

    $.widget('adsk.searchtabcontroller', {
        options: {
            targetId: 'tab-search',
            searchConfig: undefined,
            config: undefined,
            tocData: undefined
        },

        /* Private members. */

        _view: undefined,
        _tocLoading: undefined,

        _create: function() {
            console.log('searchtabcontroller: _create');

            this._tocLoading = $.Deferred();

            var self = this,
                selector = '#' + this.options.targetId;

            $(selector).searchview({
                config: this.options.config,

                create: function(event, data) {
                    self._view = $(this).searchview("instance");
                    console.log('vire created');
                },

                dosearch: function(event, query) {
                    self.doSearch(query);
                    self.closeSearchOptions();
                    self._trigger('dosearch');
                }
            });
        },

        _init: function() {
            this._trigger('ready');
        },

        _createProcessorsChain: function (config, pubConfig, toc) {
            console.log('searchtabcontroller: createProcessorsChain');

            var dataLoader = new SearchDataLoader(pubConfig),
                stemmer = new SearchStemmer(pubConfig);
                queryProcessor = new SearchQueryProcessor(config, stemmer, dataLoader),
                wordsProcessor = new SearchWordsProcessor(dataLoader),
                cacheProcessor = new SearchEntriesCacheProcessor(dataLoader),
                compactorProcessor = new SearchEntriesCompactor(),
                lookUpProcessor = new SearchEntriesLookupProcessor(),
                filteringProcessor = new SearchResultsFilteringProcessor(config, toc),
                finalProcessor = new FinalSearchProcessor();

            // Setup search data consumers.
            dataLoader.addDataController(queryProcessor);
            dataLoader.addDataController(wordsProcessor);
            dataLoader.addDataController(cacheProcessor);

            // Setup search processors chain.
            queryProcessor.setNextProcessor(wordsProcessor);
            wordsProcessor.setNextProcessor(cacheProcessor);
            cacheProcessor.setNextProcessor(compactorProcessor);
            compactorProcessor.setNextProcessor(lookUpProcessor);
            lookUpProcessor.setNextProcessor(filteringProcessor);
            filteringProcessor.setNextProcessor(finalProcessor);

            return queryProcessor;
        },

        /* Public members. */

        setTocData: function(data) {
            this.options.tocData = data;
            this._tocLoading.resolve();
        },

        doSearch: function(query) {
            console.log('doSearch');

            var self = this;

            self._view.showPreloader();

            this._tocLoading.done(function() {
                var o = self.options,
                    results = new SearchResults(query);

                o.config.searchOptions = self._view.getActualSearchOptions();
                o.config.searchOptions.searchQuery = query;
                o.searchConfig = new SearchConfig(o.config.searchOptions);

                var processor = self._createProcessorsChain(o.searchConfig,
                                                            o.config,
                                                            o.tocData.tocDataIndexedByTopicNumber);

                var progressListener = new SearchProgressListener(self);

                processor.processSearchResults(results, progressListener);
            });
        },

        displayProgress: function(progress) {
            this._view.displayProgress(progress);
        },

        displayResults: function(results) {
            this._view.displayResults(results.getResults());

            // Set highlight options to use in topic controller later.
            this._trigger('highlight', {}, this.options.config.searchOptions);

            this._view.hidePreloader();
        },

        closeSearchOptions: function() {
            this._view.closeSearchOptions();
        }

    });

})(jQuery);