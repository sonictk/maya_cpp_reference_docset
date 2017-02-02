var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MSelectionContext Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_selection_context.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MSelectionContext Class Reference</h1>\n\
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
<div class=\"title\">MSelectionContext Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-051B6652-53C0-40CE-86A0-9541C907D59F.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 Extension 1</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6644CF46-6648-45B8-A3D8-76EDD7712571.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-1BB599DB-D637-4D95-AD35-9F85AA5A35ED.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 &gt; C++ API Changes in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6EE8F184-A92B-485A-91F5-07B00313D87E.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 &gt; New Python API 2.0 classes in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-31E929F2-56E0-4CB8-9984-123AD3A85670.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Porting Selection from Viewport 1 to 2</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_selection_context.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_selection_context.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_selection_context.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MSelectionContext.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Selection context used in <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a35db327011e850bc4f290c65fdc8d8fd\" title=\"Maya calls this function during the pre-filtering phase of the viewport 2.0 selection and is used to ...\">MPxGeometryOverride::updateSelectionGranularity</a>. </p>\n\
<p>This class gives control on the viewport 2.0 selection behavior. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#_a197\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8h-example.html#_a12\">apiMeshShape/apiMeshGeometryOverride.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#_a121\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8h-example.html#_a14\">apiMeshShape/apiMeshSubSceneOverride.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a9bf800a895c6bfc0ef3fce84fb30625d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625d\">SelectionLevel</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625da634ee767a8e90ff4d56e140459cca31f\">kNone</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625dad74f4c7c6562dc3f8339a8bba2d28dd0\">kObject</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625da02fee4c0e0e6f1b7ab7a678d61627461\">kComponent</a>\n\
 }<tr class=\"memdesc:a9bf800a895c6bfc0ef3fce84fb30625d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Specifies granularity level to use for the selection.  <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9bf800a895c6bfc0ef3fce84fb30625d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:afc14bf98a3ea57f890b474abaf5a5b4b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625d\">SelectionLevel</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#afc14bf98a3ea57f890b474abaf5a5b4b\">selectionLevel</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:afc14bf98a3ea57f890b474abaf5a5b4b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the selection level used to pick items.  <a href=\"class_m_h_w_render_1_1_m_selection_context.html#afc14bf98a3ea57f890b474abaf5a5b4b\">More...</a><br></td></tr>\n\
<tr class=\"separator:afc14bf98a3ea57f890b474abaf5a5b4b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab1ead3c2bb71ebaaaa7b94b8a1dcaa3b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#ab1ead3c2bb71ebaaaa7b94b8a1dcaa3b\">setSelectionLevel</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625d\">SelectionLevel</a> level)</td></tr>\n\
<tr class=\"memdesc:ab1ead3c2bb71ebaaaa7b94b8a1dcaa3b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the selection level to use to pick items.  <a href=\"class_m_h_w_render_1_1_m_selection_context.html#ab1ead3c2bb71ebaaaa7b94b8a1dcaa3b\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab1ead3c2bb71ebaaaa7b94b8a1dcaa3b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_selection_context.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a9bf800a895c6bfc0ef3fce84fb30625d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625d\">SelectionLevel</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Specifies granularity level to use for the selection. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a9bf800a895c6bfc0ef3fce84fb30625da634ee767a8e90ff4d56e140459cca31f\"></a>kNone&#160;</td><td class=\"fielddoc\">\n\
<p>No selection available. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a9bf800a895c6bfc0ef3fce84fb30625dad74f4c7c6562dc3f8339a8bba2d28dd0\"></a>kObject&#160;</td><td class=\"fielddoc\">\n\
<p>Object level. </p>\n\
<p>Objects are selected as a whole. Components are not directly accessible. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a9bf800a895c6bfc0ef3fce84fb30625da02fee4c0e0e6f1b7ab7a678d61627461\"></a>kComponent&#160;</td><td class=\"fielddoc\">\n\
<p>Component level. </p>\n\
<p>Components such as vertices, edges and faces are selectable. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"afc14bf98a3ea57f890b474abaf5a5b4b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625d\">MSelectionContext::SelectionLevel</a> selectionLevel </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the selection level used to pick items. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status code.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The selection level.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a></b> The method was successful </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MStatus::kFailure</a></b> The selection data is invalid. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab1ead3c2bb71ebaaaa7b94b8a1dcaa3b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> setSelectionLevel </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html#a9bf800a895c6bfc0ef3fce84fb30625d\">MSelectionContext::SelectionLevel</a>&#160;</td>\n\
          <td class=\"paramname\"><em>level</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the selection level to use to pick items. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">level</td><td>Set the selection level to use.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a></b> The method was successful </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MStatus::kFailure</a></b> The selection data is invalid. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a203\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#a129\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>.</dd></div>\n\
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
<li>MSelectionContext.h</li>\n\
<li>MSelectionContext.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";