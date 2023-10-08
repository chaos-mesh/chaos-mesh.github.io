"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9379],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=o,d=c["".concat(s,".").concat(u)]||c[u]||h[u]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(28957),o=(n(59496),n(49613));const r={title:"Configure the Development Environment"},i=void 0,l={unversionedId:"configure-development-environment",id:"version-2.5.2/configure-development-environment",title:"Configure the Development Environment",description:"This document describes how to configure a local development environment for Chaos Mesh.",source:"@site/versioned_docs/version-2.5.2/configure-development-environment.md",sourceDirName:".",slug:"/configure-development-environment",permalink:"/docs/2.5.2/configure-development-environment",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.5.2/configure-development-environment.md",tags:[],version:"2.5.2",frontMatter:{title:"Configure the Development Environment"},sidebar:"docs",previous:{title:"Developer Guide Overview",permalink:"/docs/2.5.2/developer-guide-overview"},next:{title:"Add New Chaos Experiment Type",permalink:"/docs/2.5.2/add-new-chaos-experiment-type"}},s={},m=[{value:"Configuration Requirements",id:"configuration-requirements",level:2},{value:"Compiling Chaos Mesh",id:"compiling-chaos-mesh",level:2},{value:"Run Chaos Mesh in Local minkube Kubernetes Cluster",id:"run-chaos-mesh-in-local-minkube-kubernetes-cluster",level:2},{value:"Debug Chaos Mesh in local environment",id:"debug-chaos-mesh-in-local-environment",level:2},{value:"Learn more",id:"learn-more",level:2}],p={toc:m},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to configure a local development environment for Chaos Mesh."),(0,o.kt)("p",null,"Most components of Chaos Mesh are designed only for Linux, so we suggest that you also configure your development environment to run on Linux. For example, using a virtual machine or WSL 2, and using VSCode Remote as your editor."),(0,o.kt)("p",null,"This document assumes that you use Linux, without the restriction on specific Linux distributions. If you persist to use Windows/MacOS, you might need some tricks to make it work by yourself."),(0,o.kt)("h2",{id:"configuration-requirements"},"Configuration Requirements"),(0,o.kt)("p",null,"Before configuring, we suggest to install the development tools for Chaos Mesh."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/"},"make")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"golang"),", v1.18 or later versions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/"},"gcc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm"),", v3.9.0 or later versions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs")," and ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/lang/en/"},"yarn"),", for developing Chaos Dashboard")),(0,o.kt)("h2",{id:"compiling-chaos-mesh"},"Compiling Chaos Mesh"),(0,o.kt)("p",null,"After installing the above tools, follow the steps below to configure the toolchain for compiling Chaos Mesh."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the Chaos Mesh repository to your local server."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running in your environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compile Chaos Mesh:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"UI=1 make\n")),(0,o.kt)("p",{parentName:"li"},"You should get these container images:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ghcr.io/chaos-mesh/chaos-dashboard:latest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ghcr.io/chaos-mesh/chaos-mesh:latest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ghcr.io/chaos-mesh/chaos-daemon:latest"))))),(0,o.kt)("h2",{id:"run-chaos-mesh-in-local-minkube-kubernetes-cluster"},"Run Chaos Mesh in Local minkube Kubernetes Cluster"),(0,o.kt)("p",null,"After compiling Chaos Mesh, you can run Chaos Mesh in a local Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start a local Kubernetes cluster with minkube."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Load container images into minikube"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube image load ghcr.io/chaos-mesh/chaos-dashboard:latest\nminikube image load ghcr.io/chaos-mesh/chaos-mesh:latest\nminikube image load ghcr.io/chaos-mesh/chaos-daemon:latest\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Chaos Mesh by Helm"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install chaos-mesh-debug ./helm/chaos-mesh --namespace=chaos-mesh-debug --create-namespace\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"minikube image load")," would cost lots of time, so here is a trick to avoid load images again and again. Using docker from minikube node instead of host's docker."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --mount --mount-string "$(pwd):$(pwd)"\neval $(minikube -p minikube docker-env)\nUI=1 make\n'))),(0,o.kt)("h2",{id:"debug-chaos-mesh-in-local-environment"},"Debug Chaos Mesh in local environment"),(0,o.kt)("p",null,"We could use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-delve/delve"},"delve")," with remote debugging to debug the Chaos Mesh in local environment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compile Chaos Mesh with Debug Info"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"UI=1 DEBUG=1 make\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Load container images into minikube"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube image load ghcr.io/chaos-mesh/chaos-dashboard:latest\nminikube image load ghcr.io/chaos-mesh/chaos-mesh:latest\nminikube image load ghcr.io/chaos-mesh/chaos-daemon:latest\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Chaos Mesh by Helm with Enabling Remote Debugging"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install chaos-mesh-debug ./helm/chaos-mesh --namespace=chaos-mesh-debug --create-namespace --set chaosDlv.enable=true --set controllerManager.replicaCount=1\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We would set 3 replicas for ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," for HA purpose, ",(0,o.kt)("inlineCode",{parentName:"p"},"--set controllerManager.replicaCount=1")," would create 1 instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," for easier debugging."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Setup Port-Forwarding and Configure IDE To Connect the Remote Debugger"),(0,o.kt)("p",{parentName:"li"},"We could use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," for port-forwarding the delve debugging server on a local port."),(0,o.kt)("p",{parentName:"li"},"For example, if we want to debug ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manger"),", we could execute the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n chaos-mesh-debug port-forward chaos-controller-manager-766dc8488d-7n5bq 58000:8000\n")),(0,o.kt)("p",{parentName:"li"},"Then we could access the remote delve debugger server with ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:58000"),"."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We always use ",(0,o.kt)("inlineCode",{parentName:"p"},"8000")," in the pod for serving the delve debug server, that's a convention. You could find that in helm templates files.")),(0,o.kt)("p",{parentName:"li"},"Then we could configure our favorite IDE to connect to the remote debugger:"),(0,o.kt)("p",{parentName:"li"},"For Goland, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/go/attach-to-running-go-processes-with-debugger.html#attach-to-a-process-on-a-remote-machine"},"Attach to running Go processes with the debugger#Attach to a process on a remote machine"),"."),(0,o.kt)("p",{parentName:"li"},"For VSCode, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/vscode-go/blob/master/docs/debugging.md#remote-debugging"},"vscode-go - Debugging#Remote Debugging"),"."))),(0,o.kt)("p",null,"For more detailed information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/images/chaos-dlv/README.md"},"README.md for container image chaos-dlv"),"."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"After finishing the above preparation, you can try to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/add-new-chaos-experiment-type"},"Add a New Chaos Experiment type"),"."))}h.isMDXComponent=!0}}]);