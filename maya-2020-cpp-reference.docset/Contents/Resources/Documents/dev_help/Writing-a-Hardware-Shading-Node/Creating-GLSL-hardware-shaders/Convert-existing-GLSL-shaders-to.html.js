var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Convert existing GLSL shaders to OGSFX format</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Convert existing GLSL shaders to OGSFX format</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"convert-existing-glsl-shaders-to-ogsfx-format\"></a></div>\n\
<p>The following sections use typical scenarios with simple examples to demonstrate how to convert your existing GLSL shaders to <span class=\'code\'>.ogsfx</span> format. Equivalent code in GLSL versus OGSFX is provided for comparison for each example. It begins with the simplest case, and builds up to more complex scenarios.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> If you edit an effects file in an external text editor <strong>after</strong> you have already loaded it in your scene, you must reload the file by clicking the <img src=\'dev_help/images/Icon_reload_file.png\' title=\'\' /> icon in order for the shader to recognize your latest changes.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"a-fixed-solid-color-material\"></a><h2 id=\"a-fixed-solid-color-material\">A fixed solid color material</h2></div>\n\
<p>The shader takes a <strong>single input</strong>: the <strong>position stream</strong>.</p>\n\
<p>In GLSL, each of the shader stages: the vertex shader and the pixel (or fragment) shader, must be compiled separately and linked to the same program. Therefore, the pixel and vertex shaders are usually saved in two different files, often with extensions <span class=\'code\'>.glslv</span> and <span class=\'code\'>.glslf</span> respectively.</p>\n\
<p>An <span class=\'code\'>.ogsfx</span> file encapsulates all the stages in a single file.</p>\n\
<div class=\'section\'><a id=\"glsl\"></a><h3 id=\"glsl\">GLSL</h3></div>\n\
<p><span class=\'code\'>fixed_solid_color.glslv</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf;\n\
\n\
// The vertex shader input - coming from the application\n\
in vec3 in_position;\n\
 \n\
// The vertex shader ouput - going to the pixel shader\n\
// None\n\
 \n\
void main()\n\
{\n\
    gl_Position = gWVPXf*vec4(in_position, 1);\n\
}\n\
</pre></div><p><span class=\'code\'>fixed_solid_color.glslf</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// The pixel shader input - coming from the vertex shader\n\
// None\n\
 \n\
// The pixel shader output - going to the target\n\
out vec4 out_color;\n\
 \n\
void main()\n\
{\n\
    out_color = vec4(1, 0, 0, 1);\n\
}\n\
</pre></div><div class=\'section\'><a id=\"ogsfx\"></a><h3 id=\"ogsfx\">OGSFX</h3></div>\n\
<p><span class=\'code\'>fixed_solid_color.ogsfx</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf : WorldViewProjection;\n\
\n\
// The vertex shader input - coming from the application\n\
attribute vs_input\n\
{\n\
    vec3 in_position : POSITION;\n\
};\n\
 \n\
// The vertex shader ouput and also the pixel shader input\n\
attribute vs_to_ps\n\
{\n\
    // None\n\
};\n\
 \n\
// The pixel shader output\n\
attribute ps_output \n\
{\n\
    vec4 out_color : COLOR0;\n\
}\n\
 \n\
// All the functions or constants that will be used by the vertex shader\n\
GLSLShader VS\n\
{\n\
    // Only the main function, which is the same as the main function of the .glslv\n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*vec4(in_position, 1);\n\
    }\n\
}\n\
 \n\
// All the functions or constants that will be used by the pixel shader\n\
GLSLShader PS\n\
{\n\
    // Only the main function, which is the same as the main function of the .glslf\n\
    void main()\n\
    {\n\
        out_color = vec4(1, 0, 0, 1);\n\
    }\n\
}\n\
 \n\
// Declaration of the techniques and passes - for this example, 1 technique with 1 pass\n\
technique Main\n\
{\n\
    pass p0\n\
    {\n\
        // We have 1 vertex shader stage that uses :\n\
        // - the vs_input attribute as input,\n\
        // - the vs_to_ps attribute as output,\n\
        // - all functions declared in the GLSLShader block VS - must contain main()\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
 \n\
        // We have 1 pixel shader stage that uses :\n\
        // - the vs_to_ps attribute as input,\n\
        // - the ps_output attribute as output,\n\
        // - all functions declared in the GLSLShader block PS - must contain main()\n\
        PixelShader (in vs_to_ps, out ps_output) = PS;\n\
    }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"an-editable-solid-color-material\"></a><h2 id=\"an-editable-solid-color-material\">An editable solid color material</h2></div>\n\
<p>The shader takes two inputs:</p>\n\
<ul>\n\
<li>the solid color parameter (uniform)</li>\n\
<li>the position stream</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"glsl-1\"></a><h3 id=\"glsl-1\">GLSL</h3></div>\n\
<p><span class=\'code\'>editable_solid_color.glslv</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf;\n\
\n\
// No uniform for the vertex shader\n\
\n\
in vec3 in_position;\n\
 \n\
void main() \n\
{\n\
    gl_Position = gWVPXf*vec4(in_position, 1);\n\
}\n\
</pre></div><p><span class=\'code\'>editable_solid_color.glslf</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// The solid color uniform and its default value\n\
uniform vec4 gSolidColor = vec4(1, 0, 0, 1);\n\
 \n\
out vec4 out_color;\n\
 \n\
void main()\n\
{\n\
    out_color = gSolidColor;\n\
}\n\
</pre></div><div class=\'section\'><a id=\"ogsfx-1\"></a><h3 id=\"ogsfx-1\">OGSFX</h3></div>\n\
<p><span class=\'code\'>editable_solid_color.ogsfx</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf : WorldViewProjection;\n\
\n\
// The solid color uniform, its default value and several extra parameters\n\
uniform vec4 gSolidColor : DIFFUSE\n\
&lt;\n\
    // The UI name for this parameter in the Attribute Editor (AE)\n\
    // If not set (or empty), the name of the uniform itself will be used\n\
    string UIName = &quot;Solid Color&quot;;\n\
 \n\
    // The group in which to put this parameter in the AE\n\
    // If not set (or empty), the parameter will not be added to any named group\n\
    string UIGroup = &quot;Editable Parameters&quot;;\n\
 \n\
    // The value used to sort the parameters within the same group\n\
    // If not set, the parameter will be placed in the same order as it appears\n\
    // in the shader file, but after the parameters with a specified UIOrder \n\
    int UIOrder = 1;\n\
 \n\
    // Specify the widget used to control the uniform value in the AE\n\
    // Currently only &quot;None&quot; - the parameter will not be visible in the AE -\n\
    // and &quot;ColorPicker&quot; - use the color picked widget - are supported;\n\
    // any other value such as &quot;Color&quot; below will be ignored.\n\
    // The GLSLShader plug-in will try to find the proper widget\n\
    // based on the name of the attribute and its semantic (here DIFFUSE).\n\
    string UIWidget = &quot;Color&quot;;\n\
 \n\
&gt; = {1, 0, 0, 1};\n\
 \n\
attribute vs_input\n\
{\n\
    vec3 in_position : POSITION;\n\
};\n\
 \n\
attribute vs_to_ps\n\
{\n\
    // None\n\
};\n\
 \n\
attribute ps_output \n\
{\n\
    vec4 out_color : COLOR0;\n\
}\n\
 \n\
GLSLShader VS\n\
{\n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*vec4(in_position, 1);\n\
    }\n\
}\n\
 \n\
GLSLShader PS\n\
{\n\
    void main()\n\
    {\n\
        out_color = gSolidColor;\n\
    }\n\
}\n\
 \n\
technique Main\n\
{\n\
    pass p0\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS;\n\
    }\n\
}\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> See also <a href=\'#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html\' title=\'\'>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0</a> for more information regarding the semantics used above.</p>\n\
\n\
<div class=\'section\'><a id=\"a-textured-material\"></a><h2 id=\"a-textured-material\">A textured material</h2></div>\n\
<p>The shader takes three inputs:</p>\n\
<ul>\n\
<li>the solid color parameter (uniform)</li>\n\
<li>the position stream</li>\n\
<li>the texture coordinate (UV) stream</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"glsl-2\"></a><h3 id=\"glsl-2\">GLSL</h3></div>\n\
<p><span class=\'code\'>textured.glslv</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf;\n\
\n\
// No uniform for the vertex shader\n\
 \n\
in vec3 in_position;\n\
in vec2 in_texcoord;\n\
 \n\
out vec2 out_texcoord;\n\
 \n\
void main() \n\
{\n\
    gl_Position = gWVPXf*vec4(in_position, 1);\n\
    out_texcoord = in_texcoord;\n\
}\n\
</pre></div><p><span class=\'code\'>textured.glslf</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// The texture sampler uniform bound to the application&#39;s texture parameter\n\
uniform sampler2D gTextureSampler;\n\
 \n\
in vec2 in_texcoord;\n\
 \n\
out vec4 out_color;\n\
 \n\
void main()\n\
{\n\
    out_color = texture2D(gTextureSampler, in_texcoord);\n\
}\n\
</pre></div><div class=\'section\'><a id=\"ogsfx---implementation-version-1\"></a><h3 id=\"ogsfx---implementation-version-1\">OGSFX - implementation version 1</h3></div>\n\
<p><span class=\'code\'>textured.ogsfx</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf : WorldViewProjection;\n\
\n\
// The texture parameter will be visible in the Attribute Editor (AE)\n\
uniform texture2D gTexture\n\
&lt;\n\
    string UIName = &quot;Texture&quot;;\n\
    string UIGroup = &quot;Editable Parameters&quot;;\n\
    int UIOrder = 1;\n\
     \n\
    // Default texture file to load\n\
    string ResourceName = &quot;default_texture.png&quot;;\n\
 \n\
    // Specify the type of texture : 1D, 2D, Cube ...\n\
    string ResourceType = &quot;2D&quot;;\n\
&gt;;\n\
 \n\
// The texture sampler linked to the texture parameter, will not be visible in the AE\n\
uniform sampler2D gTextureSampler = sampler_state\n\
{\n\
    // This sample belongs to the texture &quot;gTexture&quot;\n\
    Texture = &lt;gTexture&gt;;\n\
};\n\
 \n\
attribute vs_input\n\
{\n\
    vec3 in_position : POSITION;\n\
    vec2 in_texcoord : TEXCOORD0;\n\
};\n\
 \n\
attribute vs_to_ps\n\
{\n\
    vec2 out_texcoord;\n\
};\n\
 \n\
attribute ps_output \n\
{\n\
    vec4 out_color : COLOR0;\n\
}\n\
 \n\
GLSLShader VS\n\
{\n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*vec4(in_position, 1);\n\
        out_texcoord = in_texcoord;\n\
    }\n\
}\n\
 \n\
GLSLShader PS\n\
{\n\
    void main()\n\
    {\n\
        out_color = texture2D(gTextureSampler, out_texcoord);\n\
    }\n\
}\n\
 \n\
technique Main\n\
{\n\
    pass p0\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS;\n\
    }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"ogsfx---implementation-version-2\"></a><h3 id=\"ogsfx---implementation-version-2\">OGSFX - implementation version 2</h3></div>\n\
<p>In the previous <span class=\'code\'>ogsfx</span> implementation, the texture coordinate values are passed from the vertex shader to the pixel shader using the <span class=\'code\'>out_texcoord</span> variable of the <span class=\'code\'>vs_to_ps</span> attribute structure. While this is reasonable in the vertex shader stage, using the variable name <span class=\'code\'>out_texcoord</span> as an input to the pixel shader may be inappropriate. It is possible to name the input and output structures of the shader stages (except for the vs input and ps output that should remain unnamed). For example, name the variable <span class=\'code\'>texcoord</span> in the <span class=\'code\'>vs_to_ps</span> attribute structure, and name the vs output structure <span class=\'code\'>vsOut</span> and the ps input structure <span class=\'code\'>psIn</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf : WorldViewProjection;\n\
\n\
uniform texture2D gTexture\n\
&lt;\n\
    string UIName = &quot;Texture&quot;;\n\
    string UIGroup = &quot;Editable Parameters&quot;;\n\
    int UIOrder = 1;\n\
    string ResourceName = &quot;default_texture.png&quot;;\n\
    string ResourceType = &quot;2D&quot;;\n\
&gt;;\n\
 \n\
uniform sampler2D gTextureSampler = sampler_state\n\
{\n\
    Texture = &lt;gTexture&gt;;\n\
};\n\
 \n\
attribute vs_input\n\
{\n\
    vec3 in_position : POSITION;\n\
    vec2 in_texcoord : TEXCOORD0;\n\
};\n\
 \n\
attribute vs_to_ps\n\
{\n\
    vec2 texcoord;\n\
};\n\
 \n\
attribute ps_output \n\
{\n\
    vec4 out_color : COLOR0;\n\
}\n\
 \n\
GLSLShader VS\n\
{\n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*vec4(in_position, 1);\n\
        // Use the texcoord variable of the output structure\n\
        vsOut.texcoord = in_texcoord;\n\
    }\n\
}\n\
 \n\
GLSLShader PS\n\
{\n\
    void main()\n\
    {\n\
        // Use the texcoord variable of the input structure\n\
        out_color = texture2D(gTextureSampler, psIn.texcoord);\n\
    }\n\
}\n\
 \n\
technique Main\n\
{\n\
    pass p0\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps vsOut) = VS;\n\
        PixelShader (in vs_to_ps psIn, out ps_output) = PS;\n\
    }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"applying-two-pixel-shaders-to-the-same-geometry\"></a><h2 id=\"applying-two-pixel-shaders-to-the-same-geometry\">Applying two pixel shaders to the same geometry</h2></div>\n\
<p>In order to apply a red solid color and then a green solid color to the same geometry, you can use two different pixel shaders.</p>\n\
<p>In GLSL, you have 3 files : one for the vertex shader and one for each of the pixel shaders.</p>\n\
<p>For <span class=\'code\'>.ogsfx</span>, all is included in a single file as follows.</p>\n\
<div class=\'section\'><a id=\"glsl-3\"></a><h3 id=\"glsl-3\">GLSL</h3></div>\n\
<p><span class=\'code\'>two_pixel_shaders.glslv</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf;\n\
\n\
in vec3 in_position;\n\
 \n\
void main() \n\
{\n\
    gl_Position = gWVPXf*vec4(in_position, 1);\n\
}\n\
</pre></div><p><span class=\'code\'>two_pixel_shaders_ps1.glslf</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">out vec4 out_color;\n\
 \n\
void main()\n\
{\n\
    // red with some transparency\n\
    out_color = vec4(1, 0, 0, 0.3);\n\
} \n\
</pre></div><p><span class=\'code\'>two_pixel_shaders_ps2.glslf</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">out vec4 out_color;\n\
 \n\
void main()\n\
{\n\
    // green with some transparency\n\
    out_color = vec4(0, 1, 0, 0.3);\n\
}\n\
</pre></div><div class=\'section\'><a id=\"ogsfx-2\"></a><h3 id=\"ogsfx-2\">OGSFX</h3></div>\n\
<p><span class=\'code\'>two_pixel_shaders.ogsfx</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// World-view-projection transformation.\n\
uniform mat4 gWVPXf : WorldViewProjection;\n\
\n\
attribute vs_input\n\
{\n\
    vec3 in_position : POSITION;\n\
};\n\
 \n\
attribute vs_to_ps\n\
{\n\
    // None\n\
};\n\
 \n\
attribute ps_output \n\
{\n\
    vec4 out_color : COLOR0;\n\
}\n\
 \n\
GLSLShader VS\n\
{\n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*vec4(in_position, 1);\n\
    }\n\
}\n\
 \n\
// The pixel shader that draws the red color\n\
GLSLShader PS_red\n\
{\n\
    void main()\n\
    {\n\
        out_color = vec4(1, 0, 0, 0.3);\n\
    }\n\
}\n\
 \n\
// The pixel shader that draws the green color\n\
GLSLShader PS_green\n\
{\n\
    void main()\n\
    {\n\
        out_color = vec4(0, 1, 0, 0.3);\n\
    }\n\
}\n\
 \n\
// Declare the technique with two passes,\n\
// one for the red color and another for the green\n\
technique Main\n\
{\n\
    pass p_red\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS_red;\n\
    }\n\
 \n\
    pass p_green\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS_green;\n\
    }\n\
}\n\
 \n\
// It is also possible to declare another technique\n\
// that can be selected via the GLSLShader Attribute Editor\n\
// or when loading the effect using the API\n\
// <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MShaderManager::getEffectsFileShader\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a581c659670f0e3168750382c61a91a25&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MHWRender::MShaderManager::getEffectsFileShader</a>(fileName, techniqueName, ...)\n\
// For this technique, the order of the passes is inverted.\n\
technique Inverse\n\
{\n\
    pass p_green\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS_green;\n\
    }\n\
 \n\
    pass p_red\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS_red;\n\
    }\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";