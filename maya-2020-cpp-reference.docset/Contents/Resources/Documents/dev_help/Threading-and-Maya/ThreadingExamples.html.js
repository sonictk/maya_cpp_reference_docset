var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Plug-in examples that use threading</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Plug-in examples that use threading</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"plug-in-examples-that-use-threading\"></a></div>\n\
<p>The following plug-ins can be used to learn how to implement threading in Maya</p>\n\
<ul>\n\
<li><strong>threadedBoundingBox</strong>: demonstrates the hazards of false sharing in multithreaded code.</li>\n\
<li><strong>threadingLockTests</strong>: performance test for locks and atomic operations.</li>\n\
<li><strong>splatDeformer</strong>: example of threadsafe deformer plug-in.</li>\n\
</ul>\n\
<p>The threadTestCmd and threadTestWithLocksCmd demonstrate the use of the legacy Maya threading classes, MThreadPool, MAtomic, MMutex, MSpinLock, and MAsyncThread. The classes demonstrated in these two plug-ins should not be used in your plug-ins. Instead, you are encouraged to use the TBB classes and methods instead.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";