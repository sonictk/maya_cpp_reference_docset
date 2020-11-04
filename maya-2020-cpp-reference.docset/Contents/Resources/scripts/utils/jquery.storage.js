(function($) {
	var _document = top.document;

	function _isLocalStorageSupported() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null && window['localStorage'] !== undefined;
		} catch(e) {
			return false;
		}
	}

	var _isLocalStorage = _isLocalStorageSupported();

	function _getCookievalAsString(object) {
		// Loop through the properties of the Cookie object and
		// put together the value of the cookie. Since cookies use the
		// equals sign and semicolons as separators, we'll use colons
		// and ampersands for the individual state variables we store
		// within a single cookie value. Note that we escape the value
		// of each state variable, in case it contains punctuation or other
		// illegal characters.
		var cookieval = "";

		for(var prop in object) {
			// Ignore properties with names that begin with '$' and also methods
			if ((prop.charAt(0) == '$') || ((typeof object[prop]) == 'function')) {
				continue;
			}
			if (cookieval != "") {
				cookieval += '&';
			}
			cookieval += prop + ':' + escape(object[prop]);
		}

		return cookieval;
	}

	function _extractNamedCookieFromAll(allcookies, name) {
		// Now extract just the named cookie from that list
		var start = allcookies.indexOf(name + '=');
		if (start == -1) return null;   // Cookie not defined for this page
		start += name.length + 1;  // Skip name and equals sign
		var end = allcookies.indexOf(';', start);
		if (end == -1) end = allcookies.length;

		return allcookies.substring(start, end);
	}

	function _getPopulateObjectFromCookieval(cookieval, object) {
		// Now that we've extracted the value of the named cookie, we
		// must break that value down into individual state variable
		// names and values. The name/value pairs are separated from each
		// other by ampersands, and the individual names and values are
		// separated from each other by colons. We use the split(  ) method
		// to parse everything.
		var a = cookieval.split('&');    // Break it into an array of name/value pairs
		for(var i1=0; i1 < a.length; i1++)  // Break each pair into an array
			a[i1] = a[i1].split(':');

		// Now that we've parsed the cookie value, set all the names and values
		// of the state variables in this Cookie object. Note that we unescape(  )
		// the property value, because we called escape(  ) when we stored it.
		for(var i2 = 0; i2 < a.length; i2++) {
			object[a[i2][0]] = unescape(a[i2][1]);
		}
	}

	var _set = (function() {
		if (_isLocalStorage) {
			return function(key, value) {
				try {
					localStorage.setItem(key, value);
				} catch (e) { }
			}
		} else {
			return function(key, value) {
				var cookie = key + '=' + cookieval;
				_document.cookie = cookie;
			}
		}
	})()

	var _get = (function() {
		if (_isLocalStorage) {
			return function(key) {
				return localStorage.getItem(key);
			}
		} else {
			return function(key) {
				var allcookies = _document.cookie;
				if (allcookies == "" || allcookies === undefined || allcookies == null) {
					return null;
				} else {
					return _extractNamedCookieFromAll(allcookies, key);
				}
			}
		}
	})()

	// Public interface.
	$.extend({
		storage: {
			store: function(name, object) {
				var cookieval = _getCookievalAsString(object);
				_set(name, cookieval);
			},

			load: function(name, object) {
				var cookieval = _get(name);
				if (cookieval != null) {
					_getPopulateObjectFromCookieval(cookieval, object);
				}
			},

            remove: function(name) {
                _set(name, {});
            }
		}
	});
})($);