var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Appendix E, Part 4</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Appendix E, Part 4</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"appendix-e-part-4\"></a></div>\n\
<p>< head:clc/devdocs/source/appendices/appendix-e-part-two.md=\"\" continues=\"\" from=\"\" [appendix=\"\" e:=\"\" adding=\"\" image=\"\" plug-ins](appendix-e-adding-image-plug-ins.html).=\"\" ##=\"\" library=\"\" functions=\"======\" continues=\"\" from=\"\" [appendix=\"\" e,=\"\" part=\"\" 3](appendix-e-part-3.html).=\"\">&gt;&gt;&gt;&gt;&gt;&gt; Splitting-large-files:clc/DevDocs/source/Appendices/Appendix-E-Part-4.md</p>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>imc_code\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F61A\"></a><p class=\"table-body\">A 16-bit number unique among all the capability entries defined in an <span class=\"code\" translate=\"no\">IMF_CAPABILITY_LIST</span>. This number is used by your <span class=\"code\" translate=\"no\">imageReadOpen</span> and/or <span class=\"code\" translate=\"no\">imageWriteOpen</span> code to determine the list entry that was selected by the user.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imc_name</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F61B\"></a><p class=\"table-body\">The character string displayed in the user interface for this list item.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imc_name_msg</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F61C\"></a><p class=\"table-body\">An internationalized version of <span class=\"code\" translate=\"no\">ice_name</span>.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>icl_default\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F62A\"></a><p class=\"table-body\">The <span class=\"code\" translate=\"no\">ice_code</span> of the default list entry.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">icl_n_entries</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F62B\"></a><p class=\"table-body\">The number of entries in the list.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">icl_entries</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F62C\"></a><p class=\"table-body\">The list of entries.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>icn_default\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F63D\"></a><p class=\"table-body\">The default value of this number capability.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">icn_minimum_dfnd</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F63E\"></a><p class=\"table-body\">Denotes whether a minimum value is defined. TRUE if so, FALSE if not.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">icn_minimum</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F63F\"></a><p class=\"table-body\">The minimum value, applicable only if <span class=\"code\" translate=\"no\">icn_minimum_dfnd</span> is set to TRUE.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">icn_maximum_dfnd</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F640\"></a><p class=\"table-body\">Denotes whether a maximum value is defined. TRUE if so, FALSE if not.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">icn_maximum</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F641\"></a><p class=\"table-body\">The maximum value, applicable only if <span class=\"code\" translate=\"no\">icn_maximum_dfnd</span> is set to TRUE.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">icn_increment</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F642\"></a><p class=\"table-body\">The increment used by the slider or thumbwheel.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>imcs_code\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F652\"></a><p class=\"table-body\">The <span class=\"code\" translate=\"no\">imc_code</span> of the setting.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imcs_number</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F653\"></a><p class=\"table-body\">Value if the capability is an <span class=\"code\" translate=\"no\">IMF_CAPABILITY_TYPE_NUMBER</span>.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imcs_list</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F654\"></a><p class=\"table-body\">Value if the capability is an <span class=\"code\" translate=\"no\">IMF_CAPABILITY_TYPE_LIST</span>. This is a zero-based index into the list.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>usage\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F676\"></a><p class=\"table-body\">A bit field describing the image type: <span class=\"code\" translate=\"no\">IMF_C_IMAGE_ANY</span> for any image type; <span class=\"code\" translate=\"no\">IMF_C_GENERIC</span> for a generic image (the default set by <span class=\"code\" translate=\"no\">imf__init_ifd</span>); and <span class=\"code\" translate=\"no\">IMF_C_INDEX_LUT</span> for a look-up table-based image.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">curve</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F677\"></a><p class=\"table-body\">Color correction information.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">aspect</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F678\"></a><p class=\"table-body\">Image aspect information.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">window</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F679\"></a><p class=\"table-body\">Image window boundaries, using zero-based numbers.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">active</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67A\"></a><p class=\"table-body\">Active window boundaries.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">chan_config</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67B\"></a><p class=\"table-body\">Channel planarity. This field affects how scanline data is passed to the scanline reading and writing functions. There are two options available:</p><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67C\"></a><ul><li>One of <span class=\"code\" translate=\"no\">IMF_C_PLANAR_CONTIGUOUS</span> for red, green, and blue in one large scanline buffer with values arranged in R, G, B, R, G, B, etc. order; or,</li><li><span class=\"code\" translate=\"no\">IMF_C_PLANAR_SEPARATE</span> for red, green, and blue in separate arrays (normally used).</li></ul></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">chan_orient</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F67F\"></a><p class=\"table-body\">Channel orientation: <span class=\"code\" translate=\"no\">IMF_C_ORIENT_BOT_LEFT</span> for bottom-to-top ordering; or <span class=\"code\" translate=\"no\">IMF_C_ORIENT_TOP_LEFT</span> for top-to-bottom ordering.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">chan_format</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F680\"></a><p class=\"table-body\">Color channel format.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">chan_count</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F681\"></a><p class=\"table-body\">The number of color channels.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">chan_type</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F682\"></a><p class=\"table-body\">Color channel storage type: <span class=\"code\" translate=\"no\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\" translate=\"no\">imf__init_ifd</span>); <span class=\"code\" translate=\"no\">IMF_C_FLOAT</span> for single-precision float values; <span class=\"code\" translate=\"no\">IMF_C_DOUBLE</span> for double-precision double values.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">chan_bits</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F683\"></a><p class=\"table-body\">Number of bits per color channel value.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">matte_format</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F684\"></a><p class=\"table-body\">Matte channel format.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">matte_count</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F685\"></a><p class=\"table-body\">The number of matte channels.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">matte_type</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F686\"></a><p class=\"table-body\">Matte channel storage type: <span class=\"code\" translate=\"no\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\" translate=\"no\">imf__init_ifd</span>); <span class=\"code\" translate=\"no\">IMF_C_FLOAT</span> for single-precision <span class=\"code\" translate=\"no\">float</span> values; <span class=\"code\" translate=\"no\">IMF_C_DOUBLE</span> for double-precision <span class=\"code\" translate=\"no\">double</span> values.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">matte_bits</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F687\"></a><p class=\"table-body\">Number of bits per matte channel value.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">aux_format</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F688\"></a><p class=\"table-body\">Auxiliary (z) channel format.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">aux_count</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F689\"></a><p class=\"table-body\">The number of (z) auxiliary channels.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">aux_type</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68A\"></a><p class=\"table-body\">Auxiliary (z) channel storage type: <span class=\"code\" translate=\"no\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\" translate=\"no\">imf__init_ifd</span>); <span class=\"code\" translate=\"no\">IMF_C_FLOAT</span> for single-precision float values; <span class=\"code\" translate=\"no\">IMF_C_DOUBLE</span> for double-precision double values.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">aux_bits</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68B\"></a><p class=\"table-body\">Number of bits per auxiliary (z) channel value.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">index_format</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68C\"></a><p class=\"table-body\">Color index format.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">index_count</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68D\"></a><p class=\"table-body\">The number of color-indexed image data channels.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">index_type</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68E\"></a><p class=\"table-body\">Color-indexed data channel storage type: <span class=\"code\" translate=\"no\">IMF_C_INTEGER</span> for positive integer values (the default value assigned by <span class=\"code\" translate=\"no\">imf__init_ifd</span>); <span class=\"code\" translate=\"no\">IMF_C_FLOAT</span> for single-precision <span class=\"code\" translate=\"no\">float</span> values; <span class=\"code\" translate=\"no\">IMF_C_DOUBLE</span> for double-precision <span class=\"code\" translate=\"no\">double</span> values.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">index_bits</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F68F\"></a><p class=\"table-body\">Number of bits per pixel for palette indexes.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>key\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6B9\"></a><p class=\"table-body\">The plug-in\'s unique identifier key.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">handle</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BA\"></a><p class=\"table-body\">Filename of the image.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">handle_complete</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BB\"></a><p class=\"table-body\">Denotes if <span class=\"code\" translate=\"no\">handle</span> is completely built. If <span class=\"code\" translate=\"no\">FALSE</span>, your plug-in should use <span class=\"code\" translate=\"no\">imf__build_handle</span> to build a complete filename path.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">name</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BC\"></a><p class=\"table-body\">The name of the image file.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">ext</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BD\"></a><p class=\"table-body\">The filename extension.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">desc</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BE\"></a><p class=\"table-body\">A description of the image file type.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">program</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6BF\"></a><p class=\"table-body\">The program that created the image.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">machine</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C0\"></a><p class=\"table-body\">The machine on which the image was created.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">user</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C1\"></a><p class=\"table-body\">The user who created the image.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">date</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C2\"></a><p class=\"table-body\">The creation date of the image.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">time</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C3\"></a><p class=\"table-body\">The time taken to create the file.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">filter</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C4\"></a><p class=\"table-body\">The filter function used by the image.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">compress</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C5\"></a><p class=\"table-body\">The compression function used by the image.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">settings</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C6\"></a><p class=\"table-body\">Capability settings set by the user.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">lut_exists</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C7\"></a><p class=\"table-body\"><span class=\"code\" translate=\"no\">TRUE</span> if a look-up table (LUT) is used for the image data in the scanline buffers; <span class=\"code\" translate=\"no\">FALSE</span> if the data is RGB.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">write_lut</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C8\"></a><p class=\"table-body\">Pointer to a LUT. Used only when writing palette-based image files.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">job_num</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6C9\"></a><p class=\"table-body\">Process job accounting information.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">frame</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CA\"></a><p class=\"table-body\">The frame number.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">field</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CB\"></a><p class=\"table-body\">Field rendering flag.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">init_flag</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CC\"></a><p class=\"table-body\">Denotes whether the caller has invoked <span class=\"code\" translate=\"no\">IMF_info_init</span>.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">red_pri</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CD\"></a><p class=\"table-body\">Red chroma.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">green_pri</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CE\"></a><p class=\"table-body\">Green chroma.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">blue_pri</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6CF\"></a><p class=\"table-body\">Blue chroma.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">white_pt</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D0\"></a><p class=\"table-body\">White chroma.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">count</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D1\"></a><p class=\"table-body\">The number of image sub headers pointed to by the image field.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">image</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D2\"></a><p class=\"table-body\">An array of image sub headers containing detailed image information.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">track_num_frames</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D3\"></a><p class=\"table-body\">The number of frames in the current track.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">track_frame_rate</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D4\"></a><p class=\"table-body\">The number of frames per second for the track.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">track_start_frame</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D5\"></a><p class=\"table-body\">The number of the first frame in the current track.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">num_audio_tracks</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D6\"></a><p class=\"table-body\">The number of audio tracks in the current file.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">num_video_tracks</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6D7\"></a><p class=\"table-body\">The number of video tracks in the current file.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>imu_lut\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E6\"></a><p class=\"table-body\">The look-up table entries.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imu_maximum</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E7\"></a><p class=\"table-body\">The maximum value that each LUT entry can contain.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">imu_n_entries</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E8\"></a><p class=\"table-body\">The number of LUT entries pointed to by <span class=\"code\" translate=\"no\">imu_lut</span>.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">imu_gamma</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6E9\"></a><p class=\"table-body\">The gamma value of the LUT entries.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>ile_red\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6F9\"></a><p class=\"table-body\">The red value of this entry.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">ile_green</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FA\"></a><p class=\"table-body\">The green value of this entry.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">ile_blue</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FB\"></a><p class=\"table-body\">The blue value of this entry.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">ile_mode</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FC\"></a><p class=\"table-body\"><span class=\"code\" translate=\"no\">IMF_LUT_MODE_FREE</span> if the entry is unused; <span class=\"code\" translate=\"no\">IMF_LUT_MODE_LOCKED</span> if the entry is locked but usable; <span class=\"code\" translate=\"no\">IMF_LUT_MODE_RESERVED</span> if the entry is reserved and unusable; or <span class=\"code\" translate=\"no\">IMF_LUT_MODE_USED</span> if the entry is in use and is modifiable.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">ile_transparent</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F6FD\"></a><p class=\"table-body\">Set to 0 if the entry is not transparent (i.e., opaque), and 1 if the entry is transparent.</p></td></tr></tbody></table>\n\
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
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col width=\"50%\"> <col width=\"50%\"> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Field</th><th class=\"table-heading\">Description</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><pre><code>data\n\
</code></pre></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F717\"></a><p class=\"table-body\">The private data associated with your image.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">info</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F718\"></a><p class=\"table-body\">Image file information.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\"><span class=\"code\" translate=\"no\">access</span></td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F719\"></a><p class=\"table-body\">Image access type.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">lut_read</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71A\"></a><p class=\"table-body\">Function that retrieves look-up table information from an image file.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">scan</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71B\"></a><p class=\"table-body\">Your scanline access function.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">close</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71C\"></a><p class=\"table-body\">Image close function.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">playback_bind</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71D\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">playback_goto</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71E\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">playback_play</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F71F\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">playback_params</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F720\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">playback_stop</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F721\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">get_frame</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F722\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">get_raster</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F723\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">get_region</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F724\"></a><p class=\"table-body\">Set to NULL.</p></td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">set_frame</td><td class=\"table-body\"><a name=\"WS73099CC142F48755-3D114B7511841AEFA9F725\"></a><p class=\"table-body\">Set to NULL.</p></td></tr></tbody></table>\n\
<div class=\'section\'><a id=\"compiling-your-plug-in\"></a><h2 id=\"compiling-your-plug-in\">Compiling your plug-in</h2></div>\n\
<p>Once you have written your image file format plug-in, you need to compile it and create a shared object that can be loaded into Maya. We provide a Makefile and buildconfig in our Developer Kit for building the example using the gcc compiler. On Windows, a solution and project file is provided for building the image plug-in with Visual C++. You must first set MAYA_LOCATION before building the image plug-in example. The plug-in that is built must be copied to the $MAYA_LOCATION/bin/plug-ins/image directory before Maya has access to this new image format. Image plug-ins must be built with the compiler and linker flags we provide so that they can be loaded into Maya.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";