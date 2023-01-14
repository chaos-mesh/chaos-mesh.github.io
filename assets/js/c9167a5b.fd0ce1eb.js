"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Remote Cluster Management"},l=void 0,i={unversionedId:"remote-cluster-management",id:"version-2.5.1/remote-cluster-management",title:"Remote Cluster Management",description:"Remote Cluster Introduction",source:"@site/versioned_docs/version-2.5.1/remote-cluster-management.md",sourceDirName:".",slug:"/remote-cluster-management",permalink:"/docs/remote-cluster-management",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.1/remote-cluster-management.md",tags:[],version:"2.5.1",frontMatter:{title:"Remote Cluster Management"},sidebar:"docs",previous:{title:"Configure namespace for Chaos experiments",permalink:"/docs/configure-enabled-namespace"},next:{title:"Define the Scope of Chaos Experiments",permalink:"/docs/define-chaos-experiment-scope"}},s={},c=[{value:"Remote Cluster Introduction",id:"remote-cluster-introduction",level:2},{value:"Register a remote cluster",id:"register-a-remote-cluster",level:2},{value:"Field description",id:"field-description",level:3},{value:"Inject errors in the remote cluster",id:"inject-errors-in-the-remote-cluster",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"remote-cluster-introduction"},"Remote Cluster Introduction"),(0,a.kt)("p",null,"Chaos Mesh provides the cluster scoped ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteCluster")," resource to help you manage and inject faults into remote Kubernetes clusters. This document describes how to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteCluster")," object and use it to inject faults."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"RemoteCluster")," is in an early stage. The configuration and function of it (for example, configuration migration, version management and authentication) will continue to improve. If you faced any problem, please open an issue in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"chaos-mesh/chaos-mesh")," to report.")),(0,a.kt)("h2",{id:"register-a-remote-cluster"},"Register a remote cluster"),(0,a.kt)("p",null,"To register a remote cluster into the Chaos Mesh installed on the current cluster, you'll need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteCluster")," resource. After creating such a resource, necessary components will be installed automatically in the remote cluster. The following is an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteCluster")," resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: RemoteCluster\nmetadata:\n  name: cluster-xxxxxxx\nspec:\n  namespace: 'chaos-mesh'\n  kubeConfig:\n    secretRef:\n      name: chaos-mesh-02.kubeconfig\n      namespace: default\n      key: kubeconfig\n")),(0,a.kt)("p",null,"It will install the ",(0,a.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," helm chart with the ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},".spec.kubeConfig")," field in the specified namespace."),(0,a.kt)("h3",{id:"field-description"},"Field description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Represent the namespace to install chaos-mesh components in the remote cluster"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"chaos-mesh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubeConfig.secretRef.name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the secret, which is used to store the kubeconfig of remote cluster. This kubeconfig will be used to install chaos-mesh components and inject errors"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"chaos-mesh-02.kubeconfig"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubeConfig.secretRef.namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the kubeconfig secret."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"default"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubeConfig.secretRef.key"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The key of the kubeconfig in the secret."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"kubeconfig"))))),(0,a.kt)("h2",{id:"inject-errors-in-the-remote-cluster"},"Inject errors in the remote cluster"),(0,a.kt)("p",null,"To inject the errors to a remote cluster using the registered ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteCluster"),", you could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"remoteCluster")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},".spec")," of every chaos types. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: burn-cpu\nspec:\n  remoteCluster: cluster-xxxxxxx\n  mode: one\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  stressors:\n    cpu:\n      workers: 1\n      load: 100\n      options: ['--cpu 2', '--timeout 600', '--hdd 1']\n  duration: '30s'\n")),(0,a.kt)("p",null,"The Chaos Mesh will inject the errors to the remote cluster using the kubeconfig registered with the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteCluster")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-xxxxxxx"),". The corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"StressChaos")," will be automatically created in the remote cluster, and the status is synchronized back to the current cluster, so that you can manage the chaos injection for multiple different clusters in a single kubernetes."))}u.isMDXComponent=!0}}]);