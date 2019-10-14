var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>iffInfoCmd/iffreader.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'iff_info_cmd_2iffreader_8cpp-example.html\', tocPrefix);\n\
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
            <h1>iffInfoCmd/iffreader.cpp</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">iffInfoCmd/iffreader.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;iffreader.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">IFFimageReader::IFFimageReader ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fImage = NULL;</div>\n\
<div class=\"line\">    fBuffer = NULL;</div>\n\
<div class=\"line\">    fZBuffer = NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">IFFimageReader::~IFFimageReader ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    close ();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> IFFimageReader::open (<a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> filename)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    close ();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   fImage = ILopen (filename.<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a> (), <span class=\"stringliteral\">&quot;rb&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read top-to-bottom, not bottom-to-top</span></div>\n\
<div class=\"line\">    ILctrl (fImage, ILF_Updown, 1);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Convert all data to RGBA, even if there&#39;s no alpha channel</span></div>\n\
<div class=\"line\">    ILctrl (fImage, ILF_Pack, 0);</div>\n\
<div class=\"line\">    <span class=\"comment\">// If the data is 16 bits, read in the full 16 bits. Otherwise,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// truncate to 8 bits. Default behaviour is to truncate 16 bit</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// data to 8 bits.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (ILgetbpp (fImage) == 2)</div>\n\
<div class=\"line\">        ILctrl (fImage, ILF_Full, 1);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        ILctrl (fImage, ILF_Full, 0);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Generate a zero alpha mask if there&#39;s no alpha channel</span></div>\n\
<div class=\"line\">    ILctrl (fImage, ILF_NoMask, 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> IFFimageReader::close ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (ILclose (fImage))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fImage = NULL;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fImage = NULL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL != fBuffer)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> [] fBuffer;</div>\n\
<div class=\"line\">        fBuffer = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL != fZBuffer)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> [] fZBuffer;</div>\n\
<div class=\"line\">        fZBuffer = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> IFFimageReader::getSize (<span class=\"keywordtype\">int</span> &amp;x, <span class=\"keywordtype\">int</span> &amp;y)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (ILgetsize (fImage, &amp;x, &amp;y))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> IFFimageReader::getBytesPerChannel ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ILgetbpp (fImage);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> IFFimageReader::isRGB ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> type = ILgettype (fImage);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (type == -1)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (type&amp;ILH_RGB) ? <span class=\"keyword\">true</span> : <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> IFFimageReader::isGrayscale ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> type = ILgettype (fImage);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (type == -1)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (type&amp;ILH_Black) ? <span class=\"keyword\">true</span> : <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> IFFimageReader::hasAlpha ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> type = ILgettype (fImage);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (type == -1)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (type&amp;ILH_Alpha) ? <span class=\"keyword\">true</span> : <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> IFFimageReader::hasDepthMap ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> type = ILgettype (fImage);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (type == -1)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (type&amp;ILH_Zbuffer) ? <span class=\"keyword\">true</span> : <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> IFFimageReader::readImage ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fImage)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL != fBuffer || NULL != fZBuffer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> width,height;</div>\n\
<div class=\"line\">    ILgetsize (fImage, &amp;width, &amp;height);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> bpp; <span class=\"comment\">// bytes per pixel, not bits per pixel</span></div>\n\
<div class=\"line\">    bpp = ILgetbpp (fImage);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> type;</div>\n\
<div class=\"line\">    type = ILgettype (fImage);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((type &amp; ILH_RGB) || (type &amp; ILH_Black))</div>\n\
<div class=\"line\">        fBuffer = <span class=\"keyword\">new</span> byte [width * height * bpp * 4];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (type &amp; ILH_Zbuffer)</div>\n\
<div class=\"line\">        fZBuffer = <span class=\"keyword\">new</span> <span class=\"keywordtype\">float</span> [width * height];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (ILload (fImage, fBuffer, fZBuffer))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> IFFimageReader::getPixel (<span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">int</span> y, <span class=\"keywordtype\">int</span> *r, <span class=\"keywordtype\">int</span> *g, <span class=\"keywordtype\">int</span> *b,</div>\n\
<div class=\"line\">                                  <span class=\"keywordtype\">int</span> *a)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fBuffer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> width,height;</div>\n\
<div class=\"line\">    ILgetsize (fImage, &amp;width, &amp;height);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (x &gt;= width || y &gt;= height || x &lt; 0 || y &lt; 0)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (ILgetbpp (fImage) == 2) {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> *ptr = (<span class=\"keywordtype\">int</span> *)&amp;fBuffer [(y * width + x) * 4];</div>\n\
<div class=\"line\">        <span class=\"comment\">// On IRIX pixels are stored as ABGR and on NT as BGRA</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if     defined(_WIN32) || defined(LINUX)</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != r)</div>\n\
<div class=\"line\">            *r = ptr [2];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != g)</div>\n\
<div class=\"line\">            *g = ptr [1];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != b)</div>\n\
<div class=\"line\">            *b = ptr [0];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != a)</div>\n\
<div class=\"line\">            *a = ptr [3];</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != r)</div>\n\
<div class=\"line\">            *r = ptr [3];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != g)</div>\n\
<div class=\"line\">            *g = ptr [2];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != b)</div>\n\
<div class=\"line\">            *b = ptr [1];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != a)</div>\n\
<div class=\"line\">            *a = ptr [0];</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        byte *ptr = &amp;fBuffer [(y * width + x) * 4];</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if     defined(_WIN32) || defined(LINUX)</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != r)</div>\n\
<div class=\"line\">            *r = ptr [2];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != g)</div>\n\
<div class=\"line\">            *g = ptr [1];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != b)</div>\n\
<div class=\"line\">            *b = ptr [0];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != a)</div>\n\
<div class=\"line\">            *a = ptr [3];</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != r)</div>\n\
<div class=\"line\">            *r = ptr [3];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != g)</div>\n\
<div class=\"line\">            *g = ptr [2];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != b)</div>\n\
<div class=\"line\">            *b = ptr [1];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (NULL != a)</div>\n\
<div class=\"line\">            *a = ptr [0];</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> IFFimageReader::getDepth (<span class=\"keywordtype\">int</span> x, <span class=\"keywordtype\">int</span> y, <span class=\"keywordtype\">float</span> *d)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL == fZBuffer || NULL == d)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> width,height;</div>\n\
<div class=\"line\">    ILgetsize (fImage, &amp;width, &amp;height);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (x &gt;= width || y &gt;= height || x &lt; 0 || y &lt; 0)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> depth = fZBuffer [y * width + x];</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (depth == 0.)</div>\n\
<div class=\"line\">        *d = 0.;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        *d = -1.0f/depth;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> IFFimageReader::errorString ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> FLstrerror (FLerror ());</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> byte *IFFimageReader::getPixelMap ()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fBuffer;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *IFFimageReader::getDepthMap ()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fZBuffer;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";