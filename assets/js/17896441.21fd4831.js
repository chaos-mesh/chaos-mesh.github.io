"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8401],{33453:(e,t,n)=>{n.d(t,{A:()=>i});n(30758);var s=n(81486),a=n(86070);function i(e){let{children:t,fallback:n}=e;return(0,s.A)()?(0,a.jsx)(a.Fragment,{children:t?.()}):n??null}},20552:(e,t,n)=>{n.d(t,{_:()=>o,u:()=>r});var s=n(30758),a=n(31033),i=n(86070);const l=s.createContext(null);function o(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new a.dV("DocProvider");return e}},66276:(e,t,n)=>{n.d(t,{A:()=>c});n(30758);var s=n(28923),a=n(72289),i=n(72388),l=n(51590),o=n(86070);function r(e){let{className:t}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Rc,{}),className:(0,s.A)(t,i.G.common.unlistedBanner),children:(0,o.jsx)(a.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AE,{}),(0,o.jsx)(r,{...e})]})}},28015:(e,t,n)=>{n.d(t,{A:()=>d});n(30758);var s=n(28923),a=n(72289),i=n(72388),l=n(51590),o=n(86070);function r(e){let{className:t}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Yh,{}),className:(0,s.A)(t,i.G.common.draftBanner),children:(0,o.jsx)(a.TT,{})})}var c=n(66276);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(c.A,{}),s.draft&&(0,o.jsx)(r,{})]})}},75166:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});n(30758);var s=n(10247),a=n(20552),i=n(86070);function l(){const{metadata:e,frontMatter:t,assets:n}=(0,a.u)();return(0,i.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var o=n(28923),r=n(23250),c=n(35317),d=n(6336);function u(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(d.A,{...t,subLabel:(0,i.jsx)(c.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(d.A,{...n,subLabel:(0,i.jsx)(c.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function m(){const{metadata:e}=(0,a.u)();return(0,i.jsx)(u,{previous:e.previous,next:e.next})}var h=n(85599),v=n(7255),b=n(68385),x=n(72388),g=n(36676),p=n(24435);const f={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(c.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(c.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function j(e){const t=f[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function A(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(c.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(v.A,{to:n,onClick:s,children:(0,i.jsx)(c.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function N(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,h.A)(),{pluginId:a}=(0,b.vT)({failfast:!0}),{savePreferredVersionName:l}=(0,g.g1)(a),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,b.HW)(a),d=r??(u=c).docs.find((e=>e.id===u.mainDocId));var u;return(0,i.jsxs)("div",{className:(0,o.A)(t,x.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(j,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(A,{versionLabel:c.label,to:d.path,onClick:()=>l(c.name)})})]})}function _(e){let{className:t}=e;const n=(0,p.r)();return n.banner?(0,i.jsx)(N,{className:t,versionMetadata:n}):null}function L(e){let{className:t}=e;const n=(0,p.r)();return n.badge?(0,i.jsx)("span",{className:(0,o.A)(t,x.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(c.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var C=n(33595),k=n(75054);function T(){const{metadata:e}=(0,a.u)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:l}=e,r=l.length>0,c=!!(t||n||s);return r||c?(0,i.jsxs)("footer",{className:(0,o.A)(x.G.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,i.jsx)("div",{className:(0,o.A)("row margin-top--sm",x.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(C.A,{tags:l})})}),c&&(0,i.jsx)(k.A,{className:(0,o.A)("margin-top--sm",x.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var H=n(7159),y=n(40973);const M={tocCollapsibleButton:"tocCollapsibleButton_gyNk",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_xsbm"};function w(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,o.A)("clean-btn",M.tocCollapsibleButton,!t&&M.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(c.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const B={tocCollapsible:"tocCollapsible_Cm4U",tocCollapsibleContent:"tocCollapsibleContent_Akh4",tocCollapsibleExpanded:"tocCollapsibleExpanded_yxla"};function E(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:l,toggleCollapsed:r}=(0,H.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,o.A)(B.tocCollapsible,!l&&B.tocCollapsibleExpanded,n),children:[(0,i.jsx)(w,{collapsed:l,onClick:r}),(0,i.jsx)(H.N,{lazy:!0,className:B.tocCollapsibleContent,collapsed:l,children:(0,i.jsx)(y.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const I={tocMobile:"tocMobile_vepl"};function O(){const{toc:e,frontMatter:t}=(0,a.u)();return(0,i.jsx)(E,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.A)(x.G.docs.docTocMobile,I.tocMobile)})}var V=n(25272);function R(){const{toc:e,frontMatter:t}=(0,a.u)();return(0,i.jsx)(V.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:x.G.docs.docTocDesktop})}var S=n(88789),U=n(61423);function G(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,a.u)();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,o.A)(x.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(S.A,{as:"h1",children:n})}),(0,i.jsx)(U.A,{children:t})]})}var F=n(43878),D=n(33342),P=n(45036);function z(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const W={breadcrumbHomeIcon:"breadcrumbHomeIcon_WmEB"};function K(){const e=(0,P.Ay)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(v.A,{"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(z,{className:W.breadcrumbHomeIcon})})})}const $={breadcrumbsContainer:"breadcrumbsContainer_NOSR"};function Y(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(v.A,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function q(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,o.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function J(){const e=(0,F.OF)(),t=(0,D.Dt)();return e?(0,i.jsx)("nav",{className:(0,o.A)(x.G.docs.docBreadcrumbs,$.breadcrumbsContainer),"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(K,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(q,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(Y,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var Q=n(28015);const X={docItemContainer:"docItemContainer_wfoJ",docItemCol:"docItemCol_Oso4"};function Z(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,a.u)(),n=(0,r.l)(),s=e.hide_table_of_contents,l=!s&&t.length>0;return{hidden:s,mobile:l?(0,i.jsx)(O,{}):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(R,{})}}(),{metadata:s}=(0,a.u)();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,o.A)("col",!n.hidden&&X.docItemCol),children:[(0,i.jsx)(Q.A,{metadata:s}),(0,i.jsx)(_,{}),(0,i.jsxs)("div",{className:X.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(J,{}),(0,i.jsx)(L,{}),n.mobile,(0,i.jsx)(G,{children:t}),(0,i.jsx)(T,{})]}),(0,i.jsx)(m,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ee(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(a._,{content:e.content,children:(0,i.jsxs)(s.e3,{className:t,children:[(0,i.jsx)(l,{}),(0,i.jsx)(Z,{children:(0,i.jsx)(n,{})})]})})}},6336:(e,t,n)=>{n.d(t,{A:()=>l});n(30758);var s=n(28923),a=n(7255),i=n(86070);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},40973:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(30758),a=n(82915);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(7255),m=n(86070);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.p)(),x=c??b.tableOfContents.minHeadingLevel,g=u??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[o,r,x,g])),(0,m.jsx)(v,{toc:p,className:n,linkClassName:o,...h})}},95895:(e,t,n)=>{n.d(t,{A:()=>o});n(30758);var s=n(28923),a=n(7255);const i={tag:"tag_DSrP",tagRegular:"tagRegular__YEH",tagWithCount:"tagWithCount_TKEz"};var l=n(86070);function o(e){let{permalink:t,label:n,count:o,description:r}=e;return(0,l.jsxs)(a.A,{href:t,title:r,className:(0,s.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},33595:(e,t,n)=>{n.d(t,{A:()=>r});n(30758);var s=n(28923),a=n(35317),i=n(95895);const l={tags:"tags_zVKf",tag:"tag_DkiD"};var o=n(86070);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},72289:(e,t,n)=>{n.d(t,{AE:()=>r,Rc:()=>l,TT:()=>d,Uh:()=>o,Yh:()=>c});n(30758);var s=n(35317),a=n(99549),i=n(86070);function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},25272:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(33453),a=n(20552),i=(n(30758),n(28923)),l=n(40973);const o={tableOfContents:"tableOfContents_yKKF",docItemContainer:"docItemContainer_paN2"};var r=n(86070);const c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(l.A,{...n,linkClassName:c,linkActiveClassName:d})})}function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{children:()=>{if(!window.location.pathname.startsWith("/docs"))return null;const{metadata:e}=(0,a.u)(),{editUrl:t}=e;return(0,r.jsx)("a",{style:{display:"block",marginBottom:"1rem"},href:`https://gitpod.io/#${t.replace("edit","blob")}`,target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}}),(0,r.jsx)(u,{...e})]})}}}]);