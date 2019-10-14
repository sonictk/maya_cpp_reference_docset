var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example: Creating a Scene</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example: Creating a Scene</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-creating-a-scene\"></a></div>\n\
<div class=\'section\'><a id=\"example-creating-a-scene-1\"></a><h2 id=\"example-creating-a-scene-1\">Example: Creating a Scene</h2></div>\n\
<p><strong>Filename:</strong> <span class=\'code\'>sampleScene.py</span></p>\n\
<p><strong>Sample Output:</strong></p>\n\
<div class=\'figure\'><img src=\'developer/images/sampleScene_75%.png\' title=\'\'></div>\n\
<p><strong>Program Summary:</strong> The plug-in code below creates a new command, <span class=\'code\'>cmds.mySampleScene()</span>, by inheriting from the <span class=\'code\'>OpenMayaMPx.MPxCommand</span> class. Running this command creates a red-shaded mesh whose polygons look like a simple house, creates a spotlight whose aiming direction is constrained to look at the house, and creates a new camera to define a new view point. Lastly, the scene graph (DAG) is traversed and printed to the Script Editor output window. Activate the viewer&#39;s &quot;smooth shading&quot;, &quot;wireframe on shaded&quot;, and &quot;use all lights&quot; buttons to match the sample output above.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pySampleScene.py\n\
\n\
import sys\n\
import maya.api.OpenMaya as OpenMaya\n\
import maya.api.OpenMayaUI as OpenMayaUI\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
\n\
kPluginCmdName = &quot;pySampleScene&quot;\n\
\n\
# Vertices used to define a planar house shape within a single <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a> object:\n\
#\n\
#              [4]\n\
#             /   \\\n\
#            /     \\\n\
#          [3]-----[2]        where the bracketed numbers correspond\n\
#           |       |         to the vertex index.\n\
#           |       |\n\
#          [0]-----[1]\n\
#\n\
vertices = [ # Square plane:\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>( -2, -2, 0), # index 0: bottom left corner\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>(  2, -2, 0), # index 1: bottom right corner\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>(  2,  2, 0), # index 2: top right corner\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>( -2,  2, 0), # index 3: top left corner\n\
             # Vertex used to define the roof:\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>(  0,  5, 0)  # index 4: tip of the roof.\n\
            ]\n\
   \n\
\n\
# Count the number of times this command has been instantiated.\n\
commandInstanceCounter = 1\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class SampleSceneCommand(<a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxCommand</a>):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxCommand.__init__\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html#a0e33c57b86f794759092176b16cc0b44&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxCommand.__init__</a>(self)\n\
        \n\
        # We keep track of the number of times the command was instantiated, and we label this particular\n\
        # instance of the command with it. This will help us name the objects manipulated by this particular instance \n\
        # of the command.\n\
        global commandInstanceCounter\n\
        self.commandExecution = commandInstanceCounter\n\
        commandInstanceCounter = commandInstanceCounter + 1\n\
    \n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Set up the objects which the command will use. &#39;&#39;&#39;\n\
        \n\
        # This <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> object will allow us to undo and redo the creation of DAG nodes in our command.\n\
        self.dagModifier = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagModifier</a>()\n\
        \n\
        # We first create the required MObjects using the MDagModifer assigned to self.dagModifier.\n\
        #   (!) The &#39;transform&#39;, &#39;spotLight&#39; and &#39;camera&#39; strings are recognized by the <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> as valid node type names. \n\
        #       For a complete list of node type names, consult the Maya User Guide  &gt; Technical Documentation &gt; Nodes section.\n\
        self.meshTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.meshShapeObj = self.createHouseMesh() # This function will create a mesh under the self.meshTransformObj node.\n\
        \n\
        self.lightTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.lightShapeObj = self.dagModifier.createNode( &#39;spotLight&#39;, self.lightTransformObj )\n\
        \n\
        self.cameraTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.cameraShapeObj = self.dagModifier.createNode( &#39;camera&#39;, self.cameraTransformObj )\n\
        \n\
        # Create the shading node.\n\
        self.shadingNodeName = &#39;myMaterial&#39; + str( self.commandExecution )\n\
        self.dagModifier.commandToExecute( &#39;shadingNode -asShader -name &#39; + self.shadingNodeName + &#39; phong;&#39; )\n\
        self.dagModifier.commandToExecute( &#39;setAttr &quot;&#39; + self.shadingNodeName + &#39;.color&quot; -type double3 0.7 0.2 0.15;&#39;)\n\
        \n\
        # Create the shading group.\n\
        self.shadingGroupName = &#39;myShadingGroup&#39; + str( self.commandExecution )\n\
        self.dagModifier.commandToExecute( &#39;sets -renderable true -noSurfaceShader true -empty -name &#39; + self.shadingGroupName + &#39;;&#39;)\n\
        self.dagModifier.commandToExecute( &#39;connectAttr -f &#39; + self.shadingNodeName + &#39;.outColor &#39; + self.shadingGroupName + &#39;.surfaceShader;&#39; )\n\
        \n\
        # Invoke the command&#39;s redoIt() function to actually create and manipulate these objects.\n\
        self.redoIt()\n\
    \n\
    \n\
    def createHouseMesh(self):\n\
        &#39;&#39;&#39; Create a house mesh. &#39;&#39;&#39;\n\
        global vertices # we want to access the list of vertices defined as a static variable  \n\
\n\
        # Create the function set for operating on the mesh\n\
        meshFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnMesh</a>( )\n\
\n\
        # Create a mesh and set this function set to operate on it.\n\
        # The mesh consists of 2 polygons: a square plane and a triangle roof. The second parameter gives the number of vertices for each.\n\
        # The third parameter is the sequence of vertices, partitioned according to the second parameter.\n\
        # Therefore, the 4 vertices numbered 0, 1, 2, 3 are used for the square, and the 3 vertices 2, 4, 3 for the triangle.\n\
        # The mesh is parented under the transform node.\n\
        meshShapeObj = meshFn.create(vertices, (4,3), (0,1,2,3,2,4,3), parent=self.meshTransformObj)\n\
                \n\
        # Set the name of the mesh.\n\
        meshFn.setName( &#39;myMeshShape&#39; + str( self.commandExecution ) )\n\
        \n\
        return meshShapeObj\n\
        \n\
    \n\
    def redoIt(self):\n\
        &#39;&#39;&#39; \n\
        Manipulate the objects created in doIt(). This function is also called by Maya when\n\
        the user re-does the operation after undoing it.\n\
        &#39;&#39;&#39;\n\
        \n\
        # Perform the operations enqueued within our reference to MDagModifier.\n\
        self.dagModifier.doIt()\n\
        \n\
        #=======================================\n\
        # MESH MANIPULATION\n\
        #=======================================\n\
        # Set the translation value of the mesh&#39;s transform node, as well as its name.\n\
        transformFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTransform</a>( self.meshTransformObj )\n\
        transformFn.setTranslation( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MVector</a>( 0, 2, 0 ), <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSpace.kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_space.html#adcf1dba26aeb417e59c4718fb0b05ff3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSpace.kTransform</a> )\n\
        transformFn.setName( &#39;myMeshTransform&#39; + str( self.commandExecution ) )\n\
        \n\
        # Obtain the DAG path of the mesh transform node. This will be used to create\n\
        # an aiming constraint between the light and the mesh.\n\
        \n\
        meshTransformDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        dagmeshNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>( self.meshTransformObj )\n\
        meshTransformDagPath = dagmeshNodeFn.getPath()\n\
\n\
        # The DAG path of the mesh shape node will be used to apply a material.\n\
\n\
        meshShapeDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        dagshapeNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>( self.meshShapeObj )\n\
        meshShapeDagPath = dagshapeNodeFn.getPath( )    \n\
                \n\
        #=======================================\n\
        # LIGHT MANIPULATION\n\
        #=======================================\n\
        # Set the translation value of the light&#39;s transform node, as well as its name.\n\
        transformFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTransform</a>( self.lightTransformObj )\n\
        transformFn.setTranslation( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MVector</a>( 4, 9.5, 12 ), <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSpace.kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_space.html#adcf1dba26aeb417e59c4718fb0b05ff3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSpace.kTransform</a> )\n\
        transformFn.setName( &#39;myLightTransform&#39; + str( self.commandExecution ) )\n\
        \n\
        # Obtain the DAG path of the light transform node. This will be used to create\n\
        # an aiming constraint between the light and the mesh.\n\
\n\
        lightTransformDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        daglightNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>( self.lightTransformObj  )\n\
        lightTransformDagPath = daglightNodeFn.getPath()\n\
        \n\
        # Change the name of the light shape\n\
        spotLightFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDependencyNode</a>( self.lightShapeObj )\n\
        spotLightFn.setName( &#39;myLightShape&#39; + str( self.commandExecution ) )\n\
\n\
        #=======================================\n\
        # CAMERA MANIPULATION\n\
        #=======================================\n\
        # Set the translation value of the camera&#39;s transform node, as well as its name. \n\
        transformFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTransform</a>( self.cameraTransformObj )\n\
        transformFn.setTranslation( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MVector</a>( 0, 5, 30 ), <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSpace.kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_space.html#adcf1dba26aeb417e59c4718fb0b05ff3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSpace.kTransform</a> )\n\
        transformFn.setName( &#39;myCameraTransform&#39; + str( self.commandExecution ) )\n\
        \n\
        # Change the name of the camera shape.\n\
        cameraFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnCamera</a>( self.cameraShapeObj )\n\
        cameraFn.setName( &#39;myCameraShape&#39; + str( self.commandExecution ) )\n\
        \n\
        # Store the previous camera before we switch to the camera created within this command.\n\
        # In undo() we will revert to this previous camera.\n\
        self.previousCamera = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        currentView = <a href=\"javascript:void(0)\" data-symbol=\"OpenMayaUI.M3dView.active3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html#af45e4e174b851359e97faa8d32d1972c&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMayaUI.M3dView.active3dView</a>()\n\
        self.previousCamera=currentView.getCamera()    # self.previousCamera is now populated with the current camera before we switch.\n\
\n\
        # Get the DAG path of our camera shape node.\n\
        cameraDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        dagNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>( self.cameraShapeObj )\n\
        # dagNodeFn.getPath( cameraDagPath )\n\
        cameraDagPath = dagNodeFn.getPath()\n\
        \n\
        # Set the camera view to the one we switched\n\
        currentView.setCamera( cameraDagPath )\n\
        \n\
        #=======================================\n\
        # AIM CONSTRAINT\n\
        #=======================================\n\
        # Enqueue a MEL command to aim the light to the mesh&#39;s transform node. We must use MEL\n\
        # because there is currently no way to enqueue calls to the maya.cmds Python module.\n\
        self.dagModifier.commandToExecute( &#39;aimConstraint -aimVector 0.0 0.0 -1.0 &#39; \n\
                                           + meshTransformDagPath.fullPathName() + &#39; &#39; \n\
                                           + lightTransformDagPath.fullPathName() )\n\
        \n\
        # Execute the MEL command we just added to the MDagModifier. By adding this command to the <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a>,\n\
        # we are able to undo it using MDagModifier.undoIt() in our command&#39;s undoIt() method. \n\
        self.dagModifier.doIt()\n\
        \n\
        #=======================================\n\
        # PHONG MATERIAL\n\
        #=======================================\n\
        # Include our mesh shape in the shading group we have defined in this command&#39;s doIt() function.\n\
        self.dagModifier.commandToExecute( &#39;sets -e -forceElement &#39; + self.shadingGroupName + &#39; &#39; + meshShapeDagPath.fullPathName() )\n\
        \n\
        # Execute the queued MEL command.\n\
        self.dagModifier.doIt()\n\
        \n\
        \n\
        # Print the contents of the scene.\n\
        self.printScene()\n\
        \n\
    \n\
    def undoIt(self):\n\
        &#39;&#39;&#39; Undo the command. &#39;&#39;&#39;\n\
        \n\
        # Switch back to the previous camera\n\
        currentView = <a href=\"javascript:void(0)\" data-symbol=\"OpenMayaUI.M3dView.active3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html#af45e4e174b851359e97faa8d32d1972c&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMayaUI.M3dView.active3dView</a>()\n\
        currentView.setCamera( self.previousCamera )\n\
        \n\
        # This call to MDagModifier.undoIt() undoes all the operations within the MDagModifier.\n\
        # Observe that the number of calls to MDagModifier.undoIt() does not need to match the number of calls to MDagModifier.doIt().\n\
        self.dagModifier.undoIt()\n\
        \n\
    \n\
    def isUndoable(self):\n\
        &#39;&#39;&#39; This command must be undoable because it affects the structure of the DAG. &#39;&#39;&#39;\n\
        return True\n\
    \n\
        \n\
    def printScene(self):\n\
        &#39;&#39;&#39; Traverse and print the elements in the scene graph (DAG)  &#39;&#39;&#39;\n\
        # Create a function set which we will re-use throughout our scene graph traversal.\n\
        dagNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>()\n\
        \n\
        # Create an iterator to traverse the scene graph starting at the world node\n\
        # (the scene&#39;s origin). We use a depth-first traversal, and we do not filter for\n\
        # any scene elements, as indicated by the &#39;OpenMaya.MFn.kInvalid&#39; parameter.\n\
        dagIterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItDag</a>( OpenMaya.MItDag.kDepthFirst,\n\
                                       OpenMaya.MFn.kInvalid )\n\
\n\
        print &#39;=====================&#39;\n\
        print &#39; SCENE GRAPH (DAG):  &#39;\n\
        print &#39;=====================&#39;\n\
        \n\
        # Traverse the scene.\n\
        while( not dagIterator.isDone() ):\n\
            \n\
            # Obtain the current item.\n\
            currentObj = dagIterator.currentItem()\n\
            depth = dagIterator.depth()\n\
            \n\
            # Make our dag node function set operate on the current object.\n\
            dagNodeFn.setObject( currentObj )\n\
                       \n\
            # Extract the dag node information to print.\n\
            name = dagNodeFn.name()\n\
            type = currentObj.apiTypeStr\n\
            path = dagNodeFn.fullPathName()\n\
            \n\
            # generate our output by first incrementing the tabs based on the depth\n\
            # of the current object. This formats our output nicely.\n\
            output = &#39;&#39;\n\
            for i in range( 0, depth ):\n\
                output += &#39;\\t&#39;\n\
                \n\
            output += name + &#39;: &#39; + type + &#39; [&#39; + path + &#39;]&#39;\n\
            print output\n\
            \n\
            # Increment to the next item.\n\
            dagIterator.next()\n\
        \n\
        print &#39;=====================&#39;\n\
                \n\
        \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################       \n\
def cmdCreator():\n\
    &#39;&#39;&#39; Creates an instance of the scripted command. &#39;&#39;&#39;\n\
    return SampleSceneCommand()\n\
    \n\
def initializePlugin(mobject):\n\
    &#39;&#39;&#39; Initializes the plug-in.&#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register command: %s\\n&quot; % kPluginCmdName )\n\
\n\
def uninitializePlugin(mobject):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to unregister command: %s\\n&quot; % kPluginCmdName )\n\
\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin(&#39;pySampleScene.py&#39;)\n\
cmds.pySampleScene()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleScene.py\n\
\n\
import sys\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaUI as OpenMayaUI\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
\n\
kPluginCmdName = &quot;mySampleScene&quot;\n\
\n\
# Vertices used to define a planar house shape within a single <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a> object:\n\
#\n\
#              [4]\n\
#             /   \\\n\
#            /     \\\n\
#          [3]-----[2]        where the bracketed numbers correspond\n\
#           |       |         to the vertex index.\n\
#           |       |\n\
#          [0]-----[1]\n\
#\n\
vertices = [ # Square plane:\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>( -2, -2, 0), # index 0: bottom left corner\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>(  2, -2, 0), # index 1: bottom right corner\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>(  2,  2, 0), # index 2: top right corner\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>( -2,  2, 0), # index 3: top left corner\n\
             # Vertex used to define the roof:\n\
             <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPoint</a>(  0,  5, 0)  # index 4: tip of the roof.\n\
           ]\n\
\n\
# Count the number of times this command has been instantiated.\n\
commandInstanceCounter = 1\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class SampleSceneCommand(OpenMayaMPx.MPxCommand):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
        \n\
        # We keep track of the number of times the command was instantiated, and we label this particular\n\
        # instance of the command with it. This will help us name the objects manipulated by this particular instance \n\
        # of the command.\n\
        global commandInstanceCounter\n\
        self.commandExecution = commandInstanceCounter\n\
        commandInstanceCounter = commandInstanceCounter + 1\n\
    \n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Set up the objects which the command will use. &#39;&#39;&#39;\n\
        \n\
        # This <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> object will allow us to undo and redo the creation of DAG nodes in our command.\n\
        self.dagModifier = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagModifier</a>()\n\
        \n\
        # We first create the required MObjects using the MDagModifer assigned to self.dagModifier.\n\
        #   (!) The &#39;transform&#39;, &#39;spotLight&#39; and &#39;camera&#39; strings are recognized by the <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> as valid node type names. \n\
        #       For a complete list of node type names, consult the Maya User Guide  &gt; Technical Documentation &gt; Nodes section.\n\
        self.meshTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.meshShapeObj = self.createHouseMesh() # This function will create a mesh under the self.meshTransformObj node.\n\
        \n\
        self.lightTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.lightShapeObj = self.dagModifier.createNode( &#39;spotLight&#39;, self.lightTransformObj )\n\
        \n\
        self.cameraTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.cameraShapeObj = self.dagModifier.createNode( &#39;camera&#39;, self.cameraTransformObj )\n\
        \n\
        # Create the shading node.\n\
        self.shadingNodeName = &#39;myMaterial&#39; + str( self.commandExecution )\n\
        self.dagModifier.commandToExecute( &#39;shadingNode -asShader -name &#39; + self.shadingNodeName + &#39; phong;&#39; )\n\
        self.dagModifier.commandToExecute( &#39;setAttr &quot;&#39; + self.shadingNodeName + &#39;.color&quot; -type double3 0.7 0.2 0.15;&#39;)\n\
        \n\
        # Create the shading group.\n\
        self.shadingGroupName = &#39;myShadingGroup&#39; + str( self.commandExecution )\n\
        self.dagModifier.commandToExecute( &#39;sets -renderable true -noSurfaceShader true -empty -name &#39; + self.shadingGroupName + &#39;;&#39;)\n\
        self.dagModifier.commandToExecute( &#39;connectAttr -f &#39; + self.shadingNodeName + &#39;.outColor &#39; + self.shadingGroupName + &#39;.surfaceShader;&#39; )\n\
        \n\
        # Invoke the command&#39;s redoIt() function to actually create and manipulate these objects.\n\
        self.redoIt()\n\
    \n\
    \n\
    def createHouseMesh(self):\n\
        &#39;&#39;&#39; Create a house mesh. &#39;&#39;&#39;\n\
        global vertices # we want to access the list of vertices defined as a static variable  \n\
        \n\
        meshFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnMesh</a>()\n\
        mergeVertices = True   # a parameter indicating whether or not nearby vertices will be merged.\n\
        pointTolerance = 0.001 # the distance which determines if any two nearby vertices will be merged.\n\
        \n\
        # Create the base of the house.\n\
        squareVertexArray = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPointArray</a>()\n\
        squareVertexArray.setLength( 4 )\n\
        squareVertexArray.set( vertices[0], 0 )\n\
        squareVertexArray.set( vertices[1], 1 )\n\
        squareVertexArray.set( vertices[2], 2 )\n\
        squareVertexArray.set( vertices[3], 3 )\n\
        \n\
        # Add the square polygon to the mesh whose parent is self.meshTransformObj.\n\
        meshFn.addPolygon( squareVertexArray, mergeVertices, pointTolerance, self.meshTransformObj)\n\
        \n\
        # Create the roof of the house.\n\
        triangleVertexArray = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPointArray</a>()\n\
        triangleVertexArray.setLength( 3 )\n\
        triangleVertexArray.set( vertices[3], 0 )\n\
        triangleVertexArray.set( vertices[2], 1 )\n\
        triangleVertexArray.set( vertices[4], 2 ) \n\
        \n\
        # Add a triangular polygon to the mesh whose parent is self.meshTransformObj. The returned meshShapeObj is\n\
        # a reference to the mesh geometry object.\n\
        meshShapeObj = meshFn.addPolygon( triangleVertexArray, mergeVertices, pointTolerance, self.meshTransformObj)\n\
        \n\
        # Set the name of the mesh.\n\
        meshFn.setName( &#39;myMeshShape&#39; + str( self.commandExecution ) )\n\
        \n\
        return meshShapeObj\n\
        \n\
    \n\
    def redoIt(self):\n\
        &#39;&#39;&#39; \n\
        Manipulate the objects created in doIt(). This function is also called by Maya when\n\
        the user re-does the operation after undoing it.\n\
        &#39;&#39;&#39;\n\
        \n\
        # Perform the operations enqueued within our reference to MDagModifier.\n\
        self.dagModifier.doIt()\n\
        \n\
        #=======================================\n\
        # MESH MANIPULATION\n\
        #=======================================\n\
        # Set the translation value of the mesh&#39;s transform node, as well as its name.\n\
        transformFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTransform</a>( self.meshTransformObj )\n\
        transformFn.setTranslation( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MVector</a>( 0, 2, 0 ), <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSpace.kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_space.html#adcf1dba26aeb417e59c4718fb0b05ff3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSpace.kTransform</a> )\n\
        transformFn.setName( &#39;myMeshTransform&#39; + str( self.commandExecution ) )\n\
        \n\
        # Obtain the DAG path of the mesh transform node. This will be used to create\n\
        # an aiming constraint between the light and the mesh.\n\
        meshTransformDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        transformFn.getPath( meshTransformDagPath )\n\
        \n\
        # The DAG path of the mesh shape node will be used to apply a material.\n\
        meshShapeDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        meshFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnMesh</a>( self.meshShapeObj )\n\
        meshFn.getPath( meshShapeDagPath )\n\
                \n\
        #=======================================\n\
        # LIGHT MANIPULATION\n\
        #=======================================\n\
        # Set the translation value of the light&#39;s transform node, as well as its name.\n\
        transformFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTransform</a>( self.lightTransformObj )\n\
        transformFn.setTranslation( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MVector</a>( 4, 9.5, 12 ), <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSpace.kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_space.html#adcf1dba26aeb417e59c4718fb0b05ff3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSpace.kTransform</a> )\n\
        transformFn.setName( &#39;myLightTransform&#39; + str( self.commandExecution ) )\n\
        \n\
        # Obtain the DAG path of the light transform node. This will be used to create\n\
        # an aiming constraint between the light and the mesh.\n\
        lightTransformDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        transformFn.getPath( lightTransformDagPath )\n\
        \n\
        # Change the name of the light shape\n\
        spotLightFn = OpenMaya.MFnSpotLight( self.lightShapeObj )\n\
        spotLightFn.setName( &#39;myLightShape&#39; + str( self.commandExecution ) )\n\
\n\
        #=======================================\n\
        # CAMERA MANIPULATION\n\
        #=======================================\n\
        # Set the translation value of the camera&#39;s transform node, as well as its name. \n\
        transformFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnTransform</a>( self.cameraTransformObj )\n\
        transformFn.setTranslation( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MVector</a>( 0, 5, 30 ), <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSpace.kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_space.html#adcf1dba26aeb417e59c4718fb0b05ff3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSpace.kTransform</a> )\n\
        transformFn.setName( &#39;myCameraTransform&#39; + str( self.commandExecution ) )\n\
        \n\
        # Change the name of the camera shape.\n\
        cameraFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnCamera</a>( self.cameraShapeObj )\n\
        cameraFn.setName( &#39;myCameraShape&#39; + str( self.commandExecution ) )\n\
        \n\
        # Store the previous camera before we switch to the camera created within this command.\n\
        # In undo() we will revert to this previous camera.\n\
        self.previousCamera = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        currentView = <a href=\"javascript:void(0)\" data-symbol=\"OpenMayaUI.M3dView.active3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html#af45e4e174b851359e97faa8d32d1972c&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMayaUI.M3dView.active3dView</a>()\n\
        currentView.getCamera( self.previousCamera ) # self.previousCamera is now populated with the current camera before we switch.\n\
        \n\
        # Get the DAG path of our camera shape node.\n\
        cameraDagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        dagNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>( self.cameraShapeObj )\n\
        dagNodeFn.getPath( cameraDagPath )\n\
        \n\
        # Set the camera view to the one we switched\n\
        currentView.setCamera( cameraDagPath )\n\
        \n\
        #=======================================\n\
        # AIM CONSTRAINT\n\
        #=======================================\n\
        # Enqueue a MEL command to aim the light to the mesh&#39;s transform node. We must use MEL\n\
        # because there is currently no way to enqueue calls to the maya.cmds Python module.\n\
        self.dagModifier.commandToExecute( &#39;aimConstraint -aimVector 0.0 0.0 -1.0 &#39; \n\
                                           + meshTransformDagPath.fullPathName() + &#39; &#39; \n\
                                           + lightTransformDagPath.fullPathName() )\n\
        \n\
        # Execute the MEL command we just added to the MDagModifier. By adding this command to the <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a>,\n\
        # we are able to undo it using MDagModifier.undoIt() in our command&#39;s undoIt() method. \n\
        self.dagModifier.doIt()\n\
        \n\
        #=======================================\n\
        # PHONG MATERIAL\n\
        #=======================================\n\
        # Include our mesh shape in the shading group we have defined in this command&#39;s doIt() function.\n\
        self.dagModifier.commandToExecute( &#39;sets -e -forceElement &#39; + self.shadingGroupName + &#39; &#39; + meshShapeDagPath.fullPathName() )\n\
        \n\
        # Execute the queued MEL command.\n\
        self.dagModifier.doIt()\n\
        \n\
        \n\
        # Print the contents of the scene.\n\
        self.printScene()\n\
        \n\
    \n\
    def undoIt(self):\n\
        &#39;&#39;&#39; Undo the command. &#39;&#39;&#39;\n\
        \n\
        # Switch back to the previous camera\n\
        currentView = <a href=\"javascript:void(0)\" data-symbol=\"OpenMayaUI.M3dView.active3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html#af45e4e174b851359e97faa8d32d1972c&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMayaUI.M3dView.active3dView</a>()\n\
        currentView.setCamera( self.previousCamera )\n\
        \n\
        # This call to MDagModifier.undoIt() undoes all the operations within the MDagModifier.\n\
        # Observe that the number of calls to MDagModifier.undoIt() does not need to match the number of calls to MDagModifier.doIt().\n\
        self.dagModifier.undoIt()\n\
        \n\
    \n\
    def isUndoable(self):\n\
        &#39;&#39;&#39; This command must be undoable because it affects the structure of the DAG. &#39;&#39;&#39;\n\
        return True\n\
    \n\
        \n\
    def printScene(self):\n\
        &#39;&#39;&#39; Traverse and print the elements in the scene graph (DAG)  &#39;&#39;&#39;\n\
        # Create a function set which we will re-use throughout our scene graph traversal.\n\
        dagNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>()\n\
        \n\
        # Create an iterator to traverse the scene graph starting at the world node\n\
        # (the scene&#39;s origin). We use a depth-first traversal, and we do not filter for\n\
        # any scene elements, as indicated by the &#39;OpenMaya.MFn.kInvalid&#39; parameter.\n\
        dagIterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItDag</a>( OpenMaya.MItDag.kDepthFirst,\n\
                                       OpenMaya.MFn.kInvalid )\n\
\n\
        print &#39;=====================&#39;\n\
        print &#39; SCENE GRAPH (DAG):  &#39;\n\
        print &#39;=====================&#39;\n\
        \n\
        # Traverse the scene.\n\
        while( not dagIterator.isDone() ):\n\
            \n\
            # Obtain the current item.\n\
            currentObj = dagIterator.currentItem()\n\
            depth = dagIterator.depth()\n\
            \n\
            # Make our dag node function set operate on the current object.\n\
            dagNodeFn.setObject( currentObj )\n\
                       \n\
            # Extract the dag node information to print.\n\
            name = dagNodeFn.name()\n\
            type = currentObj.apiTypeStr()\n\
            path = dagNodeFn.fullPathName()\n\
            \n\
            # generate our output by first incrementing the tabs based on the depth\n\
            # of the current object. This formats our output nicely.\n\
            output = &#39;&#39;\n\
            for i in range( 0, depth ):\n\
                output += &#39;\\t&#39;\n\
                \n\
            output += name + &#39;: &#39; + type + &#39; [&#39; + path + &#39;]&#39;\n\
            print output\n\
            \n\
            # Increment to the next item.\n\
            dagIterator.next()\n\
        \n\
        print &#39;=====================&#39;\n\
                \n\
        \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################       \n\
def cmdCreator():\n\
    &#39;&#39;&#39; Creates an instance of the scripted command. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( SampleSceneCommand() )\n\
    \n\
def initializePlugin(mobject):\n\
    &#39;&#39;&#39; Initializes the plug-in.&#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register command: %s\\n&quot; % kPluginCmdName )\n\
\n\
def uninitializePlugin(mobject):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to unregister command: %s\\n&quot; % kPluginCmdName )\n\
\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin(&#39;sampleScene.py&#39;)\n\
cmds.mySampleScene()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";