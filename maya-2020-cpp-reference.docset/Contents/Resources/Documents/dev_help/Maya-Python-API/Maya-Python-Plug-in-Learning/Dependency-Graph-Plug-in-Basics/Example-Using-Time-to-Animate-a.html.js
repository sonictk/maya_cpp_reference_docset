var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example: Using Time to Animate a Cube Mesh</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example: Using Time to Animate a Cube Mesh</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-using-time-to-animate-a-cube-mesh\"></a></div>\n\
<div class=\'section\'><a id=\"example-using-time-to-animate-a-cube-mesh-1\"></a><h2 id=\"example-using-time-to-animate-a-cube-mesh-1\">Example: Using Time to Animate a Cube Mesh</h2></div>\n\
<p><strong>Filename:</strong> <span class=\'code\'>animCubeNode.py</span></p>\n\
<p><strong>Annotated Output:</strong> The dotted arrows in the image below point to the rear and bottom polygons of the cube, while the full arrows point to its forward and top polygons. The table which accompanies this image illustrates the various array parameters used in <span class=\'code\'>MFnMesh.create()</span>.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/cubeMesh_75%.png\' title=\'\' /></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/polygonConnects_75%.png\' title=\'\' /></div>\n\
<p><strong>Program Summary:</strong> The plug-in code below is an adaptation of the <span class=\'code\'>animCubeNode.py</span> example provided with the Maya API documentation. Some variable names were refactored to be more closely aligned with the class documentation and annotated output above. This <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxNode</a></span> plug-in defines a typed input attribute which accepts Maya&#39;s time to determine the scale of the generated output cube mesh. Once this command is run, slide the timeline in the Maya user interface to view the animation.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The way in which this cubic mesh is constructed is also used in <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Dependency-Graph-Plug-in-Basics/Example-Voxelizer-Node.html\' title=\'\'>Example: Voxelizer Node</a> to create voxels.</p>\n\
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
kPluginNodeId = OpenMaya.MTypeId(0x8700B)\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class animCube(OpenMaya.MPxNode):\n\
    time = OpenMaya.MObject()\n\
    outputMesh = OpenMaya.MObject()\n\
\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMaya.MPxNode.__init__(self)\n\
    \n\
    \n\
    def createMesh(self, tempTime, outData):\n\
        &#39;&#39;&#39; \n\
        Create a cube mesh, and scale it given the current frame number. \n\
        The resulting mesh data is stored within outData.\n\
        &#39;&#39;&#39;\n\
        \n\
        frame = int(tempTime.asUnits(OpenMaya.MTime.kFilm))\n\
        if frame is 0:\n\
            frame = 1\n\
\n\
        cubeSize = 0.5 * float(frame % 10)\n\
\n\
        numPolygons = 6\n\
        numVertices = 8\n\
        numPolygonConnects = 4 * numPolygons # four vertices are needed per polygon. (i.e. 24 numPolygonConnects)\n\
\n\
        vertexArray = OpenMaya.MFloatPointArray()\n\
        vertexArray.setLength( numVertices )\n\
        vertexArray[0] = OpenMaya.MFloatPoint(-cubeSize, -cubeSize, -cubeSize)\n\
        vertexArray[1] = OpenMaya.MFloatPoint( cubeSize, -cubeSize, -cubeSize)\n\
        vertexArray[2] = OpenMaya.MFloatPoint( cubeSize, -cubeSize,  cubeSize)\n\
        vertexArray[3] = OpenMaya.MFloatPoint(-cubeSize, -cubeSize,  cubeSize)\n\
        vertexArray[4] = OpenMaya.MFloatPoint(-cubeSize,  cubeSize, -cubeSize)\n\
        vertexArray[5] = OpenMaya.MFloatPoint(-cubeSize,  cubeSize,  cubeSize)\n\
        vertexArray[6] = OpenMaya.MFloatPoint( cubeSize,  cubeSize,  cubeSize)\n\
        vertexArray[7] = OpenMaya.MFloatPoint( cubeSize,  cubeSize, -cubeSize)\n\
        \n\
        polygonCounts = OpenMaya.MIntArray()\n\
        polygonCounts.setLength( numPolygons )\n\
        for i in range (0,numPolygons):\n\
            polygonCounts[i] = 4\n\
\n\
        \n\
        polygonConnects = OpenMaya.MIntArray()\n\
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
        meshFn = OpenMaya.MFnMesh()\n\
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
            dataCreator = OpenMaya.MFnMeshData()\n\
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
    unitAttr = OpenMaya.MFnUnitAttribute()\n\
    typedAttr = OpenMaya.MFnTypedAttribute()\n\
    \n\
    animCube.time = unitAttr.create(&quot;time&quot;, &quot;tm&quot;, OpenMaya.MFnUnitAttribute.kTime, 0.0)\n\
    animCube.outputMesh = typedAttr.create(&quot;outputMesh&quot;, &quot;out&quot;, OpenMaya.MFnData.kMesh)\n\
\n\
    animCube.addAttribute(animCube.time)\n\
    animCube.addAttribute(animCube.outputMesh)\n\
\n\
    animCube.attributeAffects(animCube.time, animCube.outputMesh)\n\
\n\
\n\
def initializePlugin(mobject):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator, nodeInitializer)\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register node: &quot; + kPluginNodeName )\n\
        raise\n\
\n\
def uninitializePlugin(mobject):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin(mobject)\n\
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
kPluginNodeId = OpenMaya.MTypeId(0x8700B)\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class animCube(OpenMayaMPx.MPxNode):\n\
    time = OpenMaya.MObject()\n\
    outputMesh = OpenMaya.MObject()\n\
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
        frame = int(tempTime.asUnits(OpenMaya.MTime.kFilm))\n\
        if frame is 0:\n\
            frame = 1\n\
\n\
        cubeSize = 0.5 * float(frame % 10)\n\
\n\
        numPolygons = 6\n\
        numVertices = 8\n\
        numPolygonConnects = 4 * numPolygons # four vertices are needed per polygon. (i.e. 24 numPolygonConnects)\n\
\n\
        vertexArray = OpenMaya.MFloatPointArray()\n\
        vertexArray.setLength( numVertices )\n\
        vertexArray.set( OpenMaya.MFloatPoint(-cubeSize, -cubeSize, -cubeSize), 0)\n\
        vertexArray.set( OpenMaya.MFloatPoint( cubeSize, -cubeSize, -cubeSize), 1)\n\
        vertexArray.set( OpenMaya.MFloatPoint( cubeSize, -cubeSize,  cubeSize), 2)\n\
        vertexArray.set( OpenMaya.MFloatPoint(-cubeSize, -cubeSize,  cubeSize), 3)\n\
        vertexArray.set( OpenMaya.MFloatPoint(-cubeSize,  cubeSize, -cubeSize), 4)\n\
        vertexArray.set( OpenMaya.MFloatPoint(-cubeSize,  cubeSize,  cubeSize), 5)\n\
        vertexArray.set( OpenMaya.MFloatPoint( cubeSize,  cubeSize,  cubeSize), 6)\n\
        vertexArray.set( OpenMaya.MFloatPoint( cubeSize,  cubeSize, -cubeSize), 7)\n\
        \n\
        polygonCounts = OpenMaya.MIntArray()\n\
        polygonCounts.setLength( numPolygons )\n\
        polygonCounts.set(4, 0)\n\
        polygonCounts.set(4, 1)\n\
        polygonCounts.set(4, 2)\n\
        polygonCounts.set(4, 3)\n\
        polygonCounts.set(4, 4)\n\
        polygonCounts.set(4, 5)\n\
        \n\
        polygonConnects = OpenMaya.MIntArray()\n\
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
        meshFn = OpenMaya.MFnMesh()\n\
        newMesh = meshFn.create(numVertices, numPolygons, vertexArray, polygonCounts, polygonConnects, outData)\n\
\n\
    def compute(self, plug, data):\n\
        if plug == animCube.outputMesh:\n\
            timeData = data.inputValue(animCube.time)\n\
            tempTime = timeData.asTime()\n\
\n\
            outputHandle = data.outputValue(animCube.outputMesh)\n\
\n\
            dataCreator = OpenMaya.MFnMeshData()\n\
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
    unitAttr = OpenMaya.MFnUnitAttribute()\n\
    typedAttr = OpenMaya.MFnTypedAttribute()\n\
    \n\
    animCube.time = unitAttr.create(&quot;time&quot;, &quot;tm&quot;, OpenMaya.MFnUnitAttribute.kTime, 0.0)\n\
    animCube.outputMesh = typedAttr.create(&quot;outputMesh&quot;, &quot;out&quot;, OpenMaya.MFnData.kMesh)\n\
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