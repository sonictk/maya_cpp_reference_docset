// Tree tab controller.
(function($) {
	$.widget('adsk.treetabcontroller', {
		options: {
            tree: undefined,
            targetId: 'tab-tree'
		},

		_view: undefined,

		_create: function() {
		    console.log('treetabcontroller: _create');

            var selector = '#' + this.options.targetId;
		    $(selector).treetabview({
		        create:     $.proxy(this._viewCreateHandler, this),
		        treeitemtap: $.proxy(this._viewTreeitemtapHandler, this)
		    });
		},

		_viewCreateHandler: function(event, ui) {
		    console.log('treetabcontroller: _viewCreateHandler');

            this._view = $(event.target).treetabview("instance");
		},

		_viewTreeitemtapHandler: function(event, data) {
		    console.log('treetabcontroller: _viewTreeitemtapHandler');

		    this._trigger('opentopic', {}, data);
		},

		_renderTree: function() {
            console.log('treetabcontroller: _renderTree');

            // Create Tree in DOM.
            this._view.renderTree(this.options.toc.toc);
		},

		resize: function(data) {
            console.log('treetabcontroller: resize');
		},

		setTocData: function(data) {
            console.log('treetabcontroller: setTreeData');

            this.options.toc = data;

            this._renderTree();
		}
    });
})(jQuery);