var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Translated version of the closestPointOnCurve.pres.mel resource file</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Translated version of the closestPointOnCurve.pres.mel resource file</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"translated-version-of-the-closestpointoncurve.pres.mel-resource-file\"></a></div>\n\
<p>The translated version of the resource file for Japanese is shown below. The closestPointOnCurve plug-in is a plug-in module, which is installed within a standard module directory structure defined along the MAYA_MODULE_PATH. The Japanese version of the <span class=\'code\'>closestPointOnCurve.pres.mel</span> file is placed in the <span class=\'code\'>resources/ja_JP</span> directory.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">// Resources for Plug-in: closestPointOnCurve\n\
// \n\
// ----------------------------\n\
// Registered string resources:\n\
// ----------------------------\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kAETitle&quot;, &quot;カーブ上の最近接ポイント アトリビュート&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kInputCurve&quot;, &quot;入力カーブ&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kInvalidType&quot;, &quot;オブジェクト ^1s は無効なタイプです。 カーブまたはトランスフォームのみ指定できます。&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kNoQueryFlag&quot;, &quot;最低 1 つの照会可能なフラグまたは照会モードを指定する必要があります。 help コマンドを使用して利用可能なすべてのフラグをリストします。&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kNoValidObject&quot;, &quot;1 つのカーブまたはトランスフォーム ノードをコマンド引数として、またはカレントの選択項目を使用して指定する必要があります。&quot;);\n\
setPluginResource( &quot;closestPointOnCurve&quot;, &quot;kResults&quot;, &quot;結果&quot;);\n\
// \n\
// --------------------------\n\
// Registered node resources:\n\
// --------------------------\n\
// \n\
// Node: closestPointOnCurve\n\
// \n\
setNodeNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;カーブ上の最近接ポイント&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ic&quot;, &quot;入力カーブ&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ip&quot;, &quot;入力位置&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ipx&quot;, &quot;入力位置 X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ipy&quot;, &quot;入力位置 Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ipz&quot;, &quot;入力位置 Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;p&quot;, &quot;位置&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;px&quot;, &quot;位置 X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;py&quot;, &quot;位置 Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;pz&quot;, &quot;位置 Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;n&quot;, &quot;法線&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;nx&quot;, &quot;法線 X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ny&quot;, &quot;法線 Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;nz&quot;, &quot;法線 Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;t&quot;, &quot;接線&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;tx&quot;, &quot;接線 X&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;ty&quot;, &quot;接線 Y&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;tz&quot;, &quot;接線 Z&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;u&quot;, &quot;パラメータ U&quot; );\n\
setAttrNiceNameResource( &quot;closestPointOnCurve&quot;, &quot;d&quot;, &quot;距離&quot; );\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";