var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Custom Evaluator API</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Custom Evaluator API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"custom-evaluator-api\"></a></div>\n\
<div class=\'figure\'><img src=\'developer/images/New_Odd.png\' title=\'\'></div>\n\
<p>The following section describes new API classes and methods to define custom evaluators. Custom evaluators allow control over how the Maya scene is computed.</p>\n\
<p>If you want to create a custom evaluator, you need to define a plug-in that extends the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator</a></span> class. The following lists the key class methods that you should override.</p>\n\
<div class=\'section\'><a id=\"the-basics\"></a><h2 id=\"the-basics\">The Basics</h2></div>\n\
<p>Before new evaluators can be used, they must be registered:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> registerEvaluator(\n\
    // name of the evaluator\n\
    const char *     evaluatorName,  \n\
\n\
    // evaluator priority. Higher priority evaluators get &#39;first-dibs&#39;\n\
    unsigned int     uniquePriority,\n\
\n\
    // function pointer to method returning a new evaluator instance \n\
    MCreatorFunction creatorFunction\n\
)\n\
</pre></div><p>and deregistered:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> deregisterEvaluator(\n\
    // name of the evaluator\n\
    const char* evaluatorName \n\
)\n\
</pre></div><p>using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> methods. These functions should be used during plug-in initialization:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, &quot;3.0&quot;, &quot;Any&quot;);\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = plugin.registerEvaluator(\n\
        &quot;SimpleValuator&quot;, \n\
        40 /* unused priority */, \n\
        simpleEvaluator::creator);\n\
    if (!status) \n\
        status.perror(&quot;registerEvaluator&quot;);\n\
    return status;\n\
}\n\
</pre></div><p>and uninitialization:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = plugin.deregisterEvaluator( &quot;SimpleValuator&quot; );\n\
    if (!status)\n\
        status.perror(&quot;deRegisterEvaluator&quot;);\n\
    return status;\n\
}\n\
</pre></div><p>as illustrated above.</p>\n\
<p>Once the plug-in has been loaded, you can use Python or MEL commands to <strong>enable</strong>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.evaluator(enable=True, name=&#39;SimpleEvaluator&#39;)\n\
\n\
# Result: False #\n\
</pre></div><p><strong>disable</strong>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">cmds.evaluator(enable=False, name=&#39;SimpleEvaluator&#39;)\n\
\n\
# Result: True # \n\
</pre></div><p>and <strong>query</strong> information about evaluators:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">print cmds.evaluator(query=True)\n\
\n\
[u&#39;dynamics&#39;, ... u&#39;SimpleEvaluator&#39;]\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> The evaluator command returns the previous state of the evaluator. This command fails if the evaluator cannot be enabled. See the <em>Technical Documentation</em> section of the Maya Help for more information on this command.</p>\n\
\n\
<p>To view the priorities of all loaded evaluators, use the priority flag on the evaluator command:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">for evaluatorName in cmds.evaluator():\n\
    print &quot;%-25s : %d&quot; % (\n\
        evaluatorName,\n\
        cmds.evaluator(name=evaluatorName, query=True, priority=True))\n\
\n\
dynamics                 : 103000\n\
ikSystem                 : 102000\n\
timeEditorCurveEvaluator : 101000\n\
disabling                : 100000\n\
GPUOverride              : 5000\n\
transformFlattening      : 3000\n\
reference                : 1000\n\
SimpleValuator           : 40\n\
</pre></div><div class=\'section\'><a id=\"api-reference\"></a><h2 id=\"api-reference\">API Reference</h2></div>\n\
<p>This section provides more detail on different <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator</a></span> API methods.</p>\n\
<div class=\'section\'><a id=\"claiming-clusters\"></a><h3 id=\"claiming-clusters\">Claiming clusters</h3></div>\n\
<p>During EG partitioning, each evaluator can claim evaluation nodes, using the:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool <a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator::markIfSupported\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html#ab796c49be826aa53c78faf09f05ab0c8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator::markIfSupported</a>(const <a href=\"javascript:void(0)\" data-symbol=\"MEvaluationNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_evaluation_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvaluationNode</a>* node)\n\
</pre></div><p>method. It is safe to cause evaluation in this call, but it increases partitioning and evaluation time. It is up to the developer to decide whether evaluation is required (call <span class=\'code\'>.outputValue/.outputArrayValue</span>) or whether the previously evaluated datablock values can be re-used (call <span class=\'code\'>.inputValue/.inputArrayValue</span>). If multiple evaluators mark a specific node, priority is used to determine which evaluator is assigned a node at run-time. For example, if you have two evaluators, A and B, mark node C of interest, and if evaluator A has priority 100, and evaluator B has priority 10, then during graph evaluation, evaluator A is assigned the cluster with node C.</p>\n\
<div class=\'section\'><a id=\"scheduling\"></a><h3 id=\"scheduling\">Scheduling</h3></div>\n\
<p>To determine if an evaluator can evaluate clusters in Parallel, use:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MCustomEvaluatorClusterNode::SchedulingType\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_custom_evaluator_cluster_node.html#aa4dfc80e0475312169cf7a2b4299b825&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MCustomEvaluatorClusterNode::SchedulingType</a> schedulingType(\n\
    // a disjoint set of nodes on a custom evaluator layer\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MCustomEvaluatorClusterNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_custom_evaluator_cluster_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MCustomEvaluatorClusterNode</a> * cluster \n\
)\n\
</pre></div><p>where,</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\"><colgroup><col> <col> </colgroup><tbody><tr class=\"not-ruled-heading\"><th class=\"table-heading\">Scheduling Type</th><th class=\"table-heading\">Details</th></tr><tr class=\"not-ruled-odd-row\"><td class=\"table-body\">kParallel</td><td class=\"table-body\">any number of nodes of the same type can run in parallel</td></tr><tr class=\"not-ruled-even-row\"><td class=\"table-body\">kSerial</td><td class=\"table-body\">all nodes of this type should be chained and executed sequentially</td></tr><tr class=\"not-ruled-odd-row\"><td class=\"table-body\">kGloballySerial</td><td class=\"table-body\">only one node of this type can be run at a time</td></tr><tr class=\"not-ruled-even-row\"><td class=\"table-body\">kUntrusted</td><td class=\"table-body\">nothing else can execute with this node since it is not possible to predict what will happen</td></tr></tbody></table>\n\
<p>During EG scheduling:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool <a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator::clusterInitialize\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html#aadcd7c91ee41f0f4ac48923ed11db44b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator::clusterInitialize</a>(\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MCustomEvaluatorClusterNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_custom_evaluator_cluster_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MCustomEvaluatorClusterNode</a>* cluster // evaluation cluster node\n\
)\n\
</pre></div><p>can be used to do any required cluster preparation. The pointer to the cluster remains valid until graph invalidation, such as when the scene topology changes.</p>\n\
<p>Before the cluster is deleted,</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void <a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator::clusterTerminate\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html#a93f7f73d9a911cd75458e64fa9b4a29b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator::clusterTerminate</a>(\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MCustomEvaluatorClusterNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_custom_evaluator_cluster_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MCustomEvaluatorClusterNode</a>* cluster // the cluster to terminate\n\
)\n\
</pre></div><p>is called to allow needed cleanup, such as releasing evaluator-specific resources. It&#39;s up to the custom evaluator to decide if it wants to clear its internal representation.</p>\n\
<div class=\'section\'><a id=\"execution\"></a><h3 id=\"execution\">Execution</h3></div>\n\
<p>There are 3 main methods used during execution.</p>\n\
<p>Prior to graph execution, the EM calls:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void <a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator::preEvaluate\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html#a0ee39c4c551994ada0ae27f4b9407c48&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator::preEvaluate</a>(\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MEvaluationGraph\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_evaluation_graph.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvaluationGraph</a>* graph // the graph about to be evaluated\n\
)\n\
</pre></div><p>during execution, the EM calls:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void <a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator::clusterEvaluate\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html#a9bded60be46fea26c410402438aa331a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator::clusterEvaluate</a>(\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MCustomEvaluatorClusterNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_custom_evaluator_cluster_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MCustomEvaluatorClusterNode</a>* cluster // the cluster to be evaluated\n\
)\n\
</pre></div><p>You will only receive clusters that belong to this evaluator. This call always happens after <span class=\'code\'>clusterInitialize</span> and never after <span class=\'code\'>clusterTerminate</span>. Finally,</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void <a href=\"javascript:void(0)\" data-symbol=\"MPxCustomEvaluator::postEvaluate\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_custom_evaluator.html#a15601c71655108beeb74c77bf70b021a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCustomEvaluator::postEvaluate</a>(\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MEvaluationGraph\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_evaluation_graph.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvaluationGraph</a>* graph // the graph that was evaluated\n\
)\n\
</pre></div><p>is called just after a graph evaluation finishes.</p>\n\
<div class=\'section\'><a id=\"simple-evaluator-api-example\"></a><h3 id=\"simple-evaluator-api-example\">Simple Evaluator API example</h3></div>\n\
<p>Refer to the <em>simpleEvaluator</em> plug-in in the Developer Kit for an example that limits evaluation by caching previous results.</p>\n\
<div class=\'section\'><a id=\"useful-script\"></a><h2 id=\"useful-script\">Useful script</h2></div>\n\
<p>This simple script checks which nodes are associated with a given evaluator:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def printClusters(evaluatorName):\n\
    &quot;&quot;&quot;\n\
    Print out any clusters of nodes captured by the specified evaluator.\n\
    &quot;&quot;&quot;\n\
    evaluators = cmds.evaluator( query=True )\n\
    if evaluatorName in evaluators:\n\
        try:\n\
            print cmds.evaluator( \n\
                query=True, \n\
                name=evaluatorName, \n\
                clusters=True )[1:]\n\
        except KeyError:\n\
            print &#39;No clusters in the specified evaluator&#39;\n\
    else:\n\
        print &#39;The specified evaluator is not active. Use the &quot;evaluator&quot; command to activate it&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";