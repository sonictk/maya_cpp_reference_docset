var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>renderViewRenderCmd/renderViewRenderCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'render_view_render_cmd_2render_view_render_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>renderViewRenderCmd/renderViewRenderCmd.cpp</h1>\n\
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
<div class=\"title\">renderViewRenderCmd/renderViewRenderCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;renderViewRender&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates how to render a full image to the Render View</span></div>\n\
<div class=\"line\"><span class=\"comment\">// window using the MRenderView class. The command takes no arguments.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// It renders a 640x480 image tiled with a red and white circular pattern</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to the Render View. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MRenderView.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/M3dView.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgDatabase.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  renderViewRender command declaration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>renderViewRender : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a> </div>\n\
<div class=\"line\">{                           </div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:                 </div>\n\
<div class=\"line\">    renderViewRender() {};</div>\n\
<div class=\"line\">    ~renderViewRender()<span class=\"keyword\"> override </span>{};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a> ( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a>  newSyntax();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> parseSyntax (<a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a> &amp;argData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * cmdName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> doNotClearBackground;              </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};                                                  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * kDoNotClearBackground       = <span class=\"stringliteral\">&quot;-b&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * kDoNotClearBackgroundLong   = <span class=\"stringliteral\">&quot;-background&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * renderViewRender::cmdName = <span class=\"stringliteral\">&quot;renderViewRender&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* renderViewRender::creator()                   </div>\n\
<div class=\"line\">{                                                   </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> renderViewRender;                    </div>\n\
<div class=\"line\">}                                                   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> renderViewRender::newSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> syntax;</div>\n\
<div class=\"line\">    syntax.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>( kDoNotClearBackground, kDoNotClearBackgroundLong );</div>\n\
<div class=\"line\">    <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#ga1c1d4871f9859a07b14c0218a3609fd9\">CHECK_MSTATUS_AND_RETURN</a>(status, syntax);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> syntax;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Read the values of the additionnal flags for this command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> renderViewRender::parseSyntax (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a> &amp;argData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the flag values, otherwise the default values are used.</span></div>\n\
<div class=\"line\">    doNotClearBackground = argData.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_parser.html#aa38abc6623182dacee0fcb4136e403b8\">isFlagSet</a>( kDoNotClearBackground );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      register the command</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )         </div>\n\
<div class=\"line\">{                                                           </div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;4.5&quot;</span> );   </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     stat;                                       </div>\n\
<div class=\"line\">    stat = plugin.registerCommand(  renderViewRender::cmdName,</div>\n\
<div class=\"line\">                                    renderViewRender::creator,</div>\n\
<div class=\"line\">                                    renderViewRender::newSyntax);   </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat )                                                </div>\n\
<div class=\"line\">        stat.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>( <span class=\"stringliteral\">&quot;registerCommand&quot;</span> );                           </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;                                                </div>\n\
<div class=\"line\">}                                                               </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      unregister the command</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )                       </div>\n\
<div class=\"line\">{                                                               </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   plugin( obj );                                  </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     stat;                                           </div>\n\
<div class=\"line\">    stat = plugin.deregisterCommand( renderViewRender::cmdName );               </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat )                                    </div>\n\
<div class=\"line\">        stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>( <span class=\"stringliteral\">&quot;deregisterCommand&quot;</span> );         </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;                                    </div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html\">RV_PIXEL</a> evaluate(<span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">int</span> y)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Generates a simple procedural circular pattern to be sent to the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Render View.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      x, y - coordinates in the current tile (the pattern is centred </span></div>\n\
<div class=\"line\"><span class=\"comment\">//             around (0,0) ).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Return Value:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      An RV_PIXEL structure containing the colour of pixel (x,y).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> distance = (<span class=\"keywordtype\">unsigned</span> int) sqrt(<span class=\"keywordtype\">double</span>((x*x) + (y*y)));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html\">RV_PIXEL</a> pixel;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Always fully red.</span></div>\n\
<div class=\"line\">    pixel.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html#a4788d82c901b9367dd5c0daff8a7616b\">r</a> = 255.0f;       </div>\n\
<div class=\"line\">    <span class=\"comment\">// Green and blue varies according to the distance.</span></div>\n\
<div class=\"line\">    pixel.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html#a8cf17d727651616de6f2b79ef32170cd\">g</a> = pixel.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html#a83fc1af92e29717b4513d121b0c72c7d\">b</a> = 155.0f + (distance % 20) * 5;</div>\n\
<div class=\"line\">    pixel.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html#a4aec1a5be9d9a4a394a2e49e9744286e\">a</a> = 255.0f;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> pixel;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> renderViewRender::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Implements the MEL renderViewRender command.  This command</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Draws a 640x480 tiled pattern of red and white circles into Maya&#39;s</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Render View window.  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      args - The argument list that was passed to the command from MEL.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              -background/-b renders the pattern without clearing the Render View</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Return Value:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kSuccess - command succeeded</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kFailure - command failed (returning this value will cause the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     MEL script that is being run to terminate unless the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     error is caught using a &quot;catch&quot; statement.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Check if the render view exists. It should always exist, unless</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Maya is running in batch mode.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_view.html#a184bee2968fa3b152091a411990cfe52\">MRenderView::doesRenderEditorExist</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        setResult( <span class=\"stringliteral\">&quot;Cannot renderViewRender in batch render mode. &quot;</span></div>\n\
<div class=\"line\">                   <span class=\"stringliteral\">&quot;Please run in interactive mode, &quot;</span></div>\n\
<div class=\"line\">                   <span class=\"stringliteral\">&quot;so that the render editor exists.&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        cout&lt;&lt;<span class=\"stringliteral\">&quot;Past doesRenderEditorExist()&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// get optional flags</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a>    argData( syntax(), args );</div>\n\
<div class=\"line\">    parseSyntax( argData );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pick a camera, and tell the Render View that we will be rendering</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// from its point of view.  Just use the camera for the active </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// modelling view.  </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> curView = <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a3cda809eff914b04ff47de958c365f09\">M3dView::active3dView</a>();</div>\n\
<div class=\"line\">    <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> camDagPath;</div>\n\
<div class=\"line\">    curView.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a5e6ea41ec1bab5ed980b2ddffe398a73\">getCamera</a>( camDagPath );</div>\n\
<div class=\"line\">    cout&lt;&lt;<span class=\"stringliteral\">&quot;Rendering camera&quot;</span>&lt;&lt;camDagPath.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a7cffb69661adc6ae7ac9e03c297caf01\">fullPathName</a>().<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()&lt;&lt;endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_view.html#ade5b9e9906c8bd2742479a8eccad8e13\">MRenderView::setCurrentCamera</a>( camDagPath ) != MS::kSuccess )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        setResult( <span class=\"stringliteral\">&quot;renderViewRender: error occurred in setCurrentCamera.&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// We&#39;ll render a 640x480 image.  Tell the Render View to get ready</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to receive 640x480 pixels of data.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> image_width = 640, image_height = 480;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_view.html#a83fe29675c567275fe349381ee1f6f2d\">MRenderView::startRender</a>( image_width, image_height, doNotClearBackground) != MS::kSuccess)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        setResult( <span class=\"stringliteral\">&quot;renderViewRender: error occured in startRender.&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The image will be composed of tiles consisting of circular red and</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// white patterns.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> num_side_tiles = 8;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> average_tiles_width = image_width / num_side_tiles;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> average_tiles_height = image_height / num_side_tiles;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw each tile</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> tile_y = 0; tile_y &lt; num_side_tiles; tile_y++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> tile_x = 0; tile_x &lt; num_side_tiles; tile_x++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Find the min/max width/height.</span></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> min_x = tile_x * average_tiles_width;</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> max_x;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// If this is the last tile in width, adjust the max position </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// so that the entire width is covered.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ((tile_x+1) == num_side_tiles)</div>\n\
<div class=\"line\">                max_x = image_width-1;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                max_x = (tile_x + 1) * average_tiles_width - 1;</div>\n\
<div class=\"line\">                    </div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> min_y = tile_y * average_tiles_height;</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> max_y;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// If this is the last tile in height, adjust the max position </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// so that the entire height is covered.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ((tile_y+1) == num_side_tiles)</div>\n\
<div class=\"line\">                max_y = image_height-1;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                max_y = (tile_y + 1) * average_tiles_height - 1;</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> tile_width = max_x - min_x + 1; </div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> tile_height = max_y - min_y + 1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Fill up the pixel array with some the pattern, which is </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// generated by the &#39;evaluate&#39; function.  The Render View</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// accepts floating point pixel values only.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html\">RV_PIXEL</a>* pixels = <span class=\"keyword\">new</span> <a class=\"code\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html\">RV_PIXEL</a>[tile_width * tile_height];</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> index = 0;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> j = 0; j &lt; tile_height; j++ )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; tile_width; i++)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    pixels[index] = evaluate(i - (tile_width / 2), </div>\n\
<div class=\"line\">                                             j - (tile_height / 2));</div>\n\
<div class=\"line\">                    index++;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Send the data to the render view.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_view.html#a933dc6f93a84fdd9ebb889d1af7b9a6a\">MRenderView::updatePixels</a>(min_x, max_x, min_y, max_y, pixels) != MS::kSuccess)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                setResult( <span class=\"stringliteral\">&quot;renderViewRender: error occured in updatePixels.&quot;</span> );</div>\n\
<div class=\"line\">                <span class=\"keyword\">delete</span> [] pixels;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> [] pixels;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Force the Render View to refresh the display of the affected </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// region.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_view.html#a146003ed92b5f9f1572fa619557709ed\">MRenderView::refresh</a>(min_x, max_x, min_y, max_y) != MS::kSuccess)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                setResult( <span class=\"stringliteral\">&quot;renderViewRender: error occured in refresh.&quot;</span> );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Inform the Render View that we have completed rendering the entire image.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_view.html#ab0d5ac2c66d80fc19cfba57e2c3f0c94\">MRenderView::endRender</a>() != MS::kSuccess)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        setResult( <span class=\"stringliteral\">&quot;renderViewRender: error occured in endRender.&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    setResult( <span class=\"stringliteral\">&quot;renderViewRender completed.&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";