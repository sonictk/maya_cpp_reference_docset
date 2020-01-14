// Topic view (jQuery UI widget).
(function ($) {
    $.widget('adsk.topicview', {
        options: {
            caption: "Topic"
        },

        $content: undefined,
        $header: undefined,
        $favorites: undefined,

        goToParentButtonEnabled: false,
        favoritesButtonEnabled: false,
        goBackButtonEnabled: false,

        _create: function() {
            console.log('topicview: _create');

            // Render view.
            this._render();

            // Handle UI events.
            this._addEventHandlers();
        },

        _render: function() {
            console.log('topicview: _render');

            // Create topic view markup.
            this.element.html(
              '<header class="toolbar drop-shadow">' +
                '<div class="column left">' +
                    '<a href="#" id="topic-navigation" class="navigation button icon"/>' +
                    '<a href="#" id="topic-back" class="back button icon disabled"/>' +
                    '<a href="#" id="topic-parent" class="parent button icon disabled"/>' +
                    '<a href="#" id="topic-home" class="home button icon"/>' +
                '</div>' +
                '<div class="column center"></div>' +
                '<div class="column right">' +
                    '<a href="#" id="topic-share" class="share button icon"/>' +
                    '<a href="#" id="topic-favorites" class="favorites button icon disabled"/>' +
                    '<a href="#" id="topic-search" class="search button icon"/>' +
                '</div>' +
              '</header>' +
              '<div class="content"></div>' +
              '<footer class="toolbar">' +
                '<a href="#" class="preceding-topic">' +
                  '<div class="label">Previous topic</div>' +
                  '<div class="name"></div>' +
                  '<div class="path"></div>' +
                '</a>' +
                '<a href="#" class="following-topic">' +
                  '<div class="label">Next topic</div>' +
                  '<div class="name"></div>' +
                  '<div class="path"></div>' +
                '</a>' +
              '</footer>'
            );

            // Store jQuery objects for later use.
            this.$header = this.element.find('header');
            this.$footer = this.element.find('footer');
            this.$content = this.element.find('.content');
            this.$favorites = this.element.find('#topic-favorites');
        },

        _addEventHandlers: function() {
            console.log('topicview: _addEventHandlers');

            // Add look to all tapped buttons.
            this.$header.find('.button')
            .on('touchstart', $.proxy(this._handleToolbarButtonTouchstart, this))
            .on('touchend', $.proxy(this._handleToolbarButtonTouchend, this));

            this.element
            .on('touchmove', function(event) {
                event.preventDefault();
            });

            this.$content
            .on('touchmove', function(event) {
                // Prevent bubbling to enable native scrolling.
                event.stopPropagation();
            });
        },

        _handleToolbarButtonTouchstart: function(event) {
            console.log('topicview: _handleToolbarButtonTouchstart');

            event.preventDefault();
            event.stopPropagation();

            var $target = $(event.target);

            if (!$target.hasClass('disabled')) {
                $target.addClass("tapped");
            }
        },

        _handleToolbarButtonTouchend: function(event) {
            event.preventDefault();
            event.stopPropagation();

            var $target = $(event.target);

            if (!$target.hasClass('disabled')) {
                // Style tapped button.
                $target.removeClass('tapped');

                // Trigger 'buttontap' custom event.
                this._trigger('buttontap', event, $target.attr('id'));
            }
        },

        _setContentHeight: function() {
            console.log('topicview: _setContentHeight');

            var height = $(document).height() - this.$header.height() - this.$footer.height();

            this.$content.css('height', height + 'px');
        },

        _isAbsolutePath: function(url) {
             if ((url.indexOf('http:') == 0) || (url.indexOf('https:') == 0)) {
                 return true;
             }
             return false;
        },

        _changeImageSrc: function(src, base) {
            var changedSrc = src;

            if (src && !this._isAbsolutePath(src)) {
                if (!base) {
                    base = './files/';
                }

                if (src.indexOf('../') == 0) {
                    // ../images/image.png.

                    // Strip "move up to one folder" command.
                    changedSrc = src.substr(1);
                } else {
                    // ./image.png or images.png

                    // Remove './'.
                    if (src.indexOf('./') == 0) {
                        src = src.substr(2);
                    }

                    changedSrc = base.concat(src);
                }

                return changedSrc;
            }
        },

        _changeHyperlinkHref: function(hyperlink, base) {
            var url = hyperlink.getAttribute('href'),
                changedUrl = url,
                target = hyperlink.getAttribute('target');

            if (url && !this._isAbsolutePath(url)) {
                // Not an anchor and not an absolute url.

                if (url.indexOf('../') == 0) {
                    // "Move up one folder" relative path (cases 3, 4 and 5).

                    // Strip "move up to one folder" command.
                    changedUrl = url.substr(1);

                    if (target !== '_blank') {
                         // Add hashbang (case 5).
                         changedUrl = '#!/url='.concat(changedUrl);
                    }
                } else if ((url.charAt(0) != '#') &&
                           (url.indexOf('mailto:') != 0) &&
                           (url.indexOf('javascript') != 0)) {
                    // "Current folder" relative path (topic.htm or ./topic.htm).

                    // Remove './'.
                    if (url.indexOf('./') == 0) {
                        url = url.substr(2);
                    }

                    // Add hashbang and base path (e.g. #!url=./files/topic.htm)
                    changedUrl = '#!/url='.concat(base, url);
                } else if (url == '#') {
                    changedUrl = location.hash;
                }

                hyperlink.setAttribute('href', changedUrl);
            }
        },

        /* Public members. */

        getShareButtonOffset: function() {
            console.log('topicview: getShareButtonOffset');

            var $page = this.element,
                offset = $page.find('#topic-share').offset();

            return offset;
        },

        loadPage: function(href, title, base) {
            console.log('topicview: loadPage, href = ' + href);

            var self = this;

            $container = this.element.find('.content');

            // TODO: find robust way.
            $container.html('');

            var xhr = $
            .get(href)
            .done(function(response) {
                // Replace src attribute with data-src to prevent jQuery html()
                // from triggering the browser request images.
                response = response.replace(/ src=/g, ' data-src=');

                var $bodyContent = $(response).filter('#body-content');

                if (!$bodyContent.length) {
                    $bodyContent = $(response.substring(response.indexOf("<body>"), response.indexOf("</body>") + 7));
                }

                if ($bodyContent.length) {
                    // Replace <a> elements href attribute value.
                    $bodyContent.find('a, area').each(function() {
                        self._changeHyperlinkHref(this, base);
                    });

                    // Add src attributes to <img> elements with slightly changed value of data-src attribute.
                    var images = $bodyContent.find('img');
                    images.each(function() {
                        this.setAttribute('src', self._changeImageSrc(this.getAttribute('data-src')));
                    });

                    // Add collapsible section click listener.
                    images.filter('.collapsible').click(function(event) {
                        var img = $(this);

                        img.toggleClass('opened');

                        // Show/hide collapsible section.
                        img.parents('.collapsible').find('.collapsible-section').toggleClass('hidden');
                    });

                    // Place topic content into container.
                    $container.html($bodyContent);

                    // Scroll to anchor.
                    var fragment = '';
                    if (href.lastIndexOf('#') != -1) {
                        fragment = href.substring(href.lastIndexOf('#') + 1);

                        if (fragment !== undefined && fragment !== '') {
                            var $anchor = $('a[name=' + fragment + ']');

                            console.log('scroll to fragment: ', fragment);
                            $container.scrollTo($anchor, 800);
                        }
                    }

                } else {
                    $container.html(response);
                }

                // Get topic base url.
                var splittedHref = href.split('/'),
                    baseUrl = splittedHref.slice(0, splittedHref.length - 1).join('/');

                    // Override content links and add swipe handlers.
                    self.addBodyContentHandlers(baseUrl);
                })
            .fail(function(response) {
                $container.html(response);
            })
            .always(function() {

            });
        },

        initGoToParentButton: function(enabled) {
            this.goToParentButtonEnabled = enabled;

            if (enabled) {
                this.$header.find('#topic-parent').removeClass('disabled');
            } else {
                this.$header.find('#topic-parent').addClass('disabled');
            }
        },

        initFavoritesButton: function(enabled) {
            this.favoritesButtonEnabled = enabled;

            if (enabled) {
                this.$header.find('#topic-favorites').removeClass('disabled');
            } else {
                this.$header.find('#topic-favorites').addClass('disabled');
            }
        },

        initGoBackButton: function(enabled) {
            this.goBackButtonEnabled = enabled;

            if (enabled) {
                this.$header.find('#topic-back').removeClass('disabled');
            } else {
                this.$header.find('#topic-back').addClass('disabled');
            }
        },

        resize: function() {
            console.log('topicview: resize');

            // Set content container height.
            this._setContentHeight();
        },

        // Flag if topic is in Favorites or not.
        flag: function(addedToFavorites) {
            console.log('topicview: flag');

            if (addedToFavorites) {
                this.$favorites.addClass('flagged');
            } else {
                this.$favorites.removeClass('flagged');
            }
        },

        addBodyContentHandlers: function(baseUrl) {
            console.log('topicview: addBodyContentHandlers');

            // Listen for ALL links at the top level of topic content.
            /*
            $bodyContent
            .on("click", "a", $.proxy(function(event) {
                var $target = $(event.target),
                    targetAttr = $target.attr('target');

                // For some browsers, target is undefined; for others,
                // target is false. Check for both.
                if (typeof targetAttr !== 'undefined' && targetAttr !== false) {
                    // Use default browser action.
                } else {
                    var parser = document.createElement('a');
                    parser.href = $target.attr('href');

                    var href = $target.attr('href');

                    if (location.host == parser.host) {
                        // Stop the default behavior of the browser, which
                        // is to change the URL of the page.
                        event.preventDefault();

                        // Fire event to change location hash.
                        this._trigger('opentopic', {}, {
                            href: baseUrl + '/' + href // resolve
                        });
                    } else {
                        // Use default browser action.
                    }
                }
            }, this));
            */

            this._runRetinaJS();
        },

        _runRetinaJS: function() {
            $('#body-content').find('img').retina('--2x');
        }
    });
})(jQuery);
