"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6103],{4147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7294),o=a(1217),l=a(6165),i=a(4884),r=a(4973),s=a(6742);const m=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(941);const p=function(e){var t;const{content:a,sidebar:r}=e,{frontMatter:s,assets:p,metadata:g}=a,{title:b,description:d,nextItem:v,prevItem:u,date:_,tags:E,authors:h}=g,{hide_table_of_contents:k,keywords:N}=s,w=null!=(t=p.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:r,toc:!k&&a.toc?a.toc:void 0},n.createElement(o.Z,{title:b,description:d,keywords:N,image:w},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:_}),h.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:h.map((e=>e.url)).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((e=>e.label)).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:p,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(v||u)&&n.createElement(m,{nextItem:v,prevItem:u}))}}}]);