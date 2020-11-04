var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: getAttrAffectsCmd/getAttrAffectsCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'get_attr_affects_cmd_2get_attr_affects_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: getAttrAffectsCmd/getAttrAffectsCmd.cpp</h1>\n\
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
<div class=\"title\">getAttrAffectsCmd/getAttrAffectsCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;getAttrAffects&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This command takes the name of a node as an argument.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// It then iterates over each attribute of the node and prints a list of attributes that it affects</span></div>\n\
<div class=\"line\"><span class=\"comment\">// and the ones that affect it. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use it, issue the command &quot;getAttrAffects nodeName&quot;, where &quot;nodeName&quot; is the name of the node</span></div>\n\
<div class=\"line\"><span class=\"comment\">// whose attributes you want to display. If invoked with no arguments, &quot;getAttrAffects&quot; will</span></div>\n\
<div class=\"line\"><span class=\"comment\">// display the attribute info of all the selected nodes. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObjectArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( getAttrAffects, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getAttrAffects::doIt( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> list;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( args.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>() &gt; 0 ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Arg list is &gt; 0 so use objects that were passes in</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> argStr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> last = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> i = 0; i &lt; last; i++ ) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Attempt to find all of the objects matched</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// by the string and add them to the list</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            args.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#adc169cdc872457a2664c3d66c29cf504\">get</a>( i, argStr );  </div>\n\
<div class=\"line\">            list.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>( argStr ); </div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the geometry list from what is currently selected in the </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// model</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( list );</div>\n\
<div class=\"line\">    } </div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( list );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Iterate over all selected dependency nodes</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( ; !iter.isDone(); iter.next() ) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> object;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        stat = iter.getDependNode( <span class=\"keywordtype\">object</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">            stat.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;getDependNode&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Create a function set for the dependency node</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> node( <span class=\"keywordtype\">object</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        cout &lt;&lt; node.name() &lt;&lt; <span class=\"stringliteral\">&quot;:\\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> i, numAttributes = node.attributeCount();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (i = 0; i &lt; numAttributes; ++i) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> attrObject = node.attribute(i);</div>\n\
<div class=\"line\">            <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a> attr;</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> j, affectedLen, affectedByLen;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            attr.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a> (attrObject);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Get all attributes that this one affects</span></div>\n\
<div class=\"line\">            <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> affectedAttributes;</div>\n\
<div class=\"line\">            node.getAffectedAttributes( attrObject, affectedAttributes );</div>\n\
<div class=\"line\">            affectedLen = affectedAttributes.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Get all attributes that affect this one</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> affectedByAttributes;</div>\n\
<div class=\"line\">            node.getAffectedByAttributes( attrObject, affectedByAttributes );</div>\n\
<div class=\"line\">            affectedByLen = affectedByAttributes.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( affectedLen &gt; 0 || affectedByLen &gt; 0 ) {</div>\n\
<div class=\"line\">                cout &lt;&lt; <span class=\"stringliteral\">&quot;  &quot;</span> &lt;&lt; attr.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>() &lt;&lt; <span class=\"stringliteral\">&quot;:\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">// List all attributes that are affected by the current one</span></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> ( affectedLen &gt; 0 ) {</div>\n\
<div class=\"line\">                    cout &lt;&lt; <span class=\"stringliteral\">&quot;    Affects(&quot;</span> &lt;&lt; affectedLen &lt;&lt; <span class=\"stringliteral\">&quot;):&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">for</span> (j = 0; j &lt; affectedLen; ++j ) {</div>\n\
<div class=\"line\">                        attr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a> ( affectedAttributes[j] );</div>\n\
<div class=\"line\">                        cout &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; attr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>();</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                    cout &lt;&lt; endl;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">// List all attributes that affect the current one</span></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> ( affectedByLen &gt; 0 ) {</div>\n\
<div class=\"line\">                    cout &lt;&lt; <span class=\"stringliteral\">&quot;    AffectedBy(&quot;</span> &lt;&lt; affectedByLen &lt;&lt; <span class=\"stringliteral\">&quot;):&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">for</span> (j = 0; j &lt; affectedByLen; ++j ) {</div>\n\
<div class=\"line\">                        attr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a> ( affectedByAttributes[j] );</div>\n\
<div class=\"line\">                        cout &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; attr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>();</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                    cout &lt;&lt; endl;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
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