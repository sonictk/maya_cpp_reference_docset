var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>cgFx/cgfxProfile.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'cg_fx_2cgfx_profile_8cpp-example.html\', tocPrefix);\n\
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
            <h1>cgFx/cgfxProfile.cpp</h1>\n\
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
<div class=\"title\">cgFx/cgfxProfile.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2011 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MCommonSystemUtils.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;cgfxProfile.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Cg/cgGL.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// List of Cg profiles.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// These are tupples of short name, vertex, geometry and fragment</span></div>\n\
<div class=\"line\"><span class=\"comment\">// profiles that we will query to see if they are supported on the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// given platform. They are provided in order of expected rendering</span></div>\n\
<div class=\"line\"><span class=\"comment\">// performance.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// We have to provide an explicit list of profiles because there seems</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to be no way to query that list using the Cg runtime API. It is</span></div>\n\
<div class=\"line\"><span class=\"comment\">// missing a way to find out which combination of vertex, geometry and</span></div>\n\
<div class=\"line\"><span class=\"comment\">// fragment profile goes together.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* CgGLProfileList[][4] = {</div>\n\
<div class=\"line\">{<span class=\"stringliteral\">&quot;gp5&quot;</span>,  <span class=\"stringliteral\">&quot;gp5vp&quot;</span>,  <span class=\"stringliteral\">&quot;gp5gp&quot;</span>, <span class=\"stringliteral\">&quot;gp5fp&quot;</span>},</div>\n\
<div class=\"line\">{<span class=\"stringliteral\">&quot;gp4&quot;</span>,  <span class=\"stringliteral\">&quot;gp4vp&quot;</span>,  <span class=\"stringliteral\">&quot;gp4gp&quot;</span>, <span class=\"stringliteral\">&quot;gp4fp&quot;</span>},</div>\n\
<div class=\"line\">{<span class=\"stringliteral\">&quot;glsl&quot;</span>, <span class=\"stringliteral\">&quot;glslv&quot;</span>,  <span class=\"stringliteral\">&quot;glslg&quot;</span>, <span class=\"stringliteral\">&quot;glslf&quot;</span>},</div>\n\
<div class=\"line\">{<span class=\"stringliteral\">&quot;NV4X&quot;</span>, <span class=\"stringliteral\">&quot;vp40&quot;</span>,   <span class=\"stringliteral\">&quot;&quot;</span>,      <span class=\"stringliteral\">&quot;fp40&quot;</span>},</div>\n\
<div class=\"line\">{<span class=\"stringliteral\">&quot;arb1&quot;</span>, <span class=\"stringliteral\">&quot;arbvp1&quot;</span>, <span class=\"stringliteral\">&quot;&quot;</span>,      <span class=\"stringliteral\">&quot;arbfp1&quot;</span>},</div>\n\
<div class=\"line\">{<span class=\"stringliteral\">&quot;NV3X&quot;</span>, <span class=\"stringliteral\">&quot;vp30&quot;</span>,   <span class=\"stringliteral\">&quot;&quot;</span>,      <span class=\"stringliteral\">&quot;fp30&quot;</span>},</div>\n\
<div class=\"line\">{<span class=\"stringliteral\">&quot;NV2X&quot;</span>, <span class=\"stringliteral\">&quot;vp20&quot;</span>,   <span class=\"stringliteral\">&quot;&quot;</span>,      <span class=\"stringliteral\">&quot;fp20&quot;</span>}</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// We use the OpenGL texture coordinate orientation be default.</span></div>\n\
<div class=\"line\">cgfxProfile::TexCoordOrientation cgfxProfile::sTexCoordOrientation =</div>\n\
<div class=\"line\">    cgfxProfile::TEXCOORD_OPENGL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">cgfxProfile*       cgfxProfile::sProfileList = NULL;</div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> cgfxProfile* cgfxProfile::sBestProfile = NULL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> cgfxProfile::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Determine the texture coordinate orientation.</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">        <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> str =</div>\n\
<div class=\"line\">            <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_common_system_utils.html#a643e73d62a48baed75753399e40761a2\">MCommonSystemUtils::getEnv</a>(<span class=\"stringliteral\">&quot;MAYA_TEXCOORD_ORIENTATION&quot;</span>, &amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (status) </div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (str == <span class=\"stringliteral\">&quot;OPENGL&quot;</span> || str == <span class=\"stringliteral\">&quot;&quot;</span>)</div>\n\
<div class=\"line\">                sTexCoordOrientation = TEXCOORD_OPENGL;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (str == <span class=\"stringliteral\">&quot;DIRECTX&quot;</span>)</div>\n\
<div class=\"line\">                sTexCoordOrientation = TEXCOORD_DIRECTX;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> es = <span class=\"stringliteral\">&quot;cgfxShader : The value &quot;</span>;</div>\n\
<div class=\"line\">                es += str;</div>\n\
<div class=\"line\">                es += <span class=\"stringliteral\">&quot; of the MAYA_TEXCOORD_ORIENTATION environment variable is unsupported. &quot;</span>;</div>\n\
<div class=\"line\">                es += <span class=\"stringliteral\">&quot;Supported values are OPENGL and DIRECTX&quot;</span>;</div>\n\
<div class=\"line\">                <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#acb043e7fc4eb7fc0f39833d31364b8a4\">MGlobal::displayWarning</a>( es );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Determine the list of available Cg profiles.</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> nbKnownProfiles = <span class=\"keyword\">sizeof</span>(CgGLProfileList)/<span class=\"keyword\">sizeof</span>(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*[4]);</div>\n\
<div class=\"line\">        cgfxProfile** currentEntry = &amp;sProfileList;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i=0; i&lt;nbKnownProfiles; ++i) {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* shortName       = CgGLProfileList[i][0];</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* vtxProfileName  = CgGLProfileList[i][1];</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* geomProfileName = CgGLProfileList[i][2];</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* fragProfileName = CgGLProfileList[i][3];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            CGprofile vtxProfile  = cgGetProfile(vtxProfileName);</div>\n\
<div class=\"line\">            CGprofile geomProfile = cgGetProfile(geomProfileName);</div>\n\
<div class=\"line\">            CGprofile fragProfile = cgGetProfile(fragProfileName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// The geometry profile support is optional.</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (</div>\n\
<div class=\"line\">                cgGLIsProfileSupported(vtxProfile) &amp;&amp;</div>\n\
<div class=\"line\">                (geomProfileName[0] == <span class=\"charliteral\">&#39;\\0&#39;</span> || cgGLIsProfileSupported(geomProfile)) &amp;&amp;</div>\n\
<div class=\"line\">                cgGLIsProfileSupported(fragProfile)</div>\n\
<div class=\"line\">            ) {</div>\n\
<div class=\"line\">                *currentEntry = <span class=\"keyword\">new</span> cgfxProfile(</div>\n\
<div class=\"line\">                    shortName, vtxProfile, geomProfile, fragProfile);</div>\n\
<div class=\"line\">                currentEntry = &amp;(*currentEntry)-&gt;fNext;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the shader profile strings to the latest supported one.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (sProfileList == NULL) {</div>\n\
<div class=\"line\">        sBestProfile = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (sProfileList-&gt;fNext == NULL) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Only one profile is available we must chose it.</span></div>\n\
<div class=\"line\">        sBestProfile = sProfileList;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (sProfileList-&gt;fName == <span class=\"stringliteral\">&quot;glsl&quot;</span>) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// The GLSL profile does not handle properly the semantic</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// annotations on top-level uniform variable</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// declarations. We therefore try to avoid it by default.</span></div>\n\
<div class=\"line\">            sBestProfile = sProfileList-&gt;fNext;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            sBestProfile = sProfileList;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> cgfxProfile::uninitialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    cgfxProfile* profile = sProfileList;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">while</span> (profile) {</div>\n\
<div class=\"line\">      cgfxProfile* nextProfile = profile-&gt;fNext;</div>\n\
<div class=\"line\">      <span class=\"keyword\">delete</span> profile;</div>\n\
<div class=\"line\">      profile = nextProfile;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    sProfileList = 0;</div>\n\
<div class=\"line\">    sBestProfile = 0;    </div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> cgfxProfile::getProfileList()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> result;</div>\n\
<div class=\"line\">    cgfxProfile* profile = sProfileList;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">while</span> (profile) {</div>\n\
<div class=\"line\">        result.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a18d06b3d0af1426e654ac2cc1dc86c60\">append</a>(profile-&gt;fName);</div>\n\
<div class=\"line\">        profile = profile-&gt;fNext;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> cgfxProfile* cgfxProfile::getProfile(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> profileName)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (profileName == <span class=\"stringliteral\">&quot;&quot;</span>) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Early out for a common case.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Search for requested profile.</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> cgfxProfile* profile = sProfileList;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">while</span> (profile) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (profile-&gt;fName == profileName) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> profile;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            profile = profile-&gt;fNext;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">cgfxProfile::cgfxProfile(</div>\n\
<div class=\"line\">  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name, CGprofile vtx, CGprofile geom, CGprofile frag</div>\n\
<div class=\"line\">) </div>\n\
<div class=\"line\">  : fName(name),</div>\n\
<div class=\"line\">    fVtx(vtx),</div>\n\
<div class=\"line\">    fGeom(geom),</div>\n\
<div class=\"line\">    fFrag(frag),</div>\n\
<div class=\"line\">    fNext(NULL)</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">cgfxProfile::cgfxProfile(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name, CGpass pass)</div>\n\
<div class=\"line\">  : fName(name),</div>\n\
<div class=\"line\">    fVtx(CG_PROFILE_UNKNOWN),</div>\n\
<div class=\"line\">    fGeom(CG_PROFILE_UNKNOWN),</div>\n\
<div class=\"line\">    fFrag(CG_PROFILE_UNKNOWN),</div>\n\
<div class=\"line\">    fNext(NULL)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    CGprogram vp = cgGetPassProgram(pass, CG_VERTEX_DOMAIN);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (vp != NULL) {</div>\n\
<div class=\"line\">        fVtx = cgGetProgramProfile(vp);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    CGprogram gp = cgGetPassProgram(pass, CG_GEOMETRY_DOMAIN);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (gp != NULL) {</div>\n\
<div class=\"line\">        fGeom = cgGetProgramProfile(gp);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    CGprogram fp = cgGetPassProgram(pass, CG_FRAGMENT_DOMAIN);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fp != NULL) {</div>\n\
<div class=\"line\">        fFrag = cgGetProgramProfile(fp);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">cgfxProfile::~cgfxProfile()</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> cgfxProfile::isSupported()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span></div>\n\
<div class=\"line\">        (fVtx == CG_PROFILE_UNKNOWN  || cgGLIsProfileSupported(fVtx)) &amp;&amp;</div>\n\
<div class=\"line\">        (fGeom == CG_PROFILE_UNKNOWN || cgGLIsProfileSupported(fGeom)) &amp;&amp;</div>\n\
<div class=\"line\">        (fFrag == CG_PROFILE_UNKNOWN || cgGLIsProfileSupported(fFrag));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";