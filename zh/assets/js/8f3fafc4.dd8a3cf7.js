"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6581],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var h=a.createContext({}),c=function(e){var t=a.useContext(h),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,h=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(o),m=n,d=l["".concat(h,".").concat(m)]||l[m]||p[m]||s;return o?a.createElement(d,r(r({ref:t},u),{},{components:o})):a.createElement(d,r({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=l;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<s;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}l.displayName="MDXCreateElement"},10126:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const s={slug:"/chaos-mesh-q&a",title:"Chaos Mesh Q&A",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},r=void 0,i={permalink:"/zh/blog/chaos-mesh-q&a",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-07-09-chaos-mesh-q&a.md",source:"@site/blog/2021-07-09-chaos-mesh-q&a.md",title:"Chaos Mesh Q&A",description:"Chaos Mesh Q&A",date:"2021-07-09T00:00:00.000Z",formattedDate:"2021\u5e747\u67089\u65e5",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"}],readingTime:3.035,hasTruncateMarker:!0,authors:[{name:"Chaos Mesh Community",url:"https://github.com/chaos-mesh",imageURL:"https://avatars1.githubusercontent.com/u/59082378?v=4"}],frontMatter:{slug:"/chaos-mesh-q&a",title:"Chaos Mesh Q&A",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/blog/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},prevItem:{title:"Chaos Mesh Celebrates 100th Contributor",permalink:"/zh/blog/chaos-mesh-celebrates-100th-contributor"},nextItem:{title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh",permalink:"/zh/blog/securing-tenant-namespaces-using-restrict-authorization-feature"}},h={authorsImageUrls:[void 0]},c=[{value:"Your questions answered",id:"your-questions-answered",level:2},{value:"Join the Chaos Mesh community",id:"join-the-chaos-mesh-community",level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaos Mesh Q&amp;A",src:o(61873).Z,width:"3126",height:"1043"})),(0,n.kt)("p",null,"At KubeCon EU 2021, the ",(0,n.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"Chaos Mesh")," team hosted two \u201coffice hours sessions\u201d where newcomers, community members, and project maintainers had a chance to chat, get to know each other, and learn more about the project."),(0,n.kt)("p",null,"Big thanks to the more than 200 of you who joined us! We received so many great questions during the session, we thought we\u2019d do a round up Q&A."),(0,n.kt)("h2",{id:"your-questions-answered"},"Your questions answered"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: Is Chaos Mesh compatible with Service Meshes, such as Istio?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," Yes, you can use Chaos Mesh in the Service Mesh environment. At one of our ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=paIgJYOhdGw"},"previous community meetings"),", Sergio M\xe9ndez and Jossie Castrillo from the University of San Carlos of Guatemala shared how they used Linkerd and Chaos Mesh to conduct chaos experiments for their project, \u201c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sergioarmgpl/operating-systems-usac-course/blob/master/lang/en/projects/project1v3/project1.md"},"COVID-19 Realtime Vaccinated People Visualizer"),"\u201d."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project Architecture",src:o(4208).Z,width:"2554",height:"1434"})),(0,n.kt)("p",{className:"caption-center"},"Project Architecture"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: Can I use Chaos Mesh on-premises or do I need Amazon Web Services (AWS) or Google Cloud Platform (GCP)?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," You can do either! You can deploy Chaos Mesh on your Kubernetes cluster, so it does not matter whether you manage it yourself or have it hosted on AWS or GCP. However, if you would like to use it in a Kubernetes environment, you need to ",(0,n.kt)("a",{parentName:"p",href:"https://chaos-mesh-website-archived.netlify.app/docs/1.2.4/user_guides/installation"},"set relevant parameters")," during installation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Q: How do "chaos actions" work?')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," Chaos Mesh uses Kubernetes CustomResourceDefinitions (CRDs) to manage chaos experiments. Different fault injection behaviors are implemented in different ways, but the overall idea is the same: Chaos Mesh uses an application's execution link to inject chaos into the application. For example, when we inject chaos into the overall link of network interaction, the network interaction card is passed through. Because Linux uses traffic control to increase interference to the specific network interaction card, we can directly use traffic control for network fault injection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: Are you going to add probe support to Chaos Mesh for steady state detection and experiment validation?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," Currently, there is no plan to add this support. Steady state detection and experiment validation are necessary if an application is ready for production. Chaos Mesh itself does not monitor related work, but provides an interface to access existing monitoring systems or the status interface of the application to monitor and detect the application\u2019s steady state."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: What elevated privileges do the Chaos Mesh pods need?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," By default, the Chaos Daemon components in Chaos Mesh run in the ",(0,n.kt)("inlineCode",{parentName:"p"},"privileged")," mode. If your Kubernetes cluster version is v3.11 or higher, you can replace ",(0,n.kt)("inlineCode",{parentName:"p"},"privileged")," mode by configuring ",(0,n.kt)("inlineCode",{parentName:"p"},"capabilities"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: Can I implement Chaos Mesh inside build pipelines to log specific test results?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," Yes, that\u2019s easy to do. You can integrate Chaos Mesh with pipeline systems such as Argo, Jenkins, GitHub Action, and Spanner. Chaos Mesh uses Kubernetes CRDs to manage chaos experiments. To inject chaos, you only need to create the chaos CRD object you want in the pipeline. You can obtain the running status of an experiment through its status structure and event."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: What can we expect from the 2.0 release? Can you share some updates on HTTPChaos?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," Chaos Mesh 2.0 will provide native workflow support, and users can arrange chaos experiments in Chaos Mesh. In addition, for Chaos Mesh 2.0, we have reconstructed the existing chaos controller so that users can more easily add new fault injection types. As for HTTPChaos, we\u2019re adding network failure simulation to the HTTP application layer!"),(0,n.kt)("h2",{id:"join-the-chaos-mesh-community"},"Join the Chaos Mesh community"),(0,n.kt)("p",null,"If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",(0,n.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"our Slack channel")," or submit your pull requests or issues to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}p.isMDXComponent=!0},4208:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/chaos-mesh-linkerd-architecture-5fca7bb217df34ff1bc30abc5502bdd4.png"},61873:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/chaos-mesh-q&a-5ee3460631a40ccb4ab675860e9bddd7.jpeg"}}]);