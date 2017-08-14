var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>gameInputDevice/gameInputDevice.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'game_input_device_2game_input_device_8cpp-example.html\', tocPrefix);\n\
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
            <h1>gameInputDevice/gameInputDevice.cpp</h1>\n\
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
<div class=\"title\">gameInputDevice/gameInputDevice.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2011 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This example demonstrates how to use left pad X and Y from</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  a game input device to modify the translate attribute of a node. The</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  MEL example code demonstrates how a poly cube can be moved</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  in X and Y.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  There is an attribute updateTranslateXZ that controls if</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  the example will map game input(x,y) to Maya(x,0,z) or</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Maya(x,y,0).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  NOTE: Windows only example that requires the Direct X</span></div>\n\
<div class=\"line\"><span class=\"comment\">// SDK to be installed in order to build. In addition, the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// game input device driver must be installed also.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\">    // MEL:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    loadPlugin gameInputDevice;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    string $node = `createNode gameInputDevice`;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    string $cube[] = `polyCube`;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    connectAttr ( $node + &quot;.outputTranslate&quot; ) ( $cube[0] + &quot;.translate&quot; );</span></div>\n\
<div class=\"line\"><span class=\"comment\">    setAttr ( $node + &quot;.live&quot; ) 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef IPV6STRICT</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define IPV6STRICT</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;winsock2.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;windows.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;XInput.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma comment(lib, &quot;XInput.lib&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // _WIN32</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;api_macros.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxThreadedDeviceNode.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>gameInputDeviceNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        gameInputDeviceNode();</div>\n\
<div class=\"line\">                ~gameInputDeviceNode() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a42dd3fa0dc5fff7ae9ce9bf8f987d3fd\">threadHandler</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a026d4619d3e629e2c526787e945564b0\">threadShutdownHandler</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*        creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>      initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslate;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslateX;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslateY;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslateZ;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Boolean attribute for deciding if we are going</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to update XZ or XY. Only two inputs from the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// gameInput in this example</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      updateTranslateXZ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>      id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> gameInputDeviceNode::id( 0x00081053 );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> gameInputDeviceNode::outputTranslate;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> gameInputDeviceNode::outputTranslateX;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> gameInputDeviceNode::outputTranslateY;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> gameInputDeviceNode::outputTranslateZ;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> gameInputDeviceNode::updateTranslateXZ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">gameInputDeviceNode::gameInputDeviceNode() </div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">gameInputDeviceNode::~gameInputDeviceNode()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    destroyMemoryPools();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> gameInputDeviceNode::postConstructor()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> attrArray;</div>\n\
<div class=\"line\">    attrArray.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a3694392863ba632bca5d76cbbf190ef5\">append</a>( gameInputDeviceNode::outputTranslate );</div>\n\
<div class=\"line\">    setRefreshOutputAttributes( attrArray );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// we&#39;ll be reading one set of translate x,y, z&#39;s at a time</span></div>\n\
<div class=\"line\">    createMemoryPools( 24, 3, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">double</span>));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> checkController(XINPUT_STATE&amp; state)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    DWORD dwResult;</div>\n\
<div class=\"line\">    ZeroMemory( &amp;state, <span class=\"keyword\">sizeof</span>(XINPUT_STATE) );</div>\n\
<div class=\"line\">    dwResult = XInputGetState( 0, &amp;state );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( dwResult == ERROR_SUCCESS )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> gameInputDeviceNode::threadHandler()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _WIN32</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    setDone( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">while</span> ( ! isDone() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( ! isLive() )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html\">MCharBuffer</a> buffer;</div>\n\
<div class=\"line\">        status = acquireDataStorage(buffer);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( ! status )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        XINPUT_STATE state;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( ! checkController( state ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            releaseDataStorage(buffer);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        beginThreadLoop();</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> changeX = 0.0, changeY = 0.0;</div>\n\
<div class=\"line\">            <span class=\"comment\">// Making sure we are not in the deadzone, we find</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// relative movement values.  A very simple approach</span></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> leftThumbX = state.Gamepad.sThumbLX;</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> leftThumbY = state.Gamepad.sThumbLY;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( leftThumbX &gt; +XINPUT_GAMEPAD_LEFT_THUMB_DEADZONE  ) changeX = +1;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( leftThumbX &lt; -XINPUT_GAMEPAD_LEFT_THUMB_DEADZONE  ) changeX = -1;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( leftThumbY &gt; +XINPUT_GAMEPAD_LEFT_THUMB_DEADZONE  ) changeY = +1;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( leftThumbY &lt; -XINPUT_GAMEPAD_LEFT_THUMB_DEADZONE  ) changeY = -1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span>* doubleData = <span class=\"keyword\">reinterpret_cast&lt;</span><span class=\"keywordtype\">double</span>*<span class=\"keyword\">&gt;</span>(buffer.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html#a46b13c2b5fe2372863ff84b811d1e480\">ptr</a>());</div>\n\
<div class=\"line\">            doubleData[0] = changeX ; doubleData[1] = changeY; doubleData[2] = 0.0;</div>\n\
<div class=\"line\">            pushThreadData( buffer );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        endThreadLoop();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // _WIN32</span></div>\n\
<div class=\"line\">    setDone( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> gameInputDeviceNode::threadShutdownHandler()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    setDone( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* gameInputDeviceNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> gameInputDeviceNode;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> gameInputDeviceNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> numAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    outputTranslateX = numAttr.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslateX&quot;</span>, <span class=\"stringliteral\">&quot;otx&quot;</span>, <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518\">MFnNumericData::kDouble</a>, 0.0, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslateX&quot;</span>);</div>\n\
<div class=\"line\">    outputTranslateY = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslateY&quot;</span>, <span class=\"stringliteral\">&quot;oty&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518\">MFnNumericData::kDouble</a>, 0.0, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslateY&quot;</span>);</div>\n\
<div class=\"line\">    outputTranslateZ = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslateZ&quot;</span>, <span class=\"stringliteral\">&quot;otz&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518\">MFnNumericData::kDouble</a>, 0.0, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslateZ&quot;</span>);</div>\n\
<div class=\"line\">    outputTranslate = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslate&quot;</span>, <span class=\"stringliteral\">&quot;ot&quot;</span>, outputTranslateX, outputTranslateY, </div>\n\
<div class=\"line\">                                     outputTranslateZ, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslate&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    updateTranslateXZ = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;updateTranslateXZ&quot;</span>, <span class=\"stringliteral\">&quot;uxz&quot;</span>, <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a8cfc0ab572a96edfc9db7c02f0d025d7\">MFnNumericData::kBoolean</a>);</div>\n\
<div class=\"line\">    <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( numAttr.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>(<span class=\"keyword\">true</span>) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( numAttr.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( numAttr.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">false</span>) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( numAttr.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#aae3f2fbbbce06e006f1838a1fb6fdcdd\">setDefault</a>(<span class=\"keyword\">true</span>) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ADD_ATTRIBUTE(outputTranslate);</div>\n\
<div class=\"line\">    ADD_ATTRIBUTE(updateTranslateXZ);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ATTRIBUTE_AFFECTS( live, outputTranslate);</div>\n\
<div class=\"line\">    ATTRIBUTE_AFFECTS( frameRate, outputTranslate);</div>\n\
<div class=\"line\">    ATTRIBUTE_AFFECTS( updateTranslateXZ, outputTranslate);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> gameInputDeviceNode::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( plug == outputTranslate || plug == outputTranslateX ||</div>\n\
<div class=\"line\">        plug == outputTranslateY || plug == outputTranslateZ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Find the type of translation we will be doing</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> xzUpdate  = block.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( updateTranslateXZ ).<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a69fdebf4dcdf33c1b313eb4a426e0d45\">asBool</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Access the data and update the output attribute</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html\">MCharBuffer</a> buffer;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( popThreadData(buffer) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Relative data coming in</span></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span>* doubleData = <span class=\"keyword\">reinterpret_cast&lt;</span><span class=\"keywordtype\">double</span>*<span class=\"keyword\">&gt;</span>(buffer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html#a46b13c2b5fe2372863ff84b811d1e480\">ptr</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputTranslateHandle = block.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( outputTranslate, &amp;status );</div>\n\
<div class=\"line\">            MCHECKERROR(status, <span class=\"stringliteral\">&quot;Error in block.outputValue for outputTranslate&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            double3&amp; outputTranslate = outputTranslateHandle.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a077d60a4a74d54e7a892d3c6ed115cc1\">asDouble3</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( xzUpdate ) </div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// XZ</span></div>\n\
<div class=\"line\">                outputTranslate[0] += doubleData[0];</div>\n\
<div class=\"line\">                outputTranslate[1] += doubleData[2];</div>\n\
<div class=\"line\">                outputTranslate[2] -= doubleData[1];</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// XY</span></div>\n\
<div class=\"line\">                outputTranslate[0] += doubleData[0];</div>\n\
<div class=\"line\">                outputTranslate[1] += doubleData[1];</div>\n\
<div class=\"line\">                outputTranslate[2] += doubleData[2];</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            block.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>( plug );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            releaseDataStorage(buffer);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> ( MS::kSuccess );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ( MS::kUnknownParameter );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode( <span class=\"stringliteral\">&quot;gameInputDevice&quot;</span>, </div>\n\
<div class=\"line\">                                  gameInputDeviceNode::id,</div>\n\
<div class=\"line\">                                  gameInputDeviceNode::creator,</div>\n\
<div class=\"line\">                                  gameInputDeviceNode::initialize,</div>\n\
<div class=\"line\">                                  <a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a692cb2d6fd1d7cfae9e9988bdd24f3e7\">MPxNode::kThreadedDeviceNode</a> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !status ) {</div>\n\
<div class=\"line\">        status.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;failed to registerNode gameInputDeviceNode&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterNode( gameInputDeviceNode::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !status ) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;failed to deregisterNode gameInputDeviceNode&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";