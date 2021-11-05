"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6846],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(d,s(s({ref:t},h),{},{components:a})):n.createElement(d,s({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},69385:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return m}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),s=["components"],r={slug:"/building_automated_testing_framework",title:"Building an Automated Testing Framework Based on Chaos Mesh and Argo",author:"Ben Ye, Chengwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/automated_testing_framework.png",tags:["Chaos Mesh","Chaos Engineering","Test Automation"]},l=void 0,c={permalink:"/blog/building_automated_testing_framework",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-08-14-building_automated_testing_framework.md",source:"@site/blog/2020-08-14-building_automated_testing_framework.md",title:"Building an Automated Testing Framework Based on Chaos Mesh and Argo",description:"TiPocket - Automated Testing Framework",date:"2020-08-14T00:00:00.000Z",formattedDate:"August 14, 2020",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Test Automation",permalink:"/blog/tags/test-automation"}],readingTime:7.83,truncated:!0,authors:[{name:"Ben Ye, Chengwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/chaos-mesh/chaos-mesh/blob/master/MAINTAINERS.md",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],prevItem:{title:"chaos-mesh-action: Integrate Chaos Engineering into Your CI",permalink:"/blog/chaos-mesh-action-integrate-chaos-engineering-into-your-ci"},nextItem:{title:"Chaos Mesh Joins CNCF as a Sandbox Project",permalink:"/blog/chaos-mesh-join-cncf-sandbox-project"}},h={authorsImageUrls:[void 0]},u=[{value:"Why do we need TiPocket?",id:"why-do-we-need-tipocket",children:[]},{value:"How does it work",id:"how-does-it-work",children:[{value:"Injecting chaos - Chaos Mesh",id:"injecting-chaos---chaos-mesh",children:[]}]},{value:"Verifying chaos impacts: test cases",id:"verifying-chaos-impacts-test-cases",children:[{value:"Fuzz testing: SQLsmith",id:"fuzz-testing-sqlsmith",children:[]},{value:"Transaction consistency testing: Bank and Porcupine",id:"transaction-consistency-testing-bank-and-porcupine",children:[]},{value:"Transaction Isolation testing: Elle",id:"transaction-isolation-testing-elle",children:[]}]},{value:"Automating the chaos pipeline - Argo",id:"automating-the-chaos-pipeline---argo",children:[]},{value:"Visualizing the results: Loki",id:"visualizing-the-results-loki",children:[]},{value:"Putting them all together - TiPocket",id:"putting-them-all-together---tipocket",children:[]},{value:"Join us",id:"join-us",children:[]}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TiPocket - Automated Testing Framework",src:a(81731).Z})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is an open-source chaos engineering platform for Kubernetes. Although it provides rich capabilities to simulate abnormal system conditions, it still only solves a fraction of the Chaos Engineering puzzle. Besides fault injection, a full chaos engineering application consists of hypothesizing around defined steady states, running experiments in production, validating the system via test cases, and automating the testing."),(0,o.kt)("p",null,"This article describes how we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket"},"TiPocket"),", an automated testing framework to build a full Chaos Engineering testing loop for TiDB, our distributed database."),(0,o.kt)("h2",{id:"why-do-we-need-tipocket"},"Why do we need TiPocket?"),(0,o.kt)("p",null,"Before we can put a distributed system like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb"},"TiDB")," into production, we have to ensure that it is robust enough for day-to-day use. For this reason, several years ago we introduced Chaos Engineering into our testing framework. In our testing framework, we:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Observe the normal metrics and develop our testing hypothesis."),(0,o.kt)("li",{parentName:"ol"},"Inject a list of failures into TiDB."),(0,o.kt)("li",{parentName:"ol"},"Run various test cases to verify TiDB in fault scenarios."),(0,o.kt)("li",{parentName:"ol"},"Monitor and collect test results for analysis and diagnosis.")),(0,o.kt)("p",null,"This sounds like a solid process, and we\u2019ve used it for years. However, as TiDB evolves, the testing scale multiplies. We have multiple fault scenarios, against which dozens of test cases run in the Kubernetes testing cluster. Even with Chaos Mesh helping to inject failures, the remaining work can still be demanding\u2014not to mention the challenge of automating the pipeline to make the testing scalable and efficient."),(0,o.kt)("p",null,"This is why we built TiPocket, a fully-automated testing framework based on Kubernetes and Chaos Mesh. Currently, we mainly use it to test TiDB clusters. However, because of TiPocket\u2019s Kubernetes-friendly design and extensible interface, you can use Kubernetes\u2019 create and delete logic to easily support other applications."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,o.kt)("p",null,"Based on the above requirements, we need an automatic workflow that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#injecting-chaos---chaos-mesh"},"Injects chaos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#verifying-chaos-impacts-test-cases"},"Verifies the impact of that chaos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#automating-the-chaos-pipeline---argo"},"Automates the chaos pipeline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#visualizing-the-results-loki"},"Visualizes the results"))),(0,o.kt)("h3",{id:"injecting-chaos---chaos-mesh"},"Injecting chaos - Chaos Mesh"),(0,o.kt)("p",null,"Fault injection is the core chaos testing. In a distributed database, faults can happen anytime, anywhere\u2014from node crashes, network partitions, and file system failures, to kernel panics. This is where Chaos Mesh comes in."),(0,o.kt)("p",null,"Currently, TiPocket supports the following types of fault injection:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network"),": Simulates network partitions, random packet loss, disorder, duplication, or delay of links."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Time skew"),": Simulates clock skew of the container to be tested."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kill"),": Kills the specified pod, either randomly in a cluster or within a component (TiDB, TiKV, or Placement Driver (PD))."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"I/O"),": Injects I/O delays in TiDB\u2019s storage engine, TiKV, to identify I/O related issues.")),(0,o.kt)("p",null,"With fault injection handled, we need to think about verification. How do we make sure TiDB can survive these faults?"),(0,o.kt)("h2",{id:"verifying-chaos-impacts-test-cases"},"Verifying chaos impacts: test cases"),(0,o.kt)("p",null,"To validate how TiDB withstands chaos, we implemented dozens of test cases in TiPocket, combined with a variety of inspection tools. To give you an overview of how TiPocket verifies TiDB in the event of failures, consider the following test cases. These cases focus on SQL execution, transaction consistency, and transaction isolation."),(0,o.kt)("h3",{id:"fuzz-testing-sqlsmith"},"Fuzz testing: SQLsmith"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket/tree/master/pkg/go-sqlsmith"},"SQLsmith")," is a tool that generates random SQL queries. TiPocket creates a TiDB cluster and a MySQL instance.. The random SQL generated by SQLsmith is executed on TiDB and MySQL, and various faults are injected into the TiDB cluster to test. In the end, execution results are compared. If we detect inconsistencies, there are potential issues with our system."),(0,o.kt)("h3",{id:"transaction-consistency-testing-bank-and-porcupine"},"Transaction consistency testing: Bank and Porcupine"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket/tree/master/cmd/bank"},"Bank")," is a classical test case that simulates the transfer process in a banking system. Under snapshot isolation, all transfers must ensure that the total amount of all accounts must be consistent at every moment, even in the face of system failures. If there are inconsistencies in the total amount, there are potential issues with our system."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/anishathalye/porcupine"},"Porcupine")," is a linearizability checker in Go built to test the correctness of distributed systems. It takes a sequential specification as executable Go code, along with a concurrent history, and it determines whether the history is linearizable with respect to the sequential specification. In TiPocket, we use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket/tree/master/pkg/check/porcupine"},"Porcupine")," checker in multiple test cases to check whether TiDB meets the linearizability constraint."),(0,o.kt)("h3",{id:"transaction-isolation-testing-elle"},"Transaction Isolation testing: Elle"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jepsen-io/elle"},"Elle")," is an inspection tool that verifies a database\u2019s transaction isolation level. TiPocket integrates ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket/tree/master/pkg/elle"},"go-elle"),", the Go implementation of the Elle inspection tool, to verify TiDB\u2019s isolation level."),(0,o.kt)("p",null,"These are just a few of the test cases TiPocket uses to verify TiDB\u2019s accuracy and stability. For more test cases and verification methods, see our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket"},"source code"),"."),(0,o.kt)("h2",{id:"automating-the-chaos-pipeline---argo"},"Automating the chaos pipeline - Argo"),(0,o.kt)("p",null,"Now that we have Chaos Mesh to inject faults, a TiDB cluster to test, and ways to validate TiDB, how can we automate the chaos testing pipeline? Two options come to mind: we could implement the scheduling functionality in TiPocket, or hand over the job to existing open-source tools. To make TiPocket more dedicated to the testing part of our workflow, we chose the open-source tools approach. This, plus our all-in-K8s design, lead us directly to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argo"},"Argo"),"."),(0,o.kt)("p",null,"Argo is a workflow engine designed for Kubernetes. It has been an open source product for a long time, and has received widespread attention and application."),(0,o.kt)("p",null,"Argo has abstracted several custom resource definitions (CRDs) for workflows. The most important ones include Workflow Template, Workflow, and Cron Workflow. Here is how Argo fits in TiPocket:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Workflow Template")," is a template defined in advance for each test task. Parameters can be passed in when the test is running."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Workflow")," schedules multiple workflow templates in different orders, which form the tasks to be executed. Argo also lets you add conditions, loops, and directed acyclic graphs (DAGs) in the pipeline."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cron Workflow")," lets you schedule a workflow like a cron job. It is perfectly suitable for scenarios where you want to run test tasks for a long time.")),(0,o.kt)("p",null,"The sample workflow for our predefined bank test is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"spec:\n  entrypoint: call-tipocket-bank\n  arguments:\n    parameters:\n      - name: ns\n        value: tipocket-bank\n            - name: nemesis\n        value: random_kill,kill_pd_leader_5min,partition_one,subcritical_skews,big_skews,shuffle-leader-scheduler,shuffle-region-scheduler,random-merge-scheduler\n  templates:\n    - name: call-tipocket-bank\n      steps:\n        - - name: call-wait-cluster\n            templateRef:\n              name: wait-cluster\n              template: wait-cluster\n        - - name: call-tipocket-bank\n            templateRef:\n              name: tipocket-bank\n              template: tipocket-bank\n")),(0,o.kt)("p",null,"In this example, we use the workflow template and nemesis parameters to define the specific failure to inject. You can reuse the template to define multiple workflows that suit different test cases. This allows you to add more customized failure injections in the flow."),(0,o.kt)("p",null,"Besides ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket/tree/master/argo/workflow"},"TiPocket\u2019s")," sample workflows and templates, the design also allows you to add your own failure injection flows. Handling complicated logics using codable workflows makes Argo developer-friendly and an ideal choice for our scenarios."),(0,o.kt)("p",null,"Now, our chaos experiment is running automatically. But if our results do not meet our expectations? How do we locate the problem? TiDB saves a variety of monitoring information, which makes log collecting essential for enabling observability in TiPocket."),(0,o.kt)("h2",{id:"visualizing-the-results-loki"},"Visualizing the results: Loki"),(0,o.kt)("p",null,"In cloud-native systems, observability is very important. Generally speaking, you can achieve observability through ",(0,o.kt)("strong",{parentName:"p"},"metrics"),", ",(0,o.kt)("strong",{parentName:"p"},"logging"),", and ",(0,o.kt)("strong",{parentName:"p"},"tracing"),". TiPocket\u2019s main test cases evaluate TiDB clusters, so metrics and logs are our default sources for locating issues."),(0,o.kt)("p",null,"On Kubernetes, Prometheus is the de-facto standard for metrics. However, there is no common way for log collection. Solutions such as ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elasticsearch"},"Elasticsearch"),", ",(0,o.kt)("a",{parentName:"p",href:"https://fluentbit.io/"},"Fluent Bit"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.elastic.co/kibana"},"Kibana")," perform well, but they may cause system resource contention and high maintenance costs. We decided to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/loki"},"Loki"),", the Prometheus-like log aggregation system from ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),"."),(0,o.kt)("p",null,"Prometheus processes TiDB\u2019s monitoring information. Prometheus and Loki have a similar labeling system, so we can easily combine Prometheus' monitoring indicators with the corresponding pod logs and use a similar query language. Grafana also supports the Loki dashboard, which means we can use Grafana to display monitoring indicators and logs at the same time. Grafana is the built-in monitoring component in TiDB, which Loki can reuse."),(0,o.kt)("h2",{id:"putting-them-all-together---tipocket"},"Putting them all together - TiPocket"),(0,o.kt)("p",null,"Now, everything is ready. Here is a simplified diagram of TiPocket:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TiPocket Architecture",src:a(67022).Z})),(0,o.kt)("p",null,"As you can see, the Argo workflow manages all chaos experiments and test cases. Generally, a complete test cycle involves the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Argo creates a Cron Workflow, which defines the cluster to be tested, the faults to inject, the test case, and the duration of the task. If necessary, the Cron Workflow also lets you view case logs in real-time.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Argo Workflow",src:a(65710).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At a specified time, a separate TiPocket thread is started in the workflow, and the Cron Workflow is triggered. TiPocket sends TiDB-Operator the definition of the cluster to test. In turn, TiDB-Operator creates a target TiDB cluster. Meanwhile, Loki collects the related logs."),(0,o.kt)("li",{parentName:"ol"},"Chaos Mesh injects faults in the cluster."),(0,o.kt)("li",{parentName:"ol"},"Using the test cases mentioned above, the user validates the health of the system. Any test case failure leads to workflow failure in Argo, which triggers Alertmanager to send the result to the specified Slack channel. If the test cases complete normally, the cluster is cleared, and Argo stands by until the next test.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alert in Slack",src:a(71372).Z})),(0,o.kt)("p",null,"This is the complete TiPocket workflow. ."),(0,o.kt)("h2",{id:"join-us"},"Join us"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/chaos-mesh"},"Chaos Mesh")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tipocket"},"TiPocket")," are both in active iterations. We have donated Chaos Mesh to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cncf/toc/pull/367"},"CNCF"),", and we look forward to more community members joining us in building a complete Chaos Engineering ecosystem. If this sounds interesting to you, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"website"),", or join #project-chaos-mesh in the ",(0,o.kt)("a",{parentName:"p",href:"hthttps://slack.cncf.io/"},"CNCF Slack"),"."))}m.isMDXComponent=!0},71372:function(e,t,a){t.Z=a.p+"assets/images/alert_message-79bc9f3976c4781bc320238a8ec6d818.png"},65710:function(e,t,a){t.Z=a.p+"assets/images/argo-workflow-2d7506b3c1525da6f97b4ef811594461.png"},81731:function(e,t,a){t.Z=a.p+"assets/images/automated_testing_framework-c5405e59cb081273dba539dc8be612bc.png"},67022:function(e,t,a){t.Z=a.p+"assets/images/tipocket-architecture-fcff5a8fa8690055253b89c9808f1197.png"}}]);