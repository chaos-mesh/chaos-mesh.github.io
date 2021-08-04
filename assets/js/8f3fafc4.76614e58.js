"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[6581],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return n?o.createElement(d,s(s({ref:t},h),{},{components:n})):o.createElement(d,s({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},19970:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),s={slug:"/chaos-mesh-q&a",title:"Chaos Mesh\xae Q&A",author:"Chaos Mesh Community",author_url:"https://github.com/chaos-mesh",author_image_url:"https://avatars1.githubusercontent.com/u/59082378?v=4",image:"/img/chaos-mesh-q&a.jpeg",tags:["Chaos Mesh","Chaos Engineering"]},i=void 0,c={permalink:"/blog/chaos-mesh-q&a",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2021-07-09-chaos-mesh-q&a.md",source:"@site/blog/2021-07-09-chaos-mesh-q&a.md",title:"Chaos Mesh\xae Q&A",description:"Chaos Mesh Q&A",date:"2021-07-09T00:00:00.000Z",formattedDate:"July 9, 2021",tags:[{label:"Chaos Mesh",permalink:"/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/blog/tags/chaos-engineering"}],readingTime:3.05,truncated:!0,nextItem:{title:"Securing tenant namespaces using restrict authorization feature in Chaos Mesh\xae",permalink:"/blog/securing-tenant-namespaces-using-restrict-authorization-feature"}},u=[{value:"Your questions answered",id:"your-questions-answered",children:[]},{value:"Join the Chaos Mesh community",id:"join-the-chaos-mesh-community",children:[]}],h={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chaos Mesh Q&amp;A",src:n(91546).Z})),(0,a.kt)("p",null,"At KubeCon EU 2021, the ",(0,a.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/"},"Chaos Mesh")," team hosted two \u201coffice hours sessions\u201d where newcomers, community members, and project maintainers had a chance to chat, get to know each other, and learn more about the project. "),(0,a.kt)("p",null,"Big thanks to the more than 200 of you who joined us! We received so many great questions during the session, we thought we\u2019d do a round up Q&A."),(0,a.kt)("h2",{id:"your-questions-answered"},"Your questions answered"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Is Chaos Mesh compatible with Service Meshes, such as Istio?")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes, you can use Chaos Mesh in the Service Mesh environment. At one of our ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=paIgJYOhdGw"},"previous community meetings"),", Sergio M\xe9ndez and Jossie Castrillo from the University of San Carlos of Guatemala shared how they used Linkerd and Chaos Mesh to conduct chaos experiments for their project, \u201c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sergioarmgpl/operating-systems-usac-course/blob/master/lang/en/projects/project1v3/project1.md"},"COVID-19 Realtime Vaccinated People Visualizer"),"\u201d."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Architecture",src:n(89941).Z})),(0,a.kt)("div",{class:"caption-center"}," Project Architecture "),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Can I use Chaos Mesh on-premises or do I need Amazon Web Services (AWS) or Google Cloud Platform (GCP)?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," You can do either! You can deploy Chaos Mesh on your Kubernetes cluster, so it does not matter whether you manage it yourself or have it hosted on AWS or GCP. However, if you would like to use it in a Kubernetes environment, you need to ",(0,a.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/user_guides/installation"},"set relevant parameters")," during installation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Q: How do "chaos actions" work?')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Chaos Mesh uses Kubernetes CustomResourceDefinitions (CRDs) to manage chaos experiments. Different fault injection behaviors are implemented in different ways, but the overall idea is the same: Chaos Mesh uses an application's execution link to inject chaos into the application. For example, when we inject chaos into the overall link of network interaction, the network interaction card is passed through. Because Linux uses traffic control to increase interference to the specific network interaction card, we can directly use traffic control for network fault injection."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Are you going to add probe support to Chaos Mesh for steady state detection and experiment validation?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:"),"  Currently, there is no plan to add this support. Steady state detection and experiment validation are necessary if an application is ready for production. Chaos Mesh itself does not monitor related work, but provides an interface to access existing monitoring systems or the status interface of the application to monitor and detect the application\u2019s steady state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: What elevated privileges do the Chaos Mesh pods need?")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," By default, the Chaos Daemon components in Chaos Mesh run in the ",(0,a.kt)("inlineCode",{parentName:"p"},"privileged")," mode. If your Kubernetes cluster version is v3.11 or higher, you can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"privileged")," mode by configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"capabilities"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Can I implement Chaos Mesh inside build pipelines to log specific test results?")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes, that\u2019s easy to do. You can integrate Chaos Mesh with pipeline systems such as Argo, Jenkins, GitHub Action, and Spanner. Chaos Mesh uses Kubernetes CRDs to manage chaos experiments. To inject chaos, you only need to create the chaos CRD object you want in the pipeline. You can obtain the running status of an experiment through its status structure and event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: What can we expect from the 2.0 release? Can you share some updates on HTTPChaos?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Chaos Mesh 2.0 will provide native workflow support, and users can arrange chaos experiments in Chaos Mesh. In addition, for Chaos Mesh 2.0, we have reconstructed the existing chaos controller so that users can more easily add new fault injection types. As for HTTPChaos, we\u2019re adding network failure simulation to the HTTP application layer!"),(0,a.kt)("h2",{id:"join-the-chaos-mesh-community"},"Join the Chaos Mesh community"),(0,a.kt)("p",null,"If you are interested in Chaos Mesh and would like to help us improve it, you're welcome to join ",(0,a.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"our Slack channel")," or submit your pull requests or issues to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}p.isMDXComponent=!0},89941:function(e,t,n){t.Z=n.p+"assets/images/chaos-mesh-linkerd-architecture-5fca7bb217df34ff1bc30abc5502bdd4.png"},91546:function(e,t,n){t.Z=n.p+"assets/images/chaos-mesh-q&a-5ee3460631a40ccb4ab675860e9bddd7.jpeg"}}]);