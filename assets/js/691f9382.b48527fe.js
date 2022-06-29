"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8610:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(4996);const s=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{alt:e.alt,src:(0,r.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption"},e.caption))))},2908:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6742);a(4996);const s=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),o=()=>n.createElement("p",null,n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),n.createElement(s,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(s,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},6742:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(3727),s=a(2263),o=a(3919),i=a(412);const l=(0,n.createContext)({collectLink:()=>{}});var u=a(4996),p=a(8780);const c=function(e){let{isNavLink:t,to:a,href:c,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":h,autoAddBaseUrl:g=!0,...f}=e;var b;const{siteConfig:{trailingSlash:w,baseUrl:k}}=(0,s.Z)(),{withBaseUrl:y}=(0,u.C)(),v=(0,n.useContext)(l),j=a||c,W=(0,o.Z)(j),x=null==j?void 0:j.replace("pathname://","");let N=void 0!==x?(O=x,g&&(e=>e.startsWith("/"))(O)?y(O):O):void 0;var O;N&&W&&(N=(0,p.applyTrailingSlash)(N,{trailingSlash:w,baseUrl:k}));const S=(0,n.useRef)(!1),E=t?r.OL:r.rU,D=i.Z.canUseIntersectionObserver;let T;(0,n.useEffect)((()=>(!D&&W&&null!=N&&window.docusaurus.prefetch(N),()=>{D&&T&&T.disconnect()})),[N,D,W]);const Z=null!==(b=null==N?void 0:N.startsWith("#"))&&void 0!==b&&b,P=!N||!W||Z;return N&&W&&!Z&&!h&&v.collectLink(N),P?n.createElement("a",{href:N,...j&&!W&&{target:"_blank",rel:"noopener noreferrer"},...f}):n.createElement(E,{...f,onMouseEnter:()=>{S.current||null==N||(window.docusaurus.preload(N),S.current=!0)},innerRef:e=>{var t,a;D&&e&&W&&(t=e,a=()=>{null!=N&&window.docusaurus.prefetch(N)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),a())}))})),T.observe(t))},to:N||"",...t&&{isActive:m,activeClassName:d}})}},3919:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{Z:()=>r,b:()=>n})},4996:(e,t,a)=>{a.d(t,{C:()=>s,Z:()=>o});var n=a(2263),r=a(3919);function s(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(e,t,a,n){let{forcePrependBaseUrl:s=!1,absolute:o=!1}=void 0===n?{}:n;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(s)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+i:i}(t,e,a,n)}}function o(e,t){void 0===t&&(t={});const{withBaseUrl:a}=s();return a(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[r]=e.split(/[#?]/),s="/"===r||r===n?r:(o=r,a?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,s)}},8780:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var s=a(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(s).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},2656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),s=a(6742),o=(a(4996),a(2908)),i=a(589);a(8610);const l={title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",authors:["shayneczyzewski"],image:"/img/waspleau-screenshot.png",tags:["webdev","wasp"]},u=void 0,p={permalink:"/blog/2022/01/27/waspleau",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-01-27-waspleau.md",source:"@site/blog/2022-01-27-waspleau.md",title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",description:"Hello, Waspleau",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:4.55,truncated:!0,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski",imageURL:"https://github.com/shayneczyzewski.png",key:"shayneczyzewski"}],prevItem:{title:"Meet the team - Filip Sodi\u0107, Founding Engineer",permalink:"/blog/2022/05/31/filip-intro"},nextItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"}},c={authorsImageUrls:[void 0]},d=[{value:"Hello, Waspleau!",id:"hello-waspleau",children:[]},{value:"\u201cShow me the code\u201d",id:"show-me-the-code",children:[{value:"<code>server.setupFn</code> for queue setup",id:"serversetupfn-for-queue-setup",children:[]},{value:"Abstracting workers and job processing",id:"abstracting-workers-and-job-processing",children:[]},{value:"Server \u2192 client",id:"server--client",children:[]}]},{value:"Congratulations, let\u2019s dance!",id:"congratulations-lets-dance",children:[]},{value:"2022 is going to be exciting \ud83d\ude80",id:"2022-is-going-to-be-exciting-",children:[]}],m={toc:d};function h(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hello, Waspleau",src:a(7869).Z})),(0,r.kt)("p",{align:"center"},(0,r.kt)(s.Z,{to:"https://waspleau.netlify.app/",mdxType:"Link"},"See Waspleau here!")," | ",(0,r.kt)(s.Z,{to:"https://github.com/wasp-lang/wasp/blob/main/examples/waspleau",mdxType:"Link"},"See the code")),(0,r.kt)("p",null,"We've built a dashboard powered by a job queue using Wasp!"),(0,r.kt)(i.ZP,{mdxType:"WaspIntro"}),(0,r.kt)(o.Z,{mdxType:"InBlogCta"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Measure all the metrics!",src:a(9769).Z})),(0,r.kt)("h2",{id:"hello-waspleau"},"Hello, Waspleau!"),(0,r.kt)("p",null,"Let\u2019s face it - metrics are all around us. Wouldn\u2019t it be great if there was a quick and easy way to build a nice-looking metrics dashboard from data pulled in by HTTP calls to many different sources, cache the data in-memory, and periodically update it via background jobs? Why yes, yes it would... so we made an example Wasp app called Waspleau that does just that!"),(0,r.kt)("p",null,"Here is what it looks like live: ",(0,r.kt)("a",{parentName:"p",href:"https://waspleau.netlify.app/"},"https://waspleau.netlify.app/")," There is also a screenshot at the top of this post for those who refrain from clicking on any unknown web links for fear of being ",(0,r.kt)("strong",{parentName:"p"},"Rickrolled"),". Respect."),(0,r.kt)("h2",{id:"show-me-the-code"},"\u201cShow me the code\u201d"),(0,r.kt)("p",null,"So, what do we need to get started? First, we need a way to schedule and run jobs; for this, we decided to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull"},"Bull"),". Ok, let\u2019s wire it up. This should be easy, right? We can add external NPM dependencies in our Wasp files like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'app waspleau {\n  title: "Waspleau",\n\n  dependencies: [\n    ("bull", "4.1.1"),\n    ("axios", "^0.21.1")\n  ]\n}\n')),(0,r.kt)("p",null,"But where do we declare our queue and processing callback functions in Wasp? Uh oh..."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sad",src:a(3631).Z})),(0,r.kt)("h3",{id:"serversetupfn-for-queue-setup"},(0,r.kt)("inlineCode",{parentName:"h3"},"server.setupFn")," for queue setup"),(0,r.kt)("p",null,"Thankfully, Waspleau can leverage a powerful and flexible ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/language/basic-elements#setupfn"},"hook supplied by Wasp")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"server.setupFn"),". This declares a JavaScript function that will be executed on server start. Yahoo! This means we can do things like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'app waspleau {\n  ...\n\n  server: {\n    setupFn: import serverSetup from "@ext/serverSetup.js"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="serverSetup.js"',title:'"serverSetup.js"'},"import Queue from 'bull'\n\nconst queue = new Queue('waspleau', process.env.REDIS_URL || 'redis://127.0.0.1:6379',\n  { defaultJobOptions: { removeOnComplete: true } }\n)\n\nqueue.process('*', async (job) => { ... })\n\nexport default async () => {\n  // To initially populate the queue, we can do:\n  await queue.add({ ... }) // first run, one-off job\n  await queue.add({ ... }, { repeat: { cron: '*/10 * * * *' } }) // recurring job\n}\n")),(0,r.kt)("h3",{id:"abstracting-workers-and-job-processing"},"Abstracting workers and job processing"),(0,r.kt)("p",null,"Awesome, we can now enqueue and process background jobs, but how can we make it easy to create many different kinds of jobs and schedule them to run at different intervals? For Waspleau, we created our own type of worker object convention to help standardize and simplify adding more:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="workers/template.js"',title:'"workers/template.js"'},"const workerFunction = async (opts) => {\n  return [\n    { name: 'Metric 1 name', value: 'foo', updatedAt: ... },\n    { name: 'Metric 2 name', value: 'bar', updatedAt: ... },\n  ]\n}\n\nexport const workerTemplate = { name: 'Job Name', fn: workerFunction, schedule: '*/10 * * * *' }\n")),(0,r.kt)("p",null,"With this ",(0,r.kt)("inlineCode",{parentName:"p"},"workerFunction")," setup, we can return one or more metrics per worker type. Waspleau can easily use any module that exports this shape. Here is a real example from the demo that makes HTTP calls to GitHub\u2019s API with Axios:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="workers/github.js"',title:'"workers/github.js"'},"import axios from 'axios'\n\nconst workerFunction = async (opts) => {\n  console.log('github.js workerFunction')\n\n  const now = Date.now()\n\n  try {\n    const response = await axios.get('https://api.github.com/repos/wasp-lang/wasp')\n\n    return [\n      { name: 'Wasp GitHub Stars', value: response.data.stargazers_count, updatedAt: now },\n      { name: 'Wasp GitHub Language', value: response.data.language, updatedAt: now },\n      { name: 'Wasp GitHub Forks', value: response.data.forks, updatedAt: now },\n      { name: 'Wasp GitHub Open Issues', value: response.data.open_issues, updatedAt: now },\n    ]\n  } catch (error) {\n    console.error(error)\n    return []\n  }\n}\n\nexport const githubWorker = { name: 'GitHub API', fn: workerFunction, schedule: '*/10 * * * *' }\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Please see the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/wasp-lang/wasp/blob/main/examples/waspleau/ext/serverSetup.js"},"actual serverSetup.js file")," for how we use this abstraction in practice.")),(0,r.kt)("h3",{id:"server--client"},"Server \u2192 client"),(0,r.kt)("p",null,"We now have jobs running and data updating at regular intervals, nice, but we still need a way to send that data down the wire. Here, we expose the in-memory data from our ",(0,r.kt)("inlineCode",{parentName:"p"},"server.setupFn")," module so our queries can also use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'...\n\nquery dashboard {\n  fn: import { refreshDashboardData } from "@ext/dashboard.js"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dashboard.js"',title:'"dashboard.js"'},"import { getDashboardData } from './serverSetup.js'\n\nexport const refreshDashboardData = async (_args, _context) => {\n  return getDashboardData()\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="serverSetup.js"',title:'"serverSetup.js"'},"...\n\nconst dashboardData = {} // This is updated in the queue process callback\nexport const getDashboardData = () => Object.values(dashboardData).flat()\n")),(0,r.kt)("p",null,"From there, we can request it on the frontend in React components as usual and also set a one-minute client-side refetch interval just for good measure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="MainPage.js"',title:'"MainPage.js"'},"...\n\nconst { data: dashboardData, isFetching, error } = useQuery(refreshDashboardData, null, { refetchInterval: 60 * 1000 })\n\n...\n")),(0,r.kt)("h2",{id:"congratulations-lets-dance"},"Congratulations, let\u2019s dance!"),(0,r.kt)("p",null,"Whew, we did it! If you\u2019d like to deploy your own customized version of this dashboard, please clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"our repo")," and check out the Waspleau example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/main/examples/waspleau/README.md"},"README.md")," for tips on getting started. You can also ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs"},"check out our docs")," to dive deeper into anything."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rickroll",src:a(95).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Still got ya! :D")),(0,r.kt)("h2",{id:"2022-is-going-to-be-exciting-"},"2022 is going to be exciting \ud83d\ude80"),(0,r.kt)("p",null,"While this functionality currently exists outside of Wasp, keep an eye on our roadmap as we head toward 1.0. We will be busy adding lots of great features to our Wasp DSL in the coming months that will supercharge your web development experience! Thanks for reading, and please feel free to connect with us in ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," about using Wasp on your next project."))}h.isMDXComponent=!0},589:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(7462),r=(a(7294),a(3905));const s={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}o.isMDXComponent=!0},9769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-metrics-30675d6a2ecac4e8eff66668bc5442e8.png"},95:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-rickroll-646268d60261b4da70effe5f77737b24.gif"},3631:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-sad-afbc180b95ee3e6ddaa050fa1d8e8ca0.png"},7869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-screenshot-4d9be945ab6d5e4f5d6692baa133dff0.png"}}]);