var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>What&#39;s New in API in Maya 2017 Update 3</title>\n\
   <meta name=\"contextid\" content=\"WHATS_NEW_2017UPDATE3\"><meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>What&#39;s New in API in Maya 2017 Update 3</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"whats-new-in-api-in-maya-2017-update-3\"></a></div>\n\
<div class=\'section\'><a id=\"rendering\"></a><h2 id=\"rendering\">Rendering</h2></div>\n\
<div class=\'section\'><a id=\"general\"></a><h3 id=\"general\">General</h3></div>\n\
<ul>\n\
<li><p>Added enumerators to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MLightParameterInformation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MLightParameterInformation</a></span> class to support light information export for point lights and point light shadows. The updates include:</p>\n\
<ul>\n\
<li><p>Added the <span class=\'code\'>kDepthRange</span> enumerator to the <span class=\'code\'>StockParameterSemantic</span> enum members.</p>\n\
<p><span class=\'code\'>kDepthRange</span> is used for point light shadows to indicate the far and near clipping depth of a point light camera. See the <span class=\'code\'>viewRenderOverridePointLightShadow.cpp</span> plug-in.</p></li>\n\
<li><p>Added the <span class=\'code\'>kTextureCube</span> enumerator to the <span class=\'code\'>parameterType</span> enum members.</p></li>\n\
</ul>\n\
<p>The <em>dx11Shader</em>, <em>glslShader</em>, and <em>viewRenderOverridePointLightShadows</em> devkit example plug-ins have been updated to include these enumerators.</p></li>\n\
<li><p>Added the <span class=\'code\'>k3dPointLightShadowerShader</span> enumerator to the <span class=\'code\'>MStockShader</span> enum members to get a stock shader instance which can be used when rendering point light shadow maps. Use the following methods:</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderInstance</a>* MShaderManager::getStockShader( MStockShader name, <a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance::DrawCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a98585feea3c2e5ad2280c852bab83edd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderInstance::DrawCallback</a> preCb, <a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance::DrawCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a98585feea3c2e5ad2280c852bab83edd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderInstance::DrawCallback</a> postCb)const;</span></p>\n\
<p>The <em>hwPhongShader</em> devkit example plug-in has been updated to support this enumerator.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"lighting\"></a><h2 id=\"lighting\">Lighting</h2></div>\n\
<ul>\n\
<li><p>The Maya API now supports the implementation of point lights and point light shadows. A new <em>viewRenderOverridePointLightShadows</em> devkit example plug-in demonstrates how to override the viewport 2.0 rendering for the purposes of showing how point light shadow maps(cube map), which is requested on demand, and then used for selective lighting and shadowing in a scene render. The example creates a single point light, but is not intended to be a fully supported render override example. To create multiple point lights, modify this line when setting up the parameters:</p>\n\
<p><span class=\'code\'>status = shaderInstance-&gt;setParameter(&quot;mayaPointLight_position&quot;, &amp;( lightPosition[0] ));</span></p>\n\
<p>The <em>dx11Shader</em>, <em>glslShader</em>, and <em>hwPhongShader</em> devkit example plug-ins have been updated to include the support for point lights.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"modeling\"></a><h2 id=\"modeling\">Modeling</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> enhancements:</p>\n\
<ul>\n\
<li>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::setEdgeSmoothings()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#ad824622a3309e93dc8771da755531deb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh::setEdgeSmoothings()</a></span> function, which improves the performance of processing soft and hard edges. Use this method to specify whether an edge is hard or smooth (soft).</li>\n\
<li>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::isPolygonUVReversed()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#a8260a31521263408c478daf5eaffc881&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh::isPolygonUVReversed()</a></span> method, which determines whether the winding order of the UV texture coordinates for a specified polygon are reversed (clockwise). The method returns true if the texture coordinates are reversed and false if they are not reversed (counter clockwise).</li>\n\
<li>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::getClosestUVs()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#a1ef7a8385f5ed8821b93bac29e934349&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh::getClosestUVs()</a></span> function, which returns the closest UV on a surface based on a given set and coordinate.</li>\n\
<li><p>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::getPointsAtUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#a299ae5b36f31f846e0cdde655b21988a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh::getPointsAtUV()</a></span> function, which returns the positions of the points at the given UV value on the mesh.</p>\n\
<p>This function provides better performance for getting points at UV coordinates than <span class=\'code\'>MItMeshPolygon::pointAtUV()</span>.</p></li>\n\
</ul>\n\
<p>MItMeshPolygon enhancements:</p>\n\
<ul>\n\
<li>Add the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon::isUVReversed()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html#a781203ffa902216c7765d0b68f5a1121&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon::isUVReversed()</a></span> method, which checks the UV winding order for a face of the polygon being iterated. The method returns true if the UVs on the face are reversed (clockwise) and false if they are not reversed (counter clockwise).</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"performance\"></a><h2 id=\"performance\">Performance</h2></div>\n\
<ul>\n\
<li>A new footPrintNode_SubSceneOverride devkit example demonstrates how to implement sub-scene overrides for locator objects.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";