"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1199],{77864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var o=n(86070),i=n(6383);const s={title:"GCP OAuth Authentication"},a=void 0,c={id:"gcp-authentication",title:"GCP OAuth Authentication",description:"When Chaos Mesh is deployed on the Google Cloud Platform, you can log in to Chaos Dashboard through Google OAuth. This document describes how to enable and configure this function.",source:"@site/docs/gcp-authentication.md",sourceDirName:".",slug:"/gcp-authentication",permalink:"/docs/next/gcp-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/gcp-authentication.md",tags:[],version:"current",frontMatter:{title:"GCP OAuth Authentication"},sidebar:"docs",previous:{title:"Search and Recover Experiments of Chaosd",permalink:"/docs/next/chaosd-search-recover"},next:{title:"Integrate Chaos Mesh to GitHub Actions",permalink:"/docs/next/integrate-chaos-mesh-into-github-actions"}},r={},h=[{value:"Create OAuth Client",id:"create-oauth-client",level:2},{value:"Configure and Start Chaos Mesh",id:"configure-and-start-chaos-mesh",level:2},{value:"Login with Google",id:"login-with-google",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"When Chaos Mesh is deployed on the Google Cloud Platform, you can log in to Chaos Dashboard through Google OAuth. This document describes how to enable and configure this function."}),"\n",(0,o.jsx)(t.h2,{id:"create-oauth-client",children:"Create OAuth Client"}),"\n",(0,o.jsxs)(t.p,{children:["Create GCP OAuth client and get the Client ID and Client Secret according to ",(0,o.jsx)(t.a,{href:"https://support.google.com/cloud/answer/6158849?hl=en",children:"Setting up OAuth 2.0"}),"."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Go to the ",(0,o.jsx)(t.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Platform Console"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"From the projects list, select a project or create a new one."}),"\n",(0,o.jsx)(t.li,{children:'If the APIs & services page was not loaded automatically, open the console left side menu and select "APIs & services" manually.'}),"\n",(0,o.jsx)(t.li,{children:'Click "Credentials" on the left.'}),"\n",(0,o.jsx)(t.li,{children:'Click "Create Credentials", then select "OAuth client ID".'}),"\n",(0,o.jsxs)(t.li,{children:['Select "Web Application" as the application type, and enter additional information and the redirect URL of Chaos dashboard, which is ',(0,o.jsx)(t.code,{children:"ROOT_URL/api/auth/gcp/callback"}),". In this part, ",(0,o.jsx)(t.code,{children:"ROOT_URL"})," is the root URL of Chaos dashboard, like ",(0,o.jsx)(t.code,{children:"http://localhost:2333"}),". This URL can be set through the configuration item ",(0,o.jsx)(t.code,{children:"dashboard.rootUrl"})," by ",(0,o.jsx)(t.code,{children:"helm"}),"."]}),"\n",(0,o.jsx)(t.li,{children:'Click "Create".'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"After creating the client, remember to save the Client ID and Client Secret for the following steps."}),"\n",(0,o.jsx)(t.h2,{id:"configure-and-start-chaos-mesh",children:"Configure and Start Chaos Mesh"}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Update: Since ",(0,o.jsx)(t.code,{children:"v2.7.0"}),", you can provide a ",(0,o.jsx)(t.strong,{children:"Secret"})," to store the Client ID and Client Secret. ",(0,o.jsx)(t.strong,{children:"We recommend you to use this method"}),"."]}),(0,o.jsx)(t.p,{children:"This change is to avoid exposing the Client ID and Client Secret to the public. In the previous versions, the Client ID and Client Secret are specified in the values directly, which is not safe in general."}),(0,o.jsxs)(t.p,{children:["For more information, see ",(0,o.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues/4206",children:"https://github.com/chaos-mesh/chaos-mesh/issues/4206"}),"."]})]}),"\n",(0,o.jsx)(t.p,{children:"To enable the function, you need to set the configuration items in helm charts as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"dashboard:\n  rootUrl: http://localhost:2333\n  gcpSecurityMode:\n    enabled: true\n    # Old configuration items for compatibility.\n    clientId: ''\n    clientSecret: ''\n    # References existing Kubernetes secret containing `GCP_CLIENT_ID` and `GCP_CLIENT_SECRET`.\n    existingSecret: ''\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If Chaos Mesh has been installed, you can update the configuration items through ",(0,o.jsx)(t.code,{children:"helm upgrade"}),". If not, you can install Chaos Mesh through ",(0,o.jsx)(t.code,{children:"helm install"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"login-with-google",children:"Login with Google"}),"\n",(0,o.jsx)(t.p,{children:"Open Chaos Dashboard, and click the Google icon under the authentication window."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(85195).A+"",width:"640",height:"855"})}),"\n",(0,o.jsx)(t.p,{children:"After logging in to the Google account and being granted permission to OAuth Client, the page automatically redirects to Chaos Dashboard with logged-in status. At this time, you have the same permissions as the google account in this cluster. If you need to add other permissions, you can edit the permission through the RBAC (Role-based access control). For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: chaos-mesh-cluster-manager\nrules:\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-manager-binding\n  namespace: chaos-mesh\nsubjects:\n  - kind: User\n    name: example@gmail.com\nroleRef:\n  kind: ClusterRole\n  name: chaos-mesh-cluster-manager\n  apiGroup: rbac.authorization.k8s.io\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By setting this configuration, the user ",(0,o.jsx)(t.code,{children:"example@gmail.com"})," is enabled to see or create any chaos experiments."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},85195:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/google-auth-44ea9b662b5a11c6e148a1f5f6983c69.png"},6383:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(30758);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);