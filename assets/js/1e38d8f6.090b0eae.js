"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7060],{56871:function(e,t,n){var a=n(91262),i=n(73148),o=n(67294),s=n(52263),r=n(28084);t.Z=function(e){var t=e.children,n=e.className,l=function(e){var t=e.children;return o.createElement("div",{style:{marginBottom:"1.25rem"}},o.createElement(i.Z,{className:n},t))};return o.createElement(a.Z,{fallback:o.createElement(l,null,t)},(function(){var e=function(){var e=(0,s.Z)().siteConfig,t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var a=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions,i=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||i}(),n="latest"===e?t:t.replace("latest","v"+e);return o.createElement(l,null,n)}))}},73148:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(22122),i=n(67294),o=n(86010),s=n(24544),r=n(97985),l=n(87594),c=n.n(l),m=n(83583),d=n(24973),h="codeBlockContainer_2gih",u="codeBlockContent_3z4W",p="codeBlockTitle_1Kb7",k="codeBlock_6upA",f="codeBlockWithTitle_xy-i",v="copyButton_2e3i",g="codeBlockLines_xlV7",N=n(41773),y=/{([\d,-]+)}/,b=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function C(e){var t=e.children,n=e.className,l=e.metastring,C=e.title,x=(0,N.LU)().prism,w=(0,i.useState)(!1),M=w[0],T=w[1],E=(0,i.useState)(!1),Z=E[0],R=E[1];(0,i.useEffect)((function(){R(!0)}),[]);var S=(0,N.bc)(l)||C,q=(0,i.useRef)(null),A=[],B=(0,m.Z)(),j=Array.isArray(t)?t.join(""):t;if(l&&y.test(l)){var I=l.match(y)[1];A=c()(I).filter((function(e){return e>0}))}var D=n&&n.replace(/language-/,"");!D&&x.defaultLanguage&&(D=x.defaultLanguage);var _=j.replace(/\n$/,"");if(0===A.length&&void 0!==D){for(var z,L="",P=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"]);case"jsx":case"tsx":return b(["js","jsBlock","jsx"]);case"html":return b(["js","jsBlock","html"]);case"python":case"py":return b(["python"]);default:return b()}}(D),H=j.replace(/\n$/,"").split("\n"),V=0;V<H.length;){var Q=V+1,U=H[V].match(P);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=Q+",";break;case"highlight-start":z=Q;break;case"highlight-end":L+=z+"-"+(Q-1)+","}H.splice(V,1)}else V+=1}A=c()(L),_=H.join("\n")}var X=function(){(0,r.Z)(_),T(!0),setTimeout((function(){return T(!1)}),2e3)};return i.createElement(s.ZP,(0,a.Z)({},s.lG,{key:String(Z),theme:B,code:_,language:D}),(function(e){var t,n=e.className,s=e.style,r=e.tokens,l=e.getLineProps,c=e.getTokenProps;return i.createElement("div",{className:h},S&&i.createElement("div",{style:s,className:p},S),i.createElement("div",{className:(0,o.Z)(u,D)},i.createElement("div",{tabIndex:0,className:(0,o.Z)(n,k,"thin-scrollbar",(t={},t[f]=S,t))},i.createElement("div",{className:g,style:s},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return A.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),i.createElement("div",(0,a.Z)({key:t},n),e.map((function(e,t){return i.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))})))})))),i.createElement("button",{ref:q,type:"button","aria-label":(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(v),onClick:X},M?i.createElement(d.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):i.createElement(d.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},33047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),s={},r=void 0,l={unversionedId:"common/quick-run",id:"version-2.0.1/common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.0.1/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/common/quick-run",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/common/quick-run.md",tags:[],version:"2.0.1",frontMatter:{}},c=[],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,o.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}d.isMDXComponent=!0},55753:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),s={},r=void 0,l={unversionedId:"common/verify-installation",id:"version-2.0.1/common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.0.1/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/common/verify-installation.md",tags:[],version:"2.0.1",frontMatter:{}},c=[],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-testing\n")),(0,o.kt)("p",null,"The expected output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,o.kt)("p",null,"If your actual output is similar to the expected output with ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))))}d.isMDXComponent=!0},344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return h},default:function(){return k}});var a,i=n(22122),o=n(19756),s=(n(67294),n(3905)),r=n(56871),l=(n(55753),n(33047)),c={title:"Quick Start (Test Recommended)",sidebar_label:"Quick Start"},m=void 0,d={unversionedId:"quick-start",id:"version-2.0.1/quick-start",isDocsHomePage:!1,title:"Quick Start (Test Recommended)",description:"This document describes how to quickly start Chaos Mesh in a test or local environment.",source:"@site/versioned_docs/version-2.0.1/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/quick-start.md",tags:[],version:"2.0.1",frontMatter:{title:"Quick Start (Test Recommended)",sidebar_label:"Quick Start"},sidebar:"version-2.0.1/docs",previous:{title:"Basic Features",permalink:"/docs/basic-features"},next:{title:"Install Chaos Mesh using Helm",permalink:"/docs/production-installation-using-helm"}},h=[{value:"Environment preparation",id:"environment-preparation",children:[]},{value:"Quick installation",id:"quick-installation",children:[]},{value:"Verify the installation",id:"verify-the-installation",children:[]},{value:"Run Chaos experiments",id:"run-chaos-experiments",children:[]},{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why the <code>local</code> directory appears in the root directory after installation?",id:"why-the-local-directory-appears-in-the-root-directory-after-installation",children:[]}]}],u=(a="VerifyInstallation",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),p={toc:h};function k(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to quickly start Chaos Mesh in a test or local environment."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"In this document, the Chaos Mesh installation is a script installation for quick trial only.")),(0,s.kt)("p",{parentName:"div"},"If you need to install Chaos Mesh in the production environment or other strict non-test scenarios, it is recommended to use ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),". For details, refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/production-installation-using-helm"},"Installation using Helm (recommended for production)"),"."))),(0,s.kt)("h2",{id:"environment-preparation"},"Environment preparation"),(0,s.kt)("p",null,"Please ensure that the Kubernetes cluster is deployed in the environment before the trial. If the Kubernetes cluster has not been deployed, you can refer to the links below to complete the deployment:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://microk8s.io/"},"Microk8s"))),(0,s.kt)("h2",{id:"quick-installation"},"Quick installation"),(0,s.kt)("p",null,"To install Chaos Mesh in a test environment, run the following script:"),(0,s.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If the current environment is ",(0,s.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),", add the ",(0,s.kt)("inlineCode",{parentName:"p"},"--local kind")," parameter at the end of the script."),(0,s.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,s.kt)("p",{parentName:"li"},"If you want to specify a ",(0,s.kt)("inlineCode",{parentName:"p"},"kind")," version, add the ",(0,s.kt)("inlineCode",{parentName:"p"},"--kind-version xx")," parameter at the end of the script, for example:"),(0,s.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.10.0")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If the current environment is ",(0,s.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s"),", add the ",(0,s.kt)("inlineCode",{parentName:"p"},"--k3s")," parameter at the end of the script."),(0,s.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If the current environment is ",(0,s.kt)("a",{parentName:"p",href:"https://microk8s.io/"},"Microk8s"),", add the ",(0,s.kt)("inlineCode",{parentName:"p"},"--microk8s")," parameter at the end of the script."),(0,s.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s"))))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To speed up the image pulling process, users in the Chinese mainland can add the ",(0,s.kt)("inlineCode",{parentName:"p"},"--docker-mirror")," parameter at the end of the script. After adding this parameter, the ",(0,s.kt)("inlineCode",{parentName:"p"},"install.sh")," script pulls images from ",(0,s.kt)("inlineCode",{parentName:"p"},"dockerhub.azk8s.cn")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"gcr.azk8s.cn"),"."))),(0,s.kt)("p",null,"After running this script, Chaos Mesh automatically installs the CustomResourceDefining (CRD) that matches the version, all required components, and related Service Account configurations."),(0,s.kt)("p",null,"For more installation details, refer to the source code of the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh"},(0,s.kt)("inlineCode",{parentName:"a"},"install.sh")),"."),(0,s.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,s.kt)(u,{mdxType:"VerifyInstallation"}),(0,s.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,s.kt)(l.default,{mdxType:"QuickRun"}),(0,s.kt)("h2",{id:"uninstall-chaos-mesh"},"Uninstall Chaos Mesh"),(0,s.kt)("p",null,"To uninstall Chaos Mesh, execute the following command:"),(0,s.kt)(r.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,s.kt)("p",null,"You can also delete the ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-testing")," namespace to directly uninstall Chaos Mesh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete ns chaos-testing\n")),(0,s.kt)("h2",{id:"faq"},"FAQ"),(0,s.kt)("h3",{id:"why-the-local-directory-appears-in-the-root-directory-after-installation"},"Why the ",(0,s.kt)("inlineCode",{parentName:"h3"},"local")," directory appears in the root directory after installation?"),(0,s.kt)("p",null,"If you don't install ",(0,s.kt)("inlineCode",{parentName:"p"},"kind")," in the existing environment, and you use the ",(0,s.kt)("inlineCode",{parentName:"p"},"--local kind")," parameter when executing the installation command, the ",(0,s.kt)("inlineCode",{parentName:"p"},"install.sh")," script will automatically install the ",(0,s.kt)("inlineCode",{parentName:"p"},"kind")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"local")," directory under the root directory."))}k.isMDXComponent=!0}}]);