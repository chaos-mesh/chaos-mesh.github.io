"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6061],{73066:(e,n,t)=>{t.d(n,{A:()=>s});t(79474);var a=t(4139),i=t(13274);function s(e){let{children:n,fallback:t}=e;return(0,a.A)()?(0,i.jsx)(i.Fragment,{children:n?.()}):t??null}},95461:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(79474);var a=t(28923),i=t(63938),s=t(43965),r=t(91283),l=t(29586),o=t(2957),c=t(59482),d=t(99666);const m={mdxPageWrapper:"mdxPageWrapper_Zh0L"};var u=t(13274);function f(e){const{content:n}=e,{metadata:{title:t,editUrl:f,description:h,frontMatter:g,unlisted:v,lastUpdatedBy:x,lastUpdatedAt:p},assets:j}=n,{keywords:A,wrapperClassName:L,hide_table_of_contents:b}=g,C=j.image??g.image,N=!!(f||p||x);return(0,u.jsx)(i.e3,{className:(0,a.A)(L??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(i.be,{title:t,description:h,keywords:A,image:C}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.A)("col",!b&&"col--8"),children:[v&&(0,u.jsx)(c.A,{}),(0,u.jsx)("article",{children:(0,u.jsx)(l.A,{children:(0,u.jsx)(n,{})})}),N&&(0,u.jsx)(d.A,{className:(0,a.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:f,lastUpdatedAt:p,lastUpdatedBy:x})]}),!b&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(o.A,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},92778:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(79474),i=t(53644);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(51274),u=t(13274);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...f}=e;const g=(0,i.p)(),v=c??g.tableOfContents.minHeadingLevel,x=m??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:x}}),[l,o,v,x])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:l,...f})}},59482:(e,n,t)=>{t.d(n,{A:()=>f});t(79474);var a=t(28923),i=t(37919),s=t(19504),r=t(13274);function l(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(43965),m=t(10960);function u(e){let{className:n}=e;return(0,r.jsx)(m.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function f(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},82349:(e,n,t)=>{t.d(n,{_:()=>l,u:()=>o});var a=t(79474),i=t(39558),s=t(13274);const r=a.createContext(null);function l(e){let{children:n,content:t}=e;const i=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,s.jsx)(r.Provider,{value:i,children:n})}function o(){const e=(0,a.useContext)(r);if(null===e)throw new i.dV("DocProvider");return e}},2957:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(73066),i=t(82349),s=(t(79474),t(28923)),r=t(92778);const l={tableOfContents:"tableOfContents_Ghg1",docItemContainer:"docItemContainer_otWC"};var o=t(13274);const c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.A)(l.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(r.A,{...t,linkClassName:c,linkActiveClassName:d})})}function u(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{children:()=>{if(!window.location.pathname.startsWith("/docs"))return null;const{metadata:e}=(0,i.u)(),{editUrl:n}=e;return(0,o.jsx)("a",{style:{display:"block",marginBottom:"1rem"},href:`https://gitpod.io/#${n.replace("edit","blob")}`,target:"_blank",rel:"noreferrer noopener",children:(0,o.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}}),(0,o.jsx)(m,{...e})]})}}}]);