var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Creating a Hello World command plug-in using .NET</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Creating a Hello World command plug-in using .NET</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"creating-a-hello-world-command-plug-in-using-.net\"></a></div>\n\
<p>The following is an example of a minimalist custom .NET command:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">using System;\n\
\n\
using Autodesk.Maya.Runtime;\n\
using Autodesk.Maya.OpenMaya;\n\
\n\
[assembly: MPxCommandClass(typeof(MayaNetPlugin.helloWorldCmd), &quot;helloWorldCmd&quot;)]\n\
[assembly: ExtensionPlugin(typeof(MayaNetPlugin.helloWorldPlugin), &quot;Autodesk&quot;, &quot;1.0&quot;, &quot;Any&quot;)]\n\
\n\
namespace MayaNetPlugin\n\
{\n\
    public class helloWorldPlugin : IExtensionPlugin\n\
    {\n\
        bool IExtensionPlugin.InitializePlugin()\n\
        {\n\
            return true;\n\
        }\n\
\n\
        bool IExtensionPlugin.UninitializePlugin()\n\
        {\n\
            return true;\n\
        }\n\
        String IExtensionPlugin.GetMayaDotNetSdkBuildVersion()\n\
        {\n\
            String version = &quot;&quot;;\n\
            return version;\n\
        }\n\
\n\
    }\n\
\n\
    public class helloWorldCmd : <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a>,IMPxCommand\n\
    {\n\
        public override void doIt(<a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a> argl)\n\
        {\n\
            MGlobal.displayInfo(&quot;Hello World\\n&quot;);\n\
        }\n\
    }\n\
}\n\
</pre></div><p>This simple example demonstrates how to create a helloWorld Maya command in C# that outputs text to the Maya Output window.</p>\n\
<p>The two <em>using Autodesk.Maya…</em> directives add the namespaces of the .NET SDK. This way, you can use the types from these namespaces without qualification. Without using a directive, you must write the full name of the types in the file, such as <span class=\'code\'>Autodesk.Maya.OpenMaya.MPxCommand</span>.</p>\n\
<p>This plug-in consists of two logical parts: the <span class=\'code\'>IExtensionPlugin</span> interface implementation and the command itself.</p>\n\
<p>The <span class=\'code\'>ExtensionPlugin</span> assembly attribute points to the <span class=\'code\'>IExtensionPlugin</span> implementation.</p>\n\
<p>When implementing <span class=\'code\'>IExtensionPlugin.InitializePlugin()</span>, it returns true if the initialization can proceed. If the plug-in cannot load, then it returns false and Maya discontinues the loading process. The same applies to <span class=\'code\'>IExtensionPlugin.UninitializePlugin()</span>.</p>\n\
<p>When implementing <span class=\'code\'>IExtensionPlugin.GetMayaDotNetSdkBuildVersion()</span>, you can return the API version number you are using to build the plug-in; or return an empty string.</p>\n\
<p>The <span class=\'code\'>MPxCommandClass</span> assembly attribute describes your plug-in type to the .NET SDK. The <span class=\'code\'>MPxCommandClass</span> attribute requires as parameter the type of the class implementing the user defined command and the name of the command. To provide the type of the class, use the <span class=\'code\'>typeof</span> operator. Because the attribute is located outside of the <em>MayaNetPlugin</em> namespace you must specify the full path for your class to the <span class=\'code\'>typeof</span> operator including its namespace.</p>\n\
<p><em>namespace MayaNetPlugin</em>: All types must be declared within a namespace. A C# namespace can contain classes, structs, interfaces, and enums. The namespace is useful for organizing code and preventing name collisions.</p>\n\
<p><em>public class helloWorldCmd : MPxCommand, IMPxCommand</em>: The helloWorldCmd class derives from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> class and implements the <span class=\'code\'>IMPxCommand</span> interface. You can have multiple interfaces, but you can only derive from one class. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> is the base class for user commands and every command is derived from it.</p>\n\
<p><em>public override void doIt(MArgList argl)</em>: Use doIt() to execute the actions of your command.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";