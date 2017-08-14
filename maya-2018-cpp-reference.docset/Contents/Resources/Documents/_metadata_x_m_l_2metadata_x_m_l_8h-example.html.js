var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MetadataXML/metadataXML.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_metadata_x_m_l_2metadata_x_m_l_8h-example.html\', tocPrefix);\n\
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
            <h1>MetadataXML/metadataXML.h</h1>\n\
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
<div class=\"title\">MetadataXML/metadataXML.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _metadataXML_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _metadataXML_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/globals.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/xmlreader.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/parser.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Contains shared information for the XML plug-ins</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">// XML tag strings. Not translated from English since they are keyworkds but</span></div>\n\
<div class=\"line\"><span class=\"comment\">// shared among more than one serialization class.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlFormatType               &quot;XML_DOM&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Structure format tags</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStructure             &quot;structure&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStructureName         &quot;name&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStructureMember       &quot;member&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStructureMemberDim    &quot;dim&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStructureMemberName   &quot;name&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStructureMemberType   &quot;type&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Stream format tags</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStream                &quot;stream&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamData            &quot;data&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamDataIndent      &quot;            &quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamDataIndex       &quot;index&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamDataValueIndent &quot;                &quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamHasDefault      &quot;hasDefault&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamIndent          &quot;        &quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamIndexType       &quot;indexType&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamMember          &quot;member&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamName            &quot;name&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagStreamStructure       &quot;structure&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Channel format tags</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagChannel               &quot;channel&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagChannelIndent         &quot;    &quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagChannelName           &quot;name&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Associations format tags</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define xmlTagAssociations          &quot;associations&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Handy utility macros for reporting errors by line number</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define REPORT_ERROR( ERROR )                                   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    {                                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MStatus status;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString msg = MStringResource::getString(ERROR, status);  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      if( errorCount &gt; 0 ) errors += &#39;\\n&#39;;                      \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += msg.asChar();                                   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += &#39;\\n&#39;;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errorCount++;                                             \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define REPORT_ERROR_AT_LINE( ERROR, LINE )                     \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    {                                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MStatus status;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString fmt = MStringResource::getString(ERROR, status);  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString lineNo;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      lineNo = LINE;                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString msg;                                              \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      msg.format( fmt, lineNo );                                \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      if( errorCount &gt; 0 ) errors += &#39;\\n&#39;;                      \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += msg.asChar();                                   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += &#39;\\n&#39;;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errorCount++;                                             \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define REPORT_ERROR_AT_LINE1( ERROR, MSG, LINE )               \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    {                                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MStatus status;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString fmt = MStringResource::getString(ERROR, status);  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString lineNo;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      lineNo = LINE;                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString msg;                                              \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      msg.format( fmt, MSG, lineNo );                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      if( errorCount &gt; 0 ) errors += &#39;\\n&#39;;                      \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += msg.asChar();                                   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += &#39;\\n&#39;;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errorCount++;                                             \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define REPORT_ERROR_AT_LINE2( ERROR, MSG1, MSG2, LINE )        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    {                                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MStatus status;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString fmt = MStringResource::getString(ERROR, status);  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString lineNo;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      lineNo = LINE;                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      MString msg;                                              \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      msg.format( fmt, MSG1, MSG2, lineNo );                    \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      if( errorCount &gt; 0 ) errors += &#39;\\n&#39;;                      \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += msg.asChar();                                   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errors += &#39;\\n&#39;;                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">      errorCount++;                                             \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespaceadsk.html\">adsk</a> {</div>\n\
<div class=\"line\">    <span class=\"keyword\">namespace </span>Data {</div>\n\
<div class=\"line\">        <span class=\"keyword\">namespace </span>XML {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>Util</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> xmlNode* findNamedNode( xmlNode* rootNode, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* childName );</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> xmlChar* findText     ( xmlDocPtr doc, xmlNode* node );</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        } <span class=\"comment\">// namespace XML</span></div>\n\
<div class=\"line\">    } <span class=\"comment\">// namespace Data</span></div>\n\
<div class=\"line\">} <span class=\"comment\">// namespace adsk</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2012 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// These coded instructions, statements, and computer programs contain</span></div>\n\
<div class=\"line\"><span class=\"comment\">// unpublished proprietary information written by Autodesk, Inc., and are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// protected by Federal copyright law. They may not be disclosed to third</span></div>\n\
<div class=\"line\"><span class=\"comment\">// parties or copied or duplicated in any form, in whole or in part, without</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the prior written consent of Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // _metadataXML_h_</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";