var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>File Translator Examples</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>File Translator Examples</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"file-translator-examples\"></a></div>\n\
<p>The following examples demonstrate the usage of file translators.</p>\n\
<div class=\'section\'><a id=\"implementing-the-proxy-polygon-exporter\"></a><h2 id=\"implementing-the-proxy-polygon-exporter\">Implementing the Proxy Polygon Exporter</h2></div>\n\
<p>The <span class=\'code\'>polyExporter</span> class inherits from <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator</a></span> and defines a number of virtual methods such as <span class=\'code\'>writer()</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class polyExporter:public <a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator</a> \n\
{\n\
    public:\n\
        polyExporter();\n\
        virtual                ~polyExporter();\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>        writer (const <a href=\"javascript:void(0)\" data-symbol=\"MFileObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_file_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_file_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFileObject</a>&amp; file,\n\
            const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; optionsString, <a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator::FileAccessMode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator::FileAccessMode</a> mode);\n\
        virtual bool           haveWriteMethod () const;\n\
        virtual bool           haveReadMethod () const;\n\
        virtual bool           canBeOpened () const;\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>        defaultExtension () const = 0;\n\
    protected:    \n\
        virtual bool           isVisible(<a href=\"javascript:void(0)\" data-symbol=\"MFnDagNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_dag_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnDagNode</a>&amp; fnDag, <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>&amp; status);\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>        exportAll(ostream&amp; os);\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>        exportSelection(ostream&amp; os);\n\
        virtual void           writeHeader(ostream&amp; os);\n\
        virtual void           writeFooter(ostream&amp; os);\n\
        virtual <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>        processPolyMesh(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> dagPath, ostream&amp;    os);\n\
        virtual polyWriter*    createPolyWriter(const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MDagPath</a> dagPath, <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a>&amp; status) = 0;\n\
};\n\
\n\
</pre></div><div class=\'section\'><a id=\"initializing-the-plug-in\"></a><h2 id=\"initializing-the-plug-in\">Initializing the Plug-in</h2></div>\n\
<p>You need to register the new File Translator with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span> when initializing the plug-in. There are six arguments associated with the <span class=\'code\'>registerFileTranslator</span> method. The latter three arguments are optional.</p>\n\
<p>In this example, the argument <span class=\'code\'>Rawtext</span> is the file translator name. The <span class=\'code\'>option1=1</span> argument contains the default value of the options strings for the option box for the translator. The last argument is of boolean type that determines the ability for a translator to execute MEL scripts within the translator. A <span class=\'code\'>true</span> value of this argument allows the MEL commands be executed through the <span class=\'code\'>MGlobal::executeCommand</span> method.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin(<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin(obj, &quot;Autodesk&quot;, &quot;4.5&quot;, &quot;Any&quot;);\n\
    status = plugin.registerFileTranslator(&quot;RawText&quot;,\n\
        &quot;&quot;, polyRawExporter::creator, &quot;&quot;, &quot;option1=1&quot;, true);\n\
    if (!status) {\n\
        status.perror(&quot;registerFileTranslator&quot;);\n\
        return status;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><p>Removing the translator is done in the <span class=\'code\'>uninitializePlugin()</span> through a call to the <span class=\'code\'>deregisterFileTranslator()</span> method of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a></span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> uninitializePlugin(<a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj) \n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin( obj );\n\
    status = plugin.deregisterFileTranslator(&quot;RawText&quot;);\n\
    if (!status) {\n\
        status.perror(&quot;deregisterFileTranslator&quot;);\n\
        return status;\n\
    }\n\
    return status;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"reader-method\"></a><h3 id=\"reader-method\">Reader Method</h3></div>\n\
<p>You need to implement a <span class=\'code\'>reader()</span> method if you wish to load a file type that is supported by your file translator.</p>\n\
<p>The <span class=\'code\'>haveReadMethod()</span> method checks if the translator provides a read method. In the <span class=\'code\'>LepTranslator</span> class, the method returns true because the <span class=\'code\'>reader()</span> method exists.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool LepTranslator::haveReadMethod () const\n\
{\n\
    return true;\n\
}\n\
\n\
</pre></div><p>The <span class=\'code\'>reader()</span> method reads each line of the file and returns a <span class=\'code\'>MS::kFailure</span> if it cannot be opened by the translator. If a file type cannot be recognized by the translator, the method creates a new object via MEL to support the data in that file.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> LepTranslator::reader ( const <a href=\"javascript:void(0)\" data-symbol=\"MFileObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_file_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_file_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFileObject</a>&amp; file,\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; options, <a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator::FileAccessMode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator::FileAccessMode</a> mode)\n\
{\n\
#if defined (OSMac_)\n\
    char nameBuffer[MAXPATHLEN];\n\
    strcpy (nameBuffer, file.fullName().asChar());\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> fname(nameBuffer);\n\
#else\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> fname = file.fullName();\n\
#endif    \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> rval(MS::kSuccess);\n\
    const int maxLineSize = 1024;\n\
    char buf[maxLineSize];\n\
    ifstream inputfile(fname.asChar(), ios::in);\n\
    if (!inputfile) {\n\
        // open failed\n\
        cerr &lt;&lt; fname &lt;&lt; &quot;: could not be opened for reading\\n&quot;;\n\
        return MS::kFailure;\n\
    }\n\
    if (!inputfile.getline (buf, maxLineSize)) {\n\
        cerr &lt;&lt; &quot;file &quot; &lt;&lt; fname &lt;&lt; &quot; contained no lines ... aborting\\n&quot;;\n\
        return MS::kFailure;\n\
    }\n\
    if (0 != strncmp(buf, magic.asChar(), magic.length())) {\n\
        cerr &lt;&lt; &quot;first line of file &quot; &lt;&lt; fname;\n\
        cerr &lt;&lt; &quot; did not contain &quot; &lt;&lt; magic.asChar() &lt;&lt; &quot; ... aborting\\n&quot;;\n\
        return MS::kFailure;\n\
    }\n\
    while (inputfile.getline (buf, maxLineSize)) { \n\
        //processing each line of the file\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> cmdString;\n\
        cmdString.set(buf);\n\
        if (!<a href=\"javascript:void(0)\" data-symbol=\"MGlobal::executeCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::executeCommand</a>(cmdString))\n\
            rval = MS::kFailure;\n\
    }\n\
    inputfile.close();\n\
    return rval;\n\
}\n\
\n\
</pre></div><p>Lines of files are processed in order to add new objects to the model.</p>\n\
<div class=\'section\'><a id=\"writer-method\"></a><h3 id=\"writer-method\">Writer Method</h3></div>\n\
<p>You need to include a <span class=\'code\'>writer()</span> method if you want to save a file type that is supported by your translator.</p>\n\
<p>The <span class=\'code\'>haveWriteMethod()</span> method checks if the translator has a write method. In the <span class=\'code\'>polyExporter</span> class, the method returns true because the <span class=\'code\'>writer()</span> method is implemented.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">bool polyExporter::haveWriteMethod() const \n\
{\n\
    return true;\n\
}\n\
\n\
</pre></div><p>The <span class=\'code\'>writer()</span> method provides a message through the script editor and returns a status to indicate the results.</p>\n\
<p>In this example, only ‘export all’ and ‘export selection’ options are allowed when trying to save data. Other options will result in the display of a failure message through the script editor and returns a <span class=\'code\'>MS:kFailure</span>, which indicates that the file type cannot be understood by the translator. For your plug-in, you will have to set your own identifier string. If the method is successful, the data will be saved as a new file in a file type that is supported by the translator.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> polyExporter::writer(const <a href=\"javascript:void(0)\" data-symbol=\"MFileObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_file_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_file_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFileObject</a>&amp; file,\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>&amp; /*options*/,    <a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator::FileAccessMode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator::FileAccessMode</a> mode) \n\
{\n\
#if defined (OSMac_)\n\
        char nameBuffer[MAXPATHLEN];\n\
        strcpy (nameBuffer, file.fullName().asChar());\n\
        const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> fileName(nameBuffer);\n\
#else\n\
        const <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> fileName = file.fullName();\n\
#endif\n\
        ofstream newFile(fileName.asChar(), ios::out);\n\
    if (!newFile) {\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayError\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayError</a>(fileName + &quot;: could not be opened for reading&quot;);\n\
        return MS::kFailure;\n\
    }\n\
    newFile.setf(ios::unitbuf);\n\
    writeHeader(newFile);\n\
    if (<a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator::kExportAccessMode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417a2b6cc89b2e3d91b69ec9af440ef0bc94&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator::kExportAccessMode</a> == mode) {\n\
        if (<a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a> == exportAll(newFile)) {\n\
            return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
        }\n\
    } \n\
    else if (<a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator::kExportActiveAccessMode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html#a248681daa33e11b68c934862cfe49417ab8316a826501eb9bae9132346b5db59f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator::kExportActiveAccessMode</a> == mode) {\n\
        if (<a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a> == exportSelection(newFile)) {\n\
            return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
        }\n\
    } \n\
    else {\n\
        return <a href=\"javascript:void(0)\" data-symbol=\"MStatus::kFailure\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus::kFailure</a>;\n\
    }\n\
    writeFooter(newFile);\n\
    newFile.flush();\n\
    newFile.close();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>(&quot;Export to &quot; + fileName + &quot; successful!&quot;);\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"identifyfile-method\"></a><h3 id=\"identifyfile-method\">IdentifyFile Method</h3></div>\n\
<p>This method is typically used to check if the file extension of the file in question is the correct file type for the translator.</p>\n\
<p>When a file is encountered, Maya calls the <span class=\'code\'>identifyFile()</span> method and queries each translator until it finds an appropriate match. The method is given an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFileObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_file_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_file_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFileObject</a></span> indicating the file being checked and a pointer <span class=\'code\'>name</span> to the initial file contents. In this example below, any file types being passed to this method other than <span class=\'code\'>.anim</span> will result in <span class=\'code\'>MS::kNotMyFileType</span> being returned, which indicates that the translator cannot understand the file type. Otherwise, the file is understood by the translator and is able to operate in Maya through the translator plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MPxFileTranslator::MFileKind\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_file_translator.html#a8966f27c569f8ef7182b63f0a66e79dd&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxFileTranslator::MFileKind</a>\n\
animExportUtil::identifyFile (\n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MFileObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_file_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_file_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFileObject</a> &amp;file,\n\
    const char * /*buffer*/,\n\
    short /*size*/\n\
) const\n\
{\n\
    const char *name = file.name().asChar();\n\
    int nameLength = (int)strlen(name);\n\
    if ((nameLength &gt; 5) &amp;&amp; !strcasecmp(name+nameLength-5, &quot;.anim&quot;)) {\n\
        return (kIsMyFileType);\n\
    }\n\
    return (kNotMyFileType);\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"file-extensions\"></a><h3 id=\"file-extensions\">File Extensions</h3></div>\n\
<p>The <span class=\'code\'>defaultExtension()</span> method defines the default file extension of a translator and returns a string.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> polyRawExporter::defaultExtension () const \n\
{\n\
    return <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a>(&quot;raw&quot;);\n\
}\n\
\n\
</pre></div><p>In this example, Maya calls the method and saves the file with a <span class=\'code\'>.raw</span> file extension. Note that the period should not be included in the extension name.</p>\n\
<div class=\'section\'><a id=\"fileaccess-mode\"></a><h3 id=\"fileaccess-mode\">FileAccess Mode</h3></div>\n\
<p>The <span class=\'code\'>fileAccessMode()</span> is an enum method that returns the type of file access mode that Maya is currently in. There are six types of file access modes in Maya.</p>\n\
<p>In this example, the mode is <span class=\'code\'>kImportAccessMode</span>, which is when Maya imports data into the scene.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">if (mode == kImportAccessMode) {\n\
    status = importAnim(animFile, pasteFlags);\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";