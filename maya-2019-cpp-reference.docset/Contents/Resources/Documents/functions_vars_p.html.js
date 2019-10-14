var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Class Members - Variables</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_p.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Class Members - Variables</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_o.html#index_o\"><span>o</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_z.html#index_z\"><span>z</span></a></li>\n\
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
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_p\"></a>- p -</h3><ul>\n\
<li>parentInverseMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a60307c6c66af3a3e889bf0dde83ef54e\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a60307c6c66af3a3e889bf0dde83ef54e\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a60307c6c66af3a3e889bf0dde83ef54e\">MPxTransform</a>\n\
</li>\n\
<li>parentMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a9dcee4efddda947e5dfa916e0e672ca9\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a9dcee4efddda947e5dfa916e0e672ca9\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a9dcee4efddda947e5dfa916e0e672ca9\">MPxTransform</a>\n\
</li>\n\
<li>partition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_object_set.html#acbfc3ae6a91c337c5e9089c3b927a093\">MPxObjectSet</a>\n\
</li>\n\
<li>path\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_px_hardware_shader_1_1_shader_context.html#a433ec4fcf66f20e79d8599f19cdbb5d1\">MPxHardwareShader::ShaderContext</a>\n\
</li>\n\
<li>pathGeometry\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a07cb9e2a27ef1526a007c3d8c57a8f00\">MPxMotionPathNode</a>\n\
</li>\n\
<li>pencilCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a6516e7127ca4f33b0c87394ea1d9869f\">MCursor</a>\n\
</li>\n\
<li>perspective\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a35bef8d4568a5e59f4a5b01ca78d8378\">MRenderData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a35bef8d4568a5e59f4a5b01ca78d8378\">MRenderShadowData</a>\n\
</li>\n\
<li>perspectiveMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a4c7b37d34317e6f0320f5923f8c1a141\">MRenderShadowData</a>\n\
</li>\n\
<li>pixelAspectRatio\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a77feb240574bdb5015e0a4c69f1d4bb2\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>positionMarkerTime\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a51125f4575281edf211e43bda28b5adf\">MPxMotionPathNode</a>\n\
</li>\n\
<li>postMel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a4c9568116643c96fd32368cf248b8d84\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>postRenderLayerMel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a08fc9dec3c1aae24728edd9df79b7bfd\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>postRenderMel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#ac03c5c55890c798991762ae0e114ac2f\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>preMel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#aec48818e1baf5b76c6b97e210de8051e\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>preRenderLayerMel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a7a77afe7f99ecfeed3dfd47472a65bf9\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>preRenderMel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#ae292838477c83f992b2b3eeac04b9543\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>priority\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_job_params.html#a1e440af9e86f7a3c2784c3e2bd687d25\">MPxRenderer::JobParams</a>\n\
</li>\n\
<li>progress\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_progress_params.html#ac7abb4766cd3f65c31f56279d7decff8\">MPxRenderer::ProgressParams</a>\n\
</li>\n\
<li>projectionMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a291f9f563aa7b923efaea2386037c7dd\">MRenderShadowData</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";