var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Basic Viewport 2.0 object sequencing</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Basic Viewport 2.0 object sequencing</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"basic-viewport-2.0-object-sequencing\"></a></div>\n\
<div class=\'section\'><a id=\"mpxdrawoverride-and-mpxgeometryoverride-tracing\"></a><h2 id=\"mpxdrawoverride-and-mpxgeometryoverride-tracing\">MPxDrawOverride and MPxGeometryOverride tracing</h2></div>\n\
<p>To aid with understanding the sequence of calls that are made for object overrides, plug-in writers can enable tracing on the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> classes.</p>\n\
<p>In both cases, the interfaces are the same:</p>\n\
<p>-<span class=\'code\'>virtual bool traceCallSequence() const;</span><br>-<span class=\'code\'>virtual void handleTraceMessage( const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> &amp;message ) const;</span></p>\n\
<p>The first method can be overridden to return true. When this occurs, the call sequence is traced to record the location of various calls as strings. By default, these strings are output to the standard output. If the plug-in overrides the <span class=\'code\'>handleTraceMessage()</span> method, then they can route the messages to different locations. For instance, the <em>apiMeshShape</em> (developer kit example) geometry override routes messages to the command window.</p>\n\
<p>The following is a sample trace logged when an <em>apiMeshShape</em> object is created. Note that, for context, the path of the object is given when possible.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// apiMeshGeometryOverride: Geometry override DG update: apiMesh1 // \n\
// apiMeshGeometryOverride: Start geometry override render item update: |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: - Call API to update render items // \n\
// apiMeshGeometryOverride: End geometry override render item update: |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: StandardShadedItem. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: StandardShadedItem. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: FlatShadedItem. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: FlatShadedItem. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshWire. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshShadedTemplateWire. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshSelectedWireFrame. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshVertices. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshActiveVertices. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshVertexIds. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshVertexPositions. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshFaceCenterInWireframeMode. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshFaceCenterInShadedMode. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshAffectedEdges. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshAffectedFaces. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshEdgeSelection. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiMeshFaceSelection. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override dirty indexing check: apiShadedProxy. |transform1|apiMesh1 // \n\
// apiMeshGeometryOverride: Start geometry override update stream and indexing data: apiMesh1 // \n\
// apiMeshGeometryOverride: - Update render item: StandardShadedItem // \n\
// apiMeshGeometryOverride: End geometry override update stream and indexing data: apiMesh1 // \n\
// apiMeshGeometryOverride: Geometry override clean up: apiMesh1 //\n\
</pre></div><p>The <em>footPrintNode_GeometryOverride</em> plug-in also enables tracing for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>. For geometry overrides, the drawing of render items is not logged as part of the trace as is with draw overrides (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span>). The following is an example trace from the <em>rawfootPrintNode</em> plug-in:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// rawFootPrintNode: Start draw override render item update for object: |transform1|rawfootPrint1 // \n\
// rawFootPrintNode:  - call draw override prepareForDraw() // \n\
// rawFootPrintNode: End draw override render item update for object: |transform1|rawfootPrint1 // \n\
// rawFootPrintNode: Start draw override queuing of UI drawables for object: |transform1|rawfootPrint1 // \n\
// rawFootPrintNode:  - call draw override addUIDrawables() // \n\
// rawFootPrintNode: End draw override queuing of UI drawables for object: |transform1|rawfootPrint1 // \n\
// rawFootPrintNode: Start draw override draw function: |transform1|rawfootPrint1 // \n\
// rawFootPrintNode: End draw override draw function: |transform1|rawfootPrint1 //\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";