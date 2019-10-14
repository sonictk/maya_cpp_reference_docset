var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Profile Viewport 2.0 rendering events</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Profile Viewport 2.0 rendering events</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"profile-viewport-2.0-rendering-events\"></a></div>\n\
<p>To locate events in the Profiler that are related to execution within Viewport 2.0, search for the prefix “Vp2”. In addition to the prefix Vp2, the rest of the event label provides additional context as to the event that is being measured.</p>\n\
<p>The list of important events can be broken down into a few logical groups as opposed to Profiler categories. For scene processing, the <em>update phase</em> is required to prepare for rendering, and the <em>rendering phase</em> for the actual rendering. There may also be resource management events that occur during the update or rendering phases.</p>\n\
<div class=\'section\'><a id=\"resource-events\"></a><h2 id=\"resource-events\">Resource events</h2></div>\n\
<p>Events related to managing render targets (where the scene is rendered to) are listed below.</p>\n\
<p>Note that this includes events related to managing custom off-screen targets allocated via the API (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderTarget\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_target.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderTarget</a></span>). On-screen targets are not <span class=\'code\'>MRenderTargets</span>.</p>\n\
<ul>\n\
<li>Vp2AcquireOffScreenTarget : Acquire offscreen buffer into which to render</li>\n\
<li>Vp2AcquireOnScreenTarget : Acquire onscreen buffer</li>\n\
<li>Vp2CloneOffScreenTarget : Make a copy of an offscreen buffer</li>\n\
<li>Vp2ReleaseTarget : Release offsceen buffer to buffer pool</li>\n\
<li>Vp2ResizeTarget : Resize a target. May involve reallocation</li>\n\
<li>Vp2MapToSystemMemory : Map a hardware target to system (CPU) raster</li>\n\
<li>Vp2CacheSystemRaster : Copy contents of target to system raster</li>\n\
<li>Vp2SaveCacheToDisk : Save system raster to disk file</li>\n\
<li>Vp2CopyRaster : Make a copy of a system raster</li>\n\
<li>Vp2BlitTargetToImage : Blit a target to a system image</li>\n\
<li>Vp2BlitTargetToGL : Blit a target to OpenGL context</li>\n\
<li>Vp2ReleaseTargetToCache : Release target from buffer cache</li>\n\
<li>Vp2BlitDepthTargetToBuffer : Blit a depth target to a system image</li>\n\
</ul>\n\
<p>Events related to managing textures are listed below. Note that this includes events related to textures acquired via the API (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTextureManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_texture_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_texture_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MTextureManager</a></span>/<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTexture\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_texture.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_texture.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MTexture</a></span>).</p>\n\
<ul>\n\
<li>Vp2AcquireFileTexture : Acquire a texture from a file on disk</li>\n\
<li>Vp2AcquireDataTexture : Acquire a texture from CPU data</li>\n\
<li>Vp2SaveTexture : Save a texture to disk</li>\n\
<li>Vp2RawTextureData : Copy GPU texture data to CPU data</li>\n\
<li>Vp2UpdateTexture : Update a GPU texture in-place</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"update-phase\"></a><h2 id=\"update-phase\">Update phase</h2></div>\n\
<p>The following is a breakdown of some of the main update events. They are listed by functional area and/or scope.</p>\n\
<ul>\n\
<li>Scene Level : Vp2UpdateScene is the main scene level update event</li>\n\
<li>Evaluator Level:\n\
<ul>\n\
<li>Vp2UpdateGeometry : DG evaluation for geometry shapes</li>\n\
<li>Vp2UpdateDagObject : DG evaluation for DAG objects</li>\n\
<li>Vp2TranslateGeometry : Convert DG geometry data into a renderable form, and add any missing geometry streams (for example, generate surface normals)</li>\n\
<li>Vp2UpdateGeometryBuffer : Geometry buffer update</li>\n\
</ul></li>\n\
<li>Shader Level:\n\
<ul>\n\
<li>Vp2ShaderDoDG : DG evaluation for shaders</li>\n\
<li>Vp2ShaderItemCompileShader : Shader compilation</li>\n\
<li>Vp2ConstructFragmentGraph: Shader construction from fragment graph</li>\n\
<li>Vp2ShaderWrite : Shader parameter update</li>\n\
<li>Vp2AssignShaderInstance: Shader instance assignment to a render item</li>\n\
</ul></li>\n\
</ul>\n\
<p>The above events generally occur before UI drawables or render items are processed. The main Profiler events associated with UI drawables lists and render lists are:</p>\n\
<ul>\n\
<li><strong>Vp2UpdateUI</strong>: Build UI drawables. This is done every refresh.</li>\n\
<li><strong>Vp2BuildRenderLists</strong>: Final categorization and filtering of render items before rendering. Will take UI drawables as input as well as render items created by node evaluation. If tracing is enabled via the <span class=\'code\'>ogs</span> command, then the trace label to examine the list counts is called <em>Build Render Lists</em>.</li>\n\
<li><strong>Vp2ClearRenderLists</strong>: The render lists that have been built will be flushed during this event, as appropriate.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"rendering\"></a><h2 id=\"rendering\">Rendering</h2></div>\n\
<p>The event that represents a scene render is labelled: Vp2SceneRender.</p>\n\
<p>The event lists can be divided into two: “high” level and “low” level. The “high” level is the functional groupings of the “low” level passes, as well as rendering of lists of UI drawables or render items.</p>\n\
<div class=\'section\'><a id=\"high-level-events\"></a><h3 id=\"high-level-events\">High level events</h3></div>\n\
<p>This categorization of events is based on the output destination for rendering, as well as the rendering pipeline logic used.</p>\n\
<div class=\'section\'><a id=\"internal-rendering-events\"></a><h4 id=\"internal-rendering-events\">Internal rendering events</h4></div>\n\
<ul>\n\
<li><strong>Vp2DrawOverlay</strong>: Event that represents overlay drawing (for example, a 2d marquee drawing tool)</li>\n\
<li><strong>Vp2DrawUVEditor</strong>: Event that represents drawing into the UV Editor</li>\n\
<li><strong>Vp2BuildShadowMap</strong>: Event that represents shadow map update</li>\n\
<li><strong>Vp2Draw3dBeautyPass</strong>: Event that represents the rendering of a color / “beauty” pass</li>\n\
<li>Any UI drawable rendering that occurs as part of overlay, UV Editor or before/after a beauty pass has event labels of the form:\n\
<ul>\n\
<li><strong>Vp2<ui list=\"\" name=\"\"></ui></strong>: Where <ui list=\"\" name=\"\"> names are given in the Low Level Events section below</ui></li>\n\
</ul></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"plug-in-rendering-events\"></a><h4 id=\"plug-in-rendering-events\">Plug-in rendering events</h4></div>\n\
<p>If a plug-in renderer (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_renderer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxRenderer</a></span>) is used, then the Viewport 2.0 processing to render an image is represented by the <strong>Vp2DrawPluginRenderer</strong> event.</p>\n\
<p>If a render override (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span>) is used, then the Viewport 2.0 processing to render an image is represented by the <strong>Vp2OverrideRenderer</strong> event. The event is broken down into the following sub-events:</p>\n\
<ul>\n\
<li><strong>Vp2ExecuteRenderOverride</strong>: The execution of a render override. Excludes plug-in setup.</li>\n\
<li><strong>Vp2UpdateOverrideOperation</strong>: Any parameter update required per operation. The operation event labels are as follows:\n\
<ul>\n\
<li><strong>Vp2ClearOperation</strong>: Background clear</li>\n\
<li><strong>Vp2SceneOperation</strong>: 3d scene render</li>\n\
<li><strong>Vp2QuadOperation</strong>: 2D quad render</li>\n\
<li><strong>Vp2UserOperation</strong>: User operation</li>\n\
<li><strong>Vp2HUDOperation</strong>: HUD operation</li>\n\
<li><strong>Vp2PresentationOperation</strong>: Presentation operation</li>\n\
</ul></li>\n\
<li>The label <strong>Vp2DrawOperation</strong> indicates that an event is measuring the rendering part of the above operations. This label will be used instead of an internal rendering event label such as Vp2Draw3dBeautyPass.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"low-level-events\"></a><h3 id=\"low-level-events\">Low level events</h3></div>\n\
<ul>\n\
<li><strong>Render “Pass” Events</strong>:\n\
<ul>\n\
<li><p>From within the main 2d or 3d rendering passes, finer granularity events currently use pass semantic names as labels. For example, the “colorPass” semantic is used to show the processing for the color pass.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> These semantic names match those that are exposed in the API via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPassContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_pass_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPassContext</a></span>. As an example, the GLSL and DX11 hardware shader plug-ins use these names.</p>\n\
</blockquote></li>\n\
</ul></li>\n\
<li>Events that render UI render lists have the following labels:\n\
<ul>\n\
<li>Render before beauty pass:\n\
<ul>\n\
<li>“Pre-Opaque UI”</li>\n\
<li>“Pre-Transparent UI&quot;</li>\n\
</ul></li>\n\
<li>Render after beauty pass:\n\
<ul>\n\
<li>“Post Render UI&quot;</li>\n\
<li>&quot;Post Alpha UI&quot;</li>\n\
</ul></li>\n\
<li>&quot;X-Ray UI” : X-ray drawing (for example, X-ray joints)</li>\n\
<li>Rendering that must be drawn on top of other elements in the scene:\n\
<ul>\n\
<li>&quot;On-Top UI&quot; : 3d drawing</li>\n\
<li>&quot;Orthographic On-Top UI&quot; : 2d drawing</li>\n\
</ul></li>\n\
<li>&quot;Manipulator&quot; : Manipulator drawing (2D or 3D)</li>\n\
<li>Overlay drawing:\n\
<ul>\n\
<li>&quot;2D Overlay UI&quot;</li>\n\
<li>&quot;3D Overlay UI&quot;</li>\n\
</ul></li>\n\
<li>HUD drawing:\n\
<ul>\n\
<li>&quot;HUD&quot;</li>\n\
</ul></li>\n\
</ul></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";