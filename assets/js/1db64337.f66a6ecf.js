"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1372],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return r?n.createElement(d,a(a({ref:t},h),{},{components:r})):n.createElement(d,a({ref:t},h))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26777:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={slug:"/",title:"Chaos Mesh Overview"},l=void 0,c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Chaos Mesh Overview",description:"This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/overview.md",tags:[],version:"current",frontMatter:{slug:"/",title:"Chaos Mesh Overview"},sidebar:"docs",next:{title:"Basic Features",permalink:"/docs/next/basic-features"}},h=[{value:"Chaos Mesh Overview",id:"chaos-mesh-overview",children:[],level:2},{value:"Core strengths",id:"core-strengths",children:[],level:2},{value:"Architecture overview",id:"architecture-overview",children:[],level:2}],u={toc:h};function p(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh."),(0,s.kt)("h2",{id:"chaos-mesh-overview"},"Chaos Mesh Overview"),(0,s.kt)("p",null,"Chaos Mesh is an open source cloud-native Chaos Engineering platform. It offers various types of fault simulation and has an enormous capability to orchestrate fault scenarios. Using Chaos Mesh, you can conveniently simulate various abnormalities that might occur in reality during the development, testing, and production environments and find potential problems in the system. To lower the threshold for a Chaos Engineering project, Chaos Mesh provides you with a visualization operation. You can easily design your Chaos scenarios on the Web UI and monitor the status of Chaos experiments."),(0,s.kt)("h2",{id:"core-strengths"},"Core strengths"),(0,s.kt)("p",null,"As the industry's leading Chaos testing platform, Chaos Mesh has the following core strengths:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Stable core capabilities: Chaos Mesh originated from the core testing platform of ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb"},"TiDB"),", and inherited a lot of TiDB's existing test experience from its initial release."),(0,s.kt)("li",{parentName:"ul"},"Fully authenticated: Chaos Mesh is used in numerous companies and organizations, such as Tencent and Meituan; It is also used in the testing systems of many well-known distributed systems, such as Apache APISIX and RabbitMQ."),(0,s.kt)("li",{parentName:"ul"},"An easy-to-use system: Chaos Mesh makes full use of automation with graphical operations and Kubernetes-based usage."),(0,s.kt)("li",{parentName:"ul"},"Cloud Native: Chaos Mesh supports Kubernetes environment with its powerful automation ability."),(0,s.kt)("li",{parentName:"ul"},"Various fault simulation scenarios: Chaos Mesh covers most of the scenarios of basic fault simulation in the distributed testing system."),(0,s.kt)("li",{parentName:"ul"},"Flexible experiment orchestration capabilities: You can design your own Chaos experiment scenarios on the platform, including multiple mixing experiments and application status checks."),(0,s.kt)("li",{parentName:"ul"},"High security: Chaos Mesh is designed with multiple layers of security control and provides high security."),(0,s.kt)("li",{parentName:"ul"},"An active community: Chaos Mesh is an incubating project hosted by CNCF. It has a growing number of ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/graphs/contributors"},"contributors")," and ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/ADOPTERS.md"},"adopters")," all over the world."),(0,s.kt)("li",{parentName:"ul"},"Easily scalable: It's easy to add new fault test types and functions to Chaos Mesh.")),(0,s.kt)("h2",{id:"architecture-overview"},"Architecture overview"),(0,s.kt)("p",null,"Chaos Mesh is built on Kubernetes CRD (Custom Resource Definition). To manage different Chaos experiments, Chaos Mesh defines multiple CRD types based on different fault types and implements separate Controllers for different CRD objects. Chaos Mesh primarily contains three components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chaos Dashboard"),": The visualization component of Chaos Mesh. Chaos Dashboard offers a set of user-friendly web interfaces through which users can manipulate and observe Chaos experiments. At the same time, Chaos Dashboard also provides an RBAC permission management mechanism."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chaos Controller Manager"),": The core logical component of Chaos Mesh. Chaos Controller Manager is primarily responsible for the scheduling and management of Chaos experiments. This component contains several CRD Controllers, such as Workflow Controller, Scheduler Controller, and Controllers of various fault types."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chaos Daemon"),": The main executive component. Chaos Daemon runs in the ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," mode and has the Privileged permission by default (which can be disabled). This component mainly interferes with specific network devices, file systems, kernels by hacking into the target Pod Namespace.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Architecture",src:r(70343).Z})),(0,s.kt)("p",null,"As shown in the above image, the overall architecture of Chaos Mesh can be divided into three parts from top to bottom:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"User input and observation: User input reaches the Kubernetes API Server starting with a user operation (User). Users do not directly interact with the Chaos Controller Manager. All user operations are eventually reflected as a Chaos resource change (such as the change of NetworkChaos resource)."),(0,s.kt)("li",{parentName:"ul"},"Monitor resource changes, schedule Workflow, and carry out Chaos experiments: The Chaos Controller Manager only accepts events from the Kubernetes API Server. These events describe the changes of a certain Chaos resource, such as a new Workflow object or the creation of a Chaos object."),(0,s.kt)("li",{parentName:"ul"},"Injection of a specific node fault: The Chaos Daemon component is primarily responsible for accepting commands from the Chaos Controller Manager component, hacking into the target Pod's Namespace, and performing specific fault injections. For example, setting TC network rules, starting the stress-ng process to preempt CPU or memory resource.")))}p.isMDXComponent=!0},70343:function(e,t,r){t.Z=r.p+"assets/images/architecture-76301820de324f79d79db310b11b9246.png"}}]);