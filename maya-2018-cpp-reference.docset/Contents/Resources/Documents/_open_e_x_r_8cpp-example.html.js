var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenEXR.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_open_e_x_r_8cpp-example.html\', tocPrefix);\n\
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
            <h1>OpenEXR.cpp</h1>\n\
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
<div class=\"title\">OpenEXR.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  OpenEXR Image File plugin.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxImageFile.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MImageFileInfo.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MImage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if _WIN32   </span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma warning( disable : 4290 )       // Disable STL warnings.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma warning( disable : 4244 )       // Disable conversion from unsigned int to unsigned short </span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#undef min</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#undef max</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;OpenEXR/ImfRgbaFile.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;OpenEXR/ImfArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;half.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define INVALID_PIXEL_TYPE Imf::NUM_PIXELTYPES</span></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> kImagePluginName( <span class=\"stringliteral\">&quot;OpenEXR&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>OpenEXRImageFile : <span class=\"keyword\">public</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html\">MPxImageFile</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    OpenEXRImageFile();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~OpenEXRImageFile();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#a693072120ed50338f3b977525d6c1cbb\">open</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pathname, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>* info);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#af42e5e206ba3b54cea108f6869b379e7\">load</a>( <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a>&amp; image, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> idx);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>             fWidth;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>             fHeight;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>             fChannels;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>             fLayers;</div>\n\
<div class=\"line\">    Imf::PixelType  fPixelType;</div>\n\
<div class=\"line\">    Imf::RgbaInputFile* fInputFile;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>OpenEXRImageFile::OpenEXRImageFile()</div>\n\
<div class=\"line\">: fInputFile( NULL), fChannels( 0), fLayers( 0), fPixelType( INVALID_PIXEL_TYPE)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>OpenEXRImageFile::~OpenEXRImageFile()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fInputFile)</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> fInputFile;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keywordtype\">void</span> * OpenEXRImageFile::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> OpenEXRImageFile();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> OpenEXRImageFile::open( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pathname, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>* info)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fInputFile) </div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> fInputFile;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">try</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fInputFile = <span class=\"keyword\">new</span> Imf::RgbaInputFile( pathname.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">catch</span>( ... )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !fInputFile)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( info)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> Imf::Header&amp; header = fInputFile-&gt;header();</div>\n\
<div class=\"line\">        fWidth = header.dataWindow().max.x - header.dataWindow().min.x + 1;</div>\n\
<div class=\"line\">        fHeight = header.dataWindow().max.y - header.dataWindow().min.y + 1;</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a62c14b6802ed8b00b884d4fd6e6c6c4f\">width</a>( fWidth);</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#ae7959bfb381f7272887c88bfa42be127\">height</a>( fHeight);</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> Imf::RgbaChannels channels = fInputFile-&gt;channels();</div>\n\
<div class=\"line\">        <span class=\"comment\">//printf( &quot;Found rgbaChannels %d\\n&quot;, (int)channels);</span></div>\n\
<div class=\"line\">        fChannels = channels &amp; Imf::WRITE_A ? 4 : 3;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        info-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a121999a4615b119ea68945a752e3ea91\">channels</a>( fChannels);</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a6a8b60680704d9a8878bb4c40827a57f\">numberOfImages</a>( fLayers);</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a942d88cc03be8d90972a4a12904412ef\">pixelType</a>( <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a01e74e17cc52f661123b8a2a4da770c1a5686197bafb177bdc82550848416a1ad\">MImage::kFloat</a>);</div>\n\
<div class=\"line\">        <span class=\"comment\">//printf( &quot;Successfully opened EXR image with %d channels of type %d\\n&quot;, fChannels, (int)fPixelType);</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> OpenEXRImageFile::load( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a>&amp; image, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> imageNumber)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> rval = MS::kFailure;</div>\n\
<div class=\"line\">    Imf::Array&lt;Imf::Rgba&gt; pixels;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">try</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Setup a frame buffer to hold the image</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> dw = fWidth;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> dh = fHeight;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> dx = fInputFile-&gt;dataWindow().min.x;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> dy = fInputFile-&gt;dataWindow().min.y;</div>\n\
<div class=\"line\">        pixels.resizeErase (dw * dh);</div>\n\
<div class=\"line\">        fInputFile-&gt;setFrameBuffer (pixels - dx - dy * dw, 1, dw);</div>\n\
<div class=\"line\">        fInputFile-&gt;readPixels( fInputFile-&gt;dataWindow().min.y, fInputFile-&gt;dataWindow().max.y);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Configure our Maya image to hold the result</span></div>\n\
<div class=\"line\">        image.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a903ff4fa0918f6c6438c4889025b7c91\">create</a>( fWidth, fHeight, fChannels, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a01e74e17cc52f661123b8a2a4da770c1a5686197bafb177bdc82550848416a1ad\">MImage::kFloat</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Now transfer the channels in</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> flipVertically = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span>* dest = image.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a74517ab7ab9676d9f6546cec738668b3\">floatPixels</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( flipVertically)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            Imf::Rgba* src = pixels + (fHeight - 1) * fWidth;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> y = 0; y &lt; fHeight; y++)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> x = 0; x &lt; fWidth; x++)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    *dest++ = src-&gt;r;</div>\n\
<div class=\"line\">                    *dest++ = src-&gt;g;</div>\n\
<div class=\"line\">                    *dest++ = src-&gt;b;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span>( fChannels == 4)</div>\n\
<div class=\"line\">                        *dest++ = src-&gt;a;</div>\n\
<div class=\"line\">                    *src++;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                src -= fWidth * 2;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\"><span class=\"comment\">//          half* src = pixels;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          for( int y = 0; y &lt; fHeight; y++)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              for( int x = 0; x &lt; fWidth; x++)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                  for( int c = 0; c &lt; fChannels; c++)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                      *dest++ = *src++;</span></div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        rval = MS::kSuccess;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">catch</span> (...)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// If some of the pixels in the file cannot be read,</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// print an error message, and return a partial image</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// to the caller.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;OpenEXRImageFile::load() failed to load image.&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> rval;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;8.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span> );</div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> extensions;</div>\n\
<div class=\"line\">    extensions.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a18d06b3d0af1426e654ac2cc1dc86c60\">append</a>( <span class=\"stringliteral\">&quot;exr&quot;</span>);</div>\n\
<div class=\"line\">    <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( plugin.registerImageFile( </div>\n\
<div class=\"line\">                    kImagePluginName,</div>\n\
<div class=\"line\">                    OpenEXRImageFile::creator, </div>\n\
<div class=\"line\">                    extensions));</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( plugin.deregisterImageFile( kImagePluginName ) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";