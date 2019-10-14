var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_render_item-members.html\', tocPrefix);\n\
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
            <h1>Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">MRenderItem Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aead893d8f5f89206f28b01b76d5336a4\">allowIsolateSelectCopy</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a7d0f067f76206a54f4f716f63bcb6b19\">associateWithIndexBuffer</a>(const MIndexBuffer *buffer) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a5a6a1b1d1c5ea0c20e8c1bd4af494cf9\">availableShaderParameters</a>(MStringArray &amp;parameterNames, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aa978a85979d7c247cebbc6deb6bcf69c\">boundingBox</a>(MSpace::Space space=MSpace::kObject, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a4679f5dfcf97d7470561e4adc1cbe21c\">castsShadows</a>(bool on)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aa49c6e3bb400965c59bcf4e5d0431c18\">castsShadows</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a33e47104a13fcffc3c31acc05a73a9af\">component</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ac74a014f3346d8ddac693b7f034fa228\">Create</a>(const MString &amp;name, RenderItemType type, MGeometry::Primitive primitive)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a8ae43424af1c58be76a858ecec31fbb5\">Create</a>(const MString &amp;name, RenderItemType type, MGeometry::Primitive primitive, int stride)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ac7c7c3804ccd6fbfa40e661eb67637a1\">Create</a>(const MRenderItem &amp;item)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a657ff0ef7b0bbcab5ccb00902b820d8f\">Create</a>(const MString &amp;name, MGeometry::Primitive primitive, MGeometry::DrawMode mode, bool raiseAboveShaded)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#afd8b782f19e9508747c851a990d8f5db\">customData</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49eab87ea4b9433d4e99398728f2cf29b881\">DecorationItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a6e865e2cf5c9d818b1cbb99af2360c47\">depthPriority</a>(unsigned int val)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a6730a9a49517e4316df85ce78920592a\">depthPriority</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a52cc993ee0ac8e3718904a1e4537e9f3\">Destroy</a>(MRenderItem *&amp;item)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a8992ce85b3fbe5f2df227cb43a20866e\">drawMode</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a1e9d2a5708b2231a8e72d22dc3be53fe\">enable</a>(bool on)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aa52a15409b28536993452344135ebe89\">excludedFromPostEffects</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aee2e53b30cbf1699eac04ce5659398d3\">geometry</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aa606047c9ccc32d66b93d07327b65be9\">getShader</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aa91c42cecc9e37f2fd92c047a273ab5a\">getShader</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#af46934e943ed250ed5e0debff7ff3d25\">getShaderBoolParameter</a>(const MString &amp;parameterName, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a70a11ae313e27dea9015dbf7baf58428\">getShaderFloatArrayParameter</a>(const MString &amp;parameterName, unsigned int &amp;size, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a859f4b66ae4574cfa3c683f3bfa26d57\">getShaderFloatParameter</a>(const MString &amp;parameterName, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a5d0c11952deda4b25f9b490620fe2034\">getShaderIntParameter</a>(const MString &amp;parameterName, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49eafe471853a2ec2b165b1a6f1937a8e271\">InternalItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49ea40a16a3d7a342fbcbb918b7992613a86\">InternalMaterialItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49eaf650da250d60a1cf093800fbf3f3ed88\">InternalTexturedMaterialItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49ea49af8df81c9377e966c79e511c0d8a92\">InternalUnsupportedMaterialItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ad451a99ccfc0cb2c1f68baa28b52f126\">isCompatibleWithMayaInstancer</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#acfe4fcf09654f6f6799a6966bd6b3e56\">isConsolidated</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ae2931e09e0fd8eac15c83f0254b4e4ac\">isEnabled</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aca74a11ff6a5082cd01e8a952a7cf198\">isIsolateSelectCopy</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a7d0fc38902e84515879ea33cb99960a5\">isMultiDraw</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a2d1a4a42bc868748d574acbe644677a1\">isShaderFromNode</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#add4c63eeebc656e8a6495b725bb7a545\">LinkLostCallback</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49ea9990000c1137c9606135fe45d6b0ef50\">MaterialSceneItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aca2cba4630391c78dcf1a828986160da\">name</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49ea051cc5c371043b627d1d7bee0d06e030\">NonMaterialSceneItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49ea1fcf574a73eba1a959c51838083573e4\">OverrideNonMaterialItem</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#af3ddb45109547883d06426f0530ddf0c\">primitive</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a56226d141edbe2ad6d06f68807fdd96d\">primitive</a>(int &amp;stride) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a84fc76ef02716b725765f6de1ff3a8c6\">receivesShadows</a>(bool on)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aed24f6aeb2f2f2c6a36850516f41cf2b\">receivesShadows</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a688a4360e982358b90610f58d4eef49e\">RenderItemType</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#aaf40ec14e4ae3d72f8108395e78643c1\">requiredVertexBuffers</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a2ef0afa87b031ef0f0091e79eb81313a\">sActiveLineDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ac0ade2503ccc47f3bd487b9ae7bf53e4\">sActivePointDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#adb484c507442ebce56eac38bd07cac07\">sActiveWireDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ae591b9bc3a27641c854ab0703a90cab1\">sDormantFilledDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a6a97d386c939e58a3904100bab115700\">sDormantPointDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a6915079c9389d5b9354d5b40fb8112ca\">sDormantWireDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ab729ba0078aaf891074c4289e90c3c62\">selectionMask</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a38237a165d430cd9685af1fbff4e20a6\">setAllowIsolateSelectCopy</a>(bool state)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a7e17e93a3bf27fa7077b612a5c462c6a\">setCompatibleWithMayaInstancer</a>(bool state)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a1c029ea3297c266381dce0c7b042b793\">setCustomData</a>(MUserData *userData)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a8e28487092f00765128c2ffdd43d0fe4\">setDrawMode</a>(MGeometry::DrawMode mode)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a634faadbe865d745bc8ed447efe671da\">setExcludedFromPostEffects</a>(bool exclude)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a32cf944375530a37382f8ff49045ddf6\">setMatrix</a>(const MMatrix *mat)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a793ce3d41d7f13aea020b811379a3ef3\">setSelectionMask</a>(const MSelectionMask &amp;mask)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ad283b157fa4f6c40bceb9d398c53a72a\">setShader</a>(const MShaderInstance *shader, const MString *customStreamName=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a1f821e0772346c0567396a67bb5fee7b\">setShaderFromNode</a>(const MObject &amp;shaderNode, const MDagPath &amp;shapePath, LinkLostCallback linkLostCb=NULL, MUserData *linkLostUserData=NULL, bool nonTextured=false)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a1cb8ade4b1a11be0c16c7ffc2a2e292c\">setSupportsAdvancedTransparency</a>(bool support)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a8d78cbaf214be903738aebff34a61ef1\">setTreatAsTransparent</a>(bool val)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a3fc9143c6cf463c2f4523a7bfb68c6e6\">setWantConsolidation</a>(bool state)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#acfca7df96b38a12712ddbf974af6ce77\">setWantSubSceneConsolidation</a>(bool state)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#af2cf56c078dcc016695e00ffad239238\">shadingComponent</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a477c6642cc6aaeb9178cb663ae281562\">sHiliteWireDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a9452c2cfed46b5c1977568eb5b225930\">sourceDagPath</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a9f2f2adf25777c74ddd4210bdd521b17\">sourceIndexMapping</a>(MGeometryIndexMapping &amp;geometryIndexMapping) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#abf0686a71845159b7a473312fe05044a\">sSelectionDepthPriority</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#ae919985341ff7706a78139a098146ed3\">supportsAdvancedTransparency</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a34f68c9a676a4fce3e56c3ec86b2c319\">type</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a3f39a6514bd05841c27912d0148c19ea\">wantConsolidation</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a627aca1fe5775cca0f2f816c84794e0a\">wantSubSceneConsolidation</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";