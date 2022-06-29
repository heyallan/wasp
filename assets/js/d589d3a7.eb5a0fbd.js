"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{Z:()=>r,b:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>i});var a=n(2263),r=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,a)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},6105:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var a=n(7462),r=n(7294),o=n(3905),i=n(9443);const s=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(6010);const u="tabItem_1uMI",p="tabItemActive_2DSg";const c=function(e){var t;const{lazy:n,block:a,defaultValue:o,values:i,groupId:c,className:d}=e,m=r.Children.toArray(e.children),h=null!=i?i:m.map((e=>({value:e.props.value,label:e.props.label}))),f=null!=o?o:null==(t=m.find((e=>e.props.default)))?void 0:t.props.value,{tabGroupChoices:g,setTabGroupChoices:v}=s(),[k,b]=(0,r.useState)(f),w=[];if(null!=c){const e=g[c];null!=e&&e!==k&&h.some((t=>t.value===e))&&b(e)}const y=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;b(a),null!=c&&(v(c,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((()=>t.classList.remove(p)),2e3))}),150))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.target)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.target)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},h.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":k===t}),key:t,ref:e=>w.push(e),onKeyDown:N,onFocus:y,onClick:y},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))};const d=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)};n(4996);const m={title:"Getting Started",slug:"/",next:"/tutorials/todo-app"},h=void 0,f={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"1. Requirements",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/",next:"/tutorials/todo-app"},sidebar:"docs",next:{title:"What is Wasp?",permalink:"/docs/about"}},g=[{value:"1. Requirements",id:"1-requirements",children:[]},{value:"2. Installation",id:"2-installation",children:[]},{value:"3. Creating and running your first app",id:"3-creating-and-running-your-first-app",children:[]},{value:"4. What next?",id:"4-what-next",children:[]}],v={toc:g};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-requirements"},"1. Requirements"),(0,o.kt)("p",null,"You need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," (and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),") installed on your machine and available in ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node"),": >=16.11.0 and <=16.15.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm"),": >= 8.0.0 and <= 8.5.5")),(0,o.kt)("p",null,"You can check ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," versions by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"node -v\nnpm -v\n")),(0,o.kt)("p",null,"We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing your Node.js installation version(s)."),(0,o.kt)("details",null,(0,o.kt)("summary",{style:{cursor:"pointer",textDecoration:"underline"}},"Quick guide on installing/using nvm"),(0,o.kt)("div",null,(0,o.kt)("p",null,"  Install nvm via your OS package manager (aptitude, pacman, homebrew, ...) or alternatively via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm install script"),"."),(0,o.kt)("p",null,"  Then, install a version of node that you need, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"nvm install 16.15.0\n")),(0,o.kt)("p",null,"  Finally, whenever you need to ensure specific version of node is used, run e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"nvm use 16.15.0\n")),(0,o.kt)("p",null,"  to set the node version for current shell session."),(0,o.kt)("p",null,"  You can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"node -v\n")),(0,o.kt)("p",null,"  to check the version of node currently being used in this shell session."),(0,o.kt)("p",null,"  Check NVM repo for more details: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm")," ."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Why does Wasp require this specific ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," range and doesn't support a newer version x.y.z?"),(0,o.kt)("p",{parentName:"div"},'At Wasp, we focus on supporting the latest LTS ("long-term-support") Node.js version, since it guarantees stability and active maintainance, which is why official Node.js team recommends it for usage in production.\nTherefore, a specific Wasp release will usually require the version of Node.js that was LTS at that point of time.\nCheck out ',(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"https://nodejs.org/en/about/releases/")," for more details about Node.js releases."),(0,o.kt)("p",{parentName:"div"},"Sometimes we will make an exception to that and additionaly limit the Node.js version or postpone switching to the latest LTS if there are certain issues with new Node.js version, in which case we will catch up once those are resolved on Node.js side or we find a workaround on Wasp side."))),(0,o.kt)("h2",{id:"2-installation"},"2. Installation"),(0,o.kt)(c,{defaultValue:"linux/osx",values:[{label:"Linux / OS X",value:"linux/osx"},{label:"Windows",value:"win"},{label:"From source",value:"source"}],mdxType:"Tabs"},(0,o.kt)(d,{value:"linux/osx",mdxType:"TabItem"},(0,o.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,o.kt)("p",null,"Open your terminal and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")))),(0,o.kt)(d,{value:"win",mdxType:"TabItem"},(0,o.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,o.kt)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working. Check it out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/48"},"here")," if you are interested in helping."),(0,o.kt)("p",null,"In the meantime, the best way to start using Wasp on Windows is by using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),". Once you set up Ubuntu on WSL, just follow Linux instructions for installing Wasp. If you need further help, reach out to us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," - we have some community members using WSL that might be able to help you."))),(0,o.kt)(d,{value:"source",mdxType:"TabItem"},(0,o.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,o.kt)("p",null,"If installer is not working for you or your OS is not supported, you can try building Wasp from source."),(0,o.kt)("p",null,"To install from source, you need to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"wasp repo"),", install ",(0,o.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/getting-started.html"},"cabal")," on your machine and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"cabal install")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"waspc/")," dir."),(0,o.kt)("p",null,"If you have never built Wasp before, this might take some time due to ",(0,o.kt)("inlineCode",{parentName:"p"},"cabal")," downloading dependencies for the first time.  "),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc"},"waspc/")," for more details on building.")))),(0,o.kt)("h2",{id:"3-creating-and-running-your-first-app"},"3. Creating and running your first app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"wasp new MyNewApp # Creates a new web app named MyNewApp.\ncd MyNewApp\nwasp start # Serves the web app.\n")),(0,o.kt)("p",null,"That's it \ud83c\udf89! You have successfully created and served a new web app at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and Wasp is serving both frontend and backend for you."),(0,o.kt)("h2",{id:"4-what-next"},"4. What next?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Check out the \ud83e\udd13 ",(0,o.kt)("a",{parentName:"strong",href:"/docs/tutorials/todo-app"},"Todo App tutorial")," \ud83e\udd13 , which will take you through all the core features of Wasp!")),(0,o.kt)("p",null,"You can also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join the community on ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/rzdnErX"},"Discord"),"! Any feedback or questions you have, we are there for you."),(0,o.kt)("li",{parentName:"ul"},"If you are using Visual Studio Code, install our ",(0,o.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"Wasp language extension"),"!")))}k.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);