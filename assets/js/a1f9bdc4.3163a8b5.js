"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4018],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(g,i(i({ref:t},h),{},{components:n})):r.createElement(g,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return h},toc:function(){return l},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={slug:"/run-chaos-experiments-on-physical-machines",title:"How to run chaos experiments on your physical machine",author:"Xiang Wang",author_title:"Chaos Mesh Committer",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars.githubusercontent.com/u/5793595?v=4",image:"/img/chaosd-banner.png",tags:["Chaos Mesh","Chaos Engineering","chaosd"]},c=void 0,u={permalink:"/blog/run-chaos-experiments-on-physical-machines",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",source:"@site/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",title:"How to run chaos experiments on your physical machine",description:"How to run chaos experiments on your physical machine",date:"2021-09-15T00:00:00.000Z",formattedDate:"September 15, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"chaosd",permalink:"/blog/tags/chaosd"}],readingTime:3.935,truncated:!0,authors:[{name:"Xiang Wang",title:"Chaos Mesh Committer",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars.githubusercontent.com/u/5793595?v=4"}],nextItem:{title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",permalink:"/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices"}},h={authorsImageUrls:[void 0]},l=[],p={toc:l};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to run chaos experiments on your physical machine",src:n(55066).Z})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh\xae")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can simulate a variety of failures, and use Chaos Dashboard, a web UI, to manage chaos experiments directly. Since it was open-sourced, Chaos Mesh has been adopted by many companies to ensure their systems\u2019 resilience and robustness. But over the past year, we have frequently heard requests from the community asking how to run chaos experiments when the services are not deployed on Kubernetes."))}m.isMDXComponent=!0},55066:function(e,t,n){t.Z=n.p+"assets/images/chaosd-banner-6413d02bac6388c2e814e3555020d8cd.png"}}]);