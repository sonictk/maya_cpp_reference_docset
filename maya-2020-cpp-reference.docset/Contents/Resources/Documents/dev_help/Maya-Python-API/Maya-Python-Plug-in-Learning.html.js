var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Maya Python Plug-in Learning Path</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Maya Python Plug-in Learning Path</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"maya-python-plug-in-learning-path\"></a></div>\n\
<div class=\'section\'><a id=\"welcome\"></a><h2 id=\"welcome\">Welcome!</h2></div>\n\
<p>This Learning Path aims to outline the important concepts, classes, and functions used to develop Maya plug-ins with Python. We recommend reading the topics in this Learning Path in sequential order, however the annotated code samples can be consulted independently as reference material.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> This learning path uses both the Maya Python 1.0 and 2.0 APIs. The 2.0 API is faster and more &quot;Pythonic&quot;, though not all features from 1.0 are available yet in 2.0. For details on the differences between this API and the legacy 1.0 API, see <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-API-2-0.html\' title=\'\'>Maya Python API 2.0.</a></p>\n\
</blockquote>\n\
<div class=\'figure\'><img src=\'dev_help/images/voxelizerScene_redux.png\' title=\'\' /></div>\n\
<p><em>&quot;<a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Dependency-Graph-Plug-in-Basics/Example-Voxelizer-Node.html\' title=\'\'>Now with 100% more voxels!</a>&quot;</em></p>\n\
<div class=\'section\'><a id=\"python-scripts-and-python-plug-ins---whats-the-difference\"></a><h2 id=\"python-scripts-and-python-plug-ins---whats-the-difference\">Python Scripts and Python Plug-ins - What&#39;s the Difference?</h2></div>\n\
<p>To begin, an important distinction should be made here between Python <strong>scripts</strong> and <strong>plug-ins</strong> for Maya:</p>\n\
<ul>\n\
<li><p><strong>Python scripts</strong> - These programs can be executed in Maya&#39;s interactive Script Editor window. Python scripts generally make extensive use of the <span class=\'code\'>maya.cmds</span> module, whose functionality emulates the majority of Maya&#39;s MEL commands. The import statement below is typically found at the head of Maya Python scripts.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
</pre></div><p>In this learning path, we will use the <span class=\'code\'>maya.cmds</span> module to execute our Python plug-ins.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> For more information on the <span class=\'code\'>maya.cmds</span> Python module, consult <strong>Maya User Guide &gt; Technical Documentation &gt; CommandsPython</strong>.</p>\n\
</blockquote></li>\n\
<li><p><strong>Python plug-ins</strong> - These programs are loaded by Maya&#39;s Plug-in Manager from <span class=\'code\'>C:\\Users\\&lt;username&gt;\\Documents\\maya\\&lt;version&gt;\\plug-ins</span>, and from the directories defined in the <span class=\'code\'>MAYA_PLUG_IN_PATH</span> environment variable. Maya Python plug-ins can be used to define your own commands, nodes, shaders, constraints, file translators, and deformers to name but a few customizable elements. Python plug-ins for Maya make use of several <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"OpenMaya\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/namespace_open_maya.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">OpenMaya</a></span> modules, which are based on Maya&#39;s C++ API.</p>\n\
<p>2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.api.OpenMaya       as OpenMaya        # Common classes\n\
import maya.api.OpenMayaAnim   as OpenMayaAnim    # Animation classes\n\
import maya.api.OpenMayaRender as OpenMayaRender  # Rendering classes\n\
import maya.api.OpenMayaUI     as OpenMayaUI      # User interface classes\n\
\n\
</pre></div><p>1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya       as OpenMaya        # Common classes\n\
import maya.OpenMayaMPx    as OpenMayaMPx     # Classes from which to inherit\n\
import maya.OpenMayaAnim   as OpenMayaAnim    # Animation classes\n\
import maya.OpenMayaFX     as OpenMayaFX      # Effect classes (hair, particles, fluids)\n\
import maya.OpenMayaRender as OpenMayaRender  # Rendering classes\n\
import maya.OpenMayaUI     as OpenMayaUI      # User interface classes\n\
import maya.OpenMayaCloth  as OpenMayaCloth   # Cloth classes</pre></div></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";