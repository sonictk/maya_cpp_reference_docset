var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>sampleParticles/sampleParticles.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'sample_particles_2sample_particles_8cpp-example.html\', tocPrefix);\n\
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
            <h1>sampleParticles/sampleParticles.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
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
<div class=\"title\">sampleParticles/sampleParticles.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;sampleParticles&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates how to sample shading groups or nodes using </span></div>\n\
<div class=\"line\"><span class=\"comment\">// MRenderUtil::sampleShadingNetwork() to assign colors to a particle object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// The command takes lists of shading info such as pointCamera and UVs, samples</span></div>\n\
<div class=\"line\"><span class=\"comment\">// a given shading group or node, then assigns the sampled colors and transparencies</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to a grid of particles using the emit command. Lighting will be calculated if</span></div>\n\
<div class=\"line\"><span class=\"comment\">// a shading group is sampled. Shadows can be calculated if the -shadow flag is specified.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Note that sampleParticles -h provides more details on how to use the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdlib.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/M3dView.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatMatrix.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MRenderUtil.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatVectorArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef M_PI</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define M_PI        3.14159265358979323846  </span><span class=\"comment\">/* pi */</span><span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>sampleParticles : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    sampleParticles() {};</div>\n\
<div class=\"line\">                ~sampleParticles() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">sampleParticles::~sampleParticles() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* sampleParticles::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> sampleParticles();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    emits particles with color sampled from specified</span></div>\n\
<div class=\"line\"><span class=\"comment\">    shading node/shading engine</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> sampleParticles::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> shadow = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> reuse = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; args.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(); i++ )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( args.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>(i) == <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;-shadow&quot;</span>) || </div>\n\
<div class=\"line\">            args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>(i) == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;-s&quot;</span>) )</div>\n\
<div class=\"line\">            shadow = 1;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>(i) == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;-reuse&quot;</span>) || </div>\n\
<div class=\"line\">            args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>(i) == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;-r&quot;</span>) )</div>\n\
<div class=\"line\">            reuse = 1;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>() - i &lt; 5 )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        displayError( <span class=\"stringliteral\">&quot;Usage: sampleParticles [-shadow|-reuse] particleName &lt;shadingEngine|shadingNode.plug&gt; resX resY scale\\n&quot;</span></div>\n\
<div class=\"line\">            <span class=\"stringliteral\">&quot;  Example: sampleParticles -shadow particle1 phong1SG 64 64 10;\\n&quot;</span></div>\n\
<div class=\"line\">            <span class=\"stringliteral\">&quot;  Example: sampleParticles particle1 file1.outColor 128 128 5;\\n&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( reuse &amp;&amp; !shadow ) <span class=\"comment\">// can only reuse if shadow is turned on</span></div>\n\
<div class=\"line\">        reuse = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> particleName = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> node = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i+1 );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> resX = args.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a54e9c6d91b7b999624b2384bc52f12a2\">asInt</a>( i+2 );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> resY = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a54e9c6d91b7b999624b2384bc52f12a2\">asInt</a>( i+3 );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> scale = args.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( i+4 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( scale &lt;= 0.0 )</div>\n\
<div class=\"line\">        scale = 1.0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_array.html\">MFloatArray</a> uCoord, vCoord;</div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html\">MFloatPointArray</a> points;</div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html\">MFloatVectorArray</a> normals, tanUs, tanVs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( resX &lt;= 0 )</div>\n\
<div class=\"line\">        resX = 1;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( resY &lt;= 0 )</div>\n\
<div class=\"line\">        resY = 1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> command( <span class=\"stringliteral\">&quot;emit -o &quot;</span> );</div>\n\
<div class=\"line\">    command += particleName;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> tmp[2048];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> stepU = (float) (1.0 / resX);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> stepV = (float) (1.0 / resY);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// stuff sample data by iterating over grid</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Y is set to arch along the X axis</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> x, y;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( y = 0; y &lt; resY; y++ )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( x = 0; x &lt; resX; x++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            uCoord.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_array.html#a6d61a0ea5cd7a087db5ee81a990d4307\">append</a>( stepU * x );</div>\n\
<div class=\"line\">            vCoord.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_array.html#a6d61a0ea5cd7a087db5ee81a990d4307\">append</a>( stepV * y );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> curY = (float) (sin( stepU * (x) * M_PI )*2.0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> curPt(</div>\n\
<div class=\"line\">                (<span class=\"keywordtype\">float</span>) (stepU * x * scale),</div>\n\
<div class=\"line\">                curY,</div>\n\
<div class=\"line\">                (<span class=\"keywordtype\">float</span>) (stepV * y * scale ));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> uPt(</div>\n\
<div class=\"line\">                (<span class=\"keywordtype\">float</span>) (stepU * (x+1) * scale),</div>\n\
<div class=\"line\">                (<span class=\"keywordtype\">float</span>) (sin( stepU * (x+1) * M_PI )*2.0),</div>\n\
<div class=\"line\">                (<span class=\"keywordtype\">float</span>) (stepV * y * scale ));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> vPt(</div>\n\
<div class=\"line\">                (<span class=\"keywordtype\">float</span>) (stepU * (x) * scale),</div>\n\
<div class=\"line\">                curY,</div>\n\
<div class=\"line\">                (<span class=\"keywordtype\">float</span>) (stepV * (y+1) * scale ));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a> du, dv, n;</div>\n\
<div class=\"line\">            du = uPt-curPt;</div>\n\
<div class=\"line\">            dv = vPt-curPt;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            n = dv^du;  <span class=\"comment\">// normal is based on dU x dV</span></div>\n\
<div class=\"line\">            n = n.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html#aaff2cb37f018c721c68120cfa06c9a71\">normal</a>();</div>\n\
<div class=\"line\">            normals.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html#a5f296873af45a368395354bea26b6eab\">append</a>( n );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            du.normal();</div>\n\
<div class=\"line\">            dv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html#aaff2cb37f018c721c68120cfa06c9a71\">normal</a>();</div>\n\
<div class=\"line\">            tanUs.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html#a5f296873af45a368395354bea26b6eab\">append</a>( du );</div>\n\
<div class=\"line\">            tanVs.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html#a5f296873af45a368395354bea26b6eab\">append</a>( dv );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            points.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a9a607c73c20aca58b154cd5d40befbb7\">append</a>( curPt );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get current camera&#39;s world matrix</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> cameraPath;</div>\n\
<div class=\"line\">    <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a3cda809eff914b04ff47de958c365f09\">M3dView::active3dView</a>().<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a5e6ea41ec1bab5ed980b2ddffe398a73\">getCamera</a>( cameraPath );</div>\n\
<div class=\"line\">    <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> mat = cameraPath.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#afb30f64680f5aa038da428a79579d08c\">inclusiveMatrix</a>();</div>\n\
<div class=\"line\">    <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html\">MFloatMatrix</a> cameraMat( mat.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html#a527b102f4eb0951cf4f391f828d3ca34\">matrix</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html\">MFloatVectorArray</a> colors, transps;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( MS::kSuccess == <a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_util.html#a6b9ba1907baa091db043c29581c963fe\">MRenderUtil::sampleShadingNetwork</a>( </div>\n\
<div class=\"line\">            node, </div>\n\
<div class=\"line\">            points.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(),</div>\n\
<div class=\"line\">            shadow,</div>\n\
<div class=\"line\">            reuse,</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            cameraMat,</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            &amp;points,</div>\n\
<div class=\"line\">            &amp;uCoord,</div>\n\
<div class=\"line\">            &amp;vCoord,</div>\n\
<div class=\"line\">            &amp;normals,</div>\n\
<div class=\"line\">            &amp;points,</div>\n\
<div class=\"line\">            &amp;tanUs,</div>\n\
<div class=\"line\">            &amp;tanVs,</div>\n\
<div class=\"line\">            NULL,   <span class=\"comment\">// don&#39;t need filterSize</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            colors,</div>\n\
<div class=\"line\">            transps ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fprintf( stderr, <span class=\"stringliteral\">&quot;%u points sampled...\\n&quot;</span>, points.length() );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( i = 0; i &lt; uCoord.length(); i++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            sprintf( tmp, <span class=\"stringliteral\">&quot; -pos %g %g %g -at velocity -vv %g %g %g -at rgbPP -vv %g %g %g&quot;</span>,</div>\n\
<div class=\"line\">                points[i].x,</div>\n\
<div class=\"line\">                points[i].y,</div>\n\
<div class=\"line\">                points[i].z,</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                normals[i].x,</div>\n\
<div class=\"line\">                normals[i].y,</div>\n\
<div class=\"line\">                normals[i].z,</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                colors[i].x,</div>\n\
<div class=\"line\">                colors[i].y,</div>\n\
<div class=\"line\">                colors[i].z );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            command += <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( tmp );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// execute emit command once every 512 samples</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i % 512 == 0 )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                fprintf( stderr, <span class=\"stringliteral\">&quot;%u...\\n&quot;</span>, i );</div>\n\
<div class=\"line\">                <a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434\">MGlobal::executeCommand</a>( command, <span class=\"keyword\">false</span>, <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">                command = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;emit -o &quot;</span> );</div>\n\
<div class=\"line\">                command += particleName;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( i % 512 )</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434\">MGlobal::executeCommand</a>( command, <span class=\"keyword\">true</span>, <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        displayError( node + <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot; is not a shading engine!  Specify node.attr or shading group node.&quot;</span> ) );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the command we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;sampleParticles&quot;</span>, sampleParticles::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;sampleParticles&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";