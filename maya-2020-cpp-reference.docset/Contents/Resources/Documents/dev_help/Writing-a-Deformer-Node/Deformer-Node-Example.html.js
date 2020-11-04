var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Deformer Node Example</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Deformer Node Example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"deformer-node-example\"></a></div>\n\
<p>This section describes the <span class=\'code\'>yTwistNode</span> plug-in, which is an example of a deformer node. This plug-in is available through the Maya Developer Kit.</p>\n\
<div class=\'section\'><a id=\"implementing-the-proxy-deformer-node\"></a><h2 id=\"implementing-the-proxy-deformer-node\">Implementing the Proxy Deformer Node</h2></div>\n\
<p>The <span class=\'code\'>ytwist</span> class inherits from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryFilter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_geometry_filter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxGeometryFilter</a></span> and defines a single virtual method, <span class=\'code\'>deform()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class yTwist : public <a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryFilter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_geometry_filter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxGeometryFilter</a>\n\
{\n\
public:\n\
                         yTwist();\n\
    virtual              ~yTwist();\n\
\n\
    static  void*        creator();\n\
    static  <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>      initialize();\n\
\n\
    // deformation function\n\
    virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>      deform(<a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp;  block,\n\
                         <a href=\"javascript:void(0)\" data-symbol=\"MItGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItGeometry</a>&amp;        iter,\n\
                         const <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a>&amp;      mat,\n\
                         unsigned int        multiIndex);\n\
\n\
public:\n\
    // yTwist attributes\n\
    static  <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a>     angle;          // angle to twist    \n\
    static  <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a>        id;\n\
\n\
private:\n\
\n\
};\n\
\n\
\n\
</pre></div><div class=\'section\'><a id=\"initializing-the-plug-in\"></a><h2 id=\"initializing-the-plug-in\">Initializing the Plug-in</h2></div>\n\
<p>The new deformer node must be registered with the <span class=\'code\'>registerNode()</span> method of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> when initializing the plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> result;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, &quot;3.0&quot;, &quot;Any&quot;);\n\
    result = plugin.registerNode( &quot;yTwist&quot;, yTwist::id, yTwist::creator, \n\
                                  yTwist::initialize, MPxNode::kDeformerNode );\n\
    return result;\n\
}\n\
\n\
\n\
</pre></div><p>To remove the deformer node, you must deregister the plug-in with a call to the <span class=\'code\'>deregisterNode()</span> method of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> result;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    result = plugin.deregisterNode( offset::id );\n\
    return result;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"adding-deformer-attributes\"></a><h2 id=\"adding-deformer-attributes\">Adding Deformer Attributes</h2></div>\n\
<p>The <span class=\'code\'>initialize()</span> method is used to add and configure new attributes to proxy nodes. In the example below, the <span class=\'code\'>angle</span> attribute is added to the node and is made connectable. Any changes to the input attribute <span class=\'code\'>angle</span> affect the output attribute <span class=\'code\'>outputGeom</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> yTwist::initialize()\n\
{\n\
    // local attribute initialization\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> nAttr;\n\
    angle=nAttr.create( &quot;angle&quot;, &quot;fa&quot;, MFnNumericData::kDouble );\n\
        nAttr.setDefault(0.0);\n\
        nAttr.setKeyable(true);\n\
    addAttribute( angle); \n\
\n\
    // affects\n\
    //\n\
    attributeAffects( yTwist::angle, yTwist::outputGeom );\n\
\n\
    return MS::kSuccess;\n\
}\n\
\n\
\n\
</pre></div><div class=\'section\'><a id=\"deform-method\"></a><h2 id=\"deform-method\">Deform Method</h2></div>\n\
<p>The <span class=\'code\'>deform()</span> method implements an algorithm to compute the deformation.</p>\n\
<p>In the <span class=\'code\'>yTwist</span> class, the <span class=\'code\'>deform()</span> method deforms a point with a yTwist algorithm. The geometry data is extracted from the datablock by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a></span> and deforms each point of the geometry. The <span class=\'code\'>deform()</span> method returns a <span class=\'code\'>MS::kSuccess</span> to indicate a successful deformation. If not, the deformation encountered problems, such as invalid data input or insufficient memory.</p>\n\
<p>There are four required arguments for this method. The <span class=\'code\'>block</span> argument refers to the node’s datablock where information on the geometry is stored. The <span class=\'code\'>iter</span> argument is the iterator for the geometry to be deformed. The <span class=\'code\'>m</span> is the matrix used to transform points from local space to world space. The <span class=\'code\'>multiIndex</span> is the index of the requested output geometry. In the yTwistNode example, only the <span class=\'code\'>block</span> and the <span class=\'code\'>iter</span> arguments are used.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>\n\
yTwist::deform( <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; block,\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MItGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItGeometry</a>&amp; iter,\n\
                const <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a>&amp; /*m*/,\n\
                unsigned int /*multiIndex*/)\n\
\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
    \n\
    // determine the angle of the yTwist\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> angleData = block.inputValue(angle,&amp;status);\n\
    McheckErr(status, &quot;Error getting angle data handle\\n&quot;);\n\
    double magnitude = angleData.asDouble();\n\
\n\
    // determine the envelope (this is a global scale factor)\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> envData = block.inputValue(envelope,&amp;status);\n\
    McheckErr(status, &quot;Error getting envelope data handle\\n&quot;);  \n\
    float env = envData.asFloat();  \n\
\n\
    // iterate through each point in the geometry\n\
    //\n\
    for ( ; !iter.isDone(); iter.next()) {\n\
        \n\
        <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a> pt = iter.position();\n\
\n\
        // do the twist\n\
        //\n\
        double ff = magnitude*pt.y*env;\n\
        if (ff != 0.0) {\n\
            double cct= cos(ff);\n\
            double cst= sin(ff);\n\
            double tt= pt.x*cct-pt.z*cst;\n\
            pt.z= pt.x*cst + pt.z*cct;\n\
            pt.x=tt;;\n\
        }\n\
\n\
        iter.setPosition(pt);\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>In this example, no per-vertex weighting is used by the deformer. For an example of per-vertex weighting, see the Developer Kit example offsetNode, which inherits from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDeformerNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_deformer_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxDeformerNode</a></span>, and uses <span class=\'code\'>weightValue()</span> to obtain the weight value for each vertex, CV or lattice point. This example also illustrates how to implement accessory nodes.</p>\n\
<div class=\'section\'><a id=\"other-methods\"></a><h2 id=\"other-methods\">Other methods</h2></div>\n\
<p>There are several other methods in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryFilter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_geometry_filter.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxGeometryFilter</a></span> that allow the plug-in to:</p>\n\
<ul>\n\
<li>listen to important modification events</li>\n\
<li>handle special case during set editing of points (reconnect using old input/output indices if all points are deleted from the set and then added back in)</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";