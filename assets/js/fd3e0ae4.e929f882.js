"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7310],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91262:function(e,t,n){var r=n(67294),a=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,a.Z)()&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},89400:function(e,t,n){var r=n(91262),a=n(16213),o=n(67294),s=n(52263),i=n(56871),c=n(28084);t.Z=function(e){var t=e.children,n=e.className,l=(0,s.Z)().siteConfig,u=(0,c.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(r.Z,null,(function(){var e=(0,i.p)(l,u),r="latest"===e?"":"--version v"+function(e){if("2"===e[0])return e;var t=e.slice(0,3);return parseFloat(t)-.7+e.slice(3)}(e);return o.createElement(a.Z,{className:n},t.replace("--version latest",r).trim())}))}},56871:function(e,t,n){n.d(t,{p:function(){return c}});var r=n(91262),a=n(16213),o=n(67294),s=n(52263),i=n(28084),c=function(e,t){var n=window.location.pathname,r=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&r)return"current"===r?"latest":r;if(n.includes("/docs/next"))return"latest";var a=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return n.includes(e.name)})).map((function(e){return e.name}))[0]||a};t.Z=function(e){var t=e.children,n=e.className,l=(0,s.Z)().siteConfig,u=(0,i.usePluginData)("docusaurus-plugin-content-docs").versions;return o.createElement(r.Z,null,(function(){var e=c(l,u),r="latest"===e?t:t.replace("latest","v"+e);return o.createElement(a.Z,{className:n},r)}))}},64502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(89400),i=["components"],c={title:"DNSChaos Experiment"},l=void 0,u={unversionedId:"chaos_experiments/dnschaos",id:"version-1.1.4/chaos_experiments/dnschaos",isDocsHomePage:!1,title:"DNSChaos Experiment",description:"This document describes how to create DNSChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.1.4/chaos_experiments/dnschaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/dnschaos",permalink:"/docs/1.1.4/chaos_experiments/dnschaos",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.1.4/chaos_experiments/dnschaos.md",tags:[],version:"1.1.4",frontMatter:{title:"DNSChaos Experiment"},sidebar:"version-1.1.4/docs",previous:{title:"KernelChaos Experiment",permalink:"/docs/1.1.4/chaos_experiments/kernelchaos"},next:{title:"Network latency simulation across multiple data centers",permalink:"/docs/1.1.4/use_cases/multi_data_centers"}},p=[{value:"Deploy DNS service for chaos",id:"deploy-dns-service-for-chaos",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Fields description",id:"fields-description",children:[]},{value:"Notes",id:"notes",children:[]}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to create DNSChaos experiments in Chaos Mesh."),(0,o.kt)("p",null,"DNSChaos allows you to simulate fault DNS responses such as a DNS error or a random IP address after a request is sent."),(0,o.kt)("h2",{id:"deploy-dns-service-for-chaos"},"Deploy DNS service for chaos"),(0,o.kt)("p",null,"To create DNSChaos experiments in Chaos Mesh, you need to deploy a DNS service in Chaos Mesh by executing the command below:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set dnsServer.create=true"),(0,o.kt)("p",null,"When the deployment finishes, check the status of this DNS service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server\n")),(0,o.kt)("p",null,"Make sure the Pod's ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,o.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"Below is a sample DNSChaos configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: busybox-dns-chaos\nspec:\n  action: random\n  scope: inner\n  mode: all\n  selector:\n    namespaces:\n      - busybox\n  duration: '90s'\n  scheduler:\n    cron: '@every 100s'\n")),(0,o.kt)("p",null,"For more sample files, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,o.kt)("h2",{id:"fields-description"},"Fields description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"action"),": Defines the chaos action for DNS chaos. Supported actions are:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error")," - Get an error when sending the DNS request"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"random")," - Get a random IP when sending the DNS request")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"scope"),": Defines the scope of the DNS chaos. Supported scopes are:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"outer")," - DNS chaos only works on outer hosts of the Kubernetes cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inner"),"- DNS chaos only works on inner hosts of the Kubernetes cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"all")," - DNS chaos works on all hosts."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"selector"),": Specifies the target pods for chaos injection. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.4/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),"."))),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Currently, DNSChaos only supports record types ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AAAA"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The chaos DNS service runs CoreDNS with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,o.kt)("inlineCode",{parentName:"p"},"dns-server-config")," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service as shown below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-testing\n")))))}h.isMDXComponent=!0}}]);