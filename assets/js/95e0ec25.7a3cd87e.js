"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[478],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(a),f=r,m=h["".concat(l,".").concat(f)]||h[f]||p[f]||s;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70327:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Basic Features"},l=void 0,u={unversionedId:"basic-features",id:"basic-features",isDocsHomePage:!1,title:"Basic Features",description:"This document describes the basic features of Chaos Mesh, including fault injection, Chaos workflows, visualized operations, and security guarantees.",source:"@site/docs/basic-features.md",sourceDirName:".",slug:"/basic-features",permalink:"/docs/next/basic-features",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/basic-features.md",tags:[],version:"current",frontMatter:{title:"Basic Features"},sidebar:"docs",previous:{title:"Chaos Mesh Overview",permalink:"/docs/next/"},next:{title:"Quick Start (Test Recommended)",permalink:"/docs/next/quick-start"}},c=[{value:"Fault injection",id:"fault-injection",children:[],level:2},{value:"Chaos workflows",id:"chaos-workflows",children:[],level:2},{value:"Visualized operations",id:"visualized-operations",children:[],level:2},{value:"Security guarantee",id:"security-guarantee",children:[],level:2}],p={toc:c};function h(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes the basic features of Chaos Mesh, including ",(0,s.kt)("a",{parentName:"p",href:"#fault-injection"},"fault injection"),", ",(0,s.kt)("a",{parentName:"p",href:"#chaos-workflows"},"Chaos workflows"),", ",(0,s.kt)("a",{parentName:"p",href:"#visualized-operations"},"visualized operations"),", and ",(0,s.kt)("a",{parentName:"p",href:"#security-guarantees"},"security guarantees"),"."),(0,s.kt)("h2",{id:"fault-injection"},"Fault injection"),(0,s.kt)("p",null,"Fault injection is the key of Chaos experiments. Chaos Mesh covers a full range of faults that might occur in a distributed system, and provides three comprehensive and fine-grained fault types: basic resource faults, platform faults, and application-layer faults."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Basic resource faults:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-pod-chaos-on-kubernetes"},"PodChaos"),": simulates Pod failures, such as Pod node restart, Pod's persistent unavailablility, and certain container failures in a specific Pod."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-network-chaos-on-kubernetes"},"NetworkChaos"),": simulates network failures, such as network latency, packet loss, packet disorder, and network partitions."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-dns-chaos-on-kubernetes"},"DNSChaos"),": simulates DNS failures, such as the parsing failure of DNS domain name and the wrong IP address returned."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-http-chaos-on-kubernetes"},"HTTPChaos"),": simulates HTTP communication failures, such as HTTP communication latency."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-heavy-stress-on-kubernetes"},"StressChaos"),": simulates CPU race or memory race."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-io-chaos-on-kubernetes"},"IOChaos"),": simulates the I/O failure of an application file, such as I/O delays, read and write failures."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-time-chaos-on-kubernetes"},"TimeChaos"),": simulates the time jump exception."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-kernel-chaos-on-kubernetes"},"KernelChaos"),": simulates kernel failures, such as an exception of the application memory allocation."))),(0,s.kt)("li",{parentName:"ul"},"Platform faults:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-aws-chaos"},"AWSChaos"),": simulates AWS platform failures, such as the AWS node restart."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-gcp-chaos"},"GCPChaos"),": simulates GCP platform failures, such as the GCP node restart."))),(0,s.kt)("li",{parentName:"ul"},"Application faults:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/simulate-jvm-application-chaos"},"JVMChaos"),": simulates JVM application failures, such as the function call delay.")))),(0,s.kt)("h2",{id:"chaos-workflows"},"Chaos workflows"),(0,s.kt)("p",null,"A Chaos workflow includes a set of Chaos experiments and an application status check, so you can complete the entire process of a Chaos engineering project on the platform."),(0,s.kt)("p",null,"Chaos workflows enable you to perform a series of Chaos experiments, keep expanding the explosion radius (including the scope of attacks), and increase the failure types. After running a Chaos workflow, you can easily view the current state of the application using Chaos Mesh and determine whether to perform follow-up experiments.At the same time, to reduce the cost of maintaining Chaos workflows, you can keep updating and accumulating the Chaos experiment workflows, and apply the existing experiments to other workflows."),(0,s.kt)("p",null,"Currently, Chaos workflows provide the following features:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Orchestrate serial Chaos experiments"),(0,s.kt)("li",{parentName:"ul"},"Orchestrate parallel Chaos experiments"),(0,s.kt)("li",{parentName:"ul"},"Support checking experimental status and results"),(0,s.kt)("li",{parentName:"ul"},"Support pausing a Chaos experiment"),(0,s.kt)("li",{parentName:"ul"},"Support using YAML files to define and manage Chaos workflows"),(0,s.kt)("li",{parentName:"ul"},"Support using the web UI to define and manage Chaos workflows")),(0,s.kt)("p",null,"For the configuration of a specific workflow, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/create-chaos-mesh-workflow"},"Create Chaos Mesh workflow"),"."),(0,s.kt)("h2",{id:"visualized-operations"},"Visualized operations"),(0,s.kt)("p",null,"Chaos Mesh provides the Chaos Dashboard component for visualized operations, which greatly simplifies Chaos experiments.You can manage and monitor a Chaos experiment directly through the visualization interface. For example, with a few clicks on the interface, you can define the scope of a Chaos experiment, specify the type of Chaos injection, define scheduling rules, and get the results of the Chaos experiment."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos workflow",src:a(90918).Z})),(0,s.kt)("h2",{id:"security-guarantee"},"Security guarantee"),(0,s.kt)("p",null,"Chaos Mesh manages permissions using the native ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC")," feature in Kubernetes."),(0,s.kt)("p",null,"You can freely create multiple roles based on your actual permission requirements, bind the roles to the username service account, and then generate the token corresponding to the service account.When you log into the Dashboard using this token, you can only perform Chaos experiments within the permissions given by the service account."),(0,s.kt)("p",null,"In addition, you can specify the namespaces that allow Chaos experiments by setting the namespace annotations, which further safeguards the control of Chaos experiments."))}h.isMDXComponent=!0},90918:function(e,t,a){t.Z=a.p+"assets/images/dashboard-overview-445b086ab6dbbdf6525405e17c12782b.png"}}]);