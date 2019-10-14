var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shading nodes classification</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Shading nodes classification</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"shading-nodes-classification\"></a></div>\n\
<p>When registering your new shading node in Maya, you can assign a classification to your node that will determine where it appears in the Create Render Node interface. Each classification corresponds to a Tab and Frame in which it appears.</p>\n\
<p>The following is a list of classification strings and where they appear in the interface when you use them.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"45.82338902147971%\"> <col width=\"54.17661097852029%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Category</th><th class=\"table-heading\">Classification String</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">2D Textures</td><td class=\"table-body\">\"texture/2d\"</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">3D Textures</td><td class=\"table-body\">\"texture/3d\"</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Env Textures</td><td class=\"table-body\">\"texture/environment\"</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Surface Materials</td><td class=\"table-body\">\"shader/surface\"</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Volumetric Materials</td><td class=\"table-body\">\"shader/volume\"</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Displacement Materials</td><td class=\"table-body\">\"shader/displacement\"</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Lights</td><td class=\"table-body\">\"light\"</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">General Utilities</td><td class=\"table-body\">\"utility/general\"</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Color Utilities</td><td class=\"table-body\">\"utility/color\"</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Particle Utilities</td><td class=\"table-body\">\"utility/particle\"</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Image Planes</td><td class=\"table-body\">\"imageplane\"</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Glow</td><td class=\"table-body\">\"postprocess/opticalFX\"</td></tr></tbody></table>\n\
<div class=\'section\'><a id=\"implicit-connections-and-the-create-render-node-window\"></a><h2 id=\"implicit-connections-and-the-create-render-node-window\">Implicit connections and the Create Render Node window</h2></div>\n\
<p>When you create a rendering node using Create Render Node, you are really executing embedded commands that are used to create a shading node and connect them together. The creation command is &quot;shadingNode&quot; and the connection command is &quot;connectAttr&quot;. If you use the commands in the command shell window, no auxiliary nodes are created. All auxiliary nodes are created by the user interface.</p>\n\
<p>The following is a complete description of what the buttons in the Create Render Node window do. The commands are listed by what they execute; this shows you what nodes get created, and how they are connected. For some classifications, the behavior is dependent on the status of check boxes or radio buttons in the window.</p>\n\
<div class=\'section\'><a id=\"shaders\"></a><h3 id=\"shaders\">Shaders</h3></div>\n\
<div class=\'section\'><a id=\"mayasurface\"></a><h4 id=\"mayasurface\">Maya/surface</h4></div>\n\
<p>(for example, blinn)</p>\n\
<ol>\n\
<li><p>&quot;shadingNode -asShader blinn;&quot;</p>\n\
<p>The command creates the ‘blinn’ node, connects its &quot;.message&quot; attribute to the &quot;.shaders&quot; attribute on the defaultShaderList1 node - this registers the node as a shader.</p>\n\
<p>If the &quot;Include Shading Group with Materials&quot; check box is checked, then the following also occurs:</p></li>\n\
<li><p>&quot;sets -renderable true -noSurfaceShader true -empty -name blinn1SG;&quot;</p>\n\
<p>&quot;connectAttr -f blinn1.outColor blinn1SG.surfaceShader;&quot;</p>\n\
<p>These command create a new shadingGroup and make the shading group’s surface shader the newly created blinn node.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"mayavolumetric\"></a><h4 id=\"mayavolumetric\">Maya/volumetric</h4></div>\n\
<p>(for example, lightFog)</p>\n\
<ol>\n\
<li><p>&quot;shadingNode -asShader lightFog;&quot;</p>\n\
<p>Same as above, used to register the node as a shader.</p>\n\
<p>If the &quot;With Shading Group&quot; check box is checked, then the following also occurs:</p></li>\n\
<li><p>&quot;sets -renderable true -noSurfaceShader true -empty -name lightFog1SG;&quot;</p>\n\
<p>&quot;connectAttr -f lightFog1.outColor lightFog1SG.volumeShader;&quot;</p>\n\
<p>This will create a new shading group and make the shading group’s volume shader the newly created light fog node.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"mayadisplacement\"></a><h4 id=\"mayadisplacement\">Maya/displacement</h4></div>\n\
<p>(for example, displacementShader)</p>\n\
<ol>\n\
<li><p>&quot;shadingNode -asShader displacementShader;&quot;</p>\n\
<p>Same as above.</p>\n\
<p>If the &quot;With Shading Group&quot; check box is checked, then the following also occurs:</p></li>\n\
<li><p>&quot;sets -renderable true -noSurfaceShader true -empty -name displacementShader1SG;&quot;</p>\n\
<p>&quot;connectAttr -f displacementShader1.displacement DisplacementShader1SG.displacementShader;&quot;</p>\n\
<p>Same as above, except that the new shader becomes the displacement shader for the new shading group.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"textures\"></a><h3 id=\"textures\">Textures</h3></div>\n\
<div class=\'section\'><a id=\"d-textures\"></a><h4 id=\"d-textures\">2D Textures</h4></div>\n\
<p>(for example, checker)</p>\n\
<ol>\n\
<li><p>&quot;shadingNode -asTexture checker;&quot;</p>\n\
<p>Creates the texture node, registers the node as a texture.</p>\n\
<p>If the &quot;With New Texture Placement&quot; button is checked, then the following are also executed:</p></li>\n\
<li><p>&quot;shadingNode -asUtility place2dTexture;&quot;</p>\n\
<p>&quot;connectAttr place2dTexture1.outUV checker1.uv;&quot;</p>\n\
<p>Creates a 2d texture placement and connects it to the texture node.</p>\n\
<p>If the &quot;As Projection&quot; button is checked, then the following are also executed:</p></li>\n\
<li><p>&quot;shadingNode -asTexture projection;&quot;</p>\n\
<p>&quot;shadingNode -asUtility place3dTexture;&quot;</p>\n\
<p>&quot;connectAttr place3dTexture1.wim\\[0\\] projection1.pm;&quot;</p>\n\
<p>&quot;connectAttr checker1.outColor projection1.image;&quot;</p>\n\
<p>Creates a projection 3d texture with placement, and connects the newly created 2d texture to its &quot;image&quot; attribute.</p>\n\
<p>If the &quot;As Stencil&quot; button is checked, then the following are also executed:</p></li>\n\
<li><p>&quot;shadingNode -asTexture stencil;&quot;</p>\n\
<p>&quot;shadingNode -asUtility place2dTexture;&quot;</p>\n\
<p>&quot;connectAttr place2dTexture2.outUV stencil1.uv;&quot;</p>\n\
<p>&quot;connectAttr checker1.outColor stencil1.image;&quot;</p>\n\
<p>Creates a stencil 2d texture with placement, and connects the newly created 2d texture to its &quot;image&quot; attribute.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"d-textures-1\"></a><h4 id=\"d-textures-1\">3D Textures</h4></div>\n\
<p>(for example, brownian)</p>\n\
<ol>\n\
<li><p>&quot;shadingNode -asTexture brownian;&quot;</p>\n\
<p>Creates the texture node, registers the node as a texture.</p>\n\
<p>If the &quot;With New Texture Placement&quot; button is checked, then the following are also executed:</p></li>\n\
<li><p>&quot;shadingNode -asUtility place3dTexture;&quot;</p>\n\
<p>&quot;connectAttr place3dTexture2.wim\\[0\\] brownian1.pm;&quot;</p>\n\
<p>Creates a new 3d texture placement and connects its &quot;.worldInverseMatrix&quot; to the &quot;placementMatrix&quot; attribute of the newly created texture node.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"env-textures\"></a><h4 id=\"env-textures\">Env Textures</h4></div>\n\
<p>(for example, sphere)</p>\n\
<p>Identical to texture/3d above.</p>\n\
<div class=\'section\'><a id=\"lights\"></a><h3 id=\"lights\">Lights</h3></div>\n\
<p>(for example, pointLight)</p>\n\
<p>&quot;shadingNode -asLight pointLight;&quot;</p>\n\
<p>Creates the light node, and registers it as a light.</p>\n\
<div class=\'section\'><a id=\"utilities\"></a><h3 id=\"utilities\">Utilities</h3></div>\n\
<div class=\'section\'><a id=\"all-utilities\"></a><h4 id=\"all-utilities\">all utilities</h4></div>\n\
<p>(for example, imagePlane)</p>\n\
<p>&quot;shadingNode -asTexture -asUtility imagePlane;&quot;</p>\n\
<p>Creates the utility node, and registers it as a utility.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";