// Topic view.
(function($, UTILS) {

	$.widget('adsk.topicview', {
		options: {

		},

		/* Private members. */

		_$preloader: undefined,
		_$content: undefined,

        _create: function() {
            console.log('topicview: _create');

            // Create layout.
            this._render();

            // Show preloader animation.
            this.showPreloader();

            this._addEventHandlers();
        },

        _render: function() {
            console.log('topicview: _render');

            // Create app view markup.
            this.element
            .html('<div class="block-preloader"></div>' +
                  '<div class="content">Topic content</div>');

            this._$preloader = this.element.find('.block-preloader');
            this._$content = this.element.find('.content');
        },

        _addEventHandlers: function() {
            console.log('topicview: _addEventHandlers');

            var self = this,
                href = location.href;
        },

        _isAbsolutePath: function(path) {
            // Check if path is fully qualified.
            if ( /^[A-Za-z]+:\/\//.test(path) ) return true;
            if ( path.indexOf("//") == 0 ) return true;
            return false;
        },

        _flattenRelativeResourcePath: function(src, base) {
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

                }
            return changedSrc;
        },

        // book with root dir specified: base = './filesBOOK/'
        // root book: base = './files/'
        _changeHyperlinkHref: function(hyperlink, base) {
            var href = hyperlink.getAttribute('href'),
                url = (href) ? href.replace(/^\s+|\s+$/, "") : href, // href.replace(/^\s+|\s+$/, "")
                changedUrl = url,
                target = hyperlink.getAttribute('target');

            if (url && !this._isAbsolutePath(url)) {
                // Not anchor and not absolute url.

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

        _doCommentsHyperlinkHandler: function(topicPath) {
            // Display the comments page.
            var title = document.title;

            // Remove question marks from title.
            title = title.replace(/[\?]/g, '_');

            var href = decodeURIComponent(location.href);
            // Strip hash and all that follows.
            href = href.replace(/#.*$/, '');

            var index = href.lastIndexOf("/");
                helpPath = href.substring(0, index + 1),
                url = helpPath + topicPath + '#' + title + ' [' + location.href + ']',
                specs = "height=450,width=450,resizable=yes,directories=no,location=no,menubar=no,status=no,toolbar=no";

            // Display a fixed height window with none of the browser chrome.
            window.open(url, null, specs);
        },

        _showFallbackWhenNoSourceCouldBeDecoded: function(video) {
            var $video = $(video),
                $lastSource = $video.children('source').last();

            $lastSource.error(function() {
                $video.replaceWith($video.children('.embed-container'));
            });
        },

        ﻿ _replaceObjectWithItsCopy: function(object) {
                    ﻿
            var div = document.createElement('div'),
                params = document.createElement('div'),
                classid = " classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'";

            $(params).append( $(object).children('param') );

            // IE’s proprietary classid attribute and 'movie' param need to be created together,
            // as well as 'flashvars' param (otherwise its value will not be passed to Flash).
            var html = 	"<object" + classid + ">" +
                            params.innerHTML +
                            object.innerHTML +
                        "</object>";

            div.innerHTML = html;

            var obj = div.firstChild;

            obj.setAttribute("type", object.getAttribute('type'));
            obj.setAttribute("data", object.getAttribute('data'));
            obj.setAttribute("id", object.getAttribute('id'));

            // Replace targeted DOM element with our new <object>.
            object.parentNode.replaceChild(obj, object);
        },

        /* Public members. */

        showPreloader: function() {
            console.log('topicview: showPreloader');

            this._$preloader.show();
        },

        hidePreloader: function() {
            console.log('topicview: hidePreloader');

            this._$preloader.fadeOut();
        },

        showTopicContent: function(content, base) {
            console.log('topicview: showTopicContent');

            // Parse a string into an array of DOM nodes.
            // var html = $.parseHTML(content);
            // this._$content.html(html);
            this.showPreloader();

            // Replace src attribute with data-src to prevent jQuery html()
            // from triggering the browser request images.
            content = content.replace(/ src=/g, ' data-src=');

            var topic = $(document.createElement('div'));

            // Set the HTML content.
            topic.html(content);

            var bodyContent = topic.find('#body-content'),
                self = this;

            if (bodyContent.length == 0) {
                bodyContent = topic;
            }

            // Replace <a> elements href attribute value.
            bodyContent.find('a, area').each(function() {
                self._changeHyperlinkHref(this, base);
            });

            // Open comments page by user click.
            bodyContent.find('a.comments-anchor').click(function(event) {
                event.preventDefault();
                self._doCommentsHyperlinkHandler(this.getAttribute('href'));
            });

            // Showing fallback content when no source could be decoded.
            bodyContent.find('video').each(function() {
                self._showFallbackWhenNoSourceCouldBeDecoded(this);
            });

            // Flatten <source> element @src attribute value.
            bodyContent.find('source').each(function() {
                this.setAttribute('src', self._flattenRelativeResourcePath(this.getAttribute('data-src')));
            });

            // Flatten @data attribute value.
            bodyContent.find('object[data]').each(function() {
                this.setAttribute('data', self._flattenRelativeResourcePath(this.getAttribute('data')));
            });

            // Flatten <param name="movie"> @value.
            bodyContent.find('param[name=movie]').each(function() {
                this.setAttribute('value', self._flattenRelativeResourcePath(this.getAttribute('value')));
            });

            // Replace current objects with copies to deal with IE issue when dynamically changed values not honored.
            var isMSIE = /*@cc_on!@*/false;
            if (isMSIE) {
                bodyContent.find('object[data]').each(function() {
                    self._replaceObjectWithItsCopy(this);
                });
            }

            // Add src attributes to <img> elements with slightly changed value of data-src attribute.
            var images = bodyContent.find('img');
            images.each(function() {
                this.setAttribute('src', self._flattenRelativeResourcePath(this.getAttribute('data-src'), './'));
            });

            // Add src attributes to <embed> elements with slightly changed value of data-src attribute.
            var embeds = bodyContent.find('embed');
            embeds.each(function() {
                this.setAttribute('src', self._flattenRelativeResourcePath(this.getAttribute('data-src')));
            });

            // MED custom begin:
            // Add src attributes to <iframe> elements
            var frames = bodyContent.find('iframe');
            frames.each(function() {
                this.setAttribute('src', self._flattenRelativeResourcePath(this.getAttribute('data-src'), base));
            });

            // Launch details (collapsible section) polyfill.
            bodyContent.find('details').details();

            // To avoid memory leaks, jQuery removes other constructs such as data and event handlers
            // from the child elements before removing the elements themselves.
            this._$content.empty().append(bodyContent);

            topic = bodyContent = null;

            $(window).trigger('topic-loaded');

            this.hidePreloader();
        },

        highlight: function(searchOptions) {
            // Get topic content except RAWMT banner.
            var $bodyContent = this._$content.children('.body_content');

            $bodyContent.removeHighlight();

            if (searchOptions.highlightEnabled) {
                var query = searchOptions.searchQuery,
                    lenient = searchOptions.caseInsensitiveEnabled;

                if (query && query !== '') {
                    // Highlight whole phrase.
                    $bodyContent.highlight(query, lenient);

                    // Highlight words.
                    if (searchOptions.searchMethod !== 'phrase') {
                        var words = query.split(" ");

                        $(words).each(function(index, word) {
                            if (word && word !== '') {
                                $bodyContent.highlight(word, lenient);
                            }
                        })
                    }
                }
            }
        },

        scrollToFragment: function(href) {
            // Scroll to anchor.
            if (href.lastIndexOf('#') != -1) {
                var fragment = href.substring(href.lastIndexOf('#') + 1);

                if (fragment !== undefined && fragment !== '' && fragment.indexOf('/') == -1) {
                    var $anchor = $('a[name=\'' + fragment + '\'], a#' + fragment);
				if ($anchor.length)
                    this._$content.scrollTo($anchor, 800, { axis:'y' } );
                } else {
                    // Scroll to top for invalid fragment value.
                    this._$content.scrollTo(0);
                }
            } else {
                // Scroll to top if fragment value not specified.
                this._$content.scrollTo(0);
            }
        }
	});
})(jQuery);