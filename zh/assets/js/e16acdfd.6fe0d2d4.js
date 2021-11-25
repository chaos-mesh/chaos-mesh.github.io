"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7749],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91262:function(e,t,n){var r=n(67294),a=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,a.Z)()&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},56871:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(91262),a=n(16213),s=n(67294),i=n(52263),o=n(28084),l=function(e,t){var n=window.location.pathname,r=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&r)return"current"===r?"latest":r;if(n.includes("/docs/next"))return"latest";var a=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return n.includes(e.name)})).map((function(e){return e.name}))[0]||a};t.Z=function(e){var t=e.children,n=e.className,u=void 0===n?"language-bash":n,c=(0,i.Z)().siteConfig,d=(0,o.usePluginData)("docusaurus-plugin-content-docs").versions;return s.createElement(r.Z,null,(function(){var e=l(c,d),n="latest"===e?t:t.replace("latest","v"+e);return s.createElement(a.Z,{className:u},n)}))}},62613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=n(56871),o=["components"],l={title:"Get started on kind"},u=void 0,c={unversionedId:"get_started/get_started_on_kind",id:"version-1.2.4/get_started/get_started_on_kind",isDocsHomePage:!1,title:"Get started on kind",description:"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind.",source:"@site/versioned_docs/version-1.2.4/get_started/get_started_on_kind.md",sourceDirName:"get_started",slug:"/get_started/get_started_on_kind",permalink:"/zh/docs/1.2.4/get_started/get_started_on_kind",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/get_started/get_started_on_kind.md",tags:[],version:"1.2.4",frontMatter:{title:"Get started on kind"},sidebar:"version-1.2.4/docs",previous:{title:"Blast Radius",permalink:"/zh/docs/1.2.4/concepts/blast_radius"},next:{title:"Get started on Minikube",permalink:"/zh/docs/1.2.4/get_started/get_started_on_minikube"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Chaos Mesh",id:"install-chaos-mesh",children:[{value:"Verify your installation",id:"verify-your-installation",children:[]}]},{value:"Run Chaos experiment",id:"run-chaos-experiment",children:[]},{value:"Uninstallation",id:"uninstallation",children:[]},{value:"Clean kind cluster",id:"clean-kind-cluster",children:[]}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document describes how to deploy Chaos Mesh in Kubernetes on your laptop (Linux or macOS) using kind."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before deployment, make sure ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," is installed and running on your local machine."),(0,s.kt)("h2",{id:"install-chaos-mesh"},"Install Chaos Mesh"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"install.sh")," is an automation shell script that helps you install dependencies such as ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"kind"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"kubernetes"),", and deploy Chaos Mesh itself."),(0,s.kt)("p",null,"After executing the above command, you need to verify if the Chaos Mesh is installed correctly."),(0,s.kt)("p",null,"You also can use ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," to ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/1.2.4/user_guides/installation#install-by-helm"},"install Chaos Mesh manually"),"."),(0,s.kt)("h3",{id:"verify-your-installation"},"Verify your installation"),(0,s.kt)("p",null,"Verify if Chaos Mesh is running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n chaos-testing\n")),(0,s.kt)("p",null,"Expected output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-6d6d95cd94-kl8gs   1/1     Running   0          3m40s\nchaos-daemon-5shkv                          1/1     Running   0          3m40s\nchaos-dashboard-d998856f6-vgrjs             1/1     Running   0          3m40s\n")),(0,s.kt)("h2",{id:"run-chaos-experiment"},"Run Chaos experiment"),(0,s.kt)("p",null,"Now that you have deployed Chaos Mesh in your environment, it's time to use it for your chaos experiments. Follow the steps in ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/1.2.4/user_guides/run_chaos_experiment"},"Run chaos experiment")," to run a Chaos experiment and then observe it on Chaos Mesh Dashboard."),(0,s.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,s.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -"),(0,s.kt)("p",null,"In addition, you also can uninstall Chaos Mesh by deleting the namespace directly."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns chaos-testing\n")),(0,s.kt)("h2",{id:"clean-kind-cluster"},"Clean kind cluster"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")))}h.isMDXComponent=!0}}]);