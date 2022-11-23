"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[14054],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=s,g=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),s=(a(67294),a(3905));const r={title:"Simulate Stress Scenarios"},i=void 0,l={unversionedId:"simulate-heavy-stress-in-physical-nodes",id:"version-2.5.0/simulate-heavy-stress-in-physical-nodes",title:"Simulate Stress Scenarios",description:"This document describes how to use Chaosd to simulate stress scenarios. This feature generates CPU or memory stress on the host using stress-ng. You can create stress experiments either in command-line or service mode.",source:"@site/versioned_docs/version-2.5.0/simulate-heavy-stress-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-heavy-stress-in-physical-nodes",permalink:"/docs/simulate-heavy-stress-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.0/simulate-heavy-stress-in-physical-nodes.md",tags:[],version:"2.5.0",frontMatter:{title:"Simulate Stress Scenarios"},sidebar:"docs",previous:{title:"Simulate Host Faults",permalink:"/docs/simulate-host-console-in-physical-nodes"},next:{title:"Simulate Disk Faults",permalink:"/docs/simulate-disk-pressure-in-physical-nodes"}},o={},m=[{value:"Create stress experiments using the command-line mode",id:"create-stress-experiments-using-the-command-line-mode",level:2},{value:"Simulate CPU stress using the command-line mode",id:"simulate-cpu-stress-using-the-command-line-mode",level:3},{value:"Command for simulating CPU stress",id:"command-for-simulating-cpu-stress",level:4},{value:"Configuration description for simulating CPU stress",id:"configuration-description-for-simulating-cpu-stress",level:4},{value:"Example for simulating CPU stress",id:"example-for-simulating-cpu-stress",level:4},{value:"Simulating memory stress using the command-line mode",id:"simulating-memory-stress-using-the-command-line-mode",level:3},{value:"Command for simulating memory stress",id:"command-for-simulating-memory-stress",level:4},{value:"Configuration description for simulating memory stress",id:"configuration-description-for-simulating-memory-stress",level:4},{value:"Example for simulating memory stress",id:"example-for-simulating-memory-stress",level:4},{value:"Create stress experiments using the service mode",id:"create-stress-experiments-using-the-service-mode",level:2},{value:"Simulate CPU stress using the service mode",id:"simulate-cpu-stress-using-the-service-mode",level:3},{value:"Parameters for simulating CPU stress",id:"parameters-for-simulating-cpu-stress",level:4},{value:"Example for simulating CPU stress using the service mode",id:"example-for-simulating-cpu-stress-using-the-service-mode",level:4},{value:"Simulate memory stress using the service mode",id:"simulate-memory-stress-using-the-service-mode",level:3},{value:"Parameters for simulating memory stress",id:"parameters-for-simulating-memory-stress",level:4},{value:"Example for simulating memory stress using the service mode",id:"example-for-simulating-memory-stress-using-the-service-mode",level:4}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to use Chaosd to simulate stress scenarios. This feature generates CPU or memory stress on the host using ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.ubuntu.com/Kernel/Reference/stress-ng"},"stress-ng"),". You can create stress experiments either in command-line or service mode."),(0,s.kt)("h2",{id:"create-stress-experiments-using-the-command-line-mode"},"Create stress experiments using the command-line mode"),(0,s.kt)("p",null,"This section describes how to create stress experiments using the command-line mode."),(0,s.kt)("p",null,"Before creating stress experiments, you can run the following command to view the stress experiment types supported by Chaosd:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress --help\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Stress attack related commands\n\nUsage:\n  chaosd attack stress [command]\n\nAvailable Commands:\n  cpu         continuously stress CPU out\n  mem         continuously stress virtual memory out\n\nFlags:\n  -h, --help   help for stress\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack stress [command] --help\" for more information about a command.\n")),(0,s.kt)("p",null,"Currently, Chaosd supports creating CPU stress experiments and memory stress experiments."),(0,s.kt)("h3",{id:"simulate-cpu-stress-using-the-command-line-mode"},"Simulate CPU stress using the command-line mode"),(0,s.kt)("h4",{id:"command-for-simulating-cpu-stress"},"Command for simulating CPU stress"),(0,s.kt)("p",null,"To view the configuration items supported by the CPU stress simulation, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --help\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"continuously stress CPU out\n\nUsage:\n  chaosd attack stress cpu [options] [flags]\n\nFlags:\n  -h, --help              help for cpu\n  -l, --load int          Load specifies P percent loading per CPU worker. 0 is effectively a sleep (no load) and 100 is full loading. (default 10)\n  -o, --options strings   extend stress-ng options.\n  -w, --workers int       Workers specifies N workers to apply the stressor. (default 1)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,s.kt)("h4",{id:"configuration-description-for-simulating-cpu-stress"},"Configuration description for simulating CPU stress"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"load")),(0,s.kt)("td",{parentName:"tr",align:"left"},"l"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specifies the percentage of CPU load per CPU worker. ",(0,s.kt)("inlineCode",{parentName:"td"},"0")," means no CPU utilization, and ",(0,s.kt)("inlineCode",{parentName:"td"},"100")," means full CPU utilization."),(0,s.kt)("td",{parentName:"tr",align:"left"},"int"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Range: ",(0,s.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,s.kt)("inlineCode",{parentName:"td"},"100"),"; Default value: ",(0,s.kt)("inlineCode",{parentName:"td"},"10"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"workers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"w"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of workers used to create CPU stress."),(0,s.kt)("td",{parentName:"tr",align:"left"},"int"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Default value: 1.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"options")),(0,s.kt)("td",{parentName:"tr",align:"left"},"o"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The extended parameter of stress-ng, usually not configured."),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},'Default value: "".')))),(0,s.kt)("h4",{id:"example-for-simulating-cpu-stress"},"Example for simulating CPU stress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --workers 2 --load 10\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n')),(0,s.kt)("h3",{id:"simulating-memory-stress-using-the-command-line-mode"},"Simulating memory stress using the command-line mode"),(0,s.kt)("h4",{id:"command-for-simulating-memory-stress"},"Command for simulating memory stress"),(0,s.kt)("p",null,"To view the configuration items supported by the memory stress simulation, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress mem --help\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"continuously stress virtual memory out\n\nUsage:\n  chaosd attack stress mem [options] [flags]\n\nFlags:\n  -h, --help              help for mem\n  -o, --options strings   extend stress-ng options.\n  -s, --size string       Size specifies N bytes consumed per vm worker, default is the total available memory. One can specify the size as % of total available memory or in units of B, KB/KiB, MB/MiB, GB/GiB, TB/TiB..\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,s.kt)("h4",{id:"configuration-description-for-simulating-memory-stress"},"Configuration description for simulating memory stress"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"size")),(0,s.kt)("td",{parentName:"tr",align:"left"},"s"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specifies the size of memory per VM worker."),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The memory size in B, KB/KiB, MB/MiB, GB/GiB, TB/TiB. If the size is not set, all available memory is used by default.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"options")),(0,s.kt)("td",{parentName:"tr",align:"left"},"o"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The extended parameter of stress-ng, usually not configured."),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},'Default value: "".')))),(0,s.kt)("h4",{id:"example-for-simulating-memory-stress"},"Example for simulating memory stress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress mem --workers 2 --size 100M\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:37:19.643 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --vm 2 --vm-keep --vm-bytes 100000000"]\n[2021/05/12 03:37:19.654 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --vm 2 --vm-keep --vm-bytes 100000000"] [Pid=26799]\nAttack stress mem successfully, uid: c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n')),(0,s.kt)("p",null,"When running the experiment, you need to save the uid information of the experiment. When a stress simulation is not needed, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"recover")," to terminate the uid-related experiment::"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd recover c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Recover c2bff2f5-3aac-4ace-b7a6-322946ae6f13 successfully\n")),(0,s.kt)("h2",{id:"create-stress-experiments-using-the-service-mode"},"Create stress experiments using the service mode"),(0,s.kt)("p",null,"To create experiments using the service mode, follow the instructions below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run Chaosd in service mode:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send a ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," HTTP request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," path of Chaosd service."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 172.16.112.130:31767/api/attack/jvm -H \"Content-Type:application/json\" -d '{fault-configuration}'\n")),(0,s.kt)("p",{parentName:"li"},"For the ",(0,s.kt)("inlineCode",{parentName:"p"},"fault-configuration")," part in the above command, you need to configure it according to the fault types. For the corresponding parameters, refer to the parameters and examples of each fault type in the following sections."))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"When running an experiment, remember to save the UID information of the experiment. When you want to kill the experiment corresponding to the UID, you need to send a ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," path of Chaosd service.")),(0,s.kt)("h3",{id:"simulate-cpu-stress-using-the-service-mode"},"Simulate CPU stress using the service mode"),(0,s.kt)("h4",{id:"parameters-for-simulating-cpu-stress"},"Parameters for simulating CPU stress"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"action")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Actions of the experiment"),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},'Set to "cpu"')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"load")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specifies the percentage of CPU load per CPU worker. ",(0,s.kt)("inlineCode",{parentName:"td"},"0")," means no CPU utilization, and ",(0,s.kt)("inlineCode",{parentName:"td"},"100")," means full CPU utilization."),(0,s.kt)("td",{parentName:"tr",align:"left"},"int"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Range: ",(0,s.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,s.kt)("inlineCode",{parentName:"td"},"100"),"; Default value: ",(0,s.kt)("inlineCode",{parentName:"td"},"10"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"workers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of workers used to create CPU stress"),(0,s.kt)("td",{parentName:"tr",align:"left"},"int"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Default value: ",(0,s.kt)("inlineCode",{parentName:"td"},"1"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"options")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The extended parameter of stress-ng, usually not configured."),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},'Default value: ""')))),(0,s.kt)("h4",{id:"example-for-simulating-cpu-stress-using-the-service-mode"},"Example for simulating CPU stress using the service mode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n')),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n')),(0,s.kt)("h3",{id:"simulate-memory-stress-using-the-service-mode"},"Simulate memory stress using the service mode"),(0,s.kt)("h4",{id:"parameters-for-simulating-memory-stress"},"Parameters for simulating memory stress"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"action")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Actions of the experiment"),(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"},'Set to "mem"')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"size")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specifies the size of memory per VM worker"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"the memory size in B, KB/KiB, MB/MiB, GB/GiB, TB/TiB. If the size is not set, all available memory is used by default.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"options")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The extended parameter of stress-ng, usually not configured."),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},'Default value: ""')))),(0,s.kt)("h4",{id:"example-for-simulating-memory-stress-using-the-service-mode"},"Example for simulating memory stress using the service mode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"size":"100M", "action":"mem"}\'\n')),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n')))}u.isMDXComponent=!0}}]);