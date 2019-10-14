var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Querying the Scene Graph</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Querying the Scene Graph</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"querying-the-scene-graph\"></a></div>\n\
<p>This topic presents the basics of scene element organization in Maya.</p>\n\
<div class=\'section\'><a id=\"the-directed-acyclic-graph-dag\"></a><h2 id=\"the-directed-acyclic-graph-dag\">The Directed Acyclic Graph (DAG)</h2></div>\n\
<p>The scene graph in Maya is commonly referred to as the &quot;<strong>Directed Acyclic Graph</strong>&quot;, or <strong>DAG</strong>. The DAG is actually a subset of a much larger graph, known as the <em>Dependency Graph</em>, which encompasses a much wider variety of node types including shaders, deformers, constraints, etc. For more information, consult the next section, <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Dependency-Graph-Plug-in-Basics.html\' title=\'\'>Dependency Graph Plug-in Basics</a>. For now, we will focus our attention DAG nodes, which can be categorized in one of two ways:</p>\n\
<ol>\n\
<li><strong>Transform Nodes (<span class=\'code\'>MFn.kTransform</span>):</strong> This node type defines a local 4x4 transformation matrix which affects all the objects beneath it in the hierarchy. This transformation data is manipulated by the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnTransform</a></span> function set. Transform nodes can have other transform nodes as their children to group scene elements together.</li>\n\
<li><strong>Shape Nodes (<span class=\'code\'>MFn.kMesh</span>, <span class=\'code\'>MFn.kCamera</span>, <span class=\'code\'>MFn.kLight</span>, ... ):</strong> This node type contains the actual geometric information of a scene element, such as the vertices of a mesh. A shape node always has a transform node as its parent.</li>\n\
</ol>\n\
<p>The diagram below presents the simplified directed acyclic graph (DAG) of a basic scene. The <span class=\'code\'>world</span> node represents the scene&#39;s root. The green circles correspond to the transform nodes (<span class=\'code\'>kTransform</span>), and allow the shapes to be positioned in the scene. The shape nodes are identified by blue circles. In this DAG, <span class=\'code\'>perspShape</span> corresponds to a camera in the scene, while <span class=\'code\'>pCubeShape1</span> and <span class=\'code\'>pointLightShape1</span> respectively represent a cubic mesh and a point light in the scene. Observe that the <span class=\'code\'>pointLight1</span> transform node is a child of the <span class=\'code\'>pCube1</span> transform node, which means that if the <span class=\'code\'>pCube1</span> transform node is moved, the point light will be moved as well.</p>\n\
<div class=\'figure\'><img src=\'developer/images/MayaSceneGraph.png\' title=\'\'></div>\n\
<blockquote>\n\
<p><strong>Note:</strong> Generally, a shape node cannot have any children under it. The exception to this rule is a special circumstance known as the <em>underworld</em>. The <em>underworld</em> is a DAG subgraph whose root is attached as a child to a shape node. This <em>underworld</em> graph defines the control points and dependencies of a NURBS curve or a NURBS surface.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"dag-paths\"></a><h2 id=\"dag-paths\">DAG Paths</h2></div>\n\
<p>The location of a specific scene element within the DAG is identified by a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a></span> object.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a></span> can return the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a></span> to which it corresponds in the DAG using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath.node()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html#a34b606120f12457f3128057a7b4740e3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath.node()</a></span>. The path itself can be extended to encompass a shape node (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath.extendToShape()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html#a6bbdc34b5bfd9747bfc59ad21771f7c6&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath.extendToShape()</a></span>), or return the lowest transform node (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath.transform()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html#a252aef07d234fb4f316d4fb32a41ea8b&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath.transform()</a></span>) to name a few convenient functions. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath.fullPathName()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html#a8ad464725ea36f88c4608d5525b1cde3&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath.fullPathName()</a></span> function returns a string representation of the DAG path to a given node, formatted as a sequence of pipe-separated (&quot;<span class=\'code\'>|</span>&quot;) node names starting at the nameless root of the DAG. In the diagram above, the string representation of the path from the root <span class=\'code\'>world</span> node to <span class=\'code\'>pointLightShape1</span> would be as follows: &quot;<span class=\'code\'>|pCube1|pointLight1|pointLightShape1</span>&quot; (note that the root node has no name).</p>\n\
<p>To reduce memory consumption, a complex shape such as a particularly dense mesh can be <em>instanced</em> in multiple locations in the scene graph. In other words, the same shape can appear in different places in the scene without being copied. To achieve this, several transform nodes in the DAG can be the parents of the same shape node. As such, a single shape node can have multiple paths from the root of the DAG. Functions such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath.isInstanced()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html#accfb22081f7c3c5421741f68ffd16378&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath.isInstanced()</a></span>, and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDagPath.instanceNumber()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html#a0ef64fd5f3cbf426aed9c78ad40f9f85&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath.instanceNumber()</a></span> can be used to identify instanced shape nodes.</p>\n\
<div class=\'section\'><a id=\"traversing-the-scene-graph\"></a><h2 id=\"traversing-the-scene-graph\">Traversing the Scene Graph</h2></div>\n\
<p>The scene graph can be traversed using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dag.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag</a></span> object, and optionally with an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDependencyGraph\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dependency_graph.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dependency_graph.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDependencyGraph</a></span> object, since the DAG is a subset of the Dependency Graph.</p>\n\
<p>Classes prefixed with <span class=\'code\'>MIt</span> are known as <em>iterators</em>, and allow you to inspect each object in a collection. In our case, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dag.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag</a></span> will allow us to iterate over the DAG nodes in the scene. In the following code sample, we create a DAG iterator which will traverse the scene starting at the root, and which will visit each node in a depth-first manner. The <span class=\'code\'>OpenMaya.MFn.kInvalid</span> parameter ensures that the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_dag.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag</a></span> object will not filter any node types.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">dagIterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItDag</a>( OpenMaya.MItDag.kDepthFirst, OpenMaya.MFn.kInvalid )\n\
\n\
# This reference to the <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a> function set will be needed\n\
# to obtain information about the DAG objects.\n\
dagNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>()\n\
</pre></div><p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag.isDone()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html#afce691ae1306e9ca23e6e889dec9b54b&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag.isDone()</a></span> function determines whether or not there are objects remaining to be inspected. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag.currentItem()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html#a03b48b8d2d5b0bef88a48a362eac0eec&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag.currentItem()</a></span> function returns the iterator&#39;s current DAG object whose depth relative to the root can be obtained using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag.depth()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html#a6dac1beb1726dcab80704d0c921079ce&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag.depth()</a></span>. Calling <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag.next()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html#a7e119c3d34279c19f6f26780981f39b9&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag.next()</a></span> will cause the internal state of the iterator to advance to the next item, but will not return a DAG object; this is only achieved using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag.currentItem()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html#a03b48b8d2d5b0bef88a48a362eac0eec&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag.currentItem()</a></span>. If there are no more items to continue the iteration, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItDag.isDone()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html#afce691ae1306e9ca23e6e889dec9b54b&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItDag.isDone()</a></span> function will return <span class=\'code\'>True</span>. We can therefore construct a simple while loop to traverse the scene graph:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># Traverse the scene.\n\
while( not dagIterator.isDone() ):\n\
\n\
    # Obtain the current item.\n\
    dagObject = dagIterator.currentItem()\n\
\n\
    # Extract the depth of the DAG object.\n\
    depth = dagIterator.depth()\n\
            \n\
    # Make our <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a> function set operate on the current DAG object.\n\
    dagNodeFn.setObject( dagObject )\n\
                       \n\
    # Extract the DAG object&#39;s name.\n\
    name = dagNodeFn.name()\n\
            \n\
    print name + &#39; (&#39; + dagObject.apiTypeStr() + &#39;) depth: &#39; + str( depth )\n\
    \n\
    # Iterate to the next item.\n\
    dagIterator.next()\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> We elaborate on the use of <em>function sets</em> (ex: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a></span>) in <a href=\'#!/url=./developer/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Creating-and-Manipulating.html\' title=\'\'>Creating and Manipulating Objects</a>.</p>\n\
\n\
<div class=\'section\'><a id=\"inspecting-selected-scene-elements\"></a><h2 id=\"inspecting-selected-scene-elements\">Inspecting Selected Scene Elements</h2></div>\n\
<p>When objects are selected from Maya&#39;s user interface (or through scripts), they are added to a global <em>active selection list</em>, accessible via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal.getActiveSelectionList()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a066fc800bd29827c3707102018d72ad9&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGlobal.getActiveSelectionList()</a></span>. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MGlobal</a></span> static class provides a variety of functions pertaining to the Maya application, logging, object selection, command execution, 3D views (including the scene&#39;s up-axis), and model manipulation.</p>\n\
<p>The code below illustrates how to obtain the active selection list by populating a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionList</a></span> object.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">selectionList = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal.getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a066fc800bd29827c3707102018d72ad9&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MGlobal.getActiveSelectionList</a>()\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">selectionList = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSelectionList</a>()\n\
<a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal.getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a066fc800bd29827c3707102018d72ad9&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MGlobal.getActiveSelectionList</a>( selectionList )\n\
</pre></div><p>We use an instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItSelectionList</a></span> to iterate over the selection list. The constructor of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItSelectionList</a></span> allows us to specify a filter to iterate over objects of a specific type. In the following example, our iterator filters for objects compatible with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a></span> function set by specifying the <span class=\'code\'>MFn.kDagNode</span> parameter:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">iterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItSelectionList</a>( selectionList, OpenMaya.MFn.kDagNode )\n\
</pre></div><p>With the Python API 2.0, you can use a selection list to iterate over the entire scene graph by selecting all nodes in the scene first, and calling <span class=\'code\'>getDagPath()</span> on the iterator for each item. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">dagNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>()\n\
 \n\
cmds.select(all=True)\n\
selectionList = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal.getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a066fc800bd29827c3707102018d72ad9&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MGlobal.getActiveSelectionList</a>()\n\
if sList.length()&gt;0:\n\
    iterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItSelectionList</a>(selectionList, OpenMaya.MFn.kDagNode)\n\
    while not iterator.isDone():  \n\
        print iterator.getDagPath()\n\
        iterator.next()\n\
</pre></div><div class=\'section\'><a id=\"example-command-plug-in-printing-dag-paths\"></a><h2 id=\"example-command-plug-in-printing-dag-paths\">Example Command Plug-in: Printing DAG Paths</h2></div>\n\
<p><strong>Filename:</strong> <span class=\'code\'>printPaths.py</span></p>\n\
<p><strong>Sample Script Editor Output:</strong></p>\n\
<div class=\'figure\'><img src=\'developer/images/printPaths.png\' title=\'\'></div>\n\
<p><strong>Program Summary:</strong> The plug-in code below creates the <span class=\'code\'>printPaths()</span> command. The behavior of this command depends on whether or not the <em>active selection list</em> contains DAG objects. If one or more DAG objects have been selected, their respective names, types, DAG paths and compatible function set types are printed to the Script Editor output. Otherwise, the scene graph is printed using each DAG node&#39;s name and type.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pyPrintPaths.py\n\
\n\
import sys\n\
import maya.cmds as cmds\n\
import maya.api.OpenMaya as OpenMaya\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
    \n\
kPluginCmdName = &#39;pyPrintPaths&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class printPathsCmd(<a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxCommand</a>):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPxCommand.__init__\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_command.html#a0e33c57b86f794759092176b16cc0b44&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MPxCommand.__init__</a>(self)\n\
        \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; \n\
        Print the DAG paths of the selected objects.\n\
        If no DAG objects are selected, print the entire\n\
        scene graph.\n\
        &#39;&#39;&#39;\n\
        \n\
        # Populate the <a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionList</a> with the currently selected\n\
        # objects using the static function MGlobal.getActiveSelectionList().\n\
        \n\
        #selectionList = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSelectionList</a>()\n\
        selectionList = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal.getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a066fc800bd29827c3707102018d72ad9&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MGlobal.getActiveSelectionList</a>()\n\
        \n\
        # This selection list can contain more than just scene elements (DAG nodes),\n\
        # so we must create an iterator over this selection list (<a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItSelectionList</a>), \n\
        # and filter for objects compatible with the <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a> function set (MFn.kDagNode).\n\
        iterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItSelectionList</a>( selectionList, OpenMaya.MFn.kDagNode )\n\
        \n\
        if iterator.isDone():\n\
            # Print the whole scene if there are no DAG nodes selected.\n\
            print &#39;=====================&#39;\n\
            print &#39; SCENE GRAPH (DAG):  &#39;\n\
            print &#39;=====================&#39;\n\
            self.printScene()\n\
        else:\n\
            # Print the paths of the selected DAG objects. \n\
            print &#39;=======================&#39;\n\
            print &#39; SELECTED DAG OBJECTS: &#39;\n\
            print &#39;=======================&#39;\n\
            self.printSelectedDAGPaths( iterator )\n\
    \n\
    def printSelectedDAGPaths(self, pSelectionListIterator):\n\
        &#39;&#39;&#39; Print the DAG path(s) of the selected object(s). &#39;&#39;&#39;\n\
        \n\
        # Create an <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> object which will be populated on each iteration.\n\
        dagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        \n\
        # Obtain a reference to MFnDag function set to print the name of the DAG object\n\
        dagFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>()\n\
        \n\
        \n\
        \n\
        # Perform each iteration.\n\
        while( not pSelectionListIterator.isDone() ):\n\
            \n\
            # Populate our <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> object. This will likely provide\n\
            # us with a Transform node.\n\
            dagPath = pSelectionListIterator.getDagPath()\n\
            try:\n\
                # Attempt to extend the path to the shape node.\n\
                dagPath.extendToShape()\n\
            except Exception as e:\n\
                # Do nothing if this operation fails.\n\
                pass\n\
            \n\
            # Obtain the name of the object.\n\
            dagObject = dagPath.node()\n\
            dagFn.setObject( dagObject )\n\
            name = dagFn.name()\n\
            \n\
            # Obtain the compatible function sets for this DAG object.\n\
            # These values refer to the enumeration values of <a href=\"javascript:void(0)\" data-symbol=\"MFn\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFn</a>\n\
            fntypes = []\n\
            fntypes = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal.getFunctionSetList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a89e813abc5d6f2fe65755bb0737aa628&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MGlobal.getFunctionSetList</a>( dagObject )\n\
            \n\
            # Print the DAG object information.\n\
            print name + &#39; (&#39; + dagObject.apiTypeStr + &#39;)&#39;\n\
            print &#39;\\tDAG path: [&#39; + str( dagPath.fullPathName() ) + &#39;]&#39;\n\
            print &#39;\\tCompatible function sets: &#39; + str( fntypes )\n\
            \n\
            # Advance to the next item\n\
            pSelectionListIterator.next()\n\
        \n\
        print &#39;=====================&#39;         \n\
            \n\
    def printScene(self):\n\
        &#39;&#39;&#39; Traverse and print the elements in the scene graph (DAG)  &#39;&#39;&#39;\n\
        \n\
        # Create a function set which we will re-use throughout our scene graph traversal.\n\
        dagNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>()\n\
        \n\
        # Create an iterator to traverse the scene graph starting at the world node\n\
        # (the scene&#39;s origin). We use a depth-first traversal, and we do not filter for\n\
        # any scene elements, as indicated by the &#39;OpenMaya.MFn.kInvalid&#39; parameter.\n\
        dagIterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItDag\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dag.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItDag</a>( OpenMaya.MItDag.kDepthFirst,\n\
                                       OpenMaya.MFn.kInvalid )\n\
       \n\
        # Traverse the scene.\n\
        while( not dagIterator.isDone() ):\n\
            \n\
            # Obtain the current item.\n\
            dagObject = dagIterator.currentItem()\n\
            depth = dagIterator.depth()\n\
            \n\
            # Make our <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a> function set operate on the current DAG object.\n\
            dagNodeFn.setObject( dagObject )\n\
                       \n\
            # Extract the DAG object&#39;s name.\n\
            name = dagNodeFn.name()\n\
            \n\
            # Generate our output by first incrementing the tabs based on the depth\n\
            # of the current object. This formats our output nicely.\n\
            output = &#39;&#39;\n\
            for i in range( 0, depth ):\n\
                output += &#39;\\t&#39;\n\
                \n\
            output += name + &#39; (&#39; + dagObject.apiTypeStr + &#39;)&#39;\n\
            print output\n\
            \n\
            # Increment to the next item.\n\
            dagIterator.next()\n\
        \n\
        print &#39;=====================&#39;\n\
\n\
    \n\
\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################       \n\
def cmdCreator():\n\
    &#39;&#39;&#39; Creates an instance of our command class. &#39;&#39;&#39;\n\
    return printPathsCmd() \n\
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
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39;\n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;pyPrintPaths.py&#39; )\n\
cmds.pyPrintPaths()\n\
 \n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># printPaths.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import maya.OpenMaya as OpenMaya\n\
\n\
kPluginCmdName = &#39;printPaths&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class printPathsCmd(OpenMayaMPx.MPxCommand):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
        \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; \n\
        Print the DAG paths of the selected objects.\n\
        If no DAG objects are selected, print the entire\n\
        scene graph.\n\
        &#39;&#39;&#39;\n\
        \n\
        # Populate the <a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSelectionList</a> with the currently selected\n\
        # objects using the static function MGlobal.getActiveSelectionList().\n\
        selectionList = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MSelectionList</a>()\n\
        <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal.getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a066fc800bd29827c3707102018d72ad9&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MGlobal.getActiveSelectionList</a>( selectionList )\n\
        \n\
        # This selection list can contain more than just scene elements (DAG nodes),\n\
        # so we must create an iterator over this selection list (<a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MItSelectionList</a>), \n\
        # and filter for objects compatible with the <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a> function set (MFn.kDagNode).\n\
        iterator = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MItSelectionList</a>( selectionList, OpenMaya.MFn.kDagNode )\n\
        \n\
        if iterator.isDone():\n\
            # Print the whole scene if there are no DAG nodes selected.\n\
            self.printScene()\n\
        else:\n\
            # Print the paths of the selected DAG objects. \n\
            self.printSelectedDAGPaths( iterator )\n\
    \n\
    def printSelectedDAGPaths(self, pSelectionListIterator):\n\
        &#39;&#39;&#39; Print the DAG path(s) of the selected object(s). &#39;&#39;&#39;\n\
        \n\
        # Create an <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> object which will be populated on each iteration.\n\
        dagPath = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MDagPath</a>()\n\
        \n\
        # Obtain a reference to MFnDag function set to print the name of the DAG object\n\
        dagFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MFnDagNode</a>()\n\
        \n\
        print &#39;=======================&#39;\n\
        print &#39; SELECTED DAG OBJECTS: &#39;\n\
        print &#39;=======================&#39;\n\
        \n\
        # Perform each iteration.\n\
        while( not pSelectionListIterator.isDone() ):\n\
            \n\
            # Populate our <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> object. This will likely provide\n\
            # us with a Transform node.\n\
            pSelectionListIterator.getDagPath( dagPath )\n\
            try:\n\
                # Attempt to extend the path to the shape node.\n\
                dagPath.extendToShape()\n\
            except Exception as e:\n\
                # Do nothing if this operation fails.\n\
                pass\n\
            \n\
            # Obtain the name of the object.\n\
            dagObject = dagPath.node()\n\
            dagFn.setObject( dagObject )\n\
            name = dagFn.name()\n\
            \n\
            # Obtain the compatible function sets for this DAG object.\n\
            # These values refer to the enumeration values of <a href=\"javascript:void(0)\" data-symbol=\"MFn\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFn</a>\n\
            fntypes = []\n\
            <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal.getFunctionSetList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html#a89e813abc5d6f2fe65755bb0737aa628&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">OpenMaya.MGlobal.getFunctionSetList</a>( dagObject, fntypes )\n\
            \n\
            # Print the DAG object information.\n\
            print name + &#39; (&#39; + dagObject.apiTypeStr() + &#39;)&#39;\n\
            print &#39;\\tDAG path: [&#39; + str( dagPath.fullPathName() ) + &#39;]&#39;\n\
            print &#39;\\tCompatible function sets: &#39; + str( fntypes )\n\
            \n\
            # Advance to the next item\n\
            pSelectionListIterator.next()\n\
        \n\
        print &#39;=====================&#39;\n\
            \n\
            \n\
    def printScene(self):\n\
        &#39;&#39;&#39; Traverse and print the elements in the scene graph (DAG)  &#39;&#39;&#39;\n\
        \n\
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
            dagObject = dagIterator.currentItem()\n\
            depth = dagIterator.depth()\n\
            \n\
            # Make our <a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDagNode</a> function set operate on the current DAG object.\n\
            dagNodeFn.setObject( dagObject )\n\
                       \n\
            # Extract the DAG object&#39;s name.\n\
            name = dagNodeFn.name()\n\
            \n\
            # Generate our output by first incrementing the tabs based on the depth\n\
            # of the current object. This formats our output nicely.\n\
            output = &#39;&#39;\n\
            for i in range( 0, depth ):\n\
                output += &#39;\\t&#39;\n\
                \n\
            output += name + &#39; (&#39; + dagObject.apiTypeStr() + &#39;)&#39;\n\
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
    &#39;&#39;&#39; Creates an instance of our command class. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( printPathsCmd() )\n\
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
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39;\n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;printPaths.py&#39; )\n\
cmds.printPaths()\n\
 \n\
&#39;&#39;&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";