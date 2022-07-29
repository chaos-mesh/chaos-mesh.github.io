"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[48382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=l,h=p["".concat(s,".").concat(k)]||p[k]||c[k]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const i={title:"Status Check in Workflow"},r=void 0,o={unversionedId:"status-check-in-workflow",id:"version-2.3.0/status-check-in-workflow",title:"Status Check in Workflow",description:"In Workflow, the status check could execute specified operations on external systems, such as application systems and monitoring systems, to obtain their statuses, and automatically abort the Workflow when it finds the system is unhealthy. The concept is similar to Container Probes in Kubernetes. This article describes how to execute status checks in Workflow using YAML files.",source:"@site/versioned_docs/version-2.3.0/status-check-in-workflow.md",sourceDirName:".",slug:"/status-check-in-workflow",permalink:"/docs/status-check-in-workflow",draft:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.3.0/status-check-in-workflow.md",tags:[],version:"2.3.0",frontMatter:{title:"Status Check in Workflow"},sidebar:"docs",previous:{title:"Check Workflow Status",permalink:"/docs/check-workflow-status"},next:{title:"Simulate Pod Faults",permalink:"/docs/simulate-pod-chaos-on-kubernetes"}},s={},u=[{value:"Status Check type",id:"status-check-type",level:2},{value:"Define a <code>HTTP</code> <code>StatusCheck</code> node",id:"define-a-http-statuscheck-node",level:3},{value:"Status Check results",id:"status-check-results",level:2},{value:"When the Status Check is unsuccessful, abort the Workflow",id:"when-the-status-check-is-unsuccessful-abort-the-workflow",level:3},{value:"Status Check mode",id:"status-check-mode",level:2},{value:"Continuous Status Check",id:"continuous-status-check",level:3},{value:"One time Status Check",id:"one-time-status-check",level:3},{value:"StatusCheck vs HTTP Request Task",id:"statuscheck-vs-http-request-task",level:2},{value:"Field description",id:"field-description",level:2},{value:"StatusCheck field description",id:"statuscheck-field-description",level:3},{value:"HTTPStatusCheck field description",id:"httpstatuscheck-field-description",level:3},{value:"HTTPCriteria field description",id:"httpcriteria-field-description",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In Workflow, the status check could execute specified operations on external systems, such as application systems and monitoring systems, to obtain their statuses, and automatically abort the Workflow when it finds the system is unhealthy. The concept is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"Container Probes")," in Kubernetes. This article describes how to execute status checks in Workflow using YAML files."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Chaos Mesh does not yet support creating ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," nodes on Chaos Dashboard, so you could only create ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," nodes using YAML for now.")),(0,l.kt)("h2",{id:"status-check-type"},"Status Check type"),(0,l.kt)("p",null,"Chaos Mesh only support the ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP")," type to execute a status check."),(0,l.kt)("h3",{id:"define-a-http-statuscheck-node"},"Define a ",(0,l.kt)("inlineCode",{parentName:"h3"},"HTTP")," ",(0,l.kt)("inlineCode",{parentName:"h3"},"StatusCheck")," node"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node sends ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," HTTP requests to the specific URL, with custom headers and body, and then determines the result of the request by the conditions in the ",(0,l.kt)("inlineCode",{parentName:"p"},"criteria")," field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    intervalSeconds: 1\n    timeoutSeconds: 1\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n")),(0,l.kt)("p",null,"In the configuration, you can see a ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node with ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP")," type. The ",(0,l.kt)("inlineCode",{parentName:"p"},"deadline")," field specifies that this node could be executed for a maximum of 20 seconds. The ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," field specifies that this node will execute status checks continuously. The ",(0,l.kt)("inlineCode",{parentName:"p"},"intervalSeconds")," field specifies a repetition interval of 1 second. The ",(0,l.kt)("inlineCode",{parentName:"p"},"timeoutSeconds")," field specifies the timeout for each execution."),(0,l.kt)("p",null,"When Workflow runs to this ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node, the specified status check would be executed every second. The status check uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," method to send an HTTP request to the URL ",(0,l.kt)("inlineCode",{parentName:"p"},"http://123.123.123.123"),". If the response is returned within 1 second and the status code is ",(0,l.kt)("inlineCode",{parentName:"p"},"200"),", this execution succeeds, otherwise it fails."),(0,l.kt)("h2",{id:"status-check-results"},"Status Check results"),(0,l.kt)("p",null,"Each execution of the status check will get an ",(0,l.kt)("inlineCode",{parentName:"p"},"execution result"),", either ",(0,l.kt)("inlineCode",{parentName:"p"},"Success")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Failure"),". Because a single ",(0,l.kt)("inlineCode",{parentName:"p"},"execution result")," may not reflect the real situation of the system, due to fluctuations in certain conditions, the final ",(0,l.kt)("inlineCode",{parentName:"p"},"status check result")," is not determined based on a single ",(0,l.kt)("inlineCode",{parentName:"p"},"execution result"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node has ",(0,l.kt)("inlineCode",{parentName:"p"},"failureThreshold")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"successThreshold")," two fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the number of consecutive failed ",(0,l.kt)("inlineCode",{parentName:"li"},"execution results")," exceeds the ",(0,l.kt)("inlineCode",{parentName:"li"},"failureThreshold"),", the ",(0,l.kt)("inlineCode",{parentName:"li"},"status check result")," is considered to be a ",(0,l.kt)("inlineCode",{parentName:"li"},"Failure"),"."),(0,l.kt)("li",{parentName:"ul"},"When the number of consecutive successful ",(0,l.kt)("inlineCode",{parentName:"li"},"execution results")," exceeds the ",(0,l.kt)("inlineCode",{parentName:"li"},"successThreshold"),", the ",(0,l.kt)("inlineCode",{parentName:"li"},"status check result")," is considered to be a ",(0,l.kt)("inlineCode",{parentName:"li"},"Success"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n")),(0,l.kt)("p",null,"In the configuration, the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node will execute status checks continuously:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the ",(0,l.kt)("inlineCode",{parentName:"li"},"execution result")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"Success")," for 1 or more consecutive times, the ",(0,l.kt)("inlineCode",{parentName:"li"},"status check result")," is considered to be a ",(0,l.kt)("inlineCode",{parentName:"li"},"Success"),"."),(0,l.kt)("li",{parentName:"ul"},"When the ",(0,l.kt)("inlineCode",{parentName:"li"},"execution result")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"Failure")," for 3 or more consecutive times, the ",(0,l.kt)("inlineCode",{parentName:"li"},"status check result")," is considered to be a ",(0,l.kt)("inlineCode",{parentName:"li"},"Failure"),".")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"In the following sections, ",(0,l.kt)("inlineCode",{parentName:"p"},"status check fails")," refers to that ",(0,l.kt)("inlineCode",{parentName:"p"},"status check result")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"Failure"),", rather than a single ",(0,l.kt)("inlineCode",{parentName:"p"},"execution result")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"Failure"),".")),(0,l.kt)("h3",{id:"when-the-status-check-is-unsuccessful-abort-the-workflow"},"When the Status Check is unsuccessful, abort the Workflow"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node only supports aborting the workflow automatically when the status check is unsuccessful. It could not pause or resume the workflow.")),(0,l.kt)("p",null,"When executing chaos experiments, the application system might become ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy"),", this function can be used to restore the application system by quickly ending chaos experiments. To enable the workflow to abort automatically when the status check fails, you can set the ",(0,l.kt)("inlineCode",{parentName:"p"},"abortWithStatusCheck")," field to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," on the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  abortWithStatusCheck: true\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n")),(0,l.kt)("p",null,"The status check is considered unsuccessful when any of the following conditions are met:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The status check fails."),(0,l.kt)("li",{parentName:"ul"},"When the ",(0,l.kt)("inlineCode",{parentName:"li"},"StatusCheck")," node timeout is exceeded, and the ",(0,l.kt)("inlineCode",{parentName:"li"},"status check result")," is not successful. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"successThreshold")," is 1, ",(0,l.kt)("inlineCode",{parentName:"li"},"failureThreshold"),' is 3, and when the timeout is exceeded, there are 2 consecutive failures and 0 successes. Although it does not meet the condition for "status check fails", it is also considered to be unsuccessful in this case.')),(0,l.kt)("h2",{id:"status-check-mode"},"Status Check mode"),(0,l.kt)("h3",{id:"continuous-status-check"},"Continuous Status Check"),(0,l.kt)("p",null,"When the ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," field is ",(0,l.kt)("inlineCode",{parentName:"p"},"Continuous"),", it means this ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node will execute status checks continuously until the node times out or the status check fails."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    intervalSeconds: 1\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n")),(0,l.kt)("p",null,"In the configuration, the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node will execute status checks every second, and exit when any of the following conditions are met:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The status check fails, i.e. 3 or more consecutive failed ",(0,l.kt)("inlineCode",{parentName:"li"},"execution results")),(0,l.kt)("li",{parentName:"ul"},"Trigger the node timeout after 20 seconds")),(0,l.kt)("h3",{id:"one-time-status-check"},"One time Status Check"),(0,l.kt)("p",null,"When the ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," field is ",(0,l.kt)("inlineCode",{parentName:"p"},"Synchronous"),", it means that this ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node will exit immediately when the ",(0,l.kt)("inlineCode",{parentName:"p"},"status check result")," is clear, or when the node times out."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Synchronous\n    type: HTTP\n    intervalSeconds: 1\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n")),(0,l.kt)("p",null,"In the configuration, the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusCheck")," node will execute status checks every second, and exit when any of the following conditions are met:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The status check succeeds, i.e. 1 or more consecutive successful ",(0,l.kt)("inlineCode",{parentName:"li"},"execution results")),(0,l.kt)("li",{parentName:"ul"},"The status check fails, i.e. 3 or more consecutive failed ",(0,l.kt)("inlineCode",{parentName:"li"},"execution results")),(0,l.kt)("li",{parentName:"ul"},"Trigger the node timeout after 20 seconds")),(0,l.kt)("h2",{id:"statuscheck-vs-http-request-task"},"StatusCheck vs HTTP Request Task"),(0,l.kt)("p",null,"Similarities:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"StatusCheck")," node and the ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTP Request Task")," node (the ",(0,l.kt)("inlineCode",{parentName:"li"},"Task")," node that executes HTTP requests) are a node type of Workflow."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"StatusCheck")," node and the ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTP Request Task")," node can obtain information about external systems through HTTP requests.")),(0,l.kt)("p",null,"Differences:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTP Request Task")," node could only send an HTTP once, and cannot send HTTP requests continuously."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTP Request Task")," node cannot affect the status of the workflow when the request fails, such as aborting the workflow.")),(0,l.kt)("h2",{id:"field-description"},"Field description"),(0,l.kt)("p",null,"For more information about Workflow and Template, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/create-chaos-mesh-workflow#field-description"},"Create Chaos Mesh Workflow"),"."),(0,l.kt)("h3",{id:"statuscheck-field-description"},"StatusCheck field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The execution mode of the status check. Support value: ",(0,l.kt)("inlineCode",{parentName:"td"},"Synchronous"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"Continuous"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Synchronous"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the status check. Support value: ",(0,l.kt)("inlineCode",{parentName:"td"},"HTTP"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTTP")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTTP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration of the whole status check if the number of failed execution does not exceed the ",(0,l.kt)("inlineCode",{parentName:"td"},"failureThreshold"),". It is available in both ",(0,l.kt)("inlineCode",{parentName:"td"},"Synchronous")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"Continuous")," modes."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100s"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeoutSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The timeout seconds when the status check fails."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"intervalSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines how often (in seconds) to perform an execution of status check."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failureThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum consecutive failure for the status check to be considered failed."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"successThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum consecutive successes for the status check to be considered successful."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recordsHistoryLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records to retain."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTPStatusCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure the detail of the HTTP request to execute."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"httpstatuscheck-field-description"},"HTTPStatusCheck field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the HTTP request."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://123.123.123.123"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The method of the HTTP request. Support value: ",(0,l.kt)("inlineCode",{parentName:"td"},"GET"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"POST"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string][]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"The headers of the HTTP request."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The body of the HTTP request."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"a":"b"}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"criteria"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTPCriteria"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines how to determine the result of the HTTP StatusCheck."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"httpcriteria-field-description"},"HTTPCriteria field description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The expected http status code for the request. A statusCode string could be a single code (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"200"),"), or an inclusive range (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"200-400"),", both ",(0,l.kt)("inlineCode",{parentName:"td"},"200")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"400")," are included)."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200"))))))}c.isMDXComponent=!0}}]);