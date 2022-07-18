"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91262:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(72389);function s(e){let{children:t,fallback:n}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=n?n:null}},56871:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>i});var r=n(91262),a=n(90814),s=n(67294),l=n(52263),o=n(28084);const i=(e,t)=>{const n=window.location.pathname;let r=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&r)return"current"===r?"latest":r;if(n.includes("/docs/next"))return"latest";const a=t.filter((e=>e.isLast))[0].name;return t.filter((e=>n.includes(e.name))).map((e=>e.name))[0]||a};const c=e=>{let{children:t,replaced:n="latest",isArchive:c=!1,className:u="language-bash"}=e;const{siteConfig:d}=(0,l.Z)(),{versions:p}=(0,o.eZ)("docusaurus-plugin-content-docs");return s.createElement(r.Z,null,(()=>{const e=i(d,p),r=c?t.replace(n,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(n,"v"+e);return s.createElement(a.Z,{className:u},r)}))}},62613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),s=n(56871);const l={title:"Get started on kind"},o=void 0,i={unversionedId:"get_started/get_started_on_kind",id:"version-1.2.4/get_started/get_started_on_kind",title:"Get started on kind",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.",source:"@site/versioned_docs/version-1.2.4/get_started/get_started_on_kind.md",sourceDirName:"get_started",slug:"/get_started/get_started_on_kind",permalink:"/docs/1.2.4/get_started/get_started_on_kind",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/get_started/get_started_on_kind.md",tags:[],version:"1.2.4",frontMatter:{title:"Get started on kind"},sidebar:"version-1.2.4/docs",previous:{title:"Blast Radius",permalink:"/docs/1.2.4/concepts/blast_radius"},next:{title:"Get started on Minikube",permalink:"/docs/1.2.4/get_started/get_started_on_minikube"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Chaos Mesh",id:"install-chaos-mesh",level:2},{value:"Verify your installation",id:"verify-your-installation",level:3},{value:"Run Chaos experiment",id:"run-chaos-experiment",level:2},{value:"Uninstallation",id:"uninstallation",level:2},{value:"Clean kind cluster",id:"clean-kind-cluster",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before deployment, make sure ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running on your local machine."),(0,a.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"install.sh")," is an automation shell script that helps you install dependencies such as ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes"),", and deploy Chaos Mesh itself."),(0,a.kt)("p",null,"After executing the above command, you need to verify if the Chaos Mesh is installed correctly."),(0,a.kt)("p",null,"You also can use ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.2.4/user_guides/installation#install-by-helm"},"install Chaos Mesh manually"),"."),(0,a.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,a.kt)("p",null,"Verify if Chaos Mesh is running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,a.kt)("p",null,"Expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,a.kt)("h2",{id:"run-chaos-experiment"},"Run Chaos experiment"),(0,a.kt)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. Follow the steps in ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.2.4/user_guides/run_chaos_experiment"},"Run chaos experiment")," to run a Chaos experiment and then observe it on Chaos Mesh Dashboard."),(0,a.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,a.kt)("p",null,"In addition, you also can uninstall Chaos Mesh by deleting the namespace directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns chaos-testing\n")),(0,a.kt)("h2",{id:"clean-kind-cluster"},"Clean kind cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")))}p.isMDXComponent=!0}}]);