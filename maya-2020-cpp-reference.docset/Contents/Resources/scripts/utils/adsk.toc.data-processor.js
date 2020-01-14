// TOC data processor (indexing, beadcrumbs etc).
(function($) {
	$.widget('adsk.tocdataprocessor', {
		options: {
            tocData: {},
            tocDataIndexedByHref: {},
            tocDataIndexedByTopicNumber: {},
            tocDataIndexedById: {}
		},

		/* Private members. */

		_create: function() {
            console.log('tocdataprocessor: _create');
		},

		_indexTocData: function(bookName, bookData) {
            console.log('tocdataprocessor: _indexTocData');

            if (bookData.attr !== undefined &&
                bookData.attr.tn !== undefined &&
                bookData.attr.href !== undefined &&
                bookData.attr.id !== undefined) {

                var topicNumber = bookData.attr.tn;
                this.options.tocDataIndexedByTopicNumber[bookName][topicNumber] = bookData;

                var topicHref = bookData.attr.href;
                this.options.tocDataIndexedByHref[bookName][topicHref] = bookData;

                var topicId = bookData.attr.id;
                this.options.tocDataIndexedById[bookName][topicId] = bookData;

                if (bookData.children) {
                    $.each(bookData.children, $.proxy(function(index, book) {
                        this._indexTocData(bookName, book);
                    }, this))
                }
            }
        },

        _getVisibleParentTopic: function(bookName, topic) {
            console.log('tocdataprocessor: _getParentTopic');

            if (topic && topic.attr.toc == "false") {
                return this._getVisibleParentTopic(bookName, this._getTopicByTopicNumber(bookName, topic.attr.pn));
            } else {
                return topic;
            }
        },

        // Used for breadcrumbs creation.
        _composeParentTopicArray: function() {
            console.log('tocdataprocessor: _composeParentTopicArray');

        },

        _getTopicByTopicNumber: function(bookName, topicNumber) {
            console.log('tocdataprocessor: _getTopicByTopicNumber');

            var toc = this.options.tocDataIndexedByTopicNumber;

            return toc[bookName] ? toc[bookName][topicNumber] : undefined;
        },

        _getTopicByHref: function(bookName, topicHref) {
            console.log('tocdataprocessor: _getTopicByHref');

            var toc = this.options.tocDataIndexedByHref;

            return toc[bookName] ? toc[bookName][topicHref] : undefined;
        },

        _getSiblingPage: function(bookName, topicNumber, attribute) {
            console.log('tocdataprocessor: _getSiblingPage');

            var currentTopic = this._getTopicByTopicNumber(bookName, topicNumber);

            if (currentTopic) {
                return this._getTopicByTopicNumber(bookName, currentTopic.attr[attribute]);
            } else {
                return undefined;
            }
        },

		/* Public members. */

		/*
		    data members:
		        bookName,
		        bookData,
		        loaded - position of current loaded book,
		        total - count of all books to load.
		*/
		setBookTocData: function(data) {
		    console.log('tocdataprocessor: setBookTocData, data = ', data);

		    var bookName    = data.bookName,
		        bookData    = data.bookData,
		        loaded      = data.loaded,
		        total       = data.total;

            if (bookData) {
                this.options.tocData[bookName] = bookData;
                this.options.tocDataIndexedByTopicNumber[bookName] = {};
                this.options.tocDataIndexedByHref[bookName] = {};
                this.options.tocDataIndexedById[bookName] = {};

                $.each(bookData, $.proxy(function(index, entry) {
                    this._indexTocData(bookName, entry);
                }, this))
            }

            if (total > 0) {
                this._trigger('progress', {}, {
                    percent: Math.round(loaded / total * 100)
                });
            }

            if (total === loaded) {
                this._trigger('indexed', {}, {
                    tocData: this.options.tocData,
                    tocDataIndexedByHref: this.options.tocDataIndexedByHref,
                    tocDataIndexedByTopicNumber: this.options.tocDataIndexedByTopicNumber,
                    tocIndexedById: this.options.tocDataIndexedById
                });
            }
		},

		getTopicDataByTopicNumber: function(bookName, topicNumber) {
		    console.log('tocdataprocessor: getTopicDataByTopicNumber');

            return this._getTopicByTopicNumber(bookName, topicNumber);
		},

		getTopicDataByHref: function(bookName, topicHref) {
            console.log('tocdataprocessor: getTopicDataByHref');

            return this._getTopicByHref(bookName, topicHref);
        },

        getNextTopicByTopicNumber: function(bookName, topicNumber) {
            console.log('tocdataprocessor: getNextTopicByTopicNumber');

            return this._getSiblingPage(bookName, topicNumber, "nxn");
        },

        getPreviousTopicByTopicNumber: function(bookName, topicNumber) {
            console.log('tocdataprocessor: getPreviousTopicByTopicNumber');

            return this._getSiblingPage(bookName, topicNumber, "prn");
        },

        getParentTopicByTopicNumber: function(bookName, topicNumber) {
            console.log('tocdataprocessor: getParentTopicByTopicNumber');

            return this._getSiblingPage(bookName, topicNumber, "pn");
        }
	});
})(jQuery);