"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2567],{34617:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(13274),a=s(9534);const i={slug:"/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",author:"Hui Zhang @ Fuxi Lab, NetEase",image:"/img/blog/fuxi-case-banner.jpg",tags:["Chaos Mesh","Chaos Engineering"]},o=void 0,r={permalink:"/zh/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",source:"@site/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",description:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",date:"2020-11-26T00:00:00.000Z",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"}],readingTime:3.765,hasTruncateMarker:!0,authors:[{name:"Hui Zhang @ Fuxi Lab, NetEase"}],frontMatter:{slug:"/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",author:"Hui Zhang @ Fuxi Lab, NetEase",image:"/img/blog/fuxi-case-banner.jpg",tags:["Chaos Mesh","Chaos Engineering"]},unlisted:!1,prevItem:{title:"How to Simulate I/O Faults at Runtime",permalink:"/zh/blog/how-to-simulate-io-faults-at-runtime"},nextItem:{title:"Chaos Engineering - Breaking things Intentionally",permalink:"/zh/blog/chaos-engineering-breaking-things-intentionally"}},h={authorsImageUrls:[void 0]},l=[{value:"Why Chaos Mesh",id:"why-chaos-mesh",level:2},{value:"Our journey with Chaos Mesh",id:"our-journey-with-chaos-mesh",level:2},{value:"A fast-growing project",id:"a-fast-growing-project",level:2},{value:"Looking forward",id:"looking-forward",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",src:s(95748).A+"",width:"3126",height:"1043"})}),"\n",(0,t.jsx)(n.p,{children:"NetEase Fuxi AI Lab is China\u2019s first professional game AI research institution. Researchers use our Kubernetes-based Danlu platform for algorithm development, training and tuning, and online publishing. Thanks to the integration with Kubernetes, our platform is much more efficient. However, due to Kubernetes- and microservices-related issues, we are constantly testing and improving our platform to make it more stable."}),"\n",(0,t.jsxs)(n.p,{children:["In this article, I\u2019ll discuss one of our most valuable testing tools, ",(0,t.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"}),". Chaos Mesh is an open-source Chaos Engineering tool that provides a wide range of fault injections and excellent fault monitoring through its Dashboard."]}),"\n",(0,t.jsx)(n.h2,{id:"why-chaos-mesh",children:"Why Chaos Mesh"}),"\n",(0,t.jsx)(n.p,{children:"We started our search for a Chaos Engineering tool in 2018. We were looking for a tool with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cloud-native support. Kubernetes is practically the de facto standard for service orchestration and scheduling, and the application runtime has been fully standardized. For applications that run entirely on K8s, cloud-native support is a must for any tools that go with them."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sufficient fault injection types. For stateful services, network failure simulation is particularly important. The platform must be able to simulate failures at different levels, such as Pods, network, and I/O."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Good observability. Knowing when a fault is injected and when it can be recovered is vital for us to tell whether there is an abnormality in the application."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Active community support. We want to use an open-source project that is thoroughly tested and consistently maintained. That\u2019s why we value sustained and timely community support."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"No intrusion on existing applications, with no domain knowledge required."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Actual use cases for us to evaluate and build upon."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In 2019, when Chaos Mesh, a Chaos Engineering platform for Kubernetes was open-sourced, we found the tool we were looking for. It was still in its early stage; however, we were immediately struck with the richness of fault types it supported. This was a big advantage over other chaos engineering tools, because, to a certain degree, it determines the number of issues that we can locate in the system. We instantly realized that Chaos Mesh met our expectations in almost every way."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chaos Mesh architecture",src:s(47690).A+"",width:"941",height:"631"})}),"\n",(0,t.jsx)(n.h2,{id:"our-journey-with-chaos-mesh",children:"Our journey with Chaos Mesh"}),"\n",(0,t.jsxs)(n.p,{children:["Chaos Mesh has helped us find several important bugs. For example, it detected a brain-split issue in ",(0,t.jsx)(n.a,{href:"https://www.rabbitmq.com/",children:"rabbitMQ"}),", the open-source message-queueing software for Danlu. According to ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Split-brain",children:"Wikipedia"}),", \u201ca split-brain condition indicates data or availability inconsistencies originating from the maintenance of two separate data sets with overlap in scope.\u201d When a rabbitMQ cluster has a brain split error, there will be data write conflicts or errors, which cause more serious problems such as data inconsistencies in the messaging service. As shown in our architecture below, when brain split happens, consumers do not function normally and keep reporting server exceptions."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture of a RabbitMQ cluster",src:s(44365).A+"",width:"941",height:"820"})}),"\n",(0,t.jsxs)(n.p,{children:["With Chaos Mesh, we could stably reproduce this issue by injecting ",(0,t.jsx)(n.code,{children:"pod-kill"})," faults into our container instances cloud."]}),"\n",(0,t.jsx)(n.p,{children:"Chaos Mesh also found several other issues including a startup failure, a join failure for crashed broker clusters, a heartbeat timeout, and a connection channel shutdown. Over time, our development team fixed these issues and greatly improved the stability of the Danlu platform."}),"\n",(0,t.jsx)(n.h2,{id:"a-fast-growing-project",children:"A fast-growing project"}),"\n",(0,t.jsxs)(n.p,{children:["Chaos Mesh is constantly updated and improved. When we first adopted it, it hadn\u2019t even reached a stable version. It didn\u2019t have a debugging or log collection tool, and the Dashboard component only applied to TiDB. The only way we could use Chaos Mesh to test other applications was to execute the YAML configuration file via ",(0,t.jsx)(n.code,{children:"kubectl apply"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://chaos-mesh.org/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier",children:"Chaos Mesh 1.0"})," fixed or improved most of these limitations. It offers more fine-grained and powerful chaos support, a generally-available Chaos Dashboard, enhanced observability, and more accurate chaos scope control. These are all driven by an open, collaborative, and vibrant community."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chaos Dashboard is now generally available",src:s(97692).A+"",width:"1920",height:"968"})}),"\n",(0,t.jsx)(n.h2,{id:"looking-forward",children:"Looking forward"}),"\n",(0,t.jsx)(n.p,{children:"It\u2019s amazing to see how much Chaos Mesh has grown and how much traction it\u2019s gaining. We\u2019re also happy with what we have achieved with it."}),"\n",(0,t.jsx)(n.p,{children:"However, Chaos Engineering is a big area to work on. In the future, we\u2019d like to see the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Atomic fault injection"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unattended fault inject that combines customized fault types with standardized methods to validate experimental objects"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Standard test cases for general components such as MySQL, Redis, and Kafka"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ve discussed these features with those who maintain Chaos Mesh, and they said these features are on the Chaos Mesh 2.0 roadmap."}),"\n",(0,t.jsxs)(n.p,{children:["If you are interested, join the Chaos Mesh community via ",(0,t.jsx)(n.a,{href:"https://slack.cncf.io/",children:"Slack"})," (#project-chaos-mesh) or ",(0,t.jsx)(n.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},44365:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/architecture-of-a-rabbitmq-cluster-dde2aba82a73d21c4cb35ab9035b844e.png"},97692:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/chaos-dashboard-0a1e48c54968d276f174801a1364ce21.gif"},47690:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/chaos-mesh-architecture-c61ce59a7a241d180a6156b8a6202f34.png"},95748:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/fuxi-case-banner-533004456baeaec37f72c0d6aaed0f2b.jpg"},9534:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(79474);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);