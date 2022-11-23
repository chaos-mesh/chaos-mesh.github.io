"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[66833,69708,94809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91262:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(72389);function o(e){let{children:t,fallback:n}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):n??null}},56871:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>l});var a=n(91262),r=n(52263),o=n(28084),i=n(90814),s=n(67294);const l=(e,t)=>{const n=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";const r=t.find((e=>e.isLast)),o=t.find((e=>n.includes(e.name)));return o?o.name:r.name};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:m="language-bash"}=e;const{siteConfig:p}=(0,r.Z)(),{versions:u}=(0,o.eZ)("docusaurus-plugin-content-docs");return s.createElement(a.Z,null,(()=>{const e=l(p,u),a=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return s.createElement(i.Z,{className:m},a)}))}},63021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"common/quick-run",id:"version-2.3.3/common/quick-run",title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.3.3/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/2.3.3/common/quick-run",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/common/quick-run.md",tags:[],version:"2.3.3",frontMatter:{}},l={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,r.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.3/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}p.isMDXComponent=!0},4867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"common/verify-installation",id:"version-2.3.3/common/verify-installation",title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.3.3/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/2.3.3/common/verify-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/common/verify-installation.md",tags:[],version:"2.3.3",frontMatter:{}},l={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-mesh\n")),(0,r.kt)("p",null,"The expected output is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,r.kt)("p",null,"If your actual output is similar to the expected output with ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"leader-election")," feature is turned off manually, ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," should only have 1 replication."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"))))}p.isMDXComponent=!0},45976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(56871),i=n(4867),s=n(63021);const l={title:"Quick Start (Test Recommended)"},c=void 0,m={unversionedId:"quick-start",id:"version-2.3.3/quick-start",title:"Quick Start (Test Recommended)",description:"This document describes how to quickly start Chaos Mesh in a test or local environment.",source:"@site/versioned_docs/version-2.3.3/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/2.3.3/quick-start",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/quick-start.md",tags:[],version:"2.3.3",frontMatter:{title:"Quick Start (Test Recommended)"},sidebar:"docs",previous:{title:"Basic Features",permalink:"/docs/2.3.3/basic-features"},next:{title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",permalink:"/docs/2.3.3/production-installation-using-helm"}},p={},u=[{value:"Environment preparation",id:"environment-preparation",level:2},{value:"Quick installation",id:"quick-installation",level:2},{value:"Verify the installation",id:"verify-the-installation",level:2},{value:"Run Chaos experiments",id:"run-chaos-experiments",level:2},{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why the <code>local</code> directory appears in the root directory after installation?",id:"why-the-local-directory-appears-in-the-root-directory-after-installation",level:3}],h={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to quickly start Chaos Mesh in a test or local environment."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"In this document, the Chaos Mesh installation is a script installation for quick trial only.")),(0,r.kt)("p",{parentName:"admonition"},"If you need to install Chaos Mesh in the production environment or other strict non-test scenarios, it is recommended to use ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),". For details, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.3/production-installation-using-helm"},"Installation using Helm (recommended for production)"),".")),(0,r.kt)("h2",{id:"environment-preparation"},"Environment preparation"),(0,r.kt)("p",null,"Please ensure that the Kubernetes cluster is deployed in the environment before the trial. If the Kubernetes cluster has not been deployed, you can refer to the links below to complete the deployment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microk8s.io/"},"Microk8s"))),(0,r.kt)("h2",{id:"quick-installation"},"Quick installation"),(0,r.kt)("p",null,"To install Chaos Mesh in a test environment, run the following script:"),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the current environment is ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),", add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--local kind")," parameter at the end of the script."),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,r.kt)("p",{parentName:"li"},"If you want to specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," version, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--kind-version xx")," parameter at the end of the script, for example:"),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.10.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the current environment is ",(0,r.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s"),", add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--k3s")," parameter at the end of the script."),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the current environment is ",(0,r.kt)("a",{parentName:"p",href:"https://microk8s.io/"},"Microk8s"),", add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--microk8s")," parameter at the end of the script."),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s")))),(0,r.kt)("p",null,"After running this script, Chaos Mesh automatically installs the CustomResourceDefining (CRD) that matches the version, all required components, and related Service Account configurations."),(0,r.kt)("p",null,"For more installation details, refer to the source code of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"install.sh")),"."),(0,r.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,r.kt)(i.default,{mdxType:"VerifyInstallation"}),(0,r.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,r.kt)(s.default,{mdxType:"QuickRun"}),(0,r.kt)("h2",{id:"uninstall-chaos-mesh"},"Uninstall Chaos Mesh"),(0,r.kt)("p",null,"To uninstall Chaos Mesh, execute the following command:"),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,r.kt)("p",null,"You can also delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," namespace to directly uninstall Chaos Mesh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete ns chaos-mesh\n")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"why-the-local-directory-appears-in-the-root-directory-after-installation"},"Why the ",(0,r.kt)("inlineCode",{parentName:"h3"},"local")," directory appears in the root directory after installation?"),(0,r.kt)("p",null,"If you don't install ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," in the existing environment, and you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--local kind")," parameter when executing the installation command, the ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," script will automatically install the ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," directory under the root directory."))}d.isMDXComponent=!0}}]);