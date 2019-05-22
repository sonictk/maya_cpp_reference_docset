var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>viewRenderOverrideShadows/viewRenderOverrideShadows.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'view_render_override_shadows_2view_render_override_shadows_8h-example.html\', tocPrefix);\n\
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
            <h1>viewRenderOverrideShadows/viewRenderOverrideShadows.h</h1>\n\
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
<div class=\"title\">viewRenderOverrideShadows/viewRenderOverrideShadows.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2012 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MColor.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MViewport2Renderer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MRenderTargetManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MShaderManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>viewRenderOverrideShadows : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html\">MHWRender::MRenderOverride</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        kShadowPrePass,</div>\n\
<div class=\"line\">        kMaya3dSceneRender,</div>\n\
<div class=\"line\">        kPresentOp,</div>\n\
<div class=\"line\">        kOperationCount</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    viewRenderOverrideShadows(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name);</div>\n\
<div class=\"line\">    ~viewRenderOverrideShadows() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#a0a36b8ef8730fa92f11c853752cc1e0e\">supportedDrawAPIs</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#af6e4d3092d127b52a0ba00b54052afa6\">startOperationIterator</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a> * <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#adab552bfd7cb4332ed0162b14710ec0a\">renderOperation</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#a5af9f73906f2f3d2adda03c604f58d73\">nextRenderOperation</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#a773d1f1082e711c8d4cf216d32b07fe4\">setup</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; destination) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#aca5dc8a0749ab4431a1208e16dbdaa45\">cleanup</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#aa313aa1923be350cc23326c961c33d50\">uiName</a>()<span class=\"keyword\"> const override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> mUIName;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> updateRenderOperations();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> updateShaders(<span class=\"keyword\">const</span> <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> updateLightList();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mUIName;</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> mClearColor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a> * mRenderOperations[kOperationCount];</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mRenderOperationNames[kOperationCount];</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> mRenderOperationEnabled[kOperationCount];</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> mCurrentOperation;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a> * mLightShader;</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> mLightList;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Scene render to output to targets</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>sceneRender : <span class=\"keyword\">public</span> <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html\">MHWRender::MSceneRender</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    sceneRender(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name);</div>\n\
<div class=\"line\">    ~sceneRender() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#abaaea083c107e41fa2ec5ef26a372e84\">shaderOverride</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#ad15ab1a015ce24728b96c4580f66521c\">preSceneRender</a>(<span class=\"keyword\">const</span> <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a> &amp; context) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setShader( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a> *shader)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mLightShader = shader;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setLightList( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> *val )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mLightList = val;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a> *mLightShader;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> *mLightList;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Shadow prepass operation</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>shadowPrepass : <span class=\"keyword\">public</span> <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_user_render_operation.html\">MHWRender::MUserRenderOperation</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    shadowPrepass(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name);</div>\n\
<div class=\"line\">    ~shadowPrepass() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_user_render_operation.html#a15b66dca635fff26069c7b5bbbb1868b\">execute</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a> &amp; drawContext ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_user_render_operation.html#a3f130aa677f7fc44a7c8c26b8452a276\">requiresLightData</a>()<span class=\"keyword\"> const override</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setLightList( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> *val )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mLightList = val;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> *mLightList;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";