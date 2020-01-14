var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Hello World</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Hello World</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"hello-world\"></a></div>\n\
<p>This basic Maya Hello World C++ source code creates a plug-in which prints out &quot;Hello World&quot; in the Maya output window:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">#include &lt;maya/MSimple.h&gt;\n\
#include &lt;maya/MIOStream.h&gt;\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"DeclareSimpleCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">DeclareSimpleCommand</a>( helloWorld, &quot;Autodesk&quot;, &quot;2020&quot;);\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helloWorld::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; )\n\
{\n\
    cout &lt;&lt; &quot;Hello World\\n&quot; &lt;&lt; endl;\n\
    return MS::kSuccess;\n\
}\n\
</pre></div><p>To compile this code into a plug-in, create the <span class=\'code\'>helloWorld</span> directory and save this code to a file name <span class=\'code\'>helloWorld.cpp</span> in that directory.</p>\n\
<p>Create a <a href=\'#!/url=./dev_help/Building-Your-Own-Plugin/The-CMakeList-File.html\' title=\'\'><span class=\'code\'>CMakeLists.txt</span></a> file for this project and save it to the <span class=\'code\'>HelloWorld</span> directory:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">cmake_minimum_required(VERSION 2.8)\n\
\n\
set(PROJECT_NAME helloWorld)\n\
project(${PROJECT_NAME})\n\
\n\
include($ENV{DEVKIT_LOCATION}/cmake/pluginEntry.cmake)\n\
  \n\
\n\
set(SOURCE_FILES\n\
    helloWorld.cpp\n\
)\n\
\n\
\n\
set(LIBRARIES\n\
    OpenMaya Foundation\n\
)\n\
  \n\
build_plugin()\n\
</pre></div><p>Use <a href=\'#!/url=./dev_help/Building-Your-Own-Plugin/Building-with-cmake.html\' title=\'\'>CMake and the appropriate generator</a> to build a project for your code:</p>\n\
<ul>\n\
<li><span class=\'code\'>cmake -H. -Bbuild -G &quot;Visual Studio 14 2015 Win64&quot;</span> when building on Windows</li>\n\
<li><span class=\'code\'>cmake -H. -Bbuild -G Xcode</span> when building using Xcode on MacOS</li>\n\
<li><span class=\'code\'>cmake -H. -Bbuild -G &quot;Unix Makefiles&quot;</span> when building using a makefile on Linux or MacOS</li>\n\
</ul>\n\
<p>Once you have built your project successfully, use CMake again to build your plug-in:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">cmake --build build\n\
</pre></div><p>You can now <a href=\'#!/url=./dev_help/Loading-Samples-Plug-ins-Into-Maya.html\' title=\'\'>load your plug-in into Maya</a> using the Plug-in Manager, which is accessed from <strong>Window &gt; Settings/Preferences &gt; Plug-in Manager</strong> from the Maya menu.</p>\n\
<p>Once loaded, run <span class=\'code\'>helloWorld</span> from the Maya command window:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/HelloWorldcmd.png\' title=\'alt text\' /></div>\n\
<p>The output will be written to the Maya output window:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/HelloWorldOutput.png\' title=\'alt text\' /></div>\n\
<p>You can also create a version which allows you to customize the greeting using arguments passed to the plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">#include &lt;maya/MSimple.h&gt;\n\
#include &lt;maya/MIOStream.h&gt;\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"DeclareSimpleCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">DeclareSimpleCommand</a>( helloWorld, &quot;Autodesk&quot;, &quot;2020&quot;);\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helloWorld::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args )\n\
{\n\
    cout &lt;&lt; args.asString( 0 ).asChar() &lt;&lt;  &quot; &quot; &lt;&lt; args.asString( 1 ).asChar() &lt;&lt; endl;\n\
    return MS::kSuccess;\n\
}\n\
</pre></div><p>Before recompiling the plug-in, <a href=\'#!/url=./dev_help/Unloading-Plug-ins.html\' title=\'\'>unload the plug-in from Maya</a> using the <span class=\'code\'>unloadPlugin</span> command.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/UnloadHelloWorld.png\' title=\'alt text\' /></div>\n\
<p>You do not need to remake the plug-in project. You only need to recompile the plug-in using <span class=\'code\'>cmake --build build</span>.</p>\n\
<p>Reload the plug-in, and run it with two arguments:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/HelloWorldHiThere.png\' title=\'alt text\' /></div>\n\
<p>Your greeting will be printed to the Maya output window:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/HelloWorldHiThereOutput.png\' title=\'alt text\' /></div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";