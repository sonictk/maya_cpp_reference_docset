(function($) {
    $.widget('adsk.indextabcontroller', {
        options: {
        },

        _view: undefined,
        _scrollView: undefined,

        _create: function() {
            console.log('indextabcontroller: _create');

            $('#tab-index').indextabview({
                create:         $.proxy(this._viewCreateHandler, this),
                indexitemtap:   $.proxy(this._viewIndexitemtapHandler, this)
            });

            $('#tab-index').indexscrollertabview({
                create: $.proxy(this._viewCreateHandler, this)
            });
        },

        _viewCreateHandler: function(event, ui) {
            console.log('indextabcontroller: _viewCreateHandler');

            this._view = $(event.target).indextabview("instance");
            this._scrollView = $(event.target).indexscrollertabview("instance");
        },

        _viewIndexitemtapHandler: function(event, data) {
            console.log('indextabcontroller: _viewIndexitemtapHandler');

            this._trigger('opentopic', {}, data);
        },

        initIndexList:function (data) {
            console.log('indextabcontroller: initIndexList');

            if (!this._view.data) {
                this._view.data = data;
                this._view.initIndexItemList({data:data});
                this._scrollView.initIndexABCScroller({data:data});
            }
            this.resize();
        },

        resize:function () {
            console.log('indextabcontroller: resize');
            this._view.resize();
            this._scrollView.changeScrollerSize();
            this._scrollView.initEventHandlers();
        }

    });
})(jQuery);