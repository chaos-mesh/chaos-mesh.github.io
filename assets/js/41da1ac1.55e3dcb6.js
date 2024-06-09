"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3493],{87793:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=t(13274),i=t(90073);const l={title:"Simulate Stress Scenarios"},r=void 0,a={id:"simulate-heavy-stress-in-physical-nodes",title:"Simulate Stress Scenarios",description:"This document describes how to use Chaosd to simulate stress scenarios. This feature generates CPU or memory stress on the host using stress-ng. You can create stress experiments either in command-line or service mode.",source:"@site/versioned_docs/version-2.4.3/simulate-heavy-stress-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-heavy-stress-in-physical-nodes",permalink:"/docs/2.4.3/simulate-heavy-stress-in-physical-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/simulate-heavy-stress-in-physical-nodes.md",tags:[],version:"2.4.3",frontMatter:{title:"Simulate Stress Scenarios"},sidebar:"docs",previous:{title:"Simulate Host Faults",permalink:"/docs/2.4.3/simulate-host-console-in-physical-nodes"},next:{title:"Simulate Disk Faults",permalink:"/docs/2.4.3/simulate-disk-pressure-in-physical-nodes"}},o={},d=[{value:"Create stress experiments using the command-line mode",id:"create-stress-experiments-using-the-command-line-mode",level:2},{value:"Simulate CPU stress using the command-line mode",id:"simulate-cpu-stress-using-the-command-line-mode",level:3},{value:"Command for simulating CPU stress",id:"command-for-simulating-cpu-stress",level:4},{value:"Configuration description for simulating CPU stress",id:"configuration-description-for-simulating-cpu-stress",level:4},{value:"Example for simulating CPU stress",id:"example-for-simulating-cpu-stress",level:4},{value:"Simulating memory stress using the command-line mode",id:"simulating-memory-stress-using-the-command-line-mode",level:3},{value:"Command for simulating memory stress",id:"command-for-simulating-memory-stress",level:4},{value:"Configuration description for simulating memory stress",id:"configuration-description-for-simulating-memory-stress",level:4},{value:"Example for simulating memory stress",id:"example-for-simulating-memory-stress",level:4},{value:"Create stress experiments using the service mode",id:"create-stress-experiments-using-the-service-mode",level:2},{value:"Simulate CPU stress using the service mode",id:"simulate-cpu-stress-using-the-service-mode",level:3},{value:"Parameters for simulating CPU stress",id:"parameters-for-simulating-cpu-stress",level:4},{value:"Example for simulating CPU stress using the service mode",id:"example-for-simulating-cpu-stress-using-the-service-mode",level:4},{value:"Simulate memory stress using the service mode",id:"simulate-memory-stress-using-the-service-mode",level:3},{value:"Parameters for simulating memory stress",id:"parameters-for-simulating-memory-stress",level:4},{value:"Example for simulating memory stress using the service mode",id:"example-for-simulating-memory-stress-using-the-service-mode",level:4}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This document describes how to use Chaosd to simulate stress scenarios. This feature generates CPU or memory stress on the host using ",(0,n.jsx)(s.a,{href:"https://wiki.ubuntu.com/Kernel/Reference/stress-ng",children:"stress-ng"}),". You can create stress experiments either in command-line or service mode."]}),"\n",(0,n.jsx)(s.h2,{id:"create-stress-experiments-using-the-command-line-mode",children:"Create stress experiments using the command-line mode"}),"\n",(0,n.jsx)(s.p,{children:"This section describes how to create stress experiments using the command-line mode."}),"\n",(0,n.jsx)(s.p,{children:"Before creating stress experiments, you can run the following command to view the stress experiment types supported by Chaosd:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack stress --help\n"})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"Stress attack related commands\n\nUsage:\n  chaosd attack stress [command]\n\nAvailable Commands:\n  cpu         continuously stress CPU out\n  mem         continuously stress virtual memory out\n\nFlags:\n  -h, --help   help for stress\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack stress [command] --help\" for more information about a command.\n"})}),"\n",(0,n.jsx)(s.p,{children:"Currently, Chaosd supports creating CPU stress experiments and memory stress experiments."}),"\n",(0,n.jsx)(s.h3,{id:"simulate-cpu-stress-using-the-command-line-mode",children:"Simulate CPU stress using the command-line mode"}),"\n",(0,n.jsx)(s.h4,{id:"command-for-simulating-cpu-stress",children:"Command for simulating CPU stress"}),"\n",(0,n.jsx)(s.p,{children:"To view the configuration items supported by the CPU stress simulation, run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack stress cpu --help\n"})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"continuously stress CPU out\n\nUsage:\n  chaosd attack stress cpu [options] [flags]\n\nFlags:\n  -h, --help              help for cpu\n  -l, --load int          Load specifies P percent loading per CPU worker. 0 is effectively a sleep (no load) and 100 is full loading. (default 10)\n  -o, --options strings   extend stress-ng options.\n  -w, --workers int       Workers specifies N workers to apply the stressor. (default 1)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n"})}),"\n",(0,n.jsx)(s.h4,{id:"configuration-description-for-simulating-cpu-stress",children:"Configuration description for simulating CPU stress"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Configuration item"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Abbreviation"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"load"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"l"}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["Specifies the percentage of CPU load per CPU worker. ",(0,n.jsx)(s.code,{children:"0"})," means no CPU utilization, and ",(0,n.jsx)(s.code,{children:"100"})," means full CPU utilization."]}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"int"}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["Range: ",(0,n.jsx)(s.code,{children:"0"})," to ",(0,n.jsx)(s.code,{children:"100"}),"; Default value: ",(0,n.jsx)(s.code,{children:"10"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"workers"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"w"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Specifies the number of workers used to create CPU stress."}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"int"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Default value: 1."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"options"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"o"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"The extended parameter of stress-ng, usually not configured."}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:'Default value: "".'})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"example-for-simulating-cpu-stress",children:"Example for simulating CPU stress"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack stress cpu --workers 2 --load 10\n"})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'[2021/05/12 03:38:33.698 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --cpu 2 --cpu-load 10"]\n[2021/05/12 03:38:33.702 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --cpu 2 --cpu-load 10"] [Pid=27483]\nAttack stress cpu successfully, uid: 4f33b2d4-aee6-43ca-9c43-0f12867e5c9c\n'})}),"\n",(0,n.jsx)(s.h3,{id:"simulating-memory-stress-using-the-command-line-mode",children:"Simulating memory stress using the command-line mode"}),"\n",(0,n.jsx)(s.h4,{id:"command-for-simulating-memory-stress",children:"Command for simulating memory stress"}),"\n",(0,n.jsx)(s.p,{children:"To view the configuration items supported by the memory stress simulation, run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack stress mem --help\n"})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"continuously stress virtual memory out\n\nUsage:\n  chaosd attack stress mem [options] [flags]\n\nFlags:\n  -h, --help              help for mem\n  -o, --options strings   extend stress-ng options.\n  -s, --size string       Size specifies N bytes consumed per vm worker, default is the total available memory. One can specify the size as % of total available memory or in units of B, KB/KiB, MB/MiB, GB/GiB, TB/TiB..\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n"})}),"\n",(0,n.jsx)(s.h4,{id:"configuration-description-for-simulating-memory-stress",children:"Configuration description for simulating memory stress"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Configuration item"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Abbreviation"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"size"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"s"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Specifies the size of memory per VM worker."}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"The memory size in B, KB/KiB, MB/MiB, GB/GiB, TB/TiB. If the size is not set, all available memory is used by default."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"options"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"o"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"The extended parameter of stress-ng, usually not configured."}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:'Default value: "".'})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"example-for-simulating-memory-stress",children:"Example for simulating memory stress"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd attack stress mem --workers 2 --size 100M\n"})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'[2021/05/12 03:37:19.643 +00:00] [INFO] [stress.go:66] ["stressors normalize"] [arguments=" --vm 2 --vm-keep --vm-bytes 100000000"]\n[2021/05/12 03:37:19.654 +00:00] [INFO] [stress.go:82] ["Start stress-ng process successfully"] [command="/usr/bin/stress-ng --vm 2 --vm-keep --vm-bytes 100000000"] [Pid=26799]\nAttack stress mem successfully, uid: c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n'})}),"\n",(0,n.jsxs)(s.p,{children:["When running the experiment, you need to save the uid information of the experiment. When a stress simulation is not needed, you can use ",(0,n.jsx)(s.code,{children:"recover"})," to terminate the uid-related experiment::"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd recover c2bff2f5-3aac-4ace-b7a6-322946ae6f13\n"})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"Recover c2bff2f5-3aac-4ace-b7a6-322946ae6f13 successfully\n"})}),"\n",(0,n.jsx)(s.h2,{id:"create-stress-experiments-using-the-service-mode",children:"Create stress experiments using the service mode"}),"\n",(0,n.jsx)(s.p,{children:"To create experiments using the service mode, follow the instructions below:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Run Chaosd in service mode:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chaosd server --port 31767\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Send a ",(0,n.jsx)(s.code,{children:"POST"})," HTTP request to the ",(0,n.jsx)(s.code,{children:"/api/attack/{uid}"})," path of Chaosd service."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -X POST 172.16.112.130:31767/api/attack/jvm -H \"Content-Type:application/json\" -d '{fault-configuration}'\n"})}),"\n",(0,n.jsxs)(s.p,{children:["For the ",(0,n.jsx)(s.code,{children:"fault-configuration"})," part in the above command, you need to configure it according to the fault types. For the corresponding parameters, refer to the parameters and examples of each fault type in the following sections."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["When running an experiment, remember to save the UID information of the experiment. When you want to kill the experiment corresponding to the UID, you need to send a ",(0,n.jsx)(s.code,{children:"DELETE"})," HTTP request to the ",(0,n.jsx)(s.code,{children:"/api/attack/{uid}"})," path of Chaosd service."]})}),"\n",(0,n.jsx)(s.h3,{id:"simulate-cpu-stress-using-the-service-mode",children:"Simulate CPU stress using the service mode"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-for-simulating-cpu-stress",children:"Parameters for simulating CPU stress"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"action"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Actions of the experiment"}),(0,n.jsx)(s.td,{style:{textAlign:"left"}}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:'Set to "cpu"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"load"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["Specifies the percentage of CPU load per CPU worker. ",(0,n.jsx)(s.code,{children:"0"})," means no CPU utilization, and ",(0,n.jsx)(s.code,{children:"100"})," means full CPU utilization."]}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"int"}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["Range: ",(0,n.jsx)(s.code,{children:"0"})," to ",(0,n.jsx)(s.code,{children:"100"}),"; Default value: ",(0,n.jsx)(s.code,{children:"10"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"workers"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Specifies the number of workers used to create CPU stress"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"int"}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["Default value: ",(0,n.jsx)(s.code,{children:"1"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"options"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"The extended parameter of stress-ng, usually not configured."}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:'Default value: ""'})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"example-for-simulating-cpu-stress-using-the-service-mode",children:"Example for simulating CPU stress using the service mode"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"load":10, "action":"cpu","workers":1}\'\n'})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n'})}),"\n",(0,n.jsx)(s.h3,{id:"simulate-memory-stress-using-the-service-mode",children:"Simulate memory stress using the service mode"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-for-simulating-memory-stress",children:"Parameters for simulating memory stress"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"action"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Actions of the experiment"}),(0,n.jsx)(s.td,{style:{textAlign:"left"}}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:'Set to "mem"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"size"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Specifies the size of memory per VM worker"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the memory size in B, KB/KiB, MB/MiB, GB/GiB, TB/TiB. If the size is not set, all available memory is used by default."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"options"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"The extended parameter of stress-ng, usually not configured."}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:'Default value: ""'})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"example-for-simulating-memory-stress-using-the-service-mode",children:"Example for simulating memory stress using the service mode"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -X POST 172.16.112.130:31767/api/attack/stress -H "Content-Type:application/json" -d \'{"size":"100M", "action":"mem"}\'\n'})}),"\n",(0,n.jsx)(s.p,{children:"The result is as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},90073:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var n=t(79474);const i={},l=n.createContext(i);function r(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);