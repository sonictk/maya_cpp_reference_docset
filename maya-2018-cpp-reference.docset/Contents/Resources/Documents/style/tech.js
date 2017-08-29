function toolbar(fname) {
	if (window.top != window) {
		document.write("<a href='"+fname+"' target='_parent'>No frames</a>");
	} else {
		document.write("<a href='index.html' target='_parent'>Show frames</a>");
	}
}