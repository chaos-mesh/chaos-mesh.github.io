"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[56341],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,m=p["".concat(l,".").concat(g)]||p[g]||h[g]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},38087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={slug:"/develop-a-daily-reporting-system",title:"How to Develop a Daily Reporting System to Track Chaos Testing Results",author:"Lei Li",author_title:"Senior software engineer at Digital China",author_url:"https://github.com/lileiaab",author_image_url:"https://avatars.githubusercontent.com/u/88825087?v=4",image:"/img/blog/chaos-mesh-digitalchina-banner.png",tags:["Chaos Mesh","Chaos Engineering","Use case"]},i=void 0,s={permalink:"/blog/develop-a-daily-reporting-system",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2022-01-11-develop-a-daily-reporting-system.md",source:"@site/blog/2022-01-11-develop-a-daily-reporting-system.md",title:"How to Develop a Daily Reporting System to Track Chaos Testing Results",description:"How to Develop a Daily Reporting System to Track Chaos Testing Results",date:"2022-01-11T00:00:00.000Z",formattedDate:"January 11, 2022",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Use case",permalink:"/blog/tags/use-case"}],readingTime:6.995,hasTruncateMarker:!0,authors:[{name:"Lei Li",title:"Senior software engineer at Digital China",url:"https://github.com/lileiaab",imageURL:"https://avatars.githubusercontent.com/u/88825087?v=4"}],frontMatter:{slug:"/develop-a-daily-reporting-system",title:"How to Develop a Daily Reporting System to Track Chaos Testing Results",author:"Lei Li",author_title:"Senior software engineer at Digital China",author_url:"https://github.com/lileiaab",author_image_url:"https://avatars.githubusercontent.com/u/88825087?v=4",image:"/img/blog/chaos-mesh-digitalchina-banner.png",tags:["Chaos Mesh","Chaos Engineering","Use case"]},prevItem:{title:"Experience as an LFX Mentee for Chaos Mesh",permalink:"/blog/experience-as-a-chaos-mesh-lfx-mentee"},nextItem:{title:"Share your #ChaosMeshStory!",permalink:"/blog/share-your-chaos-mesh-story"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How to Develop a Daily Reporting System to Track Chaos Testing Results",src:a(19254).Z,width:"1501",height:"501"})),(0,n.kt)("p",null,"Chaos Mesh is a cloud-native chaos engineering platform that orchestrates chaos experiments on Kubernetes environments. It allows you to test the resilience of your system by simulating problems such as network faults, file system faults, and Pod faults. After each chaos experiment, you can review the testing results by checking the logs. But this is neither direct nor efficient. Therefore, I decided to develop a daily reporting system that would automatically analyze logs and generate reports. This way, it\u2019s easy to examine the logs and identify the issues."))}h.isMDXComponent=!0},19254:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/chaos-mesh-digitalchina-banner-c7d6ac176f56621aa799af0e30d06e96.png"}}]);