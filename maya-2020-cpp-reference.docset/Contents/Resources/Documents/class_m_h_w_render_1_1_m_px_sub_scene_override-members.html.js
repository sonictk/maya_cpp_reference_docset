var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_px_sub_scene_override-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">MPxSubSceneOverride Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a8866e6d0a0fd759fca57656b8d5d15ca\">addInstanceTransform</a>(MRenderItem &amp;renderItem, const MMatrix &amp;transform)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a51c18131d1daa15aa761a09d622d9061\">addUIDrawables</a>(MUIDrawManager &amp;drawManager, const MFrameContext &amp;frameContext)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a1a45ac429d66ab11ed4711b1883c14cb\">areUIDrawablesDirty</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a7540acbbc56b2f60e83bb5e0cc7c75eb\">enableUpdateForSelection</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a6ca9850834717fa50a2a866c95283b7a\">furtherUpdateRequired</a>(const MFrameContext &amp;frameContext)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a3d9b68da81d724902522fe2bf5f809c5\">getInstancedSelectionPath</a>(const MRenderItem &amp;renderItem, const MIntersection &amp;intersection, MDagPath &amp;dagPath) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#af3b88498daedce6cd2e55103c58160a4\">getSelectionPath</a>(const MRenderItem &amp;renderItem, MDagPath &amp;dagPath) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a05c70618c28196399681a784a3686b50\">hasUIDrawables</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#aa87e5fb39d38287f7d10f0de3dd745ae\">MPxSubSceneOverride</a>(const MObject &amp;obj)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a4a0af36ded25ebee92ce267d31004f0c\">pointSnappingActive</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a5c2f72d5f72d7ce5c17603a90ebc10ce\">removeAllInstances</a>(MRenderItem &amp;renderItem)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a3cd1423d9d029bae27c8fc4003b1916b\">removeExtraInstanceData</a>(MRenderItem &amp;renderItem, const MString &amp;parameterName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a8b979ebc8b2e03b24b7b714204a90bf7\">removeInstance</a>(MRenderItem &amp;renderItem, unsigned int instanceId)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a29a5e9ed2eaaf6c451ac6c7fd19f5d91\">requiresUpdate</a>(const MSubSceneContainer &amp;container, const MFrameContext &amp;frameContext) const  =0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#ab5f84f5ba90bb3caabbb69ab3d52cb37\">setAllowTransparentInstances</a>(MRenderItem &amp;renderItem, bool allow)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#ae5d294c95f1581e5e82063c544edede5\">setExtraInstanceData</a>(MRenderItem &amp;renderItem, const MString &amp;parameterName, const MFloatArray &amp;data)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a73382b1882650e5bbdc17788e74fea0a\">setExtraInstanceData</a>(MRenderItem &amp;renderItem, unsigned int instanceId, const MString &amp;parameterName, const MFloatArray &amp;data)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a0bf2b383d48c8a4b554376626e4c7a40\">setGeometryForRenderItem</a>(MRenderItem &amp;renderItem, const MVertexBufferArray &amp;vertexBuffers, const MIndexBuffer &amp;indexBuffer, const MBoundingBox *objectBox)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a3759af370aeb202983050a055123a521\">setInstanceTransformArray</a>(MRenderItem &amp;renderItem, const MMatrixArray &amp;matrixArray)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a9c43d7192e56c01d8dde77fabd843a0e\">supportedDrawAPIs</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#ac74e57c764a59c2fa2a8e6a5b72090d5\">update</a>(MSubSceneContainer &amp;container, const MFrameContext &amp;frameContext)=0</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#aa33d933e42a4fde68622dc759d9477b1\">updateInstanceTransform</a>(MRenderItem &amp;renderItem, unsigned int instanceId, const MMatrix &amp;transform)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a35db327011e850bc4f290c65fdc8d8fd\">updateSelectionGranularity</a>(const MDagPath &amp;path, MSelectionContext &amp;selectionContext)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#acdd18c944250191e2c6ce7105996b403\">~MPxSubSceneOverride</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\">MPxSubSceneOverride</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";