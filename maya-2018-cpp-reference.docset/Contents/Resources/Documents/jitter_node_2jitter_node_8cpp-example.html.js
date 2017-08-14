var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>jitterNode/jitterNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'jitter_node_2jitter_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>jitterNode/jitterNode.cpp</h1>\n\
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
<div class=\"title\">jitterNode/jitterNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the dependency graph node &quot;jitter&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in is an example of a user-defined procedural dependency graph node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// It is primarily oriented toward animation, but can be used to add noise in any</span></div>\n\
<div class=\"line\"><span class=\"comment\">// connection between two float attributes. It takes a float value as input, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// adds a pseudo-random value to the input, and outputs the noisy float value.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// For example, if the output of a parameter curve node is connected to the input</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of the jitter node and the output of the jitter node is connected to</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the translateX attribute of a surface, the motion of the surface will &quot;jitter&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">// parallel to the X axis.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The node has one other input, &quot;time&quot;. The output of the time slider node, &quot;time1.outTime&quot;,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// must be connected to the time attribute on the jitter node if the &quot;jittered&quot; animation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is to be repeatable. The attribute &quot;scale&quot; can be used to increase or decrease the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// magnitude of the random offset applied to the input of the jitter node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Once the plug-in is loaded, the following MEL command creates the jitter node &quot;jitter1&quot;,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// attaches the attribute &quot;someNode1.outFloat&quot; to &quot;jitter1.input&quot;, and attaches </span></div>\n\
<div class=\"line\"><span class=\"comment\">// &quot;jitter1.output&quot; to &quot;someNode2.inFloat&quot;:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  jitter &quot;jitter1&quot; &quot;someNode1.outFloat&quot; &quot;someNode2.inFloat&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// It also attaches the time slider output &quot;time1.outTime&quot; to &quot;jitter1.time&quot; and &quot;jitter2.time&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Additionally, it creates two windows with sliders for adjusting the scale.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The jitter node can be easily demonstrated in conjunction with the circleNode plug-in.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Load the circleNode and jitterNode plug-ins. Then, execute the following commands:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  source circleNode</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  source jitterNode</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  createSphereAndAttachCircleNode;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  jitter &quot;jitter1&quot; &quot;circleNode1.sineOutput&quot; &quot;sphere1.translateX&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  jitter &quot;jitter2&quot; &quot;circleNode1.cosineOutput&quot; &quot;sphere1.translateZ&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Clicking the &quot;play&quot; icon on the time slider will cause the sphere to move along a &quot;jittered&quot; circle.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The amount of jitter can be varied by adjusting the scale sliders in the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// &quot;jitter1 Scale Editor&quot; and &quot;jitter2 Scale Editor&quot; windows.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Attributes ( &lt; input, &gt; output ):</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  &lt; input: the input float value</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  &lt; scale: the scalar for the random value (0 - 1.0)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  &lt; time: the frame number</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  &gt; output: the randomized float value</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Usage:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Use &quot;jitterNode.mel&quot; to insert this DG node between</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  a float value connection in your DG.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> xRand, yRand, zRand;     <span class=\"comment\">/* seed */</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> randomd()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> result;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> a = xRand/177, b = xRand%177;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> c = yRand/176, d = yRand%176;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> e = zRand/178, f = zRand%178;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    xRand = (171 * b - 2 * a) % 30269;</div>\n\
<div class=\"line\">    yRand = (172 * d - 35 * c) % 30307;</div>\n\
<div class=\"line\">    zRand = (170 * f - 63 * e) % 30323;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    result = (float) xRand/30269.0f + yRand/30307.0f + zRand/30323.0f;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result - ((int) result);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> seedd(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> nx, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> ny, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> nz)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    xRand = nx;</div>\n\
<div class=\"line\">    yRand = ny;</div>\n\
<div class=\"line\">    zRand = nz;</div>\n\
<div class=\"line\">    randomd();</div>\n\
<div class=\"line\">    randomd();</div>\n\
<div class=\"line\">    randomd();</div>\n\
<div class=\"line\">    randomd();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>jitter : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    jitter();</div>\n\
<div class=\"line\">    ~jitter() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     time;       <span class=\"comment\">// The time value.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     scale;      <span class=\"comment\">// Scale of jitter.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     input;      <span class=\"comment\">// The input value.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     output;     <span class=\"comment\">// The jittered-output value.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     jitter::id( 0x80009 );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     jitter::time;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     jitter::scale;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     jitter::input;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     jitter::output; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* jitter::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> jitter();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> jitter::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> nAttr;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    time = nAttr.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;time&quot;</span>, <span class=\"stringliteral\">&quot;tm&quot;</span>, <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad\">MFnNumericData::kFloat</a>, 0.0 );</div>\n\
<div class=\"line\">    nAttr.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    scale = nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;scale&quot;</span>, <span class=\"stringliteral\">&quot;sc&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad\">MFnNumericData::kFloat</a>, 1.0 );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    input = nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;input&quot;</span>, <span class=\"stringliteral\">&quot;in&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad\">MFnNumericData::kFloat</a>, 0.0 );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    output = nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;output&quot;</span>, <span class=\"stringliteral\">&quot;out&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad\">MFnNumericData::kFloat</a>, 0.0 );</div>\n\
<div class=\"line\">    nAttr.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = addAttribute( time );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( scale );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( input );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = attributeAffects( time, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = attributeAffects( scale, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = attributeAffects( input, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">} </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">jitter::jitter() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">jitter::~jitter() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Compute the offset and add it to input</span></div>\n\
<div class=\"line\"><span class=\"comment\">// as the output from this node.</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> jitter::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> returnStatus;</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( plug == output )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> timeData = data.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( time, &amp;returnStatus );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> scaleData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( scale, &amp;returnStatus );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( input, &amp;returnStatus );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( returnStatus != MS::kSuccess )</div>\n\
<div class=\"line\">            cerr &lt;&lt; <span class=\"stringliteral\">&quot;ERROR getting data\\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> currentFrame = timeData.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> scaleFactor  = scaleData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> inValue = inputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// This is where we jitter the value</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> seed = (<span class=\"keywordtype\">unsigned</span> char)currentFrame;</div>\n\
<div class=\"line\">            seedd( seed, seed * 17, seed * 23 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> tmp = randomd();</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> result = ( tmp - 0.5f ) * scaleFactor + inValue;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outHandle = data.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( jitter::output );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            outHandle.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>( result );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            data.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>(plug);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode( <span class=\"stringliteral\">&quot;jitter&quot;</span>, jitter::id, </div>\n\
<div class=\"line\">                         jitter::creator, jitter::initialize  );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerNode&quot;</span>);</div>\n\
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
<div class=\"line\">    status = plugin.deregisterNode( jitter::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
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