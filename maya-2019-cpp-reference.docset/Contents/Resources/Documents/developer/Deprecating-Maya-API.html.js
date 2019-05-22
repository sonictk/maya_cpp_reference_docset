var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Deprecating Maya API</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Deprecating Maya API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"deprecating-maya-api\"></a></div>\n\
<div class=\'figure\'><img src=\'developer/images/New_Even.png\' title=\'\'></div>\n\
<div class=\'section\'><a id=\"updated-deprecation-marking-system\"></a><h2 id=\"updated-deprecation-marking-system\">Updated deprecation marking system</h2></div>\n\
<p>Starting with Maya 2018, deprecated methods are to be marked using the <span class=\'code\'>OPENMAYA_DEPRECATED</span> C++ attribute. For example:</p>\n\
<p><span class=\'code\'>OPENMAYA_DEPRECATED(version, &quot;message&quot;)</span></p>\n\
<p>The marking system generates compiler warnings when marked methods got called. This allows you to remove deprecated methods from plug-ins at your convenience. An example of such warning:</p>\n\
<p><span class=\'code\'>warning C4996: &#39;MPxTransform::validateAndSetValue&#39;: Override validateAndSetValue(const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPlug</a>&amp;, const <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_data_handle.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MDataHandle</a>&amp;) instead.</span> <span class=\'code\'>If needed, useMDGContext::current() to get the context.</span></p>\n\
<p>If you enabled <span class=\'code\'>treat warning as error</span> on your compiler and experienced a related build error during your migration, you can disable the deprecation warnings.</p>\n\
<p>To silence the deprecation warnings, you can</p>\n\
<ul>\n\
<li>Define a preprocessor macro:\n\
<ul>\n\
<li><span class=\'code\'>_OPENMAYA_DEPRECATION_DISABLE_WARNING</span>.</li>\n\
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
<div class=\'section\'><a id=\"backwards-compatibility-for-deprecated-methods\"></a><h3 id=\"backwards-compatibility-for-deprecated-methods\">Backwards compatibility for deprecated methods</h3></div>\n\
<p>In the following example, a function call to both <span class=\'code\'>getMatrix()</span> and <span class=\'code\'>getMatrix(const <a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MDGContext</a>&amp;)</span> work by default (Except calling API from its overridden methods. See <em>Overriding deprecated methods</em> below for details.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform</a> { \n\
    public: \n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix(); // New api, default to redirect the call to the old method \n\
    obsolete_2018:  \n\
    OPENMAYA_DEPRECATED(2018, &quot;Call getMatrix(<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MStatus</a>*) instead.”) \n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix(const <a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MDGContext</a>&amp;); \n\
} \n\
</pre></div><div class=\'section\'><a id=\"overriding-deprecated-methods\"></a><h3 id=\"overriding-deprecated-methods\">Overriding deprecated methods</h3></div>\n\
<p>When overriding new and deprecated API, you can override either of them, but not both. You should not call deprecated API from new API’s override or the vice versa.</p>\n\
<p>See the following examples:</p>\n\
<ul>\n\
<li><p>To override the new API:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class UserTransform : public <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform</a> {\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix() override;\n\
};\n\
</pre></div></li>\n\
<li><p>To override deprecated API:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class UserTransform: public <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform</a> {\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix(const <a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MDGContext</a>&amp;) override; // deprecated\n\
};</pre></div></li>\n\
<li><p>DO NOT override both API in one inheritance hierarchy :</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class UserTransform: public <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform</a> { \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix() override; // new \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix(const <a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MDGContext</a>&amp;) override; // deprecated \n\
}; // Error, override both API in one class \n\
\n\
class UserTransformBase: public <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform</a> { \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix(const <a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MDGContext</a>&amp;) override; // deprecated \n\
}; // Ok \n\
class UserTransformDerived: public UserTransformBase {  \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix() override; // new \n\
}; // Error, override both API in one inheritance hierarchy \n\
</pre></div><ul>\n\
<li><p>DO NOT call deprecated API from new API’s override (or call new API from deprecated API override):</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class UserTransform: public <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform</a> { \n\
     <a href=\"javascript:void(0)\" data-symbol=\"MMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_matrix.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MMatrix</a> getMatrix() override { \n\
       return <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::getMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#af6e52bdebc5f622b643dfdf60d9e15fb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform::getMatrix</a>(); // OK \n\
\n\
       //return <a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::getMatrix\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#af6e52bdebc5f622b643dfdf60d9e15fb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MPxTransform::getMatrix</a>(<a href=\"javascript:void(0)\" data-symbol=\"MDGContext::current\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html#a11a98edcfc027fb57d3a66fcfbc580a8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../&quot;}]\">MDGContext::current</a>()); // Error, calling deprecated API from new API overridden \n\
       } \n\
}; </pre></div></li>\n\
</ul></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";