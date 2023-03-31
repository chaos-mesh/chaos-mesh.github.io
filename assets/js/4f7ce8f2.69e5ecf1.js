"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3332],{17942:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(50959);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=o.createContext({}),l=function(e){var t=o.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(h.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,h=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,d=u["".concat(h,".").concat(m)]||u[m]||p[m]||s;return a?o.createElement(d,i(i({ref:t},c),{},{components:a})):o.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var r={};for(var h in t)hasOwnProperty.call(t,h)&&(r[h]=t[h]);r.originalType=e,r[u]="string"==typeof e?e:n,i[1]=r;for(var l=2;l<s;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=a(51163),n=(a(50959),a(17942));const s={slug:"/chaos-mesh-2.0-to-a-chaos-engineering-ecology",title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",author:"Chaos Mesh Maintainers",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-2.0-ga.png",tags:["Chaos Mesh","Chaos Engineering","Announcement"]},i=void 0,r={permalink:"/blog/chaos-mesh-2.0-to-a-chaos-engineering-ecology",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-08-13-chaos-mesh-2.0-to-a-chaos-engineering-ecology.md",source:"@site/blog/2021-08-13-chaos-mesh-2.0-to-a-chaos-engineering-ecology.md",title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",description:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",date:"2021-08-13T00:00:00.000Z",formattedDate:"August 13, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Announcement",permalink:"/blog/tags/announcement"}],readingTime:4.4,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Maintainers",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-2.0-to-a-chaos-engineering-ecology",title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",author:"Chaos Mesh Maintainers",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-2.0-ga.png",tags:["Chaos Mesh","Chaos Engineering","Announcement"]},prevItem:{title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/blog/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability"},nextItem:{title:"Chaos Mesh Celebrates 100th Contributor",permalink:"/blog/chaos-mesh-celebrates-100th-contributor"}},h={authorsImageUrls:[void 0]},l=[{value:"Ease of use",id:"ease-of-use",level:2},{value:"Native experiment orchestration &amp; scheduling",id:"native-experiment-orchestration--scheduling",level:2},{value:"Richer fault injection types",id:"richer-fault-injection-types",level:2},{value:"JVMChaos",id:"jvmchaos",level:3},{value:"HTTPChaos",id:"httpchaos",level:3},{value:"Chaosd: an fault injection tool for physical nodes",id:"chaosd-an-fault-injection-tool-for-physical-nodes",level:2},{value:"Looking ahead",id:"looking-ahead",level:2},{value:"Try it out!",id:"try-it-out",level:2},{value:"A big thank you",id:"a-big-thank-you",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",src:a(58314).Z,width:"1501",height:"501"})),(0,n.kt)("p",null,"On July 23, 2021, Chaos Mesh 2.0 was made generally available! It\u2019s an exciting release, marking a solid milestone towards the chaos engineering ecology that we hope to build."),(0,n.kt)("p",null,"Making chaos engineering easier has always been Chaos Mesh\u2019s unswerving goal, and this release is a key step. After almost a year of continuous efforts, we have made major improvements in three main areas: ease of use, native experiment orchestration & scheduling, along with the richness of fault injection types."),(0,n.kt)("h2",{id:"ease-of-use"},"Ease of use"),(0,n.kt)("p",null,"We are committed to improving the usability of Chaos Mesh, and a key path to this is Chaos Dashboard, a web interface for users to orchestrate chaos experiments. For Chaos Mesh 2.0, we have improved the Chaos Dashboard in the following ways, further simplifying the complexity of chaos experiments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It now supports the creation, viewing, and updating of AWSChaos and GCPChaos, so that conducting chaos experiments in a cloud environment can provide a consistent experience as in Kubernetes;"),(0,n.kt)("li",{parentName:"ul"},"It can display more detailed records of each experiment, further enhancing its visibility.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaos Mesh 2.0 - Experiment scheduling",src:a(33182).Z,width:"1999",height:"1142"})),(0,n.kt)("h2",{id:"native-experiment-orchestration--scheduling"},"Native experiment orchestration & scheduling"),(0,n.kt)("p",null,"When conducting chaos experiments, a single experiment is often not enough to simulate a complete testing scenario, and manually starting or stopping the experiment would be a tedious and dangerous thing to do. Previously, we ",(0,n.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/blog/building_automated_testing_framework"},"combined Argo with Chaos Mesh")," to inject faults automatically as a workflow. However, we later realized that Argo workflow is not the best way to describe declarative chaos experiments, and decided to write another workflow engine. Chaos Mesh 2.0 features native Workflow to support experiment orchestration, which means you can serially or parallely execute multiple experiments. You can even weave in notifications and health checks to simulate more complex experimental scenarios."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaos Mesh 2.0 - Workflow",src:a(3943).Z,width:"1999",height:"1142"})),(0,n.kt)("p",null,"In previous versions, we used the ",(0,n.kt)("inlineCode",{parentName:"p"},"cron")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"duration")," fields to define chaos experiments that were executed periodically. It didn\u2019t take us long to realize that describing behavior this way was not fitting. For example, a single execution often takes longer than an execution cycle. This definition works fine, but lacks a suitable description for the study of expected behavior. We referred to CronJob and introduced Schedule, a new custom object, to Chaos Mesh. It adds more explicit properties to periodically executed tasks, such as whether multiple experiments are allowed to be executed at the same time, thereby restricting behavior."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaos Mesh 2.0 - Schedule",src:a(77164).Z,width:"1999",height:"1142"})),(0,n.kt)("h2",{id:"richer-fault-injection-types"},"Richer fault injection types"),(0,n.kt)("p",null,"Chaos Mesh already supports system-level fault injection types, as well as fault injections into cloud environments such as AWSChaos and GCPChaos. Starting from 2.0, injecting chaos into the application layer has been made possible with the introduction of JVMChaos and HTTPChaos."),(0,n.kt)("h3",{id:"jvmchaos"},"JVMChaos"),(0,n.kt)("p",null,"JVM languages such as Java and Kotlin are widely used in the industry. A JVMChaos can be easily simulated through methods like JVM bytecode enhancement and Java Agent. Currently, JVMChaos uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-jvm"},"chaosblade-exec-jvm"),", and supports injecting various application-level fault types including method delay, specify return value, OOM and throw custom exception. For more info, you can refer to the document: ",(0,n.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/simulate-jvm-application-chaos"},"Simulate JVM Application Faults"),"."),(0,n.kt)("h3",{id:"httpchaos"},"HTTPChaos"),(0,n.kt)("p",null,"HTTPChaos is a brand new Chaos type supported in the 2.0 version. It can hijack HTTP service requests and responses from the server side, as well as interrupt links, delay injection, or modify Header/Body. It is suitable for all scenarios that use HTTP as the communication protocol. For more information, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/simulate-http-chaos-on-kubernetes"},"Simulate HTTP Faults"),"."),(0,n.kt)("h2",{id:"chaosd-an-fault-injection-tool-for-physical-nodes"},"Chaosd: an fault injection tool for physical nodes"),(0,n.kt)("p",null,"Chaos Mesh is designed for Kubernetes. For physical machine environments, we present ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd"},"Chaosd"),". It evolved from chaos-daemon, a key component in Chaos Mesh, and we have added specific chaos experiments based on the characteristics of physical machines. Currently, Chaosd supports process kill, network, JVM, pressure, disk and a few other types of fault injection onto the physical machine."),(0,n.kt)("h2",{id:"looking-ahead"},"Looking ahead"),(0,n.kt)("p",null,"Chaos Mesh is still under active development, and we have some more powerful features in the works, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To inject JVMChaos at runtime, lowering the cost of JVMChaos and making it more easy-to-use."),(0,n.kt)("li",{parentName:"ul"},"To introduce a plug-in mechanism to build custom chaos experiments, while the Scheduling function remains unimpaired.")),(0,n.kt)("p",null,"In addition, we noticed that chaos experiments can be reused in a number of scenarios, hence we plan to launch a platform, where customized experiments can be turned into templates. This will enable our users to share and reuse not only specific chaos experiments, but also Workflows for different scenarios."),(0,n.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"2022-10-24: Because of ",(0,n.kt)("a",{parentName:"p",href:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html"},"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html"),", and refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/website/pull/356"},"#356"),", the interactive tutorial is temporarily unavailable.")),(0,n.kt)("p",null,"Try out the ",(0,n.kt)("inlineCode",{parentName:"p"},"Chaos Mesh 2.0 interactive scenarios")," from your browser! There\u2019s no need to install or configure, as the complete development environment has been preconfigured with everything you need. Otherwise, you can visit ",(0,n.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs"},"the Chaos Mesh docs")," for more info."),(0,n.kt)("h2",{id:"a-big-thank-you"},"A big thank you"),(0,n.kt)("p",null,"Thanks to all ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/graphs/contributors"},"Chaos Mesh contributors"),", Chaos Mesh couldn\u2019t have come from 1.0 to 2.0 without all of your efforts!"),(0,n.kt)("p",null,"If you are interested in Chaos Mesh and would like to help us improve it, you\u2019re welcome to join ",(0,n.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"our Slack channel")," or submit your pull requests or issues to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),". Chaos Mesh looks forward to your participation and feedback!"))}p.isMDXComponent=!0},77164:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-dashboard-schedule-2.0-2bf9d7f92e8d254bd979a28f47ae9ef9.png"},58314:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-2.0-ga-0dd019af0c94838abca9d11015cd0157.png"},33182:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-scheduling-2.0-eb39143d5b731437e817ad869d81e2b3.png"},3943:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-workflow-2.0-be58bae24386d8eeb703c34ddef2ff93.png"}}]);