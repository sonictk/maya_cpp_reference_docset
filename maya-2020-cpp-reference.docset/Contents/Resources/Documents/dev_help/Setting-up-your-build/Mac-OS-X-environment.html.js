var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Installing the Maya Developer Toolkit on a macOS Environment</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Installing the Maya Developer Toolkit on a macOS Environment</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"installing-the-maya-developer-toolkit-on-a-macos-environment\"></a></div>\n\
<p>The Maya Developer Toolkit, also referred to as the Maya devkit, is used to create custom plug-ins, scripts, and applications that extend Maya&#39;s capabilities.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> Maya sets the <span class=\'code\'>SSL_CERT_FILE</span> environment variable to point to the <span class=\'code\'>cert.pem</span> file within its embedded Python Framework if <span class=\'code\'>SSL_CERT_FILE</span> is unset.</p>\n\
<p>If you need <span class=\'code\'>SSL_CERT_FILE</span> to remain unset because you are using other means of controlling Python&#39;s certificate usage, set <span class=\'code\'>MAYA_DO_NOT_SET_SSL_CERT_FILE</span> <strong>before</strong> launching Maya:</p>\n\
<p><span class=\'code\'>export MAYA_DO_NOT_SET_SSL_CERT_FILE=1</span></p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"requirements\"></a><h2 id=\"requirements\">Requirements</h2></div>\n\
<p>Xcode version 7.3.1 and CMake are required.</p>\n\
<p>CMake is available to download from <a href=\'https://cmake.org/download/\' title=\'\' target=\'_blank\'>https://cmake.org/download/</a>.</p>\n\
<div class=\'section\'><a id=\"download-and-set-up-the-developer-toolkit\"></a><h2 id=\"download-and-set-up-the-developer-toolkit\">Download and Set Up the Developer Toolkit</h2></div>\n\
<p>The Maya devkit is available from <a href=\'https://www.autodesk.com/developmaya\' title=\'\' target=\'_blank\'>The Maya Developer Center</a>.</p>\n\
<p>Scroll to the bottom of the Maya Developer Center page to find the devkit packages. Click on the appropriate link to download the devkit.</p>\n\
<ol>\n\
<li><p>Unarchive the devkit <span class=\'code\'>dmg</span> package. This will create a mounted disk image name <span class=\'code\'>devkitBase</span>.</p></li>\n\
<li><p>Create a <span class=\'code\'>devkitBase</span> directory on your machine. It can be located anywhere except within the Maya insallation directory.</p></li>\n\
<li><p>Copy the contents of the <span class=\'code\'>devkitBase</span> disk image to your <span class=\'code\'>devkitbase</span> directory.</p></li>\n\
<li><p>Create a directory named <span class=\'code\'>plug-ins</span> under your <span class=\'code\'>devkitBase</span> directory. This is where you will store your own plug-ins and scripts.</p></li>\n\
<li><p>Create the <span class=\'code\'>plug-ins</span>, <span class=\'code\'>scripts</span>, and <span class=\'code\'>icons</span> directories under your <span class=\'code\'>devkitBase/plug-ins/</span> directory.</p></li>\n\
<li><p>Edit the <span class=\'code\'>$HOME/Library/Preferences/Autodesk/maya/&lt;version_number&gt;/Maya.env</span> file to define path variables pointing to your <span class=\'code\'>plug-ins</span>, <span class=\'code\'>scripts</span>, and <span class=\'code\'>icons</span> directories. Use the <span class=\'code\'>Maya.env</span> file that corresponds to the version of Maya you are developing for.</p>\n\
<p><span class=\'code\'>sh MAYA_PLUG_IN_PATH=$HOME/devkitBase/plug-ins/plug-ins/ MAYA_SCRIPT_PATH=$HOME/devkitBase/plug-ins/scripts/ XBMLANGPATH=$HOME/devkitBase/plug-ins/icons/</span></p>\n\
<p>Maya will use these paths to automatically discover the plug-ins and scripts in these directories. If these paths are not set, you will need to open Maya&#39;s Plug-ins Manager and manually browse to the location of the plug-ins and scripts to load them.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The <span class=\'code\'>$HOME/Library/Preferences/Autodesk/maya/&lt;version_number&gt;/</span> directory is created when Maya is launched for the first time. It may not be visible from Finder, but you can navigate to it from the terminal window.</p>\n\
</blockquote></li>\n\
<li><p>Set the <span class=\'code\'>MAYA_LOCATION</span>, <span class=\'code\'>DYLD_LIBRARY_PATH</span>, <span class=\'code\'>DYLD_FRAMEWORK_PATH</span>, and <span class=\'code\'>DEVKIT_LOCATION</span> environment variables.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> If you have more than one version of Maya installed, only set these variables in the terminal window where you will be building your plug-ins and applications. Setting them in your <span class=\'code\'>.bash_profiles</span> file can result in a conflict with other versions of Maya that are installed on your system.</p>\n\
</blockquote>\n\
<p>Set <span class=\'code\'>MAYA_LOCATION</span> to point to the version of Maya you are developing for, and set <span class=\'code\'>DEVKIT_LOCATION</span> to point to the location of your <span class=\'code\'>devkitBase</span> directory.</p>\n\
<p>Open a terminal window and set the following environment variables:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">export MAYA_LOCATION=/Applications/Autodesk/&lt;maya_version&gt;/Maya.app/Contents\n\
export DYLD_LIBRARY_PATH=$MAYA_LOCATION/MacOS\n\
export DYLD_FRAMEWORK_PATH=$MAYA_LOCATION/Frameworks\n\
export DEVKIT_LOCATION=/Users/&lt;your_username&gt;/devkitBase</pre></div></li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";