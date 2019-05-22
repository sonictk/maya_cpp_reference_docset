var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Introduction to Manipulators</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Introduction to Manipulators</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"introduction-to-manipulators\"></a></div>\n\
<p>The topics in this section describe the API classes and interfaces used to write manipulators in the Legacy Default Viewport. For information on how to draw manipulators in Viewport 2.0, see <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Manipulators-1.html\' title=\'\'>3.10 Manipulators</a>.</p>\n\
<p>A manipulator is a node that draws itself using 3D graphical elements, which respond to user events. Manipulators translate the user events into values that are used for modifying the attribute values of other nodes in a scene.</p>\n\
<p>The attribute values of a node can be changed through ways such as the Channel Box and Graph Editor, but manipulators provide a more intuitive way for changing attribute values. The manipulator translates modifications to the visual controls into values that are applied directly to the node attributes. Unlike the other dependency graph nodes, a manipulator modifies the attribute values directly and not through the standard plug and connection mechanism.</p>\n\
<p>Manipulators can also be used as an interactive tool to manipulate objects or custom nodes in a scene. Using custom manipulators, you can create different types of custom tools such as modeling or rigging tools.</p>\n\
<p>You can use manipulators in the following ways:</p>\n\
<ul>\n\
<li>Create a manipulator on any node in the current scene at any time.</li>\n\
<li>Create and assign a manipulator for a specific type of object.</li>\n\
<li>Create a context tool and associate the manipulator to the context tool. Whenever the context tool is active, the manipulator becomes active and ready for use.</li>\n\
</ul>\n\
<p>Note: Manipulators are only active when the Show Manipulator Tool or the associated context is active, and the corresponding object is selected.</p>\n\
<p>Manipulators are not visible in the Hypergraph or Outliner even though they are nodes and they are not added to the Maya selection list. Additionally, their attributes are not accessible from MEL or the Attribute Editor and they are not written to file.</p>\n\
<p>Manipulators can operate on data types that range from integer and floating point values to matrix data and they can operate on one or more attribute values at the same time.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";