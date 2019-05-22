var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command Plug-in Basics</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Command Plug-in Basics</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"command-plug-in-basics\"></a></div>\n\
<div class=\'section\'><a id=\"what-is-a-command-plug-in\"></a><h2 id=\"what-is-a-command-plug-in\">What is a Command Plug-in?</h2></div>\n\
<p><strong>Command</strong> plug-ins define new custom MEL commands, and correspondingly add functions to the <span class=\'code\'>maya.cmds</span> Python module for use in scripting. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxCommand</a></span> is the base class from which your custom Commands will derive. A trivial example of a command plug-in is presented in <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Your-First-Maya-Python-Plug-in.html\' title=\'\'>Your First Maya Python Plug-in</a>, which creates the <span class=\'code\'>spHelloWorld</span> (Python API 1.0) or <span class=\'code\'>pyHelloWorld</span> (Python API 2.0) command. This command is invoked in the Maya Script Editor in one of two ways:</p>\n\
<ul>\n\
<li><p><strong>MEL</strong> - simply run the new MEL command by its name.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">spHelloWorld</pre></div></li>\n\
<li><p><strong>Python</strong> - use the <span class=\'code\'>maya.cmds</span> Python module to invoke the new command as a function.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.spHelloWorld()</pre></div></li>\n\
</ul>\n\
<p>Running this command prints &quot;<span class=\'code\'>Hello World</span>&quot; to the Script Editor output. More useful commands can be defined to query the scene, and to automate the manipulation of various scene elements. Command plug-ins can also be paired with <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Dependency-Graph-Plug-in-Basics.html\' title=\'\'>dependency graph plug-ins</a> to facilitate the creation and connection of custom node types.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";