var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Quick Python Syntax Tips</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Quick Python Syntax Tips</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"quick-python-syntax-tips\"></a></div>\n\
<p>For readers who are somewhat unfamiliar with Python programming, the following list contains a few basic tips to quickly understand the Python code syntax used in this Learning Path. For a more complete introduction, you may also want to consult <a href=\'http://docs.python.org/tutorial/introduction.html\' title=\'\' target=\'_blank\'>The Informal Introduction to Python</a>.</p>\n\
<div class=\'section\'><a id=\"comments\"></a><h2 id=\"comments\">Comments</h2></div>\n\
<p>Single-line comments begin with the pound (<span class=\'code\'>#</span>) character, and end with a new line character. Multi-line comments are surrounded by three single (or double) quotes:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">someVariable = 4 # This assigns 4 to someVariable.\n\
\n\
&#39;&#39;&#39; There are multiple lines \n\
in this comment. &#39;&#39;&#39;\n\
\n\
&quot;&quot;&quot; \n\
Another\n\
multiple\n\
line\n\
comment. \n\
&quot;&quot;&quot; \n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> Three single (or double) quotes can also be used to create strings that contain newlines or regular quotes.</p>\n\
\n\
<div class=\'section\'><a id=\"strings\"></a><h2 id=\"strings\">Strings</h2></div>\n\
<p>Strings can be contained in pairs of either single- or double-quote characters, and can be concatenated with the <span class=\'code\'>+</span> operator. The <span class=\'code\'>str()</span> function attempts to convert its input into a string representation.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">myString1 = &#39;some&#39; + &#39; string&#39;\n\
myString2 = &quot;another &quot; + &quot;string&quot;\n\
\n\
print &#39;four: &#39; + str(4) \n\
# &#39;four: 4&#39;\n\
</pre></div><div class=\'section\'><a id=\"lists\"></a><h2 id=\"lists\">Lists</h2></div>\n\
<p>Lists, denoted by a pair of square brackets, are equivalent to dynamic arrays. The starting index in a list is <span class=\'code\'>0</span>. To add to a list, use the <span class=\'code\'>append()</span> function. The <span class=\'code\'>len()</span> function returns the length of a list.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">myList = []\n\
myList.append(&#39;apples&#39;)\n\
myList.append(&#39;oranges&#39;)\n\
\n\
print myList[1] \n\
# &#39;oranges&#39;\n\
\n\
print str( len( myList ) ) \n\
# &#39;2&#39;\n\
</pre></div><div class=\'section\'><a id=\"dictionaries\"></a><h2 id=\"dictionaries\">Dictionaries</h2></div>\n\
<p>Dictionaries are denoted by pairs of curly brackets, and contain key-value pairs (where the key is a hashable object, like a string).</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">myDictionary = {}\n\
myDictionary[&#39;myKey&#39;] = &#39;myValue&#39;\n\
myDictionary[&#39;myOtherKey&#39;] = 17\n\
\n\
print str( myDictionary[&#39;myOtherKey&#39;] ) \n\
# &#39;17&#39;\n\
\n\
print str( myDictionary ) \n\
# &#39;{&#39;myKey&#39;: &#39;myValue&#39;, &#39;myOtherKey&#39;: 17}&#39;\n\
</pre></div><div class=\'section\'><a id=\"tuples\"></a><h2 id=\"tuples\">Tuples</h2></div>\n\
<p>Tuples are immutable sequences denoted by pairs of parentheses. You may refer to an element within a tuple according to its index. The first element in a tuple is indexed at zero <span class=\'code\'>[0]</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">myTuple = (&#39;pants&#39;, &#39;shirt&#39;, 1987)\n\
\n\
print str( myTuple[1] )\n\
# &#39;shirt&#39;\n\
\n\
print str( myTuple )\n\
# (&#39;pants&#39;, &#39;shirt&#39;, 1987)\n\
\n\
</pre></div><div class=\'section\'><a id=\"sets\"></a><h2 id=\"sets\">Sets</h2></div>\n\
<p>Sets are unordered collections of unique (hashable) objects. Sets are denoted by curly brackets.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">mySet = {&quot;cat&quot;, &quot;dog&quot;, &quot;lizard&quot;, &quot;emu&quot;}\n\
\n\
# Print set.\n\
print(mySet)\n\
# set([&#39;emu&#39;, &#39;lizard&#39;, &#39;dog&#39;, &#39;cat&#39;])\n\
\n\
print(len(mySet))\n\
# 4\n\
\n\
# Use in-keyword.\n\
if &quot;lizard&quot; in mySet:\n\
    print(&quot;Lizard exists&quot;)\n\
# Lizard exists\n\
\n\
</pre></div><div class=\'section\'><a id=\"classes-functions-and-indentation\"></a><h2 id=\"classes-functions-and-indentation\">Classes, Functions, and Indentation</h2></div>\n\
<p>Consistent indentations are used to identify class, function, and statement bodies such as if/else conditions, and for loops. In the code samples we present, one level of indentation consists of four space (&#39; &#39;) characters. Classes are declared using the &#39;<span class=\'code\'>class</span>&#39; keyword, while methods and global functions are declared using the &#39;<span class=\'code\'>def</span>&#39; keyword. Note that the first parameter (usually named &#39;<span class=\'code\'>self</span>&#39;) of class methods refers to the current instance.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class myClass:\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; \n\
        __init__ identifies the class constructor. \n\
        &#39;&#39;&#39;\n\
        pass # The &#39;pass&#39; keyword indicates that we do nothing.\n\
\n\
    def doIt(self, myParameter):\n\
        &#39;&#39;&#39;\n\
        This is a method which we have defined as having one\n\
        parameter whose name is myParameter.\n\
        &#39;&#39;&#39;\n\
        for i in range(0, 9): # This will loop 10 times.\n\
            if (i == 0):\n\
                # Print &#39;Hello World!&#39; on the first iteration\n\
                print &#39;Hello World!&#39;\n\
            else:\n\
                # Print a string representation of myParameter the rest of the time.\n\
                print str( myParameter )\n\
\n\
# This code will be executed once the myClass definition is read.\n\
myClassInstance = myClass()\n\
myClassInstance.doIt( &#39;some string&#39; )\n\
</pre></div><div class=\'section\'><a id=\"exception-handling\"></a><h2 id=\"exception-handling\">Exception Handling</h2></div>\n\
<p>Conventional try/catch/finally exception handling is performed using the &#39;<span class=\'code\'>try</span>&#39; and &#39;<span class=\'code\'>except</span>&#39; keyword sequence. The &#39;<span class=\'code\'>else</span>&#39; and &#39;<span class=\'code\'>finally</span>&#39; keywords are optional. The code following the &#39;<span class=\'code\'>else</span>&#39; keyword is executed if the code following the &#39;<span class=\'code\'>try</span>&#39; keyword executes without exception. The code following the &#39;<span class=\'code\'>finally</span>&#39; keyword is executed regardless of the occurrence of an exception. Note that you can throw your own exceptions using the &#39;<span class=\'code\'>raise</span>&#39; keyword.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># This code sample can be found at: http://docs.python.org/tutorial/errors.html\n\
def divide(x, y):\n\
    try:\n\
        result = x / y\n\
    except ZeroDivisionError:\n\
        print &quot;division by zero!&quot;\n\
    else:\n\
        print &quot;result is&quot; + result\n\
    finally:\n\
        print &quot;executing finally clause&quot;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";