var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MetadataSample/metadataPluginStrings.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_metadata_sample_2metadata_plugin_strings_8h-example.html\', tocPrefix);\n\
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
            <h1>MetadataSample/metadataPluginStrings.h</h1>\n\
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
<div class=\"title\">MetadataSample/metadataPluginStrings.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _metadataPluginStrings_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _metadataPluginStrings_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResourceId.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MStringResourceIds contain plug-in id, unique resource id for</span></div>\n\
<div class=\"line\"><span class=\"comment\">// each string and the default value for the string.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kPluginId  &quot;adskmetadata&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidComponentType   MStringResourceId   (kPluginId, &quot;kInvalidComponentType&quot;,    &quot;Component type ^1s not one of the legal values (&#39;edge&#39;, &#39;face&#39;, &#39;vertex&#39;, &#39;faceVertex&#39;)&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kFlagMandatory          MStringResourceId   (kPluginId, &quot;kFlagMandatory&quot;,           &quot;Missing mandatory flag ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kOnlyCreateModeMsg      MStringResourceId   (kPluginId, &quot;kOnlyCreateModeMsg&quot;,       &quot;^1s flag can only be used in create mode.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidFlag            MStringResourceId   (kPluginId, &quot;kInvalidFileFlag&quot;,         &quot;Value for flag ^1s is invalid.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kFileIgnored            MStringResourceId   (kPluginId, &quot;kFileIgnored&quot;,             &quot;The ^1s flag is overridden by the ^2s flag. It will be ignored.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kFileNotFound           MStringResourceId   (kPluginId, &quot;kFileNotFound&quot;,            &quot;File ^1s does not exist, import aborted.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kFileOrStringNeeded     MStringResourceId   (kPluginId, &quot;kFileOrStringNeeded&quot;,      &quot;If no file is specified the ^1s flag must have a value.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidStream          MStringResourceId   (kPluginId, &quot;kInvalidStream&quot;,           &quot;Stream name is not legal.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kInvalidString          MStringResourceId   (kPluginId, &quot;kInvalidString&quot;,           &quot;String is not legal.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kEditQueryFlagErrorMsg  MStringResourceId   (kPluginId, &quot;kEditQueryFlagErrorMsg&quot;,   &quot;Can&#39;t specify edit and query flags simultanously.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kObjectNotFoundError    MStringResourceId   (kPluginId, &quot;kObjectNotFoundError&quot;,     &quot;Object ^1s not found&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kTypeUnspecified        MStringResourceId   (kPluginId, &quot;kTypeUnspecified&quot;,         &quot;(unspecified)&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kMetadataFormatNotFound MStringResourceId   (kPluginId, &quot;kMetadataFormatNotFound&quot;,  &quot;Metadata format type &#39;^1s&#39; was not found&quot;)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kCreateMetadataCreateFailed         MStringResourceId   (kPluginId, &quot;kCreateMetadataCreateFailed&quot;,      &quot;Could not create new metadata.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kCreateMetadataHasStream            MStringResourceId   (kPluginId, &quot;kCreateMetadataHasStream&quot;,         &quot;A stream named &#39;^1s&#39; already exists - skipping creation.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kCreateMetadataStructureNotFound    MStringResourceId   (kPluginId, &quot;kCreateMetadataStructureNotFound&quot;, &quot;Could not find structure &#39;^1s&#39;.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kCreateMetadataNoStructureName      MStringResourceId   (kPluginId, &quot;kCreateMetadataNoStructureName&quot;,   &quot;The &#39;structureName&#39; flag is mandatory.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kCreateMetadataNoStreamName         MStringResourceId   (kPluginId, &quot;kCreateMetadataNoStreamName&quot;,      &quot;The &#39;streamName&#39; flag is mandatory.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kCreateMetadataNoChannelName        MStringResourceId   (kPluginId, &quot;kCreateMetadataNoChannelName&quot;,     &quot;The &#39;channelName&#39; flag is mandatory.&quot;)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kImportMetadataStringReadFailed     MStringResourceId   (kPluginId, &quot;kImportMetadataStringReadFailed&quot;,  &quot;Metadata read from string arg failed with &#39;^1s&#39;&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kImportMetadataFileReadFailed       MStringResourceId   (kPluginId, &quot;kImportMetadataFileReadFailed&quot;,    &quot;Metadata read from file &#39;^1s&#39; failed with &#39;^2s&#39;&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kImportMetadataSetMetadataFailed    MStringResourceId   (kPluginId, &quot;kImportMetadataSetMetadataFailed&quot;, &quot;Metadata could not be set on object &#39;^1s&#39;&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kImportMetadataUndoMissing          MStringResourceId   (kPluginId, &quot;kImportMetadataUndoMissing&quot;,       &quot;Undo information not present for importMetadata&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kImportMetadataResult               MStringResourceId   (kPluginId, &quot;kImportMetadataResult&quot;,            &quot;^1s/^2s/^3s&quot;)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kExportMetadataFailedFileWrite      MStringResourceId   (kPluginId, &quot;kExportMetadataFailedFileWrite&quot;,   &quot;Failed while exporting metadata to file&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kExportMetadataFailedStringWrite    MStringResourceId   (kPluginId, &quot;kExportMetadataFailedStringWrite&quot;, &quot;Failed while exporting metadata to string&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kExportMetadataFormatType           MStringResourceId   (kPluginId, &quot;kExportMetadataFormatType&quot;,        &quot;Format type for ^1s : ^2s&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kExportMetadataUndoMissing          MStringResourceId   (kPluginId, &quot;kExportMetadataUndoMissing&quot;,       &quot;Undo information not present for exportMetadata&quot;)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2012 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// These coded instructions, statements, and computer programs contain</span></div>\n\
<div class=\"line\"><span class=\"comment\">// unpublished proprietary information written by Autodesk, Inc., and are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// protected by Federal copyright law. They may not be disclosed to third</span></div>\n\
<div class=\"line\"><span class=\"comment\">// parties or copied or duplicated in any form, in whole or in part, without</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the prior written consent of Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // _metadataPluginStrings_h_</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";