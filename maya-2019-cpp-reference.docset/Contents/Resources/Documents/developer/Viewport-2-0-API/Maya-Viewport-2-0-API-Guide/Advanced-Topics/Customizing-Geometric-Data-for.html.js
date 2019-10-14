var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Customizing Geometric Data for Shaders</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Customizing Geometric Data for Shaders</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"customizing-geometric-data-for-shaders\"></a></div>\n\
<p>The data representation for Maya DAG objects dictates both the format as well as the types of geometric streams that can be used as inputs for shading algorithms. For a given shader it is possible that either the format or the type of stream provided may be insufficient.</p>\n\
<p>To address these issues, an API to provide data customization is provided to:</p>\n\
<ul>\n\
<li>Allow for customized data streams to be provided.</li>\n\
<li>Allow for more custom data formats.</li>\n\
<li>Allow for data repackaging.</li>\n\
</ul>\n\
<p>All interfaces work within a unified system, which allows for any or all customizations to be used in conjunction with each other.</p>\n\
<p>There are two interfaces which provide the ability for a plug-in to provide custom data streams and custom data indexing.</p>\n\
<div class=\'section\'><a id=\"geometry-generators\"></a><h2 id=\"geometry-generators\">Geometry Generators</h2></div>\n\
<p>Custom streams can be provided using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxVertexBufferGenerator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxVertexBufferGenerator</a></span>. There is no equivalent legacy class to which matches this functionality.</p>\n\
<p>A generator can supply a stream based on new data and/or existing stream data.</p>\n\
<p>In order to use an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxVertexBufferGenerator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxVertexBufferGenerator</a></span>, it needs to be registered via the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span> class in a similar fashion to how overrides are registered.</p>\n\
<p>When a shader requires certain data streams, it specifies its requirements using <span class=\'code\'>MVertexBufferDescriptors</span>. Each <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span> specifies its stream using a stream name and a semantic. Every <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxVertexBufferGenerator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxVertexBufferGenerator</a></span> is required to have an associated name. To reference a generator, this name can be used by an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span> as its semantic name.</p>\n\
<p>The following is an example for an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> which specifies the requirement for two custom streams:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Create a custom position stream requirement. Set a unique semantic name for lookup.\n\
// Add to the list of requirements.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> positionDesc(\n\
                empty, \n\
                <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kPosition\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a5a5b1d8320f94d3c3d142753f5527fc4aa20581584e5f9447cb96afb4f2e10703&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kPosition</a>,\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#ad8ed01ff3ff33333d8e19db4d2818bb6a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kFloat</a>,\n\
                3);\n\
\n\
positionDesc.setSemanticName(&quot;customPositionStream&quot;);\n\
addGeometryRequirement(positionDesc);\n\
\n\
// Create a custom normal stream requirement. Set a unique semantic name for lookup.\n\
// Add to the list of requirements.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> normalDesc(\n\
                empty,\n\
                MHWRender::MGeometry:: kNormal,\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#ad8ed01ff3ff33333d8e19db4d2818bb6a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kFloat</a>,\n\
                3);\n\
normalDesc.setSemanticName(&quot;customNormalStream&quot;);\n\
addGeometryRequirement(normalDesc);\n\
\n\
</pre></div><p>A generator is called to fill in data via its <span class=\'code\'>createVertexStreams()</span> method. For the given DAG path, the generator updates and returns an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span>.</p>\n\
<p>A set of existing source streams can be supplied for situations where new data is generated based on existing data. The specific streams that are required are returned via a query to the generator (<span class=\'code\'>getSourceStreams()</span>) before <span class=\'code\'>createVertexStreams()</span> is invoked.</p>\n\
<p>As an example, existing position and normal streams can be combined to form a new stream. Since the input streams (<span class=\'code\'>MVertexBuffers</span>) are GPU resources, they need to be mapped to CPU memory before they can be read from. Any source stream data should never be modified.</p>\n\
<p>In order to fill in the data correctly, the indexing which is used to reference the data stream is also provided. The generator provides the desired indexing for the custom stream (<span class=\'code\'>getSourceIndexing()</span>). It is possible that indexing optimization may be performed based on the indexing for all internal and custom streams. Both the original and the shared indexing data are provided to the generator at stream creation time. Indexing is specified using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MComponentDataIndexing\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_component_data_indexing.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_component_data_indexing.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MComponentDataIndexing</a></span> instance. This is a wrapper for a set of index values and a component type.</p>\n\
<p>It is the responsibility of the generator to perform the correct allocation and transfer of data into the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span> that it is supplied.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d61.jpg\' title=\'\'></div>\n\
<p>Figure 69: The flow of execution is roughly shown based on the ordering of the methods on the buffer generator. From the top downwards, source stream and indexing requirements are queried. At creation time any requested source streams, the relevant dag path and the overall shared indexing are provided as inputs. The generator is responsible for filling in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span>. In this case, it swizzles an input position and a normal stream into a new stream.</p>\n\
<p>Custom stream indexing should be provided using an: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxPrimitiveGenerator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_primitive_generator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_primitive_generator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxPrimitiveGenerator</a></span>.</p>\n\
<p>As with stream generators a unique name is used to identify the indexing that can be used. For indexing, a shader instance specifies the required indexing using a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBufferDescriptor</a></span>. The primitive name in the descriptor can be set to the name of the primitive generator.</p>\n\
<p>In order to use an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxPrimitiveGenerator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_primitive_generator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_primitive_generator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxPrimitiveGenerator</a></span>, it needs to be registered via the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span> class in a similar fashion to that of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxVertexBufferGenerator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_vertex_buffer_generator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxVertexBufferGenerator</a></span>.</p>\n\
<p>There are two entry points which currently can support adding in indexing requirements: For an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> this is the point when its geometry requirements are defined and for an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> this is the point when geometry requirements are defined for additional render items. In either case, the requirements are specified by a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBufferDescriptor</a></span>.</p>\n\
<p>To add custom indexing as a requirement, an appropriately set up <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBufferDescriptor</a></span> must be added. The type must be set to “custom” and a unique name set. This name should match the name of a registered generator.</p>\n\
<p>This is an example of how a non-custom index requirement is added for an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryRequirements</a> geomRequirements;\n\
\n\
// As we are not using MIndexBufferDescriptor::kCustom for custom named index buffers\n\
// just use an empty string here.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> noName;\n\
\n\
// Add in a triangle indexing requirement\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBufferDescriptor</a> triangleDesc(\n\
        MHWRender::MIndexBufferDescriptor::kTriangle, \n\
        noName, \n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kTriangles\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1eaa2c70dd76c8172a9298334473c914304&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kTriangles</a>, \n\
        3, \n\
        compObj);\n\
\n\
geomRequirements.addIndexingRequirement(triangleDesc);\n\
</pre></div><p>This is an example of adding a custom indexing requirement for a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Name of custom indexing \n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> customPrimitiveName(&quot;customPrimitive&quot;);\n\
\n\
// Add in a custom triangle indexing requirement\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBufferDescriptor</a> indexingRequirement( \n\
        MHWRender::MIndexBufferDescriptor::kCustom, \n\
        customPrimitiveName, \n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kTriangles\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1eaa2c70dd76c8172a9298334473c914304&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kTriangles</a>);\n\
        \n\
addIndexingRequirement(indexingRequirement);\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d67.jpg\' title=\'\'></div>\n\
</pre></div><p>Figure 70: Resulting relationship based on code example.</p>\n\
<p>When custom indexing is required the appropriate calls to a generator instance are made. The generator first provides the indexing size relative to a DAG object and DAG component (<span class=\'code\'>computeIndexingCount()</span>). The generator is then asked to create the actual indexing. The source and target indexing data is also provided. An <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span> must be updated and returned. As this is a GPU resource, it must be mapped back to CPU memory, updated, and then transferred back to GPU memory.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d6d.jpg\' title=\'\'></div>\n\
<p>Figure 71</p>\n\
<p>Examples provided in the Developer Kit include:</p>\n\
<ul>\n\
<li><em>vertexBufferGenerator</em>: Performs the swizzle of position and normal as previously described. Note that this plug-ins is dependent on the dx11Shader and cgfxShaderNode plug-ins which parse the sample effects files for semantic names and uses them as the name key to activate the generator. There is a slight difference different shader semantics used for CgFx and HLSL. For CgFx, arbitrary string names cannot be used and thus the generator uses attribute name semantics “ATTR7” and “ATTR8”; whereas for HLSL, the names “myCustomStream” and “myCustomStream2” can be used instead.</li>\n\
<li><em>customPrimitiveGenerator</em>: An example of a primitive generator. The usage of this generator can be activated via the <em>hwPhongShader</em> plug-in.</li>\n\
<li><p><em>crackFreePrimitiveGenerator</em>: An example of indexing mutator which is used for producing custom indexing and data to support tessellation shaders in the dx11Shader plug-in.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d73.jpg\' title=\'\'></div>\n\
<p>Figure 72</p></li>\n\
</ul>\n\
<p>The crack free mutator creates an indexing buffer with more information than that of a normal triangle list. The triangle indexing provides, for each triangle, the indices of their 3 vertices. The crack free mutator provides indexing fit for tessellation.</p>\n\
<p>The sample currently implements support for the modes “PN-AEN9” and “PN-AEN18” (Point-Normal Triangles using Adjacent Edge Normals).</p>\n\
<p>The PN-AEN9 mode creates indexing for each triangle with the following data:</p>\n\
<ul>\n\
<li>the 3 triangle vertices indexes,</li>\n\
<li>the 6 vertex indexes of the adjacent edges.</li>\n\
</ul>\n\
<p>This results in a stride of 9 for the index array. Hence, the name PN-AEN9.</p>\n\
<p>Based on the above diagram, for a triangle represented by the vertices a, b and c, the PNAEN9 code generates the following indexing:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"> [a b c] [d e f g h i]\n\
</pre></div><p>The PN-AEN18 adds even more data than PN-AEN9:</p>\n\
<ul>\n\
<li>3 triangle vertices indices</li>\n\
<li>6 vertex indices of the adjacent edges</li>\n\
<li>6 vertex indices of the dominant edges</li>\n\
<li>3 vertices of the dominant uv position.</li>\n\
</ul>\n\
<p>This results in a stride of 18 for the index array.</p>\n\
<p>A dominant edge is the edge that has the lowest vertex indices. In the same example above, the dominant edge between <span class=\'code\'>[ab]</span> and <span class=\'code\'>[de]</span> for triangle <span class=\'code\'>[abc]</span> will be <span class=\'code\'>[ab]</span> and for triangle <span class=\'code\'>[dej]</span> it will still be <span class=\'code\'>[ab]</span></p>\n\
<p>A dominant uv position is the triangle for which each vertex has the lowest uv coordinates. In the example above, the dominant position for triangle <span class=\'code\'>[abc]</span> is <span class=\'code\'>[afh]</span></p>\n\
<ul>\n\
<li>if the uv coordinates of <span class=\'code\'>[a]</span> are lower than those of <span class=\'code\'>[d]</span>, <span class=\'code\'>[i]</span>, <span class=\'code\'>[r]</span> and <span class=\'code\'>[s]</span></li>\n\
<li>if the uv coordinates of <span class=\'code\'>[f]</span> are lower than those of <span class=\'code\'>[b], [e], [k], [l]</span> and <span class=\'code\'>[m]</span></li>\n\
<li>if the uv coordinates of <span class=\'code\'>[h]</span> are lower than those of <span class=\'code\'>[c], [g], [o], [p]</span> and <span class=\'code\'>[q]</span></li>\n\
</ul>\n\
<p>The PN-AEN18 code generates the following indexing:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[a b c] [d e f g h i] [a b f g h i] [a f h]\n\
</pre></div><p>The dx11Shader and CgFx plug-in respectively show usage of generators for HLSL and CgFx. The dx11Shader explicitly registers the crack-free tesselator mutators for shader semantics “PNAEN9” and “PNAEN18”.</p>\n\
<p>The SDK provided sample shader (AutodeskUberShader.fx) uses the following technique declaration to notify the API of the special indexing requirements:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">technique11 TessellationON\n\
&lt;\n\
    string index_buffer_type = &quot;PNAEN18&quot;; // Indicate index buffer type required\n\
&gt;\n\
{  \n\
    pass p0\n\
    {\n\
        SetRasterizerState(CullFront);\n\
        SetDepthStencilState(DepthNormal, 0);\n\
        SetVertexShader(CompileShader(vs_5_0, vt()));\n\
        SetHullShader(CompileShader(hs_5_0, HS()));\n\
        SetDomainShader(CompileShader(ds_5_0, DS()));\n\
        SetGeometryShader(NULL);                                \n\
        SetPixelShader(CompileShader(ps_5_0, f()));\n\
    }\n\
}\n\
\n\
</pre></div><p>In this case, an annotation per technique is being parsed within the plug-in code. The <em>customIndexingMutatorName</em> string value “PNAEN18” is the semantic name on an index descriptor requirement, which, at update time, calls the registered crack-free indexing mutator.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> customIndexingMutatorName;\n\
\n\
ID3DX11EffectTechnique * mpD3DTechnique;\n\
\n\
ID3DX11EffectVariable* indexBufferType = \n\
        mpD3DTechnique-&gt;GetAnnotationByName(&quot;index_buffer_type&quot;);\n\
\n\
if(indexBufferType &amp;&amp; indexBufferType-&gt;IsValid())\n\
{\n\
    ID3DX11EffectStringVariable* indexBufferTypeStr = indexBufferType-&gt;AsString();\n\
    if(indexBufferTypeStr &amp;&amp; indexBufferTypeStr-&gt;IsValid())\n\
    {\n\
        LPCSTR value; \n\
        if( SUCCEEDED ( indexBufferTypeStr-&gt;GetString( &amp;value ) ) )\n\
        {\n\
            customIndexingMutatorName = <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a>(value);\n\
        }\n\
    }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"geometry-mutators\"></a><h2 id=\"geometry-mutators\">Geometry Mutators</h2></div>\n\
<p>As the name implies a mutator can be used to modify the packing of data for a given existing vertex buffer (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span>). As with stream generators, mutators are associated with a descriptor through name matching between the mutator and the semantic name on a descriptor (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span>)</p>\n\
<p>A mutator is represented as an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxVertexBufferMutator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_vertex_buffer_mutator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_vertex_buffer_mutator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxVertexBufferMutator</a></span>. Mutators must be registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span>.</p>\n\
<p>This example illustrates how to specify an existing mutator for use:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> empty;\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> positionDesc(\n\
        empty,\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kPosition\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a5a5b1d8320f94d3c3d142753f5527fc4aa20581584e5f9447cb96afb4f2e10703&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kPosition</a>,\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#ad8ed01ff3ff33333d8e19db4d2818bb6a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kFloat</a>,\n\
        3);\n\
        \n\
// Use the custom semantic name &quot;swizzlePosition&quot; which corresponds to a plug-in which will\n\
// swizzle the x,y, and z channels of a position stream using this positionDesc.setSemanticName(&quot;swizzlePosition&quot;); \n\
\n\
// Add the descriptor as part of the requirements for this shader\n\
addGeometryRequirement(positionDesc);\n\
\n\
</pre></div><p>The following diagram illustrates the relationship of the above code example. An additional “customMutator” is added to show the lookup by semantic name.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d79.jpg\' title=\'\'></div>\n\
<p>Figure 73</p>\n\
<p>When a mutator is required to perform an update, an associated Maya DAG path and data stream indexing are passed in. An existing <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBuffer</a></span> is passed in for update and data is modified in-place.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d7f.jpg\' title=\'\'></div>\n\
<p>Figure 74</p>\n\
<p>The Developer Kit example <em>vertexBufferMutator</em> has the full code for registering a mutator which performs the swizzle. The hwPhongShader plug-in has code which demonstrates the usage of the custom swizzle.</p>\n\
<p>The following is an excerpt from the sample code which shows how in-place editing is performed:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Input argument\n\
MVertexBuffer&amp; vertexBuffer;\n\
\n\
unsigned int vertexCount = vertexBuffer.vertexCount();\n\
if (vertexCount &lt;= 0)\n\
    return;\n\
    \n\
// Acquire the buffer to fill with data. Data is not in CPU memory\n\
float* buffer = (float*)vertexBuffer.acquire(vertexCount);\n\
float* start = buffer;\n\
\n\
for (unsigned int i = 0; i &lt; vertexCount; ++i)\n\
{\n\
    // Here we swap the x, y and z values\n\
    float x = buffer[0];\n\
    buffer[0] = buffer[1];    // y --&gt; x\n\
    buffer[1] = buffer[2];    // z --&gt; y\n\
    buffer[2] = x;            // x --&gt; z\n\
    buffer += 3;\n\
}\n\
\n\
// Commit the buffer to signal completion. CPU data will be transferred to GPU memory.\n\
vertexBuffer.commit(start);\n\
\n\
</pre></div><div class=\'section\'><a id=\"indexing-mutators\"></a><h2 id=\"indexing-mutators\">Indexing Mutators</h2></div>\n\
<p>An indexing mutator can be used to modify the data for a given existing index buffer (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBuffer</a></span>). Mutators are associated with a descriptor through name matching between the mutator and the semantic name on a descriptor (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MIndexBufferDescriptor</a></span>)</p>\n\
<p>A mutator is represented as an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxIndexBufferMutator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_index_buffer_mutator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_index_buffer_mutator.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxIndexBufferMutator</a></span>. Mutators must be registered with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawRegistry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_registry.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawRegistry</a></span>.</p>\n\
<p>This example illustrates how to specify an existing mutator for use:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MIndexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MIndexBufferDescriptor</a> indexingRequirement(\n\
        MHWRender::MIndexBufferDescriptor::kCustom,\n\
        customIndexingMutatorName,\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kTriangles\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1eaa2c70dd76c8172a9298334473c914304&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kTriangles</a>);\n\
        \n\
// Add the descriptor as part of the requirements for this shader\n\
addIndexingRequirement(indexingRequirement);\n\
\n\
</pre></div><p>The following diagram illustrates the relationship of the above code example. An additional “customMutator” is added to show the lookup by semantic name.</p>\n\
<div class=\'figure\'><img src=\'developer/images/Maya%20Viewport%202%20supplementary%20diagram%2061.png\' title=\'\'></div>\n\
<p>Figure 75</p>\n\
<p>When a mutator is required to perform an update, an associated data stream indexing and previously generated vetex buffer array are passed in. An existing MIndexBuffer is passed in for update and data is modified in-place.</p>\n\
<div class=\'figure\'><img src=\'developer/images/Maya%20Viewport%202%20supplementary%20diagram%2061+.png\' title=\'\'></div>\n\
<p>Figure 76</p>\n\
<p>The Developer Kit example <em>crackFreePrimitiveGenerator</em>, part of the dx11Shader project has the full code for registering a mutator which performs PN AEN patch generation. The dx11Shader plug-in has code which demonstrates the usage of the custom patch when the “TessellationON” or “Wireframe” techniques of the MayaUberShader.fx effect file is selected.</p>\n\
<p>The following is an excerpt from the sample code which shows how in-place editing is performed:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Input argument\n\
MIndexBuffer&amp; indexBuffer;\n\
\n\
// Acquire the buffer to fill with data. Data is not in CPU memory\n\
unsigned int* buffer = (unsigned int *) indexBuffer.acquire(numTri * triSize, true);\n\
unsigned int* start = buffer;\n\
\n\
for (unsigned int i = 0; i &lt; numTri; ++i)\n\
{\n\
    // Here we fill PN AEN information\n\
    buffer[0] = vertexId0; \n\
    buffer[1] = vertexId1;\n\
    buffer[2] = vertexId2;\n\
    // ...\n\
    buffer[17] = dominantVertex2;\n\
    buffer += triSize;\n\
}\n\
\n\
// Commit the buffer to signal completion. CPU data will be transferred to GPU memory.\n\
indexBuffer.commit(start);\n\
primitiveStride = triSize; // Output argument\n\
return <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometry::kPatch\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1ea23d4e011c2b72a286021ca9a5a121830&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometry::kPatch</a>;\n\
\n\
</pre></div><p><strong>Pipeline Summary:</strong></p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f99e6.jpg\' title=\'\'></div>\n\
<p>Figure 77</p>\n\
<p>The above diagram shows how generators and mutators fit in the overall pipeline. Shown is a shader override which has custom requirements (based on shader parameters) for the generation and mutation of vertex buffers, and primitive generation (as represented by the descriptors). When updates need to occur (Update phase), the shader requirements on an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> are name matched to generators and mutators which are invoked to update or create vertex and index buffers. These custom buffers can be used by one or more render items which flow down the pipeline until it reaches the Draw Phase. At this point, the custom vertex and index buffers can be bound to the shader parameters which initiated the custom data requirement.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";