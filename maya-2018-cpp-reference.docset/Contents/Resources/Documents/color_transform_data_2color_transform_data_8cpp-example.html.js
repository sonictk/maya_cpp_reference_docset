var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>colorTransformData/colorTransformData.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'color_transform_data_2color_transform_data_8cpp-example.html\', tocPrefix);\n\
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
            <h1>colorTransformData/colorTransformData.cpp</h1>\n\
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
<div class=\"title\">colorTransformData/colorTransformData.cpp</div>  </div>\n\
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
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Example Plugin: colorTransformData.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plugin is an example of a file translator that extracts a scene&#39;s color management information.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFileObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDependencyNodes.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxFileTranslator.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MColorManagementUtilities.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>colorTransformDataTranslator : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html\">MPxFileTranslator</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a5bdde07c444bcc490367efe4f3424ade\">haveReadMethod</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#ab58322cfe1d3437d3fc627be3a49121c\">haveWriteMethod</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a48074cfa41f4caf87bfa0bc533ea6f25\">defaultExtension</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a7d2e676fd6823e199ba4fe1da95098ac\">writer</a>(</div>\n\
<div class=\"line\">                    <span class=\"keyword\">const</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file,</div>\n\
<div class=\"line\">                    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; options,</div>\n\
<div class=\"line\">                    FileAccessMode mode</div>\n\
<div class=\"line\">                ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>     setPluginName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>  translatorName();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> getInputColorSpace(<span class=\"keyword\">const</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; <span class=\"keywordtype\">object</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeColorSpaceForNodes(fstream&amp; f);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeColorTransformData(fstream&amp; f);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeOutputTransformId(fstream&amp; f);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>  fExtension;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>  fFileVersion;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>  fPluginName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>  fTranslatorName;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> colorTransformDataTranslator::fFileVersion = <span class=\"stringliteral\">&quot;1.0&quot;</span>;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> colorTransformDataTranslator::fExtension = <span class=\"stringliteral\">&quot;ctd&quot;</span>;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> colorTransformDataTranslator::fPluginName = <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> colorTransformDataTranslator::fTranslatorName = <span class=\"stringliteral\">&quot;Maya Color Management Data&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//*************************************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> colorTransformDataTranslator::defaultExtension()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{   <span class=\"keywordflow\">return</span> fExtension;      }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> colorTransformDataTranslator::haveReadMethod()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{   <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;           }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> colorTransformDataTranslator::haveWriteMethod()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{   <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">void</span> colorTransformDataTranslator::setPluginName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name)</div>\n\
<div class=\"line\">{   fPluginName = name;     }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> colorTransformDataTranslator::translatorName()</div>\n\
<div class=\"line\">{   <span class=\"keywordflow\">return</span> fTranslatorName; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* colorTransformDataTranslator::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> colorTransformDataTranslator();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Maya calls this method to have the translator write out a file.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> colorTransformDataTranslator::writer(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; <span class=\"comment\">/* options */</span>,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417\">MPxFileTranslator::FileAccessMode</a> mode</div>\n\
<div class=\"line\">)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// For simplicity, we only do full saves/exports.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((mode != kSaveAccessMode) &amp;&amp; (mode != kExportAccessMode))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kNotImplemented;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Let&#39;s see if we can open the output file.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fstream output(file.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html#a7a1c6f1f04d612d126a4e7512ab62ca7\">fullName</a>().<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), ios::out | ios::trunc);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!output.good()) <span class=\"keywordflow\">return</span> MS::kNotFound;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    writeColorSpaceForNodes(output);</div>\n\
<div class=\"line\">    writeOutputTransformId(output);</div>\n\
<div class=\"line\">    writeColorTransformData(output);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    output.close();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Utility method to retrieve from a node its color space attribute.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> colorTransformDataTranslator::getInputColorSpace(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; <span class=\"keywordtype\">object</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> inputColorSpace;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(!<span class=\"keywordtype\">object</span>.isNull() &amp;&amp; </div>\n\
<div class=\"line\">       ( (<span class=\"keywordtype\">object</span>.apiType()==<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ac3bee92500cdc3a4ccbec4cb35e91f2a\">MFn::kFileTexture</a>) || (<span class=\"keywordtype\">object</span>.apiType()==<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a6efef0262eb038b0a8924d3b38128a5b\">MFn::kImagePlane</a>) ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> texNode(<span class=\"keywordtype\">object</span>, &amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(status)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* <span class=\"keyword\">const</span> colorSpaceStr = <span class=\"stringliteral\">&quot;colorSpace&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug = texNode.findPlug(colorSpaceStr, &amp;status);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (status &amp;&amp; !plug.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ab7ec149d38b7c29ca55c5aa7b407d8f9\">isNull</a>())</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                plug.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ab017c746e6e0c13bf994b2458d3b5eee\">getValue</a>(inputColorSpace);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> inputColorSpace;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> colorTransformDataTranslator::writeColorSpaceForNodes(fstream&amp; f)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_nodes.html\">MItDependencyNodes</a>  nodeIter;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    f &lt;&lt; <span class=\"stringliteral\">&quot;====================== Nodes with color space attribute =======================\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (; !nodeIter.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_nodes.html#a8b6dbf6fbab6f4e7bf50a309124cbf4c\">isDone</a>(); nodeIter.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_nodes.html#a73616f002814b8abe6d921db72d7a496\">next</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>             node = nodeIter.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_nodes.html#a4b34a109bcef556096df6059416f9e5f\">item</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(!node.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a>() &amp;&amp; </div>\n\
<div class=\"line\">           ( (node.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a7e5fd5d37dde6df8c0cf350e00ca0a75\">apiType</a>()==<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ac3bee92500cdc3a4ccbec4cb35e91f2a\">MFn::kFileTexture</a>) || (node.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a7e5fd5d37dde6df8c0cf350e00ca0a75\">apiType</a>()==<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a6efef0262eb038b0a8924d3b38128a5b\">MFn::kImagePlane</a>) ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">          <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> inputColorSpace = getInputColorSpace(node);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">          <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> transformId;</div>\n\
<div class=\"line\">          </div>\n\
<div class=\"line\">          f &lt;&lt; <span class=\"stringliteral\">&quot;Found node with colorspace &quot;</span> &lt;&lt; inputColorSpace.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a9b62657aaecded5f56277d2c407ec64e\">asUTF8</a>();</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">if</span>(<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities.html#a3948287742813f6a88a1424bc521cf9b\">MColorManagementUtilities::getColorTransformCacheIdForInputSpace</a>(</div>\n\
<div class=\"line\">                 inputColorSpace, transformId))</div>\n\
<div class=\"line\">          {</div>\n\
<div class=\"line\">              f &lt;&lt; <span class=\"stringliteral\">&quot;, its corresponding transform id: &quot;</span> &lt;&lt; transformId.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a9b62657aaecded5f56277d2c407ec64e\">asUTF8</a>() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">          }</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">          {</div>\n\
<div class=\"line\">              f &lt;&lt; <span class=\"stringliteral\">&quot;, no corresponding transform id found.\\n&quot;</span>;</div>\n\
<div class=\"line\">          }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> colorTransformDataTranslator::writeColorTransformData(fstream&amp; f)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    f &lt;&lt; <span class=\"stringliteral\">&quot;============================ Color Transform Data =============================\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities.html#a70f7c1528266267004ff7b7ff1f54d58\">MColorManagementUtilities::isColorManagementAvailable</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">      <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\">MColorManagementUtilities::MColorTransformData</a> colorTransformData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      f &lt;&lt; <span class=\"stringliteral\">&quot;Data block size: &quot;</span> &lt;&lt; colorTransformData.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#a02d751e4c308cd6396e62e68a71b702c\">getSize</a>() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">      f.write(static_cast&lt;const char*&gt;(colorTransformData.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#aa8a760d91a442deaa2cf5d0addd8176b\">getData</a>()), colorTransformData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#a02d751e4c308cd6396e62e68a71b702c\">getSize</a>());</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">      f &lt;&lt; <span class=\"stringliteral\">&quot;Color management functionality is not available\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    f &lt;&lt; <span class=\"stringliteral\">&quot;\\n===============================================================================\\n&quot;</span>;</div>\n\
<div class=\"line\">}  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> colorTransformDataTranslator::writeOutputTransformId(fstream&amp; f)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    f &lt;&lt; <span class=\"stringliteral\">&quot;============================ Output Transform Id =============================\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> transformId;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities.html#a3e64e5581da3b9e03a49953f62e74ad0\">MColorManagementUtilities::getColorTransformCacheIdForOutputTransform</a>(transformId))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        f &lt;&lt; <span class=\"stringliteral\">&quot;Output transform id: &quot;</span> &lt;&lt; transformId.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a9b62657aaecded5f56277d2c407ec64e\">asUTF8</a>() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        f &lt;&lt; <span class=\"stringliteral\">&quot;No output transform id found.\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//*************************************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    colorTransformDataTranslator::setPluginName(plugin.name());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    plugin.registerFileTranslator(</div>\n\
<div class=\"line\">        colorTransformDataTranslator::translatorName(),</div>\n\
<div class=\"line\">        NULL,</div>\n\
<div class=\"line\">        colorTransformDataTranslator::creator,</div>\n\
<div class=\"line\">        NULL,</div>\n\
<div class=\"line\">        NULL,</div>\n\
<div class=\"line\">        <span class=\"keyword\">false</span></div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    plugin.deregisterFileTranslator(colorTransformDataTranslator::translatorName());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";