var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Installing the Maya Developer Toolkit on a Linux Environment</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
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
<p>The Maya devkit is available from <a href=\'https://www.autodesk.com/developmaya\' title=\'\' target=\'_blank\'>The Maya Developer Center</a>.</p>\n\
<p>Scroll to the bottom of the Maya Developer Center page to find the devkit packages. Click on the appropriate link to download the devkit.</p>\n\
<ol>\n\
<li><p>Unzip and unarchive the devkit package to your <span class=\'code\'>$HOME</span> directory, creating the <span class=\'code\'>$HOME/devkitBase/</span> directory.</p></li>\n\
<li><p>Create the <span class=\'code\'>$HOME/devkitBase/plug-ins/</span> directory. This is where you will store your own plug-ins and scripts.</p></li>\n\
<li><p>Create the <span class=\'code\'>plug-ins</span>, <span class=\'code\'>scripts</span>, and <span class=\'code\'>icons</span> directories under your <span class=\'code\'>$HOME/devkitBase/plug-ins/</span> directory.</p></li>\n\
<li><p>Modify your <span class=\'code\'>$HOME/maya/&lt;version_number&gt;/Maya.env</span> file to define path variables that point to the directories that contain your plug-ins and scripts. Use the <span class=\'code\'>Maya.env</span> file that corresponds to the version of Maya you are developing for.</p></li>\n\
</ol>\n\
<p><span class=\'code\'>bash    MAYA_PLUG_IN_PATH=$HOME/devkitBase/plug-ins/plug-ins/    MAYA_SCRIPT_PATH=$HOME/devkitBase/plug-ins/scripts/    XBMLANGPATH=$HOME/devkitBase/plug-ins/icons/</span> &gt;<strong>Note:</strong> The <span class=\'code\'>$HOME/maya/&lt;version_number&gt;/</span> directory is created when Maya is launched for the first time. Launch Maya if you do not see this directory.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">Maya will use these paths to automatically discover the plug-ins and scripts in these directories. If these paths are not set, you will need to open Maya&#39;s Plug-ins Manager and manually browse to the location of the plug-ins and scripts to load them.\n\
</pre></div><ol>\n\
<li>Set the <span class=\'code\'>DEVKIT_LOCATION</span> environment variable to point to <span class=\'code\'>$HOME/devkitBase/</span> and set the <span class=\'code\'>MAYA_LOCATION</span> environment variable to point to <span class=\'code\'>/usr/autodesk/&lt;maya_version&gt;/</span>.</li>\n\
</ol>\n\
<blockquote>\n\
<p>Important: If you have more than one version of Maya installed, set these variables in the terminal where you will be building your plug-ins and applications. Setting them in your shell confuguration file can cause a conflict with other versions of Maya that are installed on your system.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";