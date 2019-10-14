var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MDepthStencilStateDesc Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\', tocPrefix);\n\
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
            <h1>MDepthStencilStateDesc Class Reference</h1>\n\
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
<div class=\"title\">MDepthStencilStateDesc Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/State-and-State-Manager.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; State and State Manager</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MStateManager.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Descriptor for a complete depth-stencil state. </p>\n\
<p>This class encapsulates a complete depth-stencil state, like z buffer enable, z write enable, z comparison function, stencil enable, stencil masks and reference values. It also contains <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\" title=\"Descriptor for a depth-stencil operation. \">MStencilOpDesc</a> stencil operation descriptors for front and back faces. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#_a2\">cgFx/cgfxPassStateSetter.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#_a18\">gpuCache/gpuCacheDrawOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_image_blit_override_2view_image_blit_override_8cpp-example.html#_a46\">viewImageBlitOverride/viewImageBlitOverride.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a369f737134166c85001b00faa44a8d06\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a369f737134166c85001b00faa44a8d06\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a369f737134166c85001b00faa44a8d06\">MDepthStencilStateDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:a369f737134166c85001b00faa44a8d06\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor, builds a default depth stencil state. <br></td></tr>\n\
<tr class=\"separator:a369f737134166c85001b00faa44a8d06\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abd64097de587f86019c8df8e5ec80e4f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"abd64097de587f86019c8df8e5ec80e4f\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#abd64097de587f86019c8df8e5ec80e4f\">~MDepthStencilStateDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:abd64097de587f86019c8df8e5ec80e4f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:abd64097de587f86019c8df8e5ec80e4f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8a64466bfb43094b3aec845670b959b4\"></a>\n\
void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a8a64466bfb43094b3aec845670b959b4\">setDefaults</a> ()</td></tr>\n\
<tr class=\"memdesc:a8a64466bfb43094b3aec845670b959b4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set all values for the depth stencil state to their default values. <br></td></tr>\n\
<tr class=\"separator:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3cc2d63051cbc47328fcc6d1dc1b5068\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a3cc2d63051cbc47328fcc6d1dc1b5068\">MDepthStencilStateDesc</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:a3cc2d63051cbc47328fcc6d1dc1b5068\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a3cc2d63051cbc47328fcc6d1dc1b5068\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3cc2d63051cbc47328fcc6d1dc1b5068\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af979b7947220e7a1cccbe02b5905a2fe\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#af979b7947220e7a1cccbe02b5905a2fe\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:af979b7947220e7a1cccbe02b5905a2fe\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#af979b7947220e7a1cccbe02b5905a2fe\">More...</a><br></td></tr>\n\
<tr class=\"separator:af979b7947220e7a1cccbe02b5905a2fe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a63deb05e0b27e537fcd7ecb470b68725\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a63deb05e0b27e537fcd7ecb470b68725\">depthEnable</a></td></tr>\n\
<tr class=\"memdesc:a63deb05e0b27e537fcd7ecb470b68725\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Enables depth buffer reads and compares, default true.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a63deb05e0b27e537fcd7ecb470b68725\">More...</a><br></td></tr>\n\
<tr class=\"separator:a63deb05e0b27e537fcd7ecb470b68725\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1944b0918378af218375dd45c1f191d1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a1944b0918378af218375dd45c1f191d1\">depthWriteEnable</a></td></tr>\n\
<tr class=\"memdesc:a1944b0918378af218375dd45c1f191d1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Enables depth buffer writes, default true.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a1944b0918378af218375dd45c1f191d1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1944b0918378af218375dd45c1f191d1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aece62b93b1909efb0c8f3a2a0d9f7fff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#af4045f11e8887dda083d0122d24df4f6\">MStateManager::CompareMode</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#aece62b93b1909efb0c8f3a2a0d9f7fff\">depthFunc</a></td></tr>\n\
<tr class=\"memdesc:aece62b93b1909efb0c8f3a2a0d9f7fff\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the depth buffer comparison function, default less than.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#aece62b93b1909efb0c8f3a2a0d9f7fff\">More...</a><br></td></tr>\n\
<tr class=\"separator:aece62b93b1909efb0c8f3a2a0d9f7fff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a742c8a0eb885bafbc3f607d76fa5063a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a742c8a0eb885bafbc3f607d76fa5063a\">stencilEnable</a></td></tr>\n\
<tr class=\"memdesc:a742c8a0eb885bafbc3f607d76fa5063a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Enables stencil buffer operation.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a742c8a0eb885bafbc3f607d76fa5063a\">More...</a><br></td></tr>\n\
<tr class=\"separator:a742c8a0eb885bafbc3f607d76fa5063a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a49c8f18ab242315420ea35690f2c5c00\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned char&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a49c8f18ab242315420ea35690f2c5c00\">stencilReadMask</a></td></tr>\n\
<tr class=\"memdesc:a49c8f18ab242315420ea35690f2c5c00\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets a bitwise stencil buffer read mask, default 0xff.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a49c8f18ab242315420ea35690f2c5c00\">More...</a><br></td></tr>\n\
<tr class=\"separator:a49c8f18ab242315420ea35690f2c5c00\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8e861744605e5217260390c66343ff10\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned char&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a8e861744605e5217260390c66343ff10\">stencilWriteMask</a></td></tr>\n\
<tr class=\"memdesc:a8e861744605e5217260390c66343ff10\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets a bitwise stencil buffer write mask, default 0xff.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a8e861744605e5217260390c66343ff10\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8e861744605e5217260390c66343ff10\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aea5d4fdc9bfc7e2040e39952ae3bedb3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#aea5d4fdc9bfc7e2040e39952ae3bedb3\">stencilReferenceVal</a></td></tr>\n\
<tr class=\"memdesc:aea5d4fdc9bfc7e2040e39952ae3bedb3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the stencil reference value.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#aea5d4fdc9bfc7e2040e39952ae3bedb3\">More...</a><br></td></tr>\n\
<tr class=\"separator:aea5d4fdc9bfc7e2040e39952ae3bedb3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab71cf4c0b589679608a82717c15a5e33\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#ab71cf4c0b589679608a82717c15a5e33\">frontFace</a></td></tr>\n\
<tr class=\"memdesc:ab71cf4c0b589679608a82717c15a5e33\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the stencil op for the front facing fragments.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#ab71cf4c0b589679608a82717c15a5e33\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab71cf4c0b589679608a82717c15a5e33\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a55af5b0011d4a2053953557923debbf2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a55af5b0011d4a2053953557923debbf2\">backFace</a></td></tr>\n\
<tr class=\"memdesc:a55af5b0011d4a2053953557923debbf2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the stencil op for the back facing fragments.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state_desc.html#a55af5b0011d4a2053953557923debbf2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a55af5b0011d4a2053953557923debbf2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a3cc2d63051cbc47328fcc6d1dc1b5068\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rDesc</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Copy constructor.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rDesc</td><td>The descriptor to copy </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"af979b7947220e7a1cccbe02b5905a2fe\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rDesc</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Assignment operator.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rDesc</td><td>The descriptor to copy</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Reference to this descriptor </dd></dl>\n\
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
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a63deb05e0b27e537fcd7ecb470b68725\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool depthEnable</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Enables depth buffer reads and compares, default true. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a71\">cgFx/cgfxPassStateSetter.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_image_blit_override_2view_image_blit_override_8cpp-example.html#a47\">viewImageBlitOverride/viewImageBlitOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1944b0918378af218375dd45c1f191d1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool depthWriteEnable</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Enables depth buffer writes, default true. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a72\">cgFx/cgfxPassStateSetter.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#a21\">gpuCache/gpuCacheDrawOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_image_blit_override_2view_image_blit_override_8cpp-example.html#a48\">viewImageBlitOverride/viewImageBlitOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aece62b93b1909efb0c8f3a2a0d9f7fff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#af4045f11e8887dda083d0122d24df4f6\">MStateManager::CompareMode</a> depthFunc</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the depth buffer comparison function, default less than. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a73\">cgFx/cgfxPassStateSetter.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_image_blit_override_2view_image_blit_override_8cpp-example.html#a49\">viewImageBlitOverride/viewImageBlitOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a742c8a0eb885bafbc3f607d76fa5063a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool stencilEnable</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Enables stencil buffer operation. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a74\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a49c8f18ab242315420ea35690f2c5c00\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned char stencilReadMask</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets a bitwise stencil buffer read mask, default 0xff. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example5\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example5-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example5-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a80\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8e861744605e5217260390c66343ff10\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned char stencilWriteMask</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets a bitwise stencil buffer write mask, default 0xff. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example6\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example6-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example6-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a75\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aea5d4fdc9bfc7e2040e39952ae3bedb3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">int stencilReferenceVal</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the stencil reference value. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example7\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example7-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example7-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a79\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab71cf4c0b589679608a82717c15a5e33\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> frontFace</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the stencil op for the front facing fragments. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example8\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example8-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example8-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a76\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a55af5b0011d4a2053953557923debbf2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_stencil_op_desc.html\">MStencilOpDesc</a> backFace</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the stencil op for the back facing fragments. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example9\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example9-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example9-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a78\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MStateManager.h</li>\n\
<li>MStateManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";