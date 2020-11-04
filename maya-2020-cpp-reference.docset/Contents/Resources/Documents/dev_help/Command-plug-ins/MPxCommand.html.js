var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxCommand</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MPxCommand</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"mpxcommand\"></a></div>\n\
<p>The new hello command introduced earlier uses a proxy object to add new functionality to Maya (see <a href=\'#!/url=./dev_help/Command-plug-ins/MFnPlugin.html\' title=\'\'>MFnPlugin</a>). This proxy object is derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span> which provides all the functionality necessary for Maya to use the command as if it were built in.</p>\n\
<p>A minimum of two methods must be defined. These are the <em>doIt()</em> method and the <em>creator</em>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class hello : public <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a>\n\
{\n\
public:\n\
    Status doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args );\n\
    static void* creator();\n\
};\n\
\n\
</pre></div><div class=\'section\'><a id=\"doit-and-redoit-methods\"></a><h2 id=\"doit-and-redoit-methods\">doIt() and redoIt() methods</h2></div>\n\
<p>The <span class=\'code\'>doIt()</span> method is a pure virtual method, and since there is no creator defined in the base class, you must define both <span class=\'code\'>doIt()</span> and creator.</p>\n\
<p>For simple commands, the <span class=\'code\'>doIt()</span> method performs the actions of the command. In more complex commands, the <span class=\'code\'>doIt()</span> method parses the argument list, the selection list, and whatever else may be necessary. It then uses this information to set data internal to the command before calling the <span class=\'code\'>redoIt()</span> method, which does the bulk of the work. This avoids code duplication between the <span class=\'code\'>doIt()</span> and <span class=\'code\'>redoIt()</span> methods.</p>\n\
<div class=\'section\'><a id=\"verifying-when-methods-are-called\"></a><h3 id=\"verifying-when-methods-are-called\">Verifying when methods are called</h3></div>\n\
<p>The following is a simple plug-in that outputs a string when any of its methods are called by Maya. You can use it to see when the methods are called.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &lt;stdio.h&gt;\n\
#include &lt;maya/MString.h&gt;\n\
#include &lt;maya/MArgList.h&gt;\n\
#include &lt;maya/MFnPlugin.h&gt;\n\
#include &lt;maya/MPxCommand.h&gt;\n\
#include &lt;maya/MIOStream.h&gt;\n\
class commandExample : public <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a>\n\
{\n\
    public:\n\
        commandExample();\n\
        virtual ~commandExample();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> redoIt();\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoIt();\n\
        bool isUndoable() const;\n\
        static void* creator();\n\
};\n\
commandExample::commandExample() {\n\
    cout &lt;&lt; &quot;In commandExample::commandExample()\\n&quot;;\n\
}\n\
commandExample::~commandExample() {\n\
    cout &lt;&lt; &quot;In commandExample::~commandExample()\\n&quot;;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> commandExample::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; ) {\n\
    cout &lt;&lt; &quot;In commandExample::doIt()\\n&quot;;\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> commandExample::redoIt() {\n\
    cout &lt;&lt; &quot;In commandExample::redoIt()\\n&quot;;\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> commandExample::undoIt() {\n\
    cout &lt;&lt; &quot;In commandExample::undoIt()\\n&quot;;\n\
    return MS::kSuccess;\n\
}\n\
bool commandExample::isUndoable() const {\n\
    cout &lt;&lt; &quot;In commandExample::isUndoable()\\n&quot;;\n\
    return true;\n\
}\n\
void* commandExample::creator() {\n\
    cout &lt;&lt; &quot;In commandExample::creator()\\n&quot;;\n\
    return new commandExample();\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, &quot;My plug-in&quot;, &quot;1.0&quot;, &quot;Any&quot; );\n\
    plugin.registerCommand( &quot;commandExample&quot;, commandExample::creator );\n\
    cout &lt;&lt; &quot;In initializePlugin()\\n&quot;;\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    plugin.deregisterCommand( &quot;commandExample&quot; );\n\
    cout &lt;&lt; &quot;In uninitializePlugin()\\n&quot;;\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>When you first load this plug-in, notice that &quot;In initializePlugin()&quot; is printed immediately. If you then type &quot;commandExample&quot; in the command window you will see:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">In commandExample::creator()\n\
In commandExample::commandExample()\n\
In commandExample::doIt()\n\
In commandExample::isUndoable()\n\
\n\
</pre></div><p>Note that the destructor is not called. This is because the command object remains indefinitely so that it can be undone, or redone (after being undone).</p>\n\
<p>This is how Maya’s undo mechanism works. Command objects maintain information which allows them to undo themselves when necessary. The destructor is called when the command falls off the end of the undo queue, it is undone and not redone, or the plug-in is unloaded.</p>\n\
<p>If you now use Edit &gt; Undo (or you use the MEL undo command) and Edit &gt; Redo (or you use the MEL redo command), the <span class=\'code\'>undoIt()</span> and <span class=\'code\'>redoIt()</span> methods of the command get called when these menu items are invoked.</p>\n\
<p>If you modify this example so that the <span class=\'code\'>isUndoable()</span> method returns false rather than true (remember to unload the plug-in before recompiling) when you run it, the output becomes:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">In commandExample::creator()\n\
In commandExample::commandExample()\n\
In commandExample::doIt()\n\
In commandExample::isUndoable()\n\
In commandExample::~commandExample()\n\
\n\
</pre></div><p>In this case the destructor is called immediately since the command cannot be undone. Maya treats a non-undoable command as an action that does not affect the scene in any way. This means that no information needs to be saved after the command executes, and when undoing and redoing commands, it does not need to be executed since it does not change anything.</p>\n\
<div class=\'section\'><a id=\"helix-example-with-undo-and-redo\"></a><h3 id=\"helix-example-with-undo-and-redo\">Helix example with undo and redo</h3></div>\n\
<p>The following example is another implementation of the helix plug-in. This version is implemented as a full command with undo and redo. It works by taking a selected curve and turning it into a helix.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &lt;stdio.h&gt;\n\
#include &lt;math.h&gt;\n\
#include &lt;maya/MFnPlugin.h&gt;\n\
#include &lt;maya/MFnNurbsCurve.h&gt;\n\
#include &lt;maya/MPointArray.h&gt;\n\
#include &lt;maya/MDoubleArray.h&gt;\n\
#include &lt;maya/MPoint.h&gt;\n\
#include &lt;maya/MSelectionList.h&gt;\n\
#include &lt;maya/MItSelectionList.h&gt;\n\
#include &lt;maya/MItCurveCV.h&gt;\n\
#include &lt;maya/MGlobal.h&gt;\n\
#include &lt;maya/MDagPath.h&gt;\n\
#include &lt;maya/MString.h&gt;\n\
#include &lt;maya/MPxCommand.h&gt;\n\
#include &lt;maya/MArgList.h&gt;\n\
class helix2 : public <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a> {\n\
public:\n\
    helix2();\n\
    virtual ~helix2();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> redoIt();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> undoIt();\n\
    bool isUndoable() const;\n\
    static void* creator();\n\
\n\
</pre></div><p>The command starts out as the previous example, declaring the methods it will be defining.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    private:\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> fDagPath;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a> fCVs;\n\
    double radius;\n\
    double pitch;\n\
};\n\
\n\
</pre></div><p>This command will be modifying the model. So that it will be able to undo the changes it makes, it allocates space to store the original definition of the curve. It also stores the description of the helix so that it can reproduce it if the redoIt method is called.</p>\n\
<p>It is important to notice that the command does not store a pointer to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span>, but rather uses an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a></span> to reference the curve for undo and redo. An <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> is not guaranteed to be valid the next time your command is executed. As a result, if you had used an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span>, Maya would likely core dump when performing your <span class=\'code\'>undoIt()</span> or <span class=\'code\'>redoIt()</span>. An <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a></span> however, being simply a description of the path to the curve, is guaranteed to be correct whenever your command is executed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void* helix2::creator() {\n\
    return new helix2;\n\
}\n\
\n\
</pre></div><p>The creator simply returns an instance of the object.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">helix2::helix2() : radius( 4.0 ), pitch( 0.5 ) {}\n\
\n\
</pre></div><p>The constructor initializes the radius and pitch.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">helix2::~helix2() {}\n\
\n\
</pre></div><p>The destructor does not need to do anything since the private data will be cleaned up automatically.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Data owned by Maya should not be deleted.</p>\n\
</blockquote>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helix2::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args ) {\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    // Parse the arguments.\n\
    for ( int i = 0; i &lt; args.length(); i++ )\n\
        if ( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>( &quot;-p&quot; ) == args.asString( i, &amp;status )\n\
            &amp;&amp; MS::kSuccess == status )\n\
        {\n\
            double tmp = args.asDouble( ++i, &amp;status );\n\
            if ( MS::kSuccess == status )\n\
                pitch = tmp;\n\
        }\n\
        else if ( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>( &quot;-r&quot; ) == args.asString( i, &amp;status )\n\
            &amp;&amp; MS::kSuccess == status )\n\
        {\n\
            double tmp = args.asDouble( ++i, &amp;status );\n\
            if ( MS::kSuccess == status )\n\
                radius = tmp;\n\
        }\n\
        else\n\
        {\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> msg = &quot;Invalid flag: &quot;;\n\
            msg += args.asString( i );\n\
            displayError( msg );\n\
            return MS::kFailure;\n\
        }\n\
\n\
</pre></div><p>As before, this simply parses the arguments passed into the <span class=\'code\'>doIt()</span> method and uses them to set the internal radius and pitch fields which will be used by the <span class=\'code\'>redoIt()</span> method. The <span class=\'code\'>doIt()</span> method is the only one that receives arguments. The <span class=\'code\'>undoIt()</span> and <span class=\'code\'>redoIt()</span> methods each take their data from internal data of the command itself.</p>\n\
<p>In the final else-clause, the <span class=\'code\'>displayError()</span> method, inherited from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a></span>, outputs the message in the command window and in the command output window. Messages output with <span class=\'code\'>displayError()</span> are prefixed with &quot;Error:&quot;. Another option is <span class=\'code\'>displayWarning()</span> which would prefix the message with &quot;Warning:&quot;.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    // Get the first selected curve from the selection list.\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a> slist;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::getActiveSelectionList</a>( slist );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItSelectionList</a> list( slist, <a href=\"javascript:void(0)\" data-symbol=\"MFn::kNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a9366a44db1c93f593f8e65fcbec6a1b9&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::kNurbsCurve</a>, &amp;status );\n\
    if (MS::kSuccess != status) {\n\
        displayError( &quot;Could not create selection list iterator&quot; );\n\
        return status;\n\
    }\n\
    if (list.isDone()) {\n\
        displayError( &quot;No curve selected&quot; );\n\
        return MS::kFailure;\n\
    }\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> component;\n\
    list.getDagPath( fDagPath, component );\n\
\n\
</pre></div><p>This code gets the first curve object off the selection list. The fDagPath field of the command is set to the current selection item. See <a href=\'#!/url=./dev_help/Selecting-with-the-API/MItSelectionList.html\' title=\'\'>MItSelectionList</a> for more information.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return redoIt();\n\
}\n\
\n\
</pre></div><p>Once the internal data of the command is set, the <span class=\'code\'>redoIt()</span> method is called. The <span class=\'code\'>doIt()</span> method could perform the necessary actions itself, but these actions are always identical to those performed by <span class=\'code\'>redoIt()</span> so, having <span class=\'code\'>doIt()</span> call <span class=\'code\'>redoIt()</span> reduces code duplication.</p>\n\
<p>You might wonder why <span class=\'code\'>doIt()</span> calls <span class=\'code\'>redoIt()</span> and not the other way around. Although this is possible—the redoIt() method could take the cached data and turn it into an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a></span> which it could then pass to doIt()—it would be far less efficient.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helix2::redoIt()\n\
{\n\
    unsigned i, numCVs;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve</a> curveFn( fDagPath );\n\
    numCVs = curveFn.numCVs();\n\
    status = curveFn.getCVs( fCVs );\n\
    if ( MS::kSuccess != status )\n\
    {\n\
        displayError( &quot;Could not get curve’s CVs&quot; );\n\
        return MS::kFailure;\n\
    }\n\
\n\
</pre></div><p>This code gets the CVs from the selected curve and stores them in the command’s internal <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a></span>. These stored CV positions could then be used if the undoIt() method is called to return the curve to its original shape.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a> points(fCVs);\n\
    for (i = 0; i &lt; numCVs; i++)\n\
    points[i] = <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a>( radius * cos( (double)i ),\n\
        pitch * (double)i, radius * sin( (double)i ) );\n\
    status = curveFn.setCVs( points );\n\
    if ( MS::kSuccess != status )\n\
    {\n\
        displayError( &quot;Could not set new CV information&quot; );\n\
        fCVs.clear();\n\
        return status;\n\
    }\n\
\n\
</pre></div><p>As with the earlier helix examples, this code sets the position of the curve’s CVs so that the curve forms a helix.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    status = curveFn.updateCurve();\n\
    if ( MS::kSuccess != status )\n\
    {\n\
        displayError( &quot;Could not update curve&quot; );\n\
        return status;\n\
    }\n\
\n\
</pre></div><p>The <span class=\'code\'>updateCurve()</span> method is used to inform Maya that the geometry of the curve has changed. Failing to call this method after modifying geometry causes the display of the object to remain unchanged.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>Returning <span class=\'code\'>MS::kSuccess</span> at the completion of a function indicates to Maya that the operation completed successfully.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> helix2::undoIt()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsCurve</a> curveFn( fDagPath );\n\
    status = curveFn.setCVs( fCVs );\n\
    if ( MS::kSuccess != status)\n\
    {\n\
        displayError( &quot;Could not set old CV information&quot; );\n\
        return status;\n\
    }\n\
\n\
</pre></div><p>These few lines take the stored CV positions (the original positions of the curve’s CVs) and resets them.</p>\n\
<blockquote>\n\
<p><strong>Note: </strong> You needn’t worry about the number of CVs changing, or the curve being deleted in an undo function. You assume that anything done after your command has been undone before your <span class=\'code\'>undoIt()</span> is called. As a result the model is in the same state as it was immediately after your command finished.</p>\n\
</blockquote>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    status = curveFn.updateCurve();\n\
    if ( MS::kSuccess != status )\n\
    {\n\
        displayError( &quot;Could not update curve&quot; );\n\
        return status;\n\
    }\n\
    fCVs.clear();\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPointArray</a></span> is cleared here just as a precaution.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool helix2::isUndoable() const\n\
{\n\
    return true;\n\
}\n\
\n\
</pre></div><p>This command is undoable. It modified the model, but an <span class=\'code\'>undoIt()</span> method has been provided which returns the model to the state it was in before the command was run.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{ \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, &quot;Autodesk&quot;, &quot;1.0&quot;, &quot;Any&quot;);\n\
    plugin.registerCommand( &quot;helix2&quot;, helix2::creator );\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    plugin.deregisterCommand( &quot;helix2&quot; );\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>The plug-in is completed with the usual initialize and uninitialize functions.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";