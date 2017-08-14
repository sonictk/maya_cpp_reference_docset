var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>referenceQueryCmd/referenceQueryCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'reference_query_cmd_2reference_query_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>referenceQueryCmd/referenceQueryCmd.cpp</h1>\n\
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
<div class=\"title\">referenceQueryCmd/referenceQueryCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;referenceQuery&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example provides useful information about referenced files</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the main scene. For each referenced file, the output format is as follows:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Referenced File: filename1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Connections Made</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      sourceAttribute -&gt; destinationAttribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      ...</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Connections Broken</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      sourceAttribute -&gt; destinationAttribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      ...</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Attributes Changed Since File Referenced</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      attribute1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      attribute2</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      ...</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use the plug-in:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (1) Open a scene file that contains file references.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (2) Execute the MEL command &quot;referenceQuery&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The reference information is written to standard output. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFileIO.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>referenceQuery : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a> { </div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        referenceQuery();</div>\n\
<div class=\"line\">                    ~referenceQuery() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a> &amp; ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a2f6c567cc02d575ab14006d9c5e37761\">isUndoable</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>      <span class=\"keywordtype\">void</span>   *creator();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">referenceQuery::referenceQuery()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">referenceQuery::~referenceQuery()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> *referenceQuery::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> referenceQuery;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> referenceQuery::isUndoable()<span class=\"keyword\"> const </span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> referenceQuery::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a> &amp;  )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> referenceFiles;</div>\n\
<div class=\"line\">    <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a863d52b0f9e690c0a165cb7faf085cce\">MFileIO::getReferences</a>( referenceFiles );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Print some useful information about the files referenced</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// in the main scene.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Output format is as follows:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Referenced File: filename1</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Connections Made</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          source -&gt; destination</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          ...</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Connections Broken</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          source -&gt;destination</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          ...</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Attributes Changed Since File Referenced</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          attribute1</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          attribute2</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          ...</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> i = 0; i &lt; referenceFiles.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++ ) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>    connectionsMade;</div>\n\
<div class=\"line\">        <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#ab1411c8d03c47f440228f0f2e8dba8c2\">MFileIO::getReferenceConnectionsMade</a>( referenceFiles[i],</div>\n\
<div class=\"line\">                                              connectionsMade );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;Referenced File: &quot;</span> &lt;&lt; referenceFiles[i].asChar() &lt;&lt; <span class=\"stringliteral\">&quot;:\\n&quot;</span>;</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;   Connections Made:\\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> j;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( j = 0; j &lt; connectionsMade.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); j+=2 ) {</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;   &quot;</span>;</div>\n\
<div class=\"line\">            cout &lt;&lt; connectionsMade[j].asChar() &lt;&lt; <span class=\"stringliteral\">&quot; -&gt; &quot;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( j + 1 &lt; connectionsMade.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>() ) {</div>\n\
<div class=\"line\">                cout &lt;&lt; connectionsMade[j+1].asChar();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span> ;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>    connectionsBroken;</div>\n\
<div class=\"line\">        <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#aae77febd503627e6bcd57c31fd516abc\">MFileIO::getReferenceConnectionsBroken</a>( referenceFiles[i],</div>\n\
<div class=\"line\">                                              connectionsBroken );</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;   Connections Broken: \\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( j = 0; j &lt; connectionsBroken.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); j+=2 ) {</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;   &quot;</span>;</div>\n\
<div class=\"line\">            cout &lt;&lt; connectionsBroken[j].asChar() &lt;&lt; <span class=\"stringliteral\">&quot; -&gt; &quot;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( j + 1 &lt; connectionsBroken.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>() ) {</div>\n\
<div class=\"line\">                cout &lt;&lt; connectionsBroken[j+1].asChar();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span> ;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>    referencedNodes;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;   Attrs Changed Since File Open:\\n&quot;</span>;</div>\n\
<div class=\"line\">        <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#aba49083ff66ccc2edf221d0922649806\">MFileIO::getReferenceNodes</a>( referenceFiles[i], referencedNodes );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( j = 0; j &lt; referencedNodes.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); j++ ) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// For each node, call a MEL command to get its</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// attributes.  Say we&#39;re only interested in scalars.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> cmd( <span class=\"stringliteral\">&quot;listAttr -s -cfo &quot;</span> );</div>\n\
<div class=\"line\">            cmd = cmd + referencedNodes[j];</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> referencedPlugs;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>   referencedAttributes;    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434\">MGlobal::executeCommand</a>( cmd, referencedAttributes );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> k = 0; k &lt; referencedAttributes.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); k++ ) {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> plugName( referencedNodes[j] );</div>\n\
<div class=\"line\">                plugName = plugName + <span class=\"stringliteral\">&quot;.&quot;</span> + referencedAttributes[k];</div>\n\
<div class=\"line\">                cout &lt;&lt; <span class=\"stringliteral\">&quot;       &quot;</span> &lt;&lt; plugName.asChar() &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// End of output </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;=====================================\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;4.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// NOTE: referenceQuery is already a Maya cmd</span></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;refQuery&quot;</span>, </div>\n\
<div class=\"line\">                                     referenceQuery::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;refQuery&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";