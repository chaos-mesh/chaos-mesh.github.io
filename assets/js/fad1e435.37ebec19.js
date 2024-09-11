"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1858],{88921:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(86070),o=s(6383);const t={title:"Configure the Development Environment"},r=void 0,a={id:"configure-development-environment",title:"Configure the Development Environment",description:"This document describes how to configure a local development environment for Chaos Mesh.",source:"@site/docs/configure-development-environment.md",sourceDirName:".",slug:"/configure-development-environment",permalink:"/docs/next/configure-development-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/configure-development-environment.md",tags:[],version:"current",frontMatter:{title:"Configure the Development Environment"},sidebar:"docs",previous:{title:"Developer Guide Overview",permalink:"/docs/next/developer-guide-overview"},next:{title:"Add a New Chaos Experiment Type",permalink:"/docs/next/add-new-chaos-experiment-type"}},l={},c=[{value:"Configuration Requirements",id:"configuration-requirements",level:2},{value:"Compiling Chaos Mesh",id:"compiling-chaos-mesh",level:2},{value:"Run Chaos Mesh in local minkube Kubernetes cluster",id:"run-chaos-mesh-in-local-minkube-kubernetes-cluster",level:2},{value:"Debug Chaos Mesh in local environment",id:"debug-chaos-mesh-in-local-environment",level:2},{value:"What&#39;s Next",id:"whats-next",level:2},{value:"FAQ",id:"faq",level:2},{value:"Run make fail with <code>error obtaining VCS status: exit status 128</code> in MacOS",id:"run-make-fail-with-error-obtaining-vcs-status-exit-status-128-in-macos",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This document describes how to configure a local development environment for Chaos Mesh."}),"\n",(0,i.jsxs)(n.p,{children:["Most components of Chaos Mesh are ",(0,i.jsx)(n.strong,{children:"only designed for Linux"}),", so we suggest that you also configure your development environment to run on Linux. For example, use a virtual machine or WSL 2 and use VSCode Remote as your editor."]}),"\n",(0,i.jsx)(n.p,{children:"This document assumes that you are using Linux, without the limitations of specific Linux distributions. If you insist on using Windows/MacOS, you may need some tricks to make it work for you (For example, some make targets may fail depending on the environment)."}),"\n",(0,i.jsx)(n.h2,{id:"configuration-requirements",children:"Configuration Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Before configuring, it is recommended that you install the development tools listed below, most of them may already be installed in your environment:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.gnu.org/software/make/",children:"make"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"docker"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://go.dev/doc/install",children:"golang"}),", ",(0,i.jsx)(n.code,{children:"v1.18"})," or later versions"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gcc.gnu.org/",children:"gcc"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://helm.sh/",children:"helm"}),", ",(0,i.jsx)(n.code,{children:"v3.9.0"})," or later versions"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"minikube"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Optional:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/",children:"nodejs"})," and ",(0,i.jsx)(n.a,{href:"https://pnpm.io/",children:"pnpm"}),", for developing Chaos Dashboard"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"compiling-chaos-mesh",children:"Compiling Chaos Mesh"}),"\n",(0,i.jsx)(n.p,{children:"After installing, follow the steps below to compile Chaos Mesh."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone the Chaos Mesh repository to your local server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Make sure that ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"Docker"})," is installed and running."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Chaos Mesh relies on Docker to build container images, this is for consistency with the production environment."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compile Chaos Mesh:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"UI=1 make image\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"UI=1"})," means that we will compile the user interface of Chaos Dashboard, if you don't need it, you can omit this env."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you want to specify the tag of the image, you can use ",(0,i.jsx)(n.code,{children:"UI=1 make IMAGE_TAG=dev image"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"After compiling, you should get the following container images:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ghcr.io/chaos-mesh/chaos-dashboard:latest"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ghcr.io/chaos-mesh/chaos-mesh:latest"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ghcr.io/chaos-mesh/chaos-daemon:latest"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"run-chaos-mesh-in-local-minkube-kubernetes-cluster",children:"Run Chaos Mesh in local minkube Kubernetes cluster"}),"\n",(0,i.jsx)(n.p,{children:"Now you can run Chaos Mesh in a local Kubernetes cluster after compiling."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start a local Kubernetes cluster with minkube:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"minikube start\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load container images into minikube:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"minikube image load ghcr.io/chaos-mesh/chaos-dashboard:latest\nminikube image load ghcr.io/chaos-mesh/chaos-mesh:latest\nminikube image load ghcr.io/chaos-mesh/chaos-daemon:latest\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Chaos Mesh by Helm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install chaos-mesh-debug ./helm/chaos-mesh --namespace=chaos-mesh-debug --create-namespace\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"minikube image load"})," would cost lots of time, so here is a trick to avoid load images again and again during development. Using docker from minikube node instead of host's docker:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'minikube start --mount --mount-string "$(pwd):$(pwd)"\neval $(minikube -p minikube docker-env)\nUI=1 make image\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"debug-chaos-mesh-in-local-environment",children:"Debug Chaos Mesh in local environment"}),"\n",(0,i.jsxs)(n.p,{children:["We could use ",(0,i.jsx)(n.a,{href:"https://github.com/go-delve/delve",children:"delve"})," with remote debugging to debug the Chaos Mesh in local environment."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Compile Chaos Mesh with ",(0,i.jsx)(n.code,{children:"DEBUGGER=1"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"UI=1 DEBUGGER=1 make image\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load container images into minikube:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"minikube image load ghcr.io/chaos-mesh/chaos-mesh:latest\nminikube image load ghcr.io/chaos-mesh/chaos-daemon:latest\nminikube image load ghcr.io/chaos-mesh/chaos-dashboard:latest\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Chaos Mesh and enable Remote Debugging:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install chaos-mesh-debug ./helm/chaos-mesh --namespace=chaos-mesh-debug --create-namespace --set chaosDlv.enable=true --set controllerManager.leaderElection.enabled=false\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["To ensure high availability, Chaos Mesh turns on ",(0,i.jsx)(n.code,{children:"leader-election"})," feature by default and will create 3 replicas for ",(0,i.jsx)(n.code,{children:"chaos-controller-manager"}),". We will use ",(0,i.jsx)(n.code,{children:"controllerManager.leaderElection.enabled=false"})," to ensure that Chaos Mesh only creates 1 instance of ",(0,i.jsx)(n.code,{children:"chaos-controller-manager"})," for easier debugging."]}),(0,i.jsxs)(n.p,{children:["For more details, see ",(0,i.jsx)(n.a,{href:"/docs/next/production-installation-using-helm#step-4-install-chaos-mesh-in-different-environments",children:"Install Chaos Mesh in different environments"}),"."]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Setup Port-Forwarding and Configure IDE To Connect the Remote Debugger:"}),"\n",(0,i.jsxs)(n.p,{children:["We could use ",(0,i.jsx)(n.code,{children:"kubectl port-forward"})," to forward the delve debugging server to a local port."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if we want to debug ",(0,i.jsx)(n.code,{children:"chaos-controller-manger"}),", we could execute the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl -n chaos-mesh-debug port-forward chaos-controller-manager-766dc8488d-7n5bq 58000:8000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then we could access the remote delve debugger server with ",(0,i.jsx)(n.code,{children:"127.0.0.1:58000"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["We always use ",(0,i.jsx)(n.code,{children:"8000"})," in the pod for serving the delve debug server, that's a convention. You could find that in helm templates files."]})}),"\n",(0,i.jsx)(n.p,{children:"Then we could configure our favorite IDE to connect to the remote debugger, below are some examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Goland, see ",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/help/go/attach-to-running-go-processes-with-debugger.html#attach-to-a-process-on-a-remote-machine",children:"Attach to running Go processes with the debugger#Attach to a process on a remote machine"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For VSCode, see ",(0,i.jsx)(n.a,{href:"https://github.com/golang/vscode-go/blob/master/docs/debugging.md#remote-debugging",children:"vscode-go - Debugging#Remote Debugging"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed information, see ",(0,i.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/images/chaos-dlv/README.md",children:"README.md for container image chaos-dlv"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,i.jsxs)(n.p,{children:["After finishing the above preparation, you can try to ",(0,i.jsx)(n.a,{href:"/docs/next/add-new-chaos-experiment-type",children:"Add a New Chaos Experiment Type"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.h3,{id:"run-make-fail-with-error-obtaining-vcs-status-exit-status-128-in-macos",children:["Run make fail with ",(0,i.jsx)(n.code,{children:"error obtaining VCS status: exit status 128"})," in MacOS"]}),"\n",(0,i.jsxs)(n.p,{children:["The reason is related to ",(0,i.jsx)(n.a,{href:"https://github.blog/2022-04-12-git-security-vulnerability-announced/",children:"https://github.blog/2022-04-12-git-security-vulnerability-announced/"}),". It's recommended you to read it first."]}),"\n",(0,i.jsxs)(n.p,{children:["Chaos Mesh will start the container (",(0,i.jsx)(n.code,{children:"dev-env"})," or ",(0,i.jsx)(n.code,{children:"build-env"}),") with the current user (when you call ",(0,i.jsx)(n.code,{children:"make"}),"). You can find the appropriate ",(0,i.jsx)(n.code,{children:"--user"})," flag in ",(0,i.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/813b650c02e0b065ae5c4707725c346929ab1847/build/get_env_shell.py#L81C10-L81C10",children:"get_env_shell.py#L81C10-L81C10"}),". So when Git is looking for a top-level ",(0,i.jsx)(n.code,{children:".git"})," directory, it will stop if its directory traversal changes ownership from the current user."]}),"\n",(0,i.jsxs)(n.p,{children:["A temporary solution for now is to comment out the line of ",(0,i.jsx)(n.code,{children:"--user"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6383:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(30758);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);