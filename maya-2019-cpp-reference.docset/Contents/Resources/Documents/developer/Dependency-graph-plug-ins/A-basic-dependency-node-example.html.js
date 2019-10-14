var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>A basic dependency node example</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>A basic dependency node example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"a-basic-dependency-node-example\"></a></div>\n\
<p>The following example demonstrates a simple custom dependency graph node that derives from the base <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span> parent class. It takes a single floating-point number as input, computes the sine of the number, and outputs the result.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &lt;string.h&gt;\n\
#include &lt;iostream.h&gt;\n\
#include &lt;math.h&gt;\n\
#include &lt;maya/MString.h&gt; \n\
#include &lt;maya/MFnPlugin.h&gt;\n\
\n\
</pre></div><p>This is still a plug-in so you still need <span class=\'code\'>MFnPlugin.h</span>. However, you use a different method to register a node than a command.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &lt;maya/MPxNode.h&gt; \n\
#include &lt;maya/MTypeId.h&gt; \n\
#include &lt;maya/MPlug.h&gt;\n\
#include &lt;maya/MDataBlock.h&gt;\n\
#include &lt;maya/MDataHandle.h&gt;\n\
\n\
</pre></div><p>These header files are used by most plug-in dependency graph nodes.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &lt;maya/MFnNumericAttribute.h&gt;\n\
\n\
</pre></div><p>There are a number of different types of attributes (which you will be introduced to) and the ones you need are dependent on the type of node you write. For this example, only numeric data is used.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class sine : public <a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a>\n\
{\n\
\n\
</pre></div><p>User-defined dependency graph nodes are derived from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode</a></span> class.</p>\n\
<p><strong>constructor:</strong></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    public:\n\
        sine();\n\
\n\
</pre></div><p>The constructor for the node is called whenever an instance of this node is created. This can either be when the <span class=\'code\'>createNode</span> command is called, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode::create()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html#aae69364b2e9c744f9e36acb18dccaf30&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode::create()</a></span> method is invoked, etc.</p>\n\
<p><strong>destructor:</strong></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        virtual ~sine();\n\
\n\
</pre></div><p>The destructor is only called when the node is truly deleted. Because of the undo queue in Maya, deleting the node does not actually cause the node’s destructor to be called, so if the deletion is undone, the node can be returned without recreating it. Generally, a deleted node’s destructor is only called when the undo queue is flushed.</p>\n\
<p><strong>compute() function:</strong></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug,\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data );\n\
\n\
</pre></div><p>The <span class=\'code\'>compute()</span> method is the brains of a node. It does the actual work of the node using the inputs on the node to generate its outputs.</p>\n\
<p><strong>creator() function:</strong></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        static void* creator();\n\
\n\
</pre></div><p>The <span class=\'code\'>creator()</span> method serves the same purpose as the creator method on commands. It allows Maya to instantiate instances of this node. It is called every time a new instance of the node is requested by either the <span class=\'code\'>createNode</span> command or the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode::create()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html#aae69364b2e9c744f9e36acb18dccaf30&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode::create()</a></span> method.</p>\n\
<p><strong>initialize() function:</strong></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        static <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initialize();\n\
\n\
</pre></div><p>The <span class=\'code\'>initialize()</span> method is called by the registration mechanism for dependency nodes. As a result it is called once immediately after a plug-in containing a user-defined node is loaded. It is used to define the inputs and outputs of the node (for instance, its attributes).</p>\n\
<p><strong>node attributes:</strong></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    public:\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> input;\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> output;\n\
\n\
</pre></div><p>These two <span class=\'code\'>MObjects</span> are the attributes of the sine node. You are free to use any names for a node’s attributes—input and output are just used here for clarity.</p>\n\
<p><strong>node type:</strong></p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        static <a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> id;\n\
\n\
</pre></div><p>Each node requires a unique identifier which is used by <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode::create()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html#aae69364b2e9c744f9e36acb18dccaf30&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode::create()</a></span> to identify which node to create, and by the Maya file format.</p>\n\
<p>For local testing of nodes you can use any identifier between 0x00000000 and 0x0007ffff, but for any node that you plan to use for more permanent purposes, you should get a universally unique id from <a href=\'http://mayaid.autodesk.io/\' title=\'\' target=\'_blank\'>http://mayaid.autodesk.io/</a>. You will be assigned a unique range that you can manage on your own.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">};\n\
<a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a> sine::id( 0x80000 );\n\
\n\
</pre></div><p>This initializes the node’s identifier to a unique tag. These tags must be unique between all nodes (the tag is used by the file format to recreate the node) and will be assigned to API users by Autodesk.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> sine::input; \n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> sine::output; \n\
\n\
</pre></div><p>The attributes of the node are initialized to NULL values.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void* sine::creator() {\n\
    return new sine;\n\
}\n\
\n\
</pre></div><p>As mentioned earlier, the <span class=\'code\'>creator()</span> method simply returns new instances of this node. In more complex situations where several nodes may need to be interconnected, it is possible to define a single creator for the connected nodes and have this creator allocate and connect all the nodes together.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> sine::initialize() {\n\
\n\
</pre></div><p>The initialize method is called only once when the node is first registered with Maya. In this method you define the attributes of the node, what data comes in and goes out of the node that other nodes may want to connect to.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> nAttr;\n\
\n\
</pre></div><p>This example only uses numeric data so all it’s attributes are numeric and therefore only <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a></span> is necessary.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    output = nAttr.create( &quot;output&quot;, &quot;out&quot;,\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData::kFloat</a>, 0.0 );\n\
    nAttr.setWritable(false);\n\
    nAttr.setStorable(false);\n\
\n\
</pre></div><p>The first of these three lines defines the output attribute for the sine node. When defining an attribute, you must specify a long name (four characters or longer) and a short name (no more than three characters) for the attribute. These names are used in MEL scripts and UI editors to identify particular attributes. While it is not necessary, it is generally a good idea if the long name is the same as the C++ identifier for the attribute—in this example they are both called &quot;output&quot;.</p>\n\
<p>The create method also indicates the type of the attribute, in this case a float (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData::kFloat</a></span>) and sets its default value to zero. The names of attributes need only be unique within a node, different nodes may have similarly named attributes.</p>\n\
<p>The next two lines set specific characteristics of this attribute. Since this is the output of the sine node, it is not writable by other nodes. That means it is not possible for the output attribute of another node to be connected to this attribute. Also, because this is an output, it is not necessary to store the output when writing a file, since the output can be generated from the inputs. (It wouldn’t cause problems if you stored an output—it would just waste space.)</p>\n\
<p>When instantiating a new node, Maya sets the following characteristics to true:</p>\n\
<ul>\n\
<li>readable (can it be used as an output?)</li>\n\
<li>writable (can it be used as an input?)</li>\n\
<li>connectable (can another attribute connect to it?)</li>\n\
<li>storable (can it be stored to a file?)</li>\n\
<li>settable (can its value be set?)</li>\n\
</ul>\n\
<p>and the following characteristics to false:</p>\n\
<ul>\n\
<li>multi (an array)</li>\n\
<li>keyable (can be keyframed)</li>\n\
<li>indeterminant (attribute may or may not be used -- rendering related)</li>\n\
<li>hidden (not visible in the Attribute Editor)</li>\n\
</ul>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    input = nAttr.create( &quot;input&quot;, &quot;in&quot;,\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericData::kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a5686197bafb177bdc82550848416a1ad&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericData::kFloat</a>, 0.0 );\n\
    nAttr.setStorable(true);\n\
\n\
</pre></div><p>The initialization of the input attribute is similar to the output attribute, but since the value of the input cannot be calculated by the node, it must be stored when the node is stored.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    addAttribute( input );\n\
    attributeAffects( input, output );\n\
\n\
</pre></div><p>The input attribute is added as an attribute to the sine node. The <span class=\'code\'>attributeAffects()</span> method is used to indicate when the input attribute affects the output attribute. This knowledge allows Maya to optimize dependencies in the graph in more complex nodes where there may be several inputs and outputs, but not all the inputs affect all the outputs.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    addAttribute( output );\n\
\n\
</pre></div><p>The output attribute is added to the sine node. Since the output attribute is generated it does not affect the input attribute so no <span class=\'code\'>attributeAffects()</span> method is required.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return MS::kSuccess;\n\
\n\
</pre></div><p>Success is returned to indicate to Maya that the node was successfully initialized. A failure return would stop the initialization, and since the initialization method is called only once, the node would never be usable in the session. Failure returns should be made whenever a resource is unavailable that the node requires.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">}\n\
sine::sine() {}\n\
sine::~sine() {}\n\
\n\
</pre></div><p>Since this is a very simple node, the constructor and destructor do not do anything.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> sine::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data ) {\n\
\n\
</pre></div><p>The <span class=\'code\'>compute()</span> method is the brains of a dependency graph node doing all the actual work of the node. It takes two arguments. The first is a reference to the plug for which a compute is being requested, and the second is the data block for the node. Plugs and data blocks will be described in more detail in a later section.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> returnStatus;\n\
    if( plug == output )\n\
    {\n\
\n\
</pre></div><p><strong>plugs</strong></p>\n\
<p>A plug can be thought of as the recomputed attribute. This test checks which output attribute the recompute is being requested for.</p>\n\
<p>In this simple example, it will only be the output attribute, but in more complex nodes it could be any of the outputs. You should always test that the plug represents a known attribute. For example, someone may attach a dynamic attribute to your node that might have connections. This could cause your compute method to be called when none of your inputs have changed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputData = data.inputValue( input,\n\
            &amp;returnStatus );\n\
\n\
</pre></div><p><strong>data blocks</strong></p>\n\
<p>The data block contains all the data for this instance of the node. For efficiency this data is kept as a single block, so the data handles are used to reference a piece of the block. In this case the data handle is being set to reference the input attribute.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        if( returnStatus != MS::kSuccess )\n\
            cerr &lt;&lt; &quot;ERROR getting data&quot; &lt;&lt; endl;\n\
        else\n\
        {\n\
            float result = sin( inputData.asFloat() );\n\
\n\
</pre></div><p>The data is retrieved from the data handle through the <span class=\'code\'>as*()</span> methods on <span class=\'code\'>MFnDataHandle</span>. It is vital that the <span class=\'code\'>as*()</span> method matches the declared type of the attribute. The input attribute was declared as <span class=\'code\'>MFnNumericAttribute::kFloat</span> so the data must be retrieved with <span class=\'code\'>asFloat()</span>. Mixing types and retrieve methods will cause fatal errors. For example declaring an attribute as <span class=\'code\'>MFnNumericAttribute::kDouble</span> and retrieving it with <span class=\'code\'>asFloat()</span> will result in a fatal error.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">             <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outputHandle = data.outputValue(\n\
                output );\n\
\n\
</pre></div><p>A new data handle is allocated to be used to reference the piece of the data block for the output attribute.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">            outputHandle.set( result );\n\
\n\
</pre></div><p>The output attribute is then assigned the result of the calculation.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">            data.setClean(plug);\n\
\n\
</pre></div><p>The plug in the data block which caused the recompute is marked clean indicating that it has been newly recomputed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">        }\n\
    }\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>A successful status return indicates that the computation completed properly.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj ) { \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, &quot;My plug-in&quot;, &quot;1.0&quot;, &quot;Any&quot;);\n\
    status = plugin.registerNode( &quot;sine&quot;, sine::id, sine::creator, sine::initialize );\n\
\n\
</pre></div><p>The plug-in requires an <span class=\'code\'>initializePlugin()</span> and an <span class=\'code\'>uninitializePlugin()</span> as with command plug-ins, but rather than using <span class=\'code\'>registerCommand()</span>, <span class=\'code\'>registerNode()</span> is used to add the node to Maya’s database of nodes. The initialize method for the node is called as a result of the call to <span class=\'code\'>registerNode</span>. If the initialize method returns a failure code, <span class=\'code\'>registerNode</span> will also fail and your node will fail to load.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return status;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj) {\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
     <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
     status = plugin.deregisterNode( sine::id );\n\
     return status;\n\
}\n\
\n\
</pre></div><p>And that’s a simple dependency graph node.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";