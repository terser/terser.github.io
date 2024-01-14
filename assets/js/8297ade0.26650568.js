"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25],{560:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(1151);const n={id:"reporting-issues",title:"Reporting Issues",sidebar_label:"Reporting Issues"},i=void 0,a={id:"reporting-issues",title:"Reporting Issues",description:"A minimal, reproducible example",source:"@site/docs/reporting-issues.md",sourceDirName:".",slug:"/reporting-issues",permalink:"/docs/reporting-issues",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"reporting-issues",title:"Reporting Issues",sidebar_label:"Reporting Issues"},sidebar:"tutorialSidebar",previous:{title:"Options",permalink:"/docs/options"}},c={},l=[{value:"A minimal, reproducible example",id:"a-minimal-reproducible-example",level:2},{value:"Obtaining the source code given to Terser",id:"obtaining-the-source-code-given-to-terser",level:2},{value:"Stack traces",id:"stack-traces",level:2}];function u(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"a-minimal-reproducible-example",children:"A minimal, reproducible example"}),"\n",(0,r.jsx)(s.p,{children:"You're expected to provide a [minimal reproducible example] of input code that will demonstrate your issue."}),"\n",(0,r.jsx)(s.p,{children:"To get to this example, you can remove bits of your code and stop if your issue ceases to reproduce."}),"\n",(0,r.jsx)(s.h2,{id:"obtaining-the-source-code-given-to-terser",children:"Obtaining the source code given to Terser"}),"\n",(0,r.jsxs)(s.p,{children:["Because users often don't control the call to ",(0,r.jsx)(s.code,{children:"await minify()"})," or its arguments, Terser provides a ",(0,r.jsx)(s.code,{children:"TERSER_DEBUG_DIR"})," environment variable to make terser output some debug logs."]}),"\n",(0,r.jsxs)(s.p,{children:["These logs will contain the input code and options of each ",(0,r.jsx)(s.code,{children:"minify()"})," call."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"TERSER_DEBUG_DIR=/tmp/terser-log-dir command-that-uses-terser\nls /tmp/terser-log-dir\nterser-debug-123456.log\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you're not sure how to set an environment variable on your shell (the above example works in bash), you can try using cross-env:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"> npx cross-env TERSER_DEBUG_DIR=/path/to/logs command-that-uses-terser\n"})}),"\n",(0,r.jsx)(s.h2,{id:"stack-traces",children:"Stack traces"}),"\n",(0,r.jsxs)(s.p,{children:["In the terser CLI we use ",(0,r.jsx)(s.a,{href:"https://npmjs.com/source-map-support",children:"source-map-support"})," to produce good error stacks. In your own app, you're expected to enable source-map-support (read their docs) to have nice stack traces that will help you write good issues."]})]})}function d(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var r=t(7294);const o={},n=r.createContext(o);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);