var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MGLFunctionTable Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_g_l_function_table.html\', tocPrefix);\n\
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
            <h1>MGLFunctionTable Class Reference</h1>\n\
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
<div class=\"title\">MGLFunctionTable Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Lighting-Interfaces.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Lighting Interfaces</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Maya-Python-API/Maya-Python-API-1-0/Using-the-Maya-Python-API.html\">Maya Python API &gt; Maya Python API 1.0 &gt; Using the Maya Python API</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_g_l_function_table.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_g_l_function_table.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_g_l_function_table.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MGLFunctionTable.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p><b>This method is obsolete. </b></p>\n\
<dl class=\"deprecated\"><dt><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/deprecated.html#_deprecated000199\">Deprecated:</a></b></dt><dd>Please use the Viewport 2.0 device independent <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html\" title=\"Contains classes, functions and enums related to rendering. \">MHWRender</a> interfaces instead.</dd></dl>\n\
<p>The best cross platform alternative for drawing in Viewport 2.0 is via <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\" title=\"Vertex buffer for use with MGeometry. \">MHWRender::MVertexBuffer</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html\" title=\"Base for user-defined classes to prepare geometry for drawing. \">MHWRender::MPxGeometryOverride</a>, and other classes providing an abstraction from the underlying hardware API. The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html\" title=\"Main interface for drawing basic UI drawables in Viewport 2.0 and Hardware Renderer 2...\">MHWRender::MUIDrawManager</a> offers handy options for very simple drawing commands.</p>\n\
<p>Drawing in raw OpenGL mode will still be allowed, but we recommend you use the core profile subset of the OpenGL API to ensure compatibility with future versions of Maya.</p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html\" title=\"This method is obsolete. \">MGLFunctionTable</a> is a utility class which provides wrappers for the basic functions in the OpenGL API.</p>\n\
<p>Core functions up to OpenGL 2.0 are provided here, as well as a number of ARB/EXT and vendor specific extensions. Refer to the MGLExtension enumeration for extensions which are checked.</p>\n\
<p>Please refer to an OpenGL reference for usage of the OpenGL functions provided in this wrapper class.</p>\n\
<p>When using the functions provided, the standard GL* type and constant definitions to be used can be found in MGLDefinitions.h.</p>\n\
<p>MGLDefinitions.h basically provides a wrapper for what would normally be found in gl.h and glext.h files.</p>\n\
<p>The naming convention used in this file is to take the regular GL* definitions and add a \"M\" prefix. This is to avoid conflicts with existing type and constant declarations which may be found in files such as gl.h and glext.h. It is recommended that externally provided files which have GL definitions not be included in the same C++ file to avoid conflicts. <b>Mixing GL code wusing <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html\" title=\"This method is obsolete. \">MGLFunctionTable</a> and external code is possible, just not recommended.</b></p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html\" title=\"This method is obsolete. \">MGLFunctionTable</a> cannot be created on its own, and must be retrieved via a method on the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html\" title=\"Static hardware renderer interface class. \">MHardwareRenderer</a> class. It is possible that this class will not be available, if the hardware renderer class cannot be instantiated. This would be due to insufficient graphics hardware support.</p>\n\
<p>Below is an example of initializing and using the function table to draw a simple 3-line axis. Note the usage of the definitions from MGLDefinitions such as MGL_LIGHTING versus GL_LIGHTING, and MGL_LINES and MGL_DEPTH_TEST.</p>\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHardwareRenderer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGLFunctionTable.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>myClass</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializeGL();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    drawAxis();</div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html\">MGLFunctionTable</a> *gGLFT; <span class=\"comment\">// Function table to use</span></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><span class=\"comment\">// No private members</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a></div>\n\
<div class=\"line\">myClass::initializeGL()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get a pointer to a GL function table</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html\">MHardwareRenderer</a> *rend = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a93fef222f7278c123e8df750f7f0ea5b\">MHardwareRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (rend)</div>\n\
<div class=\"line\">        gGLFT = rend-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#ae661000714d15915ccc58949842f4c57\">glFunctionTable</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!gGLFT)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span></div>\n\
<div class=\"line\">myClass::drawAxis()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw a world space axis</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    gGLFT-&gt;glDisable(MGL_LIGHTING);</div>\n\
<div class=\"line\">    gGLFT-&gt;glBegin(MGL_LINES);</div>\n\
<div class=\"line\">    gGLFT-&gt;glColor3f( 1.0f, 0.0f, 0.0f );</div>\n\
<div class=\"line\">    gGLFT-&gt;glVertex3f( 0.0f, 0.0f, 0.0f );</div>\n\
<div class=\"line\">    gGLFT-&gt;glVertex3f( 3.0f, 0.0f, 0.0f );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    gGLFT-&gt;glColor3f( 0.0f, 1.0f, 0.0f );</div>\n\
<div class=\"line\">    gGLFT-&gt;glVertex3f( 0.0f, 0.0f, 0.0f );</div>\n\
<div class=\"line\">    gGLFT-&gt;glVertex3f( 0.0f, 3.0f, 0.0f );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    gGLFT-&gt;glColor3f( 0.0f, 0.0f, 1.0f );</div>\n\
<div class=\"line\">    gGLFT-&gt;glVertex3f( 0.0f, 0.0f, 0.0f );</div>\n\
<div class=\"line\">    gGLFT-&gt;glVertex3f( 0.0f, 0.0f, 3.0f );</div>\n\
<div class=\"line\">    gGLFT-&gt;glEnd();</div>\n\
<div class=\"line\">    gGLFT-&gt;glEnable(MGL_LIGHTING);</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --><p>Here is a similar example of using the function table in Python.</p>\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\"># Import the module</span></div>\n\
<div class=\"line\"><span class=\"keyword\">import</span> maya.OpenMayaRender as OpenMayaRender</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># Get a renderer, then a function table</span></div>\n\
<div class=\"line\">def initializeGL():</div>\n\
<div class=\"line\">  glRenderer = OpenMayaRender.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html\">MHardwareRenderer</a>.theRenderer()</div>\n\
<div class=\"line\">  glFT = glRenderer.glFunctionTable()</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"># Query the maximum texture size</div>\n\
<div class=\"line\">def printMaxTextureSize():</div>\n\
<div class=\"line\">  maxTxtSize = glFT.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#aa65765c9b1608433446e398800ac6e37\">maxTextureSize</a>()</div>\n\
<div class=\"line\">  print maxTxtSize</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"># Draw an axis</div>\n\
<div class=\"line\">def drawAxis():</div>\n\
<div class=\"line\">  glFT.glDisable(OpenMayaRender.MGL_LIGHTING)</div>\n\
<div class=\"line\">  glFT.glBegin(OpenMayaRender.MGL_LINES)</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">  glFT.glColor3f( 1.0, 0.0, 0.0 )</div>\n\
<div class=\"line\">  glFT.glVertex3f( 0.0, 0.0, 0.0 )</div>\n\
<div class=\"line\">  glFT.glVertex3f( 3.0, 0.0, 0.0 )</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">  glFT.glColor3f( 0.0, 1.0, 0.0 )</div>\n\
<div class=\"line\">  glFT.glVertex3f( 0.0, 0.0, 0.0 )</div>\n\
<div class=\"line\">  glFT.glVertex3f( 0.0, 3.0, 0.0 )</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">  glFT.glColor3f( 0.0, 0.0, 1.0 )</div>\n\
<div class=\"line\">  glFT.glVertex3f( 0.0, 0.0, 0.0 )</div>\n\
<div class=\"line\">  glFT.glVertex3f( 0.0, 0.0, 3.0 )</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">  glFT.glEnd()</div>\n\
<div class=\"line\">  glFT.glEnable(OpenMayaRender.MGL_LIGHTING)</div>\n\
</div><!-- fragment --> <dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#_a134\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_effect_def_8cpp-example.html#_a7\">cgFx/cgfxEffectDef.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_shader_node_8cpp-example.html#_a156\">cgFx/cgfxShaderNode.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_texture_cache_8cpp-example.html#_a6\">cgFx/cgfxTextureCache.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a110\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_g_l_f_t_8cpp-example.html#_a0\">gpuCache/gpuCacheGLFT.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_g_l_f_t_8h-example.html#_a0\">gpuCache/gpuCacheGLFT.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_g_l_8cpp-example.html#_a3\">hwApiTextureTest/hwRendererHelperGL.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/tessellated_quad_2_tessellated_quad_node_8cpp-example.html#_a8\">tessellatedQuad/TessellatedQuadNode.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_d_x11_device_access_2view_d_x11_device_access_8cpp-example.html#_a8\">viewDX11DeviceAccess/viewDX11DeviceAccess.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_2view_render_override_user_operation_8cpp-example.html#_a0\">viewRenderOverride/viewRenderOverrideUserOperation.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:ad4d1e8ee04026b0a5cdb57e5fa4ef5ff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ff\">MGLversion</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa568382cfd657cb54cb954aff27291d07\">kMGL_Version11</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ffae8912763bbf8edccd741d4e403844544\">kMGL_Version12</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa280d7ec3fb1d8a0cbd9d7a73fdeebf9c\">kMGL_Version121</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa96344e7af2ff3270d918e01cad0afae6\">kMGL_Version13</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa89074b9ed865c99d67466e6c3a56afff\">kMGL_Version14</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ffadca9b6f056fa307edc5f7f5e4a0660b8\">kMGL_Version15</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ffaec976391b06e02f011dc06692e334c4f\">kMGL_Version20</a>\n\
<br>\n\
 }<tr class=\"memdesc:ad4d1e8ee04026b0a5cdb57e5fa4ef5ff\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">OpenGL versions checked.  <a href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ff\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad4d1e8ee04026b0a5cdb57e5fa4ef5ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a010f1c71e241e3a39339087e706072c7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#a010f1c71e241e3a39339087e706072c7\">extensionExists</a> (MGLExtension extension)</td></tr>\n\
<tr class=\"memdesc:a010f1c71e241e3a39339087e706072c7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Provides information as to whether a given OpenGL extension exists.  <a href=\"class_m_g_l_function_table.html#a010f1c71e241e3a39339087e706072c7\">More...</a><br></td></tr>\n\
<tr class=\"separator:a010f1c71e241e3a39339087e706072c7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a91100c47273414860f8b0c414ecc3ab9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#a91100c47273414860f8b0c414ecc3ab9\">numTexUnits</a> () const </td></tr>\n\
<tr class=\"memdesc:a91100c47273414860f8b0c414ecc3ab9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get information about the maximum number of texture units.  <a href=\"class_m_g_l_function_table.html#a91100c47273414860f8b0c414ecc3ab9\">More...</a><br></td></tr>\n\
<tr class=\"separator:a91100c47273414860f8b0c414ecc3ab9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0c770be971b3ef40033c3f8d36723b02\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#a0c770be971b3ef40033c3f8d36723b02\">numTexInterpolants</a> () const </td></tr>\n\
<tr class=\"memdesc:a0c770be971b3ef40033c3f8d36723b02\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get information about the maximum number of texture interpolants.  <a href=\"class_m_g_l_function_table.html#a0c770be971b3ef40033c3f8d36723b02\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0c770be971b3ef40033c3f8d36723b02\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8d42692c188b6f0dc632a100fbe85efa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#a8d42692c188b6f0dc632a100fbe85efa\">numTexImageUnits</a> () const </td></tr>\n\
<tr class=\"memdesc:a8d42692c188b6f0dc632a100fbe85efa\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get information about the maximum number of texture image units available.  <a href=\"class_m_g_l_function_table.html#a8d42692c188b6f0dc632a100fbe85efa\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8d42692c188b6f0dc632a100fbe85efa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa65765c9b1608433446e398800ac6e37\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#aa65765c9b1608433446e398800ac6e37\">maxTextureSize</a> () const </td></tr>\n\
<tr class=\"memdesc:aa65765c9b1608433446e398800ac6e37\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get information about the maximum texture size.  <a href=\"class_m_g_l_function_table.html#aa65765c9b1608433446e398800ac6e37\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa65765c9b1608433446e398800ac6e37\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4f49dcee6fb3ae04c0a96c4386f65b02\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#a4f49dcee6fb3ae04c0a96c4386f65b02\">maxVertexAttributes</a> () const </td></tr>\n\
<tr class=\"memdesc:a4f49dcee6fb3ae04c0a96c4386f65b02\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get information about the maximum number of vertex attributes available.  <a href=\"class_m_g_l_function_table.html#a4f49dcee6fb3ae04c0a96c4386f65b02\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4f49dcee6fb3ae04c0a96c4386f65b02\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a3782e75e2e98084b56c9bc3e06147925\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3782e75e2e98084b56c9bc3e06147925\"></a>\n\
class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>MHardwareRenderer</b></td></tr>\n\
<tr class=\"separator:a3782e75e2e98084b56c9bc3e06147925\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_l_function_table.html#ad4d1e8ee04026b0a5cdb57e5fa4ef5ff\">MGLversion</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>OpenGL versions checked. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa568382cfd657cb54cb954aff27291d07\"></a>kMGL_Version11&#160;</td><td class=\"fielddoc\">\n\
<p>GL 1.1. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ffae8912763bbf8edccd741d4e403844544\"></a>kMGL_Version12&#160;</td><td class=\"fielddoc\">\n\
<p>GL 1.2. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa280d7ec3fb1d8a0cbd9d7a73fdeebf9c\"></a>kMGL_Version121&#160;</td><td class=\"fielddoc\">\n\
<p>GL 1.2.1. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa96344e7af2ff3270d918e01cad0afae6\"></a>kMGL_Version13&#160;</td><td class=\"fielddoc\">\n\
<p>GL 1.3.1. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ffa89074b9ed865c99d67466e6c3a56afff\"></a>kMGL_Version14&#160;</td><td class=\"fielddoc\">\n\
<p>GL 1.4.1. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ffadca9b6f056fa307edc5f7f5e4a0660b8\"></a>kMGL_Version15&#160;</td><td class=\"fielddoc\">\n\
<p>GL 1.5. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad4d1e8ee04026b0a5cdb57e5fa4ef5ffaec976391b06e02f011dc06692e334c4f\"></a>kMGL_Version20&#160;</td><td class=\"fielddoc\">\n\
<p>GL 2.0. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a010f1c71e241e3a39339087e706072c7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPEN bool extensionExists </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">MGLExtension&#160;</td>\n\
          <td class=\"paramname\"><em>extension</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Provides information as to whether a given OpenGL extension exists. </p>\n\
<p>That is, the extension is reported to be supported.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">extension</td><td>Extension enumeration.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if the extension exists, false otherwise. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a120\">dx11Shader/dx11Shader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a91100c47273414860f8b0c414ecc3ab9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int numTexUnits </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get information about the maximum number of texture units. </p>\n\
<p>This may not be the same as the number of interpolants available.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Maximum number of texture units. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0c770be971b3ef40033c3f8d36723b02\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int numTexInterpolants </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get information about the maximum number of texture interpolants. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Maximum number of texture interpolants. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8d42692c188b6f0dc632a100fbe85efa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int numTexImageUnits </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get information about the maximum number of texture image units available. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Maximum number of image units. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa65765c9b1608433446e398800ac6e37\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int maxTextureSize </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get information about the maximum texture size. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Maximum size. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4f49dcee6fb3ae04c0a96c4386f65b02\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int maxVertexAttributes </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get information about the maximum number of vertex attributes available. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Number of attributes available. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MGLFunctionTable.h</li>\n\
<li>MGLFunctionTable.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";