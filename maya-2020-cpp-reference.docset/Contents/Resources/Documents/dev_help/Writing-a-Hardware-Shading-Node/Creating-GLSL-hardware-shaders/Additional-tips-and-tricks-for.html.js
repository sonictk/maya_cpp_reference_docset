var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Additional tips and tricks for writing GLSL shaders in OGSFX format</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Additional tips and tricks for writing GLSL shaders in OGSFX format</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"additional-tips-and-tricks-for-writing-glsl-shaders-in-ogsfx-format\"></a></div>\n\
<p>When porting pixel shaders from GLSL to OGSFX, in particular shaders found via demo sites, the following tips may be helpful:</p>\n\
<ul>\n\
<li><p>See <span class=\'code\'>bin\\OGSFX</span> in the Maya installation for the <span class=\'code\'>Common.ogsfh</span> file.</p>\n\
<p>This file contains common shader code that defines the following uniforms and attributes, which you can re-use in your own shader code:</p>\n\
<ul>\n\
<li><p>world view projection transformation matrix</p></li>\n\
<li><p>screen size</p></li>\n\
<li><p>texture co-ordinates</p></li>\n\
<li><p>vertex shader input structure</p></li>\n\
<li><p>vertex shader output structure</p></li>\n\
</ul>\n\
<p>It also includes a default screen quad vertex shader that outputs the position and texture co-ordinates.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Remember to add:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &quot;Common.ogsfh&quot;\n\
</pre></div></blockquote></li>\n\
<li><p>Instead of using screen co-ordinates as input in your shader code, use UV co-ordinates. This way, your shader can be applied to any geometry: sphere, plane, and so forth.</p>\n\
<p>For example, instead of using <span class=\'code\'>gl_FragCoord.xy</span>, use <span class=\'code\'>VSUV</span> (defined in <span class=\'code\'>Common.ogsfh</span>).</p></li>\n\
<li><p>If you are writing a very simple shader, in lieu of writing your own vertex shader, you can re-use the one defined in <span class=\'code\'>Common.ogsfh</span> by specifying it as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">VertexShader (in VS_INPUT_ScreenQuad, out VS_TO_PS_ScreenQuad) = VS_ScreenQuad;</pre></div></li>\n\
<li><p>If your shader file fails to load, you can refer to errors in the Maya Output Window.</p></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";