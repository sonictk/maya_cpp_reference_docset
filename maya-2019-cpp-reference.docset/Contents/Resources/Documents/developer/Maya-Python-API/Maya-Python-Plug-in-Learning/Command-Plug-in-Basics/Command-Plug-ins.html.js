var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command Plug-ins</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Command Plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"command-plug-ins\"></a></div>\n\
<p>In the following topic, we outline the basic code structure of a command plug-in.</p>\n\
<div class=\'section\'><a id=\"sample-command-plug-in\"></a><h2 id=\"sample-command-plug-in\">Sample Command Plug-in</h2></div>\n\
<p>The following Python code is a sample command plug-in. We examine the relevant sections of this sample command plug-in below.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleCommand.py\n\
\n\
import sys\n\
import maya.api.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCommandClass( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxCommand</a> ):\n\
    kPluginCmdName = &#39;myCommandName&#39;\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxCommand.__init__\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html#a0e33c57b86f794759092176b16cc0b44&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxCommand.__init__</a>(self)\n\
    \n\
    @staticmethod \n\
    def cmdCreator():\n\
        &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
        return MyCommandClass() \n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;        \n\
        # Remove the following &#39;pass&#39; keyword and replace it with \n\
        # the code you want to run.\n\
        pass\n\
    \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>( mobject )\n\
    try:\n\
        mplugin.registerCommand( MyCommandClass.kPluginCmdName, \n\
            MyCommandClass.cmdCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + MyCommandClass.kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( MyCommandClass.kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + MyCommandClass.kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin(&#39;sampleCommand.py&#39;)\n\
cmds.myCommandName()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleCommand.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
# ... additional imports here ...\n\
\n\
kPluginCmdName = &#39;myCommandName&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCommandClass( OpenMayaMPx.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
        \n\
        # Remove the following &#39;pass&#39; keyword and replace it with \n\
        # the code you want to run.\n\
        pass\n\
    \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( MyCommandClass() )\n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin(&#39;sampleCommand.py&#39;)\n\
cmds.myCommandName()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><div class=\'section\'><a id=\"maya-plug-in-entry-and-exit-points\"></a><h2 id=\"maya-plug-in-entry-and-exit-points\">Maya Plug-in Entry and Exit Points</h2></div>\n\
<p>Maya plug-ins require two specific functions: <span class=\'code\'>initializePlugin()</span>, and <span class=\'code\'>uninitializePlugin()</span>, which are respectively called when Maya attempts to load and unload the plug-in. If these two functions do not exist in the file, the plug-in will fail to load.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    ...\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    ...\n\
</pre></div><p>The code within these functions depends on the plug-in type; in the current case, our plug-in class is derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxCommand</a></span>, so we must register it by calling <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin.registerCommand()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html#a64fa4221b58a1bd2937e0bb93e50b3c8&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnPlugin.registerCommand()</a></span>. This function takes the following two parameters:</p>\n\
<ol>\n\
<li><p><strong>Command Name</strong> - This variable, which has been arbitrarily named <span class=\'code\'>kPluginCmdName</span>, contains the name of our command. We assign the string <span class=\'code\'>&#39;myCommandName&#39;</span> as its value, which is re-used in <span class=\'code\'>MFnPlugin.dergisterCommand()</span> and in the error reporting call to <span class=\'code\'>sys.stderr.write()</span>. Having registered our command&#39;s name as <span class=\'code\'>&#39;myCommandName&#39;</span>, we can run our command using the following Python instructions in Maya&#39;s Script Editor:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.myCommandName()</pre></div></li>\n\
<li><p><strong>Command Creation Function Reference</strong> - The second parameter is a reference to a function which creates an instance of our command. Here, <span class=\'code\'>cmdCreator</span> creates an instance of our command class and returns it as a valid Maya object pointer.</p>\n\
<p>Note that in the Python API 1.0, the pointer must be cast to a valid Maya object using <span class=\'code\'>OpenMayaMPx.asMPxPtr()</span>. This is not required in the Python API 2.0. However, a <span class=\'code\'>maya_useNewAPI()</span> function must be defined to indicate what type objects are being passed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    ...</pre></div></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"command-behavior\"></a><h2 id=\"command-behavior\">Command Behavior</h2></div>\n\
<p>The behavior of our command is defined in <span class=\'code\'>MyCommandClass</span>, which inherits from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxCommand</a></span> - the base class of all custom Maya commands. Classes prefixed by <span class=\'code\'>MPx</span> are known as <em>proxy</em> classes, and are used to create various plug-in types. In the <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Dependency-Graph-Plug-in-Basics.html\' title=\'\'>Dependency Graph Plug-in Basics</a> section, we show how classes derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxNode</a></span> are used to create other plug-in types such as custom deformers, constraints, software and hardware shading nodes, surfaces, etc.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class MyCommandClass( OpenMayaMPx.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        ...\n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
        \n\
        # Remove the following &#39;pass&#39; keyword and replace it with \n\
        # the code you want to run.\n\
        pass\n\
</pre></div><p>The class name (<span class=\'code\'>MyCommandClass</span>) can be any arbitrary name, however it must contain two specific functions:</p>\n\
<ul>\n\
<li><strong>__init__(self)</strong> - This is the command&#39;s constructor. Its body must invoke the constructor of the base class from which it is derived.</li>\n\
<li><strong>doIt(self, args)</strong> - This is the command execution function; any code you want to run when your command is invoked should be written here. When the command is run either through MEL or the <span class=\'code\'>maya.cmds</span> Python module, the command is instantiated, and its <span class=\'code\'>doIt()</span> method is passed the specified arguments via the <span class=\'code\'>args</span> parameter.</li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> For more information on defining your command&#39;s arguments and flags, see <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Command-Arguments-and-Flags.html\' title=\'\'>Command Arguments and Flags</a>.</p>\n\
</blockquote>\n\
<blockquote>\n\
<p><strong>Note:</strong> Your command can also support the <span class=\'code\'>undoIt()</span> and <span class=\'code\'>redoIt()</span> functions, allowing it to be undone and re-done. For more information, see <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Creating-and-Manipulating.html\' title=\'\'>Creating and Manipulating Objects</a>.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";