// TOC controller.
(function($) {

    $.widget('adsk.toccontroller', {
        options: {
            targetId: 'tab-toc',
            tocData: undefined,
            tocRootData: undefined,
            booklist: undefined
        },

        /* Private members. */

        _view: undefined,

        _create: function() {
            console.log('toccontroller: _create');

            var self = this;

            self._createView(self);
        },

        _createView: function(self) {
            console.log('toccontroller: _createView');

            // Create view and add event handlers.
            var selector = '#'.concat(self.options.targetId);

            $(selector).tocview({
                booklist: this.options.config.booklist,

                create: function(event, ui) {
                    console.log('toccontroller tocview: create');

                    self._view = $(this).tocview('instance');
                },

                tocitemclick: function(event, data) {
                    console.log('toccontroller tocview: tocitemtap, href = ', data.href);

                    self._trigger('opentopic', event, data);
                }
            });
        },

        /* Public members. */

        setTocData: function(tocData) {
            console.log('toccontroller: setTocData');

            if (tocData !== undefined) {
                this.options.tocData = tocData;
            }
        },

        setTocRootNodesData: function(tocRootData) {
            console.log('toccontroller: setTocRootNodesData');

            if (tocRootData !== undefined) {
                this.options.tocRootData = tocRootData;
            }
        },

        toggleSelectedTocTopic: function(data) {
            console.log('toccontroller: toggleSelectedTocTopic');

            if (data.href !== undefined && this._view !== undefined) {
                this._view.syncToc(data);
            }
        },

        renderToc: function() {
            console.log('toccontroller: renderToc');

            var tocData = this.options.tocData,
                tocRootData = this.options.tocRootData;

            if (tocData !== undefined && tocRootData !== undefined) {
                this._view.renderToc(tocRootData, tocData);
            } else {
                console.log('Warning: No TOC data provided!');
            }
        }

    });
})(jQuery);