"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[22397],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>u});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),d=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=l,h=m["".concat(i,".").concat(u)]||m[u]||c[u]||r;return n?t.createElement(h,o(o({ref:a},p),{},{components:n})):t.createElement(h,o({ref:a},p))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4146:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(87462),l=(n(67294),n(3905));const r={title:"Serial and Parallel Experiments"},o=void 0,s={unversionedId:"run-chaos-experiments-in-serial-or-parallel",id:"version-2.2.3/run-chaos-experiments-in-serial-or-parallel",title:"Serial and Parallel Experiments",description:"Chaos Mesh Workflow offers two ways of scheduling experiments: serial and parallel. You can configure and schedule multiple experiments as needed.",source:"@site/versioned_docs/version-2.2.3/run-chaos-experiments-in-serial-or-parallel.md",sourceDirName:".",slug:"/run-chaos-experiments-in-serial-or-parallel",permalink:"/docs/2.2.3/run-chaos-experiments-in-serial-or-parallel",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.2.3/run-chaos-experiments-in-serial-or-parallel.md",tags:[],version:"2.2.3",frontMatter:{title:"Serial and Parallel Experiments"},sidebar:"version-2.2.3/docs",previous:{title:"Create Chaos Mesh Workflow",permalink:"/docs/2.2.3/create-chaos-mesh-workflow"},next:{title:"Send HTTP Requests on Workflow",permalink:"/docs/2.2.3/send-http-request-on-workflow"}},i={},d=[{value:"Serial experiments",id:"serial-experiments",level:2},{value:"Parallel experiments",id:"parallel-experiments",level:2},{value:"Create a workflow with serial or parallel nodes using Chaos Dashboard",id:"create-a-workflow-with-serial-or-parallel-nodes-using-chaos-dashboard",level:2},{value:"Create serial nodes",id:"create-serial-nodes",level:3},{value:"Create parallel nodes",id:"create-parallel-nodes",level:3},{value:"Nest serial and parallel nodes",id:"nest-serial-and-parallel-nodes",level:3}],p={toc:d};function c(e){let{components:a,...r}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Chaos Mesh Workflow offers two ways of scheduling experiments: serial and parallel. You can configure and schedule multiple experiments as needed."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you want to schedule multiple chaos experiments in sequence, use serial nodes."),(0,l.kt)("li",{parentName:"ul"},"If you want to perform multiple chaos experiments simultaneously, use parallel nodes.")),(0,l.kt)("p",null,"Chaos Mesh uses ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Composite_pattern"},"composite pattern")," when designing serial and parallel nodes. It can contain multiple nodes of different types and run the composite nodes in a specific mode. This also means that you can nest the serial and parallel nodes to achieve complicated scheduling."),(0,l.kt)("h2",{id:"serial-experiments"},"Serial experiments"),(0,l.kt)("p",null,"When you create ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," in Workflow, use ",(0,l.kt)("inlineCode",{parentName:"p"},"templateType: Serial")," to claim a serial node."),(0,l.kt)("p",null,"Another required field in serial nodes is ",(0,l.kt)("inlineCode",{parentName:"p"},"children"),". Its type is ",(0,l.kt)("inlineCode",{parentName:"p"},"[]string")," and value is the name of other ",(0,l.kt)("inlineCode",{parentName:"p"},"template"),". For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-serial\nspec:\n  entry: serial-of-3-node\n  templates:\n    - name: serial-of-3-node\n      templateType: Serial\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - suspending\n        - workflow-network-chaos\n    - name: suspending\n      templateType: Suspend\n      deadline: 10s\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n")),(0,l.kt)("p",null,"The above commands claims a serial node named ",(0,l.kt)("inlineCode",{parentName:"p"},"serial-of-3-node"),". This means Chaos Mesh executes sequentially ",(0,l.kt)("inlineCode",{parentName:"p"},"workflow-stress-chaos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"suspending"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"workflow-network-chaos"),". After all tasks are completed, serial nodes are marked as completed."),(0,l.kt)("p",null,"When Chaos Mesh executes the serial node, tasks claimed in ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," are run sequentially to ensure that only one task is running at the same time."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," field in serial nodes is optional to limit the maximum duration of the entire serial process. Once this duration is running out, the sub-nodes are stopped and the nodes that are not executed yet will not be executed. If all sub-nodes finish their work before ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," time, serial nodes are immediately marked as completed and ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," is not affected."),(0,l.kt)("h2",{id:"parallel-experiments"},"Parallel experiments"),(0,l.kt)("p",null,"When you create ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," in Workflow, use ",(0,l.kt)("inlineCode",{parentName:"p"},"templateType: Parallel")," to claim a parallel node."),(0,l.kt)("p",null,"Another required field in parallel nodes is ",(0,l.kt)("inlineCode",{parentName:"p"},"children"),". Its type is ",(0,l.kt)("inlineCode",{parentName:"p"},"[]string")," and values are the names of other ",(0,l.kt)("inlineCode",{parentName:"p"},"template"),". For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: parallel-of-2-chaos\n  templates:\n    - name: parallel-of-2-chaos\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n")),(0,l.kt)("p",null,"The above commands claimed a parallel node named ",(0,l.kt)("inlineCode",{parentName:"p"},"parallel-of-2-chaos"),". This means Chaos Mesh executes simultaneously ",(0,l.kt)("inlineCode",{parentName:"p"},"workflow-stress-chaos")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"workflow-network-chaos"),". After all tasks are completed, parallel nodes are marked as completed."),(0,l.kt)("p",null,"When Chaos Mesh executes parallel nodes, all tasks claimed in ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," are executed simultaneously."),(0,l.kt)("p",null,"Similar to serial nodes, the optional field ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," is also available in parallel nodes to limit the maximum execution time of the entire parallel process. If this time is reached, the sub-nodes are stopped. If all sub-nodes finish their work before ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," time, parallel nodes are immediately marked as completed and ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," is not affected."),(0,l.kt)("h2",{id:"create-a-workflow-with-serial-or-parallel-nodes-using-chaos-dashboard"},"Create a workflow with serial or parallel nodes using Chaos Dashboard"),(0,l.kt)("h3",{id:"create-serial-nodes"},"Create serial nodes"),(0,l.kt)("p",null,"Chaos Dashboard creates a predefined serial node called ",(0,l.kt)("inlineCode",{parentName:"p"},"entry"),". Therefore, when creating a workflow with serial nodes using Chaos Dashboard, the workflow is created under ",(0,l.kt)("inlineCode",{parentName:"p"},"entry")," by default."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create Serial Node On Dashboard",src:n(87541).Z,width:"2342",height:"1553"})),(0,l.kt)("h3",{id:"create-parallel-nodes"},"Create parallel nodes"),(0,l.kt)("p",null,"You can create a parallel node ",(0,l.kt)("inlineCode",{parentName:"p"},"Parallel")," and create sub-nodes under ",(0,l.kt)("inlineCode",{parentName:"p"},"Parallel"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create Parallel Node on Dashboard",src:n(53989).Z,width:"2342",height:"1553"})),(0,l.kt)("h3",{id:"nest-serial-and-parallel-nodes"},"Nest serial and parallel nodes"),(0,l.kt)("p",null,"You can create more complex processes by nesting serial and parallel nodes together."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Nested Serial And Parallel Node",src:n(74718).Z,width:"1536",height:"1539"})))}c.isMDXComponent=!0},53989:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/create-parallel-node-on-dashboard-b7f22323c302dc2b203ee9d82d0adb4f.png"},87541:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/create-serial-node-on-dashboard-656f592c6362716fd6b492eb6c04f2de.png"},74718:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nested-serial-and-parallel-578f616dbf3a280f96977d6b79d636cf.png"}}]);