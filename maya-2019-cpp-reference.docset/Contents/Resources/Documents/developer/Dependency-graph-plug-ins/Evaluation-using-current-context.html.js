var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Evaluation using current context</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Evaluation using current context</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"evaluation-using-current-context\"></a></div>\n\
<div class=\'figure\'><img src=\'developer/images/New_Even.png\' title=\'\'></div>\n\
<p>Staring in Maya 2018, you can use the concept of current evaluation context as a more efficient way to code context evaluation.</p>\n\
<p>In previous versions of Maya, if you want to evaluate something at a context other than the normal one, you pass in the context to the method. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform::getTranslation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html#afdb40f5632edbefb787db386d445b157&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxTransform::getTranslation</a>( <a href=\"javascript:void(0)\" data-symbol=\"MSpace::Space\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpace::Space</a>, const\n\
<a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDGContext</a>&amp;, <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>* );\n\
</pre></div><p>Doing this often creates long chains of methods that pass the context in for no other reason than to pass it on to the next method. With the concept of current evaluation context, along with new utilities, no longer makes this necessary. You can now :</p>\n\
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
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";