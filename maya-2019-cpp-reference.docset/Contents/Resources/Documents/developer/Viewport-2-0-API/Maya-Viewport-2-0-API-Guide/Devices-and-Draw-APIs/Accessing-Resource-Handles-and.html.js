var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Accessing Resource Handles and Device Handle</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Accessing Resource Handles and Device Handle</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"accessing-resource-handles-and-device-handle\"></a></div>\n\
<p>Although writing device or draw API specific code is discouraged, access is sometimes necessary when device spe­cific information is required. An example of this is if a plug-in wishes to perform some operations using GPU com­pute.</p>\n\
<p>The draw API specific information can be obtained by accessing a handle to a resource. Handles can be accessed at the following levels:</p>\n\
<ul>\n\
<li><strong>Device</strong>: For DirectX11, a reference to the D3D device used by the framework can be returned. For OpenGL this is an OpenGL context which can be used to share with a context created by the plug-in. The sharing API on Windows is uni-directional, and as such, the destination of the share should never be the context for the existing framework; otherwise, all resources in the framework are destroyed.</li>\n\
<li><strong>Textures</strong> (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTexture\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_texture.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_texture.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MTexture</a></span>): A pointer reference to a shader resource view for DirectX11 or a texture identifier for OpenGL can be returned.</li>\n\
<li><strong>Target</strong> (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderTarget\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderTarget</a></span>): This is exposed as a pointer reference to a render target view or a depth stencil view (depending on target type) for DirectX. For OpenGL this is returned as a pointer to a texture id.</li>\n\
<li><strong>Vertex and index buffers</strong>: For DirectX11 a pointer reference to a buffer can be returned. For OpenGL a pointer reference to the buffer id can be returned.</li>\n\
<li><strong>State objects</strong>:\n\
<ul>\n\
<li><strong>Blend States</strong>: For DirectX, a pointer to a Direct3D state object is returned.</li>\n\
<li><strong>Rasterizer States</strong>: For DirectX, a pointer to a Direct3D state object is returned.</li>\n\
<li><strong>Depth Stencil States</strong>: For DirectX, a pointer to a Direct3D state object is returned.</li>\n\
<li><strong>Sampler States</strong>: For DirectX, a pointer to a Direct3D state object is returned.</li>\n\
<li>There is no equivalent for a state object in OpenGL. Thus, to access state, descriptors for each state type should be used. Setting state without using API state objects is discouraged as the internal framework cannot track these changes.</li>\n\
</ul></li>\n\
</ul>\n\
<p>The recommended practice is for a plug-in to create all of the required resources via the API and extract the appropriate GPU references.</p>\n\
<p>As long as the plug-in holds on to a reference to the API wrapper, there is a reference to it and it should not disappear. Due to resource management handling, it is always best to re-query the handle in case it has changed. Resource handles should not change within a single frame render.</p>\n\
<p>It is the responsibility of the plug-in to manage any resources which are created directly on the GPU (with­out going through the API). Additionally, this data cannot be used to create resources via the exposed API wrapper constructs.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> is an interface which commonly accesses GPU data. Both the CgFx and the dx11Shader SDK plug-ins show examples of how to access raw data in order to either bind parameters to shaders or to bind geometry for drawing. Additionally, the plug-ins include code to access the GPU context to create resources which are not tracked by the internal framework.</p>\n\
<p>DirectCompute Example</p>\n\
<p>One possible way to use GPU compute is for supporting procedurally generated geometry. To set this up, a plug-in can be written which adds a custom DAG node (for example, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxLocatorNode</a></span>) along with an asso­ciated draw override (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span>). Within the draw routine for the override, the DirectX11 device is queried:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Get the device and context\n\
ID3D11Device* dxDevice = NULL;\n\
ID3D11DeviceContext* dxContext = NULL;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderer</a>* theRenderer = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MRenderer::theRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MRenderer::theRenderer</a>();\n\
if (theRenderer-&gt;drawAPI() == MHWRender::DrawAPI::kDirectX11)\n\
{\n\
    // init device\n\
    ID3D11Device* dxDevice = (ID3D11Device*)theRenderer-&gt;GPUDeviceHandle();\n\
    if (!dxDevice) return;\n\
\n\
    // get context\n\
    dxDevice-&gt;GetImmediateContext(&amp;dxContext);\n\
    if (!dxContext) return;\n\
}\n\
\n\
</pre></div><p>After this information has been extracted, a compute shader is used to fill in a texture. This texture is then used by a pixel shader to render some geometry.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Load in a compute shader\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> shaderPath(&quot;myComputeShader.hlsl&quot;);\n\
ID3D11ComputeShader* aComputeShader = NULL;\n\
\n\
ID3D10Blob* pPSBuf = NULL;  \n\
HRESULT hr = D3DX11CompileFromFile( shaderPath.asChar(), NULL, NULL, &quot;AComputeShader&quot;, &quot;cs_5_0&quot;,    dwShaderFlags, NULL, NULL, &amp;pPSBuf, NULL, NULL );\n\
hr = dxDevice-&gt;CreateComputeShader( ( DWORD* )pPSBuf-&gt;GetBufferPointer(), pPSBuf-&gt;GetBufferSize(), NULL, &amp;aComputeShader );\n\
pPSBuf-&gt;Release();\n\
\n\
// The “resource” to update. Filled by the compute shader(s), and\n\
// rendered by the pixel shader.\n\
ID3D11ShaderResourceView*  shaderResourceView; // Pixel shader view\n\
ID3D11UnorderedAccessView* computeResourceView; // Compute shader view\n\
Resource pRenderOutput;\n\
ID3D11Texture2D* outputTexture = NULL;\n\
\n\
// Create a 2D texture to write into\n\
D3D11_TEXTURE2D_DESC tdesc;\n\
tdesc.Width = g_width;\n\
tdesc.Height = g_height;\n\
tdesc.MipLevels = 1;\n\
tdesc.ArraySize = 1;\n\
tdesc.SampleDesc.Count = 1;\n\
tdesc.SampleDesc.Quality = 0;\n\
tdesc.Usage = D3D11_USAGE_DEFAULT;\n\
tdesc.Format = DXGI_FORMAT_R8G8B8A8_UNORM;\n\
tdesc.BindFlags = D3D11_BIND_SHADER_RESOURCE | D3D11_BIND_UNORDERED_ACCESS;\n\
tdesc.CPUAccessFlags = 0;\n\
tdesc.MiscFlags = 0;\n\
        \n\
hr = dxDevice-&gt;CreateTexture2D(&amp;tdesc, NULL, &amp;outputTexture);\n\
\n\
// Create an unordered access view to the texture which a compute shader \n\
// can write into.\n\
dxDevice-&gt;CreateUnorderedAccessView( outputTexture, NULL, &amp;computeResourceView);\n\
// Create a resource view to the texture that will be used by a pixel shader \n\
dxDevice-&gt;CreateShaderResourceView(  outputTexture, NULL, &amp;shaderResourceView);\n\
\n\
// Set inputs\n\
dxContext-&gt;CSSetShaderResources( 0, 1, shaderResourceView);\n\
// Set outputs\n\
dxContext-&gt;CSSetUnorderedAccessViews(0, 1, computeResourceView, (UINT*)(&amp;computeResourceView));\n\
\n\
// Set the compute shader\n\
dxContext-&gt;CSSetShader(aComputeShader, NULL, 0 );\n\
// Run the compute shader with 32 x 32 groups (e.g.)\n\
dxContext-&gt;Dispatch( 32, 32, 1 );\n\
\n\
//...\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";