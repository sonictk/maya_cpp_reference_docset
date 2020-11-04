// ContextId data loader.
(function($) {
	$.widget('adsk.contextiddataloader', {
		options: {
		    config: {},
            path: 'scripts/',
            timeout: 5000
		},

		_scheduler: undefined,
		_loadedData: 0,
		_totalData: 0,
		_pendingData: {},

		/* Private members. */

		_create: function() {
            console.log('contextiddataloader: _create');

            this._scheduler = $.adsk.executionscheduler({
                timeout: this.options.timeout,
                expired: $.proxy(this._loadExpired, this)
            });
		},

		_getPathSetToLoad: function(book) {
		    console.log('contextiddataloader: _getPathSetToLoad');

            var that = this,
                path = this.options.path;

            if (book.htmlRootDir) {
                path = path.concat(book.htmlRootDir, "/");
            }

            var pathSet = [];

            $.each(book.files.js.contextIdEntries, function(index, entry) {
                if (entry && entry != '') {
                    pathSet.push(path.concat(entry));
                }
            });

            return pathSet;
		},

		_getBooksDataToLoad: function(books) {
		    console.log('contextiddataloader: _getBooksDataToLoad');

            var that = this;

            this._loadedData = 0;
            this._totalData = 0;

            $.each(books, function(index, book) {
                var bookName = book.htmlRootDir,
                    entryCount = book.files.js.contextIdEntries.length;

                that._totalData += entryCount;

                that._pendingData[bookName] = {
                    loaded: false,
                    bookName: bookName,
                    pathSet: that._getPathSetToLoad(book),
                    total: entryCount,
                    count: 0
                };
            });
		},

		_loadExpired: function() {
		    console.log('contextiddataloader: _loadExpired');

            for (var bookName in this._pendingData) {
                var data = this._pendingData[bookName];

                if (!data.loaded) {
                    this._loadedData++;

                    this._trigger('loaded', {}, {
                        bookName:   bookName,
                        bookData:   data,
                        loaded:     this._loadedData,
                        total:      this._totalData
                    });
                }
            }

            this._totalData = 0;
            this._loadedData = 0;
		},

		_setDataLoaded: function(bookName) {
		    console.log('contextiddataloader: _setDataLoaded');

		    var pendingData = this._pendingData[bookName];

            pendingData.count += 1;
            if (pendingData.count == pendingData.total) {
                pendingData.loaded = true;
            }

            this._loadedData++;
            this._scheduler.schedule();
        },

		_bindListener: function() {
		    console.log('contextiddataloader: _bindListener');

		    $(document).bind("register-contextid-entries", $.proxy(function(event, bookName, data) {
                this._setDataLoaded(bookName);

                this._trigger('loaded', event, {
                    bookName: bookName,
                    bookData: data,
                    loaded: this._loadedData,
                    total: this._totalData
                });
            }, this));
		},

		_getScriptLoadingFunction: function() {
		    console.log('contextiddataloader: _getScriptLoadingFunction');

		    if (document.location.hostname === 'localhost' || document.location.protocol === 'file:') {
		        console.log('contextiddataloader: _getScriptLoadingFunction (offline)');
		        return yepnope;
		    } else {
		        console.log('contextiddataloader: _getScriptLoadingFunction (online)');
		        return $.getScript;
		    }
		},

		_loadData: function() {
		    console.log('contextiddataloader: _loadData');

            this._scheduler.schedule();

            // Use either AJAX request for online or script tag insertion for offline use.
            var getScript = this._getScriptLoadingFunction();

            for (var bookName in this._pendingData) {
                var pendingData = this._pendingData[bookName];

                if (pendingData) {
                    var len = pendingData.pathSet.length, i, path;

                    for (i = 0; i < len; ++i) {
                        path = pendingData.pathSet[i];

                        if (path) {
                            getScript(path);
                        }
                    }
                }
            }
		},

		/* Public members. */

        loadContextIdData: function() {
            console.log('contextiddataloader: loadTocData');

            this._bindListener();

            this._getBooksDataToLoad(this.options.config.books);

            if (this._totalData > 0) {
                this._loadData();
            } else {
                this._trigger('loaded', null, {
                    bookName: null,
                    bookData: null,
                    loaded: 0,
                    total: 0
                });
            }
        }
	});
})(jQuery);