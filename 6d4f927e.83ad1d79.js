(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(232)),s={id:"experiment_scope",title:"Define the Scope of Chaos Experiment",sidebar_label:"Define the Scope of Chaos Experiment"},c={unversionedId:"user_guides/experiment_scope",id:"user_guides/experiment_scope",isDocsHomePage:!1,title:"Define the Scope of Chaos Experiment",description:"This document describes how to define the scope of a chaos experiment.",source:"@site/docs/user_guides/experiment_scope.md",slug:"/user_guides/experiment_scope",permalink:"/docs/next/user_guides/experiment_scope",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/user_guides/experiment_scope.md",version:"current",sidebar_label:"Define the Scope of Chaos Experiment",sidebar:"docs",previous:{title:"Offline Installation",permalink:"/docs/next/user_guides/offline_installation"},next:{title:"Run Chaos Experiment",permalink:"/docs/next/user_guides/run_chaos_experiment"}},i=[{value:"Namespace selectors",id:"namespace-selectors",children:[]},{value:"Label selectors",id:"label-selectors",children:[]},{value:"Annotation selectors",id:"annotation-selectors",children:[]},{value:"Field selectors",id:"field-selectors",children:[]},{value:"Pod phase selectors",id:"pod-phase-selectors",children:[]},{value:"Pod selectors",id:"pod-selectors",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document describes how to define the scope of a chaos experiment."),Object(a.b)("p",null,"Chaos Mesh provides a variety of selectors, which you can use to define the scope of your chaos experiment. These selectors are defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"spec.selector")," field of the chaos object."),Object(a.b)("h2",{id:"namespace-selectors"},"Namespace selectors"),Object(a.b)("p",null,"Namespace selectors filter the chaos experiment targets by the namespace. Defined as a set of strings. The default namespace selector for Chaos Mesh is the chaos experiment object. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  selector:\n    namespaces:\n      - 'app-ns'\n")),Object(a.b)("h2",{id:"label-selectors"},"Label selectors"),Object(a.b)("p",null,"Label selectors filter chaos experiment targets by the label. Defined as a map of string keys and values. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),Object(a.b)("h2",{id:"annotation-selectors"},"Annotation selectors"),Object(a.b)("p",null,"Annotation selectors filter chaos experiment targets by the annotation. Defined as a map of string keys and values. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  selector:\n    annotationSelectors:\n      'example-annotation': 'group-a'\n")),Object(a.b)("h2",{id:"field-selectors"},"Field selectors"),Object(a.b)("p",null,"Field selectors filter chaos experiment targets by the resource field. Defined as a map of string keys and values. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  selector:\n    fieldSelectors:\n      'metadata.name': 'my-pod'\n")),Object(a.b)("p",null,"For more details about field selectors, refer to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"}),"Kubernetes document"),"."),Object(a.b)("h2",{id:"pod-phase-selectors"},"Pod phase selectors"),Object(a.b)("p",null,"Pod Phase selectors filter chaos experiment targets by the condition. Defined as a set of string. Supported conditions: ",Object(a.b)("inlineCode",{parentName:"p"},"Pending"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Running"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Succeeded"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Failed"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Unknown"),". For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  selector:\n    podPhaseSelectors:\n      - 'Running'\n")),Object(a.b)("h2",{id:"pod-selectors"},"Pod selectors"),Object(a.b)("p",null,"Pod selectors filter chaos experiment targets by the pod. Defined as a map of string keys and values. The key in this map specifies the namespace which the pods belong to, and each value under the key is a pod. If this selector is not empty, these pod defined in this map are used directly and other defined selectors will be ignored. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")))}p.isMDXComponent=!0},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);