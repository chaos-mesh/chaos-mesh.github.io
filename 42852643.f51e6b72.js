(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(3),s=a(7),r=(a(0),a(232)),c=a(236),o={id:"installation",title:"Installation"},l={unversionedId:"installation/installation",id:"version-0.9.1/installation/installation",isDocsHomePage:!1,title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/versioned_docs/version-0.9.1/installation/installation.md",slug:"/installation/installation",permalink:"/docs/0.9.1/installation/installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/installation/installation.md",version:"0.9.1",sidebar:"version-0.9.1/docs",previous:{title:"Blast Radius",permalink:"/docs/0.9.1/concepts/blast_radius"},next:{title:"Get started on kind",permalink:"/docs/0.9.1/installation/get_started_on_kind"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Install by helm",id:"install-by-helm",children:[{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",children:[]},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",children:[]},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",children:[]}]}],b={rightToc:i};function m(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),Object(r.b)("p",null,"If you want to try Chaos Mesh on your your laptop (Linux or macOS), you can refer the following two documents:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.9.1/installation/get_started_on_kind"}),"Get started on kind")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.9.1/installation/get_started_on_minikube"}),"Get started on minikube"))),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/admin/authorization/rbac"}),"RBAC")," enabled (optional)")),Object(r.b)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),Object(r.b)(c.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),Object(r.b)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),Object(r.b)("p",null,"If you are using k3s or k3d, please also specify ",Object(r.b)("inlineCode",{parentName:"p"},"--k3s")," flag."),Object(r.b)(c.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"install.sh")," is suitable for trying Chaos Mesh out. If you want to use Chaos Mesh in production or other serious scenarios, Helm is the recommended deployment method.")),Object(r.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(r.b)("p",null,"Verify if Chaos Mesh is running (For the use of ",Object(r.b)("em",{parentName:"p"},"kubectl"),", you can refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"}),"documentation"),".)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(r.b)("p",null,"Expected output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(r.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(r.b)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),Object(r.b)(c.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),Object(r.b)("h2",{id:"install-by-helm"},"Install by helm"),Object(r.b)("p",null,"You also can install Chaos Mesh by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh"}),"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),Object(r.b)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),Object(r.b)("p",null,"After adding the repository successfully, you can search available version by the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm search repo chaos-mesh\n")),Object(r.b)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),Object(r.b)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),Object(r.b)(c.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"),Object(r.b)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),Object(r.b)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install in Docker environment"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create namespace ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For helm 2.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For helm 3.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("p",{parentName:"li"},"Expected output:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install in containerd environment (kind)"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create namespace ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 2.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 3.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("p",{parentName:"li"},"Expected output:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install in containerd environment (k3s)"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create namespace ",Object(r.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 2.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"for helm 3.X")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(r.b)("p",{parentName:"li"},"Expected output:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",Object(r.b)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"helm install")," commands above. Refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/helm/chaos-mesh#configuration"}),"Configuration")," for more information.")),Object(r.b)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/issues"}),"issue")," for help."))}m.isMDXComponent=!0},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=s.a.createContext({}),b=function(e){var t=s.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=b(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,u=m["".concat(c,".").concat(p)]||m[p]||h[p]||r;return a?s.a.createElement(u,o(o({ref:t},i),{},{components:a})):s.a.createElement(u,o({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<r;i++)c[i]=a[i];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},235:function(e,t,a){"use strict";var n=a(3),s=a(0),r=a.n(s),c=a(233),o=a(244),l=a(241),i=a.n(l),b=a(242),m=a.n(b),h=a(243),p=a(54),u=a.n(p),d=a(234),j=/{([\d,-]+)}/,O=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},g=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,l=e.metastring,b=Object(d.useThemeConfig)().prism,p=Object(s.useState)(!1),f=p[0],N=p[1],y=Object(s.useState)(!1),v=y[0],k=y[1];Object(s.useEffect)((function(){k(!0)}),[]);var C=Object(s.useRef)(null),E=[],w="",T=Object(h.a)();if(Array.isArray(t)&&(t=t.join("")),l&&j.test(l)){var R=l.match(j)[1];E=m()(R).filter((function(e){return e>0}))}l&&g.test(l)&&(w=l.match(g)[1]);var x=a&&a.replace(/language-/,"");!x&&b.defaultLanguage&&(x=b.defaultLanguage);var S=t.replace(/\n$/,"");if(0===E.length&&void 0!==x){for(var M,A="",P=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"]);case"jsx":case"tsx":return O(["js","jsBlock","jsx"]);case"html":return O(["js","jsBlock","html"]);case"python":case"py":return O(["python"]);default:return O()}}(x),D=t.replace(/\n$/,"").split("\n"),I=0;I<D.length;){var q=I+1,B=D[I].match(P);if(null!==B){switch(B.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=q+",";break;case"highlight-start":M=q;break;case"highlight-end":A+=M+"-"+(q-1)+","}D.splice(I,1)}else I+=1}E=m()(A),S=D.join("\n")}var _=function(){i()(S),N(!0),setTimeout((function(){return N(!1)}),2e3)};return r.a.createElement(o.a,Object(n.a)({},o.b,{key:String(v),theme:T,code:S,language:x}),(function(e){var t,a=e.className,s=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,w&&r.a.createElement("div",{style:s,className:u.a.codeBlockTitle},w),r.a.createElement("div",{className:u.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(c.a)(a,u.a.codeBlock,"thin-scrollbar",(t={},t[u.a.codeBlockWithTitle]=w,t))},r.a.createElement("div",{className:u.a.codeBlockLines,style:s},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=l({line:e,key:t});return E.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t})))})))})))),r.a.createElement("button",{ref:C,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(u.a.copyButton),onClick:_},f?"Copied":"Copy")))}))}},236:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(8);var c=function(e){var t=e.children,a=e.fallback;return r.a.canUseDOM&&null!=t?s.a.createElement(s.a.Fragment,null,t()):a||null},o=a(235),l=a(238);t.a=function(e){var t=e.children,a=e.className,n=function(e){var t=e.children;return s.a.createElement("div",{style:{marginBottom:"1.25rem"}},s.a.createElement(o.a,{className:a},t))};return s.a.createElement(c,{fallback:s.a.createElement(n,null,t)},(function(){var e=function(){var e=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if("/"===e&&t)return"current"===t?"latest":t;if(e.includes("/docs/next"))return"latest";var a=Object(l.usePluginData)("docusaurus-plugin-content-docs").versions,n=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0]||n}(),a="latest"===e?t:t.replace("latest","v"+e);return s.a.createElement(n,null,a)}))}}}]);