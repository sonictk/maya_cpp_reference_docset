var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MFnKeyframeDelta Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_fn_keyframe_delta.html\', tocPrefix);\n\
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
            <h1>MFnKeyframeDelta Class Reference</h1>\n\
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
<div class=\"title\">MFnKeyframeDelta Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a> &#124; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___m_fn.html\">FunctionSet classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_fn_keyframe_delta.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_fn_keyframe_delta.html#pro-methods\">Protected Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MFnKeyframeDelta.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Base function set for keyframe deltas. </p>\n\
<p>Keyframe delta objects are returned via the MAnimMessage::animKeyframeEditedCallback( ... ). They describe atomic changes to keyframes as a result of a curve edit operation. Refer to the documentation in <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_message.html\" title=\"Animation messages. \">MAnimMessage</a> class for further information.</p>\n\
<p>Base function set for all keyframe delta objects. A keyframe delta object is generated from the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_message.html#af1f90927bea5fde3ea9c81ec166e1e8b\" title=\"AnimCurve keyframe edited callback. \">MAnimMessage::addAnimKeyframeEditedCallback</a>. </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for MFnKeyframeDelta:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_m_fn_keyframe_delta.png\" usemap=\"#MFnKeyframeDelta_map\" alt=\"\">\n\
  <map id=\"MFnKeyframeDelta_map\" name=\"MFnKeyframeDelta_map\">\n\
<area href=\"class_m_fn_base.html\" title=\"Function Set Base Class. \" alt=\"MFnBase\" shape=\"rect\" coords=\"0,0,220,24\">\n\
<area href=\"class_m_fn_keyframe_delta_add_remove.html\" title=\"Function set for the addition or removal keys on a curve. \" alt=\"MFnKeyframeDeltaAddRemove\" shape=\"rect\" coords=\"230,112,450,136\">\n\
<area href=\"class_m_fn_keyframe_delta_block_add_remove.html\" title=\"Function set for block add or removal of keys. \" alt=\"MFnKeyframeDeltaBlockAddRemove\" shape=\"rect\" coords=\"230,168,450,192\">\n\
<area href=\"class_m_fn_keyframe_delta_breakdown.html\" title=\"Function set for changes in a key&#39;s breakdown state. \" alt=\"MFnKeyframeDeltaBreakdown\" shape=\"rect\" coords=\"230,224,450,248\">\n\
<area href=\"class_m_fn_keyframe_delta_inf_type.html\" title=\"Function set for changes in pre or post infinity type. \" alt=\"MFnKeyframeDeltaInfType\" shape=\"rect\" coords=\"230,280,450,304\">\n\
<area href=\"class_m_fn_keyframe_delta_move.html\" title=\"Function set for change in keyframe value or time. \" alt=\"MFnKeyframeDeltaMove\" shape=\"rect\" coords=\"230,336,450,360\">\n\
<area href=\"class_m_fn_keyframe_delta_scale.html\" title=\"This method is obsolete. \" alt=\"MFnKeyframeDeltaScale\" shape=\"rect\" coords=\"230,392,450,416\">\n\
<area href=\"class_m_fn_keyframe_delta_tangent.html\" title=\"Function set for changes to a key&#39;s tangent. \" alt=\"MFnKeyframeDeltaTangent\" shape=\"rect\" coords=\"230,448,450,472\">\n\
<area href=\"class_m_fn_keyframe_delta_weighted.html\" title=\"Function set for changes in a key&#39;s weighted state. \" alt=\"MFnKeyframeDeltaWeighted\" shape=\"rect\" coords=\"230,504,450,528\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a50f7932bfccc852c204ba75f0296d24a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a50f7932bfccc852c204ba75f0296d24a\"></a>\n\
virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#a50f7932bfccc852c204ba75f0296d24a\">type</a> () const </td></tr>\n\
<tr class=\"memdesc:a50f7932bfccc852c204ba75f0296d24a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Function set type. <br></td></tr>\n\
<tr class=\"separator:a50f7932bfccc852c204ba75f0296d24a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a770b20c7708e3f6f41103c2bb6b8e120\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a770b20c7708e3f6f41103c2bb6b8e120\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#a770b20c7708e3f6f41103c2bb6b8e120\">~MFnKeyframeDelta</a> ()</td></tr>\n\
<tr class=\"memdesc:a770b20c7708e3f6f41103c2bb6b8e120\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a770b20c7708e3f6f41103c2bb6b8e120\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa57f69cf2cc881f7b61ea71bd3969f65\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa57f69cf2cc881f7b61ea71bd3969f65\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#aa57f69cf2cc881f7b61ea71bd3969f65\">MFnKeyframeDelta</a> ()</td></tr>\n\
<tr class=\"memdesc:aa57f69cf2cc881f7b61ea71bd3969f65\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor. <br></td></tr>\n\
<tr class=\"separator:aa57f69cf2cc881f7b61ea71bd3969f65\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad74e6a0a1f226ca77688490e0c268c05\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#ad74e6a0a1f226ca77688490e0c268c05\">MFnKeyframeDelta</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:ad74e6a0a1f226ca77688490e0c268c05\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_keyframe_delta.html#ad74e6a0a1f226ca77688490e0c268c05\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad74e6a0a1f226ca77688490e0c268c05\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abec402b50644b3bfb5e645afde14cfdf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#abec402b50644b3bfb5e645afde14cfdf\">paramCurve</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:abec402b50644b3bfb5e645afde14cfdf\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the Animation Curve <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> that this key belongs to.  <a href=\"class_m_fn_keyframe_delta.html#abec402b50644b3bfb5e645afde14cfdf\">More...</a><br></td></tr>\n\
<tr class=\"separator:abec402b50644b3bfb5e645afde14cfdf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad4603f139eeb92b9cdae368db5e01706\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#ad4603f139eeb92b9cdae368db5e01706\">keyIndex</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:ad4603f139eeb92b9cdae368db5e01706\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The index of this key on the animation curve.  <a href=\"class_m_fn_keyframe_delta.html#ad4603f139eeb92b9cdae368db5e01706\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad4603f139eeb92b9cdae368db5e01706\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af8be6740d055df0ac7b7a449a2ae857a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#af8be6740d055df0ac7b7a449a2ae857a\">MFnKeyframeDelta</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:af8be6740d055df0ac7b7a449a2ae857a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_keyframe_delta.html#af8be6740d055df0ac7b7a449a2ae857a\">More...</a><br></td></tr>\n\
<tr class=\"separator:af8be6740d055df0ac7b7a449a2ae857a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_m_fn_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td></tr>\n\
<tr class=\"memitem:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5ba621af875a0d489e1031eddac02b82\">~MFnBase</a> ()</td></tr>\n\
<tr class=\"memdesc:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class Destructor.  <a href=\"class_m_fn_keyframe_delta.html#a5ba621af875a0d489e1031eddac02b82\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">hasObj</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>) const </td></tr>\n\
<tr class=\"memdesc:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Determines whether or not the Function Set is compatible with the specified Maya Object within the API RTTI system.  <a href=\"class_m_fn_keyframe_delta.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a28acbd3253b9c86a1e64b3457de9f4ea\">hasObj</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;) const </td></tr>\n\
<tr class=\"memdesc:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Determines whether or not the Function Set is compatible with the specified Maya Object within the API RTTI system.  <a href=\"class_m_fn_keyframe_delta.html#a28acbd3253b9c86a1e64b3457de9f4ea\">More...</a><br></td></tr>\n\
<tr class=\"separator:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a01c802c0a7fc219b5a9beff9787bcfa2 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a01c802c0a7fc219b5a9beff9787bcfa2 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> that is attached to the Function Set.  <a href=\"class_m_fn_keyframe_delta.html#a01c802c0a7fc219b5a9beff9787bcfa2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a01c802c0a7fc219b5a9beff9787bcfa2 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>)</td></tr>\n\
<tr class=\"memdesc:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Attaches the Function Set to the specified Maya Object.  <a href=\"class_m_fn_keyframe_delta.html#ad09f5acece0f9926b3e0e55cff78c3be\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a4a6adbb56d6259860ec665ab5d86bdb5\">setObject</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>)</td></tr>\n\
<tr class=\"memdesc:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_fn_keyframe_delta.html#a4a6adbb56d6259860ec665ab5d86bdb5\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-methods\"></a>\n\
Protected Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a07838464f70c391210abadf08598db6c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a07838464f70c391210abadf08598db6c\"></a>\n\
virtual const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html#a07838464f70c391210abadf08598db6c\">className</a> () const </td></tr>\n\
<tr class=\"memdesc:a07838464f70c391210abadf08598db6c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class name. <br></td></tr>\n\
<tr class=\"separator:a07838464f70c391210abadf08598db6c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_m_fn_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_fn_keyframe_delta.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad74e6a0a1f226ca77688490e0c268c05\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html\">MFnKeyframeDelta</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Class constructor that initializes the function set to the given <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> to attach the function set to </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>the return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> if the function set is successfully attached </li>\n\
<li><b>MS::kInvalidParameter</b> if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> does not represent a valid Maya object or if the function set is not allowed to attach to this <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af8be6740d055df0ac7b7a449a2ae857a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta.html\">MFnKeyframeDelta</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Class constructor that initializes the function set to the given <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> to attach the function set to </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>the return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> if the function set is successfully attached </li>\n\
<li><b>MS::kInvalidParameter</b> if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> does not represent a valid Maya object or if the function set is not allowed to attach to this <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"abec402b50644b3bfb5e645afde14cfdf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> paramCurve </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the Animation Curve <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> that this key belongs to. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Return code.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>, readable by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html\" title=\"Anim Curve Function Set. \">MFnAnimCurve</a>.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The operation succeeded. </li>\n\
<li><b>MS::kFailure</b> An object error has occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad4603f139eeb92b9cdae368db5e01706\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int keyIndex </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>The index of this key on the animation curve. </p>\n\
<p>Note that when keys are added and then moved in a single action, the delta for the added key may refer to a key that no longer exists. In this case, the index returned related to the add operation will be the index where the key would be if it still existed on the curve. For example, if an animation curve has keys at frames 1 and 10, and a key is added at frame 12 and then moved to frame 11 in a single action, when the callback for the addition is received, the key at frame 12 will no longer exist. In this case, the keyIndex returned will be 3, to indicate that the key would be at index 3 if it existed.<br>\n\
</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Return code.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>An unsigned int representing the position of the key on the curve.</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The operation succeeded. </li>\n\
<li><b>MS::kFailure</b> An object error has occurred. </li>\n\
<li><b>MS::kInvalidParameter</b> key index is not available for this delta object. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
<p>Reimplemented in <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_add_remove.html#ad4603f139eeb92b9cdae368db5e01706\">MFnKeyframeDeltaAddRemove</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_move.html#ad4603f139eeb92b9cdae368db5e01706\">MFnKeyframeDeltaMove</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MFnKeyframeDelta.h</li>\n\
<li>MFnKeyframeDelta.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";