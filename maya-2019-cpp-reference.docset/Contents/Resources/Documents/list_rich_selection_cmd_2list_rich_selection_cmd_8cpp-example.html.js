var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>listRichSelectionCmd/listRichSelectionCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'list_rich_selection_cmd_2list_rich_selection_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>listRichSelectionCmd/listRichSelectionCmd.cpp</h1>\n\
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
<div class=\"title\">listRichSelectionCmd/listRichSelectionCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// moveTool.cc</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    Interactive tool for moving objects and components.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    This plug-in will register the following two commands in Maya:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       moveToolCmd &lt;x&gt; &lt;y&gt; &lt;z&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       moveToolContext</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdlib.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxToolCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MRichSelection.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItGeometry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MWeight.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnComponent.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnSingleIndexedComponent.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDoubleIndexedComponent.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTripleIndexedComponent.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define CHECKRESULT(stat,msg)     \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != stat ) { \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        cerr &lt;&lt; msg &lt;&lt; endl;      \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kVectorEpsilon 1.0e-3</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The move command</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - this is a tool command which can be used in tool</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   contexts or in the MEL command window.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"preprocessor\">#define     COMMAND_NAME    &quot;listRichSelectionCmd&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define     DOIT        0</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define     UNDOIT      1</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define     REDOIT      2</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>listRichSelectionCmd : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_tool_command.html\">MPxToolCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    listRichSelectionCmd();</div>\n\
<div class=\"line\">    ~listRichSelectionCmd() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_tool_command.html#ae288591d8c0280222c356f73cdbdd112\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a3b583cbc082553f11853db459b2f7795\">redoIt</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a0789a8d51244cad0495abb2b811c39db\">undoIt</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a2f6c567cc02d575ab14006d9c5e37761\">isUndoable</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_tool_command.html#ad85f49d154d3b6ef4899d0a1e80d73e5\">finalize</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>* creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        setVector( <span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> y, <span class=\"keywordtype\">double</span> z);</div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a>     delta;  <span class=\"comment\">// the delta vectors</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     action( <span class=\"keywordtype\">int</span> flag ); <span class=\"comment\">// do the work here</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">listRichSelectionCmd::listRichSelectionCmd( )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    setCommandString( COMMAND_NAME );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">listRichSelectionCmd::~listRichSelectionCmd()</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* listRichSelectionCmd::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> listRichSelectionCmd;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> listRichSelectionCmd::isUndoable() const</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     Set this command to be undoable.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> listRichSelectionCmd::setVector( <span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> y, <span class=\"keywordtype\">double</span> z)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    delta.x = x;</div>\n\
<div class=\"line\">    delta.y = y;</div>\n\
<div class=\"line\">    delta.z = z;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listRichSelectionCmd::finalize()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     Command is finished, construct a string for the command</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     for journalling.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a> command;</div>\n\
<div class=\"line\">    command.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a4e6cac2a8066c27dd3c214ed50f86b5a\">addArg</a>( commandString() );</div>\n\
<div class=\"line\">    command.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a4e6cac2a8066c27dd3c214ed50f86b5a\">addArg</a>( delta.x );</div>\n\
<div class=\"line\">    command.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a4e6cac2a8066c27dd3c214ed50f86b5a\">addArg</a>( delta.y );</div>\n\
<div class=\"line\">    command.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a4e6cac2a8066c27dd3c214ed50f86b5a\">addArg</a>( delta.z );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// This call adds the command to the undo queue and sets</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the journal string for the command.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_tool_command.html#a453a8fb7a2285d97888cf2a60fa64712\">MPxToolCommand::doFinalize</a>( command );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listRichSelectionCmd::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Test MItSelectionList class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> vector( 1.0, 0.0, 0.0 );    <span class=\"comment\">// default delta</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> i = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">switch</span> ( args.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>() )     <span class=\"comment\">// set arguments to vector</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> 1:</div>\n\
<div class=\"line\">            vector.x = args.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( 0, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> 2:</div>\n\
<div class=\"line\">            vector.x = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( 0, &amp;stat );</div>\n\
<div class=\"line\">            vector.y = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( 1, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> 3:</div>\n\
<div class=\"line\">            vector = args.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a87eafcffbb8caa4eed88ba9cdfc5681a\">asVector</a>(i,3);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> 0:</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">default</span>:</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    delta = vector;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> action( DOIT );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listRichSelectionCmd::undoIt( )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Undo last delta translation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> action( UNDOIT );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listRichSelectionCmd::redoIt( )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Redo last delta translation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> action( REDOIT );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listRichSelectionCmd::action( <span class=\"keywordtype\">int</span> flag )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Do the actual work here to move the objects by vector</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> vector = delta;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">switch</span>( flag )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> UNDOIT:    <span class=\"comment\">// undo</span></div>\n\
<div class=\"line\">            vector.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> = -vector.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>;</div>\n\
<div class=\"line\">            vector.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab927965981178aa1fba979a37168db2a\">y</a> = -vector.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab927965981178aa1fba979a37168db2a\">y</a>;</div>\n\
<div class=\"line\">            vector.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> = -vector.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> REDOIT:    <span class=\"comment\">// redo</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> DOIT:      <span class=\"comment\">// do command</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">default</span>:</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a selection list iterator</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> slist;</div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html\">MRichSelection</a> rs;</div>\n\
<div class=\"line\">    <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3f864dfe6994c3a800d72a89028945cb\">MGlobal::getRichSelection</a>( rs);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Translate all selected objects</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    rs.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#aff892b575c9b4fdd0e1d996d22a79452\">getSelection</a>( slist);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> side = 0; side &lt; 2; side++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        slist.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#ad5522f028dde0080b753279426415a4a\">clear</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( side) </div>\n\
<div class=\"line\">            rs.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#a85254191652865e4c7fe84df5a445eee\">getSymmetry</a>( slist);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            rs.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_rich_selection.html#aff892b575c9b4fdd0e1d996d22a79452\">getSelection</a>( slist);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( !slist.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a8174b25717a6f860d40f2ca259442df5\">isEmpty</a>())</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( side) </div>\n\
<div class=\"line\">                <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <span class=\"stringliteral\">&quot;Symmetry:&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <span class=\"stringliteral\">&quot;Selection:&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> ( <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( slist, <a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a94dd08feda7b2cf0ff8262312c4fcc09\">MFn::kInvalid</a>); !iter.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html#ac0f0d6fc806b11d246e05cb94e886b38\">isDone</a>(); iter.next() ) </div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// Get path and possibly a component</span></div>\n\
<div class=\"line\">                <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>    mdagPath;       <span class=\"comment\">// Item dag path</span></div>\n\
<div class=\"line\">                <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     mComponent;     <span class=\"comment\">// Current component</span></div>\n\
<div class=\"line\">                iter.getDagPath( mdagPath, mComponent );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <span class=\"stringliteral\">&quot;   &quot;</span> + mdagPath.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a7cffb69661adc6ae7ac9e03c297caf01\">fullPathName</a>());</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span>( !mComponent.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a>())</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a name=\"_a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_component.html\">MFnComponent</a> componentFn( mComponent);</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span>( componentFn.hasWeights())</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        <span class=\"keywordtype\">int</span> count = componentFn.elementCount();</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">                        <a name=\"_a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_single_indexed_component.html\">MFnSingleIndexedComponent</a> singleFn( mComponent, &amp;stat );</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat ) </div>\n\
<div class=\"line\">                        {</div>\n\
<div class=\"line\">                            <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> i = 0; i &lt; count; i++)</div>\n\
<div class=\"line\">                            {</div>\n\
<div class=\"line\">                                <a name=\"_a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html\">MWeight</a> weight = componentFn.weight( i);</div>\n\
<div class=\"line\">                                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <a name=\"_a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;      Component[&quot;</span>) + singleFn.element( i) + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;] has influence weight &quot;</span>) + weight.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html#a387cb47fefb3e2efef6e08de098d83cc\">influence</a>() + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot; and seam weight &quot;</span>) + weight.<a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html#a5921aa0814dfcd975a70cc0a08f48840\">seam</a>());</div>\n\
<div class=\"line\">                            }</div>\n\
<div class=\"line\">                        }</div>\n\
<div class=\"line\">                        <a name=\"_a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_double_indexed_component.html\">MFnDoubleIndexedComponent</a> doubleFn( mComponent, &amp;stat );</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat ) </div>\n\
<div class=\"line\">                        {</div>\n\
<div class=\"line\">                            <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> i = 0; i &lt; count; i++)</div>\n\
<div class=\"line\">                            {</div>\n\
<div class=\"line\">                                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html\">MWeight</a> weight = componentFn.weight( i);</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> u, v;</div>\n\
<div class=\"line\">                                doubleFn.getElement( i, u, v);</div>\n\
<div class=\"line\">                                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;      Component[&quot;</span>) + u + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;,&quot;</span>) + v + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;] has influence weight &quot;</span>) + weight.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html#a387cb47fefb3e2efef6e08de098d83cc\">influence</a>() + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot; and seam weight &quot;</span>) + weight.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html#a5921aa0814dfcd975a70cc0a08f48840\">seam</a>());</div>\n\
<div class=\"line\">                            }</div>\n\
<div class=\"line\">                        }</div>\n\
<div class=\"line\">                        <a name=\"_a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_triple_indexed_component.html\">MFnTripleIndexedComponent</a> tripleFn( mComponent, &amp;stat );</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat ) </div>\n\
<div class=\"line\">                        {</div>\n\
<div class=\"line\">                            <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> i = 0; i &lt; count; i++)</div>\n\
<div class=\"line\">                            {</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> u, v, w;</div>\n\
<div class=\"line\">                                tripleFn.getElement( i, u, v, w);</div>\n\
<div class=\"line\">                                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html\">MWeight</a> weight = componentFn.weight( i);</div>\n\
<div class=\"line\">                                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;      Component[&quot;</span>) + u + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;,&quot;</span>) + v + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;,&quot;</span>) + w + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;] has influence weight &quot;</span>) + weight.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html#a387cb47fefb3e2efef6e08de098d83cc\">influence</a>() + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot; and seam weight &quot;</span>) + weight.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_weight.html#a5921aa0814dfcd975a70cc0a08f48840\">seam</a>());</div>\n\
<div class=\"line\">                            }</div>\n\
<div class=\"line\">                        }</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the commands we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     status;</div>\n\
<div class=\"line\">    <a name=\"_a40\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;9.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( COMMAND_NAME, &amp;listRichSelectionCmd::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a41\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( COMMAND_NAME );</div>\n\
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