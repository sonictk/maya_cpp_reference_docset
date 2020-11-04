var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: qtForms.cpp</title>\n\
      \n\
	  \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
    \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'qt_forms_8cpp-example.html\', tocPrefix);\n\
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
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: qtForms.cpp</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">qtForms.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2017 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  Must ensure that at least one Qt header is included before anything else.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QComboBox&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtGui/QDoubleValidator&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtCore/QFile&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QGridLayout&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QLabel&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QLineEdit&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtCore/QLocale&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QPushButton&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtUiTools/QtUiTools&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QVBoxLayout&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;qtForms.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          CubeCreator class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This is an example of a dialog which was created using Qt Designer and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  then compiled into the application at build time.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">CubeCreator::CubeCreator(QWidget* parent)</div>\n\
<div class=\"line\">:   QDialog(parent)</div>\n\
<div class=\"line\">,   fCurValue(0.0)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  Initialize the form and let it know that we are its parent.</span></div>\n\
<div class=\"line\">    setupUi(<span class=\"keyword\">this</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Destroy the dialog when it is closed.</span></div>\n\
<div class=\"line\">    setAttribute(Qt::WA_DeleteOnClose, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  We only want the size field to accept floating point numbers.</span></div>\n\
<div class=\"line\">    sizeField-&gt;setValidator(<span class=\"keyword\">new</span> QDoubleValidator(-10.0, 10.0, 2, sizeField));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  When the form&#39;s slider changes we&#39;ll need to update the field, and</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  vice versa.</span></div>\n\
<div class=\"line\">    connect(</div>\n\
<div class=\"line\">        sizeSlider, SIGNAL(valueChanged(<span class=\"keywordtype\">int</span>)), <span class=\"keyword\">this</span>, SLOT(sliderChanged(<span class=\"keywordtype\">int</span>))</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\">    connect(</div>\n\
<div class=\"line\">        sizeField, SIGNAL(textEdited(<span class=\"keyword\">const</span> QString&amp;)),</div>\n\
<div class=\"line\">        <span class=\"keyword\">this</span>, SLOT(fieldChanged(<span class=\"keyword\">const</span> QString&amp;))</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    show();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  The form will automatically connect its Ok button to our accept() slot.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  We use the slot to create the cube.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> CubeCreator::accept()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>    names;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Execute a &#39;polyCube&#39; command using the specified size for all three</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  dimensions.</span></div>\n\
<div class=\"line\">    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434\">MGlobal::executeCommand</a>(</div>\n\
<div class=\"line\">        <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;polyCube -w &quot;</span>) + fCurValue + <span class=\"stringliteral\">&quot; -h &quot;</span> + fCurValue</div>\n\
<div class=\"line\">            + <span class=\"stringliteral\">&quot; -d &quot;</span> + fCurValue,</div>\n\
<div class=\"line\">        names</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Let everyone know that we&#39;ve created a new object.</span></div>\n\
<div class=\"line\">    emit objectCreated(names[0].asChar());</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> CubeCreator::fieldChanged(<span class=\"keyword\">const</span> QString&amp; newValue)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    QLocale defaultLocale;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Convert the value from the size field, which is a double from -10.0</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  to +10.0, into a value for the slider, which is an integer from</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  -1000 to +1000.</span></div>\n\
<div class=\"line\">    fCurValue = defaultLocale.toDouble(newValue);</div>\n\
<div class=\"line\">    sizeSlider-&gt;setValue((<span class=\"keywordtype\">int</span>)(fCurValue * 100.0));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> CubeCreator::sliderChanged(<span class=\"keywordtype\">int</span> newValue)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    QLocale defaultLocale;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Convert the value from the slider, which is an integer from -1000</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  to +1000, into a value for the size field, which is a double from</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  -10.0 to +10.0.</span></div>\n\
<div class=\"line\">    fCurValue = ((double)newValue) / 100.0;</div>\n\
<div class=\"line\">    sizeField-&gt;setText(defaultLocale.toString(fCurValue));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          SphereCreator class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This is an example of a dialog which was created using Qt Designer and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  is loaded into the application from a resource at run time.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">SphereCreator::SphereCreator(QWidget* parent)</div>\n\
<div class=\"line\">:   QWidget(parent)</div>\n\
<div class=\"line\">,   fCurValue(0.0)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  Load the form from its resource.</span></div>\n\
<div class=\"line\">    QUiLoader   loader;</div>\n\
<div class=\"line\">    QFile       file(<span class=\"stringliteral\">&quot;:/sphereForm.ui&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    file.open(QFile::ReadOnly);</div>\n\
<div class=\"line\">    fForm = loader.load(&amp;file, <span class=\"keyword\">this</span>);</div>\n\
<div class=\"line\">    file.close();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fForm) {</div>\n\
<div class=\"line\">        <span class=\"comment\">//  Destroy the dialog when it is closed.</span></div>\n\
<div class=\"line\">        fForm-&gt;setAttribute(Qt::WA_DeleteOnClose, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//  Locate the various widgets inside the form.</span></div>\n\
<div class=\"line\">        fButtonBox = fForm-&gt;findChild&lt;QDialogButtonBox*&gt;(<span class=\"stringliteral\">&quot;buttonBox&quot;</span>);</div>\n\
<div class=\"line\">        fField = fForm-&gt;findChild&lt;QLineEdit*&gt;(<span class=\"stringliteral\">&quot;sizeField&quot;</span>);</div>\n\
<div class=\"line\">        fSlider = fForm-&gt;findChild&lt;QSlider*&gt;(<span class=\"stringliteral\">&quot;sizeSlider&quot;</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"comment\">//  Connect to the buttonBox&#39;s &#39;accepted&#39; signal, which indicates</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  that the Ok button has been clicked.</span></div>\n\
<div class=\"line\">        connect(fButtonBox, SIGNAL(accepted()), <span class=\"keyword\">this</span>, SLOT(accept()));</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"comment\">//  We want the size field to only accept floating point numbers.</span></div>\n\
<div class=\"line\">        fField-&gt;setValidator(<span class=\"keyword\">new</span> QDoubleValidator(-10.0, 10.0, 2, fField));</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"comment\">//  When the form&#39;s slider changes we&#39;ll need to update the field, and</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  vice versa.</span></div>\n\
<div class=\"line\">        connect(</div>\n\
<div class=\"line\">            fSlider, SIGNAL(valueChanged(<span class=\"keywordtype\">int</span>)), <span class=\"keyword\">this</span>, SLOT(sliderChanged(<span class=\"keywordtype\">int</span>))</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        connect(</div>\n\
<div class=\"line\">            fField, SIGNAL(textEdited(<span class=\"keyword\">const</span> QString&amp;)),</div>\n\
<div class=\"line\">            <span class=\"keyword\">this</span>, SLOT(fieldChanged(<span class=\"keyword\">const</span> QString&amp;))</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//  When the form is destroyed, destroy us as well.</span></div>\n\
<div class=\"line\">        connect(</div>\n\
<div class=\"line\">            fForm, SIGNAL(destroyed(QObject*)), <span class=\"keyword\">this</span>, SLOT(deleteLater())</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fForm-&gt;show();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> SphereCreator::accept()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>    names;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434\">MGlobal::executeCommand</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;polySphere -r &quot;</span>) + fCurValue, names);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    QString     objectName(names[0].asChar());</div>\n\
<div class=\"line\">    emit objectCreated(objectName);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> SphereCreator::fieldChanged(<span class=\"keyword\">const</span> QString&amp; newValue)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    QLocale defaultLocale;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Convert the value from the size field, which is a double from -10.0</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  to +10.0, into a value for the slider, which is an integer from</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  -1000 to +1000.</span></div>\n\
<div class=\"line\">    fCurValue = defaultLocale.toDouble(newValue);</div>\n\
<div class=\"line\">    fSlider-&gt;setValue((<span class=\"keywordtype\">int</span>)(fCurValue * 100.0));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> SphereCreator::sliderChanged(<span class=\"keywordtype\">int</span> newValue)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    QLocale defaultLocale;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Convert the value from the slider, which is an integer from -1000</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  to +1000, into a value for the size field, which is a double from</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  -10.0 to +10.0.</span></div>\n\
<div class=\"line\">    fCurValue = ((double)newValue) / 100.0;</div>\n\
<div class=\"line\">    fField-&gt;setText(defaultLocale.toString(fCurValue));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          ObjectTypeDialog class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This is an example of a dialog which is completely created at run time</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  using Qt calls.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ObjectTypeDialog::ObjectTypeDialog(QWidget* parent)</div>\n\
<div class=\"line\">:   QDialog(parent)</div>\n\
<div class=\"line\">,   fSelectObjList(0)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  Create the form&#39;s various components.</span></div>\n\
<div class=\"line\">    QLabel* selectObjLabel = <span class=\"keyword\">new</span> QLabel(<span class=\"stringliteral\">&quot;Object Type&quot;</span>);</div>\n\
<div class=\"line\">    selectObjLabel-&gt;setAlignment(Qt::AlignRight);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fSelectObjList = <span class=\"keyword\">new</span> QComboBox();</div>\n\
<div class=\"line\">    fSelectObjList-&gt;addItem(<span class=\"stringliteral\">&quot;None&quot;</span>);</div>\n\
<div class=\"line\">    fSelectObjList-&gt;addItem(<span class=\"stringliteral\">&quot;Cube&quot;</span>);</div>\n\
<div class=\"line\">    fSelectObjList-&gt;addItem(<span class=\"stringliteral\">&quot;Sphere&quot;</span>);</div>\n\
<div class=\"line\">    selectObjLabel-&gt;setBuddy(fSelectObjList);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    QLabel* mostRecentLabel = <span class=\"keyword\">new</span> QLabel(<span class=\"stringliteral\">&quot;Most recently created&quot;</span>);</div>\n\
<div class=\"line\">    mostRecentLabel-&gt;setAlignment(Qt::AlignRight);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fMostRecentField = <span class=\"keyword\">new</span> QLineEdit();</div>\n\
<div class=\"line\">    fMostRecentField-&gt;setReadOnly(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    mostRecentLabel-&gt;setBuddy(fMostRecentField);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    QPushButton*    closeButton = <span class=\"keyword\">new</span> QPushButton(<span class=\"stringliteral\">&quot;Close&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Put the labels and controls into a 2x2 grid layout.</span></div>\n\
<div class=\"line\">    QGridLayout*    gridLayout = <span class=\"keyword\">new</span> QGridLayout();</div>\n\
<div class=\"line\">    gridLayout-&gt;addWidget(selectObjLabel, 0, 0, Qt::AlignRight);</div>\n\
<div class=\"line\">    gridLayout-&gt;addWidget(fSelectObjList, 0, 1, Qt::AlignLeft);</div>\n\
<div class=\"line\">    gridLayout-&gt;addWidget(mostRecentLabel, 1, 0, Qt::AlignRight);</div>\n\
<div class=\"line\">    gridLayout-&gt;addWidget(fMostRecentField, 1, 1, Qt::AlignLeft);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Use a vertical layout to place the grid above the close button.</span></div>\n\
<div class=\"line\">    QVBoxLayout*    mainLayout = <span class=\"keyword\">new</span> QVBoxLayout();</div>\n\
<div class=\"line\">    mainLayout-&gt;addLayout(gridLayout);</div>\n\
<div class=\"line\">    mainLayout-&gt;addWidget(closeButton, 0, Qt::AlignHCenter);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Make the vertical layout the top layout of this window.</span></div>\n\
<div class=\"line\">    setLayout(mainLayout);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Whenever the user selects a new object type from the combo box, we</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  need to display the appropriate dialog.</span></div>\n\
<div class=\"line\">    connect(</div>\n\
<div class=\"line\">        fSelectObjList, SIGNAL(currentIndexChanged(<span class=\"keyword\">const</span> QString&amp;)),</div>\n\
<div class=\"line\">        <span class=\"keyword\">this</span>, SLOT(displayObjectDialog(<span class=\"keyword\">const</span> QString&amp;))</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Delete this dialog when the Close button is clicked.</span></div>\n\
<div class=\"line\">    setAttribute(Qt::WA_DeleteOnClose, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    connect(</div>\n\
<div class=\"line\">        closeButton, SIGNAL(clicked()), <span class=\"keyword\">this</span>, SLOT(close())</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Display this dialog.</span></div>\n\
<div class=\"line\">    show();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ObjectTypeDialog::~ObjectTypeDialog()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  If there is an object dialog displayed, get rid of it.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fCurrentDialog.isNull()) <span class=\"keyword\">delete</span> fCurrentDialog;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ObjectTypeDialog::displayObjectDialog(<span class=\"keyword\">const</span> QString&amp; item)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  If there is already an object dialog displayed, get rid of it.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fCurrentDialog.isNull()) {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> fCurrentDialog;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (item == <span class=\"stringliteral\">&quot;Cube&quot;</span>) {</div>\n\
<div class=\"line\">        fCurrentDialog = <span class=\"keyword\">new</span> CubeCreator();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (item == <span class=\"stringliteral\">&quot;Sphere&quot;</span>) {</div>\n\
<div class=\"line\">        fCurrentDialog = <span class=\"keyword\">new</span> SphereCreator();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fCurrentDialog.isNull()) {</div>\n\
<div class=\"line\">        <span class=\"comment\">//  Whenever the object dialog creates a new object, we display its</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  name in our &#39;Most Recent&#39; field.</span></div>\n\
<div class=\"line\">        connect(</div>\n\
<div class=\"line\">            fCurrentDialog, SIGNAL(objectCreated(<span class=\"keyword\">const</span> QString&amp;)),</div>\n\
<div class=\"line\">            fMostRecentField, SLOT(setText(<span class=\"keyword\">const</span> QString&amp;))</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"comment\">//  Reset the object selector if the object dialog is destroyed.</span></div>\n\
<div class=\"line\">        connect(</div>\n\
<div class=\"line\">            fCurrentDialog, SIGNAL(destroyed(QObject*)),</div>\n\
<div class=\"line\">            <span class=\"keyword\">this</span>, SLOT(resetSelector())</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ObjectTypeDialog::resetSelector()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fCurrentDialog.clear();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Reset the object selector to &#39;None&#39;.</span></div>\n\
<div class=\"line\">    fSelectObjList-&gt;setCurrentIndex(0);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          qtFormsCmd class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  We store a pointer to the button window in a static QPointer so that we</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  can destroy it if the plugin is unloaded. The QPointer will</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  automatically set itself to zero if the button window is destroyed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  for any reason.</span></div>\n\
<div class=\"line\">QPointer&lt;ObjectTypeDialog&gt;  qtFormsCmd::fsObjectCreator;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>               qtFormsCmd::fsCommandName(<span class=\"stringliteral\">&quot;qtForms&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  Destroy the Object Creator window, if it still exists.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> qtFormsCmd::cleanup()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fsObjectCreator.isNull()) <span class=\"keyword\">delete</span> fsObjectCreator;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> qtFormsCmd::doIt(<span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; <span class=\"comment\">/* args */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  Create the Object Creator window, if it does not already exist</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Otherwise just make sure that the existing window is visible.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fsObjectCreator.isNull()) {</div>\n\
<div class=\"line\">        fsObjectCreator = <span class=\"keyword\">new</span> ObjectTypeDialog();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        fsObjectCreator-&gt;showNormal();</div>\n\
<div class=\"line\">        fsObjectCreator-&gt;raise();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          Plugin load/unload</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> plugin)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     st;</div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   pluginFn(plugin, <span class=\"stringliteral\">&quot;Autodesk, Inc.&quot;</span>, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>, &amp;st);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;qtForms - could not initialize plugin: &quot;</span>)</div>\n\
<div class=\"line\">            + st.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Register the command.</span></div>\n\
<div class=\"line\">    st = pluginFn.registerCommand(qtFormsCmd::fsCommandName, qtFormsCmd::creator);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;qtForms - could not register &#39;&quot;</span>)</div>\n\
<div class=\"line\">            + qtFormsCmd::fsCommandName + <span class=\"stringliteral\">&quot;&#39; command: &quot;</span></div>\n\
<div class=\"line\">            + st.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> plugin)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     st;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   pluginFn(plugin, <span class=\"stringliteral\">&quot;Autodesk, Inc.&quot;</span>, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>, &amp;st);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;qtForms - could not uninitialize plugin: &quot;</span>)</div>\n\
<div class=\"line\">            + st.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Make sure that there is no UI left hanging around.</span></div>\n\
<div class=\"line\">    qtFormsCmd::cleanup();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Deregister the command.</span></div>\n\
<div class=\"line\">    st = pluginFn.deregisterCommand(qtFormsCmd::fsCommandName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;qtForms - could not deregister &#39;&quot;</span>)</div>\n\
<div class=\"line\">            + qtFormsCmd::fsCommandName + <span class=\"stringliteral\">&quot;&#39; command: &quot;</span></div>\n\
<div class=\"line\">            + st.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";