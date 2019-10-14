var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>fileIOMsgCmd/fileIOMsgCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'file_i_o_msg_cmd_2file_i_o_msg_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>fileIOMsgCmd/fileIOMsgCmd.cpp</h1>\n\
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
<div class=\"title\">fileIOMsgCmd/fileIOMsgCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">/* </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    file : fileIOMsgCmd.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">    class: PreLoad</span></div>\n\
<div class=\"line\"><span class=\"comment\">    ----------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">    This is an example to demonstrate the usages of :</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    MString MFileIO::beforeImportFile(MStatus*); </span></div>\n\
<div class=\"line\"><span class=\"comment\">    MString MFileIO::beforeOpenFile(MStatus*);</span></div>\n\
<div class=\"line\"><span class=\"comment\">    MString MFileIO::beforeExportFile(MStatus*);</span></div>\n\
<div class=\"line\"><span class=\"comment\">    MString MFileIO::beforeReferenceFile(MStatus*);</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    Return value of MS::kSuccess indicates correct value returns</span></div>\n\
<div class=\"line\"><span class=\"comment\">        </span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSceneMessage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMessage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFileIO.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MCallbackIdArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PreLoad : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        <span class=\"comment\">// callback functions.</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> preOpenFunc(<span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> preImportFunc(<span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> preSaveFunc(<span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> preExportFunc(<span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> preReferenceFunc(<span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; ) <span class=\"keyword\">override</span>;       </div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> *creator();</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html\">MCallbackIdArray</a>&amp; getCallbackIds();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">        <span class=\"comment\">//callback ids .. used later for removal</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html\">MCallbackIdArray</a> ids;    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html\">MCallbackIdArray</a> PreLoad::ids;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is the call back function at Pre Import stage.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> PreLoad::preOpenFunc(<span class=\"keywordtype\">void</span>* clientData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg = <span class=\"stringliteral\">&quot;FILE TO BE OPENED IS &quot;</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> file = <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#aef9e16e5aaa53ea12b5e9df1ddbff7ec\">MFileIO::beforeOpenFilename</a>(&amp;status);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"comment\">// check the status and then append accordingly</span></div>\n\
<div class=\"line\">    msg +=  ( status == MS::kSuccess) ? file : <span class=\"stringliteral\">&quot;ERROR: Could not be retrieved&quot;</span> ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(msg);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is the call back function at Pre Import stage.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> PreLoad::preImportFunc(<span class=\"keywordtype\">void</span>* clientData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg = <span class=\"stringliteral\">&quot;PRE IMPORT FILE IS &quot;</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> file = <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a78fa4e509bf5fbfcfc043b8d2ce99941\">MFileIO::beforeImportFilename</a>(&amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// check the status and then append accordingly</span></div>\n\
<div class=\"line\">    msg +=  ( status == MS::kSuccess) ? file : <span class=\"stringliteral\">&quot;ERROR: Could not be retrieved&quot;</span> ;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(msg);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is the call back function at Pre Save stage.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> PreLoad::preSaveFunc(<span class=\"keywordtype\">void</span>* clientData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg = <span class=\"stringliteral\">&quot;FILE TO BE SAVED IS&quot;</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> file = <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#afb255ea17e6d6d3493d5ca35de3ec153\">MFileIO::beforeSaveFilename</a>(&amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//check the status and then append accordingly</span></div>\n\
<div class=\"line\">    msg +=  ( status == MS::kSuccess) ? file : <span class=\"stringliteral\">&quot;ERROR: File name could not be retrieved&quot;</span> ;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(msg);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is the call back function at Pre Export stage.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> PreLoad::preExportFunc(<span class=\"keywordtype\">void</span>* clientData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg = <span class=\"stringliteral\">&quot;FILE TO BE EXPORTED IS&quot;</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> file = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#afb255ea17e6d6d3493d5ca35de3ec153\">MFileIO::beforeSaveFilename</a>(&amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">     <span class=\"comment\">// check the status and then append accordingly</span></div>\n\
<div class=\"line\">    msg +=  ( status == MS::kSuccess) ? file : <span class=\"stringliteral\">&quot;ERROR: File name could not be retrieved&quot;</span> ;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(msg);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is the call back function at Pre Reference stage.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> PreLoad::preReferenceFunc(<span class=\"keywordtype\">void</span>* clientData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg = <span class=\"stringliteral\">&quot;FILE TO BE REFERENCED IS&quot;</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> file = <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a0f01067a20efef89ef6ab6f9db378445\">MFileIO::beforeReferenceFilename</a>(&amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//check the status and then append accordingly</span></div>\n\
<div class=\"line\">    msg +=  ( status == MS::kSuccess) ? file : <span class=\"stringliteral\">&quot;ERROR: File name could not be retrieved&quot;</span> ;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(msg);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> PreLoad::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(<span class=\"stringliteral\">&quot;PLUGIN LOADED&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// add the function call backs</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// and store call back ids for removal later</span></div>\n\
<div class=\"line\">    ids.append(<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a44771b834e9a0ad7291ecdcc880106fe\">MSceneMessage::addCallback</a> ( <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a4f09127c805cc1f5ee20e67db7b45efaac4fe9e5e85e4e962ca0366226b012d6f\">MSceneMessage::kBeforeOpen</a>, preOpenFunc )) ;</div>\n\
<div class=\"line\">    ids.append(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a44771b834e9a0ad7291ecdcc880106fe\">MSceneMessage::addCallback</a> ( <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a4f09127c805cc1f5ee20e67db7b45efaaca52e06bb3379b66c9f632fc6c075b76\">MSceneMessage::kBeforeImport</a>, preImportFunc )) ;</div>\n\
<div class=\"line\">    ids.append(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a44771b834e9a0ad7291ecdcc880106fe\">MSceneMessage::addCallback</a> ( <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a4f09127c805cc1f5ee20e67db7b45efaa9bd0d2b2b694347905d4a06c40e09904\">MSceneMessage::kBeforeSave</a>, preSaveFunc )) ;</div>\n\
<div class=\"line\">    ids.append(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a44771b834e9a0ad7291ecdcc880106fe\">MSceneMessage::addCallback</a> ( <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a4f09127c805cc1f5ee20e67db7b45efaa18ceadb3bb295f463cf852a2a627ee40\">MSceneMessage::kBeforeExport</a>, preExportFunc )) ;</div>\n\
<div class=\"line\">    ids.append(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a44771b834e9a0ad7291ecdcc880106fe\">MSceneMessage::addCallback</a> ( <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a4f09127c805cc1f5ee20e67db7b45efaa4dd3ce103f2a1a12d324d9868473de97\">MSceneMessage::kBeforeReference</a>, preReferenceFunc )) ;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status ; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* PreLoad::creator() </div>\n\
<div class=\"line\">{   </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> PreLoad;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html\">MCallbackIdArray</a>&amp; PreLoad::getCallbackIds()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ids;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// standard initialize and uninitialize functions</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> pluginFn(obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;6.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    status = pluginFn.registerCommand(<span class=\"stringliteral\">&quot;fileIOMsgCmd&quot;</span>, PreLoad::creator);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !status)</div>\n\
<div class=\"line\">        status.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;register Command failed&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> pluginFn(obj);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">//remove call backs</span></div>\n\
<div class=\"line\">    <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_message.html#ac637287cc26b707b9e1a175a32f44e29\">MMessage::removeCallbacks</a>(PreLoad::getCallbackIds());</div>\n\
<div class=\"line\">    status = pluginFn.deregisterCommand( <span class=\"stringliteral\">&quot;fileIOMsgCmd&quot;</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";