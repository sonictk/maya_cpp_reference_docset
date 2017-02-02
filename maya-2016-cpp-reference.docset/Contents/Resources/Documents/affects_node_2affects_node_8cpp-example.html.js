var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>affectsNode/affectsNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'affects_node_2affects_node_8cpp-example.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>affectsNode/affectsNode.cpp</h1>\n\
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
<div class=\"title\">affectsNode/affectsNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\"><span class=\"comment\">// Plugin Affects Class        //</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">// INTRODUCTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This class will create an &quot;affects&quot; node. This node is used for</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  demonstrating attributeAffects relationships involving dynamic</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  attributes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// WHAT THIS PLUG-IN DEMONSTRATES:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This plug-in creates a node called &quot;affects&quot;. Add two dynamic</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  integer attributes called &quot;A&quot; and &quot;B&quot;. When you change the value on</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  A, note that B will recompute.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// HOW TO USE THIS PLUG-IN:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (1) Compile the plug-in</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (2) Load the compiled plug-in into Maya via the plug-in manager</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (3) Create an &quot;affects&quot; node by typing the MEL command:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          createNode affects;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (4) Add two integer dynamic attributes to the newly created</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      affects node by typing the MEL command:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          addAttr -ln A -at long  affects1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          addAttr -ln B -at long  affects1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (5) Change the value of &quot;A&quot; to 10 by typing the MEL command:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          setAttr affects1.A 10;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      At this point, the affectsNode::setDependentsDirty() method</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      gets called which causes &quot;B&quot; to be marked dirty.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (6) Compute the value on &quot;B&quot; by doing a getAttr:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          getAttr affects1.B;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The affectsNode::compute() method is entered which copies the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      value from &quot;A&quot; (i.e. 10) to &quot;B&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>affects : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        affects();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>             ~affects(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abd7d1dad4e4f0b922bf5ac4fc9c0230a\">setDependentsDirty</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plugBeingDirtied,</div>\n\
<div class=\"line\">                                <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> &amp;affectedPlugs );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;             <span class=\"comment\">// The IFF type id</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// IFF type ID</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Each node requires a unique identifier which is used by</span></div>\n\
<div class=\"line\"><span class=\"comment\">// MFnDependencyNode::create() to identify which node to create, and by</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the Maya file format.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// For local testing of nodes you can use any identifier between</span></div>\n\
<div class=\"line\"><span class=\"comment\">// 0x00000000 and 0x0007ffff, but for any node that you plan to use for</span></div>\n\
<div class=\"line\"><span class=\"comment\">// more permanent purposes, you should get a universally unique id from</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Autodesk Support. You will be assigned a unique range that you can manage</span></div>\n\
<div class=\"line\"><span class=\"comment\">// on your own.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> affects::id( 0x80028 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This node does not need to perform any special actions on creation or</span></div>\n\
<div class=\"line\"><span class=\"comment\">// destruction</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">affects::affects() {}</div>\n\
<div class=\"line\">affects::~affects() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The compute() method does the actual work of the node using the inputs</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of the node to generate its output.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Compute takes two parameters: plug and data.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - Plug is the the data value that needs to be recomputed</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - Data provides handles to all of the nodes attributes, only these</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   handles should be used when performing computations.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> affects::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> thisNode = thisMObject();</div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnThisNode( thisNode );</div>\n\
<div class=\"line\">    fprintf(stderr,<span class=\"stringliteral\">&quot;affects::compute(), plug being computed is \\&quot;%s\\&quot;\\n&quot;</span>,</div>\n\
<div class=\"line\">            plug.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>().<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( plug.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aa24281b57daa49bb949d5caa118a83af\">partialName</a>() == <span class=\"stringliteral\">&quot;B&quot;</span> ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Plug &quot;B&quot; is being computed. Assign it the value on plug &quot;A&quot;</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// if &quot;A&quot; exists.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> pA = fnThisNode.findPlug( <span class=\"stringliteral\">&quot;A&quot;</span>, &amp;status );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a> == status ) {</div>\n\
<div class=\"line\">            fprintf(stderr,<span class=\"stringliteral\">&quot;\\t\\t... found dynamic attribute \\&quot;A\\&quot;, copying its value to \\&quot;B\\&quot;\\n&quot;</span>);</div>\n\
<div class=\"line\">            <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputData = data.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( pA, &amp;status );</div>\n\
<div class=\"line\">            <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( status );</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> value = inputData.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a4c3fb2724eadb8e8a3cca8ff1af10dfd\">asInt</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputHandle = data.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( plug );</div>\n\
<div class=\"line\">            outputHandle.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>( value );</div>\n\
<div class=\"line\">            data.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>(plug);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a7f858db05022c8bc860d685e13bab6ae\">MS::kUnknownParameter</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The creator() method allows Maya to instantiate instances of this node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// It is called every time a new instance of the node is requested by</span></div>\n\
<div class=\"line\"><span class=\"comment\">// either the createNode command or the MFnDependencyNode::create()</span></div>\n\
<div class=\"line\"><span class=\"comment\">// method.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// In this case creator simply returns a new affects object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* affects::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( <span class=\"keyword\">new</span> affects() );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The initialize method is called only once when the node is first</span></div>\n\
<div class=\"line\"><span class=\"comment\">// registered with Maya. In general,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> affects::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The setDependentsDirty() method allows attributeAffects relationships</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in a much more general way than via MPxNode::attributeAffects</span></div>\n\
<div class=\"line\"><span class=\"comment\">// which is limited to static attributes only.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The setDependentsDirty() method allows relationships to be established</span></div>\n\
<div class=\"line\"><span class=\"comment\">// between any combination of dynamic and static attributes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Within a setDependentsDirty() implementation you get passed in the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// plug which is being set dirty, and then, based upon which plug it is,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// you may choose to dirty any other plugs by adding them to the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// affectedPlugs list.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// In almost all cases, the relationships you set up will be fixed for</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the duration of Maya, such as &quot;A affects B&quot;. However, you can also</span></div>\n\
<div class=\"line\"><span class=\"comment\">// set up relationships which depend upon some external factor, such</span></div>\n\
<div class=\"line\"><span class=\"comment\">// as the current frame number, the time of day, if maya was invoked in</span></div>\n\
<div class=\"line\"><span class=\"comment\">// batch mode, etc. These sorts of relationships are straightforward to</span></div>\n\
<div class=\"line\"><span class=\"comment\">// implement in your setDependentsDirty() method.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// There may also be situations where you need to look at values in the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// dependency graph. It is VERY IMPORTANT that when accessing DG values</span></div>\n\
<div class=\"line\"><span class=\"comment\">// you do not cause a DG evaluation. This is because your setDependentsDirty()</span></div>\n\
<div class=\"line\"><span class=\"comment\">// method is called during dirty processing and causing an evalutaion could</span></div>\n\
<div class=\"line\"><span class=\"comment\">// put Maya into an infinite loop. The only safe way to look at values</span></div>\n\
<div class=\"line\"><span class=\"comment\">// on plugs is via the MDataBlock::outputValue() which does not trigger</span></div>\n\
<div class=\"line\"><span class=\"comment\">// an evaluation. It is recommeneded that you only look at plugs whose</span></div>\n\
<div class=\"line\"><span class=\"comment\">// values are constant or you know have already been computed.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// For this example routine, we will only implement the simplest case</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of a relationship.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> affects::setDependentsDirty( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plugBeingDirtied,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> &amp;affectedPlugs )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> thisNode = thisMObject();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnThisNode( thisNode );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( plugBeingDirtied.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aa24281b57daa49bb949d5caa118a83af\">partialName</a>() == <span class=\"stringliteral\">&quot;A&quot;</span> ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// &quot;A&quot; is dirty, so mark &quot;B&quot; dirty if &quot;B&quot; exists.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// This implements the relationship &quot;A affects B&quot;.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        fprintf(stderr,<span class=\"stringliteral\">&quot;affects::setDependentsDirty, \\&quot;A\\&quot; being dirtied\\n&quot;</span>);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> pB = fnThisNode.findPlug( <span class=\"stringliteral\">&quot;B&quot;</span>, &amp;status );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a> == status ) {</div>\n\
<div class=\"line\">            fprintf(stderr,<span class=\"stringliteral\">&quot;\\t\\t... dirtying \\&quot;B\\&quot;\\n&quot;</span>);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( affectedPlugs.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a12338b7a1987007e931b031646c9b4be\">append</a>( pB ) );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// These methods load and unload the plugin, registerNode registers the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// new node type with maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY , <span class=\"stringliteral\">&quot;6.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode( <span class=\"stringliteral\">&quot;affects&quot;</span>, affects::id, affects::creator,</div>\n\
<div class=\"line\">                                  affects::initialize );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerNode&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterNode( affects::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterNode&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";