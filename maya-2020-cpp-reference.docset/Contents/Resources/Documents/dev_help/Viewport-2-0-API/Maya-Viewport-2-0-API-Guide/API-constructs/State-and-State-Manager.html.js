var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>State and State Manager</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>State and State Manager</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"state-and-state-manager\"></a></div>\n\
<p>The API introduces a wrapper for the concept of <strong>state blocks</strong>. Those using DirectX will be familiar with this concept already, but this could be something new for to those using OpenGL, especially for those using older version of this interface.</p>\n\
<p>State blocks are logical groupings of state changes. Once created, these blocks are assumed to be immutable GPU resources.</p>\n\
<p>GPU state blocks are reflected in the API via the following classes</p>\n\
<ul>\n\
<li><strong>Blend state</strong> : <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MBlendState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_blend_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_blend_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MBlendState</a></span> (blend, channel write mask)</li>\n\
<li><strong>Rasterization state</strong> : <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRasterizerState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_rasterizer_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_rasterizer_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRasterizerState</a></span> (fill mode, and cull mode control)</li>\n\
<li><strong>Depth and Stencil state</strong> : <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDepthStencilState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_depth_stencil_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDepthStencilState</a></span> (depth enable/write, stencil enable/write/operation)</li>\n\
<li><strong>Texture Sampler state</strong> : <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSamplerState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_sampler_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_sampler_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSamplerState</a></span> (texture filter, address mode, mipmap LOD control, anisotropy and border color control)</li>\n\
</ul>\n\
<p>As with other GPU resources, they are managed by the resource management system. The API interface for these resources is an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStateManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_state_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_state_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MStateManager</a></span>.</p>\n\
<p>The process for using a state block is as follows:</p>\n\
<ol>\n\
<li>To create a new state block:\n\
<ol>\n\
<li><p>A new description of the state block is required. Each state block class has a corresponding descriptor class as follows:</p>\n\
<ol>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MBlendState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_blend_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_blend_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MBlendState</a></span>: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MBlendStateDesc\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_blend_state_desc.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MBlendStateDesc</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRasterizerState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_rasterizer_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_rasterizer_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRasterizerState</a></span>: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRasterizerStateDesc\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_rasterizer_state_desc.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_rasterizer_state_desc.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRasterizerStateDesc</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDepthStencilState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_depth_stencil_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDepthStencilState</a></span>: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDepthStencilStateDesc\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_depth_stencil_state_desc.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDepthStencilStateDesc</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSamplerState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_sampler_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_sampler_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSamplerState</a></span>: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSamplerStateDesc\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_sampler_state_desc.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSamplerStateDesc</a></span></li>\n\
</ol>\n\
<p>Descriptors are not resources and are owned by the plug-in.</p></li>\n\
<li>Use the state manager to acquire a new state block instance.</li>\n\
</ol></li>\n\
<li>To modify an existing state:\n\
<ol>\n\
<li>The current state in the render context can be returned via the state manager.</li>\n\
<li>For each state block its descriptor can be returned.</li>\n\
<li>This descriptor can be modified as required to change some subset of state.</li>\n\
<li>Use the state manager to acquire a new state block instance.</li>\n\
</ol></li>\n\
<li>A state block instance in itself is just a resource. To be enabled, the block must be set via the state manager. This overrides the states affected by the state block and this state persists until another state block instance overrides it.</li>\n\
<li>Blend states (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MBlendState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_blend_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_blend_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MBlendState</a></span>) can be set per output render target.</li>\n\
<li>Sampler states (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSamplerState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_sampler_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_sampler_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSamplerState</a></span>) are scoped by both the shader stage as well as the index for the sampler. For example, a sampler can be set for the 2nd sampler in the pixel shader stage.</li>\n\
</ol>\n\
<p>The following diagram shows the logical connections between state and the overall rendering context. Blending is a property of a color target; depth and stencil state is a property of a depth+stencil target stage; sampling is a prop­erty per shader stage; and rasterization is a render context property.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f8cb9.jpg\' title=\'\' /></div>\n\
<p>Figure 33: Two blend states are shown for two different color targets and a depth+stencil state is shown for a depth+stencil target. Each shader could have a different sampler state and there is a per context rasterization state relationship.</p>\n\
<p>The following is a simple code example to create a state block to perform alpha blending which is commonly done to render transparency. It demonstrates the first approach of creating a state block from scratch.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Create a new blend state descriptor. Set it to be (alpha, 1-alpha) blending and enable \n\
// blending. \n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MBlendStateDesc\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MBlendStateDesc</a> desc; \n\
unsigned int i=0; // Set state for first render target \n\
desc.targetBlends[i].blendEnable = true; \n\
desc.targetBlends[i].destinationBlend = MHWRender::MBlendState::kSourceAlpha; \n\
desc.targetBlends[i].alphaDestinationBlend = MHWRender::MBlendState::kInvSourceAlpha; \n\
desc.targetBlends[i] blendOperation = MHWRender::MBlendState::kAdd; \n\
desc.targetBlends[i].alphaSourceBlend = MHWRender::MBlendState::kOne; \n\
desc.targetBlends[i].alphaDestinationBlend = MHWRender::MBlendState::kInvSourceAlpha; \n\
desc.targetBlends[i].alphaBlendOperation = MHWRender::MBlendState::kAdd;\n\
\n\
// Use the state manager to acquire a new blend state and then enable it. \n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MStateManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_state_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MStateManager</a>* stateMgr; \n\
const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MBlendState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_blend_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MBlendState</a>* blendState = stateMgr-&gt;acquireBlendState(desc); \n\
stateMgr-&gt;setBlendState(blendState); \n\
</pre></div><p>Though it is not necessary to use this API to control the state, the interface has a number of advantages due to the tight integration with the rendering framework. This includes:</p>\n\
<ol>\n\
<li>Instances of state blocks are unique based on the state description.</li>\n\
<li>Each unique instance is cached and can thus be reused.</li>\n\
<li>The internal state management system tracks these changes and avoids redundant changes as much as possible.</li>\n\
<li>The state interface is draw API agnostic.</li>\n\
</ol>\n\
<p>Though these instances are easy to create and hold on to, it is recommended that due to the inherent performance cost on the GPU:</p>\n\
<ol>\n\
<li>The number of state changes made is reduced to a minimum.</li>\n\
<li>That state instances be reused as much as possible.</li>\n\
</ol>\n\
<p>Any plug-ins which change state must follow the guideline that the previous state must be restored after the plug-in is finished drawing. This is due to the fact that state is persistent.</p>\n\
<p>A resource handle can be retrieved when using DirectX11 as real GPU resources exist. They can be used as read-only resources – they should never be modified as the resource manager would not know of what has changed. For example an ID3D11RasterizerState could be retrieved from an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRasterizerState\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_rasterizer_state.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_rasterizer_state.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRasterizerState</a></span> using its <span class=\'code\'>resourceHandle()</span> method.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";