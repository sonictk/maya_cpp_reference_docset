var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Effect Overrides</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Effect Overrides</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"effect-overrides\"></a></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> is the API entry point to override all shading and lighting for a plug-in surface shader in Viewport 2.0. Similar to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>, this class does not define the Maya node for the shader. Since this class overrides the full draw, the override is completely responsible for defining and binding resources such as textures, lights and geometry. An instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> (draw context) is provided at appropriate points to allow access to device information to facilitate these tasks. Since this class requires raw draw calls, it is not draw API agnostic. Separate code paths must be created for DirectX and OpenGL if support for both APIs is desired. Viewport 2.0 support for the Maya CgFX and dx11Shader plug-ins is implemented using this interface.</p>\n\
<p>Implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> must be associated with specific types of shading nodes. In most cases, a plug-in defines a shading node and a separate <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> is written to provide draw code for objects using the shader. The CgFX plug-in defines the CgFX node using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span> interface and a separate <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> exists to support drawing in Viewport 2.0. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> implementations must be registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span> using a classification string. Shaders with classification strings that satisfy the override classification are drawn using the override. The classification string must begin with &quot;drawdb/shader&quot; to be recognized by the system. Maya creates one instance of the registered shader override for each instance of the associated shader type that is actively used in the scene.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8ce3.jpg\' title=\'\' /></div>\n\
<p>Figure 40</p>\n\
<p>At a high level, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> has two main tasks. It specifies the geometry streams it needs to draw (geometry requirements) and then it draws objects to which it has been assigned. This demonstrates the <strong>producer-consumer</strong> relationship of the new rendering model. This class produces geometry requirements (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryRequirements</a></span>), which are consumed by the geometry system (internal class or plug-in implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>) in order to produce geometry streams. Then, the draw method of this class consumes the geometry streams in order to draw.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8ce9.jpg\' title=\'\' /></div>\n\
<p>Figure 41: A sample configuration of a shader override assigned to two different DAG objects. One DAG object is using a geometry override. The other is using an internal geometry updater. This configuration can be an example of a NURBS surface updater. The shader override “produces” requirements for each updater. Each object “produces” new geometry to render. This geometry is passed down the pipeline in the associated render items until it is “consumed” by the shader override.</p>\n\
<p>The three main phases that the override must implement are initialization, update and draw.</p>\n\
<p>The phases of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> are triggered for execution when an instance of the associated shader type is bound to an object or when the input attributes of the shader itself change. No special logic needs to be added to trigger an update. The update methods that are called depend on the type of change that occurs. New assignments of the shader trigger full rebuilds. Similarly, if <span class=\'code\'>rebuildAlways()</span> returns true, then an attribute change also triggers a full rebuild. In all other cases, initialization is skipped and only update will occur. The draw phase happens on every refresh where the shader needs to draw an object.</p>\n\
<p>During the initialization phase, the geometric stream requirements can be specified using <span class=\'code\'>addGeometryRequirement()</span>. The requirements specify the geometric streams that are required from objects to which the given shading effect is assigned. If no requirements are specified, then a single position stream requirement is used. The <span class=\'code\'>initialize()</span> method must return a string representing the <strong>shader key</strong>. It often happens that different instances of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> represent essentially the same shader, but with different shader parameters. The shader key is used to identify the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> instances representing the same shader. To optimize rendering, the renderer makes an effort to consolidate the rendering of objects based on the properties returned from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>. This includes the shader key, but can also include other factors. Refer to <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Effect-Overrides.html#consolidation-considerations\' title=\'\'>Consolidation considerations</a> below for further details about consolidation and geometry handling. This allows the plug-in to perform its setup only once for the entire sequence. It is the responsibility of each plug-in to decide on the meaning of representing the same shader.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8cef.jpg\' title=\'\' /></div>\n\
<p>Figure 42: The shader key provided by the shader override can be the same for two render items. In this case, consolidation may “merge” these items into a single render item before drawing occurs.</p>\n\
<p>During initialization, if the current display mode is non-textured display mode, an internally defined static shader instance is used for all render items that use the shading node associated with a given shader override. This is a performance optimization to avoid any additional node monitoring, as well as to allow render items that share this shader instance to be consolidated.</p>\n\
<p>To override this behavior, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::nonTexturedShaderInstance()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#addc154cb86dafb4b95301938d97659d8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#a4a0a491142830a1b163d4928d5b1638b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride::nonTexturedShaderInstance()</a></span> method can be overridden to return a custom shader instance instead of the default shared instance. A return parameter can be set to indicate if this shader instance needs to be updated upon node attribute changes. If no monitoring is required, then Maya will attempt to skip the update phase while in non-textured mode. It is possible that an update is still required for the shader that is used for textured mode display. For example, if <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::rebuildAlways()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a11ba79b61b2bfcc34362ee7675aca6b4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#ace370ef396b189faae45d52bf106ae81&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride::rebuildAlways()</a></span> returns true, then the update phase would be called regardless of the options set with this method.</p>\n\
<p>During the update phase, all data values required for shading are updated. The interface has an explicit split between the point at which the dependency graph can be accessed (<span class=\'code\'>updateDG()</span>), and the point at which the draw API (OpenGL or DirectX) can be accessed (<span class=\'code\'>updateDevice()</span>). Any intermediate data can be cleaned up when <span class=\'code\'>endUpdate()</span> is called. As an example, the override may require input from an attribute on a given node.</p>\n\
<ul>\n\
<li><span class=\'code\'>updateDG()</span> would evaluate the plug for the attribute and cache its value temporarily on the override.</li>\n\
<li><span class=\'code\'>updateDevice()</span> would take the temporarily cached value and bind it to a shader stored on the graphic device.</li>\n\
<li><span class=\'code\'>endUpdate()</span> would reset the temporary data on the override.</li>\n\
</ul>\n\
<p>The override can provide a hint as to whether shading involves semi-transparency. This hint can be provided by overriding the <span class=\'code\'>isTransparent()</span> method which gets called between <span class=\'code\'>updateDevice()</span> and <span class=\'code\'>endUpdate()</span>.</p>\n\
<p>Some advanced shading effects, like displacement, may alter the size of the object being shaded. In this case it is desirable to adjust the bounding box of the object to prevent it from being frustum culled at the wrong time. This can be accomplished by overriding the <span class=\'code\'>boundingBoxExtraScale()</span> method. Note that this does not allow the override to provide an absolute bounding box for an object. Instead the override provides a scale factor which will be applied to the computed bounding box. The reason for this is because many shaders may affect the same object and each shader cannot know the requirements of all the others.</p>\n\
<p>The draw phase is performed by the pure virtual <span class=\'code\'>draw()</span> method. This method returns true if it is able to draw successfully. If it returns false, then drawing is done using the default shader used for unsupported materials. Drawing is deliberately not intermixed with data update. At the point when drawing is called, all evaluation should have been completed. If there is user data that needs to be passed between the update and drawing phases, the override must cache that data itself. It is an error to access the Maya dependency graph during draw, and attempts to do so may result in instability. Although it is possible for implementations of the <span class=\'code\'>draw()</span> method to handle all shader setup and geometry draw, the expected use of the <span class=\'code\'>draw()</span> method is for shader setup only. Then, <span class=\'code\'>drawGeometry()</span> is called to allow Maya to handle the geometry drawing. If manual geometry binding is required, it is possible to query the hardware resource handles through the geometry on each render item in the render item list passed into the <span class=\'code\'>draw()</span> method.</p>\n\
<p>The <span class=\'code\'>activateKey()</span> and <span class=\'code\'>terminateKey()</span> method are also invoked in the draw phase each time a render item is drawn with a different shader key. The <span class=\'code\'>activateKey()</span> and <span class=\'code\'>terminateKey()</span> methods can be used to optimize rendering by configuring the rendering state only once for a batch of <span class=\'code\'>draw()</span> calls that are sharing the same shader key. For three shader overrides (A,B and C) that all return the same shader key, a sample sequence of invocations is as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">shaderOverrideA-&gt;activateKey(...)\n\
shaderOverrideA-&gt;draw(...)\n\
shaderOverrideB-&gt;draw(...)\n\
shaderOverrideC-&gt;draw(...)\n\
shaderOverrideA-&gt;terminateKey(...)\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> The <span class=\'code\'>terminateKey()</span> callback is always invoked on the same <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> instance as the one used to invoked the <span class=\'code\'>activateKey()</span> callback.</p>\n\
\n\
<p>All draw methods have access to the draw context through the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> parameter. This, along with the texture manager, should be used to manage state and textures wherever possible. Using these interfaces (as opposed to making raw draw API calls) ensures better performance and avoids problems with device state corruption.</p>\n\
<p>The <span class=\'code\'>handlesDraw()</span> method is called before <span class=\'code\'>activateKey()</span>, <span class=\'code\'>draw()</span> and <span class=\'code\'>terminateKey()</span>. This method allows override for the determination of whether the override will handle the drawing based on the current draw context. For instance, it may choose to handle drawing for a color pass but not a shadow map creation pass. If false is returned from this method then <span class=\'code\'>activateKey()</span>, <span class=\'code\'>draw()</span> and <span class=\'code\'>terminateKey()</span> will not be called.</p>\n\
<p>The Maya SDK example <em>hwPhongShader</em> provides a simple example of how to use of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>. The plug-in defines the node using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span> and implements <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> in the class &quot;hwPhongShaderOverride&quot; to provide Viewport 2.0 support. The override&#39;s <span class=\'code\'>draw()</span> method shows both methods of drawing (controlled by a compile time constant). The first case sets up the shader and then calls <span class=\'code\'>drawGeometry()</span> to perform the draw. The second case manually performs all the geometry binding after the shader set up and manually makes the OpenGL call <span class=\'code\'>glDrawElements()</span> to perform the draw.</p>\n\
<p>For more detailed examples of using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, please see the CgFX plug-in (<span class=\'code\'>cgFxShaderNode.h/.cpp</span>) and the dx11Shader plug-in (<span class=\'code\'>dx11ShaderOverride.h/.cpp</span>). dxShaderOverride contains an example of using <span class=\'code\'>handlesDraw()</span>.</p>\n\
<div class=\'section\'><a id=\"consolidation-considerations\"></a><h2 id=\"consolidation-considerations\">Consolidation considerations</h2></div>\n\
<div class=\'section\'><a id=\"usage-of-mshaderinstance\"></a><h3 id=\"usage-of-mshaderinstance\">Usage of MShaderInstance</h3></div>\n\
<p>If the override uses shader instances, then a unique global set should be used instead of keeping a shader instance per override. Refer to <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Shader-Instances.html#consolidation-considerations\' title=\'\'>Consolidation considerations for shader instances</a> for more details.</p>\n\
<div class=\'section\'><a id=\"consolidation\"></a><h3 id=\"consolidation\">Consolidation</h3></div>\n\
<p>If consolidation is not desired, this can be indicated by overriding the:</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::handlesConsolidatedGeometry()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a19006d5cfe9051bab45477aea767f346&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#ab75db4f125ea464498ca7d45713ddfcc&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride::handlesConsolidatedGeometry()</a></span> virtual method</p>\n\
<p>If this is not set, then the shader options are used to determine if items can be consolidated.</p>\n\
<p>Refer to the <em>dx11Shader</em>, <em>glslShader</em>, and <em>hwPhongShader</em> developer kit plug-ins. It is also exposed as a semantic in the first two examples. See <a href=\'#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html\' title=\'\'>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0</a>).</p>\n\
<p>Beyond shader key uniqueness, usage of <strong>custom data</strong> also affect render item consolidation, as this data is used to determine <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> uniqueness. That is, render items with different data pointers indicate that the items cannot be consolidated. This should be taken into account if support for consolidation is desired.</p>\n\
<div class=\'section\'><a id=\"extracting-consolidation-information\"></a><h3 id=\"extracting-consolidation-information\">Extracting Consolidation Information</h3></div>\n\
<p>A shader may be required to extract per Maya object information at draw time.</p>\n\
<p>One way to accomplish this is to force the render items using the shader to not be consolidated. The result is a set of shader setup and draw calls per object. This behaviour can be achieved by marking items as not to be consolidated based on: the shader key, the usage of custom data, or the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::handlesConsolidatedGeometry()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a19006d5cfe9051bab45477aea767f346&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#ab75db4f125ea464498ca7d45713ddfcc&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride::handlesConsolidatedGeometry()</a></span> override.</p>\n\
<p>An alternative to forcing separation at consolidation time is to allow render items to be consolidated and wait until draw time to extract path and geometry information.</p>\n\
<p>For passes that do not require per object extraction, such as a shadow map pass, the default behaviour of drawing the entire consolidated geometry can be preserved.</p>\n\
<p>For passes that do require extraction, the method <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::isConsolidated()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#acfe4fcf09654f6f6799a6966bd6b3e56&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#ad5b33f657e12da89b4005e78d21d4e6c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::isConsolidated()</a></span> should first be checked to see if a render item contains consolidated geometry. If so, the method <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::sourceIndexMapping()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a9f2f2adf25777c74ddd4210bdd521b17&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#a5b2d2dd37081f465b85f21b0074ddcbf&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::sourceIndexMapping()</a></span> can be used to get a list of Maya DAG paths and associated index ranges. The index ranges indicate where the per-path geometry resides within the consolidated geometry data buffers available at draw time.</p>\n\
<p>As the method <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::sourceDagPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a9452c2cfed46b5c1977568eb5b225930&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#aa2df8fde3e5cfd32c91fb8e054b82d57&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::sourceDagPath()</a></span> can only return one path, it is not suitable for extracting consolidated geometry paths.</p>\n\
<p>The following sample code from the <em>hwPhongShader</em> plug-in shows the basic logic:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem</a>* renderItem = renderItemList.itemAt(renderItemIdx);\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry</a>* geometry = renderItem-&gt;geometry();\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryIndexMapping\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_index_mapping.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryIndexMapping</a> geometryIndexMapping;\n\
if (renderItem-&gt;isConsolidated())\n\
{\n\
    renderItem-&gt;sourceIndexMapping(geometryIndexMapping);\n\
\n\
    // Extract information if the geometry was consolidated\n\
    for (int i=0; i&lt;geometryIndexMapping.geometryCount(); i++)\n\
    {\n\
        // Pull out the dag path, any component, and the start and end   \n\
        // indexing into the geometry buffers.\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> path = geometryIndexMapping.dagPath(i);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a> comp = geometryIndexMapping.component(i);\n\
        int indexStart = geometryIndexMapping.indexStart(i);\n\
        int indexLength = geometryIndexMapping.indexLength(i);\n\
    }\n\
}\n\
else\n\
{\n\
    // Have unconsolidated geometry. The indexing thus spans the entire\n\
    // range of the buffers returned.\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> sourceDagPath = renderItem-&gt;sourceDagPath();\n\
}\n\
</pre></div><p>For a concrete example, consider a scene with two objects: <em>pPlaneShape1</em> and <em>pPlaneShape2</em>, which are assigned the same plug-in shader (hwPhong). The image shows the topology (vertex and faces ids) for each object. Triangulation is shown with dotted lines.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/EffectsOverrides_Consolidation.png\' title=\'\' /></div>\n\
<p>In order to access the geometric data per object, the indexing information must first be extracted. The indexing information can be returned by examining the geometry (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span>) for the returned render item (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>) at draw time:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MRenderItem renderItem; // Passed at draw time.\n\
\n\
// Get the geometry \n\
const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry</a>* geometry = renderItem-&gt;geometry();\n\
\n\
// Get the index type\n\
MHWRender::MGeometry::Primitive indexPrimType = renderItem-&gt;primitive();\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> indexPrimTypeName = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::primitiveString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#ae9ba871c853febb72a1bb4586451a92f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::primitiveString</a>(indexPrimType);\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBuffer</a>* buffer = geometry-&gt;indexBuffer(0);\n\
\n\
// Get the data type\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> dataType = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::dataTypeString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a2164a45dbdf2ae0f47998f5e5ac854e6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::dataTypeString</a>(buffer-&gt;dataType()); \n\
\n\
// Get the size of the index buffer\n\
int indexCount = geometry-&gt;indexBufferCount();  \n\
\n\
// Dump the indexing for debugging purposes. Note that when geometry is consolidated, the\n\
// index can be unsigned short.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBuffer</a>* nonConstIB = const_cast&lt;<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBuffer</a>*&gt;(buffer);\n\
if (buffer-&gt;dataType() == MHWRender::MGeometry::kUnsignedInt32)\n\
{\n\
    const unsigned int *ptr = (const unsigned int*)nonConstIB-&gt;map();\n\
    for (unsigned int i=0; i&lt;indexBufferCount; i++)\n\
    {\n\
        const unsigned int index = ptr[i];\n\
        fprintf(stderr, &quot;-- index[%d] = %d\\n&quot;, i, index);\n\
    }\n\
    nonConstIB-&gt;unmap();\n\
}\n\
else\n\
{\n\
    const unsigned short *ptr = (const unsigned short*)nonConstIB-&gt;map();\n\
    for (unsigned int i=0; i&lt;indexBufferCount; i++)\n\
    {\n\
        const unsigned short index = ptr[i];\n\
        fprintf(stderr, &quot;-- index[%d] = %d\\n&quot;, i, index);\n\
    }\n\
    nonConstIB-&gt;unmap();\n\
}   \n\
</pre></div><p>In the case where consolidation is possible between the two objects, the returned information is shown below. Plain text and bold are used to show how the indices are related to the original objects. <strong>Bold</strong> is used to indicate <em>pPlaneShape1</em>.</p>\n\
<p>Indexing Primitive Type = Triangles,</p>\n\
<p>Index type = Unsigned Int 16,</p>\n\
<p>Index count = 18</p>\n\
<p>Index array:</p>\n\
<p>index[0] = 0</p>\n\
<p>index[1] = 1</p>\n\
<p>index[2] = 3</p>\n\
<p>index[3] = 3</p>\n\
<p>index[4] = 1</p>\n\
<p>index[5] = 2</p>\n\
<p>index[6] = 4</p>\n\
<p>index[7] = 5</p>\n\
<p>index[8] = 7</p>\n\
<p>index[9] = 7</p>\n\
<p>index[10] = 5</p>\n\
<p>index[11] = 6</p>\n\
<p><strong>index[12] = 8</strong></p>\n\
<p><strong>index[13] = 9</strong></p>\n\
<p><strong>index[14] = 11</strong></p>\n\
<p><strong>index[15] = 11</strong></p>\n\
<p><strong>index[16] = 9</strong></p>\n\
<p><strong>index[17] = 10</strong></p>\n\
<p>The consolidation information provided for the geometries indicates that:</p>\n\
<ul>\n\
<li><p>The first geometry has path=|pPlane2|pPlaneShape2, with an index start=<strong>0</strong>, and index length=<strong>12</strong>. This indexing is longer since we have two quads (or 4 triangles) in this geometry.</p></li>\n\
<li><p>The second geometry has a path=|pPlane1|pPlaneShape1, with an index start=<strong>12</strong>, and index length=<strong>6</strong>. This indexing is for the single quad (2 triangles).</p></li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> 16-bit indexing (unsigned short) can be returned when geometry is consolidated, versus 32-bit indexing.</p>\n\
</blockquote>\n\
<p>The following is the result of a dump of the vertex and face identifier information:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
vertexid[0] = 0.000000\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[0] = 0.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
vertexid[1] = 1.000000\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[1] = 0.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
vertexid[2] = 4.000000\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[2] = 0.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
vertexid[3] = 3.000000\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[3] = 0.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
vertexid[4] = 1.000000\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[4] = 1.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
vertexid[5] = 2.000000\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[5] = 1.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
vertexid[6] = 5.000000\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[6] = 1.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
vertexid[7] = 4.000000\n\
</td>\n\
<td class=\"table-body\">\n\
faceid[7] = 1.000000\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">vertexid[8] = 0.000000</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">faceid[8] = 0.000000</em>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">vertexid[9] = 1.000000</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">faceid[9] = 0.000000</em>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">vertexid[10] = 3.000000</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">faceid[10] = 0.000000</em>\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">vertexid[11] = 2.000000</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">faceid[11] = 0.000000</em>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>The first 8 entries for each data buffer is associated with <em>pPlaneShape2</em>, while the last 4 entries for each buffer are for pPlaneShape1.</p>\n\
<p>By following the indexing provided to look up the data buffers, the following vertex ids per triangle are obtained:</p>\n\
<p>[0,1,3], [3,1,4], [1,2,4], [4,2,5], <strong>[0,1,2], [2,1,3]</strong></p>\n\
<p>The first 4 triangles are from <em>pPlaneShape2</em>, and the last 2 are from <em>pPlaneShape1</em>.</p>\n\
<p>The corresponding face id lookup would produce results as follows:</p>\n\
<p>[0,0,0],[0,0,0],[1,1,1],[1,1,1], <strong>[0,0,0], [0,0,0]</strong></p>\n\
<p>The first 2 triangles from <em>pPlaneShape2</em> belong to face 0, the second 2 triangles from <em>pPlaneShape2</em> belong to face 1, and the last 2 triangles belong to face 0 on pPlaneShape1.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Face and vertex identifier information is performed by querying vertex streams with the appropriate <span class=\'code\'>vertexid</span> and <span class=\'code\'>faceid</span> semantics during initialization of the shader.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"drawing-logic-in-legacy-default-viewport-viewport-1-versus-viewport-2.0\"></a><h3 id=\"drawing-logic-in-legacy-default-viewport-viewport-1-versus-viewport-2.0\">Drawing logic in Legacy Default Viewport (Viewport 1) versus Viewport 2.0</h3></div>\n\
<p>Viewport 1 does not have an equivalent to geometry consolidation; however, it may attempt to send back a series of geometry to draw for each shader. This is an optimization to avoid always binding and unbinding shaders.</p>\n\
<p>The calling pattern for the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span> interface would be as follows:</p>\n\
<ol>\n\
<li><span class=\'code\'>glBind()</span> to bind the shader</li>\n\
<li><span class=\'code\'>glGeometry()</span>\n\
<ol>\n\
<li>Bind streams for path A</li>\n\
<li>Bind indexing for path A</li>\n\
<li>Draw</li>\n\
</ol></li>\n\
<li><span class=\'code\'>glGeometry()</span>\n\
<ol>\n\
<li>Bind streams for path B</li>\n\
<li>Bind indexing for path B</li>\n\
<li>Draw</li>\n\
</ol></li>\n\
<li>More <span class=\'code\'>glGeometry()</span> calls per object instance</li>\n\
<li><span class=\'code\'>glUnbind()</span> to unbind the shader</li>\n\
</ol>\n\
<p>The calling pattern for the Viewport 2.0 <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> interface instead would be as follows:</p>\n\
<ol>\n\
<li><span class=\'code\'>activateKey()</span> to bind the shader instance</li>\n\
<li><span class=\'code\'>draw()</span>\n\
<ol>\n\
<li>Bind streams for consolidated geometry</li>\n\
<li>If per index range drawing desired:\n\
<ol>\n\
<li>Set the index range</li>\n\
<li>Draw</li>\n\
</ol></li>\n\
<li>Otherwise choose some custom drawing logic.</li>\n\
</ol></li>\n\
<li><span class=\'code\'>terminateKey()</span> to unbind the shader</li>\n\
</ol>\n\
<p>As there is only one draw with all the information in Viewport 2.0:</p>\n\
<ul>\n\
<li>This results in a single binding of consolidated geometry versus one per object.</li>\n\
<li>This provides flexibility for the plug-in to ultimately decide how to draw the geometry, as opposed to the Viewport 1 logic, which calls back to the plug-in a fixed number times with a predetermined set of index buffer and data buffer streams.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"per-frame-work\"></a><h3 id=\"per-frame-work\">Per-Frame Work</h3></div>\n\
<p>It is possible that per-frame work exists that is common to all shaders. In this case, there are a few options available:</p>\n\
<ul>\n\
<li><p>Within the context of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, calls to obtain the <em>frame stamp</em> can be used (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::getFrameStamp()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#ac9d36cff81e99e1fb66d9e162b97ecfb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html#a35a8861d53b54d27691ec473c09da57f&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::getFrameStamp()</a></span>). As an example, to avoid expensive lighting re-computation during multiple calls to the shader, the <em>glslShader</em> and <em>dx11Shader</em> plug-ins only perform the computation upon frame stamp changes.</p></li>\n\
<li><p>A Viewport 2.0 notification callback can be used at a global level. (<span class=\'code\'>MRenderer::addNotification(MHWRender::MPassContext::kBeginRenderSemantic)</span>).</p></li>\n\
<li><p>The per-viewport <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUiMessage\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_ui_message.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_ui_message.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUiMessage</a></span> callbacks (<span class=\'code\'>add3dViewPreRenderMsgCallback()</span>) are still available for Viewport 2.0 at a global level.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"frame-and-draw-context\"></a><h2 id=\"frame-and-draw-context\">Frame and draw context</h2></div>\n\
<p>For information regarding frame and draw context, see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Frame-and-draw-contexts.html\' title=\'\'>Frame and draw contexts</a>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";