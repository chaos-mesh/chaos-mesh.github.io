"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6670],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58692:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Simulate Process Faults"},l=void 0,p={unversionedId:"simulate-process-chaos-in-physical-nodes",id:"simulate-process-chaos-in-physical-nodes",isDocsHomePage:!1,title:"Simulate Process Faults",description:"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the kill command to simulate the scenarios that the process is killed or stopped. You can create experiments either in the command-line mode or service mode.",source:"@site/docs/simulate-process-chaos-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-process-chaos-in-physical-nodes",permalink:"/docs/next/simulate-process-chaos-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-process-chaos-in-physical-nodes.md",tags:[],version:"current",frontMatter:{title:"Simulate Process Faults"},sidebar:"docs",previous:{title:"Simulate Faults on Physical Machines",permalink:"/docs/next/simulate-physical-machine-chaos"},next:{title:"Simulate Network Faults",permalink:"/docs/next/simulate-network-chaos-in-physical-nodes"}},c=[{value:"Create experiments using the command-line mode",id:"create-experiments-using-the-command-line-mode",children:[{value:"Killing a process using the command-line mode",id:"killing-a-process-using-the-command-line-mode",children:[{value:"Commands for killing a process",id:"commands-for-killing-a-process",children:[],level:4},{value:"Configuration description for killing a process",id:"configuration-description-for-killing-a-process",children:[],level:4},{value:"Example for killing a process",id:"example-for-killing-a-process",children:[],level:4}],level:3},{value:"Stopping a process using the command-line mode",id:"stopping-a-process-using-the-command-line-mode",children:[{value:"Command for stopping a process",id:"command-for-stopping-a-process",children:[],level:4},{value:"Configuration description of stopping a process",id:"configuration-description-of-stopping-a-process",children:[],level:4},{value:"Example for stopping a process",id:"example-for-stopping-a-process",children:[],level:4}],level:3}],level:2},{value:"Create experiments using the service mode",id:"create-experiments-using-the-service-mode",children:[{value:"Simulate process faults using the service mode",id:"simulate-process-faults-using-the-service-mode",children:[{value:"Parameters for simulating process faults",id:"parameters-for-simulating-process-faults",children:[],level:4},{value:"Examples for simulating process faults using the service mode",id:"examples-for-simulating-process-faults-using-the-service-mode",children:[],level:4}],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to use Chaosd to simulate process faults. The process faults use the Golang interface of the ",(0,s.kt)("inlineCode",{parentName:"p"},"kill")," command to simulate the scenarios that the process is killed or stopped. You can create experiments either in the command-line mode or service mode."),(0,s.kt)("h2",{id:"create-experiments-using-the-command-line-mode"},"Create experiments using the command-line mode"),(0,s.kt)("p",null,"Before creating an experiment, you can run the following command to see the process fault types that are supported by Chaosd:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process -h\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Process attack related commands\n\nUsage:\n  chaosd attack process [command]\n\nAvailable Commands:\n  kill        kill process, default signal 9\n  stop        stop process, this action will stop the process with SIGSTOP\n\nFlags:\n  -h, --help   help for process\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack process [command] --help\" for more information about a command.\n")),(0,s.kt)("p",null,"Currently, Chaosd supports simulating that a process is killed or stopped."),(0,s.kt)("h3",{id:"killing-a-process-using-the-command-line-mode"},"Killing a process using the command-line mode"),(0,s.kt)("h4",{id:"commands-for-killing-a-process"},"Commands for killing a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -h\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kill process, default signal 9\n\nUsage:\n  chaosd attack process kill [flags]\n\nFlags:\n  -h, --help                 help for kill\n  -p, --process string       The process name or the process ID\n  -r, --recover-cmd string   The command to be run when recovering experiment\n  -s, --signal int           The signal number to send (default 9)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n")),(0,s.kt)("h4",{id:"configuration-description-for-killing-a-process"},"Configuration description for killing a process"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"process")),(0,s.kt)("td",{parentName:"tr",align:"left"},"p"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be injected faults"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"recover-cmd")),(0,s.kt)("td",{parentName:"tr",align:"left"},"r"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The command to be run when recovering experiment"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"signal")),(0,s.kt)("td",{parentName:"tr",align:"left"},"s"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The provided value of the process signal"),(0,s.kt)("td",{parentName:"tr",align:"left"},"int; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},"9"),". Currently, only ",(0,s.kt)("inlineCode",{parentName:"td"},"SIGKILL"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"SIGTERM"),", and ",(0,s.kt)("inlineCode",{parentName:"td"},"SIGSTOP")," are supported.")))),(0,s.kt)("h4",{id:"example-for-killing-a-process"},"Example for killing a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process kill -p python\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 10e633ac-0a37-41ba-8b4a-cd5ab92099f9\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Only the experiments whose ",(0,s.kt)("inlineCode",{parentName:"p"},"signal")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"SIGSTOP")," can be recovered."))),(0,s.kt)("h3",{id:"stopping-a-process-using-the-command-line-mode"},"Stopping a process using the command-line mode"),(0,s.kt)("h4",{id:"command-for-stopping-a-process"},"Command for stopping a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -h\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"stop process, this action will stop the process with SIGSTOP\n\nUsage:\n  chaosd attack process stop [flags]\n\nFlags:\n  -h, --help             help for stop\n  -p, --process string   The process name or the process ID\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,s.kt)("h4",{id:"configuration-description-of-stopping-a-process"},"Configuration description of stopping a process"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"process")),(0,s.kt)("td",{parentName:"tr",align:"left"},"p"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be stopped"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")))),(0,s.kt)("h4",{id:"example-for-stopping-a-process"},"Example for stopping a process"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack process stop -p python\n")),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Attack process python successfully, uid: 9cb6b3be-4f5b-4ecb-ae05-51050fcd0010\n")),(0,s.kt)("h2",{id:"create-experiments-using-the-service-mode"},"Create experiments using the service mode"),(0,s.kt)("p",null,"To create experiments using the service mode, follow the instructions below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run Chaosd in the service mode:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd server --port 31767\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send a ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," HTTP request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/attack/process")," path of the Chaosd service."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 172.16.112.130:31767/api/attack/process -H \"Content-Type:application/json\" -d '{fault-configuration}'\n")),(0,s.kt)("p",{parentName:"li"},"In the above command, you need to configure ",(0,s.kt)("inlineCode",{parentName:"p"},"fault-configuration")," according to the fault types. For the corresponding parameters, refer to the parameters and examples of each fault type in the following sections."))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When running an experiment, remember to record the UID of the experiment. When you want to end the experiment corresponding to the UID, you need to send a ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," HTTP request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/attack/{uid}")," path of the Chaosd service."))),(0,s.kt)("h3",{id:"simulate-process-faults-using-the-service-mode"},"Simulate process faults using the service mode"),(0,s.kt)("h4",{id:"parameters-for-simulating-process-faults"},"Parameters for simulating process faults"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"process")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name or the identifier of the process to be injected faults"),(0,s.kt)("td",{parentName:"tr",align:"left"},"string; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},'""'),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"signal")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The provided value of the process signal"),(0,s.kt)("td",{parentName:"tr",align:"left"},"int; the default value is ",(0,s.kt)("inlineCode",{parentName:"td"},"9"))))),(0,s.kt)("h4",{id:"examples-for-simulating-process-faults-using-the-service-mode"},"Examples for simulating process faults using the service mode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{"process":"12345","signal":15}\'\n')),(0,s.kt)("p",null,"The result is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Only the experiments whose ",(0,s.kt)("inlineCode",{parentName:"p"},"signal")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"SIGSTOP")," can be recovered."))))}d.isMDXComponent=!0}}]);