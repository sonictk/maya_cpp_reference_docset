var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>gpuCache/gpuCacheUnitBoundingBox.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_unit_bounding_box_8cpp-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/gpuCacheUnitBoundingBox.cpp</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheUnitBoundingBox.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheUnitBoundingBox.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>GPUCache {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS UnitBoundingBox</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">std::shared_ptr&lt;const IndexBuffer&gt;  UnitBoundingBox::fBoundingBoxIndices;</div>\n\
<div class=\"line\">std::shared_ptr&lt;const VertexBuffer&gt; UnitBoundingBox::fBoundingBoxPositions;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; UnitBoundingBox::boundingBox()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a> sBoundingBox(</div>\n\
<div class=\"line\">        <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>(-1.0f, -1.0f, -1.0f),</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>(1.0f, 1.0f, 1.0f));</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> sBoundingBox;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">std::shared_ptr&lt;const IndexBuffer&gt;&amp; UnitBoundingBox::indices()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Initialize the unit bounding box buffers</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fBoundingBoxIndices) {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> IndexBuffer::index_t indices[24] = {</div>\n\
<div class=\"line\">            0, 1, 1, 2, 2, 3, 3, 0,</div>\n\
<div class=\"line\">            4, 5, 5, 6, 6, 7, 7, 4,</div>\n\
<div class=\"line\">            0, 4, 1, 5, 2, 6, 3, 7</div>\n\
<div class=\"line\">        };</div>\n\
<div class=\"line\">        GPUCache::shared_array&lt;IndexBuffer::index_t&gt; indicesArray(<span class=\"keyword\">new</span> IndexBuffer::index_t[24]);</div>\n\
<div class=\"line\">        memcpy(indicesArray.get(), indices, <span class=\"keyword\">sizeof</span>(IndexBuffer::index_t)*24);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fBoundingBoxIndices = IndexBuffer::create(</div>\n\
<div class=\"line\">            SharedArray&lt;IndexBuffer::index_t&gt;::create(indicesArray, 24));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fBoundingBoxIndices;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">std::shared_ptr&lt;const VertexBuffer&gt;&amp; UnitBoundingBox::positions()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fBoundingBoxPositions) {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> positions[24] = {</div>\n\
<div class=\"line\">            -1.0f, -1.0f, -1.0f,</div>\n\
<div class=\"line\">            -1.0f, -1.0f,  1.0f,</div>\n\
<div class=\"line\">            1.0f, -1.0f,  1.0f,</div>\n\
<div class=\"line\">            1.0f, -1.0f, -1.0f,</div>\n\
<div class=\"line\">            -1.0f,  1.0f, -1.0f,</div>\n\
<div class=\"line\">            -1.0f,  1.0f,  1.0f,</div>\n\
<div class=\"line\">            1.0f,  1.0f,  1.0f,</div>\n\
<div class=\"line\">            1.0f,  1.0f, -1.0f,</div>\n\
<div class=\"line\">        };</div>\n\
<div class=\"line\">        GPUCache::shared_array&lt;float&gt; positionsArray(<span class=\"keyword\">new</span> <span class=\"keywordtype\">float</span>[24]);</div>\n\
<div class=\"line\">        memcpy(positionsArray.get(), positions, <span class=\"keyword\">sizeof</span>(float)*24);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fBoundingBoxPositions = VertexBuffer::createPositions(</div>\n\
<div class=\"line\">            SharedArray&lt;float&gt;::create(positionsArray, 24));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fBoundingBoxPositions;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> UnitBoundingBox::clear()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fBoundingBoxIndices.reset();</div>\n\
<div class=\"line\">    fBoundingBoxPositions.reset();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> UnitBoundingBox::boundingBoxMatrix(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; boundingBox)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> offset = boundingBox.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#a329b58fadcbe4f236bfbb0887253fdc7\">center</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> scale = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>(boundingBox.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#a6cddcbf72c80144aa2e6501abb150c30\">width</a>()  / 2.0f, </div>\n\
<div class=\"line\">                                boundingBox.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#afa7750092d5dcf402c83fb5adba91453\">height</a>() / 2.0f, </div>\n\
<div class=\"line\">                                boundingBox.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#a65c72a51aba9fc4233b58751dd712e43\">depth</a>()  / 2.0f);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> boundingBoxMatrix;</div>\n\
<div class=\"line\">    boundingBoxMatrix[3][0] = offset[0];</div>\n\
<div class=\"line\">    boundingBoxMatrix[3][1] = offset[1];</div>\n\
<div class=\"line\">    boundingBoxMatrix[3][2] = offset[2];</div>\n\
<div class=\"line\">    boundingBoxMatrix[0][0] = scale[0];</div>\n\
<div class=\"line\">    boundingBoxMatrix[1][1] = scale[1];</div>\n\
<div class=\"line\">    boundingBoxMatrix[2][2] = scale[2];</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> boundingBoxMatrix;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";