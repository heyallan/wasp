"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[18],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8610:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(4996);const r=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{alt:e.alt,src:(0,o.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption"},e.caption))))},2908:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),o=a(6742);a(4996);const r=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),s=()=>n.createElement("p",null,n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),n.createElement(r,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(r,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},6742:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),o=a(3727),r=a(2263),s=a(3919),i=a(412);const l=(0,n.createContext)({collectLink:()=>{}});var u=a(4996),c=a(8780);const p=function(e){let{isNavLink:t,to:a,href:p,activeClassName:d,isActive:h,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...g}=e;var b;const{siteConfig:{trailingSlash:w,baseUrl:y}}=(0,r.Z)(),{withBaseUrl:k}=(0,u.C)(),v=(0,n.useContext)(l),j=a||p,x=(0,s.Z)(j),O=null==j?void 0:j.replace("pathname://","");let E=void 0!==O?(S=O,f&&(e=>e.startsWith("/"))(S)?k(S):S):void 0;var S;E&&x&&(E=(0,c.applyTrailingSlash)(E,{trailingSlash:w,baseUrl:y}));const W=(0,n.useRef)(!1),P=t?o.OL:o.rU,T=i.Z.canUseIntersectionObserver;let Z;(0,n.useEffect)((()=>(!T&&x&&null!=E&&window.docusaurus.prefetch(E),()=>{T&&Z&&Z.disconnect()})),[E,T,x]);const C=null!==(b=null==E?void 0:E.startsWith("#"))&&void 0!==b&&b,N=!E||!x||C;return E&&x&&!C&&!m&&v.collectLink(E),N?n.createElement("a",{href:E,...j&&!x&&{target:"_blank",rel:"noopener noreferrer"},...g}):n.createElement(P,{...g,onMouseEnter:()=>{W.current||null==E||(window.docusaurus.preload(E),W.current=!0)},innerRef:e=>{var t,a;T&&e&&x&&(t=e,a=()=>{null!=E&&window.docusaurus.prefetch(E)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),a())}))})),Z.observe(t))},to:E||"",...t&&{isActive:h,activeClassName:d}})}},3919:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}a.d(t,{Z:()=>o,b:()=>n})},4996:(e,t,a)=>{a.d(t,{C:()=>r,Z:()=>s});var n=a(2263),o=a(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(e,t,a,n){let{forcePrependBaseUrl:r=!1,absolute:s=!1}=void 0===n?{}:n;if(!a)return a;if(a.startsWith("#"))return a;if((0,o.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+i:i}(t,e,a,n)}}function s(e,t){void 0===t&&(t={});const{withBaseUrl:a}=r();return a(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[o]=e.split(/[#?]/),r="/"===o||o===n?o:(s=o,a?function(e){return e.endsWith("/")?e:e+"/"}(s):function(e){return e.endsWith("/")?e.slice(0,-1):e}(s));var s;return e.replace(o,r)}},8780:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var r=a(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(r).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},8238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var n=a(7462),o=(a(7294),a(3905)),r=(a(6742),a(4996)),s=a(2908),i=a(589),l=a(8610);const u={title:"Feature Release Announcement - Wasp Jobs",authors:["shayneczyzewski"],image:"/img/jobs-snippet2.png",tags:["webdev","wasp","feature","jobs"]},c=void 0,p={permalink:"/blog/2022/06/15/jobs-feature-announcement",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-06-15-jobs-feature-announcement.md",source:"@site/blog/2022-06-15-jobs-feature-announcement.md",title:"Feature Release Announcement - Wasp Jobs",description:'<img alt="You get a job!"',date:"2022-06-15T00:00:00.000Z",formattedDate:"June 15, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"feature",permalink:"/blog/tags/feature"},{label:"jobs",permalink:"/blog/tags/jobs"}],readingTime:5.025,truncated:!0,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski",imageURL:"https://github.com/shayneczyzewski.png",key:"shayneczyzewski"}],nextItem:{title:"How to win a hackathon. Brief manual.",permalink:"/blog/2022/06/01/gitpod-hackathon-guide"}},d={authorsImageUrls:[void 0]},h=[{value:"<strong>Storytime</strong>",id:"storytime",children:[]},{value:"Most jobs have a boss. Our first job executor is a... pg-boss. \ud83d\ude05",id:"most-jobs-have-a-boss-our-first-job-executor-is-a-pg-boss-",children:[]},{value:"Real Example - Updating Waspleau",id:"real-example---updating-waspleau",children:[]},{value:"Looks neat! What\u2019s next?",id:"looks-neat-whats-next",children:[]}],m={toc:h};function f(e){let{components:t,...u}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"You get a job!",src:(0,r.Z)("img/jobs-oprah.gif"),width:"300px"})),(0,o.kt)(i.ZP,{mdxType:"WaspIntro"}),(0,o.kt)(s.Z,{mdxType:"InBlogCta"}),(0,o.kt)("h2",{id:"storytime"},(0,o.kt)("strong",{parentName:"h2"},"Storytime")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Storytime",src:(0,r.Z)("img/jobs-storytime.gif"),width:"300px"})),(0,o.kt)("p",null,"Imagine you are working on the next unicorn SaaS web app and need to send a user an email, manipulate an uploaded image via an external API call, or recalculate some internal metrics every night. (Or, maybe you\u2019re doing some fancy blockchain thing for that frothy investment multiple; :D whatever it is, just envision an operation that may take a significant amount of time and/or fail.) How would you implement this?"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Spinning!",src:(0,r.Z)("img/jobs-spinner.gif"),width:"30px"})),(0,o.kt)("p",null,"You wouldn\u2019t want the server to delay sending its HTTP response until those are done (unless you are one of those people who love seeing the Mac spinning icon), so you'll need something out-of-band from the normal request-response flow. Even in an event-loop-based system like Node.js, just calling an async function isn't ideal since you will need to handle failures, retries, and throttling, amongst other concerns. And sometimes we need to schedule tasks to run in the future, or repeatedly, so we need a completely different toolset."),(0,o.kt)("p",null,"The typical solution here is to use a job queue of some kind. They are not impossible to set up, of course, but there is a fair amount of boilerplate involved, some operational expertise/overhead required, and moving from one system to another when you outgrow it is usually a challenge. These are the exact areas where we feel Wasp can provide real value, so we are happy to introduce Wasp Jobs to help out with this!"),(0,o.kt)(l.Z,{alt:"@ext/workers/github.js",source:"img/jobs-snippet1.png",caption:"@ext/workers/github.js",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"Wasp allows you to write a regular async JavaScript function (like the one above that gathers GitHub metrics and stores them in the DB) and have it run within the context of a job queue system, which we call an executor. You can manually submit work to be done on the server, or specify a cron schedule to have your job automatically invoked. And, best of all, as we add more job executors in the future, you can change where it runs on a single line in your .wasp file."),(0,o.kt)("h2",{id:"most-jobs-have-a-boss-our-first-job-executor-is-a-pg-boss-"},"Most jobs have a boss. Our first job executor is a... pg-boss. \ud83d\ude05"),(0,o.kt)("p",{align:"center"},(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Eeek",src:(0,r.Z)("img/jobs-eyes.gif")}),(0,o.kt)("figcaption",null,"Me trying to lay off the job-related puns. Ok, ok, I\u2019ll quit. Ahhh!"))),(0,o.kt)("p",null,"In my prior life as a Ruby on Rails developer, the decision of how to implement jobs was pretty simple. You had Active Job at your disposal, and for backends, you would use something like Sidekiq or Delayed Job. In a similarly paved path, Python developers would have likely looked first to Celery."),(0,o.kt)("p",null,"In the JavaScript world, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull"},"Bull")," is quite popular these days. However, we decided to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss"},"pg-boss"),", as it too provides persistence, delayed jobs, and schedules (plus many other features). But critically, pg-boss uses PostgreSQL instead of Redis (like Bull) for storage and coordination, and this was important since we did not want to introduce any new infrastructure dependencies to our existing production stack."),(0,o.kt)("p",null,"But isn\u2019t a database as a queue an anti-pattern, you may ask? Well, historically I\u2019d probably say yes. However, PostgreSQL 9.5 added SKIP LOCKED, which it specifically mentions can aid in avoiding lock contention with multiple consumer queue-like workloads [",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.5/sql-select.html#SQL-FOR-UPDATE-SHARE"},"https://www.postgresql.org/docs/9.5/sql-select.html#SQL-FOR-UPDATE-SHARE"),"]. So for the low-volume background job workloads that many apps have, we feel using a database as a queue is a great compromise and starting point for many users from a benefit vs. complexity perspective."),(0,o.kt)("p",null,"However, we will also continue to expand the number of job execution runtimes we support. Let us know in ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," what you\u2019d like to see next!"),(0,o.kt)("h2",{id:"real-example---updating-waspleau"},"Real Example - Updating Waspleau"),(0,o.kt)("p",null,"If you are a regular reader of this blog (thank you, you deserve a raise! \ud83d\ude0a), you may recall we created an example app of a metrics dashboard called ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/blog/2022/01/27/waspleau"},"Waspleau")," that used workers in the background to make periodic HTTP calls for data. In that example, we didn\u2019t yet have access to recurring jobs in Wasp, so we used Bull for scheduled jobs instead. To set up our queue-related logic we had to have this huge ",(0,o.kt)("inlineCode",{parentName:"p"},"setupFn")," wiring it all up; but now, we can remove all that code and simply use jobs instead! Here is what the new DSL looks like:"),(0,o.kt)(l.Z,{alt:"@ext/main.wasp",source:"img/jobs-snippet2.png",caption:"@ext/main.wasp",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"And here is an example of how you can reference and invoke jobs on the server. ",(0,o.kt)("em",{parentName:"p"},"Note: We did not even need to do this step since jobs with a schedule are automatically configured to run at the desired time.")),(0,o.kt)(l.Z,{alt:"@ext/serverSetup.js",source:"img/jobs-snippet3.png",caption:"@ext/serverSetup.js",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"And voila, it is really that simple. Wasp takes care of setting up pg-boss and hooking up all your job callbacks, leaving you to focus on what matters- your own code. Here is a visual of what is happening behind the scenes:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:a(2884).Z})),(0,o.kt)("p",null,"For those interested, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/commit/1721371fc73f4485ca0046aafea2ee3fc0be41cf#diff-e158328e137176b595ad01641ba68faf82dbb88ccc5be3597009bb576fcd6505"},"full diff here")," and weep with joy for all those boilerplate lines of code we fired! We were also able to ax Redis from our infrastructure!"),(0,o.kt)("h2",{id:"looks-neat-whats-next"},"Looks neat! What\u2019s next?"),(0,o.kt)("p",null,"First off, please check out our docs for Jobs: ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/language/features#jobs"},"https://wasp-lang.dev/docs/language/features#jobs")," There, you will find all the info you need to start using them. Next, if you want to see the code for this example in full, you can find it here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/examples/waspleau"},"https://github.com/wasp-lang/wasp/tree/main/examples/waspleau")),(0,o.kt)("p",null,"In the future, we plan to add more job executors, including support for polyglot workers (imagine running your Python ML function from Wasp!). We are also open to any other ideas on how jobs can become more useful to you (like client-side access to server-side jobs, or client-side jobs using similar abstractions?). Let us know what you think!"),(0,o.kt)("hr",null),(0,o.kt)("small",null,"Special thanks to Tim Jones for his hard work building an amazing OSS library, ",(0,o.kt)("a",{href:"https://github.com/timgit/pg-boss",target:"_blank"},"pg-boss"),", and for reviewing this post. Please consider supporting that project if it solves your needs!"))}f.isMDXComponent=!0},589:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}s.isMDXComponent=!0},2884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jobs-arch-3ebc08ebc717194dfac7e67fca5b8a7d.png"}}]);