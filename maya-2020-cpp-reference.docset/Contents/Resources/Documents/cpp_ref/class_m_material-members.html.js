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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_material-members.html\', tocPrefix);\n\
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
<div class=\"title\">MMaterial Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#ae046db7d059bb8c89d9f97e6771814e3\">applyTexture</a>(M3dView &amp;, const MDrawData &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#aeb352454ee40fce918ddbc7c55d89018\">defaultMaterial</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a64c89159792eefb507072d0faa01e02b\">evaluateDiffuse</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#aa62dcdec8075ebb8f4caf73f4d7849e3\">evaluateEmission</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a6d63e4963e97825dc4aff1990173ac62\">evaluateMaterial</a>(M3dView &amp;, const MDagPath &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a05639fb9e77bcce1ae090ede247de86e\">evaluateShininess</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#ade7f105ae6e96cce48da8095018edb73\">evaluateSpecular</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a9b9efaa70622be5ce870074f9c1d669c\">evaluateTexture</a>(MDrawData &amp;data)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a9199a90d4a8b100d3e5852281e0a29b1\">evaluateTextureTransformation</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a861059e539c057e505cb67a16e1bf4ab\">getDiffuse</a>(MColor &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a5de28c9a4a1dd05888e01ff96e699cd4\">getEmission</a>(MColor &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#aeffb187d35cd75bf7e28d7da40ea3b46\">getHasTransparency</a>(bool &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a710ccb70847333db18f56b667492e2ae\">getHwShaderNode</a>(MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#aa424c70c99644b4f60d964347069d42c\">getShininess</a>(float &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a28d4e64c6e8426d1e0740042986e9bb4\">getSpecular</a>(MColor &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a2f964909d78491cfbcbe41682a9d842a\">getTextureTransformation</a>(const MDrawData &amp;data, MMatrix &amp;texXform)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a17c586da2c58db7f52f667d53a334291\">getTextureTransformation</a>(const MDrawData &amp;data, float &amp;rotateUV, float &amp;scaleU, float &amp;scaleV, float &amp;translateU, float &amp;translateV, float &amp;rotateFrame)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#ae0d63acb79a6881e028028b09ffdf5dc\">getTextureTransformation</a>(float &amp;scaleU, float &amp;scaleV, float &amp;translateU, float &amp;translateV, float &amp;rotate)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#ab17b0e81e07f6b1683650ed86b2d634c\">materialIsTextured</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#aecb5fb89307d70e2a2cad503dde0d1a2\">MMaterial</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#af3fd9e639a7a5607e2fd74912e6a4c0a\">MMaterial</a>(const MMaterial &amp;in)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#ad284d6e69cd5ab5545751e7a0beec0c4\">MMaterial</a>(const MObject &amp;, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a9fdbb76ad28531a2652f384b4af60956\">OPENMAYA_ENUM</a>(MtextureChannel, kColor, kTransparency, kAmbientColor, kIncandescence, kBumpMap, kDiffuse, kTransluscence, kRoughness, kHighlightSize, kWhiteness, kCosinePower, kEccentricity, kSpecularRollOff, kSpecularColor, kReflectivity, kReflectedColor)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a5dd0244ce46c3c8593aa06e390f1cd19\">setMaterial</a>(const MDagPath &amp;, bool hasTransparency)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a79b60a03e7c64d188c39642eb115e6a1\">shadingEngine</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a91234b44e7482c0f3b42edffcd75af55\">textureImage</a>(MImage &amp;image, MColor &amp;color, MtextureChannel chan, bool &amp;mapped, MDagPath &amp;dagPath, int xRes=-1, int yRes=-1)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html#a09dbc3143e53a9a77b27dcef9fcd344f\">~MMaterial</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_material.html\">MMaterial</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";