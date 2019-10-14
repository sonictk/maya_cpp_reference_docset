var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Interfaces To The Renderer</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Interfaces To The Renderer</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"interfaces-to-the-renderer\"></a></div>\n\
<table cellpadding=\"0\" cellspacing=\"0\" class=\"not-ruled\"><colgroup><col width=\"67.15481171548117%\"> <col width=\"32.84518828451883%\"> </colgroup><tbody><tr class=\"not-ruled-odd-row\"><td class=\"table-body\">&nbsp; <img src=\"developer/images/aa0f47b4.jpg\"></td><td class=\"table-body\">&nbsp; <img src=\"developer/images/aa0f47eb.jpg\"></td></tr><tr class=\"not-ruled-even-row\"><td class=\"table-body\"><a name=\"GUID-4456CF53-0E31-4B1B-BDE7-FB07FD17B96A\"></a><p class=\"table-body\">Figure 13: New interface connections</p></td><td class=\"table-body\"><a name=\"GUID-D54BF0F0-2BD8-42F0-93EF-B271854A0637\"></a><p class=\"table-body\">Figure 14: Old interface connections</p></td></tr></tbody></table>\n\
<p>Within Maya, there are various exposed interfaces which accept a frame of render data. These include:</p>\n\
<ul>\n\
<li>3d viewport</li>\n\
<li>Playblast (3d viewport based)</li>\n\
<li>RenderView</li>\n\
<li>Command line rendering</li>\n\
</ul>\n\
<p>In the old system, only viewport based rendering was possible. In the current system, rendering to the RenderView window and command line (batch) rendering are also supported. For the latter, this also includes command line rendering via the playblast interface.</p>\n\
<p>The previous notion that the <strong>3d viewport is the renderer</strong> no longer holds true. Therefore, the assumption of a dependence on access to viewports has been removed. Instead the appropriate information is provided in a non-viewport dependent context as required. There are various options available for each interface. For example, render globals options provide context for command line rendering. As much as possible, an aggregate of all options, whether interactive or not is taken and presented as context data or options. As the renderer is no longer a 3d viewport, these implicit assumptions are also no longer true:</p>\n\
<ol>\n\
<li>A 3d viewport always exists: It is not possible to totally prevent a plug-in from attempting to access a 3d viewport, but plug-ins should be able to handle the situation where one does not exist.</li>\n\
<li>Idle refresh always forces the appropriate updates: Idle refresh should not be considered to be the only driver for renders anymore. As such, plug-ins should not rely on that mechanism to force the required scene updates to occur.</li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";