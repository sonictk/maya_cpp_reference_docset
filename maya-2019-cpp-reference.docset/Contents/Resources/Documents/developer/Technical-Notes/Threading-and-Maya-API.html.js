var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Threading and Maya API</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Threading and Maya API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"threading-and-maya-api\"></a></div>\n\
<p>Plug-ins can utilize threaded code if certain guidelines are followed. Below are some notes that provide guidance for this issue:</p>\n\
<ol>\n\
<li>Maya uses the following types of threads:\n\
<ul>\n\
<li>Linux - pthreads</li>\n\
<li>Mac OS X - pthreads</li>\n\
<li>Windows - Native Windows API threads</li>\n\
</ul></li>\n\
<li>The components of Maya that are available in the API are single threaded. It is always best to call into the Maya API from the main Maya thread. It is acceptable to thread your code as long as it is independent of calls to the Maya API. The exception to this rule is <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::compute()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::compute()</a></span> can have threaded calls for software shaders. But this depends on the setup of the node and the software renderer.</li>\n\
<li>Although some operations in Maya have been threaded, they are not exposed in the API.</li>\n\
<li>It is possible to call into Maya from an secondary thread using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::executeCommandOnIdle()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a2c877a6e116f8fd3a6e76387403c023a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::executeCommandOnIdle()</a></span> method. In Python, the equivalent <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGlobal::executePythonCommandOnIdle()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#ab999a152a46888cb5dfc2871466f9c40&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::executePythonCommandOnIdle()</a></span> method would be used. The command will not execute immediately; instead, the command will be added to the idle event queue and executed as idle processing allows. The result of the command will not be returned to the caller. This call can be useful for updating items such as the progress bar from another thread.</li>\n\
<li><p>There are four C++ API classes for threading:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadPool\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadAsync\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_async.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadAsync</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSpinLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_spin_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSpinLock</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MMutexLock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_mutex_lock.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMutexLock</a></span></li>\n\
</ul>\n\
<p>These classes can be used to implement threaded algorithms for non-Maya API functionality. Several examples that utilize these classes can be found in the developer kit. (These classes are not available in the Maya Python API.)</p>\n\
<p><strong>MThreadPool</strong> gives access to a pool of threads to which tasks can be assigned. The number of tasks does not have to equal the number of threads, in fact for load balancing it is usually better if the number of tasks exceeds the number of threads. Maya will internally balance the work among the threads for optimal efficiency. The number of threads in the pool is equal to the number of logical processors. It is not necessary to delete the thread pool after each usage, and for performance reasons it is better not to do so, since the threads will be put to sleep when a parallel region finishes, which means they can be restarted quickly.</p>\n\
<p><strong>MThreadAsync</strong> allows the creation of one of more threads that can run for a long time. They are not drawn from the thread pool created and managed by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadPool\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool</a></span>, but are independent threads. These threads can be used for longer running tasks. Since they are not created from the thread pool, the number and workload of such threads should be managed carefully to avoid oversubscription issues, where the number of busy threads exceeds the hardware resources available.</p>\n\
<p><strong>MMutexLock</strong> is a locking primitive that can be used with both <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadPool\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadAsync\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_async.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadAsync</a></span> threads. It allows standard mutex locking of threads.</p>\n\
<p><strong>MSpinLock</strong> is a lock that spin-waits, so can be more efficient than a mutex lock in situations where the lock is likely to be held for a very short time. However since the lock spin waits, it is a heavy CPU consumer, and should not be used when locks are likely to be held for a long time.</p></li>\n\
<li><p>Threading with Python is possible with the built-in thread module. The thread module can be used to implement threaded algorithms for non-Maya API functionality. Please see the Python and threading section of the <em>Python</em> Guide for more details.</p></li>\n\
</ol>\n\
<p>The following example demonstrates how to find primes using a serial and a threaded approach. The threaded approach uses the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MThreadPool\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool</a></span> class.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &lt;math.h&gt;\n\
#include &lt;maya/MIOStream.h&gt;\n\
#include &lt;maya/MSimple.h&gt;\n\
#include &lt;maya/MTimer.h&gt;\n\
#include &lt;maya/MGlobal.h&gt;\n\
#include &lt;maya/MThreadPool.h&gt;\n\
<a href=\"javascript:void(0)\" data-symbol=\"DeclareSimpleCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">DeclareSimpleCommand</a>( threadTestCmd, PLUGIN_COMPANY, &quot;2017&quot;);\n\
typedef struct _threadDataTag\n\
{\n\
    int threadNo;\n\
    long primesFound;\n\
    long start, end;\n\
} threadData;\n\
\n\
typedef struct _taskDataTag\n\
{\n\
    long start, end, totalPrimes;\n\
} taskData;\n\
\n\
#define NUM_TASKS   16\n\
// No global information used in function\n\
\n\
static bool TestForPrime(int val)\n\
{\n\
    int limit, factor = 3;\n\
    limit = (long)(sqrtf((float)val)+0.5f);\n\
    while( (factor &lt;= limit) &amp;&amp; (val % factor))\n\
        factor ++;\n\
    return (factor &gt; limit);\n\
}\n\
\n\
// Primes finder. This function is called from multiple threads\n\
MThreadRetVal Primes(void *data)\n\
{\n\
    threadData *myData = (threadData *)data;\n\
    for( int i = myData-&gt;start + myData-&gt;threadNo*2; i &lt;= myData-&gt;end; i += 2*NUM_TASKS )\n\
    {\n\
        if( TestForPrime(i) )\n\
        myData-&gt;primesFound++;\n\
    }\n\
    return (MThreadRetVal)0;\n\
}\n\
\n\
// Function to create thread tasks\n\
void DecomposePrimes(void *data, MThreadRootTask *root)\n\
{\n\
    taskData *taskD = (taskData *)data;\n\
    threadData tdata[NUM_TASKS];\n\
    for( int i = 0; i &lt; NUM_TASKS; ++i )\n\
    {\n\
        tdata[i].threadNo = i;\n\
        tdata[i].primesFound = 0;\n\
        tdata[i].start = taskD-&gt;start;\n\
        tdata[i].end = taskD-&gt;end;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MThreadPool::createTask\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html#a611da972604ffe306fdb87b4ab06ed16&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool::createTask</a>(Primes, (void *)&amp;tdata[i], root);\n\
    }\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MThreadPool::executeAndJoin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html#ae9e9c1be8def42f1040adf93edf4d5e7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool::executeAndJoin</a>(root);\n\
    for( int i = 0; i &lt; NUM_TASKS; ++i )\n\
    {\n\
        taskD-&gt;totalPrimes += tdata[i].primesFound;\n\
    }\n\
}\n\
\n\
// Single threaded calculation\n\
int SerialPrimes(int start, int end)\n\
{\n\
    int primesFound = 0;\n\
    for( int i = start; i &lt;= end; i+=2)\n\
    {\n\
        if( TestForPrime(i) )\n\
            primesFound++;\n\
    }\n\
    return primesFound;\n\
}\n\
\n\
// Set up and tear down parallel tasks\n\
int ParallelPrimes(int start, int end)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat = <a href=\"javascript:void(0)\" data-symbol=\"MThreadPool::init\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html#a81616e4d1ab97b678585e86b19e3cdff&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool::init</a>();\n\
    if( <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a> != stat ) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> str = <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;Error creating threadpool&quot;);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayError\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayError</a>(str);\n\
        return 0;\n\
    }\n\
\n\
    taskData tdata;\n\
    tdata.totalPrimes = 0;\n\
    tdata.start = start;\n\
    tdata.end = end;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MThreadPool::newParallelRegion\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html#a943a1eb7bb753be409a66388900890e4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool::newParallelRegion</a>(DecomposePrimes, (void *)&amp;tdata);\n\
    // pool is reference counted. Release reference to current thread instance\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MThreadPool::release\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html#a23b477d0e2d399f75d585d154c346591&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool::release</a>();\n\
    // release reference to whole pool which deletes all threads\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MThreadPool::release\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_thread_pool.html#a23b477d0e2d399f75d585d154c346591&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MThreadPool::release</a>();\n\
    return tdata.totalPrimes;\n\
}\n\
\n\
// MSimple command that invokes the serial and parallel thread calculations\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> threadTestCmd::doIt( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> introStr = <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;Computation of primes using the Maya API&quot;);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>(introStr);\n\
    if(args.length() != 2) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> str = <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;Invalid number of arguments, usage: threadTestCmd 1 10000&quot;);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayError\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayError</a>(str);\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
    }\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat;\n\
    int start = args.asInt( 0, &amp;stat );\n\
    if ( MS::kSuccess != stat ) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> str = <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;Invalid argument 1, usage: threadTestCmd 1 10000&quot;);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayError\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayError</a>(str);\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
    }\n\
    int end = args.asInt( 1, &amp;stat );\n\
    if ( MS::kSuccess != stat ) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> str = <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;Invalid argument 2, usage: threadTestCmd 1 10000&quot;);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayError\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayError</a>(str);\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
    }\n\
\n\
    // start search on an odd number\n\
    if((start % 2) == 0 ) start++;\n\
    // run single threaded\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MTimer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_timer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTimer</a> timer;\n\
    timer.beginTimer();\n\
    int serialPrimes = SerialPrimes(start, end);\n\
    timer.endTimer();\n\
    double serialTime = timer.elapsedTime();\n\
    // run multithreaded\n\
    timer.beginTimer();\n\
    int parallelPrimes = ParallelPrimes(start, end);\n\
    timer.endTimer();\n\
    double parallelTime = timer.elapsedTime();\n\
    // check for correctness\n\
    if ( serialPrimes != parallelPrimes ) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> str(&quot;Error: Computations inconsistent&quot;);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayError\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayError</a>(str);\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
    }\n\
    // print results\n\
    double ratio = serialTime/parallelTime;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> str = <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;\\nElapsed time for serial computation: &quot;) + serialTime + <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;s\\n&quot;);\n\
    str += <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;Elapsed time for parallel computation: &quot;) + parallelTime + <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;s\\n&quot;);\n\
    str += <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;Speedup: &quot;) + ratio + <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;x\\n&quot;);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>(str);\n\
    return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a>;\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";