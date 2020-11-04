var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Getting started with .NET API</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Getting started with .NET API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"getting-started-with-.net-api\"></a></div>\n\
<p>The Maya .NET API is a system that allows developers to create plug-ins and extensions for Maya using Microsoft’s .NET technology. It includes the following features:</p>\n\
<ul>\n\
<li>A system for loading plug-in code from .NET assemblies</li>\n\
<li>.NET assemblies that plug-in writers can import to access the Maya SDK from .NET languages</li>\n\
<li>Services for embedding WPF/XAML windows into Maya’s QT system</li>\n\
<li>Examples written in C# for demonstrating the usage of the system</li>\n\
</ul>\n\
<p>The Maya .NET API is similar to the Maya Python API in that it is generated from the Maya C++ API. Most classes in the .NET API have a corresponding class in the C++ API with the same name and with a similar interface (that is, a set of functions and classes).</p>\n\
<p>C# classes are proxies for C++ classes.</p>\n\
<p>The system provides the following advantages:</p>\n\
<ul>\n\
<li>Allow plug-in writers to accelerate their development of plug-ins by enabling the use of modern tools such as C# and .NET SDKs. The Maya SDK is provided in an idiomatic style for .NET programmers.</li>\n\
<li>Allow developers to better integrate their existing custom pipeline tools with Maya, and allow artists to have access to critical production tools inside of their content creation environment.</li>\n\
<li>Allow developers to re-use their existing investment in .NET code and WPF/XAML user interfaces by referencing their assemblies into their Maya plug-ins.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"requirements\"></a><h2 id=\"requirements\">Requirements</h2></div>\n\
<p>The .NET SDK is installed with Maya as of Extension 2 for Maya 2013. The .NET bindings do not work with any other version of Maya (including Maya 2013).</p>\n\
<p>The Maya .NET API uses the .NET 4.5 Framework and is compatible with .NET 4.0 Framework.</p>\n\
<p>It is recommended that you use .NET Framework 4.5 and Microsoft Visual Studio 2012 to compile the examples. However, you can still use .NET Framework 4.0 and Visual Studio 2010 to create a solution and compile the examples.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> In this chapter, the path prefix &lt;...&gt; denotes your Maya install directory.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"net-sdk-files\"></a><h2 id=\"net-sdk-files\">.NET SDK Files</h2></div>\n\
<p>The Maya .NET SDK constitutes the following files:</p>\n\
<ul>\n\
<li>In the <span class=\'code\'>&lt;...&gt;\\bin</span> folder:\n\
<ul>\n\
<li><span class=\'code\'>openmayacs.dll</span> / <span class=\'code\'>swigfiles.dll</span> – The .NET SDK class libraries</li>\n\
<li><span class=\'code\'>openmayacs.xml</span> - The Visual Studio XML documentation</li>\n\
</ul></li>\n\
<li><p>In the <span class=\'code\'>devkit\\dotnet</span> folder of your Developer Kit installation:</p>\n\
<ul>\n\
<li>C# examples files, compiled through provided solutions: <span class=\'code\'>examples.sln</span> and <span class=\'code\'>wpfexamples.sln</span>.</li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> The Developer Kit is available from the <a href=\'https://www.autodesk.com/developmaya\' title=\'\' target=\'_blank\'>Autodesk Developer Network</a>. See <a href=\'#!/url=./dev_help/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Setting up your build environment: Windows environment (64-bit)</a> for more information.</p>\n\
</blockquote></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"visual-studio-integrated-documentation\"></a><h2 id=\"visual-studio-integrated-documentation\">Visual Studio integrated documentation</h2></div>\n\
<p>In addition to using the Maya API C++ reference documentation, the Maya .NET API ships with Visual Studio integrated documentation generated from the C++ reference documentation. This enables:</p>\n\
<ul>\n\
<li>Tool tips</li>\n\
<li>Comments in the auto-generated code files when using <em>go to definition</em> (F12).</li>\n\
<li>Help in object browser</li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> You can also obtain a <span class=\'code\'>.chm</span> of the .NET reference documentation at <a href=\'http://www.autodesk.com/me-sdk-docs\' title=\'\' target=\'_blank\'>http://www.autodesk.com/me-sdk-docs</a>.</p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";