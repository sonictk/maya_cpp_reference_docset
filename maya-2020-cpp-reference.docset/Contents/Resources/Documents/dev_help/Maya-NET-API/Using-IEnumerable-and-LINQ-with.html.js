var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Using IEnumerable and LINQ with the Maya .NET API</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Using IEnumerable and LINQ with the Maya .NET API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"using-ienumerable-and-linq-with-the-maya-.net-api\"></a></div>\n\
<p>Many classes in the Maya .NET API implement the <span class=\'code\'>IEnumerable&lt;T&gt;</span> interface. Some examples include helper classes like <span class=\'code\'>MCGeometry</span>, <span class=\'code\'>MCDag</span>, and <span class=\'code\'>MCDependencyGraph</span>, as well as the various Maya array classes such <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MColorArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_color_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_color_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MColorArray</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFloatPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_point_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_point_array.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatPointArray</a></span>, and so forth. To see all classes that implement <span class=\'code\'>IEnumerable&lt;T&gt;</span> you can use the Object Browser to search for <span class=\'code\'>GetEnumerator()</span>.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/API_dotNet_IEnumerable_ObjBrowser_search.png\' title=\'\' /></div>\n\
<p>Any class that implements a <span class=\'code\'>GetEnumerator()</span> function (including functions that implement <span class=\'code\'>IEnumerable</span>) and returns a class that conforms to the <span class=\'code\'>IEnumerator</span> interface can be used with the <span class=\'code\'>foreach</span> keyword. For example, with objects selected in the scene, the following code snippet displays the path names of all selected objects.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">foreach (var s in MGlobal.activeSelectionList)\n\
           MGlobal.displayInfo(s.partialPathName);\n\
</pre></div><p>If the <span class=\'code\'>System.Linq</span> namespace is imported, then the LINQ extension methods can be used with all collections that implement <span class=\'code\'>IEnumerable&lt;T&gt;</span>. For example, the following code snippet returns all selected meshes.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">var meshes = MGlobal.activeSelectionList.Where(p =&gt; p.hasFn(MFn.Type.kMesh)).Select(p =&gt; new <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a>(p)); \n\
</pre></div><p>This is called the “method syntax”. The other syntax supported by LINQ is called “query syntax”. The following snippet is equivalent to the previous:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">var meshes = from p in MGlobal.activeSelectionList where p.hasFn(MFn.Type.kMesh) select new <a href=\"javascript:void(0)\" data-symbol=\"MFnMesh\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_mesh.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnMesh</a>(p);\n\
</pre></div><p>For more examples using LINQ, see the DAGExplorer example under the <span class=\'code\'>devkit\\dotnet\\wpfexamples</span> folder of your Developer Kit installation.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";