var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DAG walking example</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>DAG walking example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"dag-walking-example\"></a></div>\n\
<p>The following example is the scanDagSyntaxCmd example. It demonstrates iterating through the DAG in either a depth first, or a breadth first manner. This code makes a good basis for many DAG walking plug-ins, in particular those written as file translators.</p>\n\
<p>As with previous examples, the list of include files is omitted for brevity. See the <span class=\'code\'>scanDagSyntaxCmd.cpp</span> file in the <span class=\'code\'>devkit/plug-ins</span> folder of your Developer Kit installation (see <a href=\'#!/url=./dev_help/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Setting up your build environment: Windows environment (64-bit)</a>) for the complete example.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class scanDagSyntax: public <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a>\n\
{\n\
 public:\n\
     scanDagSyntax() {};\n\
     virtual ~scanDagSyntax();\n\
     static void* creator();\n\
     static <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> newSyntax();\n\
     virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; );\n\
     //This is a simple example so the undoIt() and redoIt() methods are not implemented. \n\
 private:\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> parseArgs( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args,\n\
     MItDag::TraversalType&amp; traversalType,\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MFn::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::Type</a>&amp; filter, bool &amp; quiet);\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doScan( const MItDag::TraversalType traversalType,\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MFn::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::Type</a> filter, bool quiet);\n\
     void printTransformData(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a>&amp; dagPath, bool quiet);\n\
};\n\
\n\
scanDagSyntax::~scanDagSyntax() {}\n\
void* scanDagSyntax::creator()\n\
{\n\
    return new scanDagSyntax;\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> scanDagSyntax::newSyntax()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> syntax;\n\
    syntax.addFlag(kBreadthFlag, kBreadthFlagLong);\n\
    syntax.addFlag(kDepthFlag, kDepthFlagLong);\n\
    syntax.addFlag(kCameraFlag, kCameraFlagLong);\n\
    syntax.addFlag(kLightFlag, kLightFlagLong);\n\
    syntax.addFlag(kNurbsSurfaceFlag, kNurbsSurfaceFlagLong);\n\
    syntax.addFlag(kQuietFlag, kQuietFlagLong);\n\
    return syntax;\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> scanDagSyntax::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args )\n\
{\n\
     MItDag::TraversalType traversalType = MItDag::kDepthFirst;\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MFn::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::Type</a> filter = <a href=\"javascript:void(0)\" data-symbol=\"MFn::kInvalid\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a94dd08feda7b2cf0ff8262312c4fcc09&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kInvalid</a>;\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
     bool quiet = false;\n\
\n\
</pre></div><p>The DAG iterator being used later can be set to only iterate across objects of a particular type (for example cameras). If the filter mode is set to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFn::kInvalid\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a94dd08feda7b2cf0ff8262312c4fcc09&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kInvalid</a></span>, no filtering will be done and all DAG nodes will be iterated across.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">     status = parseArgs ( args, traversalType, filter, quiet );\n\
     if (!status)\n\
         return status;\n\
     return doScan( traversalType, filter, quiet);\n\
};\n\
//The doIt() method is simply calling a few auxiliary methods which do the real work.\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> scanDagSyntax::parseArgs( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args,\n\
                                  MItDag::TraversalType&amp; traversalType,\n\
                                  <a href=\"javascript:void(0)\" data-symbol=\"MFn::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::Type</a>&amp; filter,\n\
                                  bool &amp; quiet)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a> argData(syntax(), args);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> arg;\n\
    if (argData.isFlagSet(kBreadthFlag))\n\
        traversalType = MItDag::kBreadthFirst;\n\
    else if (argData.isFlagSet(kDepthFlag))\n\
        traversalType = MItDag::kDepthFirst;\n\
    if (argData.isFlagSet(kCameraFlag))\n\
        filter = <a href=\"javascript:void(0)\" data-symbol=\"MFn::kCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7af2731fae06310295129a8fb3dba5fbb2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kCamera</a>;\n\
    else if (argData.isFlagSet(kLightFlag))\n\
        filter = <a href=\"javascript:void(0)\" data-symbol=\"MFn::kLight\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a4b1026889ac8a8c906a6f3a53301bbbc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kLight</a>;\n\
    else if (argData.isFlagSet(kNurbsSurfaceFlag))\n\
        filter = <a href=\"javascript:void(0)\" data-symbol=\"MFn::kNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a016a93d2c00725d6ca8021dffbd2a0a8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kNurbsSurface</a>;\n\
    if (argData.isFlagSet(kQuietFlag))\n\
        quiet = true;\n\
    return stat;\n\
}\n\
\n\
</pre></div><p>The DAG iterator can either iterate across the DAG depth first or breadth first. This simple example only filters on cameras, lights, and NURBS surfaces, but it is possible to iterate across any type in <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFn::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::Type</a></span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> scanDagSyntax::doScan( const MItDag::TraversalType traversalType,\n\
                               <a href=\"javascript:void(0)\" data-symbol=\"MFn::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::Type</a> filter,\n\
                               bool quiet)\n\
{ \n\
\n\
</pre></div><p>This method will do all the real work of this command. It uses the traversal type (depth or breadth first) and the filter type to initialize an MItDag (a DAG iterator) to walk across the DAG.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dag.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItDag</a> dagIterator( traversalType, filter, &amp;status);\n\
\n\
</pre></div><p>The DAG iterator is initialized looking at the DAG. It will walk the DAG downwards.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    if ( !status) {\n\
        status.perror(&quot;<a href=\"javascript:void(0)\" data-symbol=\"MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dag.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItDag</a> constructor&quot;);\n\
        return status;\n\
    }\n\
 // Scan the entire DAG and output the name and depth of each node\n\
\n\
    if (traversalType == MItDag::kBreadthFirst)\n\
        if (!quiet)\n\
            cout &lt;&lt; endl &lt;&lt; &quot;Starting Breadth First scan of the Dag&quot;;\n\
        else\n\
    if (!quiet)\n\
        cout &lt;&lt; endl &lt;&lt; &quot;Starting Depth First scan of the Dag&quot;;\n\
\n\
</pre></div><p>Breadth first walking of the DAG means that siblings will be visited before children, while depth first means that children will be visited before siblings.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    switch (filter) {\n\
    case MFn::kCamera:\n\
        if (!quiet)\n\
            cout &lt;&lt; &quot;: Filtering for Cameras\\n&quot;;\n\
        break;\n\
    case MFn::kLight:\n\
        if (!quiet)\n\
            cout &lt;&lt; &quot;: Filtering for Lights\\n&quot;;\n\
        break;\n\
    case MFn::kNurbsSurface:\n\
        if (!quiet)\n\
            cout &lt;&lt; &quot;: Filtering for Nurbs Surfaces\\n&quot;;\n\
        break;\n\
    default:\n\
        cout &lt;&lt; endl;\n\
    }\n\
    int objectCount = 0;\n\
    for ( ; !dagIterator.isDone(); dagIterator.next() ) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> dagPath;\n\
        status = dagIterator.getPath(dagPath);\n\
        if ( !status ) {\n\
            status.perror(&quot;<a href=\"javascript:void(0)\" data-symbol=\"MItDag::getPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dag.html#adfb40b1f56af23ad94c4ca77c9a147b5&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItDag::getPath</a>&quot;);\n\
            continue;\n\
        }\n\
\n\
</pre></div><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag::getPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dag.html#adfb40b1f56af23ad94c4ca77c9a147b5&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html#aa1899b6f39c0663b690247c441abad11&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItDag::getPath()</a></span> gets the reference to the object that the iterator is currently on. This DAG path can then be used in a function set to operate on the object. In general it is not a good idea to rearrange the DAG from with an iterator.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDagNode</a> dagNode(dagPath, &amp;status);\n\
        if ( !status ) {\n\
            status.perror(&quot;<a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDagNode</a> constructor&quot;);\n\
            continue;\n\
        }\n\
        if (!quiet)\n\
            cout &lt;&lt; dagNode.name() &lt;&lt; &quot;: &quot; &lt;&lt; dagNode.typeName() &lt;&lt; endl;\n\
        if (!quiet)\n\
            cout &lt;&lt; &quot; dagPath: &quot; &lt;&lt; dagPath.fullPathName() &lt;&lt; endl;\n\
        objectCount += 1;\n\
        if (dagPath.hasFn(<a href=\"javascript:void(0)\" data-symbol=\"MFn::kCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7af2731fae06310295129a8fb3dba5fbb2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kCamera</a>)) {\n\
\n\
</pre></div><p>This determines if the object the iterator is currently visiting is a camera or not, and if it is, the following code outputs camera specific information.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">            <a href=\"javascript:void(0)\" data-symbol=\"MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCamera</a> camera (dagPath, &amp;status);\n\
            if ( !status ) {\n\
                status.perror(&quot;<a href=\"javascript:void(0)\" data-symbol=\"MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCamera</a> constructor&quot;);\n\
                continue;\n\
            }\n\
            // Get the translation/rotation/scale data\n\
            printTransformData(dagPath, quiet);\n\
            // Extract some interesting Camera data\n\
            if (!quiet)\n\
            {\n\
                cout &lt;&lt; &quot; eyePoint: &quot;\n\
                     &lt;&lt; camera.eyePoint(MSpace::kWorld) &lt;&lt; endl;\n\
                cout &lt;&lt; &quot; upDirection: &quot;\n\
                     &lt;&lt; camera.upDirection(MSpace::kWorld) &lt;&lt; endl;\n\
                cout &lt;&lt; &quot; viewDirection: &quot;\n\
                     &lt;&lt; camera.viewDirection(MSpace::kWorld) &lt;&lt; endl;\n\
                cout &lt;&lt; &quot; aspectRatio: &quot; &lt;&lt; camera.aspectRatio() &lt;&lt; endl;\n\
                cout &lt;&lt; &quot; horizontalFilmAperture: &quot;\n\
                     &lt;&lt; camera.horizontalFilmAperture() &lt;&lt; endl;\n\
                cout &lt;&lt; &quot; verticalFilmAperture: &quot;\n\
                     &lt;&lt; camera.verticalFilmAperture() &lt;&lt; endl;\n\
            }\n\
        } \n\
        else if (dagPath.hasFn(<a href=\"javascript:void(0)\" data-symbol=\"MFn::kLight\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a4b1026889ac8a8c906a6f3a53301bbbc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kLight</a>)) {\n\
\n\
</pre></div><p>If the object is a light, this code outputs light specific information.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">            <a href=\"javascript:void(0)\" data-symbol=\"MFnLight\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_light.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnLight</a> light (dagPath, &amp;status);\n\
            if ( !status ) {\n\
                    status.perror(&quot;<a href=\"javascript:void(0)\" data-symbol=\"MFnLight\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_light.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnLight</a> constructor&quot;);\n\
                    continue;\n\
            }\n\
            // Get the translation/rotation/scale data\n\
            printTransformData(dagPath, quiet);\n\
            // Extract some interesting Light data\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MColor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_color.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MColor</a> color;\n\
            color = light.color();\n\
            if (!quiet)\n\
            {\n\
                cout &lt;&lt; &quot; color: [&quot;\n\
                &lt;&lt; color.r &lt;&lt; &quot;, &quot;\n\
                &lt;&lt; color.g &lt;&lt; &quot;, &quot;\n\
                &lt;&lt; color.b &lt;&lt; &quot;]\\n&quot;;\n\
            }\n\
            color = light.shadowColor();\n\
            if (!quiet)\n\
            {\n\
                cout &lt;&lt; &quot; shadowColor: [&quot;\n\
                &lt;&lt; color.r &lt;&lt; &quot;, &quot;\n\
                &lt;&lt; color.g &lt;&lt; &quot;, &quot;\n\
                &lt;&lt; color.b &lt;&lt; &quot;]\\n&quot;;\n\
                cout &lt;&lt; &quot; intensity: &quot; &lt;&lt; light.intensity() &lt;&lt; endl;\n\
            }\n\
        } \n\
        else if (dagPath.hasFn(<a href=\"javascript:void(0)\" data-symbol=\"MFn::kNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a016a93d2c00725d6ca8021dffbd2a0a8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kNurbsSurface</a>)) {\n\
            //Finally, if the object is a NURBS surface, surface specific information is output.\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurface</a> surface (dagPath, &amp;status);\n\
            if ( !status ) {\n\
                status.perror(&quot;<a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurface</a> constructor&quot;);\n\
                continue;\n\
            }\n\
            // Get the translation/rotation/scale data\n\
            printTransformData(dagPath, quiet);\n\
            // Extract some interesting Surface data\n\
            if (!quiet)\n\
            {\n\
                cout &lt;&lt; &quot; numCVs: &quot;\n\
                     &lt;&lt; surface.numCVsInU()\n\
                     &lt;&lt; &quot; * &quot;\n\
                     &lt;&lt; surface.numCVsInV()\n\
                     &lt;&lt; endl;\n\
                cout &lt;&lt; &quot; numKnots: &quot;\n\
                     &lt;&lt; surface.numKnotsInU()\n\
                     &lt;&lt; &quot; * &quot;\n\
                     &lt;&lt; surface.numKnotsInV()\n\
                     &lt;&lt; endl;\n\
                cout &lt;&lt; &quot; numSpans: &quot;\n\
                     &lt;&lt; surface.numSpansInU()\n\
                     &lt;&lt; &quot; * &quot;\n\
                     &lt;&lt; surface.numSpansInV()\n\
                     &lt;&lt; endl;\n\
            }\n\
        } \n\
        else {\n\
\n\
</pre></div><p>For any other type of DAG node, just the transformation information is printed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">            // Get the translation/rotation/scale data\n\
            printTransformData(dagPath, quiet);\n\
        }\n\
    }\n\
    if (!quiet)\n\
    {\n\
        cout.flush();\n\
    }\n\
    setResult(objectCount);\n\
    return MS::kSuccess;\n\
}\n\
\n\
void scanDagSyntax::printTransformData(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a>&amp; dagPath, bool quiet)\n\
{\n\
    //This method simply determines the transformation information on the DAG node and prints it out.\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> transformNode = dagPath.transform(&amp;status);\n\
    // This node has no transform - i.e., it’s the world node\n\
    if (!status &amp;&amp; status.statusCode () == <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kInvalidParameter\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af8c5f748892ec74b32719c8fba7767e1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kInvalidParameter</a>)\n\
        return;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDagNode</a> transform (transformNode, &amp;status);\n\
    if (!status) {\n\
        status.perror(&quot;<a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDagNode</a> constructor&quot;);\n\
        return;\n\
    }\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MTransformationMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_transformation_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTransformationMatrix</a> matrix (transform.transformationMatrix());\n\
    if (!quiet)\n\
    {\n\
        cout &lt;&lt; &quot; translation: &quot; &lt;&lt; matrix.translation(MSpace::kWorld)\n\
            &lt;&lt; endl;\n\
    }\n\
    double threeDoubles[3];\n\
    MTransformationMatrix::RotationOrder rOrder;\n\
    matrix.getRotation (threeDoubles, rOrder, MSpace::kWorld);\n\
    if (!quiet)\n\
    {\n\
        cout &lt;&lt; &quot; rotation: [&quot;\n\
             &lt;&lt; threeDoubles[0] &lt;&lt; &quot;, &quot;\n\
             &lt;&lt; threeDoubles[1] &lt;&lt; &quot;, &quot;\n\
             &lt;&lt; threeDoubles[2] &lt;&lt; &quot;]\\n&quot;;\n\
    }\n\
    matrix.getScale (threeDoubles, MSpace::kWorld);\n\
    if (!quiet)\n\
    {\n\
        cout &lt;&lt; &quot; scale: [&quot;\n\
             &lt;&lt; threeDoubles[0] &lt;&lt; &quot;, &quot;\n\
             &lt;&lt; threeDoubles[1] &lt;&lt; &quot;, &quot;\n\
             &lt;&lt; threeDoubles[2] &lt;&lt; &quot;]\\n&quot;;\n\
    }\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{ \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin ( obj, &quot;Autodesk - Example&quot;, &quot;2.0&quot;, &quot;Any&quot; );\n\
    status = plugin.registerCommand( &quot;scanDagSyntax&quot;, \n\
    scanDagSyntax::creator,\n\
    scanDagSyntax::newSyntax ); \n\
    return status;\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    status = plugin.deregisterCommand( &quot;scanDagSyntax&quot; );\n\
    return status;\n\
}\n\
\n\
</pre></div><p>The plug-in finishes with the usual <span class=\'code\'>initializePlugin</span> and <span class=\'code\'>uninitializePlugin</span> methods.</p>\n\
<p>This plug-in can easily be modified for use as a file translator, or any other type of plug-in which needs to visit the DAG nodes in the model.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";