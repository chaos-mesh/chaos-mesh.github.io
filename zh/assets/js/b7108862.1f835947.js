"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6956],{17678:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(11527),s=i(88672);const o={slug:"/chaos-engineering-breaking-things-intentionally",title:"Chaos Engineering - Breaking things Intentionally",author:"Manish Dangi",author_url:"https://www.linkedin.com/in/manishdangi/",author_image_url:"https://avatars1.githubusercontent.com/u/43807816?s=400",image:"/img/blog/chaos-engineering2.png",tags:["Chaos Engineering","Chaos Mesh","Open Source"]},a=void 0,r={permalink:"/zh/blog/chaos-engineering-breaking-things-intentionally",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-10-30-chaos-engineering-breaking-things-intentionally.md",source:"@site/blog/2020-10-30-chaos-engineering-breaking-things-intentionally.md",title:"Chaos Engineering - Breaking things Intentionally",description:"Chaos-Engineering-Breaking-things-Intentionally",date:"2020-10-30T00:00:00.000Z",formattedDate:"2020\u5e7410\u670830\u65e5",tags:[{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Open Source",permalink:"/zh/blog/tags/open-source"}],readingTime:3.775,hasTruncateMarker:!0,authors:[{name:"Manish Dangi",url:"https://www.linkedin.com/in/manishdangi/",imageURL:"https://avatars1.githubusercontent.com/u/43807816?s=400"}],frontMatter:{slug:"/chaos-engineering-breaking-things-intentionally",title:"Chaos Engineering - Breaking things Intentionally",author:"Manish Dangi",author_url:"https://www.linkedin.com/in/manishdangi/",author_image_url:"https://avatars1.githubusercontent.com/u/43807816?s=400",image:"/img/blog/chaos-engineering2.png",tags:["Chaos Engineering","Chaos Mesh","Open Source"]},unlisted:!1,prevItem:{title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",permalink:"/zh/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing"},nextItem:{title:"Chaos Mesh X Hacktoberfest 2020 - An Invitation to Open Source",permalink:"/zh/blog/chaos-mesh-x-hacktoberfest-2020"}},h={authorsImageUrls:[void 0]},l=[{value:"Chaos-Mesh",id:"chaos-mesh",level:2},{value:"Join the community",id:"join-the-community",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chaos-Engineering-Breaking-things-Intentionally",src:i(50832).Z+"",width:"1600",height:"534"})}),"\n",(0,t.jsx)(n.p,{children:"\u201cNecessity is the mother of invention\u201d; similarly, Netflix is not only a platform for online media streaming. Netflix gave birth to Chaos engineering because of their necessity."}),"\n",(0,t.jsxs)(n.p,{children:["In 2008, Netflix ",(0,t.jsx)(n.a,{href:"https://about.netflix.com/en/news/completing-the-netflix-cloud-migration",children:"experienced a major database corruption"}),". They couldn't deliver DVDs for three days. This encouraged Netflix engineers to think about their monolithic architecture\u2019s migration to a distributed cloud-based architecture."]}),"\n",(0,t.jsx)(n.p,{children:"The new distributed architecture of Netflix composed of hundreds of microservices. Migration to distributed architecture solved their single point failure problem, but it gave rise to many other complexities requiring a more reliable and fault-tolerant system. At this point, Netflix engineers came up with an innovative idea to test the system\u2019s fault tolerance without impacting customer service."}),"\n",(0,t.jsxs)(n.p,{children:["They created ",(0,t.jsx)(n.a,{href:"https://github.com/Netflix/chaosmonkey",children:"Chaos Monkey"}),": a tool that causes random failures at different places with different intervals of time. With the development of Chaos Monkey, a new discipline arises: Chaos Engineering."]}),"\n",(0,t.jsxs)(n.p,{children:["\u201cChaos Engineering is the discipline of experimenting on a system in order to build confidence in the system\u2019s capability to withstand turbulent conditions in production.\u201d - ",(0,t.jsx)(n.a,{href:"https://principlesofchaos.org/",children:"Principle of Chaos"})]}),"\n",(0,t.jsx)(n.p,{children:"Chaos Engineering is an approach for learning how your system behaves by applying a discipline of empirical exploration. Just as scientists conduct experiments to study physical and social phenomena, Chaos Engineering uses experiments to learn about a particular system - the systems' reliability, stability, and capability to survive in unexpected or unstable conditions."}),"\n",(0,t.jsx)(n.p,{children:"When we have a large-scale distributed system, failures could be caused by a number of factors like application failure, infrastructure failure, dependency failure, network failure, and many more. These failures could not be all covered by traditional methods such as integration testing or unit testing, which makes Chaos Engineering a necessity:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To improve resiliency of the system"}),"\n",(0,t.jsx)(n.li,{children:"To expose hidden threats and vulnerability of the system"}),"\n",(0,t.jsx)(n.li,{children:"To figure out system weaknesses before they cause any failure in production"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Lots of people think that they are not as big compared to Netflix and other tech giants; nor do they have any databases or systems of that scale."}),"\n",(0,t.jsx)(n.p,{children:"They are probably right, but over the period, Chaos engineering has evolved so much that it\u2019s no longer limited to digital companies like Netflix. To ensure consistent performance and constant availability of their systems, more and more companies from different industries are implementing chaos experiments."}),"\n",(0,t.jsx)(n.h2,{id:"chaos-mesh",children:"Chaos-Mesh"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["2022-10-24: Because of ",(0,t.jsx)(n.a,{href:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html",children:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html"}),", and refer to ",(0,t.jsx)(n.a,{href:"https://github.com/chaos-mesh/website/pull/356",children:"#356"}),", the interactive tutorial is temporarily unavailable."]})}),"\n",(0,t.jsxs)(n.p,{children:["To test the resiliency and reliability of ",(0,t.jsx)(n.a,{href:"https://pingcap.com/products/tidb",children:"TiDB"}),", engineers at ",(0,t.jsx)(n.a,{href:"https://pingcap.com/",children:"PingCAP"})," came up with a fantastic tool for Chaos testing called ",(0,t.jsx)(n.a,{href:"https://chaos-mesh.org/",children:"Chaos Mesh"}),", a cloud-native Chaos Engineering platform that orchestrates chaos on Kubernetes environments. Chaos Mesh takes into account the possible faults of a distributed system, covering the pod, the network, system I/O, and the kernel."]}),"\n",(0,t.jsx)(n.p,{children:"Chaos Mesh provides many fault injection methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"clock-skew:"})," Simulates clock skew"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"container-kill:"})," Simulates the container being killed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"cpu-burn:"})," Simulates CPU pressure"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"io-attribution-override:"})," Simulates file exceptions"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"io-fault:"})," Simulates file system I/O errors"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"io-latency:"})," Simulates file system I/O latency"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"kernel-injection:"})," Simulates kernel failures"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"memory-burn:"})," Simulates memory pressure"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"network-corrupt:"})," Simulates network packet corruption"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"network-duplication:"})," Simulates network packet duplication"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"network-latency:"})," Simulate network latency"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"network-loss:"})," Simulates network loss"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"network-partition:"})," Simulates network partition"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"pod-failure:"})," Simulates continuous unavailability of Kubernetes Pods"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"pod-kill:"})," Simulates the Kubernetes Pod being killed"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Chaos Mesh mainly focuses on the simplicity of how all chaos tests are done quickly and easily understandable to anyone using it."}),"\n",(0,t.jsxs)(n.p,{children:["The recent ",(0,t.jsx)(n.a,{href:"https://chaos-mesh.org/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier/",children:"1.0 release"})," provides the general availability of Chaos Dashboard, which Chaos simplifies the complexities of chaos experiment. With a few mouse clicks, you can define the Chaos experiment's scope, specify the type of chaos injection, define scheduling rules, and observe the chaos experiment results- all in the dashboard of Chaos Mesh."]}),"\n",(0,t.jsxs)(n.p,{children:["In case you want to try Chaos Mesh in your browser, checkout ",(0,t.jsx)(n.code,{children:"Katakoda interactive tutorial"}),", where you can get your hands on Chaos Mesh without even deploying it. To understand the design principles and how Chaos Mesh works, read ",(0,t.jsx)(n.a,{href:"https://chaos-mesh.org/blog/chaos_mesh_your_chaos_engineering_solution",children:"this blog"})," by the project's maintainer, ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/cwen-yin-81985318b/",children:"Cwen Yin"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"join-the-community",children:"Join the community"}),"\n",(0,t.jsx)(n.p,{children:"Anyone who wants to explore the area of chaos engineering or Chaos Mesh are welcomed to join the Chaos Mesh community. Being a member of the Chaos Mesh community, I would like to say it is a lovely community where project maintainers love to engage and hear your views and suggestions for the improvement of the project and the community."}),"\n",(0,t.jsxs)(n.p,{children:["To join and learn more about Chaos Mesh, find the #project-chaos-mesh channel in ",(0,t.jsx)(n.a,{href:"https://slack.cncf.io/",children:"CNCF slack workspace"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50832:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/chaos-engineering2-449be6ee6f9be7e20caa716fbf8d0a9d.png"},88672:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var t=i(50959);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);