"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2783],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11068:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Simulate DNS Faults",sidebar_label:"Simulate DNS Faults"},s=void 0,l={unversionedId:"simulate-dns-chaos-on-kubernetes",id:"simulate-dns-chaos-on-kubernetes",isDocsHomePage:!1,title:"Simulate DNS Faults",description:"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults.",source:"@site/docs/simulate-dns-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-dns-chaos-on-kubernetes",permalink:"/docs/next/simulate-dns-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-dns-chaos-on-kubernetes.md",version:"current",frontMatter:{title:"Simulate DNS Faults",sidebar_label:"Simulate DNS Faults"},sidebar:"docs",previous:{title:"Simulate File I/O Faults",permalink:"/docs/next/simulate-io-chaos-on-kubernetes"},next:{title:"Simulate Time Faults",permalink:"/docs/next/simulate-time-chaos-on-kubernetes"}},p=[{value:"DNSChaos Introduction",id:"dnschaos-introduction",children:[]},{value:"Deploy Chaos DNS Service",id:"deploy-chaos-dns-service",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[]},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",children:[{value:"Configuration Description",id:"configuration-description",children:[]}]}],m={toc:p};function c(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults."),(0,i.kt)("h2",{id:"dnschaos-introduction"},"DNSChaos Introduction"),(0,i.kt)("p",null,"DNSChaos is used to simulate wrong DNS responses. For example, DNSChaos can return an error or return a random IP address when receiving a DNS request."),(0,i.kt)("h2",{id:"deploy-chaos-dns-service"},"Deploy Chaos DNS Service"),(0,i.kt)("p",null,"Before creating a DNSChaos experiment using Chaos Mesh, you need to deploy a special DNS service to inject faults:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dnsServer.create=true\n")),(0,i.kt)("p",null,"After executing the above commands, check if the DNS service status is normal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server\n")),(0,i.kt)("p",null,"Make sure that the Pod status is ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Currently, DNSChaos only supports record types ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AAAA"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The chaos DNS service runs CoreDNS with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,i.kt)("inlineCode",{parentName:"p"},"dns-server-config")," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service using the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-testing\n")))),(0,i.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,i.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Create Experiment",src:n(31822).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,i.kt)("strong",{parentName:"p"},"DNS FAULT")," and select a specific behavior, such as ",(0,i.kt)("strong",{parentName:"p"},"ERROR"),". Then fill out the matching rules."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"DNSChaos Experiment",src:n(26124).Z})),(0,i.kt)("p",{parentName:"li"},"According to the matching rules configured in the screenshot, the DNS FAULT takes effect for domains including ",(0,i.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an error will be returned when a DNS request is sent to these three domains. For details of specific matching rules, refer to the description of the ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," field in ",(0,i.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Experiment Information",src:n(78878).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,i.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dnschaos.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-testing\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n")),(0,i.kt)("p",{parentName:"li"},"This configuration can take effect for domains including ",(0,i.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an IP address will be returned when a DNS request is sent to these three domains. For specific matching rules, refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," description in ",(0,i.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f dnschaos.yaml\n")))),(0,i.kt)("h3",{id:"configuration-description"},"Configuration Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"action"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the behavior of DNS fault. The value can be ",(0,i.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"error"),". When the value is ",(0,i.kt)("inlineCode",{parentName:"td"},"random"),", DNS service will return a random IP address; when the value is ",(0,i.kt)("inlineCode",{parentName:"td"},"error"),", DNS service will return an error."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"error"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"patterns"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Selects a domain template that matches faults. Placeholder ",(0,i.kt)("inlineCode",{parentName:"td"},"?")," and wildcard are supported. ",(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"google.com"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"chaos-mesh.org"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"github.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the mode of the experiment. The mode options include ",(0,i.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Provides parameters for the ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,i.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selector"),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the target Pod. For details, refer to ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/define-chaos-experiment-scope"},"Define the Scope of Chaos Experiments"),"."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The wildcard in ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," configuration must be at the end of string. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mes*.org.")," is an invalid configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," is not configured, faults will be injected for all domains."))))))}c.isMDXComponent=!0},31822:function(e,t,n){t.Z=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},26124:function(e,t,n){t.Z=n.p+"assets/images/dnschaos-exp-1b652bbb9c9b57d42d5a5496789886bf.png"},78878:function(e,t,n){t.Z=n.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"}}]);