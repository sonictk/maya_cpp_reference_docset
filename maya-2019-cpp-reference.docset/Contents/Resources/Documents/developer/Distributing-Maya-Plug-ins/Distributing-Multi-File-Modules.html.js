var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Distributing Multi-File Modules</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Distributing Multi-File Modules</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"distributing-multi-file-modules\"></a></div>\n\
<p>All but the simplest of Maya add-ons involve more than one file. For example, a fully implemented render utility node will have at least three files:</p>\n\
<ul>\n\
<li>the plug-in file containing the node;</li>\n\
<li>an Attribute Editor script;</li>\n\
<li>an icon to represent the node in the Create Render Node dialog.</li>\n\
</ul>\n\
<p>Each of these files must go into a different directory on the target system. Even with just three files, having the user or site-administrator install them separately, by hand, can be an unwanted burden, and that burden will only grow with the number of files involved, as will opportunities for mistakes.</p>\n\
<p>To simplify multi-file distribution, Maya provides the ability to package them into <strong>modules</strong>.</p>\n\
<div class=\'section\'><a id=\"about-modules\"></a><h2 id=\"about-modules\">About modules</h2></div>\n\
<p>A module consists of a root directory which contains a module description file and the following sub-directories:</p>\n\
<ul>\n\
<li>icons,</li>\n\
<li>plug-ins,</li>\n\
<li>presets,</li>\n\
<li>scripts,</li>\n\
</ul>\n\
<p>When creating the module you place your icons in the <span class=\'code\'>icons</span> subdirectory, your C++ and Python plug-ins in the <span class=\'code\'>plug-ins</span> subdirectory, your presets in the <span class=\'code\'>presets</span> subdirectory (same structure as Maya&#39;s <span class=\'code\'>presets</span> directory) and your MEL and Python scripts in the <span class=\'code\'>scripts</span> subdirectory.</p>\n\
<p>You can override any of these directory structures in the module description file by using the following syntax: <span class=\'code\'>&lt;folder to override&gt;:&lt;new location for this folder&gt;</span>. See <a href=\'#!/url=./developer/Distributing-Maya-Plug-ins/Maya-module-paths-folders-and.html\' title=\'\'>Module folder structure</a> for more information.</p>\n\
<p>In the module&#39;s root directory, place a copy of the module description file with the fourth field set to a suggested path. Distribution simply involves providing the user with a copy of the directory tree, possibly in compressed form.</p>\n\
<div class=\'section\'><a id=\"module-description-file\"></a><h2 id=\"module-description-file\">Module description file</h2></div>\n\
<p>The module description file contains a single line of text with four base fields, separated by blanks:</p>\n\
<ul>\n\
<li>A plus-sign (+), which indicates that the module is being added to Maya.</li>\n\
<li>The name of your module (no spaces allowed).</li>\n\
<li>The version number of your module (no spaces allowed).</li>\n\
<li>The path to the root directory of the module (spaces allowed).</li>\n\
</ul>\n\
<p>For example, if version 1.3 of <span class=\'code\'>myModule</span> is installed in <span class=\'code\'>/opt/MyCompany/myModule</span>, then the module file would contain the following line of text.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">+ myModule 1.3 /opt/MyCompany/myModule\n\
\n\
</pre></div><p>Conditions can also be added before the module name, for example:</p>\n\
<p><span class=\'code\'>+ (Conditions ) “moduleName” “moduleVersion” “moduleLocation”</span></p>\n\
<p>The conditions can be one of the following.</p>\n\
<ul>\n\
<li>MAYAVERSION:</li>\n\
<li>PLATFORM:</li>\n\
<li>LOCALE:</li>\n\
</ul>\n\
<p>See <a href=\'#!/url=./developer/Distributing-Maya-Plug-ins/Maya-module-paths-folders-and.html\' title=\'\'>Specifying the conditions for loading the module</a> for more information.</p>\n\
<div class=\'section\'><a id=\"installing-the-module\"></a><h2 id=\"installing-the-module\">Installing the module</h2></div>\n\
<p>Individual users wishing to install the module would do the following:</p>\n\
<ol>\n\
<li>Uncompress the distribution, if necessary.</li>\n\
<li>Move or copy the module&#39;s entire directory tree to wherever they want to keep it.</li>\n\
<li>Change the fourth field of the module description file to contain the full path to the module&#39;s directory tree.</li>\n\
<li>Place a copy of the modified module description file into one of the directories in their MAYA_MODULE_PATH environment variable.</li>\n\
</ol>\n\
<p>Site administrators wishing to install a common copy of the module for multiple users would follow a similar set of steps:</p>\n\
<ol>\n\
<li>Uncompress the distribution, if necessary.</li>\n\
<li>Move or copy the module&#39;s entire directory tree to a directory which is accessible to all users, such as a network drive.</li>\n\
<li>Change the fourth field of the module description file to contain the full path to the module&#39;s directory tree.</li>\n\
<li>Place a copy of the modified module description file into a common directory which all users have in their MAYA_MODULE_PATH environment variables.</li>\n\
</ol>\n\
<p>There are three approaches to doing this which are identical to those discussed for the MAYA_PLUG_IN_PATH variable in <a href=\'#!/url=./developer/Distributing-Maya-Plug-ins/Distributing-individual-files.html\' title=\'\'>Distributing individual files</a>.</p>\n\
<p>When Maya starts up, it will read in the module description file and add the module&#39;s <span class=\'code\'>icons</span> directory to its XBMLANGPATH, add the module&#39;s <span class=\'code\'>plug-ins</span> directory to its MAYA_PLUG_IN_PATH, add the module&#39;s <span class=\'code\'>presets</span> directory to its MAYA_PRESET_PATH and add the module&#39;s <span class=\'code\'>scripts</span> directory to its MAYA_SCRIPT_PATH and PYTHON_PATH.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> MAYA_MODULE_PATH defines the search paths for Maya module files. To see what directories this environment variable is set to, use the getenv command in the Maya Script Editor or Maya command line as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">getenv MAYA_MODULE_PATH\n\
</pre></div><p>You can also set this environment variable to a directory of your choice. To do so, you must create a <span class=\'code\'>Maya.env</span> file.</p>\n\
<p>You can also set an environment variable to a directory of your choice. To do so, you must create a <span class=\'code\'>Maya.env</span> file. See <a href=\'#!/url=./developer/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a> for information about <span class=\'code\'>Maya.env</span>.</p>\n\
</blockquote>\n\
<p>For more information about these environment variables, see the <em>File path variables</em> topic in the Maya User Guide.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";