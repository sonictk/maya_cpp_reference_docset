var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Registration</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Registration</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"registration\"></a></div>\n\
<p>The attachment model for DG nodes or DAG objects is supported by the registration interface <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span>. The attachment model for render loop overrides is discussed in greater detail in the section: <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Render-Loop-Overrides.html\' title=\'\'>3.6 Render Loop Overrides</a>.</p>\n\
<p>For draw, shader, shading node, geometry and sub-scene overrides, the association is implicitly provided via the use of node classification strings. Override classification and Maya node/object classification matching forms this implicit link. The matching is performed hierarchically from broad to specific via the usage of “sub-classifications.”</p>\n\
<p>The format required of a classification string is as follows:</p>\n\
<p />“<strong>drawdb</strong>/<object classification=\"\">/[<sub-classification>]/<override classification=\"\">”<p />\n\
<ul>\n\
<li><strong>drawdb</strong> : Is root string used to identify registration with the rendering database. This is always required.</li>\n\
<li>&lt;<strong>object classification</strong>&gt; :\n\
<ul>\n\
<li>“<strong>shader</strong>” : To be recognized as a shader, this string is required.</li>\n\
<li>“<strong>geometry</strong>” : To be recognized as something that can draw geometry for a renderable object, this string is required.</li>\n\
<li>“<strong>subscene</strong>“ : To be recognized as a DAG object that is evaluated with an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span> implementation, this string is required.</li>\n\
<li>“<strong>light</strong>” : To be recognized as a lighting contributor, this string is required. It is recommended that both <span class=\'code\'>“drawdb/light”</span> and <span class=\'code\'>“light”</span> be used.</li>\n\
</ul></li>\n\
<li><p>&lt;<strong>sub-classification</strong>&gt; : This provides additional levels of classification which are useful, and in some cases, required for grouping and managing overrides. In particular, shading nodes that are used as surface shaders (connected to the Maya shading engine) must use a classification which starts with <span class=\'code\'>“drawdb/shader/surface/”</span>. Sub-classification is optional for DAG overrides.</p>\n\
<p>In general, the more sub-classifications specified, the more specific the type of objects/nodes associated with a given entry point. For example, in these two examples:</p>\n\
<ol>\n\
<li><span class=\'code\'>“drawdb/shader/surface/myLibrary/myShader”</span></li>\n\
<li><span class=\'code\'>“drawdb/shader/surface/myLibrary”</span></li>\n\
</ol>\n\
<p>The first classification string, when used, would match fewer objects/nodes than the more-generic second string.</p>\n\
<p>For either existing or new plug-in node types, it is the responsibility of the plug-in writer to ensure that the appropriate classifications are used for both the override and for the node itself so that the correct classification string matching (association) is performed.</p>\n\
<p><strong>Light classification</strong></p>\n\
<p>If the classification is <span class=\'code\'>“light”</span>, then the only possible sub-classifications are those available for internal Maya lights. This include <span class=\'code\'>“ambientLight”</span>, <span class=\'code\'>“pointLight”</span>, <span class=\'code\'>“directionalLight”</span>, <span class=\'code\'>“spotlight”</span> and <span class=\'code\'>“volumeLight”</span>.</p>\n\
<p>The lights sub-classification indicates the internal lighting fragment that will be used during the computation of illumination. The parameters for these fragments are updated if an appropriate attribute is found on the node. The attributes may be a 1:1 match or an approximate match.</p>\n\
<p>For example, if a node of classification <span class=\'code\'>“drawdb/geometry/mynode”</span> has the following attributes:</p>\n\
<ul>\n\
<li>intensity attribute</li>\n\
<li>use dmap shadows</li>\n\
<li>use rtrace shadows</li>\n\
</ul>\n\
<p>And the light fragment has the following attributes:</p>\n\
<ul>\n\
<li>intensity parameter</li>\n\
<li>shadows enabled</li>\n\
</ul>\n\
<p>Then the intensity attributes map to each other, but the &quot;use dmap shadows&quot; and &quot;use rtrace shadows&quot; attributes both map to the same “shadows enabled” parameter.</p>\n\
<p>If a match is possible, then the unmapped (unconnected) value is used. If a match for an attribute is not found, then the appropriate default value for the attribute is used.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> If you use the <span class=\'code\'>“light”</span> classification, <strong>you must include these light attributes</strong>: <em>intensity</em>, <em>color</em>, <em>emitDiffuse</em>, and <em>emitSpecular</em>, in order for the light to behave like a Maya light. The attributes can be static or dynamic.</p>\n\
</blockquote>\n\
<p>If you use the <span class=\'code\'>“light”</span> classification, then the only possible sub-classifications are those available for internal Maya lights:</p>\n\
<ul>\n\
<li>ambientLight</li>\n\
<li>pointLight</li>\n\
<li>directionalLight</li>\n\
<li>spotlight</li>\n\
<li>volumeLight</li>\n\
<li><a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Image-based-lighting.html\' title=\'\'>image</a>.</li>\n\
</ul>\n\
<p>The <em>exposure</em> attribute is also parsed for internal light evaluation.</p>\n\
<p>The <em>apiDirectionalLightShape</em> Developer Kit example plug-in and the Arnold for Maya plug-in lights have implementations that show support for the various classifications and attribute handling, including exposure.</p>\n\
<p>No drawing override is required as the internal drawing for the given light type is provided automatically.</p></li>\n\
<li><p>&lt;<strong>override classification</strong>&gt; : Unique override classification. Often, this is the name of the node type the override is to be used with (if it is not used with multiple node types).</p></li>\n\
</ul>\n\
<div class=\'figure\'><img src=\'dev_help/images/LightRegistration_Classification.png\' title=\'\' /></div>\n\
<p>Figure 35: For each override type the classification matches any objects or nodes specified in the classification.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8ccb.jpg\' title=\'\' /></div>\n\
<p>Figure 36: Example demonstrating that, depending on how on how specific the classification is, different matches results. The “<span class=\'code\'>drawdb/geometry/parametricSurface/B-spline</span>” DAG object classification matches more closely to the override with the identical classification string, rather than the more generic “<span class=\'code\'>drawdb/geometry/parametricSurface</span>” string. The classification with the closest match is used.</p>\n\
<p>The <span class=\'code\'>getClassification</span> command documentation contains a list of classifications recognized by Viewport 2.0.</p>\n\
<p><strong>Draw a custom object that performs lighting in Viewport 2.0</strong></p>\n\
<p>For dag objects that wish to contribute lighting as well as have custom drawing, it is possible to have two <span class=\'code\'>“drawdb”</span> classifications: one that starts with <span class=\'code\'>“light”</span> and one that starts with <span class=\'code\'>“geometry”</span>. This is shown with the <span class=\'code\'>“drawdb/geometry/light/myLight”</span> classification on the node and corresponding geometry override, as well as a <span class=\'code\'>“light”</span> and <span class=\'code\'>“drawdb/light/directionalLight”</span> classification.</p>\n\
<p>A simple example is given in the <em>apiDirectionalLightShape</em> plug-in example, which draws the following custom geometry (in blue) as compared to the default internal drawing of a directional light.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/LightRegistration_PluginExample.png\' title=\'\' /></div>\n\
<p>Only classifications for draw and geometry overrides may be registered along with <span class=\'code\'>“drawdb/light”</span>. Overrides such as <span class=\'code\'>“drawdb/subscene”</span>, for example, are not allowed.</p>\n\
<p>In order for the override of a plug-in node to represent the drawing of a light, the <span class=\'code\'>“drawdb/geometry/light”</span> classification string should be used when registering the override; for example, a classification string such as <span class=\'code\'>“drawdb/geometry/light/myLight”</span> could be used. Support for display type filters becomes available when this classification is used, such that the drawing of these plug-in nodes are filtered when lights are filtered.</p>\n\
<p><strong>Register transform node plug-ins</strong></p>\n\
<p>Plug-in writers should be aware that, in order for a plug-in transform to be recognized in Viewport 2.0, the appropriate classification string <em>drawdb/geometry/transform</em> must be added when registering the transform. This must be done so that:</p>\n\
<ul>\n\
<li>Local rotation axis and pivots draw.</li>\n\
<li>Transforming the object moves any children parented under it in the DAG.</li>\n\
</ul>\n\
<p>For example, for the rockingTransform plug-in, the code is as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Classify the node as a transform.  This causes Viewport\n\
// 2.0 to treat the node the same way it treats a regular\n\
// transform node.\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> classification = &quot;drawdb/geometry/transform&quot;;\n\
status = plugin.registerTransform(&quot;rockingTransform&quot;,                               \n\
                                   rockingTransformNode::id,                                    \n\
                                   &amp;rockingTransformNode::creator,                              \n\
                                   &amp;rockingTransformNode::initialize,\n\
                                   &amp;rockingTransformMatrix::creator,\n\
                                   rockingTransformMatrix::id,\n\
                                   &amp;classification);\n\
\n\
</pre></div><p>If this is not done, then <span class=\'code\'>registerTransform()</span> automatically adds the <span class=\'code\'>drawdb/geometry/transform</span> classification if no other <span class=\'code\'>drawdb</span> classification is specified.</p>\n\
<div class=\'section\'><a id=\"registering-display-filters\"></a><h2 id=\"registering-display-filters\">Registering Display Filters</h2></div>\n\
<p>New display filter types can be added for plug-in objects via a registration interface. If the classification string used matches the classification string used for registering a draw override, the override may be filtered out when visibility checking is performed. The UI name for the filter appears as an option for display filter interfaces for 3d viewports and batch rendering.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerDisplayFilter()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#acb7cf054c95bb6517d378a26a8d48956&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnPlugin::registerDisplayFilter()</a></span> is the interface to register a new display filter type. The <em>gpuCache</em> SDK plug-in contains code which demonstrates its usage.</p>\n\
</override></sub-classification></object>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";