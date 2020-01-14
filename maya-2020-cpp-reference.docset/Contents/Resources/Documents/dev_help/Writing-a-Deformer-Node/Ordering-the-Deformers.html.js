var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Ordering the Deformers</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Ordering the Deformers</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"ordering-the-deformers\"></a></div>\n\
<p>The order in which the deformers are added to an object affects how they work in a scene because each deformer takes the output of the previous deformer as its input. The following example shows the effect of ordering the deformers.</p>\n\
<ol>\n\
<li>Take a model of a giant.</li>\n\
<li>Add a sine wave nonlinear deformer and then add a cluster deformer.</li>\n\
<li>Select the cluster and translate the cluster up in the Y axis. The giant in its sine wave position gets translated upwards by the cluster node because the cluster is after the sine wave.</li>\n\
<li>Reorder the cluster so that it is ahead of the sine wave node in the dependency graph. Now, if the cluster is translated upwards, it moves the top half of the giant out of the region of influence of the sine wave deformer and as you move the cluster up and down, you can control which regions of the giant are deformed by the sine wave.</li>\n\
</ol>\n\
<p>The following figure illustrates this example. The initial state is shown on the left, sine followed by the translated cluster is shown in the middle, and the translated cluster followed by the sine is shown on the right.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/deformer_order.png\' title=\'\' /></div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";