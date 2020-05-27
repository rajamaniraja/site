(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{486:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"markdown-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-parser"}},[e._v("#")]),e._v(" Markdown Parser")]),e._v(" "),a("p",[e._v("Many people, when confronted writing HTML document, think \"Well, HTML is tedious, I'll go with Markdown.\" Then they'll face two problems. For programming zealots, they certainly will introduce a third problem: why not write a Markdown parser?")]),e._v(" "),a("p",[e._v("In practice, most Markdown parser programs use regular expression or regex for parsing. There are some more options like "),a("a",{attrs:{href:"https://github.com/jgm/peg-markdown",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEG"),a("OutboundLink")],1),e._v(", etc. In this post, we'll write a simple but extensive markdown parser in nim-lang that can perform basic parsing. Beyond that, we'll also discuss how to improve the code to support more Markdown notations and dialects.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("h3",{attrs:{id:"tokenize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tokenize"}},[e._v("#")]),e._v(" Tokenize")]),e._v(" "),a("p",[e._v("It's clear that our goal is to convert a markdown document into an HTML document.")]),e._v(" "),a("p",[e._v("By introducing a tokenizing step as shown in below flow,\nwe can make separate of concerns: parsing and rendering.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+-------------------+    +--------+    +---------------+\n| Markdown Document +--\x3e | Tokens +--\x3e | HTML Document |\n+-------------------+    +--------+    +---------------+\n")])])]),a("p",[e._v("The source code below is self-explanatory.")]),e._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proc")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("markdown"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("parseTokens")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("renderToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h3",{attrs:{id:"parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parse"}},[e._v("#")]),e._v(" Parse")]),e._v(" "),a("p",[e._v("When programming from scratch, it's wise to start from small. So let's pick up\nthe very feature only - converting "),a("code",[e._v("# Header")]),e._v(" into "),a("code",[e._v("<h1>Header</h1>")]),e._v(". We start from\ndefining a token type and a token value, as you might also do by yourself in any\nprogramming language.")]),e._v(" "),a("p",[e._v("Below are some essential definitions for the code we'll write to work.")]),e._v(" "),a("ul",[a("li",[e._v("We define a "),a("code",[e._v("Header")]),e._v(" container object for storing header level and its content.")]),e._v(" "),a("li",[e._v("We define an enum "),a("code",[e._v("MarkdownTokenType")]),e._v(" which has only one choice - "),a("code",[e._v("Header")]),e._v(".")]),e._v(" "),a("li",[e._v("We also define a reference "),a("code",[e._v("MarkdownTokenRef")]),e._v(" as a wrapper for the token.")])]),e._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v("\n  Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("object")]),e._v("\n    doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string\n    level"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" int\n\n  MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{.")]),e._v("pure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v("\n    Header\n\n  MarkdownTokenRef"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ref")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("object")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*:")]),e._v(" MarkdownTokenType\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("of")]),e._v(" MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" headerVal"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*:")]),e._v(" Header\n\n  MarkdownError"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("object")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("of")]),e._v(" Exception\n")])])]),a("p",[e._v("The token parsing is a complete iteration through the Markdown string "),a("code",[e._v("doc")]),e._v(".\nWe find token from the first character of the "),a("code",[e._v("doc")]),e._v(" and then move to\nthe nth character, and on and on until the end. We'll cover the implementation\nof "),a("code",[e._v("findToken")]),e._v(" later.")]),e._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("iterator")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("parseTokens")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MarkdownTokenRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" token"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MarkdownTokenRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("nil")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("Header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      token "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("findToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("nil")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("yield")]),e._v(" token\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("break")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("nil")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("raise")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("newException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("MarkdownError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('fmt"unknown block rule at position {n}."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[e._v("#")]),e._v(" Render")]),e._v(" "),a("p",[e._v("It's getting easier to generate HTML documents by constructing strings given a token data structure.")]),e._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proc")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("renderToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("token"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MarkdownTokenRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" token"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("of")]),e._v(" MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" header "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" token"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("headerVal\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('fmt"<h{header.level}>{header.doc}</h{header.level}>"')]),e._v("\n")])])]),a("h3",{attrs:{id:"find-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-token"}},[e._v("#")]),e._v(" Find Token")]),e._v(" "),a("p",[e._v("Embed in the heart zone of "),a("code",[e._v("parseTokens")]),e._v(", the function "),a("code",[e._v("findToken")]),e._v(" is in the center\nof the Markdown parser program.")]),e._v(" "),a("ul",[a("li",[e._v("We define a table of token regex rules.")]),e._v(" "),a("li",[e._v("We check if the given "),a("code",[e._v("doc")]),e._v(" from a specific position "),a("code",[e._v("start")]),e._v(" matches the given rule.")]),e._v(" "),a("li",[e._v("If so, we construct a container object as the token, otherwise, ignore the check.")])]),e._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" blockRules "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('re"^ *(#{1,6}) *([^\\n]+?) *#* *(?:\\n+|$)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("toTable\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proc")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("findToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" start"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ruleType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MarkdownTokenRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" blockRules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ruleType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" matches"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("start "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("..")]),e._v(" doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("len "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("matchLen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" matches"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("matches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("nil")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" ruleType\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("of")]),e._v(" MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n    val"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("level "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" matches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("len\n    val"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("doc "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" matches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("MarkdownTokenRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MarkdownTokenType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("Header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" headerVal"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n\n  start "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+=")]),e._v(" size\n")])])]),a("h3",{attrs:{id:"get-it-to-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-it-to-work"}},[e._v("#")]),e._v(" Get it to work")]),e._v(" "),a("p",[e._v("Combine all the above code together, we will get a function that can parse "),a("code",[e._v("# h1")]),e._v(" to "),a("code",[e._v("<h1>h1</h1>")]),e._v(" and "),a("code",[e._v("## h2")]),e._v(" to "),a("code",[e._v("<h2>h2</h2>")]),e._v(". The code is saved as a gist here: "),a("a",{attrs:{href:"https://gist.github.com/soasme/1a5271090250baed7936b5ac451e50c2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gist.github.com/soasme/1a5271090250baed7936b5ac451e50c2"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"discussion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[e._v("#")]),e._v(" Discussion")]),e._v(" "),a("p",[e._v("The function "),a("code",[e._v("markdown(doc)")]),e._v(" converts the markdown document to HTML document. It could lead to a "),a("code",[e._v("MarkdownError")]),e._v(" exception when sending non-header markdown document into above least implemented code.  If the "),a("code",[e._v("markdown()")]),e._v(" function is given the parameter as "),a("code",[e._v("# h1\\n## h2")]),e._v(", then something interesting will happen.")]),e._v(" "),a("p",[e._v("The regex "),a("code",[e._v('re"^ *(#{1,6}) *([^\\n]+?) *#* *(?:\\n+|$)"')]),e._v(" is in charge of matching header texts.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/static/images/markdown-parser-header-regex.svg",alt:"Header Regex Rule"}})]),e._v(" "),a("p",[e._v("The function "),a("code",[e._v("findToken")]),e._v(" has below internal process.")]),e._v(" "),a("ul",[a("li",[e._v("Match "),a("code",[e._v("# h1\\n")]),e._v(" first,")]),e._v(" "),a("li",[e._v("Extract "),a("code",[e._v("#")]),e._v(" as group 1,")]),e._v(" "),a("li",[e._v("Extract "),a("code",[e._v("h1")]),e._v(" as group 2,")]),e._v(" "),a("li",[e._v("Create a token: "),a("code",[e._v('MarkdownToken<type: Header, headerVal: Header(level: 1, doc: "h1")>')]),e._v(".")])]),e._v(" "),a("p",[e._v("Since we paused at the end of "),a("code",[e._v("# h1\\n")]),e._v(", the function "),a("code",[e._v("parseTokens")]),e._v(" will start from "),a("code",[e._v("## h2")]),e._v(" after handling "),a("code",[e._v("# h1\\n")]),e._v(". Similarly, the above function generate a token wrapping "),a("code",[e._v('Header(level: 2, doc: "h2")')]),e._v(".")]),e._v(" "),a("p",[e._v("Here we reach the end of the "),a("code",[e._v("doc")]),e._v(", so "),a("code",[e._v("parseTokens")]),e._v(" decides to stop and hand over the job to "),a("code",[e._v("renderToken")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("The function "),a("code",[e._v("renderToken")]),e._v(" converts "),a("code",[e._v('Header(level: 1, doc: "h1")')]),e._v(" to "),a("code",[e._v("<h1>h1</h1>")]),e._v(".")]),e._v(" "),a("li",[e._v("It also converts "),a("code",[e._v('Header(level: 2, doc: "h2")')]),e._v(" to "),a("code",[e._v("<h2>h2</h2>")]),e._v(".")])]),e._v(" "),a("p",[e._v("The above code is very rudimentary as a markdown parser, yet it provides us with an extensive framework.")]),e._v(" "),a("h2",{attrs:{id:"building-on-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-on-it"}},[e._v("#")]),e._v(" Building on It")]),e._v(" "),a("p",[e._v("By building small features one by one, the program becomes more feature completeness. Below will discuss how to adopt new features in the above code")]),e._v(" "),a("ul",[a("li",[e._v("Hrule can convert "),a("code",[e._v("---")]),e._v(" to "),a("code",[e._v("<hr>")]),e._v(". The implementation can follow a similar pattern as "),a("code",[e._v("Header")]),e._v(". The trick of regex is that we need to match quite a lot of patterns like "),a("code",[e._v("---")]),e._v(", "),a("code",[e._v("****")]),e._v(", "),a("code",[e._v("____")]),e._v(", and so on. It wouldn't be difficult if we append "),a("code",[e._v("[-*_]{2,}")]),e._v(" right after "),a("code",[e._v("[-*_]")]),e._v(".")]),e._v(" "),a("li",[e._v("IndentedBlockCode allows a block of code with four spaces as the indent. The regex is amazingly short: "),a("code",[e._v("( {4}[^\\n]+\\n*)+")]),e._v(". The rendering code puts the code content into "),a("code",[e._v("<pre><code>{code}</code></pre>")]),e._v(".")]),e._v(" "),a("li",[e._v("Fences allows codes wrapped into a sequence of ``` characters.  We can add a new rule just like IndentedBlockCode, but change "),a("code",[e._v("{4}")]),e._v(" to `{3}.")]),e._v(" "),a("li",[e._v("Paragraph is the most often seen block that ends with two or more newlines. Well, technically, if the last paragraph in the document doesn't need to have two or more newlines.  We need to parse the paragraph after matching the other rules, which requires us defining a "),a("code",[e._v("parsingOrder")]),e._v(" to help "),a("code",[e._v("findToken")]),e._v(" decide the order explicitly.")]),e._v(" "),a("li",[e._v("DefineLink creates a definition of the link and let us reference it in the post. It need to match syntax like "),a("code",[e._v("[ref]: link")]),e._v(" or "),a("code",[e._v('[ref]: <link> "title"')]),e._v(". Since the use of "),a("code",[e._v("[ref]")]),e._v(" can appear ahead of the definition, it implies rendering right after parsing through iteration is not enough. We can introduce a "),a("code",[e._v("MarkdownContext")]),e._v(" to the "),a("code",[e._v("markdown(doc)")]),e._v(" function. In the "),a("code",[e._v("MarkdownContext")]),e._v(", we build a table of links with their definitions so that in rendering we know which link to apply to the reference.")])]),e._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# +-------------------+    +--------+                    +---------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# | Markdown Document +--\x3e | Tokens +--(build context)-> | HTML Document |")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# +-------------------+    +--------+                    +---------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" tokens "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("toSeq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("parseTokens")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("preprocessing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" blockParsingOrder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("buildContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("tokens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" tokens"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("renderToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("ul",[a("li",[e._v("DefineFootnote has similar syntax like DefineLink, "),a("code",[e._v("[^ref]: footnote")]),e._v(" except it gets translated into "),a("code",[e._v("<sup>ref</sup>")]),e._v(" in the middle of the HTML document and a list of footnotes in the end. So the implementation can be similar to the DefineLink.")]),e._v(" "),a("li",[e._v("List supports nested definition. So after matching the list, we need parsing the text of each element again to a sequence of tokens. The process is recursive.")]),e._v(" "),a("li",[e._v("...")])]),e._v(" "),a("h2",{attrs:{id:"test-driven-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-driven-development"}},[e._v("#")]),e._v(" Test-Driven Development")]),e._v(" "),a("p",[e._v("Building new feature can be test-driven - write a unit test case before adding code. The tests have below form. When applying to a new feature, you can add a case, replacing input and output. Besides, we can leverage tools like "),a("code",[e._v("watchdog")]),e._v(" to watch code modifications and run tests automatically.")]),e._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[e._v("test "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"header"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n  check "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("markdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"# h1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<h1>h1</h1>"')]),e._v("\n")])])]),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Building a markdown parser from scratch is delightful.  In hindsight, though the initial implementation is short, there are some reasons building from small code.")]),e._v(" "),a("p",[e._v("First, without too much code reading, it's easy to have an insight into the data flow and internal process.")]),e._v(" "),a("p",[e._v("Second, incrementally adding small code for a feature and keeping tests passes is a win. We gain positive feedbacks and strong confidence.")]),e._v(" "),a("p",[e._v("Third, type annotations never miss coverage a case. At first, we write code for one type. Later on, with adding more codes, the type annotation handles all the heavy lifts checking the missing spot. If you forget adding code for a new type, the editor complaints about it.")]),e._v(" "),a("h2",{attrs:{id:"credit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credit"}},[e._v("#")]),e._v(" Credit")]),e._v(" "),a("p",[e._v("I've published the completed code as a nim package "),a("a",{attrs:{href:"https://github.com/soasme/nim-markdown",target:"_blank",rel:"noopener noreferrer"}},[e._v("soasme/nim-markdown"),a("OutboundLink")],1),e._v(".\nBut I don't want to steal the thunder - the original idea of the code was from "),a("a",{attrs:{href:"https://github.com/lepture/mistune",target:"_blank",rel:"noopener noreferrer"}},[e._v("lepture/mistune"),a("OutboundLink")],1),e._v(", one of my favorite markdown parser implementations. 😃")])])}),[],!1,null,null,null);t.default=n.exports}}]);