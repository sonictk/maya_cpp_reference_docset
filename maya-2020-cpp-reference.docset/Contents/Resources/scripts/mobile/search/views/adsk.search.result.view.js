// Search result view (jQuery UI widget).
(function($) {
	$.widget('adsk.searchresultview', {
		options: {
            data: undefined
		},
        _view: undefined,

        _create: function() {
            console.log('searchresultview: _create');

			// Render view.
			this._render();
			
			// Handle UI events.
			this._addEventHandlers();

		},
		
		_render: function() {
            console.log('searchresultview: _render');
            this._view = this.element;
            this.$toolbar = $(document.createElement('header')).addClass('toolbar').addClass('drop-shadow').appendTo(this._view);
            var $leftColumn = $(document.createElement('div')).addClass('column').addClass('left').appendTo(this.$toolbar);
            var $centerColumn = $(document.createElement('div')).addClass('column').addClass('center').appendTo(this.$toolbar);
            var $rightColumn = $(document.createElement('div')).addClass('column').addClass('right').appendTo(this.$toolbar);

            this.$doneButton = $(document.createElement('a')).attr('id','search-result-cancel').addClass('button').addClass('command').appendTo($leftColumn);
            var $doneButtonDiv = $(document.createElement('div')).addClass('frame').text('Done').appendTo(this.$doneButton);

            var $prevButton = $(document.createElement('a')).attr('id','prev').addClass('button').addClass('icon').appendTo($rightColumn);
            var $nextButton = $(document.createElement('a')).attr('id','next').addClass('button').addClass('icon').appendTo($rightColumn);

            this.$positionOfSearchResults = $(document.createElement('span')).attr('id', 'test1').addClass('toolbar-text').appendTo($centerColumn);
            this.$ofSearchResults = $(document.createElement('span')).addClass('toolbar-text').text('of').appendTo($centerColumn);
            this.$numberOfSearchResults = $(document.createElement('span')).attr('id', 'test2').addClass('toolbar-text').appendTo($centerColumn);

            var height = this.$toolbar.height();
            this._view.css({'height': height+'px','min-height':height+'px'});
            // Create markup.

 		},

        _addEventHandlers: function () {
            console.log('searchresultview: _addEventHandlers');

            this.$toolbar.find('.button')
                .on('touchstart', $.proxy(this._handleToolbarButtonTouchstart, this))
                .on('touchend', $.proxy(this._handleToolbarButtonTouchend, this));
        },

        _handleToolbarButtonTouchstart: function(event) {
            console.log('searchview: _handleToolbarButtonTouchstart');

            event.preventDefault();
            event.stopPropagation();

            $(event.delegateTarget).addClass("tapped");
        },

        _handleToolbarButtonTouchend: function(event) {
            console.log('searchview: _handleToolbarButtonTouchend');

            event.preventDefault();
            event.stopPropagation();

            var $target = $(event.delegateTarget);

            // Style tapped button.
            $target.removeClass('tapped');

            // Trigger 'buttontap' custom event.
            this._trigger('searchbuttontap', event, $target.attr('id'));
        },

        setSearchResultsNumber: function(data){
            this.$numberOfSearchResults.text(data);
        },

        setCurrentSearchResult: function(data){
            this.$positionOfSearchResults.text(data);
        },

        resize: function() {
            console.log('searchresultview: resize');

            // Set content container height.
//            var height = this.document.height() - this.$toolbar.height();
//            this.$content.css('height', height + 'px');
        }

    });
})(jQuery);