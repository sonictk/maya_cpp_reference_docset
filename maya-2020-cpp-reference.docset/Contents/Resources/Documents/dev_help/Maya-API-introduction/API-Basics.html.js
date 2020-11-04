var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The Maya API</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The Maya API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-maya-api\"></a></div>\n\
<p>The Maya devkit contains C++, Python, and .NET APIs.</p>\n\
<p>Two versions of the Python API are included in the devkit. Python API 1.0 is a version of the C++ API that has been converted to Python, while Python API 2.0 is a port of the API to Python. Python API 2.0 is more pythonic than API 1.0 and contains Python-specific features.</p>\n\
<p>The Maya API is platform neutral. There are no platform-specific calls in the Maya API. However, the source code does have to be recompiled for each platform on which you plan to use your plug-in or application. The CMake build system makes building for different operating systems easier by using a single build file for all operating systems.</p>\n\
<p>The Maya API is broadly divided into proxy, wrapper, and function set classes, with Maya scene graph objects being represented by the MObject class.</p>\n\
<p>MObjects provide a handle to the Maya screen graph objects. Function sets corresponding to the MObject&#39;s internal type are used to manipulate the MObject, and consequently the underlying graph object.</p>\n\
<p>Wrappers are classes that enclose a basic object that is not a scene graph object. They define their own interfaces to manipulate the enclosed object directly.</p>\n\
<p>You can define your own graph object by extending one of the existing proxy classes. You can use the function sets associated with the proxy class you extended to manipulate your new graph object.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";