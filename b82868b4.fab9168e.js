(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(263)),i={id:"v0.8.0",title:"Chaos Mesh v0.8.0 Release Notes",sidebar_label:"v0.8.0"},o={unversionedId:"releases/v0.8.0",id:"version-1.1.4/releases/v0.8.0",isDocsHomePage:!1,title:"Chaos Mesh v0.8.0 Release Notes",description:"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh.",source:"@site/versioned_docs/version-1.1.4/releases/v0.8.0.md",slug:"/releases/v0.8.0",permalink:"/docs/1.1.4/releases/v0.8.0",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/releases/v0.8.0.md",version:"1.1.4",sidebar_label:"v0.8.0",sidebar:"version-1.1.4/docs",previous:{title:"Chaos Mesh v0.9.0 Release Notes",permalink:"/docs/1.1.4/releases/v0.9.0"}},l=[{value:"New Features and Enhancements",id:"new-features-and-enhancements",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Chaos Mesh v0.8.0 provides the ability to orchestrate chaos experiments in the Kubernetes environment, with support of comprehensive types of failure simulation, including Pod failures, container failures, network failures, file system failures, system time failures, and kernel failures. Helm installation method is also supported so that users can quickly deploy Chaos Mesh for chaos experiments. Chaos Mesh uses YAML to define chaos experiments, and provides a rich range of preset chaos test samples for users to quickly try Chaos Mesh."),Object(s.b)("h2",{id:"new-features-and-enhancements"},"New Features and Enhancements"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"PodChaos")," to simulate the failure on Pods and Containers, including Pods and Containers being killed, Pods being continuously unavailable"),Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"NetworkChaos")," to simulate network failures, including delay, packet duplication, packet loss, partition, etc"),Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"TimeChaos")," to simulate failures on the system clock, such as clock skew"),Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"IOChaos")," to simulate failures on the file system, including file system I/O delay, and file system I/O errors"),Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"KernelChaos")," to simulate kernel failures"),Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"StressChaos")," to simulate CPU burn and Memory burn"),Object(s.b)("li",{parentName:"ul"},"Support rich selectors to specify the scope of the chaos experiment"),Object(s.b)("li",{parentName:"ul"},"Support rich schedulers, including using cron to schedule chaos experiments"),Object(s.b)("li",{parentName:"ul"},"Support pausing a chaos experiment provisionally"),Object(s.b)("li",{parentName:"ul"},"Support defining chaos experiments using YAML file"),Object(s.b)("li",{parentName:"ul"},"Support ValidatingAdmissionWebhook for verifying the chaos object"),Object(s.b)("li",{parentName:"ul"},"Support cert-manager for certificate management"),Object(s.b)("li",{parentName:"ul"},"Support deploying Chaos Mesh using Helm to"),Object(s.b)("li",{parentName:"ul"},"Support saving metrics using Prometheus"),Object(s.b)("li",{parentName:"ul"},"Support recording information of chaos experiment in Kubernetes events"),Object(s.b)("li",{parentName:"ul"},"Support the complete e2e testing framework")))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return n?a.a.createElement(b,o(o({ref:t},c),{},{components:n})):a.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);