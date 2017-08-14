var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwUnlitShader/MTexture.h</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_unlit_shader_2_m_texture_8h-example.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>hwUnlitShader/MTexture.h</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">hwUnlitShader/MTexture.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef MAYA_API_MTexture</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MAYA_API_MTexture</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MTexture.h</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: Texture object, that can be mipmapped. Eventually, this</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              class will likely end up in the Maya API.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTHOR: Christian Laforte</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MImage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;assert.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGL.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> highestPowerOf2(<span class=\"keywordtype\">int</span> num);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>TexObj</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    TexObj(GLenum target = GL_TEXTURE_2D)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get a texture identifier.</span></div>\n\
<div class=\"line\">        glGenTextures(1, &amp;fTextureNum);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fTarget = target;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Set up default values for the texture parameters.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// They are the same as the OpenGL default.</span></div>\n\
<div class=\"line\">        fMinFilterParam = GL_NEAREST;</div>\n\
<div class=\"line\">        fMagFilterParam = GL_LINEAR;</div>\n\
<div class=\"line\">        fWrapSParam = GL_REPEAT;</div>\n\
<div class=\"line\">        fWrapTParam = GL_REPEAT;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~TexObj()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        glDeleteTextures(1, &amp;fTextureNum);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> bind()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Bind the texture.</span></div>\n\
<div class=\"line\">        glBindTexture(fTarget, fTextureNum);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Set up the texture parameters.</span></div>\n\
<div class=\"line\">        glTexParameteri(fTarget, GL_TEXTURE_MIN_FILTER, fMinFilterParam);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\">        glTexParameteri(fTarget, GL_TEXTURE_MAG_FILTER, fMagFilterParam);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\">        glTexParameteri(fTarget, GL_TEXTURE_WRAP_S, fWrapSParam);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\">        glTexParameteri(fTarget, GL_TEXTURE_WRAP_T, fWrapTParam);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> parameter(GLenum pname, GLint param)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">switch</span> (pname)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> GL_TEXTURE_MIN_FILTER: fMinFilterParam = param;    <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> GL_TEXTURE_MAG_FILTER: fMagFilterParam = param;    <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> GL_TEXTURE_WRAP_S:     fWrapSParam = param;        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> GL_TEXTURE_WRAP_T:     fWrapTParam = param;        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    GLenum fTarget;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Various parameters. See glTexParameterf() in MSDN for more info.</span></div>\n\
<div class=\"line\">    GLint fMinFilterParam;</div>\n\
<div class=\"line\">    GLint fMagFilterParam;</div>\n\
<div class=\"line\">    GLint fWrapSParam;</div>\n\
<div class=\"line\">    GLint fWrapTParam;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    GLuint fTextureNum;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>MTexture</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> Type</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        RGBA,</div>\n\
<div class=\"line\">        HILO,</div>\n\
<div class=\"line\">        NMAP</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    MTexture();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~MTexture()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (m_levels)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i &lt; m_numLevels; i++)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (m_levels[i])</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"keyword\">delete</span> [] m_levels[i];</div>\n\
<div class=\"line\">                    m_levels[i] = NULL;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> [] m_levels;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> set(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a> &amp;image, Type type, <span class=\"keywordtype\">bool</span> mipmapped = <span class=\"keyword\">true</span>, GLenum target = GL_TEXTURE_2D);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// This function assumes that the file texture is square, and</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// that its dimensions are exponents of 2.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> load(<a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> filename, Type type, <span class=\"keywordtype\">bool</span> mipmapped = <span class=\"keyword\">true</span>, GLenum target = GL_TEXTURE_2D);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> specify(GLenum target);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns 1 if no mipmapping, &gt;1 otherwise.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> levels() { <span class=\"keywordflow\">return</span> m_numLevels; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> bind();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>* fetch(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> s, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> t, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> level = 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Verify that the mipmap level exists.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (level &gt; m_numLevels || m_levels == NULL || m_levels[level] == NULL)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> internalFetch(s, t, level);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> square()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> m_width == m_height;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> mipmapped()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> levels() &gt; 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Return the width of a specific mipmap level.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If level == 0, return the width of the base level (source image).</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Width is always &gt;= 1, to prevent non-square textures from having zero-sized levels.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> width(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> level = 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> w = m_width &gt;&gt; level;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (w &gt; 0)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> w;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> height(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> level = 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> h = m_height &gt;&gt; level;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (h &gt; 0)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> h;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>* internalFetch(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> s, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> t, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> level)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        assert((s &gt;= 0) &amp;&amp; (s &lt; width(level)));</div>\n\
<div class=\"line\">        assert((t &gt;= 0) &amp;&amp; (t &lt; height(level)));</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> m_levels[level] + 4 * ((width(level) * t) + s);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Fairly permanent variables   </span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_width, m_height;</div>\n\
<div class=\"line\">    Type m_type;</div>\n\
<div class=\"line\">    TexObj m_texObj;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> m_mipmapped;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Pyramid levels (assumes 4 bytes per pixel for now)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> **m_levels;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_numLevels;   <span class=\"comment\">// Number of mipmaps + base texture</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Cached variables (Depend on previous private variables)</span></div>\n\
<div class=\"line\">    GLint       m_internalFormat;</div>\n\
<div class=\"line\">    GLenum      m_format;</div>\n\
<div class=\"line\">    GLenum      m_componentFormat;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // MAYA_API_MTexture</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";