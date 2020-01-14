// TOC data loader.
// Dependencies: adsk.exectionscheduler widget, getLocalScript plugin.
(function($) {
	$.widget('adsk.tocdataloader', {
		options: {
		    config: {},
		    file: '', // treeData or treeRootData
		    event: '', // register-toc-data or register-toc-root-node-data
            path: 'scripts/',
            timeout: 60000 // One minute.
		},

		_scheduler: undefined,
		_loadedData: 0,
		_totalData: 0,
		_pendingData: {},

		/* Private members. */

		_create: function() {
            console.log('tocdataloader: _create');

            this._scheduler = $.adsk.executionscheduler({
                timeout: this.options.timeout,
                expired: $.proxy(this._loadExpired, this)
            });
		},

		_getTreeDataScriptHref: function(book, file) {
		    console.log('tocdataloader: _getTreeDataScriptHref');

            var path = this.options.path;

            if (book.htmlRootDir) {
                path = path.concat(book.htmlRootDir, "/");
            }

            var scriptHref;

            if (book.files && book.files.js && book.files.js[file]) {
                scriptHref = path.concat(book.files.js[file]);
                return scriptHref;
            }

            return '';
		},

		_getDataToLoad: function() {
		    console.log('tocdataloader: _getDataToLoad');

            var config = this.options.config,
                file = this.options.file,
                that = this;

            this._loadedData = 0;
            this._totalData = config.books.length;

            $.each(config.books, function(index, book) {
                var bookName = book.htmlRootDir;
                that._pendingData[bookName] = {
                    loaded: false,
                    path: that._getTreeDataScriptHref(book, file)
                };
            });
		},

		_loadExpired: function() {
		    console.log('tocdataloader: _loadExpired');

            for (var bookName in this._pendingData) {
                var data = this._pendingData[bookName];
                if (!data.loaded) {
                    this._loadedData++;

                    this._trigger('loaded', event, {
                        bookName:   bookName,
                        bookData:       data,
                        loaded: this._loadedData,
                        total:  this._totalData
                    });
                }
            }

            this._totalData = 0;
            this._loadedData = 0;
		},

		_setDataLoaded: function(bookName) {
		    console.log('tocdataloader: _setDataLoaded');

            this._loadedData++;
            this._pendingData[bookName].loaded = true;
            this._scheduler.schedule();
        },

		_bindListener: function() {
		    console.log('tocdataloader: _bindListener');

		    $(document).bind(this.options.event, $.proxy(function(event, bookName, data) {
                this._setDataLoaded(bookName);

                this._trigger('loaded', event, {
                    bookName:   bookName,
                    bookData:       data,
                    loaded: this._loadedData,
                    total:  this._totalData
                });
            }, this));
		},

		_getScriptLoadingFunction: function() {
		    console.log('tocdataloader: _getScriptLoadingFunction');

		    if (document.location.hostname === 'localhost' || document.location.protocol === 'file:') {
		        console.log('tocdataloader: _getScriptLoadingFunction (offline)');
		        return yepnope;
		    } else {
		        console.log('tocdataloader: _getScriptLoadingFunction (online)');
		        return $.getScript;
		    }
		},

		_loadData: function() {
		    console.log('tocdataloader: _getDataToLoad');

            this._scheduler.schedule();

            // Use either AJAX request for online or script tag insertion for offline use.
            var getScript = this._getScriptLoadingFunction();

            for (var bookName in this._pendingData) {
                var data = this._pendingData[bookName];
                if (data.path) {
                    getScript(data.path);
                }
            }
		},

		/* Public members. */

        loadTocData: function() {
            console.log('tocdataloader: loadTocData');

            this._bindListener();

            this._getDataToLoad();

            this._loadData();
        }
	});
})(jQuery);