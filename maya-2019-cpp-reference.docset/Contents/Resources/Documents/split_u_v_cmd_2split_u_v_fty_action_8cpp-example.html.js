var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>splitUVCmd/splitUVFtyAction.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'split_u_v_cmd_2split_u_v_fty_action_8cpp-example.html\', tocPrefix);\n\
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
            <h1>splitUVCmd/splitUVFtyAction.cpp</h1>\n\
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
<div class=\"title\">splitUVCmd/splitUVFtyAction.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// File: splitUVFtyAction.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Node Factory: splitUVFty</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Author: Lonnie Li</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;splitUVFty.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// General Includes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Function Sets</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnSingleIndexedComponent.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Iterators</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItMeshPolygon.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> splitUVFty::doIt()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Performs the actual splitUV operation on the given object and UVs</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Declare our processing variables //</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     selUVSet;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Face Id and Face Offset map to the selected UVs</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>   selUVFaceIdMap;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>   selUVFaceOffsetMap;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Local Vertex Index map to the selected UVs</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>   selUVLocalVertIdMap;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Collect necessary information for the splitUV //</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//                                               //</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// - uvSet                                       //</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// - faceIds / localVertIds per selected UV      //</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> meshFn( fMesh );</div>\n\
<div class=\"line\">    meshFn.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a63d1cbfe5459d728ec2594ccf9baf5a4\">getCurrentUVSetName</a>( selUVSet );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> j;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> offset = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> selUVsCount = fSelUVs.length();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html\">MItMeshPolygon</a> polyIter( fMesh );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( i = 0; i &lt; selUVsCount; i++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        selUVFaceOffsetMap.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a11568087ac2ca16f4106cee62f65afd7\">append</a>(offset);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( polyIter.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#ac734f26ff1c92ecec3572a31f5e4435c\">reset</a>(); !polyIter.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#ac0f0d6fc806b11d246e05cb94e886b38\">isDone</a>(); polyIter.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#a73616f002814b8abe6d921db72d7a496\">next</a>() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( polyIter.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#aa93237aec198ded879d4bd0853b7bc39\">hasUVs</a>() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">int</span> polyVertCount = polyIter.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#ad1ea1656441c1d30dd0e3fc87229d71d\">polygonVertexCount</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span>( j = 0; j &lt; polyVertCount; j++ )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">int</span> UVIndex = 0;</div>\n\
<div class=\"line\">                    polyIter.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#af6930b5fb20019b73fdf6a3af7281fc3\">getUVIndex</a>(j, UVIndex);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span>( UVIndex == fSelUVs[i] )</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        selUVFaceIdMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a11568087ac2ca16f4106cee62f65afd7\">append</a>( polyIter.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#afdd8d04245960d9763609469ed0d21cb\">index</a>() );</div>\n\
<div class=\"line\">                        selUVLocalVertIdMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a11568087ac2ca16f4106cee62f65afd7\">append</a>(j);</div>\n\
<div class=\"line\">                        offset++;</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Store total length of the faceId map in the last element of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the offset map so that there is a way to get the number of faces</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// sharing each of the selected UVs</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    selUVFaceOffsetMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a11568087ac2ca16f4106cee62f65afd7\">append</a>(offset);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Begin the splitUV operation //</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> currentUVCount = meshFn.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a8ec9383ddfdf01902e7d5c8affd0c14c\">numUVs</a>( selUVSet );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( i = 0; i &lt; selUVsCount; i++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the current FaceId map offset</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        offset = selUVFaceOffsetMap[i];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the U and V values of the current UV</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> u;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> v;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> uvId = fSelUVs[i];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        meshFn.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#acca758d84edf1ddc2af1177c4a6ffc2f\">getUV</a>( uvId, u, v, &amp;selUVSet );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the number of faces sharing the current UV</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> faceCount = selUVFaceOffsetMap[i + 1] - selUVFaceOffsetMap[i];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Arbitrarily choose that the last faceId in the list of faces</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// sharing this UV, will keep the original UV.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( j = 0; j &lt; faceCount - 1; j++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            meshFn.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#afe8bc4718af88a29cca9ca0729c8395a\">setUV</a>( currentUVCount, u, v, &amp;selUVSet );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> localVertId = selUVLocalVertIdMap[offset];</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> faceId = selUVFaceIdMap[offset];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            meshFn.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#aa8f5741f8b319715af87211e8274ea79\">assignUV</a>( faceId, localVertId, currentUVCount, &amp;selUVSet );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            currentUVCount++;</div>\n\
<div class=\"line\">            offset++;</div>\n\
<div class=\"line\">        }</div>\n\
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