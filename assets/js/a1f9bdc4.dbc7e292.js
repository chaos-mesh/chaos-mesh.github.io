"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[14018],{49613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),h=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=h(n),p=a,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var h=2;h<o;h++)s[h]=n[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=n(60795),a=(n(59496),n(49613));const o={slug:"/run-chaos-experiments-on-physical-machines",title:"How to run chaos experiments on your physical machine",author:"Xiang Wang",author_title:"Chaos Mesh Committer",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaosd-banner.png",tags:["Chaos Mesh","Chaos Engineering","chaosd"]},s=void 0,i={permalink:"/blog/run-chaos-experiments-on-physical-machines",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",source:"@site/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",title:"How to run chaos experiments on your physical machine",description:"How to run chaos experiments on your physical machine",date:"2021-09-15T00:00:00.000Z",formattedDate:"September 15, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"chaosd",permalink:"/blog/tags/chaosd"}],readingTime:3.935,hasTruncateMarker:!0,authors:[{name:"Xiang Wang",title:"Chaos Mesh Committer",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars.githubusercontent.com/u/5793595?v=4"}],frontMatter:{slug:"/run-chaos-experiments-on-physical-machines",title:"How to run chaos experiments on your physical machine",author:"Xiang Wang",author_title:"Chaos Mesh Committer",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaosd-banner.png",tags:["Chaos Mesh","Chaos Engineering","chaosd"]},prevItem:{title:"Hacktoberfest 2021: hack with Chaos Mesh!",permalink:"/blog/chaos-mesh-hacktoberfest-2021"},nextItem:{title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",permalink:"/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices"}},c={authorsImageUrls:[void 0]},h=[],l={toc:h},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to run chaos experiments on your physical machine",src:n(36394).Z,width:"1501",height:"501"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can simulate a variety of failures, and use Chaos Dashboard, a web UI, to manage chaos experiments directly. Since it was open-sourced, Chaos Mesh has been adopted by many companies to ensure their systems\u2019 resilience and robustness. But over the past year, we have frequently heard requests from the community asking how to run chaos experiments when the services are not deployed on Kubernetes."))}m.isMDXComponent=!0},36394:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chaosd-banner-6413d02bac6388c2e814e3555020d8cd.png"}}]);