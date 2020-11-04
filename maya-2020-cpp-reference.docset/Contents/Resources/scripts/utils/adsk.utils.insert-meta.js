var ADSK = ADSK || {};
ADSK.UTILS = (function(UTILS) {
    UTILS.insertMeta = function (name, content) {
    	var meta = document.createElement('meta');
		meta.name = name;
		meta.content = content;
		document.getElementsByTagName('head')[0].appendChild(meta);   
    };

    return UTILS;
})(ADSK.UTILS || {});