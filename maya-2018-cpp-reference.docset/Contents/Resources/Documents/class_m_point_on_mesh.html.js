var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MPointOnMesh Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_point_on_mesh.html\', tocPrefix);\n\
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
            <h1>MPointOnMesh Class Reference</h1>\n\
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
<div class=\"title\">MPointOnMesh Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6EE8F184-A92B-485A-91F5-07B00313D87E.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 &gt; New Python API 2.0 classes in Maya 2016</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_point_on_mesh.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_point_on_mesh.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MMeshIntersector.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Mesh intersector result. </p>\n\
<p>This class is used to return information about a point on a mesh: 3D position, normal, barycentric coordinates, etc. Note that this can be a point anywhere on the surface of the mesh, not just at vertices. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/closest_point_cmd_2closest_point_cmd_8cpp-example.html#_a6\">closestPointCmd/closestPointCmd.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/splat_deformer_2splat_deformer_8cpp-example.html#_a46\">splatDeformer/splatDeformer.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a428fd5517ed802d8271053ab6174b1f2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a428fd5517ed802d8271053ab6174b1f2\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#a428fd5517ed802d8271053ab6174b1f2\">MPointOnMesh</a> ()</td></tr>\n\
<tr class=\"memdesc:a428fd5517ed802d8271053ab6174b1f2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:a428fd5517ed802d8271053ab6174b1f2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ace09aa24add4ba039b7146838be4d173\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ace09aa24add4ba039b7146838be4d173\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#ace09aa24add4ba039b7146838be4d173\">getPoint</a> ()</td></tr>\n\
<tr class=\"memdesc:ace09aa24add4ba039b7146838be4d173\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the point data. <br></td></tr>\n\
<tr class=\"separator:ace09aa24add4ba039b7146838be4d173\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac41c3ea7cabe88692dd5a04e46a70bd7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac41c3ea7cabe88692dd5a04e46a70bd7\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#ac41c3ea7cabe88692dd5a04e46a70bd7\">getNormal</a> ()</td></tr>\n\
<tr class=\"memdesc:ac41c3ea7cabe88692dd5a04e46a70bd7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the normal data. <br></td></tr>\n\
<tr class=\"separator:ac41c3ea7cabe88692dd5a04e46a70bd7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3179ffd39a0493fcf2acef54693c0db0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#a3179ffd39a0493fcf2acef54693c0db0\">getBarycentricCoords</a> (float &amp;u, float &amp;v) const </td></tr>\n\
<tr class=\"memdesc:a3179ffd39a0493fcf2acef54693c0db0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the barycentric coordinates of the closest point on the mesh.  <a href=\"class_m_point_on_mesh.html#a3179ffd39a0493fcf2acef54693c0db0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3179ffd39a0493fcf2acef54693c0db0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a828ab2c17044d1f9c850f1a213b0e291\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a828ab2c17044d1f9c850f1a213b0e291\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#a828ab2c17044d1f9c850f1a213b0e291\">faceIndex</a> () const </td></tr>\n\
<tr class=\"memdesc:a828ab2c17044d1f9c850f1a213b0e291\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the face index data. <br></td></tr>\n\
<tr class=\"separator:a828ab2c17044d1f9c850f1a213b0e291\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a427e781f38b3bc4c66ee989e5f5dce02\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a427e781f38b3bc4c66ee989e5f5dce02\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#a427e781f38b3bc4c66ee989e5f5dce02\">triangleIndex</a> () const </td></tr>\n\
<tr class=\"memdesc:a427e781f38b3bc4c66ee989e5f5dce02\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the triangle index data. <br></td></tr>\n\
<tr class=\"separator:a427e781f38b3bc4c66ee989e5f5dce02\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a4b4466a4a19f9e41fbf2d4d04c8ffe8f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4b4466a4a19f9e41fbf2d4d04c8ffe8f\"></a>\n\
class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>MMeshIntersector</b></td></tr>\n\
<tr class=\"separator:a4b4466a4a19f9e41fbf2d4d04c8ffe8f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a3179ffd39a0493fcf2acef54693c0db0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void getBarycentricCoords </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">float &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>u</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">float &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>v</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns the barycentric coordinates of the closest point on the mesh. </p>\n\
<p>If the triangle has vertices (a, b, c) then the point returned by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#ace09aa24add4ba039b7146838be4d173\" title=\"This method returns the point data. \">getPoint()</a> is at coordinates <code>u*a + v*b + (1 - u - v)*c</code>. The barycentric coordinates are particularly useful when interpolating attributes from one mesh to another.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">u</td><td>The relative contribution of the first vertex of the triangle. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">v</td><td>The relative contribution of the second vertex of the triangle. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MMeshIntersector.h</li>\n\
<li>MMeshIntersector.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";