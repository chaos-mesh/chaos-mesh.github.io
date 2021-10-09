"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6718],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49386:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Define the Scope of Chaos Experiments"},l=void 0,c={unversionedId:"define-chaos-experiment-scope",id:"version-2.0.2/define-chaos-experiment-scope",isDocsHomePage:!1,title:"Define the Scope of Chaos Experiments",description:"This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault's explosion radius.",source:"@site/versioned_docs/version-2.0.2/define-chaos-experiment-scope.md",sourceDirName:".",slug:"/define-chaos-experiment-scope",permalink:"/docs/define-chaos-experiment-scope",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.2/define-chaos-experiment-scope.md",tags:[],version:"2.0.2",frontMatter:{title:"Define the Scope of Chaos Experiments"},sidebar:"version-2.0.2/docs",previous:{title:"Configure namespace for Chaos experiments",permalink:"/docs/configure-enabled-namespace"},next:{title:"Define Scheduling Rules",permalink:"/docs/define-scheduling-rules"}},p=[{value:"An overview of experiment scopes",id:"an-overview-of-experiment-scopes",children:[]},{value:"Define the experiment scope in a YAML configuration file",id:"define-the-experiment-scope-in-a-yaml-configuration-file",children:[{value:"Namespace selectors",id:"namespace-selectors",children:[]},{value:"Label selectors",id:"label-selectors",children:[]},{value:"Expression selectors",id:"expression-selectors",children:[]},{value:"Annotation selectors",id:"annotation-selectors",children:[]},{value:"Field selectors",id:"field-selectors",children:[]},{value:"PodPhase selectors",id:"podphase-selectors",children:[]},{value:"Node selectors",id:"node-selectors",children:[]},{value:"Node list",id:"node-list",children:[]},{value:"Pod list",id:"pod-list",children:[]}]},{value:"Define the experiment scope on Chaos Dashboard",id:"define-the-experiment-scope-on-chaos-dashboard",children:[]}],u={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault's explosion radius."),(0,a.kt)("h2",{id:"an-overview-of-experiment-scopes"},"An overview of experiment scopes"),(0,a.kt)("p",null,"In Chaos Mesh, you can define the scope of a single Chaos experiment by specifying a selector."),(0,a.kt)("p",null,"Different types of selectors correspond to different filtering rules. You can specify one or more selectors in a Chaos experiment to define the scope of your experiment. If multiple selectors are specified at the same time, the current experiment target must meet the rules of all specified selectors at the same time."),(0,a.kt)("p",null,"When you create a Chaos experiment, Chaos Mesh supports the following ways to define the scope of an experiment. You can choose any one of the following ways as needed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define the experiment scope in a YAML configuration file"),(0,a.kt)("li",{parentName:"ul"},"Define the experiment scope on the Chaos Dashboard")),(0,a.kt)("h2",{id:"define-the-experiment-scope-in-a-yaml-configuration-file"},"Define the experiment scope in a YAML configuration file"),(0,a.kt)("p",null,"This section introduces the meanings of different selector types and their the usages, and provides the configuration examples in the YAML file. When defining the experiment scope in the YAML file, you can specify one or more selectors according to your need of scope filtering."),(0,a.kt)("h3",{id:"namespace-selectors"},"Namespace selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the namespace of the experiment's target Pod."),(0,a.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,a.kt)("li",{parentName:"ul"},"If this selector is empty or is not specified, Chaos Mesh will set it to the namespace of the current Chaos experiment.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    namespaces:\n      - 'app-ns'\n")),(0,a.kt)("h3",{id:"label-selectors"},"Label selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," that the experiment's target Pod must have."),(0,a.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,a.kt)("li",{parentName:"ul"},"If multiple labels are specified, the experiment target must have all the labels specified by this selector.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,a.kt)("h3",{id:"expression-selectors"},"Expression selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies a set of ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements"},"expressions")," that define the label's rules to specifiy the experiment's target Pod."),(0,a.kt)("li",{parentName:"ul"},"You can use this selector to set up the experiment's target Pod that does not meet some labels.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    expressionSelectors:\n      - { key: tier, operator: In, values: [cache] }\n      - { key: environment, operator: NotIn, values: [dev] }\n")),(0,a.kt)("h3",{id:"annotation-selectors"},"Annotation selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"annotations")," that the experiment's target Pod must have."),(0,a.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,a.kt)("li",{parentName:"ul"},"If multiple annotations are specified, the experiment target must have all annotations specified by this selector.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    annotationSelectors:\n      'example-annotation': 'group-a'\n")),(0,a.kt)("h3",{id:"field-selectors"},"Field selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"},"fields")," of the experiment's target Pod."),(0,a.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,a.kt)("li",{parentName:"ul"},"If multiple fields are specified, the experiment target must have all fields set by this selector.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    fieldSelectors:\n      'metadata.name': 'my-pod'\n")),(0,a.kt)("h3",{id:"podphase-selectors"},"PodPhase selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the phase of the experiment's target Pod."),(0,a.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,a.kt)("li",{parentName:"ul"},"Supported phases: ",(0,a.kt)("inlineCode",{parentName:"li"},"Pending"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Running"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Succeeded"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Failed"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Unknown"),"."),(0,a.kt)("li",{parentName:"ul"},"This option is empty by default, which means that the target Pod's phase is not limited.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    podPhaseSelectors:\n      - 'Running'\n")),(0,a.kt)("h3",{id:"node-selectors"},"Node selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/"},"node label")," to which the experiment's target Pod belongs."),(0,a.kt)("li",{parentName:"ul"},"Data type: key-value pairs."),(0,a.kt)("li",{parentName:"ul"},"If multiple node labels are specified, the node to which the experiment's target Pod belongs must have all labels specified by this selector.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodeSelectors:\n      'node-label': 'label-one'\n")),(0,a.kt)("h3",{id:"node-list"},"Node list"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the node to which the experiment's target Pod belongs."),(0,a.kt)("li",{parentName:"ul"},"Data type: string array type."),(0,a.kt)("li",{parentName:"ul"},"The target Pod can only belong to one node in the configured node list.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    nodes:\n      - node1\n      - node2\n")),(0,a.kt)("h3",{id:"pod-list"},"Pod list"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the namespaces and list of the experiment's target Pods."),(0,a.kt)("li",{parentName:"ul"},'Type of data: key-value pairs. The "keys" are the namespaces of the target Pod and the "values" are the target Pod list.'),(0,a.kt)("li",{parentName:"ul"},"If you have specified this selector, Chaos Mesh will ",(0,a.kt)("strong",{parentName:"li"},"ignore")," other configured selectors.")),(0,a.kt)("p",null,"When you create the experiment using the YAML file, see the following example for selector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")),(0,a.kt)("h2",{id:"define-the-experiment-scope-on-chaos-dashboard"},"Define the experiment scope on Chaos Dashboard"),(0,a.kt)("p",null,"If you use Chaos Dashboard to create a Chaos experiment, you can configure the Chaos experiment scope when filling out the experiment information."),(0,a.kt)("p",null,"The following selectors are currently available on Chaos Dashboard. You can specify one or more selectors according to the filtering requirements of the experiment scope:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Namespace selectors"),(0,a.kt)("li",{parentName:"ul"},"Label selectors"),(0,a.kt)("li",{parentName:"ul"},"Annotation selectors"),(0,a.kt)("li",{parentName:"ul"},"Phase selectors")),(0,a.kt)("p",null,"While setting selectors, you can also view the actual scope of the experiment target in the Dashboard in real time and can directly modify the target Pod scope filtered by the selectors."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard Selectors",src:n(98150).Z})))}h.isMDXComponent=!0},98150:function(e,t,n){t.Z=n.p+"assets/images/dashboard_selectors_en-6eb46f8883de4818cbbc4f91e664fc47.png"}}]);