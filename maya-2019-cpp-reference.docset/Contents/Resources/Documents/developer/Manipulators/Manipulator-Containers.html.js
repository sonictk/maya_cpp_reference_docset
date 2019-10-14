var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Manipulator Containers</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Manipulator Containers</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"manipulator-containers\"></a></div>\n\
<p>You can create a manipulator container programmatically and add one or more base manipulators to the container. This approach involves the following steps:</p>\n\
<ol>\n\
<li>Create a manipulator container class derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer</a></span>.</li>\n\
<li>Add the base manipulators to the manipulator container class.</li>\n\
<li>Define associations between the manipulator and the attribute on the nodes.</li>\n\
</ol>\n\
<p>The parent class of user-defined container manipulators is <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer</a></span>. There are a number of methods in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer</a></span> that allow you to add a variety of base manipulators to the container. You also need to implement a number of methods in the custom manipulator.</p>\n\
<p>The necessary methods are:</p>\n\
<ul>\n\
<li><a href=\'#!/url=./developer/Manipulators/Manipulator-Containers.html#creator-method\' title=\'\'>creator method</a></li>\n\
<li><a href=\'#!/url=./developer/Manipulators/Manipulator-Containers.html#initialize-method\' title=\'\'>initialize method</a></li>\n\
<li><a href=\'#!/url=./developer/Manipulators/Manipulator-Containers.html#createchildren-method\' title=\'\'>createChildren method</a></li>\n\
<li><a href=\'#!/url=./developer/Manipulators/Manipulator-Containers.html#connecttodependnode-method\' title=\'\'>connectToDependNode method</a>.</li>\n\
</ul>\n\
<p>You can also override the draw method to customize the way your container manipulator is drawn.</p>\n\
<div class=\'section\'><a id=\"creator-method\"></a><h2 id=\"creator-method\">creator method</h2></div>\n\
<p>The creator method needs to return a new instance of the manipulator, and it is registered in the <span class=\'code\'>initializePlugin()</span> function with a call to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerNode()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a2d2a3682ce86ffbed188eff09d93998d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerNode()</a></span> method.</p>\n\
<p>Note: Because this method is static and registered, and not derived, the name of the method does not need to be <em>creator</em>, although by convention the name <em>creator</em> is typically used.</p>\n\
<div class=\'section\'><a id=\"initialize-method\"></a><h2 id=\"initialize-method\">initialize method</h2></div>\n\
<p>The initialize method performs any necessary initializations for the manipulator as well as calling the method in the parent class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::initialize()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#ab775d976c0f4b24e540bd06af23a0738&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::initialize()</a></span>. Similar to the creator method, the initialize method is static and registered rather than derived.</p>\n\
<div class=\'section\'><a id=\"createchildren-method\"></a><h2 id=\"createchildren-method\">createChildren method</h2></div>\n\
<p>The base manipulators are added to the manipulator container classes using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::createChildren()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#a5f6e1ab823f87eddad380cd85f61293c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::createChildren()</a></span> method.</p>\n\
<p>For example, in the <span class=\'code\'>moveManip::createChildren()</span> method:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> moveManip::createChildren()\n\
{\n\
    ...\n\
\n\
    fDistanceManip = addDistanceManip(manipName,\n\
    distanceName); \n\
    fFreePointManip = addFreePointTriadManip(pointManipName,\n\
    pointName);\n\
\n\
    ...\n\
\n\
}\n\
\n\
</pre></div><p>This method is usually called after the custom manipulator container class is set up. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer</a></span> class provides a set of member functions to add individual base manipulators, most of them are named as addXYZManip, where XYZ represents the manipulator name. The function returns an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a></span> object representing the created base manipulator. Following is an example from the footPrintManip plug-in for adding distance manipulator to a custom manipulator container.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> footPrintLocatorManip::createChildren() {\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat =<a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a>;\n\
 \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> manipName(&quot;distanceManip&quot;);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> distanceName(&quot;distance&quot;);\n\
 \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a> startPoint (0.0, 0.0, 0.0);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MVector</a> direction (0.0, 1.0, 0.0);\n\
    fDistanceManip =addDistanceManip(manipName,distanceName);\n\
 \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnDistanceManip\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_distance_manip.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_fn_distance_manip.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDistanceManip</a> distanceManipFn(fDistanceManip);\n\
    distanceManipFn.setStartPoint(startPoint);\n\
    distanceManipFn.setDirection(direction);\n\
     \n\
    return(stat);\n\
}\n\
</pre></div><div class=\'section\'><a id=\"connecttodependnode-method\"></a><h2 id=\"connecttodependnode-method\">connectToDependNode method</h2></div>\n\
<p>The <span class=\'code\'>connectToDependNode()</span> method is where the association is made between the manipulator and the plug with which it will communicate. All the operations to set up communication between manipulators and plugs (including one-on-one association and conversion functions) must be put in this method. After mapping relationships between manipulators and plugs are set, there are two additional methods to be called. These methods are <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::finishAddingManips()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#ac4b930401e842321b3c4c443da92140e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::finishAddingManips()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::connectToDependNode()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#ac7013eba743cd3226bc9a72b1ea27cff&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::connectToDependNode()</a></span>, and must be called in that order. It is important to note that <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::finishAddingManips()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#ac4b930401e842321b3c4c443da92140e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::finishAddingManips()</a></span> must be called after all calls to connect to plugs have been made. Furthermore, <span class=\'code\'>finishAddingManips()</span> must be called only once.</p>\n\
<p>For example, in the <span class=\'code\'>moveManip::connectToDependNode()</span> method:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> moveManip::connectToDependNode(const <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> &amp;node)\n\
{\n\
    ...\n\
    distanceManipFn.connectToDistancePlug(syPlug);\n\
    ...\n\
    freePointTriadManipFn.connectToPointPlug(tPlug);\n\
    ...\n\
    finishAddingManips();\n\
    ...\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::connectToDependNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#ac7013eba743cd3226bc9a72b1ea27cff&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::connectToDependNode</a>(node);\n\
    ...\n\
}\n\
\n\
</pre></div><p>Note: Although <span class=\'code\'>connectToDependNode()</span> is a virtual method, you will usually be responsible for calling this method yourself when you are using the manipulator within a custom context. For more information, see <a href=\'#!/url=./developer/Manipulators/Connect-Manipulators-to-the-Show.html\' title=\'\'>Connect Manipulators to the Show Manipulator Tool</a>.</p>\n\
<p>The footPrintManip plug-in example demonstrates the following operations: creating a distance manipulator, applying <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDistanceManip\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_distance_manip.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_fn_distance_manip.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDistanceManip</a></span> function set class on the created distance manipulator, setting up one-on-one association between plug and distance manipulator value, and setting up plugToManip conversion to set the manipulator start point position.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> footPrintLocatorManip::connectToDependNode (const <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> &amp;node) {\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
 \n\
    // Get the DAG path\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDagNode</a> dagNodeFn(node);\n\
    dagNodeFn.getPath(fNodePath);\n\
 \n\
    // Connect the plugs\n\
    \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnDistanceManip\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_distance_manip.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_fn_distance_manip.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDistanceManip</a> distanceManipFn(fDistanceManip);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode</a> nodeFn(node);\n\
 \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> sizePlug =nodeFn.findPlug(&quot;size&quot;, &amp;stat);\n\
    if ( stat != <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a> ) {\n\
       distanceManipFn.connectToDistancePlug (sizePlug);\n\
       unsigned startPointIndex =distanceManipFn.startPointIndex();\n\
       addPlugToManipConversionCallback (startPointIndex,\n\
       (plugToManipConversionCallback)&amp;footPrintLocatorManip::startPointCallback);\n\
       finishAddingManips();\n\
       <a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::connectToDependNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#ac7013eba743cd3226bc9a72b1ea27cff&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::connectToDependNode</a>(node);\n\
    }\n\
    return(stat);\n\
}\n\
</pre></div><div class=\'section\'><a id=\"draw-method\"></a><h2 id=\"draw-method\">draw method</h2></div>\n\
<p>The draw method is an optional method which can be used to customize the drawing of a container manipulator. If you are overriding the draw method, you must first call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::draw()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#aef28aea1609504c09c2096a532c0cebe&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::draw()</a></span> to draw all the children.</p>\n\
<p>For example, the <span class=\'code\'>moveManip::draw()</span> method draws a label in addition to the base manipulators.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void moveManip::draw(<a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a> &amp;view,\n\
                     const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> &amp;path,\n\
                     <a href=\"javascript:void(0)\" data-symbol=\"M3dView::DisplayStyle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html#a1b68f8823b8e275a4b548fdd27263e8a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView::DisplayStyle</a> style,\n\
                     M3dView::DispalyStatus status)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::draw\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#aef28aea1609504c09c2096a532c0cebe&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::draw</a>(view, path, style, status);\n\
    view.beginGL();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a> textPos(0, 0, 0);\n\
    char str[100];\n\
    sprintf(str, &quot;Stretch Me!&quot;);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> distanceText(str);\n\
    view.drawText(distanceText, textPos, <a href=\"javascript:void(0)\" data-symbol=\"M3dView::kLeft\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html#a8e0d441725a81d2bbdebbea09078260eaa9953673f54fd9f854de23739ebe2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView::kLeft</a>);\n\
    view.endGL();\n\
}\n\
\n\
</pre></div><p>The shape and drawing of custom manipulators is restricted to base manipulators because the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer::draw()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html#aef28aea1609504c09c2096a532c0cebe&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer::draw()</a></span> method only provides a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a></span> parameter to add supplementary drawing to the manipulator. The custom manipulator’s shape is already decided by the combination of base manipulator shapes that are added to the current manipulator container. However, there are situations where you want to have more control over different perspectives of a manipulator. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode</a></span> class, which was introduced in Maya 2009, provides a new way to implement custom manipulators with custom OpenGL drawing code. It offers options for selecting components (activating different handles) in custom manipulators. This class can either work alone or work with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipContainer</a></span> class.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode::draw()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html#aef28aea1609504c09c2096a532c0cebe&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode::draw()</a></span> method is overridden to implement custom drawing. In OpenGL, drawing and picking are done together. There are several important methods like the following:</p>\n\
<ul>\n\
<li><span class=\'code\'>glFirstHandle()</span> – When drawing an OpenGL pickable component, a name uniquely representing the OpenGL component must be set. This method returns the unsigned integer value that represents the first available OpenGL handle to use. When one OpenGL component drawing is finished, the integer value can be incremented by one to represent the next OpenGL component.</li>\n\
<li><span class=\'code\'>colorAndName()</span> – This method is used to set the color of the OpenGL component that is being drawn next. It is also used to set the OpenGL name of the component so that picking is supported.</li>\n\
</ul>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void triadScaleManip::draw (<a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a> &amp;view, const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> &amp;path, <a href=\"javascript:void(0)\" data-symbol=\"M3dView::DisplayStyle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html#a1b68f8823b8e275a4b548fdd27263e8a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView::DisplayStyle</a> style,\n\
         <a href=\"javascript:void(0)\" data-symbol=\"M3dView::DisplayStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html#ad9c34c5373567566950642c16a7c4bca&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView::DisplayStatus</a> status) {\n\
    ……\n\
 \n\
    // Begin the drawing\n\
    view.beginGL();\n\
 \n\
    // Place before you draw the manipulator component that can\n\
    // be pickable.\n\
    MGLuint glPickableItem;\n\
    glFirstHandle(glPickableItem);\n\
 \n\
    // Top\n\
    topName =glPickableItem;\n\
    colorAndName(view, glPickableItem, true, mainColor());\n\
    gGLFT-&gt;glBegin(GL_LINES);\n\
    gGLFT-&gt;glVertex3fv(tl);\n\
    gGLFT-&gt;glVertex3fv(tr);\n\
    gGLFT-&gt;glEnd();\n\
 \n\
    // Right\n\
    glPickableItem++;\n\
    rightName =glPickableItem;\n\
    colorAndName(view, glPickableItem, true, mainColor());\n\
    gGLFT-&gt;glBegin(GL_LINES);\n\
    gGLFT-&gt;glVertex3fv(tr);\n\
    gGLFT-&gt;glVertex3fv(br);\n\
    gGLFT-&gt;glEnd();\n\
 \n\
    // ...\n\
 \n\
    // End the drawing\n\
    view.endGL();\n\
}\n\
</pre></div><div class=\'section\'><a id=\"updating-plug-values-on-nodes\"></a><h2 id=\"updating-plug-values-on-nodes\">Updating Plug Values on Nodes</h2></div>\n\
<p>You can use <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode</a></span> to update the plug values in the following ways:</p>\n\
<ul>\n\
<li><strong>Implement Methods Related to Mouse Movement Event</strong> – There are three methods for mouse movement events: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode::doPress()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html#a316382b7a3e9753bd7c0a2d32cb5bf63&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode::doPress()</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode::doDrag()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html#ada39ff9e3902848c978e58f2190ab4bc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode::doDrag()</a></span>, and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode::doRelease()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html#a1192fb7b79b2ae825a5fd78149d063bf&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode::doRelease()</a></span>. These methods are called when the manipulator receives a corresponding mouse event such as mouse down, mouse drag, or mouse release. Algorithms can be implemented to update the plug values when these methods are called. For example, when <span class=\'code\'>doPress()</span> is called, you can record the mouse position as the original position or when <span class=\'code\'>doDrag()</span> is called, you can record the mouse movement (direction and distance).</li>\n\
<li><p><strong>Connect to a Dependent Node</strong> – Follow these steps to connect to a dependent node.</p>\n\
<ol>\n\
<li>Call <span class=\'code\'>add*Value()</span> in the <span class=\'code\'>postConstructor()</span> of the manipulator node.</li>\n\
<li>Call <span class=\'code\'>conectPlugToValue()</span> in <span class=\'code\'>connectToDependNode()</span>.</li>\n\
<li>Call <span class=\'code\'>set*Value()</span> in one of the <span class=\'code\'>do*()</span> functions.</li>\n\
</ol>\n\
<p>To connect plugs directly to manipulator values, the manipulator values must be first created on the manipulator. There are several <span class=\'code\'>add*Value()</span> methods to add manipulator values of different types. The one-on-one association can be achieved by calling <span class=\'code\'>connectPlugToValue()</span> method within <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode::connectToDependNode()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html#ac7013eba743cd3226bc9a72b1ea27cff&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxManipulatorNode::connectToDependNode()</a></span>. In one of the <span class=\'code\'>do*()</span> functions, which is triggered when the manipulator is receiving the corresponding mouse event, calling <span class=\'code\'>set*Value()</span> sets the corresponding manipulator value that consequently sets the plug value.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"registrationderegistration\"></a><h2 id=\"registrationderegistration\">Registration/Deregistration</h2></div>\n\
<p>Because manipulator containers are derived from nodes, user-defined manipulators can be registered and deregistered like any other node, with the exception that the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::Type</a></span> argument in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerNode()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a2d2a3682ce86ffbed188eff09d93998d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin::registerNode()</a></span> is set to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::kManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a4501afd1a084198ccd007e64ed2074c9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::kManipContainer</a></span> instead of the default <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::kDependNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a4b0bfa06b4f203b367a80f14fa6ed4fa&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::kDependNode</a></span>.</p>\n\
<p>For example, in moveToolManip.cpp:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin(<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
        ...\n\
        plugin.registerNode(&quot;moveManip&quot;, \n\
        moveManip::id,\n\
        &amp;moveManip::creator,\n\
        &amp;moveManip::initialize,\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MPxNode::kManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a4501afd1a084198ccd007e64ed2074c9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::kManipContainer</a>);\n\
        ...\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin(<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
    ...\n\
    plugin.deregisterNode(moveManip::id);\n\
    ...\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";