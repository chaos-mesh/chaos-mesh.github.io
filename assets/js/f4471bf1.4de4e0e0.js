(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[82],{6871:function(e,a,t){"use strict";var n=t(1262),s=t(3148),l=t(7294),o=t(2263),r=t(8084);a.Z=function(e){var a=e.children,t=e.className,i=function(e){var a=e.children;return l.createElement("div",{style:{marginBottom:"1.25rem"}},l.createElement(s.Z,{className:t},a))};return l.createElement(n.Z,{fallback:l.createElement(i,null,a)},(function(){var e=function(){var e=(0,o.default)().siteConfig,a=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&t)return"current"===t?"latest":t;if(a.includes("/docs/next"))return"latest";var n=(0,r.usePluginData)("docusaurus-plugin-content-docs").versions,s=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||s}(),t="latest"===e?a:a.replace("latest","v"+e);return l.createElement(i,null,t)}))}},3148:function(e,a,t){"use strict";t.d(a,{Z:function(){return C}});var n=t(2122),s=t(7294),l=t(6010),o=t(4544),r=t(735),i=t(7594),c=t.n(i),h=t(3583),m=t(4973),p="codeBlockContainer_2gih",u="codeBlockContent_3z4W",d="codeBlockTitle_1Kb7",k="codeBlock_6upA",g="codeBlockWithTitle_xy-i",N="copyButton_2e3i",f="codeBlockLines_xlV7",b=t(6700),v=/{([\d,-]+)}/,y=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var a={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},t=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+a[e].start+"\\s*("+t+")\\s*"+a[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function C(e){var a=e.children,t=e.className,i=e.metastring,C=e.title,E=(0,b.LU)().prism,R=(0,s.useState)(!1),_=R[0],M=R[1],A=(0,s.useState)(!1),T=A[0],x=A[1];(0,s.useEffect)((function(){x(!0)}),[]);var S=(0,b.bc)(i)||C,j=(0,s.useRef)(null),w=[],I=(0,h.Z)(),B=Array.isArray(a)?a.join(""):a;if(i&&v.test(i)){var D=i.match(v)[1];w=c()(D).filter((function(e){return e>0}))}var Z=t&&t.replace(/language-/,"");!Z&&E.defaultLanguage&&(Z=E.defaultLanguage);var q=B.replace(/\n$/,"");if(0===w.length&&void 0!==Z){for(var P,L="",U=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"]);case"jsx":case"tsx":return y(["js","jsBlock","jsx"]);case"html":return y(["js","jsBlock","html"]);case"python":case"py":return y(["python"]);default:return y()}}(Z),G=B.replace(/\n$/,"").split("\n"),X=0;X<G.length;){var V=X+1,Y=G[X].match(U);if(null!==Y){switch(Y.slice(1).reduce((function(e,a){return e||a}),void 0)){case"highlight-next-line":L+=V+",";break;case"highlight-start":P=V;break;case"highlight-end":L+=P+"-"+(V-1)+","}G.splice(X,1)}else X+=1}w=c()(L),q=G.join("\n")}var H=function(){(0,r.Z)(q),M(!0),setTimeout((function(){return M(!1)}),2e3)};return s.createElement(o.ZP,(0,n.Z)({},o.lG,{key:String(T),theme:I,code:q,language:Z}),(function(e){var a,t=e.className,o=e.style,r=e.tokens,i=e.getLineProps,c=e.getTokenProps;return s.createElement("div",{className:p},S&&s.createElement("div",{style:o,className:d},S),s.createElement("div",{className:(0,l.Z)(u,Z)},s.createElement("div",{tabIndex:0,className:(0,l.Z)(t,k,"thin-scrollbar",(a={},a[g]=S,a))},s.createElement("div",{className:f,style:o},r.map((function(e,a){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=i({line:e,key:a});return w.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),s.createElement("div",(0,n.Z)({key:a},t),e.map((function(e,a){return s.createElement("span",(0,n.Z)({key:a},c({token:e,key:a})))})))})))),s.createElement("button",{ref:j,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(N),onClick:H},_?s.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):s.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},4641:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var n=t(2122),s=t(9756),l=(t(7294),t(3905)),o=t(6871),r={id:"installation",title:"Installation"},i={unversionedId:"user_guides/installation",id:"version-1.2.0/user_guides/installation",isDocsHomePage:!1,title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/versioned_docs/version-1.2.0/user_guides/installation.md",sourceDirName:"user_guides",slug:"/user_guides/installation",permalink:"/docs/user_guides/installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.0/user_guides/installation.md",version:"1.2.0",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-1.2.0/docs",previous:{title:"Get started on Minikube",permalink:"/docs/get_started/get_started_on_minikube"},next:{title:"Offline Installation",permalink:"/docs/user_guides/offline_installation"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Install by helm",id:"install-by-helm",children:[{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",children:[]},{value:"Step 2: Install Chaos Mesh",id:"step-2-install-chaos-mesh",children:[]}]}],h={toc:c};function m(e){var a=e.components,t=(0,s.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),(0,l.kt)("p",null,"If you want to try Chaos Mesh on your laptop (Linux or macOS), you can refer the following two documents:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/get_started/get_started_on_kind"},"Get started on kind")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/get_started/get_started_on_minikube"},"Get started on minikube"))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/admin/authorization/rbac"},"RBAC")," enabled (optional)")),(0,l.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),(0,l.kt)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),(0,l.kt)("p",null,"If you are using k3s or k3d, please also specify ",(0,l.kt)("inlineCode",{parentName:"p"},"--k3s")," flag."),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," is suitable for trying Chaos Mesh out. If you want to use Chaos Mesh in production or other serious scenarios, Helm is the recommended deployment method.")),(0,l.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,l.kt)("p",null,"Verify if Chaos Mesh is running (For the use of ",(0,l.kt)("em",{parentName:"p"},"kubectl"),", you can refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"},"documentation"),".)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,l.kt)("p",null,"Expected output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,l.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,l.kt)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),(0,l.kt)(o.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,l.kt)("h2",{id:"install-by-helm"},"Install by helm"),(0,l.kt)("p",null,"You also can install Chaos Mesh by ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),(0,l.kt)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,l.kt)("p",null,"After adding the repository successfully, you can search available version by the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,l.kt)("h3",{id:"step-2-install-chaos-mesh"},"Step 2: Install Chaos Mesh"),(0,l.kt)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install in Docker environment"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For helm 2.X")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For helm 3.X")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,l.kt)("p",{parentName:"li"},"Expected output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install in containerd environment (kind)"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,l.kt)("p",{parentName:"li"},"Expected output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install in containerd environment (k3s)"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"chaos-testing"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 2.X")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for helm 3.X")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),(0,l.kt)("p",{parentName:"li"},"Expected output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),(0,l.kt)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues"},"issue")," for help."))}m.isMDXComponent=!0}}]);