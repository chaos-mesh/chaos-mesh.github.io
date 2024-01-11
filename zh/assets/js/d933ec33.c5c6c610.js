"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2951],{71694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(11527),r=n(7463);const o={title:"Remote Cluster Management"},i=void 0,c={id:"remote-cluster-management",title:"Remote Cluster Management",description:"Remote Cluster Introduction",source:"@site/versioned_docs/version-2.6.2/remote-cluster-management.md",sourceDirName:".",slug:"/remote-cluster-management",permalink:"/zh/docs/remote-cluster-management",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/remote-cluster-management.md",tags:[],version:"2.6.2",frontMatter:{title:"Remote Cluster Management"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4",permalink:"/zh/docs/configure-enabled-namespace"},next:{title:"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4",permalink:"/zh/docs/define-chaos-experiment-scope"}},d={},l=[{value:"Remote Cluster Introduction",id:"remote-cluster-introduction",level:2},{value:"Register a remote cluster",id:"register-a-remote-cluster",level:2},{value:"Field description",id:"field-description",level:3},{value:"Inject errors in the remote cluster",id:"inject-errors-in-the-remote-cluster",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"remote-cluster-introduction",children:"Remote Cluster Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Chaos Mesh provides the cluster scoped ",(0,s.jsx)(t.code,{children:"RemoteCluster"})," resource to help you manage and inject faults into remote Kubernetes clusters. This document describes how to create a ",(0,s.jsx)(t.code,{children:"RemoteCluster"})," object and use it to inject faults."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"RemoteCluster"})," is in an early stage. The configuration and function of it (for example, configuration migration, version management and authentication) will continue to improve. If you faced any problem, please open an issue in ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"chaos-mesh/chaos-mesh"})," to report."]})}),"\n",(0,s.jsx)(t.h2,{id:"register-a-remote-cluster",children:"Register a remote cluster"}),"\n",(0,s.jsxs)(t.p,{children:["To register a remote cluster into the Chaos Mesh installed on the current cluster, you'll need to create a ",(0,s.jsx)(t.code,{children:"RemoteCluster"})," resource. After creating such a resource, necessary components will be installed automatically in the remote cluster. The following is an example of a ",(0,s.jsx)(t.code,{children:"RemoteCluster"})," resource:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: RemoteCluster\nmetadata:\n  name: cluster-xxxxxxx\nspec:\n  namespace: 'chaos-mesh'\n  version: '2.6.2'\n  kubeConfig:\n    secretRef:\n      name: remote-chaos-mesh.kubeconfig\n      namespace: default\n      key: kubeconfig\n  # configOverride:\n  #   dashboard:\n  #     create: true\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It will install the ",(0,s.jsx)(t.code,{children:"chaos-mesh"})," helm chart with the ",(0,s.jsx)(t.code,{children:"KUBECONFIG"})," provided in the ",(0,s.jsx)(t.code,{children:".spec.kubeConfig"})," field in the specified namespace."]}),"\n",(0,s.jsx)(t.h3,{id:"field-description",children:"Field description"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default value"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"namespace"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Represent the namespace to install Chaos Mesh components in the remote cluster"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"chaos-mesh"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"version"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The version of Chaos Mesh to install in the remote cluster"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"2.6.1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"kubeConfig.secretRef.name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The name of the secret, which is used to store the kubeconfig of remote cluster. This kubeconfig will be used to install chaos-mesh components and inject errors"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"remote-chaos-mesh.kubeconfig"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"kubeConfig.secretRef.namespace"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The name of the kubeconfig secret."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"default"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"kubeConfig.secretRef.key"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The key of the kubeconfig in the secret."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"kubeconfig"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"configOverride"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Passing helm values during install or upgrade"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'{"dashboard":{"create":true}}'})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"inject-errors-in-the-remote-cluster",children:"Inject errors in the remote cluster"}),"\n",(0,s.jsxs)(t.p,{children:["To inject the errors to a remote cluster using the registered ",(0,s.jsx)(t.code,{children:"RemoteCluster"}),", you could use the ",(0,s.jsx)(t.code,{children:"remoteCluster"})," field in the ",(0,s.jsx)(t.code,{children:".spec"})," of every chaos types. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: burn-cpu\nspec:\n  remoteCluster: cluster-xxxxxxx\n  mode: one\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  stressors:\n    cpu:\n      workers: 1\n      load: 100\n      options: ['--cpu 2', '--timeout 600', '--hdd 1']\n  duration: '30s'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The Chaos Mesh will inject the errors to the remote cluster using the kubeconfig registered with the ",(0,s.jsx)(t.code,{children:"RemoteCluster"})," named ",(0,s.jsx)(t.code,{children:"cluster-xxxxxxx"}),". The corresponding ",(0,s.jsx)(t.code,{children:"StressChaos"})," will be automatically created in the remote cluster, and the status is synchronized back to the current cluster, so that you can manage the chaos injection for multiple different clusters in a single kubernetes."]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7463:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(50959);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);