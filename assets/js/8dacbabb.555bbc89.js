"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7838],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39132:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),s=n(19756),a=(n(67294),n(3905)),o={id:"v0.8.0",title:"Chaos Mesh v0.8.0 Release Notes",sidebar_label:"v0.8.0"},i=void 0,l={unversionedId:"releases/v0.8.0",id:"version-1.0.3/releases/v0.8.0",isDocsHomePage:!1,title:"Chaos Mesh v0.8.0 Release Notes",description:"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh.",source:"@site/versioned_docs/version-1.0.3/releases/v0.8.0.md",sourceDirName:"releases",slug:"/releases/v0.8.0",permalink:"/docs/1.0.3/releases/v0.8.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/releases/v0.8.0.md",tags:[],version:"1.0.3",frontMatter:{id:"v0.8.0",title:"Chaos Mesh v0.8.0 Release Notes",sidebar_label:"v0.8.0"},sidebar:"version-1.0.3/docs",previous:{title:"v0.9.0",permalink:"/docs/1.0.3/releases/v0.9.0"}},u=[{value:"New Features and Enhancements",id:"new-features-and-enhancements",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh."),(0,a.kt)("h2",{id:"new-features-and-enhancements"},"New Features and Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"PodChaos")," to simulate the failure on Pods and Containers, including Pods and Containers being killed, Pods being continuously unavailable"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"NetworkChaos")," to simulate network failures, including delay, packet duplication, packet loss, partition, etc"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"TimeChaos")," to simulate failures on the system clock, such as clock skew"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"IOChaos")," to simulate failures on the file system, including file system I/O delay, and file system I/O errors"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"KernelChaos")," to simulate kernel failures"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"StressChaos")," to simulate CPU burn and Memory burn"),(0,a.kt)("li",{parentName:"ul"},"Support rich selectors to specify the scope of the chaos experiment"),(0,a.kt)("li",{parentName:"ul"},"Support rich schedulers, including using cron to schedule chaos experiments"),(0,a.kt)("li",{parentName:"ul"},"Support pausing a chaos experiment provisionally"),(0,a.kt)("li",{parentName:"ul"},"Support defining chaos experiments using YAML file"),(0,a.kt)("li",{parentName:"ul"},"Support ValidatingAdmissionWebhook for verifying the chaos object"),(0,a.kt)("li",{parentName:"ul"},"Support cert-manager for certificate management"),(0,a.kt)("li",{parentName:"ul"},"Support deploying Chaos Mesh using Helm to"),(0,a.kt)("li",{parentName:"ul"},"Support saving metrics using Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Support recording information of chaos experiment in Kubernetes events"),(0,a.kt)("li",{parentName:"ul"},"Support the complete e2e testing framework")))}p.isMDXComponent=!0}}]);