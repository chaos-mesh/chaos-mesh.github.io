"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4368],{9547:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(50959),o=n(86259),i=n(35108),s=n(62905),l=n(77468),c=n(59147),r=n(58967),d=n(47534),u=n(90014);const m={backToTopButton:"backToTopButton_DrsN",backToTopButtonShow:"backToTopButtonShow_al36"};var b=n(11527);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(29757),x=n(28903),f=n(91349),j=n(59055),_=n(94452);function k(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g={collapseSidebarButton:"collapseSidebarButton_EM7X",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_ZSFK"};function v(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t,children:(0,b.jsx)(k,{className:g.collapseSidebarButtonIcon})})}var C=n(2126),S=n(69322);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var Z=n(97535),B=n(63058),A=n(46611),L=n(38250);function y(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,r.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){let{item:t,onItemClick:n,activePath:i,level:c,index:r,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),_=function(e){const t=(0,L.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),k=(0,l._F)(t,i),g=(0,B.Mg)(x,i),{collapsed:v,setCollapsed:C}=(0,Z.u)({initialState:()=>!!h&&(!k&&t.collapsed)}),{expandedItem:T,setExpandedItem:w}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!v),w(e?null:r),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:k,collapsed:v,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=T&&T!==r&&f&&C(!0)}),[h,T,r,C,f]),(0,b.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":v},p),children:[(0,b.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,b.jsx)(A.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":k}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":h?!v:void 0,href:h?_??"#":_,...d,children:m}),x&&h&&(0,b.jsx)(y,{collapsed:v,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,b.jsx)(z,{items:u,tabIndex:v?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var E=n(54012),H=n(88378);const D={menuExternalLink:"menuExternalLink_t8Kp"};function M(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...r}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,l._F)(t,a),x=(0,E.Z)(d);return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(A.Z,{className:(0,o.Z)("menu__link",!x&&D.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}const R={menuHtmlItem:"menuHtmlItem_YADL"};function W(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:c}=t;return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[R.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function F(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(w,{item:t,...n});case"html":return(0,b.jsx)(W,{item:t,...n});default:return(0,b.jsx)(M,{item:t,...n})}}function P(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(F,{item:e,index:t,...n},t)))})}const z=(0,a.memo)(P),U={menu:"menu_g7o8",menuWithAnnouncementBar:"menuWithAnnouncementBar_L2QU"};function V(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,r.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",U.menu,l&&U.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(z,{items:n,activePath:t,level:1})})})}const Y="sidebar_n9mT",K="sidebarWithHideableNavbar_bWQc",G="sidebarHidden_ryDK",O="sidebarLogo_DR1j";function Q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.L)();return(0,b.jsxs)("div",{className:(0,o.Z)(Y,s&&K,i&&G),children:[s&&(0,b.jsx)(_.Z,{tabIndex:-1,className:O}),(0,b.jsx)(V,{path:t,sidebar:n}),l&&(0,b.jsx)(v,{onClick:a})]})}const X=a.memo(Q);var q=n(85800),J=n(9805);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,J.e)();return(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(q.Zo,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(X,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_qkCD",expandButtonIcon:"expandButtonIcon_z1sO"};function oe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,r.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(k,{className:ae.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_mWYs",docSidebarContainerHidden:"docSidebarContainerHidden_ca0c",sidebarViewport:"sidebarViewport_TFD3"};function se(e){let{children:t}=e;const n=(0,c.V)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.TH)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.n)()&&r(!0),i((e=>!e))}),[i,c]);return(0,b.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&r(!0)},children:(0,b.jsx)(se,{children:(0,b.jsxs)("div",{className:(0,o.Z)(ie.sidebarViewport,c&&ie.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,b.jsx)(oe,{toggleSidebar:d})]})})})}const ce={docMainContainer:"docMainContainer_Re0U",docMainContainerEnhanced:"docMainContainerEnhanced_ArlD",docItemWrapperEnhanced:"docItemWrapperEnhanced__eJU"};function re(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.V)();return(0,b.jsx)("main",{className:(0,o.Z)(ce.docMainContainer,(t||!a)&&ce.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced),children:n})})}const de={docRoot:"docRoot_h7zX",docsWrapper:"docsWrapper_z9GB"};function ue(e){let{children:t}=e;const n=(0,c.V)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(le,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(re,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(16107);function be(e){const t=(0,l.SN)(e);if(!t)return(0,b.jsx)(me.Z,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,b.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,b.jsx)(c.b,{name:a,items:r,children:(0,b.jsx)(ue,{children:n})})})}},16107:(e,t,n)=>{n.d(t,{Z:()=>l});n(50959);var a=n(86259),o=n(58967),i=n(9799),s=n(11527);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);