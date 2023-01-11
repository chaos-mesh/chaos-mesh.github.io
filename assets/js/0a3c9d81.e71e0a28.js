"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=o.createContext({}),c=function(e){var t=o.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=c(e.components);return o.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,h=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(h,".").concat(m)]||u[m]||p[m]||s;return a?o.createElement(d,r(r({ref:t},l),{},{components:a})):o.createElement(d,r({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const s={slug:"/run-chaos-experiments-on-physical-machines",title:"How to run chaos experiments on your physical machine",author:"Xiang Wang",author_title:"Chaos Mesh Committer",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaosd-banner.png",tags:["Chaos Mesh","Chaos Engineering","chaosd"]},r=void 0,i={permalink:"/blog/run-chaos-experiments-on-physical-machines",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",source:"@site/blog/2021-09-15-run-chaos-experiments-on-physical-machines.md",title:"How to run chaos experiments on your physical machine",description:"How to run chaos experiments on your physical machine",date:"2021-09-15T00:00:00.000Z",formattedDate:"September 15, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"},{label:"chaosd",permalink:"/blog/tags/chaosd"}],readingTime:3.935,hasTruncateMarker:!0,authors:[{name:"Xiang Wang",title:"Chaos Mesh Committer",url:"https://github.com/WangXiangUSTC",imageURL:"https://avatars.githubusercontent.com/u/5793595?v=4"}],frontMatter:{slug:"/run-chaos-experiments-on-physical-machines",title:"How to run chaos experiments on your physical machine",author:"Xiang Wang",author_title:"Chaos Mesh Committer",author_url:"https://github.com/WangXiangUSTC",author_image_url:"https://avatars.githubusercontent.com/u/5793595?v=4",image:"/img/blog/chaosd-banner.png",tags:["Chaos Mesh","Chaos Engineering","chaosd"]},prevItem:{title:"Hacktoberfest 2021: hack with Chaos Mesh!",permalink:"/blog/chaos-mesh-hacktoberfest-2021"},nextItem:{title:"Securing Online Gaming: Combine Chaos Engineering with DevOps Practices",permalink:"/blog/Securing-Online-Gaming-Combine-Chaos-Engineering-with-DevOps-Practices"}},h={authorsImageUrls:[void 0]},c=[{value:"What is chaosd",id:"what-is-chaosd",level:2},{value:"Benefits of chaosd",id:"benefits-of-chaosd",level:2},{value:"How to use chaosd",id:"how-to-use-chaosd",level:2},{value:"1. Download and unzip chaosd",id:"1-download-and-unzip-chaosd",level:3},{value:"2. Create a chaos experiment",id:"2-create-a-chaos-experiment",level:3},{value:"3. Verify the results",id:"3-verify-the-results",level:3},{value:"4. Recover the experiment",id:"4-recover-the-experiment",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Support dashboard web",id:"support-dashboard-web",level:3},{value:"Add more fault injection types",id:"add-more-fault-injection-types",level:3},{value:"Try it out!",id:"try-it-out",level:2}],l={toc:c};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How to run chaos experiments on your physical machine",src:a(18788).Z,width:"1501",height:"501"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh")," is a cloud-native Chaos Engineering platform that orchestrates chaos in Kubernetes environments. With Chaos Mesh, you can simulate a variety of failures, and use Chaos Dashboard, a web UI, to manage chaos experiments directly. Since it was open-sourced, Chaos Mesh has been adopted by many companies to ensure their systems\u2019 resilience and robustness. But over the past year, we have frequently heard requests from the community asking how to run chaos experiments when the services are not deployed on Kubernetes."),(0,n.kt)("h2",{id:"what-is-chaosd"},"What is chaosd"),(0,n.kt)("p",null,"To meet the growing needs of chaos testing on physical machines, we are excited to present an enhanced toolkit called chaosd. You might find the name familiar. That\u2019s because it evolved from ",(0,n.kt)("inlineCode",{parentName:"p"},"chaos-daemon"),", a key component in Chaos Mesh. At TiDB Hackathon 2020, we ",(0,n.kt)("a",{parentName:"p",href:"https://pingcap.com/blog/chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service#refactor-chaosd"},"refactored chaosd to make it more than a command-line tool"),". Now with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/releases/tag/v1.0.1"},"chaosd v1.0.1"),", you can simulate specific errors that target physical machines, and then, undo the chaos experiments like nothing had happened."),(0,n.kt)("h2",{id:"benefits-of-chaosd"},"Benefits of chaosd"),(0,n.kt)("p",null,"chaosd has the following advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Easy-to-use"),": You can easily create and manage chaos experiments with chaosd commands."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Various fault types"),": You can simulate faults to be injected on physical machines at different levels, including process faults, network faults, Java Virtual Machine (JVM) application faults, stress scenarios, disk faults, and host faults."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Multiple work modes"),": You can use chaosd as a command-line tool or as a service.")),(0,n.kt)("p",null,"Without further ado, let\u2019s give it a try."),(0,n.kt)("h2",{id:"how-to-use-chaosd"},"How to use chaosd"),(0,n.kt)("p",null,"In this section, I will walk you through how to inject a network fault with chaosd. Your glibc version must be v2.17 or later versions."),(0,n.kt)("h3",{id:"1-download-and-unzip-chaosd"},"1. Download and unzip chaosd"),(0,n.kt)("p",null,"To download chaosd, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL -o chaosd-v1.0.1-linux-amd64.tar.gz https://mirrors.chaos-mesh.org/chaosd-v1.0.1-linux-amd64.tar.gz\n")),(0,n.kt)("p",null,"Unzip the file. It contains two file folders:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chaosd")," contains the tool entry of chaosd."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tools")," contains the tools needed to perform the chaos experiment, including ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/Kernel/Reference/stress-ng"},"stress-ng")," (to simulate stress scenarios), ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/chaos-mesh/byteman"},"Byteman")," (to simulate JVM application faults), and PortOccupyTool (to simulate network faults).")),(0,n.kt)("h3",{id:"2-create-a-chaos-experiment"},"2. Create a chaos experiment"),(0,n.kt)("p",null,"In this chaos experiment, the server will be unable to access chaos-mesh.org."),(0,n.kt)("p",null,"Run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./chaosd attack network loss --percent 100 --hostname chaos-mesh.org --device ens33\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Attack network successfully, uid: c55a84c5-c181-426b-ae31-99c8d4615dbe\n")),(0,n.kt)("p",null,"In this simulation, the ens33 network interface card cannot send network packets to or receive packets from ",(0,n.kt)("a",{parentName:"p",href:"http://chaos-mesh.org"},"chaos-mesh.org"),". The reason why you have to use ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo")," commands is that the chaos experiment modifies network rules, which require root privileges."),(0,n.kt)("p",null,"Also, don\u2019t forget to save the ",(0,n.kt)("inlineCode",{parentName:"p"},"uid")," of the chaos experiment. You\u2019ll be entering that later as part of the recovery process."),(0,n.kt)("h3",{id:"3-verify-the-results"},"3. Verify the results"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ping")," command to see if the server can access chaos-mesh.org:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ping chaos-mesh.org\nPING chaos-mesh.org (185.199.109.153) 56(84) bytes of data.\n")),(0,n.kt)("p",null,"When you execute the command, it\u2019s very likely that the site won\u2019t respond. Press ",(0,n.kt)("inlineCode",{parentName:"p"},"CTRL"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"C")," to stop the ping process. You should be able to see the statistics of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ping")," command: ",(0,n.kt)("inlineCode",{parentName:"p"},"100% packet loss"),"."),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"2 packets transmitted, 0 received, 100% packet loss, time 1021ms\n")),(0,n.kt)("h3",{id:"4-recover-the-experiment"},"4. Recover the experiment"),(0,n.kt)("p",null,"To recover the experiment, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./chaosd recover c55a84c5-c181-426b-ae31-99c8d4615dbe\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Recover c55a84c5-c181-426b-ae31-99c8d4615dbe successfully\n")),(0,n.kt)("p",null,"In this step, you also need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo")," commands because root privileges are required. When you finish recovering the experiment, try to ping chaos-mesh.org again to verify the connection."),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("h3",{id:"support-dashboard-web"},"Support dashboard web"),(0,n.kt)("p",null,"As you can see, chaosd is fairly easy to use. But we can make it easier\u2014a dashboard web for chaosd is currently under extensive development."),(0,n.kt)("p",null,"We will continue to enhance its usability and implement more functionalities such as managing chaos experiments run with chaosd as well as those run with Chaos Mesh. This will provide a consistent and unified user experience for chaos testing on Kubernetes and physical machines. The architecture below is just a simple example:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaos Mesh&#39;s optimized architecture",src:a(55209).Z,width:"1999",height:"1073"})),(0,n.kt)("p",{className:"caption-center"},"Chaos Mesh's optimized architecture"),(0,n.kt)("p",null,"For more, check out ",(0,n.kt)("a",{parentName:"p",href:"https://pingcap.com/blog/chaos-mesh-remake-one-step-closer-toward-chaos-as-a-service#developing-chaos-mesh-towards-caas"},"Chaos Mesh's optimized architecture"),"."),(0,n.kt)("h3",{id:"add-more-fault-injection-types"},"Add more fault injection types"),(0,n.kt)("p",null,"Currently, chaosd provides six fault injection types. We plan to develop more types that have been supported by Chaos Mesh, including HTTPChaos and IOChaos."),(0,n.kt)("p",null,"If you are interested in helping us improve chaosd, you are welcome to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/labels/help%20wanted"},"pick an issue")," and get started!"),(0,n.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,n.kt)("p",null,"If you are interested in using chaosd and want to explore more, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/chaosd-overview"},"documentation"),". If you come across an issue when you run chaosd, or if you have a feature request, feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaosd/issues"},"create an issue"),". We would love to hear your voice!"))}p.isMDXComponent=!0},55209:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaos-mesh-optimized-architecture-2d9e6f288bb22da9da229dd5f6d63630.png"},18788:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chaosd-banner-6413d02bac6388c2e814e3555020d8cd.png"}}]);