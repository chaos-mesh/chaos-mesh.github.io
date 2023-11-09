"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3273],{42662:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=s(11527),o=s(54881);const a={slug:"/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Shuyang Wu",author_title:"Chaos Mesh Committer",author_url:"https://github.com/Yiyiyimu",author_image_url:"https://avatars.githubusercontent.com/u/34589752?v=4",image:"/img/blog/chaos-mesh-apisix.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,r={permalink:"/blog/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-08-20-chaos-mesh-apisix.md",source:"@site/blog/2021-08-20-chaos-mesh-apisix.md",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",description:"Chaos Mesh helps Apache APISIX improve system stability",date:"2021-08-20T00:00:00.000Z",formattedDate:"August 20, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:5.535,hasTruncateMarker:!0,authors:[{name:"Shuyang Wu",title:"Chaos Mesh Committer",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],frontMatter:{slug:"/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Shuyang Wu",author_title:"Chaos Mesh Committer",author_url:"https://github.com/Yiyiyimu",author_image_url:"https://avatars.githubusercontent.com/u/34589752?v=4",image:"/img/blog/chaos-mesh-apisix.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},unlisted:!1,prevItem:{title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",permalink:"/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices"},nextItem:{title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",permalink:"/blog/chaos-mesh-2.0-to-a-chaos-engineering-ecology"}},h={authorsImageUrls:[void 0]},c=[{value:"Our pain points",id:"our-pain-points",level:2},{value:"Why we chose Chaos Mesh",id:"why-we-chose-chaos-mesh",level:2},{value:"How we use Chaos Mesh in APISIX",id:"how-we-use-chaos-mesh-in-apisix",level:2},{value:"Scenario #1",id:"scenario-1",level:3},{value:"Scenario #2",id:"scenario-2",level:3},{value:"Our future plans",id:"our-future-plans",level:2},{value:"Run a chaos test in E2E simulation scenarios",id:"run-a-chaos-test-in-e2e-simulation-scenarios",level:3},{value:"Add chaos tests to more Apache APISIX projects",id:"add-chaos-tests-to-more-apache-apisix-projects",level:3},{value:"Add features to Chaos Mesh",id:"add-features-to-chaos-mesh",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Chaos Mesh helps Apache APISIX improve system stability",src:s(25479).Z+"",width:"3126",height:"1043"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/apache/apisix",children:"Apache APISIX"})," is a cloud-native, high-performance, scaling microservices API gateway. It is one of the Apache Software Foundation's top-level projects and serves hundreds of companies around the world, processing their mission-critical traffic, including finance, the Internet, manufacturing, retail, and operators. Our customers include NASA, the European Union's digital factory, China Mobile, and Tencent."]}),"\n",(0,n.jsx)(t.p,{children:"As our community grows, Apache APISIX's features more frequently interact with external components, making our system more complex and increasing the possibility of errors. To identify potential system failures and build confidence in the production environment, we introduced the concept of Chaos Engineering."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Apache APISIX architecture",src:s(18763).Z+"",width:"1080",height:"510"})}),"\n",(0,n.jsx)("p",{className:"caption",children:" Apache APISIX architecture "}),"\n",(0,n.jsxs)(t.p,{children:["In this post, we'll share how we use ",(0,n.jsx)(t.a,{href:"https://chaos-mesh.org/",children:"Chaos Mesh"})," to improve our system stability."]}),"\n",(0,n.jsx)(t.h2,{id:"our-pain-points",children:"Our pain points"}),"\n",(0,n.jsx)(t.p,{children:"Apache APISIX processes tens of billions of requests a day. At that volume level, our users have noticed a couple of issues:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Scenario #1:"})," In Apache APISIX's configuration center, when unexpectedly high network latency occurs between etcd and Apache APISIX, can Apache APISIX still filter and forward traffic normally?"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Scenario #2:"})," When a node in the etcd cluster fails and the cluster can still run normally, an error is reported for the node's interaction with the Apache APISIX admin API."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Although Apache APISIX has covered many scenarios through unit, end-to-end (E2E), and fuzz tests in continuous integration (CI), it has not covered the interaction scenario with external components. If the system behaves abnormally, for example, if the network jitters, a hard disk fails, or a process is killed, can Apache APISIX give appropriate error messages? Can it keep running or restore itself to normal operation?"}),"\n",(0,n.jsx)(t.h2,{id:"why-we-chose-chaos-mesh",children:"Why we chose Chaos Mesh"}),"\n",(0,n.jsx)(t.p,{children:"To test these user scenarios and to discover similar problems before our product goes into production, our community decided to use Chaos Mesh for chaos testing."}),"\n",(0,n.jsx)(t.p,{children:"Chaos Mesh is a cloud-native Chaos Engineering platform that features all-around fault injection methods for complex systems on Kubernetes, covering faults in Pod, the network, file system, and even the kernel. It helps users find weaknesses in the system and ensures that the system can resist out-of-control situations in the production environment."}),"\n",(0,n.jsx)(t.p,{children:"Like Apache APISIX, Chaos Mesh has an active open source community. We know that an active community can ensure stable software use and rapid iteration. This makes Chaos Mesh more attractive."}),"\n",(0,n.jsx)(t.h2,{id:"how-we-use-chaos-mesh-in-apisix",children:"How we use Chaos Mesh in APISIX"}),"\n",(0,n.jsx)(t.p,{children:'Chaos Engineering has grown beyond simple fault injection and now forms a complete methodology. To create a chaos experiment, we determined what the normal operation or "steady state" of our application should be. We then introduced potential problems to see how the system responded. If the problems knocked the application out of its steady state, we fixed them.'}),"\n",(0,n.jsx)(t.p,{children:"Now, we'll take the two scenarios we mentioned to show you how we use Chaos Mesh in Apache APISIX."}),"\n",(0,n.jsx)(t.h3,{id:"scenario-1",children:"Scenario #1"}),"\n",(0,n.jsx)(t.p,{children:"We deployed a Chaos Engineering experiment using the following steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"We found metrics to measure whether Apache APISIX is running normally. In the test, the most important method is to use Grafana to monitor the Apache APISIX's running metrics. We extracted data from Prometheus in CI for comparison. Here, we used the routing and forwarding requests per second (RPS) and etcd connectivity as evaluation metrics. We analyzed the log. For Apache APISIX, we checked Nginx's error log to determine whether there was an error and whether the error was in line with our expectations."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["We performed a test in the control group. We found that both ",(0,n.jsx)(t.code,{children:"create route"})," and ",(0,n.jsx)(t.code,{children:"access route"})," were successful, and we could connect to etcd. We recorded the RPS."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["We used network chaos to add a five second network latency and then retested. This time, ",(0,n.jsx)(t.code,{children:"set route"})," failed, ",(0,n.jsx)(t.code,{children:"get route"})," succeeded, etcd could be connected to, and RPS had no significant change compared to the previous experiment. The experiment met our expectations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"High network latency occurs between etcd and Apache APISIX",src:s(10949).Z+"",width:"1080",height:"1016"})}),"\n",(0,n.jsx)("p",{className:"caption",children:" High network latency occurs between etcd and Apache APISIX "}),"\n",(0,n.jsx)(t.h3,{id:"scenario-2",children:"Scenario #2"}),"\n",(0,n.jsx)(t.p,{children:"After we conducted the same experiment as above in the control group, we introduced pod-kill chaos and reproduced the expected error. When we randomly deleted a small number of etcd nodes in the cluster, sometimes APISIX could connect to etcd and sometimes not, and the log printed a large number of connection rejection errors."}),"\n",(0,n.jsxs)(t.p,{children:["When we deleted the first or third node in the etcd endpoint list, the ",(0,n.jsx)(t.code,{children:"set route"})," returned a result normally. However, when we deleted the second node in the list, the ",(0,n.jsx)(t.code,{children:"set route"}),' returned the error "connection refused."']}),"\n",(0,n.jsx)(t.p,{children:"Our troubleshooting revealed that the etcd Lua API used by Apache APISIX selected the endpoint sequentially, not randomly. Therefore, when we created an etcd client, we bound to only one etcd endpoint. This led to continuous failure."}),"\n",(0,n.jsx)(t.p,{children:"After we fixed this problem, we added a health check to the etcd Lua API to ensure that a large number of requests would not be sent to the disconnected etcd node. To avoid flooding the log with errors, we added a fallback mechanism when the etcd cluster was completely disconnected."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Error Reported from etcd Node Interaction",src:s(65970).Z+"",width:"1080",height:"1149"})}),"\n",(0,n.jsx)("p",{className:"caption",children:" An error is reported from one etcd node's interaction with the Apache APISIX admin API "}),"\n",(0,n.jsx)(t.h2,{id:"our-future-plans",children:"Our future plans"}),"\n",(0,n.jsx)(t.h3,{id:"run-a-chaos-test-in-e2e-simulation-scenarios",children:"Run a chaos test in E2E simulation scenarios"}),"\n",(0,n.jsx)(t.p,{children:"In Apache APISIX, we manually identify system weaknesses for testing and repair. As in the open source community, we test in CI, so we don't need to worry about the impact of Chaos Engineering's failure radius on the production environment. But the test cannot cover complicated and comprehensive application scenarios in the production environment."}),"\n",(0,n.jsx)(t.p,{children:"To cover more scenarios, the community plans to use the existing E2E test to simulate more complete scenarios and conduct chaos tests that are more random and cover a larger range."}),"\n",(0,n.jsx)(t.h3,{id:"add-chaos-tests-to-more-apache-apisix-projects",children:"Add chaos tests to more Apache APISIX projects"}),"\n",(0,n.jsx)(t.p,{children:"In addition to finding more vulnerabilities for Apache APISIX, the community plans to add chaos tests to more projects such as Apache APISIX Dashboard and Apache APISIX Ingress Controller."}),"\n",(0,n.jsx)(t.h3,{id:"add-features-to-chaos-mesh",children:"Add features to Chaos Mesh"}),"\n",(0,n.jsx)(t.p,{children:"When we deployed Chaos Mesh, some features were temporarily unsupported. For example, we couldn't select a service as a network latency target or specify container port injection as network chaos. In the future, the Apache APISIX community will assist Chaos Mesh to add related features."}),"\n",(0,n.jsxs)(t.p,{children:["You're welcome to contribute to the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/apisix",children:"Apache APISIX project"})," on GitHub. If you are interested in Chaos Mesh and would like to improve it, join our ",(0,n.jsx)(t.a,{href:"https://slack.cncf.io/",children:"Slack channel"})," (#project-chaos-mesh) or submit your pull requests or issues to our ",(0,n.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub repository"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},18763:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/apache-apisix-architecture-16026d6248e9c7ea47943b6105163d84.jpg"},25479:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/chaos-mesh-apisix-f1e9d2b36bf99249ad8fff26d94e0009.jpeg"},65970:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/error-reported-from-etcd-node-interaction-529a2e15e86ca5b3cb347db0f13a751b.jpg"},10949:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/high-network-latency-between-etcd-and-apache-apisix-9d036984f06e3f53e2f030428ccf917e.jpg"},54881:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var n=s(50959);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);