var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>simpleImageFile/simpleImageFile.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'simple_image_file_2simple_image_file_8cpp-example.html\', tocPrefix);\n\
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
            <h1>simpleImageFile/simpleImageFile.cpp</h1>\n\
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
<div class=\"title\">simpleImageFile/simpleImageFile.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Simple Image File plugin. This plugin registers a new image</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  file format against file extension &quot;.moo&quot;. Loading any &quot;.moo&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  image file will produce a procedurally generated colour </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  spectrum including values outside 0 to 1.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxImageFile.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MImageFileInfo.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MImage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGL.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> kImagePluginName( <span class=\"stringliteral\">&quot;SimpleImageFile&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SimpleImageFile : <span class=\"keyword\">public</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html\">MPxImageFile</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    SimpleImageFile();</div>\n\
<div class=\"line\">            ~SimpleImageFile() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#a693072120ed50338f3b977525d6c1cbb\">open</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pathname, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>* info) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#af42e5e206ba3b54cea108f6869b379e7\">load</a>( <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a>&amp; image, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> idx) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#a2398010f3069cd53ae2f38c1143f988d\">glLoad</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>&amp; info, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> imageNumber) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            populateTestImage( <span class=\"keywordtype\">float</span>* pixels, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> w, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> h);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>SimpleImageFile::SimpleImageFile()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>SimpleImageFile::~SimpleImageFile()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keywordtype\">void</span> * SimpleImageFile::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> SimpleImageFile();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Configure the image characteristics. A real image file</span></div>\n\
<div class=\"line\"><span class=\"comment\">// format plugin would extract these values from the image</span></div>\n\
<div class=\"line\"><span class=\"comment\">// file header. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> SimpleImageFile::open( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pathname, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>* info)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( info)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a62c14b6802ed8b00b884d4fd6e6c6c4f\">width</a>( 512);</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#ae7959bfb381f7272887c88bfa42be127\">height</a>( 512);</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a121999a4615b119ea68945a752e3ea91\">channels</a>( 3);</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a942d88cc03be8d90972a4a12904412ef\">pixelType</a>( <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a01e74e17cc52f661123b8a2a4da770c1a5686197bafb177bdc82550848416a1ad\">MImage::kFloat</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Only necessary if your format defines a native</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// hardware texture loader</span></div>\n\
<div class=\"line\">        info-&gt;<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8e20c60c914128a4914fdd18a82ec73b\">hardwareType</a>( <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a9b0c9320a802a00a718bcab75ba40550a99067c1b30ca9af543f0a948f04da19e\">MImageFileInfo::kHwTexture2D</a>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Internal helper method to populate our procedural test image</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keywordtype\">void</span> SimpleImageFile::populateTestImage( <span class=\"keywordtype\">float</span>* pixels, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> w, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> h)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #define RAINBOW_SCALE 4.0f</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> x, y;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( y = 0; y &lt; h; y++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> g = RAINBOW_SCALE * y / (float)h;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( x = 0; x &lt; w; x++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> r = RAINBOW_SCALE * x / (float)w;</div>\n\
<div class=\"line\">            *pixels++ = r;</div>\n\
<div class=\"line\">            *pixels++ = g;</div>\n\
<div class=\"line\">            *pixels++ = RAINBOW_SCALE * 1.5f - r - g;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Load the contents of this image file into an MImage. A real</span></div>\n\
<div class=\"line\"><span class=\"comment\">// file format plugin would extract the pixel data from the image</span></div>\n\
<div class=\"line\"><span class=\"comment\">// file here.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> SimpleImageFile::load( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a>&amp; image, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> w = 512;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> h = 512;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a floating point image and fill it with</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// a pretty rainbow test image.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    image.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a903ff4fa0918f6c6438c4889025b7c91\">create</a>( w, h, 3, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a01e74e17cc52f661123b8a2a4da770c1a5686197bafb177bdc82550848416a1ad\">MImage::kFloat</a>);</div>\n\
<div class=\"line\">    populateTestImage( image.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a74517ab7ab9676d9f6546cec738668b3\">floatPixels</a>(), w, h);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Load the contents of this image file into an OpenGL texture. A </span></div>\n\
<div class=\"line\"><span class=\"comment\">// real file format plugin would extract the pixel data from the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// image file here.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> SimpleImageFile::glLoad( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>&amp; info, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a floating point image</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> w = info.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a62c14b6802ed8b00b884d4fd6e6c6c4f\">width</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> h = info.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#ae7959bfb381f7272887c88bfa42be127\">height</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>* pixels = <span class=\"keyword\">new</span> <span class=\"keywordtype\">float</span>[ w * h * 3];</div>\n\
<div class=\"line\">    populateTestImage( pixels, w, h);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Now load it into OpenGL as a floating point image</span></div>\n\
<div class=\"line\">    ::glTexImage2D( GL_TEXTURE_2D, 0, GL_RGB, w, h, 0, GL_RGB, GL_FLOAT, pixels);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span>[] pixels;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;8.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span> );</div>\n\
<div class=\"line\">    <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> extensions;</div>\n\
<div class=\"line\">    extensions.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a18d06b3d0af1426e654ac2cc1dc86c60\">append</a>( <span class=\"stringliteral\">&quot;moo&quot;</span>);</div>\n\
<div class=\"line\">    <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( plugin.registerImageFile(</div>\n\
<div class=\"line\">                    kImagePluginName,</div>\n\
<div class=\"line\">                    SimpleImageFile::creator, </div>\n\
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