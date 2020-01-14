var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Appendix E: Adding Image Plug-ins</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Appendix E: Adding Image Plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"appendix-e-adding-image-plug-ins\"></a></div>\n\
<p>Maya features an external plug-in module mechanism that lets you create your own image file translators. This system is specific for adding new image types to Maya and is different from the Maya API. These plug-in modules are available whenever you start your application. You can access them through the list of image file types presented where you access image files.</p>\n\
<p>Plug-in image modules are implemented as dynamically shared objects (DSOs or DLLs), and can be written using C or C++. You only need to implement the algorithms that read and write the image files; the user interface and flow control are implicitly handled by Maya.</p>\n\
<p>This document describes the protocol for writing an image plug-in module. It does not describe how to support multiple-frame or movie files. Sample code is provided in the image subdirectory of the Developer Kit.</p>\n\
<p>This section discusses the following:</p>\n\
<ul>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#overview\' title=\'\'>Overview</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#about-entry-points\' title=\'\'>About entry points</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#mandatory-entry-points\' title=\'\'>Mandatory entry points</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#optional-entry-points\' title=\'\'>Optional entry points</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#library-functions\' title=\'\'>Library Functions</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#capability-settings\' title=\'\'>Capability settings</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#data-structures\' title=\'\'>Data structures</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#compiling-your-plug-in\' title=\'\'>Compiling your plug-in</a></li>\n\
</ul>\n\
<p>Once you have written your image file format plug-in, you need to compile it and create a shared object that can be loaded into Maya. We provide a Makefile and buildconfig in our Developer Kit for building the example using the gcc compiler. On Windows, a solution and project file is provided for building the image plug-in with Visual C++. You must first set MAYA_LOCATION before building the image plug-in example. The plug-in that is built must be copied to the $MAYA_LOCATION/bin/plug-ins/image directory before Maya has access to this new image format. Image plug-ins must be built with the compiler and linker flags we provide so that they can be loaded into Maya.</p>\n\
<div class=\'section\'><a id=\"overview\"></a><h2 id=\"overview\">Overview</h2></div>\n\
<p>Maya invokes functions from your image plug-in primarily to read and write image files. One of the places where this can happen is in the rendering window. In this window, you can choose to save your image as a certain format. In addition, you can load an existing rendering image into this window. You are able to select a custom format that you have defined for the read and write operations of this window.</p>\n\
<div class=\'section\'><a id=\"about-entry-points\"></a><h2 id=\"about-entry-points\">About entry points</h2></div>\n\
<p>Each plug-in must have a defined number of entry points.Maya uses these entry points to determine which features the image plug-in supports.</p>\n\
<p>Some entry points are variables and others are functions. For example, the name of the plug-in is defined by the variable entry point <span class=\'code\'>imageName</span>, and the function that opens an image file for reading is defined by the function entry point <span class=\'code\'>imageReadOpen</span>.</p>\n\
<p>Some entry points are required, while others are optional. The mandatory entry points are described in the next section. Optional entry points are described in &quot;Optional entry points.&quot;</p>\n\
<blockquote>\n\
<p><strong>Tip:</strong> For your plug-in to be compatible with Maya, you only need to implement the mandatory entry points. The optional entry points of your plug-in may not be invoked by Maya, and therefore are not required.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"mandatory-entry-points\"></a><h2 id=\"mandatory-entry-points\">Mandatory entry points</h2></div>\n\
<p>The following entry points must be defined:</p>\n\
<ul>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#program\' title=\'\'>program</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#type\' title=\'\'>type</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#version\' title=\'\'>version</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imagekey\' title=\'\'>imageKey</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imageisfile\' title=\'\'>imageIsFile</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imagename\' title=\'\'>imageName</a></li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imagereadopen\' title=\'\'>imageReadOpen</a> and its associated look-up table reading, scanline reading, and close functions (unless your plug-in cannot read as specified by the <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imageaccess\' title=\'\'>imageAccess</a> entry point).</li>\n\
<li><a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imagewriteopen\' title=\'\'>imageWriteOpen</a> and its associated scanline writing and close functions (unless you specify otherwise with the <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imageaccess\' title=\'\'>imageAccess</a> entry point).</li>\n\
</ul>\n\
<p>If a mandatory entry point is omitted, the plug-in will not be loaded, and its name will not appear in any menu.</p>\n\
<div class=\'section\'><a id=\"program\"></a><h3 id=\"program\">program</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *program</span></p>\n\
<p>Description</p>\n\
<p>This entry point specifies the applications that can use the plug-in. This should be Wavefront so that all of your applications can read and write image files supported by this plug-in.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote>\n\
<p>Example</p>\n\
<p><span class=\'code\'>char *program = &quot;Wavefront&quot;;</span></p>\n\
<div class=\'section\'><a id=\"type\"></a><h3 id=\"type\">type</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *type</span></p>\n\
<p>Description</p>\n\
<p>This entry point denotes the type of plug-in that is being built. A Maya image file plug-in is of type <span class=\'code\'>image</span>.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote>\n\
<p>Example</p>\n\
<p><span class=\'code\'>char *type = &quot;image&quot;;</span></p>\n\
<div class=\'section\'><a id=\"version\"></a><h3 id=\"version\">version</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *version</span></p>\n\
<p>Description</p>\n\
<p>This entry point denotes the version of the protocol for which the plug-in was written. Always use <span class=\'code\'>IMF_PROTOCOL_CURRENT</span>.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote>\n\
<p>Example</p>\n\
<p><span class=\'code\'>char *version = IMF_PROTOCOL_CURRENT;</span></p>\n\
<div class=\'section\'><a id=\"imagekey\"></a><h3 id=\"imagekey\">imageKey</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *imageKey</span></p>\n\
<p>Description</p>\n\
<p>This entry point specifies a unique key to identify your plug-in.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote>\n\
<p>Example</p>\n\
<p><span class=\'code\'>char *imageKey = &quot;myFormat&quot;;</span></p>\n\
<div class=\'section\'><a id=\"imagename\"></a><h3 id=\"imagename\">imageName</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *imageName</span></p>\n\
<p>Description</p>\n\
<p>This entry point defines the name of your plug-in as displayed in menus. Names should be unique so users can distinguish between them.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote>\n\
<p>Example</p>\n\
<p><span class=\'code\'>char *imageName = &quot;My Image Format&quot;;</span></p>\n\
<div class=\'section\'><a id=\"imagereadopen\"></a><h3 id=\"imagereadopen\">imageReadOpen</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imageReadOpen</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>IMF_OBJECT *imf</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Parameter\n\
</th>\n\
<th class=\"table-heading\">\n\
Type\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imf</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F3E3\"></a>\n\
<p class=\"table-body\">\n\
Modified\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F3E4\"></a>\n\
<p class=\"table-body\">\n\
Image File Header\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Return Value\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F3E5\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">IMF_C_NORMAL</span> if the image was successfully opened; <span class=\"code\">IMF_C_</span> if an error occurred.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Description</p>\n\
<p>This function is called when a file is to be opened for reading.</p>\n\
<p>The <span class=\'code\'>imf</span> parameter contains all of the information necessary for the reading of the file. Before calling <span class=\'code\'>imageReadOpen</span>, it contains the filename. After executing this routine, it must also contain pointers to the routines which access the file, information about the size and other attributes of the image being read, buffers to read scanlines of the image into, etc.</p>\n\
<p>The basic steps to writing this function are as follows:</p>\n\
<ul>\n\
<li>Open the file.</li>\n\
<li>Read the header from the file. If the file includes a look-up table, read it at this time.</li>\n\
<li>Assign the <span class=\'code\'>close</span>, <span class=\'code\'>scanline read,</span> and LUT <span class=\'code\'>read</span> routines into <span class=\'code\'>imf</span>.</li>\n\
<li>Define the parameters of the image in <span class=\'code\'>imf-&gt;info.image[0</span>].</li>\n\
<li>Allocate buffers to contain the scanlines.</li>\n\
<li><p>Allocate private data defining the file descriptor, etc., and associate them with <span class=\'code\'>imf-&gt;data</span>.</p>\n\
<p>Some image files may contain multiple images, e.g., the full image and a thumbnail representation. For this discussion, we will assume that you will only be reading the main image from such files.</p>\n\
<p>The detailed steps are as follows:</p></li>\n\
</ul>\n\
<ol>\n\
<li>If the filename is not fully qualified, complete it. Then, open the specified file. Continue only if the open was successful. If it fails, you must generate a message using <span class=\'code\'>ERR_printf</span>, set <span class=\'code\'>imf__err</span> to <span class=\'code\'>IMF_C_CANNOT_OPEN</span>, and return <span class=\'code\'>FALSE</span>.</li>\n\
<li><p>Set the image count to be 1, and allocate and initialize one image structure to contain information about this image:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">imf-&gt;info.count = 1;\n\
imf-&gt;info.image = malloc( sizeof( IMF_IMAGE ) );\n\
(void) imf__init_ifd( imf );\n\
</pre></div></li>\n\
<li><p>Save the format-specific information describing the file in your own data structure allocated using <span class=\'code\'>malloc</span>. This private data structure can contain items like the current file descriptor, last scanline read, active window, etc.:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">private = malloc( sizeof( PRIVATE ) );\n\
private-&gt;... = ...;\n\
imf-&gt;data = malloc( sizeof( POINTER ) );\n\
imf-&gt;data[0] = private;\n\
</pre></div></li>\n\
<li>Assign your image access routines to <span class=\'code\'>imf-&gt;scan</span> and <span class=\'code\'>imf-&gt;close</span>. If your image file contains a look-up table, also specify the routine that reads the look-up table in <span class=\'code\'>imf-&gt;lut_read</span>.</li>\n\
<li>If your file format defines input capabilities, extract those from <span class=\'code\'>imf-&gt;info.settings</span>. (See <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imf_capability\' title=\'\'>IMF_CAPABILITY</a> for details.)</li>\n\
<li><p>Read the header information from the file, and store this in your private data structure. You must also define various fields in the <span class=\'code\'>imf-&gt;info</span> and <span class=\'code\'>imf-&gt;info.image[0]</span> data structures.</p>\n\
<p>In the <span class=\'code\'>imf-&gt;info</span> structure, set the <span class=\'code\'>lut_exists field</span> according to whether the image has a look-up table.</p>\n\
<p>You can also set <span class=\'code\'>program</span>, <span class=\'code\'>machine</span>, <span class=\'code\'>user</span>, <span class=\'code\'>date</span>, <span class=\'code\'>time</span>, <span class=\'code\'>frame</span> number, <span class=\'code\'>job_num</span>, and chromaticity information (<span class=\'code\'>red_pri</span>, <span class=\'code\'>green_pri</span>, <span class=\'code\'>blue_pri</span>, <span class=\'code\'>white_pt</span>) if these are stored in the file itself.</p>\n\
<p>You must also set all of the fields in <span class=\'code\'>imf-&gt;info.image[0]</span>. The <span class=\'code\'>aux_format</span>, <span class=\'code\'>aux_count</span>, <span class=\'code\'>aux_type</span>, and <span class=\'code\'>aux_bits</span> fields refer to z channel information. The field <span class=\'code\'>curve.gamma</span> needs to be set to either the gamma defined in your file, or the default gamma by calling <span class=\'code\'>IMF_def_input_gamma</span>.</p></li>\n\
<li><p>Allocate a scanline buffer into which your scanline reading routine reads a row of pixels:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">private_data_ptr-&gt;buffer = IMF_chan_alloc(\n\
imf-&gt;info.image, image_width,\n\
imf-&gt;info.key, NULL );\n\
</pre></div></li>\n\
<li><p>Return <span class=\'code\'>TRUE</span> if your function successfully opened and read the image file header, and <span class=\'code\'>FALSE</span> if an error occurred.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"scanline-reading-function\"></a><h3 id=\"scanline-reading-function\">Scanline reading function</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int your_scan_read_func</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>POINTER data,</span></p>\n\
<p><span class=\'code\'>int scan,</span></p>\n\
<p><span class=\'code\'>POINTER **line_buff</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Parameter\n\
</th>\n\
<th class=\"table-heading\">\n\
Type\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">data</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F409\"></a>\n\
<p class=\"table-body\">\n\
Input\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F40A\"></a>\n\
<p class=\"table-body\">\n\
The private data associated with your image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">scan</span>\n\
</td>\n\
<td class=\"table-body\">\n\
Input\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F40B\"></a>\n\
<p class=\"table-body\">\n\
The scanline to read.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">line_buff</span>\n\
</td>\n\
<td class=\"table-body\">\n\
Output\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F40C\"></a>\n\
<p class=\"table-body\">\n\
The scanline buffer allocated in <span class=\"code\">imageReadOpen</span>, containing the row of pixels read.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Return Value\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F40D\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">IMF_C_BAD_SCAN</span> if scan is outside the image; <span class=\"code\">IMF_C_NORMAL</span> if the scanline was successfully read; and <span class=\"code\">IMF_C_READ_ERR</span> if an error occurred.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Description</p>\n\
<p>This function is called by Maya to read a scanline from your image file. Image files are read according to the image&#39;s orientation, either from bottom to top, or from top to bottom.</p>\n\
<p>Follow these steps to create your scanline reading function:</p>\n\
<ol>\n\
<li>Read the specified scanline. The scanline number is based on bottom-to-top ordering. For example, if your image size is 480 lines, and your orientation is <span class=\'code\'>IMF_C_TOP_LEFT</span>, the scanlines are read in the order 479 (top), 478 (second from top), 477, ... 0 (bottom). If the ordering is <span class=\'code\'>IMF_C_BOT_LEFT</span>, they are read in the order 0 (bottom), 1 (second from bottom), 2, ... 479 (top).</li>\n\
<li><p>Transfer the scanline into the buffer allocated in <span class=\'code\'>imageReadOpen</span>. The buffer allocated by <span class=\'code\'>IMF_chan_alloc</span> contains 8-, 16-, or 32-bit unsigned numbers, according to the number of bits per channel in the file. (The number of bits per channel is rounded up to the nearest number above.)</p>\n\
<p>Each component of the scanline is stored in a separate contiguous buffer. These are returned in the parameter <span class=\'code\'>line_buff</span>, which is an array of pointers to the components that you allocated:</p>\n\
<p><span class=\'code\'>/*</span></p>\n\
<p><span class=\'code\'>* Unsigned char&#39;s are used for 1 to 8-bit values;</span></p>\n\
<p><span class=\'code\'>* unsigned short&#39;s, for 8 to 16-bit values;</span></p>\n\
<p><span class=\'code\'>* unsigned long&#39;s, for 17 to 32-bit values.</span></p>\n\
<p><span class=\'code\'>*/</span></p>\n\
<p><span class=\'code\'>*line_buff = data-&gt;buffer;</span></p>\n\
<p><span class=\'code\'>pr = (unsigned char *) data-&gt;buffer[0];</span></p>\n\
<p><span class=\'code\'>pg = (unsigned char *) data-&gt;buffer[1];</span></p>\n\
<p><span class=\'code\'>pb = (unsigned char *) data-&gt;buffer[2];</span></p>\n\
<p><span class=\'code\'>pm = (unsigned char *) data-&gt;buffer[3];</span></p>\n\
<p><span class=\'code\'>for ( i = 0; i &lt; data-&gt;image_width; ++i )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>*(pr++) = red_values[i];</span></p>\n\
<p><span class=\'code\'>*(pg++) = green_values[i];</span></p>\n\
<p><span class=\'code\'>*(pb++) = blue_values[i];</span></p>\n\
<p><span class=\'code\'>*(pm++) = matte_values[i];</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p>If the file contains a look-up table, you must still return RGB data, and not the indexes into the look-up table, in <span class=\'code\'>line_buff</span>.</p></li>\n\
<li><p>Return <span class=\'code\'>IMF_C_BAD_SCAN</span>, <span class=\'code\'>IMF_C_NORMAL</span>, or <span class=\'code\'>IMF_C_READ_ERR</span> as appropriate.</p>\n\
<p>Your scanline reading function must not expect to read the last scanline of the image because Maya may skip the last few scanlines if they do not need to be read. Your plug-in must allow Maya to call your close function at any time after calling <span class=\'code\'>imageReadOpen</span>.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"close-function\"></a><h3 id=\"close-function\">Close function</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int your_close_func</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>IMF_OBJECT *imf</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Parameter\n\
</th>\n\
<th class=\"table-heading\">\n\
Type\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imf</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F430\"></a>\n\
<p class=\"table-body\">\n\
Modified\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F431\"></a>\n\
<p class=\"table-body\">\n\
Image file descriptor.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Return Value\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F432\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">IMF_C_NORMAL</span> if file closing and memory de-allocation was successful; <span class=\"code\">IMF_C_failure_code</span> if error occurred (for example <span class=\"code\">IMF_C_WRITE_ERR</span>).\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"description\"></a><h3 id=\"description\">Description</h3></div>\n\
<p>This function is called whenever Maya is finished reading or writing your image file. Follow these steps to create your close function:</p>\n\
<ol>\n\
<li>Close the image file.</li>\n\
<li>Deallocate any private data pointed to by <span class=\'code\'>imf-&gt;data</span> and set <span class=\'code\'>imf-&gt;data</span> to <span class=\'code\'>NULL</span>. To deallocate the scanline buffer allocated in either <span class=\'code\'>imageReadOpen</span> or <span class=\'code\'>imageWriteOpen</span>, use <span class=\'code\'>IMF_chan_free</span>.</li>\n\
<li>Return <span class=\'code\'>IMF_C_NORMAL</span> if file closing and memory clean-up is successful, and <span class=\'code\'>IMF_C_failure_code</span> if not.</li>\n\
</ol>\n\
<div class=\'section\'><a id=\"imagewriteopen\"></a><h3 id=\"imagewriteopen\">imageWriteOpen</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imageWriteOpen</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>IMF_OBJECT *imf</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Parameter\n\
</th>\n\
<th class=\"table-heading\">\n\
Type\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imf</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F43F\"></a>\n\
<p class=\"table-body\">\n\
Modified\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F440\"></a>\n\
<p class=\"table-body\">\n\
Image file descriptor.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Return Value\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F441\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">TRUE</span> if the image was successfully opened; <span class=\"code\">FALSE</span> if an error occurred.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Description</p>\n\
<p>This function is called when a file is to be opened for writing.</p>\n\
<p>The <span class=\'code\'>imf</span> parameter contains all of the information necessary to write the file. Before calling <span class=\'code\'>imageWriteOpen</span>, it contains the filename. After executing this routine, it must also contain pointers to the routines that access the file, information about the size and other attributes of the image being written, etc.</p>\n\
<p>The basic steps to creating this function are as follows:</p>\n\
<ul>\n\
<li>Open the file.</li>\n\
<li>Write the header. If the file includes a look-up table, you may need to write it at this time.</li>\n\
<li>Assign the <span class=\'code\'>close</span> and <span class=\'code\'>scanline``write</span> routines to <span class=\'code\'>imf</span>.</li>\n\
<li>Allocate private data defining the file descriptor, etc., and associate them with <span class=\'code\'>imf-&gt;data</span>.</li>\n\
</ul>\n\
<p>Detailed steps are as follows:</p>\n\
<ol>\n\
<li>Open the specified file. Continue only if the open was successful. If it fails, you must generate a message using <span class=\'code\'>ERR_printf</span>, set <span class=\'code\'>imf__err</span> to <span class=\'code\'>IMF_C_CANNOT_OPEN</span>, and return <span class=\'code\'>FALSE</span>.</li>\n\
<li>Use <span class=\'code\'>imf-&gt;info</span> and <span class=\'code\'>imf-&gt;info.image[0]</span> to extract attributes about the file being written.</li>\n\
<li><p>Save the format-specific information describing the file in your own data structure allocated using <span class=\'code\'>malloc</span>. This private data structure can contain items like the current file descriptor, active window, etc.:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">private = malloc( sizeof( PRIVATE ) );\n\
private-&gt;... = ...;\n\
imf-&gt;data = malloc( sizeof( POINTER ) );\n\
imf-&gt;data[0] = private;\n\
</pre></div></li>\n\
<li>Specify the image access routines in <span class=\'code\'>imf-&gt;scan</span> and <span class=\'code\'>imf-&gt;close</span>.</li>\n\
<li>If your file format defines output capabilities, extract those from <span class=\'code\'>imf-&gt;info.settings</span>. (See <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imf_capability\' title=\'\'>IMF_CAPABILITY</a> for details.)</li>\n\
<li>Write the file header and look-up table, if defined.</li>\n\
<li><p>Return <span class=\'code\'>IMF_C_NORMAL</span> if your function successfully opened and read the image file header. Return <span class=\'code\'>IMF_C_failure_code</span> if an error occurred.</p>\n\
<p>In the event of a failed attempt at opening an image file, Maya calls <span class=\'code\'>imf__free_obj( imf )</span> to free the <span class=\'code\'>IMF_OBJECT</span> passed to <span class=\'code\'>imageWriteOpen</span>. Therefore, you must not call <span class=\'code\'>imf__free_obj</span> in your error-handling code.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"scanline-writing-function\"></a><h3 id=\"scanline-writing-function\">Scanline writing function</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int your_scan_write_func</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>POINTER data,</span></p>\n\
<p><span class=\'code\'>int scan,</span></p>\n\
<p><span class=\'code\'>POINTER *line_buff</span></p>\n\
<p><span class=\'code\'>)</span></p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
<col width=\"33.333333333333336%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Parameter\n\
</th>\n\
<th class=\"table-heading\">\n\
Type\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">data</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F45F\"></a>\n\
<p class=\"table-body\">\n\
Input\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F460\"></a>\n\
<p class=\"table-body\">\n\
The private data associated with your image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">scan</span>\n\
</td>\n\
<td class=\"table-body\">\n\
Input\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F461\"></a>\n\
<p class=\"table-body\">\n\
The scanline to be written.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
line_buff\n\
</td>\n\
<td class=\"table-body\">\n\
Output\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F462\"></a>\n\
<p class=\"table-body\">\n\
Buffer containing the pixels for the current scanline.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
Return Value\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F463\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">IMF_C_BAD_SCAN</span> if scan is outside the image; <span class=\"code\">IMF_C_NORMAL</span> if the scanline is successfully written; and <span class=\"code\">IMF_C_WRITE_ERR</span> if an error occurs.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Description</p>\n\
<p>This function is called by Maya to write a scanline to your image file. Image files are written according to the image&#39;s orientation, either from bottom to top, or from top to bottom.</p>\n\
<p>Follow these steps to create your scanline writing function:</p>\n\
<ol>\n\
<li>Write the specified scanline. The scanline number is based on bottom-to-top ordering. For example, if your image size is 480 lines, and your orientation is <span class=\'code\'>IMF_C_TOP_LEFT</span>, the scanlines are written in the order 479 (top), 478 (second from top), 477, ... 0 (bottom). If the ordering is <span class=\'code\'>IMF_C_BOT_LEFT</span>, they are written in the order 0 (bottom), 1 (second from bottom), 2, ... 479 (top).</li>\n\
<li><p>Retrieve the red color channel information from <span class=\'code\'>line_buff[0]</span>, green from <span class=\'code\'>line_buff[1]</span>, and blue from <span class=\'code\'>line_buff[2]</span>, where <span class=\'code\'>line_buff</span> is the scanline buffer passed in by Maya. If there is a matte channel, it is in <span class=\'code\'>line_buff[3]</span>. The z channel, if it exists, is in <span class=\'code\'>line_buff[4]</span>. The pixels are stored from left to right.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">pr = (unsigned char *) line_buff[0];\n\
pg = (unsigned char *) line_buff[1];\n\
pb = (unsigned char *) line_buff[2];\n\
pm = (unsigned char *) line_buff[3];\n\
for ( i = 0; i &lt; data-&gt;image_width; ++i )\n\
{\n\
     red_values[i] = *(pr++);\n\
     green_values[i] = *(pg++);\n\
     blue_values[i] = *(pb++);\n\
     matte_values[i] = *(pm++);\n\
}\n\
\n\
</pre></div><p>Convert the values to the format used by your file format and write the scanline to the file.</p></li>\n\
<li><p>Return <span class=\'code\'>IMF_C_BAD_SCAN</span>, <span class=\'code\'>IMF_C_NORMAL</span>, or <span class=\'code\'>IMF_C_READ_ERR</span>.</p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"optional-entry-points\"></a><h2 id=\"optional-entry-points\">Optional entry points</h2></div>\n\
<p>A number of additional entry points exist. If an optional entry point is not defined, a default value is used. Some optional entry points are ignored unless the feature is supported by your file format.</p>\n\
<div class=\'section\'><a id=\"imageaccess\"></a><h3 id=\"imageaccess\">imageAccess</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>unsigned int imageAccess</span></p>\n\
<p>Description</p>\n\
<p>This variable specifies the reading and writing methods that your plug-in supports. The constants described are bit fields:</p>\n\
<ul>\n\
<li><span class=\'code\'>IMF_C_LUT_READ</span> indicates that your plug-in supports reading palettes from files. A LUT reading function must be defined and assigned to i<span class=\'code\'>mf-&gt;lut_read</span> in the <span class=\'code\'>imageReadOpen</span> routine.</li>\n\
<li><span class=\'code\'>IMF_C_LUT_WRITE</span> indicates that your plug-in supports writing palettes to files.</li>\n\
<li><span class=\'code\'>IMF_C_READ</span> indicates that your plug-in supports the sequential reading of scanlines.</li>\n\
<li><span class=\'code\'>IMF_C_READ_RANDOM</span> indicates that your plug-in supports the random reading of scanlines.</li>\n\
<li><span class=\'code\'>IMF_C_WRITE</span> indicates that your plug supports the sequential writing of scanlines.</li>\n\
<li><p><span class=\'code\'>IMF_C_WRITE_RANDOM</span> indicates that your plug-in supports the random writing of scanlines.</p>\n\
<p>The default value is <span class=\'code\'>IMF_C_READ</span>|<span class=\'code\'>IMF_C_WRITE</span>.</p>\n\
<p>Example</p>\n\
<p>This example is for a file that supports look-up tables:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">unsigned int imageAccess \n\
= IMF_C_LUT_READ | IMF_C_LUT_WRITE | IMF_C_READ | IMF_C_WRITE;\n\
</pre></div></li>\n\
</ul>\n\
<p>Information on adding image plug-ins continues in <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Part-2.html\' title=\'\'>part 2 of Appendix E</a></p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";