"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||s;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const s={title:"Run a Chaos Experiment"},r=void 0,i={unversionedId:"run-a-chaos-experiment",id:"version-2.3.3/run-a-chaos-experiment",title:"Run a Chaos Experiment",description:"This document describes how to create, run, view, pause, update, and delete Chaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-2.3.3/run-a-chaos-experiment.md",sourceDirName:".",slug:"/run-a-chaos-experiment",permalink:"/docs/2.3.3/run-a-chaos-experiment",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/run-a-chaos-experiment.md",tags:[],version:"2.3.3",frontMatter:{title:"Run a Chaos Experiment"},sidebar:"docs",previous:{title:"Define Scheduling Rules",permalink:"/docs/2.3.3/define-scheduling-rules"},next:{title:"Inspect Results of Chaos Experiments",permalink:"/docs/2.3.3/inspect-chaos-experiments"}},l={},p=[{value:"Create Chaos experiments",id:"create-chaos-experiments",level:2},{value:"One-time Chaos experiments",id:"one-time-chaos-experiments",level:3},{value:"Scheduled or cyclic Chaos experiments",id:"scheduled-or-cyclic-chaos-experiments",level:3},{value:"Pause Chaos experiments",id:"pause-chaos-experiments",level:2},{value:"Pause or resume Chaos experiments using commands",id:"pause-or-resume-chaos-experiments-using-commands",level:3},{value:"Pause or resume Chaos experiments using Chaos Dashboard",id:"pause-or-resume-chaos-experiments-using-chaos-dashboard",level:3},{value:"Update Chaos experiments",id:"update-chaos-experiments",level:2},{value:"Update Chaos experiments using commands",id:"update-chaos-experiments-using-commands",level:3},{value:"Update Chaos experiments using Chaos Dashboard",id:"update-chaos-experiments-using-chaos-dashboard",level:3},{value:"Delete Chaos experiments",id:"delete-chaos-experiments",level:2},{value:"Delete Chaos experiments using commands",id:"delete-chaos-experiments-using-commands",level:3},{value:"Delete Chaos experiments using Chaos Dashboard",id:"delete-chaos-experiments-using-chaos-dashboard",level:3}],c={toc:p};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to create, run, view, pause, update, and delete Chaos experiments in Chaos Mesh."),(0,o.kt)("h2",{id:"create-chaos-experiments"},"Create Chaos experiments"),(0,o.kt)("p",null,"You can create the following types of Chaos experiments in Chaos Mesh:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One-time Chaos experiments: The smallest instance of Chaos experiments. Once a one-time experiment is created, Chaos Mesh immediately injects faults into the target test machine according to the experiment configurations. If the ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," parameter is configured, injected faults will be restored automatically after a period of time specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"duration"),". When the Chaos experiment is paused or deleted, injected faults will be restored immediately."),(0,o.kt)("li",{parentName:"ul"},"Scheduled or cyclic Chaos experiments: Chaos experiments that can be run at a regular interval or cyclically. You need to define the scheduling rules for the experiment when creating this type of Chaos experiment.")),(0,o.kt)("h3",{id:"one-time-chaos-experiments"},"One-time Chaos experiments"),(0,o.kt)("p",null,"To create a one-time Chaos experiment, you can use one of the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Chaos Dashboard to create a new Chaos experiment, then click ",(0,o.kt)("strong",{parentName:"li"},"Submit")," to run the experiment. For more details, refer to the documentation of each specific Chaos experiment type."),(0,o.kt)("li",{parentName:"ul"},"Use a YAML file to define the Chaos experiment, then create and run the experiment using ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl"),". If you want to create and run a Chaos experiment in this way, take the following steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new YAML file to define a Chaos experiment. Add configuration parameters in the file based on the type of Chaos experiment you want to create."),(0,o.kt)("p",{parentName:"li"},"Take a NetworkChaos experiment as an example. Save the following YAML text as ",(0,o.kt)("inlineCode",{parentName:"p"},"network-delay.yaml"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show' # the label of the pod for chaos injection\n  delay:\n    latency: '10ms'\n  duration: '12s'\n")),(0,o.kt)("p",{parentName:"li"},"The above YAML example defines a network latency fault lasting for ",(0,o.kt)("inlineCode",{parentName:"p"},"12 seconds"),", targeting applications with the ",(0,o.kt)("inlineCode",{parentName:"p"},'"app": "web-show"')," tag under the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace. For more configuration information about the NetworkChaos experiment, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.3/simulate-network-chaos-on-kubernetes"},"Simulate network chaos"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following command to create and run this Chaos experiment."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f network-delay.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To view the running status of the Chaos experiment after it begins, use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to check the ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," of this experiment object."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl describe networkchaos network-delay\n")),(0,o.kt)("p",{parentName:"li"},"For detailed steps to check the result of the Chaos experiment, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.3/inspect-chaos-experiments"},"Inspect Chaos experiments"),"."))),(0,o.kt)("h3",{id:"scheduled-or-cyclic-chaos-experiments"},"Scheduled or cyclic Chaos experiments"),(0,o.kt)("p",null,"Chaos Mesh offers the ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," object to create scheduled Chaos experiments and cyclic Chaos experiments."),(0,o.kt)("p",null,"To create this type of Chaos experiments, take the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new YAML file to define a Chaos experiment. You need to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," parameter in the YAML file to define specific schedule rules for the experiment, and then configure other parameters according to the type of Chaos experiments you want to create."),(0,o.kt)("p",{parentName:"li"},"Take a scheduled NetworkChaos experiment as an example. Save the following YAML text as ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule-delay-example.yaml"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '12s'\n")),(0,o.kt)("p",{parentName:"li"},"The above YAML example defines a network latency fault that can be automatically triggered at the fifth minute of each hour.For detailed introduction of scheduling rules, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.3/define-scheduling-rules"},"Define scheduling rules"),"."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you do not set the ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," parameter, the fault behavior keeps taking effect until you pause or delete the Chaos experiment."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following command to create and run this Chaos experiment."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f schedule-delay-example.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To view the running status of the Chaos experiment after it begins, use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to check the ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," of this experiment object."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl describe networkchaos schedule-delay-example\n")),(0,o.kt)("p",{parentName:"li"},"For detailed steps to check the result of the Chaos experiment, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.3/inspect-chaos-experiments"},"Inspect Chaos experiments"),"."))),(0,o.kt)("h2",{id:"pause-chaos-experiments"},"Pause Chaos experiments"),(0,o.kt)("h3",{id:"pause-or-resume-chaos-experiments-using-commands"},"Pause or resume Chaos experiments using commands"),(0,o.kt)("p",null,"For a running Chaos experiment, you can pause the experiment by setting a pause annotation to it using commands."),(0,o.kt)("p",null,"For example, you can use the following command to pause a Chaos experiment named ",(0,o.kt)("inlineCode",{parentName:"p"},"network-delay")," in the default namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause=true\n")),(0,o.kt)("p",null,"After this command is executed, Chaos Mesh restores the injected faults immediately. If you want to resume this Chaos experiment from the pause state to the normal running state, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause-\n")),(0,o.kt)("h3",{id:"pause-or-resume-chaos-experiments-using-chaos-dashboard"},"Pause or resume Chaos experiments using Chaos Dashboard"),(0,o.kt)("p",null,"If you want to pause or resume a Chaos experiment using Chaos Dashboard, find the Chaos experiment you want on the Dashboard and click the ",(0,o.kt)("strong",{parentName:"p"},"Pause")," button or the ",(0,o.kt)("strong",{parentName:"p"},"Start")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pause experiment",src:a(63592).Z,width:"809",height:"382"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Restart experiment",src:a(74182).Z,width:"797",height:"371"})),(0,o.kt)("h2",{id:"update-chaos-experiments"},"Update Chaos experiments"),(0,o.kt)("h3",{id:"update-chaos-experiments-using-commands"},"Update Chaos experiments using commands"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," field of Chaos experiment is currently not allowed to be updated."),(0,o.kt)("p",null,"For more details, refer to the related ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues/2227"},"GitHub issue"),"."),(0,o.kt)("h3",{id:"update-chaos-experiments-using-chaos-dashboard"},"Update Chaos experiments using Chaos Dashboard"),(0,o.kt)("p",null,"The Chaos Dashboard doesn't support updating Chaos experiments at this time because the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," field of Chaos experiments is not allowed to be updated."),(0,o.kt)("h2",{id:"delete-chaos-experiments"},"Delete Chaos experiments"),(0,o.kt)("h3",{id:"delete-chaos-experiments-using-commands"},"Delete Chaos experiments using commands"),(0,o.kt)("p",null,"After a Chaos experiment finishes, you can delete the experiment using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl delete")," command. Once you delete the Chaos experiment, the injected fault will be restored immediately:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete -f network-delay.yaml\n# or delete the chaos object directly\nkubectl delete networkchaos network-delay\n")),(0,o.kt)("p",null,"If the delete operation is blocked, this means that some fault behaviors of the target object cannot be restored. You can check the Chaos Mesh logs for troubleshooting or directly create a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh/issues"},"GitHub issue")," to report this problem to the Chaos Mesh team. Besides, you can forcibly delete the Chaos experiment with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n")),(0,o.kt)("h3",{id:"delete-chaos-experiments-using-chaos-dashboard"},"Delete Chaos experiments using Chaos Dashboard"),(0,o.kt)("p",null,"If you want to delete a Chaos experiment on Chaos Dashboard and archive it to the experiment history, you can click the corresponding ",(0,o.kt)("strong",{parentName:"p"},"Archive")," button of the Chaos experiment."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Archive experiment",src:a(80618).Z,width:"762",height:"382"})))}h.isMDXComponent=!0},80618:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/archive-33c067edcce30d32c7d764885935cf8a.png"},63592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pause-14bca7ea6399b3947f9f30df8fff72c6.png"},74182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restart-144345c6ff92c96f05b9b6149b64f24c.png"}}]);