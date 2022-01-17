"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8655],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||l;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86599:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Define the Scope of Chaos Experiments"},s=void 0,p={unversionedId:"define-chaos-experiment-scope",id:"define-chaos-experiment-scope",isDocsHomePage:!1,title:"Define the Scope of Chaos Experiments",description:"This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault's explosion radius.",source:"@site/docs/define-chaos-experiment-scope.md",sourceDirName:".",slug:"/define-chaos-experiment-scope",permalink:"/docs/next/define-chaos-experiment-scope",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/define-chaos-experiment-scope.md",tags:[],version:"current",frontMatter:{title:"Define the Scope of Chaos Experiments"},sidebar:"docs",previous:{title:"Configure namespace for Chaos experiments",permalink:"/docs/next/configure-enabled-namespace"},next:{title:"Define Scheduling Rules",permalink:"/docs/next/define-scheduling-rules"}},c=[{value:"An overview of experiment scopes",id:"an-overview-of-experiment-scopes",children:[],level:2},{value:"Define the experiment scope in a YAML configuration file",id:"define-the-experiment-scope-in-a-yaml-configuration-file",children:[{value:"Namespace selectors",id:"namespace-selectors",children:[],level:3},{value:"Label selectors",id:"label-selectors",children:[],level:3},{value:"Expression selectors",id:"expression-selectors",children:[],level:3},{value:"Annotation selectors",id:"annotation-selectors",children:[],level:3},{value:"Field selectors",id:"field-selectors",children:[],level:3},{value:"PodPhase selectors",id:"podphase-selectors",children:[],level:3},{value:"Node selectors",id:"node-selectors",children:[],level:3},{value:"Node list selector",id:"node-list-selector",children:[],level:3},{value:"Pod list selector",id:"pod-list-selector",children:[],level:3},{value:"Physical machine list selector",id:"physical-machine-list-selector",children:[],level:3}],level:2},{value:"Define the experiment scope on Chaos Dashboard",id:"define-the-experiment-scope-on-chaos-dashboard",children:[],level:2},{value:"Compatibility matrix",id:"compatibility-matrix",children:[],level:2}],m={toc:c};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault's explosion radius."),(0,l.kt)("h2",{id:"an-overview-of-experiment-scopes"},"An overview of experiment scopes"),(0,l.kt)("p",null,"In Chaos Mesh, you can define the scope of a single Chaos experiment by specifying a selector."),(0,l.kt)("p",null,"Different types of selectors correspond to different filtering rules. You can specify one or more selectors in a Chaos experiment to define the scope of your experiment. If multiple selectors are specified at the same time, the current experiment target must meet the rules of all specified selectors at the same time."),(0,l.kt)("p",null,"When you create a Chaos experiment, Chaos Mesh supports the following ways to define the scope of an experiment. You can choose any one of the following ways as needed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Define the experiment scope in a YAML configuration file"),(0,l.kt)("li",{parentName:"ul"},"Define the experiment scope on the Chaos Dashboard")),(0,l.kt)("h2",{id:"define-the-experiment-scope-in-a-yaml-configuration-file"},"Define the experiment scope in a YAML configuration file"),(0,l.kt)("p",null,"This section introduces the meanings of different selector types and their the usages, and provides the configuration examples in the YAML file. When defining the experiment scope in the YAML file, you can specify one or more selectors according to your need of scope filtering."),(0,l.kt)("h3",{id:"namespace-selectors"},"Namespace selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the namespace of the experiment's target Pod."),(0,l.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,l.kt)("li",{parentName:"ul"},"If this selector is empty or is not specified, Chaos Mesh will set it to the namespace of the current Chaos experiment.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    namespaces:\n      - 'app-ns'\n")),(0,l.kt)("h3",{id:"label-selectors"},"Label selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," that the experiment's target Pod must have."),(0,l.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,l.kt)("li",{parentName:"ul"},"If multiple labels are specified, the experiment target must have all the labels specified by this selector.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,l.kt)("h3",{id:"expression-selectors"},"Expression selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies a set of ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements"},"expressions")," that define the label's rules to specifiy the experiment's target Pod."),(0,l.kt)("li",{parentName:"ul"},"You can use this selector to set up the experiment's target Pod that does not meet some labels.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    expressionSelectors:\n      - { key: tier, operator: In, values: [cache] }\n      - { key: environment, operator: NotIn, values: [dev] }\n")),(0,l.kt)("h3",{id:"annotation-selectors"},"Annotation selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"annotations")," that the experiment's target Pod must have."),(0,l.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,l.kt)("li",{parentName:"ul"},"If multiple annotations are specified, the experiment target must have all annotations specified by this selector.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    annotationSelectors:\n      'example-annotation': 'group-a'\n")),(0,l.kt)("h3",{id:"field-selectors"},"Field selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"},"fields")," of the experiment's target Pod."),(0,l.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,l.kt)("li",{parentName:"ul"},"If multiple fields are specified, the experiment target must have all fields set by this selector.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    fieldSelectors:\n      'metadata.name': 'my-pod'\n")),(0,l.kt)("h3",{id:"podphase-selectors"},"PodPhase selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the phase of the experiment's target Pod."),(0,l.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,l.kt)("li",{parentName:"ul"},"Supported phases: ",(0,l.kt)("inlineCode",{parentName:"li"},"Pending"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Running"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Succeeded"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Failed"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Unknown"),"."),(0,l.kt)("li",{parentName:"ul"},"This option is empty by default, which means that the target Pod's phase is not limited.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    podPhaseSelectors:\n      - 'Running'\n")),(0,l.kt)("h3",{id:"node-selectors"},"Node selectors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/"},"node label")," to which the experiment's target Pod belongs."),(0,l.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,l.kt)("li",{parentName:"ul"},"If multiple node labels are specified, the node to which the experiment's target Pod belongs must have all labels specified by this selector.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodeSelectors:\n      'node-label': 'label-one'\n")),(0,l.kt)("h3",{id:"node-list-selector"},"Node list selector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the node to which the experiment's target Pod belongs."),(0,l.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,l.kt)("li",{parentName:"ul"},"The target Pod can only belong to one node in the configured node list.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodes:\n      - node1\n      - node2\n")),(0,l.kt)("h3",{id:"pod-list-selector"},"Pod list selector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the namespaces and list of the experiment's target ",(0,l.kt)("inlineCode",{parentName:"li"},"Pods"),"."),(0,l.kt)("li",{parentName:"ul"},'Type of data: key-value pairs. The "keys" are the namespaces of the target ',(0,l.kt)("inlineCode",{parentName:"li"},"Pod"),' and the "values" are the target ',(0,l.kt)("inlineCode",{parentName:"li"},"Pod")," list."),(0,l.kt)("li",{parentName:"ul"},"If you have specified this selector, Chaos Mesh ",(0,l.kt)("strong",{parentName:"li"},"ignores")," other configured selectors.")),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")),(0,l.kt)("h3",{id:"physical-machine-list-selector"},"Physical machine list selector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specifies the namespaces and list of the experiment's target ",(0,l.kt)("inlineCode",{parentName:"li"},"PhysicalMachines"),"."),(0,l.kt)("li",{parentName:"ul"},'Type of data: key-value pairs. The "keys" are the namespaces of the target ',(0,l.kt)("inlineCode",{parentName:"li"},"PhysicalMachine"),', and the "values" are the target ',(0,l.kt)("inlineCode",{parentName:"li"},"PhysicalMachine")," list."),(0,l.kt)("li",{parentName:"ul"},"If you have specified this selector, Chaos Mesh ",(0,l.kt)("strong",{parentName:"li"},"ignores")," other configured selectors.")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"PhysicalMachine")," is a CRD (CustomResourcesDefinition) that represents a physical machine. To create ",(0,l.kt)("inlineCode",{parentName:"p"},"PhysicalMachine"),", Chaos Mesh uses ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/chaosctl-tool#generate-tls-certs-for-choasd"},"Chaosctl"),"."))),(0,l.kt)("p",null,"When creating the experiment using the YAML file, you need to configure selectors. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    physicalMachines:\n      default: # namespace of the target PhysicalMachines\n        - physcial-machine-a\n        - physcial-machine-b\n")),(0,l.kt)("h2",{id:"define-the-experiment-scope-on-chaos-dashboard"},"Define the experiment scope on Chaos Dashboard"),(0,l.kt)("p",null,"If you use Chaos Dashboard to create a Chaos experiment, you can configure the Chaos experiment scope when filling out the experiment information."),(0,l.kt)("p",null,"The following selectors are currently available on Chaos Dashboard. You can specify one or more selectors according to the filtering requirements of the experiment scope:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Namespace selectors"),(0,l.kt)("li",{parentName:"ul"},"Label selectors"),(0,l.kt)("li",{parentName:"ul"},"Annotation selectors"),(0,l.kt)("li",{parentName:"ul"},"Phase selectors")),(0,l.kt)("p",null,"While setting selectors, you can also view the actual scope of the experiment target in the Dashboard in real time and can directly modify the target Pod scope filtered by the selectors."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Dashboard Selectors",src:n(21647).Z})),(0,l.kt)("h2",{id:"compatibility-matrix"},"Compatibility matrix"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Support Kubernetes"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Support physical machine"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Namespace Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Label Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Expression Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Annotation Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Field Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PodPhase Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Node Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Node List Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pod List Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PhysicalMachine List Selectors"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")))))}h.isMDXComponent=!0},21647:function(e,t,n){t.Z=n.p+"assets/images/dashboard_selectors_en-6eb46f8883de4818cbbc4f91e664fc47.png"}}]);