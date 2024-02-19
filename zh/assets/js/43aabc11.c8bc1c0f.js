"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[648],{21827:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var t=n(11527),a=n(45305);const o={},r="Expose Chaos Dashboard with Ingress",h={id:"expose-dashboard-with-ingress",title:"Expose Chaos Dashboard with Ingress",description:"At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard.",source:"@site/docs/expose-dashboard-with-ingress.md",sourceDirName:".",slug:"/expose-dashboard-with-ingress",permalink:"/zh/docs/next/expose-dashboard-with-ingress",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/expose-dashboard-with-ingress.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/docs/next/offline-installation"},next:{title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e",permalink:"/zh/docs/next/persistence-dashboard"}},i={},c=[];function d(e){const s={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"expose-chaos-dashboard-with-ingress",children:"Expose Chaos Dashboard with Ingress"}),"\n",(0,t.jsx)(s.p,{children:"At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard."}),"\n",(0,t.jsxs)(s.p,{children:["Below is an example of how to expose the Chaos Dashboard under the path ",(0,t.jsx)(s.code,{children:"/chaos-mesh"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-chaos-dashboard-under-subpath\n  namespace: chaos-mesh\n  annotations:\n    nginx.ingress.kubernetes.io/use-regex: 'true'\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\n    nginx.ingress.kubernetes.io/configuration-snippet: |\n      sub_filter '<head>' '<head> <base href=\"/chaos-mesh/\">';\nspec:\n  rules:\n    - http:\n        paths:\n          - path: /chaos-mesh/?(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: chaos-dashboard\n                port:\n                  number: 2333\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also find this example in ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/dashboard/ingress-subpath.yaml",children:"https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/dashboard/ingress-subpath.yaml"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},45305:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>r});var t=n(50959);const a={},o=t.createContext(a);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);