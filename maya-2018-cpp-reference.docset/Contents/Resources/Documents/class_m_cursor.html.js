var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MCursor Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_cursor.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MCursor Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MCursor Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_u_i.html\">OpenMayaUI - API module for user interface</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_cursor.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_cursor.html#pub-static-attribs\">Static Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MCursor.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Manipulate Cursors. </p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> class implements a cursor class, and is used to pass all cursor arguments to Maya API methods.</p>\n\
<p>The cursor image and mask are stored in xbm format to the constructor along with the cursor dimensions and the cursor hotspot. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/lasso_tool_2lasso_tool_8cpp-example.html#_a8\">lassoTool/lassoTool.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ae46e95b1baa052d6bbaf9a29a0c494d4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#ae46e95b1baa052d6bbaf9a29a0c494d4\">MCursor</a> (short width, short height, short hotSpotX, short hotSpotY, unsigned char *bits, unsigned char *mask)</td></tr>\n\
<tr class=\"memdesc:ae46e95b1baa052d6bbaf9a29a0c494d4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class constructor.  <a href=\"class_m_cursor.html#ae46e95b1baa052d6bbaf9a29a0c494d4\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae46e95b1baa052d6bbaf9a29a0c494d4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aea4c1e6a3f705edc706075e65998dbfa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#aea4c1e6a3f705edc706075e65998dbfa\">MCursor</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:aea4c1e6a3f705edc706075e65998dbfa\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_cursor.html#aea4c1e6a3f705edc706075e65998dbfa\">More...</a><br></td></tr>\n\
<tr class=\"separator:aea4c1e6a3f705edc706075e65998dbfa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8dec6034b91171af3cc39f60b332ae51\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8dec6034b91171af3cc39f60b332ae51\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a8dec6034b91171af3cc39f60b332ae51\">~MCursor</a> ()</td></tr>\n\
<tr class=\"memdesc:a8dec6034b91171af3cc39f60b332ae51\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The class destructor. <br></td></tr>\n\
<tr class=\"separator:a8dec6034b91171af3cc39f60b332ae51\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a347964d01a16a52927b35aefad8e12e4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a347964d01a16a52927b35aefad8e12e4\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a347964d01a16a52927b35aefad8e12e4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator.  <a href=\"class_m_cursor.html#a347964d01a16a52927b35aefad8e12e4\">More...</a><br></td></tr>\n\
<tr class=\"separator:a347964d01a16a52927b35aefad8e12e4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aee9e1c0df1805a04535c25b1db84469e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#aee9e1c0df1805a04535c25b1db84469e\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;) const </td></tr>\n\
<tr class=\"memdesc:aee9e1c0df1805a04535c25b1db84469e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Equality operator.  <a href=\"class_m_cursor.html#aee9e1c0df1805a04535c25b1db84469e\">More...</a><br></td></tr>\n\
<tr class=\"separator:aee9e1c0df1805a04535c25b1db84469e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a95617a913a66e515310e2df0b2f5b8fd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a95617a913a66e515310e2df0b2f5b8fd\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;) const </td></tr>\n\
<tr class=\"memdesc:a95617a913a66e515310e2df0b2f5b8fd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Inequality operator.  <a href=\"class_m_cursor.html#a95617a913a66e515310e2df0b2f5b8fd\">More...</a><br></td></tr>\n\
<tr class=\"separator:a95617a913a66e515310e2df0b2f5b8fd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a7cda9fbf606764ffb275514392d57d82\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7cda9fbf606764ffb275514392d57d82\"></a>\n\
static const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a7cda9fbf606764ffb275514392d57d82\">defaultCursor</a></td></tr>\n\
<tr class=\"memdesc:a7cda9fbf606764ffb275514392d57d82\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Maya default cursor, the left arrow. <br></td></tr>\n\
<tr class=\"separator:a7cda9fbf606764ffb275514392d57d82\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af47a4095de0b4c41d83e536df16354fe\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af47a4095de0b4c41d83e536df16354fe\"></a>\n\
static const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#af47a4095de0b4c41d83e536df16354fe\">crossHairCursor</a></td></tr>\n\
<tr class=\"memdesc:af47a4095de0b4c41d83e536df16354fe\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">\'+\' cursor. <br></td></tr>\n\
<tr class=\"separator:af47a4095de0b4c41d83e536df16354fe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad11ef94b53eabb68392adebdf680fd72\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad11ef94b53eabb68392adebdf680fd72\"></a>\n\
static const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#ad11ef94b53eabb68392adebdf680fd72\">doubleCrossHairCursor</a></td></tr>\n\
<tr class=\"memdesc:ad11ef94b53eabb68392adebdf680fd72\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">\'+\' cursor with double lines. <br></td></tr>\n\
<tr class=\"separator:ad11ef94b53eabb68392adebdf680fd72\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af90009e098b37698c059716caba92603\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af90009e098b37698c059716caba92603\"></a>\n\
static const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#af90009e098b37698c059716caba92603\">editCursor</a></td></tr>\n\
<tr class=\"memdesc:af90009e098b37698c059716caba92603\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Wedge-shaped arrow pointing left. <br></td></tr>\n\
<tr class=\"separator:af90009e098b37698c059716caba92603\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6516e7127ca4f33b0c87394ea1d9869f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a6516e7127ca4f33b0c87394ea1d9869f\"></a>\n\
static const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a6516e7127ca4f33b0c87394ea1d9869f\">pencilCursor</a></td></tr>\n\
<tr class=\"memdesc:a6516e7127ca4f33b0c87394ea1d9869f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Pencil shape. <br></td></tr>\n\
<tr class=\"separator:a6516e7127ca4f33b0c87394ea1d9869f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7b880b1c2581a3f6884c3c7cffb8f3d6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7b880b1c2581a3f6884c3c7cffb8f3d6\"></a>\n\
static const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a7b880b1c2581a3f6884c3c7cffb8f3d6\">handCursor</a></td></tr>\n\
<tr class=\"memdesc:a7b880b1c2581a3f6884c3c7cffb8f3d6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Open hand shaped cursor. <br></td></tr>\n\
<tr class=\"separator:a7b880b1c2581a3f6884c3c7cffb8f3d6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ae46e95b1baa052d6bbaf9a29a0c494d4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">short&#160;</td>\n\
          <td class=\"paramname\"><em>width</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">short&#160;</td>\n\
          <td class=\"paramname\"><em>height</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">short&#160;</td>\n\
          <td class=\"paramname\"><em>hotSpotX</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">short&#160;</td>\n\
          <td class=\"paramname\"><em>hotSpotY</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned char *&#160;</td>\n\
          <td class=\"paramname\"><em>bits</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned char *&#160;</td>\n\
          <td class=\"paramname\"><em>mask</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Class constructor. </p>\n\
<p>Create a new instance of an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> and initialize it with the given values.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">width</td><td>the width of the cursor </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">height</td><td>the height of the cursor </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">hotSpotX</td><td>the x position of the hot spot (left is 1) </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">hotSpotY</td><td>the y position of the hot spot (top is 1) </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">bits</td><td>the cursor bitmap in xbm format </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">mask</td><td>the cursor mask in xbm format </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aea4c1e6a3f705edc706075e65998dbfa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<p>Create a new <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> instance and initialize it with the given cursor.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> to copy from. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a347964d01a16a52927b35aefad8e12e4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Assignment operator. </p>\n\
<p>Allows assignment between <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> instances.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> to copy from. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aee9e1c0df1805a04535c25b1db84469e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Equality operator. </p>\n\
<p>Allows 2 MCursors to be compared to see if they are identical.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> object to be compared with.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>true</b> if the objects are same. </li>\n\
<li><b>false</b> if the objects are different. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a95617a913a66e515310e2df0b2f5b8fd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\">MCursor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Inequality operator. </p>\n\
<p>Allows 2 MCursors to be compared to see if they are not the same.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html\" title=\"Manipulate Cursors. \">MCursor</a> object to be compared with.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>true</b> if the objects are different. </li>\n\
<li><b>false</b> if the objects are same. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MCursor.h</li>\n\
<li>MCursor.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";