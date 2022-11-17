"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,g=u["".concat(s,".").concat(b)]||u[b]||m[b]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8610:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4996);const o=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{alt:e.alt,src:(0,r.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption"},e.caption))))},2908:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(9960);n(4996);const o=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),l=()=>a.createElement("p",null,a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},5101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(9960);n(4996),n(2908),n(589),n(8610);const l={title:"How we built a Trello clone with Wasp - Waspello!",authors:["matijasos"],tags:["webdev","wasp"]},i=void 0,s={permalink:"/blog/2021/12/02/waspello",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2021-12-02-waspello.md",source:"@site/blog/2021-12-02-waspello.md",title:"How we built a Trello clone with Wasp - Waspello!",description:"Enter Waspello",date:"2021-12-02T00:00:00.000Z",formattedDate:"December 2, 2021",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:9.225,hasTruncateMarker:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],frontMatter:{title:"How we built a Trello clone with Wasp - Waspello!",authors:["matijasos"],tags:["webdev","wasp"]},prevItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"},nextItem:{title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",permalink:"/blog/2021/11/22/fundraising-learnings"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enter Waspello",src:n(505).Z,width:"1702",height:"774"})),(0,r.kt)("p",{align:"center"},(0,r.kt)(o.Z,{to:"https://waspello.netlify.app/",mdxType:"Link"},"Try Waspello here!")," | ",(0,r.kt)(o.Z,{to:"https://github.com/wasp-lang/wasp/blob/main/examples/waspello/main.wasp",mdxType:"Link"},"See the code")),(0,r.kt)("p",null,"We've built a Trello clone using Wasp! Read on to learn how it went and how you can contribute."))}u.isMDXComponent=!0},589:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waspello-screenshot-cfb8c8229fb035e7bbac6ca19cafd805.png"}}]);