var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Meta Data</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Meta Data</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"meta-data\"></a></div>\n\
<p>The <strong>meta data</strong> classes of the C++ API are ported to the .NET API just like all other Maya API classes. In addition, several enhancements have been made to take advantage of the power of .NET.</p>\n\
<p>Metadata is a very important part of the Maya API, and enables clients to describe their custom data (its structure, the types, how to access the data per element, and so forth). .NET features can make the process much simpler and more powerful than it is in C++.</p>\n\
<div class=\'section\'><a id=\"net-examples\"></a><h2 id=\"net-examples\">.NET Examples</h2></div>\n\
<p>Several interesting examples that demonstrate the .NET enhancements described on this page are included with the examples that are shipped with Maya (see <a href=\'#!/url=./developer/Maya-NET-API/Compiling-examples.html\' title=\'\'>Compiling examples</a>). Open the <span class=\'code\'>examples.sln</span> solution (in the <span class=\'code\'>devkit\\dotnet\\examples</span> folder of your Developer Kit installation; see <a href=\'#!/url=./developer/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Setting up your build environment: Windows environment (64-bit)</a>) using Microsoft Visual Studio, and you can find these examples in the <span class=\'code\'>MetaData</span> folder. The following are some interesting examples:</p>\n\
<ul>\n\
<li><p><span class=\'code\'>CreateMetadataFromTypeCmd.cs</span> (tested with <span class=\'code\'>CreateMetadataXMLCmd.mel</span>)</p>\n\
<p>This example shows how you can use the new <span class=\'code\'>StructureClass</span> assembly attribute and the special class <span class=\'code\'>StreamForType&lt;T&gt;</span> for a .NET type (that is, MyStructureClass in the example).</p>\n\
<p>This eliminates the need for the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Structure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_structure.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Structure</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> classes since everything is done automatically by the generic class <span class=\'code\'>StreamForType&lt;T&gt;</span>.</p>\n\
<p>The example also shows how to use LINQ to perform queries on any of the collections (that is, querying elements of a stream in the example)</p></li>\n\
<li><p><span class=\'code\'>WriteMetadataToConsoleCmd.cs</span> (tested with every MEL script in the <span class=\'code\'>MetaData</span> folder)</p>\n\
<p>This example shows how simple enumerating channels, streams, structure members and stream handles can be when using the <span class=\'code\'>foreach</span> syntax, thanks to the support of the .NET interface <span class=\'code\'>IEnumerable</span> in the Associations, Channel, Stream and Structure classes.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"summary\"></a><h2 id=\"summary\">Summary</h2></div>\n\
<p>The following is a list of the main classes of the metadata API, and a quick summary of each along with a list of C++ methods that have been ported to .NET:</p>\n\
<div class=\'section\'><a id=\"associations\"></a><h3 id=\"associations\">Associations</h3></div>\n\
<p>This is an entry point to access the meta data from a Maya object (for example, by getting the <span class=\'code\'>MFnDependencyNode.metadata</span> property).</p>\n\
<p>It’s basically a simple container of channels.</p>\n\
<p>A few interesting methods ported from C++ are:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Channel\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_channel.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Channel</a> findChannel(string)</span> searches for a channel given its name</li>\n\
<li><span class=\'code\'>void setChannel(<a href=\"javascript:void(0)\" data-symbol=\"Channel\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_channel.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Channel</a>)</span> adds a channel, or replaces an existing channel that has the same name</li>\n\
<li><span class=\'code\'>bool removeChannel(string)</span> removes a channel given its name</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"AssociationsIterator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">AssociationsIterator</a> begin()</span> returns a C++/STL-style iterator to iterate over the channels</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"channel\"></a><h3 id=\"channel\">Channel</h3></div>\n\
<p>This is a collection of streams that are grouped together, either because they share the same topology (the same stream indices) or because the user decides they should logically be in the same group (for example, all the streams for a simulation effect would be in the same channel and given a channel name that is the name of the effect).</p>\n\
<p>A channel can be named, but some names are reserved (for example, <span class=\'code\'>vertex</span> is reserved to indicate that its streams have one element per vertex).</p>\n\
<p>A few interesting methods ported from C++ are:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a> findDataStream(string)</span> looks for a stream given its name</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a> setDataStream(<a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a>)</span> adds a stream</li>\n\
<li><span class=\'code\'>void removeDataStream(string)</span> removes a stream given its name</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"ChannelIterator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_channel_iterator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">ChannelIterator</a> begin()</span> returns a C++/STL-style iterator to iterate over the streams</li>\n\
<li><span class=\'code\'>bool removeElement(<a href=\"javascript:void(0)\" data-symbol=\"Index\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_index.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Index</a> elementIndex)</span> removes the specified element from every stream found in the channel</li>\n\
<li><span class=\'code\'>bool addElement(<a href=\"javascript:void(0)\" data-symbol=\"Index\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_index.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Index</a> elementIndex)</span> adds the specified element to every stream found in the channel</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"stream\"></a><h3 id=\"stream\">Stream</h3></div>\n\
<p>This is a container of data on the object (for example, on a mesh, in the channel <span class=\'code\'>vertex</span>, you have as many data elements as you have vertices in the stream).</p>\n\
<p>A few interesting methods ported from C++ are:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a>(<a href=\"javascript:void(0)\" data-symbol=\"Structure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_structure.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Structure</a>, string)</span> creates a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a></span> object using the specified structure and given the specified name</li>\n\
<li><span class=\'code\'>bool setElement(<a href=\"javascript:void(0)\" data-symbol=\"Index\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_index.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Index</a>, <a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a>)</span> replaces the data at a given index with that of another</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a> element(<a href=\"javascript:void(0)\" data-symbol=\"Index\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_index.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Index</a>)</span> obtains a handle of the data at a given index</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"StreamIterator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream_iterator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">StreamIterator</a> begin()</span> returns a C++/STL-style iterator to iterate over the handles</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"structure\"></a><h3 id=\"structure\">Structure</h3></div>\n\
<p>This class describes the meta data found at each element of the stream.</p>\n\
<p>Its method <span class=\'code\'>AddMember</span> is used to define each field of the meta data.</p>\n\
<p>For instance, if you want one float and one boolean to be stored at every element, first create a structure and call <span class=\'code\'>AddMember(kFloat,1,”MyFloatField”)</span> and <span class=\'code\'>AddMember(kBoolean,1,”MyBooleanField”)</span>.</p>\n\
<p>A few interesting methods ported from C++ are:</p>\n\
<ul>\n\
<li><span class=\'code\'>bool addMember( Member.eDataType, uint arraySize, string memberName )</span> adds a member with the specified type, size (typically 1), and name to the structure</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"StructureIterator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_structure_iterator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">StructureIterator</a> begin()</span> returns a C++/STL-style iterator to iterate over the members</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"handle\"></a><h3 id=\"handle\">Handle</h3></div>\n\
<p>This class allows you to access the data for a specified element of the stream.</p>\n\
<p>With a handle, you can get or set the data of the stream element.</p>\n\
<p>A few interesting methods ported from C++ are:</p>\n\
<ul>\n\
<li><span class=\'code\'>bool setPositionByMemberIndex(uint)</span> indicates the member of the structure that this handle is associated with</li>\n\
<li><span class=\'code\'>int[] asInt32Array</span> gets or sets the integer data as an array of integers (even if there is only one integer)</li>\n\
<li><span class=\'code\'>float[] asFloatArray</span> gets or sets the float data as an array of floats (even if there is only one float)</li>\n\
<li>... and so forth</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"taking-advantage-of-.net\"></a><h2 id=\"taking-advantage-of-.net\">Taking advantage of .NET</h2></div>\n\
<p>.NET provides several enhancements to the metadata API. Here are the main classes of the API with the .NET enhancements:</p>\n\
<div class=\'section\'><a id=\"associations-1\"></a><h3 id=\"associations-1\">Associations</h3></div>\n\
<p>Because it acts as a dictionary of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Channel\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_channel.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Channel</a></span> objects, the class supports the .NET interface <span class=\'code\'>IDictionary&lt;<a href=\"javascript:void(0)\" data-symbol=\"Channel\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_channel.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Channel</a>&gt;</span>.</p>\n\
<p>This interface enables you to use the following standard methods/properties that are expected from a dictionary in .NET:</p>\n\
<ul>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">Channel channel;\n\
if( myAssociations.TryGetValue( “vertex”, out channel ) { ... }\n\
</pre></div><p>This method allows you to look for a channel given its name and tests for its existence at the same time.</p></li>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">Channel channel =  myAssociations[“vertex”];\n\
</pre></div><p>This indexer also looks for a channel given its name, but in this case, the channel is expected to be found (throws <span class=\'code\'>KeyNotFoundException</span> otherwise).</p></li>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">if(myAssociations.ContainsKey( “vertex” ) { ... }\n\
</pre></div><p>This simply tests if a channel with the specified name exists. The channel is not returned.</p></li>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">myAssociations.Add( “vertex”, myChannel );\n\
</pre></div><p>This adds the channel, or throws <span class=\'code\'>ArgumentException</span> if a channel with the same name already exists.</p></li>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">foreach( Channel chnl in myAssociations )  { ... }\n\
</pre></div><p>This lets you enumerate all the channels using this very simple syntax instead of the complicated C++/STL syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for( AssociationsIterator iter = myAssociations.begin(); iter.notEqual( myAssociations.end() ); iter.next() ) { \n\
    Channel chnl = iter.__deref__();\n\
    ... \n\
}</pre></div></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"channel-1\"></a><h3 id=\"channel-1\">Channel</h3></div>\n\
<p>Because it acts as a dictionary of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a></span> objects, the class supports the .NET interface <span class=\'code\'>IDictionary&lt;<a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a>&gt;</span>.</p>\n\
<p>This interface enables you to use the following standard methods/properties that are expected from a dictionary in .NET:</p>\n\
<ul>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">Stream stream; \n\
if( myChannel.TryGetValue( “myStream”, out stream ) { ... }\n\
This method allows you to look for a stream given its name and tests for its existence at the same time.</pre></div></li>\n\
<li>Stream stream =  myChannel[“myStream”]; \n\
This indexer also looks for a stream given its name, but in this case, the stream is expected to be found (throws <span class=\'code\'>KeyNotFoundException</span> otherwise).</li>\n\
<li>if( myChannel.ContainsKey( “myStream” ) { ... }\n\
This simply tests if a stream with the specified name exists. The stream is not returned.</li>\n\
<li>myChannel.Add( “myStream”, myStream );\n\
This adds the stream or throws <span class=\'code\'>ArgumentException</span> if a stream with the same name already exists.</li>\n\
<li>foreach( Stream stream in myChannel )  { ... }\n\
<p>This lets you enumerate all the streams using this very simple syntax instead of the complicated C++/STL syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for( ChannelIterator iter = myChannel.begin(); iter.notEqual( myChannel.end() ); iter.next() ) { \n\
    Stream stream = iter.__deref__();\n\
    ... \n\
}</pre></div></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"stream-1\"></a><h3 id=\"stream-1\">Stream</h3></div>\n\
<p>Because it acts as a dictionary of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> objects, the class supports the .NET interface <span class=\'code\'>IDictionary&lt;<a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a>&gt;</span>.</p>\n\
<p>This enables you to use the following standard methods/properties that are expected from a dictionary in .NET:</p>\n\
<ul>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">Handle handle; \n\
if( myStream.TryGetValue( 18, out handle ) { ... }\n\
This method allows you to look for a handle given its index and tests for its existence at the same time.</pre></div></li>\n\
<li>Handle handle = myStream[18]; \n\
This indexer also looks for a handle given its index, but in this case, the handle is expected to be found (throws <span class=\'code\'>KeyNotFoundException</span> otherwise).</li>\n\
<li>if( myStream.ContainsKey(18) { ... }\n\
This simply tests if a handle with the specified index exists. The handle is not returned.</li>\n\
<li>myStream.Add( 18, myHandle );\n\
This adds the handle or throws <span class=\'code\'>ArgumentException</span> if a handle with the same index already exists.</li>\n\
<li>foreach( Handle handle in myStream )  { ... }\n\
<p>This lets you enumerate all the handles using this very simple syntax instead of the complicated C++/STL syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for( StreamIterator iter = myStream.begin(); iter.notEqual( myStream.end() ); iter.next() ) { \n\
    Handle handle = iter.__deref__();\n\
    ... \n\
}</pre></div></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"structure-1\"></a><h3 id=\"structure-1\">Structure</h3></div>\n\
<p><span class=\'code\'>IEnumerable&lt;Member&gt;</span> was added in order to enable this syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">foreach( Member member in myStructure )  { ... }\n\
</pre></div><p>This lets you enumerate all the members using this very simple syntax instead of the complicated C++/STL syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for( StructureIterator iter = myStream.begin(); iter.notEqual( myStream.end() ); iter.next() ) { \n\
    Member member = iter.__deref__();\n\
    ... \n\
}\n\
</pre></div><div class=\'section\'><a id=\"handle-1\"></a><h3 id=\"handle-1\">Handle</h3></div>\n\
<p>The C++ API uses a single method using pointers (for example, <span class=\'code\'>int *asInt32()</span>) to let you access the data for a given type. You can use it as a pointer to a single integer (for example, <span class=\'code\'>myInteger = *asInt32()</span>) or an array of integer values (for example, <span class=\'code\'>asInt32()[6]</span>) if you had specified a size of greater than 1 when you created the corresponding member in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Structure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_structure.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Structure</a></span> object.</p>\n\
<p>For .NET, using pointers in the API was not feasible so two properties are provided per type:</p>\n\
<ul>\n\
<li><span class=\'code\'>int[] asInt32Array</span> to get or set the integer data as an array of integers</li>\n\
<li><span class=\'code\'>int asInt32</span> to get or set the single integer (will throw an <span class=\'code\'>ApplicationException</span> if the size found in the corresponding structure member is greater than 1)</li>\n\
<li><span class=\'code\'>float[] asFloatArray</span> to get or set the float data as an array of floats</li>\n\
<li><span class=\'code\'>float asFloat</span> to get or set the single float (will throw an <span class=\'code\'>ApplicationException</span> if the size found in the corresponding structure member is greater than 1)</li>\n\
<li>... and so forth</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"matching-a-client-.net-type-the-ultimate-technique-to-simplify-data-description-and-access\"></a><h2 id=\"matching-a-client-.net-type-the-ultimate-technique-to-simplify-data-description-and-access\">Matching a client .NET type: the ultimate technique to simplify data description and access</h2></div>\n\
<p>Using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Structure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_structure.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Structure</a></span> class to describe the data of an element and then the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> class to access the data is quite low-level and C++ like, for example:</p>\n\
<ul>\n\
<li><span class=\'code\'>Structure.AddMember( kInt32, 1, “myIntMember”)</span> to add an int member,</li>\n\
<li><span class=\'code\'>Handle.setPositionByMemberIndex(uint)</span> to specify the member of the handle that you want to access</li>\n\
<li><span class=\'code\'>Handle.asInt</span> to get or set the integer data of the member</li>\n\
<li>... and so forth</li>\n\
</ul>\n\
<p>.NET simplifies the whole process, as long as you have a class or structure that describes the data where each member of your type is a member in the expected <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Structure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_structure.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Structure</a></span> object.</p>\n\
<div class=\'section\'><a id=\"the-new-structureclass-assembly-attribute\"></a><h3 id=\"the-new-structureclass-assembly-attribute\">The new StructureClass assembly attribute</h3></div>\n\
<p>In your plug-in, if you use the new <span class=\'code\'>StructureClass</span> assembly attribute and provide your type that describes the structure of your metadata, .NET can automatically create the <strong>Structure</strong> object for you:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">[assembly: StructureClass(typeof(MyNameSpace.MyStructureClass))]\n\
\n\
namespace MyNameSpace\n\
{\n\
   public class MyStructureClass\n\
   {\n\
      public int a;\n\
      public int b { get; set; }\n\
      public float[] c = new float[3];\n\
   }\n\
}\n\
</pre></div><p>Thanks to introspection, .NET can find all the public fields and properties in your class (or struct) and automatically create a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Structure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_structure.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Structure</a></span> object that is registered using <span class=\'code\'>Structure.registerStructure</span>.</p>\n\
<p>The name of the Structure is the full name of your type (for example, <span class=\'code\'>MyNameSpace.MyStructureClass</span>). The name of each Structure member is the name of the corresponding member in your type.</p>\n\
<div class=\'section\'><a id=\"converting-from-a-handle-to-a-.net-object-or-vice-versa\"></a><h3 id=\"converting-from-a-handle-to-a-.net-object-or-vice-versa\">Converting from a Handle to a .NET object or vice-versa</h3></div>\n\
<p>If you use the new <strong>StructureClass</strong> assembly attribute (see previous section) with the type of a .NET object, you can use the new following methods of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> class:</p>\n\
<ul>\n\
<li><div class=\"codeBlock\"><pre class=\"prettyprint\">public void SetFromDotNetObject( Object dotNetObj, Structure structure );\n\
</pre></div><p>This does a member wise copy from your .NET object to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> object.</p>\n\
<p>This is the equivalent of the following pseudo-code:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for each public member in the type of dotNetObj \n\
    find corresponding member in Structure object\n\
    call this.setPositionByMemberIndex( index of member found ) \n\
    if type is int32\n\
        this.asInt = get value of member in dotNetObj\n\
    else if type is float\n\
        this.asFloat = get value of member in dotNetObj\n\
    …\n\
next</pre></div></li>\n\
<li>public void CopyToDotNetObject(Object dotNetObj, Structure structure);\n\
<p>This does a member wise copy from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> object to your .NET object.</p>\n\
<p>This is the equivalent of the following pseudo-code:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for each public member in the type of dotNetObj \n\
    find corresponding member in Structure object\n\
    call this.setPositionByMemberIndex( index of member found ) \n\
    if type is int32\n\
        dotNetObj.SetValue( this.asInt )\n\
    else if type is float\n\
        dotNetObj.SetValue( this.asFloat )\n\
    …\n\
next\n\
</pre></div></li>\n\
</ul>\n\
<p>These methods become unnecessary, however, when you use the new generic class <span class=\'code\'>StreamForType&lt;T&gt;</span> explained in the next section.</p>\n\
<div class=\'section\'><a id=\"streamfortype-special-version-of-the-stream-class-tailored-to-your-.net-type\"></a><h3 id=\"streamfortype-special-version-of-the-stream-class-tailored-to-your-.net-type\">StreamForType<t>: special version of the Stream class tailored to your .NET type</t></h3></div>\n\
<p>While Stream is the class to use when you can’t provide a .NET type that describes your Structure, the class <span class=\'code\'>StreamForType&lt;T&gt;</span> should be used when you have provided your type with the new StructureClass assembly attribute.</p>\n\
<p>Use the same type for the T parameter of this generic class and you are given a Stream-like class that is completely tailored for your type.</p>\n\
<p>This generic class is a wrapper to a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a></span> object so you can create it in two ways. The following are the two constructors:</p>\n\
<ul>\n\
<li><p><span class=\'code\'>StreamForType&lt;T&gt;(string streamName)</span></p>\n\
<p>This constructor looks for an existing Structure called with the full name of your type T (it should find it if you used the StructureClass assembly attribute). It then creates a new <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a></span> object using the specified name and the structure found and wraps this new <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a></span> object.</p></li>\n\
<li><p><span class=\'code\'>StreamForType&lt;T&gt;(<a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a> baseStream)</span></p>\n\
<p>This constructor wraps the specified stream but also ensures that the structure of this base stream is compatible with your type (it should be if you used the StructureClass assembly attribute).</p></li>\n\
</ul>\n\
<p>While the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Stream\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_stream.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Stream</a></span> class can be seen as a dictionary of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> objects, the <span class=\'code\'>StreamForType&lt;T&gt;</span> generic class can be seen as a dictionary of T objects where T is your .NET class (or struct). This is done with the <span class=\'code\'>IDictionary&lt;T&gt;</span> supported by the generic class.</p>\n\
<p>The following are a few interesting methods:</p>\n\
<ul>\n\
<li><p><span class=\'code\'>bool TryGetValue(<a href=\"javascript:void(0)\" data-symbol=\"Index\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_index.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Index</a>, out T value)</span></p>\n\
<p>Finds the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"Handle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Handle</a></span> object with the specified index, then calls <span class=\'code\'>handle.CopyToDotNetObject()</span> on a new instance of T. It returns the new instance; or, if the handle is not found, it returns false.</p></li>\n\
<li><p><span class=\'code\'>void Add(<a href=\"javascript:void(0)\" data-symbol=\"Index\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_index.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Index</a>, T value)</span></p>\n\
<p>Creates a new handle at the specified index, then calls <span class=\'code\'>handle.SetFromDotNetObject()</span> using the specified T value.</p></li>\n\
<li><p><span class=\'code\'>T this[<a href=\"javascript:void(0)\" data-symbol=\"Index\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/classadsk_1_1_data_1_1_index.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">Index</a> key]</span></p>\n\
<p>This enables the following syntax (<span class=\'code\'>MyStructureClass</span> is the .NET type used for the T parameter):</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MyStructureClass myDotNetObj ;\n\
myDotNetObj.myInt = 3;\n\
myStream[18] = myDotNetObj;\n\
</pre></div><p>The example above adds the .NET object at the specified index or replaces the current object if one already exists at that index.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MyStructureClass myDotNetObj = myStream[18];\n\
</pre></div><p>The example above returns the object found at the specified index or throws a <span class=\'code\'>KeyNotFoundException</span> if an object does not exist at that index.</p>\n\
<p>Be careful though, the following syntax compiles but does not work as expected as it does not change the element in the base stream:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">myStream[18].myInt = 1.6;\n\
</pre></div><p>Instead, the example above changes the field <span class=\'code\'>myInt</span> of the <em>copy</em> returned by the indexer, so it is completely useless.</p>\n\
<p>For the desired result, do as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MyStructureClass temp = myStream[18];\n\
temp.myInt = 1.6;\n\
myStream[18] = temp;\n\
</pre></div></li>\n\
<li><p><span class=\'code\'>IEnumerator&lt;T&gt; GetEnumerator()</span></p>\n\
<p>This enumerates all your elements with this simple syntax:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">foreach( MyStructureClass myDotNetObj in myStream ) { … }</pre></div></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"using-the-power-linq-to-perform-sql-like-queries\"></a><h3 id=\"using-the-power-linq-to-perform-sql-like-queries\">Using the power LINQ to perform SQL-like queries</h3></div>\n\
<p>Since <span class=\'code\'>IEnumerable</span> is supported on most classes, you can perform very powerful queries with your data.</p>\n\
<p>For instance, if your class has a field called amplitude, and you want to find the metadata in the vertex channel of a mesh where the amplitude is greater than 0.5, you can do this easily as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"> Channel chn = myAssociations[&quot;vertex&quot;];\n\
 Stream chnStream = chn[“myStream”];\n\
 var strm = new StreamForType&lt;MyStructureClass&gt;(chnStream);\n\
 var list = strm.Where( ( MyStructureClass obj ) =&gt;obj.amplitude &gt;0.5 );\n\
 foreach( MyStructureClass obj in list ) { … }\n\
</pre></div><p>To query the vertex index, you can do as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">var list = strm.Where( ( KeyValuePair&lt;Index,MyStructureClass&gt; keyvalue ) =&gt; keyvalue.Value.amplitude &gt; 0.5 );\n\
foreach (var keyvalue in list ) {  \n\
   Index index = keyvalue.Key;\n\
   MyStructureClass obj = keyvalue.Value;\n\
   …   \n\
}\n\
</pre></div><p>This type of query can be done on any of the following classes: Associations, Channel, Stream and Structure because they all implement <span class=\'code\'>IEnumerable</span>, which is the only interface LINQ requires.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";