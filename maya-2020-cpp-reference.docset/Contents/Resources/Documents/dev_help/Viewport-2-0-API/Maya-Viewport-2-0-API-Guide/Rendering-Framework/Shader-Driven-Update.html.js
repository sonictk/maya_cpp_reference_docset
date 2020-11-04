var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader Driven Update</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Shader Driven Update</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"shader-driven-update\"></a></div>\n\
<p>The renderer is purely “shader based.” In other words, everything is rendered with a shader and shader require­ments are the driving force to determine geometric data requirements. Changes in geometric parameters may require data updates, but they are with reference to the requirements of a shader.</p>\n\
<p>When discussing “shaders,” these are not Maya shading networks but rather shaders that the renderer supports internally. All internal shaders are <strong>programmable hardware shaders</strong> and all recommended API interfaces also assume the usage of shaders. The concept of <strong>fixed-function</strong> rendering is no longer used nor exposed as a recom­mended method of drawing.</p>\n\
<p>Each shader, whether used for drawing UI elements or for surface shading, specifies a set of data requirements. Requirements from all shaders affecting a renderable object are aggregated and used to inform the renderable object of the appropriate geometric data it needs to provide.</p>\n\
<p>Both the shader specification and the geometric data may or may not be up-to-date. The change management mechanism propagates change requirements to both as required.</p>\n\
<p>To illustrate this, a simplified scenario is shown:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f4203.jpg\' title=\'\' /></div>\n\
<p>Figure 4: Shows two shaders and a renderable object and their change (dirtying) dependencies and data requirement dependencies.</p>\n\
<p>The Maya constructs for the (top) shader and for the renderable object inform each, respectively, of any changes. The renderer itself (“Render Options”) may also propagate changes to both. A second (bottom) shader has no Maya object and could be used for UI drawing for instance. It also specifies requirements. When an update is required, all shaders provide requirements to the renderable object and the object fulfills those requirements by updating the appropriate geometric data.</p>\n\
<p>The end result of the update phase is newly created or updated render items.</p>\n\
<p>Each render item keeps track of both the shader as well as the data as a unit. Both shaders and data can be shared across different render items.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f4209.jpg\' title=\'\' /></div>\n\
<p>Figure 5: Data and shaders are independent of any individual render item and thus can be shared across multiple render items.</p>\n\
<p>A concrete, though slightly contrived example of the above scenario would be as follows:</p>\n\
<ol>\n\
<li>A Maya object has been deformed.</li>\n\
<li>The Maya shader assigned to the object requires bump mapping.</li>\n\
</ol>\n\
<p>The Maya object informs the renderable object of a change in geometry (topological change). The Maya shading network informs its corresponding shader of a new shading algorithm requirement, namely tangents and bitan­gents. The renderer informs the renderable object of the requirement for a “UI” shader for drawing control points which requires a second set of positions and color. The aggregate requirement would then be two sets of positions and one set each of colors, normals, tangents and bitangents.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<img src=\"dev_help/images/aa0f42af.jpg\" /><a name=\"GUID-ECB32FDC-9BE4-492E-BC98-AB49229C7651\"></a>\n\
<p class=\"table-body\">\n\
Figure 6: In this snapshot, a renderable is used to draw the filled torus with bump mapping. Another renderable is used to draw the control points. Though not mentioned in the sample scenario, a third is used to render the isoparms.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<img src=\"dev_help/images/aa0f42d1.jpg\" /><a name=\"GUID-35F5AFFE-BD2B-46AE-AA47-D75FCD46A5B6\"></a>\n\
<p class=\"table-body\">\n\
Figure 7: Render items which could be produced for the scenario. Positions (P1), normals, tangents and bitangents are referenced for the bump shader. A second set of positions (P2) and color are refer­enced for the control vertex shader. The isoparms render item is not shown.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";