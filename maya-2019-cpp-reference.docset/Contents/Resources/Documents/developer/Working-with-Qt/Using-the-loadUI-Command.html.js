var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Using the loadUI Command</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Using the loadUI Command</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"using-the-loadui-command\"></a></div>\n\
<p>Qt&#39;s Designer tool can be used to interactively create graphical interfaces and save them out in a portable XML format. Maya provides the <span class=\'code\'>loadUI</span> command which can be used by MEL and Python scripts to load these files into Maya and translate them, where possible, into standard Maya controls.</p>\n\
<p>The following image demonstrates Qt Designer being used to create a simple dialog consisting of a combo-box, a text field, their associated labels, and a button box below with two buttons.</p>\n\
<div class=\'figure\'><img src=\'developer/images/loadUI_sample.png\' title=\'\'></div>\n\
<p>Assuming that the dialog is saved out to the file <span class=\'code\'>/home/autodesk/createDialog.ui</span>, then it can be loaded into Maya and displayed using the following MEL commands:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">string $dialog = `loadUI -uiFile &quot;/home/autodesk/createDialog.ui&quot;`;\n\
showWindow $dialog;\n\
\n\
</pre></div><p>Or, in Python:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
dialog = cmds.loadUI(uiFile=&#39;/home/autodesk/createDialog.ui&#39;)\n\
cmds.showWindow(dialog)\n\
\n\
</pre></div><p>The <span class=\'code\'>loadUI</span> command creates the widgets specified in the file by executing their corresponding Maya commands. For example, the two labels in the example above are created using Maya&#39;s <span class=\'code\'>text</span> command, the comboBox control is created using the <span class=\'code\'>optionMenu</span> command, and the input field is created with the <span class=\'code\'>textField</span> command. As a result, those controls can be subsequently manipulated in MEL and Python scripts as if they had been created in the normal way.</p>\n\
<p>Flags can be passed to the command used to create a control by adding dynamic properties to the widget within Qt Designer. The name of the property should match that of the flag, including the leading hyphen, for example <em>-width</em>. If you want the control to be created using Python rather than MEL, then replace the leading hyphen with a + instead, for example, <em>+width</em>. If you specify both MEL and Python flag properties for the same widget, the behavior is undefined and therefore may result in errors. If the flag takes one or more arguments, specify them as the property value.</p>\n\
<p>The image below shows the <strong>-changeCommand</strong> property being added to the comboBox in Qt Designer.</p>\n\
<div class=\'figure\'><img src=\'developer/images/loadUI_property.png\' title=\'\'></div>\n\
<p>When the corresponding optionMenu control is created, its <strong>-changeCommand</strong> flag will be set to execute the command string &quot;newObjectType()&quot;.</p>\n\
<p>If the <span class=\'code\'>loadUI</span> command encounters a Qt widget for which there is no equivalent Maya control, the Qt widget is still created, but you cannot access it from MEL or Python scripts. An example of this is the button box at the bottom of the dialog. It uses a QDialogButtonBox widget for which there is no equivalent control in Maya. As a result, there is no access to either the button box itself or the buttons within it. Had the buttons been placed on the dialog individually, without using the button box, then the <span class=\'code\'>loadUI</span> command would have created them using the Maya <span class=\'code\'>button</span> commands and they would have been accessible to scripts.</p>\n\
<p>Any layouts in the file are created as generic layouts and are only accessible within Maya using the <span class=\'code\'>layout</span> command, not the commands for specific types of layouts such as <span class=\'code\'>formLayout</span>, <span class=\'code\'>columnLayout</span>, and so forth.</p>\n\
<p>The name given to a control or layout within Maya is that specified for its <strong>objectName</strong> property in Qt Designer. The top-level window itself must have a unique name, though, so if the specified name is already in use, the <span class=\'code\'>loadUI</span> command will add a number to the end of it to make it unique.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";