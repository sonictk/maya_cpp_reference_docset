var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>A hardware shading node plug-in example</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>A hardware shading node plug-in example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"a-hardware-shading-node-plug-in-example\"></a></div>\n\
<p>The <span class=\'code\'>hwPhongShader</span> node plug-in is available in the Maya Developer Kit. In this example, a cube-environment map is used to perform per pixel Phong shading. The light direction is currently fixed at the eye position.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The node based interface used in this example only encompasses a subset of the Viewport 2.0 interfaces. For more information about this interface, see <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Effect-Overrides.html\' title=\'\'>Effect Overrides</a>.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"initializing-and-un-initializing-the-plug-in\"></a><h2 id=\"initializing-and-un-initializing-the-plug-in\">Initializing and un-initializing the Plug-in</h2></div>\n\
<p>Initializing the plug-in is a straight forward process. In initialize, the swatch classification string is built and the node and drag and drop behavior classes are registered. Note that the drag and drop behavior does not require a unique <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_type_id.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MTypeId</a></span>. A simple text string to name the behavior is sufficient.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>   status;\n\
\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; swatchName = <a href=\"javascript:void(0)\" data-symbol=\"MHWShaderSwatchGenerator::initialize\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_shader_swatch_generator.html#acf0030e7f24277ad6805a14be529539f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHWShaderSwatchGenerator::initialize</a>();\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> UserClassify( &quot;shader/surface/utility/:drawdb/shader/surface/hwPhongShader:swatch/&quot;+swatchName );\n\
\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, &quot;4.5&quot;, &quot;Any&quot;);\n\
    status = plugin.registerNode( &quot;hwPhongShader&quot;, hwPhongShader::id,\n\
                                   hwPhongShader::creator, hwPhongShader::initialize,\n\
                                   MPxNode::kHwShaderNode, &amp;UserClassify );\n\
    if (!status) {\n\
        status.perror(&quot;registerNode&quot;);\n\
        return status;\n\
    }\n\
\n\
    plugin.registerDragAndDropBehavior(&quot;hwPhongShaderBehavior&quot;,\n\
                                        hwPhongShaderBehavior::creator);\n\
\n\
    // Register a shader override for this node\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MDrawRegistry::registerShaderOverrideCreator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html#a7436ee759c9ea5113f5a222085dbfe6e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHWRender::MDrawRegistry::registerShaderOverrideCreator</a>(\n\
        &quot;drawdb/shader/surface/hwPhongShader&quot;,\n\
        sHWPhongShaderRegistrantId,\n\
        hwPhongShaderOverride::Creator);\n\
    if (status != MS::kSuccess) return status;\n\
\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>Un-initializing the plug-in de-registers the Phong node and the drag and drop behavior.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>   status;\n\
\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
\n\
    // Unregister all chamelion shader nodes\n\
    plugin.deregisterNode( hwPhongShader::id );\n\
    if (!status) {\n\
        status.perror(&quot;deregisterNode&quot;);\n\
        return status;\n\
     }\n\
\n\
     plugin.deregisterDragAndDropBehavior(&quot;hwPhongShaderBehavior&quot;);\n\
\n\
     // Deregister the shader override\n\
     status = <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MDrawRegistry::deregisterShaderOverrideCreator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_draw_registry.html#a11ddbef3eada4895397b8acb6c77eb2e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHWRender::MDrawRegistry::deregisterShaderOverrideCreator</a>(\n\
               &quot;drawdb/shader/surface/hwPhongShader&quot;, sHWPhongShaderRegistrantId);\n\
     if (status != MS::kSuccess) return status;\n\
\n\
     return MS::kSuccess;\n\
}\n\
</pre></div><div class=\'section\'><a id=\"initializing-the-node\"></a><h2 id=\"initializing-the-node\">Initializing the node</h2></div>\n\
<p>The hardware shader plug-in’s <span class=\'code\'>initialize()</span> method’s attributes that are used in the Dependency Graph are pre-configured. Standard color attributes are added and flagged with properties based on how they are meant to work. Attributes are first created, then added and then finally relationships between the attributes are set. This example configures attributes as cached and internal for performance.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::initialize()\n\
{\n\
   // Make sure that all attributes are cached internal for\n\
   // optimal performance !\n\
\n\
   <a href=\"javascript:void(0)\" data-symbol=\"MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnNumericAttribute</a> nAttr;\n\
   <a href=\"javascript:void(0)\" data-symbol=\"MFnCompoundAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_compound_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnCompoundAttribute</a> cAttr;\n\
\n\
   // Create input attributes\n\
   aColor = nAttr.createColor( &quot;color&quot;, &quot;c&quot;);\n\
   nAttr.setStorable(true);\n\
   nAttr.setKeyable(true);\n\
   nAttr.setDefault(0.1f, 0.1f, 0.1f);\n\
   nAttr.setCached( true );\n\
   nAttr.setInternal( true );\n\
   nAttr.setAffectsAppearance( true );\n\
    \n\
   aTransparency = nAttr.create( &quot;transparency&quot;, &quot;tr&quot;, MFnNumericData::kFloat );\n\
   nAttr.setStorable(true);\n\
   nAttr.setKeyable(true);\n\
   nAttr.setDefault(0.0f);\n\
   nAttr.setMax(1.0f);\n\
   nAttr.setMin(0.0f);\n\
   nAttr.setCached( true );\n\
   nAttr.setInternal( true );\n\
   nAttr.setAffectsAppearance( true );\n\
\n\
   aDiffuseColor = nAttr.createColor( &quot;diffuseColor&quot;, &quot;dc&quot; );\n\
   nAttr.setStorable(true);\n\
   nAttr.setKeyable(true);\n\
   nAttr.setDefault(1.f, 0.5f, 0.5f);\n\
   nAttr.setCached( true );\n\
   nAttr.setInternal( true );\n\
   nAttr.setAffectsAppearance( true );\n\
\n\
   aSpecularColor = nAttr.createColor( &quot;specularColor&quot;, &quot;sc&quot; );\n\
   nAttr.setStorable(true);\n\
   nAttr.setKeyable(true);\n\
   nAttr.setDefault(0.5f, 0.5f, 0.5f);\n\
   nAttr.setCached( true );\n\
   nAttr.setInternal( true );\n\
   nAttr.setAffectsAppearance( true );\n\
\n\
   // This is defined as a compound attribute, users can easily enter\n\
   // values beyond 1.\n\
   aShininessX = nAttr.create( &quot;shininessX&quot;, &quot;shx&quot;, MFnNumericData::kFloat, 100.0 );\n\
   aShininessY = nAttr.create( &quot;shininessY&quot;, &quot;shy&quot;, MFnNumericData::kFloat, 100.0 );\n\
   aShininessZ = nAttr.create( &quot;shininessZ&quot;, &quot;shz&quot;, MFnNumericData::kFloat, 100.0 );\n\
   aShininess = cAttr.create( &quot;shininess&quot;, &quot;sh&quot; );\n\
   cAttr.addChild(aShininessX);\n\
   cAttr.addChild(aShininessY);\n\
   cAttr.addChild(aShininessZ) ;\n\
   nAttr.setStorable(true);\n\
   nAttr.setKeyable(true);\n\
   nAttr.setCached( true );\n\
   nAttr.setInternal( true );\n\
   nAttr.setAffectsAppearance(true);    \n\
   cAttr.setHidden(false);\n\
    \n\
   aGeometryShape = nAttr.create( &quot;geometryShape&quot;, &quot;gs&quot;, MFnNumericData::kInt );\n\
   nAttr.setStorable(true);\n\
   nAttr.setKeyable(true);\n\
   nAttr.setDefault(0);\n\
   nAttr.setCached( true );\n\
   nAttr.setInternal( true );\n\
\n\
   // create output attributes here\n\
   // outColor is the only output attribute and it is inherited\n\
   // so we do not need to create or add it.\n\
   //\n\
\n\
   // Add the attributes here\n\
\n\
   addAttribute(aColor);\n\
   addAttribute(aTransparency);\n\
   addAttribute(aDiffuseColor);\n\
   addAttribute(aSpecularColor);\n\
   addAttribute(aShininess);\n\
   addAttribute(aGeometryShape);\n\
\n\
   attributeAffects (aColor,            outColor);\n\
   attributeAffects (aTransparency, outColor);\n\
   attributeAffects (aDiffuseColor, outColor);\n\
   attributeAffects (aSpecularColor,    outColor);\n\
   attributeAffects (aShininessX,       outColor);\n\
   attributeAffects (aShininessY,       outColor);\n\
   attributeAffects (aShininessZ,       outColor);\n\
   attributeAffects (aShininess,        outColor);\n\
\n\
   return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"compute-method\"></a><h2 id=\"compute-method\">Compute method</h2></div>\n\
<p>The following is a description of the simple implementation of <span class=\'code\'>compute()</span> on this class. This method is configured to only handle the <span class=\'code\'>outColor</span> attribute. Any other attributes passed to this method will result in <span class=\'code\'>MS::kUnknownParameter</span> being returned, which will cause Maya to handle these attributes. Otherwise, the attribute <span class=\'code\'>aDiffuseColor</span> is accessed from the datablock and its value is used to set the out color.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::compute(\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPlug</a>&amp;      plug,\n\
   <a href=\"javascript:void(0)\" data-symbol=\"MDataBlock\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_block.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataBlock</a>&amp; block )\n\
{\n\
\n\
   if ((plug != outColor) &amp;&amp; (plug.parent() != outColor))\n\
      return MS::kUnknownParameter;\n\
\n\
   <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a> &amp; color  = block.inputValue( aDiffuseColor ).asFloatVector();\n\
\n\
   // set output color attribute\n\
   <a href=\"javascript:void(0)\" data-symbol=\"MDataHandle\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_data_handle.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDataHandle</a> outColorHandle = block.outputValue( outColor );\n\
   <a href=\"javascript:void(0)\" data-symbol=\"MFloatVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFloatVector</a>&amp; outColor = outColorHandle.asFloatVector();\n\
   outColor = color;\n\
\n\
   outColorHandle.setClean();\n\
   return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>By implementing this method, the hardware shader node plug-in will be visible in software rendering. If software rendering is not required, there is no need to implement this method.</p>\n\
<div class=\'section\'><a id=\"reference-information-for-legacy-default-viewport\"></a><h2 id=\"reference-information-for-legacy-default-viewport\">Reference information for Legacy Default Viewport</h2></div>\n\
<p>The following sections contain reference information for hardware shaders that render in the Legacy Default Viewport. The current recommendation is to create shaders for use with Viewport 2.0. See <a href=\'#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide.html\' title=\'\'>Maya Viewport 2.0 API Guide</a>.</p>\n\
<div class=\'section\'><a id=\"bind-draw-and-unbind-methods\"></a><h3 id=\"bind-draw-and-unbind-methods\">Bind, draw and unbind methods</h3></div>\n\
<p>The <span class=\'code\'>bind()</span> and <span class=\'code\'>glBind()</span> methods follow the same strategy. If required attributes have changed or the Phong texture has not been set, then the Phong texture is initialized.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::bind(const <a href=\"javascript:void(0)\" data-symbol=\"MDrawRequest\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_request.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDrawRequest</a>&amp; request, <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a>&amp; view)\n\
\n\
{\n\
    if (mAttributesChanged || (phong_map_id == 0))\n\
    {\n\
        init_Phong_texture ();\n\
    }\n\
    return MS::kSuccess;\n\
}\n\
\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::glBind(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a>&amp;)\n\
{\n\
    if ( mAttributesChanged || (phong_map_id == 0))\n\
    {\n\
        init_Phong_texture ();\n\
    }\n\
\n\
    return MS::kSuccess;\n\
}\n\
        \n\
</pre></div><p>The <span class=\'code\'>unbind()</span> and <span class=\'code\'>glUnbind()</span> methods in this example only return <span class=\'code\'>MS::kSuccess</span> since there is an alternate way written for releasing resources. In the <span class=\'code\'>hwPhongShader</span> examples, messages are checked via the API and resources are released before events such as file new, file open and file reference. Please consult the full example code for more details.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::unbind(const <a href=\"javascript:void(0)\" data-symbol=\"MDrawRequest\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_request.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDrawRequest</a>&amp; request, <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a>&amp; view)\n\
{\n\
    // The texture may have been allocated by the draw; it&#39;s kept\n\
    // around for use again. When scene new or open is performed this\n\
    // texture will be released in releaseEverything().\n\
    return MS::kSuccess;\n\
}\n\
\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::glUnbind(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a>&amp;)\n\
{\n\
    // The texture may have been allocated by the draw; it&#39;s kept\n\
    // around for use again. When scene new or open is performed this\n\
    // texture will be released in releaseEverything().\n\
    return MS::kSuccess;\n\
}\n\
</pre></div><p>The <span class=\'code\'>geometry()</span> and <span class=\'code\'>glGeometry()</span> methods are set up similarly. Each makes a call to the interface independent <span class=\'code\'>draw()</span> method to avoid duplicating the draw code.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::geometry( const <a href=\"javascript:void(0)\" data-symbol=\"MDrawRequest\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_draw_request.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDrawRequest</a>&amp; request,\n\
                                <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a>&amp; view,\n\
                                int prim,\n\
                                unsigned int writable,\n\
                                int indexCount,\n\
                                const unsigned int * indexArray,\n\
                                int vertexCount,\n\
                                const int * vertexIDs,\n\
                                const float * vertexArray,\n\
                                int normalCount,\n\
                                const float ** normalArrays,\n\
                                int colorCount,\n\
                                const float ** colorArrays,\n\
                                int texCoordCount,\n\
                                const float ** texCoordArrays)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat = <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a>;\n\
    if (mGeometryShape != 0)\n\
        drawDefaultGeometry();\n\
    else\n\
        stat = draw( prim, writable, indexCount, indexArray, vertexCount,\n\
        vertexIDs, vertexArray, normalCount, normalArrays,\n\
        colorCount, colorArrays, texCoordCount, texCoordArrays);\n\
    return stat;\n\
}\n\
\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::glGeometry(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> &amp; path,\n\
                                  int prim,\n\
                                  unsigned int writable,\n\
                                  int indexCount,\n\
                                  const unsigned int * indexArray,\n\
                                  int vertexCount,\n\
                                  const int * vertexIDs,\n\
                                  const float * vertexArray,\n\
                                  int normalCount,\n\
                                  const float ** normalArrays,\n\
                                  int colorCount,\n\
                                  const float ** colorArrays,\n\
                                  int texCoordCount,\n\
                                  const float ** texCoordArrays)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> stat = <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a>;\n\
    if (mGeometryShape != 0)\n\
        drawDefaultGeometry();\n\
    else\n\
        stat = draw( prim, writable, indexCount, indexArray, vertexCount,\n\
        vertexIDs, vertexArray, normalCount, normalArrays,\n\
        colorCount, colorArrays, texCoordCount, texCoordArrays);\n\
    return stat;\n\
}\n\
        \n\
</pre></div><div class=\'section\'><a id=\"drawing\"></a><h3 id=\"drawing\">Drawing</h3></div>\n\
<p>The <span class=\'code\'>draw()</span> method parameters are used to pass information to OpenGL for rendering the information to screen. It is very important to note that the <span class=\'code\'>indexArray</span> is used to access information from the other arrays.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::draw(int prim,\n\
                            unsigned int writable,\n\
                            int indexCount,\n\
                            const unsigned int * indexArray,\n\
                            int vertexCount,\n\
                            const int * vertexIDs,\n\
                            const float * vertexArray,\n\
                            int normalCount,\n\
                            const float ** normalArrays,\n\
                            int colorCount,\n\
                            const float ** colorArrays,\n\
                            int texCoordCount,\n\
                            const float ** texCoordArrays)\n\
{\n\
    if ( prim != GL_TRIANGLES &amp;&amp; prim != GL_TRIANGLE_STRIP) {\n\
        return MS::kFailure;\n\
    }\n\
\n\
    {\n\
        glPushAttrib ( GL_ENABLE_BIT );\n\
        glDisable ( GL_LIGHTING );\n\
        glDisable ( GL_TEXTURE_1D );\n\
        glDisable ( GL_TEXTURE_2D );\n\
\n\
        // Setup cube map generation\n\
        glEnable ( GL_TEXTURE_CUBE_MAP_EXT );\n\
        glBindTexture ( GL_TEXTURE_CUBE_MAP_EXT, phong_map_id );\n\
        glEnable ( GL_TEXTURE_GEN_S );\n\
        glEnable ( GL_TEXTURE_GEN_T );\n\
        glEnable ( GL_TEXTURE_GEN_R );\n\
        glTexGeni ( GL_S, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT );\n\
        glTexGeni ( GL_T, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT );\n\
        glTexGeni ( GL_R, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT );\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_WRAP_S, GL_CLAMP);\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_WRAP_T, GL_CLAMP);\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_MIN_FILTER, GL_LINEAR);\n\
\n\
        glTexEnvi ( GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_REPLACE );\n\
\n\
        // Could modify the texture matrix here to do light tracking...\n\
        glMatrixMode ( GL_TEXTURE );\n\
        glPushMatrix ();\n\
        glLoadIdentity ();\n\
        glMatrixMode ( GL_MODELVIEW );\n\
    }\n\
\n\
        // Draw the surface.\n\
        //\n\
    {\n\
        glPushClientAttrib ( GL_CLIENT_VERTEX_ARRAY_BIT );\n\
        glEnableClientState( GL_VERTEX_ARRAY );\n\
        glEnableClientState( GL_NORMAL_ARRAY );\n\
\n\
        glVertexPointer ( 3, GL_FLOAT, 0, &amp;vertexArray[0] );\n\
        glNormalPointer ( GL_FLOAT, 0, &amp;normalArrays[0][0] );\n\
\n\
        glDrawElements ( prim, indexCount, GL_UNSIGNED_INT, indexArray );\n\
\n\
        // The client attribute is already being popped. You\n\
        glPopClientAttrib();\n\
    }\n\
\n\
    {\n\
        glMatrixMode ( GL_TEXTURE );\n\
        glPopMatrix ();\n\
        glMatrixMode ( GL_MODELVIEW );\n\
\n\
        glDisable ( GL_TEXTURE_CUBE_MAP_EXT );\n\
        glDisable ( GL_TEXTURE_GEN_S );\n\
        glDisable ( GL_TEXTURE_GEN_T );\n\
        glDisable ( GL_TEXTURE_GEN_R );\n\
\n\
        glPopAttrib();\n\
    }\n\
\n\
        return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"drawing-the-swatch\"></a><h4 id=\"drawing-the-swatch\">Drawing the swatch</h4></div>\n\
<p>Drawing the swatch involves implementing the virtual <span class=\'code\'>renderSwatchImage()</span> and using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer</a></span> class in conjunction with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGeometryData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGeometryData</a></span> and OpenGL to draw the image. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MImage\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_image.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_image.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MImage</a></span> passed to <span class=\'code\'>renderSwatchImage()</span> contains information on the <span class=\'code\'>width</span> and height of the <span class=\'code\'>output</span> that is required.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> hwPhongShader::renderSwatchImage( <a href=\"javascript:void(0)\" data-symbol=\"MImage\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_image.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_image.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MImage</a> &amp; outImage )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
\n\
    // Get the hardware renderer utility class\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer</a> *pRenderer = <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::theRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a93fef222f7278c123e8df750f7f0ea5b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::theRenderer</a>();\n\
    if (pRenderer)\n\
    {\n\
        const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; backEndStr = pRenderer-&gt;backEndString();\n\
\n\
        // Get geometry\n\
        // ============\n\
        unsigned int* pIndexing = 0;\n\
        unsigned int numberOfData = 0;\n\
        unsigned int indexCount = 0;\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::GeometricShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::GeometricShape</a> gshape =\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::kDefaultSphere\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505acb4a5f68a3b6cd8c05b1dc9c5a487c88&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::kDefaultSphere</a>;\n\
        if (mGeometryShape == 2)\n\
        {\n\
            gshape = <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::kDefaultCube\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505a86db3fcd02f093aba91aa87457074701&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::kDefaultCube</a>;\n\
        }\n\
        else if (mGeometryShape == 3)\n\
        {\n\
            gshape = <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::kDefaultPlane\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505a184eac47c82e5c13dd2dd52420cbf89f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::kDefaultPlane</a>;\n\
        }\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGeometryData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGeometryData</a>* pGeomData =\n\
            pRenderer-&gt;referenceDefaultGeometry( gshape, numberOfData, pIndexing, indexCount );\n\
        if( !pGeomData )\n\
        {\n\
            return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
        }\n\
\n\
        // Make the swatch context current\n\
        // ===============================\n\
        //\n\
        unsigned int width, height;\n\
        outImage.getSize( width, height );\n\
        unsigned int origWidth = width;\n\
        unsigned int origHeight = height;\n\
\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status2 = pRenderer-&gt;makeSwatchContextCurrent( backEndStr,\n\
            width, height );\n\
\n\
        if( status2 == MS::kSuccess )\n\
        {\n\
            // Note:  Must be called after makeSwatchContextCurrent()\n\
            glPushAttrib ( GL_ALL_ATTRIB_BITS );\n\
\n\
            // Get camera\n\
            // ==========\n\
            {\n\
                // Get the camera frustum from the API\n\
                double l, r, b, t, n, f;\n\
                pRenderer-&gt;getSwatchOrthoCameraSetting( l, r, b, t, n, f );\n\
\n\
                glMatrixMode(GL_PROJECTION);\n\
                glLoadIdentity();\n\
                glOrtho( l, r, b, t, n, f );\n\
                glMatrixMode(GL_MODELVIEW);\n\
                glLoadIdentity();\n\
                // Rotate the cube a bit so we don&#39;t see it head on\n\
                if (gshape == <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::kDefaultCube\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505a86db3fcd02f093aba91aa87457074701&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::kDefaultCube</a>)\n\
                    glRotatef( 45, 1.0, 1.0, 1.0 );\n\
                else if (gshape == <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::kDefaultPlane\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505a184eac47c82e5c13dd2dd52420cbf89f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::kDefaultPlane</a>)\n\
                    glScalef( 1.5, 1.5, 1.5 );\n\
                            else\n\
                                glScalef( 1.0, 1.0, 1.0 );\n\
            }\n\
\n\
                // Draw The Swatch\n\
                // ===============\n\
                drawTheSwatch( pGeomData, pIndexing, numberOfData, indexCount );\n\
\n\
                // Read pixels back from swatch context to <a href=\"javascript:void(0)\" data-symbol=\"MImage\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_image.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_image.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MImage</a>\n\
                // ==============================================\n\
                pRenderer-&gt;readSwatchContextPixels( backEndStr, outImage );\n\
\n\
                // Double check the outing going image size as image resizing\n\
                // was required to properly read from the swatch context\n\
                outImage.getSize( width, height );\n\
                if (width != origWidth || height != origHeight)\n\
                {\n\
                    status = <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
                }\n\
                else\n\
                {\n\
                    status = <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kSuccess\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kSuccess</a>;\n\
                }\n\
\n\
                glPopAttrib();\n\
        }\n\
        else\n\
        {\n\
            pRenderer-&gt;dereferenceGeometry( pGeomData, numberOfData );\n\
        }\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>The method <span class=\'code\'>drawTheSwatch()</span> is invoked from the <span class=\'code\'>renderSwatchImage()</span> method. It performs the OpenGL drawing on the image.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void            \n\
hwPhongShader::drawTheSwatch( <a href=\"javascript:void(0)\" data-symbol=\"MGeometryData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_geometry_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGeometryData</a>* pGeomData,\n\
                             unsigned int* pIndexing,\n\
                             unsigned int numberOfData,\n\
                             unsigned int indexCount )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer</a> *pRenderer = <a href=\"javascript:void(0)\" data-symbol=\"MHardwareRenderer::theRenderer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_hardware_renderer.html#a93fef222f7278c123e8df750f7f0ea5b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHardwareRenderer::theRenderer</a>();\n\
    if( !pRenderer )    return;\n\
    if ( mAttributesChanged || (phong_map_id == 0))\n\
    {\n\
        init_Phong_texture ();\n\
    }\n\
\n\
    // Get the default background color\n\
    float r, g, b, a;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWShaderSwatchGenerator::getSwatchBackgroundColor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_shader_swatch_generator.html#a95a6855572205246f2741796ed8c5bdc&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MHWShaderSwatchGenerator::getSwatchBackgroundColor</a>( r, g, b, a );\n\
    glClearColor( r, g, b, a );\n\
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\n\
    glShadeModel(GL_SMOOTH);\n\
    glEnable(GL_DEPTH_TEST);\n\
    glDepthFunc(GL_LEQUAL);\n\
    glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);\n\
\n\
    glDisable ( GL_LIGHTING );\n\
    glDisable ( GL_TEXTURE_1D );\n\
    glDisable ( GL_TEXTURE_2D );\n\
    {\n\
        glEnable ( GL_TEXTURE_CUBE_MAP_EXT );\n\
        glBindTexture ( GL_TEXTURE_CUBE_MAP_EXT, phong_map_id );\n\
        glEnable ( GL_TEXTURE_GEN_S );\n\
        glEnable ( GL_TEXTURE_GEN_T );\n\
        glEnable ( GL_TEXTURE_GEN_R );\n\
        glTexGeni ( GL_S, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT );\n\
        glTexGeni ( GL_T, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT );\n\
        glTexGeni ( GL_R, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT );\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_WRAP_S, GL_CLAMP);\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_WRAP_T, GL_CLAMP);\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n\
        glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_MIN_FILTER, GL_LINEAR);\n\
\n\
        glTexEnvi ( GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_REPLACE );\n\
\n\
        // Could modify the texture matrix here to do light tracking...\n\
        glMatrixMode ( GL_TEXTURE );\n\
        glPushMatrix ();\n\
        glLoadIdentity ();\n\
        glRotatef( 5.0, -1.0, 0.0, 0.0 );\n\
        glRotatef( 10.0, 0.0, 1.0, 0.0 );\n\
        glMatrixMode ( GL_MODELVIEW );\n\
    }\n\
\n\
        // Draw default geometry\n\
    {\n\
        if (pGeomData)\n\
        {\n\
            glPushClientAttrib ( GL_CLIENT_VERTEX_ARRAY_BIT );\n\
\n\
            float *vertexData = (float *)( pGeomData[0].data() );\n\
            if (vertexData)\n\
            {\n\
                glEnableClientState( GL_VERTEX_ARRAY );\n\
                glVertexPointer ( 3, GL_FLOAT, 0, vertexData );\n\
            }\n\
            float *normalData = (float *)( pGeomData[1].data() );\n\
            if (normalData)\n\
            {\n\
                glEnableClientState( GL_NORMAL_ARRAY );\n\
                glNormalPointer ( GL_FLOAT, 0, normalData );\n\
            }\n\
\n\
            if (vertexData &amp;&amp; normalData &amp;&amp; pIndexing )\n\
                glDrawElements ( GL_TRIANGLES, indexCount, GL_UNSIGNED_INT, pIndexing );\n\
\n\
            glPopClientAttrib();\n\
\n\
            // Release data references\n\
            pRenderer-&gt;dereferenceGeometry( pGeomData, numberOfData );\n\
        }\n\
    }\n\
\n\
    {\n\
        glMatrixMode ( GL_TEXTURE );\n\
        glPopMatrix ();\n\
        glMatrixMode ( GL_MODELVIEW );\n\
        glDisable ( GL_TEXTURE_CUBE_MAP_EXT );\n\
        glDisable ( GL_TEXTURE_GEN_S );\n\
        glDisable ( GL_TEXTURE_GEN_T );\n\
        glDisable ( GL_TEXTURE_GEN_R );\n\
    }\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";