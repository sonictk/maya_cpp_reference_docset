var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry remapping for hardware rendering</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Geometry remapping for hardware rendering</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"geometry-remapping-for-hardware-rendering\"></a></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/Updated_Even-to-Odd.png\' title=\'\' /></div>\n\
<p>The following information focuses on the remapping of geometry data that can occur:</p>\n\
<ul>\n\
<li><p>From the point of creation of polygonal meshes, either internally or via the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a></span> API interface,</p></li>\n\
<li><p>To the point where geometry is provided for hardware rendering.</p></li>\n\
</ul>\n\
<p>The main goal is to describe how the vertex data provided at render time can be mapped back to the original geometry. In particular, we consider the case where the requirement is to remap data back to a series of original quadrilateral (quad) faces. Such is the case for Ptex texture mapping.</p>\n\
<p>To start, basic triangulation logic and uniform subdivision logic used for the Smooth Mesh Preview display option is described. This information can aid in understanding the algorithm performed by custom remapping which matches what is performed internally by Maya. This information pertains to the logic in Maya 2016 and is applicable for both VP1 (Legacy Default Viewport) and VP2 (Viewport 2.0).</p>\n\
<p>Secondly, access to remapping data at shading time is examined. The main advantage of using remapped data is that the plug-in does not need to keep up with the complexity of internal logic changes within Maya. The provided data has already undergone all internal data manipulation in the same manner as other per-vertex attributes (such as positions and normals).</p>\n\
<p>The internal remapping logic is current as of Maya 2016 and is subject to change over time. Reverse-engineering this logic is not recommended. In addition, the index remapping logic used for triangulation and sculpting performance, as well as adaptive subdivision, add additional complexity and non-determinism for VP2.</p>\n\
<p>Access to equivalent remapping data for both VP1 and VP2 hardware shader interfaces are also examined.</p>\n\
<div class=\'section\'><a id=\"remapping-logic\"></a><h2 id=\"remapping-logic\">Remapping logic</h2></div>\n\
<div class=\'section\'><a id=\"triangulation\"></a><h3 id=\"triangulation\">Triangulation</h3></div>\n\
<p>Triangulation occurs in order to produce geometric indexing, which can be used when hardware rendering. The choice of which local vertex indices are used for splitting is determined by the triangulation logic. Knowledge of which split is used can aid in determining the mapping of a pair of triangles back to the original quad.</p>\n\
<p>By default, the logic used for polygonal shapes attempt to provide the <em>best shaped</em> triangles. However, for remapping, the overriding goal is to obtain predictability as to how the splitting occurs. As such, the <span class=\'code\'>quadSplit</span> attribute on mesh shapes can be set to improve predictability.</p>\n\
<p>The <span class=\'code\'>quadSplit</span> option determines how quads are split into two triangles. If <strong>Left</strong> is selected, then the new edge will be between the 2nd and 4th vertex, while <strong>Right</strong> splits between the 1st and 4th vertex. <strong>Best Shape</strong> attempts to pick the best split based on the shape of the quad, but this may change as the shape deforms across an animation.</p>\n\
<p>Thus, selecting either a Left or Right split will provide greater predictability.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_Triangulation_MeshControls.png\' title=\'\' /></div>\n\
<p>A Left split is shown in the images below. The dotted line shows where the split occurred.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_Triangulation_QuadSplit.png\' title=\'\' /></div>\n\
<p>If Best Shape is still desired, the reference logic for a quad is given below. The general algorithm handles general N-sided polygons, which may have holes, but is not included here.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">v0 = quad vertex 0\n\
v1 = quad vertex 1\n\
v2 = quad vertex 2\n\
v3 = quad vertex 3\n\
\n\
dist02 = distance between v0 and v2\n\
dist13 = distance between v1 and v3\n\
\n\
// Use small tolerance so exact squares triangulate consistently\n\
// one way rather than randomly due to rounding errors\n\
fudgeFactor = 0.999f\n\
canSplit = false\n\
split02 = false\n\
\n\
if( dist02 &lt; fudgeFactor*dist13 )\n\
{\n\
    n1 = normal of triangle 1, 2, 0\n\
    n2 = normal of triangle 2, 3, 0\n\
\n\
    if( angle between n1 and n2 is less than 90 degrees )\n\
    {\n\
        if( area of triangle1 &lt; 7 * area of triangle2 &amp;&amp;\n\
                    area of triangle2 &lt; 7 * area of triangle1 )\n\
        {\n\
            canSplit = true\n\
            split02 = true\n\
        } \n\
    }\n\
}\n\
else\n\
{\n\
    n1 = normal of triangle 0, 1, 3\n\
    n2 = normal of triangle 3, 1, 2\n\
\n\
    if( angle between n1 and n2 is less than 90 degrees )\n\
    {\n\
        if( area of triangle1 &lt; 7 * area of triangle2 &amp;&amp;\n\
                area of triangle2 &lt; 7 * area of triangle1 )\n\
        {\n\
            canSplit = true\n\
            split02 = false\n\
        } \n\
    }\n\
}\n\
\n\
if( canSplit )\n\
{\n\
    if( split02 )\n\
    {\n\
        set triangle 1 = 1,2,0\n\
        set triangle 2 = 0,2,3\n\
    }\n\
    else\n\
    { \n\
        set triangle 1 = 0,1,3\n\
        set triangle 2 = 3,1,2\n\
    }\n\
}\n\
else \n\
{\n\
   // Fall back to general triangulation algorithm    \n\
}\n\
</pre></div><div class=\'section\'><a id=\"mfnmesh-considerations\"></a><h3 id=\"mfnmesh-considerations\">MFnMesh considerations</h3></div>\n\
<p>The triangulation option on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a></span> differs from those used internally and will always use a <strong>best shape</strong> option.</p>\n\
<p>Remapping of indexing does not occur if the triangulation method on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a></span> is not called, and the interfaces that provide data for storage on an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a></span> do not reshuffle any data passed in. If the triangulation method is not called, then the internal triangulation logic will take into account the <span class=\'code\'>quadSplit</span> option.</p>\n\
<div class=\'section\'><a id=\"smooth-mesh-preview-considerations\"></a><h3 id=\"smooth-mesh-preview-considerations\">Smooth Mesh Preview considerations</h3></div>\n\
<p>It should be noted that, for Smooth Mesh Preview, the <span class=\'code\'>quadSplit</span> option is not used.</p>\n\
<div class=\'section\'><a id=\"subdivision\"></a><h2 id=\"subdivision\">Subdivision</h2></div>\n\
<p>The Smooth Mesh Preview option on polygonal shapes is another occasion where the original geometric data may be remapped. As the geometry provided at rendering will have a smoothing algorithm applied to produce a new set of geometry, additional logic is required to not only handle indexing on existing vertices, but also new vertices that have been introduced along with the corresponding new indexing.</p>\n\
<p>The following sections discuss the mapping logic (rules) for uniform subdivision when using either OpenSubiv (OSD) or legacy Catmull-Clark logic. In particular, the <strong>winding order</strong> of vertices and faces and the <strong>local parametric (UV)</strong> location of new vertices is covered. The local parameterization can be remapped to texture coordinates as required for texture map lookups.</p>\n\
<p>We refer to the original geometry as the <strong>base</strong> geometry. For example, an original face is a base face.</p>\n\
<div class=\'section\'><a id=\"maya-uniform-opensubdiv-subdivision\"></a><h3 id=\"maya-uniform-opensubdiv-subdivision\">Maya uniform OpenSubdiv subdivision</h3></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_OSD_windingOrder.png\' title=\'\' /></div>\n\
<p>The figure above shows a base face (left image) and the start and winding order of the subdivided faces and vertices when 1 level of subdivision is applied (center and right images).</p>\n\
<p>Levels closer to the base level are considered as being <em>higher</em>. The subdivided face ordering is thus shown to be consistent with higher levels. The start face is in the bottom-left corner which aligns to the start vertex on the base face. Similarly, the vertices on the subdivided faces also start from the bottom-left corner. The winding order is always counter-clockwise (CCW).</p>\n\
<p>Assuming the origin of the local UV is located at vertex 0 of the base face, it is possible to deduce the local UV&#39;s of the vertices on the subdivided faces.</p>\n\
<p>The following is the some sample code to determine the local parametric value.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Get the UV of the bottom-left corner of the subdivided face.\n\
//\n\
// - subdFaceIndex, the index of subdivided face within a base face.\n\
// - subdLevel, the Catmull-Clark subdivision level \n\
//\n\
// such that: \n\
//\n\
// - subdLevel &gt;= 1 \n\
// - 0 &lt;= subdFaceIndex &lt;= 4^subdLevel\n\
// - the UV value is encoded as an integer within [0, 2^subdLevel].\n\
//\n\
getSubFaceUV(subdFaceIndex, subdLevel) \n\
{\n\
    uv = (0,0);\n\
\n\
    count = pow(4, subdLevel - 1);\n\
    ofs = pow(2, subdLevel - 1);\n\
\n\
    // Iteratively find the index of a parent face in each subdivision level,\n\
    // and offset the UV accordingly.\n\
    faceIndex = subdFaceIndex;\n\
    while (count &gt; 0) {        \n\
        start = faceIndex / count;\n\
        switch (start) {\n\
            case 0:                  break;\n\
            case 1: uv += (ofs,0);   break;\n\
            case 2: uv += (ofs,ofs); break;\n\
            case 3: uv += (0,ofs);   break;\n\
        }\n\
\n\
        faceIndex %= count;\n\
        ofs &gt;&gt;= 1;\n\
        count &gt;&gt;= 2;\n\
    }    \n\
    return uv;\n\
}\n\
\n\
// Get the UV of the vertex on the subdivided face.\n\
//\n\
// - subdFaceStartUV: the UV of the bottom-left corner of the subd face.\n\
// - subdVertexIndex: vertex index on the subdivided face, 0~3.\n\
//\n\
getSubVertexUV(subdFaceStartUV, subdVertexIndex) {\n\
    uv = (0,0);\n\
    switch (subdVertexIndex) {\n\
        case 0:              break;\n\
        case 1: uv += (1,0); break;\n\
        case 2: uv += (1,1); break;\n\
        case 3: uv += (0,1); break;    \n\
    }\n\
    return subdFaceStartUV + uv;\n\
}\n\
\n\
subdFaceStartUV = getSubFaceUV(subdFaceIndex, subdLevel);\n\
subdVertexUV = getSubVertexUV (subdFaceStartUV, subdVertexIndex);\n\
subdVertexUV /= pow(2, subdLevel);\n\
</pre></div><div class=\'section\'><a id=\"maya-legacy-catmull-clark-subdivision\"></a><h3 id=\"maya-legacy-catmull-clark-subdivision\">Maya legacy Catmull-Clark subdivision</h3></div>\n\
<p>The logic for Maya legacy subdivision is a little more complex.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_Catmull_windingOrder.png\' title=\'\' /></div>\n\
<p>The figure above shows a base face (left) and the start and winding order of the subdivided faces and vertices when 1 level of subdivision is applied (center and right images). The start of the subdivided face aligns to the second (index = 1) vertex on the base face, while the starting vertex continues to shift accordingly, based on the subdivided face number.</p>\n\
<p>The following is the sample code. The sections of the code that differ from that of the OpenSubdiv algorithm is <strong>highlighted in bold</strong>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Get the UV of the bottom-left corner of the subdivided face.\n\
// \n\
// - subdFaceIndex, the index of subdivided face within a base face\n\
// - subdLevel, the Catmull-Clark subdivision level\n\
// \n\
// such that:\n\
//\n\
// - subdLevel &gt;= 1. \n\
// - 0 &lt;= subdFaceIndex &lt;= 4^subdLevel,\n\
// - the uv is encoded as integer within [0, 2^subdLevel].\n\
//\n\
getSubFaceUV(subdFaceIndex, subdLevel) {\n\
    uv = (0,0);    \n\
    start = 1;\n\
\n\
    count = pow(4, subdLevel - 1);\n\
    ofs = pow(2, subdLevel - 1);\n\
\n\
    // Iteratively find the index of parent face in each subdivision level,\n\
    // and offset the UV&#39;s accordingly.\n\
    faceIndex = subdFaceIndex;\n\
    while (count &gt; 0) {\n\
        // Unlike OSD subdivided topology, the start position of the child face \n\
        // is related to that of the parent face.\n\
        start = (start + faceIndex / count) % 4;\n\
        switch (start) {\n\
            case 0:                  break;\n\
            case 1: uv += (ofs,0);   break;\n\
            case 2: uv += (ofs,ofs); break;\n\
            case 3: uv += (0,ofs);   break;\n\
        }\n\
\n\
        faceIndex %= count;\n\
        ofs &gt;&gt;= 1;\n\
        count &gt;&gt;= 2;\n\
    }\n\
    // The start position of the face is also returned.\n\
    return (uv, start);\n\
}\n\
\n\
// Get the uv of the vertex on the subdivided face.\n\
//\n\
// - subdFaceStartUV, the UV of the bottom-left corner of the subdivided face.\n\
// - subdVertexIndex, vertex index on the subdivided face, 0~3.\n\
//\n\
getSubVertexUV(subFaceStartIndex, subFaceStartUV, subdVertexIndex) {\n\
    uv = (0,0);\n\
    // Unlike OSD subdivided topology, the start of the vertex relies on \n\
    // the start position of the face.\n\
    start = (subdFaceIndex - 1 + 4) % 4;\n\
    switch ((start + subdVertexIndex) % 4) {\n\
        case 0:              break;\n\
        case 1: uv += (1,0); break;\n\
        case 2: uv += (1,1); break;\n\
        case 3: uv += (0,1); break;    \n\
    }\n\
    return subFaceStartUV + uv;\n\
}\n\
\n\
(subdFaceStartUV, start) = getSubFaceUV(subdFaceIndex, subdLevel);\n\
subdVertexUV = getSubVertexUV(start, subdFaceStartUV, subdVertexIndex);\n\
subdVertexUV /= pow(2, subdLevel);\n\
</pre></div><div class=\'section\'><a id=\"data-remapping-interfaces\"></a><h2 id=\"data-remapping-interfaces\">Data remapping interfaces</h2></div>\n\
<p>For both Viewport 1 and Viewport 2.0, it is possible to retrieve remapped data by specifying the requirement for the following data buffers via the appropriate hardware shader interface. The following remapping data is currently available:</p>\n\
<ul>\n\
<li><p>Vertex ids</p></li>\n\
<li><p>Face ids</p></li>\n\
<li><p>Per face local parameterization</p></li>\n\
</ul>\n\
<p>The data can be used directly instead of computing the remapping at draw time using the logic previously described. In addition, the data is cached and is only updated as required when topological operations affect the polygonal shape.</p>\n\
<p>When an object’s geometry has not been smoothed for display:</p>\n\
<ul>\n\
<li>The original face ids are returned in ascending order.</li>\n\
<li><p>The original vertex ids are returned per face.</p></li>\n\
<li><p>The local parameterization degenerates to a unit square per face.</p></li>\n\
</ul>\n\
<p>When smoothing for display is enabled:</p>\n\
<ul>\n\
<li><p>The base face ids are returned. The ordering is per subdivided faces in ascending order.</p></li>\n\
<li><p>The subdivided vertex ids are returned. The ordering is per subdivided faces in ascending order. As vertices may be generated for display purposes, there will be vertex ids that do not correspond to any vertex on the base mesh. If desired, these vertices can be matched with the vertex ids on the smooth mesh geometry extracted via the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a></span> interface.</p></li>\n\
<li><p>The local parameterization maps each vertex to a unit square on the base face. The ordering is per subdivided face in ascending order.</p></li>\n\
</ul>\n\
<p>The data buffers returned for VP1 and VP2 have consistent data and ordering, as long as the request for VP2 buffers includes a request for unshared data. Note that VP1 always returns unshared data.</p>\n\
<p>If additional data is required for remapping, this can be done by adding additional per-vertex streams at the object level (such as color sets).</p>\n\
<div class=\'section\'><a id=\"viewport-1-mpxhwshadernode-access\"></a><h3 id=\"viewport-1-mpxhwshadernode-access\">Viewport 1: MPxHwShaderNode access</h3></div>\n\
<p>To request additional information, the following API methods can be overridden by classes that derive from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span>:</p>\n\
<ul>\n\
<li>Vertex ids can be requested by overriding the method:\n\
<ul>\n\
<li><span class=\'code\'>bool <a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode::provideVertexIDs()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html#ac8569dc0556726f17320788563f034c6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#a8f7f3674c24e31185e58db1de5d02074&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode::provideVertexIDs()</a></span></li>\n\
</ul></li>\n\
<li>Face ids can be requested by overriding the method:\n\
<ul>\n\
<li><span class=\'code\'>bool <a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode::provideFaceIDs()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html#afa61effad561b9564e161fe930bd038c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode::provideFaceIDs()</a></span></li>\n\
</ul></li>\n\
<li>Local parameterization can be requested by overriding the method:\n\
<ul>\n\
<li><span class=\'code\'>bool <a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode::provideLocalUVCoord()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html#a276892ea9def000206de6522deccc137&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode::provideLocalUVCoord()</a></span></li>\n\
</ul></li>\n\
</ul>\n\
<p>The information is cached and returned as CPU data buffers via the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode::geometry()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html#acd6773ef64b27965c09ed584830bf8f3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#af1baeed92db0ea0cbf886dba96bc3ded&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode::geometry()</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode::glGeometry()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html#a495a60eaa1df3815d5565e79e08c90ac&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#aaad4a5849a82c09fdd362affff51fcf4&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode::glGeometry()</a></span> methods. The signature for <span class=\'code\'>glGeometry()</span> is:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStatus</a> <a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode::glGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html#a495a60eaa1df3815d5565e79e08c90ac&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode::glGeometry</a>( const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a>&amp; shapePath,\n\
    int prim,\n\
    unsigned int writable,\n\
    int indexCount,\n\
    const unsigned int * indexArray,\n\
    int vertexCount,\n\
    const int * vertexIDs,\n\
    const float* vertexArray,\n\
    int normalCount,\n\
    floatArrayPtr normalArrays,\n\
    int colorCount,\n\
    floatArrayPtr colorArrays,\n\
    int texCoordCount,\n\
    floatArrayPtr texCoordArrays,\n\
    const int * faceIDs,\n\
    const float * localUVCoord)\n\
</pre></div><p>Sample code to obtain this data can found in the <em>hwPhongShader</em> plug-in example. Below is a code sample from within the <span class=\'code\'>glGeometry()</span> method implementation:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Dump out vertexIDs\n\
if (vertexIDs)\n\
{\n\
    for (int i=0; i&lt;vertexCount; i++)\n\
    {\n\
        printf(&quot;%d\\n&quot;, vertexIDs[i]);\n\
    }\n\
}\n\
\n\
// Dump out face IDs\n\
if (faceIDs)\n\
{\n\
    for (int i=0; i&lt;vertexCount; i++)\n\
    {\n\
        printf(&quot;%d\\n&quot;, faceIDs[i]);\n\
    }\n\
}\n\
}\n\
\n\
// Dump out float pairs for the local parameterization (UV)\n\
if (localUVCoord)\n\
{\n\
    for (int i = 0; i &lt; vertexCount; i++)\n\
    {\n\
        printf(&quot;(%g, %g)\\n&quot;, localUVCoord[i*2], localUVCoord[i*2 + 1]);\n\
    }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"viewport-2.0-mpxshaderoverride-access\"></a><h3 id=\"viewport-2.0-mpxshaderoverride-access\">Viewport 2.0: MPxShaderOverride Access</h3></div>\n\
<p>VP2 will not, by default, return completely unshared data. A new interface has been added to specify this requirement via:</p>\n\
<ul>\n\
<li><span class=\'code\'>bool MPxShaderOverride::requiresUnsharedGeometricSteams()</span></li>\n\
</ul>\n\
<p>A plug-in can override this method to return true in order to force geometric streams to be expanded.</p>\n\
<p>To obtain the face ids, vertex ids or local parametrization, the following <em>semantics</em> have been added (instead of a new interface on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>):</p>\n\
<ul>\n\
<li><p>vertexid : When set will return a vertex id buffer</p></li>\n\
<li><p>faceid : When set will return a face id buffer</p></li>\n\
<li><p>localuvcoord : When set will return a local UV coordinate buffer</p></li>\n\
</ul>\n\
<p>The following example code from the <em>hwPhongShader</em> plug-in example specifies three extra streams within its <span class=\'code\'>initialize()</span> method.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Ask for vertex IDs\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> vertexIdDesc(\n\
    empty,\n\
    MHWRender::MGeometry::kTexture,\n\
    MHWRender::MGeometry::kFloat,\n\
    1);\n\
vertexIdDesc.setSemanticName(&quot;vertexid&quot;);\n\
addGeometryRequirement(vertexIdDesc);\n\
\n\
// Ask for face IDs\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> faceIdDesc(\n\
    empty,\n\
    MHWRender::MGeometry::kTexture,\n\
    MHWRender::MGeometry::kFloat,\n\
    1);\n\
faceIdDesc.setSemanticName(&quot;faceid&quot;);\n\
addGeometryRequirement(faceIdDesc);\n\
\n\
// Ask for local parameterization data\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> localUvCoordDesc(\n\
    empty,\n\
    MHWRender::MGeometry::kTexture,\n\
    MHWRender::MGeometry::kFloat,\n\
    1);\n\
faceIdDesc.setSemanticName(&quot;localuvcoord&quot;);\n\
addGeometryRequirement(localUvCoordDesc);\n\
\n\
</pre></div><p>Sample extraction code (also from the same plug-in) is shown here:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for (int vbIdx=0; vbIdx&lt;geometry-&gt;vertexBufferCount(); vbIdx++)\n\
{\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>* vb = geometry-&gt;vertexBuffer(vbIdx);\n\
    if (!vb) continue;\n\
\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a>&amp; desc = vb-&gt;descriptor();\n\
    if (desc.dimension() != 1) continue;\n\
\n\
    // Check if semantic is for the streams we’re looking for.\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> semanticName = desc.semanticName();\n\
\n\
    // Dump out local parameterization. Each pair of float values gives\n\
    // a local UV on the base face.\n\
    if (semanticName == &quot;localuvcoord&quot;)\n\
    {\n\
        // Cancel constness to map buffer and dump data.\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>* \n\
        nonConstVB = const_cast&lt;<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>*&gt;(vb);\n\
    \n\
        const float *ptr = (const float*)nonConstVB-&gt;map();\n\
        for (unsigned int k = 0; k &lt; vb-&gt;vertexCount(); k++)\n\
        {\n\
            printf(&quot;%s[%d] = (%g, %g)\\n&quot;, semanticName.asChar(), \n\
                k, ptr[2*k], ptr[2*k + 1]);\n\
        }\n\
        nonConstVB-&gt;unmap();\n\
    }\n\
\n\
    // Dump out vertex or face identifiers. If smoothed the vertex ids will be\n\
    // the smoothed ids, but the face ids are always the base face ids.\n\
    //\n\
    if (semanticName != &quot;vertexid&quot; &amp;&amp; semanticName != &quot;faceid&quot;) continue;\n\
\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>* nonConstVB = const_cast&lt;<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a>*&gt;(vb);\n\
    const float *ptr = (const float*)nonConstVB-&gt;map();\n\
    for (unsigned int k=0; k&lt;vb-&gt;vertexCount(); k++)\n\
    {\n\
        printf(&quot;%s[%d] = %f\\n&quot;, semanticName.asChar(), k, ptr[k] );\n\
    }\n\
    nonConstVB-&gt;unmap();\n\
}\n\
</pre></div><div class=\'section\'><a id=\"viewport-2.0-mgeometryextractor-access\"></a><h3 id=\"viewport-2.0-mgeometryextractor-access\">Viewport 2.0: MGeometryExtractor Access</h3></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/New_Odd.png\' title=\'\' /></div>\n\
<p>Viewport 2.0 also exposes the access of vertex ids, face ids and local parameterization via the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryExtractor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryExtractor</a></span> interface. To extract completely unshared geometric data from a DAG shape, <span class=\'code\'>kPolyGeom_NotSharing</span> needs to be specified when constructing an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryExtractor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryExtractor</a></span> instance.</p>\n\
<p>Example code from the <em>geometryReplicator</em> plug-in is shown here.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStatus</a> status;\n\
MHWRender::MPolyGeomOptions options = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::kPolyGeom_Normal\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/namespace_m_h_w_render.html#adc29c2ff13d900c2f185ee95427fb06ca6f4996143f966bf5534e8dae77fb015d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::kPolyGeom_Normal</a>;\n\
if (requiresUnsharedGeometricStreams(requirements))\n\
{\n\
    options = options | <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::kPolyGeom_NotSharing\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/namespace_m_h_w_render.html#adc29c2ff13d900c2f185ee95427fb06ca891eaab0dc4731ae402710120a0aa503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::kPolyGeom_NotSharing</a>;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryExtractor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryExtractor</a> extractor(requirements, fPath, options, &amp;status);\n\
</pre></div><p>The following code snippet illustrates how the <em>geometryReplicator</em> plug-in determines whether unshared data is required, according to the geometry requirements.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool requiresUnsharedGeometricStreams(const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MGeometryRequirements\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MGeometryRequirements</a>&amp; requirements)\n\
{\n\
    // Only when vertexid, faceid or localuvcoord is required do the unshared geometric\n\
    // streams need to be extracted\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptorList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptorList</a>&amp; descList = requirements.vertexRequirements();\n\
    for (int reqNum = 0; reqNum &lt; descList.length(); ++reqNum)\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> desc;\n\
        if (descList.getDescriptor(reqNum, desc) &amp;&amp;\n\
            desc.semantic() == MHWRender::MGeometry::kTexture)\n\
        {\n\
            const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> semanticName = desc.semanticName();\n\
            if (semanticName == &quot;vertexid&quot; ||\n\
                semanticName == &quot;faceid&quot; ||\n\
                semanticName == &quot;localuvcoord&quot;)\n\
            {\n\
                    return true;\n\
            }\n\
        }\n\
    }\n\
    return false;\n\
}\n\
</pre></div><p>Similar to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, there is no new interface on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryExtractor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry_extractor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometryExtractor</a></span> that requests vertex ids, face ids or local parameterization. Instead <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptor</a></span> should be specified with the following semantic names to populate these vertex buffers:</p>\n\
<ul>\n\
<li>“vertexid” : When set, will return a vertex id buffer</li>\n\
<li>“faceid” : When set, will return a face id buffer</li>\n\
<li>“localuvcoord” : When set, will return a local uv coordinate buffer</li>\n\
</ul>\n\
<p>Although these semantic names are not specified directly in the <em>geometryReplicator</em> plug-in, they will be included in the geometry requirements if a <em>geometryReplicator</em> node is assigned a <em>hwPhongShader</em>. The following example illustrates how to specify any of them explicitly.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Request vertex IDs (or face IDs, local parameterization)\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBufferDescriptor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBufferDescriptor</a> vertexIdDesc(\n\
    empty,\n\
    MHWRender::MGeometry::kTexture,\n\
    MHWRender::MGeometry::kFloat,\n\
    1);\n\
vertexIdDesc.setSemanticName(&quot;vertexid&quot;);\n\
\n\
// Create a vertex buffer via MGeometry interface, extract and fill the data.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MVertexBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MVertexBuffer</a> vertexBuffer = geometry.createVertexBuffer(vertexIdDesc);\n\
unsigned int vertexCount = extractor.vertexCount();\n\
float* data = (float*)vertexBuffer-&gt;acquire(vertexCount, true);\n\
if (data &amp;&amp; extractor.populateVertexBuffer(data, vertexCount, vertexIdDesc))\n\
{\n\
    vertexBuffer-&gt;commit(data);\n\
}\n\
</pre></div><div class=\'section\'><a id=\"accessing-data-via-index-buffers\"></a><h3 id=\"accessing-data-via-index-buffers\">Accessing data via index buffers</h3></div>\n\
<p>Index buffers that are provided at render time can be used to access the data buffers on a per triangle basis.</p>\n\
<p>As VP1 has no consolidation, and vertices are unshared, every 3 indices reference a vertex id for a triangle in ascending face order.</p>\n\
<p>For VP2, consolidation may result in a set of sub-ranges in the index buffer. Each range delineates the data used for each object that was consolidated. To avoid ambiguous mapping, unshared data should always be requested. Refer to <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Effect-Overrides.html#consolidation-considerations\' title=\'\'>Consolidation considerations</a> for more details on range handling.</p>\n\
<p>The <em>hwPhongShader</em> plug-in includes sample code that demonstrates how to extract indexing information for both VP1 and VP2. For VP2, range handling sample debugging code is provided.</p>\n\
<div class=\'section\'><a id=\"example-1-unsmoothed-quad\"></a><h3 id=\"example-1-unsmoothed-quad\">Example 1: Unsmoothed quad</h3></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_UnsmoothedQuad.png\' title=\'\' /></div>\n\
<p>To examine the remapping that occurs, the <em>hwPhongShader</em> plug-in which uses the API to extract additional data buffers is used for an example. In this case, an instance of that shader is assigned to a shape with a single quad as shown above. The base face id and base vertex ids are shown, as well as the start vertex (dot) and winding order (curved arrow).</p>\n\
<p>The render time buffers would look like this:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Vertex Id (CCW winding)</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Face id</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Local UV</em>\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0)\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"example-2-smoothed-level-1-quad---opensubdiv-catmull-clark\"></a><h3 id=\"example-2-smoothed-level-1-quad---opensubdiv-catmull-clark\">Example 2: Smoothed Level 1 Quad - OpenSubdiv Catmull-Clark</h3></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_SmoothedLevel1Quad_OpenSubd.png\' title=\'\' /></div>\n\
<p>The topology shown above demonstrates one level of smoothing using OpenSubdiv. The start and winding order per sub-face and sub vertex is consistent for all levels with the base face.</p>\n\
<p>The data buffers would appear as follows. Note that:</p>\n\
<ul>\n\
<li><p>The Sub-Face Id column is added to show its correlation to the topology shown above, but is not provided as a separate vertex buffer.</p></li>\n\
<li><p>Vertex ids 6 to 8 are not part of the base mesh.</p>\n\
<p>Vertex ids 4, 5, 6, 7, 8 are vertices introduced as part of smoothing. The base mesh has vertices 0, 1, 2, 3. The dotted lines show where the subdivision occurred due to the smoothing operation.</p></li>\n\
<li><p><strong>The local parameterization simply provides values to show the interpolation relative to the base vertices</strong>, and is not related to the actual placement of the vertex within the base face. For example, if vertex 8 was actually positioned close to vertex 0, the local UV value would still be (0.5,0.5), such as in this geometry:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_SmoothedLevel1Quad_OpenSubd2.png\' title=\'\' /></div></li>\n\
</ul>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Vertex Id (CCW)</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Face Id</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Sub-Face Id</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Local UV</em>\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0)\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>The provided index buffer can be used to access information per triangle.</p>\n\
<p>As noted, the triangle split may not match the value specified for the <span class=\'code\'>quadSpit</span> attribute on the polygonal shape. If we are given this triangulation:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_SmoothedLevel1Quad_Triangulation.png\' title=\'\' /></div>\n\
<p>Then the index buffer would look something like this.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Triangle number</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Vertex Id</em>\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"example-3-smoothed-level-1-quad-legacy-catmull-clark\"></a><h3 id=\"example-3-smoothed-level-1-quad-legacy-catmull-clark\">Example 3: Smoothed Level 1 Quad – Legacy Catmull-Clark</h3></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_SmoothedLevel1Quad_LegacyCatmull.png\' title=\'\' /></div>\n\
<p>The topology above demonstrates one level of smoothing using the Legacy Catmull-Clark subdivision method. The shifting of the start of sub-faces and sub-vertices can be seen.</p>\n\
<p>The data buffers would be as follows. As in Example 2, the Sub-Face Id column is added to show its correlation to the topology shown above, and is not provided as a buffer.</p>\n\
<p>The shift in sub-face and sub-vertex start positions reflects what is shown in the diagram.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Vertex Id (CCW)</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Face Id</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Sub-Face Id</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Local UV</em>\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Legacy Catmull-Clark has different indexing than OpenSubdiv Catmull-Clark, based on the fact that its start face and start vertices differ. Therefore, using the same example, the triangulation appears as follows:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_SmoothedLevel1Quad_LegacyCatmull_Triangulate.png\' title=\'\' /></div>\n\
<p>The indexing would be as follows:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Triangle number</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Vertex Id</em>\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"example-4-smoothed-level-2-quad-legacy-catmull-clark\"></a><h3 id=\"example-4-smoothed-level-2-quad-legacy-catmull-clark\">Example 4: Smoothed Level 2 Quad – Legacy Catmull-Clark</h3></div>\n\
<p>The following image shows a subdivision of level 2 using the Legacy Catmull-Clark method, and illustrates a repeat of the subdivision pattern.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/GeomRemap_SmoothedLevel2Quad_LegacyCatmull.png\' title=\'\' /></div>\n\
<p>With the following data trace from the <em>hwPhongShader</em> plug-in:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col />\n\
<col />\n\
<col />\n\
<col />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Vertex Id (CCW)</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Face Id</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Sub-Face Id</em>\n\
</th>\n\
<th class=\"table-heading\">\n\
<em class=\"strong\">Local UV</em>\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
10\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
13\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
21\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
13\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
18\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
21\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
1\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
18\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
17\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
21\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
17\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
10\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
21\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
14\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
3\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
16\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
22\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
16\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
19\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
22\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
19\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
18\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
22\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
18\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
6\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
14\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 1)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
22\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.75)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
15\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
2\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
12\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
23\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
12\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
9\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
9\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
20\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
9\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
23\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
9\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
20\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
10\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
10\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
19\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
10\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
23\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
10\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
19\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
11\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
7\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
11\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
15\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
11\n\
</td>\n\
<td class=\"table-body\">\n\
(1, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
23\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
11\n\
</td>\n\
<td class=\"table-body\">\n\
(0.75, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
11\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
12\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
12\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
9\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
12\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
24\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
12\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
9\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
13\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
4\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
13\n\
</td>\n\
<td class=\"table-body\">\n\
(0, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
17\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
13\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
24\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
13\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
17\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
14\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
8\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
14\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.5)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
20\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
14\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
24\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
14\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
20\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
15\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0.25)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
5\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
15\n\
</td>\n\
<td class=\"table-body\">\n\
(0.5, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
11\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
15\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0)\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
24\n\
</td>\n\
<td class=\"table-body\">\n\
0\n\
</td>\n\
<td class=\"table-body\">\n\
15\n\
</td>\n\
<td class=\"table-body\">\n\
(0.25, 0.25)\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";