var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMaya.MModelMessage Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"Python\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(py_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'py_ref/\'; }\n\
function py_ref_initializeToc(forceTrigger) {\n\
    py_ref_adsk_ref_toc.initResizable();\n\
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_model_message.html\', tocPrefix);\n\
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
	  $(document).ready(py_ref_initializeToc);\n\
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
        var width = py_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { py_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>OpenMaya.MModelMessage Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">OpenMaya.MModelMessage Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_1_1_m_model_message.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_model_message.html#pub-static-attribs\">Static Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Class used to register callbacks for model related messages.The class also provides the following Message constants which\n\
describe the different types supported by the addCallback method:\n\
  kActiveListModified           #active selection changes\n\
\n\
Method resolution order:\n\
-   MModelMessage\n\
-   MMessage\n\
-   __builtin__.object</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMaya.MModelMessage:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_1_1_m_model_message.png\" usemap=\"#OpenMaya.MModelMessage_map\" alt=\"\">\n\
  <map id=\"OpenMaya.MModelMessage_map\" name=\"OpenMaya.MModelMessage_map\">\n\
<area href=\"class_open_maya_1_1_m_message.html\" alt=\"OpenMaya.MMessage\" shape=\"rect\" coords=\"0,56,176,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a807dae4a9d61c5c6b06469e1eee1153b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_model_message.html#a807dae4a9d61c5c6b06469e1eee1153b\">addAfterDuplicateCallback</a> ()</td></tr>\n\
<tr class=\"separator:a807dae4a9d61c5c6b06469e1eee1153b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac48c9c38cf17f52144d370d201a87083\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_model_message.html#ac48c9c38cf17f52144d370d201a87083\">addBeforeDuplicateCallback</a> ()</td></tr>\n\
<tr class=\"separator:ac48c9c38cf17f52144d370d201a87083\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3c2514562a7897b7b928e546ef1c2eba\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_model_message.html#a3c2514562a7897b7b928e546ef1c2eba\">addCallback</a> ()</td></tr>\n\
<tr class=\"separator:a3c2514562a7897b7b928e546ef1c2eba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7c8aec77541fa35d2ae0c51c2de0d50b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_model_message.html#a7c8aec77541fa35d2ae0c51c2de0d50b\">addNodeAddedToModelCallback</a> ()</td></tr>\n\
<tr class=\"separator:a7c8aec77541fa35d2ae0c51c2de0d50b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a249f250e6eee1afe671d750488d61169\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_model_message.html#a249f250e6eee1afe671d750488d61169\">addNodeRemovedFromModelCallback</a> ()</td></tr>\n\
<tr class=\"separator:a249f250e6eee1afe671d750488d61169\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_open_maya_1_1_m_message\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_open_maya_1_1_m_message\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html\">OpenMaya.MMessage</a></td></tr>\n\
<tr class=\"memitem:ab740e0787118e291333d48bcd9a5f3ad inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#ab740e0787118e291333d48bcd9a5f3ad\">currentCallbackId</a> ()</td></tr>\n\
<tr class=\"separator:ab740e0787118e291333d48bcd9a5f3ad inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a256cc9181fe7c42d43962bf4f263cac2 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#a256cc9181fe7c42d43962bf4f263cac2\">nodeCallbacks</a> ()</td></tr>\n\
<tr class=\"separator:a256cc9181fe7c42d43962bf4f263cac2 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a455112627bc2e87864311b422052d8b5 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#a455112627bc2e87864311b422052d8b5\">removeCallback</a> ()</td></tr>\n\
<tr class=\"separator:a455112627bc2e87864311b422052d8b5 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab7bfb50ac5103789febe385b2c14e369 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html#ab7bfb50ac5103789febe385b2c14e369\">removeCallbacks</a> ()</td></tr>\n\
<tr class=\"separator:ab7bfb50ac5103789febe385b2c14e369 inherit pub_static_methods_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a4b40be953c2c6a52e9f279d512c12fa4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4b40be953c2c6a52e9f279d512c12fa4\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kActiveListModified</b> = 0</td></tr>\n\
<tr class=\"separator:a4b40be953c2c6a52e9f279d512c12fa4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_static_attribs_class_open_maya_1_1_m_message\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_attribs_class_open_maya_1_1_m_message\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Static Public Attributes inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_message.html\">OpenMaya.MMessage</a></td></tr>\n\
<tr class=\"memitem:af55629450d35743eb5e1b1a927c7ef78 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af55629450d35743eb5e1b1a927c7ef78\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kDefaultAction</b> = 0</td></tr>\n\
<tr class=\"separator:af55629450d35743eb5e1b1a927c7ef78 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0751e1e868eb02ccc70a59069cfe8148 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0751e1e868eb02ccc70a59069cfe8148\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kDoAction</b> = 2</td></tr>\n\
<tr class=\"separator:a0751e1e868eb02ccc70a59069cfe8148 inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a865256db9dce5a07f0c2f3679f7ccc1b inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a865256db9dce5a07f0c2f3679f7ccc1b\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kDoNotDoAction</b> = 1</td></tr>\n\
<tr class=\"separator:a865256db9dce5a07f0c2f3679f7ccc1b inherit pub_static_attribs_class_open_maya_1_1_m_message\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a807dae4a9d61c5c6b06469e1eee1153b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MModelMessage.addAfterDuplicateCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">addAfterDuplicateCallback(function, clientData=None) -&gt; id\n\
\n\
This method registers a callback that is called after a duplicate\n\
command is made. The callback will be called after everything is\n\
duplicated.\n\
\n\
 * function - callable which will be passed the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac48c9c38cf17f52144d370d201a87083\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MModelMessage.addBeforeDuplicateCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">addBeforeDuplicateCallback(function, clientData=None) -&gt; id\n\
\n\
This method registers a callback that is called whenever a duplicate\n\
command is made. The callback will be called before anything is\n\
duplicated.\n\
\n\
 * function - callable which will be passed the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3c2514562a7897b7b928e546ef1c2eba\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MModelMessage.addCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">addCallback(message, function, clientData=None) -&gt; id\n\
\n\
Adds a new callback for the specified model message.\n\
\n\
\n\
 * message (Message constant, see class doc for a list) - the model\n\
   message that will trigger the callback\n\
 * function - callable which will be passed the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7c8aec77541fa35d2ae0c51c2de0d50b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MModelMessage.addNodeAddedToModelCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">addNodeAddedToModelCallback(dagNode, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback that is called when a dag node is about\n\
to be added to the Maya model.\n\
\n\
 * dagNode (MObject) - Node that should acquire the callback\n\
 * function - callable which will be passed a MObject indicating\n\
   the node being added to the model and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a249f250e6eee1afe671d750488d61169\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MModelMessage.addNodeRemovedFromModelCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">addNodeRemovedFromModelCallback(dagNode, function, clientData=None) -&gt; id\n\
\n\
This method registers a callback that is called when the\n\
specified dag node is being removed from the Maya model.\n\
\n\
 * dagNode (MObject) - Node that should acquire the callback\n\
 * function - callable which will be passed a MObject indicating\n\
   the node being removed to the model and the clientData object\n\
 * clientData - User defined data passed to the callback function\n\
\n\
 * return: Identifier used for removing the callback.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";