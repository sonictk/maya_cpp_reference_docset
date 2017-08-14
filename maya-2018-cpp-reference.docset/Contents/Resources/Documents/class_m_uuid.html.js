var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MUuid Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_uuid.html\', tocPrefix);\n\
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
            <h1>MUuid Class Reference</h1>\n\
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
<div class=\"title\">MUuid Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6644CF46-6648-45B8-A3D8-76EDD7712571.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-1BB599DB-D637-4D95-AD35-9F85AA5A35ED.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 &gt; C++ API Changes in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6EE8F184-A92B-485A-91F5-07B00313D87E.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 &gt; New Python API 2.0 classes in Maya 2016</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_uuid.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_uuid.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MUuid.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class to manipulate UUIDs. </p>\n\
<p>Provides a class to manipulate UUIDs (Universally Unique Identifiers).</p>\n\
<p>UUIDs (as implemented here) are 128-bit values, used to identify objects \'practically\' uniquely. Their main use in Maya is to identify DG nodes. Nodes have a UUID which persists even if the node\'s name is changed, or its DAG relationship alters, and which is stored in the Maya scene file.</p>\n\
<p>See <a href=\"http://en.wikipedia.org/wiki/Universally_unique_identifier\">http://en.wikipedia.org/wiki/Universally_unique_identifier</a> </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a4db584898bb60e16749814cccc06b6c0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a4db584898bb60e16749814cccc06b6c0\">MUuid</a> ()</td></tr>\n\
<tr class=\"memdesc:a4db584898bb60e16749814cccc06b6c0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class constructor.  <a href=\"class_m_uuid.html#a4db584898bb60e16749814cccc06b6c0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4db584898bb60e16749814cccc06b6c0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1d41e9d264a12f100dc12fbf58b07653\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a1d41e9d264a12f100dc12fbf58b07653\">MUuid</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:a1d41e9d264a12f100dc12fbf58b07653\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_uuid.html#a1d41e9d264a12f100dc12fbf58b07653\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1d41e9d264a12f100dc12fbf58b07653\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad833afd2372318bf2c8ae4173327732c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#ad833afd2372318bf2c8ae4173327732c\">MUuid</a> (const unsigned int *uuid)</td></tr>\n\
<tr class=\"memdesc:ad833afd2372318bf2c8ae4173327732c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_uuid.html#ad833afd2372318bf2c8ae4173327732c\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad833afd2372318bf2c8ae4173327732c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a30bd9e8800df3691791df986f5aad054\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a30bd9e8800df3691791df986f5aad054\">MUuid</a> (const unsigned char *uuid)</td></tr>\n\
<tr class=\"memdesc:a30bd9e8800df3691791df986f5aad054\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_uuid.html#a30bd9e8800df3691791df986f5aad054\">More...</a><br></td></tr>\n\
<tr class=\"separator:a30bd9e8800df3691791df986f5aad054\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a22153c7c53a638a7b917f61724559472\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a22153c7c53a638a7b917f61724559472\">MUuid</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;value, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:a22153c7c53a638a7b917f61724559472\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor from string.  <a href=\"class_m_uuid.html#a22153c7c53a638a7b917f61724559472\">More...</a><br></td></tr>\n\
<tr class=\"separator:a22153c7c53a638a7b917f61724559472\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1073dda657dbef7cee8258dbf6e5c8be\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a1073dda657dbef7cee8258dbf6e5c8be\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a1073dda657dbef7cee8258dbf6e5c8be\">~MUuid</a> ()</td></tr>\n\
<tr class=\"memdesc:a1073dda657dbef7cee8258dbf6e5c8be\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:a1073dda657dbef7cee8258dbf6e5c8be\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab6d3a3c6105fadd1902801e1848a05f7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#ab6d3a3c6105fadd1902801e1848a05f7\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:ab6d3a3c6105fadd1902801e1848a05f7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator.  <a href=\"class_m_uuid.html#ab6d3a3c6105fadd1902801e1848a05f7\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab6d3a3c6105fadd1902801e1848a05f7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a21840283fb9d502bf6a8789db0281658\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a21840283fb9d502bf6a8789db0281658\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;rhs) const </td></tr>\n\
<tr class=\"memdesc:a21840283fb9d502bf6a8789db0281658\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Equality operator.  <a href=\"class_m_uuid.html#a21840283fb9d502bf6a8789db0281658\">More...</a><br></td></tr>\n\
<tr class=\"separator:a21840283fb9d502bf6a8789db0281658\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6b63f5def0b595aa8b7088e747fb32e6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a6b63f5def0b595aa8b7088e747fb32e6\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;rhs) const </td></tr>\n\
<tr class=\"memdesc:a6b63f5def0b595aa8b7088e747fb32e6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Inequality operator.  <a href=\"class_m_uuid.html#a6b63f5def0b595aa8b7088e747fb32e6\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6b63f5def0b595aa8b7088e747fb32e6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3c795023cc7f1e26f162508eed4ef31c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a3c795023cc7f1e26f162508eed4ef31c\">get</a> (unsigned char *uuid) const </td></tr>\n\
<tr class=\"memdesc:a3c795023cc7f1e26f162508eed4ef31c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Gets the UUID as an array of sixteen bytes.  <a href=\"class_m_uuid.html#a3c795023cc7f1e26f162508eed4ef31c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3c795023cc7f1e26f162508eed4ef31c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a29106567f29ab75db5f8251b66fc4740\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a29106567f29ab75db5f8251b66fc4740\">asString</a> () const </td></tr>\n\
<tr class=\"memdesc:a29106567f29ab75db5f8251b66fc4740\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Gets the UUID as a string.  <a href=\"class_m_uuid.html#a29106567f29ab75db5f8251b66fc4740\">More...</a><br></td></tr>\n\
<tr class=\"separator:a29106567f29ab75db5f8251b66fc4740\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7572b8cc72afebea0a960ee3bd8c6fb8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a7572b8cc72afebea0a960ee3bd8c6fb8\">operator MString</a> () const </td></tr>\n\
<tr class=\"memdesc:a7572b8cc72afebea0a960ee3bd8c6fb8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Cast to string.  <a href=\"class_m_uuid.html#a7572b8cc72afebea0a960ee3bd8c6fb8\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7572b8cc72afebea0a960ee3bd8c6fb8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9a334391d578600e5ad770b8bdd6814c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a9a334391d578600e5ad770b8bdd6814c\">copy</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:a9a334391d578600e5ad770b8bdd6814c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy method.  <a href=\"class_m_uuid.html#a9a334391d578600e5ad770b8bdd6814c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9a334391d578600e5ad770b8bdd6814c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8d985300b138b6c5556ab17ed4df3b38\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a8d985300b138b6c5556ab17ed4df3b38\">valid</a> () const </td></tr>\n\
<tr class=\"memdesc:a8d985300b138b6c5556ab17ed4df3b38\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Queries whether the UUID is valid.  <a href=\"class_m_uuid.html#a8d985300b138b6c5556ab17ed4df3b38\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8d985300b138b6c5556ab17ed4df3b38\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab1ba558c686cae689f0a32d2712be4f6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#ab1ba558c686cae689f0a32d2712be4f6\">generate</a> ()</td></tr>\n\
<tr class=\"memdesc:ab1ba558c686cae689f0a32d2712be4f6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Generates a new random UUID and stores it in this class instance.  <a href=\"class_m_uuid.html#ab1ba558c686cae689f0a32d2712be4f6\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab1ba558c686cae689f0a32d2712be4f6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_uuid.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a4db584898bb60e16749814cccc06b6c0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Class constructor. </p>\n\
<p>Creates an empty <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1d41e9d264a12f100dc12fbf58b07653\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<p>Creates a new <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object and initializes it with the value of another <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> to copy. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad833afd2372318bf2c8ae4173327732c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const unsigned int *&#160;</td>\n\
          <td class=\"paramname\"><em>uuid</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Creates a new <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object and initializes it with the given UUID.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">uuid</td><td>The UUID as an array of four 32 bit integers. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a30bd9e8800df3691791df986f5aad054\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const unsigned char *&#160;</td>\n\
          <td class=\"paramname\"><em>uuid</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Creates a new <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object and initializes it with the given UUID.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">uuid</td><td>The UUID as an array of sixteen bytes. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a22153c7c53a638a7b917f61724559472\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
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
<p>Constructor from string. </p>\n\
<p>Creates a new <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object and initializes it with the value translated from the string representation of the UUID value.</p>\n\
<p>This string should be of the form XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX where \'X\' is a hex digit. For example 3F2504E0-4F89-11D3-9A0C-0305E82C3301 So, the string is always exactly 36 characters long. See <a href=\"http://en.wikipedia.org/wiki/Universally_unique_identifier\">http://en.wikipedia.org/wiki/Universally_unique_identifier</a></p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>The value of the new object. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>The status code.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> invalid string </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ab6d3a3c6105fadd1902801e1848a05f7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Assignment operator. </p>\n\
<p>Assigns the value of one <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> to another.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>Existing <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object to copy.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Reference to this <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> instance. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a21840283fb9d502bf6a8789db0281658\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Equality operator. </p>\n\
<p>Compares two <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> objects to see if they contain the same value.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>Right operand. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><b>true</b> if the two objects are equivalent, <b>false</b> otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6b63f5def0b595aa8b7088e747fb32e6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Inequality operator. </p>\n\
<p>Compares two <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> objects to see if they differ.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>Right operand. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><b>true</b> if the two objects are different, <b>false</b> otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3c795023cc7f1e26f162508eed4ef31c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> get </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned char *&#160;</td>\n\
          <td class=\"paramname\"><em>dest</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Gets the UUID as an array of sixteen bytes. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">dest</td><td>The array to populate with the UUID value.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> operation failed </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a29106567f29ab75db5f8251b66fc4740\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> asString </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Gets the UUID as a string. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The string representation of the UUID. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7572b8cc72afebea0a960ee3bd8c6fb8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">operator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Cast to string. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The string representation of the UUID. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9a334391d578600e5ad770b8bdd6814c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void copy </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\">MUuid</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy method. </p>\n\
<p>Assigns the value of one <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> to another.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>Existing <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uuid.html\" title=\"Class to manipulate UUIDs. \">MUuid</a> object to copy. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8d985300b138b6c5556ab17ed4df3b38\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool valid </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Queries whether the UUID is valid. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><b>true</b> if the UUID is valid, <b>false</b> otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab1ba558c686cae689f0a32d2712be4f6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> generate </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Generates a new random UUID and stores it in this class instance. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> operation failed </li>\n\
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
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MUuid.h</li>\n\
<li>MUuid.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";