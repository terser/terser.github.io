"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[491],{7143:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>t});var i=s(5893),o=s(1151);const r={id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},c=void 0,a={id:"api-reference",title:"API Reference",description:"Assuming installation via NPM, you can load Terser in your application",source:"@site/docs/api-reference.md",sourceDirName:".",slug:"/api-reference",permalink:"/docs/api-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},sidebar:"tutorialSidebar",next:{title:"CLI Usage",permalink:"/docs/cli-usage"}},l={},t=[{value:"Minify options",id:"minify-options",level:2},{value:"Minify options structure",id:"minify-options-structure",level:2},{value:"Source map options",id:"source-map-options",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Assuming installation via NPM, you can load Terser in your application\nlike this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const { minify } = require("terser");\n'})}),"\n",(0,i.jsx)(n.p,{children:"Or,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'import { minify } from "terser";\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Browser loading is also supported. It exposes a global variable ",(0,i.jsx)(n.code,{children:"Terser"})," containing a ",(0,i.jsx)(n.code,{children:".minify"})," property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/source-map@0.7.3/dist/source-map.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/terser/dist/bundle.min.js"><\/script>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["There is a single async high level function, ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"async minify(code, options)"})}),",\nwhich will perform all minification ",(0,i.jsx)(n.a,{href:"/docs/api-reference#minify-options",children:"phases"})," in a configurable\nmanner. By default ",(0,i.jsx)(n.code,{children:"minify()"})," will enable ",(0,i.jsx)(n.a,{href:"/docs/options#compress-options",children:(0,i.jsx)(n.code,{children:"compress"})}),"\nand ",(0,i.jsx)(n.a,{href:"/docs/options#mangle-options",children:(0,i.jsx)(n.code,{children:"mangle"})}),". Example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var code = "function add(first, second) { return first + second; }";\nvar result = await minify(code, { sourceMap: true });\nconsole.log(result.code);  // minified output: function add(n,d){return n+d}\nconsole.log(result.map);  // source map\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.code,{children:"minify"})," more than one JavaScript file at a time by using an object\nfor the first argument where the keys are file names and the values are source\ncode:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var code = {\n    "file1.js": "function add(first, second) { return first + second; }",\n    "file2.js": "console.log(add(1 + 2, 3 + 4));"\n};\nvar result = await minify(code);\nconsole.log(result.code);\n// function add(d,n){return d+n}console.log(add(3,7));\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"toplevel"})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var code = {\n    "file1.js": "function add(first, second) { return first + second; }",\n    "file2.js": "console.log(add(1 + 2, 3 + 4));"\n};\nvar options = { toplevel: true };\nvar result = await minify(code, options);\nconsole.log(result.code);\n// console.log(3+7);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"nameCache"})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var options = {\n    mangle: {\n        toplevel: true,\n    },\n    nameCache: {}\n};\nvar result1 = await minify({\n    "file1.js": "function add(first, second) { return first + second; }"\n}, options);\nvar result2 = await minify({\n    "file2.js": "console.log(add(1 + 2, 3 + 4));"\n}, options);\nconsole.log(result1.code);\n// function n(n,r){return n+r}\nconsole.log(result2.code);\n// console.log(n(3,7));\n'})}),"\n",(0,i.jsx)(n.p,{children:"You may persist the name cache to the file system in the following way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var cacheFileName = "/tmp/cache.json";\nvar options = {\n    mangle: {\n        properties: true,\n    },\n    nameCache: JSON.parse(fs.readFileSync(cacheFileName, "utf8"))\n};\nfs.writeFileSync("part1.js", await minify({\n    "file1.js": fs.readFileSync("file1.js", "utf8"),\n    "file2.js": fs.readFileSync("file2.js", "utf8")\n}, options).code, "utf8");\nfs.writeFileSync("part2.js", await minify({\n    "file3.js": fs.readFileSync("file3.js", "utf8"),\n    "file4.js": fs.readFileSync("file4.js", "utf8")\n}, options).code, "utf8");\nfs.writeFileSync(cacheFileName, JSON.stringify(options.nameCache), "utf8");\n'})}),"\n",(0,i.jsxs)(n.p,{children:["An example of a combination of ",(0,i.jsx)(n.code,{children:"minify()"})," options:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var code = {\n    "file1.js": "function add(first, second) { return first + second; }",\n    "file2.js": "console.log(add(1 + 2, 3 + 4));"\n};\nvar options = {\n    toplevel: true,\n    compress: {\n        global_defs: {\n            "@console.log": "alert"\n        },\n        passes: 2\n    },\n    format: {\n        preamble: "/* minified */"\n    }\n};\nvar result = await minify(code, options);\nconsole.log(result.code);\n// /* minified */\n// alert(10);"\n'})}),"\n",(0,i.jsx)(n.p,{children:"An error example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'try {\n    const result = await minify({"foo.js" : "if (0) else console.log(1);"});\n    // Do something with result\n} catch (error) {\n    const { message, filename, line, col, pos } = error;\n    // Do something with error\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"minify-options",children:"Minify options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ecma"})," (default ",(0,i.jsx)(n.code,{children:"undefined"}),") - pass ",(0,i.jsx)(n.code,{children:"5"}),", ",(0,i.jsx)(n.code,{children:"2015"}),", ",(0,i.jsx)(n.code,{children:"2016"}),", etc to override\n",(0,i.jsx)(n.code,{children:"compress"})," and ",(0,i.jsx)(n.code,{children:"format"}),"'s ",(0,i.jsx)(n.code,{children:"ecma"})," options."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"enclose"})," (default ",(0,i.jsx)(n.code,{children:"false"}),") - pass ",(0,i.jsx)(n.code,{children:"true"}),", or a string in the format\nof ",(0,i.jsx)(n.code,{children:'"args[:values]"'}),", where ",(0,i.jsx)(n.code,{children:"args"})," and ",(0,i.jsx)(n.code,{children:"values"})," are comma-separated\nargument names and values, respectively, to embed the output in a big\nfunction with the configurable arguments and values."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"parse"})," (default ",(0,i.jsx)(n.code,{children:"{}"}),") \u2014 pass an object if you wish to specify some\nadditional ",(0,i.jsx)(n.a,{href:"/docs/options#parse-options",children:"parse options"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"compress"})," (default ",(0,i.jsx)(n.code,{children:"{}"}),") \u2014 pass ",(0,i.jsx)(n.code,{children:"false"})," to skip compressing entirely.\nPass an object to specify custom ",(0,i.jsx)(n.a,{href:"/docs/options#compress-options",children:"compress options"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mangle"})," (default ",(0,i.jsx)(n.code,{children:"true"}),") \u2014 pass ",(0,i.jsx)(n.code,{children:"false"})," to skip mangling names, or pass\nan object to specify ",(0,i.jsx)(n.a,{href:"/docs/options#mangle-options",children:"mangle options"})," (see below)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mangle.properties"})," (default ",(0,i.jsx)(n.code,{children:"false"}),") \u2014 a subcategory of the mangle option.\nPass an object to specify custom ",(0,i.jsx)(n.a,{href:"/docs/options#mangle-properties-options",children:"mangle property options"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"module"})," (default ",(0,i.jsx)(n.code,{children:"false"}),') \u2014 Use when minifying an ES6 module. "use strict"\nis implied and names can be mangled on the top scope. If ',(0,i.jsx)(n.code,{children:"compress"})," or\n",(0,i.jsx)(n.code,{children:"mangle"})," is enabled then the ",(0,i.jsx)(n.code,{children:"toplevel"})," option will be enabled."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"format"})," or ",(0,i.jsx)(n.code,{children:"output"})," (default ",(0,i.jsx)(n.code,{children:"null"}),") \u2014 pass an object if you wish to specify\nadditional ",(0,i.jsx)(n.a,{href:"/docs/options#format-options",children:"format options"}),".  The defaults are optimized\nfor best compression."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sourceMap"})," (default ",(0,i.jsx)(n.code,{children:"false"}),") - pass an object if you wish to specify\n",(0,i.jsx)(n.a,{href:"/docs/api-reference#source-map-options",children:"source map options"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"toplevel"})," (default ",(0,i.jsx)(n.code,{children:"false"}),") - set to ",(0,i.jsx)(n.code,{children:"true"})," if you wish to enable top level\nvariable and function name mangling and to drop unused variables and functions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"nameCache"})," (default ",(0,i.jsx)(n.code,{children:"null"}),") - pass an empty object ",(0,i.jsx)(n.code,{children:"{}"})," or a previously\nused ",(0,i.jsx)(n.code,{children:"nameCache"})," object if you wish to cache mangled variable and\nproperty names across multiple invocations of ",(0,i.jsx)(n.code,{children:"minify()"}),". Note: this is\na read/write property. ",(0,i.jsx)(n.code,{children:"minify()"})," will read the name cache state of this\nobject and update it during minification so that it may be\nreused or externally persisted by the user."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ie8"})," (default ",(0,i.jsx)(n.code,{children:"false"}),") - set to ",(0,i.jsx)(n.code,{children:"true"})," to support IE8."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"keep_classnames"})," (default: ",(0,i.jsx)(n.code,{children:"undefined"}),") - pass ",(0,i.jsx)(n.code,{children:"true"})," to prevent discarding or mangling\nof class names. Pass a regular expression to only keep class names matching that regex."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"keep_fnames"})," (default: ",(0,i.jsx)(n.code,{children:"false"}),") - pass ",(0,i.jsx)(n.code,{children:"true"})," to prevent discarding or mangling\nof function names. Pass a regular expression to only keep function names matching that regex.\nUseful for code relying on ",(0,i.jsx)(n.code,{children:"Function.prototype.name"}),". If the top level minify option\n",(0,i.jsx)(n.code,{children:"keep_classnames"})," is ",(0,i.jsx)(n.code,{children:"undefined"})," it will be overridden with the value of the top level\nminify option ",(0,i.jsx)(n.code,{children:"keep_fnames"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"safari10"})," (default: ",(0,i.jsx)(n.code,{children:"false"}),") - pass ",(0,i.jsx)(n.code,{children:"true"})," to work around Safari 10/11 bugs in\nloop scoping and ",(0,i.jsx)(n.code,{children:"await"}),". See ",(0,i.jsx)(n.code,{children:"safari10"})," options in ",(0,i.jsx)(n.a,{href:"/docs/options#mangle-options",children:(0,i.jsx)(n.code,{children:"mangle"})}),"\nand ",(0,i.jsx)(n.a,{href:"/docs/options#format-options",children:(0,i.jsx)(n.code,{children:"format"})})," for details."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"minify-options-structure",children:"Minify options structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n    parse: {\n        // parse options\n    },\n    compress: {\n        // compress options\n    },\n    mangle: {\n        // mangle options\n\n        properties: {\n            // mangle property options\n        }\n    },\n    format: {\n        // format options (can also use `output` for backwards compatibility)\n    },\n    sourceMap: {\n        // source map options\n    },\n    ecma: 5, // specify one of: 5, 2015, 2016, etc.\n    enclose: false, // or specify true, or "args:values"\n    keep_classnames: false,\n    keep_fnames: false,\n    ie8: false,\n    module: false,\n    nameCache: null, // or specify a name cache object\n    safari10: false,\n    toplevel: false\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"source-map-options",children:"Source map options"}),"\n",(0,i.jsx)(n.p,{children:"To generate a source map:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var result = await minify({"file1.js": "var a = function() {};"}, {\n    sourceMap: {\n        filename: "out.js",\n        url: "out.js.map"\n    }\n});\nconsole.log(result.code); // minified output\nconsole.log(result.map);  // source map\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the source map is not saved in a file, it's just returned in\n",(0,i.jsx)(n.code,{children:"result.map"}),".  The value passed for ",(0,i.jsx)(n.code,{children:"sourceMap.url"})," is only used to set\n",(0,i.jsx)(n.code,{children:"//# sourceMappingURL=out.js.map"})," in ",(0,i.jsx)(n.code,{children:"result.code"}),". The value of\n",(0,i.jsx)(n.code,{children:"filename"})," is only used to set ",(0,i.jsx)(n.code,{children:"file"})," attribute (see [the spec][sm-spec])\nin source map file."]}),"\n",(0,i.jsxs)(n.p,{children:["You can set option ",(0,i.jsx)(n.code,{children:"sourceMap.url"})," to be ",(0,i.jsx)(n.code,{children:'"inline"'})," and source map will\nbe appended to code."]}),"\n",(0,i.jsx)(n.p,{children:"You can also specify sourceRoot property to be included in source map:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var result = await minify({"file1.js": "var a = function() {};"}, {\n    sourceMap: {\n        root: "http://example.com/src",\n        url: "out.js.map"\n    }\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you're compressing compiled JavaScript and have a source map for it, you\ncan use ",(0,i.jsx)(n.code,{children:"sourceMap.content"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var result = await minify({"compiled.js": "compiled code"}, {\n    sourceMap: {\n        content: "content from compiled.js.map",\n        url: "minified.js.map"\n    }\n});\n// same as before, it returns `code` and `map`\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you're using the ",(0,i.jsx)(n.code,{children:"X-SourceMap"})," header instead, you can just omit ",(0,i.jsx)(n.code,{children:"sourceMap.url"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you happen to need the source map as a raw object, set ",(0,i.jsx)(n.code,{children:"sourceMap.asObject"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var i=s(7294);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);