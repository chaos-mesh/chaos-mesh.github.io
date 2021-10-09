"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9114,2694,5662],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91262:function(e,t,n){var a=n(67294),r=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,r.Z)()&&null!=t?a.createElement(a.Fragment,null,t()):n||null}},56871:function(e,t,n){n.d(t,{p:function(){return l}});var a=n(91262),r=n(16213),i=n(67294),o=n(52263),s=n(28084),l=function(e,t){var n=window.location.pathname,a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";var r=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return n.includes(e.name)})).map((function(e){return e.name}))[0]||r};t.Z=function(e){var t=e.children,n=e.className,c=(0,o.Z)().siteConfig,m=(0,s.usePluginData)("docusaurus-plugin-content-docs").versions;return i.createElement(a.Z,null,(function(){var e=l(c,m),a="latest"===e?t:t.replace("latest","v"+e);return i.createElement(r.Z,{className:n},a)}))}},4414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l=void 0,c={unversionedId:"common/quick-run",id:"version-2.0.2/common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.0.2/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/common/quick-run",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.2/common/quick-run.md",tags:[],version:"2.0.2",frontMatter:{}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,i.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}u.isMDXComponent=!0},26661:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l=void 0,c={unversionedId:"common/verify-installation",id:"version-2.0.2/common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.0.2/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.2/common/verify-installation.md",tags:[],version:"2.0.2",frontMatter:{}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-testing\n")),(0,i.kt)("p",null,"The expected output is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,i.kt)("p",null,"If your actual output is similar to the expected output with ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))))}u.isMDXComponent=!0},1530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(56871),s=n(26661),l=n(4414),c=["components"],m={title:"Quick Start (Test Recommended)"},p=void 0,u={unversionedId:"quick-start",id:"version-2.0.2/quick-start",isDocsHomePage:!1,title:"Quick Start (Test Recommended)",description:"This document describes how to quickly start Chaos Mesh in a test or local environment.",source:"@site/versioned_docs/version-2.0.2/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.2/quick-start.md",tags:[],version:"2.0.2",frontMatter:{title:"Quick Start (Test Recommended)"},sidebar:"version-2.0.2/docs",previous:{title:"Basic Features",permalink:"/docs/basic-features"},next:{title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",permalink:"/docs/production-installation-using-helm"}},d=[{value:"Environment preparation",id:"environment-preparation",children:[]},{value:"Quick installation",id:"quick-installation",children:[]},{value:"Verify the installation",id:"verify-the-installation",children:[]},{value:"Run Chaos experiments",id:"run-chaos-experiments",children:[]},{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why the <code>local</code> directory appears in the root directory after installation?",id:"why-the-local-directory-appears-in-the-root-directory-after-installation",children:[]}]}],h={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to quickly start Chaos Mesh in a test or local environment."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"In this document, the Chaos Mesh installation is a script installation for quick trial only.")),(0,i.kt)("p",{parentName:"div"},"If you need to install Chaos Mesh in the production environment or other strict non-test scenarios, it is recommended to use ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),". For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/production-installation-using-helm"},"Installation using Helm (recommended for production)"),"."))),(0,i.kt)("h2",{id:"environment-preparation"},"Environment preparation"),(0,i.kt)("p",null,"Please ensure that the Kubernetes cluster is deployed in the environment before the trial. If the Kubernetes cluster has not been deployed, you can refer to the links below to complete the deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://microk8s.io/"},"Microk8s"))),(0,i.kt)("h2",{id:"quick-installation"},"Quick installation"),(0,i.kt)("p",null,"To install Chaos Mesh in a test environment, run the following script:"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the current environment is ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),", add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--local kind")," parameter at the end of the script."),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,i.kt)("p",{parentName:"li"},"If you want to specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," version, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--kind-version xx")," parameter at the end of the script, for example:"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.10.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the current environment is ",(0,i.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s"),", add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--k3s")," parameter at the end of the script."),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the current environment is ",(0,i.kt)("a",{parentName:"p",href:"https://microk8s.io/"},"Microk8s"),", add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--microk8s")," parameter at the end of the script."),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To speed up the image pulling process, users in the Chinese mainland can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--docker-mirror")," parameter at the end of the script. After adding this parameter, the ",(0,i.kt)("inlineCode",{parentName:"p"},"install.sh")," script pulls images from ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerhub.azk8s.cn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gcr.azk8s.cn"),"."))),(0,i.kt)("p",null,"After running this script, Chaos Mesh automatically installs the CustomResourceDefining (CRD) that matches the version, all required components, and related Service Account configurations."),(0,i.kt)("p",null,"For more installation details, refer to the source code of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh"},(0,i.kt)("inlineCode",{parentName:"a"},"install.sh")),"."),(0,i.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,i.kt)(s.default,{mdxType:"VerifyInstallation"}),(0,i.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,i.kt)(l.default,{mdxType:"QuickRun"}),(0,i.kt)("h2",{id:"uninstall-chaos-mesh"},"Uninstall Chaos Mesh"),(0,i.kt)("p",null,"To uninstall Chaos Mesh, execute the following command:"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,i.kt)("p",null,"You can also delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-testing")," namespace to directly uninstall Chaos Mesh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete ns chaos-testing\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"why-the-local-directory-appears-in-the-root-directory-after-installation"},"Why the ",(0,i.kt)("inlineCode",{parentName:"h3"},"local")," directory appears in the root directory after installation?"),(0,i.kt)("p",null,"If you don't install ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," in the existing environment, and you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--local kind")," parameter when executing the installation command, the ",(0,i.kt)("inlineCode",{parentName:"p"},"install.sh")," script will automatically install the ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," directory under the root directory."))}k.isMDXComponent=!0}}]);