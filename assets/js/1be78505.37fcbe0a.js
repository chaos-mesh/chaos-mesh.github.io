"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9514,4608],{38704:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var a=n(67294),o=n(3905),r=n(46291),c=n(5227),l=n(86010),i=n(41773),s=n(93783),d=n(77898),u=n(55537),m=n(22122),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(24973),b=n(19756),f=n(36742),v=n(13919),E=n(18617),g="menuLinkText_1J2g",k=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},_=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,["items"]);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(C,(0,m.Z)({key:t,item:e},n))})))}));function C(e){var t=e.item,n=(0,b.Z)(e,["item"]);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(Z,(0,m.Z)({item:t},n));case"link":default:return a.createElement(N,(0,m.Z)({item:t},n))}}function Z(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,c=(0,b.Z)(e,["item","onItemClick","activePath"]),s=n.items,d=n.label,u=n.collapsible,p=k(n,r),h=(0,i.uR)({initialState:function(){return!!u&&(!p&&n.collapsed)}}),f=h.collapsed,v=h.setCollapsed,E=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,o=e.setCollapsed,r=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&o(!1)}),[t,r,n])}({isActive:p,collapsed:f,setCollapsed:v}),a.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":f})},a.createElement("a",(0,m.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&p},t[g]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},c),d),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.createElement(_,{items:s,tabIndex:f?-1:0,onItemClick:o,activePath:r})))}function N(e){var t=e.item,n=e.onItemClick,o=e.activePath,r=(0,b.Z)(e,["item","onItemClick","activePath"]),c=t.href,i=t.label,s=k(t,o);return a.createElement("li",{className:"menu__list-item",key:i},a.createElement(f.Z,(0,m.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":s}),"aria-current":s?"page":void 0,to:c},(0,v.Z)(c)&&{onClick:n},r),(0,v.Z)(c)?i:a.createElement("span",null,i,a.createElement(E.Z,null))))}var y="sidebar_15mo",T="sidebarWithHideableNavbar_267A",S="sidebarHidden_2kNb",B="sidebarLogo_3h0W",x="menu_Bmed",I="menuWithAnnouncementBar_2WvA",w="collapseSidebarButton_1CGd",A="collapseSidebarButtonIcon_3E-R";function j(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",w),onClick:t},a.createElement(p,{className:A}))}function M(e){var t,n,o=e.path,r=e.sidebar,c=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),p=(0,i.LU)(),h=p.navbar.hideOnScroll,b=p.hideableSidebar,f=(0,i.nT)().isClosed;return a.createElement("div",{className:(0,l.Z)(y,(t={},t[T]=h,t[S]=s,t))},h&&a.createElement(u.Z,{tabIndex:-1,className:B}),a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",x,(n={},n[I]=!f&&m,n))},a.createElement("ul",{className:"menu__list"},a.createElement(_,{items:r,activePath:o}))),b&&a.createElement(j,{onClick:c}))}var L=function(e){var t=e.toggleSidebar,n=e.sidebar,o=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(_,{items:n,activePath:o,onItemClick:function(){return t()}}))};function P(e){return a.createElement(i.Cv,{component:L,props:e})}var F=a.memo(M),H=a.memo(P);function R(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(F,e),o&&a.createElement(H,e))}var W=n(82238),D=n(24608),z=n(5977),Y="backToTopButton_35hR",J="backToTopButtonShow_18ls";function K(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var U=function(){var e,t=(0,z.TH)(),n=K(),o=n.smoothScrollTop,r=n.cancelScrollToTop,c=(0,a.useState)(!1),i=c[0],s=c[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)s(!1);else if(a){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,l.Z)("clean-btn",Y,(e={},e[J]=i,e)),type:"button",onClick:function(){return o()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},$={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function G(e){var t,n,r,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,m=d.pluginId,b=d.version,f=s.sidebar,v=f?d.docsSidebars[f]:void 0,E=(0,a.useState)(!1),g=E[0],k=E[1],_=(0,a.useState)(!1),C=_[0],Z=_[1],N=(0,a.useCallback)((function(){C&&Z(!1),k(!g)}),[C]);return a.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,i.os)(m,b)}},a.createElement("div",{className:$.docPage},a.createElement(U,null),v&&a.createElement("aside",{className:(0,l.Z)($.docSidebarContainer,(t={},t[$.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains($.docSidebarContainer)&&g&&Z(!0)}},a.createElement(R,{key:f,sidebar:v,path:s.path,onCollapse:N,isHidden:C}),C&&a.createElement("div",{className:$.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(p,{className:$.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,l.Z)($.docMainContainer,(n={},n[$.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",$.docItemWrapper,(r={},r[$.docItemWrapperEnhanced]=g,r))},a.createElement(o.Zo,{components:W.Z},u)))))}var q=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,c=t.find((function(e){return(0,z.LX)(o.pathname,e)}));return c?a.createElement(G,{currentDocRoute:c,versionMetadata:n},(0,r.Z)(t,{versionMetadata:n})):a.createElement(D.default,e)}},24608:function(e,t,n){n.r(t);var a=n(67294),o=n(5227),r=n(24973);t.default=function(){return a.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},73148:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(22122),o=n(67294),r=n(86010),c=n(24544),l=n(97985),i=n(87594),s=n.n(i),d=n(83583),u=n(24973),m="codeBlockContainer_2gih",p="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",b="codeBlock_6upA",f="codeBlockWithTitle_xy-i",v="copyButton_2e3i",E="codeBlockLines_xlV7",g=n(41773),k=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function C(e){var t=e.children,n=e.className,i=e.metastring,C=e.title,Z=(0,g.LU)().prism,N=(0,o.useState)(!1),y=N[0],T=N[1],S=(0,o.useState)(!1),B=S[0],x=S[1];(0,o.useEffect)((function(){x(!0)}),[]);var I=(0,g.bc)(i)||C,w=(0,o.useRef)(null),A=[],j=(0,d.Z)(),M=Array.isArray(t)?t.join(""):t;if(i&&k.test(i)){var L=i.match(k)[1];A=s()(L).filter((function(e){return e>0}))}var P=n&&n.replace(/language-/,"");!P&&Z.defaultLanguage&&(P=Z.defaultLanguage);var F=M.replace(/\n$/,"");if(0===A.length&&void 0!==P){for(var H,R="",W=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(P),D=M.replace(/\n$/,"").split("\n"),z=0;z<D.length;){var Y=z+1,J=D[z].match(W);if(null!==J){switch(J.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=Y+",";break;case"highlight-start":H=Y;break;case"highlight-end":R+=H+"-"+(Y-1)+","}D.splice(z,1)}else z+=1}A=s()(R),F=D.join("\n")}var K=function(){(0,l.Z)(F),T(!0),setTimeout((function(){return T(!1)}),2e3)};return o.createElement(c.ZP,(0,a.Z)({},c.lG,{key:String(B),theme:j,code:F,language:P}),(function(e){var t,n=e.className,c=e.style,l=e.tokens,i=e.getLineProps,s=e.getTokenProps;return o.createElement("div",{className:m},I&&o.createElement("div",{style:c,className:h},I),o.createElement("div",{className:(0,r.Z)(p,P)},o.createElement("div",{tabIndex:0,className:(0,r.Z)(n,b,"thin-scrollbar",(t={},t[f]=I,t))},o.createElement("div",{className:E,style:c},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return A.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.createElement("div",(0,a.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))})))})))),o.createElement("button",{ref:w,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,r.Z)(v),onClick:K},y?o.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);