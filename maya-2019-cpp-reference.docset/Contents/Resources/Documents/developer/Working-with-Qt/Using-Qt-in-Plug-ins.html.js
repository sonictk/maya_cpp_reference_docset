var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Using Qt in Plug-ins</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Using Qt in Plug-ins</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"using-qt-in-plug-ins\"></a></div>\n\
<div class=\'section\'><a id=\"preparing-for-development\"></a><h2 id=\"preparing-for-development\">Preparing for development</h2></div>\n\
<div class=\'figure\'><img src=\'developer/images/Updated_Even-to-Odd.png\' title=\'\'></div>\n\
<p>Maya uses a customized version of The Qt Company&#39;s Qt framework and ships with its own versions of all the libraries and header files you need to use Qt in your plug-ins. On Linux and OS X the libraries are in Maya&#39;s <strong>lib</strong> directory. On Windows the link libraries are in Maya&#39;s <strong>lib</strong> folder and the DLLs are in Maya&#39;s <strong>bin</strong> folder. On all platforms the header files are shipped as a compressed archive (e.g. qt-5.6.1-include.tar.gz) in the <strong>include</strong> directory of your Developer Kit installation. Before doing any Qt plug-in work, uncompress the archive into a directory where you have write permission and be sure to include that directory ahead of any others in your include path.</p>\n\
<p>You can create custom UI for Maya using Qt Designer. For Windows and Linux users, Qt Designer is installed with Maya. For Mac OS X users, you can find Qt Designer directly at the Qt Development Tools website; or, you can build Qt from source.</p>\n\
<p>To obtain Qt Designer, you can also install The Qt Company&#39;s standard version of Qt on your system or download a copy of the customized Qt source from Autodesk&#39;s Open Source web-site (<a href=\'http://www.autodesk.com/lgplsource\' title=\'\' target=\'_blank\'>http://www.autodesk.com/lgplsource</a>) and building the tools yourself. If you choose the latter option the download includes text files describing how to configure, build and install Qt for each platform supported by Maya.</p>\n\
<div class=\'section\'><a id=\"writing-the-plug-in\"></a><h2 id=\"writing-the-plug-in\">Writing The Plug-in</h2></div>\n\
<p>If you were writing your own Qt application from scratch, you would need to create your own QCoreApplication or QApplication instance to handle your application&#39;s event loop. When writing a Maya plug-in, you must instead use Maya&#39;s own application object which can be retrieved using Qt&#39;s <strong>qApp</strong> macro. The example code below uses the <strong>qApp</strong> macro to retrieve Maya&#39;s application name:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">QCoreApplication*  app = qApp;\n\
if (app) {\n\
    cout &lt;&lt; &quot;Application name is &#39;&quot; &lt;&lt; app-&gt;applicationName().toStdString() &lt;&lt; &quot;&#39;&quot; &lt;&lt; endl;\n\
}\n\
\n\
</pre></div><p>Creating new windows and dialogs using Qt is done the same way as you would if you were writing a standalone Qt application. The helixQtCmd plug-in in the Developer Kit gives a very simple example of this. The plug-in provides the helixQt command which creates a Qt-based button. Whenever the button is pressed it uses API calls to create a helical curve within Maya.</p>\n\
<p>The button is a regular Qt pushButton with a createHelix() slot added to handle the creation of the curve.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class HelixButton : public QPushButton\n\
{\n\
   Q_OBJECT\n\
public:\n\
   HelixButton(const QString&amp; text, QWidget* parent = 0); \n\
   virtual  ~HelixButton();\n\
public slots:\n\
   void createHelix(bool checked);\n\
};\n\
\n\
</pre></div><p>Whenever the helixQt command is executed, it first checks to see if the button already exists. If not then it creates the button and connects its <strong>clicked</strong> signal to its <strong>createHelix</strong> slot, so that whenever the button is clicked the code to create the helix will be executed:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">QPointer    HelixQtCmd::button;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> HelixQtCmd::doIt(const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; /* args */)\n\
{\n\
   if (button.isNull()) {\n\
       button = new HelixButton(&quot;Create Helix&quot;);\n\
       button-&gt;connect(button, SIGNAL(clicked(bool)), button, SLOT(createHelix(bool)));\n\
       button-&gt;show();\n\
       }\n\
\n\
</pre></div><p>If the button already exists, then the command simply ensures that it is visible and not hidden beneath other windows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">   else {\n\
       button-&gt;showNormal();\n\
       button-&gt;raise();\n\
       } \n\
   return MS::kSuccess;\n\
}\n\
\n\
</pre></div><p>Controls created directly using Qt are not in general recognized by Maya&#39;s UI commands. The <span class=\'code\'>IsUI</span> command does not list them and the commands for specific types of controls, such as <span class=\'code\'>button</span>, do not recognize them. The generic control command is an exception, though. So long as the control has been given a unique name, then the <span class=\'code\'>control</span> command can be used to test for its existence and perform basic operations on the control such as setting its visibility.</p>\n\
<p>For example, if the createHelix method of the helixQtCmd plug-in had given the button the unique name of &quot;myButton&quot;:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">   button = new HelixButton(&quot;Create Helix&quot;);\n\
   button-&gt;setObjectName(&quot;myButton&quot;);\n\
\n\
</pre></div><p>then the following MEL script could be used to hide the button:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">if (`control -q -exists myButton`) {\n\
   control -e -visible false myButton;\n\
}\n\
\n\
</pre></div><p>However, the same code using the <span class=\'code\'>button</span> command would not work because <span class=\'code\'>button</span> only recognizes those buttons which it has created:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">if (`button -q -exists myButton`) {      // Will always be false.\n\
   button -e -visible false myButton;   // Will never be executed.\n\
}\n\
\n\
</pre></div><p>It may sometimes be desirable to use Qt to directly access UI elements created using Maya commands. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> API class provides methods for retrieving the Qt object underlying a Maya control, layout, window or menu item. For example, if you have a Maya checkBox control named &quot;myCheckBox&quot; which was created with the following MEL script:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">window;\n\
columnLayout;\n\
checkBox myCheckBox;\n\
showWindow;\n\
\n\
</pre></div><p>You can use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> class to retrieve the checkBox&#39;s QWidget pointer, and from that determine the current state of the checkBox:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">QWidget* control = <a href=\"javascript:void(0)\" data-symbol=\"MQtUtil::findControl\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html#a4117d34bd18ee0fa108c4952bda68e94&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil::findControl</a>(&quot;myCheckBox&quot;);\n\
if (control) {\n\
   QCheckBox* cb = qobject_cast(control);\n\
   if (cb) {\n\
      if (cb-&gt;isChecked()) {\n\
          <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>(&quot;myCheckBox is checked&quot;);\n\
      } else {\n\
          <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>(&quot;myCheckBox is not checked&quot;);\n\
      }\n\
   }\n\
}\n\
\n\
</pre></div><p>The example above also serves to illustrate why you must always be careful using MQtUtil. The code will only work if Maya&#39;s <span class=\'code\'>checkbox</span> command creates a QCheckBox widget or something derived from QCheckBox. While that may be the case in the current version of Maya, it could change in some future version. If you write code which uses Qt to directly access UI elements created using Maya commands, then it is up to you to ensure that your code still behaves as expected in each new release of Maya.</p>\n\
<p>Layouts are an even greater minefield of potential problems:</p>\n\
<ul>\n\
<li>In Maya, a layout is considered to be part of the widget hierarchy, while in Qt it is not. To get around this, Maya creates proxy widgets for most, but not all, layouts. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> provides some methods to make navigating through layouts easier, but keeping track of the proxy versus the actual layout can still be challenging for the plug-in writer and a common source of bugs.</li>\n\
<li>Some of Maya&#39;s controls and layouts have special code to interact with each other. If you try adding your own Qt-created controls to a Maya layout, or a Maya control to your own Qt-created layout, you may get unexpected results. Even using Qt to add a Maya control to Maya layout may cause problems.</li>\n\
<li>Some of Maya&#39;s layouts are not implemented as a single Qt layout but rather as a small hierarchy of layouts and controls. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> provides methods to help in navigating these complex layouts, but care must be taken.</li>\n\
</ul>\n\
<p>See <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MQtUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_qt_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MQtUtil</a></span> for a more in-depth discussion of these and other issues surrounding layouts.</p>\n\
<div class=\'section\'><a id=\"building-the-plug-in\"></a><h2 id=\"building-the-plug-in\">Building the plug-in</h2></div>\n\
<div class=\'figure\'><img src=\'developer/images/Updated_Even-to-Odd.png\' title=\'\'></div>\n\
<p>As noted at the start of this section, Maya ships with customized versions of the Qt libraries and header files. It is important to ensure that the directory containing Maya&#39;s version of the headers appears in your include path before those which you may have in a separate Qt installation elsewhere on your system, and that the directory containing Maya&#39;s version of the libraries appears in your library path before any others.</p>\n\
<p>It is important to use the version of qmake that is provided with the Maya Developer Kit. After running qmake, a makefile is generated that can be used to build the Qt plug-in.</p>\n\
<p>To build the Qt plug-ins provided with the Maya Developer Kit, follow these steps:</p>\n\
<ol>\n\
<li><p>Use the following Qt archives from the Maya installation, and extract them in place.</p>\n\
<p>You can also obtain the same files from the Maya Developer Kit:</p>\n\
<ul>\n\
<li><span class=\'code\'>include/qt-5.6.1-include.tar.gz</span></li>\n\
<li><span class=\'code\'>mkspecs/qt-5.6.1-mkspecs.tar.gz</span></li>\n\
<li><span class=\'code\'>lib/cmake/qt-5.6.1-cmake.tar.gz</span></li>\n\
</ul></li>\n\
<li>Obtain the plug-in example files from the Maya Developer Kit; for example, the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"helixQtCmd.cpp\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/helix_qt_cmd_8cpp-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">helixQtCmd.cpp</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"helixQtCmd.h\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/helix_qt_cmd_8h-example.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">helixQtCmd.h</a></span>, and <span class=\'code\'>helixQtCmd.pro</span> files for the <em>helixQtCmd</em> example.</li>\n\
<li><p>Create a <span class=\'code\'>helixQtCmd</span> directory.</p>\n\
<p>Copy the aforementioned <span class=\'code\'>helixQtCmd.*</span> files to the <span class=\'code\'>helixQtCmd</span> directory.</p></li>\n\
<li>Copy the <span class=\'code\'>qtconfig</span> file (from the <span class=\'code\'>devkit/plug-ins</span> directory) to the <span class=\'code\'>helixQtCmd</span> directory.</li>\n\
<li>Set your MAYA_LOCATION environment variable to point to your Maya installation, and the DEVKIT_LOCATION environment variable to point to the directory where the devkit <span class=\'code\'>include</span>, <span class=\'code\'>mkspecs</span>, and <span class=\'code\'>cmake</span> directories are located.</li>\n\
<li>Navigate to the <span class=\'code\'>helixQtCmd</span> directory.</li>\n\
<li><p>Run the version of <strong>qmake</strong> that is <strong>provided with the Maya Developer Kit</strong>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">$DEVKIT_LOCATION/devkit/bin/qmake helixQtCmd.pro\n\
</pre></div><p>A <span class=\'code\'>makefile</span> is created as a result. On Mac OS X, the make file is named per plugin with a <span class=\'code\'>.mak</span> extension. On Linux and Windows, it is <span class=\'code\'>Makefile</span>:</p>\n\
<ul>\n\
<li>Linux/Windows: <span class=\'code\'>Makefile</span></li>\n\
<li>Mac OS X: <span class=\'code\'>helixQtCmd.mak</span></li>\n\
</ul>\n\
<p>A top level <span class=\'code\'>Makefile.qt</span> is provided for Linux and Windows, while a <span class=\'code\'>make –fhelixQtCmd.mak</span> is provided for Mac OS X. You use these files to build the default Qt plug-ins.</p></li>\n\
<li><p>Run <span class=\'code\'>make</span> using the generated <span class=\'code\'>Makefile</span> as follows:</p>\n\
<ul>\n\
<li>Linux: <span class=\'code\'>make –f Makefile</span></li>\n\
<li>Mac OS X: <span class=\'code\'>make –f helixQtCmd.mak</span></li>\n\
<li>Windows: <span class=\'code\'>nmake /f Makefile</span></li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> <span class=\'code\'>Makefile</span> requires a qmake project file ending with the extension <span class=\'code\'>.pro</span>. Shown below is <span class=\'code\'>helixQtCmd.pro</span>, the project file provided in the Developer Kit for the helixQtCmd plug-in. It provides a good example of the straightforward nature of the majority of project files.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">include(qtconfig)\n\
TARGET = helixQtCmd    \n\
HEADERS += helixQtCmd.h\n\
SOURCES += helixQtCmd.cpp\n\
LIBS += -lOpenMayaUI   \n\
\n\
</pre></div><p>The <strong>TARGET</strong> setting contains the name of the plug-in, excluding its platform-specific extension.</p>\n\
<p>The <strong>HEADERS</strong> setting contains a space-separated list of all the header files which are part of the plug-in.</p>\n\
<p>The <strong>SOURCES</strong> setting contains a space-separated list of all the source files which are part of the plug-in.</p>\n\
<p>By default, the plug-in is automatically linked to Maya&#39;s <strong>Foundation</strong> and <strong>OpenMaya</strong> libraries. If the plug-in needs other libraries, then they should be added to the <strong>LIBS</strong> setting. Library names should be preceded by &#39;-l&#39; while additional library directories should be specified using &#39;-L&#39;. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">LIBS += -L/usr/local/lib -lxml\n\
\n\
</pre></div><p>For more complex needs, please refer to Qt&#39;s qmake documentation.</p>\n\
</blockquote></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"debugging\"></a><h2 id=\"debugging\">Debugging</h2></div>\n\
<p>All of the example Qt plug-ins are built in release (that is, non-debug) mode. To build them for debug, turn on qmake&#39;s debug configuration parameter by doing the following in your .pro file:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">CONFIG += debug\n\
\n\
</pre></div><p>That should be sufficient to build your plug-in for debug on Linux and OS X. Unfortunately, on Windows, the debug configuration setting does not just compile your plug-in with debugging information, but it also forces the plug-in to link with the debug versions of the Qt libraries. That makes the plug-in incompatible with Maya, which was linked using the release versions of the Qt libraries. Depending upon which Qt classes your plug-in uses, it may or may not load into Maya, but even if it does successfully load, it is unlikely to perform correctly since it will not have access to Maya&#39;s QCoreApplication or other Qt global values.To get around this, set the <em>debug</em> configuration parameter described above and build the intermediate makefiles using the following command, substituting the name of your plug-in for <em>myPlugin</em>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">nmake /f Makefile.qt myPlugin.mak\n\
\n\
</pre></div><p>This generates, among other things, a <span class=\'code\'>.mak.Debug</span> file for your plug-in (for example, <span class=\'code\'>myPlugin.mak.Debug</span>). Edit that file, find the <strong>LIBS</strong> line, and replace all of the debug Qt libraries with their non-debug versions by removing the final <em>d</em> from their names. For example, in <span class=\'code\'>helixQtCmd.mak.Debug</span> the <strong>LIBS</strong> line would initially look like this:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">LIBS = /LIBPATH:..\\..\\lib ..\\..\\lib\\OpenMaya.lib ..\\..\\lib\\Foundation.lib ..\\..\\lib\\OpenMayaUI.lib c:\\qt-adsk-5.6.1\\lib\\QtGuid4.lib c:\\qt-adsk-5.6.1\\lib\\QtCored4.lib`\n\
\n\
</pre></div><p>You would replace <span class=\'code\'>QtGuid4.lib</span> with <span class=\'code\'>QtGui4.lib</span>, and <span class=\'code\'>QtCored4.lib</span> with <span class=\'code\'>QtCore4.lib</span>, leaving you with this:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">LIBS = /LIBPATH:..\\..\\lib ..\\..\\lib\\OpenMaya.lib ..\\..\\lib\\Foundation.lib ..\\..\\lib\\OpenMayaUI.lib c:\\qt-adsk-5.6.1\\lib\\QtGui4.lib c:\\qt-adsk-5.6.1\\lib\\QtCore4.lib`\n\
\n\
</pre></div><p>Now use the modified <span class=\'code\'>.mak.Debug</span> file to explicitly build your plug-in:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">nmake /f myPlugin.mak.Debug debug\\myPlugin.mll\n\
\n\
</pre></div><p>This still leaves one potential problem area on Windows. Qt&#39;s QList template class provides inline methods which can create and destroy Qt objects. Because those methods are inlined, if they are called by plug-in code which has been built for debug, any objects created or deleted will use the memory allocator from the debug version of Microsoft&#39;s C Runtime Library. If the methods are called within Maya, they will use the release version of the C Runtime Library. Thus it is possible to get situations where objects are allocated within Maya using the release runtime library and deleted in the plug-in using the debug runtime library, or vice-versa. Since the release and debug versions of Microsoft&#39;s C Runtime Library are incompatible with each other, this can lead to crashes.</p>\n\
<p>At the moment, QList is the only Qt class we are aware of which has this potential for failure, but other Qt template classes could exhibit similar problems. To date, the only known workarounds are either to avoid the use of Qt template classes in your code, or to only build your plug-in in release mode on Windows.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";