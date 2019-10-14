var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MBlendStateDesc Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_blend_state_desc.html\', tocPrefix);\n\
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
            <h1>MBlendStateDesc Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MBlendStateDesc Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/State-and-State-Manager.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; State and State Manager</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MStateManager.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Descriptor for a complete blend state. </p>\n\
<p>This class describes a complete blending state, including the blending state for all targets. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#_a0\">cgFx/cgfxPassStateSetter.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#_a2\">gpuCache/gpuCacheDrawOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_phong_shader_2hw_phong_shader_8cpp-example.html#_a96\">hwPhongShader/hwPhongShader.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#_a87\">rawfootPrintNode/rawfootPrintNode.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a9ecccd38adfc9ec49d35fbad5f4ef0e7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a9ecccd38adfc9ec49d35fbad5f4ef0e7\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#a9ecccd38adfc9ec49d35fbad5f4ef0e7\">MBlendStateDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:a9ecccd38adfc9ec49d35fbad5f4ef0e7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor, builds a default blend state. <br></td></tr>\n\
<tr class=\"separator:a9ecccd38adfc9ec49d35fbad5f4ef0e7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8d925286006374fff3ffc7e2754e3c30\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8d925286006374fff3ffc7e2754e3c30\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#a8d925286006374fff3ffc7e2754e3c30\">~MBlendStateDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:a8d925286006374fff3ffc7e2754e3c30\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a8d925286006374fff3ffc7e2754e3c30\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8a64466bfb43094b3aec845670b959b4\"></a>\n\
void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#a8a64466bfb43094b3aec845670b959b4\">setDefaults</a> ()</td></tr>\n\
<tr class=\"memdesc:a8a64466bfb43094b3aec845670b959b4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set all values for the blend state to their default values. <br></td></tr>\n\
<tr class=\"separator:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3ebc4e92258548d6904f2bf95ee169fc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#a3ebc4e92258548d6904f2bf95ee169fc\">MBlendStateDesc</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:a3ebc4e92258548d6904f2bf95ee169fc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#a3ebc4e92258548d6904f2bf95ee169fc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3ebc4e92258548d6904f2bf95ee169fc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2b7fd0d305606c35744337acca3a444e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#a2b7fd0d305606c35744337acca3a444e\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:a2b7fd0d305606c35744337acca3a444e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#a2b7fd0d305606c35744337acca3a444e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2b7fd0d305606c35744337acca3a444e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:ace0672cdd09f7c7c47d807dbaa1fcfd4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#ace0672cdd09f7c7c47d807dbaa1fcfd4\">alphaToCoverageEnable</a></td></tr>\n\
<tr class=\"memdesc:ace0672cdd09f7c7c47d807dbaa1fcfd4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Enable alpha to coverage.  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#ace0672cdd09f7c7c47d807dbaa1fcfd4\">More...</a><br></td></tr>\n\
<tr class=\"separator:ace0672cdd09f7c7c47d807dbaa1fcfd4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab374ca375c42792265e69bb0a4123559\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#ab374ca375c42792265e69bb0a4123559\">independentBlendEnable</a></td></tr>\n\
<tr class=\"memdesc:ab374ca375c42792265e69bb0a4123559\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Use TargetBlends[0] if false or individual blend states if true.  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#ab374ca375c42792265e69bb0a4123559\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab374ca375c42792265e69bb0a4123559\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a320c6d5843805b550f81726b07aa7f17\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">float&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#a320c6d5843805b550f81726b07aa7f17\">blendFactor</a> [4]</td></tr>\n\
<tr class=\"memdesc:a320c6d5843805b550f81726b07aa7f17\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Global blend factor, default (1,1,1,1).  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#a320c6d5843805b550f81726b07aa7f17\">More...</a><br></td></tr>\n\
<tr class=\"separator:a320c6d5843805b550f81726b07aa7f17\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afae6333af8929bff85129e351052930d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#afae6333af8929bff85129e351052930d\">multiSampleMask</a></td></tr>\n\
<tr class=\"memdesc:afae6333af8929bff85129e351052930d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Each bit in this mask, starting at the least significant bit (LSB), controls modification of one of the samples in a multisample render target.  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#afae6333af8929bff85129e351052930d\">More...</a><br></td></tr>\n\
<tr class=\"separator:afae6333af8929bff85129e351052930d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab6054509e76bc88d697a365e82c504c8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#ab6054509e76bc88d697a365e82c504c8\">targetBlends</a> [<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ab6b4785ac0e20c5947d74921bacc49b8\">MBlendState::kMaxTargets</a>]</td></tr>\n\
<tr class=\"memdesc:ab6054509e76bc88d697a365e82c504c8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">An array of 8 <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\" title=\"Descriptor for a blend state for a single render target. \">MTargetBlendDesc</a>, one for each target.  <a href=\"class_m_h_w_render_1_1_m_blend_state_desc.html#ab6054509e76bc88d697a365e82c504c8\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab6054509e76bc88d697a365e82c504c8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a3ebc4e92258548d6904f2bf95ee169fc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rDesc</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Copy constructor.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rDesc</td><td>The descriptor to copy </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a2b7fd0d305606c35744337acca3a444e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\">MBlendStateDesc</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rDesc</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Assignment operator.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rDesc</td><td>The descriptor to copy</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Reference to this descriptor </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"ace0672cdd09f7c7c47d807dbaa1fcfd4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool alphaToCoverageEnable</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Enable alpha to coverage. </p>\n\
<p>Default false. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab374ca375c42792265e69bb0a4123559\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool independentBlendEnable</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Use TargetBlends[0] if false or individual blend states if true. </p>\n\
<p>Default false. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_phong_shader_2hw_phong_shader_8cpp-example.html#a97\">hwPhongShader/hwPhongShader.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#a88\">rawfootPrintNode/rawfootPrintNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a320c6d5843805b550f81726b07aa7f17\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">float blendFactor[4]</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Global blend factor, default (1,1,1,1). </p>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a40\">cgFx/cgfxPassStateSetter.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_phong_shader_2hw_phong_shader_8cpp-example.html#a111\">hwPhongShader/hwPhongShader.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#a102\">rawfootPrintNode/rawfootPrintNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afae6333af8929bff85129e351052930d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int multiSampleMask</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Each bit in this mask, starting at the least significant bit (LSB), controls modification of one of the samples in a multisample render target. </p>\n\
<p>Thus, for an 8-sample render target, the low byte contains the eight write enables for each of the eight samples. The actual location of the samples is determined by the GPU sample pattern, which is not in general known or controlled directly by applications. Default 0xffffffff. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab6054509e76bc88d697a365e82c504c8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> targetBlends[<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ab6b4785ac0e20c5947d74921bacc49b8\">MBlendState::kMaxTargets</a>]</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>An array of 8 <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\" title=\"Descriptor for a blend state for a single render target. \">MTargetBlendDesc</a>, one for each target. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a41\">cgFx/cgfxPassStateSetter.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#a3\">gpuCache/gpuCacheDrawOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_phong_shader_2hw_phong_shader_8cpp-example.html#a99\">hwPhongShader/hwPhongShader.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#a90\">rawfootPrintNode/rawfootPrintNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MStateManager.h</li>\n\
<li>MStateManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";