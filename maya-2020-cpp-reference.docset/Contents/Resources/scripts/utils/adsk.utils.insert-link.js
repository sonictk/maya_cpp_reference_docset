var ADSK = ADSK || {};
ADSK.UTILS = (function(UTILS) {
    UTILS.insertLink = function (rel, href) {
    	var link = document.createElement('link');
		link.rel = rel;
		link.href = href;
		document.getElementsByTagName('head')[0].appendChild(link);   
    };

    return UTILS;
})(ADSK.UTILS || {});