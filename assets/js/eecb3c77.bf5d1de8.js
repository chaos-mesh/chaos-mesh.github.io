"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4762],{92085:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>i,frontMatter:()=>n,metadata:()=>h,toc:()=>l});var o=t(11527),a=t(88672);const n={title:"Upgrade from 2.1 to 2.2"},r=void 0,h={id:"upgrade-from-2.1-to-2.2",title:"Upgrade from 2.1 to 2.2",description:"There are several changes in Helm Charts 2.2.0 release. This documentation introduces how to migrate from 2.1.x to 2.2.0.",source:"@site/docs/upgrade-from-2.1-to-2.2.md",sourceDirName:".",slug:"/upgrade-from-2.1-to-2.2",permalink:"/docs/next/upgrade-from-2.1-to-2.2",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/upgrade-from-2.1-to-2.2.md",tags:[],version:"current",frontMatter:{title:"Upgrade from 2.1 to 2.2"},sidebar:"docs",previous:{title:"Upgrade to Chaos Mesh 2.0",permalink:"/docs/next/upgrade-to-2.0"},next:{title:"Chaos Mesh Release Cycle",permalink:"/docs/next/release-cycle"}},c={},l=[{value:"Upgrade with Helm",id:"upgrade-with-helm",level:2},{value:"Step 1: Add/Update Chaos Mesh Helm repository",id:"step-1-addupdate-chaos-mesh-helm-repository",level:3},{value:"Step 2: Migrate the <code>values.yaml</code> file",id:"step-2-migrate-the-valuesyaml-file",level:3},{value:"Step 3: Update the CRD",id:"step-3-update-the-crd",level:3},{value:"Step 4: Upgrade Chaos Mesh by <code>helm upgrade</code>",id:"step-4-upgrade-chaos-mesh-by-helm-upgrade",level:3},{value:"Ask the Community",id:"ask-the-community",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"There are several changes in Helm Charts 2.2.0 release. This documentation introduces how to migrate from 2.1.x to 2.2.0."}),"\n",(0,o.jsx)(s.h2,{id:"upgrade-with-helm",children:"Upgrade with Helm"}),"\n",(0,o.jsx)(s.h3,{id:"step-1-addupdate-chaos-mesh-helm-repository",children:"Step 1: Add/Update Chaos Mesh Helm repository"}),"\n",(0,o.jsx)(s.p,{children:"Add the Chaos Mesh repository to the Helm repository and update it:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"helm repo add chaos-mesh https://charts.chaos-mesh.org\nhelm repo update\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"step-2-migrate-the-valuesyaml-file",children:["Step 2: Migrate the ",(0,o.jsx)(s.code,{children:"values.yaml"})," file"]}),"\n",(0,o.jsxs)(s.p,{children:["If you installed Chaos Mesh with a certain ",(0,o.jsx)(s.code,{children:"values.yaml"}),", it is recommended to apply your customized configuration to the ",(0,o.jsx)(s.code,{children:"values.yaml"})," of Chaos Mesh 2.2.0."]}),"\n",(0,o.jsxs)(s.p,{children:["You can fetch the default ",(0,o.jsx)(s.code,{children:"values.yaml"})," by the following command:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"helm show values chaos-mesh/chaos-mesh --version 2.2.0 > values.yaml\n"})}),"\n",(0,o.jsx)(s.p,{children:"If you do not recognize the changed configurations, you might not rely on that specific feature, it is usually safe to ignore them."}),"\n",(0,o.jsx)(s.p,{children:"Here is a list of Helm Chart changes:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["new configuration: ",(0,o.jsx)(s.code,{children:"chaosDaemon.mtls.enabled"})," represents using mtls bwteen chaos-controller-manager and chaos-daemon."]}),"\n",(0,o.jsxs)(s.li,{children:["new configuration: ",(0,o.jsx)(s.code,{children:"webhook.caBundlePEM"})," represents the CA bundle used to serve the webhook server."]}),"\n",(0,o.jsxs)(s.li,{children:["value changed: ",(0,o.jsx)(s.code,{children:"dashboard.serviceAccount"})," changed from ",(0,o.jsx)(s.code,{children:"chaos-controller-manager"})," to ",(0,o.jsx)(s.code,{children:"chaos-dashboard"})]}),"\n",(0,o.jsxs)(s.li,{children:["value changed: ",(0,o.jsx)(s.code,{children:"webhook.FailurePolicy"})," changed from ",(0,o.jsx)(s.code,{children:"Ignore"})," to ",(0,o.jsx)(s.code,{children:"Fail"})]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["For more information about the detailed description, see ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/v2.2.0/helm/chaos-mesh/README.md",children:"README"}),"."]})}),"\n",(0,o.jsx)(s.h3,{id:"step-3-update-the-crd",children:"Step 3: Update the CRD"}),"\n",(0,o.jsxs)(s.p,{children:["For ",(0,o.jsx)(s.code,{children:"Kubernetes >= 1.16"}),", you can apply the latest CRD by executing the following command:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd.yaml\n"})}),"\n",(0,o.jsxs)(s.p,{children:["For ",(0,o.jsx)(s.code,{children:"Kubernetes <= 1.15"}),", you can apply the latest CRD by executing the following command:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd-v1beta1.yaml\n"})}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsx)(s.p,{children:"Chaos Mesh 2.2.x would be the last series of releases that support Kubernetes < 1.19."})}),"\n",(0,o.jsxs)(s.h3,{id:"step-4-upgrade-chaos-mesh-by-helm-upgrade",children:["Step 4: Upgrade Chaos Mesh by ",(0,o.jsx)(s.code,{children:"helm upgrade"})]}),"\n",(0,o.jsx)(s.p,{children:"Then you can execute the following command to upgrade Chaos Mesh to the 2.2.0:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"helm upgrade <release-name> chaos-mesh/chaos-mesh --namespace=<namespace> --version=2.2.0 <--other-required-flags>\n"})}),"\n",(0,o.jsx)(s.h2,{id:"ask-the-community",children:"Ask the Community"}),"\n",(0,o.jsxs)(s.p,{children:["If you have any questions about upgrading Chaos Mesh, feel free to contact us at ",(0,o.jsx)(s.a,{href:"https://cloud-native.slack.com/archives/C0193VAV272",children:"Slack Channel"}),", GitHub ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues/new?assignees=&labels=&template=question.md",children:"Issues"})," and ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/discussions/new",children:"Discussions"}),"."]})]})}function i(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},88672:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>r});var o=t(50959);const a={},n=o.createContext(a);function r(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);