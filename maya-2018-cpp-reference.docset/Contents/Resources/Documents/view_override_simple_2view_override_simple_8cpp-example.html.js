var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>viewOverrideSimple/viewOverrideSimple.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'view_override_simple_2view_override_simple_8cpp-example.html\', tocPrefix);\n\
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
            <h1>viewOverrideSimple/viewOverrideSimple.cpp</h1>\n\
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
<div class=\"title\">viewOverrideSimple/viewOverrideSimple.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;viewOverrideSimple.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// For override creation we return a UI name so that it shows up in as a</span></div>\n\
<div class=\"line\"><span class=\"comment\">// renderer in the 3d viewport menus.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\">viewOverrideSimple::viewOverrideSimple( <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; name )</div>\n\
<div class=\"line\">: MRenderOverride( name )</div>\n\
<div class=\"line\">, mUIName(<span class=\"stringliteral\">&quot;Simple VP2 Override&quot;</span>)</div>\n\
<div class=\"line\">, mCurrentOperation(-1)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mOperations[0] = mOperations[1] = mOperations[2] = NULL;</div>\n\
<div class=\"line\">    mOperationNames[0] = <span class=\"stringliteral\">&quot;viewOverrideSimple_Scene&quot;</span>;</div>\n\
<div class=\"line\">    mOperationNames[1] = <span class=\"stringliteral\">&quot;viewOverrideSimple_HUD&quot;</span>;</div>\n\
<div class=\"line\">    mOperationNames[2] = <span class=\"stringliteral\">&quot;viewOverrideSimple_Present&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// On destruction all operations are deleted.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">viewOverrideSimple::~viewOverrideSimple()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;3; i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (mOperations[i])</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> mOperations[i];</div>\n\
<div class=\"line\">            mOperations[i] = NULL;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">// Drawing uses all internal code so will support all draw APIs</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> viewOverrideSimple::supportedDrawAPIs()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a98fc59e3a63859014185d6ff7f574a3b\">MHWRender::kAllDevices</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Basic iterator methods which returns a list of operations in order</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The operations are not executed at this time only queued for execution</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - startOperationIterator() : to start iterating</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - renderOperation() : will be called to return the current operation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - nextRenderOperation() : when this returns false we&#39;ve returned all operations</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> viewOverrideSimple::startOperationIterator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mCurrentOperation = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a>*</div>\n\
<div class=\"line\">viewOverrideSimple::renderOperation()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mCurrentOperation &gt;= 0 &amp;&amp; mCurrentOperation &lt; 3)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (mOperations[mCurrentOperation])</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> mOperations[mCurrentOperation];</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> </div>\n\
<div class=\"line\">viewOverrideSimple::nextRenderOperation()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mCurrentOperation++;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mCurrentOperation &lt; 3)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// On setup we make sure that we have created the appropriate operations</span></div>\n\
<div class=\"line\"><span class=\"comment\">// These will be returned via the iteration code above.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The only thing that is required here is to create:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - One scene render operation to draw the scene.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - One &quot;stock&quot; HUD render operation to draw the HUD over the scene</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - One &quot;stock&quot; presentation operation to be able to see the results in the viewport</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> viewOverrideSimple::setup( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; destination )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a> *theRenderer = <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!theRenderer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a new set of operations as required</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!mOperations[0])</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mOperations[0] = (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a> *) <span class=\"keyword\">new</span> simpleViewRenderSceneRender( mOperationNames[0] );</div>\n\
<div class=\"line\">        mOperations[1] = (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a> *) <span class=\"keyword\">new</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_h_u_d_render.html\">MHWRender::MHUDRender</a>();</div>\n\
<div class=\"line\">        mOperations[2] = (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a> *) <span class=\"keyword\">new</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_present_target.html\">MHWRender::MPresentTarget</a>( mOperationNames[2] );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!mOperations[0] || </div>\n\
<div class=\"line\">        !mOperations[1] ||</div>\n\
<div class=\"line\">        !mOperations[2])</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// On cleanup we just return for returning the list of operations for</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the next render</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> viewOverrideSimple::cleanup()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mCurrentOperation = -1;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">// The only customization for the scene render (and hence derivation)</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is to be able to set the background color.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">simpleViewRenderSceneRender::simpleViewRenderSceneRender(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</div>\n\
<div class=\"line\">: MSceneRender( name )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Background color override. We get the current colors from the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// renderer and use them</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html\">MHWRender::MClearOperation</a> &amp;</div>\n\
<div class=\"line\">simpleViewRenderSceneRender::clearOperation()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> gradient = renderer-&gt;<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a0a37f5441ac2ecc2683c434a77e93234\">useGradient</a>();</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> color1 = renderer-&gt;<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a1f60fa4b3321b445538ed712fa85f493\">clearColor</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> color2 = renderer-&gt;<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#acd95ff3a7742eccf81c361a2a57761f8\">clearColor2</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> c1[4] = { color1[0], color1[1], color1[2], 1.0f };</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> c2[4] = { color2[0], color2[1], color2[2], 1.0f };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    mClearOperation.setClearColor( c1 );</div>\n\
<div class=\"line\">    mClearOperation.setClearColor2( c2 );</div>\n\
<div class=\"line\">    mClearOperation.setClearGradient( gradient);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> mClearOperation;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";