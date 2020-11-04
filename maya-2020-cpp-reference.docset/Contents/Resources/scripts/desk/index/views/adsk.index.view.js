// Index view.
(function($, UTILS) {

    $.widget('adsk.indexview', {
        options: {
            index: undefined
        },

        /* Private members. */

        _create: function() {
            console.log('indexview: _create');

            this._render();
            this._addEventHandlers();
        },

        _render: function() {
            console.log('indexview: _render');

            // Create share view markup.

            this._$index = $('<div class="content" />');

            var o = this.options,
                index = o.index,
                len = index.length,
                entryLen = 0,
                item, entry, $group, $entry, $link, i, j;

            for (i = 0; i < len; ++i) {
                item = index[i];

                //  Create letter group.

                $group = $(document.createElement('div'))
                    .addClass('index-letter-group')
                    .text(item.l);

                $group.appendTo(this._$index);

                // Create entries for current letter group.

                entryLen = item.c.length;

                for (j = 0; j < entryLen; ++j) {
                    entry = item.c[j];

                    $entry = $(document.createElement('div'))
                        .addClass('index-entry');

                    $link = $(document.createElement('a'))
                                            .addClass('index-link')
                                            .attr('href', '#!/url='.concat(entry.f))
                                            .text(entry.l)
                                            .appendTo($entry);

                    $entry.appendTo(this._$index);
                }
            }

            this._$index.appendTo(this.element);
        },

        _addEventHandlers: function() {
            console.log('indexview: _addEventHandlers');
            /*
            this._on({
                click: 'hide'
            });
            */
        }

        /* Public members. */

    });

})(jQuery);