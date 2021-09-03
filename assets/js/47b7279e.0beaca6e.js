"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9469],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,f=m["".concat(c,".").concat(p)]||m[p]||h[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return h},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={slug:"/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/clock-sync-chaos-engineering-k8s.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes","Distributed System"]},c=void 0,l={permalink:"/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",source:"@site/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",description:"Clock synchronization in distributed system",date:"2020-04-20T00:00:00.000Z",formattedDate:"April 20, 2020",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"Distributed System",permalink:"/blog/tags/distributed-system"}],readingTime:8.43,truncated:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],prevItem:{title:"Chaos Mesh\xae Joins CNCF as a Sandbox Project",permalink:"/blog/chaos-mesh-join-cncf-sandbox-project"},nextItem:{title:"Run Your First Chaos Experiment in 10 Minutes",permalink:"/blog/run_your_first_chaos_experiment"}},u={authorsImageUrls:[void 0]},h=[],m={toc:h};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clock synchronization in distributed system",src:n(11026).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh\u2122"),", an easy-to-use, open-source, cloud-native chaos engineering platform for Kubernetes (K8s), has a new feature, TimeChaos, which simulates the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Clock_skew#On_a_network"},"clock skew")," phenomenon. Usually, when we modify clocks in a container, we want a ",(0,i.kt)("a",{parentName:"p",href:"https://learning.oreilly.com/library/view/chaos-engineering/9781491988459/ch07.html"},"minimized blast radius"),", and we don't want the change to affect the other containers on the node. In reality, however, implementing this can be harder than you think. How does Chaos Mesh solve this problem?"))}p.isMDXComponent=!0},11026:function(e,t,n){t.Z=n.p+"assets/images/clock-sync-chaos-engineering-k8s-05986b97ada98f9cf1cabda6a8855c86.jpg"}}]);