(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r),s=n(230),o=n(241),l=n(238),c=n.n(l),u=n(239),b=n.n(u),p=n(240),m=n(54),d=n.n(m),h=n(231),f=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},j=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,u=Object(h.useThemeConfig)().prism,m=Object(r.useState)(!1),O=m[0],v=m[1],y=Object(r.useState)(!1),k=y[0],N=y[1];Object(r.useEffect)((function(){N(!0)}),[]);var _=Object(r.useRef)(null),w=[],x="",C=Object(p.a)();if(Array.isArray(t)&&(t=t.join("")),l&&f.test(l)){var E=l.match(f)[1];w=b()(E).filter((function(e){return e>0}))}l&&j.test(l)&&(x=l.match(j)[1]);var M=n&&n.replace(/language-/,"");!M&&u.defaultLanguage&&(M=u.defaultLanguage);var T=t.replace(/\n$/,"");if(0===w.length&&void 0!==M){for(var S,P="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(M),R=t.replace(/\n$/,"").split("\n"),D=0;D<R.length;){var L=D+1,I=R[D].match(B);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":P+=L+",";break;case"highlight-start":S=L;break;case"highlight-end":P+=S+"-"+(L-1)+","}R.splice(D,1)}else D+=1}w=b()(P),T=R.join("\n")}var A=function(){c()(T),v(!0),setTimeout((function(){return v(!1)}),2e3)};return i.a.createElement(o.a,Object(a.a)({},o.b,{key:String(k),theme:C,code:T,language:M}),(function(e){var t,n=e.className,r=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return i.a.createElement(i.a.Fragment,null,x&&i.a.createElement("div",{style:r,className:d.a.codeBlockTitle},x),i.a.createElement("div",{className:d.a.codeBlockContent},i.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,d.a.codeBlock,"thin-scrollbar",(t={},t[d.a.codeBlockWithTitle]=x,t))},i.a.createElement("div",{className:d.a.codeBlockLines,style:r},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return w.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),i.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return i.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t})))})))})))),i.a.createElement("button",{ref:_,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(d.a.copyButton),onClick:A},O?"Copied":"Copy")))}))}},233:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(8);var s=function(e){var t=e.children,n=e.fallback;return i.a.canUseDOM&&null!=t?r.a.createElement(r.a.Fragment,null,t()):n||null},o=n(232),l=n(235);t.a=function(e){var t=e.children,n=e.className,a=function(e){var t=e.children;return r.a.createElement("div",{style:{marginBottom:"1.25rem"}},r.a.createElement(o.a,{className:n},t))};return r.a.createElement(s,{fallback:r.a.createElement(a,null,t)},(function(){var e=function(){var e=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if("/"===e&&t)return"current"===t?"latest":t;if(e.includes("/docs/next"))return"latest";var n=Object(l.usePluginData)("docusaurus-plugin-content-docs").versions,a=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(t){return e.includes(t.name)})).map((function(e){return e.name}))[0]||a}(),n="latest"===e?t:t.replace("latest","v"+e);return r.a.createElement(a,null,n)}))}},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(229)),s=n(233),o={id:"get_started_on_minikube",title:"Get started on Minikube"},l={unversionedId:"get_started/get_started_on_minikube",id:"version-1.1.1/get_started/get_started_on_minikube",isDocsHomePage:!1,title:"Get started on Minikube",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube.",source:"@site/versioned_docs/version-1.1.1/get_started/get_started_on_minikube.md",slug:"/get_started/get_started_on_minikube",permalink:"/docs/get_started/get_started_on_minikube",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.1/get_started/get_started_on_minikube.md",version:"1.1.1",sidebar:"version-1.1.1/docs",previous:{title:"Get started on kind",permalink:"/docs/get_started/get_started_on_kind"},next:{title:"Installation",permalink:"/docs/user_guides/installation"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Set up the Kubernetes environment",id:"step-1-set-up-the-kubernetes-environment",children:[]},{value:"Step 2: Install Chaos Mesh",id:"step-2-install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Run Chaos experiment",id:"run-chaos-experiment",children:[]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Limitations",id:"limitations",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using Minikube."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Before deployment, make sure ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Minikube")," is installed on your local machine."),Object(i.b)("h2",{id:"step-1-set-up-the-kubernetes-environment"},"Step 1: Set up the Kubernetes environment"),Object(i.b)("p",null,"Perform the following steps to set up the local Kubernetes environment:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start a Kubernetes cluster:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'minikube start --kubernetes-version v1.15.0 --cpus 4 --memory "8192mb"\n')),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("p",{parentName:"blockquote"},"It is recommended to allocate enough RAM (more than 8192 MiB) to the Virtual Machine (VM) using the ",Object(i.b)("inlineCode",{parentName:"p"},"--cpus")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--memory")," flag."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install helm:"),Object(i.b)("p",{parentName:"li"},"Following helm installation steps: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/install"}),"https://helm.sh/docs/intro/install")))),Object(i.b)("h2",{id:"step-2-install-chaos-mesh"},"Step 2: Install Chaos Mesh"),Object(i.b)(s.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash"),Object(i.b)("p",null,"The above command installs all the CRDs, required service account configuration, and all components.\nBefore you start running a chaos experiment, verify if Chaos Mesh is installed correctly."),Object(i.b)("p",null,"You also can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/"}),"helm")," to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/user_guides/installation#install-by-helm"}),"install Chaos Mesh manually"),"."),Object(i.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(i.b)("p",null,"Verify if Chaos Mesh is running"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(i.b)("p",null,"Expected output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(i.b)("h2",{id:"run-chaos-experiment"},"Run Chaos experiment"),Object(i.b)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. Follow the steps in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/user_guides/run_chaos_experiment"}),"Run chaos experiment")," to run a Chaos experiment and then observe it on Chaos Mesh Dashboard."),Object(i.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(i.b)("p",null,"You can uninstall Chaos Mesh by deleting the namespace."),Object(i.b)(s.a,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("p",null,"There are some known restrictions for Chaos Operator deployed in the Minikube cluster:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"netem chaos")," is only supported for Minikube clusters >= version 1.6.")),Object(i.b)("p",null,"In Minikube, the default virtual machine driver's image does not contain the ",Object(i.b)("inlineCode",{parentName:"p"},"sch_netem")," kernel module in earlier versions. You can use ",Object(i.b)("inlineCode",{parentName:"p"},"none")," driver (if your host is Linux with the ",Object(i.b)("inlineCode",{parentName:"p"},"sch_netem")," kernel module loaded) to try these chaos actions using Minikube or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://minikube.sigs.k8s.io/docs/contrib/building/iso/"}),"build an image with sch_netem by yourself"),"."))}b.isMDXComponent=!0}}]);