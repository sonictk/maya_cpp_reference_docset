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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_func_b.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_b\"></a>- b -</h3><ul>\n\
<li>backEndString()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#afd786038730d9c301a6b3a489d22d816\">MHardwareRenderer</a>\n\
</li>\n\
<li>backgroundColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a116789c74e5aa42f0ca458e224e24188\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a116789c74e5aa42f0ca458e224e24188\">MPx3dModelView</a>\n\
</li>\n\
<li>backgroundColorBottom()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a4e9f626e9612a12433453aaf385eb700\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a4e9f626e9612a12433453aaf385eb700\">MPx3dModelView</a>\n\
</li>\n\
<li>backgroundColorTop()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a16b20be158453fa4c7798412a332d7d4\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a16b20be158453fa4c7798412a332d7d4\">MPx3dModelView</a>\n\
</li>\n\
<li>bake()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_bake_engine.html#abefde7d67b3d4c34a7222d99a85f9b01\">MPxBakeEngine</a>\n\
</li>\n\
<li>bank()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#afb48b7f7eb3dcfcf515a62d7ee3bd1ea\">MFnMotionPath</a>\n\
</li>\n\
<li>banking()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a9de66d2f24efff0762b47c0bf6896eed\">MPxMotionPathNode</a>\n\
</li>\n\
<li>bankScale()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#a000a7dc2cba7d449f6abb6f8a3c1ca71\">MFnMotionPath</a>\n\
</li>\n\
<li>bankThreshold()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#a145296a7a7f9b0a3485cb7f877176cbe\">MFnMotionPath</a>\n\
</li>\n\
<li>barnDoorAngle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_spot_light.html#a10b16c230856fb154c868afaa49199f2\">MFnSpotLight</a>\n\
</li>\n\
<li>barnDoors()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_spot_light.html#a6aea1350a8df913c6c767249ea27ffd9\">MFnSpotLight</a>\n\
</li>\n\
<li>barycentricCoordinates()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_intersection.html#a314053aa8e59992fc182dd78e0ad4cc1\">MIntersection</a>\n\
</li>\n\
<li>base()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#aff61fafcba00bd1f5bc8276e673d5bec\">MFnSubdNames</a>\n\
</li>\n\
<li>baseFaceId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#aee226641cb6db3dec611e3cae403c053\">MFnSubdNames</a>\n\
</li>\n\
<li>baseFaceIdFromIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#ae77e9b1cbf5f4ad631238dd1f470b1fe\">MFnSubdNames</a>\n\
</li>\n\
<li>baseFaceIdFromLong()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a5f42b496e1256226c27adfb02c9b3817\">MFnSubdNames</a>\n\
</li>\n\
<li>baseFaceIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a92ccf70e33566ade84fe2a7599f43e2d\">MFnSubdNames</a>\n\
</li>\n\
<li>baseFaceIndexFromId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd_names.html#a57f41a8f2b19a2cb081562dcf1a1f085\">MFnSubdNames</a>\n\
</li>\n\
<li>baseLattice()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_lattice_deformer.html#adbc859eef84a02ffdcc26243b6191eb3\">MFnLatticeDeformer</a>\n\
</li>\n\
<li>beforeExportFilename()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a43de9f3b9a1a929ae538ff8008af7ec9\">MFileIO</a>\n\
</li>\n\
<li>beforeExportUserFileTranslator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#ad73a7197b385fa38c01e8105db952142\">MFileIO</a>\n\
</li>\n\
<li>beforeImportFilename()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a78fa4e509bf5fbfcfc043b8d2ce99941\">MFileIO</a>\n\
</li>\n\
<li>beforeImportUserFileTranslator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a87ea3195cde4e45b7df464a4368e4056\">MFileIO</a>\n\
</li>\n\
<li>beforeOpenFilename()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#aef9e16e5aaa53ea12b5e9df1ddbff7ec\">MFileIO</a>\n\
</li>\n\
<li>beforeOpenUserFileTranslator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a30b0d600d239e7c32cf02f38a68b53c7\">MFileIO</a>\n\
</li>\n\
<li>beforeReferenceFilename()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a0f01067a20efef89ef6ab6f9db378445\">MFileIO</a>\n\
</li>\n\
<li>beforeReferenceUserFileTranslator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#aab952898e64f5ff6298ddce4a4a2203b\">MFileIO</a>\n\
</li>\n\
<li>beforeSave()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_assembly.html#a796202d1074dd2b0b03eba2bee670ac6\">MPxAssembly</a>\n\
</li>\n\
<li>beforeSaveFilename()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#afb255ea17e6d6d3493d5ca35de3ec153\">MFileIO</a>\n\
</li>\n\
<li>beforeSaveUserFileTranslator()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a3b7454e7b9afc8f0c3deb9c7ba272e9c\">MFileIO</a>\n\
</li>\n\
<li>begin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html#a5e8bb9407889542a21b2054be1bd39c4\">Associations</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#adc6496b78231d2522ba64e4eeeb3f64c\">Channel</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html#a10ce148dbc3def3aa1cbb6ecc1def183\">Stream</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html#aece8670c7e23503223926e6e68e98361\">Structure</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_pattern_array.html#ab328cd322063f823d94494a5cd360c68\">MAttributePatternArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_spec_array.html#a700642cd1af78a217fd9aea0a5970a2f\">MAttributeSpecArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html#a9b7b58afb531bce7fa6076a1ff056396\">MCallbackIdArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_color_array.html#a1e7c0535c468417abc2a89e72b9df9b9\">MColorArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html#a5b888353e5bb3f6c245634a17a48a580\">MDagPathArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_double_array.html#a5653aeafed63570c19af924af7e6037d\">MDoubleArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_array.html#a5ca897759b2d1fa29903fce6ac1d107a\">MFloatArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a0a704d54aabd437f6e6d8ca5a253cc94\">MFloatPointArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html#a5546918ebe8e0373143af27925f84450\">MFloatVectorArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_int64_array.html#a19ee2a90b08c64ed21ec392c1bf468a6\">MInt64Array</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a1ca019c675b093606d9527723235b098\">MIntArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix_array.html#ae41f036a5e8d315c89b973a5f2119544\">MMatrixArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html#afccd9a29bcbfcb8e49d4d2ab9d21c8e0\">MObjectArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a3e3485323e3b0314d8e626af8f094656\">MPlugArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_array.html#abdf49c40b5d0316fecaae7d5a5fa3110\">MPointArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a1ebac8c16ac95b2b81d78055841992f3\">MStringArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_time_array.html#a68ac9bc324b764fd442c285c0514d6f7\">MTimeArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a9fc9185a90ae87b28e10cead48c01ad4\">MTrimBoundaryArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uint64_array.html#acea3a8c5cdce5bb84dd0dce0b89e1b3f\">MUint64Array</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uint_array.html#ac8647ebabdd841a142c94d719dea4c5f\">MUintArray</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector_array.html#acbf704b0f77b24981ba34ffc60a75150\">MVectorArray</a>\n\
</li>\n\
<li>beginBufferNotify()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a41a53515ebec779e8fa2ca484933fd3b\">MPxGlBuffer</a>\n\
</li>\n\
<li>beginComputation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_computation.html#a21a0632b8283a671cd8f90fd82a99843\">MComputation</a>\n\
</li>\n\
<li>beginDrawable()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#a9008ebfa63c02670625076230d77c3f9\">MUIDrawManager</a>\n\
</li>\n\
<li>beginDrawInXray()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#af96a94322df2d2bf866e866c8612b88d\">MUIDrawManager</a>\n\
</li>\n\
<li>beginGet()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a5dceeb7d02e06b4394127014b01ccb2a\">MIffFile</a>\n\
</li>\n\
<li>beginGL()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a0e318e5634c7aaf31c4eb7232d2013d4\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a0e318e5634c7aaf31c4eb7232d2013d4\">MPx3dModelView</a>\n\
</li>\n\
<li>beginMarquee()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_context.html#abdfe2dec6cd03a6364ad70410b0bb3e3\">MPxContext</a>\n\
</li>\n\
<li>beginProjMatrixOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#aea27eb41cecf0987f79883cd52e5338a\">M3dView</a>\n\
</li>\n\
<li>beginReadChunk()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a80efd8f928388e558df7a8c77fb5507d\">MPxCacheFormat</a>\n\
</li>\n\
<li>beginReadGroup()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_iff_file.html#a8272c502e87617dd3c6024b63a815b87\">MIffFile</a>\n\
</li>\n\
<li>beginSceneUpdate()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer.html#aba138a731ce949448528c80c8e7c296e\">MPxRenderer</a>\n\
</li>\n\
<li>beginSection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a95836dee64e2e46e7192a35e0dae2cfc\">Print</a>\n\
</li>\n\
<li>beginSelect()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#aa6921536008ba99da053a07d29bc16a0\">M3dView</a>\n\
</li>\n\
<li>beginThreadLoop()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a234b41568c6e4c76c7f3fe1ce4337ecd\">MPxThreadedDeviceNode</a>\n\
</li>\n\
<li>beginTimer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">MTimer</a>\n\
</li>\n\
<li>beginWriteChunk()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a48f8e0e44288446bdb1d6ec3dc83f9f1\">MPxCacheFormat</a>\n\
</li>\n\
<li>beginXorDrawing()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a27065f82f5e5a4c7cc4b22ba16876ba7\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a77c5bb659cf039b77734e8ef8f4afc8a\">MPx3dModelView</a>\n\
</li>\n\
<li>betterIllum()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#aa2dd019c3a453bdfe45d783bd70b95ff\">MFnParticleSystem</a>\n\
</li>\n\
<li>binaryBlindDataComponentId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#af2a541f1ff4a7416acc6fe477594524d\">MFnMesh</a>\n\
</li>\n\
<li>bind()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a705d4d83d28a26d08a792df0a25700d2\">MShaderInstance</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a4b373289ba4ef6bf66387e2b540cdc05\">MPxHwShaderNode</a>\n\
</li>\n\
<li>bindFbo()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a8dd08f9597535fcde18dceb112371b66\">MPxGlBuffer</a>\n\
</li>\n\
<li>binormal()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a221789fde015ae3d8b1c6ac68b90f497\">MGeometryLegacy</a>\n\
</li>\n\
<li>blendExists()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_character.html#a786fe0727239263236d385691cbbf26a\">MFnCharacter</a>\n\
</li>\n\
<li>blendStateOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a96ff176e8a42eff41b1bc450696c1f41\">MQuadRender</a>\n\
</li>\n\
<li>blitTargetToGL()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a737dde8474ab2cbc3ea2596026e4ef4b\">MRenderUtilities</a>\n\
</li>\n\
<li>blitTargetToImage()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_utilities.html#a7659377d100bff1d4b48427c270f1ebc\">MRenderUtilities</a>\n\
</li>\n\
<li>booleanOp()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a64611268a18041e82d6f25ffa3c063b6\">MFnMesh</a>\n\
</li>\n\
<li>booleanOps()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a28e288336ac402e5ceda4e8c0e35938b\">MFnMesh</a>\n\
</li>\n\
<li>bound()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html#a7fb986c1c1d48d5987d11fdbbc3b0d6e\">MEulerRotation</a>\n\
</li>\n\
<li>boundaryRule()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mesh_smooth_options.html#a9d985517880615ce829ae137cd69329a\">MMeshSmoothOptions</a>\n\
</li>\n\
<li>boundaryType()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html#acd8e25b315c3ae62528b06fc1f5af105\">MFnNurbsSurface</a>\n\
</li>\n\
<li>boundingBox()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a9efd77281910086e293d68b2ea568663\">MFnDagNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html#ae897c759784349c81707df07c34e0846\">MPxDrawOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aa978a85979d7c247cebbc6deb6bcf69c\">MRenderItem</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a762dab569a9d88aa731f3c7229803e1e\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a762dab569a9d88aa731f3c7229803e1e\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a762dab569a9d88aa731f3c7229803e1e\">MPxTransform</a>\n\
</li>\n\
<li>boundingBoxExtraScale()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a11f52a7284bd2c98697c744b009790fa\">MPxShaderOverride</a>\n\
</li>\n\
<li>boundIt()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html#a453e63f461a00cec993791fe45fa8a8c\">MEulerRotation</a>\n\
</li>\n\
<li>box()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html#ae17f015b0bb7570c50129975a4587bd2\">MUIDrawManager</a>\n\
</li>\n\
<li>buffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_open_c_l_buffer.html#a2057208c487d001d1edfbd489cc0b01f\">MOpenCLBuffer</a>\n\
</li>\n\
<li>bufferReadyEvent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_open_c_l_buffer.html#a8d56f779398dcd9d2ff4a9d49a2c3bf5\">MOpenCLBuffer</a>\n\
</li>\n\
<li>builder()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html#a48b34beab40fa4ae60cfe40e556f591a\">MArrayDataHandle</a>\n\
</li>\n\
<li>bumpAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_surface_shading_node_override.html#a5adfa1c46300154b89d12414e723d676\">MPxSurfaceShadingNodeOverride</a>\n\
</li>\n\
<li>buttonState()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_device_state.html#a37abd0fdd3907c590de54dfd07d7c7e8\">MDeviceState</a>\n\
</li>\n\
<li>bytesPerPixel()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html#ac5a2b82710739bfaa0763e8d03116783\">MTexture</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";