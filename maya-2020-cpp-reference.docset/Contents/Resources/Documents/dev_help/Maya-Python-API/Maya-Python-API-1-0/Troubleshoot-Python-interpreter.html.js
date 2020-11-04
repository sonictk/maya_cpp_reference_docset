var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Troubleshoot Python interpreter crashes after initializing Maya standalone</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Troubleshoot Python interpreter crashes after initializing Maya standalone</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"troubleshoot-python-interpreter-crashes-after-initializing-maya-standalone\"></a></div>\n\
<p>If the Python interpreter crashes after you call <span class=\'code\'>maya.standalone.initialize()</span>, you can avoid this problem by calling <span class=\'code\'>maya.standalone.uninitialize()</span> at the end of your script to cleanly terminate the standalone application&#39;s connection to Maya. See <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-API-1-0/Using-the-Maya-Python-API.html#standalone-scripts\' title=\'\'>Standalone Scripts</a>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";