// Tree view (in form of jQuery widget).
(function($, UTILS) {
	$.widget('adsk.treetabview', {
		options: {
			caption: "Tree",
			data: []
		},

		html: '',
		moveInAction: false,

		_create: function() {
		    console.log('treeview: _create');

			// Render view.
			this._render();
		},

		_render: function() {
		    console.log('treeview: _render');

            this.element
                .html('<ul class="toc-tree filetree"></ul>');
            this._$toc = this.element.find('.toc-tree');

            // Create markup.
        },

        _addEventHandlers: function() {
            console.log('treeview: _addEventHandlers');

            this.element
            .on('touchstart', $.proxy(this._handleTouchStart, this))
            .on('touchend', $.proxy(this._handleTouchEnd, this))
            .on('touchmove', $.proxy(this._handleTouchMove, this));
        },

		_createTocTreeNode: function(data) {
		    console.log('treeview: createListLevel');

            this.html += '<ul>';

            var i, length = data.length, nodeClass, hasChildren, children;

            for (i = 0; i < length; ++i) {
                children = data[i].children;

                // Determine span class (whether it is tree leaf).
                if (children && children.length > 0) {
                    nodeClass = 'parent-topic';
                    hasChildren = true;
                } else {
                    nodeClass = 'topic';
                    hasChildren = false;
                }

                this.html += ('<li>' +
                    '<span class=\"' + nodeClass + '\"' +
                    'data-id = \"' + data[i].attr.id + '\"' +
                    'data-href = \"' + data[i].attr.href + '\"' +
                    '>' +
                    data[i].data +
                    '</span>');

                if (hasChildren) {
                    this._createTocTreeNode(children);
                }

                this.html += '</li>';
            }

            this.html += '</ul>';
        },

        _handleTouchStart: function(event) {
            this.moveInAction = false;
        },

        _handleTouchEnd: function(event) {
            if (!this.moveInAction) {
//            event.preventDefault();
                var $treeItem = $(event.target);
                if ($treeItem.hasClass('topic') || $treeItem.hasClass('parent-topic')) {
//                    Trigger 'treeitemtap' custom event.
                    this._trigger('treeitemtap', event, { href: $treeItem.data('href') });
                }
            }

            this.moveInAction = false;
        },

        _handleTouchMove: function(event) {
            this.moveInAction = true;

            // Prevent bubbling to enable native scrolling.
            event.stopPropagation();
        },

		renderTree: function(data) {
		    console.log('treeview: renderTree');

		    // Create Tree HTML.
		    this._createTocTreeNode(data);

		    // Append created HTML to DOM.
            var $branches = $(this.html).appendTo(this._$toc);

            this._$toc.treeview({
                add: $branches,
                animated: 'fast',
                collapsed: true
            });

            // Add event handlers.
		    this._addEventHandlers();
		}
	});
})(jQuery);