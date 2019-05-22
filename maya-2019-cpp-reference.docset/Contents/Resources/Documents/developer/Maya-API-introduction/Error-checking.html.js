var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Error checking</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Error checking</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"error-checking\"></a></div>\n\
<p>In the examples presented so far you have not been prompted to do much error checking. This is usually fine for examples, but when producing a production plug-in you really want to check for errors.</p>\n\
<p>Most methods take an optional final argument, which is a pointer to an <a href=\'#!/url=./developer/Maya-API-introduction/MStatus-class.html\' title=\'\'><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a></span></a> variable into which the status return value is put.</p>\n\
<p>If you replace the argument parsing code with the following fragment in the helix example, the example will be checking for, and handling, most possible errors.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint lang-cpp\">// Parse the arguments.\n\
for ( i = 0; i &lt; args.length(); i++ )\n\
    if ( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>( &quot;-p&quot; ) == args.asString( i, &amp;stat )\n\
        &amp;&amp; MS::kSuccess == stat )\n\
    {\n\
        double tmp = args.asDouble( ++i, &amp;stat );\n\
        // argument can be retrieved as a double\n\
        if ( MS::kSuccess == stat )\n\
            pitch = tmp;\n\
    }\n\
    else if ( <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>( &quot;-r&quot; ) == args.asString( i, &amp;stat )\n\
        &amp;&amp; MS::kSuccess == stat )\n\
    {\n\
        double tmp = args.asDouble( ++i, &amp;stat );\n\
        // argument can be retrieved as a double\n\
        if ( MS::kSuccess == stat )\n\
            radius = tmp;\n\
    }\n\
\n\
</pre></div><p>The addition of <span class=\'code\'>&amp;stat</span> to the asString() and asDouble() methods allows you to check if the casting operation succeeds.</p>\n\
<p>For example, <span class=\'code\'>args.asString(i, &amp;stat)</span> could return <span class=\'code\'>MS::kFailure</span> if the index is greater than the number of arguments,</p>\n\
<p>or</p>\n\
<p><span class=\'code\'>args.asDouble(++i, &amp;stat)</span> could fail if the argument could not be converted to a double.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";