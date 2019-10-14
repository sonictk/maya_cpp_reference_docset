var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MetadataXML/channelSerializerXML.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_metadata_x_m_l_2channel_serializer_x_m_l_8cpp-example.html\', tocPrefix);\n\
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
            <h1>MetadataXML/channelSerializerXML.cpp</h1>\n\
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
<div class=\"title\">MetadataXML/channelSerializerXML.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;channelSerializerXML.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;streamSerializerXML.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataXML.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataXMLPluginStrings.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sstream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdlib.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataChannel.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataChannelSerializer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataStreamSerializer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;assert.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/globals.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/xmlreader.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/parser.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespaceadsk.html\">adsk</a>;</div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_data.html\">adsk::Data</a>;</div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span>adsk::Data::XML;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ImplementSerializerFormat(ChannelSerializerXML,<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel_serializer.html\">ChannelSerializer</a>,xmlFormatType);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\">ChannelSerializerXML::ChannelSerializerXML()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\">ChannelSerializerXML::~ChannelSerializerXML ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This is not normally called directly as a Channel cannot float freely</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  without an Associations parent defining how it is attached to an object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  The Associations parser will call the parseDOM() method below to parse</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  a partial tree.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">adsk::Data::Channel</a>*</div>\n\
<div class=\"line\">ChannelSerializerXML::read(</div>\n\
<div class=\"line\">    std::istream&amp;   cSrc,</div>\n\
<div class=\"line\">    std::string&amp;    errors )<span class=\"keyword\">    const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> errorCount = 0;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">adsk::Data::Channel</a>* newChannel = NULL;</div>\n\
<div class=\"line\">    errors = <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The boilerplate part of this code was taken from the libxml website</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// examples. (http://www.xmlsoft.org/examples)</span></div>\n\
<div class=\"line\">    xmlDocPtr doc = NULL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// this initialize the library and check potential ABI mismatches</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// between the version it was compiled for and the actual shared</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// library used.</span></div>\n\
<div class=\"line\">    LIBXML_TEST_VERSION</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Since these files can never be too big it&#39;s okay to slurp the entire</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// thing into memory and process it as a string.</span></div>\n\
<div class=\"line\">    cSrc.seekg (0, std::ios::end);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> size = (int) cSrc.tellg();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span>* memblock = <span class=\"keyword\">new</span> <span class=\"keywordtype\">char</span> [size];</div>\n\
<div class=\"line\">    cSrc.seekg (0, std::ios::beg);</div>\n\
<div class=\"line\">    cSrc.read (memblock, size);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    doc = xmlReadMemory(memblock, size, NULL, NULL, 0);</div>\n\
<div class=\"line\">    xmlNode* rootEl = xmlDocGetRootElement(doc);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Walk the DOM and create the Channel from it</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (xmlNode* curNode = rootEl; curNode; curNode = curNode-&gt;next)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! curNode ) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Skip anything unrecognized, for maximum flexibility</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (curNode-&gt;type != XML_ELEMENT_NODE)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( newChannel )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Error to have more than one channel</span></div>\n\
<div class=\"line\">            REPORT_ERROR_AT_LINE(kChannelXMLTooManyChannels, curNode-&gt;line);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        newChannel = parseDOM( doc, *curNode, errorCount, errors );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span>[] memblock;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Free the document</span></div>\n\
<div class=\"line\">    xmlFreeDoc(doc);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If there were errors any Stream created will be incorrect so pass</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// back nothing rather than bad data.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( errorCount &gt; 0 )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> newChannel;</div>\n\
<div class=\"line\">        newChannel = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> newChannel;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">adsk::Data::Channel</a>*</div>\n\
<div class=\"line\">ChannelSerializerXML::parseDOM(</div>\n\
<div class=\"line\">    xmlDocPtr       doc,</div>\n\
<div class=\"line\">    xmlNode&amp;        channelNode,</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>&amp;   errorCount,</div>\n\
<div class=\"line\">    std::string&amp;    errors )<span class=\"keyword\">    const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the Stream serializer to handle the sub-section of the DOM.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If it can&#39;t be found then no data can be created.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> StreamSerializerXML* xmlStreamSerializer = <span class=\"keyword\">dynamic_cast&lt;</span><span class=\"keyword\">const </span>StreamSerializerXML*<span class=\"keyword\">&gt;</span>( adsk::Data::StreamSerializer::formatByName( xmlFormatType ) );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( ! xmlStreamSerializer )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        REPORT_ERROR_AT_LINE(kChannelXMLStreamSerializerMissing, channelNode.line);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Find the Channel name tag</span></div>\n\
<div class=\"line\">    xmlNode* nameNode = Util::findNamedNode( channelNode.children, xmlTagChannelName );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* channelName = nameNode ? (<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*) Util::findText( doc, nameNode ) : NULL;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( ! channelName )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Error to have no channel name</span></div>\n\
<div class=\"line\">        REPORT_ERROR_AT_LINE(kChannelXMLNameMissing, channelNode.line);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">adsk::Data::Channel</a> newChannel( channelName );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pass on parsing of all of its &lt;stream&gt; children to the Stream parser.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( 0 != strcmp( (<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*)channelNode.name, xmlTagChannel ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The &lt;stream&gt; tags are the children of the &lt;channel&gt; tag</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( xmlNode* streamNode=channelNode.children; streamNode; streamNode=streamNode-&gt;next )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Ignore anything that&#39;s not a &lt;stream&gt; tag since it&#39;s the only</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// relevant one.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( (streamNode-&gt;type != XML_ELEMENT_NODE)</div>\n\
<div class=\"line\">        ||  (0 != strcmp((<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*)streamNode-&gt;name, xmlTagStream) ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">adsk::Data::Stream</a>* newStream =</div>\n\
<div class=\"line\">            xmlStreamSerializer-&gt;parseDOM( doc, *streamNode, errorCount, errors );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( errorCount &gt; 0 )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> newStream;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span>( newStream )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            newChannel.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#ac1958fa74233bea4def2cb501e79baf1\">setDataStream</a>( *newStream );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If there were errors any Stream created will be incorrect so pass</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// back nothing rather than bad data.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( errorCount &gt; 0 )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">adsk::Data::Channel</a>( newChannel );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span></div>\n\
<div class=\"line\">ChannelSerializerXML::write(</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">adsk::Data::Channel</a>&amp;  dataToWrite,</div>\n\
<div class=\"line\">    std::ostream&amp;               cDst,</div>\n\
<div class=\"line\">    std::string&amp;                errors )<span class=\"keyword\">    const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> errorCount = 0;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the Stream serializer to handle the sub-section of the DOM.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If it can&#39;t be found then no data can be created.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> StreamSerializerXML* xmlStreamSerializer = <span class=\"keyword\">dynamic_cast&lt;</span><span class=\"keyword\">const </span>StreamSerializerXML*<span class=\"keyword\">&gt;</span>( adsk::Data::StreamSerializer::formatByName( xmlFormatType ) );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( ! xmlStreamSerializer )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        REPORT_ERROR_AT_LINE(kChannelXMLStreamSerializerMissing, 0.0);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The XML header is not written out since the Channel XML is a subsection</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// of the metadata XML</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//cDst &lt;&lt; &quot;&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;&quot;  &lt;&lt; std::endl;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Start with the main Channel tag</span></div>\n\
<div class=\"line\">    cDst &lt;&lt; xmlTagChannelIndent &lt;&lt; <span class=\"stringliteral\">&quot;&lt;&quot;</span> &lt;&lt; xmlTagChannel &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the Channel name tag</span></div>\n\
<div class=\"line\">    cDst &lt;&lt; xmlTagStreamIndent &lt;&lt; <span class=\"stringliteral\">&quot;&lt;&quot;</span> &lt;&lt; xmlTagChannelName &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span></div>\n\
<div class=\"line\">         &lt;&lt; dataToWrite.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#af8370604529de0f829b8424e1288a104\">name</a>() &lt;&lt; <span class=\"stringliteral\">&quot;&lt;/&quot;</span> &lt;&lt; xmlTagChannelName &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Write out the Stream data</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> s=0; s&lt;dataToWrite.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#a11affd2a422744763272e4efff4099aa\">dataStreamCount</a>(); ++s )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">adsk::Data::Stream</a>* theStream = dataToWrite.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#a77cda1334521e31c93dee2153900d451\">dataStream</a>( s );</div>\n\
<div class=\"line\">        <span class=\"comment\">// Don&#39;t bother writing out empty Streams</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! theStream ) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        errorCount += xmlStreamSerializer-&gt;write( *theStream, cDst, errors );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    cDst &lt;&lt; xmlTagChannelIndent &lt;&lt; <span class=\"stringliteral\">&quot;&lt;/&quot;</span> &lt;&lt; xmlTagChannel &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> errorCount;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This actually describes the entire XML metadata format, only a subset</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  of which is the Channel data.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span></div>\n\
<div class=\"line\">ChannelSerializerXML::getFormatDescription(</div>\n\
<div class=\"line\">    std::ostream&amp;   info )<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> description = <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kAssociationsXMLInfo, status);</div>\n\
<div class=\"line\">    info &lt;&lt; description.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// This computer source code  and related  instructions and comments are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the unpublished confidential and proprietary information of Autodesk,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Inc. and are  protected  under applicable  copyright and trade secret</span></div>\n\
<div class=\"line\"><span class=\"comment\">// law. They may not  be disclosed to, copied or used by any third party</span></div>\n\
<div class=\"line\"><span class=\"comment\">// without the prior written consent of Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";