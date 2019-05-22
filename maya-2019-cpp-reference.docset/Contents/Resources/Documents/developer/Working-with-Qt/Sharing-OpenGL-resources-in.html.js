var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Sharing OpenGL resources in QGLWidgets with Viewport 2.0</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Sharing OpenGL resources in QGLWidgets with Viewport 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"sharing-opengl-resources-in-qglwidgets-with-viewport-2.0\"></a></div>\n\
<div class=\'figure\'><img src=\'developer/images/Updated%20_Odd-to-Even.png\' title=\'\'></div>\n\
<p>You can directly access a QGLWidget whose context is shared with other Viewport 2.0 resources. This is useful in the case when your plug-in creates OpenGL resources for it&#39;s own QGLWidget and you want it to share the plug-in&#39;s OpenGL resources with Viewport 2.0.</p>\n\
<div class=\'section\'><a id=\"using-python\"></a><h2 id=\"using-python\">Using Python</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import PySide2\n\
import PySide2.QtOpenGL\n\
import PySide2.QtWidgets\n\
import shiboken2\n\
# Get the property from the application (as a QWidget)\n\
widget = QtWidgets.qApp.property(&quot;mayaSharedQGLWidget&quot;)\n\
# Get the raw C++ pointer\n\
ptr = long(shiboken2.getCppPointer(widget)[0])\n\
# Downcast to QGLWidget\n\
glWidget = shiboken2.wrapInstance(ptr, PySide2.QtOpenGL.QGLWidget)\n\
# Print the format of the current rendering context\n\
print glWidget.format()\n\
</pre></div><div class=\'section\'><a id=\"using-c\"></a><h2 id=\"using-c\">Using C++</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">QVariant v = qApp-&gt;property(&quot;mayaSharedQGLWidget&quot;);\n\
if (v.isValid())\n\
{\n\
            QGLWidget glWidget = dynamic_cast&lt;QGLWidget*&gt;(v.value&lt;QWidget*&gt;());\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";