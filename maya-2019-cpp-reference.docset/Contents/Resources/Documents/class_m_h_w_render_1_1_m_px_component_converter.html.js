var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxComponentConverter Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_px_component_converter.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>MPxComponentConverter Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MPxComponentConverter Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span><div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a> &#124; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___m_px.html\">Proxy classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2/C-API-Changes-in-Maya-2016.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016 &gt; C++ API Changes in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2/New-Python-API-2-0-classes-in-2.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016 &gt; New Python API 2.0 classes in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Advanced-Topics/Porting-Selection-from-Viewport.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Porting Selection from Viewport 1 to 2</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_px_component_converter.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_px_component_converter.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MPxComponentConverter.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Base class for user defined component converter. </p>\n\
<p>Implementations of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html\" title=\"Base class for user defined component converter. \">MPxComponentConverter</a> must be registered with Maya through <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html\" title=\"Access the registry associating node types with custom implementations. \">MDrawRegistry</a>.</p>\n\
<p>MPxComponentConverters are registered with a unique render item name. A registered <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html\" title=\"Base class for user defined component converter. \">MPxComponentConverter</a> will be used to perform custom viewport 2.0 selection.</p>\n\
<p>They are used to convert selection intersection data to a list of object components (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_component.html\" title=\"Base class for component function sets. \">MFnComponent</a>), by matching the index buffer positions (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_intersection.html#ae85767d1d26fc7491279d1f2c277b499\" title=\"Get the index of the hit vertex, edge or triangle. \">MIntersection::index()</a>) to valid component ids.</p>\n\
<p>The same converter can be registered against different render item name, meaning that different render items can share the same component converter. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#_a20\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#_a1\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ac780557af85a26add5d0da261e6de41e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac780557af85a26add5d0da261e6de41e\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#ac780557af85a26add5d0da261e6de41e\">MPxComponentConverter</a> ()</td></tr>\n\
<tr class=\"memdesc:ac780557af85a26add5d0da261e6de41e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Construct a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html\" title=\"Base class for user defined component converter. \">MPxComponentConverter</a>. <br></td></tr>\n\
<tr class=\"separator:ac780557af85a26add5d0da261e6de41e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4b530ec20dde9209ffeecceb342499d1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4b530ec20dde9209ffeecceb342499d1\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#a4b530ec20dde9209ffeecceb342499d1\">~MPxComponentConverter</a> ()</td></tr>\n\
<tr class=\"memdesc:a4b530ec20dde9209ffeecceb342499d1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a4b530ec20dde9209ffeecceb342499d1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a43bd59f98902213604a9dfb5471c40d4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#a43bd59f98902213604a9dfb5471c40d4\">initialize</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> &amp;renderItem)=0</td></tr>\n\
<tr class=\"memdesc:a43bd59f98902213604a9dfb5471c40d4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Maya calls this function to allow the converter to initialize itself for the selection on the given render item.  <a href=\"class_m_h_w_render_1_1_m_px_component_converter.html#a43bd59f98902213604a9dfb5471c40d4\">More...</a><br></td></tr>\n\
<tr class=\"separator:a43bd59f98902213604a9dfb5471c40d4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aeb25b60515cb3943231004fe1e363df3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#aeb25b60515cb3943231004fe1e363df3\">addIntersection</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_intersection.html\">MIntersection</a> &amp;intersection)=0</td></tr>\n\
<tr class=\"memdesc:aeb25b60515cb3943231004fe1e363df3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Maya calls this function for every selection hit on the render item.  <a href=\"class_m_h_w_render_1_1_m_px_component_converter.html#aeb25b60515cb3943231004fe1e363df3\">More...</a><br></td></tr>\n\
<tr class=\"separator:aeb25b60515cb3943231004fe1e363df3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad506603f129f6876b4f8c03ffe0b0b36\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#ad506603f129f6876b4f8c03ffe0b0b36\">component</a> ()=0</td></tr>\n\
<tr class=\"memdesc:ad506603f129f6876b4f8c03ffe0b0b36\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Once all of the geometry hits have been passed to the converter through calls to <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#aeb25b60515cb3943231004fe1e363df3\" title=\"Maya calls this function for every selection hit on the render item. \">addIntersection()</a>, Maya will call this method to retrieve the components corresponding to those hits.  <a href=\"class_m_h_w_render_1_1_m_px_component_converter.html#ad506603f129f6876b4f8c03ffe0b0b36\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad506603f129f6876b4f8c03ffe0b0b36\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaa36eb1ffbfba344bcbcf291834e0c7f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_selection_mask.html\">MSelectionMask</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#aaa36eb1ffbfba344bcbcf291834e0c7f\">selectionMask</a> () const  =0</td></tr>\n\
<tr class=\"memdesc:aaa36eb1ffbfba344bcbcf291834e0c7f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Maya calls this function to allow the converter to specify the type of components it can handle.  <a href=\"class_m_h_w_render_1_1_m_px_component_converter.html#aaa36eb1ffbfba344bcbcf291834e0c7f\">More...</a><br></td></tr>\n\
<tr class=\"separator:aaa36eb1ffbfba344bcbcf291834e0c7f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_px_component_converter.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a43bd59f98902213604a9dfb5471c40d4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void initialize </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>renderItem</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Maya calls this function to allow the converter to initialize itself for the selection on the given render item. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">renderItem</td><td>The render item. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a21\">apiMeshShape/apiMeshGeometryOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aeb25b60515cb3943231004fe1e363df3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void addIntersection </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_intersection.html\">MIntersection</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>intersection</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Maya calls this function for every selection hit on the render item. </p>\n\
<p>The intersection gives information on the component that was hit.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">intersection</td><td>The selection intersection. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a24\">apiMeshShape/apiMeshGeometryOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad506603f129f6876b4f8c03ffe0b0b36\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> component </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Once all of the geometry hits have been passed to the converter through calls to <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_component_converter.html#aeb25b60515cb3943231004fe1e363df3\" title=\"Maya calls this function for every selection hit on the render item. \">addIntersection()</a>, Maya will call this method to retrieve the components corresponding to those hits. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The component selection. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a28\">apiMeshShape/apiMeshGeometryOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaa36eb1ffbfba344bcbcf291834e0c7f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_selection_mask.html\">MSelectionMask</a> selectionMask </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Maya calls this function to allow the converter to specify the type of components it can handle. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The selection mask. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a30\">apiMeshShape/apiMeshGeometryOverride.cpp</a>.</dd></div>\n\
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
<li>MPxComponentConverter.h</li>\n\
<li>MPxComponentConverter.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";