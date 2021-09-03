"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2913],{3905:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return d}});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(s),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return s?n.createElement(f,o(o({ref:t},c),{},{components:s})):n.createElement(f,o({ref:t},c))}));function d(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<a;m++)o[m]=s[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},63416:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var n=s(87462),r=s(63366),a=(s(67294),s(3905)),o=["components"],i={title:"Simulate Stress Scenarios",sidebar_label:"Simulate Stress Scenarios"},l=void 0,m={unversionedId:"simulate-heavy-stress-in-physical-nodes",id:"simulate-heavy-stress-in-physical-nodes",isDocsHomePage:!1,title:"Simulate Stress Scenarios",description:"This document describes how to use Chaosd to simulate stress scenarios. This feature generates CPU or memory stress on the host using stress-ng. You can create stress experiments either in command-line or service mode.",source:"@site/docs/simulate-heavy-stress-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-heavy-stress-in-physical-nodes",permalink:"/docs/next/simulate-heavy-stress-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-heavy-stress-in-physical-nodes.md",tags:[],version:"current",frontMatter:{title:"Simulate Stress Scenarios",sidebar_label:"Simulate Stress Scenarios"},sidebar:"docs",previous:{title:"Simulate Host Faults",permalink:"/docs/next/simulate-host-console-in-physical-nodes"},next:{title:"Integrate Chaos Mesh to GitHub Actions",permalink:"/docs/next/integrate-chaos-mesh-into-github-actions"}},c=[{value:"Create stress experiments in command-line mode",id:"create-stress-experiments-in-command-line-mode",children:[{value:"Simulating CPU stress",id:"simulating-cpu-stress",children:[]},{value:"Simulating memory stress",id:"simulating-memory-stress",children:[]}]},{value:"Create stress experiments in service mode",id:"create-stress-experiments-in-service-mode",children:[]}],u={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to use Chaosd to simulate stress scenarios. This feature generates CPU or memory stress on the host using ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ubuntu.com/Kernel/Reference/stress-ng"},"stress-ng"),". You can create stress experiments either in command-line or service mode."),(0,a.kt)("h2",{id:"create-stress-experiments-in-command-line-mode"},"Create stress experiments in command-line mode"),(0,a.kt)("p",null,"This section describes how to create stress experiments in command-line mode."),(0,a.kt)("p",null,"Before creating stress experiments, you can run the following command to view the stress experiment types supported by Chaosd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress --help\n")),(0,a.kt)("p",null,"The result is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Stress attack related commands\n\nUsage:\n  chaosd attack stress [command]\n\nAvailable Commands:\n  cpu         continuously stress CPU out\n  mem         continuously stress virtual memory out\n\nFlags:\n  -h, --help   help for stress\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack stress [command] --help\" for more information about a command.\n")),(0,a.kt)("p",null,"Currently, Chaosd supports creating CPU stress experiments and memory stress experiments."),(0,a.kt)("h3",{id:"simulating-cpu-stress"},"Simulating CPU stress"),(0,a.kt)("h4",{id:"command-of-simulating-cpu-stress"},"Command of simulating CPU stress"),(0,a.kt)("p",null,"To view the configuration items supported by the CPU stress simulation, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --help\n")),(0,a.kt)("p",null,"The result is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"continuously stress CPU out\n\nUsage:\n  chaosd attack stress cpu [options] [flags]\n\nFlags:\n  -h, --help              help for cpu\n  -l, --load int          Load specifies P percent loading per CPU worker. 0 is effectively a sleep (no load) and 100 is full loading. (default 10)\n  -o, --options strings   extend stress-ng options.\n  -w, --workers int       Workers specifies N workers to apply the stressor. (default 1)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,a.kt)("h4",{id:"configuration-description-of-simulating-cpu-stress"},"Configuration description of simulating CPU stress"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load"),(0,a.kt)("td",{parentName:"tr",align:"left"},"l"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the percentage of CPU load per CPU worker. 0 means no CPU load, and 100 means full CPU load."),(0,a.kt)("td",{parentName:"tr",align:"left"},"int; range: 0 to 100; default value: 10.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"workers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"w"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the number of workers used to create CPU stress."),(0,a.kt)("td",{parentName:"tr",align:"left"},"int; default value: 1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},"o"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The extended parameter of stress-ng, usually not configured."),(0,a.kt)("td",{parentName:"tr",align:"left"},'string; default value: "".')))),(0,a.kt)("h4",{id:"example-of-simulating-cpu-stress"},"Example of simulating CPU stress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress cpu --workers 2 --load 10\n")),(0,a.kt)("p",null,"The result is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n')),(0,a.kt)("h3",{id:"simulating-memory-stress"},"Simulating memory stress"),(0,a.kt)("h4",{id:"command-of-simulating-memory-stress"},"Command of simulating memory stress"),(0,a.kt)("p",null,"To view the configuration items supported by the memory stress simulation, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress mem --help\n")),(0,a.kt)("p",null,"The result is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"continuously stress virtual memory out\n\nUsage:\n  chaosd attack stress mem [options] [flags]\n\nFlags:\n  -h, --help              help for mem\n  -o, --options strings   extend stress-ng options.\n  -s, --size string       Size specifies N bytes consumed per vm worker, default is the total available memory. One can specify the size as % of total available memory or in units of B, KB/KiB, MB/MiB, GB/GiB, TB/TiB..\n  -w, --workers int       Workers specifies N workers to apply the stressor. (default 1)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,a.kt)("h4",{id:"configuration-description-of-simulating-memory-stress"},"Configuration description of simulating memory stress"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the size of memory per VM worker."),(0,a.kt)("td",{parentName:"tr",align:"left"},"the memory size in B, KB/KiB, MB/MiB, GB/GiB, TB/TiB. If the size is not set, all available memory is used by default.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"workers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"w"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify the number of workers used to create memory stress."),(0,a.kt)("td",{parentName:"tr",align:"left"},"int; default value: 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},"o"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The extended parameter of stress-ng, usually not configured."),(0,a.kt)("td",{parentName:"tr",align:"left"},'string; default value: "".')))),(0,a.kt)("h4",{id:"example-of-simulating-memory-stress"},"Example of simulating memory stress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack stress mem --workers 2 --size 100M\n")),(0,a.kt)("p",null,"The result is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/12 03:37:19.643 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --vm 2 --vm-keep --vm-bytes 100000000"]\n[2021/05/12 03:37:19.654 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --vm 2 --vm-keep --vm-bytes 100000000"] [Pid=26799]\nAttack stress mem successfully, uid: c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n')),(0,a.kt)("p",null,"When running the experiment, you need to save the uid information of the experiment. When a stress simulation is not needed, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"recover")," to terminate the uid-related experiment::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd recover c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n")),(0,a.kt)("p",null,"The result is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Recover c2bff2f5-3aac-4ace-b7a6-322946ae6f13 successfully\n")),(0,a.kt)("h2",{id:"create-stress-experiments-in-service-mode"},"Create stress experiments in service mode"),(0,a.kt)("p",null,"(To be added)"))}p.isMDXComponent=!0}}]);