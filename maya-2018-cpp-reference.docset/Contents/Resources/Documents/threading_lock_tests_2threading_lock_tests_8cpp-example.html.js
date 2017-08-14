var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>threadingLockTests/threadingLockTests.cpp</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'threading_lock_tests_2threading_lock_tests_8cpp-example.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>threadingLockTests/threadingLockTests.cpp</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">threadingLockTests/threadingLockTests.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTimer.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMutexLock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSpinLock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MAtomic.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MThreadUtils.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef MAYA_TBB</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #include &lt;tbb/blocked_range.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #include &lt;tbb/parallel_for.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( threadingLockTests, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> doMutexCalc(<span class=\"keywordtype\">int</span> iterations, <span class=\"keywordtype\">int</span> val)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sum = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html\">MMutexLock</a> mutex;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    tbb::parallel_for(tbb::blocked_range&lt;int&gt;(0, iterations),</div>\n\
<div class=\"line\">        [&amp;](<span class=\"keyword\">const</span> tbb::blocked_range&lt;int&gt; &amp;br) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = br.begin(); i &lt; br.end(); i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #pragma omp parallel for</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;iterations; i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        mutex.<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#aa81aed607133209dade63a226818224d\">lock</a>();</div>\n\
<div class=\"line\">        sum += val;</div>\n\
<div class=\"line\">        mutex.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#a9278be8203e1c42e2619179882ae4403\">unlock</a>();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    });</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"keywordflow\">return</span> sum;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> doSpinCalc(<span class=\"keywordtype\">int</span> iterations, <span class=\"keywordtype\">int</span> val)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sum = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_spin_lock.html\">MSpinLock</a> mutex;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    tbb::parallel_for(tbb::blocked_range&lt;int&gt;(0, iterations),</div>\n\
<div class=\"line\">        [&amp;](<span class=\"keyword\">const</span> tbb::blocked_range&lt;int&gt; &amp;br) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = br.begin(); i &lt; br.end(); i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #pragma omp parallel for</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;iterations; i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        mutex.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_spin_lock.html#aa81aed607133209dade63a226818224d\">lock</a>();</div>\n\
<div class=\"line\">        sum += val;</div>\n\
<div class=\"line\">        mutex.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_spin_lock.html#a9278be8203e1c42e2619179882ae4403\">unlock</a>();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    });</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"keywordflow\">return</span> sum;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> doAtomicCalc(<span class=\"keywordtype\">int</span> iterations, <span class=\"keywordtype\">int</span> val)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sum = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    tbb::parallel_for(tbb::blocked_range&lt;int&gt;(0, iterations),</div>\n\
<div class=\"line\">        [&amp;](<span class=\"keyword\">const</span> tbb::blocked_range&lt;int&gt; &amp;br) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = br.begin(); i &lt; br.end(); i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #pragma omp parallel for</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;iterations; i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_atomic.html#acddba9e14f0627bf4e38792f81a47fd4\">MAtomic::increment</a>(&amp;sum, val);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    });</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"keywordflow\">return</span> sum;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> doReductionCalc(<span class=\"keywordtype\">int</span> iterations, <span class=\"keywordtype\">int</span> val)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sum = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    tbb::parallel_for(tbb::blocked_range&lt;int&gt;(0, iterations),</div>\n\
<div class=\"line\">        [&amp;](<span class=\"keyword\">const</span> tbb::blocked_range&lt;int&gt; &amp;br) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = br.begin(); i &lt; br.end(); i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #pragma omp parallel for reduction(+:sum)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;iterations; i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        sum += val;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    });</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"keywordflow\">return</span> sum;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> doUnsafeCalc(<span class=\"keywordtype\">int</span> iterations, <span class=\"keywordtype\">int</span> val)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sum = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    tbb::parallel_for(tbb::blocked_range&lt;int&gt;(0, iterations),</div>\n\
<div class=\"line\">        [&amp;](<span class=\"keyword\">const</span> tbb::blocked_range&lt;int&gt; &amp;br) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = br.begin(); i &lt; br.end(); i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #pragma omp parallel for</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;iterations; i++) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        sum += val;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(MAYA_TBB)</span></div>\n\
<div class=\"line\">    });</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"keywordflow\">return</span> sum;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> doSerialCalc(<span class=\"keywordtype\">int</span> iterations, <span class=\"keywordtype\">int</span> val)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sum = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;iterations; i++) {</div>\n\
<div class=\"line\">        sum += val;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> sum;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> threadingLockTests::doIt( <span class=\"keyword\">const</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( MS::kSuccess != stat )</div>\n\
<div class=\"line\">        cout&lt;&lt;<span class=\"stringliteral\">&quot;Error creating curve.&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(args.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>() != 1) {</div>\n\
<div class=\"line\">        <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> str = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Invalid number of arguments, usage: threadingLockTests 1000000&quot;</span>);</div>\n\
<div class=\"line\">        <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(str);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// do this if we are using an OpenMP implementation that is not the same as Maya&#39;s.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Even if it is the same, it does no harm to make this call.</span></div>\n\
<div class=\"line\">    <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_thread_utils.html#ab857568ad1f4a49da93939d7db7c2a1c\">MThreadUtils::syncNumOpenMPThreads</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    printf(<span class=\"stringliteral\">&quot;In threadedLockTests, numthreads %d\\n&quot;</span>, <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_thread_utils.html#aa7633759a74ed00613b7d292a457d5d6\">MThreadUtils::getNumThreads</a>());</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> iterations = args.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a54e9c6d91b7b999624b2384bc52f12a2\">asInt</a>( 0, &amp;stat );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> increment = 2;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sum = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> repeat = 1;</div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> timer;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> out;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Mutex lock calculation</span></div>\n\
<div class=\"line\">    timer.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;repeat; i++) {</div>\n\
<div class=\"line\">        sum = doMutexCalc(iterations, increment);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(sum != iterations*increment) {</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;doMutexCalc failed, sum %d\\n&quot;</span>, sum);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    timer.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">    out = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Runtime doMutexCalc &quot;</span>) + timer.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>();</div>\n\
<div class=\"line\">    <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(out);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Spin mutex lock calculation</span></div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;repeat; i++) {</div>\n\
<div class=\"line\">        sum = doSpinCalc(iterations, increment);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(sum != iterations*increment) {</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;doSpinCalc failed, sum %d\\n&quot;</span>, sum);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">    out = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Runtime doSpinCalc &quot;</span>) + timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(out);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Atomic calculation</span></div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;repeat; i++) {</div>\n\
<div class=\"line\">        sum = doAtomicCalc(iterations, increment);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(sum != iterations*increment) {</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;doAtomicCalc failed, sum %d\\n&quot;</span>, sum);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">    out = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Runtime doAtomicCalc &quot;</span>) + timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(out);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Reduction calculation</span></div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;repeat; i++) {</div>\n\
<div class=\"line\">        sum = doReductionCalc(iterations, increment);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(sum != iterations*increment) {</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;doReductionCalc failed, sum %d\\n&quot;</span>, sum);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">    out = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Runtime doReductionCalc &quot;</span>) + timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(out);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Unsafe calculation (race condition)</span></div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;repeat; i++) {</div>\n\
<div class=\"line\">        sum = doUnsafeCalc(iterations, increment);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(sum != iterations*increment) {</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;doUnsafeCalc failed, sum %d\\n&quot;</span>, sum);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">    out = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Runtime doUnsafeCalc &quot;</span>) + timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(out);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Unthreaded calculation</span></div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;repeat; i++) {</div>\n\
<div class=\"line\">        sum = doSerialCalc(iterations, increment);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(sum != iterations*increment) {</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;doUnthreadedCalc failed, sum %d\\n&quot;</span>, sum);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">    out = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Runtime doUnthreadedCalc &quot;</span>) + timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(out);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";