var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Member List</title>\n\
      \n\
	  \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
    \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_u_i_table_control-members.html\', tocPrefix);\n\
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
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Member List</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MPxUITableControl Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#aef2bf65416a8d307b6fecc577b3d06c4\">addToSelection</a>(unsigned int row, unsigned int col)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a4d9345a13e40ddf664648bb2e8e6ea92\">allowEdit</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#aff33dc469a3576a503e0a86e08886b2e\">allowSelection</a>(int top, int left, int bottom, int right)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a5873d23da36631a41e8cb1389d7efaaa\">cellString</a>(unsigned int r, unsigned int c, bool &amp;ValidCell)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#ac7d42d8dc67e65ba083f4507c406669a\">clearSelection</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#ac411630b1790ada40a68d588ad3decbd\">collapseOrExpandRow</a>(unsigned int row)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#aa0e619367e2db56f0b744a21bac88fe2\">getCell</a>(unsigned int r, unsigned int c, MString &amp;value)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a92a30164ddffa78eb9b038b9d30f020c\">getCellColor</a>(unsigned int r, unsigned int c, int &amp;red, int &amp;green, int &amp;blue)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a80be8f78f2f54b5a9083e56f2a1cd5e4\">getLabel</a>(MLabelType labelType, unsigned int n, MString &amp;value)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a3e517c15e79988f940bc7708da280ed7\">isSelected</a>(unsigned int row, unsigned int col, MStatus *status=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a7b25c603e914772615c69026741b29f6a3431410f853ae8f4976178c065b7c416\">kAllLabels</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a7b25c603e914772615c69026741b29f6a560cf90eeca8e35e1d31ef719ebc2d6e\">kColumnLabel</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a7b25c603e914772615c69026741b29f6a9867f0d95a2a87778fa768b43ecab512\">kNoLabel</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a7b25c603e914772615c69026741b29f6aad7c9932fb05ada61c08f86e81cf08a8\">kRowLabel</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a1960de3dd1b0c0ff43d5d5cfc350a83d\">labelString</a>(MLabelType labelType, unsigned int n)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a7b25c603e914772615c69026741b29f6\">MLabelType</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a9abb8e031370b2f16eecc64ea3ba4cd7\">MPxUITableControl</a>(MPxControlCommand &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a40047b46bfba717e274b5e7564fe2954\">numberOfColumns</a>(MStatus *ReturnStatus=nullptr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a37375368e9fa37289be0385c4827f105\">numberOfRows</a>(MStatus *ReturnStatus=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a4ac0d7339375eb5d63423b49aca7ee66\">redrawCells</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a201620e1c560f4b7a458c965f1dfc730\">redrawLabels</a>(MLabelType lt=kAllLabels)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#ad360d99cd7641e257502f1d9efadd668\">removeFromSelection</a>(unsigned int row, unsigned int column)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#afc4210142cce83d0fdf8fbf19993e348\">setNumberOfColumns</a>(unsigned int count)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#ad433706792ad75ac9f200a490aad0607\">setNumberOfRows</a>(unsigned int count)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a5623a0df64533904ceb7284092b45fdb\">setSelection</a>(unsigned int row, unsigned int column)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a83bb78ce247cdf9fa383acd7c0e67c74\">setSelection</a>(unsigned int firstRow, unsigned int lastRow, unsigned int firstCol, unsigned int lastCol)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a74814cb7d0f3476b1d4c890dd205e732\">suspendUpdates</a>(bool update, MStatus *ReturnStatue=nullptr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_control.html#a395618c81458e425d4713aabb964293b\">~MPxUIControl</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_control.html\">MPxUIControl</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a26a2f9cb02abe97b18c32f5ff8ec8c40\">~MPxUITableControl</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html\">MPxUITableControl</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";