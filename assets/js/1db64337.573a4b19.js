"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1372],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(f,a(a({ref:t},h),{},{components:n})):r.createElement(f,a({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={slug:"/",title:"Chaos Mesh Overview"},l=void 0,c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Chaos Mesh Overview",description:"This document describes the concepts, usage scenarios, core strengths, and the architecture of Chaos Mesh.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/overview.md",tags:[],version:"current",frontMatter:{slug:"/",title:"Chaos Mesh Overview"},sidebar:"docs",next:{title:"Basic Features",permalink:"/docs/next/basic-features"}},h=[{value:"Chaos Mesh Overview",id:"chaos-mesh-overview",children:[]},{value:"Core strengths",id:"core-strengths",children:[]},{value:"Architecture overview",id:"architecture-overview",children:[]}],u={toc:h};function p(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes the concepts, usage scenarios, core strengths, and the architecture of Chaos Mesh."),(0,s.kt)("h2",{id:"chaos-mesh-overview"},"Chaos Mesh Overview"),(0,s.kt)("p",null,"Chaos Mesh is an open source cloud-native Chaos Engineering platform. It offers various types of fault simulation and has an enormous capability to orchestrate fault scenarios. Using Chaos Mesh, you can conveniently simulate various abnormalities that might occur in reality during the development, testing, and production environments and find potential problems in the system. To lower the threshold for a Chaos Engineering project, Chaos Mesh provides you with a perfect visualization operation. You can easily design your Chaos scenarios on the Web UI interface and monitor the status of Chaos experiments."),(0,s.kt)("h2",{id:"core-strengths"},"Core strengths"),(0,s.kt)("p",null,"As the industry's leading Chaos testing platform, Chaos Mesh has the following core strengths:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Stable core capabilities: Chaos Mesh originated from the core testing platform of ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb"},"TiDB"),", and inherited a lot of TiDB's existing test experience from its initial release."),(0,s.kt)("li",{parentName:"ul"},"Fully authenticated: Chaos Mesh is used in numerous companies and organizations, such as Tencent and Meituan; It is also used in the testing systems of many well-known distributed systems, such as Apache APISIX and RabbitMQ."),(0,s.kt)("li",{parentName:"ul"},"An easy-to-use system: Chaos Mesh makes full use of automation with graphical operations and Kubernetes-based usage."),(0,s.kt)("li",{parentName:"ul"},"Cloud Native: Chaos Mesh supports Kubernetes environment with its powerful automation ability."),(0,s.kt)("li",{parentName:"ul"},"Various fault simulation scenarios: Chaos Mesh covers most of the scenarios of basic fault simulation in the distributed testing system."),(0,s.kt)("li",{parentName:"ul"},"Flexible experiment orchestration capabilities: You can design your own Chaos experiment scenarios on the platform, including multiple mixing experiments and application status checks."),(0,s.kt)("li",{parentName:"ul"},"High security: Chaos Mesh is designed with multiple layers of security control and provides high security."),(0,s.kt)("li",{parentName:"ul"},"An active community: Chaos Mesh is a world-renowned open source Chaos testing platform and also belongs to the CNCF open source incubation project."),(0,s.kt)("li",{parentName:"ul"},"Powerful scalability: Chaos Mesh has full scalability for the extension of fault test types and functions.")),(0,s.kt)("h2",{id:"architecture-overview"},"Architecture overview"),(0,s.kt)("p",null,"Chaos Mesh is built on Kubernetes CRD (Custom Resource Definition). To manage different Chaos experiments, Chaos Mesh defines multiple CRD types based on different fault types and implements separate Controllers for different CRD objects. Chaos Mesh primarily contains three components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chaos Dashboard"),": The visualization component of Chaos Mesh. Chaos Dashboard offers a set of user-friendly web interfaces through which users can manipulate and observe Chaos experiments. At the same time, Chaos Dashboard also provides an RBAC permission management mechanism."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chaos Controller Manager"),": The core logical component of Chaos Mesh. Chaos Controller Manager is primarily responsible for the scheduling and management of Chaos experiments. This component contains several CRD Controllers, such as Workflow Controller, Scheduler Controller, and Controllers of various fault types."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chaos Daemon"),": The main executive component. Chaos Daemon runs in the ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," mode and has the Privileged permission by default (which can be disabled). This component mainly interferes with specific network devices, file systems, kernels by hacking into the target Pod Namespace.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Architecture",src:n(70343).Z})),(0,s.kt)("p",null,"As shown in the above image, the overall architecture of Chaos Mesh can be divided into three parts from top to bottom:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"User input and observation: User input reaches the Kubernetes API Server starting with a user operation (User). Users do not directly interact with the Chaos Controller Manager. All user operations are eventually reflected as a Chaos resource change (such as the change of NetworkChaos resource)."),(0,s.kt)("li",{parentName:"ul"},"Monitor resource changes, schedule Workflow, and carry out Chaos experiments: The Chaos Controller Manager only accepts events from the Kubernetes API Server. These events describe the changes of a certain Chaos resource, such as a new Workflow object or the creation of a Chaos object."),(0,s.kt)("li",{parentName:"ul"},"Injection of a specific node fault: The Chaos Daemon component is primarily responsible for accepting commands from the Chaos Controller Manager component, hacking into the target Pod's Namespace, and performing specific fault injections. For example, setting TC network rules, starting the stress-ng process to preempt CPU or memory resource.")))}p.isMDXComponent=!0},70343:function(e,t,n){t.Z=n.p+"assets/images/architecture-76301820de324f79d79db310b11b9246.png"}}]);