var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MGeometryUtilities Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_geometry_utilities.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MGeometryUtilities Class Reference</h1>\n\
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
<div class=\"title\">MGeometryUtilities Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Handling-custom-renderables-for.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Handling custom renderables for object overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Utilities for Viewport 2.0.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MHWGeometryUtilities.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a01011e27377fc06f17c6ada8979d38a3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#a01011e27377fc06f17c6ada8979d38a3\">OPENMAYA_ENUM</a> (GeometricShape, kDefaultSphere, kDefaultPlane, kDefaultCube)</td></tr>\n\
<tr class=\"memdesc:a01011e27377fc06f17c6ada8979d38a3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default geometry shapes.  <a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#a01011e27377fc06f17c6ada8979d38a3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a01011e27377fc06f17c6ada8979d38a3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6221bc7407b14246b14f79a751496276\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#a6221bc7407b14246b14f79a751496276\">wireframeColor</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;path)</td></tr>\n\
<tr class=\"memdesc:a6221bc7407b14246b14f79a751496276\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the wireframe color used in Viewport 2.0 for the given DAG path.  <a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#a6221bc7407b14246b14f79a751496276\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6221bc7407b14246b14f79a751496276\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa2838b92c9f7db4a810690a986199134\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">::MHWRender::DisplayStatus&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#aa2838b92c9f7db4a810690a986199134\">displayStatus</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;path, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *returnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:aa2838b92c9f7db4a810690a986199134\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the display status of the given DAG path.  <a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#aa2838b92c9f7db4a810690a986199134\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa2838b92c9f7db4a810690a986199134\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac0ef7cdb96768bdde887e4720419ee62\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MGeometry</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#ac0ef7cdb96768bdde887e4720419ee62\">acquireReferenceGeometry</a> (GeometricShape shape, const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html\">MGeometryRequirements</a> &amp;requirements)</td></tr>\n\
<tr class=\"memdesc:ac0ef7cdb96768bdde887e4720419ee62\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Acquire reference geometry with required buffers.  <a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#ac0ef7cdb96768bdde887e4720419ee62\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac0ef7cdb96768bdde887e4720419ee62\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab050d473690fac85ffa49ebea3aef7ff\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#ab050d473690fac85ffa49ebea3aef7ff\">releaseReferenceGeometry</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MGeometry</a> *geometry)</td></tr>\n\
<tr class=\"memdesc:ab050d473690fac85ffa49ebea3aef7ff\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Release a generated reference geometry.  <a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#ab050d473690fac85ffa49ebea3aef7ff\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab050d473690fac85ffa49ebea3aef7ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_geometry_utilities.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Utilities for Viewport 2.0. </p>\n\
<p>This class is a utility class for rendering geometry in Viewport 2.0 </p>\n\
</div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a6221bc7407b14246b14f79a751496276\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> wireframeColor </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>path</em></td><td>)</td>\n\
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
<p>Returns the wireframe color used in Viewport 2.0 for the given DAG path. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">path</td><td>The DAG path to get wireframe color</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The wireframe color </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_directional_light_shape_2api_directional_light_shape_8cpp-example.html#a49\">apiDirectionalLightShape/apiDirectionalLightShape.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a71\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_manip_2foot_print_manip_8cpp-example.html#a67\">footPrintManip/footPrintManip.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node_2foot_print_node_8cpp-example.html#a55\">footPrintNode/footPrintNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__sub_scene_override_2foot_print_node__sub_scene_override_8cpp-example.html#a56\">footPrintNode_SubSceneOverride/footPrintNode_SubSceneOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometry_override_example1_2geometry_override_example1_8cpp-example.html#a24\">geometryOverrideExample1/geometryOverrideExample1.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometry_override_example2_2geometry_override_example2_8cpp-example.html#a18\">geometryOverrideExample2/geometryOverrideExample2.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#a65\">gpuCache/gpuCacheDrawOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_shape_node_8cpp-example.html#a90\">gpuCache/gpuCacheShapeNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#a75\">rawfootPrintNode/rawfootPrintNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/squares_node_no_depth_test_2squares_node_no_depth_test_8cpp-example.html#a29\">squaresNode_noDepthTest/squaresNode_noDepthTest.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/swiss_army_manip_2swiss_army_manip_8cpp-example.html#a81\">swissArmyManip/swissArmyManip.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/tessellated_quad_2_tessellated_quad_geom_override_8cpp-example.html#a18\">tessellatedQuad/TessellatedQuadGeomOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa2838b92c9f7db4a810690a986199134\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">DisplayStatus displayStatus </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>path</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>returnStatus</em> = <code>NULL</code>&#160;</td>\n\
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
<p>Returns the display status of the given DAG path. </p>\n\
<p>Note that the last selected object will have status kLead instead of kActive and if only one object is selected the status will be kLead.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">path</td><td>the DAG path to get. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">returnStatus</td><td>Status code.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Display status for the DAG</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Success </li>\n\
<li><b>MS::kFailure</b> The DAG path is invalid </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_directional_light_shape_2api_directional_light_shape_8cpp-example.html#a46\">apiDirectionalLightShape/apiDirectionalLightShape.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a69\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#a115\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node_2foot_print_node_8cpp-example.html#a56\">footPrintNode/footPrintNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometry_override_example1_2geometry_override_example1_8cpp-example.html#a25\">geometryOverrideExample1/geometryOverrideExample1.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/geometry_override_example2_2geometry_override_example2_8cpp-example.html#a19\">geometryOverrideExample2/geometryOverrideExample2.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#a66\">gpuCache/gpuCacheDrawOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#a74\">rawfootPrintNode/rawfootPrintNode.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/squares_node_no_depth_test_2squares_node_no_depth_test_8cpp-example.html#a28\">squaresNode_noDepthTest/squaresNode_noDepthTest.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/tessellated_quad_2_tessellated_quad_geom_override_8cpp-example.html#a26\">tessellatedQuad/TessellatedQuadGeomOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a01011e27377fc06f17c6ada8979d38a3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_ENUM </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">GeometricShape&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">kDefaultSphere&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">kDefaultPlane&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">kDefaultCube&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Default geometry shapes. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">kDefaultSphere</td><td>Sphere with radius 1, centered at 0,0,0. </td></tr>\n\
    <tr><td class=\"paramname\">kDefaultPlane</td><td>Plane with width and height of 1, centered at 0,0,0. Assuming \"Y-Up\" orientation: width = x-axis, and height = y-axis. </td></tr>\n\
    <tr><td class=\"paramname\">kDefaultCube</td><td>Cube with width, height and depth of 1, centered at 0,0,0. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac0ef7cdb96768bdde887e4720419ee62\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MGeometry</a> * acquireReferenceGeometry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">GeometricShape&#160;</td>\n\
          <td class=\"paramname\"><em>shape</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html\">MGeometryRequirements</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>requirements</em>&#160;</td>\n\
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
<p>Acquire reference geometry with required buffers. </p>\n\
<p>The user is responsible for releasing the geometry when it is no longer needed, by calling <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#ab050d473690fac85ffa49ebea3aef7ff\" title=\"Release a generated reference geometry. \">MGeometryUtilities::releaseReferenceGeometry()</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">shape</td><td>The shape of the requested geometry </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">requirements</td><td>The list of required index and vertex buffers</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The generated geometry, NULL on failure. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a66\">dx11Shader/dx11Shader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab050d473690fac85ffa49ebea3aef7ff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void releaseReferenceGeometry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MGeometry</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>geometry</em></td><td>)</td>\n\
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
<p>Release a generated reference geometry. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">geometry</td><td>The geometry to delete </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a218\">dx11Shader/dx11Shader.cpp</a>.</dd></div>\n\
</dl>\n\
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
          <td class=\"memname\">const char * className </td>\n\
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
<li>MHWGeometryUtilities.h</li>\n\
<li>MHWGeometryUtilities.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";