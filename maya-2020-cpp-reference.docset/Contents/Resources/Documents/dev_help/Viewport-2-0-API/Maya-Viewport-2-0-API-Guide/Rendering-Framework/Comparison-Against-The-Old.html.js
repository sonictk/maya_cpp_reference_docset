var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Comparison Against The Old System</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Comparison Against The Old System</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"comparison-against-the-old-system\"></a></div>\n\
<p>While it may seem natural to compare <strong>renderable items</strong> to the old set of <strong>UI DAG objects</strong>, they have very different purposes. Existing UI DAG objects are not data containers but were instead designed to provide an artificial split of “UI functionality” from “non-UI functionality.” They mix together evaluation, translation drawing and non-drawing functions, all within one construct. As there is no renderer, each UI object acts as its own renderer.</p>\n\
<p>Similarly, render items and the old set of <strong>draw requests</strong> should not be thought of as equivalent. A draw request can be considered to be anything without strict rules for what it can draw, for what data is required, and for the rela­tionship between the two. As an example, it is quite easy to create a draw request which indicates that it will draw a wireframe, but instead pass data for control points, and end up drawing filled triangles. There are no real rules as to when node evaluation occurs, so data may be calculated on-the-fly at draw time.</p>\n\
<p>In terms of resource management, all geometry in the old system is CPU based and there is no equivalent to geo­metric consolidation in the old system. Additionally, there is minimal support for GPU textures and output buffers and no support for GPU shaders and GPU states.</p>\n\
<p>The internal render loop has the up-front overhead of always traversing through the scene (or at least the parallel DAG UI hierarchy) to re-evaluate and re-extract draw requests. Categorization is also employed in the old system but can be ignored at will as UI objects are ultimately responsible for how to categorize, update and draw. The ren­der loop for the most part is closed except for some basic multi-passing. More details and comparisons will be given when discussing each interface.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";