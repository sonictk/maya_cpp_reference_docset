var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>gpuCache/gpuCacheSpatialGridWalker.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_spatial_grid_walker_8cpp-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/gpuCacheSpatialGridWalker.cpp</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheSpatialGridWalker.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheSpatialGrid.h&quot;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheSpatialGridWalker.h&quot;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIntArray.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheIsectUtil.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">SpatialGridWalker::SpatialGridWalker( </div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; origin,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a>&amp; direction,</div>\n\
<div class=\"line\">    SpatialGrid *grid )</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Initializes the ray for its walk through the voxel grid.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      We must do the following:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      - if the ray is outside the voxel grid bounding box, we must </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//        snap it to its closest intersection with the box.  </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      - compute the initial fDistance values, which give the parametric</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//        distances to the x,y, and z axes along the ray</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      - compute the initial fNextAxis value, which tells us which</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//        axis we will next advance along</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    :</div>\n\
<div class=\"line\">fVoxelGrid(grid),</div>\n\
<div class=\"line\">    fOrigin(origin),</div>\n\
<div class=\"line\">    fDirection(direction),</div>\n\
<div class=\"line\">    fDone(false)</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <span class=\"comment\">//  First, snap the ray to the bounding box if necessary</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !grid-&gt;bounds().contains( origin ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> boxIntersectionPt;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(GPUCache::gpuCacheIsectUtil::firstRayIntersection((grid-&gt;bounds().min()), (grid-&gt;bounds().max()), origin, direction, NULL, &amp;boxIntersectionPt))</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">//  ray intersects bounding box, so snap the origin to the</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  closest hit on the outside of the box</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            fOrigin = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>( boxIntersectionPt.<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>, </div>\n\
<div class=\"line\">                boxIntersectionPt.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>, </div>\n\
<div class=\"line\">                boxIntersectionPt.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> dist = (float) boxIntersectionPt.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#a2afaa6122ee5ec4a0bff234d499b4c63\">distanceTo</a>( origin );</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> length = (float) direction.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ad207cb443e371f73f07e874c504f60c1\">length</a>();</div>\n\
<div class=\"line\">            fCurVoxelStartRayParam = dist/ length;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            fDone = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">//  ray doesn&#39;t hit box, so it can&#39;t hit anything inside the</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  voxel grid, thus the iterator is done</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            fDone = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fCurVoxelStartRayParam = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fNextAxis = 0;</div>\n\
<div class=\"line\">    fCurDistances = gridPoint3&lt;float&gt;( 1.0e8, 1.0e8, 1.0e8 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  figure out which grid cell we are in, and how far we are from</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  the lower corner of that cell</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> residual;</div>\n\
<div class=\"line\">    grid-&gt;getVoxelCoords( fOrigin, fCurVoxelCoords, &amp;residual );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  for each axis, figure out how far we need to follow the ray before</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  we hit the next grid line in that axis.  the parametric value to </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  the grid line is just the actual distance to the line divided by</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  the ray&#39;s component along the axis.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> axis = 0; axis &lt; 3; axis++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">//  take into account that we may be heading towards the next-lowest</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  grid line or the next-highest, depending on the sign of the ray</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  direction coordinate for this axis</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fDirection[axis] &gt; 0 )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fCurDistances[axis] = (grid-&gt;fVoxelSizes[axis]-</div>\n\
<div class=\"line\">                residual[axis])/fDirection[axis];</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span>( fDirection[axis] &lt; 0 )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fCurDistances[axis] = -(residual[axis]/fDirection[axis]);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">//  ray direction component along this axis is 0, meaning ray will</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  never reach the grid cell adjacent along this axis.  just set</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  the distance to huge value to make sure that we never advance</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  along that axis</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            fCurDistances[axis] = 1.0e8;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//  store which axis has the smallest distance</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fCurDistances[axis] &lt; fCurDistances[fNextAxis] )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fNextAxis = axis;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  figure out total parametric distance from ray origin to end of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  this voxel</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fCurVoxelEndRayParam = fCurVoxelStartRayParam + fCurDistances[fNextAxis];</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> SpatialGridWalker::next()</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Walks the iterator to the voxel adjacent to the current voxel</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      that the ray will hit next. </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      The axis specified by fNextAxis (x=0, y=1, z=2) tells us which</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      is closest, so we just advance along that axis, and update</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      the fDistance distances and the fNextAxis value.  We also need</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      to watch for when the ray leaves the grid, in which case the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      fDone member is set to true to indicate that all voxels have</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      been traversed.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  axes are represented by indices x=0, y=1, z=2, which makes it</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  easy to write code that operates on any axis, rather than</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  having to explicitly code cases for x, y, and z.  </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> curAxis = fNextAxis;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> otherAxis1 = (curAxis+1)%3;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> otherAxis2 = (curAxis+2)%3;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  we are going to go to the voxel that is adjacent to the current one</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  along the fNextAxis axis.  Figure out if we are going to a higher</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  or lower voxel, and figure out if we are leaving the grid.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  </span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fDirection[curAxis] &gt;= 0.0 )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fCurVoxelCoords[curAxis] += 1;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fCurVoxelCoords[curAxis] &gt;= fVoxelGrid-&gt;fNumVoxels[curAxis] )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fDone = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fCurVoxelCoords[curAxis] -= 1;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fCurVoxelCoords[curAxis] &lt; 0 )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fDone = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fCurVoxelStartRayParam += fCurDistances[curAxis];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  update the fCurDistances, the parametric distances to the closest</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  adjacent voxels in the x,y,z directions.  We know that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  fCurDistances[curAxis] is the smallest, and we are moving that far,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  so just subtract that value from the distances for the other axes</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  </span></div>\n\
<div class=\"line\">    fCurDistances[otherAxis1] -= fCurDistances[curAxis];</div>\n\
<div class=\"line\">    fCurDistances[otherAxis2] -= fCurDistances[curAxis];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  update the distance for the current axis.  Since we have advanced to</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  the boundary of a voxel along that axis, the new required distance</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  is a full voxel width in the specified axis.  Make sure to get the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  sign right - the distance must always be positive.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fCurDistances[curAxis] = fVoxelGrid-&gt;fVoxelSizes[curAxis] / </div>\n\
<div class=\"line\">        fabs(fDirection[curAxis]);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  figure out which axis now has the smallest distance.  It could be</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  x, y, or z</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fCurDistances[otherAxis1] &lt; fCurDistances[otherAxis2] )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fCurDistances[otherAxis1] &lt; fCurDistances[fNextAxis] )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fNextAxis = otherAxis1;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fCurDistances[otherAxis2] &lt; fCurDistances[fNextAxis] )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fNextAxis = otherAxis2;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  recompute ray-parametric distance to end of new voxel</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fCurVoxelEndRayParam = fCurVoxelStartRayParam + fCurDistances[fNextAxis];</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> SpatialGridWalker::isDone()</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Returns true when the ray has traversed all voxel grid cells</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      that it intersects.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fDone;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> SpatialGridWalker::curVoxelStartRayParam()</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Returns ray-parametric distance to the start of the current</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      voxel.  This is useful for determining whether all the voxel</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      contents lie beyond a particular distance from the ray origin.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fCurVoxelStartRayParam;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> SpatialGridWalker::curVoxelEndRayParam()</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Returns ray-parametric distance to the end of the current</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      voxel.  </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fCurVoxelEndRayParam;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uint_array.html\">MUintArray</a> *SpatialGridWalker::voxelContents()</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      Returns the contents of the voxel in which the iterator</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      currently resides.  This is a list of triangles that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//      can be NULL if no triangles are found in the voxel.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fVoxelGrid-&gt;getVoxelContents( fCurVoxelCoords );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">gridPoint3&lt;int&gt; </div>\n\
<div class=\"line\">    SpatialGridWalker::gridLocation()</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Description: </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Returns the current location within the grid. </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fCurVoxelCoords; </div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";