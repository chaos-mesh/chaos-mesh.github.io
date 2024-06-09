"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6124],{56756:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=n(13274),a=n(90073);const o={title:"Run a Chaos Experiment"},i=void 0,r={id:"run-a-chaos-experiment",title:"Run a Chaos Experiment",description:"This document describes how to create, run, view, pause, update, and delete Chaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-2.4.3/run-a-chaos-experiment.md",sourceDirName:".",slug:"/run-a-chaos-experiment",permalink:"/docs/2.4.3/run-a-chaos-experiment",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/run-a-chaos-experiment.md",tags:[],version:"2.4.3",frontMatter:{title:"Run a Chaos Experiment"},sidebar:"docs",previous:{title:"Define Scheduling Rules",permalink:"/docs/2.4.3/define-scheduling-rules"},next:{title:"Inspect Results of Chaos Experiments",permalink:"/docs/2.4.3/inspect-chaos-experiments"}},h={},c=[{value:"Create Chaos experiments",id:"create-chaos-experiments",level:2},{value:"One-time Chaos experiments",id:"one-time-chaos-experiments",level:3},{value:"Scheduled or cyclic Chaos experiments",id:"scheduled-or-cyclic-chaos-experiments",level:3},{value:"Pause Chaos experiments",id:"pause-chaos-experiments",level:2},{value:"Pause or resume Chaos experiments using commands",id:"pause-or-resume-chaos-experiments-using-commands",level:3},{value:"Pause or resume Chaos experiments using Chaos Dashboard",id:"pause-or-resume-chaos-experiments-using-chaos-dashboard",level:3},{value:"Update Chaos experiments",id:"update-chaos-experiments",level:2},{value:"Update Chaos experiments using commands",id:"update-chaos-experiments-using-commands",level:3},{value:"Update Chaos experiments using Chaos Dashboard",id:"update-chaos-experiments-using-chaos-dashboard",level:3},{value:"Delete Chaos experiments",id:"delete-chaos-experiments",level:2},{value:"Delete Chaos experiments using commands",id:"delete-chaos-experiments-using-commands",level:3},{value:"Delete Chaos experiments using Chaos Dashboard",id:"delete-chaos-experiments-using-chaos-dashboard",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"This document describes how to create, run, view, pause, update, and delete Chaos experiments in Chaos Mesh."}),"\n",(0,t.jsx)(s.h2,{id:"create-chaos-experiments",children:"Create Chaos experiments"}),"\n",(0,t.jsx)(s.p,{children:"You can create the following types of Chaos experiments in Chaos Mesh:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["One-time Chaos experiments: The smallest instance of Chaos experiments. Once a one-time experiment is created, Chaos Mesh immediately injects faults into the target test machine according to the experiment configurations. If the ",(0,t.jsx)(s.code,{children:"duration"})," parameter is configured, injected faults will be restored automatically after a period of time specified by ",(0,t.jsx)(s.code,{children:"duration"}),". When the Chaos experiment is paused or deleted, injected faults will be restored immediately."]}),"\n",(0,t.jsx)(s.li,{children:"Scheduled or cyclic Chaos experiments: Chaos experiments that can be run at a regular interval or cyclically. You need to define the scheduling rules for the experiment when creating this type of Chaos experiment."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"one-time-chaos-experiments",children:"One-time Chaos experiments"}),"\n",(0,t.jsx)(s.p,{children:"To create a one-time Chaos experiment, you can use one of the following methods:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Use Chaos Dashboard to create a new Chaos experiment, then click ",(0,t.jsx)(s.strong,{children:"Submit"})," to run the experiment. For more details, refer to the documentation of each specific Chaos experiment type."]}),"\n",(0,t.jsxs)(s.li,{children:["Use a YAML file to define the Chaos experiment, then create and run the experiment using ",(0,t.jsx)(s.code,{children:"kubectl"}),". If you want to create and run a Chaos experiment in this way, take the following steps:"]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Create a new YAML file to define a Chaos experiment. Add configuration parameters in the file based on the type of Chaos experiment you want to create."}),"\n",(0,t.jsxs)(s.p,{children:["Take a NetworkChaos experiment as an example. Save the following YAML text as ",(0,t.jsx)(s.code,{children:"network-delay.yaml"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show' # the label of the pod for chaos injection\n  delay:\n    latency: '10ms'\n  duration: '12s'\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The above YAML example defines a network latency fault lasting for ",(0,t.jsx)(s.code,{children:"12 seconds"}),", targeting applications with the ",(0,t.jsx)(s.code,{children:'"app": "web-show"'})," tag under the ",(0,t.jsx)(s.code,{children:"default"})," namespace. For more configuration information about the NetworkChaos experiment, refer to ",(0,t.jsx)(s.a,{href:"/docs/2.4.3/simulate-network-chaos-on-kubernetes",children:"Simulate network chaos"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Execute the following command to create and run this Chaos experiment."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl apply -f network-delay.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To view the running status of the Chaos experiment after it begins, use the following ",(0,t.jsx)(s.code,{children:"kubectl describe"})," command to check the ",(0,t.jsx)(s.code,{children:"status"})," or ",(0,t.jsx)(s.code,{children:"event"})," of this experiment object."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl describe networkchaos network-delay\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For detailed steps to check the result of the Chaos experiment, refer to ",(0,t.jsx)(s.a,{href:"/docs/2.4.3/inspect-chaos-experiments",children:"Inspect Chaos experiments"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"scheduled-or-cyclic-chaos-experiments",children:"Scheduled or cyclic Chaos experiments"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Mesh offers the ",(0,t.jsx)(s.code,{children:"Schedule"})," object to create scheduled Chaos experiments and cyclic Chaos experiments."]}),"\n",(0,t.jsx)(s.p,{children:"To create this type of Chaos experiments, take the following steps:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Create a new YAML file to define a Chaos experiment. You need to configure the ",(0,t.jsx)(s.code,{children:"Schedule"})," parameter in the YAML file to define specific schedule rules for the experiment, and then configure other parameters according to the type of Chaos experiments you want to create."]}),"\n",(0,t.jsxs)(s.p,{children:["Take a scheduled NetworkChaos experiment as an example. Save the following YAML text as ",(0,t.jsx)(s.code,{children:"schedule-delay-example.yaml"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '12s'\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The above YAML example defines a network latency fault that can be automatically triggered at the fifth minute of each hour.For detailed introduction of scheduling rules, refer to ",(0,t.jsx)(s.a,{href:"/docs/2.4.3/define-scheduling-rules",children:"Define scheduling rules"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["If you do not set the ",(0,t.jsx)(s.code,{children:"duration"})," parameter, the fault behavior keeps taking effect until you pause or delete the Chaos experiment."]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Execute the following command to create and run this Chaos experiment."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl apply -f schedule-delay-example.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To view the running status of the Chaos experiment after it begins, use the following ",(0,t.jsx)(s.code,{children:"kubectl describe"})," command to check the ",(0,t.jsx)(s.code,{children:"status"})," or ",(0,t.jsx)(s.code,{children:"event"})," of this experiment object."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl describe networkchaos schedule-delay-example\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For detailed steps to check the result of the Chaos experiment, refer to ",(0,t.jsx)(s.a,{href:"/docs/2.4.3/inspect-chaos-experiments",children:"Inspect Chaos experiments"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"pause-chaos-experiments",children:"Pause Chaos experiments"}),"\n",(0,t.jsx)(s.h3,{id:"pause-or-resume-chaos-experiments-using-commands",children:"Pause or resume Chaos experiments using commands"}),"\n",(0,t.jsx)(s.p,{children:"For a running Chaos experiment, you can pause the experiment by setting a pause annotation to it using commands."}),"\n",(0,t.jsxs)(s.p,{children:["For example, you can use the following command to pause a Chaos experiment named ",(0,t.jsx)(s.code,{children:"network-delay"})," in the default namespace:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause=true\n"})}),"\n",(0,t.jsx)(s.p,{children:"After this command is executed, Chaos Mesh restores the injected faults immediately. If you want to resume this Chaos experiment from the pause state to the normal running state, use the following command:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause-\n"})}),"\n",(0,t.jsx)(s.h3,{id:"pause-or-resume-chaos-experiments-using-chaos-dashboard",children:"Pause or resume Chaos experiments using Chaos Dashboard"}),"\n",(0,t.jsxs)(s.p,{children:["If you want to pause or resume a Chaos experiment using Chaos Dashboard, find the Chaos experiment you want on the Dashboard and click the ",(0,t.jsx)(s.strong,{children:"Pause"})," button or the ",(0,t.jsx)(s.strong,{children:"Start"})," button."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Pause experiment",src:n(74141).A+"",width:"809",height:"382"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Restart experiment",src:n(62250).A+"",width:"797",height:"371"})}),"\n",(0,t.jsx)(s.h2,{id:"update-chaos-experiments",children:"Update Chaos experiments"}),"\n",(0,t.jsx)(s.h3,{id:"update-chaos-experiments-using-commands",children:"Update Chaos experiments using commands"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Spec"})," field of Chaos experiment is currently not allowed to be updated."]}),"\n",(0,t.jsxs)(s.p,{children:["For more details, refer to the related ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues/2227",children:"GitHub issue"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"update-chaos-experiments-using-chaos-dashboard",children:"Update Chaos experiments using Chaos Dashboard"}),"\n",(0,t.jsxs)(s.p,{children:["The Chaos Dashboard doesn't support updating Chaos experiments at this time because the ",(0,t.jsx)(s.code,{children:"Spec"})," field of Chaos experiments is not allowed to be updated."]}),"\n",(0,t.jsx)(s.h2,{id:"delete-chaos-experiments",children:"Delete Chaos experiments"}),"\n",(0,t.jsx)(s.h3,{id:"delete-chaos-experiments-using-commands",children:"Delete Chaos experiments using commands"}),"\n",(0,t.jsxs)(s.p,{children:["After a Chaos experiment finishes, you can delete the experiment using the following ",(0,t.jsx)(s.code,{children:"kubectl delete"})," command. Once you delete the Chaos experiment, the injected fault will be restored immediately:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl delete -f network-delay.yaml\n# or delete the chaos object directly\nkubectl delete networkchaos network-delay\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If the delete operation is blocked, this means that some fault behaviors of the target object cannot be restored. You can check the Chaos Mesh logs for troubleshooting or directly create a ",(0,t.jsx)(s.a,{href:"https://github.com/pingcap/chaos-mesh/issues",children:"GitHub issue"})," to report this problem to the Chaos Mesh team. Besides, you can forcibly delete the Chaos experiment with the following command:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n"})}),"\n",(0,t.jsx)(s.h3,{id:"delete-chaos-experiments-using-chaos-dashboard",children:"Delete Chaos experiments using Chaos Dashboard"}),"\n",(0,t.jsxs)(s.p,{children:["If you want to delete a Chaos experiment on Chaos Dashboard and archive it to the experiment history, you can click the corresponding ",(0,t.jsx)(s.strong,{children:"Archive"})," button of the Chaos experiment."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Archive experiment",src:n(46073).A+"",width:"762",height:"382"})})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},46073:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/archive-33c067edcce30d32c7d764885935cf8a.png"},74141:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/pause-14bca7ea6399b3947f9f30df8fff72c6.png"},62250:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/restart-144345c6ff92c96f05b9b6149b64f24c.png"},90073:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(79474);const a={},o=t.createContext(a);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);