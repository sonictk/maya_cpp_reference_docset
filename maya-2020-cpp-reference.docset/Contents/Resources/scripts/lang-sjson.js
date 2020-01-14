// Copyright (C) 2008 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * @fileoverview
 * Registers a language handler for SJSON.
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-lua">(my Lua code)</pre>
 *
 *
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         // Whitespace
         [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
        ],
        [
		  // Single-line comments.
		  [PR['PR_COMMENT'], /^\/\/(?:.*)/],
		  // Multiline comments.
		  [PR['PR_COMMENT'], /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//], // */
		  // Multiline strings.
		  [PR['PR_STRING'], /^\"\"\"[\s\S.]*?\"\"\"/], // */
         // Single-line strings.
		  [PR['PR_STRING'], /^r?\'(\'|(?:[^\n\r\f])*?[^\\]\')/],
		  [PR['PR_STRING'], /^r?\"(\"|(?:[^\n\r\f])*?[^\\]\")/],
         // A number is a hex integer literal, a decimal real literal, or in
         // scientific notation.
         [PR['PR_LITERAL'],
          /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
         // An identifier
         [PR['PR_KEYWORD'], /^\b(?:null|true|false)\b/],
         [PR['PR_PLAIN'], /^[a-z_]\w*/i],
		   // Punctuation.
		  [PR['PR_PUNCTUATION'], /^[(){}\[\],.;]/]
        ]),
    ['sjson']);
