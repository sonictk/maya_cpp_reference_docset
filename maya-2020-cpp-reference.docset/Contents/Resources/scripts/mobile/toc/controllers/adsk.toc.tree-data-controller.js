// TOC data controller.
(function($) {
	$.widget('adsk.tocdatacontroller', {
		options: {
            toc: undefined
		},

		_tocDataLoader: undefined,

		_create: function() {
            console.log("tocdatacontroller: _create");

            // Load TOC tree data.
            this._tocDataLoader = $.adsk.tocdataloader({
                loaded: $.proxy(this._load, this)
            });

            this._tocDataLoader.loadTocData();
		},

		_indexData: function(bookName, bookData) {
		    var toc = this.options.toc,
		        attr = bookData.attr;

            toc.tocIndexedById[bookName][attr.id] = bookData;
            toc.tocIndexedByHref[bookName][attr.href] = bookData;
            toc.tocIndexedByTopicNumber[bookName][attr.tn] = bookData;

            if (bookData.children) {
                $.each(bookData.children, $.proxy(function(index, entry) {
                    this._indexData(bookName, entry);
                }, this));
            }
        },

		_load: function(event, data) {
            console.log("tocdatacontroller: _load, ", data);

            // Create TOC index by entry ID's.
            if (data !== undefined && data.toc !== undefined) {
                var toc = this.options.toc = {};

                // TODO: add loop over books.
                var bookName = "";

                toc.toc = data.toc;

                toc.tocIndexedById = {};
                toc.tocIndexedById[bookName] = {};

                toc.tocIndexedByHref = {};
                toc.tocIndexedByHref[bookName] = {};

                toc.tocIndexedByTopicNumber = {};
                toc.tocIndexedByTopicNumber[bookName] = {};

                $.each(data.toc, $.proxy(function(index, entry) {
                    this._indexData(bookName, entry);
                }, this));
            }

            this._trigger('indexed', {}, this.options.toc);
		}
    });
})(jQuery);