"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[584],{57161:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>h,metadata:()=>i,toc:()=>c});var t=o(11527),n=o(54881);const h={slug:"/chaos-mesh-qa-at-kubecon-eu-2022",title:"Chaos Mesh Q&A at KUBECON EU 2022",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering","KubeCon","CloudNativeCon"]},a=void 0,i={permalink:"/zh/blog/chaos-mesh-qa-at-kubecon-eu-2022",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2022-06-07-chaos-mesh-qa-kubecon-eu-2022.md",source:"@site/blog/2022-06-07-chaos-mesh-qa-kubecon-eu-2022.md",title:"Chaos Mesh Q&A at KUBECON EU 2022",description:"Chaos Mesh Q&A",date:"2022-06-07T00:00:00.000Z",formattedDate:"2022\u5e746\u67087\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{label:"KubeCon",permalink:"/zh/blog/tags/kube-con"},{label:"CloudNativeCon",permalink:"/zh/blog/tags/cloud-native-con"}],readingTime:2.33,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Community",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-qa-at-kubecon-eu-2022",title:"Chaos Mesh Q&A at KUBECON EU 2022",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering","KubeCon","CloudNativeCon"]},unlisted:!1,nextItem:{title:"Experience as an LFX Mentee for Chaos Mesh",permalink:"/zh/blog/experience-as-a-chaos-mesh-lfx-mentee"}},r={authorsImageUrls:[void 0]},c=[{value:"Your questions answered",id:"your-questions-answered",level:2},{value:"Join the Chaos Mesh community",id:"join-the-chaos-mesh-community",level:2}];function l(e){const s={a:"a",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chaos Mesh Q&amp;A",src:o(16814).Z+"",width:"3126",height:"1043"})}),"\n",(0,t.jsxs)(s.p,{children:["At KubeCon EU 2022, the ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/",children:"Chaos Mesh"}),' team hosted two activities "Make Cloud Native Chaos Engineering Easier - Deep Dive into Chaos Mesh" and "office hours session". We are very grateful and enjoyed it with all of you very much. We shared with each other, got to know each other, and discussed a lot of things in depth.']}),"\n",(0,t.jsx)(s.p,{children:"For the presentations, we gave a brief overview of Chaos Mesh, then delved into how Chaos Mesh is implemented and how it is practiced, and shared the team's latest explorations around chaos engineering and plans for Chaos Mesh's development."}),"\n",(0,t.jsx)(s.p,{children:"For Office Hour, we introduced the Chaos Mesh project and its latest progress, and answered online questions from attendees."}),"\n",(0,t.jsx)(s.p,{children:"Many thanks to each of our friends that came out to support us! And for Office Hour, we received some great questions and we decided to have a follow-up Q&A."}),"\n",(0,t.jsx)(s.h2,{id:"your-questions-answered",children:"Your questions answered"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Q: Does chaos play well with Windows/Linux hybrid clusters?"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"A:"})," Chaos Mesh can only work with Linux now, but we have kindly contributors who are trying to port some features to Windows: ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/issues/2956",children:"github.com/chaos-mesh/chaos-mesh/issues/2956"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Q: I think Istio and Linkerd also support fault injection. How does Chaos Mesh differ? Chaos Mesh provides much richer chaos injections (like IOChaos, TimeChaos...), but the injection provided by linked or istio, as I know, is focused on the network?"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"A:"})," Yeah of course! Service Mesh Frameworks have the potential to cause havoc in the RPC/Network layer. More types of chaos, such as stresschaos, pod kill, DNSChaos, and IOChaos, could be injected into Chaos Mesh (just mentioned) In addition to the list, we offer additional types of chaos. JVM, GCP, Azure, and so on..."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Q: As part of the chaos mesh can we run any pre-initialization scripts before introducing the chaos experiment?"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"A:"})," Yes! You may organize your customized scripts and various chaotic experiments together with Chaos Mesh's integrated Workflow engine. See ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org/docs/next/create-chaos-mesh-workflow/#task-field-description",children:"task field in workflow"})," for the document."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Q: Is this similar to the Gremlin Chaos engineering tool?"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"A:"})," Yes, this is a Kubernetes-specific open-source project. It's a Kubernetes plugin that you can utilize. You can get more Infos on ",(0,t.jsx)(s.a,{href:"https://chaos-mesh.org",children:"https://chaos-mesh.org"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Q: How does it inject network latency for network chaos? if we use cilium CNI with no iptables, would this latency injection still work in that case?"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"A:"})," Chaos Mesh has a chaos-daemon component. When network chaos is produced, chaos-daemon will enter the target pod's network namespace and set TC and iptables rules on the network device."]}),"\n",(0,t.jsx)(s.p,{children:"When using clium CNI without iptables, Chaos Mesh still works."}),"\n",(0,t.jsx)(s.h2,{id:"join-the-chaos-mesh-community",children:"Join the Chaos Mesh community"}),"\n",(0,t.jsxs)(s.p,{children:["If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",(0,t.jsx)(s.a,{href:"https://slack.cncf.io/",children:"our Slack channel"}),"(#project-chaos-mesh) or submit your pull requests or issues to our ",(0,t.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"GitHub repository"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},16814:(e,s,o)=>{o.d(s,{Z:()=>t});const t=o.p+"assets/images/chaos-mesh-q&a-5ee3460631a40ccb4ab675860e9bddd7.jpeg"},54881:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>a});var t=o(50959);const n={},h=t.createContext(n);function a(e){const s=t.useContext(h);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(h.Provider,{value:s},e.children)}}}]);