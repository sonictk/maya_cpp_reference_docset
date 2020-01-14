var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Appendix E, Part 4</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Appendix E, Part 4</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"appendix-e-part-4\"></a></div>\n\
<p>Continues from <a href=\'#!/url=./dev_help/Appendices/Appendix-E-Adding-Image-Plug-ins.html\' title=\'\'>Appendix E: Adding Image Plug-ins</a>. ## Library Functions</p>\n\
<div class=\'section\'><a id=\"imf_capability_entry\"></a><h3 id=\"imf_capability_entry\">IMF_CAPABILITY_ENTRY</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_capability_entry</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>U_SHORT ice_code;</span></p>\n\
<p><span class=\'code\'>char *ice_name;</span></p>\n\
<p><span class=\'code\'>MSGCAT_DEFN ice_name_msg;</span></p>\n\
<p><span class=\'code\'>} IMF_CAPABILITY_ENTRY;</span></p>\n\
<p>Purpose</p>\n\
<p>This structure is used to define a single entry of a <span class=\'code\'>IMF_CAPABILITY_LIST</span>.</p>\n\
<p>Description</p>\n\
<p>The following table gives the desciptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>imc_code\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F61A\"></a>\n\
<p class=\"table-body\">\n\
A 16-bit number unique among all the capability entries defined in an <span class=\"code\">IMF_CAPABILITY_LIST</span>. This number is used by your <span class=\"code\">imageReadOpen</span> and/or <span class=\"code\">imageWriteOpen</span> code to determine the list entry that was selected by the user.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imc_name</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F61B\"></a>\n\
<p class=\"table-body\">\n\
The character string displayed in the user interface for this list item.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imc_name_msg</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F61C\"></a>\n\
<p class=\"table-body\">\n\
An internationalized version of <span class=\"code\">ice_name</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"imf_capability_list\"></a><h3 id=\"imf_capability_list\">IMF_CAPABILITY_LIST</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_capability_list</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>int icl_default;</span></p>\n\
<p><span class=\'code\'>int icl_n_entries;</span></p>\n\
<p><span class=\'code\'>IMF_CAPABILITY_ENTRY *icl_entries;</span></p>\n\
<p><span class=\'code\'>} IMF_CAPABILITY_LIST;</span></p>\n\
<p>Purpose</p>\n\
<p>When an <span class=\'code\'>IMF_CAPABILITY</span> record is of type <span class=\'code\'>IMF_CAPABILITY_TYPE_LIST</span>, the <span class=\'code\'>imc_value</span> field points to an <span class=\'code\'>IMF_CAPABILITY_LIST</span> record whose icl_entries pointer is an array of <span class=\'code\'>IMF_CAPABILITY_ENTRY</span> records.</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>icl_default\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F62A\"></a>\n\
<p class=\"table-body\">\n\
The <span class=\"code\">ice_code</span> of the default list entry.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">icl_n_entries</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F62B\"></a>\n\
<p class=\"table-body\">\n\
The number of entries in the list.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">icl_entries</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F62C\"></a>\n\
<p class=\"table-body\">\n\
The list of entries.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"imf_capability_number\"></a><h3 id=\"imf_capability_number\">IMF_CAPABILITY_NUMBER</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_capability_number</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>float icn_default;</span></p>\n\
<p><span class=\'code\'>BOOLEAN icn_minimum_dfnd;</span></p>\n\
<p><span class=\'code\'>float icn_minimum;</span></p>\n\
<p><span class=\'code\'>BOOLEAN icn_maximum_dfnd;</span></p>\n\
<p><span class=\'code\'>float icn_maximum;</span></p>\n\
<p><span class=\'code\'>floay icn_increment;</span></p>\n\
<p><span class=\'code\'>} IMF_CAPABILITY_NUMBER;</span></p>\n\
<p>Purpose</p>\n\
<p>If the <span class=\'code\'>IMF_CAPABILITY</span> record has type <span class=\'code\'>IMF_CAPABILITY_TYPE_NUMBER</span>, this structure is used to define the default value and the range of values allowed for the capability.</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>icn_default\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F63D\"></a>\n\
<p class=\"table-body\">\n\
The default value of this number capability.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">icn_minimum_dfnd</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F63E\"></a>\n\
<p class=\"table-body\">\n\
Denotes whether a minimum value is defined. TRUE if so, FALSE if not.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">icn_minimum</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F63F\"></a>\n\
<p class=\"table-body\">\n\
The minimum value, applicable only if <span class=\"code\">icn_minimum_dfnd</span> is set to TRUE.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
icn_maximum_dfnd\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F640\"></a>\n\
<p class=\"table-body\">\n\
Denotes whether a maximum value is defined. TRUE if so, FALSE if not.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
icn_maximum\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F641\"></a>\n\
<p class=\"table-body\">\n\
The maximum value, applicable only if <span class=\"code\">icn_maximum_dfnd</span> is set to TRUE.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
icn_increment\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F642\"></a>\n\
<p class=\"table-body\">\n\
The increment used by the slider or thumbwheel.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<p>If <span class=\'code\'>icn_minimum_dfnd</span> and <span class=\'code\'>icn_maximum_dfnd</span> are both <span class=\'code\'>TRUE</span>, a slider is displayed beside the text field. Otherwise, a thumbwheel is displayed.</p>\n\
<div class=\'section\'><a id=\"imf_cap_setting\"></a><h3 id=\"imf_cap_setting\">IMF_CAP_SETTING</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_cap_setting</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>U_SHORT imcs_code;</span></p>\n\
<p><span class=\'code\'>union</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>float imcs_number;</span></p>\n\
<p><span class=\'code\'>int imcs_list;</span></p>\n\
<p><span class=\'code\'>} imcs_value;</span></p>\n\
<p><span class=\'code\'>} IMF_CAP_SETTING;</span></p>\n\
<p>Purpose</p>\n\
<p>This structure is used to pass the current settings of the capabilities to your plug-in when opening a file.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>imcs_code\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F652\"></a>\n\
<p class=\"table-body\">\n\
The <span class=\"code\">imc_code</span> of the setting.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imcs_number</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F653\"></a>\n\
<p class=\"table-body\">\n\
Value if the capability is an <span class=\"code\">IMF_CAPABILITY_TYPE_NUMBER</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imcs_list</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F654\"></a>\n\
<p class=\"table-body\">\n\
Value if the capability is an <span class=\"code\">IMF_CAPABILITY_TYPE_LIST</span>. This is a zero-based index into the list.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"imf_image\"></a><h3 id=\"imf_image\">IMF_IMAGE</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>int usage;</span></p>\n\
<p><span class=\'code\'>IMF_COLOR_RESPONSE curve;</span></p>\n\
<p><span class=\'code\'>FMT_ASPECT_INFO aspect;</span></p>\n\
<p><span class=\'code\'>WINDOW_I window;</span></p>\n\
<p><span class=\'code\'>WINDOW_I active;</span></p>\n\
<p><span class=\'code\'>int chan_config;</span></p>\n\
<p><span class=\'code\'>int chan_orient;</span></p>\n\
<p><span class=\'code\'>char *chan_format;</span></p>\n\
<p><span class=\'code\'>int chan_count;</span></p>\n\
<p><span class=\'code\'>int chan_type;</span></p>\n\
<p><span class=\'code\'>int chan_bits;</span></p>\n\
<p><span class=\'code\'>char *matte_format;</span></p>\n\
<p><span class=\'code\'>int matte_count;</span></p>\n\
<p><span class=\'code\'>int matte_type;</span></p>\n\
<p><span class=\'code\'>int matte_bits;</span></p>\n\
<p><span class=\'code\'>char *aux_format;</span></p>\n\
<p><span class=\'code\'>int aux_count;</span></p>\n\
<p><span class=\'code\'>int aux_type;</span></p>\n\
<p><span class=\'code\'>int aux_bits;</span></p>\n\
<p><span class=\'code\'>char *index_format;</span></p>\n\
<p><span class=\'code\'>int index_count;</span></p>\n\
<p><span class=\'code\'>int index_type;</span></p>\n\
<p><span class=\'code\'>int index_bits;</span></p>\n\
<p><span class=\'code\'>} IMF_IMAGE;</span></p>\n\
<p>Purpose</p>\n\
<p><span class=\'code\'>IMF_IMAGE</span> defines the contents of a single image from a file.</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>usage\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F676\"></a>\n\
<p class=\"table-body\">\n\
A bit field describing the image type: <span class=\"code\">IMF_C_IMAGE_ANY</span> for any image type; <span class=\"code\">IMF_C_GENERIC</span> for a generic image (the default set by <span class=\"code\">imf__init_ifd</span>); and <span class=\"code\">IMF_C_INDEX_LUT</span> for a look-up table-based image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">curve</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F677\"></a>\n\
<p class=\"table-body\">\n\
Color correction information.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">aspect</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F678\"></a>\n\
<p class=\"table-body\">\n\
Image aspect information.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
window\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F679\"></a>\n\
<p class=\"table-body\">\n\
Image window boundaries, using zero-based numbers.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
active\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67A\"></a>\n\
<p class=\"table-body\">\n\
Active window boundaries.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">chan_config</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67B\"></a>\n\
<p class=\"table-body\">\n\
Channel planarity. This field affects how scanline data is passed to the scanline reading and writing functions. There are two options available:\n\
</p>\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67C\"></a>\n\
<ul>\n\
<li>\n\
One of <span class=\"code\">IMF_C_PLANAR_CONTIGUOUS</span> for red, green, and blue in one large scanline buffer with values arranged in R, G, B, R, G, B, etc. order; or,\n\
</li>\n\
<li>\n\
<span class=\"code\">IMF_C_PLANAR_SEPARATE</span> for red, green, and blue in separate arrays (normally used).\n\
</li>\n\
</ul>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
chan_orient\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67F\"></a>\n\
<p class=\"table-body\">\n\
Channel orientation: <span class=\"code\">IMF_C_ORIENT_BOT_LEFT</span> for bottom-to-top ordering; or <span class=\"code\">IMF_C_ORIENT_TOP_LEFT</span> for top-to-bottom ordering.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
chan_format\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F680\"></a>\n\
<p class=\"table-body\">\n\
Color channel format.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
chan_count\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F681\"></a>\n\
<p class=\"table-body\">\n\
The number of color channels.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
chan_type\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F682\"></a>\n\
<p class=\"table-body\">\n\
Color channel storage type: <span class=\"code\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\">imf__init_ifd</span>); <span class=\"code\">IMF_C_FLOAT</span> for single-precision float values; <span class=\"code\">IMF_C_DOUBLE</span> for double-precision double values.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
chan_bits\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F683\"></a>\n\
<p class=\"table-body\">\n\
Number of bits per color channel value.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
matte_format\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F684\"></a>\n\
<p class=\"table-body\">\n\
Matte channel format.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
matte_count\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F685\"></a>\n\
<p class=\"table-body\">\n\
The number of matte channels.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
matte_type\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F686\"></a>\n\
<p class=\"table-body\">\n\
Matte channel storage type: <span class=\"code\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\">imf__init_ifd</span>); <span class=\"code\">IMF_C_FLOAT</span> for single-precision <span class=\"code\">float</span> values; <span class=\"code\">IMF_C_DOUBLE</span> for double-precision <span class=\"code\">double</span> values.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
matte_bits\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F687\"></a>\n\
<p class=\"table-body\">\n\
Number of bits per matte channel value.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
aux_format\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F688\"></a>\n\
<p class=\"table-body\">\n\
Auxiliary (z) channel format.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
aux_count\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F689\"></a>\n\
<p class=\"table-body\">\n\
The number of (z) auxiliary channels.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
aux_type\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68A\"></a>\n\
<p class=\"table-body\">\n\
Auxiliary (z) channel storage type: <span class=\"code\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\">imf__init_ifd</span>); <span class=\"code\">IMF_C_FLOAT</span> for single-precision float values; <span class=\"code\">IMF_C_DOUBLE</span> for double-precision double values.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
aux_bits\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68B\"></a>\n\
<p class=\"table-body\">\n\
Number of bits per auxiliary (z) channel value.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
index_format\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68C\"></a>\n\
<p class=\"table-body\">\n\
Color index format.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
index_count\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68D\"></a>\n\
<p class=\"table-body\">\n\
The number of color-indexed image data channels.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
index_type\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68E\"></a>\n\
<p class=\"table-body\">\n\
Color-indexed data channel storage type: <span class=\"code\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\">imf__init_ifd</span>); <span class=\"code\">IMF_C_FLOAT</span> for single-precision <span class=\"code\">float</span> values; <span class=\"code\">IMF_C_DOUBLE</span> for double-precision <span class=\"code\">double</span> values.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
index_bits\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68F\"></a>\n\
<p class=\"table-body\">\n\
Number of bits per pixel for palette indexes.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"imf_info\"></a><h3 id=\"imf_info\">IMF_INFO</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>char *key;</span></p>\n\
<p><span class=\'code\'>char *handle;</span></p>\n\
<p><span class=\'code\'>BOOLEAN handle_complete;</span></p>\n\
<p><span class=\'code\'>char *name;</span></p>\n\
<p><span class=\'code\'>char *ext;</span></p>\n\
<p><span class=\'code\'>char *desc;</span></p>\n\
<p><span class=\'code\'>char *program;</span></p>\n\
<p><span class=\'code\'>char *machine;</span></p>\n\
<p><span class=\'code\'>char *user;</span></p>\n\
<p><span class=\'code\'>char *date;</span></p>\n\
<p><span class=\'code\'>char *time;</span></p>\n\
<p><span class=\'code\'>char *filter;</span></p>\n\
<p><span class=\'code\'>char *compress;</span></p>\n\
<p><span class=\'code\'>IMF_CAP_SETTING **settings;</span></p>\n\
<p><span class=\'code\'>BOOLEAN lut_exists;</span></p>\n\
<p><span class=\'code\'>IMF_LUT *write_lut;</span></p>\n\
<p><span class=\'code\'>int job_num;</span></p>\n\
<p><span class=\'code\'>int frame;</span></p>\n\
<p><span class=\'code\'>int field;</span></p>\n\
<p><span class=\'code\'>U_LONG init_flag;</span></p>\n\
<p><span class=\'code\'>COLOR_XYZ_3F red_pri;</span></p>\n\
<p><span class=\'code\'>COLOR_XYZ_3F green_pri;</span></p>\n\
<p><span class=\'code\'>COLOR_XYZ_3F blue_pri;</span></p>\n\
<p><span class=\'code\'>COLOR_XYZ_3F white_pt;</span></p>\n\
<p><span class=\'code\'>int count;</span></p>\n\
<p><span class=\'code\'>IMF_IMAGE *image;</span></p>\n\
<p><span class=\'code\'>int track_num_frames;</span></p>\n\
<p><span class=\'code\'>float track_frame_rate;</span></p>\n\
<p><span class=\'code\'>int track_start_frame;</span></p>\n\
<p><span class=\'code\'>int num_audio_tracks;</span></p>\n\
<p><span class=\'code\'>int num_video_tracks;</span></p>\n\
<p><span class=\'code\'>} IMF_INFO;</span></p>\n\
<p>Purpose</p>\n\
<p>Contains information describing the image file.</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>key\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6B9\"></a>\n\
<p class=\"table-body\">\n\
The plug-in&#39;s unique identifier key.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">handle</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BA\"></a>\n\
<p class=\"table-body\">\n\
Filename of the image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">handle_complete</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BB\"></a>\n\
<p class=\"table-body\">\n\
Denotes if <span class=\"code\">handle</span> is completely built. If <span class=\"code\">FALSE</span>, your plug-in should use <span class=\"code\">imf__build_handle</span> to build a complete filename path.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
name\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BC\"></a>\n\
<p class=\"table-body\">\n\
The name of the image file.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ext\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BD\"></a>\n\
<p class=\"table-body\">\n\
The filename extension.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
desc\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BE\"></a>\n\
<p class=\"table-body\">\n\
A description of the image file type.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
program\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BF\"></a>\n\
<p class=\"table-body\">\n\
The program that created the image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
machine\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C0\"></a>\n\
<p class=\"table-body\">\n\
The machine on which the image was created.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
user\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C1\"></a>\n\
<p class=\"table-body\">\n\
The user who created the image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
date\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C2\"></a>\n\
<p class=\"table-body\">\n\
The creation date of the image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
time\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C3\"></a>\n\
<p class=\"table-body\">\n\
The time taken to create the file.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
filter\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C4\"></a>\n\
<p class=\"table-body\">\n\
The filter function used by the image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
compress\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C5\"></a>\n\
<p class=\"table-body\">\n\
The compression function used by the image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
settings\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C6\"></a>\n\
<p class=\"table-body\">\n\
Capability settings set by the user.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
lut_exists\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C7\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">TRUE</span> if a look-up table (LUT) is used for the image data in the scanline buffers; <span class=\"code\">FALSE</span> if the data is RGB.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
write_lut\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C8\"></a>\n\
<p class=\"table-body\">\n\
Pointer to a LUT. Used only when writing palette-based image files.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
job_num\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C9\"></a>\n\
<p class=\"table-body\">\n\
Process job accounting information.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
frame\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CA\"></a>\n\
<p class=\"table-body\">\n\
The frame number.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
field\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CB\"></a>\n\
<p class=\"table-body\">\n\
Field rendering flag.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
init_flag\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CC\"></a>\n\
<p class=\"table-body\">\n\
Denotes whether the caller has invoked <span class=\"code\">IMF_info_init</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
red_pri\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CD\"></a>\n\
<p class=\"table-body\">\n\
Red chroma.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
green_pri\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CE\"></a>\n\
<p class=\"table-body\">\n\
Green chroma.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
blue_pri\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CF\"></a>\n\
<p class=\"table-body\">\n\
Blue chroma.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
white_pt\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D0\"></a>\n\
<p class=\"table-body\">\n\
White chroma.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
count\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D1\"></a>\n\
<p class=\"table-body\">\n\
The number of image sub headers pointed to by the image field.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
image\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D2\"></a>\n\
<p class=\"table-body\">\n\
An array of image sub headers containing detailed image information.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
track_num_frames\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D3\"></a>\n\
<p class=\"table-body\">\n\
The number of frames in the current track.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
track_frame_rate\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D4\"></a>\n\
<p class=\"table-body\">\n\
The number of frames per second for the track.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
track_start_frame\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D5\"></a>\n\
<p class=\"table-body\">\n\
The number of the first frame in the current track.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
num_audio_tracks\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D6\"></a>\n\
<p class=\"table-body\">\n\
The number of audio tracks in the current file.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
num_video_tracks\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D7\"></a>\n\
<p class=\"table-body\">\n\
The number of video tracks in the current file.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"imf_lut\"></a><h3 id=\"imf_lut\">IMF_LUT</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_lut</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>IMF_LUT_ENTRY *imu_lut;</span></p>\n\
<p><span class=\'code\'>int imu_maximum;</span></p>\n\
<p><span class=\'code\'>int imu_n_entries;</span></p>\n\
<p><span class=\'code\'>float imu_gamma;</span></p>\n\
<p><span class=\'code\'>} IMF_LUT;</span></p>\n\
<p>Purpose</p>\n\
<p>This structure defines a look-up table (LUT).</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>imu_lut\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E6\"></a>\n\
<p class=\"table-body\">\n\
The look-up table entries.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imu_maximum</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E7\"></a>\n\
<p class=\"table-body\">\n\
The maximum value that each LUT entry can contain.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">imu_n_entries</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E8\"></a>\n\
<p class=\"table-body\">\n\
The number of LUT entries pointed to by <span class=\"code\">imu_lut</span>.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
imu_gamma\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E9\"></a>\n\
<p class=\"table-body\">\n\
The gamma value of the LUT entries.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"imf_lut_entry\"></a><h3 id=\"imf_lut_entry\">IMF_LUT_ENTRY</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_lut_entry</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>U_SHORT ile_red;</span></p>\n\
<p><span class=\'code\'>U_SHORT ile_green;</span></p>\n\
<p><span class=\'code\'>U_SHORT ile_blue;</span></p>\n\
<p><span class=\'code\'>U_CHAR ile_mode:7;</span></p>\n\
<p><span class=\'code\'>U_CHAR ile_transparent:1;</span></p>\n\
<p><span class=\'code\'>} IMF_LUT_ENTRY;</span></p>\n\
<p>Purpose</p>\n\
<p>This structure defines one entry of a look-up table.</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<pre><code>ile_red\n\
</code></pre>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6F9\"></a>\n\
<p class=\"table-body\">\n\
The red value of this entry.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">ile_green</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FA\"></a>\n\
<p class=\"table-body\">\n\
The green value of this entry.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">ile_blue</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FB\"></a>\n\
<p class=\"table-body\">\n\
The blue value of this entry.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
ile_mode\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FC\"></a>\n\
<p class=\"table-body\">\n\
<span class=\"code\">IMF_LUT_MODE_FREE</span> if the entry is unused; <span class=\"code\">IMF_LUT_MODE_LOCKED</span> if the entry is locked but usable; <span class=\"code\">IMF_LUT_MODE_RESERVED</span> if the entry is reserved and unusable; or <span class=\"code\">IMF_LUT_MODE_USED</span> if the entry is in use and is modifiable.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
ile_transparent\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FD\"></a>\n\
<p class=\"table-body\">\n\
Set to 0 if the entry is not transparent (i.e., opaque), and 1 if the entry is transparent.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"imf_object\"></a><h3 id=\"imf_object\">IMF_OBJECT</h3></div>\n\
<p>Definition</p>\n\
<p><span class=\'code\'>typedef struct imf_object</span></p>\n\
<p><span class=\'code\'>{</span></p>\n\
<p><span class=\'code\'>POINTER *data;</span></p>\n\
<p><span class=\'code\'>IMF_INFO info;</span></p>\n\
<p><span class=\'code\'>int access;</span></p>\n\
<p><span class=\'code\'>IMF_lutReadProc lut_read;</span></p>\n\
<p><span class=\'code\'>IMF_scanProc scan;</span></p>\n\
<p><span class=\'code\'>IMF_closeProc close;</span></p>\n\
<p><span class=\'code\'>IMF_playbackBindProc playback_bind;</span></p>\n\
<p><span class=\'code\'>IMF_playbackGotoProc playback_goto;</span></p>\n\
<p><span class=\'code\'>IMF_playbackPlayProc playback_play;</span></p>\n\
<p><span class=\'code\'>IMF_playbackParamsProc playback_params;</span></p>\n\
<p><span class=\'code\'>IMF_playbackStopProc playback_stop;</span></p>\n\
<p><span class=\'code\'>IMF_getFrameProc get_frame;</span></p>\n\
<p><span class=\'code\'>IMF_getRasterProc get_raster;</span></p>\n\
<p><span class=\'code\'>IMF_getRegionProc get region;</span></p>\n\
<p><span class=\'code\'>IMF_setFrameProc set_frame;</span></p>\n\
<p><span class=\'code\'>} IMF_OBJECT;</span></p>\n\
<p>Purpose</p>\n\
<p>This structure is used when calling <span class=\'code\'>imageReadOpen</span> and <span class=\'code\'>imageWriteOpen</span>.</p>\n\
<p>Description</p>\n\
<p>The following table gives the descriptions.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Field\n\
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
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F717\"></a>\n\
<p class=\"table-body\">\n\
The private data associated with your image.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">info</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F718\"></a>\n\
<p class=\"table-body\">\n\
Image file information.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<span class=\"code\">access</span>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F719\"></a>\n\
<p class=\"table-body\">\n\
Image access type.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
lut_read\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71A\"></a>\n\
<p class=\"table-body\">\n\
Function that retrieves look-up table information from an image file.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
scan\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71B\"></a>\n\
<p class=\"table-body\">\n\
Your scanline access function.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
close\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71C\"></a>\n\
<p class=\"table-body\">\n\
Image close function.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
playback_bind\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71D\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
playback_goto\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71E\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
playback_play\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71F\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
playback_params\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F720\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
playback_stop\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F721\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
get_frame\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F722\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
get_raster\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F723\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
get_region\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F724\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
set_frame\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9F725\"></a>\n\
<p class=\"table-body\">\n\
Set to NULL.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
<div class=\'section\'><a id=\"compiling-your-plug-in\"></a><h2 id=\"compiling-your-plug-in\">Compiling your plug-in</h2></div>\n\
<p>Once you have written your image file format plug-in, you need to compile it and create a shared object that can be loaded into Maya. We provide a Makefile and buildconfig in our Developer Kit for building the example using the gcc compiler. On Windows, a solution and project file is provided for building the image plug-in with Visual C++. You must first set MAYA_LOCATION before building the image plug-in example. The plug-in that is built must be copied to the $MAYA_LOCATION/bin/plug-ins/image directory before Maya has access to this new image format. Image plug-ins must be built with the compiler and linker flags we provide so that they can be loaded into Maya.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";