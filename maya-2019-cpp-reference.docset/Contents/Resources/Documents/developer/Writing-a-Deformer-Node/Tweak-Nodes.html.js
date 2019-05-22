var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Tweak Nodes</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Tweak Nodes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"tweak-nodes\"></a></div>\n\
<p>The translation of vertices on shapes in Maya is known as a tweak. The shapes without construction history can add tweak deltas directly into their vertex position data. However, the shapes with construction history need to store the tweaks as deltas that are added to the shape data coming through the history attribute.</p>\n\
<p>When a deformer is added to a shape in Maya, tweaks must be prevented from existing on the shape. The following example of a seal defines why this is required.</p>\n\
<div class=\'figure\'><img src=\'developer/images/deformer_tweak.png\' title=\'\'></div>\n\
<p>A seal&#39;s initial state is shown on the left, the seal&#39;s tweaked nose is shown in the middle, and the seal&#39;s rotated neck is shown on the right.</p>\n\
<p>In the initial state, the seal shape is skinned to a skeleton so that rotating the various joints creates a smooth skinning deformation. Later, the seal&#39;s nose is grown by moving a few vertices in X axis. In this example, there is no tweak node, so the vertex deltas are stored in the shape node. Everything looks alright until the neck is rotated. Because the tweaks get added after the skinning deformation, the deltas move the nose vertices in X axis even though the seal&#39;s nose is no longer aligned with the X axis. To rotate the seal&#39;s neck without disfiguring the nose, the skinning algorithm must act on the seal&#39;s tweaked nose instead of having the tweaks act on the seal&#39;s skinned nose.</p>\n\
<p>To resolve this issue, a tweak deformer is created automatically and inserted on the front of the deformer chain. If the shape being deformed has existing tweaks or animated control vertices (CVs), the tweaks and animation are moved into the tweak node. Otherwise, the tweak node is left empty until you move some CVs (or key them). New tweaks are also added to the tweak node.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";