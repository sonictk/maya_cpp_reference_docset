var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The five basic polygonal API classes</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The five basic polygonal API classes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-five-basic-polygonal-api-classes\"></a></div>\n\
<p>The Poly API consists of five main classes:</p>\n\
<ul>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a></span></p>\n\
<p>See <a href=\'#!/url=./dev_help/Polygon-API/The-five-basic-polygonal-API.html#mitmeshpolygon\' title=\'\'>MItMeshPolygon</a>.</p></li>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshEdge\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshEdge</a></span></p>\n\
<p>See <a href=\'#!/url=./dev_help/Polygon-API/The-five-basic-polygonal-API.html#mitmeshedge\' title=\'\'>MItMeshEdge</a>.</p></li>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshVertex\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_vertex.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_vertex.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshVertex</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshFaceVertex\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_face_vertex.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshFaceVertex</a></span></p>\n\
<p>See <a href=\'#!/url=./dev_help/Polygon-API/The-five-basic-polygonal-API.html#mitmeshvertex-and-mitmeshfacevertex\' title=\'\'>MItMeshVertex and MItMeshFaceVertex</a>.</p></li>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span></p>\n\
<p>See <a href=\'#!/url=./dev_help/Polygon-API/The-five-basic-polygonal-API.html#mfnmesh\' title=\'\'>MFnMesh</a>.</p></li>\n\
</ul>\n\
<p>The first four classes are iterators while the last class is a function set. The polygon iterators are primarily used to navigate or parse a mesh component by component and retrieve component specific information. The polygon function set, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span>, is used to create, modify, and retrieve mesh specific data.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Although the iterators contain a few methods that can be used to modify the mesh, it is good practice to rely on the iterators solely for navigating the mesh and accessing component specific data. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> provides all the necessary methods to perform any other desired operation on the mesh.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"mitmeshpolygon\"></a><h2 id=\"mitmeshpolygon\">MItMeshPolygon</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a></span> is a polygonal face iterator. Initializing this class to a specific mesh object lets you iterate over all faces in a mesh, in order of face ids. Alternatively, the iterator can be restricted to the faces adjacent to a given component (for example, edge or vertex) by initializing the class to both a DAG path referring to the mesh and an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> reference to certain components.</p>\n\
<p>This iterator is useful for parsing a mesh as it can traverse the mesh more quickly—there are fewer faces than edges and vertices and less overlap in data retrieval. As a face iterator, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a></span> provides methods to retrieve face-specific data mostly comprised of:</p>\n\
<ul>\n\
<li>Face composition (a number of edges greater than 2)</li>\n\
<li>Face-vertex data</li>\n\
<li>Face-edge data</li>\n\
<li>Adjacent component data</li>\n\
<li>UV data</li>\n\
<li>Color per vertex data</li>\n\
<li>And other miscellaneous data, such as blind data and smoothing information</li>\n\
</ul>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a></span> is ideal for cases where you would like to quickly search a mesh on a face-by-face basis or when you require face specific data from the mesh. To see how this class is used, refer to the <a href=\'#!/url=./dev_help/Polygon-API/splitUVCmd-example.html\' title=\'\'>splitUVCmd example</a>. The following example also illustrates the use of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a></span> class. In this sample code, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a></span> is used to traverse the mesh for a specific face and then retrieve the edges making up the face.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> getFaceEdges( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh,\n\
                     int faceId,\n\
                     <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> faceEdges )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // Reset the faceEdges array\n\
    //\n\
    faceEdges.clear();\n\
    // Initialize a face iterator and function set\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a> faceIter( mesh, &amp;status );\n\
    MCheckStatus( status, &quot;<a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a> constructor failed&quot; );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> meshFn( mesh, &amp;status );\n\
    MCheckStatus( status, &quot;<a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> constructor failed&quot; );\n\
    // Check to make sure that the faceId passed in is valid\n\
    //\n\
    if( faceId &gt;= meshFn.numPolygons() || faceId &lt; 0 )\n\
    {\n\
        cerr &lt;&lt; &quot;Invalid faceId.\\n&quot;;\n\
        status = MS::kFailure;\n\
    }\n\
    else\n\
    {\n\
        // Now parse the mesh for the given face and\n\
        // return the edges\n\
        //\n\
        for( ; !faceIter.isDone(); faceIter.next() )\n\
        {\n\
            // If we find the matching face, retrieve the\n\
            // edge indices\n\
            //\n\
            if( faceIter.index() == faceId )\n\
            {\n\
                faceIter.getEdges( faceEdges );\n\
                break;\n\
            }\n\
        }\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"mitmeshedge\"></a><h2 id=\"mitmeshedge\">MItMeshEdge</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshEdge\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshEdge</a></span> iterates over the mesh on an edge-by-edge basis and retrieves edge specific data. This edge iterator iterates over the edges in order of edge ids or it iterates over the edges adjacent to a passed in component. <span class=\'code\'>MltMeshEdge</span> can retrieve the following types of data:</p>\n\
<ul>\n\
<li>Edge composition (two vertices)</li>\n\
<li>Edge-face data</li>\n\
<li>Edge-vertex data</li>\n\
<li>Edge smoothing</li>\n\
<li>Adjacent component data</li>\n\
</ul>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshEdge\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshEdge</a></span> is best suited for an edge-by-edge traversal of the mesh and for fetching edge specific data. The following sample code illustrates the use of the edge iterator. This example traverses each edge in the mesh and collects their start vertices, storing them inside an array indexed by edge id.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> getEdgeStartVertices( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh,\n\
                             <a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a>&amp; pointArray )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // Clear the output array\n\
    //\n\
    pointArray.clear();\n\
    // Initialize our iterator\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MItMeshEdge\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshEdge</a> edgeIter( mesh, &amp;status );\n\
    MCheckStatus( status, &quot;<a href=\"javascript:void(0)\" data-symbol=\"MItMeshEdge\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_edge.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshEdge</a> constructor failed&quot; );\n\
    // Now parse the mesh\n\
    //\n\
    for( ; !edgeIter.isDone(); edgeIter.next() )\n\
    {\n\
        // Retrieve the start vertex of each edge and append it to\n\
        // our point array. Use the default object coordinate\n\
        // system for our space\n\
        //\n\
        pointArray.append( edgeIter.point(0, MSpace::kObject) );\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"mitmeshvertex-and-mitmeshfacevertex\"></a><h2 id=\"mitmeshvertex-and-mitmeshfacevertex\">MItMeshVertex and MItMeshFaceVertex</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshVertex\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_vertex.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_vertex.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshVertex</a></span> iterates over the mesh on a vertex-by-vertex basis in order of vertex ids, retrieving vertex specific data. The vertex iterator is best suited for those two cases and can retrieve vertex specific data such as:</p>\n\
<ul>\n\
<li>Vertex composition (a 3D position)</li>\n\
<li>Vertex-face data</li>\n\
<li>Vertex-edge data</li>\n\
<li>Vertex normals</li>\n\
<li>UV data (specific to a vertex)</li>\n\
<li>Color data (specific to a vertex)</li>\n\
<li>Adjacent component data</li>\n\
</ul>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItMeshFaceVertex\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_face_vertex.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshFaceVertex</a></span> iterates over the mesh on a face vertex-by-face vertex basis in order of face ids, retrieving face-vertex specific data. The face vertex iterator can retrieve data such as:</p>\n\
<ul>\n\
<li>Normal data</li>\n\
<li>UV data</li>\n\
<li>Color data</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"mfnmesh\"></a><h2 id=\"mfnmesh\">MFnMesh</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> contains several methods for retrieving mesh specific data and modifying a mesh. You could use an iterator to find a particular component and use <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> to perform an operation on that component. This is shown in the <a href=\'#!/url=./dev_help/Polygon-API/splitUVCmd-example.html\' title=\'\'>splitUVCmd example</a> which searches the mesh for a given UV and uses <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> to &quot;split&quot; the UVs.</p>\n\
<p>Although there is some overlap between the methods provided by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> and the <span class=\'code\'>MItMesh</span>* iterators, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> represents more of a global library of operations for the mesh, while the iterators remain centric around their respective components. The following sample code demonstrates some things you might use <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> for. The example retrieves various data and modifies it. Note that this code cannot be compiled.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// The argument list contains a &quot;...&quot; to represent a &quot;Fill in\n\
// the data you would like here&quot;\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> getRandomPolyData( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh, ... )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // Initialize a function set to a polygonal mesh\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> meshFn( mesh, &amp;status );\n\
    MCheckStatus( status, &quot;<a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> constructor failed&quot; );\n\
    // Retrieve topological information\n\
    //\n\
    int faceCount = meshFn.numPolygons();\n\
    int edgeCount = meshFn.numEdges();\n\
    int vertexCount = meshFn.numVertices();\n\
    int faceVertexCount = meshFn.polygonVertexCount();\n\
    int UVCount = meshFn.numUVs();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a> vertexList;\n\
    meshFn.getPoints( vertexList );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatArray</a> UArray;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatArray</a> VArray;\n\
    meshFn.getUVs( UArray, VArray );\n\
    // Modify topological information\n\
    //\n\
    // Add a UV to the UV list – setUV will automatically grow\n\
    // the UV list, based on the given index\n\
    //\n\
    meshFn.setUV( numUVs, 0.0, 0.0 );\n\
    // Move vertex 0 to the origin of the world\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a> origin( 0.0, 0.0. 0.0 );\n\
    meshFn.setPoint( 0, origin, MSpace::kWorld );\n\
    // Can also work with:\n\
    //\n\
    // - Vertex Colors\n\
    // - Blind data\n\
    // - etc.\n\
    //\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";