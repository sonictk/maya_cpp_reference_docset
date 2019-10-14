var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Extension for Autodesk Maya 2015</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Extension for Autodesk Maya 2015</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"extension-for-autodesk-maya-2015\"></a></div>\n\
<div class=\'section\'><a id=\"python-api-2.0\"></a><h2 id=\"python-api-2.0\">Python API 2.0</h2></div>\n\
<p>Over 130 new classes have been added to the Python API 2.0, including <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_data.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxData</a></span> and much of the Rendering API.</p>\n\
<p>Over 15 devkit examples are also available, and can be found in the <span class=\'code\'>devkit\\plug-ins\\scripted</span> directory of the Maya installation. All Python API 2.0 devkit examples are named with the prefix <span class=\'code\'>py</span>.</p>\n\
<p>For more information, see Maya Python API 2.0 Reference.</p>\n\
<div class=\'section\'><a id=\"new-profiler-classes\"></a><h2 id=\"new-profiler-classes\">New Profiler classes</h2></div>\n\
<p>Two new classes, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MProfiler</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfilingScope\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiling_scope.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MProfilingScope</a></span>, have been added that allow you to work with Maya&#39;s Profiler. The Profiler allows you to locate performance bottlenecks in your scene by recording and demonstrating in a graph the amount of time that each process consumes.</p>\n\
<p>In Maya, select Window &gt; General Editors &gt; Profiler to open the Profiler window.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MProfiler</a></span> class provides functions such as:</p>\n\
<ul>\n\
<li><span class=\'code\'>addCategory()</span> to add a category to the Profiler</li>\n\
<li><span class=\'code\'>getEventTime()</span> to return the event time</li>\n\
<li><span class=\'code\'>getBufferSize()</span> to return the buffer size of the Profiler</li>\n\
</ul>\n\
<p>For more information, see the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MProfiler</a></span> class documentation.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfilingScope::MProfilingScope()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiling_scope.html#ad980017ff0631e7ca146535092d2b26a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MProfilingScope::MProfilingScope()</a></span> method allows you to instrument the function that you want to profile.</p>\n\
<p>To enable profiling, you can click Start in the Profiler window; or, use the MEL or Python <span class=\'code\'>profiler</span> command.</p>\n\
<p>For more information on the Profiler window, see <em>Profiler</em> in the Maya User&#39;s Guide. For more information on the <span class=\'code\'>profiler</span> command, see the <em>MEL Commands</em> and <em>Python Commands</em> documentation.</p>\n\
<p>MAYA-32709</p>\n\
<div class=\'section\'><a id=\"color-management\"></a><h2 id=\"color-management\">Color management</h2></div>\n\
<p>The new <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MColorManagementUtilities\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_color_management_utilities.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_color_management_utilities.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MColorManagementUtilities</a></span> class allows the caller to retrieve color management information from Maya. This class provides methods to query whether the color management feature is available (given proper user entitlement), whether color management is enabled in the scene, and to retrieve color transform IDs from color transform names.</p>\n\
<div class=\'section\'><a id=\"mfragmentmanager\"></a><h2 id=\"mfragmentmanager\">MFragmentManager</h2></div>\n\
<p>The new <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager::removeFragment()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html#a0986b6896f4fad94fc61ff750583187f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFragmentManager::removeFragment()</a></span> function now allows you to change a fragment by removing and adding it again during Maya run-time. In addition, using this method, you can also replace Maya&#39;s default fragments with your own.</p>\n\
<div class=\'section\'><a id=\"ui-draw-manager-enhancements\"></a><h2 id=\"ui-draw-manager-enhancements\">UI Draw Manager Enhancements</h2></div>\n\
<ul>\n\
<li>Font style control. The following new methods have been added:\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager::setFontIncline()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#ae1bb853fa26085836390b2584afb5cbc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager::setFontIncline()</a></span> controls the font incline. User needs to pass in a font incline type as input. By default, Maya uses normal incline rather than italic incline. Refer to the enum <span class=\'code\'>TextIncline</span> for applicable values.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager::setFontWeight()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#ab3b73fbf420140d8ecb80fc71dbe5615&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager::setFontWeight()</a></span> controls the font weight. User needs to pass in a font weight factor as input to change the font weight, which ranges from 1 - 99. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager</a></span> provides the user with 5 pre-defined factors that are commonly used. Currently, only light and bold weights are supported perfectly for most of the font families. By default, Maya uses bold weight. Refer to the enum <span class=\'code\'>TextWeight</span> for applicable values.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager::setFontStretch()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#aff11ad16cd16b2d244986a03c0b5839c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager::setFontStretch()</a></span> controls the font stretch. User needs to pass in a font stretch factor as input, which ranges from 1 - 4000. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager</a></span> provides the user with 9 pre-defined factors that are commonly used. Commonly used factors are between 50 - 200. Refer to the enum <span class=\'code\'>TextStretch</span> for applicable values.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager::setFontLine()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#a614cef9eb62deaf47e7ca39fb6e25d57&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager::setFontLine()</a></span> controls the font line type. User needs to pass in a font line style factor as input. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager</a></span> provides 3 types of line type: overline, underline and strike out. Refer to the enum <span class=\'code\'>TextLine</span> for applicable values.</li>\n\
</ul></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"new-pyside-examples-added\"></a><h2 id=\"new-pyside-examples-added\">New PySide examples added</h2></div>\n\
<p>New PySide example scripts have been added to the <span class=\'code\'>devkit/pythonScripts</span> folder that demonstrate the fundamental concepts for creating basic PySide scripts. In addition, the topic <a href=\'#!/url=./developer/Maya-Python-API/Working-with-PySide-in-Maya.html\' title=\'\'>Working with PySide in Maya</a> has been added that provides additional information to supplement the example scripts.</p>\n\
<div class=\'section\'><a id=\"devkit-examples\"></a><h2 id=\"devkit-examples\">Devkit examples</h2></div>\n\
<p>The <em>footPrintNode</em> devkit example is now made simpler and demonstrates how to use <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager</a></span> to draw a simple locator in Viewport 2.0.</p>\n\
<p>The original sample is now renamed to <em>rawfootPrintNode</em> which demonstrates how to draw the locator with raw OpenGL/DX calls.</p>\n\
<p>Plug-in code using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MUIDrawManager</a></span> can be written once and used on all platforms and all draw API’s.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";