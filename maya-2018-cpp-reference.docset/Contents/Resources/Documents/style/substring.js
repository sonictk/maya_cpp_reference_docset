function getSubText() {
	return document.forms.ssform.ssfield.value;
}

function runSub() {
	if (window.parent && window.parent.frames.contentFrame) {
		var t = getSubText();
		window.parent.frames.contentFrame.location = "frame_search.html?"+t;
	}
	return false;
}

function checkSub() {
	var t = getSubText();
	if (window.subText) {
		if (window.subText != t) {
			if (t == "") {
				window.parent.frames.contentFrame.location = "index_all.html";
			} else {
				runSub();
			}
		}
	}

	window.subText = t;
}

function subBox() {
	document.write("<nobr><b>By substring(s)</b></nobr></td><td>");
	document.write("<form name='ssform' onSubmit='return runSub()'><input name='ssfield' /></form>");

	if (document.all || document.getElementById) {
		window.subTimer = setInterval("checkSub()",250);
	}
}

function getResults(t) {
	var r = "";
	var tt = t.toLowerCase();
	var word = tt.split(" ");

	for (var i = 0; i < items.length; i++) {
		var match = false;
		var ii = 0;
		while (ii < word.length && !match) {
			if (word[ii] != "") {
				var str = items[i][1];
				var ix = str.toLowerCase().indexOf(word[ii]);

				if (ix > -1) {
					r += "<a href='"+items[i][0]+"' target='subFrame'>";
					r += str.substr(0,ix)+"<b>";
					r += str.substr(ix,word[ii].length);
					r += "</b>"+str.substr(ix+word[ii].length);
					r += "</a><br />";
					match = true;
				}
			}
			ii++;
		}
	}

	return r;
}

function showResults() {
	var srch = String(parent.parent.contentFrame.location.search).substr(1);
	document.write("<p><b><font size='+1'>Substring: "+srch+"</font></b></p>\n");
	document.write(getResults(srch));
}

