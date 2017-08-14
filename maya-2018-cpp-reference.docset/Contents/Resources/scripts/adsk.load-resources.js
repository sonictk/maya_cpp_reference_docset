
// Load device specific resources.

(function(DEVICE) {

yepnope({
test: DEVICE.isMobile || DEVICE.isTablet,

yep: [
'style/adsk.gui.mobile.css',
'scripts/utils/adsk.utils.inject-body.js',
'scripts/utils/adsk.utils.insert-meta.js',
'scripts/utils/adsk.utils.insert-link.js',
'scripts/mobile/navigation/controllers/adsk.navigation.controller.js',
'scripts/mobile/navigation/views/adsk.navigation.view.js',
'scripts/mobile/topic/controllers/adsk.topic.controller.js',
'scripts/mobile/topic/views/adsk.topic.view.js',
'scripts/mobile/search/controllers/adsk.search.controller.js',
'scripts/mobile/search/controllers/adsk.search.result.processor.js',
'scripts/mobile/search/controllers/adsk.search.result.controller.js',
'scripts/mobile/search/controllers/adsk.create.suggestion.list.js',
'scripts/mobile/search/views/adsk.search.view.js',
'scripts/mobile/search/views/adsk.search.result.view.js',
'scripts/mobile/search/views/adsk.suggestion.view.js',
'scripts/mobile/favorites/controllers/adsk.favorites.tab-controller.js',
'scripts/mobile/favorites/views/adsk.favorites.tab-view.js',
'scripts/mobile/index/controllers/adsk.index.tab-controller.js',
'scripts/mobile/index/controllers/adsk.index-data-loader.js',
'scripts/mobile/index/views/adsk.index.tab-view.js',
'scripts/mobile/index/views/adsk.index.scroller.tab-view.js',
'scripts/mobile/toc/controllers/adsk.toc.tab-controller.js',
'scripts/mobile/toc/controllers/adsk.toc.tree-data-loader.js',
'scripts/mobile/toc/controllers/adsk.toc.tree-data-controller.js',
'scripts/mobile/toc/views/adsk.toc.tab-view.js',
'scripts/mobile/share/controllers/adsk.share.controller.js',
'scripts/mobile/share/views/adsk.mobile.share.view.js',
'scripts/mobile/share/views/adsk.tablet.share.view.js',
'scripts/mobile/share/views/adsk.share.menu.view.js',
'scripts/mobile/tree/controllers/adsk.tree.tab-controller.js',
'scripts/mobile/tree/views/adsk.tree.tab-view.js',
'scripts/mobile/main/controllers/adsk.main.app-controller.js',
'scripts/mobile/main/views/adsk.main.app-view.js',
'scripts/boot.js'
],

nope: [
'style/adsk.gui.desktop.default.css',
'style/adsk.gui.desktop.css',
'scripts/Autodesk.AutoCAD.Help.js',
'scripts/helpuifinder.js',
'scripts/utils/adsk.execution-scheduler.js',
'scripts/utils/adsk.contextid.data-loader.js',
'scripts/utils/adsk.toc.data-loader.js',
'scripts/utils/adsk.toc.data-processor.js',
'scripts/utils/adsk.jquery.transition.js',
'scripts/utils/jquery.storage.js',
'scripts/utils/adsk.utils.get-url-vars.js',
'scripts/desk/toc/controllers/adsk.toc.controller.js',
'scripts/desk/toc/views/adsk.toc.view.js',
'scripts/desk/topic/controllers/adsk.topic.controller.js',
'scripts/desk/topic/views/adsk.topic.view.js',
'scripts/desk/share/controllers/adsk.share.controller.js',
'scripts/desk/share/views/adsk.share.view.js',
'scripts/desk/index/controllers/adsk.index.controller.js',
'scripts/desk/index/views/adsk.index.view.js',
'scripts/desk/favorites/controllers/adsk.favorites.tab-controller.js',
'scripts/desk/favorites/views/adsk.favorites.view.js',
'scripts/desk/search/adsk.search.abstract-data-listener.js',
'scripts/desk/search/adsk.search.data-loader.js',
'scripts/desk/search/adsk.search.execution-scheduler.js',
'scripts/desk/search/controllers/adsk.search.tab-controller.js',
'scripts/desk/search/views/adsk.search.view.js',
'scripts/desk/search/proc/adsk.query-processor.js',
'scripts/desk/search/proc/adsk.abstract-processor.js',
'scripts/desk/search/proc/adsk.entries-cache-processor.js',
'scripts/desk/search/proc/adsk.entries-compactor.js',
'scripts/desk/search/proc/adsk.entries-lookup-processor.js',
'scripts/desk/search/proc/adsk.final-processor.js',
'scripts/desk/search/proc/adsk.filtering-processor.js',
'scripts/desk/search/proc/adsk.words-processor.js',
'scripts/desk/search/proc/adsk.stemmer.js',
'scripts/desk/search/models/adsk.search-config.js',
'scripts/desk/search/models/adsk.search-progress-listener.js',
'scripts/desk/search/models/adsk.search-result-model.js',
'scripts/desk/search/models/adsk.search-results-model.js',
'scripts/desk/main/controllers/adsk.main-app.controller.js',
'scripts/desk/main/views/adsk.main-app.view.js'









],



complete: function() {
$(function() {
var appController = $.adsk.appcontroller({
config: $.config
});
});
}
});
})(ADSK.UTILS.DEVICE);
