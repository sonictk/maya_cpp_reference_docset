var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Attach Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_attach.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Attach Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">Attach Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_attach.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Helper class to manage attachment of metadata to other class objects.  \n\
 <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;adskDataAttach.h&gt;</code></p>\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for Attach:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_data_1_1_attach.png\" usemap=\"#Attach_map\" alt=\"\">\n\
  <map id=\"Attach_map\" name=\"Attach_map\">\n\
<area href=\"classadsk_1_1_data_1_1_attach_directly.html\" title=\"Helper class to provide a simple implementation the the adsk::Data::Attach interface. \" alt=\"AttachDirectly\" shape=\"rect\" coords=\"0,56,92,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a0545da80a486749a4d75af86225c331d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0545da80a486749a4d75af86225c331d\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a0545da80a486749a4d75af86225c331d\">Attach</a> ()</td></tr>\n\
<tr class=\"memdesc:a0545da80a486749a4d75af86225c331d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor. <br></td></tr>\n\
<tr class=\"separator:a0545da80a486749a4d75af86225c331d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0192315d3bfe9e72cd2568364a8b9e6f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0192315d3bfe9e72cd2568364a8b9e6f\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a0192315d3bfe9e72cd2568364a8b9e6f\">~Attach</a> ()</td></tr>\n\
<tr class=\"memdesc:a0192315d3bfe9e72cd2568364a8b9e6f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor. <br></td></tr>\n\
<tr class=\"separator:a0192315d3bfe9e72cd2568364a8b9e6f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\">Attach</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\">Attach</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor, does nothing since there is no data.  <a href=\"classadsk_1_1_data_1_1_attach.html#ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7bba65733dab69a16f441fbcf3e784f2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7bba65733dab69a16f441fbcf3e784f2\"></a>\n\
virtual <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a7bba65733dab69a16f441fbcf3e784f2\">editableMetadata</a> ()=0</td></tr>\n\
<tr class=\"memdesc:a7bba65733dab69a16f441fbcf3e784f2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Retrieve the metadata uniquely associated with this object. <br></td></tr>\n\
<tr class=\"separator:a7bba65733dab69a16f441fbcf3e784f2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad2c260ae26428580b8ef50d98d13e042\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad2c260ae26428580b8ef50d98d13e042\"></a>\n\
virtual const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#ad2c260ae26428580b8ef50d98d13e042\">metadata</a> () const  =0</td></tr>\n\
<tr class=\"memdesc:ad2c260ae26428580b8ef50d98d13e042\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Retrieve the metadata uniquely associated with this object (const form) <br></td></tr>\n\
<tr class=\"separator:ad2c260ae26428580b8ef50d98d13e042\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ace3a47eeee7a24746df878b8c626fb84\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ace3a47eeee7a24746df878b8c626fb84\"></a>\n\
virtual bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#ace3a47eeee7a24746df878b8c626fb84\">setMetadata</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> &amp;)=0</td></tr>\n\
<tr class=\"memdesc:ace3a47eeee7a24746df878b8c626fb84\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\" title=\"Helper class to manage attachment of metadata to other class objects. \">Attach</a> new metadata to this object. <br></td></tr>\n\
<tr class=\"separator:ace3a47eeee7a24746df878b8c626fb84\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a99c25c9d340312b146ca8d6c2848d632\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a99c25c9d340312b146ca8d6c2848d632\"></a>\n\
virtual bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a99c25c9d340312b146ca8d6c2848d632\">deleteMetadata</a> ()=0</td></tr>\n\
<tr class=\"memdesc:a99c25c9d340312b146ca8d6c2848d632\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Remove all metadata attached to this object. <br></td></tr>\n\
<tr class=\"separator:a99c25c9d340312b146ca8d6c2848d632\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Helper class to manage attachment of metadata to other class objects. </p>\n\
<p>Since in the purest sense metadata means \"data about data\" it is often useful to attach the metadata directly to the data which it informs. This helper class provides a simple interface for doing just that.</p>\n\
<p>Use it as a mixin on any class to which metadata is to be attached. Implement the abstract methods to access the metadata from wherever your class wishes to store it. </p>\n\
</div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\">Attach</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\">Attach</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor, does nothing since there is no data. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\" title=\"Helper class to manage attachment of metadata to other class objects. \">Attach</a> data to be copied </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskDataAttach.h</li>\n\
<li>adskDataAttach.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";