"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8859],{74893:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var t=n(76871),o=n(86070),a=n(8637);const i={slug:"/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier",title:"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier",authors:"chaos-mesh",image:"/img/blog/chaos-mesh-1.0.png",tags:["Chaos Mesh","Chaos Engineering","Announcement"]},r=void 0,h={authorsImageUrls:[void 0]},l=[{value:"Powerful chaos support",id:"powerful-chaos-support",level:2},{value:"Visual chaos orchestration",id:"visual-chaos-orchestration",level:2},{value:"Grafana plug-in for enhanced observability",id:"grafana-plug-in-for-enhanced-observability",level:2},{value:"Safe and controllable chaos",id:"safe-and-controllable-chaos",level:2},{value:"Try it out now",id:"try-it-out-now",level:2},{value:"Thanks",id:"thanks",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos-Mesh-1.0 - Chaos-Engineering-on-Kubernetes-Made-Easier",src:n(91571).A+"",width:"1600",height:"534"})}),"\n",(0,o.jsxs)(s.p,{children:["Today, we are proud to announce the general availability of Chaos Mesh 1.0, following its entry into CNCF as a ",(0,o.jsx)(s.a,{href:"https://pingcap.com/blog/announcing-chaos-mesh-as-a-cncf-sandbox-project",children:"sandbox project"})," in July, 2020."]}),"\n",(0,o.jsx)(s.p,{children:"Chaos Mesh 1.0 is a major milestone in the project\u2019s development. After 10 months of effort within the open-source community, Chaos Mesh is now ready in terms of functionality, scalability, and ease of use. Here are some highlights."}),"\n",(0,o.jsx)(s.h2,{id:"powerful-chaos-support",children:"Powerful chaos support"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://chaos-mesh.org",children:"Chaos Mesh"})," originated in the testing framework of ",(0,o.jsx)(s.a,{href:"https://pingcap.com/products/tidb",children:"TiDB"}),", a distributed database, so it takes into account the possible faults of a distributed system. Chaos Mesh provides comprehensive and fine-grained fault types, covering the Pod, the network, system I/O, and the kernel. Chaos experiments are defined in YAML, which is fast and easy to use."]}),"\n",(0,o.jsx)(s.p,{children:"Chaos Mesh 1.0 supports the following fault types:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"clock-skew: Simulates clock skew"}),"\n",(0,o.jsx)(s.li,{children:"container-kill: Simulates the container being killed"}),"\n",(0,o.jsx)(s.li,{children:"cpu-burn: Simulates CPU pressure"}),"\n",(0,o.jsx)(s.li,{children:"io-attribution-override: Simulates file exceptions"}),"\n",(0,o.jsx)(s.li,{children:"io-fault: Simulates file system I/O errors"}),"\n",(0,o.jsx)(s.li,{children:"io-latency: Simulates file system I/O latency"}),"\n",(0,o.jsx)(s.li,{children:"kernel-injection: Simulates kernel failures"}),"\n",(0,o.jsx)(s.li,{children:"memory-burn: Simulates memory pressure"}),"\n",(0,o.jsx)(s.li,{children:"network-corrupt: Simulates network packet corruption"}),"\n",(0,o.jsx)(s.li,{children:"network-duplication: Simulates network packet duplication"}),"\n",(0,o.jsx)(s.li,{children:"network-latency: Simulate network latency"}),"\n",(0,o.jsx)(s.li,{children:"network-loss: Simulates network loss"}),"\n",(0,o.jsx)(s.li,{children:"network-partition: Simulates network partition"}),"\n",(0,o.jsx)(s.li,{children:"pod-failure: Simulates continuous unavailability of Kubernetes Pods"}),"\n",(0,o.jsx)(s.li,{children:"pod-kill: Simulates the Kubernetes Pod being killed"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"visual-chaos-orchestration",children:"Visual chaos orchestration"}),"\n",(0,o.jsx)(s.p,{children:"The Chaos Dashboard component is a one-stop web interface for Chaos Mesh users to orchestrate chaos experiments. Previously, Chaos Dashboard was only available for testing TiDB. With Chaos Mesh 1.0, it is available to everyone. Chaos Dashboard greatly simplifies the complexity of chaos experiments. With only a few mouse clicks, you can define the scope of the chaos experiment, specify the type of chaos injection, define scheduling rules, and observe the results of the chaos experiment\u2014all in the same web interface."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos Dashboard",src:n(14217).A+"",width:"1920",height:"968"})}),"\n",(0,o.jsx)(s.h2,{id:"grafana-plug-in-for-enhanced-observability",children:"Grafana plug-in for enhanced observability"}),"\n",(0,o.jsx)(s.p,{children:"To further improve the observability of chaos experiments, Chaos Mesh 1.0 includes a Grafana plug-in to allow you to directly display real-time chaos experiment information on your application monitoring panel. Currently, the chaos experiment information is displayed as annotations. This way, you can simultaneously observe the running status of the application and the current chaos experiment information."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Chaos status and application status on Grafana",src:n(51766).A+"",width:"1600",height:"790"})}),"\n",(0,o.jsx)(s.h2,{id:"safe-and-controllable-chaos",children:"Safe and controllable chaos"}),"\n",(0,o.jsx)(s.p,{children:"When we conduct chaos experiments, it is vital that we keep strict control over the chaos scope or \u201cblast radius.\u201d Chaos Mesh 1.0 not only provides a wealth of selectors to accurately control the scope of the experiment, but it also enables you to set protected Namespaces to protect important applications. You can also use Namespace permissions to limit the scope of Chaos Mesh to a specific Namespace. Together, these features make chaos experiments with Chaos Mesh safe and controllable."}),"\n",(0,o.jsx)(s.h2,{id:"try-it-out-now",children:"Try it out now"}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["2022-10-24: Because of ",(0,o.jsx)(s.a,{href:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html",children:"https://www.oreilly.com/online-learning/leveraging-katacoda-technology.html"}),", and refer to ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/website/pull/356",children:"#356"}),", the interactive tutorial is temporarily unavailable."]})}),"\n",(0,o.jsxs)(s.p,{children:["You can quickly deploy Chaos Mesh in your Kubernetes environment through the ",(0,o.jsx)(s.code,{children:"install.sh"})," script or the Helm tool. For specific installation steps, please refer to the ",(0,o.jsx)(s.a,{href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/user_guides/installation",children:"Chaos Mesh Getting Started"})," document. In addition, thanks to the ",(0,o.jsx)(s.code,{children:"Katakoda interactive tutorial"}),", you can also quickly get your hands on Chaos Mesh without having to deploy it."]}),"\n",(0,o.jsxs)(s.p,{children:["If you haven\u2019t upgraded to 1.0 GA, please refer to the ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/releases/tag/v1.0.0",children:"1.0 Release Notes"})," for the changes and upgrade guidelines."]}),"\n",(0,o.jsx)(s.h2,{id:"thanks",children:"Thanks"}),"\n",(0,o.jsxs)(s.p,{children:["Thanks to all our Chaos Mesh ",(0,o.jsx)(s.a,{href:"https://github.com/chaos-mesh/chaos-mesh/graphs/contributors",children:"contributors"}),"!"]}),"\n",(0,o.jsx)(s.p,{children:"If you are interested in Chaos Mesh, you\u2019re welcome to join us by submitting issues, or contributing code, documentation, or articles. We look forward to your participation and feedback!"})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},14217:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-dashboard-0a1e48c54968d276f174801a1364ce21.gif"},91571:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-mesh-1.0-22c3415bc75bde8501087d6c7c154cd5.png"},51766:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/chaos-status-460b054f3e2ee0898d2236a5137bc30e.png"},8637:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(30758);const o={},a=t.createContext(o);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}},76871:e=>{e.exports=JSON.parse('{"permalink":"/zh/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier","editUrl":"https://github.com/chaos-mesh/website/edit/master/blog/2020-9-25-chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier.md","source":"@site/blog/2020-9-25-chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier.md","title":"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier","description":"Chaos-Mesh-1.0 - Chaos-Engineering-on-Kubernetes-Made-Easier","date":"2020-09-25T00:00:00.000Z","tags":[{"inline":true,"label":"Chaos Mesh","permalink":"/zh/blog/tags/chaos-mesh"},{"inline":true,"label":"Chaos Engineering","permalink":"/zh/blog/tags/chaos-engineering"},{"inline":true,"label":"Announcement","permalink":"/zh/blog/tags/announcement"}],"readingTime":2.99,"hasTruncateMarker":true,"authors":[{"name":"Chaos Mesh Authors","title":"All maintainers of Chaos Mesh","url":"https://github.com/chaos-mesh","socials":{"x":"https://x.com/chaos_mesh"},"imageURL":"https://avatars.githubusercontent.com/u/59082378?v=4","key":"chaos-mesh","page":null}],"frontMatter":{"slug":"/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier","title":"Chaos Mesh 1.0: Chaos Engineering on Kubernetes Made Easier","authors":"chaos-mesh","image":"/img/blog/chaos-mesh-1.0.png","tags":["Chaos Mesh","Chaos Engineering","Announcement"]},"unlisted":false,"prevItem":{"title":"Chaos Mesh X Hacktoberfest 2020 - An Invitation to Open Source","permalink":"/zh/blog/chaos-mesh-x-hacktoberfest-2020"},"nextItem":{"title":"chaos-mesh-action: Integrate Chaos Engineering into Your CI","permalink":"/zh/blog/chaos-mesh-action-integrate-chaos-engineering-into-your-ci"}}')}}]);