"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6143],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30643:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={title:"Define the Scope of Chaos Experiment"},l=void 0,c={unversionedId:"user_guides/experiment_scope",id:"version-1.0.3/user_guides/experiment_scope",isDocsHomePage:!1,title:"Define the Scope of Chaos Experiment",description:"This document describes how to define the scope of a chaos experiment.",source:"@site/versioned_docs/version-1.0.3/user_guides/experiment_scope.md",sourceDirName:"user_guides",slug:"/user_guides/experiment_scope",permalink:"/zh/docs/1.0.3/user_guides/experiment_scope",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/user_guides/experiment_scope.md",tags:[],version:"1.0.3",frontMatter:{title:"Define the Scope of Chaos Experiment"},sidebar:"version-1.0.3/docs",previous:{title:"Installation",permalink:"/zh/docs/1.0.3/user_guides/installation"},next:{title:"Run Chaos Experiment",permalink:"/zh/docs/1.0.3/user_guides/run_chaos_experiment"}},p=[{value:"Namespace selectors",id:"namespace-selectors",children:[]},{value:"Label selectors",id:"label-selectors",children:[]},{value:"Annotation selectors",id:"annotation-selectors",children:[]},{value:"Field selectors",id:"field-selectors",children:[]},{value:"Pod phase selectors",id:"pod-phase-selectors",children:[]},{value:"Pod selectors",id:"pod-selectors",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to define the scope of a chaos experiment."),(0,s.kt)("p",null,"Chaos Mesh provides a variety of selectors, which you can use to define the scope of your chaos experiment. These selectors are defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.selector")," field of the chaos object."),(0,s.kt)("h2",{id:"namespace-selectors"},"Namespace selectors"),(0,s.kt)("p",null,"Namespace selectors filter the chaos experiment targets by the namespace. Defined as a set of strings. The default namespace selector for Chaos Mesh is the chaos experiment object. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    namespaces:\n      - 'app-ns'\n")),(0,s.kt)("h2",{id:"label-selectors"},"Label selectors"),(0,s.kt)("p",null,"Label selectors filter chaos experiment targets by the label. Defined as a map of string keys and values. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,s.kt)("h2",{id:"annotation-selectors"},"Annotation selectors"),(0,s.kt)("p",null,"Annotation selectors filter chaos experiment targets by the annotation. Defined as a map of string keys and values. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    annotationSelectors:\n      'example-annotation': 'group-a'\n")),(0,s.kt)("h2",{id:"field-selectors"},"Field selectors"),(0,s.kt)("p",null,"Field selectors filter chaos experiment targets by the resource field. Defined as a map of string keys and values. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    fieldSelectors:\n      'metadata.name': 'my-pod'\n")),(0,s.kt)("p",null,"For more details about field selectors, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/"},"Kubernetes document"),"."),(0,s.kt)("h2",{id:"pod-phase-selectors"},"Pod phase selectors"),(0,s.kt)("p",null,"Pod Phase selectors filter chaos experiment targets by the condition. Defined as a set of string. Supported conditions: ",(0,s.kt)("inlineCode",{parentName:"p"},"Pending"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Unknown"),". For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    podPhaseSelectors:\n      - 'Running'\n")),(0,s.kt)("h2",{id:"pod-selectors"},"Pod selectors"),(0,s.kt)("p",null,"Pod selectors filter chaos experiment targets by the pod. Defined as a map of string keys and values. The key in this map specifies the namespace which the pods belong to, and each value under the key is a pod. If this selector is not empty, these pod defined in this map are used directly and other defined selectors will be ignored. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n")))}u.isMDXComponent=!0}}]);