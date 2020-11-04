var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: blindDataShader/blindDataShaderOverride.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'blind_data_shader_2blind_data_shader_override_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: blindDataShader/blindDataShaderOverride.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
<div class=\"title\">blindDataShader/blindDataShaderOverride.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2018 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;blindDataShaderOverride.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MShaderManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDrawContext.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">blindDataShaderOverride::blindDataShaderOverride(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">    : <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html\">MHWRender</a>::MPxShaderOverride(obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a> *renderer = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!renderer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr = renderer-&gt;<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4603e18a1b89b798a2e4a4f36d9b5125\">getShaderManager</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!shaderMgr)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get a built-in shader that use vertex position and per vertex color as input.</span></div>\n\
<div class=\"line\">    fCPVShaderInstance = shaderMgr-&gt;<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a8e4ad27d691969622af2b05d8c6213d9\">getStockShader</a>(MHWRender::MShaderManager::k3dCPVSolidShader); </div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">blindDataShaderOverride::~blindDataShaderOverride()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a> *renderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!renderer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr = renderer-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4603e18a1b89b798a2e4a4f36d9b5125\">getShaderManager</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!shaderMgr)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fCPVShaderInstance)</div>\n\
<div class=\"line\">        shaderMgr-&gt;<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a0c7deb55edc231cbb2365b271ecd55f8\">releaseShader</a>(fCPVShaderInstance);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> blindDataShaderOverride::initialize(<span class=\"keyword\">const</span> MInitContext&amp; initContext, MInitFeedback&amp; initFeedback)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Define the geometry requirement (Vertex shader input layout) that is required by the shader k3dCPVSolidShader.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MHWRender::MVertexBufferDescriptor</a> positionDesc(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(), MHWRender::MGeometry::kPosition, MHWRender::MGeometry::kFloat, 3);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MHWRender::MVertexBufferDescriptor</a> colorDesc(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(), MHWRender::MGeometry::kColor, MHWRender::MGeometry::kFloat, 4);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    colorDesc.setSemanticName(<span class=\"stringliteral\">&quot;blindDataColorStream&quot;</span>); <span class=\"comment\">// Here we set the name of the vertex buffer generator that will generate the color stream. (See initializePlugin())</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    addGeometryRequirement(positionDesc);</div>\n\
<div class=\"line\">    addGeometryRequirement(colorDesc);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Autodesk Maya blindDataShaderOverride&quot;</span>);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MHWRender::DrawAPI blindDataShaderOverride::supportedDrawAPIs()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (MHWRender::kOpenGL | MHWRender::kDirectX11 | MHWRender::kOpenGLCoreProfile);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* blindDataShaderOverride::shaderInstance(MDrawContext&amp; <span class=\"comment\">/*context*/</span>)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fCPVShaderInstance;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> blindDataShaderOverride::activateKey(MDrawContext&amp; context, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; key)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fCPVShaderInstance)</div>\n\
<div class=\"line\">        fCPVShaderInstance-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a705d4d83d28a26d08a792df0a25700d2\">bind</a>(context);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> blindDataShaderOverride::terminateKey(MDrawContext&amp; context, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; key)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fCPVShaderInstance)</div>\n\
<div class=\"line\">        fCPVShaderInstance-&gt;unbind(context);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> blindDataShaderOverride::handlesDraw(<a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html\">MHWRender::MPassContext</a> &amp; passCtx = context.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#ad3f9422688a9ffbe815c374ece46c1ea\">getPassContext</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> &amp; passSem = passCtx.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a9737189d5cfffd795336d711a678d627\">passSemantics</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> handlePass = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i&lt;passSem.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (passSem[i] == <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a97ffcfc5e6c4bd512eab6727c58a9ae8\">MHWRender::MPassContext::kColorPassSemantic</a>)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">bool</span> hasOverrideShader = passCtx.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a54cb1ff5e4a10ffc51cb05ddab8e69ab\">hasShaderOverride</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (!hasOverrideShader)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                handlePass = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> handlePass;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> blindDataShaderOverride::draw(MDrawContext&amp; context, <span class=\"keyword\">const</span> MRenderItemList&amp; renderItemList)<span class=\"keyword\">const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fCPVShaderInstance)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> passCount = fCPVShaderInstance-&gt;getPassCount(context);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; passCount; i++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fCPVShaderInstance-&gt;activatePass(context, i);</div>\n\
<div class=\"line\">            <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a96b26e833c1533131841eb2bcb2288a4\">MHWRender::MPxShaderOverride::drawGeometry</a>(context);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";