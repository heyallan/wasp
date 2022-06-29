"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2908:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6742);n(4996);const o=()=>r.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>r.createElement("p",null,r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},6742:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7294),a=n(3727),o=n(2263),i=n(3919),s=n(412);const l=(0,r.createContext)({collectLink:()=>{}});var u=n(4996),c=n(8780);const d=function(e){let{isNavLink:t,to:n,href:d,activeClassName:p,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:b=!0,...g}=e;var h;const{siteConfig:{trailingSlash:v,baseUrl:y}}=(0,o.Z)(),{withBaseUrl:w}=(0,u.C)(),k=(0,r.useContext)(l),O=n||d,j=(0,i.Z)(O),C=null==O?void 0:O.replace("pathname://","");let E=void 0!==C?(T=C,b&&(e=>e.startsWith("/"))(T)?w(T):T):void 0;var T;E&&j&&(E=(0,c.applyTrailingSlash)(E,{trailingSlash:v,baseUrl:y}));const W=(0,r.useRef)(!1),P=t?a.OL:a.rU,x=s.Z.canUseIntersectionObserver;let Z;(0,r.useEffect)((()=>(!x&&j&&null!=E&&window.docusaurus.prefetch(E),()=>{x&&Z&&Z.disconnect()})),[E,x,j]);const S=null!==(h=null==E?void 0:E.startsWith("#"))&&void 0!==h&&h,U=!E||!j||S;return E&&j&&!S&&!m&&k.collectLink(E),U?r.createElement("a",{href:E,...O&&!j&&{target:"_blank",rel:"noopener noreferrer"},...g}):r.createElement(P,{...g,onMouseEnter:()=>{W.current||null==E||(window.docusaurus.preload(E),W.current=!0)},innerRef:e=>{var t,n;x&&e&&j&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))})),Z.observe(t))},to:E||"",...t&&{isActive:f,activeClassName:p}})}},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>a,b:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>i});var r=n(2263),a=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,r)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},7561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));n(6742),n(4996),n(2908),n(589);const o={title:"Following YC, Wasp raised $1.5M Seed Round led by Lunar Ventures and HV Capital",authors:["matijasos"],tags:["startup","wasp"]},i=void 0,s={permalink:"/blog/2021/11/21/seed-round",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2021-11-21-seed-round.md",source:"@site/blog/2021-11-21-seed-round.md",title:"Following YC, Wasp raised $1.5M Seed Round led by Lunar Ventures and HV Capital",description:"After graduating from Y Combinator's Winter 2021 Batch, we are super excited to announce that Wasp raised $1.5m in our first funding round! The round is led by Lunar Ventures and joined by HV Capital. Also see it in TechCrunch.",date:"2021-11-21T00:00:00.000Z",formattedDate:"November 21, 2021",tags:[{label:"startup",permalink:"/blog/tags/startup"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:4.49,truncated:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],prevItem:{title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",permalink:"/blog/2021/11/22/fundraising-learnings"},nextItem:{title:"Tutorial: `forall` in Haskell",permalink:"/blog/2021/09/01/haskell-forall-tutorial"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After graduating from Y Combinator's Winter 2021 Batch, we are super excited to announce that Wasp raised $1.5m in our first funding round! The round is led by Lunar Ventures and joined by HV Capital. Also ",(0,a.kt)("a",{parentName:"p",href:"https://techcrunch.com/2021/10/04/yc-grads-wasp-land-1-5m-seed-to-help-developers-build-web-apps-faster/"},"see it in TechCrunch"),"."),(0,a.kt)("p",null,"The best thing about it is that the majority of our investors are either experienced engineers themselves (e.g. ex-Facebook, Twitter and Airbnb) or have a strong focus on investing in deep technology and developer companies. They share the vision we have with Wasp, understand and care about the problem we are solving."))}d.isMDXComponent=!0},589:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}i.isMDXComponent=!0}}]);