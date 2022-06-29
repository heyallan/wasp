"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2908:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6742);n(4996);const r=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>a.createElement("p",null,a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),a.createElement(r,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(r,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},6742:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),o=n(3727),r=n(2263),i=n(3919),l=n(412);const s=(0,a.createContext)({collectLink:()=>{}});var p=n(4996),c=n(8780);const u=function(e){let{isNavLink:t,to:n,href:u,activeClassName:d,isActive:h,"data-noBrokenLinkCheck":m,autoAddBaseUrl:g=!0,...f}=e;var b;const{siteConfig:{trailingSlash:k,baseUrl:v}}=(0,r.Z)(),{withBaseUrl:y}=(0,p.C)(),w=(0,a.useContext)(s),j=n||u,O=(0,i.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let T=void 0!==Z?(E=Z,g&&(e=>e.startsWith("/"))(E)?y(E):E):void 0;var E;T&&O&&(T=(0,c.applyTrailingSlash)(T,{trailingSlash:k,baseUrl:v}));const N=(0,a.useRef)(!1),P=t?o.OL:o.rU,W=l.Z.canUseIntersectionObserver;let D;(0,a.useEffect)((()=>(!W&&O&&null!=T&&window.docusaurus.prefetch(T),()=>{W&&D&&D.disconnect()})),[T,W,O]);const S=null!==(b=null==T?void 0:T.startsWith("#"))&&void 0!==b&&b,A=!T||!O||S;return T&&O&&!S&&!m&&w.collectLink(T),A?a.createElement("a",{href:T,...j&&!O&&{target:"_blank",rel:"noopener noreferrer"},...f}):a.createElement(P,{...f,onMouseEnter:()=>{N.current||null==T||(window.docusaurus.preload(T),N.current=!0)},innerRef:e=>{var t,n;W&&e&&O&&(t=e,n=()=>{null!=T&&window.docusaurus.prefetch(T)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:T||"",...t&&{isActive:h,activeClassName:d}})}},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{Z:()=>o,b:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>i});var a=n(2263),o=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:r=!1,absolute:i=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,a)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=r();return n(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),r="/"===o||o===a?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(o,r)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(2908),i=n(589);const l={title:"How to win a hackathon. Brief manual.",authors:["maksym36ua"],tags:["wasp","gitpod","hackathon"]},s=void 0,p={permalink:"/blog/2022/06/01/gitpod-hackathon-guide",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-06-01-gitpod-hackathon-guide.md",source:"@site/blog/2022-06-01-gitpod-hackathon-guide.md",title:"How to win a hackathon. Brief manual.",description:"Wasp app deploye to Gitpod",date:"2022-06-01T00:00:00.000Z",formattedDate:"June 1, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"gitpod",permalink:"/blog/tags/gitpod"},{label:"hackathon",permalink:"/blog/tags/hackathon"}],readingTime:3.81,truncated:!0,authors:[{name:"Maksym Khamrovskyi",title:"DevRel @ Wasp",key:"maksym36ua"}],prevItem:{title:"Feature Release Announcement - Wasp Jobs",permalink:"/blog/2022/06/15/jobs-feature-announcement"},nextItem:{title:"Meet the team - Filip Sodi\u0107, Founding Engineer",permalink:"/blog/2022/05/31/filip-intro"}},c={authorsImageUrls:[void 0]},u=[{value:"Intro:",id:"intro",children:[]},{value:"Dev environment setup:",id:"dev-environment-setup",children:[]},{value:"Building project backbone:",id:"building-project-backbone",children:[]},{value:"To wrap up:",id:"to-wrap-up",children:[]}],d={toc:u};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wasp app deploye to Gitpod",src:n(468).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"All good thoughts and ideas mean nothing without the proper tools to achieve them."'),(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},"Jason Statham"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR:")," Wasp allows you to build and deploy a full-stack JS web app with a single config file. ",(0,o.kt)("a",{parentName:"p",href:"https://gitpod.io/"},"Gitpod")," spins up fresh, automated developer environments in the cloud, in seconds. A perfect tandem to win a hackathon and enjoy free pizza even before other teams even started to set up their coding env and realized they need to update their node version. "),(0,o.kt)(i.ZP,{mdxType:"WaspIntro"}),(0,o.kt)(r.Z,{mdxType:"InBlogCta"}),(0,o.kt)("h2",{id:"intro"},"Intro:"),(0,o.kt)("p",null,"Usually, every hackathon starts from similar activities:",(0,o.kt)("br",null),"\n1) ",(0,o.kt)("strong",{parentName:"p"},"setting up a local dev environment"),", especially if all the team members use different operating systems. There are always issues with the SDK/packages/compiler, etc.",(0,o.kt)("br",null),"\n2) ",(0,o.kt)("strong",{parentName:"p"},"building project backbone")," (folder structure, basic services, CRUD APIs, and so on)."),(0,o.kt)("p",null,"Both of them are time-consuming, boring, and cause issues."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dealing with routine might be frustrating",src:n(4565).Z})),(0,o.kt)("p",null,"Thankfully, those issues can be avoided! Gitpod allows you to spin up a clean, already pre-set dev environment. And Wasp enables you to build a full-stack JS web app with a single config file (alongside your React and Node.js code). But first things first."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pennywise luring into his openspace",src:n(3684).Z})),(0,o.kt)("h2",{id:"dev-environment-setup"},"Dev environment setup:"),(0,o.kt)("p",null,"Gitpod spins up a bespoke dev environment in the cloud for any git branch (once you configured it for your project), on-demand. So you can start coding right away. Build, debug, commit and push your code in seconds, without any local SDK issues. After you\u2019ve finished \u2013 you can host your app after a couple of clicks and share the project with your teammate. You can even make changes to the same project simultaneously, leveraging a pair programming approach. "),(0,o.kt)("p",null,"Since Gitpod is a cloud-based workspace \u2013 spinning up a new application takes a couple of clicks. "),(0,o.kt)("p",null,"1) Fork ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gitpod-io/template-wasp"},"https://github.com/gitpod-io/template-wasp")," and give it a meaningful name, e.g. \u201cMy Awesome Recipes App\u201d -> this is now a repo for your new web app.",(0,o.kt)("br",null),"\n2) In your newly created repo, check the Readme and click the \u201cOpen in Gitpod\u201d button",(0,o.kt)("br",null),"\n3) Login via Github",(0,o.kt)("br",null),"\n4) Allow pop-ups",(0,o.kt)("br",null),"\n5) That\u2019s it! Enjoy your fresh cloud-based dev environment!",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pennywise luring to take part in hackathon",src:n(8449).Z})),(0,o.kt)("p",null,"An optional thing might be enabling the \u201cShare\u201d option to make the app accessible from the external internet. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to share a workspace",src:n(7440).Z})),(0,o.kt)("p",null,"You can pick up one of the following IDE\u2019s, switch between light/dark themes and you can even install all your favorite extensions. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gitpod IDE types",src:n(2825).Z})),(0,o.kt)("p",null,"So, eventually, the workflow can look like this: someone from the team forks the template repo and shares it with others. Teammates open this repo in Gitpod, creating their own dev branches. "),(0,o.kt)("p",null,"Voila! \ud83e\udd73"),(0,o.kt)("p",null,"The whole team is ready to code in a matter of seconds. After the team is done with the development, someone can pull all the changes, share the project, and present it to the judges. "),(0,o.kt)("p",null,"No need to fix local issues, ensure the Node version is aligned, or configure the deployment pipeline for DigitalOcean. Gitpod does all development preparations. The only thing the team has to do \u2013 is to implement the idea ASAP. And here Wasp comes into play!"),(0,o.kt)("h2",{id:"building-project-backbone"},"Building project backbone:"),(0,o.kt)("p",null,"Ok, we\u2019ve successfully set up a shared dev environment. It\u2019s time to create a production-ready web app with just a few lines of code. Based on your needs \u2013 you can declare separate pages, routes, database models, etc. - it\u2019s super easy and intuitive! "),(0,o.kt)("p",null,"The ideal case would be to:",(0,o.kt)("br",null),"\n1) Check out the language overview: ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/language/overview"},"https://wasp-lang.dev/docs/language/overview")," ",(0,o.kt)("br",null),"\n2) Follow a 20-minutes tutorial on how to build a To-Do app with Wasp: ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/tutorials/todo-app"},"https://wasp-lang.dev/docs/tutorials/todo-app")," ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"It may seem a bit inconvenient: why spend time on learning, when you already can start building something meaningful? The short answer is: time-saving. Wasp\u2019s main point is to set you free from building time-consuming boilerplate. So even if you\u2019ll spend half of an hour learning the basics \u2013  you\u2019ll still be able to outrun other hackathon participants. While they will be copy-pasting CRUD API methods \u2013 you\u2019ll be building business logic."),(0,o.kt)("p",null,"And 20 minutes is time well spent to become more productive. Setting up each team member's environment locally likely takes more than 20 minutes if you don't use Gitpod."),(0,o.kt)("h2",{id:"to-wrap-up"},"To wrap up:"),(0,o.kt)("p",null,"We think that Wasp + Gitpod is a powerful toolset for speedrunning any hackathon. No matter how complex or ambitious your project is. If it\u2019s built with Node and React \u2013 nothing can stop you from winning. Good luck, have fun, and enjoy that pizza \ud83c\udf55!"))}h.isMDXComponent=!0},589:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}i.isMDXComponent=!0},4565:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/I-quit-76ab96fc267251d26680dc4cc951bc92.gif"},468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gitpod-hackathon-preview-cff1d9f6eb48c32d5736ebd859b1c63f.png"},2825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gitpod-ide-b80c25e069cbb361cdf86c10ffdbf6ff.jpg"},8449:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gitpod-roadmap-783e3cd78a719cb0ae646d6adf6be554.png"},7440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gitpod-share-d74408863ed341712358ab6aea434a53.jpg"},3684:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hackathon-pennywise-066278ed7fc85a89844a02906013d8f6.jpg"}}]);