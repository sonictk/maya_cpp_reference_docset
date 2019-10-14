var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CRTP_IndexType&lt; Derived &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_c_r_t_p___index_type.html\', tocPrefix);\n\
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
            <h1>CRTP_IndexType&lt; Derived &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">CRTP_IndexType&lt; Derived &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskDataIndexType.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;typename Derived&gt;<br>\n\
class adsk::Data::CRTP_IndexType&lt; Derived &gt;</h3>\n\
\n\
<p>This CRTP (Curiously Recurring Template Pattern) class implements some shared methods which all derived classes can use, and for whom the implementations use the same pattern. </p>\n\
<p>For all derived index types use this declaration for the class:</p>\n\
<p>class METADATA_EXPORT MyIndex : public CRTP_IndexType&lt;MyIndex&gt; { ... }</p>\n\
<p>This will automatically instantiate a common <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#af2938c9ae36e4084bffb90aa619991a2\" title=\"Create a duplicate of this object. \">clone()</a> method as well as establishing the abstract interface each index type needs to implement. </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for CRTP_IndexType&lt; Derived &gt;:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.png\" usemap=\"#CRTP_IndexType&lt; Derived &gt;_map\" alt=\"\">\n\
  <map id=\"CRTP_IndexType&lt; Derived &gt;_map\" name=\"CRTP_IndexType&lt; Derived &gt;_map\">\n\
<area href=\"classadsk_1_1_data_1_1_index_type.html\" title=\"Complex index type for referencing metadata. \" alt=\"IndexType\" shape=\"rect\" coords=\"0,56,178,80\">\n\
<area href=\"classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \" alt=\"RefCounted\" shape=\"rect\" coords=\"0,0,178,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:af2938c9ae36e4084bffb90aa619991a2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#af2938c9ae36e4084bffb90aa619991a2\">clone</a> () const </td></tr>\n\
<tr class=\"memdesc:af2938c9ae36e4084bffb90aa619991a2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Create a duplicate of this object.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#af2938c9ae36e4084bffb90aa619991a2\">More...</a><br></td></tr>\n\
<tr class=\"separator:af2938c9ae36e4084bffb90aa619991a2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2f69e4ff8c8d64e60afa56b62d86f007\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual std::string&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a2f69e4ff8c8d64e60afa56b62d86f007\">typeName</a> () const </td></tr>\n\
<tr class=\"memdesc:a2f69e4ff8c8d64e60afa56b62d86f007\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the unique name of this index type.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a2f69e4ff8c8d64e60afa56b62d86f007\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2f69e4ff8c8d64e60afa56b62d86f007\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classadsk_1_1_data_1_1_index_type\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classadsk_1_1_data_1_1_index_type\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td></tr>\n\
<tr class=\"memitem:a9528a2d9f6428a81458e37f76b103fad inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a9528a2d9f6428a81458e37f76b103fad\">IndexType</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:a9528a2d9f6428a81458e37f76b103fad inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor, simplest level.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a9528a2d9f6428a81458e37f76b103fad\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9528a2d9f6428a81458e37f76b103fad inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4bdc2b56bee9607b892c6a481b0a3328 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual std::string&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a4bdc2b56bee9607b892c6a481b0a3328\">asString</a> () const  =0</td></tr>\n\
<tr class=\"memdesc:a4bdc2b56bee9607b892c6a481b0a3328 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get this index type value as a string.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a4bdc2b56bee9607b892c6a481b0a3328\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4bdc2b56bee9607b892c6a481b0a3328 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2c2c311245138fe7c5a9272bd3ffbf14 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a2c2c311245138fe7c5a9272bd3ffbf14\">supportsDenseMode</a> () const  =0</td></tr>\n\
<tr class=\"memdesc:a2c2c311245138fe7c5a9272bd3ffbf14 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Check if this object type supports dense packing indexing.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a2c2c311245138fe7c5a9272bd3ffbf14\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2c2c311245138fe7c5a9272bd3ffbf14 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a08f9910769b208789de2c903a8991f93 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual IndexCount&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a08f9910769b208789de2c903a8991f93\">denseSpaceBetween</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a> &amp;rhs) const  =0</td></tr>\n\
<tr class=\"memdesc:a08f9910769b208789de2c903a8991f93 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Calculate the number of elements to be packed between this one and the rhs.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a08f9910769b208789de2c903a8991f93\">More...</a><br></td></tr>\n\
<tr class=\"separator:a08f9910769b208789de2c903a8991f93 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac1f4dfbea575317d6bb107a32c2be6ca inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#ac1f4dfbea575317d6bb107a32c2be6ca\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a> &amp;rhs) const  =0</td></tr>\n\
<tr class=\"memdesc:ac1f4dfbea575317d6bb107a32c2be6ca inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Equality comparison of this object and the rhs.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#ac1f4dfbea575317d6bb107a32c2be6ca\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac1f4dfbea575317d6bb107a32c2be6ca inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3eb4f4fdc34a4a7ae028b2970dace346 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a3eb4f4fdc34a4a7ae028b2970dace346\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a> &amp;rhs) const  =0</td></tr>\n\
<tr class=\"memdesc:a3eb4f4fdc34a4a7ae028b2970dace346 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Unequality comparison of this object and the rhs.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a3eb4f4fdc34a4a7ae028b2970dace346\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3eb4f4fdc34a4a7ae028b2970dace346 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad132cbda28290d7d58d9b5557c8944dd inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#ad132cbda28290d7d58d9b5557c8944dd\">operator&lt;</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a> &amp;rhs) const  =0</td></tr>\n\
<tr class=\"memdesc:ad132cbda28290d7d58d9b5557c8944dd inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">LT-inequality comparison of this object and the rhs.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#ad132cbda28290d7d58d9b5557c8944dd\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad132cbda28290d7d58d9b5557c8944dd inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a948f29b62691805cfc85b67aaee2a468 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a948f29b62691805cfc85b67aaee2a468\">operator&lt;=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a> &amp;rhs) const  =0</td></tr>\n\
<tr class=\"memdesc:a948f29b62691805cfc85b67aaee2a468 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">LE-inequality comparison of this object and the rhs.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a948f29b62691805cfc85b67aaee2a468\">More...</a><br></td></tr>\n\
<tr class=\"separator:a948f29b62691805cfc85b67aaee2a468 inherit pub_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_static_methods_classadsk_1_1_ref_counted\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_classadsk_1_1_ref_counted\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td></tr>\n\
<tr class=\"memitem:a017b673598cf98da323123828a580828 inherit pub_static_methods_classadsk_1_1_ref_counted\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a017b673598cf98da323123828a580828\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Debug::Print</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a017b673598cf98da323123828a580828 inherit pub_static_methods_classadsk_1_1_ref_counted\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a Print request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> object.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a017b673598cf98da323123828a580828\">More...</a><br></td></tr>\n\
<tr class=\"separator:a017b673598cf98da323123828a580828 inherit pub_static_methods_classadsk_1_1_ref_counted\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9d1b2b85361a0ceb15861047253b31bc inherit pub_static_methods_classadsk_1_1_ref_counted\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#a9d1b2b85361a0ceb15861047253b31bc\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Debug::Footprint</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a9d1b2b85361a0ceb15861047253b31bc inherit pub_static_methods_classadsk_1_1_ref_counted\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a footprint request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> object.  <a href=\"classadsk_1_1_data_1_1_c_r_t_p___index_type.html#a9d1b2b85361a0ceb15861047253b31bc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9d1b2b85361a0ceb15861047253b31bc inherit pub_static_methods_classadsk_1_1_ref_counted\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pro_methods_classadsk_1_1_data_1_1_index_type\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_methods_classadsk_1_1_data_1_1_index_type\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td></tr>\n\
<tr class=\"memitem:a7c522e4e059ae2c20d11fe9e5544df98 inherit pro_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7c522e4e059ae2c20d11fe9e5544df98\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a7c522e4e059ae2c20d11fe9e5544df98\">~IndexType</a> ()</td></tr>\n\
<tr class=\"memdesc:a7c522e4e059ae2c20d11fe9e5544df98 inherit pro_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor, nothing to do. <br></td></tr>\n\
<tr class=\"separator:a7c522e4e059ae2c20d11fe9e5544df98 inherit pro_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5728e6fc25f1f5ba84329c301647f50b inherit pro_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5728e6fc25f1f5ba84329c301647f50b\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a5728e6fc25f1f5ba84329c301647f50b\">IndexType</a> ()</td></tr>\n\
<tr class=\"memdesc:a5728e6fc25f1f5ba84329c301647f50b inherit pro_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor, should never be used. <br></td></tr>\n\
<tr class=\"separator:a5728e6fc25f1f5ba84329c301647f50b inherit pro_methods_classadsk_1_1_data_1_1_index_type\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pro_methods_classadsk_1_1_ref_counted\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_methods_classadsk_1_1_ref_counted\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a></td></tr>\n\
<tr class=\"memitem:aebb1990f519367c00c1861b5b3b3e0a5 inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aebb1990f519367c00c1861b5b3b3e0a5\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#aebb1990f519367c00c1861b5b3b3e0a5\">RefCounted</a> ()</td></tr>\n\
<tr class=\"memdesc:aebb1990f519367c00c1861b5b3b3e0a5 inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> default ctor. <br></td></tr>\n\
<tr class=\"separator:aebb1990f519367c00c1861b5b3b3e0a5 inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af66f84bd2408304143da35229d0a7d3e inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af66f84bd2408304143da35229d0a7d3e\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#af66f84bd2408304143da35229d0a7d3e\">RefCounted</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\">RefCounted</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:af66f84bd2408304143da35229d0a7d3e inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> copy ctor. <br></td></tr>\n\
<tr class=\"separator:af66f84bd2408304143da35229d0a7d3e inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae725be496ffd7a9d4bc812d5bb26d58f inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ae725be496ffd7a9d4bc812d5bb26d58f\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html#ae725be496ffd7a9d4bc812d5bb26d58f\">~RefCounted</a> ()</td></tr>\n\
<tr class=\"memdesc:ae725be496ffd7a9d4bc812d5bb26d58f inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_ref_counted.html\" title=\"Class implementing standard reference counting. \">RefCounted</a> dtor. <br></td></tr>\n\
<tr class=\"separator:ae725be496ffd7a9d4bc812d5bb26d58f inherit pro_methods_classadsk_1_1_ref_counted\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"af2938c9ae36e4084bffb90aa619991a2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a>* clone </td>\n\
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
<p>Create a duplicate of this object. </p>\n\
<p>This is virtual so that derived types create the correct type of object. </p><dl class=\"section return\"><dt>Returns</dt><dd>Pointer to copy of this object </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#ad4d682c664945746643cbae235aa0c89\">IndexType</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2f69e4ff8c8d64e60afa56b62d86f007\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual std::string typeName </td>\n\
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
<p>Get the unique name of this index type. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>String containing the index type name </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#a59b98bfe79d0f9f2fb938392cbb5ede8\">IndexType</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>adskDataIndexType.h</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";