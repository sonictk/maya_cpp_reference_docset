var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shared Libraries</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Shared Libraries</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"shared-libraries\"></a></div>\n\
<p>If a C++ plug-in links to a custom shared library, special steps must be taken.</p>\n\
<ul>\n\
<li>Windows: The shared library (ending in <span class=\'code\'>.dll</span>) must go into either Maya&#39;s own <span class=\'code\'>bin</span> directory or one of the directories in the user&#39;s PATH environment variable.</li>\n\
<li>Linux: The library (ending in <span class=\'code\'>.so</span>) must go into either Maya&#39;s own <span class=\'code\'>lib</span> directory or one of the directories in the user&#39;s LD_LIBRARY_PATH environment variable.</li>\n\
<li>Mac OS X: The library (ending in <span class=\'code\'>.dylib</span>) must go into Maya&#39;s own <span class=\'code\'>Maya.app/Contents/MacOS</span> directory. When linking the library you must use the <span class=\'code\'>-install_name @executable_path/libName.dylib</span> flag on MacOS 10.4, or the the <span class=\'code\'>-rpath</span> flag on MacOS 10.5.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";