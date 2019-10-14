var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Error logging</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Error logging</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"error-logging\"></a></div>\n\
<p>As well as using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a></span> class, you can check for failures in API methods using <em>error logging</em>.</p>\n\
<p>To enable and disable error logging</p>\n\
<ol>\n\
<li>Do one of the following:\n\
<ul>\n\
<li>From MEL, use the -errlog flag of the openMayaPref command.</li>\n\
<li>From the plug-in, use the methods <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::startErrorLogging()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a1953173d5054794d0b49081d15155bea&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::startErrorLogging()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::stopErrorLogging()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#adc6feb0567f8a0150d6c522af47351a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::stopErrorLogging()</a></span>.</li>\n\
</ul></li>\n\
</ol>\n\
<p>Once you enable error logging, Maya creates a log file and each time an API method fails, Maya writes a description of the error to the file along with a mini stack trace that shows where the call to the routine was made.</p>\n\
<p>The default name of this file is <em>OpenMayaErrorLog</em> located in the current directory. This can be changed, however, by calling:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::setErrorLogPathName\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a87d6651b64637c4a1e31887f322db3ac&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::setErrorLogPathName</a>().\n\
\n\
<blockquote>\n\
</blockquote></pre></div><p>**<a href=\'#!/url=./developer/Maya-API-introduction/Tip:**/\' title=\'\'>Tip:**</a> Plug-ins can also use the method, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::doErrorLogEntry()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#acd4a983f49b5dd53a26167eb28cf3064&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::doErrorLogEntry()</a></span> to add their own messages to the error log.</p>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";