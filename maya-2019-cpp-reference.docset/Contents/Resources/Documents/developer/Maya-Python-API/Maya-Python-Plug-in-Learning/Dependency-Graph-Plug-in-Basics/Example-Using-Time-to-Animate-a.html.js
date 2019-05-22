var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example: Using Time to Animate a Cube Mesh</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example: Using Time to Animate a Cube Mesh</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-using-time-to-animate-a-cube-mesh\"></a></div>\n\
<div class=\'section\'><a id=\"example-using-time-to-animate-a-cube-mesh-1\"></a><h2 id=\"example-using-time-to-animate-a-cube-mesh-1\">Example: Using Time to Animate a Cube Mesh</h2></div>\n\
<p><strong>Filename:</strong> <span class=\'code\'>animCubeNode.py</span></p>\n\
<p><strong>Annotated Output:</strong> The dotted arrows in the image below point to the rear and bottom polygons of the cube, while the full arrows point to its forward and top polygons. The table which accompanies this image illustrates the various array parameters used in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnMesh.create()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html#a3571e84c33d2411e2909e1c6108e27f7&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh.create()</a></span>.</p>\n\
<div class=\'figure\'><img src=\'developer/images/cubeMesh_75%.png\' title=\'\'></div>\n\
<div class=\'figure\'><img src=\'developer/images/polygonConnects_75%.png\' title=\'\'></div>\n\
<p><strong>Program Summary:</strong> The plug-in code below is an adaptation of the <span class=\'code\'>animCubeNode.py</span> example provided with the Maya API documentation. Some variable names were refactored to be more closely aligned with the class documentation and annotated output above. This <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxNode</a></span> plug-in defines a typed input attribute which accepts Maya&#39;s time to determine the scale of the generated output cube mesh. Once this command is run, slide the timeline in the Maya user interface to view the animation.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The way in which this cubic mesh is constructed is also used in <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Dependency-Graph-Plug-in-Basics/Example-Voxelizer-Node.html\' title=\'\'>Example: Voxelizer Node</a> to create voxels.</p>\n\
</blockquote>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pyAnimCubeNode.py\n\
\n\
import sys\n\
import maya.api.OpenMaya as OpenMaya\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
    \n\
kPluginNodeName = &quot;spAnimCube&quot;\n\
kPluginNodeId = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MTypeId</a>(0x8700B)\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class animCube(<a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxNode</a>):\n\
    time = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    outputMesh = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxNode.__init__\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#a0769ac5b3ecf4060e81dfe4bdc6ed327&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxNode.__init__</a>(self)\n\
    \n\
    \n\
    def createMesh(self, tempTime, outData):\n\
        &#39;&#39;&#39; \n\
        Create a cube mesh, and scale it given the current frame number. \n\
        The resulting mesh data is stored within outData.\n\
        &#39;&#39;&#39;\n\
        \n\
        frame = int(tempTime.asUnits(<a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MTime.kFilm\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_time.html#acbb45b0d2b7db226a7e7dda9a7307a89&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MTime.kFilm</a>))\n\
        if frame is 0:\n\
            frame = 1\n\
\n\
        cubeSize = 0.5 * float(frame % 10)\n\
\n\
        numPolygons = 6\n\
        numVertices = 8\n\
        numPolygonConnects = 4 * numPolygons # four vertices are needed per polygon. (i.e. 24 numPolygonConnects)\n\
\n\
        vertexArray = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPointArray</a>()\n\
        vertexArray.setLength( numVertices )\n\
        vertexArray[0] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize, -cubeSize, -cubeSize)\n\
        vertexArray[1] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize, -cubeSize, -cubeSize)\n\
        vertexArray[2] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize, -cubeSize,  cubeSize)\n\
        vertexArray[3] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize, -cubeSize,  cubeSize)\n\
        vertexArray[4] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize,  cubeSize, -cubeSize)\n\
        vertexArray[5] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize,  cubeSize,  cubeSize)\n\
        vertexArray[6] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize,  cubeSize,  cubeSize)\n\
        vertexArray[7] = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize,  cubeSize, -cubeSize)\n\
        \n\
        polygonCounts = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_int_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MIntArray</a>()\n\
        polygonCounts.setLength( numPolygons )\n\
        for i in range (0,numPolygons):\n\
            polygonCounts[i] = 4\n\
\n\
        \n\
        polygonConnects = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_int_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MIntArray</a>()\n\
        polygonConnects.setLength( numPolygonConnects )\n\
        polygonConnects[0] = 0\n\
        polygonConnects[1] = 1\n\
        polygonConnects[2] = 2\n\
        polygonConnects[3] = 3\n\
        polygonConnects[4] = 4\n\
        polygonConnects[5] = 5\n\
        polygonConnects[6] = 6\n\
        polygonConnects[7] = 7\n\
        polygonConnects[8] = 3\n\
        polygonConnects[9] = 2\n\
        polygonConnects[10] = 6\n\
        polygonConnects[11] = 5\n\
        polygonConnects[12] = 0\n\
        polygonConnects[13] = 3\n\
        polygonConnects[14] = 5\n\
        polygonConnects[15] = 4\n\
        polygonConnects[16] = 0\n\
        polygonConnects[17] = 4\n\
        polygonConnects[18] = 7\n\
        polygonConnects[19] = 1\n\
        polygonConnects[20] = 1\n\
        polygonConnects[21] = 7\n\
        polygonConnects[22] = 6\n\
        polygonConnects[23] = 2\n\
\n\
        meshFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnMesh</a>()\n\
        newMesh = meshFn.create(vertexArray, polygonCounts, polygonConnects, parent=outData)\n\
        \n\
\n\
    def compute(self, plug, data):\n\
        if plug == animCube.outputMesh:\n\
            timeData = data.inputValue(animCube.time)\n\
            tempTime = timeData.asTime()\n\
\n\
            outputHandle = data.outputValue(animCube.outputMesh)\n\
\n\
            dataCreator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnMeshData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnMeshData</a>()\n\
            newOutputData = dataCreator.create()\n\
\n\
            self.createMesh(tempTime, newOutputData)\n\
\n\
            outputHandle.setMObject(newOutputData)\n\
            data.setClean(plug)\n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
        \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; Creates an instance of our node class and delivers it to Maya as a pointer. &#39;&#39;&#39;\n\
    return animCube()\n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; Defines the input and output attributes as static variables in our plug-in class. &#39;&#39;&#39;\n\
    unitAttr = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnUnitAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_unit_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnUnitAttribute</a>()\n\
    typedAttr = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTypedAttribute</a>()\n\
    \n\
    animCube.time = unitAttr.create(&quot;time&quot;, &quot;tm&quot;, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnUnitAttribute.kTime\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_unit_attribute.html#ac8821de355f6b0b9d8692847c8218ed3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnUnitAttribute.kTime</a>, 0.0)\n\
    animCube.outputMesh = typedAttr.create(&quot;outputMesh&quot;, &quot;out&quot;, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnData.kMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html#aa4fc8af047bca4a078a175379e10e9ec&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnData.kMesh</a>)\n\
\n\
    animCube.addAttribute(animCube.time)\n\
    animCube.addAttribute(animCube.outputMesh)\n\
\n\
    animCube.attributeAffects(animCube.time, animCube.outputMesh)\n\
\n\
\n\
def initializePlugin(mobject):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>(mobject)\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator, nodeInitializer)\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register node: &quot; + kPluginNodeName )\n\
        raise\n\
\n\
def uninitializePlugin(mobject):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>(mobject)\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to deregister node: &quot; + kPluginNodeName )\n\
        raise\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &quot;pyAnimCubeNode.py&quot; )\n\
cmds.createNode( &quot;transform&quot;, name=&quot;animCube1&quot; )\n\
cmds.createNode( &quot;mesh&quot;, name=&quot;animCubeShape1&quot;, parent=&quot;animCube1&quot; )\n\
cmds.sets( &quot;animCubeShape1&quot;, add=&quot;initialShadingGroup&quot; )\n\
cmds.createNode( &quot;spAnimCube&quot;, name=&quot;animCubeNode1&quot; )\n\
cmds.connectAttr( &quot;time1.outTime&quot;, &quot;animCubeNode1.time&quot; )\n\
cmds.connectAttr( &quot;animCubeNode1.outputMesh&quot;, &quot;animCubeShape1.inMesh&quot; )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># animCubeNode.py\n\
\n\
import sys\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
\n\
kPluginNodeName = &quot;spAnimCube&quot;\n\
kPluginNodeId = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MTypeId</a>(0x8700B)\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class animCube(OpenMayaMPx.MPxNode):\n\
    time = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    outputMesh = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxNode.__init__(self)\n\
    \n\
    \n\
    def createMesh(self, tempTime, outData):\n\
        &#39;&#39;&#39; \n\
        Create a cube mesh, and scale it given the current frame number. \n\
        The resulting mesh data is stored within outData.\n\
        &#39;&#39;&#39;\n\
        \n\
        frame = int(tempTime.asUnits(<a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MTime.kFilm\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_time.html#acbb45b0d2b7db226a7e7dda9a7307a89&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MTime.kFilm</a>))\n\
        if frame is 0:\n\
            frame = 1\n\
\n\
        cubeSize = 0.5 * float(frame % 10)\n\
\n\
        numPolygons = 6\n\
        numVertices = 8\n\
        numPolygonConnects = 4 * numPolygons # four vertices are needed per polygon. (i.e. 24 numPolygonConnects)\n\
\n\
        vertexArray = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPointArray</a>()\n\
        vertexArray.setLength( numVertices )\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize, -cubeSize, -cubeSize), 0)\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize, -cubeSize, -cubeSize), 1)\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize, -cubeSize,  cubeSize), 2)\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize, -cubeSize,  cubeSize), 3)\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize,  cubeSize, -cubeSize), 4)\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>(-cubeSize,  cubeSize,  cubeSize), 5)\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize,  cubeSize,  cubeSize), 6)\n\
        vertexArray.set( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatPoint</a>( cubeSize,  cubeSize, -cubeSize), 7)\n\
        \n\
        polygonCounts = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_int_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MIntArray</a>()\n\
        polygonCounts.setLength( numPolygons )\n\
        polygonCounts.set(4, 0)\n\
        polygonCounts.set(4, 1)\n\
        polygonCounts.set(4, 2)\n\
        polygonCounts.set(4, 3)\n\
        polygonCounts.set(4, 4)\n\
        polygonCounts.set(4, 5)\n\
        \n\
        polygonConnects = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_int_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MIntArray</a>()\n\
        polygonConnects.setLength( numPolygonConnects )\n\
        polygonConnects.set(0, 0)\n\
        polygonConnects.set(1, 1)\n\
        polygonConnects.set(2, 2)\n\
        polygonConnects.set(3, 3)\n\
        polygonConnects.set(4, 4)\n\
        polygonConnects.set(5, 5)\n\
        polygonConnects.set(6, 6)\n\
        polygonConnects.set(7, 7)\n\
        polygonConnects.set(3, 8)\n\
        polygonConnects.set(2, 9)\n\
        polygonConnects.set(6, 10)\n\
        polygonConnects.set(5, 11)\n\
        polygonConnects.set(0, 12)\n\
        polygonConnects.set(3, 13)\n\
        polygonConnects.set(5, 14)\n\
        polygonConnects.set(4, 15)\n\
        polygonConnects.set(0, 16)\n\
        polygonConnects.set(4, 17)\n\
        polygonConnects.set(7, 18)\n\
        polygonConnects.set(1, 19)\n\
        polygonConnects.set(1, 20)\n\
        polygonConnects.set(7, 21)\n\
        polygonConnects.set(6, 22)\n\
        polygonConnects.set(2, 23)\n\
\n\
        meshFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnMesh</a>()\n\
        newMesh = meshFn.create(numVertices, numPolygons, vertexArray, polygonCounts, polygonConnects, outData)\n\
\n\
    def compute(self, plug, data):\n\
        if plug == animCube.outputMesh:\n\
            timeData = data.inputValue(animCube.time)\n\
            tempTime = timeData.asTime()\n\
\n\
            outputHandle = data.outputValue(animCube.outputMesh)\n\
\n\
            dataCreator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnMeshData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnMeshData</a>()\n\
            newOutputData = dataCreator.create()\n\
\n\
            self.createMesh(tempTime, newOutputData)\n\
\n\
            outputHandle.setMObject(newOutputData)\n\
            data.setClean(plug)\n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
        \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; Creates an instance of our node class and delivers it to Maya as a pointer. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( animCube() )\n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; Defines the input and output attributes as static variables in our plug-in class. &#39;&#39;&#39;\n\
    unitAttr = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnUnitAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_unit_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnUnitAttribute</a>()\n\
    typedAttr = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTypedAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_typed_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTypedAttribute</a>()\n\
    \n\
    animCube.time = unitAttr.create(&quot;time&quot;, &quot;tm&quot;, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnUnitAttribute.kTime\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_unit_attribute.html#ac8821de355f6b0b9d8692847c8218ed3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnUnitAttribute.kTime</a>, 0.0)\n\
    animCube.outputMesh = typedAttr.create(&quot;outputMesh&quot;, &quot;out&quot;, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnData.kMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html#aa4fc8af047bca4a078a175379e10e9ec&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnData.kMesh</a>)\n\
\n\
    animCube.addAttribute(animCube.time)\n\
    animCube.addAttribute(animCube.outputMesh)\n\
\n\
    animCube.attributeAffects(animCube.time, animCube.outputMesh)\n\
\n\
\n\
def initializePlugin(mobject):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator, nodeInitializer)\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register node: &quot; + kPluginNodeName )\n\
        raise\n\
\n\
def uninitializePlugin(mobject):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to deregister node: &quot; + kPluginNodeName )\n\
        raise\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &quot;animCubeNode.py&quot; )\n\
cmds.createNode( &quot;transform&quot;, name=&quot;animCube1&quot; )\n\
cmds.createNode( &quot;mesh&quot;, name=&quot;animCubeShape1&quot;, parent=&quot;animCube1&quot; )\n\
cmds.sets( &quot;animCubeShape1&quot;, add=&quot;initialShadingGroup&quot; )\n\
cmds.createNode( &quot;spAnimCube&quot;, name=&quot;animCubeNode1&quot; )\n\
cmds.connectAttr( &quot;time1.outTime&quot;, &quot;animCubeNode1.time&quot; )\n\
cmds.connectAttr( &quot;animCubeNode1.outputMesh&quot;, &quot;animCubeShape1.inMesh&quot; )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";