"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8556],{89400:function(e,a,t){var n=t(91262),s=t(19055),l=t(67294),o=t(81249),r=t.n(o),i=t(52263),c=t(56871),m=t(28084);a.Z=function(e){var a=e.children,t=e.className,o=void 0===t?"language-bash":t,h=(0,i.Z)().siteConfig,u=(0,m.usePluginData)("docusaurus-plugin-content-docs").versions;return l.createElement(n.Z,null,(function(){var e=(0,c.p)(h,u),t="latest"===e?"":"--version "+function(e){if(r().satisfies(e,">=2.0.3"))return e;var a=e.slice(0,3);return"v"+(parseFloat(a)-.7)+e.slice(3)}(e);return l.createElement(s.Z,{className:o},a.replace("--version latest",t).trim())}))}},56871:function(e,a,t){t.d(a,{p:function(){return i}});var n=t(91262),s=t(19055),l=t(67294),o=t(52263),r=t(28084),i=function(e,a){var t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var s=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||s};a.Z=function(e){var a=e.children,t=e.replaced,c=void 0===t?"latest":t,m=e.isArchive,h=void 0!==m&&m,u=e.className,p=void 0===u?"language-bash":u,d=(0,o.Z)().siteConfig,k=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions;return l.createElement(n.Z,null,(function(){var e=i(d,k),t=h?a.replace(c,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?a:a.replace(c,"v"+e);return l.createElement(s.Z,{className:p},t)}))}},58990:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return u},default:function(){return d}});var n=t(87462),s=t(63366),l=(t(67294),t(3905)),o=t(56871),r=t(89400),i=["components"],c={title:"Installation"},m=void 0,h={unversionedId:"user_guides/installation",id:"version-1.0.3/user_guides/installation",isDocsHomePage:!1,title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/versioned_docs/version-1.0.3/user_guides/installation.md",sourceDirName:"user_guides",slug:"/user_guides/installation",permalink:"/docs/1.0.3/user_guides/installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.0.3/user_guides/installation.md",tags:[],version:"1.0.3",frontMatter:{title:"Installation"},sidebar:"version-1.0.3/docs",previous:{title:"Get started on Minikube",permalink:"/docs/1.0.3/get_started/get_started_on_minikube"},next:{title:"Define the Scope of Chaos Experiment",permalink:"/docs/1.0.3/user_guides/experiment_scope"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[],level:3}],level:2},{value:"Uninstallation",id:"uninstallation",children:[],level:2},{value:"Install by helm",id:"install-by-helm",children:[{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",children:[],level:3},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",children:[],level:3},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",children:[],level:3}],level:2}],p={toc:u};function d(e){var a=e.components,t=(0,s.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),(0,l.kt)("p",null,"If you want to try Chaos Mesh on your laptop (Linux or macOS), you can refer the following two documents:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.3/get_started/get_started_on_kind"},"Get started on kind")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.3/get_started/get_started_on_minikube"},"Get started on minikube"))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/admin/authorization/rbac"},"RBAC")," enabled (optional)")),(0,l.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,l.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,l.kt)("p",null,"If you are using k3s or k3d, please also specify ",(0,l.kt)("inlineCode",{parentName:"p"},"--k3s")," flag."),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," is suitable for trying Chaos Mesh out. If you want to use Chaos Mesh in production or other serious scenarios, Helm is the recommended deployment method.")),(0,l.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,l.kt)("p",null,"Verify if Chaos Mesh is running (For the use of ",(0,l.kt)("em",{parentName:"p"},"kubectl"),", you can refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"},"documentation"),".)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,l.kt)("p",null,"Expected output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,l.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,l.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,l.kt)("h2",{id:"install-by-helm"},"Install by helm"),(0,l.kt)("p",null,"You also can install Chaos Mesh by ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),(0,l.kt)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,l.kt)("p",null,"After adding the repository successfully, you can search available version by the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,l.kt)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),(0,l.kt)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"),(0,l.kt)("p",null,"For kuberentes < 1.15, ",(0,l.kt)("inlineCode",{parentName:"p"},"--validate=false")," is needed to ignore the unexpected fields"),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply --validate=false -f -"),(0,l.kt)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",(0,l.kt)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," commands below. Refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/helm/chaos-mesh#configuration"},"Configuration")," for more information.")),(0,l.kt)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install in Docker environment"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For helm 2.X")),(0,l.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For helm 3.X")),(0,l.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,l.kt)("p",{parentName:"li"},"Expected output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install in containerd environment (kind)"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,l.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,l.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,l.kt)("p",{parentName:"li"},"Expected output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install in containerd environment (k3s)"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,l.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,l.kt)(r.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,l.kt)("p",{parentName:"li"},"Expected output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),(0,l.kt)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," for help."))}d.isMDXComponent=!0}}]);