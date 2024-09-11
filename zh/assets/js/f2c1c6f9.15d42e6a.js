"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8447],{46522:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var l=s(86070),r=s(6383);const o={title:"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c"},a=void 0,d={id:"run-serial-or-parallel-experiments",title:"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",description:"Chaos Mesh \u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86\u4e32\u884c\u4e0e\u5e76\u884c\u4e24\u79cd\u5b9e\u9a8c\u7f16\u6392\u65b9\u5f0f\u3002\u4f60\u53ef\u4ee5\u4f9d\u636e\u5b9e\u9a8c\u9700\u6c42\uff0c\u7f16\u6392\u8c03\u5ea6\u591a\u4e2a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/run-serial-or-parallel-experiments.md",sourceDirName:".",slug:"/run-serial-or-parallel-experiments",permalink:"/zh/docs/2.5.2/run-serial-or-parallel-experiments",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/run-serial-or-parallel-experiments.md",tags:[],version:"2.5.2",frontMatter:{title:"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c"},sidebar:"docs",previous:{title:"\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41",permalink:"/zh/docs/2.5.2/create-chaos-mesh-workflow"},next:{title:"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42",permalink:"/zh/docs/2.5.2/send-http-request-on-workflow"}},t={},c=[{value:"\u4e32\u884c\u8fd0\u884c\u5b9e\u9a8c",id:"\u4e32\u884c\u8fd0\u884c\u5b9e\u9a8c",level:2},{value:"\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",id:"\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",level:2},{value:"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa\u4e32\u884c\u6216\u5e76\u884c\u8282\u70b9\u7684\u5de5\u4f5c\u6d41",id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa\u4e32\u884c\u6216\u5e76\u884c\u8282\u70b9\u7684\u5de5\u4f5c\u6d41",level:2},{value:"\u521b\u5efa\u4e32\u884c\u8282\u70b9",id:"\u521b\u5efa\u4e32\u884c\u8282\u70b9",level:3},{value:"\u521b\u5efa\u5e76\u884c\u8282\u70b9",id:"\u521b\u5efa\u5e76\u884c\u8282\u70b9",level:3},{value:"\u5d4c\u5957\u4e32\u884c\u8282\u70b9\u4e0e\u5e76\u884c\u8282\u70b9",id:"\u5d4c\u5957\u4e32\u884c\u8282\u70b9\u4e0e\u5e76\u884c\u8282\u70b9",level:3}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Chaos Mesh \u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86\u4e32\u884c\u4e0e\u5e76\u884c\u4e24\u79cd\u5b9e\u9a8c\u7f16\u6392\u65b9\u5f0f\u3002\u4f60\u53ef\u4ee5\u4f9d\u636e\u5b9e\u9a8c\u9700\u6c42\uff0c\u7f16\u6392\u8c03\u5ea6\u591a\u4e2a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4f60\u60f3\u8981\u6309\u7167\u987a\u5e8f\u8fdb\u884c\u591a\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e32\u884c\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4f60\u60f3\u8981\u540c\u65f6\u8fdb\u884c\u591a\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e76\u884c\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u8bbe\u8ba1\u4e32\u884c\u8282\u70b9\u4e0e\u5e76\u884c\u8282\u70b9\u65f6\u4f7f\u7528\u4e86",(0,l.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Composite_pattern",children:"\u7ec4\u5408\u6a21\u5f0f"}),"\uff0c\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u4efb\u610f\u7c7b\u578b\u7684\u8282\u70b9\uff0c\u5e76\u4ee5\u7279\u5b9a\u7684\u6a21\u5f0f\u6267\u884c\u8fd9\u4e9b\u88ab\u7ec4\u5408\u7684\u8282\u70b9\u3002\u8fd9\u4e5f\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5d4c\u5957\u7ec4\u5408\u4e32\u884c\u4e0e\u5e76\u884c\u8282\u70b9\u6765\u5b9e\u73b0\u590d\u6742\u7684\u8c03\u5ea6\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4e32\u884c\u8fd0\u884c\u5b9e\u9a8c",children:"\u4e32\u884c\u8fd0\u884c\u5b9e\u9a8c"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u5de5\u4f5c\u6d41\u4e2d\u521b\u5efa ",(0,l.jsx)(n.code,{children:"templates"})," \u65f6\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"templateType: Serial"})," \u4fbf\u53ef\u4ee5\u58f0\u660e\u4e00\u4e2a\u4e32\u884c\u8282\u70b9\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e32\u884c\u8282\u70b9\u4e2d\u53e6\u4e00\u4e2a\u5fc5\u9700\u7684\u5b57\u6bb5\u4e3a ",(0,l.jsx)(n.code,{children:"children"}),"\uff0c\u7c7b\u578b\u4e3a ",(0,l.jsx)(n.code,{children:"[]string"})," \uff0c\u503c\u4e3a\u4e32\u884c\u6267\u884c\u7684\u5176\u4ed6 ",(0,l.jsx)(n.code,{children:"template"})," \u540d\u79f0\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-serial\nspec:\n  entry: serial-of-3-node\n  templates:\n    - name: serial-of-3-node\n      templateType: Serial\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - suspending\n        - workflow-network-chaos\n    - name: suspending\n      templateType: Suspend\n      deadline: 10s\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u58f0\u660e\u4e86\u4e00\u4e2a\u4e32\u884c\u8282\u70b9\uff0c\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"serial-of-3-node"}),"\uff0c\u5c06\u6309\u7167\u987a\u5e8f\u6267\u884c ",(0,l.jsx)(n.code,{children:"workflow-stress-chaos"}),"\uff0c",(0,l.jsx)(n.code,{children:"suspending"})," \u4e0e ",(0,l.jsx)(n.code,{children:"workflow-network-chaos"}),"\u3002\u5f85\u6240\u6709\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u4e32\u884c\u8282\u70b9\u88ab\u6807\u8bb0\u4e3a\u5b8c\u6210\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e32\u884c\u8282\u70b9\u6267\u884c\u65f6\uff0c\u4f1a\u4f9d\u6b21\u6267\u884c ",(0,l.jsx)(n.code,{children:"children"})," \u4e2d\u58f0\u660e\u7684\u4efb\u52a1\uff0c\u4fdd\u6301\u540c\u4e00\u65f6\u95f4\u70b9\u53ea\u6709\u4e00\u4e2a\u4efb\u52a1\u5728\u6267\u884c\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e32\u884c\u8282\u70b9\u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"deadline"})," \u4e3a\u53ef\u9009\u5b57\u6bb5\uff0c\u76ee\u7684\u662f\u9650\u5236\u6574\u4e2a\u4e32\u884c\u6d41\u7a0b\u7684\u6700\u957f\u6267\u884c\u65f6\u95f4\u3002\u82e5\u8fbe\u5230\u4e86\u8fd9\u4e2a\u65f6\u95f4\uff0c\u5176\u4e0b\u5c5e\u7684\u5b50\u8282\u70b9\u5c06\u4f1a\u88ab\u505c\u6b62\uff0c\u672a\u6267\u884c\u7684\u8282\u70b9\u4e5f\u4e0d\u4f1a\u518d\u6267\u884c\u3002\u82e5\u6240\u6709\u5b50\u8282\u70b9\u5148\u4e8e ",(0,l.jsx)(n.code,{children:"deadline"})," \u5b8c\u6210\u4e86\u884c\u4e3a\uff0c\u4e32\u884c\u8282\u70b9\u4f1a\u7acb\u523b\u88ab\u6807\u8bb0\u4e3a\u5b8c\u6210\uff0c",(0,l.jsx)(n.code,{children:"deadline"})," \u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c",children:"\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u5de5\u4f5c\u6d41\u4e2d\u521b\u5efa ",(0,l.jsx)(n.code,{children:"templates"})," \u65f6\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"templateType: Parallel"})," \u4fbf\u53ef\u4ee5\u58f0\u660e\u4e00\u4e2a\u5e76\u884c\u8282\u70b9\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5e76\u884c\u8282\u70b9\u4e2d\u53e6\u4e00\u4e2a\u5fc5\u9700\u7684\u5b57\u6bb5\u4e3a ",(0,l.jsx)(n.code,{children:"children"}),"\uff0c\u7c7b\u578b\u4e3a ",(0,l.jsx)(n.code,{children:"[]string"}),"\uff0c\u503c\u4e3a\u5e76\u884c\u6267\u884c\u7684\u5176\u4ed6 ",(0,l.jsx)(n.code,{children:"template"})," \u540d\u79f0\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: parallel-of-2-chaos\n  templates:\n    - name: parallel-of-2-chaos\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u58f0\u660e\u4e86\u4e00\u4e2a\u5e76\u884c\u8282\u70b9\uff0c\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"parallel-of-2-chaos"}),"\uff0c\u5c06\u540c\u65f6\u6267\u884c ",(0,l.jsx)(n.code,{children:"workflow-stress-chaos"})," \u4e0e ",(0,l.jsx)(n.code,{children:"workflow-network-chaos"}),"\u3002\u5f85\u6240\u6709\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5e76\u884c\u8282\u70b9\u88ab\u6807\u8bb0\u4e3a\u5b8c\u6210\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5e76\u884c\u8282\u70b9\u6267\u884c\u65f6\uff0c\u4f1a\u540c\u65f6\u6267\u884c ",(0,l.jsx)(n.code,{children:"children"})," \u4e2d\u6240\u6709\u58f0\u660e\u7684\u4efb\u52a1\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5e76\u884c\u8282\u70b9\u540c\u6837\u5b58\u5728 ",(0,l.jsx)(n.code,{children:"deadline"})," \u53ef\u9009\u5b57\u6bb5\uff0c\u7c7b\u4f3c\u4e8e\u4e32\u884c\u8282\u70b9\uff0c\u76ee\u7684\u662f\u9650\u5236\u6574\u4e2a\u5e76\u884c\u6d41\u7a0b\u7684\u6700\u957f\u6267\u884c\u65f6\u95f4\u3002\u82e5\u8fbe\u5230\u4e86\u8fd9\u4e2a\u65f6\u95f4\uff0c\u5176\u4e0b\u5c5e\u7684\u5b50\u8282\u70b9\u5c06\u4f1a\u88ab\u505c\u6b62\u3002\u82e5\u6240\u6709\u5b50\u8282\u70b9\u5148\u4e8e ",(0,l.jsx)(n.code,{children:"deadline"})," \u5b8c\u6210\u4e86\u884c\u4e3a\uff0c\u5e76\u884c\u8282\u70b9\u4f1a\u7acb\u523b\u88ab\u6807\u8bb0\u4e3a\u5b8c\u6210\uff0c",(0,l.jsx)(n.code,{children:"deadline"})," \u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u901a\u8fc7-chaos-dashboard-\u521b\u5efa\u4e32\u884c\u6216\u5e76\u884c\u8282\u70b9\u7684\u5de5\u4f5c\u6d41",children:"\u901a\u8fc7 Chaos Dashboard \u521b\u5efa\u4e32\u884c\u6216\u5e76\u884c\u8282\u70b9\u7684\u5de5\u4f5c\u6d41"}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u4e32\u884c\u8282\u70b9",children:"\u521b\u5efa\u4e32\u884c\u8282\u70b9"}),"\n",(0,l.jsxs)(n.p,{children:["Chaos Dashboard \u4f1a\u521b\u5efa\u4e00\u4e2a\u9884\u5b9a\u4e49\u7684\u4e32\u884c\u8282\u70b9\uff0c\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"entry"}),"\u3002\u56e0\u6b64\uff0c\u5f53\u5728 Chaos Dashboard \u4e2d\u521b\u5efa\u4e32\u884c\u8282\u70b9\u7684\u5de5\u4f5c\u6d41\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u5728 ",(0,l.jsx)(n.code,{children:"entry"})," \u4e0b\u521b\u5efa\u6d41\u7a0b\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Create Serial Node On Dashboard",src:s(9364).A+"",width:"2342",height:"1553"})}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u5e76\u884c\u8282\u70b9",children:"\u521b\u5efa\u5e76\u884c\u8282\u70b9"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728 Chaos Dashboard \u4e2d\u521b\u5efa\u4e00\u4e2a\u5e76\u884c\u8282\u70b9 ",(0,l.jsx)(n.code,{children:"Parallel"}),"\uff0c\u7136\u540e\u5728\u8be5\u8282\u70b9\u4e0b\u521b\u5efa\u5b50\u8282\u70b9\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Create Parallel Node on Dashboard",src:s(19945).A+"",width:"2342",height:"1553"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5d4c\u5957\u4e32\u884c\u8282\u70b9\u4e0e\u5e76\u884c\u8282\u70b9",children:"\u5d4c\u5957\u4e32\u884c\u8282\u70b9\u4e0e\u5e76\u884c\u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5c06\u4e32\u884c\u4e0e\u5e76\u884c\u8282\u70b9\u5d4c\u5957\u5728\u4e00\u8d77\uff0c\u4ece\u800c\u521b\u5efa\u66f4\u590d\u6742\u7684\u6d41\u7a0b\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Nested Serial And Parallel Node",src:s(76201).A+"",width:"1536",height:"1539"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},19945:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/create-parallel-node-on-dashboard-0cd0c7c27f143118369da6283d1c5f1b.png"},9364:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/create-serial-node-on-dashboard-f3b2feacd8774c74a62809a2f0d51648.png"},76201:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/nested-serial-and-parallel-94b7c87e84f18b4c63ba7df68011de7f.png"},6383:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var l=s(30758);const r={},o=l.createContext(r);function a(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);