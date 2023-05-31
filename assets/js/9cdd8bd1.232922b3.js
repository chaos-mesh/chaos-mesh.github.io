"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[53242],{49613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=l,h=m["".concat(s,".").concat(k)]||m[k]||u[k]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(60795),l=(a(59496),a(49613));const r={title:"Create Chaos Mesh Workflow"},o=void 0,i={unversionedId:"create-chaos-mesh-workflow",id:"version-2.5.2/create-chaos-mesh-workflow",title:"Create Chaos Mesh Workflow",description:"Introduction to Chaos Mesh Workflow",source:"@site/versioned_docs/version-2.5.2/create-chaos-mesh-workflow.md",sourceDirName:".",slug:"/create-chaos-mesh-workflow",permalink:"/docs/2.5.2/create-chaos-mesh-workflow",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/create-chaos-mesh-workflow.md",tags:[],version:"2.5.2",frontMatter:{title:"Create Chaos Mesh Workflow"},sidebar:"docs",previous:{title:"Inspect Results of Chaos Experiments",permalink:"/docs/2.5.2/inspect-chaos-experiments"},next:{title:"Serial and Parallel Experiments",permalink:"/docs/2.5.2/run-serial-or-parallel-experiments"}},s={},d=[{value:"Introduction to Chaos Mesh Workflow",id:"introduction-to-chaos-mesh-workflow",level:2},{value:"Create a workflow using Chaos Dashboard",id:"create-a-workflow-using-chaos-dashboard",level:2},{value:"Step 1. Open Chaos Dashboard",id:"step-1-open-chaos-dashboard",level:3},{value:"Step 2. Setup basic information of the workflow",id:"step-2-setup-basic-information-of-the-workflow",level:3},{value:"Step 3. Configure the nodes of the workflow",id:"step-3-configure-the-nodes-of-the-workflow",level:3},{value:"Step 4. Submit the workflow",id:"step-4-submit-the-workflow",level:3},{value:"Create a workflow using a YAML file and <code>kubectl</code>",id:"create-a-workflow-using-a-yaml-file-and-kubectl",level:2},{value:"Field description",id:"field-description",level:2},{value:"Workflow field description",id:"workflow-field-description",level:3},{value:"Template field description",id:"template-field-description",level:3},{value:"Task field description",id:"task-field-description",level:3},{value:"ConditionalBranch field description",id:"conditionalbranch-field-description",level:3},{value:"Container field description",id:"container-field-description",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction-to-chaos-mesh-workflow"},"Introduction to Chaos Mesh Workflow"),(0,l.kt)("p",null,"When you use Chaos Mesh to simulate real system faults, continuous validation is always a need. You might want to build a series of faults on the Chaos Mesh platform, instead of performing individual Chaos injections."),(0,l.kt)("p",null,"To meet this need, Chaos Mesh provided Chaos Mesh Workflow, a built-in workflow engine. Using this engine, you can run different Chaos experiments in serial or parallel to simulate production-level errors."),(0,l.kt)("p",null,"Currently, Chaos Mesh Workflow supports the following features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Serial Orchestration"),(0,l.kt)("li",{parentName:"ul"},"Parallel Orchestration"),(0,l.kt)("li",{parentName:"ul"},"Customized tasks"),(0,l.kt)("li",{parentName:"ul"},"Conditional branch")),(0,l.kt)("p",null,"Typical user scenarios:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use parallel orchestration to inject multiple NetworkChaos faults to simulate complex web environments."),(0,l.kt)("li",{parentName:"ul"},"Use serial orchestration to perform health checks and use the conditional branch to determine whether to perform the remaining steps.")),(0,l.kt)("p",null,"The design of Chaos Mesh Workflow is, to some extent, inspired by Argo Workflows. If you are familiar with Argo Workflows, you can also quickly get started with Chaos Mesh Workflow."),(0,l.kt)("p",null,"More workflow examples are available in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/workflow"},"Chaos Mesh GitHub repository"),"."),(0,l.kt)("h2",{id:"create-a-workflow-using-chaos-dashboard"},"Create a workflow using Chaos Dashboard"),(0,l.kt)("h3",{id:"step-1-open-chaos-dashboard"},"Step 1. Open Chaos Dashboard"),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"NEW WORKFLOW"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"New Workflow",src:a(83612).Z,width:"800",height:"404"})),(0,l.kt)("h3",{id:"step-2-setup-basic-information-of-the-workflow"},"Step 2. Setup basic information of the workflow"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Workflow Info",src:a(73445).Z,width:"572",height:"422"})),(0,l.kt)("h3",{id:"step-3-configure-the-nodes-of-the-workflow"},"Step 3. Configure the nodes of the workflow"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select an option under ",(0,l.kt)("strong",{parentName:"p"},"Choose task type")," according to your needs."),(0,l.kt)("p",{parentName:"li"},'In this example, the "Single\u201d type is selected as the task type.'),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},'Chaos Dashboard automatically creates a serial node named "entry" as the entry point for this workflow.')),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Choose Task Type",src:a(64653).Z,width:"399",height:"449"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fill out the experiment information."),(0,l.kt)("p",{parentName:"li"},'The configuration method is the same as creating a normal chaos experiment. For example, you can set up a "POD KILL" type of "PodChaos" named ',(0,l.kt)("inlineCode",{parentName:"p"},"kill-nginx"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Create podkill in Workflow",src:a(64135).Z,width:"1209",height:"1586"})))),(0,l.kt)("h3",{id:"step-4-submit-the-workflow"},"Step 4. Submit the workflow"),(0,l.kt)("p",null,"You can check workflow definition through ",(0,l.kt)("strong",{parentName:"p"},"Preview"),", and then click the ",(0,l.kt)("strong",{parentName:"p"},"SUBMIT WORKFLOW")," to create the workflow."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Submit Workflow",src:a(21209).Z,width:"624",height:"1038"})),(0,l.kt)("h2",{id:"create-a-workflow-using-a-yaml-file-and-kubectl"},"Create a workflow using a YAML file and ",(0,l.kt)("inlineCode",{parentName:"h2"},"kubectl")),(0,l.kt)("p",null,"Similar to various types of Chaos objects, workflows also exist in a Kubernetes cluster as a CRD. You can create a Chaos Mesh workflow using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl create -f <workflow.yaml>"),". The following command is an example of creating a workflow. Create a workflow using a local YAML file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f <workflow.yaml>\n")),(0,l.kt)("p",null,"Create a workflow using a YAML file from the network:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/examples/workflow/serial.yaml\n")),(0,l.kt)("p",null,"A simple workflow YAML file is defined as follows. In this workflow, ",(0,l.kt)("inlineCode",{parentName:"p"},"StressChaos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NetworkChaos"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"PodChaos")," are injected:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: the-entry\n  templates:\n    - name: the-entry\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n        - workflow-pod-chaos-schedule\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-pod-chaos-schedule\n      templateType: Schedule\n      deadline: 40s\n      schedule:\n        schedule: '@every 2s'\n        type: 'PodChaos'\n        podChaos:\n          action: pod-kill\n          mode: one\n          selector:\n            labelSelectors:\n              'app': 'hello-kubernetes'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n")),(0,l.kt)("p",null,"In the above YAML template, the ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," fields define the steps of the experiment. The ",(0,l.kt)("inlineCode",{parentName:"p"},"entry")," field defines the entry of the workflow when the workflow is being executed."),(0,l.kt)("p",null,"Each element in ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," represents a workflow step. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: the-entry\ntemplateType: Parallel\ndeadline: 240s\nchildren:\n  - workflow-stress-chaos\n  - workflow-network-chaos\n  - workflow-pod-chaos\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"templateType: Parallel")," means that the node type is parallel. ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline: 240s")," means that all parallel experiments on this node are expected to be performed in 240 seconds; otherwise, the experiments time out. ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," means the other template names to be executed in parallel."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: workflow-pod-chaos\ntemplateType: PodChaos\ndeadline: 40s\npodChaos:\n  action: pod-kill\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'hello-kubernetes'\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"templateType: PodChaos")," means that the node type is PodChaos experiments. ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline: 40s")," means that the current Chaos experiment lasts for 40 seconds. ",(0,l.kt)("inlineCode",{parentName:"p"},"podChaos")," is the definition of the PodChaos experiment."),(0,l.kt)("p",null,"It is flexible to create a workflow using a YAML file and ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),". You can nest parallel or serial orchestrations to declare complex orchestrations, and even combine the orchestration with conditional branches to achieve a circular effect."),(0,l.kt)("h2",{id:"field-description"},"Field description"),(0,l.kt)("h3",{id:"workflow-field-description"},"Workflow field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entry"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Declares the entry of the workflow. Its value is a name of a template."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"templates"),(0,l.kt)("td",{parentName:"tr",align:null},"[]Template"),(0,l.kt)("td",{parentName:"tr",align:null},"Declares the behavior of each step executable in the workflow. See ",(0,l.kt)("a",{parentName:"td",href:"#template-field-description"},"Template field description")," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"template-field-description"},"Template field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the template, which needs to meet the DNS-1123 requirements."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"any-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of template. Value options are Task, Serial, Parallel, Suspend, Schedule, AWSChaos, DNSChaos, GCPChaos, HTTPChaos, IOChaos, JVMChaos, KernelChaos, NetworkChaos, PodChaos, StressChaos, and TimeChaos, StatusCheck."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"PodChaos")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deadline"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration of the template."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"'5m30s'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"Declares the subtasks under this template. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"Serial")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Parallel"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},'["any-chaos-1", "another-serial-2", "any-shcedue"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"task"),(0,l.kt)("td",{parentName:"tr",align:null},"Task"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures the customized task. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"Task"),". See the ",(0,l.kt)("a",{parentName:"td",href:"#task-field-description"},"Task field description")," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conditionalBranches"),(0,l.kt)("td",{parentName:"tr",align:null},"[]ConditionalBranch"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures the conditional branch which executes after customized task. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"Task"),". See the ",(0,l.kt)("a",{parentName:"td",href:"#conditionalbranch-field-description"},"Conditional branch field description")," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"awsChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures AWSChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"AWSChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-aws-chaos"},"Simulate AWS Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dnsChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures DNSChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"DNSChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-dns-chaos-on-kubernetes"},"Simulate DNS Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gcpChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures GCPChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"GCPChaos"),".See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-gcp-chaos"},"Simulation GCP Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures HTTPChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"HTTPChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-http-chaos-on-kubernetes"},"Simulate HTTP Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ioChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure IOChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"IOChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-io-chaos-on-kubernetes"},"Simulate File I/O Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jvmChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures JVMChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"JVMChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-jvm-application-chaos"},"Simulate JVM Application Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kernelChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure KernelChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"KernelChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-kernel-chaos-on-kubernetes"},"Simulate Kernel Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"networkChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures NetworkChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"NetworkChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-aws-chaos"},"Simulate AWS Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"podChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures PodChaosd. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"PodChaosd"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-network-chaos-on-kubernetes"},"Simulate Network Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stressChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures StressChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"StressChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-heavy-stress-on-kubernetes"},"Simulate Heavy Stress on Kubernetes")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeChaos"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures TimeChaos. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"TimeChaos"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/simulate-time-chaos-on-kubernetes"},"SImulate Time Faults")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedule"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures Schedule. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"Schedule"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/define-scheduling-rules"},"Define Scheduling Rules")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures StatusCheck. You need to configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"StatusCheck"),". See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.5.2/status-check-in-workflow"},"StatusCheck in Workflow")," document for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"abortWithStatusCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures whether abort the Workflow when StatusCheck is failed. You can configure this field when the type is ",(0,l.kt)("inlineCode",{parentName:"td"},"StatusCheck"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When creating a Chaos with a duration in the workflow, you need to fill the duration in the outer ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," field instead of using the ",(0,l.kt)("inlineCode",{parentName:"p"},"duration")," field in Chaos.")),(0,l.kt)("h3",{id:"task-field-description"},"Task field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines a customized task container. See ",(0,l.kt)("a",{parentName:"td",href:"#container-field-description"},"Container field description")," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volumes"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"If you need to mount a volume in a customized task container, you need to declare the volume in this field. For the detailed definition of a volume, see the ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#volume-v1-core"},"Kubernetes documentation - corev1.Volume"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"conditionalbranch-field-description"},"ConditionalBranch field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the template to be executed by the current conditional branch."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"another-chaos")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The type is a boolean expression. When a customized task is completed and the expression value is true, the current condition branch is executed. When this value is not set, the conditional branch will be executed directly after the customized task is completed."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"exitCode == 0")))),(0,l.kt)("p",null,"Currently, two context variables are provided in ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exitCode")," means the exit code for a customized task."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stdout")," indicates the standard output for a customized task.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"More context variables will be added in later releases.")),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md"},"this document")," write ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," expressions."),(0,l.kt)("h3",{id:"container-field-description"},"Container field description"),(0,l.kt)("p",null,"The following table only lists the commonly used fields. For the definitions of more fields, see ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#container-v1-core"},"Kubernetes documentation - core1.Container"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Container name"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Image name"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"busybox:latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"command"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"Container commands"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["wget", "-q", "http://httpbin.org/status/201"]'))))))}u.isMDXComponent=!0},64653:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choose-task-type-9e837dfb0ebdae12f31db47644b2f2ca.png"},64135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-podkill-in-workflow-b4d42c8e74343b4834a29a169d1509f9.png"},83612:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-workflow-bd489be0ff01773ff0d68fd1dcb11ac2.png"},21209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/submit-workflow-d76f6cfbdf16faf0264ee97237548a07.png"},73445:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-info-ac4f6acd29d9803a3473bc4a65c261c8.png"}}]);