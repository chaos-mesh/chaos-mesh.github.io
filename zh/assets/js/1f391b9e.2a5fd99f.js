"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3085],{86969:(e,n,t)=>{t.d(n,{Z:()=>s});t(50959);var i=t(57093),a=t(11527);function s(e){let{children:n,fallback:t}=e;return(0,i.Z)()?(0,a.jsx)(a.Fragment,{children:n?.()}):t??null}},45831:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(50959);var i=t(45924),a=t(32905),s=t(45470),r=t(50684),l=t(76813),o=t(70777),c=t(76547);const d={mdxPageWrapper:"mdxPageWrapper_s7Lx"};var u=t(11527);function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:f,unlisted:h},assets:v}=n,{keywords:g,wrapperClassName:x,hide_table_of_contents:p}=f,j=v.image??f.image;return(0,u.jsx)(a.FG,{className:(0,i.Z)(x??s.k.wrapper.mdxPages,s.k.page.mdxPage),children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(a.d,{title:t,description:m,keywords:g,image:j}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.Z)("row",d.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.Z)("col",!p&&"col--8"),children:[h&&(0,u.jsx)(c.Z,{}),(0,u.jsx)("article",{children:(0,u.jsx)(l.Z,{children:(0,u.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(o.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},27108:(e,n,t)=>{t.d(n,{Z:()=>v});var i=t(50959),a=t(4423);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>l(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(29751),m=t(11527);function f(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...f}=e;const v=(0,a.L)(),g=c??v.tableOfContents.minHeadingLevel,x=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:x}}),[l,o,g,x])),(0,m.jsx)(h,{toc:p,className:t,linkClassName:l,...f})}},76547:(e,n,t)=>{t.d(n,{Z:()=>f});t(50959);var i=t(45924),a=t(99003),s=t(23956),r=t(11527);function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(45470),u=t(37368);function m(e){let{className:n}=e;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,i.Z)(n,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function f(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},73916:(e,n,t)=>{t.d(n,{b:()=>l,k:()=>o});var i=t(50959),a=t(17203),s=t(11527);const r=i.createContext(null);function l(e){let{children:n,content:t}=e;const a=function(e){return(0,i.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,s.jsx)(r.Provider,{value:a,children:n})}function o(){const e=(0,i.useContext)(r);if(null===e)throw new a.i6("DocProvider");return e}},70777:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(86969),a=t(73916),s=(t(50959),t(45924)),r=t(27108);const l={tableOfContents:"tableOfContents_UKBK",docItemContainer:"docItemContainer_vScR"};var o=t(11527);const c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.Z)(l.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(r.Z,{...t,linkClassName:c,linkActiveClassName:d})})}function m(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{children:()=>{if(!window.location.pathname.startsWith("/docs"))return null;const{metadata:e}=(0,a.k)(),{editUrl:n}=e;return(0,o.jsx)("a",{style:{display:"block",marginBottom:"1rem"},href:`https://gitpod.io/#${n.replace("edit","blob")}`,target:"_blank",rel:"noreferrer noopener",children:(0,o.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}}),(0,o.jsx)(u,{...e})]})}}}]);