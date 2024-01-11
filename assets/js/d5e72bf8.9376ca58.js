"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1098],{99767:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var a=s(11527),l=s(7463);const r={title:"Serial and Parallel Experiments"},o=void 0,t={id:"run-serial-or-parallel-experiments",title:"Serial and Parallel Experiments",description:"Chaos Mesh Workflow offers two ways of scheduling experiments: serial and parallel. You can configure and schedule multiple experiments as needed.",source:"@site/versioned_docs/version-2.4.3/run-serial-or-parallel-experiments.md",sourceDirName:".",slug:"/run-serial-or-parallel-experiments",permalink:"/docs/2.4.3/run-serial-or-parallel-experiments",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/run-serial-or-parallel-experiments.md",tags:[],version:"2.4.3",frontMatter:{title:"Serial and Parallel Experiments"},sidebar:"docs",previous:{title:"Create Chaos Mesh Workflow",permalink:"/docs/2.4.3/create-chaos-mesh-workflow"},next:{title:"Send HTTP Requests on Workflow",permalink:"/docs/2.4.3/send-http-request-on-workflow"}},i={},d=[{value:"Serial experiments",id:"serial-experiments",level:2},{value:"Parallel experiments",id:"parallel-experiments",level:2},{value:"Create a workflow with serial or parallel nodes using Chaos Dashboard",id:"create-a-workflow-with-serial-or-parallel-nodes-using-chaos-dashboard",level:2},{value:"Create serial nodes",id:"create-serial-nodes",level:3},{value:"Create parallel nodes",id:"create-parallel-nodes",level:3},{value:"Nest serial and parallel nodes",id:"nest-serial-and-parallel-nodes",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Chaos Mesh Workflow offers two ways of scheduling experiments: serial and parallel. You can configure and schedule multiple experiments as needed."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If you want to schedule multiple chaos experiments in sequence, use serial nodes."}),"\n",(0,a.jsx)(n.li,{children:"If you want to perform multiple chaos experiments simultaneously, use parallel nodes."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Chaos Mesh uses ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Composite_pattern",children:"composite pattern"})," when designing serial and parallel nodes. It can contain multiple nodes of different types and run the composite nodes in a specific mode. This also means that you can nest the serial and parallel nodes to achieve complicated scheduling."]}),"\n",(0,a.jsx)(n.h2,{id:"serial-experiments",children:"Serial experiments"}),"\n",(0,a.jsxs)(n.p,{children:["When you create ",(0,a.jsx)(n.code,{children:"templates"})," in Workflow, use ",(0,a.jsx)(n.code,{children:"templateType: Serial"})," to claim a serial node."]}),"\n",(0,a.jsxs)(n.p,{children:["Another required field in serial nodes is ",(0,a.jsx)(n.code,{children:"children"}),". Its type is ",(0,a.jsx)(n.code,{children:"[]string"})," and value is the name of other ",(0,a.jsx)(n.code,{children:"template"}),". For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-serial\nspec:\n  entry: serial-of-3-node\n  templates:\n    - name: serial-of-3-node\n      templateType: Serial\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - suspending\n        - workflow-network-chaos\n    - name: suspending\n      templateType: Suspend\n      deadline: 10s\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The above commands claims a serial node named ",(0,a.jsx)(n.code,{children:"serial-of-3-node"}),". This means Chaos Mesh executes sequentially ",(0,a.jsx)(n.code,{children:"workflow-stress-chaos"}),", ",(0,a.jsx)(n.code,{children:"suspending"}),", and ",(0,a.jsx)(n.code,{children:"workflow-network-chaos"}),". After all tasks are completed, serial nodes are marked as completed."]}),"\n",(0,a.jsxs)(n.p,{children:["When Chaos Mesh executes the serial node, tasks claimed in ",(0,a.jsx)(n.code,{children:"children"})," are run sequentially to ensure that only one task is running at the same time."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"deadline"})," field in serial nodes is optional to limit the maximum duration of the entire serial process. Once this duration is running out, the sub-nodes are stopped and the nodes that are not executed yet will not be executed. If all sub-nodes finish their work before ",(0,a.jsx)(n.code,{children:"deadline"})," time, serial nodes are immediately marked as completed and ",(0,a.jsx)(n.code,{children:"deadline"})," is not affected."]}),"\n",(0,a.jsx)(n.h2,{id:"parallel-experiments",children:"Parallel experiments"}),"\n",(0,a.jsxs)(n.p,{children:["When you create ",(0,a.jsx)(n.code,{children:"templates"})," in Workflow, use ",(0,a.jsx)(n.code,{children:"templateType: Parallel"})," to claim a parallel node."]}),"\n",(0,a.jsxs)(n.p,{children:["Another required field in parallel nodes is ",(0,a.jsx)(n.code,{children:"children"}),". Its type is ",(0,a.jsx)(n.code,{children:"[]string"})," and values are the names of other ",(0,a.jsx)(n.code,{children:"template"}),". For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: parallel-of-2-chaos\n  templates:\n    - name: parallel-of-2-chaos\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The above commands claimed a parallel node named ",(0,a.jsx)(n.code,{children:"parallel-of-2-chaos"}),". This means Chaos Mesh executes simultaneously ",(0,a.jsx)(n.code,{children:"workflow-stress-chaos"})," and ",(0,a.jsx)(n.code,{children:"workflow-network-chaos"}),". After all tasks are completed, parallel nodes are marked as completed."]}),"\n",(0,a.jsxs)(n.p,{children:["When Chaos Mesh executes parallel nodes, all tasks claimed in ",(0,a.jsx)(n.code,{children:"children"})," are executed simultaneously."]}),"\n",(0,a.jsxs)(n.p,{children:["Similar to serial nodes, the optional field ",(0,a.jsx)(n.code,{children:"deadline"})," is also available in parallel nodes to limit the maximum execution time of the entire parallel process. If this time is reached, the sub-nodes are stopped. If all sub-nodes finish their work before ",(0,a.jsx)(n.code,{children:"deadline"})," time, parallel nodes are immediately marked as completed and ",(0,a.jsx)(n.code,{children:"deadline"})," is not affected."]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-workflow-with-serial-or-parallel-nodes-using-chaos-dashboard",children:"Create a workflow with serial or parallel nodes using Chaos Dashboard"}),"\n",(0,a.jsx)(n.h3,{id:"create-serial-nodes",children:"Create serial nodes"}),"\n",(0,a.jsxs)(n.p,{children:["Chaos Dashboard creates a predefined serial node called ",(0,a.jsx)(n.code,{children:"entry"}),". Therefore, when creating a workflow with serial nodes using Chaos Dashboard, the workflow is created under ",(0,a.jsx)(n.code,{children:"entry"})," by default."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Create Serial Node On Dashboard",src:s(27615).Z+"",width:"2342",height:"1553"})}),"\n",(0,a.jsx)(n.h3,{id:"create-parallel-nodes",children:"Create parallel nodes"}),"\n",(0,a.jsxs)(n.p,{children:["You can create a parallel node ",(0,a.jsx)(n.code,{children:"Parallel"})," and create sub-nodes under ",(0,a.jsx)(n.code,{children:"Parallel"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Create Parallel Node on Dashboard",src:s(17155).Z+"",width:"2342",height:"1553"})}),"\n",(0,a.jsx)(n.h3,{id:"nest-serial-and-parallel-nodes",children:"Nest serial and parallel nodes"}),"\n",(0,a.jsx)(n.p,{children:"You can create more complex processes by nesting serial and parallel nodes together."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Nested Serial And Parallel Node",src:s(23965).Z+"",width:"1536",height:"1539"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},17155:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/create-parallel-node-on-dashboard-b7f22323c302dc2b203ee9d82d0adb4f.png"},27615:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/create-serial-node-on-dashboard-656f592c6362716fd6b492eb6c04f2de.png"},23965:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/nested-serial-and-parallel-578f616dbf3a280f96977d6b79d636cf.png"},7463:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>o});var a=s(50959);const l={},r=a.createContext(l);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);