"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3089],{46165:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(19756),r=a(67294),l=a(86010),i=a(5227),s=a(36742),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=a(24973);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var v=a(571);var f=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,n.Z)(e,["sidebar","toc","children"]),o=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},44428:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),r=a(52263),l=a(46165),i=a(43146),s=a(36742),c=a(24973);var o=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(13018);var d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,c=(0,r.Z)().siteConfig.title,d=t.blogDescription,u=t.blogTitle,g="/"===t.permalink?c:u;return n.createElement(l.Z,{title:g,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o,{metadata:t}))}},43146:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(86010),l=a(3905),i=a(24973),s=a(36742),c=a(13018),o=a(82238),m=a(41217),d=a(86146),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,v=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=e.children,E=e.frontMatter,b=e.metadata,_=e.truncated,k=e.isBlogPostPage,N=void 0!==k&&k,Z=b.date,y=b.formattedDate,T=b.permalink,x=b.tags,B=b.readingTime,C=b.title,L=b.editUrl,w=E.author,j=E.image,I=E.keywords,A=E.author_url||E.authorURL,P=E.author_title||E.authorTitle,R=E.author_image_url||E.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:I,image:j}),n.createElement("article",{className:N?void 0:"margin-bottom--xl"},(p=N?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},N?C:n.createElement(s.Z,{to:T},C)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:Z},y),B&&n.createElement(n.Fragment,null," \xb7 ",v(B))),n.createElement("div",{className:"avatar margin-vert--md"},R&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:A},n.createElement("img",{src:R,alt:w})),n.createElement("div",{className:"avatar__intro"},w&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:A},w)),n.createElement("small",{className:"avatar__subtitle"},P)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},f)),(x.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[h]=N,t))},x.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),x.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),N&&L&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:L})),!N&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:b.permalink,"aria-label":"Read more about "+C},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},86146:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(24973),l=a(22122),i=a(19756),s=a(86010),c="iconEdit_2_ui",o=function(e){var t=e.className,a=(0,i.Z)(e,["className"]);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return c},Z:function(){return o}});var n=a(67294),r=a(86010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,c=document.getElementsByClassName(e);r<c.length&&!s;){var o=c[r],m=o.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),o.classList.add(t),i(o),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function c(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(c,{toc:t}))}},73148:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(22122),r=a(67294),l=a(86010),i=a(24544),s=a(97985),c=a(87594),o=a.n(c),m=a(83583),d=a(24973),u="codeBlockContainer_2gih",g="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",p="codeBlock_6upA",v="codeBlockWithTitle_xy-i",f="copyButton_2e3i",E="codeBlockLines_xlV7",b=a(13018),_=/{([\d,-]+)}/,k=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function N(e){var t=e.children,a=e.className,c=e.metastring,N=e.title,Z=(0,b.LU)().prism,y=(0,r.useState)(!1),T=y[0],x=y[1],B=(0,r.useState)(!1),C=B[0],L=B[1];(0,r.useEffect)((function(){L(!0)}),[]);var w=(0,b.bc)(c)||N,j=(0,r.useRef)(null),I=[],A=(0,m.Z)(),P=Array.isArray(t)?t.join(""):t;if(c&&_.test(c)){var R=c.match(_)[1];I=o()(R).filter((function(e){return e>0}))}var M=a&&a.replace(/language-/,"");!M&&Z.defaultLanguage&&(M=Z.defaultLanguage);var U=P.replace(/\n$/,"");if(0===I.length&&void 0!==M){for(var z,D="",O=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"]);case"jsx":case"tsx":return k(["js","jsBlock","jsx"]);case"html":return k(["js","jsBlock","html"]);case"python":case"py":return k(["python"]);default:return k()}}(M),S=P.replace(/\n$/,"").split("\n"),F=0;F<S.length;){var $=F+1,q=S[F].match(O);if(null!==q){switch(q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=$+",";break;case"highlight-start":z=$;break;case"highlight-end":D+=z+"-"+($-1)+","}S.splice(F,1)}else F+=1}I=o()(D),U=S.join("\n")}var G=function(){(0,s.Z)(U),x(!0),setTimeout((function(){return x(!1)}),2e3)};return r.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(C),theme:A,code:U,language:M}),(function(e){var t,a=e.className,i=e.style,s=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.createElement("div",{className:u},w&&r.createElement("div",{style:i,className:h},w),r.createElement("div",{className:(0,l.Z)(g,M)},r.createElement("div",{tabIndex:0,className:(0,l.Z)(a,p,"thin-scrollbar",(t={},t[v]=w,t))},r.createElement("div",{className:E,style:i},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return I.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,n.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},o({token:e,key:t})))})))})))),r.createElement("button",{ref:j,type:"button","aria-label":(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(f),onClick:G},T?r.createElement(d.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(d.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);