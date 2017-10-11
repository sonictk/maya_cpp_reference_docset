var modern = document.getElementById || document.all;
function getEl(name,win) {
	var doc;
	win = win || window;
	doc = win.document || win.contentDocument;
	if (doc.all) {
		return doc.all(name);
	} else if (doc.getElementById) {
		return doc.getElementById(name);
	} else {
		return null;
	}
}

if (window.parent.frames && window.parent.frames.sideFrame && window.parent.frames.sideFrame.hilite) {
	window.parent.frames.sideFrame.hilite(pageDir,pageName);
}

function setSide(side) {
	var page = "../index.html?side="+pageDir+"/"+side+"&main="+String(window.location);
	window.top.location = page;
	return false;
}

function loader() {
	syncBreadcrumbs();
	window.top.document.title = window.document.title;
}

function syncBreadcrumbs() {
	if (modern) {
		if ((window.top != window) && window.parent.frames.sideFrame) {
			var loc = String(window.parent.frames.sideFrame.location);
			var c = getEl("chapter");
			var p = getEl("parents");
			if ((loc.indexOf("contents.topics") > -1) && (window.showing != "contents")) {
				c.style.display = "none";
				p.style.display = "block";
				window.showing = "contents";
			} else if ((loc.indexOf("chapters.topics") > -1) && (window.showing != "chapters")) {
				c.style.display = "block";
				p.style.display = "none";
				window.showing = "chapters";
			}
			window.setTimeout("syncBreadcrumbs()",1000);
		}
	}
}

function highlight(bodyText, searchTerm) 
{
  highlightStartTag = "<font style='color:navy; background-color:yellow;'>";
  highlightEndTag = "</font>";

  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
    
  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  return newText;
}

function highLightSearch()
{
  if (!document.body || typeof(document.body.innerHTML) == "undefined") {
    return false;
  }

  var queryPrefix = "hl=";
  var hl = String(window.location.search).substr(1);
  var startPos = hl.toLowerCase().indexOf(queryPrefix);
  if ((startPos < 0) || (startPos + queryPrefix.length == hl.length)) {
    return false;
  }
  var endPos = hl.indexOf("&", startPos);
  if (endPos < 0) {
    endPos = hl.length;
  }
  
  var queryString = hl.substring(startPos + queryPrefix.length, endPos);
  queryString = queryString.replace(/%20/gi, " ");
  queryString = queryString.replace(/\+/gi, " ");
  queryString = queryString.replace(/\"/gi, "");
  queryString = queryString.replace(/%22/gi, "\"");

  var quotes = new Array;
  var last = -1;
  
  for (var i = 0; i < queryString.length; i++) {   
    pos = queryString.indexOf("\"", i);

    if (pos < 0) {
      i = queryString.length;
    } 
    else {
      i = pos;

      if (last == -1) {
        last = pos;
      } 
      else { 
	quotes.push(queryString.substring(last+1, pos));
	last = -1;
      }
    }  
  }

  for (var i = 0; i < quotes.length; i++) {  
    re = new RegExp ("\"" + quotes[i] + "\"", 'gi') ;
    queryString = queryString.replace(re, "");
  } 
  
  searchArray = queryString.split(" ");
  for (var i = 0; i < quotes.length; i++) {  
    searchArray.push(quotes[i]);
  } 

  var bodyText = document.body.innerHTML;
  for (var i = 0; i < searchArray.length; i++) { 
    if (searchArray[i] != "") {
      if (searchArray[i].length < 3) {
        searchArray[i] = " " + searchArray[i] + " ";
      }
      bodyText = highlight(bodyText, searchArray[i]);
    }
  }
  
  document.body.innerHTML = bodyText;
  return true;
}

window.top.contentLocation = String(window.location);

window.onload = loader;
