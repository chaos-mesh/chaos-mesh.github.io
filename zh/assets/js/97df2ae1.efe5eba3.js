"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9159],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),g=o,p=h["".concat(c,".").concat(g)]||h[g]||m[g]||a;return n?r.createElement(p,i(i({ref:t},l),{},{components:n})):r.createElement(p,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return m},default:function(){return g}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={slug:"/building_automated_testing_framework",title:"Building an Automated Testing Framework Based on Chaos Mesh\xae and Argo",author:"Ben Ye, Chengwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/automated_testing_framework.png",tags:["Chaos Mesh","Chaos Engineering","Test Automation"]},c=void 0,u={permalink:"/zh/blog/building_automated_testing_framework",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-08-14-building_automated_testing_framework.md",source:"@site/blog/2020-08-14-building_automated_testing_framework.md",title:"Building an Automated Testing Framework Based on Chaos Mesh\xae and Argo",description:"TiPocket - Automated Testing Framework",date:"2020-08-14T00:00:00.000Z",formattedDate:"August 14, 2020",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Test Automation",permalink:"/zh/blog/tags/test-automation"}],readingTime:7.83,truncated:!0,authors:[{name:"Ben Ye, Chengwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],prevItem:{title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",permalink:"/zh/blog/chaos-mesh-action-integrate-chaos-engineering-into-your-ci"},nextItem:{title:"Chaos Mesh\xae Joins CNCF as a Sandbox Project",permalink:"/zh/blog/chaos-mesh-join-cncf-sandbox-project"}},l={authorsImageUrls:[void 0]},m=[],h={toc:m};function g(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TiPocket - Automated Testing Framework",src:n(81731).Z})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh"),"\xae is an open-source chaos engineering platform for Kubernetes. Although it provides rich capabilities to simulate abnormal system conditions, it still only solves a fraction of the Chaos Engineering puzzle. Besides fault injection, a full chaos engineering application consists of hypothesizing around defined steady states, running experiments in production, validating the system via test cases, and automating the testing."),(0,a.kt)("p",null,"This article describes how we use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket"},"TiPocket"),", an automated testing framework to build a full Chaos Engineering testing loop for TiDB, our distributed database."))}g.isMDXComponent=!0},81731:function(e,t,n){t.Z=n.p+"assets/images/automated_testing_framework-c5405e59cb081273dba539dc8be612bc.png"}}]);