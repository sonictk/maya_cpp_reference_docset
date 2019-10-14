var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Use MPxLocatorNode legacy fixed draw code and selection in Viewport 2.0</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Use MPxLocatorNode legacy fixed draw code and selection in Viewport 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"use-mpxlocatornode-legacy-fixed-draw-code-and-selection-in-viewport-2.0\"></a></div>\n\
<div class=\'figure\'><img src=\'developer/images/New_Odd.png\' title=\'\'></div>\n\
<p>It is possible to reuse Viewport 1 rendering and picking when using the Viewport 2.0 renderer for plug-in locators. However, this should only be considered a temporary solution to allow for an incremental migration to Viewport 2.0. The final aim should be to re-implement rendering using a geometry or subscene override for proper integration.</p>\n\
<div class=\'section\'><a id=\"requirements-and-limitations\"></a><h2 id=\"requirements-and-limitations\">Requirements and limitations</h2></div>\n\
<ul>\n\
<li>You must run Viewport 2.0 in OpenGL - Core Profile (Compatibility) or OpenGL - Legacy mode\n\
<ul>\n\
<li>OpenGL - Core Profile (strict) mode is not supported, as it does not allow a fixed function pipeline to be run.</li>\n\
<li>DirectX 11 mode is not supported.</li>\n\
</ul></li>\n\
<li>OpenGL state may not be set up in the same way as the Legacy Default Viewport. Legacy draw code should be careful not to make assumptions about the initial state.\n\
<ul>\n\
<li>It is the responsibility of the legacy draw code to set up fixed function state such as lighting, and so forth.</li>\n\
</ul></li>\n\
<li>It is the responsibility of the legacy draw code to ensure that it does not corrupt any OpenGL state.</li>\n\
<li>There is no guarantee of equivalent performance when compared to:\n\
<ul>\n\
<li>Legacy viewport drawing</li>\n\
<li>A geometry/subscene override implementation for Viewport 2.0</li>\n\
</ul></li>\n\
<li>Optimizations from Viewport 2.0 are not supported (for example, consolidation).</li>\n\
<li>Not all selection options may be supported.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";