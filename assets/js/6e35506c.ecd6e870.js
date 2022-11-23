"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[50135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Simulate Network Faults"},i=void 0,o={unversionedId:"simulate-network-chaos-on-kubernetes",id:"version-2.3.3/simulate-network-chaos-on-kubernetes",title:"Simulate Network Faults",description:"This document describes how to simulate network faults using NetworkChaos in Chaos Mesh.",source:"@site/versioned_docs/version-2.3.3/simulate-network-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-network-chaos-on-kubernetes",permalink:"/docs/2.3.3/simulate-network-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/simulate-network-chaos-on-kubernetes.md",tags:[],version:"2.3.3",frontMatter:{title:"Simulate Network Faults"},sidebar:"docs",previous:{title:"Simulate Pod Faults",permalink:"/docs/2.3.3/simulate-pod-chaos-on-kubernetes"},next:{title:"Simulate Stress Scenarios",permalink:"/docs/2.3.3/simulate-heavy-stress-on-kubernetes"}},p={},d=[{value:"NetworkChaos introduction",id:"networkchaos-introduction",level:2},{value:"Notes",id:"notes",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using the YAML files",id:"create-experiments-using-the-yaml-files",level:2},{value:"Net emulation example",id:"net-emulation-example",level:3},{value:"Partition example",id:"partition-example",level:3},{value:"Bandwidth example",id:"bandwidth-example",level:3},{value:"Field description",id:"field-description",level:2},{value:"Description for <code>action</code>-related fields",id:"description-for-action-related-fields",level:3},{value:"delay",id:"delay",level:4},{value:"reorder",id:"reorder",level:4},{value:"loss",id:"loss",level:4},{value:"duplicate",id:"duplicate",level:4},{value:"corrupt",id:"corrupt",level:4},{value:"bandwidth",id:"bandwidth",level:4}],m={toc:d};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to simulate network faults using NetworkChaos in Chaos Mesh."),(0,r.kt)("h2",{id:"networkchaos-introduction"},"NetworkChaos introduction"),(0,r.kt)("p",null,"NetworkChaos is a fault type in Chaos Mesh. By creating a NetworkChaos experiment, you can simulate a network fault scenario for a cluster. Currently, NetworkChaos supports the following fault types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partition"),": network disconnection and partition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Net Emulation"),": poor network conditions, such as high delays, high packet loss rate, packet reordering, and so on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bandwidth"),": limit the communication bandwidth between nodes.")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Before creating NetworkChaos experiments, ensure the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"During the network injection process, make sure that the connection between Controller Manager and Chaos Daemon works, otherwise the NetworkChaos cannot be restored anymore."),(0,r.kt)("li",{parentName:"ol"},"If you want to simulate Net Emulation fault, make sure the NET_SCH_NETEM module is installed in the Linux kernel. If you are using CentOS, you can install the module through the kernel-modules-extra package. Most other Linux distributions have installed the module already by default.")),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Create Experiment",src:a(14186).Z,width:"959",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"NETWORK ATTACK")," and select a specific behavior, such as ",(0,r.kt)("strong",{parentName:"p"},"LOSS"),". Then fill out specific configuration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"NetworkChaos Experiments",src:a(30973).Z,width:"2018",height:"1480"})),(0,r.kt)("p",{parentName:"li"},"For details of specific configuration fields, refer to ","[Field description]","(#field description).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experiment Information",src:a(53307).Z,width:"973",height:"442"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,r.kt)("h2",{id:"create-experiments-using-the-yaml-files"},"Create experiments using the YAML files"),(0,r.kt)("h3",{id:"net-emulation-example"},"Net emulation example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"network-delay.yaml")," file, as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: delay\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n")),(0,r.kt)("p",{parentName:"li"},"This configuration causes a latency of 10 milliseconds in the network connections of the target Pods. In addition to latency injection, Chaos Mesh supports packet loss and packet reordering injection. For details, see ",(0,r.kt)("a",{parentName:"p",href:"#field-description"},"field description"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./network-delay.yaml\n")))),(0,r.kt)("h3",{id:"partition-example"},"Partition example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"network-partition.yaml")," file, as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: partition\nspec:\n  action: partition\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  direction: to\n  target:\n    mode: all\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'app2'\n")),(0,r.kt)("p",{parentName:"li"},"This configuration blocks the connection created from ",(0,r.kt)("inlineCode",{parentName:"p"},"app1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"app2"),". The value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"direction")," field can be ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"both"),". For details, refer to ",(0,r.kt)("a",{parentName:"p",href:"#field-description"},"Field description"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./network-partition.yaml\n")))),(0,r.kt)("h3",{id:"bandwidth-example"},"Bandwidth example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"network-bandwidth.yaml")," file, as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: bandwidth\nspec:\n  action: bandwidth\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  bandwidth:\n    rate: '1mbps'\n    limit: 20971520\n    buffer: 10000\n")),(0,r.kt)("p",{parentName:"li"},"This configuration limits the bandwidth of ",(0,r.kt)("inlineCode",{parentName:"p"},"app1")," to 1 mbps.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./network-bandwidth.yaml\n")))),(0,r.kt)("h2",{id:"field-description"},"Field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the specific fault type. Available types include: ",(0,r.kt)("inlineCode",{parentName:"td"},"netem"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"delay")," (network delay), ",(0,r.kt)("inlineCode",{parentName:"td"},"loss")," (packet loss), ",(0,r.kt)("inlineCode",{parentName:"td"},"duplicate")," (packet duplicating), ",(0,r.kt)("inlineCode",{parentName:"td"},"corrupt")," (packet corrupt), ",(0,r.kt)("inlineCode",{parentName:"td"},"partition")," (network partition), and ",(0,r.kt)("inlineCode",{parentName:"td"},"bandwidth")," (network bandwidth limit).After you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"action")," field, refer to ",(0,r.kt)("a",{parentName:"td",href:"#description-for-action-related-fields"},"Description for ",(0,r.kt)("inlineCode",{parentName:"a"},"action"),"-related fields")," for other necessary field configuration."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Partition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"Selector"),(0,r.kt)("td",{parentName:"tr",align:null},"Used in combination with direction, making Chaos only effective for some packets."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direction"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the direction of ",(0,r.kt)("inlineCode",{parentName:"td"},"target")," packets. Available vaules include ",(0,r.kt)("inlineCode",{parentName:"td"},"from")," (the packets from ",(0,r.kt)("inlineCode",{parentName:"td"},"target"),"), ",(0,r.kt)("inlineCode",{parentName:"td"},"to")," (the packets to ",(0,r.kt)("inlineCode",{parentName:"td"},"target"),"), and ",(0,r.kt)("inlineCode",{parentName:"td"},"both")," ( the packets from or to ",(0,r.kt)("inlineCode",{parentName:"td"},"target"),"). This parameter makes Chaos only take effect for a specific direction of packets."),(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"both")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a parameter for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the target Pod. For details, refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.3/define-chaos-experiment-scope"},"Define the experiment scope"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalTargets"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the network targets except for Kubernetes, which can be IPv4 addresses or domains. This parameter only works with ",(0,r.kt)("inlineCode",{parentName:"td"},"direction: to"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.1.1, ",(0,r.kt)("a",{parentName:"td",href:"http://www.google.com"},"www.google.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"device"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the affected network interface"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},'"eth0"')))),(0,r.kt)("h3",{id:"description-for-action-related-fields"},"Description for ",(0,r.kt)("inlineCode",{parentName:"h3"},"action"),"-related fields"),(0,r.kt)("p",null,"For the Net Emulation and Bandwidth fault types, you can further configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," related parameters according to the following description."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Net Emulation type: ",(0,r.kt)("inlineCode",{parentName:"li"},"delay"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"loss"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"duplicated"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"corrupt")),(0,r.kt)("li",{parentName:"ul"},"Bandwidth type: ",(0,r.kt)("inlineCode",{parentName:"li"},"bandwidth"))),(0,r.kt)("h4",{id:"delay"},"delay"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," means simulating network delay fault. You can also configure the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latency"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the network latency"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"2ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the correlation between the current latency and the previous one. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jitter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the range of the network latency"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reorder"),(0,r.kt)("td",{parentName:"tr",align:null},"Reorder(#Reorder)"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the status of network packet reordering"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The computational model for ",(0,r.kt)("inlineCode",{parentName:"p"},"correlation")," is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a random number whose distribution is related to the previous value:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"rnd = value * (1-corr) + last_rnd * corr\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"rnd")," is the random number. ",(0,r.kt)("inlineCode",{parentName:"p"},"corr")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlation")," you fill out before.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use this random number to determine the delay of the current packet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"((rnd % (2 * sigma)) + mu) - sigma\n")),(0,r.kt)("p",{parentName:"li"},"In the above command, ",(0,r.kt)("inlineCode",{parentName:"p"},"sigma")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"jitter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mu")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"latency"),"."))),(0,r.kt)("h4",{id:"reorder"},"reorder"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"reorder")," means simulating network packet reordering fault. You can also configure the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reorder"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the probability to reorder"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the correlation between this time's length of delay time and the previous time's length of delay time. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gap"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the gap before and after packet reordering"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"5")))),(0,r.kt)("h4",{id:"loss"},"loss"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"loss")," means simulating packet loss fault. You can also configure the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loss"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the probability of packet loss. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the correlation between the probability of current packet loss and the previous time's packet loss. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")))),(0,r.kt)("h4",{id:"duplicate"},"duplicate"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"duplicate"),", meaning simulating package duplication. At this point, you can also set the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duplicate"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the probability of packet duplicating. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the correlation between the probability of current packet duplicating and the previous time's packet duplicating. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")))),(0,r.kt)("h4",{id:"corrupt"},"corrupt"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"corrupt")," means simulating package corruption fault. You can also configure the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"corrupt"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the probability of packet corruption. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the correlation between the probability of current packet corruption and the previous time's packet corruption. Range of value: ","[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"50")))),(0,r.kt)("p",null,"For occasional events such as ",(0,r.kt)("inlineCode",{parentName:"p"},"reorder"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"loss"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"duplicate"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"corrupt"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlation")," is more complicated. For specific model description, refer to ",(0,r.kt)("a",{parentName:"p",href:"http://web.archive.org/web/20200120162102/http://netgroup.uniroma2.it/twiki/bin/view.cgi/Main/NetemCLG"},"NetemCLG"),"."),(0,r.kt)("h4",{id:"bandwidth"},"bandwidth"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"bandwidth")," means simulating bandwidth limit fault. You also need to configure the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rate"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the rate of bandwidth limit"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"1mbps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the number of bytes waiting in queue"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the maximum number of bytes that can be sent instantaneously"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"peakrate"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the maximum consumption of ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket")," (usually not set)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minburst"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the size of ",(0,r.kt)("inlineCode",{parentName:"td"},"peakrate bucket")," (usually not set)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"For more details of these fields, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man8/tc-tbf.8.html"},"tc-tbf document"),". The limit is suggested to set to at least ",(0,r.kt)("inlineCode",{parentName:"p"},"2 * rate * latency"),", where the ",(0,r.kt)("inlineCode",{parentName:"p"},"latency")," is the estimated latency between source and target, and it can be estimated through ",(0,r.kt)("inlineCode",{parentName:"p"},"ping")," command. Too small ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," can cause high loss rate and impact the throughput of the tcp connection."))}s.isMDXComponent=!0},14186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},53307:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"},30973:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/networkchaos-exp-bdb9cf9dc1cb7bf48717ed428ed8d8a5.png"}}]);