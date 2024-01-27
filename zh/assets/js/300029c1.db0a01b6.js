"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7967],{48099:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>t,toc:()=>h});var s=n(11527),r=n(88672);const i={title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c"},l=void 0,t={id:"simulate-network-chaos-on-kubernetes",title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u5229\u7528 NetworkChaos \u6a21\u62df\u7f51\u7edc\u6545\u969c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-network-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-network-chaos-on-kubernetes",permalink:"/zh/docs/2.5.2/simulate-network-chaos-on-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-network-chaos-on-kubernetes.md",tags:[],version:"2.5.2",frontMatter:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df Pod \u6545\u969c",permalink:"/zh/docs/2.5.2/simulate-pod-chaos-on-kubernetes"},next:{title:"\u6a21\u62df\u538b\u529b\u573a\u666f",permalink:"/zh/docs/2.5.2/simulate-heavy-stress-on-kubernetes"}},c={},h=[{value:"NetworkChaos \u4ecb\u7ecd",id:"networkchaos-\u4ecb\u7ecd",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"Net Emulation \u793a\u4f8b",id:"net-emulation-\u793a\u4f8b",level:3},{value:"Partition \u793a\u4f8b",id:"partition-\u793a\u4f8b",level:3},{value:"Bandwidth \u793a\u4f8b",id:"bandwidth-\u793a\u4f8b",level:3},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:2},{value:"\u4e0d\u540c <code>action</code> \u7684\u914d\u7f6e\u9879",id:"\u4e0d\u540c-action-\u7684\u914d\u7f6e\u9879",level:2},{value:"Net Emulation",id:"net-emulation",level:3},{value:"Delay",id:"delay",level:3},{value:"Reorder",id:"reorder",level:3},{value:"Loss",id:"loss",level:3},{value:"Duplicate",id:"duplicate",level:3},{value:"Corrupt",id:"corrupt",level:3},{value:"Bandwidth",id:"bandwidth",level:3}];function x(e){const d={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u5229\u7528 NetworkChaos \u6a21\u62df\u7f51\u7edc\u6545\u969c\u3002"}),"\n",(0,s.jsx)(d.h2,{id:"networkchaos-\u4ecb\u7ecd",children:"NetworkChaos \u4ecb\u7ecd"}),"\n",(0,s.jsx)(d.p,{children:"NetworkChaos \u7528\u4e8e\u6a21\u62df\u96c6\u7fa4\u4e2d\u7f51\u7edc\u6545\u969c\u7684\u573a\u666f\uff0c\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\uff1a"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"Partition"}),"\uff1a\u7f51\u7edc\u65ad\u5f00\u3001\u5206\u533a\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"Net Emulation"}),"\uff1a\u7528\u4e8e\u6a21\u62df\u7f51\u7edc\u72b6\u6001\u4e0d\u826f\u7684\u60c5\u51b5\uff0c\u6bd4\u5982\u9ad8\u5ef6\u8fdf\u3001\u9ad8\u4e22\u5305\u7387\u3001\u5305\u4e71\u5e8f\u7b49\u60c5\u51b5\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"Bandwidth"}),"\uff1a\u7528\u4e8e\u9650\u5236\u8282\u70b9\u4e4b\u95f4\u901a\u4fe1\u7684\u5e26\u5bbd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsx)(d.li,{children:"\u8bf7\u5728\u8fdb\u884c\u7f51\u7edc\u6ce8\u5165\u7684\u8fc7\u7a0b\u4e2d\u4fdd\u8bc1 Controller Manager \u4e0e Chaos Daemon \u4e4b\u95f4\u7684\u8fde\u63a5\u901a\u7545\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u6062\u590d\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5982\u679c\u4f7f\u7528 Net Emulation \u529f\u80fd\uff0c\u8bf7\u786e\u4fdd Linux \u5185\u6838\u62e5\u6709 NET_SCH_NETEM \u6a21\u5757\u3002\u5bf9\u4e8e CentOS \u53ef\u4ee5\u901a\u8fc7 kernel-modules-extra \u5305\u5b89\u88c5\uff0c\u5927\u90e8\u5206\u5176\u4ed6\u53d1\u884c\u7248\u5df2\u9ed8\u8ba4\u5b89\u88c5\u76f8\u5e94\u6a21\u5757\u3002"}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,s.jsx)(d.strong,{children:"\u65b0\u7684\u5b9e\u9a8c"}),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{alt:"\u521b\u5efa\u5b9e\u9a8c",src:n(34787).Z+"",width:"982",height:"648"})}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u5728\u201c\u9009\u62e9\u76ee\u6807\u201d\u5904\u9009\u62e9 \u201c\u7f51\u7edc\u653b\u51fb\u201d\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,s.jsx)(d.code,{children:"LOSS"}),"\uff0c\u6700\u540e\u586b\u5199\u5177\u4f53\u914d\u7f6e\uff1a"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{alt:"NetworkChaos \u5b9e\u9a8c",src:n(65989).Z+"",width:"1479",height:"1024"})}),"\n",(0,s.jsxs)(d.p,{children:["\u5177\u4f53\u914d\u7f6e\u7684\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003",(0,s.jsx)(d.a,{href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",children:"\u5b57\u6bb5\u8bf4\u660e"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:n(40369).Z+"",width:"1838",height:"1328"})}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"\u63d0\u4ea4\u5b9e\u9a8c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"}),"\n",(0,s.jsx)(d.h3,{id:"net-emulation-\u793a\u4f8b",children:"Net Emulation \u793a\u4f8b"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ",(0,s.jsx)(d.code,{children:"network-delay.yaml"}),"\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: delay\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u8be5\u914d\u7f6e\u5c06\u4ee4\u9009\u4e2d Pod \u5185\u7684\u7f51\u7edc\u8fde\u63a5\u4ea7\u751f 10 \u6beb\u79d2\u7684\u5ef6\u8fdf\u3002\u9664\u4e86\u6ce8\u5165\u5ef6\u8fdf\u4ee5\u5916\uff0cChaos Mesh \u8fd8\u652f\u6301\u6ce8\u5165\u4e22\u5305\u3001\u4e71\u5e8f\u7b49\u529f\u80fd\uff0c\u8be6\u89c1",(0,s.jsx)(d.a,{href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",children:"\u5b57\u6bb5\u8bf4\u660e"})]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"kubectl"})," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"kubectl apply -f ./network-delay.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"partition-\u793a\u4f8b",children:"Partition \u793a\u4f8b"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ",(0,s.jsx)(d.code,{children:"network-partition.yaml"}),"\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: partition\nspec:\n  action: partition\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  direction: to\n  target:\n    mode: all\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'app2'\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u8be5\u914d\u7f6e\u5c06\u963b\u6b62\u4ece ",(0,s.jsx)(d.code,{children:"app1"})," \u5411 ",(0,s.jsx)(d.code,{children:"app2"})," \u5efa\u7acb\u7684\u8fde\u63a5\u3002",(0,s.jsx)(d.code,{children:"direction"})," \u5b57\u6bb5\u7684\u503c\u53ef\u4ee5\u9009\u62e9 ",(0,s.jsx)(d.code,{children:"to"}),"\uff0c",(0,s.jsx)(d.code,{children:"from"})," \u53ca ",(0,s.jsx)(d.code,{children:"both"}),"\uff0c\u8be6\u89c1",(0,s.jsx)(d.a,{href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",children:"\u5b57\u6bb5\u8bf4\u660e"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"kubectl"})," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"kubectl apply -f ./network-partition.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"bandwidth-\u793a\u4f8b",children:"Bandwidth \u793a\u4f8b"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ",(0,s.jsx)(d.code,{children:"network-bandwidth.yaml"}),"\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: bandwidth\nspec:\n  action: bandwidth\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  bandwidth:\n    rate: '1mbps'\n    limit: 20971520\n    buffer: 10000\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u8be5\u914d\u7f6e\u5c06\u9650\u5236 ",(0,s.jsx)(d.code,{children:"app1"})," \u7684\u5e26\u5bbd\u4e3a 1 mbps\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"kubectl"})," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"kubectl apply -f ./network-bandwidth.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u5b57\u6bb5\u8bf4\u660e",children:"\u5b57\u6bb5\u8bf4\u660e"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"action"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5177\u4f53\u7684\u6545\u969c\u7c7b\u578b\u3002netem\uff0cdelay\uff0closs\uff0cduplicate\uff0ccorrupt \u5bf9\u5e94 net emulation \u7c7b\u578b\uff1bpartition \u8868\u793a\u7f51\u7edc\u5206\u533a\uff1bbandwidth \u8868\u793a\u9650\u5236\u5e26\u5bbd"}),(0,s.jsx)(d.td,{children:"\u65e0"}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{children:"partition"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"target"}),(0,s.jsx)(d.td,{children:"Selector"}),(0,s.jsx)(d.td,{children:"\u4e0e direction \u7ec4\u5408\u4f7f\u7528\uff0c\u4f7f\u5f97 Chaos \u53ea\u5bf9\u90e8\u5206\u5305\u751f\u6548"}),(0,s.jsx)(d.td,{children:"\u65e0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"direction"}),(0,s.jsx)(d.td,{children:"enum"}),(0,s.jsxs)(d.td,{children:["\u503c\u4e3a ",(0,s.jsx)(d.code,{children:"from"}),"\uff0c",(0,s.jsx)(d.code,{children:"to"})," \u6216 ",(0,s.jsx)(d.code,{children:"both"}),"\u3002\u7528\u4e8e\u6307\u5b9a\u9009\u51fa\u201c\u6765\u81ea target \u7684\u5305\u201d\uff0c\u201c\u53d1\u5f80 target \u7684\u5305\u201d\uff0c\u6216\u8005\u201c\u5168\u90e8\u9009\u4e2d\u201d"]}),(0,s.jsx)(d.td,{children:"to"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"both"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"mode"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsxs)(d.td,{children:["\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,s.jsx)(d.code,{children:"one"}),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,s.jsx)(d.code,{children:"all"}),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,s.jsx)(d.code,{children:"fixed"}),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,s.jsx)(d.code,{children:"fixed-percent"}),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,s.jsx)(d.code,{children:"random-max-percent"}),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"]}),(0,s.jsx)(d.td,{children:"\u65e0"}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"one"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"value"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsxs)(d.td,{children:["\u53d6\u51b3\u4e0e ",(0,s.jsx)(d.code,{children:"mode"})," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,s.jsx)(d.code,{children:"mode"})," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,s.jsx)(d.code,{children:"mode"})," \u914d\u7f6e\u4e3a ",(0,s.jsx)(d.code,{children:"fixed-percent"})," \u65f6\uff0c",(0,s.jsx)(d.code,{children:"value"})," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4"]}),(0,s.jsx)(d.td,{children:"\u65e0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"selector"}),(0,s.jsx)(d.td,{children:"struct"}),(0,s.jsxs)(d.td,{children:["\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,s.jsx)(d.a,{href:"/zh/docs/2.5.2/define-chaos-experiment-scope",children:"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"})]}),(0,s.jsx)(d.td,{children:"\u65e0"}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"externalTargets"}),(0,s.jsx)(d.td,{children:"[]string"}),(0,s.jsxs)(d.td,{children:["\u8868\u793a Kubernetes \u4e4b\u5916\u7684\u7f51\u7edc\u76ee\u6807, \u53ef\u4ee5\u662f IPv4 \u5730\u5740\u6216\u8005\u57df\u540d\u3002\u53ea\u80fd\u4e0e ",(0,s.jsx)(d.code,{children:"direction: to"})," \u4e00\u8d77\u5de5\u4f5c\u3002"]}),(0,s.jsx)(d.td,{children:"\u65e0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"1.1.1.1, google.com"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"device"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u6307\u5b9a\u5f71\u54cd\u7684\u7f51\u7edc\u8bbe\u5907"}),(0,s.jsx)(d.td,{children:"\u65e0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:'"eth0"'})]})]})]}),"\n",(0,s.jsxs)(d.h2,{id:"\u4e0d\u540c-action-\u7684\u914d\u7f6e\u9879",children:["\u4e0d\u540c ",(0,s.jsx)(d.code,{children:"action"})," \u7684\u914d\u7f6e\u9879"]}),"\n",(0,s.jsx)(d.h3,{id:"net-emulation",children:"Net Emulation"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"delay"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#delay",children:"Delay"})}),(0,s.jsx)(d.td,{children:"\u63cf\u8ff0\u7f51\u7edc\u7684\u5ef6\u8fdf\u72b6\u6001"}),(0,s.jsx)(d.td,{children:"\u5426"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"loss"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#loss",children:"Loss"})}),(0,s.jsx)(d.td,{children:"\u63cf\u8ff0\u7f51\u7edc\u7684\u4e22\u5305\u72b6\u6001"}),(0,s.jsx)(d.td,{children:"\u5426"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"duplicate"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#duplicate",children:"Duplicate"})}),(0,s.jsx)(d.td,{children:"\u63cf\u8ff0\u7f51\u7edc\u91cd\u590d\u5305\u7684\u72b6\u6001"}),(0,s.jsx)(d.td,{children:"\u5426"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"corrupt"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#corrupt",children:"Corrupt"})}),(0,s.jsx)(d.td,{children:"\u63cf\u8ff0\u7f51\u7edc\u5305\u51fa\u73b0\u9519\u8bef\u7684\u72b6\u6001"}),(0,s.jsx)(d.td,{children:"\u5426"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"delay",children:"Delay"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"latency"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5ef6\u8fdf\u7684\u65f6\u95f4\u957f\u5ea6"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"2ms"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"correlation"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5ef6\u8fdf\u65f6\u95f4\u7684\u65f6\u95f4\u957f\u5ea6\u4e0e\u524d\u4e00\u6b21\u5ef6\u8fdf\u65f6\u957f\u7684\u76f8\u5173\u6027\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"jitter"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5ef6\u8fdf\u65f6\u95f4\u7684\u53d8\u5316\u8303\u56f4"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"1ms"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"reorder"}),(0,s.jsx)(d.td,{children:"Reorder(#Reorder)"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u7f51\u7edc\u5305\u4e71\u5e8f\u7684\u72b6\u6001"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"correlation"})," \u7684\u8ba1\u7b97\u6a21\u578b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"\u9996\u5148\u751f\u6210\u4e00\u4e2a\u5206\u5e03\u4e0e\u4e0a\u4e00\u4e2a\u503c\u6709\u5173\u7684\u968f\u673a\u6570\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-c",children:"rnd = value * (1-corr) + last_rnd * corr\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u5176\u4e2d ",(0,s.jsx)(d.code,{children:"rnd"})," \u4e3a\u8fd9\u4e00\u968f\u673a\u6570\u3002",(0,s.jsx)(d.code,{children:"corr"})," \u4e3a\u586b\u5199\u7684 ",(0,s.jsx)(d.code,{children:"correlation"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"\u4f7f\u7528\u8fd9\u4e00\u968f\u673a\u6570\u51b3\u5b9a\u5f53\u524d\u5305\u7684\u5ef6\u8fdf\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-c",children:"((rnd % (2 * sigma)) + mu) - sigma\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u5176\u4e2d ",(0,s.jsx)(d.code,{children:"sigma"})," \u4e3a ",(0,s.jsx)(d.code,{children:"jitter"}),"\uff0c",(0,s.jsx)(d.code,{children:"mu"})," \u4e3a ",(0,s.jsx)(d.code,{children:"latency"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"reorder",children:"Reorder"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"reorder"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u53d1\u751f\u91cd\u65b0\u6392\u5e8f\u7684\u6982\u7387\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"correlation"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u53d1\u751f\u91cd\u65b0\u6392\u5e8f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u7684\u76f8\u5173\u6027\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"gap"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u4e71\u5e8f\u5c06\u5305\u63a8\u540e\u7684\u8ddd\u79bb"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"5"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"loss",children:"Loss"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"loss"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u4e22\u5305\u53d1\u751f\u7684\u6982\u7387\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"correlation"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u4e22\u5305\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"duplicate",children:"Duplicate"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"duplicate"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5305\u91cd\u590d\u53d1\u751f\u7684\u6982\u7387\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"correlation"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5305\u91cd\u590d\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"corrupt",children:"Corrupt"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"corrupt"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5305\u9519\u8bef\u53d1\u751f\u7684\u6982\u7387\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"correlation"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5305\u9519\u8bef\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 100]"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"50"})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:["\u5bf9\u4e8e ",(0,s.jsx)(d.code,{children:"reorder"}),"\uff0c",(0,s.jsx)(d.code,{children:"loss"}),"\uff0c",(0,s.jsx)(d.code,{children:"duplicate"}),"\uff0c",(0,s.jsx)(d.code,{children:"corrupt"})," \u8fd9\u4e9b\u5076\u53d1\u4e8b\u4ef6\uff0c",(0,s.jsx)(d.code,{children:"correlation"})," \u5219\u66f4\u4e3a\u590d\u6742\u3002\u5177\u4f53\u6a21\u578b\u63cf\u8ff0\u53c2\u8003 ",(0,s.jsx)(d.a,{href:"http://web.archive.org/web/20200120162102/http://netgroup.uniroma2.it/twiki/bin/view.cgi/Main/NetemCLG",children:"NetemCLG"})," \u3002"]}),"\n",(0,s.jsx)(d.h3,{id:"bandwidth",children:"Bandwidth"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u53c2\u6570"}),(0,s.jsx)(d.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"rate"}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5e26\u5bbd\u9650\u5236\u7684\u901f\u7387"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{children:"1mbps"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"limit"}),(0,s.jsx)(d.td,{children:"uint32"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u7684\u5b57\u8282\u6570"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"buffer"}),(0,s.jsx)(d.td,{children:"uint32"}),(0,s.jsx)(d.td,{children:"\u80fd\u591f\u77ac\u95f4\u53d1\u9001\u7684\u6700\u5927\u5b57\u8282\u6570"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"peakrate"}),(0,s.jsx)(d.td,{children:"uint64"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"bucket"})," \u7684\u6700\u5927\u6d88\u8017\u7387"]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"minburst"}),(0,s.jsx)(d.td,{children:"uint32"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"peakrate bucket"})," \u7684\u5927\u5c0f"]}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:["\u5176\u4e2d ",(0,s.jsx)(d.code,{children:"peakrate"})," \u548c ",(0,s.jsx)(d.code,{children:"minburst"})," \u901a\u5e38\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u8bbe\u7f6e\u3002\u5982\u679c\u9700\u8981\u8fdb\u4e00\u6b65\u4e86\u89e3\u8fd9\u4e9b\u5b57\u6bb5\u7684\u542b\u4e49\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(d.a,{href:"https://man7.org/linux/man-pages/man8/tc-tbf.8.html",children:"tc-tbf \u6587\u6863"}),".",(0,s.jsx)(d.code,{children:"limit"})," \u5efa\u8bae\u81f3\u5c11\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(d.code,{children:"2 * rate * latency"}),"\uff0c\u5176\u4e2d ",(0,s.jsx)(d.code,{children:"latency"})," \u4e3a\u53d1\u9001\u8005\u5230\u76ee\u6807\u7684\u5ef6\u8fdf\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(d.code,{children:"ping"})," \u547d\u4ee4\u4f30\u7b97\u3002\u8fc7\u5c0f\u7684 limit \u4f1a\u9020\u6210\u9ad8\u4e22\u5305\u7387\uff0c\u4ece\u800c\u5f71\u54cd TCP \u8fde\u63a5\u7684\u541e\u5410\u3002"]})]})}function j(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},34787:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},40369:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png"},65989:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/networkchaos-exp-c54c3b4876b902f6bea24793aa23904c.png"},88672:(e,d,n)=>{n.d(d,{Z:()=>t,a:()=>l});var s=n(50959);const r={},i=s.createContext(r);function l(e){const d=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:d},e.children)}}}]);