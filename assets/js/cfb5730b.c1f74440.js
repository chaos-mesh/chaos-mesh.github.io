"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1403],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89190:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i={title:"Run a Chaos Experiment"},s=void 0,l={unversionedId:"run-a-chaos-experiment",id:"run-a-chaos-experiment",isDocsHomePage:!1,title:"Run a Chaos Experiment",description:"This document describes how to create, run, view, pause, update, and delete Chaos experiments in Chaos Mesh.",source:"@site/docs/run-a-chaos-experiment.md",sourceDirName:".",slug:"/run-a-chaos-experiment",permalink:"/docs/next/run-a-chaos-experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/run-a-chaos-experiment.md",version:"current",frontMatter:{title:"Run a Chaos Experiment"},sidebar:"docs",previous:{title:"Define Scheduling Rules",permalink:"/docs/next/define-scheduling-rules"},next:{title:"Inspect Chaos Experiments",permalink:"/docs/next/inspect-chaos-experiments"}},p=[{value:"Create Chaos experiments",id:"create-chaos-experiments",children:[{value:"One-time Chaos experiments",id:"one-time-chaos-experiments",children:[]},{value:"Scheduled or cyclic Chaos experiments",id:"scheduled-or-cyclic-chaos-experiments",children:[]}]},{value:"Pause Chaos experiments",id:"pause-chaos-experiments",children:[{value:"Pause or resume Chaos experiments using commands",id:"pause-or-resume-chaos-experiments-using-commands",children:[]},{value:"Pause or resume Chaos experiments using Chaos Dashboard",id:"pause-or-resume-chaos-experiments-using-chaos-dashboard",children:[]}]},{value:"Update Chaos experiments",id:"update-chaos-experiments",children:[{value:"Update Chaos experiments using commands",id:"update-chaos-experiments-using-commands",children:[]},{value:"Update Chaos experiments using Chaos Dashboard",id:"update-chaos-experiments-using-chaos-dashboard",children:[]}]},{value:"Delete Chaos experiments",id:"delete-chaos-experiments",children:[{value:"Delete Chaos experiments using commands",id:"delete-chaos-experiments-using-commands",children:[]},{value:"Delete Chaos experiments using Chaos Dashboard",id:"delete-chaos-experiments-using-chaos-dashboard",children:[]}]}],c={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to create, run, view, pause, update, and delete Chaos experiments in Chaos Mesh."),(0,r.kt)("h2",{id:"create-chaos-experiments"},"Create Chaos experiments"),(0,r.kt)("p",null,"You can create the following types of Chaos experiments in Chaos Mesh:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One-time Chaos experiments: The smallest instance of Chaos experiments. Once a one-time experiment is created, Chaos Mesh immediately injects faults into the target test machine according to the experiment configurations. If the ",(0,r.kt)("inlineCode",{parentName:"li"},"duration")," parameter is configured, injected faults will be restored automatically after a period of time specified by ",(0,r.kt)("inlineCode",{parentName:"li"},"duration"),". When the Chaos experiment is paused or deleted, injected faults will be restored immediately."),(0,r.kt)("li",{parentName:"ul"},"Scheduled or cyclic Chaos experiments: Chaos experiments that can be run at a regular interval or cyclically. You need to define the scheduling rules for the experiment when creating this type of Chaos experiment.")),(0,r.kt)("h3",{id:"one-time-chaos-experiments"},"One-time Chaos experiments"),(0,r.kt)("p",null,"To create a one-time Chaos experiment, you can use one of the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Chaos Dashboard to create a new Chaos experiment, then click ",(0,r.kt)("strong",{parentName:"li"},"Submit")," to run the experiment. For more details, refer to the documentation of each specific Chaos experiment type."),(0,r.kt)("li",{parentName:"ul"},"Use a YAML file to define the Chaos experiment, then create and run the experiment using ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),". If you want to create and run a Chaos experiment in this way, take the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new YAML file to define a Chaos experiment. Add configuration parameters in the file based on the type of Chaos experiment you want to create."),(0,r.kt)("p",{parentName:"li"},"Take a NetworkChaos experiment as an example. Save the following YAML text as ",(0,r.kt)("inlineCode",{parentName:"p"},"network-delay.yaml"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show' # the label of the pod for chaos injection\n  delay:\n    latency: '10ms'\n  duration: '12s'\n")),(0,r.kt)("p",{parentName:"li"},"The above YAML example defines a network latency fault lasting for ",(0,r.kt)("inlineCode",{parentName:"p"},"12 seconds"),", targeting applications with the ",(0,r.kt)("inlineCode",{parentName:"p"},'"app": "web-show"')," tag under the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace. For more configuration information about the NetworkChaos experiment, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/simulate-network-chaos-on-kubernetes"},"Simulate network chaos"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the following command to create and run this Chaos experiment."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f network-delay.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To view the running status of the Chaos experiment after it begins, use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to check the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," of this experiment object."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl describe networkchaos network-delay\n")),(0,r.kt)("p",{parentName:"li"},"For detailed steps to check the result of the Chaos experiment, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/inspect-chaos-experiments"},"Inspect Chaos experiments"),"."))),(0,r.kt)("h3",{id:"scheduled-or-cyclic-chaos-experiments"},"Scheduled or cyclic Chaos experiments"),(0,r.kt)("p",null,"Chaos Mesh offers the ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," object to create scheduled Chaos experiments and cyclic Chaos experiments."),(0,r.kt)("p",null,"To create this type of Chaos experiments, take the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new YAML file to define a Chaos experiment. You need to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," parameter in the YAML file to define specific schedule rules for the experiment, and then configure other parameters according to the type of Chaos experiments you want to create."),(0,r.kt)("p",{parentName:"li"},"Take a scheduled NetworkChaos experiment as an example. Save the following YAML text as ",(0,r.kt)("inlineCode",{parentName:"p"},"schedule-delay-example.yaml"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '12s'\n")),(0,r.kt)("p",{parentName:"li"},"The above YAML example defines a network latency fault that can be automatically triggered at the fifth minute of each hour.For detailed introduction of scheduling rules, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/define-scheduling-rules"},"Define scheduling rules"),"."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you do not set the ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," parameter, the fault behavior keeps taking effect until you pause or delete the Chaos experiment.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the following command to create and run this Chaos experiment."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f schedule-delay-example.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To view the running status of the Chaos experiment after it begins, use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to check the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," of this experiment object."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl describe networkchaos schedule-delay-example\n")),(0,r.kt)("p",{parentName:"li"},"For detailed steps to check the result of the Chaos experiment, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/inspect-chaos-experiments"},"Inspect Chaos experiments"),"."))),(0,r.kt)("h2",{id:"pause-chaos-experiments"},"Pause Chaos experiments"),(0,r.kt)("h3",{id:"pause-or-resume-chaos-experiments-using-commands"},"Pause or resume Chaos experiments using commands"),(0,r.kt)("p",null,"For a running Chaos experiment, you can pause the experiment by setting a pause annotation to it using commands."),(0,r.kt)("p",null,"For example, you can use the following command to pause a Chaos experiment named ",(0,r.kt)("inlineCode",{parentName:"p"},"network-delay")," in the default namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl annoate networkchaos network-delay experiment.chaos-mesh.org/pause=true\n")),(0,r.kt)("p",null,"After this command is executed, Chaos Mesh restores the injected faults immediately. If you want to resume this Chaos experiment from the pause state to the normal running state, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause-\n")),(0,r.kt)("h3",{id:"pause-or-resume-chaos-experiments-using-chaos-dashboard"},"Pause or resume Chaos experiments using Chaos Dashboard"),(0,r.kt)("p",null,"If you want to pause or resume a Chaos experiment using Chaos Dashboard, find the Chaos experiment you want on the Dashboard and click the ",(0,r.kt)("strong",{parentName:"p"},"Pause")," button or the ",(0,r.kt)("strong",{parentName:"p"},"Start")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pause experiment",src:a(36893).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Restart experiment",src:a(41670).Z})),(0,r.kt)("h2",{id:"update-chaos-experiments"},"Update Chaos experiments"),(0,r.kt)("p",null,"If you need to update a Chaos experiment after it is created, you can edit the configuration parameters of the Chaos experiment object."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"For a one-time Chaos experiment that is already running properly, Chaos Mesh currently supports updating only the duration of the fault behavior, that is, the ",(0,r.kt)("inlineCode",{parentName:"li"},"duration")," parameter of the experiment. You cannot change other configuration parameters of the fault."),(0,r.kt)("li",{parentName:"ul"},"For a scheduled or cyclic experiment, updating the ",(0,r.kt)("inlineCode",{parentName:"li"},"duration")," parameter will take effect after the current fault injection is finished.")))),(0,r.kt)("h3",{id:"update-chaos-experiments-using-commands"},"Update Chaos experiments using commands"),(0,r.kt)("p",null,"If you manage Chaos experiments using YAML files, you can use the following commands to update the Chaos experiments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"vim network-delay.yaml # modify network-delay.yaml to what you want\nkubectl apply -f network-delay.yaml\n")),(0,r.kt)("p",null,"You can also use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl patch")," command to update a specific configuration parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl patch networchaos network-delay -p \'{"spec":{"duration":"30s"}}\'\n')),(0,r.kt)("p",null,"After the above command is executed, the duration of the Chaos experiment ",(0,r.kt)("inlineCode",{parentName:"p"},"network-delay")," will be updated to 30s."),(0,r.kt)("p",null,"For more operations to update experiment objects via the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command, see the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"kubectl documentation"),"."),(0,r.kt)("h3",{id:"update-chaos-experiments-using-chaos-dashboard"},"Update Chaos experiments using Chaos Dashboard"),(0,r.kt)("p",null,"If you want to update a Chaos experiment with the Dashboard, you can click the corresponding ",(0,r.kt)("strong",{parentName:"p"},"Update")," button of the experiment and update the experiment by editing the corresponding object."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit experiment",src:a(86822).Z})),(0,r.kt)("h2",{id:"delete-chaos-experiments"},"Delete Chaos experiments"),(0,r.kt)("h3",{id:"delete-chaos-experiments-using-commands"},"Delete Chaos experiments using commands"),(0,r.kt)("p",null,"After a Chaos experiment finishes, you can delete the experiment using the following ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete")," command. Once you delete the Chaos experiment, the injected fault will be restored immediately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete -f network-delay.yaml\n# or delete the chaos object directly\nkubectl delete networkchaos network-delay\n")),(0,r.kt)("p",null,"If the delete operation is blocked, this means that some fault behaviors of the target object cannot be restored. You can check the Chaos Mesh logs for troubleshooting or directly create a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"GitHub issue")," to report this problem to the Chaos Mesh team. Besides, you can forcibly delete the Chaos experiment with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),(0,r.kt)("h3",{id:"delete-chaos-experiments-using-chaos-dashboard"},"Delete Chaos experiments using Chaos Dashboard"),(0,r.kt)("p",null,"If you want to delete a Chaos experiment on Chaos Dashboard and archive it to the experiment history, you can click the corresponding ",(0,r.kt)("strong",{parentName:"p"},"Archive")," button of the Chaos experiment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive experiment",src:a(5394).Z})))}m.isMDXComponent=!0},5394:function(e,t,a){t.Z=a.p+"assets/images/archive-33c067edcce30d32c7d764885935cf8a.png"},86822:function(e,t,a){t.Z=a.p+"assets/images/configuration-58ae6e66b4d4617c87ca7b5d0657c203.png"},36893:function(e,t,a){t.Z=a.p+"assets/images/pause-14bca7ea6399b3947f9f30df8fff72c6.png"},41670:function(e,t,a){t.Z=a.p+"assets/images/restart-144345c6ff92c96f05b9b6149b64f24c.png"}}]);