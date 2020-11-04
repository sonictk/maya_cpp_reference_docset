var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>A more complex dependency graph example</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>A more complex dependency graph example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"a-more-complex-dependency-graph-example\"></a></div>\n\
<p>This page provides a slightly more complex example of a dependency graph node plugin.</p>\n\
<p>The code fragments on this page are taken from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"simpleLoftNode/simpleLoftNode.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/simple_loft_node_2simple_loft_node_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">simpleLoftNode/simpleLoftNode.cpp</a></span> example, which takes a curve as input and generates a surface.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> simpleLoft::inputCurve;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> simpleLoft::outputSurface;\n\
\n\
</pre></div><p>This example has only two attributes, an input curve and an output surface.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> simpleLoft::initialize()\n\
{\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a> typedAttr;\n\
\n\
</pre></div><p>The previous example used <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a></span> since the attributes were simply floating point numbers. Since this example uses more complex data, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a></span> is used.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    inputCurve = typedAttr.create( &quot;inputCurve&quot;, &quot;in&quot;, \n\
    MFnData::kNurbsCurve, &amp;stat );\n\
    if( !stat )\n\
        return stat;\n\
\n\
</pre></div><p>This creates an attribute to hold curve objects. The Type enumeration in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnData</a></span> lists the types of data which can be created using a typed attribute. This list includes curves, surfaces, meshes, strings, user-defined data, etc.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    outputSurface = typedAttr.create( &quot;outputSurface&quot;, &quot;out&quot;,\n\
    MFnData::kNurbsSurface, &amp;stat );\n\
    if( !stat )\n\
        return stat;\n\
\n\
</pre></div><p>This creates an attribute to hold the generated surface object.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    typedAttr.setStorable( false );\n\
\n\
</pre></div><p>Since the surface is a generated object, it isn’t necessary to store it when storing the node to a file.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    addAttribute( inputCurve );\n\
    addAttribute( outputSurface );\n\
    attributeAffects( inputCurve, outputSurface );\n\
\n\
</pre></div><p>Finally, the two attributes are added to the node and <span class=\'code\'>attributeAffects()</span> is used to indicate that when the input curve is modified the resulting surface will have to be regenerated.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> simpleLoft::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
    if ( plug == outputSurface )\n\
    {\n\
\n\
</pre></div><p>This ensures that the computation of the node is only done for the appropriate attribute.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputData = data.inputValue( inputCurve, &amp;stat );\n\
        if( !stat )\n\
            return stat;\n\
\n\
</pre></div><p>As before, the data block contains all the data for the node in an efficient manner. The data handle is required to access this data.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        else\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> curve = inputData.asNurbsCurve();\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve</a> curveFn( curve, &amp;stat );\n\
            if( !stat )\n\
                return stat;\n\
\n\
</pre></div><p>With the data handle you can then get the input curve which you can then pass on to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve</a></span> function set to operate on.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">            else\n\
            {\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> surfHandle = data.outputValue( outputSurface, &amp;stat );\n\
                if( !stat )\n\
                    return stat;\n\
\n\
</pre></div><p>A second data handle is used to access the surface’s portion of the data block.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">                <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurfaceData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_surface_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurfaceData</a> dataCreator;\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> newSurfData = dataCreator.create( &amp;stat );\n\
                if ( !stat )\n\
                    return stat;\n\
\n\
</pre></div><p>Notice that you don’t use <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurface</a></span> in this example, but rather <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurfaceData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_surface_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurfaceData</a></span>. This is necessary since you want to create a data object to pass through the dependency graph and not a DAG object. This will always be the case when creating objects in dependency graph nodes. There are special nodes used which connect surface data into the DAG, and therefore any node that you create which creates geometry need not also create a DAG node for it, just the data.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">                <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> newSurf = loft( curve, newSurfData, stat );\n\
                if( !stat )\n\
                    return stat;\n\
\n\
</pre></div><p>This calls some user-written code which creates a lofted surface from the curve. The method would use <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurface</a></span> to operate on the surface data object. (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurface</a></span> determines whether it is operating on a surface in the DAG or not. If not, some of it’s methods will not succeed. For example, since the surface data object isn’t in the DAG, determining the world position of it does not make sense, so that method would fail.)</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">                surfHandle.set( newSurfData );\n\
\n\
</pre></div><p>Add the new surface to the data block so that the output changes.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">                stat = data.setClean( plug );\n\
                if( !stat )\n\
                    return stat;\n\
\n\
</pre></div><p>Tell the system that the plug has been successfully recomputed and is now clean.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">            }\n\
        }\n\
    }\n\
    else\n\
    {\n\
         cerr &lt;&lt; &quot;unknown plug\\n&quot;;\n\
         return MS::kUnknownParameter;\n\
    } \n\
\n\
</pre></div><p>You must return <span class=\'code\'>MS::kUnknownParameter</span> if the plug is not recognized or if there is no computation occurring on a given keyable plug. This causes the compute of the base class to be called which will implement default data handling and cause:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">     return MS::kSuccess;\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";