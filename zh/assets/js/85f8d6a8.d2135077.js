"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[31166],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var h=o.createContext({}),l=function(e){var t=o.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,h=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=s,d=p["".concat(h,".").concat(m)]||p[m]||u[m]||n;return a?o.createElement(d,r(r({ref:t},c),{},{components:a})):o.createElement(d,r({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,r=new Array(n);r[0]=p;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<n;l++)r[l]=a[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=a(87462),s=(a(67294),a(3905));const n={slug:"/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",author:"Chang Yu, Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},r=void 0,i={permalink:"/zh/blog/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-06-25-chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service.md",source:"@site/blog/2021-06-25-chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service.md",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",description:"Chaos engineering tools",date:"2021-06-25T00:00:00.000Z",formattedDate:"2021\u5e746\u670825\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"}],readingTime:10.085,hasTruncateMarker:!0,authors:[{name:"Chang Yu, Xiang Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-remake-one-step-closer-towards-chaos-as-a-service",title:"Chaos Mesh Remake: One Step Closer toward Chaos as a Service",author:"Chang Yu, Xiang Wang",author_title:"Contributor of Chaos Mesh",author_url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-engineering-tools-as-a-service.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"How to efficiently stress test Pod memory",permalink:"/zh/blog/how-to-efficiently-stress-test-pod-memory"},nextItem:{title:"From a Newbie in Software Engineering to a Graduated LFX-Mentee",permalink:"/zh/blog/lfx-mentorship-enriching-awschaos"}},h={authorsImageUrls:[void 0]},l=[{value:"What is Chaos as a Service?",id:"what-is-chaos-as-a-service",level:2},{value:"Developing Chaos Mesh towards CaaS",id:"developing-chaos-mesh-towards-caas",level:2},{value:"Refactor Chaos Dashboard",id:"refactor-chaos-dashboard",level:3},{value:"Refactor chaosd",id:"refactor-chaosd",level:3},{value:"Improve observability",id:"improve-observability",level:3},{value:"Further improvements needed",id:"further-improvements-needed",level:4},{value:"Other proposals for Chaos Mesh",id:"other-proposals-for-chaos-mesh",level:2},{value:"Orchestration",id:"orchestration",level:3},{value:"Data format",id:"data-format",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Integration with other Chaos tools",id:"integration-with-other-chaos-tools",level:3},{value:"Voices from the community",id:"voices-from-the-community",level:2},{value:"Physical node",id:"physical-node",level:3},{value:"Container",id:"container",level:3},{value:"Application",id:"application",level:3},{value:"Summary",id:"summary",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos engineering tools",src:a(65081).Z,width:"3126",height:"1043"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting all types of faults into Pods, network, file system, and even the kernel."),(0,s.kt)("p",null,"Since it was open-sourced and accepted by the Cloud Native Computing Foundation (CNCF) as a sandbox project, Chaos Mesh has attracted contributors worldwide and helped users test their systems. Yet it still has a lot of room for improvement:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It needs to improve usability. Some features are complicated to use. For example, when you apply a chaos experiment, you often have to manually check whether the experiment has started."),(0,s.kt)("li",{parentName:"ul"},"It is mostly for Kubernetes environments. Because Chaos Mesh can't manage multiple Kubernetes clusters, you need to deploy Chaos Mesh for each Kubernetes cluster. Though ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaosd"},"chaosd")," supports running chaos experiments on physical machines, the features are quite limited, and command line usage is not user friendly."),(0,s.kt)("li",{parentName:"ul"},"It doesn't allow plugins. To apply a customized chaos experiment, you have to alter the source code. Moreover, Chaos Mesh only supports Golang.")),(0,s.kt)("p",null,"Admittedly, Chaos Mesh is a first-rate Chaos Engineering platform, but is still a long way from offering Chaos as a Service (CaaS). Therefore, at ",(0,s.kt)("a",{parentName:"p",href:"https://pingcap.com/community-activity/tidb-hackathon-2020/"},"TiDB Hackathon 2020"),", ",(0,s.kt)("strong",{parentName:"p"},"we made changes to Chaos Mesh's architecture, moving it one step closer toward CaaS"),"."),(0,s.kt)("p",null,"In this article, I'll talk about what CaaS is, how we achieve it with Chaos Mesh, and our plans and lessons learned. I hope you find our experience helpful in building your own Chaos Engineering system."),(0,s.kt)("h2",{id:"what-is-chaos-as-a-service"},"What is Chaos as a Service?"),(0,s.kt)("p",null,"As Matt Fornaciari, co-founder of Gremlin, ",(0,s.kt)("a",{parentName:"p",href:"https://jaxenter.com/chaos-engineering-service-144113.html"},"puts it"),', CaaS "means you will get an intuitive UI, customer support, out-of-the-box integrations, and everything else you need to get experimenting in a matter of minutes."'),(0,s.kt)("p",null,"From our perspective, CaaS should offer:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A unified console for management, where you can edit the configuration and create chaos experiments."),(0,s.kt)("li",{parentName:"ul"},"Visualized metrics for you to see the experiment status."),(0,s.kt)("li",{parentName:"ul"},"Operations to pause or archive experiments."),(0,s.kt)("li",{parentName:"ul"},"Simple interaction. You can easily drag and drop the objects to orchestrate your experiments.")),(0,s.kt)("p",null,"Some companies already adapted Chaos Mesh to meet their own needs, such as ",(0,s.kt)("a",{parentName:"p",href:"https://pingcap.com/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing"},"NetEase Fuxi AI Lab")," and FreeWheel, making it a mock-up for CaaS."),(0,s.kt)("h2",{id:"developing-chaos-mesh-towards-caas"},"Developing Chaos Mesh towards CaaS"),(0,s.kt)("p",null,"Based on our understanding of CaaS, we refined the architecture of Chaos Mesh during Hackathon, including improved support for different systems and better observability. You can check out our code in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wuntun/chaos-mesh/tree/caas"},"wuntun/chaos-mesh")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wuntun/chaosd/tree/caas"},"wuntun/chaosd"),"."),(0,s.kt)("h3",{id:"refactor-chaos-dashboard"},"Refactor Chaos Dashboard"),(0,s.kt)("p",null,"The current Chaos Mesh architecture is suited for individual Kubernetes clusters. Chaos Dashboard, the web UI, is bound to a specified Kubernetes environment:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos Mesh architecture",src:a(5512).Z,width:"1635",height:"739"})),(0,s.kt)("p",{className:"caption-center"},"The current Chaos Mesh architecture"),(0,s.kt)("p",null,"During this refactor, ",(0,s.kt)("strong",{parentName:"p"},"to allow Chaos Dashboard to manage multiple Kubernetes clusters, we separate Chaos Dashboard from the main architecture"),". Now, if you deploy Chaos Dashboard outside of the Kubernetes cluster, you can add the cluster to Chaos Dashboard via the web UI. If you deploy Chaos Dashboard inside the cluster, it automatically obtains the cluster information through environment variables."),(0,s.kt)("p",null,"You can register Chaos Mesh (technically, the Kubernetes configuration) in Chaos Dashboard or ask ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," to report to Chaos Dashboard via configuration. Chaos Dashboard and ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," interact via CustomResourceDefinitions (CRDs). When ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-controller-manager")," finds a Chaos Mesh CRD event, it invokes ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," to carry out the related chaos experiment. Therefore, Chaos Dashboard can manage experiments by operating on CRDs."),(0,s.kt)("h3",{id:"refactor-chaosd"},"Refactor chaosd"),(0,s.kt)("p",null,"chaosd is a toolkit for running chaos experiments on physical machines. Previously, it was only a command line tool and had limited features."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"chaosd, a Chaos Engineering command line tool",src:a(66920).Z,width:"1331",height:"561"})),(0,s.kt)("p",{className:"caption-center"},"Previously, chaosd was a command line tool"),(0,s.kt)("p",null,"During the refactoring, ",(0,s.kt)("strong",{parentName:"p"},"we enabled chaosd to support the RESTful API and enhanced its services so that it can configure chaos experiments by parsing CRD-format JSON or YAML files"),"."),(0,s.kt)("p",null,"Now, chaosd can register itself to Chaos Dashboard via configuration and send regular heartbeats to Chaos Dashboard. With the heartbeat signals, Chaos Dashboard can manage the chaosd node status. You can also add chaosd nodes to Chaos Dashboard via the web UI."),(0,s.kt)("p",null,"Moreover, ",(0,s.kt)("strong",{parentName:"p"},"chaosd can now schedule chaos experiments at specified time and manage experiment lifecycles, which unifies the user experience on Kubernetes and on physical machines"),"."),(0,s.kt)("p",null,"With new Chaos Dashboard and chaosd, the optimized architecture of Chaos Mesh is as follows:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos Mesh&#39;s optimized architecture",src:a(92192).Z,width:"1482",height:"824"})),(0,s.kt)("p",{className:"caption-center"},"Chaos Mesh's optimized architecture"),(0,s.kt)("h3",{id:"improve-observability"},"Improve observability"),(0,s.kt)("p",null,"Another improvement is observability, namely how to tell if an experiment is carried out successfully."),(0,s.kt)("p",null,"Before the improvement, you had to manually check the experiment metrics. If you injected ",(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/chaos_experiments/stresschaos"},"StressChaos")," into a Pod, you had to enter the Pod to see if there was a ",(0,s.kt)("inlineCode",{parentName:"p"},"stress-ng")," process and then use ",(0,s.kt)("inlineCode",{parentName:"p"},"top")," commands to check CPU and memory utilization. These metrics told you whether your StressChaos experiment was created successfully."),(0,s.kt)("p",null,"To streamline the process, we now integrate ",(0,s.kt)("inlineCode",{parentName:"p"},"node_exporter")," into ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-daemon")," and chaosd to collect node metrics. We also deploy ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-state-metrics")," in the Kubernetes cluster, combined with cadvisor, to collect Kubernetes metrics. The collected metrics are saved and visualized by Prometheus and Grafana, which provide a simple method for you to check the experiment status."),(0,s.kt)("h4",{id:"further-improvements-needed"},"Further improvements needed"),(0,s.kt)("p",null,"Overall, metrics aim to help you:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Confirm that chaos is injected."),(0,s.kt)("li",{parentName:"ul"},"Observe the chaos impact on the service and make periodic analysis."),(0,s.kt)("li",{parentName:"ul"},"Respond to exceptional chaos events.")),(0,s.kt)("p",null,"To achieve these goals, the system needs to monitor the experiment data metrics, the ordinary metrics, and the experiment events. Chaos Mesh still needs to improve:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Experiment data metrics, such as the exact latency duration of the injected network latency and the specific load of the simulated workload."),(0,s.kt)("li",{parentName:"ul"},"Experiment events; that is, the Kubernetes events of creating, deleting, and running experiments.")),(0,s.kt)("p",null,"Here is a good example of metrics from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/litmuschaos/chaos-exporter#example-metrics"},"Litmus"),"."),(0,s.kt)("h2",{id:"other-proposals-for-chaos-mesh"},"Other proposals for Chaos Mesh"),(0,s.kt)("p",null,"Because of the limited time at Hackathon, we didn't finish all our plans. Here are some of our proposals for the Chaos Mesh community to consider in the future."),(0,s.kt)("h3",{id:"orchestration"},"Orchestration"),(0,s.kt)("p",null,"A closed loop of Chaos Engineering includes four steps: exploring chaos, discovering deficiencies in the system, analyzing root causes, and sending feedback for improvement."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A closed loop of Chaos Engineering",src:a(16016).Z,width:"1338",height:"484"})),(0,s.kt)("p",{className:"caption-center"},"A closed loop of Chaos Engineering"),(0,s.kt)("p",null,"However, ",(0,s.kt)("strong",{parentName:"p"},"most of the current open source Chaos Engineering tools only focus on exploration and do not provide pragmatic feedback.")," Based on the improved observability component, we can monitor chaos experiments in real time and compare and analyze the experiment results."),(0,s.kt)("p",null,"With these results, we will be able to realize a closed loop by adding another important component: orchestration. The Chaos Mesh community already proposed a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/rfcs/pull/10/files"},"Workflow")," feature, which enables you to easily orchestrate and call back chaos experiments or conveniently integrate Chaos Mesh with other systems. You can run chaos experiments in the CI/CD phase or after a canary release."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Combining observability and orchestration makes a closed feedback loop for Chaos Engineering.")," If you were to launch a 100 ms network latency test on a Pod, you could observe the latency change using the observability component and check if the Pod service is still available using PromQL or other DSL based on orchestration. If the service was unavailable, you may conclude that the service is unavailable when the latency is >= 100 ms."),(0,s.kt)("p",null,"But 100 ms is not the threshold of your service; you need to know what is the largest latency your service can handle. By orchestrating the value of the chaos experiment, you'll know what is the threshold value you must ensure to meet your service-level objectives. Also, you'll find out the service performance under different network conditions and whether they meet your expectations."),(0,s.kt)("h3",{id:"data-format"},"Data format"),(0,s.kt)("p",null,"Chaos Mesh uses CRDs to define its chaos objects. If we can convert CRDs to JSON files, we can achieve communication between components."),(0,s.kt)("p",null,"In terms of data format, chaosd just consumes and registers CRD data in JSON format. If a chaos tool can consume CRD data and register itself, it can run chaos experiments in different scenarios."),(0,s.kt)("h3",{id:"plugins"},"Plugins"),(0,s.kt)("p",null,"Chaos Mesh has limited support for plugins. You can only ",(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/development_guides/develop_a_new_chaos/"},"add a new Chaos")," by registering a CRD in Kubernetes API. This brings about two problems:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You must develop the plugin using Golang, the same language in which Chaos Mesh is written."),(0,s.kt)("li",{parentName:"ul"},"You must merge the extended code into the Chaos Mesh project. Because Chaos Mesh doesn't have a security mechanism like Berkeley Packet Filter (BPF), merging plugin code may introduce extra risks.")),(0,s.kt)("p",null,"To enable full plugin support, we need to explore a new method to add plugins. As Chaos Mesh essentially carries out chaos experiments based on CRD, a chaos experiment only requires generating, listening to, and deleting CRDs. In this regard, we have several ideas worth trying:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Develop a controller or operator to manage CRDs."),(0,s.kt)("li",{parentName:"ul"},"Handle CRD events uniformly and operate on CRDs via HTTP callback. This method only uses HTTP APIs, with no requirement on Golang. For an example, see ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/summerwind/whitebox-controller"},"Whitebox Controller"),"."),(0,s.kt)("li",{parentName:"ul"},"Use WebAssembly (Wasm). When you need to call chaos experiment logic, just call the Wasm program."),(0,s.kt)("li",{parentName:"ul"},"Use SQL to query the chaos experiment status. Because Chaos Mesh is based on CRDs, you can use SQL to operate on Kubernetes. Examples include ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/xuxinkun/kubesql"},"Presto connector")," and ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/kube-query"},"osquery extension"),"."),(0,s.kt)("li",{parentName:"ul"},"Use SDK-based extensions, such as ",(0,s.kt)("a",{parentName:"li",href:"https://docs.chaostoolkit.org/reference/api/experiment/"},"Chaos Toolkit"),".")),(0,s.kt)("h3",{id:"integration-with-other-chaos-tools"},"Integration with other Chaos tools"),(0,s.kt)("p",null,"For real-world systems, a single Chaos Engineering tool can hardly exhaust all possible use cases. That's why integrating with other chaos tools can make the Chaos Engineering ecosystem more powerful."),(0,s.kt)("p",null,"There are numerous Chaos Engineering tools on the market. Litmus's ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/litmuschaos/litmus-go/tree/master/chaoslib/powerfulseal"},"Kubernetes implementation")," is based on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/powerfulseal/powerfulseal"},"PowerfulSeal"),", while its ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/litmuschaos/litmus-go/tree/master/chaoslib/pumba"},"container implementation")," is based on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/alexei-led/pumba"},"Pumba"),". ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cloud-bulldozer/kraken"},"Kraken")," focuses on Kubernetes, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/amzn/awsssmchaosrunner"},"AWSSSMChaosRunner")," focuses on AWS, and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/shopify/toxiproxy"},"Toxiproxy")," targets TCP. There are also merging projects based on ",(0,s.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1gMlmXqH6ufnb8eNO10WqVjqrPRGAO5-1S1zjcGo1Zr4/edit#slide=id.g58453c664c_2_75"},"Envoy")," and Istio."),(0,s.kt)("p",null,"To manage the various chaos tools, we may need a uniform pattern, such as ",(0,s.kt)("a",{parentName:"p",href:"https://hub.litmuschaos.io/"},"Chaos Hub"),"."),(0,s.kt)("h2",{id:"voices-from-the-community"},"Voices from the community"),(0,s.kt)("p",null,"Here, we'd like to share how a leading cyber security company in China as well as a Chaos Mesh user, adapts Chaos Mesh to meet their needs. Their adaptation has three aspects: physical node, container, and application."),(0,s.kt)("h3",{id:"physical-node"},"Physical node"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Support executing scripts on physical servers. You can configure the script directory in CRDs and run your scripts using ",(0,s.kt)("inlineCode",{parentName:"li"},"chaos-daemon"),"."),(0,s.kt)("li",{parentName:"ul"},"Simulate reboot, shutdown, and kernel panic using the customized script."),(0,s.kt)("li",{parentName:"ul"},"Shut down the node's NIC using the customized script."),(0,s.kt)("li",{parentName:"ul"},'Create frequent context switching using sysbench to simulate the "noisy neighbor" effect.'),(0,s.kt)("li",{parentName:"ul"},"Intercept the container's system call using BPF's ",(0,s.kt)("inlineCode",{parentName:"li"},"seccomp"),". This is achieved by passing and filtering PIDs.")),(0,s.kt)("h3",{id:"container"},"Container"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Randomly change the number of Deployment replicas to test if the application's traffic is abnormal."),(0,s.kt)("li",{parentName:"ul"},"Embed based on CRD objects: fill Ingress objects in chaos CRDs to simulate the speed limit of the interface."),(0,s.kt)("li",{parentName:"ul"},"Embed based on CRD objects: fill Cilium network policy objects in chaos CRDs to simulate fluctuating network conditions.")),(0,s.kt)("h3",{id:"application"},"Application"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Support running customized jobs. Currently, Chaos Mesh injects chaos using ",(0,s.kt)("inlineCode",{parentName:"li"},"chaos-daemon"),", which doesn't guarantee fairness and affinity of scheduling. To address this issue, we can use ",(0,s.kt)("inlineCode",{parentName:"li"},"chaos-controller-manager")," to directly create jobs for different CRDs."),(0,s.kt)("li",{parentName:"ul"},"Support running ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/postmanlabs/newman"},"Newman")," in customized jobs to randomly change HTTP parameters. This is to implement chaos experiments on the HTTP interface, which happens when a user performs exceptional behaviors.")),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"Traditional fault testing targets specific points in the system that are anticipated to be vulnerable. It is often an assertion: a specific condition produces a specific result."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'Chaos Engineering is more powerful in that it helps you discover the "unknown unknowns."')," By exploring in the broader domain, Chaos Engineering deepens your knowledge of the system being tested and unearths new information."),(0,s.kt)("p",null,"To sum up, these are some of our personal thoughts and practice on Chaos Engineering and Chaos Mesh. Our Hackathon project is not ready for production yet, but we hope to shed some light on CaaS and draft a promising roadmap for Chaos Mesh. If you're interested in building Chaos as a Service, ",(0,s.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"join our Slack")," (#project-chaos-mesh)!"))}u.isMDXComponent=!0},65081:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-engineering-tools-as-a-service-018f1130dab4f321b60a8eccd366c0e1.jpeg"},92192:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-optimized-architecture-8887bf8ec188ff72990a48dd1b2735f8.jpeg"},5512:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-remake-architecture-11dd1c3b15d9508739904ec7571972fb.jpeg"},66920:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaosd-chaos-engineering-command-line-tool-b516d67d95f896a548a90492e516e870.jpeg"},16016:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/closed-loop-of-chaos-engineering-3dc83a5a0d542f1cb6a873130b48bd22.jpeg"}}]);