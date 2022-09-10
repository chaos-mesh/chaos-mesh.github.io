"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(g,".").concat(u)]||c[u]||l[u]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",author:"Hui Zhang @ Fuxi Lab, NetEase",image:"/img/fuxi-case-banner.jpg",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,s={permalink:"/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",source:"@site/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",description:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",date:"2020-11-26T00:00:00.000Z",formattedDate:"November 26, 2020",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:3.765,hasTruncateMarker:!0,authors:[{name:"Hui Zhang @ Fuxi Lab, NetEase"}],frontMatter:{slug:"/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",author:"Hui Zhang @ Fuxi Lab, NetEase",image:"/img/fuxi-case-banner.jpg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"How to Simulate I/O Faults at Runtime",permalink:"/blog/how-to-simulate-io-faults-at-runtime"},nextItem:{title:"Chaos Engineering - Breaking things Intentionally",permalink:"/blog/chaos-engineering-breaking-things-intentionally"}},g={authorsImageUrls:[void 0]},p=[],m={toc:p};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",src:n(21380).Z,width:"3126",height:"1043"})),(0,a.kt)("p",null,"NetEase Fuxi AI Lab is China\u2019s first professional game AI research institution. Researchers use our Kubernetes-based Danlu platform for algorithm development, training and tuning, and online publishing. Thanks to the integration with Kubernetes, our platform is much more efficient. However, due to Kubernetes- and microservices-related issues, we are constantly testing and improving our platform to make it more stable."))}l.isMDXComponent=!0},21380:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fuxi-case-banner-533004456baeaec37f72c0d6aaed0f2b.jpg"}}]);