"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5210],{6165:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(11527),o=s(7463);const i={title:"GCP OAuth \u9a8c\u8bc1"},a=void 0,c={id:"gcp-authentication",title:"GCP OAuth \u9a8c\u8bc1",description:"\u5982\u679c Chaos Mesh \u96c6\u7fa4\u90e8\u7f72\u4e8e Google Cloud Platform\uff0c\u7528\u6237\u5c06\u80fd\u591f\u901a\u8fc7 Google OAuth \u9a8c\u8bc1\u767b\u5165 Chaos Dashboard\u3002\u672c\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u548c\u542f\u7528\u8fd9\u9879\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/gcp-authentication.md",sourceDirName:".",slug:"/gcp-authentication",permalink:"/zh/docs/2.5.2/gcp-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/gcp-authentication.md",tags:[],version:"2.5.2",frontMatter:{title:"GCP OAuth \u9a8c\u8bc1"},sidebar:"docs",previous:{title:"\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c",permalink:"/zh/docs/2.5.2/chaosd-search-recover"},next:{title:"\u96c6\u6210 Chaos Mesh \u5230 GitHub Actions",permalink:"/zh/docs/2.5.2/integrate-chaos-mesh-into-github-actions"}},r={},l=[{value:"\u521b\u5efa OAuth Client",id:"\u521b\u5efa-oauth-client",level:2},{value:"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8 Chaos Mesh",id:"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8-chaos-mesh",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5982\u679c Chaos Mesh \u96c6\u7fa4\u90e8\u7f72\u4e8e Google Cloud Platform\uff0c\u7528\u6237\u5c06\u80fd\u591f\u901a\u8fc7 Google OAuth \u9a8c\u8bc1\u767b\u5165 Chaos Dashboard\u3002\u672c\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u548c\u542f\u7528\u8fd9\u9879\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efa-oauth-client",children:"\u521b\u5efa OAuth Client"}),"\n",(0,t.jsxs)(n.p,{children:["\u6839\u636e ",(0,t.jsx)(n.a,{href:"https://support.google.com/cloud/answer/6158849?hl=en",children:"Setting up OAuth 2.0"})," \u521b\u5efa\u7528\u4e8e\u63a5\u5165 GCP \u7684 OAuth 2.0 \u5ba2\u6237\u7aef\uff0c\u5e76\u83b7\u5f97 Client ID \u4e0e Client Secret\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8fdb\u5165 ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Platform \u63a7\u5236\u53f0"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u6ca1\u6709\u81ea\u52a8\u6253\u5f00 APIs & services \u9875\u9762\uff0c\u8bf7\u5728\u63a7\u5236\u53f0\u7684\u5de6\u4fa7\u83dc\u5355\u4e2d\u624b\u52a8\u9009\u62e9 APIs & services\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u70b9\u51fb\u4f4d\u4e8e\u5de6\u4fa7\u7684 Credentials\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u70b9\u51fb Create Credentials\uff0c\u5e76\u9009\u62e9 OAuth client ID\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5e94\u7528\u7c7b\u578b\u9009\u62e9 Web Application\uff0c\u586b\u5165\u5408\u9002\u7684\u540d\u79f0\u4ee5\u53ca Chaos Dashboard \u5bf9\u5e94\u7684 redirect urls\u3002Chaos Dashboard \u7684 redirect urls \u5c06\u4f4d\u4e8e ",(0,t.jsx)(n.code,{children:"ROOT_URL/api/auth/gcp/callback"}),"\uff0c\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"ROOT_URL"})," \u662f dashboard \u7684\u6839\u5730\u5740\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"http://localhost:2333"}),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"helm"})," \u7684 ",(0,t.jsx)(n.code,{children:"dashboard.rootUrl"})," \u914d\u7f6e\u9879\u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u70b9\u51fb\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5b8c\u6210\u521b\u5efa\u540e\uff0c\u5373\u53ef\u83b7\u5f97\u8be5\u5ba2\u6237\u7aef\u7684 Client ID \u4e0e Client Secret\uff0c\u8bf7\u4fdd\u5b58\u8fd9\u4e24\u9879\u5185\u5bb9\uff0c\u4f9b\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8-chaos-mesh",children:"\u586b\u5199\u914d\u7f6e\u5e76\u542f\u52a8 Chaos Mesh"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u542f\u52a8\u8fd9\u9879\u529f\u80fd\uff0c\u9700\u8981\u6253\u5f00 Chaos Mesh \u7684 helm charts \uff0c\u8bbe\u7f6e\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dashboard.gcpSecurityMode"})," \u9700\u8981\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dashboard.gcpClientId"})," \u9700\u8981\u8bbe\u7f6e\u4e3a\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u83b7\u5f97\u7684 Client ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dashboard.gcpClientSecret"})," \u9700\u8981\u8bbe\u7f6e\u4e3a\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u83b7\u5f97\u7684 Client Secret"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dashboard.rootUrl"})," \u9700\u8981\u8bbe\u7f6e\u4e3a Chaos Dashboard \u7684\u6839\u5730\u5740"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u5e76\u8fd0\u884c\u4e86 Chaos Mesh\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"helm upgrade"})," \u547d\u4ee4\u6765\u66f4\u65b0\u914d\u7f6e\uff1b\u5982\u679c\u8fd8\u672a\u5b89\u88c5 Chaos Mesh\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"helm install"})," \u8fdb\u884c\u5b89\u88c5\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u6253\u5f00 Chaos Dashboard\uff0c\u70b9\u51fb\u9a8c\u8bc1\u7a97\u53e3\u4e0b\u65b9\u7684 Google \u56fe\u6807\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(55577).Z+"",width:"640",height:"855"})}),"\n",(0,t.jsx)(n.p,{children:"\u767b\u5165 Google \u8d26\u53f7\u5e76\u6388\u4e88 OAuth Client \u6743\u9650\u540e\uff0c\u9875\u9762\u4f1a\u81ea\u52a8\u8df3\u8f6c\u81f3 Chaos Dashboard\uff0c\u5e76\u63d0\u793a\u7528\u6237\u5df2\u767b\u5f55\u3002\u6b64\u65f6\uff0c\u7528\u6237\u7684\u6743\u9650\u4e0e\u8be5 Google \u8d26\u6237\u5728\u96c6\u7fa4\u4e2d\u7684\u6743\u9650\u4e00\u81f4\u3002\u5982\u9700\u8bbe\u7f6e\u989d\u5916\u7684\u7528\u6237\u6743\u9650\uff0c\u53ef\u4ee5\u4f7f\u7528 RBAC \u7684\u65b9\u5f0f\u6765\u8d4b\u4e88\u5176\u5bf9\u5e94\u6743\u9650\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: chaos-mesh-cluster-manager\nrules:\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-manager-binding\n  namespace: chaos-mesh\nsubjects:\n  - kind: User\n    name: example@gmail.com\nroleRef:\n  kind: ClusterRole\n  name: chaos-mesh-cluster-manager\n  apiGroup: rbac.authorization.k8s.io\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e00\u914d\u7f6e\u4e3a\u7528\u6237 ",(0,t.jsx)(n.code,{children:"example@gmail.com"})," \u8d4b\u4e88\u4e86\u6d4f\u89c8\u6216\u521b\u5efa\u6240\u6709\u7c7b\u578b\u6df7\u6c8c\u5b9e\u9a8c\u7684\u6743\u9650\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},55577:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/google-auth-44ea9b662b5a11c6e148a1f5f6983c69.png"},7463:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var t=s(50959);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);