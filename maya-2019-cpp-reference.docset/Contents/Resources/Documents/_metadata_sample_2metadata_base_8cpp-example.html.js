var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MetadataSample/metadataBase.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_metadata_sample_2metadata_base_8cpp-example.html\', tocPrefix);\n\
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
            <h1>MetadataSample/metadataBase.cpp</h1>\n\
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
<div class=\"title\">MetadataSample/metadataBase.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// base MEL command for multiple rep shape</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataBase.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataPluginStrings.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFileObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataAssociationsSerializer.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* flagFile                 ( <span class=\"stringliteral\">&quot;-f&quot;</span> );</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* flagFileLong             ( <span class=\"stringliteral\">&quot;-file&quot;</span> );</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* flagMetadataFormat       ( <span class=\"stringliteral\">&quot;-mf&quot;</span> );</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* flagMetadataFormatLong   ( <span class=\"stringliteral\">&quot;-metadataFormat&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_data.html\">adsk::Data</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Get the syntax information. Initializes the shared flags. Derived commands</span></div>\n\
<div class=\"line\"><span class=\"comment\">// can add on their own flags after calling this routine.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> metadataBase::cmdSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> syntax;</div>\n\
<div class=\"line\">    syntax.<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(flagMetadataFormat,  flagMetadataFormatLong, <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#ae6f2057f0d0419845a48c1eb6813f2adafab53ea4a643325262b9c140af093279\">MSyntax::kString</a>);</div>\n\
<div class=\"line\">    syntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(flagFile,            flagFileLong,           <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#ae6f2057f0d0419845a48c1eb6813f2adafab53ea4a643325262b9c140af093279\">MSyntax::kString</a>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    syntax.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a16e72b75488e20aafdc0c3c64e663bea\">useSelectionAsDefault</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    syntax.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a299f2c91c864387f1b4208e99a72631d\">setObjectType</a>(<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a72b517c34c0de9b91ce4b5342675186baf19c7ad857ee046737f2d9c08e7bb70d\">MSyntax::kSelectionList</a>, 1);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Default mode has no query or edit. Derived commands can</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// enable either if they are relevant</span></div>\n\
<div class=\"line\">    syntax.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a414088ac458bc323845634fcf7663e69\">enableQuery</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    syntax.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a2a329cd0b0d89bc1b9721c522d6d0006\">enableEdit</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> syntax;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">metadataBase::metadataBase()</div>\n\
<div class=\"line\">: fMode(kCreate)</div>\n\
<div class=\"line\">, fSerializer( (const <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html\">AssociationsSerializer</a>*)0 )</div>\n\
<div class=\"line\">, fFile( (<a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>*) 0 )</div>\n\
<div class=\"line\">, fObjects()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">metadataBase::~metadataBase()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// If a file object was created it should go away</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> fFile;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Normally data stream commands are not undoable. Derived classes can</span></div>\n\
<div class=\"line\"><span class=\"comment\">// override and provide undo information.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> metadataBase::isUndoable()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> metadataBase::hasSyntax()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Look through the arg database and verify that the arguments are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// valid. Only checks the common flags so derived classes should call</span></div>\n\
<div class=\"line\"><span class=\"comment\">// this parent method first before checking their own flags.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> metadataBase::checkArgs(<a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a>&amp; argsDb)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//----------------------------------------</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Save the command arguments and modes for undo/redo purposes.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (argsDb.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#a4712265458edf9694fbe44402bed1673\">isEdit</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (argsDb.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#a1b1e33f67db5d76acb294e295ebaad5c\">isQuery</a>())</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg = <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kEditQueryFlagErrorMsg, status);</div>\n\
<div class=\"line\">            displayError(msg);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        fMode = kEdit;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argsDb.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#a1b1e33f67db5d76acb294e295ebaad5c\">isQuery</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fMode = kQuery;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//----------------------------------------</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// -file flag</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Initialize the local file object for use if the flag is specified</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fFileFlag.parse(argsDb, flagFile);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !fFileFlag.isModeValid(fMode) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kOnlyCreateModeMsg, status);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, flagFile );</div>\n\
<div class=\"line\">        displayError(msg);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The file flag isn&#39;t mandatory so just initialize it if it exists.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fFileFlag.isSet() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! fFileFlag.isArgValid() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kInvalidFlag, status);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">            msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, flagFileLong );</div>\n\
<div class=\"line\">            displayError(msg);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        fFile = <span class=\"keyword\">new</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>();</div>\n\
<div class=\"line\">        fFile-&gt;setRawFullName( fFileFlag.arg() );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The file flag may indicate an existing file. The derived commands</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// should verify existence when required.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//----------------------------------------</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// -metadataFormat flag</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Initialize the serializer if the type is valid. Method will return</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// failure and display an informative error message if a valid</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// serialization type was not specified</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fMetadataFormatFlag.parse(argsDb, flagMetadataFormat);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !fMetadataFormatFlag.isModeValid(fMode) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kOnlyCreateModeMsg, status);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, flagFile );</div>\n\
<div class=\"line\">        displayError(msg);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Default to the internal &quot;raw&quot; format. Bit of a cheat to use this string</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// directly but there&#39;s no way to get it indirectly.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> rawFormatType( <span class=\"stringliteral\">&quot;raw&quot;</span> );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> formatType;</div>\n\
<div class=\"line\">    formatType = fMetadataFormatFlag.arg( rawFormatType );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fSerializer = AssociationsSerializer::formatByName( formatType.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( ! fSerializer )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kMetadataFormatNotFound, status);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, fMetadataFormatFlag.arg().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() );</div>\n\
<div class=\"line\">        displayError(msg);</div>\n\
<div class=\"line\">        status = MS::kNotFound;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//----------------------------------------</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (selection list)</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Commands need at least one object on which to operate so gather up</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the list of objects specified and/or selected.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Empty out the list of objects on which to operate so that it can be</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// populated from the selection or specified lists.</span></div>\n\
<div class=\"line\">    fObjects.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> objects;</div>\n\
<div class=\"line\">    status = argsDb.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html#ab7f5ceab1b932ba6670c39bc2c8f2c77\">getObjects</a>(objects);</div>\n\
<div class=\"line\">    MStatError(status, <span class=\"stringliteral\">&quot;argsDb.getObjects()&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i&lt;objects.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(); ++i)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> dgNode;</div>\n\
<div class=\"line\">        status = objects.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>(i, dgNode);</div>\n\
<div class=\"line\">        MStatError(status, <span class=\"stringliteral\">&quot;objects.getDependNode()&quot;</span>);  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fObjects.append( dgNode );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( (fObjects.length() == 0) &amp;&amp; (fMode != kQuery) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kObjectNotFoundError, status);</div>\n\
<div class=\"line\">        displayError(msg);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Check the mode information and call the appropriate virtual method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to perform the operation. It checks for all modes, even those that</span></div>\n\
<div class=\"line\"><span class=\"comment\">// might be disabled, so that it can be reused anywhere.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> metadataBase::doIt(<span class=\"keyword\">const</span> <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a> argsDb(syntax(), args, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess != status) <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = checkArgs(argsDb);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( MS::kSuccess == status )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        clearResult();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">switch</span> (fMode)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">case</span> kCreate:  status = doCreate();   <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">case</span> kEdit:    status = doEdit();     <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">case</span> kQuery:   status = doQuery();    <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Since this isn&#39;t a real command it doesn&#39;t do anything. This method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is defined anyway so that the derived commands can choose to override</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or not.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> metadataBase::doCreate()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Since this isn&#39;t a real command it doesn&#39;t do anything. This method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is defined anyway so that the derived commands can choose to override</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or not.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> metadataBase::doEdit()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Since this isn&#39;t a real command it doesn&#39;t do anything. This method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is defined anyway so that the derived commands can choose to override</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or not.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> metadataBase::doQuery()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Since this isn&#39;t a real command it doesn&#39;t do anything. This method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is defined anyway so that the derived commands can choose to override</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or not.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> metadataBase::redoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Since this isn&#39;t a real command it doesn&#39;t do anything. This method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is defined anyway so that the derived commands can choose to override</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or not.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> metadataBase::undoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";