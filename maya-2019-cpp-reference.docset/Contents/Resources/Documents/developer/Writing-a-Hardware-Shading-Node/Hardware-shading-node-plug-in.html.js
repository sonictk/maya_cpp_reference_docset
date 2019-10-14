var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Hardware shading node plug-in examples</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Hardware shading node plug-in examples</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"hardware-shading-node-plug-in-examples\"></a></div>\n\
<p>The Maya Developer Kit contains the following hardware shader node plug-in examples:</p>\n\
<p>MPxShaderOverride based</p>\n\
<ul>\n\
<li><em>dx11Shader</em> and <em>glslShader</em>: shader implementations that are based on the contents of a shader effect. They demonstrate the use of technique level annotations to determine specific characteristics of the shader. They also demonstrate the use of hardware selection to perform component selection and draw non-material items.</li>\n\
<li><em>hwPhongShader</em>: examine this example to compare the usage of Viewport 2.0 interfaces versus the raw OpenGL drawing that was used previously in the Legacy Default Viewport.</li>\n\
<li><em>vp2BlinnShader</em>: simplified example that uses an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span>. The plug-in shows the usage of the basic interfaces for this type of override.</li>\n\
</ul>\n\
<p>MPxShadingNodeOverride / MPxSurfaceShadingNodeOverride based</p>\n\
<ul>\n\
<li><em>checkerShader</em>: demonstrates the use of a shader description that is written as an XML file on disk.</li>\n\
<li><em>brickShader</em>: provides an implementation of a brick texture (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShadingNodeOverride</a></span>)</li>\n\
<li><em>onbShader</em>: provides an implementation of an Oren-Nayer shader (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span>).</li>\n\
<li><em>simpleNoiseShader</em>: creates a dependency node as a texture shader called simpleNoise that implements the Maya wave noise texture type.</li>\n\
</ul>\n\
<p>Attribute matching functionality</p>\n\
<ul>\n\
<li><em>anisotropicShader</em>: demonstrates use of the attribute matching feature to enable software shading nodes to render in Viewport 2.0</li>\n\
</ul>\n\
<p>Functionality to dump fragment code (procedures that define a shader effect) from existing nodes</p>\n\
<ul>\n\
<li><em>fragmentDumper</em>: produces the XML file of a fragment graph.</li>\n\
</ul>\n\
<p>This feature allows you to examine Maya&#39;s internal fragment implementation. Fragments can be used for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShadingNodeOverride</a></span> / <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> based shader nodes.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";