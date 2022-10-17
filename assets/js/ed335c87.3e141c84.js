(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4293],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?i.createElement(m,o(o({ref:n},l),{},{components:t})):i.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}t.d(n,{b:function(){return i},Z:function(){return r}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return a},Z:function(){return o}});var i=t(2263),r=t(3919);function a(){var e=(0,i.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,s=void 0!==o&&o,c=a.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(s)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+l:l}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8623:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o=(t(4996),["components"]),s={id:"02-modifying-main-wasp-file",title:"Modifying main.wasp file"},c=void 0,u={unversionedId:"tutorials/dev-excuses-app/02-modifying-main-wasp-file",id:"tutorials/dev-excuses-app/02-modifying-main-wasp-file",isDocsHomePage:!1,title:"Modifying main.wasp file",description:"First and foremost, we need to add some dependencies and introduce operations to our project. We\u2019ll add Tailwind to make our UI prettier and Axios for making API requests.",source:"@site/docs/tutorials/dev-excuses-app/02-modifying-main-wasp-file.md",sourceDirName:"tutorials/dev-excuses-app",slug:"/tutorials/dev-excuses-app/02-modifying-main-wasp-file",permalink:"/docs/tutorials/dev-excuses-app/02-modifying-main-wasp-file",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/dev-excuses-app/02-modifying-main-wasp-file.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"02-modifying-main-wasp-file",title:"Modifying main.wasp file"},sidebar:"docs",previous:{title:"Creating the project",permalink:"/docs/tutorials/dev-excuses-app/01-creating-the-project"},next:{title:"Adding operations",permalink:"/docs/tutorials/dev-excuses-app/03-adding-operations"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"First and foremost, we need to add some dependencies and introduce operations to our project. We\u2019ll add Tailwind to make our UI prettier and Axios for making API requests. "),(0,a.kt)("p",null,"Also, we\u2019ll declare a database entity called ",(0,a.kt)("inlineCode",{parentName:"p"},"Excuse"),", queries, and action. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Excuse")," entity consists of the entity\u2019s ID and the text. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Queries")," are here when we need to fetch/read something, while ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," are here when we need to change/update data. Both query and action declaration consists of two lines \u2013 a reference to the file that contains implementation and a data model to operate on. You can find more info ",(0,a.kt)("a",{parentName:"p",href:"/docs/language/features#queries-and-actions-aka-operations"},"in the docs section below"),". Let's move on!"),(0,a.kt)("p",null,"Let's add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," file's ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Adding dependencies"',title:'"main.wasp',"|":!0,Adding:!0,'dependencies"':!0},'  head: [\n    "<script src=\'https://cdn.tailwindcss.com\'><\/script>"\n  ],\n\n  dependencies: [                                          \n    ("axios", "^0.21.1")\n  ]\n')),(0,a.kt)("p",null,"Next, we'll add an Excuse entity to the bottom of the file. You'll also need to define queries and an action that operates on nit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Defining Excuse entity, queries and action"',title:'"main.wasp',"|":!0,Defining:!0,Excuse:!0,"entity,":!0,queries:!0,and:!0,'action"':!0},'entity Excuse {=psl                                          \n    id          Int     @id @default(autoincrement())\n    text        String\npsl=}\n\nquery getExcuse {                                           \n  fn: import { getExcuse } from "@ext/queries.js",\n  entities: [Excuse]\n}\n\nquery getAllSavedExcuses {                                  \n  fn: import { getAllSavedExcuses } from "@ext/queries.js",\n  entities: [Excuse]\n}\n\naction saveExcuse {                                         \n  fn: import { saveExcuse } from "@ext/actions.js",\n  entities: [Excuse]\n}\n')),(0,a.kt)("p",null,"The resulting ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," file should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Final result"',title:'"main.wasp',"|":!0,Final:!0,'result"':!0},'\n// Main declaration, defines a new web app.\napp ItWaspsOnMyMachine {\n\n  // Used as a browser tab title.                                  \n  title: "It Wasps On My Machine",\n\n  head: [\n    // Adding Tailwind to make our UI prettier\n    "<script src=\'https://cdn.tailwindcss.com\'><\/script>"\n  ],\n\n  dependencies: [ \n    // Adding Axios for making HTTP requests                                          \n    ("axios", "^0.21.1")\n  ]\n}\n\n// Render page MainPage on url `/` (default url).\nroute RootRoute { path: "/", to: MainPage }                 \n\n// ReactJS implementation of our page located in `ext/MainPage.js` as a default export\npage MainPage {                                             \n  component: import Main from "@ext/MainPage.js"\n}\n\n// Prisma database entity\nentity Excuse {=psl                                          \n    id          Int     @id @default(autoincrement())\n    text        String\npsl=}\n\n// Query declaration to get a new excuse\nquery getExcuse {                                           \n  fn: import { getExcuse } from "@ext/queries.js",\n  entities: [Excuse]\n}\n\n// Query declaration to get all excuses\nquery getAllSavedExcuses {                                  \n  fn: import { getAllSavedExcuses } from "@ext/queries.js",\n  entities: [Excuse]\n}\n\n// Action to save current excuse\naction saveExcuse {                                         \n  fn: import { saveExcuse } from "@ext/actions.js",\n  entities: [Excuse]\n}\n')),(0,a.kt)("p",null,"Perfect! We've set up all the architecture of our app. Now let's add some logic."))}d.isMDXComponent=!0}}]);