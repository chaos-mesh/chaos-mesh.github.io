"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1355],{90442:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>h,metadata:()=>t,toc:()=>c});var t=n(84951),o=n(86070),a=n(8637);const h={slug:"/deploy-chaos-mesh-on-kubesphere",title:"Deploy Chaos Mesh on KubeSphere",authors:"cwen",image:"/img/blog/chaos-mesh-kubesphere-banner.png",tags:["Chaos Mesh","Chaos Engineering","Community"]},r=void 0,i={authorsImageUrls:[void 0]},c=[{value:"What\u2019s KubeSphere",id:"whats-kubesphere",level:2},{value:"Enable App Store on KubeSphere",id:"enable-app-store-on-kubesphere",level:2},{value:"Chaos experiments with Chaos Mesh",id:"chaos-experiments-with-chaos-mesh",level:2},{value:"Step 1: Deploy Chaos Mesh",id:"step-1-deploy-chaos-mesh",level:3},{value:"Step 2: Visit Chaos Dashboard",id:"step-2-visit-chaos-dashboard",level:3},{value:"Step 3: Create a chaos experiment",id:"step-3-create-a-chaos-experiment",level:3},{value:"To summarize",id:"to-summarize",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Deploy Chaos Mesh on KubeSphere",src:n(47531).A+"",width:"1500",height:"500"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can test your system's resilience and robustness on Kubernetes by injecting various types of faults into Pods, network, file system, and even the kernel."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh architecture",src:n(40936).A+"",width:"1999",height:"1398"})}),"\n",(0,o.jsx)(s.h2,{id:"whats-kubesphere",children:"What\u2019s KubeSphere"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://kubesphere.io/",children:"KubeSphere"})," is a distributed operating system for cloud-native application management, using Kubernetes as its kernel. It provides a plug-and-play architecture, allowing third-party applications to be seamlessly integrated into its ecosystem."]}),"\n",(0,o.jsxs)(s.p,{children:["KubeSphere 3.2.0 adds the feature of dynamically loading community-developed Helm charts into the ",(0,o.jsx)(s.a,{href:"https://kubesphere.io/docs/pluggable-components/app-store/",children:"KubeSphere App Store"}),". Thanks to this new feature, Chaos Mesh is now available on KubeSphere. In this tutorial, you will learn how to deploy Chaos Mesh on KubeSphere to conduct chaos experiments."]}),"\n",(0,o.jsx)(s.h2,{id:"enable-app-store-on-kubesphere",children:"Enable App Store on KubeSphere"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Make sure you have installed and enabled the ",(0,o.jsx)(s.a,{href:"https://kubesphere.io/docs/pluggable-components/app-store/",children:"KubeSphere App Store"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["You need to create a workspace, a project, and a user account (project-regular) for this tutorial. The account needs to be a platform regular user and to be invited as the project operator with the operator role. For more information, see ",(0,o.jsx)(s.a,{href:"https://kubesphere.io/docs/quick-start/create-workspace-and-project/",children:"Create Workspaces, Projects, Users and Roles"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"chaos-experiments-with-chaos-mesh",children:"Chaos experiments with Chaos Mesh"}),"\n",(0,o.jsx)(s.h3,{id:"step-1-deploy-chaos-mesh",children:"Step 1: Deploy Chaos Mesh"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Login KubeSphere as ",(0,o.jsx)(s.code,{children:"project-regular"}),", search for ",(0,o.jsx)(s.strong,{children:"chaos-mesh"})," in the ",(0,o.jsx)(s.strong,{children:"App Store"}),", and click on the search result to enter the app."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh app",src:n(42289).A+"",width:"1999",height:"1132"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["In the ",(0,o.jsx)(s.strong,{children:"App Information"})," page, click ",(0,o.jsx)(s.strong,{children:"Install"})," on the upper right corner."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Install Chaos Mesh",src:n(38321).A+"",width:"1999",height:"1090"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["In the ",(0,o.jsx)(s.strong,{children:"App Settings"})," page, set the application ",(0,o.jsx)(s.strong,{children:"Name,"})," ",(0,o.jsx)(s.strong,{children:"Location"})," (as your Namespace), and ",(0,o.jsx)(s.strong,{children:"App Version"}),", and then click ",(0,o.jsx)(s.strong,{children:"Next"})," on the upper right corner."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh basic information",src:n(26053).A+"",width:"1999",height:"1245"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Configure the ",(0,o.jsx)(s.code,{children:"values.yaml"})," file as needed, or click ",(0,o.jsx)(s.strong,{children:"Install"})," to use the default configuration."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh configurations",src:n(12824).A+"",width:"1999",height:"1322"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Wait for the deployment to be finished. Upon completion, Chaos Mesh will be shown as ",(0,o.jsx)(s.strong,{children:"Running"})," in KubeSphere."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh deployed",src:n(42240).A+"",width:"1999",height:"721"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"step-2-visit-chaos-dashboard",children:"Step 2: Visit Chaos Dashboard"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["In the ",(0,o.jsx)(s.strong,{children:"Resource Status"})," page, copy the **NodePort **of ",(0,o.jsx)(s.code,{children:"chaos-dashboard"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh NodePort",src:n(9367).A+"",width:"1999",height:"1183"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Access the Chaos Dashboard by entering ",(0,o.jsx)(s.code,{children:"${NodeIP}:${NODEPORT}"})," in your browser. Refer to ",(0,o.jsx)(s.a,{href:"https://chaos-mesh.org/docs/manage-user-permissions/",children:"Manage User Permissions"})," to generate a Token and log into Chaos Dashboard."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Login to Chaos Dashboard",src:n(36837).A+"",width:"1600",height:"767"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"step-3-create-a-chaos-experiment",children:"Step 3: Create a chaos experiment"}),"\n",(0,o.jsxs)(s.p,{children:["Before creating a chaos experiment, you should identify and deploy your experiment target, for example, to test how an application works under network latency. Here, we use a demo application ",(0,o.jsx)(s.code,{children:"web-show"})," as the target application to be tested, and the test goal is to observe the system network latency. You can deploy a demo application ",(0,o.jsx)(s.code,{children:"web-show"})," with the following command: ",(0,o.jsx)(s.code,{children:"web-show"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | bash\n"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Note: The network latency of the Pod can be observed directly from the web-show application pad to the kube-system pod."}),"\n"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["From your web browser, visit ",(0,o.jsx)(s.code,{children:"${NodeIP}:8081"})," to access the ",(0,o.jsx)(s.strong,{children:"Web Show"})," application."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh web show app",src:n(29987).A+"",width:"1600",height:"748"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:'Log in to Chaos Dashboard to create a chaos experiment. To observe the effect of network latency on the application, we set the **Target **as "Network Attack" to simulate a network delay scenario.'}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Dashboard",src:n(45219).A+"",width:"1999",height:"1263"})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.strong,{children:"Scope"})," of the experiment is set to ",(0,o.jsx)(s.code,{children:"app: web-show"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Experiment scope",src:n(19194).A+"",width:"1999",height:"1154"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Start the chaos experiment by submitting it."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Submit Chaos Experiment",src:n(94872).A+"",width:"1999",height:"980"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Now, you should be able to visit ",(0,o.jsx)(s.strong,{children:"Web Show"})," to observe experiment results:"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Experiment result",src:n(17592).A+"",width:"1600",height:"720"})}),"\n",(0,o.jsx)(s.h2,{id:"to-summarize",children:"To summarize"}),"\n",(0,o.jsx)(s.p,{children:"KubeSphere makes cloud-native application deployments and maintenance easy. Thanks to the App Store, users can easily deploy Chaos Mesh on KubeSphere with just a few clicks, enabling you to quickly start your own chaos experiments."}),"\n",(0,o.jsxs)(s.p,{children:["To learn more about Chaos Mesh, refer to the ",(0,o.jsx)(s.a,{href:"https://chaos-mesh.org/docs/",children:"Chaos Mesh docs"})," or join the community Slack (",(0,o.jsx)(s.a,{href:"https://slack.cncf.io/",children:"CNCF"}),"/#project-chaos-mesh)."]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},45219:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-dashboard-networkchaos-b9db285317d00b05eb3bb07ebe582916.png"},19194:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-experiment-scope-215b20d1a6b9e1e235ceca59079c01c1.png"},42289:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-app-8adffd3053f397bb95fcda48a2c0a5a0.png"},40936:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-architecture-2.0-8f9608a528cf0eaab88b05032cc8a1f8.png"},26053:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-basic-info-08cf0a7bd5e76a47cbcc304eb25687ca.png"},12824:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-config-09ac3ba9ad416620a5cdb4d6b63b36d2.png"},42240:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-deployed-363a24608b8daa7da207cbddf42604bf.png"},47531:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-kubesphere-banner-d1ac1761a1832e257e371d279ad9c82f.png"},9367:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-nodeport-a4d9f826906e930e860982726841b582.png"},17592:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/experiment-result-fe46c56819b85b5e68bb0d3b27550424.png"},38321:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/install-chaos-mesh-d521449e8a0d735b7a53389420471008.png"},36837:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/login-to-dashboard-a9c2d9c7daa5a4532e19add776db193d.png"},94872:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/start-chaos-experiment-d709c21f47e704f7349bf8627b4a2498.png"},29987:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/web-show-app-895d8add29dc5ead3186061140dd08c9.png"},8637:(e,s,n)=>{n.d(s,{R:()=>h,x:()=>r});var t=n(30758);const o={},a=t.createContext(o);function h(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:h(e.components),t.createElement(a.Provider,{value:s},e.children)}},84951:e=>{e.exports=JSON.parse('{"permalink":"/zh/blog/deploy-chaos-mesh-on-kubesphere","editUrl":"https://github.com/chaos-mesh/website/edit/master/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md","source":"@site/blog/2021-12-22-deploy-chaos-mesh-on-kubesphere.md","title":"Deploy Chaos Mesh on KubeSphere","description":"Deploy Chaos Mesh on KubeSphere","date":"2021-12-22T00:00:00.000Z","tags":[{"inline":true,"label":"Chaos Mesh","permalink":"/zh/blog/tags/chaos-mesh"},{"inline":true,"label":"Chaos Engineering","permalink":"/zh/blog/tags/chaos-engineering"},{"inline":true,"label":"Community","permalink":"/zh/blog/tags/community"}],"readingTime":3.065,"hasTruncateMarker":true,"authors":[{"name":"Cwen Yin","title":"Maintainer of Chaos Mesh","url":"https://github.com/cwen0","email":"cwenyin0@gmail.com","socials":{"x":"https://x.com/CWenYin"},"imageURL":"https://avatars.githubusercontent.com/u/22956341?v=4","key":"cwen","page":null}],"frontMatter":{"slug":"/deploy-chaos-mesh-on-kubesphere","title":"Deploy Chaos Mesh on KubeSphere","authors":"cwen","image":"/img/blog/chaos-mesh-kubesphere-banner.png","tags":["Chaos Mesh","Chaos Engineering","Community"]},"unlisted":false,"prevItem":{"title":"Share your #ChaosMeshStory!","permalink":"/zh/blog/share-your-chaos-mesh-story"},"nextItem":{"title":"Chaos Mesh + SkyWalking: Better Observability for Chaos Engineering","permalink":"/zh/blog/better-observability-for-chaos-engineering"}}')}}]);