"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4013],{46165:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(19756),r=n(67294),l=n(86010),s=n(5227),i=n(36742),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",v=n(24973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var h=n(571);var b=function(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,a.Z)(e,["sidebar","toc","children"]),o=t&&t.items.length>0;return r.createElement(s.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(g,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},i),n&&r.createElement("div",{className:"col col--2"},r.createElement(h.Z,{toc:n})))))}},70094:function(e,t,n){n.r(t);var a=n(67294),r=n(36742),l=n(46165),s=n(24973),i=n(13018);t.default=function(e){var t=e.tags,n=e.sidebar,c=(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),o={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);o[t]=o[t]||[],o[t].push(e)}));var m=Object.entries(o).sort((function(e,t){var n=e[0],a=t[0];return n.localeCompare(a)})).map((function(e){var n=e[0],l=e[1];return a.createElement("article",{key:n},a.createElement("h2",null,n),l.map((function(e){return a.createElement(r.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),a.createElement("hr",null))})).filter((function(e){return null!=e}));return a.createElement(l.Z,{title:c,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,c),a.createElement("section",{className:"margin-vert--lg"},m))}},571:function(e,t,n){n.d(t,{r:function(){return c},Z:function(){return o}});var a=n(67294),r=n(86010);var l=function(e,t,n){var r=(0,a.useState)(void 0),l=r[0],s=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,i=!1,c=document.getElementsByClassName(e);r<c.length&&!i;){var o=c[r],m=o.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===u&&(l&&l.classList.remove(t),o.classList.add(t),s(o),i=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},s="tableOfContents_35-E",i="table-of-contents__link";function c(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(c,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return l(i,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},a.createElement(c,{toc:t}))}}}]);