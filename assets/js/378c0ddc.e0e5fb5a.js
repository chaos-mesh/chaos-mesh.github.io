"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[72226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));const n={title:"Simulate Faults on Physical Machines"},i=void 0,s={unversionedId:"simulate-physical-machine-chaos",id:"version-2.1.7/simulate-physical-machine-chaos",title:"Simulate Faults on Physical Machines",description:"This document describes how to create PhysicalMachineChaos (physical machine chaos) experiments in Chaos Mesh to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines.",source:"@site/versioned_docs/version-2.1.7/simulate-physical-machine-chaos.md",sourceDirName:".",slug:"/simulate-physical-machine-chaos",permalink:"/docs/2.1.7/simulate-physical-machine-chaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.7/simulate-physical-machine-chaos.md",tags:[],version:"2.1.7",frontMatter:{title:"Simulate Faults on Physical Machines"},sidebar:"version-2.1.7/docs",previous:{title:"Chaosd Introduction",permalink:"/docs/2.1.7/chaosd-overview"},next:{title:"Simulate Process Faults",permalink:"/docs/2.1.7/simulate-process-chaos-in-physical-nodes"}},l={},c=[{value:"Introduction to PhysicalMachineChaos",id:"introduction-to-physicalmachinechaos",level:2},{value:"Deploy Chaosd server",id:"deploy-chaosd-server",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using an YAML file",id:"create-experiments-using-an-yaml-file",level:2},{value:"Configuration description",id:"configuration-description",level:3},{value:"CPU stress",id:"cpu-stress",level:4},{value:"Memory stress",id:"memory-stress",level:4},{value:"Disk read load",id:"disk-read-load",level:4},{value:"Disk write load",id:"disk-write-load",level:4},{value:"Disk fill",id:"disk-fill",level:4},{value:"Network corruption",id:"network-corruption",level:4},{value:"Network latency",id:"network-latency",level:4},{value:"Network duplication",id:"network-duplication",level:4},{value:"Network loss",id:"network-loss",level:4},{value:"Network partition",id:"network-partition",level:4},{value:"DNS fault",id:"dns-fault",level:4},{value:"Process fault",id:"process-fault",level:4},{value:"Throw custom exceptions for JVM applications",id:"throw-custom-exceptions-for-jvm-applications",level:4},{value:"Increase method latency for JVM applications",id:"increase-method-latency-for-jvm-applications",level:4},{value:"Modify return values of methods for JVM applications",id:"modify-return-values-of-methods-for-jvm-applications",level:4},{value:"Trigger garbage collection for JVM applications",id:"trigger-garbage-collection-for-jvm-applications",level:4},{value:"Trigger faults using Byteman configuration files for JVM applications",id:"trigger-faults-using-byteman-configuration-files-for-jvm-applications",level:4},{value:"Time offset",id:"time-offset",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to create PhysicalMachineChaos (physical machine chaos) experiments in Chaos Mesh to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines."),(0,r.kt)("h2",{id:"introduction-to-physicalmachinechaos"},"Introduction to PhysicalMachineChaos"),(0,r.kt)("p",null,"You can use PhysicalMachineChaos to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines."),(0,r.kt)("h2",{id:"deploy-chaosd-server"},"Deploy Chaosd server"),(0,r.kt)("p",null,"Before creating PhysicalMachineChaos experiments using Chaos Mesh, you need to deploy Chaosd in service mode to all physical or virtual machines that are going to be injected with faults. For the deployment method of Chaosd, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.1.7/chaosd-overview#download-and-deploy"},"Download and deploy Chaosd"),"."),(0,r.kt)("p",null,"After the deployment is complete, run the following command to start Chaosd in service mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using Chaos Mesh v2.1.0, you need to deploy Chaosd ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/releases/tag/v1.1.0"},"v1.1.0"),".")),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create a new experiment",src:a(75633).Z,width:"959",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"PHYSIC")," in ",(0,r.kt)("strong",{parentName:"p"},"Experiment Type")," and choose a specific type of the experiment, such as ",(0,r.kt)("strong",{parentName:"p"},"NETWORK ATTACK"),". Then, choose a specific behavior and fill out the corresponding configurations:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"PhysicalMachineChaos experiment",src:a(27417).Z,width:"1730",height:"1264"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information to specify the range and the planned duration of the experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"PhysicalMachineChaos experiment information",src:a(94821).Z,width:"1858",height:"1362"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment."))),(0,r.kt)("h2",{id:"create-experiments-using-an-yaml-file"},"Create experiments using an YAML file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Write the experimental configurations to the "physicalmachine.yaml" file. For example:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PhysicalMachineChaos\nmetadata:\n  name: physical-network-delay\n  namespace: chaos-testing\nspec:\n  action: network-delay\n  address:\n    - 172.16.112.130:31767\n  network-delay:\n    device: ens33\n    ip-address: 140.82.112.3\n    latency: 1000ms\n  duration: '10m'\n")),(0,r.kt)("p",{parentName:"li"},"The experimental configurations above send HTTP requests to Chaosd service in the specified physical machines or virtual machines to trigger network latency experiments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the experiment using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". The command is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f physicalmachine.yaml\n")))),(0,r.kt)("h3",{id:"configuration-description"},"Configuration description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Defines the actions of physical machines faults, optional values are as follows: "stress-cpu", "stress-mem", "disk-read-payload", "disk-write-payload", "disk-fill", "network-corrupt", "network-duplicate", "network-loss", "network-delay", "network-partition", "network-dns", "process", "jvm-exception", "jvm-gc", "jvm-latency", "jvm-return", "jvm-stress", "jvm-rule-data", "clock"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"stress-cpu"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects the address of Chaosd service to inject faults"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},'["192.168.0.10:31767"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the duration of experiments"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30s")))),(0,r.kt)("p",null,"Each fault action has its own specific configurations. The following section introduces various fault types and their corresponding configuration methods."),(0,r.kt)("h4",{id:"cpu-stress"},"CPU stress"),(0,r.kt)("p",null,'To simulate a CPU stress scenario, you need to set the action to "stress-cpu". For the corresponding configurations, refer to Parameters of simulating CPU stress.'),(0,r.kt)("h4",{id:"memory-stress"},"Memory stress"),(0,r.kt)("p",null,'To simulate a memory stress scenario, you need to set the action to "stress-mem". For the corresponding configurations, refer to Parameters of simulating memory stress.'),(0,r.kt)("h4",{id:"disk-read-load"},"Disk read load"),(0,r.kt)("p",null,'To simulate a disk read load scenario, you need to set the action to "disk-read-payload". For the corresponding configurations, refer to Parameters of simulating disk read load.'),(0,r.kt)("h4",{id:"disk-write-load"},"Disk write load"),(0,r.kt)("p",null,'To simulate a disk write load scenario, you need to set the action to "disk-write-payload". For the corresponding configurations, refer to Parameters of simulating disk write load.'),(0,r.kt)("h4",{id:"disk-fill"},"Disk fill"),(0,r.kt)("p",null,'To simulate a disk fill scenario, you need to set the action to "disk-fill". For the corresponding configurations, refer to Parameters of simulating disk fill.'),(0,r.kt)("h4",{id:"network-corruption"},"Network corruption"),(0,r.kt)("p",null,'To simulate a network corruption scenario, you need to set the action to "network-corrupt". For the corresponding configurations, refer to Parameters of simulating network corruption.'),(0,r.kt)("h4",{id:"network-latency"},"Network latency"),(0,r.kt)("p",null,'To simulate a network latency scenario, you need to set the action to "network-delay". For the corresponding configurations, refer to Parameters of simulating network latency.'),(0,r.kt)("h4",{id:"network-duplication"},"Network duplication"),(0,r.kt)("p",null,'To simulate a network duplication scenario, you need to set the action to "network-duplicate". For the corresponding configurations, refer to Parameters of simulating network duplication.'),(0,r.kt)("h4",{id:"network-loss"},"Network loss"),(0,r.kt)("p",null,'To simulate a network loss scenario, you need to set the action to "network-loss". For the corresponding configurations, refer to Parameters of simulating network loss.'),(0,r.kt)("h4",{id:"network-partition"},"Network partition"),(0,r.kt)("p",null,'To simulate a network partition scenario, you need to set the action to "network-partition". For the corresponding configurations, refer to Parameters of simulating network partition.'),(0,r.kt)("h4",{id:"dns-fault"},"DNS fault"),(0,r.kt)("p",null,'To simulate a DNS fault scenario, you need to set the action to "network-dns". For the corresponding configurations, refer to Parameters of simulating DNS fault.'),(0,r.kt)("h4",{id:"process-fault"},"Process fault"),(0,r.kt)("p",null,'To simulate a process fault scenario, you need to set the action to "process". For the corresponding configurations, refer to Parameters of simulating process fault.'),(0,r.kt)("h4",{id:"throw-custom-exceptions-for-jvm-applications"},"Throw custom exceptions for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications throw custom exceptions, you need to set the action to "jvm-exception". For the corresponding configurations, refer to Parameters for throwing custom exceptions.'),(0,r.kt)("h4",{id:"increase-method-latency-for-jvm-applications"},"Increase method latency for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications increase method latency, you need to set the action to "jvm-latency". For the corresponding configurations, refer to Parameters for increasing method latency.'),(0,r.kt)("h4",{id:"modify-return-values-of-methods-for-jvm-applications"},"Modify return values of methods for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications modify return values of methods, you need to set the action to "jvm-return". For the corresponding configurations, refer to Parameters for modifying return values of a method.'),(0,r.kt)("h4",{id:"trigger-garbage-collection-for-jvm-applications"},"Trigger garbage collection for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications trigger garbage collection, you need to set the action to "jvm-gc". For the corresponding configurations, refer to Parameters for triggering garbage collection.'),(0,r.kt)("h4",{id:"trigger-faults-using-byteman-configuration-files-for-jvm-applications"},"Trigger faults using Byteman configuration files for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications trigger faults using Byteman configuration files, you need to set the action to "jvm-rule-data". For the corresponding configurations, refer to Parameters for triggering faults by setting Byteman configuration files.'),(0,r.kt)("h4",{id:"time-offset"},"Time offset"),(0,r.kt)("p",null,'To simulate a time offset scenario, you need to set the action to "clock". For the corresponding configurations, refer to Parameters of simulating time offset.'))}d.isMDXComponent=!0},75633:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},94821:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/physicalmachinechaos-exp-info-6bf01b809471eb5c369b149ca8bab573.png"},27417:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/physicalmachinechaos-exp-c601153f614a0dcd77569bf32905f6f7.png"}}]);