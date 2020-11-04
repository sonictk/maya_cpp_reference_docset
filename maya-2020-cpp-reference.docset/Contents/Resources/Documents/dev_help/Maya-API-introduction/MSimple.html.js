var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MSimple.h and DeclareSimpleCommand</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MSimple.h and DeclareSimpleCommand</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"msimple.h-and-declaresimplecommand\"></a></div>\n\
<p>All plug-ins need to implement the <span class=\'code\'>initializePlugin()</span>, <span class=\'code\'>uninitializePlugin()</span>, and <span class=\'code\'>creator()</span> functions.</p>\n\
<p>The <span class=\'code\'>DeclareSimpleCommand()</span> macro replaces <span class=\'code\'>initializePlugin()</span>, <span class=\'code\'>uninitializePlugin()</span>, and <span class=\'code\'>creator()</span> in simple plug-ins so you do not have to implement these functions yourself.</p>\n\
<p><span class=\'code\'>DeclareSimpleCommand()</span> takes three arguments: the plug-in class, the owner of the plug-in, and the version.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"DeclareSimpleCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">DeclareSimpleCommand</a>( helloWorld, &quot;Autodesk&quot;, &quot;2019&quot;);\n\
</pre></div><p><span class=\'code\'>DeclareSimpleCommand()</span> can only be used to create an undoable command. Because undoable commands cannot be undone, they should only query the scene. They should not modify the scene in any way.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> If you create an undoable command that does modify the scene, it will break Maya&#39;s undo capability.</p>\n\
</blockquote>\n\
<p>You need to include <span class=\'code\'>MSimple.h</span> to use <span class=\'code\'>DeclareSimpleCommand()</span>.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Plug-ins that implements several features, such as dependency graph nodes and commands, cannot use <span class=\'code\'>DeclareSimpleCommand()</span>.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";