"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7955],{91751:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=n(13274),i=n(90073),r=n(48852);const l={title:"Simulate DNS Faults"},c=void 0,o={id:"simulate-dns-chaos-on-kubernetes",title:"Simulate DNS Faults",description:"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults.",source:"@site/docs/simulate-dns-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-dns-chaos-on-kubernetes",permalink:"/docs/next/simulate-dns-chaos-on-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-dns-chaos-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"Simulate DNS Faults"},sidebar:"docs",previous:{title:"Simulate File I/O Faults",permalink:"/docs/next/simulate-io-chaos-on-kubernetes"},next:{title:"Simulate Time Faults",permalink:"/docs/next/simulate-time-chaos-on-kubernetes"}},d={},a=[{value:"DNSChaos Introduction",id:"dnschaos-introduction",level:2},{value:"Check if Chaos DNS Server is deployed",id:"check-if-chaos-dns-server-is-deployed",level:2},{value:"Notes",id:"notes",level:2},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",level:2},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",level:2},{value:"Configuration Description",id:"configuration-description",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults."}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"To simluate DNS faults, you need to deploy a special DNS service called Chaos DNS Server."}),(0,t.jsxs)(s.p,{children:["In the latest version, Chaos Mesh will deploy Chaos DNS Server by default. If you don't need to simulate DNS faults, you can set ",(0,t.jsx)(s.code,{children:"dnsServer.create"})," to ",(0,t.jsx)(s.code,{children:"false"})," when installing Chaos Mesh:"]}),(0,t.jsx)(r.A,{children:"helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --version latest --set dnsServer.create=false"})]}),"\n",(0,t.jsx)(s.h2,{id:"dnschaos-introduction",children:"DNSChaos Introduction"}),"\n",(0,t.jsx)(s.p,{children:"DNSChaos is used to simulate wrong DNS responses. For example, DNSChaos can return an error or return a random IP address when receiving a DNS request."}),"\n",(0,t.jsx)(s.h2,{id:"check-if-chaos-dns-server-is-deployed",children:"Check if Chaos DNS Server is deployed"}),"\n",(0,t.jsx)(s.p,{children:"Check if Chaos DNS Server is deployed by running the following command:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl get pods -n chaos-mesh -l app.kubernetes.io/component=chaos-dns-server\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Make sure that the Pod status is ",(0,t.jsx)(s.code,{children:"Running"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Currently, DNSChaos only supports record types ",(0,t.jsx)(s.code,{children:"A"})," and ",(0,t.jsx)(s.code,{children:"AAAA"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The chaos DNS service runs CoreDNS with the ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/k8s_dns_chaos",children:"k8s_dns_chaos"})," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,t.jsx)(s.code,{children:"dns-server-config"})," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service using the following command:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl edit configmap dns-server-config -n chaos-mesh\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-experiments-using-chaos-dashboard",children:"Create experiments using Chaos Dashboard"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Open Chaos Dashboard, and click ",(0,t.jsx)(s.strong,{children:"NEW EXPERIMENT"})," on the page to create a new experiment:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Create Experiment",src:n(72303).A+"",width:"959",height:"519"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Choose a Target"})," area, choose ",(0,t.jsx)(s.strong,{children:"DNS FAULT"})," and select a specific behavior, such as ",(0,t.jsx)(s.strong,{children:"ERROR"}),". Then fill out the matching rules."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"DNSChaos Experiment",src:n(85485).A+"",width:"1718",height:"1436"})}),"\n",(0,t.jsxs)(s.p,{children:["According to the matching rules configured in the screenshot, the DNS FAULT takes effect for domains including ",(0,t.jsx)(s.code,{children:"google.com"}),", ",(0,t.jsx)(s.code,{children:"chaos-mesh.org"}),", and ",(0,t.jsx)(s.code,{children:"github.com"}),", which means that an error will be returned when a DNS request is sent to these three domains. For details of specific matching rules, refer to the description of the ",(0,t.jsx)(s.code,{children:"patterns"})," field in ",(0,t.jsx)(s.a,{href:"#configuration-description",children:"Configuration Description"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Experiment Information",src:n(18306).A+"",width:"973",height:"442"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Submit the experiment information."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-experiments-using-the-yaml-file",children:"Create experiments using the YAML file"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Write the experiment configuration to the ",(0,t.jsx)(s.code,{children:"dnschaos.yaml"})," file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-mesh\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This configuration can take effect for domains including ",(0,t.jsx)(s.code,{children:"google.com"}),", ",(0,t.jsx)(s.code,{children:"chaos-mesh.org"}),", and ",(0,t.jsx)(s.code,{children:"github.com"}),", which means that an IP address will be returned when a DNS request is sent to these three domains. For specific matching rules, refer to the ",(0,t.jsx)(s.code,{children:"patterns"})," description in ",(0,t.jsx)(s.a,{href:"#configuration-description",children:"Configuration Description"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["After the configuration file is prepared, use ",(0,t.jsx)(s.code,{children:"kubectl"})," to create an experiment:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f dnschaos.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"configuration-description",children:"Configuration Description"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Default value"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Required"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"action"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Defines the behavior of DNS fault. Optional values: ",(0,t.jsx)(s.code,{children:"random"})," or ",(0,t.jsx)(s.code,{children:"error"}),". When the value is ",(0,t.jsx)(s.code,{children:"random"}),", DNS service returns a random IP address; when the value is ",(0,t.jsx)(s.code,{children:"error"}),", DNS service returns an error."]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"None"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Yes"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"random"})," or ",(0,t.jsx)(s.code,{children:"error"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"patterns"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"String array"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Selects a domain template that matches faults. Placeholder ",(0,t.jsx)(s.code,{children:"?"})," and wildcard are supported. ",(0,t.jsx)(s.code,{children:"*"})]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"[]"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"No"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"google.com"}),", ",(0,t.jsx)(s.code,{children:"chaos-mesh.org"}),", ",(0,t.jsx)(s.code,{children:"github.com"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"mode"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Specifies the mode of the experiment. The mode options include ",(0,t.jsx)(s.code,{children:"one"})," (selecting a random Pod), ",(0,t.jsx)(s.code,{children:"all"})," (selecting all eligible Pods), ",(0,t.jsx)(s.code,{children:"fixed"})," (selecting a specified number of eligible Pods), ",(0,t.jsx)(s.code,{children:"fixed-percent"})," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,t.jsx)(s.code,{children:"random-max-percent"})," (selecting the maximum percentage of Pods from the eligible Pods)."]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"None"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Yes"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"one"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"value"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Provides parameters for the ",(0,t.jsx)(s.code,{children:"mode"})," configuration, depending on ",(0,t.jsx)(s.code,{children:"mode"}),". For example, when ",(0,t.jsx)(s.code,{children:"mode"})," is set to ",(0,t.jsx)(s.code,{children:"fixed-percent"}),", ",(0,t.jsx)(s.code,{children:"value"})," specifies the percentage of Pods."]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"None"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"No"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"1"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"selector"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"struct"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["Specifies the target Pod. For details, refer to ",(0,t.jsx)(s.a,{href:"/docs/next/define-chaos-experiment-scope",children:"Define the Scope of Chaos Experiments"}),"."]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"None"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Yes"}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The wildcard in ",(0,t.jsx)(s.code,{children:"patterns"})," configuration must be at the end of string. For example, ",(0,t.jsx)(s.code,{children:"chaos-mes*.org."})," is an invalid configuration."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["When ",(0,t.jsx)(s.code,{children:"patterns"})," is not configured, faults are injected for all domains."]}),"\n"]}),"\n"]})})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},48852:(e,s,n)=>{n.d(s,{A:()=>h});var t=n(73066),i=n(43406),r=n(30744),l=n(36604),c=n(29582),o=n.n(c),d=n(81720),a=n(13274);const h=e=>{let{children:s,className:n="language-bash"}=e;const{siteConfig:c}=(0,i.A)(),{versions:h}=(0,r.P_)("docusaurus-plugin-content-docs");return(0,a.jsx)(t.A,{children:()=>{const e=(0,d.t)(c,h),t="latest"===e?"":`--version ${(e=>{if(o().satisfies(e,">=2.0.3"))return e;const s=e.slice(0,3);return"v"+(parseFloat(s)-.7).toFixed(1)+e.slice(3)})(e)}`;return(0,a.jsx)(l.A,{className:n,children:s.replace("--version latest",t).trim()})}})}},81720:(e,s,n)=>{n.d(s,{A:()=>d,t:()=>o});var t=n(73066),i=n(43406),r=n(30744),l=n(36604),c=n(13274);const o=(e,s)=>{const n=window.location.pathname;let t=window.localStorage.getItem("docs-preferred-version-default");if(n===e.baseUrl&&t)return"current"===t?"latest":t;if(n.includes("/docs/next"))return"latest";const i=s.find((e=>e.isLast)),r=s.find((e=>n.includes(e.name)));return r?r.name:i.name};const d=e=>{let{children:s,replaced:n="latest",isArchive:d=!1,className:a="language-bash"}=e;const{siteConfig:h}=(0,i.A)(),{versions:x}=(0,r.P_)("docusaurus-plugin-content-docs");return(0,c.jsx)(t.A,{children:()=>{const e=o(h,x),t=d?s.replace(n,function(e){return"latest"===e?"refs/heads/master":`refs/tags/v${e}`}(e)):"latest"===e?s:s.replace(n,"v"+e);return(0,c.jsx)(l.A,{className:a,children:t})}})}},72303:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},85485:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/dnschaos-exp-1b652bbb9c9b57d42d5a5496789886bf.png"},18306:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"}}]);