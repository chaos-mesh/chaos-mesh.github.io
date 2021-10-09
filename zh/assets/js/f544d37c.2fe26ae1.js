"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6184],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},91262:function(e,n,t){var r=t(67294),a=t(72389);n.Z=function(e){var n=e.children,t=e.fallback;return(0,a.Z)()&&null!=n?r.createElement(r.Fragment,null,n()):t||null}},56871:function(e,n,t){t.d(n,{p:function(){return s}});var r=t(91262),a=t(16213),i=t(67294),l=t(52263),o=t(28084),s=function(e,n){var t=window.location.pathname,r=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&r)return"current"===r?"latest":r;if(t.includes("/docs/next"))return"latest";var a=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||a};n.Z=function(e){var n=e.children,t=e.className,c=(0,l.Z)().siteConfig,u=(0,o.usePluginData)("docusaurus-plugin-content-docs").versions;return i.createElement(r.Z,null,(function(){var e=s(c,u),r="latest"===e?n:n.replace("latest","v"+e);return i.createElement(a.Z,{className:t},r)}))}},70275:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=t(56871),o=["components"],s={title:"Get started on kind"},c=void 0,u={unversionedId:"installation/get_started_on_kind",id:"version-0.9.1/installation/get_started_on_kind",isDocsHomePage:!1,title:"Get started on kind",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.",source:"@site/versioned_docs/version-0.9.1/installation/get_started_on_kind.md",sourceDirName:"installation",slug:"/installation/get_started_on_kind",permalink:"/zh/docs/0.9.1/installation/get_started_on_kind",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-0.9.1/installation/get_started_on_kind.md",tags:[],version:"0.9.1",frontMatter:{title:"Get started on kind"},sidebar:"version-0.9.1/docs",previous:{title:"Installation",permalink:"/zh/docs/0.9.1/installation/installation"},next:{title:"Get started on Minikube",permalink:"/zh/docs/0.9.1/installation/get_started_on_minikube"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Clean kind cluster",id:"clean-kind-cluster",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before deployment, make sure ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running on your local machine."),(0,i.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,i.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"install.sh")," is an automation shell script that helps you install dependencies such as ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kind"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes"),", and deploy Chaos Mesh itself."),(0,i.kt)("p",null,"After executing the above command, you need to verify if the Chaos Mesh is installed correctly."),(0,i.kt)("p",null,"You also can use ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," to ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/0.9.1/installation/installation#install-by-helm"},"install Chaos Mesh manually"),"."),(0,i.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,i.kt)("p",null,"Verify if Chaos Mesh is running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,i.kt)("p",null,"Expected output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,i.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,i.kt)(l.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,i.kt)("p",null,"In addition, you also can uninstall Chaos Mesh by deleting the namespace directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns chaos-testing\n")),(0,i.kt)("h2",{id:"clean-kind-cluster"},"Clean kind cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")))}m.isMDXComponent=!0}}]);