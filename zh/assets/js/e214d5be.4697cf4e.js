"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9493],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91262:function(e,t,n){var r=n(67294),a=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,a.Z)()&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},56871:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(91262),a=n(19055),i=n(67294),o=n(52263),s=n(28084),l=function(e,t){var n=window.location.pathname,r=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&r)return"current"===r?"latest":r;if(n.includes("/docs/next"))return"latest";var a=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return n.includes(e.name)})).map((function(e){return e.name}))[0]||a};t.Z=function(e){var t=e.children,n=e.replaced,u=void 0===n?"latest":n,c=e.isArchive,p=void 0!==c&&c,m=e.className,d=void 0===m?"language-bash":m,h=(0,o.Z)().siteConfig,f=(0,s.usePluginData)("docusaurus-plugin-content-docs").versions;return i.createElement(r.Z,null,(function(){var e=l(h,f),n=p?t.replace(u,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(u,"v"+e);return i.createElement(a.Z,{className:d},n)}))}},69648:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(56871),s=["components"],l={title:"Get started on Minikube"},u=void 0,c={unversionedId:"get_started/get_started_on_minikube",id:"version-1.2.4/get_started/get_started_on_minikube",isDocsHomePage:!1,title:"Get started on Minikube",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube.",source:"@site/versioned_docs/version-1.2.4/get_started/get_started_on_minikube.md",sourceDirName:"get_started",slug:"/get_started/get_started_on_minikube",permalink:"/zh/docs/1.2.4/get_started/get_started_on_minikube",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/get_started/get_started_on_minikube.md",tags:[],version:"1.2.4",frontMatter:{title:"Get started on Minikube"},sidebar:"version-1.2.4/docs",previous:{title:"Get started on kind",permalink:"/zh/docs/1.2.4/get_started/get_started_on_kind"},next:{title:"Installation",permalink:"/zh/docs/1.2.4/user_guides/installation"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Step 1: Set up the Kubernetes environment",id:"step-1-set-up-the-kubernetes-environment",children:[],level:2},{value:"Step 2: Install Chaos Mesh",id:"step-2-install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[],level:3}],level:2},{value:"Run Chaos experiment",id:"run-chaos-experiment",children:[],level:2},{value:"Uninstallation",id:"uninstallation",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before deployment, make sure ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"Minikube")," is installed on your local machine."),(0,i.kt)("h2",{id:"step-1-set-up-the-kubernetes-environment"},"Step 1: Set up the Kubernetes environment"),(0,i.kt)("p",null,"Perform the following steps to set up the local Kubernetes environment:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start a Kubernetes cluster:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --kubernetes-version v1.15.0 --cpus 4 --memory "8192mb"\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"It is recommended to allocate enough RAM (more than 8192 MiB) to the Virtual Machine (VM) using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cpus")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--memory")," flag."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install helm:"),(0,i.kt)("p",{parentName:"li"},"Following helm installation steps: ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install"},"https://helm.sh/docs/intro/install")))),(0,i.kt)("h2",{id:"step-2-install-chaos-mesh"},"Step 2: Install Chaos Mesh"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,i.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components. Before you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,i.kt)("p",null,"You also can use ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," to ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/1.2.4/user_guides/installation#install-by-helm"},"install Chaos Mesh manually"),"."),(0,i.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,i.kt)("p",null,"Verify if Chaos Mesh is running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,i.kt)("p",null,"Expected output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,i.kt)("h2",{id:"run-chaos-experiment"},"Run Chaos experiment"),(0,i.kt)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. Follow the steps in ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/1.2.4/user_guides/run_chaos_experiment"},"Run chaos experiment")," to run a Chaos experiment and then observe it on Chaos Mesh Dashboard."),(0,i.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,i.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"There are some known restrictions for Chaos Operator deployed in the Minikube cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"netem chaos")," is only supported for Minikube clusters >= version 1.6.")),(0,i.kt)("p",null,"In Minikube, the default virtual machine driver's image does not contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"sch_netem")," kernel module in earlier versions. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," driver (if your host is Linux with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sch_netem")," kernel module loaded) to try these chaos actions using Minikube or ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/contrib/building/iso/"},"build an image with sch_netem by yourself"),"."))}d.isMDXComponent=!0}}]);