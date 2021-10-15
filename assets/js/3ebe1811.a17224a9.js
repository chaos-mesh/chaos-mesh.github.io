"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7978],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),p=o,f=m["".concat(c,".").concat(p)]||m[p]||h[p]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31576:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return h},default:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={slug:"/how-to-efficiently-stress-test-pod-memory",title:"How to efficiently stress test Pod memory",author:"Yinghao Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/AsterNighT",author_image_url:"https://avatars.githubusercontent.com/u/22937027?v=4",image:"/img/how-to-efficiently-stress-test-pod-memory-banner.jpg",tags:["Chaos Mesh","Chaos Engineering","StressChaos","Stress Testing"]},c=void 0,u={permalink:"/blog/how-to-efficiently-stress-test-pod-memory",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-07-01-how-to-efficiently-stress-test-pod-memory.md",source:"@site/blog/2021-07-01-how-to-efficiently-stress-test-pod-memory.md",title:"How to efficiently stress test Pod memory",description:"banner",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"StressChaos",permalink:"/blog/tags/stress-chaos"},{label:"Stress Testing",permalink:"/blog/tags/stress-testing"}],readingTime:10.015,truncated:!0,authors:[{name:"Yinghao Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/AsterNighT",imageURL:"https://avatars.githubusercontent.com/u/22937027?v=4"}],prevItem:{title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh\xae",permalink:"/blog/securing-tenant-namespaces-using-restrict-authorization-feature"},nextItem:{title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",permalink:"/blog/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service"}},l={authorsImageUrls:[void 0]},h=[],m={toc:h};function p(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"banner",src:r(12839).Z})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," includes the StressChaos tool, which allows you to inject CPU and memory stress into your Pod. This tool can be very useful when you test or benchmark a CPU-sensitive or memory-sensitive program and want to know its behavior under pressure."),(0,s.kt)("p",null,"However, as we tested and used StressChaos, we found some issues with usability and performance. For example, why does StressChaos use far less memory than we configured? To correct these issues, we developed a new set of tests. In this article, I'll describe how we troubleshooted these issues and corrected them. This information will enable you to get the most out of StressChaos."))}p.isMDXComponent=!0},12839:function(e,t,r){t.Z=r.p+"assets/images/how-to-efficiently-stress-test-pod-memory-banner-3dd86c1ed5645a75c8cd7c2236a7c41a.jpg"}}]);