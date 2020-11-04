var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SuperSampling within shading nodes</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>SuperSampling within shading nodes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"supersampling-within-shading-nodes\"></a></div>\n\
<p>As explained previously, you can request specific rendering information regarding the current sample position through pre-defined attributes provided during the rendering process. (See Appendix C: Rendering attributes for a complete list of rendering specific attributes and their corresponding names.) However, it is sometimes desirable to describe a hypothetical position and force a shading network evaluation to sample this hypothetical position. Some applications of this technique are bump mapping, and filtering (antialiasing).</p>\n\
<p>A shading node can mark attributes as &quot;render sources&quot; through the API call MFnAttribute::setRenderSource. If the shadingNode then sets the values of the one of these attributes, subsequent calls to request data from the datablock will force the shading network to reevaluate.</p>\n\
<p>The Developer Kit contains an example plug-in, shiftNode.cpp, that demonstrates modifying uvCoord and refPointCamera from within a texture plug-in. The uvCoord and refPointCamera are marked as &quot;renderSource&quot; attributes. The uvCoord and refPointCamera for the current sample position are requested and then subsequently shifted four times. Each time these attributes are modified, the inColor attribute is requested, and because the attributes are render sources, the request for inColor forces a shading evaluation. Thus the 2D or 3D texture connected to inColor will be evaluated four additional times for every point shaded. The inColor values are averaged which produces a blurred result.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";