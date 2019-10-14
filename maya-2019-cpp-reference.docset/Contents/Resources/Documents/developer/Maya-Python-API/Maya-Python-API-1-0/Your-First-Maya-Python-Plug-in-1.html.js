var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Your First Maya Python Plug-in</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Your First Maya Python Plug-in</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"your-first-maya-python-plug-in\"></a></div>\n\
<p>This topic will guide you through the creation and execution of your first Maya Python plug-in.</p>\n\
<div class=\'section\'><a id=\"optional-setting-the-maya-plug-in-environment-variable\"></a><h2 id=\"optional-setting-the-maya-plug-in-environment-variable\">(Optional) Setting the Maya Plug-in Environment Variable</h2></div>\n\
<p>By default, Maya attempts to load the plug-ins placed in the following directory:</p>\n\
<ul>\n\
<li>(Windows) <span class=\'code\'>C:/Users/&lt;username&gt;/Documents/maya/&lt;version&gt;/plug-ins</span></li>\n\
<li>(Mac OS X)<span class=\'code\'>Library/Preferences/Autodesk/maya/&lt;version&gt;/plug-ins</span></li>\n\
<li>(Linux) <span class=\'code\'>$MAYA_APP_DIR/maya/&lt;version&gt;/plug-ins</span></li>\n\
</ul>\n\
<p>where <version> denotes the Maya version; for example: <em>Maya2016</em>.<p>\n\
<p>There may be more than one default location from which Maya loads the plug-ins. See <em>File path variables</em> in the <em>Environment Variables</em> section of the Maya User Guide for more information. You can also type <span class=\'code\'>getenv MAYA_PLUG_IN_PATH</span> in the command line for the list of directories that this environment variable is set to.</p>\n\
<p>You can optionally define additional directories in the <span class=\'code\'>MAYA_PLUG_IN_PATH</span> environment variable to instruct Maya to load plug-ins from these locations.</p>\n\
<p>In Windows 7, open the Start menu, type &quot;<span class=\'code\'>env</span>&quot; in the search box and press enter. In the <span class=\'code\'>User variables</span> section, click on the &quot;New&quot; button, and enter &quot;<span class=\'code\'>MAYA_PLUG_IN_PATH</span>&quot; as the variable name. Set the variable value to the path of your choosing, where you will later save your scripts. For example, the variable value &quot;<span class=\'code\'>%USERPROFILE%\\Documents\\scripts</span>&quot; corresponds to the current user&#39;s My Documents\\scripts directory. Multiple paths can be specified by separating these variable values with a semicolon &quot;<span class=\'code\'>;</span>&quot;.</p>\n\
<p>When you launch Maya, the directories contained in the <span class=\'code\'>MAYA_PLUG_IN_PATH</span> will appear as different sections under <strong>Window &gt; Settings/Preferences &gt; Plug-in Manager</strong>.</p>\n\
<p>Writing a Python Plug-in using the Script Editor</p>\n\
<p>The Python and MEL Script Editor window can be found under <strong>Window &gt; General Editors &gt; Script Editor</strong>. Python plug-ins can also be written in an external text editor of your choice, however we will pursue this topic using Maya&#39;s built-in interactive Script Editor.</p>\n\
<p>In the Python tab of the Script Editor, paste the plug-in code below. This code creates a simple command which prints &quot;Hello World!&quot; out to the Script Editor output when it is invoked. Other sample Python plug-ins, including the ones below, can be found in the devkit/plug-ins/scripted folder of your Developer Kit installation (see <a href=\'#!/url=./developer/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Setting up your build environment: Windows environment (64-bit)</a>). The plug-ins using the 2.0 API start with &#39;py&#39;, for example pyHelloWorldCmd.py. We describe the code structure of plug-ins in subsequent topics. For now, we will focus on executing our first plug-in:</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import sys\n\
import maya.api.OpenMaya as om\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
\n\
\n\
# command\n\
class PyHelloWorldCmd(om.MPxCommand):\n\
    kPluginCmdName = &quot;pyHelloWorld&quot;\n\
\n\
    def __init__(self):\n\
        om.MPxCommand.__init__(self)\n\
\n\
    @staticmethod\n\
    def cmdCreator():\n\
        return PyHelloWorldCmd()\n\
\n\
    def doIt(self, args):\n\
        print &quot;Hello World!&quot;\n\
\n\
\n\
# Initialize the plug-in\n\
def initializePlugin(plugin):\n\
    pluginFn = om.MFnPlugin(plugin)\n\
    try:\n\
        pluginFn.registerCommand(\n\
            PyHelloWorldCmd.kPluginCmdName, PyHelloWorldCmd.cmdCreator\n\
        )\n\
    except:\n\
        sys.stderr.write(\n\
            &quot;Failed to register command: %s\\n&quot; % PyHelloWorldCmd.kPluginCmdName\n\
        )\n\
        raise\n\
\n\
\n\
# Uninitialize the plug-in\n\
def uninitializePlugin(plugin):\n\
    pluginFn = om.MFnPlugin(plugin)\n\
    try:\n\
        pluginFn.deregisterCommand(PyHelloWorldCmd.kPluginCmdName)\n\
    except:\n\
        sys.stderr.write(\n\
            &quot;Failed to unregister command: %s\\n&quot; % PyHelloWorldCmd.kPluginCmdName\n\
        )\n\
        raise\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import sys\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
\n\
# command\n\
class HelloWorldCmd(OpenMayaMPx.MPxCommand):\n\
    kPluginCmdName = &quot;spHelloWorld&quot;\n\
\n\
    def __init__(self):\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
\n\
    @staticmethod\n\
    def cmdCreator():\n\
        return OpenMayaMPx.asMPxPtr( HelloWorldCmd() )\n\
\n\
    def doIt(self,argList):\n\
        print &quot;Hello World!&quot;\n\
\n\
\n\
# Initialize the script plug-in\n\
def initializePlugin(plugin):\n\
    pluginFn = OpenMayaMPx.MFnPlugin(plugin)\n\
    try:\n\
        pluginFn.registerCommand(\n\
            HelloWorldCmd.kPluginCmdName, HelloWorldCmd.cmdCreator\n\
        )\n\
    except:\n\
        sys.stderr.write(\n\
            &quot;Failed to register command: %s\\n&quot; % HelloWorldCmd.kPluginCmdName\n\
        )\n\
        raise\n\
\n\
# Uninitialize the script plug-in\n\
def uninitializePlugin(plugin):\n\
    pluginFn = OpenMayaMPx.MFnPlugin(plugin)\n\
    try:\n\
        pluginFn.deregisterCommand(HelloWorldCmd.kPluginCmdName)\n\
    except:\n\
        sys.stderr.write(\n\
            &quot;Failed to unregister command: %s\\n&quot; % HelloWorldCmd.kPluginCmdName\n\
        )\n\
        raise\n\
</pre></div><p>In the Script Editor window, select <strong>File &gt; Save Script</strong>. Set the file name to <span class=\'code\'>myFirstPlugin.py</span> (you may omit the .py extension - it will be appended automatically), and save the script in <span class=\'code\'>C:\\Users\\&lt;username&gt;\\Documents\\maya\\&lt;version&gt;\\plug-ins</span>, or in one of the directories defined by your <span class=\'code\'>MAYA_PLUG_IN_PATH</span> environment variable.</p>\n\
<p>To verify that Maya has detected your newly saved script, access the Plug-in Manager window via <strong>Window &gt; Settings/Preferences &gt; Plug-in Manager</strong>, and press the &quot;Refresh&quot; button. Your plug-in file should appear here. Do not select any of the &quot;Loaded&quot; or &quot;Auto load&quot; checkboxes for now.</p>\n\
<div class=\'section\'><a id=\"loading-your-python-plug-in\"></a><h2 id=\"loading-your-python-plug-in\">Loading your Python Plug-in</h2></div>\n\
<p>There are two ways to load you newly created plug-in into Maya:</p>\n\
<ul>\n\
<li><p><strong>Programmatically</strong> - In the Script Editor, delete our previous Python code. Now write the following lines of code and execute them using the blue &quot;Play&quot; button on the Script Editor toolbar.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds\n\
maya.cmds.loadPlugin(&quot;myFirstPlugin.py&quot;)\n\
Observe that if you go into the Plug-in Manager window, the plug-in&#39;s &quot;Loaded&quot; checkbox will now be checked.</pre></div></li>\n\
<li><p><strong>Manually</strong> - In the Plug-in Manager window, you may check the &quot;Loaded&quot; and/or &quot;Auto load&quot; checkboxes. Selecting these will respectively load the plug-in, and ensure that the plug-in is automatically loaded when Maya is launched. Un-checking and re-checking the &quot;Loaded&quot; checkbox will reload your plug-in, which may be useful for testing and debugging your code.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"invoking-your-python-plug-in\"></a><h2 id=\"invoking-your-python-plug-in\">Invoking your Python Plug-in</h2></div>\n\
<p>The plug-in we just wrote is a &quot;Command&quot; plug-in. That is to say, our plug-in defines a new command which outputs &quot;Hello World!&quot; when it is invoked. If our plug-in is properly loaded, then it should appear as a new MEL command, and should also appear as a new function within the <span class=\'code\'>maya.cmds</span> Python module. This module defines all the available Maya Python commands (which is a subset of the available MEL commands). To invoke our command, execute the following code in the Script Editor:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.spHelloWorld()\n\
</pre></div><p>The Script Editor should display the following lines, which echo our commands as well as the &quot;Hello World!&quot; output.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.spHelloWorld()\n\
Hello World!\n\
</pre></div><p>Congratulations! You have just run your first Maya Python plug-in!</p>\n\
</version>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";