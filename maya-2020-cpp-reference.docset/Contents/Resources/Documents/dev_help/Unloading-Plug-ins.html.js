var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Unloading Plug-ins From Maya</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Unloading Plug-ins From Maya</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"unloading-plug-ins-from-maya\"></a></div>\n\
<p>Plug-ins that are loaded into Maya should be unloaded before they can be recompiled. If the plug-in uses dynamic libraries, it must be unloaded before it is recompiled otherwise Maya will crash. It is good practice to always unload a plug-in before rebuilding it.</p>\n\
<p>Make sure that the plug-in is not in use before you unload it. Make sure that there are no references to the plug-in anywhere in the scene, including in the undo queue. Use the <span class=\'code\'>flushUndo</span> command to flush the undo queue.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/flushUndoCmd.png\' title=\'alt text\' /></div>\n\
<blockquote>\n\
<p><strong>Note:</strong> Flushing the undo queue removes all information from the undo queue. It effectively deletes the entire undo queue.</p>\n\
</blockquote>\n\
<p>Once there are no longer any references to the plug-in in Maya, you can unload it using the <span class=\'code\'>unloadPlugin</span> command.</p>\n\
<p>If a reference to it still exists, you will get an error when you attempt to unload the plug-in:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/UnloadPluginInUseError.png\' title=\'alt text\' /></div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";