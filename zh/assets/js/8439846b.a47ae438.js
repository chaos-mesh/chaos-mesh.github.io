"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[336],{69565:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var o=s(11527),t=s(7463);const c={title:"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"},r=void 0,l={id:"check-workflow-status",title:"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",description:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/check-workflow-status.md",sourceDirName:".",slug:"/check-workflow-status",permalink:"/zh/docs/next/check-workflow-status",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/check-workflow-status.md",tags:[],version:"current",frontMatter:{title:"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"},sidebar:"docs",previous:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42",permalink:"/zh/docs/next/send-http-request-on-workflow"},next:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5",permalink:"/zh/docs/next/status-check-in-workflow"}},a={},d=[{value:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",level:2},{value:"\u901a\u8fc7 <code>kubectl</code> \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",id:"\u901a\u8fc7-kubectl-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",level:2}];function i(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",children:"\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u5728 Chaos Dashboard \u4e2d\u5217\u51fa\u6240\u6709\u7684\u5de5\u4f5c\u6d41\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"List Workflows On Dashboard",src:s(45907).Z+"",width:"2367",height:"810"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u9009\u62e9\u4f60\u60f3\u8981\u68c0\u67e5\u7684\u5de5\u4f5c\u6d41\uff0c\u67e5\u770b\u5de5\u4f5c\u6d41\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Workflow Status On Dashboard",src:s(82550).Z+"",width:"2312",height:"1848"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"\u901a\u8fc7-kubectl-\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001",children:["\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"kubectl"})," \u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u83b7\u53d6\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u4e2d\u5df2\u7ecf\u521b\u5efa\u7684\u5de5\u4f5c\u6d41\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl -n <namespace> get workflow\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u6839\u636e\u4e0a\u4e00\u6b65\u8f93\u51fa\u7684\u5de5\u4f5c\u6d41\u5217\u8868\uff0c\u9009\u62e9\u60f3\u67e5\u770b\u7684\u5de5\u4f5c\u6d41\u5e76\u5728\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u6307\u5b9a\u5176\u540d\u79f0\u3002\u6267\u884c\u547d\u4ee4\u4ee5\u83b7\u53d6\u8be5\u5de5\u4f5c\u6d41\u4e0b\u7684\u6240\u6709 WorkflowNode\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"\n'})}),"\n",(0,o.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,o.jsx)(n.p,{children:"\u5de5\u4f5c\u6d41\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u6b65\u9aa4\u4f1a\u4ee5 WorkflowNode \u8fd9\u4e00 CustomResource \u6765\u8868\u793a\u3002"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u83b7\u53d6\u6307\u5b9a WorkflowNode \u7684\u8be6\u7ec6\u72b6\u6001\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl -n <namespace> describe workflownode <workflow-node-name>\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u5185\u5bb9\u5305\u62ec\u5f53\u524d\u8282\u70b9\u662f\u5426\u6267\u884c\u5b8c\u6210\u3001\u5e76\u884c/\u4e32\u884c\u8282\u70b9\u7684\u6267\u884c\u72b6\u6001\u3001\u5bf9\u5e94\u7684 Chaos \u5b9e\u9a8c\u5bf9\u8c61\u7b49\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},45907:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/list-workflow-on-dashboard-6512db7bb9dcad835debe7ac46c59271.png"},82550:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/workflow-status-on-dashboard-f011da2c525de53e2d9e8fb409a003ea.png"},7463:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var o=s(50959);const t={},c=o.createContext(t);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);