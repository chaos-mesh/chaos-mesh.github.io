"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5078],{89400:function(e,t,a){var n=a(91262),o=a(19055),s=a(67294),i=a(81249),r=a.n(i),l=a(52263),c=a(56871),h=a(28084);t.Z=function(e){var t=e.children,a=e.className,i=void 0===a?"language-bash":a,m=(0,l.Z)().siteConfig,d=(0,h.usePluginData)("docusaurus-plugin-content-docs").versions;return s.createElement(n.Z,null,(function(){var e=(0,c.p)(m,d),a="latest"===e?"":"--version "+function(e){if(r().satisfies(e,">=2.0.3"))return e;var t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)}(e);return s.createElement(o.Z,{className:i},t.replace("--version latest",a).trim())}))}},56871:function(e,t,a){a.d(t,{p:function(){return l}});var n=a(91262),o=a(19055),s=a(67294),i=a(52263),r=a(28084),l=function(e,t){var a=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";var o=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||o};t.Z=function(e){var t=e.children,a=e.replaced,c=void 0===a?"latest":a,h=e.isArchive,m=void 0!==h&&h,d=e.className,p=void 0===d?"language-bash":d,u=(0,i.Z)().siteConfig,k=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions;return s.createElement(n.Z,null,(function(){var e=l(u,k),a=m?t.replace(c,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(c,"v"+e);return s.createElement(o.Z,{className:p},a)}))}},3439:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=["components"],r={},l=void 0,c={unversionedId:"common/quick-run",id:"version-2.1.3/common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.1.3/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/common/quick-run",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.3/common/quick-run.md",tags:[],version:"2.1.3",frontMatter:{}},h=[],m={toc:h};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,s.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}d.isMDXComponent=!0},38829:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=["components"],r={},l=void 0,c={unversionedId:"common/verify-installation",id:"version-2.1.3/common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.1.3/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.3/common/verify-installation.md",tags:[],version:"2.1.3",frontMatter:{}},h=[],m={toc:h};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-testing\n")),(0,s.kt)("p",null,"The expected output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,s.kt)("p",null,"If your actual output is similar to the expected output with ",(0,s.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If ",(0,s.kt)("inlineCode",{parentName:"p"},"leader-election")," feature is turned off manually, ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," should only have 1 replication."),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")))))}d.isMDXComponent=!0},21847:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=a(56871),r=(a(89400),a(38829)),l=a(3439),c=["components"],h={title:"Install Chaos Mesh Offline"},m=void 0,d={unversionedId:"offline-installation",id:"version-2.1.3/offline-installation",isDocsHomePage:!1,title:"Install Chaos Mesh Offline",description:"This document describes how to install Chaos Mesh offline.",source:"@site/versioned_docs/version-2.1.3/offline-installation.md",sourceDirName:".",slug:"/offline-installation",permalink:"/docs/offline-installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.1.3/offline-installation.md",tags:[],version:"2.1.3",frontMatter:{title:"Install Chaos Mesh Offline"},sidebar:"version-2.1.3/docs",previous:{title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",permalink:"/docs/production-installation-using-helm"},next:{title:"Uninstall Chaos Mesh",permalink:"/docs/uninstallation"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Prepare installation files",id:"prepare-installation-files",children:[{value:"Specify version number",id:"specify-version-number",children:[],level:3},{value:"Download Chaos Mesh images",id:"download-chaos-mesh-images",children:[],level:3},{value:"Download the repository compression package of Chaos Mesh",id:"download-the-repository-compression-package-of-chaos-mesh",children:[],level:3},{value:"Copy files",id:"copy-files",children:[],level:3}],level:2},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Step 1. Load Chaos Mesh images",id:"step-1-load-chaos-mesh-images",children:[],level:3},{value:"Step 2. Push images to Registry",id:"step-2-push-images-to-registry",children:[],level:3},{value:"Step 3. Install Chaos Mesh using Helm",id:"step-3-install-chaos-mesh-using-helm",children:[],level:3}],level:2},{value:"Verify the installation",id:"verify-the-installation",children:[],level:2},{value:"Run Chaos experiments",id:"run-chaos-experiments",children:[],level:2}],u={toc:p};function k(e){var t=e.components,a=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to install Chaos Mesh offline."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before installing Chaos Mesh, make sure that Docker is installed and the Kubernetes cluster is deployed in the offline environment. If the environment is not prepared, refer to the following documents to install Docker and deploy the Kubernetes cluster:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes"))),(0,s.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,s.kt)("p",null,"Before you install Chaos Mesh offline, you need to download all Chaos Mesh images and repository compression packages from the machines with external network connection, and then copy the downloaded files into your offline environment."),(0,s.kt)("h3",{id:"specify-version-number"},"Specify version number"),(0,s.kt)("p",null,"Set the version number of Chaos Mesh as the environment variable on the machine with external network connection:"),(0,s.kt)(i.Z,{mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest"),(0,s.kt)("h3",{id:"download-chaos-mesh-images"},"Download Chaos Mesh images"),(0,s.kt)("p",null,"On the machine connected to external network, pull images using the version number that has been set:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\n")),(0,s.kt)("p",null,"Save images as the tar packages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker save ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} > image-chaos-mesh.tar\ndocker save ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} > image-chaos-daemon.tar\ndocker save ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} > image-chaos-dashboard.tar\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To simulate a DNS fault (for example, make the DNS responses return a random wrong IP address), you need to pull the additional ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/pingcap/coredns"},(0,s.kt)("inlineCode",{parentName:"a"},"pingcap/coredns"))," images."))),(0,s.kt)("h3",{id:"download-the-repository-compression-package-of-chaos-mesh"},"Download the repository compression package of Chaos Mesh"),(0,s.kt)("p",null,"On the machine connected to the external network, download the zip package of Chaos Mesh:"),(0,s.kt)(i.Z,{isArchive:!0,mdxType:"PickVersion"},"curl -fsSL -o chaos-mesh.zip https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip"),(0,s.kt)("h3",{id:"copy-files"},"Copy files"),(0,s.kt)("p",null,"After downloading all the files required for installation, you need to copy these files to the offline environment:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"image-chaos-mesh.tar")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"image-chaos-daemon.tar")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"image-chaos-dashboard.tar")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chaos-mesh.zip"))),(0,s.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,s.kt)("p",null,"After copying the tar package of the Chaos Mesh images and the zip package of the repository to the offline environment, take the following steps to install Chaos Mesh."),(0,s.kt)("h3",{id:"step-1-load-chaos-mesh-images"},"Step 1. Load Chaos Mesh images"),(0,s.kt)("p",null,"Load images from the tar package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker load < image-chaos-mesh.tar\ndocker load < image-chaos-daemon.tar\ndocker load < image-chaos-dashboard.tar\n")),(0,s.kt)("h3",{id:"step-2-push-images-to-registry"},"Step 2. Push images to Registry"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before pushing images to Registry, make sure that Registry has been deployed in the offline environment. If Registry is not deployed, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," for the deployment method."))),(0,s.kt)("p",null,"Set the Chaos Mesh version and the Registry address as the environment variable:"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest; export DOCKER_REGISTRY=localhost:5000"),(0,s.kt)("p",null,"Mark the images so that the images point to the Registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker image tag ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\n")),(0,s.kt)("p",null,"Push images to Registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\n")),(0,s.kt)("h3",{id:"step-3-install-chaos-mesh-using-helm"},"Step 3. Install Chaos Mesh using Helm"),(0,s.kt)("p",null,"Unpack the zip package of Chaos Mesh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"unzip chaos-mesh.zip -d chaos-mesh && cd chaos-mesh\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When installing Chaos Mesh on Kubernetes v1.15(or an earlier version), you need to manually install CRD first by using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl create -f manifests/crd-v1beta1.yaml"),". For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/faqs#q-failed-to-install-chaos-mesh-with-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1"},"FAQ"),"."))),(0,s.kt)("p",null,"Create the namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n")),(0,s.kt)("p",null,"Execute the installation command. When executing the installation command, you need to specify the namespace of Chaos Mesh and the image value of each component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh -n=chaos-testing --set images.registry=$DOCKER_REGISTRY\n")),(0,s.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,s.kt)(r.default,{mdxType:"VerifyInstallation"}),(0,s.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,s.kt)(l.default,{mdxType:"QuickRun"}))}k.isMDXComponent=!0}}]);