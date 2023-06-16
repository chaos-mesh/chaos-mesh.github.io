"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4401],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,p=u["".concat(l,".").concat(h)]||u[h]||g[h]||a;return n?r.createElement(p,i(i({ref:t},m),{},{components:n})):r.createElement(p,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(60795),o=(n(59496),n(49613));const a={slug:"/implement-chaos-engineering-in-k8s",title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",author:"Mayo Cream",author_title:"Kubernetes Member, CNCF Security TAG Member, OSS Contributor",author_url:"https://github.com/mayocream",author_image_url:"https://avatars.githubusercontent.com/u/35420264?v=4",image:"/img/blog/implement-chaos-engineering-in-k8s.png",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,s={permalink:"/blog/implement-chaos-engineering-in-k8s",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-10-implement-chaos-engineering-in-k8s.md",source:"@site/blog/2021-12-10-implement-chaos-engineering-in-k8s.md",title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",description:"Implementing Chaos Engineering in K8s",date:"2021-12-10T00:00:00.000Z",formattedDate:"December 10, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:17.915,hasTruncateMarker:!0,authors:[{name:"Mayo Cream",title:"Kubernetes Member, CNCF Security TAG Member, OSS Contributor",url:"https://github.com/mayocream",imageURL:"https://avatars.githubusercontent.com/u/35420264?v=4"}],frontMatter:{slug:"/implement-chaos-engineering-in-k8s",title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",author:"Mayo Cream",author_title:"Kubernetes Member, CNCF Security TAG Member, OSS Contributor",author_url:"https://github.com/mayocream",author_image_url:"https://avatars.githubusercontent.com/u/35420264?v=4",image:"/img/blog/implement-chaos-engineering-in-k8s.png",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",permalink:"/blog/better-observability-for-chaos-engineering"},nextItem:{title:"Hacktoberfest 2021: hack with Chaos Mesh!",permalink:"/blog/chaos-mesh-hacktoberfest-2021"}},l={authorsImageUrls:[void 0]},c=[],m={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Implementing Chaos Engineering in K8s",src:n(53875).Z,width:"1501",height:"501"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/"},"Chaos Mesh")," is an open-source, cloud-native Chaos Engineering platform built on Kubernetes (K8s) custom resource definitions (CRDs). Chaos Mesh can simulate various types of faults and has an enormous capability to orchestrate fault scenarios. You can use Chaos Mesh to conveniently simulate various abnormalities that might occur in development, testing, and production environments and find potential problems in the system."))}g.isMDXComponent=!0},53875:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/implement-chaos-engineering-in-k8s-5c4f937587bc5753714f6b0f406f4e63.png"}}]);