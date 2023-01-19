"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(a),m=s,f=h["".concat(l,".").concat(m)]||h[m]||p[m]||n;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=a(87462),s=(a(67294),a(3905));const n={title:"Basic Features"},o=void 0,i={unversionedId:"basic-features",id:"version-2.3.3/basic-features",title:"Basic Features",description:"This document describes the basic features of Chaos Mesh, including fault injection, Chaos workflows, visualized operations, and security guarantees.",source:"@site/versioned_docs/version-2.3.3/basic-features.md",sourceDirName:".",slug:"/basic-features",permalink:"/docs/2.3.3/basic-features",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/basic-features.md",tags:[],version:"2.3.3",frontMatter:{title:"Basic Features"},sidebar:"docs",previous:{title:"Chaos Mesh Overview",permalink:"/docs/2.3.3/"},next:{title:"Quick Start",permalink:"/docs/2.3.3/quick-start"}},l={},u=[{value:"Fault injection",id:"fault-injection",level:2},{value:"Chaos workflows",id:"chaos-workflows",level:2},{value:"Visualized operations",id:"visualized-operations",level:2},{value:"Security guarantee",id:"security-guarantee",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes the basic features of Chaos Mesh, including ",(0,s.kt)("a",{parentName:"p",href:"#fault-injection"},"fault injection"),", ",(0,s.kt)("a",{parentName:"p",href:"#chaos-workflows"},"Chaos workflows"),", ",(0,s.kt)("a",{parentName:"p",href:"#visualized-operations"},"visualized operations"),", and ",(0,s.kt)("a",{parentName:"p",href:"#security-guarantees"},"security guarantees"),"."),(0,s.kt)("h2",{id:"fault-injection"},"Fault injection"),(0,s.kt)("p",null,"Fault injection is the key of Chaos experiments. Chaos Mesh covers a full range of faults that might occur in a distributed system, and provides three comprehensive and fine-grained fault types: basic resource faults, platform faults, and application-layer faults."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Basic resource faults:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-pod-chaos-on-kubernetes"},"PodChaos"),": simulates Pod failures, such as Pod node restart, Pod's persistent unavailablility, and certain container failures in a specific Pod."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-network-chaos-on-kubernetes"},"NetworkChaos"),": simulates network failures, such as network latency, packet loss, packet disorder, and network partitions."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-dns-chaos-on-kubernetes"},"DNSChaos"),": simulates DNS failures, such as the parsing failure of DNS domain name and the wrong IP address returned."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-http-chaos-on-kubernetes"},"HTTPChaos"),": simulates HTTP communication failures, such as HTTP communication latency."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-heavy-stress-on-kubernetes"},"StressChaos"),": simulates CPU race or memory race."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-io-chaos-on-kubernetes"},"IOChaos"),": simulates the I/O failure of an application file, such as I/O delays, read and write failures."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-time-chaos-on-kubernetes"},"TimeChaos"),": simulates the time jump exception."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-kernel-chaos-on-kubernetes"},"KernelChaos"),": simulates kernel failures, such as an exception of the application memory allocation."))),(0,s.kt)("li",{parentName:"ul"},"Platform faults:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-aws-chaos"},"AWSChaos"),": simulates AWS platform failures, such as the AWS node restart."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-gcp-chaos"},"GCPChaos"),": simulates GCP platform failures, such as the GCP node restart."))),(0,s.kt)("li",{parentName:"ul"},"Application faults:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.3/simulate-jvm-application-chaos"},"JVMChaos"),": simulates JVM application failures, such as the function call delay.")))),(0,s.kt)("h2",{id:"chaos-workflows"},"Chaos workflows"),(0,s.kt)("p",null,"A Chaos workflow includes a set of Chaos experiments and an application status check, so you can complete the entire process of a Chaos engineering project on the platform."),(0,s.kt)("p",null,"Chaos workflows enable you to perform a series of Chaos experiments, keep expanding the explosion radius (including the scope of attacks), and increase the failure types. After running a Chaos workflow, you can easily view the current state of the application using Chaos Mesh and determine whether to perform follow-up experiments.At the same time, to reduce the cost of maintaining Chaos workflows, you can keep updating and accumulating the Chaos experiment workflows, and apply the existing experiments to other workflows."),(0,s.kt)("p",null,"Currently, Chaos workflows provide the following features:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Orchestrate serial Chaos experiments"),(0,s.kt)("li",{parentName:"ul"},"Orchestrate parallel Chaos experiments"),(0,s.kt)("li",{parentName:"ul"},"Support checking experimental status and results"),(0,s.kt)("li",{parentName:"ul"},"Support pausing a Chaos experiment"),(0,s.kt)("li",{parentName:"ul"},"Support using YAML files to define and manage Chaos workflows"),(0,s.kt)("li",{parentName:"ul"},"Support using the web UI to define and manage Chaos workflows")),(0,s.kt)("p",null,"For the configuration of a specific workflow, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.3.3/create-chaos-mesh-workflow"},"Create Chaos Mesh workflow"),"."),(0,s.kt)("h2",{id:"visualized-operations"},"Visualized operations"),(0,s.kt)("p",null,"Chaos Mesh provides the Chaos Dashboard component for visualized operations, which greatly simplifies Chaos experiments.You can manage and monitor a Chaos experiment directly through the visualization interface. For example, with a few clicks on the interface, you can define the scope of a Chaos experiment, specify the type of Chaos injection, define scheduling rules, and get the results of the Chaos experiment."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos workflow",src:a(52938).Z,width:"1892",height:"859"})),(0,s.kt)("h2",{id:"security-guarantee"},"Security guarantee"),(0,s.kt)("p",null,"Chaos Mesh manages permissions using the native ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC")," feature in Kubernetes."),(0,s.kt)("p",null,"You can freely create multiple roles based on your actual permission requirements, bind the roles to the username service account, and then generate the token corresponding to the service account.When you log into the Dashboard using this token, you can only perform Chaos experiments within the permissions given by the service account."),(0,s.kt)("p",null,"In addition, you can specify the namespaces that allow Chaos experiments by setting the namespace annotations, which further safeguards the control of Chaos experiments."))}p.isMDXComponent=!0},52938:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard-overview-445b086ab6dbbdf6525405e17c12782b.png"}}]);