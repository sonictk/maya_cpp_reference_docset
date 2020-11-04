if (self == top) {
    // Redirect to index.htm.
	var pathname = window.location.pathname,
	    filename = pathname.substring(pathname.lastIndexOf('/') + 1),
	    path = pathname.substring(0, pathname.lastIndexOf('/')),
	    folder = path.substring(path.lastIndexOf('/') + 1),
	    hash = window.location.hash,
	    search = window.location.search,
	    index = index || 'index.html';

	window.location.href = '../' + index + search + '#!/url=./' + folder + '/' + filename + hash;
}