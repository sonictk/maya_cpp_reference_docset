var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MAttributeParameterMappingList Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html\', tocPrefix);\n\
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
            <h1>MAttributeParameterMappingList Class Reference</h1>\n\
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
<div class=\"title\">MAttributeParameterMappingList Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MPxShadingNodeOverride.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>A list of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\" title=\"Class for defining relationship between Maya attributes and fragment parameters. \">MAttributeParameterMapping</a> objects. </p>\n\
<p>A list of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\" title=\"Class for defining relationship between Maya attributes and fragment parameters. \">MAttributeParameterMapping</a> objects. Ownership of mapping objects added to the list remains with the caller; the list makes a copy. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/file_texture_2file_texture_8cpp-example.html#_a16\">fileTexture/fileTexture.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/lambert_shader_2lambert_shader_override_8cpp-example.html#_a6\">lambertShader/lambertShaderOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/lambert_shader_2lambert_shader_override_8h-example.html#_a6\">lambertShader/lambertShaderOverride.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phong_shader_2phong_shader_override_8cpp-example.html#_a6\">phongShader/phongShaderOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phong_shader_2phong_shader_override_8h-example.html#_a6\">phongShader/phongShaderOverride.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_override_8cpp-example.html#_a14\">simpleNoiseShader/simpleNoiseShaderOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_override_8h-example.html#_a7\">simpleNoiseShader/simpleNoiseShaderOverride.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a9db951cd24562738e174146b9d57ded9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a9db951cd24562738e174146b9d57ded9\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a9db951cd24562738e174146b9d57ded9\">MAttributeParameterMappingList</a> ()</td></tr>\n\
<tr class=\"memdesc:a9db951cd24562738e174146b9d57ded9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:a9db951cd24562738e174146b9d57ded9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaa0912fda3d69a1586a6593f7813a483\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aaa0912fda3d69a1586a6593f7813a483\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#aaa0912fda3d69a1586a6593f7813a483\">~MAttributeParameterMappingList</a> ()</td></tr>\n\
<tr class=\"memdesc:aaa0912fda3d69a1586a6593f7813a483\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:aaa0912fda3d69a1586a6593f7813a483\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a580388f31f60c46fac867ca48a48da1e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a580388f31f60c46fac867ca48a48da1e\">length</a> () const </td></tr>\n\
<tr class=\"memdesc:a580388f31f60c46fac867ca48a48da1e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the length of the list.  <a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a580388f31f60c46fac867ca48a48da1e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a580388f31f60c46fac867ca48a48da1e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4cf3dc916c9f4bcbe4ba8f4c59554757\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a4cf3dc916c9f4bcbe4ba8f4c59554757\">getMapping</a> (unsigned int index) const </td></tr>\n\
<tr class=\"memdesc:a4cf3dc916c9f4bcbe4ba8f4c59554757\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the mapping at the specified index.  <a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a4cf3dc916c9f4bcbe4ba8f4c59554757\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4cf3dc916c9f4bcbe4ba8f4c59554757\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a618ad5b104cfbff5d1f869d8b4144906\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a618ad5b104cfbff5d1f869d8b4144906\">findByAttributeName</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;attributeName) const </td></tr>\n\
<tr class=\"memdesc:a618ad5b104cfbff5d1f869d8b4144906\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Find a mapping by attribute name.  <a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a618ad5b104cfbff5d1f869d8b4144906\">More...</a><br></td></tr>\n\
<tr class=\"separator:a618ad5b104cfbff5d1f869d8b4144906\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad6a8e8b308830e3ee064dedfda768104\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#ad6a8e8b308830e3ee064dedfda768104\">findByParameterName</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;parameterName) const </td></tr>\n\
<tr class=\"memdesc:ad6a8e8b308830e3ee064dedfda768104\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Find a mapping by parameter name.  <a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#ad6a8e8b308830e3ee064dedfda768104\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad6a8e8b308830e3ee064dedfda768104\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a651f7db3e2e91cdb1914be13ff70bffa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a651f7db3e2e91cdb1914be13ff70bffa\">append</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> &amp;mapping)</td></tr>\n\
<tr class=\"memdesc:a651f7db3e2e91cdb1914be13ff70bffa\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Add a mapping to the list.  <a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a651f7db3e2e91cdb1914be13ff70bffa\">More...</a><br></td></tr>\n\
<tr class=\"separator:a651f7db3e2e91cdb1914be13ff70bffa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac8bb3912a3ce86b15842e79d0b421204\"></a>\n\
void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a> ()</td></tr>\n\
<tr class=\"memdesc:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear all mappings from the list. <br></td></tr>\n\
<tr class=\"separator:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a580388f31f60c46fac867ca48a48da1e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int length </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the length of the list. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The length of the list </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4cf3dc916c9f4bcbe4ba8f4c59554757\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> * getMapping </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the mapping at the specified index. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>The index of the mapping to get</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer to the mapping or NULL if out of bounds </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a618ad5b104cfbff5d1f869d8b4144906\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> * findByAttributeName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>attributeName</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Find a mapping by attribute name. </p>\n\
<p>This will return the first mapping found with a matching attribute name.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">attributeName</td><td>The name of the attribute to search for</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer to the mapping or NULL if not found </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad6a8e8b308830e3ee064dedfda768104\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> * findByParameterName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>parameterName</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Find a mapping by parameter name. </p>\n\
<p>This will return the first mapping found with a matching parameter name.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">parameterName</td><td>The name of the parameter to search for</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer to the mapping or NULL if not found </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/file_texture_2file_texture_8cpp-example.html#a60\">fileTexture/fileTexture.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phong_shader_2phong_shader_override_8cpp-example.html#a12\">phongShader/phongShaderOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_override_8cpp-example.html#a18\">simpleNoiseShader/simpleNoiseShaderOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a651f7db3e2e91cdb1914be13ff70bffa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void append </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping.html\">MAttributeParameterMapping</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>mapping</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Add a mapping to the list. </p>\n\
<p>The list makes a copy; ownership of the original is left with the caller.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">mapping</td><td>The mapping to add to the list </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/file_texture_2file_texture_8cpp-example.html#a58\">fileTexture/fileTexture.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/lambert_shader_2lambert_shader_override_8cpp-example.html#a8\">lambertShader/lambertShaderOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phong_shader_2phong_shader_override_8cpp-example.html#a8\">phongShader/phongShaderOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_override_8cpp-example.html#a16\">simpleNoiseShader/simpleNoiseShaderOverride.cpp</a>.</dd></div>\n\
</dl>\n\
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
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxShadingNodeOverride.h</li>\n\
<li>MPxShadingNodeOverride.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";