var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MStatus</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MStatus</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"mstatus\"></a></div>\n\
<p>The MStatus class can determine if a method has failed.</p>\n\
<p>Many API methods either return an instance of the MStatus class, or fill in an instance passed as an optional parameter. The MStatus class contains the <span class=\'code\'>error()</span> method, and an overloaded operator <span class=\'code\'>bool</span>, both of which return false if the instance is holding an error status. This means you can check the success of a call quickly, for example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::clearSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#af729d8e7ac1ba9869ff698d381f72a3a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::clearSelectionList</a>();\n\
if (!status) {\n\
    // Do error handling\n\
    ...\n\
}\n\
\n\
</pre></div><p>If the MStatus instance contains an error, you can do one of several things:</p>\n\
<ul>\n\
<li>Use the statusCode method to retrieve an element of the <span class=\'code\'>MStatusCode</span> enum that indicates the reason for the failure.</li>\n\
<li>Use the errorString method to retrieve an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a></span> containing a detailed description of the error.</li>\n\
<li>Use the perror method to print the detailed description of the error to standard error, optionally pre-pended by a string you provide.</li>\n\
<li>Use the overloaded equality and inequality operators to compare the instance to a specific <span class=\'code\'>MStatusCode</span>.</li>\n\
<li>Reset the instance to the successful state with the clear method.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";