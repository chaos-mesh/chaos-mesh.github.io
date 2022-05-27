"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6788],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=i,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66501:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={title:"Simulate Faults on Physical Machines"},s=void 0,c={unversionedId:"simulate-physical-machine-chaos",id:"version-2.2.0/simulate-physical-machine-chaos",isDocsHomePage:!1,title:"Simulate Faults on Physical Machines",description:"This document describes how to create PhysicalMachineChaos (physical machine chaos) experiments in Chaos Mesh to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines.",source:"@site/versioned_docs/version-2.2.0/simulate-physical-machine-chaos.md",sourceDirName:".",slug:"/simulate-physical-machine-chaos",permalink:"/docs/simulate-physical-machine-chaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.2.0/simulate-physical-machine-chaos.md",tags:[],version:"2.2.0",frontMatter:{title:"Simulate Faults on Physical Machines"},sidebar:"version-2.2.0/docs",previous:{title:"Chaosd Introduction",permalink:"/docs/chaosd-overview"},next:{title:"Simulate Process Faults",permalink:"/docs/simulate-process-chaos-in-physical-nodes"}},d=[{value:"Introduction to PhysicalMachineChaos",id:"introduction-to-physicalmachinechaos",children:[],level:2},{value:"Deploy Chaosd server",id:"deploy-chaosd-server",children:[],level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[],level:2},{value:"Create experiments using an YAML file",id:"create-experiments-using-an-yaml-file",children:[{value:"Configuration description",id:"configuration-description",children:[{value:"CPU stress",id:"cpu-stress",children:[],level:4},{value:"Memory stress",id:"memory-stress",children:[],level:4},{value:"Disk read load",id:"disk-read-load",children:[],level:4},{value:"Disk write load",id:"disk-write-load",children:[],level:4},{value:"Disk fill",id:"disk-fill",children:[],level:4},{value:"Network corruption",id:"network-corruption",children:[],level:4},{value:"Network latency",id:"network-latency",children:[],level:4},{value:"Network duplication",id:"network-duplication",children:[],level:4},{value:"Network loss",id:"network-loss",children:[],level:4},{value:"Network partition",id:"network-partition",children:[],level:4},{value:"DNS fault",id:"dns-fault",children:[],level:4},{value:"Process fault",id:"process-fault",children:[],level:4},{value:"Throw custom exceptions for JVM applications",id:"throw-custom-exceptions-for-jvm-applications",children:[],level:4},{value:"Increase method latency for JVM applications",id:"increase-method-latency-for-jvm-applications",children:[],level:4},{value:"Modify return values of methods for JVM applications",id:"modify-return-values-of-methods-for-jvm-applications",children:[],level:4},{value:"Trigger garbage collection for JVM applications",id:"trigger-garbage-collection-for-jvm-applications",children:[],level:4},{value:"Trigger faults using Byteman configuration files for JVM applications",id:"trigger-faults-using-byteman-configuration-files-for-jvm-applications",children:[],level:4},{value:"Time offset",id:"time-offset",children:[],level:4}],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to create PhysicalMachineChaos (physical machine chaos) experiments in Chaos Mesh to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines."),(0,r.kt)("h2",{id:"introduction-to-physicalmachinechaos"},"Introduction to PhysicalMachineChaos"),(0,r.kt)("p",null,"You can use PhysicalMachineChaos to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines. Before using PhysicalMachineChaos provided by Chaos Mesh, you need to deploy Chaosd in your physical or virtual machines. The version mapping between Chaos Mesh and Chaosd is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Chaos Mesh version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Chaosd version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"v2.1.x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v1.1.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"v2.2.x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v1.2.x")))),(0,r.kt)("h2",{id:"deploy-chaosd-server"},"Deploy Chaosd server"),(0,r.kt)("p",null,"Before creating PhysicalMachineChaos experiments using Chaos Mesh, you need to deploy Chaosd in service mode to all physical or virtual machines that are going to be injected with faults. After deploying Chaosd, run Chaosd server as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy Chaosd, generate a TLS certificate, and create ",(0,r.kt)("inlineCode",{parentName:"li"},"PhysicalMachine"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the deployment method of Chaosd, refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/chaosd-overview#download-and-deploy"},"Download and deploy Chaosd"),"."),(0,r.kt)("li",{parentName:"ul"},"After deploying Chaosd, ",(0,r.kt)("strong",{parentName:"li"},"before")," starting Chaosd server, you need to generate a TLS certificate and create a ",(0,r.kt)("inlineCode",{parentName:"li"},"PhysicalMachine")," in Kubernetes clusters. For more information on how to generate TLS certificates, refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/chaosctl-tool#generate-tls-certificates-for-chaosd"},"Generate TLS certificates for Chaosd"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Start Chaosd Server:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After generating the TLS certificate through Chaosctl, run the following command to start Chaosd in service mode:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --https-port 31768 --CA=/etc/chaosd/pki/ca.crt --cert=/etc/chaosd/pki/chaosd.crt --key=/etc/choasd/pki/chaosd.key\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The TLS certificates are saved to the default output directory of Chaosctl. If you manually specified another directory when generating certificates, replace the directory in the command line with the corresponding one.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the TLS certificate is not generated through Chaosctl, you can run the following command to start Chaosd in service mode. However, for the security of your clusters, this is ",(0,r.kt)("strong",{parentName:"p"},"not")," recommended."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n")))),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create a new experiment",src:a(53632).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"PHYSIC")," in ",(0,r.kt)("strong",{parentName:"p"},"Experiment Type")," and choose a specific type of the experiment, such as ",(0,r.kt)("strong",{parentName:"p"},"NETWORK ATTACK"),". Then, choose a specific behavior and fill out the corresponding configurations:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"PhysicalMachineChaos experiment",src:a(84392).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information to specify the range and the planned duration of the experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"PhysicalMachineChaos experiment information",src:a(12759).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment."))),(0,r.kt)("h2",{id:"create-experiments-using-an-yaml-file"},"Create experiments using an YAML file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Write the experimental configurations to the "physicalmachine.yaml" file. For example:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PhysicalMachineChaos\nmetadata:\n  name: physical-network-delay\n  namespace: chaos-testing\nspec:\n  action: network-delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'arch': 'amd64'\n  network-delay:\n    device: ens33\n    ip-address: 140.82.112.3\n    latency: 1000ms\n  duration: '10m'\n")),(0,r.kt)("p",{parentName:"li"},"The experimental configurations above send HTTP requests to Chaosd service in the specified physical machines or virtual machines to trigger network latency experiments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the experiment using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". The command is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f physicalmachine.yaml\n")))),(0,r.kt)("h3",{id:"configuration-description"},"Configuration description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the actions of physical machines faults, optional values are as follows: ",(0,r.kt)("inlineCode",{parentName:"td"},"stress-cpu"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"stress-mem"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-read-payload"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-write-payload"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"disk-fill"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"network-corrupt"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"network-duplicate"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"network-loss"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"network-delay"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"network-partition"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"network-dns"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"process"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jvm-exception"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jvm-gc"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jvm-latency"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jvm-return"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jvm-stress"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jvm-rule-data"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"clock")),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stress-cpu"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects the ",(0,r.kt)("inlineCode",{parentName:"td"},"address")," of Chaosd service to inject faults, only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"address")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"selector")," could be specified"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},'["192.168.0.10:31767"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the target PhysicalMachine. For details, refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/define-chaos-experiment-scope"},"Define the experiment scope"),", only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"address")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"selector")," could be specified"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random PhysicalMachine), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible PhysicalMachines), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible PhysicalMachines), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of PhysicalMachines from the eligible PhysicalMachines), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of PhysicalMachines from the eligible PhysicalMachines)."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides a parameter for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of PhysicalMachines."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the duration of experiments"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"30s"))))),(0,r.kt)("p",null,"Each fault action has its own specific configurations. The following section introduces various fault types and their corresponding configuration methods."),(0,r.kt)("h4",{id:"cpu-stress"},"CPU stress"),(0,r.kt)("p",null,'To simulate a CPU stress scenario, you need to set the action to "stress-cpu". For the corresponding configurations, refer to Parameters of simulating CPU stress.'),(0,r.kt)("h4",{id:"memory-stress"},"Memory stress"),(0,r.kt)("p",null,'To simulate a memory stress scenario, you need to set the action to "stress-mem". For the corresponding configurations, refer to Parameters of simulating memory stress.'),(0,r.kt)("h4",{id:"disk-read-load"},"Disk read load"),(0,r.kt)("p",null,'To simulate a disk read load scenario, you need to set the action to "disk-read-payload". For the corresponding configurations, refer to Parameters of simulating disk read load.'),(0,r.kt)("h4",{id:"disk-write-load"},"Disk write load"),(0,r.kt)("p",null,'To simulate a disk write load scenario, you need to set the action to "disk-write-payload". For the corresponding configurations, refer to Parameters of simulating disk write load.'),(0,r.kt)("h4",{id:"disk-fill"},"Disk fill"),(0,r.kt)("p",null,'To simulate a disk fill scenario, you need to set the action to "disk-fill". For the corresponding configurations, refer to Parameters of simulating disk fill.'),(0,r.kt)("h4",{id:"network-corruption"},"Network corruption"),(0,r.kt)("p",null,'To simulate a network corruption scenario, you need to set the action to "network-corrupt". For the corresponding configurations, refer to Parameters of simulating network corruption.'),(0,r.kt)("h4",{id:"network-latency"},"Network latency"),(0,r.kt)("p",null,'To simulate a network latency scenario, you need to set the action to "network-delay". For the corresponding configurations, refer to Parameters of simulating network latency.'),(0,r.kt)("h4",{id:"network-duplication"},"Network duplication"),(0,r.kt)("p",null,'To simulate a network duplication scenario, you need to set the action to "network-duplicate". For the corresponding configurations, refer to Parameters of simulating network duplication.'),(0,r.kt)("h4",{id:"network-loss"},"Network loss"),(0,r.kt)("p",null,'To simulate a network loss scenario, you need to set the action to "network-loss". For the corresponding configurations, refer to Parameters of simulating network loss.'),(0,r.kt)("h4",{id:"network-partition"},"Network partition"),(0,r.kt)("p",null,'To simulate a network partition scenario, you need to set the action to "network-partition". For the corresponding configurations, refer to Parameters of simulating network partition.'),(0,r.kt)("h4",{id:"dns-fault"},"DNS fault"),(0,r.kt)("p",null,'To simulate a DNS fault scenario, you need to set the action to "network-dns". For the corresponding configurations, refer to Parameters of simulating DNS fault.'),(0,r.kt)("h4",{id:"process-fault"},"Process fault"),(0,r.kt)("p",null,'To simulate a process fault scenario, you need to set the action to "process". For the corresponding configurations, refer to Parameters of simulating process fault.'),(0,r.kt)("h4",{id:"throw-custom-exceptions-for-jvm-applications"},"Throw custom exceptions for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications throw custom exceptions, you need to set the action to "jvm-exception". For the corresponding configurations, refer to Parameters for throwing custom exceptions.'),(0,r.kt)("h4",{id:"increase-method-latency-for-jvm-applications"},"Increase method latency for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications increase method latency, you need to set the action to "jvm-latency". For the corresponding configurations, refer to Parameters for increasing method latency.'),(0,r.kt)("h4",{id:"modify-return-values-of-methods-for-jvm-applications"},"Modify return values of methods for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications modify return values of methods, you need to set the action to "jvm-return". For the corresponding configurations, refer to Parameters for modifying return values of a method.'),(0,r.kt)("h4",{id:"trigger-garbage-collection-for-jvm-applications"},"Trigger garbage collection for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications trigger garbage collection, you need to set the action to "jvm-gc". For the corresponding configurations, refer to Parameters for triggering garbage collection.'),(0,r.kt)("h4",{id:"trigger-faults-using-byteman-configuration-files-for-jvm-applications"},"Trigger faults using Byteman configuration files for JVM applications"),(0,r.kt)("p",null,'To simulate a scenario that JVM applications trigger faults using Byteman configuration files, you need to set the action to "jvm-rule-data". For the corresponding configurations, refer to Parameters for triggering faults by setting Byteman configuration files.'),(0,r.kt)("h4",{id:"time-offset"},"Time offset"),(0,r.kt)("p",null,'To simulate a time offset scenario, you need to set the action to "clock". For the corresponding configurations, refer to Parameters of simulating time offset.'))}m.isMDXComponent=!0},53632:function(e,t,a){t.Z=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},12759:function(e,t,a){t.Z=a.p+"assets/images/physicalmachinechaos-exp-info-6bf01b809471eb5c369b149ca8bab573.png"},84392:function(e,t,a){t.Z=a.p+"assets/images/physicalmachinechaos-exp-c601153f614a0dcd77569bf32905f6f7.png"}}]);