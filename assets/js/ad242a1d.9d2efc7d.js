"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[527],{17942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,h=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},78633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(51163),r=(n(50959),n(17942));const o={title:"Send HTTP Requests on Workflow"},l=void 0,i={unversionedId:"send-http-request-on-workflow",id:"send-http-request-on-workflow",title:"Send HTTP Requests on Workflow",description:"Chaos Mesh Workflow provides a Task node to support any workload, similar to Kubernetes Job. To make the user experience more convenient, Chaos Dashboard provides a template based on Task to create HTTP requests in WebUI.",source:"@site/docs/send-http-request-on-workflow.md",sourceDirName:".",slug:"/send-http-request-on-workflow",permalink:"/docs/next/send-http-request-on-workflow",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/docs/send-http-request-on-workflow.md",tags:[],version:"current",frontMatter:{title:"Send HTTP Requests on Workflow"},sidebar:"docs",previous:{title:"Serial and Parallel Experiments",permalink:"/docs/next/run-serial-or-parallel-experiments"},next:{title:"Check Workflow Status",permalink:"/docs/next/check-workflow-status"}},s={},p=[{value:"Create an HTTP request through Chaos Dashboard",id:"create-an-http-request-through-chaos-dashboard",level:2},{value:"Step 1. Create a workflow node with the type <code>HTTPRequest</code>",id:"step-1-create-a-workflow-node-with-the-type-httprequest",level:3},{value:"Step 2. Configure an HTTP request",id:"step-2-configure-an-http-request",level:3},{value:"Step 3. Submit the workflow node",id:"step-3-submit-the-workflow-node",level:3},{value:"Field description",id:"field-description",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chaos Mesh Workflow provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," node to support any workload, similar to Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Job"),". To make the user experience more convenient, Chaos Dashboard provides a template based on ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," to create HTTP requests in WebUI."),(0,r.kt)("p",null,"Chaos Mesh Workflow provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," node to support any workload, which function is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," in Kubernetes. To provide a better user experience, Chaos Dashboard provides a template based on ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),". With this template, you can easily create HTTP requests in WebUI. This document describes how to create an HTTP request through Chaos Dashboard."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Chaos Mesh does ",(0,r.kt)("em",{parentName:"p"},"NOT")," have the workflow node of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPRequest"),". This feature is based on ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," node, and you can send HTTP requests more conveniently by using the feature.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is currently an experimental feature, so it is not recommended to use this feature in the production environment. The configuration and behavior of the feature might change in the future.")),(0,r.kt)("h2",{id:"create-an-http-request-through-chaos-dashboard"},"Create an HTTP request through Chaos Dashboard"),(0,r.kt)("p",null,"You can create an HTTP request in Chaos Dashboard as the following steps that take sending a message through Slack Webhook as an example."),(0,r.kt)("h3",{id:"step-1-create-a-workflow-node-with-the-type-httprequest"},"Step 1. Create a workflow node with the type ",(0,r.kt)("inlineCode",{parentName:"h3"},"HTTPRequest")),(0,r.kt)("p",null,'Select "HTTP Request" as the task type:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-http-request-workflow-node",src:n(67775).Z,width:"736",height:"896"})),(0,r.kt)("h3",{id:"step-2-configure-an-http-request"},"Step 2. Configure an HTTP request"),(0,r.kt)("p",null,"Configure the followings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"node name: ",(0,r.kt)("inlineCode",{parentName:"li"},"send-slack-message")),(0,r.kt)("li",{parentName:"ul"},"request URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX")),(0,r.kt)("li",{parentName:"ul"},"request method: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")),(0,r.kt)("li",{parentName:"ul"},"request body: ",(0,r.kt)("inlineCode",{parentName:"li"},'{"text": "Hello, world."}'),' , then check "For JSON content".')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"configure-http-request-workflow-node",src:n(99236).Z,width:"2016",height:"1188"})),(0,r.kt)("h3",{id:"step-3-submit-the-workflow-node"},"Step 3. Submit the workflow node"),(0,r.kt)("p",null,'Click the "Submit" button to see the task in the preview window:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"http-request-task-node-preview",src:n(95776).Z,width:"1078",height:"1086"})),(0,r.kt)("h2",{id:"field-description"},"Field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the workflow node"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"send-slack-message"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of an HTTP request"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Method of an HTTP request"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Body of an HTTP request"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"text": "Hello, world."}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Follow 301/302 Location"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of this parameter corresponds to the ",(0,r.kt)("inlineCode",{parentName:"td"},"-L")," parameter of ",(0,r.kt)("inlineCode",{parentName:"td"},"curl"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Json Content"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter appends ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type: application/json")," to the header of an HTTP request."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"The value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field of the generated task node adds the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"http-request"),' to the end of "name".'))}m.isMDXComponent=!0},99236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configure-http-request-workflow-node-e9bf432761a85ae7aa1d93d20451fab5.png"},67775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-http-request-workflow-node-6a50447e8f1da67f08a0ec25a2535f15.png"},95776:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/http-request-task-node-preview-17bb1a024ea9ccc9b66d2bbc6614f4e6.png"}}]);