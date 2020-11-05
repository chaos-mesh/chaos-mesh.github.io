(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),s=(n(0),n(205)),a={id:"experiment_scope",title:"Define the Scope of Chaos Experiment",sidebar_label:"Define the Scope of Chaos Experiment"},c={unversionedId:"user_guides/experiment_scope",id:"version-1.0.1/user_guides/experiment_scope",isDocsHomePage:!1,title:"Define the Scope of Chaos Experiment",description:"This document describes how to define the scope of a chaos experiment.",source:"@site/versioned_docs/version-1.0.1/user_guides/experiment_scope.md",slug:"/user_guides/experiment_scope",permalink:"/docs/user_guides/experiment_scope",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.1/user_guides/experiment_scope.md",version:"1.0.1",sidebar_label:"Define the Scope of Chaos Experiment",sidebar:"version-1.0.1/docs",previous:{title:"Run Chaos Experiment",permalink:"/docs/get_started/run_chaos_experiment"},next:{title:"PodChaos Experiment",permalink:"/docs/chaos_experiments/podchaos_experiment"}},i=[{value:"Namespace selectors",id:"namespace-selectors",children:[]},{value:"Label selectors",id:"label-selectors",children:[]},{value:"Annotation selectors",id:"annotation-selectors",children:[]},{value:"Field selectors",id:"field-selectors",children:[]},{value:"Pod phase selectors",id:"pod-phase-selectors",children:[]},{value:"Pod selectors",id:"pod-selectors",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document describes how to define the scope of a chaos experiment."),Object(s.b)("p",null,"Chaos Mesh provides a variety of selectors, which you can use to define the scope of your chaos experiment. These selectors are defined in the ",Object(s.b)("inlineCode",{parentName:"p"},"spec.selector")," field of the chaos object."),Object(s.b)("h2",{id:"namespace-selectors"},"Namespace selectors"),Object(s.b)("p",null,"Namespace selectors filter the chaos experiment targets by the namespace. Defined as a set of strings. The default namespace selector for Chaos Mesh is the chaos experiment object. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    namespaces:\n      - "app-ns"\n')),Object(s.b)("h2",{id:"label-selectors"},"Label selectors"),Object(s.b)("p",null,"Label selectors filter chaos experiment targets by the label. Defined as a map of string keys and values. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    labelSelectors:\n      "app.kubernetes.io/component": "tikv"\n')),Object(s.b)("h2",{id:"annotation-selectors"},"Annotation selectors"),Object(s.b)("p",null,"Annotation selectors filter chaos experiment targets by the annotation. Defined as a map of string keys and values. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    annotationSelectors:\n      "example-annotation": "group-a"\n')),Object(s.b)("h2",{id:"field-selectors"},"Field selectors"),Object(s.b)("p",null,"Field selectors filter chaos experiment targets by the resource field. Defined as a map of string keys and values. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    fieldSelectors:\n      "metadata.name": "my-pod"\n')),Object(s.b)("p",null,"For more details about field selectors, refer to the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"}),"Kubernetes document"),"."),Object(s.b)("h2",{id:"pod-phase-selectors"},"Pod phase selectors"),Object(s.b)("p",null,"Pod Phase selectors filter chaos experiment targets by the condition. Defined as a set of string. Supported conditions: ",Object(s.b)("inlineCode",{parentName:"p"},"Pending"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Running"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Succeeded"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Failed"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Unknown"),". For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'spec: \n  selector:\n    podPhaseSelectors:\n      - "Running"\n')),Object(s.b)("h2",{id:"pod-selectors"},"Pod selectors"),Object(s.b)("p",null,"Pod selectors filter chaos experiment targets by the pod. Defined as a map of string keys and values. The key in this map specifies the namespace which the pods belong to, and each value under the key is a pod. If this selector is not empty, these pod defined in this map are used directly and other defined selectors will be ignored. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec: \n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")))}p.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||s;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);