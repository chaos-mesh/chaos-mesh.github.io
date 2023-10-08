"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9367],{49613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var a=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),h=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=h(r),g=o,p=m["".concat(c,".").concat(g)]||m[g]||u[g]||s;return r?a.createElement(p,n(n({ref:t},l),{},{components:r})):a.createElement(p,n({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,n[1]=i;for(var h=2;h<s;h++)n[h]=r[h];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=r(28957),o=(r(59496),r(49613));const s={slug:"/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",author:"Chang Yu, Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},n=void 0,i={permalink:"/zh/blog/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-06-25-chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service.md",source:"@site/blog/2021-06-25-chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service.md",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",description:"Chaos engineering tools",date:"2021-06-25T00:00:00.000Z",formattedDate:"2021\u5e746\u670825\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"}],readingTime:10.085,hasTruncateMarker:!0,authors:[{name:"Chang Yu, Xiang Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",author:"Chang Yu, Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"How to efficiently stress test Pod memory",permalink:"/zh/blog/how-to-efficiently-stress-test-pod-memory"},nextItem:{title:"From a Newbie in Software Engineering to a Graduated LFX-Mentee",permalink:"/zh/blog/lfx-mentorship-enriching-awschaos"}},c={authorsImageUrls:[void 0]},h=[],l={toc:h},m="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chaos engineering tools",src:r(80739).Z,width:"3126",height:"1043"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting all types of faults into Pods, network, file system, and even the kernel."))}u.isMDXComponent=!0},80739:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/chaos-engineering-tools-as-a-service-018f1130dab4f321b60a8eccd366c0e1.jpeg"}}]);