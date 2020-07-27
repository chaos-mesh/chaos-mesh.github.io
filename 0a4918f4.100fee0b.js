(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(107)),o={id:"v0.8.0",title:"Chaos Mesh v0.8.0 Release Notes",sidebar_label:"v0.8.0"},s={unversionedId:"releases/v0.8.0",id:"releases/v0.8.0",isDocsHomePage:!1,title:"Chaos Mesh v0.8.0 Release Notes",description:"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh.",source:"@site/docs/releases/v0.8.0.md",permalink:"/docs/releases/v0.8.0",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/releases/v0.8.0.md",sidebar_label:"v0.8.0",sidebar:"docs",previous:{title:"FAQs",permalink:"/docs/faqs"}},l=[{value:"New Features and Enhancements",id:"new-features-and-enhancements",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh."),Object(i.b)("h2",{id:"new-features-and-enhancements"},"New Features and Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"PodChaos")," to simulate the failure on Pods and Containers, including Pods and Containers being killed, Pods being continuously unavailable"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"NetworkChaos")," to simulate network failures,  including delay, packet duplication, packet loss, partition, etc"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"TimeChaos")," to simulate failures on the system clock, such as clock skew"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"IOChaos")," to simulate failures on the file system, including file system I/O delay, and file system I/O errors"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"KernelChaos")," to simulate kernel  failures  "),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"StressChaos")," to simulate CPU burn and Memory burn"),Object(i.b)("li",{parentName:"ul"},"Support rich selectors to specify  the scope of the chaos experiment"),Object(i.b)("li",{parentName:"ul"},"Support rich schedulers, including using cron to schedule chaos experiments"),Object(i.b)("li",{parentName:"ul"},"Support pausing  a chaos experiment provisionally"),Object(i.b)("li",{parentName:"ul"},"Support defining chaos experiments using YAML file"),Object(i.b)("li",{parentName:"ul"},"Support ValidatingAdmissionWebhook for verifying the chaos object"),Object(i.b)("li",{parentName:"ul"},"Support cert-manager for certificate management"),Object(i.b)("li",{parentName:"ul"},"Support deploying Chaos Mesh using Helm to "),Object(i.b)("li",{parentName:"ul"},"Support saving metrics using Prometheus"),Object(i.b)("li",{parentName:"ul"},"Support recording information of chaos experiment in Kubernetes events"),Object(i.b)("li",{parentName:"ul"},"Support the complete e2e testing framework")))}u.isMDXComponent=!0}}]);