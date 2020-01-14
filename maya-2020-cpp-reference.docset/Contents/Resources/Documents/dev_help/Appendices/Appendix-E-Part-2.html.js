var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Appendix E, Part 2</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Appendix E, Part 2</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"appendix-e-part-2\"></a></div>\n\
<p>Continues from <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html\' title=\'\'>Appendix E: Adding Image Plug-ins</a>.</p>\n\
<div class=\'section\'><a id=\"imagebitsperchannel\"></a><h3 id=\"imagebitsperchannel\">imageBitsPerChannel</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerChannel</span></p>\n\
<p>Description</p>\n\
<p>This variable defines the number of bits per color channel that are supported. This applies to the red, green, and blue channels only.</p>\n\
<p>This variable is a bit field, used to define the number of bits (from 1 to 32) that each channel can support. Setting the lowest bit indicates that the format supports 1 bit per color channel; setting the highest bit indicates that the format supports 32 bits per color channel. You need to set bits in this variable according to all of the bits-per-channel that your format supports.</p>\n\
<p>The default value is <span class=\'code\'>0x00000080</span>, or 8 bits per color channel.</p>\n\
<p>Example</p>\n\
<p>The first example supports only 8 bits per color channel; the second example supports 8, 10, and 16 bits.</p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerChannel = 0x00000080;</span></p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerChannel = 0x00008280;</span></p>\n\
<div class=\'section\'><a id=\"imagebitspermatte\"></a><h3 id=\"imagebitspermatte\">imageBitsPerMatte</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerMatte;</span></p>\n\
<p>Description</p>\n\
<p>This variable is identical to <span class=\'code\'>imageBitsPerChannel</span>, except that it describes the number of bits supported by the matte channel.</p>\n\
<p>The default value is <span class=\'code\'>0x00000000</span>, which means that the format does not support matte channels.</p>\n\
<p>Example</p>\n\
<p>The first example supports only 8 bits in the matte channel; the second example supports 8, 10, and 16 bits.</p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerMatte = 0x00000080;</span></p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerMatte = 0x00008280;</span></p>\n\
<div class=\'section\'><a id=\"imagebitsperzchannel\"></a><h3 id=\"imagebitsperzchannel\">imageBitsPerZChannel</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerZChannel</span></p>\n\
<p>Description</p>\n\
<p>This variable is identical to <span class=\'code\'>imageBitsPerChannel</span>, except that it describes the number of bits supported by the z channel.</p>\n\
<p>The default value is <span class=\'code\'>0x00000000</span>, which means that the format does not support z channels.</p>\n\
<p>Example</p>\n\
<p>The first example supports only 8 bits in the z channel; the second example supports 8, 10, and 16 bits.</p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerZChannel = 0x00000080;</span></p>\n\
<p><span class=\'code\'>unsigned int imageBitsPerZChannel = 0x00008280;</span></p>\n\
<div class=\'section\'><a id=\"imagecapability\"></a><h3 id=\"imagecapability\">imageCapability</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>void imageCapability</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>IMF_CAPABILITY **capabilities,</span></p>\n\
<p><span class=\'code\'>int *num_input,</span></p>\n\
<p><span class=\'code\'>int *num_output,</span></p>\n\
<p><span class=\'code\'>int *total</span></p>\n\
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
<span class=\"code\">capabilities</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4A3\"></a>\n\
<p class=\"table-body\">\n\
Output\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4A4\"></a>\n\
<p class=\"table-body\">\n\
Returns a pointer to the capabilities for this file type.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">num_input</span>\n\
</td>\n\
<td class=\"table-body\">\n\
Output\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4A5\"></a>\n\
<p class=\"table-body\">\n\
The number of capabilities applicable to file reading.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
num_output\n\
</td>\n\
<td class=\"table-body\">\n\
Output\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4A6\"></a>\n\
<p class=\"table-body\">\n\
The number of capabilities applicable to file writing.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
total\n\
</td>\n\
<td class=\"table-body\">\n\
Output\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4A7\"></a>\n\
<p class=\"table-body\">\n\
The total number of capabilities.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Description</p>\n\
<p>This function is called during initialization when Maya determines the capabilities to display in its menus. For more information on capabilities, see <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html#imf_capability\' title=\'\'>IMF_CAPABILITY</a>.</p>\n\
<p>Example</p>\n\
<p>This generic code fragment loops through your plug-in&#39;s list of capabilities:</p>\n\
<p><span class=\'code\'>int i;</span></p>\n\
<p><span class=\'code\'>*capabilities = your_capabilities;</span></p>\n\
<p><span class=\'code\'>for ( *num_input = *num_output = *total = i = 0;</span></p>\n\
<p><span class=\'code\'>i &lt; number_elements_in( your_capabilities );</span></p>\n\
<p><span class=\'code\'>++i )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>if ( your_capabilities[i].imc_when_avail</span></p>\n\
<p><span class=\'code\'>&amp; IMF_CAPABILITY_WHEN_INPUT )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>++( *num_input );</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p><span class=\'code\'>if ( your_capabilities[i].imc_when_avail</span></p>\n\
<p><span class=\'code\'>&amp; IMF_CAPABILITY_WHEN_OUTPUT )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>++( *num_output );</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p><span class=\'code\'>if ( your_capabilities[i].imc_when_avail</span></p>\n\
<p><span class=\'code\'>&amp; ( IMF_CAPABILITY_WHEN_INPUT</span></p>\n\
<p><span class=\'code\'>| IMF_CAPABILITY_WHEN_OUTPUT ) )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>++( *total );</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<div class=\'section\'><a id=\"imagedescription\"></a><h3 id=\"imagedescription\">imageDescription</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *imageDescription</span></p>\n\
<p>Description</p>\n\
<p>This variable is a string used to provide a more detailed description of the file format. It augments the <span class=\'code\'>imageName</span> when displayed in menus.</p>\n\
<p>The default value is <span class=\'code\'>NULL</span>, which means that no additional description exists.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>char *imageDescription = &quot;Version 2&quot;;</span></p>\n\
<div class=\'section\'><a id=\"imagedone\"></a><h3 id=\"imagedone\">imageDone</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>void imageDone( void )</span></p>\n\
<p>Description</p>\n\
<p>This optional routine is called when you exit Maya. If your plug-in requires special licensing, you should also release the license at this point.</p>\n\
<div class=\'section\'><a id=\"imageextension\"></a><h3 id=\"imageextension\">imageExtension</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *imageExtension</span></p>\n\
<p>Description</p>\n\
<p>This variable defines the default extension when generating filenames for your plug-in. It must include the preceding period. The default value is <span class=\'code\'>NULL</span>, which indicates that the format does not typically use an extension.</p>\n\
<p>This variable is used to determine the format of the image file when the file type is defined as <span class=\'code\'>Determine from extension</span>.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>char *imageExtension = &quot;.gif&quot;;</span></p>\n\
<div class=\'section\'><a id=\"imageformatstring\"></a><h3 id=\"imageformatstring\">imageFormatString</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *imageFormatString</span></p>\n\
<p>Description</p>\n\
<p>This variable defines the default format of the filename, and includes the root name, frame number, and extension. It uses the same notation as <span class=\'code\'>sprintf</span>.</p>\n\
<p>The first <span class=\'code\'>%s</span> in the variable is used for the root name; the <span class=\'code\'>%d</span> is used for the frame number; and the second <span class=\'code\'>%s</span> is used for the extension. The default value is <span class=\'code\'>%s.%04.4d.%s</span>.</p>\n\
<p>Example</p>\n\
<p>This example defines a syntax where the root name is immediately followed by the non-zero padded frame number, and then followed by the period-separated extension.</p>\n\
<p><span class=\'code\'>char *imageFormatString = &quot;%s%d.%s&quot;;</span></p>\n\
<div class=\'section\'><a id=\"imagehardlinkduplicates-unix-only\"></a><h3 id=\"imagehardlinkduplicates-unix-only\">imageHardLinkDuplicates (UNIX only)</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>BOOLEAN imageHardLinkDuplicates</span></p>\n\
<p>Description</p>\n\
<p>This variable indicates whether Maya should create hard links to identical files that are created in a sequence. For example, if <span class=\'code\'>image.1.ext</span>, <span class=\'code\'>image.2.ext</span>, and <span class=\'code\'>image.3.ext</span> are identical, setting this variable to <span class=\'code\'>TRUE</span> allows Maya to create only one file, but make hard links from the other two files to the newly created one. If this variable were <span class=\'code\'>FALSE</span>, three separate but identical files would be created.</p>\n\
<p>The default value is <span class=\'code\'>TRUE</span>.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>BOOLEAN imageHardLinkDuplicates = FALSE;</span></p>\n\
<div class=\'section\'><a id=\"imageinit\"></a><h3 id=\"imageinit\">imageInit</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imageInit( void )</span></p>\n\
<p>Description</p>\n\
<p>If defined, this routine is invoked before your plug-in’s functionality is added to Maya. If the return value is <span class=\'code\'>TRUE</span>, the plug-in is loaded as usual. However, if it returns <span class=\'code\'>FALSE</span>, the plug-in is unloaded.</p>\n\
<p>This initialization routine can be used in conjunction with the <span class=\'code\'>imageDone</span> routine to provide a means of opening and closing any licensing schemes that you implement. If the plug-in offers multiple language support, this routine can be used to internationalize any strings. You can also set default values for <span class=\'code\'>imageExtension</span> and <span class=\'code\'>imageNameSyntax</span> within this call.</p>\n\
<div class=\'section\'><a id=\"imageisfile\"></a><h3 id=\"imageisfile\">imageIsFile</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>BOOLEAN imageIsFile(</span></p>\n\
<p><span class=\'code\'>char *fn,</span></p>\n\
<p><span class=\'code\'>FILE *fp</span></p>\n\
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
<pre><code>fn\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4F5\"></a>\n\
<p class=\"table-body\">\n\
char*\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4F6\"></a>\n\
<p class=\"table-body\">\n\
Filename, used only if <span class=\"code\">fp</span> is <span class=\"code\">NULL</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<pre><code>fp\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
FILE*\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4F7\"></a>\n\
<p class=\"table-body\">\n\
File pointer.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Return Value\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F4F8\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">TRUE</span> if <span class=\"code\">fn</span> or <span class=\"code\">fp</span> refer to a file supported by this plug-in.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Description</p>\n\
<p>Checks whether a filename or pointer matches a type supported by this plug-in.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Definition of this entry point is mandatory.</p>\n\
</blockquote>\n\
<p>Example</p>\n\
<p><span class=\'code\'>if ( fp == NULL )</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>fp = fopen( fn, &quot;r&quot; ) );</span></p>\n\
<p><span class=\'code\'>}</span></p>\n\
<p><span class=\'code\'>/* Read the header from fp and check for a match with this plug-in */</span></p>\n\
<p><span class=\'code\'>fread( &amp;magic, 1, sizeof( magic ), fp );</span></p>\n\
<p><span class=\'code\'>return ( magic &amp; FORMATS_MAGIC_NUMBER )</span></p>\n\
<div class=\'section\'><a id=\"imagenamesyntax\"></a><h3 id=\"imagenamesyntax\">imageNameSyntax</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>char *imageNameSyntax</span></p>\n\
<p>Description</p>\n\
<p>This variable defines the default format of the filename, and includes the root name, frame number, and extension.</p>\n\
<p>The name syntax recognizes four strings:</p>\n\
<ul>\n\
<li><span class=\'code\'>Name</span>, which represents the root name of the file</li>\n\
<li><span class=\'code\'>Ext</span>, which represents the extension</li>\n\
<li><span class=\'code\'>#</span>, which represents the frame number</li>\n\
<li>punctuation, such as period (.), comma (,), and hyphen (-)</li>\n\
</ul>\n\
<p>These can be combined in any way to produce the desired filename. Each of the name, frame number, and extension can occur at most once, but the # can be repeated to pad the frame number with leading zeroes.</p>\n\
<p>The default value is <span class=\'code\'>NULL</span>.</p>\n\
<p>This string is not recognized by Maya.</p>\n\
<p>Example</p>\n\
<p>This example produces a name with at least two digits used for the frame number. There is no punctuation between the name and the frame number, but a period is placed between the frame number and extension.</p>\n\
<p><span class=\'code\'>char *imageNameSyntax = &quot;Name##.Ext&quot;;</span></p>\n\
<div class=\'section\'><a id=\"imagenumberofchannels\"></a><h3 id=\"imagenumberofchannels\">imageNumberOfChannels</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imageNumberOfChannels</span></p>\n\
<p>Description</p>\n\
<p>This variable defines the maximum number of color channels that your file format supports. It does not include the matte channel. Normally, this is <span class=\'code\'>3</span> for RGB images, and <span class=\'code\'>1</span> for formats that support gray-scale only.</p>\n\
<p>The default value is <span class=\'code\'>3</span>.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>int imageNumberOfChannels = 3;</span></p>\n\
<div class=\'section\'><a id=\"imagenumberofmattes\"></a><h3 id=\"imagenumberofmattes\">imageNumberOfMattes</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imageNumberOfMattes;</span></p>\n\
<p>Description</p>\n\
<p>This variable defines the maximum number of matte, or alpha, channels that your file format supports. Normally, this is <span class=\'code\'>1</span> if your format supports matte, and <span class=\'code\'>0</span> otherwise.</p>\n\
<p>The default value is <span class=\'code\'>0</span>.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>int imageNumberOfMattes = 1;</span></p>\n\
<div class=\'section\'><a id=\"imagenumberofzchannels\"></a><h3 id=\"imagenumberofzchannels\">imageNumberOfZChannels</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imageNumberOfZChannels</span></p>\n\
<p>Description</p>\n\
<p>This variable defines the maximum number of z, or depth, channels that your file format supports. Normally, this is <span class=\'code\'>1</span> if your format supports z, and <span class=\'code\'>0</span> otherwise.</p>\n\
<p>The default value is <span class=\'code\'>0</span>.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>int imageNumberOfZChannels = 1;</span></p>\n\
<div class=\'section\'><a id=\"imagesupportremoteaccess\"></a><h3 id=\"imagesupportremoteaccess\">imageSupportRemoteAccess</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>BOOLEAN imageSupportRemoteAccess</span></p>\n\
<p>Description</p>\n\
<p>This variable defines whether your plug-in supports remote file access. If so, set this to <span class=\'code\'>TRUE</span>. Otherwise, Maya will perform remote file access where possible, and remove any leading <span class=\'code\'>remotehost:</span> from filenames before passing them to your plug-in.</p>\n\
<p>The default value is <span class=\'code\'>FALSE</span>.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>BOOLEAN imageSupportRemoteAccess = TRUE;</span></p>\n\
<div class=\'section\'><a id=\"imagesupportsactivewindow\"></a><h3 id=\"imagesupportsactivewindow\">imageSupportsActiveWindow</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int imageSupportsActiveWindow</span></p>\n\
<p>Description</p>\n\
<p>This variable indicates whether your format supports the notion of an active window. The default value is <span class=\'code\'>FALSE</span>.</p>\n\
<p>Example</p>\n\
<p><span class=\'code\'>int imageSupportsActiveWindow = FALSE;</span></p>\n\
<div class=\'section\'><a id=\"look-up-table-lut-reading-function\"></a><h3 id=\"look-up-table-lut-reading-function\">Look-up table (LUT) reading function</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>int your_lut_read_func</span></p>\n\
<p><span class=\'code\'>(</span></p>\n\
<p><span class=\'code\'>POINTER data,</span></p>\n\
<p><span class=\'code\'>IMF_LUT **imf_lut</span></p>\n\
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
<pre><code>data\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F544\"></a>\n\
<p class=\"table-body\">\n\
input\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F545\"></a>\n\
<p class=\"table-body\">\n\
The private data associated with your image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<pre><code>imf_lut\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
output\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F546\"></a>\n\
<p class=\"table-body\">\n\
A pointer to a newly allocated look-up table.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
Return Value\n\
</td>\n\
<td class=\"table-body\">\n\
 \n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F547\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">TRUE</span> if the <span class=\"code\">LUT</span> was successfully allocated and read; <span class=\"code\">FALSE</span> if an error occurred.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>Description</p>\n\
<p>Maya calls this function to read the image file&#39;s color look-up table. Since LUTs usually use little space, it is recommended that they be read by <span class=\'code\'>imageReadOpen</span> and stored in the private data associated with the image. This way, <span class=\'code\'>your_lut_read_func</span> only needs to allocate a new <span class=\'code\'>IMF_LUT</span> and copy it to the stored LUT data.</p>\n\
<ul>\n\
<li><p>Allocate the LUT:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">if ( ( *imf_lut = IMF_lut_alloc( data-&gt;your_color_map_size ) ) == NULL )\n\
{\n\
     return( FALSE );\n\
}\n\
</pre></div></li>\n\
<li>Set <span class=\'code\'>(*imf_lut)-&gt;imu_maximum</span> to the maximum value of each LUT entry. For example, if your file format stores each LUT entry as 12 bits of red, 12 bits of green, and 12 bits of blue, use 4095 for <span class=\'code\'>imu_maximum</span>.</li>\n\
<li>Set <span class=\'code\'>(*imf_lut)-&gt;imu_gamma</span> to be the gamma of the color look-up table if it is stored in the file, or the default input gamma value using <span class=\'code\'>FMT_def_input_gamma</span>. This should be the gamma that was applied to the LUT entries when they were written.</li>\n\
<li>Fill in each <span class=\'code\'>(*imf_lut)-&gt;imu_lut[i].ile_red</span>, (<span class=\'code\'>*imf_lut)-&gt;imu_lut[i].ile_green</span>, etc. entry. See <span class=\'code\'>IMF_LUT</span> for a description of the <span class=\'code\'>IMF_LUT</span> structure. Each LUT entry should range from 0 to the <span class=\'code\'>imu_maximum</span> entry set in step 2.</li>\n\
<li><p>Return <span class=\'code\'>TRUE</span> if successful, and <span class=\'code\'>FALSE</span> if an error occurred.</p></li>\n\
</ul>\n\
<p>Information on adding image plug-ins continues in <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Part-3.html\' title=\'\'>part three of Appendix E</a></p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";