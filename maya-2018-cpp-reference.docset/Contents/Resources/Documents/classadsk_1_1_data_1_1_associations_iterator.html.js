var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AssociationsIterator Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_associations_iterator.html\', tocPrefix);\n\
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
            <h1>AssociationsIterator Class Reference</h1>\n\
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
<div class=\"title\">AssociationsIterator Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-53D14E65-0134-49F2-8913-2AB7B2B8AC1E.htm\">Maya .NET API &gt; Meta Data</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_associations_iterator.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_data_1_1_associations_iterator.html#pro-methods\">Protected Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskDataAssociationsIterator.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class handling iteration over Channels in an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">Associations</a> object. </p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\" title=\"Class handling a named association of a data array with other data. \">Channel</a> list is sorted by name so this iterator class will walk in that order.</p>\n\
<p>For technical reasons this class lives outside the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">Associations</a> class though really it is part of it. A typedef is set up inside that class so that you can use it like a standard iterator:</p>\n\
<p>for( Associations::iterator iterator = myMetadata.begin(); iterator != myMetadata.end(); ++iterator ) { processChannel( *iterator ); } </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a3b1ccd6ebbe706c903c56367bc51a055\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html#a3b1ccd6ebbe706c903c56367bc51a055\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\">AssociationsIterator</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Debug::Print</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a3b1ccd6ebbe706c903c56367bc51a055\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a Print request for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\" title=\"Class handling iteration over Channels in an Associations object. \">AssociationsIterator</a> object.  <a href=\"classadsk_1_1_data_1_1_associations_iterator.html#a3b1ccd6ebbe706c903c56367bc51a055\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3b1ccd6ebbe706c903c56367bc51a055\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aad1fd0711f4363e2a7ac70c269fb1ccf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html#aad1fd0711f4363e2a7ac70c269fb1ccf\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\">AssociationsIterator</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Debug::Footprint</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:aad1fd0711f4363e2a7ac70c269fb1ccf\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a footprint request for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\" title=\"Class handling iteration over Channels in an Associations object. \">AssociationsIterator</a> object.  <a href=\"classadsk_1_1_data_1_1_associations_iterator.html#aad1fd0711f4363e2a7ac70c269fb1ccf\">More...</a><br></td></tr>\n\
<tr class=\"separator:aad1fd0711f4363e2a7ac70c269fb1ccf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-methods\"></a>\n\
Protected Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aa1bc44f21cc6157c471d8e5cc37c9d92\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">AssociationsIteratorImpl &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html#aa1bc44f21cc6157c471d8e5cc37c9d92\">impl</a> ()</td></tr>\n\
<tr class=\"memdesc:aa1bc44f21cc6157c471d8e5cc37c9d92\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the implementation class.  <a href=\"classadsk_1_1_data_1_1_associations_iterator.html#aa1bc44f21cc6157c471d8e5cc37c9d92\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa1bc44f21cc6157c471d8e5cc37c9d92\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aeaad4fdbd823375346d41764c0dc0c6e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">AssociationsIteratorImpl const &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html#aeaad4fdbd823375346d41764c0dc0c6e\">impl</a> () const </td></tr>\n\
<tr class=\"memdesc:aeaad4fdbd823375346d41764c0dc0c6e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the implementation class in const form.  <a href=\"classadsk_1_1_data_1_1_associations_iterator.html#aeaad4fdbd823375346d41764c0dc0c6e\">More...</a><br></td></tr>\n\
<tr class=\"separator:aeaad4fdbd823375346d41764c0dc0c6e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aa1bc44f21cc6157c471d8e5cc37c9d92\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">AssociationsIteratorImpl &amp; impl </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the implementation class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Reference to this class\'s implementation object </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aeaad4fdbd823375346d41764c0dc0c6e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">AssociationsIteratorImpl const &amp; impl </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the implementation class in const form. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Const reference to this class\'s implementation object </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3b1ccd6ebbe706c903c56367bc51a055\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\">AssociationsIterator</a> *&#160;</td>\n\
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
<p>Answer a Print request for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\" title=\"Class handling iteration over Channels in an Associations object. \">AssociationsIterator</a> object. </p>\n\
<p>Use the request object to dump all information on the \"me\" object or all static class information if \"me\" is NULL.</p>\n\
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
<a class=\"anchor\" id=\"aad1fd0711f4363e2a7ac70c269fb1ccf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\">AssociationsIterator</a> *&#160;</td>\n\
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
<p>Answer a footprint request for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\" title=\"Class handling iteration over Channels in an Associations object. \">AssociationsIterator</a> object. </p>\n\
<p>Populate the Footprint request with the information on all data stored within this class if \"me\" is NULL, otherwise the information stored in the object pointed at by \"me\".</p>\n\
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
<li>adskDataAssociationsIterator.h</li>\n\
<li>adskDataAssociationsIterator.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";