var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Appendix E, Part 3</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Appendix E, Part 3</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"appendix-e-part-3\"></a></div>\n\
<p>Continues from <a href=\'#!/url=./developer/Appendices/Appendix-E-Part-2.html\' title=\'\'>Appendix E, Part 2</a>.</p>\n\
<div class=\'section\'><a id=\"library-functions\"></a><h2 id=\"library-functions\">Library Functions</h2></div>\n\
<div class=\'section\'><a id=\"imf__build_handle\"></a><h3 id=\"imf__build_handle\">imf__build_handle</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *imf__build_handle</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>char *path,</span></p>\n\
<p><span class=\'code\'>char *handle,</span></p>\n\
<p><span class=\'code\'>char *ext</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Parameter</th><th class=\"table-heading\">Type</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">path</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F559\"></a><p class=\"table-body\">Input</p></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F55A\"></a><p class=\"table-body\">The search path to use.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">handle</span></td><td class=\"table-body\">Input</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F55B\"></a><p class=\"table-body\">The filename.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">ext</span></td><td class=\"table-body\">Input</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F55C\"></a><p class=\"table-body\">The filename extension.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Return Value</td><td class=\"table-body\">&nbsp;</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F55D\"></a><p class=\"table-body\">The completed filename.</p></td></tr></tbody></table>\n\
<p>Description</p>\n\
<p>This function constructs a filename from <span class=\'code\'>path</span>, <span class=\'code\'>handle</span>, and <span class=\'code\'>ext</span>. Use the returned string when opening the file.</p>\n\
<p>Examples</p>\n\
<p><span class=\'code\'>char *filename;</span></p>\n\
<p><span class=\'code\'>FILE *fp = NULL;</span></p>\n\
<p><span class=\'code\'>...</span></p>\n\
<p><span class=\'code\'>*info = &amp;imf-&gt;info;</span></p>\n\
<p><span class=\'code\'>if ( info-&gt;handle_complete )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>filename = info-&gt;handle;</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p><span class=\'code\'>else</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>filename = imf__build_handle( NULL, info-&gt;handle,</span></p>\n\
<p><span class=\'code\'>info-&gt;ext );</span></p>\n\
<p><span class=\'code\'>if ( ( fp = fopen( filename, &quot;rb&quot; ) ) == NULL )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>filename = imf__build_handle( getenv(</span></p>\n\
<p><span class=\'code\'>&quot;WF_IMG_DIR&quot; ),</span></p>\n\
<p><span class=\'code\'>info-&gt;handle, info-&gt;ext );</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p><span class=\'code\'>if ( fp == NULL )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>fp = fopen( filename, &quot;rb&quot; );</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<div class=\'section\'><a id=\"imf_chan_alloc\"></a><h3 id=\"imf_chan_alloc\">IMF_chan_alloc</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>POINTER *IMF_chan_alloc</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>IMF_IMAGE *image,</span></p>\n\
<p><span class=\'code\'>int res,</span></p>\n\
<p><span class=\'code\'>char *key,</span></p>\n\
<p><span class=\'code\'>int *size</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Parameter</th><th class=\"table-heading\">Type</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">image</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F582\"></a><p class=\"table-body\">Input</p></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F583\"></a><p class=\"table-body\">Image information specifies the number of channels that are allocated, e.g., the number of color channels, the number of matte channels, and the number of Z channels.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">res</span></td><td class=\"table-body\">Input</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F584\"></a><p class=\"table-body\">The width of a scanline, in pixels.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">key</span></td><td class=\"table-body\">Input</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F585\"></a><p class=\"table-body\">The plug-in\'s key; used for error messages.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">size</td><td class=\"table-body\">Output</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F586\"></a><p class=\"table-body\">Size of the allocated scanline.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Return Value</td><td class=\"table-body\">&nbsp;</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F587\"></a><p class=\"table-body\">NULL if insufficient memory; otherwise, a pointer to scanline buffers.</p></td></tr></tbody></table>\n\
<p>Description</p>\n\
<p>This function allocates a set of scanline buffers that are used to pass one scanline of data between Maya and your scanline reading and writing functions. The buffer is set up as an array of pointers to scanline buffers, with the first rows containing color channel data (red, green, and then blue), followed by a matte channel and a z channel (if defined by your plug-in). Call this function from your <span class=\'code\'>imageReadOpen</span> routine.</p>\n\
<p><span class=\'code\'>IMF_chan_alloc</span> depends on the <span class=\'code\'>imageBitsPerPaletteEntry</span>, <span class=\'code\'>imageBitsPerChannel</span>, <span class=\'code\'>imageBitsPerMatte</span>, and <span class=\'code\'>imageBitsPerZChannel</span> entry points that you define at the top of your plug-in code. If your entry point defines 1 to 8 bits per channel, then byte-sized pixels are allocated. If 9 to 16 bits per channel are defined, then 16-bit <span class=\'code\'>short</span> pixels are allocated. For 17 to 32 bits per channel, 32-bit <span class=\'code\'>long</span> pixels are allocated. All values are in <span class=\'code\'>unsigned</span> form. Your scanline reading and writing functions must know whether to interpret channel data as 8-bit unsigned chars, 16-bit shorts, or 32-bit longs.</p>\n\
<p>Example</p>\n\
<p>This sample code fragment shows how to allocate and access a scanline buffer allocated by <span class=\'code\'>IMF_chan_alloc</span>. There are 3 color channels with 8 bits per pixel, 1 matte channel with 12 bits per pixel, and 1 z channel with 32 bits per pixel. <span class=\'code\'>imf</span> is the <span class=\'code\'>IMF_OBJECT</span> structure passed into your <span class=\'code\'>imageReadOpen</span> function. Note that <span class=\'code\'>imageWriteOpen</span> should not call <span class=\'code\'>IMF_chan_alloc</span> because the Maya application allocates the scanline buffer passed into the scanline writing function.</p>\n\
<p><span class=\'code\'>POINTER *p_buffer;</span></p>\n\
<p><span class=\'code\'>p_buffer = IMF_chan_alloc( imf-&gt;info.image,</span></p>\n\
<p><span class=\'code\'>image_width, imf-&gt;info.key, NULL);</span></p>\n\
<p>In your scanline reading function, store data into the buffer as follows:</p>\n\
<p><span class=\'code\'>unsigned char *p_red = p_buffer[0];</span></p>\n\
<p><span class=\'code\'>unsigned char *p_blue = p_buffer[1];</span></p>\n\
<p><span class=\'code\'>unsigned char *p_green = p_buffer[2];</span></p>\n\
<p><span class=\'code\'>unsigned short *p_matte = p_buffer[3];</span></p>\n\
<p><span class=\'code\'>unsigned long *p_z = p_buffer[4];</span></p>\n\
<p><span class=\'code\'>for ( i = 0; i &lt; image_width; ++i )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>p_red[i] = red_values[i];</span></p>\n\
<p><span class=\'code\'>p_blue[i] = blue_values[i];</span></p>\n\
<p><span class=\'code\'>p_green[i] = green_values[i];</span></p>\n\
<p><span class=\'code\'>p_matte[i] = matte_values[i];</span></p>\n\
<p><span class=\'code\'>p_z[i] = z_values[i];</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p>Your scanline writing function should access the buffer in a similar way.</p>\n\
<p>Related Functions</p>\n\
<p><span class=\'code\'>IMF_chan_free</span></p>\n\
<div class=\'section\'><a id=\"imf_chan_free\"></a><h3 id=\"imf_chan_free\">IMF_chan_free</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int IMF_chan_free</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>POINTER *chan_data</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Parameter</th><th class=\"table-heading\">Type</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>chan_data\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5A8\"></a><p class=\"table-body\">Modified</p></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5A9\"></a><p class=\"table-body\">The address of a pointer to a scanline buffer allocated by IMF_chan_alloc.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Return Value</td><td class=\"table-body\">&nbsp;</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5AA\"></a><p class=\"table-body\">Unused.</p></td></tr></tbody></table>\n\
<p>Description</p>\n\
<p>This function de-allocates a set of scanline buffers that were previously allocated by <span class=\'code\'>IMF_chan_alloc</span>.</p>\n\
<p>Example</p>\n\
<p>If <span class=\'code\'>data-&gt;buffer</span> points to your scanline buffer, free the buffer using:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">IMF_chan_free( data-&gt;buffer );\n\
\n\
</pre></div><p>Related Functions</p>\n\
<p><span class=\'code\'>IMF_chan_alloc</span></p>\n\
<div class=\'section\'><a id=\"imf__free_obj\"></a><h3 id=\"imf__free_obj\">imf__free_obj</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imf__free_obj</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>IMF_OBJECT *imf</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Parameter</th><th class=\"table-heading\">Type</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imf</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5B8\"></a><p class=\"table-body\">Modified</p></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5B9\"></a><p class=\"table-body\">Structure storing image characteristics such as width and height.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Return Value</td><td class=\"table-body\">&nbsp;</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5BA\"></a><p class=\"table-body\">Unused.</p></td></tr></tbody></table>\n\
<p>Description</p>\n\
<p>This function de-allocates space occupied by the <span class=\'code\'>IMF_OBJECT</span> structure. This function should be called in your close function.</p>\n\
<p>If <span class=\'code\'>imf-&gt;data</span> is not <span class=\'code\'>NULL</span>, then <span class=\'code\'>imf__free_obj</span> frees the space pointed to by <span class=\'code\'>imf-&gt;data[0]</span> and then frees <span class=\'code\'>imf-&gt;data</span>. Therefore, if you have allocated <span class=\'code\'>imf-&gt;data[1]</span> or any other extra space, then your close function and your error-handling routines in <span class=\'code\'>imageReadOpen</span> and <span class=\'code\'>imageWriteOpen</span> must deallocate the space to avoid a memory leak.</p>\n\
<p>In the event of a failed attempt at opening an image file, Maya calls <span class=\'code\'>imf__free_obj( imf )</span> to free the <span class=\'code\'>IMF_OBJECT</span> passed to <span class=\'code\'>imageReadOpen</span>. Therefore, you must not call <span class=\'code\'>imf__free_obj</span> in your error-handling code. If you call your close function to perform the error-handling and clean-up, your close function must distinguish between a close after a failed open attempt and a close after having successfully read an image file. Your close function must call <span class=\'code\'>imf__free_obj</span> only if the image file was successfully read.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>imf__free_obj( imf );</span></p>\n\
<p>Related Functions</p>\n\
<p><span class=\'code\'>imf__init_ifd</span></p>\n\
<div class=\'section\'><a id=\"imf__init_ifd\"></a><h3 id=\"imf__init_ifd\">imf__init_ifd</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imf__init_ifd</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>IMF_OBJECT *imf</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> <col width=\"33.333333333333336%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Parameter</th><th class=\"table-heading\">Type</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>imf\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5CA\"></a><p class=\"table-body\">Modified</p></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5CB\"></a><p class=\"table-body\">Structure storing image characteristics such as width and height.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Return Value</td><td class=\"table-body\">&nbsp;</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F5CC\"></a><p class=\"table-body\">Unused.</p></td></tr></tbody></table>\n\
<p>Description</p>\n\
<p>This function initializes the image file descriptor structure pointed to by <span class=\'code\'>imf-&gt;info.image</span>. This function should be called in your <span class=\'code\'>imageReadOpen</span> function. Note that the <span class=\'code\'>imf-&gt;info.image</span> field must have been allocated by your function before invoking <span class=\'code\'>imf__init_ifd</span>.</p>\n\
<p>The following defines the default values of the <span class=\'code\'>IMF_IMAGE</span> structure:</p>\n\
<ul>\n\
<li><span class=\'code\'>usage: IMF_C_GENERIC</span></li>\n\
<li><span class=\'code\'>curve.usage: IMF_C_CORRECTION_GAMMA</span></li>\n\
<li><span class=\'code\'>curve.gamma: fmt_def_gamma</span></li>\n\
<li><span class=\'code\'>curve.info.name: NULL</span></li>\n\
<li><span class=\'code\'>curve.info.count: 1</span></li>\n\
<li><span class=\'code\'>curve.info.elems: 256</span></li>\n\
<li><span class=\'code\'>curve.info.type: IMF_C_INTEGER</span></li>\n\
<li><span class=\'code\'>curve.info.bits: LOG( fmt__gamma_tab_res ) / LOG( 2.0 )</span></li>\n\
<li><span class=\'code\'>curve.response: NULL</span></li>\n\
<li><span class=\'code\'>aspect.name: NULL</span></li>\n\
<li><span class=\'code\'>chan_format: NULL</span></li>\n\
<li><span class=\'code\'>matte_format: NULL</span></li>\n\
<li><span class=\'code\'>aux_format: NULL</span></li>\n\
<li><span class=\'code\'>index_format: NULL</span></li>\n\
<li><span class=\'code\'>chan_config: IMF_C_PLANAR_SEPARATE</span></li>\n\
<li><span class=\'code\'>chan_orient: IMF_C_BOT_LEFT</span></li>\n\
<li><span class=\'code\'>chan_count: 0</span></li>\n\
<li><span class=\'code\'>chan_type: IMF_C_INTEGER</span></li>\n\
<li><span class=\'code\'>chan_bits: 8</span></li>\n\
<li><span class=\'code\'>matte_count: 0</span></li>\n\
<li><span class=\'code\'>matte_type: IMF_C_INTEGER</span></li>\n\
<li><span class=\'code\'>matte_bits: 8</span></li>\n\
<li><span class=\'code\'>aux_count: 0</span></li>\n\
<li><span class=\'code\'>aux_type: IMF_C_INTEGER</span></li>\n\
<li><span class=\'code\'>aux_bits: 8</span></li>\n\
<li><span class=\'code\'>index_count: 0</span></li>\n\
<li><span class=\'code\'>index_type: IMF_C_INTEGER</span></li>\n\
<li><p><span class=\'code\'>index_bits: 8</span></p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>imf__init_ifd( imf );</span></p>\n\
<p>Related Functions</p>\n\
<p><span class=\'code\'>imf__free_obj</span></p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"capability-settings\"></a><h2 id=\"capability-settings\">Capability settings</h2></div>\n\
<p>When you implement an image plug-in, you need to decide what file format features your plug-in supports, and whether and how the user can specify them in the file browsers used to access image files. Maya automatically passes these features, called capability settings, to your image plug-in when it accesses a file. For example, when writing an image to disk, you may allow the user to select the type of compression to be used. Sometimes, your file format has no special features and does not require capability settings.</p>\n\
<p>The user interface supports two pre-defined capability types:</p>\n\
<ul>\n\
<li><span class=\'code\'>List-</span>presents an option menu with a list of names (strings)</li>\n\
<li><p><span class=\'code\'>Number-</span>displays a numeric field and a thumbwheel for an unbounded number, or numeric field and a slider for a bounded number.</p>\n\
<p>For more information, see <a href=\'#!/url=./developer/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imagecapability\' title=\'\'>imageCapability</a> and <a href=\'#!/url=./developer/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imf_capability\' title=\'\'>IMF_CAPABILITY</a>.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"data-structures\"></a><h2 id=\"data-structures\">Data structures</h2></div>\n\
<div class=\'section\'><a id=\"imf_capability\"></a><h3 id=\"imf_capability\">IMF_CAPABILITY</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_capability</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>U_SHORT imc_code;</span></p>\n\
<p><span class=\'code\'>char *imc_name;</span></p>\n\
<p><span class=\'code\'>MSGCAT_DEFN imc_name_msg;</span></p>\n\
<p><span class=\'code\'>U_CHAR imc_type;</span></p>\n\
<p><span class=\'code\'>POINTER imc_value;</span></p>\n\
<p><span class=\'code\'>U_CHAR imc_when_avail;</span></p>\n\
<p><span class=\'code\'>} IMF_CAPABILITY;</span></p>\n\
<p>Purpose</p>\n\
<p>For those image files with special, type-specific parameters, use the <span class=\'code\'>IMF_CAPABILITY</span> structure to define the type-specific capabilities of the driver. The capabilities are stored as an array, with one entry per capability. For example, the SGI driver has two capabilities: one for the compression mode (raw vs. RGB), and one for defining whether a matte channel should be created in the file.</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>imc_code\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F606\"></a><p class=\"table-body\">A 16-bit number unique among all the capabilities defined in your <span class=\"code\" translate=\"no\">IMF_CAPABILITY</span> array.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imc_name</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F607\"></a><p class=\"table-body\">The string displayed in the user interface describing the capability.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imc_name_msg</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F608\"></a><p class=\"table-body\">The internationalized version of <span class=\"code\" translate=\"no\">imc_name</span>.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imc_type</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F609\"></a><p class=\"table-body\">The capability type. Currently, this can be either <span class=\"code\" translate=\"no\">IMF_CAPABILITY_TYPE_LIST</span> or <span class=\"code\" translate=\"no\">IMF_CAPABILITY_TYPE_NUMBER</span>.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imc_value</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F60A\"></a><p class=\"table-body\">A pointer to either a <span class=\"code\" translate=\"no\">IMF_CAPABILITY_LIST</span> or a <span class=\"code\" translate=\"no\">IMF_CAPABILITY_NUMBER</span> structure, depending on <span class=\"code\" translate=\"no\">imc_type</span>.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imc_when_avail</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F60B\"></a><p class=\"table-body\">Defines when this capability is valid. Set to <span class=\"code\" translate=\"no\">IMF_CAPABILITY_WHEN_ALWAYS</span> for both reading and writing images; <span class=\"code\" translate=\"no\">IMF_CAPABILITY_WHEN_INPUT</span> for reading images; or <span class=\"code\" translate=\"no\">IMF_CAPABILITY_WHEN_OUTPUT</span> for writing images.</p></td></tr></tbody></table>\n\
<p>The <span class=\'code\'>capabilities</span> are generic parameters. When <span class=\'code\'>imageReadOpen</span> or <span class=\'code\'>imageWriteOpen</span> is called, the specific user-defined instances of the capabilities are passed in as <span class=\'code\'>settings</span>. This sample code fragment shows you how to extract the meanings of these settings:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">static BOOLEAN your_get_capability_settings\n\
(\n\
 IMF_OBJECT         *imf,\n\
 int            *mode\n\
)\n\
{\n\
     IMF_CAPABILITY         *capability;\n\
     IMF_CAP_SETTING            *setting;\n\
     IMF_CAP_SETTING            **settings;\n\
     if ( ( settings = imf-&gt;info.settings ) == NULL )\n\
     {\n\
         return( TRUE );\n\
     }\n\
     for ( /* Nothing */; setting = *settings; ++settings )\n\
     {\n\
          /*\n\
          * Lookup the capability by code.\n\
          */\n\
            for ( capability = your__capabilities; capability-&gt;imc_name_msg.mcd_set!= 0; ++capability )\n\
          {\n\
              if ( capability-&gt;imc_code == setting-&gt;imcs_code )\n\
              {\n\
                  break;\n\
              }\n\
          }\n\
          if ( capability-&gt;imc_name_msg.mcd_set == 0 )\n\
          {\n\
              ERR_printf( &quot;Bad capability found.&quot; );\n\
              return( FALSE );\n\
          }\n\
          switch ( capability-&gt;imc_code )\n\
          {\n\
              case YOUR_CAPABILITY_IMC_CODE:\n\
                  *mode =setting-&gt;imcs_value.imcs_list;\n\
                  break;\n\
              case ANOTHER_CAPABILITY_IMC_CODE:\n\
                  ...;\n\
                  break;\n\
              case ...:\n\
              default:\n\
                  ERR_printf( &quot;Bad capability found.&quot;);\n\
              return( FALSE );\n\
         }\n\
     }\n\
     return( TRUE );\n\
}\n\
\n\
</pre></div><p>Information on adding image plug-ins continues in <a href=\'#!/url=./developer/Appendices/Appendix-E-Part-4.html\' title=\'\'>part four of Appendix E</a></p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";