var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AbcBullet/MayaUtility.h</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_bullet_2_maya_utility_8h-example.html\', tocPrefix);\n\
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
            <h1>AbcBullet/MayaUtility.h</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
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
<div class=\"title\">AbcBullet/MayaUtility.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2009-2012,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Sony Pictures Imageworks Inc. and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Industrial Light &amp; Magic, a division of Lucasfilm Entertainment Company Ltd.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Redistribution and use in source and binary forms, with or without</span></div>\n\
<div class=\"line\"><span class=\"comment\">// modification, are permitted provided that the following conditions are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// met:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Redistributions of source code must retain the above copyright</span></div>\n\
<div class=\"line\"><span class=\"comment\">// notice, this list of conditions and the following disclaimer.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Redistributions in binary form must reproduce the above</span></div>\n\
<div class=\"line\"><span class=\"comment\">// copyright notice, this list of conditions and the following disclaimer</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the documentation and/or other materials provided with the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// distribution.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Neither the name of Sony Pictures Imageworks, nor</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Industrial Light &amp; Magic, nor the names of their contributors may be used</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to endorse or promote products derived from this software without specific</span></div>\n\
<div class=\"line\"><span class=\"comment\">// prior written permission.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS</span></div>\n\
<div class=\"line\"><span class=\"comment\">// &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR</span></div>\n\
<div class=\"line\"><span class=\"comment\">// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE</span></div>\n\
<div class=\"line\"><span class=\"comment\">// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef _AlembicExport_MayaUtility_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _AlembicExport_MayaUtility_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;Foundation.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/Abc/OArrayProperty.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/Abc/OScalarProperty.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>util </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>mObjectCmp</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> operator()(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; o1, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; o2)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">        </span>{</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> strcmp(<a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(o1).name().asChar(), <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(o2).name().asChar()) &lt; 0;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> std::map &lt;MObject, MSelectionList, mObjectCmp&gt; GetMembersMap;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>cmpDag</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> operator()( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; lhs, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; rhs )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">            std::string name1(lhs.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a7cffb69661adc6ae7ac9e03c297caf01\">fullPathName</a>().<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">            std::string name2(rhs.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a7cffb69661adc6ae7ac9e03c297caf01\">fullPathName</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> (name1.compare(name2) &lt; 0);</div>\n\
<div class=\"line\">     }</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> std::set&lt; MDagPath, cmpDag &gt; ShapeSet;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> isFloat(<a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> str, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; usage)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!str.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a6d14c10be0d940b6219ab27845861f74\">isFloat</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(usage);</div>\n\
<div class=\"line\">        status = MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> isUnsigned(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> str, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; usage)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!str.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a36f5e915ae736395c577cf32724af3bf\">isUnsigned</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>(usage);</div>\n\
<div class=\"line\">        status = MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// safely inverse a scale component</span></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">double</span> inverseScale(<span class=\"keywordtype\">double</span> scale)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> kScaleEpsilon = 1.0e-12;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (scale &lt; kScaleEpsilon &amp;&amp; scale &gt;= 0.0)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1.0 / kScaleEpsilon;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (scale &gt; -kScaleEpsilon &amp;&amp; scale &lt; 0.0)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1.0 / -kScaleEpsilon;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1.0 / scale;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// seconds per frame</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">double</span> spf();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> isAncestorDescendentRelationship(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp; path1,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp; path2);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// returns 0 if static, 1 if sampled, and 2 if a curve</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> getSampledType(<span class=\"keyword\">const</span> <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; iPlug);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// 0 dont write, 1 write static 0, 2 write anim 0, 3 write anim 1</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> getVisibilityType(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; iPlug);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// determines what order we do the rotation in, returns false if iOrder is</span></div>\n\
<div class=\"line\"><span class=\"comment\">// kInvalid or kLast</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> getRotOrder(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_transformation_matrix.html#af3d74c777e523f2725cdf87c15a4b5bc\">MTransformationMatrix::RotationOrder</a> iOrder,</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> &amp; oXAxis, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> &amp; oYAxis, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> &amp; oZAxis);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// determine if a Maya Object is animated or not</span></div>\n\
<div class=\"line\"><span class=\"comment\">// copy from mayapit code (MayaPit.h .cpp)</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> isAnimated(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; <span class=\"keywordtype\">object</span>, <span class=\"keywordtype\">bool</span> checkParent = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// determine if a Maya Object is intermediate</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> isIntermediate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; <span class=\"keywordtype\">object</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// returns true for visible and lod invisible and not templated objects</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> isRenderable(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; <span class=\"keywordtype\">object</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// strip iDepth namespaces from the node name, go from taco:foo:bar to bar</span></div>\n\
<div class=\"line\"><span class=\"comment\">// for iDepth &gt; 1</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> stripNamespaces(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; iNodeName, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> iDepth);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// returns the Help string for AbcExport</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> getHelpText();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">} <span class=\"comment\">// namespace util</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>PlugAndObjScalar</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj;</div>\n\
<div class=\"line\">    Alembic::Abc::OScalarProperty prop;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>PlugAndObjArray</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj;</div>\n\
<div class=\"line\">    Alembic::Abc::OArrayProperty prop;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>JobArgs</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    JobArgs()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        excludeInvisible = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        filterEulerRotations = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        noNormals = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        stripNamespace = 0;</div>\n\
<div class=\"line\">        useSelectionList = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        worldSpace = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        writeVisibility = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        writeUVs = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        writeColorSets = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        writeFaceSets = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        verbose = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> excludeInvisible;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> filterEulerRotations;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> noNormals;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> stripNamespace;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> useSelectionList;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> worldSpace;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> writeVisibility;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> writeUVs;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> writeColorSets;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> writeFaceSets;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> verbose;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::string melPerFrameCallback;</div>\n\
<div class=\"line\">    std::string melPostCallback;</div>\n\
<div class=\"line\">    std::string pythonPerFrameCallback;</div>\n\
<div class=\"line\">    std::string pythonPostCallback;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// to put into .arbGeomParam</span></div>\n\
<div class=\"line\">    std::vector&lt; std::string &gt; prefixFilters;</div>\n\
<div class=\"line\">    std::set&lt; std::string &gt; attribs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// to put into .userProperties</span></div>\n\
<div class=\"line\">    std::vector&lt; std::string &gt; userPrefixFilters;</div>\n\
<div class=\"line\">    std::set&lt; std::string &gt; userAttribs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    util::ShapeSet dagPaths;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif  // _AlembicExport_MayaUtility_h_</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";