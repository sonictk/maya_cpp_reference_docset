var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Example: Voxelizer Node</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Example: Voxelizer Node</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"example-voxelizer-node\"></a></div>\n\
<div class=\'section\'><a id=\"example-voxelizer-node-1\"></a><h2 id=\"example-voxelizer-node-1\">Example: Voxelizer Node</h2></div>\n\
<p><strong>Filename:</strong> <span class=\'code\'>voxelizerNode.py</span></p>\n\
<p><strong>Rendered Output:</strong> The following rendered image was obtained by voxelizing the mesh of a sphere. We applied a blue lambertian material to the original sphere, and a red surface shader to the voxelized mesh. The voxelized mesh was also assigned a Toon outline with a line width value of <span class=\'code\'>0.223</span>.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/voxelizerScene_redux.png\' title=\'\' /></div>\n\
<p><strong>Program Summary:</strong> The plug-in code below creates a new <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxNode</a></span> which accepts a mesh as input, as well as user-defined attributes to determine the voxel width and inter-voxel distance. This voxelizer node transforms the input mesh into a new mesh consisting of cubes, which fill the volume occupied by the original mesh. The voxelization process makes use of <span class=\'code\'>MFnMesh.allIntersections()</span> to cast rays from inside the bounding box of the original mesh towards the camera. Assuming that the mesh is closed, if the ray intersects with an odd number points along the mesh&#39;s surface, then the origin of the ray is contained within the mesh.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> This voxelizer was implemented as an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxNode</a></span> plug-in. It would not be possible to create such a voxelized mesh by deriving from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDeformerNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_deformer_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxDeformerNode</a></span> because a deformer cannot change the topology of the mesh. That is to say, the edge connections between the vertices cannot be modified within a deformer; a deformer can only modify the vertex positions.</p>\n\
</blockquote>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pyVoxelizerNode.py\n\
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
# Plug-in information:\n\
kPluginNodeName = &#39;voxelizerNode&#39;           # The name of the node.\n\
kPluginNodeId = OpenMaya.MTypeId( 0xBEEF6 ) # A unique ID associated to this node type.\n\
\n\
# Default input values.\n\
defaultVoxelWidth = 0.9       # The width of a cubic voxel.\n\
defaultVoxelDistance = 1.0    # The distance which separates the center of two adjacent voxels.\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class VoxelizerNode(OpenMaya.MPxNode):\n\
    # Static variables which will later be replaced by the node&#39;s attributes.\n\
    voxelWidthAttribute = OpenMaya.MObject()\n\
    voxelDistanceAttribute = OpenMaya.MObject()\n\
    inputMeshAttribute = OpenMaya.MObject()\n\
    outputMeshAttribute = OpenMaya.MObject()\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        # (!) Make sure you call the base class&#39;s constructor.\n\
        OpenMaya.MPxNode.__init__(self)\n\
        \n\
    \n\
    def compute(self, pPlug, pDataBlock):\n\
        &#39;&#39;&#39; Here, we will create a voxelized version of the input mesh. &#39;&#39;&#39;\n\
        \n\
        if( pPlug == VoxelizerNode.outputMeshAttribute ):\n\
            \n\
            # Get our custom input node attributes and values.\n\
            voxelWidthHandle = pDataBlock.inputValue( VoxelizerNode.voxelWidthAttribute )\n\
            voxelWidth = voxelWidthHandle.asFloat()\n\
            \n\
            voxelDistanceHandle = pDataBlock.inputValue( VoxelizerNode.voxelDistanceAttribute )\n\
            voxelDistance = voxelDistanceHandle.asFloat()\n\
            \n\
            inputMeshHandle = pDataBlock.inputValue( VoxelizerNode.inputMeshAttribute )\n\
            inputMeshObj = inputMeshHandle.asMesh()\n\
            \n\
            \n\
            # Compute the bounding box around the mesh vertices.\n\
            boundingBox = self.getBoundingBox( inputMeshObj )    \n\
            \n\
            # Determine which voxel centerpoints are contained within the mesh.\n\
            voxels = self.getVoxels( voxelDistance, inputMeshObj, boundingBox )\n\
            \n\
            # Create a mesh data container, which will store our new voxelized mesh.\n\
            meshDataFn = OpenMaya.MFnMeshData()\n\
            newOutputMeshData = meshDataFn.create()\n\
            \n\
            # Create a cubic polygon for each voxel and populate the &#39;newOutputMeshData&#39; MeshData object.\n\
            self.createVoxelMesh( voxels, voxelWidth, newOutputMeshData)\n\
\n\
\n\
            # Set the output data.            \n\
            outputMeshHandle = pDataBlock.outputValue( VoxelizerNode.outputMeshAttribute )\n\
            outputMeshHandle.setMObject( newOutputMeshData )\n\
            \n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
    \n\
    \n\
    def getBoundingBox(self, pMeshObj):\n\
        &#39;&#39;&#39; Calculate a bounding box around the mesh vertices. &#39;&#39;&#39;\n\
        \n\
        # Create the bounding box object we will populate with the points of the mesh.\n\
        boundingBox = OpenMaya.MBoundingBox()\n\
        \n\
        meshFn = OpenMaya.MFnMesh( pMeshObj )\n\
        \n\
        pointArray = OpenMaya.MPointArray()\n\
        \n\
        # Get the points of the mesh in its local coordinate space.\n\
        pointArray = meshFn.getPoints( OpenMaya.MSpace.kTransform  ) \n\
\n\
        for i in range( 0, len(pointArray) ):\n\
            point = pointArray[i]\n\
            boundingBox.expand( point )\n\
         \n\
        return boundingBox\n\
    \n\
    \n\
    def getVoxels(self, pVoxelDistance, pMeshObj, pBoundingBox):\n\
        &#39;&#39;&#39; \n\
        Obtain a list of voxels as a set of (x,y,z) coordinates in the mesh local space. \n\
        \n\
        We obtain these voxels by casting rays from points separated pVoxelDistance apart within the\n\
        mesh bounding box, and test whether or not these points are contained within the mesh.\n\
        \n\
        A point is contained within a closed mesh if the ray shot from the point intersects an odd\n\
        number of times with the surface of the mesh.\n\
        &#39;&#39;&#39;\n\
        # Initialize a list of voxels contained within the mesh.\n\
        voxels = []\n\
        \n\
        # Get a reference to the <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a> function set, and use it on the given mesh object.\n\
        meshFn = OpenMaya.MFnMesh( pMeshObj )\n\
        \n\
        # Compute an offset which we will apply to the min and max corners of the bounding box.\n\
        halfVoxelDist = 0.5 * pVoxelDistance\n\
        \n\
        # Offset the position of the minimum point to account for the inter-voxel distance.\n\
        minPoint = pBoundingBox.min\n\
        minPoint.x += halfVoxelDist\n\
        minPoint.y += halfVoxelDist\n\
        minPoint.z += halfVoxelDist\n\
        \n\
        # Offset the position of the maximum point to account for the inter-voxel distance.\n\
        maxPoint = pBoundingBox.max\n\
        maxPoint.x += halfVoxelDist\n\
        maxPoint.y += halfVoxelDist\n\
        maxPoint.z += halfVoxelDist\n\
        \n\
        # Define an iterator which will allow us to step through the pVoxelDistance\n\
        # point intervals contained within our bounding box. We use this iterator\n\
        # in the for loops that follow to visit each voxel center in the bounding box.\n\
        def floatIterator(start, stop, step):\n\
            r = start\n\
            while r &lt; stop:\n\
                yield r\n\
                r += step\n\
        \n\
        # Iterate over every point in the bounding box, stepping by pVoxelDistance...\n\
        for xCoord in floatIterator( minPoint.x, maxPoint.x, pVoxelDistance ):\n\
            for yCoord in floatIterator( minPoint.y, maxPoint.y, pVoxelDistance ):\n\
                for zCoord in floatIterator( minPoint.z, maxPoint.z, pVoxelDistance ):\n\
\n\
                    # 2D representation of a ray cast from the point within the bounding box:\n\
                    #\n\
                    #  (+) ^-----------------\n\
                    #      |                |\n\
                    #  y   |                |  - We are shooting the ray from the point: [*]\n\
                    # axis | &lt;======[*]     |  - The direction of the ray is parallel to the -Z axis.\n\
                    #      |                |\n\
                    #      |                |\n\
                    #  (-) ------------------&gt;\n\
                    #     (-)    z axis     (+)\n\
                    #\n\
                    # If the ray intersects with an odd number of points along the surface of the mesh, the\n\
                    # point is contained within the mesh (assuming a closed mesh). \n\
                    raySource = OpenMaya.MFloatPoint( xCoord, yCoord, zCoord )\n\
                    rayDirection = OpenMaya.MFloatVector( 0, 0, -1 )\n\
                    # intersectionPoints = OpenMaya.MFloatPointArray()\n\
                    tolerance = 0.0001\n\
                    \n\
\n\
                    \n\
                    ret = meshFn.allIntersections( raySource,                  # raySource - where we are shooting the ray from.\n\
                                             rayDirection,               # rayDirection - the direction in which we are shooting the ray.\n\
                                             OpenMaya.MSpace.kTransform, # coordinate space - the mesh&#39;s local coordinate space.\n\
                                             float(9999),                # maxParam - the range of the ray.\n\
                                             False,                      # testBothDirections - we are not checking both directions from the raySource\n\
                                             tolerance=tolerance,                  # tolerance - a numeric tolerance threshold which allow intersections to occur just outside the mesh.\n\
                                             )\n\
                                             \n\
                                             \n\
                    # Returns a tuple of:\n\
                        # -&gt; (hitPoints, hitRayParams, hitFaces, hitTriangles, hitBary1s, hitBary2s)\n\
\n\
                    \n\
                    # If there is an odd number of intersection points, then the point lies within the mesh. Otherwise,\n\
                    # the point lies outside the mesh. We are only concerned with voxels whose centerpoint lies within the mesh\n\
                    if( len(ret[0]) % 2 == 1 ):\n\
                        voxels.append( raySource )\n\
        \n\
        # Return the list of voxel coordinates which lie within the mesh.\n\
        return voxels\n\
    \n\
    \n\
    def createVoxelMesh(self, pVoxelPositions, pVoxelWidth, pOutMeshData):\n\
        &#39;&#39;&#39; Create a mesh containing one cubic polygon for each voxel in the pVoxelPositions list. &#39;&#39;&#39;\n\
        \n\
        numVoxels = len( pVoxelPositions )\n\
        \n\
        numVerticesPerVoxel = 8 # a cube has eight vertices.\n\
        numPolygonsPerVoxel = 6 # a cube has six faces.\n\
        numVerticesPerPolygon = 4  # four vertices are required to define a face of a cube.\n\
        numPolygonConnectsPerVoxel = numPolygonsPerVoxel * numVerticesPerPolygon # 24\n\
        \n\
        # Initialize the required arrays used to create the mesh in MFnMesh.create()\n\
        totalVertices = numVoxels * numVerticesPerVoxel\n\
        vertexArray = OpenMaya.MFloatPointArray()\n\
        vertexArray.setLength( totalVertices )\n\
        vertexIndexOffset = 0\n\
        \n\
        totalPolygons = numVoxels * numPolygonsPerVoxel\n\
        polygonCounts = OpenMaya.MIntArray()\n\
        polygonCounts.setLength( totalPolygons )\n\
        polygonCountsIndexOffset = 0\n\
        \n\
        totalPolygonConnects = numVoxels * numPolygonConnectsPerVoxel\n\
        polygonConnects = OpenMaya.MIntArray()\n\
        polygonConnects.setLength( totalPolygonConnects )\n\
        polygonConnectsIndexOffset = 0\n\
        \n\
        # Populate the required arrays used in MFnMesh.create()\n\
        for i in range( 0, numVoxels ):\n\
            voxelPosition = pVoxelPositions[i]\n\
            \n\
            # Add a new cube to the arrays.\n\
            self.createCube( voxelPosition, pVoxelWidth,\n\
                             vertexArray, vertexIndexOffset, numVerticesPerVoxel,\n\
                             polygonCounts, polygonCountsIndexOffset, numPolygonsPerVoxel, numVerticesPerPolygon,\n\
                             polygonConnects, polygonConnectsIndexOffset )\n\
            \n\
            # Increment the respective index offsets.\n\
            vertexIndexOffset += numVerticesPerVoxel\n\
            polygonCountsIndexOffset += numPolygonsPerVoxel\n\
            polygonConnectsIndexOffset += numPolygonConnectsPerVoxel\n\
        \n\
        \n\
        # Create the mesh now that the arrays have been populated. The mesh is stored in pOutMeshData\n\
        meshFn = OpenMaya.MFnMesh()\n\
        meshFn.create(  vertexArray, polygonCounts, polygonConnects, parent=pOutMeshData )\n\
    \n\
    \n\
    def createCube(self, pVoxelPosition, pWidth, \n\
                         pVertexArray, pVertexIndexOffset, pNumVerticesPerVoxel,\n\
                         pPolygonCountArray, pPolygonCountIndexOffset, pNumPolygonsPerVoxel, pNumVerticesPerPolygon,\n\
                         pPolygonConnectsArray, pPolygonConnectsIndexOffset ):\n\
        &#39;&#39;&#39; Add a cubic polygon to the specified arrays. &#39;&#39;&#39;\n\
        \n\
        # We are using half the given width to compute the vertices of the cube. \n\
        halfWidth = float( pWidth / 2.0 )\n\
        \n\
        # Declare the eight corners of the cube. The cube is centered at pVoxelPosition.\n\
        \n\
        vertices = [OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z), # 0\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z), # 1\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 2\n\
                    OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 3\n\
                    OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z), # 4\n\
                    OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 5\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 6\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z)] # 7\n\
        \n\
        # Declare the data structure which binds each vertex to a polygon corner \n\
        polygonConnections = [ (0, 12, 16), # the vertex indexed at 0 corresponds to the polygon corners whose indexes are (0, 12, 16) in pPolygonConnectsArray. \n\
                               (1, 19, 20),\n\
                               (2,  9, 23),\n\
                               (3,  8, 13),\n\
                               (4, 15, 17),\n\
                               (5, 11, 14),\n\
                               (6, 10, 22),\n\
                               (7, 18, 21) ]\n\
\n\
        # Store the eight corners of the cube in the vertex array.\n\
        for i in range( 0, pNumVerticesPerVoxel ):\n\
            # Store the vertex in the passed vertex array.\n\
            pVertexArray[pVertexIndexOffset + i] = vertices[i]\n\
            \n\
            # Assign the vertex in the pVertexArray to the relevant polygons.\n\
            for polygonConnectionIndex in polygonConnections[i]:\n\
                pPolygonConnectsArray[pPolygonConnectsIndexOffset + polygonConnectionIndex] =  pVertexIndexOffset + i\n\
        \n\
        # Declare the number of vertices for each face.\n\
        for i in range( 0, pNumPolygonsPerVoxel ):\n\
             # Set the number of vertices for the polygon at the given index.\n\
             pPolygonCountArray[pPolygonCountIndexOffset + i] =  pNumVerticesPerPolygon\n\
             \n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; Creates an instance of our node class and delivers it to Maya as a pointer. &#39;&#39;&#39;\n\
    return VoxelizerNode() \n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; Defines the input and output attributes as static variables in our plug-in class. &#39;&#39;&#39;\n\
    # The following <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnNumericAttribute</a> function set will allow us to create our attributes.\n\
    numericAttributeFn = OpenMaya.MFnNumericAttribute()\n\
    \n\
    # This one allows us to create our input and output mesh attributes.\n\
    typedAttributeFn = OpenMaya.MFnTypedAttribute()\n\
    \n\
    #==================================\n\
    # INPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    # We will need a voxel width.\n\
    global defaultVoxelWidth\n\
    VoxelizerNode.voxelWidthAttribute = numericAttributeFn.create( &#39;voxelWidth&#39;, &#39;vw&#39;,\n\
                                                                    OpenMaya.MFnNumericData.kFloat, defaultVoxelWidth )\n\
    numericAttributeFn.writable =  True \n\
    numericAttributeFn.readable = False \n\
    numericAttributeFn.storable =  True \n\
    numericAttributeFn.hidden = False \n\
    numericAttributeFn.setMin( 0.1 )\n\
    VoxelizerNode.addAttribute( VoxelizerNode.voxelWidthAttribute )\n\
\n\
    # We will need a voxel distance value (higher values means we can see more voxels within the volume of the mesh).\n\
    global defaultVoxelDistance\n\
    VoxelizerNode.voxelDistanceAttribute = numericAttributeFn.create( &#39;voxelDistance&#39;, &#39;vd&#39;, \n\
                                                                       OpenMaya.MFnNumericData.kFloat, defaultVoxelDistance )\n\
    numericAttributeFn.writable =  True \n\
    numericAttributeFn.readable = False \n\
    numericAttributeFn.storable =  True \n\
    numericAttributeFn.hidden = False \n\
    numericAttributeFn.setMin( 0.1 )\n\
    VoxelizerNode.addAttribute( VoxelizerNode.voxelDistanceAttribute )\n\
    \n\
    # We will need an input mesh attribute.\n\
    VoxelizerNode.inputMeshAttribute = typedAttributeFn.create( &#39;inputMesh&#39;, &#39;im&#39;,\n\
                                                                OpenMaya.MFnData.kMesh )\n\
    typedAttributeFn.writable =  True \n\
    typedAttributeFn.readable = False \n\
    typedAttributeFn.storable =  False \n\
    typedAttributeFn.hidden = False \n\
    VoxelizerNode.addAttribute( VoxelizerNode.inputMeshAttribute )\n\
\n\
    #==================================\n\
    # OUTPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    VoxelizerNode.outputMeshAttribute = typedAttributeFn.create( &#39;outputMesh&#39;, &#39;om&#39;,\n\
                                                                 OpenMaya.MFnData.kMesh )\n\
    typedAttributeFn.writable =  False \n\
    typedAttributeFn.readable = True \n\
    typedAttributeFn.storable =  False \n\
    typedAttributeFn.hidden = False \n\
    VoxelizerNode.addAttribute( VoxelizerNode.outputMeshAttribute )\n\
    \n\
    #==================================\n\
    # NODE ATTRIBUTE DEPENDENCIES\n\
    #==================================\n\
    # If any of the inputs change, the output mesh will be recomputed.\n\
    VoxelizerNode.attributeAffects( VoxelizerNode.voxelWidthAttribute, VoxelizerNode.outputMeshAttribute )\n\
    VoxelizerNode.attributeAffects( VoxelizerNode.voxelDistanceAttribute, VoxelizerNode.outputMeshAttribute )\n\
    VoxelizerNode.attributeAffects( VoxelizerNode.inputMeshAttribute, VoxelizerNode.outputMeshAttribute )\n\
    \n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator, nodeInitializer )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register node: &#39; + kPluginNodeName )\n\
        raise\n\
    \n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to deregister node: &#39; + kPluginNodeName )\n\
        raise\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
\n\
cmds.file( newFile=True, force=True )\n\
\n\
cmds.unloadPlugin( &#39;pyVoxelizerNode.py&#39; )\n\
cmds.loadPlugin( &#39;pyVoxelizerNode.py&#39; )\n\
\n\
# Create a sphere which will act as our input shape.\n\
cmds.polySphere( r=5.0, sx=20, sy=20, name=&#39;sphere1&#39; )\n\
cmds.move( -20, 0, 0, &#39;sphere1&#39; ) # move it over to the side.\n\
\n\
# Create the voxelization node.\n\
cmds.createNode( &#39;voxelizerNode&#39;, name=&#39;voxelizerNode1&#39; )\n\
\n\
# Create a target shape.\n\
cmds.createNode( &#39;transform&#39;, name=&#39;target1&#39; )\n\
cmds.createNode( &#39;mesh&#39;, name=&#39;target1Shape&#39;, parent=&#39;target1&#39; )\n\
cmds.sets( &#39;target1Shape&#39;, add=&#39;initialShadingGroup&#39; )\n\
\n\
# Connect the attributes.\n\
cmds.connectAttr( &#39;sphere1Shape.outMesh&#39;, &#39;voxelizerNode1.inputMesh&#39; )\n\
cmds.connectAttr( &#39;voxelizerNode1.outputMesh&#39;, &#39;target1Shape.inMesh&#39; )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># voxelizerNode.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import maya.OpenMaya as OpenMaya\n\
\n\
# Plug-in information:\n\
kPluginNodeName = &#39;voxelizerNode&#39;           # The name of the node.\n\
kPluginNodeId = OpenMaya.MTypeId( 0xBEEF6 ) # A unique ID associated to this node type.\n\
\n\
# Default input values.\n\
defaultVoxelWidth = 0.9       # The width of a cubic voxel.\n\
defaultVoxelDistance = 1.0    # The distance which separates the center of two adjacent voxels.\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class VoxelizerNode(OpenMayaMPx.MPxNode):\n\
    # Static variables which will later be replaced by the node&#39;s attributes.\n\
    voxelWidthAttribute = OpenMaya.MObject()\n\
    voxelDistanceAttribute = OpenMaya.MObject()\n\
    inputMeshAttribute = OpenMaya.MObject()\n\
    outputMeshAttribute = OpenMaya.MObject()\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        # (!) Make sure you call the base class&#39;s constructor.\n\
        OpenMayaMPx.MPxNode.__init__(self)\n\
        \n\
    \n\
    def compute(self, pPlug, pDataBlock):\n\
        &#39;&#39;&#39; Here, we will create a voxelized version of the input mesh. &#39;&#39;&#39;\n\
        \n\
        if( pPlug == VoxelizerNode.outputMeshAttribute ):\n\
            \n\
            # Get our custom input node attributes and values.\n\
            voxelWidthHandle = pDataBlock.inputValue( VoxelizerNode.voxelWidthAttribute )\n\
            voxelWidth = voxelWidthHandle.asFloat()\n\
            \n\
            voxelDistanceHandle = pDataBlock.inputValue( VoxelizerNode.voxelDistanceAttribute )\n\
            voxelDistance = voxelDistanceHandle.asFloat()\n\
            \n\
            inputMeshHandle = pDataBlock.inputValue( VoxelizerNode.inputMeshAttribute )\n\
            inputMeshObj = inputMeshHandle.asMesh()\n\
            \n\
            \n\
            # Compute the bounding box around the mesh&#39;s vertices.\n\
            boundingBox = self.getBoundingBox( inputMeshObj )    \n\
            \n\
            # Determine which voxel centerpoints are contained within the mesh.\n\
            voxels = self.getVoxels( voxelDistance, inputMeshObj, boundingBox )\n\
            \n\
            # Create a mesh data container, which will store our new voxelized mesh.\n\
            meshDataFn = OpenMaya.MFnMeshData()\n\
            newOutputMeshData = meshDataFn.create()\n\
            \n\
            # Create a cubic polygon for each voxel and populate the &#39;newOutputMeshData&#39; MeshData object.\n\
            self.createVoxelMesh( voxels, voxelWidth, newOutputMeshData)\n\
\n\
\n\
            # Set the output data.            \n\
            outputMeshHandle = pDataBlock.outputValue( VoxelizerNode.outputMeshAttribute )\n\
            outputMeshHandle.setMObject( newOutputMeshData )\n\
            \n\
        else:\n\
            return OpenMaya.kUnknownParameter\n\
    \n\
    \n\
    def getBoundingBox(self, pMeshObj):\n\
        &#39;&#39;&#39; Calculate a bounding box around the mesh vertices. &#39;&#39;&#39;\n\
        \n\
        # Create the bounding box object we will populate with the points of the mesh.\n\
        boundingBox = OpenMaya.MBoundingBox()\n\
        \n\
        meshFn = OpenMaya.MFnMesh( pMeshObj )\n\
        \n\
        pointArray = OpenMaya.MPointArray()\n\
        \n\
        # Get the points of the mesh in its local coordinate space.\n\
        meshFn.getPoints( pointArray, OpenMaya.MSpace.kTransform ) \n\
\n\
        for i in range( 0, pointArray.length() ):\n\
            point = pointArray[i]\n\
            boundingBox.expand( point )\n\
         \n\
        return boundingBox\n\
    \n\
    \n\
    def getVoxels(self, pVoxelDistance, pMeshObj, pBoundingBox):\n\
        &#39;&#39;&#39; \n\
        Obtain a list of voxels as a set of (x,y,z) coordinates in the mesh local space. \n\
        \n\
        We obtain these voxels by casting rays from points separated pVoxelDistance apart within the\n\
        mesh bounding box, and test whether or not these points are contained within the mesh.\n\
        \n\
        A point is contained within a closed mesh if the ray shot from the point intersects an odd\n\
        number of times with the surface of the mesh.\n\
        &#39;&#39;&#39;\n\
        # Initialize a list of voxels contained within the mesh.\n\
        voxels = []\n\
        \n\
        # Get a reference to the <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnMesh</a> function set, and use it on the given mesh object.\n\
        meshFn = OpenMaya.MFnMesh( pMeshObj )\n\
        \n\
        # Compute an offset which we will apply to the min and max corners of the bounding box.\n\
        halfVoxelDist = 0.5 * pVoxelDistance\n\
        \n\
        # Offset the position of the minimum point to account for the inter-voxel distance.\n\
        minPoint = pBoundingBox.min()\n\
        minPoint.x += halfVoxelDist\n\
        minPoint.y += halfVoxelDist\n\
        minPoint.z += halfVoxelDist\n\
        \n\
        # Offset the position of the maximum point to account for the inter-voxel distance.\n\
        maxPoint = pBoundingBox.max()\n\
        maxPoint.x += halfVoxelDist\n\
        maxPoint.y += halfVoxelDist\n\
        maxPoint.z += halfVoxelDist\n\
        \n\
        # Define an iterator which will allow us to step through the pVoxelDistance\n\
        # point intervals contained within our bounding box. We use this iterator\n\
        # in the for loops that follow to visit each voxel center in the bounding box.\n\
        def floatIterator(start, stop, step):\n\
            r = start\n\
            while r &lt; stop:\n\
                yield r\n\
                r += step\n\
        \n\
        # Iterate over every point in the bounding box, stepping by pVoxelDistance...\n\
        for xCoord in floatIterator( minPoint.x, maxPoint.x, pVoxelDistance ):\n\
            for yCoord in floatIterator( minPoint.y, maxPoint.y, pVoxelDistance ):\n\
                for zCoord in floatIterator( minPoint.z, maxPoint.z, pVoxelDistance ):\n\
\n\
                    # 2D representation of a ray cast from the point within the bounding box:\n\
                    #\n\
                    #  (+) ^-----------------\n\
                    #      |                |\n\
                    #  y   |                |  - We are shooting the ray from the point: [*]\n\
                    # axis | &lt;======[*]     |  - The direction of the ray is parallel to the -Z axis.\n\
                    #      |                |\n\
                    #      |                |\n\
                    #  (-) ------------------&gt;\n\
                    #     (-)    z axis     (+)\n\
                    #\n\
                    # If the ray intersects with an odd number of points along the surface of the mesh, the\n\
                    # point is contained within the mesh (assuming a closed mesh). \n\
                    raySource = OpenMaya.MFloatPoint( xCoord, yCoord, zCoord )\n\
                    rayDirection = OpenMaya.MFloatVector( 0, 0, -1 )\n\
                    intersectionPoints = OpenMaya.MFloatPointArray()\n\
                    tolerance = 0.0001\n\
                    \n\
                    meshFn.allIntersections( raySource,                  # raySource - where we are shooting the ray from.\n\
                                             rayDirection,               # rayDirection - the direction in which we are shooting the ray.\n\
                                             None,                       # faceIds - here, we do not care if specific faces are intersected)\n\
                                             None,                       # triIds - here, we do not care if specific tri&#39;s are intersected)\n\
                                             False,                      # idsSorted - here, we do not need to sort the faceId&#39;s or triId&#39;s indices.\n\
                                             OpenMaya.MSpace.kTransform, # coordinate space - the mesh&#39;s local coordinate space.\n\
                                             float(9999),                # the range of the ray.\n\
                                             False,                      # testBothDirections - we are not checking both directions from the raySource\n\
                                             None,                       # accelParams - this object is not applicable here.\n\
                                             False,                      # sortHits - we do not need to sort the intersection points along the ray.\n\
                                             intersectionPoints,         # hitPoints - the array of points which have been intersected.\n\
                                             None,                       # hitRayParams - we do not need any parametric distances of the points along the ray.\n\
                                             None,                       # hitFaces - we do not need the id&#39;s of the faces intersected.\n\
                                             None,                       # hitTriangles - we do not need the id&#39;s of the triangles intersected.\n\
                                             None,                       # hitBary1s - we do not need the barycentric coordinates of the points within the triangles.\n\
                                             None,                       # hitBary2s - we do not need the barycentric coordinates of the points within the triangles.\n\
                                             tolerance                   # tolerance - a numeric tolerance threshold which allow intersections to occur just outside the mesh.\n\
                                             )\n\
                    \n\
                    # If there is an odd number of intersection points, then the point lies within the mesh. Otherwise,\n\
                    # the point lies outside the mesh. We are only concerned with voxels whose centerpoint lies within the mesh\n\
                    if( intersectionPoints.length() % 2 == 1 ):\n\
                        voxels.append( raySource )\n\
        \n\
        # Return the list of voxel coordinates which lie within the mesh.\n\
        return voxels\n\
    \n\
    \n\
    def createVoxelMesh(self, pVoxelPositions, pVoxelWidth, pOutMeshData):\n\
        &#39;&#39;&#39; Create a mesh containing one cubic polygon for each voxel in the pVoxelPositions list. &#39;&#39;&#39;\n\
        \n\
        numVoxels = len( pVoxelPositions )\n\
        \n\
        numVerticesPerVoxel = 8 # a cube has eight vertices.\n\
        numPolygonsPerVoxel = 6 # a cube has six faces.\n\
        numVerticesPerPolygon = 4  # four vertices are required to define a face of a cube.\n\
        numPolygonConnectsPerVoxel = numPolygonsPerVoxel * numVerticesPerPolygon # 24\n\
        \n\
        # Initialize the required arrays used to create the mesh in MFnMesh.create()\n\
        totalVertices = numVoxels * numVerticesPerVoxel\n\
        vertexArray = OpenMaya.MFloatPointArray()\n\
        vertexArray.setLength( totalVertices )\n\
        vertexIndexOffset = 0\n\
        \n\
        totalPolygons = numVoxels * numPolygonsPerVoxel\n\
        polygonCounts = OpenMaya.MIntArray()\n\
        polygonCounts.setLength( totalPolygons )\n\
        polygonCountsIndexOffset = 0\n\
        \n\
        totalPolygonConnects = numVoxels * numPolygonConnectsPerVoxel\n\
        polygonConnects = OpenMaya.MIntArray()\n\
        polygonConnects.setLength( totalPolygonConnects )\n\
        polygonConnectsIndexOffset = 0\n\
        \n\
        # Populate the required arrays used in MFnMesh.create()\n\
        for i in range( 0, numVoxels ):\n\
            voxelPosition = pVoxelPositions[i]\n\
            \n\
            # Add a new cube to the arrays.\n\
            self.createCube( voxelPosition, pVoxelWidth,\n\
                             vertexArray, vertexIndexOffset, numVerticesPerVoxel,\n\
                             polygonCounts, polygonCountsIndexOffset, numPolygonsPerVoxel, numVerticesPerPolygon,\n\
                             polygonConnects, polygonConnectsIndexOffset )\n\
            \n\
            # Increment the respective index offsets.\n\
            vertexIndexOffset += numVerticesPerVoxel\n\
            polygonCountsIndexOffset += numPolygonsPerVoxel\n\
            polygonConnectsIndexOffset += numPolygonConnectsPerVoxel\n\
        \n\
        \n\
        # Create the mesh now that the arrays have been populated. The mesh is stored in pOutMeshData\n\
        meshFn = OpenMaya.MFnMesh()\n\
        meshFn.create( totalVertices, totalPolygons, vertexArray, polygonCounts, polygonConnects, pOutMeshData )\n\
    \n\
    \n\
    def createCube(self, pVoxelPosition, pWidth, \n\
                         pVertexArray, pVertexIndexOffset, pNumVerticesPerVoxel,\n\
                         pPolygonCountArray, pPolygonCountIndexOffset, pNumPolygonsPerVoxel, pNumVerticesPerPolygon,\n\
                         pPolygonConnectsArray, pPolygonConnectsIndexOffset ):\n\
        &#39;&#39;&#39; Add a cubic polygon to the specified arrays. &#39;&#39;&#39;\n\
        \n\
        # We are using half the given width to compute the vertices of the cube. \n\
        halfWidth = float( pWidth / 2.0 )\n\
        \n\
        # Declare the eight corners of the cube. The cube is centered at pVoxelPosition.\n\
        \n\
        vertices = [OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z), # 0\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z), # 1\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 2\n\
                    OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x, -halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 3\n\
                    OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z), # 4\n\
                    OpenMaya.MFloatPoint(-halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 5\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y,  halfWidth + pVoxelPosition.z), # 6\n\
                    OpenMaya.MFloatPoint( halfWidth + pVoxelPosition.x,  halfWidth + pVoxelPosition.y, -halfWidth + pVoxelPosition.z)] # 7\n\
        \n\
        # Declare the data structure which binds each vertex to a polygon corner \n\
        polygonConnections = [ (0, 12, 16), # the vertex indexed at 0 corresponds to the polygon corners whose indexes are (0, 12, 16) in pPolygonConnectsArray. \n\
                               (1, 19, 20),\n\
                               (2,  9, 23),\n\
                               (3,  8, 13),\n\
                               (4, 15, 17),\n\
                               (5, 11, 14),\n\
                               (6, 10, 22),\n\
                               (7, 18, 21) ]\n\
\n\
        # Store the eight corners of the cube in the vertex array.\n\
        for i in range( 0, pNumVerticesPerVoxel ):\n\
            # Store the vertex in the passed vertex array.\n\
            pVertexArray.set( vertices[i], pVertexIndexOffset + i )\n\
            \n\
            # Assign the vertex in the pVertexArray to the relevant polygons.\n\
            for polygonConnectionIndex in polygonConnections[i]:\n\
                pPolygonConnectsArray.set( pVertexIndexOffset + i, pPolygonConnectsIndexOffset + polygonConnectionIndex )\n\
        \n\
        # Declare the number of vertices for each face.\n\
        for i in range( 0, pNumPolygonsPerVoxel ):\n\
             # Set the number of vertices for the polygon at the given index.\n\
             pPolygonCountArray.set( pNumVerticesPerPolygon, pPolygonCountIndexOffset + i )\n\
             \n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def nodeCreator():\n\
    &#39;&#39;&#39; Creates an instance of our node class and delivers it to Maya as a pointer. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( VoxelizerNode() )\n\
\n\
def nodeInitializer():\n\
    &#39;&#39;&#39; Defines the input and output attributes as static variables in our plug-in class. &#39;&#39;&#39;\n\
    # The following <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnNumericAttribute</a> function set will allow us to create our attributes.\n\
    numericAttributeFn = OpenMaya.MFnNumericAttribute()\n\
    \n\
    # This one allows us to create our input and output mesh attributes.\n\
    typedAttributeFn = OpenMaya.MFnTypedAttribute()\n\
    \n\
    #==================================\n\
    # INPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    # We will need a voxel width.\n\
    global defaultVoxelWidth\n\
    VoxelizerNode.voxelWidthAttribute = numericAttributeFn.create( &#39;voxelWidth&#39;, &#39;vw&#39;,\n\
                                                                    OpenMaya.MFnNumericData.kFloat, defaultVoxelWidth )\n\
    numericAttributeFn.setWritable( True )\n\
    numericAttributeFn.setReadable( False )\n\
    numericAttributeFn.setStorable( True )\n\
    numericAttributeFn.setHidden( False )\n\
    numericAttributeFn.setMin( 0.1 )\n\
    VoxelizerNode.addAttribute( VoxelizerNode.voxelWidthAttribute )\n\
\n\
    # We will need a voxel distance value (higher values means we can see more voxels within the volume of the mesh).\n\
    global defaultVoxelDistance\n\
    VoxelizerNode.voxelDistanceAttribute = numericAttributeFn.create( &#39;voxelDistance&#39;, &#39;vd&#39;, \n\
                                                                       OpenMaya.MFnNumericData.kFloat, defaultVoxelDistance )\n\
    numericAttributeFn.setWritable( True )\n\
    numericAttributeFn.setReadable( False )\n\
    numericAttributeFn.setStorable( True )\n\
    numericAttributeFn.setHidden( False )\n\
    numericAttributeFn.setMin( 0.1 )\n\
    VoxelizerNode.addAttribute( VoxelizerNode.voxelDistanceAttribute )\n\
    \n\
    # We will need an input mesh attribute.\n\
    VoxelizerNode.inputMeshAttribute = typedAttributeFn.create( &#39;inputMesh&#39;, &#39;im&#39;,\n\
                                                                OpenMaya.MFnData.kMesh )\n\
    typedAttributeFn.setWritable( True )\n\
    typedAttributeFn.setReadable( False )\n\
    typedAttributeFn.setStorable( False )\n\
    typedAttributeFn.setHidden( False )\n\
    VoxelizerNode.addAttribute( VoxelizerNode.inputMeshAttribute )\n\
\n\
    #==================================\n\
    # OUTPUT NODE ATTRIBUTE(S)\n\
    #==================================\n\
    VoxelizerNode.outputMeshAttribute = typedAttributeFn.create( &#39;outputMesh&#39;, &#39;om&#39;,\n\
                                                                 OpenMaya.MFnData.kMesh )\n\
    typedAttributeFn.setWritable( False )\n\
    typedAttributeFn.setReadable( True )\n\
    typedAttributeFn.setStorable( False )\n\
    typedAttributeFn.setHidden( False )\n\
    VoxelizerNode.addAttribute( VoxelizerNode.outputMeshAttribute )\n\
    \n\
    #==================================\n\
    # NODE ATTRIBUTE DEPENDENCIES\n\
    #==================================\n\
    # If any of the inputs change, the output mesh will be recomputed.\n\
    VoxelizerNode.attributeAffects( VoxelizerNode.voxelWidthAttribute, VoxelizerNode.outputMeshAttribute )\n\
    VoxelizerNode.attributeAffects( VoxelizerNode.voxelDistanceAttribute, VoxelizerNode.outputMeshAttribute )\n\
    VoxelizerNode.attributeAffects( VoxelizerNode.inputMeshAttribute, VoxelizerNode.outputMeshAttribute )\n\
    \n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerNode( kPluginNodeName, kPluginNodeId, nodeCreator, nodeInitializer )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register node: &#39; + kPluginNodeName )\n\
        raise\n\
    \n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitializes the plug-in &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterNode( kPluginNodeId )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to deregister node: &#39; + kPluginNodeName )\n\
        raise\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
\n\
cmds.file( newFile=True, force=True )\n\
\n\
cmds.unloadPlugin( &#39;voxelizerNode.py&#39; )\n\
cmds.loadPlugin( &#39;voxelizerNode.py&#39; )\n\
\n\
# Create a sphere which will act as our input shape.\n\
cmds.polySphere( r=5.0, sx=20, sy=20, name=&#39;sphere1&#39; )\n\
cmds.move( -20, 0, 0, &#39;sphere1&#39; ) # move it over to the side.\n\
\n\
# Create the voxelization node.\n\
cmds.createNode( &#39;voxelizerNode&#39;, name=&#39;voxelizerNode1&#39; )\n\
\n\
# Create a target shape.\n\
cmds.createNode( &#39;transform&#39;, name=&#39;target1&#39; )\n\
cmds.createNode( &#39;mesh&#39;, name=&#39;target1Shape&#39;, parent=&#39;target1&#39; )\n\
cmds.sets( &#39;target1Shape&#39;, add=&#39;initialShadingGroup&#39; )\n\
\n\
# Connect the attributes.\n\
cmds.connectAttr( &#39;sphere1Shape.outMesh&#39;, &#39;voxelizerNode1.inputMesh&#39; )\n\
cmds.connectAttr( &#39;voxelizerNode1.outputMesh&#39;, &#39;target1Shape.inMesh&#39; )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";