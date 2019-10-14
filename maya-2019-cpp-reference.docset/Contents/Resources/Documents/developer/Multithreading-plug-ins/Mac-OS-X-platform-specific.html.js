var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Mac OS X platform specific pthreads issues</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Mac OS X platform specific pthreads issues</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"mac-os-x-platform-specific-pthreads-issues\"></a></div>\n\
<p>Although the Mac OSX pthreads implementation complies with the POSIX standard, it does not include all the pthreads and associated functionality available on Linux. Functions that are not implemented are available as stubs that return error codes. This can be problematical when porting code that does not rigorously check error return codes, as the code will compile and run but may not function as expected. Here are some specific features of Linux pthreads that are not available on Mac OSX as of the Tiger release:</p>\n\
<ul>\n\
<li>Unnamed semaphores are not supported.</li>\n\
<li>Cancellation points are only <span class=\'code\'>pthread_test_cancel()</span> instead of POSIX mandatory cancellation points. So <span class=\'code\'>pthread_cancel</span> will cancel a thread only when <span class=\'code\'>pthread_test_cancel()</span> is called by that thread. (This is fixed in Leopard.)</li>\n\
<li>There is no static initializer for <span class=\'code\'>pthread_rwlock_t</span> or recursive mutex.</li>\n\
<li>Mutex priorities: <span class=\'code\'>pthread_mutex_setprioceiling</span> and <span class=\'code\'>pthread_mutex_setprotocol</span> are not supported, meaning there is no priority boosting, inheritance or ceiling support for mutexes.</li>\n\
<li><span class=\'code\'>PTHREAD_SCOPE_PROCESS</span> is not supported.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";