var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>nodeIconCmd/nodeIconCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'node_icon_cmd_2node_icon_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>nodeIconCmd/nodeIconCmd.cpp</h1>\n\
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
<div class=\"title\">nodeIconCmd/nodeIconCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2010 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Example Plugin: nodeIconCmd.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plugin defines a command that associates an icon with one of more</span></div>\n\
<div class=\"line\"><span class=\"comment\">// dependency nodes for display in Maya&#39;s user interface. One place that</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the icon will show up is in the DAG outliner. The node to operate on is</span></div>\n\
<div class=\"line\"><span class=\"comment\">// either specified as the optional final argument to the command, or if</span></div>\n\
<div class=\"line\"><span class=\"comment\">// no last argument is given the command operates on the selected nodes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// USAGE:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      nodeIcon [flags] [nodeName]</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// FLAGS:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      -edit(e)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          Specifies that the nodeIcon command operates in edit mode.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          If neither -query nor -edit is specified, -edit is assumed.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      -query(q)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          Specifies that the nodeIcon command operates in query mode.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      -icon(i) [filename]</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          Specifies the name of the file containing the icon to be</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          assigned to all specified nodes. To set a node to use the default</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          Maya icon specify the empty string (e.g. &quot;&quot;). Icons must be of</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          type &quot;png&quot;, and the filenames may either be absolute or else</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           relative to the XBMLANGPATH environment variable.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// MEL EXAMPLES:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      To assign the icon filename mySphereIcon.png to the node pSphereShape1,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          nodeIcon -icon &quot;C:/Temp/mySphereIcon.png&quot; pSphereShape1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      To query the icon filename associated with pSphereShape1,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          nodeIcon -q pSphereShap1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      To revert to the default icon, assign the empty string as the filename,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          nodeIcon -icon &quot;&quot; pSphereShap1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Instead of specifying the node name on the command line, we can</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      operate on the selected nodes:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          select pSphereShape1 pTorusShape1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          nodeIcon -icon &quot;C:/Temp/myQuadricIcon.png&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// HEADER FILES...</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgDatabase.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// COMMAND FLAGS...</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kFlagIcon               &quot;-i&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kFlagIconLong           &quot;-icon&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS...</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>nodeIcon : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    nodeIcon();</div>\n\
<div class=\"line\">                ~nodeIcon() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a8121b9d1e18f95acf1f634e29e3b3d54\">hasSyntax</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a>  newSyntax();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>     *creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a> &amp;args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// METHODS...</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Constructor for the nodeIcon class. This is the default</span></div>\n\
<div class=\"line\"><span class=\"comment\">// constructor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">nodeIcon::nodeIcon()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Destructor for the nodeIcon class. It gets called when</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the node is being deleted.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">nodeIcon::~nodeIcon()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      This method allows Maya to instantiate new nodeIcon.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Returns:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      void    *pointer    : Returns the newly allocated nodeIcon</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                            object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      void    NULL        : Memory allocation or other error occurred.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>    *nodeIcon::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( <span class=\"keyword\">new</span> nodeIcon() );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Specifies whether or not the command has a syntax object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Returns:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      true                : The command has a syntax object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      false               : The command has no syntax object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span>     nodeIcon::hasSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Creates the syntax object for the nodeIcon command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Returns:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MSyntax             : The newly created syntax object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a>  nodeIcon::newSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a>     syntax;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Define the flags for this command.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    syntax.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>( kFlagIcon,</div>\n\
<div class=\"line\">            kFlagIconLong,</div>\n\
<div class=\"line\">            <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#ae6f2057f0d0419845a48c1eb6813f2adafab53ea4a643325262b9c140af093279\">MSyntax::kString</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Allow the user to select the nodes we will operate on, as well as allow</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// him/her to specify the node on the command line.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    syntax.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a16e72b75488e20aafdc0c3c64e663bea\">useSelectionAsDefault</a>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">    syntax.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a299f2c91c864387f1b4208e99a72631d\">setObjectType</a>( <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a72b517c34c0de9b91ce4b5342675186baf19c7ad857ee046737f2d9c08e7bb70d\">MSyntax::kSelectionList</a> );</div>\n\
<div class=\"line\">    syntax.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aa6768112ac44472eb00ef0430192e3d2\">setMinObjects</a>( 1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// This command is both queryable as well as editable.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    syntax.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a414088ac458bc323845634fcf7663e69\">enableQuery</a>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">    syntax.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a2a329cd0b0d89bc1b9721c522d6d0006\">enableEdit</a>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( syntax );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Performs the command by extracting the command-line arguments and</span></div>\n\
<div class=\"line\"><span class=\"comment\">// acting upon their values.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Returns:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MStatus kSuccess        : Successfully executed the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MStatus kFailure        : An error occurred.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> nodeIcon::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a> &amp;args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         iconName;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the argument database from the args parameter.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a>    argData( syntax(), args, &amp;status );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a> != status ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// User supplied incorrect command-line arguments: they don&#39;t match</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// the syntax for the command. So just return the status.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// See what flags were specified. Edit is the default.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    queryUsed = argData.isQuery();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    iconUsed = argData.isFlagSet( kFlagIcon );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the objects from the global selection list.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> sList;</div>\n\
<div class=\"line\">    status = argData.getObjects( sList );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( MS::kSuccess != status ) {</div>\n\
<div class=\"line\">        <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                <span class=\"stringliteral\">&quot;nodeIcon: could not query the selection list&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( MS::kFailure );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> count = sList.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( MS::kSuccess != status || 0 == count ) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                <span class=\"stringliteral\">&quot;nodeIcon: you need to specify at least one node&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( MS::kFailure );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get any flag arguments.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( iconUsed ) {</div>\n\
<div class=\"line\">        <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#ga2f3f1ac62ed663f5efd20ff99991335b\">CHECK_MSTATUS_AND_RETURN_IT</a>( argData.getFlagArgument(</div>\n\
<div class=\"line\">                kFlagIcon, 0, iconName ) );</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( !queryUsed ) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                <span class=\"stringliteral\">&quot;nodeIcon: the -icon flag needs to be specified in edit mode&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( MS::kFailure );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Query or set the node icon for each node in the selection list.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; count; i++ ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the node from the selection list.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node;</div>\n\
<div class=\"line\">        status = sList.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>( i, node );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( MS::kSuccess != status ) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                    <span class=\"stringliteral\">&quot;nodeIcon: only nodes can be selected&quot;</span> );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span>( MS::kFailure );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> nodeFn( node );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// If query, return the name of the custom nodeIcon assigned</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// to the node (if one is defined). If editing, assign the icon</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// file name specified via the -icon flag (which is empty if the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// user omitted -icon).</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> result;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( queryUsed ) {</div>\n\
<div class=\"line\">            result = nodeFn.icon( &amp;status );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( MS::kSuccess != status ) {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                        <span class=\"stringliteral\">&quot;nodeIcon: could not query the icon assigned to the node&quot;</span> );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span>( MS::kFailure );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            status = nodeFn.setIcon( iconName );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( MS::kSuccess != status ) {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                        <span class=\"stringliteral\">&quot;nodeIcon: the filename specified by the -icon flag could not be opened&quot;</span> );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            result = iconName;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a0d3ae83e50a06f70f04c2234fae92bc4\">MPxCommand::appendToResult</a>( result );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     status;</div>\n\
<div class=\"line\">    <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;10.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;nodeIcon&quot;</span>, nodeIcon::creator,</div>\n\
<div class=\"line\">            nodeIcon::newSyntax );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !status ) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                <span class=\"stringliteral\">&quot;nodeIcon: failed to register the plug-in&quot;</span> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;nodeIcon&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !status ) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">                <span class=\"stringliteral\">&quot;nodeIcon: failed to deregister the plug-in&quot;</span> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>( status );</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";