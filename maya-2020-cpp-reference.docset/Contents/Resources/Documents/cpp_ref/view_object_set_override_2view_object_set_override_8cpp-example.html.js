var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: viewObjectSetOverride/viewObjectSetOverride.cpp</title>\n\
      \n\
	  \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
    \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'view_object_set_override_2view_object_set_override_8cpp-example.html\', tocPrefix);\n\
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
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: viewObjectSetOverride/viewObjectSetOverride.cpp</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">viewObjectSetOverride/viewObjectSetOverride.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2019 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MViewport2Renderer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnSet.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MApiVersion.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Class which filters what to render in a scene draw by</span></div>\n\
<div class=\"line\"><span class=\"comment\">// returning the objects in a named set as the object set filter.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Has the option of what to do as the clear operation.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Usage can be to clear on first set draw, and not clear</span></div>\n\
<div class=\"line\"><span class=\"comment\">// on subsequent draws.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>ObjectSetSceneRender : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html\">MHWRender::MSceneRender</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    ObjectSetSceneRender( <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> setName, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> clearMask ) </div>\n\
<div class=\"line\">        : <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html\">MHWRender::MSceneRender</a>( name )</div>\n\
<div class=\"line\">        , mSetName( setName ) </div>\n\
<div class=\"line\">        , mClearMask( clearMask )</div>\n\
<div class=\"line\">    {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Return filtered list of items to draw</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a>* <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a138c3fea5fc4e4371e11809ceb4cb30c\">objectSetOverride</a>()<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get members of the specified object set.</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> list; </div>\n\
<div class=\"line\">        list.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>( mSetName );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj; </div>\n\
<div class=\"line\">        list.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>( 0, obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_set.html\">MFnSet</a> set( obj ); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!set.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_set.html#a4816acf44a8c21134cbe3d92a3f60925\">getMembers</a>( mFilterSet, <span class=\"keyword\">true</span> ))</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            mFilterSet.clear();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> &amp;mFilterSet;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Return clear operation to perform</span></div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html\">MHWRender::MClearOperation</a> &amp; <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a5097b7718f03890d556dccc30e5fbf74\">clearOperation</a>()<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        mClearOperation.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#a55f714c9e4e24d416b345bfadf133783\">setMask</a>( mClearMask );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a6aec65d0f813d123fe1610fb992a8963\">mClearOperation</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> mFilterSet;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mSetName;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mClearMask;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Render override which draws 2 sets of objects in multiple &quot;passes&quot; (multiple scene renders)</span></div>\n\
<div class=\"line\"><span class=\"comment\">// by using a filtered draw for each pass.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>viewObjectSetOverride : <span class=\"keyword\">public</span> <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html\">MHWRender::MRenderOverride</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    viewObjectSetOverride( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name ) </div>\n\
<div class=\"line\">        : <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html\">MHWRender</a>::MRenderOverride( name ) </div>\n\
<div class=\"line\">        , mUIName(<span class=\"stringliteral\">&quot;Multi-pass filtered object-set renderer&quot;</span>)</div>\n\
<div class=\"line\">        , mOperation(0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> render1Name(<span class=\"stringliteral\">&quot;Render Set 1&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> render2Name(<span class=\"stringliteral\">&quot;Render Set 2&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> set1Name(<span class=\"stringliteral\">&quot;set1&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> set2Name(<span class=\"stringliteral\">&quot;set2&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> presentName(<span class=\"stringliteral\">&quot;Present Target&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Clear + render set 1</span></div>\n\
<div class=\"line\">        mRenderSet1 = <span class=\"keyword\">new</span> ObjectSetSceneRender( render1Name, set1Name,  (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>)MHWRender::MClearOperation::kClearAll );</div>\n\
<div class=\"line\">        <span class=\"comment\">// Don&#39;t clear and render set 2</span></div>\n\
<div class=\"line\">        mRenderSet2 = <span class=\"keyword\">new</span> ObjectSetSceneRender( render2Name, set2Name,  (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>)MHWRender::MClearOperation::kClearNone );</div>\n\
<div class=\"line\">        <span class=\"comment\">// Present results</span></div>\n\
<div class=\"line\">        mPresentTarget = <span class=\"keyword\">new</span> <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_present_target.html\">MHWRender::MPresentTarget</a>( presentName ); </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~viewObjectSetOverride()<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> mRenderSet1; mRenderSet1 = NULL;</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> mRenderSet2; mRenderSet2 = NULL;</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> mPresentTarget; mPresentTarget = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    MHWRender::DrawAPI <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#a0a36b8ef8730fa92f11c853752cc1e0e\">supportedDrawAPIs</a>()<span class=\"keyword\"> const override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"comment\">// this plugin supports both GL and DX</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> (MHWRender::kOpenGL | MHWRender::kOpenGLCoreProfile | MHWRender::kDirectX11);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#af6e4d3092d127b52a0ba00b54052afa6\">startOperationIterator</a>()<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        mOperation = 0; </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a>* <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#adab552bfd7cb4332ed0162b14710ec0a\">renderOperation</a>()<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">switch</span>( mOperation )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> 0 : <span class=\"keywordflow\">return</span> mRenderSet1;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> 1 : <span class=\"keywordflow\">return</span> mRenderSet2;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> 2 : <span class=\"keywordflow\">return</span> mPresentTarget;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#a5af9f73906f2f3d2adda03c604f58d73\">nextRenderOperation</a>()<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        mOperation++; </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> mOperation &lt; 3 ? <span class=\"keyword\">true</span> : <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// UI name to appear as renderer </span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#aa313aa1923be350cc23326c961c33d50\">uiName</a>()<span class=\"keyword\"> const override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> mUIName;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    ObjectSetSceneRender*       mRenderSet1;</div>\n\
<div class=\"line\">    ObjectSetSceneRender*       mRenderSet2;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_present_target.html\">MHWRender::MPresentTarget</a>*  mPresentTarget;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>                         mOperation;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>                     mUIName;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Plugin registration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> </div>\n\
<div class=\"line\">initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>(); </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (renderer)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status = renderer-&gt;<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ae677d98e2300e2f9c69abb576539ac37\">registerOverride</a>( <span class=\"keyword\">new</span> viewObjectSetOverride( <span class=\"stringliteral\">&quot;viewObjectSetOverride&quot;</span> ));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Plugin deregistration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> </div>\n\
<div class=\"line\">uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>(); </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (renderer)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status = renderer-&gt;<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a98edf29a485507737ea8f0523408296b\">deregisterOverride</a>( renderer-&gt;<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#aa0cb03754b054ca048e0b9e6265b5e82\">findRenderOverride</a>( <span class=\"stringliteral\">&quot;viewObjectSetOverride&quot;</span> ));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";