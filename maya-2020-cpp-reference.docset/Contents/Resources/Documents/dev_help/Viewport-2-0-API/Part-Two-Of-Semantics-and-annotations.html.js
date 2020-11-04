var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0, Continued</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0, Continued</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"semantics-and-annotations-supported-by-the-dx11shader-and-glslshader-plug-ins-in-viewport-2.0-continued\"></a></div>\n\
<p>Continues from <a href=\'#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html\' title=\'\'>Semantics and annotations supported by the dx11Shader and glslShader plug-ins in Viewport 2.0.</a></p>\n\
<div class=\'section\'><a id=\"hardware-fog-specific-semantics\"></a><h2 id=\"hardware-fog-specific-semantics\">Hardware fog specific semantics</h2></div>\n\
<blockquote>\n\
<p><strong>Note:</strong> Currently not supported for the glslShader plug-in.</p>\n\
</blockquote>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
HardwareFogEnabled\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether hardware fog is enabled.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
HardwareFogMode\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether the fog type is Linear, Exponential or Exponential squared.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
HardwareFogStart\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies the near distance used in the linear fog.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
HardwareFogEnd\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies the far distance used in the linear fog.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
HardwareFogDensity\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies the density of the exponential fog.\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
HardwareFogColor\n\
</td>\n\
<td class=\"table-body\">\n\
float4 (dx11Shader)<a name=\"GUID-1BE9C146-BC8D-42CF-9000-D3DA8FE1DD94\"></a>\n\
<p class=\"table-body\">\n\
vec4 (glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies the fog color in RGBA values.\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"selection-semantics\"></a><h2 id=\"selection-semantics\">Selection semantics</h2></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-1F590D50-8185-4A7C-AEE7-EB5AF4F923D2\"></a>\n\
<p class=\"table-body\">\n\
HWS_PrimitiveBase\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-0A2E9BD1-354E-4BD5-8AC1-821715AF4BA3\"></a>\n\
<p class=\"table-body\">\n\
Integer used to generate the color of the object, or the first component, or the first geometry instance. (GPU Instancing must be enabled in the Viewport 2.0 options window.)\n\
</p>\n\
<a name=\"GUID-DFBE32FD-2B68-467C-AB8C-4C39ABA8CEEE\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSPrimitiveBase</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-34B4A859-22AC-4105-8AFC-BBE1102C707E\"></a>\n\
<p class=\"table-body\">\n\
HWS_PrimitiveCountPerInstance\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies the amount that HWS_PrimitiveBase needs to be incremented for each geometry instance.<a name=\"GUID-BFA452F3-5BB5-4708-8525-22C3997E32FE\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSPrimitiveCountPerInstance</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-DD398EE3-6035-4758-A5BE-438AF0B02D96\"></a>\n\
<p class=\"table-body\">\n\
HWS_ObjectLevel\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether selection is to be done at the object level.<a name=\"GUID-469C2851-A50D-470B-9060-83DDD360EE32\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSObjectLevel</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-5B714042-67DF-4645-A62B-8A97BE38B61D\"></a>\n\
<p class=\"table-body\">\n\
HWS_FaceLevel\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether selection is to be done at the face level.<a name=\"GUID-3F0E4236-8391-4767-A81B-E4DC487409B8\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSFaceLevel</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-BDF05016-19CF-40F9-8B7B-EBD47D70BE8D\"></a>\n\
<p class=\"table-body\">\n\
HWS_EdgeLevel\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether selection is to be done at the edge level.<a name=\"GUID-9EF83CDF-68D9-4CAC-9AAF-385147537B0C\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSEdgeLevel</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-93A4D578-9C05-45AF-B9A3-E56788E49384\"></a>\n\
<p class=\"table-body\">\n\
HWS_VertexLevel\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether selection is to be done at the vertex level.<a name=\"GUID-EB00BA26-59E5-4A47-9AC3-E0CB96D55477\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSVertexLevel</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-D6A776FC-43E1-43BA-93B5-9014125DF8E6\"></a>\n\
<p class=\"table-body\">\n\
HWS_FrontCCW\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether a counter clockwise triangle is front facing. Useful when generating fat points or lines.<a name=\"GUID-C85AB3D2-6AC0-427C-ADC8-C55C1F0431C9\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSFrontCCW</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-04287681-4564-47EB-9391-32312A2EBC8A\"></a>\n\
<p class=\"table-body\">\n\
HWS_InstancedDraw\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies whether geometry instances are being drawn.<a name=\"GUID-F523B3AD-0915-44FD-84B3-7F557F4E133F\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\">MUniformParameter::kSemanticHWSInstancedDraw</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"supported-technique-annotations\"></a><h2 id=\"supported-technique-annotations\">Supported technique annotations</h2></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
index_buffer_type\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-C214052C-BBC8-4FD3-8006-552AC537195F\"></a>\n\
<p class=\"table-body\">\n\
Allows specifying of custom primitive types via index buffer generator and mutator plug-ins. Usually used for tessellation, in order to provide the shader with an index buffer that contains extra data.\n\
</p>\n\
<a name=\"GUID-6CD8D64C-26D0-4CF8-A8EA-C5A1F1872811\"></a>\n\
<p class=\"table-body\">\n\
The dx11Shader/glslShader project contains a mutator that can generate Point-Normal Triangles using Adjacent Edge Normals (PN-AEN) index buffers. See <em class=\"mild\">Customizing Geometric Data for Shaders</em> in the <em class=\"mild\">Maya Developer Help</em>.\n\
</p>\n\
<a name=\"GUID-FCCE5680-251E-43C1-A487-1BD16E5251A0\"></a>\n\
<p class=\"table-body\">\n\
For dx11Shader / glslShader, use these values:\n\
</p>\n\
<a name=\"GUID-ED547C8F-71E2-4366-8C8C-9E606ED5993D\"></a>\n\
<p class=\"table-body\">\n\
no-value : default index buffer (default)\n\
</p>\n\
<a name=\"GUID-FC9C80D7-D1BF-4D91-906F-4CFD5D5D53DA\"></a>\n\
<p class=\"table-body\">\n\
&quot;PNAEN9” / &quot;GLSL_PNAEN9&quot; : triangle and adjacent edges\n\
</p>\n\
<a name=\"GUID-CEF56FC3-70B4-425D-9410-4B8921848066\"></a>\n\
<p class=\"table-body\">\n\
“PNAEN18” / &quot;GLSL_PNAEN18&quot;: triangle, adjacent edges, dominant edges, and dominant vertices\n\
</p>\n\
<a name=\"GUID-51B93109-7629-4532-A529-DCAB33E5B8EC\"></a>\n\
<p class=\"table-body\">\n\
Any other value is acceptable as long as it matches the registered name of an index mutator.\n\
</p>\n\
<a name=\"GUID-D0A4213C-ADE3-4DD3-B1E5-D026F384C777\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MPxPrimitiveGenerator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_primitive_generator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHWRender::MPxPrimitiveGenerator</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-B3B8693B-1129-4697-8FD3-7B349E3C68B2\"></a>\n\
<p class=\"table-body\">\n\
texture_mipmaplevels\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-A9FA0793-F3D5-464C-B49B-7A9257770F26\"></a>\n\
<p class=\"table-body\">\n\
The dx11Shader allows for you to control the number of mip-map levels that should be loaded or generated, either at the technique or texture description level.\n\
</p>\n\
<a name=\"GUID-0A79CC22-0D01-4DB3-AB56-8746E3F69B85\"></a>\n\
<p class=\"table-body\">\n\
Use this annotation with your technique definition to specify the mip map levels that should be generated when loading textures while using this technique. The following values are valid.\n\
</p>\n\
<a name=\"UL_D54C99E48CB24E529A397F5DB53C91E2\"></a>\n\
<ul>\n\
<li>\n\
<p>\n\
<a name=\"GUID-1FEDBBFE-4ADF-4103-9154-7F1A796AB7F3\"></a>&lt;val&gt; = 0: generates all mip map levels for affected textures. If there are any existing mip maps in the textures, then they will be loaded. This allows, for example, the loading of pre-calculated mip maps for DDS textures.\n\
</p>\n\
</li>\n\
<li>\n\
<p>\n\
<a name=\"GUID-BDA9FEB1-5269-42CC-9BB9-F6F33EF345D3\"></a>&lt;val&gt; = 1-10 : only generates mipmaps up to the specified level.\n\
</p>\n\
</li>\n\
</ul>\n\
<a name=\"GUID-A6BEA1DA-C353-4E3D-96CA-B928D3F1D9D4\"></a>\n\
<p class=\"table-body\">\n\
To reduce texture memory, the default value for the dx11Shader plug-in is set to 1, so that only the first mip map level (&lt;val&gt;=1) is loaded / computed.\n\
</p>\n\
<div>\n\
<a name=\"GUID-5F412DA4-2BBF-40A6-87A5-C2CD5C712F5B\"></a>\n\
<div class=\"note-note\">\n\
<span class=\"label label-target-language\">Note: </span>For the glslShader and shaderFX plug-ins, the default value is set to 0.</div></div>\n\
<a name=\"GUID-C7EA2449-52B9-4A78-8946-6D0D96F5F639\"></a>\n\
<p class=\"table-body\">\n\
It is also possible to enforce this on a per texture basis to explicitly reduce memory usage.\n\
</p>\n\
<a name=\"GUID-B1D8BE69-FCD2-4B16-ABDD-39C7BE09FA9E\"></a>\n\
<p class=\"table-body\">\n\
Sample implementation as follows:\n\
</p>\n\
<pre><code>technique11 T0\n\
&lt; \n\
    bool overridesDrawState = false;\n\
    int isTransparent = 0;\n\
    int texture_mipmaplevels = &lt;val&gt;;\n\
&gt;</code></pre>\n\
<a name=\"GUID-C40B42DB-6E4D-4C3B-8B36-DCE57720CC84\"></a>\n\
<p class=\"table-body\">\n\
Can be combined with the parameter annotation mipmaplevels, in which case the latter takes precedence. See <span class=\"char_link\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html#texture-specific-parameter-annotations\">Texture specific parameter annotations</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
isTransparent<a name=\"GUID-1254D796-046E-4FE6-9C3A-97DB930792FE\"></a>\n\
<p class=\"table-body\">\n\
(dx11Shader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
int\n\
</td>\n\
<td class=\"table-body\">\n\
Specifies the opacity of the effect, allowing Maya to use proper passes and culling. Supported values are:<a name=\"GUID-AD868D91-6CB9-433B-86B0-174043D5E6EB\"></a>\n\
<p class=\"table-body\">\n\
0: Technique is always opaque\n\
</p>\n\
<a name=\"GUID-0FE50EF0-3AB9-474E-95F0-2DED907DB6BA\"></a>\n\
<p class=\"table-body\">\n\
1: Technique is always transparent\n\
</p>\n\
<a name=\"GUID-1EF2BC32-00A3-4A22-B320-B63C91368FA5\"></a>\n\
<p class=\"table-body\">\n\
2: Opacity of the technique is tied to the float parameter that uses the &quot;Opacity&quot; semantic, and is transparent if the opacity value is lower than 1.0.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Transparency<a name=\"GUID-D3DDE4C5-B0FA-4303-A211-397D56C6E17C\"></a>\n\
<p class=\"table-body\">\n\
(glslShader)\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-863DBBA1-4CFC-4B83-A4F9-C9EEEB912FD9\"></a>\n\
<p class=\"table-body\">\n\
Specifies if this technique should be rendered in semi-transparency mode.\n\
</p>\n\
<a name=\"GUID-6518E17B-3C61-4176-9B05-9C98F5897ACB\"></a>\n\
<p class=\"table-body\">\n\
&quot;Opaque&quot; : no transparency (default)\n\
</p>\n\
<a name=\"GUID-28761C34-BAC8-423B-A00A-2188D5EDBCF0\"></a>\n\
<p class=\"table-body\">\n\
&quot;Transparent&quot; : transparency is enabled.\n\
</p>\n\
<a name=\"GUID-451BF4F3-324D-442B-A2CF-544D2E427457\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::isTransparent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#ab79d6d7859fceb8fc8b0e4ace1869612&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#afe0e426fb116e16a21121becd9fce93c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride::isTransparent()</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
SupportsAdvancedTransparency\n\
</td>\n\
<td class=\"table-body\">\n\
string (bool)\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-657C330D-2E4B-4082-91A4-EB5530DC3FE7\"></a>\n\
<p class=\"table-body\">\n\
Specifies if this technique supports advanced transparency algorithms (such as depth peeling).\n\
</p>\n\
<a name=\"GUID-A2C4A3AC-BE20-454F-9E4D-521CD44ECB4C\"></a>\n\
<p class=\"table-body\">\n\
If true, the technique must define passes for draw context &quot;transparentPeel&quot;, &quot;transparentPeelAndAvg&quot; and &quot;transparentWeightedAvg&quot;.\n\
</p>\n\
<a name=\"GUID-CB1B486F-AC39-4848-AC9E-DD659AB5CCFB\"></a>\n\
<p class=\"table-body\">\n\
&quot;false&quot; : no advanced transparency support (default value)\n\
</p>\n\
<a name=\"GUID-0023667C-0B84-492D-94B8-CF6B465520C5\"></a>\n\
<p class=\"table-body\">\n\
&quot;true&quot; : supports advanced transparency\n\
</p>\n\
<a name=\"GUID-D2C3617E-B765-4ADA-9A1B-BA9AF5F8B8CE\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::supportsAdvancedTransparency()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#ae919985341ff7706a78139a098146ed3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#a8fec8dc6c9b426f7bc9a17326fcd1676&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride::supportsAdvancedTransparency()</a></span> .\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
OverridesDrawState\n\
</td>\n\
<td class=\"table-body\">\n\
string (bool)\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-BF855B05-F4A6-4D4E-BEAE-9DC092AFF115\"></a>\n\
<p class=\"table-body\">\n\
Specifies if this technique should follow <span class=\"charspan-msgph\">Maya</span>&#39;s transparent object rendering or is self-managed (multi-passes).\n\
</p>\n\
<a name=\"GUID-E3DA5E39-6F1F-4A27-BB01-E57CB9317D0A\"></a>\n\
<p class=\"table-body\">\n\
&quot;false&quot; : does not override state (default value)\n\
</p>\n\
<a name=\"GUID-1151977F-BF88-43D5-A7AD-A0C23769B8BE\"></a>\n\
<p class=\"table-body\">\n\
&quot;true&quot; : self-managed\n\
</p>\n\
<a name=\"GUID-628A5747-D095-4196-94C3-B11085E01B2C\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::overridesDrawState()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a1b9341f2236028651e9d3b7b26d52dcb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#a14ecf9069df30b900d84572ccdb23e0c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride::overridesDrawState()</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-912BF29B-51E5-47D7-AF75-A30666B7904F\"></a>\n\
<p class=\"table-body\">\n\
OverridesNonMaterialItems\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
string (bool)\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-CC51A265-6BEB-446F-98AD-2192FA835170\"></a>\n\
<p class=\"table-body\">\n\
Specifies if this technique should be used to render non-material items such as the wireframe and the selected edges/vertices components.\n\
</p>\n\
<a name=\"GUID-0AA1746B-A36F-4E8E-B162-1DF970CC0AC4\"></a>\n\
<p class=\"table-body\">\n\
This is particularly useful for shading effects that compute displacement for which the object geometry will not match the rendered material, making selection difficult.\n\
</p>\n\
<a name=\"GUID-E0647899-CCF8-41EB-8F63-202312B1D1FA\"></a>\n\
<p class=\"table-body\">\n\
&quot;false&quot; : does not override non-material items (default)\n\
</p>\n\
<a name=\"GUID-EFF6EF3F-BAD1-4C48-9116-005BE7220E6B\"></a>\n\
<p class=\"table-body\">\n\
&quot;true&quot; : used to render non-material items, so that the shader can display UI primitives\n\
</p>\n\
<a name=\"GUID-754472E1-81B6-4B6E-836D-68D35114832F\"></a>\n\
<p class=\"table-body\">\n\
See DrawContext in <span class=\"char_link\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html#supported-pass-annotations\">Supported pass annotations</a></span>.\n\
</p>\n\
<a name=\"GUID-115748B5-3C43-4E96-9EFC-D803D4DB562D\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::overridesNonMaterialItems()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a09c032b89513ada1a3c21260c42ea0da&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#aa726094110d2476e166afb3200f07a7e&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride::overridesNonMaterialItems()</a></span> .\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ExtraScale\n\
</td>\n\
<td class=\"table-body\">\n\
float\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-95871978-E947-4914-BBD9-4D5B77E0E696\"></a>\n\
<p class=\"table-body\">\n\
Specifies if this technique requires an extra scale factor to be applied to the object space bounding box.\n\
</p>\n\
<a name=\"GUID-27C3CABB-18B2-4B51-A87B-2E066F03829F\"></a>\n\
<p class=\"table-body\">\n\
This allows the technique to indicate that the bounding box should be bigger than the base geometry; normally due to effects such as displacement, and to prevent the geometry from being discarded when moved to the edge of the viewport or during selection.\n\
</p>\n\
<a name=\"GUID-7B9E297B-2D5E-4A0F-9F11-A1A724FBE9D6\"></a>\n\
<p class=\"table-body\">\n\
Default value is 1.0.\n\
</p>\n\
<a name=\"GUID-239B1DDE-EF2C-4A19-BD3D-EE6D43F993F7\"></a>\n\
<p class=\"table-body\">\n\
Corresponds to: <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride::boundingBoxExtraScale()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a11f52a7284bd2c98697c744b009790fa&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html#ae330c651fe23d5e83389d7e8e363b7d2&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxShaderOverride::boundingBoxExtraScale()</a></span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
VariableNameAsAttributeName\n\
</td>\n\
<td class=\"table-body\">\n\
string (bool)\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-BF3F220D-8D83-431F-8E4B-F9134A774E4A\"></a>\n\
<p class=\"table-body\">\n\
Tells <span class=\"charspan-msgph\">Maya</span> to use the uniform variable name as the <span class=\"charspan-msgph\">Maya</span> attribute name (instead of the UIName, when present).\n\
</p>\n\
<a name=\"GUID-32BE9779-0171-4C53-9203-3C21CC26347F\"></a>\n\
<p class=\"table-body\">\n\
&quot;false&quot; : use UIName as attribute name (default)\n\
</p>\n\
<a name=\"GUID-4CE3D288-9819-43E8-B538-79BFED22E191\"></a>\n\
<p class=\"table-body\">\n\
&quot;true&quot; : use variable name as attribute name\n\
</p>\n\
<a name=\"GUID-0157DFE3-1D5E-430F-9895-E2AF127B44A4\"></a>\n\
<p class=\"table-body\">\n\
Can be used to maintain backward compatibility with a saved Maya scene, when the UI names defined in the shader file have been modified.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-9ADF632C-A0EE-4358-85D8-9896CCAFAEFC\"></a>\n\
<p class=\"table-body\">\n\
handlesConsolidatedGeometry\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
string (bool)\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-80FC0CA4-9F50-4D1F-B4DB-E66709844F8F\"></a>\n\
<p class=\"table-body\">\n\
When set to False, specifies that the <span id=\"GUID-88019BE8-E8A4-4403-94BB-F210A2F857C8\" class=\"MenuCascade\">Consolidate World</span> feature should be disabled on the geometry to which the glslShader is applied.\n\
</p>\n\
<a name=\"GUID-50AC0CBC-EA7B-432A-B87F-89EA7599A9CF\"></a>\n\
<p class=\"table-body\">\n\
This annotation is useful when your technique draws displacement, the calculations of which involve the object-space co-ordinates of an object, such as use of the World transformation matrix. <span id=\"GUID-4F20DC2D-F35B-4E8C-AA5B-7DA81224B561\" class=\"MenuCascade\">Consolidate World</span> moves vertices of multiple objects into a new shared object-space, and maybe therefore cause your plug-in shader to render incorrectly. In this case, you may want to disable <span id=\"GUID-BAE6D306-4A48-4C7C-9181-B8976D1EC80A\" class=\"MenuCascade\">Consolidate World</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"supported-pass-annotations\"></a><h2 id=\"supported-pass-annotations\">Supported pass annotations</h2></div>\n\
<p>The effect can request that some of the passes in the technique be activated in a specialized context, such as when drawing depth maps for shadows. This is done by adding a string annotation named &quot;DrawContext&quot;, specifying the context in which the pass can be activated.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
DrawContext\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-074D8C77-EAB3-4E22-8004-D148281FDFE1\"></a>\n\
<p class=\"table-body\">\n\
Specifies that this pass should be enabled only for this draw context.\n\
</p>\n\
<a name=\"GUID-329E112D-01BD-4E4F-962C-171477120AD8\"></a>\n\
<p class=\"table-body\">\n\
Multiple passes can have the same DrawContext value.\n\
</p>\n\
<a name=\"GUID-886A0000-4485-4BC0-A113-54D136B23A3F\"></a>\n\
<p class=\"table-body\">\n\
This can be any string value that matches a pass semantic in <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHWRender::MPassContext</a></span>. For example, the following contexts are supported: &quot;colorPass&quot;, &quot;shadowPass&quot;, &quot;depthPass&quot;, and &quot;normalDepthPass&quot;.\n\
</p>\n\
<a name=\"GUID-7727ADFD-DE51-48B3-BBBC-403E3F85631F\"></a>\n\
<p class=\"table-body\">\n\
An empty value (or if DrawContext is not set) is equivalent to setting this annotation to &quot;colorPass&quot;.\n\
</p>\n\
<a name=\"GUID-304B91AB-2E0D-4677-8BD7-A809F6B0FE4F\"></a>\n\
<p class=\"table-body\">\n\
Set to &quot;nonMaterialItemsPass&quot; for passes used to render non-material items. Set to “selectionPass” for passes used to select non-material items See OverridesNonMaterialItems in <span class=\"char_link\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Semantics-and-annotations.html#supported-technique-annotations\">Supported technique annotations</a></span> above.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-21C7265F-2CB2-428E-97B6-219B24107165\"></a>\n\
<p class=\"table-body\">\n\
PrimitiveFilter\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
string\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-C33F91AA-083B-459A-882A-CCC6BE05477B\"></a>\n\
<p class=\"table-body\">\n\
Specifies that this pass can handle the rendering of the following components:\n\
</p>\n\
<a name=\"UL_1A44523D23B446FF858B900AEBFE19EF\"></a>\n\
<ul>\n\
<li>\n\
<p>\n\
<a name=\"GUID-CF8BD163-B59E-4942-8733-EDDE676BE9DD\"></a>line as fat line (line size &gt; 1)\n\
</p>\n\
</li>\n\
<li>\n\
<p>\n\
<a name=\"GUID-5C306ED7-F42A-4663-AD2C-4723C81D8939\"></a>point as fat point (point size &gt; 1)\n\
</p>\n\
</li>\n\
</ul>\n\
<a name=\"GUID-03FB3213-356A-46DD-B5EA-51CE19CA998F\"></a>\n\
<p class=\"table-body\">\n\
Can be used to handle edge or vertex components during the rendering pass or the selection pass.\n\
</p>\n\
<a name=\"GUID-E43A2D24-1A64-437D-847C-5841659DC8F3\"></a>\n\
<p class=\"table-body\">\n\
Vertex components are rendered as quads instead of single pixels, and edge components, mostly during pre-selection highlighting, are rendered larger, for better visibility.\n\
</p>\n\
<a name=\"GUID-5BADA117-C9E4-4BFD-9AB2-84B1B68D699A\"></a>\n\
<p class=\"table-body\">\n\
This is usually achieved by using a geometry shader to convert lines and points to quads.\n\
</p>\n\
<a name=\"GUID-36D22B52-E2CD-4B46-8FE1-953F8ECD12E6\"></a>\n\
<p class=\"table-body\">\n\
&quot;fatLine&quot; : this pass can render lines as quads\n\
</p>\n\
<a name=\"GUID-2E1A5F05-C3D1-4947-90F4-7514FE4A8A76\"></a>\n\
<p class=\"table-body\">\n\
&quot;fatPoint&quot; : this pass can render points as quads\n\
</p>\n\
<a name=\"GUID-359F7A4E-3792-404F-AD78-F5EEAA226540\"></a>\n\
<p class=\"table-body\">\n\
If there is no pass defined that handles this special case, the default pass that handles the draw context &quot;nonMaterialItemsPass&quot; or &quot;selectionPass&quot; is used.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"global-semantic\"></a><h2 id=\"global-semantic\">Global semantic</h2></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"25%\" />\n\
<col width=\"25%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Name</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Type</em>\n\
</td>\n\
<td class=\"table-body\">\n\
<em class=\"strong\">Description</em>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
MayaSwatchRender\n\
</td>\n\
<td class=\"table-body\">\n\
bool\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-96852760-0C54-4844-9A88-66224581716A\"></a>\n\
<p class=\"table-body\">\n\
Identifies when the current rendering process is used to draw the swatch.\n\
</p>\n\
<a name=\"GUID-F54FB208-DAF1-4764-A69D-D6DB5C6C0E35\"></a>\n\
<p class=\"table-body\">\n\
Allows the user to handle a specific path when drawing the swatch.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";