var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Maya Architecture Overview</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Maya Architecture Overview</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"maya-architecture-overview\"></a></div>\n\
<div class=\'section\'><a id=\"maya-architecture-overview-1\"></a><h2 id=\"maya-architecture-overview-1\">Maya Architecture Overview</h2></div>\n\
<p>Maya is designed to be an open, flexible and extensible product.</p>\n\
<p>The APIs of Maya and its command scripting languages (MEL and Python) are key to the software being open and extensible. During the initial design of Maya, Maya and its C++ API were built together in order to maximize its extensibility. To fully appreciate this relationship, you must first understand the architecture of Maya.</p>\n\
<p>At the lowest level, Maya is a very efficient database for storing graphical information. This database is called the Dependency Graph (DG). Information in the DG is stored in objects called nodes. Nodes have properties called attributes that store the configurable characteristics of each node. Similar types of attributes can be connected together, letting data flow from one node to another.</p>\n\
<p>For example, a nurbsCurve node has an attribute that contains a NURBS curve. This attribute can be connected to the input curve attribute of a revolve node. The revolve node also has input attributes that describe the sweep angle and the axis that it would revolve around. The output attribute of the revolve node is a NURBS surface. You can connect this attribute to the input of a nurbsSurface node that knows how to draw a surface. You can then make the nurbsSurface node a child of a transform node that knows how to position objects in 3D space.</p>\n\
<p>This data flow is, in fact, a mechanism for implementing construction history. If you change one of the inputs to any node that participates in the construction of the revolved surface, the DG recomputes only the parts of the history that are affected in order to update the surface. The DG keeps a clear record of what affects what, so that it only recomputes the graph as necessary.</p>\n\
<p>There are over 600 built-in nodes shipped as part of the Maya system. The Maya Help comes with documentation called the Node and Attribute Reference that describes each of these nodes and their attributes.</p>\n\
<p>Working directly at the DG level gives you the maximum amount of flexibility and power, but it is limiting. Fortunately, you are not required to work directly at this level because Maya also comes with over 900 commands that can do this for you. These commands create DG nodes, set and connect their attributes, and create the transform nodes that position objects. For example, there is a revolve command that takes sweep angles and an axis as arguments, and builds the revolve network described above from a selected NURBS curve. This command handles all the low level details for you. The Maya Help comes with documentation called the MEL Command Reference that describes all the built-in Maya commands and their arguments.</p>\n\
<p>About 200 of the Maya commands are UI creation commands that let you build windows, menus, buttons, icons, and so on. Maya itself contains a large number of scripts that it uses to build its UI. In addition to the revolve node and the revolve command, there is a menu item called &quot;Revolve&quot;, and a revolve icon on the UI shelf. The menu item or icon executes the command that in turn creates the DG network. Scripting is used to implement approximately 98% of the UI of Maya.</p>\n\
<p>At a high level (for example, for technical directors), Maya provides an extremely customizable environment. MEL and Python are very powerful scripting languages that can be used to expand an artist&#39;s palette of tools. Both are also very powerful UI creation languages. For example, you can create a specific UI for each character being animated in your scene and this can significantly increase your productivity.</p>\n\
<p>Finally, if the script you want to write requires a Maya command that does not exist, or if your script would be much simpler to write if a node with a certain set of characteristics existed, you can add such commands and nodes to Maya using the API.</p>\n\
<div class=\'section\'><a id=\"maya-api-and-maya-python-api\"></a><h2 id=\"maya-api-and-maya-python-api\">Maya API and Maya Python API</h2></div>\n\
<p>The APIs of Maya closely mirror the underlying architecture of Maya so that the scene graph and DG, which manage the way data is processed, are visible through the Maya API in a manner consistent with their underlying implementation.</p>\n\
<p>The Maya API is a C++ interface with which developers can write plug-in shared objects that may be loaded into Maya at runtime. When they are no longer needed, plug-ins can be unloaded. As a result, you can efficiently develop a plug-in by compiling it, loading it, testing it, unloading it, changing its source code, recompiling and reloading. The same can be done for plug-ins that have been implemented using the Maya Python API.</p>\n\
<p>Plug-ins (coded in C++) developed for Maya work in tandem with standard debugging environments on Linux ® and Windows operating systems. On Linux, you can launch Maya with the -d flag and it will start under the control of the debugger. You can also set breakpoints in your plug-in and get stack traces as you would with any other Unix ® application. On Windows, you can launch Maya directly from the Microsoft ® Visual Studio ® development system and debug the plug-in as you would any other Windows application.</p>\n\
<p>The APIs of Maya provide access to a significant portion of the functionality of Maya. This includes, but is not limited to, the ability to query and modify existing data such as geometry, transforms, hierarchies, scene graph, and DG nodes. Also, these APIs let you create new objects such as shader types available to the renderer, and let you draw in OpenGL ® . The OpenMaya API also includes a class that permits the customization of a shape&#39;s hardware rendered appearance so that tools can be developed to let artists see how their work will appear in a real time environment. Plug-in features can be added and removed at any time using scripting language commands. Plug-ins can operate in either of the two modes of operation of Maya: interactive or batch mode. The Maya API is available in a standalone form for writing separate standalone applications. These applications can read and write the ASCII and binary scene files of Maya and perform operations on the data therein.</p>\n\
<p>As described in the previous section, you normally add a new command or node (or both) to Maya using one of the APIs and then create a script that provides a UI for the new feature. For example, you can use one of the APIs to create a new type of node, then write a new command that creates an instance of the node and places it in the scene and connects it to the appropriate nodes. Finally, you can write a MEL or Python script that inserts the command in a menu so that you can access it.</p>\n\
<p>The Maya API and the Maya Python API are designed to be platform neutral. In most cases, no source code changes are required to &quot;port&quot; a plug-in between Linux, Windows or Mac OS X. Normally, platform specific code is only required when creating or manipulating windows without using the platform independent UI creation abilities of scripting, or when using a platform specific 3rd party library.</p>\n\
<p>Both the Maya API and the Maya Python API provide source code compatibility. Therefore, C++ plug-ins written for earlier Maya releases can recompile without any source code changes in the current version of Maya. An existing Python plug-in should import and run correctly without source code changes if source code compatibility is maintained. If source code incompatibility occurs, the documentation for the new release will contain detailed instructions on what changes need to be made to the plug-ins.</p>\n\
<p>The APIs of Maya use objects and function sets to access internal objects of Maya. Objects are very lightweight classes that provide RTTI (Run Time Type Identification) and can be used in a type-less manner. A function set is a user owned structure that allows operations on Maya owned objects. Since an object is simply a handle that knows its type, a function set provides you with a tool that acts upon objects of the right type. These function sets usually have names that match the Maya features, such as <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnSkinCluster\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_skin_cluster.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSkinCluster</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNurbsSurface\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNurbsSurface</a></span>. For example, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnSkinCluster\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_skin_cluster.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_anim_1_1_m_fn_skin_cluster.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnSkinCluster</a></span> class can be instantiated with an object of type <span class=\'code\'>kSkinCluster</span>, and subsequently can be used to perform operations on that object. The object itself is not able to perform any functions without the aid of its function set.</p>\n\
<p>Proxies let you develop new types of objects. Proxy object classes let you create functionality that integrates into Maya as first-class citizens. Examples of proxies are: commands, file translators, and new types of shaders.</p>\n\
<p>The APIs of Maya are very flexible. This flexibility lets you accomplish a particular task in a number of ways, and lets you determine where to make the tradeoff between speed of development and the performance of the plug-in. With either API, if the performance of the plug-in is not critical, then it is possible to quickly prototype a solution to a particular problem. If performance is critical, the C++ Maya API should be utilized.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";