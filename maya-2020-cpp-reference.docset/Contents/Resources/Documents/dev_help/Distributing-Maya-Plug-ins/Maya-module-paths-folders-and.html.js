var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Maya module paths, folders and versions</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Maya module paths, folders and versions</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"maya-module-paths-folders-and-versions\"></a></div>\n\
<p>Creating a plug-in module allows you to create a distributable installation of a plug-in that can be saved locally or at any network location. This obviates the need to write files into the Maya installation or other hard to manage locations. Through the module file, you can easily change the distribution of your module, such as re-directing the location of many installed plug-ins to a different script folder.</p>\n\
<p>Maya allows you to have multiple versions of a plug-in and load a different version depending on your OS, your Maya version, and language setting.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> All module files, regardless of extension, are read by Maya.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"module-folder-structure\"></a><h2 id=\"module-folder-structure\">Module folder structure</h2></div>\n\
<p>In the module file, specify the location of the module. The location can be specified either as an absolute path or as a path relative to the location of the <span class=\'code\'>.mod</span> file being read.</p>\n\
<p>The module folder structure can be overwritten using the syntax <span class=\'code\'>&lt;folder to override&gt;: &lt;new location for this folder&gt;</span>.</p>\n\
<p>For example, to specify a new location for the scripts folder of a module, add the line:</p>\n\
<p><span class=\'code\'>scripts: ../commonModuleFiles/scripts</span></p>\n\
<p>This can be a useful mechanism to share scripts/icons/presets files between modules.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> You must add a space after <span class=\'code\'>scripts:</span> when specifying the path of your scripts folder; for example, <span class=\'code\'>scripts: c:\\myScripts</span>.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"example\"></a><h3 id=\"example\">Example</h3></div>\n\
<p>Location of modules and script files:</p>\n\
<ul>\n\
<li><span class=\'code\'>C:\\CustomModule\\Modules\\win64</span></li>\n\
<li><span class=\'code\'>C:\\CustomModule\\Modules\\mac</span></li>\n\
<li><span class=\'code\'>C:\\CustomModule\\CommonFiles\\scripts</span></li>\n\
</ul>\n\
<p>Location of mod file:</p>\n\
<ul>\n\
<li><span class=\'code\'>C:\\ModulesMOD\\CustomModule.mod</span></li>\n\
</ul>\n\
<p>The <span class=\'code\'>.mod</span> file would contain the following lines:</p>\n\
<p><span class=\'code\'>+ PLATFORM:win64 CustomModule 3.10.5 ..\\CustomModule\\Modules\\win64</span></p>\n\
<p><span class=\'code\'>scripts: ..\\..\\CommonFiles\\scripts</span></p>\n\
<p>A relative path was used in the first line that specified the location of the module relative to the location of the mod file (<span class=\'code\'>C:\\ModulesMOD\\CustomModule.mod</span>). In the second line, a relative path was used to specify the location of the scripts folder relative to the module location (<span class=\'code\'>..\\CustomModule\\Modules\\win64</span>).</p>\n\
<div class=\'section\'><a id=\"subfolders-of-a-module-folder\"></a><h2 id=\"subfolders-of-a-module-folder\">Subfolders of a module folder</h2></div>\n\
<p>By default, Maya ignores all subfolders included in a module. In order for Maya to consider subfolders of a module, you must request recursive behavior for that folder using the <span class=\'code\'>[r]</span> keyword; for example, as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[r] scripts: ..\\..\\CommonFiles\\scripts\n\
</pre></div><p>.folders (that is, folders starting with a ‘.’, also known as hidden folders) are ignored even if the [r] keyword is set. The folder is not parsed recursively, nor is it added to Maya as a search path.</p>\n\
<div class=\'section\'><a id=\"specifying-the-conditions-for-loading-the-module\"></a><h2 id=\"specifying-the-conditions-for-loading-the-module\">Specifying the conditions for loading the module</h2></div>\n\
<p>You can specify the conditions under which the module will load. Choose among these conditions:</p>\n\
<ul>\n\
<li>Maya version</li>\n\
<li>operating system</li>\n\
<li>system locale</li>\n\
</ul>\n\
<p>The following operating system conditions are supported:</p>\n\
<ul>\n\
<li>PLATFORM:win64</li>\n\
<li>PLATFORM:mac</li>\n\
<li>PLATFORM:linux</li>\n\
</ul>\n\
<p>For system locale, the following conditions are supported:</p>\n\
<ul>\n\
<li>LOCALE:en_US <em>(for English (US))</em></li>\n\
<li>LOCALE:ja_JP <em>(for Japanese)</em></li>\n\
<li>LOCALE:zh_CN <em>(for Simplified Chinese)</em></li>\n\
</ul>\n\
<p>Use MAYAVERSION: to denote the Maya version.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> You must specify the conditions between the + and your module name.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"example-1\"></a><h3 id=\"example-1\">Example</h3></div>\n\
<p><span class=\'code\'>+ MAYAVERSION:2016 PLATFORM:win64 LOCALE:ja_JP CustomModule 3.10.5 ..\\CustomModule\\Modules\\win64</span></p>\n\
<p>In this example, the CustomModule plug-in would only be loaded for Maya 2016, with an operating system of WIN 64-bit, and with the system locale set to Japanese.</p>\n\
<div class=\'section\'><a id=\"environment-variables\"></a><h2 id=\"environment-variables\">Environment variables</h2></div>\n\
<p>You can set custom environment variables using the following syntax:</p>\n\
<p>MYVAR=MYVALUE</p>\n\
<p>It is also possible to specify environment variables with values that are relative to the module location. To do so use the “:=” syntax.</p>\n\
<div class=\'section\'><a id=\"example-2\"></a><h3 id=\"example-2\">Example</h3></div>\n\
<p>In the example above, if you want to set PYTHONPATH to <span class=\'code\'>C:\\CustomModule\\Modules\\win64\\python</span>, you can simply set:</p>\n\
<p>PYTHONPATH:=python</p>\n\
<div class=\'section\'><a id=\"append-to-the-current-value-of-a-variable\"></a><h3 id=\"append-to-the-current-value-of-a-variable\">Append to the current value of a variable</h3></div>\n\
<p>You can append to the current value of a variable using the + and/or : operators. Examples as follows:</p>\n\
<p><span class=\'code\'>PATH += c:/myModule/bin</span> adds <span class=\'code\'>;c:/myModule/bin</span> to the current value of the environment variable PATH.</p>\n\
<p><span class=\'code\'>PATH +:= bin</span> adds <span class=\'code\'>;’module location’/bin</span> to the current value of the environment variable PATH.</p>\n\
<div class=\'section\'><a id=\"obtaining-the-module-path\"></a><h2 id=\"obtaining-the-module-path\">Obtaining the module path</h2></div>\n\
<p>To query the module path, use the MEL command <span class=\'code\'>getModulePath</span> as follows:</p>\n\
<p><span class=\'code\'>getModulePath –moduleName “MyModule”</span></p>\n\
<p>This query returns: <span class=\'code\'>c:\\MyModule</span>.</p>\n\
<div class=\'section\'><a id=\"known-limitations\"></a><h2 id=\"known-limitations\">Known limitations</h2></div>\n\
<p>The following folder types are not supported as legal module resource paths and any folders named with the following extensions are ignored by the module system:</p>\n\
<ul>\n\
<li><span class=\'code\'>.so</span></li>\n\
<li><span class=\'code\'>.mll</span></li>\n\
<li><span class=\'code\'>.bundle</span></li>\n\
<li><span class=\'code\'>.py</span></li>\n\
<li><span class=\'code\'>.dll</span></li>\n\
<li><span class=\'code\'>.framework</span></li>\n\
<li><span class=\'code\'>.plugin</span></li>\n\
<li><span class=\'code\'>.plist</span></li>\n\
<li><span class=\'code\'>.app</span></li>\n\
<li><span class=\'code\'>.pkg</span></li>\n\
<li><span class=\'code\'>.rtfd</span></li>\n\
<li><span class=\'code\'>.download</span></li>\n\
<li><span class=\'code\'>.sparsebundle</span></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";