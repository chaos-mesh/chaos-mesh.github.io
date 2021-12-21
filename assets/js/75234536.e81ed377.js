"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[526],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(d,s(s({ref:t},h),{},{components:a})):n.createElement(d,s({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},21239:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={slug:"/better-observability-for-chaos-engineering",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",author:"Ningxuan Wang",author_title:"Chaos Mesh Contributor",author_url:"https://github.com/FingerLeader",author_image_url:"https://avatars.githubusercontent.com/u/43462394?v=4",image:"/img/chaos-mesh-skywalking-banner.png",tags:["Chaos Mesh","Chaos Engineering","Tutorial"]},l=void 0,c={permalink:"/blog/better-observability-for-chaos-engineering",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-16-chaos-mesh-skywalking.md",source:"@site/blog/2021-12-16-chaos-mesh-skywalking.md",title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",description:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",date:"2021-12-16T00:00:00.000Z",formattedDate:"December 16, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Tutorial",permalink:"/blog/tags/tutorial"}],readingTime:5.14,truncated:!0,authors:[{name:"Ningxuan Wang",title:"Chaos Mesh Contributor",url:"https://github.com/FingerLeader",imageURL:"https://avatars.githubusercontent.com/u/43462394?v=4"}],nextItem:{title:"Implementing Chaos Engineering in K8s: Chaos Mesh Principle Analysis and Control Plane Development",permalink:"/blog/implement-chaos-engineering-in-k8s"}},h={authorsImageUrls:[void 0]},u=[{value:"Preparation",id:"preparation",children:[],level:2},{value:"Step 1: Access the SkyWalking cluster",id:"step-1-access-the-skywalking-cluster",children:[],level:2},{value:"Step 2: Deploy SkyWalking Kubernetes Event Exporter",id:"step-2-deploy-skywalking-kubernetes-event-exporter",children:[],level:2},{value:"Step 3: Use JMeter to increase service loads",id:"step-3-use-jmeter-to-increase-service-loads",children:[],level:2},{value:"Step 4: Inject failures via Chaos Mesh and observe results",id:"step-4-inject-failures-via-chaos-mesh-and-observe-results",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],p={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",src:a(66564).Z})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is an open-source cloud-native ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chaos_engineering"},"chaos engineering")," platform. You can use Chaos Mesh to conveniently inject failures and simulate abnormalities that might occur in reality, so you can identify potential problems in your system. Chaos Mesh also offers a Chaos Dashboard which allows you to monitor the status of a chaos experiment. However, this dashboard cannot let you observe how the failures in the experiment impact the service performance of applications. This hinders us from further testing our systems and finding potential problems. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},"Apache SkyWalking")," is an open-source application performance monitor (APM), specially designed to monitor, track, and diagnose cloud native, container-based distributed systems. It collects events that occur and then displays them on its dashboard, allowing you to observe directly the type and number of events that have occurred in your system and how different events impact the service performance. "),(0,r.kt)("p",null,"When you use SkyWalking and Chaos Mesh together during chaos experiments, you can observe how different failures impact the service performance. "),(0,r.kt)("p",null,"This tutorial will show you how to configure SkyWalking and Chaos Mesh. You\u2019ll also learn how to leverage the two systems to monitor events and observe in real time how chaos experiments impact applications\u2019 service performance. "),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Before you start to use SkyWalking and Chaos Mesh, you have to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a SkyWalking cluster according to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/skywalking-kubernetes#install"},"the SkyWalking configuration guide"),"."),(0,r.kt)("li",{parentName:"ul"},"Deploy Chao Mesh ",(0,r.kt)("a",{parentName:"li",href:"https://chaos-mesh.org/docs/production-installation-using-helm/"},"using Helm"),"."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://jmeter.apache.org/index.html"},"JMeter")," or other Java testing tools (to increase service loads)."),(0,r.kt)("li",{parentName:"ul"},"Configure SkyWalking and Chaos Mesh according to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh-on-skywalking"},"this guide")," if you just want to run a demo.")),(0,r.kt)("p",null,"Now, you are fully prepared, and we can cut to the chase. "),(0,r.kt)("h2",{id:"step-1-access-the-skywalking-cluster"},"Step 1: Access the SkyWalking cluster"),(0,r.kt)("p",null,"After you install the SkyWalking cluster, you can access its user interface (UI). However, no service is running at this point, so before you start monitoring, you have to add one and set the agents."),(0,r.kt)("p",null,"In this tutorial, we take Spring Boot, a lightweight microservice framework, as an example to build a simplified demo environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a SkyWalking demo in Spring Boot by referring to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/chaos-mesh-on-skywalking/blob/master/demo-deployment.yaml"},"this document"),"."),(0,r.kt)("li",{parentName:"ol"},"Execute the command ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply -f demo-deployment.yaml -n skywalking")," to deploy the demo. ")),(0,r.kt)("p",null,"After you finish deployment, you can observe the real-time monitoring results at the SkyWalking UI. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Spring Boot and SkyWalking have the same default port number: 8080. Be careful when you configure the port forwarding; otherise, you may have port conflicts. For example, you can set Spring Boot\u2019s port to 8079 by using a command like ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward svc/spring-boot-skywalking-demo 8079:8080 -n skywalking")," to avoid conflicts. "),(0,r.kt)("h2",{id:"step-2-deploy-skywalking-kubernetes-event-exporter"},"Step 2: Deploy SkyWalking Kubernetes Event Exporter"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking-kubernetes-event-exporter"},"SkyWalking Kubernetes Event Exporter")," is able to watch, filter, and send Kubernetes events into the SkyWalking backend. SkyWalking then associates the events with the system metrics and displays an overview about when and how the metrics are affected by the events."),(0,r.kt)("p",null,"If you want to deploy SkyWalking Kubernetes Event Explorer with one line of commands, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh-on-skywalking/blob/master/exporter-deployment.yaml"},"this document")," to create configuration files in YAML format and then customize the parameters in the filters and exporters. Now, you can use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," to deploy SkyWalking Kubernetes Event Explorer. "),(0,r.kt)("h2",{id:"step-3-use-jmeter-to-increase-service-loads"},"Step 3: Use JMeter to increase service loads"),(0,r.kt)("p",null,"To better observe the change in service performance, you need to increase the service loads on Spring Boot. In this tutorial, we use JMeter, a widely adopted Java testing tool, to increase the service loads. "),(0,r.kt)("p",null,"Perform a stress test on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8079")," using JMeter and add five threads to continuously increase the service loads. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JMeter Dashboard 1",src:a(61862).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JMeter Dashboard 2",src:a(11830).Z})),(0,r.kt)("p",null,"Open the SkyWalking Dashboard. You can see that the access rate is 100%, and that the service loads reach about 5,300 calls per minute (CPM). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SkyWalking Dashboard",src:a(98720).Z})),(0,r.kt)("h2",{id:"step-4-inject-failures-via-chaos-mesh-and-observe-results"},"Step 4: Inject failures via Chaos Mesh and observe results"),(0,r.kt)("p",null,"After you finish the three steps above, you can use the Chaos Dashboard to simulate stress scenarios and observe the change in service performance during chaos experiments. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"StressChaos on Chaos Dashboard",src:a(9565).Z})),(0,r.kt)("p",null,"The following sections describe how service performance varies under the stress of three chaos conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CPU load: 10%;  memory load: 128 MB"),(0,r.kt)("p",{parentName:"li"},"  The first chaos experiment simulates low CPU usage. To display when a chaos experiment starts and ends, click the switching button on the right side of the dashboard. To learn whether the experiment is Applied to the system or Recovered from the system, move your cursor onto the short, green line. "),(0,r.kt)("p",{parentName:"li"},"  During the time period between the two short, green lines, the service load decreases to 4,929 CPM, but returns to normal after the chaos experiment ends. "),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"Test 1",src:a(85562).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CPU load: 50%; memory load: 128 MB"),(0,r.kt)("p",{parentName:"li"},"  When the application\u2019s CPU load increases to 50%,  the service load decreases to 4,307 CPM."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"Test 2",src:a(34032).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CPU load: 100%; memory load: 128 MB"),(0,r.kt)("p",{parentName:"li"},"  When the CPU usage is at 100%, the service load decreases to only 40% of what it would be if no chaos experiments were taking place. "),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"Test 3",src:a(60754).Z})),(0,r.kt)("p",{parentName:"li"},"  Because the process scheduling under the Linux system does not allow a process to occupy the CPU all the time, the deployed Spring Boot Demo can still handle 40% of the access requests even in the extreme case of a full CPU load."))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"By combining SkyWalking and Chaos Mesh, you can clearly observe when and to what extent chaos experiments affect application service performance. This combination of tools lets you observe the service performance in various extreme conditions, thus boosting your confidence in your services. "),(0,r.kt)("p",null,"Chaos Mesh has grown a lot in 2021 thanks to the unremitting efforts of all PingCAP engineers and community contributors. In order to continue to upgrade our support for our wide variety of users and learn more about users\u2019 experience in Chaos Engineering, we\u2019d like to invite you to take",(0,r.kt)("a",{parentName:"p",href:"https://www.surveymonkey.com/r/X77BCNM"}," this survey")," and give us your valuable feedback. "),(0,r.kt)("p",null,"If you want to know more about Chaos Mesh, you\u2019re welcome to join ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh"},"the Chaos Mesh community on GitHub")," or our ",(0,r.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"Slack discussions")," (#project-chaos-mesh). If you find any bugs or missing features when using Chaos Mesh, you can submit your pull requests or issues to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}m.isMDXComponent=!0},9565:function(e,t,a){t.Z=a.p+"assets/images/chaos-dashboard-stresschaos-0958f21ef5a185aa16e9c2327a226fe0.png"},66564:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-skywalking-banner-1f6183766d34f1bcd35f2e812504954f.png"},85562:function(e,t,a){t.Z=a.p+"assets/images/cpuload-1-3188bd3a6afc8e73e4e8723b58518b20.png"},34032:function(e,t,a){t.Z=a.p+"assets/images/cpuload-2-1ef91964d35ba5f9bceef75075756250.png"},60754:function(e,t,a){t.Z=a.p+"assets/images/cpuload-3-8630b8200eca779f6f534a29ac08a65e.png"},61862:function(e,t,a){t.Z=a.p+"assets/images/jmeter-1-57604bd61820a513fba79f7e3fe622a5.png"},11830:function(e,t,a){t.Z=a.p+"assets/images/jmeter-2-5286dd8271fc4872d751d69f04c955a2.png"},98720:function(e,t,a){t.Z=a.p+"assets/images/skywalking-dashboard-be15b01a2de79a2abddad3f33fc15346.png"}}]);