var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AccessorFactory&lt; AccessorType &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_accessor_factory.html\', tocPrefix);\n\
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
            <h1>AccessorFactory&lt; AccessorType &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">AccessorFactory&lt; AccessorType &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_accessor_factory.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskDataAccessor.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;typename AccessorType&gt;<br>\n\
class adsk::Data::AccessorFactory&lt; AccessorType &gt;</h3>\n\
\n\
<p>Calls the specified <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">Accessor</a> type\'s default constructor. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">Accessor</a> factories automatically register themselves upon construction and deregister themselves upon destruction. So the creator of a factory must maintain it in-scope as long as the factory for the supported file extension(s) is needed. Typically, this will be a file-scope variable declared with the accessor implementation.</p>\n\
<p>For example (in myAccessor.cpp), to support *.myext files:</p>\n\
<p>class MyAccessor : public <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">adsk::Data::Accessor</a> { ... };</p>\n\
<p>adsk::Data::AccessorFactory&lt; MyAccessor &gt; myFactory( \"myext\" ); </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for AccessorFactory&lt; AccessorType &gt;:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_data_1_1_accessor_factory.png\" usemap=\"#AccessorFactory&lt; AccessorType &gt;_map\" alt=\"\">\n\
  <map id=\"AccessorFactory&lt; AccessorType &gt;_map\" name=\"AccessorFactory&lt; AccessorType &gt;_map\">\n\
<area href=\"classadsk_1_1_data_1_1_accessor_factory_base.html\" title=\"Base class for Accessor factories. \" alt=\"AccessorFactoryBase\" shape=\"rect\" coords=\"0,0,216,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a8da1637634330dabf42a816c93eadd7f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual std::auto_ptr&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\">Accessor</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory.html#a8da1637634330dabf42a816c93eadd7f\">create</a> () const </td></tr>\n\
<tr class=\"memdesc:a8da1637634330dabf42a816c93eadd7f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a factory for creating accessors handling the supported file type.  <a href=\"classadsk_1_1_data_1_1_accessor_factory.html#a8da1637634330dabf42a816c93eadd7f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8da1637634330dabf42a816c93eadd7f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html\">AccessorFactoryBase</a></td></tr>\n\
<tr class=\"memitem:a16ab15cf7313059e027f169be93fcade inherit pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a16ab15cf7313059e027f169be93fcade\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html#a16ab15cf7313059e027f169be93fcade\">~AccessorFactoryBase</a> ()</td></tr>\n\
<tr class=\"memdesc:a16ab15cf7313059e027f169be93fcade inherit pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Unregisters the factory. <br></td></tr>\n\
<tr class=\"separator:a16ab15cf7313059e027f169be93fcade inherit pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html\">AccessorFactoryBase</a></td></tr>\n\
<tr class=\"memitem:acf4bd5bf8ed0283ee6301d00b50a90d5 inherit pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html#acf4bd5bf8ed0283ee6301d00b50a90d5\">AccessorFactoryBase</a> (const std::string &amp;fileNameExtension)</td></tr>\n\
<tr class=\"memdesc:acf4bd5bf8ed0283ee6301d00b50a90d5 inherit pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Registers the factory.  <a href=\"classadsk_1_1_data_1_1_accessor_factory.html#acf4bd5bf8ed0283ee6301d00b50a90d5\">More...</a><br></td></tr>\n\
<tr class=\"separator:acf4bd5bf8ed0283ee6301d00b50a90d5 inherit pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a8da1637634330dabf42a816c93eadd7f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual std::auto_ptr&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\">Accessor</a> &gt; create </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a factory for creating accessors handling the supported file type. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A new accessor for the file type supported by the concrete factory. </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html#a1735bd93720b6e642c301f2951d112fe\">AccessorFactoryBase</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>adskDataAccessor.h</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";