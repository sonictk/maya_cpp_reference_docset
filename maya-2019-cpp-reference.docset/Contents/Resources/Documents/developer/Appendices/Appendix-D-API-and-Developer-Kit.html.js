var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Appendix D: API and Developer Kit limitations</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Appendix D: API and Developer Kit limitations</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"appendix-d-api-and-developer-kit-limitations\"></a></div>\n\
<div class=\'section\'><a id=\"attribute-of-a-user-defined-mpxdata-type\"></a><h2 id=\"attribute-of-a-user-defined-mpxdata-type\">Attribute of a user defined MPxData type</h2></div>\n\
<p>An attribute of a user defined <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxData</a></span> type that is implemented as an attribute on a user defined node will fail to appear in the Outliner window.</p>\n\
<div class=\'section\'><a id=\"using-of-mplugnumelements-on-the-dagsetmembers-attribute\"></a><h2 id=\"using-of-mplugnumelements-on-the-dagsetmembers-attribute\">Using of MPlug::numElements() on the dagSetMembers[] attribute</h2></div>\n\
<p>Use of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug::numElements()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html#ae98c3fdbce1daefa127bae2fe66a187c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug::numElements()</a></span> on the dagSetMembers[] attribute of a shading engine node will return an incorrect number of elements.</p>\n\
<p>Workaround</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug::numConnectedElements()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html#ae743f47fe670d42cc3600a16ed531169&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug::numConnectedElements()</a></span> should be used.</p>\n\
<div class=\'section\'><a id=\"pixel-data-stored-in-off-screen-color-index-buffers-using-mpxglbuffer-cannot-be-read-correctly\"></a><h2 id=\"pixel-data-stored-in-off-screen-color-index-buffers-using-mpxglbuffer-cannot-be-read-correctly\">Pixel data stored in off-screen color-index buffers using MPxGlBuffer cannot be read correctly</h2></div>\n\
<p>Pixel data stored in off-screen color-index buffers using <span class=\'code\'>MPxGIBuffer</span> cannot be read correctly. The off screen buffer works as documented in RGB mode.</p>\n\
<div class=\'section\'><a id=\"selecting-multiple-types-of-object-components\"></a><h2 id=\"selecting-multiple-types-of-object-components\">Selecting multiple types of object components</h2></div>\n\
<p>When multiple types of object components are selected, e.g. edges and vertices, an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a></span> that has been assigned the active selection list will contain only the final type of component selected. For example if edges were selected and then vertices were shift-selected the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a></span> representing the active selection list will contain one <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a></span> representing the vertex components.</p>\n\
<p>Workaround</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItSelectionList</a></span> list will differentiate between the different components selected and can be used to identify all of the various components selected.</p>\n\
<div class=\'section\'><a id=\"mitselectionlistgetdagpath\"></a><h2 id=\"mitselectionlistgetdagpath\">MItSelectionList::getDagPath()</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList::getDagPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html#acea3f9b4576b874442d489458ac310c0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MItSelectionList::getDagPath()</a></span> will always return the original dagPath of an instanced node. For example, if two shape nodes are selected and their dagPaths are:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">pCube1|pCubeShape1\n\
pCube2|pCubeShape1\n\
\n\
</pre></div><p>getDagPath() will return:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">pCube1|pCubeShape1\n\
pCube1|pCubeShape1\n\
\n\
</pre></div><p>for each object in the list.</p>\n\
<p>Workaround</p>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSelectionList::getDagPath()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html#a16dda1a34d5f10be257d8421ac6deabd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList::getDagPath()</a></span> will return the correct dagPath for each object in the list.</p>\n\
<div class=\'section\'><a id=\"creating-a-camera-and-immediately-calling-mfncameraseteyepoint\"></a><h2 id=\"creating-a-camera-and-immediately-calling-mfncameraseteyepoint\">Creating a camera and immediately calling MFnCamera::setEyePoint</h2></div>\n\
<p>If one creates a camera and immediately calls <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::setEyePoint()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#ae92a8fe98b6d9ef5bb4c2fa2d853b4a6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCamera::setEyePoint()</a></span> as in the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">fnCamera.create (); \n\
fnCamera.setEyePoint ( <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPoint</a> (sceneCamera-&gt;eyePt[0], sceneCamera-&gt;eyePt[1], sceneCamera-&gt;eyePt[2]) ); \n\
\n\
</pre></div><p>it will fail because <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera::create()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html#af1adb4abaf5243c6c0749bcca7b5c418&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCamera::create()</a></span> does not correctly set the node&#39;s path pointer variable.</p>\n\
<p>Workaround</p>\n\
<p>Code similar to the following will get around this problem:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MFnCamera\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_camera.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCamera</a> fnCamera; \n\
<a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> cameraPath; \n\
<a href=\"javascript:void(0)\" data-symbol=\"MDagPath::getAPathTo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html#a422aa5ec02565f757c13fe2873ed25d7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath::getAPathTo</a> (fnCamera.create(), cameraPath); \n\
fnCamera.setObject (cameraPath); \n\
fnCamera.setEyePoint (...);\n\
\n\
</pre></div><div class=\'section\'><a id=\"maya-will-crash-if-you-unload-a-context-plug-in\"></a><h2 id=\"maya-will-crash-if-you-unload-a-context-plug-in\">Maya will crash if you unload a context plug-in</h2></div>\n\
<p>Maya will crash if you unload a context plug-in while instances of the contexts exist in the scene. This includes the Developer Kit example context tool plug-ins such as the marqueeTool and the moveTool.</p>\n\
<p>Workaround</p>\n\
<p>To prevent the crash, remember the names of the context(s) that you create using the plug-in, and before unloading the plug-in, do a &quot;file -f new&quot; followed by a &quot;deleteUI contextName&quot;.</p>\n\
<div class=\'section\'><a id=\"maya-will-not-recognize-custom-mel-command-plug-ins-at-startup\"></a><h2 id=\"maya-will-not-recognize-custom-mel-command-plug-ins-at-startup\">Maya will not recognize custom MEL command plug-ins at startup</h2></div>\n\
<p>In previous versions of Maya it may have been possible in a startup MEL script to call a custom MEL command which was implemented via an API plug-in. However, plug-ins were among the first objects loaded on Maya startup and this caused initialization problems. Since Maya 4.0, API plug-in loading occurs later in the Maya startup process, and any startup MEL scripts which relied on the plug-ins already being loaded will no longer work correctly.</p>\n\
<p>Workaround</p>\n\
<p>There are two options. Do one of the following:</p>\n\
<ul>\n\
<li>Load the plug-in manually in the startup script and then use &quot;eval&quot; to wrap all calls to the custom plug-in commands.</li>\n\
<li>In the startup script evalDeferred can be used to delay the call to the command so that the plug-ins get loaded first.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";