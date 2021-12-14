"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4401],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,g=p["".concat(c,".").concat(h)]||p[h]||m[h]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},70950:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return m},default:function(){return h}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={slug:"/implement-chaos-engineering-in-k8s",title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",author:"Mayo Cream",author_title:"Kubernetes Member, CNCF Security TAG Member, OSS Contributor",author_url:"https://github.com/mayocream",author_image_url:"https://avatars.githubusercontent.com/u/35420264?v=4",image:"/img/implement-chaos-engineering-in-k8s.png",tags:["Chaos Mesh","Chaos Engineering"]},c=void 0,l={permalink:"/zh/blog/implement-chaos-engineering-in-k8s",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-10-implement-chaos-engineering-in-k8s.md",source:"@site/blog/2021-12-10-implement-chaos-engineering-in-k8s.md",title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",description:"Implementing Chaos Engineering in K8s",date:"2021-12-10T00:00:00.000Z",formattedDate:"2021\u5e7412\u670810\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"}],readingTime:17.915,truncated:!0,authors:[{name:"Mayo Cream",title:"Kubernetes Member, CNCF Security TAG Member, OSS Contributor",url:"https://github.com/mayocream",imageURL:"https://avatars.githubusercontent.com/u/35420264?v=4"}],nextItem:{title:"Hacktoberfest 2021: hack with Chaos Mesh!",permalink:"/zh/blog/chaos-mesh-hacktoberfest-2021"}},u={authorsImageUrls:[void 0]},m=[],p={toc:m};function h(e){var n=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Implementing Chaos Engineering in K8s",src:t(65284).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/"},"Chaos Mesh")," is an open-source, cloud-native Chaos Engineering platform built on Kubernetes (K8s) custom resource definitions (CRDs). Chaos Mesh can simulate various types of faults and has an enormous capability to orchestrate fault scenarios. You can use Chaos Mesh to conveniently simulate various abnormalities that might occur in development, testing, and production environments and find potential problems in the system."))}h.isMDXComponent=!0},65284:function(e,n,t){n.Z=t.p+"assets/images/implement-chaos-engineering-in-k8s-5c4f937587bc5753714f6b0f406f4e63.png"}}]);