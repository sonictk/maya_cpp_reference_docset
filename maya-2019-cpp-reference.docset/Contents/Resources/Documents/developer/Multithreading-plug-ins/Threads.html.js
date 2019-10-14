var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Threads</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Threads</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"threads\"></a></div>\n\
<p>This following describes the lowest level threading concepts. An understanding of these concepts is essential for any developer working with threaded code.</p>\n\
<div class=\'section\'><a id=\"what-is-a-thread\"></a><h2 id=\"what-is-a-thread\">What is a thread?</h2></div>\n\
<p>A thread is a new execution space, created and managed by the operating system, which contains the following resources that are private to the thread:</p>\n\
<ul>\n\
<li>A new stack</li>\n\
<li>A copy of the processor registers</li>\n\
<li>An instruction pointer to the first instruction to be executed.</li>\n\
</ul>\n\
<p>Threads do not duplicate the following resources, which remain process global and visible to all threads:</p>\n\
<ul>\n\
<li>Code</li>\n\
<li>Data created prior to thread launch</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"os-specific-threading-libraries\"></a><h2 id=\"os-specific-threading-libraries\">OS-specific threading libraries</h2></div>\n\
<p>These are the lowest level threading implementations available to a user on an operating system. Maya uses the following threading libraries:</p>\n\
<ul>\n\
<li>Windows: Win32 threads</li>\n\
<li>Linux: pthreads</li>\n\
<li>Mac OS X: pthreads</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"thread-management\"></a><h2 id=\"thread-management\">Thread management</h2></div>\n\
<p>Thread creation is a relatively expensive operation; therefore, it is often useful to create threads at the beginning of an application and keep them alive but sleeping in a <strong>thread pool</strong>. Threads can be activated, run and put back to sleep in the pool at a much lower overhead than continually creating new threads when required.</p>\n\
<div class=\'section\'><a id=\"thread-properties\"></a><h2 id=\"thread-properties\">Thread properties</h2></div>\n\
<p>Individual threads have properties that can be controlled by the user. For example, thread <strong>priority</strong> determines how a thread is scheduled by the OS. A thread with higher priority will be given preference by the OS scheduler.</p>\n\
<p>Thread <strong>affinity</strong> defines what physical processor the thread runs on. Sometimes it might be useful to bind a thread to a core so behavior is more deterministic. However, usually OS providers recommend allowing the OS to manage processor affinity rather than have the user do so.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";