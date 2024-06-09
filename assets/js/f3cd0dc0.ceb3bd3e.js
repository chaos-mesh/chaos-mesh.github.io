"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4826],{50813:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=r(13274),n=r(90073);const i={title:"Simulate Stress Scenarios"},d=void 0,c={id:"simulate-heavy-stress-on-kubernetes",title:"Simulate Stress Scenarios",description:"StressChaos Introduction",source:"@site/docs/simulate-heavy-stress-on-kubernetes.md",sourceDirName:".",slug:"/simulate-heavy-stress-on-kubernetes",permalink:"/docs/next/simulate-heavy-stress-on-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-heavy-stress-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"Simulate Stress Scenarios"},sidebar:"docs",previous:{title:"Simulate Network Faults",permalink:"/docs/next/simulate-network-chaos-on-kubernetes"},next:{title:"Simulate File I/O Faults",permalink:"/docs/next/simulate-io-chaos-on-kubernetes"}},h={},o=[{value:"StressChaos Introduction",id:"stresschaos-introduction",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",level:2},{value:"Field description",id:"field-description",level:3},{value:"Stressors",id:"stressors",level:4},{value:"MemoryStressor",id:"memorystressor",level:5},{value:"CPUStressor",id:"cpustressor",level:5}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"stresschaos-introduction",children:"StressChaos Introduction"}),"\n",(0,t.jsx)(s.p,{children:"Chaos Mesh provides StressChaos experiments to simulate stress scenarios inside containers. This document describes how to create StressChaos experiments and how to prepare the corresponding configuration file."}),"\n",(0,t.jsx)(s.p,{children:"You can create experiments using either Chaos Dashboard or the YAML configuration files."}),"\n",(0,t.jsx)(s.h2,{id:"create-experiments-using-chaos-dashboard",children:"Create experiments using Chaos Dashboard"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Open Chaos Dashboard, and click ",(0,t.jsx)(s.strong,{children:"NEW EXPERIMENT"})," on the page to create a new experiment:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Create Experiment",src:r(72303).A+"",width:"959",height:"519"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Choose a Target"})," area, choose ",(0,t.jsx)(s.strong,{children:"STRESS TEST"})," and fill out the experiment information. For specific configuration fields, refer to the description in [Configuration Description](#fields description)."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"StressChaos Experiment",src:r(56240).A+"",width:"1730",height:"1030"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Experiment Information",src:r(18306).A+"",width:"973",height:"442"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Submit the experiment information."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-experiments-using-the-yaml-file",children:"Create experiments using the YAML file"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Write the experiment configuration to the YAML configuration file. In the following example, the ",(0,t.jsx)(s.code,{children:"memory-stress.yaml"})," file is used."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: memory-stress-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  stressors:\n    memory:\n      workers: 4\n      size: '256MB'\n"})}),"\n",(0,t.jsx)(s.p,{children:"This experiment configuration will create a process in the selected container, continuously allocate and read and write in memory, occupying up to 256MB of memory."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["After the configuration file is prepared, use ",(0,t.jsx)(s.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f memory-stress.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"field-description",children:"Field description"}),"\n",(0,t.jsx)(s.p,{children:"The fields in the YAML configuration file are described in the following table:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"duration"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Specifies the duration of the experiment."}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"30s"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"stressors"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#stressors",children:"Stressors"})}),(0,t.jsx)(s.td,{children:"Specifies the stress of CPU or memory"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"stressngStressors"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Specifies the stres-ng parameter to reach richer stress injection"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"--clone 2"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"mode"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Specifies the mode of the experiment. The mode options include ",(0,t.jsx)(s.code,{children:"one"})," (selecting a random Pod), ",(0,t.jsx)(s.code,{children:"all"})," (selecting all eligible Pods), ",(0,t.jsx)(s.code,{children:"fixed"})," (selecting a specified number of eligible Pods), ",(0,t.jsx)(s.code,{children:"fixed-percent"})," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,t.jsx)(s.code,{children:"random-max-percent"})," (selecting the maximum percentage of Pods from the eligible Pods)."]}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"one"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"value"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Provides a parameter for the ",(0,t.jsx)(s.code,{children:"mode"})," configuration, depending on ",(0,t.jsx)(s.code,{children:"mode"}),".For example, when ",(0,t.jsx)(s.code,{children:"mode"})," is set to ",(0,t.jsx)(s.code,{children:"fixed-percent"}),", ",(0,t.jsx)(s.code,{children:"value"})," specifies the percentage of Pods."]}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"containerNames"}),(0,t.jsx)(s.td,{children:"[]string"}),(0,t.jsx)(s.td,{children:"Specifies the name of the container into which the fault is injected."}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'["nginx"]'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"selector"}),(0,t.jsx)(s.td,{children:"struct"}),(0,t.jsxs)(s.td,{children:["Specifies the target Pod. For details, refer to ",(0,t.jsx)(s.a,{href:"/docs/next/define-chaos-experiment-scope",children:"Define the Scope of Chaos Experiments"}),"."]}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"stressors",children:"Stressors"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"memory"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#memorystressor",children:"MemoryStressor"})}),(0,t.jsx)(s.td,{children:"Specifies the memory stress"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cpu"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#cpustressor",children:"CPUStressor"})}),(0,t.jsx)(s.td,{children:"Specifies the CPU stress"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h5,{id:"memorystressor",children:"MemoryStressor"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"workers"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"Specifies the number of threads that apply memory stress"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"1"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"size"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Specifies the memory size to be occupied or a percentage of the total memory size. The final sum of the occupied memory size is ",(0,t.jsx)(s.code,{children:"size"}),"."]}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"256MB / 25%"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"time"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Specifies the time to reach the memory ",(0,t.jsx)(s.code,{children:"size"}),". The growth model is a linear model."]}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"10min"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oomScoreAdj"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsxs)(s.td,{children:["Specifies the ",(0,t.jsx)(s.a,{href:"https://man7.org/linux/man-pages/man5/proc.5.html",children:"oom_score_adj"})," of the stress process."]}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"-1000"})})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["To avoid the high CPU load caused by the read and write pressure from ",(0,t.jsx)(s.code,{children:"stress-ng"}),", Chaos Mesh uses ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/memStress",children:"memStress"})," to simulate memory stress. This is because memStress simulates memory stress by consuming actual memory instead of applying the read and write pressure to memory."]})}),"\n",(0,t.jsx)(s.h5,{id:"cpustressor",children:"CPUStressor"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"workers"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"Specifies the number of threads that apply CPU stress"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"1"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"load"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsxs)(s.td,{children:["Specifies the percentage of CPU occupied. ",(0,t.jsx)(s.code,{children:"0"})," means that no additional CPU is added, and ",(0,t.jsx)(s.code,{children:"100"})," refers to full load. The final sum of CPU load is ",(0,t.jsx)(s.code,{children:"workers * load"}),"."]}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"50"})})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},72303:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},18306:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"},56240:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/stresschaos-exp-39c9a56022d3ca830e6418949ec71820.png"},90073:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var t=r(79474);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);