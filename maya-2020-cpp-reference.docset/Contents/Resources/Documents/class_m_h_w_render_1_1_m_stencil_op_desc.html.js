var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MStencilOpDesc Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_stencil_op_desc.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MStencilOpDesc Class Reference</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MStencilOpDesc Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#pub-attribs\">Public Attributes</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Descriptor for a depth-stencil operation.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MStateManager.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a506fcd9530e013277ea0903af88ae892\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a506fcd9530e013277ea0903af88ae892\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#a506fcd9530e013277ea0903af88ae892\">MStencilOpDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:a506fcd9530e013277ea0903af88ae892\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor, builds a default stencil operation state. <br></td></tr>\n\
<tr class=\"separator:a506fcd9530e013277ea0903af88ae892\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6025830f48f65e67f08769d84acdb656\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a6025830f48f65e67f08769d84acdb656\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#a6025830f48f65e67f08769d84acdb656\">~MStencilOpDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:a6025830f48f65e67f08769d84acdb656\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a6025830f48f65e67f08769d84acdb656\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8a64466bfb43094b3aec845670b959b4\"></a>\n\
void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#a8a64466bfb43094b3aec845670b959b4\">setDefaults</a> ()</td></tr>\n\
<tr class=\"memdesc:a8a64466bfb43094b3aec845670b959b4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set all values for the stencil operation state to their default values. <br></td></tr>\n\
<tr class=\"separator:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab609b93115f4a57a0966ec96bad8c79e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#ab609b93115f4a57a0966ec96bad8c79e\">MStencilOpDesc</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:ab609b93115f4a57a0966ec96bad8c79e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#ab609b93115f4a57a0966ec96bad8c79e\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab609b93115f4a57a0966ec96bad8c79e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a92b983fff152c4795a5f3dc86210d825\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> &amp;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#a92b983fff152c4795a5f3dc86210d825\">operator=</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:a92b983fff152c4795a5f3dc86210d825\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#a92b983fff152c4795a5f3dc86210d825\">More...</a><br></td></tr>\n\
<tr class=\"separator:a92b983fff152c4795a5f3dc86210d825\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:af423dd1386a44a09a6a043c7a4ac4bb3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">MDepthStencilState::StencilOperation&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#af423dd1386a44a09a6a043c7a4ac4bb3\">stencilPassOp</a></td></tr>\n\
<tr class=\"memdesc:af423dd1386a44a09a6a043c7a4ac4bb3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Stencil op to use when the fragment passes the stencil test, default kKeepStencil.  <a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#af423dd1386a44a09a6a043c7a4ac4bb3\">More...</a><br></td></tr>\n\
<tr class=\"separator:af423dd1386a44a09a6a043c7a4ac4bb3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1eed3a7b5878b8ea1ce25f1c6f708797\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">MDepthStencilState::StencilOperation&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#a1eed3a7b5878b8ea1ce25f1c6f708797\">stencilFailOp</a></td></tr>\n\
<tr class=\"memdesc:a1eed3a7b5878b8ea1ce25f1c6f708797\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Stencil op to use when the fragment fails the stencil test, default kKeepStencil.  <a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#a1eed3a7b5878b8ea1ce25f1c6f708797\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1eed3a7b5878b8ea1ce25f1c6f708797\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad9bceea8209e9b0f3e11a108891aef52\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">MDepthStencilState::StencilOperation&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#ad9bceea8209e9b0f3e11a108891aef52\">stencilDepthFailOp</a></td></tr>\n\
<tr class=\"memdesc:ad9bceea8209e9b0f3e11a108891aef52\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Stencil op to use when the fragment passes the depth test, default kKeepStencil.  <a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#ad9bceea8209e9b0f3e11a108891aef52\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad9bceea8209e9b0f3e11a108891aef52\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac311347988e8679cefd31c9a4f797faa\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">MStateManager::CompareMode&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html#ac311347988e8679cefd31c9a4f797faa\">stencilFunc</a></td></tr>\n\
<tr class=\"memdesc:ac311347988e8679cefd31c9a4f797faa\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the stencil buffer comparison function, default kCompareAlways.  <a href=\"class_m_h_w_render_1_1_m_stencil_op_desc.html#ac311347988e8679cefd31c9a4f797faa\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac311347988e8679cefd31c9a4f797faa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Descriptor for a depth-stencil operation. </p>\n\
<p>This class encapsulates a depth-stencil operation descriptor. There are separate <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\" title=\"Descriptor for a depth-stencil operation. \">MStencilOpDesc</a> stencil operation descriptors for front and back faces in the depth stencil state. </p>\n\
</div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ab609b93115f4a57a0966ec96bad8c79e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> &amp;&#160;</td>\n\
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
<a class=\"anchor\" id=\"a92b983fff152c4795a5f3dc86210d825\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> &amp;&#160;</td>\n\
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
          <td class=\"memname\">const char * className </td>\n\
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
<a class=\"anchor\" id=\"af423dd1386a44a09a6a043c7a4ac4bb3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MDepthStencilState::StencilOperation stencilPassOp</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Stencil op to use when the fragment passes the stencil test, default kKeepStencil. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a38\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1eed3a7b5878b8ea1ce25f1c6f708797\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MDepthStencilState::StencilOperation stencilFailOp</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Stencil op to use when the fragment fails the stencil test, default kKeepStencil. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a36\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad9bceea8209e9b0f3e11a108891aef52\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MDepthStencilState::StencilOperation stencilDepthFailOp</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Stencil op to use when the fragment passes the depth test, default kKeepStencil. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a37\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac311347988e8679cefd31c9a4f797faa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MStateManager::CompareMode stencilFunc</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the stencil buffer comparison function, default kCompareAlways. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a32\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MStateManager.h</li>\n\
<li>MStateManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";