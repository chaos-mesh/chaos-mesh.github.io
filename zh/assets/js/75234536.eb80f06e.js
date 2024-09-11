"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[696],{5685:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(86070),o=n(6383);const a={slug:"/better-observability-for-chaos-engineering",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",authors:"ningxuanwang",image:"/img/blog/chaos-mesh-skywalking-banner.png",tags:["Chaos Mesh","Chaos Engineering","Tutorials"]},i=void 0,r={permalink:"/zh/blog/better-observability-for-chaos-engineering",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-16-chaos-mesh-skywalking.md",source:"@site/blog/2021-12-16-chaos-mesh-skywalking.md",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",description:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",date:"2021-12-16T00:00:00.000Z",tags:[{inline:!0,label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{inline:!0,label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{inline:!0,label:"Tutorials",permalink:"/zh/blog/tags/tutorials"}],readingTime:5.14,hasTruncateMarker:!0,authors:[{name:"Ningxuan Wang",title:"Contributor of Chaos Mesh",url:"https://github.com/FingerLeader",imageURL:"https://avatars.githubusercontent.com/u/43462394?v=4",key:"ningxuanwang",page:null}],frontMatter:{slug:"/better-observability-for-chaos-engineering",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",authors:"ningxuanwang",image:"/img/blog/chaos-mesh-skywalking-banner.png",tags:["Chaos Mesh","Chaos Engineering","Tutorials"]},unlisted:!1,prevItem:{title:"Deploy Chaos Mesh on KubeSphere",permalink:"/zh/blog/deploy-chaos-mesh-on-kubesphere"},nextItem:{title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",permalink:"/zh/blog/implement-chaos-engineering-in-k8s"}},h={authorsImageUrls:[void 0]},l=[{value:"Preparation",id:"preparation",level:2},{value:"Step 1: Access the SkyWalking cluster",id:"step-1-access-the-skywalking-cluster",level:2},{value:"Step 2: Deploy SkyWalking Kubernetes Event Exporter",id:"step-2-deploy-skywalking-kubernetes-event-exporter",level:2},{value:"Step 3: Use JMeter to increase service loads",id:"step-3-use-jmeter-to-increase-service-loads",level:2},{value:"Step 4: Inject failures via Chaos Mesh and observe results",id:"step-4-inject-failures-via-chaos-mesh-and-observe-results",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",src:n(80313).A+"",width:"1501",height:"501"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," is an open-source cloud-native ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Chaos_engineering",children:"chaos engineering"})," platform. You can use Chaos Mesh to conveniently inject failures and simulate abnormalities that might occur in reality, so you can identify potential problems in your system. Chaos Mesh also offers a Chaos Dashboard which allows you to monitor the status of a chaos experiment. However, this dashboard cannot let you observe how the failures in the experiment impact the service performance of applications. This hinders us from further testing our systems and finding potential problems."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/apache/skywalking",children:"Apache SkyWalking"})," is an open-source application performance monitor (APM), specially designed to monitor, track, and diagnose cloud native, container-based distributed systems. It collects events that occur and then displays them on its dashboard, allowing you to observe directly the type and number of events that have occurred in your system and how different events impact the service performance."]}),"\n",(0,t.jsx)(s.p,{children:"When you use SkyWalking and Chaos Mesh together during chaos experiments, you can observe how different failures impact the service performance."}),"\n",(0,t.jsx)(s.p,{children:"This tutorial will show you how to configure SkyWalking and Chaos Mesh. You\u2019ll also learn how to leverage the two systems to monitor events and observe in real time how chaos experiments impact applications\u2019 service performance."}),"\n",(0,t.jsx)(s.h2,{id:"preparation",children:"Preparation"}),"\n",(0,t.jsx)(s.p,{children:"Before you start to use SkyWalking and Chaos Mesh, you have to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Set up a SkyWalking cluster according to ",(0,t.jsx)(s.a,{href:"https://github.com/apache/skywalking-kubernetes#install",children:"the SkyWalking configuration guide"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Deploy Chao Mesh ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/docs/production-installation-using-helm/",children:"using Helm"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Install ",(0,t.jsx)(s.a,{href:"https://jmeter.apache.org/index.html",children:"JMeter"})," or other Java testing tools (to increase service loads)."]}),"\n",(0,t.jsxs)(s.li,{children:["Configure SkyWalking and Chaos Mesh according to ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh-on-skywalking",children:"this guide"})," if you just want to run a demo."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Now, you are fully prepared, and we can cut to the chase."}),"\n",(0,t.jsx)(s.h2,{id:"step-1-access-the-skywalking-cluster",children:"Step 1: Access the SkyWalking cluster"}),"\n",(0,t.jsx)(s.p,{children:"After you install the SkyWalking cluster, you can access its user interface (UI). However, no service is running at this point, so before you start monitoring, you have to add one and set the agents."}),"\n",(0,t.jsx)(s.p,{children:"In this tutorial, we take Spring Boot, a lightweight microservice framework, as an example to build a simplified demo environment."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Create a SkyWalking demo in Spring Boot by referring to ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh-on-skywalking/blob/master/demo-deployment.yaml",children:"this document"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Execute the command ",(0,t.jsx)(s.code,{children:"kubectl apply -f demo-deployment.yaml -n skywalking"})," to deploy the demo."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"After you finish deployment, you can observe the real-time monitoring results at the SkyWalking UI."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Spring Boot and SkyWalking have the same default port number: 8080. Be careful when you configure the port forwarding; otherise, you may have port conflicts. For example, you can set Spring Boot\u2019s port to 8079 by using a command like ",(0,t.jsx)(s.code,{children:"kubectl port-forward svc/spring-boot-skywalking-demo 8079:8080 -n skywalking"})," to avoid conflicts."]}),"\n",(0,t.jsx)(s.h2,{id:"step-2-deploy-skywalking-kubernetes-event-exporter",children:"Step 2: Deploy SkyWalking Kubernetes Event Exporter"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/apache/skywalking-kubernetes-event-exporter",children:"SkyWalking Kubernetes Event Exporter"})," is able to watch, filter, and send Kubernetes events into the SkyWalking backend. SkyWalking then associates the events with the system metrics and displays an overview about when and how the metrics are affected by the events."]}),"\n",(0,t.jsxs)(s.p,{children:["If you want to deploy SkyWalking Kubernetes Event Explorer with one line of commands, refer to ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh-on-skywalking/blob/master/exporter-deployment.yaml",children:"this document"})," to create configuration files in YAML format and then customize the parameters in the filters and exporters. Now, you can use the command ",(0,t.jsx)(s.code,{children:"kubectl apply"})," to deploy SkyWalking Kubernetes Event Explorer."]}),"\n",(0,t.jsx)(s.h2,{id:"step-3-use-jmeter-to-increase-service-loads",children:"Step 3: Use JMeter to increase service loads"}),"\n",(0,t.jsx)(s.p,{children:"To better observe the change in service performance, you need to increase the service loads on Spring Boot. In this tutorial, we use JMeter, a widely adopted Java testing tool, to increase the service loads."}),"\n",(0,t.jsxs)(s.p,{children:["Perform a stress test on ",(0,t.jsx)(s.code,{children:"localhost:8079"})," using JMeter and add five threads to continuously increase the service loads."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"JMeter Dashboard 1",src:n(59824).A+"",width:"1156",height:"517"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"JMeter Dashboard 2",src:n(73643).A+"",width:"1525",height:"429"})}),"\n",(0,t.jsx)(s.p,{children:"Open the SkyWalking Dashboard. You can see that the access rate is 100%, and that the service loads reach about 5,300 calls per minute (CPM)."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"SkyWalking Dashboard",src:n(95332).A+"",width:"1919",height:"934"})}),"\n",(0,t.jsx)(s.h2,{id:"step-4-inject-failures-via-chaos-mesh-and-observe-results",children:"Step 4: Inject failures via Chaos Mesh and observe results"}),"\n",(0,t.jsx)(s.p,{children:"After you finish the three steps above, you can use the Chaos Dashboard to simulate stress scenarios and observe the change in service performance during chaos experiments."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"StressChaos on Chaos Dashboard",src:n(183).A+"",width:"1918",height:"935"})}),"\n",(0,t.jsx)(s.p,{children:"The following sections describe how service performance varies under the stress of three chaos conditions:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"CPU load: 10%; memory load: 128 MB"}),"\n",(0,t.jsx)(s.p,{children:"The first chaos experiment simulates low CPU usage. To display when a chaos experiment starts and ends, click the switching button on the right side of the dashboard. To learn whether the experiment is Applied to the system or Recovered from the system, move your cursor onto the short, green line."}),"\n",(0,t.jsx)(s.p,{children:"During the time period between the two short, green lines, the service load decreases to 4,929 CPM, but returns to normal after the chaos experiment ends."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Test 1",src:n(28491).A+"",width:"722",height:"316"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"CPU load: 50%; memory load: 128 MB"}),"\n",(0,t.jsx)(s.p,{children:"When the application\u2019s CPU load increases to 50%, the service load decreases to 4,307 CPM."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Test 2",src:n(98320).A+"",width:"724",height:"321"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"CPU load: 100%; memory load: 128 MB"}),"\n",(0,t.jsx)(s.p,{children:"When the CPU usage is at 100%, the service load decreases to only 40% of what it would be if no chaos experiments were taking place."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Test 3",src:n(4569).A+"",width:"725",height:"321"})}),"\n",(0,t.jsx)(s.p,{children:"Because the process scheduling under the Linux system does not allow a process to occupy the CPU all the time, the deployed Spring Boot Demo can still handle 40% of the access requests even in the extreme case of a full CPU load."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(s.p,{children:"By combining SkyWalking and Chaos Mesh, you can clearly observe when and to what extent chaos experiments affect application service performance. This combination of tools lets you observe the service performance in various extreme conditions, thus boosting your confidence in your services."}),"\n",(0,t.jsxs)(s.p,{children:["Chaos Mesh has grown a lot in 2021 thanks to the unremitting efforts of all PingCAP engineers and community contributors. In order to continue to upgrade our support for our wide variety of users and learn more about users\u2019 experience in Chaos Engineering, we\u2019d like to invite you to take",(0,t.jsx)(s.a,{href:"https://www.surveymonkey.com/r/X77BCNM",children:" this survey"})," and give us your valuable feedback."]}),"\n",(0,t.jsxs)(s.p,{children:["If you want to know more about Chaos Mesh, you\u2019re welcome to join ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh",children:"the Chaos Mesh community on GitHub"})," or our ",(0,t.jsx)(s.a,{href:"https://slack.cncf.io/",children:"Slack discussions"})," (#project-chaos-mesh). If you find any bugs or missing features when using Chaos Mesh, you can submit your pull requests or issues to our ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub repository"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},183:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-dashboard-stresschaos-0958f21ef5a185aa16e9c2327a226fe0.png"},80313:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-skywalking-banner-1f6183766d34f1bcd35f2e812504954f.png"},28491:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/cpuload-1-3188bd3a6afc8e73e4e8723b58518b20.png"},98320:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/cpuload-2-1ef91964d35ba5f9bceef75075756250.png"},4569:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/cpuload-3-8630b8200eca779f6f534a29ac08a65e.png"},59824:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/jmeter-1-57604bd61820a513fba79f7e3fe622a5.png"},73643:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/jmeter-2-5286dd8271fc4872d751d69f04c955a2.png"},95332:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/skywalking-dashboard-be15b01a2de79a2abddad3f33fc15346.png"},6383:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(30758);const o={},a=t.createContext(o);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);