var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>The Render Loop</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>The Render Loop</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"the-render-loop\"></a></div>\n\
<p>A pipeline can be configured based on the requirements for either batch or viewport rendering. Each configuration may or may not be invoked and any series of configurations may be invoked per ren­der. The logic for a render loop thus consists of all configurations executed within a single frame.</p>\n\
<p>In such a scheme, it is possible (and common) for render items to be updated and drawn under different <strong>rendering contexts</strong> as defined by a configuration.</p>\n\
<p>The rendering context can be logically split into two parts based on available data. The available set of data usable at draw time is called the <strong>draw context</strong>.</p>\n\
<p>A draw context reflects the underlying GPU context or state. In general, the greatest variation in state occurs during the drawing of render items. Examples of variations of state include: object-to-world matrix, the bound shader, the current blend state, the currently bound textures and so forth. States such as camera matrices and viewport dimen­sions are generally constant within a pipeline and thus constant at draw time.</p>\n\
<p>In addition to information available at draw time, the rendering context can also track <strong>rendering preferences</strong> which includes the layering in of <strong>semantic categorizations</strong>. In particular, the context can reflect the display mode catego­rizations as well as the logical categorization of objects. Sample display modes include: wireframe, shaded, tex­tured, lit and transparent categorizations. For example a render item can be explicitly tagged with a semantic indicating that it is “transparent.” Examples of the latter include: filled surfaces, UI, grid and overlays.</p>\n\
<p>With these additional concepts, we can extend the previous pipeline description with the notion of rendering and draw con­texts, collections of renderable objects as lists, and add a Categorization phase:</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f4763.jpg\' title=\'\'></div>\n\
<p>Figure 9</p>\n\
<p>Categorization makes use of semantics as well as shader and data properties to determine whether to produce additional lists. Render items in these lists flow down the pipeline in the same fashion as those not filtered into additional lists.</p>\n\
<p>Context exists throughout the pipeline with data available for reading or writing at specific times. No draw context is provided when it is not required. In particular, no draw context is required during geometry data update.</p>\n\
<p>A concrete example is transparency handling. A transparency list may result from categorization, resulting in a draw phase for handling opaque render items and one for handling transparent items. Often, even with the old system, plug-ins do not take into consideration that they may be drawn more than once and with different contexts. This is a common occurrence which may occur for various reasons based on the rendering configuration.</p>\n\
<p>Another example follows, where we present shadow map generation “pass” followed by a beauty “pass”. Each pass can be said to have semantics which are relevant for that pass. A “pass context” would group such information. Each runs a pipeline with its own configuration parameters. In total, a render item could be drawn 2 or more times.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f4769.jpg\' title=\'\'></div>\n\
<p>Figure 10</p>\n\
<p>In the shadow map generation pipeline the render context would have a camera based on the light casting the shadow. The pass context would indicate rendering is occurring to create shadow maps. The categorization would prune out everything except “shadow casters” and discard all other render items.</p>\n\
<div class=\'figure\'><img src=\'developer/images/aa0f4775.jpg\' title=\'\'></div>\n\
<p>Figure 11</p>\n\
<p>In the beauty pass pipeline, this particular example extracts all opaque and transparent objects and places them into two lists for rendering. All other render items are discarded. The beauty pass context would provide information that a beauty pass is being performed as well indicate whether the opaque or transparent lists are being rendered.</p>\n\
<p>These are just examples of internal scenarios. As the API is open for customizable render loops, plug-ins should not expect to be invoked to update or draw only once in a frame render.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";