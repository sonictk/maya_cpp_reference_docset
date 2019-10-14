var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Third party tools</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Third party tools</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"third-party-tools\"></a></div>\n\
<div class=\'section\'><a id=\"threading-analysis-tools\"></a><h2 id=\"threading-analysis-tools\">Threading Analysis tools</h2></div>\n\
<div class=\'section\'><a id=\"intel-threadchecker\"></a><h3 id=\"intel-threadchecker\">Intel ThreadChecker</h3></div>\n\
<p>This is a very useful tool that catches actual and potential race conditions in traversed code paths. It requires instrumentation and slows down runtimes significantly. It is available on both Windows and Linux.</p>\n\
<div class=\'section\'><a id=\"intel-threadprofiler\"></a><h3 id=\"intel-threadprofiler\">Intel ThreadProfiler</h3></div>\n\
<p>This tool presents a view of thread usage during runtime, showing starts and ends of threaded regions, regions of oversubscription and undersubscription. It works with both native threads and OpenMP, on Windows and Linux.</p>\n\
<div class=\'section\'><a id=\"helgrind\"></a><h3 id=\"helgrind\">Helgrind</h3></div>\n\
<p>A Linux open source threading analysis tool that checks for race conditions in code.</p>\n\
<div class=\'section\'><a id=\"intel-compiler\"></a><h3 id=\"intel-compiler\">Intel compiler</h3></div>\n\
<p>Although this might not seem like a threading analysis tool, the Intel compiler does support two very useful compiler warning flags to detect writes or potential writes to static variables, which are a common threading problem:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">warning #1711: assignment to statically allocated variable\n\
warning #1712: address taken of statically allocated variable\n\
\n\
</pre></div><p>These warnings are enabled as -ww1711 on OSX and Linux, and /Qww1711 on Windows.</p>\n\
<div class=\'section\'><a id=\"profiling-tools\"></a><h2 id=\"profiling-tools\">Profiling tools</h2></div>\n\
<div class=\'section\'><a id=\"shark\"></a><h3 id=\"shark\">Shark</h3></div>\n\
<p>Profiler on OSX. Shark is supplied with CHUD tools as a free optional install.</p>\n\
<div class=\'section\'><a id=\"zoom\"></a><h3 id=\"zoom\">Zoom</h3></div>\n\
<p>Statistical call graph profiler that runs on Linux. See <a href=\'http://rotateright.com/\' title=\'\' target=\'_blank\'>http://rotateright.com/</a></p>\n\
<div class=\'section\'><a id=\"intel-ptu\"></a><h3 id=\"intel-ptu\">Intel PTU</h3></div>\n\
<p>Prototype statistical call graph tool, somewhat similar to Shark, available from <a href=\'http://whatif.intel.com\' title=\'\' target=\'_blank\'>http://whatif.intel.com</a> .Requires an existing VTune license. Runs on Windows and Linux.</p>\n\
<div class=\'section\'><a id=\"vtune\"></a><h3 id=\"vtune\">VTune</h3></div>\n\
<p>Heavyweight profiler from Intel. Call-graphing adds significant overhead in instrumentation and runtime. Available on Windows and Linux.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";