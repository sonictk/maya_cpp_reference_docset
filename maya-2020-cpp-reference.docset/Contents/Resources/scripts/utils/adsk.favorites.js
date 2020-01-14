// Favorites controller.
(function($) {
	$.widget('adsk.favoritescontroller', {
		options: {
            key: 'favorites',
            toc: undefined
		},

		/* Private members. */

		_create: function() {
		    console.log('favoritescontroller: _create');

            // IE8 indexOf polyfill.
            if (!Array.prototype.indexOf) {
                Array.prototype.indexOf = function(obj, start) {
                     for (var i = (start || 0), j = this.length; i < j; i++) {
                         if (this[i] === obj) { return i; }
                     }
                     return -1;
                }
            }
		},

		_getFavoritesFromStorage: function() {
		    console.log('favoritescontroller: _getFavoritesFromStorage');

            var favoritesString = $.localStorage.getItem(this.options.key),
                favorites = undefined;

            try {
                favorites = JSON.parse(favoritesString);
            } catch(e) {
                return [];
            }

            if ((favorites === undefined) ||
                (favorites === null) ||
                !(favorites instanceof Array)) {

                favorites = [];
            }

            return favorites;
        },

		/* Public methods. */

		addOrRemoveFavoriteTopicId: function(id) {
            console.log('favoritescontroller: addOrRemoveFavoriteTopicId, id = ' + id);

            var favorites = this._getFavoritesFromStorage(),
                index = favorites.indexOf(id),
                added;

            if (index === -1) {
                // Add id to favorites.
                favorites.push(id);
                added = true;
            } else {
                // Remove id from favorites.
                var howMany = 1;
                favorites.splice(index, howMany);
                added = false;
            }

            $.localStorage.setItem(this.options.key, JSON.stringify(favorites));

            console.log('favorites: ', favorites);
            console.log('added: ', added);

            return added;
        },

        isTopicIdInFavorites: function(id) {
            console.log('favoritescontroller: isTopicIdInFavorites, id = ' + id);

            var favorites = this._getFavoritesFromStorage(),
                index = favorites.indexOf(id),
                added;

            if (index === -1) {
                added = false;
            } else {
                added = true;
            }

            return added;
        },

        getListOfFavorites: function() {
            console.log('favoritescontroller: getListOfFavorites');

            // Return list (array) of favorites data (id, href, title, description).
            var list = [],
                toc = this.options.toc;

            if (toc === undefined || toc.tocIndexedById === undefined) {
                console.log('favoritescontroller: TOC not loaded: ', toc);
                return list;
            }

            var item, id;

            // Gat all IDs.
            var favorites = this._getFavoritesFromStorage();

            if ((favorites !== undefined) && (favorites.length > 0)) {
                var i, length;

                $.each(toc.tocIndexedById, function(bookName, bookData) {
                    length = favorites.length;

                    console.debug('bookName', bookName);
                    console.debug('bookData', bookData);

                    for (i = 0; i < length; ++i) {
                        id = favorites[i];

                        if (id !== undefined) {
                            //item = toc.tocIndexedById[bookName][id];
                            item = bookData[id];
                            if (item !== undefined) {
                                list.push(item);
                            }
                        }
                    }
                });
            }

            console.log('List of favorites: ', list);
            return list;
        },

        setTocData: function(data) {
            console.log('favoritescontroller: setTocData ', data);

            this.options.toc = data;
        }
    });
})(jQuery);