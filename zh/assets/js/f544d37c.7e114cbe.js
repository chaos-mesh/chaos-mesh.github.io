"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[56184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91262:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(72389);function l(e){let{children:t,fallback:n}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):n??null}},56871:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>o});var a=n(91262),r=n(52263),l=n(28084),s=n(90814),i=n(67294);const o=(e,t)=>{const n=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";const r=t.find((e=>e.isLast)),l=t.find((e=>n.includes(e.name)));return l?l.name:r.name};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:u="language-bash"}=e;const{siteConfig:d}=(0,r.Z)(),{versions:p}=(0,l.eZ)("docusaurus-plugin-content-docs");return i.createElement(a.Z,null,(()=>{const e=o(d,p),a=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(n,"v"+e);return i.createElement(s.Z,{className:u},a)}))}},70275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(56871);const s={title:"Get started on kind"},i=void 0,o={unversionedId:"installation/get_started_on_kind",id:"version-0.9.1/installation/get_started_on_kind",title:"Get started on kind",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.",source:"@site/versioned_docs/version-0.9.1/installation/get_started_on_kind.md",sourceDirName:"installation",slug:"/installation/get_started_on_kind",permalink:"/zh/docs/0.9.1/installation/get_started_on_kind",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/installation/get_started_on_kind.md",tags:[],version:"0.9.1",frontMatter:{title:"Get started on kind"},sidebar:"version-0.9.1/docs",previous:{title:"Installation",permalink:"/zh/docs/0.9.1/installation/"},next:{title:"Get started on Minikube",permalink:"/zh/docs/0.9.1/installation/get_started_on_minikube"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Chaos Mesh",id:"install-chaos-mesh",level:2},{value:"Verify your installation",id:"verify-your-installation",level:3},{value:"Uninstallation",id:"uninstallation",level:2},{value:"Clean kind cluster",id:"clean-kind-cluster",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before deployment, make sure ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running on your local machine."),(0,r.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," is an automation shell script that helps you install dependencies such as ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes"),", and deploy Chaos Mesh itself."),(0,r.kt)("p",null,"After executing the above command, you need to verify if the Chaos Mesh is installed correctly."),(0,r.kt)("p",null,"You also can use ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," to ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/0.9.1/installation/#install-by-helm"},"install Chaos Mesh manually"),"."),(0,r.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,r.kt)("p",null,"Verify if Chaos Mesh is running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,r.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,r.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,r.kt)("p",null,"In addition, you also can uninstall Chaos Mesh by deleting the namespace directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns chaos-testing\n")),(0,r.kt)("h2",{id:"clean-kind-cluster"},"Clean kind cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")))}p.isMDXComponent=!0}}]);