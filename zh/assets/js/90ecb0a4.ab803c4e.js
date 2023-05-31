"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[22213],{49613:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>u});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,u=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return t?r.createElement(u,o(o({ref:n},g),{},{components:t})):r.createElement(u,o({ref:n},g))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(60795),i=(t(59496),t(49613));const a={slug:"/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices",title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",author:"Zhaojun Wu",author_title:"Senior DevOps Engineer at Tencent Interactive Entertainment Group",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-tencent-ieg.jpeg",tags:["Chaos Mesh","Chaos Engineering","Use case"]},o=void 0,s={permalink:"/zh/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-08-26-securing-online-gaming-combine-chaos-engineering-with-devops-practices.md",source:"@site/blog/2021-08-26-securing-online-gaming-combine-chaos-engineering-with-devops-practices.md",title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",description:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",date:"2021-08-26T00:00:00.000Z",formattedDate:"2021\u5e748\u670826\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Use case",permalink:"/zh/blog/tags/use-case"}],readingTime:7.635,hasTruncateMarker:!0,authors:[{name:"Zhaojun Wu",title:"Senior DevOps Engineer at Tencent Interactive Entertainment Group",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices",title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",author:"Zhaojun Wu",author_title:"Senior DevOps Engineer at Tencent Interactive Entertainment Group",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-tencent-ieg.jpeg",tags:["Chaos Mesh","Chaos Engineering","Use case"]},prevItem:{title:"How to run chaos experiments on your physical machine",permalink:"/zh/blog/run-chaos-experiments-on-physical-machines"},nextItem:{title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/zh/blog/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability"}},c={authorsImageUrls:[void 0]},l=[],g={toc:l},p="wrapper";function h(e){let{components:n,...a}=e;return(0,i.kt)(p,(0,r.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",src:t(38237).Z,width:"1200",height:"400"})),(0,i.kt)("p",null,"Interactive Entertainment Group (IEG) is a division of Tencent Holdings that focuses on the development of online video games and other digital content such as live broadcasts. It is well-known for being the publisher of some of the most popular video games."))}h.isMDXComponent=!0},38237:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/chaos-mesh-tencent-ieg-3119a610ddb42163cb244e562167f680.jpeg"}}]);