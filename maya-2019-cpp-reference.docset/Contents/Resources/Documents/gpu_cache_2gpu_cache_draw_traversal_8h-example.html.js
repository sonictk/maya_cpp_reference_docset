var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>gpuCache/gpuCacheDrawTraversal.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_draw_traversal_8h-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/gpuCacheDrawTraversal.h</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheDrawTraversal.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _gpuCacheDrawTraversal_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _gpuCacheDrawTraversal_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk </span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheGeometry.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheFrustum.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheVBOProxy.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>GPUCache {</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">//==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS DrawTraversalState</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Minimal traveral state</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>DrawTraversalState</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> TransparentPruneType {</div>\n\
<div class=\"line\">        kPruneNone,</div>\n\
<div class=\"line\">        kPruneOpaque,</div>\n\
<div class=\"line\">        kPruneTransparent</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    DrawTraversalState(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> Frustum&amp;             frustrum,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span>               seconds,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> TransparentPruneType transparentPrune)</div>\n\
<div class=\"line\">        : fFrustum(frustrum),</div>\n\
<div class=\"line\">          fSeconds(seconds),</div>\n\
<div class=\"line\">          fTransparentPrune(transparentPrune)</div>\n\
<div class=\"line\">    {}</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~DrawTraversalState() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Frustum&amp;  frustum()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fFrustum; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>          seconds()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fSeconds; }</div>\n\
<div class=\"line\">    TransparentPruneType transparentPrune()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fTransparentPrune; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    VBOProxy&amp;       vboProxy()      { <span class=\"keywordflow\">return</span> fVBOProxy; }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    DrawTraversalState(<span class=\"keyword\">const</span> DrawTraversalState&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> DrawTraversalState&amp; operator=(<span class=\"keyword\">const</span> DrawTraversalState&amp;);</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Frustum              fFrustum;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span>               fSeconds;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> TransparentPruneType fTransparentPrune;</div>\n\
<div class=\"line\">    VBOProxy                   fVBOProxy;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS DrawTraversal</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// A traversal template implementing coordinate transformation and</span></div>\n\
<div class=\"line\"><span class=\"comment\">// hierarchical view frustum culling. The user only to implement a</span></div>\n\
<div class=\"line\"><span class=\"comment\">// draw function with the following signature:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// void draw(const std::shared_ptr&lt;const ShapeSample&gt;&amp; sample);</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Implemented using the &quot;Curiously recurring template pattern&quot;.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span> &lt;<span class=\"keyword\">class</span> Derived, <span class=\"keyword\">class</span> State&gt;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>DrawTraversal : <span class=\"keyword\">public</span> SubNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    State&amp; state()<span class=\"keyword\"> const            </span>{ <span class=\"keywordflow\">return</span> fState; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; xform()<span class=\"keyword\"> const    </span>{ <span class=\"keywordflow\">return</span> fXform; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    DrawTraversal(</div>\n\
<div class=\"line\">        State&amp;                  state,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp;          xform,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span>                    isReflection,</div>\n\
<div class=\"line\">        Frustum::ClippingResult parentClippingResult</div>\n\
<div class=\"line\">    )</div>\n\
<div class=\"line\">        : fState(state),</div>\n\
<div class=\"line\">          fXform(xform),</div>\n\
<div class=\"line\">          fIsReflection(isReflection),</div>\n\
<div class=\"line\">          fParentClippingResult(parentClippingResult)</div>\n\
<div class=\"line\">    {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isReflection()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fIsReflection; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> SubNode&amp; subNode()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> *fSubNode; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> XformData&amp;   xform,</div>\n\
<div class=\"line\">                       <span class=\"keyword\">const</span> SubNode&amp;     subNode)<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (state().transparentPrune() == State::kPruneOpaque &amp;&amp;</div>\n\
<div class=\"line\">                subNode.transparentType() == SubNode::kOpaque) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (state().transparentPrune() == State::kPruneTransparent &amp;&amp;</div>\n\
<div class=\"line\">                subNode.transparentType() == SubNode::kTransparent) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const XformSample&gt;&amp; sample =</div>\n\
<div class=\"line\">            xform.getSample(fState.seconds());</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!sample) <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!sample-&gt;visibility()) <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Perform view frustum culling</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// All bounding boxes are already in the axis of the root xform sub-node</span></div>\n\
<div class=\"line\">        Frustum::ClippingResult clippingResult = Frustum::kInside;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (fParentClippingResult != Frustum::kInside) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Only check the bounding box if the bounding box intersects with</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// the view frustum</span></div>\n\
<div class=\"line\">            clippingResult = state().frustum().test(</div>\n\
<div class=\"line\">                    sample-&gt;boundingBox(), fParentClippingResult);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Prune this sub-hierarchy if the bounding box is</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// outside the view frustum</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (clippingResult == Frustum::kOutside) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Flip the global reflection flag back-and-​forth depending on</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// the reflection of the local matrix.</span></div>\n\
<div class=\"line\">        Derived traversal(fState, sample-&gt;xform() * fXform,</div>\n\
<div class=\"line\">                          bool(fIsReflection ^ sample-&gt;isReflection()),</div>\n\
<div class=\"line\">                          clippingResult);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Recurse into children sub nodes. Expand all instances.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keyword\">const</span> SubNode::Ptr&amp; child :subNode.getChildren() ) {</div>\n\
<div class=\"line\">            child-&gt;accept(traversal);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> ShapeData&amp;   shape,</div>\n\
<div class=\"line\">                       <span class=\"keyword\">const</span> SubNode&amp;     subNode)<span class=\"keyword\"> override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp; sample =</div>\n\
<div class=\"line\">            shape.getSample(fState.seconds());</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!sample) <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fSubNode = &amp;subNode;</div>\n\
<div class=\"line\">        <span class=\"keyword\">static_cast&lt;</span>Derived*<span class=\"keyword\">&gt;</span>(<span class=\"keyword\">this</span>)-&gt;draw(sample);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    DrawTraversal(<span class=\"keyword\">const</span> DrawTraversal&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> DrawTraversal&amp; operator=(<span class=\"keyword\">const</span> DrawTraversal&amp;);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    State&amp;                        fState;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> SubNode*                fSubNode;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>                 fXform;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span>                    fIsReflection;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Frustum::ClippingResult fParentClippingResult;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">} <span class=\"comment\">// namespace GPUCache</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";