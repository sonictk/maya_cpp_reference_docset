var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Implementing a hardware shading node plug-in</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Implementing a hardware shading node plug-in</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"implementing-a-hardware-shading-node-plug-in\"></a></div>\n\
<div class=\'section\'><a id=\"integration-with-other-parts-of-maya\"></a><h2 id=\"integration-with-other-parts-of-maya\">Integration with other parts of Maya</h2></div>\n\
<p>You can integrate the hardware shader node plug-in with other parts of Maya using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxHwShaderNode</a></span> class.</p>\n\
<div class=\'section\'><a id=\"software-rendering-and-the-shader-swatch\"></a><h3 id=\"software-rendering-and-the-shader-swatch\">Software rendering and the Shader Swatch</h3></div>\n\
<p>You can implement a hardware shader node plug-in in a way that produces a reasonable output for software rendering and the Shader Swatch in the Attribute Editor. The basis of the functionality is implementing the <span class=\'code\'>compute()</span> method to affect the <span class=\'code\'>outColor</span> attribute. If this is done, the software rendering and Shader Swatches will no longer be default black.</p>\n\
<p>Alternatively, a hardware shader node plug-in can also choose to implement a specific virtual for drawing just the Shader Swatch. This method is:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> renderSwatchImage( <a href=\"javascript:void(0)\" data-symbol=\"MImage\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_image.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MImage</a> &amp; image );\n\
\n\
</pre></div><p>The following swatch classification string is required by this functionality:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> UserClassify( &quot;shader/surface/utility/:swatch/&quot;+swatchName );\n\
\n\
</pre></div><p>This string is passed to Maya when the plug-in calls <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerNode()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#aaae14c466b57bba85f52b96e2f73a9db&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html#aa3cf6972b9e540d832fca5dbb5671ebe&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerNode()</a></span>.</p>\n\
<div class=\'section\'><a id=\"the-uv-texture-editor\"></a><h2 id=\"the-uv-texture-editor\">The UV Texture Editor</h2></div>\n\
<p>There are a number of methods in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxHwShaderNode</a></span> that help to integrate hardware shader node plug-ins into the UV Texture Editor. These methods are:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> getAvailableImages( const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; uvSetName, <a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStringArray</a>&amp; imageNames);\n\
virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> renderImage( const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; imageName, const float region[2][2], int&amp; imageWidth, int&amp; imageHeight);\n\
\n\
</pre></div><p>The first method getAvailableImages() is used to provide a list of UV channels that will be made available in the UV Texture Editor. The second method renderImage() is invoked when a channel is selected in the UV Texture Editor. It is then up to this routine to draw the image as requested.</p>\n\
<p>If a hardware shader node plug-in uses standard Maya textures, then there is no need to implement these virtuals. The standard Maya textures will available in the Texture Editor.</p>\n\
<div class=\'section\'><a id=\"icons-for-the-hypershade-window\"></a><h2 id=\"icons-for-the-hypershade-window\">Icons for the Hypershade window</h2></div>\n\
<p>You can specify an icon for a hardware shader plug-in node that will then be displayed in the Hypershade window. If no icon is specified, then a default blank icon is shown. To specify an icon for a hardware shader plug-in node, do the following:</p>\n\
<ul>\n\
<li>Create an xpm icon file named <span class=\'code\'>render_nodeName.xpm</span>. For example, <span class=\'code\'>render_hwPhongShader.xpm</span>.</li>\n\
<li>Place the icon in a location (path) defined by the environment variable <span class=\'code\'>XBMLANGPATH</span>. (Alternatively, modify <span class=\'code\'>XBMLANGPATH</span> so that the icon can be found.)</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"drag-and-drop-behavior\"></a><h2 id=\"drag-and-drop-behavior\">Drag and Drop Behavior</h2></div>\n\
<p>You can implement drag and drop behavior on a hardware shade node using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDragAndDropBehavior\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_drag_and_drop_behavior.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_drag_and_drop_behavior.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxDragAndDropBehavior</a></span> class. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDragAndDropBehavior\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_drag_and_drop_behavior.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_drag_and_drop_behavior.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxDragAndDropBehavior</a></span> class provides a number of virtuals that are implemented for supporting the drag and dropping of nodes in the Hypershade menu. Consult the <span class=\'code\'>hwPhongShaderBehavior.cpp</span> example for how to implement drag and drop behavior.</p>\n\
<div class=\'section\'><a id=\"shading-in-the-viewport\"></a><h2 id=\"shading-in-the-viewport\">Shading in the viewport</h2></div>\n\
<p>A connection from a hardware shader plug-in node can be made to the <span class=\'code\'>hardwareShader</span> attribute which exists on nodes that derive from an internal Lambert shaders. This allows the node to only affect Maya’s hardware rendering. For a Viewport 2.0 integration, a shader fragment for a given plug-in node can instead be written.</p>\n\
<p>For more information about the <span class=\'code\'>hardwareShader</span> attribute, see the Technical Documentation section, Nodes section, lambert node documentation.</p>\n\
<div class=\'section\'><a id=\"reference-information-for-legacy-default-viewport\"></a><h2 id=\"reference-information-for-legacy-default-viewport\">Reference information for Legacy Default Viewport</h2></div>\n\
<p>The following sections contain reference information for hardware shaders that render in the Legacy Default Viewport. The current recommendation is to create shaders for use with Viewport 2.0. See <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide.html\' title=\'\'>Maya Viewport 2.0 API Guide</a>.</p>\n\
<p>There are two interfaces in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxHwShaderNode</a></span> that can be implemented for renderer’s hardware shading node plug-ins. Although the two interfaces are similar when comparing parameters, the ways they are called are quite different.</p>\n\
<div class=\'section\'><a id=\"the-bindgeometryunbind-interface\"></a><h3 id=\"the-bindgeometryunbind-interface\">The bind/geometry/unbind interface</h3></div>\n\
<p>Implementing the <span class=\'code\'>bind()</span>, <span class=\'code\'>geometry()</span> and <span class=\'code\'>unbind()</span> methods allows a hardware shading node plug-in to render in the Maya scene view. The purpose of the three methods are:</p>\n\
<ul>\n\
<li>bind is used to setup OpenGL state and resources.</li>\n\
<li>geometry is used to render the shader effect.</li>\n\
<li>unbind is used to restore OpenGL state and clean up resources.</li>\n\
</ul>\n\
<p>Only Mesh shapes are supported in this mode and the following steps are used to draw:</p>\n\
<ul>\n\
<li>Maya visits each Directed Acyclic Graph (DAG) node collecting draw requests.</li>\n\
<li>Draw requests are sorted into opaque and transparent queues.</li>\n\
<li>Maya performs the opaque draws without sorting.</li>\n\
<li>Maya depth sorts the transparent queue and performs the transparent draws.</li>\n\
</ul>\n\
<p>The response to Maya’s requests for draw information is the following:</p>\n\
<ul>\n\
<li>Mesh shape receives the draw request.</li>\n\
<li>Shape checks to see if the material is a hardware shader.</li>\n\
<li>If it is a hardware shader node plug-in, the geometry is bundled and passed to the virtuals of the node.</li>\n\
<li>The hardware shader node plug-in uses the information passed to it to decide how to render to the screen.</li>\n\
</ul>\n\
<p>The order in which the interface virtuals are called is the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for every shape\n\
    bind(...)\n\
    geometry(...)\n\
    unbind(...)\n\
\n\
</pre></div><p>The result of this calling pattern is that the OpenGL state can be set in the <span class=\'code\'>bind()</span> method, used in the <span class=\'code\'>geometry()</span> call and then restored in <span class=\'code\'>unbind()</span>.</p>\n\
<p>A <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a></span> parameter is passed to the methods of this interface. This parameter must be used to set the graphics context that will be used for drawing. Bracketing the functionality of the virtuals in this interface with <span class=\'code\'>beginGL()</span> and <span class=\'code\'>endGL()</span> method calls is required. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwShader::bind( const <a href=\"javascript:void(0)\" data-symbol=\"MDrawRequest\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_request.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDrawRequest</a>&amp; request, <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a>&amp; view )\n\
{\n\
    view.beginGL();\n\
    // Operations ...\n\
    \n\
    view.endGL();\n\
}\n\
\n\
</pre></div><p>Failing to call these methods can result in program corruption.</p>\n\
<div class=\'section\'><a id=\"the-glbindglgeometryglunbind-interface\"></a><h3 id=\"the-glbindglgeometryglunbind-interface\">The glBind/glGeometry/glUnbind interface</h3></div>\n\
<p>Implementing the <span class=\'code\'>glBind()</span>, <span class=\'code\'>glGeometry()</span> and <span class=\'code\'>glUnbind()</span> methods allows a hardware shading node plug-in to render in the Maya scene view. The purpose of the three methods are:</p>\n\
<ul>\n\
<li>glBind is used to set up plug-in state and resources.</li>\n\
<li>glGeometry is used to set OpenGL state, render the shader effect and restore OpenGL state.</li>\n\
<li>glUnbind is used to restore plug-in state and resources.</li>\n\
</ul>\n\
<p>In this interface, the order that the virtuals are called is the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for every pass // a refresh may have more than one pass\n\
{\n\
    for every object\n\
    {\n\
        if glBind() has not been called for this refresh\n\
            glBind(...)\n\
        glGeometry(...)\n\
    }\n\
}\n\
for every object\n\
    glUnbind(...)\n\
\n\
</pre></div><p>There are several implications that must be considered because of the change in calling order. With this interface, the OpenGL state must now be set in <span class=\'code\'>glGeometry()</span> rather than <span class=\'code\'>glBind()</span>. Now <span class=\'code\'>glBind()</span> will only be used for loading resources and processing any required attributes that will be used in <span class=\'code\'>glGeometry()</span>.</p>\n\
<p>Unlike the previous interface, graphics context is already set and no calls to <span class=\'code\'>beginGL()</span> or <span class=\'code\'>endGL()</span> are required.</p>\n\
<div class=\'section\'><a id=\"controlling-what-information-is-passed-to-geometryglgeometry\"></a><h3 id=\"controlling-what-information-is-passed-to-geometryglgeometry\">Controlling what information is passed to geometry/glGeometry</h3></div>\n\
<p>The <span class=\'code\'>geometry()</span> and <span class=\'code\'>glGeometry()</span> methods have very large parameter lists including a mixture of mandatory and optional data that describes the vertices and faces the shader needs to render the current geometry. The following methods control which optional data should be passed to the shader:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">virtual int normalsPerVertex();\n\
virtual int colorsPerVertex();\n\
virtual int getColorSetNames(<a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStringArray</a>&amp; names);\n\
virtual int texCoordsPerVertex();\n\
virtual int getTexCoordSetNames(<a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStringArray</a>&amp; names);\n\
virtual bool provideVertexIDs();\n\
\n\
</pre></div><p>It is important to note that requesting information that is not available will cause NULLs to be passed to the shader. Hardware shader plug-in nodes should test parameter information against NULL to ensure that data is valid.</p>\n\
<div class=\'section\'><a id=\"transparency-and-hardware-shader-plug-in-nodes\"></a><h3 id=\"transparency-and-hardware-shader-plug-in-nodes\">Transparency and hardware shader plug-in nodes</h3></div>\n\
<p>Maya depth sorts draw information when transparency is present in a shader. If the hardware shader plug-in node does not support transparency, then the following virtual can be implemented to return <span class=\'code\'>false</span> in order to gain shading performance.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">virtual bool    hasTransparency();\n\
\n\
</pre></div><div class=\'section\'><a id=\"indexing-and-sparse-arrays-with-the-geometry-and-glgeometry-methods\"></a><h3 id=\"indexing-and-sparse-arrays-with-the-geometry-and-glgeometry-methods\">Indexing and Sparse Arrays with the geometry() and glGeometry() methods</h3></div>\n\
<p>Data is passed to these methods using an indexing mechanism. These methods are:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> geometry( const <a href=\"javascript:void(0)\" data-symbol=\"MDrawRequest\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_request.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDrawRequest</a>&amp; request, <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a>&amp; view, int prim, unsigned int writable, int indexCount, const unsigned int * indexArray, int vertexCount, const int * vertexIDs, const float * vertexArray, int normalCount, const float ** normalArrays, int colorCount, const float ** colorArrays, int texCoordCount, const float ** texCoordArrays);\n\
virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> glGeometry( const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a>&amp; shapePath, int glPrim, unsigned int writeMask, int indexCount, const unsigned int* indexArray, int vertexCount, const int * vertexIDs, const float * vertexArray, int normalCount, const float ** normalArrays, int colorCount, const float ** colorArrays, int texCoordCount, const float ** texCoordArrays);\n\
\n\
</pre></div><p>The parameter used for indexing is <span class=\'code\'>indexCount,</span> which contains the length of the array <span class=\'code\'>indexArray</span>. The indices contained within <span class=\'code\'>indexArray</span> are used to access corresponding elements in the other arrays such as vertex positions, colors and normals.</p>\n\
<p>There are several parameters passed to the geometry methods which are arrays of arrays. These are the pointer to a pointer parameters. It is possible for these arrays to be sparse. The sparseness can occur if one of the information requesting methods asks for more information than actually exists. For example, the <span class=\'code\'>getTexCoordSetNames()</span> method can request 3 UV sets, but only the first and third exist. In this situation, the second position with the array of arrays will be NULL. As a result, it is important to use NULL checks to ensure the data is valid.</p>\n\
<div class=\'section\'><a id=\"blind-data\"></a><h3 id=\"blind-data\">Blind Data</h3></div>\n\
<p>Using baked vertex mesh blind data for the hardware shader node plug-in can be a very useful technique for rendering. This is possible for both versions of the geometry methods. The hardware shader node plug-in must implement the provideVertexIDs() to return <span class=\'code\'>true</span>. When this is done, the vertexIDs array will contain the requested information and vertexCount will contain the length of the array. If using a MDrawRequest, the mesh can be accessed using:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">request.multiPath().node();\n\
\n\
</pre></div><p>In the case of the gl version of the interface, the mesh is available from the shapePath parameter. Using the shape and the vertex IDs together lets you access vertex blind data through the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> class.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";