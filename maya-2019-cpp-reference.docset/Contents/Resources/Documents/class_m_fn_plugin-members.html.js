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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_fn_plugin-members.html\', tocPrefix);\n\
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
<div class=\"title\">MFnPlugin Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a643557a7145a48bbfde41804195c0a4f\">addMenuItem</a>(const MString &amp;menuItemName, const MString &amp;parentName, const MString &amp;commandName, const MString &amp;commandParams, bool needOptionBox=false, const MString *optBoxFunction=NULL, MStatus *retStatus=NULL, const MString *extraMenuItemParams=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aa7821bfa555c02743d4fdd1d59451e03\">apiVersion</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a93c12a623e20e551464c513f4fef94a4\">deregisterAnimCurveInterpolator</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a35eed70ac4287b860f273f4ec852f577\">deregisterAttributePatternFactory</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#adc6605f36dd1adcc51a8cb31812ca3a7\">deregisterCacheFormat</a>(const MString &amp;cacheFormatName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a0c69705db22962ab108d82c8bee981e2\">deregisterCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a07448597cd3c08a252f77ce75b3d4a20\">deregisterConstraintCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a779875727a9bc55613448ef9066f84d3\">deregisterContextCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acea6edc83fd8b8d5812014089788cf86\">deregisterContextCommand</a>(const MString &amp;commandName, const MString &amp;toolCmdName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#afd43470ba68c93fddda2f9a56a9e1342\">deregisterControlCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ac8008b752e2cca31eda3a37b21e89f7c\">deregisterData</a>(const MTypeId &amp;typeId)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a8e965f06d7d272522f38e7e4e55f3a38\">deregisterDevice</a>(const MString &amp;deviceName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#adc8b144d663c2f39c480c1624ca87d49\">deregisterDisplayFilter</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a2984d7a0b37437db99be7152fb1a2c6f\">deregisterDragAndDropBehavior</a>(const MString &amp;behaviorName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ae48d7c489328f486325d76154ce5b64f\">deregisterFileTranslator</a>(const MString &amp;translatorName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a542f32c9301e217d881613205711e35d\">deregisterIkSolver</a>(const MString &amp;ikSolverName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aa1ab04a6ac2926207b1378d1d9328aad\">deregisterImageFile</a>(const MString &amp;imageFormatName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ad1b7925413557277f8aa8c6c8f801654\">deregisterModelEditorCommand</a>(const MString &amp;commandName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ad79b620e76ce78e1f6b218cfe4d09b46\">deregisterNode</a>(const MTypeId &amp;typeId)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a12d8d4c30c5785569c1f83717af139af\">deregisterRenderer</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a70e0a7f814ec82ac5f3db488faa774ff\">deregisterRenderPassImpl</a>(const MString &amp;passImplId)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acdd6fe12e7549bf47e3ec0b85d8893d1\">deregisterURIFileResolver</a>(const MString &amp;fileResolverName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1f13118b14a93b63516f7d2c126e8878\">findPlugin</a>(const MString &amp;pluginName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">hasObj</a>(MFn::Type) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a28acbd3253b9c86a1e64b3457de9f4ea\">hasObj</a>(const MObject &amp;) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aa239f492444ffc7011a32f1167dc6b6f\">isNodeRegistered</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1c4a285d41daeacc2f1614839e570b99\">kDefaultDataLocation</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ab67c5c13acf0f255196cc11495aeee0c\">loadPath</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acb97a7de35fdfefb564eeafd303008a9\">matrixTypeIdFromXformId</a>(const MTypeId &amp;xformTypeId, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a564085a2484453e0cee6e29167e715c5\">MFnPlugin</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ad9f89bb98199e899602b2dec457a96e4\">MFnPlugin</a>(MObject &amp;object, const char *vendor=&quot;Unknown&quot;, const char *version=&quot;Unknown&quot;, const char *requiredApiVersion=&quot;Any&quot;, MStatus *ReturnStatus=0L)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a3f74d32cfb3d4d52af80f8c1d066fdf5\">registerAnimCurveInterpolator</a>(const MString &amp;typeName, int typeId, MCreatorFunction creatorFunction, int flags=0)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aab1402617ee37990ca727be55ffb7570\">registerAttributePatternFactory</a>(const MString &amp;typeName, MCreatorFunction fnPtr)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#add336a246723fc4c74889d82d490ae02\">registerBakeEngine</a>(const MString &amp;typeName, MBakeEngineCreatorFnPtr fnPtr)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7d72b2cceaa75d61bc9cd39094e165c6\">registerCacheFormat</a>(const MString &amp;cacheFormatName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7b78c43a8925aff119cbd24aee3725b2\">registerCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction, MCreateSyntaxFunction createSyntaxFunction=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a4fd1999ac645a9480d992d9ac2fa7b4d\">registerConstraintCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#abdb508384ccb7cc8a94c5edd43775120\">registerContextCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acf39a2ca0a5bdb40c65e5bc5b74dedbd\">registerContextCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction, const MString &amp;toolCmdName, MCreatorFunction toolCmdCreator, MCreateSyntaxFunction toolCmdSyntax=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a6ea84f75cdee799e552f2a54d406e313\">registerControlCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#add5fc5261bded2ade6ad7a333a85ce9c\">registerData</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MPxData::Type type=MPxData::kData)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#af066155d7a4c447d7a3975e9171046cc\">registerDevice</a>(const MString &amp;deviceName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acb7cf054c95bb6517d378a26a8d48956\">registerDisplayFilter</a>(const MString &amp;name, const MString &amp;label, const MString &amp;classification)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a226f3c8f1e9a3d35846d3a05046a228f\">registerDragAndDropBehavior</a>(const MString &amp;behaviorName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a2b1db9630e54c0a727774f12d3d67bb0\">registerFileTranslator</a>(const MString &amp;translatorName, const char *pixmapName, MCreatorFunction creatorFunction, const char *optionsScriptName=NULL, const char *defaultOptionsString=NULL, bool requiresFullMel=false, MString dataStorageLocation=MFnPlugin::kDefaultDataLocation)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#acbc8675822a73ffb29800bffd28e182f\">registerIkSolver</a>(const MString &amp;ikSolverName, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#afb10df1001666a05e8333c61d876ea47\">registerImageFile</a>(const MString &amp;imageFormatName, MCreatorFunction creatorFunction, const MStringArray &amp;imageFileExtensions)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a5f586337760f98939702403c29950aff\">registeringCallableScript</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a2c75e8da3acd9eab0d9c23c39fbffc3d\">registerMaterialInfo</a>(const MString &amp;type, MMaterialInfoFactoryFnPtr fnPtr)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a86848780a2f856ae00e00d5038fab202\">registerModelEditorCommand</a>(const MString &amp;commandName, MCreatorFunction creatorFunction, MCreatorFunction paneCreatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a2d2a3682ce86ffbed188eff09d93998d\">registerNode</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MPxNode::Type type=MPxNode::kDependNode, const MString *classification=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aabf1010fb21c23a05871c1aad1485ee3\">registerRenderer</a>(const MString &amp;name, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a59f9f9ede6dd57a7722a9a0b08f39b04\">registerRenderPassImpl</a>(const MString &amp;passImplId, MRenderPassDef *passDef, MCreatorFunction creatorFunction, bool overload=false)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a37226bcd95079c1bd2b8acba048438ae\">registerShape</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MCreatorFunction uiCreatorFunction, const MString *classification=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#af0dee3a41e2538926385b8268974d404\">registerTransform</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MCreateXformMatrixFunction xformCreatorFunction, const MTypeId &amp;xformId, const MString *classification=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aa870177c679faa757abb8ae740ae7007\">registerTransform</a>(const MString &amp;typeName, const MTypeId &amp;typeId, MCreatorFunction creatorFunction, MInitializeFunction initFunction, MCreatorFunction xformCreatorFunction, const MTypeId &amp;xformId, const MString *classification=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#aabac928e6f3f1c3dc6f9e0e9f010a9dd\">registerUI</a>(PyObject *creationProc, PyObject *deletionProc, PyObject *creationBatchProc=NULL, PyObject *deletionBatchProc=NULL)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7c72455a763ee8c34481f3fe786659ae\">registerUI</a>(const MString &amp;creationProc, const MString &amp;deletionProc, const MString &amp;creationBatchProc=&quot;&quot;, const MString &amp;deletionBatchProc=&quot;&quot;)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a92e203dc380e1d56d08d2866dcbd697e\">registerUIStrings</a>(MInitializeFunction registerMStringResources, const MString &amp;pluginStringsProc)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1982d7b446cbe329aa4c0a20c35c194f\">registerURIFileResolver</a>(const MString &amp;fileResolverName, const MString &amp;uriScheme, MCreatorFunction creatorFunction)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a85cfb623e852b8ff3bc062a10d61407d\">removeMenuItem</a>(MStringArray &amp;menuItemNames)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a6c3ddfe13e2852d4fbd9f51f08832716\">setName</a>(const MString &amp;newName, bool allowRename=true)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a>(MObject &amp;object)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a4a6adbb56d6259860ec665ab5d86bdb5\">setObject</a>(const MObject &amp;object)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a239948837628131c722f10f190abc253\">setRegisteringCallableScript</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#afa5a2f5859bf5ed4000eb0af4c5c52ed\">setVersion</a>(const MString &amp;newVersion)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#adc3250674414e8a0b2f4584959c6ec4c\">type</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a5eb265538465a26fc6de363ea8ffaf3e\">unregisterBakeEngine</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7cdf6a6b5eae02f9b8415bc7b9a47033\">unregisterMaterialInfo</a>(const MString &amp;typeName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7ae57302df12b773d1d8aebfdc2aef71\">vendor</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#ac0effea3d6acf64d095bd40ad28450fc\">version</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5ba621af875a0d489e1031eddac02b82\">~MFnBase</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a9f2f2b6d41bd7f2ab79714c00a781c98\">~MFnPlugin</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";