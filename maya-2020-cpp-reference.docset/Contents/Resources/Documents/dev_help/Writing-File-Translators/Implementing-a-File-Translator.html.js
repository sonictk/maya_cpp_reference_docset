var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Implementing a File Translator</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Implementing a File Translator</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"implementing-a-file-translator\"></a></div>\n\
<p>When creating a file translator, you must derive from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator</a></span> class and consider which types of methods are required for your translator.</p>\n\
<p>You need to define certain methods of the class if your translator is an importer or exporter or both. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator::canBeOpened()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html#a21cb60f2121ebce3f21367325c940fbc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator::canBeOpened()</a></span> method is very important as it determines if the translator can open files. If the translator is only used for import, then set the method to return <span class=\'code\'>false</span>. Otherwise, the <span class=\'code\'>canBeOpened()</span> method should return <span class=\'code\'>true</span> for exporters.</p>\n\
<p>To implement an importer, you must include the <span class=\'code\'>haveReadMethod()</span> and <span class=\'code\'>reader()</span> methods. These two methods determine if the file being imported is readable by your translator.</p>\n\
<p>For an exporter, you need to include the <span class=\'code\'>haveWriteMethod()</span> and <span class=\'code\'>writer()</span> methods. These two methods allow you to save the file in a type supported by your translator. These methods are described in more detail later in this documentation.</p>\n\
<p>Finally, you must decide on the extension name for your file type.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";