"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5439],{22007:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>h,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var n=o(80501),a=o(86070),s=o(8637);const i={slug:"/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead",title:"Celebrating One Year of Chaos Mesh: Looking Back and Ahead",authors:"chaos-mesh",image:"/img/blog/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead.jpg",tags:["Chaos Mesh","Chaos Engineering"]},h=void 0,r={authorsImageUrls:[void 0]},c=[{value:"The project: thrive with a clear goal in mind",id:"the-project-thrive-with-a-clear-goal-in-mind",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Ease of use",id:"ease-of-use",level:3},{value:"Security",id:"security",level:3},{value:"Cloud native ecosystem: integrations and cooperations",id:"cloud-native-ecosystem-integrations-and-cooperations",level:2},{value:"Grafana",id:"grafana",level:3},{value:"GitHub Action",id:"github-action",level:3},{value:"TiPocket",id:"tipocket",level:3},{value:"The community: built from the ground up",id:"the-community-built-from-the-ground-up",level:2},{value:"Becoming part of the CNCF family",id:"becoming-part-of-the-cncf-family",level:3},{value:"A friendly and supportive community",id:"a-friendly-and-supportive-community",level:3},{value:"Looking ahead",id:"looking-ahead",level:2},{value:"Last but not least",id:"last-but-not-least",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Celebrating One Year of Chaos Mesh: Looking Back and Ahead",src:o(29237).A+"",width:"3126",height:"1042"})}),"\n",(0,a.jsxs)(t.p,{children:["It\u2019s been a year since Chaos Mesh was first open-sourced on GitHub. Chaos Mesh started out as a mere fault injection tool and is now heading towards the goal of building a chaos engineering ecology. Meanwhile, the Chaos Mesh community was also built from scratch and has helped ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," join CNCF as a Sandbox project."]}),"\n",(0,a.jsx)(t.p,{children:"In this article, we will share with you how Chaos Mesh has grown and changed in the past year, and also discuss its future goals and plans."}),"\n",(0,a.jsx)(t.h2,{id:"the-project-thrive-with-a-clear-goal-in-mind",children:"The project: thrive with a clear goal in mind"}),"\n",(0,a.jsxs)(t.p,{children:["In this past year, Chaos Mesh has grown at an impressive speed with the joint efforts of the community. From the very first version to the recently released ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/releases/tag/v1.1.0",children:"v1.1.0"}),", Chaos Mesh has been greatly improved in terms of functionality, ease of use, and security."]}),"\n",(0,a.jsx)(t.h3,{id:"functionality",children:"Functionality"}),"\n",(0,a.jsx)(t.p,{children:"When first open-sourced, Chaos Mesh supported only three fault types: PodChaos, NetworkChaos, and IOChaos. Within only a year, Chaos Mesh can perform all around fault injections into the network, system clock, JVM applications, filesystems, operating systems, and so on."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Chaos Tests",src:o(59269).A+"",width:"904",height:"256"})}),"\n",(0,a.jsx)(t.p,{children:"After continuous optimization, Chaos Mesh now provides a flexible scheduling mechanism, which enables users to better design their own chaos experiments. This laid the foundation for chaos orchestration."}),"\n",(0,a.jsxs)(t.p,{children:["In the meantime, we are happy to see that a number of users have started to ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues/1182",children:"test Chaos Mesh on major cloud platforms"}),", such as Amazon Web Services (AWS), Google Kubernetes Engine (GKE), Alibaba Cloud, and Tencent Cloud. We have continuously conducted compatibility testing and adaptations, in order to support ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/pull/1330",children:"fault injection for specific cloud platforms"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["To better support Kubernetes native components and node-level failures, we developed ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaosd",children:"Chaosd"}),", which provides physical node-level fault injection. We're extensively testing and refining this feature for release within the next few months."]}),"\n",(0,a.jsx)(t.h3,{id:"ease-of-use",children:"Ease of use"}),"\n",(0,a.jsx)(t.p,{children:"Ease of use has been one of the guiding principles of Chaos Mesh development since day one. You can deploy Chaos Mesh with a single command line. The V1.0 release brought the long-awaited Chaos Dashboard, a one-stop web interface for users to orchestrate chaos experiments. You can define the scope of the chaos experiment, specify the type of chaos injection, define scheduling rules, and observe the results of the chaos experiment\u2014all in the same web interface with only a few clicks."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Chaos Dashboard",src:o(5033).A+"",width:"952",height:"532"})}),"\n",(0,a.jsx)(t.p,{children:"Prior to V1.0, many users reported being blocked by various configuration problems when injecting IOChaos faults. After intense investigations and discussions, we gave up the original SideCar implementation. Instead, we used chaos-daemon to dynamically invade the target Pod, which significantly simplifies the logic. This optimization has made dynamic I/O fault injection possible with Chaos Mesh, and users can focus solely on their experiments without having to worry about additional configurations."}),"\n",(0,a.jsx)(t.h3,{id:"security",children:"Security"}),"\n",(0,a.jsx)(t.p,{children:"We have improved the security of Chaos Mesh. It now provides a comprehensive set of selectors to control the scope of the experiments, and supports setting specific namespaces to protect important applications. What\u2019s more, the support of namespace permissions allows users to limit the \u201cexplosion radius\u201d of a chaos experiment to a specific namespace."}),"\n",(0,a.jsx)(t.p,{children:"In addition, Chaos Mesh directly reuses Kubernetes\u2019 native permission mechanism and supports verification on the Chaos Dashboard. This protects you from other users\u2019 errors, which can cause chaos experiments to fail or become uncontrollable."}),"\n",(0,a.jsx)(t.h2,{id:"cloud-native-ecosystem-integrations-and-cooperations",children:"Cloud native ecosystem: integrations and cooperations"}),"\n",(0,a.jsxs)(t.p,{children:["In July 2020, Chaos Mesh was successfully ",(0,a.jsx)(t.a,{href:"https://chaos-mesh.org/blog/chaos-mesh-join-cncf-sandbox-project",children:"accepted as a CNCF Sandbox project"}),". This shows that Chaos Mesh has received initial recognition from the cloud native community. At the same time, it means that Chaos Mesh has a clear mission: to promote the application of chaos engineering in the cloud native field and to cooperate with other cloud native projects so we can grow together."]}),"\n",(0,a.jsx)(t.h3,{id:"grafana",children:"Grafana"}),"\n",(0,a.jsxs)(t.p,{children:["To further improve the observability of chaos experiments, we have included a separate ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh-datasource",children:"Grafana plug-in"})," for Chaos Mesh, which allows users to directly display real-time chaos experiment information on the application monitoring panel. This way, users can simultaneously observe the running status of the application and the current chaos experiment information."]}),"\n",(0,a.jsx)(t.h3,{id:"github-action",children:"GitHub Action"}),"\n",(0,a.jsxs)(t.p,{children:["To enable users to run chaos experiments even during the development phase, we developed the ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh-action",children:"chaos-mesh-action"})," project, allowing Chaos Mesh to run in the workflow of GitHub Actions. This way, Chaos Mesh can easily be integrated into daily system development and testing."]}),"\n",(0,a.jsx)(t.h3,{id:"tipocket",children:"TiPocket"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/pingcap/tipocket",children:"TiPocket"})," is an automated test platform that integrates Chaos Mesh and Argo, a workflow engine designed for Kubernetes. TiPocket is designed to be a fully automated chaos engineering testing loop for TiDB, a distributed database. There are a number of steps when we conduct chaos experiments, including deploying applications, running workloads, injecting exceptions, and business checks. To fully automate these steps, Argo was integrated into TiPocket. Chaos Mesh provides rich fault injection, while Argo provides flexible orchestration and scheduling."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"TiPocket",src:o(90282).A+"",width:"904",height:"420"})}),"\n",(0,a.jsx)(t.h2,{id:"the-community-built-from-the-ground-up",children:"The community: built from the ground up"}),"\n",(0,a.jsx)(t.p,{children:"Chaos Mesh is a community-driven project, and cannot progress without an active, friendly, and open community. Since it was open-sourced, Chaos Mesh has quickly become one of the most eye-catching open-source projects in the chaos engineering world. Within a year, it has accumulated more than 3k stars on GitHub and 70+ contributors. Adopters include Tencent Cloud, XPeng Motors, Dailymotion, NetEase Fuxi Lab, JuiceFS, APISIX, and Meituan. Looking back on the past year, the Chaos Mesh community was built from scratch, and has laid the foundation for a transparent, open, friendly, and autonomous open source community."}),"\n",(0,a.jsx)(t.h3,{id:"becoming-part-of-the-cncf-family",children:"Becoming part of the CNCF family"}),"\n",(0,a.jsx)(t.p,{children:"Cloud native has been in the DNA of Chaos Mesh since the very beginning. Joining CNCF was a natural choice, which marks a critical step for Chaos Mesh to becoming a vendor-neutral, open and transparent open-source community. Aside from integration within the cloud native ecosystem, joining CNCF gives Chaos Mesh:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"More community and project exposure. Collaborations with other projects and various cloud native community activities such as Kubernetes Meetup and KubeCon have presented us great opportunities to communicate with the community. We are amazed how the high-quality content produced by the community has also played a positive and far-reaching role in promoting Chaos Mesh."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"A more complete and open community framework. CNCF provides a rather mature framework for open-source community operations. Under CNCF\u2019s guidance, we established our basic community framework, including a Code of Conduct, Contributing Guide, and Roadmap. We\u2019ve also created our own channel, #project-chaos-mesh, under CNCF\u2019s Slack."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"a-friendly-and-supportive-community",children:"A friendly and supportive community"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["2022-10-24: Because of ",(0,a.jsx)(t.a,{href:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html",children:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html"}),", and refer to ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/website/pull/356",children:"#356"}),", the interactive tutorial is temporarily unavailable."]})}),"\n",(0,a.jsx)(t.p,{children:"The quality of the open source community determines whether our adopters and contributors are willing to stick around and get involved in the community for the long run. In this regard, we\u2019ve been working hard on:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Continuously enriching documentation and optimizing its structure. So far, we have developed a complete set of documentation for different groups of audiences, including ",(0,a.jsx)(t.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/user_guides/installation",children:"a user guide"})," and ",(0,a.jsx)(t.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/development_guides/development_overview",children:"developer guide"}),", ",(0,a.jsx)(t.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/get_started/get_started_on_kind",children:"quick start guides"}),", ",(0,a.jsx)(t.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/use_cases/multi_data_centers",children:"use cases"}),", and ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/CONTRIBUTING.md",children:"a contributing guide"}),". All are constantly updated per each release."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Working with the community to publish blog posts, tutorials, use cases, and chaos engineering practices. So far, we\u2019ve produced 26 Chaos Mesh related articles. Among them is ",(0,a.jsx)(t.code,{children:"an interactive tutorial"}),", published on O\u2019Reilly\u2019s Katakoda site. These materials make a great complement to the documentation."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Repurposing and amplifying videos and tutorials generated in community meetings, webinars, and meetups. Valuing and responding to community feedback and queries."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"looking-ahead",children:"Looking ahead"}),"\n",(0,a.jsxs)(t.p,{children:["Google\u2019s recent global outage reminded us of the importance of system reliability, and it highlighted the importance of chaos engineering. Liz Rice, CNCF TOC Chair, shared ",(0,a.jsx)(t.a,{href:"https://twitter.com/CloudNativeFdn/status/1329863326428499971",children:"The 5 technologies to watch in 2021"}),", and chaos engineering is on top of the list. We boldly predict that chaos engineering is about to enter a new stage in the near future. Chaos Mesh 2.0 is now in active development, and it includes community requirements such as an embedded workflow engine to support the definition and management of more flexible chaos scenarios, application state checking mechanisms, and more detailed experiments reports. Follow along through the project ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/ROADMAP.md",children:"roadmap"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"last-but-not-least",children:"Last but not least"}),"\n",(0,a.jsx)(t.p,{children:"Chaos Mesh has grown so much in the past year, yet it is still young, and we have just set sail towards our goal. In the meantime, we call for all of you to participate and help build the Chaos Engineering system ecology together!"}),"\n",(0,a.jsxs)(t.p,{children:["If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",(0,a.jsx)(t.a,{href:"https://slack.cncf.io/",children:"our Slack channel"})," or submit your pull requests or issues to our ",(0,a.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub repository"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},29237:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead-225fa7cb90dbea594d278bd75a6cbcba.jpg"},5033:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/chaos-dashboard1-f75f13ed59046d4d19717a1dc6900057.png"},59269:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/chaos-tests-53935636ee4f2a84eed8ae3e1c170ac0.png"},90282:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/tipocket-b6c945ab26ef1437be6a383d95019f50.png"},8637:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>h});var n=o(30758);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},80501:e=>{e.exports=JSON.parse('{"permalink":"/blog/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead","editUrl":"https://github.com/chaos-mesh/website/edit/master/blog/2021-02-05-celebrating-one-year-of-chaos-mesh-looking-back-and-ahead.md","source":"@site/blog/2021-02-05-celebrating-one-year-of-chaos-mesh-looking-back-and-ahead.md","title":"Celebrating One Year of Chaos Mesh: Looking Back and Ahead","description":"Celebrating One Year of Chaos Mesh: Looking Back and Ahead","date":"2021-02-05T00:00:00.000Z","tags":[{"inline":true,"label":"Chaos Mesh","permalink":"/blog/tags/chaos-mesh"},{"inline":true,"label":"Chaos Engineering","permalink":"/blog/tags/chaos-engineering"}],"readingTime":7.135,"hasTruncateMarker":true,"authors":[{"name":"Chaos Mesh Authors","title":"All maintainers of Chaos Mesh","url":"https://github.com/chaos-mesh","socials":{"x":"https://x.com/chaos_mesh"},"imageURL":"https://avatars.githubusercontent.com/u/59082378?v=4","key":"chaos-mesh","page":null}],"frontMatter":{"slug":"/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead","title":"Celebrating One Year of Chaos Mesh: Looking Back and Ahead","authors":"chaos-mesh","image":"/img/blog/celebrating-one-year-of-chaos-mesh-looking-back-and-ahead.jpg","tags":["Chaos Mesh","Chaos Engineering"]},"unlisted":false,"prevItem":{"title":"From a Newbie in Software Engineering to a Graduated LFX-Mentee","permalink":"/blog/lfx-mentorship-enriching-awschaos"},"nextItem":{"title":"How to Simulate I/O Faults at Runtime","permalink":"/blog/how-to-simulate-io-faults-at-runtime"}}')}}]);