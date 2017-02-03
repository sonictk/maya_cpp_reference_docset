var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Functions</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"Python\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(py_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'py_ref/\'; }\n\
function py_ref_initializeToc(forceTrigger) {\n\
    py_ref_adsk_ref_toc.initResizable();\n\
    py_ref_adsk_ref_toc.initNavTree(\'functions_func_d.html\', tocPrefix);\n\
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
	  $(document).ready(py_ref_initializeToc);\n\
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
        var width = py_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { py_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Class Members - Functions</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>All</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions_func.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_a.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_z.html#index_z\"><span>z</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_d\"></a>- d -</h3><ul>\n\
<li>dagPath()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dag_node.html#ae5ee6be85320db32b117b7157d4085db\">OpenMaya.MFnDagNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_index_mapping.html#ae99831377ec45889596774e3b1fbf146\">OpenMayaRender.MGeometryIndexMapping</a>\n\
</li>\n\
<li>dagRoot()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dag_node.html#a7047b9f63f5ad22d9be5bfbc2598fed8\">OpenMaya.MFnDagNode</a>\n\
</li>\n\
<li>data()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_data_handle.html#a7edd8f8a2e185fb661ed42c87ace7b67\">OpenMaya.MDataHandle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_plugin_data.html#a16be9361050f7c8915f1be09a8313a70\">OpenMaya.MFnPluginData</a>\n\
</li>\n\
<li>dataType()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a6cbe464416eb3b97c32b6080f1670dc0\">OpenMayaRender.MIndexBuffer</a>\n\
</li>\n\
<li>dataTypeString()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry.html#aa09dca64fb453c527455d53aa36f81f8\">OpenMayaRender.MGeometry</a>\n\
</li>\n\
<li>deallocateAllFlags()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a5fd0c1513c012c693c4a92c3503d6b9d\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>deallocateFlag()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a95c1fb35688b8ba08bd8ada7cdaf0922\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>decompose()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_euler_rotation.html#acb00e12320f6000c89e6bc2dfa96e58d\">OpenMaya.MEulerRotation</a>\n\
</li>\n\
<li>defaultMaterial()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_material.html#ab50ef8b3b293f314eb54ee9609a561b9\">OpenMayaUI.MMaterial</a>\n\
</li>\n\
<li>deleteAfterUse()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_user_data.html#a0906f3c5095af8dab0686fc7f6598395\">OpenMaya.MUserData</a>\n\
</li>\n\
<li>deleteColorSet()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#accebd98030aa5585ccdeafc2d2e66663\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>deleteComponent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_data.html#a4ff9563815397cdd5fcf4548b1149578\">OpenMaya.MPxGeometryData</a>\n\
</li>\n\
<li>deleteComponents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#a8b025d419b1161aa6f74904485a5343f\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>deleteComponentsFromGroups()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_data.html#aa44dbea38b480fad62f25cfe0e429788\">OpenMaya.MPxGeometryData</a>\n\
</li>\n\
<li>deleteEdge()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#adc8849e5a66a4b4de86e649e5132c400\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>deleteEntries()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ad7ae373f9ff5a0b9b03a830fd7e7e291\">OpenMaya.MRampAttribute</a>\n\
</li>\n\
<li>deleteFace()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#adb5d0a4dbb8a3ea11dcdb9051e8a3974\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>deleteIndexBuffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry.html#a01f5c7965191a54c444887dcd0ee55bc\">OpenMayaRender.MGeometry</a>\n\
</li>\n\
<li>deleteManipulator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_manip3_d.html#a9f1eaceaf2698601bb38b6c0efba8bd1\">OpenMayaUI.MFnManip3D</a>\n\
</li>\n\
<li>deleteNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a5304cda53bfc1bfcce1016e2f15f7966\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>deleteUVSet()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#a11a44b9ea7255961042edb6428c7d6ba\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>deleteVertex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#afd966e01396b05105d7b06b390cb586a\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>deleteVertexBuffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry.html#a251f6c7de1168f187991a0f7c5593756\">OpenMayaRender.MGeometry</a>\n\
</li>\n\
<li>depth()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_image.html#a46f22c9072356af123fa43e5cc4a9098\">OpenMaya.MImage</a>\n\
</li>\n\
<li>depthMap()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_image.html#a49b08d281592c9b3a3c44f57a4c2f7bf\">OpenMaya.MImage</a>\n\
</li>\n\
<li>depthPriority()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_item.html#a85bcd3f28d3fc7409cac635ce622bcb9\">OpenMayaRender.MRenderItem</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html#a69a303c534b1a87379e4aeacda75d2a5\">OpenMayaRender.MUIDrawManager</a>\n\
</li>\n\
<li>depthStencilStateOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a85b1c00ab5f1ea2ddeccc6e60707d1c9\">OpenMayaRender.MQuadRender</a>\n\
</li>\n\
<li>deregisterAttributePatternFactory()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_plugin.html#a46bc877c3e1638e1d5a67bd8fe711e7a\">OpenMaya.MFnPlugin</a>\n\
</li>\n\
<li>deregisterCommand()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_plugin.html#aa969646a5b0f282305538a37d20b7c6c\">OpenMaya.MFnPlugin</a>\n\
</li>\n\
<li>deregisterComponentConverter()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#a081911bfd247ca93336bf3e60aff1db8\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterData()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_plugin.html#a926623168ed7e86892677f5cd4009af1\">OpenMaya.MFnPlugin</a>\n\
</li>\n\
<li>deregisterDrawOverrideCreator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#a6f69f342903af3fb45ec649ba7891a66\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterGeometryOverrideCreator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#a707d1ef46ea8997d4d4f10d579118920\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterIndexBufferMutator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#a69fbeba3f2b1aa16390f1ee460bbbec9\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_plugin.html#adc6ae17810a2def217c383601d60c916\">OpenMaya.MFnPlugin</a>\n\
</li>\n\
<li>deregisterOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_renderer.html#a3dca1ecc2e5ff071e3fdd84e74adb1b3\">OpenMayaRender.MRenderer</a>\n\
</li>\n\
<li>deregisterPrimitiveGenerator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#ac3dbd3b096133c2fd69d3660657d816c\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterSelectionType()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_selection_mask.html#a38934657788324cd1c31417ac5fbe242\">OpenMaya.MSelectionMask</a>\n\
</li>\n\
<li>deregisterShaderOverrideCreator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#a34d23d82c9ecc53ef836400c31897669\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterShadingNodeOverrideCreator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#aa73fac79ea9ceae2318a49a01b7c393d\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterSubSceneOverrideCreator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#ad2d009d06b0499248581d3f5bfa9cb97\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterSurfaceShadingNodeOverrideCreator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#a082ae32c63139c19ef22736350b97817\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterUserEvent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_user_event_message.html#a477ff17947ae70335fb42c9798d8d895\">OpenMaya.MUserEventMessage</a>\n\
</li>\n\
<li>deregisterVertexBufferGenerator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#ad490ef74b0f0262e6c432bfaded4719f\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>deregisterVertexBufferMutator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_draw_registry.html#a4f9c625b41717fc319a0c0737308b397\">OpenMayaRender.MDrawRegistry</a>\n\
</li>\n\
<li>desc()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_blend_state.html#a60a5b258ad1c7324c138c7686a9decbf\">OpenMayaRender.MBlendState</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_depth_stencil_state.html#aa7f80057bf6bc01ed7ddd2c0e31593fd\">OpenMayaRender.MDepthStencilState</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_rasterizer_state.html#a1d1fe8b2ffcf00b525d19565275496e7\">OpenMayaRender.MRasterizerState</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sampler_state.html#a4b49ccd96a1c4acab02663f341afa98a\">OpenMayaRender.MSamplerState</a>\n\
</li>\n\
<li>descriptor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_vertex_buffer.html#a60eceb13fed7fff2c8c8432c91985df7\">OpenMayaRender.MVertexBuffer</a>\n\
</li>\n\
<li>destroy()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_item.html#a4e2a1b3aee7aeb8348e1648f0a3a0d34\">OpenMayaRender.MRenderItem</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_sub_scene_container_iterator.html#a052f1b2db6ea48c63de7cffe41b30084\">OpenMayaRender.MSubSceneContainerIterator</a>\n\
</li>\n\
<li>destructHandle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plug.html#adea2759f82174a293e3af4c46a67ba37\">OpenMaya.MPlug</a>\n\
</li>\n\
<li>det3x3()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_matrix.html#ae92e91bd45cea9cc382ba42fdfddeb43\">OpenMaya.MFloatMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_matrix.html#a611552e965b96a7abc2641e9028a8b4e\">OpenMaya.MMatrix</a>\n\
</li>\n\
<li>det4x4()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_matrix.html#a41bd6e9c017e9cb4fc9e6342304019c3\">OpenMaya.MFloatMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_matrix.html#a4107013797335f02dc2ee47e4b2688bb\">OpenMaya.MMatrix</a>\n\
</li>\n\
<li>deviceContext()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a9b7edb2e6ba79e55629e8dac9aaa48c8\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>dgCallbackIds()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a49716291939b28833b44d34d46784255\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>dgCallbacks()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#ae57d0ef6c31e6b59f6ba1deb8d16a636\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>dgTimer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a18849963b9ec591a5c00647ece5eec25\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>dgTimerOff()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a5df92677604b4e11fc572c2dc35cfd6d\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>dgTimerOn()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a75e7df9f6b2b1a0bef8fbf3bc0490ad1\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>dgTimerQueryState()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#ac1f7d7e0b7d494ac2d34c43bc38a0e07\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>dgTimerReset()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a06ac34da719ee8873bb56a467913d1b0\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>directionIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_direction_manip.html#a2881f905a3bc18043704d83a3db2cb26\">OpenMayaUI.MFnDirectionManip</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_distance_manip.html#aae3c28a83b46e295ef721f1470a083ae\">OpenMayaUI.MFnDistanceManip</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_toggle_manip.html#ac71ed05a8dd5fdaa003f44c19c751bc4\">OpenMayaUI.MFnToggleManip</a>\n\
</li>\n\
<li>dirtyMask()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#a462e9af66225515633d0e4f5141481f4\">OpenMayaUI.MPxHwShaderNode</a>\n\
</li>\n\
<li>disableChangeManagementUntilNextRefresh()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_renderer.html#abbec84b6fa7dbece8a6427a15c970ec6\">OpenMayaRender.MRenderer</a>\n\
</li>\n\
<li>disableInternalBoundingBoxDraw()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_draw_override.html#a12e9033f5a8b8af75fac7a2d9e496fd3\">OpenMayaRender.MPxDrawOverride</a>\n\
</li>\n\
<li>disallowPolygonOffset()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#aad448cc89bd1d7bd635c340869ba5fb5\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>disconnect()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a11fcc4a70c2015b1ca54ddd9f5096e25\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>display()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a27586ee5a0d835a0409146f9556f4683\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>displayError()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_global.html#a803b8305293e385e25cc11e7c6ed13da\">OpenMaya.MGlobal</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_command.html#a8f20766e926a3d6045f8608ff9a03b2e\">OpenMaya.MPxCommand</a>\n\
</li>\n\
<li>displayInfo()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_global.html#a8faea2cdecc214a637e5a5675d38eb58\">OpenMaya.MGlobal</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_command.html#ae7c05022850e3cce4b50b91288fa3975\">OpenMaya.MPxCommand</a>\n\
</li>\n\
<li>displayModeOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_scene_render.html#a62864fc6525d1c8b34be2e856c402ce0\">OpenMayaRender.MSceneRender</a>\n\
</li>\n\
<li>displayStatus()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a69e3c934b7c97435c303c608f592eba8\">OpenMayaRender.MGeometryUtilities</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a2757d64a8ec8f90962490d958ea4999a\">OpenMayaUI.M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a5255cc2f2e17278c222062d61fecef27\">OpenMayaUI.MDrawInfo</a>\n\
</li>\n\
<li>displayStyle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a7e542d1a6c2cd1997fc092979f909e7f\">OpenMayaUI.M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a11f4eee17e43518127d923a15563f8f0\">OpenMayaUI.MDrawInfo</a>\n\
</li>\n\
<li>displayWarning()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_global.html#aee4c973180688c889e2beb2deef239f2\">OpenMaya.MGlobal</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_command.html#ac93425bf6574b77418083860cc210148\">OpenMaya.MPxCommand</a>\n\
</li>\n\
<li>displayWithNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_rotate_manip.html#ac612cbb8dc11002a3320c1f8264b2cbc\">OpenMayaUI.MFnRotateManip</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_scale_manip.html#ac3671b1790739cd1d1b0c11e672326fe\">OpenMayaUI.MFnScaleManip</a>\n\
</li>\n\
<li>distance()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plane.html#a9562dfbf3b0161369221eea7f46e16bc\">OpenMaya.MPlane</a>\n\
</li>\n\
<li>distanceIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_distance_manip.html#a7f083f782de96aed68074e387f290a5c\">OpenMayaUI.MFnDistanceManip</a>\n\
</li>\n\
<li>distanceTo()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_point.html#a4f3824382e2f70e5df83c3bd65a475e6\">OpenMaya.MFloatPoint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_point.html#aaec47e0021791492e46a39b9b66eecd8\">OpenMaya.MPoint</a>\n\
</li>\n\
<li>distanceToPoint()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html#a0c9b04f7874727b4e2efa0a2e651cd0c\">OpenMaya.MFnNurbsCurve</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#af449f6e5bd1677e16d10d91178291681\">OpenMaya.MFnNurbsSurface</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_plane.html#a91a5918c46ce7d1976d66887cc34077b\">OpenMaya.MPlane</a>\n\
</li>\n\
<li>doIt()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a5c9d3d3edfc669fc8fcf31b71fe14e4c\">OpenMaya.MDGModifier</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_command.html#a88de8ea129c69f4da101ad352ba49b2c\">OpenMaya.MPxCommand</a>\n\
</li>\n\
<li>doIteration()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_swatch_render_base.html#a911a4f079c7d50456c4c2fc6bf5671fd\">OpenMayaRender.MSwatchRenderBase</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_h_w_shader_swatch_generator.html#a9112b9006fffe57ab555875ca4d70467\">OpenMayaUI.MHWShaderSwatchGenerator</a>\n\
</li>\n\
<li>doNotWrite()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_node.html#a7772cf1126e67f19aff231ed38a5e232\">OpenMaya.MPxNode</a>\n\
</li>\n\
<li>draw()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shader_override.html#a367f8b2735ab40ad1804e4c06d4478f9\">OpenMayaRender.MPxShaderOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#ae2b47e3902c4a4b8e461a43f9a5cdd76\">OpenMayaUI.MPxLocatorNode</a>\n\
</li>\n\
<li>drawAPI()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_renderer.html#a3a80cd80032bfa12f8f3ea4fcd9d9a4e\">OpenMayaRender.MRenderer</a>\n\
</li>\n\
<li>drawAPIIsOpenGL()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_renderer.html#afa6c632bbeda7ec6f32800c4fea17348\">OpenMayaRender.MRenderer</a>\n\
</li>\n\
<li>drawAPIVersion()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_renderer.html#a902a841462ebddf41d447c9db92b059a\">OpenMayaRender.MRenderer</a>\n\
</li>\n\
<li>drawGeometry()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shader_override.html#aac5354a1d08113c9ddd1a2f241d72412\">OpenMayaRender.MPxShaderOverride</a>\n\
</li>\n\
<li>drawLast()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#a156d6d267f81e744b1f2d85a797c1612\">OpenMayaUI.MPxLocatorNode</a>\n\
</li>\n\
<li>drawMode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_item.html#a99e6dc029cf02ff763fd2d85c850827b\">OpenMayaRender.MRenderItem</a>\n\
</li>\n\
<li>drawModeString()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry.html#a32d716b11fe12cd0c49163893341f2d9\">OpenMayaRender.MGeometry</a>\n\
</li>\n\
<li>drawPlaneHandles()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_manip3_d.html#a9d4765321168048c9e33c0a772981744\">OpenMayaUI.MFnManip3D</a>\n\
</li>\n\
<li>drawSimpleMesh()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_utilities.html#a8ff30df79e0fceb34a597c1d8537412d\">OpenMayaRender.MRenderUtilities</a>\n\
</li>\n\
<li>drawText()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#aa9e471330dc90fdcbd700628a580bfd7\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>drawUV()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a20151fb2bda26168b27b70759116bdff\">OpenMayaUI.MPxSurfaceShapeUI</a>\n\
</li>\n\
<li>duplicate()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dag_node.html#a7c1ad96bede4dccc84533168081d7481\">OpenMaya.MFnDagNode</a>\n\
</li>\n\
<li>duplicateFaces()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#afbe5a62e327cea28299a6f43fb301e91\">OpenMaya.MFnMesh</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";