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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_index_pair-members.html\', tocPrefix);\n\
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
<div class=\"title\">IndexPair Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#aa8535ea1f8f4f88ba32dcb36b6779ff2\">asString</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#af2938c9ae36e4084bffb90aa619991a2\">clone</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html\">CRTP_IndexType&lt; IndexPair &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a9e997d341fc948c5b1197fdf02552591\">CRTP_IndexType&lt; IndexPair &gt;</a> class</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">friend</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#aeb4cd8437225e93fdede4c603478381a\">Debug</a>(const IndexPair *me, adsk::Debug::Print &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#afdae19b10b563a06f21f9162544291bc\">Debug</a>(const IndexPair *me, adsk::Debug::Footprint &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a017b673598cf98da323123828a580828\">CRTP_IndexType&lt; IndexPair &gt;::Debug</a>(const RefCounted *me, Debug::Print &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a9d1b2b85361a0ceb15861047253b31bc\">CRTP_IndexType&lt; IndexPair &gt;::Debug</a>(const RefCounted *me, Debug::Footprint &amp;request)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html#a1c91c6eea2f429ba733770d83182e97d\">CRTP_Debug&lt; IndexPair, adsk::debug</a>(adsk::Debug::Print &amp;request) const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html\">CRTP_Debug&lt; IndexPair, adsk::Debug::Print &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html#a1c91c6eea2f429ba733770d83182e97d\">CRTP_Debug&lt; IndexPair, adsk::Debug::Footprint &gt;::debug</a>(adsk::Debug::Footprint &amp;request) const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_c_r_t_p___debug.html\">CRTP_Debug&lt; IndexPair, adsk::Debug::Footprint &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a57ebe06f1436556fc7ea77223fca0f94\">denseSpaceBetween</a>(const IndexType &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a0553a485b35942781a4e19d3735c8c97\">fSecondIndex</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#aa4c8ccd2e666d1774220b8f262f0b0cf\">getIndexPair</a>(IndexCount &amp;first, IndexCount &amp;second) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#acf2eb1ebfcaa4b73dd8e52e94ccb8deb\">IndexPair</a>(IndexCount firstValue, IndexCount secondValue)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a041e6ae58849f1b350b2070161cd3191\">IndexPair</a>(const IndexPair &amp;rhs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#aa186e0ab790394283f5f0a1378d3d495\">IndexPair</a>(const std::string &amp;value)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#aee8099cece082603c035e4e15f5fb92e\">IndexPair</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a5728e6fc25f1f5ba84329c301647f50b\">IndexType</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a9528a2d9f6428a81458e37f76b103fad\">IndexType</a>(const IndexType &amp;rhs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a06013a942d7abc4c27da4257b6d9438e\">myRegistration</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a951db9ffca1d19fccf8ed3dd88f86327\">myTypeName</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a601605d5c50a7ef0b1799c31255652b5\">operator!=</a>(const IndexType &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a5d79d1b5beacd0b6087d9512cac9c264\">operator!=</a>(const IndexPair &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a912378b806bd13b94f022da2d914f111\">operator&lt;</a>(const IndexType &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a4b033f8ed3635a7862a2e8203299a689\">operator&lt;</a>(const IndexPair &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a5fe2acf50f1f98d50d39fbde6e9bb936\">operator&lt;=</a>(const IndexType &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a62b2fd9c7ae2a4291b4a720b0eeee4df\">operator&lt;=</a>(const IndexPair &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#abe5f1fe86f3969a6afae71b8d0c8730b\">operator=</a>(const IndexPair &amp;rhs)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a73867e8adfd1585d35c76f5ea002695e\">operator==</a>(const IndexType &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#ac7370b2b6dac163de63163d0ffc8a72d\">operator==</a>(const IndexPair &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#ac33dfb8cef5c3af86f23f17f36a87d0e\">operator&gt;</a>(const IndexType &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a035613abae7dadb0f871869fd39fed7b\">operator&gt;</a>(const IndexPair &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#aceb52b860e76c29428340cd307fb5d3c\">operator&gt;=</a>(const IndexType &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a97f1ebaf0e8634a6572a2e28b5012d66\">operator&gt;=</a>(const IndexPair &amp;rhs) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#aebb1990f519367c00c1861b5b3b3e0a5\">RefCounted</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#af66f84bd2408304143da35229d0a7d3e\">RefCounted</a>(const RefCounted &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a688f680f68f613ac61faac6c905fd222\">supportsDenseMode</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a2f69e4ff8c8d64e60afa56b62d86f007\">typeName</a>() const</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html\">CRTP_IndexType&lt; IndexPair &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#abaed709083fea593f890196256c90f97\">~IndexPair</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a7c522e4e059ae2c20d11fe9e5544df98\">~IndexType</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#ae725be496ffd7a9d4bc812d5bb26d58f\">~RefCounted</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";