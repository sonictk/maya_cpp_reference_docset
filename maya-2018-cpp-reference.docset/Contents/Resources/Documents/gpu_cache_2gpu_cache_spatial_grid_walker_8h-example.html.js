var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>gpuCache/gpuCacheSpatialGridWalker.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_spatial_grid_walker_8h-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/gpuCacheSpatialGridWalker.h</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheSpatialGridWalker.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef __SpatialGridWalker_h </span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define __SpatialGridWalker_h </span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Class: SpatialGridWalker</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Purpose: This class can be used to walk through all the voxels that</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           are intersected by a particular ray.  Voxel cells will be</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           visited in order of increasing distance from the ray origin.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           If the origin of the ray lies outside the voxel grid, it will</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           be advanced to its nearest intersection with the grid, if it</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           does intersect the grid.  If the ray does not intersect the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           grid at all, the isDone() method will return true immediately</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           when the iterator is created.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           Loops with this iterator should look like:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              SpatialGridWalker it = voxelGrid-&gt;getRayIterator(origin,dir);</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              while( !it.isDone() )</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              {</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                  // do stuff</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                  it.next();</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              }</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Algorithm:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The ray is traveling through an axis-aligned grid of voxels.  For</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      each step of the iterator, we advance the ray to the next voxel, which</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      is adjacent to the current voxel along either the x, y, or z axis.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Thus, the decision at each step is which axis to advance along.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      At all times, the ray stores the parametric distances (t-values) from </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      its current position to its x,y,z neighbors.  Whichever of these</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      distances is lowest dictates which voxel we move to next.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      When we move to the next voxel, we must update the parametric distances.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Say we decided to advance along x by the parametric value t.  Now we</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      just update the y and z distances by subtracting t from them.  To </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      compute the new x distance, we just divide the voxel size in x by the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      ray direction&#39;s x component - this gives the parametric distance </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      required to walk across the voxel in that dimension.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      After updating the distances, we also must choose which is the next</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      axis we will advance along - this is just a matter of figuring out</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      which axis&#39; parametric distance value is now the lowest.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SpatialGrid; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SpatialGridWalker { </div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  constructor specifies ray details and which grid to walk</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    SpatialGridWalker( <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; origin,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a>&amp; direction,</div>\n\
<div class=\"line\">        SpatialGrid *grid );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  contents of current voxel. </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uint_array.html\">MUintArray</a> *        voxelContents();</div>\n\
<div class=\"line\">    gridPoint3&lt;int&gt;             gridLocation(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  ray-parametric distances to the start and end of the current</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  voxel.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>   curVoxelStartRayParam();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>   curVoxelEndRayParam();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  advances to next voxel along ray</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>     next();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  returns true if ray has left the voxel grid after the last</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  next() call, or if the ray never intersects the voxel grid</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isDone();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  grid being walked through</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// </span></div>\n\
<div class=\"line\">    SpatialGrid *       fVoxelGrid;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  ray parameters</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>          fOrigin;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a>     fDirection;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  indices for current voxel in the traversal</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    gridPoint3&lt;int&gt;             fCurVoxelCoords;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  parametric distances along the ray to the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  next voxel grid cells in the x, y, and z directions</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    gridPoint3&lt;float&gt;               fCurDistances;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  decides which axis the ray will hit next (0=x, 1=y, 2=z)</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>             fNextAxis;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  current distance along the ray to the first intersection point</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  with the current voxel</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>               fCurVoxelStartRayParam;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>               fCurVoxelEndRayParam;</div>\n\
<div class=\"line\">    <span class=\"comment\">//  false if the ray is currently in a valid voxel, true otherwise</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            fDone;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";