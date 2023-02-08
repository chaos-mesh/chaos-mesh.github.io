"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8801],{89400:(e,a,t)=>{t.d(a,{Z:()=>A});var n=t(91262),p=t(52263),s=t(28084),l=t(90814),i=t(67294),r=t(81249),o=t.n(r),m=t(56871);const A=e=>{let{children:a,className:t="language-bash"}=e;const{siteConfig:r}=(0,p.Z)(),{versions:A}=(0,s.eZ)("docusaurus-plugin-content-docs");return i.createElement(n.Z,null,(()=>{const e=(0,m.p)(r,A),n="latest"===e?"":`--version ${(e=>{if(o().satisfies(e,">=2.0.3"))return e;const a=e.slice(0,3);return"v"+(parseFloat(a)-.7).toFixed(1)+e.slice(3)})(e)}`;return i.createElement(l.Z,{className:t},a.replace("--version latest",n).trim())}))}},56871:(e,a,t)=>{t.d(a,{Z:()=>o,p:()=>r});var n=t(91262),p=t(52263),s=t(28084),l=t(90814),i=t(67294);const r=(e,a)=>{const t=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";const p=a.find((e=>e.isLast)),s=a.find((e=>t.includes(e.name)));return s?s.name:p.name};const o=e=>{let{children:a,replaced:t="latest",isArchive:o=!1,className:m="language-bash"}=e;const{siteConfig:A}=(0,p.Z)(),{versions:d}=(0,s.eZ)("docusaurus-plugin-content-docs");return i.createElement(n.Z,null,(()=>{const e=r(A,d),n=o?a.replace(t,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?a:a.replace(t,"v"+e);return i.createElement(l.Z,{className:m},n)}))}},56101:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var n=t(87462),p=(t(67294),t(3905)),s=t(89400);const l={title:"\u7ba1\u7406\u7528\u6237\u6743\u9650"},i=void 0,r={unversionedId:"manage-user-permissions",id:"version-2.5.1/manage-user-permissions",title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u8fdb\u884c\u7528\u6237\u6743\u9650\u7ba1\u7406\uff0c\u5305\u62ec\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650\u3001\u7ba1\u7406\u4ee4\u724c\u4ee5\u53ca\u5f00\u542f/\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/manage-user-permissions.md",sourceDirName:".",slug:"/manage-user-permissions",permalink:"/zh/docs/manage-user-permissions",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/manage-user-permissions.md",tags:[],version:"2.5.1",frontMatter:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650"},sidebar:"docs",previous:{title:"\u5378\u8f7d Chaos Mesh",permalink:"/zh/docs/uninstallation"},next:{title:"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4",permalink:"/zh/docs/configure-enabled-namespace"}},o={},m=[{value:"\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650",id:"\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650",level:3},{value:"\u767b\u51fa\u4ee4\u724c",id:"\u767b\u51fa\u4ee4\u724c",level:3},{value:"\u5f00\u542f\u6216\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u529f\u80fd",id:"\u5f00\u542f\u6216\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u529f\u80fd",level:3}],A={toc:m};function d(e){let{components:a,...l}=e;return(0,p.kt)("wrapper",(0,n.Z)({},A,l,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u8fdb\u884c\u7528\u6237\u6743\u9650\u7ba1\u7406\uff0c\u5305\u62ec\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650\u3001\u7ba1\u7406\u4ee4\u724c\u4ee5\u53ca\u5f00\u542f/\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\u3002"),(0,p.kt)("p",null,"Chaos Mesh \u4f7f\u7528 Kubernetes \u539f\u751f\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/"},"RBAC")," \u529f\u80fd\u6765\u7ba1\u7406\u7528\u6237\u89d2\u8272\u548c\u6743\u9650\u3002\u7528\u6237\u5728\u521b\u5efa\u3001\u67e5\u770b\u3001\u7ba1\u7406\u6df7\u6c8c\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u62e5\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org")," \u8fd9\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"apiGroups")," \u4e0b\u6df7\u6c8c\u5b9e\u9a8c\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u76f8\u5e94\u6743\u9650\u3002"),(0,p.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh \u65f6\uff0c\u9ed8\u8ba4\u5f00\u542f\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\u3002\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u53ca\u5176\u4ed6\u5b89\u5168\u8981\u6c42\u8f83\u9ad8\u7684\u573a\u666f\uff0c\u5efa\u8bae\u4fdd\u6301\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\u5f00\u542f\u3002\u5982\u679c\u53ea\u662f\u60f3\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\uff0c\u5e0c\u671b\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u4ece\u800c\u5feb\u901f\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u76f4\u63a5\u53c2\u9605",(0,p.kt)("a",{parentName:"p",href:"#%E5%BC%80%E5%90%AF%E6%88%96%E5%85%B3%E9%97%AD%E6%9D%83%E9%99%90%E9%AA%8C%E8%AF%81%E5%8A%9F%E8%83%BD"},"\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\u7684\u5f00\u542f\u53ca\u5173\u95ed"),"\u90e8\u5206\u4e86\u89e3\u5982\u4f55\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u3002")),(0,p.kt)("h3",{id:"\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650"},"\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 Chaos Mesh Dashboard \u754c\u9762\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650\u3002\u5728\u8bbf\u95ee Dashboard \u65f6\u4f1a\u6709\u767b\u5f55\u7a97\u53e3\u5f39\u51fa\uff0c\u70b9\u51fb",(0,p.kt)("strong",{parentName:"p"},"\u201c\u70b9\u51fb\u8fd9\u91cc\u751f\u6210\u201d"),"\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Dashboard \u4ee4\u724c\u767b\u5f55 1",src:t(20045).Z,width:"1094",height:"1214"})),(0,p.kt)("p",null,"\u70b9\u51fb\u540e\uff0c\u5f39\u51fa\u7684\u7a97\u53e3\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Dashboard \u4ee4\u724c\u8f85\u52a9\u751f\u6210\u5668",src:t(95675).Z,width:"1572",height:"1526"})),(0,p.kt)("p",null,"\u9700\u5728\u5f39\u51fa\u7684\u7a97\u53e3\u4e0a\u6267\u884c\u4e0b\u9762\u7684\u64cd\u4f5c\u81f3\u7b2c 3 \u6b65\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9009\u62e9\u6743\u9650\u8303\u56f4"),(0,p.kt)("p",{parentName:"li"},"\u5982\u8981\u83b7\u53d6\u6574\u4e2a Kubernetes \u6df7\u6c8c\u5b9e\u9a8c\u7684\u76f8\u5e94\u6743\u9650\uff0c\u52fe\u9009",(0,p.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u8303\u56f4"),"\u65b9\u6846\u3002\u5982\u679c\u5728",(0,p.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\u4e0b\u62c9\u9009\u9879\u4e2d\u6307\u5b9a\u4e86 namespace\uff0c\u5219\u53ea\u83b7\u53d6\u8be5 namespace \u4e0b\u7684\u6743\u9650\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9009\u62e9\u89d2\u8272"),(0,p.kt)("p",{parentName:"li"},"\u76ee\u524d Chaos Mesh \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u89d2\u8272\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Manager\uff1a\u62e5\u6709\u6df7\u6c8c\u5b9e\u9a8c\u7684\u521b\u5efa\u3001\u67e5\u770b\u3001\u66f4\u65b0\u3001\u5220\u9664\u7b49\u6240\u6709\u6743\u9650\u3002"),(0,p.kt)("li",{parentName:"ul"},"Viewer\uff1a\u53ea\u62e5\u6709\u6df7\u6c8c\u5b9e\u9a8c\u7684\u67e5\u770b\u6743\u9650\u3002"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u751f\u6210 RBAC \u914d\u7f6e"),(0,p.kt)("p",{parentName:"li"},"\u5728\u786e\u5b9a\u4e86\u6240\u521b\u5efa\u6743\u9650\u7684\u8303\u56f4\u548c\u89d2\u8272\u540e\uff0cDashboard \u9875\u9762\u4e0a\u4f1a\u663e\u793a\u5bf9\u5e94\u7684 RBAC \u914d\u7f6e\u3002\u4f8b\u5982\uff0c ",(0,p.kt)("inlineCode",{parentName:"p"},"default")," namespace \u4e0b Manager \u89d2\u8272\u7684 RBAC \u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n  namespace: default\n  name: account-default-manager-vfmot\n\n---\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  namespace: default\n  name: role-default-manager-vfmot\nrules:\n- apiGroups: [""]\n  resources: ["pods", "namespaces"]\n  verbs: ["get", "watch", "list"]\n- apiGroups:\n  - chaos-mesh.org\n  resources: [ "*" ]\n  verbs: ["get", "list", "watch", "create", "delete", "patch", "update"]\n\n ---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: bind-default-manager-vfmot\n  namespace: default\nsubjects:\n- kind: ServiceAccount\n  name: account-default-manager-vfmot\n  namespace: default\nroleRef:\n  kind: Role\n  name: role-default-manager-vfmot\n  apiGroup: rbac.authorization.k8s.io\n')),(0,p.kt)("p",{parentName:"li"},"\u70b9\u51fb Dashboard \u7a97\u53e3\u4e2d RBAC \u914d\u7f6e\u53f3\u4e0a\u89d2\u7684",(0,p.kt)("strong",{parentName:"p"},"\u590d\u5236"),"\u5c06 RBAC \u914d\u7f6e\u5185\u5bb9\u590d\u5236\u5230\u526a\u5207\u677f\uff0c\u7136\u540e\u5199\u5165\u5230\u672c\u5730\u6587\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"rbac.yaml"),"\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650"),(0,p.kt)("p",{parentName:"li"},"\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f rbac.yaml\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u751f\u6210\u4ee4\u724c"),(0,p.kt)("p",{parentName:"li"},"\u590d\u5236 Dashboard \u4e2d\u7b2c 3 \u6b65\u201c\u6700\u540e\u83b7\u53d6\u4ee4\u724c\u201d\u4e0b\u7684\u547d\u4ee4\uff0c\u5e76\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe -n default secrets account-default-manager-vfmot\n")),(0,p.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-log"},"Name:         account-default-manager-vfmot-token-n4tg8\nNamespace:    default\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name: account-default-manager-vfmot\n              kubernetes.io/service-account.uid: b71b3bf4-cd5e-4efb-8bf6-ff9a55fd7e07\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1111 bytes\nnamespace:  7 bytes\ntoken:      eyJhbG...\n")),(0,p.kt)("p",{parentName:"li"},"\u590d\u5236\u4ee5\u4e0a\u8f93\u51fa\u4e2d\u7684 token \u7684\u6570\u636e\uff0c\u7528\u4e8e\u4e0b\u4e00\u6b65\u7684\u767b\u5f55\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4f7f\u7528\u521b\u5efa\u7684\u7528\u6237\u767b\u5f55 Chaos Mesh"),(0,p.kt)("p",{parentName:"li"},"\u70b9\u51fb Dashboard \u4ee4\u724c\u8f85\u52a9\u751f\u6210\u5668\u7a97\u53e3\u4e0a\u7684",(0,p.kt)("strong",{parentName:"p"},"\u5173\u95ed"),"\uff0c\u8fd4\u56de\u5230\u767b\u5f55\u7a97\u53e3\u3002\u5728",(0,p.kt)("strong",{parentName:"p"},"\u4ee4\u724c"),"\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u4e0a\u4e00\u6b65\u590d\u5236\u7684 token \u6570\u636e\uff0c\u5e76\u5728",(0,p.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u8f93\u5165\u6846\u4e2d\u7ed9\u8be5\u4ee4\u724c\u8f93\u5165\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u540d\u79f0\uff0c\u5efa\u8bae\u4f7f\u7528\u6743\u9650\u7684\u8303\u56f4\u548c\u89d2\u8272\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"default-manager"),"\u3002\u8f93\u5165\u5b8c\u6210\u540e\uff0c\u70b9\u51fb",(0,p.kt)("strong",{parentName:"p"},"\u63d0\u4ea4"),"\u8fdb\u884c\u767b\u5f55:"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"Dashboard \u4ee4\u724c\u767b\u5f55 2",src:t(40951).Z,width:"1096",height:"1214"})))),(0,p.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,p.kt)("ul",{parentName:"admonition"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u9700\u8981\u4fdd\u8bc1\u6267\u884c kubectl \u7684\u672c\u5730\u7528\u6237\u5177\u6709\u96c6\u7fa4\u7684\u7ba1\u7406\u6743\u9650\uff0c\u4ece\u800c\u53ef\u4ee5\u521b\u5efa\u7528\u6237\u3001\u7ed1\u5b9a\u4e0d\u540c\u7684\u6743\u9650\u3001\u5e76\u83b7\u53d6 token\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u90e8\u7f72 Chaos Mesh Dashboard\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u751f\u6210\u76f8\u5e94\u7684 RBAC \u914d\u7f6e\uff0c\u901a\u8fc7 kubectl \u521b\u5efa\u7528\u6237\u5e76\u7ed1\u5b9a\u6743\u9650\u3002")))),(0,p.kt)("h3",{id:"\u767b\u51fa\u4ee4\u724c"},"\u767b\u51fa\u4ee4\u724c"),(0,p.kt)("p",null,"\u5982\u8981\u4f7f\u7528\u53e6\u4e00\u4e2a\u4ee4\u724c\uff0c\u5728 Dashboard Web \u9875\u9762\u4e2d\u70b9\u51fb",(0,p.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Dashboard \u4ee4\u724c\u767b\u51fa",src:t(37695).Z,width:"1352",height:"340"})),(0,p.kt)("p",null,"\u5728\u9875\u9762\u7684\u6700\u4e0a\u65b9\uff0c\u4f60\u53ef\u4ee5\u770b\u5230",(0,p.kt)("strong",{parentName:"p"},"\u767b\u51fa"),"\u6309\u94ae\u3002\u70b9\u51fb\u8be5\u6309\u94ae\u5c31\u53ef\u4ee5\u767b\u51fa\u5f53\u524d\u4ee4\u724c\u3002"),(0,p.kt)("h3",{id:"\u5f00\u542f\u6216\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u529f\u80fd"},"\u5f00\u542f\u6216\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u529f\u80fd"),(0,p.kt)("p",null,"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh \u65f6\uff0c\u9ed8\u8ba4\u5f00\u542f\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\u3002\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u53ca\u5176\u4ed6\u5b89\u5168\u8981\u6c42\u8f83\u9ad8\u7684\u573a\u666f\uff0c\u5efa\u8bae\u90fd\u4fdd\u6301\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\u5f00\u542f\u3002\u5982\u679c\u53ea\u662f\u60f3\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\uff0c\u5e0c\u671b\u5173\u95ed\u6743\u9650\u9a8c\u8bc1\u4ece\u800c\u5feb\u901f\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u5728 Helm \u547d\u4ee4\u4e2d\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=false"),"\uff0c\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)(s.Z,{mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --version latest --set dashboard.securityMode=false"),(0,p.kt)("p",null,"\u5982\u679c\u60f3\u91cd\u65b0\u5f00\u542f\u6743\u9650\u9a8c\u8bc1\u529f\u80fd\uff0c\u518d\u91cd\u65b0\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"--set dashboard.securityMode=true")," \u5373\u53ef\u3002"))}d.isMDXComponent=!0},20045:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dashboard_login1-a8d9da72ee4f8f596a632c492e0400d3.png"},40951:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dashboard_login2-2f8b52522922dae155cc2f9a4a6f3081.png"},95675:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/token_helper-5d54d519f2e973a72cdeb919d7ea9f86.png"},37695:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABUgAAAFUCAMAAADBByZjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAF9UExURf////r6+vj4+PHx8fz8/PX19fv7+/39/f7+/vn5+ff39/T09Pb29u3t7e7u7uzs7PLy8mZmZvPz8yEhIfDw8O/v7+vr6+rq6unp6eiXl9MvL2hoaMXFxXd3d319fc/Pz3p6eoKCgnR0dIyMjL+/v9TU1NfX18HBwXBwcNnZ2YuLi3Nzc39/f52dnYWFhbm5uWpqaubm5sfHx+Tk5Ly8vJWVlZiYmKurq25ubrOzs9/f39HR0YiIiKqqqp+fn21tbZKSks3NzeXl5aGhoaSkpCIiIjk5OYaGhqenp4+Pj8rKyk1NTfPGxqmpqdQ0NJqamt3d3a2trSsrK+Dg4FZWVuympra2tjIyMrCwsPLCwuqbnO+zs+Li4vbV1dvb21xcXNhAQPvn5iYmJujo6EREREhISPvq6/bNzd9lZmBgYEBAQOfn59xXVy4uLv/+/vni4umUlNpLS+R9feJ0dO+3uPzv8O2trOaHh/ja2/76+v/7++uhov309P78/Pzy8khaFFsAACMOSURBVHja7N3pb9vmAcBhJrFz2O5qm+0WA23S3G1aL+uQzeiWpbmkplWKpcrhBA1qxHMCxEH+/6/jq8sSRVKUHfkQn+eDTdG6QBo/vC9FSVEEAAAAAAAAAAAAAAAAcAScBphisglwiNJq2wHsoac2GMBeYmpLAeylpbYRwJ5auof7PQVwxEwkpcIJCOveSqqgAGV7utuO2r6AmhaUVEQBxovpeCG1PQEtHRlSGQUYN6VlO2orAlpaqqQfIaMzAEfKR0jpx+ioHQFUI6olSjp+Rm12oFo53V1Iy0b0JMARVjamuwnpyIja/MCUBrV8SQs7OqKiw0/hGMARUxTTsiktCGlRRuUTmOakFqV0nJDmZ7SooWcAjoyimuanNDekJTqaqqh6AtPZ1FRLy5d0ZEcHMiqhwHTntDil5UKa3dHBjNrkwBTHtD+lo0paKqT9w9G8ih4HOJLyWlowKC0T0vzhaEZF7QVg+nqaTmlhScuOR7Mz2nsGcwBHVmZMd1Jabkw6sqNZGc1K6ALAEZKV07yUjhqTFoV0oKOpimb3cxbg0MsuaqqlBSUdJ6Tdjoa7iwAqppvSoZIWhzS3o2dsUqBqzpQraSqk+R0VUqB6IS1X0hEh7Ts8apMC1Qtpf0lLhrSgo0IKVDGkZUqaH9LOxL73cr1NClQxpN2Spif3ZUKa7qiQAtUMaU5J80KaPbHvnDtqkwJVc7xX0ozJ/eiQ7gxIu+fg26RA5UI6UNLcIWlBSAc7OmeTAlUzN1TSnJCWGZCG94PapEDlQtot6aghaYkB6XEhBaoa0uNlhqRZIc3o6IJNClTNQmFJxwxp+IgnmxSoXEgXhif3xSHNOPWp19G5hVmbFKia2YW5vpKezC1pNGpA2p7YCylQxZDuTO6LhqRFIe2b2M8KKVC9kM4OTO5HhzR3QNruqJACFQxpX0kLhqRRyQGpkALVDumZ8UOaHpAKKVDFkKaHpCVDOjyzD/c1b5MCVTPfKmn+3H50SHdeshdSoOIhPZ45ty8b0s7Mfl5IgeqFdD41tx8jpFkz+2WbFKia5ey5/Xgh7RuQCilQwZAODEnLh3RoZt8ekE4mpJ/6BhPgEId0aEg6OLcfK6TJgHRxEk/y3nbjf70LX3w9oP8wxVdFXtjZwGQsdoakZUOafRZpd2a/PJGQPqnHcf1899LDeEDf9f4cFzlnZwOTCulyb26feSZpfkgzXrOfTEh/DB3cfCGkwOEPaf+QdOyQdmb2kwjpyS9DCGu/lglp/WFiKVm4FRa2kpuF318JKTDBkObM7UeFNHWItDcgPTGRZ7laCyV90Atp41rwW0ZIt8LCnWThbljYSG4Vfj8XUmByTuwMSQsPkh5sSKPLzTC7fxUWHyRLS62V94ZDWquHwn6brF8NC41kTfh9SUiBQxrS9Fmkycw+O6T5Ry7LPs9rm3HteWvpenKrC3khdYwUOIiQLi4Pn0k6fki7h0gnFdLoZvOH9kIyXY9vCylwyELaf5B0vJAOvNYUZva7C+naxdHP9Gz71y/hVv/eCemxnWvMXugTXnCq9a94bmcDEwppb27f/2pTmZBmHyLdVUjX4vhiyef7aju50dP28vtwB6tz2VdM7jPetn+BfQ3pQvbL9uOEdDEvpMVC80qW9Iv1cN3L7Qszm50ar4dLt58OCMH9MLjqqY+mAiYU0sUxQpp5Gmnvjfa7C2mro/Fazl/vNzuSYeiTd62rftf929P+kF6IR/rM/gYmGdLZnfc2ZZ1IOrmQFnc0Wu1WsBFF82/Cwt9Odf92tSmkwDSFNLxof2L8kI7o6EBIo/f1uPZT38tLn15aaiQ2WlW90e95OIX//o1BJ+1vYCIhPdH3sv3+h3RURwdDGl1t3C28uzMLHVeSWzSXF3pO2dXAYQxp6jTS5V2EdGRHo5mQwRvdkJ76Y1j/Qy7lzeqv2NXAREO6nHEi6S5Dmn0YMu/Ep9EdbbvWDem9jDt6KKTAgfrsI4Z0cdyQlu3oeCHdepeyKaTApEO6OF0hvZ2+dV1IgUMY0sG32i/sMqTjT+3Pbm2F8eX2Vke48FsqpBvXU5pCCuxTSBeK3my/t5DmKlnSXkgTt8L7QjvL52tx/GExFVLHSIGjFNLUO0RPjB3SkiXtD+nZZBS63n6z50wjWf9TlAppcz2lJqTAhEN6IuM9ovsW0nIl7Q9pFL545OfWUjjHdPN9OqSOkQJHLqQD5+OP/y7MMiUdCOnjZITZDOfln28OfdhJCOm5aynrQgrsQ0jTZ+TvY0jLlLQT0tn2ZzuHr7Jb/yP6JgSy+XgopI6RApULaYmP0WuH9E+N9geMHguf+lT/JczY4xeRkAKVCOleP9i5FdLvt+L4+9bFv9S7N78QDYf0pysppvbA9Id05FeNhJDW6zsHAM53PtJ5YyYjpF5sAqoY0lGuda/+1/blb1ofTBrXrkaRqT0gpGWsda59sfVZpK++rXUuNy/NCylQjZDu0en2V4zU/hsuvD+32RfI9QfH0iFdWk35IKRA5UN6tT38vBlF82sbndHo1o0L7aX1W08GQ+oYKSCkw8Ih0cbj6PKPnS9pij+szkTRlUb7Qm3jRnJhKQjNfLOUEm60ERZu2d9AZUP6MK5dSsp5rpPR2neft1bPrHbC+nMUXR793Xc7b44CqFxI59pf1TTfOn90+86r3h8+vxNOEt0+LqSAkI5wuv3rWvzhq9S33y3cr8dfJL8fXx/tgf0NVDekXb+cGV4383e7ERBSACEVUkBIhRRASAGEFEBIhRQQUiEFEFIAIQUQUgAhFVIAIQUQUgAhBRBSIQUQUgAhBRBSACEVUgAhBRBSACEFEFIhBRBSACEFEFIAIRVSACEFEFIAIQUQUiEFEFIAIQUQUgAhFVIAIQUQUgAhBRBSIQUQUgAhBRBSACEVUkBIhRRASAGEFEBIhRQQUiEFEFIAIQUQUiEFhFRIAYQUQEgBhBRASIUUQEgBhBRASAGEVEgBhBRASAGEFEBIhRRASAGEFEBIAYRUSAGEFEBIAYQUQEiFFEBIAYQUQEgBhFRIAYQUQEgBhBRASIUUQEgBhBRASAGEVEgBIRVSACEFjpzXL5+t7LtnL18LKTAtXq4ckJdCCkyH31dWHr3d/4d9+2hl5ffqhfST85/4l4MpHI8+e3swj/z22STGpAcU0puNxvXTQ2tn5uaORdE/371b6665E8cN/3QwZV6vrLw9qMd+u7Ly8Y+THkxIf9iM4/jrk+nVSTZ/jKJv4/hSd00jjn/2XwdTNyB9dHAP/mgCQ9IDCel/anGwMVsQ0ld3EzeTa63dbbnnnw+mxbODG5CGIemzqQjp7aSjb84ljWx8kh/SC/GgW/75YFqsrEzZox9ASP+RZLF+NlQz3n4ipCCkQjp2SG8lVVz/V7JwPxmY1q8UhPTpxYsXk+skP58KKQipkHbNfhk62s7ni6SSzR/yQxr+1Ixryc8HQgpCKqQdl+v/Z+/MH5pm0jgetVAUFR4DaNNSSqSlXGnLUVuP0srVIpZLLlFEQWAVULxdd/dv30lm0iZtqvDu+iLk+/mhmZmkM02TfPLMTA9rh35Yn7x/sQGRAgCRQqTHFem1qGxMMXme9DYaBYMHLP/qfp2zSPNNTU1MpOwxCZECAJFCpDrzK7pHU1cl5sWVcY9eFHmkF00ul0S68OYNk+vKmzAmmwCASCHSSp690H24MC9JDX49td2ll3oyC8ZHSueESE1yECkAEClEWkHaEOYjPjwa9usfyX9hZN7qWp145CDSJ6oaZerFrD0AEClEyt2pT9HPlr4VGmZ9+pXrPK3PQAWESF+EOXV8smmDf9cek00AQKQQKSMqR29Zsp6RV6VPPl29T8ayIMsps4yLNGZMP0GkAECkEKnOw+nKAkvaazz2ynKfXaRJ/gMmECkAEClEylltd2TQIs92S3qCwR8nIFIAXC7SGj9zsvPp087f0PqfJNKg7Mi4Zf0bQ60avmsPAEQqST/eC77tHX2XPn98V7XFjKLM/K7Wz6hIVbNkknXqXzNYJLrymjOAkw8A14l0UxE8V5Slz/vK5mdzzef19R2rSHfW1z+7RKTdI5VkF2T5oPQd0ZRFpAxvSJYXNq4lEnU48QBwpUg/7ukUlSPpo7K5rxTL/7fEzLpmFekak61LRFqFxy/LE92l7AtZ9mcyQSHSOZadiOmFYzjxAHCjSP/zQf9XkC+6K98VFaW4Jh1+WIdIHTwq58v5bWOmPsBF2vVKll+NSRApAG4V6T9ZX35Xel5UPnKdfmQeNYdEXS/Se2bigr9iEmlFlnMlkV7ell+HJYgUAPdGpDObSvHHkVI0/q3uq6K8Zx79cAiRMlbl7fxVPdH6hHk0ZPkv0cssPyREuj05uSCvTDJYYHqgLydbcPoB4C6RSi/39ZmmvSWdH0U9/fUQXXvGlv7LeQdTQ9LcG9nyd6E6c6wv7xEiPaie3L+O0w8Al4n0+1PFAjPppvkBKJeLtOOJYcUJYqqcyNhWpfkX6yFSACBSncP1I2bPT/smP96z7Pvvpkg/PGV8KC/dNUYa7nvFzfgqbV8xJcuqKdKOnMkjWdaMhAenHwBuEukM06iyb/sM/i4rOtoVIq3EbbP2TdlJIyptt/8d8wtZHpBKk02WUkw2AeBCkT4vKkdLdtb+9UHZNKaevm0KWHdf8M1lIpWkC3cMlR4MWMLMGyxQ7YFIAYBIBevr/35nDzr3JOmTPfB04VdErdT1Gh387aZSybwQKEQKAEQqYCLd3zPZ1EXKOTw8rBRpqchNIpWkRWIi/Uc5PyrLQYgUAIjULtJPpcxeWaRPFaVSpIry1I0ilaTu7QXLj5K+fW307CFSACBSiPQE1IetucaCsfCw2iylsUwmghMPANeKVCmaKBApAAD8JZHaJ5sgUgAAOJHKvj9f+/pc8OXrzDuIFAAATqqydUURP5x3uK8cfYdIAQDgpCo7/KgUeRy6JL5db4r0pYEuWp6CSAEAEGl1NKrzpajsG4lN5chYvhMirQYiBQBApBUUnWypLEGkAABwbJE6Yop0twKIFAAAkZ6E3eoqfL5diBQAAJGe1dYhUgAARAqRAgAgUogUAACRQqQQKQAAIoVIAQAQKUQKAIBIIVIAAEQKkUKkAACIFCIFAECkECkAACKFSAEAEClEinMEAACRQqQAgN/Lkm/n9Brf8S1BpACAM8+ab+b0Gp/xrUGkAIAzz0vf6YWkOz7fy/Mt0vpETxPOMQDcEJIunZJJd5Z+Q0B6GiK9TfedNboaJ4r/8umDRImzfhb104g120w07LBVQ9vV2lXcaCinvW0tDdbqaj+r8fpv2qMr9XADOAnrPt/MKah0Z8bnW/8N9f5BIh0jomjofIv0vpo9pkib81OjRH2FDeeKlqlTuLM+oPnZDSgbNl2apbx1y5yqRngqUogSqSPLF43cPVUt1b2qqnVVTcyp6nQp05YOzYlkt6qWX21SNQ5mJB5t05eqmnd4sbaaTsKgamUY9jlfMekpsSada5E+I5rqaZCOLdJEIHDhzJ08QZo6nkgj7SSY9TpVlCV/o5G4pJU25EGhd5Q6rVtOE4WN8qS5YadxkHJEEXObx0SNVU30EAV46mKglz3NFOkw0/ZW+WAG9UWMqENfEmUcXmy5phrUBQJtTuXdZGUZ8jlXvFxb+vsturT2UjrfIu0S1+JxRcqu50vnVqQdRKOxuQuXwlNEdxxvO2NcTY0hopHBt3e7Oomy/DaUy2w4iTTPNuhprN+KpSi0dRKRbmVGDY9ZREq9DXaRNj9O1/8PImU3UceQtaXHJNxH8SG4B/yp/DkifUDxY0WYbhCpN0jtizxVINr4SYVjRGlDaheTNWwlRHqLKMntt+g3Wj+2SNkdri+ftouUuuwiNfk/i7TMKlEMVyuASIUhKkRqmaIYp6h1w4a/KFJPVaKqJaeCivaqmq+v0Yr0i1Z+JtIGr12kHmuX1jRPK1mGPL2V3fyHVFKyp536vLVFOlj2ZsbQ5rFF2p3s8OhbW7v2NNr0S5HWNziL1OEIVYi0+uBvWIJgANwt0o5sNN45f6Ek0mv5dooWeGxT0PrIr2macT2/zd+Px4P5Zv4sTeNTzXOatmiKtEXT2ok6tWS59hua1tMy1u9vTzJv3Hww5U9N5cx14Uy/P9U5zDUX02alSLKdQmOmPGztMcHFeuOp291SRhNx4lwySqERrp2IprUO3vezXbg4MmWPFS37M6xpYhixoI05i7S7kPL3L3tNkV7K9FN7UlTYSWpJydmoGPJsnQ/5/f35G0YmrRWMBdFdc8OYMOOItuogUrZ2UZQEgsEhJ5HOayW6KvVnFymrLGsTaVjTmmwifcje4NHO9EWrSGsdoRGtnyikaez9n9W6L9zR4tHCoO2dvRiiFD4YByBSnWUx1REUIm3r4wUj+oRxVEwo6EHmNB+To9RD47InuskVxq98Q6RNYnNLONRCNK4ahfHIoqg6zQOceXOW5TIfLAwN+418+xWuGlt70pUszw6E6LE5YGmwKoyS16syiges+2fdnw2z7UV7l7Qk0sKA2FiIdFa8dEMgDXEaqz5SYvopGuFd+j5u3P7ynYTogb4M0ayDSMNirVWNFSJNlud15n8u0sVxc50QqdlNMEVqzhKpbRaR1jpCIbFxq3GH6eSZB9YAdPxXYwMAuEWk7IIODW5F5pnDDJk0BikYbtya513XrcQspRKJhNe45AvTjXMPRqnfW0uknkRilagncdMmUurvejgUG6XUaLRra2tQpbhxHbMmxsNX7s2yBRcp6yd2J7p7hRor2tOv2tsdN3O6VgyR3h2l7N2riyNEOW4U6pvtYsJrDkZzlv2z709IGI69yutOImUSzg2lQ3yXmvU603NDXSnuoxZTw9agTKNooK15mnXgW8oiHbUOtoqMs0gvB4nuXPmpSBfvGeT6KP7sFyK9wmLvS7VFuuinqcHWyLifOr02kToeoVsJdk+KGceevTHxdE8i0Gcz5z2yjykD4FqRNvRT6JK45qb4JcgDwjTFr9vGSGeF0MaIntUSqcMYKbtM1Vaxgo+4dRF16wGpygXKDBMVIi3oDXiD/HNCFe01+SlbL4YSdZE2q+Iq/i975/aUuLLF4YAKGVCkKXWoCqCAOChecLYoXnHUKsWqXXiKqql5oHjxcf7/99O3dNKdBKKeffYgv+9ltqLppLE/Vq9e3btO9m1uFNGMzPgq9OehAv0tlLkXmiMVpqRtPQmRtrmmRg4PcschAdgBaRfZv8Uevysh0ow/gepePFyk1ohauvmwk44WqeRMdNtEkTK3nUaLlD79X5aXT/BEGv4OeTnSfeJcyui+okLSQo208hiqACIVcZ/MOO7x8U7HjsiDJdti8qtE2tgc+TNrbxCpaGCFyEGYE7PZ5OamCArPCVnlIm2L6vMn0gtp7z9u2jHtcGWduDHlDn+BGuUy7PmM53kVqtzw1rd1kco0sVh1ysvYmOnSyfA2ApVgLVeZ9+RQiXRVK66sk60JIrVyPGXReribLFKqyIE1VaT0TnmAHi7Se9LjXbx+fa2LNPwd8ou0o/JA6u5OYxbGAfD5RUqHX8Ed71fCanLsVkXAqK/ai3G3PV2ku+ecvPvjVICq9LKsJzGfRZz0RLpqsCaD7Z2qxKvDR3ndrW9f4qP9h4hbA5jP88jn9ifEKYSKVPqiz63olT9t8qu7Ih21BDZ3jxTLxmVDiXRDE2l/skhppPvAU9EHqQkiXWmSSjKGSLMt0spGiZS2eePbKuWJNOIdCoo0530C0WvfY6ACiNQf/imR3hCnLmiSviHS16f6Vq/djiXSc7E28Zc3TG2xVuIX6c7BVbnddqJEqrVXFbejRLpFWvJGubWiRGo+zzaf2++5q9sxRTrkCm3IGe+FXIURGYWi/0JCpFltal/lF5sgUstK/Dilj9lPRop08UokSKeKlH3nIEqkiQ4h7f5JLkKkgXcoKFLbcX9kpUu2MhioACKV87MtTaS3vr1/VU2k9gNbQa9UK0IvU0TaeOKsTximS49sSluploUDTZEa7dVUGCtE2vbd6FO0SM3nyTt0bl9wyPc3iXSFP8SdnOonXygdLlIjenYXm9r+VZiusPYkkbJYbyCqDcJFeubZc4pI2Yy7EbVqbx9VWEdcbb5XpOpD0KafX7sYpwAiFTyIka9EOiC1Hy47mkh/0WG2EXtqb87Mg8M0XSfdb0vRU3ujvaoay0KkNdJXNzqKFmngeW6pT0uknXlrRPrM15AGvo5jIi3x6qCASPd9++qXZHg6RaRMTU0R4za86QJZdlMLB1ZMkS40STkTIVLK8c89R34gvCcibctY+yRijywAcynSI0ISeo7USRmmFSK1e3IIeSItfkikF2JZJEqkZnsdMUH25Ui1dffoHKnxPLS1145Y2v5+fqLirP5EkV4KX1H1Z3WR7noi84v0zHc3JWlGLtLc+bl84RvfY5q9ulK7ULf5L41k/kBIX3zKrTbJfjKuSFmDD9EiZZd7FN9+h0jdLjlukypO6AMQqcumWnoVIv1hBkquSO/cQbUuxt2lO4TfK1LqDXFX30NFarZ3Rpx1v0ifSC8fQ6SB5/nSJb96QuH3xBHbId1ypaBIj1RomBfy+6WLdEH9yPPgyRPp0Isg7QrpppRI11Up6jUhSzzCq1ueCekjLLaV9BbL4sXFR9K7s2KLlKUzmmEiXbq+fnEvcfI+kZbEn8vioUrZAgCRWlaqTB55DeNum09vM2VSEaFG40gT6VdZobjYEaPwWMYmi31dpN9kpeZUkZbkC+tboTlSs73f7gLOkagjHaoo66gxQaSB57FuSJt0E1I9JRm2iv8IirTFd0DmeyLNmdonPfmxY59ykdJAucb3ZaWqXO9SpCxRKZ/6zFWtmNo35e1k6QRcyNzdzp6iukzztp2h6ohtmSr11a9OF+lKlxCR+jYi0i2p97y48FSRvrrR8T4p8xWqxSqpJSycVQIgUhMaGPaLVva5KQvy6dCsUiWtnzgibFM50jJxjlYzm7dyA+HiFmntWokx22nkF2mDjsaUHUOk1Izl0tJ6iS1/7IbkSI32rAEh1wvWxk93ZxONEgd5yz6+J+1Vv0iTN7cjPSTVnodF0FLB2RrplhJW5qcj56lBkZL9y2T6peIe9XTRpjHpKG0tjfeISC28OoRt3891iDPyiXStRefXO5lCg97+YdonUnr7t0XLHh5KgebKpP1UtK30uC/D3dUu6W4XLHuDxrxXtniC0yXBciyRsvc0VKRU6mcjKz28FXOAqSJN0L+NrGXznQqVi7S11hcCfXHI/u+iC0tkLwxO+W610p641HV9B4MYzJNIFwdscZxOBveFSFm0QZpsn7UekXIBEYf6Q9YPPrPfo19XdJEmqUJ6tRgi5Q2xzfV1UTNvitRsL8c2cDZ5e1ykmQ7TBW2tu6NFpD+MM+OM57HssprtN9jSP9td3hxa4SLttInTI96M/oVtSu+xiI+cCT+W6DVqFYd0G74cqWUVK26tQF1WbgqRpuus23pK5tYx+0GnxjpiIA8uZVWlTXZrVyvs60ev7qAbT6T2XrhIE+wkgVrX7YupImVJAqf3F+uYGg3jWSfefhGfYT5aonHeRU1x6OKI6BlsAD67SC37nMrBqa8+SZFa40c6iLv9Zz1HSscdO7eidWRXZcXUjxr/+k4XqdWgZmrGEaldYheoNLLClIE6UrO9zID6p3eTdNz1Yh7M1k6Heo50pdbWD9HUn4dlJ9W5dl9Z+Sbp3cvq/KBIG2N2E2XPXPlzdkiJUzlVm3qO6/QazY5IYiqRWstH/DST/ZK7JiNX7e1v/PsV9fuL26f8knsql1t4YHJ3Dk+EWA/fLFKr2A4VKTv+ij3wYczyJ2ujymuBWcccX1HXN6/TVqhIh03+cWYdiBxIouLg3HwwXyJl42VknAJ6dxd6ymThZUX7OjcOO3o0NRoux3tKe2WcnfS62V569Ntm6ztqe2fyYiX4W+lk4Dva85z6q+XtjXFu8omayRej8xYuzO46Du+uhZfhUmjedjgybnFhvKGfWZp9GSf/mb+s1HC0HP+n7SJ/i/knTGL4OuGysvbDfeBljGHwOUSazCxzk36W/6+9Lcfm5gcrwfPtiWfbgxD2ccwTmGWRMo8uZ5IQKeXXFp+lLlVI+UPB2t++A4wARAog0iiRJnSR5j+DSBOPpHtf2vxZizjmKR7j7Q4xtocCiBR8YpHmdZEm5lykVupGHkX/kUPZ2fLUAf68IFIAkU4QaVoTaeZTidSyLk4GVwdH+Y9c4rZbPUnjz+utPHWwCA9mXKQZTaTpORYpAAD8WyItQKQAgHkVaeF/KNIFdCkAYN5Y+IBIQyvy0aUAgLkUaaAeHyIFAIB/QaRytQldCgCYP5HKtSaIFAAA/i8itcNEqlXko0sBAHMrUm2HaMqsx48n0gJECgCYT5EW3idS/6klGYgUAACRquqn8DNLokSqFZLyuT26FAAwdyLN+xbto7faTxWpSpKiSwEAcylSMbN/u0jDkqToUgDA/Ik0PEUKkQIAwD8sUmPZ3kuSoksBAPOGmSKNKCOdLlI3JEWXAgDmTqQFPUX6BpGq1aYvECkAACIVIv0SstZkijQqSarm9uhSAMD8iTR0Zm+mSOOJlIWk6FIAwLxR8Dbav02kbpJUryTNQqQAgPkTaTZYRRqSIp0sUn9Iii4FAMyfSI2A9A0iDVu3z6JLAQDzRjZ0zf7tIlUhKboUADB3IlUB6XtFaszt0aUAgPkVqX9mH0ekeiWpO7eXZ0BR1tbW19dzuRXOKmWD8tWlCAAAfzxKWcxfzGPCaLkc1dvaGjOdu6lJm9kbVaRTRSrn9n6TFpRJ15hJfSrlLvXZFAAA/niEt1b9Gs0xjboeLRgeDc7s44g0GJJKk+pBqXSplCkAAMwKqz6LauGo8GhYQDpFpDFC0oBJlUpdmQIAwCzhOSw3zaMTAtKJIvUt3AdNKlXqcyl8CgCYPYNKiwqNhnt0WkA6QaT+kFSs3EuT+lUa4lIAAJglpEV9GlUeZSv2WkA6VaRRIalvcq+ZlKlUuRQ2BQDMpkOVRYVGdY/6J/bRAWk8keom1VXKXeraFAAAZgnhrzVDo7pH3yvSiSbVVCpcKmUKoQIAZkmgSqLSokqjsTwaR6Tm5N41qQpKXZW6MtV8CgAAfzZKXEpleS0c5R4NTOwjRBonJDVN6qrUc6lfpwAAMBP4DZbP6+Go5tFpAakVKyR1TaqpNOhSAACYRVyL+jUa6tG3idQrgVIm9QelTKWeS2FTAMBMO1RZVGrUDUc1jxoBaZRIw0NSw6SmSpVMYVQAwKz5U0nU0Kjp0YkBabRIo0zqUyl3qZSp4VMAAPjzUfrK+iwqNTrNo/FE6pvceyaVQel/27tjHIdhGAqi3kWKFL7/eRfwKhQpkZKcKlRmDvHwWVEoLZgqTomIElUIq6adMketo+1hH0M6kVSNUkVp1ZSIKF0Gs7OdoyuOziB1JL0o7S2FVCLKymejqJqj2tFlSKeSVkovS11MiYiydYqimtE1RztIY0kNpdpSOCWi7IQaRQ2jC45OIBVJzSj9p7RYWjXFVCLKpqc2tCgqjMoc7R29B6mVtFJaLBVMHVGJiD47A9hvo2ido46jM0g9SV1KBdOGUyKiVAll2jfL6NjR5/W6eVHSnlKFKRFR4qxsldEFR4/DgdSVVFPaWIqnRLSLoKKoZnRlj84gNaO0UOpYSkSUvx/NqDtHFyENJG0oBVMi2hJRy+jU0QjSXlJLqcIUToloI0IF0ZDRztEXpCuSFkqrpRpTTCWizHq2iBZFHUZjR3tIPUlflCpLPU2JiPKlXXvEjPaOjiB1JRVKLaaQSkT5+bSI+ow6jlZIPUl9SpWlDqZERHl7TBT1GFWOupAGklpMAZWINgI0RjRwdAppLGmPKRHRBo3Ue74H6ZhSOCWi7yA0ZtRA+rakoEpE2+J509EQ0luUEhFtWSzksSgplhIRiq44OpYUSokIRueOjiHFUiJC0RDSP+J9rCChZDayAAAAAElFTkSuQmCC"}}]);