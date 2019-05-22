var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MAnimCurveChange Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_anim_curve_change.html\', tocPrefix);\n\
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
            <h1>MAnimCurveChange Class Reference</h1>\n\
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
<div class=\"title\">MAnimCurveChange Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_anim_curve_change.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_anim_curve_change.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MAnimCurveChange.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Anim Curve Change Cache. </p>\n\
<p>Adding, removing and changing keyframes on an anim curve cannot be done simply by setting attribute values on the corresponding node. This makes it impossible to capture such changes in an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html\" title=\"Dependency graph modifier. \">MDGModifier</a> for undo/redo purposes.</p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html\" title=\"Anim Curve Change Cache. \">MAnimCurveChange</a> class provides persistent storage for information concerning changes to anim curve nodes, along with methods to undo and redo those changes. <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html\" title=\"Anim Curve Function Set. \">MFnAnimCurve</a> methods which add, remove or change keyframes take an optional <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html\" title=\"Anim Curve Change Cache. \">MAnimCurveChange</a> instance in which to store information about the changes being made.</p>\n\
<p>If the same <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html\" title=\"Anim Curve Change Cache. \">MAnimCurveChange</a> instance is used for multiple anim curve edit operations, then the cache maintains an undo/redo queue which allows all changes in the series to be undone or redone. If selective undo/redo is required, then a different MAnimCurveCache instance must be used for each edit. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a8357d8bb2a618e3e5070233abbbe6f26\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#a8357d8bb2a618e3e5070233abbbe6f26\">MAnimCurveChange</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:a8357d8bb2a618e3e5070233abbbe6f26\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class Constructor.  <a href=\"class_m_anim_curve_change.html#a8357d8bb2a618e3e5070233abbbe6f26\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8357d8bb2a618e3e5070233abbbe6f26\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad734f53789e04eb6c0c04affd450101d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#ad734f53789e04eb6c0c04affd450101d\">~MAnimCurveChange</a> ()</td></tr>\n\
<tr class=\"memdesc:ad734f53789e04eb6c0c04affd450101d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class Destructor.  <a href=\"class_m_anim_curve_change.html#ad734f53789e04eb6c0c04affd450101d\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad734f53789e04eb6c0c04affd450101d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0789a8d51244cad0495abb2b811c39db\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#a0789a8d51244cad0495abb2b811c39db\">undoIt</a> ()</td></tr>\n\
<tr class=\"memdesc:a0789a8d51244cad0495abb2b811c39db\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Undoes all of the Anim Curve edits that have been given to this cache.  <a href=\"class_m_anim_curve_change.html#a0789a8d51244cad0495abb2b811c39db\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0789a8d51244cad0495abb2b811c39db\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3b583cbc082553f11853db459b2f7795\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#a3b583cbc082553f11853db459b2f7795\">redoIt</a> ()</td></tr>\n\
<tr class=\"memdesc:a3b583cbc082553f11853db459b2f7795\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Redoes all of the Anim Curve edits that this cache previously undid.  <a href=\"class_m_anim_curve_change.html#a3b583cbc082553f11853db459b2f7795\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3b583cbc082553f11853db459b2f7795\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac2632f60022bbad00e81d0db4f90fecc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#ac2632f60022bbad00e81d0db4f90fecc\">isInteractive</a> () const </td></tr>\n\
<tr class=\"memdesc:ac2632f60022bbad00e81d0db4f90fecc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the performance hint flag value.  <a href=\"class_m_anim_curve_change.html#ac2632f60022bbad00e81d0db4f90fecc\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac2632f60022bbad00e81d0db4f90fecc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae20570118ed611f1d4d3528b28d83271\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#ae20570118ed611f1d4d3528b28d83271\">setInteractive</a> (bool value)</td></tr>\n\
<tr class=\"memdesc:ae20570118ed611f1d4d3528b28d83271\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The interactive flag is a performance hint.  <a href=\"class_m_anim_curve_change.html#ae20570118ed611f1d4d3528b28d83271\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae20570118ed611f1d4d3528b28d83271\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_anim_curve_change.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a8357d8bb2a618e3e5070233abbbe6f26\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html\">MAnimCurveChange</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Class Constructor. </p>\n\
<p>Creates a Anim Curve Change cache.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>Status Code (see below)</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Success </li>\n\
<li><b>MS::kInsufficientMemory</b> Insufficient memory to create Anim Curve Change cache </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad734f53789e04eb6c0c04affd450101d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html\">MAnimCurveChange</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Class Destructor. </p>\n\
<p>No additional action. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a0789a8d51244cad0495abb2b811c39db\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> undoIt </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Undoes all of the Anim Curve edits that have been given to this cache. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status Code (see below)</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Success </li>\n\
<li><b>MS::kFailure</b> Failure undoing edits - cache nonexistent or inaccessible </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3b583cbc082553f11853db459b2f7795\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> redoIt </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Redoes all of the Anim Curve edits that this cache previously undid. </p>\n\
<p>It is only valid to invoke this method after an undo on this cache.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status Code (see below)</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> Success </li>\n\
<li><b>MS::kFailure</b> Failure redoing edits - cache nonexistent or inaccessible </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac2632f60022bbad00e81d0db4f90fecc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isInteractive </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the performance hint flag value. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>returns true if the interactive flag is set. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae20570118ed611f1d4d3528b28d83271\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void setInteractive </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>value</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>The interactive flag is a performance hint. </p>\n\
<p>If the flag is set to true new edits will be merged with the key from previous edit. For example if you are dragging the key each drag will be merged so only the last edit of the drag is safed. If the curves have a lot of scattered edit this merge will not scale well, so it is best to to it to false in this case.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>the value to set the flag. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MAnimCurveChange.h</li>\n\
<li>MAnimCurveChange.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";