var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry Overrides</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Geometry Overrides</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"geometry-overrides\"></a></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> is the API entry point for defining high level, draw API agnostic support for custom DAG objects in Viewport 2.0. There is no corresponding class in the legacy interfaces. Viewport 2.0 is primarily structured around retained mode drawing; all geometric data is kept as buffers on the graphics card whenever possible. Any implementation of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> is best thought of as a “data feeder” which gets associated with a particular type of DAG object. In addition to providing data, implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> may also define additional renderables (render items) which are needed to draw the object. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> interface is very similar to the internal interfaces used to support native Maya objects like polygonal meshes and NURBS surfaces. Thus by using this class, plug-in authors gain access to all internal optimizations such as consolidation and vertex data sharing. In addition, implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> work with internal Maya screen space effects and all supported shaders (including plug-in shaders).</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> is not meant for performing custom drawing and thus there is no “draw” method and no access to a draw context. It is also not a plug-in shape. It is simply a class that may be associated with a plug-in shape to describe how to create data buffers for drawing in Viewport 2.0. The actual draw for the DAG object is handled by the shader associated with each render item.</p>\n\
<p>Implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> must be registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span> using classification strings. The classification string must begin with “drawdb/geometry” in order to be properly recognized by the system. DAG objects whose classification string satisfies the override classification string are evaluated using the override. Maya creates one instance of the registered <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> for each associated DAG object.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8cd7.jpg\' title=\'\' /></div>\n\
<p>Figure 38: An <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> is associated with a given DAG object by its classification string. Shown is a possible configuration where render items from an internal surface shader as well as custom render items are part of the set of render items that the override would handle.</p>\n\
<p>The interface is divided into several sections or phases. The first phase is <span class=\'code\'>updateDG()</span>, where all attribute data from the associated Maya DAG object must be queried and cached. It is invalid to attempt to query attribute data in the final <span class=\'code\'>populateGeometry()</span> phase, and such behaviour may result in instability. This separation keeps dependency graph evaluation separate from graphics device access in order to facilitate multi-threaded update.</p>\n\
<p>The second phase is <span class=\'code\'>updateRenderItems()</span>. During this phase the override is given a list of pre-created render items, one for each supported shader assigned to the object. The override may disable those render items and/or add additional render items to augment the display of the object. Additional render items need to be associated with shaders using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> interface. The shaders from each render item determine the total set of geometry requirements that the override needs to fulfill during the <span class=\'code\'>populateGeometry()</span> stage. In <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>, additional render items are comparable to the old <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRequest\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_request.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_draw_request.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRequest</a></span> interface.</p>\n\
<p>The third phase is <span class=\'code\'>populateGeometry()</span>. During this phase, the override is given the list of geometry requirements it needs to satisfy, as well as the list of render items that generated those requirements. The override must fill the provided <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> structure with vertex buffers (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span>) to satisfy the requirements. It must also produce an index buffer (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span>) for each render item. The index buffers are stored on the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> object and must also be directly associated with their corresponding render item using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::associateWithIndexBuffer()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a7d0f067f76206a54f4f716f63bcb6b19&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html#ade42898a450ace84b0032c58919b1ea6&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::associateWithIndexBuffer()</a></span>.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8cdd.jpg\' title=\'\' /></div>\n\
<p>Figure 39: The three phases are used to label the connections between the main constructs which are involved in the update of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>. The first phase (1.) involves accessing the associated DAG object. The second phase (2.) updates the render items and determines the geometry requirements. The third phase (3.) updates vertex and index buffer data and the indexing association for each render item. In this example, three render items drive the update requirements: one for an associated surface shader and two for custom render items that the override wishes to draw.</p>\n\
<p>The phases of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> are triggered under several different circumstances. The first time a DAG object associated with an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> is created, all phases of the override run. Redraws of the scene do not trigger the update process of the override again unless the associated DAG object has changed. For a DAG object, there are two types of changes that can occur: topology change and data change. Data changes do not trigger a call to <span class=\'code\'>updateRenderItems()</span>; only <span class=\'code\'>updateDG()</span> and <span class=\'code\'>populateGeometry()</span> are called in that case. Topology changes represent a full rebuild and all phases of the override are called. If an override adds additional render items in <span class=\'code\'>updateRenderItems()</span> the first time it runs, those render items are retained across topology updates; therefore it is unnecessary to add them again. A plug-in DAG object can indicate to the Viewport 2.0 change manager that it has changed by calling the static method <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::setGeometryDrawDirty()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ab2843a350b76cdcbf16dd70d884f9766&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_renderer.html#a291377c9333bfbb410bdb6bdee2321fc&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderer::setGeometryDrawDirty()</a></span>. There is a parameter on the method indicating whether the change is a topology or data change.</p>\n\
<p>The Maya SDK example <em>apiMeshShape</em> uses <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>. It defines a new class <span class=\'code\'>apiMeshGeometryOverride</span> which provides geometry streams and indexing for shaded draw. It also defines additional render items for wireframe draw which are used for wireframe mode and for displaying the selection wireframe over the shaded object when the object is selected.</p>\n\
<p>The following are some excerpts from <span class=\'code\'>apiMeshGeometryOverride</span> to demonstrate sample behaviour:</p>\n\
<ol>\n\
<li><p>1. Registration with the appropriate classification in <span class=\'code\'>initializePlugin()</span></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnPlugin</a> plugin(...);\n\
// Define some drawDb classification string starting with drawdb/geometry\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> apiMesh::drawDbClassification(&quot;drawdb/geometry/apiMesh&quot;);\n\
\n\
// Register a shape, with a drawdb classification\n\
plugin.registerShape( &quot;apiMesh&quot;, apiMesh::id,\n\
    &amp;apiMesh::creator,\n\
    &amp;apiMesh::initialize,\n\
    &amp;apiMeshUI::creator,\n\
    &amp;apiMesh::drawDbClassification )\n\
\n\
// Register a geometry override with the same drawDB classification\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MDrawRegistry::registerGeometryOverrideCreator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html#a36f6ac92077e5064d897187608c9e548&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MDrawRegistry::registerGeometryOverrideCreator</a>(\n\
    apiMesh::drawDbClassification,\n\
    apiMesh::drawRegistrantId,\n\
    apiMeshGeometryOverride::Creator);</pre></div></li>\n\
<li><p><span class=\'code\'>updateRenderItems()</span> method creating a “custom” render item to show wireframe.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Add a wire frame item if it&#39;s not there\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem</a>* dormantItem = NULL;\n\
\n\
int index = list.indexOf(\n\
        &quot;apiMeshWire&quot;,\n\
        MHWRender::MGeometry::kLines,\n\
        MHWRender::MGeometry::kWireframe);\n\
\n\
if (index &lt; 0)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem</a>* wireItem = new <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem</a>(\n\
            &quot;apiMeshWire&quot;,\n\
            MHWRender::MGeometry::kLines,\n\
            MHWRender::MGeometry::kWireframe,\n\
            false);\n\
    list.append(wireItem);\n\
\n\
    // Use a shader which will provide drawing using a solid color.\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a>* shader = shaderMgr-&gt;getStockShader(\n\
        MHWRender::MShaderManager::k3dSolidShader, NULL, NULL );\n\
    if (shader)\n\
    {\n\
        // Set the color on the shader instance using the parameter interface\n\
        static const float theColor[] = {1.0f, 0.0f, 0.0f, 1.0f};\n\
        shader-&gt;setParameter(&quot;solidColor&quot;, theColor);\n\
\n\
        // Assign the shader to the custom render item\n\
        wireItem-&gt;setShader(shader);\n\
    }\n\
}</pre></div></li>\n\
<li><p>Vertex and index buffers are updated, and the index buffer association with render items is performed in <span class=\'code\'>populateGeometry()</span></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">unsigned int totalVerts = N;\n\
\n\
// Set up three data buffers. One for position, one for normals and one for texture\n\
// coordinates.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>* positionBuffer = NULL;\n\
float* positions = NULL;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>* normalBuffer = NULL;\n\
float* normals = NULL;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>* uvBuffer = NULL;\n\
float* uvs = NULL;\n\
int numUVs = fMeshGeom-&gt;uvcoords.uvcount();\n\
\n\
// Scan through the requirements (descriptor list) one and a time. For each\n\
// descriptor check the semantic. Based on the semantic, update\n\
// the appropriate buffers that this override supports (position, normals and\n\
// texture coordinates).\n\
//\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptorList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptorList</a>&amp; descList = requirements.vertexRequirements();\n\
int numVertexReqs = descList.length();\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> desc;\n\
for (int reqNum=0; reqNum&lt;numVertexReqs; reqNum++)\n\
{\n\
    if (!descList.getDescriptor(reqNum, desc))\n\
    {\n\
        continue;\n\
    }\n\
\n\
    switch (desc.semantic())\n\
    {\n\
        case MHWRender::MGeometry::kPosition: // Handle position requirement\n\
        {\n\
            if (!positionBuffer)\n\
            {\n\
                positionBuffer = data.createVertexBuffer(desc);\n\
                if (positionBuffer)\n\
                {\n\
                    positions = (float*)positionBuffer-&gt;acquire(totalVerts);\n\
                }\n\
            }\n\
        }\n\
        break;\n\
        case MHWRender::MGeometry::kNormal: // Handle normal requirement\n\
        {\n\
            if (!normalBuffer)\n\
            {\n\
                normalBuffer = data.createVertexBuffer(desc);\n\
                if (normalBuffer)\n\
                {\n\
                    normals = (float*)normalBuffer-&gt;acquire(totalVerts);\n\
                }\n\
            }\n\
        }\n\
        break;\n\
        case MHWRender::MGeometry::kTexture: // Handle texture coordinate requirement\n\
        {\n\
            if (!uvBuffer)\n\
            {\n\
                uvBuffer = data.createVertexBuffer(desc);\n\
                if (uvBuffer)\n\
                {\n\
                    uvs = (float*)uvBuffer-&gt;acquire(totalVerts);\n\
                }\n\
            }\n\
        }\n\
        break;\n\
        default:\n\
            // do nothing for stuff we don&#39;t understand\n\
        break;\n\
    }\n\
}\n\
\n\
// Copy data from shape into data buffers\n\
for (int i=0; i&lt;fMeshGeom-&gt;faceCount; i++)\n\
{\n\
    // ignore degenerate faces\n\
    int numVerts = fMeshGeom-&gt;face_counts[i];\n\
    if (numVerts &gt; 2)\n\
    {\n\
        for (int j=0; j&lt;numVerts; j++)\n\
        {\n\
            if (positions)\n\
            {\n\
                // Fill in position data…\n\
            }\n\
            if (normals)\n\
            {\n\
                // Fill in normal data…\n\
            }\n\
\n\
            if (uvs)\n\
            {\n\
                // Fill in uv data…\n\
            }\n\
\n\
            vid++;\n\
        }\n\
    }\n\
}\n\
\n\
// Commit the updated buffers \n\
if (positions)\n\
    positionBuffer-&gt;commit(positions);\n\
if (normals)\n\
    normalBuffer-&gt;commit(normals);\n\
if (uvs)\n\
    uvBuffer-&gt;commit(uvs);\n\
\n\
// Fill in indexing data for the custom wireframe render item\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBuffer</a>* wireIndexBuffer = NULL; \n\
int numItems = renderItems.length();\n\
for (int i=0; i&lt;numItems; i++)\n\
{\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItem</a>* item = renderItems.itemAt(i);\n\
    if (!item) continue;\n\
\n\
    // Check for the wireframe render item created updateRenderItems()\n\
    if (item-&gt;name() == &quot;apiMeshWire&quot;) \n\
    {\n\
        // Allocate a wireframe buffer\n\
        if (!wireIndexBuffer)\n\
        {\n\
            wireIndexBuffer = data.createIndexBuffer(MHWRender::MGeometry::kUnsignedInt32);\n\
            if (wireIndexBuffer)\n\
            {\n\
                unsigned int* buffer = (unsigned int*)wireIndexBuffer-&gt;acquire(2*totalVerts);\n\
                if (buffer)\n\
                {\n\
                    // Fill in the buffer here…\n\
\n\
                    // Commit the buffer\n\
                    wireIndexBuffer-&gt;commit(buffer);\n\
                }\n\
            }\n\
        }\n\
\n\
        // Associate same index buffer with either render item\n\
        if (wireIndexBuffer)\n\
        {\n\
            item-&gt;associateWithIndexBuffer(wireIndexBuffer);\n\
        }    \n\
\n\
    }\n\
\n\
    // Handle other render items…\n\
}\n\
</pre></div></li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";