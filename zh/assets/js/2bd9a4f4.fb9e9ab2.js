"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3939],{17942:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var o=a(50959);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=o.createContext({}),h=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=h(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=h(a),u=s,d=c["".concat(i,".").concat(u)]||c[u]||m[u]||r;return a?o.createElement(d,n(n({ref:t},l),{},{components:a})):o.createElement(d,n({ref:t},l))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,n=new Array(r);n[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:s,n[1]=p;for(var h=2;h<r;h++)n[h]=a[h];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>h});var o=a(51163),s=(a(50959),a(17942));const r={slug:"/deploy-chaos-mesh-on-kubesphere",title:"Deploy Chaos Mesh on KubeSphere",author:"Cwen Yin",author_title:"Chaos Mesh Maintainer",author_url:"https://github.com/cwen0",author_image_url:"https://avatars.githubusercontent.com/u/22956341?v=4",image:"/img/blog/chaos-mesh-kubesphere-banner.png",tags:["Chaos Mesh","Chaos Engineering","community"]},n=void 0,p={permalink:"/zh/blog/deploy-chaos-mesh-on-kubesphere",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md",source:"@site/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md",title:"Deploy Chaos Mesh on KubeSphere",description:"Deploy Chaos Mesh on KubeSphere",date:"2021-12-22T00:00:00.000Z",formattedDate:"2021\u5e7412\u670822\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"community",permalink:"/zh/blog/tags/community"}],readingTime:3.065,hasTruncateMarker:!0,authors:[{name:"Cwen Yin",title:"Chaos Mesh Maintainer",url:"https://github.com/cwen0",imageURL:"https://avatars.githubusercontent.com/u/22956341?v=4"}],frontMatter:{slug:"/deploy-chaos-mesh-on-kubesphere",title:"Deploy Chaos Mesh on KubeSphere",author:"Cwen Yin",author_title:"Chaos Mesh Maintainer",author_url:"https://github.com/cwen0",author_image_url:"https://avatars.githubusercontent.com/u/22956341?v=4",image:"/img/blog/chaos-mesh-kubesphere-banner.png",tags:["Chaos Mesh","Chaos Engineering","community"]},prevItem:{title:"Share your #ChaosMeshStory!",permalink:"/zh/blog/share-your-chaos-mesh-story"},nextItem:{title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",permalink:"/zh/blog/better-observability-for-chaos-engineering"}},i={authorsImageUrls:[void 0]},h=[{value:"What\u2019s KubeSphere",id:"whats-kubesphere",level:2},{value:"Enable App Store on KubeSphere",id:"enable-app-store-on-kubesphere",level:2},{value:"Chaos experiments with Chaos Mesh",id:"chaos-experiments-with-chaos-mesh",level:2},{value:"Step 1: Deploy Chaos Mesh",id:"step-1-deploy-chaos-mesh",level:3},{value:"Step 2: Visit Chaos Dashboard",id:"step-2-visit-chaos-dashboard",level:3},{value:"Step 3: Create a chaos experiment",id:"step-3-create-a-chaos-experiment",level:3},{value:"To summarize",id:"to-summarize",level:2}],l={toc:h},c="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Deploy Chaos Mesh on KubeSphere",src:a(37615).Z,width:"1500",height:"500"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting various types of faults into Pods, network, file system, and even the kernel."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos Mesh architecture",src:a(42201).Z,width:"1999",height:"1398"})),(0,s.kt)("h2",{id:"whats-kubesphere"},"What\u2019s KubeSphere"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://kubesphere.io/"},"KubeSphere")," is a distributed operating system for cloud-native application management, using Kubernetes as its kernel. It provides a plug-and-play architecture, allowing third-party applications to be seamlessly integrated into its ecosystem."),(0,s.kt)("p",null,"KubeSphere 3.2.0 adds the feature of dynamically loading community-developed Helm charts into the ",(0,s.kt)("a",{parentName:"p",href:"https://kubesphere.io/docs/pluggable-components/app-store/"},"KubeSphere App Store"),". Thanks to this new feature, Chaos Mesh is now available on KubeSphere. In this tutorial, you will learn how to deploy Chaos Mesh on KubeSphere to conduct chaos experiments."),(0,s.kt)("h2",{id:"enable-app-store-on-kubesphere"},"Enable App Store on KubeSphere"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Make sure you have installed and enabled the ",(0,s.kt)("a",{parentName:"p",href:"https://kubesphere.io/docs/pluggable-components/app-store/"},"KubeSphere App Store"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You need to create a workspace, a project, and a user account (project-regular) for this tutorial. The account needs to be a platform regular user and to be invited as the project operator with the operator role. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://kubesphere.io/docs/quick-start/create-workspace-and-project/"},"Create Workspaces, Projects, Users and Roles"),"."))),(0,s.kt)("h2",{id:"chaos-experiments-with-chaos-mesh"},"Chaos experiments with Chaos Mesh"),(0,s.kt)("h3",{id:"step-1-deploy-chaos-mesh"},"Step 1: Deploy Chaos Mesh"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Login KubeSphere as ",(0,s.kt)("inlineCode",{parentName:"p"},"project-regular"),", search for ",(0,s.kt)("strong",{parentName:"p"},"chaos-mesh")," in the ",(0,s.kt)("strong",{parentName:"p"},"App Store"),", and click on the search result to enter the app."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Mesh app",src:a(72161).Z,width:"1999",height:"1132"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("strong",{parentName:"p"},"App Information")," page, click ",(0,s.kt)("strong",{parentName:"p"},"Install")," on the upper right corner."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Install Chaos Mesh",src:a(72079).Z,width:"1999",height:"1090"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("strong",{parentName:"p"},"App Settings")," page, set the application ",(0,s.kt)("strong",{parentName:"p"},"Name,")," ",(0,s.kt)("strong",{parentName:"p"},"Location")," (as your Namespace), and ",(0,s.kt)("strong",{parentName:"p"},"App Version"),", and then click ",(0,s.kt)("strong",{parentName:"p"},"Next")," on the upper right corner."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Mesh basic information",src:a(33394).Z,width:"1999",height:"1245"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Configure the ",(0,s.kt)("inlineCode",{parentName:"p"},"values.yaml")," file as needed, or click ",(0,s.kt)("strong",{parentName:"p"},"Install")," to use the default configuration."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Mesh configurations",src:a(54173).Z,width:"1999",height:"1322"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Wait for the deployment to be finished. Upon completion, Chaos Mesh will be shown as ",(0,s.kt)("strong",{parentName:"p"},"Running")," in KubeSphere."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Mesh deployed",src:a(82275).Z,width:"1999",height:"721"})))),(0,s.kt)("h3",{id:"step-2-visit-chaos-dashboard"},"Step 2: Visit Chaos Dashboard"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("strong",{parentName:"p"},"Resource Status")," page, copy the ",(0,s.kt)("strong",{parentName:"p"},"NodePort "),"of ",(0,s.kt)("inlineCode",{parentName:"p"},"chaos-dashboard"),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Mesh NodePort",src:a(2505).Z,width:"1999",height:"1183"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Access the Chaos Dashboard by entering ",(0,s.kt)("inlineCode",{parentName:"p"},"${NodeIP}:${NODEPORT}")," in your browser. Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/manage-user-permissions/"},"Manage User Permissions")," to generate a Token and log into Chaos Dashboard."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Login to Chaos Dashboard",src:a(5358).Z,width:"1600",height:"767"})))),(0,s.kt)("h3",{id:"step-3-create-a-chaos-experiment"},"Step 3: Create a chaos experiment"),(0,s.kt)("p",null,"Before creating a chaos experiment, you should identify and deploy your experiment target, for example, to test how an application works under network latency. Here, we use a demo application ",(0,s.kt)("inlineCode",{parentName:"p"},"web-show")," as the target application to be tested, and the test goal is to observe the system network latency. You can deploy a demo application ",(0,s.kt)("inlineCode",{parentName:"p"},"web-show")," with the following command: ",(0,s.kt)("inlineCode",{parentName:"p"},"web-show"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | bash\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: The network latency of the Pod can be observed directly from the web-show application pad to the kube-system pod.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From your web browser, visit ",(0,s.kt)("inlineCode",{parentName:"p"},"${NodeIP}:8081")," to access the ",(0,s.kt)("strong",{parentName:"p"},"Web Show")," application."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Mesh web show app",src:a(44279).Z,width:"1600",height:"748"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Log in to Chaos Dashboard to create a chaos experiment. To observe the effect of network latency on the application, we set the ",(0,s.kt)("strong",{parentName:"p"},"Target "),'as "Network Attack" to simulate a network delay scenario.'),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Dashboard",src:a(18834).Z,width:"1999",height:"1263"})),(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("strong",{parentName:"p"},"Scope")," of the experiment is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"app: web-show"),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Chaos Experiment scope",src:a(15153).Z,width:"1999",height:"1154"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Start the chaos experiment by submitting it."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Submit Chaos Experiment",src:a(56732).Z,width:"1999",height:"980"})))),(0,s.kt)("p",null,"Now, you should be able to visit ",(0,s.kt)("strong",{parentName:"p"},"Web Show")," to observe experiment results:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos Experiment result",src:a(40778).Z,width:"1600",height:"720"})),(0,s.kt)("h2",{id:"to-summarize"},"To summarize"),(0,s.kt)("p",null,"KubeSphere makes cloud-native application deployments and maintenance easy. Thanks to the App Store, users can easily deploy Chaos Mesh on KubeSphere with just a few clicks, enabling you to quickly start your own chaos experiments."),(0,s.kt)("p",null,"To learn more about Chaos Mesh, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/"},"Chaos Mesh docs")," or join the community Slack (",(0,s.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"CNCF"),"/#project-chaos-mesh)."))}m.isMDXComponent=!0},18834:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-dashboard-networkchaos-b9db285317d00b05eb3bb07ebe582916.png"},15153:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-experiment-scope-215b20d1a6b9e1e235ceca59079c01c1.png"},72161:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-app-8adffd3053f397bb95fcda48a2c0a5a0.png"},42201:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-architecture-2.0-8f9608a528cf0eaab88b05032cc8a1f8.png"},33394:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-basic-info-08cf0a7bd5e76a47cbcc304eb25687ca.png"},54173:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-config-09ac3ba9ad416620a5cdb4d6b63b36d2.png"},82275:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-deployed-363a24608b8daa7da207cbddf42604bf.png"},37615:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-kubesphere-banner-d1ac1761a1832e257e371d279ad9c82f.png"},2505:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-nodeport-a4d9f826906e930e860982726841b582.png"},40778:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/experiment-result-fe46c56819b85b5e68bb0d3b27550424.png"},72079:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/install-chaos-mesh-d521449e8a0d735b7a53389420471008.png"},5358:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/login-to-dashboard-a9c2d9c7daa5a4532e19add776db193d.png"},56732:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/start-chaos-experiment-d709c21f47e704f7349bf8627b4a2498.png"},44279:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/web-show-app-895d8add29dc5ead3186061140dd08c9.png"}}]);