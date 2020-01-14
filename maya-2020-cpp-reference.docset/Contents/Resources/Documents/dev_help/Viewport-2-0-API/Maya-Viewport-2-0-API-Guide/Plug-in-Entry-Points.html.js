var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Plug-in Entry Points</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Plug-in Entry Points</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"plug-in-entry-points\"></a></div>\n\
<p>Assuming some basic understanding of the rendering framework and the basic constructs as they are exposed in the API, the remainder of this document concentrates on the entry points exposed in the rendering pipeline.</p>\n\
<p>Currently there are six main entry points which serve the following purposes:</p>\n\
<ol>\n\
<li><strong>Geometry Override</strong>: Allows a plug-in to define custom geometric data streams to be used to draw a plug-in DAG object.</li>\n\
<li><strong>Shader Override</strong>: Allows for custom shading to be performed. This is provides, roughly speaking, the equivalent functionality of the legacy hardware shader plug-in interface.</li>\n\
<li><strong>Shading Node Override</strong> Allows a plug-in to define a hardware shader fragment for use in drawing a software shading node in the viewport.</li>\n\
<li><strong>Draw Override</strong>: Allows full control over all drawing of a plug-in DAG object. This level of control is similar to the legacy plug-in locator or plug-in shape drawing. This is only a drawing override.</li>\n\
<li><strong>Sub-scene Override</strong>: Allows a plug-in to efficiently define a large number of render items needed to draw a single DAG object.</li>\n\
<li><strong>Render Loop Override</strong>: Allows custom render loops to be created, which override the internal render loop. This is a more formalized way to perform multi-pass rendering.</li>\n\
</ol>\n\
<p>The following diagram is a basic breakdown of where these entry points reside. Without going into too much detail, it shows at which phase of the pipeline an entry point resides, with the obvious exception of the render loop override which uses or refines the pipeline.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8cbf.jpg\' title=\'\' /></div>\n\
<p>Figure 34: Geometry overrides interact at the Update Phase of the pipeline as they serve as geometry providers to update render items to be sent down the pipeline. Shader overrides and draw overrides interact at the Draw Phase of the pipeline to control how things are drawn. For simplicity, sub-scene overrides and shading node overrides are not shown; however, they both interact during the Update Phase.</p>\n\
<p>Note the usage of the term <strong>attach</strong>. These entry points strive to be as unobtrusive as possible by adding or attaching additional functionality to existing nodes, as opposed to introducing new node types. The main attachment points are for plug-in DAG objects, plug-in shading nodes and a renderer. The last refers to the concept of a “renderer” rather than specific renderer objects.</p>\n\
<p>In this framework, a plug-in can be attached to any entry point without having to rely on other plug-ins in other entry points. However, if one or more entry points have plug-ins attached, then they work together in a more cohesive manner than any older interfaces. For example, in older APIs, the plug-in geometry mechanism (roughly a geometry override) and the plug-in shader mechanism (roughly a shader override) do not work together.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";