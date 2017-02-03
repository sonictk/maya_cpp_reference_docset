var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMayaUI.MDrawInfo Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_u_i_1_1_m_draw_info.html\', tocPrefix);\n\
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
            <h1>OpenMayaUI.MDrawInfo Class Reference</h1>\n\
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
<div class=\"title\">OpenMayaUI.MDrawInfo Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-DBDCB848-B0A5-4256-912C-6FCE25D12984.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2015</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Shapes_Drawing_and_refresh.htm\">Shapes &gt; Drawing and refresh</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-B8944200-F3A7-479F-BD54-990DF95EAD34.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Handling custom renderables for object overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_u_i_1_1_m_draw_info.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">This class is used by the getDrawRequests method of MPxSurfaceShapeUI to specify the current object drawing state for a user defined shape.</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaUI.MDrawInfo:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_u_i_1_1_m_draw_info.png\" usemap=\"#OpenMayaUI.MDrawInfo_map\" alt=\"\">\n\
  <map id=\"OpenMayaUI.MDrawInfo_map\" name=\"OpenMayaUI.MDrawInfo_map\">\n\
<area href=\"class_open_maya_u_i_1_1_m_select_info.html\" alt=\"OpenMayaUI.MSelectInfo\" shape=\"rect\" coords=\"0,112,157,136\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a039a91f45f1598c37e5fd424f961892d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a039a91f45f1598c37e5fd424f961892d\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a039a91f45f1598c37e5fd424f961892d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0892a9753a0d3dc16fda0699d44906a0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a0892a9753a0d3dc16fda0699d44906a0\">canDrawComponent</a> ()</td></tr>\n\
<tr class=\"separator:a0892a9753a0d3dc16fda0699d44906a0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aadeb597488a1a5b1596ad31c491a6b67\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#aadeb597488a1a5b1596ad31c491a6b67\">completelyInside</a> ()</td></tr>\n\
<tr class=\"separator:aadeb597488a1a5b1596ad31c491a6b67\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5255cc2f2e17278c222062d61fecef27\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a5255cc2f2e17278c222062d61fecef27\">displayStatus</a> ()</td></tr>\n\
<tr class=\"separator:a5255cc2f2e17278c222062d61fecef27\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a11f4eee17e43518127d923a15563f8f0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a11f4eee17e43518127d923a15563f8f0\">displayStyle</a> ()</td></tr>\n\
<tr class=\"separator:a11f4eee17e43518127d923a15563f8f0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aacc2630fb8d6b4124fe6332318eba5ce\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#aacc2630fb8d6b4124fe6332318eba5ce\">getPrototype</a> ()</td></tr>\n\
<tr class=\"separator:aacc2630fb8d6b4124fe6332318eba5ce\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae65ede50bb034512edb6e1ce63a2f8bb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#ae65ede50bb034512edb6e1ce63a2f8bb\">inSelect</a> ()</td></tr>\n\
<tr class=\"separator:ae65ede50bb034512edb6e1ce63a2f8bb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6b85cdd3eb7d3b633c1b3da36f09a876\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a6b85cdd3eb7d3b633c1b3da36f09a876\">inUserInteraction</a> ()</td></tr>\n\
<tr class=\"separator:a6b85cdd3eb7d3b633c1b3da36f09a876\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aecf59609f19284bb6e034bef35f69f7a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#aecf59609f19284bb6e034bef35f69f7a\">inclusiveMatrix</a> ()</td></tr>\n\
<tr class=\"separator:aecf59609f19284bb6e034bef35f69f7a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad912b12415dd1a73dcc1018744ce755f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#ad912b12415dd1a73dcc1018744ce755f\">multiPath</a> ()</td></tr>\n\
<tr class=\"separator:ad912b12415dd1a73dcc1018744ce755f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a71f766cff99c5edc39e14bb3207f8cb1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a71f766cff99c5edc39e14bb3207f8cb1\">objectDisplayStatus</a> ()</td></tr>\n\
<tr class=\"separator:a71f766cff99c5edc39e14bb3207f8cb1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa749b2884c4f3c66680f5ba1e0673418\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#aa749b2884c4f3c66680f5ba1e0673418\">pluginObjectDisplayStatus</a> ()</td></tr>\n\
<tr class=\"separator:aa749b2884c4f3c66680f5ba1e0673418\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a116a29c0d0ea3a73115c4c79dc4f27c8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a116a29c0d0ea3a73115c4c79dc4f27c8\">projectionMatrix</a> ()</td></tr>\n\
<tr class=\"separator:a116a29c0d0ea3a73115c4c79dc4f27c8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab639e9cb175d9d711278e9341d71726c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#ab639e9cb175d9d711278e9341d71726c\">setMultiPath</a> ()</td></tr>\n\
<tr class=\"separator:ab639e9cb175d9d711278e9341d71726c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acd64e685dde3e44e5b7dbbe780a9a08b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#acd64e685dde3e44e5b7dbbe780a9a08b\">userChangingViewContext</a> ()</td></tr>\n\
<tr class=\"separator:acd64e685dde3e44e5b7dbbe780a9a08b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a62661bb8545f3d0d3184f3e18b5e46c2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#a62661bb8545f3d0d3184f3e18b5e46c2\">view</a> ()</td></tr>\n\
<tr class=\"separator:a62661bb8545f3d0d3184f3e18b5e46c2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a039a91f45f1598c37e5fd424f961892d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.__init__ </td>\n\
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
<a class=\"anchor\" id=\"a0892a9753a0d3dc16fda0699d44906a0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.canDrawComponent </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">canDrawComponent(isDisplayOn, compMask) -&gt; bool\n\
\n\
Convenience method to test if components specified by the given mask can be drawn.\n\
\n\
* isDisplayOn (bool) - component display is on\n\
* mask (MSelectionMask) - component mask to test</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aadeb597488a1a5b1596ad31c491a6b67\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.completelyInside </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">completelyInside() -&gt; bool\n\
\n\
Returns True if the object being drawn is inside the viewing frustum.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5255cc2f2e17278c222062d61fecef27\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.displayStatus </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">displayStatus() -&gt; int\n\
\n\
Returns the status of the object to draw.\n\
See M3dView.displayStatus() for a list of status.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a11f4eee17e43518127d923a15563f8f0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.displayStyle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">displayStyle() -&gt; int\n\
\n\
Returns the display appearance.\n\
See M3dView.displayStyle() for a list of styles.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aacc2630fb8d6b4124fe6332318eba5ce\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.getPrototype </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getPrototype(drawHandler) -&gt; MDrawRequest\n\
\n\
This method creates a draw request based on the current draw state.\n\
\n\
The draw request is placed onto maya\'s drawing queue (MDrawRequestQueue) where it can be processed in turn. The drawHandler argument is the shape that will be doing the drawing which is the object calling this function.\n\
\n\
* drawHandler (MPxSurfaceShapeUI) - the ui object that is doing the drawing</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aecf59609f19284bb6e034bef35f69f7a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.inclusiveMatrix </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">inclusiveMatrix() -&gt; MMatrix\n\
\n\
Returns the world space inclusive matrix.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae65ede50bb034512edb6e1ce63a2f8bb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.inSelect </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">inSelect() -&gt; bool\n\
\n\
Returns True during any interactive refresh, as when user is interacting with the scene in any way including camera changes, object or component TRS changes, etc. Use userChangingViewContext for determining whether user is changing the view using view context tools such as tumble, dolly or track.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6b85cdd3eb7d3b633c1b3da36f09a876\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.inUserInteraction </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">inUserInteraction() -&gt; bool\n\
\n\
Returns True during any interactive refresh, as when user is changing the view using view context tools such as tumble, dolly or track.  Useful for changing drawing mode to something simpler to speed up interaction re-draw.  Use inUserInteraction for determining whether user is interacting with the scene in any way.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad912b12415dd1a73dcc1018744ce755f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.multiPath </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">multiPath() -&gt; MDagPath\n\
\n\
Returns the path to the object to be drawn.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a71f766cff99c5edc39e14bb3207f8cb1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.objectDisplayStatus </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">objectDisplayStatus(displayObj) -&gt; bool\n\
\n\
Determines whether the specified objects are allowed to be displayed.\n\
\n\
* displayObj (int) - display object mask. See M3dView.objectDisplay() for a list of valid masks.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa749b2884c4f3c66680f5ba1e0673418\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.pluginObjectDisplayStatus </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">pluginObjectDisplayStatus(pluginDisplayFilter) -&gt; bool\n\
\n\
Determines whether the specified plugin object is allowed to be displayed.\n\
\n\
* pluginDisplayFilter (string) - The name of the plugin display filter which is registered by pluginDisplayFilter command.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a116a29c0d0ea3a73115c4c79dc4f27c8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.projectionMatrix </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">projectionMatrix() -&gt; MMatrix\n\
\n\
Returns the camera*projection matrix.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab639e9cb175d9d711278e9341d71726c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.setMultiPath </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">setMultiPath(path) -&gt; self\n\
\n\
Sets the path of the object to be drawn.\n\
\n\
* path (MDagPath) - the path of the object to be drawn</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acd64e685dde3e44e5b7dbbe780a9a08b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.userChangingViewContext </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">userChangingViewContext() -&gt; bool\n\
\n\
Returns True during any interactive refresh, as when user is interacting with the scene in any way including camera changes, object or component TRS changes, etc. Use userChangingViewContext for determining whether user is changing the view using view context tools such as tumble, dolly or track.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a62661bb8545f3d0d3184f3e18b5e46c2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaUI.MDrawInfo.view </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">view() -&gt; M3dView\n\
\n\
Returns the view that the drawing will take place.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";