var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Loading .NET plug-ins</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Loading .NET plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"loading-.net-plug-ins\"></a></div>\n\
<p>To be considered by Maya, a .NET plug-in assembly must have the extension <span class=\'code\'>.nll.dll</span>; for example, <span class=\'code\'>myplugin.nll.dll</span>. These DLLs must appear in the Maya plug-in path, which is defined by the Maya environment variable (MAYA_PLUG_IN_PATH). By default, this value is <span class=\'code\'>&lt;…&gt;\\bin\\plug-ins</span>. Load .NET plug-ins like any other type of plug-in, via the Plug-in Manager (select Window &gt; Settings/Preferences &gt; Plug-in Manager) or via script.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> This environment variable is set by Maya. Use the MEL command <span class=\'code\'>getenv MAYA_PLUG_IN_PATH</span> in the Maya Script Editor to obtain its value.</p>\n\
</blockquote>\n\
<p>Important: .NET plug-ins cannot be loaded by versions of Maya prior to Extension 2 for Maya 2013.</p>\n\
<p>To allow Maya to discover your compiled plug-in, you can do either of the following:</p>\n\
<ul>\n\
<li>Place the target plug-in assembly (for example, <span class=\'code\'>examples.nll.dll</span>) into your MAYA_PLUG_IN_PATH or <span class=\'code\'>&lt;…&gt;\\bin\\plug-ins</span>; or</li>\n\
<li><p>Add your plug-in assembly directory to the MAYA_PLUG_IN_PATH environment variable.</p>\n\
<blockquote>\n\
<p>**<a href=\'#!/url=./developer/Maya-NET-API/Tip:**/\' title=\'\'>Tip:**</a> If you are using the Browse button in the Plug-in Manager to load your plug-in, you must set Files of type to All Files (instead of Plug-in Files) in the Load Plugin browser window to see your <span class=\'code\'>.nll.dll</span> plug-ins.</p>\n\
</blockquote></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";