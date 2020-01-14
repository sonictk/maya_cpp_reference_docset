var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Writing a Manipulator</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Writing a Manipulator</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"writing-a-manipulator\"></a></div>\n\
<p>You can create manipulators in the following ways:</p>\n\
<ul>\n\
<li>Create a base manipulator on any node in the current scene.</li>\n\
<li>Create a composite manipulator by adding base manipulators to a manipulator container.</li>\n\
<li>Create a new type of manipulator node by using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode</a></span> class and define custom drawing and picking of the manipulator node.</li>\n\
</ul>\n\
<p>Writing a manipulator involves defining a subclass of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer</a></span> class, adding base manipulators to the container manipulator, and defining associations between the manipulator and the attributes on the nodes they affect. Even if your manipulator consists of only one base manipulator, it is necessary to create a container manipulator and add the base manipulator to it.</p>\n\
<p>Container manipulators are composed of one or more base manipulators. When base manipulators are added to a container manipulator, they are referred to as children of the container manipulator, and are added using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::createChildren()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#a5f6e1ab823f87eddad380cd85f61293c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html#a825c584d33982318a719fe7e5c3f712e&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::createChildren()</a></span> method.</p>\n\
<p>The association between the manipulator and the corresponding plugs on a node must be defined. The nature of the association between the manipulator and the plugs might be simple or complex. For simple associations, there is a direct correspondence between a manipulator value and the corresponding plug. Conversion functions are used for complex associations.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";