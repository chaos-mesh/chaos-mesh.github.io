"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6581],{13105:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(11527),n=t(54881);const a={slug:"/chaos-mesh-q&a",title:"Chaos Mesh Q&A",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,r={permalink:"/blog/chaos-mesh-q&a",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-07-09-chaos-mesh-q&a.md",source:"@site/blog/2021-07-09-chaos-mesh-q&a.md",title:"Chaos Mesh Q&A",description:"Chaos Mesh Q&A",date:"2021-07-09T00:00:00.000Z",formattedDate:"July 9, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:3.035,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Community",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-q&a",title:"Chaos Mesh Q&A",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},unlisted:!1,prevItem:{title:"Chaos Mesh Celebrates 100th Contributor",permalink:"/blog/chaos-mesh-celebrates-100th-contributor"},nextItem:{title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",permalink:"/blog/securing-tenant-namespaces-using-restrict-authorization-feature"}},h={authorsImageUrls:[void 0]},c=[{value:"Your questions answered",id:"your-questions-answered",level:2},{value:"Join the Chaos Mesh community",id:"join-the-chaos-mesh-community",level:2}];function u(e){const s={a:"a",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Mesh Q&amp;A",src:t(16814).Z+"",width:"3126",height:"1043"})}),"\n",(0,o.jsxs)(s.p,{children:["At KubeCon EU 2021, the ",(0,o.jsx)(s.a,{href:"https://chaos-mesh.org/",children:"Chaos Mesh"})," team hosted two \u201coffice hours sessions\u201d where newcomers, community members, and project maintainers had a chance to chat, get to know each other, and learn more about the project."]}),"\n",(0,o.jsx)(s.p,{children:"Big thanks to the more than 200 of you who joined us! We received so many great questions during the session, we thought we\u2019d do a round up Q&A."}),"\n",(0,o.jsx)(s.h2,{id:"your-questions-answered",children:"Your questions answered"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Q: Is Chaos Mesh compatible with Service Meshes, such as Istio?"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"A:"})," Yes, you can use Chaos Mesh in the Service Mesh environment. At one of our ",(0,o.jsx)(s.a,{href:"https://www.youtube.com/watch?v=paIgJYOhdGw",children:"previous community meetings"}),", Sergio M\xe9ndez and Jossie Castrillo from the University of San Carlos of Guatemala shared how they used Linkerd and Chaos Mesh to conduct chaos experiments for their project, \u201c",(0,o.jsx)(s.a,{href:"https://github.com/sergioarmgpl/operating-systems-usac-course/blob/master/lang/en/projects/project1v3/project1.md",children:"COVID-19 Realtime Vaccinated People Visualizer"}),"\u201d."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Project Architecture",src:t(14932).Z+"",width:"2554",height:"1434"})}),"\n",(0,o.jsx)("p",{className:"caption",children:"Project Architecture"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Q: Can I use Chaos Mesh on-premises or do I need Amazon Web Services (AWS) or Google Cloud Platform (GCP)?"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"A:"})," You can do either! You can deploy Chaos Mesh on your Kubernetes cluster, so it does not matter whether you manage it yourself or have it hosted on AWS or GCP. However, if you would like to use it in a Kubernetes environment, you need to ",(0,o.jsx)(s.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/user_guides/installation",children:"set relevant parameters"})," during installation."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:'Q: How do "chaos actions" work?'})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"A:"})," Chaos Mesh uses Kubernetes CustomResourceDefinitions (CRDs) to manage chaos experiments. Different fault injection behaviors are implemented in different ways, but the overall idea is the same: Chaos Mesh uses an application's execution link to inject chaos into the application. For example, when we inject chaos into the overall link of network interaction, the network interaction card is passed through. Because Linux uses traffic control to increase interference to the specific network interaction card, we can directly use traffic control for network fault injection."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Q: Are you going to add probe support to Chaos Mesh for steady state detection and experiment validation?"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"A:"})," Currently, there is no plan to add this support. Steady state detection and experiment validation are necessary if an application is ready for production. Chaos Mesh itself does not monitor related work, but provides an interface to access existing monitoring systems or the status interface of the application to monitor and detect the application\u2019s steady state."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Q: What elevated privileges do the Chaos Mesh pods need?"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"A:"})," By default, the Chaos Daemon components in Chaos Mesh run in the ",(0,o.jsx)(s.code,{children:"privileged"})," mode. If your Kubernetes cluster version is v3.11 or higher, you can replace ",(0,o.jsx)(s.code,{children:"privileged"})," mode by configuring ",(0,o.jsx)(s.code,{children:"capabilities"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Q: Can I implement Chaos Mesh inside build pipelines to log specific test results?"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"A:"})," Yes, that\u2019s easy to do. You can integrate Chaos Mesh with pipeline systems such as Argo, Jenkins, GitHub Action, and Spanner. Chaos Mesh uses Kubernetes CRDs to manage chaos experiments. To inject chaos, you only need to create the chaos CRD object you want in the pipeline. You can obtain the running status of an experiment through its status structure and event."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Q: What can we expect from the 2.0 release? Can you share some updates on HTTPChaos?"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"A:"})," Chaos Mesh 2.0 will provide native workflow support, and users can arrange chaos experiments in Chaos Mesh. In addition, for Chaos Mesh 2.0, we have reconstructed the existing chaos controller so that users can more easily add new fault injection types. As for HTTPChaos, we\u2019re adding network failure simulation to the HTTP application layer!"]}),"\n",(0,o.jsx)(s.h2,{id:"join-the-chaos-mesh-community",children:"Join the Chaos Mesh community"}),"\n",(0,o.jsxs)(s.p,{children:["If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",(0,o.jsx)(s.a,{href:"https://slack.cncf.io/",children:"our Slack channel"})," or submit your pull requests or issues to our ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub repository"}),"."]})]})}function l(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},14932:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/chaos-mesh-linkerd-architecture-5fca7bb217df34ff1bc30abc5502bdd4.png"},16814:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/chaos-mesh-q&a-5ee3460631a40ccb4ab675860e9bddd7.jpeg"},54881:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>i});var o=t(50959);const n={},a=o.createContext(n);function i(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);