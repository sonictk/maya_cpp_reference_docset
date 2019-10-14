var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>phongShader/phongShaderOverride.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'phong_shader_2phong_shader_override_8h-example.html\', tocPrefix);\n\
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
            <h1>phongShader/phongShaderOverride.h</h1>\n\
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
<div class=\"title\">phongShader/phongShaderOverride.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _phongShaderOverride</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _phongShaderOverride</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2012 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Example Plugin: lambertShader.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This is the MPxSurfaceShadingNodeOverride implementation to go along with</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the node defined in lambertShader.cpp. This provides draw support in</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Viewport 2.0.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxSurfaceShadingNodeOverride.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>phongShaderOverride : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html\">MHWRender::MPxSurfaceShadingNodeOverride</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html\">MHWRender::MPxSurfaceShadingNodeOverride</a>* creator(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~phongShaderOverride() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#a9c43d7192e56c01d8dde77fabd843a0e\">supportedDrawAPIs</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#ae48feb7d9b8640e3057fe3a13f009d91\">fragmentName</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#acf67b2108877bbb3c466067aa0e351b0\">getCustomMappings</a>(</div>\n\
<div class=\"line\">        <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html\">MHWRender::MAttributeParameterMappingList</a>&amp; mappings) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html#a673aec2781d605714f8401c87faf1534\">primaryColorParameter</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html#a5adfa1c46300154b89d12414e723d676\">bumpAttribute</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#a23b698292591f9980d9daa5af9451326\">updateDG</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#af45c45875cf1342536ef1aefd996ce89\">updateShader</a>(</div>\n\
<div class=\"line\">        <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>&amp; shader,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html\">MHWRender::MAttributeParameterMappingList</a>&amp; mappings) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    phongShaderOverride(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> fObject;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> fSpecularColor[3];</div>\n\
<div class=\"line\">    <span class=\"keyword\">mutable</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fResolvedSpecularColorName;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // _phongShaderOverride</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";