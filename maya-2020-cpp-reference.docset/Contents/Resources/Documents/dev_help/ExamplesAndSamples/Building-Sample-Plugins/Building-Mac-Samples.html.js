var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Building Samples on MacOS</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Building Samples on MacOS</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"building-samples-on-macos\"></a></div>\n\
<blockquote>\n\
<p><strong>Important:</strong> You need to set up your environment as described in <a href=\'#!/url=./dev_help/Setting-up-your-build/Mac-OS-X-environment.html\' title=\'\'>Setting up your build environment</a> before building the samples.</p>\n\
</blockquote>\n\
<p>Plug-in samples are located in <span class=\'code\'>$DEVKIT_LOCATION/devkit/plug-ins/</span> and standalone application samples are located in <span class=\'code\'>$DEVKIT_LOCATION/devkit/applications/</span>. Each individual sample is in its own dedicated directory. Change to the sample&#39;s directory to build it.</p>\n\
<p>For example, the <span class=\'code\'>circleNode</span> plug-in sample, is located in the <span class=\'code\'>circleNode</span> directory. To build it, change directory to <span class=\'code\'>circleNode</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cd $DEVKIT_LOCATION/devkit/plug-ins/circleNode\n\
</pre></div><p>Before building a sample, you need to run <span class=\'code\'>cmake</span> once to generate either an Xcode project or a UNIX makefile. Xcode version 7.3.1 or higher must be installed to generate an Xcode project.</p>\n\
<p>To generate a makefile, open a terminal window and run:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cmake -H. -Bbuild -G &quot;Unix Makefiles&quot;\n\
</pre></div><p>To generate an Xcode project, open a terminal window and run:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    &gt; cmake -H. -Bbuild -G Xcode\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> To build the cgFx plug-in, unarchive <span class=\'code\'>Cg.framework.tar</span> in <span class=\'code\'>$DEVKIT_LOCATION/lib</span> before building the project.</p>\n\
\n\
<p>The <span class=\'code\'>cmake</span> command should exit with no errors and create a <span class=\'code\'>build</span> directory.</p>\n\
<p>Run <span class=\'code\'>cmake</span> again to build the sample:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&gt; cmake --build build\n\
</pre></div><p>The executable or plug-in will be located under the <span class=\'code\'>build</span> directory if it was built using a UNIX makefile. It will be under the <span class=\'code\'>build/Debug</span> directory if it was built using an Xcode project.</p>\n\
<p>If you generated an Xcode project, you can also build the project from within Xcode.</p>\n\
<p>Plug-ins have the suffix <span class=\'code\'>bundle</span>. For example, the <span class=\'code\'>circleNode</span> plug-in will be called <span class=\'code\'>circleNode/build/circleNode.bundle</span>.</p>\n\
<p>Unlike applications that can be run from the command line, plug-ins must be <a href=\'#!/url=./dev_help/Loading-Samples-Plug-ins-Into-Maya.html\' title=\'\'>loaded into Maya</a>.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> Do not rebuild a plug-in that is already loaded into Maya. <a href=\'#!/url=./dev_help/Unloading-Plug-ins.html\' title=\'\'>Unload the plug-in</a> before you rebuild it.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";