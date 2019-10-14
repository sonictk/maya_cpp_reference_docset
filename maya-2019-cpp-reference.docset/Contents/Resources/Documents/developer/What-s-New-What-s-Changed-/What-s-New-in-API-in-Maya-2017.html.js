var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>What&#39;s New in API in Maya 2017 Update 4</title>\n\
   <meta name=\"contextid\" content=\"WHATS_NEW_2017UPDATE4\"><meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>What&#39;s New in API in Maya 2017 Update 4</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"whats-new-in-api-in-maya-2017-update-4\"></a></div>\n\
<div class=\'section\'><a id=\"viewport-2.0\"></a><h2 id=\"viewport-2.0\">Viewport 2.0</h2></div>\n\
<ul>\n\
<li><p>A new <span class=\'code\'>MPxDrawOverride2</span> class includes new virtual functions, which let you continue to use <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxLocatorNode</a></span> class functions to override selection behavior for custom shapes in your plug-ins. <span class=\'code\'>MPxDrawOverride2</span> class functions also provide the UI drawing mechanism to supersede the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSurfaceShapeUI</a></span> class.</p>\n\
<p>These updates do not require plug-in source code changes or recompiling.</p>\n\
<p>The new functions include:</p>\n\
<ul>\n\
<li><span class=\'code\'>MPxDrawOverride2::wantUserSelection()</span>, which when set to true, gets overridden and allows <span class=\'code\'>MPxDrawOverride2::userSelect()</span> to be invoked for selection testing. Otherwise, the implementation is based on the rasterization of the drawing method.</li>\n\
<li>When <span class=\'code\'>MPxDrawOverride2::userSelect()</span> is invoked by <span class=\'code\'>MPxDrawOverride2::wantUserSelection()</span>, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUserData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_user_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_user_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUserData</a></span> instance is used for the current selection context.</li>\n\
</ul>\n\
<p>The rawfootPrintNode plug-in example has been updated to demonstrate the use of the new functions.</p></li>\n\
<li>The <span class=\'code\'>footPrintNode</span>, <span class=\'code\'>footPrint_GeometryOverride</span>, and <span class=\'code\'>rawFootPrintNode</span> devkit examples have been updated to demonstrate how to optimize the use of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxGeometryOverride</a></span> class functions to improve viewport refreshes while running Maya in Evaluation Mode.</li>\n\
<li>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride.updateSelectionGranularity()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a8a2dbaebc1b0e186ad56311f8d8073d0&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSubSceneOverride.updateSelectionGranularity()</a></span> method in the Python API no longer raises a <span class=\'code\'>TypeError</span> when it isn&#39;t overridden in derived classes.</li>\n\
<li><p>The <span class=\'code\'>apiMeshShape</span> devkit example has been modified to demonstrate how to support animation in Parallel mode.</p></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";