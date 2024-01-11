"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2027],{51073:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var n=a(11527),t=a(7463);const o={slug:"/run-chaos-experiments-on-physical-machines",title:"How to run chaos experiments on your physical machine",author:"Xiang Wang",author_title:"Chaos Mesh Committer",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaosd-banner.png",tags:["Chaos Mesh","Chaos Engineering","chaosd"]},i=void 0,h={permalink:"/zh/blog/run-chaos-experiments-on-physical-machines",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",source:"@site/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",title:"How to run chaos experiments on your physical machine",description:"How to run chaos experiments on your physical machine",date:"2021-09-15T00:00:00.000Z",formattedDate:"2021\u5e749\u670815\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"chaosd",permalink:"/zh/blog/tags/chaosd"}],readingTime:3.935,hasTruncateMarker:!0,authors:[{name:"Xiang Wang",title:"Chaos Mesh Committer",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars.githubusercontent.com/u/5793595?v=4"}],frontMatter:{slug:"/run-chaos-experiments-on-physical-machines",title:"How to run chaos experiments on your physical machine",author:"Xiang Wang",author_title:"Chaos Mesh Committer",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaosd-banner.png",tags:["Chaos Mesh","Chaos Engineering","chaosd"]},unlisted:!1,prevItem:{title:"Hacktoberfest 2021: hack with Chaos Mesh!",permalink:"/zh/blog/chaos-mesh-hacktoberfest-2021"},nextItem:{title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",permalink:"/zh/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices"}},r={authorsImageUrls:[void 0]},c=[{value:"What is chaosd",id:"what-is-chaosd",level:2},{value:"Benefits of chaosd",id:"benefits-of-chaosd",level:2},{value:"How to use chaosd",id:"how-to-use-chaosd",level:2},{value:"1. Download and unzip chaosd",id:"1-download-and-unzip-chaosd",level:3},{value:"2. Create a chaos experiment",id:"2-create-a-chaos-experiment",level:3},{value:"3. Verify the results",id:"3-verify-the-results",level:3},{value:"4. Recover the experiment",id:"4-recover-the-experiment",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Support dashboard web",id:"support-dashboard-web",level:3},{value:"Add more fault injection types",id:"add-more-fault-injection-types",level:3},{value:"Try it out!",id:"try-it-out",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"How to run chaos experiments on your physical machine",src:a(45022).Z+"",width:"1501",height:"501"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"})," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can simulate a variety of failures, and use Chaos Dashboard, a web UI, to manage chaos experiments directly. Since it was open-sourced, Chaos Mesh has been adopted by many companies to ensure their systems\u2019 resilience and robustness. But over the past year, we have frequently heard requests from the community asking how to run chaos experiments when the services are not deployed on Kubernetes."]}),"\n",(0,n.jsx)(s.h2,{id:"what-is-chaosd",children:"What is chaosd"}),"\n",(0,n.jsxs)(s.p,{children:["To meet the growing needs of chaos testing on physical machines, we are excited to present an enhanced toolkit called chaosd. You might find the name familiar. That\u2019s because it evolved from ",(0,n.jsx)(s.code,{children:"chaos-daemon"}),", a key component in Chaos Mesh. At TiDB Hackathon 2020, we ",(0,n.jsx)(s.a,{href:"https://pingcap.com/blog/chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service#refactor-chaosd",children:"refactored chaosd to make it more than a command-line tool"}),". Now with ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaosd/releases/tag/v1.0.1",children:"chaosd v1.0.1"}),", you can simulate specific errors that target physical machines, and then, undo the chaos experiments like nothing had happened."]}),"\n",(0,n.jsx)(s.h2,{id:"benefits-of-chaosd",children:"Benefits of chaosd"}),"\n",(0,n.jsx)(s.p,{children:"chaosd has the following advantages:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Easy-to-use"}),": You can easily create and manage chaos experiments with chaosd commands."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Various fault types"}),": You can simulate faults to be injected on physical machines at different levels, including process faults, network faults, Java Virtual Machine (JVM) application faults, stress scenarios, disk faults, and host faults."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Multiple work modes"}),": You can use chaosd as a command-line tool or as a service."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Without further ado, let\u2019s give it a try."}),"\n",(0,n.jsx)(s.h2,{id:"how-to-use-chaosd",children:"How to use chaosd"}),"\n",(0,n.jsx)(s.p,{children:"In this section, I will walk you through how to inject a network fault with chaosd. Your glibc version must be v2.17 or later versions."}),"\n",(0,n.jsx)(s.h3,{id:"1-download-and-unzip-chaosd",children:"1. Download and unzip chaosd"}),"\n",(0,n.jsx)(s.p,{children:"To download chaosd, run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -fsSL -o chaosd-v1.0.1-linux-amd64.tar.gz https://mirrors.chaos-mesh.org/chaosd-v1.0.1-linux-amd64.tar.gz\n"})}),"\n",(0,n.jsx)(s.p,{children:"Unzip the file. It contains two file folders:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"chaosd"})," contains the tool entry of chaosd."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"tools"})," contains the tools needed to perform the chaos experiment, including ",(0,n.jsx)(s.a,{href:"https://wiki.ubuntu.com/Kernel/Reference/stress-ng",children:"stress-ng"})," (to simulate stress scenarios), ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/byteman",children:"Byteman"})," (to simulate JVM application faults), and PortOccupyTool (to simulate network faults)."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"2-create-a-chaos-experiment",children:"2. Create a chaos experiment"}),"\n",(0,n.jsx)(s.p,{children:"In this chaos experiment, the server will be unable to access chaos-mesh.org."}),"\n",(0,n.jsx)(s.p,{children:"Run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo ./chaosd attack network loss --percent 100 --hostname chaos-mesh.org --device ens33\n"})}),"\n",(0,n.jsx)(s.p,{children:"Example output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"Attack network successfully, uid: c55a84c5-c181-426b-ae31-99c8d4615dbe\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In this simulation, the ens33 network interface card cannot send network packets to or receive packets from ",(0,n.jsx)(s.a,{href:"http://chaos-mesh.org",children:"chaos-mesh.org"}),". The reason why you have to use ",(0,n.jsx)(s.code,{children:"sudo"})," commands is that the chaos experiment modifies network rules, which require root privileges."]}),"\n",(0,n.jsxs)(s.p,{children:["Also, don\u2019t forget to save the ",(0,n.jsx)(s.code,{children:"uid"})," of the chaos experiment. You\u2019ll be entering that later as part of the recovery process."]}),"\n",(0,n.jsx)(s.h3,{id:"3-verify-the-results",children:"3. Verify the results"}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.code,{children:"ping"})," command to see if the server can access chaos-mesh.org:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"ping chaos-mesh.org\nPING chaos-mesh.org (185.199.109.153) 56(84) bytes of data.\n"})}),"\n",(0,n.jsxs)(s.p,{children:["When you execute the command, it\u2019s very likely that the site won\u2019t respond. Press ",(0,n.jsx)(s.code,{children:"CTRL"}),"+",(0,n.jsx)(s.code,{children:"C"})," to stop the ping process. You should be able to see the statistics of the ",(0,n.jsx)(s.code,{children:"ping"})," command: ",(0,n.jsx)(s.code,{children:"100% packet loss"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Example output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"2 packets transmitted, 0 received, 100% packet loss, time 1021ms\n"})}),"\n",(0,n.jsx)(s.h3,{id:"4-recover-the-experiment",children:"4. Recover the experiment"}),"\n",(0,n.jsx)(s.p,{children:"To recover the experiment, run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo ./chaosd recover c55a84c5-c181-426b-ae31-99c8d4615dbe\n"})}),"\n",(0,n.jsx)(s.p,{children:"Example output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"Recover c55a84c5-c181-426b-ae31-99c8d4615dbe successfully\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In this step, you also need to use ",(0,n.jsx)(s.code,{children:"sudo"})," commands because root privileges are required. When you finish recovering the experiment, try to ping chaos-mesh.org again to verify the connection."]}),"\n",(0,n.jsx)(s.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsx)(s.h3,{id:"support-dashboard-web",children:"Support dashboard web"}),"\n",(0,n.jsx)(s.p,{children:"As you can see, chaosd is fairly easy to use. But we can make it easier\u2014a dashboard web for chaosd is currently under extensive development."}),"\n",(0,n.jsx)(s.p,{children:"We will continue to enhance its usability and implement more functionalities such as managing chaos experiments run with chaosd as well as those run with Chaos Mesh. This will provide a consistent and unified user experience for chaos testing on Kubernetes and physical machines. The architecture below is just a simple example:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Chaos Mesh&#39;s optimized architecture",src:a(85277).Z+"",width:"1999",height:"1073"})}),"\n",(0,n.jsx)("p",{className:"caption",children:"Chaos Mesh's optimized architecture"}),"\n",(0,n.jsxs)(s.p,{children:["For more, check out ",(0,n.jsx)(s.a,{href:"https://pingcap.com/blog/chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service#developing-chaos-mesh-towards-caas",children:"Chaos Mesh's optimized architecture"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"add-more-fault-injection-types",children:"Add more fault injection types"}),"\n",(0,n.jsx)(s.p,{children:"Currently, chaosd provides six fault injection types. We plan to develop more types that have been supported by Chaos Mesh, including HTTPChaos and IOChaos."}),"\n",(0,n.jsxs)(s.p,{children:["If you are interested in helping us improve chaosd, you are welcome to ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaosd/labels/help%20wanted",children:"pick an issue"})," and get started!"]}),"\n",(0,n.jsx)(s.h2,{id:"try-it-out",children:"Try it out!"}),"\n",(0,n.jsxs)(s.p,{children:["If you are interested in using chaosd and want to explore more, check out the ",(0,n.jsx)(s.a,{href:"https://chaos-mesh.org/docs/chaosd-overview",children:"documentation"}),". If you come across an issue when you run chaosd, or if you have a feature request, feel free to ",(0,n.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaosd/issues",children:"create an issue"}),". We would love to hear your voice!"]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},85277:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/chaos-mesh-optimized-architecture-2d9e6f288bb22da9da229dd5f6d63630.png"},45022:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/chaosd-banner-6413d02bac6388c2e814e3555020d8cd.png"},7463:(e,s,a)=>{a.d(s,{Z:()=>h,a:()=>i});var n=a(50959);const t={},o=n.createContext(t);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);