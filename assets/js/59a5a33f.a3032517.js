"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[4744],{83085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var o=n(93153),s=n(86070),i=n(8637);const a={slug:"/experience-as-a-chaos-mesh-lfx-mentee",title:"Experience as an LFX Mentee for Chaos Mesh",authors:"chunxuzhang",image:"/img/blog/lfx-mentee-experience-banner.png",tags:["Chaos Mesh","Chaos Engineering","LFX Mentorship","Monitoring Metrics"]},r=void 0,h={authorsImageUrls:[void 0]},c=[{value:"Application Process",id:"application-process",level:2},{value:"Project Process",id:"project-process",level:2},{value:"After the project",id:"after-the-project",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Experience as an LFX Mentee for Chaos Mesh",src:n(24360).A+"",width:"1600",height:"530"})}),"\n",(0,s.jsxs)(t.p,{children:["I am a graduate student studying software engineering at Nanjing University. My research focuses on DevOps, which has intrinsic connections with chaos engineering and observability. To get involved in the open-source community, understand Kubernetes more deeply, and experience the daily jobs around infrastructure, I applied for the CNCF LFX Mentorship in Fall 2021 to work on the ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," project."]}),"\n",(0,s.jsx)(t.h2,{id:"application-process",children:"Application Process"}),"\n",(0,s.jsx)(t.p,{children:"At the end of August, I finished an internship of a business nature. As expected, I decided that I was not much into business-related work. However, I always had a strong passion for infrastructure technologies. By chance, I discovered the Chaos Mesh project at CNCF LFX Mentorship.I thought this was a great opportunity to work on an open source project, which I had been dreaming about. I also had the right technology stack, so I submitted my resume right before the deadline."}),"\n",(0,s.jsx)(t.p,{children:"Three days later, I received an interview email from my mentor. As part of the interview, the mentor left a small piece of homework - to write a mini-node-exporter that would expose Prometheus metrics and present them in the Grafana dashboard. I was also required to deploy the mini-node-exporter, the configured Prometheus, and Grafana dashboard on the Kubernetes platform. The design and implementation process was very smooth. The only difficulty was to write the Grafana dashboard as a configuration YAML for the Kubernetes deployment. After a series of queries through documentation and experiments, this problem was finally solved."}),"\n",(0,s.jsx)(t.p,{children:"On August 30, I was lucky enough to receive the good news that I passed the interview. During the one-on-one meeting with the mentor, we simply talked about my familiarity with Kubernetes and other technologies, the main tasks, and some key timelines. I also raised some concerns, such as the pressure of my graduate lab project that might affect the progress of the mentorship, and the design guidelines of the metrics. My mentor understood me well and addressed my concerns."}),"\n",(0,s.jsx)(t.h2,{id:"project-process",children:"Project Process"}),"\n",(0,s.jsxs)(t.p,{children:["The project I applied for was called ",(0,s.jsx)(t.a,{href:"https://mentorship.lfx.linuxfoundation.org/project/8db683b0-0273-4a83-9ed9-4c33ee2cfcf0",children:"Monitoring Metrics about Chaos Mesh"}),", which aimed to improve the observability of the Chaos Mesh system by collecting metrics and providing a Grafana dashboard."]}),"\n",(0,s.jsx)(t.p,{children:"During the first two weeks of the project, I got familiar with the business process and some code details of chaos mesh. In the next two weeks, I started to write the design document to sort out all the metrics and collection methods. During this time, I studied the metric design guidelines and met with the mentor to understand the details of the proposal and some of the code logic."}),"\n",(0,s.jsx)(t.p,{children:"Most of these metrics are relatively simple to collect, requiring only simple queries to database objects, k8s objects, or some simple counts. However, there are some special metrics that are difficult to collect. For example, you need to query the data by executing commands in the network namespace of the corresponding container, or query all the containers under the daemon through three different container runtimes, or collect data on the communication between the gRPC client and the server."}),"\n",(0,s.jsxs)(t.p,{children:["These tasks were strange to me. Therefore, I had to ask my mentor for technical support from time to time, and he was always very responsive. I was greatly impressed by my mentor\u2019s extensive knowledge and experience in this field. Under the guidance from my mentor, I was finally able to put together the ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/rfcs/pull/23",children:"RFC"})," document for my design. Later, in order to track my work, I created a ",(0,s.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues/2397",children:"tracking issue"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tracking issue",src:n(34611).A+"",width:"851",height:"972"})}),"\n",(0,s.jsx)(t.p,{children:"However, during the subsequent coding work, I encountered various problems. In retrospect, I found that many of them could have been solved in advance. So I have summarized some suggestions below:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Keep thinking critically"}),". When I accepted the proposal, I proposed my solution for each metric off the top of my head, but ignored some basic questions: are these metrics necessary? Do we have a better solution that\u2019s available? These basic questions should have been addressed during the proposal phase, but they were propagated to the later design implementation phase. For example, when submitting the RFC, I was reminded by my mentor and reviewers that some metrics were already implemented in the controller-runtime library. When I was working on BPM-related metrics, I was asked similarly by the reviewer. Only then did I realize that I had never paid attention to it."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Comments about BPM metrics",src:n(95783).A+"",width:"558",height:"536"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Continuous communication"}),". How to communicate effectively is a very important issue in this mentorship. There are many lessons learned about communication, but the most profound is that it is better to give options before getting advice. When you have to ask for help, provide some options for the other party to reference. Although these options may not be valid, it contains your own thinking. Therefore, unless you still have no idea after thinking things through, don\u2019t put other people in the middle of your questions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Understand open source"}),". This is my first actual experience with open source. Compared with working in a company, things are a lot different. Here are some examples:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The way information is synchronized. Unlike working in a company where we communicate often with face-to-face meetings, basically most of the communications with an open source community are concentrated in slack channels, GitHub issues, and pull requests. Therefore, we need to record our work so that we can always let other folks know what is going on. In the first few weeks, I maintained an online R&D document based on my previous habit. Later I found that it was better to set up a Kanban or issue on GitHub, so that I would not introduce additional communication cost for my mentor by using a different platform."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Online R&amp;D document",src:n(10549).A+"",width:"925",height:"647"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Better and more rigorous automated testing. For business companies, automated testing only includes static code analysis, unit testing and simple smoke testing, while manual testing will be more rigorous. But in open source projects, the automated code pipeline contains more detailed and complete test cases, such as integration testing, end-to-end testing, license checking, and so on. The quality and security of the submitted code will be checked initially in this phase."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Code review. Many people will participate in your code reviews, and the review may last for a long time. Unlike company work, there are no dedicated reviewers in an open source community. It could be users, maintainers, or other community members who are either assigned or voluntarily do the job, which may be part of the reason for the long review duration."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"after-the-project",children:"After the project"}),"\n",(0,s.jsx)(t.p,{children:"I had a wonderful experience in these 12 weeks. I gained a deeper understanding of Kubernetes, CRD, and observability. I also realized that I was still lacking a lot of knowledge on how to improve code structure, Linux basics, and container technologies. There is still more to learn!"}),"\n",(0,s.jsx)(t.p,{children:"At the same time, because of the unexpected pressure of the graduate lab project, I didn\u2019t have much dedicated time for the mentorship. I didn\u2019t even get to finish the design of the Grafana part within the time frame. I will definitely follow up with it and hope to finish it successfully and give a real conclusion to this project."}),"\n",(0,s.jsxs)(t.p,{children:["I would like to thank my mentor ",(0,s.jsx)(t.a,{href:"https://github.com/STRRL",children:"@STRRL"}),". During my internship, I encountered many problems in the project, such as Git operations, cycle dependency solutions, and finding the runtime interface for CRI-O. Without my mentor's patience and guidance, it would have been difficult for me to complete these unfamiliar technical challenges. I would also like to thank the maintainers of Chaos Mesh for reviewing my code, and the CNCF LFX Mentorship project for providing a great platform for all of us who want to participate in the open-source community."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Mentor&#39;s LGTM",src:n(49391).A+"",width:"592",height:"143"})}),"\n",(0,s.jsx)(t.p,{children:"Finally, I hope every student who wants to be part of the open-source community can take the first step with LFX Mentorship!"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},24360:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/lfx-mentee-experience-banner-69b87cf6f4a6a751404a33fd8d42af63.png"},49391:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/lfx-mentee-experience-mentors-lgtm-d408ab5a3921965164faf556fe5fa653.png"},10549:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/lfx-mentee-experience-rd-doc-61a0b04340778b07db56a096231feb5e.png"},95783:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/lfx-mentee-experience-thinking-critically-fcd1d0475090c15217fac74a711df8ef.png"},34611:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/lfx-mentee-experience-tracking-issue-7ea5bc9c4a4193bbfc5b1e8c449de2a9.png"},8637:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(30758);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}},93153:e=>{e.exports=JSON.parse('{"permalink":"/blog/experience-as-a-chaos-mesh-lfx-mentee","editUrl":"https://github.com/chaos-mesh/website/edit/master/blog/2022-01-14-experience-as-an-lfx-mentee-for-chaos-mesh.md","source":"@site/blog/2022-01-14-experience-as-an-lfx-mentee-for-chaos-mesh.md","title":"Experience as an LFX Mentee for Chaos Mesh","description":"Experience as an LFX Mentee for Chaos Mesh","date":"2022-01-14T00:00:00.000Z","tags":[{"inline":true,"label":"Chaos Mesh","permalink":"/blog/tags/chaos-mesh"},{"inline":true,"label":"Chaos Engineering","permalink":"/blog/tags/chaos-engineering"},{"inline":true,"label":"LFX Mentorship","permalink":"/blog/tags/lfx-mentorship"},{"inline":true,"label":"Monitoring Metrics","permalink":"/blog/tags/monitoring-metrics"}],"readingTime":6.57,"hasTruncateMarker":true,"authors":[{"name":"Chunxu Zhang","title":"LFX Mentee at Chaos Mesh","url":"https://github.com/TangliziGit","imageURL":"https://avatars.githubusercontent.com/u/40566218?v=4","key":"chunxuzhang","page":null}],"frontMatter":{"slug":"/experience-as-a-chaos-mesh-lfx-mentee","title":"Experience as an LFX Mentee for Chaos Mesh","authors":"chunxuzhang","image":"/img/blog/lfx-mentee-experience-banner.png","tags":["Chaos Mesh","Chaos Engineering","LFX Mentorship","Monitoring Metrics"]},"unlisted":false,"prevItem":{"title":"Chaos Mesh Q&A at KUBECON EU 2022","permalink":"/blog/chaos-mesh-qa-at-kubecon-eu-2022"},"nextItem":{"title":"How to Develop a Daily Reporting System to Track Chaos Testing Results","permalink":"/blog/develop-a-daily-reporting-system"}}')}}]);