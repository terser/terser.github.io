/*! For license information please see c4f5d8e4.070f3ffa.js.LICENSE.txt */
(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[195],{7828:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(7294),n=i(5893);function s(e){let{desktopOnly:t}=e;const i=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(t&&!window.matchMedia?.("(min-width: 1000px)").matches)return;let e;const r=setTimeout((()=>{i.current&&(e=o(i.current))}),100);return()=>{clearTimeout(r),e?.remove()}}),[]),(0,n.jsx)("div",{ref:i})}const o=e=>{const t=document.createElement("script");return t.id="_carbonads_js",t.async=!0,t.type="text/javascript",t.src="//cdn.carbonads.com/carbon.js?serve=CWYDK53W&placement=terserorg",e.appendChild(t),t}},7890:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var r=i(7294),n=i(7372),s=i(3967),o=i.n(s);const a="heroBanner_qdFl",c="projectLogo_tvNi",l="financialDonors__wA2",p="financialDonorsButton_NI7W",h="backerLogo_c631",d="backerNoLogo_OoYr",g="homeContent_lDHl",m="tagLine_bzJ2",u="explanatoryText_jjVD",x="centeredAd_o9cb",j="logos_LXpN";var v=i(7828);const f=i(1628),b=[{caption:"Webpack",image:"/img/webpack.svg",infoLink:"https://webpack.js.org",pinned:!0},{caption:"Angular",image:"/img/angular.svg",infoLink:"https://angular.io/",pinned:!0},{caption:"Parcel",image:"/img/parcel.png",infoLink:"https://parceljs.org",pinned:!0},{caption:"Aurelia",image:"/img/aurelia.png",infoLink:"https://aurelia.io",pinned:!0}];var z=i(5893);class w extends r.Component{render(){const{siteConfig:e}=this.props,{baseUrl:t}=e,i=e=>(0,z.jsx)("div",{className:c,children:(0,z.jsx)("h1",{children:(0,z.jsx)("img",{src:e.img_src,alt:"Terser",width:900,height:274,style:{height:"auto"}})})}),r=()=>(0,z.jsxs)("div",{className:l,children:[(0,z.jsx)("h3",{children:(0,z.jsx)("a",{href:"https://opencollective.com/terser",className:p,children:"Top recent financial contributors"})}),f.map(((e,t)=>(0,z.jsx)("a",{href:e.infoLink,children:e.image?(0,z.jsx)("img",{src:e.image,alt:e.caption,title:e.caption,className:h,loading:"lazy"}):(0,z.jsx)("span",{className:d,children:e.caption})},t))),(0,z.jsx)("span",{})]}),n=()=>(0,z.jsx)("h2",{className:o()(m),children:e.tagline}),s=e=>(0,z.jsx)("div",{className:u,children:e.children});return(0,z.jsxs)("div",{className:o()(g,a),children:[(0,z.jsx)(i,{img_src:`${t}img/terser-banner-logo.svg`}),(0,z.jsx)(n,{}),(0,z.jsx)(r,{}),(0,z.jsxs)(s,{children:[(0,z.jsx)("p",{children:"Terser is an industry-standard minifier for JavaScript code."}),(0,z.jsx)("p",{children:"It shrinks variable names, removes whitespace and comments, and drops unused code."}),(0,z.jsxs)("p",{children:["You can use it through the ",(0,z.jsx)("a",{href:"/docs/cli-usage",children:"Command line"})," or ",(0,z.jsx)("a",{href:"/docs/api-reference",children:"Node.JS API"}),"."]})]})]})}}class y extends r.Component{render(){const{config:e,language:t=""}=this.props,i=e=>(0,z.jsx)("div",{className:g,...e}),r=e=>(0,z.jsx)("p",{className:j,...e}),s=()=>{if(0===b.length)return null;const e=b.filter((e=>e.pinned)).map((e=>(0,z.jsx)("a",{href:e.infoLink,children:(0,z.jsx)("img",{src:e.image,alt:e.caption,title:e.caption,loading:"lazy"})},e.infoLink)));return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("h2",{children:"Who is Using Terser?"}),(0,z.jsx)(r,{children:e})]})},o=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("h2",{children:"Code Contributors"}),(0,z.jsxs)("p",{children:["This project exists thanks to all the people who contribute. [",(0,z.jsx)("a",{href:"https://github.com/terser/terser/blob/master/CONTRIBUTING.md",children:"Contribute"}),"]."]}),(0,z.jsx)("p",{children:(0,z.jsx)("a",{href:"https://github.com/terser/terser/graphs/contributors",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/contributors.svg?width=890&button=false",loading:"lazy"})})}),(0,z.jsx)("h2",{children:"Individual Financial Contributors"}),(0,z.jsxs)("p",{children:["Become a financial contributor and help us sustain our community. [",(0,z.jsx)("a",{href:"https://opencollective.com/terser/contribute",children:"Contribute"}),"]"]}),(0,z.jsx)("p",{children:(0,z.jsx)("a",{href:"https://opencollective.com/terser",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/individuals.svg?width=890",loading:"lazy"})})}),(0,z.jsx)("h2",{children:"Organization Financial Contributors"}),(0,z.jsxs)("p",{children:["Support this project with your organization. Your logo will show up here with a link to your website. [",(0,z.jsx)("a",{href:"https://opencollective.com/terser/contribute",children:"Contribute"}),"]"]}),(0,z.jsxs)("p",{children:[(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/0/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/0/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/1/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/1/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/2/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/2/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/3/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/3/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/4/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/4/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/5/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/5/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/6/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/6/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/7/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/7/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/8/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/8/avatar.svg",loading:"lazy"})}),(0,z.jsx)("a",{href:"https://opencollective.com/terser/organization/9/website",children:(0,z.jsx)("img",{src:"https://opencollective.com/terser/organization/9/avatar.svg",loading:"lazy"})})]})]});return(0,z.jsxs)(n.Z,{children:[(0,z.jsx)(w,{siteConfig:e,language:t}),(0,z.jsxs)(i,{children:[(0,z.jsx)("div",{className:x,children:(0,z.jsx)(v.Z,{})}),(0,z.jsx)(s,{}),(0,z.jsx)(o,{})]})]})}}},3967:(e,t)=>{var i;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=o(e,s(i)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)r.call(e,i)&&e[i]&&(t=o(t,i));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},1628:e=>{"use strict";e.exports=JSON.parse('[{"caption":"Airbnb","image":"https://opencollective-production.s3.us-west-1.amazonaws.com/0b26a840-d57a-11e9-a92b-dfce8d6cf8c1.png","infoLink":"https://www.airbnb.com/"},{"caption":"Daniel Troger","image":null,"infoLink":"https://opencollective.com/daniel-troger"},{"caption":"Celebian","image":"https://logo.clearbit.com/celebian.com","infoLink":"https://celebian.com/buy-tiktok-followers"},{"caption":"Proxidize","image":"https://logo.clearbit.com/proxidize.com","infoLink":"https://proxidize.com/"},{"caption":"Blastup","image":"https://opencollective-production.s3.us-west-1.amazonaws.com/account-avatar/8838155f-d39f-4c6a-8dbe-603940c8bb29/favicon--dark.jpg","infoLink":"https://blastup.com"}]')}}]);