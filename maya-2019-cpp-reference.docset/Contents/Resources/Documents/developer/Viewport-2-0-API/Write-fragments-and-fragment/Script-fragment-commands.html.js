var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Script fragment commands</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Script fragment commands</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"script-fragment-commands\"></a></div>\n\
<p>The following is a list of commands that you can include in your script fragment xml files. For more information regarding script fragments, see <a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment.html\' title=\'\'>Write fragments and fragment graphs to render to the viewport</a>.</p>\n\
<ul>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#acquiretarget\' title=\'\'>AcquireTarget</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#settarget\' title=\'\'>SetTarget</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setdepthstencil\' title=\'\'>SetDepthStencil</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#releasetargets\' title=\'\'>ReleaseTargets</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#releaseall\' title=\'\'>ReleaseAll</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#clear\' title=\'\'>Clear</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setcamera\' title=\'\'>SetCamera</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setviewport\' title=\'\'>SetViewport</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setscissorrect\' title=\'\'>SetScissorRect</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#seteffect\' title=\'\'>SetEffect</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#seteffectparameter\' title=\'\'>SetEffectParameter</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#settexture\' title=\'\'>SetTexture</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setstate\' title=\'\'>SetState</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setrenderparameter\' title=\'\'>SetRendererParameter</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#declare\' title=\'\'>Declare</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setparameter\' title=\'\'>SetParameter</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#if\' title=\'\'>If</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#ifnot\' title=\'\'>IfNot</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#else\' title=\'\'>Else</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#endif\' title=\'\'>EndIf</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#call\' title=\'\'>Call</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#render\' title=\'\'>Render</a></li>\n\
<li><a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#setstatecommand\' title=\'\'>SetStateCommand</a></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"acquiretarget\"></a><h2 id=\"acquiretarget\">AcquireTarget</h2></div>\n\
<p>Acquires a render target from the cache that is of the given size and format, and adds it to the local variables. This is similar to acquiring an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderTarget\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderTarget</a></span>.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;acquireTarget \n\
    name=&quot;beauty&quot; \n\
    format=&quot;EFORMAT_R32G32B32A32_FLOAT&quot;\n\
    size=&quot;@finalDesc.Size&quot; \n\
    relSize=&quot;1.0,1.0&quot;\n\
    msaa=&quot;@finalDesc.NumMSAASamples&quot;\n\
/&gt;\n\
</pre></div><p>Attributes</p>\n\
<ul>\n\
<li><em>name</em> - the name the new target will be given in the current context. After being acquired, targets are always referred to by name; therefore, local target names should be kept unique within the context of a frame. This is a required attribute.</li>\n\
<li><p><em>format</em> – the name of the raster format that should be used when creating the target. The format specifies the number of channels in the target, and the size and ordering of channels.</p>\n\
<p>See <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRasterFormat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/namespace_m_h_w_render.html#ab8dcc38685c6e5601a32fb70764742dc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MHWRender::MRasterFormat</a></span> for available values; for example, EFORMAT_<format> corresponds to k<format>.<p>\n\
<p>Note that the <em>format</em> parameter accepts the @ notation. The @ notation gets the value from a parameter of the fragment referred to by the @. For example, <a href=\'mailto:**format=&quot;@final\' title=\'\'>**format=&quot;@final</a>”** will find a parameter on the current fragment called “final”, ensure that “final” is a texture or target parameter, and then set the new target’s format to be the same as that of the texture or target in “final”. Format is a required attribute.</p></format></format></li>\n\
<li><p><em>size</em> – the size of the target to be created, represented as a list of integers, separated by commas; for example, “16,16”. Accepted sizes are hardware dependent. Note that the size parameter, like the format parameter, accepts the @ notation. The @ notation gets the value from a parameter of the fragment referred to by the @. For example, <strong>size <a href=\'mailto:=&quot;@final\' title=\'\'>=&quot;@final</a>”</strong> will find a parameter on the current fragment called “final”, ensure that “final” is a texture or target parameter, and then set the new target’s size to be the same as that of the texture or target in “final”. <em>size</em> is a required attribute.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> <span class=\'code\'>final</span> denotes the buffer that results should be drawn into at the end of the operation.</p>\n\
</blockquote>\n\
<p>To create a new offscreen buffer, you may want to obtain the properties from <span class=\'code\'>finalDesc</span>, which is a description of <span class=\'code\'>final</span>.</p></li>\n\
<li><em>relSize</em> – relative size is an optional attribute that multiples the values given in the size attribute to obtain the final size used for creating the target. It denotes the width (x) and height (y) scale, and is represented as a list of 2 floating point numbers, separated by commas; for example, “0.5,0.5”. The relative size attribute does not accept the @ notation, but if the size parameter is indirect, the indirect size will be scaled by the relative size.</li>\n\
<li><p><em>msaa</em> - sample count for multi-sample anti-aliasing</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"settarget\"></a><h2 id=\"settarget\">SetTarget</h2></div>\n\
<p>Sets the given target to the given target slot on the device. The target should have been previously acquired or provided by a parameter prior to its use in setTarget.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setTarget\n\
    index=&quot;0&quot; \n\
    value=&quot;beauty&quot;\n\
/&gt;\n\
</pre></div><p>Attributes</p>\n\
<ul>\n\
<li><p><em>index</em> - the index of the target being set. 4 simultaneous targets are supported, named “0” through “3”. <em>index</em> is a required attribute, and must be an integer from 0 to 3.</p></li>\n\
<li><p><em>value</em> - the name of the target to be set to the device. This target should be in the local cache or provided by a referenced parameter. Note that the <em>value</em> parameter accepts the @ notation. The @ notation gets the value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@final\' title=\'\'>=&quot;@final</a>”</strong> will find a parameter on the current fragment called “final”, ensure that “final” is a target parameter, and then set the target held by “final” to the device’s target at the given index. Value is a required attribute. The empty string “” is treated as NULL and de-references the target. This is done so that <a href=\'#!/url=./developer/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#releasetargets\' title=\'\'>ReleaseTargets</a> can function correctly.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setdepthstencil\"></a><h2 id=\"setdepthstencil\">SetDepthStencil</h2></div>\n\
<p>Sets the given target to the depth stencil buffer for the device. The target should have been previously acquired or provided by a parameter prior to its use in setDepthStencil.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setDepthStencil \n\
    value=&quot;myDepthStencil&quot;\n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>value</em> - the name of the target to be set to the device’s depth stencil buffer. This target should be in the local cache or provided by a referenced parameter, and must have been created with a depth format. Note that the <em>value</em> parameter accepts the @ notation. The @ notation gets the value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@depthIn\' title=\'\'>=&quot;@depthIn</a>”</strong> will find a parameter on the current fragment called “depthIn”, ensure that “depthIn” is a depth target parameter, and then set the target held by “depthIn” to the device. Value is a required attribute. The empty string “” is treated as NULL.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"releasetargets\"></a><h2 id=\"releasetargets\">ReleaseTargets</h2></div>\n\
<p>This command releases one or more targets from the local cache back to the target cache and removes the associated parameters from the local cache.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;releaseTargets \n\
    value=&quot;beauty,temp0&quot;\n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>value</em> - a list of targets to be released, separated by commas. The empty string ”” is taken to mean “all targets”. Also, a wildcard operator * will match string remainders; so, for example, if an effect has acquired many targets, “tone0” thru “tone10”, they may be released as a group by using **value=&quot;tone*&quot;**.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"releaseall\"></a><h2 id=\"releaseall\">ReleaseAll</h2></div>\n\
<p>This command releases all of the local parameters back to the caches.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;releaseAll/&gt;\n\
</pre></div><div class=\'section\'><a id=\"clear\"></a><h2 id=\"clear\">Clear</h2></div>\n\
<p>This command clears a combination of the color buffer, the depth buffer and the stencil buffer to the given values.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;clear \n\
    color=&quot;0,0,0,0&quot; \n\
    depth=&quot;1.0&quot; \n\
    stencil=&quot;0&quot;\n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><p><em>color</em> - a list of float values representing the clear color, separated by commas; for example: “0.63,0.32,0.77,0.0”. <em>color</em> is an optional attribute, and if it is not given or if it is set to an empty string ””, it is taken to mean “do not clear the color component”. Only float4 RGBA colors are accepted.</p></li>\n\
<li><p><em>depth</em> - a single float value representing the depth clear value; for example: “1.00”. <em>depth</em> is an optional attribute, and if it is not given or if it is set to an empty string ””, it is taken to mean “do not clear the z component”.</p></li>\n\
<li><p><em>stencil</em> - a single integer value representing the clear value for the stencil buffer; for example, “128”. For stencil buffers created with D24S8, the most common format, accepted values are between 0 and 255. <em>stencil</em> is an optional attribute, if it is not given or if it is set to an empty string ””, it is taken to mean “do not clear the stencil component”.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setcamera\"></a><h2 id=\"setcamera\">SetCamera</h2></div>\n\
<p>This command sets the current drawing camera to the given value.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setCamera \n\
    value=&quot;camera0&quot; \n\
    index=&quot;0&quot; \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>value</em> – the name of the camera to make active. Must either exist as a local parameter or be provided indirectly with a valid value. Note that the <em>value</em> parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@cameraIn\' title=\'\'>=&quot;@cameraIn</a>”</strong> will find a parameter on the current fragment called “cameraIn”, ensure that “cameraIn” is a camera parameter, and then set the camera held by “cameraIn” to the context. Note also that the special value “light” is recognized in conjunction with the optional index attribute to specify the camera associated with a light. For example, <setcamera value=\"light\" index=\"2\"></setcamera> sets the current camera to the camera associated with light 2. <em>value</em> is a required parameter.</li>\n\
<li><em>index</em> - an optional integer parameter that indicates which light to use as a source for the camera. Only meaningful when value=”light”.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setviewport\"></a><h2 id=\"setviewport\">SetViewport</h2></div>\n\
<p>This command sets the current viewport to the given drawing region. All drawing, including quad draws and clears, are restricted to the active viewport.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setViewport\n\
    value=&quot;0.0,0.0, 0.5,0.5&quot;\n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>value</em> – a list of 4 float values, separated by commas. The target area is represented in normalized coordinates, 0..1, 0…1. The first two values represent the position of the viewport in this normalized space, and the latter two values represent the size of the viewport, also in normalized space, where a size of 1.0 means the entire target in that dimension.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setscissorrect\"></a><h2 id=\"setscissorrect\">SetScissorRect</h2></div>\n\
<p>This command sets the current scissor rectangle to the given region. This command has no effect unless the render state is set to enable the scissor rectangle. If the rectangle is enabled, then drawing, including quad draws, are restricted to the scissor rectangle.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setScissorRect\n\
    value=&quot;0.0,0.0, 0.5,0.5&quot;\n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>value</em> – a list of 4 float values, separated by commas. The scissor rectangle is represented in normalized coordinates, 0..1, 0…1. The first two values represent the position of the scissor rectangle in this normalized space, and the latter two values represent the size of the scissor rectangle, also in normalized space, where a size of 1.0 means the entire target in that dimension. Values less than 0 and greater than 1 are accepted. If the scissor rectangle is enabled and empty, or not on the screen, then the <em>Render</em> command doesn’t run the renderer or draw a screen quad, since no pixel will be drawn.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"seteffect\"></a><h2 id=\"seteffect\">SetEffect</h2></div>\n\
<p>This command sets the override effect to the given value. All drawing, including quad draws, use the override effect until it is reset.</p>\n\
<p>An effect can only be set once, but can be reused several times.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setEffect  \n\
    name=&quot;DownSampleEffect&quot;\n\
    path=&quot;downSample&quot;\n\
    technique=&quot;Main&quot;\n\
    macrolist=&quot;&quot;  \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>name</em> – name of the effect that is being set. Required. The name can be the same as or different from the effect path. If this value is &quot;&quot;, the effect path is used as the name of the effect. If the effect path is also &quot;&quot;, the current effect is removed.</li>\n\
<li><p><em>path</em> – the path for the effect file. Optional. If this value is not empty, the effect will be created with the file, and if the specified effect name is already used by another effect, that effect will be released. If this value is empty, the effect with the specified effect name is reused, and if the effect doesn’t exist, this command will fail.</p>\n\
<p>It is not necessary to provide a file extension, as Maya will look up the appropriate extension based on the device being used; for example, <span class=\'code\'>.fx</span> for DX11, <span class=\'code\'>.ogsfx</span> for Core Profile and <span class=\'code\'>.cgfx</span> for non-core profile OpenGL.</p>\n\
<p>The override effect is terminated by setting the value to &quot;&quot;, the empty string.</p></li>\n\
<li><em>technique</em> – the name of the active technique. Optional. If the effect path is empty, this parameter will be ignored. If the technique is not found in the effect, the command will fail.</li>\n\
<li><p><em>macrolist</em> – a string of macro names and definitions, separated by commas. Optional. Each definition follows the macro name, such as ” SHADOWPARAM, 0.1, SHADOWCOLOR, 0x2310, …”. An empty definition is specified with two commas, such as ”PERSPECTIVE_ENABLED,,…”. If the effect path is empty, this parameter will be ignored.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"seteffectparameter\"></a><h2 id=\"seteffectparameter\">SetEffectParameter</h2></div>\n\
<p>This command sets the value of a parameter on the current effect to the given value. All subsequent uses of this effect will have this value.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setEffectParameter  \n\
    effect=&quot;downSample&quot;  \n\
    name=&quot;scale&quot;  \n\
    value=&quot;0.0,1.0&quot; \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>effect</em> – name of the effect that holds the parameter that you want to set. <em>effect</em> is a required attribute.</li>\n\
<li><p><em>name</em> – name of the parameter that is being set. <em>name</em> is a required attribute.</p></li>\n\
<li><p><em>value</em> – value to set the parameter to. Exact syntax is dependent on the parameter type; for example, the above example will match a float2, but not a target. Note that the <em>value</em> parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@cameraIn\' title=\'\'>=&quot;@cameraIn</a>”</strong> will find a parameter on the current fragment called “cameraIn”, ensure that “cameraIn” is of the same type as the parameter referred to by <em>name</em>, and then set the parameter to the value of cameraIn.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"settexture\"></a><h2 id=\"settexture\">SetTexture</h2></div>\n\
<p>This command sets the value of the given texture slot on the device to the given sampler state and texture.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;SetTexture \n\
    effect=&quot;Main&quot; \n\
    name=&quot;gDistanceTex&quot; \n\
    value=&quot;PointClamp&quot; \n\
    texture=&quot;@DistanceMap&quot; \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>effect</em> – name of the effect that holds the texture parameter that you want to set. Required.</li>\n\
<li><em>name</em> – name of the texture parameter that is being set. <em>name</em> is a required attribute, and must be of target or texture type.</li>\n\
<li><em>value</em> – name of the requested sampler state; for example: “PointClamp”. Only states currently in the cache or the factory are available . Note that this parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@samplerIn\' title=\'\'>=&quot;@samplerIn</a>”</strong> will find a parameter on the current fragment called “samplerIn”, ensure that it is a sampler state parameter, and then set the samplerIn value as the value to be used when this texture is activated.</li>\n\
<li><em>texture</em> – name of the texture to set into the slot/parameter. Only states currently in the cache or the factory are available. Note that the <em>texture</em> parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>texture <a href=\'mailto:=&quot;@textureIn\' title=\'\'>=&quot;@textureIn</a>”</strong> will find a parameter on the current fragment called “textureIn”, ensure that “textureIn” is a texture parameter, and then set the textureIn’s value as the value to be used when this texture is activated.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setstate\"></a><h2 id=\"setstate\">SetState</h2></div>\n\
<p>This command sets a given state block to the device. The complete device state may be set (the “RenderState”); or, each of its three components, the blend state, rasterizer state and depth stencil state may be set separately.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setState\n\
    name=&quot;DepthStencilState&quot;  \n\
    value=&quot;myDepthStencilState&quot; \n\
/&gt;\n\
</pre></div><ul>\n\
<li><em>name</em> – the state category that you want to set. Required. Valid <em>name</em> values are &quot;RenderState&quot;, &quot;BlendState&quot;, &quot;RasterizerState&quot;,or &quot;DepthStencilState&quot;. RenderState sets all the other states.</li>\n\
<li><em>value</em> – name of the state to set the device to. A state object will be created for you automatically if it hasn&#39;t been declared already. Note that the value parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@stateIn\' title=\'\'>=&quot;@stateIn</a>”</strong> will find a parameter on the current fragment called “stateIn”, ensure that it is of the same type as the parameter <em>name</em>, and then set stateIn&#39;s value into the given state category. <em>value</em> is a required parameter, but its value may be the empty string, “”.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setrenderparameter\"></a><h2 id=\"setrenderparameter\">SetRenderParameter</h2></div>\n\
<p>This command sets a parameter on the given renderer. The parameter may hold an auxiliary world, or specify an object filter used to accept all objects with certain item flags set. Examples are “visible”, and “castsShadow”.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setRenderParameter  \n\
    renderer=&quot;opaqueRend&quot;  \n\
    name=&quot;filter&quot; \n\
    value=&quot;visible&quot; \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>renderer</em> – name of the renderer on which to set parameters.</li>\n\
<li><em>name</em> – name of the parameter on the renderer.</li>\n\
<li><em>value</em> – value to set to the given parameter. May be a simple value: “0.0”, “true”, or “21”, or the name of another parameter (usually in the local cache); for example, “transpWorld” that holds the object to set to the renderer.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"declare\"></a><h2 id=\"declare\">Declare</h2></div>\n\
<p>This command declares a new parameter of the given type and adds it to the local cache. It optionally sets the value of the parameter to the given value. The parameter may subsequently be set by the <strong>setParameter</strong> command.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;declare  \n\
    name=&quot;light0Shadow&quot; \n\
    type=&quot;target&quot; \n\
    value=&quot;shadowBuf0&quot; \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>name</em> - the name of the parameter to declare. If this parameter is already in the local cache and is of the correct type, no action is taken. If the parameter is in the local cache, but of the wrong type, an error is generated due to the name conflict. <em>name</em> is a required attribute, and may not be set to the empty string, “”.</li>\n\
<li><em>type</em> – type of the parameter being created. Accepts int, float, int4, float4, target, texture, world, bool, and string.</li>\n\
<li><em>value</em> – value to which the parameter is initially set. Exact syntax is dependent on the parameter type; for example, the above example will match a target, but not a float2. Note that the <em>value</em> parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@cameraIn\' title=\'\'>=&quot;@cameraIn</a>”</strong> will find a parameter on the current fragment called “cameraIn”, ensure that “cameraIn” is of the same type as the parameter <em>name</em>, and then set parameter <em>name</em>&#39;s value to cameraIn’s value.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setparameter\"></a><h2 id=\"setparameter\">SetParameter</h2></div>\n\
<p>This command sets a given parameter to the given value, which may be another parameter.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;setParameter  \n\
    name=&quot;@output&quot;  \n\
    value=&quot;1.0,0.25&quot; \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>name</em> - the name of the parameter. This parameter should be in the local cache or provided by reference. Note that the <em>name</em> parameter accepts the @ notation. The @ notation gets the value from a parameter of the fragment referred to by the @. For example, <strong>name <a href=\'mailto:=&quot;@output\' title=\'\'>=&quot;@output</a>”</strong> will find a parameter on the current fragment called “output”, and set <em>name</em> to the given value. <em>name</em> is a required attribute.</li>\n\
<li>value – value to set the parameter to. Exact syntax is dependent on the parameter type. In the example above, value will match a float2, but not a target. Note that the value parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@cameraIn\' title=\'\'>=&quot;@cameraIn</a>”</strong> will find a parameter on the current fragment called “cameraIn”, ensure that “cameraIn” is of the same type as the parameter <em>name</em>, and then set parameter <em>name</em>&#39;s value to cameraIn’s value.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"if\"></a><h2 id=\"if\">If</h2></div>\n\
<p>This command tests a given parameter for NULL or false, and if it is NULL or false, all statements are skipped until “else” or “endIf”. The statement can be nested.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;if  \n\
    value=&quot;@depthStencil&quot;\n\
/&gt;\n\
</pre></div><p>Attributes</p>\n\
<ul>\n\
<li><em>value</em> - the name of the parameter to test. This parameter should be in the local cache or provided by reference. The parameter must be either of the pointer type (world, texture, target, state, and so forth), or of the boolean type. Note that the <em>value</em> parameter accepts the @ notation. The @ notation gets the value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@output\' title=\'\'>=&quot;@output</a>”</strong> will find a parameter on the current fragment called “output”, and set the parameter <em>value</em> to the given value. <em>name</em> is a required attribute.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"ifnot\"></a><h2 id=\"ifnot\">IfNot</h2></div>\n\
<p>This command tests a given parameter for NULL or false and if it is NULL or false, all statements are executed until <strong>else</strong> or <strong>endIf</strong>. If true or not NULL, no statements are executed until an else or endif is encountered. The statement can be nested.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;ifNot  \n\
    value=&quot;@depthStencil&quot; \n\
/&gt;\n\
</pre></div><p>Attributes</p>\n\
<ul>\n\
<li><em>value</em> - the name of the parameter to test. This parameter should be in the local cache or provided by reference. The parameter must be either of the pointer type (world, texture, target, state, and so forth), or of the boolean type. Note that the value parameter accepts the @ notation. The @ notation gets the value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@output\' title=\'\'>=&quot;@output</a>”</strong> will find a parameter on the current fragment called “output”, and test the parameter value for NULL or false. Value is a required attribute, and should not be set to the empty string, “”.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"else\"></a><h2 id=\"else\">Else</h2></div>\n\
<p>This command ends the main section and begins the else section of an <strong>if</strong> or <strong>ifNot</strong> command. It reverses the state of statement inclusion produced by <strong>if</strong> or <strong>ifNot</strong>. If an <strong>if</strong> statement evaluates to true, statements are executed until an <strong>endIf</strong> or an <strong>else</strong> is encountered. If an <strong>else</strong> is encountered, no subsequent statements are executed until an <strong>endIf</strong> is encountered. The conditional statement can be nested. Must be contained between either an <strong>if</strong> / <strong>endIf</strong> pair, or between an <strong>ifNot</strong> / <strong>endIf</strong> pair.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;else/&gt;\n\
</pre></div><p>Attributes</p>\n\
<ul>\n\
<li>None</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"endif\"></a><h2 id=\"endif\">EndIf</h2></div>\n\
<p>This command ends an <strong>if</strong> or <strong>ifNot</strong> command and restores normal, unconditional processing. All statements after the <strong>endIf</strong> are executed normally. The conditional statement can be nested. This command must match the <strong>if</strong> command one to one, and must appear after the matching <strong>if</strong> command.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;endIf/&gt;\n\
</pre></div><p>Attributes</p>\n\
<ul>\n\
<li>None</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"call\"></a><h2 id=\"call\">Call</h2></div>\n\
<p>This command calls a user supplied callback object. If the callback object is not in the local cache, it is created for you and added to the local parameters, then called. The callback takes 2 optional arguments.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;call \n\
    name=&quot;myCallback &quot; \n\
    arg0=&quot;doThisThing&quot; arg1=&quot;0.125&quot;\n\
/&gt;\n\
</pre></div><p>Attributes</p>\n\
<ul>\n\
<li><em>name</em> - the name of the callback object. If the callback object is not in the local cache, it is created for you and added to the local parameters, then executed. <em>name</em> is a required attribute and may not be an empty string.</li>\n\
<li><em>arg0</em>, <em>arg1</em>, <em>arg2</em> - the first, second, and third arguments to the callback function. Parsed to the correct type by the callback object, these values are always provided as a string so that many types may be specified. Note that the <em>arg</em> parameters accept the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>arg0 <a href=\'mailto:=&quot;@filterIn\' title=\'\'>=&quot;@filterIn</a>”</strong> will find a parameter on the current fragment called “filterIn”, and the callback would use that value in its computations. These are optional parameters and may be set to the empty string, “”.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"render\"></a><h2 id=\"render\">Render</h2></div>\n\
<p>This command renders all the objects in the list named in the <em>value</em> attribute. Valid values include &quot;opaqueList&quot;, which is the list of opaque objects that you want to draw, and “quad”, that draws a single full screen quad. Render does not set targets, cameras, state, override effects, or other rendering related values; it merely draws the geometry with the state currently set in the interpreter. Both quad draws and scene draws are restricted to the area of the viewport.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;render \n\
    name=&quot;@opaqueList&quot; \n\
/&gt;\n\
</pre></div><p>Attributes:</p>\n\
<ul>\n\
<li><em>name</em> - the objects that should be rendered. Note that the <em>name</em> parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. <em>name</em> is a required attribute, and may not be set to the empty string, “”.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"setstatecommand\"></a><h2 id=\"setstatecommand\">SetStateCommand</h2></div>\n\
<p>This command will use a state setter class to manage the render state or sampler state of the virtual device. This command includes the setting of the state changes, the committing of the state changes, and the restoring to old state.</p>\n\
<p>XML Syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;SetStateCommand \n\
    commandName=&quot;SetStateParameter&quot; \n\
    name=&quot;localStateSetter_fsShadow&quot;\n\
    parameter=&quot;SetBlendEnable&quot; \n\
    value=&quot;true&quot;\n\
    index=&quot;0&quot; \n\
/&gt;\n\
<ul>\n\
<li></li></ul></pre></div><p><em>commandName</em> - a string indicating the name of the command. Required.</p>\n\
<p>Currently only four types of commands are allowed: “SetStateParameter”, “SetRenderState”, “CommitNewState” and “RestorePreviousState”.</p>\n\
<li><em>name</em> - a string indicating the name of the state setter. Required. The state setter must have been already declared in a previous script.</li>\n\
<li><em>parameter</em> - a string indicating the name of the state or state parameter. The “SetStateParameter” and “SetRenderState” commands require this field. Note that this parameter accepts the @ notation. The @ notation gets the actual string from a string parameter of the fragment referred to by the @. For example, <a href=\'mailto:**parameter=&quot;@ambientState\' title=\'\'>**parameter=&quot;@ambientState</a>”** will find a parameter on the current fragment called “ambientState”, and the StateSetter will use the string in the parameter as the state name.</li>\n\
<li><em>value</em> - a string indicating the value of the state change. The type of the value varies depending on the parameter. For example, if the <em>parameter</em> is “DepthBias”, the value will be a float. Note that the <em>value</em> parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <strong>value <a href=\'mailto:=&quot;@clearColor\' title=\'\'>=&quot;@clearColor</a>”</strong> will find a parameter on the current fragment called “clearColor”, and the state setter will use the value in the parameter as the state value.</li>\n\
<li><p><em>index</em> - a string indicating the index of the state that the state setter will change, or the stencil operation type that the state setter will change. If the <em>parameter</em> is a state parameter that requires an index, then this is an integer representing the index. If the <em>parameter</em> is “StencilFrontFace” or “StencilBackFace”, then this is the stencil operation type. Note that the <em>index</em> parameter accepts the @ notation. The @ notation gets the actual value from a parameter of the fragment referred to by the @. For example, <a href=\'mailto:**index=&quot;@blendIndex\' title=\'\'>**index=&quot;@blendIndex</a>”** will find a parameter on the current fragment called “blendIndex”, and the state setter will use the value in the parameter as the state index.</p></li>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";