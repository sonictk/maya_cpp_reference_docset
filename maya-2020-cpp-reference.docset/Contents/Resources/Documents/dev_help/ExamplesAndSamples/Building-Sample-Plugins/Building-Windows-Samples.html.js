var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Building Samples on Windows</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Building Samples on Windows</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"building-samples-on-windows\"></a></div>\n\
<blockquote>\n\
<p><strong>Important:</strong> You need to set up your environment as described in <a href=\'#!/url=./dev_help/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Setting up your build environment</a> before building the samples.</p>\n\
</blockquote>\n\
<p>On Windows, the plug-in samples are located in <span class=\'code\'>%DEVKIT_LOCATION%\\devkit\\plug-ins</span>, and the standalone application samples are located in <span class=\'code\'>%DEVKIT_LOCATION%\\devkit\\applications</span>. Each sample is in its own dedicated directory.</p>\n\
<p>To build a sample, open a command prompt and change directory to its directory.</p>\n\
<p>For example, to build the <span class=\'code\'>circleNode</span> plug-in, change directory to <span class=\'code\'>circleNode</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cd %DEVKIT_LOCATION%\\devkit\\plug-ins\\circleNode\n\
</pre></div><p>To build a sample, run <span class=\'code\'>cmake</span> once to generate a Visual Studio Project for the sample:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cmake -H. -Bbuild -G &quot;Visual Studio 14 2015 Win64&quot;\n\
</pre></div><p>The <span class=\'code\'>cmake</span> command should exit with no errors and create a <span class=\'code\'>build</span> directory.</p>\n\
<p>Run <span class=\'code\'>cmake</span> again to build the sample:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cmake --build build\n\
</pre></div><p>The executable or plug-in will be located under the <span class=\'code\'>build/Debug</span> directory.</p>\n\
<p>You can also build the project from within Visual Studio.</p>\n\
<p>Plug-ins have the suffix <span class=\'code\'>mll</span>. For example, the <span class=\'code\'>circleNode</span> plug-in will be called <span class=\'code\'>circleNode\\build\\Debug\\circleNode.mll</span>.</p>\n\
<p>Unlike applications that can be run from the command line, plug-ins must be <a href=\'#!/url=./dev_help/Loading-Samples-Plug-ins-Into-Maya.html\' title=\'\'>loaded into Maya</a>.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> Do not rebuild a plug-in that is already loaded into Maya. <a href=\'#!/url=./dev_help/Unloading-Plug-ins.html\' title=\'\'>Unload the plug-in</a> before you rebuild it.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";