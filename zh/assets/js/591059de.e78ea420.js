"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3972],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),h=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=h(n),p=a,m=g["".concat(l,".").concat(p)]||g[p]||u[p]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=n(28957),a=(n(59496),n(49613));const o={slug:"/better-observability-for-chaos-engineering",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",author:"Ningxuan Wang",author_title:"Chaos Mesh Contributor",author_url:"https://github.com/FingerLeader",author_image_url:"https://avatars.githubusercontent.com/u/43462394?v=4",image:"/img/blog/chaos-mesh-skywalking-banner.png",tags:["Chaos Mesh","Chaos Engineering","Tutorial"]},i=void 0,s={permalink:"/zh/blog/better-observability-for-chaos-engineering",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-16-chaos-mesh-skywalking.md",source:"@site/blog/2021-12-16-chaos-mesh-skywalking.md",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",description:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",date:"2021-12-16T00:00:00.000Z",formattedDate:"2021\u5e7412\u670816\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Tutorial",permalink:"/zh/blog/tags/tutorial"}],readingTime:5.14,hasTruncateMarker:!0,authors:[{name:"Ningxuan Wang",title:"Chaos Mesh Contributor",url:"https://github.com/FingerLeader",imageURL:"https://avatars.githubusercontent.com/u/43462394?v=4"}],frontMatter:{slug:"/better-observability-for-chaos-engineering",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",author:"Ningxuan Wang",author_title:"Chaos Mesh Contributor",author_url:"https://github.com/FingerLeader",author_image_url:"https://avatars.githubusercontent.com/u/43462394?v=4",image:"/img/blog/chaos-mesh-skywalking-banner.png",tags:["Chaos Mesh","Chaos Engineering","Tutorial"]},prevItem:{title:"Deploy Chaos Mesh on KubeSphere",permalink:"/zh/blog/deploy-chaos-mesh-on-kubesphere"},nextItem:{title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",permalink:"/zh/blog/implement-chaos-engineering-in-k8s"}},l={authorsImageUrls:[void 0]},h=[],c={toc:h},g="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(g,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",src:n(15970).Z,width:"1501",height:"501"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is an open-source cloud-native ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chaos_engineering"},"chaos engineering")," platform. You can use Chaos Mesh to conveniently inject failures and simulate abnormalities that might occur in reality, so you can identify potential problems in your system. Chaos Mesh also offers a Chaos Dashboard which allows you to monitor the status of a chaos experiment. However, this dashboard cannot let you observe how the failures in the experiment impact the service performance of applications. This hinders us from further testing our systems and finding potential problems."))}u.isMDXComponent=!0},15970:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chaos-mesh-skywalking-banner-1f6183766d34f1bcd35f2e812504954f.png"}}]);