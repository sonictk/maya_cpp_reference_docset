var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxContextCommand</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MPxContextCommand</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"mpxcontextcommand\"></a></div>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContextCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_context_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContextCommand</a></span> is the class used to define the special command for creating contexts. Context commands are similar to regular commands in that they can be executed from the command line and put into MEL scripts. They can have edit and query options which modify the properties of the context. They create an instance of the context and give it to Maya. Context commands are not undoable.</p>\n\
<div class=\'section\'><a id=\"creating-a-context-command\"></a><h2 id=\"creating-a-context-command\">Creating a context command</h2></div>\n\
<p>The following is the implementation of the context command used to create the marquee context described previously.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">marqueeContextCmd::marqueeContextCmd() {}\n\
\n\
</pre></div><p>This method is used by Maya to create an instance of the context.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a>* marqueeContextCmd::makeObj()\n\
{\n\
    return new marqueeContext();\n\
}\n\
void* marqueeContextCmd::creator()\n\
{\n\
    return new marqueeContextCmd;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, &quot;Autodesk&quot;, &quot;1.0&quot;, &quot;Any&quot;);\n\
    status = plugin.registerContextCommand( \\\n\
    &quot;marqueeToolContext&quot;, marqueeContextCmd::creator );\n\
\n\
</pre></div><p>The context command must be registered, but in this case <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerContextCommand()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#abdb508384ccb7cc8a94c5edd43775120&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html#af866d7403152d0a96ab838a9dd16d460&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerContextCommand()</a></span> is used rather than <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerCommand()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a66f0e341f74cba9d100ab8a45e71cc0b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html#a64fa4221b58a1bd2937e0bb93e50b3c8&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerCommand()</a></span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return status;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    status = plugin.deregisterContextCommand( \\\n\
        &quot;marqueeToolContext&quot; );\n\
\n\
</pre></div><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::deregisterContextCommand()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a779875727a9bc55613448ef9066f84d3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html#ab881cb5213572eee75ffb4ad4c78f0bc&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::deregisterContextCommand()</a></span> is likewise used to deregister the context command.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return status;\n\
}\n\
\n\
</pre></div><p>And that’s all that’s necessary to create a simple context.</p>\n\
<div class=\'section\'><a id=\"adding-a-context-command-to-the-maya-shelf\"></a><h2 id=\"adding-a-context-command-to-the-maya-shelf\">Adding a context command to the Maya shelf</h2></div>\n\
<p>There are two ways to &quot;activate&quot; or make your context the current context in Maya. The first is through the use of the setToolTo command. This command takes the name of a context (tool) and makes it the current context.</p>\n\
<p>A second method is by making an icon to represent your context and putting it in the Maya tool shelf. The Maya tool shelf can store two kinds of buttons, command buttons and tool buttons. When the tool is activated, its icon is displayed next to the standard Maya tools in the toolbar.</p>\n\
<p>The following is a set of MEL commands you can use to create a context and tool button for the context.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">marqueeToolContext marqueeToolContext1;\n\
setParent Shelf1;\n\
toolButton -cl toolCluster\n\
 -t marqueeToolContext1\n\
 -i1 &quot;marqueeTool.xpm&quot; marqueeTool1;\n\
\n\
</pre></div><p>This MEL code instantiates an instance of the marqueeToolContext and adds it to the &quot;Common&quot; tools shelf.</p>\n\
<p>marqueeTool.xpm, the icon for the tool, must be in the XBMLANGPATH to be found and added to the UI. If it is not found, a blank spot will appear on the shelf, but the tool will still be usable.</p>\n\
<p>This code could either be sourced by hand from the MEL command window, or it could be invoked with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::sourceFile()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a17e975d3bcab69811fec71ad65c85db0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#abbf0d174b3eb92e4b9813235679d3d6e&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::sourceFile()</a></span> in the <span class=\'code\'>initializePlugin()</span> method of the plug-in.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";