var bIsRefLinkDivShown=false;
$(document).ready( function() {
$('a.a_multireflink').click(openRefLinkDiv);
$('div#topic div.content').scroll(closeRefLinkDiv);
});
 
function openRefLinkDiv(e)
{
   var $oRefLinkDiv = $("#reflinkdiv");
    if (!$oRefLinkDiv.length)
	{ return; }

	var evt = e || evt || window.event;	

	if (!getResults($(this).attr('data'), $oRefLinkDiv, e.currentTarget))
		return true;

	$oRefLinkDiv.show(0);

	resizeRefLinkDiv(evt, $oRefLinkDiv);

	if (typeof evt.stopImmediatePropagation != "undefined") {
	evt.stopImmediatePropagation();
    } else {
        evt.cancelBubble = true;
    }
}

function getResults(symbolName, $oRefLinkDiv, target)
{
	var a_reflinkmatches = new Array();
	for (var i_data = 0; i_data < reflinkdata.length; i_data++)
	{
		if (reflinkdata[i_data][0] == symbolName)
		{ a_reflinkmatches.push(reflinkdata[i_data]); }
	}

	if (a_reflinkmatches.length == 0)
	{ return false; }

	var prefix = a_reflinkmatches[0][3];  // use relative path
	if ($("div#main.view-active").length) // we are in ADE 2.1
	{ prefix = "./index.html#!/url="; }
	if (a_reflinkmatches.length == 1)
	{
		target.href = prefix + a_reflinkmatches[0][1];
		return false;
	}

	var innerHTML = "";
	for (var i_match = 0; i_match < a_reflinkmatches.length; i_match++)
	{ innerHTML += "<a href='" + prefix + a_reflinkmatches[i_match][1] + "' id='reflink_" + i_match + "'>" + a_reflinkmatches[i_match][2] + "</a><br />"; }
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
