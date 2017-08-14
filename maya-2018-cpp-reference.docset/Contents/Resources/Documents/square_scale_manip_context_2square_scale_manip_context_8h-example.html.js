var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>squareScaleManipContext/squareScaleManipContext.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'square_scale_manip_context_2square_scale_manip_context_8h-example.html\', tocPrefix);\n\
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
            <h1>squareScaleManipContext/squareScaleManipContext.h</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"title\">squareScaleManipContext/squareScaleManipContext.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypes.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxManipulatorNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObjectHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagModifier.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/M3dView.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGLFunctionTable.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;manipulatorMath.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Main class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>squareScaleManipulator : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html\">MPxManipulatorNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    squareScaleManipulator();</div>\n\
<div class=\"line\">    ~squareScaleManipulator() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Important virtuals to implement</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#ac7013eba743cd3226bc9a72b1ea27cff\">connectToDependNode</a>(<span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;dependNode) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#aef28aea1609504c09c2096a532c0cebe\">draw</a>(<a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;view, <span class=\"keyword\">const</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;path,</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a1b68f8823b8e275a4b548fdd27263e8a\">M3dView::DisplayStyle</a> style, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#ad9c34c5373567566950642c16a7c4bca\">M3dView::DisplayStatus</a> status) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#a316382b7a3e9753bd7c0a2d32cb5bf63\">doPress</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#ada39ff9e3902848c978e58f2190ab4bc\">doDrag</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_manipulator_node.html#a1192fb7b79b2ae825a5fd78149d063bf\">doRelease</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Utility methods</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setDrawTransformInfo( <span class=\"keywordtype\">double</span> rotation[3], <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> translation );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> updateDragInformation();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Standard required methods</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>* creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Node id</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// GL component names used for drawing/picking</span></div>\n\
<div class=\"line\">    MGLuint topName, rightName, bottomName, leftName;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Component names match with value indices</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> topIndex, rightIndex, bottomIndex, leftIndex;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Simple plane math class</span></div>\n\
<div class=\"line\">    planeMath plane;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Modified mouse point</span></div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> mousePointGlName;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Track connected node rotation+translation in</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// order to position manipulator</span></div>\n\
<div class=\"line\">    MGLfloat rotateX,rotateY,rotateZ;</div>\n\
<div class=\"line\">    MGLfloat translateX,translateY,translateZ;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";