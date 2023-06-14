"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"miscellaneous",title:"Miscellaneous",sidebar_label:"Miscellaneous"},o=void 0,l={unversionedId:"miscellaneous",id:"miscellaneous",title:"Miscellaneous",description:"Keeping copyright notices or other comments",source:"@site/docs/miscellaneous.md",sourceDirName:".",slug:"/miscellaneous",permalink:"/docs/miscellaneous",draft:!1,tags:[],version:"current",frontMatter:{id:"miscellaneous",title:"Miscellaneous",sidebar_label:"Miscellaneous"},sidebar:"tutorialSidebar",previous:{title:"CLI Usage",permalink:"/docs/cli-usage"},next:{title:"Reporting Issues",permalink:"/docs/reporting-issues"}},s={},p=[{value:"Keeping copyright notices or other comments",id:"keeping-copyright-notices-or-other-comments",level:3},{value:"The <code>unsafe</code> <code>compress</code> option",id:"the-unsafe-compress-option",level:3},{value:"Conditional compilation",id:"conditional-compilation",level:3},{value:"Conditional compilation API",id:"conditional-compilation-api",level:3},{value:"Annotations",id:"annotations",level:3},{value:"ESTree / SpiderMonkey AST",id:"estree--spidermonkey-ast",level:3},{value:"Use Acorn for parsing",id:"use-acorn-for-parsing",level:3},{value:"Terser Fast Minify Mode",id:"terser-fast-minify-mode",level:3},{value:"Source maps and debugging",id:"source-maps-and-debugging",level:4},{value:"Compiler assumptions",id:"compiler-assumptions",level:3},{value:"Build Tools and Adaptors using Terser",id:"build-tools-and-adaptors-using-terser",level:3},{value:"Replacing <code>uglify-es</code> with <code>terser</code> in a project using <code>yarn</code>",id:"replacing-uglify-es-with-terser-in-a-project-using-yarn",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"keeping-copyright-notices-or-other-comments"},"Keeping copyright notices or other comments"),(0,r.kt)("p",null,"You can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--comments"),' to retain certain comments in the output.  By\ndefault it will keep comments starting with "!" and JSDoc-style comments that\ncontain "@preserve", "@copyright", "@license" or "@cc_on" (conditional compilation for IE).\nYou can pass ',(0,r.kt)("inlineCode",{parentName:"p"},"--comments all")," to keep all the comments, or a valid JavaScript regexp to\nkeep only comments that match this regexp.  For example ",(0,r.kt)("inlineCode",{parentName:"p"},"--comments /^!/"),"\nwill keep comments like ",(0,r.kt)("inlineCode",{parentName:"p"},"/*! Copyright Notice */"),"."),(0,r.kt)("p",null,"Note, however, that there might be situations where comments are lost.  For\nexample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function f() {\n    /** @preserve Foo Bar */\n    function g() {\n        // this function is never called\n    }\n    return something();\n}\n")),(0,r.kt)("p",null,'Even though it has "@preserve", the comment will be lost because the inner\nfunction ',(0,r.kt)("inlineCode",{parentName:"p"},"g")," (which is the AST node to which the comment is attached to) is\ndiscarded by the compressor as not referenced."),(0,r.kt)("p",null,"The safest comments where to place copyright information (or other info that\nneeds to be kept in the output) are comments attached to toplevel nodes."),(0,r.kt)("h3",{id:"the-unsafe-compress-option"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"unsafe")," ",(0,r.kt)("inlineCode",{parentName:"h3"},"compress")," option"),(0,r.kt)("p",null,"It enables some transformations that ",(0,r.kt)("em",{parentName:"p"},"might")," break code logic in certain\ncontrived cases, but should be fine for most code.  It assumes that standard\nbuilt-in ECMAScript functions and classes have not been altered or replaced.\nYou might want to try it on your own code; it should reduce the minified size.\nSome examples of the optimizations made when this option is enabled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new Array(1, 2, 3)")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Array(1, 2, 3)")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"[ 1, 2, 3 ]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Array.from([1, 2, 3])")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new Object()")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String(exp)")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"exp.toString()")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},'"" + exp')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new Object/RegExp/Function/Error/Array (...)")," \u2192 we discard the ",(0,r.kt)("inlineCode",{parentName:"li"},"new")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"foo bar".substr(4)')," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},'"bar"'))),(0,r.kt)("h3",{id:"conditional-compilation"},"Conditional compilation"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--define")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-d"),") switch in order to declare global\nvariables that Terser will assume to be constants (unless defined in\nscope).  For example if you pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--define DEBUG=false")," then, coupled with\ndead code removal Terser will discard the following from the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'if (DEBUG) {\n    console.log("debug stuff");\n}\n')),(0,r.kt)("p",null,"You can specify nested constants in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"--define env.DEBUG=false"),"."),(0,r.kt)("p",null,"Another way of doing that is to declare your globals as constants in a\nseparate file and include it into the build.  For example you can have a\n",(0,r.kt)("inlineCode",{parentName:"p"},"build/defines.js")," file with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var DEBUG = false;\nvar PRODUCTION = true;\n// etc.\n")),(0,r.kt)("p",null,"and build your code like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terser build/defines.js js/foo.js js/bar.js... -c\n")),(0,r.kt)("p",null,"Terser will notice the constants and, since they cannot be altered, it\nwill evaluate references to them to the value itself and drop unreachable\ncode as usual.  The build will contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," declarations if you use\nthem. If you are targeting < ES6 environments which does not support ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),",\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce_vars")," (enabled by default) should suffice."),(0,r.kt)("h3",{id:"conditional-compilation-api"},"Conditional compilation API"),(0,r.kt)("p",null,"You can also use conditional compilation via the programmatic API. With the difference that the\nproperty name is ",(0,r.kt)("inlineCode",{parentName:"p"},"global_defs")," and is a compressor property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var result = await minify(fs.readFileSync("input.js", "utf8"), {\n    compress: {\n        dead_code: true,\n        global_defs: {\n            DEBUG: false\n        }\n    }\n});\n')),(0,r.kt)("p",null,"To replace an identifier with an arbitrary non-constant expression it is\nnecessary to prefix the ",(0,r.kt)("inlineCode",{parentName:"p"},"global_defs")," key with ",(0,r.kt)("inlineCode",{parentName:"p"},'"@"')," to instruct Terser\nto parse the value as an expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await minify("alert(\'hello\');", {\n    compress: {\n        global_defs: {\n            "@alert": "console.log"\n        }\n    }\n}).code;\n// returns: \'console.log("hello");\'\n')),(0,r.kt)("p",null,"Otherwise it would be replaced as string literal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await minify("alert(\'hello\');", {\n    compress: {\n        global_defs: {\n            "alert": "console.log"\n        }\n    }\n}).code;\n// returns: \'"console.log"("hello");\'\n')),(0,r.kt)("h3",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"Annotations in Terser are a way to tell it to treat a certain function call differently. The following annotations are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/*@__INLINE__*/")," - forces a function to be inlined somewhere."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/*@__NOINLINE__*/")," - Makes sure the called function is not inlined into the call site."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/*@__PURE__*/")," - Marks a function call as pure. That means, it can safely be dropped."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/*@__KEY__*/")," - Marks a string literal as a property to also mangle it when mangling properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/*@__MANGLE_PROP__*/")," - Opts-in an object property (or class field) for mangling, when the property mangler is enabled.")),(0,r.kt)("p",null,"You can use either a ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," sign at the start, or a ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),"."),(0,r.kt)("p",null,"Here are some examples on how to use them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'/*@__INLINE__*/\nfunction_always_inlined_here()\n\n/*#__NOINLINE__*/\nfunction_cant_be_inlined_into_here()\n\nconst x = /*#__PURE__*/i_am_dropped_if_x_is_not_used()\n\nfunction lookup(object, key) { return object[key]; }\nlookup({ i_will_be_mangled_too: "bar" }, /*@__KEY__*/ "i_will_be_mangled_too");\n')),(0,r.kt)("h3",{id:"estree--spidermonkey-ast"},"ESTree / SpiderMonkey AST"),(0,r.kt)("p",null,"Terser has its own abstract syntax tree format; for\n",(0,r.kt)("a",{parentName:"p",href:"http://lisperator.net/blog/uglifyjs-why-not-switching-to-spidermonkey-ast/"},"practical reasons"),"\nwe can't easily change to using the SpiderMonkey AST internally.  However,\nTerser now has a converter which can import a SpiderMonkey AST."),(0,r.kt)("p",null,"For example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ternjs/acorn"},"Acorn")," is a super-fast parser that produces a\nSpiderMonkey AST.  It has a small CLI utility that parses one file and dumps\nthe AST in JSON on the standard output.  To use Terser to mangle and\ncompress that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"acorn file.js | terser -p spidermonkey -m -c\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-p spidermonkey")," option tells Terser that all input files are not\nJavaScript, but JS code described in SpiderMonkey AST in JSON.  Therefore we\ndon't use our own parser in this case, but just transform that AST into our\ninternal AST."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"spidermonkey")," is also available in ",(0,r.kt)("inlineCode",{parentName:"p"},"minify")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," options to\naccept and/or produce a spidermonkey AST."),(0,r.kt)("h3",{id:"use-acorn-for-parsing"},"Use Acorn for parsing"),(0,r.kt)("p",null,"More for fun, I added the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p acorn")," option which will use Acorn to do all\nthe parsing.  If you pass this option, Terser will ",(0,r.kt)("inlineCode",{parentName:"p"},'require("acorn")'),"."),(0,r.kt)("p",null,"Acorn is really fast (e.g. 250ms instead of 380ms on some 650K code), but\nconverting the SpiderMonkey tree that Acorn produces takes another 150ms so\nin total it's a bit more than just using Terser's own parser."),(0,r.kt)("h3",{id:"terser-fast-minify-mode"},"Terser Fast Minify Mode"),(0,r.kt)("p",null,"It's not well known, but whitespace removal and symbol mangling accounts\nfor 95% of the size reduction in minified code for most JavaScript - not\nelaborate code transforms. One can simply disable ",(0,r.kt)("inlineCode",{parentName:"p"},"compress")," to speed up\nTerser builds by 3 to 4 times."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"d3.js"),(0,r.kt)("th",{parentName:"tr",align:"right"},"size"),(0,r.kt)("th",{parentName:"tr",align:"right"},"gzip size"),(0,r.kt)("th",{parentName:"tr",align:"right"},"time (s)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"original"),(0,r.kt)("td",{parentName:"tr",align:"right"},"451,131"),(0,r.kt)("td",{parentName:"tr",align:"right"},"108,733"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:terser@3.7.5"},"terser@3.7.5")," mangle=false, compress=false"),(0,r.kt)("td",{parentName:"tr",align:"right"},"316,600"),(0,r.kt)("td",{parentName:"tr",align:"right"},"85,245"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.82")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:terser@3.7.5"},"terser@3.7.5")," mangle=true, compress=false"),(0,r.kt)("td",{parentName:"tr",align:"right"},"220,216"),(0,r.kt)("td",{parentName:"tr",align:"right"},"72,730"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:terser@3.7.5"},"terser@3.7.5")," mangle=true, compress=true"),(0,r.kt)("td",{parentName:"tr",align:"right"},"212,046"),(0,r.kt)("td",{parentName:"tr",align:"right"},"70,954"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.87")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:babili@0.1.4"},"babili@0.1.4")),(0,r.kt)("td",{parentName:"tr",align:"right"},"210,713"),(0,r.kt)("td",{parentName:"tr",align:"right"},"72,140"),(0,r.kt)("td",{parentName:"tr",align:"right"},"12.64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:babel-minify@0.4.3"},"babel-minify@0.4.3")),(0,r.kt)("td",{parentName:"tr",align:"right"},"210,321"),(0,r.kt)("td",{parentName:"tr",align:"right"},"72,242"),(0,r.kt)("td",{parentName:"tr",align:"right"},"48.67")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:babel-minify@0.5.0-alpha.01eac1c3"},"babel-minify@0.5.0-alpha.01eac1c3")),(0,r.kt)("td",{parentName:"tr",align:"right"},"210,421"),(0,r.kt)("td",{parentName:"tr",align:"right"},"72,238"),(0,r.kt)("td",{parentName:"tr",align:"right"},"14.17")))),(0,r.kt)("p",null,"To enable fast minify mode from the CLI use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terser file.js -m\n")),(0,r.kt)("p",null,"To enable fast minify mode with the API use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await minify(code, { compress: false, mangle: true });\n")),(0,r.kt)("h4",{id:"source-maps-and-debugging"},"Source maps and debugging"),(0,r.kt)("p",null,"Various ",(0,r.kt)("inlineCode",{parentName:"p"},"compress")," transforms that simplify, rearrange, inline and remove code\nare known to have an adverse effect on debugging with source maps. This is\nexpected as code is optimized and mappings are often simply not possible as\nsome code no longer exists. For highest fidelity in source map debugging\ndisable the ",(0,r.kt)("inlineCode",{parentName:"p"},"compress")," option and just use ",(0,r.kt)("inlineCode",{parentName:"p"},"mangle"),"."),(0,r.kt)("p",null,"When debugging, make sure you enable the ",(0,r.kt)("strong",{parentName:"p"},'"map scopes"')," feature to map mangled variable names back to their original names.",(0,r.kt)("br",{parentName:"p"}),"\n","Without this, all variable values will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/terser/terser/issues/1367"},"https://github.com/terser/terser/issues/1367")," for more details."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/27283110/230441652-ac5cf6b0-5dc5-4ffc-9d8b-bd02875484f4.png",alt:"image"})),(0,r.kt)("h3",{id:"compiler-assumptions"},"Compiler assumptions"),(0,r.kt)("p",null,"To allow for better optimizations, the compiler makes various assumptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".toString()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".valueOf()")," don't have side effects, and for built-in\nobjects they have not been overridden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NaN")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Infinity")," have not been externally redefined."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arguments.callee"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"arguments.caller")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Function.prototype.caller")," are not used."),(0,r.kt)("li",{parentName:"ul"},"The code doesn't expect the contents of ",(0,r.kt)("inlineCode",{parentName:"li"},"Function.prototype.toString()")," or\n",(0,r.kt)("inlineCode",{parentName:"li"},"Error.prototype.stack")," to be anything in particular."),(0,r.kt)("li",{parentName:"ul"},"Getting and setting properties on a plain object does not cause other side effects\n(using ",(0,r.kt)("inlineCode",{parentName:"li"},".watch()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Proxy"),")."),(0,r.kt)("li",{parentName:"ul"},"Object properties can be added, removed and modified (not prevented with\n",(0,r.kt)("inlineCode",{parentName:"li"},"Object.defineProperty()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Object.defineProperties()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Object.freeze()"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"Object.preventExtensions()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Object.seal()"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"document.all")," is not ",(0,r.kt)("inlineCode",{parentName:"li"},"== null")),(0,r.kt)("li",{parentName:"ul"},"Assigning properties to a class doesn't have side effects and does not throw.")),(0,r.kt)("h3",{id:"build-tools-and-adaptors-using-terser"},"Build Tools and Adaptors using Terser"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/browse/depended/terser"},"https://www.npmjs.com/browse/depended/terser")),(0,r.kt)("h3",{id:"replacing-uglify-es-with-terser-in-a-project-using-yarn"},"Replacing ",(0,r.kt)("inlineCode",{parentName:"h3"},"uglify-es")," with ",(0,r.kt)("inlineCode",{parentName:"h3"},"terser")," in a project using ",(0,r.kt)("inlineCode",{parentName:"h3"},"yarn")),(0,r.kt)("p",null,"A number of JS bundlers and uglify wrappers are still using buggy versions\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"uglify-es")," and have not yet upgraded to ",(0,r.kt)("inlineCode",{parentName:"p"},"terser"),". If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"\nyou can add the following alias to your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  "resolutions": {\n    "uglify-es": "npm:terser"\n  }\n')),(0,r.kt)("p",null,"to use ",(0,r.kt)("inlineCode",{parentName:"p"},"terser")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"uglify-es")," in all deeply nested dependencies\nwithout changing any code."),(0,r.kt)("p",null,"Note: for this change to take effect you must run the following commands\nto remove the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," lock file and reinstall all packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ rm -rf node_modules yarn.lock\n$ yarn\n")))}c.isMDXComponent=!0}}]);