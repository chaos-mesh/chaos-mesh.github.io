"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4092],{75550:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>h,toc:()=>c});var t=o(13274),a=o(9534);const n={slug:"/chaos-mesh-2.0-to-a-chaos-engineering-ecology",title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",author:"Chaos Mesh Maintainers",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-2.0-ga.png",tags:["Chaos Mesh","Chaos Engineering","Announcement"]},i=void 0,h={permalink:"/zh/blog/chaos-mesh-2.0-to-a-chaos-engineering-ecology",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-08-13-chaos-mesh-2.0-to-a-chaos-engineering-ecology.md",source:"@site/blog/2021-08-13-chaos-mesh-2.0-to-a-chaos-engineering-ecology.md",title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",description:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",date:"2021-08-13T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Announcement",permalink:"/zh/blog/tags/announcement"}],readingTime:4.4,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Maintainers",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-2.0-to-a-chaos-engineering-ecology",title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",author:"Chaos Mesh Maintainers",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-2.0-ga.png",tags:["Chaos Mesh","Chaos Engineering","Announcement"]},unlisted:!1,prevItem:{title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/zh/blog/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability"},nextItem:{title:"Chaos Mesh Celebrates 100th Contributor",permalink:"/zh/blog/chaos-mesh-celebrates-100th-contributor"}},r={authorsImageUrls:[void 0]},c=[{value:"Ease of use",id:"ease-of-use",level:2},{value:"Native experiment orchestration &amp; scheduling",id:"native-experiment-orchestration--scheduling",level:2},{value:"Richer fault injection types",id:"richer-fault-injection-types",level:2},{value:"JVMChaos",id:"jvmchaos",level:3},{value:"HTTPChaos",id:"httpchaos",level:3},{value:"Chaosd: an fault injection tool for physical nodes",id:"chaosd-an-fault-injection-tool-for-physical-nodes",level:2},{value:"Looking ahead",id:"looking-ahead",level:2},{value:"Try it out!",id:"try-it-out",level:2},{value:"A big thank you",id:"a-big-thank-you",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",src:o(79034).A+"",width:"1501",height:"501"})}),"\n",(0,t.jsx)(s.p,{children:"On July 23, 2021, Chaos Mesh 2.0 was made generally available! It\u2019s an exciting release, marking a solid milestone towards the chaos engineering ecology that we hope to build."}),"\n",(0,t.jsx)(s.p,{children:"Making chaos engineering easier has always been Chaos Mesh\u2019s unswerving goal, and this release is a key step. After almost a year of continuous efforts, we have made major improvements in three main areas: ease of use, native experiment orchestration & scheduling, along with the richness of fault injection types."}),"\n",(0,t.jsx)(s.h2,{id:"ease-of-use",children:"Ease of use"}),"\n",(0,t.jsx)(s.p,{children:"We are committed to improving the usability of Chaos Mesh, and a key path to this is Chaos Dashboard, a web interface for users to orchestrate chaos experiments. For Chaos Mesh 2.0, we have improved the Chaos Dashboard in the following ways, further simplifying the complexity of chaos experiments:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"It now supports the creation, viewing, and updating of AWSChaos and GCPChaos, so that conducting chaos experiments in a cloud environment can provide a consistent experience as in Kubernetes;"}),"\n",(0,t.jsx)(s.li,{children:"It can display more detailed records of each experiment, further enhancing its visibility."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh 2.0 - Experiment scheduling",src:o(20694).A+"",width:"1999",height:"1142"})}),"\n",(0,t.jsx)(s.h2,{id:"native-experiment-orchestration--scheduling",children:"Native experiment orchestration & scheduling"}),"\n",(0,t.jsxs)(s.p,{children:["When conducting chaos experiments, a single experiment is often not enough to simulate a complete testing scenario, and manually starting or stopping the experiment would be a tedious and dangerous thing to do. Previously, we ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/blog/building_automated_testing_framework",children:"combined Argo with Chaos Mesh"})," to inject faults automatically as a workflow. However, we later realized that Argo workflow is not the best way to describe declarative chaos experiments, and decided to write another workflow engine. Chaos Mesh 2.0 features native Workflow to support experiment orchestration, which means you can serially or parallely execute multiple experiments. You can even weave in notifications and health checks to simulate more complex experimental scenarios."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh 2.0 - Workflow",src:o(92635).A+"",width:"1999",height:"1142"})}),"\n",(0,t.jsxs)(s.p,{children:["In previous versions, we used the ",(0,t.jsx)(s.code,{children:"cron"})," and ",(0,t.jsx)(s.code,{children:"duration"})," fields to define chaos experiments that were executed periodically. It didn\u2019t take us long to realize that describing behavior this way was not fitting. For example, a single execution often takes longer than an execution cycle. This definition works fine, but lacks a suitable description for the study of expected behavior. We referred to CronJob and introduced Schedule, a new custom object, to Chaos Mesh. It adds more explicit properties to periodically executed tasks, such as whether multiple experiments are allowed to be executed at the same time, thereby restricting behavior."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh 2.0 - Schedule",src:o(35106).A+"",width:"1999",height:"1142"})}),"\n",(0,t.jsx)(s.h2,{id:"richer-fault-injection-types",children:"Richer fault injection types"}),"\n",(0,t.jsx)(s.p,{children:"Chaos Mesh already supports system-level fault injection types, as well as fault injections into cloud environments such as AWSChaos and GCPChaos. Starting from 2.0, injecting chaos into the application layer has been made possible with the introduction of JVMChaos and HTTPChaos."}),"\n",(0,t.jsx)(s.h3,{id:"jvmchaos",children:"JVMChaos"}),"\n",(0,t.jsxs)(s.p,{children:["JVM languages such as Java and Kotlin are widely used in the industry. A JVMChaos can be easily simulated through methods like JVM bytecode enhancement and Java Agent. Currently, JVMChaos uses ",(0,t.jsx)(s.a,{href:"https://github.com/chaosblade-io/chaosblade-exec-jvm",children:"chaosblade-exec-jvm"}),", and supports injecting various application-level fault types including method delay, specify return value, OOM and throw custom exception. For more info, you can refer to the document: ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/docs/simulate-jvm-application-chaos",children:"Simulate JVM Application Faults"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"httpchaos",children:"HTTPChaos"}),"\n",(0,t.jsxs)(s.p,{children:["HTTPChaos is a brand new Chaos type supported in the 2.0 version. It can hijack HTTP service requests and responses from the server side, as well as interrupt links, delay injection, or modify Header/Body. It is suitable for all scenarios that use HTTP as the communication protocol. For more information, refer to ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/docs/simulate-http-chaos-on-kubernetes",children:"Simulate HTTP Faults"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"chaosd-an-fault-injection-tool-for-physical-nodes",children:"Chaosd: an fault injection tool for physical nodes"}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Mesh is designed for Kubernetes. For physical machine environments, we present ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaosd",children:"Chaosd"}),". It evolved from chaos-daemon, a key component in Chaos Mesh, and we have added specific chaos experiments based on the characteristics of physical machines. Currently, Chaosd supports process kill, network, JVM, pressure, disk and a few other types of fault injection onto the physical machine."]}),"\n",(0,t.jsx)(s.h2,{id:"looking-ahead",children:"Looking ahead"}),"\n",(0,t.jsx)(s.p,{children:"Chaos Mesh is still under active development, and we have some more powerful features in the works, including:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"To inject JVMChaos at runtime, lowering the cost of JVMChaos and making it more easy-to-use."}),"\n",(0,t.jsx)(s.li,{children:"To introduce a plug-in mechanism to build custom chaos experiments, while the Scheduling function remains unimpaired."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In addition, we noticed that chaos experiments can be reused in a number of scenarios, hence we plan to launch a platform, where customized experiments can be turned into templates. This will enable our users to share and reuse not only specific chaos experiments, but also Workflows for different scenarios."}),"\n",(0,t.jsx)(s.h2,{id:"try-it-out",children:"Try it out!"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["2022-10-24: Because of ",(0,t.jsx)(s.a,{href:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html",children:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html"}),", and refer to ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/website/pull/356",children:"#356"}),", the interactive tutorial is temporarily unavailable."]})}),"\n",(0,t.jsxs)(s.p,{children:["Try out the ",(0,t.jsx)(s.code,{children:"Chaos Mesh 2.0 interactive scenarios"})," from your browser! There\u2019s no need to install or configure, as the complete development environment has been preconfigured with everything you need. Otherwise, you can visit ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/docs",children:"the Chaos Mesh docs"})," for more info."]}),"\n",(0,t.jsx)(s.h2,{id:"a-big-thank-you",children:"A big thank you"}),"\n",(0,t.jsxs)(s.p,{children:["Thanks to all ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/graphs/contributors",children:"Chaos Mesh contributors"}),", Chaos Mesh couldn\u2019t have come from 1.0 to 2.0 without all of your efforts!"]}),"\n",(0,t.jsxs)(s.p,{children:["If you are interested in Chaos Mesh and would like to help us improve it, you\u2019re welcome to join ",(0,t.jsx)(s.a,{href:"https://slack.cncf.io/",children:"our Slack channel"})," or submit your pull requests or issues to our ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub repository"}),". Chaos Mesh looks forward to your participation and feedback!"]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},35106:(e,s,o)=>{o.d(s,{A:()=>t});const t=o.p+"assets/images/chaos-dashboard-schedule-2.0-2bf9d7f92e8d254bd979a28f47ae9ef9.png"},79034:(e,s,o)=>{o.d(s,{A:()=>t});const t=o.p+"assets/images/chaos-mesh-2.0-ga-0dd019af0c94838abca9d11015cd0157.png"},20694:(e,s,o)=>{o.d(s,{A:()=>t});const t=o.p+"assets/images/chaos-mesh-scheduling-2.0-eb39143d5b731437e817ad869d81e2b3.png"},92635:(e,s,o)=>{o.d(s,{A:()=>t});const t=o.p+"assets/images/chaos-mesh-workflow-2.0-be58bae24386d8eeb703c34ddef2ff93.png"},9534:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>h});var t=o(79474);const a={},n=t.createContext(a);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);