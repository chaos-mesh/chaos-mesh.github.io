"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[686],{34660:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=i(11527),s=i(7463);const a={slug:"/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices",title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",author:"Zhaojun Wu",author_title:"Senior DevOps Engineer at Tencent Interactive Entertainment Group",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-tencent-ieg.jpeg",tags:["Chaos Mesh","Chaos Engineering","Use case"]},o=void 0,r={permalink:"/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-08-26-securing-online-gaming-combine-chaos-engineering-with-devops-practices.md",source:"@site/blog/2021-08-26-securing-online-gaming-combine-chaos-engineering-with-devops-practices.md",title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",description:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Use case",permalink:"/blog/tags/use-case"}],readingTime:7.635,hasTruncateMarker:!0,authors:[{name:"Zhaojun Wu",title:"Senior DevOps Engineer at Tencent Interactive Entertainment Group",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices",title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",author:"Zhaojun Wu",author_title:"Senior DevOps Engineer at Tencent Interactive Entertainment Group",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-tencent-ieg.jpeg",tags:["Chaos Mesh","Chaos Engineering","Use case"]},unlisted:!1,prevItem:{title:"How to run chaos experiments on your physical machine",permalink:"/blog/run-chaos-experiments-on-physical-machines"},nextItem:{title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/blog/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability"}},c={authorsImageUrls:[void 0]},l=[{value:"Let there be faults",id:"let-there-be-faults",level:2},{value:"Build a chaos testing platform",id:"build-a-chaos-testing-platform",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Finer granularity of fault injection",id:"finer-granularity-of-fault-injection",level:3},{value:"Red teaming",id:"red-teaming",level:3},{value:"Dependency analysis",id:"dependency-analysis",level:3},{value:"Automated fault detection and diagnosis",id:"automated-fault-detection-and-diagnosis",level:3},{value:"Chaos engineering empowers DevOps practices",id:"chaos-engineering-empowers-devops-practices",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",src:i(89599).Z+"",width:"1200",height:"400"})}),"\n",(0,t.jsx)(n.p,{children:"Interactive Entertainment Group (IEG) is a division of Tencent Holdings that focuses on the development of online video games and other digital content such as live broadcasts. It is well-known for being the publisher of some of the most popular video games."}),"\n",(0,t.jsx)(n.p,{children:"In this article, I will explain why and how we introduce chaos engineering into our DevOps process."}),"\n",(0,t.jsx)(n.p,{children:"For each day, we handle over 10,000,000 total visits, and, during peak hours, we process over 1,000,000 queries per second (QPS). To guarantee players a fun and engaging experience, we launch various daily or seasonal game events. Sometimes, that means we must update the event code over 500 times per day. As our user base grows, the total amount of data quickly multiplies. Currently, the figure stands at 200 terabytes. We have to manage the massive user queries and rapid release iterations, and we managed it well."}),"\n",(0,t.jsx)(n.p,{children:"A cloud-native DevOps solution frees our events operator from the growing number of online events. We developed a pipeline that takes care of everything they need, from writing code to launching events in production environments: once new event codes are detected, the operation platform automatically builds images from them and deploys the image to Tencent Kubernetes Engine (TKE). You might be wondering how long this entire automated process takes: only 5 minutes."}),"\n",(0,t.jsx)(n.p,{children:"Currently, almost all IEG operation services run in TKE. Elastic scaling promises faster capacity expansion and reduction of cloud services thanks to cloud-native technology."}),"\n",(0,t.jsxs)(n.p,{children:["In addition, we expect the iterations to be easier. A best practice is to break down the large, hard-to-maintain service into many \u201csmaller\u201d services that we can maintain independently. \u201cSmall\u201d services have less code and simpler logic, with lower handover and training costs. We as developers continue to practice this kind of microservices architecture as part of DevOps initiatives. Yet similar issues persist. As the number of services increases, so does the complexity of making calls between them. ",(0,t.jsx)(n.strong,{children:"Worse, if one \u201csmall\u201d service fails, it could set off a chain reaction that brings all the services down\u2014a microservice dependency hell."})]}),"\n",(0,t.jsx)(n.p,{children:"The thing is, fault tolerance varies by service. Some support downgrading, while others don\u2019t. Not to mention that some services are unable to provide timely alerts or lack an effective debugging tool. As a result, debugging services has become a tricky and increasingly pressing issue in our day-to-day work."}),"\n",(0,t.jsx)(n.p,{children:"But we can\u2019t just let it be. What if the unstable performance constantly chases our players away? What if there is a catastrophic failure?"}),"\n",(0,t.jsx)(n.h2,{id:"let-there-be-faults",children:"Let there be faults"}),"\n",(0,t.jsx)(n.p,{children:"Netflix introduced the idea of chaos engineering. This approach tests the resilience of the system against all kinds of edgy cases by injecting faults in a non-production environment to achieve ideal system reliability. According to one Gartner article, by 2023, 40% of organizations will use chaos engineering to meet their top DevOps objectives, reducing unplanned downtime by 20%."}),"\n",(0,t.jsx)(n.p,{children:"This is exactly how we avoid the worst-case scenario. Fault injection, in my opinion, is now a must-do in every technical team. In our early test cases, developers would bring down a node before launching a service to see if the primary node automatically switched to the secondary node and if disaster recovery worked."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"But chaos engineering is more than fault injection."})," It is a field that constantly drives new techniques, professional testing tools, and solid theories. That\u2019s why we continue to explore it."]}),"\n",(0,t.jsxs)(n.p,{children:["IEG officially launched its chaos engineering project over a year ago. We wanted to do this right the first time. The key is to select a chaos engineering tool that supports running experiments in the Kubernetes environment. ",(0,t.jsxs)(n.strong,{children:["After a careful comparison, we believe ",(0,t.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," is our best option"]})," because:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It is a Cloud Native Computing Foundation (CNCF) Sandbox project with a friendly and productive community."}),"\n",(0,t.jsx)(n.li,{children:"It does not intrude on existing applications."}),"\n",(0,t.jsx)(n.li,{children:"It provides a web UI and a variety of fault injection types, as shown in the image below."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"A comparison of chaos engineering tools",src:i(60369).Z+"",width:"1080",height:"712"})}),"\n",(0,t.jsx)("p",{className:"caption",children:" A comparison of chaos engineering tools "}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note: This comparison is outdated and is intended simply to compare fault injection features supported by Chaos Mesh with other well-known chaos engineering platforms. It is not intended to favor or position one project over another. Any corrections are welcome."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"build-a-chaos-testing-platform",children:"Build a chaos testing platform"}),"\n",(0,t.jsx)(n.p,{children:"Our chaos engineering team embedded Chaos Mesh into our continuous integration and continuous delivery pipelines. As shown in the diagram below, Chaos Mesh now plays an important role in our operation platform. We use Chaos Mesh's dashboard API to create, run, and delete chaos experiments and monitor them on our own platform. We can simulate basic system-level faults in Pods, container, network, and IO."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chaos Mesh embedded in IEG&#39;s operation platform",src:i(69971).Z+"",width:"1999",height:"915"})}),"\n",(0,t.jsx)("p",{className:"caption",children:"Chaos Mesh embedded in IEG's operation platform"}),"\n",(0,t.jsxs)(n.p,{children:["In IEG, ",(0,t.jsx)(n.strong,{children:"chaos engineering is generally summarized as a closed loop with several key phases"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Improve overall system resilience."}),"\n",(0,t.jsx)(n.p,{children:"Build a chaos testing platform that we can modify as our needs change."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Design a testing plan."}),"\n",(0,t.jsx)(n.p,{children:"The testing plan must specify the target, scope, fault to be injected, monitoring metrics, etc. Make sure the testing is well-controlled."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute chaos experiments and review the results."}),"\n",(0,t.jsx)(n.p,{children:"Compare the system\u2019s performance before and after the chaos experiment."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Resolve any issues that may arise."}),"\n",(0,t.jsx)(n.p,{children:"Fix found issues and upgrade the system for the follow-up experiment."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat chaos experiments and verify performance."}),"\n",(0,t.jsx)(n.p,{children:"Repeat chaos experiments to see if the system\u2019s performance meets expectations. If it does, design another testing plan."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Five phases of chaos engineering in IEG",src:i(47550).Z+"",width:"1999",height:"1721"})}),"\n",(0,t.jsx)("p",{className:"caption",children:"Five phases of chaos engineering in IEG"}),"\n",(0,t.jsxs)(n.p,{children:["We frequently ",(0,t.jsx)(n.strong,{children:"test the performance of services under high CPU usage"}),", for example. We begin by orchestrating and scheduling experiments. Following that, we run experiments and monitor the performance of related services. Multiple monitoring metrics, such as QPS, latency, response success, are immediately visible through the operation platform. The platform then generates reports for us to review, so we can check whether these experiments met our expectations."]}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,t.jsx)(n.p,{children:"The following are a few examples of how we use chaos engineering in our DevOps workflow."}),"\n",(0,t.jsx)(n.h3,{id:"finer-granularity-of-fault-injection",children:"Finer granularity of fault injection"}),"\n",(0,t.jsx)(n.p,{children:"There is no need to shut down the entire system to see if our games are still available to players. Sometimes we only want to inject faults, say, network latency, into a single game account, and observe how it responds. We are now able to achieve this finer granularity by hijacking traffic and running experiments at the gateway."}),"\n",(0,t.jsx)(n.h3,{id:"red-teaming",children:"Red teaming"}),"\n",(0,t.jsxs)(n.p,{children:["Understandably, our team members grew bored of regular chaos experiments. After all, it\u2019s something like telling your left hand to fight against your right hand. Here at IEG, ",(0,t.jsx)(n.strong,{children:"we integrate a testing practice called red teaming into chaos engineering to ensure that our system resiliency improves in an organic way."})," Red teaming is similar to penetration testing, but more targeted. It requires a group of testers to emulate real-world attacks from an outsider\u2019s perspective. If I were in charge of IT operations, I would simulate faults to specific services, and check to see whether my developer colleges were doing a good job. If I found any potential faults, well, be prepared for some \u201chard talk.\u201d On the other hand, developers would actively perform chaos experiments and make sure no risk was left behind to avoid being blamed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The red teaming process in IEG",src:i(57783).Z+"",width:"1999",height:"1957"})}),"\n",(0,t.jsx)("p",{className:"caption",children:"The red teaming process in IEG"}),"\n",(0,t.jsx)(n.h3,{id:"dependency-analysis",children:"Dependency analysis"}),"\n",(0,t.jsx)(n.p,{children:"It\u2019s important to manage dependencies for microservices. In our case, non-core services cannot be the bottleneck for core services. Fortunately, with chaos engineering, we can run dependency analysis simply by injecting faults into called services and observing how badly the main service is affected. Based on the results, we can optimize the service calling chain in a specific scenario."}),"\n",(0,t.jsx)(n.h3,{id:"automated-fault-detection-and-diagnosis",children:"Automated fault detection and diagnosis"}),"\n",(0,t.jsxs)(n.p,{children:["We are also exploring AI bots to help us detect and diagnose faults. As services become more complex, the likelihood of failure increases. ",(0,t.jsx)(n.strong,{children:"Our goal is to train a fault detection model through large-scale chaos experiments in production or other controlled environments."})]}),"\n",(0,t.jsx)(n.h2,{id:"chaos-engineering-empowers-devops-practices",children:"Chaos engineering empowers DevOps practices"}),"\n",(0,t.jsx)(n.p,{children:"Currently, on average, more than 50 people run chaos experiments each week, running more than 150 tests, and detecting more than 100 problems in total."}),"\n",(0,t.jsxs)(n.p,{children:["Gone are the days when performing fault injection requires a handwritten script, which can be a tough thing to do for those who are unfamiliar with it. ",(0,t.jsx)(n.strong,{children:"The benefits of combining chaos engineering with DevOps practices are obvious: within a few minutes, you can orchestrate various fault types by simply dragging and dropping, execute them with a single click, and monitor the results in real-time\u2014all in one platform."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chaos engineering with DevOps ensures efficient fault injection",src:i(1378).Z+"",width:"1999",height:"568"})}),"\n",(0,t.jsx)("p",{className:"caption",children:"Chaos engineering with DevOps ensures efficient fault injection"}),"\n",(0,t.jsx)(n.p,{children:"Thanks to full-featured chaos engineering tools and streamlined DevOps processes, we estimate that the efficiency of fault injection and chaos-based optimization at IEG has been improved at least by 10 times in the last six months. If you were unsure about implementing chaos engineering in your business, I hope our experience can be of some help."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1378:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/chaos-engineering-with-devops-5f6fab8a9cb2ab88dd0915d536f5de6f.png"},69971:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/chaos-mesh-embedded-in-IEG's-operation-platform-afaf1b549e9a7d2b6103a16dfb6eb4c6.png"},89599:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/chaos-mesh-tencent-ieg-3119a610ddb42163cb244e562167f680.jpeg"},60369:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/comparison-of-chaos-engineering-tools-7dba9d470020b2a7250e50e1413aec74.png"},47550:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/five-phases-of-chaos-engineering-in-IEG-ecfa298a68587aa59ba778bb563e30fd.png"},57783:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/red-teaming-process-in-IEG-9c4e15b2baa0791bb078de705ec915fe.png"},7463:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(50959);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);