var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>whatisCmd/whatisCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'whatis_cmd_2whatis_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>whatisCmd/whatisCmd.cpp</h1>\n\
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
<div class=\"title\">whatisCmd/whatisCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;whatis&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This simple command prints a message to standard out describing the API</span></div>\n\
<div class=\"line\"><span class=\"comment\">// types of Maya objects. If no Maya objects are passed to the command, then</span></div>\n\
<div class=\"line\"><span class=\"comment\">// it lists the types of all of the currently selected objects.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// For each object, the following information is printed: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - name of the object </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - API type for the object </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - API function sets that can be used on the object. Note that not every function</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    set listed actually exists. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This list is essentially the class derivation list containing all parent</span></div>\n\
<div class=\"line\"><span class=\"comment\">// classes of this object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// For example, the command </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  whatis nurbsSphereShape1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// results in the following output: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Name: nurbsSphereShape1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Type: kNurbsSurface</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Function Sets: kBase, kNamedObject, kDependencyNode, kDagNode, kShape,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  kGeometric, kSurface, kNurbsSurface, kNurbsSurfaceGeom</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This is a good example of taking Maya objects as arguments to a command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( whatis, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> whatis::doIt( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
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
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node;</div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> depFn;</div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> types;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( list ); !iter.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html#ac0f0d6fc806b11d246e05cb94e886b38\">isDone</a>(); iter.next() ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Print the types and function sets of all of the objects</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        iter.getDependNode( node );</div>\n\
<div class=\"line\">        depFn.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a>( node );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        name = depFn.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>();</div>\n\
<div class=\"line\">        <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4633c033be50a96caf4f96991f3b9b32\">MGlobal::getFunctionSetList</a>( node, types );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;Name: &quot;</span> &lt;&lt; name.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;Type: &quot;</span> &lt;&lt; node.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a3dad4d354c5b968cf4eccfffcdb824f4\">apiTypeStr</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;Function Sets: &quot;</span>;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> last = types.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> i = 0; i &lt; last; i++ ) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &gt; 0 ) cout &lt;&lt; <span class=\"stringliteral\">&quot;, &quot;</span>;</div>\n\
<div class=\"line\">            cout &lt;&lt; types[i].asChar();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        cout &lt;&lt; endl &lt;&lt; endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";