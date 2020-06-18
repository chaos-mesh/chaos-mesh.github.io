(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(9),s=(a(0),a(185)),l={id:"installation",title:"Installation",sidebar_label:"Installation"},c={id:"installation/installation",title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/docs/installation/installation.md",permalink:"/docs/installation/installation",editUrl:"https://github.com/pingcap/chaos-mesh/edit/master/website/docs/installation/installation.md",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Chaos Mesh",permalink:"/docs/overview"},next:{title:"Get Started on kind",permalink:"/docs/installation/get_started_on_kind"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Install by Helm",id:"install-by-helm",children:[{value:"Step 1: Get Chaos Mesh",id:"step-1-get-chaos-mesh",children:[]},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",children:[]},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",children:[]}]}],i={rightToc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),Object(s.b)("p",null,"If you want to try Chaos Mesh on your your laptop (Linux or macOS), you can refer the following two documents:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"get_started_on_kind"}),"Get started on kind")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"get_started_on_minikube"}),"Get started on minikube"))),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/admin/authorization/rbac"}),"RBAC")," enabled (optional)")),Object(s.b)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://raw.githubusercontent.com/pingcap/chaos-mesh/master/install.sh | bash\n")),Object(s.b)("p",null,"The above command install all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),Object(s.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(s.b)("p",null,"Verify if the chaos mesh is running"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(s.b)("p",null,"Expected output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(s.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(s.b)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://raw.githubusercontent.com/pingcap/chaos-mesh/master/install.sh | sh -s -- --template | kubectl delete -f -\n")),Object(s.b)("h2",{id:"install-by-helm"},"Install by Helm"),Object(s.b)("p",null,"You also can install Chaos Mesh by ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh"}),"Helm"),".\nBefore you start installing, make sure that Helm v2 or Helm v3 is installed correctly."),Object(s.b)("h3",{id:"step-1-get-chaos-mesh"},"Step 1: Get Chaos Mesh"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/pingcap/chaos-mesh.git\ncd chaos-mesh/\n")),Object(s.b)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),Object(s.b)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f manifests/crd.yaml\n")),Object(s.b)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),Object(s.b)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Install in Docker environment"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Create namespace ",Object(s.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Install Chaos Mesh using Helm:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"For Helm 2.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"For Helm 3.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n"))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Install in containerd environment (kind)"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Create namespace ",Object(s.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Install Chaos Mesh using Helm:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"for Helm 2.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install helm/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"for Helm 3.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")))))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Note:")),Object(s.b)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",Object(s.b)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the Helm commands above. Refer to ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../helm/chaos-mesh/README.md#configuration"}),"Configuration")," for more information.")),Object(s.b)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pingcap/chaos-mesh/issues"}),"issue")," for help."))}b.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||s;return a?r.a.createElement(u,c(c({ref:t},i),{},{components:a})):r.a.createElement(u,c({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<s;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);