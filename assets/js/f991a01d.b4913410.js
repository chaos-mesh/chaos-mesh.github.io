"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9749],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,d=h["".concat(c,".").concat(u)]||h[u]||m[u]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61967:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"dnschaos_experiment",title:"DNSChaos Experiment",sidebar_label:"DNSChaos Experiment"},c=void 0,p={unversionedId:"chaos_experiments/dnschaos_experiment",id:"version-1.2.3/chaos_experiments/dnschaos_experiment",isDocsHomePage:!1,title:"DNSChaos Experiment",description:"This document describes how to create DNSChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.2.3/chaos_experiments/dns_chaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/dnschaos_experiment",permalink:"/docs/1.2.3/chaos_experiments/dnschaos_experiment",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.3/chaos_experiments/dns_chaos.md",tags:[],version:"1.2.3",frontMatter:{id:"dnschaos_experiment",title:"DNSChaos Experiment",sidebar_label:"DNSChaos Experiment"},sidebar:"version-1.2.3/docs",previous:{title:"KernelChaos Experiment",permalink:"/docs/1.2.3/chaos_experiments/kernelchaos_experiment"},next:{title:"AwsChaos Experiment",permalink:"/docs/1.2.3/chaos_experiments/awschaos_experiment"}},l=[{value:"Deploy DNS service for chaos",id:"deploy-dns-service-for-chaos",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Fields description",id:"fields-description",children:[]},{value:"Notes",id:"notes",children:[]}],m={toc:l};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to create DNSChaos experiments in Chaos Mesh."),(0,o.kt)("p",null,"DNSChaos allows you to simulate fault DNS responses such as a DNS error or a random IP address after a request is sent."),(0,o.kt)("h2",{id:"deploy-dns-service-for-chaos"},"Deploy DNS service for chaos"),(0,o.kt)("p",null,"To create DNSChaos experiments in Chaos Mesh, you need to deploy a DNS service in Chaos Mesh by executing the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dnsServer.create=true\n")),(0,o.kt)("p",null,"When the deployment finishes, check the status of this DNS service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server\n")),(0,o.kt)("p",null,"Make sure the Pod's ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,o.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"Below is a sample DNSChaos configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: busybox-dns-chaos\nspec:\n  action: random\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  mode: all\n  selector:\n    namespaces:\n      - busybox\n  duration: '90s'\n  scheduler:\n    cron: '@every 100s'\n")),(0,o.kt)("p",null,"For more sample files, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,o.kt)("h2",{id:"fields-description"},"Fields description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"action"),": Defines the chaos action for DNS chaos. Supported actions are:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error")," - Get an error when sending the DNS request"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"random")," - Get a random IP when sending the DNS request"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"patterns"),": Choose which domain names to take effect, support the placeholder ? and wildcard ","*",", or the specified domain name."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The wildcard ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," must be at the end of the string. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"chaos-_.org")," is invalid."),(0,o.kt)("li",{parentName:"ul"},"If the patterns is empty, will take effect on all the domain names."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"selector"),": Specifies the target pods for chaos injection. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.2.3/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),"."))),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Currently, DNSChaos only supports record types ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AAAA"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The chaos DNS service runs CoreDNS with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,o.kt)("inlineCode",{parentName:"p"},"dns-server-config")," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service as shown below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-testing\n")))))}h.isMDXComponent=!0}}]);