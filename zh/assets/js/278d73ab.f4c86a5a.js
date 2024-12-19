"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6621],{40937:(e,s,n)=>{n.d(s,{Ay:()=>c,RM:()=>o});var a=n(86070),r=n(51377);const o=[];function l(e){const s={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["\u8bf7\u53c2\u8003",(0,a.jsx)(s.a,{href:"/zh/docs/2.5.2/run-a-chaos-experiment",children:"\u8fd0\u884c\u8bd5\u9a8c"}),"\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},82782:(e,s,n)=>{n.d(s,{Ay:()=>c,RM:()=>o});var a=n(86070),r=n(51377);const o=[];function l(e){const s={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"kubectl get po -n chaos-mesh\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"}),"\n",(0,a.jsxs)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:[(0,a.jsxs)(s.p,{children:["\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ",(0,a.jsx)(s.code,{children:"STATUS"})," \u72b6\u6001\u4e0d\u662f ",(0,a.jsx)(s.code,{children:"Running"}),"\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"})})]}),"\n",(0,a.jsxs)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:[(0,a.jsxs)(s.p,{children:["\u5982\u679c\u624b\u52a8\u5173\u95ed\u4e86 ",(0,a.jsx)(s.code,{children:"leader-election"}),"\uff0c",(0,a.jsx)(s.code,{children:"chaos-controller-manager"})," \u5e94\u8be5\u53ea\u6709 1 \u4e2a\u5b9e\u4f8b\u3002"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"})})]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},12918:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"production-installation-using-helm","title":"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh","description":"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u5b89\u88c5 Chaos Mesh\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/production-installation-using-helm.md","sourceDirName":".","slug":"/production-installation-using-helm","permalink":"/zh/docs/2.5.2/production-installation-using-helm","draft":false,"unlisted":false,"editUrl":"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/production-installation-using-helm.md","tags":[],"version":"2.5.2","frontMatter":{"title":"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh"},"sidebar":"docs","previous":{"title":"\u5feb\u901f\u8bd5\u7528","permalink":"/zh/docs/2.5.2/quick-start"},"next":{"title":"\u79bb\u7ebf\u5b89\u88c5","permalink":"/zh/docs/2.5.2/offline-installation"}}');var r=n(86070),o=n(51377),l=n(88255),c=n(69649),t=n(80701),h=n(62009),i=n(82782),d=n(40937);const u={title:"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh"},m=void 0,p={},x=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u4f7f\u7528-helm-\u5b89\u88c5",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93",id:"\u7b2c-1-\u6b65\u6dfb\u52a0-chaos-mesh-\u4ed3\u5e93",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684 Chaos Mesh \u7248\u672c",id:"\u7b2c-2-\u6b65\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684-chaos-mesh-\u7248\u672c",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u521b\u5efa\u5b89\u88c5 Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4",id:"\u7b2c-3-\u6b65\u521b\u5efa\u5b89\u88c5-chaos-mesh-\u7684\u547d\u540d\u7a7a\u95f4",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5",id:"\u7b2c-4-\u6b65\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5",level:3},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",level:2},...i.RM,{value:"\u8fd0\u884c Chaos \u5b9e\u9a8c",id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c",level:2},...d.RM,{value:"\u5347\u7ea7 Chaos Mesh",id:"\u5347\u7ea7-chaos-mesh",level:2},{value:"\u5378\u8f7d Chaos Mesh",id:"\u5378\u8f7d-chaos-mesh",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh",id:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684-chaos-mesh",level:3},{value:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",id:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",level:3},{value:"\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e",id:"\u5982\u4f55\u6301\u4e45\u5316-chaos-dashboard-\u6570\u636e",level:3}];function j(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u5b89\u88c5 Chaos Mesh\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u5b89\u88c5\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 ",(0,r.jsx)(s.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm"}),"\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u8981\u67e5\u770b Helm \u662f\u5426\u5df2\u7ecf\u5b89\u88c5\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm version\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion:"go1.16.3"}\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u4e00\u81f4\uff0c\u8868\u793a Helm \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,r.jsxs)(s.p,{children:["\u672c\u6587\u4e2d\u7684\u547d\u4ee4\u5c06\u4f1a\u4f7f\u7528 Helm v3 \u6765\u64cd\u4f5c Chaos Mesh\u3002\u5982\u679c\u4f60\u7684\u73af\u5883\u4e2d Helm \u7684\u7248\u672c\u4e3a v2\uff0c\u8bf7\u53c2\u8003",(0,r.jsx)(s.a,{href:"https://helm.sh/docs/topics/v2_v3_migration/",children:"\u5c06 Helm v2 \u8fc1\u79fb\u5230 v3"}),"\u6216\u6309\u7167 v2 \u7684\u683c\u5f0f\u8fdb\u884c\u4fee\u6539\u3002"]})}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528-helm-\u5b89\u88c5",children:"\u4f7f\u7528 Helm \u5b89\u88c5"}),"\n",(0,r.jsx)(s.h3,{id:"\u7b2c-1-\u6b65\u6dfb\u52a0-chaos-mesh-\u4ed3\u5e93",children:"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93"}),"\n",(0,r.jsx)(s.p,{children:"\u5728 Helm \u4ed3\u5e93\u4e2d\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm repo add chaos-mesh https://charts.chaos-mesh.org\n"})}),"\n",(0,r.jsx)(s.h3,{id:"\u7b2c-2-\u6b65\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684-chaos-mesh-\u7248\u672c",children:"\u7b2c 2 \u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684 Chaos Mesh \u7248\u672c"}),"\n",(0,r.jsx)(s.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u53ef\u4ee5\u5b89\u88c5\u7684 charts\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm search repo chaos-mesh\n"})}),"\n",(0,r.jsxs)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:[(0,r.jsx)(s.p,{children:"\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u8f93\u51fa\u6700\u65b0\u53d1\u5e03\u7684 chart\uff0c\u5982\u9700\u5b89\u88c5\u5386\u53f2\u7248\u672c\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u6240\u6709\u7684\u7248\u672c\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm search repo chaos-mesh -l\n"})})]}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u4e0a\u8ff0\u547d\u4ee4\u5b8c\u6210\u540e\uff0c\u63a5\u4e0b\u6765\u5f00\u59cb\u5b89\u88c5 Chaos Mesh\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"\u7b2c-3-\u6b65\u521b\u5efa\u5b89\u88c5-chaos-mesh-\u7684\u547d\u540d\u7a7a\u95f4",children:"\u7b2c 3 \u6b65\uff1a\u521b\u5efa\u5b89\u88c5 Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4"}),"\n",(0,r.jsxs)(s.p,{children:["\u63a8\u8350\u5c06 Chaos Mesh \u5b89\u88c5\u5728 ",(0,r.jsx)(s.code,{children:"chaos-mesh"})," \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u547d\u540d\u7a7a\u95f4\u5b89\u88c5 Chaos Mesh\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl create ns chaos-mesh\n"})}),"\n",(0,r.jsx)(s.h3,{id:"\u7b2c-4-\u6b65\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5",children:"\u7b2c 4 \u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u5b89\u88c5\u5728 Kubernetes v1.15\uff08\u6216\u66f4\u4f4e\u7248\u672c\uff09\u4e2d\u5b89\u88c5 Chaos Mesh\uff0c\u8bf7\u624b\u52a8\u5b89\u88c5 CRD\u3002 \u5177\u4f53\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"/zh/docs/2.5.2/faqs#failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1",children:"FAQ"}),"\u3002"]})}),"\n",(0,r.jsx)(s.p,{children:"\u7531\u4e8e\u4e0d\u540c\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u5b88\u62a4\u8fdb\u7a0b\u6240\u76d1\u542c\u7684 socket path \u4e0d\u540c\uff0c\u4f60\u9700\u8981\u5728\u5b89\u88c5\u65f6\u8bbe\u7f6e\u9002\u5f53\u7684\u503c\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u6765\u8fd0\u884c\u4ee5\u4e0b\u7684\u5b89\u88c5\u547d\u4ee4\u3002"}),"\n",(0,r.jsxs)(l.A,{defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Containerd",value:"containerd"},{label:"K3s",value:"k3s"},{label:"MicroK8s",value:"microk8s"},{label:"CRI-O",value:"cri-o"}],children:[(0,r.jsx)(c.A,{value:"docker",children:(0,r.jsx)(h.A,{children:"# Default to /var/run/docker.sock\nhelm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest"})}),(0,r.jsx)(c.A,{value:"containerd",children:(0,r.jsx)(h.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --version latest"})}),(0,r.jsx)(c.A,{value:"k3s",children:(0,r.jsx)(h.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock --version latest"})}),(0,r.jsx)(c.A,{value:"microk8s",children:(0,r.jsx)(h.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/var/snap/microk8s/common/run/containerd.sock --version latest"})}),(0,r.jsx)(c.A,{value:"cri-o",children:(0,r.jsx)(h.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=crio --set chaosDaemon.socketPath=/var/run/crio/crio.sock --version latest"})})]}),"\n",(0,r.jsx)(s.admonition,{title:"\u63d0\u793a",type:"info",children:(0,r.jsxs)(s.p,{children:["\u5982\u9700\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u5728 ",(0,r.jsx)(s.code,{children:"helm install"})," \u540e\u6dfb\u52a0 ",(0,r.jsx)(s.code,{children:"--version x.y.z"})," \u53c2\u6570\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version 2.1.0"}),"\u3002"]})}),"\n",(0,r.jsxs)(s.admonition,{title:"\u5c0f\u8d34\u58eb",type:"tip",children:[(0,r.jsxs)(s.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u53ef\u7528\u6027\uff0cChaos Mesh \u9ed8\u8ba4\u5f00\u542f\u4e86 ",(0,r.jsx)(s.code,{children:"leader-election"})," \u7279\u6027\u3002\u5982\u679c\u4e0d\u9700\u8981\u8fd9\u4e2a\u7279\u6027\uff0c\u8bf7\u901a\u8fc7 ",(0,r.jsx)(s.code,{children:"--set controllerManager.leaderElection.enabled=false"})," \u624b\u52a8\u5173\u95ed\u8be5\u7279\u6027\u3002"]}),(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u7248\u672c ",(0,r.jsx)(s.code,{children:"<2.6.1"}),"\uff0c\u4f60\u4ecd\u7136\u9700\u8981\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"--set controllerManager.replicaCount=1"})," \u6765\u5c06\u63a7\u5236\u5668\u7ba1\u7406\u5668\u51cf\u5c11\u5230\u4e00\u4e2a\u526f\u672c\u3002"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u9a8c\u8bc1\u5b89\u88c5",children:"\u9a8c\u8bc1\u5b89\u88c5"}),"\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(s.h2,{id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c",children:"\u8fd0\u884c Chaos \u5b9e\u9a8c"}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(s.h2,{id:"\u5347\u7ea7-chaos-mesh",children:"\u5347\u7ea7 Chaos Mesh"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u8981\u5347\u7ea7 Chaos Mesh\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm upgrade chaos-mesh chaos-mesh/chaos-mesh\n"})}),"\n",(0,r.jsx)(s.admonition,{title:"\u63d0\u793a",type:"info",children:(0,r.jsxs)(s.p,{children:["\u5982\u9700\u5347\u7ea7\u81f3\u7279\u5b9a\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u5728 ",(0,r.jsx)(s.code,{children:"helm upgrade"})," \u540e\u6dfb\u52a0 ",(0,r.jsx)(s.code,{children:"--version x.y.z"})," \u53c2\u6570\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version 2.1.0"}),"\u3002"]})}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,r.jsxs)(s.p,{children:["\u5982\u5728\u975e Docker \u73af\u5883\u4e0b\u8fdb\u884c\u5347\u7ea7\uff0c\u9700\u6839\u636e",(0,r.jsx)(s.a,{href:"#%E7%AC%AC-4-%E6%AD%A5%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%8E%AF%E5%A2%83%E4%B8%8B%E5%AE%89%E8%A3%85",children:"\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"}),"\u6240\u8ff0\u6dfb\u52a0\u76f8\u5e94\u7684\u53c2\u6570\u3002"]})}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u8981\u4fee\u6539\u914d\u7f6e\uff0c\u8bf7\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5982\u4e0b\u547d\u4ee4\u4f1a\u5347\u7ea7\u5e76\u5378\u8f7d ",(0,r.jsx)(s.code,{children:"chaos-dashboard"}),"\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set dashboard.create=false\n"})}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,r.jsxs)(s.p,{children:["\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u503c\u53ca\u5176\u76f8\u5173\u7684\u7528\u6cd5\uff0c\u8bf7\u53c2\u8003",(0,r.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml",children:"\u6240\u6709\u7684\u503c"}),"\u3002"]})}),"\n",(0,r.jsxs)(s.admonition,{title:"\u8b66\u544a",type:"caution",children:[(0,r.jsx)(s.p,{children:"\u76ee\u524d\uff0cHelm \u5728\u5347\u7ea7\u65f6\u4e0d\u4f1a\u5e94\u7528\u6700\u65b0\u7684 CustomResourceDefinition (CRD)\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u9519\u8bef\u7684\u53d1\u751f\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u624b\u52a8\u5e94\u7528\u6700\u65b0\u7684 CRD\uff1a"}),(0,r.jsx)(t.A,{children:"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl replace -f -"})]}),"\n",(0,r.jsx)(s.h2,{id:"\u5378\u8f7d-chaos-mesh",children:"\u5378\u8f7d Chaos Mesh"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u8981\u5378\u8f7d Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm uninstall chaos-mesh -n chaos-mesh\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,r.jsx)(s.h3,{id:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684-chaos-mesh",children:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh"}),"\n",(0,r.jsxs)(s.p,{children:["Chaos Mesh \u4ed3\u5e93\u4e2d\u7684 ",(0,r.jsx)(s.code,{children:"helm/chaos-mesh/values.yaml"})," \u5b9a\u4e49\u4e86\u6700\u65b0\u7248\u672c\uff08master \u5206\u652f\uff09\u7684\u955c\u50cf\u3002\u82e5\u60f3\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# \u514b\u9686\u4ed3\u5e93\ngit clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n\nhelm install chaos-mesh helm/chaos-mesh -n=chaos-mesh\n"})}),"\n",(0,r.jsx)(s.h3,{id:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",children:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f"}),"\n",(0,r.jsxs)(s.p,{children:["\u5b89\u5168\u6a21\u5f0f\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u3002\u5982\u9700\u5173\u95ed\uff0c\u8bf7\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"dashboard.securityMode"})," \u4e3a ",(0,r.jsx)(s.code,{children:"false"}),"\uff1a"]}),"\n",(0,r.jsx)(h.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set dashboard.securityMode=false --version latest"}),"\n",(0,r.jsx)(s.h3,{id:"\u5982\u4f55\u6301\u4e45\u5316-chaos-dashboard-\u6570\u636e",children:"\u5982\u4f55\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e"}),"\n",(0,r.jsxs)(s.p,{children:["\u9ed8\u8ba4 Chaos Dashboard \u7ec4\u4ef6\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"SQLite"})," \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u5982\u679c\u6ca1\u6709\u4e3a Chaos Dashboard \u914d\u7f6e",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/",children:"\u6301\u4e45\u5377 (PV)"})," \uff0cChaos Dashboard \u5728\u53d1\u751f\u91cd\u542f\u540e\uff0c\u6570\u636e\u4f1a\u51fa\u73b0\u4e22\u5931\u3002\u4e3a\u4e86\u907f\u514d\u6570\u636e\u4e22\u5931\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.jsx)(s.a,{href:"/zh/docs/2.5.2/persistence-dashboard",children:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e"})," \u6587\u6863\uff0c\u4e3a Chaos Dashboard \u914d\u7f6e\u6301\u4e45\u5377\u6216\u8005\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"MySQL"}),"\u3001",(0,r.jsx)(s.code,{children:"Postgres"})," \u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\u3002"]})]})}function v(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},69649:(e,s,n)=>{n.d(s,{A:()=>l});n(30758);var a=n(28923);const r={tabItem:"tabItem_bW9W"};var o=n(86070);function l(e){let{children:s,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:s})}},88255:(e,s,n)=>{n.d(s,{A:()=>A});var a=n(30758),r=n(28923),o=n(24010),l=n(25557),c=n(75236),t=n(7327),h=n(30020),i=n(38369);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:r}}=e;return{value:s,label:n,attributes:a,default:r}}))}(n);return function(e){const s=(0,h.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function m(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,t.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const s=new URLSearchParams(r.location.search);s.set(o,e),r.replace({...r.location,search:s.toString()})}),[o,r])]}function x(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,o=u(e),[l,t]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:o}))),[h,d]=p({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,o]=(0,i.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=h??x;return m({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{v&&t(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);t(e),d(e),j(e)}),[d,j,o]),tabValues:o}}var j=n(55600);const v={tabList:"tabList_ZE70",tabItem:"tabItem_lQ_7"};var b=n(86070);function f(e){let{className:s,block:n,selectedValue:a,selectValue:l,tabValues:c}=e;const t=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.a_)(),i=e=>{const s=e.currentTarget,n=t.indexOf(s),r=c[n].value;r!==a&&(h(s),l(r))},d=e=>{let s=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=t.indexOf(e.currentTarget)+1;s=t[n]??t[0];break}case"ArrowLeft":{const n=t.indexOf(e.currentTarget)-1;s=t[n]??t[t.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:c.map((e=>{let{value:s,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>t.push(e),onKeyDown:d,onClick:i,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function g(e){let{lazy:s,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==o})))})}function C(e){const s=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(f,{...s,...e}),(0,b.jsx)(g,{...s,...e})]})}function A(e){const s=(0,j.A)();return(0,b.jsx)(C,{...e,children:d(e.children)},String(s))}},62009:(e,s,n)=>{n.d(s,{A:()=>d});var a=n(67075),r=n(84349),o=n(50765),l=n(48894),c=n(29582),t=n.n(c),h=n(80701),i=n(86070);const d=e=>{let{children:s,className:n="language-bash"}=e;const{siteConfig:c}=(0,r.A)(),{versions:d}=(0,o.P_)("docusaurus-plugin-content-docs");return(0,i.jsx)(a.A,{children:()=>{const e=(0,h.t)(c,d),a="latest"===e?"":`--version ${(e=>{if(t().satisfies(e,">=2.0.3"))return e;const s=e.slice(0,3);return"v"+(parseFloat(s)-.7).toFixed(1)+e.slice(3)})(e)}`;return(0,i.jsx)(l.A,{className:n,children:s.replace("--version latest",a).trim()})}})}},80701:(e,s,n)=>{n.d(s,{A:()=>h,t:()=>t});var a=n(67075),r=n(84349),o=n(50765),l=n(48894),c=n(86070);const t=(e,s)=>{const n=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";const r=s.find((e=>e.isLast)),o=s.find((e=>n.includes(e.name)));return o?o.name:r.name};const h=e=>{let{children:s,replaced:n="latest",isArchive:h=!1,className:i="language-bash"}=e;const{siteConfig:d}=(0,r.A)(),{versions:u}=(0,o.P_)("docusaurus-plugin-content-docs");return(0,c.jsx)(a.A,{children:()=>{const e=t(d,u),a=h?s.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?s:s.replace(n,"v"+e);return(0,c.jsx)(l.A,{className:i,children:a})}})}}}]);