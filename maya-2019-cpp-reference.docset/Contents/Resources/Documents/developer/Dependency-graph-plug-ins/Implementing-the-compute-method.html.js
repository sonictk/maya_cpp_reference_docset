var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Implementing the compute() method for a dependency graph node</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Implementing the compute() method for a dependency graph node</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"implementing-the-compute-method-for-a-dependency-graph-node\"></a></div>\n\
<p>This topic provides some principles to keep in mind when implementing the virtual <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::compute()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::compute()</a></span> method for a custom dependency node class.</p>\n\
<p>Maya calls your node&#39;s <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::compute()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxNode::compute()</a></span> method when it determines that one of your node&#39;s output attributes, or plugs, is out-of-date and needs to be re-computed. It passes as arguments the plug that needs to be recomputed, and a data block that contains the current values of the input and output attributes for the current instance of your node. Your <span class=\'code\'>compute()</span> method is expected to re-calculate the value of the requested plug based on the current values of the node&#39;s input attributes, and to store the computed output values back into the data block.</p>\n\
<div class=\'section\'><a id=\"performance-matters\"></a><h2 id=\"performance-matters\">Performance matters</h2></div>\n\
<p>Assume that your node will be re-evaluated frequently. Strive to make its computations as efficient as possible.</p>\n\
<p>For example, during rendering a node may need to be evaluated several times per pixel. If you do not take care to make its computations as fast as possible, the dependency graph can easily become a bottleneck.</p>\n\
<div class=\'section\'><a id=\"rely-only-on-input-attributes\"></a><h2 id=\"rely-only-on-input-attributes\">Rely only on input attributes</h2></div>\n\
<p>The <span class=\'code\'>compute()</span> method in every node must operate with only the data that is present in its parameters: i.e. the current values of its attributes.</p>\n\
<p>If you need to use any other data in your computations, make that data into attributes. Even if it is only temporarily cached information to speed up computation, it could be useful as a hidden attribute to speed up the first refresh after file retrieval.</p>\n\
<div class=\'section\'><a id=\"change-only-output-attributes\"></a><h2 id=\"change-only-output-attributes\">Change only output attributes</h2></div>\n\
<p>A node must not affect any values or objects apart from its output attributes. For instance, a node should not directly alter the DAG or any other dependency graph nodes. Doing so could result in an infinite loop: it could prompt a new evaluation of the dependency graph, which could cause your node to be re-evaluated, altering the DAG or dependency graph again and forcing a new dependency graph evaluation. If for some reason a node needs to alter something about its environment, you should encapsulate that knowledge as an attribute and connect the attribute to another component that can accept the computed data. Affecting any outside data will almost certainly violate one of the following:</p>\n\
<ul>\n\
<li>multiprocessing-friendliness</li>\n\
<li>evaluating at an alternate context (for example, at time T)</li>\n\
<li>node instancing</li>\n\
<li>vectorization of computations</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"always-check-the-requested-plug\"></a><h2 id=\"always-check-the-requested-plug\">Always check the requested plug</h2></div>\n\
<p>Always check which plug Maya is requesting you to recompute, and handle any unrecognized plugs by returning <span class=\'code\'>MS::kUnknownParameter</span>.</p>\n\
<p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">{\n\
    ...\n\
\n\
    if ( (plug == myOutputPlug) || (plug == myOtherOutputPlug) )\n\
    {\n\
         ... // compute and set the requested output values here.\n\
    }\n\
    else\n\
         return MS::kUnknownParameter;\n\
\n\
    return MS::kSuccess;\n\
}\n\
</pre></div><p>This can avoid your node re-computing output attributes unnecessarily.</p>\n\
<p>In addition, returning <span class=\'code\'>MS::kUnknownParameter</span> will make Maya call the <span class=\'code\'>compute()</span> method of the base class that you have derived your class from. If the attribute that needs to be recomputed is initialized in the base class and computed by its <span class=\'code\'>compute()</span> method, the value will be automatically updated by the base class. Therefore, you do not need to handle any inherited attributes in your derived class. You may, however, <em>override</em> the way the base class handles any of its attributes in your implementation by updating its value and returning <span class=\'code\'>MS::kSuccess</span> as you would for any attributes that are specific to your derived class.</p>\n\
<div class=\'section\'><a id=\"always-set-computed-plugs-as-clean\"></a><h2 id=\"always-set-computed-plugs-as-clean\">Always set computed plugs as clean</h2></div>\n\
<p>When your node computes a new value for a requested plug and stores the value in the data block passed to the <span class=\'code\'>compute()</span> method, always notify Maya that the plug&#39;s value has been newly computed by marking the plug as &quot;clean&quot; by calling:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">data.setClean(plug);\n\
</pre></div><p>and returning <span class=\'code\'>MS::kSuccess</span>.</p>\n\
<p>If you do not mark the plug as clean, Maya may request multiple re-evaluations of your node each time it refreshes the dependency graph.</p>\n\
<div class=\'section\'><a id=\"do-not-save-references-to-data\"></a><h2 id=\"do-not-save-references-to-data\">Do not save references to data</h2></div>\n\
<p>Your node must not save a reference to any of the data that is passed in to the <span class=\'code\'>compute()</span> method for a plug. If, for example, surface geometry comes in on a plug, do not save a pointer to this geometry. The data coming in on a plug is transitory and may cease to exist without you knowing it. You are only guaranteed that it will exist during the execution of your node’s <span class=\'code\'>compute()</span> method.</p>\n\
<div class=\'section\'><a id=\"respond-to-the-hasnoeffect-node-state-if-necessary\"></a><h2 id=\"respond-to-the-hasnoeffect-node-state-if-necessary\">Respond to the HasNoEffect node state, if necessary</h2></div>\n\
<p>If your node accepts a certain type of input attribute and produces the same type of data as an output, you may want to support the &quot;HasNoEffect&quot; or pass-through node state. Setting a node to this state typically results in the input attribute value being assigned directly to the output attribute, without any modifications. This allows a Maya user to bypass the node&#39;s calculations without needing to break any connections in the dependency graph.</p>\n\
<p>For example, the following snippet from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"splitUVCmd/splitUVNode.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/split_u_v_cmd_2split_u_v_node_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">splitUVCmd/splitUVNode.cpp</a></span> sample retrieves the value of the state attribute, and tests to see if its value is <span class=\'code\'>1</span>, which corresponds to the &quot;HasNoEffect&quot; setting. If so, it simply returns the input attribute.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> splitUVNode::compute( const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp; plug, <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; data )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
     \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> stateData = data.outputValue( state, &amp;status );\n\
    MCheckStatus( status, &quot;ERROR getting state&quot; );\n\
\n\
    if( stateData.asShort() == 1 )\n\
    {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> inputData = data.inputValue( inMesh, &amp;status );\n\
        MCheckStatus(status,&quot;ERROR getting inMesh&quot;);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outputData = data.outputValue( outMesh, &amp;status );\n\
        MCheckStatus(status,&quot;ERROR getting outMesh&quot;);\n\
        // Simply redirect the inMesh to the outMesh for the PassThrough effect\n\
        //\n\
        outputData.set(inputData.asMesh());\n\
    }\n\
    ...\n\
}\n\
</pre></div><p>For details about node states and their values, see <a href=\'#!/url=./developer/Dependency-graph-plug-ins/About-the-dependency-graph.html\' title=\'\'>About the dependency graph</a>.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";