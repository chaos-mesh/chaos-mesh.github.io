"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2783],{89400:function(e,t,n){var a=n(91262),r=n(73148),i=n(67294),o=n(56871);t.Z=function(e){var t=e.children,n=e.className,s=function(e){var t=e.children;return i.createElement("div",{style:{marginBottom:"1.25rem"}},i.createElement(r.Z,{className:n},t))};return i.createElement(a.Z,{fallback:i.createElement(s,null,t)},(function(){var e=(0,o.p)(),n="latest"===e?"":"--version v"+function(e){if("2"===e[0])return e;var t=e.slice(0,3);return(parseFloat(t)-.7).toString()+e.slice(3)}(e);return i.createElement(s,null,t.replace("--version latest",n).trim())}))}},56871:function(e,t,n){n.d(t,{p:function(){return l}});var a=n(91262),r=n(73148),i=n(67294),o=n(52263),s=n(28084),l=function(){var e=(0,o.Z)().siteConfig,t=window.location.pathname,n=window.localStorage.getItem("docs-preferred-version-default");if(t===e.baseUrl&&n)return"current"===n?"latest":n;if(t.includes("/docs/next"))return"latest";var a=(0,s.usePluginData)("docusaurus-plugin-content-docs").versions,r=a.filter((function(e){return e.isLast}))[0].name;return a.filter((function(e){return t.includes(e.name)})).map((function(e){return e.name}))[0]||r};t.Z=function(e){var t=e.children,n=e.className,o=function(e){var t=e.children;return i.createElement("div",{style:{marginBottom:"1.25rem"}},i.createElement(r.Z,{className:n},t))};return i.createElement(a.Z,{fallback:i.createElement(o,null,t)},(function(){var e=l(),n="latest"===e?t:t.replace("latest","v"+e);return i.createElement(o,null,n)}))}},73148:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(87462),r=n(67294),i=n(86010),o=n(24544),s=n(10195),l=n(87594),c=n.n(l),d=n(83583),m=n(24973),p="codeBlockContainer_2gih",u="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",k="codeBlock_6upA",g="codeBlockWithTitle_xy-i",f="copyButton_2e3i",N="codeBlockLines_xlV7",b=n(941),v=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function x(e){var t=e.children,n=e.className,l=e.metastring,x=e.title,y=(0,b.LU)().prism,S=(0,r.useState)(!1),D=S[0],w=S[1],E=(0,r.useState)(!1),Z=E[0],T=E[1];(0,r.useEffect)((function(){T(!0)}),[]);var P=(0,b.bc)(l)||x,j=(0,r.useRef)(null),B=[],A=(0,d.Z)(),F=Array.isArray(t)?t.join(""):t;if(l&&v.test(l)){var _=l.match(v)[1];B=c()(_).filter((function(e){return e>0}))}var M=n&&n.replace(/language-/,"");!M&&y.defaultLanguage&&(M=y.defaultLanguage);var I=F.replace(/\n$/,"");if(0===B.length&&void 0!==M){for(var L,R="",W=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(M),z=F.replace(/\n$/,"").split("\n"),U=0;U<z.length;){var Y=U+1,q=z[U].match(W);if(null!==q){switch(q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=Y+",";break;case"highlight-start":L=Y;break;case"highlight-end":R+=L+"-"+(Y-1)+","}z.splice(U,1)}else U+=1}B=c()(R),I=z.join("\n")}var H=function(){(0,s.Z)(I),w(!0),setTimeout((function(){return w(!1)}),2e3)};return r.createElement(o.ZP,(0,a.Z)({},o.lG,{key:String(Z),theme:A,code:I,language:M}),(function(e){var t,n=e.className,o=e.style,s=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.createElement("div",{className:p},P&&r.createElement("div",{style:o,className:h},P),r.createElement("div",{className:(0,i.Z)(u,M)},r.createElement("div",{tabIndex:0,className:(0,i.Z)(n,k,"thin-scrollbar",(t={},t[g]=P,t))},r.createElement("div",{className:N,style:o},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return B.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,a.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))})))})))),r.createElement("button",{ref:j,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(f),onClick:H},D?r.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},67634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(89400),s=["components"],l={title:"Simulate DNS Faults",sidebar_label:"Simulate DNS Faults"},c=void 0,d={unversionedId:"simulate-dns-chaos-on-kubernetes",id:"simulate-dns-chaos-on-kubernetes",isDocsHomePage:!1,title:"Simulate DNS Faults",description:"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults.",source:"@site/docs/simulate-dns-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-dns-chaos-on-kubernetes",permalink:"/docs/next/simulate-dns-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/simulate-dns-chaos-on-kubernetes.md",tags:[],version:"current",frontMatter:{title:"Simulate DNS Faults",sidebar_label:"Simulate DNS Faults"},sidebar:"docs",previous:{title:"Simulate File I/O Faults",permalink:"/docs/next/simulate-io-chaos-on-kubernetes"},next:{title:"Simulate Time Faults",permalink:"/docs/next/simulate-time-chaos-on-kubernetes"}},m=[{value:"DNSChaos Introduction",id:"dnschaos-introduction",children:[]},{value:"Deploy Chaos DNS Service",id:"deploy-chaos-dns-service",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Create experiments using Chaos Dashboard",id:"create-experiments-using-chaos-dashboard",children:[]},{value:"Create experiments using the YAML file",id:"create-experiments-using-the-yaml-file",children:[{value:"Configuration Description",id:"configuration-description",children:[]}]}],p={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to create DNSChaos experiments in Chaos Mesh to simulate DNS faults."),(0,i.kt)("h2",{id:"dnschaos-introduction"},"DNSChaos Introduction"),(0,i.kt)("p",null,"DNSChaos is used to simulate wrong DNS responses. For example, DNSChaos can return an error or return a random IP address when receiving a DNS request."),(0,i.kt)("h2",{id:"deploy-chaos-dns-service"},"Deploy Chaos DNS Service"),(0,i.kt)("p",null,"Before creating a DNSChaos experiment using Chaos Mesh, you need to deploy a special DNS service to inject faults:"),(0,i.kt)(o.Z,{className:"language-bash",mdxType:"PickHelmVersion"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --version latest --set dnsServer.create=true"),(0,i.kt)("p",null,"After executing the above commands, check if the DNS service status is normal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server\n")),(0,i.kt)("p",null,"Make sure that the Pod status is ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Currently, DNSChaos only supports record types ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AAAA"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The chaos DNS service runs CoreDNS with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/k8s_dns_chaos"},"k8s_dns_chaos")," plugin. If the CoreDNS service in your Kubernetes cluster contains some special configurations, you can edit configMap ",(0,i.kt)("inlineCode",{parentName:"p"},"dns-server-config")," to make the configuration of the chaos DNS service consistent with that of the K8s CoreDNS service using the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap dns-server-config -n chaos-testing\n")))),(0,i.kt)("h2",{id:"create-experiments-using-chaos-dashboard"},"Create experiments using Chaos Dashboard"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Chaos Dashboard, and click ",(0,i.kt)("strong",{parentName:"p"},"NEW EXPERIMENT")," on the page to create a new experiment:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Create Experiment",src:n(31822).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Choose a Target")," area, choose ",(0,i.kt)("strong",{parentName:"p"},"DNS FAULT")," and select a specific behavior, such as ",(0,i.kt)("strong",{parentName:"p"},"ERROR"),". Then fill out the matching rules."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"DNSChaos Experiment",src:n(26124).Z})),(0,i.kt)("p",{parentName:"li"},"According to the matching rules configured in the screenshot, the DNS FAULT takes effect for domains including ",(0,i.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an error will be returned when a DNS request is sent to these three domains. For details of specific matching rules, refer to the description of the ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," field in ",(0,i.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Experiment Information",src:n(78878).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the experiment information."))),(0,i.kt)("h2",{id:"create-experiments-using-the-yaml-file"},"Create experiments using the YAML file"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the experiment configuration to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dnschaos.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-testing\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n")),(0,i.kt)("p",{parentName:"li"},"This configuration can take effect for domains including ",(0,i.kt)("inlineCode",{parentName:"p"},"google.com"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mesh.org"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com"),", which means that an IP address will be returned when a DNS request is sent to these three domains. For specific matching rules, refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," description in ",(0,i.kt)("a",{parentName:"p",href:"#configuration-description"},"Configuration Description"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the configuration file is prepared, use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create an experiment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f dnschaos.yaml\n")))),(0,i.kt)("h3",{id:"configuration-description"},"Configuration Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"action"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the behavior of DNS fault. The value can be ",(0,i.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"error"),". When the value is ",(0,i.kt)("inlineCode",{parentName:"td"},"random"),", DNS service will return a random IP address; when the value is ",(0,i.kt)("inlineCode",{parentName:"td"},"error"),", DNS service will return an error."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"error"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"patterns"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Selects a domain template that matches faults. Placeholder ",(0,i.kt)("inlineCode",{parentName:"td"},"?")," and wildcard are supported. ",(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"google.com"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"chaos-mesh.org"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"github.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the mode of the experiment. The mode options include ",(0,i.kt)("inlineCode",{parentName:"td"},"one")," (selecting a random Pod), ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," (selecting all eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed")," (selecting a specified number of eligible Pods), ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent")," (selecting a specified percentage of Pods from the eligible Pods), and ",(0,i.kt)("inlineCode",{parentName:"td"},"random-max-percent")," (selecting the maximum percentage of Pods from the eligible Pods)."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Provides parameters for the ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," configuration, depending on ",(0,i.kt)("inlineCode",{parentName:"td"},"mode"),". For example, when ",(0,i.kt)("inlineCode",{parentName:"td"},"mode")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed-percent"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," specifies the percentage of Pods."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selector"),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the target Pod. For details, refer to ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/define-chaos-experiment-scope"},"Define the Scope of Chaos Experiments"),"."),(0,i.kt)("td",{parentName:"tr",align:"left"},"None"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The wildcard in ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," configuration must be at the end of string. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"chaos-mes*.org.")," is an invalid configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," is not configured, faults will be injected for all domains."))))))}u.isMDXComponent=!0},31822:function(e,t,n){t.Z=n.p+"assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png"},26124:function(e,t,n){t.Z=n.p+"assets/images/dnschaos-exp-1b652bbb9c9b57d42d5a5496789886bf.png"},78878:function(e,t,n){t.Z=n.p+"assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png"}}]);