var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Macros for Commonly-Used Libraries</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Macros for Commonly-Used Libraries</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"macros-for-commonly-used-libraries\"></a></div>\n\
<p>For convenience, the global devkit cmake file contains macros for adding commonly-used packages. The macros are of the form <span class=\'code\'>find_&lt;package_name&gt;</span> and are called by putting each macro for each package on its own line in the <span class=\'code\'>CMakeLists.txt</span> file.</p>\n\
<p>Macros are available for the following packages:</p>\n\
<ul>\n\
<li>Alembic (<span class=\'code\'>find_alembic</span>)</li>\n\
<li>Arnold (<span class=\'code\'>find_arnold</span>)</li>\n\
<li>boost (<span class=\'code\'>find_boost</span>)</li>\n\
<li>cg and CgGL (<span class=\'code\'>find_cg</span>)</li>\n\
<li>DirectX (<span class=\'code\'>find_directx</span>)</li>\n\
<li>D3DX11Effects (<span class=\'code\'>find_D3DX11Effects</span>)</li>\n\
<li>LibXML2 (<span class=\'code\'>find_libxml2</span>)</li>\n\
<li>OpenGL (<span class=\'code\'>find_opengl</span>)</li>\n\
<li>TBB (<span class=\'code\'>find_tbb</span>)</li>\n\
<li>zlib (<span class=\'code\'>find_zlib</span>)</li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> Unlike the other macros, <span class=\'code\'>find_directx</span> takes arguments. You must pass the specific DirectX libraries you want to add to your project.</p>\n\
<p>For example:</p>\n\
<p><span class=\'code\'>sh set(libs d3d9 d3dx9 dxguid) find_directX(&quot;${libs}&quot;)</span></p>\n\
</blockquote>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";