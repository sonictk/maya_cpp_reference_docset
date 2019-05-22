var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxContext</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MPxContext</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"mpxcontext\"></a></div>\n\
<p>This topic describes the API class and interfaces used to create context in the Legacy Default Viewport. For information on how to work with tool contexts in Viewport 2.0, see <a href=\'#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Tool-Contexts.html\' title=\'\'>3.11 Tool Contexts</a>.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a></span> class allows you to create your own context.</p>\n\
<p>The realization of a context in the Maya application is done through a special command which creates the context. In this regard, a context is similar to a shape—it is created and modified by a command and has state which defines its behavior or appearance. When you write a context by subclassing <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a></span>, you must also define a command for it by subclassing from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContextCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContextCommand</a></span> described in the following.</p>\n\
<p>The following is the marqueeTool example which does simple selection using a user drawn SGI® OpenGL® selection box. For the purposes of brevity, the header files have been left out. See the example code in the <span class=\'code\'>devkitBase/devkit/plug-ins</span> directory of your Developer Kit installation for the complete example.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">const char helpString[] =\n\
    &quot;Click with left button or drag with middle button to select&quot;;\n\
class marqueeContext : public <a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a>\n\
{\n\
public:\n\
    marqueeContext();\n\
    virtual void toolOnSetup( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
    virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doPress( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
    virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doDrag( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
    virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doRelease( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
    virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> doEnterRegion( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event );\n\
\n\
</pre></div><p>The methods on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a></span> provide default actions if they are not overridden so you need only define those methods which are necessary for the proper functioning of your context. What each of these methods does is described below.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">private:\n\
    short start_x, start_y;\n\
    short last_x, last_y;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::ListAdjustment\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::ListAdjustment</a> listAdjustment\n\
    <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView</a> view;\n\
};\n\
marqueeContext::marqueeContext()\n\
{\n\
    setTitleString ( &quot;Marquee Tool&quot; );\n\
}\n\
\n\
</pre></div><p>The constructor sets the title that will appear in the UI when this tool is selected.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void marqueeContext::toolOnSetup ( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; )\n\
{\n\
    setHelpString( helpString );\n\
}\n\
\n\
</pre></div><p>When the tool is selected this method is called to put user help information on the prompt line and so that you can do any initialization that may be required.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> marqueeContext::doPress( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event )\n\
{\n\
\n\
</pre></div><p>This method is called after the tool has been selected and you have pressed a mouse button. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a></span> object contains the relevant information to the user’s mouse down event, such as the co-ordinates the user clicked on.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    if (event.isModifierShift() || event.isModifierControl() ) {\n\
        if ( event.isModifierShift() ) {\n\
            if ( event.isModifierControl() ) {\n\
                // both shift and control pressed, merge new selections\n\
                listAdjustment = <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::kAddToList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4adc09789778e2bb82b1121c0aab78da12&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::kAddToList</a>;\n\
            } \n\
            else \n\
            {\n\
                    // shift only, xor new selections with previous ones\n\
                    listAdjustment = <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::kXORWithList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4a3a0570bd44a3245270b3e7b94934f3f1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::kXORWithList</a>;\n\
            }\n\
        } \n\
        else if ( event.isModifierControl() ) {\n\
                // control only, remove new selections from the previous list\n\
                listAdjustment = <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::kRemoveFromList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4a7cb7dd787f22a4dab08af6fe7c408534&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::kRemoveFromList</a>; \n\
        }\n\
    }\n\
    else\n\
        listAdjustment = <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::kReplaceList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4a7f418bb5928b79c7e0222251461055a6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::kReplaceList</a>;\n\
\n\
</pre></div><p>Since the mode of selection can be varied by what modifier keys are held down, the mouse up event is checked to see what if any modifiers were down, and then adjusts the type of selection accordingly.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">     event.getPosition( start_x, start_y );\n\
\n\
</pre></div><p>The positions of the selection are determined. This method returns screen co-ordinates.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    view = <a href=\"javascript:void(0)\" data-symbol=\"M3dView::active3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html#a3cda809eff914b04ff47de958c365f09&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">M3dView::active3dView</a>();\n\
    view.beginGL();\n\
\n\
</pre></div><p>This determines the active view and enables OpenGl rendering into it.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    view.beginOverlayDrawing();\n\
    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> marqueeContext::doDrag( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event )\n\
{\n\
\n\
</pre></div><p>This method is called while the mouse button is down and you drag the cursor around the screen.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    event.getPosition( last_x, last_y );\n\
    view.clearOverlayPlane();\n\
\n\
</pre></div><p>Each time this method is called the overlay planes are cleared before rendering the new selection box.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    glMatrixMode( GL_PROJECTION );\n\
    glLoadIdentity();\n\
    gluOrtho2D(\n\
        0.0, (GLdouble) view.portWidth(),\n\
        0.0, (GLdouble) view.portHeight() );\n\
    glMatrixMode( GL_MODELVIEW );\n\
    glLoadIdentity();\n\
    glTranslatef(0.375, 0.375, 0.0);\n\
\n\
</pre></div><p>This sets up the view transformations to make sure that the rendering correctly appears in the active view.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    glLineStipple( 1, 0x5555 );\n\
    glLineWidth( 1.0 );\n\
    glEnable( GL_LINE_STIPPLE );\n\
    glIndexi( 2 );\n\
\n\
</pre></div><p>Next the line style is selected.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    // Draw marquee\n\
    //\n\
    glBegin( GL_LINE_LOOP );\n\
    glVertex2i( start_x, start_y );\n\
    glVertex2i( last_x, start_y );\n\
    glVertex2i( last_x, last_y );\n\
    glVertex2i( start_x, last_y );\n\
    glEnd();\n\
\n\
</pre></div><p>The selection box is drawn.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    #ifndef _WIN32\n\
        glXSwapBuffers(view.display(), view.window() );\n\
    #else\n\
        SwapBuffers(view.deviceContext() );\n\
    #endif\n\
\n\
</pre></div><p>The buffers are swapped.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    glDisable( GL_LINE_STIPPLE );\n\
\n\
</pre></div><p>Finally the special draw mode for the lines is disabled.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> marqueeContext::doRelease( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; event )\n\
{\n\
\n\
</pre></div><p>This method is called when the mouse button is released.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSelectionList</a> incomingList, marqueeList;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::ListAdjustment\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::ListAdjustment</a> listAdjustment;\n\
    view.clearOverlayPlane();\n\
    view.endOverlayDrawing();\n\
    view.endGL();\n\
\n\
</pre></div><p>All OpenGL rendering is done so the overlay planes are cleared and OpenGL rendering is turned off for the active view.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    event.getPosition( last_x, last_y );\n\
\n\
</pre></div><p>This determines the co-ordinates where the mouse button was released.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::getActiveSelectionList</a>(incomingList);\n\
\n\
</pre></div><p>This gets the current selection list and saves a copy for later use.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    if ( abs(start_x - last_x) &lt; 2 &amp;&amp; abs(start_y - last_y) &lt; 2 )\n\
       <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::selectFromScreen\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#aea0845f235cfea903f2dde8562854b48&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::selectFromScreen</a>( start_x, start_y, <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::kReplaceList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4a7f418bb5928b79c7e0222251461055a6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::kReplaceList</a> );\n\
\n\
</pre></div><p>If the co-ordinates are the same at the beginning and end, then a click-pick was done rather than a bounding box pick.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    else\n\
        // Select all the objects or components within the marquee.\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::selectFromScreen\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#aea0845f235cfea903f2dde8562854b48&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::selectFromScreen</a>( start_x, start_y, last_x, last_y,\n\
            <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::kReplaceList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4a7f418bb5928b79c7e0222251461055a6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::kReplaceList</a> );\n\
\n\
</pre></div><p>Do a bounding box pick.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    // Get the list of selected items\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::getActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::getActiveSelectionList</a>(marqueeList);\n\
\n\
</pre></div><p>This gets the list of objects just selected.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::setActiveSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a33e6a7c8fa1c06fd64063bd08d4e4aef&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::setActiveSelectionList</a>(incomingList, \\\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::kReplaceList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a5b77552a306fb2b916ef75e34e1298d4a7f418bb5928b79c7e0222251461055a6&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::kReplaceList</a>);\n\
\n\
</pre></div><p>Restore the original selection list.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::selectCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a527b2aeb16d0fbbe515ff407383f31a1&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::selectCommand</a>(marqueeList, listAdjustment);\n\
\n\
</pre></div><p>Modify the original selection list using your modifier and the selected object’s.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    return MS::kSuccess;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> marqueeContext::doEnterRegion( <a href=\"javascript:void(0)\" data-symbol=\"MEvent\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_event.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MEvent</a> &amp; )\n\
{\n\
    return setHelpString( helpString );\n\
}\n\
\n\
</pre></div><p>This method is called whenever you move the mouse on top of one of the modeling views.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class marqueeContextCmd : public <a href=\"javascript:void(0)\" data-symbol=\"MPxContextCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContextCommand</a>\n\
{\n\
    public: \n\
        marqueeContextCmd();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MPxContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxContext</a>* makeObj();\n\
        static void* creator();\n\
};\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";