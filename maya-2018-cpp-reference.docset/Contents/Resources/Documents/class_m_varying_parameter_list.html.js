var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MVaryingParameterList Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_varying_parameter_list.html\', tocPrefix);\n\
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
            <h1>MVaryingParameterList Class Reference</h1>\n\
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
<div class=\"title\">MVaryingParameterList Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-EF6A6612-DDED-485C-8B1E-A19B47BE8DDE.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 Extension 2 &gt; New Python API 2.0 classes in Maya 2016 Extension 2</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_varying_parameter_list.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_varying_parameter_list.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MVaryingParameterList.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Geometric data cache. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html\" title=\"Geometric data cache. \">MVaryingParameterList</a> specify the surface component level data used by a hardware shader, allowing Maya to handle setting up the node and user interfaces to the data, the population and access of cached data, etc. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a79\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8h-example.html#_a30\">dx11Shader/dx11Shader.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8h-example.html#_a38\">glslShader/GLSLShader.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#_a141\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a0cb226a886daa5214f850d542cdf5ca3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0cb226a886daa5214f850d542cdf5ca3\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#a0cb226a886daa5214f850d542cdf5ca3\">MVaryingParameterList</a> ()</td></tr>\n\
<tr class=\"memdesc:a0cb226a886daa5214f850d542cdf5ca3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Create a new, empty list of varying parameters. <br></td></tr>\n\
<tr class=\"separator:a0cb226a886daa5214f850d542cdf5ca3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aea2a7f97fccb83df20a48c22de9285ff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aea2a7f97fccb83df20a48c22de9285ff\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#aea2a7f97fccb83df20a48c22de9285ff\">~MVaryingParameterList</a> ()</td></tr>\n\
<tr class=\"memdesc:aea2a7f97fccb83df20a48c22de9285ff\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:aea2a7f97fccb83df20a48c22de9285ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5dca32aa8a764505aba6f29d1acf37c4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#a5dca32aa8a764505aba6f29d1acf37c4\">append</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a> &amp;element)</td></tr>\n\
<tr class=\"memdesc:a5dca32aa8a764505aba6f29d1acf37c4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Append a new parameter to this end of this list.  <a href=\"class_m_varying_parameter_list.html#a5dca32aa8a764505aba6f29d1acf37c4\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5dca32aa8a764505aba6f29d1acf37c4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a57b988236ee6a3a5e572d126d3fbccc1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">length</a> () const </td></tr>\n\
<tr class=\"memdesc:a57b988236ee6a3a5e572d126d3fbccc1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the number of parameters in this list.  <a href=\"class_m_varying_parameter_list.html#a57b988236ee6a3a5e572d126d3fbccc1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a57b988236ee6a3a5e572d126d3fbccc1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6f252312d4e4f552947a4670cb184bc7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#a6f252312d4e4f552947a4670cb184bc7\">setLength</a> (int n)</td></tr>\n\
<tr class=\"memdesc:a6f252312d4e4f552947a4670cb184bc7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the number of parameters in this list.  <a href=\"class_m_varying_parameter_list.html#a6f252312d4e4f552947a4670cb184bc7\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6f252312d4e4f552947a4670cb184bc7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afd7b2e4c7c40b34ef1c8e146c27fb059\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#afd7b2e4c7c40b34ef1c8e146c27fb059\">getElement</a> (int n) const </td></tr>\n\
<tr class=\"memdesc:afd7b2e4c7c40b34ef1c8e146c27fb059\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the nth parameter in this list.  <a href=\"class_m_varying_parameter_list.html#afd7b2e4c7c40b34ef1c8e146c27fb059\">More...</a><br></td></tr>\n\
<tr class=\"separator:afd7b2e4c7c40b34ef1c8e146c27fb059\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a677310dd12cb5c9b2cb05f5af0b397f7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#a677310dd12cb5c9b2cb05f5af0b397f7\">setElement</a> (int n, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a> &amp;p)</td></tr>\n\
<tr class=\"memdesc:a677310dd12cb5c9b2cb05f5af0b397f7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set the nth parameter in this list.  <a href=\"class_m_varying_parameter_list.html#a677310dd12cb5c9b2cb05f5af0b397f7\">More...</a><br></td></tr>\n\
<tr class=\"separator:a677310dd12cb5c9b2cb05f5af0b397f7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1cacb55e37bef2ede547729eda6ba980\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html\">MVaryingParameterList</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html#a1cacb55e37bef2ede547729eda6ba980\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html\">MVaryingParameterList</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:a1cacb55e37bef2ede547729eda6ba980\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator.  <a href=\"class_m_varying_parameter_list.html#a1cacb55e37bef2ede547729eda6ba980\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1cacb55e37bef2ede547729eda6ba980\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:aecc9e8815ca157903efdffae15d446e9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aecc9e8815ca157903efdffae15d446e9\"></a>\n\
class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>MPxHardwareShader</b></td></tr>\n\
<tr class=\"separator:aecc9e8815ca157903efdffae15d446e9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a5dca32aa8a764505aba6f29d1acf37c4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void append </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>element</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Append a new parameter to this end of this list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">element</td><td>The new parameter to append </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a97\">dx11Shader/dx11Shader.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a142\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a57b988236ee6a3a5e572d126d3fbccc1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">int length </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the number of parameters in this list. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The number of parameters in this list. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a82\">dx11Shader/dx11Shader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6f252312d4e4f552947a4670cb184bc7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void setLength </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>n</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the number of parameters in this list. </p>\n\
<p>If this is greater than the current number of parameters in the list, the caller is responsible for setting the new parameters to valid values using setElement.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">n</td><td>The number of parameters in this list. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afd7b2e4c7c40b34ef1c8e146c27fb059\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a> getElement </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>n</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the nth parameter in this list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">n</td><td>The index of the element to return</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The nth parameter in the list </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a84\">dx11Shader/dx11Shader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a677310dd12cb5c9b2cb05f5af0b397f7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void setElement </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>n</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>p</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Set the nth parameter in this list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">n</td><td>The index of the element to set </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">p</td><td>The value to set</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The nth parameter in the list </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1cacb55e37bef2ede547729eda6ba980\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html\">MVaryingParameterList</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html\">MVaryingParameterList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>src</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Assignment operator. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">src</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_varying_parameter_list.html\" title=\"Geometric data cache. \">MVaryingParameterList</a> object to copy from. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MVaryingParameterList.h</li>\n\
<li>MVaryingParameterList.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";