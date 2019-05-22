var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Appendix A: NURBS Geometry</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Appendix A: NURBS Geometry</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"appendix-a-nurbs-geometry\"></a></div>\n\
<p>There are quite a few really good books on spline geometry and NURBS geometry. This appendix will not try to teach you everything about NURBS but will try to give you a general overview of the Maya particulars.</p>\n\
<div class=\'figure\'><img src=\'developer/images/comp_developersManual06.png\' title=\'\'></div>\n\
<p>Of the six curves in the illustration, the first is a circle primitive with four spans. Notice how the circle does not touch the hull. The next five curves are attempts at replicating this geometry using the curve building tools in Maya.</p>\n\
<p>The circle appears to have four CVs using the default options of the curve tool (Create &gt; CV Curve Tool), with the following options set:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-odd-row\"><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-118\"></a><p class=\"table-body\">Multiple End Knots</p></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-117\"></a><p class=\"table-body\">ON</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-116\"></a><p class=\"table-body\">Curve Degree</p></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-115\"></a><p class=\"table-body\">3 Cubic</p></td></tr></tbody></table>\n\
<p>If you place four CVs, you produce something that looks like &quot;Curve 1&quot;. This is an Open curve. It’s open because the curve has a gap between the first and last CVs. It also has only one span, where the circle has four. (A span connects two edit points.)</p>\n\
<p>If you try to close the curve by placing another CV on top of the first CV, you produce something that looks like Curve 2. Curve 2 is closer to the primitive circle, first because it is Closed, that is, there is no gap in the curve between the first and last CVs, and second, because it has two spans. However, you will notice that the curve does not look like a circle, it intersects the hull at the first CV and there is a discontinuity in the curve’s tangent at this point. If you were to place another CV overlapping the second CV, you would find that the curve is now open and looks even less like a circle. A third and fourth CV don’t help either, all because the first and last CVs are always on the hull.</p>\n\
<p>If you go into the curve tool’s option box and turn off Multiple End Knots and place four CVs, you produce a curve which looks like Curve 3. This looks more promising than Curve 1 since the curve does not intersect the hull. If you now place a fifth CV on top of the first CV you produce Curve 4. This still looks promising. If you go further and add a sixth and seventh CV on top of the second and third CV, you produce Curve 5. This looks exactly like the circle. You’ve done it.</p>\n\
<p>Well, not quite. If you were now to pull one of these additional CVs away from the CV under it, you would pull the curve apart, producing an open curve again. However, no matter how you pull the CVs on the circle you cannot pull it apart, it remains a closed curve. So there is still a small difference between these two curves. The difference is the form of the curve. Curves 1, 3 and 4 are all Open, that is, their form is open. Curves 2 and 5 are closed, that is, their form is closed. The circle is neither open nor closed, it’s form is a third type, called periodic. Periodic implies that the last degree CVs of the curve overlap the first degree CVs, and all operations on the CVs ensure that they stay together and cannot be pulled apart.</p>\n\
<p>A periodic curve generally has tangency continuity on the whole curve while a closed curve will not.</p>\n\
<div class=\'section\'><a id=\"examples\"></a><h2 id=\"examples\">Examples</h2></div>\n\
<p>The following plug-in creates Curve 1. To ensure that the CVs interpolate the end points of the curve, the knots of the curve are duplicated (piled up) at each end.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &lt;maya/MSimple.h&gt;\n\
#include &lt;maya/MIOStream.h&gt;\n\
#include &lt;maya/MPointArray.h&gt;\n\
#include &lt;maya/MDoubleArray.h&gt;\n\
#include &lt;maya/MFnNurbsCurve.h&gt;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> curveTest( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; )\n\
{\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve</a> curveFn;\n\
     const double cvs[][4] = {\n\
                                 { -1, 0, -1, 1 },\n\
                                 { -1, 0,  1, 1 },\n\
                                 {  1, 0,  1, 1 },\n\
                                 {  1, 0, -1, 1 }\n\
                             };\n\
     const double knots[] = { 0, 0, 0, 1, 1, 1 };\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a> cvArray( cvs, unsigned( sizeof(cvs) / (4*sizeof(double)) ) );\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDoubleArray</a> knotArray( knots, unsigned(sizeof( knots )/sizeof( double )) );\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> curve = curveFn.create( cvArray, knotArray, 3, <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve::kOpen\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html#a99f5203c7742378941e34926280c8e66a7fb3bf49ba349ca1a266be41df447b5b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve::kOpen</a>,\n\
     false, false, <a href=\"javascript:void(0)\" data-symbol=\"MObject::kNullObj\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject::kNullObj</a>, &amp;status );\n\
     if ( MS::kSuccess != status )\n\
     {\n\
         cout &lt;&lt; &quot;Failed to create curve\\n&quot;;\n\
         return status;\n\
     }\n\
     return MS::kSuccess;\n\
}\n\
     <a href=\"javascript:void(0)\" data-symbol=\"DeclareSingle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#ga305f156d5e80c4d9b9bf8606f5e6225c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">DeclareSingle</a>( curveTest );\n\
\n\
</pre></div><p>The only change necessary to produce Curve 3 from Curve 1 is simply to change the knot vector so that the knots are not piled up at the ends of the curve:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const double knots[] = { 0, 1, 2, 3, 4, 5 };\n\
\n\
</pre></div><p>Changing Curve 1 to Curve 2 is a little more involved. A CV, a duplicate of the first, has to be added to the end of the CV array, and a new knot must be inserted into the knot array.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const double cvs[][4] = {\n\
                            { -1, 0, -1, 1 },\n\
                            { -1, 0,  1, 1 },\n\
                            { 1,  0,  1, 1 },\n\
                            { 1,  0, -1, 1 },\n\
                            { -1, 0, -1, 1 }\n\
                        };\n\
const double knots[] = { 0, 0, 0, 1, 2, 2, 2 };\n\
\n\
</pre></div><p>Curve 4 is to Curve 3 what Curve 2 is to Curve 1, that is, just an additional CV (a duplicate of the first) and an additional knot.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const double cvs[][4] = {\n\
                            { -1, 0, -1, 1 },\n\
                            { -1, 0,  1, 1 },\n\
                            {  1, 0,  1, 1 },\n\
                            {  1, 0, -1, 1 },\n\
                            { -1, 0, -1, 1 }\n\
                        };\n\
const double knots[] = { 0, 1, 2, 3, 4, 5, 6 };\n\
\n\
</pre></div><p>Curve 5 continues on from Curve 4 with an additional two CVs (duplicating the second and third) and two knots.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const double cvs[][4] = {\n\
                             { -1, 0, -1, 1 },\n\
                             { -1, 0,  1, 1 },\n\
                             {  1, 0,  1, 1 },\n\
                             {  1, 0, -1, 1 },\n\
                             { -1, 0, -1, 1 },\n\
                             { -1, 0,  1, 1 },\n\
                             {  1, 0,  1, 1 }\n\
};\n\
const double knots[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8 };\n\
\n\
</pre></div><p>This will produce a curve identical in shape to the circle primitive, however if you were to start pulling on the CVs of this curve you would find that you could pull the curve apart. To keep the curve from separating one additional change is required. When creating the curve, rather than specifying it be open (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve::kOpen\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html#a99f5203c7742378941e34926280c8e66a7fb3bf49ba349ca1a266be41df447b5b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve::kOpen</a></span>) specify that it should be periodic (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve::kPeriodic\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html#a99f5203c7742378941e34926280c8e66a0ed9d38a35a60087a093558dad96d882&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve::kPeriodic</a></span>).</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> curve = curveFn.create( cvArray, knotArray, 3,\n\
 <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve::kPeriodic\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html#a99f5203c7742378941e34926280c8e66a0ed9d38a35a60087a093558dad96d882&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve::kPeriodic</a>, false, false, <a href=\"javascript:void(0)\" data-symbol=\"MObject::kNullObj\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject::kNullObj</a>, &amp;status );\n\
\n\
</pre></div><p>So long as there is the proper number of overlapping CVs (one for each degree of the curve - these curves are degree three, so there should be three overlapping CVs) you can create a periodic curve. If there are insufficient overlapping CVs, the create() method will fail.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";