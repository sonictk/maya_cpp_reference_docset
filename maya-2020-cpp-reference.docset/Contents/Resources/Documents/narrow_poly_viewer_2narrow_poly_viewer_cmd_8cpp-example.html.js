var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: narrowPolyViewer/narrowPolyViewerCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'narrow_poly_viewer_2narrow_poly_viewer_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: narrowPolyViewer/narrowPolyViewerCmd.cpp</h1>\n\
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
<div class=\"title\">narrowPolyViewer/narrowPolyViewerCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  File Name: narrowPolyViewerCmd.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      A command used for testing multiple camera drawing into a single view.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      See narrowPolyViewerCmd.h for a description.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;narrowPolyViewerCmd.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDag.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgParser.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnCamera.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">narrowPolyViewerCmd::narrowPolyViewerCmd()</div>\n\
<div class=\"line\">:   <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_model_editor_command.html\">MPxModelEditorCommand</a>()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Class constructor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">narrowPolyViewerCmd::~narrowPolyViewerCmd()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Class destructor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* narrowPolyViewerCmd::creator()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Create the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> narrowPolyViewerCmd();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> narrowPolyViewerCmd::appendSyntax()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Add syntax to the command. All of the parent syntax is added</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      before this call is made.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> ReturnStatus;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> theSyntax = syntax(&amp;ReturnStatus);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess != ReturnStatus) {</div>\n\
<div class=\"line\">        <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;Could not get the parent&#39;s syntax&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> ReturnStatus;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    theSyntax.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kInitFlag,</div>\n\
<div class=\"line\">                      kInitFlagLong);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    theSyntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kResultsFlag,</div>\n\
<div class=\"line\">                      kResultsFlagLong);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    theSyntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kClearFlag,</div>\n\
<div class=\"line\">                      kClearFlagLong);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    theSyntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kToleranceFlag,</div>\n\
<div class=\"line\">                      kToleranceFlagLong,</div>\n\
<div class=\"line\">                      MSyntax::kDouble);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ReturnStatus;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> narrowPolyViewerCmd::doEditFlags()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Handle edits for flags added by this class.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      If the flag is unknown, return MS::kSuccess and the parent class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      will attempt to process the flag. Returning MS::kUnknownParameter</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      will cause the parent class to process the flag.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> ReturnStatus = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html\">MPx3dModelView</a> *user3dModelView = modelView();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == user3dModelView) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;NULL == user3dModelView!&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (user3dModelView-&gt;<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a85a933d7490e625a898783fba6ee8895\">viewType</a>() != <span class=\"stringliteral\">&quot;narrowPolyViewer&quot;</span>) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;This view is not a narrowPolyViewer&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  This is now safe to do, since the above test passed.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    narrowPolyViewer *mpView = (narrowPolyViewer *)user3dModelView;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html\">MArgParser</a> argData = parser();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (argData.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>(kInitFlag)) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> initTests(*mpView);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>(kResultsFlag)) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> testResults(*mpView);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>(kClearFlag)) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> clearResults(*mpView);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>(kToleranceFlag)) {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> tol;</div>\n\
<div class=\"line\">        argData.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#a74bdc5edb84381a46ce3a0de74230938\">getFlagArgument</a>(kToleranceFlag, 0, tol);</div>\n\
<div class=\"line\">        mpView-&gt;tol = tol;</div>\n\
<div class=\"line\">        mpView-&gt;refresh(<span class=\"keyword\">true</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ReturnStatus;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> narrowPolyViewerCmd::doQueryFlags()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Don&#39;t do anything for the query.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ParentClass::doQueryFlags();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> narrowPolyViewerCmd::clearResults(narrowPolyViewer &amp;view)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{   </div>\n\
<div class=\"line\">    view.removeAllCameras();</div>\n\
<div class=\"line\">    fCameraList.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> narrowPolyViewerCmd::initTests(narrowPolyViewer &amp;view)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(<span class=\"stringliteral\">&quot;narrowPolyViewerCmd::initTests&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    clearResults(view);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Add every camera into the scene. Don&#39;t change the main camera,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  it is OK that it gets reused.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> cameraPath;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dag.html\">MItDag</a> dagIterator(MItDag::kDepthFirst, <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7af2731fae06310295129a8fb3dba5fbb2\">MFn::kCamera</a>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (; !dagIterator.isDone(); dagIterator.next()) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!dagIterator.getPath(cameraPath)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html\">MFnCamera</a> camera(cameraPath, &amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (MS::kSuccess != status) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(camera.fullPathName());</div>\n\
<div class=\"line\">        fCameraList.append(cameraPath);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess !=</div>\n\
<div class=\"line\">        view.setCameraList(fCameraList)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;Could not set the list of cameras&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        view.refresh();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> narrowPolyViewerCmd::testResults(narrowPolyViewer &amp;view)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;fCameraList.length() = &quot;</span> &lt;&lt; fCameraList.length() &lt;&lt; endl;</div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;fCameraList = &quot;</span> &lt;&lt; fCameraList &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;view.fTestCameraList.length() = &quot;</span> &lt;&lt; view.fTestCameraList.length() &lt;&lt; endl;</div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;view.fTestCameraList = &quot;</span> &lt;&lt; view.fTestCameraList &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";