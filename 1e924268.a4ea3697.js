(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{113:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return u}));var n=t(0),s=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),b=function(e){var a=s.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=b(e.components);return s.a.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},h=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=b(t),h=n,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||r;return t?s.a.createElement(u,o(o({ref:a},i),{},{components:t})):s.a.createElement(u,o({ref:a},i))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<r;i++)c[i]=t[i];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(2),s=t(6),r=(t(0),t(113)),c={id:"installation",title:"Installation"},o={unversionedId:"installation/installation",id:"installation/installation",isDocsHomePage:!1,title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/docs/installation/installation.md",permalink:"/docs/installation/installation",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/installation/installation.md",sidebar:"docs",previous:{title:"Chaos Mesh",permalink:"/docs/"},next:{title:"Get started on kind",permalink:"/docs/installation/get_started_on_kind"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Install by helm",id:"install-by-helm",children:[{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",children:[]},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",children:[]},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",children:[]}]}],i={rightToc:l};function b(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),Object(r.b)("p",null,"If you want to try Chaos Mesh on your your laptop (Linux or macOS), you can refer the following two documents:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/installation/get_started_on_kind"}),"Get started on kind")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/installation/get_started_on_minikube"}),"Get started on minikube"))),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/admin/authorization/rbac"}),"RBAC")," enabled (optional)")),Object(r.b)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash\n")),Object(r.b)("p",null,"The above command install all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),Object(r.b)("p",null,"If you are using k3s or k3d, please also specify ",Object(r.b)("inlineCode",{parentName:"p"},"--k3s")," flag."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh --k3s | bash\n")),Object(r.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(r.b)("p",null,"Verify if the chaos mesh is running (For the use of ",Object(r.b)("em",{parentName:"p"},"kubectl"),", you can refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"}),"documentation"),".)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(r.b)("p",null,"Expected output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(r.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(r.b)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -\n")),Object(r.b)("h2",{id:"install-by-helm"},"Install by helm"),Object(r.b)("p",null,"You also can install Chaos Mesh by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh"}),"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),Object(r.b)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),Object(r.b)("p",null,"After adding the repository successfully, you can search available version by the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm search repo chaos-mesh\n")),Object(r.b)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),Object(r.b)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -\n")),Object(r.b)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),Object(r.b)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install in Docker environment"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create namespace ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For helm 2.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For helm 3.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("p",{parentName:"li"},"Expected output:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install in containerd environment (kind)"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create namespace ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 2.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 3.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("p",{parentName:"li"},"Expected output:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install in containerd environment (k3s)"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create namespace ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 2.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 3.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("p",{parentName:"li"},"Expected output:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",Object(r.b)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the helm commands above. Refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/helm/chaos-mesh#configuration"}),"Configuration")," for more information.")),Object(r.b)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/issues"}),"issue")," for help."))}b.isMDXComponent=!0}}]);