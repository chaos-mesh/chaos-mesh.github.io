"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3273],{49613:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(59496);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),h=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=h(o),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return o?n.createElement(m,s(s({ref:t},l),{},{components:o})):n.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var h=2;h<r;h++)s[h]=o[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},39477:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=o(28957),a=(o(59496),o(49613));const r={slug:"/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Shuyang Wu",author_title:"Chaos Mesh Committer",author_url:"https://github.com/Yiyiyimu",author_image_url:"https://avatars.githubusercontent.com/u/34589752?v=4",image:"/img/blog/chaos-mesh-apisix.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},s=void 0,i={permalink:"/blog/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-08-20-chaos-mesh-apisix.md",source:"@site/blog/2021-08-20-chaos-mesh-apisix.md",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",description:"Chaos Mesh helps Apache APISIX improve system stability",date:"2021-08-20T00:00:00.000Z",formattedDate:"August 20, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:5.535,hasTruncateMarker:!0,authors:[{name:"Shuyang Wu",title:"Chaos Mesh Committer",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],frontMatter:{slug:"/How-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",title:"How Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Shuyang Wu",author_title:"Chaos Mesh Committer",author_url:"https://github.com/Yiyiyimu",author_image_url:"https://avatars.githubusercontent.com/u/34589752?v=4",image:"/img/blog/chaos-mesh-apisix.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",permalink:"/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices"},nextItem:{title:"Chaos Mesh 2.0: To a Chaos Engineering Ecology",permalink:"/blog/chaos-mesh-2.0-to-a-chaos-engineering-ecology"}},c={authorsImageUrls:[void 0]},h=[{value:"Our pain points",id:"our-pain-points",level:2},{value:"Why we chose Chaos Mesh",id:"why-we-chose-chaos-mesh",level:2},{value:"How we use Chaos Mesh in APISIX",id:"how-we-use-chaos-mesh-in-apisix",level:2},{value:"Scenario #1",id:"scenario-1",level:3},{value:"Scenario #2",id:"scenario-2",level:3},{value:"Our future plans",id:"our-future-plans",level:2},{value:"Run a chaos test in E2E simulation scenarios",id:"run-a-chaos-test-in-e2e-simulation-scenarios",level:3},{value:"Add chaos tests to more Apache APISIX projects",id:"add-chaos-tests-to-more-apache-apisix-projects",level:3},{value:"Add features to Chaos Mesh",id:"add-features-to-chaos-mesh",level:3}],l={toc:h},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chaos Mesh helps Apache APISIX improve system stability",src:o(25479).Z,width:"3126",height:"1043"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is a cloud-native, high-performance, scaling microservices API gateway. It is one of the Apache Software Foundation's top-level projects and serves hundreds of companies around the world, processing their mission-critical traffic, including finance, the Internet, manufacturing, retail, and operators. Our customers include NASA, the European Union's digital factory, China Mobile, and Tencent."),(0,a.kt)("p",null,"As our community grows, Apache APISIX's features more frequently interact with external components, making our system more complex and increasing the possibility of errors. To identify potential system failures and build confidence in the production environment, we introduced the concept of Chaos Engineering."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Apache APISIX architecture",src:o(18763).Z,width:"1080",height:"510"})),(0,a.kt)("p",{className:"caption"}," Apache APISIX architecture "),(0,a.kt)("p",null,"In this post, we'll share how we use ",(0,a.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"Chaos Mesh")," to improve our system stability."),(0,a.kt)("h2",{id:"our-pain-points"},"Our pain points"),(0,a.kt)("p",null,"Apache APISIX processes tens of billions of requests a day. At that volume level, our users have noticed a couple of issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scenario #1:")," In Apache APISIX's configuration center, when unexpectedly high network latency occurs between etcd and Apache APISIX, can Apache APISIX still filter and forward traffic normally?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scenario #2:")," When a node in the etcd cluster fails and the cluster can still run normally, an error is reported for the node's interaction with the Apache APISIX admin API.")),(0,a.kt)("p",null,"Although Apache APISIX has covered many scenarios through unit, end-to-end (E2E), and fuzz tests in continuous integration (CI), it has not covered the interaction scenario with external components. If the system behaves abnormally, for example, if the network jitters, a hard disk fails, or a process is killed, can Apache APISIX give appropriate error messages? Can it keep running or restore itself to normal operation?"),(0,a.kt)("h2",{id:"why-we-chose-chaos-mesh"},"Why we chose Chaos Mesh"),(0,a.kt)("p",null,"To test these user scenarios and to discover similar problems before our product goes into production, our community decided to use Chaos Mesh for chaos testing."),(0,a.kt)("p",null,"Chaos Mesh is a cloud-native Chaos Engineering platform that features all-around fault injection methods for complex systems on Kubernetes, covering faults in Pod, the network, file system, and even the kernel. It helps users find weaknesses in the system and ensures that the system can resist out-of-control situations in the production environment."),(0,a.kt)("p",null,"Like Apache APISIX, Chaos Mesh has an active open source community. We know that an active community can ensure stable software use and rapid iteration. This makes Chaos Mesh more attractive."),(0,a.kt)("h2",{id:"how-we-use-chaos-mesh-in-apisix"},"How we use Chaos Mesh in APISIX"),(0,a.kt)("p",null,'Chaos Engineering has grown beyond simple fault injection and now forms a complete methodology. To create a chaos experiment, we determined what the normal operation or "steady state" of our application should be. We then introduced potential problems to see how the system responded. If the problems knocked the application out of its steady state, we fixed them.'),(0,a.kt)("p",null,"Now, we'll take the two scenarios we mentioned to show you how we use Chaos Mesh in Apache APISIX."),(0,a.kt)("h3",{id:"scenario-1"},"Scenario #1"),(0,a.kt)("p",null,"We deployed a Chaos Engineering experiment using the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We found metrics to measure whether Apache APISIX is running normally. In the test, the most important method is to use Grafana to monitor the Apache APISIX's running metrics. We extracted data from Prometheus in CI for comparison. Here, we used the routing and forwarding requests per second (RPS) and etcd connectivity as evaluation metrics. We analyzed the log. For Apache APISIX, we checked Nginx's error log to determine whether there was an error and whether the error was in line with our expectations.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We performed a test in the control group. We found that both ",(0,a.kt)("inlineCode",{parentName:"p"},"create route")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"access route")," were successful, and we could connect to etcd. We recorded the RPS.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We used network chaos to add a five second network latency and then retested. This time, ",(0,a.kt)("inlineCode",{parentName:"p"},"set route")," failed, ",(0,a.kt)("inlineCode",{parentName:"p"},"get route")," succeeded, etcd could be connected to, and RPS had no significant change compared to the previous experiment. The experiment met our expectations."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High network latency occurs between etcd and Apache APISIX",src:o(10949).Z,width:"1080",height:"1016"})),(0,a.kt)("p",{className:"caption"}," High network latency occurs between etcd and Apache APISIX "),(0,a.kt)("h3",{id:"scenario-2"},"Scenario #2"),(0,a.kt)("p",null,"After we conducted the same experiment as above in the control group, we introduced pod-kill chaos and reproduced the expected error. When we randomly deleted a small number of etcd nodes in the cluster, sometimes APISIX could connect to etcd and sometimes not, and the log printed a large number of connection rejection errors."),(0,a.kt)("p",null,"When we deleted the first or third node in the etcd endpoint list, the ",(0,a.kt)("inlineCode",{parentName:"p"},"set route")," returned a result normally. However, when we deleted the second node in the list, the ",(0,a.kt)("inlineCode",{parentName:"p"},"set route"),' returned the error "connection refused."'),(0,a.kt)("p",null,"Our troubleshooting revealed that the etcd Lua API used by Apache APISIX selected the endpoint sequentially, not randomly. Therefore, when we created an etcd client, we bound to only one etcd endpoint. This led to continuous failure."),(0,a.kt)("p",null,"After we fixed this problem, we added a health check to the etcd Lua API to ensure that a large number of requests would not be sent to the disconnected etcd node. To avoid flooding the log with errors, we added a fallback mechanism when the etcd cluster was completely disconnected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Error Reported from etcd Node Interaction",src:o(65970).Z,width:"1080",height:"1149"})),(0,a.kt)("p",{className:"caption"}," An error is reported from one etcd node's interaction with the Apache APISIX admin API "),(0,a.kt)("h2",{id:"our-future-plans"},"Our future plans"),(0,a.kt)("h3",{id:"run-a-chaos-test-in-e2e-simulation-scenarios"},"Run a chaos test in E2E simulation scenarios"),(0,a.kt)("p",null,"In Apache APISIX, we manually identify system weaknesses for testing and repair. As in the open source community, we test in CI, so we don't need to worry about the impact of Chaos Engineering's failure radius on the production environment. But the test cannot cover complicated and comprehensive application scenarios in the production environment."),(0,a.kt)("p",null,"To cover more scenarios, the community plans to use the existing E2E test to simulate more complete scenarios and conduct chaos tests that are more random and cover a larger range."),(0,a.kt)("h3",{id:"add-chaos-tests-to-more-apache-apisix-projects"},"Add chaos tests to more Apache APISIX projects"),(0,a.kt)("p",null,"In addition to finding more vulnerabilities for Apache APISIX, the community plans to add chaos tests to more projects such as Apache APISIX Dashboard and Apache APISIX Ingress Controller."),(0,a.kt)("h3",{id:"add-features-to-chaos-mesh"},"Add features to Chaos Mesh"),(0,a.kt)("p",null,"When we deployed Chaos Mesh, some features were temporarily unsupported. For example, we couldn't select a service as a network latency target or specify container port injection as network chaos. In the future, the Apache APISIX community will assist Chaos Mesh to add related features."),(0,a.kt)("p",null,"You're welcome to contribute to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX project")," on GitHub. If you are interested in Chaos Mesh and would like to improve it, join our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"Slack channel")," (#project-chaos-mesh) or submit your pull requests or issues to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}u.isMDXComponent=!0},18763:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/apache-apisix-architecture-16026d6248e9c7ea47943b6105163d84.jpg"},25479:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/chaos-mesh-apisix-f1e9d2b36bf99249ad8fff26d94e0009.jpeg"},65970:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/error-reported-from-etcd-node-interaction-529a2e15e86ca5b3cb347db0f13a751b.jpg"},10949:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/high-network-latency-between-etcd-and-apache-apisix-9d036984f06e3f53e2f030428ccf917e.jpg"}}]);