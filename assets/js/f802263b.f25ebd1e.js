"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2908:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6742);n(4996);const o=()=>r.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>r.createElement("p",null,r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},6742:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7294),a=n(3727),o=n(2263),i=n(3919),l=n(412);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(4996),u=n(8780);const p=function(e){let{isNavLink:t,to:n,href:p,activeClassName:f,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:b=!0,...g}=e;var h;const{siteConfig:{trailingSlash:v,baseUrl:y}}=(0,o.Z)(),{withBaseUrl:w}=(0,c.C)(),k=(0,r.useContext)(s),O=n||p,j=(0,i.Z)(O),E=null==O?void 0:O.replace("pathname://","");let C=void 0!==E?(P=E,b&&(e=>e.startsWith("/"))(P)?w(P):P):void 0;var P;C&&j&&(C=(0,u.applyTrailingSlash)(C,{trailingSlash:v,baseUrl:y}));const W=(0,r.useRef)(!1),Z=t?a.OL:a.rU,S=l.Z.canUseIntersectionObserver;let M;(0,r.useEffect)((()=>(!S&&j&&null!=C&&window.docusaurus.prefetch(C),()=>{S&&M&&M.disconnect()})),[C,S,j]);const T=null!==(h=null==C?void 0:C.startsWith("#"))&&void 0!==h&&h,U=!C||!j||T;return C&&j&&!T&&!m&&k.collectLink(C),U?r.createElement("a",{href:C,...O&&!j&&{target:"_blank",rel:"noopener noreferrer"},...g}):r.createElement(Z,{...g,onMouseEnter:()=>{W.current||null==C||(window.docusaurus.preload(C),W.current=!0)},innerRef:e=>{var t,n;S&&e&&j&&(t=e,n=()=>{null!=C&&window.docusaurus.prefetch(C)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:C||"",...t&&{isActive:d,activeClassName:f}})}},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>a,b:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>i});var r=n(2263),a=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(6742),n(4996),n(2908),n(589);const o={title:"Meet the team - Filip Sodi\u0107, Founding Engineer",authors:["matijasos"],image:"/img/filip-intro-banner.png",tags:["wasp","new-hire"]},i=void 0,l={permalink:"/blog/2022/05/31/filip-intro",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-05-31-filip-intro.md",source:"@site/blog/2022-05-31-filip-intro.md",title:"Meet the team - Filip Sodi\u0107, Founding Engineer",description:"Welcome Filip!",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"new-hire",permalink:"/blog/tags/new-hire"}],readingTime:5.09,truncated:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],prevItem:{title:"How to win a hackathon. Brief manual.",permalink:"/blog/2022/06/01/gitpod-hackathon-guide"},nextItem:{title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",permalink:"/blog/2022/01/27/waspleau"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Welcome Filip!",src:n(5509).Z})),(0,a.kt)("p",null,"Find Filip on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sodic"},"GitHub"),"."))}p.isMDXComponent=!0},589:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}i.isMDXComponent=!0},5509:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/filip-intro-banner-22fe837fa4f00a9634f7e77b79ef7677.png"}}]);