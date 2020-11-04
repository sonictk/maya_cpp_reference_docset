var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Complex and Dynamic Attributes</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Complex and Dynamic Attributes</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"complex-and-dynamic-attributes\"></a></div>\n\
<p>In addition to the simple, static attributes described in <a href=\'#!/url=./dev_help/Dependency-graph-plug-ins/Attributes-and-plugs.html\' title=\'\'>Attributes and plugs</a>, your custom node classes can use complex attributes made up of multiple data values. These may be arrays that contain multiple instances of the same data type, or they may be compounds that are made up of multiple different data types. In addition, you can use dynamic attributes to add and remove attributes from nodes on the fly.</p>\n\
<div class=\'section\'><a id=\"array-attributes\"></a><h2 id=\"array-attributes\">Array attributes</h2></div>\n\
<p>By default, attributes have only one associated plug. These are called simple attributes. An attribute can also be defined as containing an arbitrarily long list of plugs. Attributes of this type are called array attributes and the plugs in the array are called elements. Each element plug can contain its own value and can have its own connection, and the array can be sparse. The data type of each element is defined to be the type specified by the attribute. Each element in the array is identified by its sparse index into the array.</p>\n\
<p>Maya’s Hypergraph and Connection Editor display the index of an element plug in square brackets ([]) after the attribute name.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/comp_APIplugs.png\' title=\'\' /></div>\n\
<p>The array of plugs is accessed through another plug called the array plug. This plug is returned when asking an attribute for its associated plug. Any attribute can be defined as an array attribute. The specification is made using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAttribute::setArray()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_attribute.html#acc80b84249f9c028f2c6d085a026b50c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnAttribute::setArray()</a></span> method and must be called after calling the <span class=\'code\'>create()</span> method for the attribute.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> It is not recommended to connect an array plug to another array plug.</p>\n\
</blockquote>\n\
<p>An important distinction must be made between plugs which are defined as array plugs and simple plugs which are defined to contain array data. Both constructs can contain multiple values and are referred to as &quot;arrays.&quot;</p>\n\
<p>In the case of a simple array, the data type is defined as an array, such as <span class=\'code\'>pointArray</span> or <span class=\'code\'>intArray</span> (refer to the reference page for the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_data.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnData</a></span> class for a description of the allowable array types). The array is treated as a single data item by the plug. When asking for the plug’s value, the whole array is returned. If the plug is connected to another plug in the scene, the whole array is passed or retrieved along the connection.</p>\n\
<p>For an array attribute, the data type of the attribute is the data type of a single value, such as an int or a double. The array comes from the list of element plugs, each containing a single data value. Each element is independently connectable. The data items are retrieved by accessing each plug in the array and retrieving the single values stored at the plugs. So there is an advantage and disadvantage to each method. In the single attribute case the data are treated as a single unit and can be moved more efficiently through the dependency graph network, but there is less flexibility in accessing the individual data items. In the array attribute case there is great flexibility as each data item can be accessed and connected, but there is more overhead for the node and the dependency graph network.</p>\n\
<p>Following these rules, one can define an attribute whose data type itself is an array. Such an attribute would contain an array plug whose element plugs each contained a whole array. Each array could be independently accessed. As noted above, connections between array plugs are not recommended.</p>\n\
<div class=\'section\'><a id=\"compound-attributes\"></a><h2 id=\"compound-attributes\">Compound attributes</h2></div>\n\
<p>An attribute can also be defined as a collection of other attributes. Such an attribute is called a compound attribute and the members of its collection are called children. Compound attributes are not defined as containing a particular data type—they are defined as the set of attributes which make up the collection.</p>\n\
<p>Compound attributes are created using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCompoundAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_compound_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_compound_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCompoundAttribute</a></span> class. This class contains methods for specifying the child attributes which will be contained in the compound attribute. Refer to the reference page of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnCompoundAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_compound_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_compound_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCompoundAttribute</a></span> for more information.</p>\n\
<div class=\'section\'><a id=\"child-attributes\"></a><h3 id=\"child-attributes\">Child attributes</h3></div>\n\
<p>Each child attribute is treated as any other attribute. Child attributes have names and data types and can be defined as array attributes or compound attributes. A plug is associated with the compound attribute itself and is referred to as the parent plug to the members of the compound attribute. Each child attribute also follows the same rules of connectability. A child is independently connectable, and if a child attribute is defined as an array attribute, its element plugs are also independently connectable. The parent plug of a compound attribute can be connected to another node’s compound parent plug as long as the child attributes of each plug are defined identically. In this case, the data for all of the child plugs is sent along the connection. If a compound attribute is specified as an array attribute, then each element plug of the array will contain children plugs for each of the members of the compound attribute. The element plug will be the parent plug.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> If a compound attribute is specified as an array then the parent will be an array plug. It is not recommended to connect an array plug to another array plug.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"dynamic-attributes\"></a><h2 id=\"dynamic-attributes\">Dynamic Attributes</h2></div>\n\
<p>Dynamic attributes are used to attach blind data to a node. Every node initially has a set of attributes defined. You may, however, want to add new attributes to either a single node or to all nodes of a given type. These attributes are called dynamic attributes.</p>\n\
<p>A dynamic attribute is treated much like any other attribute. The main difference is that someone is responsible for allocating and deallocating it since it will not be statically created.</p>\n\
<p>The following is a code fragment taken from the blindShortDataCmd example. It creates a simple dynamic attribute to contain a short which it then attaches to a selected dependency graph node. The blindComplexDataCmd example demonstrates adding user-defined data as a dynamic attribute.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> fnAttr;\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> fullName( &quot;blindData&quot; );\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> briefName( &quot;bd&quot; );\n\
double attrDefault = 99;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> newAttr = fnAttr.create( fullName, briefName, MFnNumericData::kShort,\n\
 attrDefault, &amp;stat );\n\
\n\
</pre></div><p>This creates a new numeric attribute called &quot;blindData&quot; with a short name of &quot;bd&quot; which has a default value of 99. When using dynamic attributes as blind data the name of the attribute must be unique so that you and someone else do not create attributes which conflict with each other.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">stat = fnDN.addAttribute(newAttr,MFnDependencyNode::kLocalDynamicAttr);\n\
if ( MS::kSuccess != stat ) {\n\
    cerr &lt;&lt; &quot;Error adding dynamic attribute&quot; &lt;&lt; endl;\n\
}\n\
\n\
</pre></div><p>These few lines add the attribute to the selected dependency graph node (fnDN is an instance of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode</a></span> that was initialized elsewhere). Note the use of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode::kLocalDynamicAttr\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a21bf9680118a608d049c1318708c822b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDependencyNode::kLocalDynamicAttr</a></span> which indicates that this new attribute is a dynamic attribute.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";