var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>qtAdskStyleProxy.cpp</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'qt_adsk_style_proxy_8cpp-example.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>qtAdskStyleProxy.cpp</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">qtAdskStyleProxy.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2017 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;qtAdskStyleProxy.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QStyleFactory&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QStyleOption&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/qdrawutil.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtGui/QPalette&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MQtUtil.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  qtAdskStyleProxyPlugin class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">QStyle *qtAdskStyleProxyPlugin::create(<span class=\"keyword\">const</span> QString &amp;key)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// This is the name (of the style) used to create our style proxy which we can use to</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// override much of Maya UI drawn from the style.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (key.toLower() == <span class=\"stringliteral\">&quot;qtadskstyleproxy&quot;</span>)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> qtAdskStyleProxy();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">nullptr</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  qtAdskStyleProxy class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">qtAdskStyleProxy::qtAdskStyleProxy()</div>\n\
<div class=\"line\">    <span class=\"comment\">// Our style wraps the Maya style &#39;adskdarkflatui&#39; so we can override</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// painting or other specific style behavior. The Maya style is available</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// in the plugin &#39;.../qt-plugins/styles/AdskStyle&#39;.</span></div>\n\
<div class=\"line\">    : QProxyStyle(QStyleFactory::create(QLatin1String(<span class=\"stringliteral\">&quot;adskdarkflatui&quot;</span>)))</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">QPalette qtAdskStyleProxy::standardPalette()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"comment\">// First call our base class, which will call into the internal</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// adskdarkflatui style class.</span></div>\n\
<div class=\"line\">    QPalette pal = QProxyStyle::standardPalette();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Then we can customize the palette as needed.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Make the general background a bit darker than normal Maya.</span></div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Disabled, QPalette::Window,     QColor(45,45,45));</div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Active,   QPalette::Window,     QColor(45,45,45));</div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Inactive, QPalette::Window,     QColor(45,45,45));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Active,   QPalette::WindowText, QColor(133,133,133));</div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Inactive, QPalette::WindowText, QColor(133,133,133));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Active,   QPalette::ButtonText, QColor(133,133,133));</div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Inactive, QPalette::ButtonText, QColor(133,133,133));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Active,   QPalette::Text,       QColor(133,133,133));</div>\n\
<div class=\"line\">    pal.setBrush(QPalette::Inactive, QPalette::Text,       QColor(133,133,133));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> pal;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// You can override any of the virtual methods from the base class &#39;QProxyStyle&#39;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This enables you to customize much of the look/drawing of Maya.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> qtAdskStyleProxy::drawControl(ControlElement element, <span class=\"keyword\">const</span> QStyleOption *option,</div>\n\
<div class=\"line\">                                    QPainter *painter, <span class=\"keyword\">const</span> QWidget *widget)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> QProxyStyle::drawControl(element, option, painter, widget);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> qtAdskStyleProxy::pixelMetric(PixelMetric metric, <span class=\"keyword\">const</span> QStyleOption *option, <span class=\"keyword\">const</span> QWidget *widget)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> ret = -1;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">switch</span> (metric)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> PM_MenuTearoffHeight:</div>\n\
<div class=\"line\">        <span class=\"comment\">// Maya sets this value to 16 - let&#39;s make them a bit larger</span></div>\n\
<div class=\"line\">        ret = <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_qt_util.html#a23629cfbd1337311e259f247ca81667d\">MQtUtil::dpiScale</a>(20);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">default</span>:</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (ret != -1) ? ret : QProxyStyle::pixelMetric(metric, option, widget);</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";