var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>What&#39;s New in Maya API in 2018</title>\n\
   <meta name=\"contextid\" content=\"WHATS_NEW_API_2018\"><meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>What&#39;s New in Maya API in 2018</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"whats-new-in-maya-api-in-2018\"></a></div>\n\
<div class=\'section\'><a id=\"important-updates-to-the-maya-api\"></a><h2 id=\"important-updates-to-the-maya-api\">Important updates to the Maya API</h2></div>\n\
<p>Maya 2018 includes a number of API updates and additions that require you to recompile your plug-ins as well new ways to make plug-in development more efficient. The updates include:</p>\n\
<div class=\'section\'><a id=\"new-openmaya-namespace\"></a><h2 id=\"new-openmaya-namespace\">New OpenMaya namespace</h2></div>\n\
<p>Maya 2018 introduces a new OpenMaya namespace. This is part of the effort to deliver an API that minimizes disruptions to Maya plug-in development and extend binary compatibility of the Maya API over multiple updates. The OpenMaya namespace covers all of the Open Maya API modules (OpenMaya, OpenMayaUI, OpenMayaRender, OpenMayaFx, OpenMayaAnim).</p>\n\
<p>To adopt the OpenMaya namespace:</p>\n\
<ul>\n\
<li><p>All plug-ins built against previous versions of the Maya API need to be recompiled under the new <span class=\'code\'>Autodesk::Maya::OpenMaya20180000</span> namespace to update the API symbols.</p>\n\
<p>In most cases, this does not require any action for plug-ins. The compiler will resolve symbols to the namespaced symbols automatically.</p></li>\n\
<li>Remove all forward declarations of the OpenMaya classes. All of these classes get automatically forward declared by <span class=\'code\'>MApiNamespace.h</span> to resolve to the correct version of the class.</li>\n\
<li><p>If you have modified the buildconfig file or Xcode project file to promote the symbols below to global scope, you must remove them:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">LFLAGS += -Wl,-exported_symbol,__Z16initializePlugin7MObject\n\
\\\n\
\n\
-Wl,-exported_symbol,__Z18uninitializePlugin7MObject</pre></div></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"support-for-c11-keywords\"></a><h2 id=\"support-for-c11-keywords\">Support for C++11 Keywords</h2></div>\n\
<p>To support the VFX Reference Platform, the Maya 2018 API now supports C++11 features. This includes C++11 new keywords in the header files such as <span class=\'code\'>nullptr</span>, <span class=\'code\'>final</span>, and <span class=\'code\'>override</span>. When compiling plug-ins against this API using previous versions of C++, you may get errors such as:</p>\n\
<p><span class=\'code\'>error: ?nullptr? was not declared in this scope</span></p>\n\
<p>In most cases, the error appears due to the absence of <span class=\'code\'>nullptr</span> in C++ 98.</p>\n\
<div class=\'section\'><a id=\"workaround\"></a><h3 id=\"workaround\">Workaround</h3></div>\n\
<p>If you do not update to C++11, you need to include the <span class=\'code\'>maya/MCppCompat.h</span> before any OpenMaya header file. Including this header file does not implement these C++11 keyword features, but redefines the keywords to something that is compatible with older compilers (for example <span class=\'code\'>nullptr</span> is defined to <span class=\'code\'>NULL</span>). This allows your plug-in to be compiled with older compilers even when C++11 keywords are present in header files.</p>\n\
<div class=\'section\'><a id=\"updated-deprecation-marking-system\"></a><h2 id=\"updated-deprecation-marking-system\">Updated deprecation marking system</h2></div>\n\
<p>Starting with Maya 2018, deprecated methods are marked using the <span class=\'code\'>OPENMAYA_DEPRECATED</span> C++ attribute. For example:</p>\n\
<p><span class=\'code\'>OPENMAYA_DEPRECATED(version, &quot;message&quot;)</span></p>\n\
<p>The new marking system generates compiler warnings when marked methods got called. This allows you to remove deprecated methods from plug-ins at your convenience. An example of such warning:</p>\n\
<p><span class=\'code\'>warning C4996: &#39;MPxTransform::validateAndSetValue&#39;: Override validateAndSetValue(const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp;, const <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a>&amp;) instead.</span> <span class=\'code\'>If needed, useMDGContext::current() to get the context.</span></p>\n\
<p>If you enabled <span class=\'code\'>treat warning as error</span> on your compiler and experienced a related build error during your migration, you can disable the deprecation warnings.</p>\n\
<p>To silence the deprecation warnings, you can</p>\n\
<ul>\n\
<li>Define a preprocessor macro:\n\
<ul>\n\
<li><span class=\'code\'>_OPENMAYA_DEPRECATION_DISABLE_WARNING</span></li>\n\
</ul></li>\n\
<li><p>Use the following compiler switches:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col> <col> </colgroup><tbody><tr class=\"ruled-odd-row\"><td class=\"table-body\">MSVC</td><td class=\"table-body\">/Wd\"4996\"</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">ICC</td><td class=\"table-body\">-diag-disable 1786</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Clang</td><td class=\"table-body\">-Wno-error=deprecated-declarations</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">GCC</td><td class=\"table-body\">-Wno-error=deprecated-declarations</td></tr></tbody></table></li>\n\
</ul>\n\
<p>To treat deprecation as an error, your can:</p>\n\
<ul>\n\
<li>Define the following preprocessor macro:\n\
<ul>\n\
<li><span class=\'code\'>_OPENMAYA_DEPRECATION_ERROR_2018</span></li>\n\
<li><span class=\'code\'>_OPENMAYA_DEPRECATION_ERROR_ALL</span></li>\n\
</ul></li>\n\
<li><p>Or, use the following compiler switches:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col> <col> </colgroup><tbody><tr class=\"ruled-odd-row\"><td class=\"table-body\">MSVC</td><td class=\"table-body\">/We\"4996\" (/D_CRT_NONSTDC_NO_DEPRECATE)</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">ICC</td><td class=\"table-body\">-diag-error 1786</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Clang</td><td class=\"table-body\">-Werror=deprecated-declarations</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">GCC</td><td class=\"table-body\">-Werror=deprecated-declarations</td></tr></tbody></table></li>\n\
</ul>\n\
<p>For information about backwards compatibility for deprecated methods and overriding deprecated methods, see <a href=\'#!/url=./developer/Deprecating-Maya-API.html\' title=\'\'>Deprecating Maya API</a>.</p>\n\
<div class=\'section\'><a id=\"evaluation-using-current-context\"></a><h2 id=\"evaluation-using-current-context\">Evaluation using current context</h2></div>\n\
<p>Maya 2018 introduces the concept of current evaluation context to the Maya API. New methods and a new evaluation schema provide a more efficient way to code context evaluation.</p>\n\
<p>In previous versions of Maya, if you want to evaluate something at a context other than the normal one, you pass in the context to the method. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::getTranslation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#afdb40f5632edbefb787db386d445b157&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform::getTranslation</a>( <a href=\"javascript:void(0)\" data-symbol=\"MSpace::Space\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpace::Space</a>, const\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContext</a>&amp;, <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>* );\n\
</pre></div><p>Doing this often creates long chains of methods that pass the context in for no other reason than to pass it on to the next method. The concept of current evaluation context, along with new utilities, no longer makes this necessary. You can now :</p>\n\
<ul>\n\
<li>Get the current context using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContext::current()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html#a11a98edcfc027fb57d3a66fcfbc580a8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContext::current()</a></span>.</li>\n\
<li>Set the current context using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContext::makeCurrent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html#a0a8c271d5088d769845269dc99d73a7e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContext::makeCurrent()</a></span>.</li>\n\
<li>Temporarily set the current context in a scoped code block using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContextGuard\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context_guard.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContextGuard</a> guard(temporaryCurrentContext);</span>.</li>\n\
</ul>\n\
<p>You can continue using existing methods that have a context parameter, but a context-free variation is recommended. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">return myTransform.getTranslation(<a href=\"javascript:void(0)\" data-symbol=\"MSpace::kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8adafa274206df602835f0f22ae887e126&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpace::kTransform</a>, myNewContext, &amp;status);\n\
</pre></div><p>is now functionally equivalent to:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">                {\n\
                                <a href=\"javascript:void(0)\" data-symbol=\"MDGContextGuard\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context_guard.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContextGuard</a> ctxGuard( myNewContext );\n\
                                return myTransform.getTranslation( <a href=\"javascript:void(0)\" data-symbol=\"MSpace::kTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8adafa274206df602835f0f22ae887e126&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpace::kTransform</a>, &amp;status );\n\
                }\n\
\n\
</pre></div><p>In most cases, <span class=\'code\'>myNewContext</span> is unnecessary as most code should evaluate in the current context. Exceptions include things like time-based caching and ghosting, where you would deliberately want to evaluate at an alternate context.</p>\n\
<p>If you have a long sequence of calls in a different context to make, then you can use a scoped change of the current context. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">                {\n\
                                            <a href=\"javascript:void(0)\" data-symbol=\"MDGContextGuard\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context_guard.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContextGuard</a> tempContext( myDifferentContext );\n\
                                firstPlug.getValue( value1 );\n\
                                secondPlug.getValue( value2 );\n\
                                thirdPlug.getValue( value3 );\n\
                …\n\
}\n\
\n\
</pre></div><p>Avoid passing the context around through different methods. Always use the current context to keep your code safe for multi-threaded evaluation.</p>\n\
<div class=\'section\'><a id=\"workspace-controls\"></a><h2 id=\"workspace-controls\">Workspace controls</h2></div>\n\
<p>Use workspace controls to create custom UI that can be dragged, docked and saved within Maya&#39;s workspaces system. You can create workspace controls using the <span class=\'code\'>workspaceControl</span> command. Workspace controls replace the <span class=\'code\'>dockControl</span> command previously used to create dockable UI. The <span class=\'code\'>dockControl</span> functionality is no longer supported. This means you should not create a window with internal UI and then attach it to a <span class=\'code\'>dockControl</span> command call via the <span class=\'code\'>content</span> flag.</p>\n\
<p>You can create workspace controls using MEL, Python, and C++. For more information, see <a href=\'#!/url=./developer/Writing-Workspace-controls.html\' title=\'\'>Writing Workspace controls</a>.</p>\n\
<p>For a Python example, see the <span class=\'code\'>dockableWorkspaceWidget.py</span> example in the pythonScripts directory of the Maya devkit.</p>\n\
<p>For a C++ example, see the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"workspaceControlCmd.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/workspace_control_cmd_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">workspaceControlCmd.cpp</a></span> example in the Maya API</p>\n\
<div class=\'section\'><a id=\"updated-maya-viewport-2.0-whitepapers\"></a><h2 id=\"updated-maya-viewport-2.0-whitepapers\">Updated Maya Viewport 2.0 whitepapers</h2></div>\n\
<p>The <em>Maya Viewport 2.0 API Porting Guide</em> has been updated to include changes to the Maya 2018 API. The updated whitepapers also analyze the choices for porting plug-in locators (MPxLocatorNode) to Viewport 2.0.</p>\n\
<p>The Maya Viewport 2.0 whitepapers can be found at <a href=\'http://www.autodesk.com/developmaya\' title=\'\' target=\'_blank\'>http://www.autodesk.com/developmaya</a>.</p>\n\
<div class=\'section\'><a id=\"api-version-and-binary-compatibility\"></a><h2 id=\"api-version-and-binary-compatibility\">API version and binary compatibility</h2></div>\n\
<p>Maya&#39;s API version has been updated (MAYA_API_VERSION is now 20180000). Note that all plug-ins compiled against Maya 2018, including Maya 2017 Update 1, 2, 3 or 4, must be re-compiled against Maya 2018 in order to be recognized by this version of Maya.</p>\n\
<div class=\'section\'><a id=\"updated-compiler-requirements\"></a><h3 id=\"updated-compiler-requirements\">Updated compiler requirements</h3></div>\n\
<p>To compile plug-ins and standalone applications on Windows and Mac OS X, you must now have the following installed.</p>\n\
<ul>\n\
<li>Windows— Visual Studio 2015 update 3. See <a href=\'#!/url=./developer/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Windows environment (64-bit)</a>.</li>\n\
<li>Mac OS X— El Capitan 10.11.6 , Xcode 7.3.1 with SDK 10.11, clang with libc++. See <a href=\'#!/url=./developer/Setting-up-your-build/Mac-OS-X-environment.html\' title=\'\'>Mac OS X environment</a>.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";