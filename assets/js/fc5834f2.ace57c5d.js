"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9665],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35934:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],i={title:"Chaos Mesh v0.8.0 Release Notes"},l=void 0,u={unversionedId:"releases/v0.8.0",id:"version-0.9.1/releases/v0.8.0",isDocsHomePage:!1,title:"Chaos Mesh v0.8.0 Release Notes",description:"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh.",source:"@site/versioned_docs/version-0.9.1/releases/v0.8.0.md",sourceDirName:"releases",slug:"/releases/v0.8.0",permalink:"/docs/0.9.1/releases/v0.8.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/releases/v0.8.0.md",tags:[],version:"0.9.1",frontMatter:{title:"Chaos Mesh v0.8.0 Release Notes"},sidebar:"version-0.9.1/docs",previous:{title:"Chaos Mesh v0.9.0 Release Notes",permalink:"/docs/0.9.1/releases/v0.9.0"}},c=[{value:"New Features and Enhancements",id:"new-features-and-enhancements",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh."),(0,o.kt)("h2",{id:"new-features-and-enhancements"},"New Features and Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"PodChaos")," to simulate the failure on Pods and Containers, including Pods and Containers being killed, Pods being continuously unavailable"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"NetworkChaos")," to simulate network failures, including delay, packet duplication, packet loss, partition, etc"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"TimeChaos")," to simulate failures on the system clock, such as clock skew"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"IOChaos")," to simulate failures on the file system, including file system I/O delay, and file system I/O errors"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"KernelChaos")," to simulate kernel failures"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"StressChaos")," to simulate CPU burn and Memory burn"),(0,o.kt)("li",{parentName:"ul"},"Support rich selectors to specify the scope of the chaos experiment"),(0,o.kt)("li",{parentName:"ul"},"Support rich schedulers, including using cron to schedule chaos experiments"),(0,o.kt)("li",{parentName:"ul"},"Support pausing a chaos experiment provisionally"),(0,o.kt)("li",{parentName:"ul"},"Support defining chaos experiments using YAML file"),(0,o.kt)("li",{parentName:"ul"},"Support ValidatingAdmissionWebhook for verifying the chaos object"),(0,o.kt)("li",{parentName:"ul"},"Support cert-manager for certificate management"),(0,o.kt)("li",{parentName:"ul"},"Support deploying Chaos Mesh using Helm to"),(0,o.kt)("li",{parentName:"ul"},"Support saving metrics using Prometheus"),(0,o.kt)("li",{parentName:"ul"},"Support recording information of chaos experiment in Kubernetes events"),(0,o.kt)("li",{parentName:"ul"},"Support the complete e2e testing framework")))}m.isMDXComponent=!0}}]);