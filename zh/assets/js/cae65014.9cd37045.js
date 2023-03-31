"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8056],{17942:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>p});var o=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),h=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=h(n),m=r,p=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return n?o.createElement(p,i(i({ref:t},g),{},{components:n})):o.createElement(p,i({ref:t},g))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<a;h++)i[h]=n[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var o=n(51163),r=(n(50959),n(17942));const a={slug:"/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},i=void 0,s={permalink:"/zh/blog/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",source:"@site/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",description:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",date:"2020-09-18T00:00:00.000Z",formattedDate:"2020\u5e749\u670818\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"GitHub Action",permalink:"/zh/blog/tags/git-hub-action"},{label:"CI",permalink:"/zh/blog/tags/ci"}],readingTime:5.38,hasTruncateMarker:!0,authors:[{name:"Xiang Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars3.githubusercontent.com/u/5793595?v=4"}],frontMatter:{slug:"/chaos-mesh-action-integrate-chaos-engineering-into-your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaos-mesh-action.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},prevItem:{title:"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier",permalink:"/zh/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier"},nextItem:{title:"Building an Automated Testing Framework Based on Chaos Mesh and Argo",permalink:"/zh/blog/building_automated_testing_framework"}},c={authorsImageUrls:[void 0]},h=[],g={toc:h},u="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chaos-mesh-action - Integrate Chaos Engineering into Your CI",src:n(30202).Z,width:"1600",height:"533"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chaos-mesh.org"},"Chaos Mesh")," is a cloud-native chaos testing platform that orchestrates chaos in Kubernetes environments. While it\u2019s well received in the community with its rich fault injection types and easy-to-use dashboard, it was difficult to use Chaos Mesh with end-to-end testing or the continuous integration (CI) process. As a result, problems introduced during system development could not be discovered before the release."),(0,r.kt)("p",null,"In this article, I will share how we use chaos-mesh-action, a GitHub action to integrate Chaos Mesh into the CI process."))}l.isMDXComponent=!0},30202:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/chaos-mesh-action-7f3cb1496d259110ce51cfcaa49ae146.png"}}]);