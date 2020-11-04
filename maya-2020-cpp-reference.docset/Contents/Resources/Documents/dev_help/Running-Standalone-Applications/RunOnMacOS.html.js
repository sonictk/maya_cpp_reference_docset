var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Running standalone applications on macOS</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Running standalone applications on macOS</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"running-standalone-applications-on-macos\"></a></div>\n\
<blockquote>\n\
<p><strong>Important:</strong> If you have more than one version of Maya installed, only set these variables in the terminal window where you will be running your application. Setting them in your <span class=\'code\'>.bash_profiles</span> file can result in a conflict with other versions of Maya that are installed on your system.</p>\n\
</blockquote>\n\
<p>To run a standalone application on macOS from a terminal window, set the following enviroment variables:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-sh\">export MAYA_LOCATION=/Applications/Autodesk/&lt;maya_version&gt;/Maya.app/Contents\n\
export DYLD_LIBRARY_PATH=$MAYA_LOCATION/MacOS\n\
export DYLD_FRAMEWORK_PATH=$MAYA_LOCATION/Frameworks\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";