var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Running the DAGExplorer WPF .NET plug-in example</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Running the DAGExplorer WPF .NET plug-in example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"running-the-dagexplorer-wpf-.net-plug-in-example\"></a></div>\n\
<p>For more information on loading .NET plug-ins, see <a href=\'#!/url=./dev_help/Maya-NET-API/Loading-NET-plug-ins.html\' title=\'\'>Loading .Net plug-ins</a>.</p>\n\
<p>To see the <span class=\'code\'>wpfexamples.nll.dll</span> example plug-in in action after it has been successfully compiled, start Maya, load the plug-in via the Plug-in Manager, and then run the command dagexplorer. A new tab should be docked at the bottom of Maya’s main window once this command is run. The interface displayed in this example has been created entirely in Visual Studio using WPF/XAML.</p>\n\
<p>The DagExplorer example shows how close the interaction between Maya and the .NET interface can be. In the Search Condition tab, you can specify a search condition in the form of a C# lambda expression. At the bottom, there are four preset lambdas.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_dotNet_wpfexample1_RC_resized.png\' title=\'\' /></div>\n\
<p>When the Search DAG button is clicked, this expression is applied via LINQ to Maya’s DAG, and the results are displayed in the Result Grid tab in a property grid.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_dotNet_wpfexample2_RC_resized.png\' title=\'\' /></div>\n\
<p>Selecting an item in the property grid also selects it in the Maya scene view, and in addition, it is displayed in the Polygon 3D View tab.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_dotNet_wpfexample3_RC_resized.png\' title=\'\' /></div>\n\
<p>Double-click an entry in the property grid and a window appears that displays the properties of the selected node. Click the Container menu to view the properties for each of the dagpath, the node, and the MFn class, for example, MFnMesh.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_dotNet_wpfexample4_propWindow_RC_resized.png\' title=\'\' /></div>\n\
<p>You can set any of the properties via this window and see the results instantaneously in Maya.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_dotNet_wpfexample5_changeProp_RC_reszied.png.png\' title=\'\' /></div>\n\
<p>This simple example demonstrates a few interesting techniques:</p>\n\
<ul>\n\
<li>How to get the HWND of a WPF interface window.</li>\n\
<li>How to embed this HWND in Maya using the new Docking Station component.</li>\n\
<li>How to query Maya’s DAG using LINQ.</li>\n\
<li>How to dynamically compile and run C# code contained in a string from within your running plug-in, and how to recuperate results from that code.</li>\n\
<li>How to create a .NET 3D viewport and push geometry in it.</li>\n\
<li>How to select an item in Maya from .NET.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";