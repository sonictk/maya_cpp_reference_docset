var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Loading Plug-ins Into Maya</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Loading Plug-ins Into Maya</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"loading-plug-ins-into-maya\"></a></div>\n\
<p>If you set the <span class=\'code\'>MAYA_PLUG_IN_PATH</span> in your <span class=\'code\'>Maya.env</span> file as described in <a href=\'#!/url=./developer/Setting-up-your-build.html\' title=\'\'>Setting up your build environment</a>, plug-ins in the top-level of that directory will be loaded into Maya automatically. However, plug-ins that are not in that directory&#39;s top-level will need to be loaded manually.</p>\n\
<p>To load a plug-in into Maya,</p>\n\
<ol>\n\
<li><p>Open the Plug-in Manager. Click on <strong>Windows &gt; Settings/Preferences &gt; Plug-in Manager</strong> to open the Plug-in Manager.</p>\n\
<div class=\'figure\'><img src=\'developer/images/SelectPlugInManagerFromMenu.png\' title=\'alt text\'></div></li>\n\
<li><p>Click on <strong>Browse</strong> in the Plug-in Manager.</p>\n\
<div class=\'figure\'><img src=\'developer/images/PlugInManagerBrowseWindows.png\' title=\'alt text\'></div></li>\n\
<li><p>Navigate to the location of the plug-in and double-click on it.</p>\n\
<p>On Windows, samples are built to the <span class=\'code\'>build\\Debug\\</span> directory under the sample name. Windows plug-ins have the <span class=\'code\'>mll</span> suffix. For example, to load the Windows circleNode plug-in, navigate to <span class=\'code\'>circleNode\\build\\Debug\\</span> and select <span class=\'code\'>circleNode.mll</span>.</p>\n\
<div class=\'figure\'><img src=\'developer/images/PlugInManagerLoadWindows.png\' title=\'alt text\'></div>\n\
<p>On Linux, samples are built to the <span class=\'code\'>build</span> directory under the sample name. Linux plug-ins have the <span class=\'code\'>so</span> suffix. For example, to load the Linux circleNode plug-in, navigate <span class=\'code\'>circleNode/build/</span> and select <span class=\'code\'>circleNode.so</span>.</p>\n\
<div class=\'figure\'><img src=\'developer/images/PlugInManagerLoadLinux.png\' title=\'alt text\'></div>\n\
<p>On MacOS, samples are built to <span class=\'code\'>build/Debug/</span> if they were built with XCode. Otherwise, the sample plug-in will be located in the top level of the <span class=\'code\'>build</span> directory. MacOS plug-ins have the <span class=\'code\'>bundle</span> suffix. For example, to load the MacOS circleNode plug-in built with Xcode, navigate to <span class=\'code\'>circleNode/build/Debug/</span> and select <span class=\'code\'>circleNode.bundle</span>.</p>\n\
<div class=\'figure\'><img src=\'developer/images/PlugInManagerLoadMac.png\' title=\'alt text\'></div></li>\n\
<li><p>Plug-ins added manually will not be loaded into Maya automatically. They need to be reloaded into Maya every time Maya restarts.</p></li>\n\
</ol>\n\
<p>If you want your plug-in to be loaded automatically, select its <strong>Auto load</strong> option.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">![alt text](images/PlugInManagerInfoSelectAutoLoad.png)\n\
</pre></div><ol>\n\
<li>To find out how to use the plug-in, click on the plug-in&#39;s <strong>i</strong> icon in Plug-in Manager.</li>\n\
</ol>\n\
<div class=\'figure\'><img src=\'developer/images/PlugInManagerInfoButton.png\' title=\'alt text\'></div>\n\
<p>This will bring up the plug-in&#39;s information, including whether it is a dependency graph node or a command, and for which version of the API it was built.</p>\n\
<blockquote>\n\
<p><strong>Important:</strong> Plug-ins need to be rebuilt for each new version of Maya and its API.</p>\n\
</blockquote>\n\
<div class=\'figure\'><img src=\'developer/images/PlugInInfo.png\' title=\'alt text\'></div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";