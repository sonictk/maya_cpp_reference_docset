var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Avoid unnecessarily dirtying scene when using callbacks</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Avoid unnecessarily dirtying scene when using callbacks</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"avoid-unnecessarily-dirtying-scene-when-using-callbacks\"></a></div>\n\
<p>At times, it may be useful to use callbacks such as after File &gt; New, Save or Load to automate repetitive tasks or to setup your work environment. Examples of this application include setting up a <em>node watcher</em> or a callback after File &gt; New to load settings from a file, or to create a template environment. However, these operations may cause the scene to become dirty unnecessarily, which may confuse users into thinking their scene needs to be saved when it is not the case.</p>\n\
<p>To workaround this issue, you can <em>reset</em> the dirtiness of the scene by using the <span class=\'code\'>file -modified “true”|”false”</span> command and flag.</p>\n\
<p>As an example, refer to the <span class=\'code\'>$MAYA_LOCATION/scripts/others/supportRenderers.mel</span> file in the Maya installation directory.</p>\n\
<p>Upon loading a new scene, Maya checks if the current renderer is available, and if it isn&#39;t, Maya sets the current renderer to the preferred renderer instead. This setAttr action results in the scene becoming dirty. If the file was simply opened and no other modifications occurred, then it is unnecessary to dirty the scene.</p>\n\
<p>The following code snippet does the following:</p>\n\
<ul>\n\
<li>queries if the file was modified before setting the current renderer to the preferred renderer</li>\n\
<li>resets the dirtiness of the scene by setting file -modified to false if the file was not modified for any reason other than having its current renderer set</li>\n\
</ul>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">{\n\
    int $wasModified = `file -query -modified`;\n\
    setAttr\n\
        &quot;defaultRenderGlobals.currentRenderer&quot;\n\
        -type &quot;string&quot;\n\
        $preferredRenderer;\n\
    // If the scene wasn&#39;t dirtied prior to setting the current renderer,\n\
    // we want to set the scene as not modified to avoid dirtying the scene.\n\
    if (!$wasModified)\n\
    {\n\
        file -modified false;\n\
    }\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";