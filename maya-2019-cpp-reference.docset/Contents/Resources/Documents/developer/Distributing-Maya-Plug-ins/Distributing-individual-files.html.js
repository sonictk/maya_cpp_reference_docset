var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Distributing individual files</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Distributing individual files</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"distributing-individual-files\"></a></div>\n\
<p>If your Maya add-on consists of a single file, such as a single plug-in, a single script file or a single icon, then it generally makes sense to simply distribute the file itself, possibly in compressed format, and have the end user copy it into the appropriate directory.</p>\n\
<p>For example, if a user wishes to install a plug-in, written in either C++ or Python, they can do so simply by copying the plug-in file to one of the directories in their MAYA_PLUG_IN_PATH environment variable.</p>\n\
<p>At sites where multiple users may need to use the same plug-in, it is often preferable to install it in a common directory to which all users have access, such as a directory on a network drive, rather than have each user install it separately. This makes it much easier for the site administrator to apply any new versions of the file which might later be released.</p>\n\
<p>For a common directory to work for all users, it must appear in the MAYA_PLUG_IN_PATH for all users. By default, MAYA_PLUG_IN_PATH contains both user-specific and system-wide directories. The system-wide directories can be further subdivided into those whose paths are fixed and those whose paths are relative to the location where Maya is installed. For example, Maya 2017 on Linux has the following system-wide directories in its MAYA_PLUG_IN_PATH:</p>\n\
<ul>\n\
<li><span class=\'code\'>/usr/autodesk/userconfig/maya/2017/plug-ins</span></li>\n\
<li><span class=\'code\'>/usr/autodesk/userconfig/maya/plug-ins</span></li>\n\
<li><span class=\'code\'>/usr/autodesk/maya/2017/bin/plug-ins</span></li>\n\
</ul>\n\
<p>The first two paths are the same regardless of where Maya is installed, but the third path contains <span class=\'code\'>/usr/autodesk/maya/2017</span> which is the top of the directory tree where Maya is installed. Had Maya been installed in <span class=\'code\'>/opt/maya2017</span> then the first two paths would still be the same as shown above but the third would become:</p>\n\
<ul>\n\
<li>/opt/maya2017/bin/plug-ins</li>\n\
</ul>\n\
<p>This suggests several approaches to making the plug-in available to all users:</p>\n\
<ol>\n\
<li>Install Maya into a common directory to which all users have access, such as a network drive, then install the plug-in into the MAYA_PLUG_IN_PATH directory which is relative to where Maya is installed (for example, the third path in the list given above).</li>\n\
<li>On each user&#39;s system, map one of the fixed system-wide paths from MAYA_PLUG_IN_PATH (for example, either of the first two paths in the list given above) to a common directory to which all users have access, such as a network drive, then install the plug-in to that directory. For this approach, it does not matter whether Maya is installed in a common location or separately on each user&#39;s machine.</li>\n\
<li>Ignore the default directories provided in MAYA_PLUG_IN_PATH. Instead, install the plug-in into a common directory to which all users have access and explicitly add that directory to the MAYA_PLUG_IN_PATH for all users. This can be done either by modifying each user&#39;s <span class=\'code\'>Maya.env</span> file or by using system-specific tools to ensure that the MAYA_PLUG_IN_PATH for all users contain the common directory before Maya is run.</li>\n\
</ol>\n\
<p>These same approaches will also work with MEL or Python script files, except that instead of using MAYA_PLUG_IN_PATH scripts must be installed into a directory in the user&#39;s MAYA_SCRIPT_PATH environment variable. Similarly, icons must be installed into a directory in the user&#39;s XBMLANGPATH environment variable and presets must be installed into a directory in the user&#39;s MAYA_PRESET_PATH.</p>\n\
<blockquote>\n\
<p>**<a href=\'#!/url=./developer/Distributing-Maya-Plug-ins/Tip:**/\' title=\'\'>Tip:**</a> To summarize, the four environment variables described above are:</p>\n\
<ul>\n\
<li>MAYA_PLUG_IN_PATH - directories to search for plug-ins</li>\n\
<li>MAYA_SCRIPT_PATH - directories to search for MEL and Python scripts</li>\n\
<li>XBMLANGPATH - directories to search for icons</li>\n\
<li>MAYA_PRESET_PATH - directories to search for Maya presets</li>\n\
</ul>\n\
</blockquote>\n\
<p>To see what directories each environment variable is set to, use the getenv command in the Maya Script Editor or Maya command line as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">getenv MAYA_PLUG_IN_PATH\n\
</pre></div><p>You can also set an environment variable to a directory of your choice. To do so, you must create a <span class=\'code\'>Maya.env</span> file. See <a href=\'#!/url=./developer/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a> for information about <span class=\'code\'>Maya.env</span>.</p>\n\
<div class=\'section\'><a id=\"related-topics\"></a><h2 id=\"related-topics\">Related topics</h2></div>\n\
<ul>\n\
<li><a href=\'#!/url=./developer/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a></li>\n\
<li><a href=\'#!/url=./developer/Installing-Maya-plug-ins.html\' title=\'\'>Installing Maya plug-ins</a></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";