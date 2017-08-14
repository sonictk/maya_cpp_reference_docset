var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>multiCurveNode/multiCurveNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'multi_curve_node_2multi_curve_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>multiCurveNode/multiCurveNode.cpp</h1>\n\
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
<div class=\"title\">multiCurveNode/multiCurveNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Produces the dependency graph node &quot;multiCurve&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in demonstrates how to use the MArrayDataBuilder class to</span></div>\n\
<div class=\"line\"><span class=\"comment\">// create an array attribute in a compute function, the number of elements</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of which change on each compute cycle.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The node accepts a &quot;nurbsCurve&quot; as input and outputs an array of &quot;nurbsCurves&quot; as outputs.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The number of curves is controlled by the numCurves attribute and the spacing between</span></div>\n\
<div class=\"line\"><span class=\"comment\">// each of the output curves is controlled by the curveOffset attribute. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Both &quot;numCurves&quot; and &quot;curveOffset&quot; are keyable.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use this plug-in:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (1) Load it and then execute the MEL command &quot;source multiCurveNode.mel&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      This will create a curve, hook it up to an instance of a multiCurve node,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      keyframe the numCurves and curveOffset attributes, and then hook the output</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      of the multiCurve node to a curveVarGroup node that will display all the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      output curves.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (2) Once this script has been run, push play and as the animation progresses,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      new curves will be created and the spacing between them will increase. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTypedAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsCurve.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsCurveData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArrayDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArrayDataBuilder.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>multiCurve : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        multiCurve() {};</div>\n\
<div class=\"line\">                    ~multiCurve() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     inputCurve;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     outputCurves;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     numCurves;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     curveOffset;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     multiCurve::id( 0x8000a );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     multiCurve::inputCurve;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     multiCurve::outputCurves;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     multiCurve::numCurves;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     multiCurve::curveOffset;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Error macro: if not successful, print error message and return</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the MStatus instance containing the error code.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Assumes that &quot;stat&quot; contains the error value</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PERRORfail(stat,msg) \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                if (!(stat)) { \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                    stat.perror((msg)); \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                    return (stat); \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">multiCurve::~multiCurve () {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* multiCurve::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> multiCurve();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> multiCurve::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             stat;</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> nAttr;</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html\">MFnTypedAttribute</a>   typedAttr;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    numCurves = nAttr.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a> (<span class=\"stringliteral\">&quot;numCurves&quot;</span>, <span class=\"stringliteral\">&quot;nc&quot;</span>,</div>\n\
<div class=\"line\">                              <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a762e1602488228e1b11b83501bb3832e\">MFnNumericData::kLong</a>, 5, &amp;stat);</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;initialize create numCurves attribute&quot;</span>);</div>\n\
<div class=\"line\">    <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( nAttr.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>( <span class=\"keyword\">true</span> ) );</div>\n\
<div class=\"line\">    stat = addAttribute( numCurves );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;addAttribute(numCurves)&quot;</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    curveOffset = nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a> (<span class=\"stringliteral\">&quot;curveOffset&quot;</span>, <span class=\"stringliteral\">&quot;co&quot;</span>,</div>\n\
<div class=\"line\">                              <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518\">MFnNumericData::kDouble</a>, 1.0, &amp;stat);</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;initialize create curveOffset attribute&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>( <span class=\"keyword\">true</span> ) );</div>\n\
<div class=\"line\">    stat = addAttribute( curveOffset );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;addAttribute(curveOffset)&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    inputCurve = typedAttr.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>( <span class=\"stringliteral\">&quot;inputCurve&quot;</span>, <span class=\"stringliteral\">&quot;ic&quot;</span>,</div>\n\
<div class=\"line\">                                   <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9366a44db1c93f593f8e65fcbec6a1b9\">MFnNurbsCurveData::kNurbsCurve</a>, &amp;stat );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;initialize create inputCurve attribute&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( typedAttr.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>( <span class=\"keyword\">false</span> ) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( typedAttr.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>( <span class=\"keyword\">true</span> ) );</div>\n\
<div class=\"line\">    stat = addAttribute( inputCurve );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;addAttribute(inputCurve)&quot;</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    outputCurves = typedAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>( <span class=\"stringliteral\">&quot;outputCurves&quot;</span>, <span class=\"stringliteral\">&quot;oc&quot;</span>,</div>\n\
<div class=\"line\">                                     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a9366a44db1c93f593f8e65fcbec6a1b9\">MFnNurbsCurveData::kNurbsCurve</a>, &amp;stat );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;initialize create outputCurves attribute&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( typedAttr.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#acc80b84249f9c028f2c6d085a026b50c\">setArray</a>( <span class=\"keyword\">true</span> ) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( typedAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>( <span class=\"keyword\">true</span> ) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( typedAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>( <span class=\"keyword\">false</span> ) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> ( typedAttr.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a08fb5fd3764795485a0d799616646ef1\">setUsesArrayDataBuilder</a>( <span class=\"keyword\">true</span> ) );</div>\n\
<div class=\"line\">    stat = addAttribute( outputCurves );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;addAttribute(outputCurves)&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = attributeAffects( numCurves, outputCurves );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;attributeAffects(inputCurve, outputCurves)&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = attributeAffects( curveOffset, outputCurves );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;attributeAffects(inputCurve, outputCurves)&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = attributeAffects( inputCurve, outputCurves );</div>\n\
<div class=\"line\">    PERRORfail(stat, <span class=\"stringliteral\">&quot;attributeAffects(inputCurve, outputCurves)&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> multiCurve::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( plug == outputCurves )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> numCurvesHandle =  data.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(numCurves, &amp;stat);</div>\n\
<div class=\"line\">        PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute getting numCurves&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> num = numCurvesHandle.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a7e34eb0d7ccd3be001aebd8f5fa90675\">asLong</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> curveOffsetHandle =  data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(curveOffset, &amp;stat);</div>\n\
<div class=\"line\">        PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute getting curveOffset&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> baseOffset = curveOffsetHandle.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#ac1983b7d41a8dae60dc5b1eb9f44a53c\">asDouble</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputCurveHandle = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(inputCurve, &amp;stat);</div>\n\
<div class=\"line\">        PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute getting inputCurve&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> inputCurveObject ( inputCurveHandle.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a9cd068019354183411835a1f31fdb443\">asNurbsCurveTransformed</a>() );</div>\n\
<div class=\"line\">        <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html\">MFnNurbsCurve</a> inCurveFS ( inputCurveObject );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> outputArray = data.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a11fd41c7d97d656a2bffdc23015f1496\">outputArrayValue</a>(outputCurves,</div>\n\
<div class=\"line\">                                                             &amp;stat);</div>\n\
<div class=\"line\">        PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute getting output data handle&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Create an array data build that is preallocated to hold just</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// the number of curves we plan on creating.  When this builder</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// is set in to the MArrayDataHandle at the end of the compute</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// method, the new array will replace the existing array in the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// scene.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// If the number of elements of the multi does not change between</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// compute cycles, then one can reuse the space allocated on a</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// previous cycle by extracting the existing builder from the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// MArrayDataHandle:</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//      MArrayDataBuilder builder( outputArray.builder(&amp;stat) );</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// this later form of the builder will allow you to rewrite elements</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// of the array, and to grow it, but the array can only be shrunk by</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// explicitly removing elements with the method</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//      MArrayDataBuilder::removeElement(unsigned index);</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_builder.html\">MArrayDataBuilder</a> builder(outputCurves, num, &amp;stat);</div>\n\
<div class=\"line\">        PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute creating builder&quot;</span>);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> curveNum = 0; curveNum &lt; num; curveNum++) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outHandle = builder.addElement(curveNum);</div>\n\
<div class=\"line\">            <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve_data.html\">MFnNurbsCurveData</a> dataCreator;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> outCurveData = dataCreator.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve_data.html#af1adb4abaf5243c6c0749bcca7b5c418\">create</a>();</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> outputCurve  = inCurveFS.copy(inputCurveObject,</div>\n\
<div class=\"line\">                                                  outCurveData, &amp;stat);</div>\n\
<div class=\"line\">            PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute copying curve&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html\">MFnNurbsCurve</a> outCurveFS ( outputCurve );</div>\n\
<div class=\"line\">            <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> cvs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span> offset = baseOffset * (curveNum+1);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            outCurveFS.getCVs ( cvs, <a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\">MSpace::kWorld</a> );</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> numCVs = cvs.<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; numCVs; i++) {</div>\n\
<div class=\"line\">                cvs[i].x += offset;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            outCurveFS.setCVs ( cvs );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            outHandle.<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>(outCurveData);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Set the builder back into the output array.  This statement</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// is always required, no matter what constructor was used to</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// create the builder.</span></div>\n\
<div class=\"line\">        stat = outputArray.<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a575cf7adebfd8e3c29e588d2cd1c47a6\">set</a>(builder);</div>\n\
<div class=\"line\">        PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute setting the builder&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Since we compute all the elements of the array, instead of</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// just marking the plug we were asked to compute as clean, mark</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// every element of the array as clean to prevent further calls</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// to this compute method during this DG evaluation cycle.</span></div>\n\
<div class=\"line\">        stat = outputArray.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#aff40e8c8c255448d5d19a05148b83058\">setAllClean</a>();</div>\n\
<div class=\"line\">        PERRORfail(stat, <span class=\"stringliteral\">&quot;multiCurve::compute cleaning outputCurves&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> (plugin.registerNode( <span class=\"stringliteral\">&quot;multiCurve&quot;</span>, multiCurve::id,</div>\n\
<div class=\"line\">                                multiCurve::creator, multiCurve::initialize ) );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a> (plugin.deregisterNode( multiCurve::id ) );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";