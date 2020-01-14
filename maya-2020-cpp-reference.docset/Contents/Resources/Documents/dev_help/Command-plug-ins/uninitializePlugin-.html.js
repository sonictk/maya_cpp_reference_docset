var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>uninitializePlugin()</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>uninitializePlugin()</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"uninitializeplugin\"></a></div>\n\
<p><span class=\'code\'>uninitializePlugin()</span>, like <span class=\'code\'>initializePlugin()</span>, can be a C or C++ function. If you neglect to declare this function, your plug-in will not be loaded.</p>\n\
<p>The <span class=\'code\'>uninitializePlugin()</span> function contains the code necessary to de-register from Maya whatever was registered through <span class=\'code\'>initializePlugin()</span>. It is called once only—when the plug-in is unloaded.</p>\n\
<p>This function should be used for a few quick clean-up operations, such as closing files. It is not necessary for you to delete those commands, or nodes created by your plug-in when it exits since Maya takes care of them. You should therefore not be keeping a list of the Maya objects allocated by your plug-in nor freeing them when <span class=\'code\'>uninitializePlugin()</span> is called.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";