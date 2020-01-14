var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MDGModifier</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MDGModifier</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"mdgmodifier\"></a></div>\n\
<p>The Maya SDK also includes classes and methods for manipulating and modifying dependency graphs.</p>\n\
<p>The MDGModifier class is used to modify a dependency graph. It lets you create nodes in the graph, connect nodes to each other, add metadata to the graph, set and modify attributes, and delete nodes in the graph.</p>\n\
<p>Each call in MDGModifier will be queued until the <span class=\'code\'>doIt()</span> function is called. Once <span class=\'code\'>doIt()</span> is called, the queued tasks will be executed.</p>\n\
<p>However, in the case of deleting nodes from the graph, you must call <span class=\'code\'>doIt()</span> to clear the queue before calling <span class=\'code\'>deleteNode()</span>. After calling <span class=\'code\'>deleteNode()</span>, call <span class=\'code\'>doIt()</span> once again to re-clear the queue before making any other calls.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";