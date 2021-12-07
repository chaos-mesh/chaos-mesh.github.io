"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3991],{89400:function(e,t,a){var n=a(91262),s=a(19055),o=a(67294),i=a(81249),r=a.n(i),l=a(52263),c=a(56871),h=a(28084);t.Z=function(e){var t=e.children,a=e.className,i=void 0===a?"language-bash":a,m=(0,l.Z)().siteConfig,d=(0,h.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(n.Z,null,(function(){var e=(0,c.p)(m,d),a="latest"===e?"":"--version "+function(e){if(r().satisfies(e,">=2.0.3"))return e;var t=e.slice(0,3);return"v"+(parseFloat(t)-.7)+e.slice(3)}(e);return o.createElement(s.Z,{className:i},t.replace("--version latest",a).trim())}))}},56871:function(e,t,a){a.d(t,{p:function(){return l}});var n=a(91262),s=a(19055),o=a(67294),i=a(52263),r=a(28084),l=function(e,t){var a=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";var s=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||s};t.Z=function(e){var t=e.children,a=e.replaced,c=void 0===a?"latest":a,h=e.isArchive,m=void 0!==h&&h,d=e.className,p=void 0===d?"language-bash":d,u=(0,i.Z)().siteConfig,v=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(n.Z,null,(function(){var e=l(u,v),a=m?t.replace(c,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(c,"v"+e);return o.createElement(s.Z,{className:p},a)}))}},7177:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),i=["components"],r={},l=void 0,c={unversionedId:"common/quick-run",id:"version-2.1.0/common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.1.0/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/common/quick-run",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.0/common/quick-run.md",tags:[],version:"2.1.0",frontMatter:{}},h=[],m={toc:h};function d(e){var t=e.components,a=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,o.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}d.isMDXComponent=!0},43610:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),i=["components"],r={},l=void 0,c={unversionedId:"common/verify-installation",id:"version-2.1.0/common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.1.0/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.0/common/verify-installation.md",tags:[],version:"2.1.0",frontMatter:{}},h=[],m={toc:h};function d(e){var t=e.components,a=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-testing\n")),(0,o.kt)("p",null,"The expected output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,o.kt)("p",null,"If your actual output is similar to the expected output with ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-election")," feature is turned off manually, ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," should only have 1 replication."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")))))}d.isMDXComponent=!0},7494:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),i=a(56871),r=a(89400),l=a(43610),c=a(7177),h=["components"],m={title:"Install Chaos Mesh using Helm (Recommended for Production Environments)"},d=void 0,p={unversionedId:"production-installation-using-helm",id:"version-2.1.0/production-installation-using-helm",isDocsHomePage:!1,title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",description:"This document describes how to install Chaos Mesh in the production environment.",source:"@site/versioned_docs/version-2.1.0/production-installation-using-helm.md",sourceDirName:".",slug:"/production-installation-using-helm",permalink:"/docs/production-installation-using-helm",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.0/production-installation-using-helm.md",tags:[],version:"2.1.0",frontMatter:{title:"Install Chaos Mesh using Helm (Recommended for Production Environments)"},sidebar:"version-2.1.0/docs",previous:{title:"Quick Start (Test Recommended)",permalink:"/docs/quick-start"},next:{title:"Install Chaos Mesh Offline",permalink:"/docs/offline-installation"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Install Chaos Mesh using Helm",id:"install-chaos-mesh-using-helm",children:[{value:"Step 1: Add Chaos Mesh repository",id:"step-1-add-chaos-mesh-repository",children:[],level:3},{value:"Step 2: View the installable versions of Chaos Mesh",id:"step-2-view-the-installable-versions-of-chaos-mesh",children:[],level:3},{value:"Step 3: Create the namespace to install Chaos Mesh",id:"step-3-create-the-namespace-to-install-chaos-mesh",children:[],level:3},{value:"Step 4: Install Chaos Mesh in different environments",id:"step-4-install-chaos-mesh-in-different-environments",children:[{value:"Docker",id:"docker",children:[],level:4},{value:"Containerd",id:"containerd",children:[],level:4},{value:"K3s",id:"k3s",children:[],level:4},{value:"CRI-O",id:"cri-o",children:[],level:4}],level:3}],level:2},{value:"Verify the installation",id:"verify-the-installation",children:[],level:2},{value:"Run Chaos experiments",id:"run-chaos-experiments",children:[],level:2},{value:"Upgrade Chaos Mesh",id:"upgrade-chaos-mesh",children:[],level:2},{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",children:[],level:2},{value:"FAQs",id:"faqs",children:[{value:"How can I install the latest version of Chaos Mesh?",id:"how-can-i-install-the-latest-version-of-chaos-mesh",children:[],level:3},{value:"How can I disable the safe mode?",id:"how-can-i-disable-the-safe-mode",children:[],level:3}],level:2}],v={toc:u};function k(e){var t=e.components,a=(0,s.Z)(e,h);return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to install Chaos Mesh in the production environment."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before installing Chaos Mesh, make sure that you have installed ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," in your environment."),(0,o.kt)("p",null,"To check whether Helm is installed or not, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,o.kt)("p",null,"The expected output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion: "go1.16.3"}\n')),(0,o.kt)("p",null,"If your actual output is similar to the expected output with ",(0,o.kt)("inlineCode",{parentName:"p"},"Version"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GitCommit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GitTreeState"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"GoVersion"),", it means that Helm is installed successfully."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this document, Helm v3 is used in commands to make operations on Chaos Mesh. If Helm v2 is used in your environment, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/v2_v3_migration/"},"Migrate Helm v2 to v3")," or modify the Helm version to the v2 format."))),(0,o.kt)("h2",{id:"install-chaos-mesh-using-helm"},"Install Chaos Mesh using Helm"),(0,o.kt)("h3",{id:"step-1-add-chaos-mesh-repository"},"Step 1: Add Chaos Mesh repository"),(0,o.kt)("p",null,"Add the Chaos Mesh repository to the Helm repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,o.kt)("h3",{id:"step-2-view-the-installable-versions-of-chaos-mesh"},"Step 2: View the installable versions of Chaos Mesh"),(0,o.kt)("p",null,"To see charts that can be installed, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above command will output the latest release of chart. If you want to install a historical version, execute the following command to view all released versions:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh -l\n")))),(0,o.kt)("p",null,"After the above command is completed, you can start installing Chaos Mesh."),(0,o.kt)("h3",{id:"step-3-create-the-namespace-to-install-chaos-mesh"},"Step 3: Create the namespace to install Chaos Mesh"),(0,o.kt)("p",null,"It is recommended to install Chaos Mesh under the ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-testing")," namespace, or you can specify any namespace to install Chaos Mesh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n")),(0,o.kt)("h3",{id:"step-4-install-chaos-mesh-in-different-environments"},"Step 4: Install Chaos Mesh in different environments"),(0,o.kt)("p",null,"Because socket paths are listened to by the daemons of different running containers, you need to set different values for socket paths during installation. You can execute the following installation commands according to different environments."),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"# Default to /var/run/docker.sock\nhelm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --version latest"),(0,o.kt)("h4",{id:"containerd"},"Containerd"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --version latest"),(0,o.kt)("h4",{id:"k3s"},"K3s"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock --version latest"),(0,o.kt)("h4",{id:"cri-o"},"CRI-O"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set chaosDaemon.runtime=crio --set chaosDaemon.socketPath=/var/run/crio/crio.sock --version latest"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To install Chaos Mesh of a specific version, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version xxx")," parameter after ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"--version 2.0.0"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To ensure high availability, Chaos Mesh turns on ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-election")," feature by default. If you do not need to use this feature, you can manually turn it off through ",(0,o.kt)("inlineCode",{parentName:"p"},"--set controllerManager.leaderElection.enabled=false"),"."))),(0,o.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,o.kt)(l.default,{mdxType:"VerifyInstallation"}),(0,o.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,o.kt)(c.default,{mdxType:"QuickRun"}),(0,o.kt)("h2",{id:"upgrade-chaos-mesh"},"Upgrade Chaos Mesh"),(0,o.kt)("p",null,"To upgrade Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To upgrade Chaos Mesh to a specific version, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version xxx")," parameter after ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"--version 2.0.0"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have upgraded Chaos Mesh in a non-Docker environment, you need to add the corresponding parameters as described in ",(0,o.kt)("a",{parentName:"p",href:"#step-4-install-chaos-mesh-in-different-environments"},"Step 4: Install Chaos Mesh in different environments"),"."))),(0,o.kt)("p",null,"To modify the configuration, set different values according to your need. For example, execute the following command to upgrade and uninstall ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-dashboard"),":"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --version latest --set dashboard.create=false"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more values and their usages, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"all values"),"."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, the latest CustomResourceDefinition (CRD) is not applied during the Helm upgrading, which might cause errors. To avoid this situation, you can apply the latest CRD manually:"),(0,o.kt)(i.Z,{mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl replace -f -"))),(0,o.kt)("h2",{id:"uninstall-chaos-mesh"},"Uninstall Chaos Mesh"),(0,o.kt)("p",null,"To uninstall Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall chaos-mesh -n chaos-testing\n")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h3",{id:"how-can-i-install-the-latest-version-of-chaos-mesh"},"How can I install the latest version of Chaos Mesh?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," file defines the image of the latest version (the master branch). To install the latest version of Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone repository\ngit clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n\nhelm install chaos-mesh helm/chaos-mesh -n=chaos-testing\n")),(0,o.kt)("h3",{id:"how-can-i-disable-the-safe-mode"},"How can I disable the safe mode?"),(0,o.kt)("p",null,"The safe mode is enabled by default. To disable the safe mode, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.securityMode")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," during the installation or upgrade:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh helm/chaos-mesh -n=chaos-testing --set dashboard.securityMode=false --version latest"))}k.isMDXComponent=!0}}]);