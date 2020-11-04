// Main app view (in form of jQuery widget).
(function($) {

	$.widget('adsk.appview', {
		options: {
		    pageIdStack: []
		},

		/* Private members. */

		_create: function() {
            console.log('appview: _create');

            // Track orientation change.
            this._addOrientationChangeHandler();

            // Render view.
            this._render();

            // Handle events.
            this._addEventHandlers();

            // Show UI.
            this.element.removeClass('hidden');
        },

        _getCreateEventData: function() {
            return {
                        orientation: this._getDeviceOrientation(),
                        viewportWidth: window.innerWidth,
                        viewportHeight: window.innerHeight
                   };
        },

		_getDeviceOrientation: function() {
		     console.log('appview: _getDeviceOrientation (using window.innerWight)');

             var orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';

             return orientation;
		},

		_addEventHandlers: function() {
		    console.log('appview: _addEventHandlers');

		    $(document.body).on('touchmove', $.proxy(function(event) {
		        // Prevent entire UI immersive scrolling.
		        // With this setting alone scrolling would be disabled globally.
                event.preventDefault();
            }, this));
		},
		
		_render: function() {
		    console.log('appview: _render');

			// Create app view markup.
			this.element.html(
			    '<div id="topic" class="page"></div>' +
			    '<div id="navigation" class="page"></div>' +
			    '<div id="search" class="page"></div>' +
			    '<div id="search-result" class="page"></div>' +
                '<div id="share" class="page"></div>'
             );
		},
		
		_addOrientationChangeHandler: function() {
		    console.log('appview: _addOrientationChangeHandler');

			window.addEventListener('resize',
									$.proxy(this._handleDeviceOrientation, this), 
									false);
		},
		
		_handleDeviceOrientation: function(event) {
		    console.log('appview: _handleDeviceOrientation');

		    // Reset document height.
		    if (navigator.userAgent.match(/Android/i)) {
                var doc = document.documentElement;
                doc.style.height = '100%';
		    }

			this._trigger('orientationchange', event, { orientation: this._getDeviceOrientation(),
														viewportWidth: window.innerWidth,
														viewportHeight: window.innerHeight });
		},

		_scrollWindowToTop: function() {
		    console.log('appview: _scrollWindowToTop');

            if (navigator.userAgent.match(/Android/i)) {
                window.scrollTo(0, 1);
            } else {
                window.scrollTo(0, 0);
            }

            //this.resize();
            setTimeout(this.resize(), 0);
        },

		/* Public members. */

        resize: function() {
            console.log('appview: resize');

            // Fire 'resize' event.
            this._trigger('resize', {}, {
                orientation: this._getDeviceOrientation(),
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight
            });
        },

		makePageCurrentById: function(id) {
		    console.log('appview: makePageCurrentById');

            var $currPage = $('#browser > .page.current'),
                currPageId = $currPage.attr('id'),
                $newPage = $('#browser #' + id),
                zIndexOfNewPage = parseInt($newPage.css('z-index'), 10);

            if ((id !== currPageId) && (zIndexOfNewPage === 0)) {
                $newPage.addClass('current');
                $currPage.removeClass('current');

                var zIndexOfCurrentPage = parseInt($currPage.css('z-index'), 10);
                if (isNaN(zIndexOfCurrentPage)) {
                    $newPage.css('z-index', '1');
                } else {
                    $newPage.css('z-index', zIndexOfCurrentPage + 1);
                }
                $newPage.show();


                this.options.pageIdStack.push(currPageId);
            }
		},

		backToPreviousPage: function() {
		    console.log('appview: backToPreviousPage');

		    var prevPageId = this.options.pageIdStack.pop();

		    if (prevPageId !== undefined) {
		        $currPage = $('#browser > .page.current');
		        $prevPage = $('#browser #' + prevPageId);
		        var zIndexOfCurrentPage = parseInt($currPage.css('z-index'), 10);

                // Hide current page.
                $currPage.hide().removeClass('current').css('z-index', '0');

                // Show previous page.
                $prevPage.addClass('current').css('z-index', zIndexOfCurrentPage - 1);
		    }
		}
	});  

})(jQuery);