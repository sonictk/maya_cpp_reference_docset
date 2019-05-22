var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>findFileTexturesCmd/findFileTexturesCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'find_file_textures_cmd_2find_file_textures_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>findFileTexturesCmd/findFileTexturesCmd.cpp</h1>\n\
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
<div class=\"title\">findFileTexturesCmd/findFileTexturesCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;findFileTextures&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates how to navigate the dependency graph both manually and using the DG iterator.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The command searches the dependency graph for file texture nodes that are attached to the shading engine.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example also illustrates the use of filters when navigating the DG.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// As file texture nodes are found, information about their attributes is extracted and printed on standard error.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use this plug-in:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (1) Load a scene that contains some texture information, and find a node (or nodes) that are being shaded by a file texture.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (2) Execute &quot;findFileTextures nodeName1 nodeName2 ...&quot; to find the file textures. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObjectArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDependencyGraph.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnStringData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This small example illustrates that a node of a particular type can be found</span></div>\n\
<div class=\"line\"><span class=\"comment\">// by walking through the DG graph.  In this example, the nodes of type </span></div>\n\
<div class=\"line\"><span class=\"comment\">// fileTexture has to be found.  The plugin will start from the shape node that</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the user selected, or the ones passing in as parameters.  It then look for a</span></div>\n\
<div class=\"line\"><span class=\"comment\">// connection to the shadingEngine.  Once found, it will use a dependency graph</span></div>\n\
<div class=\"line\"><span class=\"comment\">// iterator with a filter that matches the type desire to iterate through the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// connections to the shadingEngine. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> dumpInfo( <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> fileNode, </div>\n\
<div class=\"line\">               <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>&amp; nodeFn, </div>\n\
<div class=\"line\">               <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a>&amp; nodePath )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> currentNode;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> fileAttr = nodeFn.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a6117a63ae3bb2d03aa976dc8732d93a5\">attribute</a>(<span class=\"stringliteral\">&quot;fileTextureName&quot;</span>);</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>   plugToFile( fileNode, fileAttr ); </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>  dgFn;</div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;Name:    &quot;</span> &lt;&lt; nodeFn.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> fnameValue;</div>\n\
<div class=\"line\">    stat = plugToFile.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ab017c746e6e0c13bf994b2458d3b5eee\">getValue</a>( fnameValue );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;error getting value from plug&quot;</span>);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_string_data.html\">MFnStringData</a> stringFn( fnameValue );</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;Texture: &quot;</span> &lt;&lt; stringFn.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_string_data.html#a72b737bb2b6f7646cf59c635d37ee017\">string</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;Path:    &quot;</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">int</span> i = nodePath.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>()-1; i &gt;= 0; i-- ) {</div>\n\
<div class=\"line\">        currentNode = nodePath[i];</div>\n\
<div class=\"line\">        dgFn.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a>( currentNode );</div>\n\
<div class=\"line\">        cerr &lt;&lt; dgFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>() &lt;&lt; <span class=\"stringliteral\">&quot;(&quot;</span> &lt;&lt; dgFn.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a895d4516a7ad8b46fabddf057865ae94\">typeName</a>() &lt;&lt; <span class=\"stringliteral\">&quot;)&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( i &gt; 0)</div>\n\
<div class=\"line\">            cerr &lt;&lt; <span class=\"stringliteral\">&quot; -&gt;\\n         &quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    cerr &lt;&lt; endl;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\"><a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( findFileTextures, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> findFileTextures::doIt( <span class=\"keyword\">const</span> <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> list;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>        status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( args.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>() &gt; 0 ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Arg list is &gt; 0 so use objects that were passes in</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> argStr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> last = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> i = 0; i &lt; last; i++ ) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Attempt to find all of the objects matched</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// by the string and add them to the list</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            args.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#adc169cdc872457a2664c3d66c29cf504\">get</a>( i, argStr );  </div>\n\
<div class=\"line\">            list.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>( argStr ); </div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get arguments from Maya&#39;s selection list.</span></div>\n\
<div class=\"line\">        <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( list );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>             node;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>   nodeFn,dgNodeFnSet;</div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a>* dgIt; </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>             currentNode;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>             thisNode;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a>        nodePath;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( list ); !iter.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html#ac0f0d6fc806b11d246e05cb94e886b38\">isDone</a>(); iter.next() ) {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        iter.getDependNode( node );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// The following code shows how to navigate the DG manually without</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// using an iterator.  First, find the attribute that you are </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// interested.  Then connect a plug to it and see where the plug </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// connected to.  Once you get all the connections, you can choose </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// which route you want to go.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// In here, we wanted to get to the nodes that instObjGroups connected</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// to since we know that the shadingEngine connects to the instObjGroup</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// attribute.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        nodeFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a>( node );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> iogAttr = nodeFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a6117a63ae3bb2d03aa976dc8732d93a5\">attribute</a>( <span class=\"stringliteral\">&quot;instObjGroups&quot;</span>, &amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( !status ) {</div>\n\
<div class=\"line\">            cerr &lt;&lt; nodeFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>() &lt;&lt; <span class=\"stringliteral\">&quot;: is not a renderable object, skipping\\n&quot;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> iogPlug( node, iogAttr );</div>\n\
<div class=\"line\">        <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> iogConnections;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// instObjGroups is a multi attribute.  In this example, just the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// first connection will be tried.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        iogPlug.elementByLogicalIndex(0).connectedTo( iogConnections, <span class=\"keyword\">false</span>, <span class=\"keyword\">true</span>, &amp;status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( !status ) {</div>\n\
<div class=\"line\">            cerr &lt;&lt; nodeFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>() &lt;&lt; <span class=\"stringliteral\">&quot;: is not in a shading group, skipping\\n&quot;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// Now we would like to traverse the DG starting from the shadingEngine</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// since most likely all file texture nodes will be found.  Note the </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// filter used to initialize the DG iterator.  There are lots of filter</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// type available in MF::Type that you can choose to suite your needs.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> foundATexture = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;iogConnections.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++ ) {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            currentNode = iogConnections[i].node();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// Note that upon initilization, the current pointer of the </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// iterator already points to the first valid node.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            dgIt = <span class=\"keyword\">new</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a>( currentNode, </div>\n\
<div class=\"line\">                               <a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ac3bee92500cdc3a4ccbec4cb35e91f2a\">MFn::kFileTexture</a>,</div>\n\
<div class=\"line\">                               <a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a224b9163917ac32fc95a60d8c1eec3aaa8a1fab0ce1da9f8eb804389091ba08a9\">MItDependencyGraph::kUpstream</a>, </div>\n\
<div class=\"line\">                               <a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a5d3b8e489d2892096e6d65b9d9b72b65a8ad4d0a286855b50181b12df48942291\">MItDependencyGraph::kBreadthFirst</a>,</div>\n\
<div class=\"line\">                               <a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a221b779e6bb7b8d40677d7642bfefac5a328f00ae2a12674d627e8080cc5f80a4\">MItDependencyGraph::kNodeLevel</a>, </div>\n\
<div class=\"line\">                               &amp;status );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( !status ) {</div>\n\
<div class=\"line\">                <span class=\"keyword\">delete</span> dgIt;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            dgIt-&gt;<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#aff0176e978020befccc90dd150247836\">disablePruningOnFilter</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> ( ; ! dgIt-&gt;<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#ac0f0d6fc806b11d246e05cb94e886b38\">isDone</a>(); dgIt-&gt;<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a73616f002814b8abe6d921db72d7a496\">next</a>() ) {</div>\n\
<div class=\"line\">              </div>\n\
<div class=\"line\">                thisNode = dgIt-&gt;<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#afc1c0d71245e763fc566fc1d67ab06ae\">currentItem</a>();</div>\n\
<div class=\"line\">                dgNodeFnSet.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a>( thisNode ); </div>\n\
<div class=\"line\">                status = dgIt-&gt;<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a63664411488b67b594cd2adc232018aa\">getNodePath</a>( nodePath );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> ( !status ) {</div>\n\
<div class=\"line\">                    status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;getNodePath&quot;</span>);</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                <span class=\"comment\">// append the starting node.</span></div>\n\
<div class=\"line\">                <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                nodePath.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a3694392863ba632bca5d76cbbf190ef5\">append</a>(node);</div>\n\
<div class=\"line\">                dumpInfo( thisNode, dgNodeFnSet, nodePath );</div>\n\
<div class=\"line\">                foundATexture = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> dgIt;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( !foundATexture ) {</div>\n\
<div class=\"line\">            cerr &lt;&lt; nodeFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>() &lt;&lt; <span class=\"stringliteral\">&quot;: is not connected to a file texture\\n&quot;</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess; </div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";