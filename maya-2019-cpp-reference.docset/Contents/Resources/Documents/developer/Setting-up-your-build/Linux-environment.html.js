var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Installing the Maya Developer Toolkit on a Linux Environment</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Installing the Maya Developer Toolkit on a Linux Environment</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"installing-the-maya-developer-toolkit-on-a-linux-environment\"></a></div>\n\
<p>The Maya Developer Toolkit, also referred to as the Maya devkit, is used to create custom plug-ins, scripts, and applications that extend Maya&#39;s capabilities.</p>\n\
<div class=\'section\'><a id=\"requirements\"></a><h2 id=\"requirements\">Requirements</h2></div>\n\
<p>The Maya devkit requires CMake and Red Hat Developer Toolset 6.1 with gcc 6.3.1.</p>\n\
<p>CMake is available to download from <a href=\'https://cmake.org/download/\' title=\'\' target=\'_blank\'>https://cmake.org/download/</a>.</p>\n\
<p>The Red Hat Developer Toolset can be installed using the yum package management tool. See the <a href=\'https://developers.redhat.com/products/developertoolset\' title=\'\' target=\'_blank\'>Red Hat Developer Toolset website</a> for more information.</p>\n\
<div class=\'section\'><a id=\"download-and-set-up-the-developer-toolkit\"></a><h2 id=\"download-and-set-up-the-developer-toolkit\">Download and Set Up the Developer Toolkit</h2></div>\n\
<p>The Maya devkit is available from <a href=\'#!/url=./developer/Setting-up-your-build/https://www.autodesk.com/developmaya/\' title=\'\'>The Maya Developer Center</a>.</p>\n\
<p>Scroll to the bottom of the Maya Developer Center page to find the devkit packages. Click on the appropriate link to download the devkit.</p>\n\
<ol>\n\
<li><p>Unzip and unarchive the devkit package to your <span class=\'code\'>$HOME</span> directory, creating the <span class=\'code\'>$HOME/devkitBase/</span> directory.</p></li>\n\
<li><p>Create the <span class=\'code\'>$HOME/devkitBase/plug-ins/</span> directory. This is where you will store your own plug-ins and scripts.</p></li>\n\
<li><p>Create the <span class=\'code\'>plug-ins</span>, <span class=\'code\'>scripts</span>, and <span class=\'code\'>icons</span> directories under your <span class=\'code\'>$HOME/devkitBase/plug-ins/</span> directory.</p></li>\n\
<li><p>Modify your <span class=\'code\'>$HOME/maya/2019/Maya.env</span> file to define path variables that point to the directories that contain your plug-ins and scripts:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MAYA_PLUG_IN_PATH=$HOME/devkitBase/plug-ins/plug-ins/\n\
MAYA_SCRIPT_PATH=$HOME/devkitBase/plug-ins/scripts/\n\
XBMLANGPATH=$HOME/devkitBase/plug-ins/icons/\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> The <span class=\'code\'>$HOME/maya/2019/</span> directory is created when Maya is launched for the first time. Launch Maya if you do not see this directory.</p>\n\
\n\
<p>Maya will use these paths to automatically discover the plug-ins and scripts in these directories. If these paths are not set, you will need to open Maya&#39;s Plug-ins Manager and manually browse to the location of the plug-ins and scripts to load them.</p></li>\n\
<li><p>Set the <span class=\'code\'>DEVKIT_LOCATION</span> environment variable to point to <span class=\'code\'>$HOME/devkitBase/</span>.</p></li>\n\
<li><p>Set the <span class=\'code\'>MAYA_LOCATION</span> environment variable to point to <span class=\'code\'>/usr/autodesk/maya/</span>.</p></li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";