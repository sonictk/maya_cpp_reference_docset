var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Adding Third-Party Libraries</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Adding Third-Party Libraries</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"adding-third-party-libraries\"></a></div>\n\
<p>You can use the <span class=\'code\'>find_package()</span> call to add 3rd-party packages to to your CMake project.</p>\n\
<p><span class=\'code\'>fnd_package()</span> uses cmake files of the type found under <span class=\'code\'>$DEVKIT_LOCATION/cmake/modules/</span> on Linux and MacOS, and under <span class=\'code\'>%DEVKIT_LOCATION%\\cmake\\modules</span> on Windows to add 3rd party libraries to your project. They can also be used as guides to create your own cmake package files. If you do create your own files, place them in the <span class=\'code\'>modules</span> directory so they can be found by CMake.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Before using the cmake files under <span class=\'code\'>modules</span>, make sure you have installed the 3rd party libraries they use, and that you have set any environment variables they require. For example, if you need to include the Arnold for Maya libraries, you will need to <a href=\'#!/url=./dev_help/Setting-up-your-build/MtoALibs.html\' title=\'\'>set the <span class=\'code\'>MTOA_LOCATION</span> environment variable</a></p>\n\
</blockquote>\n\
<p>The cmake files in the <span class=\'code\'>modules</span> directory are of the form <span class=\'code\'>Find&lt;package_name&gt;.cmake</span>. To add the libraries pointed to by these files, use <span class=\'code\'>find_package(&lt;package_name&gt;)</span>.</p>\n\
<p>For example, to add the Arnold for Maya package using the <span class=\'code\'>FindMtoA.cmake</span> file, add the following to your <span class=\'code\'>CMakeLists.txt</span> file:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">find_package(MtoA)\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake_minimum_required(VERSION 2.8)\n\
\n\
include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
\n\
set(PROJECT_NAME exampleNode)\n\
\n\
set(RESOURCES_FILES myResource.xpm)\n\
\n\
set(MEL_FILES \n\
    exampleNode.mel\n\
    )\n\
\n\
set(SOURCE_FILES\n\
    exampleNode.cpp\n\
    ${MEL_FILES}\n\
    )\n\
\n\
set(LIBRARIES\n\
    OpenMaya Foundation\n\
    )\n\
\n\
find_package(MtoA)\n\
build_plugin()\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";