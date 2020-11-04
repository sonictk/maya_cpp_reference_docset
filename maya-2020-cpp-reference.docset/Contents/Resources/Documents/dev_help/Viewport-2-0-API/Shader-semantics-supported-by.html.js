var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader semantics supported by Viewport 2.0</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Shader semantics supported by Viewport 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"shader-semantics-supported-by-viewport-2.0\"></a></div>\n\
<p>The following semantics are recognized and supported for use with shaders in Viewport 2.0. They can be used when authoring full effects which are accessed as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderInstance</a></span> objects using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderManager</a></span> class. They may also be applied to the parameters of fragments which are registered using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFragmentManager</a></span>.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The <span class=\'code\'>dx11Shader.mll</span> and <span class=\'code\'>glslShader.mll</span> plug-ins are both <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span>s. Therefore, each must parse the effects to determine and bind the semantics manually. By comparison, both the fragment system and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderInstance</a></span> do all this automatically; however, they are both also more restrictive.</p>\n\
</blockquote>\n\
<p>The world co-ordinate system can be further divided into different locales, each with a different origin. A node can then be specified in any of these locales. This allows the node position to be made with greater precision than if it were defined in the world co-ordinate system.</p>\n\
<p>All matrices that belong to the FrameLocale group are re-applied when the locale of a current node is different from the locale of a previous node. At render time, camera and lights are transformed into the current node&#39;s locale space so that the object, the camera, and the lights are all represented in the same local co-ordinate space and can be stored and represented with single precision floating point values.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"35.714285714285715%\" />\n\
<col width=\"35.714285714285715%\" />\n\
<col width=\"14.285714285714285%\" />\n\
<col width=\"14.285714285714285%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Semantic</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Usage</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Group</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
World\n\
</td>\n\
<td class=\"table-body\">\n\
World transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
World transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldInverse\n\
</td>\n\
<td class=\"table-body\">\n\
World transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldInverseTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
World transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
PreviousWorld\n\
</td>\n\
<td class=\"table-body\">\n\
Previous world transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
Item\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
NextWorld\n\
</td>\n\
<td class=\"table-body\">\n\
Next world transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
Item\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
View\n\
</td>\n\
<td class=\"table-body\">\n\
View transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ViewTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
View transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ViewInverse\n\
</td>\n\
<td class=\"table-body\">\n\
View transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ViewInverseTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
View transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Projection\n\
</td>\n\
<td class=\"table-body\">\n\
Projection transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ProjectionTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
Projection transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ProjectionInverse\n\
</td>\n\
<td class=\"table-body\">\n\
Projection transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ProjectionInverseTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
Projection transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
ProjectionZSense\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Denotes whether the projection matrix flips the Z component of a point when transformed: if so, -1.0; otherwise 1.0.\n\
</td>\n\
<td class=\"table-body\">\n\
Float\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldView\n\
</td>\n\
<td class=\"table-body\">\n\
World-view transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
World-view transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldViewInverse\n\
</td>\n\
<td class=\"table-body\">\n\
World-view transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewInverseTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
World-view transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-33B0F28C-B01C-4686-8FD4-CF880BA501D4\"></a>\n\
<p class=\"table-body\">\n\
WorldLocaleOrigin\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Apply an offset to the locale transformation matrix to obtain the true (global) world transformation matrix.<a name=\"GUID-C53DAB92-F9B1-4038-931F-571D77084DE3\"></a>\n\
<p class=\"table-body\">\n\
Applying this offset can result in a lack of precision in cases where double precision is required to represent an accurate position in large coordinate systems.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Float3\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
FrameLocale\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ViewProjection\n\
</td>\n\
<td class=\"table-body\">\n\
View-projection transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ViewProjectionTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
View-projection transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ViewProjectionInverse\n\
</td>\n\
<td class=\"table-body\">\n\
View-projection transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ViewProjectionInverseTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
View-projection transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
PreviousViewProjection\n\
</td>\n\
<td class=\"table-body\">\n\
Previous view-projection transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjection\n\
</td>\n\
<td class=\"table-body\">\n\
World-view-projection transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjectionTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
World-view-projection transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjectionInverse\n\
</td>\n\
<td class=\"table-body\">\n\
World-view-projection transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjectionInverseTranspose\n\
</td>\n\
<td class=\"table-body\">\n\
World-view-projection transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\" colspan=\"4\">\n\
<p class=\"table-body\">\n\
The following are MultiDraw versions of other semantics, used as alternates for rendering MultiDraw consolidation if<span class=\"code\"> <a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::supportsMultiDraw()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a74828e53545b3cf4dea69c7cd542cde7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride::supportsMultiDraw()</a></span> is overridden to return true.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldTMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldIMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldITMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldViewMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewTMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldViewIMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewITMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view-projection transformation\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjTMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view-projection transformation, transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjIMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view-projection transformation, inverted\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
WorldViewProjITMD\n\
</td>\n\
<td class=\"table-body\">\n\
MultiDraw array of World-view-projection transformation, inverted and transposed\n\
</td>\n\
<td class=\"table-body\">\n\
Matrix[64]\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Item <sup>FL</sup>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ViewDirection\n\
</td>\n\
<td class=\"table-body\">\n\
World-space direction of the view (camera)\n\
</td>\n\
<td class=\"table-body\">\n\
Float3\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ViewPosition\n\
</td>\n\
<td class=\"table-body\">\n\
World-space position of the view (camera)\n\
</td>\n\
<td class=\"table-body\">\n\
Float3\n\
</td>\n\
<td class=\"table-body\">\n\
FrameLocale\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
LocalViewer\n\
</td>\n\
<td class=\"table-body\">\n\
Denotes whether a local or non-local view direction is to be used\n\
</td>\n\
<td class=\"table-body\">\n\
Bool\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
IsOrthoGraphic\n\
</td>\n\
<td class=\"table-body\">\n\
Denotes whether the projection matrix is orthographic\n\
</td>\n\
<td class=\"table-body\">\n\
Bool\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ViewportPixelSize\n\
</td>\n\
<td class=\"table-body\">\n\
Dimensions of the current viewport in pixels, width and height\n\
</td>\n\
<td class=\"table-body\">\n\
Float2\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ClippingPlanes\n\
</td>\n\
<td class=\"table-body\">\n\
The coefficients of active clipping planes, one float4 per plane\n\
</td>\n\
<td class=\"table-body\">\n\
Float4 Array\n\
</td>\n\
<td class=\"table-body\">\n\
Clipping\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ClippingPlaneCount\n\
</td>\n\
<td class=\"table-body\">\n\
The number of active clipping planes\n\
</td>\n\
<td class=\"table-body\">\n\
Int\n\
</td>\n\
<td class=\"table-body\">\n\
Clipping\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
NearClipPlane\n\
</td>\n\
<td class=\"table-body\">\n\
The camera’s near clipping plane\n\
</td>\n\
<td class=\"table-body\">\n\
Float\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-105B4916-4770-43D6-9B68-2EEEF5C055F2\"></a>\n\
<p class=\"table-body\">\n\
Time\n\
</p>\n\
<a name=\"GUID-CA2C68E6-5104-4461-BB19-ED2F2604E1B7\"></a>\n\
<p class=\"table-body\">\n\
AnimationTime\n\
</p>\n\
<a name=\"GUID-5F6B7AA6-90FF-4EE2-A579-065A42F0382C\"></a>\n\
<p class=\"table-body\">\n\
Sas.Time.Now\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-F873B1BA-9CFF-4E9D-B7F8-234BF99691EE\"></a>\n\
<p class=\"table-body\">\n\
Time in seconds\n\
</p>\n\
<div>\n\
<a name=\"GUID-7A527536-0D0E-4191-9BDC-F8FFFFC93331\"></a>\n\
<div class=\"note-note\">\n\
<span class=\"label label-target-language\">Note: </span>\n\
<p>\n\
<a name=\"GUID-43BCD405-B2CE-4D2B-BD2B-E4A3B71E8DFF\"></a>Only applicable to shading overrides created using an <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span>. The <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span> must support auto-binding of <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span>s to the shader uniform parameters.\n\
</p>\n\
<p>\n\
<a name=\"GUID-F5ED1133-AEAD-495F-A76D-36386F9335B8\"></a>That is, the <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span> must create an <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span> for each uniform parameter, retrieve each <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span> value based on its associated semantic, and bind this value to the shader uniform parameter.\n\
</p>\n\
<p>\n\
<a name=\"GUID-AC42EAAD-20F6-4D86-ABB5-56DB939A6FD7\"></a>This is automatically done by the <span class=\"code\">dx11Shader</span> and <span class=\"code\">glslShader</span> plug-ins.\n\
</p>\n\
<p>\n\
<a name=\"GUID-11BD2A4D-C78A-4790-BE30-DF21FE925299\"></a>In addition, Time and Frame are only available when the effects file is loaded from the <span class=\"code\">glslShader</span> plug-in.\n\
</p></div></div>\n\
</td>\n\
<td class=\"table-body\">\n\
Float\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-15566208-8077-4624-95EE-2572E7D0D01D\"></a>\n\
<p class=\"table-body\">\n\
Frame\n\
</p>\n\
<a name=\"GUID-B561D443-7B30-465C-A887-BD8671B9DFDA\"></a>\n\
<p class=\"table-body\">\n\
FrameNumber\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-016C3436-E901-4E69-82F7-D0241BFD780B\"></a>\n\
<p class=\"table-body\">\n\
Frame in frame units\n\
</p>\n\
<div>\n\
<a name=\"GUID-4A1D6F0E-E938-4C54-AA2E-3DD70653F974\"></a>\n\
<div class=\"note-note\">\n\
<span class=\"label label-target-language\">Note: </span>\n\
<p>\n\
<a name=\"GUID-3E1E1915-EA98-47DB-86FC-565A01C436F6\"></a>Only applicable to shading overrides created using an <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span>. The <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span> must support auto-binding of <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span>s to the shader uniform parameters.\n\
</p>\n\
<p>\n\
<a name=\"GUID-918BBA9E-89CF-4A47-A51B-96C46D368944\"></a>That is, the <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride</a></span> must create an <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span> for each uniform parameter, retrieve each <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MUniformParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_uniform_parameter.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUniformParameter</a></span> value based on its associated semantic, and bind this value to the shader uniform parameter.\n\
</p>\n\
<p>\n\
<a name=\"GUID-F263A79F-E5FB-460A-BFF6-CEE60230F0E1\"></a>This is automatically done by the <span class=\"code\">dx11Shader</span> and <span class=\"code\">glslShader</span> plug-ins.\n\
</p></div></div>\n\
</td>\n\
<td class=\"table-body\">\n\
Int\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
AlphaTestFunction\n\
</td>\n\
<td class=\"table-body\">\n\
The alpha test comparison function<a name=\"GUID-EE159836-FCD7-461F-BA2D-D7AAB40CCDFF\"></a>\n\
<p class=\"table-body\">\n\
1 = Never\n\
</p>\n\
<a name=\"GUID-95FD92A2-0231-457E-8EB2-17CD9002FB9B\"></a>\n\
<p class=\"table-body\">\n\
2 = Less\n\
</p>\n\
<a name=\"GUID-A7DAF2A6-1B0C-485D-8793-2BBD923DC50B\"></a>\n\
<p class=\"table-body\">\n\
3 = Equal\n\
</p>\n\
<a name=\"GUID-6F3FBB25-9802-45FE-880E-573068AE5A6E\"></a>\n\
<p class=\"table-body\">\n\
4 = Less or Equal\n\
</p>\n\
<a name=\"GUID-9EDDB7C4-D4AF-42EA-9FBF-F7D00DFDFED9\"></a>\n\
<p class=\"table-body\">\n\
5 = Greater\n\
</p>\n\
<a name=\"GUID-1D2866EE-F35F-43E6-856E-1F0B292E583D\"></a>\n\
<p class=\"table-body\">\n\
6 = Not Equal\n\
</p>\n\
<a name=\"GUID-ACA9C7F3-5F04-4325-B2B9-DDCFD2EFE988\"></a>\n\
<p class=\"table-body\">\n\
7 = Greater or Equal\n\
</p>\n\
<a name=\"GUID-8EA6365F-C996-4DDB-8CDE-2D2D06D06339\"></a>\n\
<p class=\"table-body\">\n\
8 = Always\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Int\n\
</td>\n\
<td class=\"table-body\">\n\
Alpha Test\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
AlphaTestReference\n\
</td>\n\
<td class=\"table-body\">\n\
The alpha test reference value, in the range of (0.0, 1.0)\n\
</td>\n\
<td class=\"table-body\">\n\
Float\n\
</td>\n\
<td class=\"table-body\">\n\
Alpha Test\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
RelativeViewportDimensions\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies relative viewport dimensions\n\
</td>\n\
<td class=\"table-body\">\n\
Float2\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
MayaReceivesShadowOn\n\
</td>\n\
<td class=\"table-body\">\n\
Denotes whether the object receives shadows\n\
</td>\n\
<td class=\"table-body\">\n\
Bool\n\
</td>\n\
<td class=\"table-body\">\n\
Item\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
EnableXRayComp\n\
</td>\n\
<td class=\"table-body\">\n\
Denotes whether xray component mode is enabled\n\
</td>\n\
<td class=\"table-body\">\n\
Bool\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
MayaViewportModes\n\
</td>\n\
<td class=\"table-body\">\n\
Viewport modes<a name=\"GUID-14E5AA82-FCDB-49E7-970D-1BCB5B4BBE88\"></a>\n\
<p class=\"table-body\">\n\
0 = Does not contain bounding box\n\
</p>\n\
<a name=\"GUID-70D3C9DE-99F4-4F92-8BBB-97530384DDA5\"></a>\n\
<p class=\"table-body\">\n\
1 = Contains bounding box\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Int\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
FogEnabled\n\
</td>\n\
<td class=\"table-body\">\n\
Denotes whether hardware fog is enabled\n\
</td>\n\
<td class=\"table-body\">\n\
Bool\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
FogMode\n\
</td>\n\
<td class=\"table-body\">\n\
Hardware fog falloff mode<a name=\"GUID-2087A985-C505-4130-8D04-BFE0D8AEC1F7\"></a>\n\
<p class=\"table-body\">\n\
0 = Linear\n\
</p>\n\
<a name=\"GUID-6F568841-FDA5-4D84-BE55-C8E2494D794B\"></a>\n\
<p class=\"table-body\">\n\
1 = Exponential\n\
</p>\n\
<a name=\"GUID-6404C7B5-AAED-4B52-BA30-81473C88DB54\"></a>\n\
<p class=\"table-body\">\n\
2 = Exponential-squared\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Int\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
FogStart\n\
</td>\n\
<td class=\"table-body\">\n\
Hardware fog start z-distance in view space\n\
</td>\n\
<td class=\"table-body\">\n\
Float\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
FogEnd\n\
</td>\n\
<td class=\"table-body\">\n\
Hardware fog end z-distance in view space\n\
</td>\n\
<td class=\"table-body\">\n\
Float\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
FogDensity\n\
</td>\n\
<td class=\"table-body\">\n\
Hardware fog density\n\
</td>\n\
<td class=\"table-body\">\n\
Float\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
FogColor\n\
</td>\n\
<td class=\"table-body\">\n\
Hardware fog color\n\
</td>\n\
<td class=\"table-body\">\n\
Float4\n\
</td>\n\
<td class=\"table-body\">\n\
Frame\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<blockquote>\n\
<p><strong>Note:</strong> FL denotes that the semantic is also frame locale dependant.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";