// Favorites view (in form of jQuery widget).
(function($, UTILS) {
	$.widget('adsk.favoritestabview', {
		options: {
			caption: "Favorites",
			favorites: undefined
		},

		touchmoved: false,
		
		_create: function() {
		    console.log('favoritestabview: _create');

			// Render view.
			this._render();
			
			// Handle UI events.
            this._addEventHandlers();
		},

		_addEventHandlers: function() {
            console.log('favoritestabview: _addEventHandlers');

            this.element
            .on('touchstart', $.proxy(function(event) {

                this.touchmoved = false;

            }, this))
            .on('touchend', $.proxy(function(event) {

                if (!this.touchmoved) {
                    var $target = $(event.target);
                    if (!$target.is('li')) {
                        $target = $target.parents('li');
                    }
                    this._trigger('itemtap', event, {
                        href: $target.data('href')
                    });
                }
                this.touchmoved = false;

            }, this))
            .on('touchmove', $.proxy(function(event) {

                this.touchmoved = true;

                // Prevent bubbling to enable native scrolling.
                event.stopPropagation();

            }, this));
        },
		
		_render: function() {
		    console.log('favoritestabview: _render');

			// Create markup.

            this.element.html(this._getFavoritesListHtml());
		},

		_getFavoritesListHtml: function() {
		    console.log('favoritestabview: _getFavoritesListHtml');

            var html = '<ul>';
            var favorites = this.options.favorites;

            if (favorites !== undefined) {
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
            }

            html += '</ul>';

            return html;
		},

		refresh: function(favorites) {
		    console.log('favoritestabview: refresh');

		    this.options.favorites = favorites;

		    this.element.html(this._getFavoritesListHtml());
		}
	});  
})(jQuery);