var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry Update</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Geometry Update</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"geometry-update\"></a></div>\n\
<p>For renderable objects which correspond to Maya objects, an update implies some form of evaluation within Maya. This may be a DAG or DG evaluation depending on the situation.</p>\n\
<p>A formal set of rules has been created for update and reflected in the API. Following these rules ensures a plug-in can take advantage of all features and benefits provided by the new rendering framework.</p>\n\
<p>An update can be roughly broken down into the following steps:</p>\n\
<ol>\n\
<li>Performing Maya DG node or DAG object evaluation.</li>\n\
<li>Performing non-node and non-object update.</li>\n\
<li>Updating the appropriate data on render items.</li>\n\
</ol>\n\
<p>Ideally each step caches sufficient information for the next step to occur. Steps should be independent of one another without any assumption as to when they may be called and notably what thread they may be executing in.</p>\n\
<p>The data itself must conform to a geometric data specification which will be described in greater detail in later sec­tions. The data may either reside in CPU or GPU (video card) memory. For the most part, plug-ins which are associ­ated with DAG objects are responsible for providing CPU data, while plug-ins associated with rendering use GPU data. There are various use cases which will be explained in later sections. The main difference for plug-ins which previously dealt solely with CPU data is that data can now reside on the GPU. Thus, more care must be taken when dealing with certain operations (such as data read-back) which may now have a much higher performance penalty.</p>\n\
<p>Another low level difference for those accustomed to “immediate mode” rendering is that such a concept is no longer exposed, and is now a discouraged method for drawing. All data is retained.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";