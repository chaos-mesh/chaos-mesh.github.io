"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8993],{4356:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(11527),t=n(54881);const o={},r="Expose Chaos Dashboard with Ingress",i={id:"expose-dashboard-with-ingress",title:"Expose Chaos Dashboard with Ingress",description:"At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard.",source:"@site/versioned_docs/version-2.6.2/expose-dashboard-with-ingress.md",sourceDirName:".",slug:"/expose-dashboard-with-ingress",permalink:"/docs/expose-dashboard-with-ingress",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/expose-dashboard-with-ingress.md",tags:[],version:"2.6.2",frontMatter:{},sidebar:"docs",previous:{title:"Install Chaos Mesh Offline",permalink:"/docs/offline-installation"},next:{title:"Persistence Chaos Dashboard",permalink:"/docs/persistence-dashboard"}},h={},d=[];function c(e){const s={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"expose-chaos-dashboard-with-ingress",children:"Expose Chaos Dashboard with Ingress"}),"\n",(0,a.jsx)(s.p,{children:"At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard."}),"\n",(0,a.jsxs)(s.p,{children:["Below is an example of how to expose the Chaos Dashboard under the path ",(0,a.jsx)(s.code,{children:"/chaos-mesh"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-chaos-dashboard-under-subpath\n  namespace: chaos-mesh\n  annotations:\n    nginx.ingress.kubernetes.io/use-regex: 'true'\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\n    nginx.ingress.kubernetes.io/configuration-snippet: |\n      sub_filter '<head>' '<head> <base href=\"/chaos-mesh/\">';\nspec:\n  rules:\n    - http:\n        paths:\n          - path: /chaos-mesh/?(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: chaos-dashboard\n                port:\n                  number: 2333\n"})}),"\n",(0,a.jsxs)(s.p,{children:["You can also find this example in ",(0,a.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/dashboard/ingress-subpath.yaml",children:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/dashboard/ingress-subpath.yaml"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},54881:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var a=n(50959);const t={},o=a.createContext(t);function r(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);