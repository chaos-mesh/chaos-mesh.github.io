"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6569],{56871:function(e,t,a){var n=a(91262),s=a(73148),o=a(67294),l=a(52263),r=a(28084);t.Z=function(e){var t=e.children,a=e.className,i=function(e){var t=e.children;return o.createElement("div",{style:{marginBottom:"1.25rem"}},o.createElement(s.Z,{className:a},t))};return o.createElement(n.Z,{fallback:o.createElement(i,null,t)},(function(){var e=function(){var e=(0,l.Z)().siteConfig,t=window.location.pathname,a=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&a)return"current"===a?"latest":a;if(t.includes("/docs/next"))return"latest";var n=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions,s=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||s}(),a="latest"===e?t:t.replace("latest","v"+e);return o.createElement(i,null,a)}))}},73148:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(87462),s=a(67294),o=a(86010),l=a(24544),r=a(10195),i=a(87594),c=a.n(i),h=a(83583),m=a(24973),p="codeBlockContainer_2gih",u="codeBlockContent_3z4W",d="codeBlockTitle_1Kb7",k="codeBlock_6upA",g="codeBlockWithTitle_xy-i",N="copyButton_2e3i",f="codeBlockLines_xlV7",b=a(941),y=/{([\d,-]+)}/,v=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function C(e){var t=e.children,a=e.className,i=e.metastring,C=e.title,E=(0,b.LU)().prism,R=(0,s.useState)(!1),M=R[0],T=R[1],A=(0,s.useState)(!1),S=A[0],x=A[1];(0,s.useEffect)((function(){x(!0)}),[]);var j=(0,b.bc)(i)||C,w=(0,s.useRef)(null),I=[],_=(0,h.Z)(),B=Array.isArray(t)?t.join(""):t;if(i&&y.test(i)){var Z=i.match(y)[1];I=c()(Z).filter((function(e){return e>0}))}var D=a&&a.replace(/language-/,"");!D&&E.defaultLanguage&&(D=E.defaultLanguage);var q=B.replace(/\n$/,"");if(0===I.length&&void 0!==D){for(var P,L="",U=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}}(D),G=B.replace(/\n$/,"").split("\n"),V=0;V<G.length;){var X=V+1,Y=G[V].match(U);if(null!==Y){switch(Y.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=X+",";break;case"highlight-start":P=X;break;case"highlight-end":L+=P+"-"+(X-1)+","}G.splice(V,1)}else V+=1}I=c()(L),q=G.join("\n")}var H=function(){(0,r.Z)(q),T(!0),setTimeout((function(){return T(!1)}),2e3)};return s.createElement(l.ZP,(0,n.Z)({},l.lG,{key:String(S),theme:_,code:q,language:D}),(function(e){var t,a=e.className,l=e.style,r=e.tokens,i=e.getLineProps,c=e.getTokenProps;return s.createElement("div",{className:p},j&&s.createElement("div",{style:l,className:d},j),s.createElement("div",{className:(0,o.Z)(u,D)},s.createElement("div",{tabIndex:0,className:(0,o.Z)(a,k,"thin-scrollbar",(t={},t[g]=j,t))},s.createElement("div",{className:f,style:l},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return I.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),s.createElement("div",(0,n.Z)({key:t},a),e.map((function(e,t){return s.createElement("span",(0,n.Z)({key:t},c({token:e,key:t})))})))})))),s.createElement("button",{ref:w,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(N),onClick:H},M?s.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):s.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},70958:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return m},default:function(){return u}});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),l=a(56871),r=["components"],i={id:"installation",title:"Installation"},c=void 0,h={unversionedId:"installation/installation",id:"version-0.9.1/installation/installation",isDocsHomePage:!1,title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/versioned_docs/version-0.9.1/installation/installation.md",sourceDirName:"installation",slug:"/installation/installation",permalink:"/docs/0.9.1/installation/installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/installation/installation.md",tags:[],version:"0.9.1",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-0.9.1/docs",previous:{title:"Blast Radius",permalink:"/docs/0.9.1/concepts/blast_radius"},next:{title:"Get started on kind",permalink:"/docs/0.9.1/installation/get_started_on_kind"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Install by helm",id:"install-by-helm",children:[{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",children:[]},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",children:[]},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",children:[]}]}],p={toc:m};function u(e){var t=e.components,a=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),(0,o.kt)("p",null,"If you want to try Chaos Mesh on your your laptop (Linux or macOS), you can refer the following two documents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.9.1/installation/get_started_on_kind"},"Get started on kind")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.9.1/installation/get_started_on_minikube"},"Get started on minikube"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/admin/authorization/rbac"},"RBAC")," enabled (optional)")),(0,o.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,o.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,o.kt)("p",null,"If you are using k3s or k3d, please also specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--k3s")," flag."),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"install.sh")," is suitable for trying Chaos Mesh out. If you want to use Chaos Mesh in production or other serious scenarios, Helm is the recommended deployment method.")),(0,o.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,o.kt)("p",null,"Verify if Chaos Mesh is running (For the use of ",(0,o.kt)("em",{parentName:"p"},"kubectl"),", you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"},"documentation"),".)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,o.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,o.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,o.kt)("h2",{id:"install-by-helm"},"Install by helm"),(0,o.kt)("p",null,"You also can install Chaos Mesh by ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),(0,o.kt)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,o.kt)("p",null,"After adding the repository successfully, you can search available version by the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,o.kt)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),(0,o.kt)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"),(0,o.kt)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),(0,o.kt)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install in Docker environment"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For helm 2.X")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For helm 3.X")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,o.kt)("p",{parentName:"li"},"Expected output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install in containerd environment (kind)"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,o.kt)("p",{parentName:"li"},"Expected output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install in containerd environment (k3s)"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,o.kt)("p",{parentName:"li"},"Expected output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",(0,o.kt)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install")," commands above. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/helm/chaos-mesh#configuration"},"Configuration")," for more information.")),(0,o.kt)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," for help."))}u.isMDXComponent=!0}}]);