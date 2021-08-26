"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2907],{56871:function(e,t,n){var a=n(91262),s=n(73148),o=n(67294),i=n(52263),r=n(28084);t.Z=function(e){var t=e.children,n=e.className,l=function(e){var t=e.children;return o.createElement("div",{style:{marginBottom:"1.25rem"}},o.createElement(s.Z,{className:n},t))};return o.createElement(a.Z,{fallback:o.createElement(l,null,t)},(function(){var e=function(){var e=(0,i.Z)().siteConfig,t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var a=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions,s=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||s}(),n="latest"===e?t:t.replace("latest","v"+e);return o.createElement(l,null,n)}))}},73148:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(22122),s=n(67294),o=n(86010),i=n(24544),r=n(97985),l=n(87594),c=n.n(l),h=n(83583),m=n(24973),d="codeBlockContainer_2gih",p="codeBlockContent_3z4W",u="codeBlockTitle_1Kb7",v="codeBlock_6upA",k="codeBlockWithTitle_xy-i",f="copyButton_2e3i",g="codeBlockLines_xlV7",N=n(13018),w=/{([\d,-]+)}/,y=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function C(e){var t=e.children,n=e.className,l=e.metastring,C=e.title,b=(0,N.LU)().prism,M=(0,s.useState)(!1),x=M[0],T=M[1],H=(0,s.useState)(!1),z=H[0],I=H[1];(0,s.useEffect)((function(){I(!0)}),[]);var R=(0,N.bc)(l)||C,E=(0,s.useRef)(null),B=[],S=(0,h.Z)(),A=Array.isArray(t)?t.join(""):t;if(l&&w.test(l)){var D=l.match(w)[1];B=c()(D).filter((function(e){return e>0}))}var Z=n&&n.replace(/language-/,"");!Z&&b.defaultLanguage&&(Z=b.defaultLanguage);var j=A.replace(/\n$/,"");if(0===B.length&&void 0!==Z){for(var _,V="",q=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"]);case"jsx":case"tsx":return y(["js","jsBlock","jsx"]);case"html":return y(["js","jsBlock","html"]);case"python":case"py":return y(["python"]);default:return y()}}(Z),P=A.replace(/\n$/,"").split("\n"),L=0;L<P.length;){var U=L+1,G=P[L].match(q);if(null!==G){switch(G.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":V+=U+",";break;case"highlight-start":_=U;break;case"highlight-end":V+=_+"-"+(U-1)+","}P.splice(L,1)}else L+=1}B=c()(V),j=P.join("\n")}var X=function(){(0,r.Z)(j),T(!0),setTimeout((function(){return T(!1)}),2e3)};return s.createElement(i.ZP,(0,a.Z)({},i.lG,{key:String(z),theme:S,code:j,language:Z}),(function(e){var t,n=e.className,i=e.style,r=e.tokens,l=e.getLineProps,c=e.getTokenProps;return s.createElement("div",{className:d},R&&s.createElement("div",{style:i,className:u},R),s.createElement("div",{className:(0,o.Z)(p,Z)},s.createElement("div",{tabIndex:0,className:(0,o.Z)(n,v,"thin-scrollbar",(t={},t[k]=R,t))},s.createElement("div",{className:g,style:i},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return B.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),s.createElement("div",(0,a.Z)({key:t},n),e.map((function(e,t){return s.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))})))})))),s.createElement("button",{ref:E,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(f),onClick:X},x?s.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):s.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},30752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(22122),s=n(19756),o=(n(67294),n(3905)),i={},r=void 0,l={unversionedId:"common/quick-run",id:"version-2.0.1/common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.0.1/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/common/quick-run",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/common/quick-run.md",version:"2.0.1",frontMatter:{}},c=[],h={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,o.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}m.isMDXComponent=!0},42892:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(22122),s=n(19756),o=(n(67294),n(3905)),i={},r=void 0,l={unversionedId:"common/verify-installation",id:"version-2.0.1/common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.0.1/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/common/verify-installation.md",version:"2.0.1",frontMatter:{}},c=[],h={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-testing\n")),(0,o.kt)("p",null,"The expected output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,o.kt)("p",null,"If your actual output is similar to the expected output with ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))))}m.isMDXComponent=!0},43887:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(22122),s=n(19756),o=(n(67294),n(3905)),i=n(56871),r=n(42892),l=n(30752),c={title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",sidebar_label:"Install Chaos Mesh using Helm"},h=void 0,m={unversionedId:"production-installation-using-helm",id:"version-2.0.1/production-installation-using-helm",isDocsHomePage:!1,title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",description:"This document describes how to install Chaos Mesh in the production environment.",source:"@site/versioned_docs/version-2.0.1/production-installation-using-helm.md",sourceDirName:".",slug:"/production-installation-using-helm",permalink:"/docs/production-installation-using-helm",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.0.1/production-installation-using-helm.md",version:"2.0.1",frontMatter:{title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",sidebar_label:"Install Chaos Mesh using Helm"},sidebar:"version-2.0.1/docs",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Install Chaos Mesh Offline",permalink:"/docs/offline-installation"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh using Helm",id:"install-chaos-mesh-using-helm",children:[{value:"Step 1: Add Chaos Mesh repository",id:"step-1-add-chaos-mesh-repository",children:[]},{value:"Step 2: View the installable versions of Chaos Mesh",id:"step-2-view-the-installable-versions-of-chaos-mesh",children:[]},{value:"Step 3: Create the namespace to install Chaos Mesh",id:"step-3-create-the-namespace-to-install-chaos-mesh",children:[]},{value:"Step 4: Install Chaos Mesh in different environments",id:"step-4-install-chaos-mesh-in-different-environments",children:[]}]},{value:"Verify the installation",id:"verify-the-installation",children:[]},{value:"Run Chaos experiments",id:"run-chaos-experiments",children:[]},{value:"Upgrade Chaos Mesh",id:"upgrade-chaos-mesh",children:[]},{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",children:[]},{value:"FAQs",id:"faqs",children:[{value:"How can I install the latest version of Chaos Mesh?",id:"how-can-i-install-the-latest-version-of-chaos-mesh",children:[]},{value:"How can I disable the safe mode?",id:"how-can-i-disable-the-safe-mode",children:[]}]}],p={toc:d};function u(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to install Chaos Mesh in the production environment."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before installing Chaos Mesh, make sure that you have installed ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," in your environment."),(0,o.kt)("p",null,"To check whether Helm is installed or not, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,o.kt)("p",null,"The expected output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion: "go1.16.3"}\n')),(0,o.kt)("p",null,"If your actual output is similar to the expected output with ",(0,o.kt)("inlineCode",{parentName:"p"},"Version"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GitCommit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GitTreeState"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"GoVersion"),", it means that Helm is installed successfully."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this document, Helm v3 is used in commands to make operations on Chaos Mesh. If Helm v2 is used in your environment, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/v2_v3_migration/"},"Migrate Helm v2 to v3")," or modify the Helm version to the v2 format."))),(0,o.kt)("h2",{id:"install-chaos-mesh-using-helm"},"Install Chaos Mesh using Helm"),(0,o.kt)("h3",{id:"step-1-add-chaos-mesh-repository"},"Step 1: Add Chaos Mesh repository"),(0,o.kt)("p",null,"Add the Chaos Mesh repository to the Helm repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,o.kt)("h3",{id:"step-2-view-the-installable-versions-of-chaos-mesh"},"Step 2: View the installable versions of Chaos Mesh"),(0,o.kt)("p",null,"To see charts that can be installed, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above command will output the latest release of chart. If you want to install a historical version, execute the following command to view all released versions:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh -l\n")))),(0,o.kt)("p",null,"After the above command is completed, you can start installing Chaos Mesh."),(0,o.kt)("h3",{id:"step-3-create-the-namespace-to-install-chaos-mesh"},"Step 3: Create the namespace to install Chaos Mesh"),(0,o.kt)("p",null,"It is recommended to install Chaos Mesh under the ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-testing")," namespace, or you can specify any namespace to install Chaos Mesh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n")),(0,o.kt)("h3",{id:"step-4-install-chaos-mesh-in-different-environments"},"Step 4: Install Chaos Mesh in different environments"),(0,o.kt)("p",null,"Because socket paths are listened to by the daemons of different running containers, you need to set different values for socket paths during installation. You can execute the following installation commands according to different environments."),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Default to /var/run/docker.sock\nhelm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing\n")),(0,o.kt)("h4",{id:"containerd"},"Containerd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),(0,o.kt)("h4",{id:"k3s"},"K3s"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To install Chaos Mesh of a specific version, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version xxx")," parameter after ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"--version 2.0.0"),"."))),(0,o.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,o.kt)(r.default,{mdxType:"VerifyInstallation"}),(0,o.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,o.kt)(l.default,{mdxType:"QuickRun"}),(0,o.kt)("h2",{id:"upgrade-chaos-mesh"},"Upgrade Chaos Mesh"),(0,o.kt)("p",null,"To upgrade Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To upgrade Chaos Mesh to a specific version, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version xxx")," parameter after ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"--version 2.0.0"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have upgraded Chaos Mesh in a non-Docker environment, you need to add the corresponding parameters as described in ",(0,o.kt)("a",{parentName:"p",href:"#step-4-install-chaos-mesh-in-different-environments"},"Step 4: Install Chaos Mesh in different environments"),"."))),(0,o.kt)("p",null,"To modify the configuration, set different values according to your need. For example, execute the following command to upgrade and uninstall ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-dashboard"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set dashboard.create=false\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more values and their usages, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"all values"),"."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, the latest CustomResourceDefinition (CRD) is not applied during the Helm upgrading, which might cause errors. To avoid this situation, you can apply the latest CRD manually:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"))),(0,o.kt)("h2",{id:"uninstall-chaos-mesh"},"Uninstall Chaos Mesh"),(0,o.kt)("p",null,"To uninstall Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall chaos-mesh -n chaos-testing\n")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h3",{id:"how-can-i-install-the-latest-version-of-chaos-mesh"},"How can I install the latest version of Chaos Mesh?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," file defines the image of the latest version (the master branch). To install the latest version of Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone repository\ngit clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n\nhelm install chaos-mesh helm/chaos-mesh -n=chaos-teting\n")),(0,o.kt)("h3",{id:"how-can-i-disable-the-safe-mode"},"How can I disable the safe mode?"),(0,o.kt)("p",null,"The safe mode is enabled by default. To disable the safe mode, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.securityMode")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," during the installation or upgrade:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh -n=chaos-testing --set dashboard.securityMode=false\n")))}u.isMDXComponent=!0}}]);