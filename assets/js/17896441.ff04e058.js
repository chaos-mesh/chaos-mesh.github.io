"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7918],{36742:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(19756),r=n(67294),i=n(73727),l=n(52263),o=n(13919),s=n(10412),c=(0,r.createContext)({collectLink:function(){}}),d=n(44996),u=n(18780);var m=function(e){var t,n,m=e.isNavLink,v=e.to,f=e.href,h=e.activeClassName,p=e.isActive,b=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,g=void 0===E||E,_=(0,a.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),Z=(0,l.Z)().siteConfig,w=Z.trailingSlash,N=Z.baseUrl,k=(0,d.C)().withBaseUrl,L=(0,r.useContext)(c),U=v||f,y=(0,o.Z)(U),C=null==U?void 0:U.replace("pathname://",""),T=void 0!==C?(n=C,g&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0;T&&y&&(T=(0,u.applyTrailingSlash)(T,{trailingSlash:w,baseUrl:N}));var A,B=(0,r.useRef)(!1),O=m?i.OL:i.rU,M=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!M&&y&&null!=T&&window.docusaurus.prefetch(T),function(){M&&A&&A.disconnect()}}),[T,M,y]);var S=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,I=!T||!y||S;return T&&y&&!S&&!b&&L.collectLink(T),I?r.createElement("a",Object.assign({href:T},U&&!y&&{target:"_blank",rel:"noopener noreferrer"},_)):r.createElement(O,Object.assign({},_,{onMouseEnter:function(){B.current||null==T||(window.docusaurus.preload(T),B.current=!0)},innerRef:function(e){var t,n;M&&e&&y&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(A=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),n())}))}))).observe(t))},to:T||""},m&&{isActive:p,activeClassName:h}))}},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(52263),r=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},27313:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(67294),r=n(86010),i=n(80907),l=n(93783),o=n(36742),s=n(24973);var c=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=n(52263),u=n(13018);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.versionMetadata,r=(0,d.Z)().siteConfig.title,l=(0,i.gA)({failfast:!0}).pluginId,o=(0,u.J)(l).savePreferredVersionName,s=(0,i.Jo)(l),c=s.latestDocSuggestion,m=s.latestVersionSuggestion,h=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:m.label,to:h.path,onClick:function(){return o(m.name)}})))}var p=function(e){var t=e.versionMetadata;return"none"===t.banner?a.createElement(a.Fragment,null):a.createElement(h,{versionMetadata:t})},b=n(41217);function E(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement(a.Fragment,null,a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(g,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=n(571),w="tocCollapsible_1PrD",N="tocCollapsibleButton_2O1e",k="tocCollapsibleContent_2Ydz",L="tocCollapsibleExpanded_3GYr";function U(e){var t,n=e.toc,i=e.className,l=(0,u.uR)({initialState:!0}),o=l.collapsed,c=l.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(w,(t={},t[L]=!o,t),i)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",N),onClick:c},a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:k,collapsed:o},a.createElement(Z.r,{toc:n})))}var y=n(86146),C=n(28408),T="docItemContainer_33ec",A="lastUpdated_3DPF",B="docItemCol_3FnS",O="tocMobile_3Hoh";var M=function(e){var t,n=e.content,o=e.versionMetadata,s=n.metadata,d=n.frontMatter,u=d.image,m=d.keywords,v=d.hide_title,f=d.hide_table_of_contents,h=s.description,E=s.title,g=s.editUrl,w=s.lastUpdatedAt,N=s.formattedLastUpdatedAt,k=s.lastUpdatedBy,L=(0,i.gA)({failfast:!0}).pluginId,M=(0,i.gB)(L).length>1,S=!v&&void 0===n.contentTitle,I=(0,l.Z)(),x=!f&&n.toc&&n.toc.length>0,D=x&&("desktop"===I||"ssr"===I);return a.createElement(a.Fragment,null,a.createElement(b.Z,{title:E,description:h,keywords:m,image:u}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",(t={},t[B]=!f,t))},a.createElement(p,{versionMetadata:o}),a.createElement("div",{className:T},a.createElement("article",null,M&&a.createElement("span",{className:"badge badge--secondary"},"Version: ",o.label),x&&a.createElement(U,{toc:n.toc,className:O}),a.createElement("div",{className:"markdown"},S&&a.createElement(C.N,null,E),a.createElement(n,null)),(g||w||k)&&a.createElement("footer",{className:"row docusaurus-mt-lg"},a.createElement("div",{className:"col"},g&&a.createElement(y.Z,{editUrl:g})),a.createElement("div",{className:(0,r.Z)("col",A)},(w||k)&&a.createElement(_,{lastUpdatedAt:w,formattedLastUpdatedAt:N,lastUpdatedBy:k})))),a.createElement(c,{metadata:s}))),D&&a.createElement("div",{className:"col col--3"},a.createElement(Z.Z,{toc:n.toc}))))}},86146:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(24973),i=n(22122),l=n(19756),o=n(86010),s="iconEdit_2_ui",c=function(e){var t=e.className,n=(0,l.Z)(e,["className"]);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(c,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},28408:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return m}});var a=n(19756),r=n(22122),i=n(67294),l=n(86010),o=n(24973),s=n(13018),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},m=function(e){return"h1"===e?u:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,["id"]),u=(0,s.LU)().navbar.hideOnScroll;return r?i.createElement(t,d,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[c]=!u,n)),id:r}),d.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,d)});var t}},41217:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(99105),i=n(13018),l=n(44996);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=(0,i.LU)().image,d=(0,i.pe)(t),u=(0,l.Z)(s||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}))}},571:function(e,t,n){n.d(t,{r:function(){return s},Z:function(){return c}});var a=n(67294),r=n(86010);var i=function(e,t,n){var r=(0,a.useState)(void 0),i=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return i(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(s,{toc:t}))}},93783:function(e,t,n){var a=n(67294),r=n(10412),i="desktop",l="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?i:l:o}t.Z=function(){var e=(0,a.useState)((function(){return s()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){if(r.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){n(s())}}),[]),t}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},18780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);