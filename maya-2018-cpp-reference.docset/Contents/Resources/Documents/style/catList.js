function go(newURL) {	

	var category = String(window.location);
	var catStart = category.indexOf("cat_");
	var catEnd = category.indexOf(".html");
	catStart += 4; //4 is the length of "cat_"

	var catName;
	if (catStart < 4 || catEnd < 0 || catEnd < catStart) {
		location.href = newURL;
	}
	else {
		catName = category.substring(catStart, catEnd);
		location.href='show.html?' + escape(newURL) + '&cat=' + escape(catName);
	}
}
