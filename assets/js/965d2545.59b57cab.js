(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3069],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2908:function(e,t,n){"use strict";var a=n(7294),r=n(6742),o=n(4996),i=function(){return a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")};t.Z=function(){return a.createElement("p",null,a.createElement(r.Z,{className:"in-blog-cta--link",to:(0,o.Z)("/docs")},"We are in Alpha (try it out)!"),a.createElement(i,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(i,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(9756),r=n(7294),o=n(3727),i=n(2263),s=n(3919),l=n(412),u=(0,r.createContext)({collectLink:function(){}}),c=n(4996),d=n(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var h=function(e){var t,n,h=e.isNavLink,f=e.to,m=e.href,g=e.activeClassName,b=e.isActive,w=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,k=(0,a.Z)(e,p),C=(0,i.Z)().siteConfig,W=C.trailingSlash,O=C.baseUrl,j=(0,c.C)().withBaseUrl,N=(0,r.useContext)(u),T=f||m,x=(0,s.Z)(T),E=null==T?void 0:T.replace("pathname://",""),Z=void 0!==E?(n=E,v&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;Z&&x&&(Z=(0,d.applyTrailingSlash)(Z,{trailingSlash:W,baseUrl:O}));var P,S=(0,r.useRef)(!1),M=h?o.OL:o.rU,A=l.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!A&&x&&null!=Z&&window.docusaurus.prefetch(Z),function(){A&&P&&P.disconnect()}}),[Z,A,x]);var L=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,B=!Z||!x||L;return Z&&x&&!L&&!w&&N.collectLink(Z),B?r.createElement("a",Object.assign({href:Z},T&&!x&&{target:"_blank",rel:"noopener noreferrer"},k)):r.createElement(M,Object.assign({},k,{onMouseEnter:function(){S.current||null==Z||(window.docusaurus.preload(Z),S.current=!0)},innerRef:function(e){var t,n;A&&e&&x&&(t=e,n=function(){null!=Z&&window.docusaurus.prefetch(Z)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))}))).observe(t))},to:Z||""},h&&{isActive:b,activeClassName:g}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,o=e.split(/[#?]/)[0],i="/"===o||o===a?o:(r=o,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(o,i)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(o).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3594:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return h},assets:function(){return f},toc:function(){return m},default:function(){return b}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(6742),s=n(4996),l=n(2908),u=n(589),c=["components"],d={title:"Following YC, Wasp raised $1.5M Seed Round led by Lunar Ventures and HV Capital",author:"Matija Sosic",author_title:"CEO & Co-founder @ Wasp",author_url:"https://github.com/matijasos",tags:["startup","wasp"]},p=void 0,h={permalink:"/blog/2021/11/21/seed-round",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/blog/blog/2021-11-21-seed-round.md",source:"@site/blog/2021-11-21-seed-round.md",title:"Following YC, Wasp raised $1.5M Seed Round led by Lunar Ventures and HV Capital",description:"After graduating from Y Combinator's Winter 2021 Batch, we are super excited to announce that Wasp raised $1.5m in our first funding round! The round is led by Lunar Ventures and joined by HV Capital. Also see it in TechCrunch.",date:"2021-11-21T00:00:00.000Z",formattedDate:"November 21, 2021",tags:[{label:"startup",permalink:"/blog/tags/startup"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:4.485,truncated:!1,authors:[{name:"Matija Sosic",title:"CEO & Co-founder @ Wasp",url:"https://github.com/matijasos"}],prevItem:{title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",permalink:"/blog/2021/11/22/fundraising-learnings"},nextItem:{title:"Tutorial: `forall` in Haskell",permalink:"/blog/2021/09/01/haskell-forall-tutorial"}},f={authorsImageUrls:[void 0]},m=[{value:"Why did we raise funding?",id:"why-did-we-raise-funding",children:[]},{value:"Where are we today?",id:"where-are-we-today",children:[]},{value:"The team",id:"the-team",children:[]},{value:"What comes next?",id:"what-comes-next",children:[]}],g={toc:m};function b(e){var t=e.components,d=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.ZP,{mdxType:"WaspIntro"}),(0,o.kt)(l.Z,{mdxType:"InBlogCta"}),(0,o.kt)("p",null,"After graduating from Y Combinator's Winter 2021 Batch, we are super excited to announce that Wasp raised $1.5m in our first funding round! The round is led by Lunar Ventures and joined by HV Capital. Also ",(0,o.kt)("a",{parentName:"p",href:"https://techcrunch.com/2021/10/04/yc-grads-wasp-land-1-5m-seed-to-help-developers-build-web-apps-faster/"},"see it in TechCrunch"),"."),(0,o.kt)("p",null,"The best thing about it is that the majority of our investors are either experienced engineers themselves (e.g. ex-Facebook, Twitter and Airbnb) or have a strong focus on investing in deep technology and developer companies. They share the vision we have with Wasp, understand and care about the problem we are solving."),(0,o.kt)("p",null,"Besides Lunar and HV Capital, we are thrilled to welcome on board:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"468 Capital (led by Florian Leibert, founder of Mesosphere and ex-Twitter and Airbnb eng.)"),(0,o.kt)("li",{parentName:"ul"},"Charlie Songhurst"),(0,o.kt)("li",{parentName:"ul"},"Tokyo Black"),(0,o.kt)("li",{parentName:"ul"},"Acequia Capital"),(0,o.kt)("li",{parentName:"ul"},"Abstraction Capital"),(0,o.kt)("li",{parentName:"ul"},"Ben Tossell, founder of Makerpad (acq. by Zapier)"),(0,o.kt)("li",{parentName:"ul"},"Muthukrishnan Ramabadran, Senior Software Engineer at Lyft"),(0,o.kt)("li",{parentName:"ul"},"Yun-Fang, ex-Facebook engineer"),(0,o.kt)("li",{parentName:"ul"},"Marcel P. Lima from Heller House"),(0,o.kt)("li",{parentName:"ul"},"Chris Schagen, former CMO on Contentful"),(0,o.kt)("li",{parentName:"ul"},"Rahul Thathoo, Sr. Eng. Manager at Square"),(0,o.kt)("li",{parentName:"ul"},"Preetha Parthasarathy"),(0,o.kt)("li",{parentName:"ul"},"John Kobs")),(0,o.kt)("h2",{id:"why-did-we-raise-funding"},"Why did we raise funding?"),(0,o.kt)("p",null,"At its core, Wasp is an open-source project and we have full intention for it to stay that way. Open-source is one of the most powerful ways to write software and we want to make sure Wasp is freely accessible to every developer."),(0,o.kt)("p",null,"Wasp is a technically innovative and challenging project. Even though we are not building a new general programming language from scratch, there still exists an essential complexity of building a language and all the tooling around it. Wasp offers a lot of abstractions that are being introduced for the first time and there is no clear blueprint to follow, and this is why such an undertaking requires full-time attention and dedication. Hence, we plan on expanding the team with some amazing engineers to accelerate us on our journey."),(0,o.kt)("h2",{id:"where-are-we-today"},"Where are we today?"),(0,o.kt)("p",null,"Today, Wasp is in Alpha. That means there are many features we still have to add and many that are probably going to change. But it also means you can ",(0,o.kt)("a",{parentName:"p",href:"/docs"},"try it out, build a full-stack web app")," and see what it is all about. You can also join ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"our community")," and share your feedback and experience with us - we'd be happy to hear from you!"),(0,o.kt)("p",null,"Since we launched our Alpha several months ago, we got some amazing feedback on ",(0,o.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/wasp-lang-alpha"},"Product Hunt")," and ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=26091956"},"Hacker News"),"."),(0,o.kt)("p",null,"We've also grown a lot and recently passed 1,000 stars on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"our Github repo")," - thank you!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wasp GitHub Stars",src:n(4668).Z})),(0,o.kt)("p",null,"To date, over 250 projects have been created with Wasp in the last couple of months and some were even deployed to production - like ",(0,o.kt)("a",{parentName:"p",href:"https://farnance.netlify.app/"},"Farnance")," that ended up being a hackathon winner! Check out their source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jlaneve/Farnance"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Farnance screenshot",src:n(152).Z})),(0,o.kt)("h2",{id:"the-team"},"The team"),(0,o.kt)("p",null,"Martin and I have been working on Wasp for the last two years and together with our amazing contributors, who made us believe our vision is possible and made it what it is today. Having led development of several complex web apps in the past and continuously switching to the latest stack, we felt the pain and could also clearly see the patterns that we felt were mature and common enough to be worth extracting into a simpler, higher-level language."),(0,o.kt)("p",{align:"center"},(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"The team",src:(0,s.Z)("img/us-at-ycombinator.jpg")}),(0,o.kt)("figcaption",null,"Martin and I during our first YC interview. Read ",(0,o.kt)(i.Z,{to:(0,s.Z)("blog/2021/02/23/journey-to-ycombinator"),mdxType:"Link"},"here")," for more details on our journey to YC!"))),(0,o.kt)("p",null,"In case you couldn't tell from the photo and our identical glasses, we are twins (but not fraternal ones, and I'm a couple of minutes older, which makes me CEO :D)!"),(0,o.kt)("p",null,"We are coming from the background of C++, algorithm competitions and applied algorithms in bioinformatics (Martin built ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/martinsos/edlib"},"edlib"),", his first OSS project - a popular sequence alignment library used by top bioinfo companies like PacBio) and did our internships in Google and Palantir. There we first encountered the modern web stack and went on to lead development of web platforms in fintech and bioinformatics space. We also had a startup previously (",(0,o.kt)("a",{parentName:"p",href:"https://talkbook.co/home"},"TalkBook"),"), where we learned a lot about talking to users and building something that solves a problem they have."),(0,o.kt)("h2",{id:"what-comes-next"},"What comes next?"),(0,o.kt)("p",null,"With the funding secured, we can now fully focus on developing Wasp and the ecosystem around it. We can start planning for more ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/109"},"long-term features")," that we couldn't fully commit to until now, and we can expand our team to move faster and bring more great people on board with new perspectives and enable them to fully employ their knowledge and creativity without any distractions."),(0,o.kt)("p",null,"Our immediate focus is to bring Wasp to Beta and then 1.0 (see our high-level roadmap ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/#what-can-do"},"here"),"), while also building a strong foundation for our open source community. We believe community is the key to the success for Wasp and we will do everything in our power to make sure everybody feels welcome and has a fun and rewarding experience both building apps and contributing to the project. If you want to shape how millions of engineers develop the web apps of tomorrow, join our community and work with us!"),(0,o.kt)("p",null,"Thank you for reading - we can't wait to see what you will build!"),(0,o.kt)(l.Z,{mdxType:"InBlogCta"}))}b.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favourite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook and Lyft.")))}l.isMDXComponent=!0},152:function(e,t,n){"use strict";t.Z=n.p+"assets/images/farnance-screenshot-e918f7ce85f4beab9a19fa369c44a826.png"},4668:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wasp-gh-stars-raise-ad8427810a2af7e670977401a4838b39.png"}}]);