"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5174],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,f=m["".concat(c,".").concat(g)]||m[g]||l[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={slug:"/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",author:"Hui Zhang @ Fuxi Lab, NetEase",image:"/img/fuxi-case-banner.jpg",tags:["Chaos Mesh","Chaos Engineering"]},s=void 0,c={permalink:"/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",source:"@site/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",description:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",date:"2020-11-26T00:00:00.000Z",formattedDate:"November 26, 2020",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:3.765,truncated:!0,prevItem:{title:"How to Simulate I/O Faults at Runtime",permalink:"/blog/how-to-simulate-io-faults-at-runtime"},nextItem:{title:"Chaos Engineering - Breaking things Intentionally",permalink:"/blog/chaos-engineering-breaking-things-intentionally"}},u=[],p={toc:u};function l(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",src:n(14834).Z})),(0,a.kt)("p",null,"NetEase Fuxi AI Lab is China\u2019s first professional game AI research institution. Researchers use our Kubernetes-based Danlu platform for algorithm development, training and tuning, and online publishing. Thanks to the integration with Kubernetes, our platform is much more efficient. However, due to Kubernetes- and microservices-related issues, we are constantly testing and improving our platform to make it more stable."))}l.isMDXComponent=!0},14834:function(e,t,n){t.Z=n.p+"assets/images/fuxi-case-banner-533004456baeaec37f72c0d6aaed0f2b.jpg"}}]);