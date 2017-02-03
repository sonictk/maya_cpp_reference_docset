var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMayaRender.MPxSurfaceShadingNodeOverride Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_px_surface_shading_node_override.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>OpenMayaRender.MPxSurfaceShadingNodeOverride Class Reference</h1>\n\
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
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"title\">OpenMayaRender.MPxSurfaceShadingNodeOverride Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9DBD7E49-7A17-4CEB-89AF-A3B509AD91E2.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2014</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Writing_a_Hardware_Shading_Node_Hardware_Shading_node_plugin_examples.htm\">Writing a Hardware Shading Node &gt; Hardware shading node plug-in examples</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9496C634-9C18-49D4-A18C-D16600F73848.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Scene Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-24BAA64A-DAEA-43DB-8FF0-5625F371AE67.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Framework Classes</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-7E935B18-FFBB-4DD3-82EA-A2175CF7795C.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Transition Guide</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9A5432D0-FA89-4E64-8277-22DC81680B20.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Developer Kit Samples</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-585F5656-4069-4D82-B9BB-3D1AB2D0DFE6.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Shading Node Overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_px_surface_shading_node_override.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Base class for user defined surface shading node overrides.\n\
\n\
Method resolution order:\n\
-   MPxSurfaceShadingNodeOverride\n\
-   MPxShadingNodeOverride\n\
-   __builtin__.object</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MPxSurfaceShadingNodeOverride:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.png\" usemap=\"#OpenMayaRender.MPxSurfaceShadingNodeOverride_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MPxSurfaceShadingNodeOverride_map\" name=\"OpenMayaRender.MPxSurfaceShadingNodeOverride_map\">\n\
<area href=\"class_open_maya_render_1_1_m_px_shading_node_override.html\" alt=\"OpenMayaRender.MPxShadingNodeOverride\" shape=\"rect\" coords=\"0,56,317,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6507d140391c4152e4cff14f9884c860\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html#a6507d140391c4152e4cff14f9884c860\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a6507d140391c4152e4cff14f9884c860\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a63874c11a31621d5667ea4bd2ad7689d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html#a63874c11a31621d5667ea4bd2ad7689d\">bumpAttribute</a> ()</td></tr>\n\
<tr class=\"separator:a63874c11a31621d5667ea4bd2ad7689d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5e17bc7241024f782d13909dbd0f1ce6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html#a5e17bc7241024f782d13909dbd0f1ce6\">primaryColorParameter</a> ()</td></tr>\n\
<tr class=\"separator:a5e17bc7241024f782d13909dbd0f1ce6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0b968e537e1233aec730b7bf3ac5bb36\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html#a0b968e537e1233aec730b7bf3ac5bb36\">transparencyParameter</a> ()</td></tr>\n\
<tr class=\"separator:a0b968e537e1233aec730b7bf3ac5bb36\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html\">OpenMayaRender.MPxShadingNodeOverride</a></td></tr>\n\
<tr class=\"memitem:a7a2c7e045d42630cea6536c64d7b3216 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a7a2c7e045d42630cea6536c64d7b3216\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a7a2c7e045d42630cea6536c64d7b3216 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af8c31f4bc2d5783f892e631f26a8f050 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#af8c31f4bc2d5783f892e631f26a8f050\">allowConnections</a> ()</td></tr>\n\
<tr class=\"separator:af8c31f4bc2d5783f892e631f26a8f050 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2b5c789f35707c13da958eac40e28085 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a2b5c789f35707c13da958eac40e28085\">fragmentName</a> ()</td></tr>\n\
<tr class=\"separator:a2b5c789f35707c13da958eac40e28085 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aef88a1b1231f165be36c1e70b913498a inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#aef88a1b1231f165be36c1e70b913498a\">getCustomMappings</a> ()</td></tr>\n\
<tr class=\"separator:aef88a1b1231f165be36c1e70b913498a inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af7445d9c09e48ba06fa0ddc322059633 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#af7445d9c09e48ba06fa0ddc322059633\">outputForConnection</a> ()</td></tr>\n\
<tr class=\"separator:af7445d9c09e48ba06fa0ddc322059633 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acd56771ec55c901f4b53b8e07e3819b5 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#acd56771ec55c901f4b53b8e07e3819b5\">supportedDrawAPIs</a> ()</td></tr>\n\
<tr class=\"separator:acd56771ec55c901f4b53b8e07e3819b5 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a63cf7820523d3891024e3dc3b6679253 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a63cf7820523d3891024e3dc3b6679253\">updateDG</a> ()</td></tr>\n\
<tr class=\"separator:a63cf7820523d3891024e3dc3b6679253 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afda5eda704a7c3d62246c3833102d98b inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#afda5eda704a7c3d62246c3833102d98b\">updateShader</a> ()</td></tr>\n\
<tr class=\"separator:afda5eda704a7c3d62246c3833102d98b inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a34c22dd505b0c1a1dafa6457e2549015 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a34c22dd505b0c1a1dafa6457e2549015\">valueChangeRequiresFragmentRebuild</a> ()</td></tr>\n\
<tr class=\"separator:a34c22dd505b0c1a1dafa6457e2549015 inherit pub_methods_class_open_maya_render_1_1_m_px_shading_node_override\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a6507d140391c4152e4cff14f9884c860\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxSurfaceShadingNodeOverride.__init__ </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">x.__init__(...) initializes x; see help(type(x)) for signature</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a63874c11a31621d5667ea4bd2ad7689d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxSurfaceShadingNodeOverride.bumpAttribute </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">bumpAttribute() -&gt; string\n\
\n\
Returns the name of the attribute that accepts bump connections from bump nodes.\n\
\n\
This method is called after getCustomMappings() to allow the plugin to provide surface-shader specific information.\n\
If required, the override may return the name of the attribute on the node that accepts connections from bump nodes for\n\
doing bump or normal mapping (often this is \"normalCamera\"). A special mapping will be created linking this attribute\n\
to the parameter named \"Nw\" (world space normal) on the fragment. The special mapping will ensure that the extra fragments\n\
needed for bump mapping are set up correctly. If there is no \"Nw\" parameter on the fragment the mapping will not be created\n\
and bump mapping will not work for the associated shader.\n\
\n\
The default implementation returns the empty string (no bump).</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5e17bc7241024f782d13909dbd0f1ce6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxSurfaceShadingNodeOverride.primaryColorParameter </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">primaryColorParameter() -&gt; string\n\
\n\
Returns the name of the fragment parameter to use as the primary color.\n\
\n\
This method is called just after getCustomMappings() to allow the plugin to provide extra surface shader-specific\n\
information. If required, the override may return the name of a 3-float parameter on the fragment that should be marked\n\
as the primary color. If the viewport is set to hide textures (shaded mode) then the specified parameter will be set\n\
using the \"default color\" value from the texture which is connected to the associated attribute on the Maya node.\n\
\n\
The default implementation returns the empty string (no primary color).\n\
\n\
The name must correspond to a parameter on the fragment that is mapped to an attribute on the node either automatically\n\
or through custom attribute parameter mappings.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0b968e537e1233aec730b7bf3ac5bb36\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxSurfaceShadingNodeOverride.transparencyParameter </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">transparencyParameter() -&gt; string\n\
\n\
Returns the name of the fragment parameter that should drive transparency.\n\
\n\
This method is called just after getCustomMappings() to allow the plugin to provide extra surface shader-specific\n\
information. If required, the override may return the name of a single float or 3-float parameter on the fragment that\n\
should be marked as the parameter that drives the transparency of the surface shader. The values of this parameter will\n\
be watched so that scene objects using this shader will be correctly marked and sorted for transparent drawing.\n\
\n\
The default implementation returns the empty string (no transparency).\n\
\n\
The name must correspond to a parameter on the fragment that is mapped to an attribute on the node either automatically\n\
or through custom attribute parameter mappings.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";