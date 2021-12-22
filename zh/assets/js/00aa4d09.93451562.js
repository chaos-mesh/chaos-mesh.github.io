"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7705],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||l[m]||a;return n?r.createElement(b,s(s({ref:t},h),{},{components:n})):r.createElement(b,s({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96392:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return h},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={slug:"/deploy-chaos-mesh-on-kubesphere",title:"Deploy Chaos Mesh on KubeSphere",author:"Cwen Yin",author_title:"Chaos Mesh Maintainer",author_url:"https://github.com/cwen0",author_image_url:"https://avatars.githubusercontent.com/u/22956341?v=4",image:"/img/chaos-mesh-kubesphere-banner.png",tags:["Chaos Mesh","Chaos Engineering","community"]},c=void 0,u={permalink:"/zh/blog/deploy-chaos-mesh-on-kubesphere",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md",source:"@site/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md",title:"Deploy Chaos Mesh on KubeSphere",description:"Deploy Chaos Mesh on KubeSphere",date:"2021-12-22T00:00:00.000Z",formattedDate:"2021\u5e7412\u670822\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"community",permalink:"/zh/blog/tags/community"}],readingTime:3.065,truncated:!0,authors:[{name:"Cwen Yin",title:"Chaos Mesh Maintainer",url:"https://github.com/cwen0",imageURL:"https://avatars.githubusercontent.com/u/22956341?v=4"}],nextItem:{title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",permalink:"/zh/blog/better-observability-for-chaos-engineering"}},h={authorsImageUrls:[void 0]},l=[],p={toc:l};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy Chaos Mesh on KubeSphere",src:n(89883).Z})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting various types of faults into Pods, network, file system, and even the kernel."))}m.isMDXComponent=!0},89883:function(e,t,n){t.Z=n.p+"assets/images/chaos-mesh-kubesphere-banner-d1ac1761a1832e257e371d279ad9c82f.png"}}]);