var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Localization Process</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Localization Process</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"localization-process\"></a></div>\n\
<p>After the plug-in has been internationalized, string resources can be extracted and sent for translation. It is important to note that the process of localization can be deferred. The plug-in will continue to run with its default resource values if the localized versions are not available.</p>\n\
<p>Plug-in Localization involves the following steps:</p>\n\
<ol>\n\
<li>Resource Extraction: a master resource file containing all localizable strings from the plug-in is generated.</li>\n\
<li>Translation: a translated version of the strings is prepared.</li>\n\
<li>Installation: the translated resource file is installed into the correct language area on the plug-in resource path.</li>\n\
</ol>\n\
<div class=\'section\'><a id=\"resource-extraction\"></a><h2 id=\"resource-extraction\">Resource Extraction</h2></div>\n\
<p>The utility script <span class=\'code\'>pluginResourceUtil</span> is used to generate a master list of all registered resources for the plug-in.</p>\n\
<p>To run the utility, the name of the plug-in and the name of the output file to generate is specified. The plug-in must be loaded for the resource extraction process to take place; the utility will load the plug-in if it is not already loaded. The extraction process must also be done while Maya is running in the default (English) language. See the Maya documentation for how to override Maya&#39;s language setting.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">pluginResourceUtil(&quot;closestPointOnCurve&quot;, &quot;c:/extracted/closestPointOnCurve.pres.mel&quot;);\n\
\n\
</pre></div><p>The output from the resource extraction process is a file containing a list of commands to set the resources to new values. This master file is not used by the plug-in (the default resource values contained in this file are already available to the plug-in without it). The file is used as the master version of the strings that need to be translated. Only the translated versions of the file are provided with the plug-in.</p>\n\
<p>The complete output file <span class=\'code\'>closestPointOnCurve.pres.mel</span> is shown in <a href=\'#!/url=./dev_help/Technical-Notes/Internationalizing-plug-ins/Example-code.html\' title=\'\'>Examples</a>. A portion of the file is shown below:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// File closestPointOnCurve.pres.mel\n\
// Resources for Plug-in: closestPointOnCurve\n\
// \n\
// ----------------------------\n\
// Registered string resources:\n\
// ----------------------------\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kAETitle&quot;, &quot;Closest Point On Curve Attributes&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kInputCurve&quot;, &quot;Input Curve&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kInvalidType&quot;, &quot;Object ^1s has invalid type.  Only a curve or its transform can be specified.&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kNoQueryFlag&quot;, &quot;You must specify AT LEAST ONE queryable flag in query mode.  Use the `help` command to list all available flags.&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kNoValidObject&quot;, &quot;A curve or its transform node must be specified as a command argument, or using your current selection.&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kResults&quot;, &quot;Results&quot;);\n\
\n\
</pre></div><p>The generated file contains an entry for each string resource registered by the plug-in (both C++ and MEL resources). Additionally, if the plug-in has registered nodes, entries for the standardized node and attribute UI display string resources that are used by Maya will be automatically generated (there is no additional registration required for these resources other than correctly registering the node).</p>\n\
<div class=\'section\'><a id=\"translation\"></a><h2 id=\"translation\">Translation</h2></div>\n\
<p>The master resource file is translated into another language by editing the string values for each entry in the resource file.</p>\n\
<div class=\'section\'><a id=\"encoding-of-resource-files\"></a><h3 id=\"encoding-of-resource-files\">Encoding of Resource Files</h3></div>\n\
<p>Since the resource file is a MEL text file, its encoding must be appropriate for the locale and platform that it will run on. For example, Japanese translations on Windows platforms will expect CP932, while on Mac OS X they should be UTF-8. Conversion utilities such as iconv can be used for converting file formats if required.</p>\n\
<div class=\'section\'><a id=\"installation-of-localized-resources\"></a><h2 id=\"installation-of-localized-resources\">Installation of Localized Resources</h2></div>\n\
<p>The translated resource file must be installed in the correct language-dependent location, so that it will be loaded at runtime. The resource file will have the same name for each language it is translated to; the directory it is located in determines the language it is associated with. The resource file name is passed to <span class=\'code\'>loadPluginLanguageResources</span> in the string initialization script. In the example below, the resource file is named <span class=\'code\'>closestPointOnCurve.pres.mel</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Load any localized resources \n\
loadPluginLanguageResources(&quot;closestPointOnCurve&quot;, &quot;closestPointOnCurve.pres.mel&quot;);\n\
\n\
</pre></div><p>The <span class=\'code\'>loadPluginLanguageResources</span> routine will search for the resource file along the MAYA_PLUG_IN_RESOURCES_PATH.</p>\n\
<p>Typically, plug-ins are installed as modules and their files are installed within a standardized directory structure along the MAYA_MODULE_PATH. The MAYA_PLUG_IN_RESOURCES_PATH will be initialized to include language-specific resource directory entries for each module.</p>\n\
<p>A sample directory hierarchy for a plug-in module is shown below. The resources area contains subdirectories for each available localization. The Japanese resources would be installed into the <span class=\'code\'>resources/ja_JP</span> subdirectory. When Maya is running in Japanese, this directory will be added to the MAYA_PLUG_IN_RESOURCES_PATH.</p>\n\
<p><span class=\'code\'>loadPluginLanguageResources</span> does not generate an error at runtime if the resource file is not found. The plug-in simply continues to operate with the default resource values.</p>\n\
<p>The example below shows a sample module hierarchy and the location of Japanese resources for the <span class=\'code\'>closestPointOnCurve</span> plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">/SampleModule\n\
/SampleModule/data\n\
/SampleModule/docs\n\
/SampleModule/icons\n\
/SampleModule//modules\n\
/SampleModule/plug-ins\n\
/SampleModule/python\n\
/SampleModule/resources\n\
/SampleModule/resources/ja_JP\n\
/SampleModule/resources/ja_JP/closestPointOnCurve.pres.mel\n\
/SampleModule/scripts\n\
\n\
</pre></div><div class=\'section\'><a id=\"maintenance\"></a><h2 id=\"maintenance\">Maintenance</h2></div>\n\
<p>The resource file extraction, translation and installation steps need to be repeated if the plug-in string resources are modified, to keep the localized versions synchronized with the master versions.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";