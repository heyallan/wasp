"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{Z:()=>r,b:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>i});var a=n(2263),r=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,a)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},8667:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4996);const i={title:"Task entity"},s=void 0,l={unversionedId:"tutorials/todo-app/task-entity",id:"tutorials/todo-app/task-entity",isDocsHomePage:!1,title:"Task entity",description:"Entities are one of the very central concepts in Wasp, and they mainly play the role of data models.",source:"@site/docs/tutorials/todo-app/task-entity.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/task-entity",permalink:"/docs/tutorials/todo-app/task-entity",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/task-entity.md",tags:[],version:"current",frontMatter:{title:"Task entity"},sidebar:"docs",previous:{title:"Creating new project",permalink:"/docs/tutorials/todo-app/creating-new-project"},next:{title:"Listing tasks",permalink:"/docs/tutorials/todo-app/listing-tasks"}},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#entity"},"Entities")," are one of the very central concepts in Wasp, and they mainly play the role of data models."),(0,r.kt)("p",null,"Since our TodoApp is all about tasks, we will define Task entity in Wasp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},"// ...\n\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n")),(0,r.kt)("p",null,"Since Wasp uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io"},"Prisma")," as a database, definition of an entity comes down to defining a ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model/"},"Prisma model"),", using PSL (Prisma Schema Language) inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"{=psl psl=}")," tags."),(0,r.kt)("p",null,"After this change and before running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp start"),", we first need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"wasp db migrate-dev\n")),(0,r.kt)("p",null,"This instructs Prisma to create a new database schema migration (you'll see a new directory ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations/")," appeared in the root dir of our app) and apply it to the database."),(0,r.kt)("p",null,"To take a look at the database and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," schema, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"wasp db studio\n")),(0,r.kt)("img",{alt:"Todo App - Db studio showing Task schema",src:(0,o.Z)("img/todo-app-db-studio-task-entity.png"),style:{border:"1px solid black"}}),(0,r.kt)("p",null,"Click on the specific entity (we have only ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," for now) and check out its fields! We don't have any data yet in our database, but we are about to change that."))}u.isMDXComponent=!0}}]);