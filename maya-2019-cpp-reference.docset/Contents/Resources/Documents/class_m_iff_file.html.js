var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MIffFile Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_iff_file.html\', tocPrefix);\n\
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
            <h1>MIffFile Class Reference</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
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
<div class=\"title\">MIffFile Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_iff_file.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_iff_file.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MIffFile.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Read file images stored on disk. </p>\n\
<p>This class provides a simple C++ interface to the IFF i/o library (flib). A class called <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\" title=\"Encapsulates IFF&#39;s 4 character block structure. \">MIffTag</a> is used to create the 4 byte tags that are used to distinguish the different block types within an IFF file. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/geometry_cache_converter_2geometry_cache_converter_8cpp-example.html#_a14\">geometryCacheConverter/geometryCacheConverter.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/geometry_cache_converter_2geometry_cache_file_8cpp-example.html#_a1\">geometryCacheConverter/geometryCacheFile.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/geometry_cache_converter_2geometry_cache_file_8h-example.html#_a1\">geometryCacheConverter/geometryCacheFile.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad79c0519f630090686b694880dddb3f5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad79c0519f630090686b694880dddb3f5\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#ad79c0519f630090686b694880dddb3f5\">MIffFile</a> ()</td></tr>\n\
<tr class=\"memdesc:ad79c0519f630090686b694880dddb3f5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default class constructor. <br></td></tr>\n\
<tr class=\"separator:ad79c0519f630090686b694880dddb3f5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6bf19f1ed03c392466d98c9068e220da\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a6bf19f1ed03c392466d98c9068e220da\">MIffFile</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;fileName)</td></tr>\n\
<tr class=\"memdesc:a6bf19f1ed03c392466d98c9068e220da\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Alternate class constructor.  <a href=\"class_m_iff_file.html#a6bf19f1ed03c392466d98c9068e220da\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6bf19f1ed03c392466d98c9068e220da\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4e94fbd64c29371a99e2020b34a44179\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4e94fbd64c29371a99e2020b34a44179\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a4e94fbd64c29371a99e2020b34a44179\">~MIffFile</a> ()</td></tr>\n\
<tr class=\"memdesc:a4e94fbd64c29371a99e2020b34a44179\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a4e94fbd64c29371a99e2020b34a44179\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a68bc21f777aad358648863e7127f6c1b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a68bc21f777aad358648863e7127f6c1b\">open</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;fileName)</td></tr>\n\
<tr class=\"memdesc:a68bc21f777aad358648863e7127f6c1b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Opens the file for reading.  <a href=\"class_m_iff_file.html#a68bc21f777aad358648863e7127f6c1b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a68bc21f777aad358648863e7127f6c1b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0a34ca7b49311218db7cf12792d11f2d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a0a34ca7b49311218db7cf12792d11f2d\">close</a> ()</td></tr>\n\
<tr class=\"memdesc:a0a34ca7b49311218db7cf12792d11f2d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Close the currently open file.  <a href=\"class_m_iff_file.html#a0a34ca7b49311218db7cf12792d11f2d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0a34ca7b49311218db7cf12792d11f2d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a22761609071413dcce0632885c820e87\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a22761609071413dcce0632885c820e87\">isActive</a> () const </td></tr>\n\
<tr class=\"memdesc:a22761609071413dcce0632885c820e87\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Is the file currently active?  <a href=\"class_m_iff_file.html#a22761609071413dcce0632885c820e87\">More...</a><br></td></tr>\n\
<tr class=\"separator:a22761609071413dcce0632885c820e87\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8272c502e87617dd3c6024b63a815b87\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a8272c502e87617dd3c6024b63a815b87\">beginReadGroup</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;id, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;type)</td></tr>\n\
<tr class=\"memdesc:a8272c502e87617dd3c6024b63a815b87\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Opens a group for reading.  <a href=\"class_m_iff_file.html#a8272c502e87617dd3c6024b63a815b87\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8272c502e87617dd3c6024b63a815b87\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8ccb6b579cea1c16be0714965e92666f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a8ccb6b579cea1c16be0714965e92666f\">endReadGroup</a> ()</td></tr>\n\
<tr class=\"memdesc:a8ccb6b579cea1c16be0714965e92666f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Closes group currently being read, skipping remaining data (including nested groups).  <a href=\"class_m_iff_file.html#a8ccb6b579cea1c16be0714965e92666f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8ccb6b579cea1c16be0714965e92666f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acb11d68afecb07d047b9c1541fd1c11f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const void *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#acb11d68afecb07d047b9c1541fd1c11f\">getChunk</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;chunkTag, unsigned *byteCount)</td></tr>\n\
<tr class=\"memdesc:acb11d68afecb07d047b9c1541fd1c11f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Opens a chunk for reading.  <a href=\"class_m_iff_file.html#acb11d68afecb07d047b9c1541fd1c11f\">More...</a><br></td></tr>\n\
<tr class=\"separator:acb11d68afecb07d047b9c1541fd1c11f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5dceeb7d02e06b4394127014b01ccb2a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a5dceeb7d02e06b4394127014b01ccb2a\">beginGet</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;chunkTag, unsigned *byteCount)</td></tr>\n\
<tr class=\"memdesc:a5dceeb7d02e06b4394127014b01ccb2a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Begin grabbing the data.  <a href=\"class_m_iff_file.html#a5dceeb7d02e06b4394127014b01ccb2a\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5dceeb7d02e06b4394127014b01ccb2a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1e612347799a39a08fad0d0990bec8b3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a1e612347799a39a08fad0d0990bec8b3\">endGet</a> ()</td></tr>\n\
<tr class=\"memdesc:a1e612347799a39a08fad0d0990bec8b3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Finish grabbing the data.  <a href=\"class_m_iff_file.html#a1e612347799a39a08fad0d0990bec8b3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1e612347799a39a08fad0d0990bec8b3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7b877a007bf19d09f312bd7b15105b35\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a7b877a007bf19d09f312bd7b15105b35\">get</a> (void *buf, unsigned byteCount, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *stat=NULL)</td></tr>\n\
<tr class=\"memdesc:a7b877a007bf19d09f312bd7b15105b35\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Attempt to read \'byteCount\' bytes from the file into the buffer pointed to by buf.  <a href=\"class_m_iff_file.html#a7b877a007bf19d09f312bd7b15105b35\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7b877a007bf19d09f312bd7b15105b35\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a85e761fed1d03900cedcae53d7fe801c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a85e761fed1d03900cedcae53d7fe801c\">iffGetShort</a> (short int &amp;result)</td></tr>\n\
<tr class=\"memdesc:a85e761fed1d03900cedcae53d7fe801c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Grabs a short from the active file.  <a href=\"class_m_iff_file.html#a85e761fed1d03900cedcae53d7fe801c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a85e761fed1d03900cedcae53d7fe801c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a24cff1d25a28c6893619928ae231b3b1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a24cff1d25a28c6893619928ae231b3b1\">iffGetInt</a> (int &amp;result)</td></tr>\n\
<tr class=\"memdesc:a24cff1d25a28c6893619928ae231b3b1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Grabs an integer from the active file.  <a href=\"class_m_iff_file.html#a24cff1d25a28c6893619928ae231b3b1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a24cff1d25a28c6893619928ae231b3b1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afa2c3ade854cd0f4cc30c5d99a3dc286\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#afa2c3ade854cd0f4cc30c5d99a3dc286\">iffGetFloat</a> (float &amp;result)</td></tr>\n\
<tr class=\"memdesc:afa2c3ade854cd0f4cc30c5d99a3dc286\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Grabs a float from the active file.  <a href=\"class_m_iff_file.html#afa2c3ade854cd0f4cc30c5d99a3dc286\">More...</a><br></td></tr>\n\
<tr class=\"separator:afa2c3ade854cd0f4cc30c5d99a3dc286\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_iff_file.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a6bf19f1ed03c392466d98c9068e220da\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html\">MIffFile</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>fileName</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Alternate class constructor. </p>\n\
<p>Opens the specified file for reading.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">fileName</td><td>The file name (full path). </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a68bc21f777aad358648863e7127f6c1b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> open </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>fileName</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Opens the file for reading. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">fileName</td><td>The file name (full path).</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the open was successful, </li>\n\
<li>MS::kFailure otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0a34ca7b49311218db7cf12792d11f2d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> close </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Close the currently open file. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the close was successful. </li>\n\
<li>MS::kFailure Invalid object. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/geometry_cache_converter_2geometry_cache_file_8cpp-example.html#a2\">geometryCacheConverter/geometryCacheFile.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a22761609071413dcce0632885c820e87\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isActive </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Is the file currently active? </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the file is active, false otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8272c502e87617dd3c6024b63a815b87\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> beginReadGroup </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>id</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>type</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Opens a group for reading. </p>\n\
<p>A group is composed of several chunks (sub-groups). Provides the id and type of the current group. Can be followed by several calls to chunk reading functions or to nested beginReadGroup(...) calls if needed (depending on the file structure). The function endReadGroup(...) is used to closed a group skipping remaining data (including nested groups).</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">id</td><td>id of the group being read </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">type</td><td>type of the group being read</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the operation was successful, </li>\n\
<li>MS::kFailure otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8ccb6b579cea1c16be0714965e92666f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> endReadGroup </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Closes group currently being read, skipping remaining data (including nested groups). </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the close was successful </li>\n\
<li>MS::kFailure otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acb11d68afecb07d047b9c1541fd1c11f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const void * getChunk </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>chunkTag</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned *&#160;</td>\n\
          <td class=\"paramname\"><em>byteCount</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Opens a chunk for reading. </p>\n\
<p>A chunk is a block of unstructured data with an associated tag.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">chunkTag</td><td>chunk\'s associated tag </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">byteCount</td><td>number of bytes in the chunk</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>Returns a pointer to the data, the content of which should not be modified. </li>\n\
<li>NULL if the read was not successful. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5dceeb7d02e06b4394127014b01ccb2a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> beginGet </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html\">MIffTag</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>chunkTag</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned *&#160;</td>\n\
          <td class=\"paramname\"><em>byteCount</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Begin grabbing the data. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">chunkTag</td><td>tag of current chunk </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">byteCount</td><td>number of bytes in the chunk</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>MS::kSuccess if the read was successful, MS::kFailure otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1e612347799a39a08fad0d0990bec8b3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> endGet </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Finish grabbing the data. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>MS::kSuccess if successful, MS::kFailure otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7b877a007bf19d09f312bd7b15105b35\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">int get </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">void *&#160;</td>\n\
          <td class=\"paramname\"><em>buf</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned&#160;</td>\n\
          <td class=\"paramname\"><em>byteCount</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Attempt to read \'byteCount\' bytes from the file into the buffer pointed to by buf. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">buf</td><td>pointer to buffer in which to store the data read from the file. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">byteCount</td><td>maximum number of bytes that <em>buf</em> can hold </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>status code</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Number of bytes read if successful.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Operation successful </li>\n\
<li><b>MS::kFailure</b> Read failure has occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a85e761fed1d03900cedcae53d7fe801c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> iffGetShort </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">short int &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>result</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Grabs a short from the active file. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">result</td><td>the short value read from the file</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the open was successful, </li>\n\
<li>MS::kFailure otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a24cff1d25a28c6893619928ae231b3b1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> iffGetInt </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>result</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Grabs an integer from the active file. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">result</td><td>the int value read from the file</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the open was successful, </li>\n\
<li>MS::fFailure otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afa2c3ade854cd0f4cc30c5d99a3dc286\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> iffGetFloat </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">float &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>result</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Grabs a float from the active file. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">result</td><td>the float value read from the file</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the open was successful </li>\n\
<li>MS::kFailure Invalid object or read. </li>\n\
</ul>\n\
</dd></dl>\n\
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
<li>MIffFile.h</li>\n\
<li>MIffFile.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";