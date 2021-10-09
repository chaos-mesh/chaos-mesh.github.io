"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[1541],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=h(a),m=o,d=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},87839:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return u},toc:function(){return c},default:function(){return m}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={slug:"/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",author:"Hui Zhang @ Fuxi Lab, NetEase",image:"/img/fuxi-case-banner.jpg",tags:["Chaos Mesh","Chaos Engineering"]},l=void 0,h={permalink:"/zh/blog/how-a-top-game-company-uses-chaos-engineering-to-improve-testing",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",source:"@site/blog/2020-11-26-how-a-top-game-company-uses-chaos-engineering-to-improve-testing.md",title:"How a Top Game Company Uses Chaos Engineering to Improve Testing",description:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",date:"2020-11-26T00:00:00.000Z",formattedDate:"November 26, 2020",tags:[{label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"}],readingTime:3.765,truncated:!0,authors:[{name:"Hui Zhang @ Fuxi Lab, NetEase"}],prevItem:{title:"How to Simulate I/O Faults at Runtime",permalink:"/zh/blog/how-to-simulate-io-faults-at-runtime"},nextItem:{title:"Chaos Engineering - Breaking things Intentionally",permalink:"/zh/blog/chaos-engineering-breaking-things-intentionally"}},u={authorsImageUrls:[void 0]},c=[{value:"Why Chaos Mesh",id:"why-chaos-mesh",children:[]},{value:"Our journey with Chaos Mesh",id:"our-journey-with-chaos-mesh",children:[]},{value:"A fast-growing project",id:"a-fast-growing-project",children:[]},{value:"Looking forward",id:"looking-forward",children:[]}],p={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How-a-Top-Game-Company-Uses-Chaos-Engineering-to-Improve-Testing",src:a(14834).Z})),(0,i.kt)("p",null,"NetEase Fuxi AI Lab is China\u2019s first professional game AI research institution. Researchers use our Kubernetes-based Danlu platform for algorithm development, training and tuning, and online publishing. Thanks to the integration with Kubernetes, our platform is much more efficient. However, due to Kubernetes- and microservices-related issues, we are constantly testing and improving our platform to make it more stable."),(0,i.kt)("p",null,"In this article, I\u2019ll discuss one of our most valuable testing tools, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"Chaos Mesh"),". Chaos Mesh is an open-source Chaos Engineering tool that provides a wide range of fault injections and excellent fault monitoring through its Dashboard."),(0,i.kt)("h2",{id:"why-chaos-mesh"},"Why Chaos Mesh"),(0,i.kt)("p",null,"We started our search for a Chaos Engineering tool in 2018. We were looking for a tool with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cloud-native support. Kubernetes is practically the de facto standard for service orchestration and scheduling, and the application runtime has been fully standardized. For applications that run entirely on K8s, cloud-native support is a must for any tools that go with them.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sufficient fault injection types. For stateful services, network failure simulation is particularly important. The platform must be able to simulate failures at different levels, such as Pods, network, and I/O.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Good observability. Knowing when a fault is injected and when it can be recovered is vital for us to tell whether there is an abnormality in the application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Active community support. We want to use an open-source project that is thoroughly tested and consistently maintained. That\u2019s why we value sustained and timely community support.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No intrusion on existing applications, with no domain knowledge required.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Actual use cases for us to evaluate and build upon."))),(0,i.kt)("p",null,"In 2019, when Chaos Mesh, a Chaos Engineering platform for Kubernetes was open-sourced, we found the tool we were looking for. It was still in its early stage; however, we were immediately struck with the richness of fault types it supported. This was a big advantage over other chaos engineering tools, because, to a certain degree, it determines the number of issues that we can locate in the system. We instantly realized that Chaos Mesh met our expectations in almost every way."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chaos Mesh architecture",src:a(99326).Z})),(0,i.kt)("h2",{id:"our-journey-with-chaos-mesh"},"Our journey with Chaos Mesh"),(0,i.kt)("p",null,"Chaos Mesh has helped us find several important bugs. For example, it detected a brain-split issue in ",(0,i.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/"},"rabbitMQ"),", the open-source message-queueing software for Danlu. According to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Split-brain"},"Wikipedia"),", \u201ca split-brain condition indicates data or availability inconsistencies originating from the maintenance of two separate data sets with overlap in scope.\u201d When a rabbitMQ cluster has a brain split error, there will be data write conflicts or errors, which cause more serious problems such as data inconsistencies in the messaging service. As shown in our architecture below, when brain split happens, consumers do not function normally and keep reporting server exceptions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture of a RabbitMQ cluster",src:a(83075).Z})),(0,i.kt)("p",null,"With Chaos Mesh, we could stably reproduce this issue by injecting ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-kill")," faults into our container instances cloud."),(0,i.kt)("p",null,"Chaos Mesh also found several other issues including a startup failure, a join failure for crashed broker clusters, a heartbeat timeout, and a connection channel shutdown. Over time, our development team fixed these issues and greatly improved the stability of the Danlu platform."),(0,i.kt)("h2",{id:"a-fast-growing-project"},"A fast-growing project"),(0,i.kt)("p",null,"Chaos Mesh is constantly updated and improved. When we first adopted it, it hadn\u2019t even reached a stable version. It didn\u2019t have a debugging or log collection tool, and the Dashboard component only applied to TiDB. The only way we could use Chaos Mesh to test other applications was to execute the YAML configuration file via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/blog/chaos-mesh-1.0-chaos-engineering-on-kubernetes-made-easier"},"Chaos Mesh 1.0")," fixed or improved most of these limitations. It offers more fine-grained and powerful chaos support, a generally-available Chaos Dashboard, enhanced observability, and more accurate chaos scope control. These are all driven by an open, collaborative, and vibrant community."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chaos Dashboard is now generally available",src:a(50003).Z})),(0,i.kt)("h2",{id:"looking-forward"},"Looking forward"),(0,i.kt)("p",null,"It\u2019s amazing to see how much Chaos Mesh has grown and how much traction it\u2019s gaining. We\u2019re also happy with what we have achieved with it."),(0,i.kt)("p",null,"However, Chaos Engineering is a big area to work on. In the future, we\u2019d like to see the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Atomic fault injection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unattended fault inject that combines customized fault types with standardized methods to validate experimental objects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Standard test cases for general components such as MySQL, Redis, and Kafka"))),(0,i.kt)("p",null,"We\u2019ve discussed these features with those who maintain Chaos Mesh, and they said these features are on the Chaos Mesh 2.0 roadmap."),(0,i.kt)("p",null,"If you are interested, join the Chaos Mesh community via ",(0,i.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"Slack")," (#project-chaos-mesh) or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub"),"."))}m.isMDXComponent=!0},83075:function(e,t,a){t.Z=a.p+"assets/images/architecture-of-a-rabbitmq-cluster-dde2aba82a73d21c4cb35ab9035b844e.png"},50003:function(e,t,a){t.Z=a.p+"assets/images/chaos-dashboard-0a1e48c54968d276f174801a1364ce21.gif"},99326:function(e,t,a){t.Z=a.p+"assets/images/chaos-mesh-architecture-c61ce59a7a241d180a6156b8a6202f34.png"},14834:function(e,t,a){t.Z=a.p+"assets/images/fuxi-case-banner-533004456baeaec37f72c0d6aaed0f2b.jpg"}}]);