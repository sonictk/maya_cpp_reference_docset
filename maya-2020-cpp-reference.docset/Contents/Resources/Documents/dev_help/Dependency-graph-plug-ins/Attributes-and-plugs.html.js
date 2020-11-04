var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Attributes and plugs</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Attributes and plugs</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"attributes-and-plugs\"></a></div>\n\
<p>This page describes how to work with simple, static attributes and plugs.</p>\n\
<p>A node by itself without any means to affect it is not very useful. Modification of a node is done through attributes and plugs.</p>\n\
<p>The attributes of a node define a data interface for the node to the rest of the graph. The only data that nodes pass to one another during evaluation comes and goes through this interface. They indicate what type of data can be accepted, what the name for that data will be (in a long form, or a short form), whether the data can be made into a list, and how the data is allowed to move in and out of the node. Types of data include simple data types such as integer and floating point values, and more complex data types such as points, whole polygonal meshes, and NURBS surfaces.</p>\n\
<p>Plugs are constructs which contain the data for a given attribute. All data access for the attribute is done through the plug. The attribute itself only defines the data type and name for the attribute. Plugs also are the ports for making connections between nodes.</p>\n\
<p>Attribute names must be unique across the entire node hierarchy, that is, across all derived and parent classes, but can be reused between unrelated nodes.</p>\n\
<p>Attributes may have a default value assigned to them. This will be the value that a plug on that attribute will have if its value has not been set. For example, a numeric attribute always has a default value of zero, though this can be changed when creating the attribute. Any of the typed attributes will have a default value equal to the default value of the data type they accept—numeric data defaults to zero, matrix data defaults to the identity matrix, etc.</p>\n\
<p>There are two main things you have to do in order to set up a static attribute:</p>\n\
<ul>\n\
<li>Declare a static <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> class member for the attribute in your node class. Initialize them to null values.</li>\n\
<li><p>Set up the attribute in your implementation of <span class=\'code\'>MPxNode::initialize()</span>, and add it to your node. To do this, you use one of the classes that derives from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute</a></span>, depending on what kind of data value your attribute will store.</p>\n\
<p>For example, to use attributes that store simple numeric values, you would use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a></span> class. See <a href=\'#!/url=./dev_help/Dependency-graph-plug-ins/A-basic-dependency-node-example.html\' title=\'\'>A basic dependency node example</a>.</p>\n\
<p>To store more complex data types, you set them up using other attribute classes like <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnTypedAttribute</a></span>. See <a href=\'#!/url=./dev_help/Dependency-graph-plug-ins/A-more-complex-dependency-graph.html\' title=\'\'>A more complex dependency graph example</a>.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"attributes-in-the-maya-ui\"></a><h2 id=\"attributes-in-the-maya-ui\">Attributes in the Maya UI</h2></div>\n\
<p>By default, Maya will automatically arrange the attributes of a node in the attribute editor. If you desire a special arrangement of the attributes of your node, you can write an attribute editor template for the node. This is a MEL file on your <span class=\'code\'>MAYA_SCRIPT_PATH</span>, whose name is of the form <span class=\'code\'>AE{nodeName}Template.mel</span>, that contains a MEL procedure with the name <span class=\'code\'>AE{nodeName}Template</span>. This procedure contains <em>editorTemplate</em> commands that instruct the attribute editor how to alter the default layout for the attributes in the node.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";