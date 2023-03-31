"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[584],{17942:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var a=o(50959);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,s=function(e,t){if(null==e)return{};var o,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var h=a.createContext({}),c=function(e){var t=a.useContext(h),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(h.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,h=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(o),m=s,d=l["".concat(h,".").concat(m)]||l[m]||p[m]||n;return o?a.createElement(d,r(r({ref:t},u),{},{components:o})):a.createElement(d,r({ref:t},u))}));function d(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,r=new Array(n);r[0]=m;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i[l]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<n;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},15651:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=o(51163),s=(o(50959),o(17942));const n={slug:"/chaos-mesh-qa-at-kubecon-eu-2022",title:"Chaos Mesh Q&A at KUBECON EU 2022",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering","KubeCon","CloudNativeCon"]},r=void 0,i={permalink:"/zh/blog/chaos-mesh-qa-at-kubecon-eu-2022",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2022-06-07-chaos-mesh-qa-kubecon-eu-2022.md",source:"@site/blog/2022-06-07-chaos-mesh-qa-kubecon-eu-2022.md",title:"Chaos Mesh Q&A at KUBECON EU 2022",description:"Chaos Mesh Q&A",date:"2022-06-07T00:00:00.000Z",formattedDate:"2022\u5e746\u67087\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"KubeCon",permalink:"/zh/blog/tags/kube-con"},{label:"CloudNativeCon",permalink:"/zh/blog/tags/cloud-native-con"}],readingTime:2.33,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Community",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-qa-at-kubecon-eu-2022",title:"Chaos Mesh Q&A at KUBECON EU 2022",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering","KubeCon","CloudNativeCon"]},nextItem:{title:"Experience as an LFX Mentee for Chaos Mesh",permalink:"/zh/blog/experience-as-a-chaos-mesh-lfx-mentee"}},h={authorsImageUrls:[void 0]},c=[{value:"Your questions answered",id:"your-questions-answered",level:2},{value:"Join the Chaos Mesh community",id:"join-the-chaos-mesh-community",level:2}],u={toc:c},l="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(l,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chaos Mesh Q&amp;A",src:o(6050).Z,width:"3126",height:"1043"})),(0,s.kt)("p",null,"At KubeCon EU 2022, the ",(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"Chaos Mesh"),' team hosted two activities "Make Cloud Native Chaos Engineering Easier - Deep Dive into Chaos Mesh" and "office hours session". We are very grateful and enjoyed it with all of you very much. We shared with each other, got to know each other, and discussed a lot of things in depth.'),(0,s.kt)("p",null,"For the presentations, we gave a brief overview of Chaos Mesh, then delved into how Chaos Mesh is implemented and how it is practiced, and shared the team's latest explorations around chaos engineering and plans for Chaos Mesh's development."),(0,s.kt)("p",null,"For Office Hour, we introduced the Chaos Mesh project and its latest progress, and answered online questions from attendees."),(0,s.kt)("p",null,"Many thanks to each of our friends that came out to support us! And for Office Hour, we received some great questions and we decided to have a follow-up Q&A."),(0,s.kt)("h2",{id:"your-questions-answered"},"Your questions answered"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: Does chaos play well with Windows/Linux hybrid clusters?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," Chaos Mesh can only work with Linux now, but we have kindly contributors who are trying to port some features to Windows: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/issues/2956"},"github.com/chaos-mesh/chaos-mesh/issues/2956")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: I think Istio and Linkerd also support fault injection. How does Chaos Mesh differ? Chaos Mesh provides much richer chaos injections (like IOChaos, TimeChaos...), but the injection provided by linked or istio, as I know, is focused on the network?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," Yeah of course! Service Mesh Frameworks have the potential to cause havoc in the RPC/Network layer. More types of chaos, such as stresschaos, pod kill, DNSChaos, and IOChaos, could be injected into Chaos Mesh (just mentioned) In addition to the list, we offer additional types of chaos. JVM, GCP, Azure, and so on..."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: As part of the chaos mesh can we run any pre-initialization scripts before introducing the chaos experiment?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," Yes! You may organize your customized scripts and various chaotic experiments together with Chaos Mesh's integrated Workflow engine. See ",(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/next/create-chaos-mesh-workflow/#task-field-description"},"task field in workflow")," for the document."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: Is this similar to the Gremlin Chaos engineering tool?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," Yes, this is a Kubernetes-specific open-source project. It's a Kubernetes plugin that you can utilize. You can get more Infos on ",(0,s.kt)("a",{parentName:"p",href:"https://chaos-mesh.org"},"https://chaos-mesh.org")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Q: How does it inject network latency for network chaos? if we use cilium CNI with no iptables, would this latency injection still work in that case?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A:")," Chaos Mesh has a chaos-daemon component. When network chaos is produced, chaos-daemon will enter the target pod's network namespace and set TC and iptables rules on the network device."),(0,s.kt)("p",null,"When using clium CNI without iptables, Chaos Mesh still works."),(0,s.kt)("h2",{id:"join-the-chaos-mesh-community"},"Join the Chaos Mesh community"),(0,s.kt)("p",null,"If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",(0,s.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"our Slack channel"),"(#project-chaos-mesh) or submit your pull requests or issues to our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}p.isMDXComponent=!0},6050:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/chaos-mesh-q&a-5ee3460631a40ccb4ab675860e9bddd7.jpeg"}}]);