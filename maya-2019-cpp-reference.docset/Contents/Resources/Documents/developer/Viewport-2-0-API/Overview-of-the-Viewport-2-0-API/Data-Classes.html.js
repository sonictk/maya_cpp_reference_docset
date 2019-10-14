var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Data Classes</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Data Classes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"data-classes\"></a></div>\n\
<p>These objects describe the renderable geometry in the scene, and present a thin (but obvious) abstraction over the underlying GPU resources they represent. They&#39;re used by shapes to describe the renderable geometry (this applies to both Maya&#39;s internal shapes and plugin shapes). And they&#39;re used by shaders to bind and render the geometry (again, this applies to both Maya&#39;s internal shaders and plugin shaders). This clean separation means that custom shaders can work with Maya shapes, Maya shaders can work with custom shapes, and custom shaders and custom shapes can also work together.</p>\n\
<p>The basic &quot;handshake&quot; between shapes and shaders is as follows:</p>\n\
<ol>\n\
<li>The shape is queried for the list of render items it needs to render (including multiple material sub-geometries, wireframe selection, component display, etc).</li>\n\
<li>The shader is queried for its geometry requirements (e.g. &quot;I need positions and UV set foo&quot;).</li>\n\
<li>Maya works out the super-set of all the geometry requirements on each shape (based on all the render items that use it).</li>\n\
<li>The shape populates all the geometry buffers based on its current state.</li>\n\
<li>The shader receives the list of render items it needs to render, and it can pull out the geometry buffers it needs for each geometry item.</li>\n\
</ol>\n\
<p>However, unlike previous Maya viewports, Viewport 2.0 tries to cache and re-use as much data and information as possible - so unless the scene state is changing, only the final render call will be used to render the cached state.</p>\n\
<div class=\'section\'><a id=\"mgeometry\"></a><h2 id=\"mgeometry\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span></h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span> represents the vertex and index data for any renderable geometric entity in Maya. These are most commonly shapes (meshes, NURBS surfaces, subdivision surfaces), but it may also be used to represent any other in-viewport elements (including the grid, manipulators, tool feedback, etc).</p>\n\
<p>In the case of DAG objects, each <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span> instance holds all the renderable data for all instances of a single object. This includes all of the vertex and index buffer data that describes the shape’s control points.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span> is used in several places in the Viewport 2.0 API. In some cases it is simply meant to provide read-only access to existing geometry data, and in others the user is required to fill the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span> object with vertex and index data needed to draw a particular object.</p>\n\
<div class=\'section\'><a id=\"mvertexbuffer\"></a><h2 id=\"mvertexbuffer\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVertexBuffer</a></span></h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVertexBuffer</a></span> is a thin wrapper around a graphics card vertex buffer. Each vertex buffer has a name, a semantic (position, normal, uv, etc), and a type (e.g. float3) and this data is encapsulated by an instance of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVertexBufferDescriptor</a></span> class. Other than hardware memory and shader interpolant limits, there are no Maya limits to the number of vertex buffers that can be added to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span> object (e.g. an object can have multiple position streams, multiple normal streams, etc)</p>\n\
<div class=\'section\'><a id=\"mindexbuffer\"></a><h2 id=\"mindexbuffer\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MIndexBuffer</a></span></h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MIndexBuffer</a></span> is the index equivalent of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVertexBuffer</a></span>. An <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span> object can include 0, 1, or multiple index buffers depending on how many renderable objects (render items, see below) the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometry</a></span> object represents.</p>\n\
<div class=\'section\'><a id=\"mgeometryrequirements\"></a><h2 id=\"mgeometryrequirements\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometryRequirements</a></span></h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGeometryRequirements</a></span> describes the geometry streams and index buffers that are required to draw all render items associated with a specific object. This class is passed to implementations of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxGeometryOverride</a></span> to indicate what geometry needs to be produced.</p>\n\
<p>The list of vertex buffers stored on this object is formed by taking the union of the requirements from all of the render items stored on the object. Any one render item can be examined to determine the requirements for that item; however, all data is shared where possible.</p>\n\
<div class=\'section\'><a id=\"mrenderitem\"></a><h2 id=\"mrenderitem\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderItem</a></span></h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderItem</a></span> describes a renderable primitive, something that is actually rendered on the graphics card. Each <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderItem</a></span> includes:</p>\n\
<ul>\n\
<li>The render primitive to use (e.g. indexed triangles, points, lines, triangle strips, etc.)</li>\n\
<li>An index buffer to use when rendering that primitive.</li>\n\
<li>A list of which vertex buffers to render.</li>\n\
<li>The shader to use (may be overridden in some cases).</li>\n\
<li>A set of display mode/options to control which render passes and viewports this render item is visible in (e.g. so one viewport can display wireframe while another displays shaded mode).</li>\n\
</ul>\n\
<p>The render item is deliberately a light weight object to make it easy and efficient to share heavy vertex/index data across multiple renders of the same underlying geometry (e.g. to draw wireframe over shaded mode re-using the same position data).</p>\n\
<p>Some render passes (e.g. shadow pass, depth pass) will use the display mode/option to select which render items to display, but will override the material in order to render other surface properties.</p>\n\
<p>The shader associated with a render item is what drives the geometry requirements that need to be fulfilled to draw the object. These requirements can be retrieved from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderItem</a></span> and will be nonempty if a shader is assigned. Shaders can be acquired through <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MShaderManager</a></span>.</p>\n\
<p>Render items may be enabled or disabled to allow or prevent them to draw without needing to delete the render item and recreate it later.</p>\n\
<p>Render items are created in two places. First, Maya automatically creates one render item for each shader assignment to each instance of each object. These render items may be disabled but not removed and are automatically associated with the shader described by the Maya shading assignment. Second, users may add additional render items per instance for any custom purpose.</p>\n\
<div class=\'section\'><a id=\"mvertexbufferdescriptor\"></a><h2 id=\"mvertexbufferdescriptor\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVertexBufferDescriptor</a></span></h2></div>\n\
<p>This class is used to describe the properties of either an existing vertex buffer or one that needs to be created (i.e. to specify geometry requirements).</p>\n\
<div class=\'section\'><a id=\"mvertexbufferdescriptorlist\"></a><h2 id=\"mvertexbufferdescriptorlist\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptorList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVertexBufferDescriptorList</a></span></h2></div>\n\
<p>A simple list of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVertexBufferDescriptor</a></span> objects.</p>\n\
<div class=\'section\'><a id=\"mrenderitemlist\"></a><h2 id=\"mrenderitemlist\"><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItemList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderItemList</a></span></h2></div>\n\
<p>A simple list of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderItem</a></span> objects. Each item is owned by the list.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";