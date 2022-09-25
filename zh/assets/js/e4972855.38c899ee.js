"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||h[m]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={slug:"/run_your_first_chaos_experiment",title:"Run Your First Chaos Experiment in 10 Minutes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/run-first-chaos-experiment-in-ten-minutes.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},a=void 0,s={permalink:"/zh/blog/run_your_first_chaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-03-18-run-your-first-chaos-experiment.md",source:"@site/blog/2020-03-18-run-your-first-chaos-experiment.md",title:"Run Your First Chaos Experiment in 10 Minutes",description:"Run your first chaos experiment in 10 minutes",date:"2020-03-18T00:00:00.000Z",formattedDate:"2020\u5e743\u670818\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Kubernetes",permalink:"/zh/blog/tags/kubernetes"}],readingTime:5.73,hasTruncateMarker:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],frontMatter:{slug:"/run_your_first_chaos_experiment",title:"Run Your First Chaos Experiment in 10 Minutes",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/run-first-chaos-experiment-in-ten-minutes.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes"]},prevItem:{title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",permalink:"/zh/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node"},nextItem:{title:"Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes",permalink:"/zh/blog/chaos_mesh_your_chaos_engineering_solution"}},u={authorsImageUrls:[void 0]},c=[],l={toc:c};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run your first chaos experiment in 10 minutes",src:n(98019).Z,width:"1000",height:"333"})),(0,o.kt)("p",null,"Chaos Engineering is a way to test a production software system's robustness by simulating unusual or disruptive conditions. For many people, however, the transition from learning Chaos Engineering to practicing it on their own systems is daunting. It sounds like one of those big ideas that require a fully-equipped team to plan ahead. Well, it doesn't have to be. To get started with chaos experimenting, you may be just one suitable platform away."))}h.isMDXComponent=!0},98019:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-first-chaos-experiment-in-ten-minutes-ff1807ef1fb0abc90717cde221c6fa9d.jpg"}}]);