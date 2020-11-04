var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The Renderer</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The Renderer</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-renderer\"></a></div>\n\
<p>Thus far, the focus has been on render loop logic and the flow of renderable objects down a pipeline. In addition to this there is an infrastructure for managing the various rendering resources. All resources can be considered to be part of the overall rendering database, with each resource having a logical construct which is exposed in the API. The main resources are:</p>\n\
<ol>\n\
<li>Geometry</li>\n\
<li>Shaders</li>\n\
<li>Textures</li>\n\
<li>Output Buffers (where to render into)</li>\n\
<li>Lights. Note here that lights are just shaders.</li>\n\
<li>States (GPU state)</li>\n\
</ol>\n\
<p>As shown, for each logical construct, there are per draw API GPU specific resources which are managed by the ren­derer. Currently GPU resources can be managed for DirectX11 or OpenGL.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f4781.jpg\' title=\'\' /></div>\n\
<p>Figure 12</p>\n\
<p>At various points in the pipeline resources may be instantiated and used as required. This unrestricted access to resources is reflected accordingly in the API.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";