"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[19665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=s,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const a={title:"Chaos Mesh v0.8.0 Release Notes"},o=void 0,i={unversionedId:"releases/v0.8.0",id:"version-0.9.1/releases/v0.8.0",title:"Chaos Mesh v0.8.0 Release Notes",description:"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh.",source:"@site/versioned_docs/version-0.9.1/releases/v0.8.0.md",sourceDirName:"releases",slug:"/releases/v0.8.0",permalink:"/zh/docs/0.9.1/releases/v0.8.0",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/releases/v0.8.0.md",tags:[],version:"0.9.1",frontMatter:{title:"Chaos Mesh v0.8.0 Release Notes"},sidebar:"version-0.9.1/docs",previous:{title:"Chaos Mesh v0.9.0 Release Notes",permalink:"/zh/docs/0.9.1/releases/v0.9.0"}},l={},u=[{value:"New Features and Enhancements",id:"new-features-and-enhancements",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh."),(0,s.kt)("h2",{id:"new-features-and-enhancements"},"New Features and Enhancements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"PodChaos")," to simulate the failure on Pods and Containers, including Pods and Containers being killed, Pods being continuously unavailable"),(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"NetworkChaos")," to simulate network failures, including delay, packet duplication, packet loss, partition, etc"),(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"TimeChaos")," to simulate failures on the system clock, such as clock skew"),(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"IOChaos")," to simulate failures on the file system, including file system I/O delay, and file system I/O errors"),(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"KernelChaos")," to simulate kernel failures"),(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"StressChaos")," to simulate CPU burn and Memory burn"),(0,s.kt)("li",{parentName:"ul"},"Support rich selectors to specify the scope of the chaos experiment"),(0,s.kt)("li",{parentName:"ul"},"Support rich schedulers, including using cron to schedule chaos experiments"),(0,s.kt)("li",{parentName:"ul"},"Support pausing a chaos experiment provisionally"),(0,s.kt)("li",{parentName:"ul"},"Support defining chaos experiments using YAML file"),(0,s.kt)("li",{parentName:"ul"},"Support ValidatingAdmissionWebhook for verifying the chaos object"),(0,s.kt)("li",{parentName:"ul"},"Support cert-manager for certificate management"),(0,s.kt)("li",{parentName:"ul"},"Support deploying Chaos Mesh using Helm to"),(0,s.kt)("li",{parentName:"ul"},"Support saving metrics using Prometheus"),(0,s.kt)("li",{parentName:"ul"},"Support recording information of chaos experiment in Kubernetes events"),(0,s.kt)("li",{parentName:"ul"},"Support the complete e2e testing framework")))}c.isMDXComponent=!0}}]);