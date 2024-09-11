"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4997],{8392:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var n=o(86070),a=o(6383);const t={slug:"/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",authors:["xiangwang","changyu"],image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,r={permalink:"/blog/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-06-25-chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service.md",source:"@site/blog/2021-06-25-chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service.md",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",description:"Chaos engineering tools",date:"2021-06-25T00:00:00.000Z",tags:[{inline:!0,label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{inline:!0,label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:10.085,hasTruncateMarker:!0,authors:[{name:"Xiang Wang",title:"Committer of Chaos Mesh",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars.githubusercontent.com/u/5793595?v=4",key:"xiangwang",page:null},{name:"Chang Yu",key:"changyu",page:null}],frontMatter:{slug:"/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",authors:["xiangwang","changyu"],image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},unlisted:!1,prevItem:{title:"How to efficiently stress test Pod memory",permalink:"/blog/how-to-efficiently-stress-test-pod-memory"},nextItem:{title:"From a Newbie in Software Engineering to a Graduated LFX-Mentee",permalink:"/blog/lfx-mentorship-enriching-awschaos"}},h={authorsImageUrls:[void 0,void 0]},c=[{value:"What is Chaos as a Service?",id:"what-is-chaos-as-a-service",level:2},{value:"Developing Chaos Mesh towards CaaS",id:"developing-chaos-mesh-towards-caas",level:2},{value:"Refactor Chaos Dashboard",id:"refactor-chaos-dashboard",level:3},{value:"Refactor chaosd",id:"refactor-chaosd",level:3},{value:"Improve observability",id:"improve-observability",level:3},{value:"Further improvements needed",id:"further-improvements-needed",level:4},{value:"Other proposals for Chaos Mesh",id:"other-proposals-for-chaos-mesh",level:2},{value:"Orchestration",id:"orchestration",level:3},{value:"Data format",id:"data-format",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Integration with other Chaos tools",id:"integration-with-other-chaos-tools",level:3},{value:"Voices from the community",id:"voices-from-the-community",level:2},{value:"Physical node",id:"physical-node",level:3},{value:"Container",id:"container",level:3},{value:"Application",id:"application",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Chaos engineering tools",src:o(20211).A+"",width:"3126",height:"1043"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://chaos-mesh.org/",children:"Chaos Mesh"})," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting all types of faults into Pods, network, file system, and even the kernel."]}),"\n",(0,n.jsx)(s.p,{children:"Since it was open-sourced and accepted by the Cloud Native Computing Foundation (CNCF) as a sandbox project, Chaos Mesh has attracted contributors worldwide and helped users test their systems. Yet it still has a lot of room for improvement:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"It needs to improve usability. Some features are complicated to use. For example, when you apply a chaos experiment, you often have to manually check whether the experiment has started."}),"\n",(0,n.jsxs)(s.li,{children:["It is mostly for Kubernetes environments. Because Chaos Mesh can't manage multiple Kubernetes clusters, you need to deploy Chaos Mesh for each Kubernetes cluster. Though ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaosd",children:"chaosd"})," supports running chaos experiments on physical machines, the features are quite limited, and command line usage is not user friendly."]}),"\n",(0,n.jsx)(s.li,{children:"It doesn't allow plugins. To apply a customized chaos experiment, you have to alter the source code. Moreover, Chaos Mesh only supports Golang."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Admittedly, Chaos Mesh is a first-rate Chaos Engineering platform, but is still a long way from offering Chaos as a Service (CaaS). Therefore, at ",(0,n.jsx)(s.a,{href:"https://pingcap.com/community-activity/tidb-hackathon-2020/",children:"TiDB Hackathon 2020"}),", ",(0,n.jsx)(s.strong,{children:"we made changes to Chaos Mesh's architecture, moving it one step closer toward CaaS"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"In this article, I'll talk about what CaaS is, how we achieve it with Chaos Mesh, and our plans and lessons learned. I hope you find our experience helpful in building your own Chaos Engineering system."}),"\n",(0,n.jsx)(s.h2,{id:"what-is-chaos-as-a-service",children:"What is Chaos as a Service?"}),"\n",(0,n.jsxs)(s.p,{children:["As Matt Fornaciari, co-founder of Gremlin, ",(0,n.jsx)(s.a,{href:"https://jaxenter.com/chaos-engineering-service-144113.html",children:"puts it"}),', CaaS "means you will get an intuitive UI, customer support, out-of-the-box integrations, and everything else you need to get experimenting in a matter of minutes."']}),"\n",(0,n.jsx)(s.p,{children:"From our perspective, CaaS should offer:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"A unified console for management, where you can edit the configuration and create chaos experiments."}),"\n",(0,n.jsx)(s.li,{children:"Visualized metrics for you to see the experiment status."}),"\n",(0,n.jsx)(s.li,{children:"Operations to pause or archive experiments."}),"\n",(0,n.jsx)(s.li,{children:"Simple interaction. You can easily drag and drop the objects to orchestrate your experiments."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Some companies already adapted Chaos Mesh to meet their own needs, such as ",(0,n.jsx)(s.a,{href:"https://pingcap.com/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",children:"NetEase Fuxi AI Lab"})," and FreeWheel, making it a mock-up for CaaS."]}),"\n",(0,n.jsx)(s.h2,{id:"developing-chaos-mesh-towards-caas",children:"Developing Chaos Mesh towards CaaS"}),"\n",(0,n.jsxs)(s.p,{children:["Based on our understanding of CaaS, we refined the architecture of Chaos Mesh during Hackathon, including improved support for different systems and better observability. You can check out our code in ",(0,n.jsx)(s.a,{href:"https://github.com/wuntun/chaos-mesh/tree/caas",children:"wuntun/chaos-mesh"})," and ",(0,n.jsx)(s.a,{href:"https://github.com/wuntun/chaosd/tree/caas",children:"wuntun/chaosd"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"refactor-chaos-dashboard",children:"Refactor Chaos Dashboard"}),"\n",(0,n.jsx)(s.p,{children:"The current Chaos Mesh architecture is suited for individual Kubernetes clusters. Chaos Dashboard, the web UI, is bound to a specified Kubernetes environment:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Chaos Mesh architecture",src:o(13174).A+"",width:"1635",height:"739"})}),"\n",(0,n.jsx)("p",{className:"caption",children:"The current Chaos Mesh architecture"}),"\n",(0,n.jsxs)(s.p,{children:["During this refactor, ",(0,n.jsx)(s.strong,{children:"to allow Chaos Dashboard to manage multiple Kubernetes clusters, we separate Chaos Dashboard from the main architecture"}),". Now, if you deploy Chaos Dashboard outside of the Kubernetes cluster, you can add the cluster to Chaos Dashboard via the web UI. If you deploy Chaos Dashboard inside the cluster, it automatically obtains the cluster information through environment variables."]}),"\n",(0,n.jsxs)(s.p,{children:["You can register Chaos Mesh (technically, the Kubernetes configuration) in Chaos Dashboard or ask ",(0,n.jsx)(s.code,{children:"chaos-controller-manager"})," to report to Chaos Dashboard via configuration. Chaos Dashboard and ",(0,n.jsx)(s.code,{children:"chaos-controller-manager"})," interact via CustomResourceDefinitions (CRDs). When ",(0,n.jsx)(s.code,{children:"chaos-controller-manager"})," finds a Chaos Mesh CRD event, it invokes ",(0,n.jsx)(s.code,{children:"chaos-daemon"})," to carry out the related chaos experiment. Therefore, Chaos Dashboard can manage experiments by operating on CRDs."]}),"\n",(0,n.jsx)(s.h3,{id:"refactor-chaosd",children:"Refactor chaosd"}),"\n",(0,n.jsx)(s.p,{children:"chaosd is a toolkit for running chaos experiments on physical machines. Previously, it was only a command line tool and had limited features."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"chaosd, a Chaos Engineering command line tool",src:o(66953).A+"",width:"1331",height:"561"})}),"\n",(0,n.jsx)("p",{className:"caption",children:"Previously, chaosd was a command line tool"}),"\n",(0,n.jsxs)(s.p,{children:["During the refactoring, ",(0,n.jsx)(s.strong,{children:"we enabled chaosd to support the RESTful API and enhanced its services so that it can configure chaos experiments by parsing CRD-format JSON or YAML files"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Now, chaosd can register itself to Chaos Dashboard via configuration and send regular heartbeats to Chaos Dashboard. With the heartbeat signals, Chaos Dashboard can manage the chaosd node status. You can also add chaosd nodes to Chaos Dashboard via the web UI."}),"\n",(0,n.jsxs)(s.p,{children:["Moreover, ",(0,n.jsx)(s.strong,{children:"chaosd can now schedule chaos experiments at specified time and manage experiment lifecycles, which unifies the user experience on Kubernetes and on physical machines"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"With new Chaos Dashboard and chaosd, the optimized architecture of Chaos Mesh is as follows:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Chaos Mesh&#39;s optimized architecture",src:o(92122).A+"",width:"1482",height:"824"})}),"\n",(0,n.jsx)("p",{className:"caption",children:"Chaos Mesh's optimized architecture"}),"\n",(0,n.jsx)(s.h3,{id:"improve-observability",children:"Improve observability"}),"\n",(0,n.jsx)(s.p,{children:"Another improvement is observability, namely how to tell if an experiment is carried out successfully."}),"\n",(0,n.jsxs)(s.p,{children:["Before the improvement, you had to manually check the experiment metrics. If you injected ",(0,n.jsx)(s.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/chaos_experiments/stresschaos",children:"StressChaos"})," into a Pod, you had to enter the Pod to see if there was a ",(0,n.jsx)(s.code,{children:"stress-ng"})," process and then use ",(0,n.jsx)(s.code,{children:"top"})," commands to check CPU and memory utilization. These metrics told you whether your StressChaos experiment was created successfully."]}),"\n",(0,n.jsxs)(s.p,{children:["To streamline the process, we now integrate ",(0,n.jsx)(s.code,{children:"node_exporter"})," into ",(0,n.jsx)(s.code,{children:"chaos-daemon"})," and chaosd to collect node metrics. We also deploy ",(0,n.jsx)(s.code,{children:"kube-state-metrics"})," in the Kubernetes cluster, combined with cadvisor, to collect Kubernetes metrics. The collected metrics are saved and visualized by Prometheus and Grafana, which provide a simple method for you to check the experiment status."]}),"\n",(0,n.jsx)(s.h4,{id:"further-improvements-needed",children:"Further improvements needed"}),"\n",(0,n.jsx)(s.p,{children:"Overall, metrics aim to help you:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Confirm that chaos is injected."}),"\n",(0,n.jsx)(s.li,{children:"Observe the chaos impact on the service and make periodic analysis."}),"\n",(0,n.jsx)(s.li,{children:"Respond to exceptional chaos events."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To achieve these goals, the system needs to monitor the experiment data metrics, the ordinary metrics, and the experiment events. Chaos Mesh still needs to improve:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Experiment data metrics, such as the exact latency duration of the injected network latency and the specific load of the simulated workload."}),"\n",(0,n.jsx)(s.li,{children:"Experiment events; that is, the Kubernetes events of creating, deleting, and running experiments."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Here is a good example of metrics from ",(0,n.jsx)(s.a,{href:"https://github.com/litmuschaos/chaos-exporter#example-metrics",children:"Litmus"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"other-proposals-for-chaos-mesh",children:"Other proposals for Chaos Mesh"}),"\n",(0,n.jsx)(s.p,{children:"Because of the limited time at Hackathon, we didn't finish all our plans. Here are some of our proposals for the Chaos Mesh community to consider in the future."}),"\n",(0,n.jsx)(s.h3,{id:"orchestration",children:"Orchestration"}),"\n",(0,n.jsx)(s.p,{children:"A closed loop of Chaos Engineering includes four steps: exploring chaos, discovering deficiencies in the system, analyzing root causes, and sending feedback for improvement."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"A closed loop of Chaos Engineering",src:o(63934).A+"",width:"1338",height:"484"})}),"\n",(0,n.jsx)("p",{className:"caption",children:"A closed loop of Chaos Engineering"}),"\n",(0,n.jsxs)(s.p,{children:["However, ",(0,n.jsx)(s.strong,{children:"most of the current open source Chaos Engineering tools only focus on exploration and do not provide pragmatic feedback."})," Based on the improved observability component, we can monitor chaos experiments in real time and compare and analyze the experiment results."]}),"\n",(0,n.jsxs)(s.p,{children:["With these results, we will be able to realize a closed loop by adding another important component: orchestration. The Chaos Mesh community already proposed a ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/rfcs/pull/10/files",children:"Workflow"})," feature, which enables you to easily orchestrate and call back chaos experiments or conveniently integrate Chaos Mesh with other systems. You can run chaos experiments in the CI/CD phase or after a canary release."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Combining observability and orchestration makes a closed feedback loop for Chaos Engineering."})," If you were to launch a 100 ms network latency test on a Pod, you could observe the latency change using the observability component and check if the Pod service is still available using PromQL or other DSL based on orchestration. If the service was unavailable, you may conclude that the service is unavailable when the latency is >= 100 ms."]}),"\n",(0,n.jsx)(s.p,{children:"But 100 ms is not the threshold of your service; you need to know what is the largest latency your service can handle. By orchestrating the value of the chaos experiment, you'll know what is the threshold value you must ensure to meet your service-level objectives. Also, you'll find out the service performance under different network conditions and whether they meet your expectations."}),"\n",(0,n.jsx)(s.h3,{id:"data-format",children:"Data format"}),"\n",(0,n.jsx)(s.p,{children:"Chaos Mesh uses CRDs to define its chaos objects. If we can convert CRDs to JSON files, we can achieve communication between components."}),"\n",(0,n.jsx)(s.p,{children:"In terms of data format, chaosd just consumes and registers CRD data in JSON format. If a chaos tool can consume CRD data and register itself, it can run chaos experiments in different scenarios."}),"\n",(0,n.jsx)(s.h3,{id:"plugins",children:"Plugins"}),"\n",(0,n.jsxs)(s.p,{children:["Chaos Mesh has limited support for plugins. You can only ",(0,n.jsx)(s.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/development_guides/develop_a_new_chaos/",children:"add a new Chaos"})," by registering a CRD in Kubernetes API. This brings about two problems:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"You must develop the plugin using Golang, the same language in which Chaos Mesh is written."}),"\n",(0,n.jsx)(s.li,{children:"You must merge the extended code into the Chaos Mesh project. Because Chaos Mesh doesn't have a security mechanism like Berkeley Packet Filter (BPF), merging plugin code may introduce extra risks."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To enable full plugin support, we need to explore a new method to add plugins. As Chaos Mesh essentially carries out chaos experiments based on CRD, a chaos experiment only requires generating, listening to, and deleting CRDs. In this regard, we have several ideas worth trying:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Develop a controller or operator to manage CRDs."}),"\n",(0,n.jsxs)(s.li,{children:["Handle CRD events uniformly and operate on CRDs via HTTP callback. This method only uses HTTP APIs, with no requirement on Golang. For an example, see ",(0,n.jsx)(s.a,{href:"https://github.com/summerwind/whitebox-controller",children:"Whitebox Controller"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Use WebAssembly (Wasm). When you need to call chaos experiment logic, just call the Wasm program."}),"\n",(0,n.jsxs)(s.li,{children:["Use SQL to query the chaos experiment status. Because Chaos Mesh is based on CRDs, you can use SQL to operate on Kubernetes. Examples include ",(0,n.jsx)(s.a,{href:"https://github.com/xuxinkun/kubesql",children:"Presto connector"})," and ",(0,n.jsx)(s.a,{href:"https://github.com/aquasecurity/kube-query",children:"osquery extension"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Use SDK-based extensions, such as ",(0,n.jsx)(s.a,{href:"https://docs.chaostoolkit.org/reference/api/experiment/",children:"Chaos Toolkit"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"integration-with-other-chaos-tools",children:"Integration with other Chaos tools"}),"\n",(0,n.jsx)(s.p,{children:"For real-world systems, a single Chaos Engineering tool can hardly exhaust all possible use cases. That's why integrating with other chaos tools can make the Chaos Engineering ecosystem more powerful."}),"\n",(0,n.jsxs)(s.p,{children:["There are numerous Chaos Engineering tools on the market. Litmus's ",(0,n.jsx)(s.a,{href:"https://github.com/litmuschaos/litmus-go/tree/2.14.1/chaoslib/powerfulseal",children:"Kubernetes implementation"})," is based on ",(0,n.jsx)(s.a,{href:"https://github.com/powerfulseal/powerfulseal",children:"PowerfulSeal"}),", while its ",(0,n.jsx)(s.a,{href:"https://github.com/litmuschaos/litmus-go/tree/2.14.1/chaoslib/pumba",children:"container implementation"})," is based on ",(0,n.jsx)(s.a,{href:"https://github.com/alexei-led/pumba",children:"Pumba"}),". ",(0,n.jsx)(s.a,{href:"https://github.com/cloud-bulldozer/kraken",children:"Kraken"})," focuses on Kubernetes, ",(0,n.jsx)(s.a,{href:"https://github.com/amzn/awsssmchaosrunner",children:"AWSSSMChaosRunner"})," focuses on AWS, and ",(0,n.jsx)(s.a,{href:"https://github.com/shopify/toxiproxy",children:"Toxiproxy"})," targets TCP. There are also merging projects based on ",(0,n.jsx)(s.a,{href:"https://docs.google.com/presentation/d/1gMlmXqH6ufnb8eNO10WqVjqrPRGAO5-1S1zjcGo1Zr4/edit#slide=id.g58453c664c_2_75",children:"Envoy"})," and Istio."]}),"\n",(0,n.jsxs)(s.p,{children:["To manage the various chaos tools, we may need a uniform pattern, such as ",(0,n.jsx)(s.a,{href:"https://hub.litmuschaos.io/",children:"Chaos Hub"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"voices-from-the-community",children:"Voices from the community"}),"\n",(0,n.jsx)(s.p,{children:"Here, we'd like to share how a leading cyber security company in China as well as a Chaos Mesh user, adapts Chaos Mesh to meet their needs. Their adaptation has three aspects: physical node, container, and application."}),"\n",(0,n.jsx)(s.h3,{id:"physical-node",children:"Physical node"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Support executing scripts on physical servers. You can configure the script directory in CRDs and run your scripts using ",(0,n.jsx)(s.code,{children:"chaos-daemon"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Simulate reboot, shutdown, and kernel panic using the customized script."}),"\n",(0,n.jsx)(s.li,{children:"Shut down the node's NIC using the customized script."}),"\n",(0,n.jsx)(s.li,{children:'Create frequent context switching using sysbench to simulate the "noisy neighbor" effect.'}),"\n",(0,n.jsxs)(s.li,{children:["Intercept the container's system call using BPF's ",(0,n.jsx)(s.code,{children:"seccomp"}),". This is achieved by passing and filtering PIDs."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"container",children:"Container"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Randomly change the number of Deployment replicas to test if the application's traffic is abnormal."}),"\n",(0,n.jsx)(s.li,{children:"Embed based on CRD objects: fill Ingress objects in chaos CRDs to simulate the speed limit of the interface."}),"\n",(0,n.jsx)(s.li,{children:"Embed based on CRD objects: fill Cilium network policy objects in chaos CRDs to simulate fluctuating network conditions."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"application",children:"Application"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Support running customized jobs. Currently, Chaos Mesh injects chaos using ",(0,n.jsx)(s.code,{children:"chaos-daemon"}),", which doesn't guarantee fairness and affinity of scheduling. To address this issue, we can use ",(0,n.jsx)(s.code,{children:"chaos-controller-manager"})," to directly create jobs for different CRDs."]}),"\n",(0,n.jsxs)(s.li,{children:["Support running ",(0,n.jsx)(s.a,{href:"https://github.com/postmanlabs/newman",children:"Newman"})," in customized jobs to randomly change HTTP parameters. This is to implement chaos experiments on the HTTP interface, which happens when a user performs exceptional behaviors."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(s.p,{children:"Traditional fault testing targets specific points in the system that are anticipated to be vulnerable. It is often an assertion: a specific condition produces a specific result."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:'Chaos Engineering is more powerful in that it helps you discover the "unknown unknowns."'})," By exploring in the broader domain, Chaos Engineering deepens your knowledge of the system being tested and unearths new information."]}),"\n",(0,n.jsxs)(s.p,{children:["To sum up, these are some of our personal thoughts and practice on Chaos Engineering and Chaos Mesh. Our Hackathon project is not ready for production yet, but we hope to shed some light on CaaS and draft a promising roadmap for Chaos Mesh. If you're interested in building Chaos as a Service, ",(0,n.jsx)(s.a,{href:"https://slack.cncf.io/",children:"join our Slack"})," (#project-chaos-mesh)!"]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},20211:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/chaos-engineering-tools-as-a-service-018f1130dab4f321b60a8eccd366c0e1.jpeg"},92122:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/chaos-mesh-optimized-architecture-8887bf8ec188ff72990a48dd1b2735f8.jpeg"},13174:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/chaos-mesh-remake-architecture-11dd1c3b15d9508739904ec7571972fb.jpeg"},66953:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/chaosd-chaos-engineering-command-line-tool-b516d67d95f896a548a90492e516e870.jpeg"},63934:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/closed-loop-of-chaos-engineering-3dc83a5a0d542f1cb6a873130b48bd22.jpeg"},6383:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>r});var n=o(30758);const a={},t=n.createContext(a);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);