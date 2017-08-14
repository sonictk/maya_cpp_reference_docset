var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>glslShader/GLSLShaderOverride.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'glsl_shader_2_g_l_s_l_shader_override_8cpp-example.html\', tocPrefix);\n\
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
            <h1>glslShader/GLSLShaderOverride.cpp</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">glslShader/GLSLShaderOverride.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDrawContext.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHWGeometry.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;GLSLShaderOverride.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;GLSLShaderSemantics.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;GLSLShader.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(OSMac_)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># include &lt;OpenGL/gl.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># include &lt;GL/gl.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ENABLE_TRACE_API_CALLS</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef ENABLE_TRACE_API_CALLS</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define TRACE_API_CALLS(x) cerr &lt;&lt; &quot;GLSLShaderOverride: &quot;&lt;&lt;(x)&lt;&lt;&quot;\\n&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define TRACE_API_CALLS(x)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ENABLE_PRINT_DEBUGGING</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef ENABLE_PRINT_DEBUGGING</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PRINT_DEBUGGING(x) cerr &lt;&lt; &quot;GLSLShaderOverride:: &quot;&lt;&lt;(x)&lt;&lt;&quot;\\n&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PRINT_DEBUGGING(x)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">GLSLShaderOverride::GLSLShaderOverride(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">: <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html\">MHWRender</a>::MPxShaderOverride(obj)</div>\n\
<div class=\"line\">, fBBoxExtraScale(1.0)</div>\n\
<div class=\"line\">, fShaderBound(false)</div>\n\
<div class=\"line\">, fShaderNode(NULL)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get an early peek to the shader node, so we can have the scale value,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// before the shader can be discarded by the clipping.</span></div>\n\
<div class=\"line\">    GLSLShaderNode* shaderNode = (GLSLShaderNode*)<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#aa23ddc899bfdca52a5b703c3e7a66adb\">MPxHardwareShader::getHardwareShaderPtr</a>(const_cast&lt;MObject&amp;&gt;(obj));</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(shaderNode) {</div>\n\
<div class=\"line\">        fBBoxExtraScale = shaderNode-&gt;techniqueBBoxExtraScale();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html\">MHWRender::MPxShaderOverride</a>* GLSLShaderOverride::Creator(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> GLSLShaderOverride(obj);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">GLSLShaderOverride::~GLSLShaderOverride()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> GLSLShaderOverride::initialize(<span class=\"keyword\">const</span> MInitContext&amp; initContext, MInitFeedback&amp; initFeedback)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fShaderNode = NULL;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (initContext.shader != <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>) {</div>\n\
<div class=\"line\">        MInitContext* nonConst = <span class=\"keyword\">const_cast&lt;</span>MInitContext*<span class=\"keyword\">&gt;</span>(&amp;initContext);</div>\n\
<div class=\"line\">        fShaderNode =(GLSLShaderNode*)<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#aa23ddc899bfdca52a5b703c3e7a66adb\">MPxHardwareShader::getHardwareShaderPtr</a>(nonConst-&gt;shader);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fShaderNode)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shaderInstance = fShaderNode-&gt;GetGLSLShaderInstance();</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (shaderInstance)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( fShaderNode-&gt;hasUpdatedVaryingInput() ) {</div>\n\
<div class=\"line\">                fShaderNode-&gt;updateGeometryRequirements();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            addGeometryRequirements(fShaderNode-&gt;geometryRequirements());</div>\n\
<div class=\"line\">            <span class=\"comment\">//setGeometryRequirements(*shaderInstance);</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            addShaderSignature(*shaderInstance);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//Setup indexing requirement</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> customPrimitiveGeneratorName = fShaderNode-&gt;techniqueIndexBufferType();</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\">MHWRender::MIndexBufferDescriptor</a> indexingRequirement</div>\n\
<div class=\"line\">                (MHWRender::MIndexBufferDescriptor::kCustom, customPrimitiveGeneratorName, <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1eaa2c70dd76c8172a9298334473c914304\">MHWRender::MGeometry::kTriangles</a>);</div>\n\
<div class=\"line\">            addIndexingRequirement(indexingRequirement);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Build key string, note that if any attribute on the node changes that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// would affect the value of this string, then we must trigger rebuild of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the shader</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> result = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Autodesk Maya GLSLShaderOverride, nodeName=&quot;</span>);</div>\n\
<div class=\"line\">    result += fShaderNode ? fShaderNode-&gt;name() : <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;null&quot;</span>);</div>\n\
<div class=\"line\">    result += <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;, effectFileName=&quot;</span>);</div>\n\
<div class=\"line\">    result += fShaderNode ? fShaderNode-&gt;effectName() : <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;null&quot;</span>);</div>\n\
<div class=\"line\">    result += <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;, technique=&quot;</span>);</div>\n\
<div class=\"line\">    result += fShaderNode ? fShaderNode-&gt;techniqueName() : <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;null&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fShaderNode &amp;&amp; fShaderNode-&gt;techniqueIsSelectable()) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// adding &quot;selectable=true&quot; is required to have shader instance selectable</span></div>\n\
<div class=\"line\">        result += <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;, selectable=true&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> GLSLShaderOverride::updateDG(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> <span class=\"keywordtype\">object</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> GLSLShaderOverride::updateDevice()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> GLSLShaderOverride::endUpdate()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> GLSLShaderOverride::activateKey(<a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; <span class=\"comment\">/*key*/</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fShaderNode)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shaderInstance = fShaderNode-&gt;GetGLSLShaderInstance();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (shaderInstance)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Must update before binding otherwise render will lag one draw behind</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// this is quite visible when redrawing swatches.</span></div>\n\
<div class=\"line\">            fShaderNode-&gt;<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a12c3058fbb93f63ab42f17ba09385e6c\">updateParameters</a>(context); </div>\n\
<div class=\"line\">            shaderInstance-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a705d4d83d28a26d08a792df0a25700d2\">bind</a>(context);  <span class=\"comment\">// make sure our shader is the active shader</span></div>\n\
<div class=\"line\">            fShaderBound = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::handlesDraw(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (fShaderNode &amp;&amp; fShaderNode-&gt;techniqueHandlesContext(context));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::draw(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context, <span class=\"keyword\">const</span> <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; renderItemList)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fShaderNode)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fShaderBound)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shaderInstance = fShaderNode-&gt;GetGLSLShaderInstance();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!shaderInstance)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> drewSomething = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> itemCount = renderItemList.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">length</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> itemId = 0; itemId &lt; itemCount; ++itemId)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item = renderItemList.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html#a82ed5d7ae96a2890f5f54f697bb0bab0\">itemAt</a>(itemId);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (item == NULL)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        GLSLShaderNode::RenderItemDesc renderItemDesc = { <span class=\"keyword\">false</span>, <span class=\"keyword\">false</span>, <span class=\"keyword\">false</span> };</div>\n\
<div class=\"line\">        fShaderNode-&gt;updateOverrideNonMaterialItemParameters(context, item, renderItemDesc);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> passCount = shaderInstance-&gt;<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#af37a1499b42b48fa48a5bb446305d1f2\">getPassCount</a>(context);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> passIndex = 0; passIndex &lt; passCount; ++passIndex)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( fShaderNode-&gt;passHandlesContext(context, passIndex, &amp;renderItemDesc) )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                shaderInstance-&gt;<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a0e164e1ae3d1df9f879a8fd4834b4272\">activatePass</a>(context, passIndex);</div>\n\
<div class=\"line\">                <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a96b26e833c1533131841eb2bcb2288a4\">MHWRender::MPxShaderOverride::drawGeometry</a>(context);</div>\n\
<div class=\"line\">                drewSomething = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> drewSomething;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> GLSLShaderOverride::terminateKey(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; <span class=\"comment\">/*key*/</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fShaderBound &amp;&amp; fShaderNode)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shaderInstance = fShaderNode-&gt;GetGLSLShaderInstance();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (shaderInstance)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            shaderInstance-&gt;<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#ac4a9d5b839ed15d1bc1330b7ce663f19\">unbind</a>(context);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fShaderBound = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> GLSLShaderOverride::supportedDrawAPIs()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49aaebf48c70b63878eff38483392f19fb7\">MHWRender::kOpenGLCoreProfile</a> | <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a90bc0a1678af7ac4d1e62e2e954be4e5\">MHWRender::kDirectX11</a> | <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a72361be679c1aca1c1be5f9b500a3315\">MHWRender::kOpenGL</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::isTransparent()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode &amp;&amp; fShaderNode-&gt;techniqueIsTransparent();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::supportsAdvancedTransparency()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode &amp;&amp; fShaderNode-&gt;techniqueSupportsAdvancedTransparency();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::overridesDrawState()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode &amp;&amp; fShaderNode-&gt;techniqueOverridesDrawState();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">double</span> GLSLShaderOverride::boundingBoxExtraScale()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode ? fShaderNode-&gt;techniqueBBoxExtraScale() : fBBoxExtraScale;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::overridesNonMaterialItems()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode ? fShaderNode-&gt;techniqueOverridesNonMaterialItems() : <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::handlesConsolidatedGeometry()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode ? fShaderNode-&gt;techniqueHandlesConsolidatedGeometry() : <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* GLSLShaderOverride::shaderInstance()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode ? fShaderNode-&gt;GetGLSLShaderInstance() : NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> GLSLShaderOverride::rebuildAlways()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fShaderNode ) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fShaderNode-&gt;hasUpdatedVaryingInput() ) {</div>\n\
<div class=\"line\">            fShaderNode-&gt;updateGeometryRequirements();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";