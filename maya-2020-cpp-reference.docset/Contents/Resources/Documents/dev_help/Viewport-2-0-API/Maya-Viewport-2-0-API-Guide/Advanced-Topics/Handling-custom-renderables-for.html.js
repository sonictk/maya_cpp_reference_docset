var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Handling custom renderables for object overrides</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Handling custom renderables for object overrides</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"handling-custom-renderables-for-object-overrides\"></a></div>\n\
<p>This section focuses on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShape</a></span> which are found in Viewport 1.0 (default viewport), and the mapping of concepts to Viewport 2.0 interfaces. The focus is on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span>, and any notable differences in approach between the two interfaces are highlighted.</p>\n\
<p>The main goal is to show how custom renderables can be instantiated for “custom” drawing.</p>\n\
<div class=\'section\'><a id=\"viewport-1.0-only-interfaces\"></a><h2 id=\"viewport-1.0-only-interfaces\">Viewport 1.0 only interfaces</h2></div>\n\
<p>The Viewport 2.0 API only provides a rendering / drawing interface.</p>\n\
<p>Pre-existing Viewport 1.0 interfaces should be used for selection and component handling. This includes methods such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::select()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#ad847ba49d36027fa9ae1184695b248b6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#aa3a97433ccea1118606c281d5a033414&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::select()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::snap()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#a6589cad7b86cc9f0925b14385c609e62&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#ac110532dfaa73e7db2f7fe1e5e7b0297&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::snap()</a></span>.</p>\n\
<p>Drawing into the UV Editor is unchanged. The existing Viewport 1.0 methods should be used, as there are no Viewport 2.0 specific interfaces for doing the same; for example, methods such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::drawUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#acd02e3ec15c17ad6aa4243492cf9ae4a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a20151fb2bda26168b27b70759116bdff&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::drawUV()</a></span>/<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::canDrawUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#a2c71c259ae0919e4ef14d87e5a4c3546&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a81c7af7f3fec233fafc9f08e7d1c7285&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::canDrawUV()</a></span>.</p>\n\
<p>Viewport 1.0 methods for overriding associated materials are not required for Viewport 2.0 rendering. This includes <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::material()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#a94d753f8b614df1c5408e36219c06577&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a52a6706cd10ac4bb1feaf0947468b1f3&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::material()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::materials()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#aebced9a23459227e5fff95e077c69804&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#aefcd9f01835078b3d7e42ed08cab9e32&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::materials()</a></span>.</p>\n\
<div class=\'section\'><a id=\"renderables-render-items\"></a><h2 id=\"renderables-render-items\">Renderables (render items)</h2></div>\n\
<p>The <strong>renderable</strong> is the main element of concern.</p>\n\
<p>For Viewport 1.0, these are represented as draw requests (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRequest\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_request.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_draw_request.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRequest</a></span>). For Viewport 2.0, the closest construct to this is a <strong>render item</strong> (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>). A collection of these can be thought of as representing the total set of renderables for an object.</p>\n\
<p>For Viewport 1.0, there are no predefined <span class=\'code\'>MDrawRequests</span>.</p>\n\
<p>For Viewport 2.0, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>s that represent drawing using the assigned material(s) for an object are provided. We call these <strong>material</strong> render items. Anything not predefined by the renderer is considered to be <strong>custom</strong>.</p>\n\
<p>The Viewport 1.0 paradigm is to create and return draw requests to the appropriate collection and then explicitly draw the requests at draw time. The Viewport 2.0 paradigm is to create, <strong>update</strong> and/or selectively <strong>override</strong> existing render items and return them to the appropriate collection for geometry update and eventual internal drawing.</p>\n\
<p>The persistent nature of render items entails considering up-front creation of the total set of render items that will be used.</p>\n\
<div class=\'section\'><a id=\"provided-render-items\"></a><h2 id=\"provided-render-items\">Provided render items</h2></div>\n\
<p>Viewport 2.0 renderer maintains material and bounding box render items.</p>\n\
<ul>\n\
<li>For material render items, only geometry requirements filling is required.</li>\n\
<li>For bounding box render items, no additional coding is required.</li>\n\
</ul>\n\
<p>It is possible, but not necessary, to override the shaders used for material render items. It is also possible to disable these render items and replace them with custom render items.</p>\n\
<p>Note that the handling of objects that do not have any shader assignments is left up to the plug-in. In Viewport 1.0, the material interfaces return a default material. In Viewport 2.0, the fallback for non-plug-in objects is to show a wireframe. Because a default wireframe render item cannot be provided, this (or an alternative appropriate fallback) must be explicitly provided by the plug-in.</p>\n\
<div class=\'section\'><a id=\"custom-render-items\"></a><h2 id=\"custom-render-items\">Custom render items</h2></div>\n\
<p>If only material and bounding box render items are provided, then the question arises as to when additional “custom” render items may be required. This is highly dependent on the type of plug-in being written, but one common situation is the rendering of non-material render items; another the overriding of existing material or bounding box drawing.</p>\n\
<div class=\'section\'><a id=\"non-material-render-items\"></a><h3 id=\"non-material-render-items\">Non-material render items</h3></div>\n\
<p>In general, some minimal support for wireframe display mode drawing should be implemented for a custom shape. Anything else is dependent on the plug-in and the types of additional UI elements that must be drawn.</p>\n\
<p>The rule-of-thumb is that: each additional variation of how or when to render should result in a new render item instance. A scan of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> shows the variations possible.</p>\n\
<p>The following are some of the main variants:</p>\n\
<ol>\n\
<li><p>The render item is specific to a display mode (for example, wireframe versus shaded/textured modes). It is important to note that the display mode is matched against the current display modes used for rendering and suitably filtered out as necessary. For example: a shaded mode item is not drawn when the viewport is in wireframe mode.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig67_resized.png\' title=\'\' /></div>\n\
<p>Figure 78</p>\n\
<p>A basic pipeline showing how draw mode filtering can potentially remove items from proceeding to the draw phase. This generally supersedes any filtering that is based on whether an item is considered to be “shaded” or “non-shaded”.</p></li>\n\
<li>The primitive type needs to be different. For example, one render draws lines and another draws points.</li>\n\
<li>The shader instance (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>) needs to be different. For example, usage of a stipple line shader and a solid line shader would require different render items. Refer to <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Handling-custom-renderables-for.html#choosing-shaders-and-shader-instances\' title=\'\'>4.4.4.3 Choosing shaders and shader instances</a> for more information.</li>\n\
<li>The shader parameter values need to be different. For example, two line shader instances need to have different colors. Refer to <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Handling-custom-renderables-for.html#choosing-shaders-and-shader-instances\' title=\'\'>4.4.4.3 Choosing shaders and shader instances</a> for more information.</li>\n\
<li><p>The depth priority needs to be different.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig68.png\' title=\'\' /></div>\n\
<p>Figure 79</p>\n\
<p>Logical illustration of the effect of different depth priority settings that move the render item towards the active camera. “Custom” priorities can be used instead of stock ones. The arrow shows the direction of the camera (viewer).</p></li>\n\
<li><p>The streams of geometry data required by the shader need to be different. Variations include number of streams and stream description.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"pre-planning-render-item-sets\"></a><h3 id=\"pre-planning-render-item-sets\">Pre-planning render item sets</h3></div>\n\
<p>It is advisable to pre-plan all the render items that could possibly be used at any given time during the interaction with the plug-in object. This working set of items help determine the dependent resources required, including: shaders, textures and geometry, and the amount of reuse that may be possible.</p>\n\
<p>In general, the render item set remains fixed, with only parameter changes and enabling/disabling occurring for various items during the lifetime of the plug-in.</p>\n\
<p>Having a large set of render items should not be a concern with respect to performance, given the assumption that variations are being created, and they are not all enabled at the same time. If large numbers of the same variation is required, then the plug-in writer may want to consider using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span> as opposed to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>.</p>\n\
<p>For UI drawing, it is best to minimize the number of overlapping elements to avoid overdraw cost. If this cannot be avoided, then it is best to determine the number of elements that may be enabled simultaneously. This drives the number of required render item variants with different depth priorities. For example, the drawing of an active line component on top of a dormant line component, on top of a wireframe requires three render items even though they may be identical in all respects except for depth priority.</p>\n\
<p>In the case where render items are required per instance of a DAG object, it is worthwhile to keep in mind that different render items can be created per instance. It is up to the plug-in writer to maintain any explicit associations between items and instances.</p>\n\
<div class=\'section\'><a id=\"choosing-shaders-and-shader-instances\"></a><h3 id=\"choosing-shaders-and-shader-instances\">Choosing shaders and shader instances</h3></div>\n\
<p>The options for choosing a shader for a render item can vary in complexity and application. Regardless of which option is chosen, it is best to separate shaders from geometry handling.</p>\n\
<p>The simplest option is to use stock shaders provided via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderManager</a></span>. These provide default configurations for shaders that can be used for <em>point</em>, <em>line</em>, and <em>triangle</em> UI drawing, as well as a few stock material shaders. Stock shader instances are specific to the primitive type; for example, a dashed line shader would be inappropriate for rendering triangles.</p>\n\
<p>Using custom effect file shaders is also possible for greater control but requires implementations for all draw APIs (for example, DirectX11, and OpenGL). One reason for using custom shaders is to have a more complex set of parameters that can allow for dynamic updates as opposed to a larger set of static render item variants.</p>\n\
<p>Fragment based shaders are best suited for integration with Maya&#39;s shading networks and are not recommended for UI drawing. Using built-in fragments is a simple way to get full shading and lighting support.</p>\n\
<p>For the most flexibility, shaders should not be owned and controlled by geometry overrides but instead separate <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>s should be used. Thus geometry overrides are <strong>geometry handlers</strong> and shader overrides are <strong>material handlers</strong>.</p>\n\
<p>Each shader has a set of parameters and geometry requirements associated with it. Each instance of a shader has different shader parameters and/or requirements, resulting in different render items for each shader instance.</p>\n\
<p>Depending on the frequency of updates, it may be easier to attach callbacks to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>s for parameter updating. For example, this would allow changing the thickness parameter of a line shader during a callback, as opposed to creating two separate shader instances (hence render items) with different line thickness parameter values.</p>\n\
<p>In the case where different streams are bound to the same set of geometry requirements, different shader instances are not required, as geometry binding is performed dynamically.</p>\n\
<div class=\'section\'><a id=\"handling-change\"></a><h2 id=\"handling-change\">Handling change</h2></div>\n\
<div class=\'section\'><a id=\"handling-display-status-changes\"></a><h3 id=\"handling-display-status-changes\">Handling display status changes</h3></div>\n\
<p>By default, the plug-in gets called to update its UI render items when the display status of the associated DAG objects changes. This occurs in the following situations:</p>\n\
<ul>\n\
<li>The object’s selection state changes: dormant / active / highlight, active-component are a few of the possible states.</li>\n\
<li>The object&#39;s per object visibility or template status changes.</li>\n\
<li>The object’s per object draw override options change.</li>\n\
<li>The object display layer association changes or the options on associated display layer changes</li>\n\
</ul>\n\
<p>Selection state changes generally imply a change in the color for a render item. There can be two approaches: either multiple render items can be created for each selection state; or, a single one with sufficient shader parameters can be used. If geometry is generally shared, then the inherent cost of having multiple items is small. If the draw mode differs, then a different render item is required. For example, a different item would be used for dormant versus active wireframe as the first only draws in wireframe mode, while the latter draws in all draw modes.</p>\n\
<p>The actual control of colors can generally be handled by utilities such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryUtilities::wireframeColor()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#a6221bc7407b14246b14f79a751496276&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a4ab2eef7f034435bfec001c32f86bc7a&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryUtilities::wireframeColor()</a></span>, which returns the correct color, taking into account current object state.</p>\n\
<p>For object visibility, material render items are automatically handled, as are the UI render items. However, template status change can be considered to be a visibility change with respect to certain render items. For example, component render items should be manually disabled to be consistent with Maya’s internal behaviour. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryUtilities::displayStatus()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#aa2838b92c9f7db4a810690a986199134&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a69e3c934b7c97435c303c608f592eba8&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryUtilities::displayStatus()</a></span> is a utility which is useful for checking status.</p>\n\
<p>For draw overrides (exposed in the Attribute Editor Draw Overrides tab), template control needs to be handled as well as custom color overrides. The same utilities mentioned above may be used.</p>\n\
<p>Display layers can invoke updates for templating, as well as color overrides.</p>\n\
<p>Any additional items that are not controlled via Maya have its own internal plug-in logic and corresponding update logic. For example, adding the display of face centers could be an attribute on the node that drives the display of a custom render item to show these centers.</p>\n\
<div class=\'section\'><a id=\"handling-of-display-mode-changes\"></a><h3 id=\"handling-of-display-mode-changes\">Handling of display mode changes</h3></div>\n\
<p>By default, an override is not called when the display mode for rendering changes. This is important to know as this means that all render items for all possible display modes need to be taken into consideration. The recommended approach is to create all render items with the appropriate parameters and handle any updates not related to display mode as required at “update” time.</p>\n\
<p>An important difference between geometry overrides and sub-scene overrides is that sub-scene overrides receive constant update calls where a frame context is provided. In this case, render items can be created or modified on-demand.</p>\n\
<div class=\'section\'><a id=\"general-state-monitoring\"></a><h3 id=\"general-state-monitoring\">General state monitoring</h3></div>\n\
<p>For general events that occur in Maya, it is up to the plug-in to determine which events to monitor and determine if they require a custom render item update. For example, view-dependent render items need to perform their own camera monitoring (for example, via <span class=\'code\'>MUIMessage</span>).</p>\n\
<div class=\'section\'><a id=\"geometry-handling\"></a><h3 id=\"geometry-handling\">Geometry handling</h3></div>\n\
<p>Custom render items are named and thus there is a set of named render items to manage. There is also the possibly of the requirement for geometry streams of the same semantic but with different names.</p>\n\
<p>For example, two streams of positions (semantic) may be required for the case where a material render item draw and a render item that draws face normal are required. The first could be named “My shaded item” and the second “My face center item”. The latter could call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::setShader()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ad283b157fa4f6c40bceb9d398c53a72a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#ade21e8af0c7a5d180b4292ec546303ad&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::setShader()</a></span> with a custom stream name of “face center”.</p>\n\
<p>Additionally, as no explicit association is given between streams and render items, it can sometimes be useful to name streams if it is required that they be used for specific custom render items. There are trade-offs, as each named stream may result in additional geometry data and indexing allocation being required. Also, geometry updates must handle the fact that stream naming is per render item. That is, it applies to all streams for an item. An example usage is given in <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Handling-custom-renderables-for.html#basic-component-handling\' title=\'\'>4.4.5.5 Basic component handling</a>.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig69_resized.png\' title=\'\' /></div>\n\
<p>Figure 80</p>\n\
<p>The figure above shows three render items on the left. The top-most item is for drawing face centers. It requires only positions and has a custom name of &quot;face center&quot;. Next is an item to draw active vertices and requires positions and has a custom stream name of &quot;Active Vertices&quot;. The last is a material render item which requires positions and normal. There are no custom names. When the final cumulative set of requirements comes back for which the override must provide geometry, there are descriptions for 4 streams of data required (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span>): 3 position streams and one normal stream. The position streams could be shared for material and active vertex display.</p>\n\
<p>No assumptions should be made as to when data is required, and as such, all requirements should always be fulfilled. The renderer may attempt to provide some default data if the appropriate data is not provided, but there is no guarantee that the appropriate data can be provided. For example, one viewport panel may require the data for a wireframe render item in addition to a shaded one if the viewport configuration has one panel in shaded mode and the other with wire-on-shaded mode enabled. The shaded render item may require tangents to be provided.</p>\n\
<div class=\'section\'><a id=\"basic-component-handling\"></a><h3 id=\"basic-component-handling\">Basic component handling</h3></div>\n\
<p>When components have been modified, an override should extract the appropriate component information from the plug-in object at DG evaluation time. For example, component indexing could be cached. (For <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>, this is during <span class=\'code\'>updatedDG()</span>). This indexing can be used to provide the primitive indexing for the render items associated with the supported component. For example, for a single indexed component such as vertices, the vertex identifiers could be cached.</p>\n\
<p>For each component type, the override can have one or more render items created depending on the display variations required (For <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>, this is during <span class=\'code\'>updateRenderItems()</span>). In the aforementioned vertex component example, there can be one item for displaying unselected vertices and one item for selected vertices. Each, for example, can have a different color, size and/or depth priority (if they overlap).</p>\n\
<p>A stock shader instance appropriate for point drawing could be associated with each render item. The unselected vertex render item would only apply when in wireframe mode so that draw mode should be associated with it. The selected vertex render item would be set to draw in shaded, texture and wireframe modes since it can be seen in all of these modes. By default, the items would be enabled when vertex display is enabled, or when the object’s display status is in “hilite” mode.</p>\n\
<p>At geometry update time (for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>, this is during <span class=\'code\'>populateGeometry()</span>), the appropriate stream data is requested based on the shader geometry requirements. Depending on the component indexing evaluated previously, the appropriate primitive indexing needs to be created/updated.</p>\n\
<p>For sub-scene overrides, the entire transaction would be handled in the <span class=\'code\'>update()</span> method.</p>\n\
<p>As an example of using named streams, one position stream may be used for unselected drawing and another for selected vertex drawing. On the plus side, the number of selected vertices could be small resulting in reduced indexing and data transfer. On the minus side, an additional stream needs to be allocated, increasing memory cost. Re-using the same stream would mean re-using the same memory, with the potential for complex indexing computation and overdraw.</p>\n\
<div class=\'section\'><a id=\"custom-ui-drawing-example\"></a><h2 id=\"custom-ui-drawing-example\">Custom UI drawing example</h2></div>\n\
<p>As an example, a plug-in can create custom render items for the following:</p>\n\
<ul>\n\
<li>Dormant wireframe draw</li>\n\
<li>Active wireframe draw</li>\n\
<li>Dormant vertex draw</li>\n\
<li>Active vertex draw</li>\n\
<li>Shaded template wireframe draw</li>\n\
<li>Proxy drawing when no shader is assigned to the DAG object</li>\n\
</ul>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig70.png\' title=\'\' /></div>\n\
<p>Figure 81</p>\n\
<p>Green boxes represent areas that the plug-in would create and manage. White boxes are provided by the renderer.</p>\n\
<p>The following are example parameters of the items illustrated above and their proposed update frequency:</p>\n\
<ul>\n\
<li>Depth priority: Uniqueness of the item depends on this parameter; so, would be set at creation time.</li>\n\
<li>Draw mode: Uniqueness of the item depends on this parameter; so, would be set at creation time. Just as the active and dormant wireframe items would be set to only show in wireframe mode, a shaded template wireframe item is specifically created to handle drawing of template wireframe when in shaded mode.</li>\n\
<li>Color: This is a shader parameter that can be dynamically set at render item update time. As an example, the color would update depending on the current object display status.</li>\n\
<li>Point size: For the same reasons as color, this can be dynamically set at render item update time.</li>\n\
</ul>\n\
<p>The crescent “container” shows how logically both geometry and subscene override render items are collected into a set of render items. The main difference is that subscene override container classes are explicitly exposed in the API.</p>\n\
<p>The following are some example user workflows and how the plug-in could handle their render items:</p>\n\
<ol>\n\
<li>User goes into component selection mode while in shaded mode:\n\
<ol>\n\
<li>The object is in highlight mode so the dormant wireframe item should be enabled and the color set appropriately.</li>\n\
<li>The dormant vertex render item should be enabled and the color set appropriately.</li>\n\
<li>The active wireframe item should be disabled.</li>\n\
<li>The active vertex item should be disabled.</li>\n\
<li>The shaded template item should be disabled.</li>\n\
<li><p>The shaded proxy item should be disabled.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The material shaded item is enabled internally, and was enabled when entering into shaded mode.</p>\n\
</blockquote></li>\n\
</ol></li>\n\
<li>The user then selects some vertices:\n\
<ol>\n\
<li>The active vertex item should be enabled. The active components should be parsed to set the appropriate indexing to show a subset of vertices.</li>\n\
</ol></li>\n\
<li>The user switches back to object selection mode:\n\
<ol>\n\
<li>Dormant and active vertex items are disabled.</li>\n\
<li>Active wireframe item is enabled.</li>\n\
<li>The dormant wireframe item is disabled.</li>\n\
</ol></li>\n\
<li>The user switches to wireframe mode:\n\
<ol>\n\
<li>“Nothing” needs to be done in the plug-in as the render items marked to draw in shaded mode are filtered out in the draw pipeline.</li>\n\
</ol></li>\n\
<li>The user sets the object override to make the object template:\n\
<ol>\n\
<li>If there are any custom material render items, they should be disabled. Provided material render items are automatically disabled.</li>\n\
<li>The dormant and active wireframe items should be disabled.</li>\n\
<li>The dormant vertex item should be disabled.</li>\n\
<li>The shaded template item should be enabled and set to the appropriate color depending on whether or not the object is active.</li>\n\
</ol></li>\n\
</ol>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig71.png\' title=\'\' /></div>\n\
<p>Figure 82</p>\n\
<p>From top to bottom, and left to right are the five actions listed above, shown graphically. At all times, all the render items are retained with basic enabling and disabling occurring as well as possible parameter changes such as color. Items in green are enabled while all other render items are disabled.</p>\n\
<p>For geometry overrides, the majority of the handling is done in <span class=\'code\'>updateRenderItems()</span>, for sub-scene overrides in <span class=\'code\'>update()</span>. The SDK plug-in <strong>apiMeshShape</strong> contains example code which contains logic to support workflows like the above, as well as many “standard” workflows.</p>\n\
<div class=\'section\'><a id=\"custom-materials\"></a><h2 id=\"custom-materials\">Custom materials</h2></div>\n\
<p>If custom material rendering is required, then the level of integration is dependent on the interfaces that are used. The following table outlines the main trade-offs associated with each interface. Increased flexibility generally requires more work to be done by the plug-in writer. To a certain extent, simpler shaders can be maintained inside the geometry handler/override.</p>\n\
<p><span class=\'code\'>Fragment</span>, <span class=\'code\'>Effects</span>, and <span class=\'code\'>Stock</span> are options available via the shader manager, and hence supported options are determined by the internal renderer. <span class=\'code\'>Shader Override</span> is <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Fragment Shader</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Effects Shader</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Stock Shader</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Shader Override</em>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Flexibility : Complexity ratio\n\
</td>\n\
<td class=\"table-body\">\n\
High : High\n\
</td>\n\
<td class=\"table-body\">\n\
Medium : Low\n\
</td>\n\
<td class=\"table-body\">\n\
Low : Low\n\
</td>\n\
<td class=\"table-body\">\n\
High : High\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Use case\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-195FD156-172A-4515-875E-7AD44CF3A3F1\"></a>\n\
<p class=\"table-body\">\n\
Generally used to enhance the set of existing fragments.\n\
</p>\n\
<a name=\"GUID-5E6B0A04-ECFB-4841-81F4-4DC12855513D\"></a>\n\
<p class=\"table-body\">\n\
Can be used as “stock” shader but more complex to set up appropriate shading network.\n\
</p>\n\
<a name=\"GUID-7E0DDA34-D3D7-4341-B9A4-C809404EBC25\"></a>\n\
<p class=\"table-body\">\n\
All internal semantic bindings supported.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Self-contained effect which can use default semantic bindings.\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-CFC94058-6A26-4966-B8A7-BA3635C69EDB\"></a>\n\
<p class=\"table-body\">\n\
Simple built in effect is “good enough”.\n\
</p>\n\
<a name=\"GUID-870EA2AC-7D5E-461F-A8AD-30E7F106FA50\"></a>\n\
<p class=\"table-body\">\n\
Useful when plug-in does not want to deal with writing complex UI shaders to replace any previously easy-to-write fixed-function code.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Complex shading support is required beyond what the internal renderer can provide; for example, tessellation shaders.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Render item “type”\n\
</td>\n\
<td class=\"table-body\">\n\
Custom.\n\
</td>\n\
<td class=\"table-body\">\n\
Custom.\n\
</td>\n\
<td class=\"table-body\">\n\
Custom.\n\
</td>\n\
<td class=\"table-body\">\n\
Non-Custom.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Shading graph support\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-D648A865-ABE1-4014-A04C-C8B913235CC5\"></a>\n\
<p class=\"table-body\">\n\
If using individual fragments, none.\n\
</p>\n\
<a name=\"GUID-69940340-5C8E-4957-B4CE-F8FA1F0A0F23\"></a>\n\
<p class=\"table-body\">\n\
If the fragment shader is used in a node as part of a Maya shader tree, then it is fully integrated. If the fragment shader is used to create an <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> then there is no explicit support.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
None.\n\
</td>\n\
<td class=\"table-body\">\n\
None.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in determined.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Lighting support\n\
</td>\n\
<td class=\"table-body\">\n\
Integrated.\n\
</td>\n\
<td class=\"table-body\">\n\
No automatic binding.\n\
</td>\n\
<td class=\"table-body\">\n\
Ignored by design.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in binds via access to draw context.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Post effects support\n\
</td>\n\
<td class=\"table-body\">\n\
Integrated.\n\
</td>\n\
<td class=\"table-body\">\n\
Not integrated.\n\
</td>\n\
<td class=\"table-body\">\n\
Ignored by design.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in provides techniques to support various passes required by effects.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Draw API Support\n\
</td>\n\
<td class=\"table-body\">\n\
If custom, requires implementation for each draw API, otherwise API agnostic.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in writer writes versions for APIs to support.\n\
</td>\n\
<td class=\"table-body\">\n\
Built-in.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in writer writes versions for APIs to support.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Shader stages supported\n\
</td>\n\
<td class=\"table-body\">\n\
Vertex, Pixel.\n\
</td>\n\
<td class=\"table-body\">\n\
Vertex, Pixel, Geometry.\n\
</td>\n\
<td class=\"table-body\">\n\
Not exposed.\n\
</td>\n\
<td class=\"table-body\">\n\
Determined by plug-in.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Separation from geometry handler (override)\n\
</td>\n\
<td class=\"table-body\">\n\
Can be used for shader instances on render items created by geometry handler.\n\
</td>\n\
<td class=\"table-body\">\n\
Can be used for shader instances on render items created by geometry handler.\n\
</td>\n\
<td class=\"table-body\">\n\
Can be used for shader instances on render items created by geometry handler.\n\
</td>\n\
<td class=\"table-body\">\n\
Independent from geometry handling.\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>When dealing with material items, there are generally render items that have “shaded” or “shaded and textured” draw modes being passed to an override. There can be 0 or more sets of these passed in, depending on the number of materials that are assigned to the DAG object.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_5_7_fig80.png\' title=\'\' /></div>\n\
<p>Figure 83</p>\n\
<p>In this example, a DAG object has 2 shaders assigned to different components on the DAG object. It is possible to have 4 “material” render items: one for each component shader to draw in “shaded” draw mode, and one for each component shader to draw in “shaded and textured” mode.</p>\n\
<p>Parameters on these render items can be used as is, modified, or they can be disabled. If disabled, then the plug-in is responsible for providing replacements. If no replacement is provided, then the object appears to “disappear” when in shaded and/or textured modes. Depending on the type of replacement, different levels of integration may result.</p>\n\
<p>When the shader handling complexity for certain render items reaches a point where an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> is required, then the complexity of the geometry handler is reduced, and it only fulfills the geometry requirements for these render items.</p>\n\
<p>For example, the plug-in may require only a built-in Blinn shader with some pre-set shading configuration that is fully integrated. A stock fragment shader can be used in this case. In another example, tessellation may be required for a hair shader. In this case, it is best to not control this from inside the geometry handler and instead create a custom <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> “hair shader node” which “feeds” render items to a custom “hair geometry node” override.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig73.png\' title=\'\' /></div>\n\
<p>Figure 84</p>\n\
<p>The various possible options are all shown at once.</p>\n\
<p>The renderer provided (material) render item is shown uncoloured. There could be a mix of internal shaders and plug-in shaders used to derive these items. Some nodes may supply a custom fragment shader or a shader override may be associated. The geometry handler (override) receives these as non-custom render items.</p>\n\
<p>Custom render items (in green) can be instantiated with shader instances which are created via the shader manager using <span class=\'code\'>fragment</span>, <span class=\'code\'>stock</span> or <span class=\'code\'>effects files</span> interfaces.</p>\n\
<div class=\'section\'><a id=\"ui-draw-manager\"></a><h2 id=\"ui-draw-manager\">UI Draw Manager</h2></div>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> class provides a convenience interface for queuing additional UI drawing that are generally not associated with being part of an object. The “drawables” which may be queued can be thought of as being roughly equivalent to render items.</p>\n\
<p>A direct implication of using the manager is that the “drawables” are never persistent and as such, the number of drawables queued via this interface should be kept relatively small. If more items are required or the data content is large, then interfaces such as the <span class=\'code\'>mesh()</span> call be used. Custom render items are otherwise recommended.</p>\n\
<p>For example, for drawing a large number of vertices on a plug-in object, a custom render item would be recommended over drawing individual points in the draw manager. However for drawing a 3d or 2d label on an object, the draw manager would be a better choice.</p>\n\
<p>One other aspect to consider is that the UI drawn via the manager may draw at a fixed place within the overall pipeline and with a more rigid set of pre-defined drawing properties.</p>\n\
<div class=\'section\'><a id=\"effects-and-context-interaction\"></a><h2 id=\"effects-and-context-interaction\">Effects and context interaction</h2></div>\n\
<p>By default, render items used for UI drawing (lines, points) are excluded from scene effects such as screen-space ambient occlusion, motion blur, and depth-of-field. Additionally, they do not, in general, cast or receive shadows. Render items using internal material shader instances participate in these effects.</p>\n\
<p>Effects drawing is performed within some drawing context.</p>\n\
<p>Geometry overrides are never passed any context information and their behaviour is for the most part independent of context (shader callbacks being the exception). Subscene overrides are provided with context but only a frame context which does not provide access to a pass context. Thus, any items should work independently of the pass from which they are being called.</p>\n\
<div class=\'section\'><a id=\"viewport-1.0-viewport-2.0-comparison-chart\"></a><h2 id=\"viewport-1.0-viewport-2.0-comparison-chart\">Viewport 1.0 / Viewport 2.0 comparison chart</h2></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Viewport 1.0</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Viewport 2.0</em>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Custom renderable creation\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDrawInfo::getPrototype()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_info.html#a7056c15c87746a72e32634d684694bc0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_draw_info.html#aacc2630fb8d6b4124fe6332318eba5ce&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawInfo::getPrototype()</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::Create()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ac74a014f3346d8ddac693b7f034fa228&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::Create()</a></span>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Custom renderable deletion\n\
</td>\n\
<td class=\"table-body\">\n\
Draw requests are transient and released internally every refresh.\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::Destroy()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a52cc993ee0ac8e3718904a1e4537e9f3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::Destroy()</a></span>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Queuing renderables\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::getDrawRequests()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#a27dc15d8c360596ae16b5f3fbd236625&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::getDrawRequests()</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-2953ED3C-986E-4739-AE18-DB3885E85CDF\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">MPxGeometryOverride::updatedDG()</span> and <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::updateRenderItems()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#abad8e8b1f0e06eea32e2be8f97200941&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#ad0628a86aa529c4d7090b80403aa727c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::updateRenderItems()</a></span>.\n\
</p>\n\
<a name=\"GUID-FAC24746-7035-4B0F-9557-F402B3FD1597\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::update()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#ac74e57c764a59c2fa2a8e6a5b72090d5&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#abf0dd7970e24da9f5ba71ccc52d9cfe5&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride::update()</a></span>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Rendering\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::draw()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#adb2bed7a0e37f8760ff6e48bce677443&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::draw()</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
Not applicable. Rendering is done by the renderer.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Material handling\n\
</td>\n\
<td class=\"table-body\">\n\
Template fixed function material provided. Can be overridden at will.\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-4F672FC6-9D5B-4477-BA3D-436F4D1A79D0\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> based. Parameters modifiable at update time. Shader binding (rebinding) to render items possible.\n\
</p>\n\
<a name=\"GUID-9703C409-1ED6-437F-A1AF-2B861428FF3F\"></a>\n\
<p class=\"table-body\">\n\
More complex / decoupled material handling should be done via <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Display Mode Handling\n\
</td>\n\
<td class=\"table-body\">\n\
Display mode is provided as input and can be ignored at will.\n\
</td>\n\
<td class=\"table-body\">\n\
Draw modes are intrinsic part of a render item. Internal logic prune items based on display mode membership.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Geometry Requirements Interface\n\
</td>\n\
<td class=\"table-body\">\n\
No concept.\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-16829389-A27D-4CD4-8E5F-C5885AB04118\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::populateGeometry()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a37c7a59c1e34ed5e0528fe0ac351b519&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#ac05b29377bfffe183789483e59e06275&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::populateGeometry()</a></span>\n\
</p>\n\
<a name=\"GUID-249F52E8-7562-4C27-BE7C-EF1928CA1CAE\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::setGeometryForRenderItem()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a0bf2b383d48c8a4b554376626e4c7a40&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a2ae15bd2e72a1379990ef99d0b313051&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride::setGeometryForRenderItem()</a></span>\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Geometry Requirements Filling\n\
</td>\n\
<td class=\"table-body\">\n\
No concept.\n\
</td>\n\
<td class=\"table-body\">\n\
Explicit stream naming possible for different render items resulting in additional buffer and index handling.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Bounding box draw\n\
</td>\n\
<td class=\"table-body\">\n\
Internally controlled.\n\
</td>\n\
<td class=\"table-body\">\n\
Internally controlled.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Ghosting Control\n\
</td>\n\
<td class=\"table-body\">\n\
Multiple draw calls are made for single set of draw requests.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in controlled. Single set of calls for all ghosts.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Shadow Casting / Receiving\n\
</td>\n\
<td class=\"table-body\">\n\
Control via the &quot;cast&quot; and &quot;receives&quot; attributes on the object, if they exist. Otherwise, no control.\n\
</td>\n\
<td class=\"table-body\">\n\
Control per custom render item, as applicable.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Display Status Query\n\
</td>\n\
<td class=\"table-body\">\n\
Display status information passed in as part of <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDrawInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_info.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_draw_info.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawInfo</a></span>.\n\
</td>\n\
<td class=\"table-body\">\n\
Display status can be queried from <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a></span>, <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MGeometryUtilities\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_utilities.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryUtilities</a></span>.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Component Management\n\
</td>\n\
<td class=\"table-body\">\n\
Passable to draw requests. Plug-in performs management.\n\
</td>\n\
<td class=\"table-body\">\n\
Component information can be passed to draw with appropriate render items. Viewport 1.0 interfaces perform component management.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Visibility Handling\n\
</td>\n\
<td class=\"table-body\">\n\
Prune requests when queuing draw requests or drawing.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in enables / disables render items as required, or sets draw mode to use internal draw mode filtering.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
UV Rendering\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::drawUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#acd02e3ec15c17ad6aa4243492cf9ae4a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a20151fb2bda26168b27b70759116bdff&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::drawUV()</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
No concept. Uses Viewport 1.0 interface.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Selection\n\
</td>\n\
<td class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI::select()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html#ad847ba49d36027fa9ae1184695b248b6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#aa3a97433ccea1118606c281d5a033414&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI::select()</a></span>\n\
</td>\n\
<td class=\"table-body\">\n\
No concept. Uses Viewport 1.0 interface.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
Selection Status Query\n\
</td>\n\
<td class=\"table-body\">\n\
Information found in the <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDrawInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_info.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_draw_info.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawInfo</a></span> class indicates if drawing is occurring for the selection.\n\
</td>\n\
<td class=\"table-body\">\n\
Selection is not part of Viewport 2.0, so not applicable.\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
User interaction feedback\n\
</td>\n\
<td class=\"table-body\">\n\
Some information is available via <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MDrawInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_info.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_draw_info.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawInfo</a></span>.\n\
</td>\n\
<td class=\"table-body\">\n\
Plug-in explicitly monitors for user events of interest.\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"sample-code\"></a><h2 id=\"sample-code\">Sample code</h2></div>\n\
<p>The <em>apiMeshShape</em> developer kit example takes into account a number of workflows related to UI handling as well as for proxy shader handling.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig74.png\' title=\'\' /></div>\n\
<p>Figure 85</p>\n\
<p><em>apiMeshShape</em> sample scene in wireframe mode.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_white_paper_section4_4_fig75.png\' title=\'\' /></div>\n\
<p>Figure 86</p>\n\
<p><em>apiMeshShape</em> sample scene in shaded mode.</p>\n\
<p>The above snapshots demonstrate a number of different custom render items being used. All objects except the planes and the IK chain are drawn using the same plug-in. Included are:</p>\n\
<ul>\n\
<li>Dormant wire items :\n\
<ul>\n\
<li>blue wireframes using default dormant color</li>\n\
<li>red and green wireframes using display layer color</li>\n\
<li>black wireframe using “draw override” color</li>\n\
<li>grey wireframe on template object in wireframe mode</li>\n\
<li>pink wireframe on active-affected object (affected by IK chain)</li>\n\
</ul></li>\n\
<li>Active wire items:\n\
<ul>\n\
<li>White wireframe for lead object.</li>\n\
</ul></li>\n\
<li>Shaded template item:\n\
<ul>\n\
<li>grey wireframe in shaded mode</li>\n\
</ul></li>\n\
<li>Provided material:\n\
<ul>\n\
<li>Red, green, blue, pink Blinn and grey Lambert shaded items</li>\n\
</ul></li>\n\
<li>Proxy shaded item:\n\
<ul>\n\
<li>“Rainbow” colored color-per-vertex dashed line wireframe item</li>\n\
</ul></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"sample-code-for-active-wireframe-handling\"></a><h3 id=\"sample-code-for-active-wireframe-handling\">Sample code for active wireframe handling</h3></div>\n\
<p>The following code demonstrates the handling of an “active wireframe” render item from within <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::updateRenderItems()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#abad8e8b1f0e06eea32e2be8f97200941&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#ad0628a86aa529c4d7090b80403aa727c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::updateRenderItems()</a></span>. The code logic would be similar if used with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span>, except that the render item would belong to the container (<span class=\'code\'>MPxSubSceneContainer</span>) instead of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItemList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItemList</a></span>.</p>\n\
<p>The following is an example method used to set the color parameter on a shader:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Utility to set the color on a shader instance.\n\
void setSolidColor(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a>* shaderInstance, const float *value)\n\
{\n\
  if (!shaderInstance)\n\
    return;\n\
  const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> colorParameterName = &quot;solidColor&quot;;\n\
  shaderInstance-&gt;setParameter(colorParameterName, value);\n\
}\n\
</pre></div><p>During <span class=\'code\'>updateRenderItems()</span>, a new “active” wireframe item is created if it does not already exist. If a new wireframe is created, then the draw mode is set to “all” modes and the item is set to draw above any shaded render item.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// **\\*****\\*****\\*****\\*****\\**** Update during updateRenderItems() **\\*****\\*****\\******\n\
…\n\
// Unique name for active wireframe\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> fSelectedWireframeItemName = “selectedWireframeName”;\n\
// Create the item once. Use enable/disable toggle to control when it should\n\
// be drawn (below)\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem</a>* selectItem = NULL;\n\
int index = list.indexOf( // list = MRenderItemList passed as an input argument\n\
    fSelectedWireframeItemName,\n\
    MHWRender::MGeometry::kLines, // Type of primitive is lines \n\
    MHWRender::MGeometry::kAll); // Draw in all display modes\n\
if (index &lt; 0)\n\
{\n\
    static const bool raiseAboveShaded = true;\n\
    selectItem = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem::Create\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ac74a014f3346d8ddac693b7f034fa228&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem::Create</a>(\n\
        fSelectedWireframeItemName,\n\
        MHWRender::MGeometry::kLines,\n\
        MHWRender::MGeometry::kAll,\n\
        raiseAboveShaded);\n\
    // This is the same as setting the argument raiseAboveShaded = true,\n\
    // since it sets the priority value to be the same. This line is just\n\
    // an example of another way to do the same thing after creation of\n\
    // the render item.\n\
    selectItem-&gt;depthPriority( <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem::sActiveWireDepthPriority\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#adb484c507442ebce56eac38bd07cac07&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem::sActiveWireDepthPriority</a>);\n\
    list.append(selectItem);\n\
\n\
    // Choose an line shader to match primitive type\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a>* shader = \n\
        shaderMgr-&gt;getStockShader( MHWRender::MShaderManager::k3dSolidShader );\n\
    if (shader)\n\
    {\n\
\n\
        // Assign shader\n\
        selectItem-&gt;setShader(shader);\n\
        // Once assigned, no need to hold on to shader instance\n\
        shaderMgr-&gt;releaseShader(shader);\n\
    }\n\
}\n\
else\n\
{\n\
    selectItem = list.itemAt(index);\n\
}\n\
\n\
\n\
</pre></div><p>Based on the display status, during each update, the color for the wireframe item is updated. It switches colors based on statuses such as <span class=\'code\'>lead</span>, <span class=\'code\'>active</span>, <span class=\'code\'>highlight</span>, and <span class=\'code\'>active-component</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Perform updates on the render item parameters. In this case\n\
// update the shader instance.\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a>* shader = NULL;\n\
if (selectItem)\n\
{\n\
    shader = selectItem-&gt;getShader();\n\
}\n\
\n\
// Check the current display status of the object and color to use for this\n\
// instance of the object.\n\
MHWRender::DisplayStatus displayStatus = \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryUtilities::displayStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#aa2838b92c9f7db4a810690a986199134&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryUtilities::displayStatus</a>(path);\n\
<a href=\"javascript:void(0)\" data-symbol=\"MColor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_color.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MColor</a> wireColor = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryUtilities::wireframeColor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#a6221bc7407b14246b14f79a751496276&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryUtilities::wireframeColor</a>(path);\n\
\n\
// It is not necessary to use the colors provided and instead a custom color could be \n\
// used if (fUseCustomColors) is set.\n\
bool fUseCustomColors = false;\n\
switch (displayStatus) {\n\
case MHWRender::kLead:\n\
    selectItem-&gt;enable(true);\n\
    if (shader)\n\
    {\n\
        static const float theColor[] = { 0.0f, 0.8f, 0.0f, 1.0f };\n\
        setSolidColor( shader, !fUseCustomColors ? &amp;(wireColor.r) : theColor );\n\
    }\n\
    break;\n\
case MHWRender::kActive:\n\
    if (shader)\n\
    {\n\
        static const float theColor[] = { 1.0f, 1.0f, 1.0f, 1.0f };\n\
        setSolidColor( shader, !fUseCustomColors ? &amp;(wireColor.r) : theColor );\n\
    }\n\
    selectItem-&gt;enable(true); // Enable if the object is active\n\
    break;\n\
case MHWRender::kHilite:\n\
case MHWRender::kActiveComponent:\n\
    if (shader)\n\
    {\n\
        static const float theColor[] = { 0.0f, 0.5f, 0.7f, 1.0f };\n\
        setSolidColor( shader, !fUseCustomColors ? &amp;(wireColor.r) : theColor );\n\
    }\n\
    selectItem-&gt;enable(true); // Enable if the object is hilite, or \n\
                                  // its components are active.\n\
\n\
    break;\n\
default:\n\
    // Otherwise make sure to disable it. The item is still present, it will just\n\
    // not be sent down the rendering pipeline to draw.\n\
    selectItem-&gt;enable(false);\n\
    break;\n\
};\n\
\n\
</pre></div><div class=\'section\'><a id=\"sample-code-for-active-vertex-handling\"></a><h3 id=\"sample-code-for-active-vertex-handling\">Sample code for active vertex handling</h3></div>\n\
<p>The following is sample code for handling of an “active vertex” render item from within <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::updateRenderItems()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#abad8e8b1f0e06eea32e2be8f97200941&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#ad0628a86aa529c4d7090b80403aa727c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride::updateRenderItems()</a></span>. There is a separate utility method which checks display status to determine whether or not the component render item should be disabled.</p>\n\
<p>The test also considers if there are any active vertices, which is determined during DG update time (<span class=\'code\'>updatedDG()</span>).</p>\n\
<p>Note that this code path has been written to allow for named streams to be used. Inside the <span class=\'code\'>populateGeometry()</span> method, these named streams can be checked and a different set of positions can be used to draw active vertices with.</p>\n\
<p>The following code executes during DG update time. It gets the component list from the object and caches the element IDs in an integer array.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">/**\\*** Call in MPxGeometryOverride::updatedDG() to perform any DG operations ****/\n\
void updateDG()\n\
{\n\
    fActiveVertices.clear(); // fActiveVertices is an <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIntArray</a> \n\
    \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObjectArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObjectArray</a> clist = // Get the active vertex components – plug-in specific ;\n\
    if (clist.length())\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFnSingleIndexedComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_single_indexed_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnSingleIndexedComponent</a> fnComponent( clist[0] );\n\
        if (fnComponent.elementCount())\n\
        {\n\
            // Cache the vertex identifiers for later usage.\n\
            fnComponent.getElements( fActiveVertices );\n\
        }\n\
    }\n\
}\n\
</pre></div><p>The following utility tests to determine whether or not to hide components:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">/* Test to see if active components should be enabled.\n\
           Based on active vertices + non-template state\n\
*/\n\
bool enableActiveComponentDisplay(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> &amp;path) const\n\
{\n\
    bool enable = true;\n\
\n\
    // If no active components then disable the active\n\
    // component render item\n\
    if (fActiveVertices.length() == 0)\n\
    {\n\
        enable = false;\n\
    }\n\
    else\n\
    {\n\
        // If there are components then we need to check\n\
        // either the display status of the object, or\n\
        // in the case of a templated object make sure \n\
        // to hide components to be consistent with how\n\
        // internal objects behave\n\
        //\n\
        MHWRender::DisplayStatus displayStatus = \n\
            <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryUtilities::displayStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#aa2838b92c9f7db4a810690a986199134&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryUtilities::displayStatus</a>(path);\n\
        if (displayStatus == MHWRender::kTemplate ||\n\
            displayStatus == MHWRender::kActiveTemplate)\n\
        {\n\
            enable = false;\n\
        }\n\
        else\n\
        {\n\
            // Do an explicit path test for templated\n\
            // since display status does not indicate this.\n\
            if (path.isTemplated())\n\
                enable = false;\n\
        }\n\
    }\n\
    return enable;\n\
}\n\
\n\
</pre></div><p>During <span class=\'code\'>updateRenderItems()</span>, the appropriate item is created as needed to draw in &quot;all&quot; modes. The depth priority is set to avoid being obscured by dormant vertices and any wireframe items. The item is enabled based on whether or not components should be displayed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">…\n\
// Unique name identifier for the render item\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> fActiveVertexItemName = “activeVertexItemName”;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem</a>* activeItem = NULL;\n\
int index = list.indexOf(\n\
    fActiveVertexItemName,\n\
    MHWRender::MGeometry::kPoints,// Primitive type is points.\n\
    MHWRender::MGeometry::kAll); // Render item should display in all display modes.\n\
if (index &lt; 0)\n\
{\n\
    activeItem = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem::Create\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ac74a014f3346d8ddac693b7f034fa228&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem::Create</a>(\n\
        fActiveVertexItemName,\n\
        MHWRender::MGeometry::kPoints,\n\
        MHWRender::MGeometry::kAll,\n\
        false);\n\
    // Set depth priority to be active point. This should offset it \n\
    // to be visible above items with &quot;dormant point&quot; priority.\n\
    activeItem-&gt;depthPriority( <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem::sActivePointDepthPriority\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ac0ade2503ccc47f3bd487b9ae7bf53e4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem::sActivePointDepthPriority</a> );\n\
    list.append(activeItem);\n\
\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a>* shader = shaderMgr-&gt;getStockShader(\n\
        MHWRender::MShaderManager::k3dFatPointShader );\n\
    if (shader)\n\
    {\n\
        // Set the point size parameter. Make it slightly larger for active\n\
        // vertices\n\
        static const float pointSize = 5.0f;\n\
        setSolidPointSize( shader, pointSize );\n\
\n\
        // Assign shader. Use a named stream if we want to supply a different\n\
        // set of &quot;shared&quot; vertices for drawing active vertices\n\
        bool fDrawSharedActiveVertices = true;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> fActiveVertexStreamName = “activeVertexStreamName”;\n\
        if (fDrawSharedActiveVertices)\n\
        {\n\
            activeItem-&gt;setShader(shader, &amp;fActiveVertexStreamName );\n\
        }\n\
        else\n\
        {\n\
            activeItem-&gt;setShader(shader, NULL);\n\
        }\n\
\n\
        // once assigned, no need to hold on to shader instance\n\
        shaderMgr-&gt;releaseShader(shader);\n\
    }\n\
}\n\
else\n\
{\n\
    activeItem = list.itemAt(index);\n\
}\n\
\n\
// Update the color and enable / disable the render item as appropriate.\n\
// Just using a fixed color and not checking display status.\n\
bool enableActiveDisplay = enableActiveComponentDisplay( &lt;dagpath&gt; );\n\
if (activeItem)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a>* shader = activeItem-&gt;getShader();\n\
    if (shader)\n\
    {\n\
        // Set active color\n\
        static const float theColor[] = { 1.0f, 1.0f, 0.0f, 1.0f };\n\
            setSolidColor( shader, theColor); // See code for active \n\
                    // wireframe for this code utility.\n\
    }\n\
\n\
    activeItem-&gt;enable( enableActiveDisplay );\n\
}\n\
</pre></div><p>The following is part of the code logic for handling the custom named stream in <span class=\'code\'>populateGeometry()</span>. The key part of the code is the checking of the vertex buffer descriptor name to see if it matches the name set when calling <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::setShader()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ad283b157fa4f6c40bceb9d398c53a72a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#ade21e8af0c7a5d180b4292ec546303ad&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::setShader()</a></span> during <span class=\'code\'>updateRenderItems()</span> above. The plug-in is then free to fill in the data, and create the appropriate indexing structure for the render item with the name matching the value stored in the variable: <em>fActiveVertexItemName</em>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptorList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptorList</a>&amp; descList =\n\
        requirements.vertexRequirements();\n\
int numVertexReqs = descList.length();\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> desc;\n\
for (int reqNum=0; reqNum&lt;numVertexReqs; reqNum++)\n\
{\n\
    if (!descList.getDescriptor(reqNum, desc))\n\
    {\n\
        continue;\n\
    }\n\
\n\
    // Fill in vertex data for drawing active vertex components \n\
    //\n\
    if (fDrawSharedActiveVertices &amp;&amp; (desc.name() == fActiveVertexStreamName))\n\
    switch (desc.semantic())\n\
    {\n\
        case MHWRender::MGeometry::kPosition:\n\
        {\n\
            if (!activeVertexPositionBuffer)\n\
            {\n\
                activeVertexPositionBuffer = data.createVertexBuffer(desc);\n\
                if (activeVertexPositionBuffer)\n\
                {\n\
                   // Allocate a position buffer to fit the # of active vertices\n\
                   unsigned int activeVertexCount = fActiveVertices.length()\n\
                   activeVertexPositions =\n\
                      (float*)activeVertexPositionBuffer&gt;acquire(\n\
                              activeVertexCount, \n\
                              true \n\
                              /*writeOnly*/             \n\
                }\n\
            }\n\
        }\n\
        break;\n\
\n\
        default:\n\
            break;\n\
    }\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";