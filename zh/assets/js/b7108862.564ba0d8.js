"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[26956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=n(87462),i=(n(67294),n(3905));const o={slug:"/chaos-engineering-breaking-things-intentionally",title:"Chaos Engineering - Breaking things Intentionally",author:"Manish Dangi",author_url:"https://www.linkedin.com/in/manishdangi/",author_image_url:"https://avatars1.githubusercontent.com/u/43807816?s=400",image:"/img/chaos-engineering2.png",tags:["Chaos Engineering","Chaos Mesh","Open Source"]},r=void 0,s={permalink:"/zh/blog/chaos-engineering-breaking-things-intentionally",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-10-30-chaos-engineering-breaking-things-intentionally.md",source:"@site/blog/2020-10-30-chaos-engineering-breaking-things-intentionally.md",title:"Chaos Engineering - Breaking things Intentionally",description:"Chaos-Engineering-Breaking-things-Intentionally",date:"2020-10-30T00:00:00.000Z",formattedDate:"2020\u5e7410\u670830\u65e5",tags:[{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Open Source",permalink:"/zh/blog/tags/open-source"}],readingTime:3.695,hasTruncateMarker:!0,authors:[{name:"Manish Dangi",url:"https://www.linkedin.com/in/manishdangi/",imageURL:"https://avatars1.githubusercontent.com/u/43807816?s=400"}],frontMatter:{slug:"/chaos-engineering-breaking-things-intentionally",title:"Chaos Engineering - Breaking things Intentionally",author:"Manish Dangi",author_url:"https://www.linkedin.com/in/manishdangi/",author_image_url:"https://avatars1.githubusercontent.com/u/43807816?s=400",image:"/img/chaos-engineering2.png",tags:["Chaos Engineering","Chaos Mesh","Open Source"]},prevItem:{title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",permalink:"/zh/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing"},nextItem:{title:"Chaos Mesh X Hacktoberfest 2020 - An Invitation to Open Source",permalink:"/zh/blog/chaos-mesh-x-hacktoberfest-2020"}},l={authorsImageUrls:[void 0]},h=[{value:"Chaos-Mesh",id:"chaos-mesh",level:2},{value:"Join the community",id:"join-the-community",level:2}],c={toc:h};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chaos-Engineering-Breaking-things-Intentionally",src:n(13344).Z,width:"1600",height:"534"})),(0,i.kt)("p",null,"\u201cNecessity is the mother of invention\u201d; similarly, Netflix is not only a platform for online media streaming. Netflix gave birth to Chaos engineering because of their necessity."),(0,i.kt)("p",null,"In 2008, Netflix ",(0,i.kt)("a",{parentName:"p",href:"https://about.netflix.com/en/news/completing-the-netflix-cloud-migration"},"experienced a major database corruption"),". They couldn't deliver DVDs for three days. This encouraged Netflix engineers to think about their monolithic architecture\u2019s migration to a distributed cloud-based architecture."),(0,i.kt)("p",null,"The new distributed architecture of Netflix composed of hundreds of microservices. Migration to distributed architecture solved their single point failure problem, but it gave rise to many other complexities requiring a more reliable and fault-tolerant system. At this point, Netflix engineers came up with an innovative idea to test the system\u2019s fault tolerance without impacting customer service."),(0,i.kt)("p",null,"They created ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/chaosmonkey"},"Chaos Monkey"),": a tool that causes random failures at different places with different intervals of time. With the development of Chaos Monkey, a new discipline arises: Chaos Engineering."),(0,i.kt)("p",null,"\u201cChaos Engineering is the discipline of experimenting on a system in order to build confidence in the system\u2019s capability to withstand turbulent conditions in production.\u201d - ",(0,i.kt)("a",{parentName:"p",href:"https://principlesofchaos.org/"},"Principle of Chaos")),(0,i.kt)("p",null,"Chaos Engineering is an approach for learning how your system behaves by applying a discipline of empirical exploration. Just as scientists conduct experiments to study physical and social phenomena, Chaos Engineering uses experiments to learn about a particular system - the systems' reliability, stability, and capability to survive in unexpected or unstable conditions."),(0,i.kt)("p",null,"When we have a large-scale distributed system, failures could be caused by a number of factors like application failure, infrastructure failure, dependency failure, network failure, and many more. These failures could not be all covered by traditional methods such as integration testing or unit testing, which makes Chaos Engineering a necessity:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To improve resiliency of the system"),(0,i.kt)("li",{parentName:"ul"},"To expose hidden threats and vulnerability of the system"),(0,i.kt)("li",{parentName:"ul"},"To figure out system weaknesses before they cause any failure in production")),(0,i.kt)("p",null,"Lots of people think that they are not as big compared to Netflix and other tech giants; nor do they have any databases or systems of that scale."),(0,i.kt)("p",null,"They are probably right, but over the period, Chaos engineering has evolved so much that it\u2019s no longer limited to digital companies like Netflix. To ensure consistent performance and constant availability of their systems, more and more companies from different industries are implementing chaos experiments."),(0,i.kt)("h2",{id:"chaos-mesh"},"Chaos-Mesh"),(0,i.kt)("p",null,"To test the resiliency and reliability of ",(0,i.kt)("a",{parentName:"p",href:"https://pingcap.com/products/tidb"},"TiDB"),", engineers at ",(0,i.kt)("a",{parentName:"p",href:"https://pingcap.com/"},"PingCAP")," came up with a fantastic tool for Chaos testing called ",(0,i.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"Chaos Mesh"),", a cloud-native Chaos Engineering platform that orchestrates chaos on Kubernetes environments.\nChaos Mesh takes into account the possible faults of a distributed system, covering the pod, the network, system I/O, and the kernel."),(0,i.kt)("p",null,"Chaos Mesh provides many fault injection methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"clock-skew:")," Simulates clock skew"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"container-kill:")," Simulates the container being killed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cpu-burn:")," Simulates CPU pressure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"io-attribution-override:")," Simulates file exceptions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"io-fault:")," Simulates file system I/O errors"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"io-latency:")," Simulates file system I/O latency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"kernel-injection:")," Simulates kernel failures"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"memory-burn:")," Simulates memory pressure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network-corrupt:")," Simulates network packet corruption"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network-duplication:")," Simulates network packet duplication"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network-latency:")," Simulate network latency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network-loss:")," Simulates network loss"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"network-partition:")," Simulates network partition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pod-failure:")," Simulates continuous unavailability of Kubernetes Pods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pod-kill:")," Simulates the Kubernetes Pod being killed")),(0,i.kt)("p",null,"Chaos Mesh mainly focuses on the simplicity of how all chaos tests are done quickly and easily understandable to anyone using it."),(0,i.kt)("p",null,"The recent ",(0,i.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier/"},"1.0 release")," provides the general availability of Chaos Dashboard, which Chaos simplifies the complexities of chaos experiment. With a few mouse clicks, you can define the Chaos experiment's scope, specify the type of chaos injection, define scheduling rules, and observe the chaos experiment results- all in the dashboard of Chaos Mesh."),(0,i.kt)("p",null,"In case you want to try Chaos Mesh in your browser, checkout ",(0,i.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/interactive-tutorial"},"Katakoda interactive tutorial"),", where you can get your hands on Chaos Mesh without even deploying it. To understand the design principles and how Chaos Mesh works, read ",(0,i.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/blog/chaos_mesh_your_chaos_engineering_solution"},"this blog")," by the project's maintainer, ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/cwen-yin-81985318b/"},"Cwen Yin"),"."),(0,i.kt)("h2",{id:"join-the-community"},"Join the community"),(0,i.kt)("p",null,"Anyone who wants to explore the area of chaos engineering or Chaos Mesh are welcomed to join the Chaos Mesh community. Being a member of the Chaos Mesh community, I would like to say it is a lovely community where project maintainers love to engage and hear your views and suggestions for the improvement of the project and the community."),(0,i.kt)("p",null,"To join and learn more about Chaos Mesh, find the #project-chaos-mesh channel in ",(0,i.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"CNCF slack workspace"),"."))}p.isMDXComponent=!0},13344:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chaos-engineering2-449be6ee6f9be7e20caa716fbf8d0a9d.png"}}]);