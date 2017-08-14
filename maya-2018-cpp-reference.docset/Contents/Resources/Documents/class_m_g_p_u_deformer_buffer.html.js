var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MGPUDeformerBuffer Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_g_p_u_deformer_buffer.html\', tocPrefix);\n\
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
            <h1>MGPUDeformerBuffer Class Reference</h1>\n\
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
<div class=\"title\">MGPUDeformerBuffer Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-C9CFF45F-4CAD-46AE-9856-75FBB01AFC96.htm\">What\'s New / What\'s Changed? &gt; What\'s New in Maya API in 2018 &gt; What\'s New in the Animation API</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_g_p_u_deformer_buffer.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MPxGPUDeformer.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Store GPU Representation of a data buffer. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html\" title=\"Store GPU Representation of a data buffer. \">MGPUDeformerBuffer</a> is a simple buffer structure to group data related to a single GPU buffer. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aa04f90e5d9e2244241c42e6f47cb6d88\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html#aa04f90e5d9e2244241c42e6f47cb6d88\">MGPUDeformerBuffer</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_unique_string.html\">MUniqueString</a> &amp;name, bool readOnly, unsigned int elementSizeInBytes, unsigned int elementCount, unsigned int capacityInBytes, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\">MAutoCLMem</a> &amp;buffer, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a> &amp;event)</td></tr>\n\
<tr class=\"memdesc:aa04f90e5d9e2244241c42e6f47cb6d88\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructs an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html\" title=\"Store GPU Representation of a data buffer. \">MGPUDeformerBuffer</a> for an existing <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\" title=\"Auto pointer for cl_mem objects. \">MAutoCLMem</a>.  <a href=\"class_m_g_p_u_deformer_buffer.html#aa04f90e5d9e2244241c42e6f47cb6d88\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa04f90e5d9e2244241c42e6f47cb6d88\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7afaf3442219482fed748603362c910f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7afaf3442219482fed748603362c910f\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html#a7afaf3442219482fed748603362c910f\">MGPUDeformerBuffer</a> ()</td></tr>\n\
<tr class=\"memdesc:a7afaf3442219482fed748603362c910f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructs an empty <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html\" title=\"Store GPU Representation of a data buffer. \">MGPUDeformerBuffer</a> which cannot be used. <br></td></tr>\n\
<tr class=\"separator:a7afaf3442219482fed748603362c910f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac314ef31016f17a0ca6012ca53d6ee6b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac314ef31016f17a0ca6012ca53d6ee6b\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html#ac314ef31016f17a0ca6012ca53d6ee6b\">~MGPUDeformerBuffer</a> ()</td></tr>\n\
<tr class=\"memdesc:ac314ef31016f17a0ca6012ca53d6ee6b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:ac314ef31016f17a0ca6012ca53d6ee6b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aac1b70a2ed67ead038c4d3f5ac4d8a81\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html#aac1b70a2ed67ead038c4d3f5ac4d8a81\">isValid</a> () const </td></tr>\n\
<tr class=\"separator:aac1b70a2ed67ead038c4d3f5ac4d8a81\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aa04f90e5d9e2244241c42e6f47cb6d88\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html\">MGPUDeformerBuffer</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_unique_string.html\">MUniqueString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>readOnly</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>elementSizeInBytes</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>elementCount</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>capacityInBytes</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\">MAutoCLMem</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>buffer</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>event</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructs an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html\" title=\"Store GPU Representation of a data buffer. \">MGPUDeformerBuffer</a> for an existing <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\" title=\"Auto pointer for cl_mem objects. \">MAutoCLMem</a>. </p>\n\
<p>capacityInBytes must be less than or equal to the actual size of the cl_mem held by buffer. elementSizeInBytes() * elementCount must be less than or equal to capacityInBytes.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>The name of the buffer. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">readOnly</td><td>True if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html\" title=\"Store GPU Representation of a data buffer. \">MGPUDeformerBuffer</a> is a read only buffer. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">elementSizeInBytes</td><td>The size of each element in the buffer in bytes. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">elementCount</td><td>The number of elements stored in the buffer. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">capacityInBytes</td><td>The capacity of the cl_mem in bytes. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">buffer</td><td>The OpenCL memory resource. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">event</td><td>The data is buffer is safe to read when event holds a NULL event or event is complete. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aac1b70a2ed67ead038c4d3f5ac4d8a81\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isValid </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_buffer.html\" title=\"Store GPU Representation of a data buffer. \">MGPUDeformerBuffer</a> is valid and safe to use. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxGPUDeformer.h</li>\n\
<li>MPxGPUDeformer.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";