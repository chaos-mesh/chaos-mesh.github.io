"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5549,2905,8190],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||s;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8714:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(59496),r=n(43990);function s(e){let{children:t,fallback:n}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},62125:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>l});var a=n(8714),r=n(43205),s=n(73622),o=n(85881),i=n(59496);const l=(e,t)=>{const n=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";const r=t.find((e=>e.isLast)),s=t.find((e=>n.includes(e.name)));return s?s.name:r.name};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:p="language-bash"}=e;const{siteConfig:m}=(0,r.Z)(),{versions:u}=(0,s.eZ)("docusaurus-plugin-content-docs");return i.createElement(a.Z,null,(()=>{const e=l(m,u),a=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return i.createElement(o.Z,{className:p},a)}))}},10515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(60795),r=(n(59496),n(49613));const s={},o=void 0,i={unversionedId:"common/quick-run",id:"version-2.4.3/common/quick-run",title:"quick-run",description:"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/zh/docs/2.4.3/common/quick-run",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/common/quick-run.md",tags:[],version:"2.4.3",frontMatter:{}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/2.4.3/run-a-chaos-experiment"},"\u8fd0\u884c\u8bd5\u9a8c"),"\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002"))}u.isMDXComponent=!0},45363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(60795),r=(n(59496),n(49613));const s={},o=void 0,i={unversionedId:"common/verify-installation",id:"version-2.4.3/common/verify-installation",title:"verify-installation",description:"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/zh/docs/2.4.3/common/verify-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/common/verify-installation.md",tags:[],version:"2.4.3",frontMatter:{}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n chaos-mesh\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," \u72b6\u6001\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"))),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u624b\u52a8\u5173\u95ed\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"leader-election"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," \u5e94\u8be5\u53ea\u6709 1 \u4e2a\u5b9e\u4f8b\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"))))}u.isMDXComponent=!0},88665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(60795),r=(n(59496),n(49613)),s=n(62125),o=n(45363),i=n(10515);const l={title:"\u5feb\u901f\u8bd5\u7528"},c=void 0,p={unversionedId:"quick-start",id:"version-2.4.3/quick-start",title:"\u5feb\u901f\u8bd5\u7528",description:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u6d4b\u8bd5\u73af\u5883\u6216\u672c\u673a\u73af\u5883\u5feb\u901f\u8bd5\u7528 Chaos Mesh\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh/docs/2.4.3/quick-start",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/quick-start.md",tags:[],version:"2.4.3",frontMatter:{title:"\u5feb\u901f\u8bd5\u7528"},sidebar:"docs",previous:{title:"\u57fa\u672c\u529f\u80fd",permalink:"/zh/docs/2.4.3/basic-features"},next:{title:"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh",permalink:"/zh/docs/2.4.3/production-installation-using-helm"}},m={},u=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u5feb\u901f\u5b89\u88c5",id:"\u5feb\u901f\u5b89\u88c5",level:2},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",level:2},{value:"\u8fd0\u884c Chaos \u5b9e\u9a8c",id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c",level:2},{value:"\u5378\u8f7d Chaos Mesh",id:"\u5378\u8f7d-chaos-mesh",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0 <code>local</code> \u76ee\u5f55",id:"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0-local-\u76ee\u5f55",level:3}],h={toc:u},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u6d4b\u8bd5\u73af\u5883\u6216\u672c\u673a\u73af\u5883\u5feb\u901f\u8bd5\u7528 Chaos Mesh\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u672c\u6587\u6863\u4e2d\uff0cChaos Mesh \u662f\u901a\u8fc7\u811a\u672c\u5b89\u88c5\u7684\uff0c\u4ec5\u4f9b\u5feb\u901f\u8bd5\u7528\u3002")),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u5728\u751f\u4ea7\u73af\u5883\u6216\u8005\u662f\u5176\u4ed6\u4e25\u683c\u7684\u975e\u6d4b\u8bd5\u573a\u666f\u4e0b\u5b89\u88c5\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),"\u3002\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/2.4.3/production-installation-using-helm"},"\u4f7f\u7528 Helm \u5b89\u88c5"),"\u3002")),(0,r.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u5728\u8bd5\u7528\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u73af\u5883\u4e2d\u5df2\u7ecf\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u3002\u5982\u679c\u5c1a\u672a\u90e8\u7f72 Kubernetes \u96c6\u7fa4\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\u5b8c\u6210\u90e8\u7f72\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microk8s.io/"},"Microk8s"))),(0,r.kt)("h2",{id:"\u5feb\u901f\u5b89\u88c5"},"\u5feb\u901f\u5b89\u88c5"),(0,r.kt)("p",null,"\u8981\u5728\u8bd5\u7528\u73af\u5883\u4e2d\u5b89\u88c5 Chaos Mesh\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u811a\u672c\uff1a"),(0,r.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),"\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--local kind")," \u53c2\u6570\u3002"),(0,r.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,r.kt)("p",{parentName:"li"},"\u82e5\u9700\u8981\u6307\u5b9a kind \u7248\u672c\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--kind-version xxx")," \u53c2\u6570\uff0c\u5982\uff1a"),(0,r.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.10.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s"),"\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--k3s")," \u53c2\u6570\u3002"),(0,r.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://microk8s.io/"},"Microk8s"),"\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--microk8s")," \u53c2\u6570\u3002"),(0,r.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s")))),(0,r.kt)("p",null,"\u8fd0\u884c\u6b64\u5b89\u88c5\u811a\u672c\u540e\uff0cChaos Mesh \u5c06\u4f1a\u81ea\u52a8\u5b89\u88c5\u4e0e\u7248\u672c\u76f8\u7b26\u7684 CustomResourceDefinition (CRD)\u3001\u6240\u6709\u9700\u8981\u7684\u7ec4\u4ef6\u3001\u53ca\u76f8\u5173\u7684 Service Account \u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u5b89\u88c5\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"install.sh")," \u7684\u6e90\u4ee3\u7801"),"\u3002"),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,r.kt)(o.default,{mdxType:"VerifyInstallation"}),(0,r.kt)("h2",{id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c"},"\u8fd0\u884c Chaos \u5b9e\u9a8c"),(0,r.kt)(i.default,{mdxType:"QuickRun"}),(0,r.kt)("h2",{id:"\u5378\u8f7d-chaos-mesh"},"\u5378\u8f7d Chaos Mesh"),(0,r.kt)("p",null,"\u5982\u8981\u5378\u8f7d Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," \u547d\u540d\u7a7a\u95f4\u76f4\u63a5\u5378\u8f7d Chaos Mesh\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete ns chaos-mesh\n")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0-local-\u76ee\u5f55"},"\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"h3"},"local")," \u76ee\u5f55"),(0,r.kt)("p",null,"\u5982\u679c\u5f53\u524d\u73af\u5883\u5e76\u6ca1\u6709\u5b89\u88c5 kind \u4f46\u4f60\u5728\u5b89\u88c5\u547d\u4ee4\u4e2d\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"--local kind")," \u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," \u5b89\u88c5\u811a\u672c\u5c06\u4f1a\u81ea\u52a8\u5b89\u88c5 kind \u5230\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," \u76ee\u5f55\u4e2d\u3002"))}k.isMDXComponent=!0}}]);