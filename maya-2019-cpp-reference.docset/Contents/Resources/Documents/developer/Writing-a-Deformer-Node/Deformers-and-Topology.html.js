var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Deformers and Topology</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Deformers and Topology</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"deformers-and-topology\"></a></div>\n\
<p>Topology refers to the underlying structure of a shape, for example, a mesh&#39;s topology defines how the vertices are connected to the edges and the edges are connected to the faces for building the mesh. The topology of a NURBS surface is the number of divisions in the UV space. In the construction history, when the topology of a shape is changed frequently, it reorders the vertices. For example, if you select some vertices in a polygon with history and delete them, the polygon reorders the other vertices to maintain a tight packing.</p>\n\
<p>Several deformers store the weights per-vertex including:</p>\n\
<ul>\n\
<li>clusters</li>\n\
<li>rigid skinning (jointClusters)</li>\n\
<li>smooth skinning (skinClusters)</li>\n\
<li>weighted control point plug-in deformers (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDeformerNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_deformer_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxDeformerNode</a></span>)</li>\n\
</ul>\n\
<p>Many deformers store weights using the index of the weighted vertex. If you change the vertex ordering after the deformer is applied, the vertex weight indices in the final shape might be different than what they are inside the deformer. This is because the construction history preserves the original topology in the deformer and modifies it later. This issue does not occur if you change the vertex ordering prior to the deformer because the weights get correlated with the new vertices.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";