var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>apiMeshShape/apiMeshIterator.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'api_mesh_shape_2api_mesh_iterator_8h-example.html\', tocPrefix);\n\
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
            <h1>apiMeshShape/apiMeshIterator.h</h1>\n\
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
<div class=\"title\">apiMeshShape/apiMeshIterator.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Point iterator for control-point based geometry</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This is used by the translate/rotate/scale manipulators to </span></div>\n\
<div class=\"line\"><span class=\"comment\">// determine where to place the manipulator when components are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// selected.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// As well deformers use this class to deform points of the shape.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxGeometryIterator.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;apiMeshGeom.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>apiMeshGeomIterator : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html\">MPxGeometryIterator</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    apiMeshGeomIterator( <span class=\"keywordtype\">void</span> * userGeometry, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp; components );</div>\n\
<div class=\"line\">    apiMeshGeomIterator( <span class=\"keywordtype\">void</span> * userGeometry, <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; components );</div>\n\
<div class=\"line\">    ~apiMeshGeomIterator() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Overrides</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#ad20897c5c8bd47f5d4005989bead0e55\">reset</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>      <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#a8e7e02049f86b772b5c3e1f23178cc76\">point</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#a68bd8660789638b76045e9a87e02210c\">setPoint</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp; ) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>         <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#ab7ed17dfd10db9967c5647a9fc17e653\">iteratorCount</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#ac3fc4ac8c80b5bf64c0bf095d7fde94b\">hasPoints</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    apiMeshGeom *       <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#a2d04e078bc26cd55399fae7628e22688\">geometry</a>;</div>\n\
<div class=\"line\">};</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";