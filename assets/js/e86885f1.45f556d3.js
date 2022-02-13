"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2783],{89400:function(e,t,n){var a=n(91262),i=n(19055),r=n(67294),o=n(81249),s=n.n(o),l=n(52263),d=n(56871),p=n(28084);t.Z=function(e){var t=e.children,n=e.className,o=void 0===n?"language-bash":n,m=(0,l.Z)().siteConfig,c=(0,p.usePluginData)("docusaurus-plugin-content-docs").versions;return r.createElement(a.Z,null,(function(){var e=(0,d.p)(m,c),n="latest"===e?"":"--version "+function(e){if(s().satisfies(e,">=2.0.3"))return e;var t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)}(e);return r.createElement(i.Z,{className:o},t.replace("--version latest",n).trim())}))}},56871:function(e,t,n){n.d(t,{p:function(){return l}});var a=n(91262),i=n(19055),r=n(67294),o=n(52263),s=n(28084),l=function(e,t){var n=window.location.pathname,a=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&a)return"current"===a?"latest":a;if(n.includes("/docs/next"))return"latest";var i=t.filter((function(e){return e.isLast}))[0].name;return t.filter((function(e){return n.includes(e.name)})).map((function(e){return e.name}))[0]||i};t.Z=function(e){var t=e.children,n=e.replaced,d=void 0===n?"latest":n,p=e.isArchive,m=void 0!==p&&p,c=e.className,u=void 0===c?"language-bash":c,h=(0,o.Z)().siteConfig,N=(0,s.usePluginData)("docusaurus-plugin-content-docs").versions;return r.createElement(a.Z,null,(function(){var e=l(h,N),n=m?t.replace(d,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(d,"v"+e);return r.createElement(i.Z,{className:u},n)}))}},67634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(89400),s=["components"],l={title:"Simulate DNS Faults"},d=void 0,p={unversionedId:"simulate-dns-chaos-on-kubernetes",id:"simulate-dns-chaos-on-kubernetes",isDocsHomePage:!1,title:"Simulate DNS Faults",description:"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults.",source:"@site/docs/simulate-dns-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-dns-chaos-on-kubernetes",permalink:"/docs/next/simulate-dns-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-dns-chaos-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"Simulate DNS Faults"},sidebar:"docs",previous:{title:"Simulate File I/O Faults",permalink:"/docs/next/simulate-io-chaos-on-kubernetes"},next:{title:"Simulate Time Faults",permalink:"/docs/next/simulate-time-chaos-on-kubernetes"}},m=[{value:"DNSChaos Introduction",id:"dnschaos-introduction",children:[],level:2},{value:"Deploy Chaos DNS Service",id:"deploy-chaos-dns-service",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[],level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",children:[{value:"Configuration Description",id:"configuration-description",children:[],level:3}],level:2}],c={toc:m};function u(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults."),(0,r.kt)("h2",{id:"dnschaos-introduction"},"DNSChaos Introduction"),(0,r.kt)("p",null,"DNSChaos is used to simulate wrong DNS responses. For example, DNSChaos can return an error or return a random IP address when receiving a DNS request."),(0,r.kt)("h2",{id:"deploy-chaos-dns-service"},"Deploy Chaos DNS Service"),(0,r.kt)("p",null,"Before creating a DNSChaos experiment using Chaos Mesh, you need to deploy a special DNS service to inject faults:"),(0,r.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set dnsServer.create=true"),(0,r.kt)("p",null,"After executing the above commands, check if the DNS service status is normal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server\n")),(0,r.kt)("p",null,"Make sure that the Pod status is ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Currently, DNSChaos only supports record types ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AAAA"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The chaos DNS service runs CoreDNS with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,r.kt)("inlineCode",{parentName:"p"},"dns-server-config")," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-testing\n")))),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Create Experiment",src:n(31822).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"DNS FAULT")," and select a specific behavior, such as ",(0,r.kt)("strong",{parentName:"p"},"ERROR"),". Then fill out the matching rules."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"DNSChaos Experiment",src:n(26124).Z})),(0,r.kt)("p",{parentName:"li"},"According to the matching rules configured in the screenshot, the DNS FAULT takes effect for domains including ",(0,r.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an error will be returned when a DNS request is sent to these three domains. For details of specific matching rules, refer to the description of the ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," field in ",(0,r.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experiment Information",src:n(78878).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,r.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dnschaos.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-testing\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n")),(0,r.kt)("p",{parentName:"li"},"This configuration can take effect for domains including ",(0,r.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an IP address will be returned when a DNS request is sent to these three domains. For specific matching rules, refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," description in ",(0,r.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f dnschaos.yaml\n")))),(0,r.kt)("h3",{id:"configuration-description"},"Configuration Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the behavior of DNS fault. Optional values: ",(0,r.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),". When the value is ",(0,r.kt)("inlineCode",{parentName:"td"},"random"),", DNS service returns a random IP address; when the value is ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),", DNS service returns an error."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"patterns")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects a domain template that matches faults. Placeholder ",(0,r.kt)("inlineCode",{parentName:"td"},"?")," and wildcard are supported. ",(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"google.com"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"chaos-mesh.org"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"github.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the target Pod. For details, refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/define-chaos-experiment-scope"},"Define the Scope of Chaos Experiments"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The wildcard in ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," configuration must be at the end of string. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mes*.org.")," is an invalid configuration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," is not configured, faults are injected for all domains."))))))}u.isMDXComponent=!0},31822:function(e,t,n){t.Z=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},26124:function(e,t,n){t.Z=n.p+"assets/images/dnschaos-exp-1b652bbb9c9b57d42d5a5496789886bf.png"},78878:function(e,t,n){t.Z=n.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"}}]);