"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[57126],{89400:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(91262),o=a(52263),s=a(28084),i=a(90814),r=a(67294),l=a(81249),h=a.n(l),c=a(56871);const m=e=>{let{children:t,className:a="language-bash"}=e;const{siteConfig:l}=(0,o.Z)(),{versions:m}=(0,s.eZ)("docusaurus-plugin-content-docs");return r.createElement(n.Z,null,(()=>{const e=(0,c.p)(l,m),n="latest"===e?"":`--version ${(e=>{if(h().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return r.createElement(i.Z,{className:a},t.replace("--version latest",n).trim())}))}},56871:(e,t,a)=>{a.d(t,{Z:()=>h,p:()=>l});var n=a(91262),o=a(52263),s=a(28084),i=a(90814),r=a(67294);const l=(e,t)=>{const a=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";const o=t.find((e=>e.isLast)),s=t.find((e=>a.includes(e.name)));return s?s.name:o.name};const h=e=>{let{children:t,replaced:a="latest",isArchive:h=!1,className:c="language-bash"}=e;const{siteConfig:m}=(0,o.Z)(),{versions:d}=(0,s.eZ)("docusaurus-plugin-content-docs");return r.createElement(n.Z,null,(()=>{const e=l(m,d),n=h?t.replace(a,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(a,"v"+e);return r.createElement(i.Z,{className:c},n)}))}},72118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=a(87462),o=(a(67294),a(3905));const s={},i=void 0,r={unversionedId:"common/quick-run",id:"version-2.4.0/common/quick-run",title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.4.0/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/common/quick-run",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.0/common/quick-run.md",tags:[],version:"2.4.0",frontMatter:{}},l={},h=[],c={toc:h};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,o.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}m.isMDXComponent=!0},81130:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=a(87462),o=(a(67294),a(3905));const s={},i=void 0,r={unversionedId:"common/verify-installation",id:"version-2.4.0/common/verify-installation",title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.4.0/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.0/common/verify-installation.md",tags:[],version:"2.4.0",frontMatter:{}},l={},h=[],c={toc:h};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-mesh\n")),(0,o.kt)("p",null,"The expected output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,o.kt)("p",null,"If your actual output is similar to the expected output with ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-election")," feature is turned off manually, ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," should only have 1 replication."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"))))}m.isMDXComponent=!0},7545:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),o=(a(67294),a(3905)),s=a(56871),i=(a(89400),a(81130)),r=a(72118);const l={title:"Install Chaos Mesh Offline"},h=void 0,c={unversionedId:"offline-installation",id:"version-2.4.0/offline-installation",title:"Install Chaos Mesh Offline",description:"This document describes how to install Chaos Mesh offline.",source:"@site/versioned_docs/version-2.4.0/offline-installation.md",sourceDirName:".",slug:"/offline-installation",permalink:"/docs/offline-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.4.0/offline-installation.md",tags:[],version:"2.4.0",frontMatter:{title:"Install Chaos Mesh Offline"},sidebar:"docs",previous:{title:"Install Chaos Mesh using Helm (Recommended for Production Environments)",permalink:"/docs/production-installation-using-helm"},next:{title:"Persistence Chaos Dashboard",permalink:"/docs/persistence-dashboard"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare installation files",id:"prepare-installation-files",level:2},{value:"Specify version number",id:"specify-version-number",level:3},{value:"Download Chaos Mesh images",id:"download-chaos-mesh-images",level:3},{value:"Download the repository compression package of Chaos Mesh",id:"download-the-repository-compression-package-of-chaos-mesh",level:3},{value:"Copy files",id:"copy-files",level:3},{value:"Install Chaos Mesh",id:"install-chaos-mesh",level:2},{value:"Step 1. Load Chaos Mesh images",id:"step-1-load-chaos-mesh-images",level:3},{value:"Step 2. Push images to Registry",id:"step-2-push-images-to-registry",level:3},{value:"Step 3. Install Chaos Mesh using Helm",id:"step-3-install-chaos-mesh-using-helm",level:3},{value:"Verify the installation",id:"verify-the-installation",level:2},{value:"Run Chaos experiments",id:"run-chaos-experiments",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to install Chaos Mesh offline."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before installing Chaos Mesh, make sure that Docker is installed and the Kubernetes cluster is deployed in the offline environment. If the environment is not prepared, refer to the following documents to install Docker and deploy the Kubernetes cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes"))),(0,o.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,o.kt)("p",null,"Before you install Chaos Mesh offline, you need to download all Chaos Mesh images and repository compression packages from the machines with external network connection, and then copy the downloaded files into your offline environment."),(0,o.kt)("h3",{id:"specify-version-number"},"Specify version number"),(0,o.kt)("p",null,"Set the version number of Chaos Mesh as the environment variable on the machine with external network connection:"),(0,o.kt)(s.Z,{mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest"),(0,o.kt)("h3",{id:"download-chaos-mesh-images"},"Download Chaos Mesh images"),(0,o.kt)("p",null,"On the machine connected to external network, pull images using the version number that has been set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\n")),(0,o.kt)("p",null,"Save images as the tar packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker save ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} > image-chaos-mesh.tar\ndocker save ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} > image-chaos-daemon.tar\ndocker save ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} > image-chaos-dashboard.tar\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To simulate a DNS fault (for example, make the DNS responses return a random wrong IP address), you need to pull the additional ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/pingcap/coredns"},(0,o.kt)("inlineCode",{parentName:"a"},"pingcap/coredns"))," images.")),(0,o.kt)("h3",{id:"download-the-repository-compression-package-of-chaos-mesh"},"Download the repository compression package of Chaos Mesh"),(0,o.kt)("p",null,"On the machine connected to the external network, download the zip package of Chaos Mesh:"),(0,o.kt)(s.Z,{isArchive:!0,replaced:"refs/heads/master",mdxType:"PickVersion"},"curl -fsSL -o chaos-mesh.zip https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip"),(0,o.kt)("h3",{id:"copy-files"},"Copy files"),(0,o.kt)("p",null,"After downloading all the files required for installation, you need to copy these files to the offline environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image-chaos-mesh.tar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image-chaos-daemon.tar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image-chaos-dashboard.tar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chaos-mesh.zip"))),(0,o.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,o.kt)("p",null,"After copying the tar package of the Chaos Mesh images and the zip package of the repository to the offline environment, take the following steps to install Chaos Mesh."),(0,o.kt)("h3",{id:"step-1-load-chaos-mesh-images"},"Step 1. Load Chaos Mesh images"),(0,o.kt)("p",null,"Load images from the tar package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker load < image-chaos-mesh.tar\ndocker load < image-chaos-daemon.tar\ndocker load < image-chaos-dashboard.tar\n")),(0,o.kt)("h3",{id:"step-2-push-images-to-registry"},"Step 2. Push images to Registry"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before pushing images to Registry, make sure that Registry has been deployed in the offline environment. If Registry is not deployed, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," for the deployment method.")),(0,o.kt)("p",null,"Set the Chaos Mesh version and the Registry address as the environment variable:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"export CHAOS_MESH_VERSION=latest; export DOCKER_REGISTRY=localhost:5000"),(0,o.kt)("p",null,"Mark the images so that the images point to the Registry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker image tag ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\n")),(0,o.kt)("p",null,"Push images to Registry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\n")),(0,o.kt)("h3",{id:"step-3-install-chaos-mesh-using-helm"},"Step 3. Install Chaos Mesh using Helm"),(0,o.kt)("p",null,"Unpack the zip package of Chaos Mesh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"unzip chaos-mesh.zip -d chaos-mesh && cd chaos-mesh\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When installing Chaos Mesh on Kubernetes v1.15(or an earlier version), you need to manually install CRD first by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl create -f manifests/crd-v1beta1.yaml"),". For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/faqs#q-failed-to-install-chaos-mesh-with-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1"},"FAQ"),".")),(0,o.kt)("p",null,"Create the namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n")),(0,o.kt)("p",null,"Execute the installation command. When executing the installation command, you need to specify the namespace of Chaos Mesh and the image value of each component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh -n=chaos-testing --set images.registry=$DOCKER_REGISTRY\n")),(0,o.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,o.kt)(i.default,{mdxType:"VerifyInstallation"}),(0,o.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,o.kt)(r.default,{mdxType:"QuickRun"}))}u.isMDXComponent=!0}}]);