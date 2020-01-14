var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Using .NET assembly attributes</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Using .NET assembly attributes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"using-.net-assembly-attributes\"></a></div>\n\
<p>In the .NET SDK of Maya, .NET assembly attributes are used to auto-register plug-ins, commands, nodes and so forth. This is different from the C++ SDK of Maya, where the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> class provides registration methods for all MPx-prefixed classes of Maya (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span>, and so forth). In .NET, classes are instead decorated with attributes which are parsed by the plug-in loader, which registers them with Maya on your behalf.</p>\n\
<p>Refer to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> class reference documentation for more information.</p>\n\
<div class=\'section\'><a id=\"extension-plugin\"></a><h2 id=\"extension-plugin\">Extension Plugin</h2></div>\n\
<p>Specify the <span class=\'code\'>ExtensionPlugin</span> assembly attribute in your plug-in.</p>\n\
<p>In general, add this assembly attribute at the top of the class that defines your plug-in:</p>\n\
<p><span class=\'code\'>[assembly: ExtensionPlugin(typeof(PluginClass), &quot;Name1&quot;, &quot;Name2&quot;,…)]</span></p>\n\
<p>where:</p>\n\
<ul>\n\
<li><span class=\'code\'>ExtensionPlugin</span>: This attribute ensures that the given PluginClass is loaded.</li>\n\
<li><span class=\'code\'>PluginClass</span>: The full name of your C# class that declares your plug-in (that implements the IExtensionPlugin interface).</li>\n\
<li><span class=\'code\'>Name1, Name2, …</span>: Ignored… reserved for internal use</li>\n\
</ul>\n\
<p>This attribute is not mandatory; but, if specified, speeds up the loading of your plug-in. Otherwise, Maya searches for the first C# class that implements the <span class=\'code\'>IExtensionPlugin</span> interface. This interface contains the following methods:</p>\n\
<p><span class=\'code\'>bool InitializePlugin () ; // called when the plug-in is loaded</span></p>\n\
<p><span class=\'code\'>bool UninitializePlugin () ; // called when the plug-in is unloaded</span></p>\n\
<p><span class=\'code\'>System::String^ GetMayaDotNetSdkBuildVersion(); //Returns a string representation of the integer version of Maya (for example, “20135002”)</span></p>\n\
<div class=\'section\'><a id=\"commands\"></a><h2 id=\"commands\">Commands</h2></div>\n\
<div class=\'section\'><a id=\"command-definition\"></a><h3 id=\"command-definition\">Command definition</h3></div>\n\
<p>[assembly: MPxCommandClass(typeof(MPxCommandDerivedClass), &quot;CommandName&quot;)]</p>\n\
<p>where:</p>\n\
<ul>\n\
<li><span class=\'code\'>MPxCommandClass</span>: This attribute ensures that the command class is registered in Maya.</li>\n\
<li><p><span class=\'code\'>MPxCommandDerivedClass</span>: The name of your C# class that derives from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span>.</p>\n\
<p>You need to specify the full path, including the class namespace.</p></li>\n\
<li><p><span class=\'code\'>CommandName</span>: the name of the command as it appears in Maya’s Script Editor.</p></li>\n\
</ul>\n\
<p>Example as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[assembly: MPxCommandClass(typeof(MayaNetTest.WhatIsCmd), &quot;netWhatIs&quot;)]\n\
namespace MayaNetTest \n\
{\n\
    public class WhatIsCmd : <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a>, IMPxCommand \n\
    {\n\
        override public void doIt(<a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a> args)\n\
        {\n\
            …\n\
        }\n\
    }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"command-syntax\"></a><h3 id=\"command-syntax\">Command syntax</h3></div>\n\
<p>You may also need some class attributes (located above the definition of your command class) to describe the syntax of your command.</p>\n\
<p>The following are the various attributes you can specify.</p>\n\
<div class=\'section\'><a id=\"command-arguments\"></a><h4 id=\"command-arguments\">Command arguments</h4></div>\n\
<p>If your command takes arguments, you need to add the following attribute for each argument:</p>\n\
<p><span class=\'code\'>[MPxCommandSyntaxArg(typeof(ArgType))]</span></p>\n\
<ul>\n\
<li><p><span class=\'code\'>MPxCommandSyntaxArg</span>: This attribute ensures that this argument is added to the syntax.</p></li>\n\
<li><p><span class=\'code\'>ArgType</span>: The type of the argument (for example: System.String).</p></li>\n\
</ul>\n\
<p>The following is an example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[MPxCommandSyntaxArg(typeof(System.String))] // a string argument\n\
[MPxCommandSyntaxArg(typeof(System.Int32))] // an integer argument\n\
\n\
</pre></div><p>In the case where the argument is an object, you should use this class attribute with more controls:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[MPxCommandSyntaxSelection( UseSelectionAsDefault = UseSelection,  MinObjectCount = min, MaxObjectCount = max, ObjectsType = typeof(ObjType))]\n\
</pre></div><p>where:</p>\n\
<ul>\n\
<li><span class=\'code\'>MPxCommandSyntaxSelection</span>: This attribute ensures that this argument is added to the syntax.</li>\n\
<li><span class=\'code\'>UseSelection</span>: Whether the command uses the selection if no object is specified.</li>\n\
<li><span class=\'code\'>min</span>: The minimum number of objects the user can specify.</li>\n\
<li><span class=\'code\'>max</span>: The maximum number of objects the user can specify.</li>\n\
</ul>\n\
<p><span class=\'code\'>ObjType</span> can be:</p>\n\
<ul>\n\
<li><span class=\'code\'>typeof(<a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a>)</span>: Always use the selection.</li>\n\
<li><span class=\'code\'>typeof(System.String</span>): The user specifies the object using its name.</li>\n\
</ul>\n\
<p>Here is an example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[MPxCommandSyntaxSelection(UseSelectionAsDefault = true, MinObjectCount = 1, \n\
MaxObjectCount = 2, ObjectsType = typeof(System.String))]\n\
</pre></div><p>This command accepts 1 or 2 objects and uses the selection if no object is specified.</p>\n\
<div class=\'section\'><a id=\"command-flags\"></a><h4 id=\"command-flags\">Command flags</h4></div>\n\
<p>If your command takes one or more flags, then you must add the following class attribute for each flag.</p>\n\
<p><span class=\'code\'>[MPxCommandSyntaxFlag( “flag’s short name“, “flag’s long name”, Arg1 = typeof(ArgType), Arg2 = typeof(ArgType), ... ]</span></p>\n\
<p>where:</p>\n\
<ul>\n\
<li><span class=\'code\'>MPxCommandSyntaxFlag</span>: This attribute ensures that the flag is added to the syntax of the command.</li>\n\
<li><span class=\'code\'>flag’s short name</span>: The short name for the flag (for example: -i).</li>\n\
<li><span class=\'code\'>flag’s long name</span>: The long name for the flag (for example: -index).</li>\n\
<li><span class=\'code\'>ArgType</span>: The type of the flag argument, if any (for example: System.Double).</li>\n\
</ul>\n\
<p>Here is an example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[MPxCommandSyntaxFlag(&quot;-na&quot;, &quot;-name&quot;, Arg1=typeof(System.String))]\n\
[MPxCommandSyntaxFlag(&quot;-ip&quot;, &quot;-inPosition&quot;, \n\
Arg1 = typeof(System.Double), \n\
Arg2 = typeof(System.Double), \n\
Arg3 = typeof(System.Double))]\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> The flags -c, -q and -e are reserved for the command mode (see <a href=\'#!/url=./dev_help/Maya-NET-API/Using-NET-assembly-attributes.html#command-mode\' title=\'\'>Command Mode</a>).</p>\n\
\n\
<div class=\'section\'><a id=\"command-mode\"></a><h4 id=\"command-mode\">Command Mode</h4></div>\n\
<p>Maya commands can be used in three different modes: create, query and edit.</p>\n\
<ul>\n\
<li>Create: the command is used to create elements (default)</li>\n\
<li>Query: the command is used with the –q flag to query elements already created.</li>\n\
<li>Edit: the command is used with the –e flag to modify elements that have already been created.</li>\n\
</ul>\n\
<p>The creation mode is always supported and is the default mode. In addition to the creation mode, commands can support the query or/and the edit mode.</p>\n\
<p>You can specify the different modes using the following class attribute:</p>\n\
<p><span class=\'code\'>[MPxCommandSyntaxMode(CommandMode)]</span></p>\n\
<p>Where:</p>\n\
<ul>\n\
<li><span class=\'code\'>MPxCommandSyntaxMode</span>: This attribute ensures that the mode is set properly in the command syntax.</li>\n\
<li><span class=\'code\'>CommandMode</span>:\n\
<ul>\n\
<li><span class=\'code\'>MPxCommandSyntaxModeAttribute.CommandMode.kNone</span>: The command only supports the creation mode.</li>\n\
<li><span class=\'code\'>MPxCommandSyntaxModeAttribute.CommandMode.kQuery</span>: The command only supports the creation and query modes</li>\n\
<li><span class=\'code\'>MPxCommandSyntaxModeAttribute.CommandMode.kEdit</span>: The command only supports the creation and edit modes.</li>\n\
<li><span class=\'code\'>MPxCommandSyntaxModeAttribute.CommandMode.kBoth</span>: The command supports all three modes.</li>\n\
</ul></li>\n\
</ul>\n\
<p>Example:</p>\n\
<p><span class=\'code\'>[MPxCommandSyntaxMode(MPxCommandSyntaxModeAttribute.CommandMode.kQuery)]</span></p>\n\
<p>This command supports the creation (default) and the query mode (-q).</p>\n\
<div class=\'section\'><a id=\"retrieving-the-arguments-and-flags-from-your-command\"></a><h2 id=\"retrieving-the-arguments-and-flags-from-your-command\">Retrieving the arguments and flags from your command</h2></div>\n\
<p>Use the <span class=\'code\'>syntax()</span> method in a command to retrieve the arguments and flags using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a></span> class.</p>\n\
<p>Consider a command with the following syntax attributes:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[MPxCommandSyntaxFlag(&quot;-i&quot;, &quot;-index&quot;)]\n\
[MPxCommandSyntaxSelection(MinObjectCount = 1, MaxObjectCount = 1, ObjectsType = typeof(<a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a>))]\n\
[MPxCommandSyntaxModeAttribute(MPxCommandSyntaxModeAttribute.CommandMode.kNone)]\n\
</pre></div><p>You could retrieve the arguments as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool isIndex;\n\
MxPlug fPlug;\n\
               \n\
const string kIndexFlag = &quot;-i&quot; ;\n\
const string kIndexFlagLong = &quot;-index&quot; ;\n\
\n\
// the following transfers all the class attributes information \n\
var argData = new <a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a>( syntax(), args);\n\
\n\
if ( argData.isFlagSet (kIndexFlag) )\n\
    isIndex =true ;\n\
\n\
// Get the plug specified on the command line.\n\
var slist = argData.getObjects() as <a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a>;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";