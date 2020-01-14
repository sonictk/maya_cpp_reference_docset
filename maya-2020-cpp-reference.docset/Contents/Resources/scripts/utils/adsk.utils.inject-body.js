var ADSK = ADSK || {};
ADSK.UTILS = (function(UTILS) {
    UTILS.injectBodyFromUrlIntoElement = function (url, element) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = handleMarkup;
        httpRequest.open('GET', url);
        httpRequest.send();

        function handleMarkup() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var parsed = httpRequest.responseText.split(/(<body>|<\/body>)/gi)[2];
                    element.innerHTML = parsed;
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }
    };

    return UTILS;
})(ADSK.UTILS || {});