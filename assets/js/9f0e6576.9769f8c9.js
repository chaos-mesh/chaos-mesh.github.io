"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[37608],{49613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=a,m=h["".concat(u,".").concat(p)]||h[p]||g[p]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(60795),a=(r(59496),r(49613));const o={slug:"/securing-tenant-namespaces-using-restrict-authorization-feature",title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",author:"Anurag Paliwal",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/anuragpaliwal80",author_image_url:"https://avatars.githubusercontent.com/u/3283882?v=4",image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,s={permalink:"/blog/securing-tenant-namespaces-using-restrict-authorization-feature",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-07-07-restrict-authorization.md",source:"@site/blog/2021-07-07-restrict-authorization.md",title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",description:"Chaos engineering tools",date:"2021-07-07T00:00:00.000Z",formattedDate:"July 7, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:2.795,hasTruncateMarker:!0,authors:[{name:"Anurag Paliwal",title:"Contributor of Chaos Mesh",url:"https://github.com/anuragpaliwal80",imageURL:"https://avatars.githubusercontent.com/u/3283882?v=4"}],frontMatter:{slug:"/securing-tenant-namespaces-using-restrict-authorization-feature",title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",author:"Anurag Paliwal",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/anuragpaliwal80",author_image_url:"https://avatars.githubusercontent.com/u/3283882?v=4",image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"Chaos Mesh Q&A",permalink:"/blog/chaos-mesh-q&a"},nextItem:{title:"How to efficiently stress test Pod memory",permalink:"/blog/how-to-efficiently-stress-test-pod-memory"}},u={authorsImageUrls:[void 0]},c=[],l={toc:c},h="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chaos engineering tools",src:r(40885).Z,width:"3126",height:"1043"})),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/multitenancy-overview"},"multi-tenant"),' cluster is shared by multiple users and/or workloads which are referred to as "tenants".The operators of multi-tenant clusters must isolate tenants from each other to minimize the damage that a compromised or malicious tenant can do to the cluster and other tenants.'))}g.isMDXComponent=!0},40885:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/chaos-mesh-restrict-authorization-83f3faf086be2029938cd1923256b5a2.jpeg"}}]);