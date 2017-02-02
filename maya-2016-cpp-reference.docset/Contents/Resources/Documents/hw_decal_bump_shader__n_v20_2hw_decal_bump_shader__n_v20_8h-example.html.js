var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwDecalBumpShader_NV20/hwDecalBumpShader_NV20.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_decal_bump_shader__n_v20_2hw_decal_bump_shader__n_v20_8h-example.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>hwDecalBumpShader_NV20/hwDecalBumpShader_NV20.h</h1>\n\
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
<div class=\"title\">hwDecalBumpShader_NV20/hwDecalBumpShader_NV20.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _hwDecalBumpShader_NV20</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _hwDecalBumpShader_NV20</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (C) 1995 - 2006 Autodesk, Inc. and/or its licensors.  All </span></div>\n\
<div class=\"line\"><span class=\"comment\">// rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The coded instructions, statements, computer programs, and/or related </span></div>\n\
<div class=\"line\"><span class=\"comment\">// material (collectively the &quot;Data&quot;) in these files contain unpublished </span></div>\n\
<div class=\"line\"><span class=\"comment\">// information proprietary to Autodesk, Inc. (&quot;Autodesk&quot;) and/or its </span></div>\n\
<div class=\"line\"><span class=\"comment\">// licensors, which is protected by U.S. and Canadian federal copyright </span></div>\n\
<div class=\"line\"><span class=\"comment\">// law and by international treaties.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The Data is provided for use exclusively by You. You have the right </span></div>\n\
<div class=\"line\"><span class=\"comment\">// to use, modify, and incorporate this Data into other products for </span></div>\n\
<div class=\"line\"><span class=\"comment\">// purposes authorized by the Autodesk software license agreement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// without fee.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The copyright notices in the Software and this entire statement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// including the above license grant, this restriction and the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// following disclaimer, must be included in all copies of the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Software, in whole or in part, and all derivative works of </span></div>\n\
<div class=\"line\"><span class=\"comment\">// the Software, unless such copies or derivative works are solely </span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the form of machine-executable object code generated by a </span></div>\n\
<div class=\"line\"><span class=\"comment\">// source language processor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTODESK DOES NOT MAKE AND HEREBY DISCLAIMS ANY EXPRESS OR IMPLIED </span></div>\n\
<div class=\"line\"><span class=\"comment\">// WARRANTIES INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF </span></div>\n\
<div class=\"line\"><span class=\"comment\">// NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// PURPOSE, OR ARISING FROM A COURSE OF DEALING, USAGE, OR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// TRADE PRACTICE. IN NO EVENT WILL AUTODESK AND/OR ITS LICENSORS </span></div>\n\
<div class=\"line\"><span class=\"comment\">// BE LIABLE FOR ANY LOST REVENUES, DATA, OR PROFITS, OR SPECIAL, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES, EVEN IF AUTODESK </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AND/OR ITS LICENSORS HAS BEEN ADVISED OF THE POSSIBILITY </span></div>\n\
<div class=\"line\"><span class=\"comment\">// OR PROBABILITY OF SUCH DAMAGES.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// NOTE: PLEASE READ THE README.TXT FILE FOR INSTRUCTIONS ON</span></div>\n\
<div class=\"line\"><span class=\"comment\">// COMPILING AND USAGE REQUIREMENTS.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: NV20-specific (Geforce3) sample shader.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              This shader can simultaneously display both decal </span></div>\n\
<div class=\"line\"><span class=\"comment\">//              (base color) and bump textures.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This shader builds on the foundation demonstrated in the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  hwUnlitShader.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Additionally, this sample demonstrates how to:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      - Use vendor-specific extensions, namely vertex programs,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//        texture shaders and register combiners, to achieve</span></div>\n\
<div class=\"line\"><span class=\"comment\">//        effects that are impossible in standard OpenGL.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      - Convert height field bump format (used by Maya) into</span></div>\n\
<div class=\"line\"><span class=\"comment\">//        a normal map format, for real-time rendering.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Many parameters are easily customizable:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      - The MNormalMapConverter::convertToNormalMap_InPlace()</span></div>\n\
<div class=\"line\"><span class=\"comment\">//        bumpScale parameter is currently constant. You can change</span></div>\n\
<div class=\"line\"><span class=\"comment\">//        it to a different value to increase or decrease the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//        bumpiness.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxHwShaderNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MTextureCache.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hwDecalBumpShader_NV20 : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html\">MPxHwShaderNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    hwDecalBumpShader_NV20();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~hwDecalBumpShader_NV20();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            releaseEverything();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span>    <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a4b373289ba4ef6bf66387e2b540cdc05\">bind</a>(<span class=\"keyword\">const</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a>&amp; request,</div>\n\
<div class=\"line\">                         <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a1add8314dc908073f9126b81dc187ce7\">unbind</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a>&amp; request,</div>\n\
<div class=\"line\">                           <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#acd6773ef64b27965c09ed584830bf8f3\">geometry</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a>&amp; request,</div>\n\
<div class=\"line\">                              <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> prim,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> writable,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> indexCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> * indexArray,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> vertexCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> * vertexIDs,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> * vertexArray,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> normalCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** normalArrays,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> colorCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** colorArrays,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> texCoordCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** texCoordArrays);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">int</span>     <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#af3550674237dc92887354c8c1aab7367\">normalsPerVertex</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">int</span>     <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a4ad8d328c883db5ee4e4141840c76394\">texCoordsPerVertex</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span> *  creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    MTextureCache   *m_pTextureCache;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            loadVertexProgramGL();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>*          computeBinormals(<span class=\"keywordtype\">int</span> indexCount, <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> * indexArray, </div>\n\
<div class=\"line\">                                     <span class=\"keywordtype\">int</span> vertexCount, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>* vertexArray, </div>\n\
<div class=\"line\">                                     <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>* normalsArray, </div>\n\
<div class=\"line\">                                     <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>* texCoordsArray);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    GLuint          vertex_program_id;      <span class=\"comment\">// handle for the Vertex Program</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            printGlError( <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *call );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            init_ext(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *ext);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         getFloat3(<a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> colorAttr, <span class=\"keywordtype\">float</span> colorValue[3]);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         getString(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> attr, <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;str);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    vec3f           lightRotation;</div>\n\
<div class=\"line\">    vec3f           cameraPos;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">boolean</span>         isDirectionalLight; <span class=\"comment\">// when light&#39;s rotation is on the lightPos attr</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  colorR;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  colorG;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  colorB;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  color;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  bumpR;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  bumpG;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  bumpB;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  bump;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  lightX;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  lightY;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  lightZ;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  light;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  cameraX;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  cameraY;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  cameraZ;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  camera;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  uCoord;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  vCoord;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  uvCoord;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  uBias;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  vBias;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  uvFilterSize;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  uvFilterSizeX;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  uvFilterSizeY;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  shininess;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  lightColorR;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  lightColorG;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  lightColorB;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  lightColor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  decalTextureName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  bumpTextureName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// CURRENTLY UNUSED:    </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  static MObject  bumpScale;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  static MObject  heightfieldMap;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Shininess value/scale, used to generate the lookup texture.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> currentShininessValue, currentShininessScale;</div>\n\
<div class=\"line\">    tex_object_2D *lookup_texture;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *lookup_table;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> lookup_texture_size;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fLookupTextureReprocessed;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the look-up texture.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// This texture encodes the diffuse (u-axis) and</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// specular (v-axis) coefficients of the blinn equation.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// This function will automatically set the fLookupTextureReprocessed</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// flag if the texture changed and need to be reloaded by OpenGL.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> make_lookup_texture();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Bind the look-up texture in the current GL texture unit.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// This function automatically calls make_lookup_texture,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// and reloads the texture in video memory if it needs to.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> bind_lookup_table();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Release the memory occupied by the look-up texture.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> release_lookup_texture();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Callbacks that we monitor so we can release OpenGL-dependant resources before</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// their context gets destroyed.</span></div>\n\
<div class=\"line\">    MCallbackId fBeforeNewCB;</div>\n\
<div class=\"line\">    MCallbackId fBeforeOpenCB;</div>\n\
<div class=\"line\">    MCallbackId fBeforeRemoveReferenceCB;</div>\n\
<div class=\"line\">    MCallbackId fMayaExitingCB;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> attachSceneCallbacks();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> detachSceneCallbacks();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> releaseCallback(<span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _hwDecalBumpShader_NV20 */</span><span class=\"preprocessor\"></span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";