"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1171:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Introduction",sidebar_label:"What is Wasp?",slug:"/about"},o=void 0,s={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"Introduction",description:"Thanks a lot for giving Wasp a try! In the sections below we will give a short overview of what it is, how",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/about.md",tags:[],version:"current",frontMatter:{title:"Introduction",sidebar_label:"What is Wasp?",slug:"/about"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"How it works",permalink:"/docs/how-it-works"}},p=[{value:"What is Wasp?",id:"what-is-wasp",children:[]},{value:"Wasp is a DSL",id:"wasp-is-a-dsl",children:[]},{value:"Wasp integrates with the existing stack",id:"wasp-integrates-with-the-existing-stack",children:[]},{value:"Is Wasp a web app framework?",id:"is-wasp-a-web-app-framework",children:[]},{value:"What it is meant for",id:"what-it-is-meant-for",children:[]},{value:"What it is not meant for",id:"what-it-is-not-meant-for",children:[]}],l={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Thanks a lot for giving Wasp a try! In the sections below we will give a short overview of what it is, how\nit works and get you started."),(0,r.kt)("h2",{id:"what-is-wasp"},"What is Wasp?"),(0,r.kt)("p",null,"Wasp is a programming language for building ",(0,r.kt)("strong",{parentName:"p"},"full-stack web applications"),". That means Wasp takes care of all three\nmajor parts of a web application: ",(0,r.kt)("strong",{parentName:"p"},"client")," (front-end), ",(0,r.kt)("strong",{parentName:"p"},"server")," (back-end) and ",(0,r.kt)("strong",{parentName:"p"},"deployment"),"."),(0,r.kt)("h2",{id:"wasp-is-a-dsl"},"Wasp is a DSL"),(0,r.kt)("p",null,"Wasp is a programming language, but a specific kind: It is a ",(0,r.kt)("em",{parentName:"p"},"Domain Specific Language"),", or shorter ",(0,r.kt)("em",{parentName:"p"},"DSL"),".\nThat means it is not a general-purpose, Turing-complete language (such as e.g. Python or Java) and it is not meant\nto replace them. Instead, it is specialised for a single purpose: ",(0,r.kt)("strong",{parentName:"p"},"building modern web applications"),"."),(0,r.kt)("p",null,"Another examples of ",(0,r.kt)("em",{parentName:"p"},"DSL"),"s that are often used today are e.g. ",(0,r.kt)("em",{parentName:"p"},"SQL")," for databases and ",(0,r.kt)("em",{parentName:"p"},"HTML")," for web page layouts.\nThe main advantage and reason why ",(0,r.kt)("em",{parentName:"p"},"DSL"),"s exist is because they need to do only one task (e.g. database queries)\nso they can do it really well and provide the best possible experience for the developer."),(0,r.kt)("p",null,"The same idea stands behind Wasp - a language that will allow developers to ",(0,r.kt)("strong",{parentName:"p"},"build modern web applications with\n10x less code and less stack-specific knowledge"),"."),(0,r.kt)("h2",{id:"wasp-integrates-with-the-existing-stack"},"Wasp integrates with the existing stack"),(0,r.kt)("p",null,"As mentioned above, Wasp is not trying to do everything at once but rather focuses on the accidental complexity\nwhich arises from connecting all the parts of the stack (client, server, deployment) together."),(0,r.kt)("p",null,"Right now, Wasp supports React and Node and relies on them to define web components and server queries and\nactions."),(0,r.kt)("h2",{id:"is-wasp-a-web-app-framework"},"Is Wasp a web app framework?"),(0,r.kt)("p",null,"Wasp is addressing the same core problems that typical web app frameworks are addressing, and it in big part ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Duck_test"},"looks, swims and quacks")," like a web app framework."),(0,r.kt)("p",null,"On the other hand, Wasp does not match typical expectations of a web app framework: it is not a set of libraries, but instead it is a programming language (DSL)."),(0,r.kt)("h2",{id:"what-it-is-meant-for"},"What it is meant for"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"building full-stack web apps (like e.g. Airbnb or Asana)"),(0,r.kt)("li",{parentName:"ul"},"quickly starting a web app with industry best practices"),(0,r.kt)("li",{parentName:"ul"},"to be used alongside modern web dev stack (currently supported React and Node)")),(0,r.kt)("h2",{id:"what-it-is-not-meant-for"},"What it is not meant for"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"building static/presentational websites"),(0,r.kt)("li",{parentName:"ul"},"to be used as a no-code solution"),(0,r.kt)("li",{parentName:"ul"},"to be a solve-it-all tool in a single language")))}c.isMDXComponent=!0}}]);