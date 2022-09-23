"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[64619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91262:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72389);function i(e){let{children:t,fallback:n}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):n??null}},56871:(e,t,n)=>{n.d(t,{Z:()=>u,p:()=>o});var r=n(91262),a=n(52263),i=n(28084),s=n(90814),l=n(67294);const o=(e,t)=>{const n=window.location.pathname;let r=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&r)return"current"===r?"latest":r;if(n.includes("/docs/next"))return"latest";const a=t.filter((e=>e.isLast))[0].name;return t.filter((e=>n.includes(e.name))).map((e=>e.name))[0]||a};const u=e=>{let{children:t,replaced:n="latest",isArchive:u=!1,className:c="language-bash"}=e;const{siteConfig:p}=(0,a.Z)(),{versions:m}=(0,i.eZ)("docusaurus-plugin-content-docs");return l.createElement(r.Z,null,(()=>{const e=o(p,m),r=u?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return l.createElement(s.Z,{className:c},r)}))}},1526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(56871);const s={title:"Get started on Minikube"},l=void 0,o={unversionedId:"installation/get_started_on_minikube",id:"version-0.9.1/installation/get_started_on_minikube",title:"Get started on Minikube",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube.",source:"@site/versioned_docs/version-0.9.1/installation/get_started_on_minikube.md",sourceDirName:"installation",slug:"/installation/get_started_on_minikube",permalink:"/docs/0.9.1/installation/get_started_on_minikube",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/installation/get_started_on_minikube.md",tags:[],version:"0.9.1",frontMatter:{title:"Get started on Minikube"},sidebar:"version-0.9.1/docs",previous:{title:"Get started on kind",permalink:"/docs/0.9.1/installation/get_started_on_kind"},next:{title:"Run Chaos Experiment",permalink:"/docs/0.9.1/user_guides/run_chaos_experiment"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up the Kubernetes environment",id:"step-1-set-up-the-kubernetes-environment",level:2},{value:"Step 2: Install Chaos Mesh",id:"step-2-install-chaos-mesh",level:2},{value:"Verify your installation",id:"verify-your-installation",level:3},{value:"Uninstallation",id:"uninstallation",level:2},{value:"Limitations",id:"limitations",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before deployment, make sure ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"Minikube")," is installed on your local machine."),(0,a.kt)("h2",{id:"step-1-set-up-the-kubernetes-environment"},"Step 1: Set up the Kubernetes environment"),(0,a.kt)("p",null,"Perform the following steps to set up the local Kubernetes environment:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start a Kubernetes cluster:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --kubernetes-version v1.15.0 --cpus 4 --memory "8192mb"\n')),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"It is recommended to allocate enough RAM (more than 8192 MiB) to the Virtual Machine (VM) using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cpus")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--memory")," flag."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install helm:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/helm/helm/master/scripts/get | bash\nhelm init\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check whether the helm tiller pod is running:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kube-system get pods -l app=helm\n")))),(0,a.kt)("h2",{id:"step-2-install-chaos-mesh"},"Step 2: Install Chaos Mesh"),(0,a.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,a.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,a.kt)("p",null,"You also can use ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," to ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.9.1/installation/#install-by-helm"},"install Chaos Mesh manually"),"."),(0,a.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,a.kt)("p",null,"Verify if Chaos Mesh is running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,a.kt)("p",null,"Expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,a.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,a.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,a.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"There are some known restrictions for Chaos Operator deployed in the Minikube cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"netem chaos")," is only supported for Minikube clusters >= version 1.6.")),(0,a.kt)("p",null,"In Minikube, the default virtual machine driver's image does not contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"sch_netem")," kernel module in earlier versions. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"none")," driver (if your host is Linux with the ",(0,a.kt)("inlineCode",{parentName:"p"},"sch_netem")," kernel module loaded) to try these chaos actions using Minikube or ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/contrib/building/iso/"},"build an image with sch_netem by yourself"),"."))}m.isMDXComponent=!0}}]);