/*
	Device detection utility.
*/

var ADSK = ADSK || {};
ADSK.UTILS = (function(UTILS) {
	
	function _getDeviceType(userAgent) {
		var ua = userAgent;

		if (ua.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)) {
			// Smart TV.
			return 'tv';	
		} else if (ua.match(/Xbox|PLAYSTATION.3|Wii/i)) {
			// TV-based gaming console.
			return 'tv';
		} else if (ua.match(/iPad/i) || ua.match(/tablet/i) && !ua.match(/RX-34/i) || ua.match(/FOLIO/i)) {
			// Tablet.
			return 'tablet';
		} else if (ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)) {
			// Android tablet.
			return 'tablet';
		} else if (ua.match(/Kindle/i) || ua.match(/Mac.OS/i) && ua.match(/Silk/i)) {
			// Kindle or Kindle Fire.
			return 'tablet';
		} else if (ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || ua.match(/MB511/i) && ua.match(/RUTEM/i)) {
			// Android 3.0 tablet.
			return 'tablet';
		} else if (ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)) {
			// Mobile.
			return 'mobile';
		} else if (ua.match(/Opera/i) && ua.match(/Windows.NT.5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)) {
			// Opera.
			return 'mobile';
		} else if (ua.match(/Windows.(NT|XP|ME|9)/) && !ua.match(/Phone/i) || ua.match(/Win(9|.9|NT)/i)) {
			// Desktop (Windows).
			return 'desktop';
		} else if (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i)) {
			// Desktop (Mac);
			return 'desktop';
		} else if (ua.match(/Linux/i) && ua.match(/X11/i)) {
			// Desktop (Linux).
			return 'desktop';
		} else if (ua.match(/Solaris|SunOS|BSD/i)) {
			// Desktop (Solaris, SunOS, BSD);
			return 'desktop';
		} else if (ua.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !ua.match(/Mobile/i)) {
			// Desktop (BOT, Spider, Crawler).
			return 'desktop';
		} else {
			// Assume it's mobile device.
			return 'mobile';
		}
	}
	
	var _deviceType = _getDeviceType(navigator.userAgent);

	function _isDeviceOfType(assumedType) {
		return (_deviceType.indexOf(assumedType) > -1);
	}
	
	// Device type detection.
	UTILS.DEVICE = {
		isMobile: _isDeviceOfType('mobile'),
		isTablet: _isDeviceOfType('tablet'),
		isDesktop: _isDeviceOfType('desktop'),
		isTV: _isDeviceOfType('tv')	
	};

	return UTILS;
})(ADSK.UTILS || {});