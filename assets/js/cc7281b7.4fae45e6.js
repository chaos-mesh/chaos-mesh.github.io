"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7506],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95500:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={slug:"/develop-a-daily-reporting-system",title:"How to Develop a Daily Reporting System to Track Chaos Testing Results",author:"Lei Li",author_title:"Senior software engineer at Digital China",author_url:"https://github.com/lileiaab",author_image_url:"https://avatars.githubusercontent.com/u/88825087?v=4",image:"/img/chaos-mesh-digitalchina-banner.png",tags:["Chaos Mesh","Chaos Engineering","Use case"]},l=void 0,p={permalink:"/blog/develop-a-daily-reporting-system",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2022-01-11-develop-a-daily-reporting-system.md",source:"@site/blog/2022-01-11-develop-a-daily-reporting-system.md",title:"How to Develop a Daily Reporting System to Track Chaos Testing Results",description:"How to Develop a Daily Reporting System to Track Chaos Testing Results",date:"2022-01-11T00:00:00.000Z",formattedDate:"January 11, 2022",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"Use case",permalink:"/blog/tags/use-case"}],readingTime:6.995,truncated:!0,authors:[{name:"Lei Li",title:"Senior software engineer at Digital China",url:"https://github.com/lileiaab",imageURL:"https://avatars.githubusercontent.com/u/88825087?v=4"}],nextItem:{title:"Share your #ChaosMeshStory!",permalink:"/blog/share-your-chaos-mesh-story"}},c={authorsImageUrls:[void 0]},u=[{value:"Deploy Chaos Mesh on Kubernetes",id:"deploy-chaos-mesh-on-kubernetes",children:[],level:2},{value:"Deploy TiDB",id:"deploy-tidb",children:[],level:2},{value:"Run a chaos experiment",id:"run-a-chaos-experiment",children:[],level:2},{value:"Generate daily report",id:"generate-daily-report",children:[{value:"Collect logs",id:"collect-logs",children:[],level:3},{value:"Filter errors and warnings",id:"filter-errors-and-warnings",children:[],level:3},{value:"Draw a plot",id:"draw-a-plot",children:[],level:3},{value:"Generate the report in PDF",id:"generate-the-report-in-pdf",children:[],level:3}],level:2},{value:"Build a web application for daily reporting",id:"build-a-web-application-for-daily-reporting",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],h={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to Develop a Daily Reporting System to Track Chaos Testing Results",src:a(57149).Z})),(0,o.kt)("p",null,"Chaos Mesh is a cloud-native chaos engineering platform that orchestrates chaos experiments on Kubernetes environments. It allows you to test the resilience of your system by simulating problems such as network faults, file system faults, and Pod faults. After each chaos experiment, you can review the testing results by checking the logs. But this is neither direct nor efficient. Therefore, I decided to develop a daily reporting system that would automatically analyze logs and generate reports. This way, it\u2019s easy to examine the logs and identify the issues. "),(0,o.kt)("p",null,"In this article, I will give you some insights about how to build a daily reporting system, as well as the problems I encountered during the process and how I fixed them."),(0,o.kt)("h2",{id:"deploy-chaos-mesh-on-kubernetes"},"Deploy Chaos Mesh on Kubernetes"),(0,o.kt)("p",null,"Chaos Mesh is designed for Kubernetes, which is one of the important reasons why it can allow users to inject faults into the file system, Pod, or network for specific applications. "),(0,o.kt)("p",null,"In earlier documents, Chaos Mesh offered two ways to quickly deploy a virtual Kubernetes cluster on your machine: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind"},"kind")," and ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),". Generally, it only takes a one-line command to deploy a Kubernetes cluster as well as install Chaos Mesh. But there are some problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Starting Kubernetes clusters locally affects network-related fault types."),(0,o.kt)("li",{parentName:"ul"},"Users on the Chinese mainland might experience an extremely slow process to pull the Docker image or even a timeout. ")),(0,o.kt)("p",null,"If you use the provided script to deploy a Kubernetes cluster using kind, all Kubernetes nodes are virtual machines (VM). This adds difficulty when you pull the image offline. To address this issue, you can deploy the Kubernetes cluster on multiple physical machines instead, with each physical machine acting as a worker node. To expedite the image pulling process, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker load")," command to load the required image in advance. Apart from the two problems above, you can install ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")," and ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," by following the documentation."),(0,o.kt)("p",null,"Note: For the latest installation and deployment instructions, refer to  ",(0,o.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/quick-start/"},"Chaos Mesh Quick Start"),"."),(0,o.kt)("h2",{id:"deploy-tidb"},"Deploy TiDB"),(0,o.kt)("p",null,"The next step is to deploy TiDB on Kubernetes. I used TiDB Operator to streamline the process. For details, check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb-in-kubernetes/stable/get-started"},"Get started with TiDB Operator in Kubernetes"),"."),(0,o.kt)("p",null,"I\u2019d like to highlight  two points in this process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, install Custom Resource Definitions (CRDs) to implement different components of TiDB Operator. Otherwise, you\u2019ll get errors when you try to install TiDB Operator."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn"),", a distributed block storage system for Kubernetes, to create local persistent volumes (PV) for your Kubernetes cluster. This way, you don\u2019t have to create PVs in advance: whenever a Pod is pulled, a PV is automatically created and mounted.")),(0,o.kt)("p",null,"The biggest problem that I encountered was that pulling the image could be extremely slow when deploying the service. If the nodes in your Kubernetes cluster are virtual machines, pull the required images in advance and load them to the Docker of each machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## Pull required images on a machine with a good network connection\ndocker pull pingcap/tikv:latest\ndocker pull pingcap/tidb:latest\ndocker pull pingcap/pd:latest\n\n## Export images and save them to each machine in the Kubernetes cluster\ndocker save -o tikv.tar pingcap/tikv:latest\ndocker save -o tidb.tar pingcap/tidb:latest\ndocker save -o pd.tar pingcap/pd:latest\n\n## Load images to each machine\ndocker load &lt; tikv.tar\ndocker load &lt; tidb.tar\ndocker load &lt; pd.tar\n")),(0,o.kt)("p",null,"The above commands allow you to use the TiDB image in the local Docker registry to deploy the latest TiDB cluster, saving you the trouble of pulling the image from the remote repository. The idea also applies to the Chaos Mesh installation as described earlier. If you do not know which images you need to pull, install Chaos Mesh using Helm to trigger the installation process, then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to verify:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## Check pods that are deployed in a specific namespace.\nkubectl describe pods -n tidb-test\n")),(0,o.kt)("p",null,"The mirror pulling process usually takes the longest time to complete. If the Pod is being scheduled to a node, check it later."),(0,o.kt)("h2",{id:"run-a-chaos-experiment"},"Run a chaos experiment"),(0,o.kt)("p",null,"To run a chaos experiment, you have to define it first through YAML files and use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply")," to start it. In this example, I created a chaos experiment using PodChaos to simulate a Pod crashing. For detailed instructions, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/run-a-chaos-experiment/"},"Run a Chaos Experiment"),"."),(0,o.kt)("h2",{id:"generate-daily-report"},"Generate daily report"),(0,o.kt)("h3",{id:"collect-logs"},"Collect logs"),(0,o.kt)("p",null,"Usually, when you run chaos experiments on TiDB clusters, many errors are returned. To collect those error logs, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs &lt;podname> -n tidb-test --since=24h >> tidb.log\n")),(0,o.kt)("p",null,"All logs generated in the past 24 hours of the specific Pod in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tidb-test")," namespace will be saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tidb.log")," file."),(0,o.kt)("h3",{id:"filter-errors-and-warnings"},"Filter errors and warnings"),(0,o.kt)("p",null,"In this step, you have to filter error messages and warning messages from logs. There are two options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use text processing tools, such as awk. This requires a proficient understanding of Linux/Unix commands."),(0,o.kt)("li",{parentName:"ul"},"Write a script. If you\u2019re not familiar with Linux/Unix commands, this is the better option.")),(0,o.kt)("h3",{id:"draw-a-plot"},"Draw a plot"),(0,o.kt)("p",null,"For plotting, I used ",(0,o.kt)("a",{parentName:"p",href:"http://www.gnuplot.info/"},"gnuplot"),", a Linux command-line graphing utility. In the example below, I imported the pressure measurement results and created a line graph to show how queries per second (QPS) were affected when a specific Pod became unavailable. Since the chaos experiment was executed periodically, the number of QPS exhibited a pattern: it would drop abruptly and then quickly return to normal.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"QPS line graph",src:a(61780).Z})),(0,o.kt)("p",{class:"caption-center"},"QPS line graph"),(0,o.kt)("h3",{id:"generate-the-report-in-pdf"},"Generate the report in PDF"),(0,o.kt)("p",null,"Currently, there is no available API for generating Chaos Mesh reports or analyzing results. I decided to generate the report in PDF format so it would be readable on different browsers. In my case, I used ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/signintech/gopdf"},"gopdf"),", a support library that allows users to create PDF files. It also lets me insert images or draw tables, which meets my needs."),(0,o.kt)("p",null,"To generate a daily report, I used ",(0,o.kt)("a",{parentName:"p",href:"https://www.linux.org/docs/man8/cron.html"},"crond"),", a command-line utility that executes cron jobs in the background, to execute the commands early each morning. So, when I start work, there is a daily report waiting for me."),(0,o.kt)("h2",{id:"build-a-web-application-for-daily-reporting"},"Build a web application for daily reporting"),(0,o.kt)("p",null,"But I want to make the report more readable and accessible. Isn\u2019t it nicer if you can check reports on a web application? At first, I wanted to add a backend API and track when the report was generated. It sounds applicable but it may be too much work since all I want is to know which report requires further troubleshooting. The exact information is shown in the file name, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"report-2021-07-09-bad.pdf"),". Thus, the reporting system\u2019s workload and complexity are greatly reduced."),(0,o.kt)("p",null,"Still, it is necessary to improve the backend interfaces as well as enrich the report content. But for now, a daily, workable reporting system is just fine."),(0,o.kt)("p",null,"In my case, I used ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vue"},"Vue.js")," to scaffold the web application using a UI library ",(0,o.kt)("a",{parentName:"p",href:"https://www.antdv.com/docs/vue/introduce/"},"antd"),". After that, I updated the page content by saving the automatically generated report to the static resources folder ",(0,o.kt)("inlineCode",{parentName:"p"},"static"),". This allows the web application to read the static reports and then render them to the front end page. For details, check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.antdv.com/docs/vue/use-with-vue-cli/"},"Use antd in vue-cli 3"),". "),(0,o.kt)("p",null,"Below is an example of a web application that I developed for daily reporting. The red card indicates that I should take a look at the testing report because exceptions are thrown after running chaos experiments."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Web application for daily reporting",src:a(32512).Z})),(0,o.kt)("p",{class:"caption-center"},"Web application for daily reporting"),(0,o.kt)("p",null,"Clicking the red card will open the report, as shown below. I used ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/pdf.js"},"pdf.js")," to view the PDF."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Daily report in PDF",src:a(15446).Z})),(0,o.kt)("p",{class:"caption-center"},"Daily report in PDF"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Chaos Mesh enables you to simulate faults that most cloud-native applications might encounter. In this article, I created a PodChaos experiment and observed that QPS in the TiDB cluster was affected when the Pod became unavailable. After analyzing the logs, I can enhance the robustness and high availability of the system. I built a web application to generate daily reports for troubleshooting and debugging. You can also customize the reports to meet your own requirements. "),(0,o.kt)("p",null,"Our team is also working on a project to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DigitalChinaOpenSource/TiDB-for-PostgreSQL"},"make TiDB compatible with PostgreSQL"),". If you are interested and want to make contributions, you are welcome to pick an issue and get started."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Originally published at ",(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"https://thenewstack.io/develop-a-daily-reporting-system-for-chaos-mesh-to-improve-system-resilience/"},"The New Stack")),".")))}d.isMDXComponent=!0},57149:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-digitalchina-banner-c7d6ac176f56621aa799af0e30d06e96.png"},15446:function(e,t,a){t.Z=a.p+"assets/images/daily-report-pdf-8ae60cf1beb170450c7fd87443084175.png"},61780:function(e,t,a){t.Z=a.p+"assets/images/qps-line-graph-10389785bbe639db08850f5d73c47239.png"},32512:function(e,t,a){t.Z=a.p+"assets/images/web-app-for-daily-reporting-3fc7adf871410eb6a52f15ac84c00d5b.png"}}]);