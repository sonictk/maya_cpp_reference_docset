var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>topologyTrackingNode/topologyTrackingNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'topology_tracking_node_2topology_tracking_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>topologyTrackingNode/topologyTrackingNode.cpp</h1>\n\
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
<div class=\"title\">topologyTrackingNode/topologyTrackingNode.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2018 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the dependency graph node &quot;topologyTrackingNode&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in demonstrates the use of the new version of the attributeAffects()</span></div>\n\
<div class=\"line\"><span class=\"comment\">// relationship which can take a parameter specifying whether or not the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// relationship affects topology.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// It creates a simple node taking a mesh (inMesh) as an input parameter.  It then</span></div>\n\
<div class=\"line\"><span class=\"comment\">// creates two copies (outMeshLeft and outMeshRight) of the input mesh.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Those new copies will be subdivided based on the divisionCount attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">// (which therefore affects topology) and will be translated by the offset attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">// (which does not affect topology).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use this script to create a simple example with the topologyTrackingNode node:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  loadPlugin topologyTrackingNode;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  polySphere;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  createNode topologyTrackingNode;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  createNode mesh -name outMeshLeft;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  createNode mesh -name outMeshRight;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  connectAttr pSphereShape1.outMesh topologyTrackingNode1.inMesh;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  connectAttr topologyTrackingNode1.outMeshLeft outMeshLeft.inMesh;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  connectAttr topologyTrackingNode1.outMeshRight outMeshRight.inMesh;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  setAttr topologyTrackingNode1.offset 1 2 3;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// You can then animate the &quot;offset&quot; attribute (which does not affect topology)</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or the &quot;divisionCount&quot; attribute (which affects topology).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Then, using the profiler to record events during playback, you can see</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Vp2TranslateGeometry events happening during the evaluation phase of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// frame in the case topology is not affected, and during the rendering phase</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of the frame in the case of affected topology.  Being able to update the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// geometry during evaluation allows for more parallelism and earlier</span></div>\n\
<div class=\"line\"><span class=\"comment\">// scheduling of translation tasks, which usually results in increased</span></div>\n\
<div class=\"line\"><span class=\"comment\">// performance.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnGenericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatPointArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;algorithm&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This definition enables the use of the new API.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define USE_TOPOLOGY_TRACKING_OPTIMIZATION    1</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>topologyTrackingNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aca2cba4630391c78dcf1a828986160da\">name</a>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*         creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>       initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>(<span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug, <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp;data) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if USE_TOPOLOGY_TRACKING_OPTIMIZATION</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9e054d22b4addd21d5b92c969a7a1ee6\">isTrackingTopology</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // USE_TOPOLOGY_TRACKING_OPTIMIZATION</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a> ParentClass;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> divisionCount;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> offset;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> inMesh;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> outMeshLeft;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> outMeshRight;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> topologyTrackingNode::name{<span class=\"stringliteral\">&quot;topologyTrackingNode&quot;</span>};</div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> topologyTrackingNode::id{0x00081150};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> topologyTrackingNode::divisionCount;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> topologyTrackingNode::offset;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> topologyTrackingNode::inMesh;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> topologyTrackingNode::outMeshLeft;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> topologyTrackingNode::outMeshRight;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* topologyTrackingNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> topologyTrackingNode();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> topologyTrackingNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html\">MFnGenericAttribute</a> gAttrFn;</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> nAttrFn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    divisionCount = nAttrFn.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;divisionCount&quot;</span>, <span class=\"stringliteral\">&quot;dc&quot;</span>, <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9bb31be73c01d40428195449f62588ac\">MFnNumericData::kInt</a>, 0, &amp;status);</div>\n\
<div class=\"line\">    <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(nAttrFn.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#aba21b33176bb831de026b78605c1dcf3\">setMin</a>(0));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(addAttribute(divisionCount));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    offset = nAttrFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;offset&quot;</span>, <span class=\"stringliteral\">&quot;ot&quot;</span>, <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a91f4ea6e351f41893ac43d373f9d647c\">MFnNumericData::k3Float</a>, 0, &amp;status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(addAttribute(offset));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    inMesh = gAttrFn.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a94a6d5e93a85fb18bc7accc18ee0d9f6\">create</a>(<span class=\"stringliteral\">&quot;inMesh&quot;</span>, <span class=\"stringliteral\">&quot;im&quot;</span>, &amp;status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(gAttrFn.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a815ec0c59dfdc91fed24c4f2a75a4871\">addDataAccept</a>(<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(addAttribute(inMesh));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    outMeshLeft = gAttrFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a94a6d5e93a85fb18bc7accc18ee0d9f6\">create</a>(<span class=\"stringliteral\">&quot;outMeshLeft&quot;</span>, <span class=\"stringliteral\">&quot;oml&quot;</span>, &amp;status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(gAttrFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a815ec0c59dfdc91fed24c4f2a75a4871\">addDataAccept</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(addAttribute(outMeshLeft));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    outMeshRight = gAttrFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a94a6d5e93a85fb18bc7accc18ee0d9f6\">create</a>(<span class=\"stringliteral\">&quot;outMeshRight&quot;</span>, <span class=\"stringliteral\">&quot;omr&quot;</span>, &amp;status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(gAttrFn.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a815ec0c59dfdc91fed24c4f2a75a4871\">addDataAccept</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(addAttribute(outMeshRight));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(divisionCount, outMeshLeft));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(divisionCount, outMeshRight));</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if USE_TOPOLOGY_TRACKING_OPTIMIZATION</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(offset, outMeshLeft, <span class=\"keyword\">false</span>));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(offset, outMeshRight, <span class=\"keyword\">false</span>));</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(offset, outMeshLeft));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(offset, outMeshRight));</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // USE_TOPOLOGY_TRACKING_OPTIMIZATION</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(inMesh, outMeshLeft));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(attributeAffects(inMesh, outMeshRight));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> topologyTrackingNode::compute(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp;block)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">auto</span> process = [<span class=\"keyword\">this</span>, &amp;block, &amp;plug](<span class=\"keywordtype\">float</span> offsetFactor) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> thisNode = thisMObject();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the input mesh.</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> inPlug(thisNode, inMesh);</div>\n\
<div class=\"line\">        <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputDataHandle = block.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(inPlug, &amp;status);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a> offsetVector(block.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(offset).<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#abda8516acf6a0cbc9387882bc974efac\">asFloat3</a>());</div>\n\
<div class=\"line\">        offsetVector *= offsetFactor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputDataHandle = block.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>(plug);</div>\n\
<div class=\"line\">        outputDataHandle.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aea38af7f03b828cb6e53cdbda13c5da8\">copyWritable</a>(inputDataHandle);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> outMeshObject = outputDataHandle.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a301e7b7cdf9f9e1e206651cc6a1b67ec\">asMesh</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> outMesh;</div>\n\
<div class=\"line\">        outMesh.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a6b2301b53683a8e8f56dd0b9cb088b0f\">setObject</a>(outMeshObject);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Apply offset.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0, outPointsCount = outMesh.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a9959c49420dce143087cb0abe402923e\">numVertices</a>(); i &lt; outPointsCount; ++i)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> point;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(outMesh.<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a71f31afb68fa92a69b114dd7f3cb12fa\">getPoint</a>(i, point));</div>\n\
<div class=\"line\">            point += offsetVector;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(outMesh.<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a930e585693bbd81b655420c8c0c9a4e5\">setPoint</a>(i, point));</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Subdivide.</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> divisionCountPlug(thisNode, divisionCount);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> divisionCountDataHandle = block.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(divisionCountPlug, &amp;status);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> divisionCount = divisionCountDataHandle.<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a4c3fb2724eadb8e8a3cca8ff1af10dfd\">asInt</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (divisionCount &gt; 0)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> numPolygons = outMesh.<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a3a7a28cf8f6a12dd19ab6ed0a639f9ed\">numPolygons</a>();</div>\n\
<div class=\"line\">            <a name=\"_a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a> facesToSubdivide(numPolygons);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; numPolygons; ++i)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                facesToSubdivide[i] = i;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            outMesh.<a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a8a4e8dfe0bd906b2ac2551e2fb2690f3\">subdivideFaces</a>(facesToSubdivide, divisionCount);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        outputDataHandle.<a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>(outMeshObject);</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (plug == outMeshLeft)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        process(1.5f);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (plug == outMeshRight)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        process(-1.5f);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ParentClass::compute(plug, block);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if USE_TOPOLOGY_TRACKING_OPTIMIZATION</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> topologyTrackingNode::isTrackingTopology()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // USE_TOPOLOGY_TRACKING_OPTIMIZATION</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> pluginFn(obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Register the node type.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = pluginFn.registerNode(</div>\n\
<div class=\"line\">        topologyTrackingNode::name,</div>\n\
<div class=\"line\">        topologyTrackingNode::id,</div>\n\
<div class=\"line\">        topologyTrackingNode::creator,</div>\n\
<div class=\"line\">        topologyTrackingNode::initialize</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>(status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> pluginFn(obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Deregister the node type.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = pluginFn.deregisterNode(topologyTrackingNode::id);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";