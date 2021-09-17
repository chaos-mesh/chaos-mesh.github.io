"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6569],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,d=p["".concat(i,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},91262:function(e,t,a){var n=a(67294),s=a(72389);t.Z=function(e){var t=e.children,a=e.fallback;return(0,s.Z)()&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},89400:function(e,t,a){var n=a(91262),s=a(16213),r=a(67294),o=a(52263),l=a(56871),i=a(28084);t.Z=function(e){var t=e.children,a=e.className,c=(0,o.Z)().siteConfig,m=(0,i.usePluginData)("docusaurus-plugin-content-docs").versions;return r.createElement(n.Z,null,(function(){var e=(0,l.p)(c,m),n="latest"===e?"":"--version v"+function(e){if("2"===e[0])return e;var t=e.slice(0,3);return parseFloat(t)-.7+e.slice(3)}(e);return r.createElement(s.Z,{className:a},t.replace("--version latest",n).trim())}))}},56871:function(e,t,a){a.d(t,{p:function(){return i}});var n=a(91262),s=a(16213),r=a(67294),o=a(52263),l=a(28084),i=function(e,t){var a=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";var s=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||s};t.Z=function(e){var t=e.children,a=e.className,c=(0,o.Z)().siteConfig,m=(0,l.usePluginData)("docusaurus-plugin-content-docs").versions;return r.createElement(n.Z,null,(function(){var e=i(c,m),n="latest"===e?t:t.replace("latest","v"+e);return r.createElement(s.Z,{className:a},n)}))}},70958:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return p},default:function(){return d}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),o=a(56871),l=a(89400),i=["components"],c={id:"installation",title:"Installation"},m=void 0,h={unversionedId:"installation/installation",id:"version-0.9.1/installation/installation",isDocsHomePage:!1,title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/versioned_docs/version-0.9.1/installation/installation.md",sourceDirName:"installation",slug:"/installation/installation",permalink:"/docs/0.9.1/installation/installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/installation/installation.md",tags:[],version:"0.9.1",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-0.9.1/docs",previous:{title:"Blast Radius",permalink:"/docs/0.9.1/concepts/blast_radius"},next:{title:"Get started on kind",permalink:"/docs/0.9.1/installation/get_started_on_kind"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Install by helm",id:"install-by-helm",children:[{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",children:[]},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",children:[]},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",children:[]}]}],u={toc:p};function d(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),(0,r.kt)("p",null,"If you want to try Chaos Mesh on your your laptop (Linux or macOS), you can refer the following two documents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.9.1/installation/get_started_on_kind"},"Get started on kind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.9.1/installation/get_started_on_minikube"},"Get started on minikube"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/admin/authorization/rbac"},"RBAC")," enabled (optional)")),(0,r.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,r.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,r.kt)("p",null,"If you are using k3s or k3d, please also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--k3s")," flag."),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," is suitable for trying Chaos Mesh out. If you want to use Chaos Mesh in production or other serious scenarios, Helm is the recommended deployment method.")),(0,r.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,r.kt)("p",null,"Verify if Chaos Mesh is running (For the use of ",(0,r.kt)("em",{parentName:"p"},"kubectl"),", you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"},"documentation"),".)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,r.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,r.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,r.kt)("h2",{id:"install-by-helm"},"Install by helm"),(0,r.kt)("p",null,"You also can install Chaos Mesh by ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),(0,r.kt)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,r.kt)("p",null,"After adding the repository successfully, you can search available version by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,r.kt)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),(0,r.kt)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"),(0,r.kt)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),(0,r.kt)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install in Docker environment"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For helm 2.X")),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For helm 3.X")),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,r.kt)("p",{parentName:"li"},"Expected output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install in containerd environment (kind)"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,r.kt)("p",{parentName:"li"},"Expected output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install in containerd environment (k3s)"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,r.kt)("p",{parentName:"li"},"Expected output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," commands above. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/helm/chaos-mesh#configuration"},"Configuration")," for more information.")),(0,r.kt)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," for help."))}d.isMDXComponent=!0}}]);