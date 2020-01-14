// Favorites view.
(function($, UTILS) {

    $.widget('adsk.favoritesview', {
        options: {
            favorites: undefined,
            labels: {
                noTopicsAdded: 'There are no topics added to favorites.'
            }
        },

        /* Private members. */

        _create: function() {
            console.log('favoritesview: _create');

            this._render();
            this._addEventHandlers();
        },

        _render: function() {
            console.log('favoritesview: _render');

            // Create markup.
            this.element.html(this._getFavoritesListHtml());
        },

        _getFavoritesListHtml: function() {
            console.log('favoritesview: _getFavoritesListHtml');

            var html = '<ul class="content">';
            var favorites = this.options.favorites;

            if (favorites !== undefined && favorites.length > 0) {
                var i, length = favorites.length;

                for (i = 0; i < length; ++i) {
                    html = html + '<li data-href = \"' + favorites[i].attr.href + '\">' +
                                    '<div class = \"title\">' +
                                        favorites[i].data +
                                    '</div>' +
                                    '<div class = \"snippet\">' +
                                        favorites[i].attr.desc +
                                    '</div>' +
                                  '</li>';
                }
            } else {
                // Add placeholder.
                html = html + '<li class="placeholder">' +
                                '<span>' +
                                    this.options.labels.noTopicsAdded +
                                '</span>' +
                              '</li>';
            }

            html += '</ul>';

            return html;
        },

        _addEventHandlers: function() {
            console.log('favoritesview: _addEventHandlers');

            this._on({
                click: function(event, ui) {
                    var $target = $(event.target);
                    if (!$target.is('li')) {
                        $target = $target.parents('li');
                    }
                    this._trigger('itemclick', event, {
                        href: $target.data('href')
                    });
                }
            });
        },

        /* Public members. */

        refresh: function(favorites) {
            console.log('favoritesview: refresh');

            this.options.favorites = favorites;

            this._render();
        }

    });

})(jQuery);