var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Sharing common functions between shader stages in OGSFX</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Sharing common functions between shader stages in OGSFX</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"sharing-common-functions-between-shader-stages-in-ogsfx\"></a></div>\n\
<p>As seen in <a href=\'#!/url=./dev_help/Writing-a-Hardware-Shading-Node/Creating-GLSL-hardware-shaders/Convert-existing-GLSL-shaders-to.html\' title=\'\'>Convert existing GLSL shaders to OGSFX format</a>, each shader stage has its own GLSLShader <em>block</em> that contains the function that it uses.</p>\n\
<p>The following examples demonstrate how to write your code so that two stages can use the same functions.</p>\n\
<div class=\'section\'><a id=\"duplicated-functions-in-a-.ogsfx-file\"></a><h2 id=\"duplicated-functions-in-a-.ogsfx-file\">Duplicated functions in a .ogsfx file</h2></div>\n\
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
    vec4 convertVec3ToVec4(vec3 input)\n\
    {\n\
        return vec4(input, 1);\n\
    }\n\
 \n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*convertVec3ToVec4(in_position);\n\
    }\n\
}\n\
 \n\
GLSLShader PS1\n\
{\n\
    vec4 convertVec3ToVec4(vec3 input)\n\
    {\n\
        return vec4(input, 1);\n\
    }\n\
 \n\
    vec4 computeTransparency(vec3 color3)\n\
    {\n\
        vec4 color4 = convertVec3ToVec4(color3);\n\
         \n\
        float alpha = 1;\n\
        // ... perform a number of calculations\n\
        color4.w = alpha;\n\
 \n\
        return color4;\n\
    }\n\
 \n\
    void main()\n\
    {\n\
        out_color = computeTransparency(vec3(1, 0, 0));\n\
    }\n\
}\n\
 \n\
GLSLShader PS2\n\
{\n\
    vec4 convertVec3ToVec4(vec3 input)\n\
    {\n\
        return vec4(input, 1);\n\
    }\n\
 \n\
    vec4 computeTransparency(vec3 color3)\n\
    {\n\
        vec4 color4 = convertVec3ToVec4(color3);\n\
 \n\
        float alpha = 1;\n\
        // ... perform a number of calculations\n\
        color4.w = alpha;\n\
 \n\
        return color4;\n\
    }\n\
 \n\
    void main()\n\
    {\n\
        out_color = computeTransparency(vec3(0, 1, 0));\n\
    }\n\
}\n\
  \n\
technique Main\n\
{\n\
    pass p1\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS1;\n\
    }\n\
 \n\
    pass p2\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS2;\n\
    }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"implicitly-shared-functions-in-a-.ogsfx-file\"></a><h2 id=\"implicitly-shared-functions-in-a-.ogsfx-file\">Implicitly shared functions in a .ogsfx file</h2></div>\n\
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
// Declare the functions that can be shared among all the shader stages\n\
GLSLShader Common_Functions\n\
{\n\
    vec4 convertVec3ToVec4(vec3 input)\n\
    {\n\
        return vec4(input, 1);\n\
    }\n\
}\n\
  \n\
// Declare the functions that can be shared among the pixel shader stages\n\
GLSLShader Common_Pixel_Functions\n\
{\n\
    vec4 computeTransparency(vec3 color3)\n\
    {\n\
        vec4 color4 = convertVec3ToVec4(color3);\n\
 \n\
        float alpha = 1;\n\
        // ... perform a number of calculations\n\
        color4.w = alpha;\n\
 \n\
        return color4;\n\
    }\n\
}\n\
 \n\
GLSLShader VS\n\
{\n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*convertVec3ToVec4(in_position);\n\
    }\n\
}\n\
 \n\
GLSLShader PS1\n\
{\n\
    void main()\n\
    {\n\
        out_color = computeTransparency(vec3(1, 0, 0));\n\
    }\n\
}\n\
 \n\
GLSLShader PS2\n\
{\n\
    void main()\n\
    {\n\
        out_color = computeTransparency(vec3(0, 1, 0));\n\
    }\n\
}\n\
  \n\
technique Main\n\
{\n\
    pass p1\n\
    {\n\
        // Declare the vertex shader stage to include the functions\n\
        // from the VS GLSLShader block.\n\
        // The stage will also include all the functions\n\
        // from blocks that do not contain a main().\n\
        // The vertex shader stage will then contain functions from\n\
        // Common_Functions, Common_Pixel_Functions and VS.\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
 \n\
        // The pixel shader stage will contain functions from\n\
        // Common_Functions, Common_Pixel_Functions and PS1.\n\
        PixelShader (in vs_to_ps, out ps_output) = PS1;\n\
    }\n\
 \n\
    pass p2\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = VS;\n\
        PixelShader (in vs_to_ps, out ps_output) = PS2;\n\
    }\n\
}\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> Implicitly shared blocks may add overhead to the shader compiler: for example, <span class=\'code\'>computeTransparency</span> will be processed by the vertex shader even though it is not used. Also, the compilation may fail because not all GLSL built-in functions/keywords are available for all shader stages; for example, <span class=\'code\'>discard</span> is only available in the pixel shader stage and will fail for a vertex shader. It is, however, possible to only enable a section of code during a specified shader stage by using preprocessor directives. See <a href=\'#!/url=./dev_help/Writing-a-Hardware-Shading-Node/Creating-GLSL-hardware-shaders/OGSFX-preprocessor-directives.html#defining-shader-stages\' title=\'\'>OGSFX preprocessor directives</a>.</p>\n\
\n\
<div class=\'section\'><a id=\"explicitly-shared-functions-in-a-.ogsfx-file\"></a><h2 id=\"explicitly-shared-functions-in-a-.ogsfx-file\">Explicitly shared functions in a .ogsfx file</h2></div>\n\
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
// Declare the functions that can be shared among all the stages\n\
GLSLShader Common_Functions\n\
{\n\
    vec4 convertVec3ToVec4(vec3 input)\n\
    {\n\
        return vec4(input, 1);\n\
    }\n\
}\n\
 \n\
// Declare the functions that can be shared among the pixel shader stages\n\
GLSLShader Common_Pixel_Functions\n\
{\n\
    vec4 computeTransparency(vec3 color3)\n\
    {\n\
        vec4 color4 = convertVec3ToVec4(color3);\n\
 \n\
        float alpha = 1;\n\
        // ... perform a number of calculations\n\
        color4.w = alpha;\n\
 \n\
        return color4;\n\
    }\n\
}\n\
 \n\
GLSLShader VS\n\
{\n\
    void main() \n\
    {\n\
        gl_Position = gWVPXf*convertVec3ToVec4(in_position);\n\
    }\n\
}\n\
 \n\
GLSLShader PS1\n\
{\n\
    void main()\n\
    {\n\
        out_color = computeTransparency(vec3(1, 0, 0));\n\
    }\n\
}\n\
 \n\
GLSLShader PS2\n\
{\n\
    void main()\n\
    {\n\
        out_color = computeTransparency(vec3(0, 1, 0));\n\
    }\n\
}\n\
  \n\
technique Main\n\
{\n\
    pass p1\n\
    {\n\
        // Declare the vertex shader stage to include ONLY the functions\n\
        // from the Common_Functions and VS GLSLShader blocks\n\
        // Note that the order is important as each block will only &#39;know&#39;\n\
        // the functions that have been included in previous blocks\n\
        VertexShader (in vs_input, out vs_to_ps) = { Common_Functions, VS };\n\
 \n\
        // Declare the vertex shader stage to include ONLY the functions\n\
        // from Common_Functions, Common_Pixel_Functions and PS1\n\
        PixelShader (in vs_to_ps, out ps_output) = { Common_Functions, Common_Pixel_Functions, PS1 };\n\
    }\n\
 \n\
    pass p2\n\
    {\n\
        VertexShader (in vs_input, out vs_to_ps) = { Common_Functions, VS };\n\
        PixelShader (in vs_to_ps, out ps_output) = { Common_Functions, Common_Pixel_Functions, PS2 };\n\
    }\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";