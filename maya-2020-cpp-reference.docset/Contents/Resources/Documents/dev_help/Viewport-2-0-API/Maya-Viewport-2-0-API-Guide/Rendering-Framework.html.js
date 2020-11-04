var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Rendering Framework</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Rendering Framework</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"rendering-framework\"></a></div>\n\
<p>To understand how the plug-in interface interacts with Maya, a frame of reference needs to be provided. This section outlines the rendering framework of the current hardware renderer. It also points out the differences and similarities between the “old” and “new” rendering logic.</p>\n\
<p>There is now a clear separation of responsibilities and an underlying hardware rendering framework exists. In the old system rendering was mainly the responsibility of DAG objects, and now it is the responsibility of a renderer.</p>\n\
<p>First, there is a distinction between data which is used to represent Maya constructs and data which is used for ren­dering. While Maya manages DAG objects, the rendering framework maintains a separate database which tracks instances of Maya DAG objects. This database is composed of constructs that we call <strong>renderable objects</strong>. For the most part in general there is a 1:1 relation between renderable objects and DAG instances.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f41f1.jpg\' title=\'\' /></div>\n\
<p>Figure 1: An example set of DAG objects in a hierarchy shown on the left. The result could be 2 renderable objects for the 2 Maya DAG object instances.</p>\n\
<p><strong>Synchronization</strong> between Maya constructs and the rendering database is facilitated by a “dirtying” or change man­agement mechanism which tracks all appropriate changes per node or DAG object. This differs from the previous mechanism which required changes to be broadcast to an arbitrary set of clients.</p>\n\
<p>Unlike the old model, data <strong>update</strong> is not driven by synchronization. In fact updates can no longer cause synchroni­zation to occur as this would result in recursive updates. Synchronization is always actively executing, while update is performed on-demand when a render is required. In the new framework, a rendering request can be invoked non-interactively via the command line or via the pre-existing idle refresh mechanism used for interactive (view­port) rendering. One main difference to note is that non-interactive requests are always satisfied while interactive requests may or may not be satisfied depending on whether the refresh is executed.</p>\n\
<p>To satisfy a rendering request some kind of render loop logic needs to be performed. This render loop can be visual­ized as a pipeline with various “phases.” For simplicity we start with these familiar phases:</p>\n\
<ol>\n\
<li>Object level pruning of “renderable objects” (e.g. based on visibility)</li>\n\
<li>Updating of data (Update Phase)</li>\n\
<li>Sending down “renderables”</li>\n\
<li>Drawing “renderables”</li>\n\
</ol>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f41f7.jpg\' title=\'\' /></div>\n\
<p>Figure 2: Renderables objects are fed in as input and pruned as required. Those that are not pruned will perform synchronization and update as required and produce renderables. These renderables may undergo further pruning before being sent to render.</p>\n\
<p>The <strong>Update Phase</strong> is responsible for synchronization and for determining what is “renderable.” We call such ren­derable objects Render Items. Render items are passed down the pipeline and additional logic is then applied to fil­ter or prune out what should actually draw (“Renderable Pruning”). At the tail-end of the pipeline is the <strong>Draw Phase</strong> which actually performs rendering.</p>\n\
<p>Note that a <strong>Render Item</strong> is left vague for the moment. For now, it is sufficient to know that it represents an atomic unit containing both the render data and the render algorithm. Each unique algorithm and each unique geometric primitive generally results in a unique renderable. As an example, an algorithm to draw control points would require one renderable, while one to draw filled triangles with bump mapping would require another. In this exam­ple both the data primitive and the algorithm varies.</p>\n\
<p>By contrast to the new organization, the old system looks like this:</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/aa0f41fd.jpg\' title=\'\' /></div>\n\
<p>Figure 3: Without a database, a scene traversal is required. The object is responsible for all tasks required to update and draw.</p>\n\
<p>Without a separate database, a full scan of Maya constructs in a scene is performed. After initial object pruning, each object is free to draw itself. As there is no clear separation between update and draw, this results in the ability to perform interleaved evaluation, translation and draw in one “phase.” As there is no renderer, little cross-object optimization can be performed. These are all undesirable properties and are discouraged or disallowed in the new framework.</p>\n\
<p>We consider the new system of update as a <strong>pull</strong> model where data is updated on demand and only if required. If nothing changes between renders then the pipeline can run without interaction with the Maya scene. The old model is seen as more of a <strong>push</strong> model where for every render we rescan the entire scene and try to update every­thing so it can be examined later on for relevance.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";