var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Writing a shape</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Writing a shape</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"writing-a-shape\"></a></div>\n\
<p>The goal of writing a shape is to take a geometry class you defined and integrate that geometry into Maya in the form of a DAG object.</p>\n\
<p>It is a good idea to keep geometry-specific information in your geometry class. This way it will be easier to represent the geometry as dependency graph data. Keeping geometry specific information in your geometry class will also make it easier to handle drawing as you will have to pass geometry-specific drawing information onto Maya’s draw request queue as draw data.</p>\n\
<div class=\'section\'><a id=\"where-to-start\"></a><h2 id=\"where-to-start\">Where to start</h2></div>\n\
<p>User-defined shapes are more complex than DG nodes because of the additional drawing, selection, and component functionality. It is a good idea to start by designing the shape node before writing any code. This involves defining your input and output attributes and determining the relationships (or affects) between those attributes.</p>\n\
<p>The simplest shape is one without components or geometry data—for example, a sphere shape that takes an input radius and perhaps x and y divisions and from this computes the geometry for a sphere to draw in OpenGL.</p>\n\
<p>It is also a good idea to write your shape in stages. The first step is to derive from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSurfaceShape</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSurfaceShapeUI</a></span>. Writing the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSurfaceShape</a></span> class is the same as writing any <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span> class. The additional virtual functions can be overridden as the functionality is needed.</p>\n\
<div class=\'section\'><a id=\"registering-and-deregistering-shapes\"></a><h2 id=\"registering-and-deregistering-shapes\">Registering and deregistering shapes</h2></div>\n\
<p>Registering shapes with Maya is similar to registering DG nodes. The only difference is that shapes have a separate UI class that must be registered with the shape node. The <span class=\'code\'>MFnPlugin::resgisterShape</span> function is used for shape registration. Deregistering a shape is exactly the same as deregistering a node. Here is an example of shape registration:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj,&quot;Autodesk&quot;,&quot;2.0&quot;, &quot;Any&quot;);\n\
    return plugin.registerShape( &quot;yourShape&quot;, yourShape::id,\n\
        &amp;yourShape::creator,\n\
        &amp;yourShape::initialize,\n\
        &amp;yourShapeUI::creator );\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    return plugin.deregisterNode( yourShape::id );\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";