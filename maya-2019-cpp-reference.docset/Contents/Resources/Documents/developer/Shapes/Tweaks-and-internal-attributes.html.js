var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Tweaks and internal attributes</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Tweaks and internal attributes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"tweaks-and-internal-attributes\"></a></div>\n\
<p>Shapes that have input history, for instance, another node feeding in input geometry, need some way of storing any offsets (or tweaks) applied to vertex positions. Each time the input geometry changes, the shape has to recompute. By storing any tweaks in a separate attribute, the tweaks can be added to the input vertex positions forming the output geometry.</p>\n\
<p>If there is no input history, you do not have to store the tweaks in a separate attribute. Instead, vertex movements can be applied directly to the output surface.</p>\n\
<p>Marking attributes as internal, using <span class=\'code\'>MFnAttribute::setInternal</span>, allows you to override the behavior of setAttr and getAttr so you can deal with tweaks in a different manner depending on whether there is input history.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Using internal attributes is entirely up to you. This is a design issue and using internal attributes is not necessarily the only way to handle tweaks.</p>\n\
</blockquote>\n\
<p>Input history implies that some other node is supplying your shape with input data. Creator nodes are dependency nodes which are responsible for creating specific types of shape data. Typically, a shape will have one or more creator nodes. For instance, a polygonal shape may have creator nodes for generating sphere data and cube data. See <span class=\'code\'>apiMeshCreator</span> in the <span class=\'code\'>apiMeshShape</span> sample plug-in for an example of a creator node.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";