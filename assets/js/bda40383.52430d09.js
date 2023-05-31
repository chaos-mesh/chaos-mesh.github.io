"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2452],{49613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,u=m["".concat(o,".").concat(d)]||m[d]||h[d]||l;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(60795),r=(a(59496),a(49613));const l={title:"Define the Scope of Chaos Experiments"},i=void 0,s={unversionedId:"define-chaos-experiment-scope",id:"version-2.5.2/define-chaos-experiment-scope",title:"Define the Scope of Chaos Experiments",description:"This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault's explosion radius.",source:"@site/versioned_docs/version-2.5.2/define-chaos-experiment-scope.md",sourceDirName:".",slug:"/define-chaos-experiment-scope",permalink:"/docs/2.5.2/define-chaos-experiment-scope",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/define-chaos-experiment-scope.md",tags:[],version:"2.5.2",frontMatter:{title:"Define the Scope of Chaos Experiments"},sidebar:"docs",previous:{title:"Remote Cluster Management",permalink:"/docs/2.5.2/remote-cluster-management"},next:{title:"Define Scheduling Rules",permalink:"/docs/2.5.2/define-scheduling-rules"}},o={},p=[{value:"An overview of experiment scopes",id:"an-overview-of-experiment-scopes",level:2},{value:"Define the experiment scope in a YAML configuration file",id:"define-the-experiment-scope-in-a-yaml-configuration-file",level:2},{value:"Namespace selectors",id:"namespace-selectors",level:3},{value:"Label selectors",id:"label-selectors",level:3},{value:"Expression selectors",id:"expression-selectors",level:3},{value:"Annotation selectors",id:"annotation-selectors",level:3},{value:"Field selectors",id:"field-selectors",level:3},{value:"PodPhase selectors",id:"podphase-selectors",level:3},{value:"Node selectors",id:"node-selectors",level:3},{value:"Node list selector",id:"node-list-selector",level:3},{value:"Pod list selector",id:"pod-list-selector",level:3},{value:"Physical machine list selector",id:"physical-machine-list-selector",level:3},{value:"Define the experiment scope on Chaos Dashboard",id:"define-the-experiment-scope-on-chaos-dashboard",level:2},{value:"Compatibility matrix",id:"compatibility-matrix",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault's explosion radius."),(0,r.kt)("h2",{id:"an-overview-of-experiment-scopes"},"An overview of experiment scopes"),(0,r.kt)("p",null,"In Chaos Mesh, you can define the scope of a single Chaos experiment by specifying a selector."),(0,r.kt)("p",null,"Different types of selectors correspond to different filtering rules. You can specify one or more selectors in a Chaos experiment to define the scope of your experiment. If multiple selectors are specified at the same time, the current experiment target must meet the rules of all specified selectors at the same time."),(0,r.kt)("p",null,"When you create a Chaos experiment, Chaos Mesh supports the following ways to define the scope of an experiment. You can choose any one of the following ways as needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define the experiment scope in a YAML configuration file"),(0,r.kt)("li",{parentName:"ul"},"Define the experiment scope on the Chaos Dashboard")),(0,r.kt)("h2",{id:"define-the-experiment-scope-in-a-yaml-configuration-file"},"Define the experiment scope in a YAML configuration file"),(0,r.kt)("p",null,"This section introduces the meanings of different selector types and their the usages, and provides the configuration examples in the YAML file. When defining the experiment scope in the YAML file, you can specify one or more selectors according to your need of scope filtering."),(0,r.kt)("h3",{id:"namespace-selectors"},"Namespace selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the namespace of the experiment's target Pod."),(0,r.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,r.kt)("li",{parentName:"ul"},"If this selector is empty or is not specified, Chaos Mesh will set it to the namespace of the current Chaos experiment.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    namespaces:\n      - 'app-ns'\n")),(0,r.kt)("h3",{id:"label-selectors"},"Label selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," that the experiment's target Pod must have."),(0,r.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,r.kt)("li",{parentName:"ul"},"If multiple labels are specified, the experiment target must have all the labels specified by this selector.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,r.kt)("h3",{id:"expression-selectors"},"Expression selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies a set of ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements"},"expressions")," that define the label's rules to specifiy the experiment's target Pod."),(0,r.kt)("li",{parentName:"ul"},"You can use this selector to set up the experiment's target Pod that does not meet some labels.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    expressionSelectors:\n      - { key: tier, operator: In, values: [cache] }\n      - { key: environment, operator: NotIn, values: [dev] }\n")),(0,r.kt)("h3",{id:"annotation-selectors"},"Annotation selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"annotations")," that the experiment's target Pod must have."),(0,r.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,r.kt)("li",{parentName:"ul"},"If multiple annotations are specified, the experiment target must have all annotations specified by this selector.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    annotationSelectors:\n      'example-annotation': 'group-a'\n")),(0,r.kt)("h3",{id:"field-selectors"},"Field selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"},"fields")," of the experiment's target Pod."),(0,r.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,r.kt)("li",{parentName:"ul"},"If multiple fields are specified, the experiment target must have all fields set by this selector.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    fieldSelectors:\n      'metadata.name': 'my-pod'\n")),(0,r.kt)("h3",{id:"podphase-selectors"},"PodPhase selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the phase of the experiment's target Pod."),(0,r.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,r.kt)("li",{parentName:"ul"},"Supported phases: ",(0,r.kt)("inlineCode",{parentName:"li"},"Pending"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Running"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Succeeded"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Failed"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Unknown"),"."),(0,r.kt)("li",{parentName:"ul"},"This option is empty by default, which means that the target Pod's phase is not limited.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    podPhaseSelectors:\n      - 'Running'\n")),(0,r.kt)("h3",{id:"node-selectors"},"Node selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/"},"node label")," to which the experiment's target Pod belongs."),(0,r.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,r.kt)("li",{parentName:"ul"},"If multiple node labels are specified, the node to which the experiment's target Pod belongs must have all labels specified by this selector.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodeSelectors:\n      'node-label': 'label-one'\n")),(0,r.kt)("h3",{id:"node-list-selector"},"Node list selector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the node to which the experiment's target Pod belongs."),(0,r.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,r.kt)("li",{parentName:"ul"},"The target Pod can only belong to one node in the configured node list.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodes:\n      - node1\n      - node2\n")),(0,r.kt)("h3",{id:"pod-list-selector"},"Pod list selector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the namespaces and list of the experiment's target ",(0,r.kt)("inlineCode",{parentName:"li"},"Pods"),"."),(0,r.kt)("li",{parentName:"ul"},'Type of data: key-value pairs. The "keys" are the namespaces of the target ',(0,r.kt)("inlineCode",{parentName:"li"},"Pod"),' and the "values" are the target ',(0,r.kt)("inlineCode",{parentName:"li"},"Pod")," list."),(0,r.kt)("li",{parentName:"ul"},"If you have specified this selector, Chaos Mesh ",(0,r.kt)("strong",{parentName:"li"},"ignores")," other configured selectors.")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")),(0,r.kt)("h3",{id:"physical-machine-list-selector"},"Physical machine list selector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the namespaces and list of the experiment's target ",(0,r.kt)("inlineCode",{parentName:"li"},"PhysicalMachines"),"."),(0,r.kt)("li",{parentName:"ul"},'Type of data: key-value pairs. The "keys" are the namespaces of the target ',(0,r.kt)("inlineCode",{parentName:"li"},"PhysicalMachine"),', and the "values" are the target ',(0,r.kt)("inlineCode",{parentName:"li"},"PhysicalMachine")," list."),(0,r.kt)("li",{parentName:"ul"},"If you have specified this selector, Chaos Mesh ",(0,r.kt)("strong",{parentName:"li"},"ignores")," other configured selectors.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"PhysicalMachine")," is a CRD (CustomResourcesDefinition) that represents a physical machine. To create ",(0,r.kt)("inlineCode",{parentName:"p"},"PhysicalMachine"),", Chaos Mesh uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.5.2/chaosctl-tool#generate-tls-certificates-for-chaosd"},"Chaosctl"),".")),(0,r.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    physicalMachines:\n      default: # namespace of the target PhysicalMachines\n        - physcial-machine-a\n        - physcial-machine-b\n")),(0,r.kt)("h2",{id:"define-the-experiment-scope-on-chaos-dashboard"},"Define the experiment scope on Chaos Dashboard"),(0,r.kt)("p",null,"If you use Chaos Dashboard to create a Chaos experiment, you can configure the Chaos experiment scope when filling out the experiment information."),(0,r.kt)("p",null,"The following selectors are currently available on Chaos Dashboard. You can specify one or more selectors according to the filtering requirements of the experiment scope:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace selectors"),(0,r.kt)("li",{parentName:"ul"},"Label selectors"),(0,r.kt)("li",{parentName:"ul"},"Annotation selectors"),(0,r.kt)("li",{parentName:"ul"},"Phase selectors")),(0,r.kt)("p",null,"While setting selectors, you can also view the actual scope of the experiment target in the Dashboard in real time and can directly modify the target Pod scope filtered by the selectors."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboard Selectors",src:a(33957).Z,width:"815",height:"647"})),(0,r.kt)("h2",{id:"compatibility-matrix"},"Compatibility matrix"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Support Kubernetes"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Support physical machine"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Label Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Expression Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Annotation Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Field Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PodPhase Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node List Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pod List Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PhysicalMachine List Selectors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")))))}h.isMDXComponent=!0},33957:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard_selectors_en-6eb46f8883de4818cbbc4f91e664fc47.png"}}]);