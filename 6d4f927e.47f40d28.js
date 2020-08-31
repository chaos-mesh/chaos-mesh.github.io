(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(136)),s={id:"experiment_scope",title:"Define the Scope of Chaos Experiment",sidebar_label:"Define the Scope of Chaos Experiment"},c={unversionedId:"user_guides/experiment_scope",id:"user_guides/experiment_scope",isDocsHomePage:!1,title:"Define the Scope of Chaos Experiment",description:"This document describes how to define the scope of a chaos experiment.",source:"@site/docs/user_guides/experiment_scope.md",permalink:"/docs/next/user_guides/experiment_scope",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/user_guides/experiment_scope.md",version:"next",sidebar_label:"Define the Scope of Chaos Experiment",sidebar:"docs",previous:{title:"KernelChaos Experiment",permalink:"/docs/next/user_guides/kernelchaos_experiment"},next:{title:"Sidecar ConfigMap",permalink:"/docs/next/user_guides/sidecar_configmap"}},i=[{value:"Namespace selectors",id:"namespace-selectors",children:[]},{value:"Label selectors",id:"label-selectors",children:[]},{value:"Annotation selectors",id:"annotation-selectors",children:[]},{value:"Field selectors",id:"field-selectors",children:[]},{value:"Pod phase selectors",id:"pod-phase-selectors",children:[]},{value:"Pod selectors",id:"pod-selectors",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes how to define the scope of a chaos experiment."),Object(o.b)("p",null,"Chaos Mesh provides a variety of selectors, which you can use to define the scope of your chaos experiment. These selectors are defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"spec.selector")," field of the chaos object."),Object(o.b)("h2",{id:"namespace-selectors"},"Namespace selectors"),Object(o.b)("p",null,"Namespace selectors filter the chaos experiment targets by the namespace. Defined as a set of strings. The default namespace selector for Chaos Mesh is the chaos experiment object. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    namespaces:\n      - "app-ns"\n')),Object(o.b)("h2",{id:"label-selectors"},"Label selectors"),Object(o.b)("p",null,"Label selectors filter chaos experiment targets by the label. Defined as a map of string keys and values. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "tikv"\n')),Object(o.b)("h2",{id:"annotation-selectors"},"Annotation selectors"),Object(o.b)("p",null,"Annotation selectors filter chaos experiment targets by the annotation. Defined as a map of string keys and values. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    annotationSelectors:\n      "example-annotation": "group-a"\n')),Object(o.b)("h2",{id:"field-selectors"},"Field selectors"),Object(o.b)("p",null,"Field selectors filter chaos experiment targets by the resource field. Defined as a map of string keys and values. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    fieldSelectors:\n      "metadata.name": "my-pod"\n')),Object(o.b)("p",null,"For more details about field selectors, refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"}),"Kubernetes document"),"."),Object(o.b)("h2",{id:"pod-phase-selectors"},"Pod phase selectors"),Object(o.b)("p",null,"Pod Phase selectors filter chaos experiment targets by the condition. Defined as a set of string. Supported conditions: ",Object(o.b)("inlineCode",{parentName:"p"},"Pending"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Running"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Succeeded"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Failed"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Unknown"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    podPhaseSelectors:\n      - "Running"\n')),Object(o.b)("h2",{id:"pod-selectors"},"Pod selectors"),Object(o.b)("p",null,"Pod selectors filter chaos experiment targets by the pod. Defined as a map of string keys and values. The key in this map specifies the namespace which the pods belong to, and each value under the key is a pod. If this selector is not empty, these pod defined in this map are used directly and other defined selectors will be ignored. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec: \n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")))}p.isMDXComponent=!0}}]);