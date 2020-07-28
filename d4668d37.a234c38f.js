(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(111)),o={id:"get_started_on_kind",title:"Get started on kind"},s={unversionedId:"installation/get_started_on_kind",id:"installation/get_started_on_kind",isDocsHomePage:!1,title:"Get started on kind",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.",source:"@site/docs/installation/get_started_on_kind.md",permalink:"/docs/installation/get_started_on_kind",editUrl:"https://github.com/chaos-mesh/chaos-mesh/edit/master/website/docs/installation/get_started_on_kind.md",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation/installation"},next:{title:"Get started on Minikube",permalink:"/docs/installation/get_started_on_minikube"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Clean kind cluster",id:"clean-kind-cluster",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Before deployment, make sure ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker")," is installed and running on your local machine."),Object(i.b)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/install.sh | bash -s -- --local kind\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"install.sh")," is an automation shell script that helps you install dependencies such as ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl"),", ",Object(i.b)("inlineCode",{parentName:"p"},"helm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"kind"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"kubernetes"),", and deploy Chaos Mesh itself."),Object(i.b)("p",null,"After executing the above command, you need to verify if the Chaos Mesh is installed correctly."),Object(i.b)("p",null,"You also can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/"}),"helm")," to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/installation#install-by-helm"}),"install Chaos Mesh manually"),"."),Object(i.b)("h3",{id:"verify-your-installation"},"Verify your installation"),Object(i.b)("p",null,"Verify if the chaos mesh is running"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pod -n chaos-testing\n")),Object(i.b)("p",null,"Expected output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-daemon-jpqhd                          1/1     Running   0          3m40s\nchaos-daemon-n6mfq                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),Object(i.b)("h2",{id:"uninstallation"},"Uninstallation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/install.sh | bash -s -- --template | kubectl delete -f -\n")),Object(i.b)("p",null,"In addition, you also can uninstall Chaos Mesh by deleting the namespace directly."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete ns chaos-testing\n")),Object(i.b)("h2",{id:"clean-kind-cluster"},"Clean kind cluster"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kind delete cluster --name=kind\n")))}u.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);