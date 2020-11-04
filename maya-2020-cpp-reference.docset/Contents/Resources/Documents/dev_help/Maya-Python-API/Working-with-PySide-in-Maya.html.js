var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Working with PySide in Maya</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Working with PySide in Maya</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"working-with-pyside-in-maya\"></a></div>\n\
<p>PySide and PyQt are very similar, and the two use almost the identical API.</p>\n\
<p>In addition, PySide is part of the Qt distribution, so you do not need to manually build it from source for each Maya version.</p>\n\
<div class=\'section\'><a id=\"differences-between-pyside-and-pyqt\"></a><h2 id=\"differences-between-pyside-and-pyqt\">Differences between PySide and PyQt</h2></div>\n\
<p>Some differences include the way you import, class name changes, and tool name changes; for example, as follows:</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> As of Maya 2017, PySide version 2.0 is used with Maya.</p>\n\
</blockquote>\n\
<p>Import:</p>\n\
<ul>\n\
<li>(PyQt) <span class=\'code\'>from PyQt4.QtCore import *</span></li>\n\
<li>(PySide) <span class=\'code\'>from PySide2.QtCore import *</span></li>\n\
</ul>\n\
<p>Class name differences, such as:</p>\n\
<ul>\n\
<li>(PyQt) <span class=\'code\'>QtCore.pyqtSignal</span> v (PySide) <span class=\'code\'>QtCore.Signal</span></li>\n\
<li>(PyQt) <span class=\'code\'>QtCore.pyqtSlot</span> v (PySide) <span class=\'code\'>QtCore.Slot</span></li>\n\
<li>(PyQt) <span class=\'code\'>QtCore.pyqtProperty</span> v (PySide) <span class=\'code\'>QtCore.Property</span></li>\n\
</ul>\n\
<p>Tool name differences, such as:</p>\n\
<ul>\n\
<li>(PyQt) <span class=\'code\'>pyuic4</span> v (PySide) <span class=\'code\'>pyside-uic</span></li>\n\
<li>(PyQt) <span class=\'code\'>pyrcc4</span> v (PySide) <span class=\'code\'>pyside-rcc</span></li>\n\
<li>(PyQt) <span class=\'code\'>pylupdate4</span> v (PySide) <span class=\'code\'>pyside-lupdate</span></li>\n\
<li>(PyQt) <span class=\'code\'>sip</span> v (PySide) <span class=\'code\'>shiboken2</span></li>\n\
</ul>\n\
<p>Signals</p>\n\
<p>In PySide:</p>\n\
<ul>\n\
<li>Old-style signals need parenthesis</li>\n\
<li>Only signals without arguments are auto-connected in a constructor, like in QAction</li>\n\
</ul>\n\
<p>Other differences</p>\n\
<ul>\n\
<li>Functions deprecated before Qt 4.5 are not in PySide</li>\n\
<li>PySide only supports PyQt’s API2</li>\n\
<li><p>PySide is stricter than PyQt for Python code.</p>\n\
<p>In __init__, you must call <span class=\'code\'>super(&lt;yourClassName&gt;,self).__init__(parent)</span> instead of the relaxed (and incorrect) <span class=\'code\'>super(&lt;QtGui.QWidget&gt;,self).__init__(parent)</span>.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"about-pyside-in-maya\"></a><h2 id=\"about-pyside-in-maya\">About PySide in Maya</h2></div>\n\
<p>The following are a few Maya-specific PySide facts:</p>\n\
<ul>\n\
<li>As described in <a href=\'#!/url=./dev_help/Maya-Python-API/Working-with-PySide-in-Maya/PyQt-and-PySide-Widget-Best.html#maintain-a-reference-to-your-widget\' title=\'\'>Maintain a Reference to your Widget</a>, you must parent your Qt widget to an existing Maya window so that the widget is not destroyed by the Python interpreter&#39;s garbage collector. You can parent your Pyside widget to the Maya main window or the dock control. You can also easily do this by using the mix-in classes, as described in <a href=\'#!/url=./dev_help/Maya-Python-API/Working-with-PySide-in-Maya/PyQt-and-PySide-Widget-Best.html#use-the-maya-app-general-mayamixin-classes\' title=\'\'>Use the maya.app.general.mayaMixin Classes</a>.</li>\n\
<li>A unique <span class=\'code\'>objectName()</span> is needed for your widget so that it can be used and looked up through <span class=\'code\'>maya.OpenMayaUI.MQtUtil.findControl()</span>.</li>\n\
<li>There are no native sizing preferences for PySide widgets and you can use the <span class=\'code\'>windowPref</span> command directly to set the sizing preferences.</li>\n\
<li>When docking windows, the size of the widget is retained and you can dock multiple windows to the same area, so that you can switch among them via a tab, just like in Maya.</li>\n\
</ul>\n\
<div class=\'section\'><a id=\"pyside-example-scripts\"></a><h2 id=\"pyside-example-scripts\">PySide example scripts</h2></div>\n\
<p>A few example scripts are provided in the <span class=\'code\'>devkit/pythonScripts</span> folder of your Developer Kit installation that demonstrate the fundamental concepts for creating basic PySide scripts. See <a href=\'#!/url=./dev_help/Setting-up-your-build/Windows-environment-64-bit-.html\' title=\'\'>Setting up your build environment: Windows environment (64-bit)</a>.</p>\n\
<div class=\'section\'><a id=\"running-the-example-scripts\"></a><h3 id=\"running-the-example-scripts\">Running the example scripts</h3></div>\n\
<p>You can run the example scripts by using the <span class=\'code\'>execfile</span> command in the Python tab of your Script Editor as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">execfile(&#39;C:/Program Files/Autodesk/Maya2017/devkit/pythonScripts/widgetHierarchy.py&#39;)\n\
\n\
</pre></div><p>Alternatively, you can run the example script by importing the script. This is the recommended method for running the <span class=\'code\'>createNodeUI.py</span> example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import sys\n\
import os.path\n\
sys.path.insert(0,  os.path.join(os.environ[&#39;MAYA_LOCATION&#39;], &#39;devkit&#39;, &#39;pythonScripts&#39; ) )\n\
\n\
import createNodeUI\n\
w = createNodeUI.main()\n\
w.close()\n\
</pre></div><div class=\'section\'><a id=\"customizing-the-color-of-the-maya-widgets\"></a><h3 id=\"customizing-the-color-of-the-maya-widgets\">Customizing the color of the Maya widgets</h3></div>\n\
<p>The <span class=\'code\'>editMayaWidgets.py</span> script below demonstrates how to customize the colors for Maya&#39;s main window and menus.</p>\n\
<p>The standard Maya imports are as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">from maya import cmds\n\
from maya import mel\n\
from maya import OpenMayaUI as omui \n\
</pre></div><p>In addition, include these imports for PySide:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">from PySide2.QtCore import * \n\
from PySide2.QtGui import *\n\
from PySide2.QtWidgets import *\n\
from shiboken2 import wrapInstance \n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> You may want your script to be compatible also with versions of Maya earlier than Maya 2017. One way of doing this is to import from PySide as follows:</p>\n\
\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">try:\n\
  from PySide2.QtCore import * \n\
  from PySide2.QtGui import * \n\
  from PySide2.QtWidgets import *\n\
  from PySide2 import __version__\n\
  from shiboken2 import wrapInstance \n\
except ImportError:\n\
  from PySide.QtCore import * \n\
  from PySide.QtGui import * \n\
  from PySide import __version__\n\
  from shiboken import wrapInstance \n\
</pre></div><p>To obtain the Maya main window widget as a PySide widget, do as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">omui.MQtUtil.mainWindow()    \n\
ptr = omui.MQtUtil.mainWindow()    \n\
widget = wrapInstance(long(ptr), QWidget)\n\
</pre></div><p>This script demonstrates how to edit the style sheet to change the Maya background color:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def changeMayaBackgroundColor(background=&#39;black&#39;, color=&#39;yellow&#39;):\n\
    ....\n\
    widget.setStyleSheet(\n\
        &#39;background-color:%s;&#39;%background +\n\
        &#39;color:%s;&#39;%color\n\
        )\n\
</pre></div><p>This script also demonstrates how to get a Maya control (in this case, the Create menu) as a PySide widget by first evaluating a MEL string in Python, and then using <span class=\'code\'>maya.OpenMayaUI.MQtUtil.findControl()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">widgetStr = mel.eval( &#39;string $tempString = $gMainCreateMenu&#39; )    \n\
ptr = omui.MQtUtil.findControl( widgetStr )    \n\
widget = wrapInstance(long(ptr), QWidget)\n\
</pre></div><p>You can change the font style and weight for your menus (in this case, the Create menu) by editing the Qt stylesheet as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def changeMayaMenuColors(fontStyle=&#39;italic&#39;, fontWeight=&#39;bold&#39;, fontColor=&#39;cyan&#39;):\n\
    ....\n\
    widget.setStyleSheet(\n\
        &#39;font-style:%s;&#39;%fontStyle +\n\
        &#39;font-weight:%s;&#39;%fontWeight +\n\
        &#39;color:%s;&#39;%fontColor\n\
        )\n\
<div class=\'figure\'><img src=\'dev_help/images/EditMayaWidgets_PySide.png\' title=\'\'></div>\n\
</pre></div><div class=\'section\'><a id=\"creating-a-simple-qt-widget\"></a><h3 id=\"creating-a-simple-qt-widget\">Creating a simple Qt widget</h3></div>\n\
<p>The <span class=\'code\'>createPolygonUI.py</span> script creates a Qt widget with a drop-down menu (also known as a combo box) and a Create button. Select from among several polygon primitives from the drop-down menu and click Create to create a polygon of your choice.</p>\n\
<p>This script demonstrates how to use <span class=\'code\'>QComboBox</span> and <span class=\'code\'>QPushButton</span> to create your Qt widget UI.</p>\n\
<p>In this script, you first obtain the Maya main window widget as a PySide widget, so that you can set it as the parent widget for the Qt widget that you are creating.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">mayaMainWindowPtr = omui.MQtUtil.mainWindow()\n\
mayaMainWindow = wrapInstance(long(mayaMainWindowPtr), QWidget) \n\
</pre></div><p>Create a Create Polygon window by deriving from <span class=\'code\'>QWidget</span>, then set the object name so that it can be retrieved using <span class=\'code\'>OpenMayaUI.QtUtils.findWidget()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class CreatePolygonUI(QWidget):    \n\
    def __init__(self, *args, **kwargs):        \n\
        super(CreatePolygonUI, self).__init__(*args, **kwargs)\n\
        \n\
        #Parent widget under Maya main window        \n\
        self.setParent(mayaMainWindow)        \n\
        self.setWindowFlags(Qt.Window)   \n\
        \n\
        #Set the object name     \n\
        self.setObjectName(&#39;CreatePolygonUI_uniqueId&#39;)        \n\
        self.setWindowTitle(&#39;Create polygon&#39;)        \n\
        self.setGeometry(50, 50, 250, 150)        \n\
        self.initUI()        \n\
        self.cmd = &#39;polyCone&#39;\n\
</pre></div><p>This script then demonstrates how to use <span class=\'code\'>QComboBox</span> to create the drop-down menu, and to change the command string when the combo box (that is, the drop-down menu) changes.</p>\n\
<p><span class=\'code\'>QPushButton</span> is used to create a button, and when it is clicked, the MEL command is executed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def initUI(self):        \n\
    #Create combo box (drop-down menu) and add menu items \n\
    self.combo = QComboBox(self)        \n\
    self.combo.addItem( &#39;Cone&#39; )        \n\
    self.combo.addItem( &#39;Cube&#39; )        \n\
    self.combo.addItem( &#39;Sphere&#39; )        \n\
    self.combo.addItem( &#39;Torus&#39; )        \n\
    self.combo.setCurrentIndex(0)        \n\
    self.combo.move(20, 20)        \n\
    self.combo.activated[str].connect(self.combo_onActivated)        \n\
\n\
    #Create &#39;Create&#39; button\n\
    self.button = QPushButton(&#39;Create&#39;, self)        \n\
    self.button.move(20, 50)        \n\
    self.button.clicked.connect(self.button_onClicked)                    \n\
\n\
#Change commmand string when combo box changes\n\
def combo_onActivated(self, text):        \n\
    self.cmd = &#39;poly&#39; + text + &#39;()&#39;            \n\
\n\
#Execute MEL command when button is clicked\n\
def button_onClicked(self):        \n\
    mel.eval( self.cmd )            \n\
<div class=\'figure\'><img src=\'dev_help/images/Create_Polygon_PySide.png\' title=\'\'></div>\n\
</pre></div><div class=\'section\'><a id=\"loading-a-qt-designer-ui-file-and-editing-the-loaded-widget\"></a><h3 id=\"loading-a-qt-designer-ui-file-and-editing-the-loaded-widget\">Loading a Qt Designer UI file and editing the loaded widget</h3></div>\n\
<p>The <span class=\'code\'>createNodeUI.py</span> script demonstrates how to load a Qt Designer UI file and edit the loaded widgets. You must first use Qt Designer to create a <span class=\'code\'>.ui</span> file that represents the widget tree.</p>\n\
<p>These commands load the <span class=\'code\'>.ui</span> file:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def initUI(self):        \n\
    loader = QUiLoader()        \n\
    currentDir = os.path.dirname(__file__)        \n\
    file = QFile(currentDir+&quot;/createNode.ui&quot;)        \n\
    file.open(QFile.ReadOnly)        \n\
    self.ui = loader.load(file, parentWidget=self)        \n\
    file.close()\n\
</pre></div><p>The example script then edits the Qt widget loaded from the file by adding items to the combo box, and sets the commands to be executed when the OK and the Cancel button are pressed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># Add items to combo box\n\
self.ui.typeComboBox.addItem( &#39;locator&#39; )        \n\
self.ui.typeComboBox.addItem( &#39;camera&#39; )        \n\
self.ui.typeComboBox.addItem( &#39;joint&#39; )                \n\
\n\
# Call doOK if user clicks OK button\n\
self.ui.okButton.clicked.connect( self.doOK )\n\
\n\
# Call doCancel if user clicks Cancel button        \n\
self.ui.cancelButton.clicked.connect( self.doCancel )\n\
</pre></div><p>When the OK button is pressed, a node of the type specified by the combo box (and with the name specified, if applicable) is created.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def doOK(self):        \n\
    nName = self.ui.nameLineEdit.text()        \n\
    nType = self.ui.typeComboBox.currentText()        \n\
    if len(nName) &gt; 0:            \n\
        cmds.createNode( nType, n=nName )        \n\
    else:            \n\
        cmds.createNode( nType )        \n\
    self.close()\n\
</pre></div><p>Otherwise, if the user clicks Cancel, then the Qt widget is closed.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def doCancel(self):        \n\
    self.close()\n\
<div class=\'figure\'><img src=\'dev_help/images/createNode_PySide.png\' title=\'\'></div>\n\
</pre></div><div class=\'section\'><a id=\"creating-a-basic-attribute-editor\"></a><h3 id=\"creating-a-basic-attribute-editor\">Creating a basic Attribute Editor</h3></div>\n\
<p>The <span class=\'code\'>connectAttr.py</span> script demonstrates how to create a basic Attribute Editor that updates the attribute values, and is updated when attributes change. This way, the attribute values and control values stay in sync.</p>\n\
<p>It uses <span class=\'code\'>mayaMixin</span> for its dockable functions, as well as <span class=\'code\'>QFormLayout</span> and <span class=\'code\'>QScrollLayout</span> to create the Qt UI.</p>\n\
<p>Import the <span class=\'code\'>mayaMixin</span> module as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">from maya.app.general.mayaMixin import MayaQWidgetBaseMixin, MayaQWidgetDockableMixin\n\
</pre></div><p>This example derives from the <span class=\'code\'>MayaQWidgetDockableMixin</span> and <span class=\'code\'>QScrollArea</span> classes to create the container widget and the attribute widgets:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class Example_connectAttr(MayaQWidgetDockableMixin, QScrollArea):\n\
    def __init__(self, node=None, *args, **kwargs):\n\
        super(Example_connectAttr, self).__init__(*args, **kwargs)\n\
        # Member Variables\n\
        self.nodeName = node               # Node name for the UI\n\
        self.attrUI = None                 # Container widget for the attr UI widgets\n\
        self.attrWidgets = {}              # Dict key=attrName, value=widget\n\
        .....\n\
</pre></div><p>It then uses the <span class=\'code\'>MayaQWidgetDockableMixin</span> class <span class=\'code\'>show()</span> method to show the widget and set the window as dockable and floating.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">ui = Example_connectAttr(node=obj)\n\
ui.show(dockable=True, floating=True)\n\
</pre></div><p>It then uses <span class=\'code\'>QFormLayout</span> to create a 2-column form widget, with an attribute name string and an attribute widget.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def attachToNode(self, nodeName):\n\
    &#39;&#39;&#39;Connect UI to the specified node\n\
    &#39;&#39;&#39;\n\
    self.nodeName = nodeName\n\
    self.attrs = None\n\
    self.nodeCallbacks = []\n\
    self._deferredUpdateRequest.clear()\n\
    self.attrWidgets.clear()\n\
\n\
    # Get a sorted list of the attributes\n\
    attrs = cmds.listAttr(self.nodeName)\n\
    attrs.sort() # in-place sort the attributes\n\
\n\
    # Create container for attribute widgets\n\
    self.setWindowTitle(&#39;ConnectAttrs: %s&#39;%self.nodeName)\n\
    self.attrUI = QWidget(parent=self)\n\
    layout = QFormLayout()\n\
\n\
    # Loop over the attributes and construct widgets\n\
    acceptedAttrTypes = set([&#39;doubleLinear&#39;, &#39;string&#39;, &#39;double&#39;, &#39;float&#39;, &#39;long&#39;, &#39;short&#39;, &#39;bool&#39;, &#39;time&#39;, &#39;doubleAngle&#39;, &#39;byte&#39;, &#39;enum&#39;])\n\
    for attr in attrs:\n\
        # Get the attr value (and skip if invalid)\n\
        try:\n\
            attrType = cmds.getAttr(&#39;%s.%s&#39;%(self.nodeName, attr), type=True)\n\
            if attrType not in acceptedAttrTypes:\n\
                continue # skip attr\n\
            v = cmds.getAttr(&#39;%s.%s&#39;%(self.nodeName, attr))\n\
        except Exception, e:\n\
            continue  # skip attr\n\
\n\
        # Create the widget and bind the function\n\
        attrValueWidget = QLineEdit(parent=self.attrUI)\n\
        attrValueWidget.setText(str(v))\n\
\n\
        ....\n\
\n\
        # Add to layout\n\
        layout.addRow(attr, attrValueWidget)\n\
\n\
        # Track the widget associated with a particular attribute\n\
        self.attrWidgets[attr] = attrValueWidget\n\
\n\
    # Attach the QFormLayout to the root attrUI widget\n\
    self.attrUI.setLayout(layout)\n\
</pre></div><p>It uses <span class=\'code\'>functools.partial()</span> to add metadata to <span class=\'code\'>setAttr</span>, then connect to the <span class=\'code\'>attrValueWidget.editingFinished</span> signal:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># Use functools.partial() to dynamically construct a function with additional parameters\n\
onSetAttrFunc =  functools.partial(self.onSetAttr, widget=attrValueWidget, attrName=attr)\n\
attrValueWidget.editingFinished.connect( onSetAttrFunc )\n\
\n\
def onSetAttr(self, widget, attrName, *args, **kwargs):\n\
    &#39;&#39;&#39;Handle setting the attribute when the UI widget edits the value for it.\n\
    If it fails to set the value, then restore the original value to the UI widget\n\
    &#39;&#39;&#39;\n\
    print &quot;onSetAttr&quot;, attrName, widget, args, kwargs\n\
        \n\
    try:\n\
        attrType = cmds.getAttr(&#39;%s.%s&#39;%(self.nodeName, attrName), type=True)\n\
        if attrType == &#39;string&#39;:\n\
            cmds.setAttr(&#39;%s.%s&#39;%(self.nodeName, attrName), widget.text(), type=attrType)\n\
        else:\n\
            cmds.setAttr(&#39;%s.%s&#39;%(self.nodeName, attrName), eval(widget.text()))\n\
    except Exception, e:\n\
        print e\n\
        curVal = cmds.getAttr(&#39;%s.%s&#39;%(self.nodeName, attrName))\n\
        widget.setText( str(curVal) )\n\
</pre></div><p>A wrapper class is created to remove <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MMessage\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_message.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_message.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMessage</a></span> callbacks:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class MCallbackIdWrapper(object):\n\
    &#39;&#39;&#39;Wrapper class to handle cleaning up of MCallbackIds from registered <a href=\"javascript:void(0)\" data-symbol=\"MMessage\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_message.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_message.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MMessage</a>\n\
    &#39;&#39;&#39;\n\
    def __init__(self, callbackId):\n\
        super(MCallbackIdWrapper, self).__init__()\n\
        self.callbackId = callbackId\n\
\n\
    def __del__(self):\n\
        om.MMessage.removeCallback(self.callbackId)\n\
\n\
    def __repr__(self):\n\
        return &#39;MCallbackIdWrapper(%r)&#39;%self.callbackId\n\
</pre></div><p>The <span class=\'code\'>addNodeDirtyPlugCallback</span> is used to trigger a refresh of the value of the attribute:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">nodeObj = getDependNode(nodeName)\n\
cb = om.MNodeMessage.addNodeDirtyPlugCallback(nodeObj, self.onDirtyPlug, None)\n\
self.nodeCallbacks.append( MCallbackIdWrapper(cb) )\n\
</pre></div><p>The example also uses <span class=\'code\'>evalDeferred</span> to defer the update of the UI. Evaluation is deferred to the next time that Maya is idle. See the <span class=\'code\'>onDirtyPlug()</span> and <span class=\'code\'>_processDeferredUpdateRequest()</span> function definitions below for more details.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def onDirtyPlug(self, node, plug, *args, **kwargs):\n\
    &#39;&#39;&#39;Add to the self._deferredUpdateRequest member variable that is then\n\
    deferred processed by self._processDeferredUpdateRequest().\n\
    &#39;&#39;&#39;\n\
\n\
    # get long name of the attr, to use as the dict key\n\
    attrName = plug.partialName(False, False, False, False, False, True)\n\
\n\
    # get widget associated with the attr\n\
    widget = self.attrWidgets.get(attrName, None)\n\
    if widget != None:\n\
        # get node.attr string\n\
        nodeAttrName = plug.partialName(True, False, False, False, False, True)\n\
        \n\
        # Add to the dict of widgets to defer update\n\
        self._deferredUpdateRequest[widget] = nodeAttrName\n\
        \n\
        # Trigger an evalDeferred action if not already done\n\
        if len(self._deferredUpdateRequest) == 1:\n\
            cmds.evalDeferred(self._processDeferredUpdateRequest, low=True)\n\
\n\
def _processDeferredUpdateRequest(self):\n\
    &#39;&#39;&#39;Retrieve the attribute value and set the widget value\n\
    &#39;&#39;&#39;\n\
    for widget,nodeAttrName in self._deferredUpdateRequest.items():\n\
        v = cmds.getAttr(nodeAttrName)\n\
        widget.setText(str(v))\n\
        print &quot;_processDeferredUpdateRequest &quot;, widget, nodeAttrName, v\n\
    self._deferredUpdateRequest.clear()\n\
<div class=\'figure\'><img src=\'dev_help/images/ConnectAttrs_PySide.png\' title=\'\'></div>\n\
</pre></div><div class=\'section\'><a id=\"creating-a-qt-widget-with-a-tree-list-view\"></a><h3 id=\"creating-a-qt-widget-with-a-tree-list-view\">Creating a Qt widget with a tree list view</h3></div>\n\
<p>The <span class=\'code\'>widgetHierarchy.py</span> script demonstrates how to create a Qt widget that lists all the Qt widgets used in Maya.</p>\n\
<p>The tree list is created by deriving from <span class=\'code\'>MayaQWidgetBaseMixin</span> and <span class=\'code\'>QTreeView</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class WidgetHierarchyTree(MayaQWidgetBaseMixin, QTreeView):\n\
    def __init__(self, rootWidget=None, *args, **kwargs):\n\
        super(WidgetHierarchyTree, self).__init__(*args, **kwargs)\n\
</pre></div><p>This example demonstrates how to delete a widget when it is closed:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">self.setAttribute(Qt.WA_DeleteOnClose, True)\n\
</pre></div><p>It sets up for populating the hierarchy tree by setting the root widget:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># Determine root widget to scan\n\
if rootWidget != None:\n\
    self.rootWidget = rootWidget\n\
else:\n\
    mayaMainWindowPtr = omui.MQtUtil.mainWindow() \n\
    self.rootWidget = wrapInstance(long(mayaMainWindowPtr), QWidget)\n\
</pre></div><p>To populate the tree view, the example calls <span class=\'code\'>QStandardItem</span> for each column and recurses through the child widgets:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def populateModel(self):\n\
    # Create the headers\n\
    self.columnHeaders = [&#39;Class&#39;, &#39;ObjectName&#39;, &#39;Children&#39;]\n\
    myModel = QStandardItemModel(0,len(self.columnHeaders))\n\
    for col,colName in enumerate(self.columnHeaders):\n\
        myModel.setHeaderData(col, Qt.Horizontal, colName)\n\
\n\
    # Recurse through child widgets\n\
    parentItem = myModel.invisibleRootItem();\n\
    self.populateModel_recurseChildren(parentItem, self.rootWidget)\n\
    self.setModel( myModel )\n\
\n\
def populateModel_recurseChildren(self, parentItem, widget):\n\
    # Construct the item data and append the row\n\
    classNameStr = str(widget.__class__).split(&quot;&#39;&quot;)[1]\n\
    if pysideVersion == &#39;1.2.0&#39; :\n\
      classNameStr = classNameStr.replace(&#39;PySide.&#39;,&#39;&#39;).replace(&#39;QtGui.&#39;, &#39;&#39;).replace(&#39;QtCore.&#39;, &#39;&#39;)\n\
    else:\n\
      classNameStr = classNameStr.replace(&#39;PySide2.&#39;,&#39;&#39;).replace(&#39;QtGui.&#39;, &#39;&#39;).replace(&#39;QtCore.&#39;, &#39;&#39;).replace(&#39;QtWidgets.&#39;, &#39;&#39;)\n\
\n\
    items = [QStandardItem(classNameStr), \n\
             QStandardItem(widget.objectName()),\n\
             QStandardItem(str(len(widget.children()))),\n\
             ]\n\
    parentItem.appendRow(items)\n\
\n\
\n\
    # Recurse children and perform the same action\n\
    for childWidget in widget.children():\n\
        self.populateModel_recurseChildren(items[0], childWidget)\n\
<div class=\'figure\'><img src=\'dev_help/images/WidgetHierarchy_PySide.png\' title=\'\'></div>\n\
</pre></div><div class=\'section\'><a id=\"creating-a-default-widget-or-a-widget-derived-from-the-default-widget\"></a><h3 id=\"creating-a-default-widget-or-a-widget-derived-from-the-default-widget\">Creating a default widget, or a widget derived from the default widget</h3></div>\n\
<p>The <span class=\'code\'>defaultWidget.py</span> script sets up the framework for creating a default widget (a push button created using <span class=\'code\'>QPushButton</span>) and a derived widget. You can use this framework to create the default widget, or your own override widget.</p>\n\
<div class=\'figure\'><img src=\'dev_help/images/DefaultButton_PySide.png\' title=\'\' /></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/DerivedButton_PySide.png\' title=\'\' /></div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";