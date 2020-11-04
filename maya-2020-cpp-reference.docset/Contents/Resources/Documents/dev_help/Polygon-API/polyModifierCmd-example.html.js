var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>polyModifierCmd example</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>polyModifierCmd example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"polymodifiercmd-example\"></a></div>\n\
<p>The source code for polyModifierCmd is located in the Developer Kit <span class=\'code\'>\\plug-ins</span> directory.</p>\n\
<p>polyModifierCmd encapsulates the generic process and interface with the Maya architecture for creating a command that can modify a polygonal mesh. Although it deals entirely with polygons, it can be extended to other object types in Maya as the DG concepts are closely knit.</p>\n\
<p>This process is as follows:</p>\n\
<ol>\n\
<li><p>Modify the data.</p>\n\
<p>This part of the process deals only with the geometry or mesh data.</p></li>\n\
<li><p>Apply it to the polyShape node.</p>\n\
<p>Common to all poly modifier commands, this part of the process contains all the interaction with the Maya architecture regarding construction history, tweaks, and the polyShape node.</p></li>\n\
</ol>\n\
<p>Because this is a single action, to apply a modifier to a polyShape node you can make use of the <span class=\'code\'>doIt()</span>, <span class=\'code\'>undoIt()</span> and <span class=\'code\'>redoIt()</span> class structure to implement the class. However, since polyModifierCmd is a subset of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span>, it can derive itself off of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> so that any derived polyModifierCmd classes will inherit the full command architecture. The only consequence of this is that you cannot override the <span class=\'code\'>doIt()</span>, <span class=\'code\'>undoIt()</span> and <span class=\'code\'>redoIt()</span> methods as they are required by the actual command class to perform the operation. Instead you define our own group of similar methods: <span class=\'code\'>doModifyPoly()</span>, <span class=\'code\'>undoModifyPoly()</span> and <span class=\'code\'>redoModifyPoly()</span>.</p>\n\
<p>A derived class can initialize the polyModifierCmd and proceed to call <span class=\'code\'>doModifyPoly()</span> inside the <span class=\'code\'>doIt()</span> and can then extend the respective capabilities to the undo and redo. The <a href=\'#!/url=./dev_help/Polygon-API/splitUVCmd-example.html\' title=\'\'>splitUVCmd example</a> shows the implementation of a derived polyModifierCmd command. Below is the class interface for the polyModifierCmd.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class polyModifierCmd : <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a>\n\
{\n\
    public:\n\
        polyModifierCmd();\n\
        virtual ~polyModifierCmd();\n\
        // Restrict access to derived classes only\n\
        //\n\
    protected:\n\
        ////////////////////////////////////\n\
        // polyModifierCmd Initialization //\n\
        ////////////////////////////////////\n\
        // Target polyMesh to modify\n\
        //\n\
        void setMeshNode( <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> mesh );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> getMeshNode() const;\n\
        // Modifier node type\n\
        //\n\
        void setModifierNodeType( <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> type );\n\
        void setModifierNodeName( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> name );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> getModifierNodeType() const;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> getModifierNodeName() const;\n\
        ///////////////////////////////\n\
        // polyModifierCmd Execution //\n\
        ///////////////////////////////\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode );\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> directModifier( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doModifyPoly();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> redoModifyPoly();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoModifyPoly();\n\
    private:\n\
        //////////////////////////////////////////////\n\
        // polyModifierCmd Internal Processing Data //\n\
        //////////////////////////////////////////////\n\
        struct modifyPolyData\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> meshNodeTransform;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> meshNodeShape;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> meshNodeDestPlug;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> meshNodeDestAttr;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> upstreamNodeTransform;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> upstreamNodeShape;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> upstreamNodeSrcPlug;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> upstreamNodeSrcAttr;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNodeSrcAttr;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNodeDestAttr;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> tweakNode;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> tweakNodeSrcAttr;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> tweakNodeDestAttr;\n\
        };\n\
        //////////////////////////////////////\n\
        // polyModifierCmd Internal Methods //\n\
        //////////////////////////////////////\n\
        // Preprocessing methods\n\
        //\n\
        bool isCommandDataValid();\n\
        void collectNodeState();\n\
        // Modifier node methods\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> createModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a>&amp; modifierNode );\n\
        // Node processing methods (need to be executed in this order)\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> processMeshNode( modifyPolyData&amp; data );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> processUpstreamNode( modifyPolyData&amp; data );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> processModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode,\n\
            modifyPolyData&amp; data );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> processTweaks( modifyPolyData&amp; data );\n\
        // Node connection methods\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> connectNodes( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode );\n\
        // Mesh caching methods\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> cacheMeshData();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> cacheMeshTweaks();\n\
        // Undo methods\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoCachedMesh();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoTweakProcessing();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoDirectModifier();\n\
        /////////////////////////////////////\n\
        // polyModifierCmd Utility Methods //\n\
        /////////////////////////////////////\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> getFloat3PlugValue( <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> plug,\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a>&amp; value );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> getFloat3asMObject( <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a> value,\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a>&amp; object );\n\
        //////////////////////////\n\
        // polyModifierCmd Data //\n\
        //////////////////////////\n\
        // polyMesh\n\
        //\n\
        bool fDagPathInitialized;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> fDagPath;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> fDuplicateDagPath;\n\
        // Modifier node type\n\
        //\n\
        bool fModifierNodeTypeInitialized;\n\
        bool fModifierNodeNameInitialized;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> fModifierNodeType;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> fModifierNodeName;\n\
        // Node State Information\n\
        //\n\
        bool fHasHistory;\n\
        bool fHasTweaks;\n\
        bool fHasRecordHistory;\n\
        // Cached Tweak Data\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MIntArray</a> fTweakIndexArray;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFloatVectorArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVectorArray</a> fTweakVectorArray;\n\
        // Cached Mesh Data\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> fMeshData;\n\
        // DG and DAG Modifier\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDGModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGModifier</a> fDGModifier;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagModifier\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_modifier.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagModifier</a> fDagModifier;\n\
};\n\
\n\
</pre></div><p>In section of the class interface labeled // polyModifierCmd Execution //, notice the corresponding <span class=\'code\'>doModifyPoly()</span>, <span class=\'code\'>undoModifyPoly()</span> and <span class=\'code\'>redoModifyPoly()</span> method definitions. These three methods represent the core of the interface that derived commands will interface with.</p>\n\
<p>polyModifierCmd has three basic stages:</p>\n\
<ul>\n\
<li><p>polyModifierCmd initialization</p>\n\
<p>See <a href=\'#!/url=./dev_help/Polygon-API/polyModifierCmd-example.html#polymodifiercmd-initialization\' title=\'\'>polyModifierCmd initialization</a>.</p></li>\n\
<li><p>polyModifierCmd preprocessing</p>\n\
<p>See <a href=\'#!/url=./dev_help/Polygon-API/polyModifierCmd-example.html#polymodifiercmd-preprocessing\' title=\'\'>polyModifierCmd preprocessing</a>.</p></li>\n\
<li><p>polyModifierCmd processing</p>\n\
<p>See <a href=\'#!/url=./dev_help/Polygon-API/polyModifierCmd-example.html#polymodifiercmd-processing\' title=\'\'>polyModifierCmd processing</a>.</p></li>\n\
</ul>\n\
<p>Of the most importance however is to understand the basic class interface of polyModifierCmd (<span class=\'code\'>doModifyPoly()</span>, <span class=\'code\'>undoModifyPoly()</span>, <span class=\'code\'>redoModifyPoly()</span>).</p>\n\
<div class=\'section\'><a id=\"polymodifiercmd-initialization\"></a><h2 id=\"polymodifiercmd-initialization\">polyModifierCmd initialization</h2></div>\n\
<p>Before any modifier can be applied to a polyShape node, the polyModifierCmd requires some initialization data to guide the process. This data is distinctive from preprocessing data, since this is the required input to get the ball rolling, while preprocessing data is data extracted from our initial data. There are only two pieces of initialization data necessary to perform the operation, through which all other data can be extracted:</p>\n\
<ul>\n\
<li>A polyShape node—you need a mesh to apply the modifier to.</li>\n\
<li>A modifier—you need a modifier to apply to the mesh.</li>\n\
</ul>\n\
<p>(&quot;A modifier&quot;, means the actual modification made to the mesh data, exclusive of the manner through which it is applied. For example, the modifier in the case where construction history exists would be applied as a modifier node.)</p>\n\
<p>The polyShape node can be stored in the form of a DAG path. It is recommended that you use a DAG path rather than an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> since the DAG path is absolute and guaranteed to be pointing to the proper object, whereas the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> is a handle to an object owned by Maya which could change between calls to a plug-in. The polyShape input is represented in the class interface as:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Prototypes\n\
//\n\
void setMeshNode( <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> mesh );\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> getMeshNode() const;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> fDagPath;\n\
// Implementations\n\
//\n\
void polyModifierCmd::setMeshNode( <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> mesh )\n\
{\n\
    fDagPath = mesh;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> polyModifierCmd::getMeshNode() const\n\
{\n\
    return fDagPath;\n\
}\n\
\n\
</pre></div><p>The modifier can be applied in two forms:</p>\n\
<ul>\n\
<li>Through a modifier node</li>\n\
<li>Directly on the mesh</li>\n\
</ul>\n\
<p>Applying the modifier through a modifier node requires a DG node type that you can create and connect to the polyShape. Since it provides something tangible to work with, we provide an interface for you to initialize polyModifierCmd with a node type or node name:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Prototypes\n\
//\n\
void setModifierNodeType( <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> type );\n\
void setModifierNodeName( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> name );\n\
<a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> getModifierNodeType() const;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> getModifierNodeName() const;\n\
virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode );\n\
bool fModifierNodeTypeInitialized;\n\
bool fModifierNodeNameInitialized;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> fModifierNodeType;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> fModifierNodeName;\n\
// Implementations\n\
//\n\
void polyModifierCmd::setModifierNodeType( <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> type )\n\
{\n\
    fModifierNodeType = type;\n\
    fModifierNodeTypeInitialized = true;\n\
}\n\
void polyModifierCmd::setModifierNodeName( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> name )\n\
{\n\
    fModifierNodeName = name;\n\
    fModifierNodeNameInitialized = true;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> polyModifierCmd::getModifierNodeType() const\n\
{\n\
    return fModifierNodeType;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> polyModifierCmd::getModifierNodeName() const\n\
{\n\
    return fModifierNodeName;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyModifierCmd::initModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode )\n\
{\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>The <span class=\'code\'>initModifierNode()</span> method does not have any role in the node type that is created but rather the node creation. Often modifier nodes require an absolute input to tell the node how to modify the data. The splitUVNode, for example, requires a list of UVs to split. The problem that arises here is that if polyModifierCmd creates the node, how does the derived command initialize other data on the node? polyModifierCmd cannot do this because it is indifferent to the modifier—it just knows how to connect it. To get past this problem, we provide a callback in the form of a virtual method for derived commands to override and expect to be executed prior to the use of a modifier node.</p>\n\
<p>In contrast to the modifier node, applying the modifier by direct means provides nothing tangible to store and apply. That is, while a modifier node contains the modification inside an object thereby separating the modification from the polyShape node, a direct modifier does not. Since a direct modifier works directly on the polyShape node and polyModifierCmd needs to be independent of the modification process, we provide a callback to derived commands. This callback would be executed when there is a need for a direct modifier (that is, in the case with no construction history and construction history is turned off). Below, the code for the <span class=\'code\'>directModifier</span> callback is present in the form of a virtual method that is called when the polyModifierCmd deems it appropriate.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Prototypes\n\
//\n\
virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> directModifier( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> mesh );\n\
// Implementations\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyModifierCmd::directModifier( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> /* mesh */ )\n\
{\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"polymodifiercmd-preprocessing\"></a><h2 id=\"polymodifiercmd-preprocessing\">polyModifierCmd preprocessing</h2></div>\n\
<p>Once you have our initialization data you can extract the rest of the data necessary to apply the modifier. In addition to our initialization data you need to know if:</p>\n\
<ul>\n\
<li>Initialization data is valid</li>\n\
<li>Construction history is present</li>\n\
<li>Tweaks are present</li>\n\
<li>Construction history is turned on</li>\n\
</ul>\n\
<p>The first piece of information is a check to ensure that you can continue on with the given data. It consists of a check of the initialization of a polyShape node and modifier node information. If the data is invalid, polyModifierCmd cannot continue to execute and returns a failure:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Prototypes\n\
//\n\
bool isCommandDataValid()\n\
// Implementations\n\
//\n\
bool polyModifierCmd::isCommandDataValid()\n\
{\n\
    bool valid = true;\n\
    // Check the validity of the DAG path\n\
    //\n\
    if( fDagPathInitialized )\n\
    {\n\
        // Ensure we are pointing to a shape node\n\
        //\n\
        fDagPath.extendToShape();\n\
        if( !fDagPath.isValid() || fDagPath.apiType != <a href=\"javascript:void(0)\" data-symbol=\"MFn::kMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kMesh</a> )\n\
        {\n\
            valid = false;\n\
        }\n\
    }\n\
    else\n\
    {\n\
        valid = false;\n\
    }\n\
    // Check the validity of the modifier node type/name.\n\
    // Can only check that it has been set.\n\
    //\n\
    if( !fModifierNodeTypeInitialized &amp;&amp;\n\
    !fModifierNodeNameInitialized )\n\
    {\n\
        valid = false;\n\
    }\n\
}\n\
\n\
</pre></div><p>The next three pieces of information relate to the node state of the polyShape node. Since these three pieces of data require the polyShape node in order to extract out their data, the validity of the polyShape node is required. The data extraction is straightforward and compiled into a single method, <span class=\'code\'>collectNodeState</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Prototypes\n\
//\n\
void collectNodeState();\n\
// Implementations\n\
//\n\
void polyModifierCmd::collectNodeState()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // Collect the node state information on the given mesh\n\
    //\n\
    // -HasHistory\n\
    // -HasTweaks\n\
    // -HasRecordHistory\n\
    //\n\
    fDagPath.extendToShape();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> meshNodeShape = fDagPath.node();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode</a> depNodeFn( meshNodeShape );\n\
    // If the inMesh is connected, we have history\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> inMeshPlug = depNodeFn.findPlug( &quot;inMesh&quot; );\n\
    fHasHistory = inMeshPlug.isConnected();\n\
    // Tweaks exist only if the multi &quot;pnts&quot; attribute contains\n\
    // plugs that contain non-zero tweak values. Use false,\n\
    // until proven true search pattern.\n\
    //\n\
    fHasTweaks = false;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> tweakPlug = depNodeFn.findPlug( &quot;pnts&quot; );\n\
    if( !tweakPlug.isNull() )\n\
    {\n\
        // ASSERT : tweakPlug should be an array plug\n\
        //\n\
        MAssert( tweakPlug.isArray(), &quot;tweakPlug.isArray()&quot; );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a> tweak;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a> tweakData;\n\
        int i;\n\
        int numElements = tweakPlug.numElements;\n\
        for( i = 0; i &lt; numElements; i++ )\n\
        {\n\
            tweak = tweakPlug.elementByPhysicalIndex( i, &amp;status );\n\
            if( status == MS::kSuccess &amp;&amp; !tweak.isNull() )\n\
            {\n\
                // Retrieve the float vector from the plug\n\
                //\n\
                getFloat3PlugValue( tweak, tweakData );\n\
                if( 0 != tweakData.x ||\n\
                    0 != tweakData.y ||\n\
                    0 != tweakData.z )\n\
                {\n\
                    fHasTweaks = true;\n\
                    break;\n\
                }\n\
            }\n\
        }\n\
    }\n\
    // Query the constructionHistory command for the preference\n\
    // of recording history\n\
    //\n\
    int result;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::executeCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::executeCommand</a>( &quot;constructionHistory –q –tgl&quot;,\n\
        result );\n\
    fHasRecordHistory = (0 != result );\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"polymodifiercmd-processing\"></a><h2 id=\"polymodifiercmd-processing\">polyModifierCmd processing</h2></div>\n\
<p>The points of entry are:</p>\n\
<ul>\n\
<li><span class=\'code\'>doModifyPoly()</span></li>\n\
<li><span class=\'code\'>redoModifyPoly()</span></li>\n\
<li><span class=\'code\'>undoModifyPoly()</span></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"domodifypoly\"></a><h3 id=\"domodifypoly\">doModifyPoly()</h3></div>\n\
<p><span class=\'code\'>doModifyPoly()</span> is the most complex piece and the core of the polyModifierCmd. In here all the data is parsed and the appropriate action given. Rather than implementing the entire process in a single method, <span class=\'code\'>doModifyPoly()</span> only focuses on quickly scanning the node states and passes control over the appropriate method based on the state:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyModifierCmd::doModifyPoly()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kFailure;\n\
    if( isCommandDataValid() )\n\
    {\n\
        // Get the state of the polyMesh\n\
        //\n\
        collectNodeState();\n\
        if( !fHasHistory &amp;&amp; !fHasRecordHistory )\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> meshNode = fDagPath.node();\n\
            // Pre-process the mesh – Cache the old mesh\n\
            //\n\
            cacheMeshData();\n\
            cacheMeshTweaks();\n\
            // Call the directModifier\n\
            //\n\
            status = directModifier( meshNode );\n\
        }\n\
        else\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> modifierNode;\n\
            createModifierNode( modifierNode );\n\
            initModifierNode( modifierNode );\n\
            connectNodes( modifierNode );\n\
        }\n\
    }\n\
}\n\
\n\
</pre></div><p>The skeleton of <span class=\'code\'>doModifyPoly()</span> shows the concepts of how to interface with a polyShape node given its state. If you have no history and recording history is turned off, you cache the mesh data for undo purposes (explained with <a href=\'#!/url=./dev_help/Polygon-API/polyModifierCmd-example.html#undomodifypoly--\' title=\'\'>undoModifyPoly()</a>) and proceed to call the <span class=\'code\'>directModifier</span> callback. Otherwise the <span class=\'code\'>modifierNode</span> approach is taken. Calls are made to create the modifier node, initialize it (through the callback) and subsequently passed on to attempt to connect the nodes.</p>\n\
<p>Note that <span class=\'code\'>doModifyPoly()</span> processes only the construction history states. Though tweaks do play a role in the process, they are considered further on in the process separately since they are independent from construction history. The following table shows the code path that is followed based on the node’s construction history state:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
 \n\
</th>\n\
<th class=\"table-heading\">\n\
Record History – On\n\
</th>\n\
<th class=\"table-heading\">\n\
Record History – Off\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-2A8\"></a>\n\
<p class=\"table-body\">\n\
History – Exists\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-2A7\"></a>\n\
<p class=\"table-body\">\n\
connectNodes()\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-2A6\"></a>\n\
<p class=\"table-body\">\n\
connectNodes()\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-2A5\"></a>\n\
<p class=\"table-body\">\n\
History – Does Not Exist\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-2A4\"></a>\n\
<p class=\"table-body\">\n\
connectNodes()\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F-2A3\"></a>\n\
<p class=\"table-body\">\n\
directModifier()\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>The <span class=\'code\'>directModifier</span> line of code is implemented by the derived command and as such has nothing complex to worry about. It passes the derived command the mesh node to operate on directly—all the control rests with the derived command.</p>\n\
<p>In contrast, the three other cases regarding history are more involved. Beginning with the creation of the <span class=\'code\'>modifierNode</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyModifierCmd::createModifierNode( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a>&amp; modifier )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kFailure;\n\
    if( fModifierNodeTypeInitialized ||\n\
        fModifierNodeNameInitialized )\n\
    {\n\
        if( fModifierNodeTypeInitialized )\n\
        {\n\
            modifier = fDGModifier.createNode(fModifierNodeType,\n\
                &amp;status);\n\
        }\n\
        else if( fModifierNodeNameInitialized )\n\
        {\n\
            modifier = fDGModifier.createNode(fModifierNodeName,\n\
                &amp;status);\n\
        }\n\
        // Check to make sure that we have a modifier node of the\n\
        // appropriate type. Requires an inMesh and outMesh\n\
        // attribute.\n\
        //\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode</a> depNodeFn( modifier );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> inMeshAttr;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> outMeshAttr;\n\
        inMeshAttr = depNodeFn.attribute( &quot;inMesh&quot; );\n\
        outMeshAttr = depNodeFn.attribute( &quot;outMesh&quot; );\n\
        if( inMeshAttr.isNull() || outMeshAttr.isNull() )\n\
        {\n\
            displayError(&quot;Invalid Modifier: inMesh/outMesh needed&quot;);\n\
            status = MS::kFailure;\n\
        }\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p><span class=\'code\'>createModifierNode()</span> uses the initialized data for the modifier node type or modifier node name to create the modifier node via the local DG modifier. Use of the DG modifier is essential to keep the undo/redo relatively simple. Though the DG modifier has not created the node yet, it allows you to queue up actions for that node such as connections, so that once the DG modifier’s <span class=\'code\'>doIt()</span> is called everything is executed in order. This helps alleviate rollback issues in case of errors. <span class=\'code\'>createModifierNode()</span> also does a few checks to ensure that you have an <span class=\'code\'>inMesh</span> and <span class=\'code\'>outMesh</span> attribute on the node. Though the names may seem restrictive they keep a standard in the chains of modifier nodes. A helper class named <span class=\'code\'>polyModifierNode</span> (discussed in a later section) automatically generates these two key attributes.</p>\n\
<p>Following the <span class=\'code\'>createModifierNode()</span> the callback to the <span class=\'code\'>initModifierNode()</span> is made through which a derived class can initialize node data. This also lies under the control of the derived command. From there you enter the final stage of the process—<span class=\'code\'>connectNodes()</span>.</p>\n\
<div class=\'section\'><a id=\"connectnodes\"></a><h3 id=\"connectnodes\">connectNodes()</h3></div>\n\
<p><span class=\'code\'>connectNodes()</span> is a larger method which processes all the variables of the polyShape and modifier nodes and connects them. Look at the <span class=\'code\'>connectNodes()</span> implementation for a higher level view of what it controls:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyModifierCmd::connectNodes( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a>&amp; modifierNode )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // Declare our internal processing data structure\n\
    //\n\
    modifyPolyData data;\n\
    // Get the mesh node attrs and plugs\n\
    //\n\
    status = processMeshNode( data );\n\
    MCheckStatus( status, &quot;processMeshNode&quot; );\n\
    // Get the upstream node attrs and plugs\n\
    //\n\
    status = processUpstreamNode( data );\n\
    MCheckStatus( status, &quot;processUpstreamNode&quot; );\n\
    // Get the modifierNode attributes\n\
    //\n\
    status = processModifierNode( modifierNode, data );\n\
    MCheckStatus( status, &quot;processModifierNode&quot; );\n\
    // Process the tweaks on the meshNode\n\
    //\n\
    status = processTweaks( data );\n\
    MCheckStatus( status, &quot;processTweaks&quot; );\n\
    // Connect the nodes\n\
    //\n\
    if( fHasTweaks )\n\
    {\n\
        status = fDGModifier.connect( data.upstreamNodeShape,\n\
            data.upstreamNodeSrcAttr,\n\
            data.tweakNode,\n\
            data.tweakNodeDestAttr );\n\
        MCheckStatus( status, &quot;upstream-tweak connect&quot; );\n\
        status = fDGModifier.connect( data.tweakNode,\n\
            data.tweakNodeSrcAttr,\n\
            modifierNode,\n\
            data.modifierNodeDestAttr );\n\
        MCheckStatus( status, &quot;tweak-modifier connect&quot; );\n\
    }\n\
    else\n\
    {\n\
        status = fDGModifier.connect( data.upstreamNodeShape,\n\
            data.upstreamNodeSrcAttr,\n\
            modifierNode,\n\
            data.modifierNodeDestAttr );\n\
        MCheckStatus( status, &quot;upstream-modifier connect&quot; );\n\
    }\n\
    status = fDGModifier.connect( modifierNode,\n\
        data.modifierNodeSrcAttr,\n\
        data.meshNodeShape,\n\
        data.meshNodeDestAttr );\n\
    MCheckStatus( status, &quot;modifier-mesh connect&quot; );\n\
    status = fDGModifier.doIt();\n\
    return status;\n\
}\n\
\n\
</pre></div><p><span class=\'code\'>connectNodes()</span> is broken down into several subsections. First a general processing data structure is constructed. This contains all of the processing variables required between each of the processing methods. The structure was created to reduce the amount of argument passing between processing methods. From there a set of processing methods are called to collect the necessary data to connect the nodes and also to process node state specific intricacies. Following that it uses the collected data to connect the nodes.</p>\n\
<p>For details on each of the processing methods that follow, refer to the source code in polyModifierCmd.cpp, which is documented thoroughly.</p>\n\
<div class=\'section\'><a id=\"processmeshnode\"></a><h3 id=\"processmeshnode\">processMeshNode()</h3></div>\n\
<p>The first process method that the <span class=\'code\'>connectNodes()</span> runs through is <span class=\'code\'>processMeshNode()</span>. It processes all that’s necessary of the polyShape node, which is comprised of the node shape, node transform and connection data (the <span class=\'code\'>inMesh</span> plug and attribute). This data is stored inside the passed in <span class=\'code\'>modifyPolyData</span> data structure to be used further on in the other process methods. The order that these process methods are run is important.</p>\n\
<div class=\'section\'><a id=\"processupstreamnode\"></a><h3 id=\"processupstreamnode\">processUpstreamNode()</h3></div>\n\
<p>For the second process method, <span class=\'code\'>processUpstreamNode()</span>, there is a difference between the history exists case and the history does not exist case. <span class=\'code\'>connectNodes()</span> is only called in the case where history exists or the case where history does not exist but history recording is turned on. The reason for this is that in each of those cases, the addition of history is permissible and more stable and flexible so we process it that way.</p>\n\
<p>If history already exists, <span class=\'code\'>processUpstreamNode()</span> uses the <span class=\'code\'>inMesh</span> plug obtained in <span class=\'code\'>processMeshNode()</span> to retrieve the node directly upstream from the polyShape node. Once you’ve obtained the node, you disconnect the node from the polyShape node so that you’re prepared to insert the modifier node further on. Since all DG connections take place between the mesh node and the upstream node you only retrieve the <span class=\'code\'>outMesh</span> plug and attribute for connections further on.</p>\n\
<p>If history does not exist, you need to create the history chain. At the start of each history chain there is a hidden intermediate node that represents the initial state of the polyShape node at the time history was created. <span class=\'code\'>processUpstreamNode()</span> does this by calling an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode::duplicate()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html#ac1abc89bd329c4b2d1794cc8b971ea7b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html#a7c1ad96bede4dccc84533168081d7481&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDagNode::duplicate()</a></span> on the polyShape node. Since the <span class=\'code\'>duplicate()</span> method also creates a new transform for the duplicate shape, you re-parent the shape node under the same transform as the original shape and delete the transform through the DAG modifier. To the DG, this duplicate shape node behaves the same as the upstream node processed in the case where history exists. That is, all connections take place between this duplicate shape node and the original shape node. Thus you set the upstream node information to the duplicate shape and retrieve the <span class=\'code\'>outMesh</span> plug and attribute for connections further on.</p>\n\
<div class=\'section\'><a id=\"processmodifiernode\"></a><h3 id=\"processmodifiernode\">processModifierNode()</h3></div>\n\
<p>Like <span class=\'code\'>processMeshNode()</span> the third process method, <span class=\'code\'>processModifierNode()</span>, retrieves the <span class=\'code\'>inMesh</span> and <span class=\'code\'>outMesh</span> attributes of the modifier node for the connection of the nodes at the base of <span class=\'code\'>connectNodes()</span>.</p>\n\
<div class=\'section\'><a id=\"processtweaks\"></a><h3 id=\"processtweaks\">processTweaks()</h3></div>\n\
<p>Because of history, tweaks need to be extracted prior to the addition of the modifier node to maintain the order of operations. So if tweaks exist, you go through two stages:</p>\n\
<ul>\n\
<li>Tweak extraction</li>\n\
<li>Tweak application</li>\n\
</ul>\n\
<p>Begin by creating a tweak node (polyTweak) to store the tweaks and begin to parse the <span class=\'code\'>pnts</span> attribute for tweaks. The tweaks are individually cached into a class array member for undo purposes as well as in a local <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> array for the purposes of transferring over to the tweak node. Although tweaks are composed of the vector arrays that you just extracted, that is not all that you must account for during the extraction. Tweaks are stored on a <span class=\'code\'>pnts</span> attribute. As an attribute in the DG, it can also contain connections. These connections must be preserved and transferred over to the tweak node to maintain the DG structure.</p>\n\
<p>In addition to each vector array, you extract a plug array of each node that is connected to the <span class=\'code\'>pnts</span> attribute as well as each plug in the <span class=\'code\'>pnts</span> attribute that is connected. Note that each attribute in the <span class=\'code\'>pnts</span> array attribute is a compound attribute. Each attribute in the compound attribute is associated with a single axial translation for the given vertex tweak vector (that is, x, y, z).</p>\n\
<p>Once you’ve extracted the data, you apply the tweak vectors on the polyTweak node and reconnect any connections on each tweak vector. Now you have a tweak node that is ready to be connected to the history stream. But if you connect it as is, you would expect the resulting mesh to have double the tweaks. This is because the tweaks have not been removed from the mesh node. So the tweaks would be applied twice, once from the tweak node and once from the mesh node. However, recall that you used an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> array to retrieve the plugs. These retrieved an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> reference to the compound plug that was contained in the array attribute. Setting these back onto the tweak node moved them over to the tweak node. There is a large segment of code that is commented out in <span class=\'code\'>processTweaks()</span> that removes the tweaks from the mesh node. Executing this code gives the same result, however it slows down the performance with no apparent benefit.</p>\n\
<p>Like the other process methods, <span class=\'code\'>processTweaks()</span> also retrieves connection data for the tweak node to allow <span class=\'code\'>connectNodes()</span> to connect all the nodes.</p>\n\
<div class=\'section\'><a id=\"connectnodes-revisited\"></a><h3 id=\"connectnodes-revisited\">connectNodes() revisited</h3></div>\n\
<p>All the necessary nodes have been set up and the connection data extracted. The node connections are set up via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGModifier::connect()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html#afbd18f066f70fcd1864ddb4af91f3c7b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_modifier.html#a320660acebd0d2cbda2d438e076c5628&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGModifier::connect()</a></span> calls. And all the operations are executed via a final <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGModifier::doIt()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html#a984345cd272bc1a32a9fc2e93a6678b2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_modifier.html#a5c9d3d3edfc669fc8fcf31b71fe14e4c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGModifier::doIt()</a></span> call. From there you can implement undo support by calling the <span class=\'code\'>undoIt()</span> in the opposite order that the DG modifiers were executed in, and implement redo support as the <span class=\'code\'>doIt()</span> calls in the same order as before. This is accomplished since the DG modifier caches all the executions that it made. Likewise, polyModifierCmd caches all the necessary data through the <span class=\'code\'>doModifyPoly()</span> call. This leaves the <span class=\'code\'>undoModifyPoly()</span> and <span class=\'code\'>redoModifyPoly()</span> relatively simple.</p>\n\
<div class=\'section\'><a id=\"undomodifypoly\"></a><h3 id=\"undomodifypoly\">undoModifyPoly()</h3></div>\n\
<p>undoModifyPoly is very similar to the <span class=\'code\'>doModifyPoly()</span> method in structure and level of abstraction. It looks at the scenario from which it is being called (that is, node states) and caters the control over to the appropriate methods:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyModifierCmd::undoModifyPoly()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    if( !fHasHistory &amp;&amp; !fHasRecordHistory )\n\
    {\n\
        status = undoDirectModifier();\n\
    }\n\
    else\n\
    {\n\
        fDGModifier.undoIt();\n\
        // undoCachedMesh() must be called prior to\n\
        // undoTweakProcessing() because undoCachedMesh()\n\
        // copies the original mesh without tweaks back\n\
        // onto the existing mesh. Any changes made before\n\
        // the copy will be lost.\n\
        //\n\
        if( !fHasHistory )\n\
        {\n\
            status = undoCachedMesh();\n\
            fDagModifier.undoIt();\n\
        }\n\
        status = undoTweakProcessing();\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"undodirectmodifier\"></a><h3 id=\"undodirectmodifier\">undoDirectModifier()</h3></div>\n\
<p>The undoDirectModifier is not as simple as directModifier. Since polyModifierCmd is not aware of what the directModifier does, it must revert the entire mesh back into its original state. It does this through a unique use of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> handles, making use of the knowledge of how <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span>s work.</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span>s are said to be handles to internal objects owned by Maya. That is partly true. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span>s are handles, but Maya does not always own them. There are certain objects in Maya that are reference counted. That is, for each reference to the object a count is incremented. Once each reference is deleted the count is decremented until it reaches zero where the object is deleted. It’s like an object that lives only if it is being used. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span>s may refer to such reference counted objects that increment the reference count. Thus even though Maya owns these objects, you can have some control over the lifetime of that object by holding onto the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> handle to such an object. For other types of objects the general tip for not hanging onto an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> is valid and still highly recommended as the data can change between calls to a plug-in (for example, a deleted node).</p>\n\
<p>The types of data that are reference counted are objects classified under the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnData</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnComponent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_component.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_component.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnComponent</a></span> class hierarchy. Fortunately the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnData</a></span> object type includes the entire contents of a mesh. Using this concept as a foundation for backing up a mesh we can properly undo the direct modifier.</p>\n\
<div class=\'section\'><a id=\"cachemeshdata\"></a><h3 id=\"cachemeshdata\">cacheMeshData()</h3></div>\n\
<p><span class=\'code\'>cacheMeshData()</span> caches the data on the use of the mesh prior to the <span class=\'code\'>directModifier()</span>. Caching the mesh data makes use of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> concept (see <span class=\'code\'>undoDirectModifier()</span>). To make a backup of the data you must be careful not to retrieve the reference to the current object, as you will then be holding onto a reference of possibly dirtied data. To get around this duplicate the current mesh and retrieve an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnData</a></span> object by extracting an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> off the <span class=\'code\'>outMesh</span> attribute of the duplicate mesh. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> that you retrieved is a reference to the original mesh data and thus it increases the reference count. To make this transparent to the user finish up by deleting the nodes created by the duplicate. Note that this does not delete the mesh data since you now have a reference to it.</p>\n\
<div class=\'section\'><a id=\"cachemeshtweaks\"></a><h3 id=\"cachemeshtweaks\">cacheMeshTweaks()</h3></div>\n\
<p>This method is similar to the <span class=\'code\'>processTweaks()</span> method except it does not deal with tweak nodes. Instead it parses the <span class=\'code\'>pnts</span> attribute and extracts the tweak vectors into the tweak cache data members.</p>\n\
<div class=\'section\'><a id=\"undodirectmodifier-revisited\"></a><h3 id=\"undodirectmodifier-revisited\">undoDirectModifier() revisited</h3></div>\n\
<p>You can put the caching of data required to backup our mesh to use in <span class=\'code\'>undoDirectModifier()</span>. There is a distinct difference in the data flow of a polyShape node with tweaks and without. This directly affects the way the backup mesh is reapplied.</p>\n\
<p>Tweaks affect the point of reapplication of the backup mesh for reasons of the data flow inside the node. For a node without tweaks you can set the value of the outMesh to the backup mesh.</p>\n\
<p>For a node with tweaks you have to use a trick to force the copy of the backup mesh to the <span class=\'code\'>cachedInMesh</span> to keep the node in sync. In this case you duplicate the polyShape node, set the <span class=\'code\'>outMesh</span> of the duplicate shape to the backup mesh, and then connect the duplicate shape node to the original node. After forcing an evaluation, disconnect the duplicate shape node and delete it. This implicitly forces the <span class=\'code\'>outMesh</span> to hold the backup mesh. Then reapply the initial tweaks to the node via <span class=\'code\'>undoTweaksProcessing</span>, forcing the node to copy the backup mesh to the <span class=\'code\'>cachedInMesh</span> and perform the internal node synchronization.</p>\n\
<div class=\'section\'><a id=\"undomodifypoly-revisited\"></a><h3 id=\"undomodifypoly-revisited\">undoModifyPoly() revisited</h3></div>\n\
<p>For the case where <span class=\'code\'>connectNodes()</span> needs to be undone, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGModifier::undoIt()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html#a0789a8d51244cad0495abb2b811c39db&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_modifier.html#abba728d9d3cbf35ff4713b231eba1bef&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGModifier::undoIt()</a></span> method recalls all the connections and nodes created by <span class=\'code\'>connectNodes()</span>. Recall that <span class=\'code\'>processUpstreamNode()</span> also made use of a DAG modifier in the case where there was no history initially. In this case you need to perform some extra operations prior to calling the <span class=\'code\'>MDagModifier::undoIt()</span>.</p>\n\
<p>The reason for this is that since you created history and you’re undoing the operation you need to remove history. Removing is straightforward, however the node’s <span class=\'code\'>outMesh</span> attribute still holds the last known evaluation of the node—it still contains the modifier. As a result you need to undo the &quot;cached&quot; mesh on the node. To do this, call the method <span class=\'code\'>undoCachedMesh()</span>. Following the restoration of the mesh data, restore the tweaks leaving ~ with the original mesh.</p>\n\
<div class=\'section\'><a id=\"undocachedmesh\"></a><h3 id=\"undocachedmesh\">undoCachedMesh()</h3></div>\n\
<p>Similar to the <span class=\'code\'>undoDirectModifier()</span> case, the operations contained in <span class=\'code\'>undoCachedMesh()</span> are dependent on the presence of tweaks due to the change in data flow through the node. This is because you are reverting to a node without history and you need to restore the mesh by directly interfacing with the node.</p>\n\
<p>For the case where tweaks do not exist, you only need to restore the <span class=\'code\'>outMesh</span> since it becomes the geometry that represents the node. To do this, use the duplicate shape node that was created to start a history chain (recall that this is only done if history was not initially present). Retrieve the <span class=\'code\'>outMesh</span> of the duplicate shape node and copy that mesh data over to the <span class=\'code\'>outMesh</span> of the shape node, restoring the node to its initial state.</p>\n\
<p>For the case where tweaks do exist, you need to access the node in a similar manner to the way <span class=\'code\'>undoDirectModifier</span> handles the tweaks case, however this time you don’t need to duplicate the shape node since you already have one. Similarly reconnect the <span class=\'code\'>outMesh</span> of the duplicate shape to the <span class=\'code\'>inMesh</span> of the original shape through a local DG modifier and force a DG evaluation. Then undo the connection via the same DG modifier. The original mesh data is subsequently forced into the <span class=\'code\'>outMesh</span> prior to the reapplication of tweaks whereupon the <span class=\'code\'>outMesh</span> will be copied to the <span class=\'code\'>cachedInMesh</span>.</p>\n\
<div class=\'section\'><a id=\"redomodifypoly\"></a><h3 id=\"redomodifypoly\">redoModifyPoly()</h3></div>\n\
<p><span class=\'code\'>redoModifyPoly()</span> is straightforward because <span class=\'code\'>doModifyPoly()</span> initialized and set up all that was necessary for the operation. <span class=\'code\'>redoModifyPoly()</span> holds a similar structure to its counterparts. For the <span class=\'code\'>directModifier()</span> case, the <span class=\'code\'>doModifyPoly()</span> recalls that method without caching any of the mesh data again, since the class already has it. Otherwise, in the <span class=\'code\'>connectNodes()</span> case, it recalls the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGModifier::doIt()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_modifier.html#a984345cd272bc1a32a9fc2e93a6678b2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_modifier.html#a5c9d3d3edfc669fc8fcf31b71fe14e4c&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGModifier::doIt()</a></span> to redo the operations previously set up by <span class=\'code\'>doModifyPoly()</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyModifierCmd::redoModifyPoly()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
    if( !fHasHistory &amp;&amp; !fHasRecordHistory )\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> meshNode = fDagPath.node();\n\
        // Call the directModifier – No need to pre-process the\n\
        // mesh data again.\n\
        //\n\
        status = directModifier( meshNode );\n\
    }\n\
    else\n\
    {\n\
        // Call the redo on the DG and DAG modifiers\n\
        //\n\
        if( !fHasHistory )\n\
        {\n\
            status = fDagModifier.doIt();\n\
        }\n\
        status = fDGModifier.doIt();\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"implementing-a-polymodifiercmd-command\"></a><h2 id=\"implementing-a-polymodifiercmd-command\">Implementing a polyModifierCmd command</h2></div>\n\
<p>With a general understanding of what polyModifierCmd is capable of, we are faced with the issue of how to implement a command based on it. The rules are fairly straightforward. polyModifierCmd structures its process in a similar manner as Maya treats its nodes. It is here where the concept of a factory is introduced. The following sections introduce the polyModifierFty and polyModifierNode in the context of implementing a command based on polyModifierCmd. For further details on how these work, please see the respective source file.</p>\n\
<div class=\'section\'><a id=\"polymodifierfty\"></a><h3 id=\"polymodifierfty\">polyModifierFty</h3></div>\n\
<p>From the inner workings of polyModifierCmd, you see that there are two spots where we could potentially have redundant code: <span class=\'code\'>directModifier()</span> and inside the modifier node. Effectively they do the same thing, except have a different means of retrieving their inputs. To reduce code duplication, the concept of a factory is introduced. The factory exists solely as a class structure which implements a modification to a mesh. It possesses a basic interface through which the modifier can be called.</p>\n\
<p>To help guide you, a base factory class named polyModiferFty is provided from which a factory can be derived. Though it serves no functional purpose, it provides an outline through which you can implement your modification:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class polyModifierFty\n\
{\n\
    public:\n\
        polyModifierFty();\n\
        virtual ~polyModifierFty();\n\
        // Pure virtual doIt()\n\
        //\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doIt() = 0;\n\
};\n\
\n\
</pre></div><div class=\'section\'><a id=\"polymodifiernode\"></a><h3 id=\"polymodifiernode\">polyModifierNode</h3></div>\n\
<p>Similar to polyModifierFty, another guidance class is provided to give a framework for all modifier nodes to be used in association with polyModifierCmd. This class suggests things such as, the modifier node requires an <span class=\'code\'>inMesh</span> and <span class=\'code\'>outMesh</span> attribute to work:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class polyModifierNode\n\
{\n\
    public:\n\
        polyModifierNode();\n\
        virtual ~polyModifierNode();\n\
        // There needs to be an <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> handle declared for\n\
        // each attribute that the node will have. These handles\n\
        // are needed for getting and setting the attribute\n\
        // values later.\n\
        //\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> inMesh;\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> outMesh;\n\
};\n\
\n\
</pre></div><p>For further details on implementing a polyModifierCmd command, refer to both the splitUVCmd example (next) and the source code. Inside the source code a general set of guidelines for each class is provided.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";