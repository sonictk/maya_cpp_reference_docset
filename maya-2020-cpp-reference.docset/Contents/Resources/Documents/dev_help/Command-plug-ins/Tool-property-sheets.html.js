var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Tool property sheets</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Tool property sheets</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"tool-property-sheets\"></a></div>\n\
<p>Tool property sheets are interactive editors for displaying and modifying the properties of a context. They are similar to attribute editors for modifying properties of a dependency graph node. They execute the context command following user actions in the editor to perform editing operations on the activated context. The tool property sheet for the activated context is displayed by double-clicking on the tool’s icon.</p>\n\
<ul>\n\
<li>Implementation of a tool property sheet for your context entails writing two MEL files, one for editing the context and one for querying the context.</li>\n\
<li>The files must be named <yourcontextname>Properties.mel and &lt;yourContextNameValues.mel where <yourcontextname> is the name of your context as returned by the <span class=\'code\'>getClassName()</span> method of your context.</yourcontextname></yourcontextname></li>\n\
<li>The &lt;&gt;Properties.mel file defines the layout of the editor and the actions to be taken by widgets in the editor.</li>\n\
<li>The &lt;&gt;Values.mel file is used to retrieve values from the context with the editor is initialized.</li>\n\
</ul>\n\
<p>Refer to the helixProperties.mel and helixValues.mel files in the example plug-in directory for a sample implementation of a property sheet.</p>\n\
<p>To effectively implement a tool property sheet for your context, you must implement sufficient edit and query options in your context command as well as sufficient access methods in your <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a></span> class for setting and retrieving its internal properties.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";