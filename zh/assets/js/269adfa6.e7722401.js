"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9454],{73830:(e,s,h)=>{h.r(s),h.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>t,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=h(13274),c=h(90073);const l={title:"\u4ece 2.1 \u5347\u7ea7\u5230 2.2"},a=void 0,o={id:"upgrade-from-2.1-to-2.2",title:"\u4ece 2.1 \u5347\u7ea7\u5230 2.2",description:"\u5728 2.2.0 \u7248\u672c\u4e2d\uff0cHelm Charts \u505a\u4e86\u4e00\u4e9b\u6539\u53d8\u3002\u8fd9\u4e2a\u6587\u6863\u5c06\u5e2e\u52a9\u4f60\u4ece 2.1.x \u5347\u7ea7\u5230 2.2.0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.4/upgrade-from-2.1-to-2.2.md",sourceDirName:".",slug:"/upgrade-from-2.1-to-2.2",permalink:"/zh/docs/upgrade-from-2.1-to-2.2",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.6.4/upgrade-from-2.1-to-2.2.md",tags:[],version:"2.6.4",frontMatter:{title:"\u4ece 2.1 \u5347\u7ea7\u5230 2.2"},sidebar:"docs",previous:{title:"\u5347\u7ea7\u81f3 Chaos Mesh 2.0",permalink:"/zh/docs/upgrade-to-2.0"},next:{title:"Chaos Mesh Release Cycle",permalink:"/zh/docs/release-cycle"}},r={},d=[{value:"\u4f7f\u7528 Helm \u5347\u7ea7",id:"\u4f7f\u7528-helm-\u5347\u7ea7",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0/\u66f4\u65b0 Chaos Mesh Helm \u4ed3\u5e93",id:"\u7b2c-1-\u6b65\u6dfb\u52a0\u66f4\u65b0-chaos-mesh-helm-\u4ed3\u5e93",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u8fc1\u79fb <code>values.yaml</code> \u6587\u4ef6",id:"\u7b2c-2-\u6b65\u8fc1\u79fb-valuesyaml-\u6587\u4ef6",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u66f4\u65b0 CRD",id:"\u7b2c-3-\u6b65\u66f4\u65b0-crd",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u4f7f\u7528 <code>helm upgrade</code> \u5347\u7ea7 Chaos Mesh",id:"\u7b2c-4-\u6b65\u4f7f\u7528-helm-upgrade-\u5347\u7ea7-chaos-mesh",level:3},{value:"\u8be2\u95ee\u793e\u533a",id:"\u8be2\u95ee\u793e\u533a",level:2}];function i(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"\u5728 2.2.0 \u7248\u672c\u4e2d\uff0cHelm Charts \u505a\u4e86\u4e00\u4e9b\u6539\u53d8\u3002\u8fd9\u4e2a\u6587\u6863\u5c06\u5e2e\u52a9\u4f60\u4ece 2.1.x \u5347\u7ea7\u5230 2.2.0\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u4f7f\u7528-helm-\u5347\u7ea7",children:"\u4f7f\u7528 Helm \u5347\u7ea7"}),"\n",(0,n.jsx)(s.h3,{id:"\u7b2c-1-\u6b65\u6dfb\u52a0\u66f4\u65b0-chaos-mesh-helm-\u4ed3\u5e93",children:"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0/\u66f4\u65b0 Chaos Mesh Helm \u4ed3\u5e93"}),"\n",(0,n.jsx)(s.p,{children:"\u6dfb\u52a0 Chaos Mesh \u5230 Helm \u4ed3\u5e93\u5e76\u66f4\u65b0\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"helm repo add chaos-mesh https://charts.chaos-mesh.org\nhelm repo update\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"\u7b2c-2-\u6b65\u8fc1\u79fb-valuesyaml-\u6587\u4ef6",children:["\u7b2c 2 \u6b65\uff1a\u8fc1\u79fb ",(0,n.jsx)(s.code,{children:"values.yaml"})," \u6587\u4ef6"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u5728\u5b89\u88c5 Chaos Mesh \u7684\u65f6\u5019\u4f7f\u7528\u4e86\u4e00\u4e2a\u7279\u5b9a\u7684 ",(0,n.jsx)(s.code,{children:"values.yaml"}),"\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5e94\u7528\u4f60\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u5230 Chaos Mesh 2.2.0 \u7684 ",(0,n.jsx)(s.code,{children:"values.yaml"}),"\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\u83b7\u53d6\u9ed8\u8ba4\u7684 ",(0,n.jsx)(s.code,{children:"values.yaml"}),"\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"helm show values chaos-mesh/chaos-mesh --version 2.2.0 > values.yaml\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5982\u679c\u4f60\u4e0d\u719f\u6089\u8fd9\u4e9b\u6539\u53d8\u8fc7\u7684\u914d\u7f6e\uff0c\u4f60\u53ef\u80fd\u4e0d\u4f1a\u4f9d\u8d56\u8fd9\u4e9b\u7279\u5b9a\u7684\u529f\u80fd\uff0c\u5ffd\u7565\u4ed6\u4eec\u901a\u5e38\u662f\u5b89\u5168\u7684\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u8fd9\u91cc\u662f Helm Chart \u6539\u53d8\u7684\u5217\u8868\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u65b0\u914d\u7f6e\uff1a",(0,n.jsx)(s.code,{children:"chaosDaemon.mtls.enabled"})," \u8868\u793a\u5728 ",(0,n.jsx)(s.code,{children:"chaos-controller-manager"})," \u548c ",(0,n.jsx)(s.code,{children:"chaos-daemon"})," \u4e4b\u95f4\u4f7f\u7528 mtls\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u65b0\u914d\u7f6e\uff1a",(0,n.jsx)(s.code,{children:"webhook.caBundlePEM"})," \u8868\u793a\u7528\u4e8e webhook \u670d\u52a1\u7684 CA bundle\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u6539\u53d8\u7684\u503c\uff1a",(0,n.jsx)(s.code,{children:"dashboard.serviceAccount"})," \u4ece ",(0,n.jsx)(s.code,{children:"chaos-controller-manager"})," \u6539\u4e3a ",(0,n.jsx)(s.code,{children:"chaos-dashboard"}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u6539\u53d8\u7684\u503c\uff1a",(0,n.jsx)(s.code,{children:"webhook.FailurePolicy"})," \u4ece ",(0,n.jsx)(s.code,{children:"Ignore"})," \u6539\u4e3a ",(0,n.jsx)(s.code,{children:"Fail"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,n.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/v2.2.0/helm/chaos-mesh/README.md",children:"README"})," \u67e5\u770b Helm Chart \u914d\u7f6e\u7684\u8be6\u7ec6\u63cf\u8ff0\u3002"]})}),"\n",(0,n.jsx)(s.h3,{id:"\u7b2c-3-\u6b65\u66f4\u65b0-crd",children:"\u7b2c 3 \u6b65\uff1a\u66f4\u65b0 CRD"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u7684 ",(0,n.jsx)(s.code,{children:"Kubernetes >= 1.16"}),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0 Chaos Mesh CRD\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd.yaml\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u7684 ",(0,n.jsx)(s.code,{children:"Kubernetes <= 1.15"}),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0 Chaos Mesh CRD\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl replace -f https://mirrors.chaos-mesh.org/v2.2.0/crd-v1beta1.yaml\n"})}),"\n",(0,n.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,n.jsx)(s.p,{children:"Chaos Mesh 2.2.x \u5c06\u4f1a\u662f\u652f\u6301 Kubernetes < 1.19 \u7684\u6700\u540e\u4e00\u7cfb\u5217\u7248\u672c\u3002"})}),"\n",(0,n.jsxs)(s.h3,{id:"\u7b2c-4-\u6b65\u4f7f\u7528-helm-upgrade-\u5347\u7ea7-chaos-mesh",children:["\u7b2c 4 \u6b65\uff1a\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"helm upgrade"})," \u5347\u7ea7 Chaos Mesh"]}),"\n",(0,n.jsx)(s.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5347\u7ea7 Chaos Mesh \u5230 2.2.0\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"helm upgrade <release-name> chaos-mesh/chaos-mesh --namespace=<namespace> --version=2.2.0 <--other-required-flags>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u8be2\u95ee\u793e\u533a",children:"\u8be2\u95ee\u793e\u533a"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u5bf9\u5347\u7ea7 Chaos Mesh \u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u5728 ",(0,n.jsx)(s.a,{href:"https://cloud-native.slack.com/archives/C0193VAV272",children:"Slack Channel"}),"\uff0cGitHub ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues/new?assignees=&labels=&template=question.md",children:"Issues"})," \u548c ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/discussions/new",children:"Discussions"})," \u8054\u7cfb\u6211\u4eec\u3002"]})]})}function t(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},90073:(e,s,h)=>{h.d(s,{R:()=>a,x:()=>o});var n=h(79474);const c={},l=n.createContext(c);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);