var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwPhongShader/hwPhongShaderBehavior.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_phong_shader_2hw_phong_shader_behavior_8cpp-example.html\', tocPrefix);\n\
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
            <h1>hwPhongShader/hwPhongShaderBehavior.cpp</h1>\n\
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
<div class=\"title\">hwPhongShader/hwPhongShaderBehavior.cpp</div>  </div>\n\
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
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDagNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObjectArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;hwPhongShaderBehavior.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Set VERBOSE to 0 to suppress diagnostic outputs. Set it to 1 to</span></div>\n\
<div class=\"line\"><span class=\"comment\">// display when the override methods are called.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define VERBOSE 0</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Constructor</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">hwPhongShaderBehavior::hwPhongShaderBehavior()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Destructor</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">hwPhongShaderBehavior::~hwPhongShaderBehavior()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Returns a new instance of this class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> *hwPhongShaderBehavior::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> hwPhongShaderBehavior;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Overloaded function from MPxDragAndDropBehavior</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  this method will return true if it is going to handle the connection</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  between the two nodes given.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keywordtype\">bool</span> hwPhongShaderBehavior::shouldBeUsedFor(</div>\n\
<div class=\"line\">    <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; sourceNode, </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; destinationNode,</div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>   &amp; <span class=\"comment\">/* sourcePlug */</span>,</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>   &amp; <span class=\"comment\">/* destinationPlug */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> result = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Handle dropping a hw shader on a maya shader</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((<a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(sourceNode).typeName() == <span class=\"stringliteral\">&quot;hwPhongShader&quot;</span>) &amp;&amp;</div>\n\
<div class=\"line\">        destinationNode.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a2af9af308555c50cf68e2c14595b680b\">MFn::kLambert</a>))</div>\n\
<div class=\"line\">        result = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if VERBOSE</span></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;shouldBeUsedFor &quot;</span>&lt;&lt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(sourceNode).<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>().<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() </div>\n\
<div class=\"line\">         &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(destinationNode).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()  </div>\n\
<div class=\"line\">         &lt;&lt; (result?<span class=\"stringliteral\">&quot; true\\n&quot;</span>:<span class=\"stringliteral\">&quot; false\\n&quot;</span>);</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Connect source plug to destination.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keyword\">static</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> connectAttr(</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;srcPlug, </div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;destPlug, </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        force)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result = MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(!srcPlug.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ab7ec149d38b7c29ca55c5aa7b407d8f9\">isNull</a>() &amp;&amp; !destPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ab7ec149d38b7c29ca55c5aa7b407d8f9\">isNull</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> cmd = <span class=\"stringliteral\">&quot;connectAttr &quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (force) cmd += <span class=\"stringliteral\">&quot;-f &quot;</span>;</div>\n\
<div class=\"line\">        cmd += srcPlug.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>() + <span class=\"stringliteral\">&quot; &quot;</span> + destPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>();</div>\n\
<div class=\"line\">        result = <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434\">MGlobal::executeCommand</a>(cmd);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if VERBOSE</span></div>\n\
<div class=\"line\">        cerr &lt;&lt; cmd.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()&lt;&lt;<span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Overloaded function from MPxDragAndDropBehavior</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  this method will handle the connection between the hwPhongShader</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  and the shader it is assigned to as well as any meshes that it is</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  assigned to.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> hwPhongShaderBehavior::connectNodeToNode( </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; sourceNode, </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; destinationNode, </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>      force )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result = MS::kFailure;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> src(sourceNode);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((src.typeName() == <span class=\"stringliteral\">&quot;hwPhongShader&quot;</span>) &amp;&amp;</div>\n\
<div class=\"line\">        destinationNode.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a2af9af308555c50cf68e2c14595b680b\">MFn::kLambert</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> dest(destinationNode);</div>\n\
<div class=\"line\">        result = connectAttr(src.findPlug(<span class=\"stringliteral\">&quot;outColor&quot;</span>), </div>\n\
<div class=\"line\">                             dest.findPlug(<span class=\"stringliteral\">&quot;hardwareShader&quot;</span>), force);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if VERBOSE</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (result != MS::kSuccess)</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;connectNodeToNode &quot;</span>&lt;&lt;src.name().asChar() </div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(destinationNode).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()  </div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot; failed\\n&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Overloaded function from MPxDragAndDropBehavior</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  this method will assign the correct output from the hwPhong shader </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  onto the given attribute.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> hwPhongShaderBehavior::connectNodeToAttr( </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; sourceNode,</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>   &amp; destinationPlug,</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>      force )</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result = MS::kFailure;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> src(sourceNode);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//if we are dragging from a hwPhongShader</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//to a shader than connect the outColor</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//plug to the plug being passed in</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  </span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((src.typeName() == <span class=\"stringliteral\">&quot;hwPhongShader&quot;</span>) &amp;&amp;</div>\n\
<div class=\"line\">        destinationPlug.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ae024049dad815f2f186e6a4fead8be51\">node</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a2af9af308555c50cf68e2c14595b680b\">MFn::kLambert</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        result = connectAttr(src.findPlug(<span class=\"stringliteral\">&quot;outColor&quot;</span>), destinationPlug, force);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if VERBOSE</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (result != MS::kSuccess)</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;connectNodeToAttr &quot;</span>&lt;&lt;src.name().asChar() </div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; destinationPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()  </div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot; failed\\n&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> hwPhongShaderBehavior::connectAttrToNode( </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>   &amp; sourcePlug, </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; destinationNode,</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>      force )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result = MS::kFailure;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sourceNode = sourcePlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ae024049dad815f2f186e6a4fead8be51\">node</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> src(sourceNode);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((src.typeName() == <span class=\"stringliteral\">&quot;hwPhongShader&quot;</span>) &amp;&amp;</div>\n\
<div class=\"line\">        destinationNode.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a2af9af308555c50cf68e2c14595b680b\">MFn::kLambert</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> dest(destinationNode);</div>\n\
<div class=\"line\">        result = connectAttr(sourcePlug, dest.findPlug(<span class=\"stringliteral\">&quot;hardwareShader&quot;</span>),</div>\n\
<div class=\"line\">                             force);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if VERBOSE</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (result != MS::kSuccess)</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;connectNodeAttrToNode &quot;</span>&lt;&lt;sourcePlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() </div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(destinationNode).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()  </div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot; failed\\n&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> hwPhongShaderBehavior::connectAttrToAttr( </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; sourcePlug, </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; destinationPlug, </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    force )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if VERBOSE</span></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;In connectAttrToAttr &quot;</span>&lt;&lt;sourcePlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() </div>\n\
<div class=\"line\">         &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; destinationPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()</div>\n\
<div class=\"line\">         &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> connectAttr(sourcePlug, destinationPlug, force);</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";