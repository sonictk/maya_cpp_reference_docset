var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Wrappers</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Wrappers</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"wrappers\"></a></div>\n\
<p>Wrappers exist for simple objects such as vectors and matrices. They are generally fully implemented C++ classes with public constructors and destructors. When a method returns a wrapper, you are responsible for it. You always own the wrapper that you reference.</p>\n\
<p>You can allocate and deallocate them as necessary. Leaving scope will usually be adequate for deleting the wrapper.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> Move wrapper declarations (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_int_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFloatArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatArray</a></span> etc.) out of heavy loops if possible. The constructor of a wrapper will in most cases call new to allocate the internal Maya object. As a result, if a wrapper is declared in a heavy loop memory will be allocated and de-allocated repeatedly.This does not apply to static wrapper classes such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal</a></span>.</p>\n\
</blockquote>\n\
<p>The following is a plug-in that builds a helical curve. See <a href=\'#!/url=./dev_help/Appendices/Appendix-A-NURBS-Geometry.html\' title=\'\'>Appendix A: NURBS Geometry</a> for a brief explanation of NURBS geometry.</p>\n\
<p>In this example, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_double_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDoubleArray</a></span> are wrappers.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-c\">#include &lt;math.h&gt;\n\
#include &lt;maya/MIOStream.h&gt;\n\
#include &lt;maya/MSimple.h&gt;\n\
#include &lt;maya/MPoint.h&gt;\n\
#include &lt;maya/MPointArray.h&gt;\n\
#include &lt;maya/MDoubleArray.h&gt;\n\
#include &lt;maya/MFnNurbsCurve.h&gt;\n\
<a href=\"javascript:void(0)\" data-symbol=\"DeclareSimpleCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">DeclareSimpleCommand</a>( doHelix, &quot;Autodesk - Example&quot;, &quot;2017&quot;);\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doHelix::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
    const unsigned deg = 3; // Curve Degree\n\
    const unsigned ncvs = 20; // Number of CVs\n\
    const unsigned spans = ncvs - deg; // Number of spans\n\
    const unsigned nknots = spans+2*deg-1; // Number of knots\n\
    double radius = 4.0; // Helix radius\n\
    double pitch = 0.5; // Helix pitch\n\
    unsigned i;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a> controlVertices;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_double_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDoubleArray</a> knotSequences;\n\
    // Set up cvs and knots for the helix\n\
    //\n\
    for (i = 0; i &lt; ncvs; i++)\n\
        controlVertices.append( <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a>( radius * cos( (double)i ),\n\
        pitch * (double)i, radius * sin( (double)i ) ) );\n\
    for (i = 0; i &lt; nknots; i++)\n\
        knotSequences.append( (double)i );\n\
    // Now create the curve\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve</a> curveFn;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> curve = curveFn.create( controlVertices,\n\
        knotSequences, deg, MFnNurbsCurve::kOpen, false, false, <a href=\"javascript:void(0)\" data-symbol=\"MObject::kNullObj\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject::kNullObj</a>, &amp;stat );\n\
    if ( MS::kSuccess != stat )\n\
        cout &lt;&lt; &quot;Error creating curve.\\n&quot;;\n\
    return stat;\n\
}\n\
\n\
</pre></div><p>Compile this plug-in, load it, then enter &quot;doHelix&quot; at the prompt. A helical curve displays in the Maya view.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";