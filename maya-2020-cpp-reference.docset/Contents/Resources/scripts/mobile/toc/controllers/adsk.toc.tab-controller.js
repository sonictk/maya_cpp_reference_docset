// TOC tab controller.
(function($) {
	$.widget('adsk.toctabcontroller', {
		options: {
            toc: undefined,
            targetId: 'tab-toc'
		},

		_view: undefined,

		_create: function() {
		    console.log('toctabcontroller: _create');

            var selector = '#' + this.options.targetId;
		    $(selector).toctabview({
		        create:     $.proxy(this._viewCreateHandler, this),
		        tocitemtap: $.proxy(this._viewTocitemtapHandler, this)
		    });
		},

		_viewCreateHandler: function(event, ui) {
		    console.log('toctabcontroller: _viewCreateHandler');

            this._view = $(event.target).toctabview("instance");
		},

		_viewTocitemtapHandler: function(event, data) {
		    console.log('toctabcontroller: _viewTocitemtapHandler');

		    this._trigger('opentopic', {}, data);
		},

		_renderToc: function() {
            console.log('toctabcontroller: _renderToc');

            // Create TOC in DOM.
            this._view.renderToc(this.options.toc.toc);
		},

		resize: function(data) {
            console.log('toctabcontroller: resize');
		},

		setTocData: function(data) {
            console.log('toctabcontroller: setTocData');

            this.options.toc = data;

            this._renderToc();
		}
    });
})(jQuery);