var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: cvPosCmd/cvPosCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'cv_pos_cmd_2cv_pos_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: cvPosCmd/cvPosCmd.cpp</h1>\n\
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
<div class=\"title\">cvPosCmd/cvPosCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;cvPos&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates how to obtain the world or local space position of a NURBS CV or a polygonal vertex.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// The command accepts the flags -l/-local or -w/-world (where world is the default) to indicate whether a local</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or world space location of the CV is required. The command can handle at most 1 CV per invocation because it returns</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the coordinate as 3 element (a MEL float array). If no arguments are provided to the command, it checks the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// active selection list. If exactly one CV or vertex is present in that list, it returns its location.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// If more than one is selected, an error occurs.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Alternatively, a single component can be specified on the command line using the MEL syntax. For example:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// cvPos nurbsSphereShape1.cv[0][0];</span></div>\n\
<div class=\"line\"><span class=\"comment\">// It returns the world space position of the specified CV. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItCurveCV.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSurfaceCV.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItMeshVertex.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>cvPos : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                cvPos();</div>\n\
<div class=\"line\">        ~cvPos() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a> ( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a3b583cbc082553f11853db459b2f7795\">redoIt</a> () <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a0789a8d51244cad0495abb2b811c39db\">undoIt</a> () <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a2f6c567cc02d575ab14006d9c5e37761\">isUndoable</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>      <span class=\"keywordtype\">void</span>* creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>      point;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">cvPos::cvPos() :</div>\n\
<div class=\"line\">    point(0.0, 0.0, 0.0)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">cvPos::~cvPos() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* cvPos::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> cvPos;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> cvPos::isUndoable()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> cvPos::undoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> cvPos::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> componentName;</div>\n\
<div class=\"line\">    MSpace::Space transformSpace = MSpace::kWorld;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; args.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a> (); i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> argStr;</div>\n\
<div class=\"line\">        args.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#adc169cdc872457a2664c3d66c29cf504\">get</a> (i, argStr);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> (<span class=\"stringliteral\">&quot;-l&quot;</span>) == argStr || <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> (<span class=\"stringliteral\">&quot;-local&quot;</span>) == argStr)</div>\n\
<div class=\"line\">            transformSpace = MSpace::kObject;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> (<span class=\"stringliteral\">&quot;-w&quot;</span>) == args.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a> (i) ||</div>\n\
<div class=\"line\">                 <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> (<span class=\"stringliteral\">&quot;-world&quot;</span>) == argStr)</div>\n\
<div class=\"line\">            transformSpace = MSpace::kWorld;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            componentName = argStr;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     component;</div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>    dagPath;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!componentName.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a580388f31f60c46fac867ca48a48da1e\">length</a> ()) {</div>\n\
<div class=\"line\">        <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> activeList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a> (activeList);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter (activeList, <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a02fee4c0e0e6f1b7ab7a678d61627461\">MFn::kComponent</a>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (iter.isDone ()) {</div>\n\
<div class=\"line\">            displayError (<span class=\"stringliteral\">&quot;No components selected&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            iter.getDagPath (dagPath, component);</div>\n\
<div class=\"line\">            iter.next ();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (!iter.isDone ()) {</div>\n\
<div class=\"line\">                displayError (<span class=\"stringliteral\">&quot;More than one component is selected&quot;</span>);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> list;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (! list.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>( componentName ) ) {</div>\n\
<div class=\"line\">            componentName += <span class=\"stringliteral\">&quot;: no such component&quot;</span>;</div>\n\
<div class=\"line\">            displayError(componentName);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure; <span class=\"comment\">// no such component</span></div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( list );</div>\n\
<div class=\"line\">        iter.getDagPath( dagPath, component );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (component.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a>()) {</div>\n\
<div class=\"line\">        displayError(<span class=\"stringliteral\">&quot;not a component&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">switch</span> (component.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a7e5fd5d37dde6df8c0cf350e00ca0a75\">apiType</a>()) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> <a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a904be66e6029ec717a5a4a2aea7ffebf\">MFn::kCurveCVComponent</a>:</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_curve_c_v.html\">MItCurveCV</a> curveCVIter( dagPath, component );</div>\n\
<div class=\"line\">            point = curveCVIter.position(transformSpace );</div>\n\
<div class=\"line\">            curveCVIter.next();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (!curveCVIter.isDone()) {</div>\n\
<div class=\"line\">                displayError (<span class=\"stringliteral\">&quot;More than one component is selected&quot;</span>);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a972735c65ba6351b4db180769f7e01c0\">MFn::kSurfaceCVComponent</a>:</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_surface_c_v.html\">MItSurfaceCV</a> surfCVIter( dagPath, component, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            point = surfCVIter.position(transformSpace );</div>\n\
<div class=\"line\">            surfCVIter.next();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (!surfCVIter.isDone()) {</div>\n\
<div class=\"line\">                displayError (<span class=\"stringliteral\">&quot;More than one component is selected&quot;</span>);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> <a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a040adaedfb9ad2fcc82cdeca1e214522\">MFn::kMeshVertComponent</a>:</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_vertex.html\">MItMeshVertex</a> vertexIter( dagPath, component );</div>\n\
<div class=\"line\">            point = vertexIter.position(transformSpace );</div>\n\
<div class=\"line\">            vertexIter.next();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (!vertexIter.isDone()) {</div>\n\
<div class=\"line\">                displayError (<span class=\"stringliteral\">&quot;More than one component is selected&quot;</span>);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">default</span>:</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;Selected unsupported type: (&quot;</span> &lt;&lt; component.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a7e5fd5d37dde6df8c0cf350e00ca0a75\">apiType</a>()</div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot;): &quot;</span> &lt;&lt; component.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a3dad4d354c5b968cf4eccfffcdb824f4\">apiTypeStr</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> redoIt();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> cvPos::redoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    clearResult();</div>\n\
<div class=\"line\">    appendToResult( point.x );</div>\n\
<div class=\"line\">    appendToResult( point.y );</div>\n\
<div class=\"line\">    appendToResult( point.z );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;cvPos&quot;</span>, cvPos::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;cvPos&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
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