"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[30485],{68070:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(8714),r=a(43205),i=a(73622),o=a(85881),s=a(59496),l=a(16682),d=a.n(l),p=a(62125);const m=e=>{let{children:t,className:a="language-bash"}=e;const{siteConfig:l}=(0,r.Z)(),{versions:m}=(0,i.eZ)("docusaurus-plugin-content-docs");return s.createElement(n.Z,null,(()=>{const e=(0,p.p)(l,m),n="latest"===e?"":`--version ${(e=>{if(d().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e)}`;return s.createElement(o.Z,{className:a},t.replace("--version latest",n).trim())}))}},62125:(e,t,a)=>{a.d(t,{Z:()=>d,p:()=>l});var n=a(8714),r=a(43205),i=a(73622),o=a(85881),s=a(59496);const l=(e,t)=>{const a=window.location.pathname;let n=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&n)return"current"===n?"latest":n;if(a.includes("/docs/next"))return"latest";const r=t.find((e=>e.isLast)),i=t.find((e=>a.includes(e.name)));return i?i.name:r.name};const d=e=>{let{children:t,replaced:a="latest",isArchive:d=!1,className:p="language-bash"}=e;const{siteConfig:m}=(0,r.Z)(),{versions:c}=(0,i.eZ)("docusaurus-plugin-content-docs");return s.createElement(n.Z,null,(()=>{const e=l(m,c),n=d?t.replace(a,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?t:t.replace(a,"v"+e);return s.createElement(o.Z,{className:p},n)}))}},29450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(60795),r=(a(59496),a(49613)),i=a(68070);const o={title:"Simulate DNS Faults"},s=void 0,l={unversionedId:"simulate-dns-chaos-on-kubernetes",id:"version-2.3.3/simulate-dns-chaos-on-kubernetes",title:"Simulate DNS Faults",description:"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults.",source:"@site/versioned_docs/version-2.3.3/simulate-dns-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-dns-chaos-on-kubernetes",permalink:"/docs/2.3.3/simulate-dns-chaos-on-kubernetes",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.3/simulate-dns-chaos-on-kubernetes.md",tags:[],version:"2.3.3",frontMatter:{title:"Simulate DNS Faults"},sidebar:"docs",previous:{title:"Simulate File I/O Faults",permalink:"/docs/2.3.3/simulate-io-chaos-on-kubernetes"},next:{title:"Simulate Time Faults",permalink:"/docs/2.3.3/simulate-time-chaos-on-kubernetes"}},d={},p=[{value:"DNSChaos Introduction",id:"dnschaos-introduction",level:2},{value:"Deploy Chaos DNS Service",id:"deploy-chaos-dns-service",level:2},{value:"Notes",id:"notes",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",level:2},{value:"Configuration Description",id:"configuration-description",level:3}],m={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults."),(0,r.kt)("h2",{id:"dnschaos-introduction"},"DNSChaos Introduction"),(0,r.kt)("p",null,"DNSChaos is used to simulate wrong DNS responses. For example, DNSChaos can return an error or return a random IP address when receiving a DNS request."),(0,r.kt)("h2",{id:"deploy-chaos-dns-service"},"Deploy Chaos DNS Service"),(0,r.kt)("p",null,"Before creating a DNSChaos experiment using Chaos Mesh, you need to deploy a special DNS service to inject faults:"),(0,r.kt)(i.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --version latest --set dnsServer.create=true"),(0,r.kt)("p",null,"After executing the above commands, check if the DNS service status is normal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-mesh -l app.kubernetes.io/component=chaos-dns-server\n")),(0,r.kt)("p",null,"Make sure that the Pod status is ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Currently, DNSChaos only supports record types ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AAAA"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The chaos DNS service runs CoreDNS with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,r.kt)("inlineCode",{parentName:"p"},"dns-server-config")," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-mesh\n")))),(0,r.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,r.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Create Experiment",src:a(24507).Z,width:"959",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,r.kt)("strong",{parentName:"p"},"DNS FAULT")," and select a specific behavior, such as ",(0,r.kt)("strong",{parentName:"p"},"ERROR"),". Then fill out the matching rules."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"DNSChaos Experiment",src:a(41647).Z,width:"1718",height:"1436"})),(0,r.kt)("p",{parentName:"li"},"According to the matching rules configured in the screenshot, the DNS FAULT takes effect for domains including ",(0,r.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an error will be returned when a DNS request is sent to these three domains. For details of specific matching rules, refer to the description of the ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," field in ",(0,r.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Experiment Information",src:a(87542).Z,width:"973",height:"442"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,r.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dnschaos.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-mesh\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n")),(0,r.kt)("p",{parentName:"li"},"This configuration can take effect for domains including ",(0,r.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an IP address will be returned when a DNS request is sent to these three domains. For specific matching rules, refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," description in ",(0,r.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f dnschaos.yaml\n")))),(0,r.kt)("h3",{id:"configuration-description"},"Configuration Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the behavior of DNS fault. Optional values: ",(0,r.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),". When the value is ",(0,r.kt)("inlineCode",{parentName:"td"},"random"),", DNS service returns a random IP address; when the value is ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),", DNS service returns an error."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"patterns")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects a domain template that matches faults. Placeholder ",(0,r.kt)("inlineCode",{parentName:"td"},"?")," and wildcard are supported. ",(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"google.com"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"chaos-mesh.org"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"github.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the mode of the experiment. The mode options include ",(0,r.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides parameters for the ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the target Pod. For details, refer to ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.3/define-chaos-experiment-scope"},"Define the Scope of Chaos Experiments"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The wildcard in ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," configuration must be at the end of string. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-mes*.org.")," is an invalid configuration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"patterns")," is not configured, faults are injected for all domains.")))))}h.isMDXComponent=!0},24507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},41647:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dnschaos-exp-1b652bbb9c9b57d42d5a5496789886bf.png"},87542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"}}]);