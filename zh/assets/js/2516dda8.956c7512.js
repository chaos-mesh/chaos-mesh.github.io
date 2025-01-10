"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5202],{29540:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"simulate-physical-machine-chaos","title":"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.5/simulate-physical-machine-chaos.md","sourceDirName":".","slug":"/simulate-physical-machine-chaos","permalink":"/zh/docs/2.6.5/simulate-physical-machine-chaos","draft":false,"unlisted":false,"editUrl":"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.6.5/simulate-physical-machine-chaos.md","tags":[],"version":"2.6.5","frontMatter":{"title":"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c"},"sidebar":"docs","previous":{"title":"Chaosd \u7ec4\u4ef6\u7b80\u4ecb","permalink":"/zh/docs/2.6.5/chaosd-overview"},"next":{"title":"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c","permalink":"/zh/docs/2.6.5/simulate-process-chaos-in-physical-nodes"}}');var i=n(86070),c=n(8637);const d={title:"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c"},t=void 0,h={},r=[{value:"PhysicalMachineChaos \u4ecb\u7ecd",id:"physicalmachinechaos-\u4ecb\u7ecd",level:2},{value:"\u8fd0\u884c Chaosd Server",id:"\u8fd0\u884c-chaosd-server",level:2},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"CPU \u538b\u529b",id:"cpu-\u538b\u529b",level:4},{value:"\u5185\u5b58\u538b\u529b",id:"\u5185\u5b58\u538b\u529b",level:4},{value:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d",id:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d",level:4},{value:"\u78c1\u76d8\u5199\u8d1f\u8f7d",id:"\u78c1\u76d8\u5199\u8d1f\u8f7d",level:4},{value:"\u78c1\u76d8\u586b\u5145",id:"\u78c1\u76d8\u586b\u5145",level:4},{value:"\u7f51\u7edc\u5305\u9519\u8bef",id:"\u7f51\u7edc\u5305\u9519\u8bef",level:4},{value:"\u7f51\u7edc\u5305\u5ef6\u8fdf",id:"\u7f51\u7edc\u5305\u5ef6\u8fdf",level:4},{value:"\u7f51\u7edc\u5305\u91cd\u590d",id:"\u7f51\u7edc\u5305\u91cd\u590d",level:4},{value:"\u7f51\u7edc\u5305\u4e22\u5931",id:"\u7f51\u7edc\u5305\u4e22\u5931",level:4},{value:"\u7f51\u7edc\u5206\u533a",id:"\u7f51\u7edc\u5206\u533a",level:4},{value:"DNS \u6545\u969c",id:"dns-\u6545\u969c",level:4},{value:"\u8fdb\u7a0b\u6545\u969c",id:"\u8fdb\u7a0b\u6545\u969c",level:4},{value:"JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38",id:"jvm-\u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38",level:4},{value:"JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf",id:"jvm-\u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf",level:4},{value:"JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",id:"jvm-\u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",level:4},{value:"JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536",id:"jvm-\u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536",level:4},{value:"JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c",id:"jvm-\u5e94\u7528\u4f7f\u7528-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c",level:4},{value:"\u65f6\u95f4\u504f\u79fb",id:"\u65f6\u95f4\u504f\u79fb",level:4}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"physicalmachinechaos-\u4ecb\u7ecd",children:"PhysicalMachineChaos \u4ecb\u7ecd"}),"\n",(0,i.jsx)(s.p,{children:"PhysicalMachineChaos \u7528\u4e8e\u5728\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u6a21\u62df\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u538b\u529b\u3001JVM\u3001\u65f6\u95f4\u7b49\u6545\u969c\u3002\u5728\u4f7f\u7528 Chaos Mesh \u7684 PhysicalMachineChaos \u529f\u80fd\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5728\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e0a\u90e8\u7f72 Chaosd\u3002Chaos Mesh \u4e0e Chaosd \u7684\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Chaos Mesh \u7248\u672c"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Chaosd \u7248\u672c"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"v2.1.x"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"v1.1.x"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"v2.2.x"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"v1.2.x"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"\u8fd0\u884c-chaosd-server",children:"\u8fd0\u884c Chaosd Server"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u4f7f\u7528 Chaos Mesh \u521b\u5efa PhysicalMachineChaos \u6df7\u6c8c\u5b9e\u9a8c\u524d\uff0c\u4f60\u9700\u8981\u5728\u5f85\u6ce8\u5165\u6545\u969c\u7684\u6240\u6709\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u90e8\u7f72\u670d\u52a1\u6a21\u5f0f\u7684 Chaosd\u3002\u90e8\u7f72 Chaosd \u540e\u8fd0\u884c Chaosd Server \u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u90e8\u7f72 Chaosd \u540e\uff0c\u751f\u6210 TLS \u8bc1\u4e66\uff0c\u5e76\u521b\u5efa ",(0,i.jsx)(s.code,{children:"PhysicalMachine"}),"\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\u6709\u5173\u90e8\u7f72\u7684\u5177\u4f53\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003 ",(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/chaosd-overview#%E4%B8%8B%E8%BD%BD%E5%92%8C%E9%83%A8%E7%BD%B2",children:"Chaosd \u7684\u4e0b\u8f7d\u548c\u90e8\u7f72"}),"\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:["\u5b8c\u6210\u90e8\u7f72\u540e\uff0c\u5728\u8fd0\u884c Chaosd Server ",(0,i.jsx)(s.strong,{children:"\u524d"}),"\uff0c\u9700\u8981\u5148\u751f\u6210 TLS \u8bc1\u4e66\uff0c\u5e76\u5728 Kubernetes \u96c6\u7fa4\u5185\u521b\u5efa ",(0,i.jsx)(s.code,{children:"PhysicalMachine"}),"\u3002\u6709\u5173 TLS \u8bc1\u4e66\u7684\u751f\u6210\u65b9\u5f0f\uff0c\u8bf7\u53c2\u8003 ",(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/chaosctl-tool#%E4%B8%BA-chaosd-%E7%94%9F%E6%88%90-tls-%E8%AF%81%E4%B9%A6",children:"Chaosctl \u4e3a Chaosd \u751f\u6210\u8bc1\u4e66"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8fd0\u884c Chaosd\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u4f7f\u7528 Chaosctl \u751f\u6210\u4e86 TSL \u8bc1\u4e66\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8\u670d\u52a1\u6a21\u5f0f\u7684 Chaosd\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"chaosd server --https-port 31768 --CA=/etc/chaosd/pki/ca.crt --cert=/etc/chaosd/pki/chaosd.crt --key=/etc/chaosd/pki/chaosd.key\n"})}),"\n",(0,i.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,i.jsx)(s.p,{children:"\u4f7f\u7528 Chaosctl \u751f\u6210\u7684 TLS \u8bc1\u4e66\u6587\u4ef6\u7684\u4fdd\u5b58\u8def\u5f84\u4e3a Chaosctl \u7684\u9ed8\u8ba4\u8f93\u51fa\u8def\u5f84\u3002\u5982\u679c\u5728\u751f\u6210\u8bc1\u4e66\u65f6\u624b\u52a8\u6307\u5b9a\u4e86\u5176\u4ed6\u8def\u5f84\uff0c\u8bf7\u624b\u52a8\u5c06\u547d\u4ee4\u4e2d\u7684\u8def\u5f84\u66ff\u6362\u4e3a\u5bf9\u5e94\u7684\u6587\u4ef6\u8def\u5f84\u3002"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u6ca1\u6709\u901a\u8fc7 Chaosctl \u914d\u7f6e TLS \u8bc1\u4e66\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8\u670d\u52a1\u6a21\u5f0f\u7684 Chaosd\u3002\u4f46\u8003\u8651\u5230\u96c6\u7fa4\u7684\u5b89\u5168\u6027\uff0c",(0,i.jsx)(s.strong,{children:"\u4e0d\u63a8\u8350"}),"\u4f7f\u7528\u8fd9\u4e2a\u65b9\u5f0f\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"chaosd server --port 31767\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,i.jsx)(s.strong,{children:"\u65b0\u7684\u5b9e\u9a8c"}),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u521b\u5efa\u5b9e\u9a8c",src:n(18714).A+"",width:"982",height:"648"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5728",(0,i.jsx)(s.strong,{children:"\u5b9e\u9a8c\u7c7b\u578b"}),"\u5904\u9009\u62e9",(0,i.jsx)(s.strong,{children:"\u7269\u7406"}),"\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u5b9e\u9a8c\u7c7b\u578b\uff0c\u4f8b\u5982",(0,i.jsx)(s.strong,{children:"\u7f51\u7edc\u653b\u51fb"}),"\u3002\u7136\u540e\u9009\u62e9\u5177\u4f53\u7684\u884c\u4e3a\uff0c\u6700\u540e\u518d\u586b\u5199\u76f8\u5e94\u7684\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"PhysicalMachineChaos \u5b9e\u9a8c",src:n(77329).A+"",width:"1836",height:"1274"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:n(86496).A+"",width:"1842",height:"1338"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u63d0\u4ea4\u5b9e\u9a8c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ",(0,i.jsx)(s.code,{children:"physicalmachine.yaml"})," \u4e2d\uff0c\u5199\u5165\u5185\u5bb9\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: PhysicalMachineChaos\nmetadata:\n  name: physical-network-delay\n  namespace: chaos-mesh\nspec:\n  action: network-delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'arch': 'amd64'\n  network-delay:\n    device: ens33\n    ip-address: 140.82.112.3\n    latency: 1000ms\n  duration: '10m'\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u5411\u6307\u5b9a\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e2d\u7684 Chaosd \u670d\u52a1\u53d1\u9001 HTTP \u8bf7\u6c42\uff0c\u89e6\u53d1\u7f51\u7edc\u5ef6\u8fdf\u5b9e\u9a8c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"kubectl"})," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f physicalmachine.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u914d\u7f6e\u8bf4\u660e",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"\u793a\u4f8b"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"action"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["\u5b9a\u4e49\u7269\u7406\u673a\u6545\u969c\u7684\u884c\u4e3a\uff0c\u53ef\u9009\u503c\u4e3a ",(0,i.jsx)(s.code,{children:"stress-cpu"}),", ",(0,i.jsx)(s.code,{children:"stress-mem"}),", ",(0,i.jsx)(s.code,{children:"disk-read-payload"}),", ",(0,i.jsx)(s.code,{children:"disk-write-payload"}),", ",(0,i.jsx)(s.code,{children:"disk-fill"}),", ",(0,i.jsx)(s.code,{children:"network-corrupt"}),", ",(0,i.jsx)(s.code,{children:"network-duplicate"}),", ",(0,i.jsx)(s.code,{children:"network-loss"}),", ",(0,i.jsx)(s.code,{children:"network-delay"}),", ",(0,i.jsx)(s.code,{children:"network-partition"}),", ",(0,i.jsx)(s.code,{children:"network-dns"}),", ",(0,i.jsx)(s.code,{children:"process"}),", ",(0,i.jsx)(s.code,{children:"jvm-exception"}),", ",(0,i.jsx)(s.code,{children:"jvm-gc"}),", ",(0,i.jsx)(s.code,{children:"jvm-latency"}),", ",(0,i.jsx)(s.code,{children:"jvm-return"}),", ",(0,i.jsx)(s.code,{children:"jvm-stress"}),", ",(0,i.jsx)(s.code,{children:"jvm-rule-data"}),", ",(0,i.jsx)(s.code,{children:"clock"})]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u65e0"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u662f"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"stress-cpu"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"address"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"string \u6570\u7ec4"}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["\u9009\u62e9\u6ce8\u5165\u6545\u969c\u7684 Chaosd \u670d\u52a1\u5730\u5740\uff0c",(0,i.jsx)(s.code,{children:"address"})," \u4e0e ",(0,i.jsx)(s.code,{children:"selector"})," \u4e24\u8005\u53ea\u80fd\u9009\u62e9\u5176\u4e2d\u4e00\u9879"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"[]"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u662f"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:'["192.168.0.10:31767"]'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"selector"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"struct"}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 PhysicalMachine\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/define-chaos-experiment-scope",children:"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4"}),"\uff0c",(0,i.jsx)(s.code,{children:"address"})," \u4e0e ",(0,i.jsx)(s.code,{children:"selector"})," \u4e24\u8005\u53ea\u80fd\u9009\u62e9\u5176\u4e2d\u4e00\u9879"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u65e0"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u5426"}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"mode"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,i.jsx)(s.code,{children:"one"}),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine\uff09\u3001",(0,i.jsx)(s.code,{children:"all"}),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine\uff09\u3001",(0,i.jsx)(s.code,{children:"fixed"}),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine\uff09\u3001",(0,i.jsx)(s.code,{children:"fixed-percent"}),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 PhysicalMachine\uff09\u3001",(0,i.jsx)(s.code,{children:"random-max-percent"}),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 PhysicalMachine \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 PhysicalMachine\uff09"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u65e0"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u662f"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"one"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"value"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["\u53d6\u51b3\u4e0e ",(0,i.jsx)(s.code,{children:"mode"})," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,i.jsx)(s.code,{children:"mode"})," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,i.jsx)(s.code,{children:"mode"})," \u914d\u7f6e\u4e3a ",(0,i.jsx)(s.code,{children:"fixed-percent"})," \u65f6\uff0c",(0,i.jsx)(s.code,{children:"value"})," \u7528\u4e8e\u6307\u5b9a PhysicalMachine \u7684\u767e\u5206\u6bd4"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u65e0"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u5426"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"1"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"duration"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u65e0"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"\u662f"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"30s"})})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"\u6bcf\u79cd\u6545\u969c\u884c\u4e3a\u90fd\u6709\u7279\u5b9a\u7684\u914d\u7f6e\u3002\u4ee5\u4e0b\u90e8\u5206\u4ecb\u7ecd\u5404\u79cd\u6545\u969c\u7c7b\u578b\u4ee5\u53ca\u5bf9\u5e94\u7684\u914d\u7f6e\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(s.h4,{id:"cpu-\u538b\u529b",children:"CPU \u538b\u529b"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df CPU \u538b\u529b\u573a\u666f\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "stress-cpu"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-heavy-stress-in-physical-nodes#%E6%A8%A1%E6%8B%9F-CPU-%E5%8E%8B%E5%8A%9B%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u6a21\u62df CPU \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u5185\u5b58\u538b\u529b",children:"\u5185\u5b58\u538b\u529b"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u5185\u5b58\u538b\u529b\u573a\u666f\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "stress-mem"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-heavy-stress-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E5%86%85%E5%AD%98%E5%8E%8B%E5%8A%9B%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u6a21\u62df\u5185\u5b58\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d",children:"\u78c1\u76d8\u8bfb\u8d1f\u8f7d"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-read-payload"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E8%AF%BB%E8%B4%9F%E8%BD%BD%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u78c1\u76d8\u5199\u8d1f\u8f7d",children:"\u78c1\u76d8\u5199\u8d1f\u8f7d"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-write-payload"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E5%86%99%E8%B4%9F%E8%BD%BD%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u78c1\u76d8\u586b\u5145",children:"\u78c1\u76d8\u586b\u5145"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u78c1\u76d8\u586b\u5145\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "disk-fill"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-disk-pressure-in-physical-nodes#%E6%A8%A1%E6%8B%9F%E7%A3%81%E7%9B%98%E5%A1%AB%E5%85%85%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u7f51\u7edc\u5305\u9519\u8bef",children:"\u7f51\u7edc\u5305\u9519\u8bef"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-corrupt"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E9%94%99%E8%AF%AF%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u7f51\u7edc\u5305\u5ef6\u8fdf",children:"\u7f51\u7edc\u5305\u5ef6\u8fdf"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-delay"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E5%BB%B6%E8%BF%9F%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u7f51\u7edc\u5305\u91cd\u590d",children:"\u7f51\u7edc\u5305\u91cd\u590d"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-duplicate"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E9%87%8D%E5%A4%8D%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u7f51\u7edc\u5305\u4e22\u5931",children:"\u7f51\u7edc\u5305\u4e22\u5931"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-loss"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%8C%85%E4%B8%A2%E5%A4%B1%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u7f51\u7edc\u5206\u533a",children:"\u7f51\u7edc\u5206\u533a"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u7f51\u7edc\u5206\u533a\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "network-partition"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-network-chaos-in-physical-nodes#%E7%BD%91%E7%BB%9C%E5%88%86%E5%8C%BA%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u7f51\u7edc\u5206\u533a\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"dns-\u6545\u969c",children:"DNS \u6545\u969c"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df DNS \u6545\u969c\uff0c \u5c06 action \u8bbe\u7f6e\u4e3a "network-dns"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003 ',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-network-chaos-in-physical-nodes#DNS-%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"DNS \u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u8fdb\u7a0b\u6545\u969c",children:"\u8fdb\u7a0b\u6545\u969c"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u8fdb\u7a0b\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "process"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-process-chaos-in-physical-nodes#%E8%BF%9B%E7%A8%8B%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u8fdb\u7a0b\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"jvm-\u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38",children:"JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df JVM \u5e94\u7528\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-exception"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-jvm-application-chaos-in-physical-nodes#%E6%8A%9B%E5%87%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"jvm-\u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf",children:"JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df JVM \u5e94\u7528\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-latency"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-jvm-application-chaos-in-physical-nodes#%E5%A2%9E%E5%8A%A0%E6%96%B9%E6%B3%95%E5%BB%B6%E8%BF%9F%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"jvm-\u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",children:"JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df JVM \u5e94\u7528\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-return"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-jvm-application-chaos-in-physical-nodes#%E4%BF%AE%E6%94%B9%E6%96%B9%E6%B3%95%E8%BF%94%E5%9B%9E%E5%80%BC%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"jvm-\u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536",children:"JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df JVM \u5e94\u7528\u89e6\u53d1\u5783\u573e\u56de\u6536\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-gc"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-jvm-application-chaos-in-physical-nodes#%E8%A7%A6%E5%8F%91%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"jvm-\u5e94\u7528\u4f7f\u7528-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c",children:"JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c"}),"\n",(0,i.jsxs)(s.p,{children:['JVM \u5e94\u7528\u4f7f\u7528 Byteman \u914d\u7f6e\u89e6\u53d1\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "jvm-rule-data"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-jvm-application-chaos-in-physical-nodes#%E8%AE%BE%E7%BD%AE-Byteman-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%A7%A6%E5%8F%91%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E",children:"\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"\u65f6\u95f4\u504f\u79fb",children:"\u65f6\u95f4\u504f\u79fb"}),"\n",(0,i.jsxs)(s.p,{children:['\u6a21\u62df\u65f6\u95f4\u504f\u79fb\u6545\u969c\uff0c\u5c06 action \u8bbe\u7f6e\u4e3a "clock"\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53ef\u53c2\u8003',(0,i.jsx)(s.a,{href:"/zh/docs/2.6.5/simulate-time-chaos-on-physical-nodes#%E6%A8%A1%E6%8B%9F%E6%97%B6%E9%97%B4%E6%95%85%E9%9A%9C%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u6a21\u62df\u65f6\u95f4\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e"}),"\u3002"]})]})}function o(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},18714:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},86496:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/physicalmachinechaos-exp-info-9d2045a888a56b22d2a98828576c24b4.png"},77329:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/physicalmachinechaos-exp-0e41776413e369396de105eb51b92e57.png"},8637:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>t});var l=n(30758);const i={},c=l.createContext(i);function d(e){const s=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(c.Provider,{value:s},e.children)}}}]);