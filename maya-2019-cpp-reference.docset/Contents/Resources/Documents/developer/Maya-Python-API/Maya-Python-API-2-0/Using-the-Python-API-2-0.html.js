var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Using the Python API 2.0</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Using the Python API 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"using-the-python-api-2.0\"></a></div>\n\
<div class=\'section\'><a id=\"using-the-python-api-2.0-1\"></a><h2 id=\"using-the-python-api-2.0-1\">Using the Python API 2.0</h2></div>\n\
<p>The new Python API modules are found in <span class=\'code\'>maya.api</span>. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.api.OpenMaya as om\n\
</pre></div><p>Module names are the same as in the old API with the exception that the proxy classes (i.e. those beginning with <em>MPx</em>) no longer have their own module but reside in the same modules as other related classes. This more closely resembles the C++ API.</p>\n\
<p>Class names are the same as in the old Python API and the C++ API. Method names are mostly the same with some differences where it affects the workflow. Some methods which simply get or set values on an object have been replaced with Python object attributes.</p>\n\
<p>New and old API classes can be used within the same script, but their objects are not interchangeable. Thus, you can do this:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.api.OpenMaya as newOM\n\
import maya.OpenMaya as oldOM\n\
\n\
newAttrObj = newOM.MObject()\n\
oldNodeObj = oldOM.MObject()\n\
\n\
#...\n\
\n\
newAttrFn = newOM.MFnAttribute(newAttrObj)\n\
oldNodeFn = oldOM.MFnDependencyNode(oldNodeObj)\n\
    \n\
# OKAY: Print names from old and new function sets.\n\
print(&quot;Attribute name is %s.%s&quot; % (oldNodeFn.name(), newAttrFn.name))\n\
</pre></div><p>but not this:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.api.OpenMaya as newOM\n\
import maya.OpenMaya as oldOM\n\
\n\
newAttrObj = newOM.MObject()\n\
oldNodeObj = oldOM.MObject()\n\
\n\
#...\n\
\n\
# BAD: Passing an old API <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a> to a new API method.\n\
newPlug = newOM.MPlug(oldNodeObj, newAttrObj)\n\
</pre></div><p>Given that the class and method names are mostly identical between the two APIs there is a lot of potential for confusion so it&#39;s best not to mix them if you can avoid it.</p>\n\
<p>When writing a plugin which uses the new API, the plugin must define a function called maya_useNewAPI so that Maya will know to pass it objects from the new API rather than the old one. E.g:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def maya_useNewAPI():\n\
    pass\n\
</pre></div><p>We encourage users to provide feedback on this new Python API through the online Suggestion site available from the Maya Help Menu and through the Autodesk Developer Network.</p>\n\
<p>For information on the Python 2.0 Class list, consult the Maya Python API 2.0 Reference.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";