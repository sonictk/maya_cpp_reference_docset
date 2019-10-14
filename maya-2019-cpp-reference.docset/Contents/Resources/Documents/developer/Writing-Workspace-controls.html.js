var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Writing Workspace controls</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Writing Workspace controls</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"writing-workspace-controls\"></a></div>\n\
<div class=\'figure\'><img src=\'developer/images/New_Even.png\' title=\'\'></div>\n\
<p>You can use workspace controls to create custom UI that can be dragged, docked and saved within Maya&#39;s workspaces system. Workspace controls are created using the <span class=\'code\'>workspaceControl</span> command. Calling the command with a script passed to the <span class=\'code\'>uiScript</span> flag that creates the internal UI, allows the workspaces system to save it to a given workspace, and properly restore the control the next time it is opened. Note that anything called in that script must be available for execution during any subsequent Maya startup, which is the time that any saved workspace is restored.</p>\n\
<p>MEL scripts have to be sourced while Python modules have to be imported. The only exceptions are as follows:</p>\n\
<ul>\n\
<li>Calls to access another workspace control or its contained UI. In this case, you must provide the <span class=\'code\'>requiredControl</span> flag with the name of the other workspace control. Be aware of cyclical dependencies, such as controls that require each other.</li>\n\
<li>Calls to functionality from a plug-in. In this case, you user must provide the <span class=\'code\'>requiredPlugin</span> flag with the name of the plug-in.</li>\n\
</ul>\n\
<p>Workspace controls replace the <span class=\'code\'>dockControl</span> command which was previously used to create UI that could be docked around the four sides of the central viewport. The <span class=\'code\'>dockControl</span> functionality is no longer supported. You can migrate to workspaceControl functionality by creating a script that generates the internal UI when executed, and attach it to a <span class=\'code\'>workspaceControl</span> command call using the <span class=\'code\'>uiScript</span> flag. You should no longer create a window with internal UI and then attach it to a <span class=\'code\'>dockControl</span> command call via the <span class=\'code\'>content</span> flag.</p>\n\
<div class=\'section\'><a id=\"create-workspace-controls-using-mel\"></a><h2 id=\"create-workspace-controls-using-mel\">Create workspace controls using MEL</h2></div>\n\
<p>The following example shows the easiest way of creating workspace controls using MEL. Note that the example assumes this script exists in <span class=\'code\'>customWorkspaceControlFile.mel</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    global proc createCustomWorkspaceControlUI()\n\
    {\n\
                    columnLayout;\n\
                    button;\n\
                    button;\n\
                    button;\n\
    }\n\
     \n\
\n\
</pre></div><p>Execute this command to create the control for the first time:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">workspaceControl -retain false -floating true \n\
-uiScript &quot;if(!`exists createCustomWorkspaceControlUI`) source customWorkspaceControlFile; createCustomWorkspaceControlUI();&quot; \n\
myCustomWorkspaceControl;\n\
</pre></div><div class=\'section\'><a id=\"create-workspace-controls-using-python-with-pyside-bindings\"></a><h2 id=\"create-workspace-controls-using-python-with-pyside-bindings\">Create workspace controls using Python with Pyside bindings</h2></div>\n\
<p>You can create workspace controls in Python by using Maya command scripting. PySide only applies if the UI content of the workspace control is PySide-based.</p>\n\
<p>Create a workspace control in PySide UI by doing the following:</p>\n\
<ol>\n\
<li>Derive the top-level widget from the <span class=\'code\'>MayaQWidgetDockableMixin</span> class.</li>\n\
<li>Open the widget using a call to <span class=\'code\'>show()</span> with <span class=\'code\'>dockable</span> set to <span class=\'code\'>True</span>.</li>\n\
<li>Set <span class=\'code\'>uiScript</span> to a script that recreates the widget. The script needs to parent the recreated widget into the restored workspace control (locate using <span class=\'code\'>MQtUtil.findControl</span>) using <span class=\'code\'>MQtUtil.addWidgetToMayaLayout</span>.</li>\n\
</ol>\n\
<p>For more information about creating a workspace control using Python see the <span class=\'code\'>dockableWorkspaceWidget.py</span> devkit example. To run the example, open it in the Script Editor and execute it. See also <a href=\'#!/url=./developer/Maya-Python-API/Working-with-PySide-in-Maya/PyQt-and-PySide-Widget-Best.html\' title=\'\'>PyQt and PySide Widget Best Practices</a>.</p>\n\
<div class=\'section\'><a id=\"create-workspace-controls-using-c\"></a><h2 id=\"create-workspace-controls-using-c\"><strong>Create workspace controls using C++</strong></h2></div>\n\
<p>When using C++, you must first create the workspace control using the <span class=\'code\'>workspaceControl</span> MEL command. It can be executed using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::executeCommand()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MGlobal::executeCommand()</a></span> method. You can then parent your C++-created Qt UI into the workspace control using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil::addWidgetToMayaLayout()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html#a42ba7b27654231ee3b1add771f0b7896&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MQtUtil::addWidgetToMayaLayout()</a></span> method.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"workspaceControlCmd.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/workspace_control_cmd_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">workspaceControlCmd.cpp</a></span> example demonstrates how to create a command that generates the workspace control and the containing UI. It also shows how to pass it into the workspaceControl&#39;s <span class=\'code\'>uiScript</span> flag to restore the UI on reopen. Since the command is part of a plug-in, the workspace control must be made aware of that plug-in using the <span class=\'code\'>requiredPlugin</span> flag so that it can execute the command to restore the UI.</p>\n\
<p>To build the workspaceControlCmd example, see the <em>Building the plug-in</em> section of the <a href=\'#!/url=./developer/Working-with-Qt/Using-Qt-in-Plug-ins.html\' title=\'\'>Using Qt in Plug-ins</a> topic. After the plug-in is built, load it into Maya and execute the following MEL script:</p>\n\
<p><span class=\'code\'>workspaceControlWindow;</span> .</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";