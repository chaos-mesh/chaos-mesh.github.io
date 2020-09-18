(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(164)),i={slug:"/chaos-mesh-action-integrate-chaos-engineering-into -your-ci",title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",author:"Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars3.githubusercontent.com/u/5793595?v=4",image:"/img/automated_testing_framework.png",tags:["Chaos Mesh","Chaos Engineering","GitHub Action","CI"]},c={permalink:"/blog/chaos-mesh-action-integrate-chaos-engineering-into -your-ci",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",source:"@site/blog/2020-9-18-chaos-mesh-action-integrate-chaos-engineering-into-your-ci.md",description:"chaos-mesh-action - Integrate-Chaos-Engineering-into-Your-CI",date:"2020-09-18T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"GitHub Action",permalink:"/blog/tags/git-hub-action"},{label:"CI",permalink:"/blog/tags/ci"}],title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",readingTime:5.345,truncated:!0,nextItem:{title:"Building an Automated Testing Framework Based on Chaos Mesh\xae and Argo",permalink:"/blog/building_automated_testing_framework"}},s=[],u={rightToc:s};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{alt:"chaos-mesh-action - Integrate-Chaos-Engineering-into-Your-CI",src:n(197).default})),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://chaos-mesh.org"}),"Chaos Mesh")," is a cloud-native chaos testing platform that orchestrates chaos in Kubernetes environments. While it\u2019s well received in the community with its rich fault injection types and easy-to-use dashboard, it was difficult  to use Chaos Mesh with end-to-end testing or the continuous integration (CI) process. As a result, problems introduced during system development could not be discovered before the release."),Object(a.b)("p",null,"In this article, I will share how we use chaos-mesh-action, a GitHub action to integrate Chaos Mesh into the CI process."))}l.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,m=h["".concat(i,".").concat(p)]||h[p]||g[p]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chaos-mesh-action-7f3cb1496d259110ce51cfcaa49ae146.png"}}]);