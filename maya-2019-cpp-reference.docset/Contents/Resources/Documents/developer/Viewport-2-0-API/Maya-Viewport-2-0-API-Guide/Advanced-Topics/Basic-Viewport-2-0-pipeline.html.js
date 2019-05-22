var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Basic Viewport 2.0 pipeline sequencing</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Basic Viewport 2.0 pipeline sequencing</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"basic-viewport-2.0-pipeline-sequencing\"></a></div>\n\
<div class=\'section\'><a id=\"introduction\"></a><h2 id=\"introduction\">Introduction</h2></div>\n\
<p>This section covers the basic sequencing of the Viewport 2.0 pipeline when rendering a 3d representation of the scene to the viewport or image on disk. It is within this sequence where various render items or UI drawables are handled.</p>\n\
<p>The assumption is that render items and UI drawables have gone through the renderer’s internal consolidation, filtering and categorization mechanism to produce lists of render items or lists of UI drawables. An example would be a list of opaque shaded render items.</p>\n\
<p>Certain lists may be sorted based on a given criteria. For example, a transparent render item list may be sorted by distance to the current camera, while material items may be sorted by shader uniqueness (key). When unsorted, the ordering in the list does not necessarily reflect the ordering that render items are stored on an override, or any Maya scene object ordering.</p>\n\
<p>The finest granularity used to describe a sequence is called a logical <strong>operation</strong>, to match the nomenclature used for Viewport 2.0 render overrides (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span>). Even for a complex internal render graph, the assumption is that it can be broken down into a linear sequence of operations.</p>\n\
<p>At the highest level, a sequence is broken down into frames, where a <strong>frame</strong> performs rendering in order to produce the contents of an off-screen color and depth output target. The targets that are used to present to an interactive viewport or save to disk image are called <strong>final</strong> targets.</p>\n\
<p>Where applicable, an indication as to whether a <strong>pass semantic</strong> is used is shown in the description of the internal sequencing. Operations that specify a unique pass semantic are denoted using the characters <strong>(P)</strong>.</p>\n\
<p>Rendering for a frame is broken down into roughly three parts: <strong>pre-scene</strong> rendering, <strong>scene</strong> rendering, and <strong>post-scene</strong> rendering. The main conditional branching for UI items is dependant on whether post-effects have been enabled. This generally entails UI items being moved to lists that draw after post-effects have been applied.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The following is a snapshot of a typical frame render, and the actual sequencing may deviate from what is presented here depending on the render graph produced. Also, the categorizations of various items are a reflection of the current implementation and can also deviate if the implementation changes.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"pre-scene-rendering\"></a><h2 id=\"pre-scene-rendering\">Pre-scene rendering</h2></div>\n\
<p>Within the pre-scene rendering phase, the basic operations include:</p>\n\
<ul>\n\
<li><p>Shadow map update (See <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Basic-Viewport-2-0-pipeline.html#shadow-pass-rendering\' title=\'\'>Shadow pass rendering</a> below.)</p></li>\n\
<li><p>Sort material render items</p></li>\n\
<li><p>Clearing the color channel (background) for a color target</p></li>\n\
<li><p>If on-screen rendering desired:</p>\n\
<ul>\n\
<li>Viewport pre render notification</li>\n\
</ul></li>\n\
<li><p>Pre-frame notification</p></li>\n\
<li><p>Pre-scene notification</p></li>\n\
<li><p>Optionally render the scene to produce the contents of a depth target:</p>\n\
<ul>\n\
<li><p>Opaque non-UI render items (for example, shaded triangles) (P)</p></li>\n\
<li><p>Opaque UI render items (for example, wireframe) (P)</p></li>\n\
<li><p>Semi-transparent bitmap render item (P). See <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Basic-Viewport-2-0-pipeline.html#particle-rendering\' title=\'\'>Particle rendering</a> for an example.</p></li>\n\
</ul></li>\n\
<li><p>Render items that can act as <em>hold-outs</em> (P). Note that this is quite similar to a regular non-hold-out sequence.</p>\n\
<ul>\n\
<li><p>Opaque non-UI render items (P)</p></li>\n\
<li><p>Opaque UI items (P)</p></li>\n\
<li><p>Transparency drawing (P). See <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Basic-Viewport-2-0-pipeline.html#transparency-rendering\' title=\'\'>Transparency rendering</a>.</p></li>\n\
</ul></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"scene-rendering\"></a><h2 id=\"scene-rendering\">Scene rendering</h2></div>\n\
<p><em>Scene</em> rendering, which can also be thought of as representing the <em>beauty</em> pass, renders using the following operations:</p>\n\
<ul>\n\
<li><p>When post effects are disabled:</p>\n\
<ul>\n\
<li>Pre-scene opaque UI render items (P)</li>\n\
</ul></li>\n\
<li><p>Opaque non-UI render items (P)</p></li>\n\
<li><p>Opaque UI render items (P)</p></li>\n\
<li><p>Semi-transparent bitmap render items (P). See <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Basic-Viewport-2-0-pipeline.html#particle-rendering\' title=\'\'>Particle rendering</a> for an example.</p></li>\n\
<li><p>Transparency drawing (P). See <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Basic-Viewport-2-0-pipeline.html#transparency-rendering\' title=\'\'>Transparency rendering</a>.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"post-scene-rendering\"></a><h2 id=\"post-scene-rendering\">Post-scene rendering</h2></div>\n\
<p>Post-scene rendering includes operations for 2D post effects, and any additional UI drawing that should not participate when any 2D post effect is enabled. By default, certain items do not take part in post effects. Otherwise, the option to override the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::setExcludedFromPostEffects()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a634faadbe865d745bc8ed447efe671da&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::setExcludedFromPostEffects()</a></span> method is available.</p>\n\
<ul>\n\
<li><p>SSAO (screen space ambient occlusion) post effect</p>\n\
<ul>\n\
<li><p>Hold-out render items</p></li>\n\
<li><p>Normal + Depth rendering pass (P)</p>\n\
<ul>\n\
<li>Render items marked as participating in post effects.</li>\n\
</ul></li>\n\
<li><p>2D SSAO main algorithm</p>\n\
<ul>\n\
<li>Full screen quad rendering only</li>\n\
</ul></li>\n\
</ul></li>\n\
<li><p>Motion blur post effect</p>\n\
<ul>\n\
<li><p>Motion vector pass</p>\n\
<ul>\n\
<li>Render items marked as participating in post effects</li>\n\
</ul></li>\n\
<li><p>2D Motion blur main algorithm</p>\n\
<ul>\n\
<li>Full screen quad rendering only</li>\n\
</ul></li>\n\
</ul></li>\n\
<li><p>Depth of field post effect</p>\n\
<ul>\n\
<li><p>Depth pass (P)</p>\n\
<ul>\n\
<li><p>Opaque render items</p></li>\n\
<li><p>Transparent render items</p></li>\n\
</ul></li>\n\
<li><p>2D depth of field algorithm</p>\n\
<ul>\n\
<li>Full screen quad rendering only</li>\n\
</ul></li>\n\
</ul></li>\n\
<li><p>Mask Rendering</p>\n\
<ul>\n\
<li><p>Mask creation</p>\n\
<ul>\n\
<li>Render items marked as not participating in post effects (P)</li>\n\
</ul></li>\n\
<li><p>Mask composite</p>\n\
<ul>\n\
<li>Full screen quad rendering only</li>\n\
</ul></li>\n\
</ul></li>\n\
<li><p>Pre-scene opaque UI render items (P)</p>\n\
<ul>\n\
<li>When post effects are enabled</li>\n\
</ul></li>\n\
<li><p>Post UI rendering of scene elements</p>\n\
<ul>\n\
<li><p>If post-effects are enabled</p>\n\
<ul>\n\
<li><p>Opaque UI render items (P)</p></li>\n\
<li><p>Opaque 2D UI render items (P)</p></li>\n\
<li><p>Semi-transparent bitmap render items. (P)</p></li>\n\
</ul></li>\n\
<li><p>Transparent UI render items (P)</p></li>\n\
<li><p>Transparent UI 2D render items (P)</p></li>\n\
<li><p>UI Render Items marked as <strong>x-ray</strong> or drawing no depth test (P). Note that x-ray active components mode can trigger items to be added to this list, as well as explicit setting from the API.</p></li>\n\
</ul></li>\n\
<li><p>Post UI rendering of non-scene elements:</p>\n\
<ul>\n\
<li><p>Manipulator UI item rendering, excluding 2D text items. (See <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Basic-Viewport-2-0-pipeline.html#manipulators\' title=\'\'>Manipulators</a>.)</p></li>\n\
<li><p><em>On top</em> UI drawable rendering. Includes: internal 2D camera UI, sculpting drawing, and 2D manipulator text.</p></li>\n\
<li><p>2D and 3D overlay UI item rendering</p></li>\n\
</ul></li>\n\
<li><p>If off-screen rendering</p>\n\
<ul>\n\
<li><p>HUD rendering</p></li>\n\
<li><p>Color Management</p>\n\
<ul>\n\
<li>Quad rendering only</li>\n\
</ul></li>\n\
</ul></li>\n\
<li><p>Post scene render notification</p></li>\n\
<li><p>Post frame render notification</p></li>\n\
<li><p>If on-screen rendering</p>\n\
<ul>\n\
<li><p>Color Management</p></li>\n\
<li><p>HUD</p></li>\n\
<li><p>Viewport post render notification</p></li>\n\
<li><p><em>Present</em> on-screen</p></li>\n\
</ul></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"transparency-rendering\"></a><h2 id=\"transparency-rendering\">Transparency rendering</h2></div>\n\
<p>The process of rendering transparent items differs based on the transparency algorithm chosen, and the categorization of the item.</p>\n\
<p>The basic logic is:</p>\n\
<ul>\n\
<li><p>Non-UI render items that indicate support for advanced transparency (Weighted Average, Depth Peeling) (P)</p></li>\n\
<li><p>Non-UI render items that do not support advanced transparency; or, if Object Sorting or Simple transparency is used.</p></li>\n\
<li><p>Note that the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::setSupportsAdvancedTransparency()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a1cb8ade4b1a11be0c16c7ffc2a2e292c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::setSupportsAdvancedTransparency()</a></span> method can be used to explicitly opt out of advanced transparency.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"particle-rendering\"></a><h2 id=\"particle-rendering\">Particle rendering</h2></div>\n\
<p>Different type of items can be created for particle systems, since the object can specify different display variations. Points and streaks, for the most part, are added to the opaque or transparent render item lists and the transparent bitmap lists. Any numeric will also end up in x-ray lists. (Note that stock numeric shaders acquired from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderManager</a></span> also end up in x-ray lists.). Sphere and blobby items will end up on opaque or opaque UI lists (latter for wireframe). Cloud and tube will end up in transparent or opaque UI lists (the latter for wireframe).</p>\n\
<div class=\'section\'><a id=\"shadow-pass-rendering\"></a><h2 id=\"shadow-pass-rendering\">Shadow pass rendering</h2></div>\n\
<p>Any shadow maps used for 3d scene rendering are updated during pre-scene rendering as needed. Only render items (not UI drawables) are considered for shadow map creation, with the following sequencing:</p>\n\
<ul>\n\
<li><p>Perform any render item filtering</p></li>\n\
<li><p>Draw opaque render items (P)</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"image-plane-rendering\"></a><h2 id=\"image-plane-rendering\">Image Plane rendering</h2></div>\n\
<p>Image plane rendering can create opaque or transparent objects, but they are categorized to not take part in post-effects and hence are always added to non post-effect lists.</p>\n\
<div class=\'section\'><a id=\"api-ui-draw-manager\"></a><h2 id=\"api-ui-draw-manager\">API UI Draw Manager</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> is the API interface for handling various UI drawing, and is available from various API interfaces. Both API as well as internal drawing can produce different drawables based on the class methods used.</p>\n\
<p>For object override and render override drawing, the following general mapping occurs:</p>\n\
<ul>\n\
<li><p>Text: Add item to x-ray list</p></li>\n\
<li><p>Icons: Add item to opaque UI list. Note that they are not added to the x-ray list.</p></li>\n\
<li><p>Mesh: This includes the various geometric primitive types, and stock geometry. Note that these items will never participate in shadow or post effects passes, but can be lit and shaded using Maya lights, depending on primitive type.</p>\n\
<ul>\n\
<li><p>If opaque</p>\n\
<ul>\n\
<li><p>If (3d)</p>\n\
<ul>\n\
<li>Add item to opaque UI list.</li>\n\
</ul></li>\n\
<li><p>Else</p>\n\
<ul>\n\
<li>Add item to opaque 2d UI list.</li>\n\
</ul></li>\n\
<li><p>Items are also added to the non-post effect list since they are considered to be UI.</p></li>\n\
</ul></li>\n\
<li><p>Else if transparent and filled and not points or lines</p>\n\
<ul>\n\
<li><p>if (3d)</p>\n\
<ul>\n\
<li>Add item to transparent UI list.</li>\n\
</ul></li>\n\
<li><p>Else</p>\n\
<ul>\n\
<li>Add item to transparent 2d UI list.</li>\n\
</ul></li>\n\
<li><p>Items are also added to the non-post effect list since they are considered to be UI.</p></li>\n\
</ul></li>\n\
<li><p>If drawing in x-ray mode</p>\n\
<ul>\n\
<li>Add item to x-ray list.</li>\n\
</ul></li>\n\
</ul></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"manipulators\"></a><h3 id=\"manipulators\">Manipulators</h3></div>\n\
<ul>\n\
<li><p>All items are added to the manipulator item list, except for 2D text which will be added to the <em>on top</em> list.</p></li>\n\
<li><p><em>footPrintManip</em> example: The <em>Stretch Me!</em> and <em>Stretch Me 2D!</em> text is drawn on top of the footprint locator (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span>) text (x-ray) and uiDrawManager (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> ) sample text (transparent UI 2D).</p>\n\
<div class=\'figure\'><img src=\'developer/images/Basic_sequencing_uiDrawManager.png\' title=\'\'></div></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"tool-context-drawing\"></a><h3 id=\"tool-context-drawing\">Tool context drawing</h3></div>\n\
<ul>\n\
<li>All items will be added to the 2D or 3D overlay item list (see below).</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"uv-editor\"></a><h3 id=\"uv-editor\">UV Editor</h3></div>\n\
<ul>\n\
<li>2d meshes that are used for drawing the background texture are added as items to the pre UI list.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"api-overlay-rendering\"></a><h2 id=\"api-overlay-rendering\">API Overlay Rendering</h2></div>\n\
<p>Tool context drawing all reside within the pipeline operations for drawing overlays. This means items are added to the 2D or 3D overlay lists. This applies for 3d viewports as well as the UV Editor. 3D scene elements are generally not redrawn when drawing overlays.</p>\n\
<div class=\'section\'><a id=\"api-uv-editor-rendering\"></a><h2 id=\"api-uv-editor-rendering\">API UV Editor Rendering</h2></div>\n\
<p>The background texture rendering can be supplied by a shader override (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>). In this case, the drawing is done via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> and is always drawn before any object UI, or 2D manipulators.</p>\n\
<div class=\'section\'><a id=\"api-object-rendering\"></a><h2 id=\"api-object-rendering\">API Object Rendering</h2></div>\n\
<div class=\'section\'><a id=\"mpxdrawoverride\"></a><h3 id=\"mpxdrawoverride\">MPxDrawOverride</h3></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDrawOverride</a></span> drawing is, by default, categorized as an opaque render item, but never participates in any post effects, nor transparency, although it can participate in shadow map creation.</p>\n\
<p>Developer kit example: <em>rawFootPrintNode</em></p>\n\
<ul>\n\
<li><p>1 internally defined item is added to the opaque list</p></li>\n\
<li><p>1 item is added to the x-ray list (text via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span>).</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"mpxgeometryoverride-and-mpxsubsceneoverride\"></a><h3 id=\"mpxgeometryoverride-and-mpxsubsceneoverride\">MPxGeometryOverride and MPxSubSceneOverride</h3></div>\n\
<p>Render items created by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span> may or may not be categorized as opaque UI or non UI render items, depending on the properties set per item.</p>\n\
<p>Developer kit example: <em>footPrintNode_GeometryOverrride</em> (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>)</p>\n\
<ul>\n\
<li><p>Since a <span class=\'code\'>RenderItemType</span> of <span class=\'code\'>MHWRender::MRenderItem::DecorationItem</span> is used for all custom render items, they are categorized as opaque UI items.</p></li>\n\
<li><p>Up to 4 explicitly defined items (2 for wireframe, and 2 for filled) may be added to lists when unconsolidated, and wireframe and shading draw modes are both enabled.</p></li>\n\
<li><p>The minimum is 1 for wireframe or 1 for filled when consolidation is enabled, and only one draw mode is enabled.</p></li>\n\
</ul>\n\
<p>Developer kit example: <em>apiMeshShape</em> (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span>)</p>\n\
<ul>\n\
<li><p>6 opaque UI render items (wire, dormant vertices, active vertices, face centers, active wire, filled faces). They have a <span class=\'code\'>RenderItemType</span> of <span class=\'code\'>MHWRender::MRenderItem::DecorationItem</span>.</p>\n\
<div class=\'figure\'><img src=\'developer/images/Basic_sequencing_apiMeshShape.png\' title=\'\'></div></li>\n\
<li><p>1 opaque render item due to internal shader assignment. <span class=\'code\'>RenderItemType</span> is <span class=\'code\'>MHWRender::MRenderItem::MaterialSceneItem</span>. Therefore, it will participate in post-effects, for instance.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"developer-kit-example-apimeshshape-mpxsubsceneoverride\"></a><h4 id=\"developer-kit-example-apimeshshape-mpxsubsceneoverride\">Developer kit example: <em>apiMeshShape</em> (MPxSubSceneOverride)</h4></div>\n\
<p>There are 6 transform instances of the same object in this example.</p>\n\
<p>For a single object, there is 1 item added to the opaque list (shaded). This item will also be added to the post-effects list.</p>\n\
<div class=\'figure\'><img src=\'developer/images/Basic_seq_apiMeshShape_1Shaded.png\' title=\'\'></div>\n\
<p>Because the subscene override uses hardware instancing; therefore, in total, there is only 1 item added. Each item will use hardware instance drawing with a different world space transform for each instance.</p>\n\
<p>When an instance of an object is selected:</p>\n\
<div class=\'figure\'><img src=\'developer/images/Basic_seq_apiMeshShape_1Wireframe.png\' title=\'\'></div>\n\
<p>1 wireframe item is added to the opaque UI list.</p>\n\
<div class=\'figure\'><img src=\'developer/images/Basic_seq_apiMeshShape_Vertices.png\' title=\'\'></div>\n\
<p>When vertices are displayed, there is 1 additional item added to the opaque UI list.</p>\n\
<p>Wireframe-on-shaded results in 2 UI items being added: One for dormant and 1 for active wireframe.</p>\n\
<div class=\'figure\'><img src=\'developer/images/Basic_seq_apiMeshShape_2Wireframe.png\' title=\'\'></div>\n\
<p>Two items are also added for bounding box. They have a <span class=\'code\'>RenderType</span> of <span class=\'code\'>MHWRender:: <a href=\"javascript:void(0)\" data-symbol=\"MRenderItem::NonMaterialSceneItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49ea051cc5c371043b627d1d7bee0d06e030&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem::NonMaterialSceneItem</a></span>, which means they are not considered as scene items but are still categorized and added to the opaque UI list.</p>\n\
<div class=\'figure\'><img src=\'developer/images/Basic_seq_apiMeshShape_BB.png\' title=\'\'></div>\n\
<p>Wireframe, vertices and bounding box items are all added to the non-post effects list.</p>\n\
<div class=\'section\'><a id=\"shaders\"></a><h4 id=\"shaders\">Shaders</h4></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> and internal Maya assigned shaders always produce opaque or transparent non-UI render items. As such, they are added to the post-effects lists, and are also rendered for shadow map passes.</p>\n\
<p>As documented in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxShaderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_shader_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxShaderOverride</a></span> C++ API Reference documentation, the plug-in instance will, by default, only be called to draw in the main color pass unless overridden. For example, the normal-depth pass for SSAO will not by default call back to the plug-in.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShadingNodeOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSurfaceShadingNodeOverride</a></span> only provides a single shader implementation, which in turn is used for the main color pass.</p>\n\
<div class=\'section\'><a id=\"item-list-tracking\"></a><h3 id=\"item-list-tracking\">Item list tracking</h3></div>\n\
<p>It is possible to obtain trace information regarding the non-empty lists that are available for a regular 3d beauty render, as well as overlay rendering for 3d viewports. The command:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">ogs -traceRenderPipeline true;\n\
</pre></div><p>can be used to send debug output to the Script Editor in interactive mode, or to <span class=\'code\'>stderr</span> in command line mode.</p>\n\
<p>For example, tracing a sphere drawn filled with wireframe may produce output as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// -- VP2 Rendering [modelPanel4] [3d Beauty Render] // \n\
// Count for list: [Opaque UI] = 1 // \n\
// Count for list: [Opaque] = 1 // \n\
// Count for list: [Post Effect] = 1 // \n\
// Count for list: [Non Post Effect] = 1 //\n\
</pre></div><p>For context, the rendering destination (same value as returned by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext::renderingDestination()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a0df712533d76bdc96f2b49f4767ed85e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext::renderingDestination()</a></span>) is given, along with the render performed. Here, the name <em>3d Beauty Render</em> is returned to indicate an internal render.</p>\n\
<p>The results indicate that 1 opaque UI item (wireframe), and 1 opaque item (filled) have been categorized. In addition, the filled item is queued for post-effect drawing, and the wireframe is queued for non post-effect drawing. The fact that they are available does not necessarily mean that the list will be rendered, as this would be dependent on whether any post-effects are enabled.</p>\n\
<p>The lists are not necessarily given in the order that they will be used, and each list is only given once per scene render. The sequencing in this section should be referenced to determine where a given list could be drawn.</p>\n\
<p>Multiple scene renders hence show the items for each render. For example, stereo rendering could appear as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// -- VP2 Trace[StereoPanel][stereoOverrideVP2] // \n\
// Count for list: [Opaque UI] = 18 // \n\
// Count for list: [Opaque] = 34 // \n\
// Count for list: [Post Effect] = 33 // \n\
// Count for list: [Non Post Effect] = 19 // \n\
// Count for list: [Opaque UI] = 18 // \n\
// Count for list: [Opaque] = 34 // \n\
// Count for list: [Post Effect] = 33 // \n\
// Count for list: [Non Post Effect] = 19 // \n\
// Count for list: [HUD] = 1 //\n\
</pre></div><p>The second to fifth line represent one scene draw and the sixth to ninth represent another.</p>\n\
<p>Note that when a render override (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderOverride</a></span>) is active for the trace, then the UI name of the override is provided as part of the trace. In this case, the <em>stereoOverrideVP2</em> override name is shown.</p>\n\
<p>In another example, when tracing the <em>viewOverrideSimple</em> plug-in, the <em>Simple VP2 Override</em> name is given:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// -- VP2 Trace[modelPanel1][Simple VP2 Override] // \n\
// Count for list: [Opaque UI] = 17 // \n\
// Count for list: [Pre-Opaque UI] = 2 // \n\
// Count for list: [Opaque] = 34 // \n\
// Count for list: [Post Effect] = 33 // \n\
// Count for list: [Non Post Effect] = 18 // \n\
// Count for list: [Orthographic On-Top UI] = 5 // \n\
// Count for list: [HUD] = 1 //\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";