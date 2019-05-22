var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MAttributeSpec Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_attribute_spec.html\', tocPrefix);\n\
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
            <h1>MAttributeSpec Class Reference</h1>\n\
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
<div class=\"title\">MAttributeSpec Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Shapes/Components.html\">Shapes &gt; Components</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_attribute_spec.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_attribute_spec.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MAttributeSpec.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>An attribute specification. </p>\n\
<p>Class that encapsulates component/attribute information for generating selection items.</p>\n\
<p>This class is used by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a19499831f6a63ee7b57c942a23764abe\" title=\"This method is used to convert the string representation of a component into a component object and t...\">MPxSurfaceShape::matchComponent</a> for validating attributes specified as strings and converting that specification to a component object.</p>\n\
<p>The attribute specification \".foo.bar[3].x\" would be expressed like this (using a pseudo-structure description):</p>\n\
<div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_spec_array.html\">MAttributeSpecArray</a>[0..3] {</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a>[0] {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a>      = <span class=\"stringliteral\">&quot;foo&quot;</span></div>\n\
<div class=\"line\">        dimension = 0</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a>[1] {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a>      = <span class=\"stringliteral\">&quot;bar&quot;</span></div>\n\
<div class=\"line\">        dimension = 1</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html\">MAttributeIndex</a>[0] = {</div>\n\
<div class=\"line\">            type      = kInteger</div>\n\
<div class=\"line\">            isRange   = <span class=\"keyword\">false</span></div>\n\
<div class=\"line\">            isBounded = <span class=\"keyword\">true</span></div>\n\
<div class=\"line\">            value     = 3</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a>[2] {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a>      = <span class=\"stringliteral\">&quot;x&quot;</span></div>\n\
<div class=\"line\">        dimension = 0</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> <dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_8cpp-example.html#_a49\">apiMeshShape/apiMeshShape.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a9e3ca0d061697cb8aacc2442bfcdb7ed\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a9e3ca0d061697cb8aacc2442bfcdb7ed\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a9e3ca0d061697cb8aacc2442bfcdb7ed\">MAttributeSpec</a> ()</td></tr>\n\
<tr class=\"memdesc:a9e3ca0d061697cb8aacc2442bfcdb7ed\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:a9e3ca0d061697cb8aacc2442bfcdb7ed\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae09300f75d031ab7a815257f83c2cda8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#ae09300f75d031ab7a815257f83c2cda8\">MAttributeSpec</a> (const char *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a>)</td></tr>\n\
<tr class=\"memdesc:ae09300f75d031ab7a815257f83c2cda8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_attribute_spec.html#ae09300f75d031ab7a815257f83c2cda8\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae09300f75d031ab7a815257f83c2cda8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1c8c65379635b43085502fd4ceff9080\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a1c8c65379635b43085502fd4ceff9080\">MAttributeSpec</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a>)</td></tr>\n\
<tr class=\"memdesc:a1c8c65379635b43085502fd4ceff9080\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_attribute_spec.html#a1c8c65379635b43085502fd4ceff9080\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1c8c65379635b43085502fd4ceff9080\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af30459d3e7b6500e99da32514d5ed5be\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#af30459d3e7b6500e99da32514d5ed5be\">MAttributeSpec</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:af30459d3e7b6500e99da32514d5ed5be\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_attribute_spec.html#af30459d3e7b6500e99da32514d5ed5be\">More...</a><br></td></tr>\n\
<tr class=\"separator:af30459d3e7b6500e99da32514d5ed5be\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa541eece0080511b7ad299ec972c7a2a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa541eece0080511b7ad299ec972c7a2a\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#aa541eece0080511b7ad299ec972c7a2a\">~MAttributeSpec</a> ()</td></tr>\n\
<tr class=\"memdesc:aa541eece0080511b7ad299ec972c7a2a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:aa541eece0080511b7ad299ec972c7a2a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2e8d4c38a60806df8c2ffd6d09e70b96\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a> () const </td></tr>\n\
<tr class=\"memdesc:a2e8d4c38a60806df8c2ffd6d09e70b96\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the attribute name part of the specification.  <a href=\"class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2e8d4c38a60806df8c2ffd6d09e70b96\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abdbc6a0efd0a3c187df67a0895c2e115\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#abdbc6a0efd0a3c187df67a0895c2e115\">dimensions</a> () const </td></tr>\n\
<tr class=\"memdesc:abdbc6a0efd0a3c187df67a0895c2e115\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the dimension of the attribute specification.  <a href=\"class_m_attribute_spec.html#abdbc6a0efd0a3c187df67a0895c2e115\">More...</a><br></td></tr>\n\
<tr class=\"separator:abdbc6a0efd0a3c187df67a0895c2e115\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaaf4534a5d68e40622237471746e2d00\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#aaaf4534a5d68e40622237471746e2d00\">setName</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a>)</td></tr>\n\
<tr class=\"memdesc:aaaf4534a5d68e40622237471746e2d00\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the attribute name part of the specification.  <a href=\"class_m_attribute_spec.html#aaaf4534a5d68e40622237471746e2d00\">More...</a><br></td></tr>\n\
<tr class=\"separator:aaaf4534a5d68e40622237471746e2d00\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9d9fdbfdd7e7c0bd45ba6708782dddd3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a9d9fdbfdd7e7c0bd45ba6708782dddd3\">setDimensions</a> (int value)</td></tr>\n\
<tr class=\"memdesc:a9d9fdbfdd7e7c0bd45ba6708782dddd3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the dimension of the attribute specification.  <a href=\"class_m_attribute_spec.html#a9d9fdbfdd7e7c0bd45ba6708782dddd3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9d9fdbfdd7e7c0bd45ba6708782dddd3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a78c26726c11f44d3935323d79977b511\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a78c26726c11f44d3935323d79977b511\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:a78c26726c11f44d3935323d79977b511\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator.  <a href=\"class_m_attribute_spec.html#a78c26726c11f44d3935323d79977b511\">More...</a><br></td></tr>\n\
<tr class=\"separator:a78c26726c11f44d3935323d79977b511\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9af25a2c24f7711df47528b7199033d0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html\">MAttributeIndex</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a9af25a2c24f7711df47528b7199033d0\">operator[]</a> (int index) const </td></tr>\n\
<tr class=\"memdesc:a9af25a2c24f7711df47528b7199033d0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns an attribute index object for the specified element.  <a href=\"class_m_attribute_spec.html#a9af25a2c24f7711df47528b7199033d0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9af25a2c24f7711df47528b7199033d0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af4fbc17f62ab1590d91beffac222ef97\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#af4fbc17f62ab1590d91beffac222ef97\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp;other) const </td></tr>\n\
<tr class=\"memdesc:af4fbc17f62ab1590d91beffac222ef97\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Comparison operator.  <a href=\"class_m_attribute_spec.html#af4fbc17f62ab1590d91beffac222ef97\">More...</a><br></td></tr>\n\
<tr class=\"separator:af4fbc17f62ab1590d91beffac222ef97\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a02eedf520f54f46c7131fc1bdf9d7a05\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html\">MAttributeIndex</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a02eedf520f54f46c7131fc1bdf9d7a05\">operator[]</a> (int index)</td></tr>\n\
<tr class=\"memdesc:a02eedf520f54f46c7131fc1bdf9d7a05\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><b>This method is not available in Python.</b>  <a href=\"class_m_attribute_spec.html#a02eedf520f54f46c7131fc1bdf9d7a05\">More...</a><br></td></tr>\n\
<tr class=\"separator:a02eedf520f54f46c7131fc1bdf9d7a05\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_attribute_spec.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ae09300f75d031ab7a815257f83c2cda8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Creates an attribute specification with the given attribute name.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the attribute name to set </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1c8c65379635b43085502fd4ceff9080\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Creates an attribute specification with the given attribute name.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the attribute name to set </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af30459d3e7b6500e99da32514d5ed5be\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>the attribute specification to copy </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a2e8d4c38a60806df8c2ffd6d09e70b96\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the attribute name part of the specification. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The attribute name </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_8cpp-example.html#a52\">apiMeshShape/apiMeshShape.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abdbc6a0efd0a3c187df67a0895c2e115\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">int dimensions </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the dimension of the attribute specification. </p>\n\
<p>For array attributes the dimension is &gt; 0.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The attributes dimension </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_8cpp-example.html#a50\">apiMeshShape/apiMeshShape.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaaf4534a5d68e40622237471746e2d00\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void setName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the attribute name part of the specification. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the name to be set </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9d9fdbfdd7e7c0bd45ba6708782dddd3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void setDimensions </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>value</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the dimension of the attribute specification. </p>\n\
<p>Array attribute dimensions are &gt; 0.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>the dimension value to be set </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a78c26726c11f44d3935323d79977b511\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Assignment operator. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>attribute specification to copy</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A reference to the copied <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\" title=\"An attribute specification. \">MAttributeSpec</a> object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9af25a2c24f7711df47528b7199033d0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html\">MAttributeIndex</a> operator[] </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns an attribute index object for the specified element. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>attribute index to return</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html\" title=\"The index information for an attribute specification. \">MAttributeIndex</a> associated with the given index. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af4fbc17f62ab1590d91beffac222ef97\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec.html\">MAttributeSpec</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Comparison operator. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>attribute specifier to be compared</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The boolean indicating whether the object are same or not. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a02eedf520f54f46c7131fc1bdf9d7a05\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html\">MAttributeIndex</a> operator[] </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p><b>This method is not available in Python.</b> </p>\n\
<p>Returns an attribute index object for the specified element.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>attribute index to return</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html\" title=\"The index information for an attribute specification. \">MAttributeIndex</a> associated with the given index. </dd></dl>\n\
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
<li>MAttributeSpec.h</li>\n\
<li>MAttributeSpec.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";