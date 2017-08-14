var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ShapeMonitor/ShapeMonitor.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_shape_monitor_2_shape_monitor_8cpp-example.html\', tocPrefix);\n\
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
            <h1>ShapeMonitor/ShapeMonitor.cpp</h1>\n\
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
<div class=\"title\">ShapeMonitor/ShapeMonitor.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The ShapeMonitor is a singleton class that watches shape or texture nodes,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// and keeps track of which one changed since the last export. It is used to keep</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the IFX scenegraph up-to-date in respect to textures.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Client code can:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - Ask for a pointer to the ShapeMonitor (using the instance() function).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    If it doesn&#39;t already exist, it is created.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - Ask the ShapeMonitor to watch a specific Maya node name (specifying whether it&#39;s</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    a texture, or a shape) and give a unique texture name. Doing so creates some callbacks</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    on the specified node so that we know when it changes. When a specific node changes,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    its unique name is appended to the list (actually set) of dirty textures.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - Ask for the list of dirty textures. Those must be removed from the IFX scenegraph,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    and will possibly be regenerated, if they still exist.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - Clear the list of dirty textures.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Additionally, once the ShapeMonitor is no longer necessary (for example, the scene is being closed), </span></div>\n\
<div class=\"line\"><span class=\"comment\">// it can be destroyed using the destroy() function. Finally, all callbacks and data structures</span></div>\n\
<div class=\"line\"><span class=\"comment\">// can be cleared by calling the initialize() function.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;assert.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MConditionMessage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDagNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ShapeMonitor.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// PUBLIC INTERFACE</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ----------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* static */</span> </div>\n\
<div class=\"line\">ShapeMonitor* ShapeMonitor::instance()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// If there is no texture monitor in use, create one.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (privateInstance == NULL)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        privateInstance = <span class=\"keyword\">new</span> ShapeMonitor();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> privateInstance;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* static */</span></div>\n\
<div class=\"line\">ShapeMonitor* ShapeMonitor::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    destroy();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> instance();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* static */</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::destroy()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (privateInstance != NULL)</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> privateInstance;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::watch(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mayaNodeName, MonitoredObject* pMon)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    Start watching the specified mayaNodeName for changes. (If the node is part of the DAG, that</span></div>\n\
<div class=\"line\"><span class=\"comment\">// should be a fully-specified DAG name). This function will store all available information</span></div>\n\
<div class=\"line\"><span class=\"comment\">// inside a MonitorObject for future reference.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      mayaNodeName: DG (or fully-qualified DAG) name.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      uniqueTextureName: The corresponding texture name. This texture should correspond</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                         directly to an IFX texture resource.</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Check if, per chance, this monitored object already exists.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If it does, no need to create a new one.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (retrieveMonitorObject(mayaNodeName))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the node.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node;</div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> selList;</div>\n\
<div class=\"line\">    selList.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>(mayaNodeName);</div>\n\
<div class=\"line\">    selList.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>(0, node);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Attach the callbacks (dirty or renamed node)</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    pMon-&gt;mayaNodeName = mayaNodeName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    pMon-&gt;dirtyCallbackId = <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a449a233d8c1f0d263a4ffd1f8dbe17b6\">MNodeMessage::addNodeDirtyCallback</a>(node, watchedObjectDirtyCallback, pMon, &amp;stat ); </div>\n\
<div class=\"line\">    assert(stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    pMon-&gt;renamedCallbackId = <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a2003e7c6eb622a71ccd0a99581d63451\">MNodeMessage::addNameChangedCallback</a> ( node, watchedObjectRenamedCallback, pMon, &amp;stat); </div>\n\
<div class=\"line\">    assert(stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Store the pertinent information in the Monitored Objects Array.</span></div>\n\
<div class=\"line\">    monitoredObjectsPtrArray.append(pMon);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Stop watching node(s) that share the given uniqueTextureName.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// In addition, the uniqueTextureName is automatically added to the list of dirty textures.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// (If more than one node has the given uniqueTextureName, we stop to watch all of those that match. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// This is done to minimize callback overhead.)</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::stopWatching(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mayaNodeName)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = monitoredObjectsPtrArray.length()-1; i &gt;= 0; i--)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// If this record&#39;s node name matches...</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (monitoredObjectsPtrArray[i]-&gt;mayaNodeName == mayaNodeName)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Remove the callbacks for this node.</span></div>\n\
<div class=\"line\">            removeCallbacks(monitoredObjectsPtrArray[i]);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Remove this element from the monitored objects array.</span></div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> monitoredObjectsPtrArray[i];</div>\n\
<div class=\"line\">            monitoredObjectsPtrArray.removeElements(i, i, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Stop watching all nodes. This detaches the callbacks.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::stopWatchingAll()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = monitoredObjectsPtrArray.length()-1; i &gt;= 0; i--)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Remove the callbacks for this node.</span></div>\n\
<div class=\"line\">        removeCallbacks(monitoredObjectsPtrArray[i]);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Remove this element from the monitored objects array.</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> monitoredObjectsPtrArray[i];</div>\n\
<div class=\"line\">        monitoredObjectsPtrArray.removeElements(i, i, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Remove any DAG object not in the selectedObjects list.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::stopWatchingUnselectedDagObjects(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a>&amp; selectedObjects)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// For each monitored object...</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = monitoredObjectsPtrArray.length()-1; i &gt;= 0; i--)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        MonitoredObject *pMonObject = monitoredObjectsPtrArray[i];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get an MObject for the MonitoredObject-&gt;mayaNodeName.</span></div>\n\
<div class=\"line\">        <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagpath;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> selList;</div>\n\
<div class=\"line\">        selList.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>(pMonObject-&gt;mayaNodeName);</div>\n\
<div class=\"line\">        stat = selList.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a16dda1a34d5f10be257d8421ac6deabd\">getDagPath</a>(0, dagpath);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// If the MObject is a DAG node...</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (stat)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">bool</span> found = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Check if the dag path is included in the selectedObjects list.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// For example, say that dagpath = &quot;|group1|group2|pSphere|pSphereShape&quot;,</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// selectedObjects contains &quot;|group1|group2&quot;.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// We first check if dagpath is included in selectedObjects. If that&#39;s not the</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// case, we pop() one component, so that dagpath = &quot;|group1|group2|pSphere&quot;, then</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// check again. We do that until either the dagpath is found to be included in</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// the selectedObjects list, or until there&#39;s no component left in dagpath.</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">while</span> (!found &amp;&amp; dagpath.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#af321be336f1f2d96ac2273a87cb3c8ab\">length</a>() &gt; 0)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// Since we store the shape name (as opposed to the parent transform dagpath),</span></div>\n\
<div class=\"line\">                <span class=\"comment\">// we need to pop() to get the parent transform dagpath.</span></div>\n\
<div class=\"line\">                dagpath.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ac71eca2b78b8cfc088adc9af6f851dfd\">pop</a>();</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> component;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">// Check if the dag path is included in the objects list.</span></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (selectedObjects.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a425aec173c651f6ae8c71e8d13809e44\">hasItemPartly</a>(dagpath, component))</div>\n\
<div class=\"line\">                    found = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// If the object was not in the selectedObjects list, stop watching it.</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (!found)</div>\n\
<div class=\"line\">                stopWatching(pMonObject-&gt;mayaNodeName);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// PRIVATE IMPLEMENTATION</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ----------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The private instance points to the only texture monitor in memory, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or NULL if there is no instance.</span></div>\n\
<div class=\"line\">ShapeMonitor* ShapeMonitor::privateInstance = NULL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Both the constructor and destructor assume that &quot;this&quot; is the only instance</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of ShapeMonitor in memory. We can ensure this condition since both</span></div>\n\
<div class=\"line\"><span class=\"comment\">// functions are private.</span></div>\n\
<div class=\"line\">ShapeMonitor::ShapeMonitor()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ShapeMonitor::~ShapeMonitor()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    stopWatchingAll();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MonitoredObject* ShapeMonitor::retrieveMonitorObject(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mayaNodeName)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; (int) monitoredObjectsPtrArray.length(); i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// If this element&#39;s node name and filename matches...</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (monitoredObjectsPtrArray[i]-&gt;mayaNodeName == mayaNodeName)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> monitoredObjectsPtrArray[i];</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Attempt to detach all of the callbacks for a specific monitoredObject.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Assert if any of them fails.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::removeCallbacks(MonitoredObject *mon)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_message.html#a50fe995add3ce133b8b56551abb4ed09\">MMessage::removeCallback</a>(mon-&gt;dirtyCallbackId);</div>\n\
<div class=\"line\">    assert(stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_message.html#a50fe995add3ce133b8b56551abb4ed09\">MMessage::removeCallback</a>(mon-&gt;renamedCallbackId);</div>\n\
<div class=\"line\">    assert(stat);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::watchedObjectDirtyCallback( <span class=\"keywordtype\">void</span>* clientData )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    MonitoredObject *mon = (MonitoredObject*) clientData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    privateInstance-&gt;stopWatching(mon-&gt;mayaNodeName);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Note: after this call the monitored object has been deleted, </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// so don&#39;t do anything with this pointer!</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ShapeMonitor::watchedObjectRenamedCallback( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; node, <span class=\"keywordtype\">void</span>* clientData )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    MonitoredObject *mon = (MonitoredObject*) clientData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    privateInstance-&gt;stopWatching(mon-&gt;mayaNodeName);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Note: after this call the monitored object has been deleted, </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// so don&#39;t do anything with this pointer!</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";