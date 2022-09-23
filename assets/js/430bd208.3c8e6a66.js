"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[77299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=s,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const r={title:"Simulate Process Faults"},o=void 0,l={unversionedId:"simulate-process-chaos-in-physical-nodes",id:"version-2.4.0/simulate-process-chaos-in-physical-nodes",title:"Simulate Process Faults",description:"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the kill command to simulate the scenarios that the process is killed or stopped. You can create experiments either in the command-line mode or service mode.",source:"@site/versioned_docs/version-2.4.0/simulate-process-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-process-chaos-in-physical-nodes",permalink:"/docs/simulate-process-chaos-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.0/simulate-process-chaos-in-physical-nodes.md",tags:[],version:"2.4.0",frontMatter:{title:"Simulate Process Faults"},sidebar:"docs",previous:{title:"Simulate Faults on Physical Machines",permalink:"/docs/simulate-physical-machine-chaos"},next:{title:"Simulate Network Faults",permalink:"/docs/simulate-network-chaos-in-physical-nodes"}},i={},p=[{value:"Create experiments using the command-line mode",id:"create-experiments-using-the-command-line-mode",level:2},{value:"Killing a process using the command-line mode",id:"killing-a-process-using-the-command-line-mode",level:3},{value:"Commands for killing a process",id:"commands-for-killing-a-process",level:4},{value:"Configuration description for killing a process",id:"configuration-description-for-killing-a-process",level:4},{value:"Example for killing a process",id:"example-for-killing-a-process",level:4},{value:"Stopping a process using the command-line mode",id:"stopping-a-process-using-the-command-line-mode",level:3},{value:"Command for stopping a process",id:"command-for-stopping-a-process",level:4},{value:"Configuration description of stopping a process",id:"configuration-description-of-stopping-a-process",level:4},{value:"Example for stopping a process",id:"example-for-stopping-a-process",level:4},{value:"Create experiments using the service mode",id:"create-experiments-using-the-service-mode",level:2},{value:"Simulate process faults using the service mode",id:"simulate-process-faults-using-the-service-mode",level:3},{value:"Parameters for simulating process faults",id:"parameters-for-simulating-process-faults",level:4},{value:"Examples for simulating process faults using the service mode",id:"examples-for-simulating-process-faults-using-the-service-mode",level:4},{value:"Terminate a process",id:"terminate-a-process",level:5},{value:"Stop a process",id:"stop-a-process",level:5}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the ",(0,s.kt)("inlineCode",{parentName:"p"},"kill")," command to simulate the scenarios that the process is killed or stopped. You can create experiments either in the command-line mode or service mode."),(0,s.kt)("h2",{id:"create-experiments-using-the-command-line-mode"},"Create experiments using the command-line mode"),(0,s.kt)("p",null,"Before creating an experiment, you can run the following command to see the process fault types that are supported by Chaosd:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process -h\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n")),(0,s.kt)("p",null,"Currently, Chaosd supports simulating that a process is killed or stopped."),(0,s.kt)("h3",{id:"killing-a-process-using-the-command-line-mode"},"Killing a process using the command-line mode"),(0,s.kt)("h4",{id:"commands-for-killing-a-process"},"Commands for killing a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -h\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help                 help for kill\n  -p, --process string       The process name or the process ID\n  -r, --recover-cmd string   The command to be run when recovering experiment\n  -s, --signal int           The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n")),(0,s.kt)("h4",{id:"configuration-description-for-killing-a-process"},"Configuration description for killing a process"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"process")),(0,s.kt)("td",{parentName:"tr",align:"left"},"p"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be injected faults"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"recover-cmd")),(0,s.kt)("td",{parentName:"tr",align:"left"},"r"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The command to be run when recovering experiment"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"signal")),(0,s.kt)("td",{parentName:"tr",align:"left"},"s"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The provided value of the process signal"),(0,s.kt)("td",{parentName:"tr",align:"left"},"int; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},"9"),". Currently, only ",(0,s.kt)("inlineCode",{parentName:"td"},"SIGKILL"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"SIGTERM"),", and ",(0,s.kt)("inlineCode",{parentName:"td"},"SIGSTOP")," are supported.")))),(0,s.kt)("h4",{id:"example-for-killing-a-process"},"Example for killing a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -p python\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Only the experiments whose ",(0,s.kt)("inlineCode",{parentName:"p"},"signal")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"SIGSTOP")," can be recovered.")),(0,s.kt)("h3",{id:"stopping-a-process-using-the-command-line-mode"},"Stopping a process using the command-line mode"),(0,s.kt)("h4",{id:"command-for-stopping-a-process"},"Command for stopping a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -h\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,s.kt)("h4",{id:"configuration-description-of-stopping-a-process"},"Configuration description of stopping a process"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"process")),(0,s.kt)("td",{parentName:"tr",align:"left"},"p"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be stopped"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")))),(0,s.kt)("h4",{id:"example-for-stopping-a-process"},"Example for stopping a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -p python\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n")),(0,s.kt)("h2",{id:"create-experiments-using-the-service-mode"},"Create experiments using the service mode"),(0,s.kt)("p",null,"To create experiments using the service mode, follow the instructions below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run Chaosd in the service mode:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send a ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," HTTP request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/attack/process")," path of the Chaosd service."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 172.16.112.130:31767/api/attack/process -H \"Content-Type:application/json\" -d '{fault-configuration}'\n")),(0,s.kt)("p",{parentName:"li"},"In the above command, you need to configure ",(0,s.kt)("inlineCode",{parentName:"p"},"fault-configuration")," according to the fault types. For the corresponding parameters, refer to the parameters and examples of each fault type in the following sections."))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"When running an experiment, remember to record the UID of the experiment. When you want to end the experiment corresponding to the UID, you need to send a ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," path of the Chaosd service.")),(0,s.kt)("h3",{id:"simulate-process-faults-using-the-service-mode"},"Simulate process faults using the service mode"),(0,s.kt)("h4",{id:"parameters-for-simulating-process-faults"},"Parameters for simulating process faults"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"process")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be injected faults"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"signal")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The provided value of the process signal"),(0,s.kt)("td",{parentName:"tr",align:"left"},"int; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},"9"))))),(0,s.kt)("h4",{id:"examples-for-simulating-process-faults-using-the-service-mode"},"Examples for simulating process faults using the service mode"),(0,s.kt)("h5",{id:"terminate-a-process"},"Terminate a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":15}\'\n')),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n')),(0,s.kt)("h5",{id:"stop-a-process"},"Stop a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":19}\'\n')),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"a00cca2b-eba7-4716-86b3-3e66f94880f7"}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Only the experiments whose ",(0,s.kt)("inlineCode",{parentName:"p"},"signal")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"SIGSTOP")," can be recovered.")))}m.isMDXComponent=!0}}]);