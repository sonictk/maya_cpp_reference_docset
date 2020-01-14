var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Installing the Maya Developer Toolkit on a 64bit Windows Environment</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Installing the Maya Developer Toolkit on a 64bit Windows Environment</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"installing-the-maya-developer-toolkit-on-a-64bit-windows-environment\"></a></div>\n\
<p>The Maya Developer Toolkit, also referred to as the Maya devkit, is used to create custom plug-ins, scripts, and applications that extend Maya&#39;s capabilities.</p>\n\
<div class=\'section\'><a id=\"requirements\"></a><h2 id=\"requirements\">Requirements</h2></div>\n\
<p>The Maya devkit requires Visual Studio 2015 Update 3 and CMake.</p>\n\
<p>CMake is available to download from <a href=\'https://cmake.org/download/\' title=\'\' target=\'_blank\'>https://cmake.org/download/</a>.</p>\n\
<div class=\'section\'><a id=\"download-and-set-up-the-developer-toolkit\"></a><h2 id=\"download-and-set-up-the-developer-toolkit\">Download and Set Up the Developer Toolkit</h2></div>\n\
<p>The Maya devkit is available from <a href=\'https://www.autodesk.com/developmaya\' title=\'\' target=\'_blank\'>The Maya Developer Center</a>.</p>\n\
<p>Scroll to the bottom of the Maya Developer Center page to find the devkit packages. Click on the appropriate link to download the devkit.</p>\n\
<ol>\n\
<li><p>Unzip the devkit zip package to your <span class=\'code\'>C:\\Users\\&lt;Username&gt;\\</span> directory, creating the <span class=\'code\'>C:\\Users\\&lt;Username&gt;\\devkitBase\\</span> directory.</p></li>\n\
<li><p>Create the <span class=\'code\'>C:\\Users\\&lt;Username&gt;\\devkitBase\\plug-ins</span> directory. This will be where you will keep the plug-ins and scripts you create.</p></li>\n\
<li><p>Create the <span class=\'code\'>plug-ins</span>, <span class=\'code\'>scripts</span>, and <span class=\'code\'>icons</span> directories under <span class=\'code\'>C:\\Users\\&lt;Username&gt;\\devkitBase\\plug-ins</span> .</p></li>\n\
<li><p>Modify the <span class=\'code\'>C:\\Users\\&lt;Username&gt;\\Documents\\maya\\&lt;version_number&gt;\\Maya.env</span> file to create three path variables that point to your plug-ins and scripts. Use the <span class=\'code\'>Maya.env</span> file that corresponds to the version of Maya you are developing for.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">MAYA_PLUG_IN_PATH=C:\\Users\\&lt;Username&gt;\\devkitBase\\plug-ins\\plug-ins\n\
MAYA_SCRIPT_PATH=C:\\Users\\&lt;Username&gt;\\devkitBase\\plug-ins\\scripts\n\
XBMLANGPATH=C:\\Users\\&lt;Username&gt;\\devkitBase\\plug-ins\\icons\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> The <span class=\'code\'>C:\\Users\\&lt;Username&gt;\\Documents\\maya\\&lt;version_number&gt;\\</span> directory is created when Maya is launched for the first time. Launch Maya if you do not see this directory.</p>\n\
\n\
<p>Maya will use these paths to automatically discover the plug-ins and scripts in these directories. If these paths are not set, you will need to open Maya&#39;s Plug-ins Manager and manually browse to the location of the plug-ins and scripts to load them.</p></li>\n\
<li><p>Add the <span class=\'code\'>DEVKIT_LOCATION</span> and <span class=\'code\'>MAYA_LOCATION</span> environment variables, and modify your <span class=\'code\'>PATH</span> variable to include the Maya <span class=\'code\'>bin</span> directory.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> If you have more than one version of Maya installed, only set these variables in the command window where you will be building your plug-ins and applications. Setting them in your user environment variables can result in a conflict with other versions of Maya that are installed on your system.</p>\n\
</blockquote>\n\
<p><span class=\'code\'>DEVKIT_LOCATION</span> must point to your Maya devkit installation directory.</p>\n\
<p><span class=\'code\'>MAYA_LOCATION</span> must point to the location where the version of Maya you are developing for is installed.</p>\n\
<p>Maya is installed to <span class=\'code\'>C:\\Program Files\\Autodesk\\&lt;maya_version&gt;</span> by default.</p>\n\
<p><span class=\'code\'>bash set DEVKIT_LOCATION=C:\\Users\\&lt;Username&gt;\\devkitBase\\ set MAYA_LOCATION=C:\\Program Files\\Autodesk\\&lt;maya_version&gt; set PATH=%PATH%;%MAYA_LOCATION%\\bin</span></p>\n\
<blockquote>\n\
<p><strong>Important:</strong> If <span class=\'code\'>DEVKIT_LOCATION</span> points to a path with a space in its name, you will need to put quotes around variable and its value. For example:</p>\n\
<p><span class=\'code\'>set &quot;DEVKIT_LOCATION=C:\\My Devkit Is Here&quot;</span></p>\n\
<p>If you do not put quotes around the entire assignment, the CMake command that is used to build plug-in and application samples will fail.</p>\n\
</blockquote></li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";