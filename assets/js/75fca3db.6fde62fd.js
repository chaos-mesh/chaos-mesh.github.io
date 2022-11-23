"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[53067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),g=c(n),p=o,m=g["".concat(u,".").concat(p)]||g[p]||l[p]||a;return n?r.createElement(m,s(s({ref:t},h),{},{components:n})):r.createElement(m,s({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/chaos_mesh_your_chaos_engineering_solution",title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/chaos-engineering.png",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},s=void 0,i={permalink:"/blog/chaos_mesh_your_chaos_engineering_solution",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-01-15-chaos-mesh-your-chaos-engineering-solution.md",source:"@site/blog/2020-01-15-chaos-mesh-your-chaos-engineering-solution.md",title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",description:"Chaos Engineering",date:"2020-01-15T00:00:00.000Z",formattedDate:"January 15, 2020",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:10.94,hasTruncateMarker:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],frontMatter:{slug:"/chaos_mesh_your_chaos_engineering_solution",title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/chaos-engineering.png",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},prevItem:{title:"Run Your First Chaos Experiment in 10 Minutes",permalink:"/blog/run_your_first_chaos_experiment"}},u={authorsImageUrls:[void 0]},c=[{value:"Why Chaos Mesh?",id:"why-chaos-mesh",level:2}],h={toc:c};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chaos Engineering",src:n(20028).Z,width:"900",height:"402"})),(0,o.kt)("h2",{id:"why-chaos-mesh"},"Why Chaos Mesh?"),(0,o.kt)("p",null,"In the world of distributed computing, faults can happen to your clusters unpredictably any time, anywhere. Traditionally we have unit tests and integration tests that guarantee a system is production ready, but these cover just the tip of the iceberg as clusters scale, complexities amount, and data volumes increase by PB levels. To better identify system vulnerabilities and improve resilience, Netflix invented ",(0,o.kt)("a",{parentName:"p",href:"https://netflix.github.io/chaosmonkey/"},"Chaos Monkey")," and injects various types of faults into the infrastructure and business systems. This is how Chaos Engineering was originated."))}l.isMDXComponent=!0},20028:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chaos-engineering-0a7a0b74bf0c31599b29b2ddc1069830.png"}}]);