"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6103],{46165:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(19756),r=a(67294),l=a(86010),i=a(5227),o=a(36742),c="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(571);var f=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,n.Z)(e,["sidebar","toc","children"]),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},94884:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),r=a(86010),l=a(3905),i=a(24973),o=a(36742),c=a(44996),s=a(41773),m=a(82238),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",h=a(87682),v="image_1yU8";var f=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_1R69";function E(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",b),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,v,f,b=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,c.C)().withBaseUrl,k=e.children,N=e.frontMatter,Z=e.assets,y=e.metadata,P=e.truncated,T=e.isBlogPostPage,B=void 0!==T&&T,C=y.date,x=y.formattedDate,w=y.permalink,L=y.tags,j=y.readingTime,I=y.title,A=y.editUrl,R=y.authors,U=null!=(t=Z.image)?t:N.image;return n.createElement("article",{className:B?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(f=B?"h1":"h2",n.createElement("header",null,n.createElement(f,{className:d,itemProp:"headline"},B?I:n.createElement(o.Z,{itemProp:"url",to:w},I)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:C,itemProp:"datePublished"},x),void 0!==j&&n.createElement(n.Fragment,null," \xb7 ",b(j))),n.createElement(E,{authors:R,assets:Z}))),U&&n.createElement("meta",{itemProp:"image",content:_(U,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},k)),(L.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=B,a))},L.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!B})},n.createElement(h.Z,{tags:L})),B&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:A})),!B&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+I},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},84147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(41217),l=a(46165),i=a(94884),o=a(24973),c=a(36742);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(41773);var u=function(e){var t,a=e.content,o=e.sidebar,c=a.frontMatter,u=a.assets,d=a.metadata,g=d.title,p=d.description,h=d.nextItem,v=d.prevItem,f=d.date,b=d.tags,E=d.authors,_=c.hide_table_of_contents,k=c.keywords,N=null!=(t=u.image)?t:c.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:o,toc:!_&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:g,description:p,keywords:k,image:N},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),E.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:E.map((function(e){return e.url})).filter(Boolean).join(",")}),b.length>0&&n.createElement("meta",{property:"article:tag",content:b.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:c,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(h||v)&&n.createElement(s,{nextItem:h,prevItem:v}))}},86146:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(24973),l=a(22122),i=a(19756),o=a(86010),c="iconEdit_2_ui",s=function(e){var t=e.className,a=(0,i.Z)(e,["className"]);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(s,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return p}});var n=a(67294),r=a(86010),l=a(41773);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return i(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},37211:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l=a(36742),i="tag_1Okp",o="tagRegular_3MiF",c="tagWithCount_1HU1";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},87682:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l=a(24973),i=a(37211),o="tags_2ga9",c="tag_11ep";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{name:t,permalink:a}))}))))}},73148:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(22122),r=a(67294),l=a(86010),i=a(24544),o=a(97985),c=a(87594),s=a.n(c),m=a(83583),u=a(24973),d="codeBlockContainer_2gih",g="codeBlockContent_3z4W",p="codeBlockTitle_1Kb7",h="codeBlock_6upA",v="codeBlockWithTitle_xy-i",f="copyButton_2e3i",b="codeBlockLines_xlV7",E=a(41773),_=/{([\d,-]+)}/,k=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function N(e){var t=e.children,a=e.className,c=e.metastring,N=e.title,Z=(0,E.LU)().prism,y=(0,r.useState)(!1),P=y[0],T=y[1],B=(0,r.useState)(!1),C=B[0],x=B[1];(0,r.useEffect)((function(){x(!0)}),[]);var w=(0,E.bc)(c)||N,L=(0,r.useRef)(null),j=[],I=(0,m.Z)(),A=Array.isArray(t)?t.join(""):t;if(c&&_.test(c)){var R=c.match(_)[1];j=s()(R).filter((function(e){return e>0}))}var U=a&&a.replace(/language-/,"");!U&&Z.defaultLanguage&&(U=Z.defaultLanguage);var M=A.replace(/\n$/,"");if(0===j.length&&void 0!==U){for(var O,S="",z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"]);case"jsx":case"tsx":return k(["js","jsBlock","jsx"]);case"html":return k(["js","jsBlock","html"]);case"python":case"py":return k(["python"]);default:return k()}}(U),F=A.replace(/\n$/,"").split("\n"),H=0;H<F.length;){var q=H+1,D=F[H].match(z);if(null!==D){switch(D.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=q+",";break;case"highlight-start":O=q;break;case"highlight-end":S+=O+"-"+(q-1)+","}F.splice(H,1)}else H+=1}j=s()(S),M=F.join("\n")}var W=function(){(0,o.Z)(M),T(!0),setTimeout((function(){return T(!1)}),2e3)};return r.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(C),theme:I,code:M,language:U}),(function(e){var t,a=e.className,i=e.style,o=e.tokens,c=e.getLineProps,s=e.getTokenProps;return r.createElement("div",{className:d},w&&r.createElement("div",{style:i,className:p},w),r.createElement("div",{className:(0,l.Z)(g,U)},r.createElement("div",{tabIndex:0,className:(0,l.Z)(a,h,"thin-scrollbar",(t={},t[v]=w,t))},r.createElement("div",{className:b,style:i},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return j.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,n.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},s({token:e,key:t})))})))})))),r.createElement("button",{ref:L,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(f),onClick:W},P?r.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);