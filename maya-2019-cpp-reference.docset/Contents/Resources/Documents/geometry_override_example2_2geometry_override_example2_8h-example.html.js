var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>geometryOverrideExample2/geometryOverrideExample2.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'geometry_override_example2_2geometry_override_example2_8h-example.html\', tocPrefix);\n\
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
            <h1>geometryOverrideExample2/geometryOverrideExample2.h</h1>\n\
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
<div class=\"title\">geometryOverrideExample2/geometryOverrideExample2.h</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#ifndef GeometryOverrideExample2_h</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define GeometryOverrideExample2_h</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxGeometryOverride.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxSurfaceShape.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHWGeometry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHWGeometryUtilities.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagMessage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>GeometryOverrideExample2_shape : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html\">MPxSurfaceShape</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>Float2</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        Float2() {}</div>\n\
<div class=\"line\">        Float2(<span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> y)</div>\n\
<div class=\"line\">            : x(x), y(y) {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> x;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> y;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>Float3</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        Float3() {}</div>\n\
<div class=\"line\">        Float3(<span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> y, <span class=\"keywordtype\">float</span> z) </div>\n\
<div class=\"line\">            : x(x), y(y), z(z) {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> x;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> y;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> z;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::vector&lt;Float3&gt;       Float3Array;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::vector&lt;Float2&gt;       Float2Array;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::vector&lt;unsigned int&gt; IndexList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span> *  creator()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> GeometryOverrideExample2_shape();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>  initialize() { <span class=\"keywordflow\">return</span> MS::kSuccess; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~GeometryOverrideExample2_shape() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a4254418493ef1ab6847b9e5f395fa3de\">isBounded</a>()<span class=\"keyword\"> const override </span>{ <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>; }</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>    <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a762dab569a9d88aa731f3c7229803e1e\">boundingBox</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_mask.html\">MSelectionMask</a>  <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#acedd5e97c21aacfc5f976499438c7fa8\">getShapeSelectionMask</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Float3Array&amp;  getPositions()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span>  fPositions; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Float3Array&amp;  getNormals()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span>  fNormals; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Float3Array&amp;  getTangents()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span>  fTangents; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Float3Array&amp;  getBiTangents()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span>  fBiTangents; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Float2Array &amp; getTexCoords()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span>  fTextureCoords; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> IndexList&amp;    getShadedIndices()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span>  fShadedIndices; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> IndexList&amp;    getWireFrameIndices()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span>  fWireFrameIndices; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;             <span class=\"comment\">// plugin node id</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    GeometryOverrideExample2_shape();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Float3Array  fPositions;            <span class=\"comment\">// cube vertex positions</span></div>\n\
<div class=\"line\">    Float3Array  fNormals;              <span class=\"comment\">// cube vertex normals</span></div>\n\
<div class=\"line\">    Float3Array  fTangents;             <span class=\"comment\">// cube vertex tangents</span></div>\n\
<div class=\"line\">    Float3Array  fBiTangents;           <span class=\"comment\">// cube vertex bitangents</span></div>\n\
<div class=\"line\">    Float2Array  fTextureCoords;        <span class=\"comment\">// cube vertex texture UV</span></div>\n\
<div class=\"line\">    IndexList    fShadedIndices;        <span class=\"comment\">// vertex indices used to draw the cube in filled mode</span></div>\n\
<div class=\"line\">    IndexList    fWireFrameIndices;     <span class=\"comment\">// vertex indices used to draw the cube in wireframe mode</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_m_message_8h.html#a42e6e9d54a954c3e2d798a156091ca1d\">MCallbackId</a> mInstanceAddedCallbackId = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>GeometryOverrideExample2 : <span class=\"keyword\">public</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html\">MHWRender::MPxGeometryOverride</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html\">MHWRender::MPxGeometryOverride</a>* Creator(<span class=\"keyword\">const</span> <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> GeometryOverrideExample2(obj);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~GeometryOverrideExample2() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a9c43d7192e56c01d8dde77fabd843a0e\">supportedDrawAPIs</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a66874f312bfb87c0159dfbfacafbc3fd\">updateDG</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#abad8e8b1f0e06eea32e2be8f97200941\">updateRenderItems</a>(<span class=\"keyword\">const</span> <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a37c7a59c1e34ed5e0528fe0ac351b519\">populateGeometry</a>(<span class=\"keyword\">const</span> <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html\">MHWRender::MGeometryRequirements</a>&amp; requirements,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; renderItems,</div>\n\
<div class=\"line\">        <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#aa4c938a24a336e5ca1c28372bc6972d7\">cleanUp</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a76b919d04fc3deb9262474e7e143733b\">requiresGeometryUpdate</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a3179af16c4aaaf82031b60a5acb82e86\">requiresUpdateRenderItems</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a04941a5d23a1f72a99e9a620a7f1bd73\">supportsEvaluationManagerParallelUpdate</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    GeometryOverrideExample2(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateWireframeItems(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* renderItemName, MGeometry::DrawMode mode, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depthPriority,</div>\n\
<div class=\"line\">                              <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> color, <span class=\"keywordtype\">bool</span> isEnable, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; renderItemList,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>&amp; shaderManager);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* sActiveWireframeRenderItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* sDormantWireframeRenderItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* sShadedRenderItemName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    GeometryOverrideExample2_shape* fMesh = <span class=\"keyword\">nullptr</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad9c34c5373567566950642c16a7c4bca\">MHWRender::DisplayStatus</a> fDisplayStatus = MHWRender::DisplayStatus::kNoStatus;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> fWireframeDisplayColor;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // GeometryOverrideExample2_h</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";