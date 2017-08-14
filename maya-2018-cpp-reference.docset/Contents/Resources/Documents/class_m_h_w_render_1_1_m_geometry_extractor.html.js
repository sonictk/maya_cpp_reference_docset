var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MGeometryExtractor Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_geometry_extractor.html\', tocPrefix);\n\
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
            <h1>MGeometryExtractor Class Reference</h1>\n\
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
<div class=\"title\">MGeometryExtractor Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-1DBFC5FE-0A84-43C8-8F45-4875CEFC1F11.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2017</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-653104AC-D0E8-490F-AF00-71DEB76139A4.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 Extension 2</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-DBDCB848-B0A5-4256-912C-6FCE25D12984.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2015</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9DBD7E49-7A17-4CEB-89AF-A3B509AD91E2.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2014</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6AEBAFF0-CF7B-443E-96CD-B9EBA1B927DF.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2013</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-148A1EF1-B350-416F-A800-C47DA90D1369.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Geometric Data (MGeometry)</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-052EC6C3-BFF1-42E3-B4A5-1725700E3428.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Geometry remapping for hardware rendering</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_geometry_extractor.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_geometry_extractor.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MGeometryExtractor.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>class for extracting renderable geometry </p>\n\
<p>Construct an instance of this class to populate buffers with vertex and indexing data. Buffers are filled based on the supplied requirements. Use the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\" title=\"MIndexBufferDescriptor describes an indexing scheme. \">MIndexBufferDescriptor</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\" title=\"Describes properties of a vertex buffer. \">MVertexBufferDescriptor</a> classes to request a broad range of data types, formats, and content.</p>\n\
<p>Buffers are filled in-place so you should request the primitive count and vertex count before filling the buffers. Use the count multiplied by the element stride to construct data buffers large enough to fill properly prior to calling one of the populate methods. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/geometry_replicator_2geometry_replicator_8cpp-example.html#_a50\">geometryReplicator/geometryReplicator.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2_cache_writer_8cpp-example.html#_a27\">gpuCache/CacheWriter.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a62bb2fdc503c9575f7af6ca900781bda\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a62bb2fdc503c9575f7af6ca900781bda\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a62bb2fdc503c9575f7af6ca900781bda\">~MGeometryExtractor</a> ()</td></tr>\n\
<tr class=\"memdesc:a62bb2fdc503c9575f7af6ca900781bda\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a62bb2fdc503c9575f7af6ca900781bda\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9cf61e8a0e34b3180bdc2accbc3c840b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a9cf61e8a0e34b3180bdc2accbc3c840b\">primitiveCount</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\">MHWRender::MIndexBufferDescriptor</a> &amp;indexDesc) const </td></tr>\n\
<tr class=\"memdesc:a9cf61e8a0e34b3180bdc2accbc3c840b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the number of primitives (triangles, lines, points, etc.) that will be produced for the given indexing requirements.  <a href=\"class_m_h_w_render_1_1_m_geometry_extractor.html#a9cf61e8a0e34b3180bdc2accbc3c840b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9cf61e8a0e34b3180bdc2accbc3c840b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a88fba95005fe57b73f1833a1a3e3feec\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a88fba95005fe57b73f1833a1a3e3feec\">populateIndexBuffer</a> (void *data, const unsigned int <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a9cf61e8a0e34b3180bdc2accbc3c840b\">primitiveCount</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\">MHWRender::MIndexBufferDescriptor</a> &amp;indexDesc) const </td></tr>\n\
<tr class=\"memdesc:a88fba95005fe57b73f1833a1a3e3feec\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Fill a buffer with geometry indexing data.  <a href=\"class_m_h_w_render_1_1_m_geometry_extractor.html#a88fba95005fe57b73f1833a1a3e3feec\">More...</a><br></td></tr>\n\
<tr class=\"separator:a88fba95005fe57b73f1833a1a3e3feec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a42db940e8d3c623487a4e2c34024751c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a42db940e8d3c623487a4e2c34024751c\">vertexCount</a> () const </td></tr>\n\
<tr class=\"memdesc:a42db940e8d3c623487a4e2c34024751c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the number of vertices that will be produced for the vertex requirement.  <a href=\"class_m_h_w_render_1_1_m_geometry_extractor.html#a42db940e8d3c623487a4e2c34024751c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a42db940e8d3c623487a4e2c34024751c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaf11f124ce09b66061357899cc93a00d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#aaf11f124ce09b66061357899cc93a00d\">populateVertexBuffer</a> (void *data, const unsigned int <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a42db940e8d3c623487a4e2c34024751c\">vertexCount</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MHWRender::MVertexBufferDescriptor</a> &amp;bufferDesc) const </td></tr>\n\
<tr class=\"memdesc:aaf11f124ce09b66061357899cc93a00d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Fill a buffer with vertex data.  <a href=\"class_m_h_w_render_1_1_m_geometry_extractor.html#aaf11f124ce09b66061357899cc93a00d\">More...</a><br></td></tr>\n\
<tr class=\"separator:aaf11f124ce09b66061357899cc93a00d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a170f8cd3fb0b421bd6f63df786531ad3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a170f8cd3fb0b421bd6f63df786531ad3\">MGeometryExtractor</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html\">MHWRender::MGeometryRequirements</a> &amp;requirements, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;path, const bool sharing=true, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *status=NULL)</td></tr>\n\
<tr class=\"separator:a170f8cd3fb0b421bd6f63df786531ad3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6b5fec90381b9492edd0a0b6cc6b088b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a6b5fec90381b9492edd0a0b6cc6b088b\">minimumBufferSize</a> (unsigned int <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a9cf61e8a0e34b3180bdc2accbc3c840b\">primitiveCount</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1e\">MGeometry::Primitive</a> primitive, unsigned int primitiveStride=0)</td></tr>\n\
<tr class=\"memdesc:a6b5fec90381b9492edd0a0b6cc6b088b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the minimum buffer size required by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a88fba95005fe57b73f1833a1a3e3feec\" title=\"Fill a buffer with geometry indexing data. \">populateIndexBuffer()</a>.  <a href=\"class_m_h_w_render_1_1_m_geometry_extractor.html#a6b5fec90381b9492edd0a0b6cc6b088b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6b5fec90381b9492edd0a0b6cc6b088b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a170f8cd3fb0b421bd6f63df786531ad3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html\">MGeometryExtractor</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html\">MHWRender::MGeometryRequirements</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>requirements</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>path</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const bool&#160;</td>\n\
          <td class=\"paramname\"><em>sharing</em> = <code>true</code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>status</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<dl class=\"deprecated\"><dt><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/deprecated.html#_deprecated000109\">Deprecated:</a></b></dt><dd>Use MGeometryExtractor(const MGeometryRequirements&amp;, const MDagPath&amp;, const bool, const bool, MStatus*)</dd></dl>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">requirements</td><td></td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">path</td><td></td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">sharing</td><td></td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">status</td><td>Status code. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9cf61e8a0e34b3180bdc2accbc3c840b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int primitiveCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\">MHWRender::MIndexBufferDescriptor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>indexDesc</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the number of primitives (triangles, lines, points, etc.) that will be produced for the given indexing requirements. </p>\n\
<p>Call this method before calling populateIndexBuffer to determine the minimum size the buffer passed into populateIndexBuffer needs to be.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">indexDesc</td><td>The description of the index buffer you request the count for.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The number of primitives (triangles, lines, points, etc.) that the extractor will produce for the requirement specified by this index descriptor. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a88fba95005fe57b73f1833a1a3e3feec\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> populateIndexBuffer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">void *&#160;</td>\n\
          <td class=\"paramname\"><em>data</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>primitiveCount</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\">MHWRender::MIndexBufferDescriptor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>indexDesc</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Fill a buffer with geometry indexing data. </p>\n\
<p>This method will use the information provided in the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\" title=\"MIndexBufferDescriptor describes an indexing scheme. \">MIndexBufferDescriptor</a> argument to populate the buffer with the desired indexing data. The descriptor will describe the surface index type, the primitive type, and the data type. The populateIndexBuffer method will generate a buffer that matches the request. The length of the buffer should be at least the as big as the value returned by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a6b5fec90381b9492edd0a0b6cc6b088b\" title=\"Get the minimum buffer size required by populateIndexBuffer(). \">minimumBufferSize()</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">data</td><td>The buffer you want filled. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">primitiveCount</td><td>The number of primitives you expect to be filled in the buffer. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">indexDesc</td><td>The description of the buffer you are requesting.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The buffer was filled properly. </li>\n\
<li><b>MS::kFailure</b> An error occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a42db940e8d3c623487a4e2c34024751c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int vertexCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the number of vertices that will be produced for the vertex requirement. </p>\n\
<p>Call this method before calling populateVertexBuffer to determine the minimum size the buffer passed into populateVertexBuffer needs to be.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The number of vertices that the extractor will produce for this geometry. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaf11f124ce09b66061357899cc93a00d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> populateVertexBuffer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">void *&#160;</td>\n\
          <td class=\"paramname\"><em>data</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>vertexCount</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MHWRender::MVertexBufferDescriptor</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>bufferDesc</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Fill a buffer with vertex data. </p>\n\
<p>This method will use the information provided in the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\" title=\"Describes properties of a vertex buffer. \">MVertexBufferDescriptor</a> argument to populate the buffer with the desired vertex data. The descriptor will describe the buffer\'s name, semantic, and data type. The populateVertexBuffer method will supply a buffer that matches the request. The length of the buffer should be at least (vertexCount * bufferDesc.stride()).</p>\n\
<p>values for normals, tangents and bitangents are all normalized.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">data</td><td>The buffer you want filled. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">vertexCount</td><td>The vertex count you expect to be filled in the buffer. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">bufferDesc</td><td>The description of the buffer you are requesting.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The buffer was filled properly. </li>\n\
<li><b>MS::kFailure</b> An error occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6b5fec90381b9492edd0a0b6cc6b088b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int minimumBufferSize </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>primitiveCount</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1e\">MGeometry::Primitive</a>&#160;</td>\n\
          <td class=\"paramname\"><em>primitive</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>primitiveStride</em> = <code>0</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the minimum buffer size required by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a88fba95005fe57b73f1833a1a3e3feec\" title=\"Fill a buffer with geometry indexing data. \">populateIndexBuffer()</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">primitiveCount</td><td>The number of primitives. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">primitive</td><td>The primitive type </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">primitiveStride</td><td>The number of control points in a patch when the type is kPatch.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The minimum buffer size required by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a88fba95005fe57b73f1833a1a3e3feec\" title=\"Fill a buffer with geometry indexing data. \">populateIndexBuffer()</a>. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MGeometryExtractor.h</li>\n\
<li>MGeometryExtractor.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";