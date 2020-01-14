var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Creating and Manipulating Objects</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Creating and Manipulating Objects</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"creating-and-manipulating-objects\"></a></div>\n\
<p>In the context of command plug-ins, object creation and manipulation is intimately tied to Maya&#39;s undo/redo system. In fact, commands which manipulate the state of the <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Dependency-Graph-Plug-in-Basics.html\' title=\'\'>Dependency Graph</a> and its nodes (which includes the <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Querying-the-Scene-Graph.html\' title=\'\'>DAG</a>) should implement an undo operation to reverse the action to ensure that Maya&#39;s internal state remains in sync with its undo stack. In this topic, we illustrate how to create and manipulate objects within an undoable command.</p>\n\
<div class=\'section\'><a id=\"sample-undoable-command\"></a><h2 id=\"sample-undoable-command\">Sample Undoable Command</h2></div>\n\
<p>We begin by presenting the structure of an undoable command. Later in this topic, we will present an undoable command which creates and manipulates a camera.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pySampleUndoableCommand.py\n\
\n\
import sys\n\
import maya.api.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
\n\
kPluginCmdName = &#39;myUndoableCommandName&#39;\n\
\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyUndoableCommand( OpenMaya.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMaya.MPxCommand.__init__(self)\n\
    \n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; doIt() is called once when the command is first executed. &#39;&#39;&#39;\n\
        \n\
        # ... Perform any object creation here, since doIt() is only called once per command instance ...\n\
        \n\
        # Call self.redoIt() to perform the command&#39;s actual work. This function call flow\n\
        # is useful for code re-use.\n\
        self.redoIt()\n\
        \n\
        \n\
    def redoIt(self):\n\
        &#39;&#39;&#39; redoIt() is called every time the instance of this command is re-done from\n\
        the undo queue. &#39;&#39;&#39;\n\
        \n\
        # ... Perform any object manipulation here ...\n\
        pass\n\
    \n\
    \n\
    def undoIt(self):\n\
        &#39;&#39;&#39; undoIt() is called every time the instance of this command is undone. &#39;&#39;&#39;\n\
        \n\
        # ... Reverse any object creation or manipulations here ...\n\
        pass\n\
    \n\
    \n\
    def isUndoable(self):\n\
        &#39;&#39;&#39; This function indicates whether or not the command is undoable. If the\n\
        command is undoable, each executed instance of that command is added to the\n\
        undo queue. &#39;&#39;&#39;\n\
        \n\
        # We must return True to specify that this command is undoable.\n\
        return True\n\
    \n\
    \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return MyUndoableCommand() \n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;pySampleUndoableCommand.py&#39; )\n\
cmds.myUndoableCommandName()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleUndoableCommand.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
# ... additional imports here ...\n\
\n\
kPluginCmdName = &#39;myUndoableCommandName&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyUndoableCommand( OpenMayaMPx.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    \n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; doIt() is called once when the command is first executed. &#39;&#39;&#39;\n\
        \n\
        # ... Perform any object creation here, since doIt() is only called once per command instance ...\n\
        \n\
        # Call self.redoIt() to perform the command&#39;s actual work. This function call flow\n\
        # is useful for code re-use.\n\
        self.redoIt()\n\
        \n\
        \n\
    def redoIt(self):\n\
        &#39;&#39;&#39; redoIt() is called every time the instance of this command is re-done from\n\
        the undo queue. &#39;&#39;&#39;\n\
        \n\
        # ... Perform any object manipulation here ...\n\
        pass\n\
    \n\
    \n\
    def undoIt(self):\n\
        &#39;&#39;&#39; undoIt() is called every time the instance of this command is undone. &#39;&#39;&#39;\n\
        \n\
        # ... Reverse any object creation or manipulations here ...\n\
        pass\n\
    \n\
    \n\
    def isUndoable(self):\n\
        &#39;&#39;&#39; This function indicates whether or not the command is undoable. If the\n\
        command is undoable, each executed instance of that command is added to the\n\
        undo queue. &#39;&#39;&#39;\n\
        \n\
        # We must return True to specify that this command is undoable.\n\
        return True\n\
    \n\
    \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( MyUndoableCommand() )\n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;sampleUndoableCommand.py&#39; )\n\
cmds.myUndoableCommandName()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>The command plug-in above contains four important functions which are called by Maya during the command execution process:</p>\n\
<ul>\n\
<li><p><strong>isUndoable()</strong> - If the command&#39;s <span class=\'code\'>isUndoable()</span> function returns <span class=\'code\'>True</span>, the instance of that command will be added to Maya&#39;s undo stack.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def isUndoable(self):\n\
        &#39;&#39;&#39; This function indicates whether or not the command is undoable. If the\n\
        command is undoable, each executed instance of that command is added to the\n\
        undo queue. &#39;&#39;&#39;\n\
\n\
        # We must return True to specify that this command is undoable.\n\
        return True</pre></div></li>\n\
<li><p><strong>doIt()</strong> - The <span class=\'code\'>doIt()</span> function of each command instance is invoked <em>once</em> when the command is first executed. To maximize code re-use, it is recommended to have the <span class=\'code\'>doIt()</span> function instantiate all the objects and variables your command instance will require, and to subsequently call <span class=\'code\'>redoIt()</span> from within <span class=\'code\'>doIt()</span> function body.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def doIt(self, args):\n\
        &#39;&#39;&#39; doIt() is called once when the command is first executed. &#39;&#39;&#39;\n\
\n\
        # Parse any arguments when doIt() is invoked.\n\
        self.parseArgs( args )\n\
\n\
        # ... Perform any object creation here, since doIt() is only called once per command instance ...\n\
\n\
        # Call self.redoIt() to perform the command&#39;s actual work. This function call flow\n\
        # is useful for code re-use.\n\
        self.redoIt()</pre></div></li>\n\
<li><p><strong>redoIt()</strong> - The <span class=\'code\'>redoIt()</span> function is invoked by Maya every time the command is re-done. <span class=\'code\'>redoIt()</span> should therefore be used manipulate the state of the objects used in your command. Keep in mind that this state manipulation should be reversed in the <span class=\'code\'>undoIt()</span> function.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def redoIt(self):\n\
        &#39;&#39;&#39; redoIt() is called every time the instance of this command is re-done from\n\
        the undo queue. &#39;&#39;&#39;\n\
\n\
        # ... Perform any object manipulation here ...\n\
        pass</pre></div></li>\n\
<li><p><strong>undoIt()</strong> - The <span class=\'code\'>undoIt()</span> function is called when the command is undone. The objective of the <span class=\'code\'>undoIt()</span> function is to ensure that each object manipulated by your command has its state reversed to before your command was executed. If the instance of the command does not reverse its manipulations correctly, Maya&#39;s internal state will be inconsistent in regards to its undo/redo stack.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def undoIt(self):\n\
        &#39;&#39;&#39; undoIt() is called every time the instance of this command is undone. &#39;&#39;&#39;\n\
\n\
        # ... Reverse any object creation or manipulations here ...\n\
        pass</pre></div></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"creating-objects-with-mdagmodifier\"></a><h2 id=\"creating-objects-with-mdagmodifier\">Creating Objects with MDagModifier</h2></div>\n\
<p>To facilitate the creation of DAG nodes, and the undoing of DAG node manipulations, the Maya API provides the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a></span> class. This class is derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDGModifier</a></span>, which is used to create and manipulate Dependency Graph nodes. Recall that the DAG is a subset of the Dependency Graph, and so the functions provided by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDGModifier</a></span> are also provided by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a></span> - this may help you when consulting the class documentation of the function calls made to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a></span> in this topic.</p>\n\
<p>In the undoable command that follows, we create and manipulate a camera, and also set the current view to this newly created camera:</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pySampleCameraCommand.py\n\
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
kPluginCmdName = &#39;myCameraCommand&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCameraCommand( OpenMaya.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMaya.MPxCommand.__init__(self)\n\
    \n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; doIt() is called once when the command is first executed. &#39;&#39;&#39; \n\
        \n\
        # This <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> object will allow us to undo and redo the creation of DAG nodes in our command.\n\
        self.dagModifier = OpenMaya.MDagModifier()\n\
        \n\
        # Create the camera transform node.\n\
        self.cameraTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.dagModifier.renameNode( self.cameraTransformObj, &#39;myCameraTransform&#39; )\n\
        \n\
        # Create the camera shape node as a child of the camera transform node.\n\
        self.cameraShapeObj = self.dagModifier.createNode( &#39;camera&#39;, self.cameraTransformObj )\n\
        self.dagModifier.renameNode( self.cameraShapeObj, &#39;myCameraShape&#39; )\n\
        \n\
        # Call self.redoIt() to perform the command&#39;s actual work. This function call flow\n\
        # is useful for code re-use.\n\
        self.redoIt()\n\
        \n\
        \n\
    def redoIt(self):\n\
        &#39;&#39;&#39; redoIt() is called every time the instance of this command is re-done from\n\
        the undo queue. &#39;&#39;&#39;\n\
        \n\
        # Perform the operations enqueued within our reference to MDagModifier. This effectively\n\
        # creates the DAG nodes specified using self.dagModifier.createNode().\n\
        self.dagModifier.doIt()\n\
        \n\
        # Set the translation value of the camera&#39;s transform node. \n\
        transformFn = OpenMaya.MFnTransform( self.cameraTransformObj )\n\
        transformFn.setTranslation( OpenMaya.MVector( 0, 5, 30 ), OpenMaya.MSpace.kTransform )\n\
        \n\
        # Store the previous camera before we switch to the camera created within this command.\n\
        # In undo() we will revert to this previous camera.\n\
        self.previousCamera = OpenMaya.MDagPath()\n\
        currentView = OpenMayaUI.M3dView.active3dView()\n\
        self.previousCamera=currentView.getCamera() # self.previousCamera is now populated with the current camera before we switch.\n\
        \n\
        # Get the DAG path of our camera shape node.\n\
        cameraDagPath = OpenMaya.MDagPath()\n\
        dagNodeFn = OpenMaya.MFnDagNode( self.cameraShapeObj )\n\
        cameraDagPath = dagNodeFn.getPath()\n\
        \n\
        # Set the camera view to the one we switched\n\
        currentView.setCamera( cameraDagPath )\n\
    \n\
    \n\
    def undoIt(self):\n\
        &#39;&#39;&#39; undoIt() is called every time the instance of this command is undone. &#39;&#39;&#39;\n\
        \n\
        # Switch back to the previous camera. We do not have to reverse the translation of \n\
        # self.cameraTransformObj because it will be excluded from the DAG once \n\
        # self.dagModifier.undoIt() is called below.\n\
        currentView = OpenMayaUI.M3dView.active3dView()\n\
        self.previousCamera = currentView.getCamera()\n\
        \n\
        # This call to MDagModifier.undoIt() undoes all the operations within the MDagModifier.\n\
        self.dagModifier.undoIt()\n\
    \n\
    \n\
    def isUndoable(self):\n\
        &#39;&#39;&#39; This function indicates whether or not the command is undoable. If the\n\
        command is undoable, each executed instance of that command is added to the\n\
        undo queue. &#39;&#39;&#39;\n\
        \n\
        # We must return True to specify that this command is undoable.\n\
        return True\n\
    \n\
    \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return  MyCameraCommand() \n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;pySampleCameraCommand.py&#39; )\n\
cmds.myCameraCommand()\n\
cmds.undo()\n\
cmds.redo()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleCameraCommand.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaUI as OpenMayaUI\n\
\n\
kPluginCmdName = &#39;myCameraCommand&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCameraCommand( OpenMayaMPx.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    \n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; doIt() is called once when the command is first executed. &#39;&#39;&#39; \n\
        \n\
        # This <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> object will allow us to undo and redo the creation of DAG nodes in our command.\n\
        self.dagModifier = OpenMaya.MDagModifier()\n\
        \n\
        # Create the camera transform node.\n\
        self.cameraTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.dagModifier.renameNode( self.cameraTransformObj, &#39;myCameraTransform&#39; )\n\
        \n\
        # Create the camera shape node as a child of the camera transform node.\n\
        self.cameraShapeObj = self.dagModifier.createNode( &#39;camera&#39;, self.cameraTransformObj )\n\
        self.dagModifier.renameNode( self.cameraShapeObj, &#39;myCameraShape&#39; )\n\
        \n\
        # Call self.redoIt() to perform the command&#39;s actual work. This function call flow\n\
        # is useful for code re-use.\n\
        self.redoIt()\n\
        \n\
        \n\
    def redoIt(self):\n\
        &#39;&#39;&#39; redoIt() is called every time the instance of this command is re-done from\n\
        the undo queue. &#39;&#39;&#39;\n\
        \n\
        # Perform the operations enqueued within our reference to MDagModifier. This effectively\n\
        # creates the DAG nodes specified using self.dagModifier.createNode().\n\
        self.dagModifier.doIt()\n\
        \n\
        # Set the translation value of the camera&#39;s transform node. \n\
        transformFn = OpenMaya.MFnTransform( self.cameraTransformObj )\n\
        transformFn.setTranslation( OpenMaya.MVector( 0, 5, 30 ), OpenMaya.MSpace.kTransform )\n\
        \n\
        # Store the previous camera before we switch to the camera created within this command.\n\
        # In undo() we will revert to this previous camera.\n\
        self.previousCamera = OpenMaya.MDagPath()\n\
        currentView = OpenMayaUI.M3dView.active3dView()\n\
        currentView.getCamera( self.previousCamera ) # self.previousCamera is now populated with the current camera before we switch.\n\
        \n\
        # Get the DAG path of our camera shape node.\n\
        cameraDagPath = OpenMaya.MDagPath()\n\
        dagNodeFn = OpenMaya.MFnDagNode( self.cameraShapeObj )\n\
        dagNodeFn.getPath( cameraDagPath )\n\
        \n\
        # Set the camera view to the one we switched\n\
        currentView.setCamera( cameraDagPath )\n\
    \n\
    \n\
    def undoIt(self):\n\
        &#39;&#39;&#39; undoIt() is called every time the instance of this command is undone. &#39;&#39;&#39;\n\
        \n\
        # Switch back to the previous camera. We do not have to reverse the translation of \n\
        # self.cameraTransformObj because it will be excluded from the DAG once \n\
        # self.dagModifier.undoIt() is called below.\n\
        currentView = OpenMayaUI.M3dView.active3dView()\n\
        currentView.setCamera( self.previousCamera )\n\
        \n\
        # This call to MDagModifier.undoIt() undoes all the operations within the MDagModifier.\n\
        self.dagModifier.undoIt()\n\
    \n\
    \n\
    def isUndoable(self):\n\
        &#39;&#39;&#39; This function indicates whether or not the command is undoable. If the\n\
        command is undoable, each executed instance of that command is added to the\n\
        undo queue. &#39;&#39;&#39;\n\
        \n\
        # We must return True to specify that this command is undoable.\n\
        return True\n\
    \n\
    \n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( MyCameraCommand() )\n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;sampleCameraCommand.py&#39; )\n\
cmds.myCameraCommand()\n\
cmds.undo()\n\
cmds.redo()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>In the sample above, the key functions we are interested in (for now) are: <span class=\'code\'>MDagModifer.createNode()</span>, <span class=\'code\'>MDagModifier.doIt()</span> and <span class=\'code\'>MDagModifier.undoIt()</span>. These functions are respectively distributed among our command&#39;s <span class=\'code\'>doIt()</span>, <span class=\'code\'>redoIt()</span> and <span class=\'code\'>undoIt()</span> methods:</p>\n\
<ol>\n\
<li><p><strong>MDagModifier.createNode()</strong> - When <span class=\'code\'>MDagModifier.createNode()</span> is called, the operation is queued within the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a></span>, and an instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> is returned. This <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> is a handle to a newly created Maya DAG node which has <em>not yet</em> been included into DAG. Observe that we are invoking the method signature of <span class=\'code\'>MDagModifier.createNode()</span> which accepts a string as the first parameter. This string represents the created node type&#39;s name. Valid node type names are listed under <strong>Maya User Guide &gt; Technical Documentation &gt; Nodes</strong>, for example: <span class=\'code\'>&#39;transform&#39;</span> and <span class=\'code\'>&#39;camera&#39;</span>. The call to <span class=\'code\'>MDagModifier.renameNode()</span> is also queued within the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a></span>, and is used to do/undo the renaming of a node.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def doIt(self, args):\n\
        &#39;&#39;&#39; doIt() is called once when the command is first executed. &#39;&#39;&#39; \n\
\n\
        # This <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> object will allow us to undo and redo the creation of DAG nodes in our command.\n\
        self.dagModifier = OpenMaya.MDagModifier()\n\
\n\
        # Create the camera transform node.\n\
        self.cameraTransformObj = self.dagModifier.createNode( &#39;transform&#39; )\n\
        self.dagModifier.renameNode( self.cameraTransformObj, &#39;myCameraTransform&#39; )\n\
\n\
        # Create the camera shape node as a child of the camera transform node.\n\
        self.cameraShapeObj = self.dagModifier.createNode( &#39;camera&#39;, self.cameraTransformObj )\n\
        self.dagModifier.renameNode( self.cameraShapeObj, &#39;myCameraShape&#39; )\n\
\n\
        # Call self.redoIt() to perform the command&#39;s actual work. This function call flow\n\
        # is useful for code re-use.\n\
        self.redoIt()</pre></div></li>\n\
<li><p><strong>MDagModifier.doIt()</strong> - When <span class=\'code\'>MDagModifier.doIt()</span> is called, the previously queued operations are effectively executed. As such, the queued <span class=\'code\'>MDagModifier.createNode()</span> operation will complete by adding the created node into the DAG. The call to <span class=\'code\'>MDagModifier.doIt()</span> in our command&#39;s <span class=\'code\'>redoIt()</span> method effectively lets us operate on the same set of created nodes defined in our command&#39;s <span class=\'code\'>doIt()</span> method. Observe that we are not creating new nodes repeatedly when our command&#39;s <span class=\'code\'>redoIt()</span> method is invoked.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def redoIt(self):\n\
        &#39;&#39;&#39; redoIt() is called every time the instance of this command is re-done from\n\
        the undo queue. &#39;&#39;&#39;\n\
\n\
        # Perform the operations enqueued within our reference to MDagModifier.\n\
        self.dagModifier.doIt()\n\
\n\
        # ... object manipulations ...\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> <span class=\'code\'>MDagModifier.doIt()</span> can be called several times in the same command. This is necessary when a node must be disconnected and deleted. Consult the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDGModifier</a></span> class documentation for more information.</p>\n\
</li>\n\
<li><p><strong>MDagModifier.undoIt()</strong> - When <span class=\'code\'>MDagModifier.undoIt()</span> is called, all the queued operations which have been completed in calls to <span class=\'code\'>MDagModifier.doIt()</span> are undone.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def undoIt(self):\n\
        &#39;&#39;&#39; undoIt() is called every time the instance of this command is undone. &#39;&#39;&#39;\n\
\n\
        # ... revert object manipulations ...\n\
\n\
        # This call to MDagModifier.undoIt() undoes all the operations queued within the MDagModifier.\n\
        self.dagModifier.undoIt()\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> It is sufficient to call <span class=\'code\'>MDagModifier.undoIt()</span> only once, despite the number of calls to <span class=\'code\'>MDagModifier.doIt()</span> within the command.</p>\n\
</li>\n\
</ol>\n\
<div class=\'section\'><a id=\"manipulating-objects\"></a><h2 id=\"manipulating-objects\">Manipulating Objects</h2></div>\n\
<p>In our command&#39;s <span class=\'code\'>redoIt()</span> method body, we change the position of our camera&#39;s transform node via a call to <span class=\'code\'>MFnCamera.setTranslation()</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def redoIt(self):\n\
        &#39;&#39;&#39; redoIt() is called every time the instance of this command is re-done from\n\
        the undo queue. &#39;&#39;&#39;\n\
        \n\
        # ...\n\
        \n\
        # Set the translation value of the camera&#39;s transform node. \n\
        transformFn = OpenMaya.MFnTransform( self.cameraTransformObj )\n\
        transformFn.setTranslation( OpenMaya.MVector( 0, 5, 30 ), OpenMaya.MSpace.kTransform )\n\
        \n\
        # ...\n\
</pre></div><p>This introduces the use of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span>s and <em>function sets</em> in the Maya API.</p>\n\
<ul>\n\
<li><p><strong>Maya Objects (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span>)</strong> - The Maya API provides access to Maya objects as instances of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> wrapper class. Instances of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> can therefore represent cameras, lights, meshes, transforms, and dependency graph nodes. The internal state of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> is manipulated via a compatible <em>function set</em> (classes derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnBase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_base.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_base.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnBase</a></span>). All instances of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> have one and only one Maya Object type (<span class=\'code\'>MObject.apiType()</span>), for example: <span class=\'code\'>MFn.kTransform</span>, or <span class=\'code\'>MFn.kCamera</span>, which may be compatible with multiple types of <em>function sets</em>. The <span class=\'code\'>MObject.hasFn()</span> method determines if an instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> is compatible with a given function set.</p></li>\n\
<li><p><strong>Function Sets (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnBase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_base.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_base.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnBase</a></span> and subclasses)</strong> - <em>Function sets</em> are provided in the Maya API to manipulate the state of compatible <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span>s. They exist as singletons, meaning that Maya contains only one <em>function set</em> of each type internally. A <em>function set</em> can only manipulate one <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> at a time, though this object can be changed using <span class=\'code\'>MFnBase.setObject()</span>. A reference to a specific <em>function set</em> is obtained via its constructor, which can accept an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> to set the current working object.</p>\n\
<p>An <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span>&#39;s function set compatibility follows the class hierarchy up to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnBase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_base.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_base.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnBase</a></span> class. An instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> with a Maya Object type of <span class=\'code\'>MFn.kCamera</span> is therefore compatible with the following function sets: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_camera.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnCamera</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDependencyNode</a></span>, and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnBase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_base.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_base.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnBase</a></span></p>\n\
<p>The code sample and diagram below illustrate the use of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnTransform</a></span> <em>function set</em> to set the translation of a compatible <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> (of type <span class=\'code\'>Mfn.kTransform</span>), namely the transform node we had previously assigned to <span class=\'code\'>self.cameraTransformObj</span> and named as <span class=\'code\'>&#39;myCameraTransform&#39;</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># Set the translation value of the camera&#39;s transform node. \n\
transformFn = OpenMaya.MFnTransform( self.cameraTransformObj )\n\
transformFn.setTranslation( OpenMaya.MVector( 0, 5, 30 ), OpenMaya.MSpace.kTransform )\n\
<div class=\'figure\'><img src=\'dev_help/images/Maya_Camera_MFnTransform_75%.png\' title=\'\'></div>\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> The second parameter (<span class=\'code\'>OpenMaya.MSpace.kTransform</span>) in the call to <span class=\'code\'>MFnTransform.setTranslation()</span> specifies that the translation should be applied in the transform node&#39;s local coordinate space.</p>\n\
</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"warning-creating-and-manipulating-nodes-without-mdagmodifier\"></a><h2 id=\"warning-creating-and-manipulating-nodes-without-mdagmodifier\">Warning: Creating and Manipulating Nodes Without MDagModifier</h2></div>\n\
<p>You will notice that the majority of <em>function sets</em> also provide a <span class=\'code\'>create()</span> function, for example: <span class=\'code\'>MFnCamera.create()</span>, which takes care of instantiating an appropriate shape and transform node for you. We recommend only using these functions within one-time-use, non-undoable commands, for example to initialize a scene. An exception to this guideline is <span class=\'code\'>MFnMesh.create()</span>, whose use in a command is illustrated in <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Example-Creating-a-Scene.html\' title=\'\'>Example: Creating a Scene</a>. In this example, we create a parent transform node with <span class=\'code\'>MDagModifier.createNode()</span>, and must use <span class=\'code\'>MFnMesh.create()</span> to define the mesh data under it as a child node.</p>\n\
<p>In a similar fashion, you may notice that the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a></span> <em>function set</em> contains <span class=\'code\'>MFnDagNode.addChild()</span>, <span class=\'code\'>MFnDagNode.removeChild()</span>, and other DAG hierarchy manipulation functions. Unless you are creating a single-use, non-undoable command, or want to manually implement your command&#39;s <span class=\'code\'>undoIt()</span> logic to reverse these actions, it is preferable to use the <span class=\'code\'>MDagModifier.reparentNode()</span> function, followed by a call to <span class=\'code\'>MDagModifier.doIt()</span>.</p>\n\
<div class=\'section\'><a id=\"warning-node-deletion-with-mglobal.deletenode\"></a><h2 id=\"warning-node-deletion-with-mglobal.deletenode\">Warning: Node Deletion with MGlobal.deleteNode()</h2></div>\n\
<p>You may also be tempted to reverse your command&#39;s node creations via calls to <span class=\'code\'>MGlobal.deleteNode()</span> within your command&#39;s <span class=\'code\'>undoIt()</span> method. Doing so is not advisable, as calling <span class=\'code\'>MGlobal.deleteNode()</span> actually executes the MEL node deletion command internally, thereby causing Maya to add a command to the undo stack while it is in the process of undoing a command. This causes an inconsistency within Maya&#39;s undo stack, and can result in a crash.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> For the same reason, we do not recommend invoking <span class=\'code\'>maya.cmds</span> functions within a command plug-in. The safe alternative is to use the <span class=\'code\'>MDagModifier.commandToExecute()</span> function to enqueue MEL commands which will be safely executed when <span class=\'code\'>MDagModifier.doIt()</span> is called. The same MEL commands will be safely undone when <span class=\'code\'>MDagModifier.undoIt()</span> is called, thus avoiding any undo stack inconsistencies within Maya. Consult <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Example-Creating-an-IK-Joint.html\' title=\'\'>Example: Creating an IK Joint Chain</a> for more information.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";