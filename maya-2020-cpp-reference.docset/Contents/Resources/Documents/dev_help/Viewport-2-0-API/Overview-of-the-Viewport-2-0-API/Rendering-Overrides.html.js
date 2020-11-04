var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Rendering Overrides</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Rendering Overrides</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"rendering-overrides\"></a></div>\n\
<p>This section describes the new rendering interface. It is intended to subsume the existing hardware “multi-pass” interface which is exposed in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPx3dModelView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px3d_model_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPx3dModelView</a></span>.</p>\n\
<p>Main Features of the New Interface</p>\n\
<ul>\n\
<li>To allow for control of the render loop at the start of a refresh or batch render.</li>\n\
<li>To be able to have explicit rendering “operations” (e.g. a scene render) and to be able to use an arbitrary number of such render operations.</li>\n\
<li>To be able to have explicit “render targets” (e.g. color, depth stencil buffers).</li>\n\
<li>To allow for a sense of “context” as to where the rendering will occur (e.g. which viewport).</li>\n\
<li>To allow for render operation “overrides” similar to what is currently available, and allow for future override enhancements.</li>\n\
<li>To have a logical separation of drawing the scene versus the UI element.</li>\n\
<li>To have the ability to access hardware resources.</li>\n\
</ul>\n\
<p>Key Differences in the New Interface</p>\n\
<ul>\n\
<li>To override or extend how rendering is performed, the level of integration need not be at the view or panel level. That is, a new API view and API panel are not required. The amount of overhead to introduce an override has been greatly reduced.</li>\n\
<li>There is no longer any fixed looping logic where N iterations of a refresh with pre and post callbacks are required.</li>\n\
<li>Instead of intercepting callbacks from the internal render loop logic, the logic now allows the API writer to queue a set of rendering operations.</li>\n\
<li>Render target or output buffers need no longer be externally defined and are presented as formal rendering resources.</li>\n\
<li>The mechanism has been standardized to work both for interactive as well as batch rendering.</li>\n\
<li>A render logic description is formally defined by the user for the renderer to execute. This can be thought of as “retained” versus “immediate” mode execution.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"key-concepts-and-constructs\"></a><h2 id=\"key-concepts-and-constructs\">Key Concepts and Constructs</h2></div>\n\
<div class=\'section\'><a id=\"render-override\"></a><h3 id=\"render-override\">Render Override</h3></div>\n\
<p>There is a formal notion of a rendering override. An override will override all rendering per refresh for interactive rendering or per frame output for batch rendering. An override is composed of a set of rendering operations. The key class for this is <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderOverride</a></span>.</p>\n\
<div class=\'section\'><a id=\"render-operation\"></a><h3 id=\"render-operation\">Render Operation</h3></div>\n\
<p>An operation can be loosely thought of as being equivalent to a “pass” in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPx3dModelView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px3d_model_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPx3dModelView</a></span> pass based system, except that they are explicitly defined. The key class for this is <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderOperation</a></span>. There can be predefined operations as well as custom user operations. The basic operation set includes:</p>\n\
<ul>\n\
<li>A background clear operation (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MClearOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_clear_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MClearOperation</a></span>)</li>\n\
<li>A 3D scene render operation (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MSceneRender</a></span>)</li>\n\
<li>A 2D HUD (heads up display operation) (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MHUDRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_h_u_d_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_h_u_d_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MHUDRender</a></span>)</li>\n\
<li>A user defined operation (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUserRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_user_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_user_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MUserRenderOperation</a></span>)</li>\n\
<li>A quad blit operation (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQuadRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_quad_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_quad_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MQuadRender</a></span>) which renders a 2D screen space quad</li>\n\
<li>A target presentation operation (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPresentTarget\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_present_target.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_present_target.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPresentTarget</a></span>)</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"render-target-overrides\"></a><h3 id=\"render-target-overrides\">Render Target Overrides</h3></div>\n\
<p>Render targets are now formalized. This is so that there is a managed and recognized set of resources that both the renderer and the plugin writer can use. Being formalized also means that the resource can be defined in a draw API agnostic way (e.g. for OpenGL and DirectX). The interface presented is a render target description, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderTargetDescription\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_target_description.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderTargetDescription</a></span>. The descriptions are used to describe desired render target inputs or outputs for rendering operations.</p>\n\
<ul>\n\
<li>An access to the device level resource is provided so that users can write their own custom code which accesses targets.</li>\n\
<li>It is still possible to use user defined render targets but device state must be restored or the renderer’s render target state will be corrupted. This is not a new restriction.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"shader-overrides\"></a><h3 id=\"shader-overrides\">Shader Overrides</h3></div>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MShaderManager</a></span> interface allows access to some simple stock shaders as well as access to file based effects. These shaders can then be applied as overrides in one of two places:</p>\n\
<ul>\n\
<li>As per object shader overrides for 3d scene renders.</li>\n\
<li>As per quad render shader for quad blits.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"state-overrides\"></a><h3 id=\"state-overrides\">State Overrides</h3></div>\n\
<p>State setting has been formalized and is managed by the renderer. State setting can be performed per render operation.</p>\n\
<div class=\'section\'><a id=\"general-scene-and-user-operation-overrides\"></a><h3 id=\"general-scene-and-user-operation-overrides\">General Scene and User Operation Overrides</h3></div>\n\
<p>Basic overrides formally presented include:</p>\n\
<ul>\n\
<li>Camera specification</li>\n\
<li>World or scene filtering</li>\n\
<li>Object type filtering</li>\n\
<li>Draw mode filtering (e.g. filled, wire, component)</li>\n\
<li>Access to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">M3dView</a></span> for interactive rendering which will allow the user to use other existing overrides.</li>\n\
<li>For batch rendering, the user also has access to hardware and common render globals.</li>\n\
<li>As custom user operations are available, users are still free to perform their own direct drawing with the restriction that they restore the previous device level state. The same restriction currently applies for all existing hardware rendering interfaces, including <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPx3dModelView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px3d_model_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPx3dModelView</a></span> overrides.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"render-logic-building\"></a><h2 id=\"render-logic-building\">Render Logic Building</h2></div>\n\
<p>The main steps for defining a render override are:</p>\n\
<ol>\n\
<li>Derive a custom render override.</li>\n\
<li>Register the override with the renderer. Any number of overrides can be registered.</li>\n\
<li>Set the active override for a viewport or for batch rendering.</li>\n\
<li>Set up a set of render operations and overrides as an ordered list. If the render logic is a graph, then this can be broken down into a series of render operations.</li>\n\
<li>Provide the list of operations when queried and update parameters per operation as required.</li>\n\
<li>Custom operations and custom overrides have the ability to intercept intermediate and final render targets and may do so to use the resources as required (e.g. to save to disk, or to route to custom rendering code).</li>\n\
</ol>\n\
<div class=\'section\'><a id=\"key-restrictions\"></a><h2 id=\"key-restrictions\">Key Restrictions</h2></div>\n\
<ul>\n\
<li>Scene modifications may not occur during rendering. This is not a new restriction.</li>\n\
<li>Currently, there is no formal mechanism available for providing feedback (looping) overrides to specific points in a scene render, as the interfaces for those specific points do not yet exist. For example, looping shadow maps back to custom lights is currently not possible, as a custom light interface does not currently exist.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";