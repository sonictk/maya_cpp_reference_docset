var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>splitUVCmd example</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>splitUVCmd example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"splituvcmd-example\"></a></div>\n\
<p>(Source code is located in the Developer Kit <span class=\'code\'>\\plug-ins</span> directory.)</p>\n\
<p>The splitUV command is a MEL command used to unshare or &quot;split&quot; the selected UVs of a polygonal mesh. A UV is a point on a 2D texture plane that is used to map textures onto a mesh. To properly associate these UVs with a mesh, each face can either be mapped or unmapped. If a face is mapped, each vertex belonging to that face is associated with a UV. This relationship is known as a face-vertex relationship. (For more information, see <a href=\'#!/url=./developer/Polygon-API/How-polygons-are-handled.html#face-vertices\' title=\'\'>Face-Vertices</a>.)</p>\n\
<p>For a better understanding of what splitting a UV means, try the following steps in Maya:</p>\n\
<ol>\n\
<li>Create a square 3x3 face polygonal plane.</li>\n\
<li>With the plane selected, open the UV Texture Editor (Edit UVs &gt; UV Texture Editor).</li>\n\
<li>Change the selection mode to UVs.</li>\n\
<li>Select a UV inside the plane (not along the border).</li>\n\
<li>Select the Move tool.</li>\n\
<li>Drag the UV around and notice that there is only a single UV.</li>\n\
<li>Change the selection mode to Edges.</li>\n\
<li>Select all four edges surrounding the UV you moved.</li>\n\
<li>Select Edit UVs &gt; Cut UV Edges.</li>\n\
<li>Change the selection mode back to UVs.</li>\n\
<li>Click once on the selected UV. (Make sure you do not drag over the UV or you will select them all.)</li>\n\
<li>Turn on the display of unshared UVs (Display &gt; Polygons &gt; Unshared UVs).</li>\n\
<li>Drag the UV around and notice that it is no longer shared among the faces but is a single UV with its own face.</li>\n\
<li>\\[Optional\\] Turn on the display of texture borders (Display &gt; Polygons &gt; Texture Border Edges) to reveal the new borders introduced by the cut operation.</li>\n\
</ol>\n\
<p>The Cut UV Edges command operates on edges of a mesh while splitUV operates on a UV.</p>\n\
<p>UVs are stored in a single linear array, indexed by face vertices. Each face vertex indexes a specific UVId, and in turn each UVId represents a single UV point on a texture map. Thus the same number of faces that share the UV would index a shared UVId. (For more information, see <a href=\'#!/url=./developer/Polygon-API/How-polygons-are-handled.html#uvs\' title=\'\'>UVs</a>.)</p>\n\
<p>You need to add a number of UVs (at the same 2D coordinates) equal to the total number of faces that share the UV minus one. Subtract one knowing you already have at least one UV already associated to a shared face, which leaves one less face and UV to create and associate. Now associate each of the new UVs to one of the faces that shared the original UV, leaving one of the faces indexing the original UV itself. This leaves each face with an unshared UV at their respective face-vertex location.</p>\n\
<div class=\'section\'><a id=\"initial-implementation\"></a><h2 id=\"initial-implementation\">Initial implementation</h2></div>\n\
<p>First gather your input—in this case the selected UVs. Obtain the selection list and filter it for the first object you find with selected UVs. For simplicity, only the first object encountered with selected UVs is taken. You can easily extend this to operate on multiple objects.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Get the active selection list and filter for poly objects.\n\
// Also create a selection list iterator to parse the list\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a> selList;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MGlobal::getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::getActiveSelectionList</a>( selList );\n\
<a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItSelectionList</a> selListIter( selList );\n\
selListIter.setFilter( <a href=\"javascript:void(0)\" data-symbol=\"MFn::kMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kMesh</a> );\n\
// Declare a dagPath and component to store a reference to the\n\
// mesh object and selected components\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> dagPath;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> component;\n\
// Now parse the selection list for poly objects with selected\n\
// UVs\n\
//\n\
for( ; !selListIter.isDone(); selListIter.next() )\n\
{\n\
    selListIter.getDagPath( dagPath, component );\n\
    // Check for selected UVs\n\
    //\n\
    if( component.apiType() == <a href=\"javascript:void(0)\" data-symbol=\"MFn::kMeshMapComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a0b774c2a128a8b2365fff164212f2e43&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kMeshMapComponent</a> )\n\
    {\n\
        break;\n\
    }\n\
}\n\
// Now we break down the component object into an int array\n\
// of UVIds\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MFnSingleIndexedComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_single_indexed_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSingleIndexedComponent</a> compFn( component );\n\
<a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> selUVs;\n\
compFn.getElements( selUVs );\n\
\n\
</pre></div><p>Now you have the object to operate on and the selected UVs. Before you can perform the operation, you need to collect some preprocessing data—which faces share each selected UV and the UV vertex associations. Finally, you must cover for the possible appearance of multiple UV sets. Since UVs from only one UV set can be selected at any particular time, you only need to access the current active UV set and operate on that set.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Declare our processing variables\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> selUVSet;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> selUVFaceIdMap;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> selUVFaceOffsetMap;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> selUVLocalVertIdMap;\n\
// Make sure our dagPath points to a shape node. That is where\n\
// the topological/geometry data is stored (not on the transform)\n\
//\n\
dagPath.extendToShape();\n\
mesh = dagPath.node();\n\
// Initialize a mesh function set to our mesh\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> meshFn( mesh );\n\
// Get the current UV set name\n\
//\n\
meshFn.getCurrentUVSetName( selUVSet);\n\
// Now parse the mesh for face and vertex UV associations\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a> polyIter( mesh );\n\
int i;\n\
int j;\n\
int offset = 0;\n\
int selUVsCount = selUVs.length();\n\
for( i = 0; i &lt; selUVsCount; i++ )\n\
{\n\
    // Append the current offset in the faceId map to the\n\
    // faceOffset map so we have an index reference into the\n\
    // faceId map for each selected UV. In other words,\n\
    // for each offset value, we have a number of faces equal\n\
    // to (faceOffsetMap[i+1] – faceOffsetMap[i]) that share\n\
    // the UV that that offset value represents.\n\
    //\n\
    selUVFaceOffsetMap.append( offset );\n\
    // Parse the mesh for faces which share the current UV\n\
    //\n\
    for( ; !polyIter.isDone(); polyIter.next() )\n\
    {\n\
        // Only continue if the face is mapped\n\
        //\n\
        if( polyIter.hasUVs() )\n\
        {\n\
            // Now parse the vertices of each face and check for\n\
            // the current UV\n\
            //\n\
            int polyVertCount = polyIter.polygonVertexCount();\n\
            for( j = 0; j &lt; polyVertCount; j++ )\n\
            {\n\
                int UVIndex = 0;\n\
                polyIter.getUVIndex( j, UVIndex );\n\
                // If we find the UV on this face, append the faceId,\n\
                // append the local vertex (relative to the current\n\
                // face) and increment our offset.\n\
                //\n\
                if( UVIndex == selUVs[i] )\n\
                {\n\
                    selUVFaceIdMap.append( polyIter.index() );\n\
                    selUVLocalVertIdMap.append(j);\n\
                    offset++;\n\
                    break;\n\
                }\n\
            }\n\
        }\n\
    }\n\
}\n\
// Finally append the last offset value so we can obtain the\n\
// number of faces that share the last UV in the list.\n\
//\n\
selUVFaceOffsetMap.append( offset );\n\
\n\
</pre></div><p>The face and face-vertex associations are stored using a similar technique used by Maya to store topological data for polygons. This technique is apparent in the code where the list of faces shared by each selected UV is accumulated. Rather than creating a multi dimensional array to store the list of faces shared by each selected UV, store it all in a single dimensional array (a data array). To do this you create another single dimensional array (an index array) to store the index values of the data array where each selected UV begins its list of faces.</p>\n\
<p>For each UV, parse the mesh for any faces sharing that particular UV. This is accomplished by parsing the face-vertices of each face in the mesh, looking at the associated UVId and comparing the UVId with the current UV. Now store the face Id and the local vertex Id (relative to the current face, enumerating from 0 to (faceVertexCount – 1)). Make note of the local vertex Id rather than the global or mesh vertex Id because UVs are assigned on a face-vertex basis.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Declare UV count variables so we can keep create and\n\
// keep track of the indices of the new UVs\n\
//\n\
int currentUVCount = meshFn.numUVs( selUVSet );\n\
// For each UV in our list of selected UVs, split the UV.\n\
//\n\
for( i = 0; i &lt; selUVsCount; i++ )\n\
{\n\
    // Get the current faceId map offset\n\
    //\n\
    offset = selUVFaceOffsetMap[i];\n\
    // Get the U and V values of the current UV\n\
    //\n\
    float u;\n\
    float v;\n\
    int UVId = selUVs[i];\n\
    meshFn.getUV( uvId, u, v, &amp;selUVSet );\n\
    // Get the number of faces sharing the current UV\n\
    //\n\
    int faceCount = selUVFaceOffsetMap[i+1]–selUVFaceOffsetMap[i];\n\
    // Arbitrarily choose that the last faceId in the list\n\
    // of faces sharing this UV will keep the original UV\n\
    //\n\
    for( j = 0; j &lt; faceCount – 1; j++ )\n\
    {\n\
        // Create a new UV (setUV dynamically sizes the UV array\n\
        // if the index value passed in exceeds the length of the\n\
        // UV array) with the same 2D coordinates as our UV.\n\
        //\n\
        meshFn.setUV( currentUVCount, u, v, &amp;selUVSet );\n\
        // Get the face and face-vertex info so we can assign\n\
        // our newly created UV to one of the faces in the list\n\
        // of faces sharing this UV\n\
        //\n\
        int localVertId = selUVLocalVertIdMap[offset];\n\
        int faceId = selUVFaceIdMap[offset];\n\
        // Associate the UV with the particular face vertex\n\
        //\n\
        meshFn.assignUV( faceId,\n\
            localVertId,\n\
            currentUVCount,\n\
            &amp;selUVSet );\n\
        // Increment our counters so we can create another new UV\n\
        // at the currentUVCount index. Increment the offset, so we\n\
        // can associate the next new UV with the next face in the\n\
        // the list of faces sharing this UV\n\
        //\n\
        currentUVCount++;\n\
        offset++;\n\
    }\n\
}\n\
\n\
</pre></div><p>There are two primary methods which are called to perform the actual split:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::setUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#afe8bc4718af88a29cca9ca0729c8395a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh::setUV()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::assignUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#aa8f5741f8b319715af87211e8274ea79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh::assignUV()</a></span></li>\n\
</ul>\n\
<p>Call the first method, setUV(), to create a new UVId. The method automatically grows the UV array to accommodate the index passed into the method. Thus in the code you can see a variable named currentUVCount which is continuously incremented after each new UV. currentUVCount keeps track of the index that is one element greater than the highest element in the UV array. Incrementing it after each iteration through the loop allows you to create a new UV, one at a time.</p>\n\
<p>Call the second and last method, assignUV(), to associate a given UVId with a face and face-vertex.</p>\n\
<div class=\'section\'><a id=\"integrating-into-the-maya-architecture\"></a><h2 id=\"integrating-into-the-maya-architecture\">Integrating into the Maya architecture</h2></div>\n\
<p>There are many intricacies involving modifying a polygonal mesh, including construction history and tweaks. If the mesh does not have history, you could attempt to unshare the UVs directly on the mesh itself. If the mesh has history, any DG evaluation from a node upstream in the construction history overwrites the mesh on the mesh node and the modifications made directly to the mesh would be lost. Even if that were the case, the existence of tweaks would change the appropriate place to write the modifications on the mesh.</p>\n\
<p>You need to look at the mesh node, analyze its state, and apply your operation accordingly. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> class polyModifierCmd (see <a href=\'#!/url=./developer/Polygon-API/polyModifierCmd-example.html\' title=\'\'>polyModifierCmd example</a>) was developed with the splitUV command to aid in abstracting the handling of construction history and tweaks. polyModifierCmd is a mid level command class designed for commands which intend to modify a polygonal mesh. It provides an outlet through which a poly command can take its code to modify a mesh directly and seamlessly integrate it into the Maya framework, accounting for both construction history and tweaks.</p>\n\
<p>polyModifierCmd is a good example of using the API and demonstrates how construction history and tweaks work.</p>\n\
<div class=\'section\'><a id=\"polymodifiercmd-enhanced-splituv\"></a><h2 id=\"polymodifiercmd-enhanced-splituv\">polyModifierCmd enhanced splitUV</h2></div>\n\
<p>Before you proceed with this section, read the <a href=\'#!/url=./developer/Polygon-API/polyModifierCmd-example.html\' title=\'\'>polyModifierCmd example</a>. This section steps through the implementation of a command based on polyModifierCmd.</p>\n\
<p>There are three main pieces of the polyModifierCmd that must be handled:</p>\n\
<ul>\n\
<li>A splitUV command</li>\n\
<li>A splitUV node</li>\n\
<li>A splitUV factory</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"splituv-factory\"></a><h3 id=\"splituv-factory\">splitUV factory</h3></div>\n\
<p>The factory is the lowest level of the splitUVCmd, which performs the operation given a set of inputs. The inputs are an integer array of UV Ids and a reference to the mesh you are about to modify. The rest fits inside the factory. The splitUVFty factory class interface is shown below.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class splitUVFty : polyModifierFty\n\
{\n\
    public:\n\
        splitUVFty();\n\
        virtual ~splitUVFty();\n\
        void setMesh( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh );\n\
        void setUVIds( <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> uvIds );\n\
        // polyModifierFty inherited methods\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doIt();\n\
    private:\n\
        // Mesh Node\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> fMesh;\n\
        // Selected UVs\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> fSelUVs;\n\
};\n\
\n\
</pre></div><div class=\'section\'><a id=\"splituv-node\"></a><h3 id=\"splituv-node\">splitUV node</h3></div>\n\
<p>There are two methods of deploying the factory. One is through the splitUV node and the other is directly through the command for certain exception cases where the node is not applicable. The splitUV node is used for cases where you want to build or add to an existing history chain in the DG.</p>\n\
<p>When a DG evaluation is propagated via a dirtied node, the DG evaluates from the top of the history chain where a copy of the original mesh (original referring to the node’s state denoting the start of this history) is located. It then takes a copy of that mesh and passes it in through each node in order, where the mesh is altered through each node evaluation. Once it reaches the final shape, you have a mesh placed onto the shape which holds all the modifications stored in the history chain. The splitUV node needs to take in a mesh input as well as an input of which UVs to modify, and pass that data down to an instance of the factory. The resulting mesh is then passed out through a mesh output attribute.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class splitUVNode : polyModifierNode\n\
{\n\
    public:\n\
        splitUVNode();\n\
        virtual ~splitUVNode();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> compute(const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data);\n\
        static void* creator();\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initialize();\n\
    private:\n\
        // Note: There needs to be an <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> handle for each\n\
        // attribute on the node. These handles are needed for\n\
        // setting and getting values later. The standard inMesh\n\
        // and outMesh attributes are already inherited from\n\
        // polyModifierNode, thus we only need to declare splitUVNode\n\
        // specific attributes\n\
        //\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> uvList;\n\
        // Node type identifier\n\
        //\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> id;\n\
        // We instantiate a copy of our splitUV factory on the node\n\
        // for it to perform the splitUV operation\n\
        //\n\
        splitUVFty fSplitUVFactory\n\
};\n\
\n\
</pre></div><p>The standard node interface is in the above class declaration. The only differences to note reside in the private members. From the class hierarchy, splitUVNode inherits an inMesh and outMesh attribute from polyModifierNode. We add yet another attribute to the node, specific to the splitUVNode, which consists of our only other input—the list of UVs to operate on.</p>\n\
<p>Notice that the node class has an instance of a splitUV factory. You create a distinct factory for each node so that the splitUVFty implementation would require no foreknowledge of which node is calling the operation. Continuing with the basic node setup, implement the basic methods in the above interface, creating and associating attributes, assigning a type id, etc.:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> splitUVNode::id( 0x34567 );\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUVNode::creator()\n\
{\n\
    return new splitUVNode();\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUVNode::initialize()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a> attrFn;\n\
    uvList = attrFn.create(&quot;inputComponents&quot;,\n\
        &quot;ics&quot;,\n\
        MFnComponentListData::kComponentList);\n\
    // To be stored during file-save\n\
    attrFn.setStorable(true);\n\
    inMesh = attrFn.create(&quot;inMesh&quot;,\n\
        &quot;im&quot;,\n\
        MFnMeshData::kMesh);\n\
    // To be stored during file-save\n\
    attrFn.setStorable(true);\n\
    // outMesh is read-only because it is an output attribute\n\
    //\n\
    outMesh = attrFn.create(&quot;outMesh&quot;,\n\
        &quot;om&quot;,\n\
        MFnMeshData::kMesh);\n\
    attrFn.setStorable(false);\n\
    attrFn.setWritable(false);\n\
    // Add the attributes we have created for the node\n\
    //\n\
    status = addAttribute( uvList );\n\
    if( !status )\n\
    {\n\
        status.perror(&quot;addAttribute&quot;);\n\
        return status;\n\
    }\n\
    status = addAttribute( inMesh );\n\
    if( !status )\n\
    {\n\
        status.perror(&quot;addAttribute&quot;);\n\
        return status;\n\
    }\n\
    status = addAttribute( outMesh );\n\
    if( !status )\n\
    {\n\
        status.perror(&quot;addAttribute&quot;);\n\
        return status;\n\
    }\n\
    // Set up a dependency between the inputs and the output.\n\
    // This will cause the output to be marked dirty when the\n\
    // input changes. The output will then be recomputed the\n\
    // next time it is requested.\n\
    //\n\
    status = attributeAffects( inMesh, outMesh );\n\
    if( !status )\n\
    {\n\
        status.perror(&quot;attributeAffects&quot;);\n\
        return status;\n\
    }\n\
    status = attributeAffects( uvList, outMesh );\n\
    if( !status )\n\
    {\n\
        status.perror(&quot;attributeAffects&quot;);\n\
        return status;\n\
    }\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>Finally, we turn towards the implementation of our <span class=\'code\'>compute()</span> method. The compute method is not overly complex. Since we have the factory to perform the operation, all the compute method needs to do is provide the factory with the references to the proper mesh to modify.</p>\n\
<p>Start as all plug-in nodes should and look to handle the ‘state’ attribute, inherited from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span>, on the node. The ‘state’ attribute holds a short integer representing how the DG treats the node. In a sense it is an override mechanism to alter how the node is treated during a DG evaluation. With respect to plug-in nodes, the only state of concern is the ‘HasNoEffect’ or ‘PassThrough’ state, where the node is ignored entirely. For the node to behave as though it were transparent, you need to redirect the <span class=\'code\'>inMesh</span> to the <span class=\'code\'>outMesh</span> without altering the mesh passing through. Otherwise the node behaves normally.</p>\n\
<p>Following the node state check, grab the UVs from the component list and the input mesh, assign the input mesh to the output mesh, and pass in these references to the factory. Assigning the input mesh to the output mesh allows you to operate directly on the output mesh, so that the output mesh will hold the modified mesh. From there, let the factory take care of the rest of the operation.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUVNode::compute(const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
    // Retrieve our state attribute value\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> stateData = data.outputValue(state,&amp;status);\n\
    MCheckStatus( status, &quot;ERROR getting state&quot; );\n\
    // Check for the HasNoEffect/PassThrough state\n\
    //\n\
    // (stateData is stored as a short)\n\
    //\n\
    // (0 = Normal)\n\
    // (1 = HasNoEffect/PassThrough)\n\
    // (2 = Blocking)\n\
    // ..\n\
    //\n\
    if( stateData.asShort() == 1 )\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputData = data.inputValue(inMesh,&amp;status);\n\
        MCheckStatus(status, &quot;ERROR getting inMesh&quot;);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outputData = data.outputValue(outMesh,&amp;status);\n\
        MCheckStatus(status, &quot;ERROR getting outMesh&quot;);\n\
        // Simply redirect the inMesh to the outMesh\n\
        //\n\
        outputData.set(inputData.asMesh());\n\
    }\n\
    else\n\
    {\n\
        // Check which output value we have been asked to compute.\n\
        // If the node doesn’t know how to compute it, return\n\
        // MS::kUnknownParameter.\n\
        //\n\
        if( plug == outMesh )\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputData = data.inputValue( inMesh,\n\
                &amp;status );\n\
            MCheckStatus(status, &quot;ERROR getting inMesh&quot;);\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outputData = data.outputValue( outMesh,\n\
                &amp;status );\n\
            MCheckStatus(status, &quot;ERROR getting outMesh&quot;);\n\
            // Now, we retrieve the input UV list\n\
            //\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputUVs = data.inputValue( uvList,\n\
                &amp;status );\n\
            MCheckStatus(status, &quot;ERROR getting uvList&quot;);\n\
            // Copy the inMesh to the outMesh so we can operate\n\
            // directly on the outMesh\n\
            //\n\
            outputData.set(inputData.asMesh());\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh = outputData.asMesh();\n\
            // Retrieve the UV list from the component list\n\
            //\n\
            // Note, we use a component list to store the components\n\
            // because it is more compact memory wise. (ie.\n\
            // comp[81:85] is smaller than comp[81],...,comp[85])\n\
            //\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> compList = inputUVs.data();\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MFnComponentListData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_component_list_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnComponentListData</a> compListFn( compList );\n\
            unsigned i;\n\
            int j;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> uvIds;\n\
            for( i = 0; i &lt; compListFn.length(); i++ )\n\
            {\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> comp = compListFn[i];\n\
                if( comp.apiType() == <a href=\"javascript:void(0)\" data-symbol=\"MFn::kMeshMapComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a0b774c2a128a8b2365fff164212f2e43&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kMeshMapComponent</a> )\n\
                {\n\
                    <a href=\"javascript:void(0)\" data-symbol=\"MFnSingleIndexedComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_single_indexed_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSingleIndexedComponent</a> uvComp(comp);\n\
                    for( j = 0; j &lt; uvComp.elementCount(); j++ )\n\
                    {\n\
                        int uvId = uvComp.element(j);\n\
                        uvIds.append(uvId);\n\
                    }\n\
                }\n\
            }\n\
            // Set the mesh object and uvList on the factory\n\
            //\n\
            fSplitUVFactory.setMesh( mesh );\n\
            fSplitUVFactory.setUVIds( uvIds );\n\
            // Now, call the factory to perform the splitUV\n\
            //\n\
            status = fSplitUVFactory.doIt();\n\
            // Mark the outputMesh as clean\n\
            //\n\
            outputData.setClean();\n\
        }\n\
        else\n\
        {\n\
            status = MS::kUnknownParameter;\n\
        }\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"splituv-command\"></a><h3 id=\"splituv-command\">splitUV command</h3></div>\n\
<p>Now that we have a splitUVNode, the last thing left on the list to do is the splitUV command. This is the piece that ties everything together. It is from here that the method for modifying the mesh is chosen (although implicitly through polyModifierCmd). The command manages the operation and is the highest level of interfacing with the user.</p>\n\
<p>As a child class of polyModifierCmd, the splitUVCmd does not have much work to do other than override some specific polyModifierCmd methods and retrieve the input.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class splitUV : polyModifierCmd\n\
{\n\
    public:\n\
        splitUV();\n\
        virtual ~splitUV();\n\
        static void* creator();\n\
        bool isUndoable();\n\
        // <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a> inherited methods\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> redoIt();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoIt();\n\
        // polyModifierCmd inherited methods\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> directModifier( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh );\n\
    private:\n\
        // Private methods\n\
        //\n\
        bool validateUVs();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> pruneUVs();\n\
        // Private members\n\
        //\n\
\n\
        // Selected UVs\n\
        //\n\
        // We store two copies of the UVs, one that is passed down to\n\
        // the node and another kept locally for the directModifier.\n\
        // Note, the <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> member, fComponentList, is only ever\n\
        // accessed during a single call of a plugin, never between\n\
        // calls where its validity is not guaranteed.\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> fComponentList;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> fSelUVs;\n\
        // splitUV Factory\n\
        //\n\
        // This factory is for the directModifier to have access to\n\
        // operate directly on the mesh.\n\
        //\n\
        splitUVFty fSplitUVFactory;\n\
};\n\
\n\
</pre></div><p>This looks much like the standard <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> class interface. However there are a few differences due to the polyModifierCmd inheritance as well as some performance enhancing methods. Two methods need to be overridden:</p>\n\
<ul>\n\
<li><span class=\'code\'>initModifierNode()</span></li>\n\
<li><span class=\'code\'>directModifier()</span></li>\n\
</ul>\n\
<p><span class=\'code\'>initModifierNode()</span> is the chance for a command to initialize any inputs aside from the inMesh on the modifier node, which in our case is the splitUVNode. This is not restricted to input initialization, but can be catered towards custom node initialization if desired. This method is called before the modifier node is placed in the history chain, if the creation of history is permissible. For example, in our case we’d like to initialize the uvList input on our splitUVNode:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUV::initModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // Tell the splitUVNode which UVs to operate on.\n\
    // \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode</a> depNodeFn( modifierNode );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> uvListAttr;\n\
    uvListAttr = depNodeFn.attribute( &quot;inputComponents&quot; );\n\
    // Pass the component list down to the node.\n\
    // To do so, we create/retrieve the current plug\n\
    // from the uvList attribute on the node and simply\n\
    // set the value to our component list.\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> uvListPlug( modifierNode, uvListAttr );\n\
    status = uvListPlug.setValue( fComponentList );\n\
    return status;\n\
}\n\
\n\
</pre></div><p><span class=\'code\'>directModifier()</span> is a method called only in a specific exception case where the mesh node has no history and the preference to record history is turned off. The consequence of this state is that the user does not wish to have any history chain at all. So in effect, the polyModifierCmd is forbidden to use the DG. As a result we modify the mesh directly. The polyModifierCmd description discusses the implications of this state in more detail as well as alternative approaches. However all we need to know is that we need to provide a method to operate on the mesh directly, which if you recall, we completed in the concepts section. It is for this reason that the command also holds an instance of the factory as well as a copy of the UVs to modify in an integer array format (as opposed to a component list for the splitUVNode).</p>\n\
<p>You might wonder why we store two copies of the selected UVs in different formats. The reason for this is that an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> is never guaranteed to be valid between plug-in calls (including <span class=\'code\'>redoIt()</span> calls). Since the <span class=\'code\'>directModifier()</span> would be called in a <span class=\'code\'>redoIt()</span> case, it would rely on the validity of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> component list between calls. As such we’ve stored two copies on the command. Alternatively, one could choose to modify the node so that it receives an integer array as a node input rather than a component list to streamline the operation, however it’s a balancing issue of performance vs. storage.</p>\n\
<p>Using these inputs we have the following simple <span class=\'code\'>directModifier()</span> method:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUV::directModifier( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh )\n\
{\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
     fSplitUVFactory.setMesh( mesh );\n\
     fSplitUVFactory.setUVIds( fSelUVs );\n\
     // Now, call the factory to perform the splitUV\n\
     //\n\
     status = fSplitUVFactory.doIt();\n\
     return status;\n\
}\n\
\n\
</pre></div><p>Before we look at the performance enhancing methods, let’s take a peek at the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> inherited methods. These methods will give us a better appreciation of how the performance of the command can be slightly tweaked:</p>\n\
<ul>\n\
<li><span class=\'code\'>doIt()</span></li>\n\
<li><span class=\'code\'>undoIt()</span></li>\n\
<li><span class=\'code\'>redoIt()</span></li>\n\
</ul>\n\
<p>The <span class=\'code\'>doIt()</span> method is our main method which retrieves the input and caters the rest of the operation to the various parts, overseeing the entire operation. The <span class=\'code\'>doIt()</span> method is the method used to initialize the command and perform the operation as the name would suggest. And much to that effect, the splitUV’s <span class=\'code\'>doIt()</span> method does exactly that.</p>\n\
<p>We begin by parsing the selection list for any objects where UVs are selected, just the same as we did in our original implementation. Following that we initialize the polyModifierCmd settings, call our performance enhancing methods and issue the <span class=\'code\'>doModifyPoly()</span> method, which can be viewed as the polyModifierCmd’s version of <span class=\'code\'>doIt()</span>. Additionally we scatter the appropriate error messages in the code to inform the user of improper use of the command.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUV::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a> selList;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::getActiveSelectionList</a>( selList );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItSelectionList</a> selListIter( selList );\n\
    selListIter.setFilter( <a href=\"javascript:void(0)\" data-symbol=\"MFn::kMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kMesh</a> );\n\
    // Initialize our component list\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnComponentListData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_component_list_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnComponentListData</a> compListFn;\n\
    compListFn.create();\n\
    // Parse the selection list\n\
    //\n\
    bool found = false;\n\
    bool foundMultiple = false;\n\
    for( ; !selListIter.isDone(); selListIter.next() )\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> dagPath;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> component;\n\
        selListIter.getDagPath( dagPath, component );\n\
        if( component.apiType() == <a href=\"javascript:void(0)\" data-symbol=\"MFn::kMeshMapComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a0b774c2a128a8b2365fff164212f2e43&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kMeshMapComponent</a> )\n\
        {\n\
            if( !found )\n\
            {\n\
                // Add the components to our component list.\n\
                // ‘component’ holds all selected components\n\
                // on the given object, so only a single call\n\
                // to add is needed.\n\
                //\n\
                compListFn.add( component );\n\
                fComponentList = compListFn.object();\n\
                // Locally store the selected UVIds in the command\n\
                // int array member, fSelUVs\n\
                //\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MFnSingleIndexedComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_single_indexed_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSingleIndexedComponent</a> compFn( component );\n\
                compFn.getElements( fSelUVs );\n\
                // Ensure that our DAG path is pointing to a\n\
                // shape node. Set the DAG path for polyModifierCmd.\n\
                //\n\
                dagPath.extendToShape();\n\
                setMeshNode( dagPath );\n\
                found = true;\n\
            }\n\
            else\n\
            {\n\
                // Since we are only looking for whether or not there\n\
                // are multiple objects with selected UVs, break out\n\
                // once we have found one other object.\n\
                //\n\
                foundMultiple = true;\n\
                break;\n\
            }\n\
        }\n\
    }\n\
    if( foundMultiple )\n\
    {\n\
        displayWarning( &quot;Only operates on first found mesh&quot; );\n\
    }\n\
    // Set the modifier node type for polyModifierCmd\n\
    //\n\
    setModifierNodeType( splitUVNode::id );\n\
    if( found )\n\
    {\n\
        if( validateUVs() )\n\
        {\n\
            // Now, pass control over to polyModifierCmd\n\
            //\n\
            status = doModifyPoly();\n\
            if( status == MS::kSuccess )\n\
            {\n\
                setResult( &quot;splitUV command succeeded!&quot; );\n\
            }\n\
            else\n\
            {\n\
                setResult( &quot;splitUV command failed!&quot; );\n\
            }\n\
        }\n\
        else\n\
        {\n\
            displayError( &quot;Selected UVs are not splittable&quot; );\n\
            status = MS::kFailure;\n\
        }\n\
    }\n\
    else\n\
    {\n\
        displayError( &quot;Unable to find selected UVs&quot; );\n\
        status = MS::kFailure;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>The undo/redo mechanism is supported by the <span class=\'code\'>undoIt()</span> and <span class=\'code\'>redoIt()</span> methods inherited from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span>. These methods often use cached data from the first <span class=\'code\'>doIt()</span> to execute. This is what splitUV does as well as polyModifierCmd, which supports its own undo/redo in the form of <span class=\'code\'>undoModifyPoly()</span> and <span class=\'code\'>redoModifyPoly()</span>. Since splitUV relies on polyModifierCmd to perform the operation, the undo/redo redirects the undo/redo to polyModifierCmd. As a result, the splitUV’s <span class=\'code\'>undoIt()</span> and <span class=\'code\'>redoIt()</span> methods are very straightforward:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUV::redoIt()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    status = redoModifyPoly();\n\
    if( status == MS::kSuccess )\n\
    {\n\
        setResult( &quot;splitUV command succeeded!&quot; );\n\
    }\n\
    else\n\
    {\n\
        setResult( &quot;splitUV command failed!&quot; );\n\
    }\n\
    return status;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUV::undoIt()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    status = undoModifyPoly();\n\
    if( status == MS::kSuccess )\n\
    {\n\
        setResult( &quot;splitUV undo succeeded!&quot; );\n\
    }\n\
    else\n\
    {\n\
        setResult( &quot;splitUV undo failed!&quot; );\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>The call to <span class=\'code\'>validateUVs()</span> in the <span class=\'code\'>doIt()</span> method is a performance enhancing method. Though this method is primarily a pre-condition check on the selected UVs, it increases the optimal performance of the command by pruning the selected UV list of UVs that cannot be split. This potentially saves the operation unnecessary loops. However, an extra pass of the mesh is required to check for UVs that cannot be split, but only on the very first call to the command. Any successive <span class=\'code\'>redoIt()</span> calls or node evaluations are faster.</p>\n\
<p>To define when a UV is invalid and unable to be split, look at the definition of the operation. splitUV provides each face which shares a particular UV with it’s own unique and unshared UV. Thus a UV can only be split if it is shared by more than one face. Subsequently, the <span class=\'code\'>validateUVs()</span> method parses the mesh and retrieves the face sharing information for each UV, marking valid UVs. The valid UV list is sent to the <span class=\'code\'>pruneUVs()</span> method which replaces the component list and locally stored integer array of selected UVs.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool splitUV::validateUVs()\n\
{\n\
    // Get the mesh that we are operating on\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> dagPath = getMeshNode();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh = dagPath.node();\n\
    // Get the number of faces sharing each UV\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> meshFn( mesh );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MItMeshPolygon\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_mesh_polygon.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItMeshPolygon</a> polyIter( mesh );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> selUVFaceCountArray;\n\
    int i;\n\
    int j;\n\
    int count = 0;\n\
    selUVsCount = fSelUVs.length();\n\
    for( i = 0; i &lt; selUVsCount; i++ )\n\
    {\n\
        for( ; !polyIter.isDone(); polyIter.next() )\n\
        {\n\
            if( polyIter.hasUVs() )\n\
            {\n\
                int UVIndex = 0;\n\
                polyIter.getUVIndex( j, UVIndex );\n\
                // If we have a matching UVId, then we have a\n\
                // face which shares this UV, so increment the\n\
                // count.\n\
                //\n\
                if( UVIndex == fSelUVs[i] )\n\
                {\n\
                    count++;\n\
                    break;\n\
                }\n\
            }\n\
        }\n\
        selUVFaceCountArray.append( count );\n\
    }\n\
    // Now, check to make sure that at least one UV has more than\n\
    // one face sharing it. So long as we have at least one valid\n\
    // UV, we should proceed with the operation by returning true\n\
    //\n\
    bool isValid = false;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> validUVIndices;\n\
    for( i = 0; i &lt; selUVsCount; i++ )\n\
    {\n\
        if( selUVFaceCountArray &gt; 1 )\n\
        {\n\
            isValid = true;\n\
            validUVIndices.append(i);\n\
        }\n\
    }\n\
    if( isValid )\n\
    {\n\
        pruneUVs( validUVIndices );\n\
    }\n\
    return isValid;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUV::pruneUVs( <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a>&amp; validUVIndices )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
    unsigned i;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> validUVIds;\n\
    for( i = 0; i &lt; validUVIndices.length(); i++ )\n\
    {\n\
        int uvIndex = validUVIndices[i];\n\
        validUVIds.append( fSelUVs[uvIndex] );\n\
    }\n\
    // Replace our local int array of UVIds\n\
    //\n\
    fSelUVs.clear();\n\
    fSelUVs = validUVIds;\n\
    // Build our list of valid components\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnSingleIndexedComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_single_indexed_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSingleIndexedComponent</a> compFn;\n\
    compFn.create( <a href=\"javascript:void(0)\" data-symbol=\"MFn::kMeshMapComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a0b774c2a128a8b2365fff164212f2e43&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kMeshMapComponent</a> );\n\
    compFn.addElements( validUVIds );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> component = compFn.object();\n\
    // Replace the component list\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnComponentListData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_component_list_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnComponentListData</a> compListFn;\n\
    compListFn.create();\n\
    compListFn.add( component );\n\
    fComponentList = compListFn.object();\n\
    return status;\n\
}\n\
\n\
</pre></div><p>For further details on the implementation of the splitUV command, look at the source code provided in the plug-ins directory of the developer’s kit.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";