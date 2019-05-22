var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxAnimCurveInterpolator Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_anim_curve_interpolator.html\', tocPrefix);\n\
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
            <h1>MPxAnimCurveInterpolator Class Reference</h1>\n\
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
<div class=\"title\">MPxAnimCurveInterpolator Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span><div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a> &#124; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___m_px.html\">Proxy classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2/C-API-Changes-in-Maya-2016.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016 &gt; C++ API Changes in Maya 2016</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_px_anim_curve_interpolator.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_px_anim_curve_interpolator.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MPxAnimCurveInterpolator.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Base Class for User-defined Animation Curve Interpolation Types. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html\" title=\"Base Class for User-defined Animation Curve Interpolation Types. \">MPxAnimCurveInterpolator</a> is the base class for user defined Anim Curve Interpolation Types. It allows for the creation and evaluation of customized animation curves, in addition to determination of the type ID and name of the curve. The evaluation of an animCurve between two of its keyframes is determined by interpolators (also known as \"tangent types\") at those keyframes. This class allows for the creation of custom tangent types. Note that the valid type ranges are:</p>\n\
<p>Types 1 to 18 Maya\'s built-in tangent types. See <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a6b26eee66e19b558a138d0c009653e51\" title=\"Defines the type of the tangent. \">MFnAnimCurve::TangentType</a>. Types 19 to 26 Custom tangent types which are available to all users, and should only be used internally. Types 27 to 63 Maya\'s built-in tangent types. See <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a6b26eee66e19b558a138d0c009653e51\" title=\"Defines the type of the tangent. \">MFnAnimCurve::TangentType</a>. Types 64 to 32767 Custom tangent types which can be reserved by customers. You can request between 1 to 8 id\'s per request. Visit <a href=\"http://mayaid.autodesk.io/\">Autodesk Maya Developer Tangent Types ID Block Registration</a> to submit your request. See also <a href=\"http://www.autodesk.com/developmaya\">Autodesk Developer Network</a> for more information. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_plugins_2interp_flat_8h-example.html#_a0\">interpPlugins/interpFlat.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_plugins_2interp_half_8h-example.html#_a0\">interpPlugins/interpHalf.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_zero_2interp_zero_8cpp-example.html#_a0\">interpZero/interpZero.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a0a5839051efd13d103407b76f1cf377f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a0a5839051efd13d103407b76f1cf377f\">InterpolatorFlags</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a0a5839051efd13d103407b76f1cf377fa0b0d91c623d6c9cc013eb2da9c5a0719\">kEvaluateAtKey</a> = 0x001, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a0a5839051efd13d103407b76f1cf377fa164b343d4a5d26b8e1e9d17200bc04f4\">kLockType</a> = 0x002\n\
 }<tr class=\"memdesc:a0a5839051efd13d103407b76f1cf377f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Defines the flags used when registering a new animation curve iterpolator.  <a href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a0a5839051efd13d103407b76f1cf377f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0a5839051efd13d103407b76f1cf377f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a7713163bb3eb42d0503cabddc9022cf2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a7713163bb3eb42d0503cabddc9022cf2\">initialize</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;animCurve, unsigned int keyIndex)</td></tr>\n\
<tr class=\"memdesc:a7713163bb3eb42d0503cabddc9022cf2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Initialize the interpolator to evaluate keyframe values within the time span of the given interval.  <a href=\"class_m_px_anim_curve_interpolator.html#a7713163bb3eb42d0503cabddc9022cf2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7713163bb3eb42d0503cabddc9022cf2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1839110692f6ec1fbb170d20573afcd7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual double&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a1839110692f6ec1fbb170d20573afcd7\">evaluate</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;val)=0</td></tr>\n\
<tr class=\"memdesc:a1839110692f6ec1fbb170d20573afcd7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Compute an interpolated keyframe value at the given time, which is an absolute time between the start and end times.  <a href=\"class_m_px_anim_curve_interpolator.html#a1839110692f6ec1fbb170d20573afcd7\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1839110692f6ec1fbb170d20573afcd7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3f57cedef7c87a516722da68ab2808ba\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a6b26eee66e19b558a138d0c009653e51\">MFnAnimCurve::TangentType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a3f57cedef7c87a516722da68ab2808ba\">typeId</a> () const </td></tr>\n\
<tr class=\"memdesc:a3f57cedef7c87a516722da68ab2808ba\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the tangent type of this curve.  <a href=\"class_m_px_anim_curve_interpolator.html#a3f57cedef7c87a516722da68ab2808ba\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3f57cedef7c87a516722da68ab2808ba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7aa522b0c9a8205c58893dc6bfe4c91f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a7aa522b0c9a8205c58893dc6bfe4c91f\">typeName</a> () const </td></tr>\n\
<tr class=\"memdesc:a7aa522b0c9a8205c58893dc6bfe4c91f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name under which the interpolator type was registered.  <a href=\"class_m_px_anim_curve_interpolator.html#a7aa522b0c9a8205c58893dc6bfe4c91f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7aa522b0c9a8205c58893dc6bfe4c91f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a0a5839051efd13d103407b76f1cf377f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_anim_curve_interpolator.html#a0a5839051efd13d103407b76f1cf377f\">InterpolatorFlags</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Defines the flags used when registering a new animation curve iterpolator. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0a5839051efd13d103407b76f1cf377fa0b0d91c623d6c9cc013eb2da9c5a0719\"></a>kEvaluateAtKey&#160;</td><td class=\"fielddoc\">\n\
<p>Animation curves do not typically evaluate at the keyframe times. </p>\n\
<p>Instead, the keyframe value is used. For custom interpolators that may want to define their curves such that they do not pass through the keyframe values, <em>kEvaluateAtKey</em> can be set which will cause the interpolator to be evaluated at the keyframe times. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0a5839051efd13d103407b76f1cf377fa164b343d4a5d26b8e1e9d17200bc04f4\"></a>kLockType&#160;</td><td class=\"fielddoc\">\n\
<p>Many curve operations to move keys or change tangent types may cause a ripple of tangent type changes for neighboring keyframes to a tangent type known to be compatible with the new curve shape. </p>\n\
<p>Some custom interpolators may be able to accomodate such changes to neighboring keyframes without being exchanged for a different type. Setting <em>kLockType</em> will prevent the custom tangent type from being automatically exchanged. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a7713163bb3eb42d0503cabddc9022cf2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void initialize </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>animCurve</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>keyIndex</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Initialize the interpolator to evaluate keyframe values within the time span of the given interval. </p>\n\
<p>The interval starts at the keyframe denoted by the value of the interval and continues to the next keyframe.</p>\n\
<p>It is not necessary to override this method.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">animCurve</td><td></td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">keyIndex</td><td></td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_plugins_2interp_flat_8h-example.html#a1\">interpPlugins/interpFlat.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_plugins_2interp_half_8h-example.html#a1\">interpPlugins/interpHalf.h</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1839110692f6ec1fbb170d20573afcd7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">double evaluate </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>val</em></td><td>)</td>\n\
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
<p>Compute an interpolated keyframe value at the given time, which is an absolute time between the start and end times. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">val</td><td>specified time value</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>interpolated keyframe value </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_plugins_2interp_flat_8h-example.html#a3\">interpPlugins/interpFlat.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_plugins_2interp_half_8h-example.html#a3\">interpPlugins/interpHalf.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interp_zero_2interp_zero_8cpp-example.html#a1\">interpZero/interpZero.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3f57cedef7c87a516722da68ab2808ba\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a6b26eee66e19b558a138d0c009653e51\">MFnAnimCurve::TangentType</a> typeId </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the tangent type of this curve. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Type id of the node </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7aa522b0c9a8205c58893dc6bfe4c91f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> typeName </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name under which the interpolator type was registered. </p>\n\
<p>The name is used in the UI and when specifying a tangent type to the keyTangent command.</p>\n\
<p>It is not necessary to override this method.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Type name of the class </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxAnimCurveInterpolator.h</li>\n\
<li>MPxAnimCurveInterpolator.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";