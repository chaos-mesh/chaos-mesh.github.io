"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[18436],{89400:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(91262),s=t(52263),o=t(28084),l=t(90814),i=t(67294),r=t(81249),h=t.n(r),c=t(56871);const m=e=>{let{children:a,className:t="language-bash"}=e;const{siteConfig:r}=(0,s.Z)(),{versions:m}=(0,o.eZ)("docusaurus-plugin-content-docs");return i.createElement(n.Z,null,(()=>{const e=(0,c.p)(r,m),n="latest"===e?"":`--version ${(e=>{if(h().satisfies(e,">=2.0.3"))return e;const a=e.slice(0,3);return"v"+(parseFloat(a)-.7).toFixed(1)+e.slice(3)})(e)}`;return i.createElement(l.Z,{className:t},a.replace("--version latest",n).trim())}))}},56871:(e,a,t)=>{t.d(a,{Z:()=>h,p:()=>r});var n=t(91262),s=t(52263),o=t(28084),l=t(90814),i=t(67294);const r=(e,a)=>{const t=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";const s=a.find((e=>e.isLast)),o=a.find((e=>t.includes(e.name)));return o?o.name:s.name};const h=e=>{let{children:a,replaced:t="latest",isArchive:h=!1,className:c="language-bash"}=e;const{siteConfig:m}=(0,s.Z)(),{versions:d}=(0,o.eZ)("docusaurus-plugin-content-docs");return i.createElement(n.Z,null,(()=>{const e=r(m,d),n=h?a.replace(t,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?a:a.replace(t,"v"+e);return i.createElement(l.Z,{className:c},n)}))}},13396:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=t(87462),s=(t(67294),t(3905));const o={},l=void 0,i={unversionedId:"common/quick-run",id:"common/quick-run",title:"quick-run",description:"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/zh/docs/next/common/quick-run",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md",tags:[],version:"current",frontMatter:{}},r={},h=[],c={toc:h};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002"),(0,s.kt)("p",null,"\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/next/run-a-chaos-experiment"},"\u8fd0\u884c\u8bd5\u9a8c"),"\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002"))}m.isMDXComponent=!0},85769:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=t(87462),s=(t(67294),t(3905));const o={},l=void 0,i={unversionedId:"common/verify-installation",id:"common/verify-installation",title:"verify-installation",description:"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/zh/docs/next/common/verify-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md",tags:[],version:"current",frontMatter:{}},r={},h=[],c={toc:h};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n chaos-mesh\n")),(0,s.kt)("p",null,"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"STATUS")," \u72b6\u6001\u4e0d\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"))),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u679c\u624b\u52a8\u5173\u95ed\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"leader-election"),"\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," \u5e94\u8be5\u53ea\u6709 1 \u4e2a\u5b9e\u4f8b\u3002"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"))))}m.isMDXComponent=!0},51266:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>h,metadata:()=>m,toc:()=>p});var n=t(87462),s=(t(67294),t(3905)),o=t(56871),l=t(89400),i=t(85769),r=t(13396);const h={title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09"},c=void 0,m={unversionedId:"production-installation-using-helm",id:"production-installation-using-helm",title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09",description:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u5b89\u88c5 Chaos Mesh\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/production-installation-using-helm.md",sourceDirName:".",slug:"/production-installation-using-helm",permalink:"/zh/docs/next/production-installation-using-helm",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/production-installation-using-helm.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09"},sidebar:"docs",previous:{title:"\u5feb\u901f\u8bd5\u7528\uff08\u6d4b\u8bd5\u63a8\u8350\uff09",permalink:"/zh/docs/next/quick-start"},next:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/docs/next/offline-installation"}},d={},p=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u4f7f\u7528-helm-\u5b89\u88c5",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93",id:"\u7b2c-1-\u6b65\u6dfb\u52a0-chaos-mesh-\u4ed3\u5e93",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684 Chaos Mesh \u7248\u672c",id:"\u7b2c-2-\u6b65\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684-chaos-mesh-\u7248\u672c",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u521b\u5efa\u5b89\u88c5 Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4",id:"\u7b2c-3-\u6b65\u521b\u5efa\u5b89\u88c5-chaos-mesh-\u7684\u547d\u540d\u7a7a\u95f4",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5",id:"\u7b2c-4-\u6b65\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5",level:3},{value:"Docker",id:"docker",level:4},{value:"containerd",id:"containerd",level:4},{value:"K3s",id:"k3s",level:4},{value:"CRI-O",id:"cri-o",level:4},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",level:2},{value:"\u8fd0\u884c Chaos \u5b9e\u9a8c",id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c",level:2},{value:"\u5347\u7ea7 Chaos Mesh",id:"\u5347\u7ea7-chaos-mesh",level:2},{value:"\u5378\u8f7d Chaos Mesh",id:"\u5378\u8f7d-chaos-mesh",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh",id:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684-chaos-mesh",level:3},{value:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",id:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",level:3},{value:"\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e",id:"\u5982\u4f55\u6301\u4e45\u5316-chaos-dashboard-\u6570\u636e",level:3}],u={toc:p};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u5b89\u88c5 Chaos Mesh\u3002"),(0,s.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,s.kt)("p",null,"\u5728\u5b89\u88c5\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm"),"\u3002"),(0,s.kt)("p",null,"\u5982\u8981\u67e5\u770b Helm \u662f\u5426\u5df2\u7ecf\u5b89\u88c5\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,s.kt)("p",null,"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion:"go1.16.3"}\n')),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u4e00\u81f4\uff0c\u8868\u793a Helm \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u672c\u6587\u4e2d\u7684\u547d\u4ee4\u5c06\u4f1a\u4f7f\u7528 Helm v3 \u6765\u64cd\u4f5c Chaos Mesh\u3002\u5982\u679c\u4f60\u7684\u73af\u5883\u4e2d Helm \u7684\u7248\u672c\u4e3a v2\uff0c\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/v2_v3_migration/"},"\u5c06 Helm v2 \u8fc1\u79fb\u5230 v3"),"\u6216\u6309\u7167 v2 \u7684\u683c\u5f0f\u8fdb\u884c\u4fee\u6539\u3002")),(0,s.kt)("h2",{id:"\u4f7f\u7528-helm-\u5b89\u88c5"},"\u4f7f\u7528 Helm \u5b89\u88c5"),(0,s.kt)("h3",{id:"\u7b2c-1-\u6b65\u6dfb\u52a0-chaos-mesh-\u4ed3\u5e93"},"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93"),(0,s.kt)("p",null,"\u5728 Helm \u4ed3\u5e93\u4e2d\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,s.kt)("h3",{id:"\u7b2c-2-\u6b65\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684-chaos-mesh-\u7248\u672c"},"\u7b2c 2 \u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684 Chaos Mesh \u7248\u672c"),(0,s.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u53ef\u4ee5\u5b89\u88c5\u7684 charts\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u8f93\u51fa\u6700\u65b0\u53d1\u5e03\u7684 chart\uff0c\u5982\u9700\u5b89\u88c5\u5386\u53f2\u7248\u672c\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u6240\u6709\u7684\u7248\u672c\uff1a"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh -l\n"))),(0,s.kt)("p",null,"\u5728\u4e0a\u8ff0\u547d\u4ee4\u5b8c\u6210\u540e\uff0c\u63a5\u4e0b\u6765\u5f00\u59cb\u5b89\u88c5 Chaos Mesh\u3002"),(0,s.kt)("h3",{id:"\u7b2c-3-\u6b65\u521b\u5efa\u5b89\u88c5-chaos-mesh-\u7684\u547d\u540d\u7a7a\u95f4"},"\u7b2c 3 \u6b65\uff1a\u521b\u5efa\u5b89\u88c5 Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4"),(0,s.kt)("p",null,"\u63a8\u8350\u5c06 Chaos Mesh \u5b89\u88c5\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u547d\u540d\u7a7a\u95f4\u5b89\u88c5 Chaos Mesh\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-mesh\n")),(0,s.kt)("h3",{id:"\u7b2c-4-\u6b65\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"},"\u7b2c 4 \u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6b63\u5728\u5b89\u88c5\u5728 Kubernetes v1.15\uff08\u6216\u66f4\u4f4e\u7248\u672c\uff09\u4e2d\u5b89\u88c5 Chaos Mesh\uff0c\u8bf7\u624b\u52a8\u5b89\u88c5 CRD\u3002 \u5177\u4f53\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/next/faqs#q-failed-to-install-chaos-mesh-with-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1"},"FAQ"),"\u3002")),(0,s.kt)("p",null,"\u7531\u4e8e\u4e0d\u540c\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u5b88\u62a4\u8fdb\u7a0b\u6240\u76d1\u542c\u7684 socket path \u4e0d\u540c\uff0c\u5728\u5b89\u88c5\u65f6\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684\u503c\uff0c\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u6765\u8fd0\u884c\u5982\u4e0b\u7684\u5b89\u88c5\u547d\u4ee4\u3002"),(0,s.kt)("h4",{id:"docker"},"Docker"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4\u4e3a /var/run/docker.sock\nhelm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh\n")),(0,s.kt)("h4",{id:"containerd"},"containerd"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),(0,s.kt)("h4",{id:"k3s"},"K3s"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),(0,s.kt)("h4",{id:"cri-o"},"CRI-O"),(0,s.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=crio --set chaosDaemon.socketPath=/var/run/crio/crio.sock --version latest"),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u8981\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"helm install")," \u540e\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"--version xxx")," \u53c2\u6570\uff0c\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"--version v2.0.0"),"\u3002")),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u53ef\u7528\u6027\uff0cChaos Mesh \u9ed8\u8ba4\u5f00\u542f\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"leader-election")," \u7279\u6027\u3002\u5982\u679c\u4e0d\u9700\u8981\u8fd9\u4e2a\u7279\u6027\uff0c\u8bf7\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"--set controllerManager.leaderElection.enabled=false")," \u624b\u52a8\u5173\u95ed\u8be5\u7279\u6027\u3002")),(0,s.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,s.kt)(i.default,{mdxType:"VerifyInstallation"}),(0,s.kt)("h2",{id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c"},"\u8fd0\u884c Chaos \u5b9e\u9a8c"),(0,s.kt)(r.default,{mdxType:"QuickRun"}),(0,s.kt)("h2",{id:"\u5347\u7ea7-chaos-mesh"},"\u5347\u7ea7 Chaos Mesh"),(0,s.kt)("p",null,"\u5982\u8981\u5347\u7ea7 Chaos Mesh\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh\n")),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u8981\u5347\u7ea7\u81f3\u7279\u5b9a\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u540e\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"--version xxx")," \u53c2\u6570\uff0c\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"--version v2.0.0"),"\u3002")),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u5728\u975e Docker \u73af\u5883\u4e0b\u8fdb\u884c\u5347\u7ea7\uff0c\u9700\u5982",(0,s.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%8E%AF%E5%A2%83%E4%B8%8B%E5%AE%89%E8%A3%85"},"\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"),"\u6240\u8ff0\u6dfb\u52a0\u76f8\u5e94\u7684\u53c2\u6570\u3002")),(0,s.kt)("p",null,"\u5982\u8981\u4fee\u6539\u914d\u7f6e\uff0c\u8bf7\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5982\u4e0b\u547d\u4ee4\u4f1a\u5347\u7ea7\u5e76\u5378\u8f7d ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-dashboard"),"\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set dashboard.create=false\n")),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u503c\u53ca\u5176\u76f8\u5173\u7684\u7528\u6cd5\uff0c\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"\u6240\u6709\u7684\u503c"),"\u3002")),(0,s.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0cHelm \u5728\u5347\u7ea7\u65f6\u4e0d\u4f1a\u5e94\u7528\u6700\u65b0\u7684 CustomResourceDefinition (CRD)\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u9519\u8bef\u7684\u53d1\u751f\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u624b\u52a8\u5e94\u7528\u6700\u65b0\u7684 CRD\uff1a"),(0,s.kt)(o.Z,{mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl replace -f -")),(0,s.kt)("h2",{id:"\u5378\u8f7d-chaos-mesh"},"\u5378\u8f7d Chaos Mesh"),(0,s.kt)("p",null,"\u5982\u8981\u5378\u8f7d Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall chaos-mesh -n chaos-mesh\n")),(0,s.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,s.kt)("h3",{id:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684-chaos-mesh"},"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh"),(0,s.kt)("p",null,"Chaos Mesh \u4ed3\u5e93\u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," \u5b9a\u4e49\u4e86\u6700\u65b0\u7248\u672c\uff08master \u5206\u652f\uff09\u7684\u955c\u50cf\u3002\u82e5\u60f3\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u514b\u9686\u4ed3\u5e93\ngit clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n\nhelm install chaos-mesh helm/chaos-mesh -n=chaos-mesh\n")),(0,s.kt)("h3",{id:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f"},"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f"),(0,s.kt)("p",null,"\u5b89\u5168\u6a21\u5f0f\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u3002\u5982\u9700\u5173\u95ed\uff0c\u8bf7\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\u6307\u5b9a ",(0,s.kt)("inlineCode",{parentName:"p"},"dashboard.securityMode")," \u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"\uff1a"),(0,s.kt)(l.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set dashboard.securityMode=false --version latest"),(0,s.kt)("h3",{id:"\u5982\u4f55\u6301\u4e45\u5316-chaos-dashboard-\u6570\u636e"},"\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e"),(0,s.kt)("p",null,"\u9ed8\u8ba4 Chaos Dashboard \u7ec4\u4ef6\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"SQLite")," \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u5982\u679c\u6ca1\u6709\u4e3a Chaos Dashboard \u914d\u7f6e",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"\u6301\u4e45\u5377 (PV)")," \uff0cChaos Dashboard \u5728\u53d1\u751f\u91cd\u542f\u540e\uff0c\u6570\u636e\u4f1a\u51fa\u73b0\u4e22\u5931\u3002\u4e3a\u4e86\u907f\u514d\u6570\u636e\u4e22\u5931\uff0c\u53ef\u4ee5\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/next/persistence-dashboard"},"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e")," \u6587\u6863\uff0c\u4e3a Chaos Dashboard \u914d\u7f6e\u6301\u4e45\u5377\u6216\u8005\u8bbe\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"Postgres")," \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\u3002"))}k.isMDXComponent=!0}}]);