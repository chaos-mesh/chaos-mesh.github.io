"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[81257],{89400:(e,a,t)=>{t.d(a,{Z:()=>h});var s=t(91262),n=t(90814),o=t(67294),r=t(81249),i=t.n(r),l=t(52263),p=t(56871),c=t(28084);const h=e=>{let{children:a,className:t="language-bash"}=e;const{siteConfig:r}=(0,l.Z)(),{versions:h}=(0,c.eZ)("docusaurus-plugin-content-docs");return o.createElement(s.Z,null,(()=>{const e=(0,p.p)(r,h),s="latest"===e?"":"--version "+(e=>{if(i().satisfies(e,">=2.0.3"))return e;const a=e.slice(0,3);return"v"+(parseFloat(a)-.7).toFixed(1)+e.slice(3)})(e);return o.createElement(n.Z,{className:t},a.replace("--version latest",s).trim())}))}},56871:(e,a,t)=>{t.d(a,{Z:()=>p,p:()=>l});var s=t(91262),n=t(90814),o=t(67294),r=t(52263),i=t(28084);const l=(e,a)=>{const t=window.location.pathname;let s=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&s)return"current"===s?"latest":s;if(t.includes("/docs/next"))return"latest";const n=a.filter((e=>e.isLast))[0].name;return a.filter((e=>t.includes(e.name))).map((e=>e.name))[0]||n};const p=e=>{let{children:a,replaced:t="latest",isArchive:p=!1,className:c="language-bash"}=e;const{siteConfig:h}=(0,r.Z)(),{versions:m}=(0,i.eZ)("docusaurus-plugin-content-docs");return o.createElement(s.Z,null,(()=>{const e=l(h,m),s=p?a.replace(t,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?a:a.replace(t,"v"+e);return o.createElement(n.Z,{className:c},s)}))}},59211:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(87462),n=(t(67294),t(3905)),o=t(89400);const r={title:"Offline Installation"},i=void 0,l={unversionedId:"user_guides/offline_installation",id:"version-1.2.4/user_guides/offline_installation",title:"Offline Installation",description:"This document describes how to install Chaos Mesh in an offline environment.",source:"@site/versioned_docs/version-1.2.4/user_guides/offline_installation.md",sourceDirName:"user_guides",slug:"/user_guides/offline_installation",permalink:"/docs/1.2.4/user_guides/offline_installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/user_guides/offline_installation.md",tags:[],version:"1.2.4",frontMatter:{title:"Offline Installation"},sidebar:"version-1.2.4/docs",previous:{title:"Installation",permalink:"/docs/1.2.4/user_guides/installation"},next:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/1.2.4/user_guides/experiment_scope"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare the installation file",id:"prepare-the-installation-file",level:2},{value:"Install Chaos Mesh offline",id:"install-chaos-mesh-offline",level:2}],h={toc:c};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document describes how to install Chaos Mesh in an offline environment."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/admin/authorization/rbac"},"RBAC")," enabled (optional)"),(0,n.kt)("li",{parentName:"ul"},"Docker")),(0,n.kt)("h2",{id:"prepare-the-installation-file"},"Prepare the installation file"),(0,n.kt)("p",null,"To install Chaos Mesh offline, you need to get the installation images via an internet connection. Take the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the version you want to install:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export CHAOS_MESH_VERSION="v1.1.0"\n')),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",{parentName:"blockquote"},"It is recommended that you use a stable release, or you can set the version to ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," if you want to experience the latest features that are under development."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Archive the docker images of Chaos Mesh:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"#pull images of Chaos Mesh","#pull":!0,images:!0,of:!0,Chaos:!0,Mesh:!0},"docker pull pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker pull pingcap/coredns:v0.2.0\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"#save images of Chaos Mesh to files","#save":!0,images:!0,of:!0,Chaos:!0,Mesh:!0,to:!0,files:!0},"docker save -o ./image-chaos-mesh pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker save -o ./image-chaos-daemon pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker save -o ./image-chaos-dashboard pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker save -o ./image-chaos-coredns pingcap/coredns:v0.2.0\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the Chaos Mesh repository to your local:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'wget "https://github.com/chaos-mesh/chaos-mesh/archive/${CHAOS_MESH_VERSION}.zip"\n')),(0,n.kt)("p",{parentName:"li"},"Or you can download the latest unstable version:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/chaos-mesh/chaos-mesh/archive/master.zip\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"./image-chaos-mesh"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"./image-chaos-daemon"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"./image-chaos-dashboard"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"{CHAOS_MESH_VERSION}.zip")," into the offline environment."))),(0,n.kt)("h2",{id:"install-chaos-mesh-offline"},"Install Chaos Mesh offline"),(0,n.kt)("p",null,"Now that you already have the image and repo archive files in the offline environment, start installing Chaos Mesh."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the version you are going to install in the offline environment:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export CHAOS_MESH_VERSION="v1.1.0"\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Load the image from the archive files:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i ./image-chaos-mesh\ndocker load -i ./image-chaos-daemon\ndocker load -i ./image-chaos-dashboard\ndocker load -i ./image-chaos-coredns\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Push the Chaos Mesh images. You can choose to push them to Docker Registry or Docker Hub."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Push images to Docker Registry"),(0,n.kt)("p",{parentName:"li"},"a. Set the Docker Registry variable, for example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export DOCKER_REGISTRY=localhost:5000\n")),(0,n.kt)("p",{parentName:"li"},"b. Tag these images with ",(0,n.kt)("inlineCode",{parentName:"p"},"$DOCKER_REGISTRY"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}\nexport CHAOS_COREDNS_IMAGE=$DOCKER_REGISTRY/pingcap/coredns:v0.2.0\ndocker image tag pingcap/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag pingcap/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\ndocker image tag pingcap/coredns:v0.2.0 $CHAOS_COREDNS_IMAGE\n")),(0,n.kt)("p",{parentName:"li"},"c. Push these images to Docker Registry:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\ndocker push $CHAOS_COREDNS_IMAGE\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",{parentName:"blockquote"},"If the Docker Registry can only work locally, you need to load and push these images on each K8s node."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Push images to Docker Hub"),(0,n.kt)("p",{parentName:"li"},"a. Set the Docker Hub variable, for example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export DOCKER_HUB=hub\n")),(0,n.kt)("p",{parentName:"li"},"b. Tag these images with ",(0,n.kt)("inlineCode",{parentName:"p"},"$DOCKER_REGISTRY"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export CHAOS_MESH_IMAGE=$DOCKER_HUB/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_HUB/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_HUB/chaos-dashboard:${CHAOS_MESH_VERSION}\nexport CHAOS_COREDNS_IMAGE=$DOCKER_HUB/coredns:v0.2.0\ndocker image tag pingcap/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag pingcap/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\ndocker image tag pingcap/coredns:v0.2.0 $CHAOS_COREDNS_IMAGE\n")),(0,n.kt)("p",{parentName:"li"},"c. Push these images to Docker Registry:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\ndocker push $CHAOS_COREDNS_IMAGE\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Chaos Mesh offline with the following steps:"),(0,n.kt)("p",{parentName:"li"},"a. Unzip the repo archive files to a path:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"unzip ${CHAOS_MESH_VERSION}.zip -d chaos-mesh && cd chaos-mesh/*/\n")),(0,n.kt)("p",{parentName:"li"},"b. Create a namespace for installing Chaos Mesh:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace chaos-testing\n")),(0,n.kt)("p",{parentName:"li"},"c. Install Chaos Mesh by helm:"),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"}," helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing --set dashboard.create=true --set dnsServer.create=true --set chaosDaemon.image=$CHAOS_DAEMON_IMAGE --set controllerManager.image=$CHAOS_MESH_IMAGE --set dashboard.image=$CHAOS_DASHBOARD_IMAGE --set dnsServer.image=$CHAOS_COREDNS_IMAGE --version latest"),(0,n.kt)("p",{parentName:"li"},"d. Check whether Chaos Mesh pods are installed:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"#get pods of Chaos Mesh","#get":!0,pods:!0,of:!0,Chaos:!0,Mesh:!0},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,n.kt)("p",{parentName:"li"},"Expected output:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,n.kt)("p",{parentName:"li"},"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," for help."))))}m.isMDXComponent=!0}}]);