var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Custom evaluator overview</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Custom evaluator overview</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"custom-evaluator-overview\"></a></div>\n\
<div class=\'figure\'><img src=\'developer/images/New_Odd.png\' title=\'\'></div>\n\
<p>This section explains API classes and methods used to add custom evaluators to Maya. Custom evaluators let users override how DG nodes are scheduled and executed by the evaluation manager. If you&#39;re unfamiliar with the scene evaluation changes introduced in Maya 2016, see the <em>Improving Performance with Parallel Evaluation</em> whitepaper at <a href=\'http://www.autodesk.com/maya-docs\' title=\'\' target=\'_blank\'>http://www.autodesk.com/maya-docs</a> for a more detailed summary.</p>\n\
<p>This section contains a brief review of how the evaluation manager builds, partitions, and schedules the evaluation graph, followed by an introduction to new API classes, and then closes with a simple example to motivate usage of new API classes; see the devkit for additional examples.</p>\n\
<div class=\'section\'><a id=\"introduction\"></a><h2 id=\"introduction\">Introduction</h2></div>\n\
<p>The Evaluation Manager (EM), introduced in Maya 2016, improves playback and manipulation performance by supporting concurrent evaluation of dependency graph (DG) nodes.</p>\n\
<p>The EM uses specialized evaluators to enable customized handling of different parts of the scene. Maya 2016 includes 3 such evaluators:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col> <col> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Evaluator</th><th class=\"table-heading\">Details</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Deformer</td><td class=\"table-body\">Takes advantage of GPU hardware to deform dense geometry more quickly</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Dynamics</td><td class=\"table-body\">Detects if the scene contains unsupported legacy dynamics and disables parallel evaluation</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Prune Roots</td><td class=\"table-body\">Groups animation curves during evaluation to reduce node-scheduling overhead</td></tr></tbody></table>\n\
<div class=\'section\'><a id=\"evaluation-manager-review\"></a><h3 id=\"evaluation-manager-review\">Evaluation Manager Review</h3></div>\n\
<p>The EM performs 3 key steps when evaluating your scene: graph construction, graph partitioning, and graph scheduling, each described below.</p>\n\
<div class=\'section\'><a id=\"graph-construction\"></a><h4 id=\"graph-construction\">Graph Construction</h4></div>\n\
<p>Unlike classic Maya evaluation, the EM does not rely on dirty propagation to determine what to evaluate at every frame. Instead, the EM builds an evaluation graph (EG) that encodes dependencies between DG nodes.</p>\n\
<p>During EG construction, a list of plugs is built for each animated node. This list contains all plugs required by downstream dependents on a given node, guaranteeing that all upstream dependencies are up-to-date whenever a specific node is evaluated.</p>\n\
<div class=\'section\'><a id=\"graph-partitioning\"></a><h4 id=\"graph-partitioning\">Graph Partitioning</h4></div>\n\
<p>Once the EG is built, the EM must calculate how different parts of that graph will be evaluated. To do this, enabled evaluators are allowed to claim ownership for node sub-graphs, in priority order. To claim nodes, evaluators must mark nodes as being of interest.</p>\n\
<p>During traversal, any node-level cycles with 1 or more outputs connected to 1 or more inputs are grouped into <em>clusters</em> by the EM. Sub-graphs claimed by different evaluators are also added to clusters.</p>\n\
<p>Clusters are evaluated together as a single unit and are mutually exclusive (that is, an evaluation node can belong to one cluster at most). Hence, the set of all clusters provides a partitioning of the EG.</p>\n\
<p>Clusters are layered in a hierarchy such that if the current cluster fails to evaluate a node, control is passed to the parent cluster. In decreasing order of priority, cluster layers are:</p>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\"><colgroup><col> <col> </colgroup><tbody><tr class=\"ruled-heading\"><th class=\"table-heading\">Layers</th><th class=\"table-heading\">Details</th></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Custom</td><td class=\"table-body\">Layer for custom evaluator clusters. Once a node is in a custom evaluator\'s cluster, that evaluator takes responsibility for its evaluation.</td></tr><tr class=\"ruled-even-row\"><td class=\"table-body\">Cycle</td><td class=\"table-body\">Layer for DG node-level cycles (for example, constraints, and so on,) that often require special evaluation to ensure correctness.</td></tr><tr class=\"ruled-odd-row\"><td class=\"table-body\">Base</td><td class=\"table-body\">The default, no cluster, layer. Nodes are evaluated directly without special treatment.</td></tr></tbody></table>\n\
<blockquote>\n\
<p><strong>Note:</strong> Clusters are created and destroyed during graph construction and scheduling. If the graph is invalidated, clusters will be destroyed. Custom evaluators should rely only upon cluster initialize and terminate callbacks and never cache pointers to the previous cluster. Currently, each cluster is represented and scheduled as a single unit, allowing custom evaluators to handle nodes as desired.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"graph-scheduling\"></a><h4 id=\"graph-scheduling\">Graph Scheduling</h4></div>\n\
<p>After partitioning, the EM must schedule nodes for evaluation in the correct order. Nodes are scheduled so that upstream nodes are evaluated before all dependents. Beyond this, it&#39;s not possible to guarantee any particular order of evaluation.</p>\n\
<p>For example, in the simple graph,</p>\n\
<div class=\'figure\'><img src=\'developer/images/CustomEval_GraphSchedule1.png\' title=\'\'></div>\n\
<p>node A always evaluates before B. For a more complex graph,</p>\n\
<div class=\'figure\'><img src=\'developer/images/CustomEval_GraphSchedule2.png\' title=\'\'></div>\n\
<p>although A is guaranteed to be evaluated before B and C, there are no guarantees about the exact timing of evaluation for B and C. Depending on the scheduling type of B and C, they could be evaluated simultaneously.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> If a node is frozen, even if scheduled, its evaluation is skipped.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";