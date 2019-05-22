var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Recommended workflow for creating a plug-in module</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Recommended workflow for creating a plug-in module</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"recommended-workflow-for-creating-a-plug-in-module\"></a></div>\n\
<p>The following is an example of how a plug-in module can be used in a central network location. For more information about the plug-in modules, see <a href=\'#!/url=./developer/Distributing-Maya-Plug-ins/Maya-module-paths-folders-and.html\' title=\'\'>Maya module paths, folders and versions</a>.</p>\n\
<ul>\n\
<li><p>You can save the module and module file to the following locations:</p>\n\
<p><span class=\'code\'>//networkPath/share/modules/modFile.mod</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder</span></p></li>\n\
<li><p>These can serve as common directories for all platforms (Windows 64-bit, Linux, and so forth):</p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/scripts</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/presets</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/icons</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/devkit</span></p></li>\n\
<li><p>Sample platform specific directories as follows:</p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/*PLATFORM*/bin</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/*PLATFORM*/bin/image</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/*PLATFORM*/plug-ins</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/*PLATFORM*/shaders</span></p>\n\
<p><span class=\'code\'>//networkPath/share/modFolder/*PLATFORM*/shaders/include</span></p></li>\n\
<li><p>Set the MAYA_MODULE_PATH environment variable in Maya, for example, as follows:</p>\n\
<p>MAYA_MODULE_PATH = //networkPath/share/modules</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> For more information about setting environment variables in Maya, see Environment Variables in the Maya Help.</p>\n\
</blockquote></li>\n\
<li><p>Sample module file as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">+ PLATFORM:win64 myModule 1.10.1.x ../modFolder/win64 \n\
MYMODULE_LOCATION:= \n\
MYMODULE_SHADERS_LOCATION:=shaders \n\
MYMODULE_INCLUDE_LOCATION:=shaders/include \n\
MOD_PLUG_IN_PATH+:=bin/image \n\
PATH+:=bin \n\
icons: ../icons \n\
presets: ../presets \n\
scripts: ../scripts \n\
\n\
+ PLATFORM:mac myModule 1.10.1.x ../modFolder/mac \n\
MYMODULE_LOCATION:= \n\
MYMODULE_SHADERS_LOCATION:=shaders \n\
MYMODULE_INCLUDE_LOCATION:=shaders/include \n\
MOD_PLUG_IN_PATH+:=bin/image \n\
PATH+:=bin \n\
icons: ../icons \n\
presets: ../presets \n\
scripts: ../scripts \n\
\n\
+ PLATFORM:linux myModule 1.10.1.x ../modFolder/linux \n\
MYMODULE_LOCATION:= \n\
MYMODULE_SHADERS_LOCATION:=shaders \n\
MYMODULE_INCLUDE_LOCATION:=shaders/include \n\
MOD_PLUG_IN_PATH+:=bin/image \n\
PATH+:=bin \n\
icons: ../icons \n\
presets: ../presets \n\
scripts: ../scripts\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> Refer to the <span class=\'code\'>\\modules</span> directory of your Maya installation for more example module files.</p>\n\
<p>You can use environment variables in both scripts and module files.</p>\n\
<p>Files/folders named in a module file are case sensitive.</p>\n\
</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";