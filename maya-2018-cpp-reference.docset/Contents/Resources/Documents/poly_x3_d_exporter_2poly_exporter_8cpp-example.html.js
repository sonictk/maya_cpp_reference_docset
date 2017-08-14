var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>polyX3DExporter/polyExporter.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'poly_x3_d_exporter_2poly_exporter_8cpp-example.html\', tocPrefix);\n\
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
            <h1>polyX3DExporter/polyExporter.cpp</h1>\n\
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
<div class=\"title\">polyX3DExporter/polyExporter.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//polyExporter.cpp</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDag.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;polyExporter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;polyWriter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">polyExporter::polyExporter()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  constructor method; does nothing</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">polyExporter::~polyExporter() </div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  destructor method; does nothing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyExporter::writer(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file,</div>\n\
<div class=\"line\">                             <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; <span class=\"comment\">/*options*/</span>,</div>\n\
<div class=\"line\">                             <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417\">MPxFileTranslator::FileAccessMode</a> mode) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  saves a file of a type supported by this translator by traversing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          the all or selected objects (depending on mode) in the current</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          Maya scene, and writing a representation to the given file</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  file - object containing the pathname of the file to be written to</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          options - a string representation of any file options </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          mode - the method used to write the file - export, or export active</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                 are valid values; method will fail for any other values </span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the export was successful;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fileName = file.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html#a7a1c6f1f04d612d126a4e7512ab62ca7\">fullName</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ofstream newFile(fileName.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), ios::out);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!newFile) {</div>\n\
<div class=\"line\">        <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(fileName + <span class=\"stringliteral\">&quot;: could not be opened for reading&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    newFile.setf(ios::unitbuf);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    writeHeader(newFile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//check which objects are to be exported, and invoke the corresponding</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//methods; only &#39;export all&#39; and &#39;export selection&#39; are allowed</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417a2b6cc89b2e3d91b69ec9af440ef0bc94\">MPxFileTranslator::kExportAccessMode</a> == mode) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == exportAll(newFile)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417ab8316a826501eb9bae9132346b5db59f\">MPxFileTranslator::kExportActiveAccessMode</a> == mode) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == exportSelection(newFile)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    writeFooter(newFile);</div>\n\
<div class=\"line\">    newFile.flush();</div>\n\
<div class=\"line\">    newFile.close();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(<span class=\"stringliteral\">&quot;Export to &quot;</span> + fileName + <span class=\"stringliteral\">&quot; successful!&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> polyExporter::haveWriteMethod() const </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  returns true if the writer() method of the class is implemented;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          false otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  true since writer() is implemented in this class</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> polyExporter::haveReadMethod() const </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  returns true if the reader() method of the class is implemented;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          false otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  false since reader() is not implemented in this class</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> polyExporter::canBeOpened() const </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  returns true if the translator can open and import files;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          false if it can only import files</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  true</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyExporter::exportAll(ostream&amp; os) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  finds and outputs all polygonal meshes in the DAG</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the method succeeds</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure if the method fails</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//create an iterator for only the mesh components of the DAG</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dag.html\">MItDag</a> itDag(<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dag.html#a1545968b4f810358b53ae9844bce6bd1a6e92a8757afce03be51397f0b518f4c5\">MItDag::kDepthFirst</a>, <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFn::kMesh</a>, &amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == status) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MItDag::MItDag&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(;!itDag.isDone();itDag.next()) {</div>\n\
<div class=\"line\">        <span class=\"comment\">//get the current DAG path</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == itDag.getPath(dagPath)) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MDagPath::getPath&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html\">MFnDagNode</a> visTester(dagPath);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//if this node is visible, then process the poly mesh it represents</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(isVisible(visTester, status) &amp;&amp; <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a> == status) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == processPolyMesh(dagPath, os)) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyExporter::exportSelection(ostream&amp; os) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  finds and outputs all selected polygonal meshes in the DAG</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the method succeeds</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure if the method fails</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//create an iterator for the selected mesh components of the DAG</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> selectionList;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>(selectionList)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MGlobal::getActiveSelectionList&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> itSelectionList(selectionList, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFn::kMesh</a>, &amp;status);   </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == status) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (itSelectionList.reset(); !itSelectionList.isDone(); itSelectionList.next()) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//get the current dag path and process the poly mesh on it</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == itSelectionList.getDagPath(dagPath)) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MItSelectionList::getDagPath&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == processPolyMesh(dagPath, os)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyExporter::processPolyMesh(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath, ostream&amp; os) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  processes the mesh on the given dag path by extracting its geometry</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          and writing this data to file</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  dagPath - the current dag path whose poly mesh is to be processed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          os - an output stream to write to</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the polygonal mesh data was processed fully;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    polyWriter* pWriter = createPolyWriter(dagPath, status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == status) {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> pWriter;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == pWriter-&gt;extractGeometry()) {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> pWriter;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == pWriter-&gt;writeToFile(os)) {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> pWriter;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> pWriter;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> polyExporter::isVisible(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html\">MFnDagNode</a> &amp; fnDag, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; status) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  determines if the given DAG node is currently visible</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  fnDag - the DAG node to check</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  true if the node is visible;        </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          false otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fnDag.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a7293b39df2aa5ccfe5ffa7f483fffcae\">isIntermediateObject</a>())</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> visPlug = fnDag.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;visibility&quot;</span>, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == status) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MPlug::findPlug&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> visible;</div>\n\
<div class=\"line\">        status = visPlug.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ab017c746e6e0c13bf994b2458d3b5eee\">getValue</a>(visible);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == status) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MPlug::getValue&quot;</span>);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> visible;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> polyExporter::writeHeader(ostream&amp; os) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  outputs information that needs to appear before the main data</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    os &lt;&lt; <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> polyExporter::writeFooter(ostream&amp; os) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  outputs information that needs to appear after the main data</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    os &lt;&lt; <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";