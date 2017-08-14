var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>latticeNoise/latticeNoise.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'lattice_noise_2lattice_noise_8h-example.html\', tocPrefix);\n\
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
            <h1>latticeNoise/latticeNoise.h</h1>\n\
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
<div class=\"title\">latticeNoise/latticeNoise.h</div>  </div>\n\
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
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Class: latticeNoiseCmd</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The latticeNoise command creates a new lattice (ffd) deformer.  A </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      latticeNoise node is placed between the deformed lattice shape and the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      actual deformer node.  This causes the deformed object to wobble as </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      random continuous noise is added to the pointes of the lattice.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  eg</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This causes the currently selected object to be deformed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//       latticeNoise;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This causes the specified geometry to be deformed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       latticeNoise sphereShape1; </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>latticeNoiseCmd : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    latticeNoiseCmd() {};</div>\n\
<div class=\"line\">                ~latticeNoiseCmd()<span class=\"keyword\"> override </span>{}; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Class: latticeNoiseNode</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      A &quot;latticeNoise&quot; node adds random noise to lattice geometry over time.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      This makes the geometry being deformed by the lattice look like </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      wobbly jello.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Node:       latticeNoise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Attributes: input     - input lattice </span></div>\n\
<div class=\"line\"><span class=\"comment\">//              amplitude - amplitude of the noise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              frequency - frequency of the noise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              time      - the current time</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              output    - the modified lattice</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>latticeNoiseNode : <span class=\"keyword\">public</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        latticeNoiseNode() {};</div>\n\
<div class=\"line\">                    ~latticeNoiseNode()<span class=\"keyword\"> override </span>{}; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     input;     <span class=\"comment\">// The input lattice.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     amplitude; <span class=\"comment\">// The noise amplitude.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     frequency; <span class=\"comment\">// The noise frequency.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     time;      <span class=\"comment\">// The time.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     output;    <span class=\"comment\">// The output lattice.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;        <span class=\"comment\">// The IFF type id</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Class: noise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The noise class is used for generating pseudo-random continuous noise.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The noise values generated are always between 0 and 1.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The technique used is a simple lattice noise algorithm based upon one </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      by Ken Perlin.  This particular implementation is adapted from </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Darwyn Peachey&#39;s (Texturing and Modeling: a Procedural Approach,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      S. Ebert Editor, 1994).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define TABLE_SIZE 256</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> kTableMask;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MODPERM(x) permtable[(x)&amp;kTableMask]</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keyword\">struct </span>{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> x;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> y;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> z;</div>\n\
<div class=\"line\">} pnt;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>noise {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  atValue( <span class=\"keywordtype\">float</span> x );</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  atPoint( <span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> y, <span class=\"keywordtype\">float</span> z ); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> pnt    atPointAndTime( <span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> y, <span class=\"keywordtype\">float</span> z, <span class=\"keywordtype\">float</span> t );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>   initTable( <span class=\"keywordtype\">long</span> seed );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">int</span>    permtable   [256];</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  valueTable1 [256];</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  valueTable2 [256];</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  valueTable3 [256];</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">int</span>    isInitialized;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  spline( <span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> knot0, <span class=\"keywordtype\">float</span> knot1, <span class=\"keywordtype\">float</span> knot2, </div>\n\
<div class=\"line\">                          <span class=\"keywordtype\">float</span> knot3 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  value( <span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">int</span> y, <span class=\"keywordtype\">int</span> z, <span class=\"keywordtype\">float</span> table[] = valueTable1 );</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  value( <span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">int</span> y, <span class=\"keywordtype\">int</span> z, <span class=\"keywordtype\">int</span> t,</div>\n\
<div class=\"line\">                         <span class=\"keywordtype\">float</span> table[] = valueTable1 );</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span>  value( <span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">float</span> table[] = valueTable1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">float</span> noise::value( <span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">int</span> y, <span class=\"keywordtype\">int</span> z, <span class=\"keywordtype\">int</span> t, <span class=\"keywordtype\">float</span> table[] ) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> table[MODPERM( x + MODPERM( y + MODPERM( z + MODPERM( t ) ) ) )];</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">float</span> noise::value( <span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">int</span> y, <span class=\"keywordtype\">int</span> z, <span class=\"keywordtype\">float</span> table[] ) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> table[MODPERM( x + MODPERM( y + MODPERM( z ) ) )];</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">float</span> noise::value( <span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">float</span> table[] ) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> table[MODPERM( x )];</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";