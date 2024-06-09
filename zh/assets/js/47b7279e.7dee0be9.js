"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[9670],{83142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(13274),s=n(90073);const o={slug:"/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/clock-sync-chaos-engineering-k8s.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes","Distributed System"]},a=void 0,r={permalink:"/zh/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",editUrl:"https://github.com/chaos-mesh/website/edit/master/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",source:"@site/blog/2020-04-20-simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node.md",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",description:"Clock synchronization in distributed system",date:"2020-04-20T00:00:00.000Z",tags:[{inline:!0,label:"Chaos Mesh",permalink:"/zh/blog/tags/chaos-mesh"},{inline:!0,label:"Chaos Engineering",permalink:"/zh/blog/tags/chaos-engineering"},{inline:!0,label:"Kubernetes",permalink:"/zh/blog/tags/kubernetes"},{inline:!0,label:"Distributed System",permalink:"/zh/blog/tags/distributed-system"}],readingTime:8.43,hasTruncateMarker:!0,authors:[{name:"Cwen Yin",title:"Maintainer of Chaos Mesh",url:"https://github.com/cwen0",imageURL:"https://avatars1.githubusercontent.com/u/22956341?v=4"}],frontMatter:{slug:"/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",title:"Simulating Clock Skew in K8s Without Affecting Other Containers on the Node",author:"Cwen Yin",author_title:"Maintainer of Chaos Mesh",author_url:"https://github.com/cwen0",author_image_url:"https://avatars1.githubusercontent.com/u/22956341?v=4",image:"/img/blog/clock-sync-chaos-engineering-k8s.jpg",tags:["Chaos Mesh","Chaos Engineering","Kubernetes","Distributed System"]},unlisted:!1,prevItem:{title:"Chaos Mesh Joins CNCF as a Sandbox Project",permalink:"/zh/blog/chaos-mesh-join-cncf-sandbox-project"},nextItem:{title:"Run Your First Chaos Experiment in 10 Minutes",permalink:"/zh/blog/run_your_first_chaos_experiment"}},h={authorsImageUrls:[void 0]},c=[];function l(e){const t={a:"a",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Clock synchronization in distributed system",src:n(46386).A+"",width:"2000",height:"667"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/chaos-mesh/chaos-mesh",children:"Chaos Mesh"}),", an easy-to-use, open-source, cloud-native chaos engineering platform for Kubernetes (K8s), has a new feature, TimeChaos, which simulates the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Clock_skew#On_a_network",children:"clock skew"})," phenomenon. Usually, when we modify clocks in a container, we want a ",(0,i.jsx)(t.a,{href:"https://learning.oreilly.com/library/view/chaos-engineering/9781491988459/ch07.html",children:"minimized blast radius"}),", and we don't want the change to affect the other containers on the node. In reality, however, implementing this can be harder than you think. How does Chaos Mesh solve this problem?"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},46386:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/clock-sync-chaos-engineering-k8s-05986b97ada98f9cf1cabda6a8855c86.jpg"},90073:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(79474);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);