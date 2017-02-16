// Share menu view (in form of jQuery widget).
(function($, UTILS) {
    var items = [];
	$.widget('adsk.sharemenuview', {
		options: {
            type: 'mobile',
            topicTitle: undefined,
            orientationData: undefined,
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

		_create: function() {
		    console.log('sharemenuview: _create');

			// Render view.
			this._render();

            // Handle UI events.
            this._addEventHandlers();

            this.resize(this.options.orientationData);
		},

		_render: function() {
            console.log('sharemenuview: _render');

            // Create markup.
            var shareItems = this.options.shareItems,
                len = shareItems.length,
                item = undefined;

            for (var i = 0; i < len; ++i) {

                item = shareItems[i];

                this.link = $(document.createElement('a'))
                    .attr('id', item.id)
                    .addClass('share-link')
                    .addClass('share-icon')
                    .attr('href', item.href)
                    .css('background-image', 'url(' + item.icon + ')');

                var mask = $(document.createElement('span'))
                    .addClass('share-icon-mask')
                    .addClass('share-icon')
                    .appendTo(this.link);

                var div = $(document.createElement('div'))
                    .addClass('share-icon-description')
                    .appendTo(this.link);

                var text = $(document.createElement('span'))
                    .text(item.caption)
                    .appendTo(div);

                items.push(this.link.get(0));
            }

            this.$shareListDiv = $(document.createElement('div'));
            $(items).appendTo(this.$shareListDiv);
            this.$shareListDiv.appendTo(this.element);
		},

		_addEventHandlers:function () {
            console.log('sharemenuview: _addEventHandlers');

            var self = this;
            var url = location.href;

            var $clipboard = $('#clipboard');

            $clipboard
            .on('touchend', function (event) {
                self._trigger('_tapped', event, {});
                window.prompt("Copy to clipboard", url);
            });

            $('#share-menu')
            .on('touchmove', function (event) {
                event.stopPropagation();
            });

            $('.share-link')
            .on('touchstart', $.proxy(this._handleSetLocation, this))
            .on('touchend', function(event) {
                event.preventDefault();
                var target = event.delegateTarget;
                window.location = target;
            });
        },

        _handleSetLocation: function (event) {
            console.log('sharemenuview: _handleSetLocation');

            var target = event.delegateTarget,
                host = location.origin,
                pathName = location.pathname,
                hash = location.hash;

            var href = host + pathName + hash;

            href = href.toString().replace(/\#\!\//, '?');

            if (target.id !== 'clipboard' && target.id !== 'email') {
                target.href = target.href + href;
            }

            if (target.id == 'email') {
                var prefix = 'mailto: ?',
                    subject = 'subject=',
                    topicTitle = this._getCurrentTopicTitle(),
                    body = ' &body=';

                target.href = '';
                target.href = prefix + subject + topicTitle + body + href;
            }
        },

        _getCurrentTopicTitle: function () {
            console.log('sharemenuview:_getCurrentTopicTitle');

            var result;
            if (this.options.topicTitle !== undefined) {
                result = this.options.topicTitle;
            } else {
                result = '';
            }
            return result;
        },

        setCurrentTopicTitle: function (title) {
            console.log('sharemenuview:setCurrentTopicTitle');

            this.options.topicTitle = title;
        },

        resize: function(orientationData){
            console.log('sharemenuview: resize');

            if (this.options.type === 'mobile') {
                if (orientationData.orientation == 'portrait') {
                    var $menu = this.$shareListDiv;

                    $menu.removeClass('share-menu-inline');
                    this.element.removeClass('share-menu-scrolled');
                    $menu.css('width', '').addClass('share-menu-width');

                } else {

                    var $menu = this.$shareListDiv;

                    $menu.removeClass('share-menu-width');
                    this.element.addClass('share-menu-scrolled');
                    var menuWidth = items.length * 90;
                    $menu.addClass('share-menu-inline').css('width', menuWidth);

                }
            } else {
                var $menu = this.$shareListDiv;

                $menu.removeClass('share-menu-inline');
                this.element.removeClass('share-menu-scrolled');
                $menu.css('width', '').addClass('share-menu-width');
            }
        },

		placeInTheCenter: function(shareFooterOffset) {
		    console.log('sharemenuview: placeInTheCenter');

            var $footer = shareFooterOffset,
                $this = this.element,
                $parent = this.element.parent();

            $this.css('top', ($parent.height() - $this.height() - $footer.height()) / 2);
        }
    });
})(jQuery);