var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Lighting Interfaces</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Lighting Interfaces</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"lighting-interfaces\"></a></div>\n\
<p>For implementers who are using plug-in effects or are overriding the rendering loop, the API provides access to the lighting parameters/attributes which are supported. This includes basic attributes for each respective light type as well as shadow map access.</p>\n\
<p>The information is provided as part of the draw context (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span>). The context is made available at the lowest possible level of granularity, which is the point just before setting up a hardware shader for rendering. Shader parameters can be updated using lighting parameter data, as required, before invoking the shader.</p>\n\
<p>It is possible to use the light and shadow information for fixed-function shading if desired, as the interface is only a data provider which places no restrictions on usage.</p>\n\
<p>The basic construct which returns light property information is a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MLightParameterInformation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MLightParameterInformation</a></span>.</p>\n\
<p>A list of these represents the set of active lights in the scene. To determine which lights are active, the 3d viewport parameters for interactive rendering and render globals settings for batch rendering are considered. The number is also restricted by the number of lights in a scene that are considered to be visible as well as the number of lights that can be supported by the active GPU device.</p>\n\
<p>Ambient lights are considered to be a single global ambient with no directional properties. This is a property of the rendering framework and not this API.</p>\n\
<p>The interface for light information is parameter based, as it is for shader instances. As not all lights share the same properties, different parameters are accessible depending on the light type. Semantics provide meaning behind parameter values.</p>\n\
<p>It is possible to access the shadow maps generated by the rendering framework. These are returned as textures (an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTexture\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_texture.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_texture.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MTexture</a></span>). The matrix used to lookup the texture with the appropriate transformation is provided as one of the parameters. Samplers for textures are returned as sampler descriptions. Shadow maps are returned based on viewport or batch render settings as well as per light settings (for example, if shadow mapping is enabled for the light)</p>\n\
<p>The following diagram shows how an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> is made available at render time for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSceneRender</a></span> and <span class=\'code\'>MUserOperation</span> operations as well as for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> instances.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f8d5b.jpg\' title=\'\'></div>\n\
<p>Figure 68: Access to lighting information is based on access to a draw context.</p>\n\
<p>Samples:</p>\n\
<ul>\n\
<li>The dx11Shader SDK plug-in has sample code which parses semantics from an HLSL file. When updating lighting parameters, it accesses the lighting information on the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> provided and binds the appropriate parameters to the light parameters on a given HLSL shader.</li>\n\
<li>The hwPhongShader <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> has simple code which demonstrates how to query light information.</li>\n\
<li>The gpuCacheDrawOverride <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> shows how the lighting information can be used to set up fixed function lighting using a simpler interface which is not parameter based.</li>\n\
</ul>\n\
<p>The following sample code shows how to extract the shadow map parameters for use with OpenGL:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Get the number of active lights \n\
unsigned int lightCount = context.numberOfActiveLights();\n\
for (unsigned int i=0; i&lt;lightCount; i++) \n\
{\n\
    // Get light parameter information for a given light\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MLightParameterInformation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MLightParameterInformation</a> *lightParam = \n\
        context.getLightParameterInformation( i );\n\
    if (lightParam) {\n\
        \n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStringArray</a> params;\n\
        lightParam-&gt;parameterList(params);\n\
\n\
        // Scan through all the parameters for this light. They may be differ for different \n\
        // light types.\n\
        for (unsigned int p=0; p&lt;params.length(); p++) {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MSamplerStateDesc\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MSamplerStateDesc</a> samplerDesc;\n\
            if (ptype == <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MLightParameterInformation::kTexture2\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html#a4d63980e4031b0fc366e623868b27ed0a9f41a2c609a9a7104e4d0c869d8fd2e7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MLightParameterInformation::kTexture2</a>) {\n\
                // OpenGL specific extraction of the GPU handle for a shadow map texture\n\
                void *handle = lightParam-&gt;getParameterTextureHandle( pname );\n\
                if (handle)\n\
                    int openGLHandle = *((int *)handle));\n\
                break;\n\
            }\n\
            else if (ptype == <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MLightParameterInformation::kSampler\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html#a4d63980e4031b0fc366e623868b27ed0a754585b88bea58243b903b023e1594f0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MLightParameterInformation::kSampler</a>) {\n\
                // Get a sampler description.\n\
                lightParam-&gt;getParameter( pname, samplerDesc );\n\
            }                                         \n\
        }\n\
    }\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"shadowing-control\"></a><h2 id=\"shadowing-control\">Shadowing Control</h2></div>\n\
<p>The information in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span> provides sufficient information to indicate when a plug-in is being invoked for rendering during shadow map creation. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> interfaces can use this information to either perform less or more complex rendering. By default the renderer itself sets up either default state and / or a default shader for use.</p>\n\
<p>For <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span>, the draw code can be optimized to avoid executing code which is only required for color pass rendering. For example any blending operations can be disabled.</p>\n\
<p>For <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, the draw code may choose to use a custom shadow shader if the color pass shader performs any type of deformation or tessellation.</p>\n\
<p>For convenience, an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> can be used from with either plug-in interface. If used from within an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, then binding and unbinding should occur at key activation and deactivation time to reduce redundant shader changes. If used from within an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span>, then binding and unbinding should occur within the draw call.</p>\n\
<p>The resulting shadow maps are used for internal rendering and are made available for beauty pass drawing for plug-ins.</p>\n\
<p>The following is sample code for setting up custom shadow casting and drawing for an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>. The “beauty pass” uses the shadow map and associated matrix available from a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MLightParameterInformation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MLightParameterInformation</a></span> instance.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class hwPhongShaderOverride : public <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MPxShaderOverride</a>\n\
{\n\
protected:\n\
    // Color shader\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a> *fColorShaderInstance;\n\
    // Shadow shader\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderInstance</a> *fShadowShaderInstance;\n\
    \n\
public:\n\
    void createShaderInstance()\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderer</a> *renderer = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderer::theRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderer::theRenderer</a>();\n\
        const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderManager</a>* shaderMgr = renderer-&gt;getShaderManager();\n\
\n\
        // If no shadow shader instance created yet acquire one. Use\n\
        // the stock shadow shader provided.\n\
        if (!fShadowShaderInstance)\n\
        {\n\
            fShadowShaderInstance = \n\
                shaderMgr-&gt;getStockShader( <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderManager::k3dShadowerShader\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a1f7c5db8a3b5804c6ffce5f305bf51a8afe64911b6b5354f80a8e038cfddacf36&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderManager::k3dShadowerShader</a> );\n\
        }\n\
\n\
        // If no color shader instance created yet acquire one. For\n\
        // now it&#39;s just using an internal shader for convenience but\n\
        // a custom shader could be written here as well.\n\
        if (!fColorShaderInstance)\n\
        {\n\
            fColorShaderInstance = \n\
                shaderMgr-&gt;getStockShader( <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderManager::k3dBlinnShader\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a1f7c5db8a3b5804c6ffce5f305bf51a8a56de0b4dccd3a1c52e8ddd11aac3e0e2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MShaderManager::k3dBlinnShader</a> );\n\
        }\n\
    }\n\
    \n\
    /* virtual */ void activateKey(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MDrawContext</a>&amp; context, const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a>&amp; key)\n\
    {\n\
        // Bind color or shadower shader as appropriate\n\
        if (fInColorPass)\n\
            fColorShaderInstance-&gt;bind( context );\n\
        else if (fInShadowPass)\n\
        {\n\
            // Update the parameters on the shadow shader. Use the view projection \n\
            // matrix from the active context\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MMatrix</a> viewProj =                                     \n\
                context.getMatrix(MHWRender::MDrawContext::kViewProjMtx);\n\
            fShadowShaderInstance-&gt;setParameter(&quot;shadowViewProj&quot;, viewProj );\n\
            fShadowShaderInstance-&gt;bind( context );\n\
        }\n\
    }\n\
    \n\
    // Example of using MShaderInstace to draw. Terminate\n\
    // the shader instance here.\n\
    /* virtual */ void terminateKey(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MDrawContext</a>&amp; context, const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a>&amp; key)\n\
    {\n\
        if (fInColorPass)\n\
            fColorShaderInstance-&gt;unbind( context );\n\
        else if (fInShadowPass)\n\
            fShadowShaderInstance-&gt;unbind( context );\n\
    }\n\
    \n\
    /* virtual */ bool draw(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MDrawContext</a>&amp; context,\n\
                       const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderItemList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderItemList</a>&amp; renderItemList) const\n\
    {\n\
        // Draw for color pass with a blend state change\n\
        if (fInColorPass)\n\
        {\n\
            stateMgr-&gt;setBlendState(sBlendState);\n\
            unsigned int passCount = fColorShaderInstance-&gt;getPassCount( context );\n\
            for (unsigned int i=0; i&lt;passCount; i++)\n\
            {\n\
                fColorShaderInstance-&gt;activatePass( context, i );\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MPxShaderOverride::drawGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a96b26e833c1533131841eb2bcb2288a4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MPxShaderOverride::drawGeometry</a>(context);\n\
            }\n\
            stateMgr-&gt;setBlendState(pOldBlendState);\n\
        }\n\
        // Draw for shadow pass\n\
        else if (fInShadowPass)\n\
        {\n\
            unsigned int passCount = fShadowShaderInstance-&gt;getPassCount( context );\n\
            for (unsigned int i=0; i&lt;passCount; i++)\n\
            {\n\
                fShadowShaderInstance-&gt;activatePass( context, i );\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MPxShaderOverride::drawGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a96b26e833c1533131841eb2bcb2288a4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MPxShaderOverride::drawGeometry</a>(context);\n\
            }\n\
        }\n\
    }\n\
}\n\
</pre></div><p>The dx11Shader example uses custom shaders.</p>\n\
<div class=\'section\'><a id=\"unlimited-lighting-information-access\"></a><h2 id=\"unlimited-lighting-information-access\">&quot;Unlimited&quot; lighting information access</h2></div>\n\
<blockquote>\n\
<p><strong>Note:</strong> You must first call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::needEvaluateAllLights()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ad3ef90830d42d36701abb67d53748f08&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderer::needEvaluateAllLights()</a></span> in order to request on demand or unlimited light information. See <a href=\'#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016.html#lighting\' title=\'\'>What&#39;s New in Maya 2016 Extension 2: Lighting</a> for more information.</p>\n\
</blockquote>\n\
<p>Even though the number of lights used for internal shading is limited by the renderer&#39;s light limit clamp, the API interfaces for accessing light information allow you to specify whether to ignore this light limit setting.</p>\n\
<p>The following interfaces have the option to specify a <span class=\'code\'>LightFilter</span> parameter to by-pass the light limit:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::numberOfActiveLights()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#a245ec3740263f7f3c076dd9c723141b7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::numberOfActiveLights()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::getLightInformation()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#ad76985f8ee279b7ffd948dc492a748a3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::getLightInformation()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::getLightParameterInformation()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#a05eaca3528290935c1b9ee55ae020c75&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::getLightParameterInformation()</a></span></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"shadow-lighting-updates-on-demand\"></a><h2 id=\"shadow-lighting-updates-on-demand\">Shadow / lighting updates &quot;on demand&quot;</h2></div>\n\
<blockquote>\n\
<p><strong>Note:</strong> You must first call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::needEvaluateAllLights()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ad3ef90830d42d36701abb67d53748f08&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderer::needEvaluateAllLights()</a></span> in order to request on demand or unlimited light information. See <a href=\'#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016.html#lighting\' title=\'\'>What&#39;s New in Maya 2016 Extension 2: Lighting</a> for more information.</p>\n\
</blockquote>\n\
<ul>\n\
<li>It is possible to ask to compute shadow maps on specific light DAG objects even if they are beyond the Viewport 2.0 renderer’s light limit setting. The method <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::setLightRequiresShadows()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ac777540ab7b1bca5d51f7d03e62b4643&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderer::setLightRequiresShadows()</a></span> can be used to either queue or remove from queue such a request. This method does not force a given shadow map to be computed, nor does it force any refresh or new render to occur. It triggers a check for the need for a shadow map update. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::setLightsAndShadowsDirty()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a06b742a8850af64d01e3fcbd9450916f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderer::setLightsAndShadowsDirty()</a></span> (see <a href=\'#!/url=./developer/What-s-New-What-s-Changed-/Autodesk-Maya-2014.html#openmaya-render\' title=\'\'>Change Management</a>) can be used to force computation, if necessary.</li>\n\
<li>If this method is called from within the rendering of a frame, then any shadow map computation update occurs on the next scene update. For example, if this is called from within a hardware shader plug-in (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>), then updates occur in the next frame (refresh). If called from a render override operation, then the next scene render triggers an update. The scene render is either the next <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSceneRender</a></span> called from within an override, or the next scene render called by the renderer internally when there is no render override.</li>\n\
<li><p>Example code using this interface can be found in the dx11Shader (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>) and viewRenderOverrideShadows (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span>) plug-ins. The dx11Shader plug-in has code that illustrates invoking an additional refresh on light binding changes.</p></li>\n\
<li>Generally, lighting information is only updated during a scene render (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSceneRender</a></span>). If a shadow request is performed from within a user operation (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUserRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_user_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_user_render_operation.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUserRenderOperation</a></span>) in a custom render override, then only the last available lighting information is available. If a user operation requires lighting information, the new virtual method <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUserRenderOperation::requiresLightData()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_user_render_operation.html#a3f130aa677f7fc44a7c8c26b8452a276&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUserRenderOperation::requiresLightData()</a></span> can be overridden and set to return true.</li>\n\
<li>To allow for a scene render in a render override to access information such as shadow maps after update, two methods can be used: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender::preSceneRender()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#ad15ab1a015ce24728b96c4580f66521c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSceneRender::preSceneRender()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender::postSceneRender()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a35198ec596b08ec1d753fc888afd9e0a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSceneRender::postSceneRender()</a></span>. They are called before and after either: shadow map update, or the rendering of the scene. At this time, the current draw context is available, and hence lighting/shadowing information (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MLightParameterInformation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_light_parameter_information.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MLightParameterInformation</a></span>).</li>\n\
<li><p>An example which uses the new interfaces is the new <span class=\'code\'>viewRenderOverrideShadows</span> render override plug-in. This plug-in performs a user operation to queue shadow requests and then uses them in a custom scene render. The pre-scene render method is overridden to extract the requested shadow maps for use during scene rendering by a custom shader. Light and shadow information beyond the light limit can be accessed.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"convert-light-information-from-world-to-view-space-for-fixed-function-lighting\"></a><h2 id=\"convert-light-information-from-world-to-view-space-for-fixed-function-lighting\">Convert light information from world to view space for fixed function lighting</h2></div>\n\
<p>When setting up lights, it is important to note that light information is returned in world space as opposed to view space. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext::kViewMtx\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#acc6ad8472c2abfd2f63e100474b977f9a1628397f32d381a2b05a9902af452c8a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext::kViewMtx</a></span> parameter can be used as the input parameter for the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::getMatrix()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#a71cbe2a3f2dfa967ebc43b5e97456ccb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::getMatrix()</a></span> method to get the world to view transform.</p>\n\
<p>Programmable shaders may use view space. Fixed function OpenGL lighting uses view space. (There is no fixed function DirectX lighting). In the OpenGL case, the world-to-view matrix should be loaded when setting up lighting.</p>\n\
<p>See the <em>gpuCache</em> <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> Developer Kit example (<span class=\'code\'>gpuCacheDrawOverride.cpp</span> file) for an example of using lighting interfaces for fixed function lighting.</p>\n\
<p>A sample setup is shown below that is based on the sample code. All lighting states must be set up by the plug-in. By default, fixed-function lighting is not set up when running a programmable pipeline as it serves no purpose.</p>\n\
<p>The first part of the code checks for an OpenGL limit of 8 lights and the sets the world to view matrix. Note that the <span class=\'code\'>gGLFT</span> variable is an pointer to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGLFunctionTable\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_g_l_function_table.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGLFunctionTable</a></span>, and the context variable is the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_draw_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext</a></span> passed to the plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStatus</a> status;\n\
\n\
// Take into account only the 8 lights supported by the basic\n\
// OpenGL profile.\n\
const unsigned int nbLights =\n\
    std::min(context.numberOfActiveLights(&amp;status), 8u);\n\
if (status != <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStatus::kSuccess</a>) return false;\n\
\n\
if (nbLights &gt; 0) {\n\
    // Lights are specified in world space and needs to be\n\
    // converted to view space.\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MMatrix</a> worldToView =\n\
        context.getMatrix(<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext::kViewMtx\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#acc6ad8472c2abfd2f63e100474b977f9a1628397f32d381a2b05a9902af452c8a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext::kViewMtx</a>, &amp;status);\n\
    gGLFT-&gt;glLoadMatrixd(worldToView.matrix[0]);\n\
</pre></div><p>The rest of the general setup enables lighting and sets up parameters such as checking for double sided lighting. In this example, ambient and specular are set to zero.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    gGLFT-&gt;glEnable(MGL_LIGHTING);\n\
    gGLFT-&gt;glColorMaterial(MGL_FRONT_AND_BACK, MGL_AMBIENT_AND_DIFFUSE);\n\
    gGLFT-&gt;glEnable(MGL_COLOR_MATERIAL) ;\n\
    gGLFT-&gt;glEnable(MGL_NORMALIZE) ;\n\
\n\
    {\n\
        const MGLfloat ambient[4]  = { 0.0f, 0.0f, 0.0f, 1.0f };\n\
        const MGLfloat specular[4] = { 0.0f, 0.0f, 0.0f, 1.0f };\n\
\n\
        gGLFT-&gt;glMaterialfv(MGL_FRONT_AND_BACK, MGL_AMBIENT,  ambient);\n\
        gGLFT-&gt;glMaterialfv(MGL_FRONT_AND_BACK, MGL_SPECULAR, specular);\n\
\n\
        gGLFT-&gt;glLightModelfv(MGL_LIGHT_MODEL_AMBIENT, ambient);\n\
\n\
        // Check for two sided lighting in VP2.0.\n\
        if (context.getDisplayStyle() &amp; <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext::kTwoSidedLighting\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a1b68f8823b8e275a4b548fdd27263e8aac8c533b01e236ad5b27f023374ec7027&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext::kTwoSidedLighting</a>) {\n\
            gGLFT-&gt;glLightModeli(MGL_LIGHT_MODEL_TWO_SIDE, 1);\n\
        }\n\
        else {\n\
            gGLFT-&gt;glLightModeli(MGL_LIGHT_MODEL_TWO_SIDE, 0);\n\
        }\n\
    }\n\
\n\
</pre></div><p>The final part of the code loops though each light and sets the appropriate per-light information. Here, the simpler <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDrawContext::getLightInformation()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#ad76985f8ee279b7ffd948dc492a748a3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDrawContext::getLightInformation()</a></span> method is used (since the requirement is for fixed function lighting), although parameter based methods can also be used.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    for (unsigned int i=0; i&lt;nbLights; ++i) \n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFloatPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFloatPointArray</a> positions;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFloatVector</a> direction;\n\
        float intensity;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MColor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_color.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MColor</a> color;\n\
        bool hasDirection;\n\
        bool hasPosition;\n\
        // Use simple interface to get basic lighting information for the\n\
        // current light.\n\
        status = context.getLightInformation(\n\
            i, positions, direction, intensity, color,\n\
            hasDirection, hasPosition);\n\
\n\
</pre></div><p>Once all information has been obtained, the plug-in decides the type of light that needs to be set up. First, it checks for a directional light. Directional lights can have a position and thus can be interpreted as spotlights. Note that some information here is hard-coded but could be extracted from parameter based interfaces.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        // Handle lights which have a direction:\n\
        if (hasDirection) \n\
        {\n\
            if (hasPosition) \n\
            {\n\
                // Set up a “spot light” as we have direction and position\n\
                <a href=\"javascript:void(0)\" data-symbol=\"MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFloatPoint</a> position;\n\
                position[0] = positions[0][0];\n\
                position[1] = positions[0][1];\n\
                position[2] = positions[0][2];\n\
                const MGLfloat ambient[4] = { 0.0f, 0.0f, 0.0f, 1.0f };\n\
                const MGLfloat diffuse[4] = { intensity * color[0],\n\
                                                intensity * color[1],\n\
                                                intensity * color[2],\n\
                                                1.0f };\n\
                const MGLfloat pos[4] = { position[0],\n\
                                            position[1],\n\
                                            position[2],\n\
                                            1.0f };\n\
                const MGLfloat dir[3] = { direction[0],\n\
                                            direction[1],\n\
                                            direction[2]};\n\
\n\
\n\
                gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_AMBIENT,  ambient);\n\
                gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_DIFFUSE,  diffuse);\n\
                gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_POSITION, pos);\n\
                gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_SPOT_DIRECTION, dir);\n\
\n\
                // Just using default value&#39;s for spot lights.\n\
                // Could use the parameter interface to get more information.\n\
                gGLFT-&gt;glLightf(MGL_LIGHT0+i,  MGL_SPOT_EXPONENT, 0.0);\n\
                gGLFT-&gt;glLightf(MGL_LIGHT0+i,  MGL_SPOT_CUTOFF,  20.0);\n\
            }\n\
            else \n\
            {                \n\
                // Set up a “directional” light which has a 180 degree cone.\n\
                const MGLfloat ambient[4] = { 0.0f, 0.0f, 0.0f, 1.0f };\n\
                const MGLfloat diffuse[4] = { intensity * color[0],\n\
                                                intensity * color[1],\n\
                                                intensity * color[2],\n\
                                                1.0f };\n\
                const MGLfloat pos[4] = { -direction[0],\n\
                                            -direction[1],\n\
                                            -direction[2],\n\
                                            0.0f };\n\
\n\
                gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_AMBIENT,  ambient);\n\
                gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_DIFFUSE,  diffuse);\n\
                gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_POSITION, pos);\n\
                gGLFT-&gt;glLightf(MGL_LIGHT0+i, MGL_SPOT_CUTOFF, 180.0);\n\
            }\n\
        }\n\
\n\
\n\
</pre></div><p>Next, the plug-in checks for a point light.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        // Handle setting up a point light:\n\
        else if (hasPosition) \n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFloatPoint</a> position;\n\
            position[0] = positions[0][0];\n\
            position[1] = positions[0][1];\n\
            position[2] = positions[0][2];\n\
            const MGLfloat ambient[4] = { 0.0f, 0.0f, 0.0f, 1.0f };\n\
            const MGLfloat diffuse[4] = { intensity * color[0],\n\
                                            intensity * color[1],\n\
                                            intensity * color[2],\n\
                                            1.0f };\n\
            const MGLfloat pos[4] = { position[0],\n\
                                        position[1],\n\
                                        position[2],\n\
                                        1.0f };\n\
\n\
\n\
            gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_AMBIENT,  ambient);\n\
            gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_DIFFUSE,  diffuse);\n\
            gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_POSITION, pos);\n\
            gGLFT-&gt;glLightf(MGL_LIGHT0+i, MGL_SPOT_CUTOFF, 180.0);\n\
        }\n\
\n\
</pre></div><p>The final check is for an ambient term which is interpreted as an “ambient light”:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        // Handle setting up an ambient light for the ambient term:\n\
        else \n\
        {\n\
            const MGLfloat ambient[4] = { intensity * color[0],\n\
                                            intensity * color[1],\n\
                                            intensity * color[2],\n\
                                            1.0f };\n\
            const MGLfloat diffuse[4] = { 0.0f, 0.0f, 0.0f, 1.0f };\n\
            const MGLfloat pos[4] = { 0.0f, 0.0f, 0.0f, 1.0f };\n\
\n\
\n\
            gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_AMBIENT,  ambient);\n\
            gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_DIFFUSE,  diffuse);\n\
            gGLFT-&gt;glLightfv(MGL_LIGHT0+i, MGL_POSITION, pos);\n\
            gGLFT-&gt;glLightf(MGL_LIGHT0+i, MGL_SPOT_CUTOFF, 180.0);\n\
        }\n\
\n\
</pre></div><p>The current light is then enabled:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        // Enable the light\n\
        gGLFT-&gt;glEnable(MGL_LIGHT0+i);\n\
    }\n\
}\n\
\n\
</pre></div><p>The plug-in example also provides corresponding sample code for disabling lights. See the Developer Kit example for more details.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";