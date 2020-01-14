var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Overview of the DAG Hierarchy</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Overview of the DAG Hierarchy</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"overview-of-the-dag-hierarchy\"></a></div>\n\
<p>In Maya, a directed acyclic graph (DAG), defines elements such as the position, orientation, and scale of geometry. The DAG is composed of two types of DAG nodes, transforms and shapes.</p>\n\
<p>Transform nodes—Maintain transformation information (position, rotation, scale, etc.) as well as parenting information. For example, if you model a hand, you would like to apply a single transformation to rotate the palm and fingers, rather than rotating each individually—in this case the palm and fingers would share a common parent transformation node.</p>\n\
<p>Shape nodes—Reference geometry and do not provide parenting or transformation information.</p>\n\
<p>In the simplest case, the DAG describes how an instance of an object is constructed from a piece of geometry. For example, when you create a sphere, you create both a shape node (the sphere) and a transformation node that allows you to specify the sphere’s position, scale, or rotation. The transformation node’s shape node is its <em>child</em>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";