var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Image based lighting</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Image based lighting</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"image-based-lighting\"></a></div>\n\
<div class=\'section\'><a id=\"classifying-a-plug-in-node-as-an-image-light\"></a><h2 id=\"classifying-a-plug-in-node-as-an-image-light\">Classifying a plug-in node as an image light</h2></div>\n\
<p>When registering a plug-in node, it is possible to opt-in to use the internal hardware lighting evaluation for an environment light by specifying a classification with the root. This allows the plug-in node to behave like an internal IBL (image) light in Maya:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">/drawdb/light/image\n\
</pre></div><p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">/drawdb/light/image/environment\n\
</pre></div><p>When specified, a default 3d UI drawing implementation is used. If an explicit override classification is supplied, then that override will be used for drawing.</p>\n\
<p>If multiple nodes use an image classification, then only the first will be considered to contribute to internal lighting.</p>\n\
<p>The aiSkyDomeLight Arnold for Maya plug-in light uses this classification, and therefore supports environment lighting.</p>\n\
<div class=\'section\'><a id=\"evaluation\"></a><h2 id=\"evaluation\">Evaluation</h2></div>\n\
<p>The internal hardware lighting evaluation currently supports the following attributes if they are defined on the Maya node:</p>\n\
<ul>\n\
<li>color: A 3 float color attribute. <strong>This attribute must be defined</strong>; otherwise, your node will appear black. If a file texture node is connected to this attribute, the disk image will be used as the input environment map. Any other upstream network configuration will be baked and used as the input image. If there is no upstream network, then the attribute color will be used as the input image. The input image is assumed to be in lat-long format.</li>\n\
<li>envRotationY: By default, the input image is rotated 180 degrees in Y for lookup. If this attribute exists on the node, then it can be set to a different user defined value.</li>\n\
<li>sampling: Specifies the resolution to perform baking of an upstream network as required. Values 1 to 4 correspond to increasing values in image dimension.</li>\n\
<li>intensity or exposure: Used to compute color gain which is used during map lookup.</li>\n\
</ul>\n\
<p>Given the color input, two maps are generated internally for shader usage: an <strong>irradiance environment map</strong> and a <strong>specular environment map</strong>.</p>\n\
<p>The specular map is a 3d map with each Z slice containing samples at different levels of specularity.</p>\n\
<p>An example is shown below. These images represent the generated specular 3d map with 8 levels of sampling.</p>\n\
<div class=\'figure\'><img src=\'developer/images/IBL_IrradiancePower.png\' title=\'\'></div>\n\
<div class=\'figure\'><img src=\'developer/images/IBL_SpecPower.png\' title=\'\'></div>\n\
<p>This image represents the generated irradiance 2d texture.</p>\n\
<div class=\'figure\'><img src=\'developer/images/IBL_Irradiance_inputmap.png\' title=\'\'></div>\n\
<p>This image shows the input environment texture.</p>\n\
<div class=\'figure\'><img src=\'developer/images/IBL_hdmi_inputmap.png\' title=\'\'></div>\n\
<p>This image represents a blinn shader using the example environment maps, as specified on a plug-in node that is classified as an image light.</p>\n\
<div class=\'figure\'><img src=\'developer/images/IBL_blinn_materialViewer.png\' title=\'\'></div>\n\
<div class=\'section\'><a id=\"api-access\"></a><h2 id=\"api-access\">API Access</h2></div>\n\
<p>When writing shader fragments, environment data can be accessed implicitly by specifying input shader properties with the following names:</p>\n\
<ul>\n\
<li>IrradianceEnv: values computed from the irradiance map input.</li>\n\
<li>SpecularEnv: values computed from the specular environment input.</li>\n\
</ul>\n\
<p>For example, the following is a combiner which takes IrradianceEnv and SpecularEnv as inputs to compute a final color.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;fragment uiName=&quot;myShaderCombiner&quot; name=&quot;myShaderCombiner&quot; type=&quot;plumbing&quot; class=&quot;ShadeFragment&quot; version=&quot;1.0&quot; feature_level=&quot;0&quot;&gt;\n\
    &lt;description&gt;&lt;![CDATA[Combines inputs from shader fragments.]]&gt;&lt;/description&gt;\n\
    &lt;properties&gt;\n\
        &lt;float3 name=&quot;color&quot; /&gt;\n\
        &lt;float3 name=&quot;specularColor&quot; /&gt;\n\
        &lt;float name=&quot;Ks&quot; /&gt;\n\
        &lt;float name=&quot;Kd&quot; /&gt;\n\
        &lt;float3 name=&quot;IrradianceEnv&quot; /&gt;\n\
        &lt;float3 name=&quot;SpecularEnv&quot; /&gt;\n\
    &lt;/properties&gt;\n\
    &lt;values&gt;\n\
        &lt;float3 name=&quot;color&quot; value=&quot;1.0 1.0 1.0&quot; /&gt;\n\
        &lt;float3 name=&quot;specularColor&quot; value=&quot;0.0 0.0 0.0&quot; /&gt;\n\
        &lt;float name=&quot;Ks&quot; value=”0.2”/&gt;\n\
        &lt;float name=&quot;Kd&quot; value=“0.8”/&gt;\n\
        &lt;float3 name=&quot;IrradianceEnv&quot; value=&quot;0.0 0.0 0.0&quot; /&gt;\n\
        &lt;float3 name=&quot;SpecularEnv&quot; value=&quot;0.0 0.0 0.0&quot; /&gt;\n\
    &lt;/values&gt;\n\
    &lt;outputs&gt;\n\
        &lt;struct name=&quot;myShaderCombiner&quot; struct_name=&quot;mayaSurfaceShaderOutput&quot; /&gt;\n\
    &lt;/outputs&gt;\n\
    &lt;implementation&gt;\n\
        // Sample implementation using environment inputs\n\
        &lt;implementation render=&quot;OGSRenderer&quot; language=&quot;Cg&quot; lang_version=&quot;2.1&quot;&gt;\n\
            &lt;function_name val=&quot;myShaderCombiner&quot; /&gt;\n\
            &lt;source&gt;\n\
                &lt;![CDATA[\n\
                mayaSurfaceShaderOutput myShaderCombiner(\n\
                float3 color,\n\
                float3 specularColor,\n\
                float Ks,\n\
                float Kd,\n\
                float3 IrradianceEnv,\n\
                float3 SpecularEnv)\n\
{\n\
    mayaSurfaceShaderOutput result;\n\
    float3 diffuse = color * IrradianceEnv * Kd;\n\
    float3 specular = specularColor * SpecularEnv * Ks;\n\
\n\
    result.outColor = diffuse + specular;\n\
    result.outTransparency = float3(0.0f, 0.0f, 0.0f);\n\
    result.outGlowColor = float3(0.0f, 0.0f, 0.0f);\n\
    result.outMatteOpacity = float3(-1.0e+06f, -1.0e+06f, -1.0e+06f);\n\
    result.outSurfaceFinal = float4(result.outColor, 1.0f);\n\
    return result;\n\
}\n\
</pre></div><p>Implicit binding is performed for viewport and batch rendering if image based lights exist in the Maya scene. Implicit environment lighting binding is performed for the Material Viewer in the Hypershade, when the Hardware renderer is selected. Hardware swatch rendering does not bind any environment lighting.</p>\n\
<p>The <span class=\'code\'>kIrradianceEnvironment</span> and <span class=\'code\'>kSpecularEnvironment</span> enums on the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::getInternalTexture()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#ae73c53b8f05ae3a36dfb3716a7b67f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::getInternalTexture()</a></span> interface allow for explicit access to internal irradiance and specular environment maps.</p>\n\
<p>The textures are available for the first image light which is active at the time that the draw context is available.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";