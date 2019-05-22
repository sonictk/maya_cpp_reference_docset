var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Locks</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Locks</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"locks\"></a></div>\n\
<p>Locks are operators that define a region of code such that only a single thread can traverse that code at any given time. Locks are also known as mutexes (mutual exclusions), although that term can have slightly different meanings on different OS’s. A typical example is to protect multiple simultaneous write operations to a global variable from different threads. For example, if this code is called from multiple threads:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">static int val=0;\n\
LOCK;\n\
val++;\n\
UNLOCK;\n\
\n\
</pre></div><p>and the lock were not in place, two threads could attempt to modify val at the same time, both threads reading, updating and writing in separate stages, and so producing incorrect results. This is known as a race condition, and is discussed in more detail later.</p>\n\
<p>Locks may be recursive, so the same thread can acquire the same lock multiple times. However this is generally considered to be a dangerous coding practice, as failure to unlock an equal number of times can lead to hangs as the lock is never released.</p>\n\
<p>Managing locks correctly while avoiding race conditions is one of the most difficult parts of threading.</p>\n\
<div class=\'section\'><a id=\"atomic-operations\"></a><h2 id=\"atomic-operations\">Atomic operations</h2></div>\n\
<p>Modern processors are able to perform certain operations on variables atomically. This means that the operation appears to be completed in a single step when viewed from other threads of execution. As a result, such operations cannot cause race conditions and do not require locking, as there is no possibility that another thread will be able to read the value during the modification operation. On some operating systems, low level functions are provided that directly invoke these atomic operations in hardware. These operations are significantly faster than applying user locks, and should always be used when possible.</p>\n\
<div class=\'section\'><a id=\"semaphores-and-signals\"></a><h2 id=\"semaphores-and-signals\">Semaphores and signals</h2></div>\n\
<p>A semaphore is a generalization of a mutex lock. Rather than the simple boolean state of a mutex lock, a semaphore contains an internal counter. This counter is decremented each time a thread asks the semaphore for access to the locked resource, and incremented each time a thread releases the resource. If the counter reaches zero, additional threads attempting to acquire the resource will block until one of the holding threads releases the resource. So a semaphore with an initial value of 5 will allow at most 5 threads to access the resource simultaneously.</p>\n\
<div class=\'section\'><a id=\"osx-platform-specific-pthreads-issues\"></a><h2 id=\"osx-platform-specific-pthreads-issues\">OSX platform-specific pthreads issues</h2></div>\n\
<p>Although the OSX pthreads implementation complies with the POSIX standard, it does not include all the pthreads and associated functionality available on Linux. <a href=\'#!/url=./developer/Multithreading-plug-ins/Mac-OS-X-platform-specific.html\' title=\'\'>Mac OS X platform specific pthreads issues</a> provides more details, and is important for anyone working directly with pthreads on OSX.</p>\n\
<div class=\'section\'><a id=\"native-threads-usage\"></a><h2 id=\"native-threads-usage\">Native threads usage</h2></div>\n\
<p>These basic threading primitives are useful if you are working at a low level on a single platform. They are complicated to use in cross-platform applications due to the different implementations. They also require a lot of work compared with some higher level threading implementations that will be described later. However for cases where ultimate control over thread behavior is required, including operations such as priority and affinity, native threads are the best option.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";