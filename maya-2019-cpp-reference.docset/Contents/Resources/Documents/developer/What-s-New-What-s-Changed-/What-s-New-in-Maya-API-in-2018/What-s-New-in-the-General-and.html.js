var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>What&#39;s New in the General and Modeling API</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>What&#39;s New in the General and Modeling API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"whats-new-in-the-general-and-modeling-api\"></a></div>\n\
<div class=\'section\'><a id=\"general\"></a><h2 id=\"general\">General</h2></div>\n\
<div class=\'section\'><a id=\"new-python-workspace-controls-devkit-example\"></a><h3 id=\"new-python-workspace-controls-devkit-example\">New Python workspace controls devkit example</h3></div>\n\
<p>A new <span class=\'code\'>dockableWorkspaceWidget.py</span> example demonstrates how to create workspace controls using Python. Access the example in the pythonScripts directory of the Maya devkit.</p>\n\
<p>For more information, see <a href=\'#!/url=./developer/Writing-Workspace-controls.html\' title=\'\'>Writing Workspace controls</a>.</p>\n\
<div class=\'section\'><a id=\"mdatablock-and-mdatahandle-enhancements\"></a><h3 id=\"mdatablock-and-mdatahandle-enhancements\">MDataBlock and MDataHandle enhancements</h3></div>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataHandle</a></span> class is now declared a friend of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_block.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataBlock</a></span> class.</p>\n\
<p>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle::datablock()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html#aa20de0e6d105f6e91e1a553a5ce2c20c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataHandle::datablock()</a></span> method to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDataHandle</a></span> class. This method returns the datablock associated with the current data handle.</p>\n\
<div class=\'section\'><a id=\"mfncontainernode-additions\"></a><h3 id=\"mfncontainernode-additions\">MFnContainerNode additions</h3></div>\n\
<p>Added new methods to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnContainerNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_container_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_container_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnContainerNode</a></span> class. These methods are also available for Python API 2.0.</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnContainerNode::isCurrent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_container_node.html#afb5ad8c16dc8081f19e8ce2aaace0e72&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnContainerNode::isCurrent()</a></span> returns a boolean indicating whether the current container is set to active.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnContainerNode::getCurrentAsMObject()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_container_node.html#abc5232c704201b3b14e225be9ae061e9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnContainerNode::getCurrentAsMObject()</a></span> returns the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span> for the currently active container in the scene.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnContainerNode::makeCurrent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_container_node.html#a058d79eabc2781ebc09142051a82d4e1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnContainerNode::makeCurrent()</a></span> to set or clear whether this container should be current.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"mqtutil-additions\"></a><h3 id=\"mqtutil-additions\">MQtUtil additions</h3></div>\n\
<p>Added new static methods to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MQtUtil</a></span> class to provide better support for Maya user interface elements in HiDPI displays. The new methods locate UI elements (pixel maps, cursors, and icons) first in the Qt resources, and then in a file on disk. Next, they return the UI element with the given name. If the <span class=\'code\'>autoScale</span> parameter is set to true, the UI element with the appropriate DPI is selected. See the following methods:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil::createPixmap()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html#a7fe6b8c9a59baff474e443350d94b771&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MQtUtil::createPixmap()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil::createCursor()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html#a8b9886514e54b0c7c25d3772680a86c6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MQtUtil::createCursor()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil::createIcon()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html#a9164561b08a46499195a681a25daa0ea&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MQtUtil::createIcon()</a></span></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"other-general-api-updates\"></a><h3 id=\"other-general-api-updates\">Other general API updates</h3></div>\n\
<ul>\n\
<li>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryData::smartCopy()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_geometry_data.html#aab37f3bacd0dd116fefd6eadc2bf210d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxGeometryData::smartCopy()</a></span> virtual function now returns a boolean.</li>\n\
<li>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MCustomEvaluatorClusterNode::asMObject()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_custom_evaluator_cluster_node.html#ade1b48237800a6d398f6b6879e41ebf5&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MCustomEvaluatorClusterNode::asMObject()</a></span> method to provide a unique identifier for a cluster object.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"modeling\"></a><h3 id=\"modeling\">Modeling</h3></div>\n\
<div class=\'section\'><a id=\"openmaya\"></a><h4 id=\"openmaya\">OpenMaya</h4></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnMesh</a></span> enhancements:</p>\n\
<ul>\n\
<li>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh::intersectFaceAtUV()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html#a2e7ae06b08040e5fb1e44dd354fc6a29&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnMesh::intersectFaceAtUV()</a></span> method, which returns the ID of the intersected face at a given UV set and coordinates. If multiple faces are intersected, the first intersected face is returned.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";