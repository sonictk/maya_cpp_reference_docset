var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Class Members - Functions</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_func_l.html\', tocPrefix);\n\
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
            <h1>Class Members - Functions</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_a.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_z.html#index_z\"><span>z</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_~.html#index_~\"><span>~</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_l\"></a>- l -</h3><ul>\n\
<li>labelBackgroundColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#a1c3ee87367549dbb770946dd055ab7d7\">MPxManipulatorNode</a>\n\
</li>\n\
<li>labelColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#adb96318e15648b956ec0c5ec4222ffd5\">MPxManipulatorNode</a>\n\
</li>\n\
<li>labelString()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_u_i_table_control.html#a1960de3dd1b0c0ff43d5d5cfc350a83d\">MPxUITableControl</a>\n\
</li>\n\
<li>lastDragPoint()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_selection_context.html#a016352a3757a36a3aad089a2d230d8ff\">MPxSelectionContext</a>\n\
</li>\n\
<li>latestMayaFileVersion()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a90b257520ccb39614a5bf3ab5cfd7f24\">MFileIO</a>\n\
</li>\n\
<li>lattice()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_lattice_data.html#a6cc4fc5e83874fba3a0b00b3059ec3fc\">MFnLatticeData</a>\n\
</li>\n\
<li>layerChildren()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_render_layer.html#a1c12f8a1fe5f0b5d2d694d4963bc09ef\">MFnRenderLayer</a>\n\
</li>\n\
<li>leadColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a4cb0a06cec38537aa656297a52202b15\">M3dView</a>\n\
</li>\n\
<li>leafAttributeName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_clipboard_item.html#adbc4fce3278697f47ff328b6497833df\">MAnimCurveClipboardItem</a>\n\
</li>\n\
<li>leafLevelCulling()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_traversal.html#ace3ae7bdae3c523b13d28d0d87bd2876\">MDrawTraversal</a>\n\
</li>\n\
<li>legalConnection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ad4a9dabb4ab821f67b0db6d2ee02b399\">MPxNode</a>\n\
</li>\n\
<li>legalDisconnection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a2ce5a410752aed82613f1cad8021d220\">MPxNode</a>\n\
</li>\n\
<li>length()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_clipboard_item_array.html#a580388f31f60c46fac867ca48a48da1e\">MAnimCurveClipboardItemArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">MArgList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_pattern_array.html#a580388f31f60c46fac867ca48a48da1e\">MAttributePatternArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec_array.html#a580388f31f60c46fac867ca48a48da1e\">MAttributeSpecArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html#a580388f31f60c46fac867ca48a48da1e\">MCallbackIdArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_color_array.html#a580388f31f60c46fac867ca48a48da1e\">MColorArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#af321be336f1f2d96ac2273a87cb3c8ab\">MDagPath</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html#a580388f31f60c46fac867ca48a48da1e\">MDagPathArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_double_array.html#a580388f31f60c46fac867ca48a48da1e\">MDoubleArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dyn_swept_line.html#ab8f29044ad5b5562ff080c49a2af6f73\">MDynSweptLine</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_info_table.html#a580388f31f60c46fac867ca48a48da1e\">MExternalContentInfoTable</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a580388f31f60c46fac867ca48a48da1e\">MExternalContentLocationTable</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_array.html#a580388f31f60c46fac867ca48a48da1e\">MFloatArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a580388f31f60c46fac867ca48a48da1e\">MFloatPointArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_vector.html#a7c7f525adfb7ab1af7df4b0b6b34d4eb\">MFloatVector</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html#a580388f31f60c46fac867ca48a48da1e\">MFloatVectorArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_component_list_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnComponentListData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_double_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnDoubleArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_float_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnFloatArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_int_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnIntArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_matrix_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnMatrixArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html#acdf47b43a3196b3eb5f7b78a64003ba9\">MFnNurbsCurve</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_point_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnPointArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_string_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnStringArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_toggle_manip.html#a918c474cbe2912013c869fa2aa91d39a\">MFnToggleManip</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_u_int64_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnUInt64ArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_vector_array_data.html#a99dd6a54b909ede1d11702fe58977e2a\">MFnVectorArrayData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MGeometryList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_attribute_parameter_mapping_list.html#a580388f31f60c46fac867ca48a48da1e\">MAttributeParameterMappingList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_component_data_indexing_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MComponentDataIndexingList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MIndexBufferDescriptorList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MRenderItemList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MRenderOperationList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MVertexBufferDescriptorList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_int64_array.html#a580388f31f60c46fac867ca48a48da1e\">MInt64Array</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a580388f31f60c46fac867ca48a48da1e\">MIntArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_material_array.html#a6e19855a3d81e183174274a8138aa126\">MMaterialArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix_array.html#a6e19855a3d81e183174274a8138aa126\">MMatrixArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a580388f31f60c46fac867ca48a48da1e\">MObjectArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">MPlugArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_array.html#a580388f31f60c46fac867ca48a48da1e\">MPointArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_line_array.html#a57b988236ee6a3a5e572d126d3fbccc1\">MRenderLineArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">MSelectionList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html#a580388f31f60c46fac867ca48a48da1e\">MString</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">MStringArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_time_array.html#a580388f31f60c46fac867ca48a48da1e\">MTimeArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a580388f31f60c46fac867ca48a48da1e\">MTrimBoundaryArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uint64_array.html#a580388f31f60c46fac867ca48a48da1e\">MUint64Array</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uint_array.html#a580388f31f60c46fac867ca48a48da1e\">MUintArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MUniformParameterList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">MVaryingParameterList</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector.html#ad207cb443e371f73f07e874c504f60c1\">MVector</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector_array.html#a580388f31f60c46fac867ca48a48da1e\">MVectorArray</a>\n\
</li>\n\
<li>lengthIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_toggle_manip.html#a0c7d22c2bd54836f6b93bbded835943c\">MFnToggleManip</a>\n\
</li>\n\
<li>lensSqueezeRatio()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a1449c8aa978d4c1578355651bc4b36c8\">MFnCamera</a>\n\
</li>\n\
<li>level()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a4a9a325a38bbd9f2d9f373cfd85634bc\">MFnSubdNames</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_subd_edge.html#a2317f7530e0dbde8b5ea0fa60f4d8240\">MItSubdEdge</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_subd_face.html#a480e2ef9ad98f0599736c13953102900\">MItSubdFace</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_subd_vertex.html#a2317f7530e0dbde8b5ea0fa60f4d8240\">MItSubdVertex</a>\n\
</li>\n\
<li>levelFullySubdivideTo()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a634e66320f1d6f745c1c5b4843710dd4\">MFnSubd</a>\n\
</li>\n\
<li>levelMaxAllowed()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#afa1c9ea2fbdd5d22829daa00a003b49b\">MFnSubd</a>\n\
</li>\n\
<li>levelMaxCurrent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#ab68a1b8cfe730048c707806e783e5ffb\">MFnSubd</a>\n\
</li>\n\
<li>levelOneFaceAsLong()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a8eb1db23221ad1b467bb8db331ea4f12\">MFnSubdNames</a>\n\
</li>\n\
<li>levelOneFaceId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#af9091b0e9c4bb9deb7ba7e4afc6a556c\">MFnSubdNames</a>\n\
</li>\n\
<li>levelOneFaceIdFromIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a43fd5fd94252bf0d5c27e20dcefdf80a\">MFnSubdNames</a>\n\
</li>\n\
<li>levelOneFaceIdFromLong()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a7352d86b9a73508077e509e6dd531e61\">MFnSubdNames</a>\n\
</li>\n\
<li>levelOneFaceIndexFromId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a4f03a647d197765584d623534f3e7023\">MFnSubdNames</a>\n\
</li>\n\
<li>lifespan()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#abfe98ae953ade3b3f1207590c426bd0e\">MFnParticleSystem</a>\n\
</li>\n\
<li>lightAmbient()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_light.html#ae068596e538db56b22cb11f390267a3f\">MFnLight</a>\n\
</li>\n\
<li>lightAttenuation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_util.html#ad4648b18fba6c92b505c523d4475291d\">MRenderUtil</a>\n\
</li>\n\
<li>lightDiffuse()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_light.html#a0e80aaccb4ecdcda480b3efabd3a804e\">MFnLight</a>\n\
</li>\n\
<li>lightDirection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_light.html#a4237736d6630d7cba8e6c27f2b70c38b\">MFnLight</a>\n\
</li>\n\
<li>lightingMode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a3df4adf74425cd7e86f21d4c2227036b\">MPx3dModelView</a>\n\
</li>\n\
<li>lightIntensity()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_light.html#a36ccaa30668f9bef9154f39d61cf27b5\">MFnLight</a>\n\
</li>\n\
<li>lightModeOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a55c7fbe10d0cd72955781058dadb4119\">MSceneRender</a>\n\
</li>\n\
<li>lightPath()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html#ac8cc78537b5a5d66bd3cc96bf8ef506e\">MLightParameterInformation</a>\n\
</li>\n\
<li>lightShape()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_volume_light.html#affa7d785c88a8d812704d924f9e1a378\">MFnVolumeLight</a>\n\
</li>\n\
<li>lightSpecular()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_light.html#ac464c226b2a9cd9e869034ca6b705d88\">MFnLight</a>\n\
</li>\n\
<li>lightType()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_light_parameter_information.html#a37c38ea0bd5da4c4f846f673a418be78\">MLightParameterInformation</a>\n\
</li>\n\
<li>limitValue()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_transform.html#a4d906a2c7d8a41148711665ca85f17b8\">MFnTransform</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a2348c9e45938076062dce9413f911504\">MPxTransform</a>\n\
</li>\n\
<li>line()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#abe48ac82aa2ede6d0efd3c9cfadb068c\">MUIDrawManager</a>\n\
</li>\n\
<li>line2d()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#af33c923bf446e1ba89b3c933edac8d96\">MUIDrawManager</a>\n\
</li>\n\
<li>lineColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#a25726e552251284adae91d30e735951f\">MPxManipulatorNode</a>\n\
</li>\n\
<li>lineCount()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dyn_swept_geometry_data.html#a098947ab41b1c830dc4c23f3e2a28646\">MFnDynSweptGeometryData</a>\n\
</li>\n\
<li>lineList()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#a76ecbc8bf62fb333c6b7cc2f087a4b76\">MUIDrawManager</a>\n\
</li>\n\
<li>lineSize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_manip3_d.html#a11bbb6e911127fdeeda843ffb475a190\">MFnManip3D</a>\n\
</li>\n\
<li>lineStrip()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#a17fb07b10dc608fdc00366f230f4c802\">MUIDrawManager</a>\n\
</li>\n\
<li>linkExtensionAttributeToPlugin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html#a69320214bef2b745af07e5e8056fbcce\">MDGModifier</a>\n\
</li>\n\
<li>list()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_array_attrs_data.html#a2cb0817808ff08f65e93b3506811abcd\">MFnArrayAttrsData</a>\n\
</li>\n\
<li>listAllRenderLayers()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_render_layer.html#a29a7839e1a41e0908962568b95b992f4\">MFnRenderLayer</a>\n\
</li>\n\
<li>listMembers()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_render_layer.html#a2f3bf23816ae99fcfeca6ab3e32c7fb6\">MFnRenderLayer</a>\n\
</li>\n\
<li>liveColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a501a61be7dea7e9205c82fe437e884b2\">M3dView</a>\n\
</li>\n\
<li>load()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#af42e5e206ba3b54cea108f6869b379e7\">MPxImageFile</a>\n\
</li>\n\
<li>loadImageMap()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a2be831fb036a63c9d96f5ab2844acf92\">MPxImagePlane</a>\n\
</li>\n\
<li>loadName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a3436e1cdfe3fed47fd4cbe38f1c5650d\">M3dView</a>\n\
</li>\n\
<li>loadPath()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ab67c5c13acf0f255196cc11495aeee0c\">MFnPlugin</a>\n\
</li>\n\
<li>loadRecording()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_profiler.html#ab21c108939d0f526d3cf42c1b04b7530\">MProfiler</a>\n\
</li>\n\
<li>loadReference()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#af6feee9e2cb2d78b40f5c4bfd5551415\">MFileIO</a>\n\
</li>\n\
<li>loadReferenceByNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#acc7e2ec65b7c58e15b2dc95ff749a002\">MFileIO</a>\n\
</li>\n\
<li>localIntensity()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_wire_deformer.html#a3531d59c7ba9d924e18f1d083cbcb637\">MFnWireDeformer</a>\n\
</li>\n\
<li>localShapeInAttr()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_component_shape.html#a1c8d40246a4373be0d73fe10430105f5\">MPxComponentShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a1c8d40246a4373be0d73fe10430105f5\">MPxSurfaceShape</a>\n\
</li>\n\
<li>localShapeOutAttr()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a7a2e324a06d14f1818abbab7129b557a\">MPxSurfaceShape</a>\n\
</li>\n\
<li>lock()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#aa81aed607133209dade63a226818224d\">MMutexLock</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_spin_lock.html#aa81aed607133209dade63a226818224d\">MSpinLock</a>\n\
</li>\n\
<li>lockFaceVertexNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a4614f4ee7780b8d4af2dfa4229cbcc91\">MFnMesh</a>\n\
</li>\n\
<li>lockResourceHandle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html#adf8ad9c60e845cd4fd84c171c0a63a27\">MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#adf8ad9c60e845cd4fd84c171c0a63a27\">MVertexBuffer</a>\n\
</li>\n\
<li>lockVertexNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a5e1135daf5c65996f2849b81f984d455\">MFnMesh</a>\n\
</li>\n\
<li>log()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#a4f2a64eb6a6f9b1ae3ac2c4d93ded999\">MQuaternion</a>\n\
</li>\n\
<li>logicalIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug.html#aee365de27bc5ea401941e79738cc4afe\">MPlug</a>\n\
</li>\n\
<li>longName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_device_channel.html#a2c52180e43cb97fc7993fcfaddb88535\">MDeviceChannel</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";