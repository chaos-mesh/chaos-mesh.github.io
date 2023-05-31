"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[58908],{49613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),h=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=h(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=h(r),u=o,g=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,s[1]=c;for(var h=2;h<a;h++)s[h]=r[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=r(60795),o=(r(59496),r(49613));const a={slug:"/chaos-mesh-hacktoberfest-2021",title:"Hacktoberfest 2021: hack with Chaos Mesh!",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-hacktoberfest-2021.png",tags:["Chaos Mesh","Chaos Engineering","open source"]},s=void 0,c={permalink:"/blog/chaos-mesh-hacktoberfest-2021",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",source:"@site/blog/2021-09-28-chaos-mesh-hacktoberfest-2021.md",title:"Hacktoberfest 2021: hack with Chaos Mesh!",description:"Chaos Mesh x Hacktoberfest 2021",date:"2021-09-28T00:00:00.000Z",formattedDate:"September 28, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"open source",permalink:"/blog/tags/open-source"}],readingTime:2.73,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Community",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-hacktoberfest-2021",title:"Hacktoberfest 2021: hack with Chaos Mesh!",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-hacktoberfest-2021.png",tags:["Chaos Mesh","Chaos Engineering","open source"]},prevItem:{title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",permalink:"/blog/implement-chaos-engineering-in-k8s"},nextItem:{title:"How to run chaos experiments on your physical machine",permalink:"/blog/run-chaos-experiments-on-physical-machines"}},i={authorsImageUrls:[void 0]},h=[],l={toc:h},m="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chaos Mesh x Hacktoberfest 2021",src:r(98530).Z,width:"1800",height:"600"})),(0,o.kt)("p",null,"Happy ",(0,o.kt)("a",{parentName:"p",href:"https://hacktoberfest.digitalocean.com/"},"Hacktoberfest")," 2021! We are excited to announce that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh"},"Chaos Mesh")," will be participating in the 8th annual Hacktoberfest hosted by DigitalOcean. During the month of October, anyone is welcome to join in on this global celebration of open-source by contributing changes, and earn one of 55,000 custom-made Hacktoberfest T-shirts!"))}p.isMDXComponent=!0},98530:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/chaos-mesh-hacktoberfest-2021-134ce78502c4189aa98edb62e7b3a4cf.png"}}]);