(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(263)),s={id:"features",title:"Features",sidebar_label:"Features"},a={unversionedId:"overview/features",id:"version-1.1.4/overview/features",isDocsHomePage:!1,title:"Features",description:"Easy to Use",source:"@site/versioned_docs/version-1.1.4/overview/features.md",slug:"/overview/features",permalink:"/docs/1.1.4/overview/features",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/overview/features.md",version:"1.1.4",sidebar_label:"Features",sidebar:"version-1.1.4/docs",previous:{title:"What is Chaos Mesh",permalink:"/docs/1.1.4/"},next:{title:"Architecture",permalink:"/docs/1.1.4/overview/architecture"}},c=[{value:"Easy to Use",id:"easy-to-use",children:[]},{value:"Design for Kubernetes",id:"design-for-kubernetes",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"easy-to-use"},"Easy to Use"),Object(i.b)("p",null,"No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes clusters, including ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubernetes/minikube"}),"Minikube")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kind.sigs.k8s.io/docs/user/quick-start/"}),"Kind"),"."),Object(i.b)("p",null,"Require no modification to the deployment logic of the system under test (SUT)\nEasily orchestrate fault injection behaviors in chaos experiments\nHide underlying implementation details so that users can focus on orchestrating the chaos experiments"),Object(i.b)("h2",{id:"design-for-kubernetes"},"Design for Kubernetes"),Object(i.b)("p",null,"Chaos Mesh uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"}),"CustomResourceDefinitions")," (CRD) to define chaos objects."),Object(i.b)("p",null,"In the Kubernetes realm, CRD is a mature solution for implementing custom resources, with abundant implementation cases and toolsets available. Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem."))}l.isMDXComponent=!0},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return r?o.a.createElement(f,a(a({ref:t},u),{},{components:r})):o.a.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);