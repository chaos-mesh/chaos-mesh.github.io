"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[32365],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>m});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)l=s[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)l=s[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=a.createContext({}),h=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=h(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=h(l),m=n,d=c["".concat(i,".").concat(m)]||c[m]||p[m]||s;return l?a.createElement(d,o(o({ref:t},u),{},{components:l})):a.createElement(d,o({ref:t},u))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=l.length,o=new Array(s);o[0]=c;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var h=2;h<s;h++)o[h]=l[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},79889:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=l(87462),n=(l(67294),l(3905));const s={title:"Uninstall Chaos Mesh"},o=void 0,r={unversionedId:"uninstallation",id:"version-2.4.3/uninstallation",title:"Uninstall Chaos Mesh",description:"This document introduces how to uninstall Chaos Mesh, including uninstall Chaos Mesh with Helm and uninstall Chaos Mesh manually. It's also very helpful to manually purge Chaos Mesh installation from Kubernetes cluster if you have to do.",source:"@site/versioned_docs/version-2.4.3/uninstallation.md",sourceDirName:".",slug:"/uninstallation",permalink:"/docs/2.4.3/uninstallation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.3/uninstallation.md",tags:[],version:"2.4.3",frontMatter:{title:"Uninstall Chaos Mesh"},sidebar:"docs",previous:{title:"Persistence Chaos Dashboard",permalink:"/docs/2.4.3/persistence-dashboard"},next:{title:"Supported Releases",permalink:"/docs/2.4.3/supported-releases"}},i={},h=[{value:"Uninstall Chaos Mesh with Helm",id:"uninstall-chaos-mesh-with-helm",level:2},{value:"Step 1: Clean Up Chaos Experiments",id:"step-1-clean-up-chaos-experiments",level:3},{value:"Step 2: List Helm Releases",id:"step-2-list-helm-releases",level:3},{value:"Step 3: Delete Helm Releases",id:"step-3-delete-helm-releases",level:3},{value:"Step 4: Remove CRDs",id:"step-4-remove-crds",level:3},{value:"Uninstall Chaos Mesh Manually",id:"uninstall-chaos-mesh-manually",level:2},{value:"Step 1: Clean Up Chaos Experiments",id:"step-1-clean-up-chaos-experiments-1",level:3},{value:"Step 2: Remove Chaos Mesh Workloads",id:"step-2-remove-chaos-mesh-workloads",level:3},{value:"Step 3: Remove Chaos Mesh RBAC Objects",id:"step-3-remove-chaos-mesh-rbac-objects",level:3},{value:"Step 4: Remove ConfigMaps And Secrets",id:"step-4-remove-configmaps-and-secrets",level:3},{value:"Step 5: Remove Webhook",id:"step-5-remove-webhook",level:3},{value:"Step 6: Remove CRDs",id:"step-6-remove-crds",level:3}],u={toc:h};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document introduces how to uninstall Chaos Mesh, including uninstall Chaos Mesh with Helm and uninstall Chaos Mesh manually. It's also very helpful to manually purge Chaos Mesh installation from Kubernetes cluster if you have to do."),(0,n.kt)("h2",{id:"uninstall-chaos-mesh-with-helm"},"Uninstall Chaos Mesh with Helm"),(0,n.kt)("h3",{id:"step-1-clean-up-chaos-experiments"},"Step 1: Clean Up Chaos Experiments"),(0,n.kt)("p",null,"Before uninstall Chaos Mesh, please make sure that all the chaos experiments are deleted. You could list chaos related objects by executing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n")),(0,n.kt)("p",null,"Once you make sure that all the chaos experiments are deleted, you can uninstall Chaos Mesh."),(0,n.kt)("h3",{id:"step-2-list-helm-releases"},"Step 2: List Helm Releases"),(0,n.kt)("p",null,"You could list the installed helm release by executing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -A\n")),(0,n.kt)("p",null,"The output should look like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"NAME                    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION\nchaos-mesh-playground   chaos-mesh      1               2021-12-01 22:58:18.037052401 +0800 CST deployed        chaos-mesh-2.1.0        2.1.0\n")),(0,n.kt)("p",null,"It means that Chaos Mesh has been installed as a helm release named ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-mesh-playground")," in namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-mesh"),". So here is the target release to uninstall."),(0,n.kt)("h3",{id:"step-3-delete-helm-releases"},"Step 3: Delete Helm Releases"),(0,n.kt)("p",null,"After determine the target Helm Release, you could delete the Helm Release by executing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall chaos-mesh-playground -n chaos-mesh\n")),(0,n.kt)("h3",{id:"step-4-remove-crds"},"Step 4: Remove CRDs"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"helm uninstall")," would not remove the CRDs, so you could remove them manually by executing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n")),(0,n.kt)("h2",{id:"uninstall-chaos-mesh-manually"},"Uninstall Chaos Mesh Manually"),(0,n.kt)("p",null,"If you installed Chaos Mesh by script ",(0,n.kt)("inlineCode",{parentName:"p"},"install.sh"),", or you modified some configurations and components after Chaos Mesh installed, or you meet some troubles when uninstalling Chaos Mesh, here are some steps could help you to uninstall Chaos Mesh manually."),(0,n.kt)("h3",{id:"step-1-clean-up-chaos-experiments-1"},"Step 1: Clean Up Chaos Experiments"),(0,n.kt)("p",null,"Before uninstall Chaos Mesh, please make sure that all the chaos experiments are deleted. You could list chaos related objects by executing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n")),(0,n.kt)("p",null,"Once you make sure that all the chaos experiments are deleted, you can uninstall Chaos Mesh."),(0,n.kt)("h3",{id:"step-2-remove-chaos-mesh-workloads"},"Step 2: Remove Chaos Mesh Workloads"),(0,n.kt)("p",null,"There are usually several kind of components as Chaos Mesh installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"Deployment")," called ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-controller-manager"),", it is the controller/reconciler for Chaos Mesh."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"DaemonSet")," called ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-daemon"),", it is the agent for Chaos Mesh on each Kubernetes worker node."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"Deployment")," called ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-dashboard"),", the WebUI for Chaos Mesh."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"Deployment")," called ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-dns-server"),", it is the DNS proxy server, only occurs with you enable the DNSChaos feature.")),(0,n.kt)("p",null,"You should remove these workload objects."),(0,n.kt)("p",null,"Then delete their corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"Service"),"s:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"chaos-daemon"),(0,n.kt)("li",{parentName:"ul"},"chaos-dashboard"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-controller-manager"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-dns-server")),(0,n.kt)("h3",{id:"step-3-remove-chaos-mesh-rbac-objects"},"Step 3: Remove Chaos Mesh RBAC Objects"),(0,n.kt)("p",null,"There are several RBAC objects as Chaos Mesh installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ClusterRoleBinding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-cluster-level"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-target-namespace"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-cluster-level"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-target-namespace"))),(0,n.kt)("li",{parentName:"ul"},"ClusterRole",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-cluster-level"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-target-namespace"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-cluster-level"))),(0,n.kt)("li",{parentName:"ul"},"RoleBinding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-control-plane"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-control-plane"))),(0,n.kt)("li",{parentName:"ul"},"Role",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-controller-manager-control-plane"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-playground-chaos-dns-server-control-plane"))),(0,n.kt)("li",{parentName:"ul"},"ServiceAccount",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-controller-manager"),(0,n.kt)("li",{parentName:"ul"},"chaos-daemon"),(0,n.kt)("li",{parentName:"ul"},"chaos-dns-server")))),(0,n.kt)("p",null,"You should remove these RBAC objects."),(0,n.kt)("h3",{id:"step-4-remove-configmaps-and-secrets"},"Step 4: Remove ConfigMaps And Secrets"),(0,n.kt)("p",null,"There are several ConfigMaps and Secrets as Chaos Mesh installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ConfigMap",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh"),(0,n.kt)("li",{parentName:"ul"},"dns-server-config"))),(0,n.kt)("li",{parentName:"ul"},"Secret",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-webhook-certs")))),(0,n.kt)("p",null,"You should remove these ConfigMaps And Secrets objects."),(0,n.kt)("h3",{id:"step-5-remove-webhook"},"Step 5: Remove Webhook"),(0,n.kt)("p",null,"There are several Webhooks as Chaos Mesh installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ValidatingWebhookConfigurations",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-validation"),(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-validate-auth"))),(0,n.kt)("li",{parentName:"ul"},"MutatingWebhookConfigurations",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chaos-mesh-mutation")))),(0,n.kt)("p",null,"You should remove these webhooks."),(0,n.kt)("h3",{id:"step-6-remove-crds"},"Step 6: Remove CRDs"),(0,n.kt)("p",null,"At last, you could remove CRds by executing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n")))}p.isMDXComponent=!0}}]);