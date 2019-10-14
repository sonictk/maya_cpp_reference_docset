var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MLibrary Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_library.html\', tocPrefix);\n\
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
            <h1>MLibrary Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MLibrary Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/Extension-for-Autodesk-Maya-2013.html\">What&#39;s New / What&#39;s Changed? &gt; Extension for Autodesk Maya 2013</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Appendices/Appendix-C-Frequently-asked.html\">Appendices &gt; Appendix C: Frequently asked questions</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_library.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_library.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MLibrary.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Set up Maya to run in library mode. (OpenMaya) </p>\n\
<p>Initialize and cleanup routines for Maya running in library mode.</p>\n\
<p>When creating a \"library mode\" Maya application, this class must be used in the program\'s main routine to initialize Maya, and later to cleanUp allocated Maya state. A typical usage would be:</p>\n\
<div class=\"fragment\"><div class=\"line\">main(<span class=\"keywordtype\">int</span> argc, <span class=\"keywordtype\">char</span> **argv)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_library.html#a228c0a2eb7270128a73734e1d477e93f\">MLibrary::initialize</a> (argv[0], <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !status ) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;MLibrary::initialize&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> (1);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Maya API code goes here</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_library.html#adca11779e50fa1dd8ac33abf1872cdd1\">MLibrary::cleanup</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (0);</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --><p>If the call to cleanup is omitted, you will get errors when the program exits as the static destructors in the Maya libraries are run. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a26002b4b9724ac7cc7bde6b69e99d514\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a26002b4b9724ac7cc7bde6b69e99d514\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_library.html#a26002b4b9724ac7cc7bde6b69e99d514\">MLibrary</a> ()</td></tr>\n\
<tr class=\"memdesc:a26002b4b9724ac7cc7bde6b69e99d514\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The default class constructor. <br></td></tr>\n\
<tr class=\"separator:a26002b4b9724ac7cc7bde6b69e99d514\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0b0578d8dd1539bcdead076debc5e8ba\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0b0578d8dd1539bcdead076debc5e8ba\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_library.html#a0b0578d8dd1539bcdead076debc5e8ba\">~MLibrary</a> ()</td></tr>\n\
<tr class=\"memdesc:a0b0578d8dd1539bcdead076debc5e8ba\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The class destructor. <br></td></tr>\n\
<tr class=\"separator:a0b0578d8dd1539bcdead076debc5e8ba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a228c0a2eb7270128a73734e1d477e93f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_library.html#a228c0a2eb7270128a73734e1d477e93f\">initialize</a> (const char *applicationName, bool useBatchLicense=false)</td></tr>\n\
<tr class=\"memdesc:a228c0a2eb7270128a73734e1d477e93f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Initialize the Maya library.  <a href=\"class_m_library.html#a228c0a2eb7270128a73734e1d477e93f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a228c0a2eb7270128a73734e1d477e93f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1a6d705d2117b11d6c1017394030e7cb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_library.html#a1a6d705d2117b11d6c1017394030e7cb\">initialize</a> (bool wantScriptOutput, const char *applicationName, bool useBatchLicense=false)</td></tr>\n\
<tr class=\"memdesc:a1a6d705d2117b11d6c1017394030e7cb\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Initialize the Maya library.  <a href=\"class_m_library.html#a1a6d705d2117b11d6c1017394030e7cb\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1a6d705d2117b11d6c1017394030e7cb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adca11779e50fa1dd8ac33abf1872cdd1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_library.html#adca11779e50fa1dd8ac33abf1872cdd1\">cleanup</a> (int exitStatus=0, bool exitWhenDone=true)</td></tr>\n\
<tr class=\"memdesc:adca11779e50fa1dd8ac33abf1872cdd1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Undo the initialization performed by the <em>initialize</em> method, cleanup allocated Maya structures in an orderly fashion and terminate the application.  <a href=\"class_m_library.html#adca11779e50fa1dd8ac33abf1872cdd1\">More...</a><br></td></tr>\n\
<tr class=\"separator:adca11779e50fa1dd8ac33abf1872cdd1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a228c0a2eb7270128a73734e1d477e93f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>applicationName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>useBatchLicense</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Initialize the Maya library. </p>\n\
<p>This method <em>must</em> be called before any Maya functionsets are used. It is acceptable to instantiate Maya fundamental types before calling this, but attempts to do anything else cause unpredictable results. When writing a Maya library mode application, a call to this method should be the first line of <em>main</em>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">applicationName</td><td>The name of this application. Typically argv[0] from the application\'s main() function is passed in this parameter. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">useBatchLicense</td><td>Determines whether a full or batch license of Maya is required to run the application. Most of Maya\'s features are accessible to library applications with just a batch license. Note that this setting does not affect the result of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_global.html#ac7296da94b1d0b659833fc653a6af10e\" title=\"Returns an enumerated type specifying the way in which Maya was invoked. \">MGlobal::mayaState()</a>, which always returns kLibraryApp for library applications, nor does it it affect the result of the <em>about -batch</em> command, which always returns true for library applications.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Maya was initialized successfully. </li>\n\
<li><b>MS::kLicenseFailure</b> The requested license could not be obtained. </li>\n\
<li><b>MS::kFailure</b> Maya failed to initialize. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1a6d705d2117b11d6c1017394030e7cb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>wantScriptOutput</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>applicationName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>useBatchLicense</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Initialize the Maya library. </p>\n\
<p>This method <em>must</em> be called before any Maya functionsets are used. It is acceptable to instantiate Maya fundamental types before calling this, but attempts to do anything else cause unpredictable results. When writing a Maya library mode application, a call to this method should be the first line of <em>main</em>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">wantScriptOutput</td><td>Set to true if you wish script output to be generated. For example if you are using the the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\" title=\"This method is used to display an informational message in the script editor. \">MGlobal::displayInfo()</a> method. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">applicationName</td><td>The name of this application. Typically argv[0] from the application\'s main() function is passed in this parameter. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">useBatchLicense</td><td>Determines whether a full or batch license of Maya is required to run the application. Most of Maya\'s features are accessible to library applications with just a batch license. Note that this setting does not affect the result of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_global.html#ac7296da94b1d0b659833fc653a6af10e\" title=\"Returns an enumerated type specifying the way in which Maya was invoked. \">MGlobal::mayaState()</a>, which always returns kLibraryApp for library applications, nor does it it affect the result of the <em>about -batch</em> command, which always returns true for library applications.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Maya was initialized successfully. </li>\n\
<li><b>MS::kLicenseFailure</b> The requested license could not be obtained. </li>\n\
<li><b>MS::kFailure</b> Maya failed to initialize. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adca11779e50fa1dd8ac33abf1872cdd1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void cleanup </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>exitStatus</em> = <code>0</code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>exitWhenDone</em> = <code>true</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Undo the initialization performed by the <em>initialize</em> method, cleanup allocated Maya structures in an orderly fashion and terminate the application. </p>\n\
<p><b>Note:</b> It is important that when a Library mode process terminates it calls this method before doing so. Failure to do so could result in the leaking of licenses and errors from Maya\'s static destructors.</p>\n\
<p>If the exitWhenDone parameter is true, which is the default, this method will terminate the process, using the supplied exitCode, and control will NOT be returned to the caller.</p>\n\
<p>If the Library app was launched from another process as a separate thread or a child process, this can result in the parent process terminating as well. To avoid that, set exitWhenDone to false, which will prevent the current process from being terminated and will return control to the caller. However, in that case, Library mode must not be re-entered within the same process as Maya will be in an undetermined state and its behavour would be unpredictable.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">exitStatus</td><td>The exit code the application will return. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">exitWhenDone</td><td>If true, terminate the process. If false, return control to the caller without terminating the process. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MLibrary.h</li>\n\
<li>MLibrary.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";