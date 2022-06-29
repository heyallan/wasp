"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9514,4608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,h=u["".concat(i,".").concat(p)]||u[p]||m[p]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8704:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var a=n(7294),r=n(3905),l=n(6291),o=n(3516),c=n(6010),i=n(941),s=n(3783),d=n(7898),m=n(5537),u=n(7462);const p=e=>a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var h=n(4973),b=n(6742),f=n(3919),E=n(8617);const g="menuLinkText_1J2g",v=(e,t)=>"link"===e.type?(0,i.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>v(e,t))),y=(0,a.memo)((function(e){let{items:t,...n}=e;return a.createElement(a.Fragment,null,t.map(((e,t)=>a.createElement(Z,(0,u.Z)({key:t,item:e},n)))))}));function Z(e){let{item:t,...n}=e;return"category"===t.type?0===t.items.length?null:a.createElement(k,(0,u.Z)({item:t},n)):a.createElement(C,(0,u.Z)({item:t},n))}function k(e){let{item:t,onItemClick:n,activePath:r,...l}=e;const{items:o,label:s,collapsible:d}=t,m=v(t,r),{collapsed:p,setCollapsed:h,toggleCollapsed:b}=(0,i.uR)({initialState:()=>!!d&&(!m&&t.collapsed)});return function(e){let{isActive:t,collapsed:n,setCollapsed:r}=e;const l=(0,i.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&r(!1)}),[t,l,n])}({isActive:m,collapsed:p,setCollapsed:h}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":p})},a.createElement("a",(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":d,"menu__link--active":d&&m,[g]:!d}),onClick:d?e=>{e.preventDefault(),b()}:void 0,href:d?"#":void 0},l),s),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},a.createElement(y,{items:o,tabIndex:p?-1:0,onItemClick:n,activePath:r})))}function C(e){let{item:t,onItemClick:n,activePath:r,...l}=e;const{href:o,label:s}=t,d=v(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(b.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:o},(0,f.Z)(o)&&{onClick:n},l),(0,f.Z)(o)?s:a.createElement("span",null,s,a.createElement(E.Z,null))))}const _="sidebar_15mo",N="sidebarWithHideableNavbar_267A",T="sidebarHidden_2kNb",S="sidebarLogo_3h0W",w="menu_Bmed",O="menuWithAnnouncementBar_2WvA",I="collapseSidebarButton_1CGd",x="collapseSidebarButtonIcon_3E-R";function P(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(p,{className:x}))}function M(e){let{path:t,sidebar:n,onCollapse:r,isHidden:l}=e;const o=function(){const{isClosed:e}=(0,i.nT)(),[t,n]=(0,a.useState)(!e);return(0,d.Z)((t=>{let{scrollY:a}=t;e||n(0===a)})),t}(),{navbar:{hideOnScroll:s},hideableSidebar:u}=(0,i.LU)(),{isClosed:p}=(0,i.nT)();return a.createElement("div",{className:(0,c.Z)(_,{[N]:s,[T]:l})},s&&a.createElement(m.Z,{tabIndex:-1,className:S}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",w,{[O]:!p&&o})},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:t}))),u&&a.createElement(P,{onClick:r}))}const A=e=>{let{toggleSidebar:t,sidebar:n,path:r}=e;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:r,onItemClick:()=>t()}))};function D(e){return a.createElement(i.Cv,{component:A,props:e})}const j=a.memo(M),F=a.memo(D);function L(e){const t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(j,e),r&&a.createElement(F,e))}var B=n(2238),H=n(4608),R=n(5977);const W="backToTopButton_35hR",z="backToTopButtonShow_18ls";function V(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const Y=function(){const e=(0,R.TH)(),{smoothScrollTop:t,cancelScrollToTop:n}=V(),[r,l]=(0,a.useState)(!1);return(0,d.Z)(((e,t)=>{let{scrollY:a}=e;if(!t)return;const r=a<t.scrollY;if(r||n(),a<300)l(!1);else if(r){const e=document.documentElement.scrollHeight;a+window.innerHeight<e&&l(!0)}else l(!1)}),[e]),a.createElement("button",{className:(0,c.Z)("clean-btn",W,{[z]:r}),type:"button",onClick:()=>t()},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},J={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};var U=n(9105);function K(e){let{currentDocRoute:t,versionMetadata:n,children:l}=e;const{pluginId:s,version:d}=n,m=t.sidebar,u=m?n.docsSidebars[m]:void 0,[b,f]=(0,a.useState)(!1),[E,g]=(0,a.useState)(!1),v=(0,a.useCallback)((()=>{E&&g(!1),f(!b)}),[E]);return a.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:d,tag:(0,i.os)(s,d)}},a.createElement("div",{className:J.docPage},a.createElement(Y,null),u&&a.createElement("aside",{className:(0,c.Z)(J.docSidebarContainer,{[J.docSidebarContainerHidden]:b}),onTransitionEnd:e=>{e.currentTarget.classList.contains(J.docSidebarContainer)&&b&&g(!0)}},a.createElement(L,{key:m,sidebar:u,path:t.path,onCollapse:v,isHidden:E}),E&&a.createElement("div",{className:J.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},a.createElement(p,{className:J.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(J.docMainContainer,{[J.docMainContainerEnhanced]:b||!u})},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,{[J.docItemWrapperEnhanced]:b})},a.createElement(r.Zo,{components:B.Z},l)))))}const X=function(e){const{route:{routes:t},versionMetadata:n,location:r}=e,o=t.find((e=>(0,R.LX)(r.pathname,e)));return o?a.createElement(a.Fragment,null,a.createElement(U.Z,null,a.createElement("html",{className:n.className})),a.createElement(K,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):a.createElement(H.default,e)}},6159:(e,t,n)=>{n.d(t,{N:()=>d,Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(4973),c=n(941);const i="anchorWithStickyNavbar_31ik",s="anchorWithHideOnScrollNavbar_3R7-",d=function(e){let{...t}=e;return r.createElement("header",null,r.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:n,...a}=e;const{navbar:{hideOnScroll:d}}=(0,c.LU)();return n?r.createElement(t,a,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,{[s]:d,[i]:!d}),id:n}),a.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,a)});var t}},2238:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),l=n(9105),o=n(6742),c=n(6213),i=n(6159),s=n(6010),d=n(941);const m="details_1VDD";function u(e){let{...t}=e;return r.createElement(d.PO,(0,a.Z)({},t,{className:(0,s.Z)("alert alert--info",m,t.className)}))}const p={head:e=>{const t=r.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e)));return r.createElement(l.Z,e,t)},code:e=>{const{children:t}=e;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(c.Z,e):r.createElement("code",e)},a:e=>r.createElement(o.Z,e),pre:e=>{var t;const{children:n}=e;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(c.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:{...e})},details:e=>{const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(u,(0,a.Z)({},e,{summary:n}),l)},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")}},4608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(7294),r=n(3516),l=n(4973);const o=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);