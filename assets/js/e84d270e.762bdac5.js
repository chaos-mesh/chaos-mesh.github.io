"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4005],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=l,h=u["".concat(s,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],i={title:"Create Chaos Mesh Workflow"},s=void 0,d={unversionedId:"create-chaos-mesh-workflow",id:"version-2.1.1/create-chaos-mesh-workflow",isDocsHomePage:!1,title:"Create Chaos Mesh Workflow",description:"Introduction to Chaos Mesh Workflow",source:"@site/versioned_docs/version-2.1.1/create-chaos-mesh-workflow.md",sourceDirName:".",slug:"/create-chaos-mesh-workflow",permalink:"/docs/create-chaos-mesh-workflow",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.1/create-chaos-mesh-workflow.md",tags:[],version:"2.1.1",frontMatter:{title:"Create Chaos Mesh Workflow"},sidebar:"version-2.1.1/docs",previous:{title:"Inspect Results of Chaos Experiments",permalink:"/docs/inspect-chaos-experiments"},next:{title:"Serial and Parallel Experiments",permalink:"/docs/run-chaos-experiments-in-serial-or-parallel"}},p=[{value:"Introduction to Chaos Mesh Workflow",id:"introduction-to-chaos-mesh-workflow",children:[],level:2},{value:"Create a workflow using a YAML file and <code>kubectl</code>",id:"create-a-workflow-using-a-yaml-file-and-kubectl",children:[],level:2},{value:"Field description",id:"field-description",children:[{value:"Workflow field description",id:"workflow-field-description",children:[],level:3},{value:"Template field description",id:"template-field-description",children:[],level:3},{value:"Task field description",id:"task-field-description",children:[],level:3},{value:"Conditional branch field description",id:"conditional-branch-field-description",children:[],level:3},{value:"Container field description",id:"container-field-description",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction-to-chaos-mesh-workflow"},"Introduction to Chaos Mesh Workflow"),(0,r.kt)("p",null,"When you use Chaos Mesh to simulate real system faults, continuous validation is always a need. You might want to build a series of faults on the Chaos Mesh platform, instead of performing individual Chaos injections."),(0,r.kt)("p",null,"To meet this need, Chaos Mesh provided Chaos Mesh Workflow, a built-in workflow engine. Using this engine, you can run different Chaos experiments in serial or parallel to simulate production-level errors."),(0,r.kt)("p",null,"Currently, Chaos Mesh Workflow supports the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serial Orchestration"),(0,r.kt)("li",{parentName:"ul"},"Parallel Orchestration"),(0,r.kt)("li",{parentName:"ul"},"Customized tasks"),(0,r.kt)("li",{parentName:"ul"},"Conditional branch")),(0,r.kt)("p",null,"Typical user scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use parallel orchestration to inject multiple NetworkChaos faults to simulate complex web environments."),(0,r.kt)("li",{parentName:"ul"},"Use serial orchestration to perform health checks and use the conditional branch to determine whether to perform the remaining steps.")),(0,r.kt)("p",null,"The design of Chaos Mesh Workflow is, to some extent, inspired by Argo Workflows. If you are familiar with Argo Workflows, you can also quickly get started with Chaos Mesh Workflow."),(0,r.kt)("p",null,"More workflow examples are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/workflow"},"Chaos Mesh GitHub repository"),"."),(0,r.kt)("h2",{id:"create-a-workflow-using-a-yaml-file-and-kubectl"},"Create a workflow using a YAML file and ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubectl")),(0,r.kt)("p",null,"Similar to various types of Chaos objects, workflows also exist in a Kubernetes cluster as a CRD. You can create a Chaos Mesh workflow using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create -f <workflow.yaml>"),". The following command is an example of creating a workflow. Create a workflow using a local YAML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f <workflow.yaml>\n")),(0,r.kt)("p",null,"Create a workflow using a YAML file from the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/examples/workflow/serial.yaml\n")),(0,r.kt)("p",null,"A simple workflow YAML file is defined as follows. In this workflow, ",(0,r.kt)("inlineCode",{parentName:"p"},"StressChaos"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkChaos"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"PodChaos")," are injected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: the-entry\n  templates:\n    - name: the-entry\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n        - workflow-pod-chaos-schedule\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-pod-chaos-schedule\n      templateType: Schedule\n      deadline: 40s\n      schedule:\n        schedule: '@every 2s'\n        type: 'PodChaos'\n        podChaos:\n          action: pod-kill\n          mode: one\n          selector:\n            labelSelectors:\n              'app': 'hello-kubernetes'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n")),(0,r.kt)("p",null,"In the above YAML template, the ",(0,r.kt)("inlineCode",{parentName:"p"},"templates")," fields define the steps of the experiment. The ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," field defines the entry of the workflow when the workflow is being executed."),(0,r.kt)("p",null,"Each element in ",(0,r.kt)("inlineCode",{parentName:"p"},"templates")," represents a workflow step. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: the-entry\ntemplateType: Parallel\ndeadline: 240s\nchildren:\n  - workflow-stress-chaos\n  - workflow-network-chaos\n  - workflow-pod-chaos\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"templateType: Parallel")," means that the node type is parallel. ",(0,r.kt)("inlineCode",{parentName:"p"},"deadline: 240s")," means that all parallel experiments on this node are expected to be performed in 240 seconds; otherwise, the experiments time out. ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," means the other template names to be executed in parallel."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: workflow-pod-chaos\ntemplateType: PodChaos\ndeadline: 40s\npodChaos:\n  action: pod-kill\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'hello-kubernetes'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"templateType: PodChaos")," means that the node type is PodChaos experiments. ",(0,r.kt)("inlineCode",{parentName:"p"},"deadline: 40s")," means that the current Chaos experiment lasts for 40 seconds. ",(0,r.kt)("inlineCode",{parentName:"p"},"podChaos")," is the definition of the PodChaos experiment."),(0,r.kt)("p",null,"It is flexible to create a workflow using a YAML file and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". You can nest parallel or serial orchestrations to declare complex orchestrations, and even combine the orchestration with conditional branches to achieve a circular effect."),(0,r.kt)("h2",{id:"field-description"},"Field description"),(0,r.kt)("h3",{id:"workflow-field-description"},"Workflow field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entry"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Declares the entry of the workflow. Its value is a name of a template."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"templates"),(0,r.kt)("td",{parentName:"tr",align:null},"[]Template"),(0,r.kt)("td",{parentName:"tr",align:null},"Declares the behavior of each step executable in the workflow. See ",(0,r.kt)("a",{parentName:"td",href:"#template-field-description"},"Template field description")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"template-field-description"},"Template field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the template, which needs to meet the DNS-1123 requirements."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"any-name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of template. Value options are Task, Serial, Parallel, Suspend, Schedule, AWSChaos, DNSChaos, GCPChaos, HTTPChaos, IOChaos, JVMChaos, KernelChaos, NetworkChaos, PodChaos, StressChaos, and TimeChaos."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"PodChaos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadline"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The duration of the template."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"'5m30s'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"Declares the subtasks under this template. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"Serial")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Parallel"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},'["any-chaos-1", "another-serial-2", "any-shcedue"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"task"),(0,r.kt)("td",{parentName:"tr",align:null},"Task"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the customized task. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"Task"),". See the ",(0,r.kt)("a",{parentName:"td",href:"#task-field-description"},"Task field description")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conditionalBranches"),(0,r.kt)("td",{parentName:"tr",align:null},"[]ConditionalBranch"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the conditional branch which executes after customized task. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"Task"),". See the ",(0,r.kt)("a",{parentName:"td",href:"#conditionalbranch-field-description"},"Conditional branch field description")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures AWSChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"AWSChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-aws-chaos"},"Simulate AWS Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dnsChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures DNSChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"DNSChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-dns-chaos-on-kubernetes"},"Simulate DNS Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcpChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures GCPChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"GCPChaos"),".See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-gcp-chaos"},"Simulation GCP Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures HTTPChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"HTTPChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-http-chaos-on-kubernetes"},"Simulate HTTP Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ioChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure IOChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"IOChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-io-chaos-on-kubernetes"},"Simulate File I/O Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvmChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures JVMChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"JVMChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-jvm-application-chaos"},"Simulate JVM Application Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kernelChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure KernelChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"KernelChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-kernel-chaos-on-kubernetes"},"Simulate Kernel Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"networkChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures NetworkChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"NetworkChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-aws-chaos"},"Simulate AWS Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"podChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures PodChaosd. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"PodChaosd"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-network-chaos-on-kubernetes"},"Simulate Network Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stressChao"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures StressChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"StressChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-heavy-stress-on-kubernetes"},"Simulate Heavy Stress on Kubernetes")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeChaos"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures TimeChaos. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"TimeChaos"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/simulate-time-chaos-on-kubernetes"},"SImulate Time Faults")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schedule"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures Schedule. You need to configure this field when the type is ",(0,r.kt)("inlineCode",{parentName:"td"},"Schedule"),". See the ",(0,r.kt)("a",{parentName:"td",href:"/docs/define-scheduling-rules"},"Define Scheduling Rules")," document for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When creating a Chaos with a duration in the workflow, you need to fill the duration in the outer ",(0,r.kt)("inlineCode",{parentName:"p"},"deadline")," field instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," field in Chaos."))),(0,r.kt)("h3",{id:"task-field-description"},"Task field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"container"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines a customized task container. See ",(0,r.kt)("a",{parentName:"td",href:"#container-field-description"},"Container field description")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volumes"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"If you need to mount a volume in a customized task container, you need to declare the volume in this field. For the detailed definition of a volume, see the ",(0,r.kt)("a",{parentName:"td",href:"https://v1-17.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#volume-v1-core"},"Kubernetes documentation - corev1.Volume"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"conditional-branch-field-description"},"Conditional branch field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the template to be executed by the current conditional branch."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"another-chaos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expression"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type is a boolean expression. When a customized task is completed and the expression value is true, the current condition branch is executed. When this value is not set, the conditional branch will be executed directly after the customized task is completed."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"exitCode == 0")))),(0,r.kt)("p",null,"Currently, two context variables are provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"expression"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exitCode")," means the exit code for a customized task."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stdout")," indicates the standard output for a customized task.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"More context variables will be added in later releases.")),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md"},"this document")," write ",(0,r.kt)("inlineCode",{parentName:"p"},"expression")," expressions."),(0,r.kt)("h3",{id:"container-field-description"},"Container field description"),(0,r.kt)("p",null,"The following table only lists the commonly used fields. For the definitions of more fields, see ",(0,r.kt)("a",{parentName:"p",href:"https://v1-17.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#container-v1-core"},"Kubernetes documentation - core1.Container"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Container name"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Image name"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"busybox:latest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"Container commands"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["wget", "-q", "http://httpbin.org/status/201"]'))))))}u.isMDXComponent=!0}}]);