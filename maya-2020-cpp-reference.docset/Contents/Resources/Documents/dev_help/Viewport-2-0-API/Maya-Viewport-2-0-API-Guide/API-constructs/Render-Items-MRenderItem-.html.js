var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Render Items (MRenderItem)</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Render Items (MRenderItem)</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"render-items-mrenderitem\"></a></div>\n\
<p>The formal interface presented for a render item is the class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f4924.jpg\' title=\'\' /></div>\n\
<p>Figure 15</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> has various properties. Depending on whether a render item is involved in the update phase or the rendering phase, the interfaces to these properties may or may not be writeable.</p>\n\
<p>The main properties are as follows:</p>\n\
<ul>\n\
<li>An associated Maya DAG path and a possible Maya DAG component. These provide context for the render item with respect to Maya as opposed to any type of evaluation access.</li>\n\
<li>Custom data. This is data that the plug-in writer may optionally attach and have passed through the pipeline. This is readable and writable.</li>\n\
<li>The bounding box of the item.</li>\n\
<li>Whether the item is “enabled.” Anything that is enabled is tagged to be drawn in the rendering phase.</li>\n\
<li>A draw mode. The draw mode that this render item should draw in.</li>\n\
<li>A reference to an instance of a shader.</li>\n\
<li>A reference to geometric information, which includes:\n\
<ul>\n\
<li>A reference to geometry and a description of its format</li>\n\
<li>A reference to geometric indexing and the primitive type.</li>\n\
</ul></li>\n\
<li><p>Depth priority</p>\n\
<p>Depth priority sets how far towards the active camera a render item is moved when drawing. This helps to avoid depth-fighting which can occur with render items whose drawing overlaps each other in depth. For example, a render item drawing wireframe and one drawing filled could be drawn at the same depth. To avoid the wireframe item from being obscured by the shaded item, the depth priority on the wireframe item can be “raised” to avoid being obscured.</p></li>\n\
</ul>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f494d.jpg\' title=\'\' /></div>\n\
<p>Figure 16</p>\n\
<p>With these proprieties this class can represent any or all of the following Maya options:</p>\n\
<ul>\n\
<li>An item to render some dependent “sub-object” (for example, vertex components)</li>\n\
<li>An item to render a sub-region (for example, a face set on a mesh)</li>\n\
<li>An item to render per-instance</li>\n\
<li>An item to render per DAG object ghost (ghosting)</li>\n\
<li>An item which renders to depict a given draw mode (for example, an item for “wireframe” versus an item for “shaded”)</li>\n\
</ul>\n\
<p>As a single render item does not represent all possibilities a collection of render items (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItemList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItemList</a></span>) is main­tained per renderable object. However, depending on what needs to be rendered, it is possible that zero or more of these items are “enabled” (passed down the pipeline) for drawing.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f4bda.jpg\' title=\'\' /></div>\n\
<p>Figure 17</p>\n\
<p>As an example a renderable object may have 4 items: 2 for shaded sub-regions, 1 for wireframe and 1 for vertex dis­play. Pruning may occur at update time leaving only the wireframe and vertex display items. Further pruning may remove the “wireframe” render item leaving only the vertex display item. Pruning generally reflects internal requirements such as viewport display modes.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> objects are assumed to be transient, and as such plug-ins should not hold on to references to instances of this class. Instances of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span> cannot be created or deleted directly. Plug-ins must use static <span class=\'code\'>Create()</span> and <span class=\'code\'>Destroy()</span> methods on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>. This provides for stability when memory is allocated/deallocated from different DLLs.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";