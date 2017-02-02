var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>RefCounted Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_ref_counted.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>RefCounted Class Reference</h1>\n\
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
<div class=\"title\">RefCounted Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_ref_counted.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_ref_counted.html#pro-methods\">Protected Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskRefCounted.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class implementing standard reference counting. </p>\n\
<p>Simple abstract reference counting class, derive from it and implement the destructor, copy constructor, and assignment operator. Maintains a reference count and indicates deletion is safe when the count drops to zero. </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for RefCounted:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_ref_counted.png\" usemap=\"#RefCounted_map\" alt=\"\">\n\
  <map id=\"RefCounted_map\" name=\"RefCounted_map\">\n\
<area href=\"classadsk_1_1_data_1_1_index_type.html\" title=\"Complex index type for referencing metadata. \" alt=\"IndexType\" shape=\"rect\" coords=\"206,56,402,80\">\n\
<area href=\"classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \" alt=\"Structure\" shape=\"rect\" coords=\"412,56,608,80\">\n\
<area href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html\" title=\"This CRTP (Curiously Recurring Template Pattern) class implements some shared methods which all deriv...\" alt=\"CRTP_IndexType&lt; Derived &gt;\" shape=\"rect\" coords=\"0,112,196,136\">\n\
<area href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html\" alt=\"CRTP_IndexType&lt; IndexPair &gt;\" shape=\"rect\" coords=\"206,112,402,136\">\n\
<area href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html\" alt=\"CRTP_IndexType&lt; IndexString &gt;\" shape=\"rect\" coords=\"412,112,608,136\">\n\
<area href=\"classadsk_1_1_data_1_1_index_pair.html\" title=\"Index type which uses a pair of IndexCount values for the index mapping. \" alt=\"IndexPair\" shape=\"rect\" coords=\"206,168,402,192\">\n\
<area href=\"classadsk_1_1_data_1_1_index_string.html\" title=\"Index type which uses a String for the index mapping. \" alt=\"IndexString\" shape=\"rect\" coords=\"412,168,608,192\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a017b673598cf98da323123828a580828\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a017b673598cf98da323123828a580828\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Debug::Print</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a017b673598cf98da323123828a580828\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a Print request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> object.  <a href=\"classadsk_1_1_ref_counted.html#a017b673598cf98da323123828a580828\">More...</a><br></td></tr>\n\
<tr class=\"separator:a017b673598cf98da323123828a580828\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9d1b2b85361a0ceb15861047253b31bc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a9d1b2b85361a0ceb15861047253b31bc\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Debug::Footprint</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a9d1b2b85361a0ceb15861047253b31bc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a footprint request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> object.  <a href=\"classadsk_1_1_ref_counted.html#a9d1b2b85361a0ceb15861047253b31bc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9d1b2b85361a0ceb15861047253b31bc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-methods\"></a>\n\
Protected Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aebb1990f519367c00c1861b5b3b3e0a5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aebb1990f519367c00c1861b5b3b3e0a5\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#aebb1990f519367c00c1861b5b3b3e0a5\">RefCounted</a> ()</td></tr>\n\
<tr class=\"memdesc:aebb1990f519367c00c1861b5b3b3e0a5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> default ctor. <br></td></tr>\n\
<tr class=\"separator:aebb1990f519367c00c1861b5b3b3e0a5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af66f84bd2408304143da35229d0a7d3e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af66f84bd2408304143da35229d0a7d3e\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#af66f84bd2408304143da35229d0a7d3e\">RefCounted</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:af66f84bd2408304143da35229d0a7d3e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> copy ctor. <br></td></tr>\n\
<tr class=\"separator:af66f84bd2408304143da35229d0a7d3e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae725be496ffd7a9d4bc812d5bb26d58f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ae725be496ffd7a9d4bc812d5bb26d58f\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#ae725be496ffd7a9d4bc812d5bb26d58f\">~RefCounted</a> ()</td></tr>\n\
<tr class=\"memdesc:ae725be496ffd7a9d4bc812d5bb26d58f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> dtor. <br></td></tr>\n\
<tr class=\"separator:ae725be496ffd7a9d4bc812d5bb26d58f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a017b673598cf98da323123828a580828\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>me</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Debug::Print</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>request</em>&#160;</td>\n\
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
<p>Answer a Print request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> object. </p>\n\
<p>Use the request object to dump all information on the \"me\" <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a>, or all static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> information if \"me\" is NULL.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">me</td><td>Pointer to object to debug, NULL means class static </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">request</td><td>Print request object</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the request was successfully processed. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9d1b2b85361a0ceb15861047253b31bc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>me</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Debug::Footprint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>request</em>&#160;</td>\n\
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
<p>Answer a footprint request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> object. </p>\n\
<p>Populate the Footprint request with the information on all data stored within this class if \"me\" is NULL, otherwise the information stored in the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> object pointed at by \"me\".</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">me</td><td>Pointer to object to footprint, NULL means class static </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">request</td><td>Footprint object to populate</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the request was successfully processed. The Footprint object will have all information added to it. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskRefCounted.h</li>\n\
<li>adskRefCounted.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";