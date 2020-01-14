// Share view.
(function($, UTILS) {

    $.widget('adsk.shareview', {
        options: {
            shareItems: [{
                            id: 'tumblr',
                            caption: 'Tumblr',
                            href: 'http://www.tumblr.com/share/link?url=',
                            icon: 'images/mobile-share-tumblr.png'
                        }, {
                            id: 'stumbleUpon',
                            caption: 'StumbleUpon',
                            href: 'http://www.stumbleupon.com/submit?url=',
                            icon: 'images/mobile-share-stumbleupon.jpg'
                        }, {
                            id: 'linkedIn',
                            caption: 'LinkedIn',
                            href:  'http://www.linkedin.com/shareArticle?mini=true&url=',
                            icon:'images/mobile-share-linkedIn.jpg'
                        }, {
                            id: 'google',
                            caption: 'Google',
                            href: 'https://plus.google.com/share?url=',
                            icon: 'images/mobile-share-google.jpg'
                        }, {
                            id: 'facebook',
                            caption: 'Facebook',
                            href: 'http://www.facebook.com/sharer.php?u=',
                            icon: 'images/mobile-share-facebook.jpg'
                        }, {
                            id: 'twitter',
                            caption: 'Twitter',
                            href: 'https://twitter.com/share?url=',
                            icon: 'images/mobile-share-twitter.png'
                        }, {
                            id: 'clipboard',
                            caption: 'Clipboard',
                            href: 'javascript:void(0)',
                            icon: 'images/mobile-share-clipboard.jpg'
                        }, {
                            id: 'email',
                            caption: 'E-mail',
                            href: '',
                            icon: 'images/mobile-share-mail.png'
                        }, {
                            id: 'delicious',
                            caption: 'Delicious',
                            href: 'http://delicious.com/save?url=',
                            icon: 'images/mobile-share-delicious.jpg'
                        }]
        },

        /* Private members. */

        _$shareMenu: undefined,

        _create: function() {
            console.log('shareview: _create');

            this._render();
            this._addEventHandlers();
        },

        _render: function() {
            console.log('shareview: _render');

            // Create share view markup.

            this._$shareMenu = $('<div id="share-menu">' +
                                   '<div class="share-arrow"/>' +
                                   '<div id="share-items" class="share-items"/>' +
                                 '</div>');

            var shareItems = this.options.shareItems,
                len = shareItems.length,
                item = undefined,
                items = [],
                link, mask, div, text, i;

            for (i = 0; i < len; ++i) {

                item = shareItems[i];

                link = $(document.createElement('a'))
                    .attr('id', item.id)
                    .addClass('share-link share-icon')
                    .attr('href', item.href.concat(encodeURIComponent(location.href)))
                    .css('background-image', 'url(' + item.icon + ')');

                mask = $(document.createElement('span'))
                    .addClass('share-icon-mask share-icon')
                    .appendTo(link);

                div = $(document.createElement('div'))
                    .addClass('share-icon-description')
                    .appendTo(link);

                text = $(document.createElement('span'))
                    .text(item.caption)
                    .appendTo(div);

                items.push(link.get(0));
            }

            var _$shareItems = this._$shareMenu.find('#share-items');
            $(items).appendTo(_$shareItems);
            this._$shareMenu.appendTo(this.element);
        },

        _addEventHandlers: function() {
            console.log('shareview: _addEventHandlers');

            this._on({
                click: 'hide'
            });
        },

        /* Public members. */

        show: function() {
            console.log('shareview: show');

            this.element.removeClass('hidden');
        },

        hide: function(event) {
            console.log('shareview: hide');

            this.element.addClass('hidden');
        },

        refresh: function() {
            console.log('shareview: refresh');

            //this._$shareWrapper.css('right', this.element.width);
        }
    });

})(jQuery);