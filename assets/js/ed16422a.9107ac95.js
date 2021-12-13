"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8086],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=s,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7649:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),o=["components"],l={title:"Simulate Process Faults"},i=void 0,p={unversionedId:"simulate-process-chaos-in-physical-nodes",id:"version-2.1.1/simulate-process-chaos-in-physical-nodes",isDocsHomePage:!1,title:"Simulate Process Faults",description:"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the kill command to simulate the scenarios that the process is killed or stopped. You can create experiments either in command-line mode or service mode.",source:"@site/versioned_docs/version-2.1.1/simulate-process-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-process-chaos-in-physical-nodes",permalink:"/docs/simulate-process-chaos-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.1/simulate-process-chaos-in-physical-nodes.md",tags:[],version:"2.1.1",frontMatter:{title:"Simulate Process Faults"},sidebar:"version-2.1.1/docs",previous:{title:"Simulate Faults on Physical Machine",permalink:"/docs/simulate-physical-machine-chaos"},next:{title:"Simulate Network Faults",permalink:"/docs/simulate-network-chaos-in-physical-nodes"}},c=[{value:"Create experiments in command-line mode",id:"create-experiments-in-command-line-mode",children:[{value:"Killing a process",id:"killing-a-process",children:[{value:"Command simulating that a process is killed",id:"command-simulating-that-a-process-is-killed",children:[],level:4},{value:"Configuration description of simulating a process being killed",id:"configuration-description-of-simulating-a-process-being-killed",children:[],level:4},{value:"Example simulating that a process is killed",id:"example-simulating-that-a-process-is-killed",children:[],level:4}],level:3},{value:"Stopping a process",id:"stopping-a-process",children:[{value:"Command simulating that a process is stopped",id:"command-simulating-that-a-process-is-stopped",children:[],level:4},{value:"Configuration description of simulating a process being stopped",id:"configuration-description-of-simulating-a-process-being-stopped",children:[],level:4},{value:"Example simulating that a process is stopped",id:"example-simulating-that-a-process-is-stopped",children:[],level:4}],level:3}],level:2},{value:"Create experiments in service mode",id:"create-experiments-in-service-mode",children:[],level:2}],d={toc:c};function u(e){var t=e.components,a=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the kill command to simulate the scenarios that the process is killed or stopped. You can create experiments either in command-line mode or service mode."),(0,r.kt)("h2",{id:"create-experiments-in-command-line-mode"},"Create experiments in command-line mode"),(0,r.kt)("p",null,"Before creating an experiment, you can run the following command to see the process fault types that are supported by Chaosd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process -h\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n")),(0,r.kt)("p",null,"Currently, Chaosd supports simulating that a process is killed or stopped."),(0,r.kt)("h3",{id:"killing-a-process"},"Killing a process"),(0,r.kt)("h4",{id:"command-simulating-that-a-process-is-killed"},"Command simulating that a process is killed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -h\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help             help for kill\n  -p, --process string   The process name or the process ID\n  -s, --signal int       The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-description-of-simulating-a-process-being-killed"},"Configuration description of simulating a process being killed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"process"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name or identifier of the process that needs to be killed"),(0,r.kt)("td",{parentName:"tr",align:"left"},'string; the default value is "".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"signal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The provided value of the process signal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int; the default value is 9. Currently, only SIGKILL, SIGTERM, and SIGSTOP are supported.")))),(0,r.kt)("h4",{id:"example-simulating-that-a-process-is-killed"},"Example simulating that a process is killed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -p python\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n")),(0,r.kt)("h3",{id:"stopping-a-process"},"Stopping a process"),(0,r.kt)("h4",{id:"command-simulating-that-a-process-is-stopped"},"Command simulating that a process is stopped"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -h\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,r.kt)("h4",{id:"configuration-description-of-simulating-a-process-being-stopped"},"Configuration description of simulating a process being stopped"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"process"),(0,r.kt)("td",{parentName:"tr",align:"left"},"p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name or identifier of the process that needs to be stopped"),(0,r.kt)("td",{parentName:"tr",align:"left"},'string; the default value is "".')))),(0,r.kt)("h4",{id:"example-simulating-that-a-process-is-stopped"},"Example simulating that a process is stopped"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -p python\n")),(0,r.kt)("p",null,"The output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n")),(0,r.kt)("h2",{id:"create-experiments-in-service-mode"},"Create experiments in service mode"),(0,r.kt)("p",null,"(To be added)"))}u.isMDXComponent=!0}}]);