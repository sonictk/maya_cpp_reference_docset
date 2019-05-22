var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>API Classes and plug-ins</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>API Classes and plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"api-classes-and-plug-ins\"></a></div>\n\
<div class=\'section\'><a id=\"api-classes\"></a><h2 id=\"api-classes\">API Classes</h2></div>\n\
<p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadPool\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadAsync\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_async.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadAsync</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSpinLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_spin_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpinLock</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MMutexLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_mutex_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMutexLock</a></span> - main threading classes, described in detail in this chapter. Added in Maya 2008.</p>\n\
<p><span class=\'code\'>MAtomic.h</span> - cross-platform atomic operations. Added in Maya 2009.</p>\n\
<p><span class=\'code\'>MThreadUtils.h</span> - functions to synchronize plug-in OpenMP thread counts with Maya. These functions must be used by any plug-in using OpenMP with a compiler other than the Intel compiler. Added in Maya 2009.</p>\n\
<div class=\'section\'><a id=\"example-plug-ins-shipped-with-maya\"></a><h2 id=\"example-plug-ins-shipped-with-maya\">Example plug-ins shipped with Maya</h2></div>\n\
<ul>\n\
<li><span class=\'code\'>threadTestCmd</span> - usage example of MThreadPool. Shows how to initialize and manage the pool, create tasks that will be mapped to threads, and combine data from the threads to evaluate the final result.</li>\n\
<li><span class=\'code\'>threadTestWithLocksCmd</span> - usage example of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadPool\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadAsync\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_async.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadAsync</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSpinLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_spin_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpinLock</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MMutexLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_mutex_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMutexLock</a></span>. This plug-in evaluates pi using multiple threads. It builds on the previous <span class=\'code\'>threadTestCmd</span> example by adding examples showing the use of the various lock types provided by the Maya API to update a global variable, and also has an example of parallel evaluation using asynchronous threads combined with a barrier construct that causes the threads to synchronize when they are finished. A thread pool automatically synchronizes. Note that the examples in this plug-in are for illustration purposes, and are not intended to demonstrate maximum efficiency in all cases. For example, the locking methods are clearly inefficient, but do demonstrate usage of locks in real code.</li>\n\
<li><span class=\'code\'>splatDeformer</span> - example of threadsafe deformer plug-in. This is described in more detail in the body of this document. To use the plug-in, create two dense poly meshes nested one inside the other, select the inner then the outer, and invoke the deformer using the associated mel script. Adjusting the envelope attribute causes recomputes, which can be used to judge performance. Adjust the number of active threads to check scaling performance using the mel command <span class=\'code\'>threadCount -n &lt;numThreads&gt;</span>. Requires OpenMP.</li>\n\
<li><span class=\'code\'>sseDeformer</span> - example of autovectorization using Intel compiler</li>\n\
<li><span class=\'code\'>threadedBoundingBox</span> - example of false sharing. Create a large (for example, 1 million poly) primitive and invoke the command. Requires OpenMP.</li>\n\
<li><span class=\'code\'>threadingLockTests</span> - performance test for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSpinLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_spin_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpinLock</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MMutexLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_mutex_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMutexLock</a></span>, and atomic operations. Requires OpenMP.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";