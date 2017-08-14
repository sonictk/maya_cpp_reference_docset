var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MAddRemoveAttrEdit Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_add_remove_attr_edit.html\', tocPrefix);\n\
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
            <h1>MAddRemoveAttrEdit Class Reference</h1>\n\
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
<div class=\"title\">MAddRemoveAttrEdit Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-F0CA7A2C-EE99-4A95-9E5E-C187F000092C.htm\">What\'s New / What\'s Changed? &gt; Extension for Autodesk Maya 2013</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_add_remove_attr_edit.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_add_remove_attr_edit.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_add_remove_attr_edit.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MAddRemoveAttrEdit.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class for describing edits involving attributes which are added or removed. </p>\n\
<p>This class is used to represent information about edits involving attributes which are added or removed. Such edits occur when attributes are added or removed from nodes in a referenced file. When a reference is unloaded, only the node and attribute name may be queried successfully. When the referenced file is loaded, the node itself may also be queried.</p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_edits.html\" title=\"Edits iterator. \">MItEdits</a> class may be used to iterate over all the edits on a given reference or assembly. </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for MAddRemoveAttrEdit:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_m_add_remove_attr_edit.png\" usemap=\"#MAddRemoveAttrEdit_map\" alt=\"\">\n\
  <map id=\"MAddRemoveAttrEdit_map\" name=\"MAddRemoveAttrEdit_map\">\n\
<area href=\"class_m_edit.html\" title=\"Base class for representing information about edits. \" alt=\"MEdit\" shape=\"rect\" coords=\"0,0,132,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ae60ce3b1d8eda1a508eec297ff1715c4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_add_remove_attr_edit.html#ae60ce3b1d8eda1a508eec297ff1715c4\">node</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:ae60ce3b1d8eda1a508eec297ff1715c4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the depend node involved in this edit.  <a href=\"class_m_add_remove_attr_edit.html#ae60ce3b1d8eda1a508eec297ff1715c4\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae60ce3b1d8eda1a508eec297ff1715c4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab7a4ed9300c5357f4010bf6aadda66bf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_add_remove_attr_edit.html#ab7a4ed9300c5357f4010bf6aadda66bf\">attributeName</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:ab7a4ed9300c5357f4010bf6aadda66bf\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of the attribute that was added or removed.  <a href=\"class_m_add_remove_attr_edit.html#ab7a4ed9300c5357f4010bf6aadda66bf\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab7a4ed9300c5357f4010bf6aadda66bf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a680dd21f6b6e8bb0695cbda59674668f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_add_remove_attr_edit.html#a680dd21f6b6e8bb0695cbda59674668f\">nodeName</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a680dd21f6b6e8bb0695cbda59674668f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of the node where the attribute was added or removed.  <a href=\"class_m_add_remove_attr_edit.html#a680dd21f6b6e8bb0695cbda59674668f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a680dd21f6b6e8bb0695cbda59674668f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae15890f4b8a2fe4d277ec93c88a1f60e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_add_remove_attr_edit.html#ae15890f4b8a2fe4d277ec93c88a1f60e\">isAttributeAdded</a> () const </td></tr>\n\
<tr class=\"memdesc:ae15890f4b8a2fe4d277ec93c88a1f60e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns true if this edit is for an added attribute, false for a removed attribute.  <a href=\"class_m_add_remove_attr_edit.html#ae15890f4b8a2fe4d277ec93c88a1f60e\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae15890f4b8a2fe4d277ec93c88a1f60e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abf78e462fa6ff65abaeb52ff4ac8d0dd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feb\">EditType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_add_remove_attr_edit.html#abf78e462fa6ff65abaeb52ff4ac8d0dd\">editType</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:abf78e462fa6ff65abaeb52ff4ac8d0dd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Virtual method used to return the edit type of this edit, which is <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba7ca7196cf3dbf011cd7fb48e18970fa2\" title=\"Edit indicating an attribute added or removed. \">MEdit::kAddRemoveAttrEdit</a>.  <a href=\"class_m_add_remove_attr_edit.html#abf78e462fa6ff65abaeb52ff4ac8d0dd\">More...</a><br></td></tr>\n\
<tr class=\"separator:abf78e462fa6ff65abaeb52ff4ac8d0dd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_m_edit\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_m_edit\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html\">MEdit</a></td></tr>\n\
<tr class=\"memitem:a9b1be72bd429d458096401c1ff7773a3 inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#a9b1be72bd429d458096401c1ff7773a3\">getString</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a9b1be72bd429d458096401c1ff7773a3 inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the ASCII string related to the current edit.  <a href=\"class_m_add_remove_attr_edit.html#a9b1be72bd429d458096401c1ff7773a3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9b1be72bd429d458096401c1ff7773a3 inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afd215291ac55894099ac368fe08a8fec inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#afd215291ac55894099ac368fe08a8fec\">isApplied</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:afd215291ac55894099ac368fe08a8fec inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if we attempted to apply the edit.  <a href=\"class_m_add_remove_attr_edit.html#afd215291ac55894099ac368fe08a8fec\">More...</a><br></td></tr>\n\
<tr class=\"separator:afd215291ac55894099ac368fe08a8fec inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af5ce3d7e47395ed9ee2a52408ea7428d inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#af5ce3d7e47395ed9ee2a52408ea7428d\">isFailed</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:af5ce3d7e47395ed9ee2a52408ea7428d inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if the edit is applied successfully.  <a href=\"class_m_add_remove_attr_edit.html#af5ce3d7e47395ed9ee2a52408ea7428d\">More...</a><br></td></tr>\n\
<tr class=\"separator:af5ce3d7e47395ed9ee2a52408ea7428d inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a551cb60159ee1a6f45702121c6e0e09c inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#a551cb60159ee1a6f45702121c6e0e09c\">isTopLevel</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a551cb60159ee1a6f45702121c6e0e09c inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if the edit was made from the top-level.  <a href=\"class_m_add_remove_attr_edit.html#a551cb60159ee1a6f45702121c6e0e09c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a551cb60159ee1a6f45702121c6e0e09c inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adb7127376a3f63641e6ca6784bc24750 inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#adb7127376a3f63641e6ca6784bc24750\">setApplied</a> (bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#afd215291ac55894099ac368fe08a8fec\">isApplied</a>)</td></tr>\n\
<tr class=\"memdesc:adb7127376a3f63641e6ca6784bc24750 inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><b>This method is obsolete.</b>  <a href=\"class_m_add_remove_attr_edit.html#adb7127376a3f63641e6ca6784bc24750\">More...</a><br></td></tr>\n\
<tr class=\"separator:adb7127376a3f63641e6ca6784bc24750 inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad4b29aaeb689945ff7f6943391b4e9f8 inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad4b29aaeb689945ff7f6943391b4e9f8\">setFailed</a> (bool failed)</td></tr>\n\
<tr class=\"memdesc:ad4b29aaeb689945ff7f6943391b4e9f8 inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><b>This method is obsolete.</b>  <a href=\"class_m_add_remove_attr_edit.html#ad4b29aaeb689945ff7f6943391b4e9f8\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad4b29aaeb689945ff7f6943391b4e9f8 inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acb98fda2bb8e8e010e6bf5bfb4480bee inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#acb98fda2bb8e8e010e6bf5bfb4480bee\">hasEditData</a> () const </td></tr>\n\
<tr class=\"memdesc:acb98fda2bb8e8e010e6bf5bfb4480bee inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if the edit has any user-defined editData associated with it.  <a href=\"class_m_add_remove_attr_edit.html#acb98fda2bb8e8e010e6bf5bfb4480bee\">More...</a><br></td></tr>\n\
<tr class=\"separator:acb98fda2bb8e8e010e6bf5bfb4480bee inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a17e77aff69612b9fcbf121af2832d0c0 inherit pub_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#a17e77aff69612b9fcbf121af2832d0c0\">matches</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_edit_data.html\">MPxEditData</a> *editData) const </td></tr>\n\
<tr class=\"memdesc:a17e77aff69612b9fcbf121af2832d0c0 inherit pub_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if the edit has user-defined editData associated with it that matches the given editData object.  <a href=\"class_m_add_remove_attr_edit.html#a17e77aff69612b9fcbf121af2832d0c0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a17e77aff69612b9fcbf121af2832d0c0 inherit pub_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_add_remove_attr_edit.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_add_remove_attr_edit.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_m_edit\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_m_edit\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html\">MEdit</a></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_edit\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_add_remove_attr_edit.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a334383def6f5a85354c154a17b7d79d4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a334383def6f5a85354c154a17b7d79d4\"></a>\n\
class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>MItEdits</b></td></tr>\n\
<tr class=\"separator:a334383def6f5a85354c154a17b7d79d4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_types_class_m_edit\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_types_class_m_edit\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Types inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html\">MEdit</a></td></tr>\n\
<tr class=\"memitem:ad67c869ce85bd645cacb0ba89b993feb inherit pub_types_class_m_edit\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feb\">EditType</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba2cafb32a0ff3dab058aaab9b634c9a82\">kNullEdit</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba3b2e94049bbbc81863debd70fa57f59d\">kSetAttrEdit</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba27cba37c8dcb0af1eb68e49c4592ac77\">kConnectDisconnectEdit</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba7ca7196cf3dbf011cd7fb48e18970fa2\">kAddRemoveAttrEdit</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993febaf57f441c58194544ed04d4b6bf0740a0\">kParentEdit</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba1698b49adaa25218d39794cc5f263ade\">kFcurveEdit</a>\n\
<br>\n\
 }<tr class=\"memdesc:ad67c869ce85bd645cacb0ba89b993feb\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Type of edit.  <a href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feb\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad67c869ce85bd645cacb0ba89b993feb inherit pub_types_class_m_edit\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ae60ce3b1d8eda1a508eec297ff1715c4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the depend node involved in this edit. </p>\n\
<p>The node can only be returned when the related reference or assembly is loaded. When the reference or assembly is unloaded, only the node name string may be queried successfully.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status Code</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The node involved in this edit</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Node was successfully returned </li>\n\
<li><b>MS::kFailure</b> Related reference or assembly was not loaded. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab7a4ed9300c5357f4010bf6aadda66bf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> attributeName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of the attribute that was added or removed. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status Code</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of the attribute involved in this edit</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Attribute name was returned successfully </li>\n\
<li><b>MS::kFailure</b> Edit was not initialized successfully </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a680dd21f6b6e8bb0695cbda59674668f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> nodeName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of the node where the attribute was added or removed. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status Code</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of the node involved in this edit</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Node name was returned successfully </li>\n\
<li><b>MS::kFailure</b> Edit was not initialized successfully </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae15890f4b8a2fe4d277ec93c88a1f60e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isAttributeAdded </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns true if this edit is for an added attribute, false for a removed attribute. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True for an added attribute, false for a removed attribute </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abf78e462fa6ff65abaeb52ff4ac8d0dd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feb\">MEdit::EditType</a> editType </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Virtual method used to return the edit type of this edit, which is <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba7ca7196cf3dbf011cd7fb48e18970fa2\" title=\"Edit indicating an attribute added or removed. \">MEdit::kAddRemoveAttrEdit</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#ad67c869ce85bd645cacb0ba89b993feba7ca7196cf3dbf011cd7fb48e18970fa2\" title=\"Edit indicating an attribute added or removed. \">MEdit::kAddRemoveAttrEdit</a></dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Operation successful </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
<p>Reimplemented from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#abf78e462fa6ff65abaeb52ff4ac8d0dd\">MEdit</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MAddRemoveAttrEdit.h</li>\n\
<li>MAddRemoveAttrEdit.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";