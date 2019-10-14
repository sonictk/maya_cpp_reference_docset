var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxGlBuffer Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_gl_buffer.html\', tocPrefix);\n\
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
            <h1>MPxGlBuffer Class Reference</h1>\n\
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
<div class=\"title\">MPxGlBuffer Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_u_i.html\">OpenMayaUI - API module for user interface</a> &#124; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___m_px.html\">Proxy classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2/C-API-Changes-in-Maya-2016.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016 &gt; C++ API Changes in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2/New-Python-API-2-0-classes-in-2.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016 &gt; New Python API 2.0 classes in Maya 2016</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_px_gl_buffer.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_px_gl_buffer.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MPxGlBuffer.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p><b>This method is obsolete. </b></p>\n\
<dl class=\"deprecated\"><dt><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/deprecated.html#_deprecated000316\">Deprecated:</a></b></dt><dd>Use <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html\" title=\"Base class for defining a rendering override. \">MHWRender::MRenderOverride</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MHWRender::MRenderTarget</a> instead.</dd></dl>\n\
<p>Historically this class was used to created offscreen buffers on Linux. This class is now using FBO. Invoke <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a1ba274dbf91776c94ec9efaf5a3fe57e\" title=\"Create a frame buffer object where the renderer result will be stored. \">openFbo()</a> method to create a Frame Buffer Object. The contents of the frame buffer object (FBO) can be read back by using the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a8dd08f9597535fcde18dceb112371b66\" title=\"If a frame buffer object was created using the method openFbo, then this method can be used to bind t...\">bindFbo()</a> method and OpenGl calls to read pixels. After rendering and reading pixels, the frame buffer object can be destroyed by calling <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#ab2f055f412dfd0e3beb1be17e92b033d\" title=\"Destroy a frame buffer object that was created by createFbo. \">closeFbo()</a>. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a4f6e36223cea34c2f803829a5f31c042\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a4f6e36223cea34c2f803829a5f31c042\">MPxGlBuffer</a> ()</td></tr>\n\
<tr class=\"memdesc:a4f6e36223cea34c2f803829a5f31c042\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Construct an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html\" title=\"This method is obsolete. \">MPxGlBuffer</a> for use with the currently active view.  <a href=\"class_m_px_gl_buffer.html#a4f6e36223cea34c2f803829a5f31c042\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4f6e36223cea34c2f803829a5f31c042\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a21118c859c3efb891e4c8a3129f64b1b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a21118c859c3efb891e4c8a3129f64b1b\">MPxGlBuffer</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;view)</td></tr>\n\
<tr class=\"memdesc:a21118c859c3efb891e4c8a3129f64b1b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Construct an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html\" title=\"This method is obsolete. \">MPxGlBuffer</a> for use with a specified view.  <a href=\"class_m_px_gl_buffer.html#a21118c859c3efb891e4c8a3129f64b1b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a21118c859c3efb891e4c8a3129f64b1b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1ba274dbf91776c94ec9efaf5a3fe57e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a1ba274dbf91776c94ec9efaf5a3fe57e\">openFbo</a> (short width, short height, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a1ba274dbf91776c94ec9efaf5a3fe57e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Create a frame buffer object where the renderer result will be stored.  <a href=\"class_m_px_gl_buffer.html#a1ba274dbf91776c94ec9efaf5a3fe57e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1ba274dbf91776c94ec9efaf5a3fe57e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab2f055f412dfd0e3beb1be17e92b033d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#ab2f055f412dfd0e3beb1be17e92b033d\">closeFbo</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:ab2f055f412dfd0e3beb1be17e92b033d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destroy a frame buffer object that was created by createFbo.  <a href=\"class_m_px_gl_buffer.html#ab2f055f412dfd0e3beb1be17e92b033d\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab2f055f412dfd0e3beb1be17e92b033d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8dd08f9597535fcde18dceb112371b66\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a8dd08f9597535fcde18dceb112371b66\">bindFbo</a> ()</td></tr>\n\
<tr class=\"memdesc:a8dd08f9597535fcde18dceb112371b66\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">If a frame buffer object was created using the method openFbo, then this method can be used to bind that Fbo.  <a href=\"class_m_px_gl_buffer.html#a8dd08f9597535fcde18dceb112371b66\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8dd08f9597535fcde18dceb112371b66\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abcb405d5ec528e9b29817bb28856e92c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#abcb405d5ec528e9b29817bb28856e92c\">unbindFbo</a> ()</td></tr>\n\
<tr class=\"memdesc:abcb405d5ec528e9b29817bb28856e92c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">If a frame buffer object was created using the method openFbo, then this method can be used to unbind that Fbo.  <a href=\"class_m_px_gl_buffer.html#abcb405d5ec528e9b29817bb28856e92c\">More...</a><br></td></tr>\n\
<tr class=\"separator:abcb405d5ec528e9b29817bb28856e92c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a41a53515ebec779e8fa2ca484933fd3b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a41a53515ebec779e8fa2ca484933fd3b\">beginBufferNotify</a> ()</td></tr>\n\
<tr class=\"memdesc:a41a53515ebec779e8fa2ca484933fd3b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is called when the GL buffer is being setup by the viewport renderer.  <a href=\"class_m_px_gl_buffer.html#a41a53515ebec779e8fa2ca484933fd3b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a41a53515ebec779e8fa2ca484933fd3b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5aad2f8cd22a225b254921de22a87f0a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a5aad2f8cd22a225b254921de22a87f0a\">endBufferNotify</a> ()</td></tr>\n\
<tr class=\"memdesc:a5aad2f8cd22a225b254921de22a87f0a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is called when the GL buffer is being shutdown by the viewport renderer.  <a href=\"class_m_px_gl_buffer.html#a5aad2f8cd22a225b254921de22a87f0a\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5aad2f8cd22a225b254921de22a87f0a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_px_gl_buffer.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a4f6e36223cea34c2f803829a5f31c042\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html\">MPxGlBuffer</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Construct an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html\" title=\"This method is obsolete. \">MPxGlBuffer</a> for use with the currently active view. </p>\n\
<p>The buffer must match the view with respect to color index or RGB mode, depth, accumulation, and alpha buffers. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a21118c859c3efb891e4c8a3129f64b1b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html\">MPxGlBuffer</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>view</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Construct an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html\" title=\"This method is obsolete. \">MPxGlBuffer</a> for use with a specified view. </p>\n\
<p>The buffer must match the view with respect to color index or RGB mode, depth, accumulation, and alpha buffers.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">view</td><td>The 3d view to assiciate with the buffer. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a1ba274dbf91776c94ec9efaf5a3fe57e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> openFbo </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">short&#160;</td>\n\
          <td class=\"paramname\"><em>width</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">short&#160;</td>\n\
          <td class=\"paramname\"><em>height</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>view</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Create a frame buffer object where the renderer result will be stored. </p>\n\
<p>The format of this buffer will be RGBA. Note only one of these offscreen buffers should exist.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">width</td><td>width of the buffer to create </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">height</td><td>height of the buffer to create </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">view</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\" title=\"A 3-D view. \">M3dView</a> handle to create an offscreen buffer.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Return status</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> a frame buffer object could not be created. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab2f055f412dfd0e3beb1be17e92b033d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> closeFbo </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>view</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Destroy a frame buffer object that was created by createFbo. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">view</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html\" title=\"A 3-D view. \">M3dView</a> handle to create an offscreen buffer.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Return status</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> a frame buffer object could not be destroyed. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8dd08f9597535fcde18dceb112371b66\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> bindFbo </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>If a frame buffer object was created using the method openFbo, then this method can be used to bind that Fbo. </p>\n\
<p>When the buffer is bound, all OpenGL draw calls will render into the created buffer.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Return status</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> a frame buffer object does not exist or is already bound. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abcb405d5ec528e9b29817bb28856e92c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> unbindFbo </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>If a frame buffer object was created using the method openFbo, then this method can be used to unbind that Fbo. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Return status</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> a frame buffer object does not exist. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a41a53515ebec779e8fa2ca484933fd3b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void beginBufferNotify </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is called when the GL buffer is being setup by the viewport renderer. </p>\n\
<p>Overriding this call will allow you to access the full GL state after it has been setup but before any drawing has occurred.</p>\n\
<p>If you change any state information from within this call; you must make sure you return it back to this state at the call to <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#a5aad2f8cd22a225b254921de22a87f0a\" title=\"This method is called when the GL buffer is being shutdown by the viewport renderer. \">endBufferNotify()</a></p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>None</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd>None </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5aad2f8cd22a225b254921de22a87f0a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void endBufferNotify </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is called when the GL buffer is being shutdown by the viewport renderer. </p>\n\
<p>Overriding this call will allow you to access the full GL state after drawing has completed but just before the GL buffer is shut down.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>None</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd>None </dd></dl>\n\
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
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxGlBuffer.h</li>\n\
<li>MPxGlBuffer.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";