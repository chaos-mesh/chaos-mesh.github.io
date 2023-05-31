"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2167],{68070:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(8714),s=a(43205),o=a(73622),i=a(85881),l=a(59496),r=a(16682),h=a.n(r),c=a(62125);const m=e=>{let{children:t,className:a="language-bash"}=e;const{siteConfig:r}=(0,s.Z)(),{versions:m}=(0,o.eZ)("docusaurus-plugin-content-docs");return l.createElement(n.Z,null,(()=>{const e=(0,c.p)(r,m),n="latest"===e?"":`--version ${(e=>{if(h().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return l.createElement(i.Z,{className:a},t.replace("--version latest",n).trim())}))}},62125:(e,t,a)=>{a.d(t,{Z:()=>h,p:()=>r});var n=a(8714),s=a(43205),o=a(73622),i=a(85881),l=a(59496);const r=(e,t)=>{const a=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";const s=t.find((e=>e.isLast)),o=t.find((e=>a.includes(e.name)));return o?o.name:s.name};const h=e=>{let{children:t,replaced:a="latest",isArchive:h=!1,className:c="language-bash"}=e;const{siteConfig:m}=(0,s.Z)(),{versions:d}=(0,o.eZ)("docusaurus-plugin-content-docs");return l.createElement(n.Z,null,(()=>{const e=r(m,d),n=h?t.replace(a,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(a,"v"+e);return l.createElement(i.Z,{className:c},n)}))}},52242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=a(60795),s=(a(59496),a(49613));const o={},i=void 0,l={unversionedId:"common/quick-run",id:"version-2.6.0/common/quick-run",title:"quick-run",description:"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.",source:"@site/versioned_docs/version-2.6.0/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/docs/common/quick-run",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.0/common/quick-run.md",tags:[],version:"2.6.0",frontMatter:{}},r={},h=[],c={toc:h},m="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh."),(0,s.kt)("p",null,"For the method to run the experiment, it is recommended to refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/run-a-chaos-experiment"},"Run a Chaos experiment"),". After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard."))}d.isMDXComponent=!0},27596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=a(60795),s=(a(59496),a(49613));const o={},i=void 0,l={unversionedId:"common/verify-installation",id:"version-2.6.0/common/verify-installation",title:"verify-installation",description:"To check the running status of Chaos Mesh, execute the following command:",source:"@site/versioned_docs/version-2.6.0/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/docs/common/verify-installation",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.0/common/verify-installation.md",tags:[],version:"2.6.0",frontMatter:{}},r={},h=[],c={toc:h},m="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To check the running status of Chaos Mesh, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get po -n chaos-mesh\n")),(0,s.kt)("p",null,"The expected output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,s.kt)("p",null,"If your actual output is similar to the expected output with ",(0,s.kt)("inlineCode",{parentName:"p"},"NAME"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"RESTARTS"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"AGE"),", it means that Helm is installed successfully."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"STATUS")," of your actual output is not ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", then execute the following command to check the Pod details, and troubleshoot issues according to the error information."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n"))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If ",(0,s.kt)("inlineCode",{parentName:"p"},"leader-election")," feature is turned off manually, ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," should only have 1 replication."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n"))))}d.isMDXComponent=!0},85790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>h,metadata:()=>m,toc:()=>p});var n=a(60795),s=(a(59496),a(49613)),o=a(62125),i=a(68070),l=a(27596),r=a(52242);const h={title:"Install Chaos Mesh using Helm"},c=void 0,m={unversionedId:"production-installation-using-helm",id:"version-2.6.0/production-installation-using-helm",title:"Install Chaos Mesh using Helm",description:"This document describes how to install Chaos Mesh in the production environment.",source:"@site/versioned_docs/version-2.6.0/production-installation-using-helm.md",sourceDirName:".",slug:"/production-installation-using-helm",permalink:"/docs/production-installation-using-helm",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.0/production-installation-using-helm.md",tags:[],version:"2.6.0",frontMatter:{title:"Install Chaos Mesh using Helm"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Install Chaos Mesh Offline",permalink:"/docs/offline-installation"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Chaos Mesh using Helm",id:"install-chaos-mesh-using-helm",level:2},{value:"Step 1: Add Chaos Mesh repository",id:"step-1-add-chaos-mesh-repository",level:3},{value:"Step 2: View the installable versions of Chaos Mesh",id:"step-2-view-the-installable-versions-of-chaos-mesh",level:3},{value:"Step 3: Create the namespace to install Chaos Mesh",id:"step-3-create-the-namespace-to-install-chaos-mesh",level:3},{value:"Step 4: Install Chaos Mesh in different environments",id:"step-4-install-chaos-mesh-in-different-environments",level:3},{value:"Docker",id:"docker",level:4},{value:"Containerd",id:"containerd",level:4},{value:"K3s",id:"k3s",level:4},{value:"CRI-O",id:"cri-o",level:4},{value:"Verify the installation",id:"verify-the-installation",level:2},{value:"Run Chaos experiments",id:"run-chaos-experiments",level:2},{value:"Upgrade Chaos Mesh",id:"upgrade-chaos-mesh",level:2},{value:"Uninstall Chaos Mesh",id:"uninstall-chaos-mesh",level:2},{value:"FAQs",id:"faqs",level:2},{value:"How can I install the latest version of Chaos Mesh?",id:"how-can-i-install-the-latest-version-of-chaos-mesh",level:3},{value:"How can I disable the safe mode?",id:"how-can-i-disable-the-safe-mode",level:3},{value:"How can I persist Chaos Dashboard data",id:"how-can-i-persist-chaos-dashboard-data",level:3}],u={toc:p},f="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to install Chaos Mesh in the production environment."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before installing Chaos Mesh, make sure that you have installed ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," in your environment."),(0,s.kt)("p",null,"To check whether Helm is installed or not, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,s.kt)("p",null,"The expected output is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion: "go1.16.3"}\n')),(0,s.kt)("p",null,"If your actual output is similar to the expected output with ",(0,s.kt)("inlineCode",{parentName:"p"},"Version"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"GitCommit"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"GitTreeState"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"GoVersion"),", it means that Helm is installed successfully."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"In this document, Helm v3 is used in commands to make operations on Chaos Mesh. If Helm v2 is used in your environment, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/v2_v3_migration/"},"Migrate Helm v2 to v3")," or modify the Helm version to the v2 format.")),(0,s.kt)("h2",{id:"install-chaos-mesh-using-helm"},"Install Chaos Mesh using Helm"),(0,s.kt)("h3",{id:"step-1-add-chaos-mesh-repository"},"Step 1: Add Chaos Mesh repository"),(0,s.kt)("p",null,"Add the Chaos Mesh repository to the Helm repository:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,s.kt)("h3",{id:"step-2-view-the-installable-versions-of-chaos-mesh"},"Step 2: View the installable versions of Chaos Mesh"),(0,s.kt)("p",null,"To see charts that can be installed, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The above command will output the latest release of chart. If you want to install a historical version, execute the following command to view all released versions:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh -l\n"))),(0,s.kt)("p",null,"After the above command is completed, you can start installing Chaos Mesh."),(0,s.kt)("h3",{id:"step-3-create-the-namespace-to-install-chaos-mesh"},"Step 3: Create the namespace to install Chaos Mesh"),(0,s.kt)("p",null,"It is recommended to install Chaos Mesh under the ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-mesh")," namespace, or you can specify any namespace to install Chaos Mesh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-mesh\n")),(0,s.kt)("h3",{id:"step-4-install-chaos-mesh-in-different-environments"},"Step 4: Install Chaos Mesh in different environments"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"When installing Chaos Mesh on Kubernetes v1.15(or an earlier version), you need to manually install CRD. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/faqs#q-failed-to-install-chaos-mesh-with-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1"},"FAQ"),".")),(0,s.kt)("p",null,"Because socket paths are listened to by the daemons of different running containers, you need to set different values for socket paths during installation. You can execute the following installation commands according to different environments."),(0,s.kt)("h4",{id:"docker"},"Docker"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"# Default to /var/run/docker.sock\nhelm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest"),(0,s.kt)("h4",{id:"containerd"},"Containerd"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --version latest"),(0,s.kt)("h4",{id:"k3s"},"K3s"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock --version latest"),(0,s.kt)("h4",{id:"cri-o"},"CRI-O"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=crio --set chaosDaemon.socketPath=/var/run/crio/crio.sock --version latest"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"To install Chaos Mesh of a specific version, add the ",(0,s.kt)("inlineCode",{parentName:"p"},"--version xxx")," parameter after ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"--version 2.0.0"),".")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"To ensure high availability, Chaos Mesh turns on ",(0,s.kt)("inlineCode",{parentName:"p"},"leader-election")," feature by default. If you do not need to use this feature, you can manually turn it off through ",(0,s.kt)("inlineCode",{parentName:"p"},"--set controllerManager.leaderElection.enabled=false --set controllerManager.replicaCount=1"),".")),(0,s.kt)("h2",{id:"verify-the-installation"},"Verify the installation"),(0,s.kt)(l.default,{mdxType:"VerifyInstallation"}),(0,s.kt)("h2",{id:"run-chaos-experiments"},"Run Chaos experiments"),(0,s.kt)(r.default,{mdxType:"QuickRun"}),(0,s.kt)("h2",{id:"upgrade-chaos-mesh"},"Upgrade Chaos Mesh"),(0,s.kt)("p",null,"To upgrade Chaos Mesh, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"To upgrade Chaos Mesh to a specific version, add the ",(0,s.kt)("inlineCode",{parentName:"p"},"--version xxx")," parameter after ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"--version 2.0.0"),".")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you have upgraded Chaos Mesh in a non-Docker environment, you need to add the corresponding parameters as described in ",(0,s.kt)("a",{parentName:"p",href:"#step-4-install-chaos-mesh-in-different-environments"},"Step 4: Install Chaos Mesh in different environments"),".")),(0,s.kt)("p",null,"To modify the configuration, set different values according to your need. For example, execute the following command to upgrade and uninstall ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-dashboard"),":"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.create=false"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"For more values and their usages, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"all values"),".")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Currently, the latest CustomResourceDefinition (CRD) is not applied during the Helm upgrading, which might cause errors. To avoid this situation, you can apply the latest CRD manually:"),(0,s.kt)(o.Z,{mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl create -f -")),(0,s.kt)("h2",{id:"uninstall-chaos-mesh"},"Uninstall Chaos Mesh"),(0,s.kt)("p",null,"To uninstall Chaos Mesh, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall chaos-mesh -n chaos-mesh\n")),(0,s.kt)("h2",{id:"faqs"},"FAQs"),(0,s.kt)("h3",{id:"how-can-i-install-the-latest-version-of-chaos-mesh"},"How can I install the latest version of Chaos Mesh?"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," file defines the image of the latest version (the master branch). To install the latest version of Chaos Mesh, execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone repository\ngit clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n\nhelm install chaos-mesh helm/chaos-mesh -n=chaos-mesh\n")),(0,s.kt)("h3",{id:"how-can-i-disable-the-safe-mode"},"How can I disable the safe mode?"),(0,s.kt)("p",null,"Safe mode allows you to disable authentication to the Chaos Mesh dashboard, and should only be used for non-production deployments. Safe mode is ",(0,s.kt)("strong",{parentName:"p"},"enabled")," by default. To disable the safe mode, specify ",(0,s.kt)("inlineCode",{parentName:"p"},"dashboard.securityMode")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," during the installation or upgrade:"),(0,s.kt)(i.Z,{mdxType:"PickHelmVersion"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --set dashboard.securityMode=false --version latest"),(0,s.kt)("h3",{id:"how-can-i-persist-chaos-dashboard-data"},"How can I persist Chaos Dashboard data"),(0,s.kt)("p",null,"Chaos Dashboard uses ",(0,s.kt)("inlineCode",{parentName:"p"},"SQLite")," as the default database engine. If ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PV (Persistent Volumes)")," is disabled, the data of Chaos Dashboard will be lost after a reboot occurs. To avoid data loss, you can refer to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/persistence-dashboard"},"Persistence of Chaos Dashboard Data")," document to enable PV for Chaos Dashboard or set ",(0,s.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," as the database engine."))}k.isMDXComponent=!0}}]);