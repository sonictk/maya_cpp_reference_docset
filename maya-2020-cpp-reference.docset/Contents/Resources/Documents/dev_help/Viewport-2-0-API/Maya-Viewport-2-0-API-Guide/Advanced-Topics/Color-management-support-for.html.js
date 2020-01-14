var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Color management support for plug-in shaders in Viewport 2.0</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Color management support for plug-in shaders in Viewport 2.0</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"color-management-support-for-plug-in-shaders-in-viewport-2.0\"></a></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/New_Odd.png\' title=\'\' /></div>\n\
<p>This topic describes how to access the existing color management properties on a file texture node, and use these as inputs to a custom shader, which can render the texture associated with the file texture node.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The contents of this topic can be applied to Maya 2016 Extension 2, with the exception that the following fixes are not available: - <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance::createShaderInstanceWithColorManagementFragment()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a8b4d20c10162d7709e4352a4503653ee&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html#aeb8abe1ca10b04d28e972594a50fa1a4&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderInstance::createShaderInstanceWithColorManagementFragment()</a></span> does not lose pre or post render callbacks. - <span class=\'code\'>MShaderManager::k3dSolidTextureShader</span> includes the <span class=\'code\'>exposure</span> and <span class=\'code\'>alphaAsLuminance</span> parameters.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"obtaining-a-shader-instance-with-color-management-support\"></a><h2 id=\"obtaining-a-shader-instance-with-color-management-support\">Obtaining a shader instance with color management support</h2></div>\n\
<p>Assume that a plug-in node P creates a textured mode render item (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderItem\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_item.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderItem</a></span>). This item may be created either for a geometry or subscene override (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxGeometryOverride</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxSubSceneOverride</a></span>). The render item&#39;s shader instance will provide the support for exposure and input color transform properties.</p>\n\
<p>By default, a shader obtained via <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MShaderManager</a></span> does not support a color transform, as the transform is dynamically created based on the color management settings in the user preferences (Preferences window), and on the file texture node.</p>\n\
<p>To workaround this, first create a shader instance without color management support, then add in support dynamically. For convenience, the fragment <em>mayaTextureShader</em> has been made available as a starting fragment. This fragment can be used as part of a fragment graph to create a new shader instance. Alternatively, a new stock shader using just this fragment can be obtained by specifying <span class=\'code\'>MShaderManager::k3dSolidTextureShader</span> as the desired shader.</p>\n\
<p>The shader instance without color management support can then be used to return a new shader instance <em>with</em> color transform support, by calling the following method:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MShaderInstance:createShaderInstanceWithColorManagementFragment(&lt;colorSpace&gt;) \n\
</pre></div><p />The requirement for using this method is to specify an input color space: <colorspace>.<p />\n\
<div class=\'section\'><a id=\"obtaining-an-input-color-space-specification\"></a><h2 id=\"obtaining-an-input-color-space-specification\">Obtaining an input color space specification</h2></div>\n\
<p>In order to determine the current input color space, a query of the file texture node’s attributes can be performed. The attributes of interest are working space (“workingSpace”) and input color space (“colorSpace”).</p>\n\
<p>As the color space is relative to the working space, both values should be queried to determine when to create a new shader instance. The string value for the color space attribute can then be used with the <span class=\'code\'>MShaderInstance:createShaderInstanceWithColorManagementFragment()</span> method indicated above.</p>\n\
<p>It is possible that color management is disabled. To test for this state, the value for the attribute “colorManagementEnabled” should be queried on the file texture node.</p>\n\
<p>The following is a sample snippet of code, which assumes that a file texture is connected to the plug-in node P via its “color” attribute.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject</a> connectedObject = <a href=\"javascript:void(0)\" data-symbol=\"MObject::kNullObj\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MObject::kNullObj</a>;\n\
// Get connections to “color” attribute on node of interest\n\
//\n\
<a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPlug</a> plug = P.findPlug(&quot;color&quot;);\n\
if (!texture)\n\
{\n\
   if (!plug.isNull())\n\
   {\n\
      <a href=\"javascript:void(0)\" data-symbol=\"MPlugArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPlugArray</a> plugArray;\n\
      if (plug.connectedTo(plugArray, true, false) &amp;&amp; plugArray.length() == 1)\n\
      {\n\
         // Check for a file texture node connection\n\
         //\n\
         const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPlug</a>&amp; connectedPlug = plugArray[0];\n\
         connectedObject = connectedPlug.node();\n\
         if (connectedObject.hasFn( <a href=\"javascript:void(0)\" data-symbol=\"MFn::kFileTexture\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ac3bee92500cdc3a4ccbec4cb35e91f2a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFn::kFileTexture</a>))\n\
         {\n\
            // Get the name of the file texture image and acquire a texture to use\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> fileTextureName;\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MRenderUtil::exactFileTextureName\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_render_util.html#a419f62773e2626b29666ca4dd2cf5370&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MRenderUtil::exactFileTextureName</a>(connectedObject, fileTextureName);\n\
            if (fileTextureName.length())\n\
            {\n\
               texture = textureManager-&gt;acquireTexture(fileTextureName);\n\
            }\n\
\n\
            // Check if color management is even enabled\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFnDependencyNode</a> fileNode(connectedObject);\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPlug</a> cmEnabledPlug = fileNode.findPlug(&quot;colorManagementEnabled&quot;);\n\
            bool cmEnabled = false;\n\
            if (!cmEnabledPlug.isNull())\n\
            {\n\
               <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> workingColorSpace;\n\
               <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a> colorSpace;\n\
\n\
               cmEnabled = true;\n\
               cmEnabledPlug.getValue(cmEnabled);\n\
               if (cmEnabled)\n\
               {\n\
                  // Get working space and input color space values.\n\
                  // \n\
                  <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPlug</a> workingColorSpacePlug = fileNode.findPlug(&quot;workingSpace&quot;);\n\
                  workingColorSpacePlug.getValue(workingColorSpace);\n\
\n\
                  <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPlug</a> colorSpacePlug = fileNode.findPlug(&quot;colorSpace&quot;);\n\
                  colorSpacePlug.getValue(colorSpace);\n\
\n\
                  // If working or input color space changes then \n\
                  // we need to create a new shader. Previous shader resource\n\
                  // will be released when a new one is created.\n\
                  //\n\
                  // Note that is the shader initially\n\
                  // created which does not have a CM fragment.\n\
                  // \n\
                  // m_texturedColorManagedShader\n\
                  if (!m_texturedColorManagedShader || \n\
                        workingColorSpace != m_workingColorSpace ||\n\
                        colorSpace != m_inputColorSpace)\n\
                  {\n\
                     m_texturedColorManagedShader = \n\
                        m_texturedShader-&gt;createShaderInstanceWithColorManagementFragment(colorSpace);\n\
                     if (!m_texturedColorManagedShader)\n\
                        cmEnabled = false;\n\
\n\
                     m_workingColorSpace = workingColorSpace;\n\
                     m_inputColorSpace = colorSpace;\n\
                  }\n\
               }\n\
            }\n\
         }\n\
      }\n\
   }\n\
}\n\
</pre></div><div class=\'section\'><a id=\"obtaining-exposure\"></a><h2 id=\"obtaining-exposure\">Obtaining Exposure</h2></div>\n\
<p>The “exposure” attribute on a file texture node can be obtained and used to set the “exposure” parameter on the previously mentioned internal shader instances, or a custom one used by the plug-in.</p>\n\
<p>Note that exposure can be set regardless of whether color management has been enabled globally or on the file node.</p>\n\
</colorspace>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";