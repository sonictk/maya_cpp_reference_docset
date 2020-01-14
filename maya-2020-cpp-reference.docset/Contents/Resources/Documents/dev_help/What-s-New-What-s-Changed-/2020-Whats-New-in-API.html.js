var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>What&#39;s New in the Maya 2020 devkit</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>What&#39;s New in the Maya 2020 devkit</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"whats-new-in-the-maya-2020-devkit\"></a></div>\n\
<p>The following changes have been made to the Maya devkit in this release.</p>\n\
<div class=\'section\'><a id=\"fixed-feature\"></a><h2 id=\"fixed-feature\">Fixed feature</h2></div>\n\
<p>Previously <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::boundingBox()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#a762dab569a9d88aa731f3c7229803e1e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform::boundingBox()</a></span> was not being called when <span class=\'code\'>isBounded()</span> was implemented and returned <span class=\'code\'>true</span>.</p>\n\
<p>This has been fixed, and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::boundingBox()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#a762dab569a9d88aa731f3c7229803e1e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform::boundingBox()</a></span> is now called when <span class=\'code\'>iBounded()</span> is implemented and returns <span class=\'code\'>true</span>. It will not be called when <span class=\'code\'>isBounded()</span> returns false, or when <span class=\'code\'>isBounded()</span> is not implemented.</p>\n\
<div class=\'section\'><a id=\"cached-playback\"></a><h2 id=\"cached-playback\">Cached Playback</h2></div>\n\
<p>New classes have been added to support the Cached Playback feature:</p>\n\
<ul>\n\
<li>MNodeCacheDisablingInfo</li>\n\
<li>MNodeCacheDisablingInfoHelper</li>\n\
<li>MNodeCacheSetupInfo</li>\n\
<li>MCacheMode</li>\n\
<li>MCacheSchema</li>\n\
<li>MTimeRange</li>\n\
</ul>\n\
<p>New methods have been added to support Cached Playback</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride::configCache()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#af7be6b397b65f1a96b201e899c923d12&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxGeometryOverride::configCache()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::configCache()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#af7be6b397b65f1a96b201e899c923d12&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::configCache()</a></span></li>\n\
<li><span class=\'code\'>MPxNode::transformInvalidRange</span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::hasInvalidationRangeTransformation()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a16261c8f144b5ff3b27057602831138e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::hasInvalidationRangeTransformation()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::getCacheSetup()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6f70ff175ac7ba65cb65aa3b5592f05b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::getCacheSetup()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode::getCacheSetup()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html#a7068b5cea353e8ed1ac2d27502f926ef&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxLocatorNode::getCacheSetup()</a></span></li>\n\
<li><span class=\'code\'>MNodeCacheDisablingInfo::setUnsafeNode()</span></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"adsk-standard-surface-shader\"></a><h2 id=\"adsk-standard-surface-shader\">ADSK Standard Surface shader</h2></div>\n\
<p>A new surface shader, the ADSK Standard Surface shader, has been added to Maya.</p>\n\
<p>Changes have been made to the API to support this new shader.</p>\n\
<p>The MFnStandardSurfaceShader class has been added to the C++ and Python 1.0 APIs. This class provides access to the attributes of the standardSurface shader node.</p>\n\
<p>The <span class=\'code\'>MFn.kStandardSurface</span> type is used to determine whether an MObject supports the new default shader. <span class=\'code\'>MFn.kStandardSurface</span> is available in the C++, Python 1.0, and Python 2.0 API.</p>\n\
<p>In the Viewport 2.0 API, the new standard shader, <span class=\'code\'>k3dStandardSurfaceShader</span>, has been added to MStockShader. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager::getStockShader()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a8e4ad27d691969622af2b05d8c6213d9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html#af595ab1d00f7ec3ec5193e4fd9c331d1&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderManager::getStockShader()</a></span> can use <span class=\'code\'>k3dStandardSurfaceShader</span> as its first argument. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance::addInputFragmentForMultiParams()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#aef925183badfe54bfd5872d595f64f90&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html#aff87968b72bef094746224ffd400cfa9&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MShaderInstance::addInputFragmentForMultiParams()</a></span> adds support for connecting multiple parameters from an registered input fragment to an existing MShaderInstance.</p>\n\
<div class=\'section\'><a id=\"graph-editor-overlay-drawing\"></a><h2 id=\"graph-editor-overlay-drawing\">Graph Editor overlay drawing</h2></div>\n\
<p>A new feature that allows users to draw primitives over the Graph Editor.</p>\n\
<p>Two new classes have been added to the C++ and Python APIs: MPanelCanvas and MPanelCanvasInfo classes.</p>\n\
<div class=\'section\'><a id=\"other-new-python-classes-and-methods\"></a><h2 id=\"other-new-python-classes-and-methods\">Other new Python classes and methods</h2></div>\n\
<p>The following classes have been added to the Python API 2.0:</p>\n\
<ul>\n\
<li>MPxContext</li>\n\
<li>MPxContextCommand</li>\n\
<li>MPxSelectionContext</li>\n\
<li>MPxToolCommand</li>\n\
<li>MPxManipulatorNode</li>\n\
<li>MEvent</li>\n\
<li>MCursor</li>\n\
<li>MPxManipContainer</li>\n\
<li>MItGeometry</li>\n\
<li>MIterObject</li>\n\
</ul>\n\
<p>The following classes have been added to the Python API 2.0:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::findPlugin()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a1f13118b14a93b63516f7d2c126e8878&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html#ac8303642413f7058366688f5099b21cf&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::findPlugin()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::setExistWithoutInConnections()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#ab0ec8605b36618dc7975f6615ab27535&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#a6c97e44813f132c7d54578fbfd1da4b1&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::setExistWithoutInConnections()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::existWithoutInConnections()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a869cac8317d1de1582d987093cdf2a61&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#a931cf0bb238c30243c4886c0015e36cc&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::existWithoutInConnections()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::setExistWithoutOutConnections()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a17b7814993195215e83c55646b977681&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#ae4031ac4a045cd2c04709059688746d7&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::setExistWithoutOutConnections()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::existWithoutOutConnections()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#adc771613d9e8b85f9c00673473649521&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#a9e3ccf1092ee2438dc75e642d17764d5&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::existWithoutOutConnections()</a></span></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"other-new-classes\"></a><h2 id=\"other-new-classes\">Other new classes</h2></div>\n\
<p>MGPUEventList has been added to manage event wait lists.</p>\n\
<p>MIndexMapper has been added to map indices between a geometry and a subset of indices affected by a deformer.</p>\n\
<div class=\'section\'><a id=\"new-iterator-method-added-to-mitgeometry\"></a><h2 id=\"new-iterator-method-added-to-mitgeometry\">New iterator method added to MItGeometry</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItGeometry::positionIndex()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_geometry.html#a034b9446eacf5e9abf4c8f6b0cb831af&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItGeometry::positionIndex()</a></span> has been added to help with iterating over surface geometries.</p>\n\
<div class=\'section\'><a id=\"new-methods-for-selection-pass-rendering\"></a><h2 id=\"new-methods-for-selection-pass-rendering\">New methods for selection pass rendering</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::enableUpdateForSelection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a7540acbbc56b2f60e83bb5e0cc7c75eb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSubSceneOverride::enableUpdateForSelection()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext::getSelectionInfo()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a47de565a64c70284706f3510b6827b73&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFrameContext::getSelectionInfo()</a></span> have been added to help with selection pass updating.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride::enableUpdateForSelection()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a7540acbbc56b2f60e83bb5e0cc7c75eb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSubSceneOverride::enableUpdateForSelection()</a></span> is called by Maya when a subscene is created. It returns <span class=\'code\'>false</span> by default, meaning that update methods will only be called for regular renders.</p>\n\
<p>Overriding this method to return <span class=\'code\'>true</span> causes update methods to also be called for selection passes.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext::getSelectionInfo()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a47de565a64c70284706f3510b6827b73&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFrameContext::getSelectionInfo()</a></span> returns the selection state information if it is called in a selection pass, and returns a null pointer otherwise.</p>\n\
<p>The apiMeshSubSceneOverride example has been updated to use both these methods.</p>\n\
<div class=\'section\'><a id=\"changes-to-mfnpluginregisterevaluator\"></a><h2 id=\"changes-to-mfnpluginregisterevaluator\">Changes to MFnPlugin::registerEvaluator()</h2></div>\n\
<p>The signature for <span class=\'code\'>registerEvaluator()</span> has changed from</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-c\"><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerEvaluator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a1863f5e6068a1383022ecb22de0b01e3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerEvaluator</a>(const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; evaluatorName, unsigned int  uniquePriority, MCreatorFunction creatorFunction)\n\
</pre></div><p>to</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-c\"><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerEvaluator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a1863f5e6068a1383022ecb22de0b01e3&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerEvaluator</a>(const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; evaluatorName, unsigned int  uniquePriority, MCustomEvaluatorCreatorFunction creatorFunction)\n\
</pre></div><div class=\'section\'><a id=\"changes-to-mpxnodeconfigcache\"></a><h2 id=\"changes-to-mpxnodeconfigcache\">Changes to MPxNode::configCache()</h2></div>\n\
<p>The signature of <span class=\'code\'>configCache()</span> has changed from</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-c\"><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::configCache\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#af7be6b397b65f1a96b201e899c923d12&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::configCache</a>(const <a href=\"javascript:void(0)\" data-symbol=\"MEvaluationNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_evaluation_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvaluationNode</a>&amp; evalNode, const MCacheMode&amp; info, <a href=\"javascript:void(0)\" data-symbol=\"MCacheSchema\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_cache_schema.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MCacheSchema</a>&amp; schema)\n\
</pre></div><p>to</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::configCache\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#af7be6b397b65f1a96b201e899c923d12&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::configCache</a>(const <a href=\"javascript:void(0)\" data-symbol=\"MEvaluationNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_evaluation_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvaluationNode</a>&amp; evalNode, <a href=\"javascript:void(0)\" data-symbol=\"MCacheSchema\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_cache_schema.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MCacheSchema</a>&amp; schema)\n\
</pre></div><div class=\'section\'><a id=\"changes-to-mfnpluginregisterimagefile\"></a><h2 id=\"changes-to-mfnpluginregisterimagefile\">Changes to MFnPlugin::registerImageFile()</h2></div>\n\
<p>The signature of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerImageFile()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a3ac3f15d6d86e605805466db2485bc3a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerImageFile()</a></span> has changed. An <span class=\'code\'>ImageFilePriority</span> parameter has been added.</p>\n\
<p>The C++ signature has changed from</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> registerImageFile(const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; imageFormatName, MCreatorFunction creatorFunction, \n\
const <a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStringArray</a>&amp; imageFileExtensions);\n\
</pre></div><p>to</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> registerImageFile(const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; imageFormatName, MCreatorFunction creatorFunction, \n\
const <a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStringArray</a>&amp; imageFileExtensions, ImageFilePriority priority = kImageFilePriorityDefault);\n\
</pre></div><div class=\'section\'><a id=\"changes-to-meshintersector\"></a><h2 id=\"changes-to-meshintersector\">Changes to MeshIntersector</h2></div>\n\
<p>The signature of <span class=\'code\'>create()</span> has been changed in the C++, Python 1.0, and Python 2.0 APIs to support faces of interest.</p>\n\
<p>The C++ signature has changed from</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> create (<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> &amp;meshObject, const <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a> &amp;matrix=<a href=\"javascript:void(0)\" data-symbol=\"MMatrix::identity\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html#a9b368179e6c468c7fc4e6b3358ae6f2f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix::identity</a>)\n\
</pre></div><p>To</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> create( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> &amp;meshObject, const <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix</a>&amp; matrix = <a href=\"javascript:void(0)\" data-symbol=\"MMatrix::identity\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html#a9b368179e6c468c7fc4e6b3358ae6f2f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMatrix::identity</a>, const <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a>* facesOfInterest = nullptr);\n\
</pre></div><p>Refer to the C++ and Python API references for details.</p>\n\
<div class=\'section\'><a id=\"change-to-mpxgeometryoverriderequirerenderitemupdate\"></a><h2 id=\"change-to-mpxgeometryoverriderequirerenderitemupdate\">Change to MPxGeometryOverride::requireRenderItemUpdate</h2></div>\n\
<p>The default value of <span class=\'code\'>MPxGeometryOverride::requireRenderItemUpdate</span> has been changed to <span class=\'code\'>false</span>.</p>\n\
<p>The following devkit examples have been modified to reflect this change:</p>\n\
<ul>\n\
<li>footPrintNode_GeometryOverride_AnimatedMaterial</li>\n\
<li>geometryOverrideExample1</li>\n\
<li>geometryOverrideExample2</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"deprecated-class\"></a><h2 id=\"deprecated-class\">Deprecated class</h2></div>\n\
<p>MPxImagePlaneOverride has been deprecated.</p>\n\
<p>MPxImagePlane no longer needs to be associated with MPxImagePlaneOverride for drawing in Viewport 2.0.</p>\n\
<p>Any code that uses MPxImagePlaneOverride should be updated to use only MPxImagePlane.</p>\n\
<p>The customImagePlane example has been updated to remove its use of MPxImagePlaneOverride.</p>\n\
<div class=\'section\'><a id=\"added-examples\"></a><h2 id=\"added-examples\">Added examples</h2></div>\n\
<ul>\n\
<li>basicBlendShapeDeformer</li>\n\
<li>simpleSimulationNode</li>\n\
<li>pyPanelCanvasInfo.py</li>\n\
<li>pyPanelCanvas.py</li>\n\
<li>marqueeTool.py</li>\n\
<li>lassoTool.py</li>\n\
<li>squareScaleManipContext.py</li>\n\
</ul>\n\
<p>simpleSimulationNode demonstrates how to interact with Cached Playback.</p>\n\
<p>marqueeTool.py, lassoTool.py, and squareScaleManipContext.py demonstrate the new Python API 2.0 classes.</p>\n\
<p>pyPanelCanvasInfo.py and pyPanelCanvas.py demonstrate the MPanelCanvas and MPanelCanvasInfo classes for Graph Editor overlay drawing.</p>\n\
<div class=\'section\'><a id=\"updated-examples\"></a><h2 id=\"updated-examples\">Updated examples</h2></div>\n\
<ul>\n\
<li>apiMeshShape</li>\n\
<li>viewObjectSetOverride</li>\n\
<li>footPrintNode_GeometryOverride</li>\n\
<li>offsetNode</li>\n\
<li>footPrintNode_GeometryOverride_AnimatedMaterial</li>\n\
<li>geometryOverrideExample1</li>\n\
<li>geometryOverrideExample2</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"removed-examples\"></a><h2 id=\"removed-examples\">Removed examples</h2></div>\n\
<ul>\n\
<li>geometryOverrideHighPerformance</li>\n\
<li>AnimEngine A similar AnimX example is available from <a href=\'https://github.com/Autodesk/animx\' title=\'\' target=\'_blank\'>https://github.com/Autodesk/animx</a>.</li>\n\
</ul>\n\
<div class=\"metadata\"><h4>contextid</h4>\n\
<ul><li>WHATS_NEW_API_2020</li></ul></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";