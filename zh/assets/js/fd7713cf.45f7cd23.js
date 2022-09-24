"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[43778],{89400:(e,a,t)=>{t.d(a,{Z:()=>c});var s=t(91262),n=t(52263),l=t(28084),o=t(90814),r=t(67294),i=t(81249),m=t.n(i),h=t(56871);const c=e=>{let{children:a,className:t="language-bash"}=e;const{siteConfig:i}=(0,n.Z)(),{versions:c}=(0,l.eZ)("docusaurus-plugin-content-docs");return r.createElement(s.Z,null,(()=>{const e=(0,h.p)(i,c),s="latest"===e?"":`--version ${(e=>{if(m().satisfies(e,">=2.0.3"))return e;const a=e.slice(0,3);return"v"+(parseFloat(a)-.7).toFixed(1)+e.slice(3)})(e)}`;return r.createElement(o.Z,{className:t},a.replace("--version latest",s).trim())}))}},56871:(e,a,t)=>{t.d(a,{Z:()=>m,p:()=>i});var s=t(91262),n=t(52263),l=t(28084),o=t(90814),r=t(67294);const i=(e,a)=>{const t=window.location.pathname;let s=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&s)return"current"===s?"latest":s;if(t.includes("/docs/next"))return"latest";const n=a.find((e=>e.isLast)),l=a.find((e=>t.includes(e.name)));return l?l.name:n.name};const m=e=>{let{children:a,replaced:t="latest",isArchive:m=!1,className:h="language-bash"}=e;const{siteConfig:c}=(0,n.Z)(),{versions:p}=(0,l.eZ)("docusaurus-plugin-content-docs");return r.createElement(s.Z,null,(()=>{const e=i(c,p),s=m?a.replace(t,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?a:a.replace(t,"v"+e);return r.createElement(o.Z,{className:h},s)}))}},67190:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var s=t(87462),n=(t(67294),t(3905)),l=t(56871),o=t(89400);const r={title:"Installation"},i=void 0,m={unversionedId:"user_guides/installation",id:"version-1.1.4/user_guides/installation",title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/versioned_docs/version-1.1.4/user_guides/installation.md",sourceDirName:"user_guides",slug:"/user_guides/installation",permalink:"/zh/docs/1.1.4/user_guides/installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/user_guides/installation.md",tags:[],version:"1.1.4",frontMatter:{title:"Installation"},sidebar:"version-1.1.4/docs",previous:{title:"Get started on Minikube",permalink:"/zh/docs/1.1.4/get_started/get_started_on_minikube"},next:{title:"Define the Scope of Chaos Experiment",permalink:"/zh/docs/1.1.4/user_guides/experiment_scope"}},h={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Chaos Mesh",id:"install-chaos-mesh",level:2},{value:"Verify your installation",id:"verify-your-installation",level:3},{value:"Uninstallation",id:"uninstallation",level:2},{value:"Install by helm",id:"install-by-helm",level:2},{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",level:3},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",level:3},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",level:3}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),(0,n.kt)("p",null,"If you want to try Chaos Mesh on your laptop (Linux or macOS), you can refer the following two documents:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/1.1.4/get_started/get_started_on_kind"},"Get started on kind")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/1.1.4/get_started/get_started_on_minikube"},"Get started on minikube"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/admin/authorization/rbac"},"RBAC")," enabled (optional)")),(0,n.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,n.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,n.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,n.kt)("p",null,"If you are using k3s or k3d, please also specify ",(0,n.kt)("inlineCode",{parentName:"p"},"--k3s")," flag."),(0,n.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"install.sh")," is suitable for trying Chaos Mesh out. If you want to use Chaos Mesh in production or other serious scenarios, Helm is the recommended deployment method.")),(0,n.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,n.kt)("p",null,"Verify if Chaos Mesh is running (For the use of ",(0,n.kt)("em",{parentName:"p"},"kubectl"),", you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"},"documentation"),".)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,n.kt)("p",null,"Expected output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,n.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,n.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,n.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,n.kt)("h2",{id:"install-by-helm"},"Install by helm"),(0,n.kt)("p",null,"You also can install Chaos Mesh by ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),(0,n.kt)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,n.kt)("p",null,"After adding the repository successfully, you can search available version by the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,n.kt)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),(0,n.kt)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),(0,n.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"),(0,n.kt)("p",null,"For kuberentes < 1.15, ",(0,n.kt)("inlineCode",{parentName:"p"},"--validate=false")," is needed to ignore the unexpected fields"),(0,n.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply --validate=false -f -"),(0,n.kt)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",(0,n.kt)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"helm install")," commands below. Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/helm/chaos-mesh#configuration"},"Configuration")," for more information.")),(0,n.kt)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install in Docker environment"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For helm 2.X")),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For helm 3.X")),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,n.kt)("p",{parentName:"li"},"Expected output:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install in containerd environment (kind)"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,n.kt)("p",{parentName:"li"},"Expected output:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install in containerd environment (k3s)"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,n.kt)("p",{parentName:"li"},"Expected output:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),(0,n.kt)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," for help."))}u.isMDXComponent=!0}}]);