// Toc view.
(function($, UTILS) {

    $.widget('adsk.tocview', {
        options: {
            tocData: undefined,
            tocRootNodesData: undefined
        },

        /* Private members. */

        _$preloader: undefined,
        _$content: undefined,
        _html: '',

        _create: function() {
            console.log('tocview: _create');

            // Create layout.
            this._renderView();

            // Add event handlers.
            this._addEventHandlers();

            // Show preloader.
            this.showPreloader();
        },

        _renderView: function() {
            console.log('tocview: _render');

            // Create app view markup.
            this.element
            .html('<div class="block-preloader"></div>' +
                  '<div class="content">' +
                    '<ul class="toc filetree"></ul>' +
                  '</div>');

            this._$preloader = this.element.find('.block-preloader');
            this._$content = this.element.find('.content');
            this._$toc = this.element.find('.toc');
        },

        _addEventHandlers: function() {
            console.log('tocview: _addEventHandlers');

            this._on({
                click: this.handlers.click
            });
        },

        _hasTocChildren: function(children) {
            var hasChildren = false;

            if (children && children.length > 0) {
                hasChildren = true;
            }

            return hasChildren;
        },

        _chooseTocTreeNodeClass: function(hasChildren, attributes) {
            var nodeClass = 'root-node';

            if (hasChildren) {
                nodeClass = 'parent-topic';
            } else if (attributes.href !== undefined && attributes.href != '') {
                nodeClass = 'topic';
            }

            return nodeClass;
        },

        _createAttributeWithValue: function(name, value) {
            if (name && name != '' && value && value != '') {
                return name + ' = \"' + value + '\" ';
            }

            return '';
        },

        _createDescription: function(nodeClass, description) {
            if (nodeClass == 'root-node' && description != '') {
                return ('<span class = \"description\">' + description + '</span>');
            }

            return '';
        },

        _createTocTreeNode: function(data, root) {
            console.log('tocview: _createTocTreeNode');

            if (root) {
                this._html += '<ul>';
            }

            var i, length = data.length, nodeClass, hasChildren, children;

            for (i = 0; i < length; ++i) {
                if (data[i].attr.toc == '' || data[i].attr.toc === 'false') {
                    continue;
                }

                children = data[i].children;

                
if (data[i].attr.toc == '' || data[i].attr.toc === 'false') {
                    continue;
                }

// Determine wrapper class (whether it is tree leaf or not).
                hasChildren = this._hasTocChildren(children);
                nodeClass = this._chooseTocTreeNodeClass(hasChildren, data[i].attr);

                this._html += ('<li>' +
                    '<a ' +
                        this._createAttributeWithValue('class', nodeClass) +
                        this._createAttributeWithValue('href', data[i].attr.href) +
                        this._createAttributeWithValue('data-href', data[i].attr.href) +
                    '>' +
                        data[i].data +
                        this._createDescription(nodeClass, data[i].attr.desc) +
                    '</a>');

                if (hasChildren) {
                    this._createTocTreeNode(children, true);
                }

                this._html += '</li>';
            }

            if (root) {
                this._html += '</ul>';
            }
        },

        _renderTocTree: function() {
            console.log('tocview: _renderTocTree');

            // Create nested lists.
            var tocData = this.options.tocData,
                tocRootData = this.options.tocRootData.tocData,
                booklist = this.options.booklist;

            this._processBooklist(tocData, tocRootData, booklist, false);

            var parent = this._$toc.parent();
            var toc = this._$toc.detach();

            toc[0].innerHTML = this._html;

            this._html = null;

            toc.treeview({
                //prerendered: 'true',
                animated: 'fast',
                collapsed: true
            });

            parent.append(toc);
        },

        _processBooklist: function(tocData, tocRootData, booklist, root) {
            if (root) {
                this._html += '<ul>';
            }

            var i, length = booklist.length, node, children, hasChildren, nodeClass, bookName;

            if (length == 0) {
                this._createTocItem(tocData, tocRootData, '');
            }

            for (i = 0; i < length; ++i) {
                bookName = booklist[i].href;

                if (bookName !== undefined && bookName !== '') {
                    this._createTocItem(tocData, tocRootData, bookName);
                } else {
                    children = booklist[i].children;

                    
if (data[i].attr.toc == '' || data[i].attr.toc === 'false') {
                    continue;
                }

// Determine wrapper class (whether it is tree leaf).
                    hasChildren = this._hasTocChildren(children);
                    nodeClass = this._chooseTocTreeNodeClass(hasChildren, booklist[i].attr);

                    this._html += ('<li>' +
                        '<a ' + this._createAttributeWithValue('class', nodeClass) + '>' +
                            booklist[i].data +
                        '</a>');

                    if (hasChildren) {
                        this._processBooklist(tocData, tocRootData, children, true);
                    }

                    this._html += '</li>';
                }
            }

            if (root) {
                this._html += '</ul>';
            }

        },

        _createTocItem: function(tocData, tocRootData, bookName) {
            if (tocRootData[bookName] && tocRootData[bookName].length > 0) {
                this._createTocTreeNode(tocRootData[bookName], false);
            } else {
                this._createTocTreeNode(tocData[bookName], false);
            }
        },

        _toggleTopicStyle: function (data) {
            var href = data.href;

            // Strip hash fragment part.
            var pos = href.indexOf('#');
            if (pos != -1) {
                href = href.substring(0, pos);
            }

            if (this._$content != undefined) {
                var $treeElem = this._$content.find('a[data-href="'+ data.href +'"]');
				if (!$treeElem.length) $treeElem = this._$content.find('a[data-href="'+ href +'"]');

                this._$content.find('.selected').removeClass('selected');
                $treeElem.addClass('selected');
            }
        },

        _expandToc: function () {
            var $elem = this._$content.find('.selected');
            var parents = $elem.parents();

            if (parents.hasClass('expandable')) {
                parents.filter('.expandable').find('>.hitarea').trigger('click');
            }

        },

        _scrollTocToSelectedTopic: function() {
            var elem = (this._$content) ? this._$content.find('.selected').get(0) : $(this).find('.selected').get(0);

            if (elem && !elementInViewport(elem)) {
                elem.scrollIntoView();
            }

            function elementInViewport(el) {
                var rect = el.getBoundingClientRect();
                console.log(rect);
                console.log(window.innerHeight - 50);
                return (
                        rect.top >= 120 &&
                        rect.left >= 0 &&
                        rect.bottom <= window.innerHeight - 50 &&
                        rect.right <= window.innerWidth
                    )
            }
        },

        /* Public members. */

        handlers: {
            click: function(event) {
                console.log('tocview: handlers: click');

                // if user is holding shift, control, or command, let the link do its thing (e.g. open in a new tab).
                if (event.ctrlKey || event.shiftKey || event.metaKey) {
                    return;
                }

                var $tocItem = $(event.target).closest('a');

                if ($tocItem.length > 0) {
                    // Trigger 'tocitemclick' custom event.
                    this._trigger('tocitemclick', event, { href: $tocItem.data('href') });
                }

                event.preventDefault();
            }
        },

        showPreloader: function() {
            console.log('tocview: showPreloader');

            this._$preloader.show();
        },

        hidePreloader: function() {
            console.log('tocview: hidePreloader');

            this._$preloader.fadeOut();
        },

        syncToc: function(data) {
            this._toggleTopicStyle(data);
            this._expandToc();
            this._scrollTocToSelectedTopic();
        },

        renderToc: function(tocRootData, tocData) {
            console.log('tocview: renderToc');

            // Show preloader.
            this.showPreloader();

            // Keep TOC data for rendering.
            this.options.tocData = tocData;
            this.options.tocRootData = tocRootData;

            // Create TOC.
            this._renderTocTree();

            // Free resources: it can be garbage collected now.
            this.options.tocData = null;

            // Hide preloader.
            this.hidePreloader();
        }
	});
})(jQuery);