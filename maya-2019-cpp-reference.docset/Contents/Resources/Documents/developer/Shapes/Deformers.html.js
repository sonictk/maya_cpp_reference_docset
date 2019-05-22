var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Deformers</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Deformers</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"deformers\"></a></div>\n\
<p>Deformers in Maya operate on control point based shapes with components defined for the control points attribute.</p>\n\
<p>To support Maya’s deformations, you must provide the following:</p>\n\
<ul>\n\
<li>An <a href=\'#!/url=./developer/Shapes/Deformers.html#mpxgeometrydata\' title=\'\'>MPxGeometryData</a> derived class encapsulating your geometry</li>\n\
<li>A <a href=\'#!/url=./developer/Shapes/Deformers.html#localshapeinattr\' title=\'\'>localShapeInAttr</a> function</li>\n\
<li>A <a href=\'#!/url=./developer/Shapes/Deformers.html#localshapeoutattr\' title=\'\'>localShapeOutAttr</a> function</li>\n\
<li>A <a href=\'#!/url=./developer/Shapes/Deformers.html#worldshapeoutattr\' title=\'\'>worldShapeOutAttr</a>function</li>\n\
<li>An <a href=\'#!/url=./developer/Shapes/Deformers.html#mpxgeometryiterator\' title=\'\'>MPxGeometryIterator</a> for your geometry</li>\n\
<li>A <a href=\'#!/url=./developer/Shapes/Deformers.html#match\' title=\'\'>match</a> function</li>\n\
<li>A <a href=\'#!/url=./developer/Shapes/Deformers.html#createfullvertexgroup\' title=\'\'>createFullVertexGroup</a> function</li>\n\
<li>A <a href=\'#!/url=./developer/Shapes/Deformers.html#geometrydata\' title=\'\'>geometryData</a> function</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"mpxgeometrydata\"></a><h2 id=\"mpxgeometrydata\">MPxGeometryData</h2></div>\n\
<p>You must provide a geometry data class that encapsulates your geometry in order for deformers to work.</p>\n\
<div class=\'section\'><a id=\"localshapeinattr\"></a><h2 id=\"localshapeinattr\">localShapeInAttr</h2></div>\n\
<p>This function must be overridden to return the attribute corresponding to the input history for your shape. This attribute must be the same type as your geometry data.</p>\n\
<div class=\'section\'><a id=\"localshapeoutattr\"></a><h2 id=\"localshapeoutattr\">localShapeOutAttr</h2></div>\n\
<p>This function must be overridden to return the attribute representing the output geometry for your shape. This attribute must be the same type as your geometry data.</p>\n\
<div class=\'section\'><a id=\"worldshapeoutattr\"></a><h2 id=\"worldshapeoutattr\">worldShapeOutAttr</h2></div>\n\
<p>This function must be overridden to return the output array attribute representing instances of the output geometry for your shape. This attribute must be the same type as your geometry data. Each element in the array will represent a particular instance of your shape.</p>\n\
<div class=\'section\'><a id=\"mpxgeometryiterator\"></a><h2 id=\"mpxgeometryiterator\">MPxGeometryIterator</h2></div>\n\
<p>Points are manipulated by deformers through an iterator which you define and implement.</p>\n\
<div class=\'section\'><a id=\"match\"></a><h2 id=\"match\">match</h2></div>\n\
<p>This function must be overridden to check for matches between a selection type / component list, and the type of this shape / or its components. This is used by sets and deformers to make sure that the selected components fall into the &quot;vertex only&quot; category.</p>\n\
<div class=\'section\'><a id=\"createfullvertexgroup\"></a><h2 id=\"createfullvertexgroup\">createFullVertexGroup</h2></div>\n\
<p>This method is used by Maya when it needs to create a component containing every vertex (or control point) in the shape. This will get called if you apply some deformer to the whole shape, i.e. select the shape in object mode and add a deformer to it.</p>\n\
<div class=\'section\'><a id=\"geometrydata\"></a><h2 id=\"geometrydata\">geometryData</h2></div>\n\
<p>This function should return the input data object for the surface. This gets called internally by Maya to get at the shapes grouping (set) information.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";