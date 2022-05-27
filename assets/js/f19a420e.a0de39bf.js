"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1401],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66093:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Send HTTP Requests on Workflow"},s=void 0,p={unversionedId:"send-http-request-on-workflow",id:"version-2.2.0/send-http-request-on-workflow",isDocsHomePage:!1,title:"Send HTTP Requests on Workflow",description:"Chaos Mesh Workflow provides a Task node to support any workload, similar to Kubernetes Job. To make the user experience more convenient, Chaos Dashboard provides a template based on Task to create HTTP requests in WebUI.",source:"@site/versioned_docs/version-2.2.0/send-http-request-on-workflow.md",sourceDirName:".",slug:"/send-http-request-on-workflow",permalink:"/docs/send-http-request-on-workflow",editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.2.0/send-http-request-on-workflow.md",tags:[],version:"2.2.0",frontMatter:{title:"Send HTTP Requests on Workflow"},sidebar:"version-2.2.0/docs",previous:{title:"Serial and Parallel Experiments",permalink:"/docs/run-chaos-experiments-in-serial-or-parallel"},next:{title:"Check Workflow Status",permalink:"/docs/check-workflow-status"}},d=[{value:"Create an HTTP request through Chaos Dashboard",id:"create-an-http-request-through-chaos-dashboard",children:[{value:"Step 1. Create a workflow node with the type <code>HTTPRequest</code>",id:"step-1-create-a-workflow-node-with-the-type-httprequest",children:[],level:3},{value:"Step 2. Configure an HTTP request",id:"step-2-configure-an-http-request",children:[],level:3},{value:"Step 3. Submit the workflow node",id:"step-3-submit-the-workflow-node",children:[],level:3}],level:2},{value:"Field description",id:"field-description",children:[],level:2}],u={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Chaos Mesh Workflow provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," node to support any workload, similar to Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"Job"),". To make the user experience more convenient, Chaos Dashboard provides a template based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," to create HTTP requests in WebUI."),(0,o.kt)("p",null,"Chaos Mesh Workflow provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," node to support any workload, which function is similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Job")," in Kubernetes. To provide a better user experience, Chaos Dashboard provides a template based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),". With this template, you can easily create HTTP requests in WebUI. This document describes how to create an HTTP request through Chaos Dashboard."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Chaos Mesh does ",(0,o.kt)("em",{parentName:"p"},"NOT")," have the workflow node of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPRequest"),". This feature is based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," node, and you can send HTTP requests more conveniently by using the feature."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature is currently an experimental feature, so it is not recommended to use this feature in the production environment. The configuration and behavior of the feature might change in the future."))),(0,o.kt)("h2",{id:"create-an-http-request-through-chaos-dashboard"},"Create an HTTP request through Chaos Dashboard"),(0,o.kt)("p",null,"You can create an HTTP request in Chaos Dashboard as the following steps that take sending a message through Slack Webhook as an example."),(0,o.kt)("h3",{id:"step-1-create-a-workflow-node-with-the-type-httprequest"},"Step 1. Create a workflow node with the type ",(0,o.kt)("inlineCode",{parentName:"h3"},"HTTPRequest")),(0,o.kt)("p",null,'Select "HTTP Request" as the task type:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-http-request-workflow-node",src:n(16340).Z})),(0,o.kt)("h3",{id:"step-2-configure-an-http-request"},"Step 2. Configure an HTTP request"),(0,o.kt)("p",null,"Configure the followings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"node name: ",(0,o.kt)("inlineCode",{parentName:"li"},"send-slack-message")),(0,o.kt)("li",{parentName:"ul"},"request URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX")),(0,o.kt)("li",{parentName:"ul"},"request method: ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")),(0,o.kt)("li",{parentName:"ul"},"request body: ",(0,o.kt)("inlineCode",{parentName:"li"},'{"text": "Hello, world."}'),' , then check "For JSON content".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"configure-http-request-workflow-node",src:n(65645).Z})),(0,o.kt)("h3",{id:"step-3-submit-the-workflow-node"},"Step 3. Submit the workflow node"),(0,o.kt)("p",null,'Click the "Submit" button to see the task in the preview window:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"http-request-task-node-preview",src:n(72693).Z})),(0,o.kt)("h2",{id:"field-description"},"Field description"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the workflow node"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"send-slack-message"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"URL of an HTTP request"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Method"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Method of an HTTP request"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Body"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Body of an HTTP request"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'{"text": "Hello, world."}'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Follow 301/302 Location"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"The value of this parameter corresponds to the ",(0,o.kt)("inlineCode",{parentName:"td"},"-L")," parameter of ",(0,o.kt)("inlineCode",{parentName:"td"},"curl"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Json Content"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"The parameter appends ",(0,o.kt)("inlineCode",{parentName:"td"},"Content-Type: application/json")," to the header of an HTTP request."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("p",null,"The value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field of the generated task node adds the suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"http-request"),' to the end of "name".'))}m.isMDXComponent=!0},65645:function(e,t,n){t.Z=n.p+"assets/images/configure-http-request-workflow-node-e9bf432761a85ae7aa1d93d20451fab5.png"},16340:function(e,t,n){t.Z=n.p+"assets/images/create-http-request-workflow-node-6a50447e8f1da67f08a0ec25a2535f15.png"},72693:function(e,t,n){t.Z=n.p+"assets/images/http-request-task-node-preview-17bb1a024ea9ccc9b66d2bbc6614f4e6.png"}}]);