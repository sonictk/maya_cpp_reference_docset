var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Write fragments and fragment graphs to render to the viewport</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Write fragments and fragment graphs to render to the viewport</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"write-fragments-and-fragment-graphs-to-render-to-the-viewport\"></a></div>\n\
<div class=\'section\'><a id=\"introduction\"></a><h2 id=\"introduction\">Introduction</h2></div>\n\
<p>A fragment is a procedure or function definition in a high level language. It has typed inputs and outputs, and executes some procedure on the inputs to produce the output(s).</p>\n\
<p>You can write shading fragments, or you can write script fragments that execute a series of commands to set up parameters and states and clear or render to various targets.</p>\n\
<p>Fragments may then be connected into fragment graphs. A fragment graph does not contain commands; instead, it instantiates a set of fragments and describes the connections between them.</p>\n\
<p>A single script fragment or fragment graph can be stored in a .xml file.</p>\n\
<p>A set of script fragment and fragment graph xml files are provided with the Maya installation at the <span class=\'code\'>bin/ScriptFragment</span> directory of your installation directory. These fragment and fragment graphs are used to render to Viewport 2.0.</p>\n\
<p><span class=\'code\'>Default.xml</span> is the main fragment graph that describes how Maya renders in Viewport 2.0. When this fragment graph is executed, the scene is displayed in the viewport.</p>\n\
<p>It connects various fragments and fragment graphs such as Maya_3d_Renderer, which connects fragment graphs such as HoldOutPasses and Maya_PostEffects, which connects fragments and fragment graphs such as the mayaUIDrawPass and Maya_SSAO, and so forth.</p>\n\
<p>These xml files serve as examples of how to write your own script fragment and fragment graphs for a fragment renderer.</p>\n\
<p>When creating your own fragment renderer, you can re-use existing Maya fragments, and only write the xml for the fragments that you want to customize. For example, to create your own custom motion blur pass, you can write a motion blur fragment and combine it with existing Maya fragments.</p>\n\
<p>One way to accomplish this would be to do as follows:</p>\n\
<ol>\n\
<li>Copy the existing Maya fragment/fragment graph .xml files into a new folder.</li>\n\
<li><p>Modify the fragment/fragment graph that you want to customize and rename it.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Directly modifying the files in <span class=\'code\'>bin/ScriptFragment</span> is not recommended, as you may inadvertently corrupt Maya. It is therefore recommended that the fragment files first be copied into a new folder.</p>\n\
</blockquote></li>\n\
<li><p>Modify the main fragment graph (<span class=\'code\'>default.xml</span>) to point to your modified fragment/fragment graph (from step 2), and give the main fragment graph a new name.</p></li>\n\
</ol>\n\
<p>Some procedurals cannot be easily represented as script fragments, and are provided as hardcoded C++ procedural fragments with Maya. You can combine C++ procedural fragments with script fragments in your fragment graph.</p>\n\
<blockquote>\n\
<p><strong>Tip:</strong> To reproduce Maya&#39;s renderer, first initialize an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderOverride</a></span> with a list of operations such as the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class FragmentRenderOverride(omr.MRenderOverride):\n\
\n\
   def __init__(self, name):\n\
       self.operatioIndex = 0\n\
       self.operations =  [omr.MSceneRender(&quot;myRendererSameAsMaya&quot;, “default”),\n\
                          omr.MHUDRender(),\n\
                          omr.MPresentTarget(&quot;present&quot;)]\n\
</pre></div><p>Where <em>“default”</em> is the name of the render fragment that Maya uses when not overridden. <span class=\'code\'>default.xml</span> can be found in the <span class=\'code\'>bin/ScriptFragment</span> folder of your Maya installation directory.</p>\n\
<p>Default only draws the beauty pass and does not include the drawing of UI, shadow maps, HUD, and so forth that are part of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSceneRender</a></span>.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"api-classes-and-interfaces\"></a><h2 id=\"api-classes-and-interfaces\">API classes and interfaces</h2></div>\n\
<p>API entry points for creating a fragment renderer are as follows. See the <em>viewRenderOverrideFromFragments</em> plug-in in the Developer Kit and <a href=\'#!/url=./dev_help/Viewport-2-0-API/Write-fragments-and-fragment/Create-a-fragment-renderer-plug.html\' title=\'\'>Create a fragment renderer plug-in example</a> for example usage of these interfaces.</p>\n\
<ul>\n\
<li>Call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::getFragmentManager()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a0f42783e8eee6f472d6bbb2acb6b2f2d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_renderer.html#a51f752a7f87444ff57122404b9a6f7b7&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderer::getFragmentManager()</a></span> to access the Fragment Manager, and call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFragmentManager::addFragmentGraphFromFile()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html#a222716cf7cc5d67a80ca5be267503813&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_fragment_manager.html#a1e7ecf0b5a2730d8be48c311b44bae1a&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFragmentManager::addFragmentGraphFromFile()</a></span> to register a script fragment or fragment graph.</li>\n\
<li><p>Create your scene render using this <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSceneRender</a></span> constructor that allows you to provide the name of the fragment with which you want to render the scene.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">MSceneRender (const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> &amp;name, const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> &amp;fragmentName)</pre></div></li>\n\
<li>Initialize an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderOverride</a></span> with a list of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderOperation</a></span>s, one of which is the custom render operation, derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSceneRender</a></span>.</li>\n\
<li>Register it by calling <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::registerOverride()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ae677d98e2300e2f9c69abb576539ac37&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_renderer.html#a04eef3c7c9f5030e61bb6f4e3ad45e9d&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderer::registerOverride()</a></span>.</li>\n\
<li>To get or set render parameters:\n\
<ul>\n\
<li>Call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender::getParameters()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a426c26adb287500c03beeabeee48851c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html#af148b038cde45838c9969718ace4dc1f&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSceneRender::getParameters()</a></span> to return a pointer to <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderParameters\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_parameters.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_parameters.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderParameters</a></span>, which is a block of render input parameters used to control the renderer</li>\n\
<li>Call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderParameters::setParameter()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_parameters.html#aa17e2c9a17b86064950103066fa307ef&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_parameters.html#a05a48ff6065d53bea08285c7ca7b164b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderParameters::setParameter()</a></span> to pass the values to the render fragment used by the custom <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSceneRender</a></span>.</li>\n\
</ul></li>\n\
<li><p>(Optional) Derive from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderScriptCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_script_callback.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderScriptCallback</a></span> class to create a callback function that can be registered and called from your script fragment <span class=\'code\'>.xml</span>. Implement the <span class=\'code\'>execute()</span> function which allows you to obtain the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderParameters\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_parameters.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_parameters.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderParameters</a></span> from the current renderer graph and three optional values coming from the script. Use this method to compute any desired behavior and call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderParameters::setParameter()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_parameters.html#aa17e2c9a17b86064950103066fa307ef&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_parameters.html#a05a48ff6065d53bea08285c7ca7b164b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderParameters::setParameter()</a></span> to pass the results back to the script or to other connected fragments in the graph. See the <a href=\'#!/url=./dev_help/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html#call\' title=\'\'>Call</a> command in the <a href=\'#!/url=./dev_help/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html\' title=\'\'>Script fragment commands</a> topic for more information.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::registerScriptCallback()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ae60e50cef7a7b5b5a006a74fab479c11&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderer::registerScriptCallback()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderer::deregisterScriptCallback()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a8db004785e17022a463c4a195d50c168&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderer::deregisterScriptCallback()</a></span> interfaces allow you to register/deregister an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderScriptCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_script_callback.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MRenderScriptCallback</a></span>. After registering, this callback can be called using the <span class=\'code\'>Call</span> command in your script fragment .xml.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"fragment-and-fragment-graph-xml-definition\"></a><h2 id=\"fragment-and-fragment-graph-xml-definition\">Fragment and fragment graph XML definition</h2></div>\n\
<div class=\'section\'><a id=\"parts-of-the-fragment-description\"></a><h3 id=\"parts-of-the-fragment-description\">Parts of the fragment description</h3></div>\n\
<p>Refer to <span class=\'code\'>maya_DepthPrePass.xml</span> for an example.</p>\n\
<p>All fragments are contained within the compound element <em>fragment</em>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;fragment  uiName=&quot;maya_DepthPrePass&quot; name=&quot;maya_DepthPrePass&quot; type=&quot;sceneEffect&quot; class=&quot;ScriptFragment&quot; version=&quot;1.0&quot; feature_level=&quot;30&quot; &gt;\n\
</pre></div><ul>\n\
<li>Set the <em>name</em> attribute to the internal name of the fragment.</li>\n\
<li>You can set the <em>uiName</em> to be the same as its internal name, or provide it with an external name.</li>\n\
<li>Set the <em>type</em> attribute to <strong>sceneEffect</strong>.</li>\n\
<li>The <em>class</em> attribute must be set to <strong>ScriptFrament</strong> for fragments (and FragmentGraph for fragment graphs.)</li>\n\
<li>Set the <em>version</em> attribute to identify changes between releases. In most cases, you can set this value to 1.0, as in this example.</li>\n\
<li>Set the <em>feature_level</em> attribute to the highest feature level support required by the effects and features used in the passes. For example, feature_level 30 is equivalent to DirectX 10. In most cases, setting this value to 30 as in this example is sufficient.</li>\n\
</ul>\n\
<p>The fragment definition also contains the following elements:</p>\n\
<ul>\n\
<li><p>An optional <em>description</em> element, where a description is wrapped in a CDATA block</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;description&gt;\n\
    &lt;![CDATA[\n\
    depth pre-pass: make depthStencil &amp; linear, readable opaque depth texture]]&gt;\n\
&lt;/description&gt;</pre></div></li>\n\
<li><p>A required set of input parameters called <em>properties</em>.</p>\n\
<p>Use the format <span class=\'code\'>&lt;type name =&quot;myParam&quot;&gt;</span>, where <em>type</em> is the type of the parameter (for example, int, float4, and so forth), and <em>name</em> is the required name of the parameter (unique within the set).</p>\n\
<p>This may include pre-defined, known inputs in Maya; for example, preOpaqueUIList, transparentBitmapsList, camera, viewport, and so forth.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;properties&gt;\n\
    &lt;countedObject  name=&quot;preOpaqueUIList&quot; /&gt;\n\
    ....\n\
&lt;/properties&gt;</pre></div></li>\n\
<li><p>A set of initial <em>values</em> for parameters without input connections</p>\n\
<p>To define parameters with an initial value, in the value element, use the format:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;type name =&quot;myParam&quot; value =&quot;…&quot; /&gt; \n\
</pre></div><p>The exact format of the value string is determined by the type of the parameter. Multiple values are given using comma-separated lists; for example, “0,1,3” would match an int3 or float3 parameter.</p>\n\
<p>All attributes in the fragment graph that share the same name are initialized with these values.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;values&gt;\n\
    &lt;float4 name=&quot;viewport&quot; value=&quot;0.000000,0.000000,1.000000,1.000000&quot;  /&gt;\n\
    ....\n\
&lt;/values&gt;</pre></div></li>\n\
<li><p>A set of output parameters called <em>outputs</em>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;outputs&gt;\n\
    &lt;target  name=&quot;depthOut&quot; /&gt;\n\
    &lt;target  name=&quot;opaquedepthtexture&quot; /&gt;\n\
&lt;/outputs&gt;</pre></div></li>\n\
<li><p>An implementation element containing a list of commands. Set <em>render</em> to <strong>OGS</strong> and <em>language</em> to <strong>ScriptInterpreter</strong>.</p>\n\
<p>Each command is defined by a single element of the form:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;command     value=&quot;theValue&quot; /&gt;\n\
&lt;implementation render=&quot;OGS&quot; language=&quot;ScriptInterpreter&quot; version=&quot;0.1&quot; &gt;\n\
    &lt;scriptCommands&gt;\n\
        &lt;AcquireTarget name=&quot;localZ&quot; format=&quot;EFORMAT_R32_FLOAT&quot; size=&quot;@finalDesc.size&quot; relSize=&quot;1.0,1.0&quot; msaa=&quot;0&quot; /&gt;\n\
        ....\n\
    &lt;/scriptCommands&gt;\n\
&lt;/implmentation&gt;\n\
</pre></div><p>See <a href=\'#!/url=./dev_help/Viewport-2-0-API/Write-fragments-and-fragment/Script-fragment-commands.html\' title=\'\'>Script fragment commands</a> for a list of available commands.</p>\n\
<p>When listing commands, use the symbol @ to indicate that the value should be obtained from a parameter instead of being set by a local value. For example, in the code snippet above, the value is obtained from the finalDesc parameter.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"parts-of-a-fragment-graph-definition\"></a><h3 id=\"parts-of-a-fragment-graph-definition\">Parts of a fragment graph definition</h3></div>\n\
<p>As described earlier, various script fragments and fragment graphs can be connected to one another to form a single fragment graph.</p>\n\
<p>Refer to <span class=\'code\'>Maya_PostEffects.xml</span> for an example.</p>\n\
<p>All fragments are contained within the compound element <em>fragment_graph</em> as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;fragment_graph  name=&quot;Maya_PostEffects&quot; ref=&quot;Maya_PostEffects&quot; class=&quot;FragmentGraph&quot; version=&quot;1.0&quot; feature_level=&quot;0&quot; &gt;\n\
<ul>\n\
<li></li></ul></pre></div><p>Set the <em>ref</em> attribute to the internal name of the fragment graph.</p>\n\
<li><p>You can set the <em>name</em> attribute to be the same as the internal name, or provide it with an external name.</p></li>\n\
<li><p>The <em>class</em> attribute must be set to <strong>FragmentGraph</strong>.</p></li>\n\
\n\
<p>The fragment_graph definition also contains the following elements:</p>\n\
<ul>\n\
<li><p><em>Fragments</em></p>\n\
<p>List all the fragments contained in this graph; the order of the listing is not important.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;fragments&gt;\n\
    &lt;fragment_ref name=&quot;Maya_UI&quot; ref=&quot;mayaUIDrawPass&quot; /&gt;\n\
    ....\n\
&lt;/fragments&gt;\n\
</pre></div><p>Set the <em>ref</em> attribute to the internal/default name of the fragment; that is, the name defined by the <em>name</em> attribute in the <em>fragment</em> element in the XML file.</p>\n\
<p>You can set the <em>name</em> attribute to be the same as the <em>ref</em> attribute. Alternatively, you can set it to a different name for use in different instances. This way, if the same attribute is used in two different passes, the attribute can have different connections in the two passes.</p>\n\
<p>For example, refer to <span class=\'code\'>Maya_PostEffects.xml</span>, where the <span class=\'code\'>Maya_PostEffects</span> fragment graph includes the graph <span class=\'code\'>Maya_SSAO</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;fragment_ref name=&quot;Maya_SSAO&quot; ref=&quot;Maya_SSAO&quot; /&gt;\n\
</pre></div><p>It then connects the <span class=\'code\'>Maya_SSAO.res</span> to <span class=\'code\'>Maya_MotionBlur.input</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;connect from=&quot;Maya_SSAO.res&quot; to=&quot;Maya_MotionBlur.input&quot; name=&quot;input&quot; /&gt;\n\
</pre></div><p>To create different connections to or from <span class=\'code\'>Maya_SSAO</span> in another pass or fragment graph, you can instead do the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;fragment_ref name=&quot;Maya_SSAO_instance1&quot; ref=&quot;Maya_SSAO&quot; /&gt;\n\
</pre></div><p>Then connect it as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;connect from=&quot;Maya_SSAO_instance1.res&quot; to=&quot;Maya_MotionBlur.input&quot; name=&quot;input&quot; /&gt;\n\
\n\
</pre></div><p><span class=\'code\'>Maya_MotionBlur.input</span> can now receive a different input in other fragment graphs.</p></li>\n\
<li><p><em>Connections</em></p>\n\
<p>Specify all the connections between fragments. Each connect element specifies one output, <em>from</em>, connected to one property input, <em>to</em>.</p>\n\
<p>Inputs may have only one connection, but outputs may have an arbitrary number. Unconnected inputs are either system supplied variables, matched by semantic, or become tweakable through the API.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;connections&gt;\n\
    &lt;connect from=&quot;mayaPreUIScript.output&quot; to=&quot;Maya_UI.final&quot; name=&quot;final&quot; /&gt;\n\
    ....\n\
&lt;/connections&gt;\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> <span class=\'code\'>final</span> denotes the buffer that results should be drawn into at the end of the operation.</p>\n\
</li>\n\
<li><p><em>Properties</em></p>\n\
<p>List all unconnected input parameters by providing the name and attribute of its sub-fragment/fragment graph, and the external name that you want to use to represent it.</p>\n\
<p>For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;properties&gt;\n\
    &lt;float4  name=&quot;viewport&quot; ref=&quot;Maya_SSAO.viewport&quot; /&gt;\n\
    ....\n\
&lt;/properties&gt;\n\
</pre></div><p>Maya_SSAO is a sub-fragment graph and its viewport attribute should be exposed using the alias <em>viewport</em>.</p></li>\n\
<li><p><em>Values</em></p>\n\
<p>Define initial values for unconnected input parameters.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;values&gt;\n\
    &lt;float4 name=&quot;viewport&quot; value=&quot;0.000000,0.000000,1.000000,1.000000&quot;  /&gt;\n\
    ....\n\
&lt;/values&gt;</pre></div></li>\n\
<li><p><em>Outputs</em></p>\n\
<p>Specify the outputs here, and list the primary output first.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;outputs&gt;\n\
    &lt;target  name=&quot;output&quot; ref=&quot;Maya_UI.output&quot; /&gt;\n\
&lt;/outputs&gt;</pre></div></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";