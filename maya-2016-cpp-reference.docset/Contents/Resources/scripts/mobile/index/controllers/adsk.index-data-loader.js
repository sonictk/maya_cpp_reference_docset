(function ($) {
    $.widget('adsk.indexdataloader', {
        options: {
            url: 'scripts/adsk.indexes-data.js'
        },

        _getPath:function () {
            console.log("indexdataloader: _getPath");
            var result,
                url = this.options.url;
            if (url) {
                result = url;
            } else {
                result = undefined;
            }
            return result;
        },

        _getIndexData: function(path, callback) {
            console.log("indexdataloader: _getIndexData");

            $.get(path, function (data) {
                $(document).bind("register-index-data", function (event, data) {
                    $(this).unbind(event);
                    callback(data);
                });

                eval(data);
            });
        },

        _handleLoad: function(data) {
            console.log("indexdataloader: _handleLoad, ");

            this._trigger('loaded', {}, { index: data });
        },

        loadIndexData: function() {
            console.log("indexdataloader: loadIndexData");

            var path = this._getPath();

            if (path) {
                this._getIndexData(path, $.proxy(this._handleLoad, this));
            } else {
                this._handleLoad(undefined);
            }
        }
});
})(jQuery);