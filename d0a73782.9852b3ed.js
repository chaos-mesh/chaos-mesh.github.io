(window.webpackJsonp=window.webpackJsonp||[]).push([[96,10,72,93],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),s=(a(0),a(184)),o=a(196),c={id:"installation",title:"Installation"},l={unversionedId:"get_started/installation",id:"get_started/installation",isDocsHomePage:!1,title:"Installation",description:"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes.",source:"@site/docs/get_started/installation.md",slug:"/get_started/installation",permalink:"/docs/next/get_started/installation",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/get_started/installation.md",version:"current",sidebar:"docs",previous:{title:"Blast Radius",permalink:"/docs/next/concepts/blast_radius"},next:{title:"Get started on kind",permalink:"/docs/next/get_started/get_started_on_kind"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Install by helm",id:"install-by-helm",children:[{value:"Step 1: Add Chaos Mesh repository to Helm repos",id:"step-1-add-chaos-mesh-repository-to-helm-repos",children:[]},{value:"Step 2: Create custom resource type",id:"step-2-create-custom-resource-type",children:[]},{value:"Step 3: Install Chaos Mesh",id:"step-3-install-chaos-mesh",children:[]}]}],u={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document describes how to install Chaos Mesh to perform chaos experiments against your application in Kubernetes."),Object(s.b)("p",null,"If you want to try Chaos Mesh on your laptop (Linux or macOS), you can refer the following two documents:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/get_started/get_started_on_kind"}),"Get started on kind")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/get_started/get_started_on_minikube"}),"Get started on minikube"))),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)("p",null,"Before deploying Chaos Mesh, make sure the following items have been installed:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Kubernetes version >= 1.12"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/admin/authorization/rbac"}),"RBAC")," enabled (optional)")),Object(s.b)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),Object(s.b)(o.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),Object(s.b)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),Object(s.b)("p",null,"If you are using k3s or k3d, please also specify ",Object(s.b)("inlineCode",{parentName:"p"},"--k3s")," flag."),Object(s.b)(o.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s"),Object(s.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(s.b)("p",null,"Verify if the chaos mesh is running (For the use of ",Object(s.b)("em",{parentName:"p"},"kubectl"),", you can refer to the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"}),"documentation"),".)"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(s.b)("p",null,"Expected output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(s.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(s.b)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),Object(s.b)(o.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),Object(s.b)("h2",{id:"install-by-helm"},"Install by helm"),Object(s.b)("p",null,"You also can install Chaos Mesh by ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh"}),"helm"),".\nBefore you start installing, make sure that helm v2 or helm v3 is installed correctly."),Object(s.b)("h3",{id:"step-1-add-chaos-mesh-repository-to-helm-repos"},"Step 1: Add Chaos Mesh repository to Helm repos"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),Object(s.b)("p",null,"After adding the repository successfully, you can search available version by the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm search repo chaos-mesh\n")),Object(s.b)("h3",{id:"step-2-create-custom-resource-type"},"Step 2: Create custom resource type"),Object(s.b)("p",null,"To use Chaos Mesh, you must create the related custom resource type first."),Object(s.b)(o.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"),Object(s.b)("h3",{id:"step-3-install-chaos-mesh"},"Step 3: Install Chaos Mesh"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Note:")),Object(s.b)("p",{parentName:"blockquote"},"Currently, Chaos Dashboard is not installed by default. If you want to try it out, add ",Object(s.b)("inlineCode",{parentName:"p"},"--set dashboard.create=true")," in the helm commands above. Refer to ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/helm/chaos-mesh#configuration"}),"Configuration")," for more information.")),Object(s.b)("p",null,"Depending on your environment, there are two methods of installing Chaos Mesh:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Install in Docker environment"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Create namespace ",Object(s.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"For helm 2.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"For helm 3.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(s.b)("p",{parentName:"li"},"Expected output:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Install in containerd environment (kind)"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Create namespace ",Object(s.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"for helm 2.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"for helm 3.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(s.b)("p",{parentName:"li"},"Expected output:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n"))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Install in containerd environment (k3s)"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Create namespace ",Object(s.b)("inlineCode",{parentName:"p"},"chaos-testing"),":"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns chaos-testing\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Install Chaos Mesh using helm:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"for helm 2.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh/chaos-mesh --name=chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"for helm 3.X")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Check whether Chaos Mesh pods are installed:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods --namespace chaos-testing -l app.kubernetes.io/instance=chaos-mesh\n")),Object(s.b)("p",{parentName:"li"},"Expected output:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")))))),Object(s.b)("p",null,"After executing the above commands, you should be able to see the output indicating that all Chaos Mesh pods are up and running. Otherwise, check the current environment according to the prompt message or create an ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chaos-mesh/chaos-mesh/issues"}),"issue")," for help."))}p.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,h=p["".concat(o,".").concat(m)]||p[m]||b[m]||s;return a?r.a.createElement(h,c(c({ref:t},i),{},{components:a})):r.a.createElement(h,c({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},185:function(e,t,a){"use strict";var n=a(0),r=a(21);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},186:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(185);function r(){return Object(n.a)().siteConfig.themeConfig}},188:function(e,t,a){"use strict";var n=a(2),r=a(0),s=a.n(r),o=a(186),c=a(192),l=a(189),i=a.n(l),u=a(190),p=a.n(u),b=a(185),m=a(191),h=a(48),d=a.n(h),g=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},y=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,l=e.metastring,u=Object(b.a)().siteConfig.themeConfig.prism,h=void 0===u?{}:u,j=Object(r.useState)(!1),O=j[0],v=j[1],N=Object(r.useState)(!1),k=N[0],C=N[1];Object(r.useEffect)((function(){C(!0)}),[]);var E=Object(r.useRef)(null),x=[],w="",T=Object(m.a)();if(l&&g.test(l)){var S=l.match(g)[1];x=p.a.parse(S).filter((function(e){return e>0}))}l&&y.test(l)&&(w=l.match(y)[0].split("title=")[1].replace(/"+/g,""));var D=a&&a.replace(/language-/,"");!D&&h.defaultLanguage&&(D=h.defaultLanguage);var P=t.replace(/\n$/,"");if(0===x.length&&void 0!==D){for(var R,A="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}}(D),I=t.replace(/\n$/,"").split("\n"),_=0;_<I.length;){var L=_+1,B=I[_].match(M);if(null!==B){switch(B.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=L+",";break;case"highlight-start":R=L;break;case"highlight-end":A+=R+"-"+(L-1)+","}I.splice(_,1)}else _+=1}x=p.a.parse(A),P=I.join("\n")}var q=function(){i()(P),v(!0),setTimeout((function(){return v(!1)}),2e3)};return s.a.createElement(c.a,Object(n.a)({},c.b,{key:String(k),theme:T,code:P,language:D}),(function(e){var t,a,r=e.className,c=e.style,l=e.tokens,i=e.getLineProps,u=e.getTokenProps;return s.a.createElement(s.a.Fragment,null,w&&s.a.createElement("div",{style:c,className:d.a.codeBlockTitle},w),s.a.createElement("div",{className:d.a.codeBlockContent},s.a.createElement("button",{ref:E,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(d.a.copyButton,(t={},t[d.a.copyButtonWithTitle]=w,t)),onClick:q},O?"Copied":"Copy"),s.a.createElement("div",{tabIndex:0,className:Object(o.a)(r,d.a.codeBlock,(a={},a[d.a.codeBlockWithTitle]=w,a))},s.a.createElement("div",{className:d.a.codeBlockLines,style:c},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return x.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),s.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return s.a.createElement("span",Object(n.a)({key:t},u({token:e,key:t})))})))}))))))}))}},189:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let s=!1;r.rangeCount>0&&(s=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),s&&(r.removeAllRanges(),r.addRange(s)),n&&n.focus(),o};e.exports=n,e.exports.default=n},190:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var s=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var c=a;c!=r;c+=o)s.push(c);return s}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},191:function(e,t,a){"use strict";var n={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=a(193),s=a(187);t.a=function(){var e=Object(s.a)().prism,t=Object(r.a)().isDarkTheme,a=e.theme||n,o=e.darkTheme||a;return t?o:a}},192:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(20),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s=a(0),o={Prism:n.a,theme:r};function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},b=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=l({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=l({},a,{backgroundColor:null}),r};function m(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var h=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?b(e.theme,e.language):void 0;return t.themeDict=a})),c(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,s=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(s.style=o.plain),void 0!==r&&(s.style=void 0!==s.style?l({},s.style,r):r),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s})),c(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return s[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return s[e]}));return Object.assign.apply(Object,[o].concat(c))}})),c(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,s=e.token,o=l({},m(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?l({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,s=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],s=0,o=0,c=[],l=[c];o>-1;){for(;(s=n[o]++)<r[o];){var b=void 0,m=t[o],h=a[o][s];if("string"==typeof h?(m=o>0?m:["plain"],b=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),b=h.content),"string"==typeof b){var d=b.split(i),g=d.length;c.push({types:m,content:d[0]});for(var f=1;f<g;f++)u(c),l.push(c=[]),c.push({types:m,content:d[f]})}else o++,t.push(m),a.push(b),n.push(0),r.push(b.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return u(c),l}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component);t.a=h},193:function(e,t,a){"use strict";var n=a(0),r=a(195);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},194:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r})),a.d(t,"useAllPluginInstancesData",(function(){return s})),a.d(t,"usePluginData",(function(){return o}));var n=a(185);function r(){var e=Object(n.a)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function s(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var a=s(e)[t];if(!a)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return a}},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(7);var o=function(e){var t=e.children,a=e.fallback;return s.a.canUseDOM&&null!=t?r.a.createElement(r.a.Fragment,null,t()):a||null},c=a(188),l=a(194);t.a=function(e){var t=e.children,a=e.className,n=function(e){var t=e.children;return r.a.createElement("div",{style:{marginBottom:"1.25rem"}},r.a.createElement(c.a,{className:a},t))};return r.a.createElement(o,{fallback:r.a.createElement(n,null,t)},(function(){var e,a,s,o,c=(e=window.location.href,a=Object(l.usePluginData)("docusaurus-plugin-content-docs").versions,s=a.filter((function(e){return e.isLast}))[0].name,o=a.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0],e.includes("/docs/next")&&(o="latest"),o||s),i="latest"===c?t:t.replace("latest","v"+c);return r.a.createElement(n,null,i)}))}}}]);