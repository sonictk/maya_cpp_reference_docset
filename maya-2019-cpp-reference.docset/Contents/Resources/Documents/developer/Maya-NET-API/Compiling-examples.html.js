var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Compiling examples</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Compiling examples</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"compiling-examples\"></a></div>\n\
<p>Many of the C++ plug-in examples from the Maya <span class=\'code\'>devkit</span> folder have been ported to C#. You can find example files in the <span class=\'code\'>devkit\\dotnet</span> folder of your Developer Kit installation. (See <a href=\'#!/url=./developer/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Setting up your build environment: Windows environment (64-bit)</a>.) The <span class=\'code\'>examples.sln</span> and <span class=\'code\'>wpfexamples.sln</span> solution files are provided. Each solution consists of one project.</p>\n\
<p>One example not ported originally from C++ is the DAGExplorer example under the <span class=\'code\'>devkit\\dotnet\\wpfexamples</span> folder of your Developer Kit installation. This example demonstrates several features of the .NET API including:</p>\n\
<ul>\n\
<li>Using LINQ (Language Integrated Natural Query) to enumerate the Maya DAG.</li>\n\
<li>Using WPF and <span class=\'code\'>MDockStation</span> to create a dockable GUI element</li>\n\
<li>Dynamic C# compilation</li>\n\
<li>Using the WPF 3D viewer control</li>\n\
</ul>\n\
<p>Compiling the examples</p>\n\
<ul>\n\
<li><p>\\[Recommended\\] Copy <span class=\'code\'>devkit\\dotnet</span> into a working folder.</p>\n\
<p>This step is not mandatory, but it is advisable to retain a copy of the original project files.</p></li>\n\
<li><p>Compile the solution.</p>\n\
<p>Each example solution consists of one project each, and generates an assembly with extension <span class=\'code\'>.nll.dll</span>. After compiling, Visual Studio creates a <span class=\'code\'>$(SolutionDir)assemblies</span> folder, and copies the target to this folder.</p></li>\n\
</ul>\n\
<blockquote>\n\
<p>**<a href=\'#!/url=./developer/Maya-NET-API/Tip:**/\' title=\'\'>Tip:**</a> Many of the C# examples are ported from Maya’s C++ examples. You can refer to the equivalent C++ examples in this guide.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";