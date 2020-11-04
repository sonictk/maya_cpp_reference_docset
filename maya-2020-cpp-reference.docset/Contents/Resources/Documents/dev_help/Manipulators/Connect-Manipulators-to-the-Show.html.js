var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Connect Manipulators to the Show Manipulator Tool</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Connect Manipulators to the Show Manipulator Tool</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"connect-manipulators-to-the-show-manipulator-tool\"></a></div>\n\
<p>The Show Manipulator Tool uses manipulators to modify plug values or provide access to the construction history of a node. If you select several objects while in the Show Manipulator Tool, the corresponding manipulator is displayed for each of the objects selected.</p>\n\
<p>The object that the manipulator is attached to does not have to be a DAG node. Some manipulators such as the Revolve manipulator are attached to a dependency node upstream of the final shape. For example, for a sphere called nurbsSphereShape1, the revolve manipulator must be attached to the makeNurbsSphere1 node which is upstream relative to nurbsSphereShape1.</p>\n\
<p>Note: The makeNurbsSphere1 node is not a DAG node, and can be selected either in the Hypergraph or the Channel Box.</p>\n\
<p>Other manipulators, such as the camera manipulator and the light manipulator can be attached to either the transform or the shape of the light or camera.</p>\n\
<p>The Show Manipulator Tool is explained in detail in the Basics guide.</p>\n\
<div class=\'section\'><a id=\"writing-a-manipulator-to-work-with-the-show-manipulator-tool\"></a><h2 id=\"writing-a-manipulator-to-work-with-the-show-manipulator-tool\">Writing a Manipulator to Work with the Show Manipulator Tool</h2></div>\n\
<p>The first step when creating a manipulator that works with the Show Manipulator Tool for a node is to pick a name for the manipulator that corresponds to the node type name. To determine the name of the manipulator, take the name of the node and append <em>Manip</em> to the end of the node name. For example, the <em>Show Manip</em> for footPrintLocator is footPrintLocatorManip.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">plugin.registerNode(&quot;footPrintLocator&quot;, // name of node\n\
                    footPrintLocator::id,\n\
                    &amp;footPrintLocator::creator,\n\
                    &amp;footPrintLocator::initialize,\n\
                    MPxNode::kLocatorNode);\n\
plugin.registerNode(&quot;footPrintLocatorManip&quot;, // name of manip\n\
                    footPrintLocatorManip::id,\n\
                    &amp;footPrintLocatorManip::creator,\n\
                    &amp;footPrintLocatorManip::initialize,\n\
                    MPxNode::kManipContainer);\n\
\n\
\n\
</pre></div><p>The second step is to have the initialize method of the node call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::addToManipConnectTable()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#a156ef5b4b1b5a7d28df9166f29a3aba0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html#a3d24427607ee939922424456455b18aa&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::addToManipConnectTable()</a></span>. For example, in the <span class=\'code\'>footPrintLocator::initialize()</span> method:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> footPrintLocator::initialize()\n\
{\n\
    ...\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::addToManipConnectTable\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#a156ef5b4b1b5a7d28df9166f29a3aba0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::addToManipConnectTable</a>(id);\n\
    ...\n\
}\n\
\n\
</pre></div><p>Where id is defined and declared as:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class footPrintLocator : public <a href=\"javascript:void(0)\" data-symbol=\"MPxLocatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_locator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxLocatorNode</a>\n\
{\n\
    ...\n\
    public:\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> id;\n\
};\n\
<a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> footPrintLocator::id(0x81101);\n\
\n\
</pre></div><div class=\'section\'><a id=\"adding-the-manipulator-to-a-context\"></a><h2 id=\"adding-the-manipulator-to-a-context\">Adding the Manipulator to a Context</h2></div>\n\
<p>An alternative to invoking a manipulator by the Show Manipulator Tool is to invoke the manipulator from a user-defined context.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSelectionContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_selection_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_selection_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxSelectionContext</a></span> class has two methods to support the management of manipulators: <span class=\'code\'>addManipulator()</span> and <span class=\'code\'>deleteManipulator()</span>.</p>\n\
<p>In addition to using these two methods, <span class=\'code\'>MPxSelectionContext::toolOnSetup</span> and <span class=\'code\'>MPxContext::toolOffCleanup</span> must be overridden so that <span class=\'code\'>toolOnSetup</span> adds a callback for manipulators, and <span class=\'code\'>toolOffCleanup</span> removes the callback when the active list is modified.</p>\n\
<p>The callback can be an <span class=\'code\'>updateManipulators()</span> function which actually adds and deletes the manipulators.</p>\n\
<p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MCallbackId id1;\n\
void moveContext::toolOnSetup(<a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp;)\n\
{\n\
    ...\n\
    id1 = ModelMessage::addCallback(\n\
    MModelMessage::kActiveListModified,\n\
    updateManipulators, this, &amp;status);\n\
    .... \n\
}\n\
void moveContext::toolOffCleanup()\n\
{\n\
    ...\n\
    status = MModelMessage::removeCallback(id1);\n\
    ...\n\
}\n\
void updateManipulators(void * data)\n\
{\n\
    ...\n\
    moveContext * ctxPtr = (moveContext *) data;\n\
    ctxPtr-&gt;deleteManipulators();\n\
    ...\n\
    // for each object selected\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> manipName(&quot;moveManip&quot;);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> manipObject;\n\
    ctxPtr-&gt;moveM = (moveManip *) \n\
        moveManip::newManipulator(manipName,\n\
        manipObject);\n\
    ...\n\
    ctxPtr-&gt;addManipulator(manipObject);\n\
    ...\n\
    ctxPtr-&gt;moveM-&gt;connectToDependNode(dependNode);\n\
    ...\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"example-manipulators\"></a><h2 id=\"example-manipulators\">Example Manipulators</h2></div>\n\
<p>Following are the manipulator examples that are available in the (devkit\\plug-ins) folder of the Developer Kit installation:</p>\n\
<div class=\'section\'><a id=\"movemanip\"></a><h3 id=\"movemanip\">moveManip</h3></div>\n\
<p>The moveManip.cpp plug-in shows how to create a manipulator from a context. The user-defined manipulator in moveToolManip.cpp is called moveManip and consists of two base manipulators: a FreePointTriadManip and a DistanceManip.</p>\n\
<div class=\'section\'><a id=\"footprintmanip\"></a><h3 id=\"footprintmanip\">footPrintManip</h3></div>\n\
<p>This plug-in example demonstrates how to use the Show Manipulator Tool with a user-defined node and a user-defined manipulator. The user-defined manipulator consists of a DistanceManip.</p>\n\
<p>Note: This manipulator uses a conversion function to place the DistanceManip at the location of the foot. Otherwise, the DistanceManip would appear at the origin.</p>\n\
<div class=\'section\'><a id=\"customattrmanip\"></a><h3 id=\"customattrmanip\">customAttrManip</h3></div>\n\
<p>This plug-in demonstrates how to create user-defined manipulators on custom attributes of nodes within a user-defined context. This custom manipulator is composed of three DistanceManips.</p>\n\
<div class=\'section\'><a id=\"movemanip-1\"></a><h3 id=\"movemanip-1\">moveManip</h3></div>\n\
<p>This plug-in shows how to create a manipulator from a context. The user-defined manipulator in moveToolManip.cpp is called moveManip and consists of two base manipulators: a FreePointTriadManip and a DistanceManip.</p>\n\
<div class=\'section\'><a id=\"footprintmanip-1\"></a><h3 id=\"footprintmanip-1\">footPrintManip</h3></div>\n\
<p>This plug-in demonstrates how to use the Show Manipulator Tool with a user-defined node and a user-defined manipulator. The user-defined manipulator consists of a DistanceManip. It also demonstrates how to write plugToManip conversion callback functions so that DistanceManip is always following the location of the foot.</p>\n\
<div class=\'section\'><a id=\"rotatemanip\"></a><h3 id=\"rotatemanip\">rotateManip</h3></div>\n\
<p>This plug-in demonstrates the different modes of the rotate base manipulator. The user-defined manipulator in rotateManip.cpp consists of a rotate base manipulator and a state base manipulator. The state manipulator is used to control the mode of the rotate manipulator: object mode, world space mode, gimbal mode, and object mode with snapping.</p>\n\
<div class=\'section\'><a id=\"componentscalemanip\"></a><h3 id=\"componentscalemanip\">componentScaleManip</h3></div>\n\
<p>This plug-in demonstrates how to use the scale base manipulator and also demonstrates a method for manipulating components. The plug-in componentScaleManip.cpp consists of a scale base manipulator. The manipulator works by attaching manipToPlug conversion callbacks for every selected vertex. The conversion function computes the new vertex positions using stored initial vertex positions and the scale manipValue.</p>\n\
<div class=\'section\'><a id=\"surfacebumpmanip\"></a><h3 id=\"surfacebumpmanip\">surfaceBumpManip</h3></div>\n\
<p>This plug-in demonstrates how the pointOnSurface base manipulator can be used to modify vertices close to the param manipValue. The plug-in uses a manipToPlug conversion function as a callback to update vertex positions on the NURBS surface.</p>\n\
<p>Note: Because this plug-in uses the manipToPlug conversion function as a callback that computes a dummy plug with the vertex positions updated independently, it does not support <span class=\'code\'>undo</span>.</p>\n\
<div class=\'section\'><a id=\"swissarmymanip\"></a><h3 id=\"swissarmymanip\">swissArmyManip</h3></div>\n\
<p>This plug-in demonstrates a user-defined manipulator that is comprised of a variety of base manipulators such as, CircleSweepManip, DirectionManip, DiscManip, DistanceManip, FreePointTriadManip, StateManip, ToggleManip, RotateManip, and ScaleManip.</p>\n\
<div class=\'section\'><a id=\"linemanip\"></a><h3 id=\"linemanip\">lineManip</h3></div>\n\
<p>This example demonstrates how to use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode</a></span> class along with a command to create a user defined manipulator. The manipulator created is a simple line which is an OpenGL pickable component. As you move the pickable component, the scale attribute of the selected transforms are modified. The line&#39;s movements are restricted in a plane. A corresponding command is used to create and delete the manipulator node and to support <span class=\'code\'>undo</span>, <span class=\'code\'>redo</span>, and others.</p>\n\
<div class=\'section\'><a id=\"squarescalemanip\"></a><h3 id=\"squarescalemanip\">squareScaleManip</h3></div>\n\
<p>This example demonstrates how to use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode</a></span> class along with a command to create a user-defined manipulator. The manipulator is a simple square with four sides as OpenGL pickable components. As you move the pickable component, the scale attribute of the selected transforms are modified. A corresponding command is used to create and delete the manipulator node and to support <span class=\'code\'>undo</span>, <span class=\'code\'>redo</span>, and others.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";