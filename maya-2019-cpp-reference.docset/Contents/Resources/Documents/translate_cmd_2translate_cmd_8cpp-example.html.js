var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>translateCmd/translateCmd.cpp</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'translate_cmd_2translate_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>translateCmd/translateCmd.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
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
<div class=\"title\">translateCmd/translateCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;translate&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in translates the CVs of selected curves, surfaces, or polygonal</span></div>\n\
<div class=\"line\"><span class=\"comment\">// objects by a user specified amount. It is a good example of manipulating CVs</span></div>\n\
<div class=\"line\"><span class=\"comment\">// on these three data types. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use it, select an object and then execute &quot;translate 1.0 2.0 3.0&quot; in the command window.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Note that this command will not work on NURBS primitives with construction history.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The history forces the CVs to return to their original position immediately after</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the translate command has moved them. To allow the translate command to work on such surfaces,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// you must either delete the construction history on the object (Edit &gt; Delete by Type &gt; History),</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or open the Tool Settings window before creating the surface and turn off History. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItCurveCV.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSurfaceCV.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItMeshVertex.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>translate : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    translate() {};</div>\n\
<div class=\"line\">                ~translate() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">translate::~translate() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* translate::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> translate();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// If given no arguments, translate all selected objects by 1 unit on</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the X axis.  If 3 double parameters are given, they specify the X,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Y, and Z components of the vector to translate objects by.</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> translate::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a>     vector( 1.0, 0.0, 0.0 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( args.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>() == 3 )  {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> i = 0;</div>\n\
<div class=\"line\">        vector = args.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a87eafcffbb8caa4eed88ba9cdfc5681a\">asVector</a>(i,3);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a selection list iterator</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> slist;</div>\n\
<div class=\"line\">    <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( slist );</div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( slist, <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a94dd08feda7b2cf0ff8262312c4fcc09\">MFn::kInvalid</a>, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat ) {</div>\n\
<div class=\"line\">        <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>    mdagPath;       <span class=\"comment\">// Item dag path</span></div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     mComponent;     <span class=\"comment\">// Current component</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Translate all selected objects</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( ; !iter.isDone(); iter.next() ) </div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Get path and possibly a component</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            iter.getDagPath( mdagPath, mComponent );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_curve_c_v.html\">MItCurveCV</a> cvFn( mdagPath, mComponent, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat ) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> ( ; !cvFn.isDone(); cvFn.next() ) {</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span> ( MS::kFailure == cvFn.translateBy( vector ) ) {</div>\n\
<div class=\"line\">                        cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error setting CV\\n&quot;</span>;</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                cvFn.updateCurve();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_surface_c_v.html\">MItSurfaceCV</a> sCvFn( mdagPath, mComponent, <span class=\"keyword\">true</span>, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat ) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> ( ; !sCvFn.isDone(); sCvFn.nextRow() ) {</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">for</span> ( ; !sCvFn.isRowDone(); sCvFn.next() ) {</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">if</span> ( MS::kFailure == sCvFn.translateBy( vector ) ) {</div>\n\
<div class=\"line\">                            cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error setting CV\\n&quot;</span>;</div>\n\
<div class=\"line\">                        }</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                sCvFn.updateSurface();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_vertex.html\">MItMeshVertex</a> vtxFn( mdagPath, mComponent, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat ) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> ( ; !vtxFn.isDone(); vtxFn.next() ) {</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span> ( MS::kFailure == vtxFn.translateBy( vector ) ) {</div>\n\
<div class=\"line\">                        cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error setting Vertex\\n&quot;</span>;</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                vtxFn.updateSurface();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error creating selection list iterator\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the command we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;translate&quot;</span>, translate::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;translate&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";