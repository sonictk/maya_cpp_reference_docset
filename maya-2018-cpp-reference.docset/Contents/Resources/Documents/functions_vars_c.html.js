var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Variables</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_c.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_c.html#index_c\"><span>c</span></a></li>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_vars_p.html#index_p\"><span>p</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_c\"></a>- c -</h3><ul>\n\
<li>caching\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a2415a0b1d38a0f851f801c4a18181f91\">MPxNode</a>\n\
</li>\n\
<li>camera\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_camera_set.html#aefe23f4fdda52652a96f474b239d18d2\">MPxCameraSet</a>\n\
</li>\n\
<li>cameraId\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_job_params.html#a8a2588a08b076406d08c68645519a762\">MPxRenderer::JobParams</a>\n\
</li>\n\
<li>cameraLayer\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_camera_set.html#a35d89474d1041756309c05442b38de5b\">MPxCameraSet</a>\n\
</li>\n\
<li>center\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a1782a6717e36a9db600bd747c6707ecd\">MPxImagePlane</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a1782a6717e36a9db600bd747c6707ecd\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a1782a6717e36a9db600bd747c6707ecd\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a1782a6717e36a9db600bd747c6707ecd\">MPxTransform</a>\n\
</li>\n\
<li>centerX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#ab79f11d9070ddebdd9646e50265923dc\">MPxImagePlane</a>\n\
</li>\n\
<li>centerY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a200bf4dbafb373adaff712599bdbc3aa\">MPxImagePlane</a>\n\
</li>\n\
<li>centerZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a7d6bb18744591db9be47e87a747cb1e0\">MPxImagePlane</a>\n\
</li>\n\
<li>channels\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a9ed2af39747c91928713f96d4e28b53f\">MPxRenderer::RefreshParams</a>\n\
</li>\n\
<li>clearColor1\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a80b1e198f586619d844fff6bb4cc4679\">MFrameContext::BackgroundParams</a>\n\
</li>\n\
<li>clearColor2\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a51a529fc62d83747bb1b7f1ed04ff22e\">MFrameContext::BackgroundParams</a>\n\
</li>\n\
<li>clearColorFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a01ce816fb45a354a86a31b053332707e\">MFrameContext::BackgroundParams</a>\n\
</li>\n\
<li>clearDepthFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#af9100c06665ebc59126c19e6703bf821\">MFrameContext::BackgroundParams</a>\n\
</li>\n\
<li>clearDepthValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a08244f814f06c8716897536d8386e4cd\">MFrameContext::BackgroundParams</a>\n\
</li>\n\
<li>clearStencilFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a50b68b504399f3ce873183a6fd368955\">MFrameContext::BackgroundParams</a>\n\
</li>\n\
<li>clearStencilValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a2cb70220d3d1dcd8f01ad0650d32ea30\">MFrameContext::BackgroundParams</a>\n\
</li>\n\
<li>colorGain\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a5f9d12e20ca0ee936e4542663c7da92c\">MPxImagePlane</a>\n\
</li>\n\
<li>colorGainB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#aa2769facf2c49707fb363f670f46aef0\">MPxImagePlane</a>\n\
</li>\n\
<li>colorGainG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#ae527c2fafc8b559a782a6eb68fe94f6e\">MPxImagePlane</a>\n\
</li>\n\
<li>colorGainR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#adf7ec4183aefc1ee796a09dfa0341484\">MPxImagePlane</a>\n\
</li>\n\
<li>colorOffset\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a9649d1e2839abe5c42dab5aa554f1eaa\">MPxImagePlane</a>\n\
</li>\n\
<li>colorOffsetB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a50fa9d56b0b51fbed28b482fea4f4cdf\">MPxImagePlane</a>\n\
</li>\n\
<li>colorOffsetG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#afeb3076c1dd4f5f11ca158a1088e44b9\">MPxImagePlane</a>\n\
</li>\n\
<li>colorOffsetR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a8fd01b10e85911f47480cbe6c0cb2e41\">MPxImagePlane</a>\n\
</li>\n\
<li>comparisonFn\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html#a15f730619c70556c10c20ceb3d6e2a8e\">MSamplerStateDesc</a>\n\
</li>\n\
<li>composite\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a8d7a0150fc89c3a72287f0dec0cb9e5d\">MPxImagePlane</a>\n\
</li>\n\
<li>computeNode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#a65d149367b14e7b9e6084b427aa1215f\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>computeNodeColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#ada52c8b8575250426e899f2e18059ff7\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>computeNodeColorB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#a7ce1f80a46291ebbb7f3ceeb22c79abf\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>computeNodeColorG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#a7312c50410d0282e9a04637b94bee2ee\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>computeNodeColorR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#aa2760f99a7486f7f035296cd7f55dc9d\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>connectedNodes\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#aeaf245aaee5030a7ca6f616e22990b8d\">MPxManipulatorNode</a>\n\
</li>\n\
<li>coordCount\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html#ab0fe5cce6db047fcfa02aaa9ea85ec78\">MSamplerStateDesc</a>\n\
</li>\n\
<li>coverage\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#af2c2d6ad890959bbc439529be57d87d6\">MPxImagePlane</a>\n\
</li>\n\
<li>coverageOrigin\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#afdfb8ff080494e6b522213bd95753645\">MPxImagePlane</a>\n\
</li>\n\
<li>coverageOriginX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a464cf75b651fdb34acb3e34048eb8101\">MPxImagePlane</a>\n\
</li>\n\
<li>coverageOriginY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a6256384de3e752ddf4c24059280c3bfe\">MPxImagePlane</a>\n\
</li>\n\
<li>coverageX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a1a05084202d54aa7a56e74fccdafcc36\">MPxImagePlane</a>\n\
</li>\n\
<li>coverageY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#ada9e4d7a03d7c565182175d7d6db45bb\">MPxImagePlane</a>\n\
</li>\n\
<li>crossHairCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#af47a4095de0b4c41d83e536df16354fe\">MCursor</a>\n\
</li>\n\
<li>cullMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_rasterizer_state_desc.html#a5a9f0fe3d49830803b7a25440b2d19a6\">MRasterizerStateDesc</a>\n\
</li>\n\
<li>customExt\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a7858bb0e4ea7e536891afade777ff9af\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>customImageFormat\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#ae27cabd304a3d268b80ddc9f631a8c6c\">MCommonRenderSettingsData</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";