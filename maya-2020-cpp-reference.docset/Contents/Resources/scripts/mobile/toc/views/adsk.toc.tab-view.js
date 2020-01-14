// Toc view (in form of jQuery widget).
(function($, UTILS) {
	$.widget('adsk.toctabview', {
		options: {
			caption: "TOC",
			data: []
		},

		html: '',
		moveInAction: false,

		_create: function() {
		    console.log('tocview: _create');

			// Render view.
			this._render();
		},

		_render: function() {
		    console.log('tocview: _render');

			// Create markup.
		},

        _addEventHandlers: function() {
            console.log('tocview: _addEventHandlers');

            this.element
            .on('touchstart', $.proxy(this._handleTouchStart, this))
            .on('touchend', $.proxy(this._handleTouchEnd, this))
            .on('touchmove', $.proxy(this._handleTouchMove, this));
        },

		createListLevelHtml: function(data, html) {
		    console.log('tocview: createListLevel');

            this.html += '<div class="background-container"><div class="background"></div></div>';

            this.html += '<ul class="toc">';

            var i, length = data.length;

            for (i = 0; i < length; ++i) {
                this.html += ('<li data-id = \"' +
                    data[i].attr.id + '\" data-href = \"' +
                    data[i].attr.href +
                    '\">' + data[i].data);

                var children = data[i].children;
                if (children && children.length > 0) {
                    this.createListLevelHtml(children, html);
                }

                this.html += '</li>';
            }

            this.html += '</ul>';
        },

        _handleTouchStart: function(event) {
            this.moveInAction = false;
        },

        _handleTouchEnd: function(event) {
//            event.preventDefault();

            if (!this.moveInAction) {
                var $tocItem = $(event.target);

                // Trigger 'tocitemtap' custom event.
                this._trigger('tocitemtap', event, { href: $tocItem.data('href') });
            }

            this.moveInAction = false;
        },

        _handleTouchMove: function(event) {
            this.moveInAction = true;

            // Prevent bubbling to enable native scrolling.
            event.stopPropagation();
        },

		renderToc: function(data) {
		    console.log('tocview: renderToc');

		    // Create TOC HTML.
		    this.createListLevelHtml(data, this.html);

		    // Append created HTML to DOM.
		    this.element.append(this.html);

		    // Add event handlers.
		    this._addEventHandlers();
		}
	});
})(jQuery);