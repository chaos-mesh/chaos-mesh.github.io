"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[54420],{89400:(e,t,s)=>{s.d(t,{Z:()=>h});var a=s(91262),n=s(90814),o=s(67294),r=s(81249),i=s.n(r),l=s(52263),c=s(56871),p=s(28084);const h=e=>{let{children:t,className:s="language-bash"}=e;const{siteConfig:r}=(0,l.Z)(),{versions:h}=(0,p.eZ)("docusaurus-plugin-content-docs");return o.createElement(a.Z,null,(()=>{const e=(0,c.p)(r,h),a="latest"===e?"":"--version "+(e=>{if(i().satisfies(e,">=2.0.3"))return e;const t=e.slice(0,3);return"v"+(parseFloat(t)-.7).toFixed(1)+e.slice(3)})(e);return o.createElement(n.Z,{className:s},t.replace("--version latest",a).trim())}))}},56871:(e,t,s)=>{s.d(t,{Z:()=>c,p:()=>l});var a=s(91262),n=s(90814),o=s(67294),r=s(52263),i=s(28084);const l=(e,t)=>{const s=window.location.pathname;let a=window.localStorage.getItem("docs-preferred-version-default");if(s===e.baseUrl&&a)return"current"===a?"latest":a;if(s.includes("/docs/next"))return"latest";const n=t.filter((e=>e.isLast))[0].name;return t.filter((e=>s.includes(e.name))).map((e=>e.name))[0]||n};const c=e=>{let{children:t,replaced:s="latest",isArchive:c=!1,className:p="language-bash"}=e;const{siteConfig:h}=(0,r.Z)(),{versions:m}=(0,i.eZ)("docusaurus-plugin-content-docs");return o.createElement(a.Z,null,(()=>{const e=l(h,m),a=c?t.replace(s,function(e){return"latest"===e?"refs/heads/master":"refs/tags/v"+e}(e)):"latest"===e?t:t.replace(s,"v"+e);return o.createElement(n.Z,{className:p},a)}))}},77817:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=s(87462),n=(s(67294),s(3905)),o=s(89400);const r={title:"DNSChaos Experiment"},i=void 0,l={unversionedId:"chaos_experiments/dnschaos",id:"version-1.2.4/chaos_experiments/dnschaos",title:"DNSChaos Experiment",description:"This document describes how to create DNSChaos experiments in Chaos Mesh.",source:"@site/versioned_docs/version-1.2.4/chaos_experiments/dnschaos.md",sourceDirName:"chaos_experiments",slug:"/chaos_experiments/dnschaos",permalink:"/docs/1.2.4/chaos_experiments/dnschaos",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-1.2.4/chaos_experiments/dnschaos.md",tags:[],version:"1.2.4",frontMatter:{title:"DNSChaos Experiment"},sidebar:"version-1.2.4/docs",previous:{title:"KernelChaos Experiment",permalink:"/docs/1.2.4/chaos_experiments/kernelchaos"},next:{title:"AwsChaos Experiment",permalink:"/docs/1.2.4/chaos_experiments/awschaos"}},c={},p=[{value:"Deploy DNS service for chaos",id:"deploy-dns-service-for-chaos",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Fields description",id:"fields-description",level:2},{value:"Notes",id:"notes",level:2}],h={toc:p};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document describes how to create DNSChaos experiments in Chaos Mesh."),(0,n.kt)("p",null,"DNSChaos allows you to simulate fault DNS responses such as a DNS error or a random IP address after a request is sent."),(0,n.kt)("h2",{id:"deploy-dns-service-for-chaos"},"Deploy DNS service for chaos"),(0,n.kt)("p",null,"To create DNSChaos experiments in Chaos Mesh, you need to deploy a DNS service in Chaos Mesh by executing the command below:"),(0,n.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set dnsServer.create=true"),(0,n.kt)("p",null,"When the deployment finishes, check the status of this DNS service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server\n")),(0,n.kt)("p",null,"Make sure the Pod's ",(0,n.kt)("inlineCode",{parentName:"p"},"STATUS")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,n.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,n.kt)("p",null,"Below is a sample DNSChaos configuration file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: busybox-dns-chaos\nspec:\n  action: random\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  mode: all\n  selector:\n    namespaces:\n      - busybox\n  duration: '90s'\n  scheduler:\n    cron: '@every 100s'\n")),(0,n.kt)("p",null,"For more sample files, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/tree/master/examples"},"examples"),". You can edit them as needed."),(0,n.kt)("h2",{id:"fields-description"},"Fields description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"action"),": Defines the chaos action for DNSChaos. Supported actions are:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error")," - Get an error when sending the DNS request"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"random")," - Get a random IP when sending the DNS request"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"patterns"),": Choose which domain names to take effect, support the placeholder ? and wildcard ","*",", or the specified domain name."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The wildcard ",(0,n.kt)("inlineCode",{parentName:"li"},"_")," must be at the end of the string. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"chaos-_.org")," is invalid."),(0,n.kt)("li",{parentName:"ul"},"If the patterns is empty, will take effect on all the domain names."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"selector"),": Specifies the target pods for chaos injection. For more details, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.2.4/user_guides/experiment_scope"},"Define the Scope of Chaos Experiment"),"."))),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Currently, DNSChaos only supports record types ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AAAA"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The chaos DNS service runs CoreDNS with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,n.kt)("inlineCode",{parentName:"p"},"dns-server-config")," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service as shown below:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-testing\n")))))}m.isMDXComponent=!0}}]);