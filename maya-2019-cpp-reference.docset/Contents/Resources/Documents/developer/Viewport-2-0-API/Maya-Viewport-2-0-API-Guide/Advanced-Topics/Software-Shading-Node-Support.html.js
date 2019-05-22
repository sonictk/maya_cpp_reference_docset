var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Software Shading Node Support</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Software Shading Node Support</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"software-shading-node-support\"></a></div>\n\
<p>A fixed set of internal Maya surface shaders is supported. These are shaders which are connected to the “surfaceShader” attribute of a shading engine. The attribute values and possibly upstream connections on these shaders are examined and the appropriate translation to a hardware shader is performed.</p>\n\
<p>For surface shaders that are plug-ins, and for currently unsupported internal Maya surface shaders, an attempt is made to also perform a translation into a suitable hardware shader. To do this, the internal logic examines the attribute names on the unknown surface shading node and attempts to map them to the parameters of Maya’s Phong fragment shader graph. Any matching attributes are treated in the same manner as the framework would for the attributes of a supported shader. Thus, matching attributes such as “color” are translated as well as connected to upstream nodes (where appropriate).</p>\n\
<p>In the image below, a plug-in “anisotropicShader” node is the surface shader assigned to the sphere in the scene. This plug-in is shipped as part of the Developer Kit and does not require any modification in order to be achieve a minimal level of support using this automatic system. The “color” and “specularColor” attributes are recognized, as are the input connections. The upstream checker and ramp textures are thus natively supported in hardware the same way they would be if they were connected to an internally provided shader.</p>\n\
<div class=\'figure\'><img src=\'developer/images/API_white_paper_section4_1_fig54_resized.png\' title=\'\'></div>\n\
<p>Figure 66</p>\n\
<p>Internally, the mapping could be as follows, where the match is made to an internal shader. The mapping on “color” equates to using an internally specified “shader” to support rendering the textures.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d55.jpg\' title=\'\'></div>\n\
<p>Figure 67</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";