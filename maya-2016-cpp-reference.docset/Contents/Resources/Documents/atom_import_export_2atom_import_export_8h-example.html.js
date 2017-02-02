var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>atomImportExport/atomImportExport.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'atom_import_export_2atom_import_export_8h-example.html\', tocPrefix);\n\
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
            <h1>atomImportExport/atomImportExport.h</h1>\n\
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
<div class=\"title\">atomImportExport/atomImportExport.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  File Name:  atomImportExport.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Import and exports .atom files.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef _atomImport</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _atomImport</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxFileTranslator.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MAnimCurveClipboardItemArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;atomFileUtils.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;atomCachedPlugs.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;atomAnimLayers.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomNodeNameReplacer;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomEditsHelper {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    atomEditsHelper(atomNodeNameReplacer* replacer, atomTemplateReader* templateReader): fReplacer(replacer), fTemplateReader(templateReader) {}</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~atomEditsHelper() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    atomNodeNameReplacer*   fReplacer;</div>\n\
<div class=\"line\">    atomTemplateReader*     fTemplateReader;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The atomImport command object</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomImport : <span class=\"keyword\">public</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html\">MPxFileTranslator</a> {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    atomImport ();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~atomImport (); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             doIt (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a> &amp;argList);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> *       creator ();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#ab66b1f5adee9fb511e49f5f6730a7c42\">reader</a>( <span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file,</div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; optionsString,</div>\n\
<div class=\"line\">                        FileAccessMode mode);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a5bdde07c444bcc490367efe4f3424ade\">haveReadMethod</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>        <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#ab58322cfe1d3437d3fc627be3a49121c\">haveWriteMethod</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>        <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a21cb60f2121ebce3f21367325c940fbc\">canBeOpened</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a48074cfa41f4caf87bfa0bc533ea6f25\">defaultExtension</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> MFileKind   <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a109c18b551ef7c162399326799ab67e6\">identifyFile</a>(   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; fileName,</div>\n\
<div class=\"line\">                                        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* buffer,</div>\n\
<div class=\"line\">                                        <span class=\"keywordtype\">short</span> size) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>         connectionFailedCallback(<a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; srcPlug,</div>\n\
<div class=\"line\">                                                 <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; dstPlug,</div>\n\
<div class=\"line\">                                                 <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; srcName,</div>\n\
<div class=\"line\">                                                 <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; dstName,</div>\n\
<div class=\"line\">                                                 <span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             importAnim(<a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;list,ifstream&amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;, atomNodeNameReplacer &amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;,</div>\n\
<div class=\"line\">                                    atomTemplateReader &amp;, <span class=\"keywordtype\">bool</span> replaceLayers);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span>         replaceNameAndFindPlug(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;,</div>\n\
<div class=\"line\">                                               atomNodeNameReplacer&amp;,</div>\n\
<div class=\"line\">                                               <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span>         checkPlugAgainstTemplate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;,</div>\n\
<div class=\"line\">                                                 <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;,</div>\n\
<div class=\"line\">                                                 atomTemplateReader*);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    atomReader          fReader;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomWriter;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The atomImport command object</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomExport : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html\">MPxFileTranslator</a> {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    atomExport ();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~atomExport (); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> *       creator ();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a7d2e676fd6823e199ba4fe1da95098ac\">writer</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file,</div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; optionsString,</div>\n\
<div class=\"line\">                        FileAccessMode mode );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a5bdde07c444bcc490367efe4f3424ade\">haveReadMethod</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#ab58322cfe1d3437d3fc627be3a49121c\">haveWriteMethod</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a48074cfa41f4caf87bfa0bc533ea6f25\">defaultExtension</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> MFileKind   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a109c18b551ef7c162399326799ab67e6\">identifyFile</a>(   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; fileName,</div>\n\
<div class=\"line\">                                        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* buffer,</div>\n\
<div class=\"line\">                                        <span class=\"keywordtype\">short</span> size) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             exportSelected( ofstream&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;,</div>\n\
<div class=\"line\">                                        std::set&lt;std::string&gt; &amp;attrStrings,<span class=\"keywordtype\">bool</span> includeChildren, </div>\n\
<div class=\"line\">                                        <span class=\"keywordtype\">bool</span> useSpecifiedTimes, <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;startTime,</div>\n\
<div class=\"line\">                                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;endTime,</div>\n\
<div class=\"line\">                                        <span class=\"keywordtype\">bool</span> statics, <span class=\"keywordtype\">bool</span> cached, <span class=\"keywordtype\">bool</span> sdk, <span class=\"keywordtype\">bool</span> constraint, <span class=\"keywordtype\">bool</span> layers,</div>\n\
<div class=\"line\">                                        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; exportEditsFile,</div>\n\
<div class=\"line\">                                        atomTemplateReader &amp;reader);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                writeStaticAndCached (<a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> &amp;animtablePlugs, atomCachedPlugs *cachedPlugs,<span class=\"keywordtype\">bool</span> statics, <span class=\"keywordtype\">bool</span> cached,ofstream &amp;animFile, </div>\n\
<div class=\"line\">                                    std::set&lt;std::string&gt; &amp;attrStrings,</div>\n\
<div class=\"line\">                                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depth,</div>\n\
<div class=\"line\">                                    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> childCount,<span class=\"keywordtype\">bool</span> &amp;hasAnimatable,</div>\n\
<div class=\"line\">                                    atomTemplateReader &amp;reader);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             writeAnimCurves(ofstream &amp;animFile,<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName,atomCachedPlugs *cachedPlugs,atomNodeWithAnimLayers *layerPlugs,</div>\n\
<div class=\"line\">                                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;command, <span class=\"keywordtype\">bool</span> &amp;haveAnimatedCurves, atomTemplateReader &amp;reader);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                setUpCache(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;sList,  std::vector&lt;atomCachedPlugs *&gt; &amp;cachedPlugs,atomAnimLayers &amp;animLayers,</div>\n\
<div class=\"line\">                                    <span class=\"keywordtype\">bool</span> sdk, <span class=\"keywordtype\">bool</span> constraint, <span class=\"keywordtype\">bool</span> layers,</div>\n\
<div class=\"line\">                                    std::set&lt;std::string&gt; &amp;attrStrings, atomTemplateReader &amp;templateReader,</div>\n\
<div class=\"line\">                                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;startTime, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;endTime,<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html#abceb2331ad056e3c5ad27894199a49ed\">MAngle::Unit</a> angularUnit,</div>\n\
<div class=\"line\">                                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a> linearUnit);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                setUpAnimLayers(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;sList,atomAnimLayers &amp;animLayers, </div>\n\
<div class=\"line\">                                    std::vector&lt;atomNodeWithAnimLayers *&gt; &amp;nodesWithAnimLayers,</div>\n\
<div class=\"line\">                                    std::set&lt;std::string&gt; &amp;attrStrings, atomTemplateReader &amp;templateReader);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//MStatus               writeSetDrivenKeys(ofstream &amp;animFile, MFnDependencyNode &amp;fnNode,MString &amp;name, bool &amp;hasSetDrivenKey);</span></div>\n\
<div class=\"line\">    atomWriter          fWriter;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";