var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Create a fragment renderer plug-in example</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Create a fragment renderer plug-in example</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"create-a-fragment-renderer-plug-in-example\"></a></div>\n\
<p>A <em>viewRenderOverrideFromFragments</em> example plug-in is available which demonstrates the use of a set of APIs that allow you to use scripted fragment and fragment graphs to render the scene and any desired post effects. Script fragments are the building blocks used internally by Maya for standard viewport rendering effects, and are located in a series of <span class=\'code\'>.xml</span> files in the <span class=\'code\'>bin/ScriptFragment</span> folder of your Maya installation directory.</p>\n\
<p>These APIs allow you to reuse, modify and extend the Maya viewport and hardware renderer by combining Maya&#39;s own standard building blocks with your own.</p>\n\
<p>The example plug-in does the following:</p>\n\
<ul>\n\
<li>renders the main scene</li>\n\
<li>inverts the camera through a plane, renders the scene again into an offscreen buffer and uses that offscreen buffer as a texture in the next pass</li>\n\
<li>places the texture on a quad and renders the quad into the main scene</li>\n\
</ul>\n\
<p>Refer to <span class=\'code\'>pyGroundReflectionRenderer.py</span> for the plug-in example.</p>\n\
<p>This example creates a <strong>Ground Reflections</strong> renderer in the <strong>Renderer</strong> viewport panel menu. When you switch to the Ground Reflections renderer, the viewport updates to render your object and its reflection.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/FragmentRenderer_Example.png\' title=\'\' /></div>\n\
<blockquote>\n\
<p><strong>Note:</strong> <strong><em>Before you load the example</em></strong>, you must <em>set the path to the plug-in</em> in the <span class=\'code\'>initializePlugin</span> function of the <span class=\'code\'>pyGroundReflectionRenderer.py</span> file (line 242).</p>\n\
</blockquote>\n\
<p>Fragment xml files are provided in the <span class=\'code\'>ScriptFragment</span> directory of the <span class=\'code\'>viewRenderOverrideFromFragments</span> plug-in folder. The main fragment graph for this render is <span class=\'code\'>GroundReflections.xml</span>. The provided <span class=\'code\'>.xml</span> files must be in your shader search path.</p>\n\
<p>The <span class=\'code\'>initializePlugin</span> function of the plug-in code also adds the <span class=\'code\'>Shaders</span> directory of this plug-in to the shader search path.</p>\n\
<p>To access the fragment manager and add a new fragment graph, call <span class=\'code\'>MRenderer.getFragmentManager()</span> as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">omr.MRenderer.getFragmentManager().addFragmentGraphFromFile(&quot;GroundReflections.xml&quot;)\n\
</pre></div><p>Create your scene render using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MSceneRender</a></span> and provide the name of the fragment graph (in this case, “GroundReflections”):</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class FragmentSceneRender(omr.MSceneRender):\n\
    def __init__(self, name):\n\
        super(FragmentSceneRender, self).__init__(name, &quot;GroundReflections&quot;)\n\
</pre></div><p>Create an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderOverride</a></span> to create the fragment renderer, and register it by calling:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">omr.MRenderer.registerOverride(fragmentRenderer)\n\
</pre></div><p>When you create the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderOverride</a></span>, you provide a list of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderOperation\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_operation.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderOperation</a></span>s, one of which is the custom render operation, which is derived from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MSceneRender</a></span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class FragmentRenderOverride(omr.MRenderOverride):\n\
\n\
    def __init__(self, name):\n\
        self.operatioIndex = 0\n\
        self.operations =  [FragmentSceneRender(&quot;sceneAndGroundReflections&quot;),\n\
                           omr.MHUDRender(),\n\
                           omr.MPresentTarget(&quot;present&quot;)]\n\
\n\
</pre></div><p>When overriding the <span class=\'code\'>preSceneRender</span> function, call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender::getParameters()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a426c26adb287500c03beeabeee48851c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html#af148b038cde45838c9969718ace4dc1f&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MSceneRender::getParameters()</a></span> to obtain the block of render parameters. See <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderParameters\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_parameters.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_parameters.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderParameters</a></span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def preSceneRender(self, context):\n\
    params = self.getParameters()\n\
</pre></div><p>Create an options node, after checking that one doesn’t already exist:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">optionsNodeName = &#39;groundReflectionOptions&#39;\n\
optionObj = nameToNode(optionsNodeName)\n\
if optionObj is None:\n\
    optionObj = nameToNode(cmds.createNode(RenderOverrideOptions.kTypeName, name=optionsNodeName, skipSelect=True))\n\
</pre></div><p>You can then obtain the plugs from the options node, and call <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRenderParameters::setParameter()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_render_parameters.html#aa17e2c9a17b86064950103066fa307ef&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_render_parameters.html#a05a48ff6065d53bea08285c7ca7b164b&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRenderParameters::setParameter()</a></span> to pass the values to the render fragment used by the custom <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSceneRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_scene_render.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MSceneRender</a></span> (custom scene render operation).</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">if optionObj is not None:\n\
    # set the fragment&#39;s enabled input\n\
    optionPlug = om.MPlug(optionObj, RenderOverrideOptions.enableReflections)\n\
    if optionPlug is not None:\n\
        enabled = getBoolPlugValue(optionPlug)\n\
        params.setParameter(&#39;EnableReflection&#39;, enabled)\n\
</pre></div><p>The GroundReflections fragment graph contains fragments such as DepthTarget, as well as other fragment graphs such as ReflectionPass which contains the fragment graph Reflection_Renderer, which contains fragments such as simpleBlitScript, MayaShadedBeauty, DrawPreUIOption, and so forth. It also uses the hard-coded C++ procedural fragment VE_ReflectCamera.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> The ReflectionPass fragment graph is simply a <em>default</em> fragment graph that has been renamed for clarity. The sub-fragments that it consists of are used in Maya’s standard scene renderer.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"to-set-an-effect-its-parameters-and-its-associated-textures\"></a><h2 id=\"to-set-an-effect-its-parameters-and-its-associated-textures\">To set an effect, its parameters and its associated textures</h2></div>\n\
<p>Some of the fragments in the example fragment graph are scripted fragments. These are leaf fragments in the graph that contain the commands used to execute the rendering operation. Some of these commands allow you to assign effects for the pass, and control the effects parameters.</p>\n\
<ol>\n\
<li><p>Use the <span class=\'code\'>SetEffect</span> command to set the effect.</p>\n\
<p>Refer to <span class=\'code\'>VE_PlanarReflection_RenderFragment.xml</span> for example usage of these commands.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;SetEffect name=&quot;DilateH&quot; path=&quot;DistanceDilate&quot; technique=&quot;DilateHoriz&quot; /&gt;\n\
&lt;SetEffectParameter effect=&quot;DilateH&quot; name=&quot;gAmount&quot; value=&quot;_UseDistanceDilate_Amount&quot; /&gt;\n\
&lt;SetTexture effect=&quot;DilateH&quot; name=&quot;gSourceTex&quot; value=&quot;PointClamp&quot; texture=&quot;@DistanceMap&quot; /&gt;\n\
&lt;SetEffectParameter effect=&quot;DilateH&quot; name=&quot;gSourceSamp&quot; value=&quot;PointClamp&quot; /&gt;\n\
&lt;SetTarget index=&quot;0&quot; value=&quot;tempDilate&quot; /&gt;\n\
&lt;Render name=&quot;Quad&quot; /&gt;\n\
</pre></div><p>An effect is the equivalent of an instance of a non-fragment <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MShaderInstance\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_shader_instance.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MShaderInstance</a></span>, but it cannot be used directly in a script. The name attribute is the name used to refer to this effect. The path attribute is the path and name of the effects file. It is not necessary to provide a file extension, as Maya will look up the appropriate extension based on the device being used; for example, <span class=\'code\'>.fx</span> for DX11, <span class=\'code\'>.ogsfx</span> for Core Profile and <span class=\'code\'>.cgfx</span> for non-core profile OpenGL. The technique attribute refers to the technique in the effects file that should be used, as there could be more than one in the single file.</p></li>\n\
<li><p>Set your effect values using the <span class=\'code\'>SetEffectParameter</span> command, and the texture used by the effect using the <span class=\'code\'>SetTexture</span> command.</p>\n\
<p>If the shaders you are referring to use macros, you can also set the <em>macrolist</em> value to control how the shader is compiled.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;SetEffect name=&quot;BlurH&quot; path=&quot;Blur&quot; technique=&quot;BlurHoriz&quot; macrolist=&quot;BLUR_AMOUNT=12&quot; /&gt;</pre></div></li>\n\
<li><p>Call this command at the end of the script to restore the original Viewport 2.0 override effect. When the <span class=\'code\'>SetEffect</span> command is used, it works by setting a local override effect in Viewport 2.0.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;RestoreOverrideEffect /&gt;</pre></div></li>\n\
</ol>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";