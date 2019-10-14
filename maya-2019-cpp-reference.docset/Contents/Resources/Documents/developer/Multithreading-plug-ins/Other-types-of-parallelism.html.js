var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Other types of parallelism</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Other types of parallelism</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"other-types-of-parallelism\"></a></div>\n\
<div class=\'section\'><a id=\"vectorization\"></a><h2 id=\"vectorization\">Vectorization</h2></div>\n\
<p>Vector SSE instructions allow multiple identical operations to be done in parallel on adjacent data values. Four floating point operations or two double precision operations may be executed at the same time on processors supporting SSE2. Maya requires system support for SSE2, so the plug-in writer may assume SSE2 is always available.</p>\n\
<p>SSE2 code can either be written directly in assembler, written using compiler intrinsics, or code can be written in C/C++ and the compiler can generate vector instructions. If the compiler generates vector SSE the process is known as autovectorization. The Intel and gcc compilers support autovectorization, but VC++ currently does not. Obviously it is much easier to write high level code and have the compiler generate vector instructions. However autovectorizers can be finicky and small changes can cause vectorization to disappear, so code written in C/C++ that relies on the autovectorizer needs to be flagged to ensure developers do not modify it and unwittingly disable the vectorization.</p>\n\
<p>The supplied plug-in <span class=\'code\'>sseDeformer</span> shows a simple example of SSE2 code that can be autovectorized by the Intel compiler. The example shows an approximate 3x speedup when run on a large polygonal mesh. Note that there can be significant overhead in getting the data into the correct format, which can sometimes negate any derived performance benefits. Also note that traditional threading of this code would be unlikely to be beneficial as the cost of the threading overhead might outweigh the savings from threading. Vectorization can be a good alternative in such cases. In the ideal case both vectorization and threading would be applied to derive maximum possible speedups.</p>\n\
<div class=\'section\'><a id=\"autoparallelism\"></a><h2 id=\"autoparallelism\">Autoparallelism</h2></div>\n\
<p>Some compilers offer flags that will cause them to attempt to parallelize code automatically. These are rarely useful, since once code gets to be significantly time consuming, it becomes too difficult for the compiler to analyze statically whether it is threadsafe.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";