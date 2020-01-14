var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Finding and Identifying Samples</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Finding and Identifying Samples</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"finding-and-identifying-samples\"></a></div>\n\
<p>There are four types of samples included in the Maya devkit. All samples can be found under the <span class=\'code\'>devkit</span> directory in <span class=\'code\'>devkitBase</span>.</p>\n\
<ol>\n\
<li><p>C++ plug-ins. These compiled plug-ins are located in the <span class=\'code\'>plug-ins</span> directory.</p></li>\n\
<li><p>Python scripted plug-ins. These scripts are located in the <span class=\'code\'>scripted</span> directory under <span class=\'code\'>plug-ins</span>. Samples beginning in &quot;py&quot; use Maya Python API 2.0. All other samples use Maya Python API 1.0.</p></li>\n\
<li><p>C# plug-ins. These compiled plug-ins are located in the <span class=\'code\'>dotnet</span> folder.</p></li>\n\
<li><p>Standalone applications. These applications make API calls to access Maya in batch mode. Samples are located in the <span class=\'code\'>applications</span> directory. A sample standalone Python script is available under the <span class=\'code\'>scripted</span> subdirectory.</p></li>\n\
</ol>\n\
<blockquote>\n\
<p><strong>Important:</strong> Some samples require third-party libraries to compile or run. Most notably, any plug-in sample that begins with <span class=\'code\'>abc</span> cannot be built without additional libraries not included with Maya. Do not attempt to build these samples.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"sample-naming-conventions\"></a><h2 id=\"sample-naming-conventions\">Sample Naming Conventions</h2></div>\n\
<p>The following naming convention is used for the samples.</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
<colgroup>\n\
<col width=\"50%\" />\n\
<col width=\"50%\" />\n\
</colgroup>\n\
<tbody>\n\
<tr class=\"ruled-heading\">\n\
<th class=\"table-heading\">\n\
Suffix\n\
</th>\n\
<th class=\"table-heading\">\n\
Description\n\
</th>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC57\"></a>\n\
<p class=\"table-body\">\n\
Cmd\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC58\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new commands.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC59\"></a>\n\
<p class=\"table-body\">\n\
Tool\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC5A\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new interactive tools.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC5B\"></a>\n\
<p class=\"table-body\">\n\
Node\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC5C\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new node types.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC5D\"></a>\n\
<p class=\"table-body\">\n\
Translator\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC5E\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new file translators.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC5F\"></a>\n\
<p class=\"table-body\">\n\
Shader\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC60\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new shading nodes.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC61\"></a>\n\
<p class=\"table-body\">\n\
Manip\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC62\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new manipulators.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC63\"></a>\n\
<p class=\"table-body\">\n\
Field\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC64\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new dynamic fields.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC65\"></a>\n\
<p class=\"table-body\">\n\
Emitter\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC66\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new dynamic emitters.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC67\"></a>\n\
<p class=\"table-body\">\n\
Spring\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC68\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new dynamic springs.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-even-row\">\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC69\"></a>\n\
<p class=\"table-body\">\n\
Shape\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<a name=\"WS73099CC142F48755-3D114B7511841AEFA9FC6A\"></a>\n\
<p class=\"table-body\">\n\
Plug-ins that create new shapes.\n\
</p>\n\
</td>\n\
</tr>\n\
<tr class=\"ruled-odd-row\">\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Shader\n\
</p>\n\
</td>\n\
<td class=\"table-body\">\n\
<p class=\"table-body\">\n\
Plug-ins that create shader nodes.\n\
</p>\n\
</td>\n\
</tr>\n\
</tbody>\n\
</table>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";