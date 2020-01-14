var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Overview of Maya&#39;s Qt UI</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Overview of Maya&#39;s Qt UI</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"overview-of-mayas-qt-ui\"></a></div>\n\
<p>Maya&#39;s user interface (UI) is built using MEL and Python commands which create UI elements such as buttons and input fields using a combination of custom and native widgets.</p>\n\
<p>Prior to Maya 2011, those widgets were implemented using platform-specific toolkits such as Motif on Linux and Carbon on OS X. From Maya 2011 onward, the widgets are implemented using Digia&#39;s Qt toolkit on all platforms.</p>\n\
<p>For most developers the use of Qt is fairly transparent. Changes in the sizes of some controls may require the tweaking of pre-2011 scripts, and new capabilities such as dockable UI elements provide greater flexibility in UI design. In addition, the <span class=\'code\'>loadUI</span> command provides a way to use Qt&#39;s Designer tool to create Maya UI.</p>\n\
<p>While Maya&#39;s UI commands should be sufficient to meet the most common of developers&#39; UI needs, more demanding interfaces may require lower-level access to the underlying toolkit. In these situations, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> class provides the essential link between the names by which UI elements are recognized in Maya scripts and their underlying Qt widgets.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> As an alternative, PySide can be used in lieu of PyQt to create Qt widgets in Maya, and is available as part of the Qt distribution. For more information, see <a href=\'#!/url=./dev_help/Maya-Python-API/Working-with-PySide-in-Maya.html\' title=\'\'>Working with PySide in Maya</a>.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";