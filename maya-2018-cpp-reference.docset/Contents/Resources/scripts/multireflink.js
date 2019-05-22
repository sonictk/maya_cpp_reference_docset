
$(document).on('mousedown','a.a_multireflink',function(e) { openRefLinkDiv(e, $(this).data()) });
$(document).on('scroll','div#topic div.content',function(e) { closeRefLinkDiv(e) });
$(document).on('click',function(e) { closeRefLinkDiv(e) });

var root_canonical = "_ROOT_URL_FOR_ATHENA_";
 
function openRefLinkDiv(e, object_data)
{
   var $oRefLinkDiv = $("#reflinkdiv");
    if (!$oRefLinkDiv.length)
	{ return; }

	var evt = e || evt || window.event;	

	if (!getResults(object_data, $oRefLinkDiv, e.currentTarget))
		return true;

	$oRefLinkDiv.show(0);

	resizeRefLinkDiv(evt, $oRefLinkDiv);

	if (typeof evt.stopImmediatePropagation != "undefined") {
	evt.stopImmediatePropagation();
    } else {
        evt.cancelBubble = true;
    }
}

function getResults(symbolData, $oRefLinkDiv, target)
{
	var a_reflinkmatches = symbolData.reflinkdata;

	if (a_reflinkmatches === undefined || a_reflinkmatches.length == 0)
	{ return false; }

	var prefix = a_reflinkmatches[0].relpathtoroot;  // use relative path
	if ($("div#main.view-active").length) // we are in ADE 2.1
	{ prefix = "./index.html#!/url="; }
	if ($("div#adsk-athena").length) // we are in Athena
	{ prefix = root_canonical; }
	if (a_reflinkmatches.length == 1)
	{
		target.href = prefix + a_reflinkmatches[0].path;
		return false;
	}

	var innerHTML = "";
	for (var i_match = 0; i_match < a_reflinkmatches.length; i_match++)
	{ 
		prefix = a_reflinkmatches[i_match].relpathtoroot;
		if ($("div#main.view-active").length) // we are in ADE 2.1
		{ prefix = "./index.html#!/url="; }
		if ($("div#adsk-athena").length) // we are in Athena
		{ prefix = root_canonical; }
		innerHTML += "<a href='" + prefix + a_reflinkmatches[i_match].path + "' id='reflink_" + i_match + "'>" + a_reflinkmatches[i_match].title + "</a><br />";
	}
 	$oRefLinkDiv.html(innerHTML);
 	return true;
}

function resizeRefLinkDiv (evt, $oRefLinkDiv) 
{
    var contentDiv = $("div#topic div.content");

    var offsetLeft = 0;
    var offsetRight = 0;
    if ($oRefLinkDiv.offsetParent().length)
    {
    	offsetLeft = $oRefLinkDiv.offsetParent().offset().left;
    	offsetTop =  $oRefLinkDiv.offsetParent().offset().top;
    }
    var iLeftPos = evt.pageX + 10 - offsetLeft;
    var iTopPos = evt.pageY + 10 - offsetTop;
    var windowRight = $(window).width() - offsetLeft;
    var windowBottom = $(window).height() - offsetTop;

    if (contentDiv.length) // we are in HTML
    {
    	iLeftPos += contentDiv.scrollLeft();
    	iTopPos += contentDiv.scrollTop();
    	windowRight += contentDiv.scrollLeft();
    	windowBottom += contentDiv.scrollTop();
    } else // we are in CHM
    {
	    	windowRight += $(document).scrollLeft();
	    	windowBottom += $(document).scrollTop();
    }
    if (windowRight < (iLeftPos + $oRefLinkDiv.width() + 20))
    	{ iLeftPos = windowRight - $oRefLinkDiv.width() - 20; }
    if (windowBottom < (iTopPos + $oRefLinkDiv.height() + 20))
    	{ iTopPos = windowBottom - $oRefLinkDiv.height() - 20; }

	$oRefLinkDiv.css({'visibility':'visible','top':iTopPos, 'left':iLeftPos});
}

function closeRefLinkDiv(event) {
    var oRefLinkDiv = $("#reflinkdiv");
    if (oRefLinkDiv.length)
    { oRefLinkDiv.hide(0); }
}
