var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MTrimBoundaryArray Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_trim_boundary_array.html\', tocPrefix);\n\
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
            <h1>MTrimBoundaryArray Class Reference</h1>\n\
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
<div class=\"title\">MTrimBoundaryArray Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_trim_boundary_array.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_trim_boundary_array.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MTrimBoundaryArray.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>An array class for trim boundaries. </p>\n\
<p>This class implements an array of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\" title=\"Array of MObjects data type. \">MObjectArray</a> objects. Each <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\" title=\"Array of MObjects data type. \">MObjectArray</a> is a collection of curves (edges, in fact) that represent a trim boundary.</p>\n\
<p>This class owns all of the MObjectArrays in the class. It doesn\'t hold a reference to any other <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\" title=\"Array of MObjects data type. \">MObjectArray</a>. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_abc_export_2_maya_nurbs_surface_writer_8cpp-example.html#_a13\">AbcExport/MayaNurbsSurfaceWriter.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_abc_import_2_nurbs_surface_helper_8cpp-example.html#_a1\">AbcImport/NurbsSurfaceHelper.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2_cache_reader_alembic_8cpp-example.html#_a18\">gpuCache/CacheReaderAlembic.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aba4fa4b9b99a93e9afb99874cbc5f3b4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#aba4fa4b9b99a93e9afb99874cbc5f3b4\">MTrimBoundaryArray</a> ()</td></tr>\n\
<tr class=\"memdesc:aba4fa4b9b99a93e9afb99874cbc5f3b4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor.  <a href=\"class_m_trim_boundary_array.html#aba4fa4b9b99a93e9afb99874cbc5f3b4\">More...</a><br></td></tr>\n\
<tr class=\"separator:aba4fa4b9b99a93e9afb99874cbc5f3b4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0a2cff1bcf523f8591e334a013b5a34e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a0a2cff1bcf523f8591e334a013b5a34e\">MTrimBoundaryArray</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html\">MTrimBoundaryArray</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:a0a2cff1bcf523f8591e334a013b5a34e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy Constructor.  <a href=\"class_m_trim_boundary_array.html#a0a2cff1bcf523f8591e334a013b5a34e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0a2cff1bcf523f8591e334a013b5a34e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adf7108ed9bcec7ebf3df4f2c184fcf1b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"adf7108ed9bcec7ebf3df4f2c184fcf1b\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#adf7108ed9bcec7ebf3df4f2c184fcf1b\">~MTrimBoundaryArray</a> ()</td></tr>\n\
<tr class=\"memdesc:adf7108ed9bcec7ebf3df4f2c184fcf1b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:adf7108ed9bcec7ebf3df4f2c184fcf1b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ababd290be5d4557b374857d2c04bfac4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#ababd290be5d4557b374857d2c04bfac4\">reserve</a> (unsigned int <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>)</td></tr>\n\
<tr class=\"memdesc:ababd290be5d4557b374857d2c04bfac4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to reserve the capacity of the array.  <a href=\"class_m_trim_boundary_array.html#ababd290be5d4557b374857d2c04bfac4\">More...</a><br></td></tr>\n\
<tr class=\"separator:ababd290be5d4557b374857d2c04bfac4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a580388f31f60c46fac867ca48a48da1e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a580388f31f60c46fac867ca48a48da1e\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a> () const </td></tr>\n\
<tr class=\"memdesc:a580388f31f60c46fac867ca48a48da1e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the length of the trim boundary array. <br></td></tr>\n\
<tr class=\"separator:a580388f31f60c46fac867ca48a48da1e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a90ca964ebcc1b02bbcde225edd49e812\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a90ca964ebcc1b02bbcde225edd49e812\">size</a> () const </td></tr>\n\
<tr class=\"memdesc:a90ca964ebcc1b02bbcde225edd49e812\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the size of the trim boundary array.  <a href=\"class_m_trim_boundary_array.html#a90ca964ebcc1b02bbcde225edd49e812\">More...</a><br></td></tr>\n\
<tr class=\"separator:a90ca964ebcc1b02bbcde225edd49e812\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af621cdb4dcb20d78d108e9598f3774a9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#af621cdb4dcb20d78d108e9598f3774a9\">operator[]</a> (unsigned int index) const </td></tr>\n\
<tr class=\"memdesc:af621cdb4dcb20d78d108e9598f3774a9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The index operator.  <a href=\"class_m_trim_boundary_array.html#af621cdb4dcb20d78d108e9598f3774a9\">More...</a><br></td></tr>\n\
<tr class=\"separator:af621cdb4dcb20d78d108e9598f3774a9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af99b4425d90f73b88634ec50327ae48a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#af99b4425d90f73b88634ec50327ae48a\">get</a> (unsigned int index) const </td></tr>\n\
<tr class=\"memdesc:af99b4425d90f73b88634ec50327ae48a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The method returns the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\" title=\"Array of MObjects data type. \">MObjectArray</a> specified by the index.  <a href=\"class_m_trim_boundary_array.html#af99b4425d90f73b88634ec50327ae48a\">More...</a><br></td></tr>\n\
<tr class=\"separator:af99b4425d90f73b88634ec50327ae48a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3061e5fe5410c821b706c5c971ac9440\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a3061e5fe5410c821b706c5c971ac9440\">set</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;boundary, unsigned int index)</td></tr>\n\
<tr class=\"memdesc:a3061e5fe5410c821b706c5c971ac9440\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to replace an existing boundary array.  <a href=\"class_m_trim_boundary_array.html#a3061e5fe5410c821b706c5c971ac9440\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3061e5fe5410c821b706c5c971ac9440\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a93c1a0a6fcc92cff32fe4c3a2c37f78e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a93c1a0a6fcc92cff32fe4c3a2c37f78e\">insert</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;boundary, unsigned int index)</td></tr>\n\
<tr class=\"memdesc:a93c1a0a6fcc92cff32fe4c3a2c37f78e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method adds a new boundary into the \"index\" position.  <a href=\"class_m_trim_boundary_array.html#a93c1a0a6fcc92cff32fe4c3a2c37f78e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a93c1a0a6fcc92cff32fe4c3a2c37f78e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a58aa0ffd87a8ca32834b827e1452f23e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a58aa0ffd87a8ca32834b827e1452f23e\">append</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;boundary)</td></tr>\n\
<tr class=\"memdesc:a58aa0ffd87a8ca32834b827e1452f23e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Add a new boundary array at the end of the list.  <a href=\"class_m_trim_boundary_array.html#a58aa0ffd87a8ca32834b827e1452f23e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a58aa0ffd87a8ca32834b827e1452f23e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af05b9926a5e8e7b8e7a9e98a13c839b6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#af05b9926a5e8e7b8e7a9e98a13c839b6\">remove</a> (unsigned int index)</td></tr>\n\
<tr class=\"memdesc:af05b9926a5e8e7b8e7a9e98a13c839b6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method removes an existing boundary from the list.  <a href=\"class_m_trim_boundary_array.html#af05b9926a5e8e7b8e7a9e98a13c839b6\">More...</a><br></td></tr>\n\
<tr class=\"separator:af05b9926a5e8e7b8e7a9e98a13c839b6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad5522f028dde0080b753279426415a4a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#ad5522f028dde0080b753279426415a4a\">clear</a> ()</td></tr>\n\
<tr class=\"memdesc:ad5522f028dde0080b753279426415a4a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method clears the trim boundary array.  <a href=\"class_m_trim_boundary_array.html#ad5522f028dde0080b753279426415a4a\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad5522f028dde0080b753279426415a4a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8c5c9d056371db0b771e14526c08b520\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a8c5c9d056371db0b771e14526c08b520\">getMergedBoundary</a> (unsigned int index, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *status=NULL) const </td></tr>\n\
<tr class=\"memdesc:a8c5c9d056371db0b771e14526c08b520\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This function create a curve that represent all curves of the boundary.  <a href=\"class_m_trim_boundary_array.html#a8c5c9d056371db0b771e14526c08b520\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8c5c9d056371db0b771e14526c08b520\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_trim_boundary_array.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aba4fa4b9b99a93e9afb99874cbc5f3b4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html\">MTrimBoundaryArray</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Default constructor. </p>\n\
<p>The instance is set to contain no elements. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0a2cff1bcf523f8591e334a013b5a34e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html\">MTrimBoundaryArray</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_trim_boundary_array.html\">MTrimBoundaryArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy Constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>the array with which to initialize this instance </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ababd290be5d4557b374857d2c04bfac4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> reserve </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>reserveLength</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to reserve the capacity of the array. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">reserveLength</td><td>the number of items to reserve</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>MS::kSuccess if the reserve worked and MS::kFailure otherwise </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a90ca964ebcc1b02bbcde225edd49e812\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int size </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns the size of the trim boundary array. </p>\n\
<p>The size and the length are the same. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af621cdb4dcb20d78d108e9598f3774a9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp; operator[] </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>The index operator. </p>\n\
<p>NOTE: no bounds are checked by this method.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>value indicating which array to return</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\" title=\"Array of MObjects data type. \">MObjectArray</a> requested </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af99b4425d90f73b88634ec50327ae48a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp; get </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>The method returns the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\" title=\"Array of MObjects data type. \">MObjectArray</a> specified by the index. </p>\n\
<p>NOTE: no bounds are checked by this method.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>value indicating which array to return</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\" title=\"Array of MObjects data type. \">MObjectArray</a> requested </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2_cache_reader_alembic_8cpp-example.html#a19\">gpuCache/CacheReaderAlembic.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3061e5fe5410c821b706c5c971ac9440\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> set </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>boundary</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to replace an existing boundary array. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">boundary</td><td>the boundary object array to set </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>the index to place the boundary array at</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>MS::kSuccess if the set worked and MS::kFailure otherwise </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a93c1a0a6fcc92cff32fe4c3a2c37f78e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> insert </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>boundary</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method adds a new boundary into the \"index\" position. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">boundary</td><td>the object array to add </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>the index to add the boundary array at</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the insert worked and MS::kFailure otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a58aa0ffd87a8ca32834b827e1452f23e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> append </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>boundary</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Add a new boundary array at the end of the list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">boundary</td><td>the boundary array to append</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the append worked and MS::kFailure otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_abc_import_2_nurbs_surface_helper_8cpp-example.html#a18\">AbcImport/NurbsSurfaceHelper.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2_cache_reader_alembic_8cpp-example.html#a27\">gpuCache/CacheReaderAlembic.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af05b9926a5e8e7b8e7a9e98a13c839b6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> remove </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method removes an existing boundary from the list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>the index of the array to remove</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the remove worked and MS::kFailure otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad5522f028dde0080b753279426415a4a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> clear </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method clears the trim boundary array. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the clear worked and MS::kFailure otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_abc_import_2_nurbs_surface_helper_8cpp-example.html#a30\">AbcImport/NurbsSurfaceHelper.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2_cache_reader_alembic_8cpp-example.html#a36\">gpuCache/CacheReaderAlembic.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8c5c9d056371db0b771e14526c08b520\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> getMergedBoundary </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>status</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This function create a curve that represent all curves of the boundary. </p>\n\
<p>The original boundary edges are not changed. Note that the resulting curve is not added to the current model but is owned by an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> which is of type kNurbsCurveData.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>the index to the boundary array that should be used to create the curve </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">status</td><td>return status of the method</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kSuccess if the curve creation worked and MS::kFailure otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_abc_import_2_nurbs_surface_helper_8cpp-example.html#a20\">AbcImport/NurbsSurfaceHelper.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2_cache_reader_alembic_8cpp-example.html#a29\">gpuCache/CacheReaderAlembic.cpp</a>.</dd></div>\n\
</dl>\n\
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
<li>MTrimBoundaryArray.h</li>\n\
<li>MTrimBoundaryArray.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";