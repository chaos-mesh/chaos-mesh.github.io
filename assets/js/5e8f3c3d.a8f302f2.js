"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[35622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={title:"Features"},i=void 0,a={unversionedId:"overview/features",id:"version-1.2.4/overview/features",title:"Features",description:"Easy to Use",source:"@site/versioned_docs/version-1.2.4/overview/features.md",sourceDirName:"overview",slug:"/overview/features",permalink:"/docs/1.2.4/overview/features",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/overview/features.md",tags:[],version:"1.2.4",frontMatter:{title:"Features"},sidebar:"version-1.2.4/docs",previous:{title:"What is Chaos Mesh",permalink:"/docs/1.2.4/"},next:{title:"Architecture",permalink:"/docs/1.2.4/overview/architecture"}},c={},u=[{value:"Easy to Use",id:"easy-to-use",level:2},{value:"Design for Kubernetes",id:"design-for-kubernetes",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"easy-to-use"},"Easy to Use"),(0,o.kt)("p",null,"No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes clusters, including ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube"},"Minikube")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"),"."),(0,o.kt)("p",null,"Require no modification to the deployment logic of the system under test (SUT) Easily orchestrate fault injection behaviors in chaos experiments Hide underlying implementation details so that users can focus on orchestrating the chaos experiments"),(0,o.kt)("h2",{id:"design-for-kubernetes"},"Design for Kubernetes"),(0,o.kt)("p",null,"Chaos Mesh uses ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CustomResourceDefinitions")," (CRD) to define chaos objects."),(0,o.kt)("p",null,"In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem."))}p.isMDXComponent=!0}}]);