var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>testNucleusNode/testNucleusNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'test_nucleus_node_2test_nucleus_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>testNucleusNode/testNucleusNode.cpp</h1>\n\
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
<div class=\"title\">testNucleusNode/testNucleusNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &quot;testNucleusNode.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMeshData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnUnitAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTypedAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnIntArrayData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnComponentListData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnSingleIndexedComponent.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItMeshVertex.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;stdio.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">This example show a custom solver at work.  Two nCloth objects are created,</span></div>\n\
<div class=\"line\"><span class=\"comment\">one is disconnected from the default nucleus solver, and hooked to</span></div>\n\
<div class=\"line\"><span class=\"comment\">this custom solver node, which will just compute a sine wave motion on</span></div>\n\
<div class=\"line\"><span class=\"comment\">the cloth in time.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">A custom solver needs to have a minimum of 3 attributes:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">-startState     To be connected from the cloth object to the solver</span></div>\n\
<div class=\"line\"><span class=\"comment\">-currentState   To be connected from the cloth object to the solver</span></div>\n\
<div class=\"line\"><span class=\"comment\">-nextState      To be connected from the solver object to the cloth</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">and usually a 4th attribute that is the current time.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">The idea is that when a solve is needed, the cloth object will pull on the</span></div>\n\
<div class=\"line\"><span class=\"comment\">nextState attribute.  At this point the solver should pull on either the</span></div>\n\
<div class=\"line\"><span class=\"comment\">currentState attribute or the startState, depending on the current time.</span></div>\n\
<div class=\"line\"><span class=\"comment\">Once it has the state information, the solver can extract that information,</span></div>\n\
<div class=\"line\"><span class=\"comment\">solve one step, and stuff that information back into the MnCloth to </span></div>\n\
<div class=\"line\"><span class=\"comment\">complete the solve.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">Below is some example code to test this plugin:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Note: Before running this code, make sure the plugin testNucleusNode is loaded!</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">global proc setupCustomSolverScene()</span></div>\n\
<div class=\"line\"><span class=\"comment\">{</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    file -f -new;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    string $pPlane1[] = `polyPlane -w 5 -h 5 -sx 10 -sy 10 -ax 0 1 0 -cuv 2 -ch 1`;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    move -r -10 0 0;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    createNCloth 0;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    string $pPlane2[] = `polyPlane -w 5 -h 5 -sx 10 -sy 10 -ax 0 1 0 -cuv 2 -ch 1`;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    createNCloth 0;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    //Hookup plane2 (the cloth object created for plane2 is named nClothShape2) to our custom solver instead.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    //First, disconnect it from the default nucleus solver:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    disconnectAttr nClothShape2.currentState nucleus1.inputActive[1];</span></div>\n\
<div class=\"line\"><span class=\"comment\">    disconnectAttr nClothShape2.startState nucleus1.inputActiveStart[1];</span></div>\n\
<div class=\"line\"><span class=\"comment\">    disconnectAttr nucleus1.outputObjects[1] nClothShape2.nextState;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    //create our custom solver:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    createNode testNucleusNode;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    //Hookup plane2 to our custom solver:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    connectAttr testNucleusNode1.nextState[0] nClothShape2.nextState;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    connectAttr nClothShape2.currentState testNucleusNode1.currentState[0];</span></div>\n\
<div class=\"line\"><span class=\"comment\">    connectAttr nClothShape2.startState testNucleusNode1.startState[0];</span></div>\n\
<div class=\"line\"><span class=\"comment\">    connectAttr time1.outTime testNucleusNode1.currentTime;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">}</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> testNucleusNode::id( 0x85002 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNObjectData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MnCloth.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> testNucleusNode::startState;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> testNucleusNode::currentState;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> testNucleusNode::nextState;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> testNucleusNode::currentTime;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">void</span> statCheck( <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat, <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        cout&lt;&lt;msg&lt;&lt;<span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> testNucleusNode::compute(<span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug, <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp;data)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( plug == nextState )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">//get the value of the currentTime </span></div>\n\
<div class=\"line\">        <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> currTime = data.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(currentTime).<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aaa4774146bfa48e040aea132d03b900c\">asTime</a>();        </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> inputData;</div>\n\
<div class=\"line\">        <span class=\"comment\">//pull on start state or current state depending on the current time.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(currTime.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#a324b14b7506c6e4f47912161956974ed\">value</a>() &lt;= 0.0) {</div>\n\
<div class=\"line\">            <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> multiDataHandle = data.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a6ba8ea2b4af93fabd2a7c846a1625587\">inputArrayValue</a>(startState);</div>\n\
<div class=\"line\">            multiDataHandle.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a8d77f0fea87bb6854b60cd199bf26240\">jumpToElement</a>(0);</div>\n\
<div class=\"line\">            inputData =multiDataHandle.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a81d24dca6d647d8d0a8fe0ef2c63b170\">inputValue</a>().<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a31773b870681e1f6b3ad82ff58de33bc\">data</a>();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> multiDataHandle = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a6ba8ea2b4af93fabd2a7c846a1625587\">inputArrayValue</a>(currentState);</div>\n\
<div class=\"line\">            multiDataHandle.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a8d77f0fea87bb6854b60cd199bf26240\">jumpToElement</a>(0);</div>\n\
<div class=\"line\">            inputData =multiDataHandle.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a81d24dca6d647d8d0a8fe0ef2c63b170\">inputValue</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a31773b870681e1f6b3ad82ff58de33bc\">data</a>();</div>\n\
<div class=\"line\">        }                </div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">        <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_n_object_data.html\">MFnNObjectData</a> inputNData(inputData);                </div>\n\
<div class=\"line\">        <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_mn_cloth.html\">MnCloth</a> * nObj = NULL;</div>\n\
<div class=\"line\">        inputNData.getObjectPtr(nObj);        </div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html\">MFloatPointArray</a> points;</div>\n\
<div class=\"line\">        nObj-&gt;<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_mn_cloth.html#ace208e6988792f3b6ea0263f208cb6ef\">getPositions</a>(points);</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> ii;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(ii=0;ii&lt;points.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();ii++) {            </div>\n\
<div class=\"line\">            points[ii].y = (float) sin(points[ii].x + currTime.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#a324b14b7506c6e4f47912161956974ed\">value</a>()*4.0f*(3.1415f/180.0f));</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        nObj-&gt;<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_mn_cloth.html#a479e403786f75eb0c4f89dbe50b2db7c\">setPositions</a>(points);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> nObj;        </div>\n\
<div class=\"line\">        data.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>(plug);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( plug == currentState )</div>\n\
<div class=\"line\">    {        </div>\n\
<div class=\"line\">        data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>(plug);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (plug == startState) {        </div>\n\
<div class=\"line\">        data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>(plug);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        stat = MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> testNucleusNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html\">MFnTypedAttribute</a> tAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    startState = tAttr.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>(<span class=\"stringliteral\">&quot;startState&quot;</span>, <span class=\"stringliteral\">&quot;sst&quot;</span>, <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9c720fc6ebcdf253fe6d586db63dd943\">MFnData::kNObject</a>, <a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    statCheck(stat, <span class=\"stringliteral\">&quot;failed to create startState&quot;</span>);</div>\n\
<div class=\"line\">    tAttr.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#acc80b84249f9c028f2c6d085a026b50c\">setArray</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    currentState = tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>(<span class=\"stringliteral\">&quot;currentState&quot;</span>, <span class=\"stringliteral\">&quot;cst&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9c720fc6ebcdf253fe6d586db63dd943\">MFnData::kNObject</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    statCheck(stat, <span class=\"stringliteral\">&quot;failed to create currentState&quot;</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#acc80b84249f9c028f2c6d085a026b50c\">setArray</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    nextState = tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>(<span class=\"stringliteral\">&quot;nextState&quot;</span>, <span class=\"stringliteral\">&quot;nst&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9c720fc6ebcdf253fe6d586db63dd943\">MFnData::kNObject</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    statCheck(stat, <span class=\"stringliteral\">&quot;failed to create nextState&quot;</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    tAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#acc80b84249f9c028f2c6d085a026b50c\">setArray</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html\">MFnUnitAttribute</a> uniAttr;</div>\n\
<div class=\"line\">    currentTime = uniAttr.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a31f804de81a968aa11b510a6231e7874\">create</a>( <span class=\"stringliteral\">&quot;currentTime&quot;</span>, <span class=\"stringliteral\">&quot;ctm&quot;</span> , <a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a1d1cfd8ffb84e947f82999c682b666a7a65c3a8bb75ba1a57e36c86855169752e\">MFnUnitAttribute::kTime</a>,  0.0, &amp;stat  );       </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    addAttribute(startState);</div>\n\
<div class=\"line\">    addAttribute(currentState);</div>\n\
<div class=\"line\">    addAttribute(nextState);</div>\n\
<div class=\"line\">    addAttribute(currentTime);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    attributeAffects(startState, nextState);</div>\n\
<div class=\"line\">    attributeAffects(currentState, nextState);  </div>\n\
<div class=\"line\">    attributeAffects(currentTime, nextState);   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj, <span class=\"stringliteral\">&quot;Autodesk - nCloth Prototype 4&quot;</span>, <span class=\"stringliteral\">&quot;8.5&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode ( <span class=\"stringliteral\">&quot;testNucleusNode&quot;</span>, testNucleusNode::id,testNucleusNode ::creator, testNucleusNode::initialize );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !status )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status.<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerNode&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterNode(testNucleusNode::id);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !status )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterNode&quot;</span>);</div>\n\
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