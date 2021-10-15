"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5666],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,h=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return c},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={slug:"/how-to-simulate-io-faults-at-runtime",title:"How to Simulate I/O Faults at Runtime",author:"Keao Yang",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/YangKeao",author_image_url:"https://avatars2.githubusercontent.com/u/5244316",image:"/img/how-to-simulate-io-faults-at-runtime.jpg",tags:["Chaos Mesh","Chaos Engineering","Fault Injection"]},u=void 0,l={permalink:"/zh/blog/how-to-simulate-io-faults-at-runtime",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-01-08-how-to-simulate-io-faults-at-runtime.md",source:"@site/blog/2021-01-08-how-to-simulate-io-faults-at-runtime.md",title:"How to Simulate I/O Faults at Runtime",description:"Chaos Engineering - How to simulate I/O faults at runtime",date:"2021-01-08T00:00:00.000Z",formattedDate:"January 8, 2021",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Fault Injection",permalink:"/zh/blog/tags/fault-injection"}],readingTime:8.915,truncated:!0,authors:[{name:"Keao Yang",title:"Maintainer of Chaos Mesh",url:"https://github.com/YangKeao",imageURL:"https://avatars2.githubusercontent.com/u/5244316"}],prevItem:{title:"Celebrating One Year of Chaos Mesh: Looking Back and Ahead",permalink:"/zh/blog/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead"},nextItem:{title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",permalink:"/zh/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing"}},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chaos Engineering - How to simulate I/O faults at runtime",src:n(75184).Z})),(0,o.kt)("p",null,"In a production environment, filesystem faults might occur due to various incidents such as disk failures and administrator errors. As a Chaos Engineering platform, Chaos Mesh has supported simulating I/O faults in a filesystem ever since its early versions. By simply adding an IOChaos CustomResourceDefinition (CRD), we can watch how the filesystem fails and returns errors."))}f.isMDXComponent=!0},75184:function(e,t,n){t.Z=n.p+"assets/images/how-to-simulate-io-faults-at-runtime-39daaf89aa83a5be58402f763db0d5c5.jpg"}}]);