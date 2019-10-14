var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Writing a shading node plug-in</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Writing a shading node plug-in</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"writing-a-shading-node-plug-in\"></a></div>\n\
<p>Custom dependency graph nodes include the header file:</p>\n\
<p><`maya pxnode.h`=\"\"><p>\n\
<p>and then derive from the class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span>. To build your own shading node as a plug-in to Maya, follow the same guidelines for making a Dependency Node (see <a href=\'#!/url=./developer/Dependency-graph-plug-ins/About-the-dependency-graph.html\' title=\'\'>Dependency Graph (DG) nodes</a>).</p>\n\
<p>You request specific rendering information for your plug-in through pre-defined attributes provided during the rendering process. (See <a href=\'#!/url=./developer/Appendices/Appendix-B-Rendering-attributes.html\' title=\'\'>Appendix C: Rendering attributes</a> for a complete list of rendering specific attributes and their corresponding names.)</p>\n\
<p>There are currently five different types of shading nodes that can be created with Maya.</p>\n\
<ul>\n\
<li>Surface shaders</li>\n\
<li>Light shaders</li>\n\
<li>Texture shaders</li>\n\
<li>Displacement shaders</li>\n\
<li>Volumetric shaders</li>\n\
</ul>\n\
<p>Shading nodes in Maya are connected to form shader networks. Any Maya dependency node can be part of a shader network. Instead of hard-coding many effects into each shader, texture and light, the same functionality is available in Maya through Utility nodes which can implement the same effects and more. In addition, shading nodes can contribute to more than one shading network at a time.</p>\n\
<p>The following example shows Maya’s Hypergraph display of a simple Lambert shading node (highlighted) that has a texture node as an input connected to the Lambert node’s color attribute.</p>\n\
<p>The illustration also shows a placement node connected to the checker texture for transforming texture coordinates. Each arrow denotes an attribute connection between two dependency nodes.</p>\n\
<div class=\'figure\'><img src=\'developer/images/1.png\' title=\'\'></div>\n\
<p>A shading network is not complete until is has been connected to a Shading Group. A Shading Group is a &quot;Renderable Set&quot; which contains a list of objects and/or components of objects which will all be rendered using the same shader network. In addition to its list of objects, the shading group also maintains a connection to a shading network. The shading group is the connection point between objects in the scene, and a shader network which describes how they should be rendered.</p>\n\
<p>The following shows the shader network connected to a shading group (highlighted) and assigned to a default NURBS sphere. Notice the directional light in the scene used for illumination.</p>\n\
<div class=\'figure\'><img src=\'developer/images/2.png\' title=\'\'></div>\n\
<p>As you build a complex shader network with various shading nodes, you can see that the all the connections lead into the Lambert nodes inputs (highlighted) and the computed result of the Lambert shading node’s output is connected to a shading group.</p>\n\
<div class=\'figure\'><img src=\'developer/images/3.png\' title=\'\'></div>\n\
</`maya>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";