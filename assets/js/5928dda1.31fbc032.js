"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1618],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),h=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=h(r),u=n,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=r[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=r(87462),n=(r(67294),r(3905));const o={slug:"/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Shuyang Wu",author_title:"Chaos Mesh Committer",author_url:"https://github.com/Yiyiyimu",author_image_url:"https://avatars.githubusercontent.com/u/34589752?v=4",image:"/img/blog/chaos-mesh-apisix.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,s={permalink:"/blog/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-08-20-chaos-mesh-apisix.md",source:"@site/blog/2021-08-20-chaos-mesh-apisix.md",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",description:"Chaos Mesh helps Apache APISIX improve system stability",date:"2021-08-20T00:00:00.000Z",formattedDate:"August 20, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:5.535,hasTruncateMarker:!0,authors:[{name:"Shuyang Wu",title:"Chaos Mesh Committer",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],frontMatter:{slug:"/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Shuyang Wu",author_title:"Chaos Mesh Committer",author_url:"https://github.com/Yiyiyimu",author_image_url:"https://avatars.githubusercontent.com/u/34589752?v=4",image:"/img/blog/chaos-mesh-apisix.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",permalink:"/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices"},nextItem:{title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",permalink:"/blog/chaos-mesh-2.0-to-a-chaos-engineering-ecology"}},c={authorsImageUrls:[void 0]},h=[],l={toc:h};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaos Mesh helps Apache APISIX improve system stability",src:r(62699).Z,width:"3126",height:"1043"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is a cloud-native, high-performance, scaling microservices API gateway. It is one of the Apache Software Foundation's top-level projects and serves hundreds of companies around the world, processing their mission-critical traffic, including finance, the Internet, manufacturing, retail, and operators. Our customers include NASA, the European Union's digital factory, China Mobile, and Tencent."))}p.isMDXComponent=!0},62699:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/chaos-mesh-apisix-f1e9d2b36bf99249ad8fff26d94e0009.jpeg"}}]);