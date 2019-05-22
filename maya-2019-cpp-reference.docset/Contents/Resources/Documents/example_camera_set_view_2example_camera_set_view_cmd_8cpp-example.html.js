var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>exampleCameraSetView/exampleCameraSetViewCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'example_camera_set_view_2example_camera_set_view_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>exampleCameraSetView/exampleCameraSetViewCmd.cpp</h1>\n\
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
<div class=\"title\">exampleCameraSetView/exampleCameraSetViewCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  File Name: exampleCameraSetViewCmd.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Author: Dave Immel</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      A command used for testing cameraSet based drawing into a single view</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      See exampleCameraSetViewCmd.h for a description.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Date:   May 01 2008</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;exampleCameraSetViewCmd.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;exampleCameraSetView.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDag.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgParser.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnCameraSet.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnCamera.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPx3dModelView.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;iostream&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">exampleCameraSetViewCmd::exampleCameraSetViewCmd()</div>\n\
<div class=\"line\">:   <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_model_editor_command.html\">MPxModelEditorCommand</a>()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Class constructor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">exampleCameraSetViewCmd::~exampleCameraSetViewCmd()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Class destructor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* exampleCameraSetViewCmd::creator()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Create the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> exampleCameraSetViewCmd();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html\">MPx3dModelView</a> *exampleCameraSetViewCmd::userView()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Create the MPx3dModelPanel used by this command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> exampleCameraSetView();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exampleCameraSetViewCmd::appendSyntax()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Add syntax to the command. All of the parent syntax is added</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      before this call is made.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> ReturnStatus;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> theSyntax = syntax(&amp;ReturnStatus);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess != ReturnStatus) {</div>\n\
<div class=\"line\">        <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;Could not get the parent&#39;s syntax&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> ReturnStatus;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    theSyntax.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kTestMultiPackInitFlag, </div>\n\
<div class=\"line\">                      kTestMultiPackInitFlagLong);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    theSyntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kTestMultiPackResultsFlag, </div>\n\
<div class=\"line\">                      kTestMultiPackResultsFlagLong);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    theSyntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kTestMultiPackClearFlag, </div>\n\
<div class=\"line\">                      kTestMultiPackClearFlagLong);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ReturnStatus;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exampleCameraSetViewCmd::doEditFlags()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Handle edits for flags added by this class.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      If the flag is unknown, return MS::kSuccess and the parent class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      will attempt to process the flag. Returning MS::kUnknownParameter</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      will cause the parent class to process the flag.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html\">MPx3dModelView</a> *user3dModelView = modelView();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == user3dModelView) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;NULL == user3dModelView!&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  This is now safe to do, since the above test passed.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    exampleCameraSetView *dView = (exampleCameraSetView *)user3dModelView;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html\">MArgParser</a> argData = parser();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (argData.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>(kTestMultiPackInitFlag)) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> initTests(*dView);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>(kTestMultiPackResultsFlag)) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> testResults(*dView);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>(kTestMultiPackClearFlag)) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> clearResults(*dView);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exampleCameraSetViewCmd::clearResults(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html\">MPx3dModelView</a> &amp;view)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> cstObj = <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = view.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#acb82474ec072b74aff3a373c2296943e\">getCameraSet</a>(cstObj);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat == MS::kSuccess)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        view.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#abcde687ed4ec10e08a0a6a01cf511d4b\">setCameraSet</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>);</div>\n\
<div class=\"line\">        <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d83d29ca400045849d777aecafda70c\">MGlobal::deleteNode</a>(cstObj);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    fCameraList.clear();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exampleCameraSetViewCmd::initTests(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html\">MPx3dModelView</a> &amp;view)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(<span class=\"stringliteral\">&quot;exampleCameraSetViewCmd::initTests&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    clearResults(view);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Add every camera into the scene. Don&#39;t change the main camera,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  it is OK that it gets reused.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera_set.html\">MFnCameraSet</a> cstFn;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> cstObj = cstFn.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera_set.html#af1adb4abaf5243c6c0749bcca7b5c418\">create</a>( &amp;status );</div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> cameraPath;</div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dag.html\">MItDag</a> dagIterator(<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dag.html#a1545968b4f810358b53ae9844bce6bd1a6e92a8757afce03be51397f0b518f4c5\">MItDag::kDepthFirst</a>, <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7af2731fae06310295129a8fb3dba5fbb2\">MFn::kCamera</a>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (; !dagIterator.isDone(); dagIterator.next()) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!dagIterator.getPath(cameraPath)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html\">MFnCamera</a> camera(cameraPath, &amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (MS::kSuccess != status) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fCameraList.append(cameraPath);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (cstFn.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera_set.html#a68826d693b6d2385968558b7482fcaf5\">appendLayer</a>(cameraPath, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>) != MS::kSuccess)</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;Could not add camera layer!&quot;</span>);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(camera.fullPathName());</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess !=</div>\n\
<div class=\"line\">        view.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#abcde687ed4ec10e08a0a6a01cf511d4b\">setCameraSet</a>(cstObj)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;Could not set the cameraSet&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    view.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a733fc93c61bcc5c95614fa6ef66ddbd7\">refresh</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exampleCameraSetViewCmd::testResults(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html\">MPx3dModelView</a> &amp;view)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> cstObj = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = view.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#acb82474ec072b74aff3a373c2296943e\">getCameraSet</a>(cstObj);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat != MS::kSuccess)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;fCameraList.length() = &quot;</span> &lt;&lt; fCameraList.length() &lt;&lt; endl;</div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;fCameraList = &quot;</span> &lt;&lt; fCameraList &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera_set.html\">MFnCameraSet</a> cstFn(cstObj);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numLayers = cstFn.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera_set.html#afba7ec93beb8152d8dbc7a605509a1b4\">getNumLayers</a>();</div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;view.cameraSet.numLayers = &quot;</span> &lt;&lt; numLayers &lt;&lt; endl;</div>\n\
<div class=\"line\">    cout &lt;&lt; <span class=\"stringliteral\">&quot;Cameras:&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;numLayers; i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> camPath;</div>\n\
<div class=\"line\">        cstFn.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_camera_set.html#a43fbdae1e592bc785c2652e229ba4c7d\">getLayerCamera</a>(i, camPath);</div>\n\
<div class=\"line\">        camPath.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a658d9664035ff84ffefa217c0e45cc88\">extendToShape</a>();</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;    &quot;</span> &lt;&lt; camPath.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a7cffb69661adc6ae7ac9e03c297caf01\">fullPathName</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";