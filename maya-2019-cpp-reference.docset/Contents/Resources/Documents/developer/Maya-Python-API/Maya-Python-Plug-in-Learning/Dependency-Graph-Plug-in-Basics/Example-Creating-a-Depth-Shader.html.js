var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example: Creating a Depth Shader</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example: Creating a Depth Shader</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-creating-a-depth-shader\"></a></div>\n\
<div class=\'section\'><a id=\"example-creating-a-depth-shader-1\"></a><h2 id=\"example-creating-a-depth-shader-1\">Example: Creating a Depth Shader</h2></div>\n\
<p><strong>Filename:</strong> <span class=\'code\'>depthShader.py</span></p>\n\
<p><strong>Rendered Output:</strong></p>\n\
<div class=\'figure\'><img src=\'developer/images/depthShader.jpg\' title=\'\'></div>\n\
<p><strong>Program Summary</strong>: The plug-in code below creates a new depth shader by inheriting from the <span class=\'code\'>OpenMayaMPx.MPxNode</span> class. This shader can only be used by the Maya software shader. The <span class=\'code\'>compute()</span> method is run for every rendered surface point, and determines the pixel&#39;s color based on the surface point&#39;s Z-axis distance from the camera.</p>\n\
<p>To access the depth of each rendered surface point, we create the following numeric attribute in <span class=\'code\'>nodeInitializer()</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">depthShader.surfacePointAttribute = numericAttributeFn.createPoint(&#39;pointCamera&#39;, &#39;p&#39;)\n\
</pre></div><p>The name of this attribute (<span class=\'code\'>&#39;pointCamera&#39;</span>), and its short name (<span class=\'code\'>&#39;p&#39;</span>), are very important here, because they allow Maya to automatically connect our shader node to the <span class=\'code\'>samplerInfo</span> node&#39;s <span class=\'code\'>pointCamera</span> output attribute. The <span class=\'code\'>samplerInfo</span> node provides vital information about the point being rendered. For a full list of its attributes, consult the <strong>Maya User Guide &gt; Technical Documentation &gt; Nodes &gt; samplerInfo</strong>. You may also wish to consult the <strong>Appendix C: Rendering attributes</strong> in the API Documentation for a detailed list of other rendering attributes.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># depthShader.py\n\
\n\
import sys\n\
import math\n\
import maya.api.OpenMaya as OpenMaya\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
    \n\
# Plug-in information:\n\
kPluginNodeName = &#39;pyMyDepthShader&#39;\n\
kPluginNodeClassify = &#39;utility/general&#39;\n\
kPluginNodeId = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MTypeId</a>(0x870FE)\n\
\n\
# Default attribute values\n\
defaultNearDistance = 20.0\n\
defaultFarDistance  = 70.0\n\
defaultNearColor    = (1.0, 1.0, 1.0) # (r,g,b) white\n\
defaultFarColor     = (0.0, 0.0, 0.0) # (r,g,b) black\n\
defaultGamma        = 1.0\n\
minGamma            = 0.1\n\
maxGamma            = 5.0\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class depthShader(<a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxNode</a>):\n\
    &#39;&#39;&#39; Creates a depth shader which renders in Maya&#39;s software renderer. &#39;&#39;&#39;\n\
    # Define the static variables to which we will assign the node&#39;s attributes\n\
    # in nodeInitializer() defined below.\n\
    surfacePointAttribute = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    nearDistanceAttribute = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    farDistanceAttribute  = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    nearColorAttribute    = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    farColorAttribute     = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    gammaAttribute        = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()    \n\
    outColorAttribute     = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxNode.__init__\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#a0769ac5b3ecf4060e81dfe4bdc6ed327&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxNode.__init__</a>(self)\n\
    \n\
    def compute(self, pPlug, pDataBlock):\n\
        &#39;&#39;&#39; \n\
        Node computation method. \n\
          - pDataBlock contains the data on which we will base our computations. \n\
          - pPlug is a connection point related to one of our node attributes (either an input or an output). \n\
        &#39;&#39;&#39;\n\
        if ( pPlug == depthShader.outColorAttribute ):\n\
            \n\
            # Get the data handles corresponding to your attributes among the values in the data block.\n\
            surfacePointDataHandle = pDataBlock.inputValue( depthShader.surfacePointAttribute )\n\
            nearDistanceDataHandle = pDataBlock.inputValue( depthShader.nearDistanceAttribute )\n\
            farDistanceDataHandle  = pDataBlock.inputValue( depthShader.farDistanceAttribute )\n\
            nearColorDataHandle    = pDataBlock.inputValue( depthShader.nearColorAttribute )\n\
            farColorDataHandle     = pDataBlock.inputValue( depthShader.farColorAttribute )\n\
            gammaDataHandle        = pDataBlock.inputValue( depthShader.gammaAttribute )\n\
            \n\
            # Obtain the (x,y,z) location of the currently rendered point in camera coordinates.\n\
            surfacePoint = surfacePointDataHandle.asFloatVector()\n\
            \n\
            # Since the camera is looking along its negative Z axis (the Y axis is \n\
            # the up vector), we must take the absolute value of the Z coordinate\n\
            # to obtain the point&#39;s depth.\n\
            depth = abs(surfacePoint.z) \n\
            \n\
            # Get the actual near and far threshold values.\n\
            nearValue = nearDistanceDataHandle.asFloat()\n\
            farValue = farDistanceDataHandle.asFloat()\n\
            \n\
            # Find the proportion of depth between the near and far values.\n\
            if( (farValue - nearValue) == 0):\n\
                # Avoid a division by zero if the near and far values somehow have the same value.\n\
                depthProportion = 0\n\
            else:\n\
                depthProportion = (depth - nearValue) / (farValue - nearValue)\n\
            \n\
            # Clamp the depthProportion value in the interval [0.0, 1.0]\n\
            depthProportion = max(0, min( depthProportion, 1.0 ) )\n\
            \n\
            # Modify the depth proportion using the gamma roll-off bias.\n\
            gammaValue = gammaDataHandle.asFloat()\n\
            depthProportion = math.pow(depthProportion, gammaValue)\n\
            \n\
            # Linearly interpolate the output color based on the depth proportion.\n\
            outColor = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatVector</a>(0, 0, 0)\n\
            nearColor = nearColorDataHandle.asFloatVector()\n\
            farColor = farColorDataHandle.asFloatVector()\n\
            \n\
            outColor.x = nearColor.x + ( ( farColor.x - nearColor.x ) * depthProportion )\n\
            outColor.y = nearColor.y + ( ( farColor.y - nearColor.y ) * depthProportion )\n\
            outColor.z = nearColor.z + ( ( farColor.z - nearColor.z ) * depthProportion )\n\
            \n\
            # Write to the output data.\n\
            outColorDataHandle = pDataBlock.outputValue( depthShader.outColorAttribute )\n\
            outColorDataHandle.setMFloatVector( outColor )\n\
            outColorDataHandle.setClean()\n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; \n\
    Creates an instance of our node plug-in and delivers it to Maya as a pointer. \n\
    &#39;&#39;&#39;\n\
    return depthShader() \n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; \n\
    Defines the set of attributes for our node. The attributes\n\
    declared in this function are assigned as static members to our\n\
    depthShader class. Instances of depthShader will use these attributes\n\
    to create plugs for use in the compute() method.\n\
    &#39;&#39;&#39;\n\
    # Create a numeric attribute function set, since our attributes will all be defined by numeric types.\n\
    numericAttributeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericAttribute</a>()\n\
    \n\
    #==================================\n\
    # INPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    # - The (x,y,z) point on the surface defined according to the camera&#39;s frame of reference.\n\
    #   &gt; (!) Important: the &#39;pointCamera&#39; string relates to the samplerInfo maya node.\n\
    #   &gt; This value is supplied by the render sampler at computation time.\n\
    depthShader.surfacePointAttribute = numericAttributeFn.createPoint(&#39;pointCamera&#39;, &#39;p&#39;)\n\
    numericAttributeFn.storable = False\n\
    numericAttributeFn.hidden = True\n\
    depthShader.addAttribute( depthShader.surfacePointAttribute )\n\
    \n\
    # - The &#39;near&#39; distance, i.e. the minimum distance threshold from the camera after which the \n\
    #   pixel&#39;s color is modified by the depth of the point.\n\
    #   &gt; This value can be defined by the user, and is storable.\n\
    global defaultNearDistance, defaultFarDistance\n\
    depthShader.nearDistanceAttribute = numericAttributeFn.create( &#39;nearDistance&#39;, &#39;nd&#39;, \n\
                                                                   <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, defaultNearDistance )\n\
    numericAttributeFn.storable =  True\n\
    numericAttributeFn.setMin(0.0)\n\
    numericAttributeFn.setMax( defaultFarDistance )\n\
    depthShader.addAttribute( depthShader.nearDistanceAttribute )\n\
    \n\
    # - The &#39;far&#39; distance, i.e. the minimum distance threshold from the camera before which the\n\
    #   pixel&#39;s color is modified by the depth of the point.\n\
    #   &gt; This value can be defined by the user, and is storable.\n\
    depthShader.farDistanceAttribute = numericAttributeFn.create( &#39;farDistance&#39;, &#39;fd&#39;, \n\
                                                                  <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, defaultFarDistance )\n\
    numericAttributeFn.storable = True \n\
    numericAttributeFn.setMin( defaultFarDistance + 0.1 ) # Add an epsilon value of 0.1 to avoid near distance overlap.\n\
    numericAttributeFn.setMax( 3 * defaultFarDistance )\n\
    depthShader.addAttribute( depthShader.farDistanceAttribute )\n\
    \n\
    # - The &#39;near&#39; color.\n\
    #   &gt; This value can be defined by the user using a color picker, and is storable.\n\
    global defaultNearColor\n\
    depthShader.nearColorAttribute = numericAttributeFn.createColor( &#39;nearColor&#39;, &#39;nc&#39; )\n\
    numericAttributeFn.storable = True \n\
    numericAttributeFn.default = ( defaultNearColor[0], defaultNearColor[1], defaultNearColor[2] )\n\
    depthShader.addAttribute( depthShader.nearColorAttribute )\n\
    \n\
    # - The &#39;far&#39; color.\n\
    #   &gt; This value can be defined by the user using a color picker, and is storable.\n\
    global defaultFarColor\n\
    depthShader.farColorAttribute = numericAttributeFn.createColor( &#39;farColor&#39;, &#39;fc&#39; )\n\
    numericAttributeFn.storable = True \n\
    numericAttributeFn.default = ( defaultFarColor[0], defaultFarColor[1], defaultFarColor[2] )\n\
    depthShader.addAttribute( depthShader.farColorAttribute )\n\
    \n\
    # - The gamma value, or roll-off bias, which will affect how the color is interpolated between\n\
    #   the near and far colors.\n\
    #   &gt; This value can be defined by the user using a slider, and is storable.\n\
    global defaultGamma, minGamma, maxGamma\n\
    depthShader.gammaAttribute = numericAttributeFn.create( &#39;gamma&#39;, &#39;g&#39;, \n\
                                                            <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, defaultGamma )\n\
    numericAttributeFn.storable = True \n\
    numericAttributeFn.setMin( minGamma )\n\
    numericAttributeFn.setMax( maxGamma )\n\
    depthShader.addAttribute( depthShader.gammaAttribute )\n\
    \n\
    #==================================\n\
    # OUTPUT NODE ATTRIBUTE(S)\n\
    #==================================    \n\
    # - The pixel color output.\n\
    #   &gt; This value is computed in our depthShader.compute() method, and should not be stored.\n\
    depthShader.outColorAttribute = numericAttributeFn.createColor( &#39;outColor&#39;, &#39;oc&#39;)\n\
    numericAttributeFn.storable = False \n\
    numericAttributeFn.writable = False \n\
    numericAttributeFn.readable = True \n\
    numericAttributeFn.hidden = False \n\
    depthShader.addAttribute( depthShader.outColorAttribute )\n\
    \n\
    #==================================\n\
    # NODE ATTRIBUTE DEPENDENCIES\n\
    #==================================\n\
    #  - All the input attributes affect the computation of the pixel color output (outColor).\n\
    depthShader.attributeAffects( depthShader.surfacePointAttribute, depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.nearDistanceAttribute, depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.farDistanceAttribute,  depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.nearColorAttribute,    depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.farColorAttribute,     depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.gammaAttribute,        depthShader.outColorAttribute )\n\
\n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initializes the plug-in. &#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>( mobject )\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator, \n\
                    nodeInitializer, OpenMaya.MPxNode.kDependNode, kPluginNodeClassify )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register node: &quot; + kPluginNodeName )\n\
        raise\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Unitializes the plug-in. &#39;&#39;&#39;\n\
    mplugin = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnPlugin</a>( mobject )\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to deregister node: &quot; + kPluginNodeName )\n\
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
import random\n\
\n\
# Load our plug-in.\n\
cmds.loadPlugin( &#39;pyDepthShader.py&#39; )\n\
\n\
# Clear the scene.\n\
cmds.file( new=True, force=True )\n\
\n\
# Create an instance of our depth shader.\n\
depthShaderName = cmds.shadingNode( &#39;pyMyDepthShader&#39;, asUtility=True )\n\
cmds.setAttr( depthShaderName + &#39;.gamma&#39;, 1.4 )\n\
cmds.setAttr( depthShaderName + &#39;.farColor&#39;, 0, 0.43, 1, type=&#39;double3&#39; )\n\
\n\
# Create a surface shader to which we will attach our depth shader.\n\
surfaceShaderName = cmds.shadingNode( &#39;surfaceShader&#39;, asShader=True )\n\
cmds.connectAttr( depthShaderName + &#39;.outColor&#39;, surfaceShaderName + &#39;.outColor&#39;, force=True )\n\
\n\
# Create a shading group to tie everything together.\n\
shadingGroupName = cmds.sets( name=&#39;surfaceShader1SG&#39;, empty=True, noSurfaceShader=True, renderable=True )\n\
cmds.connectAttr( surfaceShaderName + &#39;.outColor&#39;, shadingGroupName + &#39;.surfaceShader&#39;, force=True )\n\
\n\
# Create a bunch cubes pseudo-randomly placed according to a seeded random number generator.\n\
numCubes = 50\n\
positionRange = 14\n\
\n\
randomSeed = 5\n\
random.seed( randomSeed )\n\
\n\
for i in range( 0, numCubes ):\n\
    # Create a new cube.\n\
    newCubeName = cmds.polyCube( w=2, h=2, d=2 )\n\
    \n\
    # Move the cube somewhere near the grid.\n\
    cmds.move( random.randint( -positionRange, positionRange ), # x\n\
               random.randint( -positionRange, positionRange ), # y\n\
               random.randint( -positionRange, positionRange ), # z\n\
               newCubeName )\n\
    \n\
    # Rotate the cube along all three axes.\n\
    cmds.rotate( random.randint( 0, 360 ), # x axis\n\
                 random.randint( 0, 360 ), # y axis\n\
                 random.randint( 0, 360 ), # z axis\n\
                 newCubeName )\n\
\n\
    # Assign the cube we have created to our surface (depth) shader.\n\
    cmds.sets( newCubeName, e=True, forceElement=shadingGroupName )\n\
\n\
# Render the current view.\n\
cmds.render()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># depthShader.py\n\
\n\
import sys\n\
import math\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
\n\
# Plug-in information:\n\
kPluginNodeName = &#39;myDepthShader&#39;\n\
kPluginNodeClassify = &#39;utility/general&#39;\n\
kPluginNodeId = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MTypeId</a>(0x870FE)\n\
\n\
# Default attribute values\n\
defaultNearDistance = 20.0\n\
defaultFarDistance  = 70.0\n\
defaultNearColor    = (1.0, 1.0, 1.0) # (r,g,b) white\n\
defaultFarColor     = (0.0, 0.0, 0.0) # (r,g,b) black\n\
defaultGamma        = 1.0\n\
minGamma            = 0.1\n\
maxGamma            = 5.0\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class depthShader(OpenMayaMPx.MPxNode):\n\
    &#39;&#39;&#39; Creates a depth shader which renders in Maya&#39;s software renderer. &#39;&#39;&#39;\n\
    # Define the static variables to which we will assign the node&#39;s attributes\n\
    # in nodeInitializer() defined below.\n\
    surfacePointAttribute = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    nearDistanceAttribute = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    farDistanceAttribute  = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    nearColorAttribute    = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    farColorAttribute     = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    gammaAttribute        = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()    \n\
    outColorAttribute     = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxNode.__init__(self)\n\
    \n\
    def compute(self, pPlug, pDataBlock):\n\
        &#39;&#39;&#39; \n\
        Node computation method. \n\
          - pDataBlock contains the data on which we will base our computations. \n\
          - pPlug is a connection point related to one of our node attributes (either an input or an output). \n\
        &#39;&#39;&#39;\n\
        if ( pPlug == depthShader.outColorAttribute ):\n\
            \n\
            # Get the data handles corresponding to your attributes among the values in the data block.\n\
            surfacePointDataHandle = pDataBlock.inputValue( depthShader.surfacePointAttribute )\n\
            nearDistanceDataHandle = pDataBlock.inputValue( depthShader.nearDistanceAttribute )\n\
            farDistanceDataHandle  = pDataBlock.inputValue( depthShader.farDistanceAttribute )\n\
            nearColorDataHandle    = pDataBlock.inputValue( depthShader.nearColorAttribute )\n\
            farColorDataHandle     = pDataBlock.inputValue( depthShader.farColorAttribute )\n\
            gammaDataHandle        = pDataBlock.inputValue( depthShader.gammaAttribute )\n\
            \n\
            # Obtain the (x,y,z) location of the currently rendered point in camera coordinates.\n\
            surfacePoint = surfacePointDataHandle.asFloatVector()\n\
            \n\
            # Since the camera is looking along its negative Z axis (the Y axis is \n\
            # the up vector), we must take the absolute value of the Z coordinate\n\
            # to obtain the point&#39;s depth.\n\
            depth = abs(surfacePoint.z) \n\
            \n\
            # Get the actual near and far threshold values.\n\
            nearValue = nearDistanceDataHandle.asFloat()\n\
            farValue = farDistanceDataHandle.asFloat()\n\
            \n\
            # Find the proportion of depth between the near and far values.\n\
            if( (farValue - nearValue) == 0):\n\
                # Avoid a division by zero if the near and far values somehow have the same value.\n\
                depthProportion = 0\n\
            else:\n\
                depthProportion = (depth - nearValue) / (farValue - nearValue)\n\
            \n\
            # Clamp the depthProportion value in the interval [0.0, 1.0]\n\
            depthProportion = max(0, min( depthProportion, 1.0 ) )\n\
            \n\
            # Modify the depth proportion using the gamma roll-off bias.\n\
            gammaValue = gammaDataHandle.asFloat()\n\
            depthProportion = math.pow(depthProportion, gammaValue)\n\
            \n\
            # Linearly interpolate the output color based on the depth proportion.\n\
            outColor = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFloatVector</a>(0, 0, 0)\n\
            nearColor = nearColorDataHandle.asFloatVector()\n\
            farColor = farColorDataHandle.asFloatVector()\n\
            \n\
            outColor.x = nearColor.x + ( ( farColor.x - nearColor.x ) * depthProportion )\n\
            outColor.y = nearColor.y + ( ( farColor.y - nearColor.y ) * depthProportion )\n\
            outColor.z = nearColor.z + ( ( farColor.z - nearColor.z ) * depthProportion )\n\
            \n\
            # Write to the output data.\n\
            outColorDataHandle = pDataBlock.outputValue( depthShader.outColorAttribute )\n\
            outColorDataHandle.setMFloatVector( outColor )\n\
            outColorDataHandle.setClean()\n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; \n\
    Creates an instance of our node plug-in and delivers it to Maya as a pointer. \n\
    &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( depthShader() )\n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; \n\
    Defines the set of attributes for our node. The attributes\n\
    declared in this function are assigned as static members to our\n\
    depthShader class. Instances of depthShader will use these attributes\n\
    to create plugs for use in the compute() method.\n\
    &#39;&#39;&#39;\n\
    # Create a numeric attribute function set, since our attributes will all be defined by numeric types.\n\
    numericAttributeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericAttribute</a>()\n\
    \n\
    #==================================\n\
    # INPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    # - The (x,y,z) point on the surface defined according to the camera&#39;s frame of reference.\n\
    #   &gt; (!) Important: the &#39;pointCamera&#39; string relates to the samplerInfo maya node.\n\
    #   &gt; This value is supplied by the render sampler at computation time.\n\
    depthShader.surfacePointAttribute = numericAttributeFn.createPoint(&#39;pointCamera&#39;, &#39;p&#39;)\n\
    numericAttributeFn.setStorable(False)\n\
    numericAttributeFn.setHidden(True)\n\
    depthShader.addAttribute( depthShader.surfacePointAttribute )\n\
    \n\
    # - The &#39;near&#39; distance, i.e. the minimum distance threshold from the camera after which the \n\
    #   pixel&#39;s color is modified by the depth of the point.\n\
    #   &gt; This value can be defined by the user, and is storable.\n\
    global defaultNearDistance, defaultFarDistance\n\
    depthShader.nearDistanceAttribute = numericAttributeFn.create( &#39;nearDistance&#39;, &#39;nd&#39;, \n\
                                                                   <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, defaultNearDistance )\n\
    numericAttributeFn.setStorable( True )\n\
    numericAttributeFn.setMin( 0.0 )\n\
    numericAttributeFn.setMax( defaultFarDistance )\n\
    depthShader.addAttribute( depthShader.nearDistanceAttribute )\n\
    \n\
    # - The &#39;far&#39; distance, i.e. the minimum distance threshold from the camera before which the\n\
    #   pixel&#39;s color is modified by the depth of the point.\n\
    #   &gt; This value can be defined by the user, and is storable.\n\
    depthShader.farDistanceAttribute = numericAttributeFn.create( &#39;farDistance&#39;, &#39;fd&#39;, \n\
                                                                  <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, defaultFarDistance )\n\
    numericAttributeFn.setStorable( True )\n\
    numericAttributeFn.setMin( defaultFarDistance + 0.1 ) # Add an epsilon value of 0.1 to avoid near distance overlap.\n\
    numericAttributeFn.setMax( 3 * defaultFarDistance )\n\
    depthShader.addAttribute( depthShader.farDistanceAttribute )\n\
    \n\
    # - The &#39;near&#39; color.\n\
    #   &gt; This value can be defined by the user using a color picker, and is storable.\n\
    global defaultNearColor\n\
    depthShader.nearColorAttribute = numericAttributeFn.createColor( &#39;nearColor&#39;, &#39;nc&#39; )\n\
    numericAttributeFn.setStorable( True )\n\
    numericAttributeFn.setDefault( defaultNearColor[0], defaultNearColor[1], defaultNearColor[2] )\n\
    depthShader.addAttribute( depthShader.nearColorAttribute )\n\
    \n\
    # - The &#39;far&#39; color.\n\
    #   &gt; This value can be defined by the user using a color picker, and is storable.\n\
    global defaultFarColor\n\
    depthShader.farColorAttribute = numericAttributeFn.createColor( &#39;farColor&#39;, &#39;fc&#39; )\n\
    numericAttributeFn.setStorable( True )\n\
    numericAttributeFn.setDefault( defaultFarColor[0], defaultFarColor[1], defaultFarColor[2] )\n\
    depthShader.addAttribute( depthShader.farColorAttribute )\n\
    \n\
    # - The gamma value, or roll-off bias, which will affect how the color is interpolated between\n\
    #   the near and far colors.\n\
    #   &gt; This value can be defined by the user using a slider, and is storable.\n\
    global defaultGamma, minGamma, maxGamma\n\
    depthShader.gammaAttribute = numericAttributeFn.create( &#39;gamma&#39;, &#39;g&#39;, \n\
                                                            <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, defaultGamma )\n\
    numericAttributeFn.setStorable( True )\n\
    numericAttributeFn.setMin( minGamma )\n\
    numericAttributeFn.setMax( maxGamma )\n\
    depthShader.addAttribute( depthShader.gammaAttribute )\n\
    \n\
    #==================================\n\
    # OUTPUT NODE ATTRIBUTE(S)\n\
    #==================================    \n\
    # - The pixel color output.\n\
    #   &gt; This value is computed in our depthShader.compute() method, and should not be stored.\n\
    depthShader.outColorAttribute = numericAttributeFn.createColor( &#39;outColor&#39;, &#39;oc&#39;)\n\
    numericAttributeFn.setStorable( False )\n\
    numericAttributeFn.setWritable( False )\n\
    numericAttributeFn.setReadable( True )\n\
    numericAttributeFn.setHidden( False )\n\
    depthShader.addAttribute( depthShader.outColorAttribute )\n\
    \n\
    #==================================\n\
    # NODE ATTRIBUTE DEPENDENCIES\n\
    #==================================\n\
    #  - All the input attributes affect the computation of the pixel color output (outColor).\n\
    depthShader.attributeAffects( depthShader.surfacePointAttribute, depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.nearDistanceAttribute, depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.farDistanceAttribute,  depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.nearColorAttribute,    depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.farColorAttribute,     depthShader.outColorAttribute )\n\
    depthShader.attributeAffects( depthShader.gammaAttribute,        depthShader.outColorAttribute )\n\
\n\
\n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initializes the plug-in. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator, \n\
                    nodeInitializer, OpenMayaMPx.MPxNode.kDependNode, kPluginNodeClassify )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register node: &quot; + kPluginNodeName )\n\
        raise\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Unitializes the plug-in. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to deregister node: &quot; + kPluginNodeName )\n\
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
import random\n\
\n\
# Load our plug-in.\n\
cmds.loadPlugin( &#39;depthShader.py&#39; )\n\
\n\
# Clear the scene.\n\
cmds.file( new=True, force=True )\n\
\n\
# Create an instance of our depth shader.\n\
depthShaderName = cmds.shadingNode( &#39;myDepthShader&#39;, asUtility=True )\n\
cmds.setAttr( depthShaderName + &#39;.gamma&#39;, 1.4 )\n\
cmds.setAttr( depthShaderName + &#39;.farColor&#39;, 0, 0.43, 1, type=&#39;double3&#39; )\n\
\n\
# Create a surface shader to which we will attach our depth shader.\n\
surfaceShaderName = cmds.shadingNode( &#39;surfaceShader&#39;, asShader=True )\n\
cmds.connectAttr( depthShaderName + &#39;.outColor&#39;, surfaceShaderName + &#39;.outColor&#39;, force=True )\n\
\n\
# Create a shading group to tie everything together.\n\
shadingGroupName = cmds.sets( name=&#39;surfaceShader1SG&#39;, empty=True, noSurfaceShader=True, renderable=True )\n\
cmds.connectAttr( surfaceShaderName + &#39;.outColor&#39;, shadingGroupName + &#39;.surfaceShader&#39;, force=True )\n\
\n\
# Create a bunch cubes pseudo-randomly placed according to a seeded random number generator.\n\
numCubes = 50\n\
positionRange = 14\n\
\n\
randomSeed = 5\n\
random.seed( randomSeed )\n\
\n\
for i in range( 0, numCubes ):\n\
    # Create a new cube.\n\
    newCubeName = cmds.polyCube( w=2, h=2, d=2 )\n\
    \n\
    # Move the cube somewhere near the grid.\n\
    cmds.move( random.randint( -positionRange, positionRange ), # x\n\
               random.randint( -positionRange, positionRange ), # y\n\
               random.randint( -positionRange, positionRange ), # z\n\
               newCubeName )\n\
    \n\
    # Rotate the cube along all three axes.\n\
    cmds.rotate( random.randint( 0, 360 ), # x axis\n\
                 random.randint( 0, 360 ), # y axis\n\
                 random.randint( 0, 360 ), # z axis\n\
                 newCubeName )\n\
\n\
    # Assign the cube we have created to our surface (depth) shader.\n\
    cmds.sets( newCubeName, e=True, forceElement=shadingGroupName )\n\
\n\
# Render the current view.\n\
cmds.render()\n\
\n\
&#39;&#39;&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";