var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>OGSFX preprocessor directives</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>OGSFX preprocessor directives</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"ogsfx-preprocessor-directives\"></a></div>\n\
<p>Add the following preprocessor directives to include conditionals in your shader code. This is most useful when you only want to run a block of code under certain conditions; for example, to execute code only during a specified shader stage; or, if to specify the version of OGSFX that should be used to compile the shaders.</p>\n\
<div class=\'section\'><a id=\"to-specify-the-version-of-ogsfx-used-to-compile-the-shader\"></a><h2 id=\"to-specify-the-version-of-ogsfx-used-to-compile-the-shader\">To specify the version of OGSFX used to compile the shader</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#version versionNumber\n\
</pre></div><p>If specified, this directive must be the very first line of the file. It specifies the version of OGSFX that should be used to compile/link the shaders.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">OGSFX           GLSL            OpenGL version\n\
#version 100    #version 150    OpenGL 3.2\n\
#version 150    #version 150    OpenGL 3.2\n\
#version 330    #version 330    OpenGL 3.3  * default for Windows and Linux\n\
#version 400    #version 400    OpenGL 4.0\n\
#version 410    #version 410    OpenGL 4.1\n\
#version 420    #version 420    OpenGL 4.2  * default for OS/X\n\
#version 430    #version 430    OpenGL 4.3\n\
</pre></div><div class=\'section\'><a id=\"to-enabledisable-an-internal-feature\"></a><h2 id=\"to-enabledisable-an-internal-feature\">To enable/disable an internal feature</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#pragma pragmaName : Boolean\n\
</pre></div><p>Currently, only the following pragma are available:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#pragma Usecb : true            // Use constant buffers (default - true)\n\
#pragma OptimizeUniforms : true // Optimize uniforms by packing them into a single constant buffer (default - true)\n\
</pre></div><div class=\'section\'><a id=\"to-print-error-messages\"></a><h2 id=\"to-print-error-messages\">To print error messages</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#error &quot;Should not be there!&quot;\n\
</pre></div><p>This directive causes the implementation to write a diagnostic message to the shader’s information log. The message will be the tokens following the <span class=\'code\'>#error</span> directive, up to the first new-line. The implementation must then consider the shader to be ill-formed.</p>\n\
<div class=\'section\'><a id=\"to-import-additional-shader-files\"></a><h2 id=\"to-import-additional-shader-files\">To import additional shader files</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#include &quot;resources.ogsfh&quot;\n\
</pre></div><p>The <span class=\'code\'>#include</span> directive instructs the preprocessor to treat the contents of the specified file as if it exists in the source program, at the point where the directive appears.</p>\n\
<div class=\'section\'><a id=\"if-conditionals\"></a><h2 id=\"if-conditionals\">If conditionals</h2></div>\n\
<p><span class=\'code\'>#if</span>, <span class=\'code\'>#ifdef</span>, <span class=\'code\'>#ifndef</span>, <span class=\'code\'>#else</span>, <span class=\'code\'>#elif</span>, and <span class=\'code\'>#endif</span> are defined to operate as are standard for ANSI C preprocessors.</p>\n\
<p><span class=\'code\'>#define</span> and <span class=\'code\'>#undef</span> are defined as are standard for ANSI C preprocessors for macro definitions, both with and without macro parameters.</p>\n\
<p>Expressions following <span class=\'code\'>#if</span> and <span class=\'code\'>#elif</span> are restricted to expressions operating on literal integer constants, plus identifiers consumed by the defined operator. Character constants are not supported.</p>\n\
<div class=\'section\'><a id=\"defining-shader-stages\"></a><h2 id=\"defining-shader-stages\">Defining shader stages</h2></div>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#vertexshader\n\
#pixelshader\n\
#geometryshader\n\
#tessevalshader\n\
#tesscontrolshader\n\
#endshader\n\
</pre></div><p>These directives can be used to enable code for a specified shader stage: All code delimited by the pair <span class=\'code\'>#vertexshader ... #endshader</span> is compiled only on the vertex shader. Similarly, code delimited by <span class=\'code\'>#pixelshader ... #endshader</span> or <span class=\'code\'>#geometryshader ... #endshader</span> is compiled only on the pixel or geometry shader.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";