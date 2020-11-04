if(typeof console === "undefined") {
    console = {};
}

if(typeof debug === 'undefined') {
    console.log = function() { };
    console.debug = function() { };
    console.info = function() { };
    console.warn = function() { };
    console.error = function() { };
    console.time = function() { };
    console.timeEnd = function() { };
}