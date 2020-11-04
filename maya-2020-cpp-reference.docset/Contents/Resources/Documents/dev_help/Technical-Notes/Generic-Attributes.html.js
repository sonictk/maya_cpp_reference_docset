var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Generic Attributes</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Generic Attributes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"generic-attributes\"></a></div>\n\
<p>In this section of the Maya API documentation, we will describe parts of the Maya API that are important but are not large enough for an entire chapter.</p>\n\
<p>A generic attribute (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnGenericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnGenericAttribute</a></span>) is one that can accept several different types of data. A generic attribute is similar to a typed attribute (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a></span>) except that it has a list of types that it considers valid.</p>\n\
<p>Generic attributes are useful for re-using the same attribute for multiple purposes. For example, when writing a plug-in intersection node, an attribute will be used for storing information regarding the object(s) that are being intersected. A plug-in can create a generic attribute that can accept either a mesh or a surface for use in the intersection calculation. If a generic attribute were not used, then the plug-in would have to create two separate attributes: one for the mesh and one for the surface. An additional advantage of generic attributes is that multiple nodes of the same type can have their generic attribute type set independently. For example, in the intersection example just described, you can create two nodes of the same type, with the generic attribute of one set to a mesh and the other set to a surface.</p>\n\
<div class=\'section\'><a id=\"creation\"></a><h2 id=\"creation\">Creation</h2></div>\n\
<p>Generic attributes for proxy plug-in nodes are created using the <span class=\'code\'>initialize()</span> method of the plug-in. In addition to creating the attribute, the <span class=\'code\'>initialize()</span> method will add the attribute to the node and state how this attribute can affect or be affected by other attributes in the node.</p>\n\
<p>The following example, genericAttributeNode (available in the Developer Kit), demonstrates how to create a generic attribute as an output:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Adds a generic attribute that accepts a float, float2, float3\n\
// Called from node initialization method.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> genericAttributeNode::addComplexFloatGenericAttribute( \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a>&amp; attrObject,\n\
    const char *longName, const char *shortName )\n\
{\n\
    // Create the generic attribute and set the 3 accepts types\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnGenericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_generic_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnGenericAttribute</a> gAttr; \n\
    attrObject = gAttr.create( longName, shortName ); \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = gAttr.addAccept(MFnNumericData::kFloat); \n\
    <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( status );\n\
    status = gAttr.addAccept(MFnNumericData::k2Float); \n\
    <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( status );\n\
    status = gAttr.addAccept(MFnNumericData::k3Float); \n\
    <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( status );\n\
    gAttr.setWritable(false);\n\
    gAttr.setStorable( false );\n\
\n\
    // Add the attribute to the node\n\
    status = addAttribute( attrObject );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( status );\n\
    return MS::kSuccess;\n\
}\n\
\n\
// Node initialization method\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> genericAttributeNode::initialize()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> nAttr;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // single float attribute affecting a generic attribute\n\
    gInputInt = nAttr.create( &quot;gInputInt&quot;, &quot;gii&quot;,\n\
        MFnNumericData::kInt, 0, &amp;status );\n\
    nAttr.setStorable(true);\n\
    nAttr.setKeyable(true);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( status );\n\
    status = addAttribute( gInputInt );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( status );\n\
    if ( !addComplexFloatGenericAttribute(\n\
        gOutputFloat_2Float_3Float,\n\
        &quot;gOutputFloat_2Float_3Float&quot;, &quot;gof2f3f&quot; ) )\n\
        return MS::kFailure;\n\
    status = attributeAffects( \n\
        gInputInt, gOutputFloat_2Float_3Float );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( status );\n\
\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>In this example, an input attribute gInputInt affects a generic output attribute gOutputFloat_2Float_3Float. The output attribute is capable of storing one of a float, float2 and float3 and this is set by calling <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnGenericAttribute::addAccept()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_generic_attribute.html#a473c601e561d68fc3f6339f1ec017732&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnGenericAttribute::addAccept()</a></span>.</p>\n\
<div class=\'section\'><a id=\"computing-generic-attributes\"></a><h2 id=\"computing-generic-attributes\">Computing Generic Attributes</h2></div>\n\
<p>Assuming that a plug-in’s generic attributes have been added correctly to a node, they will be available for use in the node’s compute method. Within compute, generic attribute information can be read and updated using standard Maya API calls. Additionally, the type contained in a generic attribute can be modified. In our example below, the generic attribute can store one of a float, float2 and float3. At compute time, the float stored in this generic attribute can be converted to a float3.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">//\n\
// Compute that will update the generic attribute\n\
// when requested.\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> genericAttributeNode::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> returnStatus;\n\
    // Generic attribute plug\n\
    if ( plug == gOutputFloat_2Float_3Float )\n\
    {\n\
        // attribute affecting generic attribute case. Based on the\n\
        // input attribute, we modify the output generic attribute\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputDataInt = data.inputValue( gInputInt );\n\
        int inputInt = inputDataInt.asInt();\n\
\n\
        // Get the output handle\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outputData = data.outputValue( plug );  \n\
        bool isGenericNumeric = false;\n\
        bool isGenericNull = false;\n\
        // Is the output handle generic data\n\
        if ( outputData.isGeneric( isGenericNumeric, isGenericNull ) )\n\
        {\n\
            // Based on the inputHandle, update the generic\n\
            // output handle\n\
            if ( inputInt == 1 )\n\
                outputData.setGenericBool( false, true );\n\
            else if ( inputInt == 2 )\n\
                outputData.setGenericBool( true, true );\n\
            else if ( inputInt == 3 )\n\
                outputData.setGenericChar( 254, true );\n\
            else if ( inputInt == 4 )\n\
                outputData.setGenericDouble( 3.145, true );\n\
            else if ( inputInt == 5 )\n\
                outputData.setGenericFloat( 9.98, true );   \n\
            else if ( inputInt == 6 )\n\
                outputData.setGenericShort( 3245, true );\n\
            else if ( inputInt == 7 )\n\
                outputData.setGenericInt( 32768, true );\n\
            else if ( inputInt == 8 )\n\
            {\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData</a> numericData;\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj = numericData.create(\n\
                    MFnNumericData::k2Float, &amp;returnStatus );\n\
                <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( returnStatus );\n\
                returnStatus = numericData.setData( \n\
                    (float)1.5, (float)6.7 );\n\
                <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( returnStatus );\n\
                outputData.set( obj );\n\
            }\n\
            else if ( inputInt == 9 )\n\
            {\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData</a> numericData;\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj = numericData.create(\n\
                    MFnNumericData::k3Float, &amp;returnStatus );\n\
                <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( returnStaus );\n\
                returnStatus = numericData.setData( (float)2.5, (float)8.7, (float)2.3345 );\n\
                <a href=\"javascript:void(0)\" data-symbol=\"CHECK_MSTATUS\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">CHECK_MSTATUS</a>( returnStatus );\n\
                outputData.set( obj );\n\
            }\n\
            else if ( inputInt == 10 )\n\
            {\n\
                outputData.setGenericInt( 909, true );\n\
            }                           \n\
            // Mark the data clean\n\
            outputData.setClean();\n\
            data.setClean( gOutputFloat_2Float_3Float );\n\
        }\n\
    } \n\
    else \n\
    {\n\
        return MS::kUnknownParameter;\n\
    }\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>In this example, we first obtain the value of the gInputInt attribute. This int value will be used for setting the value and type of the generic output attribute gOutputFloat_2Float_3Float. When the data handle is extracted from the data block for the generic attribute, the <span class=\'code\'>isGeneric()</span> method is called to ensure that the compute code is dealing with a generic attribute. There are two parameters for the <span class=\'code\'>isGeneric()</span> method. The first is <span class=\'code\'>isNumeric</span> and a result of true signifies that the handle contains simple numeric information such as char, float, etc. If <span class=\'code\'>isNumeric</span> is false and <span class=\'code\'>isNull</span> is not true, then the handle contains the more complex types of numerical information, such as double2 or float2, as accessible through the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData</a></span> function set. (The <span class=\'code\'>isNumeric</span> and <span class=\'code\'>isNull</span> parameters are not used in the code example above.)</p>\n\
<p>It is not possible to distinguish the singleton generic types from one another. There is no method that can be called to return the result of whether the singleton generic attribute is a float, char or double, etc.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";