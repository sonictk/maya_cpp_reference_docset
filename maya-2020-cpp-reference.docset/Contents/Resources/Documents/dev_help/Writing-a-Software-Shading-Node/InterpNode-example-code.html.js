var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>InterpNode example code walkthrough</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>InterpNode example code walkthrough</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"interpnode-example-code-walkthrough\"></a></div>\n\
<p>Shading node plug-ins rely on the usage of Compound Attributes and Simple Attributes. The mapping of data between rendering samplers and shading networks is by attribute name. This approach is straightforward and easy to learn and remember, and general enough to work with both the present rendering requirements and future enhancements.</p>\n\
<p>All rendering attributes for which a plug-in is interested has been pre-computed for the current sample being considered. The &quot;datablock&quot; argument that is passed into the plug-in’s <span class=\'code\'>compute()</span> method contains the rendering attribute information the node has requested. When the plug-in is evaluated by the dependency graph it also passes in a &quot;plug&quot; argument for the specific attribute it wants to evaluate. To optimize evaluations, you need to check for only the output attributes you defined in your plug-in.</p>\n\
<p>This example plug-in node has 20 attributes (aside from its id attribute).</p>\n\
<ul>\n\
<li>Two attributes are color input attributes that are built as a compound attribute from three float attributes that represent red, green, and blue (eight total attributes).</li>\n\
<li>One attribute is a color output attribute that is built as a compound attribute from three float attributes that represent red, green, and blue (four total attributes).</li>\n\
<li>One attribute is a surface normal that is built as a compound attribute from three float attributes that represent the vector components in x, y, and z (four total attributes).</li>\n\
<li>One attribute is the position of the geometry in camera space built as a compound attribute from three float attributes that represent the current sample point in x, y, and z (4 total attributes).</li>\n\
</ul>\n\
<p>The node interpolates between two colors based on the direction of the surface normal it gets from the datablock, and uses the <span class=\'code\'>compute()</span> method in that class to derive a result color that is placed into the output color attribute.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/comp_diagram.png\' title=\'\' /></div>\n\
<div class=\'section\'><a id=\"derivation\"></a><h2 id=\"derivation\">Derivation</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class InterpNode : public <a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a> \n\
{\n\
public:\n\
    InterpNode();\n\
    virtual ~InterpNode();\n\
    virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp;, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; );\n\
    static void * creator();\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initialize();\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> id;\n\
protected:\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InputValue;\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> color1R,color1G,color1B,color1;\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> color2R,color2G,color2B,color2;\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> aNormalCameraX, aNormalCameraY,\n\
    aNormalCameraZ, aNormalCamera;\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> aPointCameraX, aPointCameraY,\n\
    aPointCameraZ, aPointCamera;\n\
    static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> aOutColorR, aOutColorG, aOutColorB,\n\
    aOutColor;\n\
};\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::InputValue;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color1R;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color1G;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color1B;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color1;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color2R;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color2G;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color2B;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::color2;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aNormalCameraX;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aNormalCameraY;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aNormalCameraZ;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aNormalCamera;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aPointCameraX;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aPointCameraY;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aPointCameraZ;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aPointCamera;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aOutColorR;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aOutColorG;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aOutColorB;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> InterpNode::aOutColor;\n\
\n\
</pre></div><div class=\'section\'><a id=\"constructordestructor\"></a><h2 id=\"constructordestructor\">Constructor/Destructor</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">InterpNode::InterpNode() { }\n\
InterpNode::~InterpNode() { }\n\
\n\
</pre></div><div class=\'section\'><a id=\"creator\"></a><h2 id=\"creator\">Creator</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void* InterpNode::creator()\n\
{\n\
    return new InterpNode();\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"initializepluginuninitializeplugin\"></a><h2 id=\"initializepluginuninitializeplugin\">initializePlugin/uninitializePlugin</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> UserClassify( &quot;utility/general&quot; );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, &quot;Autodesk&quot;, &quot;1.0&quot;,\n\
    &quot;Any&quot;);\n\
    plugin.registerNode( &quot;Interp&quot;, InterpNode::id,\n\
    InterpNode::creator,\n\
    InterpNode::initialize,\n\
    MPxNode::kDependNode, &amp;UserClassify);\n\
    return MS::kSuccess;\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    plugin.deregisterNode( InterpNode::id );\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"initialize\"></a><h2 id=\"initialize\">initialize</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> InterpNode::initialize()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> nAttr; \n\
    // Inputs and Attributes\n\
    //\n\
    // User defined attributes require a long-name and short-\n\
    // name that are required to be unique within the node.\n\
    // (See the compound attribute color1 named &quot;Sides&quot;.)\n\
    //\n\
    // Rendering attributes that your node wants to get from\n\
    // the sampler require them to be defined given the pre-\n\
    // defined unique long-name.(See the compound attribute\n\
    // aNormalCamera named &quot;normalCamera&quot;.)\n\
    // \n\
    // User defined Attributes are generally something that you \n\
    // want to store in the Maya file. The setStorable(true)\n\
    // method enables an attribute to be stored into the Maya\n\
    // scene file. \n\
    //\n\
    // Rendering attributes are primarily data that is\n\
    // generated per sample and not something that you want to\n\
    // store in a file. To disable an attribute from being\n\
    // recorded to the Maya scene file use the\n\
    // setStorable(false) method.\n\
    //\n\
    // Simple attributes that represent a range of values can\n\
    // enable a slider on the Attribute Editor by using the\n\
    // methods setMin() and setMax(). \n\
    // (See the simple attribute InputValue named &quot;Power&quot;.)\n\
    //\n\
    // Compound attributes that represent a vector of 3 floats\n\
    // can enable a color swatch on the Attribute Editor that\n\
    // will launch a color picker tool by using the method\n\
    // setUsedAsColor(true).\n\
    // (See the compound attribute color1 name &quot;Sides&quot;.)\n\
    //\n\
    // Both Simple and Compound attributes can be initialized\n\
    // with a default value using the method setDefault().\n\
    //\n\
    // Attributes by default show up in the Attribute Editor\n\
    // and in the Connection Editor unless they are specified\n\
    // as being hidden by using the method setHidden(true). \n\
    //\n\
    // Attributes by default have both read/write access in the\n\
    // dependency graph. To change an attributes behaviour you\n\
    // can use the methods setReadable() and setWritable(). The\n\
    // method setReadable(true) indicates that the attribute\n\
    // can be used as the source in a dependency graph\n\
    // connection. The method setWritable(true) indicates that\n\
    // the attribute can be used as the destination in a\n\
    // dependency graph connection.\n\
    // (See the compound attribute aOutColor named &quot;outColor&quot;\n\
    // below. It has been marked as a read-only attribute since\n\
    // it is the computed result of the node, it is not stored\n\
    // in the Maya file since it is always computed, and it is\n\
    // marked as hidden to prevent it from being displayed in\n\
    // the user interface.)\n\
    // \n\
    //\n\
    // User defined input value\n\
    InputValue = nAttr.create( &quot;Power&quot;, &quot;pow&quot;,\n\
    MFnNumericData::kFloat);\n\
    nAttr.setDefault(1.0f);\n\
    nAttr.setMin(0.0f);\n\
    nAttr.setMax(3.0f);\n\
    nAttr.setStorable(true);\n\
    // User defined color attribute\n\
    color1R = nAttr.create( &quot;color1R&quot;, &quot;c1r&quot;,\n\
    MFnNumericData::kFloat);\n\
    color1G = nAttr.create( &quot;color1G&quot;, &quot;c1g&quot;,\n\
    MFnNumericData::kFloat);\n\
    color1B = nAttr.create( &quot;color1B&quot;, &quot;c1b&quot;,\n\
    MFnNumericData::kFloat);\n\
    color1 = nAttr.create( &quot;Sides&quot;, &quot;c1&quot;, color1R, color1G,\n\
    color1B);\n\
    nAttr.setStorable(true);\n\
    nAttr.setUsedAsColor(true);\n\
    nAttr.setDefault(1.0f, 1.0f, 1.0f);\n\
    color2R = nAttr.create( &quot;color2R&quot;, &quot;c2r&quot;,\n\
    MFnNumericData::kFloat);\n\
    color2G = nAttr.create( &quot;color2G&quot;, &quot;c2g&quot;,\n\
    MFnNumericData::kFloat);\n\
    color2B = nAttr.create( &quot;color2B&quot;, &quot;c2b&quot;,\n\
    MFnNumericData::kFloat);\n\
    color2 = nAttr.create( &quot;Facing&quot;, &quot;c2&quot;, color2R,\n\
    color2G, color2B);\n\
    nAttr.setStorable(true);\n\
    nAttr.setUsedAsColor(true);\n\
    nAttr.setDefault(0.0f, 0.0f, 0.0f);\n\
    // Surface Normal supplied by the render sampler\n\
    aNormalCameraX = nAttr.create( &quot;normalCameraX&quot;, &quot;nx&quot;,\n\
    MFnNumericData::kFloat);\n\
    nAttr.setStorable(false);\n\
    nAttr.setDefault(1.0f);\n\
    aNormalCameraY = nAttr.create( &quot;normalCameraY&quot;, &quot;ny&quot;,\n\
    MFnNumericData::kFloat);\n\
    nAttr.setStorable(false);\n\
    nAttr.setDefault(1.0f);\n\
    aNormalCameraZ = nAttr.create( &quot;normalCameraZ&quot;, &quot;nz&quot;,\n\
    MFnNumericData::kFloat);\n\
    nAttr.setStorable(false);\n\
    nAttr.setDefault(1.0f);\n\
    aNormalCamera = nAttr.create( &quot;normalCamera&quot;,&quot;n&quot;,\n\
    aNormalCameraX, \n\
    aNormalCameraY, aNormalCameraZ);\n\
    nAttr.setStorable(false);\n\
    nAttr.setHidden(true);\n\
    // Point on surface in camera space, will be used to compute view vector\n\
    aPointCameraX = nAttr.create( &quot;pointCameraX&quot;, &quot;px&quot;,\n\
    MFnNumericData::kFloat);\n\
    nAttr.setStorable(false);\n\
    nAttr.setDefault(1.0f);\n\
    aPointCameraY = nAttr.create( &quot;pointCameraY&quot;, &quot;py&quot;,\n\
    MFnNumericData::kFloat);\n\
    nAttr.setStorable(false);\n\
    nAttr.setDefault(1.0f);\n\
    aPointCameraZ = nAttr.create( &quot;pointCameraZ&quot;, &quot;pz&quot;,\n\
    MFnNumericData::kFloat);\n\
    nAttr.setStorable(false);\n\
    nAttr.setDefault(1.0f);\n\
    aPointCamera = nAttr.create( &quot;pointCamera&quot;,&quot;p&quot;,\n\
    aPointCameraX, \n\
    aPointCameraY, aPointCameraZ);\n\
    nAttr.setStorable(false);\n\
    nAttr.setHidden(true);\n\
    // Outputs\n\
    aOutColorR = nAttr.create( &quot;outColorR&quot;, &quot;ocr&quot;,\n\
    MFnNumericData::kFloat);\n\
    aOutColorG = nAttr.create( &quot;outColorG&quot;, &quot;ocg&quot;,\n\
    MFnNumericData::kFloat);\n\
    aOutColorB = nAttr.create( &quot;outColorB&quot;, &quot;ocb&quot;,\n\
    MFnNumericData::kFloat);\n\
    aOutColor = nAttr.create( &quot;outColor&quot;, &quot;oc&quot;,\n\
    aOutColorR, aOutColorG, aOutColorB);\n\
    nAttr.setStorable(false);\n\
    nAttr.setHidden(false);\n\
    nAttr.setReadable(true);\n\
    nAttr.setWritable(false);\n\
    addAttribute(InputValue);\n\
    addAttribute(color1R);\n\
    addAttribute(color1G);\n\
    addAttribute(color1B);\n\
    addAttribute(color1);\n\
    addAttribute(color2R);\n\
    addAttribute(color2G);\n\
    addAttribute(color2B);\n\
    addAttribute(color2);\n\
    addAttribute(aNormalCameraX);\n\
    addAttribute(aNormalCameraY);\n\
    addAttribute(aNormalCameraZ);\n\
    addAttribute(aNormalCamera);\n\
    addAttribute(aPointCameraX);\n\
    addAttribute(aPointCameraY);\n\
    addAttribute(aPointCameraZ);\n\
    addAttribute(aPointCamera);\n\
    addAttribute(aOutColorR);\n\
    addAttribute(aOutColorG);\n\
    addAttribute(aOutColorB);\n\
    addAttribute(aOutColor);\n\
    attributeAffects (InputValue, aOutColor);\n\
    attributeAffects (color1R, color1);\n\
    attributeAffects (color1G, color1);\n\
    attributeAffects (color1B, color1);\n\
    attributeAffects (color1, aOutColor);\n\
    attributeAffects (color2R, color2);\n\
    attributeAffects (color2G, color2);\n\
    attributeAffects (color2B, color2);\n\
    attributeAffects (color2, aOutColor);\n\
    attributeAffects (aNormalCameraX, aOutColor);\n\
    attributeAffects (aNormalCameraY, aOutColor);\n\
    attributeAffects (aNormalCameraZ, aOutColor);\n\
    attributeAffects (aNormalCamera, aOutColor);\n\
    attributeAffects (aPointCameraX, aOutColor);\n\
    attributeAffects (aPointCameraY, aOutColor);\n\
    attributeAffects (aPointCameraZ, aOutColor);\n\
    attributeAffects (aPointCamera, aOutColor);\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"id-string\"></a><h2 id=\"id-string\">Id String</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> InterpNode::id( 0x81005 );\n\
\n\
</pre></div><div class=\'section\'><a id=\"compute-method\"></a><h2 id=\"compute-method\">compute method</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> InterpNode::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; block )\n\
{\n\
    int k=0;\n\
    float gamma,scalar;\n\
    k |= (plug == aOutColor);\n\
    k |= (plug == aOutColorR);\n\
    k |= (plug == aOutColorG);\n\
    k |= (plug == aOutColorB);\n\
    if (!k) return MS::kUnknownParameter;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a> resultColor(0.0,0.0,0.0);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a>&amp; Side = block.inputValue( color1 ).\n\
    asFloatVector();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a>&amp; Face = block.inputValue( color2 ).\n\
    asFloatVector();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a>&amp; surfaceNormal = block.\n\
    inputValue( aNormalCamera ).\n\
    asFloatVector();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a>&amp; viewVector = block.\n\
    inputValue( aPointCamera ).\n\
    asFloatVector();\n\
    float power = block.inputValue( InputValue ).asFloat();\n\
    // Normalize the view vector\n\
    double d = sqrt((viewVector[0] * viewVector[0]) +\n\
    (viewVector[1] * viewVector[1]) +\n\
    (viewVector[2] * viewVector[2]));\n\
    if (d != (double)0.0) {\n\
        viewVector[0] /= d;\n\
        viewVector[1] /= d;\n\
        viewVector[2] /= d;\n\
    }\n\
 \n\
    // find dot product\n\
    float scalarNormal = ((viewVector[0]*surfaceNormal[0])\n\
                       + (viewVector[1]*surfaceNormal[1])\n\
                       + (viewVector[2]*surfaceNormal[2]));\n\
    // take the absolute value\n\
    if (scalarNormal &lt; 0.0) scalarNormal *= -1.0;\n\
    // Use InputValue to change interpolation\n\
    // power == 1.0 linear\n\
    // power &gt;= 0.0 use gamma function\n\
    //\n\
    if (power &gt; 0.0) {\n\
        gamma = 1.0 / power;\n\
        scalar = pow(scalarNormal,gamma);\n\
    }\n\
    else { scalar = 0.0; }\n\
    // Interpolate the colors\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a> interp(0.0,0.0,0.0);\n\
    interp[0] = scalar * (Face[0] - Side[0]);\n\
    interp[1] = scalar * (Face[1] - Side[1]);\n\
    interp[2] = scalar * (Face[2] - Side[2]);\n\
    resultColor[0] = Side[0] + interp[0];\n\
    resultColor[1] = Side[1] + interp[1];\n\
    resultColor[2] = Side[2] + interp[2];\n\
    // set ouput color attribute\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outColorHandle = block.\n\
    outputValue( aOutColor );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a>&amp; outColor = outColorHandle.\n\
    asFloatVector();\n\
    outColor = resultColor;\n\
    outColorHandle.setClean();\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"attribute-editor-view-for-interpnode-example\"></a><h2 id=\"attribute-editor-view-for-interpnode-example\">Attribute Editor view for InterpNode Example</h2></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/attribute_QT.png\' title=\'\' /></div>\n\
<div class=\'section\'><a id=\"connection-editor-view-of-an-interpnode-connection\"></a><h2 id=\"connection-editor-view-of-an-interpnode-connection\">Connection Editor view of an InterpNode connection</h2></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/connection_QT.png\' title=\'\' /></div>\n\
<div class=\'section\'><a id=\"hypergraph-view-of-an-interpnode-connection\"></a><h2 id=\"hypergraph-view-of-an-interpnode-connection\">Hypergraph view of an InterpNode connection</h2></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/hyper.png\' title=\'\' /></div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";