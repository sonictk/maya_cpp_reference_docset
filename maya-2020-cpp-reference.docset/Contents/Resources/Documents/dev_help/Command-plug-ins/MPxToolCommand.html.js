var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxToolCommand</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MPxToolCommand</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"mpxtoolcommand\"></a></div>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxToolCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxToolCommand</a></span> is the base class for creating commands that can be executed from within a context. Tool commands are similar to regular commands in that they are defined with command flags and can be executed from the Maya command line. However, they must perform extra duties, as the actions taken by a context do not come from the normal Maya command mechanism but from inside the methods of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a></span> class. These duties are to alert Maya of the execution of the command so that the undo/redo and journalling mechanisms operate correctly on the command. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxToolCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxToolCommand</a></span> is a subclass of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> with the additional methods.</p>\n\
<p>If a context wants to perform its own command, it must register the command when the context and context command are registered. A context can only have one tool command associated with it.</p>\n\
<p>The following is an example of a tool command, the helixTool. As with the marqueeTool, the list of include files is omitted for brevity. See the helixTool.cpp file in the Developer Kit for the complete example.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#define NUMBER_OF_CVS 20\n\
class helixTool : public <a href=\"javascript:void(0)\" data-symbol=\"MPxToolCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxToolCommand</a>\n\
{\n\
    public:\n\
        helixTool(); \n\
        virtual ~helixTool(); \n\
        static void* creator();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> redoIt();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoIt();\n\
        bool isUndoable() const;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> finalize();\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> newSyntax();\n\
\n\
</pre></div><p>The set of methods on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxToolCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxToolCommand</a></span> are similar to those on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> but with the addition of <span class=\'code\'>finalize()</span>. The finalize method is used to create a string representing the command and its arguments.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        void setRadius( double newRadius );\n\
        void setPitch( double newPitch );\n\
        void setNumCVs( unsigned newNumCVs );\n\
        void setUpsideDown( bool newUpsideDown );\n\
\n\
</pre></div><p>These methods are necessary since the properties of the helix will be set from the context object.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    private:\n\
        double radius; // Helix radius\n\
        double pitch; // Helix pitch\n\
        unsigned numCV; // Helix number of CVs\n\
        bool upDown; // Helis upsideDown\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> path; // Dag path to the curve.\n\
        // Don’t save the pointer!\n\
};\n\
void* helixTool::creator()\n\
{\n\
    return new helixTool;\n\
}\n\
helixTool::~helixTool() {}\n\
\n\
</pre></div><p>These first two methods are identical to the earlier &quot;helix2&quot; example.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">helixTool::helixTool()\n\
{ \n\
    numCV = NUMBER_OF_CVS;\n\
    upDown = false;\n\
    setCommandString( &quot;helixToolCmd&quot; );\n\
}\n\
\n\
</pre></div><p>The constructor saves away the name of the MEL command for later use in the <span class=\'code\'>finalize()</span> method.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> helixTool::newSyntax()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> syntax;\n\
    syntax.addFlag(kPitchFlag, kPitchFlagLong,\n\
    MSyntax::kDouble);\n\
    syntax.addFlag(kRadiusFlag, kRadiusFlagLong,\n\
    MSyntax::kDouble);\n\
    syntax.addFlag(kNumberCVsFlag, kNumberCVsFlagLong,\n\
    MSyntax::kUnsigned);\n\
    syntax.addFlag(kUpsideDownFlag, kUpsideDownFlagLong,\n\
    MSyntax::kBoolean);\n\
    return syntax;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixTool::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a> &amp;args )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    status = parseArgs(args);\n\
    if (MS::kSuccess != status)\n\
        return status;\n\
    return redoIt();\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixTool::parseArgs(const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a> &amp;args)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a> argData(syntax(), args);\n\
    if (argData.isFlagSet(kPitchFlag)) {\n\
        double tmp;\n\
        status = argData.getFlagArgument(kPitchFlag, 0, tmp);\n\
        if (!status) {\n\
            status.perror(&quot;pitch flag parsing failed.&quot;);\n\
            return status;\n\
        }\n\
        pitch = tmp;\n\
    }\n\
    if (argData.isFlagSet(kRadiusFlag)) {\n\
        double tmp;\n\
        status = argData.getFlagArgument(kRadiusFlag, 0, tmp);\n\
        if (!status) {\n\
            status.perror(&quot;radius flag parsing failed.&quot;);\n\
            return status;\n\
        }\n\
        radius = tmp;\n\
    }\n\
    if (argData.isFlagSet(kNumberCVsFlag)) {\n\
        unsigned tmp;\n\
        status = argData.getFlagArgument(kNumberCVsFlag,\n\
            0, tmp);\n\
        if (!status) {\n\
            status.perror(&quot;numCVs flag parsing failed.&quot;);\n\
            return status;\n\
        }\n\
        numCV = tmp;\n\
    }\n\
    if (argData.isFlagSet(kUpsideDownFlag)) {\n\
        bool tmp;\n\
        status = argData.getFlagArgument(kUpsideDownFlag,\n\
            0, tmp);\n\
        if (!status) {\n\
            status.perror(&quot;upside down flag parsing failed.&quot;);\n\
            return status;\n\
        }\n\
        upDown = tmp;\n\
    }\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>This method is similar to the earlier helix example—it parses the arguments and uses them to set its internal state. In general, this command will be used through the UI, but since it is still a MEL command, it can be invoked from the MEL command shell.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixTool::redoIt()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
    const unsigned deg = 3; // Curve Degree\n\
    const unsigned ncvs = NUMBER_OF_CVS;// Number of CVs\n\
    const unsigned spans = ncvs - deg; // Number of spans\n\
    const unsigned nknots = spans+2*deg-1;// Number of knots\n\
    unsigned i;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a> controlVertices;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDoubleArray</a> knotSequences;\n\
    int upFactor;\n\
    if (upDown) upFactor = -1;\n\
    else upFactor = 1;\n\
    // Set up cvs and knots for the helix\n\
    //\n\
    for (i = 0; i &lt; ncvs; i++)\n\
        controlVertices.append( <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a>(\n\
        radius * cos( (double)i ),\n\
        upFactor * pitch * (double)i,\n\
        radius * sin( (double)i ) ) );\n\
    for (i = 0; i &lt; nknots; i++)\n\
        knotSequences.append( (double)i );\n\
    // Now create the curve\n\
    //\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve</a> curveFn;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> curve = curveFn.create( controlVertices,\n\
        knotSequences, deg, MFnNurbsCurve::kOpen,\n\
        false, false, <a href=\"javascript:void(0)\" data-symbol=\"MObject::kNullObj\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject::kNullObj</a>, &amp;stat );\n\
    if ( !stat )\n\
    {\n\
        stat.perror(&quot;Error creating curve&quot;);\n\
        return stat;\n\
    }\n\
    stat = curveFn.getPath( path );\n\
    return stat;\n\
}\n\
\n\
</pre></div><p>This is essentially the same as the earlier helix example.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixTool::undoIt()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat; \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> transform = path.transform();\n\
    stat = <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::removeFromModel\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#acccac5ce696c5ab724ff96947f46c41b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::removeFromModel</a>( transform );\n\
    return stat;\n\
}\n\
\n\
</pre></div><p>Again this is essentially the same as the earlier helix example. You should be noticing a pattern developing. It is quite easy to change a command into a tool. Little of the command has to be changed, additions just have to be made to hook the tool up to the UI.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool helixTool::isUndoable() const\n\
{\n\
    return true; \n\
}\n\
\n\
</pre></div><p>This tool is undoable.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixTool::finalize()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a> command;\n\
    command.addArg( commandString() );\n\
    command.addArg( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(kRadiusFlag) );\n\
    command.addArg( radius );\n\
    command.addArg( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(kPitchFlag) );\n\
    command.addArg( pitch );\n\
    command.addArg( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(kNumberCVsFlag) );\n\
    command.addArg( (int)numCV );\n\
    command.addArg( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(kUpsideDownFlag) );\n\
    command.addArg( upDown );\n\
    return <a href=\"javascript:void(0)\" data-symbol=\"MPxToolCommand::doFinalize\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_tool_command.html#a453a8fb7a2285d97888cf2a60fa64712&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxToolCommand::doFinalize</a>( command );\n\
}\n\
\n\
</pre></div><p>This method is the one noticeable addition to the tool which wasn’t necessary in the command. When a command is typed in it is easy to take it and print it out to a journal file. Since a tool is not typed in, but created through mouse input, no text string exists to be output to a journal file. The <span class=\'code\'>finalize()</span> method solves this by outputting a string when the tool has completed. It is necessary for you to call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxToolCommand::doFinalize()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_tool_command.html#a453a8fb7a2285d97888cf2a60fa64712&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_tool_command.html#adf6d293860cfea905a954f2931f7c3c5&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxToolCommand::doFinalize()</a></span> to have the command output to the journal file.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void helixTool::setRadius( double newRadius )\n\
{\n\
    radius = newRadius;\n\
}\n\
void helixTool::setPitch( double newPitch )\n\
{\n\
    pitch = newPitch;\n\
}\n\
void helixTool::setNumCVs( unsigned newNumCVs )\n\
{\n\
    numCV = newNumCVs;\n\
}\n\
void helixTool::setUpsideDown( double newUpsideDown )\n\
{\n\
    upDown = newUpsideDown;\n\
}\n\
const char helpString[] = &quot;Click and drag to draw helix&quot;;\n\
class helixContext : public <a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a>\n\
{\n\
\n\
</pre></div><p>This is the context which will be executing the helixTool command.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    public:\n\
        helixContext();\n\
        virtual void toolOnSetup( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doPress( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doDrag( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doRelease( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doEnterRegion( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
\n\
</pre></div><p>The set of methods are the same as for the marqueeTool example.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    private:\n\
        short startPos_x, startPos_y;\n\
        short endPos_x, endPos_y;\n\
        unsigned numCV;\n\
        bool upDown;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a> view;\n\
        GLdouble height,radius;\n\
};\n\
helixContext::helixContext() \n\
{\n\
    setTitleString( &quot;Helix Tool&quot; );\n\
}\n\
void helixContext::toolOnSetup( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; )\n\
{\n\
    setHelpString( helpString );\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixContext::doPress( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event )\n\
{\n\
    event.getPosition( startPos_x, startPos_y );\n\
    view = MGlobal::active3dView();\n\
    view.beginGL();\n\
    view.beginOverlayDrawing();\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>These three methods are essentially the same as the marqueeTool examples, the only difference being that <span class=\'code\'>doPress()</span> for the helixTool does not need to determine the modifier key state.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixContext::doDrag( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event )\n\
{\n\
    event.getPosition( endPos_x, endPos_y );\n\
    view.clearOverlayPlane();\n\
    glIndexi( 2 );\n\
    int upFactor;\n\
    if (upDown) upFactor = 1;\n\
    else upFactor = -1;\n\
    // Draw the guide cylinder\n\
    //\n\
    glMatrixMode( GL_MODELVIEW );\n\
    glPushMatrix();\n\
    glRotatef( upFactor * 90.0, 1.0f, 0.0f, 0.0f );\n\
    GLUquadricObj *qobj = gluNewQuadric();\n\
    gluQuadricDrawStyle(qobj, GLU_LINE);\n\
    GLdouble factor = (GLdouble)numCV;\n\
    radius = fabs(endPos_x - startPos_x)/factor + 0.1;\n\
    height = fabs(endPos_y - startPos_y)/factor + 0.1;\n\
    gluCylinder( qobj, radius, radius, height, 8, 1 );\n\
    glPopMatrix();\n\
\n\
</pre></div><p>This code draws a cylinder in the current view defining the outlines of the helix that will be generated.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#ifndef _WIN32\n\
    glXSwapBuffers(view.display(), view.window() );\n\
#else\n\
    SwapBuffers(view.deviceContext() );\n\
#endif\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixContext::doRelease( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; )\n\
{\n\
    // Clear the overlay plane &amp; restore from overlay drawing\n\
    //\n\
    view.clearOverlayPlane();\n\
    view.endOverlayDrawing();\n\
    view.endGL();\n\
\n\
</pre></div><p>The user has released the mouse so this code cleans up the OpenGL drawing.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    helixTool * cmd = (helixTool*)newToolCommand();\n\
    cmd-&gt;setPitch( height/NumCVs );\n\
    cmd-&gt;setRadius( radius );\n\
    cmd-&gt;setNumCVs( numCV );\n\
    cmd-&gt;setUpsideDown( upDown );\n\
    cmd-&gt;redoIt();\n\
    cmd-&gt;finalize();\n\
\n\
</pre></div><p>This code creates the actual helixTool command, by calling the helixTool::creator method that you will register later, sets the radius and pitch, and then calls the <span class=\'code\'>redoIt()</span> method to generate the data. As a last step, the <span class=\'code\'>finalize()</span> method is called to ensure that this command is written out to the journal file.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixContext::doEnterRegion( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; )\n\
{\n\
    return setHelpString( helpString );\n\
}\n\
void helixContext::getClassName( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> &amp;name ) const\n\
{\n\
    name.set(&quot;helix&quot;);\n\
}\n\
\n\
</pre></div><p>The next four methods are used in the interaction between the context and the contextCommand’s edit and query methods. These will be called by the tool property sheet for the context. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MToolsInfo::setDirtyFlag()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_tools_info.html#a5f1bc27778c881159a7e486934261015&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MToolsInfo::setDirtyFlag()</a></span> method alerts the tool property sheet so it can redraw itself with the new property values for the context.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void helixContext::setNumCVs( unsigned newNumCVs )\n\
{\n\
    numCV = newNumCVs;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MToolsInfo::setDirtyFlag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_tools_info.html#a5f1bc27778c881159a7e486934261015&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MToolsInfo::setDirtyFlag</a>(*this);\n\
}\n\
void helixContext::setUpsideDown( bool newUpsideDown )\n\
{\n\
    upDown = newUpsideDown;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MToolsInfo::setDirtyFlag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_tools_info.html#a5f1bc27778c881159a7e486934261015&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MToolsInfo::setDirtyFlag</a>(*this);\n\
}\n\
unsigned helixContext::numCVs()\n\
{\n\
    return numCV;\n\
}\n\
bool helixContext::upsideDown()\n\
{\n\
    return upDown;\n\
}\n\
\n\
</pre></div><p>The next class and implementation repeats the code from the marqueeTool example. This class is necessary to create instances of the tool context.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class helixContextCmd : public <a href=\"javascript:void(0)\" data-symbol=\"MPxContextCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContextCommand</a>\n\
{\n\
    public: \n\
        helixContextCmd();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doEditFlags();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doQueryFlags();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a>* makeObj();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> appendSyntax();\n\
        static void* creator();\n\
    protected:\n\
        helixContext * fHelixContext;\n\
};\n\
helixContextCmd::helixContextCmd() {}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a>* helixContextCmd::makeObj()\n\
{\n\
    fHelixContext = new helixContext();\n\
    return fHelixContext;\n\
}\n\
void* helixContextCmd::creator()\n\
{\n\
    return new helixContextCmd;\n\
}\n\
\n\
</pre></div><p>The next two methods handle the argument parsing for the command. There are two types of arguments—those which make modifications to the properties of a context, and those which query the properties of a context.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Argument parsing is done through the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContextCommand::parser()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context_command.html#aa367dd5b853c97af707d0fb44aa37971&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContextCommand::parser()</a></span> method which returns an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgParser</a></span>. This class is analogous to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a></span> class that is used with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> class.</p>\n\
</blockquote>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixContextCmd::doEditFlags()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgParser</a> argData = parser();\n\
    if (argData.isFlagSet(kNumberCVsFlag)) {\n\
        unsigned numCVs;\n\
        status = argData.getFlagArgument(kNumberCVsFlag,\n\
            0, numCVs);\n\
        if (!status) {\n\
            status.perror(&quot;numCVs flag parsing failed.&quot;);\n\
            return status;\n\
        }\n\
        fHelixContext-&gt;setNumCVs(numCVs);\n\
    }\n\
    if (argData.isFlagSet(kUpsideDownFlag)) {\n\
        bool upsideDown;\n\
        status = argData.getFlagArgument(kUpsideDownFlag,\n\
            0, upsideDown);\n\
        if (!status) {\n\
            status.perror(&quot;upsideDown flag parsing failed.&quot;);\n\
            return status;\n\
        }\n\
        fHelixContext-&gt;setUpsideDown(upsideDown);\n\
    }\n\
\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixContextCmd::doQueryFlags()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgParser</a> argData = parser();\n\
    if (argData.isFlagSet(kNumberCVsFlag)) {\n\
        setResult((int) fHelixContext-&gt;numCVs());\n\
    }\n\
    if (argData.isFlagSet(kUpsideDownFlag)) {\n\
        setResult(fHelixContext-&gt;upsideDown());\n\
    }\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helixContextCmd::appendSyntax()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> mySyntax = syntax();\n\
    if (MS::kSuccess != mySyntax.addFlag(kNumberCVsFlag,\n\
        kNumberCVsFlagLong, MSyntax::kUnsigned)) {\n\
            return MS::kFailure;\n\
    }\n\
    if (MS::kSuccess != mySyntax.addFlag(kUpsideDownFlag,\n\
        kUpsideDownFlagLong, MSyntax::kBoolean)) {\n\
            return MS::kFailure;\n\
    }\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, &quot;Autodesk&quot;, &quot;1.0&quot;, &quot;Any&quot;);\n\
    // Register the context creation command and the tool\n\
    // command that the helixContext will use.\n\
    // \n\
    status = plugin.registerContextCommand(\n\
        &quot;helixToolContext&quot;, helixContextCmd::creator,\n\
        &quot;helixToolCmd&quot;, helixTool::creator,\n\
        helixTool::newSyntax);\n\
    if (!status) {\n\
        status.perror(&quot;registerContextCommand&quot;);\n\
        return status;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>The <span class=\'code\'>initializePlugin()</span> method registers both the helix command and the context via a single register call.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    // Deregister the tool command and the context\n\
    // creation command.\n\
    //\n\
    status = plugin.deregisterContextCommand(\n\
        &quot;helixToolContext&quot; &quot;helixToolCmd&quot;);\n\
    if (!status) {\n\
        status.perror(&quot;deregisterContextCommand&quot;);\n\
        return status;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>MEL code similar to the marqueeTool example’s is necessary to attach the helixTool to the UI.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";