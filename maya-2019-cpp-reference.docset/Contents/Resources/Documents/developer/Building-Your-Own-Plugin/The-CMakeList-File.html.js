var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The CMakeLists.txt File</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The CMakeLists.txt File</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-cmakelists.txt-file\"></a></div>\n\
<p>The CMake tool is used to generate projects for your plug-ins and applications.</p>\n\
<p>The <span class=\'code\'>CMakeLists.txt</span> file in the plug-in or application directory contains information about the libraries, source files, and build functions needed to generated a project. It must be located at the top level of your plug-in or application directory, along with your source code and any <span class=\'code\'>mel</span> scripts that will be packaged with your plug-in.</p>\n\
<p>This page will walk you through the different parts of a <span class=\'code\'>CMakeLists.txt</span> file.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> You can use the <span class=\'code\'>CMakeLists.txt</span> files in the devkit samples as starting points for creating your own.</p>\n\
</blockquote>\n\
<p>The <span class=\'code\'>CMakeLists.txt</span> file has the following structure:</p>\n\
<ol>\n\
<li><p>The minimum version of CMake required.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">cmake_minimum_required(VERSION 2.8)</pre></div></li>\n\
<li><p>The project name.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">set(PROJECT_NAME &lt;projectName&gt;)\n\
</pre></div><p>For example, the project name section of the <span class=\'code\'>circleNode</span> <span class=\'code\'>CMakeLists.txt</span> file looks like this:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">set(PROJECT_NAME circleNode)</pre></div></li>\n\
<li><p>The path to the <span class=\'code\'>pluginEntry.cmake</span> file. This line is identical in all <span class=\'code\'>CMakeLists.txt</span> files.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)</pre></div></li>\n\
<li><p>A list of required resource files.</p>\n\
<p>If your project uses more than one resource file, separate each file with a space.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">set(RESOURCES_FILES myResource.xpm)</pre></div></li>\n\
<li><p>If your project also requires <span class=\'code\'>mel</span> files, list these in the <span class=\'code\'>MEL_FILES</span> section.</p>\n\
<p>If your project uses more than one <span class=\'code\'>mel</span> file, separate each file with a space:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">set(MEL_FILES \n\
    &lt;melFileName1&gt; &lt;melFileName2&gt; &lt;melFileName3&gt;)\n\
</pre></div><p>For example, the <span class=\'code\'>circleNode</span> sample includes a <span class=\'code\'>mel</span> file, and has this line in its <span class=\'code\'>CMakeLists.txt</span> file:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">set(MEL_FILES \n\
    circleNode.mel)</pre></div></li>\n\
<li><p>A list of source files, including the <span class=\'code\'>mel</span> and resource files, if used.</p>\n\
<p>If your project uses more than one source file,separate each file with a space.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">set(SOURCE_FILES\n\
    &lt;sourceFileName1&gt; &lt;sourceFileName2&gt; &lt;sourceFileName3&gt;\n\
    ${MEL_FILES}\n\
    ${RESOURCE_FILES})\n\
</pre></div><p>For example, the <span class=\'code\'>circleNode</span> <span class=\'code\'>SOURCE_FILES</span> variable is defined as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">set(SOURCE_FILES\n\
    circleNode.cpp\n\
    ${MEL_FILES}\n\
    )</pre></div></li>\n\
<li><p>A list of required devkit libraries.</p></li>\n\
</ol>\n\
<p>If the project needs more than one library, separate each library with a space.</p>\n\
<p>Consult the C++ API reference to determine which libraries you need.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">For example, `circleNode` requires only the OpenMaya and Foundation libraries:\n\
\n\
    set(LIBRARIES\n\
    OpenMaya Foundation\n\
    )\n\
<ol>\n\
<li></li></ol></pre></div><p>A list of required 3rd party packages included using <span class=\'code\'>find_package()</span> .</p>\n\
<p><span class=\'code\'>find_package()</span> uses <span class=\'code\'>Find&lt;PackageName&gt;.cmake</span> files to include packages in the build. These files are located under <span class=\'code\'>$DEVKIT_LOCATION/cmake/modules/</span> on Linux and MacOS, and under <span class=\'code\'>%DEVKIT_LOCATION%\\cmake\\modules</span> on Windows. To add a package, call <span class=\'code\'>find_package(PackageName)</span>. For example, to add the Alembic package, make sure that <span class=\'code\'>FindAlembic.cmake</span> exists under the <span class=\'code\'>modules</span> directory, then write the following in your <span class=\'code\'>CMakeLists.txt</span> file:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">find_packaged(Alembic)\n\
</pre></div><p>For convenience, the devkit includes macros for commonly-used packages. The macros are of the form <span class=\'code\'>find_&lt;packageName&gt;</span> and are called by putting each macro for each package on its own line. For example, to add the <span class=\'code\'>zlib</span> and <span class=\'code\'>alembic</span> packages, you would add the following two lines to your <span class=\'code\'>CMakeLists.txt</span> file:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">find_zlib()\n\
find_alembic()\n\
</pre></div><p>Macros are available for the following packages:</p>\n\
<ul>\n\
<li>libxml2 (<span class=\'code\'>find_libxml2</span>)</li>\n\
<li>openGL (<span class=\'code\'>find_opengl</span>)</li>\n\
<li>zlib (<span class=\'code\'>find_zlib</span>)</li>\n\
<li>tbb (<span class=\'code\'>find_tbb</span>)</li>\n\
<li>alembic (<span class=\'code\'>find_alembic</span>)</li>\n\
<li>Arnold (<span class=\'code\'>find_arnold</span>)</li>\n\
<li>DirectX (<span class=\'code\'>find_directX</span>)</li>\n\
<li>cg and CgGL (<span class=\'code\'>find_cg</span>)</li>\n\
<li>boost (<span class=\'code\'>find_boost</span>)</li>\n\
<li>D3DX11Effects (<span class=\'code\'>find_D3DX11Effects</span>)</li>\n\
</ul>\n\
<p>If your project requires a package that is not in this list, you will need to create a cmake find script for it, then call it with the <span class=\'code\'>find_package()</span> command. Use the cmake find scripts in the <span class=\'code\'>modules</span> directory as a guide.</p>\n\
<li><p>Finally, the build function.</p>\n\
<p>If you are creating a plug-in, add <span class=\'code\'>build_plugin()</span>. If you are creating a standalone application, add <span class=\'code\'>build_application()</span>.</p></li>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";