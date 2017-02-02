var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwAnisotropicShader_NV20/MTextureCache.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_anisotropic_shader__n_v20_2_m_texture_cache_8cpp-example.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>hwAnisotropicShader_NV20/MTextureCache.cpp</h1>\n\
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
<div class=\"title\">hwAnisotropicShader_NV20/MTextureCache.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (C) 1995 - 2006 Autodesk, Inc. and/or its licensors.  All </span></div>\n\
<div class=\"line\"><span class=\"comment\">// rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The coded instructions, statements, computer programs, and/or related </span></div>\n\
<div class=\"line\"><span class=\"comment\">// material (collectively the &quot;Data&quot;) in these files contain unpublished </span></div>\n\
<div class=\"line\"><span class=\"comment\">// information proprietary to Autodesk, Inc. (&quot;Autodesk&quot;) and/or its </span></div>\n\
<div class=\"line\"><span class=\"comment\">// licensors, which is protected by U.S. and Canadian federal copyright </span></div>\n\
<div class=\"line\"><span class=\"comment\">// law and by international treaties.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The Data is provided for use exclusively by You. You have the right </span></div>\n\
<div class=\"line\"><span class=\"comment\">// to use, modify, and incorporate this Data into other products for </span></div>\n\
<div class=\"line\"><span class=\"comment\">// purposes authorized by the Autodesk software license agreement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// without fee.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The copyright notices in the Software and this entire statement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// including the above license grant, this restriction and the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// following disclaimer, must be included in all copies of the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Software, in whole or in part, and all derivative works of </span></div>\n\
<div class=\"line\"><span class=\"comment\">// the Software, unless such copies or derivative works are solely </span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the form of machine-executable object code generated by a </span></div>\n\
<div class=\"line\"><span class=\"comment\">// source language processor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTODESK DOES NOT MAKE AND HEREBY DISCLAIMS ANY EXPRESS OR IMPLIED </span></div>\n\
<div class=\"line\"><span class=\"comment\">// WARRANTIES INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF </span></div>\n\
<div class=\"line\"><span class=\"comment\">// NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// PURPOSE, OR ARISING FROM A COURSE OF DEALING, USAGE, OR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// TRADE PRACTICE. IN NO EVENT WILL AUTODESK AND/OR ITS LICENSORS </span></div>\n\
<div class=\"line\"><span class=\"comment\">// BE LIABLE FOR ANY LOST REVENUES, DATA, OR PROFITS, OR SPECIAL, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES, EVEN IF AUTODESK </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AND/OR ITS LICENSORS HAS BEEN ADVISED OF THE POSSIBILITY </span></div>\n\
<div class=\"line\"><span class=\"comment\">// OR PROBABILITY OF SUCH DAMAGES.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MTextureCache.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: Texture cache, used to temporarily store textures.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              Eventually, we&#39;ll likely expose the actual Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              texture cache to plug-ins to improve memory utilization</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              and performance.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// PS: Thanks to sbrew@lucasarts.com for contributing several fixes </span></div>\n\
<div class=\"line\"><span class=\"comment\">// to this class! ;-)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MTextureCache.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;NodeMonitor.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Initialize the singleton instance, and the refcount is originally 0.</span></div>\n\
<div class=\"line\">MTextureCache* MTextureCache::m_instance = NULL;</div>\n\
<div class=\"line\"><span class=\"comment\">/*static*/</span> <span class=\"keywordtype\">int</span> MTextureCache::refcount = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MTextureCacheElement::~MTextureCacheElement()</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (m_texture) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> m_texture;</div>\n\
<div class=\"line\">        m_texture = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MTextureCache::~MTextureCache()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (m_textureTable.empty())</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Delete all texture cache elements.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    string_to_cacheElement_map::iterator p = m_textureTable.begin();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( ; p != m_textureTable.end(); ++p)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> p-&gt;second;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Return a reference to the texture. Need to dereference by calling &quot;release&quot;.</span></div>\n\
<div class=\"line\">MTexture* MTextureCache::texture(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> textureObj, </div>\n\
<div class=\"line\">             MTexture::Type type <span class=\"comment\">/* = MTexture::RGBA */</span>, </div>\n\
<div class=\"line\">             <span class=\"keywordtype\">bool</span> mipmapped <span class=\"comment\">/* = true */</span>,</div>\n\
<div class=\"line\">             GLenum target <span class=\"comment\">/* = GL_TEXTURE_2D */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the name of the texture object.</span></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> textureName = getNameFromObj(textureObj);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// If this isn&#39;t a file texture node, or if it has no valid name, </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// return NULL.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!textureObj.<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ac3bee92500cdc3a4ccbec4cb35e91f2a\">MFn::kFileTexture</a>) ||</div>\n\
<div class=\"line\">        textureName == <span class=\"stringliteral\">&quot;&quot;</span>)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Check if we already have a texCacheElement assigned to the given texture name.</span></div>\n\
<div class=\"line\">    MTextureCacheElement *texCacheElement = </div>\n\
<div class=\"line\">        m_textureTable[textureName.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()];</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> newTexture = !texCacheElement;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> textureDirty = texCacheElement &amp;&amp; texCacheElement-&gt;fMonitor.dirty();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (textureDirty)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        texCacheElement-&gt;fMonitor.stopWatching();</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> texCacheElement-&gt;m_texture;</div>\n\
<div class=\"line\">        texCacheElement-&gt;m_texture = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (newTexture)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        texCacheElement = <span class=\"keyword\">new</span> MTextureCacheElement;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        texCacheElement-&gt;fMonitor.setManager(<span class=\"keyword\">this</span>);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Add it to the map.</span></div>\n\
<div class=\"line\">        m_textureTable[textureName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()] = texCacheElement;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (textureDirty || newTexture)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the filename of the file texture node.</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> textureFilename;</div>\n\
<div class=\"line\">        <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> textureNode(textureObj);</div>\n\
<div class=\"line\">        <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> filenamePlug( textureObj, </div>\n\
<div class=\"line\">            textureNode.attribute(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;fileTextureName&quot;</span>)) );</div>\n\
<div class=\"line\">        filenamePlug.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a64f7093bfde5c5eb9d89b32635b772aa\">getValue</a>(textureFilename);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Create the MTexture</span></div>\n\
<div class=\"line\">        texCacheElement-&gt;m_texture = <span class=\"keyword\">new</span> MTexture;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Monitor the given texture node for &quot;dirty&quot; or &quot;rename&quot; messages.</span></div>\n\
<div class=\"line\">        texCacheElement-&gt;fMonitor.watch(textureObj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Attempt to load the texture from disk and bind it in the OpenGL driver. </span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (texCacheElement-&gt;m_texture-&gt;load(textureFilename, </div>\n\
<div class=\"line\">                                type, mipmapped, target) == <span class=\"keyword\">false</span>)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// An error occured. Most likely, it was impossible to </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// open the given filename.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// Clean up and return NULL.</span></div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> texCacheElement;</div>\n\
<div class=\"line\">            texCacheElement = NULL;</div>\n\
<div class=\"line\">            m_textureTable.erase(textureName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Update the last updated timestamp.</span></div>\n\
<div class=\"line\">    texCacheElement-&gt;lastAccessedTimestamp = m_currentTimestamp;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> texCacheElement-&gt;texture();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Returns true if the texture was found and bound; </span></div>\n\
<div class=\"line\"><span class=\"comment\">// returns false otherwise.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> MTextureCache::bind(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> textureObj, </div>\n\
<div class=\"line\">                         MTexture::Type type <span class=\"comment\">/* = MTexture::RGBA */</span>, </div>\n\
<div class=\"line\">                         <span class=\"keywordtype\">bool</span> mipmapped <span class=\"comment\">/* = true */</span>,</div>\n\
<div class=\"line\">                         GLenum target <span class=\"comment\">/* = GL_TEXTURE_2D */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get a reference to the texture, allocating it if necessary.</span></div>\n\
<div class=\"line\">    MTexture* pTex = texture(textureObj, type, mipmapped, target);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (pTex)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// bind the texture.</span></div>\n\
<div class=\"line\">        pTex-&gt;bind();</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MTextureCache::onNodeRenamed(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; node, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> oldName, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> newName)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Remove the texture from the cache.</span></div>\n\
<div class=\"line\">    MTextureCacheElement *texCacheElement = m_textureTable[oldName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()];</div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> texCacheElement-&gt;m_texture;</div>\n\
<div class=\"line\">    texCacheElement-&gt;m_texture = NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MTextureCache::incrementTimestamp(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> increment <span class=\"comment\">/* =  1 */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    m_currentTimestamp += increment;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Optionally, go through all textures and get rid of each of them that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// is too old.</span></div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";