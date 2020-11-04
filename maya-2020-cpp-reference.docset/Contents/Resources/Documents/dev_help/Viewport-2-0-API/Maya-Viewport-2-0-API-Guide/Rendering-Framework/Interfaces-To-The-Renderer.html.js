var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Interfaces To The Renderer</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Interfaces To The Renderer</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"interfaces-to-the-renderer\"></a></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col width=\"67.15481171548117%\" />\n\
<col width=\"32.84518828451883%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
  <img src=\"dev_help/images/aa0f47b4.jpg\" />\n\
</td>\n\
<td class=\"table-body\">\n\
  <img src=\"dev_help/images/aa0f47eb.jpg\" />\n\
</td>\n\
</tr>\n\
<tr class=\"not-ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-4456CF53-0E31-4B1B-BDE7-FB07FD17B96A\"></a>\n\
<p class=\"table-body\">\n\
Figure 13: New interface connections\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-D54BF0F0-2BD8-42F0-93EF-B271854A0637\"></a>\n\
<p class=\"table-body\">\n\
Figure 14: Old interface connections\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Within Maya, there are various exposed interfaces which accept a frame of render data. These include:</p>\n\
<ul>\n\
<li>3d viewport</li>\n\
<li>Playblast (3d viewport based)</li>\n\
<li>RenderView</li>\n\
<li>Command line rendering</li>\n\
</ul>\n\
<p>In the old system, only viewport based rendering was possible. In the current system, rendering to the RenderView window and command line (batch) rendering are also supported. For the latter, this also includes command line rendering via the playblast interface.</p>\n\
<p>The previous notion that the <strong>3d viewport is the renderer</strong> no longer holds true. Therefore, the assumption of a dependence on access to viewports has been removed. Instead the appropriate information is provided in a non-viewport dependent context as required. There are various options available for each interface. For example, render globals options provide context for command line rendering. As much as possible, an aggregate of all options, whether interactive or not is taken and presented as context data or options. As the renderer is no longer a 3d viewport, these implicit assumptions are also no longer true:</p>\n\
<ol>\n\
<li>A 3d viewport always exists: It is not possible to totally prevent a plug-in from attempting to access a 3d viewport, but plug-ins should be able to handle the situation where one does not exist.</li>\n\
<li>Idle refresh always forces the appropriate updates: Idle refresh should not be considered to be the only driver for renders anymore. As such, plug-ins should not rely on that mechanism to force the required scene updates to occur.</li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";