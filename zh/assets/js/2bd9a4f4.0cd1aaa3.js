"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[3939],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),h=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=h(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=h(a),u=o,d=m["".concat(i,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(d,s(s({ref:t},l),{},{components:a})):n.createElement(d,s({ref:t},l))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var h=2;h<r;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81050:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return h},assets:function(){return l},toc:function(){return c},default:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],p={slug:"/deploy-chaos-mesh-on-kubesphere",title:"Deploy Chaos Mesh on KubeSphere",author:"Cwen Yin",author_title:"Chaos Mesh Maintainer",author_url:"https://github.com/cwen0",author_image_url:"https://avatars.githubusercontent.com/u/22956341?v=4",image:"/img/chaos-mesh-kubesphere-banner.png",tags:["Chaos Mesh","Chaos Engineering","community"]},i=void 0,h={permalink:"/zh/blog/deploy-chaos-mesh-on-kubesphere",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md",source:"@site/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md",title:"Deploy Chaos Mesh on KubeSphere",description:"Deploy Chaos Mesh on KubeSphere",date:"2021-12-22T00:00:00.000Z",formattedDate:"2021\u5e7412\u670822\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"community",permalink:"/zh/blog/tags/community"}],readingTime:3.065,truncated:!0,authors:[{name:"Cwen Yin",title:"Chaos Mesh Maintainer",url:"https://github.com/cwen0",imageURL:"https://avatars.githubusercontent.com/u/22956341?v=4"}],prevItem:{title:"Share your #ChaosMeshStory!",permalink:"/zh/blog/share-your-chaos-mesh-story"},nextItem:{title:"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering",permalink:"/zh/blog/better-observability-for-chaos-engineering"}},l={authorsImageUrls:[void 0]},c=[{value:"What\u2019s KubeSphere",id:"whats-kubesphere",children:[],level:2},{value:"Enable App Store on KubeSphere",id:"enable-app-store-on-kubesphere",children:[],level:2},{value:"Chaos experiments with Chaos Mesh",id:"chaos-experiments-with-chaos-mesh",children:[{value:"Step 1: Deploy Chaos Mesh",id:"step-1-deploy-chaos-mesh",children:[],level:3},{value:"Step 2: Visit Chaos Dashboard",id:"step-2-visit-chaos-dashboard",children:[],level:3},{value:"Step 3: Create a chaos experiment",id:"step-3-create-a-chaos-experiment",children:[],level:3}],level:2},{value:"To summarize",id:"to-summarize",children:[],level:2}],m={toc:c};function u(e){var t=e.components,p=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy Chaos Mesh on KubeSphere",src:a(89883).Z})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting various types of faults into Pods, network, file system, and even the kernel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chaos Mesh architecture",src:a(67436).Z})),(0,r.kt)("h2",{id:"whats-kubesphere"},"What\u2019s KubeSphere"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubesphere.io/"},"KubeSphere")," is a distributed operating system for cloud-native application management, using Kubernetes as its kernel. It provides a plug-and-play architecture, allowing third-party applications to be seamlessly integrated into its ecosystem."),(0,r.kt)("p",null,"KubeSphere 3.2.0 adds the feature of dynamically loading community-developed Helm charts into the ",(0,r.kt)("a",{parentName:"p",href:"https://kubesphere.io/docs/pluggable-components/app-store/"},"KubeSphere App Store"),". Thanks to this new feature, Chaos Mesh is now available on KubeSphere. In this tutorial, you will learn how to deploy Chaos Mesh on KubeSphere to conduct chaos experiments."),(0,r.kt)("h2",{id:"enable-app-store-on-kubesphere"},"Enable App Store on KubeSphere"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you have installed and enabled the ",(0,r.kt)("a",{parentName:"p",href:"https://kubesphere.io/docs/pluggable-components/app-store/"},"KubeSphere App Store"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You need to create a workspace, a project, and a user account (project-regular) for this tutorial. The account needs to be a platform regular user and to be invited as the project operator with the operator role. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://kubesphere.io/docs/quick-start/create-workspace-and-project/"},"Create Workspaces, Projects, Users and Roles"),"."))),(0,r.kt)("h2",{id:"chaos-experiments-with-chaos-mesh"},"Chaos experiments with Chaos Mesh"),(0,r.kt)("h3",{id:"step-1-deploy-chaos-mesh"},"Step 1: Deploy Chaos Mesh"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login KubeSphere as ",(0,r.kt)("inlineCode",{parentName:"p"},"project-regular"),", search for ",(0,r.kt)("strong",{parentName:"p"},"chaos-mesh")," in the ",(0,r.kt)("strong",{parentName:"p"},"App Store"),", and click on the search result to enter the app."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Mesh app",src:a(84921).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"App Information")," page, click ",(0,r.kt)("strong",{parentName:"p"},"Install")," on the upper right corner."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Install Chaos Mesh",src:a(7455).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"App Settings")," page, set the application ",(0,r.kt)("strong",{parentName:"p"},"Name,")," ",(0,r.kt)("strong",{parentName:"p"},"Location")," (as your Namespace), and ",(0,r.kt)("strong",{parentName:"p"},"App Version"),", and then click ",(0,r.kt)("strong",{parentName:"p"},"Next")," on the upper right corner."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Mesh basic information",src:a(79653).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file as needed, or click ",(0,r.kt)("strong",{parentName:"p"},"Install")," to use the default configuration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Mesh configurations",src:a(94455).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for the deployment to be finished. Upon completion, Chaos Mesh will be shown as ",(0,r.kt)("strong",{parentName:"p"},"Running")," in KubeSphere."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Mesh deployed",src:a(58605).Z})))),(0,r.kt)("h3",{id:"step-2-visit-chaos-dashboard"},"Step 2: Visit Chaos Dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Resource Status")," page, copy the ",(0,r.kt)("strong",{parentName:"p"},"NodePort "),"of ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-dashboard"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Mesh NodePort",src:a(9058).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access the Chaos Dashboard by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"${NodeIP}:${NODEPORT}")," in your browser. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/manage-user-permissions/"},"Manage User Permissions")," to generate a Token and log into Chaos Dashboard."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Login to Chaos Dashboard",src:a(59426).Z})))),(0,r.kt)("h3",{id:"step-3-create-a-chaos-experiment"},"Step 3: Create a chaos experiment"),(0,r.kt)("p",null,"Before creating a chaos experiment, you should identify and deploy your experiment target, for example, to test how an application works under network latency. Here, we use a demo application ",(0,r.kt)("inlineCode",{parentName:"p"},"web-show")," as the target application to be tested, and the test goal is to observe the system network latency. You can deploy a demo application ",(0,r.kt)("inlineCode",{parentName:"p"},"web-show")," with the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"web-show"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | bash\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The network latency of the Pod can be observed directly from the web-show application pad to the kube-system pod.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From your web browser, visit ",(0,r.kt)("inlineCode",{parentName:"p"},"${NodeIP}:8081")," to access the ",(0,r.kt)("strong",{parentName:"p"},"Web Show")," application."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Mesh web show app",src:a(63283).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to Chaos Dashboard to create a chaos experiment. To observe the effect of network latency on the application, we set the ",(0,r.kt)("strong",{parentName:"p"},"Target "),'as "Network Attack" to simulate a network delay scenario.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Dashboard",src:a(81630).Z})),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Scope")," of the experiment is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"app: web-show"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Chaos Experiment scope",src:a(16196).Z}),"  "))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the chaos experiment by submitting it."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Submit Chaos Experiment",src:a(40091).Z})))),(0,r.kt)("p",null,"Now, you should be able to visit ",(0,r.kt)("strong",{parentName:"p"},"Web Show")," to observe experiment results:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chaos Experiment result",src:a(85213).Z})),(0,r.kt)("h2",{id:"to-summarize"},"To summarize"),(0,r.kt)("p",null,"KubeSphere makes cloud-native application deployments and maintenance easy. Thanks to the App Store, users can easily deploy Chaos Mesh on KubeSphere with just a few clicks, enabling you to quickly start your own chaos experiments."),(0,r.kt)("p",null,"To learn more about Chaos Mesh, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/"},"Chaos Mesh docs")," or join the community Slack (",(0,r.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"CNCF"),"/#project-chaos-mesh)."))}u.isMDXComponent=!0},81630:function(e,t,a){t.Z=a.p+"assets/images/chaos-dashboard-networkchaos-b9db285317d00b05eb3bb07ebe582916.png"},16196:function(e,t,a){t.Z=a.p+"assets/images/chaos-experiment-scope-215b20d1a6b9e1e235ceca59079c01c1.png"},84921:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-app-8adffd3053f397bb95fcda48a2c0a5a0.png"},67436:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-architecture-2.0-8f9608a528cf0eaab88b05032cc8a1f8.png"},79653:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-basic-info-08cf0a7bd5e76a47cbcc304eb25687ca.png"},94455:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-config-09ac3ba9ad416620a5cdb4d6b63b36d2.png"},58605:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-deployed-363a24608b8daa7da207cbddf42604bf.png"},89883:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-kubesphere-banner-d1ac1761a1832e257e371d279ad9c82f.png"},9058:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-nodeport-a4d9f826906e930e860982726841b582.png"},85213:function(e,t,a){t.Z=a.p+"assets/images/experiment-result-fe46c56819b85b5e68bb0d3b27550424.png"},7455:function(e,t,a){t.Z=a.p+"assets/images/install-chaos-mesh-d521449e8a0d735b7a53389420471008.png"},59426:function(e,t,a){t.Z=a.p+"assets/images/login-to-dashboard-a9c2d9c7daa5a4532e19add776db193d.png"},40091:function(e,t,a){t.Z=a.p+"assets/images/start-chaos-experiment-d709c21f47e704f7349bf8627b4a2498.png"},63283:function(e,t,a){t.Z=a.p+"assets/images/web-show-app-895d8add29dc5ead3186061140dd08c9.png"}}]);