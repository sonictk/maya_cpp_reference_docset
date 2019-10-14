var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Construction History and Tweaks</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Construction History and Tweaks</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"construction-history-and-tweaks\"></a></div>\n\
<p>This section assumes basic knowledge of the dependency graph. For details, see <a href=\'#!/url=./developer/Dependency-graph-plug-ins/About-the-dependency-graph.html\' title=\'\'>Dependency Graph (DG) nodes</a>.</p>\n\
<p>All the operations that can be performed on a polygonal mesh can be generalized into three basic types: create, edit and query. While both the creating and querying a mesh are straightforward, editing involves complications resulting from construction history and tweaks and how they work within the confines of the dependency graph.</p>\n\
<div class=\'section\'><a id=\"construction-history\"></a><h2 id=\"construction-history\">Construction History</h2></div>\n\
<p>Construction history provides a backlog of actions performed on a mesh. The implementation of construction history in the DG makes it unique. For all objects in Maya, a single linear chain of DG nodes can exist upstream from the object’s node. This chain is known as the construction history of an object. The final node of a history chain always represents the object that the history is recording actions for. At the beginning of the chain lies a hidden intermediate node representing the initial state of the node when the history first began to record actions performed on the mesh.</p>\n\
<div class=\'figure\'><img src=\'developer/images/comp_Construction_History.png\' title=\'\'></div>\n\
<p>The manipulation of the mesh can be complicated by the following factors, which affect the state of a node:</p>\n\
<ul>\n\
<li>Whether or not the mesh has construction history</li>\n\
<li>Whether or not the user has construction history recording turned on</li>\n\
</ul>\n\
<p>The presence of construction history indicates that there is a chain of modifier nodes upstream from the mesh node—the history chain. Each modifier node in the history chain is connected via their inMesh/outMesh attributes through which the mesh data flows down the chain. During a DG evaluation, the outMesh at the top of the history chain passes the mesh down to each modifier node, each applying their modification in turn. Once the mesh reaches the actual mesh node and end of the chain, the modified mesh is stored on the node, overwriting any previous data on the node.</p>\n\
<p>Attempting to modify a mesh node via API mutator methods writes the information directly onto the inMesh attribute of the given mesh node. Although some methods are history sensitive, there are many that are not. This, combined with the DG evaluation process presents the problem if history exists. Since a DG evaluation will overwrite the inMesh of the mesh node due to the connection from the outMesh of the modifier node directly upstream from the mesh, any modifications made to the mesh will be discarded.</p>\n\
<p>The solution to this problem is to create a node that performs the modification want and if history exists, to insert your node directly ahead of your mesh node in the history chain as shown below. The node directly upstream from the mesh node always represents the last change made to the mesh.</p>\n\
<div class=\'figure\'><img src=\'developer/images/comp_Modifier_Node.png\' title=\'\'></div>\n\
<p>Whether the user has construction history turned on or off does not restrict the modification of a node as rigidly as whether the mesh has construction history. However it is a good practice to adhere to the user’s construction history preferences and behave similarly to the rest of Maya. This preference will change how the node should be modified as well as what the node will look like in the DG following the operation.</p>\n\
<p>With history turned on, the user has selected to keep a history chain. Following the operation, the resulting mesh would look like the previous diagram (Inserting a modifier node).</p>\n\
<p>With history turned off, the user has selected not to see a history chain. From here there are two possible ways to modify the mesh:</p>\n\
<ul>\n\
<li>Operate on the mesh directly.</li>\n\
<li><p>Use a modifier node as shown in the previous diagram (Inserting a modifier node), and then collapse the node down into the mesh.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> If history already exists on the mesh and history is turned off, the preference is ignored and regarded as though history was turned on. This leaves it at the user’s discretion to collapse all history down into the mesh node.</p>\n\
</blockquote></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"tweaks\"></a><h2 id=\"tweaks\">Tweaks</h2></div>\n\
<p>Tweaks are manual transformations applied to polygonal components (for example, manually repositioning a vertex through a translate transformation). The presence of tweaks on a shape complicates the interface of a polyShape node because they change the data flow through the node. Although the change isn’t drastic it affects how you modify the node. The challenge with tweaks is maintaining the order of operations.</p>\n\
<p>Tweaks are stored locally on the node and applied to the input mesh of the node (inMesh or cachedInMesh). If a node is inserted ahead of the polyShape node (common for a node with history), the order of operations is not kept. This can change the resulting mesh if a modifier node was altering the topology of the mesh. For example, if the modifier node rotated the edge containing a tweaked vertex, the resulting position of the edge would vary based on the order of operations.</p>\n\
<p>The polyTweak node resolves this problem. This node stores tweaks inside a local tweak attribute. Upon receiving a mesh input (inputPolymesh attribute), the node applies its tweaks to the mesh and returns the output through its output attribute. To address the problem with this node, you extract the tweaks into the polyTweak node and insert the polyTweak node ahead of the modifier node. This maintains the order of operations.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";