var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>phongShader/phongShaderOverride.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'phong_shader_2phong_shader_override_8cpp-example.html\', tocPrefix);\n\
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
            <h1>phongShader/phongShaderOverride.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
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
<div class=\"title\">phongShader/phongShaderOverride.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;phongShaderOverride.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MShaderManager.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html\">MHWRender::MPxSurfaceShadingNodeOverride</a>* phongShaderOverride::creator(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> phongShaderOverride(obj);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">phongShaderOverride::phongShaderOverride(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">: MPxSurfaceShadingNodeOverride(obj)</div>\n\
<div class=\"line\">, fObject(obj)</div>\n\
<div class=\"line\">, fResolvedSpecularColorName(<span class=\"stringliteral\">&quot;&quot;</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fSpecularColor[0] = 0.5f;</div>\n\
<div class=\"line\">    fSpecularColor[1] = 0.5f;</div>\n\
<div class=\"line\">    fSpecularColor[2] = 0.5f;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">phongShaderOverride::~phongShaderOverride()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> phongShaderOverride::supportedDrawAPIs()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"comment\">// works in both gl and dx</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a72361be679c1aca1c1be5f9b500a3315\">MHWRender::kOpenGL</a> | <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a90bc0a1678af7ac4d1e62e2e954be4e5\">MHWRender::kDirectX11</a> | <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49aaebf48c70b63878eff38483392f19fb7\">MHWRender::kOpenGLCoreProfile</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> phongShaderOverride::fragmentName()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"comment\">// clear fResolvedSpecularColorName since we&#39;ve rebuilt</span></div>\n\
<div class=\"line\">    fResolvedSpecularColorName = <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Just reuse Maya&#39;s phong surface shader</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"stringliteral\">&quot;mayaPhongSurface&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> phongShaderOverride::getCustomMappings(</div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html\">MHWRender::MAttributeParameterMappingList</a>&amp; mappings)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// The &quot;color&quot; and &quot;incandescence&quot; attributes are all named the same as</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the corresponding parameters on the fragment so they will map</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// automatically. Need to remap &quot;diffuseReflectivity&quot;, &quot;translucenceCoeff&quot;,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// &quot;reflectionGain&quot; and &quot;power&quot; though.</span></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MHWRender::MAttributeParameterMapping</a> diffuseMapping(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;diffuse&quot;</span>, <span class=\"stringliteral\">&quot;diffuseReflectivity&quot;</span>, <span class=\"keyword\">true</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    mappings.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a651f7db3e2e91cdb1914be13ff70bffa\">append</a>(diffuseMapping);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MHWRender::MAttributeParameterMapping</a> translucenceMapping(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;translucence&quot;</span>, <span class=\"stringliteral\">&quot;translucenceCoeff&quot;</span>, <span class=\"keyword\">true</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    mappings.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a651f7db3e2e91cdb1914be13ff70bffa\">append</a>(translucenceMapping);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MHWRender::MAttributeParameterMapping</a> reflectivityMapping(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;reflectivity&quot;</span>, <span class=\"stringliteral\">&quot;reflectionGain&quot;</span>, <span class=\"keyword\">true</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    mappings.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a651f7db3e2e91cdb1914be13ff70bffa\">append</a>(reflectivityMapping);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MHWRender::MAttributeParameterMapping</a> powerMapping(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;cosinePower&quot;</span>, <span class=\"stringliteral\">&quot;power&quot;</span>, <span class=\"keyword\">true</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    mappings.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a651f7db3e2e91cdb1914be13ff70bffa\">append</a>(powerMapping);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Our phong only uses a single float for specularity, while the Maya</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// phong fragment uses a full 3-float color. We could add a remap fragment</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// in front to expand the float to a 3-float, but it is simpler here to</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// just set the parameter manually in updateShader(). So add an empty</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// mapping to ensure the parameter gets renamed.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MHWRender::MAttributeParameterMapping</a> specColMapping(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;specularColor&quot;</span>, <span class=\"stringliteral\">&quot;&quot;</span>, <span class=\"keyword\">true</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    mappings.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a651f7db3e2e91cdb1914be13ff70bffa\">append</a>(specColMapping);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> phongShaderOverride::primaryColorParameter()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Use the color parameter from the phong fragment as the primary color</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"stringliteral\">&quot;color&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> phongShaderOverride::bumpAttribute()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Use the &quot;normalCamera&quot; attribute to recognize bump connections</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"stringliteral\">&quot;normalCamera&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> phongShaderOverride::updateDG()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> node(fObject, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (status)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> specularity = 0.5f;</div>\n\
<div class=\"line\">        node.findPlug(<span class=\"stringliteral\">&quot;specularity&quot;</span>, <span class=\"keyword\">true</span>).getValue(specularity);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Expand specularity to a 3-float</span></div>\n\
<div class=\"line\">        fSpecularColor[0] = specularity;</div>\n\
<div class=\"line\">        fSpecularColor[1] = specularity;</div>\n\
<div class=\"line\">        fSpecularColor[2] = specularity;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> phongShaderOverride::updateShader(</div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>&amp; shader,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html\">MHWRender::MAttributeParameterMappingList</a>&amp; mappings)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Cache resolved name if found to avoid lookup on every update</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fResolvedSpecularColorName.length() == 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MHWRender::MAttributeParameterMapping</a>* mapping =</div>\n\
<div class=\"line\">            mappings.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#ad6a8e8b308830e3ee064dedfda768104\">findByParameterName</a>(<span class=\"stringliteral\">&quot;specularColor&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (mapping)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fResolvedSpecularColorName = mapping-&gt;<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html#ad6ede1f5fccb9110ca5a4a0efa3c94f4\">resolvedParameterName</a>();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set parameter</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fResolvedSpecularColorName.length() &gt; 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        shader.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#aa17e2c9a17b86064950103066fa307ef\">setParameter</a>(fResolvedSpecularColorName, fSpecularColor);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";