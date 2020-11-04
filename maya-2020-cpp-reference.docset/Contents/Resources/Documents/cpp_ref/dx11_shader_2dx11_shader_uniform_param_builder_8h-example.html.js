var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: dx11Shader/dx11ShaderUniformParamBuilder.h</title>\n\
      \n\
	  \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
    \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'dx11_shader_2dx11_shader_uniform_param_builder_8h-example.html\', tocPrefix);\n\
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
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: dx11Shader/dx11ShaderUniformParamBuilder.h</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">dx11Shader/dx11ShaderUniformParamBuilder.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _dx11ShaderUniformParamBuilder_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _dx11ShaderUniformParamBuilder_h_</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MUniformParameter.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Includes for DX11</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define WIN32_LEAN_AND_MEAN</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3d11.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// for VS 2012, Win8 SDK includes DX sdk with some header removed</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if _MSC_VER &gt;= 1700</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;dxgi.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3dx11.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(JAMBUILD)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;DX11/d3dx11effect.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Build against the DX SDK header</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;../Samples/C++/Effects11/Inc/d3dx11effect.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef USE_BOOL</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define USE_BOOL // use BOOL instead of bool</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdint.h&gt;</span> <span class=\"comment\">// for uint32_t</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>dx11ShaderNode;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CUniformParameterBuilder</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    CUniformParameterBuilder();</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> init(ID3DX11EffectVariable* inEffectVariable,dx11ShaderNode* inShader, <span class=\"keywordtype\">int</span> order);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> build();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isValidUniformParameter()</div>\n\
<div class=\"line\">    {<span class=\"keywordflow\">return</span> mValidUniformParameter;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter.html\">MUniformParameter</a>&amp; getParameter()</div>\n\
<div class=\"line\">    {<span class=\"keywordflow\">return</span> mParam;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ID3DX11EffectVariable* getEffectVariable()</div>\n\
<div class=\"line\">    {<span class=\"keywordflow\">return</span> mEffectVariable; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; getWarnings()</div>\n\
<div class=\"line\">    {<span class=\"keywordflow\">return</span> mWarnings;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> ELightParameterType</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        eUndefined, <span class=\"comment\">// 0</span></div>\n\
<div class=\"line\">        eLightPosition,</div>\n\
<div class=\"line\">        eLightDirection,</div>\n\
<div class=\"line\">        eLightColor,</div>\n\
<div class=\"line\">        eLightSpecularColor,</div>\n\
<div class=\"line\">        eLightAmbientColor, <span class=\"comment\">// 5</span></div>\n\
<div class=\"line\">        eLightDiffuseColor,</div>\n\
<div class=\"line\">        eLightRange,</div>\n\
<div class=\"line\">        eLightFalloff,</div>\n\
<div class=\"line\">        eLightAttenuation0,</div>\n\
<div class=\"line\">        eLightAttenuation1, <span class=\"comment\">// 10</span></div>\n\
<div class=\"line\">        eLightAttenuation2,</div>\n\
<div class=\"line\">        eLightTheta,</div>\n\
<div class=\"line\">        eLightPhi,</div>\n\
<div class=\"line\">        eLightShadowMap,</div>\n\
<div class=\"line\">        eLightShadowMapBias, <span class=\"comment\">// 15</span></div>\n\
<div class=\"line\">        eLightShadowColor,</div>\n\
<div class=\"line\">        eLightShadowViewProj,</div>\n\
<div class=\"line\">        eLightShadowOn,</div>\n\
<div class=\"line\">        eLightIntensity,</div>\n\
<div class=\"line\">        eLightHotspot, <span class=\"comment\">// 20</span></div>\n\
<div class=\"line\">        eLightEnable,</div>\n\
<div class=\"line\">        eLightType,</div>\n\
<div class=\"line\">        eDecayRate,</div>\n\
<div class=\"line\">        eLightAreaPosition0,</div>\n\
<div class=\"line\">        eLightAreaPosition1, <span class=\"comment\">// 25</span></div>\n\
<div class=\"line\">        eLightAreaPosition2,</div>\n\
<div class=\"line\">        eLightAreaPosition3,</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// When updating this array, please keep the </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// strings in getLightParameterSemantic in sync. </span></div>\n\
<div class=\"line\">        <span class=\"comment\">//    Thanks!</span></div>\n\
<div class=\"line\">        eLastParameterType,</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    ELightParameterType  getLightParameterType()</div>\n\
<div class=\"line\">    {<span class=\"keywordflow\">return</span> mParamType;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get semantic string back from enum:</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; getLightParameterSemantic(<span class=\"keywordtype\">int</span> lightParameterType);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> ELightType</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        eNotLight,</div>\n\
<div class=\"line\">        eUndefinedLight,</div>\n\
<div class=\"line\">        ePointLight,</div>\n\
<div class=\"line\">        eSpotLight,</div>\n\
<div class=\"line\">        eDirectionalLight,</div>\n\
<div class=\"line\">        eAmbientLight,</div>\n\
<div class=\"line\">        eAreaLight,</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ELightType getLightType()</div>\n\
<div class=\"line\">    {<span class=\"keywordflow\">return</span> mLightType;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> getLightIndex()</div>\n\
<div class=\"line\">    { <span class=\"keywordflow\">return</span> mLightIndex; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> getUIGroupIndex()</div>\n\
<div class=\"line\">    { <span class=\"keywordflow\">return</span> mUIGroupIndex; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> getUIOrder()</div>\n\
<div class=\"line\">    { <span class=\"keywordflow\">return</span> mUIOrder;  }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span> compareUIOrder(CUniformParameterBuilder* a, CUniformParameterBuilder* b)</div>\n\
<div class=\"line\">    {<span class=\"keywordflow\">return</span> (a-&gt;getUIOrder() &lt; b-&gt;getUIOrder());}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> getAnnotation(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name,LPCSTR&amp; value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> getAnnotation(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name,<span class=\"keywordtype\">float</span>&amp; value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> getAnnotation(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name,<span class=\"keywordtype\">int</span>&amp; value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> getBOOLAnnotation(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name,BOOL&amp; value);</div>\n\
<div class=\"line\">    ID3DX11EffectVariable* findAnnotationByName(ID3DX11EffectVariable *effectVariable, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> getLength()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span>                             rows        = mDescType.Rows;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span>                             columns     = mDescType.Columns;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> rows * columns;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> setParameterValueFromEffect();</div>\n\
<div class=\"line\">    MUniformParameter::DataType convertType();</div>\n\
<div class=\"line\">    MUniformParameter::DataSemantic convertSpace( MUniformParameter::DataSemantic defaultSpace);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateRangeFromAnnotation();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateUIVisibilityFromAnnotation();</div>\n\
<div class=\"line\">    MUniformParameter::DataSemantic convertSemantic();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateLightInfoFromSemantic();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> logUnsupportedTypeWarning(<span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a>&amp; typeId);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> logUnrecognisedSemantic(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* pSemantic);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ID3DX11EffectVariable*      mEffectVariable;</div>\n\
<div class=\"line\">    dx11ShaderNode *            mShader;</div>\n\
<div class=\"line\">    D3DX11_EFFECT_VARIABLE_DESC mDesc;</div>\n\
<div class=\"line\">    D3DX11_EFFECT_TYPE_DESC     mDescType;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter.html\">MUniformParameter</a>           mParam;</div>\n\
<div class=\"line\">    ELightParameterType         mParamType;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>                     mWarnings;</div>\n\
<div class=\"line\">    ELightType                  mLightType;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>                         mLightIndex;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>                         mUIGroupIndex;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                        mValidUniformParameter;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>                         mUIOrder;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::map&lt;std::string,uint32_t&gt; TAnnotationIndex;</div>\n\
<div class=\"line\">    TAnnotationIndex            mAnnotationIndex;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _dx11ShaderUniformParamBuilder_h_ */</span><span class=\"preprocessor\"></span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";