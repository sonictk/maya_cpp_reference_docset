var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader Instances</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Shader Instances</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"shader-instances\"></a></div>\n\
<p>For each render item (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>), there is a 1:1 relationship with a shader. As the entire framework is based on programmable shading, an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> is a wrapper around a hardware programmable shader. In this section it is assumed that you are already familiar with hardware Effects.</p>\n\
<p>This particular interface aims to provide the most integrated solution for the usage of Effect based shaders with the rendering framework. The key properties of this interface are: simplicity, flexibility, management, and interopera­bility.</p>\n\
<p>The closest match in the old interface is a hardware shader plug-in interface (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span>). Below is a table contrasting <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span> versus <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"34.93975903614458%\" />\n\
<col width=\"28.514056224899598%\" />\n\
<col width=\"36.54618473895582%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-699AC2F7-A03E-4D3E-A310-AAFA510592C9\"></a>\n\
<p class=\"table-body\">\n\
Characteristic\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-687710E3-F1F6-47C3-9CE4-69B1504A9682\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span> interface\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-E7CA56EA-E7D2-428B-8866-0AC24566C9E2\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> interface\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-556BA475-B1E8-4F62-8A6F-CD451089897E\"></a>\n\
<p class=\"table-body\">\n\
Interface\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-8EF14EBA-01C9-444E-A5A3-7AE1353ECC52\"></a>\n\
<p class=\"table-body\">\n\
A new node type needs to be created and can only act as a sur­face shader override.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-9A3C7498-E4C9-44DE-906F-BEB44FC96AB2\"></a>\n\
<p class=\"table-body\">\n\
Does not require a DG node to be cre­ated and assigned to a surface shader. It can thus be (re)used for more than just one API interface.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-A36B8FF6-C8F5-4268-BFF8-CA55FEFA193A\"></a>\n\
<p class=\"table-body\">\n\
Parameters\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-C9EC26C9-35D1-4C93-A785-FAB47681A203\"></a>\n\
<p class=\"table-body\">\n\
Custom code needs to be written as part of the plug-in.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-AA72F173-E299-40DA-BD46-97C485900A15\"></a>\n\
<p class=\"table-body\">\n\
Uniform parame­ter definition and update is sup­ported internally. Both simple and complex data types are supported and parameter binding works with all exposed API resources types such as textures and targets.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-55C55B8D-30DA-4B80-B664-18234B1006FB\"></a>\n\
<p class=\"table-body\">\n\
Effects support\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-4A2AF543-9C8A-4082-AADB-5943596F3440\"></a>\n\
<p class=\"table-body\">\n\
Separate plug-ins have been used to support different languages with little or no commonality between them. All load­ing, parsing, compiling and maintenance is up to the plug-in code.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-927B88B5-3AD9-4650-9DA4-4068DBC43C9D\"></a>\n\
<p class=\"table-body\">\n\
The shaders sup­ported are Effects file based. Effect files on disk can be read and compiled to return shader instances. Effects on disk are auto­matically moni­tored for modifications. No additional coding support is required by the plug-in.\n\
</p>\n\
<a name=\"GUID-EA07B0C0-A51F-4C65-9BE3-C5B5FF07BA54\"></a>\n\
<p class=\"table-body\">\n\
DirectX11 HLSL, OpenGL CgFX, and GLSL through the use of OGSFX files are supported.\n\
</p>\n\
<a name=\"GUID-8A69E16E-4B05-4F88-AE11-1E428151CFBF\"></a>\n\
<p class=\"table-body\">\n\
See <em class=\"mild\">Create and render hardware shaders</em> and <em class=\"mild\">Create and visualize a GLSL shader</em> in the <em class=\"mild\">Shading</em> section of the Maya User Guide for more information.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-4D841F73-E534-45F2-8453-AEBA6CD45603\"></a>\n\
<p class=\"table-body\">\n\
Semantic binding\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-B3491AD4-38AC-4DF8-90E1-F3A17C209C75\"></a>\n\
<p class=\"table-body\">\n\
Custom code needs to be written as part of the plug-in.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-77159D08-D08A-4BBB-8EF1-D2AA3D439038\"></a>\n\
<p class=\"table-body\">\n\
A set of SAS seman­tics are supported for automatically binding various uni­form and varying parameters.\n\
</p>\n\
<a name=\"GUID-C6BAB93E-0C07-456E-A535-95AF6CA40967\"></a>\n\
<p class=\"table-body\">\n\
Semantics sup­ported include those required for surface shading and screen space rendering.\n\
</p>\n\
<a name=\"GUID-DE88006C-9394-4FB9-9798-794775740054\"></a>\n\
<p class=\"table-body\">\n\
The semantics sup­ported between CgFx and HLSL are mostly equivalent but can differ due to shading lan­guage differences\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-4FBB4FE3-F81E-49F4-BAA9-A8DB77D0E14E\"></a>\n\
<p class=\"table-body\">\n\
Internal shaders access\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-64BEB008-4F37-4984-8C48-75302900F012\"></a>\n\
<p class=\"table-body\">\n\
This concept does not exist in this interface.\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-F9E9AC4E-8022-4D7E-8E30-2A689B8CBABA\"></a>\n\
<p class=\"table-body\">\n\
There are a number of internally provided preset shaders available. These provide automatic integration with the rendering framework. Features such as light binding, full screen effects, and transparency require no additional work.\n\
</p>\n\
<a name=\"GUID-D1A09F14-7C50-4F39-A5EF-8E1F4C6FD45E\"></a>\n\
<p class=\"table-body\">\n\
Implementations of <span class=\"code\"><a href=\"javascript:void(0)\" data-symbol=\"MPxShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShadingNodeOverride</a></span> can access shaders built by Maya through this interface.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-E1F16EC0-9D8B-4B9C-971D-4EC2844EC037\"></a>\n\
<p class=\"table-body\">\n\
Shader Management\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-71191A6B-59C2-48EA-A69D-1BDA8AF42E47\"></a>\n\
<p class=\"table-body\">\n\
All shaders are managed by the internal resource manager and as such can be shared and reused.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"GUID-AE74F383-6E88-486C-922B-06BCE0AC4486\"></a>\n\
<p class=\"table-body\">\n\
State Management\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"GUID-E72D20CB-0A6B-44F9-B80E-EC611053C363\"></a>\n\
<p class=\"table-body\">\n\
Technique, pass and other state management is tracked internally within the render­ing framework.\n\
</p>\n\
<a name=\"GUID-2D63FAC4-C2EF-4EDB-8D42-E8573B17DA79\"></a>\n\
<p class=\"table-body\">\n\
Any optimizations are automatically provided without changes to any plug-in source code.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>The “eco-system” of each can be shown diagrammatically:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\">\n\
<colgroup>\n\
<col width=\"55.864811133200796%\" />\n\
<col width=\"44.135188866799204%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"not-ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<img src=\"dev_help/images/aa0f5472.jpg\" /><a name=\"GUID-A51DC0FD-EC6C-4EEF-9673-222048298AAE\"></a>\n\
<p class=\"table-body\">\n\
Figure 24\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<img src=\"dev_help/images/aa0f548d.jpg\" /><a name=\"GUID-72E9A79D-6A8B-4DE1-8858-3E93580BEF78\"></a>\n\
<p class=\"table-body\">\n\
Figure 25\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>On the left, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> is integrated as part of the framework. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderManager</a></span> class is shown. This is the API interface to the shader resources maintained by the internal resource management system. On the right, a possible setup for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxHwShaderNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxHwShaderNode</a></span> is shown. All “custom” boxes need to be written by the plug-in writer.</p>\n\
<p>Note that we are using the term <strong>shader instance</strong> versus <strong>shader</strong>. This distinction is made as the shader provides the definition of the algorithm and the definition of input and output parameters. A shader instance defines the param­eter input values or bindings for a given instance of the shader.</p>\n\
<p>To acquire a shader instance, use the manager interfaces to either load in an Effects file from disk, or acquire an internally created instance. Some key properties of the manager include:</p>\n\
<ul>\n\
<li>Shader compiler macros may be defined when using Effects files on disk</li>\n\
<li>It is not mandatory to use the internal caching mechanism. While caching is enabled, if an Effect on disk is changed it is automatically reloaded.</li>\n\
<li>Search paths for Effects files can be added.</li>\n\
<li>When acquiring a shader instance a specific technique needs to be specified. To use a different technique another shader instance needs to be acquired. If no technique is specified then the default technique spec­ified in the Effects file is used.</li>\n\
<li><p>When acquiring a shader via any one of the various interfaces on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderManager</a></span>, such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager::getEffectsFileShader()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a581c659670f0e3168750382c61a91a25&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html#a1baace207989b925d235d19e394df576&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderManager::getEffectsFileShader()</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager::getEffectsBufferShader()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#ad99e1c36c00ccaf3ea0c7fe0599557f8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html#a9ecc5c0caef38661351a32c3338b2438&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderManager::getEffectsBufferShader()</a></span>, if a shader compilation failure occurs, then errors will be output to the Output Window on Windows and Linux, and to the console on Mac. This should aid in the debugging process for shader writers.</p>\n\
<p>When a shader cannot be returned, a NULL value is returned.</p></li>\n\
</ul>\n\
<p>It is possible to specify pre or post callback functions for each shader instance. This is useful, for example, to update parameters based on the current drawing context. Custom callbacks can be derived from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance::DrawCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a98585feea3c2e5ad2280c852bab83edd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance::DrawCallback</a></span> interface.</p>\n\
<p><strong>Parameters</strong> can also be set at any time, either within the callback or outside. There is a range of parameter types which are supported, including: Booleans, integers, float tuples, matrices, textures and texture samplers, and render targets. The general process for updating parameters is to query the <strong>parameter list</strong>, and then for each parameter of interest, set its value using the appropriate method on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>.</p>\n\
<p>Any <strong>semantic</strong> associated with a parameter can also be queried. In general, any parameters with system defined semantics are automatically updated. This includes uniforms such as the object-to-world matrix. For a list of semantics supported, see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Shader-semantics-supported-by.html\' title=\'\'>Shader semantics supported by Viewport 2.0</a>.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance::requiredVertexBuffers()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a6e71839b449651e57915ff2f04358a3e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html#aa62b9b9b0c62825f4526d051aff9c492&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance::requiredVertexBuffers()</a></span> method allows you to query a list of vertex buffer descriptors for a given shader instance (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVertexBufferDescriptorList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_vertex_buffer_descriptor_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MVertexBufferDescriptorList</a></span>). Subscene overrides, in particular, can make use of this method when using shader instances for custom render items, although this method can be called outside of the context of this override.</p>\n\
<p>There is a natural separation between shading and rendering geometry. As such, varying parameters (geometry attributes) are not exposed as shader parameters. The render phase of the pipeline automatically handles binding of geometric data and making the draw calls for rendering.</p>\n\
<p>As varying parameter binding relies upon semantics, any custom Effects must be written with the appropriate semantic tagging for the varying parameters. The following is an example vertex shader input structure which tags position and normal requirements.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">struct VS_INPUT { \n\
    float4 Pos : POSITION; // Position semantic to bind positional data streams \n\
    float4 Norm : NORMAL; // Normal semantic to bind normal data streams \n\
};\n\
</pre></div><p>As part of the integration of a shader instance, an instance can specify whether it draws with any <strong>transparency</strong>. This helps with the categorization of render items (<span class=\'code\'>MRenderItems</span>) as they flow through the pipeline.</p>\n\
<p>Revisiting the Update Phase, the main pieces can now be filled in as follows:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8c9b.jpg\' title=\'\' /></div>\n\
<p>Figure 26</p>\n\
<p>Instead of a “shader”, an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> instance is referenced by an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>. The geometric attributes of the shader represented by the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> provides set of vertex and index descriptors which specify the requirements to be used during update.</p>\n\
<p>The pipeline in which the update and draw phases reside could look as follows:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8ca1.jpg\' title=\'\' /></div>\n\
<p>Figure 27</p>\n\
<p>In the figure above, some of the abstract constructs from the previous diagram have been replaced with constructs exposed in the API. The Update Phase produces <span class=\'code\'>MRenderItems</span> (and their associated <span class=\'code\'>MShaderInstances</span>). The trans­parency indicator on the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> is taken into account during the consolidation and categorization phases so that the render item may be being transferred to a “transparent” render item list. During the Draw Phase, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> is examined. The corresponding <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> sets up the shader and updates the actual hard­ware shader based on the parameter values of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span>. Geometry referenced in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometry\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_geometry.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGeometry</a></span> will be bound and drawn. Any pre or post callback associated with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> would be invoked at the appropriate times.</p>\n\
<p>There is one older interface which is used for fixed-function material setting. This is the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MMaterial\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_material.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_material.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MMaterial</a></span> interface, which is used in conjunction with the UI DAG object interface (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShapeUI</a></span>). There is no connection between <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance</a></span> and UI objects, as there is no mixing of programmable shaders with the fixed function legacy drawing framework.</p>\n\
<div class=\'section\'><a id=\"consolidation-considerations\"></a><h2 id=\"consolidation-considerations\">Consolidation considerations</h2></div>\n\
<p>The shader instance assigned to a render item can affect consolidation. Different instances of shaders mean that consolidation cannot occur between the associated render items.</p>\n\
<p>If shader instances are used, the plug-in should keep a minimum number of unique configurations. For example, to have two colored shaders, the plug-in could keep 2 shader instances which both use the same shader definition but with different parameter values (color). Conversely, the plug-in should not keep two shaders with the same shader parameters.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";