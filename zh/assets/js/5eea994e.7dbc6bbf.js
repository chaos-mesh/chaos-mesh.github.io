"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7221],{49613:(e,a,l)=>{l.d(a,{Zo:()=>p,kt:()=>k});var t=l(59496);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function s(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function o(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=t.createContext({}),h=function(e){var a=t.useContext(i),l=a;return e&&(l="function"==typeof e?e(a):s(s({},a),e)),l},p=function(e){var a=h(e.components);return t.createElement(i.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=h(l),m=n,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return l?t.createElement(k,s(s({ref:a},p),{},{components:l})):t.createElement(k,s({ref:a},p))}));function k(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=l.length,s=new Array(r);s[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var h=2;h<r;h++)s[h]=l[h];return t.createElement.apply(null,s)}return t.createElement.apply(null,l)}m.displayName="MDXCreateElement"},75730:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var t=l(28957),n=(l(59496),l(49613));const r={title:"\u5378\u8f7d Chaos Mesh"},s=void 0,o={unversionedId:"uninstallation",id:"uninstallation",title:"\u5378\u8f7d Chaos Mesh",description:"\u8fd9\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5378\u8f7d Chaos Mesh\uff0c\u5305\u62ec\u4f7f\u7528 Helm \u5378\u8f7d Chaos Mesh \u548c\u624b\u52a8\u5378\u8f7d Chaos Mesh\u3002\u5982\u679c\u4f60\u9700\u8981\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u624b\u52a8\u6e05\u9664 Chaos Mesh\uff0c\u8fd9\u7bc7\u6587\u6863\u4e5f\u662f\u975e\u5e38\u6709\u7528\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/uninstallation.md",sourceDirName:".",slug:"/uninstallation",permalink:"/zh/docs/next/uninstallation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/i18n/zh/docusaurus-plugin-content-docs/current/uninstallation.md",tags:[],version:"current",frontMatter:{title:"\u5378\u8f7d Chaos Mesh"},sidebar:"docs",previous:{title:"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e",permalink:"/zh/docs/next/persistence-dashboard"},next:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",permalink:"/zh/docs/next/manage-user-permissions"}},i={},h=[{value:"\u901a\u8fc7 Helm \u5378\u8f7d Chaos Mesh",id:"\u901a\u8fc7-helm-\u5378\u8f7d-chaos-mesh",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c",id:"\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u67e5\u770b Helm Release",id:"\u7b2c-2-\u6b65\u67e5\u770b-helm-release",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u5220\u9664 Helm Release",id:"\u7b2c-3-\u6b65\u5220\u9664-helm-release",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u5220\u9664 CRDs",id:"\u7b2c-4-\u6b65\u5220\u9664-crds",level:3},{value:"\u624b\u52a8\u5378\u8f7d Chaos Mesh",id:"\u624b\u52a8\u5378\u8f7d-chaos-mesh",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c",id:"\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c-1",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u5220\u9664 Chaos Mesh \u5de5\u4f5c\u8d1f\u8f7d",id:"\u7b2c-2-\u6b65\u5220\u9664-chaos-mesh-\u5de5\u4f5c\u8d1f\u8f7d",level:3},{value:"\u7b2c 3 \u6b65\uff1a\u5220\u9664 Chaos Mesh RBAC \u5bf9\u8c61",id:"\u7b2c-3-\u6b65\u5220\u9664-chaos-mesh-rbac-\u5bf9\u8c61",level:3},{value:"\u7b2c 4 \u6b65\uff1a\u5220\u9664 ConfigMaps \u548c Secrets",id:"\u7b2c-4-\u6b65\u5220\u9664-configmaps-\u548c-secrets",level:3},{value:"\u7b2c 5 \u6b65\uff1a\u5220\u9664 Webhook",id:"\u7b2c-5-\u6b65\u5220\u9664-webhook",level:3},{value:"Step 6: \u5220\u9664 CRDs",id:"step-6-\u5220\u9664-crds",level:3}],p={toc:h},u="wrapper";function c(e){let{components:a,...l}=e;return(0,n.kt)(u,(0,t.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8fd9\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5378\u8f7d Chaos Mesh\uff0c\u5305\u62ec\u4f7f\u7528 Helm \u5378\u8f7d Chaos Mesh \u548c\u624b\u52a8\u5378\u8f7d Chaos Mesh\u3002\u5982\u679c\u4f60\u9700\u8981\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u624b\u52a8\u6e05\u9664 Chaos Mesh\uff0c\u8fd9\u7bc7\u6587\u6863\u4e5f\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"),(0,n.kt)("h2",{id:"\u901a\u8fc7-helm-\u5378\u8f7d-chaos-mesh"},"\u901a\u8fc7 Helm \u5378\u8f7d Chaos Mesh"),(0,n.kt)("h3",{id:"\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c"},"\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c"),(0,n.kt)("p",null,"\u5728\u5378\u8f7d Chaos Mesh \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u76f8\u5173\u7684\u5bf9\u8c61\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n")),(0,n.kt)("p",null,"\u4e00\u65e6\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5378\u8f7d Chaos Mesh\uff1a"),(0,n.kt)("h3",{id:"\u7b2c-2-\u6b65\u67e5\u770b-helm-release"},"\u7b2c 2 \u6b65\uff1a\u67e5\u770b Helm Release"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u5df2\u5b89\u88c5\u7684 Helm Release\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -A\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u5e94\u8be5\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"NAME                    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION\nchaos-mesh-playground   chaos-mesh      1               2021-12-01 22:58:18.037052401 +0800 CST deployed        chaos-mesh-2.1.0        2.1.0\n")),(0,n.kt)("p",null,"\u8fd9\u8868\u793a\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-mesh-playground")," \u7684 Helm Release \u5df2\u7ecf\u5b89\u88c5\u5728\u547d\u540d\u7a7a\u95f4 ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," \u4e2d\uff0c\u6240\u4ee5\u8fd9\u91cc\u662f\u5c06\u8981\u5378\u8f7d\u7684 Helm Release\u3002"),(0,n.kt)("h3",{id:"\u7b2c-3-\u6b65\u5220\u9664-helm-release"},"\u7b2c 3 \u6b65\uff1a\u5220\u9664 Helm Release"),(0,n.kt)("p",null,"\u5728\u786e\u8ba4\u76ee\u6807 Helm Release \u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5220\u9664 Helm Release\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall chaos-mesh-playground -n chaos-mesh\n")),(0,n.kt)("h3",{id:"\u7b2c-4-\u6b65\u5220\u9664-crds"},"\u7b2c 4 \u6b65\uff1a\u5220\u9664 CRDs"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"helm uninstall")," \u4e0d\u4f1a\u5220\u9664 CRDs\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u624b\u52a8\u5220\u9664\u5b83\u4eec\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n")),(0,n.kt)("h2",{id:"\u624b\u52a8\u5378\u8f7d-chaos-mesh"},"\u624b\u52a8\u5378\u8f7d Chaos Mesh"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u901a\u8fc7\u811a\u672c ",(0,n.kt)("inlineCode",{parentName:"p"},"install.sh")," \u5b89\u88c5\u4e86 Chaos Mesh\uff0c\u6216\u8005\u4f60\u4fee\u6539\u4e86 Chaos Mesh \u7684\u914d\u7f6e\u548c\u7ec4\u4ef6\uff0c\u6216\u8005\u4f60\u9047\u5230\u4e86\u5378\u8f7d Chaos Mesh \u65f6\u7684\u95ee\u9898\uff0c\u8fd9\u91cc\u662f\u4e00\u4e9b\u624b\u52a8\u5378\u8f7d Chaos Mesh \u7684\u65b9\u6cd5\u3002"),(0,n.kt)("h3",{id:"\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c-1"},"\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c"),(0,n.kt)("p",null,"\u5728\u5378\u8f7d Chaos Mesh \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u76f8\u5173\u7684\u5bf9\u8c61\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n")),(0,n.kt)("p",null,"\u4e00\u65e6\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5378\u8f7d Chaos Mesh\uff1a"),(0,n.kt)("h3",{id:"\u7b2c-2-\u6b65\u5220\u9664-chaos-mesh-\u5de5\u4f5c\u8d1f\u8f7d"},"\u7b2c 2 \u6b65\uff1a\u5220\u9664 Chaos Mesh \u5de5\u4f5c\u8d1f\u8f7d"),(0,n.kt)("p",null,"\u901a\u5e38 Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u79cd\u7c7b\u578b\u7684\u7ec4\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-controller-manager")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"Deployment"),"\uff0c\u5b83\u662f Chaos Mesh \u7684\u63a7\u5236\u5668/\u8c03\u8282\u5668\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-daemon")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"DaemonSet"),"\uff0c\u5b83\u662f\u6bcf\u4e2a Kubernetes \u5de5\u4f5c\u8282\u70b9\u4e0a\u7684 Chaos Mesh \u7684\u4ee3\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-dashboard")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"Deployment"),"\uff0c\u5b83\u662f Chaos Mesh \u7684 WebUI\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-dns-server")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"Deployment"),"\uff0c\u5b83\u662f DNS \u4ee3\u7406\u670d\u52a1\u5668\uff0c\u53ea\u6709\u5f53\u4f60\u542f\u7528\u4e86 DNSChaos \u7279\u6027\u65f6\u624d\u4f1a\u51fa\u73b0\u3002")),(0,n.kt)("p",null,"\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u5bf9\u8c61\u3002"),(0,n.kt)("p",null,"\u7136\u540e\u5220\u9664\u5b83\u4eec\u7684\u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Service"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"chaos-daemon"),(0,n.kt)("li",{parentName:"ul"},"chaos-dashboard"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-controller-manager"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-dns-server")),(0,n.kt)("h3",{id:"\u7b2c-3-\u6b65\u5220\u9664-chaos-mesh-rbac-\u5bf9\u8c61"},"\u7b2c 3 \u6b65\uff1a\u5220\u9664 Chaos Mesh RBAC \u5bf9\u8c61"),(0,n.kt)("p",null,"Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u4e2a RBAC \u5bf9\u8c61\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ClusterRoleBinding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-cluster-level"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-target-namespace"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-cluster-level"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-target-namespace"))),(0,n.kt)("li",{parentName:"ul"},"ClusterRole",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-cluster-level"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-target-namespace"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-cluster-level"))),(0,n.kt)("li",{parentName:"ul"},"RoleBinding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-control-plane"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-control-plane"))),(0,n.kt)("li",{parentName:"ul"},"Role",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-control-plane"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-control-plane"))),(0,n.kt)("li",{parentName:"ul"},"ServiceAccount",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-controller-manager"),(0,n.kt)("li",{parentName:"ul"},"chaos-daemon"),(0,n.kt)("li",{parentName:"ul"},"chaos-dns-server")))),(0,n.kt)("p",null,"\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b RBAC \u5bf9\u8c61\u3002"),(0,n.kt)("h3",{id:"\u7b2c-4-\u6b65\u5220\u9664-configmaps-\u548c-secrets"},"\u7b2c 4 \u6b65\uff1a\u5220\u9664 ConfigMaps \u548c Secrets"),(0,n.kt)("p",null,"Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u4e2a ConfigMaps \u548c Secrets\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ConfigMap",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh"),(0,n.kt)("li",{parentName:"ul"},"dns-server-config"))),(0,n.kt)("li",{parentName:"ul"},"Secret",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-webhook-certs")))),(0,n.kt)("p",null,"\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b ConfigMaps \u548c Secrets \u5bf9\u8c61\u3002"),(0,n.kt)("h3",{id:"\u7b2c-5-\u6b65\u5220\u9664-webhook"},"\u7b2c 5 \u6b65\uff1a\u5220\u9664 Webhook"),(0,n.kt)("p",null,"Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u4e2a Webhook\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ValidatingWebhookConfigurations",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-validation"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-validate-auth"))),(0,n.kt)("li",{parentName:"ul"},"MutatingWebhookConfigurations",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-mutation")))),(0,n.kt)("p",null,"\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b Webhooks\u3002"),(0,n.kt)("h3",{id:"step-6-\u5220\u9664-crds"},"Step 6: \u5220\u9664 CRDs"),(0,n.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5220\u9664 CRDs\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n")))}c.isMDXComponent=!0}}]);