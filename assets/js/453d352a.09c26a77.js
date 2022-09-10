"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[92086],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const s={title:"Simulate Process Faults"},r=void 0,l={unversionedId:"simulate-process-chaos-in-physical-nodes",id:"version-2.0.7/simulate-process-chaos-in-physical-nodes",title:"Simulate Process Faults",description:"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the kill command to simulate the scenarios that the process is killed or stopped. You can create experiments in the command-line mode.",source:"@site/versioned_docs/version-2.0.7/simulate-process-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-process-chaos-in-physical-nodes",permalink:"/docs/2.0.7/simulate-process-chaos-in-physical-nodes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.7/simulate-process-chaos-in-physical-nodes.md",tags:[],version:"2.0.7",frontMatter:{title:"Simulate Process Faults"},sidebar:"version-2.0.7/docs",previous:{title:"Chaosd Introduction",permalink:"/docs/2.0.7/chaosd-overview"},next:{title:"Simulate Network Faults",permalink:"/docs/2.0.7/simulate-network-chaos-in-physical-nodes"}},i={},p=[{value:"Create experiments using the command-line mode",id:"create-experiments-using-the-command-line-mode",level:2},{value:"Killing a process using the command-line mode",id:"killing-a-process-using-the-command-line-mode",level:3},{value:"Command for killing a process",id:"command-for-killing-a-process",level:4},{value:"Configuration description for killing a process",id:"configuration-description-for-killing-a-process",level:4},{value:"Example for killing a process",id:"example-for-killing-a-process",level:4},{value:"Stopping a process using the command-line mode",id:"stopping-a-process-using-the-command-line-mode",level:3},{value:"Command for stopping a process",id:"command-for-stopping-a-process",level:4},{value:"Configuration description for stopping a process",id:"configuration-description-for-stopping-a-process",level:4},{value:"Example for stopping a process",id:"example-for-stopping-a-process",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the ",(0,o.kt)("inlineCode",{parentName:"p"},"kill")," command to simulate the scenarios that the process is killed or stopped. You can create experiments in the command-line mode."),(0,o.kt)("h2",{id:"create-experiments-using-the-command-line-mode"},"Create experiments using the command-line mode"),(0,o.kt)("p",null,"Before creating an experiment, you can run the following command to see the process fault types that are supported by Chaosd:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process -h\n")),(0,o.kt)("p",null,"The result is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n")),(0,o.kt)("p",null,"Currently, Chaosd supports simulating that a process is killed or stopped."),(0,o.kt)("h3",{id:"killing-a-process-using-the-command-line-mode"},"Killing a process using the command-line mode"),(0,o.kt)("h4",{id:"command-for-killing-a-process"},"Command for killing a process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -h\n")),(0,o.kt)("p",null,"The result is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help             help for kill\n  -p, --process string   The process name or the process ID\n  -s, --signal int       The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,o.kt)("h4",{id:"configuration-description-for-killing-a-process"},"Configuration description for killing a process"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"process")),(0,o.kt)("td",{parentName:"tr",align:"left"},"p"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be injected faults"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,o.kt)("inlineCode",{parentName:"td"},'""'),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"signal")),(0,o.kt)("td",{parentName:"tr",align:"left"},"s"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The provided value of the process signal"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int; the default value is ",(0,o.kt)("inlineCode",{parentName:"td"},"9"),". Currently, only ",(0,o.kt)("inlineCode",{parentName:"td"},"SIGKILL"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"SIGTERM"),", and ",(0,o.kt)("inlineCode",{parentName:"td"},"SIGSTOP")," are supported.")))),(0,o.kt)("h4",{id:"example-for-killing-a-process"},"Example for killing a process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -p python\n")),(0,o.kt)("p",null,"The result is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n")),(0,o.kt)("h3",{id:"stopping-a-process-using-the-command-line-mode"},"Stopping a process using the command-line mode"),(0,o.kt)("h4",{id:"command-for-stopping-a-process"},"Command for stopping a process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -h\n")),(0,o.kt)("p",null,"The result is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,o.kt)("h4",{id:"configuration-description-for-stopping-a-process"},"Configuration description for stopping a process"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"process")),(0,o.kt)("td",{parentName:"tr",align:"left"},"p"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be stopped"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,o.kt)("inlineCode",{parentName:"td"},'""'),".")))),(0,o.kt)("h4",{id:"example-for-stopping-a-process"},"Example for stopping a process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -p python\n")),(0,o.kt)("p",null,"The result is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n")))}d.isMDXComponent=!0}}]);