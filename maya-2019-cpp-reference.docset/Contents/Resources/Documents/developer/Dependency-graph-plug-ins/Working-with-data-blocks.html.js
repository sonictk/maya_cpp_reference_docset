var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Working with data blocks</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Working with data blocks</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"working-with-data-blocks\"></a></div>\n\
<p>When Maya calls the <span class=\'code\'>compute()</span> method for a dependency graph node, it passes along an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a></span> object that stores the values of all input and output attributes. This page describes how your implementation of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::compute()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::compute()</a></span> can read and write attribute values in this data block.</p>\n\
<p>It may seem at first that getting at the data being received or sent by a node is a little complex. However, this apparent complexity permits the use of a fast mechanism behind the scenes, which is crucial to the overall operation of the dependency graph.</p>\n\
<p>Note that the data block, and all of the data it contains, are only valid during the execution of your node’s <span class=\'code\'>compute()</span> method. Never maintain a pointer to the data block or any of its data for use after the <span class=\'code\'>compute()</span> method exits.</p>\n\
<div class=\'section\'><a id=\"data-handles\"></a><h2 id=\"data-handles\">Data handles</h2></div>\n\
<p>A data handle is a reference into the data block that references a particular piece of the node&#39;s data, such as an attribute or plug. To read or write an attribute value in the data block, you must create an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a></span> object, set it up to access the attribute you want it to handle, and use the functions in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a></span> interface to get or set the data value expressed as a particular data type.</p>\n\
<p>The following code shows how to create and use<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a></span> objects to read and write the values of attributes within the data block:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> myNode::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data )\n\
{\n\
    ...\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
\n\
    // get a handle on an input attribute\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputDataHandle = data.inputValue( myInAttributeName, &amp;status );\n\
    if (status != <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a>) { /* handle the error */ }\n\
\n\
    // retrieve its value as a float:\n\
    float&amp; inAttributeValue = inputDataHandle.asFloat();\n\
\n\
    ... // perform your node&#39;s computations, and come up with a result\n\
\n\
    // get a handle on an output attribute\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outputDataHandle = data.outputValue( myOutAttributeName, &amp;status );\n\
    if (status != <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a>) { /* handle the error */ }\n\
\n\
    // assign our computed result to the output attribute\n\
    outputDataHandle.set( result );\n\
\n\
    ...\n\
}\n\
\n\
</pre></div><p>Or, as a slightly more abbreviated way to retrieve a value without error checking:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    // retrieve the value of an input handle as a float:\n\
    float&amp; inAttributeValue = data.inputValue( myInAttributeName ).asFloat();\n\
\n\
</pre></div><p>The type you use to get or set the data on an attribute or plug must match the type of the attribute. For example, if an attribute is declared as an integer attribute, you should not use the data handle to get or set it as a float, matrix, or even a short. You should only get or set it as an integer. If you need to do any type casting or re-interpreting of the data, do it after you retrieve the value.</p>\n\
<div class=\'section\'><a id=\"data-creators\"></a><h2 id=\"data-creators\">Data creators</h2></div>\n\
<p>Data creators are classes you use to create data to be put into a data block, most likely to an output plug of a node. Data creators are not required for simple data types such as integers and floating point values, but are necessary for heavier data such as mesh shapes and NURBS surfaces.</p>\n\
<p>The classes allow Maya to more efficiently modify and transfer the data along dependency graph connections. The subclasses of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnData</a></span> are the data creator classes. For the data creator classes that create heavier data which also corresponds to shape nodes, such as mesh shapes and NURBS surfaces, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode</a></span> subclasses pertaining to the data type are used to fill the data block item with data. For instance, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMeshData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMeshData</a></span> class is used to create a new mesh data block item, but the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a></span> class must be used to fill the item with vertices and polygons.</p>\n\
<p>For example, the following snippets from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"shellNode/shellNode.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/shell_node_2shell_node_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">shellNode/shellNode.cpp</a></span> sample illustrate how to fill an output attribute with a mesh:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> shellNode::initialize()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a> typedFn;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
\n\
    // the output mesh attribute is initialized as an <a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a>, with type MFnData::kMesh.\n\
    outMesh = typedFn.create( &quot;outMesh&quot;, &quot;o&quot;, <a href=\"javascript:void(0)\" data-symbol=\"MFnData::kMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnData::kMesh</a> );\n\
    typedFn.setStorable(false);\n\
    typedFn.setWritable(false);\n\
    stat = addAttribute( outMesh );\n\
    ...\n\
}\n\
\n\
...\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> shellNode::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data )\n\
{\n\
    ...\n\
    // use the data creator to create a new data object of the right type:\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnMeshData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMeshData</a> dataCreator;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> newOutputData = dataCreator.create(&amp;returnStatus);\n\
 \n\
    ... // compute the vertices and polygons for the new output mesh\n\
\n\
    // create a new mesh using the <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> function set, and store the result\n\
    // in the data object created above:\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a> meshFn;\n\
    mesh= meshFn.create(\n\
        n,         // number of vertices\n\
        np,        // number of polygons\n\
        vertices,  // The points\n\
        pcounts,   // # of vertex for each poly\n\
        pconnect,  // Vertices index for each poly\n\
        newOutputData, // Dependency graph data object\n\
        &amp;returnStatus\n\
    );\n\
\n\
    // store the data object in the output attribute:\n\
    outputHandle.set(newOutputData);\n\
    ...\n\
}\n\
</pre></div><p>Some operations may behave differently depending on the data block item. That is because these shape-related dependency node function set classes can be used to access data block items that have come from connections to other nodes in the graph as well as to access data block items that have been created locally within the node.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> All operations which can return world space information, such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::getPoint()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#a71f31afb68fa92a69b114dd7f3cb12fa&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh::getPoint()</a></span>, become invalid when applied to data block items that do not come from shape nodes. The shape node is required to be able to determine the transformation for calculating the world space position. Caution must be used when using these methods.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";