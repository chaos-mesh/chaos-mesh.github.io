"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9514,7723],{4467:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(59496),o=n(45924),l=n(7851),r=n(71434),c=n(43382),i=n(43351),s=n(27862),d=n(86790),m=n(14075),u=n(76160),b=n(81234),p=n(94547);const h={backToTopButton:"backToTopButton_x94y",backToTopButtonShow:"backToTopButtonShow_Nkd_"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(36391),g=n(83442),k=n(18450),_=n(14758),v=n(32414),C=n(60795);function S(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_BB3q",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_z7j3"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(S,{className:I.collapseSidebarButtonIcon}))}var x=n(72306),T=n(97484);const Z=Symbol("EmptyContext"),B=a.createContext(Z);function y(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(B.Provider,{value:l},t)}var w=n(20880),L=n(30613),A=n(44158),H=n(43990);function M(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,l),k=(0,L.Mg)(h,l),{collapsed:v,setCollapsed:S}=(0,w.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(B);if(e===Z)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),x=function(e){void 0===e&&(e=!v),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:v,updateCollapsed:x}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":v},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(A.Z,(0,C.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?x(!1):(e.preventDefault(),x())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!v:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(M,{categoryLabel:u,onClick:e=>{e.preventDefault(),x()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},a.createElement(q,{items:m,tabIndex:v?-1:0,onItemClick:n,activePath:l,level:c+1})))}var P=n(56306),W=n(6072);const D={menuExternalLink:"menuExternalLink_iLIy"};function R(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,l),E=(0,P.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(A.Z,(0,C.Z)({className:(0,o.Z)("menu__link",!E&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.Z,null)))}const V={menuHtmlItem:"menuHtmlItem_AWsh"};function z(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[V.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,C.Z)({item:t},n));case"html":return a.createElement(z,(0,C.Z)({item:t},n));default:return a.createElement(R,(0,C.Z)({item:t},n))}}function Y(e){let{items:t,...n}=e;return a.createElement(y,null,t.map(((e,t)=>a.createElement(U,(0,C.Z)({key:t,item:e,index:t},n)))))}const q=(0,a.memo)(Y),K={menu:"menu_rH_u",menuWithAnnouncementBar:"menuWithAnnouncementBar_tHc9"};function j(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",K.menu,c&&K.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}const G="sidebar_L5L4",O="sidebarWithHideableNavbar_UQck",Q="sidebarHidden_VFpL",J="sidebarLogo_oBRr";function X(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,o.Z)(G,c&&O,r&&Q)},c&&a.createElement(v.Z,{tabIndex:-1,className:J}),a.createElement(j,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:l}))}const $=a.memo(X);var ee=n(50579),te=n(75167);const ne=e=>{let{sidebar:t,path:n}=e;const l=(0,te.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ae(e){return a.createElement(ee.Zo,{component:ne,props:e})}const oe=a.memo(ae);function le(e){const t=(0,k.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),o&&a.createElement(oe,e))}const re={expandButton:"expandButton_DM8_",expandButtonIcon:"expandButtonIcon_dkSe"};function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:re.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:re.expandButtonIcon}))}const ie={docSidebarContainer:"docSidebarContainer_HUDY",docSidebarContainerHidden:"docSidebarContainerHidden_au1_",sidebarViewport:"sidebarViewport_tS5U"};function se(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,g.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,f.n)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&s(!0)}},a.createElement(se,null,a.createElement("div",{className:(0,o.Z)(ie.sidebarViewport,i&&ie.sidebarViewportHidden)},a.createElement(le,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ce,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_Kdyz",docMainContainerEnhanced:"docMainContainerEnhanced_uehR",docItemWrapperEnhanced:"docItemWrapperEnhanced_El7n"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(me.docMainContainer,(t||!l)&&me.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},n))}const be={docPage:"docPage_sdkH",docsWrapper:"docsWrapper_xI9p"};function pe(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:be.docsWrapper},a.createElement(E,null),a.createElement("div",{className:be.docPage},n&&a.createElement(de,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(ue,{hiddenSidebarContainer:o},t)))}var he=n(17723),Ee=n(896);function fe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Ee.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(he.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(fe,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(pe,null,c)))))}},17723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(59496),o=n(76160),l=n(7851),r=n(14075);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},27862:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(59496),o=n(97484);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);