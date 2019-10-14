var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example code</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example code</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-code\"></a></div>\n\
<p>The following source code, taken from the <span class=\'code\'>closestPointOnCurve</span> plug-in, demonstrates how it was modified to support localized user interface strings. Relevant changes have been italicized. The complete set of source code for this plug-in is available as part of the Maya Bonus Tools.</p>\n\
<div class=\'section\'><a id=\"closestpointoncurveplugin.cpp\"></a><h2 id=\"closestpointoncurveplugin.cpp\">closestPointOnCurvePlugin.cpp</h2></div>\n\
<p>When the plug-in is initialized, a call to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin::registerUIStrings()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html#a92e203dc380e1d56d08d2866dcbd697e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnPlugin::registerUIStrings()</a></span> is made to register the strings used by the C++ code, and to invoke the MEL command <span class=\'code\'>closestPointOnCurveInitStrings</span> which registers MEL string resources and loads localized values. The <span class=\'code\'>closestPointOnCurveStrings.h</span> header file was created to provide a single point of definition for the C++ string resources used by the plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// File: closestPointOnCurveStrings.cpp\n\
// HEADER FILES:\n\
#include &quot;closestPointOnCurveCmd.h&quot;\n\
#include &quot;closestPointOnCurveNode.h&quot;\n\
#include &quot;closestPointOnCurveStrings.h&quot;\n\
#include &lt;maya/MFnPlugin.h&gt;\n\
\n\
// Register all strings used by the plugin C++ source \n\
static <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> registerMStringResources(void)\n\
{\n\
      \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStringResource::registerString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResource::registerString</a>(kNoValidObject);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStringResource::registerString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResource::registerString</a>(kInvalidType);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStringResource::registerString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResource::registerString</a>(kNoQueryFlag);\n\
    return MS::kSuccess;\n\
}\n\
\n\
// INITIALIZES THE PLUGIN BY REGISTERING COMMAND AND NODE:\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> initializePlugin(<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a> obj)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnPlugin</a> plugin(obj, PLUGIN_COMPANY, &quot;4.0&quot;, &quot;Any&quot;);\n\
\n\
    // Register string resources used in the code and scripts\n\
    // This is done first, so the strings are available.\n\
    status = plugin.registerUIStrings(registerMStringResources, &quot;closestPointOnCurveInitStrings&quot;);\n\
    if (!status)\n\
    {\n\
        status.perror(&quot;registerUIStrings&quot;);\n\
        return status;\n\
    }\n\
    status = plugin.registerCommand(&quot;closestPointOnCurve&quot;,  closestPointOnCurveCommand::creator,  closestPointOnCurveCommand::newSyntax);\n\
    if (!status)\n\
    {\n\
        status.perror(&quot;registerCommand&quot;);\n\
        return status; \n\
    }\n\
    status = plugin.registerNode(&quot;closestPointOnCurve&quot;,  closestPointOnCurveNode::id, closestPointOnCurveNode::creator,  closestPointOnCurveNode::initialize);\n\
    if (!status)\n\
    {\n\
        status.perror(&quot;registerNode&quot;);\n\
        return status;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"closestpointoncurvestrings.h\"></a><h2 id=\"closestpointoncurvestrings.h\">closestPointOnCurveStrings.h</h2></div>\n\
<p>This header file was added to define the string resources used in the plug-in&#39;s C++ modules. When the resources are accessed in more than one source file this type of approach is recommended for providing a common set of definitions for the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStringResourceId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResourceId</a></span> values.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// File: closestPointOnCurveStrings.h\n\
// MAYA HEADER FILES:\n\
#include &lt;maya/MStringResource.h&gt;\n\
#include &lt;maya/MStringResourceId.h&gt;\n\
// MStringResourceIds contain plugin id, unique resource id for\n\
// each string and the default value for the string.\n\
#define kPluginId  &quot;closestPointOnCurve&quot;\n\
#define kNoValidObject <a href=\"javascript:void(0)\" data-symbol=\"MStringResourceId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResourceId</a>(kPluginId,&quot;kNoValidObject&quot;, \\ &quot;A curve or its transform node must be specified as a command argument, or using your current selection.&quot;)\n\
#define kInValidType MSTringResourceId (kPluginID, &quot;kInvalidType&quot;, \\ &quot;Object ^1s has invalid type. Only a curve or its transform can be specified.&quot;)\n\
#define kNoQueryFlag <a href=\"javascript:void(0)\" data-symbol=\"MStringResourceId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResourceId</a> (kPluginId, &quot;kNoQueryFlag&quot;, \\ &quot;You must specify AT LEAST ONE queryable flag in query mode. Use the &quot;help&quot; command to list all available flags.&quot;)\n\
\n\
</pre></div><div class=\'section\'><a id=\"closestpointoncurvecmd.cpp\"></a><h2 id=\"closestpointoncurvecmd.cpp\">closestPointOnCurveCmd.cpp</h2></div>\n\
<p>This file previously used hard-coded strings to display error messages. The hard-coded strings were redefined as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStringResourceId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResourceId</a></span> objects in closestPointOnCurveStrings.h. To use the string resources, a call to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStringResource::getString()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResource::getString()</a></span> is made to retrieve the current value of the resource. This code also illustrates the use of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MString::format()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString::format()</a></span> method for inserting variable arguments into message strings. Using format for constructing message strings is recommended for internationalized code instead of string concatenation. Formatted strings allow positional arguments to be correctly placed in the correct context and position when the string is translated to another language.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// FILE: closestPointOnCurveCmd.cpp\n\
// HEADER FILES:\n\
#include &quot;closestPointOnCurveCmd.h&quot;\n\
#include &quot;closestTangentUAndDistance.h&quot;\n\
#include &quot;closestPointOnCurveStrings.h&quot;\n\
// COMPUTING THE OUTPUT VALUES FOR THE CLOSEST POSITION, NORMAL, TANGENT,  \n\
// PARAMETER-U AND DISTANCE, OR CREATING A &quot;closestPointOnCurve&quot; NODE:\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> closestPointOnCurveCommand::redoIt()\n\
{\n\
    // DOUBLE-CHECK TO MAKE SURE THERE&#39;S A SPECIFIED OBJECT TO EVALUATE ON:\n\
    if (sList.length() == 0)\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> stat;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString</a> msg = <a href=\"javascript:void(0)\" data-symbol=\"MStringResource::getString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResource::getString</a>(kNoValidObject, stat);          \n\
        displayError(msg);\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus::kFailure</a>;\n\
    }\n\
\n\
    // RETRIEVE THE SPECIFIED OBJECT AS A DAGPATH:\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDagPath</a> curveDagPath;\n\
    sList.getDagPath(0, curveDagPath);\n\
\n\
    // CHECK FOR INVALID NODE-TYPE INPUT WHEN SPECIFIED/SELECTED \n\
    // NODE IS *NOT* A &quot;CURVE&quot; NOR &quot;CURVE TRANSFORM&quot;:\n\
    if (!curveDagPath.node().hasFn(<a href=\"javascript:void(0)\" data-symbol=\"MFn::kNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a9366a44db1c93f593f8e65fcbec6a1b9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFn::kNurbsCurve</a>) &amp;&amp; \n\
        !(curveDagPath.node().hasFn(<a href=\"javascript:void(0)\" data-symbol=\"MFn::kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7adafa274206df602835f0f22ae887e126&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFn::kTransform</a>) \n\
        &amp;&amp; curveDagPath.hasFn(<a href=\"javascript:void(0)\" data-symbol=\"MFn::kNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a9366a44db1c93f593f8e65fcbec6a1b9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFn::kNurbsCurve</a>)))\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> stat;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString</a> msg; \n\
        // Use format to place variable string into message\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString</a> msgFmt = <a href=\"javascript:void(0)\" data-symbol=\"MStringResource::getString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResource::getString</a>(kInvalidType, stat);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStringArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringArray</a> selectionStrings;\n\
        sList.getSelectionStrings(0, selectionStrings);\n\
        msg.format(msgFmt, selectionStrings[0]);\n\
        displayError(msg);\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus::kFailure</a>;\n\
    }\n\
\n\
    // WHEN COMMAND *NOT* IN &quot;QUERY MODE&quot; (I.E. &quot;CREATION MODE&quot;), CREATE AND \n\
    // CONNECT A &quot;closestPointOnCurve&quot; NODE AND RETURN ITS NODE NAME:\n\
    if (!queryFlagSet)\n\
    {\n\
        // CREATE THE NODE:\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnDependencyNode</a> depNodeFn;\n\
        if (closestPointOnCurveNodeName == &quot;&quot;)\n\
            depNodeFn.create(&quot;closestPointOnCurve&quot;);\n\
        else\n\
            depNodeFn.create(&quot;closestPointOnCurve&quot;, closestPointOnCurveNodeName);\n\
        closestPointOnCurveNodeName = depNodeFn.name();\n\
\n\
        // SET THE &quot;.inPosition&quot; ATTRIBUTE, IF SPECIFIED IN THE COMMAND:\n\
        if (inPositionFlagSet)\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a> inPositionXPlug = depNodeFn.findPlug(&quot;inPositionX&quot;);\n\
            inPositionXPlug.setValue(inPosition.x);\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a> inPositionYPlug = depNodeFn.findPlug(&quot;inPositionY&quot;);\n\
            inPositionYPlug.setValue(inPosition.y);\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a> inPositionZPlug = depNodeFn.findPlug(&quot;inPositionZ&quot;);\n\
            inPositionZPlug.setValue(inPosition.z);\n\
        }\n\
\n\
        // MAKE SOME ADJUSTMENTS WHEN THE SPECIFIED NODE IS A \n\
        // &quot;TRANSFORM&quot; OF A CURVE SHAPE:\n\
        unsigned instanceNumber=0;\n\
        if (curveDagPath.node().hasFn(<a href=\"javascript:void(0)\" data-symbol=\"MFn::kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7adafa274206df602835f0f22ae887e126&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFn::kTransform</a>))\n\
        {\n\
            // EXTEND THE DAGPATH TO ITS CURVE &quot;SHAPE&quot; NODE:\n\
            curveDagPath.extendToShape();\n\
\n\
            // TRANSFORMS ARE *NOT* NECESSARILY THE &quot;FIRST&quot; INSTANCE \n\
            // TRANSFORM OF A CURVE SHAPE:\n\
            instanceNumber = curveDagPath.instanceNumber();\n\
        }\n\
\n\
       // CONNECT THE NODES:\n\
       <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a> worldCurvePlug, inCurvePlug;\n\
       inCurvePlug = depNodeFn.findPlug(&quot;inCurve&quot;);\n\
       depNodeFn.setObject(curveDagPath.node());\n\
       worldCurvePlug = depNodeFn.findPlug(&quot;worldSpace&quot;);\n\
       worldCurvePlug =    worldCurvePlug.elementByLogicalIndex(instanceNumber);\n\
       <a href=\"javascript:void(0)\" data-symbol=\"MDGModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDGModifier</a> dgModifier;\n\
       dgModifier.connect(worldCurvePlug, inCurvePlug);\n\
       dgModifier.doIt();\n\
\n\
       // SET COMMAND RESULT TO BE NEW NODE&#39;S NAME, AND RETURN:\n\
       setResult(closestPointOnCurveNodeName);\n\
       return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus::kSuccess</a>;\n\
    }\n\
\n\
    // OTHERWISE, WE&#39;RE IN THE COMMAND&#39;S &quot;QUERY MODE&quot;:\n\
    else\n\
    {\n\
\n\
        // COMPUTE THE CLOSEST POSITION, NORMAL, TANGENT, PARAMETER-U \n\
        // AND DISTANCE, USING THE *FIRST* INSTANCE TRANSFORM WHEN CURVE \n\
        // IS SPECIFIED AS A &quot;SHAPE&quot;:\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPoint</a> position;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVector</a> normal, tangent;\n\
        double paramU, distance;\n\
        closestTangentUAndDistance(curveDagPath, inPosition, position, normal, tangent, paramU, distance);\n\
        // WHEN NO QUERYABLE FLAG IS SPECIFIED, INDICATE AN ERROR:\n\
        if (!positionFlagSet &amp;&amp; !normalFlagSet &amp;&amp; !tangentFlagSet &amp;&amp; !paramUFlagSet &amp;&amp; !distanceFlagSet)\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> stat;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString</a> msg = <a href=\"javascript:void(0)\" data-symbol=\"MStringResource::getString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStringResource::getString</a>(kNoQueryFlag, stat);\n\
            displayError(msg);\n\
            return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus::kFailure</a>;\n\
        }\n\
\n\
        // WHEN JUST THE &quot;DISTANCE&quot; IS QUERIED, RETURN A SINGLE \n\
        // &quot;FLOAT&quot; INSTEAD OF AN ENTIRE FLOAT ARRAY FROM THE COMMAND:\n\
        else if (distanceFlagSet &amp;&amp; !(positionFlagSet || normalFlagSet ||       tangentFlagSet || paramUFlagSet))\n\
        setResult(distance);\n\
        // WHEN JUST THE &quot;PARAMETER-U&quot; IS QUERIED, RETURN A \n\
        // SINGLE &quot;FLOAT&quot; INSTEAD OF AN ENTIRE FLOAT ARRAY FROM THE      COMMAND:\n\
        else if (paramUFlagSet &amp;&amp; !(positionFlagSet || normalFlagSet || tangentFlagSet || distanceFlagSet))\n\
        setResult(paramU);\n\
\n\
        // OTHERWISE, SET THE RETURN VALUE OF THE COMMAND&#39;S RESULT TO \n\
        // A &quot;COMPOSITE ARRAY OF FLOATS&quot;:\n\
        else\n\
        {\n\
            // HOLDS FLOAT ARRAY RESULT:\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDoubleArray</a> floatArrayResult;\n\
            // APPEND THE RESULTS OF THE CLOSEST POSITION, NORMAL, \n\
            // TANGENT, PARAMETER-U AND DISTANCE VALUES TO THE FLOAT ARRAY RESULT:\n\
            if (positionFlagSet)\n\
            {\n\
                floatArrayResult.append(position.x);\n\
                floatArrayResult.append(position.y);\n\
                floatArrayResult.append(position.z);\n\
            }\n\
            if (normalFlagSet)\n\
            {\n\
                floatArrayResult.append(normal.x);\n\
                floatArrayResult.append(normal.y);\n\
                floatArrayResult.append(normal.z);\n\
            }\n\
            if (tangentFlagSet)\n\
            {\n\
                floatArrayResult.append(tangent.x);\n\
                floatArrayResult.append(tangent.y);\n\
                floatArrayResult.append(tangent.z);\n\
            }\n\
            if (paramUFlagSet)\n\
                floatArrayResult.append(paramU);\n\
            if (distanceFlagSet)\n\
                floatArrayResult.append(distance);\n\
\n\
            // FINALLY, SET THE COMMAND&#39;S RESULT:\n\
            setResult(floatArrayResult);\n\
        }\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus::kSuccess</a>;\n\
    }\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"closestpointoncurvecmdinitstrings.mel\"></a><h2 id=\"closestpointoncurvecmdinitstrings.mel\">closestPointOnCurveCmdInitStrings.mel</h2></div>\n\
<p>This file is the string initialization script referenced in the call to <span class=\'code\'>MFnPlugin::registerStringResources</span>. It has a dual purpose:</p>\n\
<ol>\n\
<li>It registers any string resources used by the plug-in MEL scripts. The strings registered in this example are used in <span class=\'code\'>AEclosestPointOnCurveTemplate.mel</span>.</li>\n\
<li>It calls <span class=\'code\'>loadPluginLanguageResources</span> with the name of the file containing the localized string values for this plug-in. In this example, a file named <span class=\'code\'>closestPointOnCurve.pres.mel</span> will be loaded if it is located in the appropriate language-specific location expected by <span class=\'code\'>loadPluginLanguageResources</span>.</li>\n\
</ol>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// FILE: closestPointOnCurveInitStrings.mel\n\
// DESCRIPTION: Register script resources and load localized \n\
// resources for the &quot;closestPointOnCurve&quot; plugin\n\
global proc closestPointOnCurveInitStrings()\n\
{\n\
    // Register script resources\n\
    registerPluginResource(&quot;closestPointOnCurve&quot;, &quot;kAETitle&quot;, &quot;Closest Point On Curve Attributes&quot;);\n\
    registerPluginResource(&quot;closestPointOnCurve&quot;, &quot;kInputCurve&quot;, &quot;Input Curve&quot;);\n\
    registerPluginResource(&quot;closestPointOnCurve&quot;, &quot;kResults&quot;, &quot;Results&quot;);\n\
    // Load any localized resources \n\
    loadPluginLanguageResources(&quot;closestPointOnCurve&quot;, &quot;closestPointOnCurve.pres.mel&quot;);\n\
\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"aeclosestpointoncurvetemplate.mel\"></a><h2 id=\"aeclosestpointoncurvetemplate.mel\">AEclosestPointOnCurveTemplate.mel</h2></div>\n\
<p>This file defines the custom attribute editor setup for the <span class=\'code\'>closestPointOnCurve</span> node which is created by this plug-in. The code was modified to use string resources in place of hard-coded strings for the attribute editor labels. The attribute names themselves can also be displayed in translated form, but the programmer does not need to designate string resources manually for each attribute. All attributes defined by the plug-in will have attributeNiceName resources automatically generated in the extracted resource file.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// FILE: AEclosestPointOnCurveTemplate.mel\n\
global proc AEclosestPointOnCurveTemplate(string $nodeName)\n\
{\n\
    string $titleStr = getPluginResource(&quot;closestPointOnCurve&quot;, &quot;kAETitle&quot;);\n\
    string $inputCurveLabel = getPluginResource(&quot;closestPointOnCurve&quot;, &quot;kInputCurve&quot;);\n\
    string $resultLabel = getPluginResource(&quot;closestPointOnCurve&quot;, &quot;kResults&quot;);\n\
    editorTemplate -beginScrollLayout;\n\
    editorTemplate -beginLayout $titleStr -collapse 0;\n\
    editorTemplate -callCustom ( &quot;AEinputNew \\&quot;&quot;+  $inputCurveLabel +&quot;\\&quot;&quot; ) ( &quot;AEinputReplace \\&quot;&quot; + \n\
                    $inputCurveLabel + &quot;\\&quot;&quot; ) &quot;inCurve&quot;;\n\
    editorTemplate -addControl &quot;inPosition&quot;;\n\
    editorTemplate -beginLayout $resultLabel;\n\
    editorTemplate -addControl &quot;position&quot;;\n\
    editorTemplate -addControl &quot;normal&quot;;\n\
    editorTemplate -addControl &quot;tangent&quot;;\n\
    editorTemplate -addControl &quot;paramU&quot;;\n\
    editorTemplate -addControl &quot;distance&quot;;\n\
    editorTemplate -endLayout;\n\
    editorTemplate -endLayout;\n\
    editorTemplate -suppress &quot;inCurve&quot;;\n\
    AEabstractBaseCreateTemplate $nodeName;\n\
    editorTemplate -addExtraControls;\n\
    editorTemplate -endScrollLayout;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"closestpointoncurve.pres.mel\"></a><h2 id=\"closestpointoncurve.pres.mel\">closestPointOnCurve.pres.mel</h2></div>\n\
<p>This file contains the extracted string resources for the <span class=\'code\'>closestPointOnCurve</span> plug-in. It was generated using the utility script <span class=\'code\'>pluginResourceUtil</span>. All registered strings from the C++ code and MEL scripts are extracted to the file along with their default values. Also included are node and attribute nice name values for each node registered by the plug-in, which are generated automatically by the utility (there is no manual registration required for these node and attribute resources). It is important to note that this original extracted file containing the default values is not required by the plug-in when it is running in English. All string resources have their default value built directly into the plug-in itself. The extracted file is used as the master list of resources that are to be translated into other languages. When the translated versions are available, the files are placed in the appropriate language-specific resources sub-directory along the MAYA_PLUG_IN_RESOURCE_PATH.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// File closestPointOnCurve.pres.mel\n\
// Resources for Plug-in: closestPointOnCurve\n\
// \n\
// ----------------------------\n\
// Registered string resources:\n\
// ----------------------------\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kAETitle&quot;, &quot;Closest Point On Curve Attributes&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kInputCurve&quot;, &quot;Input Curve&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kInvalidType&quot;, &quot;Object ^1s has invalid type.  Only a curve or its transform can be specified.&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kNoQueryFlag&quot;, &quot;You must specify AT LEAST ONE queryable flag in query mode.  Use the `help` command to list all available flags.&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kNoValidObject&quot;, &quot;A curve or its transform node must be specified as a command argument, or using your current selection.&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kResults&quot;, &quot;Results&quot;);\n\
\n\
// \n\
// --------------------------\n\
// Registered node resources:\n\
// --------------------------\n\
// \n\
// Node: closestPointOnCurve\n\
// \n\
setNodeNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;Closest Point On Curve&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ic&quot;, &quot;In Curve&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ip&quot;, &quot;In Position&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ipx&quot;, &quot;In Position X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ipy&quot;, &quot;In Position Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ipz&quot;, &quot;In Position Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;p&quot;, &quot;Position&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;px&quot;, &quot;Position X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;py&quot;, &quot;Position Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;pz&quot;, &quot;Position Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;n&quot;, &quot;Normal&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;nx&quot;, &quot;Normal X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ny&quot;, &quot;Normal Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;nz&quot;, &quot;Normal Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;t&quot;, &quot;Tangent&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;tx&quot;, &quot;Tangent X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ty&quot;, &quot;Tangent Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;tz&quot;, &quot;Tangent Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;u&quot;, &quot;Param U&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;d&quot;, &quot;Distance&quot; );\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";