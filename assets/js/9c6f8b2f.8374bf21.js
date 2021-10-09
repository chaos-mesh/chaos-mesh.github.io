"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5079],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=o(a),k=l,N=s["".concat(m,".").concat(k)]||s[k]||d[k]||r;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},77623:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],p={title:"Simulate File I/O Faults",sidebar_label:"Simulate File I/O Faults"},m=void 0,o={unversionedId:"simulate-io-chaos-on-kubernetes",id:"version-2.0.2/simulate-io-chaos-on-kubernetes",isDocsHomePage:!1,title:"Simulate File I/O Faults",description:"This document describes how to create IOChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-2.0.2/simulate-io-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-io-chaos-on-kubernetes",permalink:"/docs/simulate-io-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.2/simulate-io-chaos-on-kubernetes.md",tags:[],version:"2.0.2",frontMatter:{title:"Simulate File I/O Faults",sidebar_label:"Simulate File I/O Faults"},sidebar:"version-2.0.2/docs",previous:{title:"Simulate Stress Scenarios",permalink:"/docs/simulate-heavy-stress-on-kubernetes"},next:{title:"Simulate DNS Faults",permalink:"/docs/simulate-dns-chaos-on-kubernetes"}},u=[{value:"IOChaos introduction",id:"iochaos-introduction",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[]},{value:"Create experiments using the YAML files",id:"create-experiments-using-the-yaml-files",children:[{value:"Latency example",id:"latency-example",children:[]},{value:"Fault example",id:"fault-example",children:[]},{value:"attrOverride example",id:"attroverride-example",children:[]},{value:"Mistake example",id:"mistake-example",children:[]},{value:"Field description",id:"field-description",children:[]}]},{value:"Local debugging",id:"local-debugging",children:[]},{value:"Appendix A: methods type",id:"appendix-a-methods-type",children:[]},{value:"Appendix B: Common Error Numbers",id:"appendix-b-common-error-numbers",children:[]}],d={toc:u};function s(t){var e=t.components,p=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to create IOChaos experiments in Chaos Mesh."),(0,r.kt)("h2",{id:"iochaos-introduction"},"IOChaos introduction"),(0,r.kt)("p",null,"IOChaos is a type of fault in Chaos Mesh. By creating an IOChaos experiment, you can simulate a scenario of file system fault. Currently, IOChaos supports the following fault types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latency"),": delays file system calls"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fault"),": returns an error for filesystem calls"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attrOverride"),": modifies file properties"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mistake"),": makes the file read or write a wrong value")),(0,r.kt)("p",null,"For specific features, refer to ",(0,r.kt)("a",{parentName:"p",href:"#create-experiments-using-the-yaml-files"},"Create experiments using the YAML files"),"."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before creating an IOChaos experiment, make sure there is no Control Manager of Chaos Mesh running on the target Pod.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"IOChaos may damage your data. Use IOChaos ",(0,r.kt)("strong",{parentName:"p"},"with caution")," in the production environment."))),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Create a New Experiment",src:a(72205).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"FILE SYSTEM INJECTION")," and select a specific fault type, such as ",(0,r.kt)("strong",{parentName:"p"},"LATENCY"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"ioChaos Experiments",src:a(6283).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experiment Information",src:a(74021).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,r.kt)("h2",{id:"create-experiments-using-the-yaml-files"},"Create experiments using the YAML files"),(0,r.kt)("h3",{id:"latency-example"},"Latency example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"li"},"io-latency.yaml")," file, as shown below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-latency-example\n  namespace: chaos-testing\nspec:\n  action: latency\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: '/var/run/etcd/**/*'\n  delay: '100ms'\n  percent: 50\n  duration: '400s'\n")),(0,r.kt)("p",null,"In this configuration example, Chaos Mesh injects a delay into the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/etcd")," and causes latency of 100 milliseconds to all file system operations (including read, writing, list contents, and so on) in this directory."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," to create an experiment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./io-latency.yaml\n")),(0,r.kt)("h3",{id:"fault-example"},"Fault example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"li"},"io-fault.yaml")," file, as shown below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-fault-example\n  namespace: chaos-testing\nspec:\n  action: fault\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  errno: 5\n  percent: 50\n  duration: '400s'\n")),(0,r.kt)("p",null,"In this example, Chaos Mesh injects a file fault into the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/etcd"),", which gives a 50% probability of failure in all file system operations under this directory and returns error code 5 (Input/output error)."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," to create an experiment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./io-fault.yaml\n")),(0,r.kt)("h3",{id:"attroverride-example"},"attrOverride example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"li"},"io-attr.yaml")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-attr-example\n  namespace: chaos-testing\nspec:\n  action: attrOverride\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  attr:\n    perm: 72\n  percent: 10\n  duration: '400s'\n")),(0,r.kt)("p",null,"In this configuration example, Chaos Mesh injects ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/etcd")," directories ",(0,r.kt)("inlineCode",{parentName:"p"},"attrOverride")," fault, giving a 10% probability that all file system operations in this directory will change the target file permissions to 72 (110 in octal), which will allow files to be executed only by the owner and their group and not authorized to perform other actions."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," to create an experiment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./io-attr.yaml\n")),(0,r.kt)("h3",{id:"mistake-example"},"Mistake example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"li"},"io-mistake.yaml")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh. rg/v1alpha1\nind: IOChaos\nmetadata:\n  name: io-mistake-example\n  namespace: chaos-testing\nspecial:\n  action: mistake\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  mistake:\n    filling: zero\n    maxOccurrences: 1\n    maxLength: 10\n  methods:\n    - READ\n    - WRITE\n  percent: 10\n  duration: '400s'\n")),(0,r.kt)("p",null,"In this configuration example, Chaos Mesh injects read and write faults into the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/etcd"),", which gives a 10% probability of failure in the read and write operations under this directory. During this process, one random position with a maximum length of 10 bytes will be replaced with 0 bytes."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," to create an experiment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./io-mistake.yaml\n")),(0,r.kt)("h3",{id:"field-description"},"Field description"),(0,r.kt)("h4",{id:"general-fields"},"General fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the specific type of faults. Only latency, fault, attrOverride, and mistake are supported."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"latency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a Pod at random), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of the eligible Pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of the eligible Pods)."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target Pod. For details, refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/define-chaos-experiment-scope"},"Define the experiment scope"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volumePath"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The mount point of volume in the target container. Must be the root directory of the mount."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"/var/run/etcd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The valid range of fault injections, either a wildcard or a single file."),(0,r.kt)("td",{parentName:"tr",align:null},"Valid for all files by default"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"/var/run/etcd/","*",(0,r.kt)("em",{parentName:"td"},"/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"methods"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the file system call that requires injecting fault. For more information about supported types, refer to ","[Appendix A]","(#appendix-a: methods-type)."),(0,r.kt)("td",{parentName:"tr",align:null},"All Types"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"READ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"percent"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Probability of failure per operation, in %."),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContainerName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the name of the container into which the fault is injected."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the duration of the experiment."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"30s")))),(0,r.kt)("h4",{id:"fields-related-to-action"},"Fields related to action"),(0,r.kt)("p",null,"The following are specific information about fields corresponding to action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"latency"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific delay time"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"100 ms"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fault"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errno"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"returned error number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"22")))),(0,r.kt)("p",{parentName:"li"},"For common error numbers, see ",(0,r.kt)("a",{parentName:"p",href:"#appendix-b:common-error-numbers"},"Appendix B"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"attrOverride"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attr"),(0,r.kt)("td",{parentName:"tr",align:null},"AttrOverrideSpec"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific property override rules"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"As follows")))),(0,r.kt)("p",{parentName:"li"},"AttrOverrideSpec is defined as follows:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ino"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"ino number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"File size"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of blocks that the file uses"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atime"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeSpec"),(0,r.kt)("td",{parentName:"tr",align:null},"Last access time"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mtime"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeSpec"),(0,r.kt)("td",{parentName:"tr",align:null},"Last modified time"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ctime"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeSpec"),(0,r.kt)("td",{parentName:"tr",align:null},"Last status change time"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kind"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"File type, see ",(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/fuser/0.7.0/fuser/enum.FileType.html"},"fuser::FileType")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"perm"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"File permissions in decimal"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"72 (110 in octal)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nlink"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of hard links"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uid"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"User ID of the owner"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gid"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Group ID of the owner"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rdev"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Device ID"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",{parentName:"li"},"TimeSpec is defined as follows:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sec"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp in seconds"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nsec"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp in nanoseconds"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",{parentName:"li"},"For the specific meaning of parameters, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/lstat.2.html"},"man stat"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"mistake"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mistake"),(0,r.kt)("td",{parentName:"tr",align:null},"MistakeSpec"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific error rules"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",{parentName:"li"},"MistakeSpec is defined as follows:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filling"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The wrong data to be filled. Only zero (fill 0) or random (fill random bytes) are supported."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxOccurrences"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of errors in each operation."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum length of each error (in bytes)."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))))),(0,r.kt)("p",null,"::warning It is suggested that you only use mistake on READ and WRITE file system calls. Using mistake on other file system calls may lead to unexpected consequences, including but not limited to file system damage and program crashes. :::"),(0,r.kt)("h2",{id:"local-debugging"},"Local debugging"),(0,r.kt)("p",null,"If you are not sure about the effect of a certain Chaos, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/toda"},"toda")," to test the feature locally. Chaos Mesh also uses toda to implement IOChaos."),(0,r.kt)("h2",{id:"appendix-a-methods-type"},"Appendix A: methods type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lookup"),(0,r.kt)("li",{parentName:"ul"},"forget"),(0,r.kt)("li",{parentName:"ul"},"getattr"),(0,r.kt)("li",{parentName:"ul"},"setattr"),(0,r.kt)("li",{parentName:"ul"},"readlink"),(0,r.kt)("li",{parentName:"ul"},"mknod"),(0,r.kt)("li",{parentName:"ul"},"mkdir"),(0,r.kt)("li",{parentName:"ul"},"unlink"),(0,r.kt)("li",{parentName:"ul"},"rmdir"),(0,r.kt)("li",{parentName:"ul"},"symlink"),(0,r.kt)("li",{parentName:"ul"},"rename"),(0,r.kt)("li",{parentName:"ul"},"link"),(0,r.kt)("li",{parentName:"ul"},"open"),(0,r.kt)("li",{parentName:"ul"},"read"),(0,r.kt)("li",{parentName:"ul"},"write"),(0,r.kt)("li",{parentName:"ul"},"flush"),(0,r.kt)("li",{parentName:"ul"},"release"),(0,r.kt)("li",{parentName:"ul"},"fsync"),(0,r.kt)("li",{parentName:"ul"},"opendir"),(0,r.kt)("li",{parentName:"ul"},"readdir"),(0,r.kt)("li",{parentName:"ul"},"releasedir"),(0,r.kt)("li",{parentName:"ul"},"fsyncdir"),(0,r.kt)("li",{parentName:"ul"},"statfs"),(0,r.kt)("li",{parentName:"ul"},"setxattr"),(0,r.kt)("li",{parentName:"ul"},"getxattr"),(0,r.kt)("li",{parentName:"ul"},"listxattr"),(0,r.kt)("li",{parentName:"ul"},"removexatr"),(0,r.kt)("li",{parentName:"ul"},"access"),(0,r.kt)("li",{parentName:"ul"},"create"),(0,r.kt)("li",{parentName:"ul"},"getlk"),(0,r.kt)("li",{parentName:"ul"},"setlk"),(0,r.kt)("li",{parentName:"ul"},"bmap")),(0,r.kt)("p",null,"For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/fuser/0.7.0/fuser/trait.Filesystem.html"},"fuser::Filesystem"),"."),(0,r.kt)("h2",{id:"appendix-b-common-error-numbers"},"Appendix B: Common Error Numbers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1: Operation not permitted"),(0,r.kt)("li",{parentName:"ul"},"2: No such file or directory"),(0,r.kt)("li",{parentName:"ul"},"5: I/O error"),(0,r.kt)("li",{parentName:"ul"},"6: No such device or address"),(0,r.kt)("li",{parentName:"ul"},"12: Out of memory"),(0,r.kt)("li",{parentName:"ul"},"16: Device or resource busy"),(0,r.kt)("li",{parentName:"ul"},"17: File exists"),(0,r.kt)("li",{parentName:"ul"},"20: Not a directory"),(0,r.kt)("li",{parentName:"ul"},"22: Invalid argument"),(0,r.kt)("li",{parentName:"ul"},"24: Too many open files"),(0,r.kt)("li",{parentName:"ul"},"28: No space left on device")),(0,r.kt)("p",null,"For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/torvalds/linux/master/include/uapi/asm-generic/errno-base.h"},"Linux source code"),"."))}s.isMDXComponent=!0},72205:function(t,e,a){e.Z=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},74021:function(t,e,a){e.Z=a.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"},6283:function(t,e,a){e.Z=a.p+"assets/images/iochaos-exp-f5c4d602a5bc4060bbe7f84932010500.png"}}]);