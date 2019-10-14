var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Maya Python API 2.0</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Maya Python API 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"maya-python-api-2.0\"></a></div>\n\
<div class=\'section\'><a id=\"overview\"></a><h2 id=\"overview\">Overview</h2></div>\n\
<p>The Maya Python API 2.0 is a new version of the Maya Python API which provides a more Pythonic workflow and improved performance. Both the new and old APIs can co-exist in the same script but objects from the two different APIs cannot be used interchangeably.</p>\n\
<p>The Python API 2.0 has a number of advantages over the original API:</p>\n\
<ul>\n\
<li>Array types are full Python sequences.</li>\n\
<li>Methods which take Maya array parameters will usually also take native Python sequences, such as arrays and tuples. Exceptions are made in some case for performance reasons.</li>\n\
<li>The outputs of methods are usually returned in their return values, not through their parameter lists. Exceptions are made in some cases for performance reasons.</li>\n\
<li>Methods which return multiple values (e.g. MFnFluid.getResolution) return them as a tuple or list, eliminating the need for MScriptUtil.</li>\n\
<li>Object attributes are preferred over set/get methods. For example you can now write <span class=\'code\'>array.sizeIncrement=64</span>.</li>\n\
<li>There are more types of exceptions used when methods fail. Not everything is a RuntimeError, as was the case in the old API.</li>\n\
<li>The new API is generally faster than the old. Up to three times faster in some cases.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";