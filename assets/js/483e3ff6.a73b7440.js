"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8056],{99244:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>h,toc:()=>r});var c=t(11527),n=t(54881);const d={title:"Status Check in Workflow"},i=void 0,h={id:"status-check-in-workflow",title:"Status Check in Workflow",description:"In Workflow, the status check could execute specified operations on external systems, such as application systems and monitoring systems, to obtain their statuses, and automatically abort the Workflow when it finds the system is unhealthy. The concept is similar to Container Probes in Kubernetes. This article describes how to execute status checks in Workflow using YAML files.",source:"@site/versioned_docs/version-2.6.2/status-check-in-workflow.md",sourceDirName:".",slug:"/status-check-in-workflow",permalink:"/docs/status-check-in-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/chaos-mesh/website/edit/master/versioned_docs/version-2.6.2/status-check-in-workflow.md",tags:[],version:"2.6.2",frontMatter:{title:"Status Check in Workflow"},sidebar:"docs",previous:{title:"Check Workflow Status",permalink:"/docs/check-workflow-status"},next:{title:"Simulate Pod Faults",permalink:"/docs/simulate-pod-chaos-on-kubernetes"}},o={},r=[{value:"Status Check type",id:"status-check-type",level:2},{value:"Define a <code>HTTP</code> <code>StatusCheck</code> node",id:"define-a-http-statuscheck-node",level:3},{value:"Status Check results",id:"status-check-results",level:2},{value:"When the Status Check is unsuccessful, abort the Workflow",id:"when-the-status-check-is-unsuccessful-abort-the-workflow",level:3},{value:"Status Check mode",id:"status-check-mode",level:2},{value:"Continuous Status Check",id:"continuous-status-check",level:3},{value:"One time Status Check",id:"one-time-status-check",level:3},{value:"StatusCheck vs HTTP Request Task",id:"statuscheck-vs-http-request-task",level:2},{value:"Field description",id:"field-description",level:2},{value:"StatusCheck field description",id:"statuscheck-field-description",level:3},{value:"HTTPStatusCheck field description",id:"httpstatuscheck-field-description",level:3},{value:"HTTPCriteria field description",id:"httpcriteria-field-description",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:["In Workflow, the status check could execute specified operations on external systems, such as application systems and monitoring systems, to obtain their statuses, and automatically abort the Workflow when it finds the system is unhealthy. The concept is similar to ",(0,c.jsx)(s.code,{children:"Container Probes"})," in Kubernetes. This article describes how to execute status checks in Workflow using YAML files."]}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.p,{children:["Chaos Mesh does not yet support creating ",(0,c.jsx)(s.code,{children:"StatusCheck"})," nodes on Chaos Dashboard, so you could only create ",(0,c.jsx)(s.code,{children:"StatusCheck"})," nodes using YAML for now."]})}),"\n",(0,c.jsx)(s.h2,{id:"status-check-type",children:"Status Check type"}),"\n",(0,c.jsxs)(s.p,{children:["Chaos Mesh only support the ",(0,c.jsx)(s.code,{children:"HTTP"})," type to execute a status check."]}),"\n",(0,c.jsxs)(s.h3,{id:"define-a-http-statuscheck-node",children:["Define a ",(0,c.jsx)(s.code,{children:"HTTP"})," ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node"]}),"\n",(0,c.jsxs)(s.p,{children:["A ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node sends ",(0,c.jsx)(s.code,{children:"GET"})," or ",(0,c.jsx)(s.code,{children:"POST"})," HTTP requests to the specific URL, with custom headers and body, and then determines the result of the request by the conditions in the ",(0,c.jsx)(s.code,{children:"criteria"})," field."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-yaml",children:"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    intervalSeconds: 1\n    timeoutSeconds: 1\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n"})}),"\n",(0,c.jsxs)(s.p,{children:["In the configuration, you can see a ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node with ",(0,c.jsx)(s.code,{children:"HTTP"})," type. The ",(0,c.jsx)(s.code,{children:"deadline"})," field specifies that this node could be executed for a maximum of 20 seconds. The ",(0,c.jsx)(s.code,{children:"mode"})," field specifies that this node will execute status checks continuously. The ",(0,c.jsx)(s.code,{children:"intervalSeconds"})," field specifies a repetition interval of 1 second. The ",(0,c.jsx)(s.code,{children:"timeoutSeconds"})," field specifies the timeout for each execution."]}),"\n",(0,c.jsxs)(s.p,{children:["When Workflow runs to this ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node, the specified status check would be executed every second. The status check uses the ",(0,c.jsx)(s.code,{children:"GET"})," method to send an HTTP request to the URL ",(0,c.jsx)(s.code,{children:"http://123.123.123.123"}),". If the response is returned within 1 second and the status code is ",(0,c.jsx)(s.code,{children:"200"}),", this execution succeeds, otherwise it fails."]}),"\n",(0,c.jsx)(s.h2,{id:"status-check-results",children:"Status Check results"}),"\n",(0,c.jsxs)(s.p,{children:["Each execution of the status check will get an ",(0,c.jsx)(s.code,{children:"execution result"}),", either ",(0,c.jsx)(s.code,{children:"Success"})," or ",(0,c.jsx)(s.code,{children:"Failure"}),". Because a single ",(0,c.jsx)(s.code,{children:"execution result"})," may not reflect the real situation of the system, due to fluctuations in certain conditions, the final ",(0,c.jsx)(s.code,{children:"status check result"})," is not determined based on a single ",(0,c.jsx)(s.code,{children:"execution result"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node has ",(0,c.jsx)(s.code,{children:"failureThreshold"})," and ",(0,c.jsx)(s.code,{children:"successThreshold"})," two fields:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["When the number of consecutive failed ",(0,c.jsx)(s.code,{children:"execution results"})," exceeds the ",(0,c.jsx)(s.code,{children:"failureThreshold"}),", the ",(0,c.jsx)(s.code,{children:"status check result"})," is considered to be a ",(0,c.jsx)(s.code,{children:"Failure"}),"."]}),"\n",(0,c.jsxs)(s.li,{children:["When the number of consecutive successful ",(0,c.jsx)(s.code,{children:"execution results"})," exceeds the ",(0,c.jsx)(s.code,{children:"successThreshold"}),", the ",(0,c.jsx)(s.code,{children:"status check result"})," is considered to be a ",(0,c.jsx)(s.code,{children:"Success"}),"."]}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-yaml",children:"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n"})}),"\n",(0,c.jsxs)(s.p,{children:["In the configuration, the ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node will execute status checks continuously:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["When the ",(0,c.jsx)(s.code,{children:"execution result"})," is ",(0,c.jsx)(s.code,{children:"Success"})," for 1 or more consecutive times, the ",(0,c.jsx)(s.code,{children:"status check result"})," is considered to be a ",(0,c.jsx)(s.code,{children:"Success"}),"."]}),"\n",(0,c.jsxs)(s.li,{children:["When the ",(0,c.jsx)(s.code,{children:"execution result"})," is ",(0,c.jsx)(s.code,{children:"Failure"})," for 3 or more consecutive times, the ",(0,c.jsx)(s.code,{children:"status check result"})," is considered to be a ",(0,c.jsx)(s.code,{children:"Failure"}),"."]}),"\n"]}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.p,{children:["In the following sections, ",(0,c.jsx)(s.code,{children:"status check fails"})," refers to that ",(0,c.jsx)(s.code,{children:"status check result"})," is ",(0,c.jsx)(s.code,{children:"Failure"}),", rather than a single ",(0,c.jsx)(s.code,{children:"execution result"})," is ",(0,c.jsx)(s.code,{children:"Failure"}),"."]})}),"\n",(0,c.jsx)(s.h3,{id:"when-the-status-check-is-unsuccessful-abort-the-workflow",children:"When the Status Check is unsuccessful, abort the Workflow"}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node only supports aborting the workflow automatically when the status check is unsuccessful. It could not pause or resume the workflow."]})}),"\n",(0,c.jsxs)(s.p,{children:["When executing chaos experiments, the application system might become ",(0,c.jsx)(s.code,{children:"unhealthy"}),", this function can be used to restore the application system by quickly ending chaos experiments. To enable the workflow to abort automatically when the status check fails, you can set the ",(0,c.jsx)(s.code,{children:"abortWithStatusCheck"})," field to ",(0,c.jsx)(s.code,{children:"true"})," on the ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-yaml",children:"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  abortWithStatusCheck: true\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n"})}),"\n",(0,c.jsx)(s.p,{children:"The status check is considered unsuccessful when any of the following conditions are met:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"The status check fails."}),"\n",(0,c.jsxs)(s.li,{children:["When the ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node timeout is exceeded, and the ",(0,c.jsx)(s.code,{children:"status check result"})," is not successful. For example, ",(0,c.jsx)(s.code,{children:"successThreshold"})," is 1, ",(0,c.jsx)(s.code,{children:"failureThreshold"}),' is 3, and when the timeout is exceeded, there are 2 consecutive failures and 0 successes. Although it does not meet the condition for "status check fails", it is also considered to be unsuccessful in this case.']}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"status-check-mode",children:"Status Check mode"}),"\n",(0,c.jsx)(s.h3,{id:"continuous-status-check",children:"Continuous Status Check"}),"\n",(0,c.jsxs)(s.p,{children:["When the ",(0,c.jsx)(s.code,{children:"mode"})," field is ",(0,c.jsx)(s.code,{children:"Continuous"}),", it means this ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node will execute status checks continuously until the node times out or the status check fails."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-yaml",children:"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    intervalSeconds: 1\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n"})}),"\n",(0,c.jsxs)(s.p,{children:["In the configuration, the ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node will execute status checks every second, and exit when any of the following conditions are met:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["The status check fails, i.e. 3 or more consecutive failed ",(0,c.jsx)(s.code,{children:"execution results"})]}),"\n",(0,c.jsx)(s.li,{children:"Trigger the node timeout after 20 seconds"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"one-time-status-check",children:"One time Status Check"}),"\n",(0,c.jsxs)(s.p,{children:["When the ",(0,c.jsx)(s.code,{children:"mode"})," field is ",(0,c.jsx)(s.code,{children:"Synchronous"}),", it means that this ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node will exit immediately when the ",(0,c.jsx)(s.code,{children:"status check result"})," is clear, or when the node times out."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-yaml",children:"- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Synchronous\n    type: HTTP\n    intervalSeconds: 1\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n"})}),"\n",(0,c.jsxs)(s.p,{children:["In the configuration, the ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node will execute status checks every second, and exit when any of the following conditions are met:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["The status check succeeds, i.e. 1 or more consecutive successful ",(0,c.jsx)(s.code,{children:"execution results"})]}),"\n",(0,c.jsxs)(s.li,{children:["The status check fails, i.e. 3 or more consecutive failed ",(0,c.jsx)(s.code,{children:"execution results"})]}),"\n",(0,c.jsx)(s.li,{children:"Trigger the node timeout after 20 seconds"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"statuscheck-vs-http-request-task",children:"StatusCheck vs HTTP Request Task"}),"\n",(0,c.jsx)(s.p,{children:"Similarities:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["The ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node and the ",(0,c.jsx)(s.code,{children:"HTTP Request Task"})," node (the ",(0,c.jsx)(s.code,{children:"Task"})," node that executes HTTP requests) are a node type of Workflow."]}),"\n",(0,c.jsxs)(s.li,{children:["The ",(0,c.jsx)(s.code,{children:"StatusCheck"})," node and the ",(0,c.jsx)(s.code,{children:"HTTP Request Task"})," node can obtain information about external systems through HTTP requests."]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Differences:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["The ",(0,c.jsx)(s.code,{children:"HTTP Request Task"})," node could only send an HTTP once, and cannot send HTTP requests continuously."]}),"\n",(0,c.jsxs)(s.li,{children:["The ",(0,c.jsx)(s.code,{children:"HTTP Request Task"})," node cannot affect the status of the workflow when the request fails, such as aborting the workflow."]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"field-description",children:"Field description"}),"\n",(0,c.jsxs)(s.p,{children:["For more information about Workflow and Template, refer to ",(0,c.jsx)(s.a,{href:"/docs/create-chaos-mesh-workflow#field-description",children:"Create Chaos Mesh Workflow"}),"."]}),"\n",(0,c.jsx)(s.h3,{id:"statuscheck-field-description",children:"StatusCheck field description"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Parameter"}),(0,c.jsx)(s.th,{children:"Type"}),(0,c.jsx)(s.th,{children:"Description"}),(0,c.jsx)(s.th,{children:"Default value"}),(0,c.jsx)(s.th,{children:"Required"}),(0,c.jsx)(s.th,{children:"Example"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"mode"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"string"})}),(0,c.jsxs)(s.td,{children:["The execution mode of the status check. Support value: ",(0,c.jsx)(s.code,{children:"Synchronous"}),"/",(0,c.jsx)(s.code,{children:"Continuous"}),"."]}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"Yes"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"Synchronous"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"type"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"string"})}),(0,c.jsxs)(s.td,{children:["The type of the status check. Support value: ",(0,c.jsx)(s.code,{children:"HTTP"}),"."]}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"HTTP"})}),(0,c.jsx)(s.td,{children:"Yes"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"HTTP"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"duration"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"string"})}),(0,c.jsxs)(s.td,{children:["The duration of the whole status check if the number of failed execution does not exceed the ",(0,c.jsx)(s.code,{children:"failureThreshold"}),". It is available in both ",(0,c.jsx)(s.code,{children:"Synchronous"})," and ",(0,c.jsx)(s.code,{children:"Continuous"})," modes."]}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"100s"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"timeoutSeconds"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"int"})}),(0,c.jsx)(s.td,{children:"The timeout seconds when the status check fails."}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"1"})}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"1"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"intervalSeconds"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"int"})}),(0,c.jsx)(s.td,{children:"Defines how often (in seconds) to perform an execution of status check."}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"1"})}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"1"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"failureThreshold"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"int"})}),(0,c.jsx)(s.td,{children:"The minimum consecutive failure for the status check to be considered failed."}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"3"})}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"3"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"successThreshold"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"int"})}),(0,c.jsx)(s.td,{children:"The minimum consecutive successes for the status check to be considered successful."}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"1"})}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"1"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"recordsHistoryLimit"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"int"})}),(0,c.jsx)(s.td,{children:"The number of records to retain."}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"100"})}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"100"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"http"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"HTTPStatusCheck"})}),(0,c.jsx)(s.td,{children:"Configure the detail of the HTTP request to execute."}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{})]})]})]}),"\n",(0,c.jsx)(s.h3,{id:"httpstatuscheck-field-description",children:"HTTPStatusCheck field description"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Parameter"}),(0,c.jsx)(s.th,{children:"Type"}),(0,c.jsx)(s.th,{children:"Description"}),(0,c.jsx)(s.th,{children:"Default value"}),(0,c.jsx)(s.th,{children:"Required"}),(0,c.jsx)(s.th,{children:"Example"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"url"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"string"})}),(0,c.jsx)(s.td,{children:"The URL of the HTTP request."}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"Yes"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"http://123.123.123.123"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"method"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"string"})}),(0,c.jsxs)(s.td,{children:["The method of the HTTP request. Support value: ",(0,c.jsx)(s.code,{children:"GET"}),"/",(0,c.jsx)(s.code,{children:"POST"}),"."]}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"GET"})}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"GET"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"headers"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"map[string][]string"})}),(0,c.jsx)(s.td,{children:"The headers of the HTTP request."}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"body"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"string"})}),(0,c.jsx)(s.td,{children:"The body of the HTTP request."}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"No"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:'{"a":"b"}'})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"criteria"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"HTTPCriteria"})}),(0,c.jsx)(s.td,{children:"Defines how to determine the result of the HTTP StatusCheck."}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"Yes"}),(0,c.jsx)(s.td,{})]})]})]}),"\n",(0,c.jsx)(s.h3,{id:"httpcriteria-field-description",children:"HTTPCriteria field description"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Parameter"}),(0,c.jsx)(s.th,{children:"Type"}),(0,c.jsx)(s.th,{children:"Description"}),(0,c.jsx)(s.th,{children:"Default value"}),(0,c.jsx)(s.th,{children:"Required"}),(0,c.jsx)(s.th,{children:"Example"})]})}),(0,c.jsx)(s.tbody,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"statusCode"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"string"})}),(0,c.jsxs)(s.td,{children:["The expected http status code for the request. A statusCode string could be a single code (e.g. ",(0,c.jsx)(s.code,{children:"200"}),"), or an inclusive range (e.g. ",(0,c.jsx)(s.code,{children:"200-400"}),", both ",(0,c.jsx)(s.code,{children:"200"})," and ",(0,c.jsx)(s.code,{children:"400"})," are included)."]}),(0,c.jsx)(s.td,{children:"None"}),(0,c.jsx)(s.td,{children:"Yes"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"200"})})]})})]})]})}function a(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},54881:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>i});var c=t(50959);const n={},d=c.createContext(n);function i(e){const s=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(d.Provider,{value:s},e.children)}}}]);