"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9791],{91573:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"remote-cluster-management","title":"\u8fdc\u7a0b\u96c6\u7fa4\u7ba1\u7406","description":"\u8fdc\u7a0b\u96c6\u7fa4\u4ecb\u7ecd","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.7.0/remote-cluster-management.md","sourceDirName":".","slug":"/remote-cluster-management","permalink":"/zh/docs/remote-cluster-management","draft":false,"unlisted":false,"editUrl":"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.7.0/remote-cluster-management.md","tags":[],"version":"2.7.0","frontMatter":{"title":"\u8fdc\u7a0b\u96c6\u7fa4\u7ba1\u7406"},"sidebar":"docs","previous":{"title":"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4","permalink":"/zh/docs/configure-enabled-namespace"},"next":{"title":"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4","permalink":"/zh/docs/define-chaos-experiment-scope"}}');var r=n(86070),c=n(8637);const d={title:"\u8fdc\u7a0b\u96c6\u7fa4\u7ba1\u7406"},i=void 0,h={},o=[{value:"\u8fdc\u7a0b\u96c6\u7fa4\u4ecb\u7ecd",id:"\u8fdc\u7a0b\u96c6\u7fa4\u4ecb\u7ecd",level:2},{value:"\u6ce8\u518c\u8fdc\u7a0b\u96c6\u7fa4",id:"\u6ce8\u518c\u8fdc\u7a0b\u96c6\u7fa4",level:2},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u6ce8\u5165\u6545\u969c",id:"\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u6ce8\u5165\u6545\u969c",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"\u8fdc\u7a0b\u96c6\u7fa4\u4ecb\u7ecd",children:"\u8fdc\u7a0b\u96c6\u7fa4\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(s.p,{children:["Chaos Mesh \u63d0\u4f9b\u96c6\u7fa4\u8303\u56f4\u7684 ",(0,r.jsx)(s.code,{children:"RemoteCluster"})," \u8d44\u6e90\uff0c\u5e2e\u52a9\u60a8\u7ba1\u7406\u6545\u969c\u5e76\u5c06\u6545\u969c\u6ce8\u5165\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\u3002\u672c\u6587\u6863\u63cf\u8ff0\u4e86\u5982\u4f55\u521b\u5efa ",(0,r.jsx)(s.code,{children:"RemoteCluster"})," \u5bf9\u8c61\u5e76\u4f7f\u7528\u5b83\u6765\u6ce8\u5165\u6545\u969c\u3002"]}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"RemoteCluster"})," \u5c1a\u5904\u4e8e\u65e9\u671f\u9636\u6bb5\u3002\u5b83\u7684\u914d\u7f6e\u548c\u529f\u80fd\uff08\u4f8b\u5982\u914d\u7f6e\u8fc1\u79fb\u3001\u7248\u672c\u7ba1\u7406\u548c\u8ba4\u8bc1\uff09\u5c06\u4e0d\u65ad\u5b8c\u5584\u3002\u5982\u679c\u60a8\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u5728 ",(0,r.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"chaos-mesh/chaos-mesh"})," \u4e2d\u6253\u5f00\u4e00\u4e2a issue \u8fdb\u884c\u62a5\u544a\u3002"]})}),"\n",(0,r.jsx)(s.h2,{id:"\u6ce8\u518c\u8fdc\u7a0b\u96c6\u7fa4",children:"\u6ce8\u518c\u8fdc\u7a0b\u96c6\u7fa4"}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u5c06\u8fdc\u7a0b\u96c6\u7fa4\u6ce8\u518c\u5230\u5728\u5f53\u524d\u96c6\u7fa4\u4e0a\u5b89\u88c5\u7684 Chaos Mesh \u4e2d\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(s.code,{children:"RemoteCluster"})," \u8d44\u6e90\u3002\u521b\u5efa\u6b64\u8d44\u6e90\u540e\uff0c\u5fc5\u8981\u7684\u7ec4\u4ef6\u5c06\u81ea\u52a8\u5b89\u88c5\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u3002\u4ee5\u4e0b\u662f ",(0,r.jsx)(s.code,{children:"RemoteCluster"})," \u8d44\u6e90\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: RemoteCluster\nmetadata:\n  name: cluster-xxx\nspec:\n  namespace: chaos-mesh\n  version: 2.6.2\n  kubeConfig:\n    secretRef:\n      name: remote-chaos-mesh.kubeconfig\n      namespace: chaos-mesh\n      key: kubeconfig\n  # configOverride:\n  #   dashboard:\n  #     create: true\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5b83\u5c06\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:".spec.kubeConfig"})," \u5b57\u6bb5\u4e2d\u63d0\u4f9b\u7684 ",(0,r.jsx)(s.code,{children:"KUBECONFIG"})," \u5728\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u5b89\u88c5 ",(0,r.jsx)(s.code,{children:"chaos-mesh"}),"\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u5b57\u6bb5\u8bf4\u660e",children:"\u5b57\u6bb5\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(s.th,{children:"\u793a\u4f8b"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"namespace"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u5b89\u88c5 Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4"}),(0,r.jsx)(s.td,{children:"\u65e0"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"chaos-mesh"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"version"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u5b89\u88c5 Chaos Mesh \u7684\u7248\u672c"}),(0,r.jsx)(s.td,{children:"\u65e0"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"2.6.2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"kubeConfig.secretRef.name"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u5b58\u50a8\u8fdc\u7a0b\u96c6\u7fa4\u7684 kubeconfig \u7684 secret \u7684\u540d\u79f0\u3002\u8be5 kubeconfig \u5c06\u7528\u4e8e\u5b89\u88c5 chaos-mesh \u7ec4\u4ef6\u5e76\u6ce8\u5165\u6545\u969c"}),(0,r.jsx)(s.td,{children:"\u65e0"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"remote-chaos-mesh.kubeconfig"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"kubeConfig.secretRef.namespace"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"kubeconfig secret \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\u540d\u79f0\u3002"}),(0,r.jsx)(s.td,{children:"\u65e0"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"default"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"kubeConfig.secretRef.key"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"secret \u4e2d kubeconfig \u6240\u5728\u7684\u952e\u3002"}),(0,r.jsx)(s.td,{children:"\u65e0"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"kubeconfig"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"configOverride"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u671f\u95f4\u4f20\u9012\u7684 helm \u503c"}),(0,r.jsx)(s.td,{children:"\u65e0"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:'{"dashboard":{"create":true}}'})})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u6ce8\u5165\u6545\u969c",children:"\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u6ce8\u5165\u6545\u969c"}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u4f7f\u7528\u6ce8\u518c\u7684 ",(0,r.jsx)(s.code,{children:"RemoteCluster"})," \u5c06\u6545\u969c\u6ce8\u5165\u5230\u8fdc\u7a0b\u96c6\u7fa4\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6bcf\u79cd chaos \u7c7b\u578b\u7684 ",(0,r.jsx)(s.code,{children:".spec"})," \u4e2d\u7684 ",(0,r.jsx)(s.code,{children:"remoteCluster"})," \u5b57\u6bb5\u3002 \u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: burn-cpu\nspec:\n  remoteCluster: cluster-xxx\n  mode: one\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n  stressors:\n    cpu:\n      workers: 1\n      load: 100\n      options: ['--cpu 2', '--timeout 600', '--hdd 1']\n  duration: '30s'\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Chaos Mesh \u5c06\u4f7f\u7528\u6ce8\u518c\u5230\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"cluster-xxx"})," \u7684 ",(0,r.jsx)(s.code,{children:"RemoteCluster"})," \u7684 kubeconfig \u5c06\u6545\u969c\u6ce8\u5165\u5230\u8fdc\u7a0b\u96c6\u7fa4\u3002\u76f8\u5e94\u7684 ",(0,r.jsx)(s.code,{children:"StressChaos"})," \u5c06\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u81ea\u52a8\u521b\u5efa\uff0c\u5e76\u5c06\u72b6\u6001\u540c\u6b65\u56de\u5f53\u524d\u96c6\u7fa4\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5728\u5355\u4e2a kubernetes \u4e2d\u7ba1\u7406\u591a\u4e2a\u4e0d\u540c\u96c6\u7fa4\u7684\u6545\u969c\u6ce8\u5165\u3002"]})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8637:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var t=n(30758);const r={},c=t.createContext(r);function d(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);