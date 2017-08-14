var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>atomImportExport/atomFileUtils.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'atom_import_export_2atom_file_utils_8h-example.html\', tocPrefix);\n\
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
            <h1>atomImportExport/atomFileUtils.h</h1>\n\
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
<div class=\"title\">atomImportExport/atomFileUtils.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  File Name:  atomFileUtils.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Utility classes to read and write .atom files.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef _atomFileUtils</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _atomFileUtils</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;set&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnAnimCurve.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MAngle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDistance.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MAnimUtil.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnUnitAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDGContext.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnAnimCurve.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;atomNodeNameReplacer.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomTemplateReader;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomLayerClipboard;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//class to handle getting selected objects in the proper breadth first order</span></div>\n\
<div class=\"line\"><span class=\"comment\">//which let&#39;s us consistently </span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SelectionGetter</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>                     getSelectedObjects(<span class=\"keywordtype\">bool</span> selectedChildren,<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;list, std::vector&lt;unsigned int&gt; &amp;depths);</div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    SelectionGetter(){}; <span class=\"comment\">//all static funcs</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomCachedPlugs;</div>\n\
<div class=\"line\"><span class=\"comment\">// The base class for the translators.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomBase : <span class=\"keyword\">public</span> streamIO  {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">//statics @todo, if we make this OO need to find a better place for these guys</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span>                     isEquivalent(<span class=\"keywordtype\">double</span>, <span class=\"keywordtype\">double</span>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span>                     getPlug(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;attributeName, <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>                     getAttrName(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;attributeName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    atomBase();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~atomBase();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> AnimBaseType           {kAnimBaseUnitless, kAnimBaseTime,</div>\n\
<div class=\"line\">                                    kAnimBaseLinear, kAnimBaseAngular};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *                tangentTypeAsWord(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a6b26eee66e19b558a138d0c009653e51\">MFnAnimCurve::TangentType</a>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a6b26eee66e19b558a138d0c009653e51\">MFnAnimCurve::TangentType</a>   wordAsTangentType(<span class=\"keywordtype\">char</span> *);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *                infinityTypeAsWord(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#aca9c5942b5d67122821becf05ef739a4\">MFnAnimCurve::InfinityType</a>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#aca9c5942b5d67122821becf05ef739a4\">MFnAnimCurve::InfinityType</a>  wordAsInfinityType(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *                outputTypeAsWord(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a93c9cae782f401790431a8f034193f27\">MFnAnimCurve::AnimCurveType</a>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a93c9cae782f401790431a8f034193f27\">MFnAnimCurve::AnimCurveType</a> typeAsAnimCurveType(AnimBaseType,</div>\n\
<div class=\"line\">                                                    AnimBaseType);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    AnimBaseType                wordAsOutputType(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *);</div>\n\
<div class=\"line\">    AnimBaseType                wordAsInputType(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *                boolInputTypeAsWord(<span class=\"keywordtype\">bool</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html#abceb2331ad056e3c5ad27894199a49ed\">MAngle::Unit</a>                getAngularUnit(){<span class=\"keywordflow\">return</span> angularUnit;}</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a>             getLinearUnit(){<span class=\"keywordflow\">return</span> linearUnit;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a>             getOldDistanceUnit(){<span class=\"keywordflow\">return</span> mOldDistanceUnit;}</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49ed\">MTime::Unit</a>                 getOldTimeUnit(){<span class=\"keywordflow\">return</span> mOldTimeUnit;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a>                       getStartTime(){<span class=\"keywordflow\">return</span> mStartTime;}</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a>                       getEndTime(){<span class=\"keywordflow\">return</span> mEndTime;}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>                      getStartUnitless(){<span class=\"keywordflow\">return</span> mStartUnitless;}</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>                      getEndUnitless(){<span class=\"keywordflow\">return</span> mEndUnitless;}</div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                        resetUnits();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a>                       mStartTime;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a>                       mEndTime;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>                      mStartUnitless;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>                      mEndUnitless;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a>             mOldDistanceUnit;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49ed\">MTime::Unit</a>                 mOldTimeUnit;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49ed\">MTime::Unit</a>                 timeUnit;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html#abceb2331ad056e3c5ad27894199a49ed\">MAngle::Unit</a>                angularUnit;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a>             linearUnit;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomReader : <span class=\"keyword\">public</span> atomBase {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    atomReader();</div>\n\
<div class=\"line\">    ~atomReader() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//new</span></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readAtom(ifstream &amp;, atomLayerClipboard &amp;atomClipboard, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;mList,atomNodeNameReplacer &amp; replacer, </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; exportEditsFile,<span class=\"keywordtype\">bool</span> &amp;removeExportEditsFile, atomTemplateReader &amp;reader, <span class=\"keywordtype\">bool</span> replaceLayers);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setImportFrameRange( <span class=\"keywordtype\">double</span> pImportStartFrame, <span class=\"keywordtype\">double</span> pImportEndFrame ) </div>\n\
<div class=\"line\">    { </div>\n\
<div class=\"line\">        mImportStartFrame       = pImportStartFrame; </div>\n\
<div class=\"line\">        mImportEndFrame         = pImportEndFrame; </div>\n\
<div class=\"line\">        mImportCustomFrameRange = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> clearImportFrameRange() </div>\n\
<div class=\"line\">    {  </div>\n\
<div class=\"line\">        mImportCustomFrameRange = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readAnimCurve(ifstream&amp;, <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_anim_curve_clipboard_item.html\">MAnimCurveClipboardItem</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    convertAnglesAndWeights2To3(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a93c9cae782f401790431a8f034193f27\">MFnAnimCurve::AnimCurveType</a>, <span class=\"keywordtype\">bool</span>,</div>\n\
<div class=\"line\">                                        <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html\">MAngle</a> &amp;, <span class=\"keywordtype\">double</span> &amp;);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    convertAnglesAndWeights3To2(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a93c9cae782f401790431a8f034193f27\">MFnAnimCurve::AnimCurveType</a>, <span class=\"keywordtype\">bool</span>,</div>\n\
<div class=\"line\">                                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html\">MAngle</a> &amp;, <span class=\"keywordtype\">double</span> &amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> *  readStaticValue(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName,<span class=\"keywordtype\">char</span> *dataType, </div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depth, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> childCount,ifstream &amp;readAnim,</div>\n\
<div class=\"line\">            atomLayerClipboard &amp;cb, atomTemplateReader &amp;reader);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> * readHeader(ifstream &amp;readAnim, <span class=\"keywordtype\">bool</span> &amp;hasVersionString,<span class=\"keywordtype\">double</span> &amp;startTime, <span class=\"keywordtype\">double</span> &amp;endTime, <span class=\"keywordtype\">double</span> &amp;startUnitless, <span class=\"keywordtype\">double</span> &amp;endUnitless);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> *  readExportEditsFile(<span class=\"keywordtype\">char</span>*, ifstream&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; filename,<span class=\"keywordtype\">bool</span> &amp;removeExportEditsFile);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> *  readExportEditsFilePresent(<span class=\"keywordtype\">char</span>*, ifstream&amp;, <span class=\"keywordtype\">bool</span> &amp;present, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;filename);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readAnim(ifstream&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_anim_curve_clipboard_item.html\">MAnimCurveClipboardItem</a>&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readNodes(<span class=\"keywordtype\">char</span> *dataType,ifstream &amp;readAnim, atomLayerClipboard &amp;cb,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;mList, atomNodeNameReplacer &amp; replacer,atomTemplateReader &amp;reader,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> replaceLayers, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; exportEditsFile,<span class=\"keywordtype\">bool</span> &amp;removeExportEditsFile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> *skipToNextParenth(<span class=\"keywordtype\">char</span> *dataType, ifstream &amp;readAnim,<span class=\"keywordtype\">int</span> parenthCount = 1);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> * readCachedValues(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName,<span class=\"keywordtype\">char</span> *dataType, </div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depth, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> childCount,ifstream &amp;readAnim,</div>\n\
<div class=\"line\">            atomLayerClipboard &amp;cb,atomTemplateReader &amp;reader);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> * putCachedOnAnimCurve(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName,<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;attributeName,<span class=\"keywordtype\">char</span> *dataType, ifstream &amp;readAnim, </div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug,<a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html\">MFnAnimCurve</a> &amp;curve);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    addDynamicAttributeIfNeeded(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; nodeName,</div>\n\
<div class=\"line\">                                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; attributeName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    convertAnglesFromV2To3;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    convertAnglesFromV3To2;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> mImportStartFrame;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> mImportEndFrame;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>   mImportCustomFrameRange;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>  animVersion;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomWriter : <span class=\"keyword\">public</span> atomBase {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    atomWriter();</div>\n\
<div class=\"line\">    ~atomWriter() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">//note that this also sets the start and endtime for the write</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    writeHeader(ofstream&amp;,<span class=\"keywordtype\">bool</span> useSpedifiedTimes,<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;startTime, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> &amp;endTime);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    writeExportEditsFile(ofstream&amp;,<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; filename);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    writeExportEditsFilePresent(ofstream&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> writeClipboard( ofstream&amp;, <span class=\"keyword\">const</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_anim_curve_clipboard.html\">MAnimCurveClipboard</a>&amp;, atomCachedPlugs *cachedPlugs,<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;layerName, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                writeStaticValues (</div>\n\
<div class=\"line\">                            ofstream &amp;animFile,</div>\n\
<div class=\"line\">                            <span class=\"keyword\">const</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> &amp;animatablePlugs,</div>\n\
<div class=\"line\">                            std::set&lt;std::string&gt; &amp;attrStrings, <span class=\"comment\">//if this is empty then write out all statics, otherwise only write out these attributes</span></div>\n\
<div class=\"line\">                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName,</div>\n\
<div class=\"line\">                            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depth,</div>\n\
<div class=\"line\">                            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> childCount,</div>\n\
<div class=\"line\">                            atomTemplateReader &amp;templateReader</div>\n\
<div class=\"line\">                        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                writeCachedValues (</div>\n\
<div class=\"line\">                            ofstream &amp;animFile,</div>\n\
<div class=\"line\">                            atomCachedPlugs *cachedPlugs,</div>\n\
<div class=\"line\">                            std::set&lt;std::string&gt; &amp;attrStrings, <span class=\"comment\">//if this is empty then write out all statics, otherwise only write out these attributes</span></div>\n\
<div class=\"line\">                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName,</div>\n\
<div class=\"line\">                            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depth,</div>\n\
<div class=\"line\">                            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> childCount,</div>\n\
<div class=\"line\">                            atomTemplateReader &amp;templateReader</div>\n\
<div class=\"line\">                        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                writeNodeStart(ofstream&amp;,atomNodeNameReplacer::NodeType nodeType, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depth =0, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> childCount =0);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                writeNodeEnd(ofstream&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    writeAnim(  ofstream&amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_anim_curve_clipboard_item.html\">MAnimCurveClipboardItem</a>&amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;layerName, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    writeAnimCurve( ofstream&amp;, <span class=\"keyword\">const</span> <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> *, </div>\n\
<div class=\"line\">                            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a93c9cae782f401790431a8f034193f27\">MFnAnimCurve::AnimCurveType</a>,</div>\n\
<div class=\"line\">                            <span class=\"keywordtype\">bool</span> = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    writeValue(ofstream &amp; clip,<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomUnitNames {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    atomUnitNames();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~atomUnitNames();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> setToLongName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html#abceb2331ad056e3c5ad27894199a49ed\">MAngle::Unit</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> setToShortName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html#abceb2331ad056e3c5ad27894199a49ed\">MAngle::Unit</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> setToLongName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> setToShortName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> setToLongName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49ed\">MTime::Unit</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> setToShortName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49ed\">MTime::Unit</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span> setFromName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_angle.html#abceb2331ad056e3c5ad27894199a49ed\">MAngle::Unit</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span> setFromName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_distance.html#abceb2331ad056e3c5ad27894199a49ed\">MDistance::Unit</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span> setFromName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49ed\">MTime::Unit</a>&amp;);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomTemplateReader</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    atomTemplateReader():fTemplateSet(false){}</div>\n\
<div class=\"line\">    ~atomTemplateReader();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setTemplate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;templateName,<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;viewName);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> findNode(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> findNodeAndAttr(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name,<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;attr);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> attributesForNode(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>  &amp;name);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> selectNodes();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isTemplateSet(){<span class=\"keywordflow\">return</span> fTemplateSet;}</div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fTemplateSet; <span class=\"comment\">//if false not set so no checks.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>Attrs</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        ~Attrs() {fAttrStrings.clear();}</div>\n\
<div class=\"line\">        std::set&lt;std::string&gt; fAttrStrings;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::map&lt; std::string, Attrs  &gt; AttrMap;</div>\n\
<div class=\"line\">    AttrMap fNodeAttrs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _atomFileUtils */</span><span class=\"preprocessor\"></span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";