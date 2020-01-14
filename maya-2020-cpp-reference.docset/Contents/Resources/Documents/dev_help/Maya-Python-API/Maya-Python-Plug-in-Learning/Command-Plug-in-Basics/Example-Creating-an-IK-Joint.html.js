var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example: Creating an IK Joint Chain</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example: Creating an IK Joint Chain</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-creating-an-ik-joint-chain\"></a></div>\n\
<div class=\'section\'><a id=\"example-creating-an-inverse-kinematic-joint-chain\"></a><h2 id=\"example-creating-an-inverse-kinematic-joint-chain\">Example: Creating an Inverse Kinematic Joint Chain</h2></div>\n\
<p><strong>Filename:</strong> <span class=\'code\'>jointChain.py</span></p>\n\
<p><strong>Sample Output:</strong></p>\n\
<div class=\'figure\'><img src=\'dev_help/images/jointChain_75%.png\' title=\'\' /></div>\n\
<p><strong>Program Summary:</strong> The plug-in code below creates a new command which takes one argument, &quot;<span class=\'code\'>length</span>&quot;, to define the number of joints in an inverse kinematic joint chain, for example: <span class=\'code\'>cmds.myJointChain(length=4)</span>. The joint chain is created in an arc, at the end of which is placed an inverse kinematic (IK) effector coupled with an IK handle. The IK handle allows the user to manipulate the entire joint chain using only the IK effector. When the IK effector moves, it causes the rest of the joints to move while maintaining their constrained orientations towards one another.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Observe that we use <span class=\'code\'>MDagModifier.commandToExecute()</span> to facilitate the creation of our inverse kinematic handle. The MEL command reference can be found under <strong>Maya User Guide &gt; Technical Documentation &gt; Commands</strong>.</p>\n\
</blockquote>\n\
<blockquote>\n\
<p><strong>Note:</strong> This sample plug-in script uses <span class=\'code\'>OpenMayaAnim.MFnIkJoint()</span>, which is not exposed in the Maya Python API 2.0. Therefore, there is no 2.0 version of this sample plug-in.</p>\n\
</blockquote>\n\
<p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># jointChain.py\n\
\n\
import sys\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import maya.OpenMayaAnim as OpenMayaAnim\n\
\n\
kPluginCmdName = &#39;myJointChain&#39;\n\
\n\
# The length of the chain.\n\
kLengthFlag = &#39;-l&#39;\n\
kLengthLongFlag = &#39;-length&#39;\n\
defaultLength = 3\n\
\n\
jointDistance = 5     # the distance between two joints\n\
jointOrientation = 20 # degrees.\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class JointChainCommand(OpenMayaMPx.MPxCommand):\n\
    \n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    \n\
    \n\
    def parseArgs(self, pArguments):\n\
        &#39;&#39;&#39; Parses the command&#39;s arguments. &#39;&#39;&#39;\n\
        \n\
        # Set the default chain length in case there are no arguments.\n\
        global defaultLength\n\
        self.length = defaultLength\n\
        \n\
        # Obtain the flag value, if the flag is set.\n\
        argData = OpenMaya.MArgParser( self.syntax(), pArguments )\n\
        if argData.isFlagSet( kLengthFlag ):\n\
            \n\
            # Get the value associated with the flag as an integer.\n\
            flagValue = argData.flagArgumentInt( kLengthFlag, 0 )\n\
            \n\
            # Make sure this value is larger than the default length.\n\
            if flagValue &gt; defaultLength:\n\
                self.length = flagValue\n\
    \n\
    \n\
    def doIt(self, pArguments):\n\
        &#39;&#39;&#39; Command Execution. &#39;&#39;&#39;\n\
        \n\
        # Parse the passed arguments.\n\
        self.parseArgs( pArguments )\n\
        \n\
        # Create an instance of an <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> to keep track of the created objects,\n\
        # and to undo their creation in our undoIt() function.\n\
        self.dagModifier = OpenMaya.MDagModifier()\n\
        \n\
        # Create the joint MObjects we will be manipulating.\n\
        self.jointObjects = []\n\
        for i in range(0, self.length):\n\
            if i == 0:\n\
                # The first joint has no parent.\n\
                newJointObj = self.dagModifier.createNode( &#39;joint&#39; )\n\
            else:\n\
                # Assign the new joint as a child to the previous joint.\n\
                newJointObj = self.dagModifier.createNode( &#39;joint&#39;, self.jointObjects[i-1] )\n\
            # Keep track of all the joints created.\n\
            self.jointObjects.append( newJointObj )\n\
        \n\
        # Create the inverse kinematic effector MObject. The effector is a child of the last joint object.\n\
        # The [-1] index is a Python-specific way of referring to the last item in a list.\n\
        self.effectorObj = self.dagModifier.createNode( &#39;ikEffector&#39;, self.jointObjects[-1] )\n\
        \n\
        # Invoke the command&#39;s redoIt() function to actually create and manipulate these objects.\n\
        self.redoIt()\n\
        \n\
    \n\
    def redoIt(self):\n\
        &#39;&#39;&#39; Create and manipulate the nodes to form the joint chain. &#39;&#39;&#39;\n\
        \n\
        # Perform the operations enqueued within our reference to MDagModifier.\n\
        self.dagModifier.doIt()\n\
        \n\
        #=======================================\n\
        # JOINT MANIPULATION\n\
        #=======================================\n\
        # We can now use the function sets on the newly created DAG objects.\n\
        jointFn = OpenMayaAnim.MFnIkJoint()\n\
        \n\
        for i in range( 1, len( self.jointObjects ) ):\n\
\n\
            jointFn.setObject( self.jointObjects[i] )\n\
            # We set the orientation for our joint to be &#39;jointOrientation&#39; degrees, to form an arc. \n\
            # We use MFnIkJoint.setOrientation() instead of MFnTransform.setRotation() to let the\n\
            # inverse-kinematic handle maintain the curvature.\n\
            global jointOrientation\n\
            rotationAngle = OpenMaya.MAngle( jointOrientation, OpenMaya.MAngle.kDegrees )\n\
            jointFn.setOrientation( OpenMaya.MEulerRotation( rotationAngle.asRadians(), 0 , 0, OpenMaya.MEulerRotation.kXYZ ) )\n\
            \n\
            # We translate the joint by &#39;jointDistance&#39; units along its parent&#39;s y axis.\n\
            global jointDistance\n\
            translationVector = OpenMaya.MVector( 0, jointDistance, 0 )\n\
            jointFn.setTranslation( translationVector, OpenMaya.MSpace.kTransform )\n\
\n\
        #=======================================\n\
        # IK HANDLE MANIPULATION\n\
        #=======================================\n\
        # We will use the MEL command &#39;ikHandle&#39; to create the handle which will move our joint chain. This command\n\
        # will be enqueued in our reference to the <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagModifier</a> so that it can be undone in our call to MDagModifier.undoIt().\n\
        \n\
        # Obtain the DAG path of the first joint.\n\
        startJointDagPath = OpenMaya.MDagPath()\n\
        jointFn.setObject( self.jointObjects[0] )\n\
        jointFn.getPath( startJointDagPath )\n\
             \n\
        # Obtain the DAG path of the effector.\n\
        effectorDagPath = OpenMaya.MDagPath()\n\
        effectorFn = OpenMayaAnim.MFnIkEffector( self.effectorObj )\n\
        effectorFn.getPath( effectorDagPath )\n\
        \n\
        # Enqueue the following MEL command with the DAG paths of the start joint and the end effector.\n\
        self.dagModifier.commandToExecute( &#39;ikHandle -sj &#39; + startJointDagPath.fullPathName() + &#39; -ee &#39; + effectorDagPath.fullPathName() )\n\
        \n\
        # We call MDagModifier.doIt() to effectively execute the MEL command and create the ikHandle. \n\
        self.dagModifier.doIt()\n\
        \n\
    \n\
    def undoIt(self):\n\
        &#39;&#39;&#39; Undo the command. &#39;&#39;&#39;\n\
        # This call to MDagModifier.undoIt() undoes all the operations within the MDagModifier.\n\
        # Observe that the number of calls to MDagModifier.undoIt() does not need to match the number of calls to MDagModifier.doIt().\n\
        self.dagModifier.undoIt()\n\
        \n\
        \n\
    def isUndoable(self):\n\
        &#39;&#39;&#39; This function must return True to indicate that it is undoable. &#39;&#39;&#39; \n\
        return True\n\
        \n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Creates an instance of the command. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( JointChainCommand() )\n\
\n\
def syntaxCreator():\n\
    &#39;&#39;&#39; Defines the argument and flag syntax for this command. &#39;&#39;&#39;\n\
    syntax = OpenMaya.MSyntax()\n\
    syntax.addFlag( kLengthFlag, kLengthLongFlag, OpenMaya.MSyntax.kDouble )\n\
    return syntax\n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initializes the plug-in. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
        raise\n\
    \n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitializes the plug-in. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
        raise\n\
\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;jointChain.py&#39; )\n\
cmds.myJointChain( length=4 )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";