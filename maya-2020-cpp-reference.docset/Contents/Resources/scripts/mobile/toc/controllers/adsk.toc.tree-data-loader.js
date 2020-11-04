// TOC data loader.
(function($) {
	$.widget('adsk.tocdataloader', {
		options: {
		    url: 'scripts/toc-treedata.js'
		},

		_getPath: function() {
		    console.log("tocdataloader: _getPath");

		    var result, url = this.options.url;
            if (url) {
                result = url;
            } else {
                result = undefined;
            }
            return result;
		},

		_getTocData: function(path, callback) {
		    console.log("tocdataloader: _getTocData");

		    $.get(path, function (data) {
                $(document).bind("register-toc-data", function (event, bookName, data) {
                    $(this).unbind(event);
                    callback(data);
                });

                eval(data);
            });
		},

		_handleLoad: function(data) {
		    console.log("tocdataloader: _handleLoad, ", data);

		    this._trigger('loaded', {}, { toc: data });
		},

		loadTocData: function() {
		    console.log("tocdataloader: loadTocData");

		    var path = this._getPath();

		    if (path) {
                this._getTocData(path, $.proxy(this._handleLoad, this));
            } else {
                this._handleLoad(undefined);
            }
		}
    });
})(jQuery);